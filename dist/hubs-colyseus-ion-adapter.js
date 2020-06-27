/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../colyseus/colyseus.js/lib/Auth.js":
/*!*******************************************!*\
  !*** ../colyseus/colyseus.js/lib/Auth.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = exports.Platform = void 0;
var http = __importStar(__webpack_require__(/*! @colyseus/http */ "../colyseus/colyseus.js/node_modules/@colyseus/http/dist/index.esm.js"));
var Storage_1 = __webpack_require__(/*! ./Storage */ "../colyseus/colyseus.js/lib/Storage.js");
var TOKEN_STORAGE = "colyseus-auth-token";
var Platform;
(function (Platform) {
    Platform["ios"] = "ios";
    Platform["android"] = "android";
})(Platform = exports.Platform || (exports.Platform = {}));
var Auth = /** @class */ (function () {
    function Auth(endpoint) {
        var _this = this;
        this._id = undefined;
        this.username = undefined;
        this.displayName = undefined;
        this.avatarUrl = undefined;
        this.isAnonymous = undefined;
        this.email = undefined;
        this.lang = undefined;
        this.location = undefined;
        this.timezone = undefined;
        this.metadata = undefined;
        this.devices = undefined;
        this.facebookId = undefined;
        this.twitterId = undefined;
        this.googleId = undefined;
        this.gameCenterId = undefined;
        this.steamId = undefined;
        this.friendIds = undefined;
        this.blockedUserIds = undefined;
        this.createdAt = undefined;
        this.updatedAt = undefined;
        // auth token
        this.token = undefined;
        this.endpoint = endpoint.replace("ws", "http");
        Storage_1.getItem(TOKEN_STORAGE, function (token) { return _this.token = token; });
    }
    Object.defineProperty(Auth.prototype, "hasToken", {
        get: function () {
            return !!this.token;
        },
        enumerable: false,
        configurable: true
    });
    Auth.prototype.login = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var queryParams, data, attr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParams = Object.assign({}, options);
                        if (this.hasToken) {
                            queryParams.token = this.token;
                        }
                        return [4 /*yield*/, this.request('post', '/auth', queryParams)];
                    case 1:
                        data = _a.sent();
                        // set & cache token
                        this.token = data.token;
                        Storage_1.setItem(TOKEN_STORAGE, this.token);
                        for (attr in data) {
                            if (this.hasOwnProperty(attr)) {
                                this[attr] = data[attr];
                            }
                        }
                        this.registerPingService();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    Auth.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('put', '/auth', {}, {
                            username: this.username,
                            displayName: this.displayName,
                            avatarUrl: this.avatarUrl,
                            lang: this.lang,
                            location: this.location,
                            timezone: this.timezone,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    Auth.prototype.getFriends = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('get', '/friends/all')];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    Auth.prototype.getOnlineFriends = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('get', '/friends/online')];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    Auth.prototype.getFriendRequests = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('get', '/friends/requests')];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    Auth.prototype.sendFriendRequest = function (friendId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('post', '/friends/requests', { userId: friendId })];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    Auth.prototype.acceptFriendRequest = function (friendId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('put', '/friends/requests', { userId: friendId })];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    Auth.prototype.declineFriendRequest = function (friendId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('del', '/friends/requests', { userId: friendId })];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    Auth.prototype.blockUser = function (friendId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('post', '/friends/block', { userId: friendId })];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    Auth.prototype.unblockUser = function (friendId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('put', '/friends/block', { userId: friendId })];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    Auth.prototype.request = function (method, segments, query, body, headers) {
        if (query === void 0) { query = {}; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var queryParams, name_1, queryString, opts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers['Accept'] = 'application/json';
                        if (this.hasToken) {
                            headers['Authorization'] = 'Bearer ' + this.token;
                        }
                        queryParams = [];
                        for (name_1 in query) {
                            queryParams.push(name_1 + "=" + query[name_1]);
                        }
                        queryString = (queryParams.length > 0)
                            ? "?" + queryParams.join("&")
                            : '';
                        opts = { headers: headers };
                        if (body) {
                            opts.body = body;
                        }
                        return [4 /*yield*/, http[method]("" + this.endpoint + segments + queryString, opts)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Auth.prototype.logout = function () {
        this.token = undefined;
        Storage_1.removeItem(TOKEN_STORAGE);
        this.unregisterPingService();
    };
    Auth.prototype.registerPingService = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 15000; }
        this.unregisterPingService();
        this.keepOnlineInterval = setInterval(function () { return _this.request('get', '/auth'); }, timeout);
    };
    Auth.prototype.unregisterPingService = function () {
        clearInterval(this.keepOnlineInterval);
    };
    return Auth;
}());
exports.Auth = Auth;


/***/ }),

/***/ "../colyseus/colyseus.js/lib/Client.js":
/*!*********************************************!*\
  !*** ../colyseus/colyseus.js/lib/Client.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.MatchMakeError = void 0;
var http_1 = __webpack_require__(/*! @colyseus/http */ "../colyseus/colyseus.js/node_modules/@colyseus/http/dist/index.esm.js");
var ServerError_1 = __webpack_require__(/*! ./errors/ServerError */ "../colyseus/colyseus.js/lib/errors/ServerError.js");
var Room_1 = __webpack_require__(/*! ./Room */ "../colyseus/colyseus.js/lib/Room.js");
var Auth_1 = __webpack_require__(/*! ./Auth */ "../colyseus/colyseus.js/lib/Auth.js");
var Push_1 = __webpack_require__(/*! ./Push */ "../colyseus/colyseus.js/lib/Push.js");
var MatchMakeError = /** @class */ (function (_super) {
    __extends(MatchMakeError, _super);
    function MatchMakeError(message, code) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        Object.setPrototypeOf(_this, MatchMakeError.prototype);
        return _this;
    }
    return MatchMakeError;
}(Error));
exports.MatchMakeError = MatchMakeError;
var Client = /** @class */ (function () {
    function Client(endpoint) {
        if (endpoint === void 0) { endpoint = location.protocol.replace("http", "ws") + "//" + location.hostname + (location.port && ":" + location.port); }
        this.endpoint = endpoint;
        this.auth = new Auth_1.Auth(this.endpoint);
        this.push = new Push_1.Push(this.endpoint);
    }
    Client.prototype.joinOrCreate = function (roomName, options, rootSchema) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createMatchMakeRequest('joinOrCreate', roomName, options, rootSchema)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.create = function (roomName, options, rootSchema) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createMatchMakeRequest('create', roomName, options, rootSchema)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.join = function (roomName, options, rootSchema) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createMatchMakeRequest('join', roomName, options, rootSchema)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.joinById = function (roomId, options, rootSchema) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createMatchMakeRequest('joinById', roomId, options, rootSchema)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.reconnect = function (roomId, sessionId, rootSchema) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createMatchMakeRequest('joinById', roomId, { sessionId: sessionId }, rootSchema)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getAvailableRooms = function (roomName) {
        if (roomName === void 0) { roomName = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.endpoint.replace("ws", "http") + "/matchmake/" + roomName;
                        return [4 /*yield*/, http_1.get(url, { headers: { 'Accept': 'application/json' } })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Client.prototype.consumeSeatReservation = function (response, rootSchema) {
        return __awaiter(this, void 0, void 0, function () {
            var room;
            return __generator(this, function (_a) {
                room = this.createRoom(response.room.name, rootSchema);
                room.id = response.room.roomId;
                room.sessionId = response.sessionId;
                room.connect(this.buildEndpoint(response.room, { sessionId: room.sessionId }));
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var onError = function (code, message) { return reject(new ServerError_1.ServerError(code, message)); };
                        room.onError.once(onError);
                        room.onJoin.once(function () {
                            room.onError.remove(onError);
                            resolve(room);
                        });
                    })];
            });
        });
    };
    Client.prototype.createMatchMakeRequest = function (method, roomName, options, rootSchema) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.endpoint.replace("ws", "http") + "/matchmake/" + method + "/" + roomName;
                        // automatically forward auth token, if present
                        if (this.auth.hasToken) {
                            options.token = this.auth.token;
                        }
                        return [4 /*yield*/, http_1.post(url, {
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(options)
                            })];
                    case 1:
                        response = (_a.sent()).data;
                        if (response.error) {
                            throw new MatchMakeError(response.error, response.code);
                        }
                        return [2 /*return*/, this.consumeSeatReservation(response, rootSchema)];
                }
            });
        });
    };
    Client.prototype.createRoom = function (roomName, rootSchema) {
        return new Room_1.Room(roomName, rootSchema);
    };
    Client.prototype.buildEndpoint = function (room, options) {
        if (options === void 0) { options = {}; }
        var params = [];
        for (var name_1 in options) {
            if (!options.hasOwnProperty(name_1)) {
                continue;
            }
            params.push(name_1 + "=" + options[name_1]);
        }
        return this.endpoint + "/" + room.processId + "/" + room.roomId + "?" + params.join('&');
    };
    return Client;
}());
exports.Client = Client;


/***/ }),

/***/ "../colyseus/colyseus.js/lib/Connection.js":
/*!*************************************************!*\
  !*** ../colyseus/colyseus.js/lib/Connection.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
var websocket_1 = __importDefault(__webpack_require__(/*! @gamestdio/websocket */ "../colyseus/colyseus.js/node_modules/@gamestdio/websocket/lib/index.js"));
var Connection = /** @class */ (function (_super) {
    __extends(Connection, _super);
    function Connection(url, autoConnect) {
        if (autoConnect === void 0) { autoConnect = true; }
        var _this = _super.call(this, url, undefined, { connect: autoConnect }) || this;
        _this._enqueuedCalls = [];
        return _this;
    }
    Connection.prototype.onOpenCallback = function (event) {
        _super.prototype.onOpenCallback.call(this);
        this.binaryType = 'arraybuffer';
        if (this._enqueuedCalls.length > 0) {
            for (var _i = 0, _a = this._enqueuedCalls; _i < _a.length; _i++) {
                var _b = _a[_i], method = _b[0], args = _b[1];
                this[method].apply(this, args);
            }
            // clear enqueued calls.
            this._enqueuedCalls = [];
        }
    };
    Connection.prototype.send = function (data) {
        if (this.ws.readyState === websocket_1.default.OPEN) {
            if (data instanceof ArrayBuffer) {
                return _super.prototype.send.call(this, data);
            }
            else if (Array.isArray(data)) {
                return _super.prototype.send.call(this, (new Uint8Array(data)).buffer);
            }
        }
        else {
            // WebSocket not connected.
            // Enqueue data to be sent when readyState == OPEN
            this._enqueuedCalls.push(['send', [data]]);
        }
    };
    return Connection;
}(websocket_1.default));
exports.Connection = Connection;


/***/ }),

/***/ "../colyseus/colyseus.js/lib/Protocol.js":
/*!***********************************************!*\
  !*** ../colyseus/colyseus.js/lib/Protocol.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Use codes between 0~127 for lesser throughput (1 byte)
Object.defineProperty(exports, "__esModule", { value: true });
exports.utf8Length = exports.utf8Read = exports.ErrorCode = exports.Protocol = void 0;
var Protocol;
(function (Protocol) {
    // Room-related (10~19)
    Protocol[Protocol["HANDSHAKE"] = 9] = "HANDSHAKE";
    Protocol[Protocol["JOIN_ROOM"] = 10] = "JOIN_ROOM";
    Protocol[Protocol["ERROR"] = 11] = "ERROR";
    Protocol[Protocol["LEAVE_ROOM"] = 12] = "LEAVE_ROOM";
    Protocol[Protocol["ROOM_DATA"] = 13] = "ROOM_DATA";
    Protocol[Protocol["ROOM_STATE"] = 14] = "ROOM_STATE";
    Protocol[Protocol["ROOM_STATE_PATCH"] = 15] = "ROOM_STATE_PATCH";
    Protocol[Protocol["ROOM_DATA_SCHEMA"] = 16] = "ROOM_DATA_SCHEMA";
})(Protocol = exports.Protocol || (exports.Protocol = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["MATCHMAKE_NO_HANDLER"] = 4210] = "MATCHMAKE_NO_HANDLER";
    ErrorCode[ErrorCode["MATCHMAKE_INVALID_CRITERIA"] = 4211] = "MATCHMAKE_INVALID_CRITERIA";
    ErrorCode[ErrorCode["MATCHMAKE_INVALID_ROOM_ID"] = 4212] = "MATCHMAKE_INVALID_ROOM_ID";
    ErrorCode[ErrorCode["MATCHMAKE_UNHANDLED"] = 4213] = "MATCHMAKE_UNHANDLED";
    ErrorCode[ErrorCode["MATCHMAKE_EXPIRED"] = 4214] = "MATCHMAKE_EXPIRED";
    ErrorCode[ErrorCode["AUTH_FAILED"] = 4215] = "AUTH_FAILED";
    ErrorCode[ErrorCode["APPLICATION_ERROR"] = 4216] = "APPLICATION_ERROR";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
function utf8Read(view, offset) {
    var length = view[offset++];
    var string = '', chr = 0;
    for (var i = offset, end = offset + length; i < end; i++) {
        var byte = view[i];
        if ((byte & 0x80) === 0x00) {
            string += String.fromCharCode(byte);
            continue;
        }
        if ((byte & 0xe0) === 0xc0) {
            string += String.fromCharCode(((byte & 0x1f) << 6) |
                (view[++i] & 0x3f));
            continue;
        }
        if ((byte & 0xf0) === 0xe0) {
            string += String.fromCharCode(((byte & 0x0f) << 12) |
                ((view[++i] & 0x3f) << 6) |
                ((view[++i] & 0x3f) << 0));
            continue;
        }
        if ((byte & 0xf8) === 0xf0) {
            chr = ((byte & 0x07) << 18) |
                ((view[++i] & 0x3f) << 12) |
                ((view[++i] & 0x3f) << 6) |
                ((view[++i] & 0x3f) << 0);
            if (chr >= 0x010000) { // surrogate pair
                chr -= 0x010000;
                string += String.fromCharCode((chr >>> 10) + 0xD800, (chr & 0x3FF) + 0xDC00);
            }
            else {
                string += String.fromCharCode(chr);
            }
            continue;
        }
        throw new Error('Invalid byte ' + byte.toString(16));
    }
    return string;
}
exports.utf8Read = utf8Read;
// Faster for short strings than Buffer.byteLength
function utf8Length(str) {
    if (str === void 0) { str = ''; }
    var c = 0;
    var length = 0;
    for (var i = 0, l = str.length; i < l; i++) {
        c = str.charCodeAt(i);
        if (c < 0x80) {
            length += 1;
        }
        else if (c < 0x800) {
            length += 2;
        }
        else if (c < 0xd800 || c >= 0xe000) {
            length += 3;
        }
        else {
            i++;
            length += 4;
        }
    }
    return length + 1;
}
exports.utf8Length = utf8Length;


/***/ }),

/***/ "../colyseus/colyseus.js/lib/Push.js":
/*!*******************************************!*\
  !*** ../colyseus/colyseus.js/lib/Push.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Push = void 0;
var Push = /** @class */ (function () {
    function Push(endpoint) {
        this.endpoint = endpoint.replace("ws", "http");
    }
    Push.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.check();
                        return [4 /*yield*/, this.registerServiceWorker()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.requestNotificationPermission()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    Push.prototype.registerServiceWorker = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigator.serviceWorker.register(this.endpoint + "/push")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Push.prototype.requestNotificationPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permission;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, window["Notification"].requestPermission()];
                    case 1:
                        permission = _a.sent();
                        // value of permission can be 'granted', 'default', 'denied'
                        // granted: user has accepted the request
                        // default: user has dismissed the notification permission popup by clicking on x
                        // denied: user has denied the request.
                        if (permission !== "granted") {
                            throw new Error("Permission not granted for Notification");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Push.prototype.check = function () {
        if (!("serviceWorker" in navigator)) {
            throw new Error("No Service Worker support!");
        }
        if (!("PushManager" in window)) {
            throw new Error("No Push API Support!");
        }
    };
    return Push;
}());
exports.Push = Push;


/***/ }),

/***/ "../colyseus/colyseus.js/lib/Room.js":
/*!*******************************************!*\
  !*** ../colyseus/colyseus.js/lib/Room.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
var msgpack = __importStar(__webpack_require__(/*! ./msgpack */ "../colyseus/colyseus.js/lib/msgpack.js"));
var strong_events_1 = __webpack_require__(/*! strong-events */ "../colyseus/colyseus.js/node_modules/strong-events/lib/index.js");
var nanoevents_1 = __webpack_require__(/*! nanoevents */ "../colyseus/colyseus.js/node_modules/nanoevents/index.js");
var Connection_1 = __webpack_require__(/*! ./Connection */ "../colyseus/colyseus.js/lib/Connection.js");
var Serializer_1 = __webpack_require__(/*! ./serializer/Serializer */ "../colyseus/colyseus.js/lib/serializer/Serializer.js");
var Protocol_1 = __webpack_require__(/*! ./Protocol */ "../colyseus/colyseus.js/lib/Protocol.js");
var encode = __importStar(__webpack_require__(/*! @colyseus/schema/lib/encoding/encode */ "../colyseus/schema/lib/encoding/encode.js"));
var decode = __importStar(__webpack_require__(/*! @colyseus/schema/lib/encoding/decode */ "../colyseus/schema/lib/encoding/decode.js"));
var Room = /** @class */ (function () {
    function Room(name, rootSchema) {
        var _this = this;
        // Public signals
        this.onJoin = strong_events_1.createSignal();
        this.onStateChange = strong_events_1.createSignal();
        this.onError = strong_events_1.createSignal();
        this.onLeave = strong_events_1.createSignal();
        this.hasJoined = false;
        this.onMessageHandlers = nanoevents_1.createNanoEvents();
        this.id = null;
        this.name = name;
        if (rootSchema) {
            this.serializer = new (Serializer_1.getSerializer("schema"));
            this.rootSchema = rootSchema;
            this.serializer.state = new rootSchema();
        }
        else {
            // TODO: remove default serializer. it should arrive only after JOIN_ROOM.
            this.serializer = new (Serializer_1.getSerializer("fossil-delta"));
        }
        this.onError(function (code, message) { return console.error("colyseus.js - onError => (" + code + ") " + message); });
        this.onLeave(function () { return _this.removeAllListeners(); });
    }
    Room.prototype.connect = function (endpoint) {
        var _this = this;
        this.connection = new Connection_1.Connection(endpoint, false);
        this.connection.reconnectEnabled = false;
        this.connection.onmessage = this.onMessageCallback.bind(this);
        this.connection.onclose = function (e) {
            if (!_this.hasJoined) {
                console.error("Room connection was closed unexpectedly (" + e.code + "): " + e.reason);
                _this.onError.invoke(e.code, e.reason);
                return;
            }
            _this.onLeave.invoke(e.code);
        };
        this.connection.onerror = function (e) {
            console.warn("Room, onError (" + e.code + "): " + e.reason);
            _this.onError.invoke(e.code, e.reason);
        };
        this.connection.open();
    };
    Room.prototype.leave = function (consented) {
        if (consented === void 0) { consented = true; }
        if (this.connection) {
            if (consented) {
                this.connection.send([Protocol_1.Protocol.LEAVE_ROOM]);
            }
            else {
                this.connection.close();
            }
        }
        else {
            this.onLeave.invoke(4000); // "consented" code
        }
    };
    Room.prototype.onMessage = function (type, callback) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(type), callback);
    };
    Room.prototype.send = function (type, message) {
        var initialBytes = [Protocol_1.Protocol.ROOM_DATA];
        if (typeof (type) === "string") {
            encode.string(initialBytes, type);
        }
        else {
            encode.number(initialBytes, type);
        }
        var arr;
        if (message !== undefined) {
            var encoded = msgpack.encode(message);
            arr = new Uint8Array(initialBytes.length + encoded.byteLength);
            arr.set(new Uint8Array(initialBytes), 0);
            arr.set(new Uint8Array(encoded), initialBytes.length);
        }
        else {
            arr = new Uint8Array(initialBytes);
        }
        this.connection.send(arr.buffer);
    };
    Object.defineProperty(Room.prototype, "state", {
        get: function () {
            return this.serializer.getState();
        },
        enumerable: false,
        configurable: true
    });
    // TODO: deprecate / move somewhere else
    // this method is useful only for FossilDeltaSerializer
    Room.prototype.listen = function (segments, callback, immediate) {
        if (this.serializerId === "schema") {
            console.error("'" + this.serializerId + "' serializer doesn't support .listen() method here.");
            return;
        }
        else if (!this.serializerId) {
            console.warn("room.Listen() should be called after room.onJoin has been called (DEPRECATION WARNING)");
        }
        return this.serializer.api.listen(segments, callback, immediate);
    };
    // TODO: deprecate / move somewhere else
    // this method is useful only for FossilDeltaSerializer
    Room.prototype.removeListener = function (listener) {
        return this.serializer.api.removeListener(listener);
    };
    Room.prototype.removeAllListeners = function () {
        if (this.serializer) {
            this.serializer.teardown();
        }
        this.onJoin.clear();
        this.onStateChange.clear();
        this.onError.clear();
        this.onLeave.clear();
    };
    Room.prototype.onMessageCallback = function (event) {
        var bytes = Array.from(new Uint8Array(event.data));
        var code = bytes[0];
        if (code === Protocol_1.Protocol.JOIN_ROOM) {
            var offset = 1;
            this.serializerId = Protocol_1.utf8Read(bytes, offset);
            offset += Protocol_1.utf8Length(this.serializerId);
            // get serializer implementation
            var serializer = Serializer_1.getSerializer(this.serializerId);
            if (!serializer) {
                throw new Error("missing serializer: " + this.serializerId);
            }
            // TODO: remove this check
            if (this.serializerId !== "fossil-delta" && !this.rootSchema) {
                this.serializer = new serializer();
            }
            if (bytes.length > offset && this.serializer.handshake) {
                this.serializer.handshake(bytes, { offset: 1 });
            }
            this.hasJoined = true;
            this.onJoin.invoke();
            // acknowledge successfull JOIN_ROOM
            this.connection.send([Protocol_1.Protocol.JOIN_ROOM]);
        }
        else if (code === Protocol_1.Protocol.ERROR) {
            var it_1 = { offset: 1 };
            var code_1 = decode.number(bytes, it_1);
            var message = decode.string(bytes, it_1);
            this.onError.invoke(code_1, message);
        }
        else if (code === Protocol_1.Protocol.LEAVE_ROOM) {
            this.leave();
        }
        else if (code === Protocol_1.Protocol.ROOM_DATA_SCHEMA) {
            var context_1 = this.serializer.getState().constructor._context;
            var type = context_1.get(bytes[1]);
            var message = new type();
            message.decode(bytes, { offset: 2 });
            this.dispatchMessage(type, message);
        }
        else if (code === Protocol_1.Protocol.ROOM_STATE) {
            bytes.shift(); // drop `code` byte
            this.setState(bytes);
        }
        else if (code === Protocol_1.Protocol.ROOM_STATE_PATCH) {
            bytes.shift(); // drop `code` byte
            this.patch(bytes);
        }
        else if (code === Protocol_1.Protocol.ROOM_DATA) {
            var it_2 = { offset: 1 };
            var type = (decode.stringCheck(bytes, it_2))
                ? decode.string(bytes, it_2)
                : decode.number(bytes, it_2);
            var message = (bytes.length > it_2.offset)
                ? msgpack.decode(event.data, it_2.offset)
                : undefined;
            this.dispatchMessage(type, message);
        }
    };
    Room.prototype.setState = function (encodedState) {
        this.serializer.setState(encodedState);
        this.onStateChange.invoke(this.serializer.getState());
    };
    Room.prototype.patch = function (binaryPatch) {
        this.serializer.patch(binaryPatch);
        this.onStateChange.invoke(this.serializer.getState());
    };
    Room.prototype.dispatchMessage = function (type, message) {
        var messageType = this.getMessageHandlerKey(type);
        if (this.onMessageHandlers.events[messageType]) {
            this.onMessageHandlers.emit(messageType, message);
        }
        else if (this.onMessageHandlers.events['*']) {
            this.onMessageHandlers.emit('*', type, message);
        }
        else {
            console.warn("onMessage not registered for type '" + type + "'.");
        }
    };
    Room.prototype.getMessageHandlerKey = function (type) {
        switch (typeof (type)) {
            // typeof Schema
            case "function": return "$" + type._typeid;
            // string
            case "string": return type;
            // number
            case "number": return "i" + type;
            default: throw new Error("invalid message type.");
        }
    };
    return Room;
}());
exports.Room = Room;


/***/ }),

/***/ "../colyseus/colyseus.js/lib/Storage.js":
/*!**********************************************!*\
  !*** ../colyseus/colyseus.js/lib/Storage.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../typings/cocos-creator.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItem = exports.removeItem = exports.setItem = void 0;
/**
 * We do not assign 'storage' to window.localStorage immediatelly for React
 * Native compatibility. window.localStorage is not present when this module is
 * loaded.
 */
var storage;
function getStorage() {
    if (!storage) {
        storage = (typeof (cc) !== 'undefined' && cc.sys && cc.sys.localStorage)
            ? cc.sys.localStorage // compatibility with cocos creator
            : typeof (window) !== "undefined" && window.localStorage //RN does have window object at this point, but localStorage is not defined
                ? window.localStorage // regular browser environment
                : {
                    cache: {},
                    setItem: function (key, value) { this.cache[key] = value; },
                    getItem: function (key) { this.cache[key]; },
                    removeItem: function (key) { delete this.cache[key]; },
                };
    }
    return storage;
}
function setItem(key, value) {
    getStorage().setItem(key, value);
}
exports.setItem = setItem;
function removeItem(key) {
    getStorage().removeItem(key);
}
exports.removeItem = removeItem;
function getItem(key, callback) {
    var value = getStorage().getItem(key);
    if (typeof (Promise) === 'undefined' || // old browsers
        !(value instanceof Promise)) {
        // browser has synchronous return
        callback(value);
    }
    else {
        // react-native is asynchronous
        value.then(function (id) { return callback(id); });
    }
}
exports.getItem = getItem;


/***/ }),

/***/ "../colyseus/colyseus.js/lib/errors/ServerError.js":
/*!*********************************************************!*\
  !*** ../colyseus/colyseus.js/lib/errors/ServerError.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = void 0;
var ServerError = /** @class */ (function (_super) {
    __extends(ServerError, _super);
    function ServerError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ServerError";
        _this.code = code;
        return _this;
    }
    return ServerError;
}(Error));
exports.ServerError = ServerError;


/***/ }),

/***/ "../colyseus/colyseus.js/lib/index.js":
/*!********************************************!*\
  !*** ../colyseus/colyseus.js/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaSerializer = exports.FossilDeltaSerializer = exports.registerSerializer = void 0;
__webpack_require__(/*! ./legacy */ "../colyseus/colyseus.js/lib/legacy.js");
var Client_1 = __webpack_require__(/*! ./Client */ "../colyseus/colyseus.js/lib/Client.js");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return Client_1.Client; } });
var Protocol_1 = __webpack_require__(/*! ./Protocol */ "../colyseus/colyseus.js/lib/Protocol.js");
Object.defineProperty(exports, "Protocol", { enumerable: true, get: function () { return Protocol_1.Protocol; } });
Object.defineProperty(exports, "ErrorCode", { enumerable: true, get: function () { return Protocol_1.ErrorCode; } });
var Room_1 = __webpack_require__(/*! ./Room */ "../colyseus/colyseus.js/lib/Room.js");
Object.defineProperty(exports, "Room", { enumerable: true, get: function () { return Room_1.Room; } });
var Auth_1 = __webpack_require__(/*! ./Auth */ "../colyseus/colyseus.js/lib/Auth.js");
Object.defineProperty(exports, "Auth", { enumerable: true, get: function () { return Auth_1.Auth; } });
Object.defineProperty(exports, "Platform", { enumerable: true, get: function () { return Auth_1.Platform; } });
/*
 * Serializers
 */
var FossilDeltaSerializer_1 = __webpack_require__(/*! ./serializer/FossilDeltaSerializer */ "../colyseus/colyseus.js/lib/serializer/FossilDeltaSerializer.js");
Object.defineProperty(exports, "FossilDeltaSerializer", { enumerable: true, get: function () { return FossilDeltaSerializer_1.FossilDeltaSerializer; } });
var SchemaSerializer_1 = __webpack_require__(/*! ./serializer/SchemaSerializer */ "../colyseus/colyseus.js/lib/serializer/SchemaSerializer.js");
Object.defineProperty(exports, "SchemaSerializer", { enumerable: true, get: function () { return SchemaSerializer_1.SchemaSerializer; } });
var Serializer_1 = __webpack_require__(/*! ./serializer/Serializer */ "../colyseus/colyseus.js/lib/serializer/Serializer.js");
Object.defineProperty(exports, "registerSerializer", { enumerable: true, get: function () { return Serializer_1.registerSerializer; } });
Serializer_1.registerSerializer('fossil-delta', FossilDeltaSerializer_1.FossilDeltaSerializer);
Serializer_1.registerSerializer('schema', SchemaSerializer_1.SchemaSerializer);


/***/ }),

/***/ "../colyseus/colyseus.js/lib/legacy.js":
/*!*********************************************!*\
  !*** ../colyseus/colyseus.js/lib/legacy.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//
// Polyfills for legacy environments
//
/*
 * Support Android 4.4.x
 */
if (!ArrayBuffer.isView) {
    ArrayBuffer.isView = function (a) {
        return a !== null && typeof (a) === 'object' && a.buffer instanceof ArrayBuffer;
    };
}


/***/ }),

/***/ "../colyseus/colyseus.js/lib/msgpack.js":
/*!**********************************************!*\
  !*** ../colyseus/colyseus.js/lib/msgpack.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = exports.decode = void 0;
var decode_1 = __importDefault(__webpack_require__(/*! ./msgpack/decode */ "../colyseus/colyseus.js/lib/msgpack/decode.js"));
var encode_1 = __importDefault(__webpack_require__(/*! ./msgpack/encode */ "../colyseus/colyseus.js/lib/msgpack/encode.js"));
exports.decode = decode_1.default;
exports.encode = encode_1.default;


/***/ }),

/***/ "../colyseus/colyseus.js/lib/msgpack/decode.js":
/*!*****************************************************!*\
  !*** ../colyseus/colyseus.js/lib/msgpack/decode.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2014 Ion Drive Software Ltd.
 * https://github.com/darrachequesne/notepack/
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Patch for Colyseus:
 * -------------------
 *
 * added `offset` on Decoder constructor, for messages arriving with a code
 * before actual msgpack data
 */
function Decoder(buffer, offset) {
    this._offset = offset;
    if (buffer instanceof ArrayBuffer) {
        this._buffer = buffer;
        this._view = new DataView(this._buffer);
    }
    else if (ArrayBuffer.isView(buffer)) {
        this._buffer = buffer.buffer;
        this._view = new DataView(this._buffer, buffer.byteOffset, buffer.byteLength);
    }
    else {
        throw new Error('Invalid argument');
    }
}
function utf8Read(view, offset, length) {
    var string = '', chr = 0;
    for (var i = offset, end = offset + length; i < end; i++) {
        var byte = view.getUint8(i);
        if ((byte & 0x80) === 0x00) {
            string += String.fromCharCode(byte);
            continue;
        }
        if ((byte & 0xe0) === 0xc0) {
            string += String.fromCharCode(((byte & 0x1f) << 6) |
                (view.getUint8(++i) & 0x3f));
            continue;
        }
        if ((byte & 0xf0) === 0xe0) {
            string += String.fromCharCode(((byte & 0x0f) << 12) |
                ((view.getUint8(++i) & 0x3f) << 6) |
                ((view.getUint8(++i) & 0x3f) << 0));
            continue;
        }
        if ((byte & 0xf8) === 0xf0) {
            chr = ((byte & 0x07) << 18) |
                ((view.getUint8(++i) & 0x3f) << 12) |
                ((view.getUint8(++i) & 0x3f) << 6) |
                ((view.getUint8(++i) & 0x3f) << 0);
            if (chr >= 0x010000) { // surrogate pair
                chr -= 0x010000;
                string += String.fromCharCode((chr >>> 10) + 0xD800, (chr & 0x3FF) + 0xDC00);
            }
            else {
                string += String.fromCharCode(chr);
            }
            continue;
        }
        throw new Error('Invalid byte ' + byte.toString(16));
    }
    return string;
}
Decoder.prototype._array = function (length) {
    var value = new Array(length);
    for (var i = 0; i < length; i++) {
        value[i] = this._parse();
    }
    return value;
};
Decoder.prototype._map = function (length) {
    var key = '', value = {};
    for (var i = 0; i < length; i++) {
        key = this._parse();
        value[key] = this._parse();
    }
    return value;
};
Decoder.prototype._str = function (length) {
    var value = utf8Read(this._view, this._offset, length);
    this._offset += length;
    return value;
};
Decoder.prototype._bin = function (length) {
    var value = this._buffer.slice(this._offset, this._offset + length);
    this._offset += length;
    return value;
};
Decoder.prototype._parse = function () {
    var prefix = this._view.getUint8(this._offset++);
    var value, length = 0, type = 0, hi = 0, lo = 0;
    if (prefix < 0xc0) {
        // positive fixint
        if (prefix < 0x80) {
            return prefix;
        }
        // fixmap
        if (prefix < 0x90) {
            return this._map(prefix & 0x0f);
        }
        // fixarray
        if (prefix < 0xa0) {
            return this._array(prefix & 0x0f);
        }
        // fixstr
        return this._str(prefix & 0x1f);
    }
    // negative fixint
    if (prefix > 0xdf) {
        return (0xff - prefix + 1) * -1;
    }
    switch (prefix) {
        // nil
        case 0xc0:
            return null;
        // false
        case 0xc2:
            return false;
        // true
        case 0xc3:
            return true;
        // bin
        case 0xc4:
            length = this._view.getUint8(this._offset);
            this._offset += 1;
            return this._bin(length);
        case 0xc5:
            length = this._view.getUint16(this._offset);
            this._offset += 2;
            return this._bin(length);
        case 0xc6:
            length = this._view.getUint32(this._offset);
            this._offset += 4;
            return this._bin(length);
        // ext
        case 0xc7:
            length = this._view.getUint8(this._offset);
            type = this._view.getInt8(this._offset + 1);
            this._offset += 2;
            return [type, this._bin(length)];
        case 0xc8:
            length = this._view.getUint16(this._offset);
            type = this._view.getInt8(this._offset + 2);
            this._offset += 3;
            return [type, this._bin(length)];
        case 0xc9:
            length = this._view.getUint32(this._offset);
            type = this._view.getInt8(this._offset + 4);
            this._offset += 5;
            return [type, this._bin(length)];
        // float
        case 0xca:
            value = this._view.getFloat32(this._offset);
            this._offset += 4;
            return value;
        case 0xcb:
            value = this._view.getFloat64(this._offset);
            this._offset += 8;
            return value;
        // uint
        case 0xcc:
            value = this._view.getUint8(this._offset);
            this._offset += 1;
            return value;
        case 0xcd:
            value = this._view.getUint16(this._offset);
            this._offset += 2;
            return value;
        case 0xce:
            value = this._view.getUint32(this._offset);
            this._offset += 4;
            return value;
        case 0xcf:
            hi = this._view.getUint32(this._offset) * Math.pow(2, 32);
            lo = this._view.getUint32(this._offset + 4);
            this._offset += 8;
            return hi + lo;
        // int
        case 0xd0:
            value = this._view.getInt8(this._offset);
            this._offset += 1;
            return value;
        case 0xd1:
            value = this._view.getInt16(this._offset);
            this._offset += 2;
            return value;
        case 0xd2:
            value = this._view.getInt32(this._offset);
            this._offset += 4;
            return value;
        case 0xd3:
            hi = this._view.getInt32(this._offset) * Math.pow(2, 32);
            lo = this._view.getUint32(this._offset + 4);
            this._offset += 8;
            return hi + lo;
        // fixext
        case 0xd4:
            type = this._view.getInt8(this._offset);
            this._offset += 1;
            if (type === 0x00) {
                this._offset += 1;
                return void 0;
            }
            return [type, this._bin(1)];
        case 0xd5:
            type = this._view.getInt8(this._offset);
            this._offset += 1;
            return [type, this._bin(2)];
        case 0xd6:
            type = this._view.getInt8(this._offset);
            this._offset += 1;
            return [type, this._bin(4)];
        case 0xd7:
            type = this._view.getInt8(this._offset);
            this._offset += 1;
            if (type === 0x00) {
                hi = this._view.getInt32(this._offset) * Math.pow(2, 32);
                lo = this._view.getUint32(this._offset + 4);
                this._offset += 8;
                return new Date(hi + lo);
            }
            return [type, this._bin(8)];
        case 0xd8:
            type = this._view.getInt8(this._offset);
            this._offset += 1;
            return [type, this._bin(16)];
        // str
        case 0xd9:
            length = this._view.getUint8(this._offset);
            this._offset += 1;
            return this._str(length);
        case 0xda:
            length = this._view.getUint16(this._offset);
            this._offset += 2;
            return this._str(length);
        case 0xdb:
            length = this._view.getUint32(this._offset);
            this._offset += 4;
            return this._str(length);
        // array
        case 0xdc:
            length = this._view.getUint16(this._offset);
            this._offset += 2;
            return this._array(length);
        case 0xdd:
            length = this._view.getUint32(this._offset);
            this._offset += 4;
            return this._array(length);
        // map
        case 0xde:
            length = this._view.getUint16(this._offset);
            this._offset += 2;
            return this._map(length);
        case 0xdf:
            length = this._view.getUint32(this._offset);
            this._offset += 4;
            return this._map(length);
    }
    throw new Error('Could not parse');
};
function decode(buffer, offset) {
    if (offset === void 0) { offset = 0; }
    var decoder = new Decoder(buffer, offset);
    var value = decoder._parse();
    if (decoder._offset !== buffer.byteLength) {
        throw new Error((buffer.byteLength - decoder._offset) + ' trailing bytes');
    }
    return value;
}
exports.default = decode;


/***/ }),

/***/ "../colyseus/colyseus.js/lib/msgpack/encode.js":
/*!*****************************************************!*\
  !*** ../colyseus/colyseus.js/lib/msgpack/encode.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2014 Ion Drive Software Ltd.
 * https://github.com/darrachequesne/notepack/
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function utf8Write(view, offset, str) {
    var c = 0;
    for (var i = 0, l = str.length; i < l; i++) {
        c = str.charCodeAt(i);
        if (c < 0x80) {
            view.setUint8(offset++, c);
        }
        else if (c < 0x800) {
            view.setUint8(offset++, 0xc0 | (c >> 6));
            view.setUint8(offset++, 0x80 | (c & 0x3f));
        }
        else if (c < 0xd800 || c >= 0xe000) {
            view.setUint8(offset++, 0xe0 | (c >> 12));
            view.setUint8(offset++, 0x80 | (c >> 6) & 0x3f);
            view.setUint8(offset++, 0x80 | (c & 0x3f));
        }
        else {
            i++;
            c = 0x10000 + (((c & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
            view.setUint8(offset++, 0xf0 | (c >> 18));
            view.setUint8(offset++, 0x80 | (c >> 12) & 0x3f);
            view.setUint8(offset++, 0x80 | (c >> 6) & 0x3f);
            view.setUint8(offset++, 0x80 | (c & 0x3f));
        }
    }
}
function utf8Length(str) {
    var c = 0, length = 0;
    for (var i = 0, l = str.length; i < l; i++) {
        c = str.charCodeAt(i);
        if (c < 0x80) {
            length += 1;
        }
        else if (c < 0x800) {
            length += 2;
        }
        else if (c < 0xd800 || c >= 0xe000) {
            length += 3;
        }
        else {
            i++;
            length += 4;
        }
    }
    return length;
}
function _encode(bytes, defers, value) {
    var type = typeof value, i = 0, l = 0, hi = 0, lo = 0, length = 0, size = 0;
    if (type === 'string') {
        length = utf8Length(value);
        // fixstr
        if (length < 0x20) {
            bytes.push(length | 0xa0);
            size = 1;
        }
        // str 8
        else if (length < 0x100) {
            bytes.push(0xd9, length);
            size = 2;
        }
        // str 16
        else if (length < 0x10000) {
            bytes.push(0xda, length >> 8, length);
            size = 3;
        }
        // str 32
        else if (length < 0x100000000) {
            bytes.push(0xdb, length >> 24, length >> 16, length >> 8, length);
            size = 5;
        }
        else {
            throw new Error('String too long');
        }
        defers.push({ _str: value, _length: length, _offset: bytes.length });
        return size + length;
    }
    if (type === 'number') {
        // TODO: encode to float 32?
        // float 64
        if (Math.floor(value) !== value || !isFinite(value)) {
            bytes.push(0xcb);
            defers.push({ _float: value, _length: 8, _offset: bytes.length });
            return 9;
        }
        if (value >= 0) {
            // positive fixnum
            if (value < 0x80) {
                bytes.push(value);
                return 1;
            }
            // uint 8
            if (value < 0x100) {
                bytes.push(0xcc, value);
                return 2;
            }
            // uint 16
            if (value < 0x10000) {
                bytes.push(0xcd, value >> 8, value);
                return 3;
            }
            // uint 32
            if (value < 0x100000000) {
                bytes.push(0xce, value >> 24, value >> 16, value >> 8, value);
                return 5;
            }
            // uint 64
            hi = (value / Math.pow(2, 32)) >> 0;
            lo = value >>> 0;
            bytes.push(0xcf, hi >> 24, hi >> 16, hi >> 8, hi, lo >> 24, lo >> 16, lo >> 8, lo);
            return 9;
        }
        else {
            // negative fixnum
            if (value >= -0x20) {
                bytes.push(value);
                return 1;
            }
            // int 8
            if (value >= -0x80) {
                bytes.push(0xd0, value);
                return 2;
            }
            // int 16
            if (value >= -0x8000) {
                bytes.push(0xd1, value >> 8, value);
                return 3;
            }
            // int 32
            if (value >= -0x80000000) {
                bytes.push(0xd2, value >> 24, value >> 16, value >> 8, value);
                return 5;
            }
            // int 64
            hi = Math.floor(value / Math.pow(2, 32));
            lo = value >>> 0;
            bytes.push(0xd3, hi >> 24, hi >> 16, hi >> 8, hi, lo >> 24, lo >> 16, lo >> 8, lo);
            return 9;
        }
    }
    if (type === 'object') {
        // nil
        if (value === null) {
            bytes.push(0xc0);
            return 1;
        }
        if (Array.isArray(value)) {
            length = value.length;
            // fixarray
            if (length < 0x10) {
                bytes.push(length | 0x90);
                size = 1;
            }
            // array 16
            else if (length < 0x10000) {
                bytes.push(0xdc, length >> 8, length);
                size = 3;
            }
            // array 32
            else if (length < 0x100000000) {
                bytes.push(0xdd, length >> 24, length >> 16, length >> 8, length);
                size = 5;
            }
            else {
                throw new Error('Array too large');
            }
            for (i = 0; i < length; i++) {
                size += _encode(bytes, defers, value[i]);
            }
            return size;
        }
        // fixext 8 / Date
        if (value instanceof Date) {
            var time = value.getTime();
            hi = Math.floor(time / Math.pow(2, 32));
            lo = time >>> 0;
            bytes.push(0xd7, 0, hi >> 24, hi >> 16, hi >> 8, hi, lo >> 24, lo >> 16, lo >> 8, lo);
            return 10;
        }
        if (value instanceof ArrayBuffer) {
            length = value.byteLength;
            // bin 8
            if (length < 0x100) {
                bytes.push(0xc4, length);
                size = 2;
            }
            else 
            // bin 16
            if (length < 0x10000) {
                bytes.push(0xc5, length >> 8, length);
                size = 3;
            }
            else 
            // bin 32
            if (length < 0x100000000) {
                bytes.push(0xc6, length >> 24, length >> 16, length >> 8, length);
                size = 5;
            }
            else {
                throw new Error('Buffer too large');
            }
            defers.push({ _bin: value, _length: length, _offset: bytes.length });
            return size + length;
        }
        if (typeof value.toJSON === 'function') {
            return _encode(bytes, defers, value.toJSON());
        }
        var keys = [], key = '';
        var allKeys = Object.keys(value);
        for (i = 0, l = allKeys.length; i < l; i++) {
            key = allKeys[i];
            if (typeof value[key] !== 'function') {
                keys.push(key);
            }
        }
        length = keys.length;
        // fixmap
        if (length < 0x10) {
            bytes.push(length | 0x80);
            size = 1;
        }
        // map 16
        else if (length < 0x10000) {
            bytes.push(0xde, length >> 8, length);
            size = 3;
        }
        // map 32
        else if (length < 0x100000000) {
            bytes.push(0xdf, length >> 24, length >> 16, length >> 8, length);
            size = 5;
        }
        else {
            throw new Error('Object too large');
        }
        for (i = 0; i < length; i++) {
            key = keys[i];
            size += _encode(bytes, defers, key);
            size += _encode(bytes, defers, value[key]);
        }
        return size;
    }
    // false/true
    if (type === 'boolean') {
        bytes.push(value ? 0xc3 : 0xc2);
        return 1;
    }
    // fixext 1 / undefined
    if (type === 'undefined') {
        bytes.push(0xd4, 0, 0);
        return 3;
    }
    throw new Error('Could not encode');
}
function encode(value) {
    var bytes = [];
    var defers = [];
    var size = _encode(bytes, defers, value);
    var buf = new ArrayBuffer(size);
    var view = new DataView(buf);
    var deferIndex = 0;
    var deferWritten = 0;
    var nextOffset = -1;
    if (defers.length > 0) {
        nextOffset = defers[0]._offset;
    }
    var defer, deferLength = 0, offset = 0;
    for (var i = 0, l = bytes.length; i < l; i++) {
        view.setUint8(deferWritten + i, bytes[i]);
        if (i + 1 !== nextOffset) {
            continue;
        }
        defer = defers[deferIndex];
        deferLength = defer._length;
        offset = deferWritten + nextOffset;
        if (defer._bin) {
            var bin = new Uint8Array(defer._bin);
            for (var j = 0; j < deferLength; j++) {
                view.setUint8(offset + j, bin[j]);
            }
        }
        else if (defer._str) {
            utf8Write(view, offset, defer._str);
        }
        else if (defer._float !== undefined) {
            view.setFloat64(offset, defer._float);
        }
        deferIndex++;
        deferWritten += deferLength;
        if (defers[deferIndex]) {
            nextOffset = defers[deferIndex]._offset;
        }
    }
    return buf;
}
exports.default = encode;


/***/ }),

/***/ "../colyseus/colyseus.js/lib/serializer/FossilDeltaSerializer.js":
/*!***********************************************************************!*\
  !*** ../colyseus/colyseus.js/lib/serializer/FossilDeltaSerializer.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FossilDeltaSerializer = void 0;
var state_listener_1 = __webpack_require__(/*! @gamestdio/state-listener */ "../colyseus/colyseus.js/node_modules/@gamestdio/state-listener/lib/index.js");
var fossilDelta = __importStar(__webpack_require__(/*! fossil-delta */ "../colyseus/colyseus.js/node_modules/fossil-delta/fossil-delta.js"));
var msgpack = __importStar(__webpack_require__(/*! ../msgpack */ "../colyseus/colyseus.js/lib/msgpack.js"));
var FossilDeltaSerializer = /** @class */ (function () {
    function FossilDeltaSerializer() {
        this.api = new state_listener_1.StateContainer({});
    }
    FossilDeltaSerializer.prototype.getState = function () {
        return this.api.state;
    };
    FossilDeltaSerializer.prototype.setState = function (encodedState) {
        this.previousState = new Uint8Array(encodedState);
        this.api.set(msgpack.decode(this.previousState));
    };
    FossilDeltaSerializer.prototype.patch = function (binaryPatch) {
        // apply patch
        this.previousState = new Uint8Array(fossilDelta.apply(this.previousState, binaryPatch));
        // trigger update callbacks
        this.api.set(msgpack.decode(this.previousState));
    };
    FossilDeltaSerializer.prototype.teardown = function () {
        this.api.removeAllListeners();
    };
    return FossilDeltaSerializer;
}());
exports.FossilDeltaSerializer = FossilDeltaSerializer;


/***/ }),

/***/ "../colyseus/colyseus.js/lib/serializer/SchemaSerializer.js":
/*!******************************************************************!*\
  !*** ../colyseus/colyseus.js/lib/serializer/SchemaSerializer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaSerializer = void 0;
var schema_1 = __webpack_require__(/*! @colyseus/schema */ "../colyseus/schema/lib/index.js");
var SchemaSerializer = /** @class */ (function () {
    function SchemaSerializer() {
    }
    SchemaSerializer.prototype.setState = function (rawState) {
        this.state.decode(rawState);
    };
    SchemaSerializer.prototype.getState = function () {
        return this.state;
    };
    SchemaSerializer.prototype.patch = function (patches) {
        this.state.decode(patches);
    };
    SchemaSerializer.prototype.teardown = function () {
        // this.state.onRemove
    };
    SchemaSerializer.prototype.handshake = function (bytes, it) {
        if (this.state) {
            // validate client/server definitinos
            var reflection = new schema_1.Reflection();
            reflection.decode(bytes, it);
        }
        else {
            // initialize reflected state from server
            this.state = schema_1.Reflection.decode(bytes);
        }
    };
    return SchemaSerializer;
}());
exports.SchemaSerializer = SchemaSerializer;


/***/ }),

/***/ "../colyseus/colyseus.js/lib/serializer/Serializer.js":
/*!************************************************************!*\
  !*** ../colyseus/colyseus.js/lib/serializer/Serializer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getSerializer = exports.registerSerializer = void 0;
var serializers = {};
function registerSerializer(id, serializer) {
    serializers[id] = serializer;
}
exports.registerSerializer = registerSerializer;
function getSerializer(id) {
    return serializers[id];
}
exports.getSerializer = getSerializer;


/***/ }),

/***/ "../colyseus/colyseus.js/node_modules/@colyseus/http/dist/index.esm.js":
/*!*****************************************************************************!*\
  !*** ../colyseus/colyseus.js/node_modules/@colyseus/http/dist/index.esm.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function apply(src, tar) {
	tar.headers = src.headers || {};
	tar.statusMessage = src.statusText;
	tar.statusCode = src.status;
	tar.data = src.response;
}

exports.send = function (method, uri, opts) {
	return new Promise(function (res, rej) {
		opts = opts || {};
		var k, str, tmp, arr;
		var req = new XMLHttpRequest;
		var headers = opts.headers || {};

		// IE compatible
		if (opts.timeout) req.timeout = opts.timeout;
		req.ontimeout = req.onerror = function (err) {
			err.timeout = err.type == 'timeout';
			rej(err);
		}

		req.open(method, uri.href || uri);

		req.onload = function () {
			arr = req.getAllResponseHeaders().trim().split(/[\r\n]+/);
			apply(req, req); //=> req.headers

			while (tmp = arr.shift()) {
				tmp = tmp.split(': ');
				req.headers[tmp.shift().toLowerCase()] = tmp.join(': ');
			}

			tmp = req.headers['content-type'];
			if (tmp && !!~tmp.indexOf('application/json')) {
				try {
					req.data = JSON.parse(req.data, opts.reviver);
				} catch (err) {
					apply(req, err);
					return rej(err);
				}
			}

			(req.status >= 400 ? rej : res)(req);
		};

		if ((str = opts.body) && typeof str == 'object') {
			headers['content-type'] = 'application/json';
			str = JSON.stringify(str);
		}

		req.withCredentials = !!opts.withCredentials;

		for (k in headers) {
			req.setRequestHeader(k, headers[k]);
		}

		req.send(str);
	});
}

exports.get = exports.send.bind(exports.send, 'GET');
exports.post = exports.send.bind(exports.send, 'POST');
exports.patch = exports.send.bind(exports.send, 'PATCH');
exports.del = exports.send.bind(exports.send, 'DELETE');
exports.put = exports.send.bind(exports.send, 'PUT');


/***/ }),

/***/ "../colyseus/colyseus.js/node_modules/@gamestdio/state-listener/lib/StateContainer.js":
/*!********************************************************************************************!*\
  !*** ../colyseus/colyseus.js/node_modules/@gamestdio/state-listener/lib/StateContainer.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var compare_1 = __webpack_require__(/*! ./compare */ "../colyseus/colyseus.js/node_modules/@gamestdio/state-listener/lib/compare.js");
var StateContainer = /** @class */ (function () {
    function StateContainer(state) {
        this.listeners = [];
        this.matcherPlaceholders = {
            ":id": /^([a-zA-Z0-9\-_]+)$/,
            ":number": /^([0-9]+)$/,
            ":string": /^(\w+)$/,
            ":axis": /^([xyz])$/,
            ":*": /(.*)/,
        };
        this.state = state;
        this.reset();
    }
    StateContainer.prototype.set = function (newState) {
        var patches = compare_1.compare(this.state, newState);
        this.state = newState;
        this.checkPatches(patches, this.listeners, this.defaultListener);
        return patches;
    };
    StateContainer.prototype.registerPlaceholder = function (placeholder, matcher) {
        this.matcherPlaceholders[placeholder] = matcher;
    };
    StateContainer.prototype.listen = function (segments, callback, immediate) {
        var _this = this;
        var rules;
        if (typeof (segments) === "function") {
            rules = [];
            callback = segments;
        }
        else {
            rules = segments.split("/");
        }
        if (callback.length > 1) {
            console.warn(".listen() accepts only one parameter.");
        }
        var listener = {
            callback: callback,
            rawRules: rules,
            rules: rules.map(function (segment) {
                if (typeof (segment) === "string") {
                    // replace placeholder matchers
                    return (segment.indexOf(":") === 0)
                        ? _this.matcherPlaceholders[segment] || _this.matcherPlaceholders[":*"]
                        : new RegExp("^" + segment + "$");
                }
                else {
                    return segment;
                }
            })
        };
        if (rules.length === 0) {
            this.defaultListener = listener;
        }
        else {
            this.listeners.push(listener);
        }
        // immediatelly try to trigger this listener.
        if (immediate) {
            this.checkPatches(compare_1.compare({}, this.state), [listener]);
        }
        return listener;
    };
    StateContainer.prototype.removeListener = function (listener) {
        for (var i = this.listeners.length - 1; i >= 0; i--) {
            if (this.listeners[i] === listener) {
                this.listeners.splice(i, 1);
            }
        }
    };
    StateContainer.prototype.removeAllListeners = function () {
        this.reset();
    };
    StateContainer.prototype.checkPatches = function (patches, listeners, defaultListener) {
        for (var j = 0, len = listeners.length; j < len; j++) {
            var listener = listeners[j];
            for (var i = patches.length - 1; i >= 0; i--) {
                var pathVariables = listener && this.getPathVariables(patches[i], listener);
                if (pathVariables) {
                    listener.callback({
                        path: pathVariables,
                        rawPath: patches[i].path,
                        operation: patches[i].operation,
                        value: patches[i].value
                    });
                    patches[i].matched = true;
                }
            }
        }
        // trigger default listener callback with each unmatched patch
        if (defaultListener) {
            for (var i = patches.length - 1; i >= 0; i--) {
                if (!patches[i].matched) {
                    defaultListener.callback(patches[i]);
                }
            }
        }
    };
    StateContainer.prototype.getPathVariables = function (patch, listener) {
        // skip if rules count differ from patch
        if (patch.path.length !== listener.rules.length) {
            return false;
        }
        var path = {};
        for (var i = 0, len = listener.rules.length; i < len; i++) {
            var matches = patch.path[i].match(listener.rules[i]);
            if (!matches || matches.length === 0 || matches.length > 2) {
                return false;
            }
            else if (listener.rawRules[i].substr(0, 1) === ":") {
                path[listener.rawRules[i].substr(1)] = matches[1];
            }
        }
        return path;
    };
    StateContainer.prototype.reset = function () {
        this.listeners = [];
    };
    return StateContainer;
}());
exports.StateContainer = StateContainer;


/***/ }),

/***/ "../colyseus/colyseus.js/node_modules/@gamestdio/state-listener/lib/compare.js":
/*!*************************************************************************************!*\
  !*** ../colyseus/colyseus.js/node_modules/@gamestdio/state-listener/lib/compare.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function compare(tree1, tree2) {
    var patches = [];
    generate(tree1, tree2, patches, []);
    return patches;
}
exports.compare = compare;
function concat(arr, value) {
    var newArr = arr.slice();
    newArr.push(value);
    return newArr;
}
function objectKeys(obj) {
    if (Array.isArray(obj)) {
        var keys_1 = new Array(obj.length);
        for (var k = 0; k < keys_1.length; k++) {
            keys_1[k] = "" + k;
        }
        return keys_1;
    }
    if (Object.keys) {
        return Object.keys(obj);
    }
    var keys = [];
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            keys.push(i);
        }
    }
    return keys;
}
;
// Dirty check if obj is different from mirror, generate patches and update mirror
function generate(mirror, obj, patches, path) {
    var newKeys = objectKeys(obj);
    var oldKeys = objectKeys(mirror);
    var deleted = false;
    for (var t = oldKeys.length - 1; t >= 0; t--) {
        var key = oldKeys[t];
        var oldVal = mirror[key];
        if (obj.hasOwnProperty(key) && !(obj[key] === undefined && oldVal !== undefined && Array.isArray(obj) === false)) {
            var newVal = obj[key];
            if (typeof oldVal == "object" && oldVal != null && typeof newVal == "object" && newVal != null) {
                generate(oldVal, newVal, patches, concat(path, key));
            }
            else {
                if (oldVal !== newVal) {
                    patches.push({
                        operation: "replace",
                        path: concat(path, key),
                        value: newVal,
                        previousValue: oldVal
                    });
                }
            }
        }
        else {
            patches.push({ operation: "remove", path: concat(path, key) });
            deleted = true; // property has been deleted
        }
    }
    if (!deleted && newKeys.length == oldKeys.length) {
        return;
    }
    for (var t = newKeys.length - 1; t >= 0; t--) {
        var key = newKeys[t];
        if (!mirror.hasOwnProperty(key) && obj[key] !== undefined) {
            var newVal = obj[key];
            var addPath = concat(path, key);
            // compare deeper additions
            if (typeof newVal == "object" && newVal != null) {
                generate({}, newVal, patches, addPath);
            }
            patches.push({ operation: "add", path: addPath, value: newVal });
        }
    }
}


/***/ }),

/***/ "../colyseus/colyseus.js/node_modules/@gamestdio/state-listener/lib/index.js":
/*!***********************************************************************************!*\
  !*** ../colyseus/colyseus.js/node_modules/@gamestdio/state-listener/lib/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StateContainer_1 = __webpack_require__(/*! ./StateContainer */ "../colyseus/colyseus.js/node_modules/@gamestdio/state-listener/lib/StateContainer.js");
exports.StateContainer = StateContainer_1.StateContainer;


/***/ }),

/***/ "../colyseus/colyseus.js/node_modules/@gamestdio/websocket/lib/backoff.js":
/*!********************************************************************************!*\
  !*** ../colyseus/colyseus.js/node_modules/@gamestdio/websocket/lib/backoff.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.createBackoff=createBackoff;var backoff={exponential:function exponential(attempt,delay){return Math.floor(Math.random()*Math.pow(2,attempt)*delay);},fibonacci:function fibonacci(attempt,delay){var current=1;if(attempt>current){var prev=1,current=2;for(var index=2;index<attempt;index++){var next=prev+current;prev=current;current=next;}}return Math.floor(Math.random()*current*delay);}};function createBackoff(type,options){return new Backoff(backoff[type],options);}function Backoff(func,options){this.func=func;this.attempts=0;this.delay=typeof options.initialDelay!=="undefined"?options.initialDelay:100;}Backoff.prototype.backoff=function(){setTimeout(this.onReady,this.func(++this.attempts,this.delay));};

/***/ }),

/***/ "../colyseus/colyseus.js/node_modules/@gamestdio/websocket/lib/index.js":
/*!******************************************************************************!*\
  !*** ../colyseus/colyseus.js/node_modules/@gamestdio/websocket/lib/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var createBackoff=__webpack_require__(/*! ./backoff */ "../colyseus/colyseus.js/node_modules/@gamestdio/websocket/lib/backoff.js").createBackoff;var WebSocketImpl=typeof WebSocket!=="undefined"?WebSocket:__webpack_require__(/*! ws */ 0);var WebSocketClient=function(){/**
   * @param url DOMString The URL to which to connect; this should be the URL to which the WebSocket server will respond.
   * @param protocols DOMString|DOMString[] Either a single protocol string or an array of protocol strings. These strings are used to indicate sub-protocols, so that a single server can implement multiple WebSocket sub-protocols (for example, you might want one server to be able to handle different types of interactions depending on the specified protocol). If you don't specify a protocol string, an empty string is assumed.
   */function WebSocketClient(url,protocols){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};_classCallCheck(this,WebSocketClient);this.url=url;this.protocols=protocols;this.reconnectEnabled=true;this.listeners={};this.backoff=createBackoff(options.backoff||'exponential',options);this.backoff.onReady=this.onBackoffReady.bind(this);if(typeof options.connect==="undefined"||options.connect){this.open();}}_createClass(WebSocketClient,[{key:'open',value:function open(){var reconnect=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;this.isReconnect=reconnect;// keep binaryType used on previous WebSocket connection
var binaryType=this.ws&&this.ws.binaryType;this.ws=new WebSocketImpl(this.url,this.protocols);this.ws.onclose=this.onCloseCallback.bind(this);this.ws.onerror=this.onErrorCallback.bind(this);this.ws.onmessage=this.onMessageCallback.bind(this);this.ws.onopen=this.onOpenCallback.bind(this);if(binaryType){this.ws.binaryType=binaryType;}}/**
   * @ignore
   */},{key:'onBackoffReady',value:function onBackoffReady(number,delay){// console.log("onBackoffReady", number + ' ' + delay + 'ms');
this.open(true);}/**
   * @ignore
   */},{key:'onCloseCallback',value:function onCloseCallback(e){if(!this.isReconnect&&this.listeners['onclose']){this.listeners['onclose'].apply(null,arguments);}if(this.reconnectEnabled&&e.code<3000){this.backoff.backoff();}}/**
   * @ignore
   */},{key:'onErrorCallback',value:function onErrorCallback(){if(this.listeners['onerror']){this.listeners['onerror'].apply(null,arguments);}}/**
   * @ignore
   */},{key:'onMessageCallback',value:function onMessageCallback(){if(this.listeners['onmessage']){this.listeners['onmessage'].apply(null,arguments);}}/**
   * @ignore
   */},{key:'onOpenCallback',value:function onOpenCallback(){if(this.listeners['onopen']){this.listeners['onopen'].apply(null,arguments);}if(this.isReconnect&&this.listeners['onreconnect']){this.listeners['onreconnect'].apply(null,arguments);}this.isReconnect=false;}/**
   * The number of bytes of data that have been queued using calls to send()
   * but not yet transmitted to the network. This value does not reset to zero
   * when the connection is closed; if you keep calling send(), this will
   * continue to climb.
   *
   * @type unsigned long
   * @readonly
   */},{key:'close',/**
   * Closes the WebSocket connection or connection attempt, if any. If the
   * connection is already CLOSED, this method does nothing.
   *
   * @param code A numeric value indicating the status code explaining why the connection is being closed. If this parameter is not specified, a default value of 1000 (indicating a normal "transaction complete" closure) is assumed. See the list of status codes on the CloseEvent page for permitted values.
   * @param reason A human-readable string explaining why the connection is closing. This string must be no longer than 123 bytes of UTF-8 text (not characters).
   *
   * @return void
   */value:function close(code,reason){if(typeof code=='undefined'){code=1000;}this.reconnectEnabled=false;this.ws.close(code,reason);}/**
   * Transmits data to the server over the WebSocket connection.
   * @param data DOMString|ArrayBuffer|Blob
   * @return void
   */},{key:'send',value:function send(data){this.ws.send(data);}/**
   * An event listener to be called when the WebSocket connection's readyState changes to CLOSED. The listener receives a CloseEvent named "close".
   * @param listener EventListener
   */},{key:'bufferedAmount',get:function get(){return this.ws.bufferedAmount;}/**
   * The current state of the connection; this is one of the Ready state constants.
   * @type unsigned short
   * @readonly
   */},{key:'readyState',get:function get(){return this.ws.readyState;}/**
   * A string indicating the type of binary data being transmitted by the
   * connection. This should be either "blob" if DOM Blob objects are being
   * used or "arraybuffer" if ArrayBuffer objects are being used.
   * @type DOMString
   */},{key:'binaryType',get:function get(){return this.ws.binaryType;},set:function set(binaryType){this.ws.binaryType=binaryType;}/**
   * The extensions selected by the server. This is currently only the empty
   * string or a list of extensions as negotiated by the connection.
   * @type DOMString
   */},{key:'extensions',get:function get(){return this.ws.extensions;},set:function set(extensions){this.ws.extensions=extensions;}/**
   * A string indicating the name of the sub-protocol the server selected;
   * this will be one of the strings specified in the protocols parameter when
   * creating the WebSocket object.
   * @type DOMString
   */},{key:'protocol',get:function get(){return this.ws.protocol;},set:function set(protocol){this.ws.protocol=protocol;}},{key:'onclose',set:function set(listener){this.listeners['onclose']=listener;},get:function get(){return this.listeners['onclose'];}/**
   * An event listener to be called when an error occurs. This is a simple event named "error".
   * @param listener EventListener
   */},{key:'onerror',set:function set(listener){this.listeners['onerror']=listener;},get:function get(){return this.listeners['onerror'];}/**
   * An event listener to be called when a message is received from the server. The listener receives a MessageEvent named "message".
   * @param listener EventListener
   */},{key:'onmessage',set:function set(listener){this.listeners['onmessage']=listener;},get:function get(){return this.listeners['onmessage'];}/**
   * An event listener to be called when the WebSocket connection's readyState changes to OPEN; this indicates that the connection is ready to send and receive data. The event is a simple one with the name "open".
   * @param listener EventListener
   */},{key:'onopen',set:function set(listener){this.listeners['onopen']=listener;},get:function get(){return this.listeners['onopen'];}/**
   * @param listener EventListener
   */},{key:'onreconnect',set:function set(listener){this.listeners['onreconnect']=listener;},get:function get(){return this.listeners['onreconnect'];}}]);return WebSocketClient;}();/**
 * The connection is not yet open.
 */WebSocketClient.CONNECTING=WebSocketImpl.CONNECTING;/**
 * The connection is open and ready to communicate.
 */WebSocketClient.OPEN=WebSocketImpl.OPEN;/**
 * The connection is in the process of closing.
 */WebSocketClient.CLOSING=WebSocketImpl.CLOSING;/**
 * The connection is closed or couldn't be opened.
 */WebSocketClient.CLOSED=WebSocketImpl.CLOSED;exports.default=WebSocketClient;

/***/ }),

/***/ "../colyseus/colyseus.js/node_modules/fossil-delta/fossil-delta.js":
/*!*************************************************************************!*\
  !*** ../colyseus/colyseus.js/node_modules/fossil-delta/fossil-delta.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Fossil SCM delta compression algorithm
// ======================================
//
// Format:
// http://www.fossil-scm.org/index.html/doc/tip/www/delta_format.wiki
//
// Algorithm:
// http://www.fossil-scm.org/index.html/doc/tip/www/delta_encoder_algorithm.wiki
//
// Original implementation:
// http://www.fossil-scm.org/index.html/artifact/d1b0598adcd650b3551f63b17dfc864e73775c3d
//
// LICENSE
// -------
//
// Copyright 2014 Dmitry Chestnykh (JavaScript port)
// Copyright 2007 D. Richard Hipp  (original C version)
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or
// without modification, are permitted provided that the
// following conditions are met:
//
//   1. Redistributions of source code must retain the above
//      copyright notice, this list of conditions and the
//      following disclaimer.
//
//   2. Redistributions in binary form must reproduce the above
//      copyright notice, this list of conditions and the
//      following disclaimer in the documentation and/or other
//      materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE AUTHORS ``AS IS'' AND ANY EXPRESS
// OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHORS OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
// BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
// OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation
// are those of the authors and contributors and should not be interpreted
// as representing official policies, either expressed or implied, of anybody
// else.
//
(function(root, factory) {
  if ( true && module.exports) module.exports = factory();
  else root.fossilDelta = factory();
})(this, function() {
'use strict';

var fossilDelta = {};

// Hash window width in bytes. Must be a power of two.
var NHASH = 16;

function RollingHash() {
  this.a = 0; // hash     (16-bit unsigned)
  this.b = 0; // values   (16-bit unsigned)
  this.i = 0; // start of the hash window (16-bit unsigned)
  this.z = new Array(NHASH); // the values that have been hashed.
}

// Initialize the rolling hash using the first NHASH bytes of
// z at the given position.
RollingHash.prototype.init = function(z, pos) {
  var a = 0, b = 0, i, x;
  for(i = 0; i < NHASH; i++){
    x = z[pos+i];
    a = (a + x) & 0xffff;
    b = (b + (NHASH-i)*x) & 0xffff;
    this.z[i] = x;
  }
  this.a = a & 0xffff;
  this.b = b & 0xffff;
  this.i = 0;
};

// Advance the rolling hash by a single byte "c".
RollingHash.prototype.next = function(c) {
  var old = this.z[this.i];
  this.z[this.i] = c;
  this.i = (this.i+1)&(NHASH-1);
  this.a = (this.a - old + c) & 0xffff;
  this.b = (this.b - NHASH*old + this.a) & 0xffff;
};

// Return a 32-bit hash value.
RollingHash.prototype.value = function() {
  return ((this.a & 0xffff) | (this.b & 0xffff)<<16)>>>0;
};

var zDigits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~".
                split('').map(function (x) { return x.charCodeAt(0); });

var zValue = [
  -1, -1, -1, -1, -1, -1, -1, -1,   -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1,   -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1,   -1, -1, -1, -1, -1, -1, -1, -1,
   0,  1,  2,  3,  4,  5,  6,  7,    8,  9, -1, -1, -1, -1, -1, -1,
  -1, 10, 11, 12, 13, 14, 15, 16,   17, 18, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 28, 29, 30, 31, 32,   33, 34, 35, -1, -1, -1, -1, 36,
  -1, 37, 38, 39, 40, 41, 42, 43,   44, 45, 46, 47, 48, 49, 50, 51,
  52, 53, 54, 55, 56, 57, 58, 59,   60, 61, 62, -1, -1, -1, 63, -1
];

// Reader reads bytes, chars, ints from array.
function Reader(array) {
  this.a = array; // source array
  this.pos = 0;   // current position in array
}

Reader.prototype.haveBytes = function() {
  return this.pos < this.a.length;
};

Reader.prototype.getByte = function() {
  var b = this.a[this.pos];
  this.pos++;
  if (this.pos > this.a.length) throw new RangeError('out of bounds');
  return b;
};

Reader.prototype.getChar = function() {
  return String.fromCharCode(this.getByte());
};

// Read base64-encoded unsigned integer.
Reader.prototype.getInt = function(){
  var v = 0, c;
  while(this.haveBytes() && (c = zValue[0x7f & this.getByte()]) >= 0) {
     v = (v<<6) + c;
  }
  this.pos--;
  return v >>> 0;
};


// Write writes an array.
function Writer() {
  this.a = [];
}

Writer.prototype.toArray = function() {
  return this.a;
};

Writer.prototype.putByte = function(b) {
  this.a.push(b & 0xff);
};

// Write an ASCII character (s is a one-char string).
Writer.prototype.putChar = function(s) {
  this.putByte(s.charCodeAt(0));
};

// Write a base64 unsigned integer.
Writer.prototype.putInt = function(v){
  var i, j, zBuf = [];
  if (v === 0) {
    this.putChar('0');
    return;
  }
  for (i = 0; v > 0; i++, v >>>= 6)
    zBuf.push(zDigits[v&0x3f]);
  for (j = i-1; j >= 0; j--)
    this.putByte(zBuf[j]);
};

// Copy from array at start to end.
Writer.prototype.putArray = function(a, start, end) {
  for (var i = start; i < end; i++) this.a.push(a[i]);
};

// Return the number digits in the base64 representation of a positive integer.
function digitCount(v){
  var i, x;
  for (i = 1, x = 64; v >= x; i++, x <<= 6){ /* nothing */ }
  return i;
}

// Return a 32-bit checksum of the array.
function checksum(arr) {
  var sum0 = 0, sum1 = 0, sum2 = 0, sum3 = 0,
      z = 0, N = arr.length;
  //TODO measure if this unrolling is helpful.
  while (N >= 16) {
    sum0 = sum0 + arr[z+0] | 0;
    sum1 = sum1 + arr[z+1] | 0;
    sum2 = sum2 + arr[z+2] | 0;
    sum3 = sum3 + arr[z+3] | 0;

    sum0 = sum0 + arr[z+4] | 0;
    sum1 = sum1 + arr[z+5] | 0;
    sum2 = sum2 + arr[z+6] | 0;
    sum3 = sum3 + arr[z+7] | 0;

    sum0 = sum0 + arr[z+8] | 0;
    sum1 = sum1 + arr[z+9] | 0;
    sum2 = sum2 + arr[z+10] | 0;
    sum3 = sum3 + arr[z+11] | 0;

    sum0 = sum0 + arr[z+12] | 0;
    sum1 = sum1 + arr[z+13] | 0;
    sum2 = sum2 + arr[z+14] | 0;
    sum3 = sum3 + arr[z+15] | 0;

    z += 16;
    N -= 16;
  }
  while (N >= 4) {
    sum0 = sum0 + arr[z+0] | 0;
    sum1 = sum1 + arr[z+1] | 0;
    sum2 = sum2 + arr[z+2] | 0;
    sum3 = sum3 + arr[z+3] | 0;
    z += 4;
    N -= 4;
  }
  sum3 = (((sum3 + (sum2 << 8) | 0) + (sum1 << 16) | 0) + (sum0 << 24) | 0);
  /* jshint -W086 */
  switch (N) {
    case 3: sum3 = sum3 + (arr[z+2] <<  8) | 0; /* falls through */
    case 2: sum3 = sum3 + (arr[z+1] << 16) | 0; /* falls through */
    case 1: sum3 = sum3 + (arr[z+0] << 24) | 0; /* falls through */
  }
  return sum3 >>> 0;
}

// Create a new delta from src to out.
fossilDelta.create = function(src, out) {
  var zDelta = new Writer();
  var lenOut = out.length;
  var lenSrc = src.length;
  var i, lastRead = -1;

  zDelta.putInt(lenOut);
  zDelta.putChar('\n');

  // If the source is very small, it means that we have no
  // chance of ever doing a copy command.  Just output a single
  // literal segment for the entire target and exit.
  if (lenSrc <= NHASH) {
    zDelta.putInt(lenOut);
    zDelta.putChar(':');
    zDelta.putArray(out, 0, lenOut);
    zDelta.putInt(checksum(out));
    zDelta.putChar(';');
    return zDelta.toArray();
  }

  // Compute the hash table used to locate matching sections in the source.
  var nHash = Math.ceil(lenSrc / NHASH);
  var collide =  new Array(nHash);
  var landmark = new Array(nHash);
  for (i = 0; i < collide.length; i++) collide[i] = -1;
  for (i = 0; i < landmark.length; i++) landmark[i] = -1;
  var hv, h = new RollingHash();
  for (i = 0; i < lenSrc-NHASH; i += NHASH) {
    h.init(src, i);
    hv = h.value() % nHash;
    collide[i/NHASH] = landmark[hv];
    landmark[hv] = i/NHASH;
  }

  var base = 0;
  var iSrc, iBlock, bestCnt, bestOfst, bestLitsz;
  while (base+NHASH<lenOut) {
    bestOfst=0;
    bestLitsz=0;
    h.init(out, base);
    i = 0; // Trying to match a landmark against zOut[base+i]
    bestCnt = 0;
    while(1) {
      var limit = 250;
      hv = h.value() % nHash;
      iBlock = landmark[hv];
      while (iBlock >= 0 && (limit--)>0 ) {
        //
        // The hash window has identified a potential match against
        // landmark block iBlock.  But we need to investigate further.
        //
        // Look for a region in zOut that matches zSrc. Anchor the search
        // at zSrc[iSrc] and zOut[base+i].  Do not include anything prior to
        // zOut[base] or after zOut[outLen] nor anything after zSrc[srcLen].
        //
        // Set cnt equal to the length of the match and set ofst so that
        // zSrc[ofst] is the first element of the match.  litsz is the number
        // of characters between zOut[base] and the beginning of the match.
        // sz will be the overhead (in bytes) needed to encode the copy
        // command.  Only generate copy command if the overhead of the
        // copy command is less than the amount of literal text to be copied.
        //
        var cnt, ofst, litsz;
        var j, k, x, y;
        var sz;

        // Beginning at iSrc, match forwards as far as we can.
        // j counts the number of characters that match.
        iSrc = iBlock*NHASH;
        for (j = 0, x = iSrc, y = base+i; x < lenSrc && y < lenOut; j++, x++, y++) {
          if (src[x] !== out[y]) break;
        }
        j--;

        // Beginning at iSrc-1, match backwards as far as we can.
        // k counts the number of characters that match.
        for (k = 1; k < iSrc && k <= i; k++) {
          if (src[iSrc-k] !== out[base+i-k]) break;
        }
        k--;

        // Compute the offset and size of the matching region.
        ofst = iSrc-k;
        cnt = j+k+1;
        litsz = i-k;  // Number of bytes of literal text before the copy
        // sz will hold the number of bytes needed to encode the "insert"
        // command and the copy command, not counting the "insert" text.
        sz = digitCount(i-k)+digitCount(cnt)+digitCount(ofst)+3;
        if (cnt >= sz && cnt > bestCnt) {
          // Remember this match only if it is the best so far and it
          // does not increase the file size.
          bestCnt = cnt;
          bestOfst = iSrc-k;
          bestLitsz = litsz;
        }

        // Check the next matching block
        iBlock = collide[iBlock];
      }

      // We have a copy command that does not cause the delta to be larger
      // than a literal insert.  So add the copy command to the delta.
      if (bestCnt > 0) {
        if (bestLitsz > 0) {
          // Add an insert command before the copy.
          zDelta.putInt(bestLitsz);
          zDelta.putChar(':');
          zDelta.putArray(out, base, base+bestLitsz);
          base += bestLitsz;
        }
        base += bestCnt;
        zDelta.putInt(bestCnt);
        zDelta.putChar('@');
        zDelta.putInt(bestOfst);
        zDelta.putChar(',');
        if (bestOfst + bestCnt -1 > lastRead) {
          lastRead = bestOfst + bestCnt - 1;
        }
        bestCnt = 0;
        break;
      }

      // If we reach this point, it means no match is found so far
      if (base+i+NHASH >= lenOut){
        // We have reached the end and have not found any
        // matches.  Do an "insert" for everything that does not match
        zDelta.putInt(lenOut-base);
        zDelta.putChar(':');
        zDelta.putArray(out, base, base+lenOut-base);
        base = lenOut;
        break;
      }

      // Advance the hash by one character. Keep looking for a match.
      h.next(out[base+i+NHASH]);
      i++;
    }
  }
  // Output a final "insert" record to get all the text at the end of
  // the file that does not match anything in the source.
  if(base < lenOut) {
    zDelta.putInt(lenOut-base);
    zDelta.putChar(':');
    zDelta.putArray(out, base, base+lenOut-base);
  }
  // Output the final checksum record.
  zDelta.putInt(checksum(out));
  zDelta.putChar(';');
  return zDelta.toArray();
};

// Return the size (in bytes) of the output from applying a delta.
fossilDelta.outputSize = function(delta){
  var zDelta = new Reader(delta);
  var size = zDelta.getInt();
  if (zDelta.getChar() !== '\n')
    throw new Error('size integer not terminated by \'\\n\'');
  return size;
};

// Apply a delta.
fossilDelta.apply = function(src, delta, opts) {
  var limit, total = 0;
  var zDelta = new Reader(delta);
  var lenSrc = src.length;
  var lenDelta = delta.length;

  limit = zDelta.getInt();
  if (zDelta.getChar() !== '\n')
    throw new Error('size integer not terminated by \'\\n\'');
  var zOut = new Writer();
  while(zDelta.haveBytes()) {
    var cnt, ofst;
    cnt = zDelta.getInt();

    switch (zDelta.getChar()) {
      case '@':
        ofst = zDelta.getInt();
        if (zDelta.haveBytes() && zDelta.getChar() !== ',')
          throw new Error('copy command not terminated by \',\'');
        total += cnt;
        if (total > limit)
          throw new Error('copy exceeds output file size');
        if (ofst+cnt > lenSrc)
          throw new Error('copy extends past end of input');
        zOut.putArray(src, ofst, ofst+cnt);
        break;

      case ':':
        total += cnt;
        if (total > limit)
          throw new Error('insert command gives an output larger than predicted');
        if (cnt > lenDelta)
          throw new Error('insert count exceeds size of delta');
        zOut.putArray(zDelta.a, zDelta.pos, zDelta.pos+cnt);
        zDelta.pos += cnt;
        break;

      case ';':
        var out = zOut.toArray();
        if ((!opts || opts.verifyChecksum !== false) && cnt !== checksum(out))
          throw new Error('bad checksum');
        if (total !== limit)
          throw new Error('generated size does not match predicted size');
        return out;

      default:
        throw new Error('unknown delta operator');
    }
  }
  throw new Error('unterminated delta');
};

return fossilDelta;

});


/***/ }),

/***/ "../colyseus/colyseus.js/node_modules/nanoevents/index.js":
/*!****************************************************************!*\
  !*** ../colyseus/colyseus.js/node_modules/nanoevents/index.js ***!
  \****************************************************************/
/*! exports provided: createNanoEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNanoEvents", function() { return createNanoEvents; });
let createNanoEvents = () => ({
  events: {},
  emit (event, ...args) {
    for (let i of this.events[event] || []) {
      i(...args)
    }
  },
  on (event, cb) {
    ;(this.events[event] = this.events[event] || []).push(cb)
    return () => (this.events[event] = this.events[event].filter(i => i !== cb))
  }
})




/***/ }),

/***/ "../colyseus/colyseus.js/node_modules/strong-events/lib/index.js":
/*!***********************************************************************!*\
  !*** ../colyseus/colyseus.js/node_modules/strong-events/lib/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.handlers = [];
    }
    EventEmitter.prototype.register = function (cb, once) {
        if (once === void 0) { once = false; }
        this.handlers.push(cb);
        return this;
    };
    EventEmitter.prototype.invoke = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.handlers.forEach(function (handler) { return handler.apply(void 0, args); });
    };
    EventEmitter.prototype.invokeAsync = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Promise.all(this.handlers.map(function (handler) { return handler.apply(void 0, args); }));
    };
    EventEmitter.prototype.remove = function (cb) {
        var index = this.handlers.indexOf(cb);
        this.handlers[index] = this.handlers[this.handlers.length - 1];
        this.handlers.pop();
    };
    EventEmitter.prototype.clear = function () {
        this.handlers = [];
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
function createSignal() {
    var emitter = new EventEmitter();
    function register(cb) {
        return emitter.register(cb, this === null);
    }
    ;
    register.once = function (cb) {
        var callback = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            cb.apply(void 0, args);
            emitter.remove(callback);
        };
        emitter.register(callback);
    };
    register.remove = function (cb) { return emitter.remove(cb); };
    register.invoke = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return emitter.invoke.apply(emitter, args);
    };
    register.invokeAsync = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return emitter.invokeAsync.apply(emitter, args);
    };
    register.clear = function () { return emitter.clear(); };
    return register;
}
exports.createSignal = createSignal;


/***/ }),

/***/ "../colyseus/schema/lib/ChangeTree.js":
/*!********************************************!*\
  !*** ../colyseus/schema/lib/ChangeTree.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeTree = void 0;
var Schema_1 = __webpack_require__(/*! ./Schema */ "../colyseus/schema/lib/Schema.js");
var ArraySchema_1 = __webpack_require__(/*! ./types/ArraySchema */ "../colyseus/schema/lib/types/ArraySchema.js");
var MapSchema_1 = __webpack_require__(/*! ./types/MapSchema */ "../colyseus/schema/lib/types/MapSchema.js");
var ChangeTree = /** @class */ (function () {
    function ChangeTree(indexes, parentField, parent) {
        if (indexes === void 0) { indexes = {}; }
        if (parentField === void 0) { parentField = null; }
        this.changed = false;
        this.changes = new Set();
        this.allChanges = new Set();
        this.deletedKeys = {};
        this.fieldIndexes = indexes;
        this.parent = parent;
        this.parentField = parentField;
    }
    ChangeTree.prototype.change = function (fieldName, isDelete) {
        if (isDelete === void 0) { isDelete = false; }
        var fieldIndex = this.fieldIndexes[fieldName];
        var field = (typeof (fieldIndex) === "number") ? fieldIndex : fieldName;
        if (!isDelete) {
            this.changed = true;
            this.changes.add(field);
            this.allChanges.add(field);
        }
        else if (isDelete) {
            // if (this.changes.has(field))  {
            //     /**
            //      * un-flag a change if item has been added AND removed in the same patch.
            //      * (https://github.com/colyseus/colyseus-unity3d/issues/103)
            //      */
            //     this.changes.delete(field);
            // } else {
            this.changed = true;
            this.changes.add(field);
            // }
            // discard all-changes for removed items.
            this.allChanges.delete(field);
        }
        if (this.parent) {
            this.parent.change(this.parentField);
        }
    };
    ChangeTree.prototype.mapIndex = function (instance, key) {
        if (typeof instance === "object") {
            if (!this.indexMap) {
                this.indexMap = new Map();
                this.indexChange = new Map();
            }
            this.indexMap.set(instance, key);
        }
    };
    ChangeTree.prototype.getIndex = function (instance) {
        return this.indexMap && this.indexMap.get(instance);
    };
    ChangeTree.prototype.deleteIndex = function (instance) {
        if (typeof instance === "object") {
            this.deletedKeys[this.indexMap.get(instance)] = true;
            this.indexMap.delete(instance);
        }
    };
    ChangeTree.prototype.isDeleted = function (key) {
        return this.deletedKeys[key] !== undefined;
    };
    ChangeTree.prototype.mapIndexChange = function (instance, previousKey) {
        if (typeof instance === "object" && !this.indexChange.has(instance)) {
            this.indexChange.set(instance, previousKey);
        }
    };
    ChangeTree.prototype.getIndexChange = function (instance) {
        return this.indexChange && this.indexChange.get(instance);
    };
    ChangeTree.prototype.deleteIndexChange = function (instance) {
        if (typeof instance === "object") {
            this.indexChange.delete(instance);
        }
    };
    ChangeTree.prototype.changeAll = function (obj) {
        if (obj instanceof Schema_1.Schema) {
            var schema = obj['_schema'];
            for (var field in schema) {
                // ensure ArraySchema and MapSchema already initialized
                // on its structure have a valid parent.
                if ((obj[field] instanceof Schema_1.Schema ||
                    obj[field] instanceof ArraySchema_1.ArraySchema ||
                    obj[field] instanceof MapSchema_1.MapSchema) &&
                    !obj[field].$changes.parent.parent) {
                    obj[field].$changes.parent = this;
                }
                if (obj[field] !== undefined) {
                    this.change(field);
                }
            }
        }
        else {
            var keys = Object.keys(obj);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                if (obj[key] !== undefined) {
                    this.change(key);
                }
            }
        }
    };
    ChangeTree.prototype.discard = function () {
        this.changed = false;
        this.changes.clear();
        this.deletedKeys = {};
        if (this.indexChange) {
            this.indexChange.clear();
        }
    };
    ChangeTree.prototype.clone = function () {
        return new ChangeTree(this.fieldIndexes, this.parentField, undefined);
    };
    return ChangeTree;
}());
exports.ChangeTree = ChangeTree;
//# sourceMappingURL=ChangeTree.js.map

/***/ }),

/***/ "../colyseus/schema/lib/Reflection.js":
/*!********************************************!*\
  !*** ../colyseus/schema/lib/Reflection.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reflection = exports.ReflectionType = exports.ReflectionField = void 0;
var annotations_1 = __webpack_require__(/*! ./annotations */ "../colyseus/schema/lib/annotations.js");
var Schema_1 = __webpack_require__(/*! ./Schema */ "../colyseus/schema/lib/Schema.js");
var ArraySchema_1 = __webpack_require__(/*! ./types/ArraySchema */ "../colyseus/schema/lib/types/ArraySchema.js");
var MapSchema_1 = __webpack_require__(/*! ./types/MapSchema */ "../colyseus/schema/lib/types/MapSchema.js");
var reflectionContext = new annotations_1.Context();
/**
 * Reflection
 */
var ReflectionField = /** @class */ (function (_super) {
    __extends(ReflectionField, _super);
    function ReflectionField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        annotations_1.type("string", reflectionContext)
    ], ReflectionField.prototype, "name", void 0);
    __decorate([
        annotations_1.type("string", reflectionContext)
    ], ReflectionField.prototype, "type", void 0);
    __decorate([
        annotations_1.type("uint8", reflectionContext)
    ], ReflectionField.prototype, "referencedType", void 0);
    return ReflectionField;
}(Schema_1.Schema));
exports.ReflectionField = ReflectionField;
var ReflectionType = /** @class */ (function (_super) {
    __extends(ReflectionType, _super);
    function ReflectionType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fields = new ArraySchema_1.ArraySchema();
        return _this;
    }
    __decorate([
        annotations_1.type("uint8", reflectionContext)
    ], ReflectionType.prototype, "id", void 0);
    __decorate([
        annotations_1.type([ReflectionField], reflectionContext)
    ], ReflectionType.prototype, "fields", void 0);
    return ReflectionType;
}(Schema_1.Schema));
exports.ReflectionType = ReflectionType;
var Reflection = /** @class */ (function (_super) {
    __extends(Reflection, _super);
    function Reflection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.types = new ArraySchema_1.ArraySchema();
        return _this;
    }
    Reflection.encode = function (instance) {
        var rootSchemaType = instance.constructor;
        var reflection = new Reflection();
        reflection.rootType = rootSchemaType._typeid;
        var buildType = function (currentType, schema) {
            for (var fieldName in schema) {
                var field = new ReflectionField();
                field.name = fieldName;
                var fieldType = void 0;
                if (typeof (schema[fieldName]) === "string") {
                    fieldType = schema[fieldName];
                }
                else {
                    var isSchema = typeof (schema[fieldName]) === "function";
                    var isArray = Array.isArray(schema[fieldName]);
                    var isMap = !isArray && schema[fieldName].map;
                    var childTypeSchema = void 0;
                    if (isSchema) {
                        fieldType = "ref";
                        childTypeSchema = schema[fieldName];
                    }
                    else if (isArray) {
                        fieldType = "array";
                        if (typeof (schema[fieldName][0]) === "string") {
                            fieldType += ":" + schema[fieldName][0]; // array:string
                        }
                        else {
                            childTypeSchema = schema[fieldName][0];
                        }
                    }
                    else if (isMap) {
                        fieldType = "map";
                        if (typeof (schema[fieldName].map) === "string") {
                            fieldType += ":" + schema[fieldName].map; // array:string
                        }
                        else {
                            childTypeSchema = schema[fieldName].map;
                        }
                    }
                    field.referencedType = (childTypeSchema)
                        ? childTypeSchema._typeid
                        : 255;
                }
                field.type = fieldType;
                currentType.fields.push(field);
            }
            reflection.types.push(currentType);
        };
        var types = rootSchemaType._context.types;
        for (var typeid in types) {
            var type_1 = new ReflectionType();
            type_1.id = Number(typeid);
            buildType(type_1, types[typeid]._schema);
        }
        return reflection.encodeAll();
    };
    Reflection.decode = function (bytes) {
        var context = new annotations_1.Context();
        var reflection = new Reflection();
        reflection.decode(bytes);
        var schemaTypes = reflection.types.reduce(function (types, reflectionType) {
            types[reflectionType.id] = /** @class */ (function (_super) {
                __extends(_, _super);
                function _() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return _;
            }(Schema_1.Schema));
            return types;
        }, {});
        reflection.types.forEach(function (reflectionType, i) {
            reflectionType.fields.forEach(function (field) {
                var schemaType = schemaTypes[reflectionType.id];
                if (field.referencedType !== undefined) {
                    var refType = schemaTypes[field.referencedType];
                    // map or array of primitive type (255)
                    if (!refType) {
                        refType = field.type.split(":")[1];
                    }
                    if (field.type.indexOf("array") === 0) {
                        annotations_1.type([refType], context)(schemaType.prototype, field.name);
                    }
                    else if (field.type.indexOf("map") === 0) {
                        annotations_1.type({ map: refType }, context)(schemaType.prototype, field.name);
                    }
                    else if (field.type === "ref") {
                        annotations_1.type(refType, context)(schemaType.prototype, field.name);
                    }
                }
                else {
                    annotations_1.type(field.type, context)(schemaType.prototype, field.name);
                }
            });
        });
        var rootType = schemaTypes[reflection.rootType];
        var rootInstance = new rootType();
        /**
         * auto-initialize referenced types on root type
         * to allow registering listeners immediatelly on client-side
         */
        for (var fieldName in rootType._schema) {
            var fieldType = rootType._schema[fieldName];
            if (typeof (fieldType) !== "string") {
                var isSchema = typeof (fieldType) === "function";
                var isArray = Array.isArray(fieldType);
                var isMap = !isArray && fieldType.map;
                rootInstance[fieldName] = (isArray)
                    ? new ArraySchema_1.ArraySchema()
                    : (isMap)
                        ? new MapSchema_1.MapSchema()
                        : (isSchema)
                            ? new fieldType()
                            : undefined;
            }
        }
        return rootInstance;
    };
    __decorate([
        annotations_1.type([ReflectionType], reflectionContext)
    ], Reflection.prototype, "types", void 0);
    __decorate([
        annotations_1.type("uint8", reflectionContext)
    ], Reflection.prototype, "rootType", void 0);
    return Reflection;
}(Schema_1.Schema));
exports.Reflection = Reflection;
//# sourceMappingURL=Reflection.js.map

/***/ }),

/***/ "../colyseus/schema/lib/Schema.js":
/*!****************************************!*\
  !*** ../colyseus/schema/lib/Schema.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = void 0;
var spec_1 = __webpack_require__(/*! ./spec */ "../colyseus/schema/lib/spec.js");
var encode = __webpack_require__(/*! ./encoding/encode */ "../colyseus/schema/lib/encoding/encode.js");
var decode = __webpack_require__(/*! ./encoding/decode */ "../colyseus/schema/lib/encoding/decode.js");
var ArraySchema_1 = __webpack_require__(/*! ./types/ArraySchema */ "../colyseus/schema/lib/types/ArraySchema.js");
var MapSchema_1 = __webpack_require__(/*! ./types/MapSchema */ "../colyseus/schema/lib/types/MapSchema.js");
var ChangeTree_1 = __webpack_require__(/*! ./ChangeTree */ "../colyseus/schema/lib/ChangeTree.js");
var EventEmitter_1 = __webpack_require__(/*! ./events/EventEmitter */ "../colyseus/schema/lib/events/EventEmitter.js");
var EncodeSchemaError = /** @class */ (function (_super) {
    __extends(EncodeSchemaError, _super);
    function EncodeSchemaError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EncodeSchemaError;
}(Error));
function assertType(value, type, klass, field) {
    var typeofTarget;
    var allowNull = false;
    switch (type) {
        case "number":
        case "int8":
        case "uint8":
        case "int16":
        case "uint16":
        case "int32":
        case "uint32":
        case "int64":
        case "uint64":
        case "float32":
        case "float64":
            typeofTarget = "number";
            if (isNaN(value)) {
                console.log("trying to encode \"NaN\" in " + klass.constructor.name + "#" + field);
            }
            break;
        case "string":
            typeofTarget = "string";
            allowNull = true;
            break;
        case "boolean":
            // boolean is always encoded as true/false based on truthiness
            return;
    }
    if (typeof (value) !== typeofTarget && (!allowNull || (allowNull && value !== null))) {
        var foundValue = "'" + JSON.stringify(value) + "'" + (value && value.constructor && " (" + value.constructor.name + ")");
        throw new EncodeSchemaError("a '" + typeofTarget + "' was expected, but " + foundValue + " was provided in " + klass.constructor.name + "#" + field);
    }
}
function assertInstanceType(value, type, klass, field) {
    if (!(value instanceof type)) {
        throw new EncodeSchemaError("a '" + type.name + "' was expected, but '" + value.constructor.name + "' was provided in " + klass.constructor.name + "#" + field);
    }
}
function encodePrimitiveType(type, bytes, value, klass, field) {
    assertType(value, type, klass, field);
    var encodeFunc = encode[type];
    if (encodeFunc) {
        encodeFunc(bytes, value);
    }
    else {
        throw new EncodeSchemaError("a '" + type + "' was expected, but " + value + " was provided in " + klass.constructor.name + "#" + field);
    }
}
function decodePrimitiveType(type, bytes, it) {
    return decode[type](bytes, it);
}
/**
 * Schema encoder / decoder
 */
var Schema = /** @class */ (function () {
    // allow inherited classes to have a constructor
    function Schema() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // fix enumerability of fields for end-user
        Object.defineProperties(this, {
            $changes: {
                value: new ChangeTree_1.ChangeTree(this._indexes),
                enumerable: false,
                writable: true
            },
            $listeners: {
                value: {},
                enumerable: false,
                writable: true
            },
        });
        var descriptors = this._descriptors;
        if (descriptors) {
            Object.defineProperties(this, descriptors);
        }
    }
    Schema.onError = function (e) {
        console.error(e);
    };
    Object.defineProperty(Schema.prototype, "_schema", {
        get: function () { return this.constructor._schema; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "_descriptors", {
        get: function () { return this.constructor._descriptors; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "_indexes", {
        get: function () { return this.constructor._indexes; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "_fieldsByIndex", {
        get: function () { return this.constructor._fieldsByIndex; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "_filters", {
        get: function () { return this.constructor._filters; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "_deprecated", {
        get: function () { return this.constructor._deprecated; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "$changed", {
        get: function () { return this.$changes.changed; },
        enumerable: false,
        configurable: true
    });
    Schema.prototype.listen = function (attr, callback) {
        var _this = this;
        if (!this.$listeners[attr]) {
            this.$listeners[attr] = new EventEmitter_1.EventEmitter();
        }
        this.$listeners[attr].register(callback);
        // return un-register callback.
        return function () {
            return _this.$listeners[attr].remove(callback);
        };
    };
    Schema.prototype.decode = function (bytes, it) {
        if (it === void 0) { it = { offset: 0 }; }
        var changes = [];
        var schema = this._schema;
        var fieldsByIndex = this._fieldsByIndex;
        var totalBytes = bytes.length;
        // skip TYPE_ID of existing instances
        if (bytes[it.offset] === spec_1.TYPE_ID) {
            it.offset += 2;
        }
        var _loop_1 = function () {
            var isNil = decode.nilCheck(bytes, it) && ++it.offset;
            var index = bytes[it.offset++];
            if (index === spec_1.END_OF_STRUCTURE) {
                return "break";
            }
            var field = fieldsByIndex[index];
            var _field = "_" + field;
            var type = schema[field];
            var value = void 0;
            var previousValue = this_1[_field];
            var hasChange = false;
            if (!field) {
                return "continue";
            }
            else if (isNil) {
                value = null;
                hasChange = true;
            }
            else if (type._schema) {
                previousValue = previousValue && this_1[_field].clone();
                value = this_1[_field] || this_1.createTypeInstance(bytes, it, type);
                value.decode(bytes, it);
                hasChange = true;
            }
            else if (Array.isArray(type)) {
                type = type[0];
                var valueRef_1 = this_1[_field] || new ArraySchema_1.ArraySchema();
                value = valueRef_1.clone(true);
                var newLength_1 = decode.number(bytes, it);
                var numChanges = Math.min(decode.number(bytes, it), newLength_1);
                var hasRemoval = (value.length > newLength_1);
                hasChange = (numChanges > 0) || hasRemoval;
                // FIXME: this may not be reliable. possibly need to encode this variable during serialization
                var hasIndexChange = false;
                // ensure current array has the same length as encoded one
                if (hasRemoval) {
                    // decrease removed items from number of changes.
                    // no need to iterate through them, as they're going to be removed.
                    Array.prototype.splice.call(value, newLength_1).forEach(function (itemRemoved, i) {
                        if (itemRemoved && itemRemoved.onRemove) {
                            try {
                                itemRemoved.onRemove();
                            }
                            catch (e) {
                                Schema.onError(e);
                            }
                        }
                        if (valueRef_1.onRemove) {
                            try {
                                valueRef_1.onRemove(itemRemoved, newLength_1 + i);
                            }
                            catch (e) {
                                Schema.onError(e);
                            }
                        }
                    });
                }
                for (var i = 0; i < numChanges; i++) {
                    var newIndex = decode.number(bytes, it);
                    var indexChangedFrom = void 0; // index change check
                    if (decode.indexChangeCheck(bytes, it)) {
                        decode.uint8(bytes, it);
                        indexChangedFrom = decode.number(bytes, it);
                        hasIndexChange = true;
                    }
                    var isNew = (!hasIndexChange && value[newIndex] === undefined) || (hasIndexChange && indexChangedFrom === undefined);
                    if (type.prototype instanceof Schema) {
                        var item = void 0;
                        if (isNew) {
                            item = this_1.createTypeInstance(bytes, it, type);
                        }
                        else if (indexChangedFrom !== undefined) {
                            item = valueRef_1[indexChangedFrom];
                        }
                        else {
                            item = valueRef_1[newIndex];
                        }
                        if (!item) {
                            item = this_1.createTypeInstance(bytes, it, type);
                            isNew = true;
                        }
                        item.decode(bytes, it);
                        value[newIndex] = item;
                    }
                    else {
                        value[newIndex] = decodePrimitiveType(type, bytes, it);
                    }
                    if (isNew) {
                        if (valueRef_1.onAdd) {
                            try {
                                valueRef_1.onAdd(value[newIndex], newIndex);
                            }
                            catch (e) {
                                Schema.onError(e);
                            }
                        }
                    }
                    else if (valueRef_1.onChange) {
                        try {
                            valueRef_1.onChange(value[newIndex], newIndex);
                        }
                        catch (e) {
                            Schema.onError(e);
                        }
                    }
                }
            }
            else if (type.map) {
                type = type.map;
                var valueRef = this_1[_field] || new MapSchema_1.MapSchema();
                value = valueRef.clone(true);
                var length = decode.number(bytes, it);
                hasChange = (length > 0);
                // FIXME: this may not be reliable. possibly need to encode this variable during
                // serializagion
                var hasIndexChange = false;
                var previousKeys = Object.keys(valueRef);
                for (var i = 0; i < length; i++) {
                    // `encodeAll` may indicate a higher number of indexes it actually encodes
                    // TODO: do not encode a higher number than actual encoded entries
                    if (bytes[it.offset] === undefined ||
                        bytes[it.offset] === spec_1.END_OF_STRUCTURE) {
                        break;
                    }
                    var isNilItem = decode.nilCheck(bytes, it) && ++it.offset;
                    // index change check
                    var previousKey = void 0;
                    if (decode.indexChangeCheck(bytes, it)) {
                        decode.uint8(bytes, it);
                        previousKey = previousKeys[decode.number(bytes, it)];
                        hasIndexChange = true;
                    }
                    var hasMapIndex = decode.numberCheck(bytes, it);
                    var isSchemaType = typeof (type) !== "string";
                    var newKey = (hasMapIndex)
                        ? previousKeys[decode.number(bytes, it)]
                        : decode.string(bytes, it);
                    var item = void 0;
                    var isNew = (!hasIndexChange && valueRef[newKey] === undefined) || (hasIndexChange && previousKey === undefined && hasMapIndex);
                    if (isNew && isSchemaType) {
                        item = this_1.createTypeInstance(bytes, it, type);
                    }
                    else if (previousKey !== undefined) {
                        item = valueRef[previousKey];
                    }
                    else {
                        item = valueRef[newKey];
                    }
                    if (isNilItem) {
                        if (item && item.onRemove) {
                            try {
                                item.onRemove();
                            }
                            catch (e) {
                                Schema.onError(e);
                            }
                        }
                        if (valueRef.onRemove) {
                            try {
                                valueRef.onRemove(item, newKey);
                            }
                            catch (e) {
                                Schema.onError(e);
                            }
                        }
                        delete value[newKey];
                        continue;
                    }
                    else if (!isSchemaType) {
                        value[newKey] = decodePrimitiveType(type, bytes, it);
                    }
                    else {
                        item.decode(bytes, it);
                        value[newKey] = item;
                    }
                    if (isNew) {
                        if (valueRef.onAdd) {
                            try {
                                valueRef.onAdd(value[newKey], newKey);
                            }
                            catch (e) {
                                Schema.onError(e);
                            }
                        }
                    }
                    else if (valueRef.onChange) {
                        try {
                            valueRef.onChange(value[newKey], newKey);
                        }
                        catch (e) {
                            Schema.onError(e);
                        }
                    }
                }
            }
            else {
                value = decodePrimitiveType(type, bytes, it);
                // FIXME: should not even have encoded if value haven't changed in the first place!
                // check FilterTest.ts: "should not trigger `onChange` if field haven't changed"
                hasChange = (value !== this_1[_field]);
            }
            if (hasChange && (this_1.onChange || this_1.$listeners[field])) {
                changes.push({
                    field: field,
                    value: value,
                    previousValue: previousValue
                });
            }
            this_1[_field] = value;
        };
        var this_1 = this;
        while (it.offset < totalBytes) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
        this._triggerChanges(changes);
        return this;
    };
    Schema.prototype.encode = function (root, encodeAll, client, bytes) {
        var _this = this;
        if (root === void 0) { root = this; }
        if (encodeAll === void 0) { encodeAll = false; }
        if (bytes === void 0) { bytes = []; }
        // skip if nothing has changed
        if (!this.$changes.changed && !encodeAll) {
            this._encodeEndOfStructure(this, root, bytes);
            return bytes;
        }
        var schema = this._schema;
        var indexes = this._indexes;
        var fieldsByIndex = this._fieldsByIndex;
        var filters = this._filters;
        var changes = Array.from((encodeAll) //  || client
            ? this.$changes.allChanges
            : this.$changes.changes).sort();
        var _loop_2 = function (i, l) {
            var field = fieldsByIndex[changes[i]] || changes[i];
            var _field = "_" + field;
            var type = schema[field];
            var filter = (filters && filters[field]);
            // const value = (filter && this.$allChanges[field]) || changes[field];
            var value = this_2[_field];
            var fieldIndex = indexes[field];
            if (value === undefined) {
                encode.uint8(bytes, spec_1.NIL);
                encode.number(bytes, fieldIndex);
            }
            else if (type._schema) {
                if (client && filter) {
                    // skip if not allowed by custom filter
                    if (!filter.call(this_2, client, value, root)) {
                        return "continue";
                    }
                }
                if (!value) {
                    // value has been removed
                    encode.uint8(bytes, spec_1.NIL);
                    encode.number(bytes, fieldIndex);
                }
                else {
                    // encode child object
                    encode.number(bytes, fieldIndex);
                    assertInstanceType(value, type, this_2, field);
                    this_2.tryEncodeTypeId(bytes, type, value.constructor);
                    value.encode(root, encodeAll, client, bytes);
                }
            }
            else if (Array.isArray(type)) {
                var $changes = value.$changes;
                if (client && filter) {
                    // skip if not allowed by custom filter
                    if (!filter.call(this_2, client, value, root)) {
                        return "continue";
                    }
                }
                encode.number(bytes, fieldIndex);
                // total number of items in the array
                encode.number(bytes, value.length);
                var arrayChanges = Array.from((encodeAll) //  || client
                    ? $changes.allChanges
                    : $changes.changes)
                    .filter(function (index) { return _this[_field][index] !== undefined; })
                    .sort(function (a, b) { return a - b; });
                // ensure number of changes doesn't exceed array length
                var numChanges = arrayChanges.length;
                // number of changed items
                encode.number(bytes, numChanges);
                var isChildSchema = typeof (type[0]) !== "string";
                // assert ArraySchema was provided
                assertInstanceType(this_2[_field], ArraySchema_1.ArraySchema, this_2, field);
                // encode Array of type
                for (var j = 0; j < numChanges; j++) {
                    var index = arrayChanges[j];
                    var item = this_2[_field][index];
                    /**
                     * TODO: filter array by items instead of the whole object
                     */
                    // if (client && filter) {
                    //     // skip if not allowed by custom filter
                    //     if (!filter.call(this, client, item, root)) {
                    //         continue;
                    //     }
                    // }
                    if (isChildSchema) { // is array of Schema
                        encode.number(bytes, index);
                        if (!encodeAll) {
                            var indexChange = $changes.getIndexChange(item);
                            if (indexChange !== undefined) {
                                encode.uint8(bytes, spec_1.INDEX_CHANGE);
                                encode.number(bytes, indexChange);
                            }
                        }
                        assertInstanceType(item, type[0], this_2, field);
                        this_2.tryEncodeTypeId(bytes, type[0], item.constructor);
                        item.encode(root, encodeAll, client, bytes);
                    }
                    else if (item !== undefined) { // is array of primitives
                        encode.number(bytes, index);
                        encodePrimitiveType(type[0], bytes, item, this_2, field);
                    }
                }
                if (!encodeAll && !client) {
                    $changes.discard();
                }
            }
            else if (type.map) {
                var $changes = value.$changes;
                if (client && filter) {
                    // skip if not allowed by custom filter
                    if (!filter.call(this_2, client, value, root)) {
                        return "continue";
                    }
                }
                // encode Map of type
                encode.number(bytes, fieldIndex);
                // TODO: during `encodeAll`, removed entries are not going to be encoded
                var keys = Array.from((encodeAll) //  || client
                    ? $changes.allChanges
                    : $changes.changes);
                encode.number(bytes, keys.length);
                // const previousKeys = Object.keys(this[_field]); // this is costly!
                var previousKeys = Array.from($changes.allChanges);
                var isChildSchema = typeof (type.map) !== "string";
                var numChanges = keys.length;
                // assert MapSchema was provided
                assertInstanceType(this_2[_field], MapSchema_1.MapSchema, this_2, field);
                for (var i_1 = 0; i_1 < numChanges; i_1++) {
                    var key = keys[i_1];
                    var item = this_2[_field][key];
                    var mapItemIndex = undefined;
                    /**
                     * TODO: filter map by items instead of the whole object
                     */
                    // if (client && filter) {
                    //     // skip if not allowed by custom filter
                    //     if (!filter.call(this, client, item, root)) {
                    //         continue;
                    //     }
                    // }
                    if (encodeAll) {
                        if (item === undefined) {
                            // previously deleted items are skipped during `encodeAll`
                            continue;
                        }
                    }
                    else {
                        // encode index change
                        var indexChange = $changes.getIndexChange(item);
                        if (item && indexChange !== undefined) {
                            encode.uint8(bytes, spec_1.INDEX_CHANGE);
                            encode.number(bytes, this_2[_field]._indexes.get(indexChange));
                        }
                        /**
                         * - Allow item replacement
                         * - Allow to use the index of a deleted item to encode as NIL
                         */
                        mapItemIndex = (!$changes.isDeleted(key) || !item)
                            ? this_2[_field]._indexes.get(key)
                            : undefined;
                    }
                    var isNil = (item === undefined);
                    /**
                     * Invert NIL to prevent collision with data starting with NIL byte
                     */
                    if (isNil) {
                        // TODO: remove item
                        // console.log("REMOVE KEY INDEX", { key });
                        // this[_field]._indexes.delete(key);
                        encode.uint8(bytes, spec_1.NIL);
                    }
                    if (mapItemIndex !== undefined) {
                        encode.number(bytes, mapItemIndex);
                    }
                    else {
                        encode.string(bytes, key);
                    }
                    if (item && isChildSchema) {
                        assertInstanceType(item, type.map, this_2, field);
                        this_2.tryEncodeTypeId(bytes, type.map, item.constructor);
                        item.encode(root, encodeAll, client, bytes);
                    }
                    else if (!isNil) {
                        encodePrimitiveType(type.map, bytes, item, this_2, field);
                    }
                }
                if (!encodeAll && !client) {
                    $changes.discard();
                    // TODO: track array/map indexes per client (for filtering)?
                    // TODO: do not iterate though all MapSchema indexes here.
                    this_2[_field]._updateIndexes(previousKeys);
                }
            }
            else {
                if (client && filter) {
                    // skip if not allowed by custom filter
                    if (!filter.call(this_2, client, value, root)) {
                        return "continue";
                    }
                }
                encode.number(bytes, fieldIndex);
                encodePrimitiveType(type, bytes, value, this_2, field);
            }
        };
        var this_2 = this;
        for (var i = 0, l = changes.length; i < l; i++) {
            _loop_2(i, l);
        }
        // flag end of Schema object structure
        this._encodeEndOfStructure(this, root, bytes);
        if (!encodeAll && !client) {
            this.$changes.discard();
        }
        return bytes;
    };
    Schema.prototype.encodeFiltered = function (client, bytes) {
        return this.encode(this, false, client, bytes);
    };
    Schema.prototype.encodeAll = function (bytes) {
        return this.encode(this, true, undefined, bytes);
    };
    Schema.prototype.encodeAllFiltered = function (client, bytes) {
        return this.encode(this, true, client, bytes);
    };
    Schema.prototype.clone = function () {
        var cloned = new (this.constructor);
        var schema = this._schema;
        for (var field in schema) {
            if (typeof (this[field]) === "object" &&
                typeof (this[field].clone) === "function") {
                // deep clone
                cloned[field] = this[field].clone();
            }
            else {
                // primitive values
                cloned[field] = this[field];
            }
        }
        return cloned;
    };
    Schema.prototype.triggerAll = function () {
        var changes = [];
        var schema = this._schema;
        for (var field in schema) {
            if (this[field] !== undefined) {
                changes.push({
                    field: field,
                    value: this[field],
                    previousValue: undefined
                });
            }
        }
        try {
            this._triggerChanges(changes);
        }
        catch (e) {
            Schema.onError(e);
        }
    };
    Schema.prototype.toJSON = function () {
        var schema = this._schema;
        var deprecated = this._deprecated;
        var obj = {};
        for (var field in schema) {
            if (!deprecated[field] && this[field] !== null && typeof (this[field]) !== "undefined") {
                obj[field] = (typeof (this[field].toJSON) === "function")
                    ? this[field].toJSON()
                    : this["_" + field];
            }
        }
        return obj;
    };
    Schema.prototype.discardAllChanges = function () {
        var schema = this._schema;
        var changes = Array.from(this.$changes.changes);
        var fieldsByIndex = this._fieldsByIndex;
        for (var index in changes) {
            var field = fieldsByIndex[index];
            var type = schema[field];
            var value = this[field];
            // skip unchagned fields
            if (value === undefined) {
                continue;
            }
            if (type._schema) {
                value.discardAllChanges();
            }
            else if (Array.isArray(type)) {
                for (var i = 0, l = value.length; i < l; i++) {
                    var index_1 = value[i];
                    var item = this["_" + field][index_1];
                    if (typeof (type[0]) !== "string" && item) { // is array of Schema
                        item.discardAllChanges();
                    }
                }
                value.$changes.discard();
            }
            else if (type.map) {
                var keys = value;
                var mapKeys = Object.keys(this["_" + field]);
                for (var i = 0; i < keys.length; i++) {
                    var key = mapKeys[keys[i]] || keys[i];
                    var item = this["_" + field][key];
                    if (item instanceof Schema && item) {
                        item.discardAllChanges();
                    }
                }
                value.$changes.discard();
            }
        }
        this.$changes.discard();
    };
    Schema.prototype._encodeEndOfStructure = function (instance, root, bytes) {
        if (instance !== root) {
            bytes.push(spec_1.END_OF_STRUCTURE);
        }
    };
    Schema.prototype.tryEncodeTypeId = function (bytes, type, targetType) {
        if (type._typeid !== targetType._typeid) {
            encode.uint8(bytes, spec_1.TYPE_ID);
            encode.uint8(bytes, targetType._typeid);
        }
    };
    Schema.prototype.createTypeInstance = function (bytes, it, type) {
        if (bytes[it.offset] === spec_1.TYPE_ID) {
            it.offset++;
            var anotherType = this.constructor._context.get(decode.uint8(bytes, it));
            return new anotherType();
        }
        else {
            return new type();
        }
    };
    Schema.prototype._triggerChanges = function (changes) {
        if (changes.length > 0) {
            for (var i = 0; i < changes.length; i++) {
                var change = changes[i];
                var listener = this.$listeners[change.field];
                if (listener) {
                    try {
                        listener.invoke(change.value, change.previousValue);
                    }
                    catch (e) {
                        Schema.onError(e);
                    }
                }
            }
            if (this.onChange) {
                try {
                    this.onChange(changes);
                }
                catch (e) {
                    Schema.onError(e);
                }
            }
        }
    };
    return Schema;
}());
exports.Schema = Schema;
//# sourceMappingURL=Schema.js.map

/***/ }),

/***/ "../colyseus/schema/lib/annotations.js":
/*!*********************************************!*\
  !*** ../colyseus/schema/lib/annotations.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defineTypes = exports.deprecated = exports.filter = exports.type = exports.globalContext = exports.Context = void 0;
var ChangeTree_1 = __webpack_require__(/*! ./ChangeTree */ "../colyseus/schema/lib/ChangeTree.js");
var Schema_1 = __webpack_require__(/*! ./Schema */ "../colyseus/schema/lib/Schema.js");
var Context = /** @class */ (function () {
    function Context() {
        this.types = {};
        this.schemas = new Map();
    }
    Context.prototype.has = function (schema) {
        return this.schemas.has(schema);
    };
    Context.prototype.get = function (typeid) {
        return this.types[typeid];
    };
    Context.prototype.add = function (schema) {
        schema._typeid = this.schemas.size;
        this.types[schema._typeid] = schema;
        this.schemas.set(schema, schema._typeid);
    };
    return Context;
}());
exports.Context = Context;
exports.globalContext = new Context();
/**
 * `@type()` decorator for proxies
 */
function type(type, context) {
    if (context === void 0) { context = exports.globalContext; }
    return function (target, field) {
        var constructor = target.constructor;
        constructor._context = context;
        /*
         * static schema
         */
        if (!context.has(constructor)) {
            context.add(constructor);
            // support inheritance
            constructor._schema = Object.assign({}, constructor._schema || {});
            constructor._indexes = Object.assign({}, constructor._indexes || {});
            constructor._fieldsByIndex = Object.assign({}, constructor._fieldsByIndex || {});
            constructor._descriptors = Object.assign({}, constructor._descriptors || {});
            constructor._deprecated = Object.assign({}, constructor._deprecated || {});
        }
        var index = Object.keys(constructor._schema).length;
        constructor._fieldsByIndex[index] = field;
        constructor._indexes[field] = index;
        constructor._schema[field] = type;
        /**
         * skip if descriptor already exists for this field (`@deprecated()`)
         */
        if (constructor._descriptors[field]) {
            return;
        }
        /**
         * TODO: `isSchema` / `isArray` / `isMap` is repeated on many places!
         * need to refactor all of them.
         */
        var isArray = Array.isArray(type);
        var isMap = !isArray && type.map;
        var isSchema = (typeof (constructor._schema[field]) === "function");
        var fieldCached = "_" + field;
        constructor._descriptors[fieldCached] = {
            enumerable: false,
            configurable: false,
            writable: true,
        };
        constructor._descriptors[field] = {
            get: function () {
                return this[fieldCached];
            },
            set: function (value) {
                /**
                 * Create Proxy for array or map items
                 */
                if (isArray || isMap) {
                    value = new Proxy(value, {
                        get: function (obj, prop) { return obj[prop]; },
                        set: function (obj, prop, setValue) {
                            if (prop !== "length" && prop.indexOf("$") !== 0) {
                                // ensure new value has a parent
                                var key = (isArray) ? Number(prop) : String(prop);
                                if (!obj.$sorting) {
                                    // track index change
                                    var previousIndex = obj.$changes.getIndex(setValue);
                                    if (previousIndex !== undefined) {
                                        obj.$changes.mapIndexChange(setValue, previousIndex);
                                    }
                                    obj.$changes.mapIndex(setValue, key);
                                }
                                // if (isMap) {
                                //     obj._indexes.delete(prop);
                                // }
                                if (setValue instanceof Schema_1.Schema) {
                                    // new items are flagged with all changes
                                    if (!setValue.$changes.parent) {
                                        setValue.$changes = new ChangeTree_1.ChangeTree(setValue._indexes, key, obj.$changes);
                                        setValue.$changes.changeAll(setValue);
                                    }
                                }
                                else {
                                    obj[prop] = setValue;
                                }
                                // apply change on ArraySchema / MapSchema
                                obj.$changes.change(key);
                            }
                            else if (setValue !== obj[prop]) {
                                // console.log("SET NEW LENGTH:", setValue);
                                // console.log("PREVIOUS LENGTH: ", obj[prop]);
                            }
                            obj[prop] = setValue;
                            return true;
                        },
                        deleteProperty: function (obj, prop) {
                            var deletedValue = obj[prop];
                            if (isMap && deletedValue !== undefined) {
                                obj.$changes.deleteIndex(deletedValue);
                                obj.$changes.deleteIndexChange(deletedValue);
                                if (deletedValue.$changes) { // deletedValue may be a primitive value
                                    delete deletedValue.$changes.parent;
                                }
                                // obj._indexes.delete(prop);
                            }
                            delete obj[prop];
                            var key = (isArray) ? Number(prop) : String(prop);
                            obj.$changes.change(key, true);
                            return true;
                        },
                    });
                }
                // skip if value is the same as cached.
                if (value === this[fieldCached]) {
                    return;
                }
                this[fieldCached] = value;
                if (isArray) {
                    // directly assigning an array of items as value.
                    this.$changes.change(field);
                    value.$changes = new ChangeTree_1.ChangeTree({}, field, this.$changes);
                    for (var i = 0; i < value.length; i++) {
                        if (value[i] instanceof Schema_1.Schema) {
                            value[i].$changes = new ChangeTree_1.ChangeTree(value[i]._indexes, i, value.$changes);
                            value[i].$changes.changeAll(value[i]);
                        }
                        value.$changes.mapIndex(value[i], i);
                        value.$changes.change(i);
                    }
                }
                else if (isMap) {
                    // directly assigning a map
                    value.$changes = new ChangeTree_1.ChangeTree({}, field, this.$changes);
                    this.$changes.change(field);
                    for (var key in value) {
                        if (value[key] instanceof Schema_1.Schema) {
                            value[key].$changes = new ChangeTree_1.ChangeTree(value[key]._indexes, key, value.$changes);
                            value[key].$changes.changeAll(value[key]);
                        }
                        value.$changes.mapIndex(value[key], key);
                        value.$changes.change(key);
                    }
                }
                else if (isSchema) {
                    // directly assigning a `Schema` object
                    // value may be set to null
                    this.$changes.change(field);
                    if (value) {
                        value.$changes = new ChangeTree_1.ChangeTree(value._indexes, field, this.$changes);
                        value.$changes.changeAll(value);
                    }
                }
                else {
                    // directly assigning a primitive type
                    this.$changes.change(field);
                }
            },
            enumerable: true,
            configurable: true
        };
    };
}
exports.type = type;
/**
 * `@filter()` decorator for defining data filters per client
 */
function filter(cb) {
    return function (target, field) {
        var constructor = target.constructor;
        /*
         * static filters
         */
        if (!constructor._filters) {
            constructor._filters = {};
        }
        constructor._filters[field] = cb;
    };
}
exports.filter = filter;
/**
 * `@deprecated()` flag a field as deprecated.
 * The previous `@type()` annotation should remain along with this one.
 */
function deprecated(throws, context) {
    if (throws === void 0) { throws = true; }
    if (context === void 0) { context = exports.globalContext; }
    return function (target, field) {
        var constructor = target.constructor;
        constructor._deprecated[field] = true;
        if (throws) {
            constructor._descriptors[field] = {
                get: function () { throw new Error(field + " is deprecated."); },
                set: function (value) { },
                enumerable: false,
                configurable: true
            };
        }
    };
}
exports.deprecated = deprecated;
function defineTypes(target, fields, context) {
    if (context === void 0) { context = exports.globalContext; }
    for (var field in fields) {
        type(fields[field], context)(target.prototype, field);
    }
    return target;
}
exports.defineTypes = defineTypes;
//# sourceMappingURL=annotations.js.map

/***/ }),

/***/ "../colyseus/schema/lib/encoding/decode.js":
/*!*************************************************!*\
  !*** ../colyseus/schema/lib/encoding/decode.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexChangeCheck = exports.nilCheck = exports.arrayCheck = exports.numberCheck = exports.number = exports.stringCheck = exports.string = exports.boolean = exports.readFloat64 = exports.readFloat32 = exports.uint64 = exports.int64 = exports.float64 = exports.float32 = exports.uint32 = exports.int32 = exports.uint16 = exports.int16 = exports.uint8 = exports.int8 = void 0;
var spec_1 = __webpack_require__(/*! ../spec */ "../colyseus/schema/lib/spec.js");
function utf8Read(bytes, offset, length) {
    var string = '', chr = 0;
    for (var i = offset, end = offset + length; i < end; i++) {
        var byte = bytes[i];
        if ((byte & 0x80) === 0x00) {
            string += String.fromCharCode(byte);
            continue;
        }
        if ((byte & 0xe0) === 0xc0) {
            string += String.fromCharCode(((byte & 0x1f) << 6) |
                (bytes[++i] & 0x3f));
            continue;
        }
        if ((byte & 0xf0) === 0xe0) {
            string += String.fromCharCode(((byte & 0x0f) << 12) |
                ((bytes[++i] & 0x3f) << 6) |
                ((bytes[++i] & 0x3f) << 0));
            continue;
        }
        if ((byte & 0xf8) === 0xf0) {
            chr = ((byte & 0x07) << 18) |
                ((bytes[++i] & 0x3f) << 12) |
                ((bytes[++i] & 0x3f) << 6) |
                ((bytes[++i] & 0x3f) << 0);
            if (chr >= 0x010000) { // surrogate pair
                chr -= 0x010000;
                string += String.fromCharCode((chr >>> 10) + 0xD800, (chr & 0x3FF) + 0xDC00);
            }
            else {
                string += String.fromCharCode(chr);
            }
            continue;
        }
        throw new Error('Invalid byte ' + byte.toString(16));
    }
    return string;
}
function int8(bytes, it) {
    return uint8(bytes, it) << 24 >> 24;
}
exports.int8 = int8;
;
function uint8(bytes, it) {
    return bytes[it.offset++];
}
exports.uint8 = uint8;
;
function int16(bytes, it) {
    return uint16(bytes, it) << 16 >> 16;
}
exports.int16 = int16;
;
function uint16(bytes, it) {
    return bytes[it.offset++] | bytes[it.offset++] << 8;
}
exports.uint16 = uint16;
;
function int32(bytes, it) {
    return bytes[it.offset++] | bytes[it.offset++] << 8 | bytes[it.offset++] << 16 | bytes[it.offset++] << 24;
}
exports.int32 = int32;
;
function uint32(bytes, it) {
    return int32(bytes, it) >>> 0;
}
exports.uint32 = uint32;
;
function float32(bytes, it) {
    return readFloat32(bytes, it);
}
exports.float32 = float32;
function float64(bytes, it) {
    return readFloat64(bytes, it);
}
exports.float64 = float64;
function int64(bytes, it) {
    var low = uint32(bytes, it);
    var high = int32(bytes, it) * Math.pow(2, 32);
    return high + low;
}
exports.int64 = int64;
;
function uint64(bytes, it) {
    var low = uint32(bytes, it);
    var high = uint32(bytes, it) * Math.pow(2, 32);
    return high + low;
}
exports.uint64 = uint64;
;
// force little endian to facilitate decoding on multiple implementations
var _isLittleEndian = true; // new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
var _int32 = new Int32Array(2);
var _float32 = new Float32Array(_int32.buffer);
var _float64 = new Float64Array(_int32.buffer);
function readFloat32(bytes, it) {
    _int32[0] = int32(bytes, it);
    return _float32[0];
}
exports.readFloat32 = readFloat32;
;
function readFloat64(bytes, it) {
    _int32[_isLittleEndian ? 0 : 1] = int32(bytes, it);
    _int32[_isLittleEndian ? 1 : 0] = int32(bytes, it);
    return _float64[0];
}
exports.readFloat64 = readFloat64;
;
function boolean(bytes, it) {
    return uint8(bytes, it) > 0;
}
exports.boolean = boolean;
;
function string(bytes, it) {
    var prefix = bytes[it.offset++];
    var length;
    if (prefix < 0xc0) {
        // fixstr
        length = prefix & 0x1f;
    }
    else if (prefix === 0xd9) {
        length = uint8(bytes, it);
    }
    else if (prefix === 0xda) {
        length = uint16(bytes, it);
    }
    else if (prefix === 0xdb) {
        length = uint32(bytes, it);
    }
    var value = utf8Read(bytes, it.offset, length);
    it.offset += length;
    return value;
}
exports.string = string;
function stringCheck(bytes, it) {
    var prefix = bytes[it.offset];
    return (
    // fixstr
    (prefix < 0xc0 && prefix > 0xa0) ||
        // str 8
        prefix === 0xd9 ||
        // str 16
        prefix === 0xda ||
        // str 32
        prefix === 0xdb);
}
exports.stringCheck = stringCheck;
function number(bytes, it) {
    var prefix = bytes[it.offset++];
    if (prefix < 0x80) {
        // positive fixint
        return prefix;
    }
    else if (prefix === 0xca) {
        // float 32
        return readFloat32(bytes, it);
    }
    else if (prefix === 0xcb) {
        // float 64
        return readFloat64(bytes, it);
    }
    else if (prefix === 0xcc) {
        // uint 8
        return uint8(bytes, it);
    }
    else if (prefix === 0xcd) {
        // uint 16
        return uint16(bytes, it);
    }
    else if (prefix === 0xce) {
        // uint 32
        return uint32(bytes, it);
    }
    else if (prefix === 0xcf) {
        // uint 64
        return uint64(bytes, it);
    }
    else if (prefix === 0xd0) {
        // int 8
        return int8(bytes, it);
    }
    else if (prefix === 0xd1) {
        // int 16
        return int16(bytes, it);
    }
    else if (prefix === 0xd2) {
        // int 32
        return int32(bytes, it);
    }
    else if (prefix === 0xd3) {
        // int 64
        return int64(bytes, it);
    }
    else if (prefix > 0xdf) {
        // negative fixint
        return (0xff - prefix + 1) * -1;
    }
}
exports.number = number;
;
function numberCheck(bytes, it) {
    var prefix = bytes[it.offset];
    // positive fixint - 0x00 - 0x7f
    // float 32        - 0xca
    // float 64        - 0xcb
    // uint 8          - 0xcc
    // uint 16         - 0xcd
    // uint 32         - 0xce
    // uint 64         - 0xcf
    // int 8           - 0xd0
    // int 16          - 0xd1
    // int 32          - 0xd2
    // int 64          - 0xd3
    return (prefix < 0x80 ||
        (prefix >= 0xca && prefix <= 0xd3));
}
exports.numberCheck = numberCheck;
function arrayCheck(bytes, it) {
    return bytes[it.offset] < 0xa0;
    // const prefix = bytes[it.offset] ;
    // if (prefix < 0xa0) {
    //   return prefix;
    // // array
    // } else if (prefix === 0xdc) {
    //   it.offset += 2;
    // } else if (0xdd) {
    //   it.offset += 4;
    // }
    // return prefix;
}
exports.arrayCheck = arrayCheck;
function nilCheck(bytes, it) {
    return bytes[it.offset] === spec_1.NIL;
}
exports.nilCheck = nilCheck;
function indexChangeCheck(bytes, it) {
    return bytes[it.offset] === spec_1.INDEX_CHANGE;
}
exports.indexChangeCheck = indexChangeCheck;
//# sourceMappingURL=decode.js.map

/***/ }),

/***/ "../colyseus/schema/lib/encoding/encode.js":
/*!*************************************************!*\
  !*** ../colyseus/schema/lib/encoding/encode.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2018 Endel Dreyer
 * Copyright (c) 2014 Ion Drive Software Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = exports.string = exports.boolean = exports.writeFloat64 = exports.writeFloat32 = exports.float64 = exports.float32 = exports.uint64 = exports.int64 = exports.uint32 = exports.int32 = exports.uint16 = exports.int16 = exports.uint8 = exports.int8 = exports.utf8Write = void 0;
/**
 * msgpack implementation highly based on notepack.io
 * https://github.com/darrachequesne/notepack
 */
function utf8Length(str) {
    var c = 0, length = 0;
    for (var i = 0, l = str.length; i < l; i++) {
        c = str.charCodeAt(i);
        if (c < 0x80) {
            length += 1;
        }
        else if (c < 0x800) {
            length += 2;
        }
        else if (c < 0xd800 || c >= 0xe000) {
            length += 3;
        }
        else {
            i++;
            length += 4;
        }
    }
    return length;
}
function utf8Write(view, offset, str) {
    var c = 0;
    for (var i = 0, l = str.length; i < l; i++) {
        c = str.charCodeAt(i);
        if (c < 0x80) {
            view[offset++] = c;
        }
        else if (c < 0x800) {
            view[offset++] = 0xc0 | (c >> 6);
            view[offset++] = 0x80 | (c & 0x3f);
        }
        else if (c < 0xd800 || c >= 0xe000) {
            view[offset++] = 0xe0 | (c >> 12);
            view[offset++] = 0x80 | (c >> 6 & 0x3f);
            view[offset++] = 0x80 | (c & 0x3f);
        }
        else {
            i++;
            c = 0x10000 + (((c & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
            view[offset++] = 0xf0 | (c >> 18);
            view[offset++] = 0x80 | (c >> 12 & 0x3f);
            view[offset++] = 0x80 | (c >> 6 & 0x3f);
            view[offset++] = 0x80 | (c & 0x3f);
        }
    }
}
exports.utf8Write = utf8Write;
function int8(bytes, value) {
    bytes.push(value & 255);
}
exports.int8 = int8;
;
function uint8(bytes, value) {
    bytes.push(value & 255);
}
exports.uint8 = uint8;
;
function int16(bytes, value) {
    bytes.push(value & 255);
    bytes.push((value >> 8) & 255);
}
exports.int16 = int16;
;
function uint16(bytes, value) {
    bytes.push(value & 255);
    bytes.push((value >> 8) & 255);
}
exports.uint16 = uint16;
;
function int32(bytes, value) {
    bytes.push(value & 255);
    bytes.push((value >> 8) & 255);
    bytes.push((value >> 16) & 255);
    bytes.push((value >> 24) & 255);
}
exports.int32 = int32;
;
function uint32(bytes, value) {
    var b4 = value >> 24;
    var b3 = value >> 16;
    var b2 = value >> 8;
    var b1 = value;
    bytes.push(b1 & 255);
    bytes.push(b2 & 255);
    bytes.push(b3 & 255);
    bytes.push(b4 & 255);
}
exports.uint32 = uint32;
;
function int64(bytes, value) {
    var high = Math.floor(value / Math.pow(2, 32));
    var low = value >>> 0;
    uint32(bytes, low);
    uint32(bytes, high);
}
exports.int64 = int64;
;
function uint64(bytes, value) {
    var high = (value / Math.pow(2, 32)) >> 0;
    var low = value >>> 0;
    uint32(bytes, low);
    uint32(bytes, high);
}
exports.uint64 = uint64;
;
function float32(bytes, value) {
    writeFloat32(bytes, value);
}
exports.float32 = float32;
function float64(bytes, value) {
    writeFloat64(bytes, value);
}
exports.float64 = float64;
// force little endian to facilitate decoding on multiple implementations
var _isLittleEndian = true; // new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
var _int32 = new Int32Array(2);
var _float32 = new Float32Array(_int32.buffer);
var _float64 = new Float64Array(_int32.buffer);
function writeFloat32(bytes, value) {
    _float32[0] = value;
    int32(bytes, _int32[0]);
}
exports.writeFloat32 = writeFloat32;
;
function writeFloat64(bytes, value) {
    _float64[0] = value;
    int32(bytes, _int32[_isLittleEndian ? 0 : 1]);
    int32(bytes, _int32[_isLittleEndian ? 1 : 0]);
}
exports.writeFloat64 = writeFloat64;
;
function boolean(bytes, value) {
    return uint8(bytes, value ? 1 : 0);
}
exports.boolean = boolean;
;
function string(bytes, value) {
    // encode `null` strings as empty.
    if (!value) {
        value = "";
    }
    var length = utf8Length(value);
    var size = 0;
    // fixstr
    if (length < 0x20) {
        bytes.push(length | 0xa0);
        size = 1;
    }
    // str 8
    else if (length < 0x100) {
        bytes.push(0xd9);
        uint8(bytes, length);
        size = 2;
    }
    // str 16
    else if (length < 0x10000) {
        bytes.push(0xda);
        uint16(bytes, length);
        size = 3;
    }
    // str 32
    else if (length < 0x100000000) {
        bytes.push(0xdb);
        uint32(bytes, length);
        size = 5;
    }
    else {
        throw new Error('String too long');
    }
    utf8Write(bytes, bytes.length, value);
    return size + length;
}
exports.string = string;
function number(bytes, value) {
    if (isNaN(value)) {
        return number(bytes, 0);
    }
    else if (!isFinite(value)) {
        return number(bytes, (value > 0) ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER);
    }
    else if (value !== (value | 0)) {
        bytes.push(0xcb);
        writeFloat64(bytes, value);
        return 9;
        // TODO: encode float 32?
        // is it possible to differentiate between float32 / float64 here?
        // // float 32
        // bytes.push(0xca);
        // writeFloat32(bytes, value);
        // return 5;
    }
    if (value >= 0) {
        // positive fixnum
        if (value < 0x80) {
            uint8(bytes, value);
            return 1;
        }
        // uint 8
        if (value < 0x100) {
            bytes.push(0xcc);
            uint8(bytes, value);
            return 2;
        }
        // uint 16
        if (value < 0x10000) {
            bytes.push(0xcd);
            uint16(bytes, value);
            return 3;
        }
        // uint 32
        if (value < 0x100000000) {
            bytes.push(0xce);
            uint32(bytes, value);
            return 5;
        }
        // uint 64
        bytes.push(0xcf);
        uint64(bytes, value);
        return 9;
    }
    else {
        // negative fixnum
        if (value >= -0x20) {
            bytes.push(value);
            return 1;
        }
        // int 8
        if (value >= -0x80) {
            bytes.push(0xd0);
            int8(bytes, value);
            return 2;
        }
        // int 16
        if (value >= -0x8000) {
            bytes.push(0xd1);
            int16(bytes, value);
            return 3;
        }
        // int 32
        if (value >= -0x80000000) {
            bytes.push(0xd2);
            int32(bytes, value);
            return 5;
        }
        // int 64
        bytes.push(0xd3);
        int64(bytes, value);
        return 9;
    }
}
exports.number = number;
//# sourceMappingURL=encode.js.map

/***/ }),

/***/ "../colyseus/schema/lib/events/EventEmitter.js":
/*!*****************************************************!*\
  !*** ../colyseus/schema/lib/events/EventEmitter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Extracted from https://www.npmjs.com/package/strong-events
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = void 0;
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.handlers = [];
    }
    EventEmitter.prototype.register = function (cb, once) {
        if (once === void 0) { once = false; }
        this.handlers.push(cb);
        return this;
    };
    EventEmitter.prototype.invoke = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.handlers.forEach(function (handler) { return handler.apply(void 0, args); });
    };
    EventEmitter.prototype.invokeAsync = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Promise.all(this.handlers.map(function (handler) { return handler.apply(void 0, args); }));
    };
    EventEmitter.prototype.remove = function (cb) {
        var index = this.handlers.indexOf(cb);
        this.handlers[index] = this.handlers[this.handlers.length - 1];
        this.handlers.pop();
    };
    EventEmitter.prototype.clear = function () {
        this.handlers = [];
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=EventEmitter.js.map

/***/ }),

/***/ "../colyseus/schema/lib/index.js":
/*!***************************************!*\
  !*** ../colyseus/schema/lib/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Schema_1 = __webpack_require__(/*! ./Schema */ "../colyseus/schema/lib/Schema.js");
Object.defineProperty(exports, "Schema", { enumerable: true, get: function () { return Schema_1.Schema; } });
var MapSchema_1 = __webpack_require__(/*! ./types/MapSchema */ "../colyseus/schema/lib/types/MapSchema.js");
Object.defineProperty(exports, "MapSchema", { enumerable: true, get: function () { return MapSchema_1.MapSchema; } });
var ArraySchema_1 = __webpack_require__(/*! ./types/ArraySchema */ "../colyseus/schema/lib/types/ArraySchema.js");
Object.defineProperty(exports, "ArraySchema", { enumerable: true, get: function () { return ArraySchema_1.ArraySchema; } });
// Utils
var utils_1 = __webpack_require__(/*! ./utils */ "../colyseus/schema/lib/utils.js");
Object.defineProperty(exports, "dumpChanges", { enumerable: true, get: function () { return utils_1.dumpChanges; } });
// Reflection
var Reflection_1 = __webpack_require__(/*! ./Reflection */ "../colyseus/schema/lib/Reflection.js");
Object.defineProperty(exports, "Reflection", { enumerable: true, get: function () { return Reflection_1.Reflection; } });
Object.defineProperty(exports, "ReflectionType", { enumerable: true, get: function () { return Reflection_1.ReflectionType; } });
Object.defineProperty(exports, "ReflectionField", { enumerable: true, get: function () { return Reflection_1.ReflectionField; } });
var annotations_1 = __webpack_require__(/*! ./annotations */ "../colyseus/schema/lib/annotations.js");
// Annotations
Object.defineProperty(exports, "type", { enumerable: true, get: function () { return annotations_1.type; } });
Object.defineProperty(exports, "deprecated", { enumerable: true, get: function () { return annotations_1.deprecated; } });
Object.defineProperty(exports, "filter", { enumerable: true, get: function () { return annotations_1.filter; } });
Object.defineProperty(exports, "defineTypes", { enumerable: true, get: function () { return annotations_1.defineTypes; } });
// Types
Object.defineProperty(exports, "Context", { enumerable: true, get: function () { return annotations_1.Context; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../colyseus/schema/lib/spec.js":
/*!**************************************!*\
  !*** ../colyseus/schema/lib/spec.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPE_ID = exports.INDEX_CHANGE = exports.NIL = exports.END_OF_STRUCTURE = void 0;
exports.END_OF_STRUCTURE = 0xc1; // (msgpack spec: never used)
exports.NIL = 0xc0;
exports.INDEX_CHANGE = 0xd4;
exports.TYPE_ID = 0xd5;
//# sourceMappingURL=spec.js.map

/***/ }),

/***/ "../colyseus/schema/lib/types/ArraySchema.js":
/*!***************************************************!*\
  !*** ../colyseus/schema/lib/types/ArraySchema.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArraySchema = void 0;
var ArraySchema = /** @class */ (function (_super) {
    __extends(ArraySchema, _super);
    function ArraySchema() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var _this = _super.apply(this, items) || this;
        Object.setPrototypeOf(_this, Object.create(ArraySchema.prototype));
        Object.defineProperties(_this, {
            $sorting: { value: undefined, enumerable: false, writable: true },
            $changes: { value: undefined, enumerable: false, writable: true },
            onAdd: { value: undefined, enumerable: false, writable: true },
            onRemove: { value: undefined, enumerable: false, writable: true },
            onChange: { value: undefined, enumerable: false, writable: true },
            triggerAll: {
                value: function () {
                    if (!_this.onAdd) {
                        return;
                    }
                    for (var i = 0; i < _this.length; i++) {
                        _this.onAdd(_this[i], i);
                    }
                }
            },
            toJSON: {
                value: function () {
                    var arr = [];
                    for (var i = 0; i < _this.length; i++) {
                        var objAt = _this[i];
                        arr.push((typeof (objAt.toJSON) === "function")
                            ? objAt.toJSON()
                            : objAt);
                    }
                    return arr;
                }
            },
            clone: {
                value: function (isDecoding) {
                    var cloned;
                    if (isDecoding) {
                        cloned = ArraySchema.of.apply(ArraySchema, _this);
                        cloned.onAdd = _this.onAdd;
                        cloned.onRemove = _this.onRemove;
                        cloned.onChange = _this.onChange;
                    }
                    else {
                        cloned = new (ArraySchema.bind.apply(ArraySchema, __spreadArrays([void 0], _this.map(function (item) {
                            if (typeof (item) === "object") {
                                return item.clone();
                            }
                            else {
                                return item;
                            }
                        }))))();
                    }
                    return cloned;
                }
            }
        });
        return _this;
    }
    Object.defineProperty(ArraySchema, Symbol.species, {
        get: function () { return ArraySchema; },
        enumerable: false,
        configurable: true
    });
    ArraySchema.prototype.sort = function (compareFn) {
        this.$sorting = true;
        _super.prototype.sort.call(this, compareFn);
        if (this.$changes) { // allow to .slice() + .sort()
            var changes = Array.from(this.$changes.changes);
            for (var _i = 0, changes_1 = changes; _i < changes_1.length; _i++) {
                var key = changes_1[_i];
                // track index change
                var previousIndex = this.$changes.getIndex(this[key]);
                if (previousIndex !== undefined) {
                    this.$changes.mapIndexChange(this[key], previousIndex);
                }
                this.$changes.mapIndex(this[key], key);
            }
        }
        this.$sorting = false;
        return this;
    };
    ArraySchema.prototype.filter = function (callbackfn, thisArg) {
        var filtered = _super.prototype.filter.call(this, callbackfn);
        filtered.$changes = this.$changes.clone();
        return filtered;
    };
    ArraySchema.prototype.splice = function (start, deleteCount) {
        var insert = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            insert[_i - 2] = arguments[_i];
        }
        var removedItems = Array.prototype.splice.apply(this, arguments);
        var movedItems = Array.prototype.filter.call(this, function (item, idx) {
            return idx >= start + deleteCount - 1;
        });
        removedItems.map(function (removedItem) {
            var $changes = removedItem && removedItem.$changes;
            // If the removed item is a schema we need to update it.
            if ($changes) {
                $changes.parent.deleteIndex(removedItem);
                delete $changes.parent;
            }
        });
        movedItems.forEach(function (movedItem) {
            // If the moved item is a schema we need to update it.
            var $changes = movedItem && movedItem.$changes;
            if ($changes) {
                // Update current index in parent, so subsequent changes in
                // this item's properties are correctly reflected.
                $changes.parentField--;
            }
        });
        return removedItems;
    };
    return ArraySchema;
}(Array));
exports.ArraySchema = ArraySchema;
//# sourceMappingURL=ArraySchema.js.map

/***/ }),

/***/ "../colyseus/schema/lib/types/MapSchema.js":
/*!*************************************************!*\
  !*** ../colyseus/schema/lib/types/MapSchema.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MapSchema = void 0;
var MapSchema = /** @class */ (function () {
    function MapSchema(obj) {
        var _this = this;
        if (obj === void 0) { obj = {}; }
        for (var key in obj) {
            this[key] = obj[key];
        }
        Object.defineProperties(this, {
            $changes: { value: undefined, enumerable: false, writable: true },
            onAdd: { value: undefined, enumerable: false, writable: true },
            onRemove: { value: undefined, enumerable: false, writable: true },
            onChange: { value: undefined, enumerable: false, writable: true },
            clone: {
                value: function (isDecoding) {
                    var cloned;
                    if (isDecoding) {
                        // client-side
                        cloned = Object.assign(new MapSchema(), _this);
                        cloned.onAdd = _this.onAdd;
                        cloned.onRemove = _this.onRemove;
                        cloned.onChange = _this.onChange;
                    }
                    else {
                        // server-side
                        var cloned_1 = new MapSchema();
                        for (var key in _this) {
                            if (typeof (_this[key]) === "object") {
                                cloned_1[key] = _this[key].clone();
                            }
                            else {
                                cloned_1[key] = _this[key];
                            }
                        }
                    }
                    return cloned;
                }
            },
            triggerAll: {
                value: function () {
                    if (!_this.onAdd) {
                        return;
                    }
                    for (var key in _this) {
                        _this.onAdd(_this[key], key);
                    }
                }
            },
            toJSON: {
                value: function () {
                    var map = {};
                    for (var key in _this) {
                        map[key] = (typeof (_this[key].toJSON) === "function")
                            ? _this[key].toJSON()
                            : _this[key];
                    }
                    return map;
                }
            },
            _indexes: { value: new Map(), enumerable: false, writable: true },
            _updateIndexes: {
                value: function (allKeys) {
                    var index = 0;
                    var indexes = new Map();
                    for (var _i = 0, allKeys_1 = allKeys; _i < allKeys_1.length; _i++) {
                        var key = allKeys_1[_i];
                        indexes.set(key, index++);
                    }
                    _this._indexes = indexes;
                }
            },
        });
    }
    return MapSchema;
}());
exports.MapSchema = MapSchema;
//# sourceMappingURL=MapSchema.js.map

/***/ }),

/***/ "../colyseus/schema/lib/utils.js":
/*!***************************************!*\
  !*** ../colyseus/schema/lib/utils.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dumpChanges = void 0;
var _1 = __webpack_require__(/*! ./ */ "../colyseus/schema/lib/index.js");
var MapSchema_1 = __webpack_require__(/*! ./types/MapSchema */ "../colyseus/schema/lib/types/MapSchema.js");
var ArraySchema_1 = __webpack_require__(/*! ./types/ArraySchema */ "../colyseus/schema/lib/types/ArraySchema.js");
function dumpChanges(schema) {
    var dump = {};
    var $changes = schema.$changes;
    var fieldsByIndex = schema['_fieldsByIndex'] || {};
    for (var _i = 0, _a = Array.from($changes.changes); _i < _a.length; _i++) {
        var fieldIndex = _a[_i];
        var field = fieldsByIndex[fieldIndex] || fieldIndex;
        if (schema[field] instanceof MapSchema_1.MapSchema ||
            schema[field] instanceof ArraySchema_1.ArraySchema ||
            schema[field] instanceof _1.Schema) {
            dump[field] = dumpChanges(schema[field]);
        }
        else {
            dump[field] = schema[field];
        }
    }
    return dump;
}
exports.dumpChanges = dumpChanges;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */
function log(...args) {
	// This hackery is required for IE8/9, where
	// the `console.log` function doesn't have 'apply'
	return typeof console === 'object' &&
		console.log &&
		console.log(...args);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* Active `debug` instances.
	*/
	createDebug.instances = [];

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return match;
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.enabled = createDebug.enabled(namespace);
		debug.useColors = createDebug.useColors();
		debug.color = selectColor(namespace);
		debug.destroy = destroy;
		debug.extend = extend;
		// Debug.formatArgs = formatArgs;
		// debug.rawLog = rawLog;

		// env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		createDebug.instances.push(debug);

		return debug;
	}

	function destroy() {
		const index = createDebug.instances.indexOf(this);
		if (index !== -1) {
			createDebug.instances.splice(index, 1);
			return true;
		}
		return false;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}

		for (i = 0; i < createDebug.instances.length; i++) {
			const instance = createDebug.instances[i];
			instance.enabled = createDebug.enabled(instance.namespace);
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "./node_modules/es5-ext/global.js":
/*!****************************************!*\
  !*** ./node_modules/es5-ext/global.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var naiveFallback = function () {
	if (typeof self === "object" && self) return self;
	if (typeof window === "object" && window) return window;
	throw new Error("Unable to resolve global `this`");
};

module.exports = (function () {
	if (this) return this;

	// Unexpected strict mode (may happen if e.g. bundled into ESM module)

	// Fallback to standard globalThis if available
	if (typeof globalThis === "object" && globalThis) return globalThis;

	// Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis
	// In all ES5+ engines global object inherits from Object.prototype
	// (if you approached one that doesn't please report)
	try {
		Object.defineProperty(Object.prototype, "__global__", {
			get: function () { return this; },
			configurable: true
		});
	} catch (error) {
		// Unfortunate case of updates to Object.prototype being restricted
		// via preventExtensions, seal or freeze
		return naiveFallback();
	}
	try {
		// Safari case (window.__global__ works, but __global__ does not)
		if (!__global__) return naiveFallback();
		return __global__;
	} finally {
		delete Object.prototype.__global__;
	}
})();


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/ion-sdk-js/lib/client.js":
/*!***********************************************!*\
  !*** ./node_modules/ion-sdk-js/lib/client.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
const protoo_client_1 = __webpack_require__(/*! protoo-client */ "./node_modules/protoo-client/lib/index.js");
const uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
const log = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");
const stream_1 = __webpack_require__(/*! ./stream */ "./node_modules/ion-sdk-js/lib/stream.js");
const transport_1 = __webpack_require__(/*! ./transport */ "./node_modules/ion-sdk-js/lib/transport.js");
class Client extends events_1.EventEmitter {
    constructor(config) {
        super();
        this.onRequest = (request) => {
            log.debug('Handle request from server: [method:%s, data:%o]', request.method, request.data);
        };
        this.onNotification = (notification) => {
            const { method, data } = notification;
            log.info('Handle notification from server: [method:%s, data:%o]', method, data);
            switch (method) {
                case 'peer-join': {
                    const { uid, info } = data;
                    this.emit('peer-join', uid, info);
                    break;
                }
                case 'peer-leave': {
                    const { uid } = data;
                    this.emit('peer-leave', uid);
                    break;
                }
                case 'stream-add': {
                    const { mid, info, tracks } = data;
                    if (mid) {
                        const trackMap = objToStrMap(tracks);
                        this.knownStreams.set(mid, trackMap);
                    }
                    this.emit('stream-add', mid, info);
                    break;
                }
                case 'stream-remove': {
                    const { mid } = data;
                    const stream = this.streams[mid];
                    this.emit('stream-remove', stream);
                    stream.close();
                    break;
                }
                case 'broadcast': {
                    const { uid, info } = data;
                    this.emit('broadcast', uid, info);
                    break;
                }
            }
        };
        const uid = config.uid ? config.uid : uuid_1.v4();
        if (!config || !config.url) {
            throw new Error('Undefined config or config.url in ion-sdk.');
        }
        const url = new URL(config.url);
        url.searchParams.append('peer', uid);
        const transport = new protoo_client_1.WebSocketTransport(url.toString(), config.options);
        log.setLevel(config.loglevel !== undefined ? config.loglevel : log.levels.WARN);
        this.knownStreams = new Map();
        this.uid = uid;
        this.streams = {};
        this.dispatch = new protoo_client_1.Peer(transport);
        if (config.rtc)
            transport_1.default.setRTCConfiguration(config.rtc);
        stream_1.Stream.setDispatch(this.dispatch);
        this.dispatch.on('open', () => {
            log.info('Peer "open" event');
            this.emit('transport-open');
        });
        this.dispatch.on('disconnected', () => {
            log.info('Peer "disconnected" event');
            this.emit('transport-failed');
        });
        this.dispatch.on('close', () => {
            log.info('Peer "close" event');
            this.emit('transport-closed');
        });
        this.dispatch.on('request', this.onRequest);
        this.dispatch.on('notification', this.onNotification);
    }
    broadcast(info) {
        return this.dispatch.request('broadcast', {
            rid: this.rid,
            uid: this.uid,
            info,
        });
    }
    join(rid, info = { name: 'Guest' }) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rid = rid;
            try {
                const data = yield this.dispatch.request('join', {
                    rid: this.rid,
                    uid: this.uid,
                    info,
                });
                log.info('join success: result => ' + JSON.stringify(data));
            }
            catch (error) {
                log.error('join reject: error =>' + error);
            }
        });
    }
    publish(stream) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.rid) {
                throw new Error('You must join a room before publishing.');
            }
            this.local = stream;
            return yield stream.publish(this.rid);
        });
    }
    subscribe(mid) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.rid) {
                throw new Error('You must join a room before subscribing.');
            }
            const tracks = this.knownStreams.get(mid);
            if (!tracks) {
                throw new Error('Subscribe mid is not known.');
            }
            const stream = yield stream_1.RemoteStream.getRemoteMedia(this.rid, mid, tracks);
            this.streams[mid] = stream;
            return stream;
        });
    }
    leave() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.dispatch.request('leave', {
                    rid: this.rid,
                    uid: this.uid,
                });
                if (this.local) {
                    this.local.unpublish();
                }
                Object.values(this.streams).forEach((stream) => stream.unsubscribe());
                this.knownStreams.clear();
                log.info('leave success: result => ' + JSON.stringify(data));
            }
            catch (error) {
                log.error('leave reject: error =>' + error);
            }
        });
    }
    close() {
        this.dispatch.close();
    }
}
exports.default = Client;
function objToStrMap(obj) {
    const strMap = new Map();
    for (const k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}


/***/ }),

/***/ "./node_modules/ion-sdk-js/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/ion-sdk-js/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Stream = exports.LocalStream = exports.Client = void 0;
const client_1 = __webpack_require__(/*! ./client */ "./node_modules/ion-sdk-js/lib/client.js");
exports.Client = client_1.default;
const stream_1 = __webpack_require__(/*! ./stream */ "./node_modules/ion-sdk-js/lib/stream.js");
Object.defineProperty(exports, "LocalStream", { enumerable: true, get: function () { return stream_1.LocalStream; } });
Object.defineProperty(exports, "Stream", { enumerable: true, get: function () { return stream_1.Stream; } });


/***/ }),

/***/ "./node_modules/ion-sdk-js/lib/stream.js":
/*!***********************************************!*\
  !*** ./node_modules/ion-sdk-js/lib/stream.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteStream = exports.LocalStream = exports.Stream = exports.VideoResolutions = void 0;
const log = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");
const transport_1 = __webpack_require__(/*! ./transport */ "./node_modules/ion-sdk-js/lib/transport.js");
exports.VideoResolutions = {
    qvga: { width: { ideal: 320 }, height: { ideal: 180 } },
    vga: { width: { ideal: 640 }, height: { ideal: 360 } },
    shd: { width: { ideal: 960 }, height: { ideal: 540 } },
    hd: { width: { ideal: 1280 }, height: { ideal: 720 } },
    fhd: { width: { ideal: 1920 }, height: { ideal: 1090 } },
};
class Stream extends MediaStream {
    static setDispatch(dispatch) {
        Stream.dispatch = dispatch;
    }
    get dispatch() {
        if (!Stream.dispatch) {
            throw new Error('Dispatch not set.');
        }
        return Stream.dispatch;
    }
}
exports.Stream = Stream;
class LocalStream extends Stream {
    constructor(stream, options) {
        super(stream);
        // hack: patch for Safari
        Object.setPrototypeOf(this, LocalStream.prototype);
        this.options = options;
    }
    static getUserMedia(options = {
        codec: 'VP8',
        resolution: 'hd',
        audio: false,
        video: false,
    }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const stream = yield navigator.mediaDevices.getUserMedia({
                    audio: options.audio,
                    video: options.video instanceof Object
                        ? Object.assign(Object.assign({}, exports.VideoResolutions[options.resolution]), options.video) : options.video
                        ? exports.VideoResolutions[options.resolution]
                        : false,
                });
                return new LocalStream(stream, options);
            }
            catch (e) {
                return null;
            }
        });
    }
    static getDisplayMedia(options = {
        codec: 'VP8',
        resolution: 'hd',
        audio: false,
        video: true,
    }) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            const stream = yield navigator.mediaDevices.getDisplayMedia({
                video: true,
            });
            return new LocalStream(stream, options);
        });
    }
    getVideoConstraints() {
        return this.options.video instanceof Object
            ? Object.assign(Object.assign({}, exports.VideoResolutions[this.options.resolution]), this.options.video) : { video: this.options.video };
    }
    switchDevice(kind, deviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.options = Object.assign(Object.assign({}, this.options), { [kind]: this.options[kind] instanceof Object
                    ? Object.assign(Object.assign({}, this.options[kind]), { deviceId }) : { deviceId } });
            const stream = yield navigator.mediaDevices.getUserMedia({
                [kind]: kind === 'video' ? Object.assign(Object.assign({}, this.getVideoConstraints()), { deviceId }) : { deviceId },
            });
            const track = stream.getTracks()[0];
            let prev;
            if (kind === 'audio') {
                prev = this.getAudioTracks()[0];
            }
            else if (kind === 'video') {
                prev = this.getVideoTracks()[0];
            }
            this.addTrack(track);
            this.removeTrack(prev);
            prev.stop();
            // If published, replace published track with track from new device
            if (this.transport) {
                this.transport.getSenders().forEach((sender) => __awaiter(this, void 0, void 0, function* () {
                    var _a, _b;
                    if (((_a = sender === null || sender === void 0 ? void 0 : sender.track) === null || _a === void 0 ? void 0 : _a.kind) === track.kind) {
                        (_b = sender.track) === null || _b === void 0 ? void 0 : _b.stop();
                        sender.replaceTrack(track);
                    }
                }));
            }
        });
    }
    mute(kind) {
        if (kind === 'audio') {
            this.getAudioTracks()[0].enabled = false;
        }
        else if (kind === 'video') {
            this.getVideoTracks()[0].enabled = false;
        }
    }
    unmute(kind) {
        return __awaiter(this, void 0, void 0, function* () {
            if (kind === 'audio') {
                this.getAudioTracks()[0].enabled = true;
            }
            else if (kind === 'video') {
                this.getVideoTracks()[0].enabled = true;
            }
        });
    }
    publish(rid) {
        return __awaiter(this, void 0, void 0, function* () {
            const { bandwidth, codec } = this.options;
            let sendOffer = true;
            this.transport = new transport_1.default(codec);
            this.getTracks().map((track) => this.transport.addTrack(track, this));
            const offer = yield this.transport.createOffer({
                offerToReceiveVideo: false,
                offerToReceiveAudio: false,
            });
            log.debug('Created offer => %o', offer);
            this.transport.setLocalDescription(offer);
            this.transport.onicecandidate = () => __awaiter(this, void 0, void 0, function* () {
                if (sendOffer) {
                    sendOffer = false;
                    const jsep = this.transport.localDescription;
                    log.debug(`Sending offer ${jsep}`);
                    const result = yield this.dispatch.request('publish', {
                        rid,
                        jsep,
                        options: {
                            codec,
                            bandwidth: Number(bandwidth),
                        },
                    });
                    this.mid = result.mid;
                    log.debug('Got answer => %o', result === null || result === void 0 ? void 0 : result.jsep);
                    yield this.transport.setRemoteDescription(result === null || result === void 0 ? void 0 : result.jsep);
                    this.rid = rid;
                }
            });
            this.transport.onnegotiationneeded = () => __awaiter(this, void 0, void 0, function* () {
                log.info('negotiation needed');
            });
        });
    }
    unpublish() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.rid || !this.mid) {
                throw new Error('Stream is not published.');
            }
            log.info('unpublish rid => %s, mid => %s', this.rid, this.mid);
            if (this.transport) {
                this.transport.close();
                delete this.transport;
            }
            return yield this.dispatch
                .request('unpublish', {
                rid: this.rid,
                mid: this.mid,
            })
                .then(() => {
                delete this.rid;
                delete this.mid;
            });
        });
    }
}
exports.LocalStream = LocalStream;
class RemoteStream extends Stream {
    static getRemoteMedia(rid, mid, tracks) {
        return __awaiter(this, void 0, void 0, function* () {
            const allTracks = Array.from(tracks.values()).flat();
            const audio = allTracks.map((t) => t.type.toLowerCase() === 'audio').includes(true);
            const video = allTracks.map((t) => t.type.toLowerCase() === 'video').includes(true);
            let sendOffer = true;
            log.debug('Creating receiver => %s', mid);
            const transport = new transport_1.default();
            if (audio) {
                transport.addTransceiver('audio');
            }
            if (video) {
                transport.addTransceiver('video');
            }
            const desc = yield transport.createOffer();
            log.debug('Created offer => %o', desc);
            transport.setLocalDescription(desc);
            transport.onnegotiationneeded = () => {
                log.debug('negotiation needed');
            };
            transport.onicecandidate = (e) => __awaiter(this, void 0, void 0, function* () {
                if (sendOffer) {
                    log.debug('Send offer');
                    sendOffer = false;
                    const jsep = transport.localDescription;
                    const result = yield this.dispatch.request('subscribe', {
                        rid,
                        jsep,
                        mid,
                    });
                    log.info(`subscribe success => result(mid: ${result.mid})`);
                    log.debug('Got answer => %o', result === null || result === void 0 ? void 0 : result.jsep);
                    yield transport.setRemoteDescription(result === null || result === void 0 ? void 0 : result.jsep);
                }
            });
            const stream = yield new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    transport.ontrack = ({ track, streams }) => {
                        log.debug('on track called');
                        // once media for a remote track arrives, show it in the remote video element
                        track.onunmute = () => {
                            if (streams.length > 0) {
                                resolve(streams[0]);
                            }
                            else {
                                reject(new Error('Not enough streams'));
                            }
                        };
                    };
                }
                catch (error) {
                    log.error('subscribe request error  => ' + error);
                    reject(error);
                }
            }));
            const remote = new RemoteStream(stream);
            remote.transport = transport;
            remote.mid = mid;
            remote.rid = rid;
            return remote;
        });
    }
    constructor(stream) {
        super(stream);
        // hack: patch for Safari
        Object.setPrototypeOf(this, RemoteStream.prototype);
    }
    close() {
        if (!this.transport) {
            throw new Error('Stream is not open.');
        }
        if (this.transport) {
            this.transport.close();
            delete this.transport;
        }
    }
    unsubscribe() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.transport) {
                throw new Error('Stream is not subscribed.');
            }
            log.info('unsubscribe mid => %s', this.mid);
            this.close();
            return yield this.dispatch.request('unsubscribe', { mid: this.mid });
        });
    }
}
exports.RemoteStream = RemoteStream;


/***/ }),

/***/ "./node_modules/ion-sdk-js/lib/transport.js":
/*!**************************************************!*\
  !*** ./node_modules/ion-sdk-js/lib/transport.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sdp_transform_1 = __webpack_require__(/*! sdp-transform */ "./node_modules/sdp-transform/lib/index.js");
const log = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");
var PayloadType;
(function (PayloadType) {
    PayloadType[PayloadType["PCMU"] = 0] = "PCMU";
    PayloadType[PayloadType["PCMA"] = 8] = "PCMA";
    PayloadType[PayloadType["G722"] = 9] = "G722";
    PayloadType[PayloadType["Opus"] = 111] = "Opus";
    PayloadType[PayloadType["VP8"] = 96] = "VP8";
    PayloadType[PayloadType["VP9"] = 98] = "VP9";
    PayloadType[PayloadType["H264"] = 102] = "H264";
})(PayloadType || (PayloadType = {}));
function rtp(name) {
    switch (name) {
        case 'H264':
            return [
                {
                    payload: PayloadType.H264,
                    codec: 'H264',
                    rate: 90000,
                },
            ];
        case 'VP8':
            return [
                {
                    payload: PayloadType.VP8,
                    codec: 'VP8',
                    rate: 90000,
                },
            ];
        case 'VP9':
            return [
                {
                    payload: PayloadType.VP9,
                    codec: 'VP9',
                    rate: 90000,
                },
            ];
        default:
            return [];
    }
}
let WebRTCTransport = /** @class */ (() => {
    class WebRTCTransport {
        constructor(codec) {
            if (!WebRTCTransport.config) {
                throw new Error('RTConfiguration not set.');
            }
            this.pc = new RTCPeerConnection(WebRTCTransport.config);
            this.rtp = codec ? rtp(codec) : null;
        }
        static setRTCConfiguration(config) {
            WebRTCTransport.config = config;
        }
        close() {
            this.pc.ontrack = null;
            this.pc.onicecandidate = null;
            this.pc.onnegotiationneeded = null;
            this.pc.getSenders().forEach((sender) => this.pc.removeTrack(sender));
            this.pc.close();
        }
        addTrack(track, stream) {
            return this.pc.addTrack(track, stream);
        }
        addTransceiver(kind) {
            this.pc.addTransceiver(kind, { direction: 'recvonly' });
        }
        removeTrack(sender) {
            this.pc.removeTrack(sender);
        }
        getSenders() {
            return this.pc.getSenders();
        }
        setLocalDescription(offer) {
            this.pc.setLocalDescription(offer);
        }
        setRemoteDescription(desc) {
            return this.pc.setRemoteDescription(desc);
        }
        createOffer(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const offer = yield this.pc.createOffer(options);
                if (!this.rtp)
                    return offer;
                const session = sdp_transform_1.parse(offer.sdp);
                const videoIdx = session.media.findIndex(({ type, ssrcGroups }) => type === 'video' && !!ssrcGroups);
                if (videoIdx === -1)
                    return offer;
                const { payload } = this.rtp[0];
                session.media[videoIdx].payloads = `${payload}`; // + " 97";
                session.media[videoIdx].rtp = this.rtp;
                const fmtp = [
                // { "payload": 97, "config": "apt=" + payload }
                ];
                session.media[videoIdx].fmtp = fmtp;
                const rtcpFB = [
                    { payload, type: 'transport-cc', subtype: undefined },
                    { payload, type: 'ccm', subtype: 'fir' },
                    { payload, type: 'nack', subtype: undefined },
                    { payload, type: 'nack', subtype: 'pli' },
                ];
                session.media[videoIdx].rtcpFb = rtcpFB;
                const ssrcGroup = session.media[videoIdx].ssrcGroups[0];
                const ssrcs = ssrcGroup.ssrcs;
                const ssrc = parseInt(ssrcs.split(' ')[0], 10);
                log.debug('ssrcs => %s, video %s', ssrcs, ssrc);
                session.media[videoIdx].ssrcGroups = [];
                session.media[videoIdx].ssrcs = session.media[videoIdx].ssrcs.filter((item) => item.id === ssrc);
                offer.sdp = sdp_transform_1.write(session);
                return offer;
            });
        }
        get localDescription() {
            return this.pc.localDescription;
        }
        set onicecandidate(cb) {
            this.pc.onicecandidate = cb;
        }
        set onnegotiationneeded(cb) {
            this.pc.onnegotiationneeded = cb;
        }
        set ontrack(cb) {
            this.pc.ontrack = cb;
        }
    }
    WebRTCTransport.config = {
        iceServers: [{ urls: 'stun:stun.stunprotocol.org:3478' }],
    };
    return WebRTCTransport;
})();
exports.default = WebRTCTransport;


/***/ }),

/***/ "./node_modules/loglevel/lib/loglevel.js":
/*!***********************************************!*\
  !*** ./node_modules/loglevel/lib/loglevel.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
    "use strict";
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {
    "use strict";

    // Slightly dubious tricks to cut down minimized file size
    var noop = function() {};
    var undefinedType = "undefined";
    var isIE = (typeof window !== undefinedType) && (typeof window.navigator !== undefinedType) && (
        /Trident\/|MSIE /.test(window.navigator.userAgent)
    );

    var logMethods = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
    ];

    // Cross-browser bind equivalent that works at least back to IE6
    function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if (typeof method.bind === 'function') {
            return method.bind(obj);
        } else {
            try {
                return Function.prototype.bind.call(method, obj);
            } catch (e) {
                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
                return function() {
                    return Function.prototype.apply.apply(method, [obj, arguments]);
                };
            }
        }
    }

    // Trace() doesn't print the message in IE, so for that case we need to wrap it
    function traceForIE() {
        if (console.log) {
            if (console.log.apply) {
                console.log.apply(console, arguments);
            } else {
                // In old IE, native console methods themselves don't have apply().
                Function.prototype.apply.apply(console.log, [console, arguments]);
            }
        }
        if (console.trace) console.trace();
    }

    // Build the best logging method possible for this env
    // Wherever possible we want to bind, not wrap, to preserve stack traces
    function realMethod(methodName) {
        if (methodName === 'debug') {
            methodName = 'log';
        }

        if (typeof console === undefinedType) {
            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
        } else if (methodName === 'trace' && isIE) {
            return traceForIE;
        } else if (console[methodName] !== undefined) {
            return bindMethod(console, methodName);
        } else if (console.log !== undefined) {
            return bindMethod(console, 'log');
        } else {
            return noop;
        }
    }

    // These private functions always need `this` to be set properly

    function replaceLoggingMethods(level, loggerName) {
        /*jshint validthis:true */
        for (var i = 0; i < logMethods.length; i++) {
            var methodName = logMethods[i];
            this[methodName] = (i < level) ?
                noop :
                this.methodFactory(methodName, level, loggerName);
        }

        // Define log.log as an alias for log.debug
        this.log = this.debug;
    }

    // In old IE versions, the console isn't present until you first open it.
    // We build realMethod() replacements here that regenerate logging methods
    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
        return function () {
            if (typeof console !== undefinedType) {
                replaceLoggingMethods.call(this, level, loggerName);
                this[methodName].apply(this, arguments);
            }
        };
    }

    // By default, we use closely bound real methods wherever possible, and
    // otherwise we wait for a console to appear, and then try again.
    function defaultMethodFactory(methodName, level, loggerName) {
        /*jshint validthis:true */
        return realMethod(methodName) ||
               enableLoggingWhenConsoleArrives.apply(this, arguments);
    }

    function Logger(name, defaultLevel, factory) {
      var self = this;
      var currentLevel;
      var storageKey = "loglevel";
      if (name) {
        storageKey += ":" + name;
      }

      function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

          if (typeof window === undefinedType) return;

          // Use localStorage if available
          try {
              window.localStorage[storageKey] = levelName;
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {}
      }

      function getPersistedLevel() {
          var storedLevel;

          if (typeof window === undefinedType) return;

          try {
              storedLevel = window.localStorage[storageKey];
          } catch (ignore) {}

          // Fallback to cookies if local storage gives us nothing
          if (typeof storedLevel === undefinedType) {
              try {
                  var cookie = window.document.cookie;
                  var location = cookie.indexOf(
                      encodeURIComponent(storageKey) + "=");
                  if (location !== -1) {
                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
                  }
              } catch (ignore) {}
          }

          // If the stored level is not valid, treat it as if nothing was stored.
          if (self.levels[storedLevel] === undefined) {
              storedLevel = undefined;
          }

          return storedLevel;
      }

      /*
       *
       * Public logger API - see https://github.com/pimterry/loglevel for details
       *
       */

      self.name = name;

      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
          "ERROR": 4, "SILENT": 5};

      self.methodFactory = factory || defaultMethodFactory;

      self.getLevel = function () {
          return currentLevel;
      };

      self.setLevel = function (level, persist) {
          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
              level = self.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
              currentLevel = level;
              if (persist !== false) {  // defaults to true
                  persistLevelIfPossible(level);
              }
              replaceLoggingMethods.call(self, level, name);
              if (typeof console === undefinedType && level < self.levels.SILENT) {
                  return "No console available for logging";
              }
          } else {
              throw "log.setLevel() called with invalid level: " + level;
          }
      };

      self.setDefaultLevel = function (level) {
          if (!getPersistedLevel()) {
              self.setLevel(level, false);
          }
      };

      self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
      };

      self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
      };

      // Initialize with the right level
      var initialLevel = getPersistedLevel();
      if (initialLevel == null) {
          initialLevel = defaultLevel == null ? "WARN" : defaultLevel;
      }
      self.setLevel(initialLevel, false);
    }

    /*
     *
     * Top-level API
     *
     */

    var defaultLogger = new Logger();

    var _loggersByName = {};
    defaultLogger.getLogger = function getLogger(name) {
        if (typeof name !== "string" || name === "") {
          throw new TypeError("You must supply a name when creating a logger.");
        }

        var logger = _loggersByName[name];
        if (!logger) {
          logger = _loggersByName[name] = new Logger(
            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
        }
        return logger;
    };

    // Grab the current global log variable in case of overwrite
    var _log = (typeof window !== undefinedType) ? window.log : undefined;
    defaultLogger.noConflict = function() {
        if (typeof window !== undefinedType &&
               window.log === defaultLogger) {
            window.log = _log;
        }

        return defaultLogger;
    };

    defaultLogger.getLoggers = function getLoggers() {
        return _loggersByName;
    };

    return defaultLogger;
}));


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/protoo-client/lib/EnhancedEventEmitter.js":
/*!****************************************************************!*\
  !*** ./node_modules/protoo-client/lib/EnhancedEventEmitter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { EventEmitter } = __webpack_require__(/*! events */ "./node_modules/events/events.js");
const Logger = __webpack_require__(/*! ./Logger */ "./node_modules/protoo-client/lib/Logger.js");

class EnhancedEventEmitter extends EventEmitter
{
	constructor(logger)
	{
		super();
		this.setMaxListeners(Infinity);

		this._logger = logger || new Logger('EnhancedEventEmitter');
	}

	safeEmit(event, ...args)
	{
		try
		{
			this.emit(event, ...args);
		}
		catch (error)
		{
			this._logger.error(
				'safeEmit() | event listener threw an error [event:%s]:%o',
				event, error);
		}
	}

	async safeEmitAsPromise(event, ...args)
	{
		return new Promise((resolve, reject) =>
		{
			this.safeEmit(event, ...args, resolve, reject);
		});
	}
}

module.exports = EnhancedEventEmitter;


/***/ }),

/***/ "./node_modules/protoo-client/lib/Logger.js":
/*!**************************************************!*\
  !*** ./node_modules/protoo-client/lib/Logger.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");

const APP_NAME = 'protoo-client';

class Logger
{
	constructor(prefix)
	{
		if (prefix)
		{
			this._debug = debug(`${APP_NAME}:${prefix}`);
			this._warn = debug(`${APP_NAME}:WARN:${prefix}`);
			this._error = debug(`${APP_NAME}:ERROR:${prefix}`);
		}
		else
		{
			this._debug = debug(APP_NAME);
			this._warn = debug(`${APP_NAME}:WARN`);
			this._error = debug(`${APP_NAME}:ERROR`);
		}

		/* eslint-disable no-console */
		this._debug.log = console.info.bind(console);
		this._warn.log = console.warn.bind(console);
		this._error.log = console.error.bind(console);
		/* eslint-enable no-console */
	}

	get debug()
	{
		return this._debug;
	}

	get warn()
	{
		return this._warn;
	}

	get error()
	{
		return this._error;
	}
}

module.exports = Logger;


/***/ }),

/***/ "./node_modules/protoo-client/lib/Message.js":
/*!***************************************************!*\
  !*** ./node_modules/protoo-client/lib/Message.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Logger = __webpack_require__(/*! ./Logger */ "./node_modules/protoo-client/lib/Logger.js");
const { generateRandomNumber } = __webpack_require__(/*! ./utils */ "./node_modules/protoo-client/lib/utils.js");

const logger = new Logger('Message');

class Message
{
	static parse(raw)
	{
		let object;
		const message = {};

		try
		{
			object = JSON.parse(raw);
		}
		catch (error)
		{
			logger.error('parse() | invalid JSON: %s', error);

			return;
		}

		if (typeof object !== 'object' || Array.isArray(object))
		{
			logger.error('parse() | not an object');

			return;
		}

		// Request.
		if (object.request)
		{
			message.request = true;

			if (typeof object.method !== 'string')
			{
				logger.error('parse() | missing/invalid method field');

				return;
			}

			if (typeof object.id !== 'number')
			{
				logger.error('parse() | missing/invalid id field');

				return;
			}

			message.id = object.id;
			message.method = object.method;
			message.data = object.data || {};
		}
		// Response.
		else if (object.response)
		{
			message.response = true;

			if (typeof object.id !== 'number')
			{
				logger.error('parse() | missing/invalid id field');

				return;
			}

			message.id = object.id;

			// Success.
			if (object.ok)
			{
				message.ok = true;
				message.data = object.data || {};
			}
			// Error.
			else
			{
				message.ok = false;
				message.errorCode = object.errorCode;
				message.errorReason = object.errorReason;
			}
		}
		// Notification.
		else if (object.notification)
		{
			message.notification = true;

			if (typeof object.method !== 'string')
			{
				logger.error('parse() | missing/invalid method field');

				return;
			}

			message.method = object.method;
			message.data = object.data || {};
		}
		// Invalid.
		else
		{
			logger.error('parse() | missing request/response field');

			return;
		}

		return message;
	}

	static createRequest(method, data)
	{
		const request =
		{
			request : true,
			id      : generateRandomNumber(),
			method  : method,
			data    : data || {}
		};

		return request;
	}

	static createSuccessResponse(request, data)
	{
		const response =
		{
			response : true,
			id       : request.id,
			ok       : true,
			data     : data || {}
		};

		return response;
	}

	static createErrorResponse(request, errorCode, errorReason)
	{
		const response =
		{
			response    : true,
			id          : request.id,
			ok          : false,
			errorCode   : errorCode,
			errorReason : errorReason
		};

		return response;
	}

	static createNotification(method, data)
	{
		const notification =
		{
			notification : true,
			method       : method,
			data         : data || {}
		};

		return notification;
	}
}

module.exports = Message;


/***/ }),

/***/ "./node_modules/protoo-client/lib/Peer.js":
/*!************************************************!*\
  !*** ./node_modules/protoo-client/lib/Peer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Logger = __webpack_require__(/*! ./Logger */ "./node_modules/protoo-client/lib/Logger.js");
const EnhancedEventEmitter = __webpack_require__(/*! ./EnhancedEventEmitter */ "./node_modules/protoo-client/lib/EnhancedEventEmitter.js");
const Message = __webpack_require__(/*! ./Message */ "./node_modules/protoo-client/lib/Message.js");

const logger = new Logger('Peer');

class Peer extends EnhancedEventEmitter
{
	/**
	 * @param {protoo.Transport} transport
	 *
	 * @emits open
	 * @emits {currentAttempt: Number} failed
	 * @emits disconnected
	 * @emits close
	 * @emits {request: protoo.Request, accept: Function, reject: Function} request
	 * @emits {notification: protoo.Notification} notification
	 */
	constructor(transport)
	{
		super(logger);

		logger.debug('constructor()');

		// Closed flag.
		// @type {Boolean}
		this._closed = false;

		// Transport.
		// @type {protoo.Transport}
		this._transport = transport;

		// Connected flag.
		// @type {Boolean}
		this._connected = false;

		// Custom data object.
		// @type {Object}
		this._data = {};

		// Map of pending sent request objects indexed by request id.
		// @type {Map<Number, Object>}
		this._sents = new Map();

		// Handle transport.
		this._handleTransport();
	}

	/**
	 * Whether the Peer is closed.
	 *
	 * @returns {Boolean}
	 */
	get closed()
	{
		return this._closed;
	}

	/**
	 * Whether the Peer is connected.
	 *
	 * @returns {Boolean}
	 */
	get connected()
	{
		return this._connected;
	}

	/**
	 * App custom data.
	 *
	 * @returns {Object}
	 */
	get data()
	{
		return this._data;
	}

	/**
	 * Invalid setter.
	 */
	set data(data) // eslint-disable-line no-unused-vars
	{
		throw new Error('cannot override data object');
	}

	/**
	 * Close this Peer and its Transport.
	 */
	close()
	{
		if (this._closed)
			return;

		logger.debug('close()');

		this._closed = true;
		this._connected = false;

		// Close Transport.
		this._transport.close();

		// Close every pending sent.
		for (const sent of this._sents.values())
		{
			sent.close();
		}

		// Emit 'close' event.
		this.safeEmit('close');
	}

	/**
	 * Send a protoo request to the server-side Room.
	 *
	 * @param {String} method
	 * @param {Object} [data]
	 *
	 * @async
	 * @returns {Object} The response data Object if a success response is received.
	 */
	async request(method, data = undefined)
	{
		const request = Message.createRequest(method, data);

		this._logger.debug('request() [method:%s, id:%s]', method, request.id);

		// This may throw.
		await this._transport.send(request);

		return new Promise((pResolve, pReject) =>
		{
			const timeout = 1500 * (15 + (0.1 * this._sents.size));
			const sent =
			{
				id      : request.id,
				method  : request.method,
				resolve : (data2) =>
				{
					if (!this._sents.delete(request.id))
						return;

					clearTimeout(sent.timer);
					pResolve(data2);
				},
				reject : (error) =>
				{
					if (!this._sents.delete(request.id))
						return;

					clearTimeout(sent.timer);
					pReject(error);
				},
				timer : setTimeout(() =>
				{
					if (!this._sents.delete(request.id))
						return;

					pReject(new Error('request timeout'));
				}, timeout),
				close : () =>
				{
					clearTimeout(sent.timer);
					pReject(new Error('peer closed'));
				}
			};

			// Add sent stuff to the map.
			this._sents.set(request.id, sent);
		});
	}

	/**
	 * Send a protoo notification to the server-side Room.
	 *
	 * @param {String} method
	 * @param {Object} [data]
	 *
	 * @async
	 */
	async notify(method, data = undefined)
	{
		const notification = Message.createNotification(method, data);

		this._logger.debug('notify() [method:%s]', method);

		// This may throw.
		await this._transport.send(notification);
	}

	_handleTransport()
	{
		if (this._transport.closed)
		{
			this._closed = true;

			setTimeout(() =>
			{
				if (this._closed)
					return;

				this._connected = false;

				this.safeEmit('close');
			});

			return;
		}

		this._transport.on('open', () =>
		{
			if (this._closed)
				return;

			logger.debug('emit "open"');

			this._connected = true;

			this.safeEmit('open');
		});

		this._transport.on('disconnected', () =>
		{
			if (this._closed)
				return;

			logger.debug('emit "disconnected"');

			this._connected = false;

			this.safeEmit('disconnected');
		});

		this._transport.on('failed', (currentAttempt) =>
		{
			if (this._closed)
				return;

			logger.debug('emit "failed" [currentAttempt:%s]', currentAttempt);

			this._connected = false;

			this.safeEmit('failed', currentAttempt);
		});

		this._transport.on('close', () =>
		{
			if (this._closed)
				return;

			this._closed = true;

			logger.debug('emit "close"');

			this._connected = false;

			this.safeEmit('close');
		});

		this._transport.on('message', (message) =>
		{
			if (message.request)
				this._handleRequest(message);
			else if (message.response)
				this._handleResponse(message);
			else if (message.notification)
				this._handleNotification(message);
		});
	}

	_handleRequest(request)
	{
		try
		{
			this.emit('request',
				// Request.
				request,
				// accept() function.
				(data) =>
				{
					const response = Message.createSuccessResponse(request, data);

					this._transport.send(response)
						.catch(() => {});
				},
				// reject() function.
				(errorCode, errorReason) =>
				{
					if (errorCode instanceof Error)
					{
						errorCode = 500;
						errorReason = String(errorCode);
					}
					else if (typeof errorCode === 'number' && errorReason instanceof Error)
					{
						errorReason = String(errorReason);
					}

					const response =
						Message.createErrorResponse(request, errorCode, errorReason);

					this._transport.send(response)
						.catch(() => {});
				});
		}
		catch (error)
		{
			const response = Message.createErrorResponse(request, 500, String(error));

			this._transport.send(response)
				.catch(() => {});
		}
	}

	_handleResponse(response)
	{
		const sent = this._sents.get(response.id);

		if (!sent)
		{
			logger.error(
				'received response does not match any sent request [id:%s]', response.id);

			return;
		}

		if (response.ok)
		{
			sent.resolve(response.data);
		}
		else
		{
			const error = new Error(response.errorReason);

			error.code = response.errorCode;
			sent.reject(error);
		}
	}

	_handleNotification(notification)
	{
		this.safeEmit('notification', notification);
	}
}

module.exports = Peer;


/***/ }),

/***/ "./node_modules/protoo-client/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/protoo-client/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { version } = __webpack_require__(/*! ../package.json */ "./node_modules/protoo-client/package.json");
const Peer = __webpack_require__(/*! ./Peer */ "./node_modules/protoo-client/lib/Peer.js");
const WebSocketTransport = __webpack_require__(/*! ./transports/WebSocketTransport */ "./node_modules/protoo-client/lib/transports/WebSocketTransport.js");

/**
 * Expose mediasoup-client version.
 *
 * @type {String}
 */
exports.version = version;

/**
 * Expose Peer class.
 *
 * @type {Class}
 */
exports.Peer = Peer;

/**
 * Expose WebSocketTransport class.
 *
 * @type {Class}
 */
exports.WebSocketTransport = WebSocketTransport;


/***/ }),

/***/ "./node_modules/protoo-client/lib/transports/WebSocketTransport.js":
/*!*************************************************************************!*\
  !*** ./node_modules/protoo-client/lib/transports/WebSocketTransport.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const W3CWebSocket = __webpack_require__(/*! websocket */ "./node_modules/websocket/lib/browser.js").w3cwebsocket;
const retry = __webpack_require__(/*! retry */ "./node_modules/retry/index.js");
const Logger = __webpack_require__(/*! ../Logger */ "./node_modules/protoo-client/lib/Logger.js");
const EnhancedEventEmitter = __webpack_require__(/*! ../EnhancedEventEmitter */ "./node_modules/protoo-client/lib/EnhancedEventEmitter.js");
const Message = __webpack_require__(/*! ../Message */ "./node_modules/protoo-client/lib/Message.js");

const WS_SUBPROTOCOL = 'protoo';
const DEFAULT_RETRY_OPTIONS =
{
	retries    : 10,
	factor     : 2,
	minTimeout : 1 * 1000,
	maxTimeout : 8 * 1000
};

const logger = new Logger('WebSocketTransport');

class WebSocketTransport extends EnhancedEventEmitter
{
	/**
	 * @param {String} url - WebSocket URL.
	 * @param {Object} [options] - Options for WebSocket-Node.W3CWebSocket and retry.
	 */
	constructor(url, options)
	{
		super(logger);

		logger.debug('constructor() [url:%s, options:%o]', url, options);

		// Closed flag.
		// @type {Boolean}
		this._closed = false;

		// WebSocket URL.
		// @type {String}
		this._url = url;

		// Options.
		// @type {Object}
		this._options = options || {};

		// WebSocket instance.
		// @type {WebSocket}
		this._ws = null;

		// Run the WebSocket.
		this._runWebSocket();
	}

	get closed()
	{
		return this._closed;
	}

	close()
	{
		if (this._closed)
			return;

		logger.debug('close()');

		// Don't wait for the WebSocket 'close' event, do it now.
		this._closed = true;
		this.safeEmit('close');

		try
		{
			this._ws.onopen = null;
			this._ws.onclose = null;
			this._ws.onerror = null;
			this._ws.onmessage = null;
			this._ws.close();
		}
		catch (error)
		{
			logger.error('close() | error closing the WebSocket: %o', error);
		}
	}

	async send(message)
	{
		if (this._closed)
			throw new Error('transport closed');

		try
		{
			this._ws.send(JSON.stringify(message));
		}
		catch (error)
		{
			logger.warn('send() failed:%o', error);

			throw error;
		}
	}

	_runWebSocket()
	{
		const operation =
			retry.operation(this._options.retry || DEFAULT_RETRY_OPTIONS);

		let wasConnected = false;

		operation.attempt((currentAttempt) =>
		{
			if (this._closed)
			{
				operation.stop();

				return;
			}

			logger.debug('_runWebSocket() [currentAttempt:%s]', currentAttempt);

			this._ws = new W3CWebSocket(
				this._url,
				WS_SUBPROTOCOL,
				this._options.origin,
				this._options.headers,
				this._options.requestOptions,
				this._options.clientConfig);

			this._ws.onopen = () =>
			{
				if (this._closed)
					return;

				wasConnected = true;

				// Emit 'open' event.
				this.safeEmit('open');
			};

			this._ws.onclose = (event) =>
			{
				if (this._closed)
					return;

				logger.warn(
					'WebSocket "close" event [wasClean:%s, code:%s, reason:"%s"]',
					event.wasClean, event.code, event.reason);

				// Don't retry if code is 4000 (closed by the server).
				if (event.code !== 4000)
				{
					// If it was not connected, try again.
					if (!wasConnected)
					{
						this.safeEmit('failed', currentAttempt);

						if (this._closed)
							return;

						if (operation.retry(true))
							return;
					}
					// If it was connected, start from scratch.
					else
					{
						operation.stop();

						this.safeEmit('disconnected');

						if (this._closed)
							return;

						this._runWebSocket();

						return;
					}
				}

				this._closed = true;

				// Emit 'close' event.
				this.safeEmit('close');
			};

			this._ws.onerror = () =>
			{
				if (this._closed)
					return;

				logger.error('WebSocket "error" event');
			};

			this._ws.onmessage = (event) =>
			{
				if (this._closed)
					return;

				const message = Message.parse(event.data);

				if (!message)
					return;

				if (this.listenerCount('message') === 0)
				{
					logger.error(
						'no listeners for WebSocket "message" event, ignoring received message');

					return;
				}

				// Emit 'message' event.
				this.safeEmit('message', message);
			};
		});
	}
}

module.exports = WebSocketTransport;


/***/ }),

/***/ "./node_modules/protoo-client/lib/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/protoo-client/lib/utils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Generates a random positive integer.
 *
 * @returns {Number}
 */
exports.generateRandomNumber = function()
{
	return Math.round(Math.random() * 10000000);
};


/***/ }),

/***/ "./node_modules/protoo-client/package.json":
/*!*************************************************!*\
  !*** ./node_modules/protoo-client/package.json ***!
  \*************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, bugs, dependencies, description, devDependencies, engines, homepage, keywords, license, main, name, optionalDependencies, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"protoo-client@4.0.4\",\"/home/kasparsj/Work/metaverse\"]],\"_from\":\"protoo-client@4.0.4\",\"_id\":\"protoo-client@4.0.4\",\"_inBundle\":false,\"_integrity\":\"sha512-+WZUJJTlBSTWYeNu0Tv8SGI3kjettLvr2IUdBsAfioi0Szf8peeky79h6li7gThA3pIpNC+A+IuCUWaK7MlFfQ==\",\"_location\":\"/hubs-colyseus-ion-adapter/protoo-client\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"protoo-client@4.0.4\",\"name\":\"protoo-client\",\"escapedName\":\"protoo-client\",\"rawSpec\":\"4.0.4\",\"saveSpec\":null,\"fetchSpec\":\"4.0.4\"},\"_requiredBy\":[\"/hubs-colyseus-ion-adapter/ion-sdk-js\"],\"_resolved\":\"https://registry.npmjs.org/protoo-client/-/protoo-client-4.0.4.tgz\",\"_spec\":\"4.0.4\",\"_where\":\"/home/kasparsj/Work/metaverse\",\"author\":{\"name\":\"Iñaki Baz Castillo\",\"email\":\"ibc@aliax.net\"},\"bugs\":{\"url\":\"https://github.com/ibc/protoo/issues\"},\"dependencies\":{\"debug\":\"^4.1.1\",\"events\":\"^3.1.0\",\"retry\":\"^0.12.0\",\"websocket\":\"^1.0.31\"},\"description\":\"protoo JavaScript client module\",\"devDependencies\":{\"eslint\":\"^5.16.0\"},\"engines\":{\"node\":\">=8.0.0\"},\"homepage\":\"https://protoojs.org\",\"keywords\":[\"nodejs\",\"browser\",\"websocket\"],\"license\":\"MIT\",\"main\":\"lib/index.js\",\"name\":\"protoo-client\",\"optionalDependencies\":{\"websocket\":\"^1.0.31\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ibc/protoo.git\"},\"scripts\":{\"lint\":\"eslint -c .eslintrc.js lib\"},\"version\":\"4.0.4\"}");

/***/ }),

/***/ "./node_modules/retry/index.js":
/*!*************************************!*\
  !*** ./node_modules/retry/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/retry */ "./node_modules/retry/lib/retry.js");

/***/ }),

/***/ "./node_modules/retry/lib/retry.js":
/*!*****************************************!*\
  !*** ./node_modules/retry/lib/retry.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var RetryOperation = __webpack_require__(/*! ./retry_operation */ "./node_modules/retry/lib/retry_operation.js");

exports.operation = function(options) {
  var timeouts = exports.timeouts(options);
  return new RetryOperation(timeouts, {
      forever: options && options.forever,
      unref: options && options.unref,
      maxRetryTime: options && options.maxRetryTime
  });
};

exports.timeouts = function(options) {
  if (options instanceof Array) {
    return [].concat(options);
  }

  var opts = {
    retries: 10,
    factor: 2,
    minTimeout: 1 * 1000,
    maxTimeout: Infinity,
    randomize: false
  };
  for (var key in options) {
    opts[key] = options[key];
  }

  if (opts.minTimeout > opts.maxTimeout) {
    throw new Error('minTimeout is greater than maxTimeout');
  }

  var timeouts = [];
  for (var i = 0; i < opts.retries; i++) {
    timeouts.push(this.createTimeout(i, opts));
  }

  if (options && options.forever && !timeouts.length) {
    timeouts.push(this.createTimeout(i, opts));
  }

  // sort the array numerically ascending
  timeouts.sort(function(a,b) {
    return a - b;
  });

  return timeouts;
};

exports.createTimeout = function(attempt, opts) {
  var random = (opts.randomize)
    ? (Math.random() + 1)
    : 1;

  var timeout = Math.round(random * opts.minTimeout * Math.pow(opts.factor, attempt));
  timeout = Math.min(timeout, opts.maxTimeout);

  return timeout;
};

exports.wrap = function(obj, options, methods) {
  if (options instanceof Array) {
    methods = options;
    options = null;
  }

  if (!methods) {
    methods = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function') {
        methods.push(key);
      }
    }
  }

  for (var i = 0; i < methods.length; i++) {
    var method   = methods[i];
    var original = obj[method];

    obj[method] = function retryWrapper(original) {
      var op       = exports.operation(options);
      var args     = Array.prototype.slice.call(arguments, 1);
      var callback = args.pop();

      args.push(function(err) {
        if (op.retry(err)) {
          return;
        }
        if (err) {
          arguments[0] = op.mainError();
        }
        callback.apply(this, arguments);
      });

      op.attempt(function() {
        original.apply(obj, args);
      });
    }.bind(obj, original);
    obj[method].options = options;
  }
};


/***/ }),

/***/ "./node_modules/retry/lib/retry_operation.js":
/*!***************************************************!*\
  !*** ./node_modules/retry/lib/retry_operation.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function RetryOperation(timeouts, options) {
  // Compatibility for the old (timeouts, retryForever) signature
  if (typeof options === 'boolean') {
    options = { forever: options };
  }

  this._originalTimeouts = JSON.parse(JSON.stringify(timeouts));
  this._timeouts = timeouts;
  this._options = options || {};
  this._maxRetryTime = options && options.maxRetryTime || Infinity;
  this._fn = null;
  this._errors = [];
  this._attempts = 1;
  this._operationTimeout = null;
  this._operationTimeoutCb = null;
  this._timeout = null;
  this._operationStart = null;

  if (this._options.forever) {
    this._cachedTimeouts = this._timeouts.slice(0);
  }
}
module.exports = RetryOperation;

RetryOperation.prototype.reset = function() {
  this._attempts = 1;
  this._timeouts = this._originalTimeouts;
}

RetryOperation.prototype.stop = function() {
  if (this._timeout) {
    clearTimeout(this._timeout);
  }

  this._timeouts       = [];
  this._cachedTimeouts = null;
};

RetryOperation.prototype.retry = function(err) {
  if (this._timeout) {
    clearTimeout(this._timeout);
  }

  if (!err) {
    return false;
  }
  var currentTime = new Date().getTime();
  if (err && currentTime - this._operationStart >= this._maxRetryTime) {
    this._errors.unshift(new Error('RetryOperation timeout occurred'));
    return false;
  }

  this._errors.push(err);

  var timeout = this._timeouts.shift();
  if (timeout === undefined) {
    if (this._cachedTimeouts) {
      // retry forever, only keep last error
      this._errors.splice(this._errors.length - 1, this._errors.length);
      this._timeouts = this._cachedTimeouts.slice(0);
      timeout = this._timeouts.shift();
    } else {
      return false;
    }
  }

  var self = this;
  var timer = setTimeout(function() {
    self._attempts++;

    if (self._operationTimeoutCb) {
      self._timeout = setTimeout(function() {
        self._operationTimeoutCb(self._attempts);
      }, self._operationTimeout);

      if (self._options.unref) {
          self._timeout.unref();
      }
    }

    self._fn(self._attempts);
  }, timeout);

  if (this._options.unref) {
      timer.unref();
  }

  return true;
};

RetryOperation.prototype.attempt = function(fn, timeoutOps) {
  this._fn = fn;

  if (timeoutOps) {
    if (timeoutOps.timeout) {
      this._operationTimeout = timeoutOps.timeout;
    }
    if (timeoutOps.cb) {
      this._operationTimeoutCb = timeoutOps.cb;
    }
  }

  var self = this;
  if (this._operationTimeoutCb) {
    this._timeout = setTimeout(function() {
      self._operationTimeoutCb();
    }, self._operationTimeout);
  }

  this._operationStart = new Date().getTime();

  this._fn(this._attempts);
};

RetryOperation.prototype.try = function(fn) {
  console.log('Using RetryOperation.try() is deprecated');
  this.attempt(fn);
};

RetryOperation.prototype.start = function(fn) {
  console.log('Using RetryOperation.start() is deprecated');
  this.attempt(fn);
};

RetryOperation.prototype.start = RetryOperation.prototype.try;

RetryOperation.prototype.errors = function() {
  return this._errors;
};

RetryOperation.prototype.attempts = function() {
  return this._attempts;
};

RetryOperation.prototype.mainError = function() {
  if (this._errors.length === 0) {
    return null;
  }

  var counts = {};
  var mainError = null;
  var mainErrorCount = 0;

  for (var i = 0; i < this._errors.length; i++) {
    var error = this._errors[i];
    var message = error.message;
    var count = (counts[message] || 0) + 1;

    counts[message] = count;

    if (count >= mainErrorCount) {
      mainError = error;
      mainErrorCount = count;
    }
  }

  return mainError;
};


/***/ }),

/***/ "./node_modules/sdp-transform/lib/grammar.js":
/*!***************************************************!*\
  !*** ./node_modules/sdp-transform/lib/grammar.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var grammar = module.exports = {
  v: [{
    name: 'version',
    reg: /^(\d*)$/
  }],
  o: [{
    // o=- 20518 0 IN IP4 203.0.113.1
    // NB: sessionId will be a String in most cases because it is huge
    name: 'origin',
    reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
    names: ['username', 'sessionId', 'sessionVersion', 'netType', 'ipVer', 'address'],
    format: '%s %s %d %s IP%d %s'
  }],
  // default parsing of these only (though some of these feel outdated)
  s: [{ name: 'name' }],
  i: [{ name: 'description' }],
  u: [{ name: 'uri' }],
  e: [{ name: 'email' }],
  p: [{ name: 'phone' }],
  z: [{ name: 'timezones' }], // TODO: this one can actually be parsed properly...
  r: [{ name: 'repeats' }],   // TODO: this one can also be parsed properly
  // k: [{}], // outdated thing ignored
  t: [{
    // t=0 0
    name: 'timing',
    reg: /^(\d*) (\d*)/,
    names: ['start', 'stop'],
    format: '%d %d'
  }],
  c: [{
    // c=IN IP4 10.47.197.26
    name: 'connection',
    reg: /^IN IP(\d) (\S*)/,
    names: ['version', 'ip'],
    format: 'IN IP%d %s'
  }],
  b: [{
    // b=AS:4000
    push: 'bandwidth',
    reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
    names: ['type', 'limit'],
    format: '%s:%s'
  }],
  m: [{
    // m=video 51744 RTP/AVP 126 97 98 34 31
    // NB: special - pushes to session
    // TODO: rtp/fmtp should be filtered by the payloads found here?
    reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
    names: ['type', 'port', 'protocol', 'payloads'],
    format: '%s %d %s %s'
  }],
  a: [
    {
      // a=rtpmap:110 opus/48000/2
      push: 'rtp',
      reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
      names: ['payload', 'codec', 'rate', 'encoding'],
      format: function (o) {
        return (o.encoding)
          ? 'rtpmap:%d %s/%s/%s'
          : o.rate
            ? 'rtpmap:%d %s/%s'
            : 'rtpmap:%d %s';
      }
    },
    {
      // a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
      // a=fmtp:111 minptime=10; useinbandfec=1
      push: 'fmtp',
      reg: /^fmtp:(\d*) ([\S| ]*)/,
      names: ['payload', 'config'],
      format: 'fmtp:%d %s'
    },
    {
      // a=control:streamid=0
      name: 'control',
      reg: /^control:(.*)/,
      format: 'control:%s'
    },
    {
      // a=rtcp:65179 IN IP4 193.84.77.194
      name: 'rtcp',
      reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
      names: ['port', 'netType', 'ipVer', 'address'],
      format: function (o) {
        return (o.address != null)
          ? 'rtcp:%d %s IP%d %s'
          : 'rtcp:%d';
      }
    },
    {
      // a=rtcp-fb:98 trr-int 100
      push: 'rtcpFbTrrInt',
      reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
      names: ['payload', 'value'],
      format: 'rtcp-fb:%d trr-int %d'
    },
    {
      // a=rtcp-fb:98 nack rpsi
      push: 'rtcpFb',
      reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
      names: ['payload', 'type', 'subtype'],
      format: function (o) {
        return (o.subtype != null)
          ? 'rtcp-fb:%s %s %s'
          : 'rtcp-fb:%s %s';
      }
    },
    {
      // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
      // a=extmap:1/recvonly URI-gps-string
      // a=extmap:3 urn:ietf:params:rtp-hdrext:encrypt urn:ietf:params:rtp-hdrext:smpte-tc 25@600/24
      push: 'ext',
      reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
      names: ['value', 'direction', 'encrypt-uri', 'uri', 'config'],
      format: function (o) {
        return (
          'extmap:%d' +
          (o.direction ? '/%s' : '%v') +
          (o['encrypt-uri'] ? ' %s' : '%v') +
          ' %s' +
          (o.config ? ' %s' : '')
        );
      }
    },
    {
      // a=extmap-allow-mixed
      name: 'extmapAllowMixed',
      reg: /^(extmap-allow-mixed)/
    },
    {
      // a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
      push: 'crypto',
      reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
      names: ['id', 'suite', 'config', 'sessionConfig'],
      format: function (o) {
        return (o.sessionConfig != null)
          ? 'crypto:%d %s %s %s'
          : 'crypto:%d %s %s';
      }
    },
    {
      // a=setup:actpass
      name: 'setup',
      reg: /^setup:(\w*)/,
      format: 'setup:%s'
    },
    {
      // a=connection:new
      name: 'connectionType',
      reg: /^connection:(new|existing)/,
      format: 'connection:%s'
    },
    {
      // a=mid:1
      name: 'mid',
      reg: /^mid:([^\s]*)/,
      format: 'mid:%s'
    },
    {
      // a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
      name: 'msid',
      reg: /^msid:(.*)/,
      format: 'msid:%s'
    },
    {
      // a=ptime:20
      name: 'ptime',
      reg: /^ptime:(\d*(?:\.\d*)*)/,
      format: 'ptime:%d'
    },
    {
      // a=maxptime:60
      name: 'maxptime',
      reg: /^maxptime:(\d*(?:\.\d*)*)/,
      format: 'maxptime:%d'
    },
    {
      // a=sendrecv
      name: 'direction',
      reg: /^(sendrecv|recvonly|sendonly|inactive)/
    },
    {
      // a=ice-lite
      name: 'icelite',
      reg: /^(ice-lite)/
    },
    {
      // a=ice-ufrag:F7gI
      name: 'iceUfrag',
      reg: /^ice-ufrag:(\S*)/,
      format: 'ice-ufrag:%s'
    },
    {
      // a=ice-pwd:x9cml/YzichV2+XlhiMu8g
      name: 'icePwd',
      reg: /^ice-pwd:(\S*)/,
      format: 'ice-pwd:%s'
    },
    {
      // a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
      name: 'fingerprint',
      reg: /^fingerprint:(\S*) (\S*)/,
      names: ['type', 'hash'],
      format: 'fingerprint:%s %s'
    },
    {
      // a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
      // a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0 network-id 3 network-cost 10
      // a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0 network-id 3 network-cost 10
      // a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0 network-id 3 network-cost 10
      // a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0 network-id 3 network-cost 10
      push:'candidates',
      reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
      names: ['foundation', 'component', 'transport', 'priority', 'ip', 'port', 'type', 'raddr', 'rport', 'tcptype', 'generation', 'network-id', 'network-cost'],
      format: function (o) {
        var str = 'candidate:%s %d %s %d %s %d typ %s';

        str += (o.raddr != null) ? ' raddr %s rport %d' : '%v%v';

        // NB: candidate has three optional chunks, so %void middles one if it's missing
        str += (o.tcptype != null) ? ' tcptype %s' : '%v';

        if (o.generation != null) {
          str += ' generation %d';
        }

        str += (o['network-id'] != null) ? ' network-id %d' : '%v';
        str += (o['network-cost'] != null) ? ' network-cost %d' : '%v';
        return str;
      }
    },
    {
      // a=end-of-candidates (keep after the candidates line for readability)
      name: 'endOfCandidates',
      reg: /^(end-of-candidates)/
    },
    {
      // a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
      name: 'remoteCandidates',
      reg: /^remote-candidates:(.*)/,
      format: 'remote-candidates:%s'
    },
    {
      // a=ice-options:google-ice
      name: 'iceOptions',
      reg: /^ice-options:(\S*)/,
      format: 'ice-options:%s'
    },
    {
      // a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
      push: 'ssrcs',
      reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
      names: ['id', 'attribute', 'value'],
      format: function (o) {
        var str = 'ssrc:%d';
        if (o.attribute != null) {
          str += ' %s';
          if (o.value != null) {
            str += ':%s';
          }
        }
        return str;
      }
    },
    {
      // a=ssrc-group:FEC 1 2
      // a=ssrc-group:FEC-FR 3004364195 1080772241
      push: 'ssrcGroups',
      // token-char = %x21 / %x23-27 / %x2A-2B / %x2D-2E / %x30-39 / %x41-5A / %x5E-7E
      reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
      names: ['semantics', 'ssrcs'],
      format: 'ssrc-group:%s %s'
    },
    {
      // a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
      name: 'msidSemantic',
      reg: /^msid-semantic:\s?(\w*) (\S*)/,
      names: ['semantic', 'token'],
      format: 'msid-semantic: %s %s' // space after ':' is not accidental
    },
    {
      // a=group:BUNDLE audio video
      push: 'groups',
      reg: /^group:(\w*) (.*)/,
      names: ['type', 'mids'],
      format: 'group:%s %s'
    },
    {
      // a=rtcp-mux
      name: 'rtcpMux',
      reg: /^(rtcp-mux)/
    },
    {
      // a=rtcp-rsize
      name: 'rtcpRsize',
      reg: /^(rtcp-rsize)/
    },
    {
      // a=sctpmap:5000 webrtc-datachannel 1024
      name: 'sctpmap',
      reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
      names: ['sctpmapNumber', 'app', 'maxMessageSize'],
      format: function (o) {
        return (o.maxMessageSize != null)
          ? 'sctpmap:%s %s %s'
          : 'sctpmap:%s %s';
      }
    },
    {
      // a=x-google-flag:conference
      name: 'xGoogleFlag',
      reg: /^x-google-flag:([^\s]*)/,
      format: 'x-google-flag:%s'
    },
    {
      // a=rid:1 send max-width=1280;max-height=720;max-fps=30;depend=0
      push: 'rids',
      reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
      names: ['id', 'direction', 'params'],
      format: function (o) {
        return (o.params) ? 'rid:%s %s %s' : 'rid:%s %s';
      }
    },
    {
      // a=imageattr:97 send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320] recv [x=330,y=250]
      // a=imageattr:* send [x=800,y=640] recv *
      // a=imageattr:100 recv [x=320,y=240]
      push: 'imageattrs',
      reg: new RegExp(
        // a=imageattr:97
        '^imageattr:(\\d+|\\*)' +
        // send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320]
        '[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)' +
        // recv [x=330,y=250]
        '(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?'
      ),
      names: ['pt', 'dir1', 'attrs1', 'dir2', 'attrs2'],
      format: function (o) {
        return 'imageattr:%s %s %s' + (o.dir2 ? ' %s %s' : '');
      }
    },
    {
      // a=simulcast:send 1,2,3;~4,~5 recv 6;~7,~8
      // a=simulcast:recv 1;4,5 send 6;7
      name: 'simulcast',
      reg: new RegExp(
        // a=simulcast:
        '^simulcast:' +
        // send 1,2,3;~4,~5
        '(send|recv) ([a-zA-Z0-9\\-_~;,]+)' +
        // space + recv 6;~7,~8
        '(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?' +
        // end
        '$'
      ),
      names: ['dir1', 'list1', 'dir2', 'list2'],
      format: function (o) {
        return 'simulcast:%s %s' + (o.dir2 ? ' %s %s' : '');
      }
    },
    {
      // old simulcast draft 03 (implemented by Firefox)
      //   https://tools.ietf.org/html/draft-ietf-mmusic-sdp-simulcast-03
      // a=simulcast: recv pt=97;98 send pt=97
      // a=simulcast: send rid=5;6;7 paused=6,7
      name: 'simulcast_03',
      reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
      names: ['value'],
      format: 'simulcast: %s'
    },
    {
      // a=framerate:25
      // a=framerate:29.97
      name: 'framerate',
      reg: /^framerate:(\d+(?:$|\.\d+))/,
      format: 'framerate:%s'
    },
    {
      // RFC4570
      // a=source-filter: incl IN IP4 239.5.2.31 10.1.15.5
      name: 'sourceFilter',
      reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
      names: ['filterMode', 'netType', 'addressTypes', 'destAddress', 'srcList'],
      format: 'source-filter: %s %s %s %s %s'
    },
    {
      // a=bundle-only
      name: 'bundleOnly',
      reg: /^(bundle-only)/
    },
    {
      // a=label:1
      name: 'label',
      reg: /^label:(.+)/,
      format: 'label:%s'
    },
    {
      // RFC version 26 for SCTP over DTLS
      // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-5
      name: 'sctpPort',
      reg: /^sctp-port:(\d+)$/,
      format: 'sctp-port:%s'
    },
    {
      // RFC version 26 for SCTP over DTLS
      // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-6
      name: 'maxMessageSize',
      reg: /^max-message-size:(\d+)$/,
      format: 'max-message-size:%s'
    },
    {
      // RFC7273
      // a=ts-refclk:ptp=IEEE1588-2008:39-A7-94-FF-FE-07-CB-D0:37
      push:'tsRefClocks',
      reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
      names: ['clksrc', 'clksrcExt'],
      format: function (o) {
        return 'ts-refclk:%s' + (o.clksrcExt != null ? '=%s' : '');
      }
    },
    {
      // RFC7273
      // a=mediaclk:direct=963214424
      name:'mediaClk',
      reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
      names: ['id', 'mediaClockName', 'mediaClockValue', 'rateNumerator', 'rateDenominator'],
      format: function (o) {
        var str = 'mediaclk:';
        str += (o.id != null ? 'id=%s %s' : '%v%s');
        str += (o.mediaClockValue != null ? '=%s' : '');
        str += (o.rateNumerator != null ? ' rate=%s' : '');
        str += (o.rateDenominator != null ? '/%s' : '');
        return str;
      }
    },
    {
      // a=keywds:keywords
      name: 'keywords',
      reg: /^keywds:(.+)$/,
      format: 'keywds:%s'
    },
    {
      // a=content:main
      name: 'content',
      reg: /^content:(.+)/,
      format: 'content:%s'
    },
    // BFCP https://tools.ietf.org/html/rfc4583
    {
      // a=floorctrl:c-s
      name: 'bfcpFloorCtrl',
      reg: /^floorctrl:(c-only|s-only|c-s)/,
      format: 'floorctrl:%s'
    },
    {
      // a=confid:1
      name: 'bfcpConfId',
      reg: /^confid:(\d+)/,
      format: 'confid:%s'
    },
    {
      // a=userid:1
      name: 'bfcpUserId',
      reg: /^userid:(\d+)/,
      format: 'userid:%s'
    },
    {
      // a=floorid:1
      name: 'bfcpFloorId',
      reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
      names: ['id', 'mStream'],
      format: 'floorid:%s mstrm:%s'
    },
    {
      // any a= that we don't understand is kept verbatim on media.invalid
      push: 'invalid',
      names: ['value']
    }
  ]
};

// set sensible defaults to avoid polluting the grammar with boring details
Object.keys(grammar).forEach(function (key) {
  var objs = grammar[key];
  objs.forEach(function (obj) {
    if (!obj.reg) {
      obj.reg = /(.*)/;
    }
    if (!obj.format) {
      obj.format = '%s';
    }
  });
});


/***/ }),

/***/ "./node_modules/sdp-transform/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/sdp-transform/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(/*! ./parser */ "./node_modules/sdp-transform/lib/parser.js");
var writer = __webpack_require__(/*! ./writer */ "./node_modules/sdp-transform/lib/writer.js");

exports.write = writer;
exports.parse = parser.parse;
exports.parseParams = parser.parseParams;
exports.parseFmtpConfig = parser.parseFmtpConfig; // Alias of parseParams().
exports.parsePayloads = parser.parsePayloads;
exports.parseRemoteCandidates = parser.parseRemoteCandidates;
exports.parseImageAttributes = parser.parseImageAttributes;
exports.parseSimulcastStreamList = parser.parseSimulcastStreamList;


/***/ }),

/***/ "./node_modules/sdp-transform/lib/parser.js":
/*!**************************************************!*\
  !*** ./node_modules/sdp-transform/lib/parser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIntIfInt = function (v) {
  return String(Number(v)) === v ? Number(v) : v;
};

var attachProperties = function (match, location, names, rawName) {
  if (rawName && !names) {
    location[rawName] = toIntIfInt(match[1]);
  }
  else {
    for (var i = 0; i < names.length; i += 1) {
      if (match[i+1] != null) {
        location[names[i]] = toIntIfInt(match[i+1]);
      }
    }
  }
};

var parseReg = function (obj, location, content) {
  var needsBlank = obj.name && obj.names;
  if (obj.push && !location[obj.push]) {
    location[obj.push] = [];
  }
  else if (needsBlank && !location[obj.name]) {
    location[obj.name] = {};
  }
  var keyLocation = obj.push ?
    {} :  // blank object that will be pushed
    needsBlank ? location[obj.name] : location; // otherwise, named location or root

  attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);

  if (obj.push) {
    location[obj.push].push(keyLocation);
  }
};

var grammar = __webpack_require__(/*! ./grammar */ "./node_modules/sdp-transform/lib/grammar.js");
var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);

exports.parse = function (sdp) {
  var session = {}
    , media = []
    , location = session; // points at where properties go under (one of the above)

  // parse lines we understand
  sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function (l) {
    var type = l[0];
    var content = l.slice(2);
    if (type === 'm') {
      media.push({rtp: [], fmtp: []});
      location = media[media.length-1]; // point at latest media line
    }

    for (var j = 0; j < (grammar[type] || []).length; j += 1) {
      var obj = grammar[type][j];
      if (obj.reg.test(content)) {
        return parseReg(obj, location, content);
      }
    }
  });

  session.media = media; // link it up
  return session;
};

var paramReducer = function (acc, expr) {
  var s = expr.split(/=(.+)/, 2);
  if (s.length === 2) {
    acc[s[0]] = toIntIfInt(s[1]);
  } else if (s.length === 1 && expr.length > 1) {
    acc[s[0]] = undefined;
  }
  return acc;
};

exports.parseParams = function (str) {
  return str.split(/;\s?/).reduce(paramReducer, {});
};

// For backward compatibility - alias will be removed in 3.0.0
exports.parseFmtpConfig = exports.parseParams;

exports.parsePayloads = function (str) {
  return str.toString().split(' ').map(Number);
};

exports.parseRemoteCandidates = function (str) {
  var candidates = [];
  var parts = str.split(' ').map(toIntIfInt);
  for (var i = 0; i < parts.length; i += 3) {
    candidates.push({
      component: parts[i],
      ip: parts[i + 1],
      port: parts[i + 2]
    });
  }
  return candidates;
};

exports.parseImageAttributes = function (str) {
  return str.split(' ').map(function (item) {
    return item.substring(1, item.length-1).split(',').reduce(paramReducer, {});
  });
};

exports.parseSimulcastStreamList = function (str) {
  return str.split(';').map(function (stream) {
    return stream.split(',').map(function (format) {
      var scid, paused = false;

      if (format[0] !== '~') {
        scid = toIntIfInt(format);
      } else {
        scid = toIntIfInt(format.substring(1, format.length));
        paused = true;
      }

      return {
        scid: scid,
        paused: paused
      };
    });
  });
};


/***/ }),

/***/ "./node_modules/sdp-transform/lib/writer.js":
/*!**************************************************!*\
  !*** ./node_modules/sdp-transform/lib/writer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var grammar = __webpack_require__(/*! ./grammar */ "./node_modules/sdp-transform/lib/grammar.js");

// customized util.format - discards excess arguments and can void middle ones
var formatRegExp = /%[sdv%]/g;
var format = function (formatStr) {
  var i = 1;
  var args = arguments;
  var len = args.length;
  return formatStr.replace(formatRegExp, function (x) {
    if (i >= len) {
      return x; // missing argument
    }
    var arg = args[i];
    i += 1;
    switch (x) {
    case '%%':
      return '%';
    case '%s':
      return String(arg);
    case '%d':
      return Number(arg);
    case '%v':
      return '';
    }
  });
  // NB: we discard excess arguments - they are typically undefined from makeLine
};

var makeLine = function (type, obj, location) {
  var str = obj.format instanceof Function ?
    (obj.format(obj.push ? location : location[obj.name])) :
    obj.format;

  var args = [type + '=' + str];
  if (obj.names) {
    for (var i = 0; i < obj.names.length; i += 1) {
      var n = obj.names[i];
      if (obj.name) {
        args.push(location[obj.name][n]);
      }
      else { // for mLine and push attributes
        args.push(location[obj.names[i]]);
      }
    }
  }
  else {
    args.push(location[obj.name]);
  }
  return format.apply(null, args);
};

// RFC specified order
// TODO: extend this with all the rest
var defaultOuterOrder = [
  'v', 'o', 's', 'i',
  'u', 'e', 'p', 'c',
  'b', 't', 'r', 'z', 'a'
];
var defaultInnerOrder = ['i', 'c', 'b', 'a'];


module.exports = function (session, opts) {
  opts = opts || {};
  // ensure certain properties exist
  if (session.version == null) {
    session.version = 0; // 'v=0' must be there (only defined version atm)
  }
  if (session.name == null) {
    session.name = ' '; // 's= ' must be there if no meaningful name set
  }
  session.media.forEach(function (mLine) {
    if (mLine.payloads == null) {
      mLine.payloads = '';
    }
  });

  var outerOrder = opts.outerOrder || defaultOuterOrder;
  var innerOrder = opts.innerOrder || defaultInnerOrder;
  var sdp = [];

  // loop through outerOrder for matching properties on session
  outerOrder.forEach(function (type) {
    grammar[type].forEach(function (obj) {
      if (obj.name in session && session[obj.name] != null) {
        sdp.push(makeLine(type, obj, session));
      }
      else if (obj.push in session && session[obj.push] != null) {
        session[obj.push].forEach(function (el) {
          sdp.push(makeLine(type, obj, el));
        });
      }
    });
  });

  // then for each media line, follow the innerOrder
  session.media.forEach(function (mLine) {
    sdp.push(makeLine('m', grammar.m[0], mLine));

    innerOrder.forEach(function (type) {
      grammar[type].forEach(function (obj) {
        if (obj.name in mLine && mLine[obj.name] != null) {
          sdp.push(makeLine(type, obj, mLine));
        }
        else if (obj.push in mLine && mLine[obj.push] != null) {
          mLine[obj.push].forEach(function (el) {
            sdp.push(makeLine(type, obj, el));
          });
        }
      });
    });
  });

  return sdp.join('\r\n') + '\r\n';
};


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js":
/*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/bytesToUuid.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function bytesToUuid(buf, offset_) {
  var offset = offset_ || 0; // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

  return (byteToHex[buf[offset + 0]] + byteToHex[buf[offset + 1]] + byteToHex[buf[offset + 2]] + byteToHex[buf[offset + 3]] + '-' + byteToHex[buf[offset + 4]] + byteToHex[buf[offset + 5]] + '-' + byteToHex[buf[offset + 6]] + byteToHex[buf[offset + 7]] + '-' + byteToHex[buf[offset + 8]] + byteToHex[buf[offset + 9]] + '-' + byteToHex[buf[offset + 10]] + byteToHex[buf[offset + 11]] + byteToHex[buf[offset + 12]] + byteToHex[buf[offset + 13]] + byteToHex[buf[offset + 14]] + byteToHex[buf[offset + 15]]).toLowerCase();
}

/* harmony default export */ __webpack_exports__["default"] = (bytesToUuid);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************/
/*! exports provided: v1, v3, v4, v5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bytesToUuid.js */ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");


function uuidToBytes(uuid) {
  // Note: We assume we're being passed a valid uuid string
  var bytes = [];
  uuid.replace(/[a-fA-F0-9]{2}/g, function (hex) {
    bytes.push(parseInt(hex, 16));
  });
  return bytes;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["default"] = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = uuidToBytes(namespace);
    }

    if (!Array.isArray(value)) {
      throw TypeError('value must be an array of bytes');
    }

    if (!Array.isArray(namespace) || namespace.length !== 16) {
      throw TypeError('namespace must be uuid string or an Array of 16 byte values');
    } // Per 4.3


    var bytes = hashfunc(namespace.concat(value));
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "./node_modules/websocket/lib/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/websocket/lib/browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _globalThis;
try {
	_globalThis = __webpack_require__(/*! es5-ext/global */ "./node_modules/es5-ext/global.js");
} catch (error) {
} finally {
	if (!_globalThis && typeof window !== 'undefined') { _globalThis = window; }
	if (!_globalThis) { throw new Error('Could not determine global this'); }
}

var NativeWebSocket = _globalThis.WebSocket || _globalThis.MozWebSocket;
var websocket_version = __webpack_require__(/*! ./version */ "./node_modules/websocket/lib/version.js");


/**
 * Expose a W3C WebSocket class with just one or two arguments.
 */
function W3CWebSocket(uri, protocols) {
	var native_instance;

	if (protocols) {
		native_instance = new NativeWebSocket(uri, protocols);
	}
	else {
		native_instance = new NativeWebSocket(uri);
	}

	/**
	 * 'native_instance' is an instance of nativeWebSocket (the browser's WebSocket
	 * class). Since it is an Object it will be returned as it is when creating an
	 * instance of W3CWebSocket via 'new W3CWebSocket()'.
	 *
	 * ECMAScript 5: http://bclary.com/2004/11/07/#a-13.2.2
	 */
	return native_instance;
}
if (NativeWebSocket) {
	['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'].forEach(function(prop) {
		Object.defineProperty(W3CWebSocket, prop, {
			get: function() { return NativeWebSocket[prop]; }
		});
	});
}

/**
 * Module exports.
 */
module.exports = {
    'w3cwebsocket' : NativeWebSocket ? W3CWebSocket : null,
    'version'      : websocket_version
};


/***/ }),

/***/ "./node_modules/websocket/lib/version.js":
/*!***********************************************!*\
  !*** ./node_modules/websocket/lib/version.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../package.json */ "./node_modules/websocket/package.json").version;


/***/ }),

/***/ "./node_modules/websocket/package.json":
/*!*********************************************!*\
  !*** ./node_modules/websocket/package.json ***!
  \*********************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _optional, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, bugs, config, contributors, dependencies, description, devDependencies, directories, engines, homepage, keywords, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"websocket@1.0.31\",\"/home/kasparsj/Work/metaverse\"]],\"_from\":\"websocket@1.0.31\",\"_id\":\"websocket@1.0.31\",\"_inBundle\":false,\"_integrity\":\"sha512-VAouplvGKPiKFDTeCCO65vYHsyay8DqoBSlzIO3fayrfOgU94lQN5a1uWVnFrMLceTJw/+fQXR5PGbUVRaHshQ==\",\"_location\":\"/hubs-colyseus-ion-adapter/websocket\",\"_optional\":true,\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"websocket@1.0.31\",\"name\":\"websocket\",\"escapedName\":\"websocket\",\"rawSpec\":\"1.0.31\",\"saveSpec\":null,\"fetchSpec\":\"1.0.31\"},\"_requiredBy\":[\"/hubs-colyseus-ion-adapter/protoo-client\"],\"_resolved\":\"https://registry.npmjs.org/websocket/-/websocket-1.0.31.tgz\",\"_spec\":\"1.0.31\",\"_where\":\"/home/kasparsj/Work/metaverse\",\"author\":{\"name\":\"Brian McKelvey\",\"email\":\"theturtle32@gmail.com\",\"url\":\"https://github.com/theturtle32\"},\"browser\":\"lib/browser.js\",\"bugs\":{\"url\":\"https://github.com/theturtle32/WebSocket-Node/issues\"},\"config\":{\"verbose\":false},\"contributors\":[{\"name\":\"Iñaki Baz Castillo\",\"email\":\"ibc@aliax.net\",\"url\":\"http://dev.sipdoc.net\"}],\"dependencies\":{\"debug\":\"^2.2.0\",\"es5-ext\":\"^0.10.50\",\"nan\":\"^2.14.0\",\"typedarray-to-buffer\":\"^3.1.5\",\"yaeti\":\"^0.0.6\"},\"description\":\"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.\",\"devDependencies\":{\"buffer-equal\":\"^1.0.0\",\"faucet\":\"^0.0.1\",\"gulp\":\"^4.0.2\",\"gulp-jshint\":\"^2.0.4\",\"jshint\":\"^2.0.0\",\"jshint-stylish\":\"^2.2.1\",\"tape\":\"^4.9.1\"},\"directories\":{\"lib\":\"./lib\"},\"engines\":{\"node\":\">=0.10.0\"},\"homepage\":\"https://github.com/theturtle32/WebSocket-Node\",\"keywords\":[\"websocket\",\"websockets\",\"socket\",\"networking\",\"comet\",\"push\",\"RFC-6455\",\"realtime\",\"server\",\"client\"],\"license\":\"Apache-2.0\",\"main\":\"index\",\"name\":\"websocket\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/theturtle32/WebSocket-Node.git\"},\"scripts\":{\"gulp\":\"gulp\",\"install\":\"(node-gyp rebuild 2> builderror.log) || (exit 0)\",\"test\":\"faucet test/unit\"},\"version\":\"1.0.31\"}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColyseusIonAdapter; });
/* harmony import */ var colyseus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! colyseus.js */ "../colyseus/colyseus.js/lib/index.js");
/* harmony import */ var colyseus_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(colyseus_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ion_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ion-sdk-js */ "./node_modules/ion-sdk-js/lib/index.js");
/* harmony import */ var ion_sdk_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ion_sdk_js__WEBPACK_IMPORTED_MODULE_1__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* global NAF */




const IonState = {
    CLOSED: 0,
    OPEN: 1,
    JOINED: 2,
    FAILED: -1
};

class ColyseusIonAdapter {
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

    setRoom(roomId) {
        this.roomId = roomId;
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
            this.colyseus = new colyseus_js__WEBPACK_IMPORTED_MODULE_0__["Client"](this.colyseusUrl);
            this.joinRoom().then(resolve).catch(reject);
        });
        if (this.options.useIon) {
            colyseusConnection.then(() => {
                const config = {
                    url: this.ionUrl,
                    loglevel: "trace"
                };
                this.ion = new ion_sdk_js__WEBPACK_IMPORTED_MODULE_1__["Client"](config);
                this.ion.on("transport-open", this.onIonOpen.bind(this));
                this.ion.on("transport-closed", this.onIonClosed.bind(this));
                this.streams = {};
                this.pendingStreamRequests = {};
            });
        }
        return Promise.all([colyseusConnection, this.updateTimeOffset()]);
    }

    joinRoom() {
        NAF.log.write("Joining room", this.roomName, this.roomId);
        const options = {
            roomId: this.roomId
        };
        if (this.options.createRoom) {
            return this.colyseus.joinOrCreate(this.roomName, options).then(this.onJoin.bind(this)).catch(this.onJoinError.bind(this));
        } else {
            return this.colyseus.join(this.roomName, options).then(this.onJoin.bind(this)).catch(this.onJoinError.bind(this));
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
        this.connectSuccess(this.sessionId);
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
        const detail = data;
        document.body.dispatchEvent(new CustomEvent("room_data", { detail }));
    }

    onUserData(data) {
        this.userData = data;
        const detail = data;
        document.body.dispatchEvent(new CustomEvent("user_data", { detail }));
    }

    getAvatar(avatarId) {
        const avatars = this.roomData.avatars.entries;
        for (let i = 0; i < avatars.length; i++) {
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
        for (let i = 0; i < scenes.length; i++) {
            if (scenes[i].id === sceneId) {
                return scenes[i];
            }
        }
    }

    checkSameScene(presence) {
        return this.roomData && (this.roomData.scene.scene_id === presence.sceneId || this.roomData.scene.scene_id === this.roomData.scenes.entries[0].id && presence.sceneId === "lobby");
    }

    updateScene(sceneId) {
        if (sceneId === this.roomData.scene.scene_id) return;
        const scene = this.getScene(sceneId);
        if (scene) {
            Object.keys(scene).forEach(key => this.roomData.scene[key] = scene[key]);
            this.roomData.scene.model_url = scene.url;
            this.roomData.scene.scene_id = scene.id;
            this.roomData.scene.objects_url = scene.objects_url;
            document.body.dispatchEvent(new CustomEvent("change_scene"));
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
        document.body.dispatchEvent(new CustomEvent("chat", { detail }));
    }

    onData(sessionId, type, data, from) {
        if (this.frozen) {
            this.storeMessage(data);
        } else {
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
        player.onChange = changes => {
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
        const detail = { sessionId, profile, previous: prevProfile };
        document.body.dispatchEvent(new CustomEvent("profile_updated", { detail }));
    }

    onChangePresence(presence, prevPresence, sessionId) {
        if (sessionId === this.sessionId) {
            for (let sid in this.players) {
                if (sid === sessionId) continue;
                if (this.checkSameScene(this.players[sid].presence)) {
                    this.openListener(sid);
                } else {
                    this.closedListener(sid);
                }
            }
        } else {
            if (this.checkSameScene(presence)) {
                this.openListener(sessionId);
            } else {
                this.closedListener(sessionId);
            }
        }
        const detail = { sessionId, presence, previous: prevPresence };
        document.body.dispatchEvent(new CustomEvent("presence_updated", { detail }));
    }

    signIn(token) {
        this.room.send('sign_in', token);
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

    sendObjectSpawned(type) {}

    pin(networkId, gltfNode, fileId, fileAccessToken, promotionToken) {
        this.room.send('pin', { networkId, gltfNode, fileId });
    }

    unpin(networkId, fileId) {
        this.room.send('unpin', { networkId, fileId });
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

    joinIon() {
        var _this = this;

        return _asyncToGenerator(function* () {
            _this.ion.on("peer-join", _this.onPeerJoin.bind(_this));
            _this.ion.on("peer-leave", _this.onPeerLeave.bind(_this));
            _this.ion.on("stream-add", _this.onStreamAdd.bind(_this));
            _this.ion.on("stream-remove", _this.onStreamRemove.bind(_this));
            _this.ion.on("broadcast", _this.onBroadcast.bind(_this));
            // todo: should use a JWT returned by Colyseus
            yield _this.ion.join(_this.room.id, {
                // todo: fix
                // name: this.userData && this.userData.name || "Anonymous",
                // sessionId: this.room.sessionId
                name: _this.sessionId
            });
            _this.ionState = IonState.JOINED;
            if (_this.localStream) {
                _this.ion.publish(_this.localStream);
            }
        })();
    }

    onPeerJoin(uid, info) {
        NAF.log.write("Peer join ", uid, info);
    }

    onPeerLeave(uid) {
        NAF.log.write("Peer leave ", uid);
    }

    onStreamAdd(mid, info) {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            if (_this2.ion) {
                yield _this2.subscribe(mid, info);
            }
        })();
    }

    onStreamRemove(stream) {}

    onBroadcast(rid, mid, info) {
        NAF.log.write("Ion broadcast ", rid, mid, info);
    }

    subscribe(mid, info) {
        var _this3 = this;

        return _asyncToGenerator(function* () {
            const sessionId = info.name;
            const stream = yield _this3.ion.subscribe(mid);
            stream.info = info;
            _this3.setMediaStream(sessionId, stream);
        })();
    }

    unsubscribe(stream) {
        var _this4 = this;

        return _asyncToGenerator(function* () {
            const sessionId = stream.info.name;
            yield stream.unsubscribe();
            delete _this4.streams[sessionId];
        })();
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
            } catch (e) {
                NAF.log.write(`${sessionId} setMediaStream Audio Error`, e);
            }
            const videoStream = new MediaStream();
            try {
                stream.getVideoTracks().forEach(track => videoStream.addTrack(track));
            } catch (e) {
                NAF.log.write(`${sessionId} setMediaStream Video Error`, e);
            }
            this.streams[sessionId] = { audio: audioStream, video: videoStream };
            if (this.pendingStreamRequests[sessionId]) {
                this.pendingStreamRequests[sessionId].audio.resolve(audioStream);
                this.pendingStreamRequests[sessionId].video.resolve(videoStream);
                delete this.pendingStreamRequests[sessionId];
            }
        } else {
            delete this.streams[sessionId];
        }
        const detail = { stream, sessionId };
        document.body.dispatchEvent(new CustomEvent('set_media_stream', { detail }));
    }

    setLocalMediaStream(stream) {
        var _this5 = this;

        return _asyncToGenerator(function* () {
            if (_this5.localStream) {
                let tracks = _this5.localStream.getTracks();
                for (let i = 0, len = tracks.length; i < len; i++) {
                    yield tracks[i].stop();
                }
                yield _this5.localStream.unpublish();
            }
            if (stream) {
                if (!(stream instanceof ion_sdk_js__WEBPACK_IMPORTED_MODULE_1__["LocalStream"])) {
                    stream = new ion_sdk_js__WEBPACK_IMPORTED_MODULE_1__["LocalStream"](stream, _this5.options.mediaOptions);
                }
            }
            _this5.localStream = stream;
            _this5.setMediaStream(_this5.sessionId, _this5.localStream);
            if (_this5.localStream && _this5.ionState >= IonState.JOINED) {
                yield _this5.ion.publish(_this5.localStream);
            }
        })();
    }

    startLocalStream() {
        var _this6 = this;

        return _asyncToGenerator(function* () {
            yield _this6.setLocalMediaStream(null);
            yield _this6.setLocalMediaStream((yield ion_sdk_js__WEBPACK_IMPORTED_MODULE_1__["LocalStream"].getUserMedia(_this6.options.mediaOptions)));
        })();
    }

    enableMicrophone(enabled) {
        if (this.localStream) {
            if (enabled) {
                this.localStream.unmute("audio");
            } else {
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

        return data;
    }

    storeMessage(message) {
        if (message.dataType === "um") {
            // UpdateMulti
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
            if (isOutdatedMessage || isContemporaneousMessage && storedData.owner > data.owner) {
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

    updateTimeOffset() {
        var _this7 = this;

        return _asyncToGenerator(function* () {
            if (_this7.isDisconnected()) return;

            const clientSentTime = Date.now();

            const res = yield fetch(document.location.href, {
                method: "HEAD",
                cache: "no-cache"
            });

            const precision = 1000;
            const serverReceivedTime = new Date(res.headers.get("Date")).getTime() + precision / 2;
            const clientReceivedTime = Date.now();
            const serverTime = serverReceivedTime + (clientReceivedTime - clientSentTime) / 2;
            const timeOffset = serverTime - clientReceivedTime;

            _this7.serverTimeRequests++;

            if (_this7.serverTimeRequests <= 10) {
                _this7.timeOffsets.push(timeOffset);
            } else {
                _this7.timeOffsets[_this7.serverTimeRequests % 10] = timeOffset;
            }

            _this7.avgTimeOffset = _this7.timeOffsets.reduce(function (acc, offset) {
                return acc += offset;
            }, 0) / _this7.timeOffsets.length;

            if (_this7.serverTimeRequests > 10) {
                NAF.log.write(`new server time offset: ${_this7.avgTimeOffset}ms`);
                setTimeout(function () {
                    return _this7.updateTimeOffset();
                }, 5 * 60 * 1000); // Sync clock every 5 minutes.
            } else {
                _this7.updateTimeOffset();
            }
        })();
    }

    getServerTime() {
        return Date.now() + this.avgTimeOffset;
    }
}

NAF.adapters.register("colyseus-ion", ColyseusIonAdapter);

/***/ }),

/***/ 0:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzL2NvbHlzZXVzLmpzL2xpYi9BdXRoLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy9jb2x5c2V1cy5qcy9saWIvQ2xpZW50LmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy9jb2x5c2V1cy5qcy9saWIvQ29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMvY29seXNldXMuanMvbGliL1Byb3RvY29sLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy9jb2x5c2V1cy5qcy9saWIvUHVzaC5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMvY29seXNldXMuanMvbGliL1Jvb20uanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzL2NvbHlzZXVzLmpzL2xpYi9TdG9yYWdlLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy9jb2x5c2V1cy5qcy9saWIvZXJyb3JzL1NlcnZlckVycm9yLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy9jb2x5c2V1cy5qcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzL2NvbHlzZXVzLmpzL2xpYi9sZWdhY3kuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzL2NvbHlzZXVzLmpzL2xpYi9tc2dwYWNrLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy9jb2x5c2V1cy5qcy9saWIvbXNncGFjay9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzL2NvbHlzZXVzLmpzL2xpYi9tc2dwYWNrL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMvY29seXNldXMuanMvbGliL3NlcmlhbGl6ZXIvRm9zc2lsRGVsdGFTZXJpYWxpemVyLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy9jb2x5c2V1cy5qcy9saWIvc2VyaWFsaXplci9TY2hlbWFTZXJpYWxpemVyLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy9jb2x5c2V1cy5qcy9saWIvc2VyaWFsaXplci9TZXJpYWxpemVyLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy9jb2x5c2V1cy5qcy9ub2RlX21vZHVsZXMvQGNvbHlzZXVzL2h0dHAvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzL2NvbHlzZXVzLmpzL25vZGVfbW9kdWxlcy9AZ2FtZXN0ZGlvL3N0YXRlLWxpc3RlbmVyL2xpYi9TdGF0ZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMvY29seXNldXMuanMvbm9kZV9tb2R1bGVzL0BnYW1lc3RkaW8vc3RhdGUtbGlzdGVuZXIvbGliL2NvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzL2NvbHlzZXVzLmpzL25vZGVfbW9kdWxlcy9AZ2FtZXN0ZGlvL3N0YXRlLWxpc3RlbmVyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMvY29seXNldXMuanMvbm9kZV9tb2R1bGVzL0BnYW1lc3RkaW8vd2Vic29ja2V0L2xpYi9iYWNrb2ZmLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy9jb2x5c2V1cy5qcy9ub2RlX21vZHVsZXMvQGdhbWVzdGRpby93ZWJzb2NrZXQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy9jb2x5c2V1cy5qcy9ub2RlX21vZHVsZXMvZm9zc2lsLWRlbHRhL2Zvc3NpbC1kZWx0YS5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMvY29seXNldXMuanMvbm9kZV9tb2R1bGVzL25hbm9ldmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzL2NvbHlzZXVzLmpzL25vZGVfbW9kdWxlcy9zdHJvbmctZXZlbnRzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMvc2NoZW1hL2xpYi9DaGFuZ2VUcmVlLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy9zY2hlbWEvbGliL1JlZmxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzL3NjaGVtYS9saWIvU2NoZW1hLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy9zY2hlbWEvbGliL2Fubm90YXRpb25zLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy9zY2hlbWEvbGliL2VuY29kaW5nL2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMvc2NoZW1hL2xpYi9lbmNvZGluZy9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzL3NjaGVtYS9saWIvZXZlbnRzL0V2ZW50RW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMvc2NoZW1hL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMvc2NoZW1hL2xpYi9zcGVjLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy9zY2hlbWEvbGliL3R5cGVzL0FycmF5U2NoZW1hLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy9zY2hlbWEvbGliL3R5cGVzL01hcFNjaGVtYS5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMvc2NoZW1hL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pb24tc2RrLWpzL2xpYi9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lvbi1zZGstanMvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pb24tc2RrLWpzL2xpYi9zdHJlYW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lvbi1zZGstanMvbGliL3RyYW5zcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9nbGV2ZWwvbGliL2xvZ2xldmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm90b28tY2xpZW50L2xpYi9FbmhhbmNlZEV2ZW50RW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvdG9vLWNsaWVudC9saWIvTG9nZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm90b28tY2xpZW50L2xpYi9NZXNzYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm90b28tY2xpZW50L2xpYi9QZWVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm90b28tY2xpZW50L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvdG9vLWNsaWVudC9saWIvdHJhbnNwb3J0cy9XZWJTb2NrZXRUcmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3Rvby1jbGllbnQvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZXRyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmV0cnkvbGliL3JldHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZXRyeS9saWIvcmV0cnlfb3BlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZHAtdHJhbnNmb3JtL2xpYi9ncmFtbWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZHAtdHJhbnNmb3JtL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2RwLXRyYW5zZm9ybS9saWIvcGFyc2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZHAtdHJhbnNmb3JtL2xpYi93cml0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbWQ1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc2hhMS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92MzUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93ZWJzb2NrZXQvbGliL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYnNvY2tldC9saWIvdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dzIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJJb25TdGF0ZSIsIkNMT1NFRCIsIk9QRU4iLCJKT0lORUQiLCJGQUlMRUQiLCJDb2x5c2V1c0lvbkFkYXB0ZXIiLCJjb25zdHJ1Y3RvciIsImFwcCIsInJvb21OYW1lIiwicm9vbSIsInJvb21EYXRhIiwidXNlckRhdGEiLCJwbGF5ZXJzIiwic3RyZWFtcyIsInBlbmRpbmdTdHJlYW1SZXF1ZXN0cyIsInRpbWVPZmZzZXRzIiwic2VydmVyVGltZVJlcXVlc3RzIiwiYXZnVGltZU9mZnNldCIsImJsb2NrZWRDbGllbnRzIiwiTWFwIiwiZnJvemVuVXBkYXRlcyIsIm9wdGlvbnMiLCJjcmVhdGVSb29tIiwidXNlSW9uIiwic3RhcnRMb2NhbFN0cmVhbSIsIm1lZGlhT3B0aW9ucyIsImF1ZGlvIiwidmlkZW8iLCJzZWxlY3RlZEF1ZGlvRGV2aWNlIiwic2VsZWN0ZWRWaWRlb0RldmljZSIsInJlc29sdXRpb24iLCJiYW5kd2lkdGgiLCJjb2RlYyIsInNldFNlcnZlclVybCIsInNlcnZlclVybHMiLCJjb2x5c2V1c1VybCIsImlvblVybCIsInNldEFwcCIsImFwcE5hbWUiLCJzZXRSb29tIiwicm9vbUlkIiwic2V0T3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsInNldFdlYlJ0Y09wdGlvbnMiLCJzZXRTZXJ2ZXJDb25uZWN0TGlzdGVuZXJzIiwic3VjY2Vzc0xpc3RlbmVyIiwiZmFpbHVyZUxpc3RlbmVyIiwiY29ubmVjdFN1Y2Nlc3MiLCJjb25uZWN0RmFpbHVyZSIsInNldFJvb21PY2N1cGFudExpc3RlbmVyIiwib2NjdXBhbnRMaXN0ZW5lciIsInNldERhdGFDaGFubmVsTGlzdGVuZXJzIiwib3Blbkxpc3RlbmVyIiwiY2xvc2VkTGlzdGVuZXIiLCJtZXNzYWdlTGlzdGVuZXIiLCJjb25uZWN0IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3QiLCJOQUYiLCJsb2ciLCJ3cml0ZSIsImNvbHlzZXVzQ29ubmVjdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY29seXNldXMiLCJDb2x5c2V1c0NsaWVudCIsImpvaW5Sb29tIiwidGhlbiIsImNhdGNoIiwiY29uZmlnIiwidXJsIiwibG9nbGV2ZWwiLCJpb24iLCJJb25DbGllbnQiLCJvbiIsIm9uSW9uT3BlbiIsImJpbmQiLCJvbklvbkNsb3NlZCIsImFsbCIsInVwZGF0ZVRpbWVPZmZzZXQiLCJqb2luT3JDcmVhdGUiLCJvbkpvaW4iLCJvbkpvaW5FcnJvciIsImpvaW4iLCJvbk1lc3NhZ2UiLCJvblJvb21EYXRhIiwib25Vc2VyRGF0YSIsIm9uTmFmIiwib25DaGF0Iiwib25TdGF0ZUNoYW5nZSIsIm9uY2UiLCJvbkluaXRpYWxTdGF0ZSIsInN0YXRlIiwic2Vzc2lvbklkIiwib25BZGQiLCJvbkFkZFBsYXllciIsIm9uUmVtb3ZlIiwib25SZW1vdmVQbGF5ZXIiLCJpb25TdGF0ZSIsImpvaW5Jb24iLCJlcnIiLCJkZXRhaWwiLCJyZWFzb24iLCJkb2N1bWVudCIsImJvZHkiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJwbGF5ZXIiLCJzY2VuZSIsInNjZW5lSWQiLCJzY2VuZV9pZCIsImRhdGEiLCJnZXRBdmF0YXIiLCJhdmF0YXJJZCIsImF2YXRhcnMiLCJlbnRyaWVzIiwiaSIsImxlbmd0aCIsImlkIiwiZ2V0QXZhdGFyU3JjIiwiYXZhdGFyIiwiZ2x0ZnMiLCJnZXRTY2VuZSIsInNjZW5lcyIsImNoZWNrU2FtZVNjZW5lIiwicHJlc2VuY2UiLCJ1cGRhdGVTY2VuZSIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwibW9kZWxfdXJsIiwib2JqZWN0c191cmwiLCJjYW5FbnRlclJvb20iLCJodWIiLCJyb29tRW50cnlTbG90Q291bnQiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhY2MiLCJ1c2luZ1Nsb3QiLCJlbnRlcmluZyIsIkRFRkFVTFRfUk9PTV9TSVpFIiwicm9vbV9zaXplIiwidW5kZWZpbmVkIiwib25EYXRhIiwidHlwZSIsIm1lc3NhZ2UiLCJmcm9tIiwiZnJvemVuIiwic3RvcmVNZXNzYWdlIiwic2VuZENoYXRNc2ciLCJzZW5kIiwib25DaGFuZ2UiLCJjaGFuZ2VzIiwiY2hhbmdlIiwiZmllbGQiLCJvbkNoYW5nZVByb2ZpbGUiLCJ2YWx1ZSIsInByZXZpb3VzVmFsdWUiLCJvbkNoYW5nZVByZXNlbmNlIiwicHJvZmlsZSIsImRpc3BsYXlOYW1lIiwid2luZG93IiwiQVBQIiwic3RvcmUiLCJ1cGRhdGUiLCJwcmV2UHJvZmlsZSIsInByZXZpb3VzIiwicHJldlByZXNlbmNlIiwic2lkIiwic2lnbkluIiwidG9rZW4iLCJzZW5kRW50ZXJpbmciLCJzZW5kRW50ZXJpbmdDYW5jZWxsZWQiLCJzZW5kRW50ZXJlZCIsInNlbmRPYmplY3RTcGF3bmVkIiwicGluIiwibmV0d29ya0lkIiwiZ2x0Zk5vZGUiLCJmaWxlSWQiLCJmaWxlQWNjZXNzVG9rZW4iLCJwcm9tb3Rpb25Ub2tlbiIsInVucGluIiwib25QZWVySm9pbiIsIm9uUGVlckxlYXZlIiwib25TdHJlYW1BZGQiLCJvblN0cmVhbVJlbW92ZSIsIm9uQnJvYWRjYXN0IiwibmFtZSIsImxvY2FsU3RyZWFtIiwicHVibGlzaCIsInVpZCIsImluZm8iLCJtaWQiLCJzdWJzY3JpYmUiLCJzdHJlYW0iLCJyaWQiLCJzZXRNZWRpYVN0cmVhbSIsInVuc3Vic2NyaWJlIiwic2hvdWxkU3RhcnRDb25uZWN0aW9uVG8iLCJjbGllbnQiLCJnZXRDb25uZWN0U3RhdHVzIiwiY29ubmVjdGVkIiwiYWRhcHRlcnMiLCJJU19DT05ORUNURUQiLCJOT1RfQ09OTkVDVEVEIiwic2VuZERhdGEiLCJ0byIsInNlbmREYXRhR3VhcmFudGVlZCIsIndhcm4iLCJicm9hZGNhc3REYXRhIiwiYnJvYWRjYXN0RGF0YUd1YXJhbnRlZWQiLCJnZXRNZWRpYVN0cmVhbSIsImF1ZGlvUHJvbWlzZSIsInZpZGVvUHJvbWlzZSIsInByb21pc2UiLCJlIiwiY29uc29sZSIsImF1ZGlvU3RyZWFtIiwiTWVkaWFTdHJlYW0iLCJnZXRBdWRpb1RyYWNrcyIsInRyYWNrIiwiYWRkVHJhY2siLCJ2aWRlb1N0cmVhbSIsImdldFZpZGVvVHJhY2tzIiwic2V0TG9jYWxNZWRpYVN0cmVhbSIsInRyYWNrcyIsImdldFRyYWNrcyIsImxlbiIsInN0b3AiLCJ1bnB1Ymxpc2giLCJMb2NhbFN0cmVhbSIsImdldFVzZXJNZWRpYSIsImVuYWJsZU1pY3JvcGhvbmUiLCJlbmFibGVkIiwidW5tdXRlIiwibXV0ZSIsInRvZ2dsZUZyZWV6ZSIsInVuZnJlZXplIiwiZnJlZXplIiwiZmx1c2hQZW5kaW5nVXBkYXRlcyIsImdldFBlbmRpbmdEYXRhIiwiZGF0YVR5cGUiLCJzb3VyY2UiLCJjbGVhciIsImRhdGFGb3JVcGRhdGVNdWx0aU1lc3NhZ2UiLCJvd25lciIsImhhcyIsImwiLCJkIiwic3RvcmVTaW5nbGVNZXNzYWdlIiwiaW5kZXgiLCJzZXQiLCJzdG9yZWRNZXNzYWdlIiwiZ2V0Iiwic3RvcmVkRGF0YSIsImlzT3V0ZGF0ZWRNZXNzYWdlIiwibGFzdE93bmVyVGltZSIsImlzQ29udGVtcG9yYW5lb3VzTWVzc2FnZSIsImNyZWF0ZWRXaGlsZUZyb3plbiIsImlzRmlyc3RTeW5jIiwiZGVsZXRlIiwiY29tcG9uZW50cyIsImJsb2NrIiwia2luZCIsIndob20iLCJjbGllbnRJZCIsInVuYmxvY2siLCJkaXNjb25uZWN0IiwibGVhdmUiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJpc0Rpc2Nvbm5lY3RlZCIsInNldFJlY29ubmVjdGlvbkxpc3RlbmVycyIsInJlY29ubmVjdGluZ0xpc3RlbmVyIiwicmVjb25uZWN0ZWRMaXN0ZW5lciIsInJlY29ubmVjdGlvbkVycm9yTGlzdGVuZXIiLCJvblJlY29ubmVjdGluZyIsIm9uUmVjb25uZWN0ZWQiLCJvblJlY29ubmVjdGlvbkVycm9yIiwiY2xpZW50U2VudFRpbWUiLCJEYXRlIiwibm93IiwicmVzIiwiZmV0Y2giLCJocmVmIiwibWV0aG9kIiwiY2FjaGUiLCJwcmVjaXNpb24iLCJzZXJ2ZXJSZWNlaXZlZFRpbWUiLCJoZWFkZXJzIiwiZ2V0VGltZSIsImNsaWVudFJlY2VpdmVkVGltZSIsInNlcnZlclRpbWUiLCJ0aW1lT2Zmc2V0IiwicHVzaCIsIm9mZnNldCIsInNldFRpbWVvdXQiLCJnZXRTZXJ2ZXJUaW1lIiwicmVnaXN0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QUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxTQUFTO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoU2E7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0RBQXNEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1EQUFtRDtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFlBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQXNEO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7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Q0EsNEJBQTRCLE9BQU8sYUFBYTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLCtCQUErQixnQkFBZ0I7QUFDL0M7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixhQUFhO0FBQzNDLG1DQUFtQyxtQkFBbUI7QUFDdEQsK0JBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsMkNBQTJDLEVBQUU7QUFDM0YsMkNBQTJDLGNBQWMsRUFBRTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxNQUFNO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLE9BQU87QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDbFBhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJB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QUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdB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QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUMzUUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLE9BQU87QUFDbEIsWUFBWSxNQUFNO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDLE9BQU8sZUFBZSxHQUFHLG1CQUFPLENBQUMsK0NBQVE7QUFDekMsZUFBZSxtQkFBTyxDQUFDLDREQUFVOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3BDQSxjQUFjLG1CQUFPLENBQUMsa0RBQU87O0FBRTdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixTQUFTLEdBQUcsT0FBTztBQUM3Qyx5QkFBeUIsU0FBUyxRQUFRLE9BQU87QUFDakQsMEJBQTBCLFNBQVMsU0FBUyxPQUFPO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVM7QUFDbEMsMEJBQTBCLFNBQVM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzVDQSxlQUFlLG1CQUFPLENBQUMsNERBQVU7QUFDakMsT0FBTyx1QkFBdUIsR0FBRyxtQkFBTyxDQUFDLDBEQUFTOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDaEtBLGVBQWUsbUJBQU8sQ0FBQyw0REFBVTtBQUNqQyw2QkFBNkIsbUJBQU8sQ0FBQyx3RkFBd0I7QUFDN0QsZ0JBQWdCLG1CQUFPLENBQUMsOERBQVc7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7QUFDQSxZQUFZLHVCQUF1QjtBQUNuQztBQUNBO0FBQ0EsWUFBWSw0REFBNEQ7QUFDeEUsWUFBWSxrQ0FBa0M7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN6VkEsT0FBTyxVQUFVLEdBQUcsbUJBQU8sQ0FBQyxrRUFBaUI7QUFDN0MsYUFBYSxtQkFBTyxDQUFDLHdEQUFRO0FBQzdCLDJCQUEyQixtQkFBTyxDQUFDLDBHQUFpQzs7QUFFcEU7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQSxxQkFBcUIsbUJBQU8sQ0FBQywwREFBVztBQUN4QyxjQUFjLG1CQUFPLENBQUMsNENBQU87QUFDN0IsZUFBZSxtQkFBTyxDQUFDLDZEQUFXO0FBQ2xDLDZCQUE2QixtQkFBTyxDQUFDLHlGQUF5QjtBQUM5RCxnQkFBZ0IsbUJBQU8sQ0FBQywrREFBWTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNuTkE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkEsaUJBQWlCLG1CQUFPLENBQUMsc0RBQWEsRTs7Ozs7Ozs7Ozs7QUNBdEMscUJBQXFCLG1CQUFPLENBQUMsc0VB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTBELENBQTFELElBQStELE9BQUsxUixXQUFMLENBQWlCeUcsTUFBckc7O0FBRUEsZ0JBQUksT0FBS3hHLGtCQUFMLEdBQTBCLEVBQTlCLEVBQWtDO0FBQzlCNEMsb0JBQUlDLEdBQUosQ0FBUUMsS0FBUixDQUFlLDJCQUEwQixPQUFLN0MsYUFBYyxJQUE1RDtBQUNBeVIsMkJBQVc7QUFBQSwyQkFBTSxPQUFLeE4sZ0JBQUwsRUFBTjtBQUFBLGlCQUFYLEVBQTBDLElBQUksRUFBSixHQUFTLElBQW5ELEVBRjhCLENBRTRCO0FBQzdELGFBSEQsTUFHTztBQUNILHVCQUFLQSxnQkFBTDtBQUNIO0FBL0JvQjtBQWdDeEI7O0FBRUR5TixvQkFBZ0I7QUFDWixlQUFPakIsS0FBS0MsR0FBTCxLQUFhLEtBQUsxUSxhQUF6QjtBQUNIO0FBN3VCbUM7O0FBZ3ZCeEMyQyxJQUFJaUosUUFBSixDQUFhK0YsUUFBYixDQUFzQixjQUF0QixFQUFzQ3ZTLGtCQUF0QyxFOzs7Ozs7Ozs7OztBQzV2QkEsZSIsImZpbGUiOiJodWJzLWNvbHlzZXVzLWlvbi1hZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BdXRoID0gZXhwb3J0cy5QbGF0Zm9ybSA9IHZvaWQgMDtcbnZhciBodHRwID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJAY29seXNldXMvaHR0cFwiKSk7XG52YXIgU3RvcmFnZV8xID0gcmVxdWlyZShcIi4vU3RvcmFnZVwiKTtcbnZhciBUT0tFTl9TVE9SQUdFID0gXCJjb2x5c2V1cy1hdXRoLXRva2VuXCI7XG52YXIgUGxhdGZvcm07XG4oZnVuY3Rpb24gKFBsYXRmb3JtKSB7XG4gICAgUGxhdGZvcm1bXCJpb3NcIl0gPSBcImlvc1wiO1xuICAgIFBsYXRmb3JtW1wiYW5kcm9pZFwiXSA9IFwiYW5kcm9pZFwiO1xufSkoUGxhdGZvcm0gPSBleHBvcnRzLlBsYXRmb3JtIHx8IChleHBvcnRzLlBsYXRmb3JtID0ge30pKTtcbnZhciBBdXRoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEF1dGgoZW5kcG9pbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZGlzcGxheU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuYXZhdGFyVXJsID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmlzQW5vbnltb3VzID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVtYWlsID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmxhbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudGltZXpvbmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZGV2aWNlcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5mYWNlYm9va0lkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnR3aXR0ZXJJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5nb29nbGVJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5nYW1lQ2VudGVySWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc3RlYW1JZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5mcmllbmRJZHMgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuYmxvY2tlZFVzZXJJZHMgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY3JlYXRlZEF0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnVwZGF0ZWRBdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gYXV0aCB0b2tlblxuICAgICAgICB0aGlzLnRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVuZHBvaW50ID0gZW5kcG9pbnQucmVwbGFjZShcIndzXCIsIFwiaHR0cFwiKTtcbiAgICAgICAgU3RvcmFnZV8xLmdldEl0ZW0oVE9LRU5fU1RPUkFHRSwgZnVuY3Rpb24gKHRva2VuKSB7IHJldHVybiBfdGhpcy50b2tlbiA9IHRva2VuOyB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEF1dGgucHJvdG90eXBlLCBcImhhc1Rva2VuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gISF0aGlzLnRva2VuO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQXV0aC5wcm90b3R5cGUubG9naW4gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcXVlcnlQYXJhbXMsIGRhdGEsIGF0dHI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy50b2tlbiA9IHRoaXMudG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJlcXVlc3QoJ3Bvc3QnLCAnL2F1dGgnLCBxdWVyeVBhcmFtcyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0ICYgY2FjaGUgdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gPSBkYXRhLnRva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmFnZV8xLnNldEl0ZW0oVE9LRU5fU1RPUkFHRSwgdGhpcy50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGF0dHIgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbYXR0cl0gPSBkYXRhW2F0dHJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJQaW5nU2VydmljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEF1dGgucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5yZXF1ZXN0KCdwdXQnLCAnL2F1dGgnLCB7fSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiB0aGlzLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhclVybDogdGhpcy5hdmF0YXJVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZzogdGhpcy5sYW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWV6b25lOiB0aGlzLnRpbWV6b25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXV0aC5wcm90b3R5cGUuZ2V0RnJpZW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJlcXVlc3QoJ2dldCcsICcvZnJpZW5kcy9hbGwnKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIChfYS5zZW50KCkpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBdXRoLnByb3RvdHlwZS5nZXRPbmxpbmVGcmllbmRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVxdWVzdCgnZ2V0JywgJy9mcmllbmRzL29ubGluZScpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgKF9hLnNlbnQoKSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEF1dGgucHJvdG90eXBlLmdldEZyaWVuZFJlcXVlc3RzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVxdWVzdCgnZ2V0JywgJy9mcmllbmRzL3JlcXVlc3RzJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCAoX2Euc2VudCgpKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXV0aC5wcm90b3R5cGUuc2VuZEZyaWVuZFJlcXVlc3QgPSBmdW5jdGlvbiAoZnJpZW5kSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJlcXVlc3QoJ3Bvc3QnLCAnL2ZyaWVuZHMvcmVxdWVzdHMnLCB7IHVzZXJJZDogZnJpZW5kSWQgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCAoX2Euc2VudCgpKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXV0aC5wcm90b3R5cGUuYWNjZXB0RnJpZW5kUmVxdWVzdCA9IGZ1bmN0aW9uIChmcmllbmRJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVxdWVzdCgncHV0JywgJy9mcmllbmRzL3JlcXVlc3RzJywgeyB1c2VySWQ6IGZyaWVuZElkIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgKF9hLnNlbnQoKSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEF1dGgucHJvdG90eXBlLmRlY2xpbmVGcmllbmRSZXF1ZXN0ID0gZnVuY3Rpb24gKGZyaWVuZElkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5yZXF1ZXN0KCdkZWwnLCAnL2ZyaWVuZHMvcmVxdWVzdHMnLCB7IHVzZXJJZDogZnJpZW5kSWQgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCAoX2Euc2VudCgpKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXV0aC5wcm90b3R5cGUuYmxvY2tVc2VyID0gZnVuY3Rpb24gKGZyaWVuZElkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5yZXF1ZXN0KCdwb3N0JywgJy9mcmllbmRzL2Jsb2NrJywgeyB1c2VySWQ6IGZyaWVuZElkIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgKF9hLnNlbnQoKSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEF1dGgucHJvdG90eXBlLnVuYmxvY2tVc2VyID0gZnVuY3Rpb24gKGZyaWVuZElkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5yZXF1ZXN0KCdwdXQnLCAnL2ZyaWVuZHMvYmxvY2snLCB7IHVzZXJJZDogZnJpZW5kSWQgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCAoX2Euc2VudCgpKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXV0aC5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIChtZXRob2QsIHNlZ21lbnRzLCBxdWVyeSwgYm9keSwgaGVhZGVycykge1xuICAgICAgICBpZiAocXVlcnkgPT09IHZvaWQgMCkgeyBxdWVyeSA9IHt9OyB9XG4gICAgICAgIGlmIChoZWFkZXJzID09PSB2b2lkIDApIHsgaGVhZGVycyA9IHt9OyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBxdWVyeVBhcmFtcywgbmFtZV8xLCBxdWVyeVN0cmluZywgb3B0cztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbJ0FjY2VwdCddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyB0aGlzLnRva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobmFtZV8xIGluIHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMucHVzaChuYW1lXzEgKyBcIj1cIiArIHF1ZXJ5W25hbWVfMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlTdHJpbmcgPSAocXVlcnlQYXJhbXMubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiP1wiICsgcXVlcnlQYXJhbXMuam9pbihcIiZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cyA9IHsgaGVhZGVyczogaGVhZGVycyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzLmJvZHkgPSBib2R5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaHR0cFttZXRob2RdKFwiXCIgKyB0aGlzLmVuZHBvaW50ICsgc2VnbWVudHMgKyBxdWVyeVN0cmluZywgb3B0cyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCAoX2Euc2VudCgpKS5kYXRhXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBdXRoLnByb3RvdHlwZS5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudG9rZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIFN0b3JhZ2VfMS5yZW1vdmVJdGVtKFRPS0VOX1NUT1JBR0UpO1xuICAgICAgICB0aGlzLnVucmVnaXN0ZXJQaW5nU2VydmljZSgpO1xuICAgIH07XG4gICAgQXV0aC5wcm90b3R5cGUucmVnaXN0ZXJQaW5nU2VydmljZSA9IGZ1bmN0aW9uICh0aW1lb3V0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aW1lb3V0ID09PSB2b2lkIDApIHsgdGltZW91dCA9IDE1MDAwOyB9XG4gICAgICAgIHRoaXMudW5yZWdpc3RlclBpbmdTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMua2VlcE9ubGluZUludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucmVxdWVzdCgnZ2V0JywgJy9hdXRoJyk7IH0sIHRpbWVvdXQpO1xuICAgIH07XG4gICAgQXV0aC5wcm90b3R5cGUudW5yZWdpc3RlclBpbmdTZXJ2aWNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMua2VlcE9ubGluZUludGVydmFsKTtcbiAgICB9O1xuICAgIHJldHVybiBBdXRoO1xufSgpKTtcbmV4cG9ydHMuQXV0aCA9IEF1dGg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ2xpZW50ID0gZXhwb3J0cy5NYXRjaE1ha2VFcnJvciA9IHZvaWQgMDtcbnZhciBodHRwXzEgPSByZXF1aXJlKFwiQGNvbHlzZXVzL2h0dHBcIik7XG52YXIgU2VydmVyRXJyb3JfMSA9IHJlcXVpcmUoXCIuL2Vycm9ycy9TZXJ2ZXJFcnJvclwiKTtcbnZhciBSb29tXzEgPSByZXF1aXJlKFwiLi9Sb29tXCIpO1xudmFyIEF1dGhfMSA9IHJlcXVpcmUoXCIuL0F1dGhcIik7XG52YXIgUHVzaF8xID0gcmVxdWlyZShcIi4vUHVzaFwiKTtcbnZhciBNYXRjaE1ha2VFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWF0Y2hNYWtlRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWF0Y2hNYWtlRXJyb3IobWVzc2FnZSwgY29kZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBNYXRjaE1ha2VFcnJvci5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBNYXRjaE1ha2VFcnJvcjtcbn0oRXJyb3IpKTtcbmV4cG9ydHMuTWF0Y2hNYWtlRXJyb3IgPSBNYXRjaE1ha2VFcnJvcjtcbnZhciBDbGllbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2xpZW50KGVuZHBvaW50KSB7XG4gICAgICAgIGlmIChlbmRwb2ludCA9PT0gdm9pZCAwKSB7IGVuZHBvaW50ID0gbG9jYXRpb24ucHJvdG9jb2wucmVwbGFjZShcImh0dHBcIiwgXCJ3c1wiKSArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3RuYW1lICsgKGxvY2F0aW9uLnBvcnQgJiYgXCI6XCIgKyBsb2NhdGlvbi5wb3J0KTsgfVxuICAgICAgICB0aGlzLmVuZHBvaW50ID0gZW5kcG9pbnQ7XG4gICAgICAgIHRoaXMuYXV0aCA9IG5ldyBBdXRoXzEuQXV0aCh0aGlzLmVuZHBvaW50KTtcbiAgICAgICAgdGhpcy5wdXNoID0gbmV3IFB1c2hfMS5QdXNoKHRoaXMuZW5kcG9pbnQpO1xuICAgIH1cbiAgICBDbGllbnQucHJvdG90eXBlLmpvaW5PckNyZWF0ZSA9IGZ1bmN0aW9uIChyb29tTmFtZSwgb3B0aW9ucywgcm9vdFNjaGVtYSkge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY3JlYXRlTWF0Y2hNYWtlUmVxdWVzdCgnam9pbk9yQ3JlYXRlJywgcm9vbU5hbWUsIG9wdGlvbnMsIHJvb3RTY2hlbWEpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDbGllbnQucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChyb29tTmFtZSwgb3B0aW9ucywgcm9vdFNjaGVtYSkge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY3JlYXRlTWF0Y2hNYWtlUmVxdWVzdCgnY3JlYXRlJywgcm9vbU5hbWUsIG9wdGlvbnMsIHJvb3RTY2hlbWEpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDbGllbnQucHJvdG90eXBlLmpvaW4gPSBmdW5jdGlvbiAocm9vbU5hbWUsIG9wdGlvbnMsIHJvb3RTY2hlbWEpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNyZWF0ZU1hdGNoTWFrZVJlcXVlc3QoJ2pvaW4nLCByb29tTmFtZSwgb3B0aW9ucywgcm9vdFNjaGVtYSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENsaWVudC5wcm90b3R5cGUuam9pbkJ5SWQgPSBmdW5jdGlvbiAocm9vbUlkLCBvcHRpb25zLCByb290U2NoZW1hKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jcmVhdGVNYXRjaE1ha2VSZXF1ZXN0KCdqb2luQnlJZCcsIHJvb21JZCwgb3B0aW9ucywgcm9vdFNjaGVtYSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENsaWVudC5wcm90b3R5cGUucmVjb25uZWN0ID0gZnVuY3Rpb24gKHJvb21JZCwgc2Vzc2lvbklkLCByb290U2NoZW1hKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jcmVhdGVNYXRjaE1ha2VSZXF1ZXN0KCdqb2luQnlJZCcsIHJvb21JZCwgeyBzZXNzaW9uSWQ6IHNlc3Npb25JZCB9LCByb290U2NoZW1hKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ2xpZW50LnByb3RvdHlwZS5nZXRBdmFpbGFibGVSb29tcyA9IGZ1bmN0aW9uIChyb29tTmFtZSkge1xuICAgICAgICBpZiAocm9vbU5hbWUgPT09IHZvaWQgMCkgeyByb29tTmFtZSA9IFwiXCI7IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVybDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHRoaXMuZW5kcG9pbnQucmVwbGFjZShcIndzXCIsIFwiaHR0cFwiKSArIFwiL21hdGNobWFrZS9cIiArIHJvb21OYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaHR0cF8xLmdldCh1cmwsIHsgaGVhZGVyczogeyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCAoX2Euc2VudCgpKS5kYXRhXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDbGllbnQucHJvdG90eXBlLmNvbnN1bWVTZWF0UmVzZXJ2YXRpb24gPSBmdW5jdGlvbiAocmVzcG9uc2UsIHJvb3RTY2hlbWEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJvb207XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcm9vbSA9IHRoaXMuY3JlYXRlUm9vbShyZXNwb25zZS5yb29tLm5hbWUsIHJvb3RTY2hlbWEpO1xuICAgICAgICAgICAgICAgIHJvb20uaWQgPSByZXNwb25zZS5yb29tLnJvb21JZDtcbiAgICAgICAgICAgICAgICByb29tLnNlc3Npb25JZCA9IHJlc3BvbnNlLnNlc3Npb25JZDtcbiAgICAgICAgICAgICAgICByb29tLmNvbm5lY3QodGhpcy5idWlsZEVuZHBvaW50KHJlc3BvbnNlLnJvb20sIHsgc2Vzc2lvbklkOiByb29tLnNlc3Npb25JZCB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbkVycm9yID0gZnVuY3Rpb24gKGNvZGUsIG1lc3NhZ2UpIHsgcmV0dXJuIHJlamVjdChuZXcgU2VydmVyRXJyb3JfMS5TZXJ2ZXJFcnJvcihjb2RlLCBtZXNzYWdlKSk7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICByb29tLm9uRXJyb3Iub25jZShvbkVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb20ub25Kb2luLm9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb20ub25FcnJvci5yZW1vdmUob25FcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb29tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDbGllbnQucHJvdG90eXBlLmNyZWF0ZU1hdGNoTWFrZVJlcXVlc3QgPSBmdW5jdGlvbiAobWV0aG9kLCByb29tTmFtZSwgb3B0aW9ucywgcm9vdFNjaGVtYSkge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdXJsLCByZXNwb25zZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHRoaXMuZW5kcG9pbnQucmVwbGFjZShcIndzXCIsIFwiaHR0cFwiKSArIFwiL21hdGNobWFrZS9cIiArIG1ldGhvZCArIFwiL1wiICsgcm9vbU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdXRvbWF0aWNhbGx5IGZvcndhcmQgYXV0aCB0b2tlbiwgaWYgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0aC5oYXNUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudG9rZW4gPSB0aGlzLmF1dGgudG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBodHRwXzEucG9zdCh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gKF9hLnNlbnQoKSkuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBNYXRjaE1ha2VFcnJvcihyZXNwb25zZS5lcnJvciwgcmVzcG9uc2UuY29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5jb25zdW1lU2VhdFJlc2VydmF0aW9uKHJlc3BvbnNlLCByb290U2NoZW1hKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ2xpZW50LnByb3RvdHlwZS5jcmVhdGVSb29tID0gZnVuY3Rpb24gKHJvb21OYW1lLCByb290U2NoZW1hKSB7XG4gICAgICAgIHJldHVybiBuZXcgUm9vbV8xLlJvb20ocm9vbU5hbWUsIHJvb3RTY2hlbWEpO1xuICAgIH07XG4gICAgQ2xpZW50LnByb3RvdHlwZS5idWlsZEVuZHBvaW50ID0gZnVuY3Rpb24gKHJvb20sIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBuYW1lXzEgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmhhc093blByb3BlcnR5KG5hbWVfMSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmFtcy5wdXNoKG5hbWVfMSArIFwiPVwiICsgb3B0aW9uc1tuYW1lXzFdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lbmRwb2ludCArIFwiL1wiICsgcm9vbS5wcm9jZXNzSWQgKyBcIi9cIiArIHJvb20ucm9vbUlkICsgXCI/XCIgKyBwYXJhbXMuam9pbignJicpO1xuICAgIH07XG4gICAgcmV0dXJuIENsaWVudDtcbn0oKSk7XG5leHBvcnRzLkNsaWVudCA9IENsaWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbm5lY3Rpb24gPSB2b2lkIDA7XG52YXIgd2Vic29ja2V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBnYW1lc3RkaW8vd2Vic29ja2V0XCIpKTtcbnZhciBDb25uZWN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb25uZWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbm5lY3Rpb24odXJsLCBhdXRvQ29ubmVjdCkge1xuICAgICAgICBpZiAoYXV0b0Nvbm5lY3QgPT09IHZvaWQgMCkgeyBhdXRvQ29ubmVjdCA9IHRydWU7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdXJsLCB1bmRlZmluZWQsIHsgY29ubmVjdDogYXV0b0Nvbm5lY3QgfSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX2VucXVldWVkQ2FsbHMgPSBbXTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5vbk9wZW5DYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLm9uT3BlbkNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuYmluYXJ5VHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgIGlmICh0aGlzLl9lbnF1ZXVlZENhbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLl9lbnF1ZXVlZENhbGxzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBfYiA9IF9hW19pXSwgbWV0aG9kID0gX2JbMF0sIGFyZ3MgPSBfYlsxXTtcbiAgICAgICAgICAgICAgICB0aGlzW21ldGhvZF0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjbGVhciBlbnF1ZXVlZCBjYWxscy5cbiAgICAgICAgICAgIHRoaXMuX2VucXVldWVkQ2FsbHMgPSBbXTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29ubmVjdGlvbi5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLndzLnJlYWR5U3RhdGUgPT09IHdlYnNvY2tldF8xLmRlZmF1bHQuT1BFTikge1xuICAgICAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnNlbmQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5zZW5kLmNhbGwodGhpcywgKG5ldyBVaW50OEFycmF5KGRhdGEpKS5idWZmZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gV2ViU29ja2V0IG5vdCBjb25uZWN0ZWQuXG4gICAgICAgICAgICAvLyBFbnF1ZXVlIGRhdGEgdG8gYmUgc2VudCB3aGVuIHJlYWR5U3RhdGUgPT0gT1BFTlxuICAgICAgICAgICAgdGhpcy5fZW5xdWV1ZWRDYWxscy5wdXNoKFsnc2VuZCcsIFtkYXRhXV0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ29ubmVjdGlvbjtcbn0od2Vic29ja2V0XzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5Db25uZWN0aW9uID0gQ29ubmVjdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gVXNlIGNvZGVzIGJldHdlZW4gMH4xMjcgZm9yIGxlc3NlciB0aHJvdWdocHV0ICgxIGJ5dGUpXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnV0ZjhMZW5ndGggPSBleHBvcnRzLnV0ZjhSZWFkID0gZXhwb3J0cy5FcnJvckNvZGUgPSBleHBvcnRzLlByb3RvY29sID0gdm9pZCAwO1xudmFyIFByb3RvY29sO1xuKGZ1bmN0aW9uIChQcm90b2NvbCkge1xuICAgIC8vIFJvb20tcmVsYXRlZCAoMTB+MTkpXG4gICAgUHJvdG9jb2xbUHJvdG9jb2xbXCJIQU5EU0hBS0VcIl0gPSA5XSA9IFwiSEFORFNIQUtFXCI7XG4gICAgUHJvdG9jb2xbUHJvdG9jb2xbXCJKT0lOX1JPT01cIl0gPSAxMF0gPSBcIkpPSU5fUk9PTVwiO1xuICAgIFByb3RvY29sW1Byb3RvY29sW1wiRVJST1JcIl0gPSAxMV0gPSBcIkVSUk9SXCI7XG4gICAgUHJvdG9jb2xbUHJvdG9jb2xbXCJMRUFWRV9ST09NXCJdID0gMTJdID0gXCJMRUFWRV9ST09NXCI7XG4gICAgUHJvdG9jb2xbUHJvdG9jb2xbXCJST09NX0RBVEFcIl0gPSAxM10gPSBcIlJPT01fREFUQVwiO1xuICAgIFByb3RvY29sW1Byb3RvY29sW1wiUk9PTV9TVEFURVwiXSA9IDE0XSA9IFwiUk9PTV9TVEFURVwiO1xuICAgIFByb3RvY29sW1Byb3RvY29sW1wiUk9PTV9TVEFURV9QQVRDSFwiXSA9IDE1XSA9IFwiUk9PTV9TVEFURV9QQVRDSFwiO1xuICAgIFByb3RvY29sW1Byb3RvY29sW1wiUk9PTV9EQVRBX1NDSEVNQVwiXSA9IDE2XSA9IFwiUk9PTV9EQVRBX1NDSEVNQVwiO1xufSkoUHJvdG9jb2wgPSBleHBvcnRzLlByb3RvY29sIHx8IChleHBvcnRzLlByb3RvY29sID0ge30pKTtcbnZhciBFcnJvckNvZGU7XG4oZnVuY3Rpb24gKEVycm9yQ29kZSkge1xuICAgIEVycm9yQ29kZVtFcnJvckNvZGVbXCJNQVRDSE1BS0VfTk9fSEFORExFUlwiXSA9IDQyMTBdID0gXCJNQVRDSE1BS0VfTk9fSEFORExFUlwiO1xuICAgIEVycm9yQ29kZVtFcnJvckNvZGVbXCJNQVRDSE1BS0VfSU5WQUxJRF9DUklURVJJQVwiXSA9IDQyMTFdID0gXCJNQVRDSE1BS0VfSU5WQUxJRF9DUklURVJJQVwiO1xuICAgIEVycm9yQ29kZVtFcnJvckNvZGVbXCJNQVRDSE1BS0VfSU5WQUxJRF9ST09NX0lEXCJdID0gNDIxMl0gPSBcIk1BVENITUFLRV9JTlZBTElEX1JPT01fSURcIjtcbiAgICBFcnJvckNvZGVbRXJyb3JDb2RlW1wiTUFUQ0hNQUtFX1VOSEFORExFRFwiXSA9IDQyMTNdID0gXCJNQVRDSE1BS0VfVU5IQU5ETEVEXCI7XG4gICAgRXJyb3JDb2RlW0Vycm9yQ29kZVtcIk1BVENITUFLRV9FWFBJUkVEXCJdID0gNDIxNF0gPSBcIk1BVENITUFLRV9FWFBJUkVEXCI7XG4gICAgRXJyb3JDb2RlW0Vycm9yQ29kZVtcIkFVVEhfRkFJTEVEXCJdID0gNDIxNV0gPSBcIkFVVEhfRkFJTEVEXCI7XG4gICAgRXJyb3JDb2RlW0Vycm9yQ29kZVtcIkFQUExJQ0FUSU9OX0VSUk9SXCJdID0gNDIxNl0gPSBcIkFQUExJQ0FUSU9OX0VSUk9SXCI7XG59KShFcnJvckNvZGUgPSBleHBvcnRzLkVycm9yQ29kZSB8fCAoZXhwb3J0cy5FcnJvckNvZGUgPSB7fSkpO1xuZnVuY3Rpb24gdXRmOFJlYWQodmlldywgb2Zmc2V0KSB7XG4gICAgdmFyIGxlbmd0aCA9IHZpZXdbb2Zmc2V0KytdO1xuICAgIHZhciBzdHJpbmcgPSAnJywgY2hyID0gMDtcbiAgICBmb3IgKHZhciBpID0gb2Zmc2V0LCBlbmQgPSBvZmZzZXQgKyBsZW5ndGg7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICB2YXIgYnl0ZSA9IHZpZXdbaV07XG4gICAgICAgIGlmICgoYnl0ZSAmIDB4ODApID09PSAweDAwKSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoYnl0ZSAmIDB4ZTApID09PSAweGMwKSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGJ5dGUgJiAweDFmKSA8PCA2KSB8XG4gICAgICAgICAgICAgICAgKHZpZXdbKytpXSAmIDB4M2YpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoYnl0ZSAmIDB4ZjApID09PSAweGUwKSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGJ5dGUgJiAweDBmKSA8PCAxMikgfFxuICAgICAgICAgICAgICAgICgodmlld1srK2ldICYgMHgzZikgPDwgNikgfFxuICAgICAgICAgICAgICAgICgodmlld1srK2ldICYgMHgzZikgPDwgMCkpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChieXRlICYgMHhmOCkgPT09IDB4ZjApIHtcbiAgICAgICAgICAgIGNociA9ICgoYnl0ZSAmIDB4MDcpIDw8IDE4KSB8XG4gICAgICAgICAgICAgICAgKCh2aWV3WysraV0gJiAweDNmKSA8PCAxMikgfFxuICAgICAgICAgICAgICAgICgodmlld1srK2ldICYgMHgzZikgPDwgNikgfFxuICAgICAgICAgICAgICAgICgodmlld1srK2ldICYgMHgzZikgPDwgMCk7XG4gICAgICAgICAgICBpZiAoY2hyID49IDB4MDEwMDAwKSB7IC8vIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICAgICAgICAgICAgY2hyIC09IDB4MDEwMDAwO1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjaHIgPj4+IDEwKSArIDB4RDgwMCwgKGNociAmIDB4M0ZGKSArIDB4REMwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGJ5dGUgJyArIGJ5dGUudG9TdHJpbmcoMTYpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZztcbn1cbmV4cG9ydHMudXRmOFJlYWQgPSB1dGY4UmVhZDtcbi8vIEZhc3RlciBmb3Igc2hvcnQgc3RyaW5ncyB0aGFuIEJ1ZmZlci5ieXRlTGVuZ3RoXG5mdW5jdGlvbiB1dGY4TGVuZ3RoKHN0cikge1xuICAgIGlmIChzdHIgPT09IHZvaWQgMCkgeyBzdHIgPSAnJzsgfVxuICAgIHZhciBjID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8IDB4ODApIHtcbiAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgbGVuZ3RoICs9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA8IDB4ZDgwMCB8fCBjID49IDB4ZTAwMCkge1xuICAgICAgICAgICAgbGVuZ3RoICs9IDM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBsZW5ndGggKz0gNDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGVuZ3RoICsgMTtcbn1cbmV4cG9ydHMudXRmOExlbmd0aCA9IHV0ZjhMZW5ndGg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlB1c2ggPSB2b2lkIDA7XG52YXIgUHVzaCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQdXNoKGVuZHBvaW50KSB7XG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSBlbmRwb2ludC5yZXBsYWNlKFwid3NcIiwgXCJodHRwXCIpO1xuICAgIH1cbiAgICBQdXNoLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5yZWdpc3RlclNlcnZpY2VXb3JrZXIoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICA7XG4gICAgUHVzaC5wcm90b3R5cGUucmVnaXN0ZXJTZXJ2aWNlV29ya2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKHRoaXMuZW5kcG9pbnQgKyBcIi9wdXNoXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBQdXNoLnByb3RvdHlwZS5yZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBlcm1pc3Npb247XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHdpbmRvd1tcIk5vdGlmaWNhdGlvblwiXS5yZXF1ZXN0UGVybWlzc2lvbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlIG9mIHBlcm1pc3Npb24gY2FuIGJlICdncmFudGVkJywgJ2RlZmF1bHQnLCAnZGVuaWVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ3JhbnRlZDogdXNlciBoYXMgYWNjZXB0ZWQgdGhlIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQ6IHVzZXIgaGFzIGRpc21pc3NlZCB0aGUgbm90aWZpY2F0aW9uIHBlcm1pc3Npb24gcG9wdXAgYnkgY2xpY2tpbmcgb24geFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVuaWVkOiB1c2VyIGhhcyBkZW5pZWQgdGhlIHJlcXVlc3QuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGVybWlzc2lvbiAhPT0gXCJncmFudGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQZXJtaXNzaW9uIG5vdCBncmFudGVkIGZvciBOb3RpZmljYXRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUHVzaC5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIFNlcnZpY2UgV29ya2VyIHN1cHBvcnQhXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKFwiUHVzaE1hbmFnZXJcIiBpbiB3aW5kb3cpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBQdXNoIEFQSSBTdXBwb3J0IVwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFB1c2g7XG59KCkpO1xuZXhwb3J0cy5QdXNoID0gUHVzaDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUm9vbSA9IHZvaWQgMDtcbnZhciBtc2dwYWNrID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL21zZ3BhY2tcIikpO1xudmFyIHN0cm9uZ19ldmVudHNfMSA9IHJlcXVpcmUoXCJzdHJvbmctZXZlbnRzXCIpO1xudmFyIG5hbm9ldmVudHNfMSA9IHJlcXVpcmUoXCJuYW5vZXZlbnRzXCIpO1xudmFyIENvbm5lY3Rpb25fMSA9IHJlcXVpcmUoXCIuL0Nvbm5lY3Rpb25cIik7XG52YXIgU2VyaWFsaXplcl8xID0gcmVxdWlyZShcIi4vc2VyaWFsaXplci9TZXJpYWxpemVyXCIpO1xudmFyIFByb3RvY29sXzEgPSByZXF1aXJlKFwiLi9Qcm90b2NvbFwiKTtcbnZhciBlbmNvZGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIkBjb2x5c2V1cy9zY2hlbWEvbGliL2VuY29kaW5nL2VuY29kZVwiKSk7XG52YXIgZGVjb2RlID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJAY29seXNldXMvc2NoZW1hL2xpYi9lbmNvZGluZy9kZWNvZGVcIikpO1xudmFyIFJvb20gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUm9vbShuYW1lLCByb290U2NoZW1hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIFB1YmxpYyBzaWduYWxzXG4gICAgICAgIHRoaXMub25Kb2luID0gc3Ryb25nX2V2ZW50c18xLmNyZWF0ZVNpZ25hbCgpO1xuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UgPSBzdHJvbmdfZXZlbnRzXzEuY3JlYXRlU2lnbmFsKCk7XG4gICAgICAgIHRoaXMub25FcnJvciA9IHN0cm9uZ19ldmVudHNfMS5jcmVhdGVTaWduYWwoKTtcbiAgICAgICAgdGhpcy5vbkxlYXZlID0gc3Ryb25nX2V2ZW50c18xLmNyZWF0ZVNpZ25hbCgpO1xuICAgICAgICB0aGlzLmhhc0pvaW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uTWVzc2FnZUhhbmRsZXJzID0gbmFub2V2ZW50c18xLmNyZWF0ZU5hbm9FdmVudHMoKTtcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIGlmIChyb290U2NoZW1hKSB7XG4gICAgICAgICAgICB0aGlzLnNlcmlhbGl6ZXIgPSBuZXcgKFNlcmlhbGl6ZXJfMS5nZXRTZXJpYWxpemVyKFwic2NoZW1hXCIpKTtcbiAgICAgICAgICAgIHRoaXMucm9vdFNjaGVtYSA9IHJvb3RTY2hlbWE7XG4gICAgICAgICAgICB0aGlzLnNlcmlhbGl6ZXIuc3RhdGUgPSBuZXcgcm9vdFNjaGVtYSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGRlZmF1bHQgc2VyaWFsaXplci4gaXQgc2hvdWxkIGFycml2ZSBvbmx5IGFmdGVyIEpPSU5fUk9PTS5cbiAgICAgICAgICAgIHRoaXMuc2VyaWFsaXplciA9IG5ldyAoU2VyaWFsaXplcl8xLmdldFNlcmlhbGl6ZXIoXCJmb3NzaWwtZGVsdGFcIikpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25FcnJvcihmdW5jdGlvbiAoY29kZSwgbWVzc2FnZSkgeyByZXR1cm4gY29uc29sZS5lcnJvcihcImNvbHlzZXVzLmpzIC0gb25FcnJvciA9PiAoXCIgKyBjb2RlICsgXCIpIFwiICsgbWVzc2FnZSk7IH0pO1xuICAgICAgICB0aGlzLm9uTGVhdmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7IH0pO1xuICAgIH1cbiAgICBSb29tLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKGVuZHBvaW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uXzEuQ29ubmVjdGlvbihlbmRwb2ludCwgZmFsc2UpO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ucmVjb25uZWN0RW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ub25tZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2VDYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ub25jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoIV90aGlzLmhhc0pvaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSb29tIGNvbm5lY3Rpb24gd2FzIGNsb3NlZCB1bmV4cGVjdGVkbHkgKFwiICsgZS5jb2RlICsgXCIpOiBcIiArIGUucmVhc29uKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkVycm9yLmludm9rZShlLmNvZGUsIGUucmVhc29uKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5vbkxlYXZlLmludm9rZShlLmNvZGUpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSb29tLCBvbkVycm9yIChcIiArIGUuY29kZSArIFwiKTogXCIgKyBlLnJlYXNvbik7XG4gICAgICAgICAgICBfdGhpcy5vbkVycm9yLmludm9rZShlLmNvZGUsIGUucmVhc29uKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLm9wZW4oKTtcbiAgICB9O1xuICAgIFJvb20ucHJvdG90eXBlLmxlYXZlID0gZnVuY3Rpb24gKGNvbnNlbnRlZCkge1xuICAgICAgICBpZiAoY29uc2VudGVkID09PSB2b2lkIDApIHsgY29uc2VudGVkID0gdHJ1ZTsgfVxuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoY29uc2VudGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLnNlbmQoW1Byb3RvY29sXzEuUHJvdG9jb2wuTEVBVkVfUk9PTV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uTGVhdmUuaW52b2tlKDQwMDApOyAvLyBcImNvbnNlbnRlZFwiIGNvZGVcbiAgICAgICAgfVxuICAgIH07XG4gICAgUm9vbS5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uTWVzc2FnZUhhbmRsZXJzLm9uKHRoaXMuZ2V0TWVzc2FnZUhhbmRsZXJLZXkodHlwZSksIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIFJvb20ucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAodHlwZSwgbWVzc2FnZSkge1xuICAgICAgICB2YXIgaW5pdGlhbEJ5dGVzID0gW1Byb3RvY29sXzEuUHJvdG9jb2wuUk9PTV9EQVRBXTtcbiAgICAgICAgaWYgKHR5cGVvZiAodHlwZSkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGVuY29kZS5zdHJpbmcoaW5pdGlhbEJ5dGVzLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVuY29kZS5udW1iZXIoaW5pdGlhbEJ5dGVzLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXJyO1xuICAgICAgICBpZiAobWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgZW5jb2RlZCA9IG1zZ3BhY2suZW5jb2RlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgYXJyID0gbmV3IFVpbnQ4QXJyYXkoaW5pdGlhbEJ5dGVzLmxlbmd0aCArIGVuY29kZWQuYnl0ZUxlbmd0aCk7XG4gICAgICAgICAgICBhcnIuc2V0KG5ldyBVaW50OEFycmF5KGluaXRpYWxCeXRlcyksIDApO1xuICAgICAgICAgICAgYXJyLnNldChuZXcgVWludDhBcnJheShlbmNvZGVkKSwgaW5pdGlhbEJ5dGVzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhcnIgPSBuZXcgVWludDhBcnJheShpbml0aWFsQnl0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5zZW5kKGFyci5idWZmZXIpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJvb20ucHJvdG90eXBlLCBcInN0YXRlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVyLmdldFN0YXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyBUT0RPOiBkZXByZWNhdGUgLyBtb3ZlIHNvbWV3aGVyZSBlbHNlXG4gICAgLy8gdGhpcyBtZXRob2QgaXMgdXNlZnVsIG9ubHkgZm9yIEZvc3NpbERlbHRhU2VyaWFsaXplclxuICAgIFJvb20ucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uIChzZWdtZW50cywgY2FsbGJhY2ssIGltbWVkaWF0ZSkge1xuICAgICAgICBpZiAodGhpcy5zZXJpYWxpemVySWQgPT09IFwic2NoZW1hXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCInXCIgKyB0aGlzLnNlcmlhbGl6ZXJJZCArIFwiJyBzZXJpYWxpemVyIGRvZXNuJ3Qgc3VwcG9ydCAubGlzdGVuKCkgbWV0aG9kIGhlcmUuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLnNlcmlhbGl6ZXJJZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwicm9vbS5MaXN0ZW4oKSBzaG91bGQgYmUgY2FsbGVkIGFmdGVyIHJvb20ub25Kb2luIGhhcyBiZWVuIGNhbGxlZCAoREVQUkVDQVRJT04gV0FSTklORylcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplci5hcGkubGlzdGVuKHNlZ21lbnRzLCBjYWxsYmFjaywgaW1tZWRpYXRlKTtcbiAgICB9O1xuICAgIC8vIFRPRE86IGRlcHJlY2F0ZSAvIG1vdmUgc29tZXdoZXJlIGVsc2VcbiAgICAvLyB0aGlzIG1ldGhvZCBpcyB1c2VmdWwgb25seSBmb3IgRm9zc2lsRGVsdGFTZXJpYWxpemVyXG4gICAgUm9vbS5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplci5hcGkucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIH07XG4gICAgUm9vbS5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zZXJpYWxpemVyKSB7XG4gICAgICAgICAgICB0aGlzLnNlcmlhbGl6ZXIudGVhcmRvd24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uSm9pbi5jbGVhcigpO1xuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5vbkVycm9yLmNsZWFyKCk7XG4gICAgICAgIHRoaXMub25MZWF2ZS5jbGVhcigpO1xuICAgIH07XG4gICAgUm9vbS5wcm90b3R5cGUub25NZXNzYWdlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGJ5dGVzID0gQXJyYXkuZnJvbShuZXcgVWludDhBcnJheShldmVudC5kYXRhKSk7XG4gICAgICAgIHZhciBjb2RlID0gYnl0ZXNbMF07XG4gICAgICAgIGlmIChjb2RlID09PSBQcm90b2NvbF8xLlByb3RvY29sLkpPSU5fUk9PTSkge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IDE7XG4gICAgICAgICAgICB0aGlzLnNlcmlhbGl6ZXJJZCA9IFByb3RvY29sXzEudXRmOFJlYWQoYnl0ZXMsIG9mZnNldCk7XG4gICAgICAgICAgICBvZmZzZXQgKz0gUHJvdG9jb2xfMS51dGY4TGVuZ3RoKHRoaXMuc2VyaWFsaXplcklkKTtcbiAgICAgICAgICAgIC8vIGdldCBzZXJpYWxpemVyIGltcGxlbWVudGF0aW9uXG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplciA9IFNlcmlhbGl6ZXJfMS5nZXRTZXJpYWxpemVyKHRoaXMuc2VyaWFsaXplcklkKTtcbiAgICAgICAgICAgIGlmICghc2VyaWFsaXplcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1pc3Npbmcgc2VyaWFsaXplcjogXCIgKyB0aGlzLnNlcmlhbGl6ZXJJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgdGhpcyBjaGVja1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VyaWFsaXplcklkICE9PSBcImZvc3NpbC1kZWx0YVwiICYmICF0aGlzLnJvb3RTY2hlbWEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbGl6ZXIgPSBuZXcgc2VyaWFsaXplcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJ5dGVzLmxlbmd0aCA+IG9mZnNldCAmJiB0aGlzLnNlcmlhbGl6ZXIuaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxpemVyLmhhbmRzaGFrZShieXRlcywgeyBvZmZzZXQ6IDEgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhhc0pvaW5lZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uSm9pbi5pbnZva2UoKTtcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIHN1Y2Nlc3NmdWxsIEpPSU5fUk9PTVxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLnNlbmQoW1Byb3RvY29sXzEuUHJvdG9jb2wuSk9JTl9ST09NXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29kZSA9PT0gUHJvdG9jb2xfMS5Qcm90b2NvbC5FUlJPUikge1xuICAgICAgICAgICAgdmFyIGl0XzEgPSB7IG9mZnNldDogMSB9O1xuICAgICAgICAgICAgdmFyIGNvZGVfMSA9IGRlY29kZS5udW1iZXIoYnl0ZXMsIGl0XzEpO1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBkZWNvZGUuc3RyaW5nKGJ5dGVzLCBpdF8xKTtcbiAgICAgICAgICAgIHRoaXMub25FcnJvci5pbnZva2UoY29kZV8xLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2RlID09PSBQcm90b2NvbF8xLlByb3RvY29sLkxFQVZFX1JPT00pIHtcbiAgICAgICAgICAgIHRoaXMubGVhdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2RlID09PSBQcm90b2NvbF8xLlByb3RvY29sLlJPT01fREFUQV9TQ0hFTUEpIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0XzEgPSB0aGlzLnNlcmlhbGl6ZXIuZ2V0U3RhdGUoKS5jb25zdHJ1Y3Rvci5fY29udGV4dDtcbiAgICAgICAgICAgIHZhciB0eXBlID0gY29udGV4dF8xLmdldChieXRlc1sxXSk7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IG5ldyB0eXBlKCk7XG4gICAgICAgICAgICBtZXNzYWdlLmRlY29kZShieXRlcywgeyBvZmZzZXQ6IDIgfSk7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoTWVzc2FnZSh0eXBlLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2RlID09PSBQcm90b2NvbF8xLlByb3RvY29sLlJPT01fU1RBVEUpIHtcbiAgICAgICAgICAgIGJ5dGVzLnNoaWZ0KCk7IC8vIGRyb3AgYGNvZGVgIGJ5dGVcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoYnl0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvZGUgPT09IFByb3RvY29sXzEuUHJvdG9jb2wuUk9PTV9TVEFURV9QQVRDSCkge1xuICAgICAgICAgICAgYnl0ZXMuc2hpZnQoKTsgLy8gZHJvcCBgY29kZWAgYnl0ZVxuICAgICAgICAgICAgdGhpcy5wYXRjaChieXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29kZSA9PT0gUHJvdG9jb2xfMS5Qcm90b2NvbC5ST09NX0RBVEEpIHtcbiAgICAgICAgICAgIHZhciBpdF8yID0geyBvZmZzZXQ6IDEgfTtcbiAgICAgICAgICAgIHZhciB0eXBlID0gKGRlY29kZS5zdHJpbmdDaGVjayhieXRlcywgaXRfMikpXG4gICAgICAgICAgICAgICAgPyBkZWNvZGUuc3RyaW5nKGJ5dGVzLCBpdF8yKVxuICAgICAgICAgICAgICAgIDogZGVjb2RlLm51bWJlcihieXRlcywgaXRfMik7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IChieXRlcy5sZW5ndGggPiBpdF8yLm9mZnNldClcbiAgICAgICAgICAgICAgICA/IG1zZ3BhY2suZGVjb2RlKGV2ZW50LmRhdGEsIGl0XzIub2Zmc2V0KVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaE1lc3NhZ2UodHlwZSwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJvb20ucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKGVuY29kZWRTdGF0ZSkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZXIuc2V0U3RhdGUoZW5jb2RlZFN0YXRlKTtcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlLmludm9rZSh0aGlzLnNlcmlhbGl6ZXIuZ2V0U3RhdGUoKSk7XG4gICAgfTtcbiAgICBSb29tLnByb3RvdHlwZS5wYXRjaCA9IGZ1bmN0aW9uIChiaW5hcnlQYXRjaCkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZXIucGF0Y2goYmluYXJ5UGF0Y2gpO1xuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UuaW52b2tlKHRoaXMuc2VyaWFsaXplci5nZXRTdGF0ZSgpKTtcbiAgICB9O1xuICAgIFJvb20ucHJvdG90eXBlLmRpc3BhdGNoTWVzc2FnZSA9IGZ1bmN0aW9uICh0eXBlLCBtZXNzYWdlKSB7XG4gICAgICAgIHZhciBtZXNzYWdlVHlwZSA9IHRoaXMuZ2V0TWVzc2FnZUhhbmRsZXJLZXkodHlwZSk7XG4gICAgICAgIGlmICh0aGlzLm9uTWVzc2FnZUhhbmRsZXJzLmV2ZW50c1ttZXNzYWdlVHlwZV0pIHtcbiAgICAgICAgICAgIHRoaXMub25NZXNzYWdlSGFuZGxlcnMuZW1pdChtZXNzYWdlVHlwZSwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5vbk1lc3NhZ2VIYW5kbGVycy5ldmVudHNbJyonXSkge1xuICAgICAgICAgICAgdGhpcy5vbk1lc3NhZ2VIYW5kbGVycy5lbWl0KCcqJywgdHlwZSwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJvbk1lc3NhZ2Ugbm90IHJlZ2lzdGVyZWQgZm9yIHR5cGUgJ1wiICsgdHlwZSArIFwiJy5cIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJvb20ucHJvdG90eXBlLmdldE1lc3NhZ2VIYW5kbGVyS2V5ID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgKHR5cGUpKSB7XG4gICAgICAgICAgICAvLyB0eXBlb2YgU2NoZW1hXG4gICAgICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjogcmV0dXJuIFwiJFwiICsgdHlwZS5fdHlwZWlkO1xuICAgICAgICAgICAgLy8gc3RyaW5nXG4gICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6IHJldHVybiB0eXBlO1xuICAgICAgICAgICAgLy8gbnVtYmVyXG4gICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6IHJldHVybiBcImlcIiArIHR5cGU7XG4gICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIG1lc3NhZ2UgdHlwZS5cIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBSb29tO1xufSgpKTtcbmV4cG9ydHMuUm9vbSA9IFJvb207XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2NvY29zLWNyZWF0b3IuZC50c1wiIC8+XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldEl0ZW0gPSBleHBvcnRzLnJlbW92ZUl0ZW0gPSBleHBvcnRzLnNldEl0ZW0gPSB2b2lkIDA7XG4vKipcbiAqIFdlIGRvIG5vdCBhc3NpZ24gJ3N0b3JhZ2UnIHRvIHdpbmRvdy5sb2NhbFN0b3JhZ2UgaW1tZWRpYXRlbGx5IGZvciBSZWFjdFxuICogTmF0aXZlIGNvbXBhdGliaWxpdHkuIHdpbmRvdy5sb2NhbFN0b3JhZ2UgaXMgbm90IHByZXNlbnQgd2hlbiB0aGlzIG1vZHVsZSBpc1xuICogbG9hZGVkLlxuICovXG52YXIgc3RvcmFnZTtcbmZ1bmN0aW9uIGdldFN0b3JhZ2UoKSB7XG4gICAgaWYgKCFzdG9yYWdlKSB7XG4gICAgICAgIHN0b3JhZ2UgPSAodHlwZW9mIChjYykgIT09ICd1bmRlZmluZWQnICYmIGNjLnN5cyAmJiBjYy5zeXMubG9jYWxTdG9yYWdlKVxuICAgICAgICAgICAgPyBjYy5zeXMubG9jYWxTdG9yYWdlIC8vIGNvbXBhdGliaWxpdHkgd2l0aCBjb2NvcyBjcmVhdG9yXG4gICAgICAgICAgICA6IHR5cGVvZiAod2luZG93KSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYWxTdG9yYWdlIC8vUk4gZG9lcyBoYXZlIHdpbmRvdyBvYmplY3QgYXQgdGhpcyBwb2ludCwgYnV0IGxvY2FsU3RvcmFnZSBpcyBub3QgZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gd2luZG93LmxvY2FsU3RvcmFnZSAvLyByZWd1bGFyIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGU6IHt9LFxuICAgICAgICAgICAgICAgICAgICBzZXRJdGVtOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkgeyB0aGlzLmNhY2hlW2tleV0gPSB2YWx1ZTsgfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0SXRlbTogZnVuY3Rpb24gKGtleSkgeyB0aGlzLmNhY2hlW2tleV07IH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW06IGZ1bmN0aW9uIChrZXkpIHsgZGVsZXRlIHRoaXMuY2FjaGVba2V5XTsgfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gc3RvcmFnZTtcbn1cbmZ1bmN0aW9uIHNldEl0ZW0oa2V5LCB2YWx1ZSkge1xuICAgIGdldFN0b3JhZ2UoKS5zZXRJdGVtKGtleSwgdmFsdWUpO1xufVxuZXhwb3J0cy5zZXRJdGVtID0gc2V0SXRlbTtcbmZ1bmN0aW9uIHJlbW92ZUl0ZW0oa2V5KSB7XG4gICAgZ2V0U3RvcmFnZSgpLnJlbW92ZUl0ZW0oa2V5KTtcbn1cbmV4cG9ydHMucmVtb3ZlSXRlbSA9IHJlbW92ZUl0ZW07XG5mdW5jdGlvbiBnZXRJdGVtKGtleSwgY2FsbGJhY2spIHtcbiAgICB2YXIgdmFsdWUgPSBnZXRTdG9yYWdlKCkuZ2V0SXRlbShrZXkpO1xuICAgIGlmICh0eXBlb2YgKFByb21pc2UpID09PSAndW5kZWZpbmVkJyB8fCAvLyBvbGQgYnJvd3NlcnNcbiAgICAgICAgISh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICAgIC8vIGJyb3dzZXIgaGFzIHN5bmNocm9ub3VzIHJldHVyblxuICAgICAgICBjYWxsYmFjayh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyByZWFjdC1uYXRpdmUgaXMgYXN5bmNocm9ub3VzXG4gICAgICAgIHZhbHVlLnRoZW4oZnVuY3Rpb24gKGlkKSB7IHJldHVybiBjYWxsYmFjayhpZCk7IH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZ2V0SXRlbSA9IGdldEl0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TZXJ2ZXJFcnJvciA9IHZvaWQgMDtcbnZhciBTZXJ2ZXJFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2VydmVyRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2VydmVyRXJyb3IoY29kZSwgbWVzc2FnZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5uYW1lID0gXCJTZXJ2ZXJFcnJvclwiO1xuICAgICAgICBfdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gU2VydmVyRXJyb3I7XG59KEVycm9yKSk7XG5leHBvcnRzLlNlcnZlckVycm9yID0gU2VydmVyRXJyb3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2NoZW1hU2VyaWFsaXplciA9IGV4cG9ydHMuRm9zc2lsRGVsdGFTZXJpYWxpemVyID0gZXhwb3J0cy5yZWdpc3RlclNlcmlhbGl6ZXIgPSB2b2lkIDA7XG5yZXF1aXJlKFwiLi9sZWdhY3lcIik7XG52YXIgQ2xpZW50XzEgPSByZXF1aXJlKFwiLi9DbGllbnRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDbGllbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIENsaWVudF8xLkNsaWVudDsgfSB9KTtcbnZhciBQcm90b2NvbF8xID0gcmVxdWlyZShcIi4vUHJvdG9jb2xcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJQcm90b2NvbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvdG9jb2xfMS5Qcm90b2NvbDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkVycm9yQ29kZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvdG9jb2xfMS5FcnJvckNvZGU7IH0gfSk7XG52YXIgUm9vbV8xID0gcmVxdWlyZShcIi4vUm9vbVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvb21cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFJvb21fMS5Sb29tOyB9IH0pO1xudmFyIEF1dGhfMSA9IHJlcXVpcmUoXCIuL0F1dGhcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBdXRoXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBBdXRoXzEuQXV0aDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlBsYXRmb3JtXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBBdXRoXzEuUGxhdGZvcm07IH0gfSk7XG4vKlxuICogU2VyaWFsaXplcnNcbiAqL1xudmFyIEZvc3NpbERlbHRhU2VyaWFsaXplcl8xID0gcmVxdWlyZShcIi4vc2VyaWFsaXplci9Gb3NzaWxEZWx0YVNlcmlhbGl6ZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJGb3NzaWxEZWx0YVNlcmlhbGl6ZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEZvc3NpbERlbHRhU2VyaWFsaXplcl8xLkZvc3NpbERlbHRhU2VyaWFsaXplcjsgfSB9KTtcbnZhciBTY2hlbWFTZXJpYWxpemVyXzEgPSByZXF1aXJlKFwiLi9zZXJpYWxpemVyL1NjaGVtYVNlcmlhbGl6ZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTY2hlbWFTZXJpYWxpemVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBTY2hlbWFTZXJpYWxpemVyXzEuU2NoZW1hU2VyaWFsaXplcjsgfSB9KTtcbnZhciBTZXJpYWxpemVyXzEgPSByZXF1aXJlKFwiLi9zZXJpYWxpemVyL1NlcmlhbGl6ZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZWdpc3RlclNlcmlhbGl6ZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFNlcmlhbGl6ZXJfMS5yZWdpc3RlclNlcmlhbGl6ZXI7IH0gfSk7XG5TZXJpYWxpemVyXzEucmVnaXN0ZXJTZXJpYWxpemVyKCdmb3NzaWwtZGVsdGEnLCBGb3NzaWxEZWx0YVNlcmlhbGl6ZXJfMS5Gb3NzaWxEZWx0YVNlcmlhbGl6ZXIpO1xuU2VyaWFsaXplcl8xLnJlZ2lzdGVyU2VyaWFsaXplcignc2NoZW1hJywgU2NoZW1hU2VyaWFsaXplcl8xLlNjaGVtYVNlcmlhbGl6ZXIpO1xuIiwiLy9cbi8vIFBvbHlmaWxscyBmb3IgbGVnYWN5IGVudmlyb25tZW50c1xuLy9cbi8qXG4gKiBTdXBwb3J0IEFuZHJvaWQgNC40LnhcbiAqL1xuaWYgKCFBcnJheUJ1ZmZlci5pc1ZpZXcpIHtcbiAgICBBcnJheUJ1ZmZlci5pc1ZpZXcgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gYSAhPT0gbnVsbCAmJiB0eXBlb2YgKGEpID09PSAnb2JqZWN0JyAmJiBhLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyO1xuICAgIH07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZW5jb2RlID0gZXhwb3J0cy5kZWNvZGUgPSB2b2lkIDA7XG52YXIgZGVjb2RlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbXNncGFjay9kZWNvZGVcIikpO1xudmFyIGVuY29kZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21zZ3BhY2svZW5jb2RlXCIpKTtcbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlXzEuZGVmYXVsdDtcbmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlXzEuZGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgSW9uIERyaXZlIFNvZnR3YXJlIEx0ZC5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJyYWNoZXF1ZXNuZS9ub3RlcGFjay9cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFBhdGNoIGZvciBDb2x5c2V1czpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBhZGRlZCBgb2Zmc2V0YCBvbiBEZWNvZGVyIGNvbnN0cnVjdG9yLCBmb3IgbWVzc2FnZXMgYXJyaXZpbmcgd2l0aCBhIGNvZGVcbiAqIGJlZm9yZSBhY3R1YWwgbXNncGFjayBkYXRhXG4gKi9cbmZ1bmN0aW9uIERlY29kZXIoYnVmZmVyLCBvZmZzZXQpIHtcbiAgICB0aGlzLl9vZmZzZXQgPSBvZmZzZXQ7XG4gICAgaWYgKGJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgIHRoaXMuX2J1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgdGhpcy5fdmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLl9idWZmZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoYnVmZmVyKSkge1xuICAgICAgICB0aGlzLl9idWZmZXIgPSBidWZmZXIuYnVmZmVyO1xuICAgICAgICB0aGlzLl92aWV3ID0gbmV3IERhdGFWaWV3KHRoaXMuX2J1ZmZlciwgYnVmZmVyLmJ5dGVPZmZzZXQsIGJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudCcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHV0ZjhSZWFkKHZpZXcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgdmFyIHN0cmluZyA9ICcnLCBjaHIgPSAwO1xuICAgIGZvciAodmFyIGkgPSBvZmZzZXQsIGVuZCA9IG9mZnNldCArIGxlbmd0aDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgIHZhciBieXRlID0gdmlldy5nZXRVaW50OChpKTtcbiAgICAgICAgaWYgKChieXRlICYgMHg4MCkgPT09IDB4MDApIHtcbiAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChieXRlICYgMHhlMCkgPT09IDB4YzApIHtcbiAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYnl0ZSAmIDB4MWYpIDw8IDYpIHxcbiAgICAgICAgICAgICAgICAodmlldy5nZXRVaW50OCgrK2kpICYgMHgzZikpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChieXRlICYgMHhmMCkgPT09IDB4ZTApIHtcbiAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYnl0ZSAmIDB4MGYpIDw8IDEyKSB8XG4gICAgICAgICAgICAgICAgKCh2aWV3LmdldFVpbnQ4KCsraSkgJiAweDNmKSA8PCA2KSB8XG4gICAgICAgICAgICAgICAgKCh2aWV3LmdldFVpbnQ4KCsraSkgJiAweDNmKSA8PCAwKSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGJ5dGUgJiAweGY4KSA9PT0gMHhmMCkge1xuICAgICAgICAgICAgY2hyID0gKChieXRlICYgMHgwNykgPDwgMTgpIHxcbiAgICAgICAgICAgICAgICAoKHZpZXcuZ2V0VWludDgoKytpKSAmIDB4M2YpIDw8IDEyKSB8XG4gICAgICAgICAgICAgICAgKCh2aWV3LmdldFVpbnQ4KCsraSkgJiAweDNmKSA8PCA2KSB8XG4gICAgICAgICAgICAgICAgKCh2aWV3LmdldFVpbnQ4KCsraSkgJiAweDNmKSA8PCAwKTtcbiAgICAgICAgICAgIGlmIChjaHIgPj0gMHgwMTAwMDApIHsgLy8gc3Vycm9nYXRlIHBhaXJcbiAgICAgICAgICAgICAgICBjaHIgLT0gMHgwMTAwMDA7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGNociA+Pj4gMTApICsgMHhEODAwLCAoY2hyICYgMHgzRkYpICsgMHhEQzAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYnl0ZSAnICsgYnl0ZS50b1N0cmluZygxNikpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xufVxuRGVjb2Rlci5wcm90b3R5cGUuX2FycmF5ID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWVbaV0gPSB0aGlzLl9wYXJzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuRGVjb2Rlci5wcm90b3R5cGUuX21hcCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gJycsIHZhbHVlID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBrZXkgPSB0aGlzLl9wYXJzZSgpO1xuICAgICAgICB2YWx1ZVtrZXldID0gdGhpcy5fcGFyc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcbkRlY29kZXIucHJvdG90eXBlLl9zdHIgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gdXRmOFJlYWQodGhpcy5fdmlldywgdGhpcy5fb2Zmc2V0LCBsZW5ndGgpO1xuICAgIHRoaXMuX29mZnNldCArPSBsZW5ndGg7XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcbkRlY29kZXIucHJvdG90eXBlLl9iaW4gPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5fYnVmZmVyLnNsaWNlKHRoaXMuX29mZnNldCwgdGhpcy5fb2Zmc2V0ICsgbGVuZ3RoKTtcbiAgICB0aGlzLl9vZmZzZXQgKz0gbGVuZ3RoO1xuICAgIHJldHVybiB2YWx1ZTtcbn07XG5EZWNvZGVyLnByb3RvdHlwZS5fcGFyc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByZWZpeCA9IHRoaXMuX3ZpZXcuZ2V0VWludDgodGhpcy5fb2Zmc2V0KyspO1xuICAgIHZhciB2YWx1ZSwgbGVuZ3RoID0gMCwgdHlwZSA9IDAsIGhpID0gMCwgbG8gPSAwO1xuICAgIGlmIChwcmVmaXggPCAweGMwKSB7XG4gICAgICAgIC8vIHBvc2l0aXZlIGZpeGludFxuICAgICAgICBpZiAocHJlZml4IDwgMHg4MCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICAgICAgfVxuICAgICAgICAvLyBmaXhtYXBcbiAgICAgICAgaWYgKHByZWZpeCA8IDB4OTApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXAocHJlZml4ICYgMHgwZik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZml4YXJyYXlcbiAgICAgICAgaWYgKHByZWZpeCA8IDB4YTApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hcnJheShwcmVmaXggJiAweDBmKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmaXhzdHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0cihwcmVmaXggJiAweDFmKTtcbiAgICB9XG4gICAgLy8gbmVnYXRpdmUgZml4aW50XG4gICAgaWYgKHByZWZpeCA+IDB4ZGYpIHtcbiAgICAgICAgcmV0dXJuICgweGZmIC0gcHJlZml4ICsgMSkgKiAtMTtcbiAgICB9XG4gICAgc3dpdGNoIChwcmVmaXgpIHtcbiAgICAgICAgLy8gbmlsXG4gICAgICAgIGNhc2UgMHhjMDpcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAvLyBmYWxzZVxuICAgICAgICBjYXNlIDB4YzI6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIHRydWVcbiAgICAgICAgY2FzZSAweGMzOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vIGJpblxuICAgICAgICBjYXNlIDB4YzQ6XG4gICAgICAgICAgICBsZW5ndGggPSB0aGlzLl92aWV3LmdldFVpbnQ4KHRoaXMuX29mZnNldCk7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gMTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9iaW4obGVuZ3RoKTtcbiAgICAgICAgY2FzZSAweGM1OlxuICAgICAgICAgICAgbGVuZ3RoID0gdGhpcy5fdmlldy5nZXRVaW50MTYodGhpcy5fb2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSAyO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JpbihsZW5ndGgpO1xuICAgICAgICBjYXNlIDB4YzY6XG4gICAgICAgICAgICBsZW5ndGggPSB0aGlzLl92aWV3LmdldFVpbnQzMih0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmluKGxlbmd0aCk7XG4gICAgICAgIC8vIGV4dFxuICAgICAgICBjYXNlIDB4Yzc6XG4gICAgICAgICAgICBsZW5ndGggPSB0aGlzLl92aWV3LmdldFVpbnQ4KHRoaXMuX29mZnNldCk7XG4gICAgICAgICAgICB0eXBlID0gdGhpcy5fdmlldy5nZXRJbnQ4KHRoaXMuX29mZnNldCArIDEpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDI7XG4gICAgICAgICAgICByZXR1cm4gW3R5cGUsIHRoaXMuX2JpbihsZW5ndGgpXTtcbiAgICAgICAgY2FzZSAweGM4OlxuICAgICAgICAgICAgbGVuZ3RoID0gdGhpcy5fdmlldy5nZXRVaW50MTYodGhpcy5fb2Zmc2V0KTtcbiAgICAgICAgICAgIHR5cGUgPSB0aGlzLl92aWV3LmdldEludDgodGhpcy5fb2Zmc2V0ICsgMik7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gMztcbiAgICAgICAgICAgIHJldHVybiBbdHlwZSwgdGhpcy5fYmluKGxlbmd0aCldO1xuICAgICAgICBjYXNlIDB4Yzk6XG4gICAgICAgICAgICBsZW5ndGggPSB0aGlzLl92aWV3LmdldFVpbnQzMih0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgdHlwZSA9IHRoaXMuX3ZpZXcuZ2V0SW50OCh0aGlzLl9vZmZzZXQgKyA0KTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSA1O1xuICAgICAgICAgICAgcmV0dXJuIFt0eXBlLCB0aGlzLl9iaW4obGVuZ3RoKV07XG4gICAgICAgIC8vIGZsb2F0XG4gICAgICAgIGNhc2UgMHhjYTpcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fdmlldy5nZXRGbG9hdDMyKHRoaXMuX29mZnNldCk7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gNDtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgY2FzZSAweGNiOlxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl92aWV3LmdldEZsb2F0NjQodGhpcy5fb2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSA4O1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAvLyB1aW50XG4gICAgICAgIGNhc2UgMHhjYzpcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fdmlldy5nZXRVaW50OCh0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDE7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIGNhc2UgMHhjZDpcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fdmlldy5nZXRVaW50MTYodGhpcy5fb2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSAyO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICBjYXNlIDB4Y2U6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3ZpZXcuZ2V0VWludDMyKHRoaXMuX29mZnNldCk7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gNDtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgY2FzZSAweGNmOlxuICAgICAgICAgICAgaGkgPSB0aGlzLl92aWV3LmdldFVpbnQzMih0aGlzLl9vZmZzZXQpICogTWF0aC5wb3coMiwgMzIpO1xuICAgICAgICAgICAgbG8gPSB0aGlzLl92aWV3LmdldFVpbnQzMih0aGlzLl9vZmZzZXQgKyA0KTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSA4O1xuICAgICAgICAgICAgcmV0dXJuIGhpICsgbG87XG4gICAgICAgIC8vIGludFxuICAgICAgICBjYXNlIDB4ZDA6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3ZpZXcuZ2V0SW50OCh0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDE7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIGNhc2UgMHhkMTpcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fdmlldy5nZXRJbnQxNih0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDI7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIGNhc2UgMHhkMjpcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fdmlldy5nZXRJbnQzMih0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIGNhc2UgMHhkMzpcbiAgICAgICAgICAgIGhpID0gdGhpcy5fdmlldy5nZXRJbnQzMih0aGlzLl9vZmZzZXQpICogTWF0aC5wb3coMiwgMzIpO1xuICAgICAgICAgICAgbG8gPSB0aGlzLl92aWV3LmdldFVpbnQzMih0aGlzLl9vZmZzZXQgKyA0KTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSA4O1xuICAgICAgICAgICAgcmV0dXJuIGhpICsgbG87XG4gICAgICAgIC8vIGZpeGV4dFxuICAgICAgICBjYXNlIDB4ZDQ6XG4gICAgICAgICAgICB0eXBlID0gdGhpcy5fdmlldy5nZXRJbnQ4KHRoaXMuX29mZnNldCk7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gMTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAweDAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbdHlwZSwgdGhpcy5fYmluKDEpXTtcbiAgICAgICAgY2FzZSAweGQ1OlxuICAgICAgICAgICAgdHlwZSA9IHRoaXMuX3ZpZXcuZ2V0SW50OCh0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDE7XG4gICAgICAgICAgICByZXR1cm4gW3R5cGUsIHRoaXMuX2JpbigyKV07XG4gICAgICAgIGNhc2UgMHhkNjpcbiAgICAgICAgICAgIHR5cGUgPSB0aGlzLl92aWV3LmdldEludDgodGhpcy5fb2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSAxO1xuICAgICAgICAgICAgcmV0dXJuIFt0eXBlLCB0aGlzLl9iaW4oNCldO1xuICAgICAgICBjYXNlIDB4ZDc6XG4gICAgICAgICAgICB0eXBlID0gdGhpcy5fdmlldy5nZXRJbnQ4KHRoaXMuX29mZnNldCk7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gMTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAweDAwKSB7XG4gICAgICAgICAgICAgICAgaGkgPSB0aGlzLl92aWV3LmdldEludDMyKHRoaXMuX29mZnNldCkgKiBNYXRoLnBvdygyLCAzMik7XG4gICAgICAgICAgICAgICAgbG8gPSB0aGlzLl92aWV3LmdldFVpbnQzMih0aGlzLl9vZmZzZXQgKyA0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gODtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoaGkgKyBsbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW3R5cGUsIHRoaXMuX2Jpbig4KV07XG4gICAgICAgIGNhc2UgMHhkODpcbiAgICAgICAgICAgIHR5cGUgPSB0aGlzLl92aWV3LmdldEludDgodGhpcy5fb2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSAxO1xuICAgICAgICAgICAgcmV0dXJuIFt0eXBlLCB0aGlzLl9iaW4oMTYpXTtcbiAgICAgICAgLy8gc3RyXG4gICAgICAgIGNhc2UgMHhkOTpcbiAgICAgICAgICAgIGxlbmd0aCA9IHRoaXMuX3ZpZXcuZ2V0VWludDgodGhpcy5fb2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSAxO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cihsZW5ndGgpO1xuICAgICAgICBjYXNlIDB4ZGE6XG4gICAgICAgICAgICBsZW5ndGggPSB0aGlzLl92aWV3LmdldFVpbnQxNih0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDI7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyKGxlbmd0aCk7XG4gICAgICAgIGNhc2UgMHhkYjpcbiAgICAgICAgICAgIGxlbmd0aCA9IHRoaXMuX3ZpZXcuZ2V0VWludDMyKHRoaXMuX29mZnNldCk7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gNDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHIobGVuZ3RoKTtcbiAgICAgICAgLy8gYXJyYXlcbiAgICAgICAgY2FzZSAweGRjOlxuICAgICAgICAgICAgbGVuZ3RoID0gdGhpcy5fdmlldy5nZXRVaW50MTYodGhpcy5fb2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSAyO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5KGxlbmd0aCk7XG4gICAgICAgIGNhc2UgMHhkZDpcbiAgICAgICAgICAgIGxlbmd0aCA9IHRoaXMuX3ZpZXcuZ2V0VWludDMyKHRoaXMuX29mZnNldCk7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gNDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hcnJheShsZW5ndGgpO1xuICAgICAgICAvLyBtYXBcbiAgICAgICAgY2FzZSAweGRlOlxuICAgICAgICAgICAgbGVuZ3RoID0gdGhpcy5fdmlldy5nZXRVaW50MTYodGhpcy5fb2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSAyO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcChsZW5ndGgpO1xuICAgICAgICBjYXNlIDB4ZGY6XG4gICAgICAgICAgICBsZW5ndGggPSB0aGlzLl92aWV3LmdldFVpbnQzMih0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFwKGxlbmd0aCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHBhcnNlJyk7XG59O1xuZnVuY3Rpb24gZGVjb2RlKGJ1ZmZlciwgb2Zmc2V0KSB7XG4gICAgaWYgKG9mZnNldCA9PT0gdm9pZCAwKSB7IG9mZnNldCA9IDA7IH1cbiAgICB2YXIgZGVjb2RlciA9IG5ldyBEZWNvZGVyKGJ1ZmZlciwgb2Zmc2V0KTtcbiAgICB2YXIgdmFsdWUgPSBkZWNvZGVyLl9wYXJzZSgpO1xuICAgIGlmIChkZWNvZGVyLl9vZmZzZXQgIT09IGJ1ZmZlci5ieXRlTGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigoYnVmZmVyLmJ5dGVMZW5ndGggLSBkZWNvZGVyLl9vZmZzZXQpICsgJyB0cmFpbGluZyBieXRlcycpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWNvZGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IElvbiBEcml2ZSBTb2Z0d2FyZSBMdGQuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZGFycmFjaGVxdWVzbmUvbm90ZXBhY2svXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gdXRmOFdyaXRlKHZpZXcsIG9mZnNldCwgc3RyKSB7XG4gICAgdmFyIGMgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDwgMHg4MCkge1xuICAgICAgICAgICAgdmlldy5zZXRVaW50OChvZmZzZXQrKywgYyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA8IDB4ODAwKSB7XG4gICAgICAgICAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCAweGMwIHwgKGMgPj4gNikpO1xuICAgICAgICAgICAgdmlldy5zZXRVaW50OChvZmZzZXQrKywgMHg4MCB8IChjICYgMHgzZikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweGQ4MDAgfHwgYyA+PSAweGUwMDApIHtcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDgob2Zmc2V0KyssIDB4ZTAgfCAoYyA+PiAxMikpO1xuICAgICAgICAgICAgdmlldy5zZXRVaW50OChvZmZzZXQrKywgMHg4MCB8IChjID4+IDYpICYgMHgzZik7XG4gICAgICAgICAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCAweDgwIHwgKGMgJiAweDNmKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBjID0gMHgxMDAwMCArICgoKGMgJiAweDNmZikgPDwgMTApIHwgKHN0ci5jaGFyQ29kZUF0KGkpICYgMHgzZmYpKTtcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDgob2Zmc2V0KyssIDB4ZjAgfCAoYyA+PiAxOCkpO1xuICAgICAgICAgICAgdmlldy5zZXRVaW50OChvZmZzZXQrKywgMHg4MCB8IChjID4+IDEyKSAmIDB4M2YpO1xuICAgICAgICAgICAgdmlldy5zZXRVaW50OChvZmZzZXQrKywgMHg4MCB8IChjID4+IDYpICYgMHgzZik7XG4gICAgICAgICAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCAweDgwIHwgKGMgJiAweDNmKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiB1dGY4TGVuZ3RoKHN0cikge1xuICAgIHZhciBjID0gMCwgbGVuZ3RoID0gMDtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8IDB4ODApIHtcbiAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgbGVuZ3RoICs9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA8IDB4ZDgwMCB8fCBjID49IDB4ZTAwMCkge1xuICAgICAgICAgICAgbGVuZ3RoICs9IDM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBsZW5ndGggKz0gNDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGVuZ3RoO1xufVxuZnVuY3Rpb24gX2VuY29kZShieXRlcywgZGVmZXJzLCB2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlLCBpID0gMCwgbCA9IDAsIGhpID0gMCwgbG8gPSAwLCBsZW5ndGggPSAwLCBzaXplID0gMDtcbiAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGVuZ3RoID0gdXRmOExlbmd0aCh2YWx1ZSk7XG4gICAgICAgIC8vIGZpeHN0clxuICAgICAgICBpZiAobGVuZ3RoIDwgMHgyMCkge1xuICAgICAgICAgICAgYnl0ZXMucHVzaChsZW5ndGggfCAweGEwKTtcbiAgICAgICAgICAgIHNpemUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN0ciA4XG4gICAgICAgIGVsc2UgaWYgKGxlbmd0aCA8IDB4MTAwKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKDB4ZDksIGxlbmd0aCk7XG4gICAgICAgICAgICBzaXplID0gMjtcbiAgICAgICAgfVxuICAgICAgICAvLyBzdHIgMTZcbiAgICAgICAgZWxzZSBpZiAobGVuZ3RoIDwgMHgxMDAwMCkge1xuICAgICAgICAgICAgYnl0ZXMucHVzaCgweGRhLCBsZW5ndGggPj4gOCwgbGVuZ3RoKTtcbiAgICAgICAgICAgIHNpemUgPSAzO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN0ciAzMlxuICAgICAgICBlbHNlIGlmIChsZW5ndGggPCAweDEwMDAwMDAwMCkge1xuICAgICAgICAgICAgYnl0ZXMucHVzaCgweGRiLCBsZW5ndGggPj4gMjQsIGxlbmd0aCA+PiAxNiwgbGVuZ3RoID4+IDgsIGxlbmd0aCk7XG4gICAgICAgICAgICBzaXplID0gNTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RyaW5nIHRvbyBsb25nJyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVmZXJzLnB1c2goeyBfc3RyOiB2YWx1ZSwgX2xlbmd0aDogbGVuZ3RoLCBfb2Zmc2V0OiBieXRlcy5sZW5ndGggfSk7XG4gICAgICAgIHJldHVybiBzaXplICsgbGVuZ3RoO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgLy8gVE9ETzogZW5jb2RlIHRvIGZsb2F0IDMyP1xuICAgICAgICAvLyBmbG9hdCA2NFxuICAgICAgICBpZiAoTWF0aC5mbG9vcih2YWx1ZSkgIT09IHZhbHVlIHx8ICFpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goMHhjYik7XG4gICAgICAgICAgICBkZWZlcnMucHVzaCh7IF9mbG9hdDogdmFsdWUsIF9sZW5ndGg6IDgsIF9vZmZzZXQ6IGJ5dGVzLmxlbmd0aCB9KTtcbiAgICAgICAgICAgIHJldHVybiA5O1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA+PSAwKSB7XG4gICAgICAgICAgICAvLyBwb3NpdGl2ZSBmaXhudW1cbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IDB4ODApIHtcbiAgICAgICAgICAgICAgICBieXRlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHVpbnQgOFxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgMHgxMDApIHtcbiAgICAgICAgICAgICAgICBieXRlcy5wdXNoKDB4Y2MsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHVpbnQgMTZcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IDB4MTAwMDApIHtcbiAgICAgICAgICAgICAgICBieXRlcy5wdXNoKDB4Y2QsIHZhbHVlID4+IDgsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHVpbnQgMzJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IDB4MTAwMDAwMDAwKSB7XG4gICAgICAgICAgICAgICAgYnl0ZXMucHVzaCgweGNlLCB2YWx1ZSA+PiAyNCwgdmFsdWUgPj4gMTYsIHZhbHVlID4+IDgsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHVpbnQgNjRcbiAgICAgICAgICAgIGhpID0gKHZhbHVlIC8gTWF0aC5wb3coMiwgMzIpKSA+PiAwO1xuICAgICAgICAgICAgbG8gPSB2YWx1ZSA+Pj4gMDtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goMHhjZiwgaGkgPj4gMjQsIGhpID4+IDE2LCBoaSA+PiA4LCBoaSwgbG8gPj4gMjQsIGxvID4+IDE2LCBsbyA+PiA4LCBsbyk7XG4gICAgICAgICAgICByZXR1cm4gOTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5lZ2F0aXZlIGZpeG51bVxuICAgICAgICAgICAgaWYgKHZhbHVlID49IC0weDIwKSB7XG4gICAgICAgICAgICAgICAgYnl0ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbnQgOFxuICAgICAgICAgICAgaWYgKHZhbHVlID49IC0weDgwKSB7XG4gICAgICAgICAgICAgICAgYnl0ZXMucHVzaCgweGQwLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbnQgMTZcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+PSAtMHg4MDAwKSB7XG4gICAgICAgICAgICAgICAgYnl0ZXMucHVzaCgweGQxLCB2YWx1ZSA+PiA4LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbnQgMzJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+PSAtMHg4MDAwMDAwMCkge1xuICAgICAgICAgICAgICAgIGJ5dGVzLnB1c2goMHhkMiwgdmFsdWUgPj4gMjQsIHZhbHVlID4+IDE2LCB2YWx1ZSA+PiA4LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbnQgNjRcbiAgICAgICAgICAgIGhpID0gTWF0aC5mbG9vcih2YWx1ZSAvIE1hdGgucG93KDIsIDMyKSk7XG4gICAgICAgICAgICBsbyA9IHZhbHVlID4+PiAwO1xuICAgICAgICAgICAgYnl0ZXMucHVzaCgweGQzLCBoaSA+PiAyNCwgaGkgPj4gMTYsIGhpID4+IDgsIGhpLCBsbyA+PiAyNCwgbG8gPj4gMTYsIGxvID4+IDgsIGxvKTtcbiAgICAgICAgICAgIHJldHVybiA5O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBuaWxcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKDB4YzApO1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAvLyBmaXhhcnJheVxuICAgICAgICAgICAgaWYgKGxlbmd0aCA8IDB4MTApIHtcbiAgICAgICAgICAgICAgICBieXRlcy5wdXNoKGxlbmd0aCB8IDB4OTApO1xuICAgICAgICAgICAgICAgIHNpemUgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXJyYXkgMTZcbiAgICAgICAgICAgIGVsc2UgaWYgKGxlbmd0aCA8IDB4MTAwMDApIHtcbiAgICAgICAgICAgICAgICBieXRlcy5wdXNoKDB4ZGMsIGxlbmd0aCA+PiA4LCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIHNpemUgPSAzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXJyYXkgMzJcbiAgICAgICAgICAgIGVsc2UgaWYgKGxlbmd0aCA8IDB4MTAwMDAwMDAwKSB7XG4gICAgICAgICAgICAgICAgYnl0ZXMucHVzaCgweGRkLCBsZW5ndGggPj4gMjQsIGxlbmd0aCA+PiAxNiwgbGVuZ3RoID4+IDgsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IDU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FycmF5IHRvbyBsYXJnZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2l6ZSArPSBfZW5jb2RlKGJ5dGVzLCBkZWZlcnMsIHZhbHVlW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzaXplO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZpeGV4dCA4IC8gRGF0ZVxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICB2YXIgdGltZSA9IHZhbHVlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGhpID0gTWF0aC5mbG9vcih0aW1lIC8gTWF0aC5wb3coMiwgMzIpKTtcbiAgICAgICAgICAgIGxvID0gdGltZSA+Pj4gMDtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goMHhkNywgMCwgaGkgPj4gMjQsIGhpID4+IDE2LCBoaSA+PiA4LCBoaSwgbG8gPj4gMjQsIGxvID4+IDE2LCBsbyA+PiA4LCBsbyk7XG4gICAgICAgICAgICByZXR1cm4gMTA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IHZhbHVlLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgICAvLyBiaW4gOFxuICAgICAgICAgICAgaWYgKGxlbmd0aCA8IDB4MTAwKSB7XG4gICAgICAgICAgICAgICAgYnl0ZXMucHVzaCgweGM0LCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIHNpemUgPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIC8vIGJpbiAxNlxuICAgICAgICAgICAgaWYgKGxlbmd0aCA8IDB4MTAwMDApIHtcbiAgICAgICAgICAgICAgICBieXRlcy5wdXNoKDB4YzUsIGxlbmd0aCA+PiA4LCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIHNpemUgPSAzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIC8vIGJpbiAzMlxuICAgICAgICAgICAgaWYgKGxlbmd0aCA8IDB4MTAwMDAwMDAwKSB7XG4gICAgICAgICAgICAgICAgYnl0ZXMucHVzaCgweGM2LCBsZW5ndGggPj4gMjQsIGxlbmd0aCA+PiAxNiwgbGVuZ3RoID4+IDgsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IDU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0J1ZmZlciB0b28gbGFyZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmVycy5wdXNoKHsgX2JpbjogdmFsdWUsIF9sZW5ndGg6IGxlbmd0aCwgX29mZnNldDogYnl0ZXMubGVuZ3RoIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHNpemUgKyBsZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZS50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBfZW5jb2RlKGJ5dGVzLCBkZWZlcnMsIHZhbHVlLnRvSlNPTigpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIga2V5cyA9IFtdLCBrZXkgPSAnJztcbiAgICAgICAgdmFyIGFsbEtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBhbGxLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAga2V5ID0gYWxsS2V5c1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWVba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgICAgICAvLyBmaXhtYXBcbiAgICAgICAgaWYgKGxlbmd0aCA8IDB4MTApIHtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2gobGVuZ3RoIHwgMHg4MCk7XG4gICAgICAgICAgICBzaXplID0gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXAgMTZcbiAgICAgICAgZWxzZSBpZiAobGVuZ3RoIDwgMHgxMDAwMCkge1xuICAgICAgICAgICAgYnl0ZXMucHVzaCgweGRlLCBsZW5ndGggPj4gOCwgbGVuZ3RoKTtcbiAgICAgICAgICAgIHNpemUgPSAzO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcCAzMlxuICAgICAgICBlbHNlIGlmIChsZW5ndGggPCAweDEwMDAwMDAwMCkge1xuICAgICAgICAgICAgYnl0ZXMucHVzaCgweGRmLCBsZW5ndGggPj4gMjQsIGxlbmd0aCA+PiAxNiwgbGVuZ3RoID4+IDgsIGxlbmd0aCk7XG4gICAgICAgICAgICBzaXplID0gNTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT2JqZWN0IHRvbyBsYXJnZScpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIHNpemUgKz0gX2VuY29kZShieXRlcywgZGVmZXJzLCBrZXkpO1xuICAgICAgICAgICAgc2l6ZSArPSBfZW5jb2RlKGJ5dGVzLCBkZWZlcnMsIHZhbHVlW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaXplO1xuICAgIH1cbiAgICAvLyBmYWxzZS90cnVlXG4gICAgaWYgKHR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICBieXRlcy5wdXNoKHZhbHVlID8gMHhjMyA6IDB4YzIpO1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgLy8gZml4ZXh0IDEgLyB1bmRlZmluZWRcbiAgICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYnl0ZXMucHVzaCgweGQ0LCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGVuY29kZScpO1xufVxuZnVuY3Rpb24gZW5jb2RlKHZhbHVlKSB7XG4gICAgdmFyIGJ5dGVzID0gW107XG4gICAgdmFyIGRlZmVycyA9IFtdO1xuICAgIHZhciBzaXplID0gX2VuY29kZShieXRlcywgZGVmZXJzLCB2YWx1ZSk7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihzaXplKTtcbiAgICB2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhidWYpO1xuICAgIHZhciBkZWZlckluZGV4ID0gMDtcbiAgICB2YXIgZGVmZXJXcml0dGVuID0gMDtcbiAgICB2YXIgbmV4dE9mZnNldCA9IC0xO1xuICAgIGlmIChkZWZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBuZXh0T2Zmc2V0ID0gZGVmZXJzWzBdLl9vZmZzZXQ7XG4gICAgfVxuICAgIHZhciBkZWZlciwgZGVmZXJMZW5ndGggPSAwLCBvZmZzZXQgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYnl0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZpZXcuc2V0VWludDgoZGVmZXJXcml0dGVuICsgaSwgYnl0ZXNbaV0pO1xuICAgICAgICBpZiAoaSArIDEgIT09IG5leHRPZmZzZXQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGRlZmVyID0gZGVmZXJzW2RlZmVySW5kZXhdO1xuICAgICAgICBkZWZlckxlbmd0aCA9IGRlZmVyLl9sZW5ndGg7XG4gICAgICAgIG9mZnNldCA9IGRlZmVyV3JpdHRlbiArIG5leHRPZmZzZXQ7XG4gICAgICAgIGlmIChkZWZlci5fYmluKSB7XG4gICAgICAgICAgICB2YXIgYmluID0gbmV3IFVpbnQ4QXJyYXkoZGVmZXIuX2Jpbik7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRlZmVyTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCArIGosIGJpbltqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVmZXIuX3N0cikge1xuICAgICAgICAgICAgdXRmOFdyaXRlKHZpZXcsIG9mZnNldCwgZGVmZXIuX3N0cik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVmZXIuX2Zsb2F0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZpZXcuc2V0RmxvYXQ2NChvZmZzZXQsIGRlZmVyLl9mbG9hdCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVmZXJJbmRleCsrO1xuICAgICAgICBkZWZlcldyaXR0ZW4gKz0gZGVmZXJMZW5ndGg7XG4gICAgICAgIGlmIChkZWZlcnNbZGVmZXJJbmRleF0pIHtcbiAgICAgICAgICAgIG5leHRPZmZzZXQgPSBkZWZlcnNbZGVmZXJJbmRleF0uX29mZnNldDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYnVmO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZW5jb2RlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Gb3NzaWxEZWx0YVNlcmlhbGl6ZXIgPSB2b2lkIDA7XG52YXIgc3RhdGVfbGlzdGVuZXJfMSA9IHJlcXVpcmUoXCJAZ2FtZXN0ZGlvL3N0YXRlLWxpc3RlbmVyXCIpO1xudmFyIGZvc3NpbERlbHRhID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJmb3NzaWwtZGVsdGFcIikpO1xudmFyIG1zZ3BhY2sgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL21zZ3BhY2tcIikpO1xudmFyIEZvc3NpbERlbHRhU2VyaWFsaXplciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb3NzaWxEZWx0YVNlcmlhbGl6ZXIoKSB7XG4gICAgICAgIHRoaXMuYXBpID0gbmV3IHN0YXRlX2xpc3RlbmVyXzEuU3RhdGVDb250YWluZXIoe30pO1xuICAgIH1cbiAgICBGb3NzaWxEZWx0YVNlcmlhbGl6ZXIucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkuc3RhdGU7XG4gICAgfTtcbiAgICBGb3NzaWxEZWx0YVNlcmlhbGl6ZXIucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKGVuY29kZWRTdGF0ZSkge1xuICAgICAgICB0aGlzLnByZXZpb3VzU3RhdGUgPSBuZXcgVWludDhBcnJheShlbmNvZGVkU3RhdGUpO1xuICAgICAgICB0aGlzLmFwaS5zZXQobXNncGFjay5kZWNvZGUodGhpcy5wcmV2aW91c1N0YXRlKSk7XG4gICAgfTtcbiAgICBGb3NzaWxEZWx0YVNlcmlhbGl6ZXIucHJvdG90eXBlLnBhdGNoID0gZnVuY3Rpb24gKGJpbmFyeVBhdGNoKSB7XG4gICAgICAgIC8vIGFwcGx5IHBhdGNoXG4gICAgICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IG5ldyBVaW50OEFycmF5KGZvc3NpbERlbHRhLmFwcGx5KHRoaXMucHJldmlvdXNTdGF0ZSwgYmluYXJ5UGF0Y2gpKTtcbiAgICAgICAgLy8gdHJpZ2dlciB1cGRhdGUgY2FsbGJhY2tzXG4gICAgICAgIHRoaXMuYXBpLnNldChtc2dwYWNrLmRlY29kZSh0aGlzLnByZXZpb3VzU3RhdGUpKTtcbiAgICB9O1xuICAgIEZvc3NpbERlbHRhU2VyaWFsaXplci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXBpLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH07XG4gICAgcmV0dXJuIEZvc3NpbERlbHRhU2VyaWFsaXplcjtcbn0oKSk7XG5leHBvcnRzLkZvc3NpbERlbHRhU2VyaWFsaXplciA9IEZvc3NpbERlbHRhU2VyaWFsaXplcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TY2hlbWFTZXJpYWxpemVyID0gdm9pZCAwO1xudmFyIHNjaGVtYV8xID0gcmVxdWlyZShcIkBjb2x5c2V1cy9zY2hlbWFcIik7XG52YXIgU2NoZW1hU2VyaWFsaXplciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY2hlbWFTZXJpYWxpemVyKCkge1xuICAgIH1cbiAgICBTY2hlbWFTZXJpYWxpemVyLnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChyYXdTdGF0ZSkge1xuICAgICAgICB0aGlzLnN0YXRlLmRlY29kZShyYXdTdGF0ZSk7XG4gICAgfTtcbiAgICBTY2hlbWFTZXJpYWxpemVyLnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfTtcbiAgICBTY2hlbWFTZXJpYWxpemVyLnByb3RvdHlwZS5wYXRjaCA9IGZ1bmN0aW9uIChwYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZGVjb2RlKHBhdGNoZXMpO1xuICAgIH07XG4gICAgU2NoZW1hU2VyaWFsaXplci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHRoaXMuc3RhdGUub25SZW1vdmVcbiAgICB9O1xuICAgIFNjaGVtYVNlcmlhbGl6ZXIucHJvdG90eXBlLmhhbmRzaGFrZSA9IGZ1bmN0aW9uIChieXRlcywgaXQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIGNsaWVudC9zZXJ2ZXIgZGVmaW5pdGlub3NcbiAgICAgICAgICAgIHZhciByZWZsZWN0aW9uID0gbmV3IHNjaGVtYV8xLlJlZmxlY3Rpb24oKTtcbiAgICAgICAgICAgIHJlZmxlY3Rpb24uZGVjb2RlKGJ5dGVzLCBpdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpbml0aWFsaXplIHJlZmxlY3RlZCBzdGF0ZSBmcm9tIHNlcnZlclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHNjaGVtYV8xLlJlZmxlY3Rpb24uZGVjb2RlKGJ5dGVzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFNjaGVtYVNlcmlhbGl6ZXI7XG59KCkpO1xuZXhwb3J0cy5TY2hlbWFTZXJpYWxpemVyID0gU2NoZW1hU2VyaWFsaXplcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRTZXJpYWxpemVyID0gZXhwb3J0cy5yZWdpc3RlclNlcmlhbGl6ZXIgPSB2b2lkIDA7XG52YXIgc2VyaWFsaXplcnMgPSB7fTtcbmZ1bmN0aW9uIHJlZ2lzdGVyU2VyaWFsaXplcihpZCwgc2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZXJzW2lkXSA9IHNlcmlhbGl6ZXI7XG59XG5leHBvcnRzLnJlZ2lzdGVyU2VyaWFsaXplciA9IHJlZ2lzdGVyU2VyaWFsaXplcjtcbmZ1bmN0aW9uIGdldFNlcmlhbGl6ZXIoaWQpIHtcbiAgICByZXR1cm4gc2VyaWFsaXplcnNbaWRdO1xufVxuZXhwb3J0cy5nZXRTZXJpYWxpemVyID0gZ2V0U2VyaWFsaXplcjtcbiIsImZ1bmN0aW9uIGFwcGx5KHNyYywgdGFyKSB7XG5cdHRhci5oZWFkZXJzID0gc3JjLmhlYWRlcnMgfHwge307XG5cdHRhci5zdGF0dXNNZXNzYWdlID0gc3JjLnN0YXR1c1RleHQ7XG5cdHRhci5zdGF0dXNDb2RlID0gc3JjLnN0YXR1cztcblx0dGFyLmRhdGEgPSBzcmMucmVzcG9uc2U7XG59XG5cbmV4cG9ydHMuc2VuZCA9IGZ1bmN0aW9uIChtZXRob2QsIHVyaSwgb3B0cykge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlcywgcmVqKSB7XG5cdFx0b3B0cyA9IG9wdHMgfHwge307XG5cdFx0dmFyIGssIHN0ciwgdG1wLCBhcnI7XG5cdFx0dmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdDtcblx0XHR2YXIgaGVhZGVycyA9IG9wdHMuaGVhZGVycyB8fCB7fTtcblxuXHRcdC8vIElFIGNvbXBhdGlibGVcblx0XHRpZiAob3B0cy50aW1lb3V0KSByZXEudGltZW91dCA9IG9wdHMudGltZW91dDtcblx0XHRyZXEub250aW1lb3V0ID0gcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRlcnIudGltZW91dCA9IGVyci50eXBlID09ICd0aW1lb3V0Jztcblx0XHRcdHJlaihlcnIpO1xuXHRcdH1cblxuXHRcdHJlcS5vcGVuKG1ldGhvZCwgdXJpLmhyZWYgfHwgdXJpKTtcblxuXHRcdHJlcS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRhcnIgPSByZXEuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkudHJpbSgpLnNwbGl0KC9bXFxyXFxuXSsvKTtcblx0XHRcdGFwcGx5KHJlcSwgcmVxKTsgLy89PiByZXEuaGVhZGVyc1xuXG5cdFx0XHR3aGlsZSAodG1wID0gYXJyLnNoaWZ0KCkpIHtcblx0XHRcdFx0dG1wID0gdG1wLnNwbGl0KCc6ICcpO1xuXHRcdFx0XHRyZXEuaGVhZGVyc1t0bXAuc2hpZnQoKS50b0xvd2VyQ2FzZSgpXSA9IHRtcC5qb2luKCc6ICcpO1xuXHRcdFx0fVxuXG5cdFx0XHR0bXAgPSByZXEuaGVhZGVyc1snY29udGVudC10eXBlJ107XG5cdFx0XHRpZiAodG1wICYmICEhfnRtcC5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXEuZGF0YSA9IEpTT04ucGFyc2UocmVxLmRhdGEsIG9wdHMucmV2aXZlcik7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGFwcGx5KHJlcSwgZXJyKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVqKGVycik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0KHJlcS5zdGF0dXMgPj0gNDAwID8gcmVqIDogcmVzKShyZXEpO1xuXHRcdH07XG5cblx0XHRpZiAoKHN0ciA9IG9wdHMuYm9keSkgJiYgdHlwZW9mIHN0ciA9PSAnb2JqZWN0Jykge1xuXHRcdFx0aGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cdFx0XHRzdHIgPSBKU09OLnN0cmluZ2lmeShzdHIpO1xuXHRcdH1cblxuXHRcdHJlcS53aXRoQ3JlZGVudGlhbHMgPSAhIW9wdHMud2l0aENyZWRlbnRpYWxzO1xuXG5cdFx0Zm9yIChrIGluIGhlYWRlcnMpIHtcblx0XHRcdHJlcS5zZXRSZXF1ZXN0SGVhZGVyKGssIGhlYWRlcnNba10pO1xuXHRcdH1cblxuXHRcdHJlcS5zZW5kKHN0cik7XG5cdH0pO1xufVxuXG5leHBvcnRzLmdldCA9IGV4cG9ydHMuc2VuZC5iaW5kKGV4cG9ydHMuc2VuZCwgJ0dFVCcpO1xuZXhwb3J0cy5wb3N0ID0gZXhwb3J0cy5zZW5kLmJpbmQoZXhwb3J0cy5zZW5kLCAnUE9TVCcpO1xuZXhwb3J0cy5wYXRjaCA9IGV4cG9ydHMuc2VuZC5iaW5kKGV4cG9ydHMuc2VuZCwgJ1BBVENIJyk7XG5leHBvcnRzLmRlbCA9IGV4cG9ydHMuc2VuZC5iaW5kKGV4cG9ydHMuc2VuZCwgJ0RFTEVURScpO1xuZXhwb3J0cy5wdXQgPSBleHBvcnRzLnNlbmQuYmluZChleHBvcnRzLnNlbmQsICdQVVQnKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBhcmVfMSA9IHJlcXVpcmUoXCIuL2NvbXBhcmVcIik7XG52YXIgU3RhdGVDb250YWluZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RhdGVDb250YWluZXIoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5tYXRjaGVyUGxhY2Vob2xkZXJzID0ge1xuICAgICAgICAgICAgXCI6aWRcIjogL14oW2EtekEtWjAtOVxcLV9dKykkLyxcbiAgICAgICAgICAgIFwiOm51bWJlclwiOiAvXihbMC05XSspJC8sXG4gICAgICAgICAgICBcIjpzdHJpbmdcIjogL14oXFx3KykkLyxcbiAgICAgICAgICAgIFwiOmF4aXNcIjogL14oW3h5el0pJC8sXG4gICAgICAgICAgICBcIjoqXCI6IC8oLiopLyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICAgIFN0YXRlQ29udGFpbmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAobmV3U3RhdGUpIHtcbiAgICAgICAgdmFyIHBhdGNoZXMgPSBjb21wYXJlXzEuY29tcGFyZSh0aGlzLnN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgdGhpcy5jaGVja1BhdGNoZXMocGF0Y2hlcywgdGhpcy5saXN0ZW5lcnMsIHRoaXMuZGVmYXVsdExpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHBhdGNoZXM7XG4gICAgfTtcbiAgICBTdGF0ZUNvbnRhaW5lci5wcm90b3R5cGUucmVnaXN0ZXJQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIChwbGFjZWhvbGRlciwgbWF0Y2hlcikge1xuICAgICAgICB0aGlzLm1hdGNoZXJQbGFjZWhvbGRlcnNbcGxhY2Vob2xkZXJdID0gbWF0Y2hlcjtcbiAgICB9O1xuICAgIFN0YXRlQ29udGFpbmVyLnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiAoc2VnbWVudHMsIGNhbGxiYWNrLCBpbW1lZGlhdGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJ1bGVzO1xuICAgICAgICBpZiAodHlwZW9mIChzZWdtZW50cykgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcnVsZXMgPSBbXTtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gc2VnbWVudHM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBydWxlcyA9IHNlZ21lbnRzLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbGJhY2subGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiLmxpc3RlbigpIGFjY2VwdHMgb25seSBvbmUgcGFyYW1ldGVyLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGlzdGVuZXIgPSB7XG4gICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgICAgICByYXdSdWxlczogcnVsZXMsXG4gICAgICAgICAgICBydWxlczogcnVsZXMubWFwKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoc2VnbWVudCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVwbGFjZSBwbGFjZWhvbGRlciBtYXRjaGVyc1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHNlZ21lbnQuaW5kZXhPZihcIjpcIikgPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF90aGlzLm1hdGNoZXJQbGFjZWhvbGRlcnNbc2VnbWVudF0gfHwgX3RoaXMubWF0Y2hlclBsYWNlaG9sZGVyc1tcIjoqXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBSZWdFeHAoXCJeXCIgKyBzZWdtZW50ICsgXCIkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlZ21lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHJ1bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGltbWVkaWF0ZWxseSB0cnkgdG8gdHJpZ2dlciB0aGlzIGxpc3RlbmVyLlxuICAgICAgICBpZiAoaW1tZWRpYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrUGF0Y2hlcyhjb21wYXJlXzEuY29tcGFyZSh7fSwgdGhpcy5zdGF0ZSksIFtsaXN0ZW5lcl0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9O1xuICAgIFN0YXRlQ29udGFpbmVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RlbmVyc1tpXSA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0YXRlQ29udGFpbmVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9O1xuICAgIFN0YXRlQ29udGFpbmVyLnByb3RvdHlwZS5jaGVja1BhdGNoZXMgPSBmdW5jdGlvbiAocGF0Y2hlcywgbGlzdGVuZXJzLCBkZWZhdWx0TGlzdGVuZXIpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2pdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHBhdGNoZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgcGF0aFZhcmlhYmxlcyA9IGxpc3RlbmVyICYmIHRoaXMuZ2V0UGF0aFZhcmlhYmxlcyhwYXRjaGVzW2ldLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgaWYgKHBhdGhWYXJpYWJsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogcGF0aFZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd1BhdGg6IHBhdGNoZXNbaV0ucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogcGF0Y2hlc1tpXS5vcGVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGF0Y2hlc1tpXS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hlc1tpXS5tYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdHJpZ2dlciBkZWZhdWx0IGxpc3RlbmVyIGNhbGxiYWNrIHdpdGggZWFjaCB1bm1hdGNoZWQgcGF0Y2hcbiAgICAgICAgaWYgKGRlZmF1bHRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHBhdGNoZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoIXBhdGNoZXNbaV0ubWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TGlzdGVuZXIuY2FsbGJhY2socGF0Y2hlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdGF0ZUNvbnRhaW5lci5wcm90b3R5cGUuZ2V0UGF0aFZhcmlhYmxlcyA9IGZ1bmN0aW9uIChwYXRjaCwgbGlzdGVuZXIpIHtcbiAgICAgICAgLy8gc2tpcCBpZiBydWxlcyBjb3VudCBkaWZmZXIgZnJvbSBwYXRjaFxuICAgICAgICBpZiAocGF0Y2gucGF0aC5sZW5ndGggIT09IGxpc3RlbmVyLnJ1bGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXRoID0ge307XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsaXN0ZW5lci5ydWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBwYXRjaC5wYXRoW2ldLm1hdGNoKGxpc3RlbmVyLnJ1bGVzW2ldKTtcbiAgICAgICAgICAgIGlmICghbWF0Y2hlcyB8fCBtYXRjaGVzLmxlbmd0aCA9PT0gMCB8fCBtYXRjaGVzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsaXN0ZW5lci5yYXdSdWxlc1tpXS5zdWJzdHIoMCwgMSkgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICAgICAgcGF0aFtsaXN0ZW5lci5yYXdSdWxlc1tpXS5zdWJzdHIoMSldID0gbWF0Y2hlc1sxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xuICAgIFN0YXRlQ29udGFpbmVyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB9O1xuICAgIHJldHVybiBTdGF0ZUNvbnRhaW5lcjtcbn0oKSk7XG5leHBvcnRzLlN0YXRlQ29udGFpbmVyID0gU3RhdGVDb250YWluZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGNvbXBhcmUodHJlZTEsIHRyZWUyKSB7XG4gICAgdmFyIHBhdGNoZXMgPSBbXTtcbiAgICBnZW5lcmF0ZSh0cmVlMSwgdHJlZTIsIHBhdGNoZXMsIFtdKTtcbiAgICByZXR1cm4gcGF0Y2hlcztcbn1cbmV4cG9ydHMuY29tcGFyZSA9IGNvbXBhcmU7XG5mdW5jdGlvbiBjb25jYXQoYXJyLCB2YWx1ZSkge1xuICAgIHZhciBuZXdBcnIgPSBhcnIuc2xpY2UoKTtcbiAgICBuZXdBcnIucHVzaCh2YWx1ZSk7XG4gICAgcmV0dXJuIG5ld0Fycjtcbn1cbmZ1bmN0aW9uIG9iamVjdEtleXMob2JqKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICB2YXIga2V5c18xID0gbmV3IEFycmF5KG9iai5sZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGtleXNfMS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAga2V5c18xW2tdID0gXCJcIiArIGs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleXNfMTtcbiAgICB9XG4gICAgaWYgKE9iamVjdC5rZXlzKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopO1xuICAgIH1cbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbn1cbjtcbi8vIERpcnR5IGNoZWNrIGlmIG9iaiBpcyBkaWZmZXJlbnQgZnJvbSBtaXJyb3IsIGdlbmVyYXRlIHBhdGNoZXMgYW5kIHVwZGF0ZSBtaXJyb3JcbmZ1bmN0aW9uIGdlbmVyYXRlKG1pcnJvciwgb2JqLCBwYXRjaGVzLCBwYXRoKSB7XG4gICAgdmFyIG5ld0tleXMgPSBvYmplY3RLZXlzKG9iaik7XG4gICAgdmFyIG9sZEtleXMgPSBvYmplY3RLZXlzKG1pcnJvcik7XG4gICAgdmFyIGRlbGV0ZWQgPSBmYWxzZTtcbiAgICBmb3IgKHZhciB0ID0gb2xkS2V5cy5sZW5ndGggLSAxOyB0ID49IDA7IHQtLSkge1xuICAgICAgICB2YXIga2V5ID0gb2xkS2V5c1t0XTtcbiAgICAgICAgdmFyIG9sZFZhbCA9IG1pcnJvcltrZXldO1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkgJiYgIShvYmpba2V5XSA9PT0gdW5kZWZpbmVkICYmIG9sZFZhbCAhPT0gdW5kZWZpbmVkICYmIEFycmF5LmlzQXJyYXkob2JqKSA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsID0gb2JqW2tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9sZFZhbCA9PSBcIm9iamVjdFwiICYmIG9sZFZhbCAhPSBudWxsICYmIHR5cGVvZiBuZXdWYWwgPT0gXCJvYmplY3RcIiAmJiBuZXdWYWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlKG9sZFZhbCwgbmV3VmFsLCBwYXRjaGVzLCBjb25jYXQocGF0aCwga2V5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAob2xkVmFsICE9PSBuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogXCJyZXBsYWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBjb25jYXQocGF0aCwga2V5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXdWYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1ZhbHVlOiBvbGRWYWxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGF0Y2hlcy5wdXNoKHsgb3BlcmF0aW9uOiBcInJlbW92ZVwiLCBwYXRoOiBjb25jYXQocGF0aCwga2V5KSB9KTtcbiAgICAgICAgICAgIGRlbGV0ZWQgPSB0cnVlOyAvLyBwcm9wZXJ0eSBoYXMgYmVlbiBkZWxldGVkXG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFkZWxldGVkICYmIG5ld0tleXMubGVuZ3RoID09IG9sZEtleXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yICh2YXIgdCA9IG5ld0tleXMubGVuZ3RoIC0gMTsgdCA+PSAwOyB0LS0pIHtcbiAgICAgICAgdmFyIGtleSA9IG5ld0tleXNbdF07XG4gICAgICAgIGlmICghbWlycm9yLmhhc093blByb3BlcnR5KGtleSkgJiYgb2JqW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbCA9IG9ialtrZXldO1xuICAgICAgICAgICAgdmFyIGFkZFBhdGggPSBjb25jYXQocGF0aCwga2V5KTtcbiAgICAgICAgICAgIC8vIGNvbXBhcmUgZGVlcGVyIGFkZGl0aW9uc1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdWYWwgPT0gXCJvYmplY3RcIiAmJiBuZXdWYWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlKHt9LCBuZXdWYWwsIHBhdGNoZXMsIGFkZFBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0Y2hlcy5wdXNoKHsgb3BlcmF0aW9uOiBcImFkZFwiLCBwYXRoOiBhZGRQYXRoLCB2YWx1ZTogbmV3VmFsIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3RhdGVDb250YWluZXJfMSA9IHJlcXVpcmUoXCIuL1N0YXRlQ29udGFpbmVyXCIpO1xuZXhwb3J0cy5TdGF0ZUNvbnRhaW5lciA9IFN0YXRlQ29udGFpbmVyXzEuU3RhdGVDb250YWluZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6dHJ1ZX0pO2V4cG9ydHMuY3JlYXRlQmFja29mZj1jcmVhdGVCYWNrb2ZmO3ZhciBiYWNrb2ZmPXtleHBvbmVudGlhbDpmdW5jdGlvbiBleHBvbmVudGlhbChhdHRlbXB0LGRlbGF5KXtyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKk1hdGgucG93KDIsYXR0ZW1wdCkqZGVsYXkpO30sZmlib25hY2NpOmZ1bmN0aW9uIGZpYm9uYWNjaShhdHRlbXB0LGRlbGF5KXt2YXIgY3VycmVudD0xO2lmKGF0dGVtcHQ+Y3VycmVudCl7dmFyIHByZXY9MSxjdXJyZW50PTI7Zm9yKHZhciBpbmRleD0yO2luZGV4PGF0dGVtcHQ7aW5kZXgrKyl7dmFyIG5leHQ9cHJlditjdXJyZW50O3ByZXY9Y3VycmVudDtjdXJyZW50PW5leHQ7fX1yZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmN1cnJlbnQqZGVsYXkpO319O2Z1bmN0aW9uIGNyZWF0ZUJhY2tvZmYodHlwZSxvcHRpb25zKXtyZXR1cm4gbmV3IEJhY2tvZmYoYmFja29mZlt0eXBlXSxvcHRpb25zKTt9ZnVuY3Rpb24gQmFja29mZihmdW5jLG9wdGlvbnMpe3RoaXMuZnVuYz1mdW5jO3RoaXMuYXR0ZW1wdHM9MDt0aGlzLmRlbGF5PXR5cGVvZiBvcHRpb25zLmluaXRpYWxEZWxheSE9PVwidW5kZWZpbmVkXCI/b3B0aW9ucy5pbml0aWFsRGVsYXk6MTAwO31CYWNrb2ZmLnByb3RvdHlwZS5iYWNrb2ZmPWZ1bmN0aW9uKCl7c2V0VGltZW91dCh0aGlzLm9uUmVhZHksdGhpcy5mdW5jKCsrdGhpcy5hdHRlbXB0cyx0aGlzLmRlbGF5KSk7fTsiLCIndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOnRydWV9KTt2YXIgX2NyZWF0ZUNsYXNzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQscHJvcHMpe2Zvcih2YXIgaT0wO2k8cHJvcHMubGVuZ3RoO2krKyl7dmFyIGRlc2NyaXB0b3I9cHJvcHNbaV07ZGVzY3JpcHRvci5lbnVtZXJhYmxlPWRlc2NyaXB0b3IuZW51bWVyYWJsZXx8ZmFsc2U7ZGVzY3JpcHRvci5jb25maWd1cmFibGU9dHJ1ZTtpZihcInZhbHVlXCJpbiBkZXNjcmlwdG9yKWRlc2NyaXB0b3Iud3JpdGFibGU9dHJ1ZTtPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LGRlc2NyaXB0b3Iua2V5LGRlc2NyaXB0b3IpO319cmV0dXJuIGZ1bmN0aW9uKENvbnN0cnVjdG9yLHByb3RvUHJvcHMsc3RhdGljUHJvcHMpe2lmKHByb3RvUHJvcHMpZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUscHJvdG9Qcm9wcyk7aWYoc3RhdGljUHJvcHMpZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3RvcixzdGF0aWNQcm9wcyk7cmV0dXJuIENvbnN0cnVjdG9yO307fSgpO2Z1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSxDb25zdHJ1Y3Rvcil7aWYoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTt9fXZhciBjcmVhdGVCYWNrb2ZmPXJlcXVpcmUoJy4vYmFja29mZicpLmNyZWF0ZUJhY2tvZmY7dmFyIFdlYlNvY2tldEltcGw9dHlwZW9mIFdlYlNvY2tldCE9PVwidW5kZWZpbmVkXCI/V2ViU29ja2V0OnJlcXVpcmUoJ3dzJyk7dmFyIFdlYlNvY2tldENsaWVudD1mdW5jdGlvbigpey8qKlxuICAgKiBAcGFyYW0gdXJsIERPTVN0cmluZyBUaGUgVVJMIHRvIHdoaWNoIHRvIGNvbm5lY3Q7IHRoaXMgc2hvdWxkIGJlIHRoZSBVUkwgdG8gd2hpY2ggdGhlIFdlYlNvY2tldCBzZXJ2ZXIgd2lsbCByZXNwb25kLlxuICAgKiBAcGFyYW0gcHJvdG9jb2xzIERPTVN0cmluZ3xET01TdHJpbmdbXSBFaXRoZXIgYSBzaW5nbGUgcHJvdG9jb2wgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHByb3RvY29sIHN0cmluZ3MuIFRoZXNlIHN0cmluZ3MgYXJlIHVzZWQgdG8gaW5kaWNhdGUgc3ViLXByb3RvY29scywgc28gdGhhdCBhIHNpbmdsZSBzZXJ2ZXIgY2FuIGltcGxlbWVudCBtdWx0aXBsZSBXZWJTb2NrZXQgc3ViLXByb3RvY29scyAoZm9yIGV4YW1wbGUsIHlvdSBtaWdodCB3YW50IG9uZSBzZXJ2ZXIgdG8gYmUgYWJsZSB0byBoYW5kbGUgZGlmZmVyZW50IHR5cGVzIG9mIGludGVyYWN0aW9ucyBkZXBlbmRpbmcgb24gdGhlIHNwZWNpZmllZCBwcm90b2NvbCkuIElmIHlvdSBkb24ndCBzcGVjaWZ5IGEgcHJvdG9jb2wgc3RyaW5nLCBhbiBlbXB0eSBzdHJpbmcgaXMgYXNzdW1lZC5cbiAgICovZnVuY3Rpb24gV2ViU29ja2V0Q2xpZW50KHVybCxwcm90b2NvbHMpe3ZhciBvcHRpb25zPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1syXTp7fTtfY2xhc3NDYWxsQ2hlY2sodGhpcyxXZWJTb2NrZXRDbGllbnQpO3RoaXMudXJsPXVybDt0aGlzLnByb3RvY29scz1wcm90b2NvbHM7dGhpcy5yZWNvbm5lY3RFbmFibGVkPXRydWU7dGhpcy5saXN0ZW5lcnM9e307dGhpcy5iYWNrb2ZmPWNyZWF0ZUJhY2tvZmYob3B0aW9ucy5iYWNrb2ZmfHwnZXhwb25lbnRpYWwnLG9wdGlvbnMpO3RoaXMuYmFja29mZi5vblJlYWR5PXRoaXMub25CYWNrb2ZmUmVhZHkuYmluZCh0aGlzKTtpZih0eXBlb2Ygb3B0aW9ucy5jb25uZWN0PT09XCJ1bmRlZmluZWRcInx8b3B0aW9ucy5jb25uZWN0KXt0aGlzLm9wZW4oKTt9fV9jcmVhdGVDbGFzcyhXZWJTb2NrZXRDbGllbnQsW3trZXk6J29wZW4nLHZhbHVlOmZ1bmN0aW9uIG9wZW4oKXt2YXIgcmVjb25uZWN0PWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTpmYWxzZTt0aGlzLmlzUmVjb25uZWN0PXJlY29ubmVjdDsvLyBrZWVwIGJpbmFyeVR5cGUgdXNlZCBvbiBwcmV2aW91cyBXZWJTb2NrZXQgY29ubmVjdGlvblxudmFyIGJpbmFyeVR5cGU9dGhpcy53cyYmdGhpcy53cy5iaW5hcnlUeXBlO3RoaXMud3M9bmV3IFdlYlNvY2tldEltcGwodGhpcy51cmwsdGhpcy5wcm90b2NvbHMpO3RoaXMud3Mub25jbG9zZT10aGlzLm9uQ2xvc2VDYWxsYmFjay5iaW5kKHRoaXMpO3RoaXMud3Mub25lcnJvcj10aGlzLm9uRXJyb3JDYWxsYmFjay5iaW5kKHRoaXMpO3RoaXMud3Mub25tZXNzYWdlPXRoaXMub25NZXNzYWdlQ2FsbGJhY2suYmluZCh0aGlzKTt0aGlzLndzLm9ub3Blbj10aGlzLm9uT3BlbkNhbGxiYWNrLmJpbmQodGhpcyk7aWYoYmluYXJ5VHlwZSl7dGhpcy53cy5iaW5hcnlUeXBlPWJpbmFyeVR5cGU7fX0vKipcbiAgICogQGlnbm9yZVxuICAgKi99LHtrZXk6J29uQmFja29mZlJlYWR5Jyx2YWx1ZTpmdW5jdGlvbiBvbkJhY2tvZmZSZWFkeShudW1iZXIsZGVsYXkpey8vIGNvbnNvbGUubG9nKFwib25CYWNrb2ZmUmVhZHlcIiwgbnVtYmVyICsgJyAnICsgZGVsYXkgKyAnbXMnKTtcbnRoaXMub3Blbih0cnVlKTt9LyoqXG4gICAqIEBpZ25vcmVcbiAgICovfSx7a2V5OidvbkNsb3NlQ2FsbGJhY2snLHZhbHVlOmZ1bmN0aW9uIG9uQ2xvc2VDYWxsYmFjayhlKXtpZighdGhpcy5pc1JlY29ubmVjdCYmdGhpcy5saXN0ZW5lcnNbJ29uY2xvc2UnXSl7dGhpcy5saXN0ZW5lcnNbJ29uY2xvc2UnXS5hcHBseShudWxsLGFyZ3VtZW50cyk7fWlmKHRoaXMucmVjb25uZWN0RW5hYmxlZCYmZS5jb2RlPDMwMDApe3RoaXMuYmFja29mZi5iYWNrb2ZmKCk7fX0vKipcbiAgICogQGlnbm9yZVxuICAgKi99LHtrZXk6J29uRXJyb3JDYWxsYmFjaycsdmFsdWU6ZnVuY3Rpb24gb25FcnJvckNhbGxiYWNrKCl7aWYodGhpcy5saXN0ZW5lcnNbJ29uZXJyb3InXSl7dGhpcy5saXN0ZW5lcnNbJ29uZXJyb3InXS5hcHBseShudWxsLGFyZ3VtZW50cyk7fX0vKipcbiAgICogQGlnbm9yZVxuICAgKi99LHtrZXk6J29uTWVzc2FnZUNhbGxiYWNrJyx2YWx1ZTpmdW5jdGlvbiBvbk1lc3NhZ2VDYWxsYmFjaygpe2lmKHRoaXMubGlzdGVuZXJzWydvbm1lc3NhZ2UnXSl7dGhpcy5saXN0ZW5lcnNbJ29ubWVzc2FnZSddLmFwcGx5KG51bGwsYXJndW1lbnRzKTt9fS8qKlxuICAgKiBAaWdub3JlXG4gICAqL30se2tleTonb25PcGVuQ2FsbGJhY2snLHZhbHVlOmZ1bmN0aW9uIG9uT3BlbkNhbGxiYWNrKCl7aWYodGhpcy5saXN0ZW5lcnNbJ29ub3BlbiddKXt0aGlzLmxpc3RlbmVyc1snb25vcGVuJ10uYXBwbHkobnVsbCxhcmd1bWVudHMpO31pZih0aGlzLmlzUmVjb25uZWN0JiZ0aGlzLmxpc3RlbmVyc1snb25yZWNvbm5lY3QnXSl7dGhpcy5saXN0ZW5lcnNbJ29ucmVjb25uZWN0J10uYXBwbHkobnVsbCxhcmd1bWVudHMpO310aGlzLmlzUmVjb25uZWN0PWZhbHNlO30vKipcbiAgICogVGhlIG51bWJlciBvZiBieXRlcyBvZiBkYXRhIHRoYXQgaGF2ZSBiZWVuIHF1ZXVlZCB1c2luZyBjYWxscyB0byBzZW5kKClcbiAgICogYnV0IG5vdCB5ZXQgdHJhbnNtaXR0ZWQgdG8gdGhlIG5ldHdvcmsuIFRoaXMgdmFsdWUgZG9lcyBub3QgcmVzZXQgdG8gemVyb1xuICAgKiB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIGNsb3NlZDsgaWYgeW91IGtlZXAgY2FsbGluZyBzZW5kKCksIHRoaXMgd2lsbFxuICAgKiBjb250aW51ZSB0byBjbGltYi5cbiAgICpcbiAgICogQHR5cGUgdW5zaWduZWQgbG9uZ1xuICAgKiBAcmVhZG9ubHlcbiAgICovfSx7a2V5OidjbG9zZScsLyoqXG4gICAqIENsb3NlcyB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb24gb3IgY29ubmVjdGlvbiBhdHRlbXB0LCBpZiBhbnkuIElmIHRoZVxuICAgKiBjb25uZWN0aW9uIGlzIGFscmVhZHkgQ0xPU0VELCB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAqXG4gICAqIEBwYXJhbSBjb2RlIEEgbnVtZXJpYyB2YWx1ZSBpbmRpY2F0aW5nIHRoZSBzdGF0dXMgY29kZSBleHBsYWluaW5nIHdoeSB0aGUgY29ubmVjdGlvbiBpcyBiZWluZyBjbG9zZWQuIElmIHRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzcGVjaWZpZWQsIGEgZGVmYXVsdCB2YWx1ZSBvZiAxMDAwIChpbmRpY2F0aW5nIGEgbm9ybWFsIFwidHJhbnNhY3Rpb24gY29tcGxldGVcIiBjbG9zdXJlKSBpcyBhc3N1bWVkLiBTZWUgdGhlIGxpc3Qgb2Ygc3RhdHVzIGNvZGVzIG9uIHRoZSBDbG9zZUV2ZW50IHBhZ2UgZm9yIHBlcm1pdHRlZCB2YWx1ZXMuXG4gICAqIEBwYXJhbSByZWFzb24gQSBodW1hbi1yZWFkYWJsZSBzdHJpbmcgZXhwbGFpbmluZyB3aHkgdGhlIGNvbm5lY3Rpb24gaXMgY2xvc2luZy4gVGhpcyBzdHJpbmcgbXVzdCBiZSBubyBsb25nZXIgdGhhbiAxMjMgYnl0ZXMgb2YgVVRGLTggdGV4dCAobm90IGNoYXJhY3RlcnMpLlxuICAgKlxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovdmFsdWU6ZnVuY3Rpb24gY2xvc2UoY29kZSxyZWFzb24pe2lmKHR5cGVvZiBjb2RlPT0ndW5kZWZpbmVkJyl7Y29kZT0xMDAwO310aGlzLnJlY29ubmVjdEVuYWJsZWQ9ZmFsc2U7dGhpcy53cy5jbG9zZShjb2RlLHJlYXNvbik7fS8qKlxuICAgKiBUcmFuc21pdHMgZGF0YSB0byB0aGUgc2VydmVyIG92ZXIgdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uLlxuICAgKiBAcGFyYW0gZGF0YSBET01TdHJpbmd8QXJyYXlCdWZmZXJ8QmxvYlxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovfSx7a2V5OidzZW5kJyx2YWx1ZTpmdW5jdGlvbiBzZW5kKGRhdGEpe3RoaXMud3Muc2VuZChkYXRhKTt9LyoqXG4gICAqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvbidzIHJlYWR5U3RhdGUgY2hhbmdlcyB0byBDTE9TRUQuIFRoZSBsaXN0ZW5lciByZWNlaXZlcyBhIENsb3NlRXZlbnQgbmFtZWQgXCJjbG9zZVwiLlxuICAgKiBAcGFyYW0gbGlzdGVuZXIgRXZlbnRMaXN0ZW5lclxuICAgKi99LHtrZXk6J2J1ZmZlcmVkQW1vdW50JyxnZXQ6ZnVuY3Rpb24gZ2V0KCl7cmV0dXJuIHRoaXMud3MuYnVmZmVyZWRBbW91bnQ7fS8qKlxuICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgY29ubmVjdGlvbjsgdGhpcyBpcyBvbmUgb2YgdGhlIFJlYWR5IHN0YXRlIGNvbnN0YW50cy5cbiAgICogQHR5cGUgdW5zaWduZWQgc2hvcnRcbiAgICogQHJlYWRvbmx5XG4gICAqL30se2tleToncmVhZHlTdGF0ZScsZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiB0aGlzLndzLnJlYWR5U3RhdGU7fS8qKlxuICAgKiBBIHN0cmluZyBpbmRpY2F0aW5nIHRoZSB0eXBlIG9mIGJpbmFyeSBkYXRhIGJlaW5nIHRyYW5zbWl0dGVkIGJ5IHRoZVxuICAgKiBjb25uZWN0aW9uLiBUaGlzIHNob3VsZCBiZSBlaXRoZXIgXCJibG9iXCIgaWYgRE9NIEJsb2Igb2JqZWN0cyBhcmUgYmVpbmdcbiAgICogdXNlZCBvciBcImFycmF5YnVmZmVyXCIgaWYgQXJyYXlCdWZmZXIgb2JqZWN0cyBhcmUgYmVpbmcgdXNlZC5cbiAgICogQHR5cGUgRE9NU3RyaW5nXG4gICAqL30se2tleTonYmluYXJ5VHlwZScsZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiB0aGlzLndzLmJpbmFyeVR5cGU7fSxzZXQ6ZnVuY3Rpb24gc2V0KGJpbmFyeVR5cGUpe3RoaXMud3MuYmluYXJ5VHlwZT1iaW5hcnlUeXBlO30vKipcbiAgICogVGhlIGV4dGVuc2lvbnMgc2VsZWN0ZWQgYnkgdGhlIHNlcnZlci4gVGhpcyBpcyBjdXJyZW50bHkgb25seSB0aGUgZW1wdHlcbiAgICogc3RyaW5nIG9yIGEgbGlzdCBvZiBleHRlbnNpb25zIGFzIG5lZ290aWF0ZWQgYnkgdGhlIGNvbm5lY3Rpb24uXG4gICAqIEB0eXBlIERPTVN0cmluZ1xuICAgKi99LHtrZXk6J2V4dGVuc2lvbnMnLGdldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gdGhpcy53cy5leHRlbnNpb25zO30sc2V0OmZ1bmN0aW9uIHNldChleHRlbnNpb25zKXt0aGlzLndzLmV4dGVuc2lvbnM9ZXh0ZW5zaW9uczt9LyoqXG4gICAqIEEgc3RyaW5nIGluZGljYXRpbmcgdGhlIG5hbWUgb2YgdGhlIHN1Yi1wcm90b2NvbCB0aGUgc2VydmVyIHNlbGVjdGVkO1xuICAgKiB0aGlzIHdpbGwgYmUgb25lIG9mIHRoZSBzdHJpbmdzIHNwZWNpZmllZCBpbiB0aGUgcHJvdG9jb2xzIHBhcmFtZXRlciB3aGVuXG4gICAqIGNyZWF0aW5nIHRoZSBXZWJTb2NrZXQgb2JqZWN0LlxuICAgKiBAdHlwZSBET01TdHJpbmdcbiAgICovfSx7a2V5Oidwcm90b2NvbCcsZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiB0aGlzLndzLnByb3RvY29sO30sc2V0OmZ1bmN0aW9uIHNldChwcm90b2NvbCl7dGhpcy53cy5wcm90b2NvbD1wcm90b2NvbDt9fSx7a2V5OidvbmNsb3NlJyxzZXQ6ZnVuY3Rpb24gc2V0KGxpc3RlbmVyKXt0aGlzLmxpc3RlbmVyc1snb25jbG9zZSddPWxpc3RlbmVyO30sZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiB0aGlzLmxpc3RlbmVyc1snb25jbG9zZSddO30vKipcbiAgICogQW4gZXZlbnQgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gYW4gZXJyb3Igb2NjdXJzLiBUaGlzIGlzIGEgc2ltcGxlIGV2ZW50IG5hbWVkIFwiZXJyb3JcIi5cbiAgICogQHBhcmFtIGxpc3RlbmVyIEV2ZW50TGlzdGVuZXJcbiAgICovfSx7a2V5OidvbmVycm9yJyxzZXQ6ZnVuY3Rpb24gc2V0KGxpc3RlbmVyKXt0aGlzLmxpc3RlbmVyc1snb25lcnJvciddPWxpc3RlbmVyO30sZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiB0aGlzLmxpc3RlbmVyc1snb25lcnJvciddO30vKipcbiAgICogQW4gZXZlbnQgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gYSBtZXNzYWdlIGlzIHJlY2VpdmVkIGZyb20gdGhlIHNlcnZlci4gVGhlIGxpc3RlbmVyIHJlY2VpdmVzIGEgTWVzc2FnZUV2ZW50IG5hbWVkIFwibWVzc2FnZVwiLlxuICAgKiBAcGFyYW0gbGlzdGVuZXIgRXZlbnRMaXN0ZW5lclxuICAgKi99LHtrZXk6J29ubWVzc2FnZScsc2V0OmZ1bmN0aW9uIHNldChsaXN0ZW5lcil7dGhpcy5saXN0ZW5lcnNbJ29ubWVzc2FnZSddPWxpc3RlbmVyO30sZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiB0aGlzLmxpc3RlbmVyc1snb25tZXNzYWdlJ107fS8qKlxuICAgKiBBbiBldmVudCBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb24ncyByZWFkeVN0YXRlIGNoYW5nZXMgdG8gT1BFTjsgdGhpcyBpbmRpY2F0ZXMgdGhhdCB0aGUgY29ubmVjdGlvbiBpcyByZWFkeSB0byBzZW5kIGFuZCByZWNlaXZlIGRhdGEuIFRoZSBldmVudCBpcyBhIHNpbXBsZSBvbmUgd2l0aCB0aGUgbmFtZSBcIm9wZW5cIi5cbiAgICogQHBhcmFtIGxpc3RlbmVyIEV2ZW50TGlzdGVuZXJcbiAgICovfSx7a2V5Oidvbm9wZW4nLHNldDpmdW5jdGlvbiBzZXQobGlzdGVuZXIpe3RoaXMubGlzdGVuZXJzWydvbm9wZW4nXT1saXN0ZW5lcjt9LGdldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gdGhpcy5saXN0ZW5lcnNbJ29ub3BlbiddO30vKipcbiAgICogQHBhcmFtIGxpc3RlbmVyIEV2ZW50TGlzdGVuZXJcbiAgICovfSx7a2V5OidvbnJlY29ubmVjdCcsc2V0OmZ1bmN0aW9uIHNldChsaXN0ZW5lcil7dGhpcy5saXN0ZW5lcnNbJ29ucmVjb25uZWN0J109bGlzdGVuZXI7fSxnZXQ6ZnVuY3Rpb24gZ2V0KCl7cmV0dXJuIHRoaXMubGlzdGVuZXJzWydvbnJlY29ubmVjdCddO319XSk7cmV0dXJuIFdlYlNvY2tldENsaWVudDt9KCk7LyoqXG4gKiBUaGUgY29ubmVjdGlvbiBpcyBub3QgeWV0IG9wZW4uXG4gKi9XZWJTb2NrZXRDbGllbnQuQ09OTkVDVElORz1XZWJTb2NrZXRJbXBsLkNPTk5FQ1RJTkc7LyoqXG4gKiBUaGUgY29ubmVjdGlvbiBpcyBvcGVuIGFuZCByZWFkeSB0byBjb21tdW5pY2F0ZS5cbiAqL1dlYlNvY2tldENsaWVudC5PUEVOPVdlYlNvY2tldEltcGwuT1BFTjsvKipcbiAqIFRoZSBjb25uZWN0aW9uIGlzIGluIHRoZSBwcm9jZXNzIG9mIGNsb3NpbmcuXG4gKi9XZWJTb2NrZXRDbGllbnQuQ0xPU0lORz1XZWJTb2NrZXRJbXBsLkNMT1NJTkc7LyoqXG4gKiBUaGUgY29ubmVjdGlvbiBpcyBjbG9zZWQgb3IgY291bGRuJ3QgYmUgb3BlbmVkLlxuICovV2ViU29ja2V0Q2xpZW50LkNMT1NFRD1XZWJTb2NrZXRJbXBsLkNMT1NFRDtleHBvcnRzLmRlZmF1bHQ9V2ViU29ja2V0Q2xpZW50OyIsIi8vIEZvc3NpbCBTQ00gZGVsdGEgY29tcHJlc3Npb24gYWxnb3JpdGhtXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy9cbi8vIEZvcm1hdDpcbi8vIGh0dHA6Ly93d3cuZm9zc2lsLXNjbS5vcmcvaW5kZXguaHRtbC9kb2MvdGlwL3d3dy9kZWx0YV9mb3JtYXQud2lraVxuLy9cbi8vIEFsZ29yaXRobTpcbi8vIGh0dHA6Ly93d3cuZm9zc2lsLXNjbS5vcmcvaW5kZXguaHRtbC9kb2MvdGlwL3d3dy9kZWx0YV9lbmNvZGVyX2FsZ29yaXRobS53aWtpXG4vL1xuLy8gT3JpZ2luYWwgaW1wbGVtZW50YXRpb246XG4vLyBodHRwOi8vd3d3LmZvc3NpbC1zY20ub3JnL2luZGV4Lmh0bWwvYXJ0aWZhY3QvZDFiMDU5OGFkY2Q2NTBiMzU1MWY2M2IxN2RmYzg2NGU3Mzc3NWMzZFxuLy9cbi8vIExJQ0VOU0Vcbi8vIC0tLS0tLS1cbi8vXG4vLyBDb3B5cmlnaHQgMjAxNCBEbWl0cnkgQ2hlc3RueWtoIChKYXZhU2NyaXB0IHBvcnQpXG4vLyBDb3B5cmlnaHQgMjAwNyBELiBSaWNoYXJkIEhpcHAgIChvcmlnaW5hbCBDIHZlcnNpb24pXG4vLyBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Jcbi8vIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuLy9cbi8vICAgMS4gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZVxuLy8gICAgICBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlXG4vLyAgICAgIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy9cbi8vICAgMi4gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gICAgICBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlXG4vLyAgICAgIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlclxuLy8gICAgICBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIEFVVEhPUlMgYGBBUyBJUycnIEFORCBBTlkgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcbi8vIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuLy8gQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPTlRSSUJVVE9SUyBCRVxuLy8gTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuLy8gQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0Zcbi8vIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUlxuLy8gQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4vLyBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRVxuLy8gT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSxcbi8vIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4vL1xuLy8gVGhlIHZpZXdzIGFuZCBjb25jbHVzaW9ucyBjb250YWluZWQgaW4gdGhlIHNvZnR3YXJlIGFuZCBkb2N1bWVudGF0aW9uXG4vLyBhcmUgdGhvc2Ugb2YgdGhlIGF1dGhvcnMgYW5kIGNvbnRyaWJ1dG9ycyBhbmQgc2hvdWxkIG5vdCBiZSBpbnRlcnByZXRlZFxuLy8gYXMgcmVwcmVzZW50aW5nIG9mZmljaWFsIHBvbGljaWVzLCBlaXRoZXIgZXhwcmVzc2VkIG9yIGltcGxpZWQsIG9mIGFueWJvZHlcbi8vIGVsc2UuXG4vL1xuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgZWxzZSByb290LmZvc3NpbERlbHRhID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBmb3NzaWxEZWx0YSA9IHt9O1xuXG4vLyBIYXNoIHdpbmRvdyB3aWR0aCBpbiBieXRlcy4gTXVzdCBiZSBhIHBvd2VyIG9mIHR3by5cbnZhciBOSEFTSCA9IDE2O1xuXG5mdW5jdGlvbiBSb2xsaW5nSGFzaCgpIHtcbiAgdGhpcy5hID0gMDsgLy8gaGFzaCAgICAgKDE2LWJpdCB1bnNpZ25lZClcbiAgdGhpcy5iID0gMDsgLy8gdmFsdWVzICAgKDE2LWJpdCB1bnNpZ25lZClcbiAgdGhpcy5pID0gMDsgLy8gc3RhcnQgb2YgdGhlIGhhc2ggd2luZG93ICgxNi1iaXQgdW5zaWduZWQpXG4gIHRoaXMueiA9IG5ldyBBcnJheShOSEFTSCk7IC8vIHRoZSB2YWx1ZXMgdGhhdCBoYXZlIGJlZW4gaGFzaGVkLlxufVxuXG4vLyBJbml0aWFsaXplIHRoZSByb2xsaW5nIGhhc2ggdXNpbmcgdGhlIGZpcnN0IE5IQVNIIGJ5dGVzIG9mXG4vLyB6IGF0IHRoZSBnaXZlbiBwb3NpdGlvbi5cblJvbGxpbmdIYXNoLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oeiwgcG9zKSB7XG4gIHZhciBhID0gMCwgYiA9IDAsIGksIHg7XG4gIGZvcihpID0gMDsgaSA8IE5IQVNIOyBpKyspe1xuICAgIHggPSB6W3BvcytpXTtcbiAgICBhID0gKGEgKyB4KSAmIDB4ZmZmZjtcbiAgICBiID0gKGIgKyAoTkhBU0gtaSkqeCkgJiAweGZmZmY7XG4gICAgdGhpcy56W2ldID0geDtcbiAgfVxuICB0aGlzLmEgPSBhICYgMHhmZmZmO1xuICB0aGlzLmIgPSBiICYgMHhmZmZmO1xuICB0aGlzLmkgPSAwO1xufTtcblxuLy8gQWR2YW5jZSB0aGUgcm9sbGluZyBoYXNoIGJ5IGEgc2luZ2xlIGJ5dGUgXCJjXCIuXG5Sb2xsaW5nSGFzaC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKGMpIHtcbiAgdmFyIG9sZCA9IHRoaXMuelt0aGlzLmldO1xuICB0aGlzLnpbdGhpcy5pXSA9IGM7XG4gIHRoaXMuaSA9ICh0aGlzLmkrMSkmKE5IQVNILTEpO1xuICB0aGlzLmEgPSAodGhpcy5hIC0gb2xkICsgYykgJiAweGZmZmY7XG4gIHRoaXMuYiA9ICh0aGlzLmIgLSBOSEFTSCpvbGQgKyB0aGlzLmEpICYgMHhmZmZmO1xufTtcblxuLy8gUmV0dXJuIGEgMzItYml0IGhhc2ggdmFsdWUuXG5Sb2xsaW5nSGFzaC5wcm90b3R5cGUudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICgodGhpcy5hICYgMHhmZmZmKSB8ICh0aGlzLmIgJiAweGZmZmYpPDwxNik+Pj4wO1xufTtcblxudmFyIHpEaWdpdHMgPSBcIjAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWl9hYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5en5cIi5cbiAgICAgICAgICAgICAgICBzcGxpdCgnJykubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LmNoYXJDb2RlQXQoMCk7IH0pO1xuXG52YXIgelZhbHVlID0gW1xuICAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsICAgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLFxuICAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsICAgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLFxuICAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsICAgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLFxuICAgMCwgIDEsICAyLCAgMywgIDQsICA1LCAgNiwgIDcsICAgIDgsICA5LCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLFxuICAtMSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsICAgMTcsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjMsIDI0LFxuICAyNSwgMjYsIDI3LCAyOCwgMjksIDMwLCAzMSwgMzIsICAgMzMsIDM0LCAzNSwgLTEsIC0xLCAtMSwgLTEsIDM2LFxuICAtMSwgMzcsIDM4LCAzOSwgNDAsIDQxLCA0MiwgNDMsICAgNDQsIDQ1LCA0NiwgNDcsIDQ4LCA0OSwgNTAsIDUxLFxuICA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3LCA1OCwgNTksICAgNjAsIDYxLCA2MiwgLTEsIC0xLCAtMSwgNjMsIC0xXG5dO1xuXG4vLyBSZWFkZXIgcmVhZHMgYnl0ZXMsIGNoYXJzLCBpbnRzIGZyb20gYXJyYXkuXG5mdW5jdGlvbiBSZWFkZXIoYXJyYXkpIHtcbiAgdGhpcy5hID0gYXJyYXk7IC8vIHNvdXJjZSBhcnJheVxuICB0aGlzLnBvcyA9IDA7ICAgLy8gY3VycmVudCBwb3NpdGlvbiBpbiBhcnJheVxufVxuXG5SZWFkZXIucHJvdG90eXBlLmhhdmVCeXRlcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wb3MgPCB0aGlzLmEubGVuZ3RoO1xufTtcblxuUmVhZGVyLnByb3RvdHlwZS5nZXRCeXRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBiID0gdGhpcy5hW3RoaXMucG9zXTtcbiAgdGhpcy5wb3MrKztcbiAgaWYgKHRoaXMucG9zID4gdGhpcy5hLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiBib3VuZHMnKTtcbiAgcmV0dXJuIGI7XG59O1xuXG5SZWFkZXIucHJvdG90eXBlLmdldENoYXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy5nZXRCeXRlKCkpO1xufTtcblxuLy8gUmVhZCBiYXNlNjQtZW5jb2RlZCB1bnNpZ25lZCBpbnRlZ2VyLlxuUmVhZGVyLnByb3RvdHlwZS5nZXRJbnQgPSBmdW5jdGlvbigpe1xuICB2YXIgdiA9IDAsIGM7XG4gIHdoaWxlKHRoaXMuaGF2ZUJ5dGVzKCkgJiYgKGMgPSB6VmFsdWVbMHg3ZiAmIHRoaXMuZ2V0Qnl0ZSgpXSkgPj0gMCkge1xuICAgICB2ID0gKHY8PDYpICsgYztcbiAgfVxuICB0aGlzLnBvcy0tO1xuICByZXR1cm4gdiA+Pj4gMDtcbn07XG5cblxuLy8gV3JpdGUgd3JpdGVzIGFuIGFycmF5LlxuZnVuY3Rpb24gV3JpdGVyKCkge1xuICB0aGlzLmEgPSBbXTtcbn1cblxuV3JpdGVyLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmE7XG59O1xuXG5Xcml0ZXIucHJvdG90eXBlLnB1dEJ5dGUgPSBmdW5jdGlvbihiKSB7XG4gIHRoaXMuYS5wdXNoKGIgJiAweGZmKTtcbn07XG5cbi8vIFdyaXRlIGFuIEFTQ0lJIGNoYXJhY3RlciAocyBpcyBhIG9uZS1jaGFyIHN0cmluZykuXG5Xcml0ZXIucHJvdG90eXBlLnB1dENoYXIgPSBmdW5jdGlvbihzKSB7XG4gIHRoaXMucHV0Qnl0ZShzLmNoYXJDb2RlQXQoMCkpO1xufTtcblxuLy8gV3JpdGUgYSBiYXNlNjQgdW5zaWduZWQgaW50ZWdlci5cbldyaXRlci5wcm90b3R5cGUucHV0SW50ID0gZnVuY3Rpb24odil7XG4gIHZhciBpLCBqLCB6QnVmID0gW107XG4gIGlmICh2ID09PSAwKSB7XG4gICAgdGhpcy5wdXRDaGFyKCcwJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAoaSA9IDA7IHYgPiAwOyBpKyssIHYgPj4+PSA2KVxuICAgIHpCdWYucHVzaCh6RGlnaXRzW3YmMHgzZl0pO1xuICBmb3IgKGogPSBpLTE7IGogPj0gMDsgai0tKVxuICAgIHRoaXMucHV0Qnl0ZSh6QnVmW2pdKTtcbn07XG5cbi8vIENvcHkgZnJvbSBhcnJheSBhdCBzdGFydCB0byBlbmQuXG5Xcml0ZXIucHJvdG90eXBlLnB1dEFycmF5ID0gZnVuY3Rpb24oYSwgc3RhcnQsIGVuZCkge1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykgdGhpcy5hLnB1c2goYVtpXSk7XG59O1xuXG4vLyBSZXR1cm4gdGhlIG51bWJlciBkaWdpdHMgaW4gdGhlIGJhc2U2NCByZXByZXNlbnRhdGlvbiBvZiBhIHBvc2l0aXZlIGludGVnZXIuXG5mdW5jdGlvbiBkaWdpdENvdW50KHYpe1xuICB2YXIgaSwgeDtcbiAgZm9yIChpID0gMSwgeCA9IDY0OyB2ID49IHg7IGkrKywgeCA8PD0gNil7IC8qIG5vdGhpbmcgKi8gfVxuICByZXR1cm4gaTtcbn1cblxuLy8gUmV0dXJuIGEgMzItYml0IGNoZWNrc3VtIG9mIHRoZSBhcnJheS5cbmZ1bmN0aW9uIGNoZWNrc3VtKGFycikge1xuICB2YXIgc3VtMCA9IDAsIHN1bTEgPSAwLCBzdW0yID0gMCwgc3VtMyA9IDAsXG4gICAgICB6ID0gMCwgTiA9IGFyci5sZW5ndGg7XG4gIC8vVE9ETyBtZWFzdXJlIGlmIHRoaXMgdW5yb2xsaW5nIGlzIGhlbHBmdWwuXG4gIHdoaWxlIChOID49IDE2KSB7XG4gICAgc3VtMCA9IHN1bTAgKyBhcnJbeiswXSB8IDA7XG4gICAgc3VtMSA9IHN1bTEgKyBhcnJbeisxXSB8IDA7XG4gICAgc3VtMiA9IHN1bTIgKyBhcnJbeisyXSB8IDA7XG4gICAgc3VtMyA9IHN1bTMgKyBhcnJbeiszXSB8IDA7XG5cbiAgICBzdW0wID0gc3VtMCArIGFyclt6KzRdIHwgMDtcbiAgICBzdW0xID0gc3VtMSArIGFyclt6KzVdIHwgMDtcbiAgICBzdW0yID0gc3VtMiArIGFyclt6KzZdIHwgMDtcbiAgICBzdW0zID0gc3VtMyArIGFyclt6KzddIHwgMDtcblxuICAgIHN1bTAgPSBzdW0wICsgYXJyW3orOF0gfCAwO1xuICAgIHN1bTEgPSBzdW0xICsgYXJyW3orOV0gfCAwO1xuICAgIHN1bTIgPSBzdW0yICsgYXJyW3orMTBdIHwgMDtcbiAgICBzdW0zID0gc3VtMyArIGFyclt6KzExXSB8IDA7XG5cbiAgICBzdW0wID0gc3VtMCArIGFyclt6KzEyXSB8IDA7XG4gICAgc3VtMSA9IHN1bTEgKyBhcnJbeisxM10gfCAwO1xuICAgIHN1bTIgPSBzdW0yICsgYXJyW3orMTRdIHwgMDtcbiAgICBzdW0zID0gc3VtMyArIGFyclt6KzE1XSB8IDA7XG5cbiAgICB6ICs9IDE2O1xuICAgIE4gLT0gMTY7XG4gIH1cbiAgd2hpbGUgKE4gPj0gNCkge1xuICAgIHN1bTAgPSBzdW0wICsgYXJyW3orMF0gfCAwO1xuICAgIHN1bTEgPSBzdW0xICsgYXJyW3orMV0gfCAwO1xuICAgIHN1bTIgPSBzdW0yICsgYXJyW3orMl0gfCAwO1xuICAgIHN1bTMgPSBzdW0zICsgYXJyW3orM10gfCAwO1xuICAgIHogKz0gNDtcbiAgICBOIC09IDQ7XG4gIH1cbiAgc3VtMyA9ICgoKHN1bTMgKyAoc3VtMiA8PCA4KSB8IDApICsgKHN1bTEgPDwgMTYpIHwgMCkgKyAoc3VtMCA8PCAyNCkgfCAwKTtcbiAgLyoganNoaW50IC1XMDg2ICovXG4gIHN3aXRjaCAoTikge1xuICAgIGNhc2UgMzogc3VtMyA9IHN1bTMgKyAoYXJyW3orMl0gPDwgIDgpIHwgMDsgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgIGNhc2UgMjogc3VtMyA9IHN1bTMgKyAoYXJyW3orMV0gPDwgMTYpIHwgMDsgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgIGNhc2UgMTogc3VtMyA9IHN1bTMgKyAoYXJyW3orMF0gPDwgMjQpIHwgMDsgLyogZmFsbHMgdGhyb3VnaCAqL1xuICB9XG4gIHJldHVybiBzdW0zID4+PiAwO1xufVxuXG4vLyBDcmVhdGUgYSBuZXcgZGVsdGEgZnJvbSBzcmMgdG8gb3V0LlxuZm9zc2lsRGVsdGEuY3JlYXRlID0gZnVuY3Rpb24oc3JjLCBvdXQpIHtcbiAgdmFyIHpEZWx0YSA9IG5ldyBXcml0ZXIoKTtcbiAgdmFyIGxlbk91dCA9IG91dC5sZW5ndGg7XG4gIHZhciBsZW5TcmMgPSBzcmMubGVuZ3RoO1xuICB2YXIgaSwgbGFzdFJlYWQgPSAtMTtcblxuICB6RGVsdGEucHV0SW50KGxlbk91dCk7XG4gIHpEZWx0YS5wdXRDaGFyKCdcXG4nKTtcblxuICAvLyBJZiB0aGUgc291cmNlIGlzIHZlcnkgc21hbGwsIGl0IG1lYW5zIHRoYXQgd2UgaGF2ZSBub1xuICAvLyBjaGFuY2Ugb2YgZXZlciBkb2luZyBhIGNvcHkgY29tbWFuZC4gIEp1c3Qgb3V0cHV0IGEgc2luZ2xlXG4gIC8vIGxpdGVyYWwgc2VnbWVudCBmb3IgdGhlIGVudGlyZSB0YXJnZXQgYW5kIGV4aXQuXG4gIGlmIChsZW5TcmMgPD0gTkhBU0gpIHtcbiAgICB6RGVsdGEucHV0SW50KGxlbk91dCk7XG4gICAgekRlbHRhLnB1dENoYXIoJzonKTtcbiAgICB6RGVsdGEucHV0QXJyYXkob3V0LCAwLCBsZW5PdXQpO1xuICAgIHpEZWx0YS5wdXRJbnQoY2hlY2tzdW0ob3V0KSk7XG4gICAgekRlbHRhLnB1dENoYXIoJzsnKTtcbiAgICByZXR1cm4gekRlbHRhLnRvQXJyYXkoKTtcbiAgfVxuXG4gIC8vIENvbXB1dGUgdGhlIGhhc2ggdGFibGUgdXNlZCB0byBsb2NhdGUgbWF0Y2hpbmcgc2VjdGlvbnMgaW4gdGhlIHNvdXJjZS5cbiAgdmFyIG5IYXNoID0gTWF0aC5jZWlsKGxlblNyYyAvIE5IQVNIKTtcbiAgdmFyIGNvbGxpZGUgPSAgbmV3IEFycmF5KG5IYXNoKTtcbiAgdmFyIGxhbmRtYXJrID0gbmV3IEFycmF5KG5IYXNoKTtcbiAgZm9yIChpID0gMDsgaSA8IGNvbGxpZGUubGVuZ3RoOyBpKyspIGNvbGxpZGVbaV0gPSAtMTtcbiAgZm9yIChpID0gMDsgaSA8IGxhbmRtYXJrLmxlbmd0aDsgaSsrKSBsYW5kbWFya1tpXSA9IC0xO1xuICB2YXIgaHYsIGggPSBuZXcgUm9sbGluZ0hhc2goKTtcbiAgZm9yIChpID0gMDsgaSA8IGxlblNyYy1OSEFTSDsgaSArPSBOSEFTSCkge1xuICAgIGguaW5pdChzcmMsIGkpO1xuICAgIGh2ID0gaC52YWx1ZSgpICUgbkhhc2g7XG4gICAgY29sbGlkZVtpL05IQVNIXSA9IGxhbmRtYXJrW2h2XTtcbiAgICBsYW5kbWFya1todl0gPSBpL05IQVNIO1xuICB9XG5cbiAgdmFyIGJhc2UgPSAwO1xuICB2YXIgaVNyYywgaUJsb2NrLCBiZXN0Q250LCBiZXN0T2ZzdCwgYmVzdExpdHN6O1xuICB3aGlsZSAoYmFzZStOSEFTSDxsZW5PdXQpIHtcbiAgICBiZXN0T2ZzdD0wO1xuICAgIGJlc3RMaXRzej0wO1xuICAgIGguaW5pdChvdXQsIGJhc2UpO1xuICAgIGkgPSAwOyAvLyBUcnlpbmcgdG8gbWF0Y2ggYSBsYW5kbWFyayBhZ2FpbnN0IHpPdXRbYmFzZStpXVxuICAgIGJlc3RDbnQgPSAwO1xuICAgIHdoaWxlKDEpIHtcbiAgICAgIHZhciBsaW1pdCA9IDI1MDtcbiAgICAgIGh2ID0gaC52YWx1ZSgpICUgbkhhc2g7XG4gICAgICBpQmxvY2sgPSBsYW5kbWFya1todl07XG4gICAgICB3aGlsZSAoaUJsb2NrID49IDAgJiYgKGxpbWl0LS0pPjAgKSB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRoZSBoYXNoIHdpbmRvdyBoYXMgaWRlbnRpZmllZCBhIHBvdGVudGlhbCBtYXRjaCBhZ2FpbnN0XG4gICAgICAgIC8vIGxhbmRtYXJrIGJsb2NrIGlCbG9jay4gIEJ1dCB3ZSBuZWVkIHRvIGludmVzdGlnYXRlIGZ1cnRoZXIuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIExvb2sgZm9yIGEgcmVnaW9uIGluIHpPdXQgdGhhdCBtYXRjaGVzIHpTcmMuIEFuY2hvciB0aGUgc2VhcmNoXG4gICAgICAgIC8vIGF0IHpTcmNbaVNyY10gYW5kIHpPdXRbYmFzZStpXS4gIERvIG5vdCBpbmNsdWRlIGFueXRoaW5nIHByaW9yIHRvXG4gICAgICAgIC8vIHpPdXRbYmFzZV0gb3IgYWZ0ZXIgek91dFtvdXRMZW5dIG5vciBhbnl0aGluZyBhZnRlciB6U3JjW3NyY0xlbl0uXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFNldCBjbnQgZXF1YWwgdG8gdGhlIGxlbmd0aCBvZiB0aGUgbWF0Y2ggYW5kIHNldCBvZnN0IHNvIHRoYXRcbiAgICAgICAgLy8gelNyY1tvZnN0XSBpcyB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgbWF0Y2guICBsaXRzeiBpcyB0aGUgbnVtYmVyXG4gICAgICAgIC8vIG9mIGNoYXJhY3RlcnMgYmV0d2VlbiB6T3V0W2Jhc2VdIGFuZCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBtYXRjaC5cbiAgICAgICAgLy8gc3ogd2lsbCBiZSB0aGUgb3ZlcmhlYWQgKGluIGJ5dGVzKSBuZWVkZWQgdG8gZW5jb2RlIHRoZSBjb3B5XG4gICAgICAgIC8vIGNvbW1hbmQuICBPbmx5IGdlbmVyYXRlIGNvcHkgY29tbWFuZCBpZiB0aGUgb3ZlcmhlYWQgb2YgdGhlXG4gICAgICAgIC8vIGNvcHkgY29tbWFuZCBpcyBsZXNzIHRoYW4gdGhlIGFtb3VudCBvZiBsaXRlcmFsIHRleHQgdG8gYmUgY29waWVkLlxuICAgICAgICAvL1xuICAgICAgICB2YXIgY250LCBvZnN0LCBsaXRzejtcbiAgICAgICAgdmFyIGosIGssIHgsIHk7XG4gICAgICAgIHZhciBzejtcblxuICAgICAgICAvLyBCZWdpbm5pbmcgYXQgaVNyYywgbWF0Y2ggZm9yd2FyZHMgYXMgZmFyIGFzIHdlIGNhbi5cbiAgICAgICAgLy8gaiBjb3VudHMgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgbWF0Y2guXG4gICAgICAgIGlTcmMgPSBpQmxvY2sqTkhBU0g7XG4gICAgICAgIGZvciAoaiA9IDAsIHggPSBpU3JjLCB5ID0gYmFzZStpOyB4IDwgbGVuU3JjICYmIHkgPCBsZW5PdXQ7IGorKywgeCsrLCB5KyspIHtcbiAgICAgICAgICBpZiAoc3JjW3hdICE9PSBvdXRbeV0pIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGotLTtcblxuICAgICAgICAvLyBCZWdpbm5pbmcgYXQgaVNyYy0xLCBtYXRjaCBiYWNrd2FyZHMgYXMgZmFyIGFzIHdlIGNhbi5cbiAgICAgICAgLy8gayBjb3VudHMgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgbWF0Y2guXG4gICAgICAgIGZvciAoayA9IDE7IGsgPCBpU3JjICYmIGsgPD0gaTsgaysrKSB7XG4gICAgICAgICAgaWYgKHNyY1tpU3JjLWtdICE9PSBvdXRbYmFzZStpLWtdKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBrLS07XG5cbiAgICAgICAgLy8gQ29tcHV0ZSB0aGUgb2Zmc2V0IGFuZCBzaXplIG9mIHRoZSBtYXRjaGluZyByZWdpb24uXG4gICAgICAgIG9mc3QgPSBpU3JjLWs7XG4gICAgICAgIGNudCA9IGoraysxO1xuICAgICAgICBsaXRzeiA9IGktazsgIC8vIE51bWJlciBvZiBieXRlcyBvZiBsaXRlcmFsIHRleHQgYmVmb3JlIHRoZSBjb3B5XG4gICAgICAgIC8vIHN6IHdpbGwgaG9sZCB0aGUgbnVtYmVyIG9mIGJ5dGVzIG5lZWRlZCB0byBlbmNvZGUgdGhlIFwiaW5zZXJ0XCJcbiAgICAgICAgLy8gY29tbWFuZCBhbmQgdGhlIGNvcHkgY29tbWFuZCwgbm90IGNvdW50aW5nIHRoZSBcImluc2VydFwiIHRleHQuXG4gICAgICAgIHN6ID0gZGlnaXRDb3VudChpLWspK2RpZ2l0Q291bnQoY250KStkaWdpdENvdW50KG9mc3QpKzM7XG4gICAgICAgIGlmIChjbnQgPj0gc3ogJiYgY250ID4gYmVzdENudCkge1xuICAgICAgICAgIC8vIFJlbWVtYmVyIHRoaXMgbWF0Y2ggb25seSBpZiBpdCBpcyB0aGUgYmVzdCBzbyBmYXIgYW5kIGl0XG4gICAgICAgICAgLy8gZG9lcyBub3QgaW5jcmVhc2UgdGhlIGZpbGUgc2l6ZS5cbiAgICAgICAgICBiZXN0Q250ID0gY250O1xuICAgICAgICAgIGJlc3RPZnN0ID0gaVNyYy1rO1xuICAgICAgICAgIGJlc3RMaXRzeiA9IGxpdHN6O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgdGhlIG5leHQgbWF0Y2hpbmcgYmxvY2tcbiAgICAgICAgaUJsb2NrID0gY29sbGlkZVtpQmxvY2tdO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSBoYXZlIGEgY29weSBjb21tYW5kIHRoYXQgZG9lcyBub3QgY2F1c2UgdGhlIGRlbHRhIHRvIGJlIGxhcmdlclxuICAgICAgLy8gdGhhbiBhIGxpdGVyYWwgaW5zZXJ0LiAgU28gYWRkIHRoZSBjb3B5IGNvbW1hbmQgdG8gdGhlIGRlbHRhLlxuICAgICAgaWYgKGJlc3RDbnQgPiAwKSB7XG4gICAgICAgIGlmIChiZXN0TGl0c3ogPiAwKSB7XG4gICAgICAgICAgLy8gQWRkIGFuIGluc2VydCBjb21tYW5kIGJlZm9yZSB0aGUgY29weS5cbiAgICAgICAgICB6RGVsdGEucHV0SW50KGJlc3RMaXRzeik7XG4gICAgICAgICAgekRlbHRhLnB1dENoYXIoJzonKTtcbiAgICAgICAgICB6RGVsdGEucHV0QXJyYXkob3V0LCBiYXNlLCBiYXNlK2Jlc3RMaXRzeik7XG4gICAgICAgICAgYmFzZSArPSBiZXN0TGl0c3o7XG4gICAgICAgIH1cbiAgICAgICAgYmFzZSArPSBiZXN0Q250O1xuICAgICAgICB6RGVsdGEucHV0SW50KGJlc3RDbnQpO1xuICAgICAgICB6RGVsdGEucHV0Q2hhcignQCcpO1xuICAgICAgICB6RGVsdGEucHV0SW50KGJlc3RPZnN0KTtcbiAgICAgICAgekRlbHRhLnB1dENoYXIoJywnKTtcbiAgICAgICAgaWYgKGJlc3RPZnN0ICsgYmVzdENudCAtMSA+IGxhc3RSZWFkKSB7XG4gICAgICAgICAgbGFzdFJlYWQgPSBiZXN0T2ZzdCArIGJlc3RDbnQgLSAxO1xuICAgICAgICB9XG4gICAgICAgIGJlc3RDbnQgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2UgcmVhY2ggdGhpcyBwb2ludCwgaXQgbWVhbnMgbm8gbWF0Y2ggaXMgZm91bmQgc28gZmFyXG4gICAgICBpZiAoYmFzZStpK05IQVNIID49IGxlbk91dCl7XG4gICAgICAgIC8vIFdlIGhhdmUgcmVhY2hlZCB0aGUgZW5kIGFuZCBoYXZlIG5vdCBmb3VuZCBhbnlcbiAgICAgICAgLy8gbWF0Y2hlcy4gIERvIGFuIFwiaW5zZXJ0XCIgZm9yIGV2ZXJ5dGhpbmcgdGhhdCBkb2VzIG5vdCBtYXRjaFxuICAgICAgICB6RGVsdGEucHV0SW50KGxlbk91dC1iYXNlKTtcbiAgICAgICAgekRlbHRhLnB1dENoYXIoJzonKTtcbiAgICAgICAgekRlbHRhLnB1dEFycmF5KG91dCwgYmFzZSwgYmFzZStsZW5PdXQtYmFzZSk7XG4gICAgICAgIGJhc2UgPSBsZW5PdXQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBBZHZhbmNlIHRoZSBoYXNoIGJ5IG9uZSBjaGFyYWN0ZXIuIEtlZXAgbG9va2luZyBmb3IgYSBtYXRjaC5cbiAgICAgIGgubmV4dChvdXRbYmFzZStpK05IQVNIXSk7XG4gICAgICBpKys7XG4gICAgfVxuICB9XG4gIC8vIE91dHB1dCBhIGZpbmFsIFwiaW5zZXJ0XCIgcmVjb3JkIHRvIGdldCBhbGwgdGhlIHRleHQgYXQgdGhlIGVuZCBvZlxuICAvLyB0aGUgZmlsZSB0aGF0IGRvZXMgbm90IG1hdGNoIGFueXRoaW5nIGluIHRoZSBzb3VyY2UuXG4gIGlmKGJhc2UgPCBsZW5PdXQpIHtcbiAgICB6RGVsdGEucHV0SW50KGxlbk91dC1iYXNlKTtcbiAgICB6RGVsdGEucHV0Q2hhcignOicpO1xuICAgIHpEZWx0YS5wdXRBcnJheShvdXQsIGJhc2UsIGJhc2UrbGVuT3V0LWJhc2UpO1xuICB9XG4gIC8vIE91dHB1dCB0aGUgZmluYWwgY2hlY2tzdW0gcmVjb3JkLlxuICB6RGVsdGEucHV0SW50KGNoZWNrc3VtKG91dCkpO1xuICB6RGVsdGEucHV0Q2hhcignOycpO1xuICByZXR1cm4gekRlbHRhLnRvQXJyYXkoKTtcbn07XG5cbi8vIFJldHVybiB0aGUgc2l6ZSAoaW4gYnl0ZXMpIG9mIHRoZSBvdXRwdXQgZnJvbSBhcHBseWluZyBhIGRlbHRhLlxuZm9zc2lsRGVsdGEub3V0cHV0U2l6ZSA9IGZ1bmN0aW9uKGRlbHRhKXtcbiAgdmFyIHpEZWx0YSA9IG5ldyBSZWFkZXIoZGVsdGEpO1xuICB2YXIgc2l6ZSA9IHpEZWx0YS5nZXRJbnQoKTtcbiAgaWYgKHpEZWx0YS5nZXRDaGFyKCkgIT09ICdcXG4nKVxuICAgIHRocm93IG5ldyBFcnJvcignc2l6ZSBpbnRlZ2VyIG5vdCB0ZXJtaW5hdGVkIGJ5IFxcJ1xcXFxuXFwnJyk7XG4gIHJldHVybiBzaXplO1xufTtcblxuLy8gQXBwbHkgYSBkZWx0YS5cbmZvc3NpbERlbHRhLmFwcGx5ID0gZnVuY3Rpb24oc3JjLCBkZWx0YSwgb3B0cykge1xuICB2YXIgbGltaXQsIHRvdGFsID0gMDtcbiAgdmFyIHpEZWx0YSA9IG5ldyBSZWFkZXIoZGVsdGEpO1xuICB2YXIgbGVuU3JjID0gc3JjLmxlbmd0aDtcbiAgdmFyIGxlbkRlbHRhID0gZGVsdGEubGVuZ3RoO1xuXG4gIGxpbWl0ID0gekRlbHRhLmdldEludCgpO1xuICBpZiAoekRlbHRhLmdldENoYXIoKSAhPT0gJ1xcbicpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdzaXplIGludGVnZXIgbm90IHRlcm1pbmF0ZWQgYnkgXFwnXFxcXG5cXCcnKTtcbiAgdmFyIHpPdXQgPSBuZXcgV3JpdGVyKCk7XG4gIHdoaWxlKHpEZWx0YS5oYXZlQnl0ZXMoKSkge1xuICAgIHZhciBjbnQsIG9mc3Q7XG4gICAgY250ID0gekRlbHRhLmdldEludCgpO1xuXG4gICAgc3dpdGNoICh6RGVsdGEuZ2V0Q2hhcigpKSB7XG4gICAgICBjYXNlICdAJzpcbiAgICAgICAgb2ZzdCA9IHpEZWx0YS5nZXRJbnQoKTtcbiAgICAgICAgaWYgKHpEZWx0YS5oYXZlQnl0ZXMoKSAmJiB6RGVsdGEuZ2V0Q2hhcigpICE9PSAnLCcpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3B5IGNvbW1hbmQgbm90IHRlcm1pbmF0ZWQgYnkgXFwnLFxcJycpO1xuICAgICAgICB0b3RhbCArPSBjbnQ7XG4gICAgICAgIGlmICh0b3RhbCA+IGxpbWl0KVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29weSBleGNlZWRzIG91dHB1dCBmaWxlIHNpemUnKTtcbiAgICAgICAgaWYgKG9mc3QrY250ID4gbGVuU3JjKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29weSBleHRlbmRzIHBhc3QgZW5kIG9mIGlucHV0Jyk7XG4gICAgICAgIHpPdXQucHV0QXJyYXkoc3JjLCBvZnN0LCBvZnN0K2NudCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICc6JzpcbiAgICAgICAgdG90YWwgKz0gY250O1xuICAgICAgICBpZiAodG90YWwgPiBsaW1pdClcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2luc2VydCBjb21tYW5kIGdpdmVzIGFuIG91dHB1dCBsYXJnZXIgdGhhbiBwcmVkaWN0ZWQnKTtcbiAgICAgICAgaWYgKGNudCA+IGxlbkRlbHRhKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW5zZXJ0IGNvdW50IGV4Y2VlZHMgc2l6ZSBvZiBkZWx0YScpO1xuICAgICAgICB6T3V0LnB1dEFycmF5KHpEZWx0YS5hLCB6RGVsdGEucG9zLCB6RGVsdGEucG9zK2NudCk7XG4gICAgICAgIHpEZWx0YS5wb3MgKz0gY250O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnOyc6XG4gICAgICAgIHZhciBvdXQgPSB6T3V0LnRvQXJyYXkoKTtcbiAgICAgICAgaWYgKCghb3B0cyB8fCBvcHRzLnZlcmlmeUNoZWNrc3VtICE9PSBmYWxzZSkgJiYgY250ICE9PSBjaGVja3N1bShvdXQpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYmFkIGNoZWNrc3VtJyk7XG4gICAgICAgIGlmICh0b3RhbCAhPT0gbGltaXQpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZW5lcmF0ZWQgc2l6ZSBkb2VzIG5vdCBtYXRjaCBwcmVkaWN0ZWQgc2l6ZScpO1xuICAgICAgICByZXR1cm4gb3V0O1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gZGVsdGEgb3BlcmF0b3InKTtcbiAgICB9XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCd1bnRlcm1pbmF0ZWQgZGVsdGEnKTtcbn07XG5cbnJldHVybiBmb3NzaWxEZWx0YTtcblxufSk7XG4iLCJsZXQgY3JlYXRlTmFub0V2ZW50cyA9ICgpID0+ICh7XG4gIGV2ZW50czoge30sXG4gIGVtaXQgKGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgZm9yIChsZXQgaSBvZiB0aGlzLmV2ZW50c1tldmVudF0gfHwgW10pIHtcbiAgICAgIGkoLi4uYXJncylcbiAgICB9XG4gIH0sXG4gIG9uIChldmVudCwgY2IpIHtcbiAgICA7KHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XSB8fCBbXSkucHVzaChjYilcbiAgICByZXR1cm4gKCkgPT4gKHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XS5maWx0ZXIoaSA9PiBpICE9PSBjYikpXG4gIH1cbn0pXG5cbmV4cG9ydCB7IGNyZWF0ZU5hbm9FdmVudHMgfVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRXZlbnRFbWl0dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIH1cbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGNiLCBvbmNlKSB7XG4gICAgICAgIGlmIChvbmNlID09PSB2b2lkIDApIHsgb25jZSA9IGZhbHNlOyB9XG4gICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaChjYik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5pbnZva2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiBoYW5kbGVyLmFwcGx5KHZvaWQgMCwgYXJncyk7IH0pO1xuICAgIH07XG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5pbnZva2VBc3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5oYW5kbGVycy5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIGhhbmRsZXIuYXBwbHkodm9pZCAwLCBhcmdzKTsgfSkpO1xuICAgIH07XG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5oYW5kbGVycy5pbmRleE9mKGNiKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyc1tpbmRleF0gPSB0aGlzLmhhbmRsZXJzW3RoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHRoaXMuaGFuZGxlcnMucG9wKCk7XG4gICAgfTtcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgfTtcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyO1xufSgpKTtcbmV4cG9ydHMuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuZnVuY3Rpb24gY3JlYXRlU2lnbmFsKCkge1xuICAgIHZhciBlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyKGNiKSB7XG4gICAgICAgIHJldHVybiBlbWl0dGVyLnJlZ2lzdGVyKGNiLCB0aGlzID09PSBudWxsKTtcbiAgICB9XG4gICAgO1xuICAgIHJlZ2lzdGVyLm9uY2UgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2IuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgICAgICAgIGVtaXR0ZXIucmVtb3ZlKGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICAgICAgZW1pdHRlci5yZWdpc3RlcihjYWxsYmFjayk7XG4gICAgfTtcbiAgICByZWdpc3Rlci5yZW1vdmUgPSBmdW5jdGlvbiAoY2IpIHsgcmV0dXJuIGVtaXR0ZXIucmVtb3ZlKGNiKTsgfTtcbiAgICByZWdpc3Rlci5pbnZva2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVtaXR0ZXIuaW52b2tlLmFwcGx5KGVtaXR0ZXIsIGFyZ3MpO1xuICAgIH07XG4gICAgcmVnaXN0ZXIuaW52b2tlQXN5bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVtaXR0ZXIuaW52b2tlQXN5bmMuYXBwbHkoZW1pdHRlciwgYXJncyk7XG4gICAgfTtcbiAgICByZWdpc3Rlci5jbGVhciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVtaXR0ZXIuY2xlYXIoKTsgfTtcbiAgICByZXR1cm4gcmVnaXN0ZXI7XG59XG5leHBvcnRzLmNyZWF0ZVNpZ25hbCA9IGNyZWF0ZVNpZ25hbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DaGFuZ2VUcmVlID0gdm9pZCAwO1xudmFyIFNjaGVtYV8xID0gcmVxdWlyZShcIi4vU2NoZW1hXCIpO1xudmFyIEFycmF5U2NoZW1hXzEgPSByZXF1aXJlKFwiLi90eXBlcy9BcnJheVNjaGVtYVwiKTtcbnZhciBNYXBTY2hlbWFfMSA9IHJlcXVpcmUoXCIuL3R5cGVzL01hcFNjaGVtYVwiKTtcbnZhciBDaGFuZ2VUcmVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENoYW5nZVRyZWUoaW5kZXhlcywgcGFyZW50RmllbGQsIHBhcmVudCkge1xuICAgICAgICBpZiAoaW5kZXhlcyA9PT0gdm9pZCAwKSB7IGluZGV4ZXMgPSB7fTsgfVxuICAgICAgICBpZiAocGFyZW50RmllbGQgPT09IHZvaWQgMCkgeyBwYXJlbnRGaWVsZCA9IG51bGw7IH1cbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hhbmdlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5hbGxDaGFuZ2VzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmRlbGV0ZWRLZXlzID0ge307XG4gICAgICAgIHRoaXMuZmllbGRJbmRleGVzID0gaW5kZXhlcztcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMucGFyZW50RmllbGQgPSBwYXJlbnRGaWVsZDtcbiAgICB9XG4gICAgQ2hhbmdlVHJlZS5wcm90b3R5cGUuY2hhbmdlID0gZnVuY3Rpb24gKGZpZWxkTmFtZSwgaXNEZWxldGUpIHtcbiAgICAgICAgaWYgKGlzRGVsZXRlID09PSB2b2lkIDApIHsgaXNEZWxldGUgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgZmllbGRJbmRleCA9IHRoaXMuZmllbGRJbmRleGVzW2ZpZWxkTmFtZV07XG4gICAgICAgIHZhciBmaWVsZCA9ICh0eXBlb2YgKGZpZWxkSW5kZXgpID09PSBcIm51bWJlclwiKSA/IGZpZWxkSW5kZXggOiBmaWVsZE5hbWU7XG4gICAgICAgIGlmICghaXNEZWxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZXMuYWRkKGZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMuYWxsQ2hhbmdlcy5hZGQoZmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzRGVsZXRlKSB7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5jaGFuZ2VzLmhhcyhmaWVsZCkpICB7XG4gICAgICAgICAgICAvLyAgICAgLyoqXG4gICAgICAgICAgICAvLyAgICAgICogdW4tZmxhZyBhIGNoYW5nZSBpZiBpdGVtIGhhcyBiZWVuIGFkZGVkIEFORCByZW1vdmVkIGluIHRoZSBzYW1lIHBhdGNoLlxuICAgICAgICAgICAgLy8gICAgICAqIChodHRwczovL2dpdGh1Yi5jb20vY29seXNldXMvY29seXNldXMtdW5pdHkzZC9pc3N1ZXMvMTAzKVxuICAgICAgICAgICAgLy8gICAgICAqL1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuY2hhbmdlcy5kZWxldGUoZmllbGQpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZXMuYWRkKGZpZWxkKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGRpc2NhcmQgYWxsLWNoYW5nZXMgZm9yIHJlbW92ZWQgaXRlbXMuXG4gICAgICAgICAgICB0aGlzLmFsbENoYW5nZXMuZGVsZXRlKGZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmNoYW5nZSh0aGlzLnBhcmVudEZpZWxkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2hhbmdlVHJlZS5wcm90b3R5cGUubWFwSW5kZXggPSBmdW5jdGlvbiAoaW5zdGFuY2UsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5kZXhNYXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4TWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhDaGFuZ2UgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4TWFwLnNldChpbnN0YW5jZSwga2V5KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2hhbmdlVHJlZS5wcm90b3R5cGUuZ2V0SW5kZXggPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXhNYXAgJiYgdGhpcy5pbmRleE1hcC5nZXQoaW5zdGFuY2UpO1xuICAgIH07XG4gICAgQ2hhbmdlVHJlZS5wcm90b3R5cGUuZGVsZXRlSW5kZXggPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVkS2V5c1t0aGlzLmluZGV4TWFwLmdldChpbnN0YW5jZSldID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXhNYXAuZGVsZXRlKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2hhbmdlVHJlZS5wcm90b3R5cGUuaXNEZWxldGVkID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGVkS2V5c1trZXldICE9PSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBDaGFuZ2VUcmVlLnByb3RvdHlwZS5tYXBJbmRleENoYW5nZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgcHJldmlvdXNLZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZSA9PT0gXCJvYmplY3RcIiAmJiAhdGhpcy5pbmRleENoYW5nZS5oYXMoaW5zdGFuY2UpKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4Q2hhbmdlLnNldChpbnN0YW5jZSwgcHJldmlvdXNLZXkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDaGFuZ2VUcmVlLnByb3RvdHlwZS5nZXRJbmRleENoYW5nZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleENoYW5nZSAmJiB0aGlzLmluZGV4Q2hhbmdlLmdldChpbnN0YW5jZSk7XG4gICAgfTtcbiAgICBDaGFuZ2VUcmVlLnByb3RvdHlwZS5kZWxldGVJbmRleENoYW5nZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4Q2hhbmdlLmRlbGV0ZShpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENoYW5nZVRyZWUucHJvdG90eXBlLmNoYW5nZUFsbCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIFNjaGVtYV8xLlNjaGVtYSkge1xuICAgICAgICAgICAgdmFyIHNjaGVtYSA9IG9ialsnX3NjaGVtYSddO1xuICAgICAgICAgICAgZm9yICh2YXIgZmllbGQgaW4gc2NoZW1hKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIEFycmF5U2NoZW1hIGFuZCBNYXBTY2hlbWEgYWxyZWFkeSBpbml0aWFsaXplZFxuICAgICAgICAgICAgICAgIC8vIG9uIGl0cyBzdHJ1Y3R1cmUgaGF2ZSBhIHZhbGlkIHBhcmVudC5cbiAgICAgICAgICAgICAgICBpZiAoKG9ialtmaWVsZF0gaW5zdGFuY2VvZiBTY2hlbWFfMS5TY2hlbWEgfHxcbiAgICAgICAgICAgICAgICAgICAgb2JqW2ZpZWxkXSBpbnN0YW5jZW9mIEFycmF5U2NoZW1hXzEuQXJyYXlTY2hlbWEgfHxcbiAgICAgICAgICAgICAgICAgICAgb2JqW2ZpZWxkXSBpbnN0YW5jZW9mIE1hcFNjaGVtYV8xLk1hcFNjaGVtYSkgJiZcbiAgICAgICAgICAgICAgICAgICAgIW9ialtmaWVsZF0uJGNoYW5nZXMucGFyZW50LnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICBvYmpbZmllbGRdLiRjaGFuZ2VzLnBhcmVudCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvYmpbZmllbGRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2UoZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwga2V5c18xID0ga2V5czsgX2kgPCBrZXlzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNfMVtfaV07XG4gICAgICAgICAgICAgICAgaWYgKG9ialtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2Uoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENoYW5nZVRyZWUucHJvdG90eXBlLmRpc2NhcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoYW5nZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5kZWxldGVkS2V5cyA9IHt9O1xuICAgICAgICBpZiAodGhpcy5pbmRleENoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5pbmRleENoYW5nZS5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDaGFuZ2VUcmVlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VUcmVlKHRoaXMuZmllbGRJbmRleGVzLCB0aGlzLnBhcmVudEZpZWxkLCB1bmRlZmluZWQpO1xuICAgIH07XG4gICAgcmV0dXJuIENoYW5nZVRyZWU7XG59KCkpO1xuZXhwb3J0cy5DaGFuZ2VUcmVlID0gQ2hhbmdlVHJlZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNoYW5nZVRyZWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVmbGVjdGlvbiA9IGV4cG9ydHMuUmVmbGVjdGlvblR5cGUgPSBleHBvcnRzLlJlZmxlY3Rpb25GaWVsZCA9IHZvaWQgMDtcbnZhciBhbm5vdGF0aW9uc18xID0gcmVxdWlyZShcIi4vYW5ub3RhdGlvbnNcIik7XG52YXIgU2NoZW1hXzEgPSByZXF1aXJlKFwiLi9TY2hlbWFcIik7XG52YXIgQXJyYXlTY2hlbWFfMSA9IHJlcXVpcmUoXCIuL3R5cGVzL0FycmF5U2NoZW1hXCIpO1xudmFyIE1hcFNjaGVtYV8xID0gcmVxdWlyZShcIi4vdHlwZXMvTWFwU2NoZW1hXCIpO1xudmFyIHJlZmxlY3Rpb25Db250ZXh0ID0gbmV3IGFubm90YXRpb25zXzEuQ29udGV4dCgpO1xuLyoqXG4gKiBSZWZsZWN0aW9uXG4gKi9cbnZhciBSZWZsZWN0aW9uRmllbGQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJlZmxlY3Rpb25GaWVsZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSZWZsZWN0aW9uRmllbGQoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGFubm90YXRpb25zXzEudHlwZShcInN0cmluZ1wiLCByZWZsZWN0aW9uQ29udGV4dClcbiAgICBdLCBSZWZsZWN0aW9uRmllbGQucHJvdG90eXBlLCBcIm5hbWVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgYW5ub3RhdGlvbnNfMS50eXBlKFwic3RyaW5nXCIsIHJlZmxlY3Rpb25Db250ZXh0KVxuICAgIF0sIFJlZmxlY3Rpb25GaWVsZC5wcm90b3R5cGUsIFwidHlwZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBhbm5vdGF0aW9uc18xLnR5cGUoXCJ1aW50OFwiLCByZWZsZWN0aW9uQ29udGV4dClcbiAgICBdLCBSZWZsZWN0aW9uRmllbGQucHJvdG90eXBlLCBcInJlZmVyZW5jZWRUeXBlXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIFJlZmxlY3Rpb25GaWVsZDtcbn0oU2NoZW1hXzEuU2NoZW1hKSk7XG5leHBvcnRzLlJlZmxlY3Rpb25GaWVsZCA9IFJlZmxlY3Rpb25GaWVsZDtcbnZhciBSZWZsZWN0aW9uVHlwZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUmVmbGVjdGlvblR5cGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUmVmbGVjdGlvblR5cGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5maWVsZHMgPSBuZXcgQXJyYXlTY2hlbWFfMS5BcnJheVNjaGVtYSgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBhbm5vdGF0aW9uc18xLnR5cGUoXCJ1aW50OFwiLCByZWZsZWN0aW9uQ29udGV4dClcbiAgICBdLCBSZWZsZWN0aW9uVHlwZS5wcm90b3R5cGUsIFwiaWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgYW5ub3RhdGlvbnNfMS50eXBlKFtSZWZsZWN0aW9uRmllbGRdLCByZWZsZWN0aW9uQ29udGV4dClcbiAgICBdLCBSZWZsZWN0aW9uVHlwZS5wcm90b3R5cGUsIFwiZmllbGRzXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIFJlZmxlY3Rpb25UeXBlO1xufShTY2hlbWFfMS5TY2hlbWEpKTtcbmV4cG9ydHMuUmVmbGVjdGlvblR5cGUgPSBSZWZsZWN0aW9uVHlwZTtcbnZhciBSZWZsZWN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSZWZsZWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlZmxlY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy50eXBlcyA9IG5ldyBBcnJheVNjaGVtYV8xLkFycmF5U2NoZW1hKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUmVmbGVjdGlvbi5lbmNvZGUgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgdmFyIHJvb3RTY2hlbWFUeXBlID0gaW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgICAgIHZhciByZWZsZWN0aW9uID0gbmV3IFJlZmxlY3Rpb24oKTtcbiAgICAgICAgcmVmbGVjdGlvbi5yb290VHlwZSA9IHJvb3RTY2hlbWFUeXBlLl90eXBlaWQ7XG4gICAgICAgIHZhciBidWlsZFR5cGUgPSBmdW5jdGlvbiAoY3VycmVudFR5cGUsIHNjaGVtYSkge1xuICAgICAgICAgICAgZm9yICh2YXIgZmllbGROYW1lIGluIHNjaGVtYSkge1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZCA9IG5ldyBSZWZsZWN0aW9uRmllbGQoKTtcbiAgICAgICAgICAgICAgICBmaWVsZC5uYW1lID0gZmllbGROYW1lO1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZFR5cGUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoc2NoZW1hW2ZpZWxkTmFtZV0pID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZSA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzU2NoZW1hID0gdHlwZW9mIChzY2hlbWFbZmllbGROYW1lXSkgPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHNjaGVtYVtmaWVsZE5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzTWFwID0gIWlzQXJyYXkgJiYgc2NoZW1hW2ZpZWxkTmFtZV0ubWFwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRUeXBlU2NoZW1hID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTY2hlbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZSA9IFwicmVmXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFR5cGVTY2hlbWEgPSBzY2hlbWFbZmllbGROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFR5cGUgPSBcImFycmF5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChzY2hlbWFbZmllbGROYW1lXVswXSkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFR5cGUgKz0gXCI6XCIgKyBzY2hlbWFbZmllbGROYW1lXVswXTsgLy8gYXJyYXk6c3RyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFR5cGVTY2hlbWEgPSBzY2hlbWFbZmllbGROYW1lXVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpc01hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlID0gXCJtYXBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHNjaGVtYVtmaWVsZE5hbWVdLm1hcCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFR5cGUgKz0gXCI6XCIgKyBzY2hlbWFbZmllbGROYW1lXS5tYXA7IC8vIGFycmF5OnN0cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRUeXBlU2NoZW1hID0gc2NoZW1hW2ZpZWxkTmFtZV0ubWFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLnJlZmVyZW5jZWRUeXBlID0gKGNoaWxkVHlwZVNjaGVtYSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY2hpbGRUeXBlU2NoZW1hLl90eXBlaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDogMjU1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaWVsZC50eXBlID0gZmllbGRUeXBlO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUeXBlLmZpZWxkcy5wdXNoKGZpZWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlZmxlY3Rpb24udHlwZXMucHVzaChjdXJyZW50VHlwZSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB0eXBlcyA9IHJvb3RTY2hlbWFUeXBlLl9jb250ZXh0LnR5cGVzO1xuICAgICAgICBmb3IgKHZhciB0eXBlaWQgaW4gdHlwZXMpIHtcbiAgICAgICAgICAgIHZhciB0eXBlXzEgPSBuZXcgUmVmbGVjdGlvblR5cGUoKTtcbiAgICAgICAgICAgIHR5cGVfMS5pZCA9IE51bWJlcih0eXBlaWQpO1xuICAgICAgICAgICAgYnVpbGRUeXBlKHR5cGVfMSwgdHlwZXNbdHlwZWlkXS5fc2NoZW1hKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVmbGVjdGlvbi5lbmNvZGVBbGwoKTtcbiAgICB9O1xuICAgIFJlZmxlY3Rpb24uZGVjb2RlID0gZnVuY3Rpb24gKGJ5dGVzKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gbmV3IGFubm90YXRpb25zXzEuQ29udGV4dCgpO1xuICAgICAgICB2YXIgcmVmbGVjdGlvbiA9IG5ldyBSZWZsZWN0aW9uKCk7XG4gICAgICAgIHJlZmxlY3Rpb24uZGVjb2RlKGJ5dGVzKTtcbiAgICAgICAgdmFyIHNjaGVtYVR5cGVzID0gcmVmbGVjdGlvbi50eXBlcy5yZWR1Y2UoZnVuY3Rpb24gKHR5cGVzLCByZWZsZWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgdHlwZXNbcmVmbGVjdGlvblR5cGUuaWRdID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICAgICAgICAgIF9fZXh0ZW5kcyhfLCBfc3VwZXIpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF8oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIF87XG4gICAgICAgICAgICB9KFNjaGVtYV8xLlNjaGVtYSkpO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVzO1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIHJlZmxlY3Rpb24udHlwZXMuZm9yRWFjaChmdW5jdGlvbiAocmVmbGVjdGlvblR5cGUsIGkpIHtcbiAgICAgICAgICAgIHJlZmxlY3Rpb25UeXBlLmZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAgICAgICAgIHZhciBzY2hlbWFUeXBlID0gc2NoZW1hVHlwZXNbcmVmbGVjdGlvblR5cGUuaWRdO1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5yZWZlcmVuY2VkVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWZUeXBlID0gc2NoZW1hVHlwZXNbZmllbGQucmVmZXJlbmNlZFR5cGVdO1xuICAgICAgICAgICAgICAgICAgICAvLyBtYXAgb3IgYXJyYXkgb2YgcHJpbWl0aXZlIHR5cGUgKDI1NSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWZUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZUeXBlID0gZmllbGQudHlwZS5zcGxpdChcIjpcIilbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUuaW5kZXhPZihcImFycmF5XCIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uc18xLnR5cGUoW3JlZlR5cGVdLCBjb250ZXh0KShzY2hlbWFUeXBlLnByb3RvdHlwZSwgZmllbGQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZmllbGQudHlwZS5pbmRleE9mKFwibWFwXCIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uc18xLnR5cGUoeyBtYXA6IHJlZlR5cGUgfSwgY29udGV4dCkoc2NoZW1hVHlwZS5wcm90b3R5cGUsIGZpZWxkLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09IFwicmVmXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25zXzEudHlwZShyZWZUeXBlLCBjb250ZXh0KShzY2hlbWFUeXBlLnByb3RvdHlwZSwgZmllbGQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25zXzEudHlwZShmaWVsZC50eXBlLCBjb250ZXh0KShzY2hlbWFUeXBlLnByb3RvdHlwZSwgZmllbGQubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcm9vdFR5cGUgPSBzY2hlbWFUeXBlc1tyZWZsZWN0aW9uLnJvb3RUeXBlXTtcbiAgICAgICAgdmFyIHJvb3RJbnN0YW5jZSA9IG5ldyByb290VHlwZSgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogYXV0by1pbml0aWFsaXplIHJlZmVyZW5jZWQgdHlwZXMgb24gcm9vdCB0eXBlXG4gICAgICAgICAqIHRvIGFsbG93IHJlZ2lzdGVyaW5nIGxpc3RlbmVycyBpbW1lZGlhdGVsbHkgb24gY2xpZW50LXNpZGVcbiAgICAgICAgICovXG4gICAgICAgIGZvciAodmFyIGZpZWxkTmFtZSBpbiByb290VHlwZS5fc2NoZW1hKSB7XG4gICAgICAgICAgICB2YXIgZmllbGRUeXBlID0gcm9vdFR5cGUuX3NjaGVtYVtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAoZmllbGRUeXBlKSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHZhciBpc1NjaGVtYSA9IHR5cGVvZiAoZmllbGRUeXBlKSA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgICAgICAgICAgIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShmaWVsZFR5cGUpO1xuICAgICAgICAgICAgICAgIHZhciBpc01hcCA9ICFpc0FycmF5ICYmIGZpZWxkVHlwZS5tYXA7XG4gICAgICAgICAgICAgICAgcm9vdEluc3RhbmNlW2ZpZWxkTmFtZV0gPSAoaXNBcnJheSlcbiAgICAgICAgICAgICAgICAgICAgPyBuZXcgQXJyYXlTY2hlbWFfMS5BcnJheVNjaGVtYSgpXG4gICAgICAgICAgICAgICAgICAgIDogKGlzTWFwKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgTWFwU2NoZW1hXzEuTWFwU2NoZW1hKClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKGlzU2NoZW1hKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3IGZpZWxkVHlwZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvb3RJbnN0YW5jZTtcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBhbm5vdGF0aW9uc18xLnR5cGUoW1JlZmxlY3Rpb25UeXBlXSwgcmVmbGVjdGlvbkNvbnRleHQpXG4gICAgXSwgUmVmbGVjdGlvbi5wcm90b3R5cGUsIFwidHlwZXNcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgYW5ub3RhdGlvbnNfMS50eXBlKFwidWludDhcIiwgcmVmbGVjdGlvbkNvbnRleHQpXG4gICAgXSwgUmVmbGVjdGlvbi5wcm90b3R5cGUsIFwicm9vdFR5cGVcIiwgdm9pZCAwKTtcbiAgICByZXR1cm4gUmVmbGVjdGlvbjtcbn0oU2NoZW1hXzEuU2NoZW1hKSk7XG5leHBvcnRzLlJlZmxlY3Rpb24gPSBSZWZsZWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UmVmbGVjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TY2hlbWEgPSB2b2lkIDA7XG52YXIgc3BlY18xID0gcmVxdWlyZShcIi4vc3BlY1wiKTtcbnZhciBlbmNvZGUgPSByZXF1aXJlKFwiLi9lbmNvZGluZy9lbmNvZGVcIik7XG52YXIgZGVjb2RlID0gcmVxdWlyZShcIi4vZW5jb2RpbmcvZGVjb2RlXCIpO1xudmFyIEFycmF5U2NoZW1hXzEgPSByZXF1aXJlKFwiLi90eXBlcy9BcnJheVNjaGVtYVwiKTtcbnZhciBNYXBTY2hlbWFfMSA9IHJlcXVpcmUoXCIuL3R5cGVzL01hcFNjaGVtYVwiKTtcbnZhciBDaGFuZ2VUcmVlXzEgPSByZXF1aXJlKFwiLi9DaGFuZ2VUcmVlXCIpO1xudmFyIEV2ZW50RW1pdHRlcl8xID0gcmVxdWlyZShcIi4vZXZlbnRzL0V2ZW50RW1pdHRlclwiKTtcbnZhciBFbmNvZGVTY2hlbWFFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRW5jb2RlU2NoZW1hRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRW5jb2RlU2NoZW1hRXJyb3IoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEVuY29kZVNjaGVtYUVycm9yO1xufShFcnJvcikpO1xuZnVuY3Rpb24gYXNzZXJ0VHlwZSh2YWx1ZSwgdHlwZSwga2xhc3MsIGZpZWxkKSB7XG4gICAgdmFyIHR5cGVvZlRhcmdldDtcbiAgICB2YXIgYWxsb3dOdWxsID0gZmFsc2U7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgY2FzZSBcImludDhcIjpcbiAgICAgICAgY2FzZSBcInVpbnQ4XCI6XG4gICAgICAgIGNhc2UgXCJpbnQxNlwiOlxuICAgICAgICBjYXNlIFwidWludDE2XCI6XG4gICAgICAgIGNhc2UgXCJpbnQzMlwiOlxuICAgICAgICBjYXNlIFwidWludDMyXCI6XG4gICAgICAgIGNhc2UgXCJpbnQ2NFwiOlxuICAgICAgICBjYXNlIFwidWludDY0XCI6XG4gICAgICAgIGNhc2UgXCJmbG9hdDMyXCI6XG4gICAgICAgIGNhc2UgXCJmbG9hdDY0XCI6XG4gICAgICAgICAgICB0eXBlb2ZUYXJnZXQgPSBcIm51bWJlclwiO1xuICAgICAgICAgICAgaWYgKGlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJ5aW5nIHRvIGVuY29kZSBcXFwiTmFOXFxcIiBpbiBcIiArIGtsYXNzLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiNcIiArIGZpZWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICB0eXBlb2ZUYXJnZXQgPSBcInN0cmluZ1wiO1xuICAgICAgICAgICAgYWxsb3dOdWxsID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgLy8gYm9vbGVhbiBpcyBhbHdheXMgZW5jb2RlZCBhcyB0cnVlL2ZhbHNlIGJhc2VkIG9uIHRydXRoaW5lc3NcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiAodmFsdWUpICE9PSB0eXBlb2ZUYXJnZXQgJiYgKCFhbGxvd051bGwgfHwgKGFsbG93TnVsbCAmJiB2YWx1ZSAhPT0gbnVsbCkpKSB7XG4gICAgICAgIHZhciBmb3VuZFZhbHVlID0gXCInXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyBcIidcIiArICh2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciAmJiBcIiAoXCIgKyB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lICsgXCIpXCIpO1xuICAgICAgICB0aHJvdyBuZXcgRW5jb2RlU2NoZW1hRXJyb3IoXCJhICdcIiArIHR5cGVvZlRhcmdldCArIFwiJyB3YXMgZXhwZWN0ZWQsIGJ1dCBcIiArIGZvdW5kVmFsdWUgKyBcIiB3YXMgcHJvdmlkZWQgaW4gXCIgKyBrbGFzcy5jb25zdHJ1Y3Rvci5uYW1lICsgXCIjXCIgKyBmaWVsZCk7XG4gICAgfVxufVxuZnVuY3Rpb24gYXNzZXJ0SW5zdGFuY2VUeXBlKHZhbHVlLCB0eXBlLCBrbGFzcywgZmllbGQpIHtcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIHR5cGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFbmNvZGVTY2hlbWFFcnJvcihcImEgJ1wiICsgdHlwZS5uYW1lICsgXCInIHdhcyBleHBlY3RlZCwgYnV0ICdcIiArIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgKyBcIicgd2FzIHByb3ZpZGVkIGluIFwiICsga2xhc3MuY29uc3RydWN0b3IubmFtZSArIFwiI1wiICsgZmllbGQpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGVuY29kZVByaW1pdGl2ZVR5cGUodHlwZSwgYnl0ZXMsIHZhbHVlLCBrbGFzcywgZmllbGQpIHtcbiAgICBhc3NlcnRUeXBlKHZhbHVlLCB0eXBlLCBrbGFzcywgZmllbGQpO1xuICAgIHZhciBlbmNvZGVGdW5jID0gZW5jb2RlW3R5cGVdO1xuICAgIGlmIChlbmNvZGVGdW5jKSB7XG4gICAgICAgIGVuY29kZUZ1bmMoYnl0ZXMsIHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFbmNvZGVTY2hlbWFFcnJvcihcImEgJ1wiICsgdHlwZSArIFwiJyB3YXMgZXhwZWN0ZWQsIGJ1dCBcIiArIHZhbHVlICsgXCIgd2FzIHByb3ZpZGVkIGluIFwiICsga2xhc3MuY29uc3RydWN0b3IubmFtZSArIFwiI1wiICsgZmllbGQpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRlY29kZVByaW1pdGl2ZVR5cGUodHlwZSwgYnl0ZXMsIGl0KSB7XG4gICAgcmV0dXJuIGRlY29kZVt0eXBlXShieXRlcywgaXQpO1xufVxuLyoqXG4gKiBTY2hlbWEgZW5jb2RlciAvIGRlY29kZXJcbiAqL1xudmFyIFNjaGVtYSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBhbGxvdyBpbmhlcml0ZWQgY2xhc3NlcyB0byBoYXZlIGEgY29uc3RydWN0b3JcbiAgICBmdW5jdGlvbiBTY2hlbWEoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gZml4IGVudW1lcmFiaWxpdHkgb2YgZmllbGRzIGZvciBlbmQtdXNlclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICAkY2hhbmdlczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgQ2hhbmdlVHJlZV8xLkNoYW5nZVRyZWUodGhpcy5faW5kZXhlcyksXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHt9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3JzID0gdGhpcy5fZGVzY3JpcHRvcnM7XG4gICAgICAgIGlmIChkZXNjcmlwdG9ycykge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywgZGVzY3JpcHRvcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFNjaGVtYS5vbkVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2hlbWEucHJvdG90eXBlLCBcIl9zY2hlbWFcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuX3NjaGVtYTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2hlbWEucHJvdG90eXBlLCBcIl9kZXNjcmlwdG9yc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5fZGVzY3JpcHRvcnM7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2NoZW1hLnByb3RvdHlwZSwgXCJfaW5kZXhlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5faW5kZXhlczsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2hlbWEucHJvdG90eXBlLCBcIl9maWVsZHNCeUluZGV4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLl9maWVsZHNCeUluZGV4OyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjaGVtYS5wcm90b3R5cGUsIFwiX2ZpbHRlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuX2ZpbHRlcnM7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2NoZW1hLnByb3RvdHlwZSwgXCJfZGVwcmVjYXRlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5fZGVwcmVjYXRlZDsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2hlbWEucHJvdG90eXBlLCBcIiRjaGFuZ2VkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLiRjaGFuZ2VzLmNoYW5nZWQ7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTY2hlbWEucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uIChhdHRyLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuJGxpc3RlbmVyc1thdHRyXSkge1xuICAgICAgICAgICAgdGhpcy4kbGlzdGVuZXJzW2F0dHJdID0gbmV3IEV2ZW50RW1pdHRlcl8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGxpc3RlbmVyc1thdHRyXS5yZWdpc3RlcihjYWxsYmFjayk7XG4gICAgICAgIC8vIHJldHVybiB1bi1yZWdpc3RlciBjYWxsYmFjay5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy4kbGlzdGVuZXJzW2F0dHJdLnJlbW92ZShjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBTY2hlbWEucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uIChieXRlcywgaXQpIHtcbiAgICAgICAgaWYgKGl0ID09PSB2b2lkIDApIHsgaXQgPSB7IG9mZnNldDogMCB9OyB9XG4gICAgICAgIHZhciBjaGFuZ2VzID0gW107XG4gICAgICAgIHZhciBzY2hlbWEgPSB0aGlzLl9zY2hlbWE7XG4gICAgICAgIHZhciBmaWVsZHNCeUluZGV4ID0gdGhpcy5fZmllbGRzQnlJbmRleDtcbiAgICAgICAgdmFyIHRvdGFsQnl0ZXMgPSBieXRlcy5sZW5ndGg7XG4gICAgICAgIC8vIHNraXAgVFlQRV9JRCBvZiBleGlzdGluZyBpbnN0YW5jZXNcbiAgICAgICAgaWYgKGJ5dGVzW2l0Lm9mZnNldF0gPT09IHNwZWNfMS5UWVBFX0lEKSB7XG4gICAgICAgICAgICBpdC5vZmZzZXQgKz0gMjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpc05pbCA9IGRlY29kZS5uaWxDaGVjayhieXRlcywgaXQpICYmICsraXQub2Zmc2V0O1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gYnl0ZXNbaXQub2Zmc2V0KytdO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBzcGVjXzEuRU5EX09GX1NUUlVDVFVSRSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZmllbGQgPSBmaWVsZHNCeUluZGV4W2luZGV4XTtcbiAgICAgICAgICAgIHZhciBfZmllbGQgPSBcIl9cIiArIGZpZWxkO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBzY2hlbWFbZmllbGRdO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzVmFsdWUgPSB0aGlzXzFbX2ZpZWxkXTtcbiAgICAgICAgICAgIHZhciBoYXNDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghZmllbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNOaWwpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUuX3NjaGVtYSkge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzVmFsdWUgPSBwcmV2aW91c1ZhbHVlICYmIHRoaXNfMVtfZmllbGRdLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzXzFbX2ZpZWxkXSB8fCB0aGlzXzEuY3JlYXRlVHlwZUluc3RhbmNlKGJ5dGVzLCBpdCwgdHlwZSk7XG4gICAgICAgICAgICAgICAgdmFsdWUuZGVjb2RlKGJ5dGVzLCBpdCk7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gdHlwZVswXTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVSZWZfMSA9IHRoaXNfMVtfZmllbGRdIHx8IG5ldyBBcnJheVNjaGVtYV8xLkFycmF5U2NoZW1hKCk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVJlZl8xLmNsb25lKHRydWUpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdMZW5ndGhfMSA9IGRlY29kZS5udW1iZXIoYnl0ZXMsIGl0KTtcbiAgICAgICAgICAgICAgICB2YXIgbnVtQ2hhbmdlcyA9IE1hdGgubWluKGRlY29kZS5udW1iZXIoYnl0ZXMsIGl0KSwgbmV3TGVuZ3RoXzEpO1xuICAgICAgICAgICAgICAgIHZhciBoYXNSZW1vdmFsID0gKHZhbHVlLmxlbmd0aCA+IG5ld0xlbmd0aF8xKTtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2UgPSAobnVtQ2hhbmdlcyA+IDApIHx8IGhhc1JlbW92YWw7XG4gICAgICAgICAgICAgICAgLy8gRklYTUU6IHRoaXMgbWF5IG5vdCBiZSByZWxpYWJsZS4gcG9zc2libHkgbmVlZCB0byBlbmNvZGUgdGhpcyB2YXJpYWJsZSBkdXJpbmcgc2VyaWFsaXphdGlvblxuICAgICAgICAgICAgICAgIHZhciBoYXNJbmRleENoYW5nZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBjdXJyZW50IGFycmF5IGhhcyB0aGUgc2FtZSBsZW5ndGggYXMgZW5jb2RlZCBvbmVcbiAgICAgICAgICAgICAgICBpZiAoaGFzUmVtb3ZhbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBkZWNyZWFzZSByZW1vdmVkIGl0ZW1zIGZyb20gbnVtYmVyIG9mIGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gaXRlcmF0ZSB0aHJvdWdoIHRoZW0sIGFzIHRoZXkncmUgZ29pbmcgdG8gYmUgcmVtb3ZlZC5cbiAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKHZhbHVlLCBuZXdMZW5ndGhfMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbVJlbW92ZWQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtUmVtb3ZlZCAmJiBpdGVtUmVtb3ZlZC5vblJlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1SZW1vdmVkLm9uUmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNjaGVtYS5vbkVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVJlZl8xLm9uUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVSZWZfMS5vblJlbW92ZShpdGVtUmVtb3ZlZCwgbmV3TGVuZ3RoXzEgKyBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2NoZW1hLm9uRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1DaGFuZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0luZGV4ID0gZGVjb2RlLm51bWJlcihieXRlcywgaXQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhDaGFuZ2VkRnJvbSA9IHZvaWQgMDsgLy8gaW5kZXggY2hhbmdlIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWNvZGUuaW5kZXhDaGFuZ2VDaGVjayhieXRlcywgaXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGUudWludDgoYnl0ZXMsIGl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Q2hhbmdlZEZyb20gPSBkZWNvZGUubnVtYmVyKGJ5dGVzLCBpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNJbmRleENoYW5nZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzTmV3ID0gKCFoYXNJbmRleENoYW5nZSAmJiB2YWx1ZVtuZXdJbmRleF0gPT09IHVuZGVmaW5lZCkgfHwgKGhhc0luZGV4Q2hhbmdlICYmIGluZGV4Q2hhbmdlZEZyb20gPT09IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlLnByb3RvdHlwZSBpbnN0YW5jZW9mIFNjaGVtYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gdGhpc18xLmNyZWF0ZVR5cGVJbnN0YW5jZShieXRlcywgaXQsIHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXhDaGFuZ2VkRnJvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHZhbHVlUmVmXzFbaW5kZXhDaGFuZ2VkRnJvbV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gdmFsdWVSZWZfMVtuZXdJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gdGhpc18xLmNyZWF0ZVR5cGVJbnN0YW5jZShieXRlcywgaXQsIHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTmV3ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGVjb2RlKGJ5dGVzLCBpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtuZXdJbmRleF0gPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbbmV3SW5kZXhdID0gZGVjb2RlUHJpbWl0aXZlVHlwZSh0eXBlLCBieXRlcywgaXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05ldykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlUmVmXzEub25BZGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVJlZl8xLm9uQWRkKHZhbHVlW25ld0luZGV4XSwgbmV3SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTY2hlbWEub25FcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWVSZWZfMS5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVJlZl8xLm9uQ2hhbmdlKHZhbHVlW25ld0luZGV4XSwgbmV3SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTY2hlbWEub25FcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUubWFwKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9IHR5cGUubWFwO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZVJlZiA9IHRoaXNfMVtfZmllbGRdIHx8IG5ldyBNYXBTY2hlbWFfMS5NYXBTY2hlbWEoKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlUmVmLmNsb25lKHRydWUpO1xuICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSBkZWNvZGUubnVtYmVyKGJ5dGVzLCBpdCk7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlID0gKGxlbmd0aCA+IDApO1xuICAgICAgICAgICAgICAgIC8vIEZJWE1FOiB0aGlzIG1heSBub3QgYmUgcmVsaWFibGUuIHBvc3NpYmx5IG5lZWQgdG8gZW5jb2RlIHRoaXMgdmFyaWFibGUgZHVyaW5nXG4gICAgICAgICAgICAgICAgLy8gc2VyaWFsaXphZ2lvblxuICAgICAgICAgICAgICAgIHZhciBoYXNJbmRleENoYW5nZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c0tleXMgPSBPYmplY3Qua2V5cyh2YWx1ZVJlZik7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyBgZW5jb2RlQWxsYCBtYXkgaW5kaWNhdGUgYSBoaWdoZXIgbnVtYmVyIG9mIGluZGV4ZXMgaXQgYWN0dWFsbHkgZW5jb2Rlc1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBkbyBub3QgZW5jb2RlIGEgaGlnaGVyIG51bWJlciB0aGFuIGFjdHVhbCBlbmNvZGVkIGVudHJpZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ5dGVzW2l0Lm9mZnNldF0gPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgYnl0ZXNbaXQub2Zmc2V0XSA9PT0gc3BlY18xLkVORF9PRl9TVFJVQ1RVUkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc05pbEl0ZW0gPSBkZWNvZGUubmlsQ2hlY2soYnl0ZXMsIGl0KSAmJiArK2l0Lm9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5kZXggY2hhbmdlIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c0tleSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlY29kZS5pbmRleENoYW5nZUNoZWNrKGJ5dGVzLCBpdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZS51aW50OChieXRlcywgaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNLZXkgPSBwcmV2aW91c0tleXNbZGVjb2RlLm51bWJlcihieXRlcywgaXQpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0luZGV4Q2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFzTWFwSW5kZXggPSBkZWNvZGUubnVtYmVyQ2hlY2soYnl0ZXMsIGl0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzU2NoZW1hVHlwZSA9IHR5cGVvZiAodHlwZSkgIT09IFwic3RyaW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdLZXkgPSAoaGFzTWFwSW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHByZXZpb3VzS2V5c1tkZWNvZGUubnVtYmVyKGJ5dGVzLCBpdCldXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlY29kZS5zdHJpbmcoYnl0ZXMsIGl0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc05ldyA9ICghaGFzSW5kZXhDaGFuZ2UgJiYgdmFsdWVSZWZbbmV3S2V5XSA9PT0gdW5kZWZpbmVkKSB8fCAoaGFzSW5kZXhDaGFuZ2UgJiYgcHJldmlvdXNLZXkgPT09IHVuZGVmaW5lZCAmJiBoYXNNYXBJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05ldyAmJiBpc1NjaGVtYVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzXzEuY3JlYXRlVHlwZUluc3RhbmNlKGJ5dGVzLCBpdCwgdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJldmlvdXNLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHZhbHVlUmVmW3ByZXZpb3VzS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB2YWx1ZVJlZltuZXdLZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05pbEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0ub25SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9uUmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNjaGVtYS5vbkVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVJlZi5vblJlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUmVmLm9uUmVtb3ZlKGl0ZW0sIG5ld0tleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNjaGVtYS5vbkVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZVtuZXdLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzU2NoZW1hVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbbmV3S2V5XSA9IGRlY29kZVByaW1pdGl2ZVR5cGUodHlwZSwgYnl0ZXMsIGl0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGVjb2RlKGJ5dGVzLCBpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtuZXdLZXldID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVJlZi5vbkFkZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUmVmLm9uQWRkKHZhbHVlW25ld0tleV0sIG5ld0tleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNjaGVtYS5vbkVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZVJlZi5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVJlZi5vbkNoYW5nZSh2YWx1ZVtuZXdLZXldLCBuZXdLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTY2hlbWEub25FcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZGVjb2RlUHJpbWl0aXZlVHlwZSh0eXBlLCBieXRlcywgaXQpO1xuICAgICAgICAgICAgICAgIC8vIEZJWE1FOiBzaG91bGQgbm90IGV2ZW4gaGF2ZSBlbmNvZGVkIGlmIHZhbHVlIGhhdmVuJ3QgY2hhbmdlZCBpbiB0aGUgZmlyc3QgcGxhY2UhXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgRmlsdGVyVGVzdC50czogXCJzaG91bGQgbm90IHRyaWdnZXIgYG9uQ2hhbmdlYCBpZiBmaWVsZCBoYXZlbid0IGNoYW5nZWRcIlxuICAgICAgICAgICAgICAgIGhhc0NoYW5nZSA9ICh2YWx1ZSAhPT0gdGhpc18xW19maWVsZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc0NoYW5nZSAmJiAodGhpc18xLm9uQ2hhbmdlIHx8IHRoaXNfMS4kbGlzdGVuZXJzW2ZpZWxkXSkpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNWYWx1ZTogcHJldmlvdXNWYWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc18xW19maWVsZF0gPSB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHRoaXNfMSA9IHRoaXM7XG4gICAgICAgIHdoaWxlIChpdC5vZmZzZXQgPCB0b3RhbEJ5dGVzKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGVfMSA9IF9sb29wXzEoKTtcbiAgICAgICAgICAgIGlmIChzdGF0ZV8xID09PSBcImJyZWFrXCIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdHJpZ2dlckNoYW5nZXMoY2hhbmdlcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgU2NoZW1hLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbiAocm9vdCwgZW5jb2RlQWxsLCBjbGllbnQsIGJ5dGVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChyb290ID09PSB2b2lkIDApIHsgcm9vdCA9IHRoaXM7IH1cbiAgICAgICAgaWYgKGVuY29kZUFsbCA9PT0gdm9pZCAwKSB7IGVuY29kZUFsbCA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChieXRlcyA9PT0gdm9pZCAwKSB7IGJ5dGVzID0gW107IH1cbiAgICAgICAgLy8gc2tpcCBpZiBub3RoaW5nIGhhcyBjaGFuZ2VkXG4gICAgICAgIGlmICghdGhpcy4kY2hhbmdlcy5jaGFuZ2VkICYmICFlbmNvZGVBbGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2VuY29kZUVuZE9mU3RydWN0dXJlKHRoaXMsIHJvb3QsIGJ5dGVzKTtcbiAgICAgICAgICAgIHJldHVybiBieXRlcztcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2NoZW1hID0gdGhpcy5fc2NoZW1hO1xuICAgICAgICB2YXIgaW5kZXhlcyA9IHRoaXMuX2luZGV4ZXM7XG4gICAgICAgIHZhciBmaWVsZHNCeUluZGV4ID0gdGhpcy5fZmllbGRzQnlJbmRleDtcbiAgICAgICAgdmFyIGZpbHRlcnMgPSB0aGlzLl9maWx0ZXJzO1xuICAgICAgICB2YXIgY2hhbmdlcyA9IEFycmF5LmZyb20oKGVuY29kZUFsbCkgLy8gIHx8IGNsaWVudFxuICAgICAgICAgICAgPyB0aGlzLiRjaGFuZ2VzLmFsbENoYW5nZXNcbiAgICAgICAgICAgIDogdGhpcy4kY2hhbmdlcy5jaGFuZ2VzKS5zb3J0KCk7XG4gICAgICAgIHZhciBfbG9vcF8yID0gZnVuY3Rpb24gKGksIGwpIHtcbiAgICAgICAgICAgIHZhciBmaWVsZCA9IGZpZWxkc0J5SW5kZXhbY2hhbmdlc1tpXV0gfHwgY2hhbmdlc1tpXTtcbiAgICAgICAgICAgIHZhciBfZmllbGQgPSBcIl9cIiArIGZpZWxkO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBzY2hlbWFbZmllbGRdO1xuICAgICAgICAgICAgdmFyIGZpbHRlciA9IChmaWx0ZXJzICYmIGZpbHRlcnNbZmllbGRdKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHZhbHVlID0gKGZpbHRlciAmJiB0aGlzLiRhbGxDaGFuZ2VzW2ZpZWxkXSkgfHwgY2hhbmdlc1tmaWVsZF07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzXzJbX2ZpZWxkXTtcbiAgICAgICAgICAgIHZhciBmaWVsZEluZGV4ID0gaW5kZXhlc1tmaWVsZF07XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGVuY29kZS51aW50OChieXRlcywgc3BlY18xLk5JTCk7XG4gICAgICAgICAgICAgICAgZW5jb2RlLm51bWJlcihieXRlcywgZmllbGRJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlLl9zY2hlbWEpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xpZW50ICYmIGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBza2lwIGlmIG5vdCBhbGxvd2VkIGJ5IGN1c3RvbSBmaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWx0ZXIuY2FsbCh0aGlzXzIsIGNsaWVudCwgdmFsdWUsIHJvb3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWUgaGFzIGJlZW4gcmVtb3ZlZFxuICAgICAgICAgICAgICAgICAgICBlbmNvZGUudWludDgoYnl0ZXMsIHNwZWNfMS5OSUwpO1xuICAgICAgICAgICAgICAgICAgICBlbmNvZGUubnVtYmVyKGJ5dGVzLCBmaWVsZEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVuY29kZSBjaGlsZCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlLm51bWJlcihieXRlcywgZmllbGRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydEluc3RhbmNlVHlwZSh2YWx1ZSwgdHlwZSwgdGhpc18yLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNfMi50cnlFbmNvZGVUeXBlSWQoYnl0ZXMsIHR5cGUsIHZhbHVlLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuZW5jb2RlKHJvb3QsIGVuY29kZUFsbCwgY2xpZW50LCBieXRlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICAgICAgICAgIHZhciAkY2hhbmdlcyA9IHZhbHVlLiRjaGFuZ2VzO1xuICAgICAgICAgICAgICAgIGlmIChjbGllbnQgJiYgZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNraXAgaWYgbm90IGFsbG93ZWQgYnkgY3VzdG9tIGZpbHRlclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbHRlci5jYWxsKHRoaXNfMiwgY2xpZW50LCB2YWx1ZSwgcm9vdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZW5jb2RlLm51bWJlcihieXRlcywgZmllbGRJbmRleCk7XG4gICAgICAgICAgICAgICAgLy8gdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgIGVuY29kZS5udW1iZXIoYnl0ZXMsIHZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdmFyIGFycmF5Q2hhbmdlcyA9IEFycmF5LmZyb20oKGVuY29kZUFsbCkgLy8gIHx8IGNsaWVudFxuICAgICAgICAgICAgICAgICAgICA/ICRjaGFuZ2VzLmFsbENoYW5nZXNcbiAgICAgICAgICAgICAgICAgICAgOiAkY2hhbmdlcy5jaGFuZ2VzKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gX3RoaXNbX2ZpZWxkXVtpbmRleF0gIT09IHVuZGVmaW5lZDsgfSlcbiAgICAgICAgICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgLSBiOyB9KTtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgbnVtYmVyIG9mIGNoYW5nZXMgZG9lc24ndCBleGNlZWQgYXJyYXkgbGVuZ3RoXG4gICAgICAgICAgICAgICAgdmFyIG51bUNoYW5nZXMgPSBhcnJheUNoYW5nZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIC8vIG51bWJlciBvZiBjaGFuZ2VkIGl0ZW1zXG4gICAgICAgICAgICAgICAgZW5jb2RlLm51bWJlcihieXRlcywgbnVtQ2hhbmdlcyk7XG4gICAgICAgICAgICAgICAgdmFyIGlzQ2hpbGRTY2hlbWEgPSB0eXBlb2YgKHR5cGVbMF0pICE9PSBcInN0cmluZ1wiO1xuICAgICAgICAgICAgICAgIC8vIGFzc2VydCBBcnJheVNjaGVtYSB3YXMgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICBhc3NlcnRJbnN0YW5jZVR5cGUodGhpc18yW19maWVsZF0sIEFycmF5U2NoZW1hXzEuQXJyYXlTY2hlbWEsIHRoaXNfMiwgZmllbGQpO1xuICAgICAgICAgICAgICAgIC8vIGVuY29kZSBBcnJheSBvZiB0eXBlXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBudW1DaGFuZ2VzOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gYXJyYXlDaGFuZ2VzW2pdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXNfMltfZmllbGRdW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIFRPRE86IGZpbHRlciBhcnJheSBieSBpdGVtcyBpbnN0ZWFkIG9mIHRoZSB3aG9sZSBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChjbGllbnQgJiYgZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBza2lwIGlmIG5vdCBhbGxvd2VkIGJ5IGN1c3RvbSBmaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmICghZmlsdGVyLmNhbGwodGhpcywgY2xpZW50LCBpdGVtLCByb290KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0NoaWxkU2NoZW1hKSB7IC8vIGlzIGFycmF5IG9mIFNjaGVtYVxuICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlLm51bWJlcihieXRlcywgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbmNvZGVBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhDaGFuZ2UgPSAkY2hhbmdlcy5nZXRJbmRleENoYW5nZShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhDaGFuZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGUudWludDgoYnl0ZXMsIHNwZWNfMS5JTkRFWF9DSEFOR0UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGUubnVtYmVyKGJ5dGVzLCBpbmRleENoYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0SW5zdGFuY2VUeXBlKGl0ZW0sIHR5cGVbMF0sIHRoaXNfMiwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc18yLnRyeUVuY29kZVR5cGVJZChieXRlcywgdHlwZVswXSwgaXRlbS5jb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmVuY29kZShyb290LCBlbmNvZGVBbGwsIGNsaWVudCwgYnl0ZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0gIT09IHVuZGVmaW5lZCkgeyAvLyBpcyBhcnJheSBvZiBwcmltaXRpdmVzXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGUubnVtYmVyKGJ5dGVzLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGVQcmltaXRpdmVUeXBlKHR5cGVbMF0sIGJ5dGVzLCBpdGVtLCB0aGlzXzIsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVuY29kZUFsbCAmJiAhY2xpZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRjaGFuZ2VzLmRpc2NhcmQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlLm1hcCkge1xuICAgICAgICAgICAgICAgIHZhciAkY2hhbmdlcyA9IHZhbHVlLiRjaGFuZ2VzO1xuICAgICAgICAgICAgICAgIGlmIChjbGllbnQgJiYgZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNraXAgaWYgbm90IGFsbG93ZWQgYnkgY3VzdG9tIGZpbHRlclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbHRlci5jYWxsKHRoaXNfMiwgY2xpZW50LCB2YWx1ZSwgcm9vdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZW5jb2RlIE1hcCBvZiB0eXBlXG4gICAgICAgICAgICAgICAgZW5jb2RlLm51bWJlcihieXRlcywgZmllbGRJbmRleCk7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogZHVyaW5nIGBlbmNvZGVBbGxgLCByZW1vdmVkIGVudHJpZXMgYXJlIG5vdCBnb2luZyB0byBiZSBlbmNvZGVkXG4gICAgICAgICAgICAgICAgdmFyIGtleXMgPSBBcnJheS5mcm9tKChlbmNvZGVBbGwpIC8vICB8fCBjbGllbnRcbiAgICAgICAgICAgICAgICAgICAgPyAkY2hhbmdlcy5hbGxDaGFuZ2VzXG4gICAgICAgICAgICAgICAgICAgIDogJGNoYW5nZXMuY2hhbmdlcyk7XG4gICAgICAgICAgICAgICAgZW5jb2RlLm51bWJlcihieXRlcywga2V5cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByZXZpb3VzS2V5cyA9IE9iamVjdC5rZXlzKHRoaXNbX2ZpZWxkXSk7IC8vIHRoaXMgaXMgY29zdGx5IVxuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c0tleXMgPSBBcnJheS5mcm9tKCRjaGFuZ2VzLmFsbENoYW5nZXMpO1xuICAgICAgICAgICAgICAgIHZhciBpc0NoaWxkU2NoZW1hID0gdHlwZW9mICh0eXBlLm1hcCkgIT09IFwic3RyaW5nXCI7XG4gICAgICAgICAgICAgICAgdmFyIG51bUNoYW5nZXMgPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAvLyBhc3NlcnQgTWFwU2NoZW1hIHdhcyBwcm92aWRlZFxuICAgICAgICAgICAgICAgIGFzc2VydEluc3RhbmNlVHlwZSh0aGlzXzJbX2ZpZWxkXSwgTWFwU2NoZW1hXzEuTWFwU2NoZW1hLCB0aGlzXzIsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpXzEgPSAwOyBpXzEgPCBudW1DaGFuZ2VzOyBpXzErKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXzFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXNfMltfZmllbGRdW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXBJdGVtSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBUT0RPOiBmaWx0ZXIgbWFwIGJ5IGl0ZW1zIGluc3RlYWQgb2YgdGhlIHdob2xlIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGNsaWVudCAmJiBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIHNraXAgaWYgbm90IGFsbG93ZWQgYnkgY3VzdG9tIGZpbHRlclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKCFmaWx0ZXIuY2FsbCh0aGlzLCBjbGllbnQsIGl0ZW0sIHJvb3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuY29kZUFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzbHkgZGVsZXRlZCBpdGVtcyBhcmUgc2tpcHBlZCBkdXJpbmcgYGVuY29kZUFsbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuY29kZSBpbmRleCBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleENoYW5nZSA9ICRjaGFuZ2VzLmdldEluZGV4Q2hhbmdlKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gJiYgaW5kZXhDaGFuZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuY29kZS51aW50OChieXRlcywgc3BlY18xLklOREVYX0NIQU5HRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlLm51bWJlcihieXRlcywgdGhpc18yW19maWVsZF0uX2luZGV4ZXMuZ2V0KGluZGV4Q2hhbmdlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIC0gQWxsb3cgaXRlbSByZXBsYWNlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICogLSBBbGxvdyB0byB1c2UgdGhlIGluZGV4IG9mIGEgZGVsZXRlZCBpdGVtIHRvIGVuY29kZSBhcyBOSUxcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwSXRlbUluZGV4ID0gKCEkY2hhbmdlcy5pc0RlbGV0ZWQoa2V5KSB8fCAhaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXNfMltfZmllbGRdLl9pbmRleGVzLmdldChrZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzTmlsID0gKGl0ZW0gPT09IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBJbnZlcnQgTklMIHRvIHByZXZlbnQgY29sbGlzaW9uIHdpdGggZGF0YSBzdGFydGluZyB3aXRoIE5JTCBieXRlXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlJFTU9WRSBLRVkgSU5ERVhcIiwgeyBrZXkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzW19maWVsZF0uX2luZGV4ZXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGUudWludDgoYnl0ZXMsIHNwZWNfMS5OSUwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXBJdGVtSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlLm51bWJlcihieXRlcywgbWFwSXRlbUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuY29kZS5zdHJpbmcoYnl0ZXMsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gJiYgaXNDaGlsZFNjaGVtYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0SW5zdGFuY2VUeXBlKGl0ZW0sIHR5cGUubWFwLCB0aGlzXzIsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNfMi50cnlFbmNvZGVUeXBlSWQoYnl0ZXMsIHR5cGUubWFwLCBpdGVtLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZW5jb2RlKHJvb3QsIGVuY29kZUFsbCwgY2xpZW50LCBieXRlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzTmlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGVQcmltaXRpdmVUeXBlKHR5cGUubWFwLCBieXRlcywgaXRlbSwgdGhpc18yLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlbmNvZGVBbGwgJiYgIWNsaWVudCkge1xuICAgICAgICAgICAgICAgICAgICAkY2hhbmdlcy5kaXNjYXJkKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHRyYWNrIGFycmF5L21hcCBpbmRleGVzIHBlciBjbGllbnQgKGZvciBmaWx0ZXJpbmcpP1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBkbyBub3QgaXRlcmF0ZSB0aG91Z2ggYWxsIE1hcFNjaGVtYSBpbmRleGVzIGhlcmUuXG4gICAgICAgICAgICAgICAgICAgIHRoaXNfMltfZmllbGRdLl91cGRhdGVJbmRleGVzKHByZXZpb3VzS2V5cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsaWVudCAmJiBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2tpcCBpZiBub3QgYWxsb3dlZCBieSBjdXN0b20gZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZmlsdGVyLmNhbGwodGhpc18yLCBjbGllbnQsIHZhbHVlLCByb290KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbmNvZGUubnVtYmVyKGJ5dGVzLCBmaWVsZEluZGV4KTtcbiAgICAgICAgICAgICAgICBlbmNvZGVQcmltaXRpdmVUeXBlKHR5cGUsIGJ5dGVzLCB2YWx1ZSwgdGhpc18yLCBmaWVsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciB0aGlzXzIgPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoYW5nZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8yKGksIGwpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZsYWcgZW5kIG9mIFNjaGVtYSBvYmplY3Qgc3RydWN0dXJlXG4gICAgICAgIHRoaXMuX2VuY29kZUVuZE9mU3RydWN0dXJlKHRoaXMsIHJvb3QsIGJ5dGVzKTtcbiAgICAgICAgaWYgKCFlbmNvZGVBbGwgJiYgIWNsaWVudCkge1xuICAgICAgICAgICAgdGhpcy4kY2hhbmdlcy5kaXNjYXJkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH07XG4gICAgU2NoZW1hLnByb3RvdHlwZS5lbmNvZGVGaWx0ZXJlZCA9IGZ1bmN0aW9uIChjbGllbnQsIGJ5dGVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuY29kZSh0aGlzLCBmYWxzZSwgY2xpZW50LCBieXRlcyk7XG4gICAgfTtcbiAgICBTY2hlbWEucHJvdG90eXBlLmVuY29kZUFsbCA9IGZ1bmN0aW9uIChieXRlcykge1xuICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUodGhpcywgdHJ1ZSwgdW5kZWZpbmVkLCBieXRlcyk7XG4gICAgfTtcbiAgICBTY2hlbWEucHJvdG90eXBlLmVuY29kZUFsbEZpbHRlcmVkID0gZnVuY3Rpb24gKGNsaWVudCwgYnl0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlKHRoaXMsIHRydWUsIGNsaWVudCwgYnl0ZXMpO1xuICAgIH07XG4gICAgU2NoZW1hLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNsb25lZCA9IG5ldyAodGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIHZhciBzY2hlbWEgPSB0aGlzLl9zY2hlbWE7XG4gICAgICAgIGZvciAodmFyIGZpZWxkIGluIHNjaGVtYSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpc1tmaWVsZF0pID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mICh0aGlzW2ZpZWxkXS5jbG9uZSkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIGRlZXAgY2xvbmVcbiAgICAgICAgICAgICAgICBjbG9uZWRbZmllbGRdID0gdGhpc1tmaWVsZF0uY2xvbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHByaW1pdGl2ZSB2YWx1ZXNcbiAgICAgICAgICAgICAgICBjbG9uZWRbZmllbGRdID0gdGhpc1tmaWVsZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICB9O1xuICAgIFNjaGVtYS5wcm90b3R5cGUudHJpZ2dlckFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNoYW5nZXMgPSBbXTtcbiAgICAgICAgdmFyIHNjaGVtYSA9IHRoaXMuX3NjaGVtYTtcbiAgICAgICAgZm9yICh2YXIgZmllbGQgaW4gc2NoZW1hKSB7XG4gICAgICAgICAgICBpZiAodGhpc1tmaWVsZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNoYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXNbZmllbGRdLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1ZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fdHJpZ2dlckNoYW5nZXMoY2hhbmdlcyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIFNjaGVtYS5vbkVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY2hlbWEucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNjaGVtYSA9IHRoaXMuX3NjaGVtYTtcbiAgICAgICAgdmFyIGRlcHJlY2F0ZWQgPSB0aGlzLl9kZXByZWNhdGVkO1xuICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgIGZvciAodmFyIGZpZWxkIGluIHNjaGVtYSkge1xuICAgICAgICAgICAgaWYgKCFkZXByZWNhdGVkW2ZpZWxkXSAmJiB0aGlzW2ZpZWxkXSAhPT0gbnVsbCAmJiB0eXBlb2YgKHRoaXNbZmllbGRdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIG9ialtmaWVsZF0gPSAodHlwZW9mICh0aGlzW2ZpZWxkXS50b0pTT04pID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgID8gdGhpc1tmaWVsZF0udG9KU09OKClcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzW1wiX1wiICsgZmllbGRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgICBTY2hlbWEucHJvdG90eXBlLmRpc2NhcmRBbGxDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2NoZW1hID0gdGhpcy5fc2NoZW1hO1xuICAgICAgICB2YXIgY2hhbmdlcyA9IEFycmF5LmZyb20odGhpcy4kY2hhbmdlcy5jaGFuZ2VzKTtcbiAgICAgICAgdmFyIGZpZWxkc0J5SW5kZXggPSB0aGlzLl9maWVsZHNCeUluZGV4O1xuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICB2YXIgZmllbGQgPSBmaWVsZHNCeUluZGV4W2luZGV4XTtcbiAgICAgICAgICAgIHZhciB0eXBlID0gc2NoZW1hW2ZpZWxkXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXNbZmllbGRdO1xuICAgICAgICAgICAgLy8gc2tpcCB1bmNoYWduZWQgZmllbGRzXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUuX3NjaGVtYSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmRpc2NhcmRBbGxDaGFuZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4XzEgPSB2YWx1ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzW1wiX1wiICsgZmllbGRdW2luZGV4XzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0eXBlWzBdKSAhPT0gXCJzdHJpbmdcIiAmJiBpdGVtKSB7IC8vIGlzIGFycmF5IG9mIFNjaGVtYVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5kaXNjYXJkQWxsQ2hhbmdlcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlLiRjaGFuZ2VzLmRpc2NhcmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUubWFwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleXMgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgbWFwS2V5cyA9IE9iamVjdC5rZXlzKHRoaXNbXCJfXCIgKyBmaWVsZF0pO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gbWFwS2V5c1trZXlzW2ldXSB8fCBrZXlzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXNbXCJfXCIgKyBmaWVsZF1ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBTY2hlbWEgJiYgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5kaXNjYXJkQWxsQ2hhbmdlcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlLiRjaGFuZ2VzLmRpc2NhcmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRjaGFuZ2VzLmRpc2NhcmQoKTtcbiAgICB9O1xuICAgIFNjaGVtYS5wcm90b3R5cGUuX2VuY29kZUVuZE9mU3RydWN0dXJlID0gZnVuY3Rpb24gKGluc3RhbmNlLCByb290LCBieXRlcykge1xuICAgICAgICBpZiAoaW5zdGFuY2UgIT09IHJvb3QpIHtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goc3BlY18xLkVORF9PRl9TVFJVQ1RVUkUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY2hlbWEucHJvdG90eXBlLnRyeUVuY29kZVR5cGVJZCA9IGZ1bmN0aW9uIChieXRlcywgdHlwZSwgdGFyZ2V0VHlwZSkge1xuICAgICAgICBpZiAodHlwZS5fdHlwZWlkICE9PSB0YXJnZXRUeXBlLl90eXBlaWQpIHtcbiAgICAgICAgICAgIGVuY29kZS51aW50OChieXRlcywgc3BlY18xLlRZUEVfSUQpO1xuICAgICAgICAgICAgZW5jb2RlLnVpbnQ4KGJ5dGVzLCB0YXJnZXRUeXBlLl90eXBlaWQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY2hlbWEucHJvdG90eXBlLmNyZWF0ZVR5cGVJbnN0YW5jZSA9IGZ1bmN0aW9uIChieXRlcywgaXQsIHR5cGUpIHtcbiAgICAgICAgaWYgKGJ5dGVzW2l0Lm9mZnNldF0gPT09IHNwZWNfMS5UWVBFX0lEKSB7XG4gICAgICAgICAgICBpdC5vZmZzZXQrKztcbiAgICAgICAgICAgIHZhciBhbm90aGVyVHlwZSA9IHRoaXMuY29uc3RydWN0b3IuX2NvbnRleHQuZ2V0KGRlY29kZS51aW50OChieXRlcywgaXQpKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgYW5vdGhlclR5cGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgdHlwZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY2hlbWEucHJvdG90eXBlLl90cmlnZ2VyQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuJGxpc3RlbmVyc1tjaGFuZ2UuZmllbGRdO1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuaW52b2tlKGNoYW5nZS52YWx1ZSwgY2hhbmdlLnByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTY2hlbWEub25FcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgU2NoZW1hLm9uRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU2NoZW1hO1xufSgpKTtcbmV4cG9ydHMuU2NoZW1hID0gU2NoZW1hO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2NoZW1hLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZpbmVUeXBlcyA9IGV4cG9ydHMuZGVwcmVjYXRlZCA9IGV4cG9ydHMuZmlsdGVyID0gZXhwb3J0cy50eXBlID0gZXhwb3J0cy5nbG9iYWxDb250ZXh0ID0gZXhwb3J0cy5Db250ZXh0ID0gdm9pZCAwO1xudmFyIENoYW5nZVRyZWVfMSA9IHJlcXVpcmUoXCIuL0NoYW5nZVRyZWVcIik7XG52YXIgU2NoZW1hXzEgPSByZXF1aXJlKFwiLi9TY2hlbWFcIik7XG52YXIgQ29udGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb250ZXh0KCkge1xuICAgICAgICB0aGlzLnR5cGVzID0ge307XG4gICAgICAgIHRoaXMuc2NoZW1hcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgQ29udGV4dC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKHNjaGVtYSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWFzLmhhcyhzY2hlbWEpO1xuICAgIH07XG4gICAgQ29udGV4dC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHR5cGVpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlc1t0eXBlaWRdO1xuICAgIH07XG4gICAgQ29udGV4dC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHNjaGVtYSkge1xuICAgICAgICBzY2hlbWEuX3R5cGVpZCA9IHRoaXMuc2NoZW1hcy5zaXplO1xuICAgICAgICB0aGlzLnR5cGVzW3NjaGVtYS5fdHlwZWlkXSA9IHNjaGVtYTtcbiAgICAgICAgdGhpcy5zY2hlbWFzLnNldChzY2hlbWEsIHNjaGVtYS5fdHlwZWlkKTtcbiAgICB9O1xuICAgIHJldHVybiBDb250ZXh0O1xufSgpKTtcbmV4cG9ydHMuQ29udGV4dCA9IENvbnRleHQ7XG5leHBvcnRzLmdsb2JhbENvbnRleHQgPSBuZXcgQ29udGV4dCgpO1xuLyoqXG4gKiBgQHR5cGUoKWAgZGVjb3JhdG9yIGZvciBwcm94aWVzXG4gKi9cbmZ1bmN0aW9uIHR5cGUodHlwZSwgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IGV4cG9ydHMuZ2xvYmFsQ29udGV4dDsgfVxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBmaWVsZCkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3IgPSB0YXJnZXQuY29uc3RydWN0b3I7XG4gICAgICAgIGNvbnN0cnVjdG9yLl9jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgLypcbiAgICAgICAgICogc3RhdGljIHNjaGVtYVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCFjb250ZXh0Lmhhcyhjb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnRleHQuYWRkKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgIC8vIHN1cHBvcnQgaW5oZXJpdGFuY2VcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yLl9zY2hlbWEgPSBPYmplY3QuYXNzaWduKHt9LCBjb25zdHJ1Y3Rvci5fc2NoZW1hIHx8IHt9KTtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yLl9pbmRleGVzID0gT2JqZWN0LmFzc2lnbih7fSwgY29uc3RydWN0b3IuX2luZGV4ZXMgfHwge30pO1xuICAgICAgICAgICAgY29uc3RydWN0b3IuX2ZpZWxkc0J5SW5kZXggPSBPYmplY3QuYXNzaWduKHt9LCBjb25zdHJ1Y3Rvci5fZmllbGRzQnlJbmRleCB8fCB7fSk7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvci5fZGVzY3JpcHRvcnMgPSBPYmplY3QuYXNzaWduKHt9LCBjb25zdHJ1Y3Rvci5fZGVzY3JpcHRvcnMgfHwge30pO1xuICAgICAgICAgICAgY29uc3RydWN0b3IuX2RlcHJlY2F0ZWQgPSBPYmplY3QuYXNzaWduKHt9LCBjb25zdHJ1Y3Rvci5fZGVwcmVjYXRlZCB8fCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gT2JqZWN0LmtleXMoY29uc3RydWN0b3IuX3NjaGVtYSkubGVuZ3RoO1xuICAgICAgICBjb25zdHJ1Y3Rvci5fZmllbGRzQnlJbmRleFtpbmRleF0gPSBmaWVsZDtcbiAgICAgICAgY29uc3RydWN0b3IuX2luZGV4ZXNbZmllbGRdID0gaW5kZXg7XG4gICAgICAgIGNvbnN0cnVjdG9yLl9zY2hlbWFbZmllbGRdID0gdHlwZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNraXAgaWYgZGVzY3JpcHRvciBhbHJlYWR5IGV4aXN0cyBmb3IgdGhpcyBmaWVsZCAoYEBkZXByZWNhdGVkKClgKVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9yLl9kZXNjcmlwdG9yc1tmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogVE9ETzogYGlzU2NoZW1hYCAvIGBpc0FycmF5YCAvIGBpc01hcGAgaXMgcmVwZWF0ZWQgb24gbWFueSBwbGFjZXMhXG4gICAgICAgICAqIG5lZWQgdG8gcmVmYWN0b3IgYWxsIG9mIHRoZW0uXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkodHlwZSk7XG4gICAgICAgIHZhciBpc01hcCA9ICFpc0FycmF5ICYmIHR5cGUubWFwO1xuICAgICAgICB2YXIgaXNTY2hlbWEgPSAodHlwZW9mIChjb25zdHJ1Y3Rvci5fc2NoZW1hW2ZpZWxkXSkgPT09IFwiZnVuY3Rpb25cIik7XG4gICAgICAgIHZhciBmaWVsZENhY2hlZCA9IFwiX1wiICsgZmllbGQ7XG4gICAgICAgIGNvbnN0cnVjdG9yLl9kZXNjcmlwdG9yc1tmaWVsZENhY2hlZF0gPSB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3RydWN0b3IuX2Rlc2NyaXB0b3JzW2ZpZWxkXSA9IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2ZpZWxkQ2FjaGVkXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIENyZWF0ZSBQcm94eSBmb3IgYXJyYXkgb3IgbWFwIGl0ZW1zXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkgfHwgaXNNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgUHJveHkodmFsdWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKG9iaiwgcHJvcCkgeyByZXR1cm4gb2JqW3Byb3BdOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAob2JqLCBwcm9wLCBzZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wICE9PSBcImxlbmd0aFwiICYmIHByb3AuaW5kZXhPZihcIiRcIikgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIG5ldyB2YWx1ZSBoYXMgYSBwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IChpc0FycmF5KSA/IE51bWJlcihwcm9wKSA6IFN0cmluZyhwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvYmouJHNvcnRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyYWNrIGluZGV4IGNoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzSW5kZXggPSBvYmouJGNoYW5nZXMuZ2V0SW5kZXgoc2V0VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai4kY2hhbmdlcy5tYXBJbmRleENoYW5nZShzZXRWYWx1ZSwgcHJldmlvdXNJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouJGNoYW5nZXMubWFwSW5kZXgoc2V0VmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGlzTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBvYmouX2luZGV4ZXMuZGVsZXRlKHByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXRWYWx1ZSBpbnN0YW5jZW9mIFNjaGVtYV8xLlNjaGVtYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmV3IGl0ZW1zIGFyZSBmbGFnZ2VkIHdpdGggYWxsIGNoYW5nZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2V0VmFsdWUuJGNoYW5nZXMucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUuJGNoYW5nZXMgPSBuZXcgQ2hhbmdlVHJlZV8xLkNoYW5nZVRyZWUoc2V0VmFsdWUuX2luZGV4ZXMsIGtleSwgb2JqLiRjaGFuZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZS4kY2hhbmdlcy5jaGFuZ2VBbGwoc2V0VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gc2V0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXBwbHkgY2hhbmdlIG9uIEFycmF5U2NoZW1hIC8gTWFwU2NoZW1hXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai4kY2hhbmdlcy5jaGFuZ2Uoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc2V0VmFsdWUgIT09IG9ialtwcm9wXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNFVCBORVcgTEVOR1RIOlwiLCBzZXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUFJFVklPVVMgTEVOR1RIOiBcIiwgb2JqW3Byb3BdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gc2V0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uIChvYmosIHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZXRlZFZhbHVlID0gb2JqW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc01hcCAmJiBkZWxldGVkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouJGNoYW5nZXMuZGVsZXRlSW5kZXgoZGVsZXRlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLiRjaGFuZ2VzLmRlbGV0ZUluZGV4Q2hhbmdlKGRlbGV0ZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWxldGVkVmFsdWUuJGNoYW5nZXMpIHsgLy8gZGVsZXRlZFZhbHVlIG1heSBiZSBhIHByaW1pdGl2ZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRlbGV0ZWRWYWx1ZS4kY2hhbmdlcy5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2JqLl9pbmRleGVzLmRlbGV0ZShwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9ialtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gKGlzQXJyYXkpID8gTnVtYmVyKHByb3ApIDogU3RyaW5nKHByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai4kY2hhbmdlcy5jaGFuZ2Uoa2V5LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBza2lwIGlmIHZhbHVlIGlzIHRoZSBzYW1lIGFzIGNhY2hlZC5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHRoaXNbZmllbGRDYWNoZWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpc1tmaWVsZENhY2hlZF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBkaXJlY3RseSBhc3NpZ25pbmcgYW4gYXJyYXkgb2YgaXRlbXMgYXMgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNoYW5nZXMuY2hhbmdlKGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuJGNoYW5nZXMgPSBuZXcgQ2hhbmdlVHJlZV8xLkNoYW5nZVRyZWUoe30sIGZpZWxkLCB0aGlzLiRjaGFuZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlW2ldIGluc3RhbmNlb2YgU2NoZW1hXzEuU2NoZW1hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbaV0uJGNoYW5nZXMgPSBuZXcgQ2hhbmdlVHJlZV8xLkNoYW5nZVRyZWUodmFsdWVbaV0uX2luZGV4ZXMsIGksIHZhbHVlLiRjaGFuZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtpXS4kY2hhbmdlcy5jaGFuZ2VBbGwodmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuJGNoYW5nZXMubWFwSW5kZXgodmFsdWVbaV0sIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuJGNoYW5nZXMuY2hhbmdlKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpcmVjdGx5IGFzc2lnbmluZyBhIG1hcFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS4kY2hhbmdlcyA9IG5ldyBDaGFuZ2VUcmVlXzEuQ2hhbmdlVHJlZSh7fSwgZmllbGQsIHRoaXMuJGNoYW5nZXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjaGFuZ2VzLmNoYW5nZShmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlW2tleV0gaW5zdGFuY2VvZiBTY2hlbWFfMS5TY2hlbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtrZXldLiRjaGFuZ2VzID0gbmV3IENoYW5nZVRyZWVfMS5DaGFuZ2VUcmVlKHZhbHVlW2tleV0uX2luZGV4ZXMsIGtleSwgdmFsdWUuJGNoYW5nZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2tleV0uJGNoYW5nZXMuY2hhbmdlQWxsKHZhbHVlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuJGNoYW5nZXMubWFwSW5kZXgodmFsdWVba2V5XSwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLiRjaGFuZ2VzLmNoYW5nZShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzU2NoZW1hKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpcmVjdGx5IGFzc2lnbmluZyBhIGBTY2hlbWFgIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZSBtYXkgYmUgc2V0IHRvIG51bGxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2hhbmdlcy5jaGFuZ2UoZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLiRjaGFuZ2VzID0gbmV3IENoYW5nZVRyZWVfMS5DaGFuZ2VUcmVlKHZhbHVlLl9pbmRleGVzLCBmaWVsZCwgdGhpcy4kY2hhbmdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS4kY2hhbmdlcy5jaGFuZ2VBbGwodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBkaXJlY3RseSBhc3NpZ25pbmcgYSBwcmltaXRpdmUgdHlwZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjaGFuZ2VzLmNoYW5nZShmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfTtcbiAgICB9O1xufVxuZXhwb3J0cy50eXBlID0gdHlwZTtcbi8qKlxuICogYEBmaWx0ZXIoKWAgZGVjb3JhdG9yIGZvciBkZWZpbmluZyBkYXRhIGZpbHRlcnMgcGVyIGNsaWVudFxuICovXG5mdW5jdGlvbiBmaWx0ZXIoY2IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgZmllbGQpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICAgICAgICAvKlxuICAgICAgICAgKiBzdGF0aWMgZmlsdGVyc1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCFjb25zdHJ1Y3Rvci5fZmlsdGVycykge1xuICAgICAgICAgICAgY29uc3RydWN0b3IuX2ZpbHRlcnMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdHJ1Y3Rvci5fZmlsdGVyc1tmaWVsZF0gPSBjYjtcbiAgICB9O1xufVxuZXhwb3J0cy5maWx0ZXIgPSBmaWx0ZXI7XG4vKipcbiAqIGBAZGVwcmVjYXRlZCgpYCBmbGFnIGEgZmllbGQgYXMgZGVwcmVjYXRlZC5cbiAqIFRoZSBwcmV2aW91cyBgQHR5cGUoKWAgYW5ub3RhdGlvbiBzaG91bGQgcmVtYWluIGFsb25nIHdpdGggdGhpcyBvbmUuXG4gKi9cbmZ1bmN0aW9uIGRlcHJlY2F0ZWQodGhyb3dzLCBjb250ZXh0KSB7XG4gICAgaWYgKHRocm93cyA9PT0gdm9pZCAwKSB7IHRocm93cyA9IHRydWU7IH1cbiAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSBleHBvcnRzLmdsb2JhbENvbnRleHQ7IH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgZmllbGQpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICAgICAgICBjb25zdHJ1Y3Rvci5fZGVwcmVjYXRlZFtmaWVsZF0gPSB0cnVlO1xuICAgICAgICBpZiAodGhyb3dzKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvci5fZGVzY3JpcHRvcnNbZmllbGRdID0ge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyB0aHJvdyBuZXcgRXJyb3IoZmllbGQgKyBcIiBpcyBkZXByZWNhdGVkLlwiKTsgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmRlcHJlY2F0ZWQgPSBkZXByZWNhdGVkO1xuZnVuY3Rpb24gZGVmaW5lVHlwZXModGFyZ2V0LCBmaWVsZHMsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSBleHBvcnRzLmdsb2JhbENvbnRleHQ7IH1cbiAgICBmb3IgKHZhciBmaWVsZCBpbiBmaWVsZHMpIHtcbiAgICAgICAgdHlwZShmaWVsZHNbZmllbGRdLCBjb250ZXh0KSh0YXJnZXQucHJvdG90eXBlLCBmaWVsZCk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5leHBvcnRzLmRlZmluZVR5cGVzID0gZGVmaW5lVHlwZXM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbm5vdGF0aW9ucy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW5kZXhDaGFuZ2VDaGVjayA9IGV4cG9ydHMubmlsQ2hlY2sgPSBleHBvcnRzLmFycmF5Q2hlY2sgPSBleHBvcnRzLm51bWJlckNoZWNrID0gZXhwb3J0cy5udW1iZXIgPSBleHBvcnRzLnN0cmluZ0NoZWNrID0gZXhwb3J0cy5zdHJpbmcgPSBleHBvcnRzLmJvb2xlYW4gPSBleHBvcnRzLnJlYWRGbG9hdDY0ID0gZXhwb3J0cy5yZWFkRmxvYXQzMiA9IGV4cG9ydHMudWludDY0ID0gZXhwb3J0cy5pbnQ2NCA9IGV4cG9ydHMuZmxvYXQ2NCA9IGV4cG9ydHMuZmxvYXQzMiA9IGV4cG9ydHMudWludDMyID0gZXhwb3J0cy5pbnQzMiA9IGV4cG9ydHMudWludDE2ID0gZXhwb3J0cy5pbnQxNiA9IGV4cG9ydHMudWludDggPSBleHBvcnRzLmludDggPSB2b2lkIDA7XG52YXIgc3BlY18xID0gcmVxdWlyZShcIi4uL3NwZWNcIik7XG5mdW5jdGlvbiB1dGY4UmVhZChieXRlcywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgICB2YXIgc3RyaW5nID0gJycsIGNociA9IDA7XG4gICAgZm9yICh2YXIgaSA9IG9mZnNldCwgZW5kID0gb2Zmc2V0ICsgbGVuZ3RoOyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgdmFyIGJ5dGUgPSBieXRlc1tpXTtcbiAgICAgICAgaWYgKChieXRlICYgMHg4MCkgPT09IDB4MDApIHtcbiAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChieXRlICYgMHhlMCkgPT09IDB4YzApIHtcbiAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYnl0ZSAmIDB4MWYpIDw8IDYpIHxcbiAgICAgICAgICAgICAgICAoYnl0ZXNbKytpXSAmIDB4M2YpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoYnl0ZSAmIDB4ZjApID09PSAweGUwKSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGJ5dGUgJiAweDBmKSA8PCAxMikgfFxuICAgICAgICAgICAgICAgICgoYnl0ZXNbKytpXSAmIDB4M2YpIDw8IDYpIHxcbiAgICAgICAgICAgICAgICAoKGJ5dGVzWysraV0gJiAweDNmKSA8PCAwKSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGJ5dGUgJiAweGY4KSA9PT0gMHhmMCkge1xuICAgICAgICAgICAgY2hyID0gKChieXRlICYgMHgwNykgPDwgMTgpIHxcbiAgICAgICAgICAgICAgICAoKGJ5dGVzWysraV0gJiAweDNmKSA8PCAxMikgfFxuICAgICAgICAgICAgICAgICgoYnl0ZXNbKytpXSAmIDB4M2YpIDw8IDYpIHxcbiAgICAgICAgICAgICAgICAoKGJ5dGVzWysraV0gJiAweDNmKSA8PCAwKTtcbiAgICAgICAgICAgIGlmIChjaHIgPj0gMHgwMTAwMDApIHsgLy8gc3Vycm9nYXRlIHBhaXJcbiAgICAgICAgICAgICAgICBjaHIgLT0gMHgwMTAwMDA7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGNociA+Pj4gMTApICsgMHhEODAwLCAoY2hyICYgMHgzRkYpICsgMHhEQzAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYnl0ZSAnICsgYnl0ZS50b1N0cmluZygxNikpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xufVxuZnVuY3Rpb24gaW50OChieXRlcywgaXQpIHtcbiAgICByZXR1cm4gdWludDgoYnl0ZXMsIGl0KSA8PCAyNCA+PiAyNDtcbn1cbmV4cG9ydHMuaW50OCA9IGludDg7XG47XG5mdW5jdGlvbiB1aW50OChieXRlcywgaXQpIHtcbiAgICByZXR1cm4gYnl0ZXNbaXQub2Zmc2V0KytdO1xufVxuZXhwb3J0cy51aW50OCA9IHVpbnQ4O1xuO1xuZnVuY3Rpb24gaW50MTYoYnl0ZXMsIGl0KSB7XG4gICAgcmV0dXJuIHVpbnQxNihieXRlcywgaXQpIDw8IDE2ID4+IDE2O1xufVxuZXhwb3J0cy5pbnQxNiA9IGludDE2O1xuO1xuZnVuY3Rpb24gdWludDE2KGJ5dGVzLCBpdCkge1xuICAgIHJldHVybiBieXRlc1tpdC5vZmZzZXQrK10gfCBieXRlc1tpdC5vZmZzZXQrK10gPDwgODtcbn1cbmV4cG9ydHMudWludDE2ID0gdWludDE2O1xuO1xuZnVuY3Rpb24gaW50MzIoYnl0ZXMsIGl0KSB7XG4gICAgcmV0dXJuIGJ5dGVzW2l0Lm9mZnNldCsrXSB8IGJ5dGVzW2l0Lm9mZnNldCsrXSA8PCA4IHwgYnl0ZXNbaXQub2Zmc2V0KytdIDw8IDE2IHwgYnl0ZXNbaXQub2Zmc2V0KytdIDw8IDI0O1xufVxuZXhwb3J0cy5pbnQzMiA9IGludDMyO1xuO1xuZnVuY3Rpb24gdWludDMyKGJ5dGVzLCBpdCkge1xuICAgIHJldHVybiBpbnQzMihieXRlcywgaXQpID4+PiAwO1xufVxuZXhwb3J0cy51aW50MzIgPSB1aW50MzI7XG47XG5mdW5jdGlvbiBmbG9hdDMyKGJ5dGVzLCBpdCkge1xuICAgIHJldHVybiByZWFkRmxvYXQzMihieXRlcywgaXQpO1xufVxuZXhwb3J0cy5mbG9hdDMyID0gZmxvYXQzMjtcbmZ1bmN0aW9uIGZsb2F0NjQoYnl0ZXMsIGl0KSB7XG4gICAgcmV0dXJuIHJlYWRGbG9hdDY0KGJ5dGVzLCBpdCk7XG59XG5leHBvcnRzLmZsb2F0NjQgPSBmbG9hdDY0O1xuZnVuY3Rpb24gaW50NjQoYnl0ZXMsIGl0KSB7XG4gICAgdmFyIGxvdyA9IHVpbnQzMihieXRlcywgaXQpO1xuICAgIHZhciBoaWdoID0gaW50MzIoYnl0ZXMsIGl0KSAqIE1hdGgucG93KDIsIDMyKTtcbiAgICByZXR1cm4gaGlnaCArIGxvdztcbn1cbmV4cG9ydHMuaW50NjQgPSBpbnQ2NDtcbjtcbmZ1bmN0aW9uIHVpbnQ2NChieXRlcywgaXQpIHtcbiAgICB2YXIgbG93ID0gdWludDMyKGJ5dGVzLCBpdCk7XG4gICAgdmFyIGhpZ2ggPSB1aW50MzIoYnl0ZXMsIGl0KSAqIE1hdGgucG93KDIsIDMyKTtcbiAgICByZXR1cm4gaGlnaCArIGxvdztcbn1cbmV4cG9ydHMudWludDY0ID0gdWludDY0O1xuO1xuLy8gZm9yY2UgbGl0dGxlIGVuZGlhbiB0byBmYWNpbGl0YXRlIGRlY29kaW5nIG9uIG11bHRpcGxlIGltcGxlbWVudGF0aW9uc1xudmFyIF9pc0xpdHRsZUVuZGlhbiA9IHRydWU7IC8vIG5ldyBVaW50MTZBcnJheShuZXcgVWludDhBcnJheShbMSwgMF0pLmJ1ZmZlcilbMF0gPT09IDE7XG52YXIgX2ludDMyID0gbmV3IEludDMyQXJyYXkoMik7XG52YXIgX2Zsb2F0MzIgPSBuZXcgRmxvYXQzMkFycmF5KF9pbnQzMi5idWZmZXIpO1xudmFyIF9mbG9hdDY0ID0gbmV3IEZsb2F0NjRBcnJheShfaW50MzIuYnVmZmVyKTtcbmZ1bmN0aW9uIHJlYWRGbG9hdDMyKGJ5dGVzLCBpdCkge1xuICAgIF9pbnQzMlswXSA9IGludDMyKGJ5dGVzLCBpdCk7XG4gICAgcmV0dXJuIF9mbG9hdDMyWzBdO1xufVxuZXhwb3J0cy5yZWFkRmxvYXQzMiA9IHJlYWRGbG9hdDMyO1xuO1xuZnVuY3Rpb24gcmVhZEZsb2F0NjQoYnl0ZXMsIGl0KSB7XG4gICAgX2ludDMyW19pc0xpdHRsZUVuZGlhbiA/IDAgOiAxXSA9IGludDMyKGJ5dGVzLCBpdCk7XG4gICAgX2ludDMyW19pc0xpdHRsZUVuZGlhbiA/IDEgOiAwXSA9IGludDMyKGJ5dGVzLCBpdCk7XG4gICAgcmV0dXJuIF9mbG9hdDY0WzBdO1xufVxuZXhwb3J0cy5yZWFkRmxvYXQ2NCA9IHJlYWRGbG9hdDY0O1xuO1xuZnVuY3Rpb24gYm9vbGVhbihieXRlcywgaXQpIHtcbiAgICByZXR1cm4gdWludDgoYnl0ZXMsIGl0KSA+IDA7XG59XG5leHBvcnRzLmJvb2xlYW4gPSBib29sZWFuO1xuO1xuZnVuY3Rpb24gc3RyaW5nKGJ5dGVzLCBpdCkge1xuICAgIHZhciBwcmVmaXggPSBieXRlc1tpdC5vZmZzZXQrK107XG4gICAgdmFyIGxlbmd0aDtcbiAgICBpZiAocHJlZml4IDwgMHhjMCkge1xuICAgICAgICAvLyBmaXhzdHJcbiAgICAgICAgbGVuZ3RoID0gcHJlZml4ICYgMHgxZjtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJlZml4ID09PSAweGQ5KSB7XG4gICAgICAgIGxlbmd0aCA9IHVpbnQ4KGJ5dGVzLCBpdCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByZWZpeCA9PT0gMHhkYSkge1xuICAgICAgICBsZW5ndGggPSB1aW50MTYoYnl0ZXMsIGl0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJlZml4ID09PSAweGRiKSB7XG4gICAgICAgIGxlbmd0aCA9IHVpbnQzMihieXRlcywgaXQpO1xuICAgIH1cbiAgICB2YXIgdmFsdWUgPSB1dGY4UmVhZChieXRlcywgaXQub2Zmc2V0LCBsZW5ndGgpO1xuICAgIGl0Lm9mZnNldCArPSBsZW5ndGg7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0cy5zdHJpbmcgPSBzdHJpbmc7XG5mdW5jdGlvbiBzdHJpbmdDaGVjayhieXRlcywgaXQpIHtcbiAgICB2YXIgcHJlZml4ID0gYnl0ZXNbaXQub2Zmc2V0XTtcbiAgICByZXR1cm4gKFxuICAgIC8vIGZpeHN0clxuICAgIChwcmVmaXggPCAweGMwICYmIHByZWZpeCA+IDB4YTApIHx8XG4gICAgICAgIC8vIHN0ciA4XG4gICAgICAgIHByZWZpeCA9PT0gMHhkOSB8fFxuICAgICAgICAvLyBzdHIgMTZcbiAgICAgICAgcHJlZml4ID09PSAweGRhIHx8XG4gICAgICAgIC8vIHN0ciAzMlxuICAgICAgICBwcmVmaXggPT09IDB4ZGIpO1xufVxuZXhwb3J0cy5zdHJpbmdDaGVjayA9IHN0cmluZ0NoZWNrO1xuZnVuY3Rpb24gbnVtYmVyKGJ5dGVzLCBpdCkge1xuICAgIHZhciBwcmVmaXggPSBieXRlc1tpdC5vZmZzZXQrK107XG4gICAgaWYgKHByZWZpeCA8IDB4ODApIHtcbiAgICAgICAgLy8gcG9zaXRpdmUgZml4aW50XG4gICAgICAgIHJldHVybiBwcmVmaXg7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByZWZpeCA9PT0gMHhjYSkge1xuICAgICAgICAvLyBmbG9hdCAzMlxuICAgICAgICByZXR1cm4gcmVhZEZsb2F0MzIoYnl0ZXMsIGl0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJlZml4ID09PSAweGNiKSB7XG4gICAgICAgIC8vIGZsb2F0IDY0XG4gICAgICAgIHJldHVybiByZWFkRmxvYXQ2NChieXRlcywgaXQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcmVmaXggPT09IDB4Y2MpIHtcbiAgICAgICAgLy8gdWludCA4XG4gICAgICAgIHJldHVybiB1aW50OChieXRlcywgaXQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcmVmaXggPT09IDB4Y2QpIHtcbiAgICAgICAgLy8gdWludCAxNlxuICAgICAgICByZXR1cm4gdWludDE2KGJ5dGVzLCBpdCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByZWZpeCA9PT0gMHhjZSkge1xuICAgICAgICAvLyB1aW50IDMyXG4gICAgICAgIHJldHVybiB1aW50MzIoYnl0ZXMsIGl0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJlZml4ID09PSAweGNmKSB7XG4gICAgICAgIC8vIHVpbnQgNjRcbiAgICAgICAgcmV0dXJuIHVpbnQ2NChieXRlcywgaXQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcmVmaXggPT09IDB4ZDApIHtcbiAgICAgICAgLy8gaW50IDhcbiAgICAgICAgcmV0dXJuIGludDgoYnl0ZXMsIGl0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJlZml4ID09PSAweGQxKSB7XG4gICAgICAgIC8vIGludCAxNlxuICAgICAgICByZXR1cm4gaW50MTYoYnl0ZXMsIGl0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJlZml4ID09PSAweGQyKSB7XG4gICAgICAgIC8vIGludCAzMlxuICAgICAgICByZXR1cm4gaW50MzIoYnl0ZXMsIGl0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJlZml4ID09PSAweGQzKSB7XG4gICAgICAgIC8vIGludCA2NFxuICAgICAgICByZXR1cm4gaW50NjQoYnl0ZXMsIGl0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJlZml4ID4gMHhkZikge1xuICAgICAgICAvLyBuZWdhdGl2ZSBmaXhpbnRcbiAgICAgICAgcmV0dXJuICgweGZmIC0gcHJlZml4ICsgMSkgKiAtMTtcbiAgICB9XG59XG5leHBvcnRzLm51bWJlciA9IG51bWJlcjtcbjtcbmZ1bmN0aW9uIG51bWJlckNoZWNrKGJ5dGVzLCBpdCkge1xuICAgIHZhciBwcmVmaXggPSBieXRlc1tpdC5vZmZzZXRdO1xuICAgIC8vIHBvc2l0aXZlIGZpeGludCAtIDB4MDAgLSAweDdmXG4gICAgLy8gZmxvYXQgMzIgICAgICAgIC0gMHhjYVxuICAgIC8vIGZsb2F0IDY0ICAgICAgICAtIDB4Y2JcbiAgICAvLyB1aW50IDggICAgICAgICAgLSAweGNjXG4gICAgLy8gdWludCAxNiAgICAgICAgIC0gMHhjZFxuICAgIC8vIHVpbnQgMzIgICAgICAgICAtIDB4Y2VcbiAgICAvLyB1aW50IDY0ICAgICAgICAgLSAweGNmXG4gICAgLy8gaW50IDggICAgICAgICAgIC0gMHhkMFxuICAgIC8vIGludCAxNiAgICAgICAgICAtIDB4ZDFcbiAgICAvLyBpbnQgMzIgICAgICAgICAgLSAweGQyXG4gICAgLy8gaW50IDY0ICAgICAgICAgIC0gMHhkM1xuICAgIHJldHVybiAocHJlZml4IDwgMHg4MCB8fFxuICAgICAgICAocHJlZml4ID49IDB4Y2EgJiYgcHJlZml4IDw9IDB4ZDMpKTtcbn1cbmV4cG9ydHMubnVtYmVyQ2hlY2sgPSBudW1iZXJDaGVjaztcbmZ1bmN0aW9uIGFycmF5Q2hlY2soYnl0ZXMsIGl0KSB7XG4gICAgcmV0dXJuIGJ5dGVzW2l0Lm9mZnNldF0gPCAweGEwO1xuICAgIC8vIGNvbnN0IHByZWZpeCA9IGJ5dGVzW2l0Lm9mZnNldF0gO1xuICAgIC8vIGlmIChwcmVmaXggPCAweGEwKSB7XG4gICAgLy8gICByZXR1cm4gcHJlZml4O1xuICAgIC8vIC8vIGFycmF5XG4gICAgLy8gfSBlbHNlIGlmIChwcmVmaXggPT09IDB4ZGMpIHtcbiAgICAvLyAgIGl0Lm9mZnNldCArPSAyO1xuICAgIC8vIH0gZWxzZSBpZiAoMHhkZCkge1xuICAgIC8vICAgaXQub2Zmc2V0ICs9IDQ7XG4gICAgLy8gfVxuICAgIC8vIHJldHVybiBwcmVmaXg7XG59XG5leHBvcnRzLmFycmF5Q2hlY2sgPSBhcnJheUNoZWNrO1xuZnVuY3Rpb24gbmlsQ2hlY2soYnl0ZXMsIGl0KSB7XG4gICAgcmV0dXJuIGJ5dGVzW2l0Lm9mZnNldF0gPT09IHNwZWNfMS5OSUw7XG59XG5leHBvcnRzLm5pbENoZWNrID0gbmlsQ2hlY2s7XG5mdW5jdGlvbiBpbmRleENoYW5nZUNoZWNrKGJ5dGVzLCBpdCkge1xuICAgIHJldHVybiBieXRlc1tpdC5vZmZzZXRdID09PSBzcGVjXzEuSU5ERVhfQ0hBTkdFO1xufVxuZXhwb3J0cy5pbmRleENoYW5nZUNoZWNrID0gaW5kZXhDaGFuZ2VDaGVjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlY29kZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IEVuZGVsIERyZXllclxuICogQ29weXJpZ2h0IChjKSAyMDE0IElvbiBEcml2ZSBTb2Z0d2FyZSBMdGQuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRVxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm51bWJlciA9IGV4cG9ydHMuc3RyaW5nID0gZXhwb3J0cy5ib29sZWFuID0gZXhwb3J0cy53cml0ZUZsb2F0NjQgPSBleHBvcnRzLndyaXRlRmxvYXQzMiA9IGV4cG9ydHMuZmxvYXQ2NCA9IGV4cG9ydHMuZmxvYXQzMiA9IGV4cG9ydHMudWludDY0ID0gZXhwb3J0cy5pbnQ2NCA9IGV4cG9ydHMudWludDMyID0gZXhwb3J0cy5pbnQzMiA9IGV4cG9ydHMudWludDE2ID0gZXhwb3J0cy5pbnQxNiA9IGV4cG9ydHMudWludDggPSBleHBvcnRzLmludDggPSBleHBvcnRzLnV0ZjhXcml0ZSA9IHZvaWQgMDtcbi8qKlxuICogbXNncGFjayBpbXBsZW1lbnRhdGlvbiBoaWdobHkgYmFzZWQgb24gbm90ZXBhY2suaW9cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJyYWNoZXF1ZXNuZS9ub3RlcGFja1xuICovXG5mdW5jdGlvbiB1dGY4TGVuZ3RoKHN0cikge1xuICAgIHZhciBjID0gMCwgbGVuZ3RoID0gMDtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8IDB4ODApIHtcbiAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgbGVuZ3RoICs9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA8IDB4ZDgwMCB8fCBjID49IDB4ZTAwMCkge1xuICAgICAgICAgICAgbGVuZ3RoICs9IDM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBsZW5ndGggKz0gNDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGVuZ3RoO1xufVxuZnVuY3Rpb24gdXRmOFdyaXRlKHZpZXcsIG9mZnNldCwgc3RyKSB7XG4gICAgdmFyIGMgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDwgMHg4MCkge1xuICAgICAgICAgICAgdmlld1tvZmZzZXQrK10gPSBjO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgdmlld1tvZmZzZXQrK10gPSAweGMwIHwgKGMgPj4gNik7XG4gICAgICAgICAgICB2aWV3W29mZnNldCsrXSA9IDB4ODAgfCAoYyAmIDB4M2YpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweGQ4MDAgfHwgYyA+PSAweGUwMDApIHtcbiAgICAgICAgICAgIHZpZXdbb2Zmc2V0KytdID0gMHhlMCB8IChjID4+IDEyKTtcbiAgICAgICAgICAgIHZpZXdbb2Zmc2V0KytdID0gMHg4MCB8IChjID4+IDYgJiAweDNmKTtcbiAgICAgICAgICAgIHZpZXdbb2Zmc2V0KytdID0gMHg4MCB8IChjICYgMHgzZik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBjID0gMHgxMDAwMCArICgoKGMgJiAweDNmZikgPDwgMTApIHwgKHN0ci5jaGFyQ29kZUF0KGkpICYgMHgzZmYpKTtcbiAgICAgICAgICAgIHZpZXdbb2Zmc2V0KytdID0gMHhmMCB8IChjID4+IDE4KTtcbiAgICAgICAgICAgIHZpZXdbb2Zmc2V0KytdID0gMHg4MCB8IChjID4+IDEyICYgMHgzZik7XG4gICAgICAgICAgICB2aWV3W29mZnNldCsrXSA9IDB4ODAgfCAoYyA+PiA2ICYgMHgzZik7XG4gICAgICAgICAgICB2aWV3W29mZnNldCsrXSA9IDB4ODAgfCAoYyAmIDB4M2YpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy51dGY4V3JpdGUgPSB1dGY4V3JpdGU7XG5mdW5jdGlvbiBpbnQ4KGJ5dGVzLCB2YWx1ZSkge1xuICAgIGJ5dGVzLnB1c2godmFsdWUgJiAyNTUpO1xufVxuZXhwb3J0cy5pbnQ4ID0gaW50ODtcbjtcbmZ1bmN0aW9uIHVpbnQ4KGJ5dGVzLCB2YWx1ZSkge1xuICAgIGJ5dGVzLnB1c2godmFsdWUgJiAyNTUpO1xufVxuZXhwb3J0cy51aW50OCA9IHVpbnQ4O1xuO1xuZnVuY3Rpb24gaW50MTYoYnl0ZXMsIHZhbHVlKSB7XG4gICAgYnl0ZXMucHVzaCh2YWx1ZSAmIDI1NSk7XG4gICAgYnl0ZXMucHVzaCgodmFsdWUgPj4gOCkgJiAyNTUpO1xufVxuZXhwb3J0cy5pbnQxNiA9IGludDE2O1xuO1xuZnVuY3Rpb24gdWludDE2KGJ5dGVzLCB2YWx1ZSkge1xuICAgIGJ5dGVzLnB1c2godmFsdWUgJiAyNTUpO1xuICAgIGJ5dGVzLnB1c2goKHZhbHVlID4+IDgpICYgMjU1KTtcbn1cbmV4cG9ydHMudWludDE2ID0gdWludDE2O1xuO1xuZnVuY3Rpb24gaW50MzIoYnl0ZXMsIHZhbHVlKSB7XG4gICAgYnl0ZXMucHVzaCh2YWx1ZSAmIDI1NSk7XG4gICAgYnl0ZXMucHVzaCgodmFsdWUgPj4gOCkgJiAyNTUpO1xuICAgIGJ5dGVzLnB1c2goKHZhbHVlID4+IDE2KSAmIDI1NSk7XG4gICAgYnl0ZXMucHVzaCgodmFsdWUgPj4gMjQpICYgMjU1KTtcbn1cbmV4cG9ydHMuaW50MzIgPSBpbnQzMjtcbjtcbmZ1bmN0aW9uIHVpbnQzMihieXRlcywgdmFsdWUpIHtcbiAgICB2YXIgYjQgPSB2YWx1ZSA+PiAyNDtcbiAgICB2YXIgYjMgPSB2YWx1ZSA+PiAxNjtcbiAgICB2YXIgYjIgPSB2YWx1ZSA+PiA4O1xuICAgIHZhciBiMSA9IHZhbHVlO1xuICAgIGJ5dGVzLnB1c2goYjEgJiAyNTUpO1xuICAgIGJ5dGVzLnB1c2goYjIgJiAyNTUpO1xuICAgIGJ5dGVzLnB1c2goYjMgJiAyNTUpO1xuICAgIGJ5dGVzLnB1c2goYjQgJiAyNTUpO1xufVxuZXhwb3J0cy51aW50MzIgPSB1aW50MzI7XG47XG5mdW5jdGlvbiBpbnQ2NChieXRlcywgdmFsdWUpIHtcbiAgICB2YXIgaGlnaCA9IE1hdGguZmxvb3IodmFsdWUgLyBNYXRoLnBvdygyLCAzMikpO1xuICAgIHZhciBsb3cgPSB2YWx1ZSA+Pj4gMDtcbiAgICB1aW50MzIoYnl0ZXMsIGxvdyk7XG4gICAgdWludDMyKGJ5dGVzLCBoaWdoKTtcbn1cbmV4cG9ydHMuaW50NjQgPSBpbnQ2NDtcbjtcbmZ1bmN0aW9uIHVpbnQ2NChieXRlcywgdmFsdWUpIHtcbiAgICB2YXIgaGlnaCA9ICh2YWx1ZSAvIE1hdGgucG93KDIsIDMyKSkgPj4gMDtcbiAgICB2YXIgbG93ID0gdmFsdWUgPj4+IDA7XG4gICAgdWludDMyKGJ5dGVzLCBsb3cpO1xuICAgIHVpbnQzMihieXRlcywgaGlnaCk7XG59XG5leHBvcnRzLnVpbnQ2NCA9IHVpbnQ2NDtcbjtcbmZ1bmN0aW9uIGZsb2F0MzIoYnl0ZXMsIHZhbHVlKSB7XG4gICAgd3JpdGVGbG9hdDMyKGJ5dGVzLCB2YWx1ZSk7XG59XG5leHBvcnRzLmZsb2F0MzIgPSBmbG9hdDMyO1xuZnVuY3Rpb24gZmxvYXQ2NChieXRlcywgdmFsdWUpIHtcbiAgICB3cml0ZUZsb2F0NjQoYnl0ZXMsIHZhbHVlKTtcbn1cbmV4cG9ydHMuZmxvYXQ2NCA9IGZsb2F0NjQ7XG4vLyBmb3JjZSBsaXR0bGUgZW5kaWFuIHRvIGZhY2lsaXRhdGUgZGVjb2Rpbmcgb24gbXVsdGlwbGUgaW1wbGVtZW50YXRpb25zXG52YXIgX2lzTGl0dGxlRW5kaWFuID0gdHJ1ZTsgLy8gbmV3IFVpbnQxNkFycmF5KG5ldyBVaW50OEFycmF5KFsxLCAwXSkuYnVmZmVyKVswXSA9PT0gMTtcbnZhciBfaW50MzIgPSBuZXcgSW50MzJBcnJheSgyKTtcbnZhciBfZmxvYXQzMiA9IG5ldyBGbG9hdDMyQXJyYXkoX2ludDMyLmJ1ZmZlcik7XG52YXIgX2Zsb2F0NjQgPSBuZXcgRmxvYXQ2NEFycmF5KF9pbnQzMi5idWZmZXIpO1xuZnVuY3Rpb24gd3JpdGVGbG9hdDMyKGJ5dGVzLCB2YWx1ZSkge1xuICAgIF9mbG9hdDMyWzBdID0gdmFsdWU7XG4gICAgaW50MzIoYnl0ZXMsIF9pbnQzMlswXSk7XG59XG5leHBvcnRzLndyaXRlRmxvYXQzMiA9IHdyaXRlRmxvYXQzMjtcbjtcbmZ1bmN0aW9uIHdyaXRlRmxvYXQ2NChieXRlcywgdmFsdWUpIHtcbiAgICBfZmxvYXQ2NFswXSA9IHZhbHVlO1xuICAgIGludDMyKGJ5dGVzLCBfaW50MzJbX2lzTGl0dGxlRW5kaWFuID8gMCA6IDFdKTtcbiAgICBpbnQzMihieXRlcywgX2ludDMyW19pc0xpdHRsZUVuZGlhbiA/IDEgOiAwXSk7XG59XG5leHBvcnRzLndyaXRlRmxvYXQ2NCA9IHdyaXRlRmxvYXQ2NDtcbjtcbmZ1bmN0aW9uIGJvb2xlYW4oYnl0ZXMsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHVpbnQ4KGJ5dGVzLCB2YWx1ZSA/IDEgOiAwKTtcbn1cbmV4cG9ydHMuYm9vbGVhbiA9IGJvb2xlYW47XG47XG5mdW5jdGlvbiBzdHJpbmcoYnl0ZXMsIHZhbHVlKSB7XG4gICAgLy8gZW5jb2RlIGBudWxsYCBzdHJpbmdzIGFzIGVtcHR5LlxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gdXRmOExlbmd0aCh2YWx1ZSk7XG4gICAgdmFyIHNpemUgPSAwO1xuICAgIC8vIGZpeHN0clxuICAgIGlmIChsZW5ndGggPCAweDIwKSB7XG4gICAgICAgIGJ5dGVzLnB1c2gobGVuZ3RoIHwgMHhhMCk7XG4gICAgICAgIHNpemUgPSAxO1xuICAgIH1cbiAgICAvLyBzdHIgOFxuICAgIGVsc2UgaWYgKGxlbmd0aCA8IDB4MTAwKSB7XG4gICAgICAgIGJ5dGVzLnB1c2goMHhkOSk7XG4gICAgICAgIHVpbnQ4KGJ5dGVzLCBsZW5ndGgpO1xuICAgICAgICBzaXplID0gMjtcbiAgICB9XG4gICAgLy8gc3RyIDE2XG4gICAgZWxzZSBpZiAobGVuZ3RoIDwgMHgxMDAwMCkge1xuICAgICAgICBieXRlcy5wdXNoKDB4ZGEpO1xuICAgICAgICB1aW50MTYoYnl0ZXMsIGxlbmd0aCk7XG4gICAgICAgIHNpemUgPSAzO1xuICAgIH1cbiAgICAvLyBzdHIgMzJcbiAgICBlbHNlIGlmIChsZW5ndGggPCAweDEwMDAwMDAwMCkge1xuICAgICAgICBieXRlcy5wdXNoKDB4ZGIpO1xuICAgICAgICB1aW50MzIoYnl0ZXMsIGxlbmd0aCk7XG4gICAgICAgIHNpemUgPSA1O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdHJpbmcgdG9vIGxvbmcnKTtcbiAgICB9XG4gICAgdXRmOFdyaXRlKGJ5dGVzLCBieXRlcy5sZW5ndGgsIHZhbHVlKTtcbiAgICByZXR1cm4gc2l6ZSArIGxlbmd0aDtcbn1cbmV4cG9ydHMuc3RyaW5nID0gc3RyaW5nO1xuZnVuY3Rpb24gbnVtYmVyKGJ5dGVzLCB2YWx1ZSkge1xuICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlcihieXRlcywgMCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlcihieXRlcywgKHZhbHVlID4gMCkgPyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA6IC1OdW1iZXIuTUFYX1NBRkVfSU5URUdFUik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlICE9PSAodmFsdWUgfCAwKSkge1xuICAgICAgICBieXRlcy5wdXNoKDB4Y2IpO1xuICAgICAgICB3cml0ZUZsb2F0NjQoYnl0ZXMsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIDk7XG4gICAgICAgIC8vIFRPRE86IGVuY29kZSBmbG9hdCAzMj9cbiAgICAgICAgLy8gaXMgaXQgcG9zc2libGUgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIGZsb2F0MzIgLyBmbG9hdDY0IGhlcmU/XG4gICAgICAgIC8vIC8vIGZsb2F0IDMyXG4gICAgICAgIC8vIGJ5dGVzLnB1c2goMHhjYSk7XG4gICAgICAgIC8vIHdyaXRlRmxvYXQzMihieXRlcywgdmFsdWUpO1xuICAgICAgICAvLyByZXR1cm4gNTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID49IDApIHtcbiAgICAgICAgLy8gcG9zaXRpdmUgZml4bnVtXG4gICAgICAgIGlmICh2YWx1ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIHVpbnQ4KGJ5dGVzLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyB1aW50IDhcbiAgICAgICAgaWYgKHZhbHVlIDwgMHgxMDApIHtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goMHhjYyk7XG4gICAgICAgICAgICB1aW50OChieXRlcywgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdWludCAxNlxuICAgICAgICBpZiAodmFsdWUgPCAweDEwMDAwKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKDB4Y2QpO1xuICAgICAgICAgICAgdWludDE2KGJ5dGVzLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gMztcbiAgICAgICAgfVxuICAgICAgICAvLyB1aW50IDMyXG4gICAgICAgIGlmICh2YWx1ZSA8IDB4MTAwMDAwMDAwKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKDB4Y2UpO1xuICAgICAgICAgICAgdWludDMyKGJ5dGVzLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gNTtcbiAgICAgICAgfVxuICAgICAgICAvLyB1aW50IDY0XG4gICAgICAgIGJ5dGVzLnB1c2goMHhjZik7XG4gICAgICAgIHVpbnQ2NChieXRlcywgdmFsdWUpO1xuICAgICAgICByZXR1cm4gOTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIG5lZ2F0aXZlIGZpeG51bVxuICAgICAgICBpZiAodmFsdWUgPj0gLTB4MjApIHtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW50IDhcbiAgICAgICAgaWYgKHZhbHVlID49IC0weDgwKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKDB4ZDApO1xuICAgICAgICAgICAgaW50OChieXRlcywgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW50IDE2XG4gICAgICAgIGlmICh2YWx1ZSA+PSAtMHg4MDAwKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKDB4ZDEpO1xuICAgICAgICAgICAgaW50MTYoYnl0ZXMsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICB9XG4gICAgICAgIC8vIGludCAzMlxuICAgICAgICBpZiAodmFsdWUgPj0gLTB4ODAwMDAwMDApIHtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goMHhkMik7XG4gICAgICAgICAgICBpbnQzMihieXRlcywgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIDU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW50IDY0XG4gICAgICAgIGJ5dGVzLnB1c2goMHhkMyk7XG4gICAgICAgIGludDY0KGJ5dGVzLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiA5O1xuICAgIH1cbn1cbmV4cG9ydHMubnVtYmVyID0gbnVtYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW5jb2RlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBFeHRyYWN0ZWQgZnJvbSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9zdHJvbmctZXZlbnRzXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXZlbnRFbWl0dGVyID0gdm9pZCAwO1xudmFyIEV2ZW50RW1pdHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB9XG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChjYiwgb25jZSkge1xuICAgICAgICBpZiAob25jZSA9PT0gdm9pZCAwKSB7IG9uY2UgPSBmYWxzZTsgfVxuICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2goY2IpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gaGFuZGxlci5hcHBseSh2b2lkIDAsIGFyZ3MpOyB9KTtcbiAgICB9O1xuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuaW52b2tlQXN5bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuaGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiBoYW5kbGVyLmFwcGx5KHZvaWQgMCwgYXJncyk7IH0pKTtcbiAgICB9O1xuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaGFuZGxlcnMuaW5kZXhPZihjYik7XG4gICAgICAgIHRoaXMuaGFuZGxlcnNbaW5kZXhdID0gdGhpcy5oYW5kbGVyc1t0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDFdO1xuICAgICAgICB0aGlzLmhhbmRsZXJzLnBvcCgpO1xuICAgIH07XG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIH07XG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlcjtcbn0oKSk7XG5leHBvcnRzLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUV2ZW50RW1pdHRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTY2hlbWFfMSA9IHJlcXVpcmUoXCIuL1NjaGVtYVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNjaGVtYVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gU2NoZW1hXzEuU2NoZW1hOyB9IH0pO1xudmFyIE1hcFNjaGVtYV8xID0gcmVxdWlyZShcIi4vdHlwZXMvTWFwU2NoZW1hXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFwU2NoZW1hXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBNYXBTY2hlbWFfMS5NYXBTY2hlbWE7IH0gfSk7XG52YXIgQXJyYXlTY2hlbWFfMSA9IHJlcXVpcmUoXCIuL3R5cGVzL0FycmF5U2NoZW1hXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQXJyYXlTY2hlbWFcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEFycmF5U2NoZW1hXzEuQXJyYXlTY2hlbWE7IH0gfSk7XG4vLyBVdGlsc1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImR1bXBDaGFuZ2VzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1dGlsc18xLmR1bXBDaGFuZ2VzOyB9IH0pO1xuLy8gUmVmbGVjdGlvblxudmFyIFJlZmxlY3Rpb25fMSA9IHJlcXVpcmUoXCIuL1JlZmxlY3Rpb25cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSZWZsZWN0aW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBSZWZsZWN0aW9uXzEuUmVmbGVjdGlvbjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJlZmxlY3Rpb25UeXBlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBSZWZsZWN0aW9uXzEuUmVmbGVjdGlvblR5cGU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSZWZsZWN0aW9uRmllbGRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFJlZmxlY3Rpb25fMS5SZWZsZWN0aW9uRmllbGQ7IH0gfSk7XG52YXIgYW5ub3RhdGlvbnNfMSA9IHJlcXVpcmUoXCIuL2Fubm90YXRpb25zXCIpO1xuLy8gQW5ub3RhdGlvbnNcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInR5cGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFubm90YXRpb25zXzEudHlwZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlcHJlY2F0ZWRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFubm90YXRpb25zXzEuZGVwcmVjYXRlZDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImZpbHRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYW5ub3RhdGlvbnNfMS5maWx0ZXI7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZpbmVUeXBlc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYW5ub3RhdGlvbnNfMS5kZWZpbmVUeXBlczsgfSB9KTtcbi8vIFR5cGVzXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDb250ZXh0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhbm5vdGF0aW9uc18xLkNvbnRleHQ7IH0gfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVFlQRV9JRCA9IGV4cG9ydHMuSU5ERVhfQ0hBTkdFID0gZXhwb3J0cy5OSUwgPSBleHBvcnRzLkVORF9PRl9TVFJVQ1RVUkUgPSB2b2lkIDA7XG5leHBvcnRzLkVORF9PRl9TVFJVQ1RVUkUgPSAweGMxOyAvLyAobXNncGFjayBzcGVjOiBuZXZlciB1c2VkKVxuZXhwb3J0cy5OSUwgPSAweGMwO1xuZXhwb3J0cy5JTkRFWF9DSEFOR0UgPSAweGQ0O1xuZXhwb3J0cy5UWVBFX0lEID0gMHhkNTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwZWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgICAgcltrXSA9IGFbal07XG4gICAgcmV0dXJuIHI7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BcnJheVNjaGVtYSA9IHZvaWQgMDtcbnZhciBBcnJheVNjaGVtYSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXJyYXlTY2hlbWEsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXJyYXlTY2hlbWEoKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaXRlbXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgaXRlbXMpIHx8IHRoaXM7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgT2JqZWN0LmNyZWF0ZShBcnJheVNjaGVtYS5wcm90b3R5cGUpKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoX3RoaXMsIHtcbiAgICAgICAgICAgICRzb3J0aW5nOiB7IHZhbHVlOiB1bmRlZmluZWQsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSB9LFxuICAgICAgICAgICAgJGNoYW5nZXM6IHsgdmFsdWU6IHVuZGVmaW5lZCwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlIH0sXG4gICAgICAgICAgICBvbkFkZDogeyB2YWx1ZTogdW5kZWZpbmVkLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUgfSxcbiAgICAgICAgICAgIG9uUmVtb3ZlOiB7IHZhbHVlOiB1bmRlZmluZWQsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSB9LFxuICAgICAgICAgICAgb25DaGFuZ2U6IHsgdmFsdWU6IHVuZGVmaW5lZCwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlIH0sXG4gICAgICAgICAgICB0cmlnZ2VyQWxsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5vbkFkZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3RoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm9uQWRkKF90aGlzW2ldLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b0pTT046IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3RoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmpBdCA9IF90aGlzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goKHR5cGVvZiAob2JqQXQudG9KU09OKSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gb2JqQXQudG9KU09OKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG9iakF0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9uZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoaXNEZWNvZGluZykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmVkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNEZWNvZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVkID0gQXJyYXlTY2hlbWEub2YuYXBwbHkoQXJyYXlTY2hlbWEsIF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lZC5vbkFkZCA9IF90aGlzLm9uQWRkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVkLm9uUmVtb3ZlID0gX3RoaXMub25SZW1vdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZWQub25DaGFuZ2UgPSBfdGhpcy5vbkNoYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lZCA9IG5ldyAoQXJyYXlTY2hlbWEuYmluZC5hcHBseShBcnJheVNjaGVtYSwgX19zcHJlYWRBcnJheXMoW3ZvaWQgMF0sIF90aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGl0ZW0pID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkpKSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXlTY2hlbWEsIFN5bWJvbC5zcGVjaWVzLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQXJyYXlTY2hlbWE7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBBcnJheVNjaGVtYS5wcm90b3R5cGUuc29ydCA9IGZ1bmN0aW9uIChjb21wYXJlRm4pIHtcbiAgICAgICAgdGhpcy4kc29ydGluZyA9IHRydWU7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuc29ydC5jYWxsKHRoaXMsIGNvbXBhcmVGbik7XG4gICAgICAgIGlmICh0aGlzLiRjaGFuZ2VzKSB7IC8vIGFsbG93IHRvIC5zbGljZSgpICsgLnNvcnQoKVxuICAgICAgICAgICAgdmFyIGNoYW5nZXMgPSBBcnJheS5mcm9tKHRoaXMuJGNoYW5nZXMuY2hhbmdlcyk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNoYW5nZXNfMSA9IGNoYW5nZXM7IF9pIDwgY2hhbmdlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBjaGFuZ2VzXzFbX2ldO1xuICAgICAgICAgICAgICAgIC8vIHRyYWNrIGluZGV4IGNoYW5nZVxuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c0luZGV4ID0gdGhpcy4kY2hhbmdlcy5nZXRJbmRleCh0aGlzW2tleV0pO1xuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c0luZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2hhbmdlcy5tYXBJbmRleENoYW5nZSh0aGlzW2tleV0sIHByZXZpb3VzSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRjaGFuZ2VzLm1hcEluZGV4KHRoaXNba2V5XSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRzb3J0aW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQXJyYXlTY2hlbWEucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChjYWxsYmFja2ZuLCB0aGlzQXJnKSB7XG4gICAgICAgIHZhciBmaWx0ZXJlZCA9IF9zdXBlci5wcm90b3R5cGUuZmlsdGVyLmNhbGwodGhpcywgY2FsbGJhY2tmbik7XG4gICAgICAgIGZpbHRlcmVkLiRjaGFuZ2VzID0gdGhpcy4kY2hhbmdlcy5jbG9uZSgpO1xuICAgICAgICByZXR1cm4gZmlsdGVyZWQ7XG4gICAgfTtcbiAgICBBcnJheVNjaGVtYS5wcm90b3R5cGUuc3BsaWNlID0gZnVuY3Rpb24gKHN0YXJ0LCBkZWxldGVDb3VudCkge1xuICAgICAgICB2YXIgaW5zZXJ0ID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBpbnNlcnRbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlbW92ZWRJdGVtcyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgdmFyIG1vdmVkSXRlbXMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwodGhpcywgZnVuY3Rpb24gKGl0ZW0sIGlkeCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkeCA+PSBzdGFydCArIGRlbGV0ZUNvdW50IC0gMTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbW92ZWRJdGVtcy5tYXAoZnVuY3Rpb24gKHJlbW92ZWRJdGVtKSB7XG4gICAgICAgICAgICB2YXIgJGNoYW5nZXMgPSByZW1vdmVkSXRlbSAmJiByZW1vdmVkSXRlbS4kY2hhbmdlcztcbiAgICAgICAgICAgIC8vIElmIHRoZSByZW1vdmVkIGl0ZW0gaXMgYSBzY2hlbWEgd2UgbmVlZCB0byB1cGRhdGUgaXQuXG4gICAgICAgICAgICBpZiAoJGNoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICAkY2hhbmdlcy5wYXJlbnQuZGVsZXRlSW5kZXgocmVtb3ZlZEl0ZW0pO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSAkY2hhbmdlcy5wYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtb3ZlZEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKG1vdmVkSXRlbSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIG1vdmVkIGl0ZW0gaXMgYSBzY2hlbWEgd2UgbmVlZCB0byB1cGRhdGUgaXQuXG4gICAgICAgICAgICB2YXIgJGNoYW5nZXMgPSBtb3ZlZEl0ZW0gJiYgbW92ZWRJdGVtLiRjaGFuZ2VzO1xuICAgICAgICAgICAgaWYgKCRjaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGN1cnJlbnQgaW5kZXggaW4gcGFyZW50LCBzbyBzdWJzZXF1ZW50IGNoYW5nZXMgaW5cbiAgICAgICAgICAgICAgICAvLyB0aGlzIGl0ZW0ncyBwcm9wZXJ0aWVzIGFyZSBjb3JyZWN0bHkgcmVmbGVjdGVkLlxuICAgICAgICAgICAgICAgICRjaGFuZ2VzLnBhcmVudEZpZWxkLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVtb3ZlZEl0ZW1zO1xuICAgIH07XG4gICAgcmV0dXJuIEFycmF5U2NoZW1hO1xufShBcnJheSkpO1xuZXhwb3J0cy5BcnJheVNjaGVtYSA9IEFycmF5U2NoZW1hO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXJyYXlTY2hlbWEuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hcFNjaGVtYSA9IHZvaWQgMDtcbnZhciBNYXBTY2hlbWEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwU2NoZW1hKG9iaikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAob2JqID09PSB2b2lkIDApIHsgb2JqID0ge307IH1cbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgdGhpc1trZXldID0gb2JqW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgJGNoYW5nZXM6IHsgdmFsdWU6IHVuZGVmaW5lZCwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlIH0sXG4gICAgICAgICAgICBvbkFkZDogeyB2YWx1ZTogdW5kZWZpbmVkLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUgfSxcbiAgICAgICAgICAgIG9uUmVtb3ZlOiB7IHZhbHVlOiB1bmRlZmluZWQsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSB9LFxuICAgICAgICAgICAgb25DaGFuZ2U6IHsgdmFsdWU6IHVuZGVmaW5lZCwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlIH0sXG4gICAgICAgICAgICBjbG9uZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoaXNEZWNvZGluZykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmVkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNEZWNvZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LXNpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lZCA9IE9iamVjdC5hc3NpZ24obmV3IE1hcFNjaGVtYSgpLCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZWQub25BZGQgPSBfdGhpcy5vbkFkZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lZC5vblJlbW92ZSA9IF90aGlzLm9uUmVtb3ZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVkLm9uQ2hhbmdlID0gX3RoaXMub25DaGFuZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXJ2ZXItc2lkZVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lZF8xID0gbmV3IE1hcFNjaGVtYSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIF90aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoX3RoaXNba2V5XSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVkXzFba2V5XSA9IF90aGlzW2tleV0uY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lZF8xW2tleV0gPSBfdGhpc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0cmlnZ2VyQWxsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5vbkFkZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBfdGhpcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub25BZGQoX3RoaXNba2V5XSwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b0pTT046IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWFwID0ge307XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBfdGhpcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwW2tleV0gPSAodHlwZW9mIChfdGhpc1trZXldLnRvSlNPTikgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF90aGlzW2tleV0udG9KU09OKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF90aGlzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2luZGV4ZXM6IHsgdmFsdWU6IG5ldyBNYXAoKSwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlIH0sXG4gICAgICAgICAgICBfdXBkYXRlSW5kZXhlczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoYWxsS2V5cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBhbGxLZXlzXzEgPSBhbGxLZXlzOyBfaSA8IGFsbEtleXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBhbGxLZXlzXzFbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlcy5zZXQoa2V5LCBpbmRleCsrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5faW5kZXhlcyA9IGluZGV4ZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBNYXBTY2hlbWE7XG59KCkpO1xuZXhwb3J0cy5NYXBTY2hlbWEgPSBNYXBTY2hlbWE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NYXBTY2hlbWEuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmR1bXBDaGFuZ2VzID0gdm9pZCAwO1xudmFyIF8xID0gcmVxdWlyZShcIi4vXCIpO1xudmFyIE1hcFNjaGVtYV8xID0gcmVxdWlyZShcIi4vdHlwZXMvTWFwU2NoZW1hXCIpO1xudmFyIEFycmF5U2NoZW1hXzEgPSByZXF1aXJlKFwiLi90eXBlcy9BcnJheVNjaGVtYVwiKTtcbmZ1bmN0aW9uIGR1bXBDaGFuZ2VzKHNjaGVtYSkge1xuICAgIHZhciBkdW1wID0ge307XG4gICAgdmFyICRjaGFuZ2VzID0gc2NoZW1hLiRjaGFuZ2VzO1xuICAgIHZhciBmaWVsZHNCeUluZGV4ID0gc2NoZW1hWydfZmllbGRzQnlJbmRleCddIHx8IHt9O1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBBcnJheS5mcm9tKCRjaGFuZ2VzLmNoYW5nZXMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgZmllbGRJbmRleCA9IF9hW19pXTtcbiAgICAgICAgdmFyIGZpZWxkID0gZmllbGRzQnlJbmRleFtmaWVsZEluZGV4XSB8fCBmaWVsZEluZGV4O1xuICAgICAgICBpZiAoc2NoZW1hW2ZpZWxkXSBpbnN0YW5jZW9mIE1hcFNjaGVtYV8xLk1hcFNjaGVtYSB8fFxuICAgICAgICAgICAgc2NoZW1hW2ZpZWxkXSBpbnN0YW5jZW9mIEFycmF5U2NoZW1hXzEuQXJyYXlTY2hlbWEgfHxcbiAgICAgICAgICAgIHNjaGVtYVtmaWVsZF0gaW5zdGFuY2VvZiBfMS5TY2hlbWEpIHtcbiAgICAgICAgICAgIGR1bXBbZmllbGRdID0gZHVtcENoYW5nZXMoc2NoZW1hW2ZpZWxkXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkdW1wW2ZpZWxkXSA9IHNjaGVtYVtmaWVsZF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGR1bXA7XG59XG5leHBvcnRzLmR1bXBDaGFuZ2VzID0gZHVtcENoYW5nZXM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cblxuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcblx0JyMwMDAwQ0MnLFxuXHQnIzAwMDBGRicsXG5cdCcjMDAzM0NDJyxcblx0JyMwMDMzRkYnLFxuXHQnIzAwNjZDQycsXG5cdCcjMDA2NkZGJyxcblx0JyMwMDk5Q0MnLFxuXHQnIzAwOTlGRicsXG5cdCcjMDBDQzAwJyxcblx0JyMwMENDMzMnLFxuXHQnIzAwQ0M2NicsXG5cdCcjMDBDQzk5Jyxcblx0JyMwMENDQ0MnLFxuXHQnIzAwQ0NGRicsXG5cdCcjMzMwMENDJyxcblx0JyMzMzAwRkYnLFxuXHQnIzMzMzNDQycsXG5cdCcjMzMzM0ZGJyxcblx0JyMzMzY2Q0MnLFxuXHQnIzMzNjZGRicsXG5cdCcjMzM5OUNDJyxcblx0JyMzMzk5RkYnLFxuXHQnIzMzQ0MwMCcsXG5cdCcjMzNDQzMzJyxcblx0JyMzM0NDNjYnLFxuXHQnIzMzQ0M5OScsXG5cdCcjMzNDQ0NDJyxcblx0JyMzM0NDRkYnLFxuXHQnIzY2MDBDQycsXG5cdCcjNjYwMEZGJyxcblx0JyM2NjMzQ0MnLFxuXHQnIzY2MzNGRicsXG5cdCcjNjZDQzAwJyxcblx0JyM2NkNDMzMnLFxuXHQnIzk5MDBDQycsXG5cdCcjOTkwMEZGJyxcblx0JyM5OTMzQ0MnLFxuXHQnIzk5MzNGRicsXG5cdCcjOTlDQzAwJyxcblx0JyM5OUNDMzMnLFxuXHQnI0NDMDAwMCcsXG5cdCcjQ0MwMDMzJyxcblx0JyNDQzAwNjYnLFxuXHQnI0NDMDA5OScsXG5cdCcjQ0MwMENDJyxcblx0JyNDQzAwRkYnLFxuXHQnI0NDMzMwMCcsXG5cdCcjQ0MzMzMzJyxcblx0JyNDQzMzNjYnLFxuXHQnI0NDMzM5OScsXG5cdCcjQ0MzM0NDJyxcblx0JyNDQzMzRkYnLFxuXHQnI0NDNjYwMCcsXG5cdCcjQ0M2NjMzJyxcblx0JyNDQzk5MDAnLFxuXHQnI0NDOTkzMycsXG5cdCcjQ0NDQzAwJyxcblx0JyNDQ0NDMzMnLFxuXHQnI0ZGMDAwMCcsXG5cdCcjRkYwMDMzJyxcblx0JyNGRjAwNjYnLFxuXHQnI0ZGMDA5OScsXG5cdCcjRkYwMENDJyxcblx0JyNGRjAwRkYnLFxuXHQnI0ZGMzMwMCcsXG5cdCcjRkYzMzMzJyxcblx0JyNGRjMzNjYnLFxuXHQnI0ZGMzM5OScsXG5cdCcjRkYzM0NDJyxcblx0JyNGRjMzRkYnLFxuXHQnI0ZGNjYwMCcsXG5cdCcjRkY2NjMzJyxcblx0JyNGRjk5MDAnLFxuXHQnI0ZGOTkzMycsXG5cdCcjRkZDQzAwJyxcblx0JyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcblx0Ly8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2Vcblx0Ly8gZXhwbGljaXRseVxuXHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgKHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgd2luZG93LnByb2Nlc3MuX19ud2pzKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBJcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuXHQvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuXHRyZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcblx0XHQvLyBJcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG5cdFx0KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcblx0XHQvLyBJcyBmaXJlZm94ID49IHYzMT9cblx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcblx0XHQvLyBEb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcblx0YXJnc1swXSA9ICh0aGlzLnVzZUNvbG9ycyA/ICclYycgOiAnJykgK1xuXHRcdHRoaXMubmFtZXNwYWNlICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnICVjJyA6ICcgJykgK1xuXHRcdGFyZ3NbMF0gK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICclYyAnIDogJyAnKSArXG5cdFx0JysnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuXHRpZiAoIXRoaXMudXNlQ29sb3JzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG5cdGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpO1xuXG5cdC8vIFRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG5cdC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cblx0Ly8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG5cdGxldCBpbmRleCA9IDA7XG5cdGxldCBsYXN0QyA9IDA7XG5cdGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBtYXRjaCA9PiB7XG5cdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluZGV4Kys7XG5cdFx0aWYgKG1hdGNoID09PSAnJWMnKSB7XG5cdFx0XHQvLyBXZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcblx0XHRcdC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG5cdFx0XHRsYXN0QyA9IGluZGV4O1xuXHRcdH1cblx0fSk7XG5cblx0YXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBsb2coLi4uYXJncykge1xuXHQvLyBUaGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuXHQvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuXHRyZXR1cm4gdHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnICYmXG5cdFx0Y29uc29sZS5sb2cgJiZcblx0XHRjb25zb2xlLmxvZyguLi5hcmdzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuXHR0cnkge1xuXHRcdGlmIChuYW1lc3BhY2VzKSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2Uuc2V0SXRlbSgnZGVidWcnLCBuYW1lc3BhY2VzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRsZXQgcjtcblx0dHJ5IHtcblx0XHRyID0gZXhwb3J0cy5zdG9yYWdlLmdldEl0ZW0oJ2RlYnVnJyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG5cblx0Ly8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuXHRpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcblx0XHRyID0gcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cblxuXHRyZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG5cdHRyeSB7XG5cdFx0Ly8gVFZNTEtpdCAoQXBwbGUgVFYgSlMgUnVudGltZSkgZG9lcyBub3QgaGF2ZSBhIHdpbmRvdyBvYmplY3QsIGp1c3QgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dFxuXHRcdC8vIFRoZSBCcm93c2VyIGFsc28gaGFzIGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHQuXG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbW1vbicpKGV4cG9ydHMpO1xuXG5jb25zdCB7Zm9ybWF0dGVyc30gPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24gKHYpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVycm9yLm1lc3NhZ2U7XG5cdH1cbn07XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5mdW5jdGlvbiBzZXR1cChlbnYpIHtcblx0Y3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuZGVmYXVsdCA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5jb2VyY2UgPSBjb2VyY2U7XG5cdGNyZWF0ZURlYnVnLmRpc2FibGUgPSBkaXNhYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGUgPSBlbmFibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRjcmVhdGVEZWJ1Zy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cblx0T2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0Y3JlYXRlRGVidWdba2V5XSA9IGVudltrZXldO1xuXHR9KTtcblxuXHQvKipcblx0KiBBY3RpdmUgYGRlYnVnYCBpbnN0YW5jZXMuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmluc3RhbmNlcyA9IFtdO1xuXG5cdC8qKlxuXHQqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuXHQqL1xuXG5cdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0LyoqXG5cdCogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuXHQqXG5cdCogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuXHQqL1xuXHRjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzID0ge307XG5cblx0LyoqXG5cdCogU2VsZWN0cyBhIGNvbG9yIGZvciBhIGRlYnVnIG5hbWVzcGFjZVxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgVGhlIG5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBmb3IgdGhlIGRlYnVnIGluc3RhbmNlIHRvIGJlIGNvbG9yZWRcblx0KiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfSBBbiBBTlNJIGNvbG9yIGNvZGUgZm9yIHRoZSBnaXZlbiBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG5cdFx0bGV0IGhhc2ggPSAwO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0aGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcblx0XHR9XG5cblx0XHRyZXR1cm4gY3JlYXRlRGVidWcuY29sb3JzW01hdGguYWJzKGhhc2gpICUgY3JlYXRlRGVidWcuY29sb3JzLmxlbmd0aF07XG5cdH1cblx0Y3JlYXRlRGVidWcuc2VsZWN0Q29sb3IgPSBzZWxlY3RDb2xvcjtcblxuXHQvKipcblx0KiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAcmV0dXJuIHtGdW5jdGlvbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblx0XHRsZXQgcHJldlRpbWU7XG5cblx0XHRmdW5jdGlvbiBkZWJ1ZyguLi5hcmdzKSB7XG5cdFx0XHQvLyBEaXNhYmxlZD9cblx0XHRcdGlmICghZGVidWcuZW5hYmxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHNlbGYgPSBkZWJ1ZztcblxuXHRcdFx0Ly8gU2V0IGBkaWZmYCB0aW1lc3RhbXBcblx0XHRcdGNvbnN0IGN1cnIgPSBOdW1iZXIobmV3IERhdGUoKSk7XG5cdFx0XHRjb25zdCBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG5cdFx0XHRzZWxmLmRpZmYgPSBtcztcblx0XHRcdHNlbGYucHJldiA9IHByZXZUaW1lO1xuXHRcdFx0c2VsZi5jdXJyID0gY3Vycjtcblx0XHRcdHByZXZUaW1lID0gY3VycjtcblxuXHRcdFx0YXJnc1swXSA9IGNyZWF0ZURlYnVnLmNvZXJjZShhcmdzWzBdKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzWzBdICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuXHRcdFx0XHRhcmdzLnVuc2hpZnQoJyVPJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xuXHRcdFx0YXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIChtYXRjaCwgZm9ybWF0KSA9PiB7XG5cdFx0XHRcdC8vIElmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcblx0XHRcdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZURlYnVnLmZvcm1hdHRlcnNbZm9ybWF0XTtcblx0XHRcdFx0aWYgKHR5cGVvZiBmb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjb25zdCB2YWwgPSBhcmdzW2luZGV4XTtcblx0XHRcdFx0XHRtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cblx0XHRcdFx0XHQvLyBOb3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG5cdFx0XHRcdFx0YXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdGluZGV4LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG5cdFx0XHRjcmVhdGVEZWJ1Zy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cblx0XHRcdGNvbnN0IGxvZ0ZuID0gc2VsZi5sb2cgfHwgY3JlYXRlRGVidWcubG9nO1xuXHRcdFx0bG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0ZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXHRcdGRlYnVnLmVuYWJsZWQgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKG5hbWVzcGFjZSk7XG5cdFx0ZGVidWcudXNlQ29sb3JzID0gY3JlYXRlRGVidWcudXNlQ29sb3JzKCk7XG5cdFx0ZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXHRcdGRlYnVnLmV4dGVuZCA9IGV4dGVuZDtcblx0XHQvLyBEZWJ1Zy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcblx0XHQvLyBkZWJ1Zy5yYXdMb2cgPSByYXdMb2c7XG5cblx0XHQvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuXHRcdGlmICh0eXBlb2YgY3JlYXRlRGVidWcuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5pdChkZWJ1Zyk7XG5cdFx0fVxuXG5cdFx0Y3JlYXRlRGVidWcuaW5zdGFuY2VzLnB1c2goZGVidWcpO1xuXG5cdFx0cmV0dXJuIGRlYnVnO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0XHRjb25zdCBpbmRleCA9IGNyZWF0ZURlYnVnLmluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuXHRcdGlmIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dGVuZChuYW1lc3BhY2UsIGRlbGltaXRlcikge1xuXHRcdGNvbnN0IG5ld0RlYnVnID0gY3JlYXRlRGVidWcodGhpcy5uYW1lc3BhY2UgKyAodHlwZW9mIGRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnOicgOiBkZWxpbWl0ZXIpICsgbmFtZXNwYWNlKTtcblx0XHRuZXdEZWJ1Zy5sb2cgPSB0aGlzLmxvZztcblx0XHRyZXR1cm4gbmV3RGVidWc7XG5cdH1cblxuXHQvKipcblx0KiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG5cdCogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcblx0XHRjcmVhdGVEZWJ1Zy5zYXZlKG5hbWVzcGFjZXMpO1xuXG5cdFx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0XHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdFx0bGV0IGk7XG5cdFx0Y29uc3Qgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuXHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKCFzcGxpdFtpXSkge1xuXHRcdFx0XHQvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0bmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG5cblx0XHRcdGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDA7IGkgPCBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGluc3RhbmNlID0gY3JlYXRlRGVidWcuaW5zdGFuY2VzW2ldO1xuXHRcdFx0aW5zdGFuY2UuZW5hYmxlZCA9IGNyZWF0ZURlYnVnLmVuYWJsZWQoaW5zdGFuY2UubmFtZXNwYWNlKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cblx0KlxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGRpc2FibGUoKSB7XG5cdFx0Y29uc3QgbmFtZXNwYWNlcyA9IFtcblx0XHRcdC4uLmNyZWF0ZURlYnVnLm5hbWVzLm1hcCh0b05hbWVzcGFjZSksXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5za2lwcy5tYXAodG9OYW1lc3BhY2UpLm1hcChuYW1lc3BhY2UgPT4gJy0nICsgbmFtZXNwYWNlKVxuXHRcdF0uam9pbignLCcpO1xuXHRcdGNyZWF0ZURlYnVnLmVuYWJsZSgnJyk7XG5cdFx0cmV0dXJuIG5hbWVzcGFjZXM7XG5cdH1cblxuXHQvKipcblx0KiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuXHQqIEByZXR1cm4ge0Jvb2xlYW59XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG5cdFx0aWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRsZXQgaTtcblx0XHRsZXQgbGVuO1xuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCogQ29udmVydCByZWdleHAgdG8gbmFtZXNwYWNlXG5cdCpcblx0KiBAcGFyYW0ge1JlZ0V4cH0gcmVneGVwXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gdG9OYW1lc3BhY2UocmVnZXhwKSB7XG5cdFx0cmV0dXJuIHJlZ2V4cC50b1N0cmluZygpXG5cdFx0XHQuc3Vic3RyaW5nKDIsIHJlZ2V4cC50b1N0cmluZygpLmxlbmd0aCAtIDIpXG5cdFx0XHQucmVwbGFjZSgvXFwuXFwqXFw/JC8sICcqJyk7XG5cdH1cblxuXHQvKipcblx0KiBDb2VyY2UgYHZhbGAuXG5cdCpcblx0KiBAcGFyYW0ge01peGVkfSB2YWxcblx0KiBAcmV0dXJuIHtNaXhlZH1cblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuXHRcdGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0cmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbDtcblx0fVxuXG5cdGNyZWF0ZURlYnVnLmVuYWJsZShjcmVhdGVEZWJ1Zy5sb2FkKCkpO1xuXG5cdHJldHVybiBjcmVhdGVEZWJ1Zztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXR1cDtcbiIsInZhciBuYWl2ZUZhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZikgcmV0dXJuIHNlbGY7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiICYmIHdpbmRvdykgcmV0dXJuIHdpbmRvdztcblx0dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHJlc29sdmUgZ2xvYmFsIGB0aGlzYFwiKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uICgpIHtcblx0aWYgKHRoaXMpIHJldHVybiB0aGlzO1xuXG5cdC8vIFVuZXhwZWN0ZWQgc3RyaWN0IG1vZGUgKG1heSBoYXBwZW4gaWYgZS5nLiBidW5kbGVkIGludG8gRVNNIG1vZHVsZSlcblxuXHQvLyBGYWxsYmFjayB0byBzdGFuZGFyZCBnbG9iYWxUaGlzIGlmIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIgJiYgZ2xvYmFsVGhpcykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cblx0Ly8gVGhhbmtzIEBtYXRoaWFzYnluZW5zIC0+IGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9nbG9iYWx0aGlzXG5cdC8vIEluIGFsbCBFUzUrIGVuZ2luZXMgZ2xvYmFsIG9iamVjdCBpbmhlcml0cyBmcm9tIE9iamVjdC5wcm90b3R5cGVcblx0Ly8gKGlmIHlvdSBhcHByb2FjaGVkIG9uZSB0aGF0IGRvZXNuJ3QgcGxlYXNlIHJlcG9ydClcblx0dHJ5IHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJfX2dsb2JhbF9fXCIsIHtcblx0XHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFVuZm9ydHVuYXRlIGNhc2Ugb2YgdXBkYXRlcyB0byBPYmplY3QucHJvdG90eXBlIGJlaW5nIHJlc3RyaWN0ZWRcblx0XHQvLyB2aWEgcHJldmVudEV4dGVuc2lvbnMsIHNlYWwgb3IgZnJlZXplXG5cdFx0cmV0dXJuIG5haXZlRmFsbGJhY2soKTtcblx0fVxuXHR0cnkge1xuXHRcdC8vIFNhZmFyaSBjYXNlICh3aW5kb3cuX19nbG9iYWxfXyB3b3JrcywgYnV0IF9fZ2xvYmFsX18gZG9lcyBub3QpXG5cdFx0aWYgKCFfX2dsb2JhbF9fKSByZXR1cm4gbmFpdmVGYWxsYmFjaygpO1xuXHRcdHJldHVybiBfX2dsb2JhbF9fO1xuXHR9IGZpbmFsbHkge1xuXHRcdGRlbGV0ZSBPYmplY3QucHJvdG90eXBlLl9fZ2xvYmFsX187XG5cdH1cbn0pKCk7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBldmVudHNfMSA9IHJlcXVpcmUoXCJldmVudHNcIik7XG5jb25zdCBwcm90b29fY2xpZW50XzEgPSByZXF1aXJlKFwicHJvdG9vLWNsaWVudFwiKTtcbmNvbnN0IHV1aWRfMSA9IHJlcXVpcmUoXCJ1dWlkXCIpO1xuY29uc3QgbG9nID0gcmVxdWlyZShcImxvZ2xldmVsXCIpO1xuY29uc3Qgc3RyZWFtXzEgPSByZXF1aXJlKFwiLi9zdHJlYW1cIik7XG5jb25zdCB0cmFuc3BvcnRfMSA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydFwiKTtcbmNsYXNzIENsaWVudCBleHRlbmRzIGV2ZW50c18xLkV2ZW50RW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub25SZXF1ZXN0ID0gKHJlcXVlc3QpID0+IHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZygnSGFuZGxlIHJlcXVlc3QgZnJvbSBzZXJ2ZXI6IFttZXRob2Q6JXMsIGRhdGE6JW9dJywgcmVxdWVzdC5tZXRob2QsIHJlcXVlc3QuZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25Ob3RpZmljYXRpb24gPSAobm90aWZpY2F0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IG1ldGhvZCwgZGF0YSB9ID0gbm90aWZpY2F0aW9uO1xuICAgICAgICAgICAgbG9nLmluZm8oJ0hhbmRsZSBub3RpZmljYXRpb24gZnJvbSBzZXJ2ZXI6IFttZXRob2Q6JXMsIGRhdGE6JW9dJywgbWV0aG9kLCBkYXRhKTtcbiAgICAgICAgICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncGVlci1qb2luJzoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVpZCwgaW5mbyB9ID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdwZWVyLWpvaW4nLCB1aWQsIGluZm8pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAncGVlci1sZWF2ZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1aWQgfSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncGVlci1sZWF2ZScsIHVpZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdzdHJlYW0tYWRkJzoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG1pZCwgaW5mbywgdHJhY2tzIH0gPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFja01hcCA9IG9ialRvU3RyTWFwKHRyYWNrcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtub3duU3RyZWFtcy5zZXQobWlkLCB0cmFja01hcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdzdHJlYW0tYWRkJywgbWlkLCBpbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmVhbS1yZW1vdmUnOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbWlkIH0gPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLnN0cmVhbXNbbWlkXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdzdHJlYW0tcmVtb3ZlJywgc3RyZWFtKTtcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdicm9hZGNhc3QnOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdWlkLCBpbmZvIH0gPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Jyb2FkY2FzdCcsIHVpZCwgaW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdWlkID0gY29uZmlnLnVpZCA/IGNvbmZpZy51aWQgOiB1dWlkXzEudjQoKTtcbiAgICAgICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy51cmwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5kZWZpbmVkIGNvbmZpZyBvciBjb25maWcudXJsIGluIGlvbi1zZGsuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChjb25maWcudXJsKTtcbiAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ3BlZXInLCB1aWQpO1xuICAgICAgICBjb25zdCB0cmFuc3BvcnQgPSBuZXcgcHJvdG9vX2NsaWVudF8xLldlYlNvY2tldFRyYW5zcG9ydCh1cmwudG9TdHJpbmcoKSwgY29uZmlnLm9wdGlvbnMpO1xuICAgICAgICBsb2cuc2V0TGV2ZWwoY29uZmlnLmxvZ2xldmVsICE9PSB1bmRlZmluZWQgPyBjb25maWcubG9nbGV2ZWwgOiBsb2cubGV2ZWxzLldBUk4pO1xuICAgICAgICB0aGlzLmtub3duU3RyZWFtcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy51aWQgPSB1aWQ7XG4gICAgICAgIHRoaXMuc3RyZWFtcyA9IHt9O1xuICAgICAgICB0aGlzLmRpc3BhdGNoID0gbmV3IHByb3Rvb19jbGllbnRfMS5QZWVyKHRyYW5zcG9ydCk7XG4gICAgICAgIGlmIChjb25maWcucnRjKVxuICAgICAgICAgICAgdHJhbnNwb3J0XzEuZGVmYXVsdC5zZXRSVENDb25maWd1cmF0aW9uKGNvbmZpZy5ydGMpO1xuICAgICAgICBzdHJlYW1fMS5TdHJlYW0uc2V0RGlzcGF0Y2godGhpcy5kaXNwYXRjaCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gub24oJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICBsb2cuaW5mbygnUGVlciBcIm9wZW5cIiBldmVudCcpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCd0cmFuc3BvcnQtb3BlbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaC5vbignZGlzY29ubmVjdGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgbG9nLmluZm8oJ1BlZXIgXCJkaXNjb25uZWN0ZWRcIiBldmVudCcpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCd0cmFuc3BvcnQtZmFpbGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoLm9uKCdjbG9zZScsICgpID0+IHtcbiAgICAgICAgICAgIGxvZy5pbmZvKCdQZWVyIFwiY2xvc2VcIiBldmVudCcpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCd0cmFuc3BvcnQtY2xvc2VkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoLm9uKCdyZXF1ZXN0JywgdGhpcy5vblJlcXVlc3QpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoLm9uKCdub3RpZmljYXRpb24nLCB0aGlzLm9uTm90aWZpY2F0aW9uKTtcbiAgICB9XG4gICAgYnJvYWRjYXN0KGluZm8pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2gucmVxdWVzdCgnYnJvYWRjYXN0Jywge1xuICAgICAgICAgICAgcmlkOiB0aGlzLnJpZCxcbiAgICAgICAgICAgIHVpZDogdGhpcy51aWQsXG4gICAgICAgICAgICBpbmZvLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgam9pbihyaWQsIGluZm8gPSB7IG5hbWU6ICdHdWVzdCcgfSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdGhpcy5yaWQgPSByaWQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLmRpc3BhdGNoLnJlcXVlc3QoJ2pvaW4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHJpZDogdGhpcy5yaWQsXG4gICAgICAgICAgICAgICAgICAgIHVpZDogdGhpcy51aWQsXG4gICAgICAgICAgICAgICAgICAgIGluZm8sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbG9nLmluZm8oJ2pvaW4gc3VjY2VzczogcmVzdWx0ID0+ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoJ2pvaW4gcmVqZWN0OiBlcnJvciA9PicgKyBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaXNoKHN0cmVhbSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnJpZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3Qgam9pbiBhIHJvb20gYmVmb3JlIHB1Ymxpc2hpbmcuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvY2FsID0gc3RyZWFtO1xuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIHN0cmVhbS5wdWJsaXNoKHRoaXMucmlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN1YnNjcmliZShtaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5yaWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IGpvaW4gYSByb29tIGJlZm9yZSBzdWJzY3JpYmluZy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRyYWNrcyA9IHRoaXMua25vd25TdHJlYW1zLmdldChtaWQpO1xuICAgICAgICAgICAgaWYgKCF0cmFja3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1YnNjcmliZSBtaWQgaXMgbm90IGtub3duLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0geWllbGQgc3RyZWFtXzEuUmVtb3RlU3RyZWFtLmdldFJlbW90ZU1lZGlhKHRoaXMucmlkLCBtaWQsIHRyYWNrcyk7XG4gICAgICAgICAgICB0aGlzLnN0cmVhbXNbbWlkXSA9IHN0cmVhbTtcbiAgICAgICAgICAgIHJldHVybiBzdHJlYW07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZWF2ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHRoaXMuZGlzcGF0Y2gucmVxdWVzdCgnbGVhdmUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHJpZDogdGhpcy5yaWQsXG4gICAgICAgICAgICAgICAgICAgIHVpZDogdGhpcy51aWQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbC51bnB1Ymxpc2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnN0cmVhbXMpLmZvckVhY2goKHN0cmVhbSkgPT4gc3RyZWFtLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMua25vd25TdHJlYW1zLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgbG9nLmluZm8oJ2xlYXZlIHN1Y2Nlc3M6IHJlc3VsdCA9PiAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKCdsZWF2ZSByZWplY3Q6IGVycm9yID0+JyArIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoLmNsb3NlKCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ2xpZW50O1xuZnVuY3Rpb24gb2JqVG9TdHJNYXAob2JqKSB7XG4gICAgY29uc3Qgc3RyTWFwID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgayBvZiBPYmplY3Qua2V5cyhvYmopKSB7XG4gICAgICAgIHN0ck1hcC5zZXQoaywgb2JqW2tdKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0ck1hcDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdHJlYW0gPSBleHBvcnRzLkxvY2FsU3RyZWFtID0gZXhwb3J0cy5DbGllbnQgPSB2b2lkIDA7XG5jb25zdCBjbGllbnRfMSA9IHJlcXVpcmUoXCIuL2NsaWVudFwiKTtcbmV4cG9ydHMuQ2xpZW50ID0gY2xpZW50XzEuZGVmYXVsdDtcbmNvbnN0IHN0cmVhbV8xID0gcmVxdWlyZShcIi4vc3RyZWFtXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTG9jYWxTdHJlYW1cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0cmVhbV8xLkxvY2FsU3RyZWFtOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU3RyZWFtXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdHJlYW1fMS5TdHJlYW07IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZW1vdGVTdHJlYW0gPSBleHBvcnRzLkxvY2FsU3RyZWFtID0gZXhwb3J0cy5TdHJlYW0gPSBleHBvcnRzLlZpZGVvUmVzb2x1dGlvbnMgPSB2b2lkIDA7XG5jb25zdCBsb2cgPSByZXF1aXJlKFwibG9nbGV2ZWxcIik7XG5jb25zdCB0cmFuc3BvcnRfMSA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydFwiKTtcbmV4cG9ydHMuVmlkZW9SZXNvbHV0aW9ucyA9IHtcbiAgICBxdmdhOiB7IHdpZHRoOiB7IGlkZWFsOiAzMjAgfSwgaGVpZ2h0OiB7IGlkZWFsOiAxODAgfSB9LFxuICAgIHZnYTogeyB3aWR0aDogeyBpZGVhbDogNjQwIH0sIGhlaWdodDogeyBpZGVhbDogMzYwIH0gfSxcbiAgICBzaGQ6IHsgd2lkdGg6IHsgaWRlYWw6IDk2MCB9LCBoZWlnaHQ6IHsgaWRlYWw6IDU0MCB9IH0sXG4gICAgaGQ6IHsgd2lkdGg6IHsgaWRlYWw6IDEyODAgfSwgaGVpZ2h0OiB7IGlkZWFsOiA3MjAgfSB9LFxuICAgIGZoZDogeyB3aWR0aDogeyBpZGVhbDogMTkyMCB9LCBoZWlnaHQ6IHsgaWRlYWw6IDEwOTAgfSB9LFxufTtcbmNsYXNzIFN0cmVhbSBleHRlbmRzIE1lZGlhU3RyZWFtIHtcbiAgICBzdGF0aWMgc2V0RGlzcGF0Y2goZGlzcGF0Y2gpIHtcbiAgICAgICAgU3RyZWFtLmRpc3BhdGNoID0gZGlzcGF0Y2g7XG4gICAgfVxuICAgIGdldCBkaXNwYXRjaCgpIHtcbiAgICAgICAgaWYgKCFTdHJlYW0uZGlzcGF0Y2gpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGlzcGF0Y2ggbm90IHNldC4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3RyZWFtLmRpc3BhdGNoO1xuICAgIH1cbn1cbmV4cG9ydHMuU3RyZWFtID0gU3RyZWFtO1xuY2xhc3MgTG9jYWxTdHJlYW0gZXh0ZW5kcyBTdHJlYW0ge1xuICAgIGNvbnN0cnVjdG9yKHN0cmVhbSwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihzdHJlYW0pO1xuICAgICAgICAvLyBoYWNrOiBwYXRjaCBmb3IgU2FmYXJpXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBMb2NhbFN0cmVhbS5wcm90b3R5cGUpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0VXNlck1lZGlhKG9wdGlvbnMgPSB7XG4gICAgICAgIGNvZGVjOiAnVlA4JyxcbiAgICAgICAgcmVzb2x1dGlvbjogJ2hkJyxcbiAgICAgICAgYXVkaW86IGZhbHNlLFxuICAgICAgICB2aWRlbzogZmFsc2UsXG4gICAgfSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJlYW0gPSB5aWVsZCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvOiBvcHRpb25zLmF1ZGlvLFxuICAgICAgICAgICAgICAgICAgICB2aWRlbzogb3B0aW9ucy52aWRlbyBpbnN0YW5jZW9mIE9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGV4cG9ydHMuVmlkZW9SZXNvbHV0aW9uc1tvcHRpb25zLnJlc29sdXRpb25dKSwgb3B0aW9ucy52aWRlbykgOiBvcHRpb25zLnZpZGVvXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGV4cG9ydHMuVmlkZW9SZXNvbHV0aW9uc1tvcHRpb25zLnJlc29sdXRpb25dXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTG9jYWxTdHJlYW0oc3RyZWFtLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0RGlzcGxheU1lZGlhKG9wdGlvbnMgPSB7XG4gICAgICAgIGNvZGVjOiAnVlA4JyxcbiAgICAgICAgcmVzb2x1dGlvbjogJ2hkJyxcbiAgICAgICAgYXVkaW86IGZhbHNlLFxuICAgICAgICB2aWRlbzogdHJ1ZSxcbiAgICB9KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBzdHJlYW0gPSB5aWVsZCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldERpc3BsYXlNZWRpYSh7XG4gICAgICAgICAgICAgICAgdmlkZW86IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTG9jYWxTdHJlYW0oc3RyZWFtLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFZpZGVvQ29uc3RyYWludHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMudmlkZW8gaW5zdGFuY2VvZiBPYmplY3RcbiAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBleHBvcnRzLlZpZGVvUmVzb2x1dGlvbnNbdGhpcy5vcHRpb25zLnJlc29sdXRpb25dKSwgdGhpcy5vcHRpb25zLnZpZGVvKSA6IHsgdmlkZW86IHRoaXMub3B0aW9ucy52aWRlbyB9O1xuICAgIH1cbiAgICBzd2l0Y2hEZXZpY2Uoa2luZCwgZGV2aWNlSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgeyBba2luZF06IHRoaXMub3B0aW9uc1traW5kXSBpbnN0YW5jZW9mIE9iamVjdFxuICAgICAgICAgICAgICAgICAgICA/IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zW2tpbmRdKSwgeyBkZXZpY2VJZCB9KSA6IHsgZGV2aWNlSWQgfSB9KTtcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhbSA9IHlpZWxkIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgICAgICAgICBba2luZF06IGtpbmQgPT09ICd2aWRlbycgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZ2V0VmlkZW9Db25zdHJhaW50cygpKSwgeyBkZXZpY2VJZCB9KSA6IHsgZGV2aWNlSWQgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgdHJhY2sgPSBzdHJlYW0uZ2V0VHJhY2tzKClbMF07XG4gICAgICAgICAgICBsZXQgcHJldjtcbiAgICAgICAgICAgIGlmIChraW5kID09PSAnYXVkaW8nKSB7XG4gICAgICAgICAgICAgICAgcHJldiA9IHRoaXMuZ2V0QXVkaW9UcmFja3MoKVswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtpbmQgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICAgICAgICBwcmV2ID0gdGhpcy5nZXRWaWRlb1RyYWNrcygpWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hZGRUcmFjayh0cmFjayk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVRyYWNrKHByZXYpO1xuICAgICAgICAgICAgcHJldi5zdG9wKCk7XG4gICAgICAgICAgICAvLyBJZiBwdWJsaXNoZWQsIHJlcGxhY2UgcHVibGlzaGVkIHRyYWNrIHdpdGggdHJhY2sgZnJvbSBuZXcgZGV2aWNlXG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc3BvcnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5nZXRTZW5kZXJzKCkuZm9yRWFjaCgoc2VuZGVyKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoKF9hID0gc2VuZGVyID09PSBudWxsIHx8IHNlbmRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VuZGVyLnRyYWNrKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eua2luZCkgPT09IHRyYWNrLmtpbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChfYiA9IHNlbmRlci50cmFjaykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRlci5yZXBsYWNlVHJhY2sodHJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbXV0ZShraW5kKSB7XG4gICAgICAgIGlmIChraW5kID09PSAnYXVkaW8nKSB7XG4gICAgICAgICAgICB0aGlzLmdldEF1ZGlvVHJhY2tzKClbMF0uZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtpbmQgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0VmlkZW9UcmFja3MoKVswXS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdW5tdXRlKGtpbmQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmIChraW5kID09PSAnYXVkaW8nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBdWRpb1RyYWNrcygpWzBdLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2luZCA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VmlkZW9UcmFja3MoKVswXS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1Ymxpc2gocmlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGJhbmR3aWR0aCwgY29kZWMgfSA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgICAgIGxldCBzZW5kT2ZmZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0XzEuZGVmYXVsdChjb2RlYyk7XG4gICAgICAgICAgICB0aGlzLmdldFRyYWNrcygpLm1hcCgodHJhY2spID0+IHRoaXMudHJhbnNwb3J0LmFkZFRyYWNrKHRyYWNrLCB0aGlzKSk7XG4gICAgICAgICAgICBjb25zdCBvZmZlciA9IHlpZWxkIHRoaXMudHJhbnNwb3J0LmNyZWF0ZU9mZmVyKHtcbiAgICAgICAgICAgICAgICBvZmZlclRvUmVjZWl2ZVZpZGVvOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvZmZlclRvUmVjZWl2ZUF1ZGlvOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbG9nLmRlYnVnKCdDcmVhdGVkIG9mZmVyID0+ICVvJywgb2ZmZXIpO1xuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQuc2V0TG9jYWxEZXNjcmlwdGlvbihvZmZlcik7XG4gICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5vbmljZWNhbmRpZGF0ZSA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VuZE9mZmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRPZmZlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBqc2VwID0gdGhpcy50cmFuc3BvcnQubG9jYWxEZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKGBTZW5kaW5nIG9mZmVyICR7anNlcH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgdGhpcy5kaXNwYXRjaC5yZXF1ZXN0KCdwdWJsaXNoJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAganNlcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYW5kd2lkdGg6IE51bWJlcihiYW5kd2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWlkID0gcmVzdWx0Lm1pZDtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKCdHb3QgYW5zd2VyID0+ICVvJywgcmVzdWx0ID09PSBudWxsIHx8IHJlc3VsdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzdWx0LmpzZXApO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnRyYW5zcG9ydC5zZXRSZW1vdGVEZXNjcmlwdGlvbihyZXN1bHQgPT09IG51bGwgfHwgcmVzdWx0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXN1bHQuanNlcCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlkID0gcmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQub25uZWdvdGlhdGlvbm5lZWRlZCA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBsb2cuaW5mbygnbmVnb3RpYXRpb24gbmVlZGVkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVucHVibGlzaCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5yaWQgfHwgIXRoaXMubWlkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdHJlYW0gaXMgbm90IHB1Ymxpc2hlZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZy5pbmZvKCd1bnB1Ymxpc2ggcmlkID0+ICVzLCBtaWQgPT4gJXMnLCB0aGlzLnJpZCwgdGhpcy5taWQpO1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNwb3J0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy50cmFuc3BvcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geWllbGQgdGhpcy5kaXNwYXRjaFxuICAgICAgICAgICAgICAgIC5yZXF1ZXN0KCd1bnB1Ymxpc2gnLCB7XG4gICAgICAgICAgICAgICAgcmlkOiB0aGlzLnJpZCxcbiAgICAgICAgICAgICAgICBtaWQ6IHRoaXMubWlkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucmlkO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm1pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkxvY2FsU3RyZWFtID0gTG9jYWxTdHJlYW07XG5jbGFzcyBSZW1vdGVTdHJlYW0gZXh0ZW5kcyBTdHJlYW0ge1xuICAgIHN0YXRpYyBnZXRSZW1vdGVNZWRpYShyaWQsIG1pZCwgdHJhY2tzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBhbGxUcmFja3MgPSBBcnJheS5mcm9tKHRyYWNrcy52YWx1ZXMoKSkuZmxhdCgpO1xuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBhbGxUcmFja3MubWFwKCh0KSA9PiB0LnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ2F1ZGlvJykuaW5jbHVkZXModHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCB2aWRlbyA9IGFsbFRyYWNrcy5tYXAoKHQpID0+IHQudHlwZS50b0xvd2VyQ2FzZSgpID09PSAndmlkZW8nKS5pbmNsdWRlcyh0cnVlKTtcbiAgICAgICAgICAgIGxldCBzZW5kT2ZmZXIgPSB0cnVlO1xuICAgICAgICAgICAgbG9nLmRlYnVnKCdDcmVhdGluZyByZWNlaXZlciA9PiAlcycsIG1pZCk7XG4gICAgICAgICAgICBjb25zdCB0cmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0XzEuZGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGF1ZGlvKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0LmFkZFRyYW5zY2VpdmVyKCdhdWRpbycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZpZGVvKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0LmFkZFRyYW5zY2VpdmVyKCd2aWRlbycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVzYyA9IHlpZWxkIHRyYW5zcG9ydC5jcmVhdGVPZmZlcigpO1xuICAgICAgICAgICAgbG9nLmRlYnVnKCdDcmVhdGVkIG9mZmVyID0+ICVvJywgZGVzYyk7XG4gICAgICAgICAgICB0cmFuc3BvcnQuc2V0TG9jYWxEZXNjcmlwdGlvbihkZXNjKTtcbiAgICAgICAgICAgIHRyYW5zcG9ydC5vbm5lZ290aWF0aW9ubmVlZGVkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZygnbmVnb3RpYXRpb24gbmVlZGVkJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdHJhbnNwb3J0Lm9uaWNlY2FuZGlkYXRlID0gKGUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VuZE9mZmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZygnU2VuZCBvZmZlcicpO1xuICAgICAgICAgICAgICAgICAgICBzZW5kT2ZmZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QganNlcCA9IHRyYW5zcG9ydC5sb2NhbERlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCB0aGlzLmRpc3BhdGNoLnJlcXVlc3QoJ3N1YnNjcmliZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGpzZXAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaWQsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBsb2cuaW5mbyhgc3Vic2NyaWJlIHN1Y2Nlc3MgPT4gcmVzdWx0KG1pZDogJHtyZXN1bHQubWlkfSlgKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKCdHb3QgYW5zd2VyID0+ICVvJywgcmVzdWx0ID09PSBudWxsIHx8IHJlc3VsdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzdWx0LmpzZXApO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB0cmFuc3BvcnQuc2V0UmVtb3RlRGVzY3JpcHRpb24ocmVzdWx0ID09PSBudWxsIHx8IHJlc3VsdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzdWx0LmpzZXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0geWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydC5vbnRyYWNrID0gKHsgdHJhY2ssIHN0cmVhbXMgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKCdvbiB0cmFjayBjYWxsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uY2UgbWVkaWEgZm9yIGEgcmVtb3RlIHRyYWNrIGFycml2ZXMsIHNob3cgaXQgaW4gdGhlIHJlbW90ZSB2aWRlbyBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFjay5vbnVubXV0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RyZWFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc3RyZWFtc1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdOb3QgZW5vdWdoIHN0cmVhbXMnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcignc3Vic2NyaWJlIHJlcXVlc3QgZXJyb3IgID0+ICcgKyBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgY29uc3QgcmVtb3RlID0gbmV3IFJlbW90ZVN0cmVhbShzdHJlYW0pO1xuICAgICAgICAgICAgcmVtb3RlLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcbiAgICAgICAgICAgIHJlbW90ZS5taWQgPSBtaWQ7XG4gICAgICAgICAgICByZW1vdGUucmlkID0gcmlkO1xuICAgICAgICAgICAgcmV0dXJuIHJlbW90ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHN0cmVhbSkge1xuICAgICAgICBzdXBlcihzdHJlYW0pO1xuICAgICAgICAvLyBoYWNrOiBwYXRjaCBmb3IgU2FmYXJpXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBSZW1vdGVTdHJlYW0ucHJvdG90eXBlKTtcbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy50cmFuc3BvcnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RyZWFtIGlzIG5vdCBvcGVuLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRyYW5zcG9ydCkge1xuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnRyYW5zcG9ydDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy50cmFuc3BvcnQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0cmVhbSBpcyBub3Qgc3Vic2NyaWJlZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZy5pbmZvKCd1bnN1YnNjcmliZSBtaWQgPT4gJXMnLCB0aGlzLm1pZCk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICByZXR1cm4geWllbGQgdGhpcy5kaXNwYXRjaC5yZXF1ZXN0KCd1bnN1YnNjcmliZScsIHsgbWlkOiB0aGlzLm1pZCB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5SZW1vdGVTdHJlYW0gPSBSZW1vdGVTdHJlYW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc2RwX3RyYW5zZm9ybV8xID0gcmVxdWlyZShcInNkcC10cmFuc2Zvcm1cIik7XG5jb25zdCBsb2cgPSByZXF1aXJlKFwibG9nbGV2ZWxcIik7XG52YXIgUGF5bG9hZFR5cGU7XG4oZnVuY3Rpb24gKFBheWxvYWRUeXBlKSB7XG4gICAgUGF5bG9hZFR5cGVbUGF5bG9hZFR5cGVbXCJQQ01VXCJdID0gMF0gPSBcIlBDTVVcIjtcbiAgICBQYXlsb2FkVHlwZVtQYXlsb2FkVHlwZVtcIlBDTUFcIl0gPSA4XSA9IFwiUENNQVwiO1xuICAgIFBheWxvYWRUeXBlW1BheWxvYWRUeXBlW1wiRzcyMlwiXSA9IDldID0gXCJHNzIyXCI7XG4gICAgUGF5bG9hZFR5cGVbUGF5bG9hZFR5cGVbXCJPcHVzXCJdID0gMTExXSA9IFwiT3B1c1wiO1xuICAgIFBheWxvYWRUeXBlW1BheWxvYWRUeXBlW1wiVlA4XCJdID0gOTZdID0gXCJWUDhcIjtcbiAgICBQYXlsb2FkVHlwZVtQYXlsb2FkVHlwZVtcIlZQOVwiXSA9IDk4XSA9IFwiVlA5XCI7XG4gICAgUGF5bG9hZFR5cGVbUGF5bG9hZFR5cGVbXCJIMjY0XCJdID0gMTAyXSA9IFwiSDI2NFwiO1xufSkoUGF5bG9hZFR5cGUgfHwgKFBheWxvYWRUeXBlID0ge30pKTtcbmZ1bmN0aW9uIHJ0cChuYW1lKSB7XG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgIGNhc2UgJ0gyNjQnOlxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IFBheWxvYWRUeXBlLkgyNjQsXG4gICAgICAgICAgICAgICAgICAgIGNvZGVjOiAnSDI2NCcsXG4gICAgICAgICAgICAgICAgICAgIHJhdGU6IDkwMDAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICBjYXNlICdWUDgnOlxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IFBheWxvYWRUeXBlLlZQOCxcbiAgICAgICAgICAgICAgICAgICAgY29kZWM6ICdWUDgnLFxuICAgICAgICAgICAgICAgICAgICByYXRlOiA5MDAwMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgY2FzZSAnVlA5JzpcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBQYXlsb2FkVHlwZS5WUDksXG4gICAgICAgICAgICAgICAgICAgIGNvZGVjOiAnVlA5JyxcbiAgICAgICAgICAgICAgICAgICAgcmF0ZTogOTAwMDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxubGV0IFdlYlJUQ1RyYW5zcG9ydCA9IC8qKiBAY2xhc3MgKi8gKCgpID0+IHtcbiAgICBjbGFzcyBXZWJSVENUcmFuc3BvcnQge1xuICAgICAgICBjb25zdHJ1Y3Rvcihjb2RlYykge1xuICAgICAgICAgICAgaWYgKCFXZWJSVENUcmFuc3BvcnQuY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSVENvbmZpZ3VyYXRpb24gbm90IHNldC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGMgPSBuZXcgUlRDUGVlckNvbm5lY3Rpb24oV2ViUlRDVHJhbnNwb3J0LmNvbmZpZyk7XG4gICAgICAgICAgICB0aGlzLnJ0cCA9IGNvZGVjID8gcnRwKGNvZGVjKSA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIHNldFJUQ0NvbmZpZ3VyYXRpb24oY29uZmlnKSB7XG4gICAgICAgICAgICBXZWJSVENUcmFuc3BvcnQuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB9XG4gICAgICAgIGNsb3NlKCkge1xuICAgICAgICAgICAgdGhpcy5wYy5vbnRyYWNrID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucGMub25pY2VjYW5kaWRhdGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wYy5vbm5lZ290aWF0aW9ubmVlZGVkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucGMuZ2V0U2VuZGVycygpLmZvckVhY2goKHNlbmRlcikgPT4gdGhpcy5wYy5yZW1vdmVUcmFjayhzZW5kZXIpKTtcbiAgICAgICAgICAgIHRoaXMucGMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBhZGRUcmFjayh0cmFjaywgc3RyZWFtKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYy5hZGRUcmFjayh0cmFjaywgc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgICBhZGRUcmFuc2NlaXZlcihraW5kKSB7XG4gICAgICAgICAgICB0aGlzLnBjLmFkZFRyYW5zY2VpdmVyKGtpbmQsIHsgZGlyZWN0aW9uOiAncmVjdm9ubHknIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZVRyYWNrKHNlbmRlcikge1xuICAgICAgICAgICAgdGhpcy5wYy5yZW1vdmVUcmFjayhzZW5kZXIpO1xuICAgICAgICB9XG4gICAgICAgIGdldFNlbmRlcnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYy5nZXRTZW5kZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TG9jYWxEZXNjcmlwdGlvbihvZmZlcikge1xuICAgICAgICAgICAgdGhpcy5wYy5zZXRMb2NhbERlc2NyaXB0aW9uKG9mZmVyKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRSZW1vdGVEZXNjcmlwdGlvbihkZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihkZXNjKTtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVPZmZlcihvcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9mZmVyID0geWllbGQgdGhpcy5wYy5jcmVhdGVPZmZlcihvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucnRwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2ZmZXI7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IHNkcF90cmFuc2Zvcm1fMS5wYXJzZShvZmZlci5zZHApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvSWR4ID0gc2Vzc2lvbi5tZWRpYS5maW5kSW5kZXgoKHsgdHlwZSwgc3NyY0dyb3VwcyB9KSA9PiB0eXBlID09PSAndmlkZW8nICYmICEhc3NyY0dyb3Vwcyk7XG4gICAgICAgICAgICAgICAgaWYgKHZpZGVvSWR4ID09PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mZmVyO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gdGhpcy5ydHBbMF07XG4gICAgICAgICAgICAgICAgc2Vzc2lvbi5tZWRpYVt2aWRlb0lkeF0ucGF5bG9hZHMgPSBgJHtwYXlsb2FkfWA7IC8vICsgXCIgOTdcIjtcbiAgICAgICAgICAgICAgICBzZXNzaW9uLm1lZGlhW3ZpZGVvSWR4XS5ydHAgPSB0aGlzLnJ0cDtcbiAgICAgICAgICAgICAgICBjb25zdCBmbXRwID0gW1xuICAgICAgICAgICAgICAgIC8vIHsgXCJwYXlsb2FkXCI6IDk3LCBcImNvbmZpZ1wiOiBcImFwdD1cIiArIHBheWxvYWQgfVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgc2Vzc2lvbi5tZWRpYVt2aWRlb0lkeF0uZm10cCA9IGZtdHA7XG4gICAgICAgICAgICAgICAgY29uc3QgcnRjcEZCID0gW1xuICAgICAgICAgICAgICAgICAgICB7IHBheWxvYWQsIHR5cGU6ICd0cmFuc3BvcnQtY2MnLCBzdWJ0eXBlOiB1bmRlZmluZWQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBwYXlsb2FkLCB0eXBlOiAnY2NtJywgc3VidHlwZTogJ2ZpcicgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBwYXlsb2FkLCB0eXBlOiAnbmFjaycsIHN1YnR5cGU6IHVuZGVmaW5lZCB9LFxuICAgICAgICAgICAgICAgICAgICB7IHBheWxvYWQsIHR5cGU6ICduYWNrJywgc3VidHlwZTogJ3BsaScgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIHNlc3Npb24ubWVkaWFbdmlkZW9JZHhdLnJ0Y3BGYiA9IHJ0Y3BGQjtcbiAgICAgICAgICAgICAgICBjb25zdCBzc3JjR3JvdXAgPSBzZXNzaW9uLm1lZGlhW3ZpZGVvSWR4XS5zc3JjR3JvdXBzWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNzcmNzID0gc3NyY0dyb3VwLnNzcmNzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNzcmMgPSBwYXJzZUludChzc3Jjcy5zcGxpdCgnICcpWzBdLCAxMCk7XG4gICAgICAgICAgICAgICAgbG9nLmRlYnVnKCdzc3JjcyA9PiAlcywgdmlkZW8gJXMnLCBzc3Jjcywgc3NyYyk7XG4gICAgICAgICAgICAgICAgc2Vzc2lvbi5tZWRpYVt2aWRlb0lkeF0uc3NyY0dyb3VwcyA9IFtdO1xuICAgICAgICAgICAgICAgIHNlc3Npb24ubWVkaWFbdmlkZW9JZHhdLnNzcmNzID0gc2Vzc2lvbi5tZWRpYVt2aWRlb0lkeF0uc3NyY3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBzc3JjKTtcbiAgICAgICAgICAgICAgICBvZmZlci5zZHAgPSBzZHBfdHJhbnNmb3JtXzEud3JpdGUoc2Vzc2lvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mZmVyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IGxvY2FsRGVzY3JpcHRpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHNldCBvbmljZWNhbmRpZGF0ZShjYikge1xuICAgICAgICAgICAgdGhpcy5wYy5vbmljZWNhbmRpZGF0ZSA9IGNiO1xuICAgICAgICB9XG4gICAgICAgIHNldCBvbm5lZ290aWF0aW9ubmVlZGVkKGNiKSB7XG4gICAgICAgICAgICB0aGlzLnBjLm9ubmVnb3RpYXRpb25uZWVkZWQgPSBjYjtcbiAgICAgICAgfVxuICAgICAgICBzZXQgb250cmFjayhjYikge1xuICAgICAgICAgICAgdGhpcy5wYy5vbnRyYWNrID0gY2I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgV2ViUlRDVHJhbnNwb3J0LmNvbmZpZyA9IHtcbiAgICAgICAgaWNlU2VydmVyczogW3sgdXJsczogJ3N0dW46c3R1bi5zdHVucHJvdG9jb2wub3JnOjM0NzgnIH1dLFxuICAgIH07XG4gICAgcmV0dXJuIFdlYlJUQ1RyYW5zcG9ydDtcbn0pKCk7XG5leHBvcnRzLmRlZmF1bHQgPSBXZWJSVENUcmFuc3BvcnQ7XG4iLCIvKlxuKiBsb2dsZXZlbCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9waW10ZXJyeS9sb2dsZXZlbFxuKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTMgVGltIFBlcnJ5XG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiovXG4oZnVuY3Rpb24gKHJvb3QsIGRlZmluaXRpb24pIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShkZWZpbml0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QubG9nID0gZGVmaW5pdGlvbigpO1xuICAgIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gU2xpZ2h0bHkgZHViaW91cyB0cmlja3MgdG8gY3V0IGRvd24gbWluaW1pemVkIGZpbGUgc2l6ZVxuICAgIHZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcbiAgICB2YXIgdW5kZWZpbmVkVHlwZSA9IFwidW5kZWZpbmVkXCI7XG4gICAgdmFyIGlzSUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkVHlwZSkgJiYgKHR5cGVvZiB3aW5kb3cubmF2aWdhdG9yICE9PSB1bmRlZmluZWRUeXBlKSAmJiAoXG4gICAgICAgIC9UcmlkZW50XFwvfE1TSUUgLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KVxuICAgICk7XG5cbiAgICB2YXIgbG9nTWV0aG9kcyA9IFtcbiAgICAgICAgXCJ0cmFjZVwiLFxuICAgICAgICBcImRlYnVnXCIsXG4gICAgICAgIFwiaW5mb1wiLFxuICAgICAgICBcIndhcm5cIixcbiAgICAgICAgXCJlcnJvclwiXG4gICAgXTtcblxuICAgIC8vIENyb3NzLWJyb3dzZXIgYmluZCBlcXVpdmFsZW50IHRoYXQgd29ya3MgYXQgbGVhc3QgYmFjayB0byBJRTZcbiAgICBmdW5jdGlvbiBiaW5kTWV0aG9kKG9iaiwgbWV0aG9kTmFtZSkge1xuICAgICAgICB2YXIgbWV0aG9kID0gb2JqW21ldGhvZE5hbWVdO1xuICAgICAgICBpZiAodHlwZW9mIG1ldGhvZC5iaW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kLmJpbmQob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwobWV0aG9kLCBvYmopO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIE1pc3NpbmcgYmluZCBzaGltIG9yIElFOCArIE1vZGVybml6ciwgZmFsbGJhY2sgdG8gd3JhcHBpbmdcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuYXBwbHkobWV0aG9kLCBbb2JqLCBhcmd1bWVudHNdKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVHJhY2UoKSBkb2Vzbid0IHByaW50IHRoZSBtZXNzYWdlIGluIElFLCBzbyBmb3IgdGhhdCBjYXNlIHdlIG5lZWQgdG8gd3JhcCBpdFxuICAgIGZ1bmN0aW9uIHRyYWNlRm9ySUUoKSB7XG4gICAgICAgIGlmIChjb25zb2xlLmxvZykge1xuICAgICAgICAgICAgaWYgKGNvbnNvbGUubG9nLmFwcGx5KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSW4gb2xkIElFLCBuYXRpdmUgY29uc29sZSBtZXRob2RzIHRoZW1zZWx2ZXMgZG9uJ3QgaGF2ZSBhcHBseSgpLlxuICAgICAgICAgICAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5hcHBseShjb25zb2xlLmxvZywgW2NvbnNvbGUsIGFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb25zb2xlLnRyYWNlKSBjb25zb2xlLnRyYWNlKCk7XG4gICAgfVxuXG4gICAgLy8gQnVpbGQgdGhlIGJlc3QgbG9nZ2luZyBtZXRob2QgcG9zc2libGUgZm9yIHRoaXMgZW52XG4gICAgLy8gV2hlcmV2ZXIgcG9zc2libGUgd2Ugd2FudCB0byBiaW5kLCBub3Qgd3JhcCwgdG8gcHJlc2VydmUgc3RhY2sgdHJhY2VzXG4gICAgZnVuY3Rpb24gcmVhbE1ldGhvZChtZXRob2ROYW1lKSB7XG4gICAgICAgIGlmIChtZXRob2ROYW1lID09PSAnZGVidWcnKSB7XG4gICAgICAgICAgICBtZXRob2ROYW1lID0gJ2xvZyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09IHVuZGVmaW5lZFR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gTm8gbWV0aG9kIHBvc3NpYmxlLCBmb3Igbm93IC0gZml4ZWQgbGF0ZXIgYnkgZW5hYmxlTG9nZ2luZ1doZW5Db25zb2xlQXJyaXZlc1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZE5hbWUgPT09ICd0cmFjZScgJiYgaXNJRSkge1xuICAgICAgICAgICAgcmV0dXJuIHRyYWNlRm9ySUU7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uc29sZVttZXRob2ROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gYmluZE1ldGhvZChjb25zb2xlLCBtZXRob2ROYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25zb2xlLmxvZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gYmluZE1ldGhvZChjb25zb2xlLCAnbG9nJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbm9vcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZXNlIHByaXZhdGUgZnVuY3Rpb25zIGFsd2F5cyBuZWVkIGB0aGlzYCB0byBiZSBzZXQgcHJvcGVybHlcblxuICAgIGZ1bmN0aW9uIHJlcGxhY2VMb2dnaW5nTWV0aG9kcyhsZXZlbCwgbG9nZ2VyTmFtZSkge1xuICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvZ01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBtZXRob2ROYW1lID0gbG9nTWV0aG9kc1tpXTtcbiAgICAgICAgICAgIHRoaXNbbWV0aG9kTmFtZV0gPSAoaSA8IGxldmVsKSA/XG4gICAgICAgICAgICAgICAgbm9vcCA6XG4gICAgICAgICAgICAgICAgdGhpcy5tZXRob2RGYWN0b3J5KG1ldGhvZE5hbWUsIGxldmVsLCBsb2dnZXJOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlZmluZSBsb2cubG9nIGFzIGFuIGFsaWFzIGZvciBsb2cuZGVidWdcbiAgICAgICAgdGhpcy5sb2cgPSB0aGlzLmRlYnVnO1xuICAgIH1cblxuICAgIC8vIEluIG9sZCBJRSB2ZXJzaW9ucywgdGhlIGNvbnNvbGUgaXNuJ3QgcHJlc2VudCB1bnRpbCB5b3UgZmlyc3Qgb3BlbiBpdC5cbiAgICAvLyBXZSBidWlsZCByZWFsTWV0aG9kKCkgcmVwbGFjZW1lbnRzIGhlcmUgdGhhdCByZWdlbmVyYXRlIGxvZ2dpbmcgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIGVuYWJsZUxvZ2dpbmdXaGVuQ29uc29sZUFycml2ZXMobWV0aG9kTmFtZSwgbGV2ZWwsIGxvZ2dlck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gdW5kZWZpbmVkVHlwZSkge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VMb2dnaW5nTWV0aG9kcy5jYWxsKHRoaXMsIGxldmVsLCBsb2dnZXJOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzW21ldGhvZE5hbWVdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQnkgZGVmYXVsdCwgd2UgdXNlIGNsb3NlbHkgYm91bmQgcmVhbCBtZXRob2RzIHdoZXJldmVyIHBvc3NpYmxlLCBhbmRcbiAgICAvLyBvdGhlcndpc2Ugd2Ugd2FpdCBmb3IgYSBjb25zb2xlIHRvIGFwcGVhciwgYW5kIHRoZW4gdHJ5IGFnYWluLlxuICAgIGZ1bmN0aW9uIGRlZmF1bHRNZXRob2RGYWN0b3J5KG1ldGhvZE5hbWUsIGxldmVsLCBsb2dnZXJOYW1lKSB7XG4gICAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICAgIHJldHVybiByZWFsTWV0aG9kKG1ldGhvZE5hbWUpIHx8XG4gICAgICAgICAgICAgICBlbmFibGVMb2dnaW5nV2hlbkNvbnNvbGVBcnJpdmVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gTG9nZ2VyKG5hbWUsIGRlZmF1bHRMZXZlbCwgZmFjdG9yeSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGN1cnJlbnRMZXZlbDtcbiAgICAgIHZhciBzdG9yYWdlS2V5ID0gXCJsb2dsZXZlbFwiO1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgc3RvcmFnZUtleSArPSBcIjpcIiArIG5hbWU7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHBlcnNpc3RMZXZlbElmUG9zc2libGUobGV2ZWxOdW0pIHtcbiAgICAgICAgICB2YXIgbGV2ZWxOYW1lID0gKGxvZ01ldGhvZHNbbGV2ZWxOdW1dIHx8ICdzaWxlbnQnKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IHVuZGVmaW5lZFR5cGUpIHJldHVybjtcblxuICAgICAgICAgIC8vIFVzZSBsb2NhbFN0b3JhZ2UgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZVtzdG9yYWdlS2V5XSA9IGxldmVsTmFtZTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cblxuICAgICAgICAgIC8vIFVzZSBzZXNzaW9uIGNvb2tpZSBhcyBmYWxsYmFja1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5jb29raWUgPVxuICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdG9yYWdlS2V5KSArIFwiPVwiICsgbGV2ZWxOYW1lICsgXCI7XCI7XG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRQZXJzaXN0ZWRMZXZlbCgpIHtcbiAgICAgICAgICB2YXIgc3RvcmVkTGV2ZWw7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gdW5kZWZpbmVkVHlwZSkgcmV0dXJuO1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgc3RvcmVkTGV2ZWwgPSB3aW5kb3cubG9jYWxTdG9yYWdlW3N0b3JhZ2VLZXldO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cblxuICAgICAgICAgIC8vIEZhbGxiYWNrIHRvIGNvb2tpZXMgaWYgbG9jYWwgc3RvcmFnZSBnaXZlcyB1cyBub3RoaW5nXG4gICAgICAgICAgaWYgKHR5cGVvZiBzdG9yZWRMZXZlbCA9PT0gdW5kZWZpbmVkVHlwZSkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgdmFyIGNvb2tpZSA9IHdpbmRvdy5kb2N1bWVudC5jb29raWU7XG4gICAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBjb29raWUuaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RvcmFnZUtleSkgKyBcIj1cIik7XG4gICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RvcmVkTGV2ZWwgPSAvXihbXjtdKykvLmV4ZWMoY29va2llLnNsaWNlKGxvY2F0aW9uKSlbMV07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJZiB0aGUgc3RvcmVkIGxldmVsIGlzIG5vdCB2YWxpZCwgdHJlYXQgaXQgYXMgaWYgbm90aGluZyB3YXMgc3RvcmVkLlxuICAgICAgICAgIGlmIChzZWxmLmxldmVsc1tzdG9yZWRMZXZlbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBzdG9yZWRMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc3RvcmVkTGV2ZWw7XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICAgKlxuICAgICAgICogUHVibGljIGxvZ2dlciBBUEkgLSBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3BpbXRlcnJ5L2xvZ2xldmVsIGZvciBkZXRhaWxzXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgIHNlbGYubmFtZSA9IG5hbWU7XG5cbiAgICAgIHNlbGYubGV2ZWxzID0geyBcIlRSQUNFXCI6IDAsIFwiREVCVUdcIjogMSwgXCJJTkZPXCI6IDIsIFwiV0FSTlwiOiAzLFxuICAgICAgICAgIFwiRVJST1JcIjogNCwgXCJTSUxFTlRcIjogNX07XG5cbiAgICAgIHNlbGYubWV0aG9kRmFjdG9yeSA9IGZhY3RvcnkgfHwgZGVmYXVsdE1ldGhvZEZhY3Rvcnk7XG5cbiAgICAgIHNlbGYuZ2V0TGV2ZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnRMZXZlbDtcbiAgICAgIH07XG5cbiAgICAgIHNlbGYuc2V0TGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWwsIHBlcnNpc3QpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGxldmVsID09PSBcInN0cmluZ1wiICYmIHNlbGYubGV2ZWxzW2xldmVsLnRvVXBwZXJDYXNlKCldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbGV2ZWwgPSBzZWxmLmxldmVsc1tsZXZlbC50b1VwcGVyQ2FzZSgpXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gXCJudW1iZXJcIiAmJiBsZXZlbCA+PSAwICYmIGxldmVsIDw9IHNlbGYubGV2ZWxzLlNJTEVOVCkge1xuICAgICAgICAgICAgICBjdXJyZW50TGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgICAgICAgaWYgKHBlcnNpc3QgIT09IGZhbHNlKSB7ICAvLyBkZWZhdWx0cyB0byB0cnVlXG4gICAgICAgICAgICAgICAgICBwZXJzaXN0TGV2ZWxJZlBvc3NpYmxlKGxldmVsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXBsYWNlTG9nZ2luZ01ldGhvZHMuY2FsbChzZWxmLCBsZXZlbCwgbmFtZSk7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gdW5kZWZpbmVkVHlwZSAmJiBsZXZlbCA8IHNlbGYubGV2ZWxzLlNJTEVOVCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm8gY29uc29sZSBhdmFpbGFibGUgZm9yIGxvZ2dpbmdcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRocm93IFwibG9nLnNldExldmVsKCkgY2FsbGVkIHdpdGggaW52YWxpZCBsZXZlbDogXCIgKyBsZXZlbDtcbiAgICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzZWxmLnNldERlZmF1bHRMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICAgICAgICAgIGlmICghZ2V0UGVyc2lzdGVkTGV2ZWwoKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldExldmVsKGxldmVsLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc2VsZi5lbmFibGVBbGwgPSBmdW5jdGlvbihwZXJzaXN0KSB7XG4gICAgICAgICAgc2VsZi5zZXRMZXZlbChzZWxmLmxldmVscy5UUkFDRSwgcGVyc2lzdCk7XG4gICAgICB9O1xuXG4gICAgICBzZWxmLmRpc2FibGVBbGwgPSBmdW5jdGlvbihwZXJzaXN0KSB7XG4gICAgICAgICAgc2VsZi5zZXRMZXZlbChzZWxmLmxldmVscy5TSUxFTlQsIHBlcnNpc3QpO1xuICAgICAgfTtcblxuICAgICAgLy8gSW5pdGlhbGl6ZSB3aXRoIHRoZSByaWdodCBsZXZlbFxuICAgICAgdmFyIGluaXRpYWxMZXZlbCA9IGdldFBlcnNpc3RlZExldmVsKCk7XG4gICAgICBpZiAoaW5pdGlhbExldmVsID09IG51bGwpIHtcbiAgICAgICAgICBpbml0aWFsTGV2ZWwgPSBkZWZhdWx0TGV2ZWwgPT0gbnVsbCA/IFwiV0FSTlwiIDogZGVmYXVsdExldmVsO1xuICAgICAgfVxuICAgICAgc2VsZi5zZXRMZXZlbChpbml0aWFsTGV2ZWwsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqXG4gICAgICogVG9wLWxldmVsIEFQSVxuICAgICAqXG4gICAgICovXG5cbiAgICB2YXIgZGVmYXVsdExvZ2dlciA9IG5ldyBMb2dnZXIoKTtcblxuICAgIHZhciBfbG9nZ2Vyc0J5TmFtZSA9IHt9O1xuICAgIGRlZmF1bHRMb2dnZXIuZ2V0TG9nZ2VyID0gZnVuY3Rpb24gZ2V0TG9nZ2VyKG5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8IG5hbWUgPT09IFwiXCIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3Qgc3VwcGx5IGEgbmFtZSB3aGVuIGNyZWF0aW5nIGEgbG9nZ2VyLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsb2dnZXIgPSBfbG9nZ2Vyc0J5TmFtZVtuYW1lXTtcbiAgICAgICAgaWYgKCFsb2dnZXIpIHtcbiAgICAgICAgICBsb2dnZXIgPSBfbG9nZ2Vyc0J5TmFtZVtuYW1lXSA9IG5ldyBMb2dnZXIoXG4gICAgICAgICAgICBuYW1lLCBkZWZhdWx0TG9nZ2VyLmdldExldmVsKCksIGRlZmF1bHRMb2dnZXIubWV0aG9kRmFjdG9yeSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ2dlcjtcbiAgICB9O1xuXG4gICAgLy8gR3JhYiB0aGUgY3VycmVudCBnbG9iYWwgbG9nIHZhcmlhYmxlIGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG4gICAgdmFyIF9sb2cgPSAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkVHlwZSkgPyB3aW5kb3cubG9nIDogdW5kZWZpbmVkO1xuICAgIGRlZmF1bHRMb2dnZXIubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkVHlwZSAmJlxuICAgICAgICAgICAgICAgd2luZG93LmxvZyA9PT0gZGVmYXVsdExvZ2dlcikge1xuICAgICAgICAgICAgd2luZG93LmxvZyA9IF9sb2c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVmYXVsdExvZ2dlcjtcbiAgICB9O1xuXG4gICAgZGVmYXVsdExvZ2dlci5nZXRMb2dnZXJzID0gZnVuY3Rpb24gZ2V0TG9nZ2VycygpIHtcbiAgICAgICAgcmV0dXJuIF9sb2dnZXJzQnlOYW1lO1xuICAgIH07XG5cbiAgICByZXR1cm4gZGVmYXVsdExvZ2dlcjtcbn0pKTtcbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgdyA9IGQgKiA3O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWwpKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigtPyg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8d2Vla3M/fHd8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoXG4gICAgc3RyXG4gICk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3lycyc6XG4gICAgY2FzZSAneXInOlxuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIG4gKiB5O1xuICAgIGNhc2UgJ3dlZWtzJzpcbiAgICBjYXNlICd3ZWVrJzpcbiAgICBjYXNlICd3JzpcbiAgICAgIHJldHVybiBuICogdztcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJztcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbSkgKyAnbSc7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICB9XG4gIHJldHVybiBtcyArICdtcyc7XG59XG5cbi8qKlxuICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRMb25nKG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgZCwgJ2RheScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGgsICdob3VyJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgbSwgJ21pbnV0ZScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIHMsICdzZWNvbmQnKTtcbiAgfVxuICByZXR1cm4gbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG1zQWJzLCBuLCBuYW1lKSB7XG4gIHZhciBpc1BsdXJhbCA9IG1zQWJzID49IG4gKiAxLjU7XG4gIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbikgKyAnICcgKyBuYW1lICsgKGlzUGx1cmFsID8gJ3MnIDogJycpO1xufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImNvbnN0IHsgRXZlbnRFbWl0dGVyIH0gPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IExvZ2dlciA9IHJlcXVpcmUoJy4vTG9nZ2VyJyk7XG5cbmNsYXNzIEVuaGFuY2VkRXZlbnRFbWl0dGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyXG57XG5cdGNvbnN0cnVjdG9yKGxvZ2dlcilcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zZXRNYXhMaXN0ZW5lcnMoSW5maW5pdHkpO1xuXG5cdFx0dGhpcy5fbG9nZ2VyID0gbG9nZ2VyIHx8IG5ldyBMb2dnZXIoJ0VuaGFuY2VkRXZlbnRFbWl0dGVyJyk7XG5cdH1cblxuXHRzYWZlRW1pdChldmVudCwgLi4uYXJncylcblx0e1xuXHRcdHRyeVxuXHRcdHtcblx0XHRcdHRoaXMuZW1pdChldmVudCwgLi4uYXJncyk7XG5cdFx0fVxuXHRcdGNhdGNoIChlcnJvcilcblx0XHR7XG5cdFx0XHR0aGlzLl9sb2dnZXIuZXJyb3IoXG5cdFx0XHRcdCdzYWZlRW1pdCgpIHwgZXZlbnQgbGlzdGVuZXIgdGhyZXcgYW4gZXJyb3IgW2V2ZW50OiVzXTolbycsXG5cdFx0XHRcdGV2ZW50LCBlcnJvcik7XG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgc2FmZUVtaXRBc1Byb21pc2UoZXZlbnQsIC4uLmFyZ3MpXG5cdHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cblx0XHR7XG5cdFx0XHR0aGlzLnNhZmVFbWl0KGV2ZW50LCAuLi5hcmdzLCByZXNvbHZlLCByZWplY3QpO1xuXHRcdH0pO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5oYW5jZWRFdmVudEVtaXR0ZXI7XG4iLCJjb25zdCBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJyk7XG5cbmNvbnN0IEFQUF9OQU1FID0gJ3Byb3Rvby1jbGllbnQnO1xuXG5jbGFzcyBMb2dnZXJcbntcblx0Y29uc3RydWN0b3IocHJlZml4KVxuXHR7XG5cdFx0aWYgKHByZWZpeClcblx0XHR7XG5cdFx0XHR0aGlzLl9kZWJ1ZyA9IGRlYnVnKGAke0FQUF9OQU1FfToke3ByZWZpeH1gKTtcblx0XHRcdHRoaXMuX3dhcm4gPSBkZWJ1ZyhgJHtBUFBfTkFNRX06V0FSTjoke3ByZWZpeH1gKTtcblx0XHRcdHRoaXMuX2Vycm9yID0gZGVidWcoYCR7QVBQX05BTUV9OkVSUk9SOiR7cHJlZml4fWApO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0dGhpcy5fZGVidWcgPSBkZWJ1ZyhBUFBfTkFNRSk7XG5cdFx0XHR0aGlzLl93YXJuID0gZGVidWcoYCR7QVBQX05BTUV9OldBUk5gKTtcblx0XHRcdHRoaXMuX2Vycm9yID0gZGVidWcoYCR7QVBQX05BTUV9OkVSUk9SYCk7XG5cdFx0fVxuXG5cdFx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXHRcdHRoaXMuX2RlYnVnLmxvZyA9IGNvbnNvbGUuaW5mby5iaW5kKGNvbnNvbGUpO1xuXHRcdHRoaXMuX3dhcm4ubG9nID0gY29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7XG5cdFx0dGhpcy5fZXJyb3IubG9nID0gY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpO1xuXHRcdC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXHR9XG5cblx0Z2V0IGRlYnVnKClcblx0e1xuXHRcdHJldHVybiB0aGlzLl9kZWJ1Zztcblx0fVxuXG5cdGdldCB3YXJuKClcblx0e1xuXHRcdHJldHVybiB0aGlzLl93YXJuO1xuXHR9XG5cblx0Z2V0IGVycm9yKClcblx0e1xuXHRcdHJldHVybiB0aGlzLl9lcnJvcjtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvZ2dlcjtcbiIsImNvbnN0IExvZ2dlciA9IHJlcXVpcmUoJy4vTG9nZ2VyJyk7XG5jb25zdCB7IGdlbmVyYXRlUmFuZG9tTnVtYmVyIH0gPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoJ01lc3NhZ2UnKTtcblxuY2xhc3MgTWVzc2FnZVxue1xuXHRzdGF0aWMgcGFyc2UocmF3KVxuXHR7XG5cdFx0bGV0IG9iamVjdDtcblx0XHRjb25zdCBtZXNzYWdlID0ge307XG5cblx0XHR0cnlcblx0XHR7XG5cdFx0XHRvYmplY3QgPSBKU09OLnBhcnNlKHJhdyk7XG5cdFx0fVxuXHRcdGNhdGNoIChlcnJvcilcblx0XHR7XG5cdFx0XHRsb2dnZXIuZXJyb3IoJ3BhcnNlKCkgfCBpbnZhbGlkIEpTT046ICVzJywgZXJyb3IpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiBvYmplY3QgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob2JqZWN0KSlcblx0XHR7XG5cdFx0XHRsb2dnZXIuZXJyb3IoJ3BhcnNlKCkgfCBub3QgYW4gb2JqZWN0Jyk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBSZXF1ZXN0LlxuXHRcdGlmIChvYmplY3QucmVxdWVzdClcblx0XHR7XG5cdFx0XHRtZXNzYWdlLnJlcXVlc3QgPSB0cnVlO1xuXG5cdFx0XHRpZiAodHlwZW9mIG9iamVjdC5tZXRob2QgIT09ICdzdHJpbmcnKVxuXHRcdFx0e1xuXHRcdFx0XHRsb2dnZXIuZXJyb3IoJ3BhcnNlKCkgfCBtaXNzaW5nL2ludmFsaWQgbWV0aG9kIGZpZWxkJyk7XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIG9iamVjdC5pZCAhPT0gJ251bWJlcicpXG5cdFx0XHR7XG5cdFx0XHRcdGxvZ2dlci5lcnJvcigncGFyc2UoKSB8IG1pc3NpbmcvaW52YWxpZCBpZCBmaWVsZCcpO1xuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bWVzc2FnZS5pZCA9IG9iamVjdC5pZDtcblx0XHRcdG1lc3NhZ2UubWV0aG9kID0gb2JqZWN0Lm1ldGhvZDtcblx0XHRcdG1lc3NhZ2UuZGF0YSA9IG9iamVjdC5kYXRhIHx8IHt9O1xuXHRcdH1cblx0XHQvLyBSZXNwb25zZS5cblx0XHRlbHNlIGlmIChvYmplY3QucmVzcG9uc2UpXG5cdFx0e1xuXHRcdFx0bWVzc2FnZS5yZXNwb25zZSA9IHRydWU7XG5cblx0XHRcdGlmICh0eXBlb2Ygb2JqZWN0LmlkICE9PSAnbnVtYmVyJylcblx0XHRcdHtcblx0XHRcdFx0bG9nZ2VyLmVycm9yKCdwYXJzZSgpIHwgbWlzc2luZy9pbnZhbGlkIGlkIGZpZWxkJyk7XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRtZXNzYWdlLmlkID0gb2JqZWN0LmlkO1xuXG5cdFx0XHQvLyBTdWNjZXNzLlxuXHRcdFx0aWYgKG9iamVjdC5vaylcblx0XHRcdHtcblx0XHRcdFx0bWVzc2FnZS5vayA9IHRydWU7XG5cdFx0XHRcdG1lc3NhZ2UuZGF0YSA9IG9iamVjdC5kYXRhIHx8IHt9O1xuXHRcdFx0fVxuXHRcdFx0Ly8gRXJyb3IuXG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHRcdG1lc3NhZ2Uub2sgPSBmYWxzZTtcblx0XHRcdFx0bWVzc2FnZS5lcnJvckNvZGUgPSBvYmplY3QuZXJyb3JDb2RlO1xuXHRcdFx0XHRtZXNzYWdlLmVycm9yUmVhc29uID0gb2JqZWN0LmVycm9yUmVhc29uO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBOb3RpZmljYXRpb24uXG5cdFx0ZWxzZSBpZiAob2JqZWN0Lm5vdGlmaWNhdGlvbilcblx0XHR7XG5cdFx0XHRtZXNzYWdlLm5vdGlmaWNhdGlvbiA9IHRydWU7XG5cblx0XHRcdGlmICh0eXBlb2Ygb2JqZWN0Lm1ldGhvZCAhPT0gJ3N0cmluZycpXG5cdFx0XHR7XG5cdFx0XHRcdGxvZ2dlci5lcnJvcigncGFyc2UoKSB8IG1pc3NpbmcvaW52YWxpZCBtZXRob2QgZmllbGQnKTtcblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdG1lc3NhZ2UubWV0aG9kID0gb2JqZWN0Lm1ldGhvZDtcblx0XHRcdG1lc3NhZ2UuZGF0YSA9IG9iamVjdC5kYXRhIHx8IHt9O1xuXHRcdH1cblx0XHQvLyBJbnZhbGlkLlxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHRsb2dnZXIuZXJyb3IoJ3BhcnNlKCkgfCBtaXNzaW5nIHJlcXVlc3QvcmVzcG9uc2UgZmllbGQnKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZXNzYWdlO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZVJlcXVlc3QobWV0aG9kLCBkYXRhKVxuXHR7XG5cdFx0Y29uc3QgcmVxdWVzdCA9XG5cdFx0e1xuXHRcdFx0cmVxdWVzdCA6IHRydWUsXG5cdFx0XHRpZCAgICAgIDogZ2VuZXJhdGVSYW5kb21OdW1iZXIoKSxcblx0XHRcdG1ldGhvZCAgOiBtZXRob2QsXG5cdFx0XHRkYXRhICAgIDogZGF0YSB8fCB7fVxuXHRcdH07XG5cblx0XHRyZXR1cm4gcmVxdWVzdDtcblx0fVxuXG5cdHN0YXRpYyBjcmVhdGVTdWNjZXNzUmVzcG9uc2UocmVxdWVzdCwgZGF0YSlcblx0e1xuXHRcdGNvbnN0IHJlc3BvbnNlID1cblx0XHR7XG5cdFx0XHRyZXNwb25zZSA6IHRydWUsXG5cdFx0XHRpZCAgICAgICA6IHJlcXVlc3QuaWQsXG5cdFx0XHRvayAgICAgICA6IHRydWUsXG5cdFx0XHRkYXRhICAgICA6IGRhdGEgfHwge31cblx0XHR9O1xuXG5cdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZUVycm9yUmVzcG9uc2UocmVxdWVzdCwgZXJyb3JDb2RlLCBlcnJvclJlYXNvbilcblx0e1xuXHRcdGNvbnN0IHJlc3BvbnNlID1cblx0XHR7XG5cdFx0XHRyZXNwb25zZSAgICA6IHRydWUsXG5cdFx0XHRpZCAgICAgICAgICA6IHJlcXVlc3QuaWQsXG5cdFx0XHRvayAgICAgICAgICA6IGZhbHNlLFxuXHRcdFx0ZXJyb3JDb2RlICAgOiBlcnJvckNvZGUsXG5cdFx0XHRlcnJvclJlYXNvbiA6IGVycm9yUmVhc29uXG5cdFx0fTtcblxuXHRcdHJldHVybiByZXNwb25zZTtcblx0fVxuXG5cdHN0YXRpYyBjcmVhdGVOb3RpZmljYXRpb24obWV0aG9kLCBkYXRhKVxuXHR7XG5cdFx0Y29uc3Qgbm90aWZpY2F0aW9uID1cblx0XHR7XG5cdFx0XHRub3RpZmljYXRpb24gOiB0cnVlLFxuXHRcdFx0bWV0aG9kICAgICAgIDogbWV0aG9kLFxuXHRcdFx0ZGF0YSAgICAgICAgIDogZGF0YSB8fCB7fVxuXHRcdH07XG5cblx0XHRyZXR1cm4gbm90aWZpY2F0aW9uO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWVzc2FnZTtcbiIsImNvbnN0IExvZ2dlciA9IHJlcXVpcmUoJy4vTG9nZ2VyJyk7XG5jb25zdCBFbmhhbmNlZEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJy4vRW5oYW5jZWRFdmVudEVtaXR0ZXInKTtcbmNvbnN0IE1lc3NhZ2UgPSByZXF1aXJlKCcuL01lc3NhZ2UnKTtcblxuY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcignUGVlcicpO1xuXG5jbGFzcyBQZWVyIGV4dGVuZHMgRW5oYW5jZWRFdmVudEVtaXR0ZXJcbntcblx0LyoqXG5cdCAqIEBwYXJhbSB7cHJvdG9vLlRyYW5zcG9ydH0gdHJhbnNwb3J0XG5cdCAqXG5cdCAqIEBlbWl0cyBvcGVuXG5cdCAqIEBlbWl0cyB7Y3VycmVudEF0dGVtcHQ6IE51bWJlcn0gZmFpbGVkXG5cdCAqIEBlbWl0cyBkaXNjb25uZWN0ZWRcblx0ICogQGVtaXRzIGNsb3NlXG5cdCAqIEBlbWl0cyB7cmVxdWVzdDogcHJvdG9vLlJlcXVlc3QsIGFjY2VwdDogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb259IHJlcXVlc3Rcblx0ICogQGVtaXRzIHtub3RpZmljYXRpb246IHByb3Rvby5Ob3RpZmljYXRpb259IG5vdGlmaWNhdGlvblxuXHQgKi9cblx0Y29uc3RydWN0b3IodHJhbnNwb3J0KVxuXHR7XG5cdFx0c3VwZXIobG9nZ2VyKTtcblxuXHRcdGxvZ2dlci5kZWJ1ZygnY29uc3RydWN0b3IoKScpO1xuXG5cdFx0Ly8gQ2xvc2VkIGZsYWcuXG5cdFx0Ly8gQHR5cGUge0Jvb2xlYW59XG5cdFx0dGhpcy5fY2xvc2VkID0gZmFsc2U7XG5cblx0XHQvLyBUcmFuc3BvcnQuXG5cdFx0Ly8gQHR5cGUge3Byb3Rvby5UcmFuc3BvcnR9XG5cdFx0dGhpcy5fdHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuXG5cdFx0Ly8gQ29ubmVjdGVkIGZsYWcuXG5cdFx0Ly8gQHR5cGUge0Jvb2xlYW59XG5cdFx0dGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG5cblx0XHQvLyBDdXN0b20gZGF0YSBvYmplY3QuXG5cdFx0Ly8gQHR5cGUge09iamVjdH1cblx0XHR0aGlzLl9kYXRhID0ge307XG5cblx0XHQvLyBNYXAgb2YgcGVuZGluZyBzZW50IHJlcXVlc3Qgb2JqZWN0cyBpbmRleGVkIGJ5IHJlcXVlc3QgaWQuXG5cdFx0Ly8gQHR5cGUge01hcDxOdW1iZXIsIE9iamVjdD59XG5cdFx0dGhpcy5fc2VudHMgPSBuZXcgTWFwKCk7XG5cblx0XHQvLyBIYW5kbGUgdHJhbnNwb3J0LlxuXHRcdHRoaXMuX2hhbmRsZVRyYW5zcG9ydCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhlIFBlZXIgaXMgY2xvc2VkLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn1cblx0ICovXG5cdGdldCBjbG9zZWQoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2Nsb3NlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoZSBQZWVyIGlzIGNvbm5lY3RlZC5cblx0ICpcblx0ICogQHJldHVybnMge0Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgY29ubmVjdGVkKClcblx0e1xuXHRcdHJldHVybiB0aGlzLl9jb25uZWN0ZWQ7XG5cdH1cblxuXHQvKipcblx0ICogQXBwIGN1c3RvbSBkYXRhLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fVxuXHQgKi9cblx0Z2V0IGRhdGEoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2RhdGE7XG5cdH1cblxuXHQvKipcblx0ICogSW52YWxpZCBzZXR0ZXIuXG5cdCAqL1xuXHRzZXQgZGF0YShkYXRhKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cdHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBvdmVycmlkZSBkYXRhIG9iamVjdCcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlIHRoaXMgUGVlciBhbmQgaXRzIFRyYW5zcG9ydC5cblx0ICovXG5cdGNsb3NlKClcblx0e1xuXHRcdGlmICh0aGlzLl9jbG9zZWQpXG5cdFx0XHRyZXR1cm47XG5cblx0XHRsb2dnZXIuZGVidWcoJ2Nsb3NlKCknKTtcblxuXHRcdHRoaXMuX2Nsb3NlZCA9IHRydWU7XG5cdFx0dGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG5cblx0XHQvLyBDbG9zZSBUcmFuc3BvcnQuXG5cdFx0dGhpcy5fdHJhbnNwb3J0LmNsb3NlKCk7XG5cblx0XHQvLyBDbG9zZSBldmVyeSBwZW5kaW5nIHNlbnQuXG5cdFx0Zm9yIChjb25zdCBzZW50IG9mIHRoaXMuX3NlbnRzLnZhbHVlcygpKVxuXHRcdHtcblx0XHRcdHNlbnQuY2xvc2UoKTtcblx0XHR9XG5cblx0XHQvLyBFbWl0ICdjbG9zZScgZXZlbnQuXG5cdFx0dGhpcy5zYWZlRW1pdCgnY2xvc2UnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZW5kIGEgcHJvdG9vIHJlcXVlc3QgdG8gdGhlIHNlcnZlci1zaWRlIFJvb20uXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2Rcblx0ICogQHBhcmFtIHtPYmplY3R9IFtkYXRhXVxuXHQgKlxuXHQgKiBAYXN5bmNcblx0ICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3BvbnNlIGRhdGEgT2JqZWN0IGlmIGEgc3VjY2VzcyByZXNwb25zZSBpcyByZWNlaXZlZC5cblx0ICovXG5cdGFzeW5jIHJlcXVlc3QobWV0aG9kLCBkYXRhID0gdW5kZWZpbmVkKVxuXHR7XG5cdFx0Y29uc3QgcmVxdWVzdCA9IE1lc3NhZ2UuY3JlYXRlUmVxdWVzdChtZXRob2QsIGRhdGEpO1xuXG5cdFx0dGhpcy5fbG9nZ2VyLmRlYnVnKCdyZXF1ZXN0KCkgW21ldGhvZDolcywgaWQ6JXNdJywgbWV0aG9kLCByZXF1ZXN0LmlkKTtcblxuXHRcdC8vIFRoaXMgbWF5IHRocm93LlxuXHRcdGF3YWl0IHRoaXMuX3RyYW5zcG9ydC5zZW5kKHJlcXVlc3QpO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChwUmVzb2x2ZSwgcFJlamVjdCkgPT5cblx0XHR7XG5cdFx0XHRjb25zdCB0aW1lb3V0ID0gMTUwMCAqICgxNSArICgwLjEgKiB0aGlzLl9zZW50cy5zaXplKSk7XG5cdFx0XHRjb25zdCBzZW50ID1cblx0XHRcdHtcblx0XHRcdFx0aWQgICAgICA6IHJlcXVlc3QuaWQsXG5cdFx0XHRcdG1ldGhvZCAgOiByZXF1ZXN0Lm1ldGhvZCxcblx0XHRcdFx0cmVzb2x2ZSA6IChkYXRhMikgPT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmICghdGhpcy5fc2VudHMuZGVsZXRlKHJlcXVlc3QuaWQpKVxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHNlbnQudGltZXIpO1xuXHRcdFx0XHRcdHBSZXNvbHZlKGRhdGEyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0cmVqZWN0IDogKGVycm9yKSA9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLl9zZW50cy5kZWxldGUocmVxdWVzdC5pZCkpXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHRjbGVhclRpbWVvdXQoc2VudC50aW1lcik7XG5cdFx0XHRcdFx0cFJlamVjdChlcnJvcik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRpbWVyIDogc2V0VGltZW91dCgoKSA9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLl9zZW50cy5kZWxldGUocmVxdWVzdC5pZCkpXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHRwUmVqZWN0KG5ldyBFcnJvcigncmVxdWVzdCB0aW1lb3V0JykpO1xuXHRcdFx0XHR9LCB0aW1lb3V0KSxcblx0XHRcdFx0Y2xvc2UgOiAoKSA9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHNlbnQudGltZXIpO1xuXHRcdFx0XHRcdHBSZWplY3QobmV3IEVycm9yKCdwZWVyIGNsb3NlZCcpKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gQWRkIHNlbnQgc3R1ZmYgdG8gdGhlIG1hcC5cblx0XHRcdHRoaXMuX3NlbnRzLnNldChyZXF1ZXN0LmlkLCBzZW50KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZW5kIGEgcHJvdG9vIG5vdGlmaWNhdGlvbiB0byB0aGUgc2VydmVyLXNpZGUgUm9vbS5cblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuXHQgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG5cdCAqXG5cdCAqIEBhc3luY1xuXHQgKi9cblx0YXN5bmMgbm90aWZ5KG1ldGhvZCwgZGF0YSA9IHVuZGVmaW5lZClcblx0e1xuXHRcdGNvbnN0IG5vdGlmaWNhdGlvbiA9IE1lc3NhZ2UuY3JlYXRlTm90aWZpY2F0aW9uKG1ldGhvZCwgZGF0YSk7XG5cblx0XHR0aGlzLl9sb2dnZXIuZGVidWcoJ25vdGlmeSgpIFttZXRob2Q6JXNdJywgbWV0aG9kKTtcblxuXHRcdC8vIFRoaXMgbWF5IHRocm93LlxuXHRcdGF3YWl0IHRoaXMuX3RyYW5zcG9ydC5zZW5kKG5vdGlmaWNhdGlvbik7XG5cdH1cblxuXHRfaGFuZGxlVHJhbnNwb3J0KClcblx0e1xuXHRcdGlmICh0aGlzLl90cmFuc3BvcnQuY2xvc2VkKVxuXHRcdHtcblx0XHRcdHRoaXMuX2Nsb3NlZCA9IHRydWU7XG5cblx0XHRcdHNldFRpbWVvdXQoKCkgPT5cblx0XHRcdHtcblx0XHRcdFx0aWYgKHRoaXMuX2Nsb3NlZClcblx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0dGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG5cblx0XHRcdFx0dGhpcy5zYWZlRW1pdCgnY2xvc2UnKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fdHJhbnNwb3J0Lm9uKCdvcGVuJywgKCkgPT5cblx0XHR7XG5cdFx0XHRpZiAodGhpcy5fY2xvc2VkKVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdGxvZ2dlci5kZWJ1ZygnZW1pdCBcIm9wZW5cIicpO1xuXG5cdFx0XHR0aGlzLl9jb25uZWN0ZWQgPSB0cnVlO1xuXG5cdFx0XHR0aGlzLnNhZmVFbWl0KCdvcGVuJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLl90cmFuc3BvcnQub24oJ2Rpc2Nvbm5lY3RlZCcsICgpID0+XG5cdFx0e1xuXHRcdFx0aWYgKHRoaXMuX2Nsb3NlZClcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRsb2dnZXIuZGVidWcoJ2VtaXQgXCJkaXNjb25uZWN0ZWRcIicpO1xuXG5cdFx0XHR0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcblxuXHRcdFx0dGhpcy5zYWZlRW1pdCgnZGlzY29ubmVjdGVkJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLl90cmFuc3BvcnQub24oJ2ZhaWxlZCcsIChjdXJyZW50QXR0ZW1wdCkgPT5cblx0XHR7XG5cdFx0XHRpZiAodGhpcy5fY2xvc2VkKVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdGxvZ2dlci5kZWJ1ZygnZW1pdCBcImZhaWxlZFwiIFtjdXJyZW50QXR0ZW1wdDolc10nLCBjdXJyZW50QXR0ZW1wdCk7XG5cblx0XHRcdHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuXG5cdFx0XHR0aGlzLnNhZmVFbWl0KCdmYWlsZWQnLCBjdXJyZW50QXR0ZW1wdCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLl90cmFuc3BvcnQub24oJ2Nsb3NlJywgKCkgPT5cblx0XHR7XG5cdFx0XHRpZiAodGhpcy5fY2xvc2VkKVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdHRoaXMuX2Nsb3NlZCA9IHRydWU7XG5cblx0XHRcdGxvZ2dlci5kZWJ1ZygnZW1pdCBcImNsb3NlXCInKTtcblxuXHRcdFx0dGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG5cblx0XHRcdHRoaXMuc2FmZUVtaXQoJ2Nsb3NlJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLl90cmFuc3BvcnQub24oJ21lc3NhZ2UnLCAobWVzc2FnZSkgPT5cblx0XHR7XG5cdFx0XHRpZiAobWVzc2FnZS5yZXF1ZXN0KVxuXHRcdFx0XHR0aGlzLl9oYW5kbGVSZXF1ZXN0KG1lc3NhZ2UpO1xuXHRcdFx0ZWxzZSBpZiAobWVzc2FnZS5yZXNwb25zZSlcblx0XHRcdFx0dGhpcy5faGFuZGxlUmVzcG9uc2UobWVzc2FnZSk7XG5cdFx0XHRlbHNlIGlmIChtZXNzYWdlLm5vdGlmaWNhdGlvbilcblx0XHRcdFx0dGhpcy5faGFuZGxlTm90aWZpY2F0aW9uKG1lc3NhZ2UpO1xuXHRcdH0pO1xuXHR9XG5cblx0X2hhbmRsZVJlcXVlc3QocmVxdWVzdClcblx0e1xuXHRcdHRyeVxuXHRcdHtcblx0XHRcdHRoaXMuZW1pdCgncmVxdWVzdCcsXG5cdFx0XHRcdC8vIFJlcXVlc3QuXG5cdFx0XHRcdHJlcXVlc3QsXG5cdFx0XHRcdC8vIGFjY2VwdCgpIGZ1bmN0aW9uLlxuXHRcdFx0XHQoZGF0YSkgPT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gTWVzc2FnZS5jcmVhdGVTdWNjZXNzUmVzcG9uc2UocmVxdWVzdCwgZGF0YSk7XG5cblx0XHRcdFx0XHR0aGlzLl90cmFuc3BvcnQuc2VuZChyZXNwb25zZSlcblx0XHRcdFx0XHRcdC5jYXRjaCgoKSA9PiB7fSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdC8vIHJlamVjdCgpIGZ1bmN0aW9uLlxuXHRcdFx0XHQoZXJyb3JDb2RlLCBlcnJvclJlYXNvbikgPT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmIChlcnJvckNvZGUgaW5zdGFuY2VvZiBFcnJvcilcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRlcnJvckNvZGUgPSA1MDA7XG5cdFx0XHRcdFx0XHRlcnJvclJlYXNvbiA9IFN0cmluZyhlcnJvckNvZGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZXJyb3JDb2RlID09PSAnbnVtYmVyJyAmJiBlcnJvclJlYXNvbiBpbnN0YW5jZW9mIEVycm9yKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGVycm9yUmVhc29uID0gU3RyaW5nKGVycm9yUmVhc29uKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9XG5cdFx0XHRcdFx0XHRNZXNzYWdlLmNyZWF0ZUVycm9yUmVzcG9uc2UocmVxdWVzdCwgZXJyb3JDb2RlLCBlcnJvclJlYXNvbik7XG5cblx0XHRcdFx0XHR0aGlzLl90cmFuc3BvcnQuc2VuZChyZXNwb25zZSlcblx0XHRcdFx0XHRcdC5jYXRjaCgoKSA9PiB7fSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0XHRjYXRjaCAoZXJyb3IpXG5cdFx0e1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBNZXNzYWdlLmNyZWF0ZUVycm9yUmVzcG9uc2UocmVxdWVzdCwgNTAwLCBTdHJpbmcoZXJyb3IpKTtcblxuXHRcdFx0dGhpcy5fdHJhbnNwb3J0LnNlbmQocmVzcG9uc2UpXG5cdFx0XHRcdC5jYXRjaCgoKSA9PiB7fSk7XG5cdFx0fVxuXHR9XG5cblx0X2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuXHR7XG5cdFx0Y29uc3Qgc2VudCA9IHRoaXMuX3NlbnRzLmdldChyZXNwb25zZS5pZCk7XG5cblx0XHRpZiAoIXNlbnQpXG5cdFx0e1xuXHRcdFx0bG9nZ2VyLmVycm9yKFxuXHRcdFx0XHQncmVjZWl2ZWQgcmVzcG9uc2UgZG9lcyBub3QgbWF0Y2ggYW55IHNlbnQgcmVxdWVzdCBbaWQ6JXNdJywgcmVzcG9uc2UuaWQpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHJlc3BvbnNlLm9rKVxuXHRcdHtcblx0XHRcdHNlbnQucmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLmVycm9yUmVhc29uKTtcblxuXHRcdFx0ZXJyb3IuY29kZSA9IHJlc3BvbnNlLmVycm9yQ29kZTtcblx0XHRcdHNlbnQucmVqZWN0KGVycm9yKTtcblx0XHR9XG5cdH1cblxuXHRfaGFuZGxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbilcblx0e1xuXHRcdHRoaXMuc2FmZUVtaXQoJ25vdGlmaWNhdGlvbicsIG5vdGlmaWNhdGlvbik7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQZWVyO1xuIiwiY29uc3QgeyB2ZXJzaW9uIH0gPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKTtcbmNvbnN0IFBlZXIgPSByZXF1aXJlKCcuL1BlZXInKTtcbmNvbnN0IFdlYlNvY2tldFRyYW5zcG9ydCA9IHJlcXVpcmUoJy4vdHJhbnNwb3J0cy9XZWJTb2NrZXRUcmFuc3BvcnQnKTtcblxuLyoqXG4gKiBFeHBvc2UgbWVkaWFzb3VwLWNsaWVudCB2ZXJzaW9uLlxuICpcbiAqIEB0eXBlIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMudmVyc2lvbiA9IHZlcnNpb247XG5cbi8qKlxuICogRXhwb3NlIFBlZXIgY2xhc3MuXG4gKlxuICogQHR5cGUge0NsYXNzfVxuICovXG5leHBvcnRzLlBlZXIgPSBQZWVyO1xuXG4vKipcbiAqIEV4cG9zZSBXZWJTb2NrZXRUcmFuc3BvcnQgY2xhc3MuXG4gKlxuICogQHR5cGUge0NsYXNzfVxuICovXG5leHBvcnRzLldlYlNvY2tldFRyYW5zcG9ydCA9IFdlYlNvY2tldFRyYW5zcG9ydDtcbiIsImNvbnN0IFczQ1dlYlNvY2tldCA9IHJlcXVpcmUoJ3dlYnNvY2tldCcpLnczY3dlYnNvY2tldDtcbmNvbnN0IHJldHJ5ID0gcmVxdWlyZSgncmV0cnknKTtcbmNvbnN0IExvZ2dlciA9IHJlcXVpcmUoJy4uL0xvZ2dlcicpO1xuY29uc3QgRW5oYW5jZWRFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCcuLi9FbmhhbmNlZEV2ZW50RW1pdHRlcicpO1xuY29uc3QgTWVzc2FnZSA9IHJlcXVpcmUoJy4uL01lc3NhZ2UnKTtcblxuY29uc3QgV1NfU1VCUFJPVE9DT0wgPSAncHJvdG9vJztcbmNvbnN0IERFRkFVTFRfUkVUUllfT1BUSU9OUyA9XG57XG5cdHJldHJpZXMgICAgOiAxMCxcblx0ZmFjdG9yICAgICA6IDIsXG5cdG1pblRpbWVvdXQgOiAxICogMTAwMCxcblx0bWF4VGltZW91dCA6IDggKiAxMDAwXG59O1xuXG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdXZWJTb2NrZXRUcmFuc3BvcnQnKTtcblxuY2xhc3MgV2ViU29ja2V0VHJhbnNwb3J0IGV4dGVuZHMgRW5oYW5jZWRFdmVudEVtaXR0ZXJcbntcblx0LyoqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgLSBXZWJTb2NrZXQgVVJMLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9ucyBmb3IgV2ViU29ja2V0LU5vZGUuVzNDV2ViU29ja2V0IGFuZCByZXRyeS5cblx0ICovXG5cdGNvbnN0cnVjdG9yKHVybCwgb3B0aW9ucylcblx0e1xuXHRcdHN1cGVyKGxvZ2dlcik7XG5cblx0XHRsb2dnZXIuZGVidWcoJ2NvbnN0cnVjdG9yKCkgW3VybDolcywgb3B0aW9uczolb10nLCB1cmwsIG9wdGlvbnMpO1xuXG5cdFx0Ly8gQ2xvc2VkIGZsYWcuXG5cdFx0Ly8gQHR5cGUge0Jvb2xlYW59XG5cdFx0dGhpcy5fY2xvc2VkID0gZmFsc2U7XG5cblx0XHQvLyBXZWJTb2NrZXQgVVJMLlxuXHRcdC8vIEB0eXBlIHtTdHJpbmd9XG5cdFx0dGhpcy5fdXJsID0gdXJsO1xuXG5cdFx0Ly8gT3B0aW9ucy5cblx0XHQvLyBAdHlwZSB7T2JqZWN0fVxuXHRcdHRoaXMuX29wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdFx0Ly8gV2ViU29ja2V0IGluc3RhbmNlLlxuXHRcdC8vIEB0eXBlIHtXZWJTb2NrZXR9XG5cdFx0dGhpcy5fd3MgPSBudWxsO1xuXG5cdFx0Ly8gUnVuIHRoZSBXZWJTb2NrZXQuXG5cdFx0dGhpcy5fcnVuV2ViU29ja2V0KCk7XG5cdH1cblxuXHRnZXQgY2xvc2VkKClcblx0e1xuXHRcdHJldHVybiB0aGlzLl9jbG9zZWQ7XG5cdH1cblxuXHRjbG9zZSgpXG5cdHtcblx0XHRpZiAodGhpcy5fY2xvc2VkKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0bG9nZ2VyLmRlYnVnKCdjbG9zZSgpJyk7XG5cblx0XHQvLyBEb24ndCB3YWl0IGZvciB0aGUgV2ViU29ja2V0ICdjbG9zZScgZXZlbnQsIGRvIGl0IG5vdy5cblx0XHR0aGlzLl9jbG9zZWQgPSB0cnVlO1xuXHRcdHRoaXMuc2FmZUVtaXQoJ2Nsb3NlJyk7XG5cblx0XHR0cnlcblx0XHR7XG5cdFx0XHR0aGlzLl93cy5vbm9wZW4gPSBudWxsO1xuXHRcdFx0dGhpcy5fd3Mub25jbG9zZSA9IG51bGw7XG5cdFx0XHR0aGlzLl93cy5vbmVycm9yID0gbnVsbDtcblx0XHRcdHRoaXMuX3dzLm9ubWVzc2FnZSA9IG51bGw7XG5cdFx0XHR0aGlzLl93cy5jbG9zZSgpO1xuXHRcdH1cblx0XHRjYXRjaCAoZXJyb3IpXG5cdFx0e1xuXHRcdFx0bG9nZ2VyLmVycm9yKCdjbG9zZSgpIHwgZXJyb3IgY2xvc2luZyB0aGUgV2ViU29ja2V0OiAlbycsIGVycm9yKTtcblx0XHR9XG5cdH1cblxuXHRhc3luYyBzZW5kKG1lc3NhZ2UpXG5cdHtcblx0XHRpZiAodGhpcy5fY2xvc2VkKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCd0cmFuc3BvcnQgY2xvc2VkJyk7XG5cblx0XHR0cnlcblx0XHR7XG5cdFx0XHR0aGlzLl93cy5zZW5kKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcblx0XHR9XG5cdFx0Y2F0Y2ggKGVycm9yKVxuXHRcdHtcblx0XHRcdGxvZ2dlci53YXJuKCdzZW5kKCkgZmFpbGVkOiVvJywgZXJyb3IpO1xuXG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH1cblxuXHRfcnVuV2ViU29ja2V0KClcblx0e1xuXHRcdGNvbnN0IG9wZXJhdGlvbiA9XG5cdFx0XHRyZXRyeS5vcGVyYXRpb24odGhpcy5fb3B0aW9ucy5yZXRyeSB8fCBERUZBVUxUX1JFVFJZX09QVElPTlMpO1xuXG5cdFx0bGV0IHdhc0Nvbm5lY3RlZCA9IGZhbHNlO1xuXG5cdFx0b3BlcmF0aW9uLmF0dGVtcHQoKGN1cnJlbnRBdHRlbXB0KSA9PlxuXHRcdHtcblx0XHRcdGlmICh0aGlzLl9jbG9zZWQpXG5cdFx0XHR7XG5cdFx0XHRcdG9wZXJhdGlvbi5zdG9wKCk7XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRsb2dnZXIuZGVidWcoJ19ydW5XZWJTb2NrZXQoKSBbY3VycmVudEF0dGVtcHQ6JXNdJywgY3VycmVudEF0dGVtcHQpO1xuXG5cdFx0XHR0aGlzLl93cyA9IG5ldyBXM0NXZWJTb2NrZXQoXG5cdFx0XHRcdHRoaXMuX3VybCxcblx0XHRcdFx0V1NfU1VCUFJPVE9DT0wsXG5cdFx0XHRcdHRoaXMuX29wdGlvbnMub3JpZ2luLFxuXHRcdFx0XHR0aGlzLl9vcHRpb25zLmhlYWRlcnMsXG5cdFx0XHRcdHRoaXMuX29wdGlvbnMucmVxdWVzdE9wdGlvbnMsXG5cdFx0XHRcdHRoaXMuX29wdGlvbnMuY2xpZW50Q29uZmlnKTtcblxuXHRcdFx0dGhpcy5fd3Mub25vcGVuID0gKCkgPT5cblx0XHRcdHtcblx0XHRcdFx0aWYgKHRoaXMuX2Nsb3NlZClcblx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0d2FzQ29ubmVjdGVkID0gdHJ1ZTtcblxuXHRcdFx0XHQvLyBFbWl0ICdvcGVuJyBldmVudC5cblx0XHRcdFx0dGhpcy5zYWZlRW1pdCgnb3BlbicpO1xuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5fd3Mub25jbG9zZSA9IChldmVudCkgPT5cblx0XHRcdHtcblx0XHRcdFx0aWYgKHRoaXMuX2Nsb3NlZClcblx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0bG9nZ2VyLndhcm4oXG5cdFx0XHRcdFx0J1dlYlNvY2tldCBcImNsb3NlXCIgZXZlbnQgW3dhc0NsZWFuOiVzLCBjb2RlOiVzLCByZWFzb246XCIlc1wiXScsXG5cdFx0XHRcdFx0ZXZlbnQud2FzQ2xlYW4sIGV2ZW50LmNvZGUsIGV2ZW50LnJlYXNvbik7XG5cblx0XHRcdFx0Ly8gRG9uJ3QgcmV0cnkgaWYgY29kZSBpcyA0MDAwIChjbG9zZWQgYnkgdGhlIHNlcnZlcikuXG5cdFx0XHRcdGlmIChldmVudC5jb2RlICE9PSA0MDAwKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly8gSWYgaXQgd2FzIG5vdCBjb25uZWN0ZWQsIHRyeSBhZ2Fpbi5cblx0XHRcdFx0XHRpZiAoIXdhc0Nvbm5lY3RlZClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnNhZmVFbWl0KCdmYWlsZWQnLCBjdXJyZW50QXR0ZW1wdCk7XG5cblx0XHRcdFx0XHRcdGlmICh0aGlzLl9jbG9zZWQpXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdFx0aWYgKG9wZXJhdGlvbi5yZXRyeSh0cnVlKSlcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBJZiBpdCB3YXMgY29ubmVjdGVkLCBzdGFydCBmcm9tIHNjcmF0Y2guXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG9wZXJhdGlvbi5zdG9wKCk7XG5cblx0XHRcdFx0XHRcdHRoaXMuc2FmZUVtaXQoJ2Rpc2Nvbm5lY3RlZCcpO1xuXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5fY2xvc2VkKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHRcdHRoaXMuX3J1bldlYlNvY2tldCgpO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fY2xvc2VkID0gdHJ1ZTtcblxuXHRcdFx0XHQvLyBFbWl0ICdjbG9zZScgZXZlbnQuXG5cdFx0XHRcdHRoaXMuc2FmZUVtaXQoJ2Nsb3NlJyk7XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLl93cy5vbmVycm9yID0gKCkgPT5cblx0XHRcdHtcblx0XHRcdFx0aWYgKHRoaXMuX2Nsb3NlZClcblx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0bG9nZ2VyLmVycm9yKCdXZWJTb2NrZXQgXCJlcnJvclwiIGV2ZW50Jyk7XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLl93cy5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+XG5cdFx0XHR7XG5cdFx0XHRcdGlmICh0aGlzLl9jbG9zZWQpXG5cdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdGNvbnN0IG1lc3NhZ2UgPSBNZXNzYWdlLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG5cdFx0XHRcdGlmICghbWVzc2FnZSlcblx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0aWYgKHRoaXMubGlzdGVuZXJDb3VudCgnbWVzc2FnZScpID09PSAwKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bG9nZ2VyLmVycm9yKFxuXHRcdFx0XHRcdFx0J25vIGxpc3RlbmVycyBmb3IgV2ViU29ja2V0IFwibWVzc2FnZVwiIGV2ZW50LCBpZ25vcmluZyByZWNlaXZlZCBtZXNzYWdlJyk7XG5cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBFbWl0ICdtZXNzYWdlJyBldmVudC5cblx0XHRcdFx0dGhpcy5zYWZlRW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpO1xuXHRcdFx0fTtcblx0XHR9KTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYlNvY2tldFRyYW5zcG9ydDtcbiIsIi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHBvc2l0aXZlIGludGVnZXIuXG4gKlxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuZXhwb3J0cy5nZW5lcmF0ZVJhbmRvbU51bWJlciA9IGZ1bmN0aW9uKClcbntcblx0cmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL3JldHJ5Jyk7IiwidmFyIFJldHJ5T3BlcmF0aW9uID0gcmVxdWlyZSgnLi9yZXRyeV9vcGVyYXRpb24nKTtcblxuZXhwb3J0cy5vcGVyYXRpb24gPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciB0aW1lb3V0cyA9IGV4cG9ydHMudGltZW91dHMob3B0aW9ucyk7XG4gIHJldHVybiBuZXcgUmV0cnlPcGVyYXRpb24odGltZW91dHMsIHtcbiAgICAgIGZvcmV2ZXI6IG9wdGlvbnMgJiYgb3B0aW9ucy5mb3JldmVyLFxuICAgICAgdW5yZWY6IG9wdGlvbnMgJiYgb3B0aW9ucy51bnJlZixcbiAgICAgIG1heFJldHJ5VGltZTogb3B0aW9ucyAmJiBvcHRpb25zLm1heFJldHJ5VGltZVxuICB9KTtcbn07XG5cbmV4cG9ydHMudGltZW91dHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KG9wdGlvbnMpO1xuICB9XG5cbiAgdmFyIG9wdHMgPSB7XG4gICAgcmV0cmllczogMTAsXG4gICAgZmFjdG9yOiAyLFxuICAgIG1pblRpbWVvdXQ6IDEgKiAxMDAwLFxuICAgIG1heFRpbWVvdXQ6IEluZmluaXR5LFxuICAgIHJhbmRvbWl6ZTogZmFsc2VcbiAgfTtcbiAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMpIHtcbiAgICBvcHRzW2tleV0gPSBvcHRpb25zW2tleV07XG4gIH1cblxuICBpZiAob3B0cy5taW5UaW1lb3V0ID4gb3B0cy5tYXhUaW1lb3V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtaW5UaW1lb3V0IGlzIGdyZWF0ZXIgdGhhbiBtYXhUaW1lb3V0Jyk7XG4gIH1cblxuICB2YXIgdGltZW91dHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRzLnJldHJpZXM7IGkrKykge1xuICAgIHRpbWVvdXRzLnB1c2godGhpcy5jcmVhdGVUaW1lb3V0KGksIG9wdHMpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZm9yZXZlciAmJiAhdGltZW91dHMubGVuZ3RoKSB7XG4gICAgdGltZW91dHMucHVzaCh0aGlzLmNyZWF0ZVRpbWVvdXQoaSwgb3B0cykpO1xuICB9XG5cbiAgLy8gc29ydCB0aGUgYXJyYXkgbnVtZXJpY2FsbHkgYXNjZW5kaW5nXG4gIHRpbWVvdXRzLnNvcnQoZnVuY3Rpb24oYSxiKSB7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KTtcblxuICByZXR1cm4gdGltZW91dHM7XG59O1xuXG5leHBvcnRzLmNyZWF0ZVRpbWVvdXQgPSBmdW5jdGlvbihhdHRlbXB0LCBvcHRzKSB7XG4gIHZhciByYW5kb20gPSAob3B0cy5yYW5kb21pemUpXG4gICAgPyAoTWF0aC5yYW5kb20oKSArIDEpXG4gICAgOiAxO1xuXG4gIHZhciB0aW1lb3V0ID0gTWF0aC5yb3VuZChyYW5kb20gKiBvcHRzLm1pblRpbWVvdXQgKiBNYXRoLnBvdyhvcHRzLmZhY3RvciwgYXR0ZW1wdCkpO1xuICB0aW1lb3V0ID0gTWF0aC5taW4odGltZW91dCwgb3B0cy5tYXhUaW1lb3V0KTtcblxuICByZXR1cm4gdGltZW91dDtcbn07XG5cbmV4cG9ydHMud3JhcCA9IGZ1bmN0aW9uKG9iaiwgb3B0aW9ucywgbWV0aG9kcykge1xuICBpZiAob3B0aW9ucyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgbWV0aG9kcyA9IG9wdGlvbnM7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cblxuICBpZiAoIW1ldGhvZHMpIHtcbiAgICBtZXRob2RzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBtZXRob2RzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbWV0aG9kICAgPSBtZXRob2RzW2ldO1xuICAgIHZhciBvcmlnaW5hbCA9IG9ialttZXRob2RdO1xuXG4gICAgb2JqW21ldGhvZF0gPSBmdW5jdGlvbiByZXRyeVdyYXBwZXIob3JpZ2luYWwpIHtcbiAgICAgIHZhciBvcCAgICAgICA9IGV4cG9ydHMub3BlcmF0aW9uKG9wdGlvbnMpO1xuICAgICAgdmFyIGFyZ3MgICAgID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG5cbiAgICAgIGFyZ3MucHVzaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgaWYgKG9wLnJldHJ5KGVycikpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGFyZ3VtZW50c1swXSA9IG9wLm1haW5FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9KTtcblxuICAgICAgb3AuYXR0ZW1wdChmdW5jdGlvbigpIHtcbiAgICAgICAgb3JpZ2luYWwuYXBwbHkob2JqLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH0uYmluZChvYmosIG9yaWdpbmFsKTtcbiAgICBvYmpbbWV0aG9kXS5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxufTtcbiIsImZ1bmN0aW9uIFJldHJ5T3BlcmF0aW9uKHRpbWVvdXRzLCBvcHRpb25zKSB7XG4gIC8vIENvbXBhdGliaWxpdHkgZm9yIHRoZSBvbGQgKHRpbWVvdXRzLCByZXRyeUZvcmV2ZXIpIHNpZ25hdHVyZVxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMgPSB7IGZvcmV2ZXI6IG9wdGlvbnMgfTtcbiAgfVxuXG4gIHRoaXMuX29yaWdpbmFsVGltZW91dHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRpbWVvdXRzKSk7XG4gIHRoaXMuX3RpbWVvdXRzID0gdGltZW91dHM7XG4gIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLl9tYXhSZXRyeVRpbWUgPSBvcHRpb25zICYmIG9wdGlvbnMubWF4UmV0cnlUaW1lIHx8IEluZmluaXR5O1xuICB0aGlzLl9mbiA9IG51bGw7XG4gIHRoaXMuX2Vycm9ycyA9IFtdO1xuICB0aGlzLl9hdHRlbXB0cyA9IDE7XG4gIHRoaXMuX29wZXJhdGlvblRpbWVvdXQgPSBudWxsO1xuICB0aGlzLl9vcGVyYXRpb25UaW1lb3V0Q2IgPSBudWxsO1xuICB0aGlzLl90aW1lb3V0ID0gbnVsbDtcbiAgdGhpcy5fb3BlcmF0aW9uU3RhcnQgPSBudWxsO1xuXG4gIGlmICh0aGlzLl9vcHRpb25zLmZvcmV2ZXIpIHtcbiAgICB0aGlzLl9jYWNoZWRUaW1lb3V0cyA9IHRoaXMuX3RpbWVvdXRzLnNsaWNlKDApO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFJldHJ5T3BlcmF0aW9uO1xuXG5SZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fYXR0ZW1wdHMgPSAxO1xuICB0aGlzLl90aW1lb3V0cyA9IHRoaXMuX29yaWdpbmFsVGltZW91dHM7XG59XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLl90aW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICB9XG5cbiAgdGhpcy5fdGltZW91dHMgICAgICAgPSBbXTtcbiAgdGhpcy5fY2FjaGVkVGltZW91dHMgPSBudWxsO1xufTtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLnJldHJ5ID0gZnVuY3Rpb24oZXJyKSB7XG4gIGlmICh0aGlzLl90aW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICB9XG5cbiAgaWYgKCFlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIGlmIChlcnIgJiYgY3VycmVudFRpbWUgLSB0aGlzLl9vcGVyYXRpb25TdGFydCA+PSB0aGlzLl9tYXhSZXRyeVRpbWUpIHtcbiAgICB0aGlzLl9lcnJvcnMudW5zaGlmdChuZXcgRXJyb3IoJ1JldHJ5T3BlcmF0aW9uIHRpbWVvdXQgb2NjdXJyZWQnKSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdGhpcy5fZXJyb3JzLnB1c2goZXJyKTtcblxuICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXRzLnNoaWZ0KCk7XG4gIGlmICh0aW1lb3V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodGhpcy5fY2FjaGVkVGltZW91dHMpIHtcbiAgICAgIC8vIHJldHJ5IGZvcmV2ZXIsIG9ubHkga2VlcCBsYXN0IGVycm9yXG4gICAgICB0aGlzLl9lcnJvcnMuc3BsaWNlKHRoaXMuX2Vycm9ycy5sZW5ndGggLSAxLCB0aGlzLl9lcnJvcnMubGVuZ3RoKTtcbiAgICAgIHRoaXMuX3RpbWVvdXRzID0gdGhpcy5fY2FjaGVkVGltZW91dHMuc2xpY2UoMCk7XG4gICAgICB0aW1lb3V0ID0gdGhpcy5fdGltZW91dHMuc2hpZnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBzZWxmLl9hdHRlbXB0cysrO1xuXG4gICAgaWYgKHNlbGYuX29wZXJhdGlvblRpbWVvdXRDYikge1xuICAgICAgc2VsZi5fdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYuX29wZXJhdGlvblRpbWVvdXRDYihzZWxmLl9hdHRlbXB0cyk7XG4gICAgICB9LCBzZWxmLl9vcGVyYXRpb25UaW1lb3V0KTtcblxuICAgICAgaWYgKHNlbGYuX29wdGlvbnMudW5yZWYpIHtcbiAgICAgICAgICBzZWxmLl90aW1lb3V0LnVucmVmKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VsZi5fZm4oc2VsZi5fYXR0ZW1wdHMpO1xuICB9LCB0aW1lb3V0KTtcblxuICBpZiAodGhpcy5fb3B0aW9ucy51bnJlZikge1xuICAgICAgdGltZXIudW5yZWYoKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLmF0dGVtcHQgPSBmdW5jdGlvbihmbiwgdGltZW91dE9wcykge1xuICB0aGlzLl9mbiA9IGZuO1xuXG4gIGlmICh0aW1lb3V0T3BzKSB7XG4gICAgaWYgKHRpbWVvdXRPcHMudGltZW91dCkge1xuICAgICAgdGhpcy5fb3BlcmF0aW9uVGltZW91dCA9IHRpbWVvdXRPcHMudGltZW91dDtcbiAgICB9XG4gICAgaWYgKHRpbWVvdXRPcHMuY2IpIHtcbiAgICAgIHRoaXMuX29wZXJhdGlvblRpbWVvdXRDYiA9IHRpbWVvdXRPcHMuY2I7XG4gICAgfVxuICB9XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAodGhpcy5fb3BlcmF0aW9uVGltZW91dENiKSB7XG4gICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLl9vcGVyYXRpb25UaW1lb3V0Q2IoKTtcbiAgICB9LCBzZWxmLl9vcGVyYXRpb25UaW1lb3V0KTtcbiAgfVxuXG4gIHRoaXMuX29wZXJhdGlvblN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgdGhpcy5fZm4odGhpcy5fYXR0ZW1wdHMpO1xufTtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLnRyeSA9IGZ1bmN0aW9uKGZuKSB7XG4gIGNvbnNvbGUubG9nKCdVc2luZyBSZXRyeU9wZXJhdGlvbi50cnkoKSBpcyBkZXByZWNhdGVkJyk7XG4gIHRoaXMuYXR0ZW1wdChmbik7XG59O1xuXG5SZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbihmbikge1xuICBjb25zb2xlLmxvZygnVXNpbmcgUmV0cnlPcGVyYXRpb24uc3RhcnQoKSBpcyBkZXByZWNhdGVkJyk7XG4gIHRoaXMuYXR0ZW1wdChmbik7XG59O1xuXG5SZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBSZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUudHJ5O1xuXG5SZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUuZXJyb3JzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9lcnJvcnM7XG59O1xuXG5SZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUuYXR0ZW1wdHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX2F0dGVtcHRzO1xufTtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLm1haW5FcnJvciA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5fZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGNvdW50cyA9IHt9O1xuICB2YXIgbWFpbkVycm9yID0gbnVsbDtcbiAgdmFyIG1haW5FcnJvckNvdW50ID0gMDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2Vycm9ycy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBlcnJvciA9IHRoaXMuX2Vycm9yc1tpXTtcbiAgICB2YXIgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgdmFyIGNvdW50ID0gKGNvdW50c1ttZXNzYWdlXSB8fCAwKSArIDE7XG5cbiAgICBjb3VudHNbbWVzc2FnZV0gPSBjb3VudDtcblxuICAgIGlmIChjb3VudCA+PSBtYWluRXJyb3JDb3VudCkge1xuICAgICAgbWFpbkVycm9yID0gZXJyb3I7XG4gICAgICBtYWluRXJyb3JDb3VudCA9IGNvdW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYWluRXJyb3I7XG59O1xuIiwidmFyIGdyYW1tYXIgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgdjogW3tcbiAgICBuYW1lOiAndmVyc2lvbicsXG4gICAgcmVnOiAvXihcXGQqKSQvXG4gIH1dLFxuICBvOiBbe1xuICAgIC8vIG89LSAyMDUxOCAwIElOIElQNCAyMDMuMC4xMTMuMVxuICAgIC8vIE5COiBzZXNzaW9uSWQgd2lsbCBiZSBhIFN0cmluZyBpbiBtb3N0IGNhc2VzIGJlY2F1c2UgaXQgaXMgaHVnZVxuICAgIG5hbWU6ICdvcmlnaW4nLFxuICAgIHJlZzogL14oXFxTKikgKFxcZCopIChcXGQqKSAoXFxTKikgSVAoXFxkKSAoXFxTKikvLFxuICAgIG5hbWVzOiBbJ3VzZXJuYW1lJywgJ3Nlc3Npb25JZCcsICdzZXNzaW9uVmVyc2lvbicsICduZXRUeXBlJywgJ2lwVmVyJywgJ2FkZHJlc3MnXSxcbiAgICBmb3JtYXQ6ICclcyAlcyAlZCAlcyBJUCVkICVzJ1xuICB9XSxcbiAgLy8gZGVmYXVsdCBwYXJzaW5nIG9mIHRoZXNlIG9ubHkgKHRob3VnaCBzb21lIG9mIHRoZXNlIGZlZWwgb3V0ZGF0ZWQpXG4gIHM6IFt7IG5hbWU6ICduYW1lJyB9XSxcbiAgaTogW3sgbmFtZTogJ2Rlc2NyaXB0aW9uJyB9XSxcbiAgdTogW3sgbmFtZTogJ3VyaScgfV0sXG4gIGU6IFt7IG5hbWU6ICdlbWFpbCcgfV0sXG4gIHA6IFt7IG5hbWU6ICdwaG9uZScgfV0sXG4gIHo6IFt7IG5hbWU6ICd0aW1lem9uZXMnIH1dLCAvLyBUT0RPOiB0aGlzIG9uZSBjYW4gYWN0dWFsbHkgYmUgcGFyc2VkIHByb3Blcmx5Li4uXG4gIHI6IFt7IG5hbWU6ICdyZXBlYXRzJyB9XSwgICAvLyBUT0RPOiB0aGlzIG9uZSBjYW4gYWxzbyBiZSBwYXJzZWQgcHJvcGVybHlcbiAgLy8gazogW3t9XSwgLy8gb3V0ZGF0ZWQgdGhpbmcgaWdub3JlZFxuICB0OiBbe1xuICAgIC8vIHQ9MCAwXG4gICAgbmFtZTogJ3RpbWluZycsXG4gICAgcmVnOiAvXihcXGQqKSAoXFxkKikvLFxuICAgIG5hbWVzOiBbJ3N0YXJ0JywgJ3N0b3AnXSxcbiAgICBmb3JtYXQ6ICclZCAlZCdcbiAgfV0sXG4gIGM6IFt7XG4gICAgLy8gYz1JTiBJUDQgMTAuNDcuMTk3LjI2XG4gICAgbmFtZTogJ2Nvbm5lY3Rpb24nLFxuICAgIHJlZzogL15JTiBJUChcXGQpIChcXFMqKS8sXG4gICAgbmFtZXM6IFsndmVyc2lvbicsICdpcCddLFxuICAgIGZvcm1hdDogJ0lOIElQJWQgJXMnXG4gIH1dLFxuICBiOiBbe1xuICAgIC8vIGI9QVM6NDAwMFxuICAgIHB1c2g6ICdiYW5kd2lkdGgnLFxuICAgIHJlZzogL14oVElBU3xBU3xDVHxSUnxSUyk6KFxcZCopLyxcbiAgICBuYW1lczogWyd0eXBlJywgJ2xpbWl0J10sXG4gICAgZm9ybWF0OiAnJXM6JXMnXG4gIH1dLFxuICBtOiBbe1xuICAgIC8vIG09dmlkZW8gNTE3NDQgUlRQL0FWUCAxMjYgOTcgOTggMzQgMzFcbiAgICAvLyBOQjogc3BlY2lhbCAtIHB1c2hlcyB0byBzZXNzaW9uXG4gICAgLy8gVE9ETzogcnRwL2ZtdHAgc2hvdWxkIGJlIGZpbHRlcmVkIGJ5IHRoZSBwYXlsb2FkcyBmb3VuZCBoZXJlP1xuICAgIHJlZzogL14oXFx3KikgKFxcZCopIChbXFx3L10qKSg/OiAoLiopKT8vLFxuICAgIG5hbWVzOiBbJ3R5cGUnLCAncG9ydCcsICdwcm90b2NvbCcsICdwYXlsb2FkcyddLFxuICAgIGZvcm1hdDogJyVzICVkICVzICVzJ1xuICB9XSxcbiAgYTogW1xuICAgIHtcbiAgICAgIC8vIGE9cnRwbWFwOjExMCBvcHVzLzQ4MDAwLzJcbiAgICAgIHB1c2g6ICdydHAnLFxuICAgICAgcmVnOiAvXnJ0cG1hcDooXFxkKikgKFtcXHdcXC0uXSopKD86XFxzKlxcLyhcXGQqKSg/OlxccypcXC8oXFxTKikpPyk/LyxcbiAgICAgIG5hbWVzOiBbJ3BheWxvYWQnLCAnY29kZWMnLCAncmF0ZScsICdlbmNvZGluZyddLFxuICAgICAgZm9ybWF0OiBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gKG8uZW5jb2RpbmcpXG4gICAgICAgICAgPyAncnRwbWFwOiVkICVzLyVzLyVzJ1xuICAgICAgICAgIDogby5yYXRlXG4gICAgICAgICAgICA/ICdydHBtYXA6JWQgJXMvJXMnXG4gICAgICAgICAgICA6ICdydHBtYXA6JWQgJXMnO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1mbXRwOjEwOCBwcm9maWxlLWxldmVsLWlkPTI0O29iamVjdD0yMztiaXRyYXRlPTY0MDAwXG4gICAgICAvLyBhPWZtdHA6MTExIG1pbnB0aW1lPTEwOyB1c2VpbmJhbmRmZWM9MVxuICAgICAgcHVzaDogJ2ZtdHAnLFxuICAgICAgcmVnOiAvXmZtdHA6KFxcZCopIChbXFxTfCBdKikvLFxuICAgICAgbmFtZXM6IFsncGF5bG9hZCcsICdjb25maWcnXSxcbiAgICAgIGZvcm1hdDogJ2ZtdHA6JWQgJXMnXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPWNvbnRyb2w6c3RyZWFtaWQ9MFxuICAgICAgbmFtZTogJ2NvbnRyb2wnLFxuICAgICAgcmVnOiAvXmNvbnRyb2w6KC4qKS8sXG4gICAgICBmb3JtYXQ6ICdjb250cm9sOiVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1ydGNwOjY1MTc5IElOIElQNCAxOTMuODQuNzcuMTk0XG4gICAgICBuYW1lOiAncnRjcCcsXG4gICAgICByZWc6IC9ecnRjcDooXFxkKikoPzogKFxcUyopIElQKFxcZCkgKFxcUyopKT8vLFxuICAgICAgbmFtZXM6IFsncG9ydCcsICduZXRUeXBlJywgJ2lwVmVyJywgJ2FkZHJlc3MnXSxcbiAgICAgIGZvcm1hdDogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuIChvLmFkZHJlc3MgIT0gbnVsbClcbiAgICAgICAgICA/ICdydGNwOiVkICVzIElQJWQgJXMnXG4gICAgICAgICAgOiAncnRjcDolZCc7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPXJ0Y3AtZmI6OTggdHJyLWludCAxMDBcbiAgICAgIHB1c2g6ICdydGNwRmJUcnJJbnQnLFxuICAgICAgcmVnOiAvXnJ0Y3AtZmI6KFxcKnxcXGQqKSB0cnItaW50IChcXGQqKS8sXG4gICAgICBuYW1lczogWydwYXlsb2FkJywgJ3ZhbHVlJ10sXG4gICAgICBmb3JtYXQ6ICdydGNwLWZiOiVkIHRyci1pbnQgJWQnXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPXJ0Y3AtZmI6OTggbmFjayBycHNpXG4gICAgICBwdXNoOiAncnRjcEZiJyxcbiAgICAgIHJlZzogL15ydGNwLWZiOihcXCp8XFxkKikgKFtcXHctX10qKSg/OiAoW1xcdy1fXSopKT8vLFxuICAgICAgbmFtZXM6IFsncGF5bG9hZCcsICd0eXBlJywgJ3N1YnR5cGUnXSxcbiAgICAgIGZvcm1hdDogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuIChvLnN1YnR5cGUgIT0gbnVsbClcbiAgICAgICAgICA/ICdydGNwLWZiOiVzICVzICVzJ1xuICAgICAgICAgIDogJ3J0Y3AtZmI6JXMgJXMnO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1leHRtYXA6MiB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDp0b2Zmc2V0XG4gICAgICAvLyBhPWV4dG1hcDoxL3JlY3Zvbmx5IFVSSS1ncHMtc3RyaW5nXG4gICAgICAvLyBhPWV4dG1hcDozIHVybjppZXRmOnBhcmFtczpydHAtaGRyZXh0OmVuY3J5cHQgdXJuOmlldGY6cGFyYW1zOnJ0cC1oZHJleHQ6c21wdGUtdGMgMjVANjAwLzI0XG4gICAgICBwdXNoOiAnZXh0JyxcbiAgICAgIHJlZzogL15leHRtYXA6KFxcZCspKD86XFwvKFxcdyspKT8oPzogKHVybjppZXRmOnBhcmFtczpydHAtaGRyZXh0OmVuY3J5cHQpKT8gKFxcUyopKD86IChcXFMqKSk/LyxcbiAgICAgIG5hbWVzOiBbJ3ZhbHVlJywgJ2RpcmVjdGlvbicsICdlbmNyeXB0LXVyaScsICd1cmknLCAnY29uZmlnJ10sXG4gICAgICBmb3JtYXQ6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgJ2V4dG1hcDolZCcgK1xuICAgICAgICAgIChvLmRpcmVjdGlvbiA/ICcvJXMnIDogJyV2JykgK1xuICAgICAgICAgIChvWydlbmNyeXB0LXVyaSddID8gJyAlcycgOiAnJXYnKSArXG4gICAgICAgICAgJyAlcycgK1xuICAgICAgICAgIChvLmNvbmZpZyA/ICcgJXMnIDogJycpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPWV4dG1hcC1hbGxvdy1taXhlZFxuICAgICAgbmFtZTogJ2V4dG1hcEFsbG93TWl4ZWQnLFxuICAgICAgcmVnOiAvXihleHRtYXAtYWxsb3ctbWl4ZWQpL1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1jcnlwdG86MSBBRVNfQ01fMTI4X0hNQUNfU0hBMV84MCBpbmxpbmU6UFMxdVFDVmVlQ0ZDYW5WbWNqa3BQeXdqTldoY1lEMG1YWHR4YVZCUnwyXjIwfDE6MzJcbiAgICAgIHB1c2g6ICdjcnlwdG8nLFxuICAgICAgcmVnOiAvXmNyeXB0bzooXFxkKikgKFtcXHdfXSopIChcXFMqKSg/OiAoXFxTKikpPy8sXG4gICAgICBuYW1lczogWydpZCcsICdzdWl0ZScsICdjb25maWcnLCAnc2Vzc2lvbkNvbmZpZyddLFxuICAgICAgZm9ybWF0OiBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gKG8uc2Vzc2lvbkNvbmZpZyAhPSBudWxsKVxuICAgICAgICAgID8gJ2NyeXB0bzolZCAlcyAlcyAlcydcbiAgICAgICAgICA6ICdjcnlwdG86JWQgJXMgJXMnO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1zZXR1cDphY3RwYXNzXG4gICAgICBuYW1lOiAnc2V0dXAnLFxuICAgICAgcmVnOiAvXnNldHVwOihcXHcqKS8sXG4gICAgICBmb3JtYXQ6ICdzZXR1cDolcydcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9Y29ubmVjdGlvbjpuZXdcbiAgICAgIG5hbWU6ICdjb25uZWN0aW9uVHlwZScsXG4gICAgICByZWc6IC9eY29ubmVjdGlvbjoobmV3fGV4aXN0aW5nKS8sXG4gICAgICBmb3JtYXQ6ICdjb25uZWN0aW9uOiVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1taWQ6MVxuICAgICAgbmFtZTogJ21pZCcsXG4gICAgICByZWc6IC9ebWlkOihbXlxcc10qKS8sXG4gICAgICBmb3JtYXQ6ICdtaWQ6JXMnXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPW1zaWQ6MGM4YjA2NGQtZDgwNy00M2I0LWI0MzQtZjkyYTg4OWQ4NTg3IDk4MTc4Njg1LWQ0MDktNDZlMC04ZTE2LTdlZjBkYjBkYjY0YVxuICAgICAgbmFtZTogJ21zaWQnLFxuICAgICAgcmVnOiAvXm1zaWQ6KC4qKS8sXG4gICAgICBmb3JtYXQ6ICdtc2lkOiVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1wdGltZToyMFxuICAgICAgbmFtZTogJ3B0aW1lJyxcbiAgICAgIHJlZzogL15wdGltZTooXFxkKig/OlxcLlxcZCopKikvLFxuICAgICAgZm9ybWF0OiAncHRpbWU6JWQnXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPW1heHB0aW1lOjYwXG4gICAgICBuYW1lOiAnbWF4cHRpbWUnLFxuICAgICAgcmVnOiAvXm1heHB0aW1lOihcXGQqKD86XFwuXFxkKikqKS8sXG4gICAgICBmb3JtYXQ6ICdtYXhwdGltZTolZCdcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9c2VuZHJlY3ZcbiAgICAgIG5hbWU6ICdkaXJlY3Rpb24nLFxuICAgICAgcmVnOiAvXihzZW5kcmVjdnxyZWN2b25seXxzZW5kb25seXxpbmFjdGl2ZSkvXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPWljZS1saXRlXG4gICAgICBuYW1lOiAnaWNlbGl0ZScsXG4gICAgICByZWc6IC9eKGljZS1saXRlKS9cbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9aWNlLXVmcmFnOkY3Z0lcbiAgICAgIG5hbWU6ICdpY2VVZnJhZycsXG4gICAgICByZWc6IC9eaWNlLXVmcmFnOihcXFMqKS8sXG4gICAgICBmb3JtYXQ6ICdpY2UtdWZyYWc6JXMnXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPWljZS1wd2Q6eDljbWwvWXppY2hWMitYbGhpTXU4Z1xuICAgICAgbmFtZTogJ2ljZVB3ZCcsXG4gICAgICByZWc6IC9eaWNlLXB3ZDooXFxTKikvLFxuICAgICAgZm9ybWF0OiAnaWNlLXB3ZDolcydcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9ZmluZ2VycHJpbnQ6U0hBLTEgMDA6MTE6MjI6MzM6NDQ6NTU6NjY6Nzc6ODg6OTk6QUE6QkI6Q0M6REQ6RUU6RkY6MDA6MTE6MjI6MzNcbiAgICAgIG5hbWU6ICdmaW5nZXJwcmludCcsXG4gICAgICByZWc6IC9eZmluZ2VycHJpbnQ6KFxcUyopIChcXFMqKS8sXG4gICAgICBuYW1lczogWyd0eXBlJywgJ2hhc2gnXSxcbiAgICAgIGZvcm1hdDogJ2ZpbmdlcnByaW50OiVzICVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1jYW5kaWRhdGU6MCAxIFVEUCAyMTEzNjY3MzI3IDIwMy4wLjExMy4xIDU0NDAwIHR5cCBob3N0XG4gICAgICAvLyBhPWNhbmRpZGF0ZToxMTYyODc1MDgxIDEgdWRwIDIxMTM5MzcxNTEgMTkyLjE2OC4zNC43NSA2MDAxNyB0eXAgaG9zdCBnZW5lcmF0aW9uIDAgbmV0d29yay1pZCAzIG5ldHdvcmstY29zdCAxMFxuICAgICAgLy8gYT1jYW5kaWRhdGU6MzI4OTkxMjk1NyAyIHVkcCAxODQ1NTAxNjk1IDE5My44NC43Ny4xOTQgNjAwMTcgdHlwIHNyZmx4IHJhZGRyIDE5Mi4xNjguMzQuNzUgcnBvcnQgNjAwMTcgZ2VuZXJhdGlvbiAwIG5ldHdvcmstaWQgMyBuZXR3b3JrLWNvc3QgMTBcbiAgICAgIC8vIGE9Y2FuZGlkYXRlOjIyOTgxNTYyMCAxIHRjcCAxNTE4MjgwNDQ3IDE5Mi4xNjguMTUwLjE5IDYwMDE3IHR5cCBob3N0IHRjcHR5cGUgYWN0aXZlIGdlbmVyYXRpb24gMCBuZXR3b3JrLWlkIDMgbmV0d29yay1jb3N0IDEwXG4gICAgICAvLyBhPWNhbmRpZGF0ZTozMjg5OTEyOTU3IDIgdGNwIDE4NDU1MDE2OTUgMTkzLjg0Ljc3LjE5NCA2MDAxNyB0eXAgc3JmbHggcmFkZHIgMTkyLjE2OC4zNC43NSBycG9ydCA2MDAxNyB0Y3B0eXBlIHBhc3NpdmUgZ2VuZXJhdGlvbiAwIG5ldHdvcmstaWQgMyBuZXR3b3JrLWNvc3QgMTBcbiAgICAgIHB1c2g6J2NhbmRpZGF0ZXMnLFxuICAgICAgcmVnOiAvXmNhbmRpZGF0ZTooXFxTKikgKFxcZCopIChcXFMqKSAoXFxkKikgKFxcUyopIChcXGQqKSB0eXAgKFxcUyopKD86IHJhZGRyIChcXFMqKSBycG9ydCAoXFxkKikpPyg/OiB0Y3B0eXBlIChcXFMqKSk/KD86IGdlbmVyYXRpb24gKFxcZCopKT8oPzogbmV0d29yay1pZCAoXFxkKikpPyg/OiBuZXR3b3JrLWNvc3QgKFxcZCopKT8vLFxuICAgICAgbmFtZXM6IFsnZm91bmRhdGlvbicsICdjb21wb25lbnQnLCAndHJhbnNwb3J0JywgJ3ByaW9yaXR5JywgJ2lwJywgJ3BvcnQnLCAndHlwZScsICdyYWRkcicsICdycG9ydCcsICd0Y3B0eXBlJywgJ2dlbmVyYXRpb24nLCAnbmV0d29yay1pZCcsICduZXR3b3JrLWNvc3QnXSxcbiAgICAgIGZvcm1hdDogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgdmFyIHN0ciA9ICdjYW5kaWRhdGU6JXMgJWQgJXMgJWQgJXMgJWQgdHlwICVzJztcblxuICAgICAgICBzdHIgKz0gKG8ucmFkZHIgIT0gbnVsbCkgPyAnIHJhZGRyICVzIHJwb3J0ICVkJyA6ICcldiV2JztcblxuICAgICAgICAvLyBOQjogY2FuZGlkYXRlIGhhcyB0aHJlZSBvcHRpb25hbCBjaHVua3MsIHNvICV2b2lkIG1pZGRsZXMgb25lIGlmIGl0J3MgbWlzc2luZ1xuICAgICAgICBzdHIgKz0gKG8udGNwdHlwZSAhPSBudWxsKSA/ICcgdGNwdHlwZSAlcycgOiAnJXYnO1xuXG4gICAgICAgIGlmIChvLmdlbmVyYXRpb24gIT0gbnVsbCkge1xuICAgICAgICAgIHN0ciArPSAnIGdlbmVyYXRpb24gJWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RyICs9IChvWyduZXR3b3JrLWlkJ10gIT0gbnVsbCkgPyAnIG5ldHdvcmstaWQgJWQnIDogJyV2JztcbiAgICAgICAgc3RyICs9IChvWyduZXR3b3JrLWNvc3QnXSAhPSBudWxsKSA/ICcgbmV0d29yay1jb3N0ICVkJyA6ICcldic7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPWVuZC1vZi1jYW5kaWRhdGVzIChrZWVwIGFmdGVyIHRoZSBjYW5kaWRhdGVzIGxpbmUgZm9yIHJlYWRhYmlsaXR5KVxuICAgICAgbmFtZTogJ2VuZE9mQ2FuZGlkYXRlcycsXG4gICAgICByZWc6IC9eKGVuZC1vZi1jYW5kaWRhdGVzKS9cbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9cmVtb3RlLWNhbmRpZGF0ZXM6MSAyMDMuMC4xMTMuMSA1NDQwMCAyIDIwMy4wLjExMy4xIDU0NDAxIC4uLlxuICAgICAgbmFtZTogJ3JlbW90ZUNhbmRpZGF0ZXMnLFxuICAgICAgcmVnOiAvXnJlbW90ZS1jYW5kaWRhdGVzOiguKikvLFxuICAgICAgZm9ybWF0OiAncmVtb3RlLWNhbmRpZGF0ZXM6JXMnXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPWljZS1vcHRpb25zOmdvb2dsZS1pY2VcbiAgICAgIG5hbWU6ICdpY2VPcHRpb25zJyxcbiAgICAgIHJlZzogL15pY2Utb3B0aW9uczooXFxTKikvLFxuICAgICAgZm9ybWF0OiAnaWNlLW9wdGlvbnM6JXMnXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPXNzcmM6MjU2NjEwNzU2OSBjbmFtZTp0OVlVOE0xVXhURjhZMUExXG4gICAgICBwdXNoOiAnc3NyY3MnLFxuICAgICAgcmVnOiAvXnNzcmM6KFxcZCopIChbXFx3Xy1dKikoPzo6KC4qKSk/LyxcbiAgICAgIG5hbWVzOiBbJ2lkJywgJ2F0dHJpYnV0ZScsICd2YWx1ZSddLFxuICAgICAgZm9ybWF0OiBmdW5jdGlvbiAobykge1xuICAgICAgICB2YXIgc3RyID0gJ3NzcmM6JWQnO1xuICAgICAgICBpZiAoby5hdHRyaWJ1dGUgIT0gbnVsbCkge1xuICAgICAgICAgIHN0ciArPSAnICVzJztcbiAgICAgICAgICBpZiAoby52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzdHIgKz0gJzolcyc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPXNzcmMtZ3JvdXA6RkVDIDEgMlxuICAgICAgLy8gYT1zc3JjLWdyb3VwOkZFQy1GUiAzMDA0MzY0MTk1IDEwODA3NzIyNDFcbiAgICAgIHB1c2g6ICdzc3JjR3JvdXBzJyxcbiAgICAgIC8vIHRva2VuLWNoYXIgPSAleDIxIC8gJXgyMy0yNyAvICV4MkEtMkIgLyAleDJELTJFIC8gJXgzMC0zOSAvICV4NDEtNUEgLyAleDVFLTdFXG4gICAgICByZWc6IC9ec3NyYy1ncm91cDooW1xceDIxXFx4MjNcXHgyNFxceDI1XFx4MjZcXHgyN1xceDJBXFx4MkJcXHgyRFxceDJFXFx3XSopICguKikvLFxuICAgICAgbmFtZXM6IFsnc2VtYW50aWNzJywgJ3NzcmNzJ10sXG4gICAgICBmb3JtYXQ6ICdzc3JjLWdyb3VwOiVzICVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1tc2lkLXNlbWFudGljOiBXTVMgSnZsYW01WDNTWDFPUDZwbjIweldvZ3ZhS0p6NUhqZjlPbmxWXG4gICAgICBuYW1lOiAnbXNpZFNlbWFudGljJyxcbiAgICAgIHJlZzogL15tc2lkLXNlbWFudGljOlxccz8oXFx3KikgKFxcUyopLyxcbiAgICAgIG5hbWVzOiBbJ3NlbWFudGljJywgJ3Rva2VuJ10sXG4gICAgICBmb3JtYXQ6ICdtc2lkLXNlbWFudGljOiAlcyAlcycgLy8gc3BhY2UgYWZ0ZXIgJzonIGlzIG5vdCBhY2NpZGVudGFsXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPWdyb3VwOkJVTkRMRSBhdWRpbyB2aWRlb1xuICAgICAgcHVzaDogJ2dyb3VwcycsXG4gICAgICByZWc6IC9eZ3JvdXA6KFxcdyopICguKikvLFxuICAgICAgbmFtZXM6IFsndHlwZScsICdtaWRzJ10sXG4gICAgICBmb3JtYXQ6ICdncm91cDolcyAlcydcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9cnRjcC1tdXhcbiAgICAgIG5hbWU6ICdydGNwTXV4JyxcbiAgICAgIHJlZzogL14ocnRjcC1tdXgpL1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1ydGNwLXJzaXplXG4gICAgICBuYW1lOiAncnRjcFJzaXplJyxcbiAgICAgIHJlZzogL14ocnRjcC1yc2l6ZSkvXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPXNjdHBtYXA6NTAwMCB3ZWJydGMtZGF0YWNoYW5uZWwgMTAyNFxuICAgICAgbmFtZTogJ3NjdHBtYXAnLFxuICAgICAgcmVnOiAvXnNjdHBtYXA6KFtcXHdfL10qKSAoXFxTKikoPzogKFxcUyopKT8vLFxuICAgICAgbmFtZXM6IFsnc2N0cG1hcE51bWJlcicsICdhcHAnLCAnbWF4TWVzc2FnZVNpemUnXSxcbiAgICAgIGZvcm1hdDogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuIChvLm1heE1lc3NhZ2VTaXplICE9IG51bGwpXG4gICAgICAgICAgPyAnc2N0cG1hcDolcyAlcyAlcydcbiAgICAgICAgICA6ICdzY3RwbWFwOiVzICVzJztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9eC1nb29nbGUtZmxhZzpjb25mZXJlbmNlXG4gICAgICBuYW1lOiAneEdvb2dsZUZsYWcnLFxuICAgICAgcmVnOiAvXngtZ29vZ2xlLWZsYWc6KFteXFxzXSopLyxcbiAgICAgIGZvcm1hdDogJ3gtZ29vZ2xlLWZsYWc6JXMnXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPXJpZDoxIHNlbmQgbWF4LXdpZHRoPTEyODA7bWF4LWhlaWdodD03MjA7bWF4LWZwcz0zMDtkZXBlbmQ9MFxuICAgICAgcHVzaDogJ3JpZHMnLFxuICAgICAgcmVnOiAvXnJpZDooW1xcZFxcd10rKSAoXFx3KykoPzogKFtcXFN8IF0qKSk/LyxcbiAgICAgIG5hbWVzOiBbJ2lkJywgJ2RpcmVjdGlvbicsICdwYXJhbXMnXSxcbiAgICAgIGZvcm1hdDogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuIChvLnBhcmFtcykgPyAncmlkOiVzICVzICVzJyA6ICdyaWQ6JXMgJXMnO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1pbWFnZWF0dHI6OTcgc2VuZCBbeD04MDAseT02NDAsc2FyPTEuMSxxPTAuNl0gW3g9NDgwLHk9MzIwXSByZWN2IFt4PTMzMCx5PTI1MF1cbiAgICAgIC8vIGE9aW1hZ2VhdHRyOiogc2VuZCBbeD04MDAseT02NDBdIHJlY3YgKlxuICAgICAgLy8gYT1pbWFnZWF0dHI6MTAwIHJlY3YgW3g9MzIwLHk9MjQwXVxuICAgICAgcHVzaDogJ2ltYWdlYXR0cnMnLFxuICAgICAgcmVnOiBuZXcgUmVnRXhwKFxuICAgICAgICAvLyBhPWltYWdlYXR0cjo5N1xuICAgICAgICAnXmltYWdlYXR0cjooXFxcXGQrfFxcXFwqKScgK1xuICAgICAgICAvLyBzZW5kIFt4PTgwMCx5PTY0MCxzYXI9MS4xLHE9MC42XSBbeD00ODAseT0zMjBdXG4gICAgICAgICdbXFxcXHNcXFxcdF0rKHNlbmR8cmVjdilbXFxcXHNcXFxcdF0rKFxcXFwqfFxcXFxbXFxcXFMrXFxcXF0oPzpbXFxcXHNcXFxcdF0rXFxcXFtcXFxcUytcXFxcXSkqKScgK1xuICAgICAgICAvLyByZWN2IFt4PTMzMCx5PTI1MF1cbiAgICAgICAgJyg/OltcXFxcc1xcXFx0XSsocmVjdnxzZW5kKVtcXFxcc1xcXFx0XSsoXFxcXCp8XFxcXFtcXFxcUytcXFxcXSg/OltcXFxcc1xcXFx0XStcXFxcW1xcXFxTK1xcXFxdKSopKT8nXG4gICAgICApLFxuICAgICAgbmFtZXM6IFsncHQnLCAnZGlyMScsICdhdHRyczEnLCAnZGlyMicsICdhdHRyczInXSxcbiAgICAgIGZvcm1hdDogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuICdpbWFnZWF0dHI6JXMgJXMgJXMnICsgKG8uZGlyMiA/ICcgJXMgJXMnIDogJycpO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1zaW11bGNhc3Q6c2VuZCAxLDIsMzt+NCx+NSByZWN2IDY7fjcsfjhcbiAgICAgIC8vIGE9c2ltdWxjYXN0OnJlY3YgMTs0LDUgc2VuZCA2OzdcbiAgICAgIG5hbWU6ICdzaW11bGNhc3QnLFxuICAgICAgcmVnOiBuZXcgUmVnRXhwKFxuICAgICAgICAvLyBhPXNpbXVsY2FzdDpcbiAgICAgICAgJ15zaW11bGNhc3Q6JyArXG4gICAgICAgIC8vIHNlbmQgMSwyLDM7fjQsfjVcbiAgICAgICAgJyhzZW5kfHJlY3YpIChbYS16QS1aMC05XFxcXC1ffjssXSspJyArXG4gICAgICAgIC8vIHNwYWNlICsgcmVjdiA2O343LH44XG4gICAgICAgICcoPzpcXFxccz8oc2VuZHxyZWN2KSAoW2EtekEtWjAtOVxcXFwtX347LF0rKSk/JyArXG4gICAgICAgIC8vIGVuZFxuICAgICAgICAnJCdcbiAgICAgICksXG4gICAgICBuYW1lczogWydkaXIxJywgJ2xpc3QxJywgJ2RpcjInLCAnbGlzdDInXSxcbiAgICAgIGZvcm1hdDogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuICdzaW11bGNhc3Q6JXMgJXMnICsgKG8uZGlyMiA/ICcgJXMgJXMnIDogJycpO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgLy8gb2xkIHNpbXVsY2FzdCBkcmFmdCAwMyAoaW1wbGVtZW50ZWQgYnkgRmlyZWZveClcbiAgICAgIC8vICAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL2RyYWZ0LWlldGYtbW11c2ljLXNkcC1zaW11bGNhc3QtMDNcbiAgICAgIC8vIGE9c2ltdWxjYXN0OiByZWN2IHB0PTk3Ozk4IHNlbmQgcHQ9OTdcbiAgICAgIC8vIGE9c2ltdWxjYXN0OiBzZW5kIHJpZD01OzY7NyBwYXVzZWQ9Niw3XG4gICAgICBuYW1lOiAnc2ltdWxjYXN0XzAzJyxcbiAgICAgIHJlZzogL15zaW11bGNhc3Q6W1xcc1xcdF0rKFtcXFMrXFxzXFx0XSspJC8sXG4gICAgICBuYW1lczogWyd2YWx1ZSddLFxuICAgICAgZm9ybWF0OiAnc2ltdWxjYXN0OiAlcydcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9ZnJhbWVyYXRlOjI1XG4gICAgICAvLyBhPWZyYW1lcmF0ZToyOS45N1xuICAgICAgbmFtZTogJ2ZyYW1lcmF0ZScsXG4gICAgICByZWc6IC9eZnJhbWVyYXRlOihcXGQrKD86JHxcXC5cXGQrKSkvLFxuICAgICAgZm9ybWF0OiAnZnJhbWVyYXRlOiVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gUkZDNDU3MFxuICAgICAgLy8gYT1zb3VyY2UtZmlsdGVyOiBpbmNsIElOIElQNCAyMzkuNS4yLjMxIDEwLjEuMTUuNVxuICAgICAgbmFtZTogJ3NvdXJjZUZpbHRlcicsXG4gICAgICByZWc6IC9ec291cmNlLWZpbHRlcjogKihleGNsfGluY2wpIChcXFMqKSAoSVA0fElQNnxcXCopIChcXFMqKSAoLiopLyxcbiAgICAgIG5hbWVzOiBbJ2ZpbHRlck1vZGUnLCAnbmV0VHlwZScsICdhZGRyZXNzVHlwZXMnLCAnZGVzdEFkZHJlc3MnLCAnc3JjTGlzdCddLFxuICAgICAgZm9ybWF0OiAnc291cmNlLWZpbHRlcjogJXMgJXMgJXMgJXMgJXMnXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPWJ1bmRsZS1vbmx5XG4gICAgICBuYW1lOiAnYnVuZGxlT25seScsXG4gICAgICByZWc6IC9eKGJ1bmRsZS1vbmx5KS9cbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9bGFiZWw6MVxuICAgICAgbmFtZTogJ2xhYmVsJyxcbiAgICAgIHJlZzogL15sYWJlbDooLispLyxcbiAgICAgIGZvcm1hdDogJ2xhYmVsOiVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gUkZDIHZlcnNpb24gMjYgZm9yIFNDVFAgb3ZlciBEVExTXG4gICAgICAvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvZHJhZnQtaWV0Zi1tbXVzaWMtc2N0cC1zZHAtMjYjc2VjdGlvbi01XG4gICAgICBuYW1lOiAnc2N0cFBvcnQnLFxuICAgICAgcmVnOiAvXnNjdHAtcG9ydDooXFxkKykkLyxcbiAgICAgIGZvcm1hdDogJ3NjdHAtcG9ydDolcydcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIFJGQyB2ZXJzaW9uIDI2IGZvciBTQ1RQIG92ZXIgRFRMU1xuICAgICAgLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL2RyYWZ0LWlldGYtbW11c2ljLXNjdHAtc2RwLTI2I3NlY3Rpb24tNlxuICAgICAgbmFtZTogJ21heE1lc3NhZ2VTaXplJyxcbiAgICAgIHJlZzogL15tYXgtbWVzc2FnZS1zaXplOihcXGQrKSQvLFxuICAgICAgZm9ybWF0OiAnbWF4LW1lc3NhZ2Utc2l6ZTolcydcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIFJGQzcyNzNcbiAgICAgIC8vIGE9dHMtcmVmY2xrOnB0cD1JRUVFMTU4OC0yMDA4OjM5LUE3LTk0LUZGLUZFLTA3LUNCLUQwOjM3XG4gICAgICBwdXNoOid0c1JlZkNsb2NrcycsXG4gICAgICByZWc6IC9edHMtcmVmY2xrOihbXlxccz1dKikoPzo9KFxcUyopKT8vLFxuICAgICAgbmFtZXM6IFsnY2xrc3JjJywgJ2Nsa3NyY0V4dCddLFxuICAgICAgZm9ybWF0OiBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gJ3RzLXJlZmNsazolcycgKyAoby5jbGtzcmNFeHQgIT0gbnVsbCA/ICc9JXMnIDogJycpO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgLy8gUkZDNzI3M1xuICAgICAgLy8gYT1tZWRpYWNsazpkaXJlY3Q9OTYzMjE0NDI0XG4gICAgICBuYW1lOidtZWRpYUNsaycsXG4gICAgICByZWc6IC9ebWVkaWFjbGs6KD86aWQ9KFxcUyopKT8gKihbXlxccz1dKikoPzo9KFxcUyopKT8oPzogKnJhdGU9KFxcZCspXFwvKFxcZCspKT8vLFxuICAgICAgbmFtZXM6IFsnaWQnLCAnbWVkaWFDbG9ja05hbWUnLCAnbWVkaWFDbG9ja1ZhbHVlJywgJ3JhdGVOdW1lcmF0b3InLCAncmF0ZURlbm9taW5hdG9yJ10sXG4gICAgICBmb3JtYXQ6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHZhciBzdHIgPSAnbWVkaWFjbGs6JztcbiAgICAgICAgc3RyICs9IChvLmlkICE9IG51bGwgPyAnaWQ9JXMgJXMnIDogJyV2JXMnKTtcbiAgICAgICAgc3RyICs9IChvLm1lZGlhQ2xvY2tWYWx1ZSAhPSBudWxsID8gJz0lcycgOiAnJyk7XG4gICAgICAgIHN0ciArPSAoby5yYXRlTnVtZXJhdG9yICE9IG51bGwgPyAnIHJhdGU9JXMnIDogJycpO1xuICAgICAgICBzdHIgKz0gKG8ucmF0ZURlbm9taW5hdG9yICE9IG51bGwgPyAnLyVzJyA6ICcnKTtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9a2V5d2RzOmtleXdvcmRzXG4gICAgICBuYW1lOiAna2V5d29yZHMnLFxuICAgICAgcmVnOiAvXmtleXdkczooLispJC8sXG4gICAgICBmb3JtYXQ6ICdrZXl3ZHM6JXMnXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPWNvbnRlbnQ6bWFpblxuICAgICAgbmFtZTogJ2NvbnRlbnQnLFxuICAgICAgcmVnOiAvXmNvbnRlbnQ6KC4rKS8sXG4gICAgICBmb3JtYXQ6ICdjb250ZW50OiVzJ1xuICAgIH0sXG4gICAgLy8gQkZDUCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNDU4M1xuICAgIHtcbiAgICAgIC8vIGE9Zmxvb3JjdHJsOmMtc1xuICAgICAgbmFtZTogJ2JmY3BGbG9vckN0cmwnLFxuICAgICAgcmVnOiAvXmZsb29yY3RybDooYy1vbmx5fHMtb25seXxjLXMpLyxcbiAgICAgIGZvcm1hdDogJ2Zsb29yY3RybDolcydcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9Y29uZmlkOjFcbiAgICAgIG5hbWU6ICdiZmNwQ29uZklkJyxcbiAgICAgIHJlZzogL15jb25maWQ6KFxcZCspLyxcbiAgICAgIGZvcm1hdDogJ2NvbmZpZDolcydcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9dXNlcmlkOjFcbiAgICAgIG5hbWU6ICdiZmNwVXNlcklkJyxcbiAgICAgIHJlZzogL151c2VyaWQ6KFxcZCspLyxcbiAgICAgIGZvcm1hdDogJ3VzZXJpZDolcydcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9Zmxvb3JpZDoxXG4gICAgICBuYW1lOiAnYmZjcEZsb29ySWQnLFxuICAgICAgcmVnOiAvXmZsb29yaWQ6KC4rKSAoPzptLXN0cmVhbXxtc3RybSk6KC4rKS8sXG4gICAgICBuYW1lczogWydpZCcsICdtU3RyZWFtJ10sXG4gICAgICBmb3JtYXQ6ICdmbG9vcmlkOiVzIG1zdHJtOiVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYW55IGE9IHRoYXQgd2UgZG9uJ3QgdW5kZXJzdGFuZCBpcyBrZXB0IHZlcmJhdGltIG9uIG1lZGlhLmludmFsaWRcbiAgICAgIHB1c2g6ICdpbnZhbGlkJyxcbiAgICAgIG5hbWVzOiBbJ3ZhbHVlJ11cbiAgICB9XG4gIF1cbn07XG5cbi8vIHNldCBzZW5zaWJsZSBkZWZhdWx0cyB0byBhdm9pZCBwb2xsdXRpbmcgdGhlIGdyYW1tYXIgd2l0aCBib3JpbmcgZGV0YWlsc1xuT2JqZWN0LmtleXMoZ3JhbW1hcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIHZhciBvYmpzID0gZ3JhbW1hcltrZXldO1xuICBvYmpzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgIGlmICghb2JqLnJlZykge1xuICAgICAgb2JqLnJlZyA9IC8oLiopLztcbiAgICB9XG4gICAgaWYgKCFvYmouZm9ybWF0KSB7XG4gICAgICBvYmouZm9ybWF0ID0gJyVzJztcbiAgICB9XG4gIH0pO1xufSk7XG4iLCJ2YXIgcGFyc2VyID0gcmVxdWlyZSgnLi9wYXJzZXInKTtcbnZhciB3cml0ZXIgPSByZXF1aXJlKCcuL3dyaXRlcicpO1xuXG5leHBvcnRzLndyaXRlID0gd3JpdGVyO1xuZXhwb3J0cy5wYXJzZSA9IHBhcnNlci5wYXJzZTtcbmV4cG9ydHMucGFyc2VQYXJhbXMgPSBwYXJzZXIucGFyc2VQYXJhbXM7XG5leHBvcnRzLnBhcnNlRm10cENvbmZpZyA9IHBhcnNlci5wYXJzZUZtdHBDb25maWc7IC8vIEFsaWFzIG9mIHBhcnNlUGFyYW1zKCkuXG5leHBvcnRzLnBhcnNlUGF5bG9hZHMgPSBwYXJzZXIucGFyc2VQYXlsb2FkcztcbmV4cG9ydHMucGFyc2VSZW1vdGVDYW5kaWRhdGVzID0gcGFyc2VyLnBhcnNlUmVtb3RlQ2FuZGlkYXRlcztcbmV4cG9ydHMucGFyc2VJbWFnZUF0dHJpYnV0ZXMgPSBwYXJzZXIucGFyc2VJbWFnZUF0dHJpYnV0ZXM7XG5leHBvcnRzLnBhcnNlU2ltdWxjYXN0U3RyZWFtTGlzdCA9IHBhcnNlci5wYXJzZVNpbXVsY2FzdFN0cmVhbUxpc3Q7XG4iLCJ2YXIgdG9JbnRJZkludCA9IGZ1bmN0aW9uICh2KSB7XG4gIHJldHVybiBTdHJpbmcoTnVtYmVyKHYpKSA9PT0gdiA/IE51bWJlcih2KSA6IHY7XG59O1xuXG52YXIgYXR0YWNoUHJvcGVydGllcyA9IGZ1bmN0aW9uIChtYXRjaCwgbG9jYXRpb24sIG5hbWVzLCByYXdOYW1lKSB7XG4gIGlmIChyYXdOYW1lICYmICFuYW1lcykge1xuICAgIGxvY2F0aW9uW3Jhd05hbWVdID0gdG9JbnRJZkludChtYXRjaFsxXSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKG1hdGNoW2krMV0gIT0gbnVsbCkge1xuICAgICAgICBsb2NhdGlvbltuYW1lc1tpXV0gPSB0b0ludElmSW50KG1hdGNoW2krMV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIHBhcnNlUmVnID0gZnVuY3Rpb24gKG9iaiwgbG9jYXRpb24sIGNvbnRlbnQpIHtcbiAgdmFyIG5lZWRzQmxhbmsgPSBvYmoubmFtZSAmJiBvYmoubmFtZXM7XG4gIGlmIChvYmoucHVzaCAmJiAhbG9jYXRpb25bb2JqLnB1c2hdKSB7XG4gICAgbG9jYXRpb25bb2JqLnB1c2hdID0gW107XG4gIH1cbiAgZWxzZSBpZiAobmVlZHNCbGFuayAmJiAhbG9jYXRpb25bb2JqLm5hbWVdKSB7XG4gICAgbG9jYXRpb25bb2JqLm5hbWVdID0ge307XG4gIH1cbiAgdmFyIGtleUxvY2F0aW9uID0gb2JqLnB1c2ggP1xuICAgIHt9IDogIC8vIGJsYW5rIG9iamVjdCB0aGF0IHdpbGwgYmUgcHVzaGVkXG4gICAgbmVlZHNCbGFuayA/IGxvY2F0aW9uW29iai5uYW1lXSA6IGxvY2F0aW9uOyAvLyBvdGhlcndpc2UsIG5hbWVkIGxvY2F0aW9uIG9yIHJvb3RcblxuICBhdHRhY2hQcm9wZXJ0aWVzKGNvbnRlbnQubWF0Y2gob2JqLnJlZyksIGtleUxvY2F0aW9uLCBvYmoubmFtZXMsIG9iai5uYW1lKTtcblxuICBpZiAob2JqLnB1c2gpIHtcbiAgICBsb2NhdGlvbltvYmoucHVzaF0ucHVzaChrZXlMb2NhdGlvbik7XG4gIH1cbn07XG5cbnZhciBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyk7XG52YXIgdmFsaWRMaW5lID0gUmVnRXhwLnByb3RvdHlwZS50ZXN0LmJpbmQoL14oW2Etel0pPSguKikvKTtcblxuZXhwb3J0cy5wYXJzZSA9IGZ1bmN0aW9uIChzZHApIHtcbiAgdmFyIHNlc3Npb24gPSB7fVxuICAgICwgbWVkaWEgPSBbXVxuICAgICwgbG9jYXRpb24gPSBzZXNzaW9uOyAvLyBwb2ludHMgYXQgd2hlcmUgcHJvcGVydGllcyBnbyB1bmRlciAob25lIG9mIHRoZSBhYm92ZSlcblxuICAvLyBwYXJzZSBsaW5lcyB3ZSB1bmRlcnN0YW5kXG4gIHNkcC5zcGxpdCgvKFxcclxcbnxcXHJ8XFxuKS8pLmZpbHRlcih2YWxpZExpbmUpLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICB2YXIgdHlwZSA9IGxbMF07XG4gICAgdmFyIGNvbnRlbnQgPSBsLnNsaWNlKDIpO1xuICAgIGlmICh0eXBlID09PSAnbScpIHtcbiAgICAgIG1lZGlhLnB1c2goe3J0cDogW10sIGZtdHA6IFtdfSk7XG4gICAgICBsb2NhdGlvbiA9IG1lZGlhW21lZGlhLmxlbmd0aC0xXTsgLy8gcG9pbnQgYXQgbGF0ZXN0IG1lZGlhIGxpbmVcbiAgICB9XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IChncmFtbWFyW3R5cGVdIHx8IFtdKS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgdmFyIG9iaiA9IGdyYW1tYXJbdHlwZV1bal07XG4gICAgICBpZiAob2JqLnJlZy50ZXN0KGNvbnRlbnQpKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVJlZyhvYmosIGxvY2F0aW9uLCBjb250ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHNlc3Npb24ubWVkaWEgPSBtZWRpYTsgLy8gbGluayBpdCB1cFxuICByZXR1cm4gc2Vzc2lvbjtcbn07XG5cbnZhciBwYXJhbVJlZHVjZXIgPSBmdW5jdGlvbiAoYWNjLCBleHByKSB7XG4gIHZhciBzID0gZXhwci5zcGxpdCgvPSguKykvLCAyKTtcbiAgaWYgKHMubGVuZ3RoID09PSAyKSB7XG4gICAgYWNjW3NbMF1dID0gdG9JbnRJZkludChzWzFdKTtcbiAgfSBlbHNlIGlmIChzLmxlbmd0aCA9PT0gMSAmJiBleHByLmxlbmd0aCA+IDEpIHtcbiAgICBhY2Nbc1swXV0gPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGFjYztcbn07XG5cbmV4cG9ydHMucGFyc2VQYXJhbXMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIuc3BsaXQoLztcXHM/LykucmVkdWNlKHBhcmFtUmVkdWNlciwge30pO1xufTtcblxuLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgLSBhbGlhcyB3aWxsIGJlIHJlbW92ZWQgaW4gMy4wLjBcbmV4cG9ydHMucGFyc2VGbXRwQ29uZmlnID0gZXhwb3J0cy5wYXJzZVBhcmFtcztcblxuZXhwb3J0cy5wYXJzZVBheWxvYWRzID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnRvU3RyaW5nKCkuc3BsaXQoJyAnKS5tYXAoTnVtYmVyKTtcbn07XG5cbmV4cG9ydHMucGFyc2VSZW1vdGVDYW5kaWRhdGVzID0gZnVuY3Rpb24gKHN0cikge1xuICB2YXIgY2FuZGlkYXRlcyA9IFtdO1xuICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoJyAnKS5tYXAodG9JbnRJZkludCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICBjYW5kaWRhdGVzLnB1c2goe1xuICAgICAgY29tcG9uZW50OiBwYXJ0c1tpXSxcbiAgICAgIGlwOiBwYXJ0c1tpICsgMV0sXG4gICAgICBwb3J0OiBwYXJ0c1tpICsgMl1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gY2FuZGlkYXRlcztcbn07XG5cbmV4cG9ydHMucGFyc2VJbWFnZUF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5zdWJzdHJpbmcoMSwgaXRlbS5sZW5ndGgtMSkuc3BsaXQoJywnKS5yZWR1Y2UocGFyYW1SZWR1Y2VyLCB7fSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5wYXJzZVNpbXVsY2FzdFN0cmVhbUxpc3QgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIuc3BsaXQoJzsnKS5tYXAoZnVuY3Rpb24gKHN0cmVhbSkge1xuICAgIHJldHVybiBzdHJlYW0uc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgdmFyIHNjaWQsIHBhdXNlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoZm9ybWF0WzBdICE9PSAnficpIHtcbiAgICAgICAgc2NpZCA9IHRvSW50SWZJbnQoZm9ybWF0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjaWQgPSB0b0ludElmSW50KGZvcm1hdC5zdWJzdHJpbmcoMSwgZm9ybWF0Lmxlbmd0aCkpO1xuICAgICAgICBwYXVzZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzY2lkOiBzY2lkLFxuICAgICAgICBwYXVzZWQ6IHBhdXNlZFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSk7XG59O1xuIiwidmFyIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKTtcblxuLy8gY3VzdG9taXplZCB1dGlsLmZvcm1hdCAtIGRpc2NhcmRzIGV4Y2VzcyBhcmd1bWVudHMgYW5kIGNhbiB2b2lkIG1pZGRsZSBvbmVzXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2R2JV0vZztcbnZhciBmb3JtYXQgPSBmdW5jdGlvbiAoZm9ybWF0U3RyKSB7XG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgcmV0dXJuIGZvcm1hdFN0ci5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24gKHgpIHtcbiAgICBpZiAoaSA+PSBsZW4pIHtcbiAgICAgIHJldHVybiB4OyAvLyBtaXNzaW5nIGFyZ3VtZW50XG4gICAgfVxuICAgIHZhciBhcmcgPSBhcmdzW2ldO1xuICAgIGkgKz0gMTtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICBjYXNlICclJSc6XG4gICAgICByZXR1cm4gJyUnO1xuICAgIGNhc2UgJyVzJzpcbiAgICAgIHJldHVybiBTdHJpbmcoYXJnKTtcbiAgICBjYXNlICclZCc6XG4gICAgICByZXR1cm4gTnVtYmVyKGFyZyk7XG4gICAgY2FzZSAnJXYnOlxuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfSk7XG4gIC8vIE5COiB3ZSBkaXNjYXJkIGV4Y2VzcyBhcmd1bWVudHMgLSB0aGV5IGFyZSB0eXBpY2FsbHkgdW5kZWZpbmVkIGZyb20gbWFrZUxpbmVcbn07XG5cbnZhciBtYWtlTGluZSA9IGZ1bmN0aW9uICh0eXBlLCBvYmosIGxvY2F0aW9uKSB7XG4gIHZhciBzdHIgPSBvYmouZm9ybWF0IGluc3RhbmNlb2YgRnVuY3Rpb24gP1xuICAgIChvYmouZm9ybWF0KG9iai5wdXNoID8gbG9jYXRpb24gOiBsb2NhdGlvbltvYmoubmFtZV0pKSA6XG4gICAgb2JqLmZvcm1hdDtcblxuICB2YXIgYXJncyA9IFt0eXBlICsgJz0nICsgc3RyXTtcbiAgaWYgKG9iai5uYW1lcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLm5hbWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgbiA9IG9iai5uYW1lc1tpXTtcbiAgICAgIGlmIChvYmoubmFtZSkge1xuICAgICAgICBhcmdzLnB1c2gobG9jYXRpb25bb2JqLm5hbWVdW25dKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgeyAvLyBmb3IgbUxpbmUgYW5kIHB1c2ggYXR0cmlidXRlc1xuICAgICAgICBhcmdzLnB1c2gobG9jYXRpb25bb2JqLm5hbWVzW2ldXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGFyZ3MucHVzaChsb2NhdGlvbltvYmoubmFtZV0pO1xuICB9XG4gIHJldHVybiBmb3JtYXQuYXBwbHkobnVsbCwgYXJncyk7XG59O1xuXG4vLyBSRkMgc3BlY2lmaWVkIG9yZGVyXG4vLyBUT0RPOiBleHRlbmQgdGhpcyB3aXRoIGFsbCB0aGUgcmVzdFxudmFyIGRlZmF1bHRPdXRlck9yZGVyID0gW1xuICAndicsICdvJywgJ3MnLCAnaScsXG4gICd1JywgJ2UnLCAncCcsICdjJyxcbiAgJ2InLCAndCcsICdyJywgJ3onLCAnYSdcbl07XG52YXIgZGVmYXVsdElubmVyT3JkZXIgPSBbJ2knLCAnYycsICdiJywgJ2EnXTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZXNzaW9uLCBvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAvLyBlbnN1cmUgY2VydGFpbiBwcm9wZXJ0aWVzIGV4aXN0XG4gIGlmIChzZXNzaW9uLnZlcnNpb24gPT0gbnVsbCkge1xuICAgIHNlc3Npb24udmVyc2lvbiA9IDA7IC8vICd2PTAnIG11c3QgYmUgdGhlcmUgKG9ubHkgZGVmaW5lZCB2ZXJzaW9uIGF0bSlcbiAgfVxuICBpZiAoc2Vzc2lvbi5uYW1lID09IG51bGwpIHtcbiAgICBzZXNzaW9uLm5hbWUgPSAnICc7IC8vICdzPSAnIG11c3QgYmUgdGhlcmUgaWYgbm8gbWVhbmluZ2Z1bCBuYW1lIHNldFxuICB9XG4gIHNlc3Npb24ubWVkaWEuZm9yRWFjaChmdW5jdGlvbiAobUxpbmUpIHtcbiAgICBpZiAobUxpbmUucGF5bG9hZHMgPT0gbnVsbCkge1xuICAgICAgbUxpbmUucGF5bG9hZHMgPSAnJztcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBvdXRlck9yZGVyID0gb3B0cy5vdXRlck9yZGVyIHx8IGRlZmF1bHRPdXRlck9yZGVyO1xuICB2YXIgaW5uZXJPcmRlciA9IG9wdHMuaW5uZXJPcmRlciB8fCBkZWZhdWx0SW5uZXJPcmRlcjtcbiAgdmFyIHNkcCA9IFtdO1xuXG4gIC8vIGxvb3AgdGhyb3VnaCBvdXRlck9yZGVyIGZvciBtYXRjaGluZyBwcm9wZXJ0aWVzIG9uIHNlc3Npb25cbiAgb3V0ZXJPcmRlci5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgZ3JhbW1hclt0eXBlXS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIGlmIChvYmoubmFtZSBpbiBzZXNzaW9uICYmIHNlc3Npb25bb2JqLm5hbWVdICE9IG51bGwpIHtcbiAgICAgICAgc2RwLnB1c2gobWFrZUxpbmUodHlwZSwgb2JqLCBzZXNzaW9uKSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvYmoucHVzaCBpbiBzZXNzaW9uICYmIHNlc3Npb25bb2JqLnB1c2hdICE9IG51bGwpIHtcbiAgICAgICAgc2Vzc2lvbltvYmoucHVzaF0uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBzZHAucHVzaChtYWtlTGluZSh0eXBlLCBvYmosIGVsKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICAvLyB0aGVuIGZvciBlYWNoIG1lZGlhIGxpbmUsIGZvbGxvdyB0aGUgaW5uZXJPcmRlclxuICBzZXNzaW9uLm1lZGlhLmZvckVhY2goZnVuY3Rpb24gKG1MaW5lKSB7XG4gICAgc2RwLnB1c2gobWFrZUxpbmUoJ20nLCBncmFtbWFyLm1bMF0sIG1MaW5lKSk7XG5cbiAgICBpbm5lck9yZGVyLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIGdyYW1tYXJbdHlwZV0uZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGlmIChvYmoubmFtZSBpbiBtTGluZSAmJiBtTGluZVtvYmoubmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgIHNkcC5wdXNoKG1ha2VMaW5lKHR5cGUsIG9iaiwgbUxpbmUpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvYmoucHVzaCBpbiBtTGluZSAmJiBtTGluZVtvYmoucHVzaF0gIT0gbnVsbCkge1xuICAgICAgICAgIG1MaW5lW29iai5wdXNoXS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgc2RwLnB1c2gobWFrZUxpbmUodHlwZSwgb2JqLCBlbCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNkcC5qb2luKCdcXHJcXG4nKSArICdcXHJcXG4nO1xufTtcbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldF8pIHtcbiAgdmFyIG9mZnNldCA9IG9mZnNldF8gfHwgMDsgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG5cbiAgcmV0dXJuIChieXRlVG9IZXhbYnVmW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFtidWZbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2J1ZltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYnVmW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFtidWZbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2J1ZltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYnVmW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFtidWZbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2J1ZltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYnVmW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFtidWZbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFtidWZbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFtidWZbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFtidWZbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFtidWZbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFtidWZbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYnl0ZXNUb1V1aWQ7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB2MSB9IGZyb20gJy4vdjEuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2MyB9IGZyb20gJy4vdjMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2NCB9IGZyb20gJy4vdjQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2NSB9IGZyb20gJy4vdjUuanMnOyIsIi8qXG4gKiBCcm93c2VyLWNvbXBhdGlibGUgSmF2YVNjcmlwdCBNRDVcbiAqXG4gKiBNb2RpZmljYXRpb24gb2YgSmF2YVNjcmlwdCBNRDVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTUQ1XG4gKlxuICogQ29weXJpZ2h0IDIwMTEsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIEJhc2VkIG9uXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFJTQSBEYXRhIFNlY3VyaXR5LCBJbmMuIE1ENSBNZXNzYWdlXG4gKiBEaWdlc3QgQWxnb3JpdGhtLCBhcyBkZWZpbmVkIGluIFJGQyAxMzIxLlxuICogVmVyc2lvbiAyLjIgQ29weXJpZ2h0IChDKSBQYXVsIEpvaG5zdG9uIDE5OTkgLSAyMDA5XG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBtb3JlIGluZm8uXG4gKi9cbmZ1bmN0aW9uIG1kNShieXRlcykge1xuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobXNnLmxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXNbaV0gPSBtc2cuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWQ1VG9IZXhFbmNvZGVkQXJyYXkod29yZHNUb01kNShieXRlc1RvV29yZHMoYnl0ZXMpLCBieXRlcy5sZW5ndGggKiA4KSk7XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzIHRvIGFuIGFycmF5IG9mIGJ5dGVzXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVUb0hleEVuY29kZWRBcnJheShpbnB1dCkge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIHZhciBsZW5ndGgzMiA9IGlucHV0Lmxlbmd0aCAqIDMyO1xuICB2YXIgaGV4VGFiID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoMzI7IGkgKz0gOCkge1xuICAgIHZhciB4ID0gaW5wdXRbaSA+PiA1XSA+Pj4gaSAlIDMyICYgMHhmZjtcbiAgICB2YXIgaGV4ID0gcGFyc2VJbnQoaGV4VGFiLmNoYXJBdCh4ID4+PiA0ICYgMHgwZikgKyBoZXhUYWIuY2hhckF0KHggJiAweDBmKSwgMTYpO1xuICAgIG91dHB1dC5wdXNoKGhleCk7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgb3V0cHV0IGxlbmd0aCB3aXRoIHBhZGRpbmcgYW5kIGJpdCBsZW5ndGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE91dHB1dExlbmd0aChpbnB1dExlbmd0aDgpIHtcbiAgcmV0dXJuIChpbnB1dExlbmd0aDggKyA2NCA+Pj4gOSA8PCA0KSArIDE0ICsgMTtcbn1cbi8qXG4gKiBDYWxjdWxhdGUgdGhlIE1ENSBvZiBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzLCBhbmQgYSBiaXQgbGVuZ3RoLlxuICovXG5cblxuZnVuY3Rpb24gd29yZHNUb01kNSh4LCBsZW4pIHtcbiAgLyogYXBwZW5kIHBhZGRpbmcgKi9cbiAgeFtsZW4gPj4gNV0gfD0gMHg4MCA8PCBsZW4gJSAzMjtcbiAgeFtnZXRPdXRwdXRMZW5ndGgobGVuKSAtIDFdID0gbGVuO1xuICB2YXIgYSA9IDE3MzI1ODQxOTM7XG4gIHZhciBiID0gLTI3MTczMzg3OTtcbiAgdmFyIGMgPSAtMTczMjU4NDE5NDtcbiAgdmFyIGQgPSAyNzE3MzM4Nzg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xuICAgIHZhciBvbGRhID0gYTtcbiAgICB2YXIgb2xkYiA9IGI7XG4gICAgdmFyIG9sZGMgPSBjO1xuICAgIHZhciBvbGRkID0gZDtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgYSA9IHNhZmVBZGQoYSwgb2xkYSk7XG4gICAgYiA9IHNhZmVBZGQoYiwgb2xkYik7XG4gICAgYyA9IHNhZmVBZGQoYywgb2xkYyk7XG4gICAgZCA9IHNhZmVBZGQoZCwgb2xkZCk7XG4gIH1cblxuICByZXR1cm4gW2EsIGIsIGMsIGRdO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgYnl0ZXMgdG8gYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3Jkc1xuICogQ2hhcmFjdGVycyA+MjU1IGhhdmUgdGhlaXIgaGlnaC1ieXRlIHNpbGVudGx5IGlnbm9yZWQuXG4gKi9cblxuXG5mdW5jdGlvbiBieXRlc1RvV29yZHMoaW5wdXQpIHtcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgdmFyIG91dHB1dCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgobGVuZ3RoOCkpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoODsgaSArPSA4KSB7XG4gICAgb3V0cHV0W2kgPj4gNV0gfD0gKGlucHV0W2kgLyA4XSAmIDB4ZmYpIDw8IGkgJSAzMjtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKlxuICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICogdG8gd29yayBhcm91bmQgYnVncyBpbiBzb21lIEpTIGludGVycHJldGVycy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHNhZmVBZGQoeCwgeSkge1xuICB2YXIgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpO1xuICB2YXIgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5cblxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuXG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1kNTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbi8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsIi8vIEFkYXB0ZWQgZnJvbSBDaHJpcyBWZW5lc3MnIFNIQTEgY29kZSBhdFxuLy8gaHR0cDovL3d3dy5tb3ZhYmxlLXR5cGUuY28udWsvc2NyaXB0cy9zaGExLmh0bWxcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICBzd2l0Y2ggKHMpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4geCAmIHkgXiB+eCAmIHo7XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggJiB5IF4geCAmIHogXiB5ICYgejtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH1cbn1cblxuZnVuY3Rpb24gUk9UTCh4LCBuKSB7XG4gIHJldHVybiB4IDw8IG4gfCB4ID4+PiAzMiAtIG47XG59XG5cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgdmFyIEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gIHZhciBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlcy5wdXNoKG1zZy5jaGFyQ29kZUF0KGkpKTtcbiAgICB9XG4gIH1cblxuICBieXRlcy5wdXNoKDB4ODApO1xuICB2YXIgbCA9IGJ5dGVzLmxlbmd0aCAvIDQgKyAyO1xuICB2YXIgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICB2YXIgTSA9IG5ldyBBcnJheShOKTtcblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgTjsgKytfaSkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICBhcnJbal0gPSBieXRlc1tfaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYgfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAyXSA8PCA4IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuXG4gICAgTVtfaV0gPSBhcnI7XG4gIH1cblxuICBNW04gLSAxXVsxNF0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4IC8gTWF0aC5wb3coMiwgMzIpO1xuICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gIE1bTiAtIDFdWzE1XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggJiAweGZmZmZmZmZmO1xuXG4gIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IE47ICsrX2kyKSB7XG4gICAgdmFyIFcgPSBuZXcgVWludDMyQXJyYXkoODApO1xuXG4gICAgZm9yICh2YXIgdCA9IDA7IHQgPCAxNjsgKyt0KSB7XG4gICAgICBXW3RdID0gTVtfaTJdW3RdO1xuICAgIH1cblxuICAgIGZvciAodmFyIF90ID0gMTY7IF90IDwgODA7ICsrX3QpIHtcbiAgICAgIFdbX3RdID0gUk9UTChXW190IC0gM10gXiBXW190IC0gOF0gXiBXW190IC0gMTRdIF4gV1tfdCAtIDE2XSwgMSk7XG4gICAgfVxuXG4gICAgdmFyIGEgPSBIWzBdO1xuICAgIHZhciBiID0gSFsxXTtcbiAgICB2YXIgYyA9IEhbMl07XG4gICAgdmFyIGQgPSBIWzNdO1xuICAgIHZhciBlID0gSFs0XTtcblxuICAgIGZvciAodmFyIF90MiA9IDA7IF90MiA8IDgwOyArK190Mikge1xuICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKF90MiAvIDIwKTtcbiAgICAgIHZhciBUID0gUk9UTChhLCA1KSArIGYocywgYiwgYywgZCkgKyBlICsgS1tzXSArIFdbX3QyXSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGExOyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IGJ5dGVzVG9VdWlkIGZyb20gJy4vYnl0ZXNUb1V1aWQuanMnOyAvLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xuXG52YXIgX2Nsb2Nrc2VxOyAvLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcblxuXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQgZm9yIEFQSSBkZXRhaWxzXG5cbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBuZXcgQXJyYXkoMTYpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTsgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG5cbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW3NlZWRCeXRlc1swXSB8IDB4MDEsIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXTtcbiAgICB9XG5cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH0gLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG5cblxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogRGF0ZS5ub3coKTsgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTsgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuXG4gIHZhciBkdCA9IG1zZWNzIC0gX2xhc3RNU2VjcyArIChuc2VjcyAtIF9sYXN0TlNlY3MpIC8gMTAwMDA7IC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9IC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcblxuXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9IC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcblxuXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInV1aWQudjEoKTogQ2FuJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjXCIpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxOyAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcblxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDsgLy8gYHRpbWVfbG93YFxuXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7IC8vIGB0aW1lX21pZGBcblxuICB2YXIgdG1oID0gbXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmOyAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjsgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG5cbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwOyAvLyBgY2xvY2tfc2VxX2xvd2BcblxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7IC8vIGBub2RlYFxuXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCBieXRlc1RvVXVpZChiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjE7IiwiaW1wb3J0IHYzNSBmcm9tICcuL3YzNS5qcyc7XG5pbXBvcnQgbWQ1IGZyb20gJy4vbWQ1LmpzJztcbnZhciB2MyA9IHYzNSgndjMnLCAweDMwLCBtZDUpO1xuZXhwb3J0IGRlZmF1bHQgdjM7IiwiaW1wb3J0IGJ5dGVzVG9VdWlkIGZyb20gJy4vYnl0ZXNUb1V1aWQuanMnO1xuXG5mdW5jdGlvbiB1dWlkVG9CeXRlcyh1dWlkKSB7XG4gIC8vIE5vdGU6IFdlIGFzc3VtZSB3ZSdyZSBiZWluZyBwYXNzZWQgYSB2YWxpZCB1dWlkIHN0cmluZ1xuICB2YXIgYnl0ZXMgPSBbXTtcbiAgdXVpZC5yZXBsYWNlKC9bYS1mQS1GMC05XXsyfS9nLCBmdW5jdGlvbiAoaGV4KSB7XG4gICAgYnl0ZXMucHVzaChwYXJzZUludChoZXgsIDE2KSk7XG4gIH0pO1xuICByZXR1cm4gYnl0ZXM7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyKSB7XG4gIHN0ciA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKTsgLy8gVVRGOCBlc2NhcGVcblxuICB2YXIgYnl0ZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5leHBvcnQgdmFyIEROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IHZhciBVUkwgPSAnNmJhN2I4MTEtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lLCB2ZXJzaW9uLCBoYXNoZnVuYykge1xuICBmdW5jdGlvbiBnZW5lcmF0ZVVVSUQodmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBzdHJpbmdUb0J5dGVzKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWVzcGFjZSA9IHV1aWRUb0J5dGVzKG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCd2YWx1ZSBtdXN0IGJlIGFuIGFycmF5IG9mIGJ5dGVzJyk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG5hbWVzcGFjZSkgfHwgbmFtZXNwYWNlLmxlbmd0aCAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignbmFtZXNwYWNlIG11c3QgYmUgdXVpZCBzdHJpbmcgb3IgYW4gQXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMnKTtcbiAgICB9IC8vIFBlciA0LjNcblxuXG4gICAgdmFyIGJ5dGVzID0gaGFzaGZ1bmMobmFtZXNwYWNlLmNvbmNhdCh2YWx1ZSkpO1xuICAgIGJ5dGVzWzZdID0gYnl0ZXNbNl0gJiAweDBmIHwgdmVyc2lvbjtcbiAgICBieXRlc1s4XSA9IGJ5dGVzWzhdICYgMHgzZiB8IDB4ODA7XG5cbiAgICBpZiAoYnVmKSB7XG4gICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVzW2ldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYnVmO1xuICAgIH1cblxuICAgIHJldHVybiBieXRlc1RvVXVpZChieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgYnl0ZXNUb1V1aWQgZnJvbSAnLi9ieXRlc1RvVXVpZC5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBieXRlc1RvVXVpZChybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IHYzNSBmcm9tICcuL3YzNS5qcyc7XG5pbXBvcnQgc2hhMSBmcm9tICcuL3NoYTEuanMnO1xudmFyIHY1ID0gdjM1KCd2NScsIDB4NTAsIHNoYTEpO1xuZXhwb3J0IGRlZmF1bHQgdjU7IiwidmFyIF9nbG9iYWxUaGlzO1xudHJ5IHtcblx0X2dsb2JhbFRoaXMgPSByZXF1aXJlKCdlczUtZXh0L2dsb2JhbCcpO1xufSBjYXRjaCAoZXJyb3IpIHtcbn0gZmluYWxseSB7XG5cdGlmICghX2dsb2JhbFRoaXMgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgX2dsb2JhbFRoaXMgPSB3aW5kb3c7IH1cblx0aWYgKCFfZ2xvYmFsVGhpcykgeyB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBkZXRlcm1pbmUgZ2xvYmFsIHRoaXMnKTsgfVxufVxuXG52YXIgTmF0aXZlV2ViU29ja2V0ID0gX2dsb2JhbFRoaXMuV2ViU29ja2V0IHx8IF9nbG9iYWxUaGlzLk1veldlYlNvY2tldDtcbnZhciB3ZWJzb2NrZXRfdmVyc2lvbiA9IHJlcXVpcmUoJy4vdmVyc2lvbicpO1xuXG5cbi8qKlxuICogRXhwb3NlIGEgVzNDIFdlYlNvY2tldCBjbGFzcyB3aXRoIGp1c3Qgb25lIG9yIHR3byBhcmd1bWVudHMuXG4gKi9cbmZ1bmN0aW9uIFczQ1dlYlNvY2tldCh1cmksIHByb3RvY29scykge1xuXHR2YXIgbmF0aXZlX2luc3RhbmNlO1xuXG5cdGlmIChwcm90b2NvbHMpIHtcblx0XHRuYXRpdmVfaW5zdGFuY2UgPSBuZXcgTmF0aXZlV2ViU29ja2V0KHVyaSwgcHJvdG9jb2xzKTtcblx0fVxuXHRlbHNlIHtcblx0XHRuYXRpdmVfaW5zdGFuY2UgPSBuZXcgTmF0aXZlV2ViU29ja2V0KHVyaSk7XG5cdH1cblxuXHQvKipcblx0ICogJ25hdGl2ZV9pbnN0YW5jZScgaXMgYW4gaW5zdGFuY2Ugb2YgbmF0aXZlV2ViU29ja2V0ICh0aGUgYnJvd3NlcidzIFdlYlNvY2tldFxuXHQgKiBjbGFzcykuIFNpbmNlIGl0IGlzIGFuIE9iamVjdCBpdCB3aWxsIGJlIHJldHVybmVkIGFzIGl0IGlzIHdoZW4gY3JlYXRpbmcgYW5cblx0ICogaW5zdGFuY2Ugb2YgVzNDV2ViU29ja2V0IHZpYSAnbmV3IFczQ1dlYlNvY2tldCgpJy5cblx0ICpcblx0ICogRUNNQVNjcmlwdCA1OiBodHRwOi8vYmNsYXJ5LmNvbS8yMDA0LzExLzA3LyNhLTEzLjIuMlxuXHQgKi9cblx0cmV0dXJuIG5hdGl2ZV9pbnN0YW5jZTtcbn1cbmlmIChOYXRpdmVXZWJTb2NrZXQpIHtcblx0WydDT05ORUNUSU5HJywgJ09QRU4nLCAnQ0xPU0lORycsICdDTE9TRUQnXS5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoVzNDV2ViU29ja2V0LCBwcm9wLCB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gTmF0aXZlV2ViU29ja2V0W3Byb3BdOyB9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAndzNjd2Vic29ja2V0JyA6IE5hdGl2ZVdlYlNvY2tldCA/IFczQ1dlYlNvY2tldCA6IG51bGwsXG4gICAgJ3ZlcnNpb24nICAgICAgOiB3ZWJzb2NrZXRfdmVyc2lvblxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcbiIsIi8qIGdsb2JhbCBOQUYgKi9cblxuaW1wb3J0IHsgQ2xpZW50IGFzIENvbHlzZXVzQ2xpZW50IH0gZnJvbSBcImNvbHlzZXVzLmpzXCI7XG5pbXBvcnQgeyBDbGllbnQgYXMgSW9uQ2xpZW50LCBMb2NhbFN0cmVhbSB9IGZyb20gXCJpb24tc2RrLWpzXCI7XG5cbmNvbnN0IElvblN0YXRlID0ge1xuICAgIENMT1NFRDogMCxcbiAgICBPUEVOOiAxLFxuICAgIEpPSU5FRDogMixcbiAgICBGQUlMRUQ6IC0xXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbHlzZXVzSW9uQWRhcHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXBwID0gXCJkZWZhdWx0XCI7XG4gICAgICAgIHRoaXMucm9vbU5hbWUgPSBcImh1YnNcIjtcbiAgICAgICAgdGhpcy5yb29tID0gbnVsbDtcbiAgICAgICAgdGhpcy5yb29tRGF0YSA9IG51bGw7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSBudWxsO1xuXG4gICAgICAgIHRoaXMucGxheWVycyA9IHt9O1xuICAgICAgICB0aGlzLnN0cmVhbXMgPSBudWxsO1xuICAgICAgICB0aGlzLnBlbmRpbmdTdHJlYW1SZXF1ZXN0cyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy50aW1lT2Zmc2V0cyA9IFtdO1xuICAgICAgICB0aGlzLnNlcnZlclRpbWVSZXF1ZXN0cyA9IDA7XG4gICAgICAgIHRoaXMuYXZnVGltZU9mZnNldCA9IDA7XG5cbiAgICAgICAgdGhpcy5ibG9ja2VkQ2xpZW50cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5mcm96ZW5VcGRhdGVzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNyZWF0ZVJvb206IHRydWUsXG4gICAgICAgICAgICB1c2VJb246IHRydWUsXG4gICAgICAgICAgICBzdGFydExvY2FsU3RyZWFtOiBmYWxzZSxcbiAgICAgICAgICAgIG1lZGlhT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGF1ZGlvOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZpZGVvOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEF1ZGlvRGV2aWNlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVmlkZW9EZXZpY2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgcmVzb2x1dGlvbjogXCJ2Z2FcIixcbiAgICAgICAgICAgICAgICBiYW5kd2lkdGg6IDEwMjQsXG4gICAgICAgICAgICAgICAgY29kZWM6IFwiVlA5XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRTZXJ2ZXJVcmwoc2VydmVyVXJscykge1xuICAgICAgICB0aGlzLmNvbHlzZXVzVXJsID0gc2VydmVyVXJsc1swXTtcbiAgICAgICAgdGhpcy5pb25VcmwgPSBzZXJ2ZXJVcmxzWzFdO1xuICAgIH1cblxuICAgIHNldEFwcChhcHBOYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwID0gYXBwTmFtZTtcbiAgICB9XG5cbiAgICBzZXRSb29tKHJvb21JZCkge1xuICAgICAgICB0aGlzLnJvb21JZCA9IHJvb21JZDtcbiAgICB9XG5cbiAgICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHNldFdlYlJ0Y09wdGlvbnMob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMubWVkaWFPcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMubWVkaWFPcHRpb25zLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBzZXRTZXJ2ZXJDb25uZWN0TGlzdGVuZXJzKHN1Y2Nlc3NMaXN0ZW5lciwgZmFpbHVyZUxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdFN1Y2Nlc3MgPSBzdWNjZXNzTGlzdGVuZXI7XG4gICAgICAgIHRoaXMuY29ubmVjdEZhaWx1cmUgPSBmYWlsdXJlTGlzdGVuZXI7XG4gICAgfVxuXG4gICAgc2V0Um9vbU9jY3VwYW50TGlzdGVuZXIob2NjdXBhbnRMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLm9jY3VwYW50TGlzdGVuZXIgPSBvY2N1cGFudExpc3RlbmVyO1xuICAgIH1cblxuICAgIHNldERhdGFDaGFubmVsTGlzdGVuZXJzKG9wZW5MaXN0ZW5lciwgY2xvc2VkTGlzdGVuZXIsIG1lc3NhZ2VMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLm9wZW5MaXN0ZW5lciA9IG9wZW5MaXN0ZW5lcjtcbiAgICAgICAgdGhpcy5jbG9zZWRMaXN0ZW5lciA9IGNsb3NlZExpc3RlbmVyO1xuICAgICAgICB0aGlzLm1lc3NhZ2VMaXN0ZW5lciA9IG1lc3NhZ2VMaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBpZiAoIXRoaXMuY29seXNldXNVcmwgfHwgdGhpcy5jb2x5c2V1c1VybCA9PT0gXCIvXCIpIHtcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29seXNldXNVcmwgPSBcIndzczovL1wiICsgbG9jYXRpb24uaG9zdCArICc6MjU2Nyc7XG4gICAgICAgICAgICAgICAgdGhpcy5pb25VcmwgPSBcIndzczovL1wiICsgbG9jYXRpb24uaG9zdCArICc6ODQ0Myc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY29seXNldXNVcmwgPSBcIndzOi8vXCIgKyBsb2NhdGlvbi5ob3N0ICsgJzoyNTY3JztcbiAgICAgICAgICAgICAgICB0aGlzLmlvblVybCA9IFwid3M6Ly9cIiArIGxvY2F0aW9uLmhvc3QgKyAnOjg0NDMnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgTkFGLmxvZy53cml0ZShcIkF0dGVtcHRpbmcgdG8gY29ubmVjdCB0byBjb2x5c2V1c1wiKTtcbiAgICAgICAgY29uc3QgY29seXNldXNDb25uZWN0aW9uID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb2x5c2V1cyA9IG5ldyBDb2x5c2V1c0NsaWVudCh0aGlzLmNvbHlzZXVzVXJsKTtcbiAgICAgICAgICAgIHRoaXMuam9pblJvb20oKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc29sdmUpXG4gICAgICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnVzZUlvbikge1xuICAgICAgICAgICAgY29seXNldXNDb25uZWN0aW9uLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLmlvblVybCxcbiAgICAgICAgICAgICAgICAgICAgbG9nbGV2ZWw6IFwidHJhY2VcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlvbiA9IG5ldyBJb25DbGllbnQoY29uZmlnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlvbi5vbihcInRyYW5zcG9ydC1vcGVuXCIsIHRoaXMub25Jb25PcGVuLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW9uLm9uKFwidHJhbnNwb3J0LWNsb3NlZFwiLCB0aGlzLm9uSW9uQ2xvc2VkLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RyZWFtcyA9IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ1N0cmVhbVJlcXVlc3RzID0ge307XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2NvbHlzZXVzQ29ubmVjdGlvbiwgdGhpcy51cGRhdGVUaW1lT2Zmc2V0KCldKTtcbiAgICB9XG5cbiAgICBqb2luUm9vbSgpIHtcbiAgICAgICAgTkFGLmxvZy53cml0ZShcIkpvaW5pbmcgcm9vbVwiLCB0aGlzLnJvb21OYW1lLCB0aGlzLnJvb21JZCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByb29tSWQ6IHRoaXMucm9vbUlkXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY3JlYXRlUm9vbSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29seXNldXMuam9pbk9yQ3JlYXRlKHRoaXMucm9vbU5hbWUsIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4odGhpcy5vbkpvaW4uYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5vbkpvaW5FcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbHlzZXVzLmpvaW4odGhpcy5yb29tTmFtZSwgb3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbih0aGlzLm9uSm9pbi5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLm9uSm9pbkVycm9yLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Kb2luKHJvb20pIHtcbiAgICAgICAgdGhpcy5yb29tID0gcm9vbTtcbiAgICAgICAgcm9vbS5vbk1lc3NhZ2UoXCJyb29tRGF0YVwiLCB0aGlzLm9uUm9vbURhdGEuYmluZCh0aGlzKSk7XG4gICAgICAgIHJvb20ub25NZXNzYWdlKFwidXNlckRhdGFcIiwgdGhpcy5vblVzZXJEYXRhLmJpbmQodGhpcykpO1xuICAgICAgICByb29tLm9uTWVzc2FnZShcIm5hZlwiLCB0aGlzLm9uTmFmLmJpbmQodGhpcykpO1xuICAgICAgICByb29tLm9uTWVzc2FnZShcImNoYXRcIiwgdGhpcy5vbkNoYXQuYmluZCh0aGlzKSk7XG4gICAgICAgIHJvb20ub25TdGF0ZUNoYW5nZS5vbmNlKHRoaXMub25Jbml0aWFsU3RhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgIHJvb20ub25TdGF0ZUNoYW5nZSh0aGlzLm9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIGlmIChyb29tLnN0YXRlLnBsYXllcnMpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1t0aGlzLnNlc3Npb25JZF0gPSB7fTtcbiAgICAgICAgICAgIHJvb20uc3RhdGUucGxheWVycy5vbkFkZCA9IHRoaXMub25BZGRQbGF5ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHJvb20uc3RhdGUucGxheWVycy5vblJlbW92ZSA9IHRoaXMub25SZW1vdmVQbGF5ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbm5lY3RTdWNjZXNzKHRoaXMuc2Vzc2lvbklkKTtcbiAgICAgICAgaWYgKHRoaXMuaW9uU3RhdGUgPj0gSW9uU3RhdGUuT1BFTikge1xuICAgICAgICAgICAgdGhpcy5qb2luSW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkpvaW5FcnJvcihlcnIpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0RmFpbHVyZSgpO1xuICAgICAgICBjb25zdCBkZXRhaWwgPSB7IHJlYXNvbjogXCJqb2luX2RlbmllZFwiIH07XG4gICAgICAgIGRvY3VtZW50LmJvZHkuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjb25uZWN0X2Vycm9yXCIsIHsgZGV0YWlsIH0pKTtcbiAgICB9XG5cbiAgICBnZXQgc2Vzc2lvbklkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb29tLnNlc3Npb25JZDtcbiAgICB9XG5cbiAgICBnZXQgcGxheWVyKCkge1xuICAgICAgICB0aGlzLnBsYXllcnNbdGhpcy5zZXNzaW9uSWRdO1xuICAgIH1cblxuICAgIGdldCBzY2VuZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vbURhdGEuc2NlbmU7XG4gICAgfVxuXG4gICAgZ2V0IHNjZW5lSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb21EYXRhLnNjZW5lLnNjZW5lX2lkO1xuICAgIH1cblxuICAgIG9uUm9vbURhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLnJvb21EYXRhID0gZGF0YTtcbiAgICAgICAgY29uc3QgZGV0YWlsID0gZGF0YTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInJvb21fZGF0YVwiLCB7IGRldGFpbCB9KSk7XG4gICAgfVxuXG4gICAgb25Vc2VyRGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSBkYXRhO1xuICAgICAgICBjb25zdCBkZXRhaWwgPSBkYXRhO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwidXNlcl9kYXRhXCIsIHsgZGV0YWlsIH0pKTtcbiAgICB9XG5cbiAgICBnZXRBdmF0YXIoYXZhdGFySWQpIHtcbiAgICAgICAgY29uc3QgYXZhdGFycyA9IHRoaXMucm9vbURhdGEuYXZhdGFycy5lbnRyaWVzO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8YXZhdGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGF2YXRhcnNbaV0uaWQgPT09IGF2YXRhcklkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF2YXRhcnNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBdmF0YXJTcmMoYXZhdGFySWQpIHtcbiAgICAgICAgY29uc3QgYXZhdGFyID0gdGhpcy5nZXRBdmF0YXIoYXZhdGFySWQpO1xuICAgICAgICByZXR1cm4gYXZhdGFyICYmIGF2YXRhci5nbHRmcyAmJiBhdmF0YXIuZ2x0ZnMuYXZhdGFyO1xuICAgIH1cblxuICAgIGdldFNjZW5lKHNjZW5lSWQpIHtcbiAgICAgICAgY29uc3Qgc2NlbmVzID0gdGhpcy5yb29tRGF0YS5zY2VuZXMuZW50cmllcztcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNjZW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNjZW5lc1tpXS5pZCA9PT0gc2NlbmVJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY2VuZXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1NhbWVTY2VuZShwcmVzZW5jZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMucm9vbURhdGEgJiZcbiAgICAgICAgICAgICh0aGlzLnJvb21EYXRhLnNjZW5lLnNjZW5lX2lkID09PSBwcmVzZW5jZS5zY2VuZUlkIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMucm9vbURhdGEuc2NlbmUuc2NlbmVfaWQgPT09IHRoaXMucm9vbURhdGEuc2NlbmVzLmVudHJpZXNbMF0uaWQgJiYgcHJlc2VuY2Uuc2NlbmVJZCA9PT0gXCJsb2JieVwiKSkpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNjZW5lKHNjZW5lSWQpIHtcbiAgICAgICAgaWYgKHNjZW5lSWQgPT09IHRoaXMucm9vbURhdGEuc2NlbmUuc2NlbmVfaWQpIHJldHVybjtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLmdldFNjZW5lKHNjZW5lSWQpO1xuICAgICAgICBpZiAoc2NlbmUpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjZW5lKS5mb3JFYWNoKGtleSA9PiB0aGlzLnJvb21EYXRhLnNjZW5lW2tleV0gPSBzY2VuZVtrZXldKTtcbiAgICAgICAgICAgIHRoaXMucm9vbURhdGEuc2NlbmUubW9kZWxfdXJsID0gc2NlbmUudXJsO1xuICAgICAgICAgICAgdGhpcy5yb29tRGF0YS5zY2VuZS5zY2VuZV9pZCA9IHNjZW5lLmlkO1xuICAgICAgICAgICAgdGhpcy5yb29tRGF0YS5zY2VuZS5vYmplY3RzX3VybCA9IHNjZW5lLm9iamVjdHNfdXJsO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZV9zY2VuZVwiKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbkVudGVyUm9vbShodWIpIHtcbiAgICAgICAgaWYgKCFodWIpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBjb25zdCByb29tRW50cnlTbG90Q291bnQgPSBPYmplY3QudmFsdWVzKHRoaXMucGxheWVycykucmVkdWNlKChhY2MsIHsgcHJlc2VuY2UgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNpbmdTbG90ID0gcHJlc2VuY2UucHJlc2VuY2UgPT09IFwicm9vbVwiIHx8IHByZXNlbmNlLmVudGVyaW5nO1xuICAgICAgICAgICAgcmV0dXJuIGFjYyArICh1c2luZ1Nsb3QgPyAxIDogMCk7XG4gICAgICAgIH0sIDApO1xuXG4gICAgICAgIC8vIFRoaXMgbm93IGV4aXN0cyBpbiByb29tIHNldHRpbmdzIGJ1dCBhIGRlZmF1bHQgaXMgbGVmdCBoZXJlIHRvIHN1cHBvcnQgb2xkIHJldGljdWx1bSBzZXJ2ZXJzXG4gICAgICAgIGNvbnN0IERFRkFVTFRfUk9PTV9TSVpFID0gMjQ7XG4gICAgICAgIHJldHVybiByb29tRW50cnlTbG90Q291bnQgPCAoaHViLnJvb21fc2l6ZSAhPT0gdW5kZWZpbmVkID8gaHViLnJvb21fc2l6ZSA6IERFRkFVTFRfUk9PTV9TSVpFKTtcbiAgICB9XG5cbiAgICBvbk5hZihkYXRhKSB7XG4gICAgICAgIHRoaXMub25EYXRhKGRhdGEuc2Vzc2lvbklkLCBkYXRhLnR5cGUsIGRhdGEuZGF0YSk7XG4gICAgfVxuXG4gICAgb25DaGF0KGRhdGEpIHtcbiAgICAgICAgY29uc3QgZGV0YWlsID0geyBzZXNzaW9uSWQ6IGRhdGEuc2Vzc2lvbklkLCBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsIGZyb206IGRhdGEuZnJvbSB9O1xuICAgICAgICBkb2N1bWVudC5ib2R5LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhdFwiLCB7IGRldGFpbCB9KSlcbiAgICB9XG5cbiAgICBvbkRhdGEoc2Vzc2lvbklkLCB0eXBlLCBkYXRhLCBmcm9tKSB7XG4gICAgICAgIGlmICh0aGlzLmZyb3plbikge1xuICAgICAgICAgICAgdGhpcy5zdG9yZU1lc3NhZ2UoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VMaXN0ZW5lcihzZXNzaW9uSWQsIHR5cGUsIGRhdGEsIGZyb20pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VuZENoYXRNc2cobWVzc2FnZSkge1xuICAgICAgICB0aGlzLnJvb20uc2VuZChcImNoYXRcIiwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgb25Jbml0aWFsU3RhdGUoc3RhdGUpIHtcbiAgICAgICAgLy90aGlzLm1lc3NhZ2VMaXN0ZW5lcihudWxsLCAnc3RhdGUnLCBzdGF0ZSk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBvblN0YXRlQ2hhbmdlKHN0YXRlKSB7XG4gICAgICAgIC8vdGhpcy5tZXNzYWdlTGlzdGVuZXIobnVsbCwgJ3N0YXRlJywgc3RhdGUpO1xuICAgIH1cblxuICAgIG9uQWRkUGxheWVyKHBsYXllciwgc2Vzc2lvbklkKSB7XG4gICAgICAgIHRoaXMucGxheWVyc1tzZXNzaW9uSWRdID0gcGxheWVyO1xuICAgICAgICBwbGF5ZXIub25DaGFuZ2UgPSAoY2hhbmdlcykgPT4ge1xuICAgICAgICAgICAgY2hhbmdlcy5mb3JFYWNoKGNoYW5nZSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChjaGFuZ2UuZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInByb2ZpbGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2VQcm9maWxlKGNoYW5nZS52YWx1ZSwgY2hhbmdlLnByZXZpb3VzVmFsdWUsIHNlc3Npb25JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncHJlc2VuY2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZVByZXNlbmNlKGNoYW5nZS52YWx1ZSwgY2hhbmdlLnByZXZpb3VzVmFsdWUsIHNlc3Npb25JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHNlc3Npb25JZCA9PT0gdGhpcy5zZXNzaW9uSWQgfHwgdGhpcy5jaGVja1NhbWVTY2VuZShwbGF5ZXIucHJlc2VuY2UpKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5MaXN0ZW5lcihzZXNzaW9uSWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9jY3VwYW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMub2NjdXBhbnRMaXN0ZW5lcih0aGlzLnBsYXllcnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXNzaW9uSWQgPT09IHRoaXMuc2Vzc2lvbklkKSB7XG4gICAgICAgICAgICBwbGF5ZXIucHJvZmlsZS5kaXNwbGF5TmFtZSA9IHdpbmRvdy5BUFAuc3RvcmUuc3RhdGUucHJvZmlsZS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHsgcHJvZmlsZTogeyBkaXNwbGF5TmFtZTogcGxheWVyLnByb2ZpbGUuZGlzcGxheU5hbWUgfSB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXRhaWwgPSB7IHNlc3Npb25JZCwgcGxheWVyIH07XG4gICAgICAgIGRvY3VtZW50LmJvZHkuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJwbGF5ZXJfYWRkZWRcIiwgeyBkZXRhaWwgfSkpO1xuICAgIH1cblxuICAgIG9uUmVtb3ZlUGxheWVyKHBsYXllciwgc2Vzc2lvbklkKSB7XG4gICAgICAgIHRoaXMucGxheWVyc1tzZXNzaW9uSWRdLm9uQ2hhbmdlID0gdm9pZCAwO1xuICAgICAgICBkZWxldGUgdGhpcy5wbGF5ZXJzW3Nlc3Npb25JZF07XG4gICAgICAgIHRoaXMuY2xvc2VkTGlzdGVuZXIoc2Vzc2lvbklkKTtcbiAgICAgICAgaWYgKHRoaXMub2NjdXBhbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5vY2N1cGFudExpc3RlbmVyKHRoaXMucGxheWVycyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGV0YWlsID0geyBzZXNzaW9uSWQsIHBsYXllciB9O1xuICAgICAgICBkb2N1bWVudC5ib2R5LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicGxheWVyX3JlbW92ZWRcIiwgeyBkZXRhaWwgfSkpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlUHJvZmlsZShwcm9maWxlLCBwcmV2UHJvZmlsZSwgc2Vzc2lvbklkKSB7XG4gICAgICAgIGNvbnN0IGRldGFpbCA9IHsgc2Vzc2lvbklkLCAgcHJvZmlsZSwgcHJldmlvdXM6IHByZXZQcm9maWxlIH07XG4gICAgICAgIGRvY3VtZW50LmJvZHkuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJwcm9maWxlX3VwZGF0ZWRcIiwgeyBkZXRhaWwgfSkpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlUHJlc2VuY2UocHJlc2VuY2UsIHByZXZQcmVzZW5jZSwgc2Vzc2lvbklkKSB7XG4gICAgICAgIGlmIChzZXNzaW9uSWQgPT09IHRoaXMuc2Vzc2lvbklkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzaWQgaW4gdGhpcy5wbGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNpZCA9PT0gc2Vzc2lvbklkKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1NhbWVTY2VuZSh0aGlzLnBsYXllcnNbc2lkXS5wcmVzZW5jZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXIoc2lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VkTGlzdGVuZXIoc2lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1NhbWVTY2VuZShwcmVzZW5jZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5MaXN0ZW5lcihzZXNzaW9uSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZWRMaXN0ZW5lcihzZXNzaW9uSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRldGFpbCA9IHsgc2Vzc2lvbklkLCBwcmVzZW5jZSwgcHJldmlvdXM6IHByZXZQcmVzZW5jZSB9O1xuICAgICAgICBkb2N1bWVudC5ib2R5LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicHJlc2VuY2VfdXBkYXRlZFwiLCB7IGRldGFpbCB9KSk7XG4gICAgfVxuXG4gICAgc2lnbkluKHRva2VuKSB7XG4gICAgICAgIHRoaXMucm9vbS5zZW5kKCdzaWduX2luJywgdG9rZW4pO1xuICAgIH1cblxuICAgIHVwZGF0ZShkYXRhKSB7XG4gICAgICAgIHRoaXMucm9vbS5zZW5kKCd1cGRhdGUnLCBkYXRhKTtcbiAgICB9XG5cbiAgICBzZW5kRW50ZXJpbmcoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKHsgcHJlc2VuY2U6IHsgZW50ZXJpbmc6IHRydWUgfSB9KTtcbiAgICB9XG5cbiAgICBzZW5kRW50ZXJpbmdDYW5jZWxsZWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKHsgcHJlc2VuY2U6IHsgZW50ZXJpbmc6IGZhbHNlIH0gfSk7XG4gICAgfVxuXG4gICAgc2VuZEVudGVyZWQoKSB7XG4gICAgICAgIGNvbnN0IHByZXNlbmNlID0ge1xuICAgICAgICAgICAgcHJlc2VuY2U6IFwicm9vbVwiLFxuICAgICAgICAgICAgc2NlbmVJZDogdGhpcy5yb29tRGF0YS5zY2VuZS5zY2VuZV9pZCxcbiAgICAgICAgICAgIGVudGVyaW5nOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZSh7IHByZXNlbmNlOiBwcmVzZW5jZSB9KTtcbiAgICB9XG5cbiAgICBzZW5kT2JqZWN0U3Bhd25lZCh0eXBlKSB7XG5cbiAgICB9XG5cbiAgICBwaW4obmV0d29ya0lkLCBnbHRmTm9kZSwgZmlsZUlkLCBmaWxlQWNjZXNzVG9rZW4sIHByb21vdGlvblRva2VuKSB7XG4gICAgICAgIHRoaXMucm9vbS5zZW5kKCdwaW4nLCB7IG5ldHdvcmtJZCwgZ2x0Zk5vZGUsIGZpbGVJZCB9KTtcbiAgICB9XG5cbiAgICB1bnBpbihuZXR3b3JrSWQsIGZpbGVJZCkge1xuICAgICAgICB0aGlzLnJvb20uc2VuZCgndW5waW4nLCB7IG5ldHdvcmtJZCwgZmlsZUlkIH0pO1xuICAgIH1cblxuICAgIG9uSW9uT3BlbigpIHtcbiAgICAgICAgdGhpcy5pb25TdGF0ZSA9IElvblN0YXRlLk9QRU47XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhcnRMb2NhbFN0cmVhbSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydExvY2FsU3RyZWFtKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiAodGhpcy51c2VyRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5qb2luSW9uKCk7XG4gICAgICAgIC8vfVxuICAgIH1cblxuICAgIG9uSW9uQ2xvc2VkKCkge1xuICAgICAgICB0aGlzLmlvblN0YXRlID0gSW9uU3RhdGUuQ0xPU0VEO1xuICAgIH1cblxuICAgIGFzeW5jIGpvaW5Jb24oKSB7XG4gICAgICAgIHRoaXMuaW9uLm9uKFwicGVlci1qb2luXCIsIHRoaXMub25QZWVySm9pbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5pb24ub24oXCJwZWVyLWxlYXZlXCIsIHRoaXMub25QZWVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuaW9uLm9uKFwic3RyZWFtLWFkZFwiLCB0aGlzLm9uU3RyZWFtQWRkLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmlvbi5vbihcInN0cmVhbS1yZW1vdmVcIiwgdGhpcy5vblN0cmVhbVJlbW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5pb24ub24oXCJicm9hZGNhc3RcIiwgdGhpcy5vbkJyb2FkY2FzdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gdG9kbzogc2hvdWxkIHVzZSBhIEpXVCByZXR1cm5lZCBieSBDb2x5c2V1c1xuICAgICAgICBhd2FpdCB0aGlzLmlvbi5qb2luKHRoaXMucm9vbS5pZCwge1xuICAgICAgICAgICAgLy8gdG9kbzogZml4XG4gICAgICAgICAgICAvLyBuYW1lOiB0aGlzLnVzZXJEYXRhICYmIHRoaXMudXNlckRhdGEubmFtZSB8fCBcIkFub255bW91c1wiLFxuICAgICAgICAgICAgLy8gc2Vzc2lvbklkOiB0aGlzLnJvb20uc2Vzc2lvbklkXG4gICAgICAgICAgICBuYW1lOiB0aGlzLnNlc3Npb25JZFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pb25TdGF0ZSA9IElvblN0YXRlLkpPSU5FRDtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxTdHJlYW0pIHtcbiAgICAgICAgICAgIHRoaXMuaW9uLnB1Ymxpc2godGhpcy5sb2NhbFN0cmVhbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBlZXJKb2luKHVpZCwgaW5mbykge1xuICAgICAgICBOQUYubG9nLndyaXRlKFwiUGVlciBqb2luIFwiLCB1aWQsIGluZm8pO1xuICAgIH1cblxuICAgIG9uUGVlckxlYXZlKHVpZCkge1xuICAgICAgICBOQUYubG9nLndyaXRlKFwiUGVlciBsZWF2ZSBcIiwgdWlkKTtcbiAgICB9XG5cbiAgICBhc3luYyBvblN0cmVhbUFkZChtaWQsIGluZm8pIHtcbiAgICAgICAgaWYgKHRoaXMuaW9uKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnN1YnNjcmliZShtaWQsIGluZm8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdHJlYW1SZW1vdmUoc3RyZWFtKSB7XG5cbiAgICB9XG5cbiAgICBvbkJyb2FkY2FzdChyaWQsIG1pZCwgaW5mbykge1xuICAgICAgICBOQUYubG9nLndyaXRlKFwiSW9uIGJyb2FkY2FzdCBcIiwgcmlkLCBtaWQsIGluZm8pO1xuICAgIH1cblxuICAgIGFzeW5jIHN1YnNjcmliZShtaWQsIGluZm8pIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbklkID0gaW5mby5uYW1lO1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCB0aGlzLmlvbi5zdWJzY3JpYmUobWlkKTtcbiAgICAgICAgc3RyZWFtLmluZm8gPSBpbmZvO1xuICAgICAgICB0aGlzLnNldE1lZGlhU3RyZWFtKHNlc3Npb25JZCwgc3RyZWFtKTtcbiAgICB9XG5cbiAgICBhc3luYyB1bnN1YnNjcmliZShzdHJlYW0pIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbklkID0gc3RyZWFtLmluZm8ubmFtZTtcbiAgICAgICAgYXdhaXQgc3RyZWFtLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnN0cmVhbXNbc2Vzc2lvbklkXTtcbiAgICB9XG5cbiAgICBzaG91bGRTdGFydENvbm5lY3Rpb25UbyhjbGllbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldENvbm5lY3RTdGF0dXMoc2Vzc2lvbklkKSB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IHRoaXMuc3RyZWFtc1tzZXNzaW9uSWRdO1xuICAgICAgICBpZiAoY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gTkFGLmFkYXB0ZXJzLklTX0NPTk5FQ1RFRDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOQUYuYWRhcHRlcnMuTk9UX0NPTk5FQ1RFRDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbmREYXRhKHRvLCB0eXBlLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuc2VuZERhdGFHdWFyYW50ZWVkKHRvLCB0eXBlLCBkYXRhKTtcbiAgICB9XG5cbiAgICBzZW5kRGF0YUd1YXJhbnRlZWQodG8sIHR5cGUsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMucm9vbSkge1xuICAgICAgICAgICAgdGhpcy5yb29tLnNlbmQoXCJuYWZcIiwgeyB0bywgdHlwZSwgZGF0YSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5BRi5sb2cud2FybignUm9vbSBub3Qgam9pbmVkIHlldCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnJvYWRjYXN0RGF0YSh0eXBlLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0RGF0YUd1YXJhbnRlZWQodHlwZSwgZGF0YSk7XG4gICAgfVxuXG4gICAgYnJvYWRjYXN0RGF0YUd1YXJhbnRlZWQodHlwZSwgZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5yb29tKSB7XG4gICAgICAgICAgICB0aGlzLnJvb20uc2VuZChcIm5hZlwiLCB7IHR5cGUsIGRhdGEgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOQUYubG9nLndhcm4oJ1Jvb20gbm90IGpvaW5lZCB5ZXQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE1lZGlhU3RyZWFtKHNlc3Npb25JZCwgdHlwZSA9IFwiYXVkaW9cIikge1xuICAgICAgICBpZiAodGhpcy5zdHJlYW1zW3Nlc3Npb25JZF0pIHtcbiAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoYEFscmVhZHkgaGFkICR7dHlwZX0gZm9yICR7c2Vzc2lvbklkfWApO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnN0cmVhbXNbc2Vzc2lvbklkXVt0eXBlXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOQUYubG9nLndyaXRlKGBXYWl0aW5nIG9uICR7dHlwZX0gZm9yICR7c2Vzc2lvbklkfWApO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBlbmRpbmdTdHJlYW1SZXF1ZXN0c1tzZXNzaW9uSWRdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nU3RyZWFtUmVxdWVzdHNbc2Vzc2lvbklkXSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYXVkaW9Qcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdTdHJlYW1SZXF1ZXN0c1tzZXNzaW9uSWRdLmF1ZGlvID0geyByZXNvbHZlLCByZWplY3QgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlb1Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ1N0cmVhbVJlcXVlc3RzW3Nlc3Npb25JZF0udmlkZW8gPSB7IHJlc29sdmUsIHJlamVjdCB9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nU3RyZWFtUmVxdWVzdHNbc2Vzc2lvbklkXS5hdWRpby5wcm9taXNlID0gYXVkaW9Qcm9taXNlO1xuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ1N0cmVhbVJlcXVlc3RzW3Nlc3Npb25JZF0udmlkZW8ucHJvbWlzZSA9IHZpZGVvUHJvbWlzZTtcblxuICAgICAgICAgICAgICAgIGF1ZGlvUHJvbWlzZS5jYXRjaChlID0+IGNvbnNvbGUud2FybihgJHtzZXNzaW9uSWR9IGdldE1lZGlhU3RyZWFtIEF1ZGlvIEVycm9yYCwgZSkpO1xuICAgICAgICAgICAgICAgIHZpZGVvUHJvbWlzZS5jYXRjaChlID0+IGNvbnNvbGUud2FybihgJHtzZXNzaW9uSWR9IGdldE1lZGlhU3RyZWFtIFZpZGVvIEVycm9yYCwgZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVuZGluZ1N0cmVhbVJlcXVlc3RzW3Nlc3Npb25JZF1bdHlwZV0ucHJvbWlzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE1lZGlhU3RyZWFtKHNlc3Npb25JZCwgc3RyZWFtKSB7XG4gICAgICAgIGlmIChzdHJlYW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvU3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmZvckVhY2godHJhY2sgPT4gYXVkaW9TdHJlYW0uYWRkVHJhY2sodHJhY2spKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICBOQUYubG9nLndyaXRlKGAke3Nlc3Npb25JZH0gc2V0TWVkaWFTdHJlYW0gQXVkaW8gRXJyb3JgLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHZpZGVvU3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmZvckVhY2godHJhY2sgPT4gdmlkZW9TdHJlYW0uYWRkVHJhY2sodHJhY2spKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgTkFGLmxvZy53cml0ZShgJHtzZXNzaW9uSWR9IHNldE1lZGlhU3RyZWFtIFZpZGVvIEVycm9yYCwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN0cmVhbXNbc2Vzc2lvbklkXSA9IHsgYXVkaW86IGF1ZGlvU3RyZWFtLCB2aWRlbzogdmlkZW9TdHJlYW0gfTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBlbmRpbmdTdHJlYW1SZXF1ZXN0c1tzZXNzaW9uSWRdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nU3RyZWFtUmVxdWVzdHNbc2Vzc2lvbklkXS5hdWRpby5yZXNvbHZlKGF1ZGlvU3RyZWFtKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdTdHJlYW1SZXF1ZXN0c1tzZXNzaW9uSWRdLnZpZGVvLnJlc29sdmUodmlkZW9TdHJlYW0pO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdTdHJlYW1SZXF1ZXN0c1tzZXNzaW9uSWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RyZWFtc1tzZXNzaW9uSWRdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRldGFpbCA9IHsgc3RyZWFtLCBzZXNzaW9uSWQgfTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2V0X21lZGlhX3N0cmVhbScsIHsgZGV0YWlsIH0pKTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRMb2NhbE1lZGlhU3RyZWFtKHN0cmVhbSkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbFN0cmVhbSkge1xuICAgICAgICAgICAgbGV0IHRyYWNrcyA9IHRoaXMubG9jYWxTdHJlYW0uZ2V0VHJhY2tzKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdHJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdHJhY2tzW2ldLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9jYWxTdHJlYW0udW5wdWJsaXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0cmVhbSkge1xuICAgICAgICAgICAgaWYgKCEoc3RyZWFtIGluc3RhbmNlb2YgTG9jYWxTdHJlYW0pKSB7XG4gICAgICAgICAgICAgICAgc3RyZWFtID0gbmV3IExvY2FsU3RyZWFtKHN0cmVhbSwgdGhpcy5vcHRpb25zLm1lZGlhT3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NhbFN0cmVhbSA9IHN0cmVhbTtcbiAgICAgICAgdGhpcy5zZXRNZWRpYVN0cmVhbSh0aGlzLnNlc3Npb25JZCwgdGhpcy5sb2NhbFN0cmVhbSk7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsU3RyZWFtICYmIHRoaXMuaW9uU3RhdGUgPj0gSW9uU3RhdGUuSk9JTkVEKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmlvbi5wdWJsaXNoKHRoaXMubG9jYWxTdHJlYW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgc3RhcnRMb2NhbFN0cmVhbSgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRMb2NhbE1lZGlhU3RyZWFtKG51bGwpO1xuICAgICAgICBhd2FpdCB0aGlzLnNldExvY2FsTWVkaWFTdHJlYW0oYXdhaXQgTG9jYWxTdHJlYW0uZ2V0VXNlck1lZGlhKHRoaXMub3B0aW9ucy5tZWRpYU9wdGlvbnMpKTtcbiAgICB9XG5cbiAgICBlbmFibGVNaWNyb3Bob25lKGVuYWJsZWQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxTdHJlYW0pIHtcbiAgICAgICAgICAgIGlmIChlbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0cmVhbS51bm11dGUoXCJhdWRpb1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxTdHJlYW0ubXV0ZShcImF1ZGlvXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlRnJlZXplKCkge1xuICAgICAgICBpZiAodGhpcy5mcm96ZW4pIHtcbiAgICAgICAgICAgIHRoaXMudW5mcmVlemUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZnJlZXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmcmVlemUoKSB7XG4gICAgICAgIHRoaXMuZnJvemVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1bmZyZWV6ZSgpIHtcbiAgICAgICAgdGhpcy5mcm96ZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mbHVzaFBlbmRpbmdVcGRhdGVzKCk7XG4gICAgfVxuXG4gICAgZmx1c2hQZW5kaW5nVXBkYXRlcygpIHtcbiAgICAgICAgZm9yIChjb25zdCBbbmV0d29ya0lkLCBtZXNzYWdlXSBvZiB0aGlzLmZyb3plblVwZGF0ZXMpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRQZW5kaW5nRGF0YShuZXR3b3JrSWQsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgaWYgKCFkYXRhKSBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gT3ZlcnJpZGUgdGhlIGRhdGEgdHlwZSBvbiBcInVtXCIgbWVzc2FnZXMgdHlwZXMsIHNpbmNlIHdlIGV4dHJhY3QgZW50aXR5IHVwZGF0ZXMgZnJvbSBcInVtXCIgbWVzc2FnZXMgaW50b1xuICAgICAgICAgICAgLy8gaW5kaXZpZHVhbCBmcm96ZW5VcGRhdGVzIGluIHN0b3JlU2luZ2xlTWVzc2FnZS5cbiAgICAgICAgICAgIGNvbnN0IGRhdGFUeXBlID0gbWVzc2FnZS5kYXRhVHlwZSA9PT0gXCJ1bVwiID8gXCJ1XCIgOiBtZXNzYWdlLmRhdGFUeXBlO1xuXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VMaXN0ZW5lcihudWxsLCBkYXRhVHlwZSwgZGF0YSwgbWVzc2FnZS5zb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZnJvemVuVXBkYXRlcy5jbGVhcigpO1xuICAgIH1cblxuICAgIGdldFBlbmRpbmdEYXRhKG5ldHdvcmtJZCwgbWVzc2FnZSkge1xuICAgICAgICBpZiAoIW1lc3NhZ2UpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGxldCBkYXRhID0gbWVzc2FnZS5kYXRhVHlwZSA9PT0gXCJ1bVwiID8gdGhpcy5kYXRhRm9yVXBkYXRlTXVsdGlNZXNzYWdlKG5ldHdvcmtJZCwgbWVzc2FnZSkgOiBtZXNzYWdlLmRhdGE7XG5cbiAgICAgICAgLy8gSWdub3JlIG1lc3NhZ2VzIHJlbGF0aW5nIHRvIHVzZXJzIHdobyBoYXZlIGRpc2Nvbm5lY3RlZCBzaW5jZSBmcmVlemluZywgdGhlaXIgZW50aXRpZXNcbiAgICAgICAgLy8gd2lsbCBoYXZlIGFsZWFkeSBiZWVuIHJlbW92ZWQgYnkgTkFGLlxuICAgICAgICAvLyBOb3RlIHRoYXQgZGVsZXRlIG1lc3NhZ2VzIGhhdmUgbm8gXCJvd25lclwiIHNvIHdlIGhhdmUgdG8gY2hlY2sgZm9yIHRoYXQgYXMgd2VsbC5cbiAgICAgICAgaWYgKGRhdGEub3duZXIgJiYgIXRoaXMucGxheWVyc1tkYXRhLm93bmVyXSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgLy8gSWdub3JlIG1lc3NhZ2VzIGZyb20gdXNlcnMgdGhhdCB3ZSBtYXkgaGF2ZSBibG9ja2VkIHdoaWxlIGZyb3plbi5cbiAgICAgICAgaWYgKGRhdGEub3duZXIgJiYgdGhpcy5ibG9ja2VkQ2xpZW50cy5oYXMoZGF0YS5vd25lcikpIHJldHVybiBudWxsO1xuXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgc3RvcmVNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YVR5cGUgPT09IFwidW1cIikgeyAvLyBVcGRhdGVNdWx0aVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBtZXNzYWdlLmRhdGEuZC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlU2luZ2xlTWVzc2FnZShtZXNzYWdlLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmVTaW5nbGVNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcmVTaW5nbGVNZXNzYWdlKG1lc3NhZ2UsIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBpbmRleCAhPT0gdW5kZWZpbmVkID8gbWVzc2FnZS5kYXRhLmRbaW5kZXhdIDogbWVzc2FnZS5kYXRhO1xuICAgICAgICBjb25zdCBkYXRhVHlwZSA9IG1lc3NhZ2UuZGF0YVR5cGU7XG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IG1lc3NhZ2Uuc291cmNlO1xuXG4gICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGRhdGEubmV0d29ya0lkO1xuXG4gICAgICAgIGlmICghdGhpcy5mcm96ZW5VcGRhdGVzLmhhcyhuZXR3b3JrSWQpKSB7XG4gICAgICAgICAgICB0aGlzLmZyb3plblVwZGF0ZXMuc2V0KG5ldHdvcmtJZCwgbWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzdG9yZWRNZXNzYWdlID0gdGhpcy5mcm96ZW5VcGRhdGVzLmdldChuZXR3b3JrSWQpO1xuICAgICAgICAgICAgY29uc3Qgc3RvcmVkRGF0YSA9IHN0b3JlZE1lc3NhZ2UuZGF0YVR5cGUgPT09IFwidW1cIiA/IHRoaXMuZGF0YUZvclVwZGF0ZU11bHRpTWVzc2FnZShuZXR3b3JrSWQsIHN0b3JlZE1lc3NhZ2UpIDogc3RvcmVkTWVzc2FnZS5kYXRhO1xuXG4gICAgICAgICAgICAvLyBBdm9pZCB1cGRhdGluZyBjb21wb25lbnRzIGlmIHRoZSBlbnRpdHkgZGF0YSByZWNlaXZlZCBkaWQgbm90IGNvbWUgZnJvbSB0aGUgY3VycmVudCBvd25lci5cbiAgICAgICAgICAgIGNvbnN0IGlzT3V0ZGF0ZWRNZXNzYWdlID0gZGF0YS5sYXN0T3duZXJUaW1lIDwgc3RvcmVkRGF0YS5sYXN0T3duZXJUaW1lO1xuICAgICAgICAgICAgY29uc3QgaXNDb250ZW1wb3JhbmVvdXNNZXNzYWdlID0gZGF0YS5sYXN0T3duZXJUaW1lID09PSBzdG9yZWREYXRhLmxhc3RPd25lclRpbWU7XG4gICAgICAgICAgICBpZiAoaXNPdXRkYXRlZE1lc3NhZ2UgfHwgKGlzQ29udGVtcG9yYW5lb3VzTWVzc2FnZSAmJiBzdG9yZWREYXRhLm93bmVyID4gZGF0YS5vd25lcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXRhVHlwZSA9PT0gXCJyXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVkV2hpbGVGcm96ZW4gPSBzdG9yZWREYXRhICYmIHN0b3JlZERhdGEuaXNGaXJzdFN5bmM7XG4gICAgICAgICAgICAgICAgaWYgKGNyZWF0ZWRXaGlsZUZyb3plbikge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIGFuZCBkZWxldGVkIHdoaWxlIGZyb3plbiwgZG9uJ3QgYm90aGVyIGNvbnZleWluZyBhbnl0aGluZyB0byB0aGUgY29uc3VtZXIuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJvemVuVXBkYXRlcy5kZWxldGUobmV0d29ya0lkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBEZWxldGUgbWVzc2FnZXMgb3ZlcnJpZGUgYW55IG90aGVyIG1lc3NhZ2VzIGZvciB0aGlzIGVudGl0eVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb3plblVwZGF0ZXMuc2V0KG5ldHdvcmtJZCwgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBtZXJnZSBpbiBjb21wb25lbnQgdXBkYXRlc1xuICAgICAgICAgICAgICAgIGlmIChzdG9yZWREYXRhLmNvbXBvbmVudHMgJiYgZGF0YS5jb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3RvcmVkRGF0YS5jb21wb25lbnRzLCBkYXRhLmNvbXBvbmVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRhdGFGb3JVcGRhdGVNdWx0aU1lc3NhZ2UobmV0d29ya0lkLCBtZXNzYWdlKSB7XG4gICAgICAgIC8vIFwiZFwiIGlzIGFuIGFycmF5IG9mIGVudGl0eSBkYXRhcywgd2hlcmUgZWFjaCBpdGVtIGluIHRoZSBhcnJheSByZXByZXNlbnRzIGEgdW5pcXVlIGVudGl0eSBhbmQgY29udGFpbnNcbiAgICAgICAgLy8gbWV0YWRhdGEgZm9yIHRoZSBlbnRpdHksIGFuZCBhbiBhcnJheSBvZiBjb21wb25lbnRzIHRoYXQgaGF2ZSBiZWVuIHVwZGF0ZWQgb24gdGhlIGVudGl0eS5cbiAgICAgICAgLy8gVGhpcyBtZXRob2QgZmluZHMgdGhlIGRhdGEgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gbmV0d29ya0lkLlxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IG1lc3NhZ2UuZGF0YS5kLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG1lc3NhZ2UuZGF0YS5kW2ldO1xuXG4gICAgICAgICAgICBpZiAoZGF0YS5uZXR3b3JrSWQgPT09IG5ldHdvcmtJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgYmxvY2soc2Vzc2lvbklkKSB7XG4gICAgICAgIHRoaXMucm9vbS5zZW5kKHsga2luZDogXCJibG9ja1wiLCB3aG9tOiBzZXNzaW9uSWQgfSk7XG4gICAgICAgIHRoaXMuYmxvY2tlZENsaWVudHMuc2V0KHNlc3Npb25JZCwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IGRldGFpbCA9IHsgY2xpZW50SWQ6IHNlc3Npb25JZCB9O1xuICAgICAgICBkb2N1bWVudC5ib2R5LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYmxvY2tlZFwiLCB7IGRldGFpbCB9KSk7XG4gICAgfVxuXG4gICAgdW5ibG9jayhzZXNzaW9uSWQpIHtcbiAgICAgICAgdGhpcy5yb29tLnNlbmQoeyBraW5kOiBcInVuYmxvY2tcIiwgd2hvbTogc2Vzc2lvbklkIH0pO1xuICAgICAgICB0aGlzLmJsb2NrZWRDbGllbnRzLmRlbGV0ZShzZXNzaW9uSWQpO1xuICAgICAgICBjb25zdCBkZXRhaWwgPSB7IGNsaWVudElkOiBzZXNzaW9uSWQgfTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInVuYmxvY2tlZFwiLCB7IGRldGFpbCB9KSk7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5pb24ubGVhdmUoKTtcbiAgICAgICAgdGhpcy5zdHJlYW1zID0ge307XG4gICAgICAgIHRoaXMucGVuZGluZ1N0cmVhbVJlcXVlc3RzID0ge307XG4gICAgICAgIGlmICh0aGlzLnJvb20uc3RhdGUucGxheWVycykge1xuICAgICAgICAgICAgdGhpcy5yb29tLnN0YXRlLnBsYXllcnMub25BZGQgPSB2b2lkIDA7XG4gICAgICAgICAgICB0aGlzLnJvb20uc3RhdGUucGxheWVycy5vblJlbW92ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHRoaXMucm9vbS5zdGF0ZS5wbGF5ZXJzLm9uQ2hhbmdlID0gdm9pZCAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vbS5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5yb29tLmxlYXZlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5yb29tID0gbnVsbDtcbiAgICB9XG5cbiAgICBpc0Rpc2Nvbm5lY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vbSA9PT0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRSZWNvbm5lY3Rpb25MaXN0ZW5lcnMocmVjb25uZWN0aW5nTGlzdGVuZXIsIHJlY29ubmVjdGVkTGlzdGVuZXIsIHJlY29ubmVjdGlvbkVycm9yTGlzdGVuZXIpIHtcbiAgICAgICAgLy8gb25SZWNvbm5lY3RpbmcgaXMgY2FsbGVkIHdpdGggdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdW50aWwgdGhlIG5leHQgcmVjb25uZWN0aW9uIGF0dGVtcHRcbiAgICAgICAgdGhpcy5vblJlY29ubmVjdGluZyA9IHJlY29ubmVjdGluZ0xpc3RlbmVyO1xuICAgICAgICAvLyBvblJlY29ubmVjdGVkIGlzIGNhbGxlZCB3aGVuIHRoZSBjb25uZWN0aW9uIGhhcyBiZWVuIHJlZXN0YWJsaXNoZWRcbiAgICAgICAgdGhpcy5vblJlY29ubmVjdGVkID0gcmVjb25uZWN0ZWRMaXN0ZW5lcjtcbiAgICAgICAgLy8gb25SZWNvbm5lY3Rpb25FcnJvciBpcyBjYWxsZWQgd2l0aCBhbiBlcnJvciB3aGVuIG1heFJlY29ubmVjdGlvbkF0dGVtcHRzIGhhcyBiZWVuIHJlYWNoZWRcbiAgICAgICAgdGhpcy5vblJlY29ubmVjdGlvbkVycm9yID0gcmVjb25uZWN0aW9uRXJyb3JMaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVUaW1lT2Zmc2V0KCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc2Nvbm5lY3RlZCgpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY2xpZW50U2VudFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJIRUFEXCIsXG4gICAgICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHByZWNpc2lvbiA9IDEwMDA7XG4gICAgICAgIGNvbnN0IHNlcnZlclJlY2VpdmVkVGltZSA9IG5ldyBEYXRlKHJlcy5oZWFkZXJzLmdldChcIkRhdGVcIikpLmdldFRpbWUoKSArIHByZWNpc2lvbiAvIDI7XG4gICAgICAgIGNvbnN0IGNsaWVudFJlY2VpdmVkVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IHNlcnZlclRpbWUgPSBzZXJ2ZXJSZWNlaXZlZFRpbWUgKyAoY2xpZW50UmVjZWl2ZWRUaW1lIC0gY2xpZW50U2VudFRpbWUpIC8gMjtcbiAgICAgICAgY29uc3QgdGltZU9mZnNldCA9IHNlcnZlclRpbWUgLSBjbGllbnRSZWNlaXZlZFRpbWU7XG5cbiAgICAgICAgdGhpcy5zZXJ2ZXJUaW1lUmVxdWVzdHMrKztcblxuICAgICAgICBpZiAodGhpcy5zZXJ2ZXJUaW1lUmVxdWVzdHMgPD0gMTApIHtcbiAgICAgICAgICAgIHRoaXMudGltZU9mZnNldHMucHVzaCh0aW1lT2Zmc2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGltZU9mZnNldHNbdGhpcy5zZXJ2ZXJUaW1lUmVxdWVzdHMgJSAxMF0gPSB0aW1lT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdmdUaW1lT2Zmc2V0ID0gdGhpcy50aW1lT2Zmc2V0cy5yZWR1Y2UoKGFjYywgb2Zmc2V0KSA9PiAoYWNjICs9IG9mZnNldCksIDApIC8gdGhpcy50aW1lT2Zmc2V0cy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VydmVyVGltZVJlcXVlc3RzID4gMTApIHtcbiAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoYG5ldyBzZXJ2ZXIgdGltZSBvZmZzZXQ6ICR7dGhpcy5hdmdUaW1lT2Zmc2V0fW1zYCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlVGltZU9mZnNldCgpLCA1ICogNjAgKiAxMDAwKTsgLy8gU3luYyBjbG9jayBldmVyeSA1IG1pbnV0ZXMuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWVPZmZzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNlcnZlclRpbWUoKSB7XG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpICsgdGhpcy5hdmdUaW1lT2Zmc2V0O1xuICAgIH1cbn1cblxuTkFGLmFkYXB0ZXJzLnJlZ2lzdGVyKFwiY29seXNldXMtaW9uXCIsIENvbHlzZXVzSW9uQWRhcHRlcik7XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9