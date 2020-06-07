/* global NAF */

import { Client as ColyseusClient } from "colyseus.js";
import { Client as IonClient, LocalStream } from "ion-sdk-js";

const IonState = {
    CLOSED: 0,
    OPEN: 1,
    JOINED: 2,
    FAILED: -1
}

export default class ColyseusIonAdapter {
    constructor() {
        this.app = "default";
        this.roomName = "hubs";
        this.room = null;
        this.roomData = null;
        this.userData = null;

        this.players = {};
        this.streams = null;
        this.pendingStreamRequests = null;

        this.timeOffsets = [];
        this.serverTimeRequests = 0;
        this.avgTimeOffset = 0;

        this.blockedClients = new Map();
        this.frozenUpdates = new Map();

        this.options = {
            createRoom: true,
            useIon: true,
            startLocalStream: false,
            mediaOptions: {
                audio: true,
                video: false,
                selectedAudioDevice: "",
                selectedVideoDevice: "",
                resolution: "vga",
                bandwidth: 1024,
                codec: "VP9"
            }
        };
    }

    setServerUrl(serverUrls) {
        this.colyseusUrl = serverUrls[0];
        this.ionUrl = serverUrls[1];
    }

    setApp(appName) {
        this.app = appName;
    }

    setRoom(roomName) {
        this.roomName = roomName;
    }

    setOptions(options) {
        this.options = Object.assign(this.options, options);
    }

    setWebRtcOptions(options) {
        this.options.mediaOptions = Object.assign(this.options.mediaOptions, options);
    }

    setServerConnectListeners(successListener, failureListener) {
        this.connectSuccess = successListener;
        this.connectFailure = failureListener;
    }

    setRoomOccupantListener(occupantListener) {
        this.occupantListener = occupantListener;
    }

    setDataChannelListeners(openListener, closedListener, messageListener) {
        this.openListener = openListener;
        this.closedListener = closedListener;
        this.messageListener = messageListener;
    }

    connect() {
        if (!this.colyseusUrl || this.colyseusUrl === "/") {
            if (location.protocol === "https:") {
                this.colyseusUrl = "wss://" + location.host + ':2567';
                this.ionUrl = "wss://" + location.host + ':8443';
            } else {
                this.colyseusUrl = "ws://" + location.host + ':2567';
                this.ionUrl = "ws://" + location.host + ':8443';
            }
        }

        NAF.log.write("Attempting to connect to colyseus");
        const colyseusConnection = new Promise((resolve, reject) => {
            this.colyseus = new ColyseusClient(this.colyseusUrl);
            this.joinRoom()
                .then(resolve)
                .catch(reject);
        });
        if (this.options.useIon) {
            colyseusConnection.then(() => {
                const config = {
                    url: this.ionUrl,
                    loglevel: "trace"
                }
                this.ion = new IonClient(config);
                this.ion.on("transport-open", this.onIonOpen.bind(this));
                this.ion.on("transport-closed", this.onIonClosed.bind(this));
                this.streams = {};
                this.pendingStreamRequests = {};
            });
        }
        return Promise.all([colyseusConnection, this.updateTimeOffset()]);
    }

    joinRoom(options) {
        NAF.log.write("Joining room", this.roomName);
        if (this.options.createRoom) {
            return this.colyseus.joinOrCreate(this.roomName, options)
                .then(this.onJoin.bind(this))
                .catch(this.onJoinError.bind(this));
        }
        else {
            return this.colyseus.join(this.roomName, options)
                .then(this.onJoin.bind(this))
                .catch(this.onJoinError.bind(this));
        }
    }

    onJoin(room) {
        this.room = room;
        room.onMessage("roomData", this.onRoomData.bind(this));
        room.onMessage("userData", this.onUserData.bind(this));
        room.onMessage("naf", this.onNaf.bind(this));
        room.onMessage("chat", this.onChat.bind(this));
        room.onStateChange.once(this.onInitialState.bind(this));
        room.onStateChange(this.onStateChange.bind(this));
        if (room.state.players) {
            this.players[this.sessionId] = {};
            room.state.players.onAdd = this.onAddPlayer.bind(this);
            room.state.players.onRemove = this.onRemovePlayer.bind(this);
        }
        if (this.ionState >= IonState.OPEN) {
            this.joinIon();
        }
    }

    onJoinError(err) {
        this.connectFailure();
        const detail = { reason: "join_denied" };
        document.body.dispatchEvent(new CustomEvent("connect_error", { detail }));
    }

    get sessionId() {
        return this.room.sessionId;
    }

    get player() {
        this.players[this.sessionId];
    }

    get scene() {
        return this.roomData.scene;
    }

    get sceneId() {
        return this.roomData.scene.scene_id;
    }

    onRoomData(data) {
        this.roomData = data;
        if (this.connectSuccess) {
            this.connectSuccess(this.sessionId);
        }
    }

    onUserData(data) {
        this.userData = data;
    }

    getAvatar(avatarId) {
        const avatars = this.roomData.avatars.entries;
        for (let i=0; i<avatars.length; i++) {
            if (avatars[i].id === avatarId) {
                return avatars[i];
            }
        }
    }

    getAvatarSrc(avatarId) {
        const avatar = this.getAvatar(avatarId);
        return avatar && avatar.gltfs && avatar.gltfs.avatar;
    }

    getScene(sceneId) {
        const scenes = this.roomData.scenes.entries;
        for (let i=0; i<scenes.length; i++) {
            if (scenes[i].id === sceneId) {
                return scenes[i];
            }
        }
    }

    checkSameScene(presence) {
        return (this.roomData &&
            (this.roomData.scene.scene_id === presence.sceneId ||
                (this.roomData.scene.scene_id === this.roomData.scenes.entries[0].id && presence.sceneId === "lobby")));
    }

    updateScene(sceneId) {
        if (sceneId === this.roomData.scene.scene_id) return;
        const scene = this.getScene(sceneId);
        if (scene) {
            Object.keys(scene).forEach(key => this.roomData.scene[key] = scene[key]);
            this.roomData.scene.model_url = scene.url;
            this.roomData.scene.scene_id = scene.id;
            this.roomData.scene.objects_url = scene.objects_url;
            document.body.dispatchEvent(new CustomEvent("change_scene"))
        }
    }

    canEnterRoom(hub) {
        if (!hub) return false;

        const roomEntrySlotCount = Object.values(this.players).reduce((acc, { presence }) => {
            const usingSlot = presence.presence === "room" || presence.entering;
            return acc + (usingSlot ? 1 : 0);
        }, 0);

        // This now exists in room settings but a default is left here to support old reticulum servers
        const DEFAULT_ROOM_SIZE = 24;
        return roomEntrySlotCount < (hub.room_size !== undefined ? hub.room_size : DEFAULT_ROOM_SIZE);
    }

    onNaf(data) {
        this.onData(data.sessionId, data.type, data.data);
    }

    onChat(data) {
        const detail = { sessionId: data.sessionId, message: data.message, from: data.from };
        document.body.dispatchEvent(new CustomEvent("chat", { detail }))
    }

    onData(sessionId, type, data, from) {
        if (this.frozen) {
            this.storeMessage(message);
        }
        else {
            this.messageListener(sessionId, type, data, from);
        }
    }

    sendChatMsg(message) {
        this.room.send("chat", message);
    }

    onInitialState(state) {
        //this.messageListener(null, 'state', state);
        this.state = state;
    }

    onStateChange(state) {
        //this.messageListener(null, 'state', state);
    }

    onAddPlayer(player, sessionId) {
        this.players[sessionId] = player;
        player.onChange = (changes) => {
            changes.forEach(change => {
                switch (change.field) {
                    case "profile":
                        this.onChangeProfile(change.value, change.previousValue, sessionId);
                        break;
                    case 'presence':
                        this.onChangePresence(change.value, change.previousValue, sessionId);
                        break;
                }
            });
        };
        if (sessionId === this.sessionId || this.checkSameScene(player.presence)) {
            this.openListener(sessionId);
        }
        if (this.occupantListener) {
            this.occupantListener(this.players);
        }
        if (sessionId === this.sessionId) {
            player.profile.displayName = window.APP.store.state.profile.displayName;
            this.update({ profile: { displayName: player.profile.displayName } });
        }
        const detail = { sessionId, player };
        document.body.dispatchEvent(new CustomEvent("player_added", { detail }));
    }

    onRemovePlayer(player, sessionId) {
        this.players[sessionId].onChange = void 0;
        delete this.players[sessionId];
        this.closedListener(sessionId);
        if (this.occupantListener) {
            this.occupantListener(this.players);
        }
        const detail = { sessionId, player };
        document.body.dispatchEvent(new CustomEvent("player_removed", { detail }));
    }

    onChangeProfile(profile, prevProfile, sessionId) {
        const detail = { sessionId,  profile, previous: prevProfile };
        document.body.dispatchEvent(new CustomEvent("profile_updated", { detail }));
    }

    onChangePresence(presence, prevPresence, sessionId) {
        if (sessionId === this.sessionId) {
            for (let sid in this.players) {
                if (sid === sessionId) continue;
                if (this.checkSameScene(this.players[sid].presence)) {
                    this.openListener(sid);
                }
                else {
                    this.closedListener(sid);
                }
            }
        }
        else {
            if (this.checkSameScene(presence)) {
                this.openListener(sessionId);
            }
            else {
                this.closedListener(sessionId);
            }
        }
        const detail = { sessionId, presence, previous: prevPresence };
        document.body.dispatchEvent(new CustomEvent("presence_updated", { detail }));
    }

    update(data) {
        this.room.send('update', data);
    }

    sendEntering() {
        this.update({ presence: { entering: true } });
    }

    sendEnteringCancelled() {
        this.update({ presence: { entering: false } });
    }

    sendEntered() {
        const presence = {
            presence: "room",
            sceneId: this.roomData.scene.scene_id,
            entering: false
        };
        this.update({ presence: presence });
    }

    sendObjectSpawned(type) {

    }

    pin(gltfNode) {
        this.room.send('pin', gltfNode);
    }

    onIonOpen() {
        this.ionState = IonState.OPEN;
        if (this.options.startLocalStream) {
            this.startLocalStream();
        }
        //if (this.userData) {
            this.joinIon();
        //}
    }

    onIonClosed() {
        this.ionState = IonState.CLOSED;
    }

    async joinIon() {
        this.ion.on("peer-join", this.onPeerJoin.bind(this));
        this.ion.on("peer-leave", this.onPeerLeave.bind(this));
        this.ion.on("stream-add", this.onStreamAdd.bind(this));
        this.ion.on("stream-remove", this.onStreamRemove.bind(this));
        this.ion.on("broadcast", this.onBroadcast.bind(this));
        // todo: should use a JWT returned by Colyseus
        await this.ion.join(this.room.id, {
            // todo: fix
            // name: this.userData && this.userData.name || "Anonymous",
            // sessionId: this.room.sessionId
            name: this.sessionId
        });
        this.ionState = IonState.JOINED;
        if (this.localStream) {
            this.ion.publish(this.localStream);
        }
    }

    onPeerJoin(uid, info) {
        NAF.log.write("Peer join ", uid, info);
    }

    onPeerLeave(uid) {
        NAF.log.write("Peer leave ", uid);
    }

    async onStreamAdd(mid, info) {
        if (this.ion) {
            await this.subscribe(mid, info);
        }
    }

    onStreamRemove(stream) {

    }

    onBroadcast(rid, mid, info) {
        NAF.log.write("Ion broadcast ", rid, mid, info);
    }

    async subscribe(mid, info) {
        const sessionId = info.name;
        const stream = await this.ion.subscribe(mid);
        stream.info = info;
        this.setMediaStream(sessionId, stream);
    }

    async unsubscribe(stream) {
        const sessionId = stream.info.name;
        await stream.unsubscribe();
        delete this.streams[sessionId];
    }

    shouldStartConnectionTo(client) {
        return false;
    }

    getConnectStatus(sessionId) {
        const connected = this.streams[sessionId];
        if (connected) {
            return NAF.adapters.IS_CONNECTED;
        } else {
            return NAF.adapters.NOT_CONNECTED;
        }
    }

    sendData(to, type, data) {
        this.sendDataGuaranteed(to, type, data);
    }

    sendDataGuaranteed(to, type, data) {
        if (this.room) {
            this.room.send("naf", { to, type, data });
        } else {
            NAF.log.warn('Room not joined yet');
        }
    }

    broadcastData(type, data) {
        this.broadcastDataGuaranteed(type, data);
    }

    broadcastDataGuaranteed(type, data) {
        if (this.room) {
            this.room.send("naf", { type, data });
        } else {
            NAF.log.warn('Room not joined yet');
        }
    }

    getMediaStream(sessionId, type = "audio") {
        if (this.streams[sessionId]) {
            NAF.log.write(`Already had ${type} for ${sessionId}`);
            return Promise.resolve(this.streams[sessionId][type]);
        } else {
            NAF.log.write(`Waiting on ${type} for ${sessionId}`);
            if (!this.pendingStreamRequests[sessionId]) {
                this.pendingStreamRequests[sessionId] = {};

                const audioPromise = new Promise((resolve, reject) => {
                    this.pendingStreamRequests[sessionId].audio = { resolve, reject };
                });
                const videoPromise = new Promise((resolve, reject) => {
                    this.pendingStreamRequests[sessionId].video = { resolve, reject };
                });

                this.pendingStreamRequests[sessionId].audio.promise = audioPromise;
                this.pendingStreamRequests[sessionId].video.promise = videoPromise;

                audioPromise.catch(e => console.warn(`${sessionId} getMediaStream Audio Error`, e));
                videoPromise.catch(e => console.warn(`${sessionId} getMediaStream Video Error`, e));
            }
            return this.pendingStreamRequests[sessionId][type].promise;
        }
    }

    setMediaStream(sessionId, stream) {
        if (stream) {
            const audioStream = new MediaStream();
            try {
                stream.getAudioTracks().forEach(track => audioStream.addTrack(track));
            }
            catch(e) {
                NAF.log.write(`${sessionId} setMediaStream Audio Error`, e);
            }
            const videoStream = new MediaStream();
            try {
                stream.getVideoTracks().forEach(track => videoStream.addTrack(track));
            }
            catch (e) {
                NAF.log.write(`${sessionId} setMediaStream Video Error`, e);
            }
            this.streams[sessionId] = { audio: audioStream, video: videoStream };
            if (this.pendingStreamRequests[sessionId]) {
                this.pendingStreamRequests[sessionId].audio.resolve(audioStream);
                this.pendingStreamRequests[sessionId].video.resolve(videoStream);
                delete this.pendingStreamRequests[sessionId];
            }
        }
        else {
            delete this.streams[sessionId];
        }
        const detail = { stream, sessionId };
        document.body.dispatchEvent(new CustomEvent('set_media_stream', { detail }));
    }

    async setLocalMediaStream(stream) {
        if (this.localStream) {
            let tracks = this.localStream.getTracks();
            for (let i = 0, len = tracks.length; i < len; i++) {
                await tracks[i].stop();
            }
            await this.localStream.unpublish();
        }
        if (stream) {
            if (!(stream instanceof LocalStream)) {
                stream = new LocalStream(stream, this.options.mediaOptions);
            }
        }
        this.localStream = stream;
        this.setMediaStream(this.sessionId, this.localStream);
        if (this.localStream && this.ionState >= IonState.JOINED) {
            await this.ion.publish(this.localStream);
        }
    }

    async startLocalStream() {
        await this.setLocalMediaStream(null);
        await this.setLocalMediaStream(await LocalStream.getUserMedia(this.options.mediaOptions));
    }

    enableMicrophone(enabled) {
        if (this.localStream) {
            if (enabled) {
                this.localStream.unmute("audio");
            }
            else {
                this.localStream.mute("audio");
            }
        }
    }

    toggleFreeze() {
        if (this.frozen) {
            this.unfreeze();
        } else {
            this.freeze();
        }
    }

    freeze() {
        this.frozen = true;
    }

    unfreeze() {
        this.frozen = false;
        this.flushPendingUpdates();
    }

    flushPendingUpdates() {
        for (const [networkId, message] of this.frozenUpdates) {
            let data = this.getPendingData(networkId, message);
            if (!data) continue;

            // Override the data type on "um" messages types, since we extract entity updates from "um" messages into
            // individual frozenUpdates in storeSingleMessage.
            const dataType = message.dataType === "um" ? "u" : message.dataType;

            this.messageListener(null, dataType, data, message.source);
        }
        this.frozenUpdates.clear();
    }

    getPendingData(networkId, message) {
        if (!message) return null;

        let data = message.dataType === "um" ? this.dataForUpdateMultiMessage(networkId, message) : message.data;

        // Ignore messages relating to users who have disconnected since freezing, their entities
        // will have aleady been removed by NAF.
        // Note that delete messages have no "owner" so we have to check for that as well.
        if (data.owner && !this.players[data.owner]) return null;

        // Ignore messages from users that we may have blocked while frozen.
        if (data.owner && this.blockedClients.has(data.owner)) return null;

        return data
    }

    storeMessage(message) {
        if (message.dataType === "um") { // UpdateMulti
            for (let i = 0, l = message.data.d.length; i < l; i++) {
                this.storeSingleMessage(message, i);
            }
        } else {
            this.storeSingleMessage(message);
        }
    }

    storeSingleMessage(message, index) {
        const data = index !== undefined ? message.data.d[index] : message.data;
        const dataType = message.dataType;
        const source = message.source;

        const networkId = data.networkId;

        if (!this.frozenUpdates.has(networkId)) {
            this.frozenUpdates.set(networkId, message);
        } else {
            const storedMessage = this.frozenUpdates.get(networkId);
            const storedData = storedMessage.dataType === "um" ? this.dataForUpdateMultiMessage(networkId, storedMessage) : storedMessage.data;

            // Avoid updating components if the entity data received did not come from the current owner.
            const isOutdatedMessage = data.lastOwnerTime < storedData.lastOwnerTime;
            const isContemporaneousMessage = data.lastOwnerTime === storedData.lastOwnerTime;
            if (isOutdatedMessage || (isContemporaneousMessage && storedData.owner > data.owner)) {
                return;
            }

            if (dataType === "r") {
                const createdWhileFrozen = storedData && storedData.isFirstSync;
                if (createdWhileFrozen) {
                    // If the entity was created and deleted while frozen, don't bother conveying anything to the consumer.
                    this.frozenUpdates.delete(networkId);
                } else {
                    // Delete messages override any other messages for this entity
                    this.frozenUpdates.set(networkId, message);
                }
            } else {
                // merge in component updates
                if (storedData.components && data.components) {
                    Object.assign(storedData.components, data.components);
                }
            }
        }
    }

    dataForUpdateMultiMessage(networkId, message) {
        // "d" is an array of entity datas, where each item in the array represents a unique entity and contains
        // metadata for the entity, and an array of components that have been updated on the entity.
        // This method finds the data corresponding to the given networkId.
        for (let i = 0, l = message.data.d.length; i < l; i++) {
            const data = message.data.d[i];

            if (data.networkId === networkId) {
                return data;
            }
        }

        return null;
    }

    block(sessionId) {
        this.room.send({ kind: "block", whom: sessionId });
        this.blockedClients.set(sessionId, true);
        const detail = { clientId: sessionId };
        document.body.dispatchEvent(new CustomEvent("blocked", { detail }));
    }

    unblock(sessionId) {
        this.room.send({ kind: "unblock", whom: sessionId });
        this.blockedClients.delete(sessionId);
        const detail = { clientId: sessionId };
        document.body.dispatchEvent(new CustomEvent("unblocked", { detail }));
    }

    disconnect() {
        this.ion.leave();
        this.streams = {};
        this.pendingStreamRequests = {};
        if (this.room.state.players) {
            this.room.state.players.onAdd = void 0;
            this.room.state.players.onRemove = void 0;
            this.room.state.players.onChange = void 0;
        }
        this.room.removeAllListeners();
        this.room.leave(false);
        this.room = null;
    }

    isDisconnected() {
        return this.room === null;
    }

    setReconnectionListeners(reconnectingListener, reconnectedListener, reconnectionErrorListener) {
        // onReconnecting is called with the number of milliseconds until the next reconnection attempt
        this.onReconnecting = reconnectingListener;
        // onReconnected is called when the connection has been reestablished
        this.onReconnected = reconnectedListener;
        // onReconnectionError is called with an error when maxReconnectionAttempts has been reached
        this.onReconnectionError = reconnectionErrorListener;
    }

    async updateTimeOffset() {
        if (this.isDisconnected()) return;

        const clientSentTime = Date.now();

        const res = await fetch(document.location.href, {
            method: "HEAD",
            cache: "no-cache"
        });

        const precision = 1000;
        const serverReceivedTime = new Date(res.headers.get("Date")).getTime() + precision / 2;
        const clientReceivedTime = Date.now();
        const serverTime = serverReceivedTime + (clientReceivedTime - clientSentTime) / 2;
        const timeOffset = serverTime - clientReceivedTime;

        this.serverTimeRequests++;

        if (this.serverTimeRequests <= 10) {
            this.timeOffsets.push(timeOffset);
        } else {
            this.timeOffsets[this.serverTimeRequests % 10] = timeOffset;
        }

        this.avgTimeOffset = this.timeOffsets.reduce((acc, offset) => (acc += offset), 0) / this.timeOffsets.length;

        if (this.serverTimeRequests > 10) {
            NAF.log.write(`new server time offset: ${this.avgTimeOffset}ms`);
            setTimeout(() => this.updateTimeOffset(), 5 * 60 * 1000); // Sync clock every 5 minutes.
        } else {
            this.updateTimeOffset();
        }
    }

    getServerTime() {
        return Date.now() + this.avgTimeOffset;
    }
}

NAF.adapters.register("colyseus-ion", ColyseusIonAdapter);
