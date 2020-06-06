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

/***/ "../colyseus.js/lib/Auth.js":
/*!**********************************!*\
  !*** ../colyseus.js/lib/Auth.js ***!
  \**********************************/
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
var http = __importStar(__webpack_require__(/*! @colyseus/http */ "../colyseus.js/node_modules/@colyseus/http/dist/index.esm.js"));
var Storage_1 = __webpack_require__(/*! ./Storage */ "../colyseus.js/lib/Storage.js");
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

/***/ "../colyseus.js/lib/Client.js":
/*!************************************!*\
  !*** ../colyseus.js/lib/Client.js ***!
  \************************************/
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
var http_1 = __webpack_require__(/*! @colyseus/http */ "../colyseus.js/node_modules/@colyseus/http/dist/index.esm.js");
var ServerError_1 = __webpack_require__(/*! ./errors/ServerError */ "../colyseus.js/lib/errors/ServerError.js");
var Room_1 = __webpack_require__(/*! ./Room */ "../colyseus.js/lib/Room.js");
var Auth_1 = __webpack_require__(/*! ./Auth */ "../colyseus.js/lib/Auth.js");
var Push_1 = __webpack_require__(/*! ./Push */ "../colyseus.js/lib/Push.js");
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

/***/ "../colyseus.js/lib/Connection.js":
/*!****************************************!*\
  !*** ../colyseus.js/lib/Connection.js ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
var websocket_1 = __importDefault(__webpack_require__(/*! @gamestdio/websocket */ "../colyseus.js/node_modules/@gamestdio/websocket/lib/index.js"));
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

/***/ "../colyseus.js/lib/Protocol.js":
/*!**************************************!*\
  !*** ../colyseus.js/lib/Protocol.js ***!
  \**************************************/
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

/***/ "../colyseus.js/lib/Push.js":
/*!**********************************!*\
  !*** ../colyseus.js/lib/Push.js ***!
  \**********************************/
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

/***/ "../colyseus.js/lib/Room.js":
/*!**********************************!*\
  !*** ../colyseus.js/lib/Room.js ***!
  \**********************************/
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
var msgpack = __importStar(__webpack_require__(/*! ./msgpack */ "../colyseus.js/lib/msgpack.js"));
var strong_events_1 = __webpack_require__(/*! strong-events */ "../colyseus.js/node_modules/strong-events/lib/index.js");
var nanoevents_1 = __webpack_require__(/*! nanoevents */ "../colyseus.js/node_modules/nanoevents/index.js");
var Connection_1 = __webpack_require__(/*! ./Connection */ "../colyseus.js/lib/Connection.js");
var Serializer_1 = __webpack_require__(/*! ./serializer/Serializer */ "../colyseus.js/lib/serializer/Serializer.js");
var Protocol_1 = __webpack_require__(/*! ./Protocol */ "../colyseus.js/lib/Protocol.js");
var encode = __importStar(__webpack_require__(/*! @colyseus/schema/lib/encoding/encode */ "../colyseus.js/node_modules/@colyseus/schema/lib/encoding/encode.js"));
var decode = __importStar(__webpack_require__(/*! @colyseus/schema/lib/encoding/decode */ "../colyseus.js/node_modules/@colyseus/schema/lib/encoding/decode.js"));
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

/***/ "../colyseus.js/lib/Storage.js":
/*!*************************************!*\
  !*** ../colyseus.js/lib/Storage.js ***!
  \*************************************/
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

/***/ "../colyseus.js/lib/errors/ServerError.js":
/*!************************************************!*\
  !*** ../colyseus.js/lib/errors/ServerError.js ***!
  \************************************************/
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

/***/ "../colyseus.js/lib/index.js":
/*!***********************************!*\
  !*** ../colyseus.js/lib/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaSerializer = exports.FossilDeltaSerializer = exports.registerSerializer = void 0;
__webpack_require__(/*! ./legacy */ "../colyseus.js/lib/legacy.js");
var Client_1 = __webpack_require__(/*! ./Client */ "../colyseus.js/lib/Client.js");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return Client_1.Client; } });
var Protocol_1 = __webpack_require__(/*! ./Protocol */ "../colyseus.js/lib/Protocol.js");
Object.defineProperty(exports, "Protocol", { enumerable: true, get: function () { return Protocol_1.Protocol; } });
Object.defineProperty(exports, "ErrorCode", { enumerable: true, get: function () { return Protocol_1.ErrorCode; } });
var Room_1 = __webpack_require__(/*! ./Room */ "../colyseus.js/lib/Room.js");
Object.defineProperty(exports, "Room", { enumerable: true, get: function () { return Room_1.Room; } });
var Auth_1 = __webpack_require__(/*! ./Auth */ "../colyseus.js/lib/Auth.js");
Object.defineProperty(exports, "Auth", { enumerable: true, get: function () { return Auth_1.Auth; } });
Object.defineProperty(exports, "Platform", { enumerable: true, get: function () { return Auth_1.Platform; } });
/*
 * Serializers
 */
var FossilDeltaSerializer_1 = __webpack_require__(/*! ./serializer/FossilDeltaSerializer */ "../colyseus.js/lib/serializer/FossilDeltaSerializer.js");
Object.defineProperty(exports, "FossilDeltaSerializer", { enumerable: true, get: function () { return FossilDeltaSerializer_1.FossilDeltaSerializer; } });
var SchemaSerializer_1 = __webpack_require__(/*! ./serializer/SchemaSerializer */ "../colyseus.js/lib/serializer/SchemaSerializer.js");
Object.defineProperty(exports, "SchemaSerializer", { enumerable: true, get: function () { return SchemaSerializer_1.SchemaSerializer; } });
var Serializer_1 = __webpack_require__(/*! ./serializer/Serializer */ "../colyseus.js/lib/serializer/Serializer.js");
Object.defineProperty(exports, "registerSerializer", { enumerable: true, get: function () { return Serializer_1.registerSerializer; } });
Serializer_1.registerSerializer('fossil-delta', FossilDeltaSerializer_1.FossilDeltaSerializer);
Serializer_1.registerSerializer('schema', SchemaSerializer_1.SchemaSerializer);


/***/ }),

/***/ "../colyseus.js/lib/legacy.js":
/*!************************************!*\
  !*** ../colyseus.js/lib/legacy.js ***!
  \************************************/
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

/***/ "../colyseus.js/lib/msgpack.js":
/*!*************************************!*\
  !*** ../colyseus.js/lib/msgpack.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = exports.decode = void 0;
var decode_1 = __importDefault(__webpack_require__(/*! ./msgpack/decode */ "../colyseus.js/lib/msgpack/decode.js"));
var encode_1 = __importDefault(__webpack_require__(/*! ./msgpack/encode */ "../colyseus.js/lib/msgpack/encode.js"));
exports.decode = decode_1.default;
exports.encode = encode_1.default;


/***/ }),

/***/ "../colyseus.js/lib/msgpack/decode.js":
/*!********************************************!*\
  !*** ../colyseus.js/lib/msgpack/decode.js ***!
  \********************************************/
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

/***/ "../colyseus.js/lib/msgpack/encode.js":
/*!********************************************!*\
  !*** ../colyseus.js/lib/msgpack/encode.js ***!
  \********************************************/
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

/***/ "../colyseus.js/lib/serializer/FossilDeltaSerializer.js":
/*!**************************************************************!*\
  !*** ../colyseus.js/lib/serializer/FossilDeltaSerializer.js ***!
  \**************************************************************/
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
var state_listener_1 = __webpack_require__(/*! @gamestdio/state-listener */ "../colyseus.js/node_modules/@gamestdio/state-listener/lib/index.js");
var fossilDelta = __importStar(__webpack_require__(/*! fossil-delta */ "../colyseus.js/node_modules/fossil-delta/fossil-delta.js"));
var msgpack = __importStar(__webpack_require__(/*! ../msgpack */ "../colyseus.js/lib/msgpack.js"));
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

/***/ "../colyseus.js/lib/serializer/SchemaSerializer.js":
/*!*********************************************************!*\
  !*** ../colyseus.js/lib/serializer/SchemaSerializer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaSerializer = void 0;
var schema_1 = __webpack_require__(/*! @colyseus/schema */ "../colyseus.js/node_modules/@colyseus/schema/lib/index.js");
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

/***/ "../colyseus.js/lib/serializer/Serializer.js":
/*!***************************************************!*\
  !*** ../colyseus.js/lib/serializer/Serializer.js ***!
  \***************************************************/
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

/***/ "../colyseus.js/node_modules/@colyseus/http/dist/index.esm.js":
/*!********************************************************************!*\
  !*** ../colyseus.js/node_modules/@colyseus/http/dist/index.esm.js ***!
  \********************************************************************/
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

/***/ "../colyseus.js/node_modules/@colyseus/schema/lib/ChangeTree.js":
/*!**********************************************************************!*\
  !*** ../colyseus.js/node_modules/@colyseus/schema/lib/ChangeTree.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Schema_1 = __webpack_require__(/*! ./Schema */ "../colyseus.js/node_modules/@colyseus/schema/lib/Schema.js");
var ArraySchema_1 = __webpack_require__(/*! ./types/ArraySchema */ "../colyseus.js/node_modules/@colyseus/schema/lib/types/ArraySchema.js");
var MapSchema_1 = __webpack_require__(/*! ./types/MapSchema */ "../colyseus.js/node_modules/@colyseus/schema/lib/types/MapSchema.js");
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

/***/ "../colyseus.js/node_modules/@colyseus/schema/lib/Reflection.js":
/*!**********************************************************************!*\
  !*** ../colyseus.js/node_modules/@colyseus/schema/lib/Reflection.js ***!
  \**********************************************************************/
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
var annotations_1 = __webpack_require__(/*! ./annotations */ "../colyseus.js/node_modules/@colyseus/schema/lib/annotations.js");
var Schema_1 = __webpack_require__(/*! ./Schema */ "../colyseus.js/node_modules/@colyseus/schema/lib/Schema.js");
var ArraySchema_1 = __webpack_require__(/*! ./types/ArraySchema */ "../colyseus.js/node_modules/@colyseus/schema/lib/types/ArraySchema.js");
var MapSchema_1 = __webpack_require__(/*! ./types/MapSchema */ "../colyseus.js/node_modules/@colyseus/schema/lib/types/MapSchema.js");
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

/***/ "../colyseus.js/node_modules/@colyseus/schema/lib/Schema.js":
/*!******************************************************************!*\
  !*** ../colyseus.js/node_modules/@colyseus/schema/lib/Schema.js ***!
  \******************************************************************/
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
var spec_1 = __webpack_require__(/*! ./spec */ "../colyseus.js/node_modules/@colyseus/schema/lib/spec.js");
var encode = __webpack_require__(/*! ./encoding/encode */ "../colyseus.js/node_modules/@colyseus/schema/lib/encoding/encode.js");
var decode = __webpack_require__(/*! ./encoding/decode */ "../colyseus.js/node_modules/@colyseus/schema/lib/encoding/decode.js");
var ArraySchema_1 = __webpack_require__(/*! ./types/ArraySchema */ "../colyseus.js/node_modules/@colyseus/schema/lib/types/ArraySchema.js");
var MapSchema_1 = __webpack_require__(/*! ./types/MapSchema */ "../colyseus.js/node_modules/@colyseus/schema/lib/types/MapSchema.js");
var ChangeTree_1 = __webpack_require__(/*! ./ChangeTree */ "../colyseus.js/node_modules/@colyseus/schema/lib/ChangeTree.js");
var EventEmitter_1 = __webpack_require__(/*! ./events/EventEmitter */ "../colyseus.js/node_modules/@colyseus/schema/lib/events/EventEmitter.js");
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "_descriptors", {
        get: function () { return this.constructor._descriptors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "_indexes", {
        get: function () { return this.constructor._indexes; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "_fieldsByIndex", {
        get: function () { return this.constructor._fieldsByIndex; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "_filters", {
        get: function () { return this.constructor._filters; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "_deprecated", {
        get: function () { return this.constructor._deprecated; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "$changed", {
        get: function () { return this.$changes.changed; },
        enumerable: true,
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
            var hasChange = false;
            if (!field) {
                return "continue";
            }
            else if (isNil) {
                value = null;
                hasChange = true;
            }
            else if (type._schema) {
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
                    previousValue: this_1[_field]
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

/***/ "../colyseus.js/node_modules/@colyseus/schema/lib/annotations.js":
/*!***********************************************************************!*\
  !*** ../colyseus.js/node_modules/@colyseus/schema/lib/annotations.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChangeTree_1 = __webpack_require__(/*! ./ChangeTree */ "../colyseus.js/node_modules/@colyseus/schema/lib/ChangeTree.js");
var Schema_1 = __webpack_require__(/*! ./Schema */ "../colyseus.js/node_modules/@colyseus/schema/lib/Schema.js");
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

/***/ "../colyseus.js/node_modules/@colyseus/schema/lib/encoding/decode.js":
/*!***************************************************************************!*\
  !*** ../colyseus.js/node_modules/@colyseus/schema/lib/encoding/decode.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var spec_1 = __webpack_require__(/*! ../spec */ "../colyseus.js/node_modules/@colyseus/schema/lib/spec.js");
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

/***/ "../colyseus.js/node_modules/@colyseus/schema/lib/encoding/encode.js":
/*!***************************************************************************!*\
  !*** ../colyseus.js/node_modules/@colyseus/schema/lib/encoding/encode.js ***!
  \***************************************************************************/
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

/***/ "../colyseus.js/node_modules/@colyseus/schema/lib/events/EventEmitter.js":
/*!*******************************************************************************!*\
  !*** ../colyseus.js/node_modules/@colyseus/schema/lib/events/EventEmitter.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Extracted from https://www.npmjs.com/package/strong-events
 */
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
//# sourceMappingURL=EventEmitter.js.map

/***/ }),

/***/ "../colyseus.js/node_modules/@colyseus/schema/lib/index.js":
/*!*****************************************************************!*\
  !*** ../colyseus.js/node_modules/@colyseus/schema/lib/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Schema_1 = __webpack_require__(/*! ./Schema */ "../colyseus.js/node_modules/@colyseus/schema/lib/Schema.js");
exports.Schema = Schema_1.Schema;
var MapSchema_1 = __webpack_require__(/*! ./types/MapSchema */ "../colyseus.js/node_modules/@colyseus/schema/lib/types/MapSchema.js");
exports.MapSchema = MapSchema_1.MapSchema;
var ArraySchema_1 = __webpack_require__(/*! ./types/ArraySchema */ "../colyseus.js/node_modules/@colyseus/schema/lib/types/ArraySchema.js");
exports.ArraySchema = ArraySchema_1.ArraySchema;
// Utils
var utils_1 = __webpack_require__(/*! ./utils */ "../colyseus.js/node_modules/@colyseus/schema/lib/utils.js");
exports.dumpChanges = utils_1.dumpChanges;
// Reflection
var Reflection_1 = __webpack_require__(/*! ./Reflection */ "../colyseus.js/node_modules/@colyseus/schema/lib/Reflection.js");
exports.Reflection = Reflection_1.Reflection;
exports.ReflectionType = Reflection_1.ReflectionType;
exports.ReflectionField = Reflection_1.ReflectionField;
var annotations_1 = __webpack_require__(/*! ./annotations */ "../colyseus.js/node_modules/@colyseus/schema/lib/annotations.js");
// Annotations
exports.type = annotations_1.type;
exports.deprecated = annotations_1.deprecated;
exports.filter = annotations_1.filter;
exports.defineTypes = annotations_1.defineTypes;
// Types
exports.Context = annotations_1.Context;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../colyseus.js/node_modules/@colyseus/schema/lib/spec.js":
/*!****************************************************************!*\
  !*** ../colyseus.js/node_modules/@colyseus/schema/lib/spec.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.END_OF_STRUCTURE = 0xc1; // (msgpack spec: never used)
exports.NIL = 0xc0;
exports.INDEX_CHANGE = 0xd4;
exports.TYPE_ID = 0xd5;
//# sourceMappingURL=spec.js.map

/***/ }),

/***/ "../colyseus.js/node_modules/@colyseus/schema/lib/types/ArraySchema.js":
/*!*****************************************************************************!*\
  !*** ../colyseus.js/node_modules/@colyseus/schema/lib/types/ArraySchema.js ***!
  \*****************************************************************************/
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
        enumerable: true,
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

/***/ "../colyseus.js/node_modules/@colyseus/schema/lib/types/MapSchema.js":
/*!***************************************************************************!*\
  !*** ../colyseus.js/node_modules/@colyseus/schema/lib/types/MapSchema.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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

/***/ "../colyseus.js/node_modules/@colyseus/schema/lib/utils.js":
/*!*****************************************************************!*\
  !*** ../colyseus.js/node_modules/@colyseus/schema/lib/utils.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(/*! ./ */ "../colyseus.js/node_modules/@colyseus/schema/lib/index.js");
var MapSchema_1 = __webpack_require__(/*! ./types/MapSchema */ "../colyseus.js/node_modules/@colyseus/schema/lib/types/MapSchema.js");
var ArraySchema_1 = __webpack_require__(/*! ./types/ArraySchema */ "../colyseus.js/node_modules/@colyseus/schema/lib/types/ArraySchema.js");
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

/***/ "../colyseus.js/node_modules/@gamestdio/state-listener/lib/StateContainer.js":
/*!***********************************************************************************!*\
  !*** ../colyseus.js/node_modules/@gamestdio/state-listener/lib/StateContainer.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var compare_1 = __webpack_require__(/*! ./compare */ "../colyseus.js/node_modules/@gamestdio/state-listener/lib/compare.js");
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

/***/ "../colyseus.js/node_modules/@gamestdio/state-listener/lib/compare.js":
/*!****************************************************************************!*\
  !*** ../colyseus.js/node_modules/@gamestdio/state-listener/lib/compare.js ***!
  \****************************************************************************/
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

/***/ "../colyseus.js/node_modules/@gamestdio/state-listener/lib/index.js":
/*!**************************************************************************!*\
  !*** ../colyseus.js/node_modules/@gamestdio/state-listener/lib/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StateContainer_1 = __webpack_require__(/*! ./StateContainer */ "../colyseus.js/node_modules/@gamestdio/state-listener/lib/StateContainer.js");
exports.StateContainer = StateContainer_1.StateContainer;


/***/ }),

/***/ "../colyseus.js/node_modules/@gamestdio/websocket/lib/backoff.js":
/*!***********************************************************************!*\
  !*** ../colyseus.js/node_modules/@gamestdio/websocket/lib/backoff.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.createBackoff=createBackoff;var backoff={exponential:function exponential(attempt,delay){return Math.floor(Math.random()*Math.pow(2,attempt)*delay);},fibonacci:function fibonacci(attempt,delay){var current=1;if(attempt>current){var prev=1,current=2;for(var index=2;index<attempt;index++){var next=prev+current;prev=current;current=next;}}return Math.floor(Math.random()*current*delay);}};function createBackoff(type,options){return new Backoff(backoff[type],options);}function Backoff(func,options){this.func=func;this.attempts=0;this.delay=typeof options.initialDelay!=="undefined"?options.initialDelay:100;}Backoff.prototype.backoff=function(){setTimeout(this.onReady,this.func(++this.attempts,this.delay));};

/***/ }),

/***/ "../colyseus.js/node_modules/@gamestdio/websocket/lib/index.js":
/*!*********************************************************************!*\
  !*** ../colyseus.js/node_modules/@gamestdio/websocket/lib/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var createBackoff=__webpack_require__(/*! ./backoff */ "../colyseus.js/node_modules/@gamestdio/websocket/lib/backoff.js").createBackoff;var WebSocketImpl=typeof WebSocket!=="undefined"?WebSocket:__webpack_require__(/*! ws */ 0);var WebSocketClient=function(){/**
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

/***/ "../colyseus.js/node_modules/fossil-delta/fossil-delta.js":
/*!****************************************************************!*\
  !*** ../colyseus.js/node_modules/fossil-delta/fossil-delta.js ***!
  \****************************************************************/
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

/***/ "../colyseus.js/node_modules/nanoevents/index.js":
/*!*******************************************************!*\
  !*** ../colyseus.js/node_modules/nanoevents/index.js ***!
  \*******************************************************/
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

/***/ "../colyseus.js/node_modules/strong-events/lib/index.js":
/*!**************************************************************!*\
  !*** ../colyseus.js/node_modules/strong-events/lib/index.js ***!
  \**************************************************************/
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
        const uid = uuid_1.v4();
        if (!config || !config.url) {
            throw new Error('Undefined config or config.url in ion-sdk.');
        }
        const transport = new protoo_client_1.WebSocketTransport(`${config.url}/ws?peer=${uid}`);
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
    constructor(stream) {
        super(stream);
        if (!Stream.dispatch) {
            throw new Error('Dispatch not set.');
        }
    }
    static setDispatch(dispatch) {
        Stream.dispatch = dispatch;
    }
}
exports.Stream = Stream;
class LocalStream extends Stream {
    constructor(stream, options) {
        super(stream);
        this.options = options;
    }
    static getUserMedia(options = {
        codec: 'VP8',
        resolution: 'hd',
        audio: false,
        video: false,
    }) {
        return __awaiter(this, void 0, void 0, function* () {
            const stream = yield navigator.mediaDevices.getUserMedia({
                audio: options.audio,
                video: options.video instanceof Object
                    ? Object.assign(Object.assign({}, exports.VideoResolutions[options.resolution]), options.video) : options.video
                    ? exports.VideoResolutions[options.resolution]
                    : false,
            });
            return new LocalStream(stream, options);
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
                    const result = yield Stream.dispatch.request('publish', {
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
            return yield Stream.dispatch
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
            return yield RemoteStream.dispatch.request('unsubscribe', { mid: this.mid });
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

module.exports = JSON.parse("{\"_args\":[[\"protoo-client@4.0.4\",\"/home/kasparsj/Work/naf-colyseus-ion-adapter\"]],\"_from\":\"protoo-client@4.0.4\",\"_id\":\"protoo-client@4.0.4\",\"_inBundle\":false,\"_integrity\":\"sha512-+WZUJJTlBSTWYeNu0Tv8SGI3kjettLvr2IUdBsAfioi0Szf8peeky79h6li7gThA3pIpNC+A+IuCUWaK7MlFfQ==\",\"_location\":\"/protoo-client\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"protoo-client@4.0.4\",\"name\":\"protoo-client\",\"escapedName\":\"protoo-client\",\"rawSpec\":\"4.0.4\",\"saveSpec\":null,\"fetchSpec\":\"4.0.4\"},\"_requiredBy\":[\"/ion-sdk-js\"],\"_resolved\":\"https://registry.npmjs.org/protoo-client/-/protoo-client-4.0.4.tgz\",\"_spec\":\"4.0.4\",\"_where\":\"/home/kasparsj/Work/naf-colyseus-ion-adapter\",\"author\":{\"name\":\"Iñaki Baz Castillo\",\"email\":\"ibc@aliax.net\"},\"bugs\":{\"url\":\"https://github.com/ibc/protoo/issues\"},\"dependencies\":{\"debug\":\"^4.1.1\",\"events\":\"^3.1.0\",\"retry\":\"^0.12.0\",\"websocket\":\"^1.0.31\"},\"description\":\"protoo JavaScript client module\",\"devDependencies\":{\"eslint\":\"^5.16.0\"},\"engines\":{\"node\":\">=8.0.0\"},\"homepage\":\"https://protoojs.org\",\"keywords\":[\"nodejs\",\"browser\",\"websocket\"],\"license\":\"MIT\",\"main\":\"lib/index.js\",\"name\":\"protoo-client\",\"optionalDependencies\":{\"websocket\":\"^1.0.31\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ibc/protoo.git\"},\"scripts\":{\"lint\":\"eslint -c .eslintrc.js lib\"},\"version\":\"4.0.4\"}");

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

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

  return (bth[buf[i + 0]] + bth[buf[i + 1]] + bth[buf[i + 2]] + bth[buf[i + 3]] + '-' + bth[buf[i + 4]] + bth[buf[i + 5]] + '-' + bth[buf[i + 6]] + bth[buf[i + 7]] + '-' + bth[buf[i + 8]] + bth[buf[i + 9]] + '-' + bth[buf[i + 10]] + bth[buf[i + 11]] + bth[buf[i + 12]] + bth[buf[i + 13]] + bth[buf[i + 14]] + bth[buf[i + 15]]).toLowerCase();
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
  var b = buf || [];
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
    var off = buf && offset || 0;
    if (typeof value === 'string') value = stringToBytes(value);
    if (typeof namespace === 'string') namespace = uuidToBytes(namespace);

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
      for (var idx = 0; idx < 16; ++idx) {
        buf[off + idx] = bytes[idx];
      }
    }

    return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
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
  if (typeof options === 'string') {
    buf = options === 'binary' ? new Uint8Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    var start = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[start + i] = rnds[i];
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

module.exports = JSON.parse("{\"_args\":[[\"websocket@1.0.31\",\"/home/kasparsj/Work/naf-colyseus-ion-adapter\"]],\"_from\":\"websocket@1.0.31\",\"_id\":\"websocket@1.0.31\",\"_inBundle\":false,\"_integrity\":\"sha512-VAouplvGKPiKFDTeCCO65vYHsyay8DqoBSlzIO3fayrfOgU94lQN5a1uWVnFrMLceTJw/+fQXR5PGbUVRaHshQ==\",\"_location\":\"/websocket\",\"_optional\":true,\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"websocket@1.0.31\",\"name\":\"websocket\",\"escapedName\":\"websocket\",\"rawSpec\":\"1.0.31\",\"saveSpec\":null,\"fetchSpec\":\"1.0.31\"},\"_requiredBy\":[\"/protoo-client\"],\"_resolved\":\"https://registry.npmjs.org/websocket/-/websocket-1.0.31.tgz\",\"_spec\":\"1.0.31\",\"_where\":\"/home/kasparsj/Work/naf-colyseus-ion-adapter\",\"author\":{\"name\":\"Brian McKelvey\",\"email\":\"theturtle32@gmail.com\",\"url\":\"https://github.com/theturtle32\"},\"browser\":\"lib/browser.js\",\"bugs\":{\"url\":\"https://github.com/theturtle32/WebSocket-Node/issues\"},\"config\":{\"verbose\":false},\"contributors\":[{\"name\":\"Iñaki Baz Castillo\",\"email\":\"ibc@aliax.net\",\"url\":\"http://dev.sipdoc.net\"}],\"dependencies\":{\"debug\":\"^2.2.0\",\"es5-ext\":\"^0.10.50\",\"nan\":\"^2.14.0\",\"typedarray-to-buffer\":\"^3.1.5\",\"yaeti\":\"^0.0.6\"},\"description\":\"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.\",\"devDependencies\":{\"buffer-equal\":\"^1.0.0\",\"faucet\":\"^0.0.1\",\"gulp\":\"^4.0.2\",\"gulp-jshint\":\"^2.0.4\",\"jshint\":\"^2.0.0\",\"jshint-stylish\":\"^2.2.1\",\"tape\":\"^4.9.1\"},\"directories\":{\"lib\":\"./lib\"},\"engines\":{\"node\":\">=0.10.0\"},\"homepage\":\"https://github.com/theturtle32/WebSocket-Node\",\"keywords\":[\"websocket\",\"websockets\",\"socket\",\"networking\",\"comet\",\"push\",\"RFC-6455\",\"realtime\",\"server\",\"client\"],\"license\":\"Apache-2.0\",\"main\":\"index\",\"name\":\"websocket\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/theturtle32/WebSocket-Node.git\"},\"scripts\":{\"gulp\":\"gulp\",\"install\":\"(node-gyp rebuild 2> builderror.log) || (exit 0)\",\"test\":\"faucet test/unit\"},\"version\":\"1.0.31\"}");

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
/* harmony import */ var colyseus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! colyseus.js */ "../colyseus.js/lib/index.js");
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
        this.sessionId = null;

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

    joinRoom(options) {
        NAF.log.write("Joining room", this.roomName);
        if (this.options.createRoom) {
            return this.colyseus.joinOrCreate(this.roomName, options).then(this.onJoin.bind(this)).catch(this.onJoinError.bind(this));
        } else {
            return this.colyseus.join(this.roomName, options).then(this.onJoin.bind(this)).catch(this.onJoinError.bind(this));
        }
    }

    onJoin(room) {
        this.room = room;
        this.sessionId = room.sessionId;
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
        console.error("Socket connection failure", err);
        if (this.connectFailure) {
            this.connectFailure();
        }
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

    onNaf(data) {
        this.onData(data.sessionId, data.type, data.data);
    }

    onChat(data) {
        this.onData(data.sessionId, "chat", data.message, data.from);
    }

    onData(sessionId, type, data, from) {
        if (this.frozen) {
            this.storeMessage(message);
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
        this.openListener(sessionId);
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
            scene: this.roomData.scene.name,
            entering: false
        };
        this.update({ presence: presence });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzLmpzL2xpYi9BdXRoLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy5qcy9saWIvQ2xpZW50LmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy5qcy9saWIvQ29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMuanMvbGliL1Byb3RvY29sLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy5qcy9saWIvUHVzaC5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMuanMvbGliL1Jvb20uanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzLmpzL2xpYi9TdG9yYWdlLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy5qcy9saWIvZXJyb3JzL1NlcnZlckVycm9yLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy5qcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzLmpzL2xpYi9sZWdhY3kuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzLmpzL2xpYi9tc2dwYWNrLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy5qcy9saWIvbXNncGFjay9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzLmpzL2xpYi9tc2dwYWNrL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMuanMvbGliL3NlcmlhbGl6ZXIvRm9zc2lsRGVsdGFTZXJpYWxpemVyLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy5qcy9saWIvc2VyaWFsaXplci9TY2hlbWFTZXJpYWxpemVyLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy5qcy9saWIvc2VyaWFsaXplci9TZXJpYWxpemVyLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy5qcy9ub2RlX21vZHVsZXMvQGNvbHlzZXVzL2h0dHAvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzLmpzL25vZGVfbW9kdWxlcy9AY29seXNldXMvc2NoZW1hL2xpYi9DaGFuZ2VUcmVlLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy5qcy9ub2RlX21vZHVsZXMvQGNvbHlzZXVzL3NjaGVtYS9saWIvUmVmbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMuanMvbm9kZV9tb2R1bGVzL0Bjb2x5c2V1cy9zY2hlbWEvbGliL1NjaGVtYS5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMuanMvbm9kZV9tb2R1bGVzL0Bjb2x5c2V1cy9zY2hlbWEvbGliL2Fubm90YXRpb25zLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy5qcy9ub2RlX21vZHVsZXMvQGNvbHlzZXVzL3NjaGVtYS9saWIvZW5jb2RpbmcvZGVjb2RlLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy5qcy9ub2RlX21vZHVsZXMvQGNvbHlzZXVzL3NjaGVtYS9saWIvZW5jb2RpbmcvZW5jb2RlLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy5qcy9ub2RlX21vZHVsZXMvQGNvbHlzZXVzL3NjaGVtYS9saWIvZXZlbnRzL0V2ZW50RW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMuanMvbm9kZV9tb2R1bGVzL0Bjb2x5c2V1cy9zY2hlbWEvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy5qcy9ub2RlX21vZHVsZXMvQGNvbHlzZXVzL3NjaGVtYS9saWIvc3BlYy5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMuanMvbm9kZV9tb2R1bGVzL0Bjb2x5c2V1cy9zY2hlbWEvbGliL3R5cGVzL0FycmF5U2NoZW1hLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy5qcy9ub2RlX21vZHVsZXMvQGNvbHlzZXVzL3NjaGVtYS9saWIvdHlwZXMvTWFwU2NoZW1hLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy5qcy9ub2RlX21vZHVsZXMvQGNvbHlzZXVzL3NjaGVtYS9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzLmpzL25vZGVfbW9kdWxlcy9AZ2FtZXN0ZGlvL3N0YXRlLWxpc3RlbmVyL2xpYi9TdGF0ZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMuanMvbm9kZV9tb2R1bGVzL0BnYW1lc3RkaW8vc3RhdGUtbGlzdGVuZXIvbGliL2NvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzLmpzL25vZGVfbW9kdWxlcy9AZ2FtZXN0ZGlvL3N0YXRlLWxpc3RlbmVyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMuanMvbm9kZV9tb2R1bGVzL0BnYW1lc3RkaW8vd2Vic29ja2V0L2xpYi9iYWNrb2ZmLmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy5qcy9ub2RlX21vZHVsZXMvQGdhbWVzdGRpby93ZWJzb2NrZXQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9jb2x5c2V1cy5qcy9ub2RlX21vZHVsZXMvZm9zc2lsLWRlbHRhL2Zvc3NpbC1kZWx0YS5qcyIsIndlYnBhY2s6Ly8vLi4vY29seXNldXMuanMvbm9kZV9tb2R1bGVzL25hbm9ldmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbHlzZXVzLmpzL25vZGVfbW9kdWxlcy9zdHJvbmctZXZlbnRzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pb24tc2RrLWpzL2xpYi9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lvbi1zZGstanMvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pb24tc2RrLWpzL2xpYi9zdHJlYW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lvbi1zZGstanMvbGliL3RyYW5zcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9nbGV2ZWwvbGliL2xvZ2xldmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm90b28tY2xpZW50L2xpYi9FbmhhbmNlZEV2ZW50RW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvdG9vLWNsaWVudC9saWIvTG9nZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm90b28tY2xpZW50L2xpYi9NZXNzYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm90b28tY2xpZW50L2xpYi9QZWVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm90b28tY2xpZW50L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvdG9vLWNsaWVudC9saWIvdHJhbnNwb3J0cy9XZWJTb2NrZXRUcmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3Rvby1jbGllbnQvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZXRyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmV0cnkvbGliL3JldHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZXRyeS9saWIvcmV0cnlfb3BlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZHAtdHJhbnNmb3JtL2xpYi9ncmFtbWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZHAtdHJhbnNmb3JtL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2RwLXRyYW5zZm9ybS9saWIvcGFyc2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZHAtdHJhbnNmb3JtL2xpYi93cml0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbWQ1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc2hhMS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92MzUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93ZWJzb2NrZXQvbGliL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYnNvY2tldC9saWIvdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dzIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJJb25TdGF0ZSIsIkNMT1NFRCIsIk9QRU4iLCJKT0lORUQiLCJGQUlMRUQiLCJDb2x5c2V1c0lvbkFkYXB0ZXIiLCJjb25zdHJ1Y3RvciIsImFwcCIsInJvb21OYW1lIiwicm9vbSIsInJvb21EYXRhIiwidXNlckRhdGEiLCJzZXNzaW9uSWQiLCJwbGF5ZXJzIiwic3RyZWFtcyIsInBlbmRpbmdTdHJlYW1SZXF1ZXN0cyIsInRpbWVPZmZzZXRzIiwic2VydmVyVGltZVJlcXVlc3RzIiwiYXZnVGltZU9mZnNldCIsImJsb2NrZWRDbGllbnRzIiwiTWFwIiwiZnJvemVuVXBkYXRlcyIsIm9wdGlvbnMiLCJjcmVhdGVSb29tIiwidXNlSW9uIiwic3RhcnRMb2NhbFN0cmVhbSIsIm1lZGlhT3B0aW9ucyIsImF1ZGlvIiwidmlkZW8iLCJzZWxlY3RlZEF1ZGlvRGV2aWNlIiwic2VsZWN0ZWRWaWRlb0RldmljZSIsInJlc29sdXRpb24iLCJiYW5kd2lkdGgiLCJjb2RlYyIsInNldFNlcnZlclVybCIsInNlcnZlclVybHMiLCJjb2x5c2V1c1VybCIsImlvblVybCIsInNldEFwcCIsImFwcE5hbWUiLCJzZXRSb29tIiwic2V0T3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsInNldFdlYlJ0Y09wdGlvbnMiLCJzZXRTZXJ2ZXJDb25uZWN0TGlzdGVuZXJzIiwic3VjY2Vzc0xpc3RlbmVyIiwiZmFpbHVyZUxpc3RlbmVyIiwiY29ubmVjdFN1Y2Nlc3MiLCJjb25uZWN0RmFpbHVyZSIsInNldFJvb21PY2N1cGFudExpc3RlbmVyIiwib2NjdXBhbnRMaXN0ZW5lciIsInNldERhdGFDaGFubmVsTGlzdGVuZXJzIiwib3Blbkxpc3RlbmVyIiwiY2xvc2VkTGlzdGVuZXIiLCJtZXNzYWdlTGlzdGVuZXIiLCJjb25uZWN0IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3QiLCJOQUYiLCJsb2ciLCJ3cml0ZSIsImNvbHlzZXVzQ29ubmVjdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY29seXNldXMiLCJDb2x5c2V1c0NsaWVudCIsImpvaW5Sb29tIiwidGhlbiIsImNhdGNoIiwiY29uZmlnIiwidXJsIiwibG9nbGV2ZWwiLCJpb24iLCJJb25DbGllbnQiLCJvbiIsIm9uSW9uT3BlbiIsImJpbmQiLCJvbklvbkNsb3NlZCIsImFsbCIsInVwZGF0ZVRpbWVPZmZzZXQiLCJqb2luT3JDcmVhdGUiLCJvbkpvaW4iLCJvbkpvaW5FcnJvciIsImpvaW4iLCJvbk1lc3NhZ2UiLCJvblJvb21EYXRhIiwib25Vc2VyRGF0YSIsIm9uTmFmIiwib25DaGF0Iiwib25TdGF0ZUNoYW5nZSIsIm9uY2UiLCJvbkluaXRpYWxTdGF0ZSIsInN0YXRlIiwib25BZGQiLCJvbkFkZFBsYXllciIsIm9uUmVtb3ZlIiwib25SZW1vdmVQbGF5ZXIiLCJpb25TdGF0ZSIsImpvaW5Jb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJkYXRhIiwiZ2V0QXZhdGFyIiwiYXZhdGFySWQiLCJhdmF0YXJzIiwiZW50cmllcyIsImkiLCJsZW5ndGgiLCJpZCIsImdldEF2YXRhclNyYyIsImF2YXRhciIsImdsdGZzIiwib25EYXRhIiwidHlwZSIsIm1lc3NhZ2UiLCJmcm9tIiwiZnJvemVuIiwic3RvcmVNZXNzYWdlIiwic2VuZENoYXRNc2ciLCJzZW5kIiwicGxheWVyIiwib25DaGFuZ2UiLCJjaGFuZ2VzIiwiZm9yRWFjaCIsImNoYW5nZSIsImZpZWxkIiwib25DaGFuZ2VQcm9maWxlIiwidmFsdWUiLCJwcmV2aW91c1ZhbHVlIiwib25DaGFuZ2VQcmVzZW5jZSIsInByb2ZpbGUiLCJkaXNwbGF5TmFtZSIsIndpbmRvdyIsIkFQUCIsInN0b3JlIiwidXBkYXRlIiwiZGV0YWlsIiwiZG9jdW1lbnQiLCJib2R5IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwicHJldlByb2ZpbGUiLCJwcmV2aW91cyIsInByZXNlbmNlIiwicHJldlByZXNlbmNlIiwic2VuZEVudGVyaW5nIiwiZW50ZXJpbmciLCJzZW5kRW50ZXJpbmdDYW5jZWxsZWQiLCJzZW5kRW50ZXJlZCIsInNjZW5lIiwibmFtZSIsIm9uUGVlckpvaW4iLCJvblBlZXJMZWF2ZSIsIm9uU3RyZWFtQWRkIiwib25TdHJlYW1SZW1vdmUiLCJvbkJyb2FkY2FzdCIsImxvY2FsU3RyZWFtIiwicHVibGlzaCIsInVpZCIsImluZm8iLCJtaWQiLCJzdWJzY3JpYmUiLCJzdHJlYW0iLCJyaWQiLCJzZXRNZWRpYVN0cmVhbSIsInVuc3Vic2NyaWJlIiwic2hvdWxkU3RhcnRDb25uZWN0aW9uVG8iLCJjbGllbnQiLCJnZXRDb25uZWN0U3RhdHVzIiwiY29ubmVjdGVkIiwiYWRhcHRlcnMiLCJJU19DT05ORUNURUQiLCJOT1RfQ09OTkVDVEVEIiwic2VuZERhdGEiLCJ0byIsInNlbmREYXRhR3VhcmFudGVlZCIsIndhcm4iLCJicm9hZGNhc3REYXRhIiwiYnJvYWRjYXN0RGF0YUd1YXJhbnRlZWQiLCJnZXRNZWRpYVN0cmVhbSIsImF1ZGlvUHJvbWlzZSIsInZpZGVvUHJvbWlzZSIsInByb21pc2UiLCJlIiwiYXVkaW9TdHJlYW0iLCJNZWRpYVN0cmVhbSIsImdldEF1ZGlvVHJhY2tzIiwidHJhY2siLCJhZGRUcmFjayIsInZpZGVvU3RyZWFtIiwiZ2V0VmlkZW9UcmFja3MiLCJzZXRMb2NhbE1lZGlhU3RyZWFtIiwidHJhY2tzIiwiZ2V0VHJhY2tzIiwibGVuIiwic3RvcCIsInVucHVibGlzaCIsIkxvY2FsU3RyZWFtIiwiZ2V0VXNlck1lZGlhIiwiZW5hYmxlTWljcm9waG9uZSIsImVuYWJsZWQiLCJ1bm11dGUiLCJtdXRlIiwidG9nZ2xlRnJlZXplIiwidW5mcmVlemUiLCJmcmVlemUiLCJmbHVzaFBlbmRpbmdVcGRhdGVzIiwibmV0d29ya0lkIiwiZ2V0UGVuZGluZ0RhdGEiLCJkYXRhVHlwZSIsInNvdXJjZSIsImNsZWFyIiwiZGF0YUZvclVwZGF0ZU11bHRpTWVzc2FnZSIsIm93bmVyIiwiaGFzIiwibCIsImQiLCJzdG9yZVNpbmdsZU1lc3NhZ2UiLCJpbmRleCIsInVuZGVmaW5lZCIsInNldCIsInN0b3JlZE1lc3NhZ2UiLCJnZXQiLCJzdG9yZWREYXRhIiwiaXNPdXRkYXRlZE1lc3NhZ2UiLCJsYXN0T3duZXJUaW1lIiwiaXNDb250ZW1wb3JhbmVvdXNNZXNzYWdlIiwiY3JlYXRlZFdoaWxlRnJvemVuIiwiaXNGaXJzdFN5bmMiLCJkZWxldGUiLCJjb21wb25lbnRzIiwiYmxvY2siLCJraW5kIiwid2hvbSIsImNsaWVudElkIiwidW5ibG9jayIsImRpc2Nvbm5lY3QiLCJsZWF2ZSIsInJlbW92ZUFsbExpc3RlbmVycyIsImlzRGlzY29ubmVjdGVkIiwic2V0UmVjb25uZWN0aW9uTGlzdGVuZXJzIiwicmVjb25uZWN0aW5nTGlzdGVuZXIiLCJyZWNvbm5lY3RlZExpc3RlbmVyIiwicmVjb25uZWN0aW9uRXJyb3JMaXN0ZW5lciIsIm9uUmVjb25uZWN0aW5nIiwib25SZWNvbm5lY3RlZCIsIm9uUmVjb25uZWN0aW9uRXJyb3IiLCJjbGllbnRTZW50VGltZSIsIkRhdGUiLCJub3ciLCJyZXMiLCJmZXRjaCIsImhyZWYiLCJtZXRob2QiLCJjYWNoZSIsInByZWNpc2lvbiIsInNlcnZlclJlY2VpdmVkVGltZSIsImhlYWRlcnMiLCJnZXRUaW1lIiwiY2xpZW50UmVjZWl2ZWRUaW1lIiwic2VydmVyVGltZSIsInRpbWVPZmZzZXQiLCJwdXNoIiwicmVkdWNlIiwiYWNjIiwib2Zmc2V0Iiwic2V0VGltZW91dCIsImdldFNlcnZlclRpbWUiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hTYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBc0Q7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbURBQW1EO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzREFBc0Q7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE9BQU8sYUFBYTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGFBQWE7QUFDM0MsbUNBQW1DLG1CQUFtQjtBQUN0RCwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QywyQ0FBMkMsRUFBRTtBQUMzRiwyQ0FBMkMsY0FBYyxFQUFFO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELE1BQU07QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0M7Ozs7Ozs7Ozs7OztBQ2pQYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFP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YUFBYSxFQUFFO0FBQ3BDO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbENEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDelZBLE9BQU8sVUFBVSxHQUFHLG1CQUFPLENBQUMsa0VBQWlCO0FBQzdDLGFBQWEsbUJBQU8sQ0FBQyx3REFBUTtBQUM3QiwyQkFBMkIsbUJBQU8sQ0FBQywwR0FBaUM7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkEscUJBQXFCLG1CQUFPLENBQUMsMERBQVc7QUFDeEMsY0FBYyxtQkFBTyxDQUFDLDRDQUFPO0FBQzdCLGVBQWUsbUJBQU8sQ0FBQyw2REFBVztBQUNsQyw2QkFBNkIsbUJBQU8sQ0FBQyx5RkFBeUI7QUFDOUQsZ0JBQWdCLG1CQUFPLENBQUMsK0RBQVk7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0NBQXdDLFVBQVU7QUFDbEQsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixjQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsYUFBYTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlLGtFQUFHLEU7Ozs7Ozs7Ozs7OztBQ3RObEI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7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QVgsRUFBMEMsSUFBSSxFQUFKLEdBQVMsSUFBbkQsRUFGOEIsQ0FFNEI7QUFDN0QsYUFIRCxNQUdPO0FBQ0gsdUJBQUtBLGdCQUFMO0FBQ0g7QUEvQm9CO0FBZ0N4Qjs7QUFFRDZMLG9CQUFnQjtBQUNaLGVBQU9uQixLQUFLQyxHQUFMLEtBQWEsS0FBSzNPLGFBQXpCO0FBQ0g7QUE3b0JtQzs7QUFncEJ4QzBDLElBQUlrSCxRQUFKLENBQWFrRyxRQUFiLENBQXNCLGNBQXRCLEVBQXNDM1Esa0JBQXRDLEU7Ozs7Ozs7Ozs7O0FDNXBCQSxlIiwiZmlsZSI6Imh1YnMtY29seXNldXMtaW9uLWFkYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkF1dGggPSBleHBvcnRzLlBsYXRmb3JtID0gdm9pZCAwO1xudmFyIGh0dHAgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIkBjb2x5c2V1cy9odHRwXCIpKTtcbnZhciBTdG9yYWdlXzEgPSByZXF1aXJlKFwiLi9TdG9yYWdlXCIpO1xudmFyIFRPS0VOX1NUT1JBR0UgPSBcImNvbHlzZXVzLWF1dGgtdG9rZW5cIjtcbnZhciBQbGF0Zm9ybTtcbihmdW5jdGlvbiAoUGxhdGZvcm0pIHtcbiAgICBQbGF0Zm9ybVtcImlvc1wiXSA9IFwiaW9zXCI7XG4gICAgUGxhdGZvcm1bXCJhbmRyb2lkXCJdID0gXCJhbmRyb2lkXCI7XG59KShQbGF0Zm9ybSA9IGV4cG9ydHMuUGxhdGZvcm0gfHwgKGV4cG9ydHMuUGxhdGZvcm0gPSB7fSkpO1xudmFyIEF1dGggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXV0aChlbmRwb2ludCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5kaXNwbGF5TmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5hdmF0YXJVcmwgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaXNBbm9ueW1vdXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZW1haWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubGFuZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy50aW1lem9uZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5tZXRhZGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5kZXZpY2VzID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmZhY2Vib29rSWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudHdpdHRlcklkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmdvb2dsZUlkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmdhbWVDZW50ZXJJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zdGVhbUlkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmZyaWVuZElkcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5ibG9ja2VkVXNlcklkcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jcmVhdGVkQXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudXBkYXRlZEF0ID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBhdXRoIHRva2VuXG4gICAgICAgIHRoaXMudG9rZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSBlbmRwb2ludC5yZXBsYWNlKFwid3NcIiwgXCJodHRwXCIpO1xuICAgICAgICBTdG9yYWdlXzEuZ2V0SXRlbShUT0tFTl9TVE9SQUdFLCBmdW5jdGlvbiAodG9rZW4pIHsgcmV0dXJuIF90aGlzLnRva2VuID0gdG9rZW47IH0pO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXV0aC5wcm90b3R5cGUsIFwiaGFzVG9rZW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAhIXRoaXMudG9rZW47XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBBdXRoLnByb3RvdHlwZS5sb2dpbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBxdWVyeVBhcmFtcywgZGF0YSwgYXR0cjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnRva2VuID0gdGhpcy50b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVxdWVzdCgncG9zdCcsICcvYXV0aCcsIHF1ZXJ5UGFyYW1zKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgJiBjYWNoZSB0b2tlblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IGRhdGEudG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9yYWdlXzEuc2V0SXRlbShUT0tFTl9TVE9SQUdFLCB0aGlzLnRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYXR0ciBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1thdHRyXSA9IGRhdGFbYXR0cl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlclBpbmdTZXJ2aWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXV0aC5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJlcXVlc3QoJ3B1dCcsICcvYXV0aCcsIHt9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IHRoaXMuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyVXJsOiB0aGlzLmF2YXRhclVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nOiB0aGlzLmxhbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXpvbmU6IHRoaXMudGltZXpvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBdXRoLnByb3RvdHlwZS5nZXRGcmllbmRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVxdWVzdCgnZ2V0JywgJy9mcmllbmRzL2FsbCcpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgKF9hLnNlbnQoKSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEF1dGgucHJvdG90eXBlLmdldE9ubGluZUZyaWVuZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5yZXF1ZXN0KCdnZXQnLCAnL2ZyaWVuZHMvb25saW5lJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCAoX2Euc2VudCgpKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXV0aC5wcm90b3R5cGUuZ2V0RnJpZW5kUmVxdWVzdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5yZXF1ZXN0KCdnZXQnLCAnL2ZyaWVuZHMvcmVxdWVzdHMnKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIChfYS5zZW50KCkpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBdXRoLnByb3RvdHlwZS5zZW5kRnJpZW5kUmVxdWVzdCA9IGZ1bmN0aW9uIChmcmllbmRJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVxdWVzdCgncG9zdCcsICcvZnJpZW5kcy9yZXF1ZXN0cycsIHsgdXNlcklkOiBmcmllbmRJZCB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIChfYS5zZW50KCkpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBdXRoLnByb3RvdHlwZS5hY2NlcHRGcmllbmRSZXF1ZXN0ID0gZnVuY3Rpb24gKGZyaWVuZElkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5yZXF1ZXN0KCdwdXQnLCAnL2ZyaWVuZHMvcmVxdWVzdHMnLCB7IHVzZXJJZDogZnJpZW5kSWQgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCAoX2Euc2VudCgpKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXV0aC5wcm90b3R5cGUuZGVjbGluZUZyaWVuZFJlcXVlc3QgPSBmdW5jdGlvbiAoZnJpZW5kSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJlcXVlc3QoJ2RlbCcsICcvZnJpZW5kcy9yZXF1ZXN0cycsIHsgdXNlcklkOiBmcmllbmRJZCB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIChfYS5zZW50KCkpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBdXRoLnByb3RvdHlwZS5ibG9ja1VzZXIgPSBmdW5jdGlvbiAoZnJpZW5kSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJlcXVlc3QoJ3Bvc3QnLCAnL2ZyaWVuZHMvYmxvY2snLCB7IHVzZXJJZDogZnJpZW5kSWQgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCAoX2Euc2VudCgpKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXV0aC5wcm90b3R5cGUudW5ibG9ja1VzZXIgPSBmdW5jdGlvbiAoZnJpZW5kSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJlcXVlc3QoJ3B1dCcsICcvZnJpZW5kcy9ibG9jaycsIHsgdXNlcklkOiBmcmllbmRJZCB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIChfYS5zZW50KCkpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBdXRoLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gKG1ldGhvZCwgc2VnbWVudHMsIHF1ZXJ5LCBib2R5LCBoZWFkZXJzKSB7XG4gICAgICAgIGlmIChxdWVyeSA9PT0gdm9pZCAwKSB7IHF1ZXJ5ID0ge307IH1cbiAgICAgICAgaWYgKGhlYWRlcnMgPT09IHZvaWQgMCkgeyBoZWFkZXJzID0ge307IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHF1ZXJ5UGFyYW1zLCBuYW1lXzEsIHF1ZXJ5U3RyaW5nLCBvcHRzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1snQWNjZXB0J10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIHRoaXMudG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChuYW1lXzEgaW4gcXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5wdXNoKG5hbWVfMSArIFwiPVwiICsgcXVlcnlbbmFtZV8xXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0cmluZyA9IChxdWVyeVBhcmFtcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCI/XCIgKyBxdWVyeVBhcmFtcy5qb2luKFwiJlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzID0geyBoZWFkZXJzOiBoZWFkZXJzIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMuYm9keSA9IGJvZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBodHRwW21ldGhvZF0oXCJcIiArIHRoaXMuZW5kcG9pbnQgKyBzZWdtZW50cyArIHF1ZXJ5U3RyaW5nLCBvcHRzKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIChfYS5zZW50KCkpLmRhdGFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEF1dGgucHJvdG90eXBlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50b2tlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgU3RvcmFnZV8xLnJlbW92ZUl0ZW0oVE9LRU5fU1RPUkFHRSk7XG4gICAgICAgIHRoaXMudW5yZWdpc3RlclBpbmdTZXJ2aWNlKCk7XG4gICAgfTtcbiAgICBBdXRoLnByb3RvdHlwZS5yZWdpc3RlclBpbmdTZXJ2aWNlID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRpbWVvdXQgPT09IHZvaWQgMCkgeyB0aW1lb3V0ID0gMTUwMDA7IH1cbiAgICAgICAgdGhpcy51bnJlZ2lzdGVyUGluZ1NlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5rZWVwT25saW5lSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yZXF1ZXN0KCdnZXQnLCAnL2F1dGgnKTsgfSwgdGltZW91dCk7XG4gICAgfTtcbiAgICBBdXRoLnByb3RvdHlwZS51bnJlZ2lzdGVyUGluZ1NlcnZpY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5rZWVwT25saW5lSW50ZXJ2YWwpO1xuICAgIH07XG4gICAgcmV0dXJuIEF1dGg7XG59KCkpO1xuZXhwb3J0cy5BdXRoID0gQXV0aDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DbGllbnQgPSBleHBvcnRzLk1hdGNoTWFrZUVycm9yID0gdm9pZCAwO1xudmFyIGh0dHBfMSA9IHJlcXVpcmUoXCJAY29seXNldXMvaHR0cFwiKTtcbnZhciBTZXJ2ZXJFcnJvcl8xID0gcmVxdWlyZShcIi4vZXJyb3JzL1NlcnZlckVycm9yXCIpO1xudmFyIFJvb21fMSA9IHJlcXVpcmUoXCIuL1Jvb21cIik7XG52YXIgQXV0aF8xID0gcmVxdWlyZShcIi4vQXV0aFwiKTtcbnZhciBQdXNoXzEgPSByZXF1aXJlKFwiLi9QdXNoXCIpO1xudmFyIE1hdGNoTWFrZUVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNYXRjaE1ha2VFcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNYXRjaE1ha2VFcnJvcihtZXNzYWdlLCBjb2RlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1lc3NhZ2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIE1hdGNoTWFrZUVycm9yLnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIE1hdGNoTWFrZUVycm9yO1xufShFcnJvcikpO1xuZXhwb3J0cy5NYXRjaE1ha2VFcnJvciA9IE1hdGNoTWFrZUVycm9yO1xudmFyIENsaWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDbGllbnQoZW5kcG9pbnQpIHtcbiAgICAgICAgaWYgKGVuZHBvaW50ID09PSB2b2lkIDApIHsgZW5kcG9pbnQgPSBsb2NhdGlvbi5wcm90b2NvbC5yZXBsYWNlKFwiaHR0cFwiLCBcIndzXCIpICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdG5hbWUgKyAobG9jYXRpb24ucG9ydCAmJiBcIjpcIiArIGxvY2F0aW9uLnBvcnQpOyB9XG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSBlbmRwb2ludDtcbiAgICAgICAgdGhpcy5hdXRoID0gbmV3IEF1dGhfMS5BdXRoKHRoaXMuZW5kcG9pbnQpO1xuICAgICAgICB0aGlzLnB1c2ggPSBuZXcgUHVzaF8xLlB1c2godGhpcy5lbmRwb2ludCk7XG4gICAgfVxuICAgIENsaWVudC5wcm90b3R5cGUuam9pbk9yQ3JlYXRlID0gZnVuY3Rpb24gKHJvb21OYW1lLCBvcHRpb25zLCByb290U2NoZW1hKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jcmVhdGVNYXRjaE1ha2VSZXF1ZXN0KCdqb2luT3JDcmVhdGUnLCByb29tTmFtZSwgb3B0aW9ucywgcm9vdFNjaGVtYSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENsaWVudC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKHJvb21OYW1lLCBvcHRpb25zLCByb290U2NoZW1hKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jcmVhdGVNYXRjaE1ha2VSZXF1ZXN0KCdjcmVhdGUnLCByb29tTmFtZSwgb3B0aW9ucywgcm9vdFNjaGVtYSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENsaWVudC5wcm90b3R5cGUuam9pbiA9IGZ1bmN0aW9uIChyb29tTmFtZSwgb3B0aW9ucywgcm9vdFNjaGVtYSkge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY3JlYXRlTWF0Y2hNYWtlUmVxdWVzdCgnam9pbicsIHJvb21OYW1lLCBvcHRpb25zLCByb290U2NoZW1hKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ2xpZW50LnByb3RvdHlwZS5qb2luQnlJZCA9IGZ1bmN0aW9uIChyb29tSWQsIG9wdGlvbnMsIHJvb3RTY2hlbWEpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNyZWF0ZU1hdGNoTWFrZVJlcXVlc3QoJ2pvaW5CeUlkJywgcm9vbUlkLCBvcHRpb25zLCByb290U2NoZW1hKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ2xpZW50LnByb3RvdHlwZS5yZWNvbm5lY3QgPSBmdW5jdGlvbiAocm9vbUlkLCBzZXNzaW9uSWQsIHJvb3RTY2hlbWEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNyZWF0ZU1hdGNoTWFrZVJlcXVlc3QoJ2pvaW5CeUlkJywgcm9vbUlkLCB7IHNlc3Npb25JZDogc2Vzc2lvbklkIH0sIHJvb3RTY2hlbWEpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDbGllbnQucHJvdG90eXBlLmdldEF2YWlsYWJsZVJvb21zID0gZnVuY3Rpb24gKHJvb21OYW1lKSB7XG4gICAgICAgIGlmIChyb29tTmFtZSA9PT0gdm9pZCAwKSB7IHJvb21OYW1lID0gXCJcIjsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdXJsO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdGhpcy5lbmRwb2ludC5yZXBsYWNlKFwid3NcIiwgXCJodHRwXCIpICsgXCIvbWF0Y2htYWtlL1wiICsgcm9vbU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBodHRwXzEuZ2V0KHVybCwgeyBoZWFkZXJzOiB7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicgfSB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIChfYS5zZW50KCkpLmRhdGFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENsaWVudC5wcm90b3R5cGUuY29uc3VtZVNlYXRSZXNlcnZhdGlvbiA9IGZ1bmN0aW9uIChyZXNwb25zZSwgcm9vdFNjaGVtYSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcm9vbTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICByb29tID0gdGhpcy5jcmVhdGVSb29tKHJlc3BvbnNlLnJvb20ubmFtZSwgcm9vdFNjaGVtYSk7XG4gICAgICAgICAgICAgICAgcm9vbS5pZCA9IHJlc3BvbnNlLnJvb20ucm9vbUlkO1xuICAgICAgICAgICAgICAgIHJvb20uc2Vzc2lvbklkID0gcmVzcG9uc2Uuc2Vzc2lvbklkO1xuICAgICAgICAgICAgICAgIHJvb20uY29ubmVjdCh0aGlzLmJ1aWxkRW5kcG9pbnQocmVzcG9uc2Uucm9vbSwgeyBzZXNzaW9uSWQ6IHJvb20uc2Vzc2lvbklkIH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uRXJyb3IgPSBmdW5jdGlvbiAoY29kZSwgbWVzc2FnZSkgeyByZXR1cm4gcmVqZWN0KG5ldyBTZXJ2ZXJFcnJvcl8xLlNlcnZlckVycm9yKGNvZGUsIG1lc3NhZ2UpKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb20ub25FcnJvci5vbmNlKG9uRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vbS5vbkpvaW4ub25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vbS5vbkVycm9yLnJlbW92ZShvbkVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvb20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENsaWVudC5wcm90b3R5cGUuY3JlYXRlTWF0Y2hNYWtlUmVxdWVzdCA9IGZ1bmN0aW9uIChtZXRob2QsIHJvb21OYW1lLCBvcHRpb25zLCByb290U2NoZW1hKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB1cmwsIHJlc3BvbnNlO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdGhpcy5lbmRwb2ludC5yZXBsYWNlKFwid3NcIiwgXCJodHRwXCIpICsgXCIvbWF0Y2htYWtlL1wiICsgbWV0aG9kICsgXCIvXCIgKyByb29tTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgZm9yd2FyZCBhdXRoIHRva2VuLCBpZiBwcmVzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoLmhhc1Rva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50b2tlbiA9IHRoaXMuYXV0aC50b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGh0dHBfMS5wb3N0KHVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAoX2Euc2VudCgpKS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IE1hdGNoTWFrZUVycm9yKHJlc3BvbnNlLmVycm9yLCByZXNwb25zZS5jb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLmNvbnN1bWVTZWF0UmVzZXJ2YXRpb24ocmVzcG9uc2UsIHJvb3RTY2hlbWEpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDbGllbnQucHJvdG90eXBlLmNyZWF0ZVJvb20gPSBmdW5jdGlvbiAocm9vbU5hbWUsIHJvb3RTY2hlbWEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSb29tXzEuUm9vbShyb29tTmFtZSwgcm9vdFNjaGVtYSk7XG4gICAgfTtcbiAgICBDbGllbnQucHJvdG90eXBlLmJ1aWxkRW5kcG9pbnQgPSBmdW5jdGlvbiAocm9vbSwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB2YXIgcGFyYW1zID0gW107XG4gICAgICAgIGZvciAodmFyIG5hbWVfMSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZV8xKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyYW1zLnB1c2gobmFtZV8xICsgXCI9XCIgKyBvcHRpb25zW25hbWVfMV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVuZHBvaW50ICsgXCIvXCIgKyByb29tLnByb2Nlc3NJZCArIFwiL1wiICsgcm9vbS5yb29tSWQgKyBcIj9cIiArIHBhcmFtcy5qb2luKCcmJyk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2xpZW50O1xufSgpKTtcbmV4cG9ydHMuQ2xpZW50ID0gQ2xpZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29ubmVjdGlvbiA9IHZvaWQgMDtcbnZhciB3ZWJzb2NrZXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQGdhbWVzdGRpby93ZWJzb2NrZXRcIikpO1xudmFyIENvbm5lY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbm5lY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29ubmVjdGlvbih1cmwsIGF1dG9Db25uZWN0KSB7XG4gICAgICAgIGlmIChhdXRvQ29ubmVjdCA9PT0gdm9pZCAwKSB7IGF1dG9Db25uZWN0ID0gdHJ1ZTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB1cmwsIHVuZGVmaW5lZCwgeyBjb25uZWN0OiBhdXRvQ29ubmVjdCB9KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fZW5xdWV1ZWRDYWxscyA9IFtdO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENvbm5lY3Rpb24ucHJvdG90eXBlLm9uT3BlbkNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUub25PcGVuQ2FsbGJhY2suY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5iaW5hcnlUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgICAgaWYgKHRoaXMuX2VucXVldWVkQ2FsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuX2VucXVldWVkQ2FsbHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9iID0gX2FbX2ldLCBtZXRob2QgPSBfYlswXSwgYXJncyA9IF9iWzFdO1xuICAgICAgICAgICAgICAgIHRoaXNbbWV0aG9kXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNsZWFyIGVucXVldWVkIGNhbGxzLlxuICAgICAgICAgICAgdGhpcy5fZW5xdWV1ZWRDYWxscyA9IFtdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMud3MucmVhZHlTdGF0ZSA9PT0gd2Vic29ja2V0XzEuZGVmYXVsdC5PUEVOKSB7XG4gICAgICAgICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuc2VuZC5jYWxsKHRoaXMsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnNlbmQuY2FsbCh0aGlzLCAobmV3IFVpbnQ4QXJyYXkoZGF0YSkpLmJ1ZmZlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBXZWJTb2NrZXQgbm90IGNvbm5lY3RlZC5cbiAgICAgICAgICAgIC8vIEVucXVldWUgZGF0YSB0byBiZSBzZW50IHdoZW4gcmVhZHlTdGF0ZSA9PSBPUEVOXG4gICAgICAgICAgICB0aGlzLl9lbnF1ZXVlZENhbGxzLnB1c2goWydzZW5kJywgW2RhdGFdXSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBDb25uZWN0aW9uO1xufSh3ZWJzb2NrZXRfMS5kZWZhdWx0KSk7XG5leHBvcnRzLkNvbm5lY3Rpb24gPSBDb25uZWN0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBVc2UgY29kZXMgYmV0d2VlbiAwfjEyNyBmb3IgbGVzc2VyIHRocm91Z2hwdXQgKDEgYnl0ZSlcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXRmOExlbmd0aCA9IGV4cG9ydHMudXRmOFJlYWQgPSBleHBvcnRzLkVycm9yQ29kZSA9IGV4cG9ydHMuUHJvdG9jb2wgPSB2b2lkIDA7XG52YXIgUHJvdG9jb2w7XG4oZnVuY3Rpb24gKFByb3RvY29sKSB7XG4gICAgLy8gUm9vbS1yZWxhdGVkICgxMH4xOSlcbiAgICBQcm90b2NvbFtQcm90b2NvbFtcIkhBTkRTSEFLRVwiXSA9IDldID0gXCJIQU5EU0hBS0VcIjtcbiAgICBQcm90b2NvbFtQcm90b2NvbFtcIkpPSU5fUk9PTVwiXSA9IDEwXSA9IFwiSk9JTl9ST09NXCI7XG4gICAgUHJvdG9jb2xbUHJvdG9jb2xbXCJFUlJPUlwiXSA9IDExXSA9IFwiRVJST1JcIjtcbiAgICBQcm90b2NvbFtQcm90b2NvbFtcIkxFQVZFX1JPT01cIl0gPSAxMl0gPSBcIkxFQVZFX1JPT01cIjtcbiAgICBQcm90b2NvbFtQcm90b2NvbFtcIlJPT01fREFUQVwiXSA9IDEzXSA9IFwiUk9PTV9EQVRBXCI7XG4gICAgUHJvdG9jb2xbUHJvdG9jb2xbXCJST09NX1NUQVRFXCJdID0gMTRdID0gXCJST09NX1NUQVRFXCI7XG4gICAgUHJvdG9jb2xbUHJvdG9jb2xbXCJST09NX1NUQVRFX1BBVENIXCJdID0gMTVdID0gXCJST09NX1NUQVRFX1BBVENIXCI7XG4gICAgUHJvdG9jb2xbUHJvdG9jb2xbXCJST09NX0RBVEFfU0NIRU1BXCJdID0gMTZdID0gXCJST09NX0RBVEFfU0NIRU1BXCI7XG59KShQcm90b2NvbCA9IGV4cG9ydHMuUHJvdG9jb2wgfHwgKGV4cG9ydHMuUHJvdG9jb2wgPSB7fSkpO1xudmFyIEVycm9yQ29kZTtcbihmdW5jdGlvbiAoRXJyb3JDb2RlKSB7XG4gICAgRXJyb3JDb2RlW0Vycm9yQ29kZVtcIk1BVENITUFLRV9OT19IQU5ETEVSXCJdID0gNDIxMF0gPSBcIk1BVENITUFLRV9OT19IQU5ETEVSXCI7XG4gICAgRXJyb3JDb2RlW0Vycm9yQ29kZVtcIk1BVENITUFLRV9JTlZBTElEX0NSSVRFUklBXCJdID0gNDIxMV0gPSBcIk1BVENITUFLRV9JTlZBTElEX0NSSVRFUklBXCI7XG4gICAgRXJyb3JDb2RlW0Vycm9yQ29kZVtcIk1BVENITUFLRV9JTlZBTElEX1JPT01fSURcIl0gPSA0MjEyXSA9IFwiTUFUQ0hNQUtFX0lOVkFMSURfUk9PTV9JRFwiO1xuICAgIEVycm9yQ29kZVtFcnJvckNvZGVbXCJNQVRDSE1BS0VfVU5IQU5ETEVEXCJdID0gNDIxM10gPSBcIk1BVENITUFLRV9VTkhBTkRMRURcIjtcbiAgICBFcnJvckNvZGVbRXJyb3JDb2RlW1wiTUFUQ0hNQUtFX0VYUElSRURcIl0gPSA0MjE0XSA9IFwiTUFUQ0hNQUtFX0VYUElSRURcIjtcbiAgICBFcnJvckNvZGVbRXJyb3JDb2RlW1wiQVVUSF9GQUlMRURcIl0gPSA0MjE1XSA9IFwiQVVUSF9GQUlMRURcIjtcbiAgICBFcnJvckNvZGVbRXJyb3JDb2RlW1wiQVBQTElDQVRJT05fRVJST1JcIl0gPSA0MjE2XSA9IFwiQVBQTElDQVRJT05fRVJST1JcIjtcbn0pKEVycm9yQ29kZSA9IGV4cG9ydHMuRXJyb3JDb2RlIHx8IChleHBvcnRzLkVycm9yQ29kZSA9IHt9KSk7XG5mdW5jdGlvbiB1dGY4UmVhZCh2aWV3LCBvZmZzZXQpIHtcbiAgICB2YXIgbGVuZ3RoID0gdmlld1tvZmZzZXQrK107XG4gICAgdmFyIHN0cmluZyA9ICcnLCBjaHIgPSAwO1xuICAgIGZvciAodmFyIGkgPSBvZmZzZXQsIGVuZCA9IG9mZnNldCArIGxlbmd0aDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgIHZhciBieXRlID0gdmlld1tpXTtcbiAgICAgICAgaWYgKChieXRlICYgMHg4MCkgPT09IDB4MDApIHtcbiAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChieXRlICYgMHhlMCkgPT09IDB4YzApIHtcbiAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYnl0ZSAmIDB4MWYpIDw8IDYpIHxcbiAgICAgICAgICAgICAgICAodmlld1srK2ldICYgMHgzZikpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChieXRlICYgMHhmMCkgPT09IDB4ZTApIHtcbiAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYnl0ZSAmIDB4MGYpIDw8IDEyKSB8XG4gICAgICAgICAgICAgICAgKCh2aWV3WysraV0gJiAweDNmKSA8PCA2KSB8XG4gICAgICAgICAgICAgICAgKCh2aWV3WysraV0gJiAweDNmKSA8PCAwKSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGJ5dGUgJiAweGY4KSA9PT0gMHhmMCkge1xuICAgICAgICAgICAgY2hyID0gKChieXRlICYgMHgwNykgPDwgMTgpIHxcbiAgICAgICAgICAgICAgICAoKHZpZXdbKytpXSAmIDB4M2YpIDw8IDEyKSB8XG4gICAgICAgICAgICAgICAgKCh2aWV3WysraV0gJiAweDNmKSA8PCA2KSB8XG4gICAgICAgICAgICAgICAgKCh2aWV3WysraV0gJiAweDNmKSA8PCAwKTtcbiAgICAgICAgICAgIGlmIChjaHIgPj0gMHgwMTAwMDApIHsgLy8gc3Vycm9nYXRlIHBhaXJcbiAgICAgICAgICAgICAgICBjaHIgLT0gMHgwMTAwMDA7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGNociA+Pj4gMTApICsgMHhEODAwLCAoY2hyICYgMHgzRkYpICsgMHhEQzAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYnl0ZSAnICsgYnl0ZS50b1N0cmluZygxNikpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xufVxuZXhwb3J0cy51dGY4UmVhZCA9IHV0ZjhSZWFkO1xuLy8gRmFzdGVyIGZvciBzaG9ydCBzdHJpbmdzIHRoYW4gQnVmZmVyLmJ5dGVMZW5ndGhcbmZ1bmN0aW9uIHV0ZjhMZW5ndGgoc3RyKSB7XG4gICAgaWYgKHN0ciA9PT0gdm9pZCAwKSB7IHN0ciA9ICcnOyB9XG4gICAgdmFyIGMgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDwgMHg4MCkge1xuICAgICAgICAgICAgbGVuZ3RoICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA8IDB4ODAwKSB7XG4gICAgICAgICAgICBsZW5ndGggKz0gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjIDwgMHhkODAwIHx8IGMgPj0gMHhlMDAwKSB7XG4gICAgICAgICAgICBsZW5ndGggKz0gMztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGxlbmd0aCArPSA0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsZW5ndGggKyAxO1xufVxuZXhwb3J0cy51dGY4TGVuZ3RoID0gdXRmOExlbmd0aDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUHVzaCA9IHZvaWQgMDtcbnZhciBQdXNoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFB1c2goZW5kcG9pbnQpIHtcbiAgICAgICAgdGhpcy5lbmRwb2ludCA9IGVuZHBvaW50LnJlcGxhY2UoXCJ3c1wiLCBcImh0dHBcIik7XG4gICAgfVxuICAgIFB1c2gucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJlZ2lzdGVyU2VydmljZVdvcmtlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5yZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIDtcbiAgICBQdXNoLnByb3RvdHlwZS5yZWdpc3RlclNlcnZpY2VXb3JrZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIodGhpcy5lbmRwb2ludCArIFwiL3B1c2hcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFB1c2gucHJvdG90eXBlLnJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcGVybWlzc2lvbjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgd2luZG93W1wiTm90aWZpY2F0aW9uXCJdLnJlcXVlc3RQZXJtaXNzaW9uKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWUgb2YgcGVybWlzc2lvbiBjYW4gYmUgJ2dyYW50ZWQnLCAnZGVmYXVsdCcsICdkZW5pZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBncmFudGVkOiB1c2VyIGhhcyBhY2NlcHRlZCB0aGUgcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdDogdXNlciBoYXMgZGlzbWlzc2VkIHRoZSBub3RpZmljYXRpb24gcGVybWlzc2lvbiBwb3B1cCBieSBjbGlja2luZyBvbiB4XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZW5pZWQ6IHVzZXIgaGFzIGRlbmllZCB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwZXJtaXNzaW9uICE9PSBcImdyYW50ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBlcm1pc3Npb24gbm90IGdyYW50ZWQgZm9yIE5vdGlmaWNhdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBQdXNoLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gU2VydmljZSBXb3JrZXIgc3VwcG9ydCFcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoXCJQdXNoTWFuYWdlclwiIGluIHdpbmRvdykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIFB1c2ggQVBJIFN1cHBvcnQhXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gUHVzaDtcbn0oKSk7XG5leHBvcnRzLlB1c2ggPSBQdXNoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Sb29tID0gdm9pZCAwO1xudmFyIG1zZ3BhY2sgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbXNncGFja1wiKSk7XG52YXIgc3Ryb25nX2V2ZW50c18xID0gcmVxdWlyZShcInN0cm9uZy1ldmVudHNcIik7XG52YXIgbmFub2V2ZW50c18xID0gcmVxdWlyZShcIm5hbm9ldmVudHNcIik7XG52YXIgQ29ubmVjdGlvbl8xID0gcmVxdWlyZShcIi4vQ29ubmVjdGlvblwiKTtcbnZhciBTZXJpYWxpemVyXzEgPSByZXF1aXJlKFwiLi9zZXJpYWxpemVyL1NlcmlhbGl6ZXJcIik7XG52YXIgUHJvdG9jb2xfMSA9IHJlcXVpcmUoXCIuL1Byb3RvY29sXCIpO1xudmFyIGVuY29kZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiQGNvbHlzZXVzL3NjaGVtYS9saWIvZW5jb2RpbmcvZW5jb2RlXCIpKTtcbnZhciBkZWNvZGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIkBjb2x5c2V1cy9zY2hlbWEvbGliL2VuY29kaW5nL2RlY29kZVwiKSk7XG52YXIgUm9vbSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSb29tKG5hbWUsIHJvb3RTY2hlbWEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gUHVibGljIHNpZ25hbHNcbiAgICAgICAgdGhpcy5vbkpvaW4gPSBzdHJvbmdfZXZlbnRzXzEuY3JlYXRlU2lnbmFsKCk7XG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSA9IHN0cm9uZ19ldmVudHNfMS5jcmVhdGVTaWduYWwoKTtcbiAgICAgICAgdGhpcy5vbkVycm9yID0gc3Ryb25nX2V2ZW50c18xLmNyZWF0ZVNpZ25hbCgpO1xuICAgICAgICB0aGlzLm9uTGVhdmUgPSBzdHJvbmdfZXZlbnRzXzEuY3JlYXRlU2lnbmFsKCk7XG4gICAgICAgIHRoaXMuaGFzSm9pbmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25NZXNzYWdlSGFuZGxlcnMgPSBuYW5vZXZlbnRzXzEuY3JlYXRlTmFub0V2ZW50cygpO1xuICAgICAgICB0aGlzLmlkID0gbnVsbDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgaWYgKHJvb3RTY2hlbWEpIHtcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsaXplciA9IG5ldyAoU2VyaWFsaXplcl8xLmdldFNlcmlhbGl6ZXIoXCJzY2hlbWFcIikpO1xuICAgICAgICAgICAgdGhpcy5yb290U2NoZW1hID0gcm9vdFNjaGVtYTtcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsaXplci5zdGF0ZSA9IG5ldyByb290U2NoZW1hKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgZGVmYXVsdCBzZXJpYWxpemVyLiBpdCBzaG91bGQgYXJyaXZlIG9ubHkgYWZ0ZXIgSk9JTl9ST09NLlxuICAgICAgICAgICAgdGhpcy5zZXJpYWxpemVyID0gbmV3IChTZXJpYWxpemVyXzEuZ2V0U2VyaWFsaXplcihcImZvc3NpbC1kZWx0YVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkVycm9yKGZ1bmN0aW9uIChjb2RlLCBtZXNzYWdlKSB7IHJldHVybiBjb25zb2xlLmVycm9yKFwiY29seXNldXMuanMgLSBvbkVycm9yID0+IChcIiArIGNvZGUgKyBcIikgXCIgKyBtZXNzYWdlKTsgfSk7XG4gICAgICAgIHRoaXMub25MZWF2ZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTsgfSk7XG4gICAgfVxuICAgIFJvb20ucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoZW5kcG9pbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb25fMS5Db25uZWN0aW9uKGVuZHBvaW50LCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5yZWNvbm5lY3RFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbm1lc3NhZ2UgPSB0aGlzLm9uTWVzc2FnZUNhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICghX3RoaXMuaGFzSm9pbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJvb20gY29ubmVjdGlvbiB3YXMgY2xvc2VkIHVuZXhwZWN0ZWRseSAoXCIgKyBlLmNvZGUgKyBcIik6IFwiICsgZS5yZWFzb24pO1xuICAgICAgICAgICAgICAgIF90aGlzLm9uRXJyb3IuaW52b2tlKGUuY29kZSwgZS5yZWFzb24pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLm9uTGVhdmUuaW52b2tlKGUuY29kZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJvb20sIG9uRXJyb3IgKFwiICsgZS5jb2RlICsgXCIpOiBcIiArIGUucmVhc29uKTtcbiAgICAgICAgICAgIF90aGlzLm9uRXJyb3IuaW52b2tlKGUuY29kZSwgZS5yZWFzb24pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ub3BlbigpO1xuICAgIH07XG4gICAgUm9vbS5wcm90b3R5cGUubGVhdmUgPSBmdW5jdGlvbiAoY29uc2VudGVkKSB7XG4gICAgICAgIGlmIChjb25zZW50ZWQgPT09IHZvaWQgMCkgeyBjb25zZW50ZWQgPSB0cnVlOyB9XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChjb25zZW50ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24uc2VuZChbUHJvdG9jb2xfMS5Qcm90b2NvbC5MRUFWRV9ST09NXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25MZWF2ZS5pbnZva2UoNDAwMCk7IC8vIFwiY29uc2VudGVkXCIgY29kZVxuICAgICAgICB9XG4gICAgfTtcbiAgICBSb29tLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAodHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25NZXNzYWdlSGFuZGxlcnMub24odGhpcy5nZXRNZXNzYWdlSGFuZGxlcktleSh0eXBlKSwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgUm9vbS5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICh0eXBlLCBtZXNzYWdlKSB7XG4gICAgICAgIHZhciBpbml0aWFsQnl0ZXMgPSBbUHJvdG9jb2xfMS5Qcm90b2NvbC5ST09NX0RBVEFdO1xuICAgICAgICBpZiAodHlwZW9mICh0eXBlKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgZW5jb2RlLnN0cmluZyhpbml0aWFsQnl0ZXMsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW5jb2RlLm51bWJlcihpbml0aWFsQnl0ZXMsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhcnI7XG4gICAgICAgIGlmIChtZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBlbmNvZGVkID0gbXNncGFjay5lbmNvZGUobWVzc2FnZSk7XG4gICAgICAgICAgICBhcnIgPSBuZXcgVWludDhBcnJheShpbml0aWFsQnl0ZXMubGVuZ3RoICsgZW5jb2RlZC5ieXRlTGVuZ3RoKTtcbiAgICAgICAgICAgIGFyci5zZXQobmV3IFVpbnQ4QXJyYXkoaW5pdGlhbEJ5dGVzKSwgMCk7XG4gICAgICAgICAgICBhcnIuc2V0KG5ldyBVaW50OEFycmF5KGVuY29kZWQpLCBpbml0aWFsQnl0ZXMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFyciA9IG5ldyBVaW50OEFycmF5KGluaXRpYWxCeXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLnNlbmQoYXJyLmJ1ZmZlcik7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUm9vbS5wcm90b3R5cGUsIFwic3RhdGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlcmlhbGl6ZXIuZ2V0U3RhdGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIFRPRE86IGRlcHJlY2F0ZSAvIG1vdmUgc29tZXdoZXJlIGVsc2VcbiAgICAvLyB0aGlzIG1ldGhvZCBpcyB1c2VmdWwgb25seSBmb3IgRm9zc2lsRGVsdGFTZXJpYWxpemVyXG4gICAgUm9vbS5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gKHNlZ21lbnRzLCBjYWxsYmFjaywgaW1tZWRpYXRlKSB7XG4gICAgICAgIGlmICh0aGlzLnNlcmlhbGl6ZXJJZCA9PT0gXCJzY2hlbWFcIikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIidcIiArIHRoaXMuc2VyaWFsaXplcklkICsgXCInIHNlcmlhbGl6ZXIgZG9lc24ndCBzdXBwb3J0IC5saXN0ZW4oKSBtZXRob2QgaGVyZS5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuc2VyaWFsaXplcklkKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJyb29tLkxpc3RlbigpIHNob3VsZCBiZSBjYWxsZWQgYWZ0ZXIgcm9vbS5vbkpvaW4gaGFzIGJlZW4gY2FsbGVkIChERVBSRUNBVElPTiBXQVJOSU5HKVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVyLmFwaS5saXN0ZW4oc2VnbWVudHMsIGNhbGxiYWNrLCBpbW1lZGlhdGUpO1xuICAgIH07XG4gICAgLy8gVE9ETzogZGVwcmVjYXRlIC8gbW92ZSBzb21ld2hlcmUgZWxzZVxuICAgIC8vIHRoaXMgbWV0aG9kIGlzIHVzZWZ1bCBvbmx5IGZvciBGb3NzaWxEZWx0YVNlcmlhbGl6ZXJcbiAgICBSb29tLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVyLmFwaS5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBSb29tLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlcmlhbGl6ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsaXplci50ZWFyZG93bigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25Kb2luLmNsZWFyKCk7XG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZS5jbGVhcigpO1xuICAgICAgICB0aGlzLm9uRXJyb3IuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5vbkxlYXZlLmNsZWFyKCk7XG4gICAgfTtcbiAgICBSb29tLnByb3RvdHlwZS5vbk1lc3NhZ2VDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgYnl0ZXMgPSBBcnJheS5mcm9tKG5ldyBVaW50OEFycmF5KGV2ZW50LmRhdGEpKTtcbiAgICAgICAgdmFyIGNvZGUgPSBieXRlc1swXTtcbiAgICAgICAgaWYgKGNvZGUgPT09IFByb3RvY29sXzEuUHJvdG9jb2wuSk9JTl9ST09NKSB7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gMTtcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsaXplcklkID0gUHJvdG9jb2xfMS51dGY4UmVhZChieXRlcywgb2Zmc2V0KTtcbiAgICAgICAgICAgIG9mZnNldCArPSBQcm90b2NvbF8xLnV0ZjhMZW5ndGgodGhpcy5zZXJpYWxpemVySWQpO1xuICAgICAgICAgICAgLy8gZ2V0IHNlcmlhbGl6ZXIgaW1wbGVtZW50YXRpb25cbiAgICAgICAgICAgIHZhciBzZXJpYWxpemVyID0gU2VyaWFsaXplcl8xLmdldFNlcmlhbGl6ZXIodGhpcy5zZXJpYWxpemVySWQpO1xuICAgICAgICAgICAgaWYgKCFzZXJpYWxpemVyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibWlzc2luZyBzZXJpYWxpemVyOiBcIiArIHRoaXMuc2VyaWFsaXplcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIGNoZWNrXG4gICAgICAgICAgICBpZiAodGhpcy5zZXJpYWxpemVySWQgIT09IFwiZm9zc2lsLWRlbHRhXCIgJiYgIXRoaXMucm9vdFNjaGVtYSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsaXplciA9IG5ldyBzZXJpYWxpemVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnl0ZXMubGVuZ3RoID4gb2Zmc2V0ICYmIHRoaXMuc2VyaWFsaXplci5oYW5kc2hha2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbGl6ZXIuaGFuZHNoYWtlKGJ5dGVzLCB7IG9mZnNldDogMSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGFzSm9pbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub25Kb2luLmludm9rZSgpO1xuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2Ugc3VjY2Vzc2Z1bGwgSk9JTl9ST09NXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24uc2VuZChbUHJvdG9jb2xfMS5Qcm90b2NvbC5KT0lOX1JPT01dKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2RlID09PSBQcm90b2NvbF8xLlByb3RvY29sLkVSUk9SKSB7XG4gICAgICAgICAgICB2YXIgaXRfMSA9IHsgb2Zmc2V0OiAxIH07XG4gICAgICAgICAgICB2YXIgY29kZV8xID0gZGVjb2RlLm51bWJlcihieXRlcywgaXRfMSk7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IGRlY29kZS5zdHJpbmcoYnl0ZXMsIGl0XzEpO1xuICAgICAgICAgICAgdGhpcy5vbkVycm9yLmludm9rZShjb2RlXzEsIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvZGUgPT09IFByb3RvY29sXzEuUHJvdG9jb2wuTEVBVkVfUk9PTSkge1xuICAgICAgICAgICAgdGhpcy5sZWF2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvZGUgPT09IFByb3RvY29sXzEuUHJvdG9jb2wuUk9PTV9EQVRBX1NDSEVNQSkge1xuICAgICAgICAgICAgdmFyIGNvbnRleHRfMSA9IHRoaXMuc2VyaWFsaXplci5nZXRTdGF0ZSgpLmNvbnN0cnVjdG9yLl9jb250ZXh0O1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBjb250ZXh0XzEuZ2V0KGJ5dGVzWzFdKTtcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gbmV3IHR5cGUoKTtcbiAgICAgICAgICAgIG1lc3NhZ2UuZGVjb2RlKGJ5dGVzLCB7IG9mZnNldDogMiB9KTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hNZXNzYWdlKHR5cGUsIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvZGUgPT09IFByb3RvY29sXzEuUHJvdG9jb2wuUk9PTV9TVEFURSkge1xuICAgICAgICAgICAgYnl0ZXMuc2hpZnQoKTsgLy8gZHJvcCBgY29kZWAgYnl0ZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShieXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29kZSA9PT0gUHJvdG9jb2xfMS5Qcm90b2NvbC5ST09NX1NUQVRFX1BBVENIKSB7XG4gICAgICAgICAgICBieXRlcy5zaGlmdCgpOyAvLyBkcm9wIGBjb2RlYCBieXRlXG4gICAgICAgICAgICB0aGlzLnBhdGNoKGJ5dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2RlID09PSBQcm90b2NvbF8xLlByb3RvY29sLlJPT01fREFUQSkge1xuICAgICAgICAgICAgdmFyIGl0XzIgPSB7IG9mZnNldDogMSB9O1xuICAgICAgICAgICAgdmFyIHR5cGUgPSAoZGVjb2RlLnN0cmluZ0NoZWNrKGJ5dGVzLCBpdF8yKSlcbiAgICAgICAgICAgICAgICA/IGRlY29kZS5zdHJpbmcoYnl0ZXMsIGl0XzIpXG4gICAgICAgICAgICAgICAgOiBkZWNvZGUubnVtYmVyKGJ5dGVzLCBpdF8yKTtcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gKGJ5dGVzLmxlbmd0aCA+IGl0XzIub2Zmc2V0KVxuICAgICAgICAgICAgICAgID8gbXNncGFjay5kZWNvZGUoZXZlbnQuZGF0YSwgaXRfMi5vZmZzZXQpXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoTWVzc2FnZSh0eXBlLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUm9vbS5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAoZW5jb2RlZFN0YXRlKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplci5zZXRTdGF0ZShlbmNvZGVkU3RhdGUpO1xuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UuaW52b2tlKHRoaXMuc2VyaWFsaXplci5nZXRTdGF0ZSgpKTtcbiAgICB9O1xuICAgIFJvb20ucHJvdG90eXBlLnBhdGNoID0gZnVuY3Rpb24gKGJpbmFyeVBhdGNoKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplci5wYXRjaChiaW5hcnlQYXRjaCk7XG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZS5pbnZva2UodGhpcy5zZXJpYWxpemVyLmdldFN0YXRlKCkpO1xuICAgIH07XG4gICAgUm9vbS5wcm90b3R5cGUuZGlzcGF0Y2hNZXNzYWdlID0gZnVuY3Rpb24gKHR5cGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2VUeXBlID0gdGhpcy5nZXRNZXNzYWdlSGFuZGxlcktleSh0eXBlKTtcbiAgICAgICAgaWYgKHRoaXMub25NZXNzYWdlSGFuZGxlcnMuZXZlbnRzW21lc3NhZ2VUeXBlXSkge1xuICAgICAgICAgICAgdGhpcy5vbk1lc3NhZ2VIYW5kbGVycy5lbWl0KG1lc3NhZ2VUeXBlLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLm9uTWVzc2FnZUhhbmRsZXJzLmV2ZW50c1snKiddKSB7XG4gICAgICAgICAgICB0aGlzLm9uTWVzc2FnZUhhbmRsZXJzLmVtaXQoJyonLCB0eXBlLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIm9uTWVzc2FnZSBub3QgcmVnaXN0ZXJlZCBmb3IgdHlwZSAnXCIgKyB0eXBlICsgXCInLlwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUm9vbS5wcm90b3R5cGUuZ2V0TWVzc2FnZUhhbmRsZXJLZXkgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGVvZiAodHlwZSkpIHtcbiAgICAgICAgICAgIC8vIHR5cGVvZiBTY2hlbWFcbiAgICAgICAgICAgIGNhc2UgXCJmdW5jdGlvblwiOiByZXR1cm4gXCIkXCIgKyB0eXBlLl90eXBlaWQ7XG4gICAgICAgICAgICAvLyBzdHJpbmdcbiAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjogcmV0dXJuIHR5cGU7XG4gICAgICAgICAgICAvLyBudW1iZXJcbiAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjogcmV0dXJuIFwiaVwiICsgdHlwZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcihcImludmFsaWQgbWVzc2FnZSB0eXBlLlwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFJvb207XG59KCkpO1xuZXhwb3J0cy5Sb29tID0gUm9vbTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvY29jb3MtY3JlYXRvci5kLnRzXCIgLz5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0SXRlbSA9IGV4cG9ydHMucmVtb3ZlSXRlbSA9IGV4cG9ydHMuc2V0SXRlbSA9IHZvaWQgMDtcbi8qKlxuICogV2UgZG8gbm90IGFzc2lnbiAnc3RvcmFnZScgdG8gd2luZG93LmxvY2FsU3RvcmFnZSBpbW1lZGlhdGVsbHkgZm9yIFJlYWN0XG4gKiBOYXRpdmUgY29tcGF0aWJpbGl0eS4gd2luZG93LmxvY2FsU3RvcmFnZSBpcyBub3QgcHJlc2VudCB3aGVuIHRoaXMgbW9kdWxlIGlzXG4gKiBsb2FkZWQuXG4gKi9cbnZhciBzdG9yYWdlO1xuZnVuY3Rpb24gZ2V0U3RvcmFnZSgpIHtcbiAgICBpZiAoIXN0b3JhZ2UpIHtcbiAgICAgICAgc3RvcmFnZSA9ICh0eXBlb2YgKGNjKSAhPT0gJ3VuZGVmaW5lZCcgJiYgY2Muc3lzICYmIGNjLnN5cy5sb2NhbFN0b3JhZ2UpXG4gICAgICAgICAgICA/IGNjLnN5cy5sb2NhbFN0b3JhZ2UgLy8gY29tcGF0aWJpbGl0eSB3aXRoIGNvY29zIGNyZWF0b3JcbiAgICAgICAgICAgIDogdHlwZW9mICh3aW5kb3cpICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhbFN0b3JhZ2UgLy9STiBkb2VzIGhhdmUgd2luZG93IG9iamVjdCBhdCB0aGlzIHBvaW50LCBidXQgbG9jYWxTdG9yYWdlIGlzIG5vdCBkZWZpbmVkXG4gICAgICAgICAgICAgICAgPyB3aW5kb3cubG9jYWxTdG9yYWdlIC8vIHJlZ3VsYXIgYnJvd3NlciBlbnZpcm9ubWVudFxuICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICBjYWNoZToge30sXG4gICAgICAgICAgICAgICAgICAgIHNldEl0ZW06IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7IHRoaXMuY2FjaGVba2V5XSA9IHZhbHVlOyB9LFxuICAgICAgICAgICAgICAgICAgICBnZXRJdGVtOiBmdW5jdGlvbiAoa2V5KSB7IHRoaXMuY2FjaGVba2V5XTsgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSXRlbTogZnVuY3Rpb24gKGtleSkgeyBkZWxldGUgdGhpcy5jYWNoZVtrZXldOyB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBzdG9yYWdlO1xufVxuZnVuY3Rpb24gc2V0SXRlbShrZXksIHZhbHVlKSB7XG4gICAgZ2V0U3RvcmFnZSgpLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG59XG5leHBvcnRzLnNldEl0ZW0gPSBzZXRJdGVtO1xuZnVuY3Rpb24gcmVtb3ZlSXRlbShrZXkpIHtcbiAgICBnZXRTdG9yYWdlKCkucmVtb3ZlSXRlbShrZXkpO1xufVxuZXhwb3J0cy5yZW1vdmVJdGVtID0gcmVtb3ZlSXRlbTtcbmZ1bmN0aW9uIGdldEl0ZW0oa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciB2YWx1ZSA9IGdldFN0b3JhZ2UoKS5nZXRJdGVtKGtleSk7XG4gICAgaWYgKHR5cGVvZiAoUHJvbWlzZSkgPT09ICd1bmRlZmluZWQnIHx8IC8vIG9sZCBicm93c2Vyc1xuICAgICAgICAhKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgLy8gYnJvd3NlciBoYXMgc3luY2hyb25vdXMgcmV0dXJuXG4gICAgICAgIGNhbGxiYWNrKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIHJlYWN0LW5hdGl2ZSBpcyBhc3luY2hyb25vdXNcbiAgICAgICAgdmFsdWUudGhlbihmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIGNhbGxiYWNrKGlkKTsgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5nZXRJdGVtID0gZ2V0SXRlbTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNlcnZlckVycm9yID0gdm9pZCAwO1xudmFyIFNlcnZlckVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTZXJ2ZXJFcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTZXJ2ZXJFcnJvcihjb2RlLCBtZXNzYWdlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1lc3NhZ2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm5hbWUgPSBcIlNlcnZlckVycm9yXCI7XG4gICAgICAgIF90aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBTZXJ2ZXJFcnJvcjtcbn0oRXJyb3IpKTtcbmV4cG9ydHMuU2VydmVyRXJyb3IgPSBTZXJ2ZXJFcnJvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TY2hlbWFTZXJpYWxpemVyID0gZXhwb3J0cy5Gb3NzaWxEZWx0YVNlcmlhbGl6ZXIgPSBleHBvcnRzLnJlZ2lzdGVyU2VyaWFsaXplciA9IHZvaWQgMDtcbnJlcXVpcmUoXCIuL2xlZ2FjeVwiKTtcbnZhciBDbGllbnRfMSA9IHJlcXVpcmUoXCIuL0NsaWVudFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNsaWVudFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQ2xpZW50XzEuQ2xpZW50OyB9IH0pO1xudmFyIFByb3RvY29sXzEgPSByZXF1aXJlKFwiLi9Qcm90b2NvbFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlByb3RvY29sXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm90b2NvbF8xLlByb3RvY29sOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRXJyb3JDb2RlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm90b2NvbF8xLkVycm9yQ29kZTsgfSB9KTtcbnZhciBSb29tXzEgPSByZXF1aXJlKFwiLi9Sb29tXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm9vbVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gUm9vbV8xLlJvb207IH0gfSk7XG52YXIgQXV0aF8xID0gcmVxdWlyZShcIi4vQXV0aFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkF1dGhcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEF1dGhfMS5BdXRoOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUGxhdGZvcm1cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEF1dGhfMS5QbGF0Zm9ybTsgfSB9KTtcbi8qXG4gKiBTZXJpYWxpemVyc1xuICovXG52YXIgRm9zc2lsRGVsdGFTZXJpYWxpemVyXzEgPSByZXF1aXJlKFwiLi9zZXJpYWxpemVyL0Zvc3NpbERlbHRhU2VyaWFsaXplclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkZvc3NpbERlbHRhU2VyaWFsaXplclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gRm9zc2lsRGVsdGFTZXJpYWxpemVyXzEuRm9zc2lsRGVsdGFTZXJpYWxpemVyOyB9IH0pO1xudmFyIFNjaGVtYVNlcmlhbGl6ZXJfMSA9IHJlcXVpcmUoXCIuL3NlcmlhbGl6ZXIvU2NoZW1hU2VyaWFsaXplclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNjaGVtYVNlcmlhbGl6ZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFNjaGVtYVNlcmlhbGl6ZXJfMS5TY2hlbWFTZXJpYWxpemVyOyB9IH0pO1xudmFyIFNlcmlhbGl6ZXJfMSA9IHJlcXVpcmUoXCIuL3NlcmlhbGl6ZXIvU2VyaWFsaXplclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInJlZ2lzdGVyU2VyaWFsaXplclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gU2VyaWFsaXplcl8xLnJlZ2lzdGVyU2VyaWFsaXplcjsgfSB9KTtcblNlcmlhbGl6ZXJfMS5yZWdpc3RlclNlcmlhbGl6ZXIoJ2Zvc3NpbC1kZWx0YScsIEZvc3NpbERlbHRhU2VyaWFsaXplcl8xLkZvc3NpbERlbHRhU2VyaWFsaXplcik7XG5TZXJpYWxpemVyXzEucmVnaXN0ZXJTZXJpYWxpemVyKCdzY2hlbWEnLCBTY2hlbWFTZXJpYWxpemVyXzEuU2NoZW1hU2VyaWFsaXplcik7XG4iLCIvL1xuLy8gUG9seWZpbGxzIGZvciBsZWdhY3kgZW52aXJvbm1lbnRzXG4vL1xuLypcbiAqIFN1cHBvcnQgQW5kcm9pZCA0LjQueFxuICovXG5pZiAoIUFycmF5QnVmZmVyLmlzVmlldykge1xuICAgIEFycmF5QnVmZmVyLmlzVmlldyA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBhICE9PSBudWxsICYmIHR5cGVvZiAoYSkgPT09ICdvYmplY3QnICYmIGEuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI7XG4gICAgfTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5lbmNvZGUgPSBleHBvcnRzLmRlY29kZSA9IHZvaWQgMDtcbnZhciBkZWNvZGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tc2dwYWNrL2RlY29kZVwiKSk7XG52YXIgZW5jb2RlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbXNncGFjay9lbmNvZGVcIikpO1xuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGVfMS5kZWZhdWx0O1xuZXhwb3J0cy5lbmNvZGUgPSBlbmNvZGVfMS5kZWZhdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCBJb24gRHJpdmUgU29mdHdhcmUgTHRkLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2RhcnJhY2hlcXVlc25lL25vdGVwYWNrL1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogUGF0Y2ggZm9yIENvbHlzZXVzOlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLVxuICpcbiAqIGFkZGVkIGBvZmZzZXRgIG9uIERlY29kZXIgY29uc3RydWN0b3IsIGZvciBtZXNzYWdlcyBhcnJpdmluZyB3aXRoIGEgY29kZVxuICogYmVmb3JlIGFjdHVhbCBtc2dwYWNrIGRhdGFcbiAqL1xuZnVuY3Rpb24gRGVjb2RlcihidWZmZXIsIG9mZnNldCkge1xuICAgIHRoaXMuX29mZnNldCA9IG9mZnNldDtcbiAgICBpZiAoYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgdGhpcy5fYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICB0aGlzLl92aWV3ID0gbmV3IERhdGFWaWV3KHRoaXMuX2J1ZmZlcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhidWZmZXIpKSB7XG4gICAgICAgIHRoaXMuX2J1ZmZlciA9IGJ1ZmZlci5idWZmZXI7XG4gICAgICAgIHRoaXMuX3ZpZXcgPSBuZXcgRGF0YVZpZXcodGhpcy5fYnVmZmVyLCBidWZmZXIuYnl0ZU9mZnNldCwgYnVmZmVyLmJ5dGVMZW5ndGgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50Jyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdXRmOFJlYWQodmlldywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgICB2YXIgc3RyaW5nID0gJycsIGNociA9IDA7XG4gICAgZm9yICh2YXIgaSA9IG9mZnNldCwgZW5kID0gb2Zmc2V0ICsgbGVuZ3RoOyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgdmFyIGJ5dGUgPSB2aWV3LmdldFVpbnQ4KGkpO1xuICAgICAgICBpZiAoKGJ5dGUgJiAweDgwKSA9PT0gMHgwMCkge1xuICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGJ5dGUgJiAweGUwKSA9PT0gMHhjMCkge1xuICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChieXRlICYgMHgxZikgPDwgNikgfFxuICAgICAgICAgICAgICAgICh2aWV3LmdldFVpbnQ4KCsraSkgJiAweDNmKSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGJ5dGUgJiAweGYwKSA9PT0gMHhlMCkge1xuICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChieXRlICYgMHgwZikgPDwgMTIpIHxcbiAgICAgICAgICAgICAgICAoKHZpZXcuZ2V0VWludDgoKytpKSAmIDB4M2YpIDw8IDYpIHxcbiAgICAgICAgICAgICAgICAoKHZpZXcuZ2V0VWludDgoKytpKSAmIDB4M2YpIDw8IDApKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoYnl0ZSAmIDB4ZjgpID09PSAweGYwKSB7XG4gICAgICAgICAgICBjaHIgPSAoKGJ5dGUgJiAweDA3KSA8PCAxOCkgfFxuICAgICAgICAgICAgICAgICgodmlldy5nZXRVaW50OCgrK2kpICYgMHgzZikgPDwgMTIpIHxcbiAgICAgICAgICAgICAgICAoKHZpZXcuZ2V0VWludDgoKytpKSAmIDB4M2YpIDw8IDYpIHxcbiAgICAgICAgICAgICAgICAoKHZpZXcuZ2V0VWludDgoKytpKSAmIDB4M2YpIDw8IDApO1xuICAgICAgICAgICAgaWYgKGNociA+PSAweDAxMDAwMCkgeyAvLyBzdXJyb2dhdGUgcGFpclxuICAgICAgICAgICAgICAgIGNociAtPSAweDAxMDAwMDtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoY2hyID4+PiAxMCkgKyAweEQ4MDAsIChjaHIgJiAweDNGRikgKyAweERDMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBieXRlICcgKyBieXRlLnRvU3RyaW5nKDE2KSk7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmc7XG59XG5EZWNvZGVyLnByb3RvdHlwZS5fYXJyYXkgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZVtpXSA9IHRoaXMuX3BhcnNlKCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn07XG5EZWNvZGVyLnByb3RvdHlwZS5fbWFwID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSAnJywgdmFsdWUgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGtleSA9IHRoaXMuX3BhcnNlKCk7XG4gICAgICAgIHZhbHVlW2tleV0gPSB0aGlzLl9wYXJzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuRGVjb2Rlci5wcm90b3R5cGUuX3N0ciA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSB1dGY4UmVhZCh0aGlzLl92aWV3LCB0aGlzLl9vZmZzZXQsIGxlbmd0aCk7XG4gICAgdGhpcy5fb2Zmc2V0ICs9IGxlbmd0aDtcbiAgICByZXR1cm4gdmFsdWU7XG59O1xuRGVjb2Rlci5wcm90b3R5cGUuX2JpbiA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLl9idWZmZXIuc2xpY2UodGhpcy5fb2Zmc2V0LCB0aGlzLl9vZmZzZXQgKyBsZW5ndGgpO1xuICAgIHRoaXMuX29mZnNldCArPSBsZW5ndGg7XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcbkRlY29kZXIucHJvdG90eXBlLl9wYXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJlZml4ID0gdGhpcy5fdmlldy5nZXRVaW50OCh0aGlzLl9vZmZzZXQrKyk7XG4gICAgdmFyIHZhbHVlLCBsZW5ndGggPSAwLCB0eXBlID0gMCwgaGkgPSAwLCBsbyA9IDA7XG4gICAgaWYgKHByZWZpeCA8IDB4YzApIHtcbiAgICAgICAgLy8gcG9zaXRpdmUgZml4aW50XG4gICAgICAgIGlmIChwcmVmaXggPCAweDgwKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4O1xuICAgICAgICB9XG4gICAgICAgIC8vIGZpeG1hcFxuICAgICAgICBpZiAocHJlZml4IDwgMHg5MCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcChwcmVmaXggJiAweDBmKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmaXhhcnJheVxuICAgICAgICBpZiAocHJlZml4IDwgMHhhMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5KHByZWZpeCAmIDB4MGYpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZpeHN0clxuICAgICAgICByZXR1cm4gdGhpcy5fc3RyKHByZWZpeCAmIDB4MWYpO1xuICAgIH1cbiAgICAvLyBuZWdhdGl2ZSBmaXhpbnRcbiAgICBpZiAocHJlZml4ID4gMHhkZikge1xuICAgICAgICByZXR1cm4gKDB4ZmYgLSBwcmVmaXggKyAxKSAqIC0xO1xuICAgIH1cbiAgICBzd2l0Y2ggKHByZWZpeCkge1xuICAgICAgICAvLyBuaWxcbiAgICAgICAgY2FzZSAweGMwOlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIC8vIGZhbHNlXG4gICAgICAgIGNhc2UgMHhjMjpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gdHJ1ZVxuICAgICAgICBjYXNlIDB4YzM6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgLy8gYmluXG4gICAgICAgIGNhc2UgMHhjNDpcbiAgICAgICAgICAgIGxlbmd0aCA9IHRoaXMuX3ZpZXcuZ2V0VWludDgodGhpcy5fb2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSAxO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JpbihsZW5ndGgpO1xuICAgICAgICBjYXNlIDB4YzU6XG4gICAgICAgICAgICBsZW5ndGggPSB0aGlzLl92aWV3LmdldFVpbnQxNih0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDI7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmluKGxlbmd0aCk7XG4gICAgICAgIGNhc2UgMHhjNjpcbiAgICAgICAgICAgIGxlbmd0aCA9IHRoaXMuX3ZpZXcuZ2V0VWludDMyKHRoaXMuX29mZnNldCk7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gNDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9iaW4obGVuZ3RoKTtcbiAgICAgICAgLy8gZXh0XG4gICAgICAgIGNhc2UgMHhjNzpcbiAgICAgICAgICAgIGxlbmd0aCA9IHRoaXMuX3ZpZXcuZ2V0VWludDgodGhpcy5fb2Zmc2V0KTtcbiAgICAgICAgICAgIHR5cGUgPSB0aGlzLl92aWV3LmdldEludDgodGhpcy5fb2Zmc2V0ICsgMSk7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gMjtcbiAgICAgICAgICAgIHJldHVybiBbdHlwZSwgdGhpcy5fYmluKGxlbmd0aCldO1xuICAgICAgICBjYXNlIDB4Yzg6XG4gICAgICAgICAgICBsZW5ndGggPSB0aGlzLl92aWV3LmdldFVpbnQxNih0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgdHlwZSA9IHRoaXMuX3ZpZXcuZ2V0SW50OCh0aGlzLl9vZmZzZXQgKyAyKTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSAzO1xuICAgICAgICAgICAgcmV0dXJuIFt0eXBlLCB0aGlzLl9iaW4obGVuZ3RoKV07XG4gICAgICAgIGNhc2UgMHhjOTpcbiAgICAgICAgICAgIGxlbmd0aCA9IHRoaXMuX3ZpZXcuZ2V0VWludDMyKHRoaXMuX29mZnNldCk7XG4gICAgICAgICAgICB0eXBlID0gdGhpcy5fdmlldy5nZXRJbnQ4KHRoaXMuX29mZnNldCArIDQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDU7XG4gICAgICAgICAgICByZXR1cm4gW3R5cGUsIHRoaXMuX2JpbihsZW5ndGgpXTtcbiAgICAgICAgLy8gZmxvYXRcbiAgICAgICAgY2FzZSAweGNhOlxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl92aWV3LmdldEZsb2F0MzIodGhpcy5fb2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSA0O1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICBjYXNlIDB4Y2I6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3ZpZXcuZ2V0RmxvYXQ2NCh0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDg7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIC8vIHVpbnRcbiAgICAgICAgY2FzZSAweGNjOlxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl92aWV3LmdldFVpbnQ4KHRoaXMuX29mZnNldCk7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gMTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgY2FzZSAweGNkOlxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl92aWV3LmdldFVpbnQxNih0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDI7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIGNhc2UgMHhjZTpcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fdmlldy5nZXRVaW50MzIodGhpcy5fb2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSA0O1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICBjYXNlIDB4Y2Y6XG4gICAgICAgICAgICBoaSA9IHRoaXMuX3ZpZXcuZ2V0VWludDMyKHRoaXMuX29mZnNldCkgKiBNYXRoLnBvdygyLCAzMik7XG4gICAgICAgICAgICBsbyA9IHRoaXMuX3ZpZXcuZ2V0VWludDMyKHRoaXMuX29mZnNldCArIDQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDg7XG4gICAgICAgICAgICByZXR1cm4gaGkgKyBsbztcbiAgICAgICAgLy8gaW50XG4gICAgICAgIGNhc2UgMHhkMDpcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fdmlldy5nZXRJbnQ4KHRoaXMuX29mZnNldCk7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gMTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgY2FzZSAweGQxOlxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl92aWV3LmdldEludDE2KHRoaXMuX29mZnNldCk7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gMjtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgY2FzZSAweGQyOlxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl92aWV3LmdldEludDMyKHRoaXMuX29mZnNldCk7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gNDtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgY2FzZSAweGQzOlxuICAgICAgICAgICAgaGkgPSB0aGlzLl92aWV3LmdldEludDMyKHRoaXMuX29mZnNldCkgKiBNYXRoLnBvdygyLCAzMik7XG4gICAgICAgICAgICBsbyA9IHRoaXMuX3ZpZXcuZ2V0VWludDMyKHRoaXMuX29mZnNldCArIDQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDg7XG4gICAgICAgICAgICByZXR1cm4gaGkgKyBsbztcbiAgICAgICAgLy8gZml4ZXh0XG4gICAgICAgIGNhc2UgMHhkNDpcbiAgICAgICAgICAgIHR5cGUgPSB0aGlzLl92aWV3LmdldEludDgodGhpcy5fb2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSAxO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IDB4MDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFt0eXBlLCB0aGlzLl9iaW4oMSldO1xuICAgICAgICBjYXNlIDB4ZDU6XG4gICAgICAgICAgICB0eXBlID0gdGhpcy5fdmlldy5nZXRJbnQ4KHRoaXMuX29mZnNldCk7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gMTtcbiAgICAgICAgICAgIHJldHVybiBbdHlwZSwgdGhpcy5fYmluKDIpXTtcbiAgICAgICAgY2FzZSAweGQ2OlxuICAgICAgICAgICAgdHlwZSA9IHRoaXMuX3ZpZXcuZ2V0SW50OCh0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDE7XG4gICAgICAgICAgICByZXR1cm4gW3R5cGUsIHRoaXMuX2Jpbig0KV07XG4gICAgICAgIGNhc2UgMHhkNzpcbiAgICAgICAgICAgIHR5cGUgPSB0aGlzLl92aWV3LmdldEludDgodGhpcy5fb2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSAxO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IDB4MDApIHtcbiAgICAgICAgICAgICAgICBoaSA9IHRoaXMuX3ZpZXcuZ2V0SW50MzIodGhpcy5fb2Zmc2V0KSAqIE1hdGgucG93KDIsIDMyKTtcbiAgICAgICAgICAgICAgICBsbyA9IHRoaXMuX3ZpZXcuZ2V0VWludDMyKHRoaXMuX29mZnNldCArIDQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSA4O1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShoaSArIGxvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbdHlwZSwgdGhpcy5fYmluKDgpXTtcbiAgICAgICAgY2FzZSAweGQ4OlxuICAgICAgICAgICAgdHlwZSA9IHRoaXMuX3ZpZXcuZ2V0SW50OCh0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDE7XG4gICAgICAgICAgICByZXR1cm4gW3R5cGUsIHRoaXMuX2JpbigxNildO1xuICAgICAgICAvLyBzdHJcbiAgICAgICAgY2FzZSAweGQ5OlxuICAgICAgICAgICAgbGVuZ3RoID0gdGhpcy5fdmlldy5nZXRVaW50OCh0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDE7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyKGxlbmd0aCk7XG4gICAgICAgIGNhc2UgMHhkYTpcbiAgICAgICAgICAgIGxlbmd0aCA9IHRoaXMuX3ZpZXcuZ2V0VWludDE2KHRoaXMuX29mZnNldCk7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gMjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHIobGVuZ3RoKTtcbiAgICAgICAgY2FzZSAweGRiOlxuICAgICAgICAgICAgbGVuZ3RoID0gdGhpcy5fdmlldy5nZXRVaW50MzIodGhpcy5fb2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSA0O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cihsZW5ndGgpO1xuICAgICAgICAvLyBhcnJheVxuICAgICAgICBjYXNlIDB4ZGM6XG4gICAgICAgICAgICBsZW5ndGggPSB0aGlzLl92aWV3LmdldFVpbnQxNih0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDI7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXJyYXkobGVuZ3RoKTtcbiAgICAgICAgY2FzZSAweGRkOlxuICAgICAgICAgICAgbGVuZ3RoID0gdGhpcy5fdmlldy5nZXRVaW50MzIodGhpcy5fb2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuX29mZnNldCArPSA0O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5KGxlbmd0aCk7XG4gICAgICAgIC8vIG1hcFxuICAgICAgICBjYXNlIDB4ZGU6XG4gICAgICAgICAgICBsZW5ndGggPSB0aGlzLl92aWV3LmdldFVpbnQxNih0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IDI7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFwKGxlbmd0aCk7XG4gICAgICAgIGNhc2UgMHhkZjpcbiAgICAgICAgICAgIGxlbmd0aCA9IHRoaXMuX3ZpZXcuZ2V0VWludDMyKHRoaXMuX29mZnNldCk7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgKz0gNDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXAobGVuZ3RoKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgcGFyc2UnKTtcbn07XG5mdW5jdGlvbiBkZWNvZGUoYnVmZmVyLCBvZmZzZXQpIHtcbiAgICBpZiAob2Zmc2V0ID09PSB2b2lkIDApIHsgb2Zmc2V0ID0gMDsgfVxuICAgIHZhciBkZWNvZGVyID0gbmV3IERlY29kZXIoYnVmZmVyLCBvZmZzZXQpO1xuICAgIHZhciB2YWx1ZSA9IGRlY29kZXIuX3BhcnNlKCk7XG4gICAgaWYgKGRlY29kZXIuX29mZnNldCAhPT0gYnVmZmVyLmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKChidWZmZXIuYnl0ZUxlbmd0aCAtIGRlY29kZXIuX29mZnNldCkgKyAnIHRyYWlsaW5nIGJ5dGVzJyk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlY29kZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgSW9uIERyaXZlIFNvZnR3YXJlIEx0ZC5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJyYWNoZXF1ZXNuZS9ub3RlcGFjay9cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiB1dGY4V3JpdGUodmlldywgb2Zmc2V0LCBzdHIpIHtcbiAgICB2YXIgYyA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdHIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPCAweDgwKSB7XG4gICAgICAgICAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCBjKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjIDwgMHg4MDApIHtcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDgob2Zmc2V0KyssIDB4YzAgfCAoYyA+PiA2KSk7XG4gICAgICAgICAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCAweDgwIHwgKGMgJiAweDNmKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA8IDB4ZDgwMCB8fCBjID49IDB4ZTAwMCkge1xuICAgICAgICAgICAgdmlldy5zZXRVaW50OChvZmZzZXQrKywgMHhlMCB8IChjID4+IDEyKSk7XG4gICAgICAgICAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCAweDgwIHwgKGMgPj4gNikgJiAweDNmKTtcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDgob2Zmc2V0KyssIDB4ODAgfCAoYyAmIDB4M2YpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGMgPSAweDEwMDAwICsgKCgoYyAmIDB4M2ZmKSA8PCAxMCkgfCAoc3RyLmNoYXJDb2RlQXQoaSkgJiAweDNmZikpO1xuICAgICAgICAgICAgdmlldy5zZXRVaW50OChvZmZzZXQrKywgMHhmMCB8IChjID4+IDE4KSk7XG4gICAgICAgICAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCAweDgwIHwgKGMgPj4gMTIpICYgMHgzZik7XG4gICAgICAgICAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCAweDgwIHwgKGMgPj4gNikgJiAweDNmKTtcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDgob2Zmc2V0KyssIDB4ODAgfCAoYyAmIDB4M2YpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHV0ZjhMZW5ndGgoc3RyKSB7XG4gICAgdmFyIGMgPSAwLCBsZW5ndGggPSAwO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDwgMHg4MCkge1xuICAgICAgICAgICAgbGVuZ3RoICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA8IDB4ODAwKSB7XG4gICAgICAgICAgICBsZW5ndGggKz0gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjIDwgMHhkODAwIHx8IGMgPj0gMHhlMDAwKSB7XG4gICAgICAgICAgICBsZW5ndGggKz0gMztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGxlbmd0aCArPSA0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsZW5ndGg7XG59XG5mdW5jdGlvbiBfZW5jb2RlKGJ5dGVzLCBkZWZlcnMsIHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWUsIGkgPSAwLCBsID0gMCwgaGkgPSAwLCBsbyA9IDAsIGxlbmd0aCA9IDAsIHNpemUgPSAwO1xuICAgIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICBsZW5ndGggPSB1dGY4TGVuZ3RoKHZhbHVlKTtcbiAgICAgICAgLy8gZml4c3RyXG4gICAgICAgIGlmIChsZW5ndGggPCAweDIwKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKGxlbmd0aCB8IDB4YTApO1xuICAgICAgICAgICAgc2l6ZSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3RyIDhcbiAgICAgICAgZWxzZSBpZiAobGVuZ3RoIDwgMHgxMDApIHtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goMHhkOSwgbGVuZ3RoKTtcbiAgICAgICAgICAgIHNpemUgPSAyO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN0ciAxNlxuICAgICAgICBlbHNlIGlmIChsZW5ndGggPCAweDEwMDAwKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKDB4ZGEsIGxlbmd0aCA+PiA4LCBsZW5ndGgpO1xuICAgICAgICAgICAgc2l6ZSA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3RyIDMyXG4gICAgICAgIGVsc2UgaWYgKGxlbmd0aCA8IDB4MTAwMDAwMDAwKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKDB4ZGIsIGxlbmd0aCA+PiAyNCwgbGVuZ3RoID4+IDE2LCBsZW5ndGggPj4gOCwgbGVuZ3RoKTtcbiAgICAgICAgICAgIHNpemUgPSA1O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdHJpbmcgdG9vIGxvbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBkZWZlcnMucHVzaCh7IF9zdHI6IHZhbHVlLCBfbGVuZ3RoOiBsZW5ndGgsIF9vZmZzZXQ6IGJ5dGVzLmxlbmd0aCB9KTtcbiAgICAgICAgcmV0dXJuIHNpemUgKyBsZW5ndGg7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICAvLyBUT0RPOiBlbmNvZGUgdG8gZmxvYXQgMzI/XG4gICAgICAgIC8vIGZsb2F0IDY0XG4gICAgICAgIGlmIChNYXRoLmZsb29yKHZhbHVlKSAhPT0gdmFsdWUgfHwgIWlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgICAgICAgYnl0ZXMucHVzaCgweGNiKTtcbiAgICAgICAgICAgIGRlZmVycy5wdXNoKHsgX2Zsb2F0OiB2YWx1ZSwgX2xlbmd0aDogOCwgX29mZnNldDogYnl0ZXMubGVuZ3RoIH0pO1xuICAgICAgICAgICAgcmV0dXJuIDk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID49IDApIHtcbiAgICAgICAgICAgIC8vIHBvc2l0aXZlIGZpeG51bVxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgMHg4MCkge1xuICAgICAgICAgICAgICAgIGJ5dGVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdWludCA4XG4gICAgICAgICAgICBpZiAodmFsdWUgPCAweDEwMCkge1xuICAgICAgICAgICAgICAgIGJ5dGVzLnB1c2goMHhjYywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdWludCAxNlxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgMHgxMDAwMCkge1xuICAgICAgICAgICAgICAgIGJ5dGVzLnB1c2goMHhjZCwgdmFsdWUgPj4gOCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdWludCAzMlxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgMHgxMDAwMDAwMDApIHtcbiAgICAgICAgICAgICAgICBieXRlcy5wdXNoKDB4Y2UsIHZhbHVlID4+IDI0LCB2YWx1ZSA+PiAxNiwgdmFsdWUgPj4gOCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiA1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdWludCA2NFxuICAgICAgICAgICAgaGkgPSAodmFsdWUgLyBNYXRoLnBvdygyLCAzMikpID4+IDA7XG4gICAgICAgICAgICBsbyA9IHZhbHVlID4+PiAwO1xuICAgICAgICAgICAgYnl0ZXMucHVzaCgweGNmLCBoaSA+PiAyNCwgaGkgPj4gMTYsIGhpID4+IDgsIGhpLCBsbyA+PiAyNCwgbG8gPj4gMTYsIGxvID4+IDgsIGxvKTtcbiAgICAgICAgICAgIHJldHVybiA5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gbmVnYXRpdmUgZml4bnVtXG4gICAgICAgICAgICBpZiAodmFsdWUgPj0gLTB4MjApIHtcbiAgICAgICAgICAgICAgICBieXRlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGludCA4XG4gICAgICAgICAgICBpZiAodmFsdWUgPj0gLTB4ODApIHtcbiAgICAgICAgICAgICAgICBieXRlcy5wdXNoKDB4ZDAsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGludCAxNlxuICAgICAgICAgICAgaWYgKHZhbHVlID49IC0weDgwMDApIHtcbiAgICAgICAgICAgICAgICBieXRlcy5wdXNoKDB4ZDEsIHZhbHVlID4+IDgsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGludCAzMlxuICAgICAgICAgICAgaWYgKHZhbHVlID49IC0weDgwMDAwMDAwKSB7XG4gICAgICAgICAgICAgICAgYnl0ZXMucHVzaCgweGQyLCB2YWx1ZSA+PiAyNCwgdmFsdWUgPj4gMTYsIHZhbHVlID4+IDgsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGludCA2NFxuICAgICAgICAgICAgaGkgPSBNYXRoLmZsb29yKHZhbHVlIC8gTWF0aC5wb3coMiwgMzIpKTtcbiAgICAgICAgICAgIGxvID0gdmFsdWUgPj4+IDA7XG4gICAgICAgICAgICBieXRlcy5wdXNoKDB4ZDMsIGhpID4+IDI0LCBoaSA+PiAxNiwgaGkgPj4gOCwgaGksIGxvID4+IDI0LCBsbyA+PiAxNiwgbG8gPj4gOCwgbG8pO1xuICAgICAgICAgICAgcmV0dXJuIDk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIG5pbFxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goMHhjMCk7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgIC8vIGZpeGFycmF5XG4gICAgICAgICAgICBpZiAobGVuZ3RoIDwgMHgxMCkge1xuICAgICAgICAgICAgICAgIGJ5dGVzLnB1c2gobGVuZ3RoIHwgMHg5MCk7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhcnJheSAxNlxuICAgICAgICAgICAgZWxzZSBpZiAobGVuZ3RoIDwgMHgxMDAwMCkge1xuICAgICAgICAgICAgICAgIGJ5dGVzLnB1c2goMHhkYywgbGVuZ3RoID4+IDgsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhcnJheSAzMlxuICAgICAgICAgICAgZWxzZSBpZiAobGVuZ3RoIDwgMHgxMDAwMDAwMDApIHtcbiAgICAgICAgICAgICAgICBieXRlcy5wdXNoKDB4ZGQsIGxlbmd0aCA+PiAyNCwgbGVuZ3RoID4+IDE2LCBsZW5ndGggPj4gOCwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBzaXplID0gNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXJyYXkgdG9vIGxhcmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzaXplICs9IF9lbmNvZGUoYnl0ZXMsIGRlZmVycywgdmFsdWVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZml4ZXh0IDggLyBEYXRlXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHZhciB0aW1lID0gdmFsdWUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgaGkgPSBNYXRoLmZsb29yKHRpbWUgLyBNYXRoLnBvdygyLCAzMikpO1xuICAgICAgICAgICAgbG8gPSB0aW1lID4+PiAwO1xuICAgICAgICAgICAgYnl0ZXMucHVzaCgweGQ3LCAwLCBoaSA+PiAyNCwgaGkgPj4gMTYsIGhpID4+IDgsIGhpLCBsbyA+PiAyNCwgbG8gPj4gMTYsIGxvID4+IDgsIGxvKTtcbiAgICAgICAgICAgIHJldHVybiAxMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgbGVuZ3RoID0gdmFsdWUuYnl0ZUxlbmd0aDtcbiAgICAgICAgICAgIC8vIGJpbiA4XG4gICAgICAgICAgICBpZiAobGVuZ3RoIDwgMHgxMDApIHtcbiAgICAgICAgICAgICAgICBieXRlcy5wdXNoKDB4YzQsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgLy8gYmluIDE2XG4gICAgICAgICAgICBpZiAobGVuZ3RoIDwgMHgxMDAwMCkge1xuICAgICAgICAgICAgICAgIGJ5dGVzLnB1c2goMHhjNSwgbGVuZ3RoID4+IDgsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgLy8gYmluIDMyXG4gICAgICAgICAgICBpZiAobGVuZ3RoIDwgMHgxMDAwMDAwMDApIHtcbiAgICAgICAgICAgICAgICBieXRlcy5wdXNoKDB4YzYsIGxlbmd0aCA+PiAyNCwgbGVuZ3RoID4+IDE2LCBsZW5ndGggPj4gOCwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBzaXplID0gNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQnVmZmVyIHRvbyBsYXJnZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmZXJzLnB1c2goeyBfYmluOiB2YWx1ZSwgX2xlbmd0aDogbGVuZ3RoLCBfb2Zmc2V0OiBieXRlcy5sZW5ndGggfSk7XG4gICAgICAgICAgICByZXR1cm4gc2l6ZSArIGxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIF9lbmNvZGUoYnl0ZXMsIGRlZmVycywgdmFsdWUudG9KU09OKCkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrZXlzID0gW10sIGtleSA9ICcnO1xuICAgICAgICB2YXIgYWxsS2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGFsbEtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBrZXkgPSBhbGxLZXlzW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZVtrZXldICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgICAgIC8vIGZpeG1hcFxuICAgICAgICBpZiAobGVuZ3RoIDwgMHgxMCkge1xuICAgICAgICAgICAgYnl0ZXMucHVzaChsZW5ndGggfCAweDgwKTtcbiAgICAgICAgICAgIHNpemUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcCAxNlxuICAgICAgICBlbHNlIGlmIChsZW5ndGggPCAweDEwMDAwKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKDB4ZGUsIGxlbmd0aCA+PiA4LCBsZW5ndGgpO1xuICAgICAgICAgICAgc2l6ZSA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFwIDMyXG4gICAgICAgIGVsc2UgaWYgKGxlbmd0aCA8IDB4MTAwMDAwMDAwKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKDB4ZGYsIGxlbmd0aCA+PiAyNCwgbGVuZ3RoID4+IDE2LCBsZW5ndGggPj4gOCwgbGVuZ3RoKTtcbiAgICAgICAgICAgIHNpemUgPSA1O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPYmplY3QgdG9vIGxhcmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgc2l6ZSArPSBfZW5jb2RlKGJ5dGVzLCBkZWZlcnMsIGtleSk7XG4gICAgICAgICAgICBzaXplICs9IF9lbmNvZGUoYnl0ZXMsIGRlZmVycywgdmFsdWVba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgfVxuICAgIC8vIGZhbHNlL3RydWVcbiAgICBpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGJ5dGVzLnB1c2godmFsdWUgPyAweGMzIDogMHhjMik7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICAvLyBmaXhleHQgMSAvIHVuZGVmaW5lZFxuICAgIGlmICh0eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBieXRlcy5wdXNoKDB4ZDQsIDAsIDApO1xuICAgICAgICByZXR1cm4gMztcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZW5jb2RlJyk7XG59XG5mdW5jdGlvbiBlbmNvZGUodmFsdWUpIHtcbiAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICB2YXIgZGVmZXJzID0gW107XG4gICAgdmFyIHNpemUgPSBfZW5jb2RlKGJ5dGVzLCBkZWZlcnMsIHZhbHVlKTtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKHNpemUpO1xuICAgIHZhciB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1Zik7XG4gICAgdmFyIGRlZmVySW5kZXggPSAwO1xuICAgIHZhciBkZWZlcldyaXR0ZW4gPSAwO1xuICAgIHZhciBuZXh0T2Zmc2V0ID0gLTE7XG4gICAgaWYgKGRlZmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG5leHRPZmZzZXQgPSBkZWZlcnNbMF0uX29mZnNldDtcbiAgICB9XG4gICAgdmFyIGRlZmVyLCBkZWZlckxlbmd0aCA9IDAsIG9mZnNldCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBieXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmlldy5zZXRVaW50OChkZWZlcldyaXR0ZW4gKyBpLCBieXRlc1tpXSk7XG4gICAgICAgIGlmIChpICsgMSAhPT0gbmV4dE9mZnNldCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZGVmZXIgPSBkZWZlcnNbZGVmZXJJbmRleF07XG4gICAgICAgIGRlZmVyTGVuZ3RoID0gZGVmZXIuX2xlbmd0aDtcbiAgICAgICAgb2Zmc2V0ID0gZGVmZXJXcml0dGVuICsgbmV4dE9mZnNldDtcbiAgICAgICAgaWYgKGRlZmVyLl9iaW4pIHtcbiAgICAgICAgICAgIHZhciBiaW4gPSBuZXcgVWludDhBcnJheShkZWZlci5fYmluKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZGVmZXJMZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZpZXcuc2V0VWludDgob2Zmc2V0ICsgaiwgYmluW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZWZlci5fc3RyKSB7XG4gICAgICAgICAgICB1dGY4V3JpdGUodmlldywgb2Zmc2V0LCBkZWZlci5fc3RyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZWZlci5fZmxvYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmlldy5zZXRGbG9hdDY0KG9mZnNldCwgZGVmZXIuX2Zsb2F0KTtcbiAgICAgICAgfVxuICAgICAgICBkZWZlckluZGV4Kys7XG4gICAgICAgIGRlZmVyV3JpdHRlbiArPSBkZWZlckxlbmd0aDtcbiAgICAgICAgaWYgKGRlZmVyc1tkZWZlckluZGV4XSkge1xuICAgICAgICAgICAgbmV4dE9mZnNldCA9IGRlZmVyc1tkZWZlckluZGV4XS5fb2Zmc2V0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBidWY7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBlbmNvZGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkZvc3NpbERlbHRhU2VyaWFsaXplciA9IHZvaWQgMDtcbnZhciBzdGF0ZV9saXN0ZW5lcl8xID0gcmVxdWlyZShcIkBnYW1lc3RkaW8vc3RhdGUtbGlzdGVuZXJcIik7XG52YXIgZm9zc2lsRGVsdGEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcImZvc3NpbC1kZWx0YVwiKSk7XG52YXIgbXNncGFjayA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vbXNncGFja1wiKSk7XG52YXIgRm9zc2lsRGVsdGFTZXJpYWxpemVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvc3NpbERlbHRhU2VyaWFsaXplcigpIHtcbiAgICAgICAgdGhpcy5hcGkgPSBuZXcgc3RhdGVfbGlzdGVuZXJfMS5TdGF0ZUNvbnRhaW5lcih7fSk7XG4gICAgfVxuICAgIEZvc3NpbERlbHRhU2VyaWFsaXplci5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5zdGF0ZTtcbiAgICB9O1xuICAgIEZvc3NpbERlbHRhU2VyaWFsaXplci5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAoZW5jb2RlZFN0YXRlKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IG5ldyBVaW50OEFycmF5KGVuY29kZWRTdGF0ZSk7XG4gICAgICAgIHRoaXMuYXBpLnNldChtc2dwYWNrLmRlY29kZSh0aGlzLnByZXZpb3VzU3RhdGUpKTtcbiAgICB9O1xuICAgIEZvc3NpbERlbHRhU2VyaWFsaXplci5wcm90b3R5cGUucGF0Y2ggPSBmdW5jdGlvbiAoYmluYXJ5UGF0Y2gpIHtcbiAgICAgICAgLy8gYXBwbHkgcGF0Y2hcbiAgICAgICAgdGhpcy5wcmV2aW91c1N0YXRlID0gbmV3IFVpbnQ4QXJyYXkoZm9zc2lsRGVsdGEuYXBwbHkodGhpcy5wcmV2aW91c1N0YXRlLCBiaW5hcnlQYXRjaCkpO1xuICAgICAgICAvLyB0cmlnZ2VyIHVwZGF0ZSBjYWxsYmFja3NcbiAgICAgICAgdGhpcy5hcGkuc2V0KG1zZ3BhY2suZGVjb2RlKHRoaXMucHJldmlvdXNTdGF0ZSkpO1xuICAgIH07XG4gICAgRm9zc2lsRGVsdGFTZXJpYWxpemVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hcGkucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfTtcbiAgICByZXR1cm4gRm9zc2lsRGVsdGFTZXJpYWxpemVyO1xufSgpKTtcbmV4cG9ydHMuRm9zc2lsRGVsdGFTZXJpYWxpemVyID0gRm9zc2lsRGVsdGFTZXJpYWxpemVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNjaGVtYVNlcmlhbGl6ZXIgPSB2b2lkIDA7XG52YXIgc2NoZW1hXzEgPSByZXF1aXJlKFwiQGNvbHlzZXVzL3NjaGVtYVwiKTtcbnZhciBTY2hlbWFTZXJpYWxpemVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjaGVtYVNlcmlhbGl6ZXIoKSB7XG4gICAgfVxuICAgIFNjaGVtYVNlcmlhbGl6ZXIucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHJhd1N0YXRlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZGVjb2RlKHJhd1N0YXRlKTtcbiAgICB9O1xuICAgIFNjaGVtYVNlcmlhbGl6ZXIucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9O1xuICAgIFNjaGVtYVNlcmlhbGl6ZXIucHJvdG90eXBlLnBhdGNoID0gZnVuY3Rpb24gKHBhdGNoZXMpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5kZWNvZGUocGF0Y2hlcyk7XG4gICAgfTtcbiAgICBTY2hlbWFTZXJpYWxpemVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5vblJlbW92ZVxuICAgIH07XG4gICAgU2NoZW1hU2VyaWFsaXplci5wcm90b3R5cGUuaGFuZHNoYWtlID0gZnVuY3Rpb24gKGJ5dGVzLCBpdCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSkge1xuICAgICAgICAgICAgLy8gdmFsaWRhdGUgY2xpZW50L3NlcnZlciBkZWZpbml0aW5vc1xuICAgICAgICAgICAgdmFyIHJlZmxlY3Rpb24gPSBuZXcgc2NoZW1hXzEuUmVmbGVjdGlvbigpO1xuICAgICAgICAgICAgcmVmbGVjdGlvbi5kZWNvZGUoYnl0ZXMsIGl0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGluaXRpYWxpemUgcmVmbGVjdGVkIHN0YXRlIGZyb20gc2VydmVyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gc2NoZW1hXzEuUmVmbGVjdGlvbi5kZWNvZGUoYnl0ZXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU2NoZW1hU2VyaWFsaXplcjtcbn0oKSk7XG5leHBvcnRzLlNjaGVtYVNlcmlhbGl6ZXIgPSBTY2hlbWFTZXJpYWxpemVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldFNlcmlhbGl6ZXIgPSBleHBvcnRzLnJlZ2lzdGVyU2VyaWFsaXplciA9IHZvaWQgMDtcbnZhciBzZXJpYWxpemVycyA9IHt9O1xuZnVuY3Rpb24gcmVnaXN0ZXJTZXJpYWxpemVyKGlkLCBzZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplcnNbaWRdID0gc2VyaWFsaXplcjtcbn1cbmV4cG9ydHMucmVnaXN0ZXJTZXJpYWxpemVyID0gcmVnaXN0ZXJTZXJpYWxpemVyO1xuZnVuY3Rpb24gZ2V0U2VyaWFsaXplcihpZCkge1xuICAgIHJldHVybiBzZXJpYWxpemVyc1tpZF07XG59XG5leHBvcnRzLmdldFNlcmlhbGl6ZXIgPSBnZXRTZXJpYWxpemVyO1xuIiwiZnVuY3Rpb24gYXBwbHkoc3JjLCB0YXIpIHtcblx0dGFyLmhlYWRlcnMgPSBzcmMuaGVhZGVycyB8fCB7fTtcblx0dGFyLnN0YXR1c01lc3NhZ2UgPSBzcmMuc3RhdHVzVGV4dDtcblx0dGFyLnN0YXR1c0NvZGUgPSBzcmMuc3RhdHVzO1xuXHR0YXIuZGF0YSA9IHNyYy5yZXNwb25zZTtcbn1cblxuZXhwb3J0cy5zZW5kID0gZnVuY3Rpb24gKG1ldGhvZCwgdXJpLCBvcHRzKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzLCByZWopIHtcblx0XHRvcHRzID0gb3B0cyB8fCB7fTtcblx0XHR2YXIgaywgc3RyLCB0bXAsIGFycjtcblx0XHR2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0O1xuXHRcdHZhciBoZWFkZXJzID0gb3B0cy5oZWFkZXJzIHx8IHt9O1xuXG5cdFx0Ly8gSUUgY29tcGF0aWJsZVxuXHRcdGlmIChvcHRzLnRpbWVvdXQpIHJlcS50aW1lb3V0ID0gb3B0cy50aW1lb3V0O1xuXHRcdHJlcS5vbnRpbWVvdXQgPSByZXEub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdGVyci50aW1lb3V0ID0gZXJyLnR5cGUgPT0gJ3RpbWVvdXQnO1xuXHRcdFx0cmVqKGVycik7XG5cdFx0fVxuXG5cdFx0cmVxLm9wZW4obWV0aG9kLCB1cmkuaHJlZiB8fCB1cmkpO1xuXG5cdFx0cmVxLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGFyciA9IHJlcS5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKS50cmltKCkuc3BsaXQoL1tcXHJcXG5dKy8pO1xuXHRcdFx0YXBwbHkocmVxLCByZXEpOyAvLz0+IHJlcS5oZWFkZXJzXG5cblx0XHRcdHdoaWxlICh0bXAgPSBhcnIuc2hpZnQoKSkge1xuXHRcdFx0XHR0bXAgPSB0bXAuc3BsaXQoJzogJyk7XG5cdFx0XHRcdHJlcS5oZWFkZXJzW3RtcC5zaGlmdCgpLnRvTG93ZXJDYXNlKCldID0gdG1wLmpvaW4oJzogJyk7XG5cdFx0XHR9XG5cblx0XHRcdHRtcCA9IHJlcS5oZWFkZXJzWydjb250ZW50LXR5cGUnXTtcblx0XHRcdGlmICh0bXAgJiYgISF+dG1wLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJlcS5kYXRhID0gSlNPTi5wYXJzZShyZXEuZGF0YSwgb3B0cy5yZXZpdmVyKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0YXBwbHkocmVxLCBlcnIpO1xuXHRcdFx0XHRcdHJldHVybiByZWooZXJyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQocmVxLnN0YXR1cyA+PSA0MDAgPyByZWogOiByZXMpKHJlcSk7XG5cdFx0fTtcblxuXHRcdGlmICgoc3RyID0gb3B0cy5ib2R5KSAmJiB0eXBlb2Ygc3RyID09ICdvYmplY3QnKSB7XG5cdFx0XHRoZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblx0XHRcdHN0ciA9IEpTT04uc3RyaW5naWZ5KHN0cik7XG5cdFx0fVxuXG5cdFx0cmVxLndpdGhDcmVkZW50aWFscyA9ICEhb3B0cy53aXRoQ3JlZGVudGlhbHM7XG5cblx0XHRmb3IgKGsgaW4gaGVhZGVycykge1xuXHRcdFx0cmVxLnNldFJlcXVlc3RIZWFkZXIoaywgaGVhZGVyc1trXSk7XG5cdFx0fVxuXG5cdFx0cmVxLnNlbmQoc3RyKTtcblx0fSk7XG59XG5cbmV4cG9ydHMuZ2V0ID0gZXhwb3J0cy5zZW5kLmJpbmQoZXhwb3J0cy5zZW5kLCAnR0VUJyk7XG5leHBvcnRzLnBvc3QgPSBleHBvcnRzLnNlbmQuYmluZChleHBvcnRzLnNlbmQsICdQT1NUJyk7XG5leHBvcnRzLnBhdGNoID0gZXhwb3J0cy5zZW5kLmJpbmQoZXhwb3J0cy5zZW5kLCAnUEFUQ0gnKTtcbmV4cG9ydHMuZGVsID0gZXhwb3J0cy5zZW5kLmJpbmQoZXhwb3J0cy5zZW5kLCAnREVMRVRFJyk7XG5leHBvcnRzLnB1dCA9IGV4cG9ydHMuc2VuZC5iaW5kKGV4cG9ydHMuc2VuZCwgJ1BVVCcpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2NoZW1hXzEgPSByZXF1aXJlKFwiLi9TY2hlbWFcIik7XG52YXIgQXJyYXlTY2hlbWFfMSA9IHJlcXVpcmUoXCIuL3R5cGVzL0FycmF5U2NoZW1hXCIpO1xudmFyIE1hcFNjaGVtYV8xID0gcmVxdWlyZShcIi4vdHlwZXMvTWFwU2NoZW1hXCIpO1xudmFyIENoYW5nZVRyZWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2hhbmdlVHJlZShpbmRleGVzLCBwYXJlbnRGaWVsZCwgcGFyZW50KSB7XG4gICAgICAgIGlmIChpbmRleGVzID09PSB2b2lkIDApIHsgaW5kZXhlcyA9IHt9OyB9XG4gICAgICAgIGlmIChwYXJlbnRGaWVsZCA9PT0gdm9pZCAwKSB7IHBhcmVudEZpZWxkID0gbnVsbDsgfVxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmFsbENoYW5nZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuZGVsZXRlZEtleXMgPSB7fTtcbiAgICAgICAgdGhpcy5maWVsZEluZGV4ZXMgPSBpbmRleGVzO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5wYXJlbnRGaWVsZCA9IHBhcmVudEZpZWxkO1xuICAgIH1cbiAgICBDaGFuZ2VUcmVlLnByb3RvdHlwZS5jaGFuZ2UgPSBmdW5jdGlvbiAoZmllbGROYW1lLCBpc0RlbGV0ZSkge1xuICAgICAgICBpZiAoaXNEZWxldGUgPT09IHZvaWQgMCkgeyBpc0RlbGV0ZSA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBmaWVsZEluZGV4ID0gdGhpcy5maWVsZEluZGV4ZXNbZmllbGROYW1lXTtcbiAgICAgICAgdmFyIGZpZWxkID0gKHR5cGVvZiAoZmllbGRJbmRleCkgPT09IFwibnVtYmVyXCIpID8gZmllbGRJbmRleCA6IGZpZWxkTmFtZTtcbiAgICAgICAgaWYgKCFpc0RlbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlcy5hZGQoZmllbGQpO1xuICAgICAgICAgICAgdGhpcy5hbGxDaGFuZ2VzLmFkZChmaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNEZWxldGUpIHtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmNoYW5nZXMuaGFzKGZpZWxkKSkgIHtcbiAgICAgICAgICAgIC8vICAgICAvKipcbiAgICAgICAgICAgIC8vICAgICAgKiB1bi1mbGFnIGEgY2hhbmdlIGlmIGl0ZW0gaGFzIGJlZW4gYWRkZWQgQU5EIHJlbW92ZWQgaW4gdGhlIHNhbWUgcGF0Y2guXG4gICAgICAgICAgICAvLyAgICAgICogKGh0dHBzOi8vZ2l0aHViLmNvbS9jb2x5c2V1cy9jb2x5c2V1cy11bml0eTNkL2lzc3Vlcy8xMDMpXG4gICAgICAgICAgICAvLyAgICAgICovXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jaGFuZ2VzLmRlbGV0ZShmaWVsZCk7XG4gICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlcy5hZGQoZmllbGQpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gZGlzY2FyZCBhbGwtY2hhbmdlcyBmb3IgcmVtb3ZlZCBpdGVtcy5cbiAgICAgICAgICAgIHRoaXMuYWxsQ2hhbmdlcy5kZWxldGUoZmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuY2hhbmdlKHRoaXMucGFyZW50RmllbGQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDaGFuZ2VUcmVlLnByb3RvdHlwZS5tYXBJbmRleCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2UgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbmRleE1hcCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleENoYW5nZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXhNYXAuc2V0KGluc3RhbmNlLCBrZXkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDaGFuZ2VUcmVlLnByb3RvdHlwZS5nZXRJbmRleCA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleE1hcCAmJiB0aGlzLmluZGV4TWFwLmdldChpbnN0YW5jZSk7XG4gICAgfTtcbiAgICBDaGFuZ2VUcmVlLnByb3RvdHlwZS5kZWxldGVJbmRleCA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZWRLZXlzW3RoaXMuaW5kZXhNYXAuZ2V0KGluc3RhbmNlKV0gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pbmRleE1hcC5kZWxldGUoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDaGFuZ2VUcmVlLnByb3RvdHlwZS5pc0RlbGV0ZWQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZWRLZXlzW2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIENoYW5nZVRyZWUucHJvdG90eXBlLm1hcEluZGV4Q2hhbmdlID0gZnVuY3Rpb24gKGluc3RhbmNlLCBwcmV2aW91c0tleSkge1xuICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlID09PSBcIm9iamVjdFwiICYmICF0aGlzLmluZGV4Q2hhbmdlLmhhcyhpbnN0YW5jZSkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXhDaGFuZ2Uuc2V0KGluc3RhbmNlLCBwcmV2aW91c0tleSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENoYW5nZVRyZWUucHJvdG90eXBlLmdldEluZGV4Q2hhbmdlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4Q2hhbmdlICYmIHRoaXMuaW5kZXhDaGFuZ2UuZ2V0KGluc3RhbmNlKTtcbiAgICB9O1xuICAgIENoYW5nZVRyZWUucHJvdG90eXBlLmRlbGV0ZUluZGV4Q2hhbmdlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2UgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXhDaGFuZ2UuZGVsZXRlKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2hhbmdlVHJlZS5wcm90b3R5cGUuY2hhbmdlQWxsID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgU2NoZW1hXzEuU2NoZW1hKSB7XG4gICAgICAgICAgICB2YXIgc2NoZW1hID0gb2JqWydfc2NoZW1hJ107XG4gICAgICAgICAgICBmb3IgKHZhciBmaWVsZCBpbiBzY2hlbWEpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgQXJyYXlTY2hlbWEgYW5kIE1hcFNjaGVtYSBhbHJlYWR5IGluaXRpYWxpemVkXG4gICAgICAgICAgICAgICAgLy8gb24gaXRzIHN0cnVjdHVyZSBoYXZlIGEgdmFsaWQgcGFyZW50LlxuICAgICAgICAgICAgICAgIGlmICgob2JqW2ZpZWxkXSBpbnN0YW5jZW9mIFNjaGVtYV8xLlNjaGVtYSB8fFxuICAgICAgICAgICAgICAgICAgICBvYmpbZmllbGRdIGluc3RhbmNlb2YgQXJyYXlTY2hlbWFfMS5BcnJheVNjaGVtYSB8fFxuICAgICAgICAgICAgICAgICAgICBvYmpbZmllbGRdIGluc3RhbmNlb2YgTWFwU2NoZW1hXzEuTWFwU2NoZW1hKSAmJlxuICAgICAgICAgICAgICAgICAgICAhb2JqW2ZpZWxkXS4kY2hhbmdlcy5wYXJlbnQucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIG9ialtmaWVsZF0uJGNoYW5nZXMucGFyZW50ID0gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9ialtmaWVsZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZShmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBrZXlzXzEgPSBrZXlzOyBfaSA8IGtleXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c18xW19pXTtcbiAgICAgICAgICAgICAgICBpZiAob2JqW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2hhbmdlVHJlZS5wcm90b3R5cGUuZGlzY2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hhbmdlcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmRlbGV0ZWRLZXlzID0ge307XG4gICAgICAgIGlmICh0aGlzLmluZGV4Q2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4Q2hhbmdlLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENoYW5nZVRyZWUucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IENoYW5nZVRyZWUodGhpcy5maWVsZEluZGV4ZXMsIHRoaXMucGFyZW50RmllbGQsIHVuZGVmaW5lZCk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2hhbmdlVHJlZTtcbn0oKSk7XG5leHBvcnRzLkNoYW5nZVRyZWUgPSBDaGFuZ2VUcmVlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2hhbmdlVHJlZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGFubm90YXRpb25zXzEgPSByZXF1aXJlKFwiLi9hbm5vdGF0aW9uc1wiKTtcbnZhciBTY2hlbWFfMSA9IHJlcXVpcmUoXCIuL1NjaGVtYVwiKTtcbnZhciBBcnJheVNjaGVtYV8xID0gcmVxdWlyZShcIi4vdHlwZXMvQXJyYXlTY2hlbWFcIik7XG52YXIgTWFwU2NoZW1hXzEgPSByZXF1aXJlKFwiLi90eXBlcy9NYXBTY2hlbWFcIik7XG52YXIgcmVmbGVjdGlvbkNvbnRleHQgPSBuZXcgYW5ub3RhdGlvbnNfMS5Db250ZXh0KCk7XG4vKipcbiAqIFJlZmxlY3Rpb25cbiAqL1xudmFyIFJlZmxlY3Rpb25GaWVsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUmVmbGVjdGlvbkZpZWxkLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlZmxlY3Rpb25GaWVsZCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgYW5ub3RhdGlvbnNfMS50eXBlKFwic3RyaW5nXCIsIHJlZmxlY3Rpb25Db250ZXh0KVxuICAgIF0sIFJlZmxlY3Rpb25GaWVsZC5wcm90b3R5cGUsIFwibmFtZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBhbm5vdGF0aW9uc18xLnR5cGUoXCJzdHJpbmdcIiwgcmVmbGVjdGlvbkNvbnRleHQpXG4gICAgXSwgUmVmbGVjdGlvbkZpZWxkLnByb3RvdHlwZSwgXCJ0eXBlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGFubm90YXRpb25zXzEudHlwZShcInVpbnQ4XCIsIHJlZmxlY3Rpb25Db250ZXh0KVxuICAgIF0sIFJlZmxlY3Rpb25GaWVsZC5wcm90b3R5cGUsIFwicmVmZXJlbmNlZFR5cGVcIiwgdm9pZCAwKTtcbiAgICByZXR1cm4gUmVmbGVjdGlvbkZpZWxkO1xufShTY2hlbWFfMS5TY2hlbWEpKTtcbmV4cG9ydHMuUmVmbGVjdGlvbkZpZWxkID0gUmVmbGVjdGlvbkZpZWxkO1xudmFyIFJlZmxlY3Rpb25UeXBlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSZWZsZWN0aW9uVHlwZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSZWZsZWN0aW9uVHlwZSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmZpZWxkcyA9IG5ldyBBcnJheVNjaGVtYV8xLkFycmF5U2NoZW1hKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGFubm90YXRpb25zXzEudHlwZShcInVpbnQ4XCIsIHJlZmxlY3Rpb25Db250ZXh0KVxuICAgIF0sIFJlZmxlY3Rpb25UeXBlLnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBhbm5vdGF0aW9uc18xLnR5cGUoW1JlZmxlY3Rpb25GaWVsZF0sIHJlZmxlY3Rpb25Db250ZXh0KVxuICAgIF0sIFJlZmxlY3Rpb25UeXBlLnByb3RvdHlwZSwgXCJmaWVsZHNcIiwgdm9pZCAwKTtcbiAgICByZXR1cm4gUmVmbGVjdGlvblR5cGU7XG59KFNjaGVtYV8xLlNjaGVtYSkpO1xuZXhwb3J0cy5SZWZsZWN0aW9uVHlwZSA9IFJlZmxlY3Rpb25UeXBlO1xudmFyIFJlZmxlY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJlZmxlY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUmVmbGVjdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnR5cGVzID0gbmV3IEFycmF5U2NoZW1hXzEuQXJyYXlTY2hlbWEoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBSZWZsZWN0aW9uLmVuY29kZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICB2YXIgcm9vdFNjaGVtYVR5cGUgPSBpbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgdmFyIHJlZmxlY3Rpb24gPSBuZXcgUmVmbGVjdGlvbigpO1xuICAgICAgICByZWZsZWN0aW9uLnJvb3RUeXBlID0gcm9vdFNjaGVtYVR5cGUuX3R5cGVpZDtcbiAgICAgICAgdmFyIGJ1aWxkVHlwZSA9IGZ1bmN0aW9uIChjdXJyZW50VHlwZSwgc2NoZW1hKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBmaWVsZE5hbWUgaW4gc2NoZW1hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkID0gbmV3IFJlZmxlY3Rpb25GaWVsZCgpO1xuICAgICAgICAgICAgICAgIGZpZWxkLm5hbWUgPSBmaWVsZE5hbWU7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkVHlwZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChzY2hlbWFbZmllbGROYW1lXSkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlID0gc2NoZW1hW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNTY2hlbWEgPSB0eXBlb2YgKHNjaGVtYVtmaWVsZE5hbWVdKSA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoc2NoZW1hW2ZpZWxkTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNNYXAgPSAhaXNBcnJheSAmJiBzY2hlbWFbZmllbGROYW1lXS5tYXA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZFR5cGVTY2hlbWEgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1NjaGVtYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlID0gXCJyZWZcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVHlwZVNjaGVtYSA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZSA9IFwiYXJyYXlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHNjaGVtYVtmaWVsZE5hbWVdWzBdKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZSArPSBcIjpcIiArIHNjaGVtYVtmaWVsZE5hbWVdWzBdOyAvLyBhcnJheTpzdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVHlwZVNjaGVtYSA9IHNjaGVtYVtmaWVsZE5hbWVdWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFR5cGUgPSBcIm1hcFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoc2NoZW1hW2ZpZWxkTmFtZV0ubWFwKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZSArPSBcIjpcIiArIHNjaGVtYVtmaWVsZE5hbWVdLm1hcDsgLy8gYXJyYXk6c3RyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFR5cGVTY2hlbWEgPSBzY2hlbWFbZmllbGROYW1lXS5tYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmllbGQucmVmZXJlbmNlZFR5cGUgPSAoY2hpbGRUeXBlU2NoZW1hKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGlsZFR5cGVTY2hlbWEuX3R5cGVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgOiAyNTU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpZWxkLnR5cGUgPSBmaWVsZFR5cGU7XG4gICAgICAgICAgICAgICAgY3VycmVudFR5cGUuZmllbGRzLnB1c2goZmllbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVmbGVjdGlvbi50eXBlcy5wdXNoKGN1cnJlbnRUeXBlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHR5cGVzID0gcm9vdFNjaGVtYVR5cGUuX2NvbnRleHQudHlwZXM7XG4gICAgICAgIGZvciAodmFyIHR5cGVpZCBpbiB0eXBlcykge1xuICAgICAgICAgICAgdmFyIHR5cGVfMSA9IG5ldyBSZWZsZWN0aW9uVHlwZSgpO1xuICAgICAgICAgICAgdHlwZV8xLmlkID0gTnVtYmVyKHR5cGVpZCk7XG4gICAgICAgICAgICBidWlsZFR5cGUodHlwZV8xLCB0eXBlc1t0eXBlaWRdLl9zY2hlbWEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWZsZWN0aW9uLmVuY29kZUFsbCgpO1xuICAgIH07XG4gICAgUmVmbGVjdGlvbi5kZWNvZGUgPSBmdW5jdGlvbiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBuZXcgYW5ub3RhdGlvbnNfMS5Db250ZXh0KCk7XG4gICAgICAgIHZhciByZWZsZWN0aW9uID0gbmV3IFJlZmxlY3Rpb24oKTtcbiAgICAgICAgcmVmbGVjdGlvbi5kZWNvZGUoYnl0ZXMpO1xuICAgICAgICB2YXIgc2NoZW1hVHlwZXMgPSByZWZsZWN0aW9uLnR5cGVzLnJlZHVjZShmdW5jdGlvbiAodHlwZXMsIHJlZmxlY3Rpb25UeXBlKSB7XG4gICAgICAgICAgICB0eXBlc1tyZWZsZWN0aW9uVHlwZS5pZF0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgICAgICAgICAgX19leHRlbmRzKF8sIF9zdXBlcik7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gXygpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gXztcbiAgICAgICAgICAgIH0oU2NoZW1hXzEuU2NoZW1hKSk7XG4gICAgICAgICAgICByZXR1cm4gdHlwZXM7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgcmVmbGVjdGlvbi50eXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWZsZWN0aW9uVHlwZSwgaSkge1xuICAgICAgICAgICAgcmVmbGVjdGlvblR5cGUuZmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjaGVtYVR5cGUgPSBzY2hlbWFUeXBlc1tyZWZsZWN0aW9uVHlwZS5pZF07XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnJlZmVyZW5jZWRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZlR5cGUgPSBzY2hlbWFUeXBlc1tmaWVsZC5yZWZlcmVuY2VkVHlwZV07XG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcCBvciBhcnJheSBvZiBwcmltaXRpdmUgdHlwZSAoMjU1KVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlZlR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZlR5cGUgPSBmaWVsZC50eXBlLnNwbGl0KFwiOlwiKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQudHlwZS5pbmRleE9mKFwiYXJyYXlcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25zXzEudHlwZShbcmVmVHlwZV0sIGNvbnRleHQpKHNjaGVtYVR5cGUucHJvdG90eXBlLCBmaWVsZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWVsZC50eXBlLmluZGV4T2YoXCJtYXBcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25zXzEudHlwZSh7IG1hcDogcmVmVHlwZSB9LCBjb250ZXh0KShzY2hlbWFUeXBlLnByb3RvdHlwZSwgZmllbGQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gXCJyZWZcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbnNfMS50eXBlKHJlZlR5cGUsIGNvbnRleHQpKHNjaGVtYVR5cGUucHJvdG90eXBlLCBmaWVsZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbnNfMS50eXBlKGZpZWxkLnR5cGUsIGNvbnRleHQpKHNjaGVtYVR5cGUucHJvdG90eXBlLCBmaWVsZC5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByb290VHlwZSA9IHNjaGVtYVR5cGVzW3JlZmxlY3Rpb24ucm9vdFR5cGVdO1xuICAgICAgICB2YXIgcm9vdEluc3RhbmNlID0gbmV3IHJvb3RUeXBlKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhdXRvLWluaXRpYWxpemUgcmVmZXJlbmNlZCB0eXBlcyBvbiByb290IHR5cGVcbiAgICAgICAgICogdG8gYWxsb3cgcmVnaXN0ZXJpbmcgbGlzdGVuZXJzIGltbWVkaWF0ZWxseSBvbiBjbGllbnQtc2lkZVxuICAgICAgICAgKi9cbiAgICAgICAgZm9yICh2YXIgZmllbGROYW1lIGluIHJvb3RUeXBlLl9zY2hlbWEpIHtcbiAgICAgICAgICAgIHZhciBmaWVsZFR5cGUgPSByb290VHlwZS5fc2NoZW1hW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIChmaWVsZFR5cGUpICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzU2NoZW1hID0gdHlwZW9mIChmaWVsZFR5cGUpID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICAgICAgICAgICAgdmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGZpZWxkVHlwZSk7XG4gICAgICAgICAgICAgICAgdmFyIGlzTWFwID0gIWlzQXJyYXkgJiYgZmllbGRUeXBlLm1hcDtcbiAgICAgICAgICAgICAgICByb290SW5zdGFuY2VbZmllbGROYW1lXSA9IChpc0FycmF5KVxuICAgICAgICAgICAgICAgICAgICA/IG5ldyBBcnJheVNjaGVtYV8xLkFycmF5U2NoZW1hKClcbiAgICAgICAgICAgICAgICAgICAgOiAoaXNNYXApXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG5ldyBNYXBTY2hlbWFfMS5NYXBTY2hlbWEoKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoaXNTY2hlbWEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgZmllbGRUeXBlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdEluc3RhbmNlO1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGFubm90YXRpb25zXzEudHlwZShbUmVmbGVjdGlvblR5cGVdLCByZWZsZWN0aW9uQ29udGV4dClcbiAgICBdLCBSZWZsZWN0aW9uLnByb3RvdHlwZSwgXCJ0eXBlc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBhbm5vdGF0aW9uc18xLnR5cGUoXCJ1aW50OFwiLCByZWZsZWN0aW9uQ29udGV4dClcbiAgICBdLCBSZWZsZWN0aW9uLnByb3RvdHlwZSwgXCJyb290VHlwZVwiLCB2b2lkIDApO1xuICAgIHJldHVybiBSZWZsZWN0aW9uO1xufShTY2hlbWFfMS5TY2hlbWEpKTtcbmV4cG9ydHMuUmVmbGVjdGlvbiA9IFJlZmxlY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1SZWZsZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc3BlY18xID0gcmVxdWlyZShcIi4vc3BlY1wiKTtcbnZhciBlbmNvZGUgPSByZXF1aXJlKFwiLi9lbmNvZGluZy9lbmNvZGVcIik7XG52YXIgZGVjb2RlID0gcmVxdWlyZShcIi4vZW5jb2RpbmcvZGVjb2RlXCIpO1xudmFyIEFycmF5U2NoZW1hXzEgPSByZXF1aXJlKFwiLi90eXBlcy9BcnJheVNjaGVtYVwiKTtcbnZhciBNYXBTY2hlbWFfMSA9IHJlcXVpcmUoXCIuL3R5cGVzL01hcFNjaGVtYVwiKTtcbnZhciBDaGFuZ2VUcmVlXzEgPSByZXF1aXJlKFwiLi9DaGFuZ2VUcmVlXCIpO1xudmFyIEV2ZW50RW1pdHRlcl8xID0gcmVxdWlyZShcIi4vZXZlbnRzL0V2ZW50RW1pdHRlclwiKTtcbnZhciBFbmNvZGVTY2hlbWFFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRW5jb2RlU2NoZW1hRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRW5jb2RlU2NoZW1hRXJyb3IoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEVuY29kZVNjaGVtYUVycm9yO1xufShFcnJvcikpO1xuZnVuY3Rpb24gYXNzZXJ0VHlwZSh2YWx1ZSwgdHlwZSwga2xhc3MsIGZpZWxkKSB7XG4gICAgdmFyIHR5cGVvZlRhcmdldDtcbiAgICB2YXIgYWxsb3dOdWxsID0gZmFsc2U7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgY2FzZSBcImludDhcIjpcbiAgICAgICAgY2FzZSBcInVpbnQ4XCI6XG4gICAgICAgIGNhc2UgXCJpbnQxNlwiOlxuICAgICAgICBjYXNlIFwidWludDE2XCI6XG4gICAgICAgIGNhc2UgXCJpbnQzMlwiOlxuICAgICAgICBjYXNlIFwidWludDMyXCI6XG4gICAgICAgIGNhc2UgXCJpbnQ2NFwiOlxuICAgICAgICBjYXNlIFwidWludDY0XCI6XG4gICAgICAgIGNhc2UgXCJmbG9hdDMyXCI6XG4gICAgICAgIGNhc2UgXCJmbG9hdDY0XCI6XG4gICAgICAgICAgICB0eXBlb2ZUYXJnZXQgPSBcIm51bWJlclwiO1xuICAgICAgICAgICAgaWYgKGlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJ5aW5nIHRvIGVuY29kZSBcXFwiTmFOXFxcIiBpbiBcIiArIGtsYXNzLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiNcIiArIGZpZWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICB0eXBlb2ZUYXJnZXQgPSBcInN0cmluZ1wiO1xuICAgICAgICAgICAgYWxsb3dOdWxsID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgLy8gYm9vbGVhbiBpcyBhbHdheXMgZW5jb2RlZCBhcyB0cnVlL2ZhbHNlIGJhc2VkIG9uIHRydXRoaW5lc3NcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiAodmFsdWUpICE9PSB0eXBlb2ZUYXJnZXQgJiYgKCFhbGxvd051bGwgfHwgKGFsbG93TnVsbCAmJiB2YWx1ZSAhPT0gbnVsbCkpKSB7XG4gICAgICAgIHZhciBmb3VuZFZhbHVlID0gXCInXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyBcIidcIiArICh2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciAmJiBcIiAoXCIgKyB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lICsgXCIpXCIpO1xuICAgICAgICB0aHJvdyBuZXcgRW5jb2RlU2NoZW1hRXJyb3IoXCJhICdcIiArIHR5cGVvZlRhcmdldCArIFwiJyB3YXMgZXhwZWN0ZWQsIGJ1dCBcIiArIGZvdW5kVmFsdWUgKyBcIiB3YXMgcHJvdmlkZWQgaW4gXCIgKyBrbGFzcy5jb25zdHJ1Y3Rvci5uYW1lICsgXCIjXCIgKyBmaWVsZCk7XG4gICAgfVxufVxuZnVuY3Rpb24gYXNzZXJ0SW5zdGFuY2VUeXBlKHZhbHVlLCB0eXBlLCBrbGFzcywgZmllbGQpIHtcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIHR5cGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFbmNvZGVTY2hlbWFFcnJvcihcImEgJ1wiICsgdHlwZS5uYW1lICsgXCInIHdhcyBleHBlY3RlZCwgYnV0ICdcIiArIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgKyBcIicgd2FzIHByb3ZpZGVkIGluIFwiICsga2xhc3MuY29uc3RydWN0b3IubmFtZSArIFwiI1wiICsgZmllbGQpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGVuY29kZVByaW1pdGl2ZVR5cGUodHlwZSwgYnl0ZXMsIHZhbHVlLCBrbGFzcywgZmllbGQpIHtcbiAgICBhc3NlcnRUeXBlKHZhbHVlLCB0eXBlLCBrbGFzcywgZmllbGQpO1xuICAgIHZhciBlbmNvZGVGdW5jID0gZW5jb2RlW3R5cGVdO1xuICAgIGlmIChlbmNvZGVGdW5jKSB7XG4gICAgICAgIGVuY29kZUZ1bmMoYnl0ZXMsIHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFbmNvZGVTY2hlbWFFcnJvcihcImEgJ1wiICsgdHlwZSArIFwiJyB3YXMgZXhwZWN0ZWQsIGJ1dCBcIiArIHZhbHVlICsgXCIgd2FzIHByb3ZpZGVkIGluIFwiICsga2xhc3MuY29uc3RydWN0b3IubmFtZSArIFwiI1wiICsgZmllbGQpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRlY29kZVByaW1pdGl2ZVR5cGUodHlwZSwgYnl0ZXMsIGl0KSB7XG4gICAgcmV0dXJuIGRlY29kZVt0eXBlXShieXRlcywgaXQpO1xufVxuLyoqXG4gKiBTY2hlbWEgZW5jb2RlciAvIGRlY29kZXJcbiAqL1xudmFyIFNjaGVtYSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBhbGxvdyBpbmhlcml0ZWQgY2xhc3NlcyB0byBoYXZlIGEgY29uc3RydWN0b3JcbiAgICBmdW5jdGlvbiBTY2hlbWEoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gZml4IGVudW1lcmFiaWxpdHkgb2YgZmllbGRzIGZvciBlbmQtdXNlclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICAkY2hhbmdlczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgQ2hhbmdlVHJlZV8xLkNoYW5nZVRyZWUodGhpcy5faW5kZXhlcyksXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHt9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3JzID0gdGhpcy5fZGVzY3JpcHRvcnM7XG4gICAgICAgIGlmIChkZXNjcmlwdG9ycykge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywgZGVzY3JpcHRvcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFNjaGVtYS5vbkVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2hlbWEucHJvdG90eXBlLCBcIl9zY2hlbWFcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuX3NjaGVtYTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjaGVtYS5wcm90b3R5cGUsIFwiX2Rlc2NyaXB0b3JzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLl9kZXNjcmlwdG9yczsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjaGVtYS5wcm90b3R5cGUsIFwiX2luZGV4ZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuX2luZGV4ZXM7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2hlbWEucHJvdG90eXBlLCBcIl9maWVsZHNCeUluZGV4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLl9maWVsZHNCeUluZGV4OyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2NoZW1hLnByb3RvdHlwZSwgXCJfZmlsdGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5fZmlsdGVyczsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjaGVtYS5wcm90b3R5cGUsIFwiX2RlcHJlY2F0ZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuX2RlcHJlY2F0ZWQ7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2hlbWEucHJvdG90eXBlLCBcIiRjaGFuZ2VkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLiRjaGFuZ2VzLmNoYW5nZWQ7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFNjaGVtYS5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gKGF0dHIsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy4kbGlzdGVuZXJzW2F0dHJdKSB7XG4gICAgICAgICAgICB0aGlzLiRsaXN0ZW5lcnNbYXR0cl0gPSBuZXcgRXZlbnRFbWl0dGVyXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kbGlzdGVuZXJzW2F0dHJdLnJlZ2lzdGVyKGNhbGxiYWNrKTtcbiAgICAgICAgLy8gcmV0dXJuIHVuLXJlZ2lzdGVyIGNhbGxiYWNrLlxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLiRsaXN0ZW5lcnNbYXR0cl0ucmVtb3ZlKGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFNjaGVtYS5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24gKGJ5dGVzLCBpdCkge1xuICAgICAgICBpZiAoaXQgPT09IHZvaWQgMCkgeyBpdCA9IHsgb2Zmc2V0OiAwIH07IH1cbiAgICAgICAgdmFyIGNoYW5nZXMgPSBbXTtcbiAgICAgICAgdmFyIHNjaGVtYSA9IHRoaXMuX3NjaGVtYTtcbiAgICAgICAgdmFyIGZpZWxkc0J5SW5kZXggPSB0aGlzLl9maWVsZHNCeUluZGV4O1xuICAgICAgICB2YXIgdG90YWxCeXRlcyA9IGJ5dGVzLmxlbmd0aDtcbiAgICAgICAgLy8gc2tpcCBUWVBFX0lEIG9mIGV4aXN0aW5nIGluc3RhbmNlc1xuICAgICAgICBpZiAoYnl0ZXNbaXQub2Zmc2V0XSA9PT0gc3BlY18xLlRZUEVfSUQpIHtcbiAgICAgICAgICAgIGl0Lm9mZnNldCArPSAyO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGlzTmlsID0gZGVjb2RlLm5pbENoZWNrKGJ5dGVzLCBpdCkgJiYgKytpdC5vZmZzZXQ7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBieXRlc1tpdC5vZmZzZXQrK107XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IHNwZWNfMS5FTkRfT0ZfU1RSVUNUVVJFKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmaWVsZCA9IGZpZWxkc0J5SW5kZXhbaW5kZXhdO1xuICAgICAgICAgICAgdmFyIF9maWVsZCA9IFwiX1wiICsgZmllbGQ7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IHNjaGVtYVtmaWVsZF07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgaGFzQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIWZpZWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzTmlsKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlLl9zY2hlbWEpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXNfMVtfZmllbGRdIHx8IHRoaXNfMS5jcmVhdGVUeXBlSW5zdGFuY2UoYnl0ZXMsIGl0LCB0eXBlKTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5kZWNvZGUoYnl0ZXMsIGl0KTtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSB0eXBlWzBdO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZVJlZl8xID0gdGhpc18xW19maWVsZF0gfHwgbmV3IEFycmF5U2NoZW1hXzEuQXJyYXlTY2hlbWEoKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlUmVmXzEuY2xvbmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0xlbmd0aF8xID0gZGVjb2RlLm51bWJlcihieXRlcywgaXQpO1xuICAgICAgICAgICAgICAgIHZhciBudW1DaGFuZ2VzID0gTWF0aC5taW4oZGVjb2RlLm51bWJlcihieXRlcywgaXQpLCBuZXdMZW5ndGhfMSk7XG4gICAgICAgICAgICAgICAgdmFyIGhhc1JlbW92YWwgPSAodmFsdWUubGVuZ3RoID4gbmV3TGVuZ3RoXzEpO1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZSA9IChudW1DaGFuZ2VzID4gMCkgfHwgaGFzUmVtb3ZhbDtcbiAgICAgICAgICAgICAgICAvLyBGSVhNRTogdGhpcyBtYXkgbm90IGJlIHJlbGlhYmxlLiBwb3NzaWJseSBuZWVkIHRvIGVuY29kZSB0aGlzIHZhcmlhYmxlIGR1cmluZyBzZXJpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdmFyIGhhc0luZGV4Q2hhbmdlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIGN1cnJlbnQgYXJyYXkgaGFzIHRoZSBzYW1lIGxlbmd0aCBhcyBlbmNvZGVkIG9uZVxuICAgICAgICAgICAgICAgIGlmIChoYXNSZW1vdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRlY3JlYXNlIHJlbW92ZWQgaXRlbXMgZnJvbSBudW1iZXIgb2YgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gbmVlZCB0byBpdGVyYXRlIHRocm91Z2ggdGhlbSwgYXMgdGhleSdyZSBnb2luZyB0byBiZSByZW1vdmVkLlxuICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwodmFsdWUsIG5ld0xlbmd0aF8xKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtUmVtb3ZlZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1SZW1vdmVkICYmIGl0ZW1SZW1vdmVkLm9uUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVJlbW92ZWQub25SZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2NoZW1hLm9uRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlUmVmXzEub25SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVJlZl8xLm9uUmVtb3ZlKGl0ZW1SZW1vdmVkLCBuZXdMZW5ndGhfMSArIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTY2hlbWEub25FcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNoYW5nZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3SW5kZXggPSBkZWNvZGUubnVtYmVyKGJ5dGVzLCBpdCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleENoYW5nZWRGcm9tID0gdm9pZCAwOyAvLyBpbmRleCBjaGFuZ2UgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlY29kZS5pbmRleENoYW5nZUNoZWNrKGJ5dGVzLCBpdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZS51aW50OChieXRlcywgaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDaGFuZ2VkRnJvbSA9IGRlY29kZS5udW1iZXIoYnl0ZXMsIGl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0luZGV4Q2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNOZXcgPSAoIWhhc0luZGV4Q2hhbmdlICYmIHZhbHVlW25ld0luZGV4XSA9PT0gdW5kZWZpbmVkKSB8fCAoaGFzSW5kZXhDaGFuZ2UgJiYgaW5kZXhDaGFuZ2VkRnJvbSA9PT0gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUucHJvdG90eXBlIGluc3RhbmNlb2YgU2NoZW1hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05ldykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzXzEuY3JlYXRlVHlwZUluc3RhbmNlKGJ5dGVzLCBpdCwgdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpbmRleENoYW5nZWRGcm9tICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gdmFsdWVSZWZfMVtpbmRleENoYW5nZWRGcm9tXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB2YWx1ZVJlZl8xW25ld0luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzXzEuY3JlYXRlVHlwZUluc3RhbmNlKGJ5dGVzLCBpdCwgdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOZXcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5kZWNvZGUoYnl0ZXMsIGl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW25ld0luZGV4XSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtuZXdJbmRleF0gPSBkZWNvZGVQcmltaXRpdmVUeXBlKHR5cGUsIGJ5dGVzLCBpdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmV3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVSZWZfMS5vbkFkZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUmVmXzEub25BZGQodmFsdWVbbmV3SW5kZXhdLCBuZXdJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNjaGVtYS5vbkVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZVJlZl8xLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUmVmXzEub25DaGFuZ2UodmFsdWVbbmV3SW5kZXhdLCBuZXdJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNjaGVtYS5vbkVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZS5tYXApIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gdHlwZS5tYXA7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlUmVmID0gdGhpc18xW19maWVsZF0gfHwgbmV3IE1hcFNjaGVtYV8xLk1hcFNjaGVtYSgpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVSZWYuY2xvbmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGRlY29kZS5udW1iZXIoYnl0ZXMsIGl0KTtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2UgPSAobGVuZ3RoID4gMCk7XG4gICAgICAgICAgICAgICAgLy8gRklYTUU6IHRoaXMgbWF5IG5vdCBiZSByZWxpYWJsZS4gcG9zc2libHkgbmVlZCB0byBlbmNvZGUgdGhpcyB2YXJpYWJsZSBkdXJpbmdcbiAgICAgICAgICAgICAgICAvLyBzZXJpYWxpemFnaW9uXG4gICAgICAgICAgICAgICAgdmFyIGhhc0luZGV4Q2hhbmdlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzS2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlUmVmKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGBlbmNvZGVBbGxgIG1heSBpbmRpY2F0ZSBhIGhpZ2hlciBudW1iZXIgb2YgaW5kZXhlcyBpdCBhY3R1YWxseSBlbmNvZGVzXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGRvIG5vdCBlbmNvZGUgYSBoaWdoZXIgbnVtYmVyIHRoYW4gYWN0dWFsIGVuY29kZWQgZW50cmllc1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnl0ZXNbaXQub2Zmc2V0XSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBieXRlc1tpdC5vZmZzZXRdID09PSBzcGVjXzEuRU5EX09GX1NUUlVDVFVSRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzTmlsSXRlbSA9IGRlY29kZS5uaWxDaGVjayhieXRlcywgaXQpICYmICsraXQub2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAvLyBpbmRleCBjaGFuZ2UgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzS2V5ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVjb2RlLmluZGV4Q2hhbmdlQ2hlY2soYnl0ZXMsIGl0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlLnVpbnQ4KGJ5dGVzLCBpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0tleSA9IHByZXZpb3VzS2V5c1tkZWNvZGUubnVtYmVyKGJ5dGVzLCBpdCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzSW5kZXhDaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYXNNYXBJbmRleCA9IGRlY29kZS5udW1iZXJDaGVjayhieXRlcywgaXQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNTY2hlbWFUeXBlID0gdHlwZW9mICh0eXBlKSAhPT0gXCJzdHJpbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0tleSA9IChoYXNNYXBJbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcHJldmlvdXNLZXlzW2RlY29kZS5udW1iZXIoYnl0ZXMsIGl0KV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlLnN0cmluZyhieXRlcywgaXQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzTmV3ID0gKCFoYXNJbmRleENoYW5nZSAmJiB2YWx1ZVJlZltuZXdLZXldID09PSB1bmRlZmluZWQpIHx8IChoYXNJbmRleENoYW5nZSAmJiBwcmV2aW91c0tleSA9PT0gdW5kZWZpbmVkICYmIGhhc01hcEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmV3ICYmIGlzU2NoZW1hVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHRoaXNfMS5jcmVhdGVUeXBlSW5zdGFuY2UoYnl0ZXMsIGl0LCB0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcmV2aW91c0tleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gdmFsdWVSZWZbcHJldmlvdXNLZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHZhbHVlUmVmW25ld0tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmlsSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5vblJlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub25SZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2NoZW1hLm9uRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlUmVmLm9uUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVSZWYub25SZW1vdmUoaXRlbSwgbmV3S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2NoZW1hLm9uRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbHVlW25ld0tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNTY2hlbWFUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtuZXdLZXldID0gZGVjb2RlUHJpbWl0aXZlVHlwZSh0eXBlLCBieXRlcywgaXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5kZWNvZGUoYnl0ZXMsIGl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW25ld0tleV0gPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05ldykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlUmVmLm9uQWRkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVSZWYub25BZGQodmFsdWVbbmV3S2V5XSwgbmV3S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2NoZW1hLm9uRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlUmVmLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUmVmLm9uQ2hhbmdlKHZhbHVlW25ld0tleV0sIG5ld0tleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNjaGVtYS5vbkVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkZWNvZGVQcmltaXRpdmVUeXBlKHR5cGUsIGJ5dGVzLCBpdCk7XG4gICAgICAgICAgICAgICAgLy8gRklYTUU6IHNob3VsZCBub3QgZXZlbiBoYXZlIGVuY29kZWQgaWYgdmFsdWUgaGF2ZW4ndCBjaGFuZ2VkIGluIHRoZSBmaXJzdCBwbGFjZSFcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBGaWx0ZXJUZXN0LnRzOiBcInNob3VsZCBub3QgdHJpZ2dlciBgb25DaGFuZ2VgIGlmIGZpZWxkIGhhdmVuJ3QgY2hhbmdlZFwiXG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlID0gKHZhbHVlICE9PSB0aGlzXzFbX2ZpZWxkXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzQ2hhbmdlICYmICh0aGlzXzEub25DaGFuZ2UgfHwgdGhpc18xLiRsaXN0ZW5lcnNbZmllbGRdKSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1ZhbHVlOiB0aGlzXzFbX2ZpZWxkXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc18xW19maWVsZF0gPSB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHRoaXNfMSA9IHRoaXM7XG4gICAgICAgIHdoaWxlIChpdC5vZmZzZXQgPCB0b3RhbEJ5dGVzKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGVfMSA9IF9sb29wXzEoKTtcbiAgICAgICAgICAgIGlmIChzdGF0ZV8xID09PSBcImJyZWFrXCIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdHJpZ2dlckNoYW5nZXMoY2hhbmdlcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgU2NoZW1hLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbiAocm9vdCwgZW5jb2RlQWxsLCBjbGllbnQsIGJ5dGVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChyb290ID09PSB2b2lkIDApIHsgcm9vdCA9IHRoaXM7IH1cbiAgICAgICAgaWYgKGVuY29kZUFsbCA9PT0gdm9pZCAwKSB7IGVuY29kZUFsbCA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChieXRlcyA9PT0gdm9pZCAwKSB7IGJ5dGVzID0gW107IH1cbiAgICAgICAgLy8gc2tpcCBpZiBub3RoaW5nIGhhcyBjaGFuZ2VkXG4gICAgICAgIGlmICghdGhpcy4kY2hhbmdlcy5jaGFuZ2VkICYmICFlbmNvZGVBbGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2VuY29kZUVuZE9mU3RydWN0dXJlKHRoaXMsIHJvb3QsIGJ5dGVzKTtcbiAgICAgICAgICAgIHJldHVybiBieXRlcztcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2NoZW1hID0gdGhpcy5fc2NoZW1hO1xuICAgICAgICB2YXIgaW5kZXhlcyA9IHRoaXMuX2luZGV4ZXM7XG4gICAgICAgIHZhciBmaWVsZHNCeUluZGV4ID0gdGhpcy5fZmllbGRzQnlJbmRleDtcbiAgICAgICAgdmFyIGZpbHRlcnMgPSB0aGlzLl9maWx0ZXJzO1xuICAgICAgICB2YXIgY2hhbmdlcyA9IEFycmF5LmZyb20oKGVuY29kZUFsbCkgLy8gIHx8IGNsaWVudFxuICAgICAgICAgICAgPyB0aGlzLiRjaGFuZ2VzLmFsbENoYW5nZXNcbiAgICAgICAgICAgIDogdGhpcy4kY2hhbmdlcy5jaGFuZ2VzKS5zb3J0KCk7XG4gICAgICAgIHZhciBfbG9vcF8yID0gZnVuY3Rpb24gKGksIGwpIHtcbiAgICAgICAgICAgIHZhciBmaWVsZCA9IGZpZWxkc0J5SW5kZXhbY2hhbmdlc1tpXV0gfHwgY2hhbmdlc1tpXTtcbiAgICAgICAgICAgIHZhciBfZmllbGQgPSBcIl9cIiArIGZpZWxkO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBzY2hlbWFbZmllbGRdO1xuICAgICAgICAgICAgdmFyIGZpbHRlciA9IChmaWx0ZXJzICYmIGZpbHRlcnNbZmllbGRdKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHZhbHVlID0gKGZpbHRlciAmJiB0aGlzLiRhbGxDaGFuZ2VzW2ZpZWxkXSkgfHwgY2hhbmdlc1tmaWVsZF07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzXzJbX2ZpZWxkXTtcbiAgICAgICAgICAgIHZhciBmaWVsZEluZGV4ID0gaW5kZXhlc1tmaWVsZF07XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGVuY29kZS51aW50OChieXRlcywgc3BlY18xLk5JTCk7XG4gICAgICAgICAgICAgICAgZW5jb2RlLm51bWJlcihieXRlcywgZmllbGRJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlLl9zY2hlbWEpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xpZW50ICYmIGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBza2lwIGlmIG5vdCBhbGxvd2VkIGJ5IGN1c3RvbSBmaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWx0ZXIuY2FsbCh0aGlzXzIsIGNsaWVudCwgdmFsdWUsIHJvb3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWUgaGFzIGJlZW4gcmVtb3ZlZFxuICAgICAgICAgICAgICAgICAgICBlbmNvZGUudWludDgoYnl0ZXMsIHNwZWNfMS5OSUwpO1xuICAgICAgICAgICAgICAgICAgICBlbmNvZGUubnVtYmVyKGJ5dGVzLCBmaWVsZEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVuY29kZSBjaGlsZCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlLm51bWJlcihieXRlcywgZmllbGRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydEluc3RhbmNlVHlwZSh2YWx1ZSwgdHlwZSwgdGhpc18yLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNfMi50cnlFbmNvZGVUeXBlSWQoYnl0ZXMsIHR5cGUsIHZhbHVlLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuZW5jb2RlKHJvb3QsIGVuY29kZUFsbCwgY2xpZW50LCBieXRlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICAgICAgICAgIHZhciAkY2hhbmdlcyA9IHZhbHVlLiRjaGFuZ2VzO1xuICAgICAgICAgICAgICAgIGlmIChjbGllbnQgJiYgZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNraXAgaWYgbm90IGFsbG93ZWQgYnkgY3VzdG9tIGZpbHRlclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbHRlci5jYWxsKHRoaXNfMiwgY2xpZW50LCB2YWx1ZSwgcm9vdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZW5jb2RlLm51bWJlcihieXRlcywgZmllbGRJbmRleCk7XG4gICAgICAgICAgICAgICAgLy8gdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgIGVuY29kZS5udW1iZXIoYnl0ZXMsIHZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdmFyIGFycmF5Q2hhbmdlcyA9IEFycmF5LmZyb20oKGVuY29kZUFsbCkgLy8gIHx8IGNsaWVudFxuICAgICAgICAgICAgICAgICAgICA/ICRjaGFuZ2VzLmFsbENoYW5nZXNcbiAgICAgICAgICAgICAgICAgICAgOiAkY2hhbmdlcy5jaGFuZ2VzKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gX3RoaXNbX2ZpZWxkXVtpbmRleF0gIT09IHVuZGVmaW5lZDsgfSlcbiAgICAgICAgICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgLSBiOyB9KTtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgbnVtYmVyIG9mIGNoYW5nZXMgZG9lc24ndCBleGNlZWQgYXJyYXkgbGVuZ3RoXG4gICAgICAgICAgICAgICAgdmFyIG51bUNoYW5nZXMgPSBhcnJheUNoYW5nZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIC8vIG51bWJlciBvZiBjaGFuZ2VkIGl0ZW1zXG4gICAgICAgICAgICAgICAgZW5jb2RlLm51bWJlcihieXRlcywgbnVtQ2hhbmdlcyk7XG4gICAgICAgICAgICAgICAgdmFyIGlzQ2hpbGRTY2hlbWEgPSB0eXBlb2YgKHR5cGVbMF0pICE9PSBcInN0cmluZ1wiO1xuICAgICAgICAgICAgICAgIC8vIGFzc2VydCBBcnJheVNjaGVtYSB3YXMgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICBhc3NlcnRJbnN0YW5jZVR5cGUodGhpc18yW19maWVsZF0sIEFycmF5U2NoZW1hXzEuQXJyYXlTY2hlbWEsIHRoaXNfMiwgZmllbGQpO1xuICAgICAgICAgICAgICAgIC8vIGVuY29kZSBBcnJheSBvZiB0eXBlXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBudW1DaGFuZ2VzOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gYXJyYXlDaGFuZ2VzW2pdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXNfMltfZmllbGRdW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIFRPRE86IGZpbHRlciBhcnJheSBieSBpdGVtcyBpbnN0ZWFkIG9mIHRoZSB3aG9sZSBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChjbGllbnQgJiYgZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBza2lwIGlmIG5vdCBhbGxvd2VkIGJ5IGN1c3RvbSBmaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmICghZmlsdGVyLmNhbGwodGhpcywgY2xpZW50LCBpdGVtLCByb290KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0NoaWxkU2NoZW1hKSB7IC8vIGlzIGFycmF5IG9mIFNjaGVtYVxuICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlLm51bWJlcihieXRlcywgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbmNvZGVBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhDaGFuZ2UgPSAkY2hhbmdlcy5nZXRJbmRleENoYW5nZShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhDaGFuZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGUudWludDgoYnl0ZXMsIHNwZWNfMS5JTkRFWF9DSEFOR0UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGUubnVtYmVyKGJ5dGVzLCBpbmRleENoYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0SW5zdGFuY2VUeXBlKGl0ZW0sIHR5cGVbMF0sIHRoaXNfMiwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc18yLnRyeUVuY29kZVR5cGVJZChieXRlcywgdHlwZVswXSwgaXRlbS5jb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmVuY29kZShyb290LCBlbmNvZGVBbGwsIGNsaWVudCwgYnl0ZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0gIT09IHVuZGVmaW5lZCkgeyAvLyBpcyBhcnJheSBvZiBwcmltaXRpdmVzXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGUubnVtYmVyKGJ5dGVzLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGVQcmltaXRpdmVUeXBlKHR5cGVbMF0sIGJ5dGVzLCBpdGVtLCB0aGlzXzIsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVuY29kZUFsbCAmJiAhY2xpZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRjaGFuZ2VzLmRpc2NhcmQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlLm1hcCkge1xuICAgICAgICAgICAgICAgIHZhciAkY2hhbmdlcyA9IHZhbHVlLiRjaGFuZ2VzO1xuICAgICAgICAgICAgICAgIGlmIChjbGllbnQgJiYgZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNraXAgaWYgbm90IGFsbG93ZWQgYnkgY3VzdG9tIGZpbHRlclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbHRlci5jYWxsKHRoaXNfMiwgY2xpZW50LCB2YWx1ZSwgcm9vdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZW5jb2RlIE1hcCBvZiB0eXBlXG4gICAgICAgICAgICAgICAgZW5jb2RlLm51bWJlcihieXRlcywgZmllbGRJbmRleCk7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogZHVyaW5nIGBlbmNvZGVBbGxgLCByZW1vdmVkIGVudHJpZXMgYXJlIG5vdCBnb2luZyB0byBiZSBlbmNvZGVkXG4gICAgICAgICAgICAgICAgdmFyIGtleXMgPSBBcnJheS5mcm9tKChlbmNvZGVBbGwpIC8vICB8fCBjbGllbnRcbiAgICAgICAgICAgICAgICAgICAgPyAkY2hhbmdlcy5hbGxDaGFuZ2VzXG4gICAgICAgICAgICAgICAgICAgIDogJGNoYW5nZXMuY2hhbmdlcyk7XG4gICAgICAgICAgICAgICAgZW5jb2RlLm51bWJlcihieXRlcywga2V5cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByZXZpb3VzS2V5cyA9IE9iamVjdC5rZXlzKHRoaXNbX2ZpZWxkXSk7IC8vIHRoaXMgaXMgY29zdGx5IVxuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c0tleXMgPSBBcnJheS5mcm9tKCRjaGFuZ2VzLmFsbENoYW5nZXMpO1xuICAgICAgICAgICAgICAgIHZhciBpc0NoaWxkU2NoZW1hID0gdHlwZW9mICh0eXBlLm1hcCkgIT09IFwic3RyaW5nXCI7XG4gICAgICAgICAgICAgICAgdmFyIG51bUNoYW5nZXMgPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAvLyBhc3NlcnQgTWFwU2NoZW1hIHdhcyBwcm92aWRlZFxuICAgICAgICAgICAgICAgIGFzc2VydEluc3RhbmNlVHlwZSh0aGlzXzJbX2ZpZWxkXSwgTWFwU2NoZW1hXzEuTWFwU2NoZW1hLCB0aGlzXzIsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpXzEgPSAwOyBpXzEgPCBudW1DaGFuZ2VzOyBpXzErKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXzFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXNfMltfZmllbGRdW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXBJdGVtSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBUT0RPOiBmaWx0ZXIgbWFwIGJ5IGl0ZW1zIGluc3RlYWQgb2YgdGhlIHdob2xlIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGNsaWVudCAmJiBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIHNraXAgaWYgbm90IGFsbG93ZWQgYnkgY3VzdG9tIGZpbHRlclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKCFmaWx0ZXIuY2FsbCh0aGlzLCBjbGllbnQsIGl0ZW0sIHJvb3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuY29kZUFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzbHkgZGVsZXRlZCBpdGVtcyBhcmUgc2tpcHBlZCBkdXJpbmcgYGVuY29kZUFsbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuY29kZSBpbmRleCBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleENoYW5nZSA9ICRjaGFuZ2VzLmdldEluZGV4Q2hhbmdlKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gJiYgaW5kZXhDaGFuZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuY29kZS51aW50OChieXRlcywgc3BlY18xLklOREVYX0NIQU5HRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlLm51bWJlcihieXRlcywgdGhpc18yW19maWVsZF0uX2luZGV4ZXMuZ2V0KGluZGV4Q2hhbmdlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIC0gQWxsb3cgaXRlbSByZXBsYWNlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICogLSBBbGxvdyB0byB1c2UgdGhlIGluZGV4IG9mIGEgZGVsZXRlZCBpdGVtIHRvIGVuY29kZSBhcyBOSUxcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwSXRlbUluZGV4ID0gKCEkY2hhbmdlcy5pc0RlbGV0ZWQoa2V5KSB8fCAhaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXNfMltfZmllbGRdLl9pbmRleGVzLmdldChrZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzTmlsID0gKGl0ZW0gPT09IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBJbnZlcnQgTklMIHRvIHByZXZlbnQgY29sbGlzaW9uIHdpdGggZGF0YSBzdGFydGluZyB3aXRoIE5JTCBieXRlXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlJFTU9WRSBLRVkgSU5ERVhcIiwgeyBrZXkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzW19maWVsZF0uX2luZGV4ZXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGUudWludDgoYnl0ZXMsIHNwZWNfMS5OSUwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXBJdGVtSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlLm51bWJlcihieXRlcywgbWFwSXRlbUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuY29kZS5zdHJpbmcoYnl0ZXMsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gJiYgaXNDaGlsZFNjaGVtYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0SW5zdGFuY2VUeXBlKGl0ZW0sIHR5cGUubWFwLCB0aGlzXzIsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNfMi50cnlFbmNvZGVUeXBlSWQoYnl0ZXMsIHR5cGUubWFwLCBpdGVtLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZW5jb2RlKHJvb3QsIGVuY29kZUFsbCwgY2xpZW50LCBieXRlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzTmlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGVQcmltaXRpdmVUeXBlKHR5cGUubWFwLCBieXRlcywgaXRlbSwgdGhpc18yLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlbmNvZGVBbGwgJiYgIWNsaWVudCkge1xuICAgICAgICAgICAgICAgICAgICAkY2hhbmdlcy5kaXNjYXJkKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHRyYWNrIGFycmF5L21hcCBpbmRleGVzIHBlciBjbGllbnQgKGZvciBmaWx0ZXJpbmcpP1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBkbyBub3QgaXRlcmF0ZSB0aG91Z2ggYWxsIE1hcFNjaGVtYSBpbmRleGVzIGhlcmUuXG4gICAgICAgICAgICAgICAgICAgIHRoaXNfMltfZmllbGRdLl91cGRhdGVJbmRleGVzKHByZXZpb3VzS2V5cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsaWVudCAmJiBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2tpcCBpZiBub3QgYWxsb3dlZCBieSBjdXN0b20gZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZmlsdGVyLmNhbGwodGhpc18yLCBjbGllbnQsIHZhbHVlLCByb290KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbmNvZGUubnVtYmVyKGJ5dGVzLCBmaWVsZEluZGV4KTtcbiAgICAgICAgICAgICAgICBlbmNvZGVQcmltaXRpdmVUeXBlKHR5cGUsIGJ5dGVzLCB2YWx1ZSwgdGhpc18yLCBmaWVsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciB0aGlzXzIgPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoYW5nZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8yKGksIGwpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZsYWcgZW5kIG9mIFNjaGVtYSBvYmplY3Qgc3RydWN0dXJlXG4gICAgICAgIHRoaXMuX2VuY29kZUVuZE9mU3RydWN0dXJlKHRoaXMsIHJvb3QsIGJ5dGVzKTtcbiAgICAgICAgaWYgKCFlbmNvZGVBbGwgJiYgIWNsaWVudCkge1xuICAgICAgICAgICAgdGhpcy4kY2hhbmdlcy5kaXNjYXJkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH07XG4gICAgU2NoZW1hLnByb3RvdHlwZS5lbmNvZGVGaWx0ZXJlZCA9IGZ1bmN0aW9uIChjbGllbnQsIGJ5dGVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuY29kZSh0aGlzLCBmYWxzZSwgY2xpZW50LCBieXRlcyk7XG4gICAgfTtcbiAgICBTY2hlbWEucHJvdG90eXBlLmVuY29kZUFsbCA9IGZ1bmN0aW9uIChieXRlcykge1xuICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUodGhpcywgdHJ1ZSwgdW5kZWZpbmVkLCBieXRlcyk7XG4gICAgfTtcbiAgICBTY2hlbWEucHJvdG90eXBlLmVuY29kZUFsbEZpbHRlcmVkID0gZnVuY3Rpb24gKGNsaWVudCwgYnl0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlKHRoaXMsIHRydWUsIGNsaWVudCwgYnl0ZXMpO1xuICAgIH07XG4gICAgU2NoZW1hLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNsb25lZCA9IG5ldyAodGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIHZhciBzY2hlbWEgPSB0aGlzLl9zY2hlbWE7XG4gICAgICAgIGZvciAodmFyIGZpZWxkIGluIHNjaGVtYSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpc1tmaWVsZF0pID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mICh0aGlzW2ZpZWxkXS5jbG9uZSkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIGRlZXAgY2xvbmVcbiAgICAgICAgICAgICAgICBjbG9uZWRbZmllbGRdID0gdGhpc1tmaWVsZF0uY2xvbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHByaW1pdGl2ZSB2YWx1ZXNcbiAgICAgICAgICAgICAgICBjbG9uZWRbZmllbGRdID0gdGhpc1tmaWVsZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICB9O1xuICAgIFNjaGVtYS5wcm90b3R5cGUudHJpZ2dlckFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNoYW5nZXMgPSBbXTtcbiAgICAgICAgdmFyIHNjaGVtYSA9IHRoaXMuX3NjaGVtYTtcbiAgICAgICAgZm9yICh2YXIgZmllbGQgaW4gc2NoZW1hKSB7XG4gICAgICAgICAgICBpZiAodGhpc1tmaWVsZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNoYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXNbZmllbGRdLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1ZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fdHJpZ2dlckNoYW5nZXMoY2hhbmdlcyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIFNjaGVtYS5vbkVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY2hlbWEucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNjaGVtYSA9IHRoaXMuX3NjaGVtYTtcbiAgICAgICAgdmFyIGRlcHJlY2F0ZWQgPSB0aGlzLl9kZXByZWNhdGVkO1xuICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgIGZvciAodmFyIGZpZWxkIGluIHNjaGVtYSkge1xuICAgICAgICAgICAgaWYgKCFkZXByZWNhdGVkW2ZpZWxkXSAmJiB0aGlzW2ZpZWxkXSAhPT0gbnVsbCAmJiB0eXBlb2YgKHRoaXNbZmllbGRdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIG9ialtmaWVsZF0gPSAodHlwZW9mICh0aGlzW2ZpZWxkXS50b0pTT04pID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgID8gdGhpc1tmaWVsZF0udG9KU09OKClcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzW1wiX1wiICsgZmllbGRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgICBTY2hlbWEucHJvdG90eXBlLmRpc2NhcmRBbGxDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2NoZW1hID0gdGhpcy5fc2NoZW1hO1xuICAgICAgICB2YXIgY2hhbmdlcyA9IEFycmF5LmZyb20odGhpcy4kY2hhbmdlcy5jaGFuZ2VzKTtcbiAgICAgICAgdmFyIGZpZWxkc0J5SW5kZXggPSB0aGlzLl9maWVsZHNCeUluZGV4O1xuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICB2YXIgZmllbGQgPSBmaWVsZHNCeUluZGV4W2luZGV4XTtcbiAgICAgICAgICAgIHZhciB0eXBlID0gc2NoZW1hW2ZpZWxkXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXNbZmllbGRdO1xuICAgICAgICAgICAgLy8gc2tpcCB1bmNoYWduZWQgZmllbGRzXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUuX3NjaGVtYSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmRpc2NhcmRBbGxDaGFuZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4XzEgPSB2YWx1ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzW1wiX1wiICsgZmllbGRdW2luZGV4XzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0eXBlWzBdKSAhPT0gXCJzdHJpbmdcIiAmJiBpdGVtKSB7IC8vIGlzIGFycmF5IG9mIFNjaGVtYVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5kaXNjYXJkQWxsQ2hhbmdlcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlLiRjaGFuZ2VzLmRpc2NhcmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUubWFwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleXMgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgbWFwS2V5cyA9IE9iamVjdC5rZXlzKHRoaXNbXCJfXCIgKyBmaWVsZF0pO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gbWFwS2V5c1trZXlzW2ldXSB8fCBrZXlzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXNbXCJfXCIgKyBmaWVsZF1ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBTY2hlbWEgJiYgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5kaXNjYXJkQWxsQ2hhbmdlcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlLiRjaGFuZ2VzLmRpc2NhcmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRjaGFuZ2VzLmRpc2NhcmQoKTtcbiAgICB9O1xuICAgIFNjaGVtYS5wcm90b3R5cGUuX2VuY29kZUVuZE9mU3RydWN0dXJlID0gZnVuY3Rpb24gKGluc3RhbmNlLCByb290LCBieXRlcykge1xuICAgICAgICBpZiAoaW5zdGFuY2UgIT09IHJvb3QpIHtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goc3BlY18xLkVORF9PRl9TVFJVQ1RVUkUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY2hlbWEucHJvdG90eXBlLnRyeUVuY29kZVR5cGVJZCA9IGZ1bmN0aW9uIChieXRlcywgdHlwZSwgdGFyZ2V0VHlwZSkge1xuICAgICAgICBpZiAodHlwZS5fdHlwZWlkICE9PSB0YXJnZXRUeXBlLl90eXBlaWQpIHtcbiAgICAgICAgICAgIGVuY29kZS51aW50OChieXRlcywgc3BlY18xLlRZUEVfSUQpO1xuICAgICAgICAgICAgZW5jb2RlLnVpbnQ4KGJ5dGVzLCB0YXJnZXRUeXBlLl90eXBlaWQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY2hlbWEucHJvdG90eXBlLmNyZWF0ZVR5cGVJbnN0YW5jZSA9IGZ1bmN0aW9uIChieXRlcywgaXQsIHR5cGUpIHtcbiAgICAgICAgaWYgKGJ5dGVzW2l0Lm9mZnNldF0gPT09IHNwZWNfMS5UWVBFX0lEKSB7XG4gICAgICAgICAgICBpdC5vZmZzZXQrKztcbiAgICAgICAgICAgIHZhciBhbm90aGVyVHlwZSA9IHRoaXMuY29uc3RydWN0b3IuX2NvbnRleHQuZ2V0KGRlY29kZS51aW50OChieXRlcywgaXQpKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgYW5vdGhlclR5cGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgdHlwZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY2hlbWEucHJvdG90eXBlLl90cmlnZ2VyQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuJGxpc3RlbmVyc1tjaGFuZ2UuZmllbGRdO1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuaW52b2tlKGNoYW5nZS52YWx1ZSwgY2hhbmdlLnByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTY2hlbWEub25FcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgU2NoZW1hLm9uRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU2NoZW1hO1xufSgpKTtcbmV4cG9ydHMuU2NoZW1hID0gU2NoZW1hO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2NoZW1hLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIENoYW5nZVRyZWVfMSA9IHJlcXVpcmUoXCIuL0NoYW5nZVRyZWVcIik7XG52YXIgU2NoZW1hXzEgPSByZXF1aXJlKFwiLi9TY2hlbWFcIik7XG52YXIgQ29udGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb250ZXh0KCkge1xuICAgICAgICB0aGlzLnR5cGVzID0ge307XG4gICAgICAgIHRoaXMuc2NoZW1hcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgQ29udGV4dC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKHNjaGVtYSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWFzLmhhcyhzY2hlbWEpO1xuICAgIH07XG4gICAgQ29udGV4dC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHR5cGVpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlc1t0eXBlaWRdO1xuICAgIH07XG4gICAgQ29udGV4dC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHNjaGVtYSkge1xuICAgICAgICBzY2hlbWEuX3R5cGVpZCA9IHRoaXMuc2NoZW1hcy5zaXplO1xuICAgICAgICB0aGlzLnR5cGVzW3NjaGVtYS5fdHlwZWlkXSA9IHNjaGVtYTtcbiAgICAgICAgdGhpcy5zY2hlbWFzLnNldChzY2hlbWEsIHNjaGVtYS5fdHlwZWlkKTtcbiAgICB9O1xuICAgIHJldHVybiBDb250ZXh0O1xufSgpKTtcbmV4cG9ydHMuQ29udGV4dCA9IENvbnRleHQ7XG5leHBvcnRzLmdsb2JhbENvbnRleHQgPSBuZXcgQ29udGV4dCgpO1xuLyoqXG4gKiBgQHR5cGUoKWAgZGVjb3JhdG9yIGZvciBwcm94aWVzXG4gKi9cbmZ1bmN0aW9uIHR5cGUodHlwZSwgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IGV4cG9ydHMuZ2xvYmFsQ29udGV4dDsgfVxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBmaWVsZCkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3IgPSB0YXJnZXQuY29uc3RydWN0b3I7XG4gICAgICAgIGNvbnN0cnVjdG9yLl9jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgLypcbiAgICAgICAgICogc3RhdGljIHNjaGVtYVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCFjb250ZXh0Lmhhcyhjb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnRleHQuYWRkKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgIC8vIHN1cHBvcnQgaW5oZXJpdGFuY2VcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yLl9zY2hlbWEgPSBPYmplY3QuYXNzaWduKHt9LCBjb25zdHJ1Y3Rvci5fc2NoZW1hIHx8IHt9KTtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yLl9pbmRleGVzID0gT2JqZWN0LmFzc2lnbih7fSwgY29uc3RydWN0b3IuX2luZGV4ZXMgfHwge30pO1xuICAgICAgICAgICAgY29uc3RydWN0b3IuX2ZpZWxkc0J5SW5kZXggPSBPYmplY3QuYXNzaWduKHt9LCBjb25zdHJ1Y3Rvci5fZmllbGRzQnlJbmRleCB8fCB7fSk7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvci5fZGVzY3JpcHRvcnMgPSBPYmplY3QuYXNzaWduKHt9LCBjb25zdHJ1Y3Rvci5fZGVzY3JpcHRvcnMgfHwge30pO1xuICAgICAgICAgICAgY29uc3RydWN0b3IuX2RlcHJlY2F0ZWQgPSBPYmplY3QuYXNzaWduKHt9LCBjb25zdHJ1Y3Rvci5fZGVwcmVjYXRlZCB8fCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gT2JqZWN0LmtleXMoY29uc3RydWN0b3IuX3NjaGVtYSkubGVuZ3RoO1xuICAgICAgICBjb25zdHJ1Y3Rvci5fZmllbGRzQnlJbmRleFtpbmRleF0gPSBmaWVsZDtcbiAgICAgICAgY29uc3RydWN0b3IuX2luZGV4ZXNbZmllbGRdID0gaW5kZXg7XG4gICAgICAgIGNvbnN0cnVjdG9yLl9zY2hlbWFbZmllbGRdID0gdHlwZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNraXAgaWYgZGVzY3JpcHRvciBhbHJlYWR5IGV4aXN0cyBmb3IgdGhpcyBmaWVsZCAoYEBkZXByZWNhdGVkKClgKVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9yLl9kZXNjcmlwdG9yc1tmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogVE9ETzogYGlzU2NoZW1hYCAvIGBpc0FycmF5YCAvIGBpc01hcGAgaXMgcmVwZWF0ZWQgb24gbWFueSBwbGFjZXMhXG4gICAgICAgICAqIG5lZWQgdG8gcmVmYWN0b3IgYWxsIG9mIHRoZW0uXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkodHlwZSk7XG4gICAgICAgIHZhciBpc01hcCA9ICFpc0FycmF5ICYmIHR5cGUubWFwO1xuICAgICAgICB2YXIgaXNTY2hlbWEgPSAodHlwZW9mIChjb25zdHJ1Y3Rvci5fc2NoZW1hW2ZpZWxkXSkgPT09IFwiZnVuY3Rpb25cIik7XG4gICAgICAgIHZhciBmaWVsZENhY2hlZCA9IFwiX1wiICsgZmllbGQ7XG4gICAgICAgIGNvbnN0cnVjdG9yLl9kZXNjcmlwdG9yc1tmaWVsZENhY2hlZF0gPSB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3RydWN0b3IuX2Rlc2NyaXB0b3JzW2ZpZWxkXSA9IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2ZpZWxkQ2FjaGVkXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIENyZWF0ZSBQcm94eSBmb3IgYXJyYXkgb3IgbWFwIGl0ZW1zXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkgfHwgaXNNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgUHJveHkodmFsdWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKG9iaiwgcHJvcCkgeyByZXR1cm4gb2JqW3Byb3BdOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAob2JqLCBwcm9wLCBzZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wICE9PSBcImxlbmd0aFwiICYmIHByb3AuaW5kZXhPZihcIiRcIikgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIG5ldyB2YWx1ZSBoYXMgYSBwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IChpc0FycmF5KSA/IE51bWJlcihwcm9wKSA6IFN0cmluZyhwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvYmouJHNvcnRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyYWNrIGluZGV4IGNoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzSW5kZXggPSBvYmouJGNoYW5nZXMuZ2V0SW5kZXgoc2V0VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai4kY2hhbmdlcy5tYXBJbmRleENoYW5nZShzZXRWYWx1ZSwgcHJldmlvdXNJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouJGNoYW5nZXMubWFwSW5kZXgoc2V0VmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGlzTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBvYmouX2luZGV4ZXMuZGVsZXRlKHByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXRWYWx1ZSBpbnN0YW5jZW9mIFNjaGVtYV8xLlNjaGVtYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmV3IGl0ZW1zIGFyZSBmbGFnZ2VkIHdpdGggYWxsIGNoYW5nZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2V0VmFsdWUuJGNoYW5nZXMucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUuJGNoYW5nZXMgPSBuZXcgQ2hhbmdlVHJlZV8xLkNoYW5nZVRyZWUoc2V0VmFsdWUuX2luZGV4ZXMsIGtleSwgb2JqLiRjaGFuZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZS4kY2hhbmdlcy5jaGFuZ2VBbGwoc2V0VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gc2V0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXBwbHkgY2hhbmdlIG9uIEFycmF5U2NoZW1hIC8gTWFwU2NoZW1hXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai4kY2hhbmdlcy5jaGFuZ2Uoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc2V0VmFsdWUgIT09IG9ialtwcm9wXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNFVCBORVcgTEVOR1RIOlwiLCBzZXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUFJFVklPVVMgTEVOR1RIOiBcIiwgb2JqW3Byb3BdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gc2V0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uIChvYmosIHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZXRlZFZhbHVlID0gb2JqW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc01hcCAmJiBkZWxldGVkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouJGNoYW5nZXMuZGVsZXRlSW5kZXgoZGVsZXRlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLiRjaGFuZ2VzLmRlbGV0ZUluZGV4Q2hhbmdlKGRlbGV0ZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWxldGVkVmFsdWUuJGNoYW5nZXMpIHsgLy8gZGVsZXRlZFZhbHVlIG1heSBiZSBhIHByaW1pdGl2ZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRlbGV0ZWRWYWx1ZS4kY2hhbmdlcy5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2JqLl9pbmRleGVzLmRlbGV0ZShwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9ialtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gKGlzQXJyYXkpID8gTnVtYmVyKHByb3ApIDogU3RyaW5nKHByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai4kY2hhbmdlcy5jaGFuZ2Uoa2V5LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBza2lwIGlmIHZhbHVlIGlzIHRoZSBzYW1lIGFzIGNhY2hlZC5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHRoaXNbZmllbGRDYWNoZWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpc1tmaWVsZENhY2hlZF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBkaXJlY3RseSBhc3NpZ25pbmcgYW4gYXJyYXkgb2YgaXRlbXMgYXMgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNoYW5nZXMuY2hhbmdlKGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuJGNoYW5nZXMgPSBuZXcgQ2hhbmdlVHJlZV8xLkNoYW5nZVRyZWUoe30sIGZpZWxkLCB0aGlzLiRjaGFuZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlW2ldIGluc3RhbmNlb2YgU2NoZW1hXzEuU2NoZW1hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbaV0uJGNoYW5nZXMgPSBuZXcgQ2hhbmdlVHJlZV8xLkNoYW5nZVRyZWUodmFsdWVbaV0uX2luZGV4ZXMsIGksIHZhbHVlLiRjaGFuZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtpXS4kY2hhbmdlcy5jaGFuZ2VBbGwodmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuJGNoYW5nZXMubWFwSW5kZXgodmFsdWVbaV0sIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuJGNoYW5nZXMuY2hhbmdlKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpcmVjdGx5IGFzc2lnbmluZyBhIG1hcFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS4kY2hhbmdlcyA9IG5ldyBDaGFuZ2VUcmVlXzEuQ2hhbmdlVHJlZSh7fSwgZmllbGQsIHRoaXMuJGNoYW5nZXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjaGFuZ2VzLmNoYW5nZShmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlW2tleV0gaW5zdGFuY2VvZiBTY2hlbWFfMS5TY2hlbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtrZXldLiRjaGFuZ2VzID0gbmV3IENoYW5nZVRyZWVfMS5DaGFuZ2VUcmVlKHZhbHVlW2tleV0uX2luZGV4ZXMsIGtleSwgdmFsdWUuJGNoYW5nZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2tleV0uJGNoYW5nZXMuY2hhbmdlQWxsKHZhbHVlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuJGNoYW5nZXMubWFwSW5kZXgodmFsdWVba2V5XSwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLiRjaGFuZ2VzLmNoYW5nZShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzU2NoZW1hKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpcmVjdGx5IGFzc2lnbmluZyBhIGBTY2hlbWFgIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZSBtYXkgYmUgc2V0IHRvIG51bGxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2hhbmdlcy5jaGFuZ2UoZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLiRjaGFuZ2VzID0gbmV3IENoYW5nZVRyZWVfMS5DaGFuZ2VUcmVlKHZhbHVlLl9pbmRleGVzLCBmaWVsZCwgdGhpcy4kY2hhbmdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS4kY2hhbmdlcy5jaGFuZ2VBbGwodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBkaXJlY3RseSBhc3NpZ25pbmcgYSBwcmltaXRpdmUgdHlwZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjaGFuZ2VzLmNoYW5nZShmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfTtcbiAgICB9O1xufVxuZXhwb3J0cy50eXBlID0gdHlwZTtcbi8qKlxuICogYEBmaWx0ZXIoKWAgZGVjb3JhdG9yIGZvciBkZWZpbmluZyBkYXRhIGZpbHRlcnMgcGVyIGNsaWVudFxuICovXG5mdW5jdGlvbiBmaWx0ZXIoY2IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgZmllbGQpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICAgICAgICAvKlxuICAgICAgICAgKiBzdGF0aWMgZmlsdGVyc1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCFjb25zdHJ1Y3Rvci5fZmlsdGVycykge1xuICAgICAgICAgICAgY29uc3RydWN0b3IuX2ZpbHRlcnMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdHJ1Y3Rvci5fZmlsdGVyc1tmaWVsZF0gPSBjYjtcbiAgICB9O1xufVxuZXhwb3J0cy5maWx0ZXIgPSBmaWx0ZXI7XG4vKipcbiAqIGBAZGVwcmVjYXRlZCgpYCBmbGFnIGEgZmllbGQgYXMgZGVwcmVjYXRlZC5cbiAqIFRoZSBwcmV2aW91cyBgQHR5cGUoKWAgYW5ub3RhdGlvbiBzaG91bGQgcmVtYWluIGFsb25nIHdpdGggdGhpcyBvbmUuXG4gKi9cbmZ1bmN0aW9uIGRlcHJlY2F0ZWQodGhyb3dzLCBjb250ZXh0KSB7XG4gICAgaWYgKHRocm93cyA9PT0gdm9pZCAwKSB7IHRocm93cyA9IHRydWU7IH1cbiAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSBleHBvcnRzLmdsb2JhbENvbnRleHQ7IH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgZmllbGQpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICAgICAgICBjb25zdHJ1Y3Rvci5fZGVwcmVjYXRlZFtmaWVsZF0gPSB0cnVlO1xuICAgICAgICBpZiAodGhyb3dzKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvci5fZGVzY3JpcHRvcnNbZmllbGRdID0ge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyB0aHJvdyBuZXcgRXJyb3IoZmllbGQgKyBcIiBpcyBkZXByZWNhdGVkLlwiKTsgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmRlcHJlY2F0ZWQgPSBkZXByZWNhdGVkO1xuZnVuY3Rpb24gZGVmaW5lVHlwZXModGFyZ2V0LCBmaWVsZHMsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSBleHBvcnRzLmdsb2JhbENvbnRleHQ7IH1cbiAgICBmb3IgKHZhciBmaWVsZCBpbiBmaWVsZHMpIHtcbiAgICAgICAgdHlwZShmaWVsZHNbZmllbGRdLCBjb250ZXh0KSh0YXJnZXQucHJvdG90eXBlLCBmaWVsZCk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5leHBvcnRzLmRlZmluZVR5cGVzID0gZGVmaW5lVHlwZXM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbm5vdGF0aW9ucy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBzcGVjXzEgPSByZXF1aXJlKFwiLi4vc3BlY1wiKTtcbmZ1bmN0aW9uIHV0ZjhSZWFkKGJ5dGVzLCBvZmZzZXQsIGxlbmd0aCkge1xuICAgIHZhciBzdHJpbmcgPSAnJywgY2hyID0gMDtcbiAgICBmb3IgKHZhciBpID0gb2Zmc2V0LCBlbmQgPSBvZmZzZXQgKyBsZW5ndGg7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICB2YXIgYnl0ZSA9IGJ5dGVzW2ldO1xuICAgICAgICBpZiAoKGJ5dGUgJiAweDgwKSA9PT0gMHgwMCkge1xuICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGJ5dGUgJiAweGUwKSA9PT0gMHhjMCkge1xuICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChieXRlICYgMHgxZikgPDwgNikgfFxuICAgICAgICAgICAgICAgIChieXRlc1srK2ldICYgMHgzZikpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChieXRlICYgMHhmMCkgPT09IDB4ZTApIHtcbiAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYnl0ZSAmIDB4MGYpIDw8IDEyKSB8XG4gICAgICAgICAgICAgICAgKChieXRlc1srK2ldICYgMHgzZikgPDwgNikgfFxuICAgICAgICAgICAgICAgICgoYnl0ZXNbKytpXSAmIDB4M2YpIDw8IDApKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoYnl0ZSAmIDB4ZjgpID09PSAweGYwKSB7XG4gICAgICAgICAgICBjaHIgPSAoKGJ5dGUgJiAweDA3KSA8PCAxOCkgfFxuICAgICAgICAgICAgICAgICgoYnl0ZXNbKytpXSAmIDB4M2YpIDw8IDEyKSB8XG4gICAgICAgICAgICAgICAgKChieXRlc1srK2ldICYgMHgzZikgPDwgNikgfFxuICAgICAgICAgICAgICAgICgoYnl0ZXNbKytpXSAmIDB4M2YpIDw8IDApO1xuICAgICAgICAgICAgaWYgKGNociA+PSAweDAxMDAwMCkgeyAvLyBzdXJyb2dhdGUgcGFpclxuICAgICAgICAgICAgICAgIGNociAtPSAweDAxMDAwMDtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoY2hyID4+PiAxMCkgKyAweEQ4MDAsIChjaHIgJiAweDNGRikgKyAweERDMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBieXRlICcgKyBieXRlLnRvU3RyaW5nKDE2KSk7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmc7XG59XG5mdW5jdGlvbiBpbnQ4KGJ5dGVzLCBpdCkge1xuICAgIHJldHVybiB1aW50OChieXRlcywgaXQpIDw8IDI0ID4+IDI0O1xufVxuZXhwb3J0cy5pbnQ4ID0gaW50ODtcbjtcbmZ1bmN0aW9uIHVpbnQ4KGJ5dGVzLCBpdCkge1xuICAgIHJldHVybiBieXRlc1tpdC5vZmZzZXQrK107XG59XG5leHBvcnRzLnVpbnQ4ID0gdWludDg7XG47XG5mdW5jdGlvbiBpbnQxNihieXRlcywgaXQpIHtcbiAgICByZXR1cm4gdWludDE2KGJ5dGVzLCBpdCkgPDwgMTYgPj4gMTY7XG59XG5leHBvcnRzLmludDE2ID0gaW50MTY7XG47XG5mdW5jdGlvbiB1aW50MTYoYnl0ZXMsIGl0KSB7XG4gICAgcmV0dXJuIGJ5dGVzW2l0Lm9mZnNldCsrXSB8IGJ5dGVzW2l0Lm9mZnNldCsrXSA8PCA4O1xufVxuZXhwb3J0cy51aW50MTYgPSB1aW50MTY7XG47XG5mdW5jdGlvbiBpbnQzMihieXRlcywgaXQpIHtcbiAgICByZXR1cm4gYnl0ZXNbaXQub2Zmc2V0KytdIHwgYnl0ZXNbaXQub2Zmc2V0KytdIDw8IDggfCBieXRlc1tpdC5vZmZzZXQrK10gPDwgMTYgfCBieXRlc1tpdC5vZmZzZXQrK10gPDwgMjQ7XG59XG5leHBvcnRzLmludDMyID0gaW50MzI7XG47XG5mdW5jdGlvbiB1aW50MzIoYnl0ZXMsIGl0KSB7XG4gICAgcmV0dXJuIGludDMyKGJ5dGVzLCBpdCkgPj4+IDA7XG59XG5leHBvcnRzLnVpbnQzMiA9IHVpbnQzMjtcbjtcbmZ1bmN0aW9uIGZsb2F0MzIoYnl0ZXMsIGl0KSB7XG4gICAgcmV0dXJuIHJlYWRGbG9hdDMyKGJ5dGVzLCBpdCk7XG59XG5leHBvcnRzLmZsb2F0MzIgPSBmbG9hdDMyO1xuZnVuY3Rpb24gZmxvYXQ2NChieXRlcywgaXQpIHtcbiAgICByZXR1cm4gcmVhZEZsb2F0NjQoYnl0ZXMsIGl0KTtcbn1cbmV4cG9ydHMuZmxvYXQ2NCA9IGZsb2F0NjQ7XG5mdW5jdGlvbiBpbnQ2NChieXRlcywgaXQpIHtcbiAgICB2YXIgbG93ID0gdWludDMyKGJ5dGVzLCBpdCk7XG4gICAgdmFyIGhpZ2ggPSBpbnQzMihieXRlcywgaXQpICogTWF0aC5wb3coMiwgMzIpO1xuICAgIHJldHVybiBoaWdoICsgbG93O1xufVxuZXhwb3J0cy5pbnQ2NCA9IGludDY0O1xuO1xuZnVuY3Rpb24gdWludDY0KGJ5dGVzLCBpdCkge1xuICAgIHZhciBsb3cgPSB1aW50MzIoYnl0ZXMsIGl0KTtcbiAgICB2YXIgaGlnaCA9IHVpbnQzMihieXRlcywgaXQpICogTWF0aC5wb3coMiwgMzIpO1xuICAgIHJldHVybiBoaWdoICsgbG93O1xufVxuZXhwb3J0cy51aW50NjQgPSB1aW50NjQ7XG47XG4vLyBmb3JjZSBsaXR0bGUgZW5kaWFuIHRvIGZhY2lsaXRhdGUgZGVjb2Rpbmcgb24gbXVsdGlwbGUgaW1wbGVtZW50YXRpb25zXG52YXIgX2lzTGl0dGxlRW5kaWFuID0gdHJ1ZTsgLy8gbmV3IFVpbnQxNkFycmF5KG5ldyBVaW50OEFycmF5KFsxLCAwXSkuYnVmZmVyKVswXSA9PT0gMTtcbnZhciBfaW50MzIgPSBuZXcgSW50MzJBcnJheSgyKTtcbnZhciBfZmxvYXQzMiA9IG5ldyBGbG9hdDMyQXJyYXkoX2ludDMyLmJ1ZmZlcik7XG52YXIgX2Zsb2F0NjQgPSBuZXcgRmxvYXQ2NEFycmF5KF9pbnQzMi5idWZmZXIpO1xuZnVuY3Rpb24gcmVhZEZsb2F0MzIoYnl0ZXMsIGl0KSB7XG4gICAgX2ludDMyWzBdID0gaW50MzIoYnl0ZXMsIGl0KTtcbiAgICByZXR1cm4gX2Zsb2F0MzJbMF07XG59XG5leHBvcnRzLnJlYWRGbG9hdDMyID0gcmVhZEZsb2F0MzI7XG47XG5mdW5jdGlvbiByZWFkRmxvYXQ2NChieXRlcywgaXQpIHtcbiAgICBfaW50MzJbX2lzTGl0dGxlRW5kaWFuID8gMCA6IDFdID0gaW50MzIoYnl0ZXMsIGl0KTtcbiAgICBfaW50MzJbX2lzTGl0dGxlRW5kaWFuID8gMSA6IDBdID0gaW50MzIoYnl0ZXMsIGl0KTtcbiAgICByZXR1cm4gX2Zsb2F0NjRbMF07XG59XG5leHBvcnRzLnJlYWRGbG9hdDY0ID0gcmVhZEZsb2F0NjQ7XG47XG5mdW5jdGlvbiBib29sZWFuKGJ5dGVzLCBpdCkge1xuICAgIHJldHVybiB1aW50OChieXRlcywgaXQpID4gMDtcbn1cbmV4cG9ydHMuYm9vbGVhbiA9IGJvb2xlYW47XG47XG5mdW5jdGlvbiBzdHJpbmcoYnl0ZXMsIGl0KSB7XG4gICAgdmFyIHByZWZpeCA9IGJ5dGVzW2l0Lm9mZnNldCsrXTtcbiAgICB2YXIgbGVuZ3RoO1xuICAgIGlmIChwcmVmaXggPCAweGMwKSB7XG4gICAgICAgIC8vIGZpeHN0clxuICAgICAgICBsZW5ndGggPSBwcmVmaXggJiAweDFmO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcmVmaXggPT09IDB4ZDkpIHtcbiAgICAgICAgbGVuZ3RoID0gdWludDgoYnl0ZXMsIGl0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJlZml4ID09PSAweGRhKSB7XG4gICAgICAgIGxlbmd0aCA9IHVpbnQxNihieXRlcywgaXQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcmVmaXggPT09IDB4ZGIpIHtcbiAgICAgICAgbGVuZ3RoID0gdWludDMyKGJ5dGVzLCBpdCk7XG4gICAgfVxuICAgIHZhciB2YWx1ZSA9IHV0ZjhSZWFkKGJ5dGVzLCBpdC5vZmZzZXQsIGxlbmd0aCk7XG4gICAgaXQub2Zmc2V0ICs9IGxlbmd0aDtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5leHBvcnRzLnN0cmluZyA9IHN0cmluZztcbmZ1bmN0aW9uIHN0cmluZ0NoZWNrKGJ5dGVzLCBpdCkge1xuICAgIHZhciBwcmVmaXggPSBieXRlc1tpdC5vZmZzZXRdO1xuICAgIHJldHVybiAoXG4gICAgLy8gZml4c3RyXG4gICAgKHByZWZpeCA8IDB4YzAgJiYgcHJlZml4ID4gMHhhMCkgfHxcbiAgICAgICAgLy8gc3RyIDhcbiAgICAgICAgcHJlZml4ID09PSAweGQ5IHx8XG4gICAgICAgIC8vIHN0ciAxNlxuICAgICAgICBwcmVmaXggPT09IDB4ZGEgfHxcbiAgICAgICAgLy8gc3RyIDMyXG4gICAgICAgIHByZWZpeCA9PT0gMHhkYik7XG59XG5leHBvcnRzLnN0cmluZ0NoZWNrID0gc3RyaW5nQ2hlY2s7XG5mdW5jdGlvbiBudW1iZXIoYnl0ZXMsIGl0KSB7XG4gICAgdmFyIHByZWZpeCA9IGJ5dGVzW2l0Lm9mZnNldCsrXTtcbiAgICBpZiAocHJlZml4IDwgMHg4MCkge1xuICAgICAgICAvLyBwb3NpdGl2ZSBmaXhpbnRcbiAgICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJlZml4ID09PSAweGNhKSB7XG4gICAgICAgIC8vIGZsb2F0IDMyXG4gICAgICAgIHJldHVybiByZWFkRmxvYXQzMihieXRlcywgaXQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcmVmaXggPT09IDB4Y2IpIHtcbiAgICAgICAgLy8gZmxvYXQgNjRcbiAgICAgICAgcmV0dXJuIHJlYWRGbG9hdDY0KGJ5dGVzLCBpdCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByZWZpeCA9PT0gMHhjYykge1xuICAgICAgICAvLyB1aW50IDhcbiAgICAgICAgcmV0dXJuIHVpbnQ4KGJ5dGVzLCBpdCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByZWZpeCA9PT0gMHhjZCkge1xuICAgICAgICAvLyB1aW50IDE2XG4gICAgICAgIHJldHVybiB1aW50MTYoYnl0ZXMsIGl0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJlZml4ID09PSAweGNlKSB7XG4gICAgICAgIC8vIHVpbnQgMzJcbiAgICAgICAgcmV0dXJuIHVpbnQzMihieXRlcywgaXQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcmVmaXggPT09IDB4Y2YpIHtcbiAgICAgICAgLy8gdWludCA2NFxuICAgICAgICByZXR1cm4gdWludDY0KGJ5dGVzLCBpdCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByZWZpeCA9PT0gMHhkMCkge1xuICAgICAgICAvLyBpbnQgOFxuICAgICAgICByZXR1cm4gaW50OChieXRlcywgaXQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcmVmaXggPT09IDB4ZDEpIHtcbiAgICAgICAgLy8gaW50IDE2XG4gICAgICAgIHJldHVybiBpbnQxNihieXRlcywgaXQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcmVmaXggPT09IDB4ZDIpIHtcbiAgICAgICAgLy8gaW50IDMyXG4gICAgICAgIHJldHVybiBpbnQzMihieXRlcywgaXQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcmVmaXggPT09IDB4ZDMpIHtcbiAgICAgICAgLy8gaW50IDY0XG4gICAgICAgIHJldHVybiBpbnQ2NChieXRlcywgaXQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcmVmaXggPiAweGRmKSB7XG4gICAgICAgIC8vIG5lZ2F0aXZlIGZpeGludFxuICAgICAgICByZXR1cm4gKDB4ZmYgLSBwcmVmaXggKyAxKSAqIC0xO1xuICAgIH1cbn1cbmV4cG9ydHMubnVtYmVyID0gbnVtYmVyO1xuO1xuZnVuY3Rpb24gbnVtYmVyQ2hlY2soYnl0ZXMsIGl0KSB7XG4gICAgdmFyIHByZWZpeCA9IGJ5dGVzW2l0Lm9mZnNldF07XG4gICAgLy8gcG9zaXRpdmUgZml4aW50IC0gMHgwMCAtIDB4N2ZcbiAgICAvLyBmbG9hdCAzMiAgICAgICAgLSAweGNhXG4gICAgLy8gZmxvYXQgNjQgICAgICAgIC0gMHhjYlxuICAgIC8vIHVpbnQgOCAgICAgICAgICAtIDB4Y2NcbiAgICAvLyB1aW50IDE2ICAgICAgICAgLSAweGNkXG4gICAgLy8gdWludCAzMiAgICAgICAgIC0gMHhjZVxuICAgIC8vIHVpbnQgNjQgICAgICAgICAtIDB4Y2ZcbiAgICAvLyBpbnQgOCAgICAgICAgICAgLSAweGQwXG4gICAgLy8gaW50IDE2ICAgICAgICAgIC0gMHhkMVxuICAgIC8vIGludCAzMiAgICAgICAgICAtIDB4ZDJcbiAgICAvLyBpbnQgNjQgICAgICAgICAgLSAweGQzXG4gICAgcmV0dXJuIChwcmVmaXggPCAweDgwIHx8XG4gICAgICAgIChwcmVmaXggPj0gMHhjYSAmJiBwcmVmaXggPD0gMHhkMykpO1xufVxuZXhwb3J0cy5udW1iZXJDaGVjayA9IG51bWJlckNoZWNrO1xuZnVuY3Rpb24gYXJyYXlDaGVjayhieXRlcywgaXQpIHtcbiAgICByZXR1cm4gYnl0ZXNbaXQub2Zmc2V0XSA8IDB4YTA7XG4gICAgLy8gY29uc3QgcHJlZml4ID0gYnl0ZXNbaXQub2Zmc2V0XSA7XG4gICAgLy8gaWYgKHByZWZpeCA8IDB4YTApIHtcbiAgICAvLyAgIHJldHVybiBwcmVmaXg7XG4gICAgLy8gLy8gYXJyYXlcbiAgICAvLyB9IGVsc2UgaWYgKHByZWZpeCA9PT0gMHhkYykge1xuICAgIC8vICAgaXQub2Zmc2V0ICs9IDI7XG4gICAgLy8gfSBlbHNlIGlmICgweGRkKSB7XG4gICAgLy8gICBpdC5vZmZzZXQgKz0gNDtcbiAgICAvLyB9XG4gICAgLy8gcmV0dXJuIHByZWZpeDtcbn1cbmV4cG9ydHMuYXJyYXlDaGVjayA9IGFycmF5Q2hlY2s7XG5mdW5jdGlvbiBuaWxDaGVjayhieXRlcywgaXQpIHtcbiAgICByZXR1cm4gYnl0ZXNbaXQub2Zmc2V0XSA9PT0gc3BlY18xLk5JTDtcbn1cbmV4cG9ydHMubmlsQ2hlY2sgPSBuaWxDaGVjaztcbmZ1bmN0aW9uIGluZGV4Q2hhbmdlQ2hlY2soYnl0ZXMsIGl0KSB7XG4gICAgcmV0dXJuIGJ5dGVzW2l0Lm9mZnNldF0gPT09IHNwZWNfMS5JTkRFWF9DSEFOR0U7XG59XG5leHBvcnRzLmluZGV4Q2hhbmdlQ2hlY2sgPSBpbmRleENoYW5nZUNoZWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVjb2RlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggRW5kZWwgRHJleWVyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgSW9uIERyaXZlIFNvZnR3YXJlIEx0ZC5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogbXNncGFjayBpbXBsZW1lbnRhdGlvbiBoaWdobHkgYmFzZWQgb24gbm90ZXBhY2suaW9cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJyYWNoZXF1ZXNuZS9ub3RlcGFja1xuICovXG5mdW5jdGlvbiB1dGY4TGVuZ3RoKHN0cikge1xuICAgIHZhciBjID0gMCwgbGVuZ3RoID0gMDtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8IDB4ODApIHtcbiAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgbGVuZ3RoICs9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA8IDB4ZDgwMCB8fCBjID49IDB4ZTAwMCkge1xuICAgICAgICAgICAgbGVuZ3RoICs9IDM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBsZW5ndGggKz0gNDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGVuZ3RoO1xufVxuZnVuY3Rpb24gdXRmOFdyaXRlKHZpZXcsIG9mZnNldCwgc3RyKSB7XG4gICAgdmFyIGMgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDwgMHg4MCkge1xuICAgICAgICAgICAgdmlld1tvZmZzZXQrK10gPSBjO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgdmlld1tvZmZzZXQrK10gPSAweGMwIHwgKGMgPj4gNik7XG4gICAgICAgICAgICB2aWV3W29mZnNldCsrXSA9IDB4ODAgfCAoYyAmIDB4M2YpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweGQ4MDAgfHwgYyA+PSAweGUwMDApIHtcbiAgICAgICAgICAgIHZpZXdbb2Zmc2V0KytdID0gMHhlMCB8IChjID4+IDEyKTtcbiAgICAgICAgICAgIHZpZXdbb2Zmc2V0KytdID0gMHg4MCB8IChjID4+IDYgJiAweDNmKTtcbiAgICAgICAgICAgIHZpZXdbb2Zmc2V0KytdID0gMHg4MCB8IChjICYgMHgzZik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBjID0gMHgxMDAwMCArICgoKGMgJiAweDNmZikgPDwgMTApIHwgKHN0ci5jaGFyQ29kZUF0KGkpICYgMHgzZmYpKTtcbiAgICAgICAgICAgIHZpZXdbb2Zmc2V0KytdID0gMHhmMCB8IChjID4+IDE4KTtcbiAgICAgICAgICAgIHZpZXdbb2Zmc2V0KytdID0gMHg4MCB8IChjID4+IDEyICYgMHgzZik7XG4gICAgICAgICAgICB2aWV3W29mZnNldCsrXSA9IDB4ODAgfCAoYyA+PiA2ICYgMHgzZik7XG4gICAgICAgICAgICB2aWV3W29mZnNldCsrXSA9IDB4ODAgfCAoYyAmIDB4M2YpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy51dGY4V3JpdGUgPSB1dGY4V3JpdGU7XG5mdW5jdGlvbiBpbnQ4KGJ5dGVzLCB2YWx1ZSkge1xuICAgIGJ5dGVzLnB1c2godmFsdWUgJiAyNTUpO1xufVxuZXhwb3J0cy5pbnQ4ID0gaW50ODtcbjtcbmZ1bmN0aW9uIHVpbnQ4KGJ5dGVzLCB2YWx1ZSkge1xuICAgIGJ5dGVzLnB1c2godmFsdWUgJiAyNTUpO1xufVxuZXhwb3J0cy51aW50OCA9IHVpbnQ4O1xuO1xuZnVuY3Rpb24gaW50MTYoYnl0ZXMsIHZhbHVlKSB7XG4gICAgYnl0ZXMucHVzaCh2YWx1ZSAmIDI1NSk7XG4gICAgYnl0ZXMucHVzaCgodmFsdWUgPj4gOCkgJiAyNTUpO1xufVxuZXhwb3J0cy5pbnQxNiA9IGludDE2O1xuO1xuZnVuY3Rpb24gdWludDE2KGJ5dGVzLCB2YWx1ZSkge1xuICAgIGJ5dGVzLnB1c2godmFsdWUgJiAyNTUpO1xuICAgIGJ5dGVzLnB1c2goKHZhbHVlID4+IDgpICYgMjU1KTtcbn1cbmV4cG9ydHMudWludDE2ID0gdWludDE2O1xuO1xuZnVuY3Rpb24gaW50MzIoYnl0ZXMsIHZhbHVlKSB7XG4gICAgYnl0ZXMucHVzaCh2YWx1ZSAmIDI1NSk7XG4gICAgYnl0ZXMucHVzaCgodmFsdWUgPj4gOCkgJiAyNTUpO1xuICAgIGJ5dGVzLnB1c2goKHZhbHVlID4+IDE2KSAmIDI1NSk7XG4gICAgYnl0ZXMucHVzaCgodmFsdWUgPj4gMjQpICYgMjU1KTtcbn1cbmV4cG9ydHMuaW50MzIgPSBpbnQzMjtcbjtcbmZ1bmN0aW9uIHVpbnQzMihieXRlcywgdmFsdWUpIHtcbiAgICB2YXIgYjQgPSB2YWx1ZSA+PiAyNDtcbiAgICB2YXIgYjMgPSB2YWx1ZSA+PiAxNjtcbiAgICB2YXIgYjIgPSB2YWx1ZSA+PiA4O1xuICAgIHZhciBiMSA9IHZhbHVlO1xuICAgIGJ5dGVzLnB1c2goYjEgJiAyNTUpO1xuICAgIGJ5dGVzLnB1c2goYjIgJiAyNTUpO1xuICAgIGJ5dGVzLnB1c2goYjMgJiAyNTUpO1xuICAgIGJ5dGVzLnB1c2goYjQgJiAyNTUpO1xufVxuZXhwb3J0cy51aW50MzIgPSB1aW50MzI7XG47XG5mdW5jdGlvbiBpbnQ2NChieXRlcywgdmFsdWUpIHtcbiAgICB2YXIgaGlnaCA9IE1hdGguZmxvb3IodmFsdWUgLyBNYXRoLnBvdygyLCAzMikpO1xuICAgIHZhciBsb3cgPSB2YWx1ZSA+Pj4gMDtcbiAgICB1aW50MzIoYnl0ZXMsIGxvdyk7XG4gICAgdWludDMyKGJ5dGVzLCBoaWdoKTtcbn1cbmV4cG9ydHMuaW50NjQgPSBpbnQ2NDtcbjtcbmZ1bmN0aW9uIHVpbnQ2NChieXRlcywgdmFsdWUpIHtcbiAgICB2YXIgaGlnaCA9ICh2YWx1ZSAvIE1hdGgucG93KDIsIDMyKSkgPj4gMDtcbiAgICB2YXIgbG93ID0gdmFsdWUgPj4+IDA7XG4gICAgdWludDMyKGJ5dGVzLCBsb3cpO1xuICAgIHVpbnQzMihieXRlcywgaGlnaCk7XG59XG5leHBvcnRzLnVpbnQ2NCA9IHVpbnQ2NDtcbjtcbmZ1bmN0aW9uIGZsb2F0MzIoYnl0ZXMsIHZhbHVlKSB7XG4gICAgd3JpdGVGbG9hdDMyKGJ5dGVzLCB2YWx1ZSk7XG59XG5leHBvcnRzLmZsb2F0MzIgPSBmbG9hdDMyO1xuZnVuY3Rpb24gZmxvYXQ2NChieXRlcywgdmFsdWUpIHtcbiAgICB3cml0ZUZsb2F0NjQoYnl0ZXMsIHZhbHVlKTtcbn1cbmV4cG9ydHMuZmxvYXQ2NCA9IGZsb2F0NjQ7XG4vLyBmb3JjZSBsaXR0bGUgZW5kaWFuIHRvIGZhY2lsaXRhdGUgZGVjb2Rpbmcgb24gbXVsdGlwbGUgaW1wbGVtZW50YXRpb25zXG52YXIgX2lzTGl0dGxlRW5kaWFuID0gdHJ1ZTsgLy8gbmV3IFVpbnQxNkFycmF5KG5ldyBVaW50OEFycmF5KFsxLCAwXSkuYnVmZmVyKVswXSA9PT0gMTtcbnZhciBfaW50MzIgPSBuZXcgSW50MzJBcnJheSgyKTtcbnZhciBfZmxvYXQzMiA9IG5ldyBGbG9hdDMyQXJyYXkoX2ludDMyLmJ1ZmZlcik7XG52YXIgX2Zsb2F0NjQgPSBuZXcgRmxvYXQ2NEFycmF5KF9pbnQzMi5idWZmZXIpO1xuZnVuY3Rpb24gd3JpdGVGbG9hdDMyKGJ5dGVzLCB2YWx1ZSkge1xuICAgIF9mbG9hdDMyWzBdID0gdmFsdWU7XG4gICAgaW50MzIoYnl0ZXMsIF9pbnQzMlswXSk7XG59XG5leHBvcnRzLndyaXRlRmxvYXQzMiA9IHdyaXRlRmxvYXQzMjtcbjtcbmZ1bmN0aW9uIHdyaXRlRmxvYXQ2NChieXRlcywgdmFsdWUpIHtcbiAgICBfZmxvYXQ2NFswXSA9IHZhbHVlO1xuICAgIGludDMyKGJ5dGVzLCBfaW50MzJbX2lzTGl0dGxlRW5kaWFuID8gMCA6IDFdKTtcbiAgICBpbnQzMihieXRlcywgX2ludDMyW19pc0xpdHRsZUVuZGlhbiA/IDEgOiAwXSk7XG59XG5leHBvcnRzLndyaXRlRmxvYXQ2NCA9IHdyaXRlRmxvYXQ2NDtcbjtcbmZ1bmN0aW9uIGJvb2xlYW4oYnl0ZXMsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHVpbnQ4KGJ5dGVzLCB2YWx1ZSA/IDEgOiAwKTtcbn1cbmV4cG9ydHMuYm9vbGVhbiA9IGJvb2xlYW47XG47XG5mdW5jdGlvbiBzdHJpbmcoYnl0ZXMsIHZhbHVlKSB7XG4gICAgLy8gZW5jb2RlIGBudWxsYCBzdHJpbmdzIGFzIGVtcHR5LlxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gdXRmOExlbmd0aCh2YWx1ZSk7XG4gICAgdmFyIHNpemUgPSAwO1xuICAgIC8vIGZpeHN0clxuICAgIGlmIChsZW5ndGggPCAweDIwKSB7XG4gICAgICAgIGJ5dGVzLnB1c2gobGVuZ3RoIHwgMHhhMCk7XG4gICAgICAgIHNpemUgPSAxO1xuICAgIH1cbiAgICAvLyBzdHIgOFxuICAgIGVsc2UgaWYgKGxlbmd0aCA8IDB4MTAwKSB7XG4gICAgICAgIGJ5dGVzLnB1c2goMHhkOSk7XG4gICAgICAgIHVpbnQ4KGJ5dGVzLCBsZW5ndGgpO1xuICAgICAgICBzaXplID0gMjtcbiAgICB9XG4gICAgLy8gc3RyIDE2XG4gICAgZWxzZSBpZiAobGVuZ3RoIDwgMHgxMDAwMCkge1xuICAgICAgICBieXRlcy5wdXNoKDB4ZGEpO1xuICAgICAgICB1aW50MTYoYnl0ZXMsIGxlbmd0aCk7XG4gICAgICAgIHNpemUgPSAzO1xuICAgIH1cbiAgICAvLyBzdHIgMzJcbiAgICBlbHNlIGlmIChsZW5ndGggPCAweDEwMDAwMDAwMCkge1xuICAgICAgICBieXRlcy5wdXNoKDB4ZGIpO1xuICAgICAgICB1aW50MzIoYnl0ZXMsIGxlbmd0aCk7XG4gICAgICAgIHNpemUgPSA1O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdHJpbmcgdG9vIGxvbmcnKTtcbiAgICB9XG4gICAgdXRmOFdyaXRlKGJ5dGVzLCBieXRlcy5sZW5ndGgsIHZhbHVlKTtcbiAgICByZXR1cm4gc2l6ZSArIGxlbmd0aDtcbn1cbmV4cG9ydHMuc3RyaW5nID0gc3RyaW5nO1xuZnVuY3Rpb24gbnVtYmVyKGJ5dGVzLCB2YWx1ZSkge1xuICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlcihieXRlcywgMCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlcihieXRlcywgKHZhbHVlID4gMCkgPyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA6IC1OdW1iZXIuTUFYX1NBRkVfSU5URUdFUik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlICE9PSAodmFsdWUgfCAwKSkge1xuICAgICAgICBieXRlcy5wdXNoKDB4Y2IpO1xuICAgICAgICB3cml0ZUZsb2F0NjQoYnl0ZXMsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIDk7XG4gICAgICAgIC8vIFRPRE86IGVuY29kZSBmbG9hdCAzMj9cbiAgICAgICAgLy8gaXMgaXQgcG9zc2libGUgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIGZsb2F0MzIgLyBmbG9hdDY0IGhlcmU/XG4gICAgICAgIC8vIC8vIGZsb2F0IDMyXG4gICAgICAgIC8vIGJ5dGVzLnB1c2goMHhjYSk7XG4gICAgICAgIC8vIHdyaXRlRmxvYXQzMihieXRlcywgdmFsdWUpO1xuICAgICAgICAvLyByZXR1cm4gNTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID49IDApIHtcbiAgICAgICAgLy8gcG9zaXRpdmUgZml4bnVtXG4gICAgICAgIGlmICh2YWx1ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIHVpbnQ4KGJ5dGVzLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyB1aW50IDhcbiAgICAgICAgaWYgKHZhbHVlIDwgMHgxMDApIHtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goMHhjYyk7XG4gICAgICAgICAgICB1aW50OChieXRlcywgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdWludCAxNlxuICAgICAgICBpZiAodmFsdWUgPCAweDEwMDAwKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKDB4Y2QpO1xuICAgICAgICAgICAgdWludDE2KGJ5dGVzLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gMztcbiAgICAgICAgfVxuICAgICAgICAvLyB1aW50IDMyXG4gICAgICAgIGlmICh2YWx1ZSA8IDB4MTAwMDAwMDAwKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKDB4Y2UpO1xuICAgICAgICAgICAgdWludDMyKGJ5dGVzLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gNTtcbiAgICAgICAgfVxuICAgICAgICAvLyB1aW50IDY0XG4gICAgICAgIGJ5dGVzLnB1c2goMHhjZik7XG4gICAgICAgIHVpbnQ2NChieXRlcywgdmFsdWUpO1xuICAgICAgICByZXR1cm4gOTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIG5lZ2F0aXZlIGZpeG51bVxuICAgICAgICBpZiAodmFsdWUgPj0gLTB4MjApIHtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW50IDhcbiAgICAgICAgaWYgKHZhbHVlID49IC0weDgwKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKDB4ZDApO1xuICAgICAgICAgICAgaW50OChieXRlcywgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW50IDE2XG4gICAgICAgIGlmICh2YWx1ZSA+PSAtMHg4MDAwKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKDB4ZDEpO1xuICAgICAgICAgICAgaW50MTYoYnl0ZXMsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICB9XG4gICAgICAgIC8vIGludCAzMlxuICAgICAgICBpZiAodmFsdWUgPj0gLTB4ODAwMDAwMDApIHtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goMHhkMik7XG4gICAgICAgICAgICBpbnQzMihieXRlcywgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIDU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW50IDY0XG4gICAgICAgIGJ5dGVzLnB1c2goMHhkMyk7XG4gICAgICAgIGludDY0KGJ5dGVzLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiA5O1xuICAgIH1cbn1cbmV4cG9ydHMubnVtYmVyID0gbnVtYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW5jb2RlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBFeHRyYWN0ZWQgZnJvbSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9zdHJvbmctZXZlbnRzXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFdmVudEVtaXR0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgfVxuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAoY2IsIG9uY2UpIHtcbiAgICAgICAgaWYgKG9uY2UgPT09IHZvaWQgMCkgeyBvbmNlID0gZmFsc2U7IH1cbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKGNiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmludm9rZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIGhhbmRsZXIuYXBwbHkodm9pZCAwLCBhcmdzKTsgfSk7XG4gICAgfTtcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmludm9rZUFzeW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLmhhbmRsZXJzLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gaGFuZGxlci5hcHBseSh2b2lkIDAsIGFyZ3MpOyB9KSk7XG4gICAgfTtcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmhhbmRsZXJzLmluZGV4T2YoY2IpO1xuICAgICAgICB0aGlzLmhhbmRsZXJzW2luZGV4XSA9IHRoaXMuaGFuZGxlcnNbdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxXTtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wb3AoKTtcbiAgICB9O1xuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB9O1xuICAgIHJldHVybiBFdmVudEVtaXR0ZXI7XG59KCkpO1xuZXhwb3J0cy5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1FdmVudEVtaXR0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2NoZW1hXzEgPSByZXF1aXJlKFwiLi9TY2hlbWFcIik7XG5leHBvcnRzLlNjaGVtYSA9IFNjaGVtYV8xLlNjaGVtYTtcbnZhciBNYXBTY2hlbWFfMSA9IHJlcXVpcmUoXCIuL3R5cGVzL01hcFNjaGVtYVwiKTtcbmV4cG9ydHMuTWFwU2NoZW1hID0gTWFwU2NoZW1hXzEuTWFwU2NoZW1hO1xudmFyIEFycmF5U2NoZW1hXzEgPSByZXF1aXJlKFwiLi90eXBlcy9BcnJheVNjaGVtYVwiKTtcbmV4cG9ydHMuQXJyYXlTY2hlbWEgPSBBcnJheVNjaGVtYV8xLkFycmF5U2NoZW1hO1xuLy8gVXRpbHNcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5leHBvcnRzLmR1bXBDaGFuZ2VzID0gdXRpbHNfMS5kdW1wQ2hhbmdlcztcbi8vIFJlZmxlY3Rpb25cbnZhciBSZWZsZWN0aW9uXzEgPSByZXF1aXJlKFwiLi9SZWZsZWN0aW9uXCIpO1xuZXhwb3J0cy5SZWZsZWN0aW9uID0gUmVmbGVjdGlvbl8xLlJlZmxlY3Rpb247XG5leHBvcnRzLlJlZmxlY3Rpb25UeXBlID0gUmVmbGVjdGlvbl8xLlJlZmxlY3Rpb25UeXBlO1xuZXhwb3J0cy5SZWZsZWN0aW9uRmllbGQgPSBSZWZsZWN0aW9uXzEuUmVmbGVjdGlvbkZpZWxkO1xudmFyIGFubm90YXRpb25zXzEgPSByZXF1aXJlKFwiLi9hbm5vdGF0aW9uc1wiKTtcbi8vIEFubm90YXRpb25zXG5leHBvcnRzLnR5cGUgPSBhbm5vdGF0aW9uc18xLnR5cGU7XG5leHBvcnRzLmRlcHJlY2F0ZWQgPSBhbm5vdGF0aW9uc18xLmRlcHJlY2F0ZWQ7XG5leHBvcnRzLmZpbHRlciA9IGFubm90YXRpb25zXzEuZmlsdGVyO1xuZXhwb3J0cy5kZWZpbmVUeXBlcyA9IGFubm90YXRpb25zXzEuZGVmaW5lVHlwZXM7XG4vLyBUeXBlc1xuZXhwb3J0cy5Db250ZXh0ID0gYW5ub3RhdGlvbnNfMS5Db250ZXh0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkVORF9PRl9TVFJVQ1RVUkUgPSAweGMxOyAvLyAobXNncGFjayBzcGVjOiBuZXZlciB1c2VkKVxuZXhwb3J0cy5OSUwgPSAweGMwO1xuZXhwb3J0cy5JTkRFWF9DSEFOR0UgPSAweGQ0O1xuZXhwb3J0cy5UWVBFX0lEID0gMHhkNTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwZWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgICAgcltrXSA9IGFbal07XG4gICAgcmV0dXJuIHI7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFycmF5U2NoZW1hID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcnJheVNjaGVtYSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcnJheVNjaGVtYSgpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBpdGVtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBpdGVtcykgfHwgdGhpcztcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBPYmplY3QuY3JlYXRlKEFycmF5U2NoZW1hLnByb3RvdHlwZSkpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhfdGhpcywge1xuICAgICAgICAgICAgJHNvcnRpbmc6IHsgdmFsdWU6IHVuZGVmaW5lZCwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlIH0sXG4gICAgICAgICAgICAkY2hhbmdlczogeyB2YWx1ZTogdW5kZWZpbmVkLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUgfSxcbiAgICAgICAgICAgIG9uQWRkOiB7IHZhbHVlOiB1bmRlZmluZWQsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSB9LFxuICAgICAgICAgICAgb25SZW1vdmU6IHsgdmFsdWU6IHVuZGVmaW5lZCwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlIH0sXG4gICAgICAgICAgICBvbkNoYW5nZTogeyB2YWx1ZTogdW5kZWZpbmVkLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUgfSxcbiAgICAgICAgICAgIHRyaWdnZXJBbGw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLm9uQWRkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub25BZGQoX3RoaXNbaV0sIGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvSlNPTjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iakF0ID0gX3RoaXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCgodHlwZW9mIChvYmpBdC50b0pTT04pID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvYmpBdC50b0pTT04oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogb2JqQXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb25lOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIChpc0RlY29kaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbG9uZWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0RlY29kaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZWQgPSBBcnJheVNjaGVtYS5vZi5hcHBseShBcnJheVNjaGVtYSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVkLm9uQWRkID0gX3RoaXMub25BZGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZWQub25SZW1vdmUgPSBfdGhpcy5vblJlbW92ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lZC5vbkNoYW5nZSA9IF90aGlzLm9uQ2hhbmdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVkID0gbmV3IChBcnJheVNjaGVtYS5iaW5kLmFwcGx5KEFycmF5U2NoZW1hLCBfX3NwcmVhZEFycmF5cyhbdm9pZCAwXSwgX3RoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoaXRlbSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSkpKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheVNjaGVtYSwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBBcnJheVNjaGVtYTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQXJyYXlTY2hlbWEucHJvdG90eXBlLnNvcnQgPSBmdW5jdGlvbiAoY29tcGFyZUZuKSB7XG4gICAgICAgIHRoaXMuJHNvcnRpbmcgPSB0cnVlO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnNvcnQuY2FsbCh0aGlzLCBjb21wYXJlRm4pO1xuICAgICAgICBpZiAodGhpcy4kY2hhbmdlcykgeyAvLyBhbGxvdyB0byAuc2xpY2UoKSArIC5zb3J0KClcbiAgICAgICAgICAgIHZhciBjaGFuZ2VzID0gQXJyYXkuZnJvbSh0aGlzLiRjaGFuZ2VzLmNoYW5nZXMpO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBjaGFuZ2VzXzEgPSBjaGFuZ2VzOyBfaSA8IGNoYW5nZXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gY2hhbmdlc18xW19pXTtcbiAgICAgICAgICAgICAgICAvLyB0cmFjayBpbmRleCBjaGFuZ2VcbiAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNJbmRleCA9IHRoaXMuJGNoYW5nZXMuZ2V0SW5kZXgodGhpc1trZXldKTtcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNoYW5nZXMubWFwSW5kZXhDaGFuZ2UodGhpc1trZXldLCBwcmV2aW91c0luZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kY2hhbmdlcy5tYXBJbmRleCh0aGlzW2tleV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kc29ydGluZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEFycmF5U2NoZW1hLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2tmbiwgdGhpc0FyZykge1xuICAgICAgICB2YXIgZmlsdGVyZWQgPSBfc3VwZXIucHJvdG90eXBlLmZpbHRlci5jYWxsKHRoaXMsIGNhbGxiYWNrZm4pO1xuICAgICAgICBmaWx0ZXJlZC4kY2hhbmdlcyA9IHRoaXMuJGNoYW5nZXMuY2xvbmUoKTtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkO1xuICAgIH07XG4gICAgQXJyYXlTY2hlbWEucHJvdG90eXBlLnNwbGljZSA9IGZ1bmN0aW9uIChzdGFydCwgZGVsZXRlQ291bnQpIHtcbiAgICAgICAgdmFyIGluc2VydCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaW5zZXJ0W19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZW1vdmVkSXRlbXMgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIHZhciBtb3ZlZEl0ZW1zID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHRoaXMsIGZ1bmN0aW9uIChpdGVtLCBpZHgpIHtcbiAgICAgICAgICAgIHJldHVybiBpZHggPj0gc3RhcnQgKyBkZWxldGVDb3VudCAtIDE7XG4gICAgICAgIH0pO1xuICAgICAgICByZW1vdmVkSXRlbXMubWFwKGZ1bmN0aW9uIChyZW1vdmVkSXRlbSkge1xuICAgICAgICAgICAgdmFyICRjaGFuZ2VzID0gcmVtb3ZlZEl0ZW0gJiYgcmVtb3ZlZEl0ZW0uJGNoYW5nZXM7XG4gICAgICAgICAgICAvLyBJZiB0aGUgcmVtb3ZlZCBpdGVtIGlzIGEgc2NoZW1hIHdlIG5lZWQgdG8gdXBkYXRlIGl0LlxuICAgICAgICAgICAgaWYgKCRjaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgJGNoYW5nZXMucGFyZW50LmRlbGV0ZUluZGV4KHJlbW92ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgJGNoYW5nZXMucGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbW92ZWRJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChtb3ZlZEl0ZW0pIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBtb3ZlZCBpdGVtIGlzIGEgc2NoZW1hIHdlIG5lZWQgdG8gdXBkYXRlIGl0LlxuICAgICAgICAgICAgdmFyICRjaGFuZ2VzID0gbW92ZWRJdGVtICYmIG1vdmVkSXRlbS4kY2hhbmdlcztcbiAgICAgICAgICAgIGlmICgkY2hhbmdlcykge1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBjdXJyZW50IGluZGV4IGluIHBhcmVudCwgc28gc3Vic2VxdWVudCBjaGFuZ2VzIGluXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpdGVtJ3MgcHJvcGVydGllcyBhcmUgY29ycmVjdGx5IHJlZmxlY3RlZC5cbiAgICAgICAgICAgICAgICAkY2hhbmdlcy5wYXJlbnRGaWVsZC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlbW92ZWRJdGVtcztcbiAgICB9O1xuICAgIHJldHVybiBBcnJheVNjaGVtYTtcbn0oQXJyYXkpKTtcbmV4cG9ydHMuQXJyYXlTY2hlbWEgPSBBcnJheVNjaGVtYTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFycmF5U2NoZW1hLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1hcFNjaGVtYSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXBTY2hlbWEob2JqKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChvYmogPT09IHZvaWQgMCkgeyBvYmogPSB7fTsgfVxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICAkY2hhbmdlczogeyB2YWx1ZTogdW5kZWZpbmVkLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUgfSxcbiAgICAgICAgICAgIG9uQWRkOiB7IHZhbHVlOiB1bmRlZmluZWQsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSB9LFxuICAgICAgICAgICAgb25SZW1vdmU6IHsgdmFsdWU6IHVuZGVmaW5lZCwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlIH0sXG4gICAgICAgICAgICBvbkNoYW5nZTogeyB2YWx1ZTogdW5kZWZpbmVkLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUgfSxcbiAgICAgICAgICAgIGNsb25lOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIChpc0RlY29kaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbG9uZWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0RlY29kaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVkID0gT2JqZWN0LmFzc2lnbihuZXcgTWFwU2NoZW1hKCksIF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lZC5vbkFkZCA9IF90aGlzLm9uQWRkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVkLm9uUmVtb3ZlID0gX3RoaXMub25SZW1vdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZWQub25DaGFuZ2UgPSBfdGhpcy5vbkNoYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlcnZlci1zaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmVkXzEgPSBuZXcgTWFwU2NoZW1hKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gX3RoaXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChfdGhpc1trZXldKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9uZWRfMVtrZXldID0gX3RoaXNba2V5XS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVkXzFba2V5XSA9IF90aGlzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyaWdnZXJBbGw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLm9uQWRkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIF90aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkFkZChfdGhpc1trZXldLCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvSlNPTjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXAgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIF90aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBba2V5XSA9ICh0eXBlb2YgKF90aGlzW2tleV0udG9KU09OKSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3RoaXNba2V5XS50b0pTT04oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3RoaXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfaW5kZXhlczogeyB2YWx1ZTogbmV3IE1hcCgpLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUgfSxcbiAgICAgICAgICAgIF91cGRhdGVJbmRleGVzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIChhbGxLZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleGVzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGFsbEtleXNfMSA9IGFsbEtleXM7IF9pIDwgYWxsS2V5c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGFsbEtleXNfMVtfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVzLnNldChrZXksIGluZGV4KyspO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9pbmRleGVzID0gaW5kZXhlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE1hcFNjaGVtYTtcbn0oKSk7XG5leHBvcnRzLk1hcFNjaGVtYSA9IE1hcFNjaGVtYTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1hcFNjaGVtYS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBfMSA9IHJlcXVpcmUoXCIuL1wiKTtcbnZhciBNYXBTY2hlbWFfMSA9IHJlcXVpcmUoXCIuL3R5cGVzL01hcFNjaGVtYVwiKTtcbnZhciBBcnJheVNjaGVtYV8xID0gcmVxdWlyZShcIi4vdHlwZXMvQXJyYXlTY2hlbWFcIik7XG5mdW5jdGlvbiBkdW1wQ2hhbmdlcyhzY2hlbWEpIHtcbiAgICB2YXIgZHVtcCA9IHt9O1xuICAgIHZhciAkY2hhbmdlcyA9IHNjaGVtYS4kY2hhbmdlcztcbiAgICB2YXIgZmllbGRzQnlJbmRleCA9IHNjaGVtYVsnX2ZpZWxkc0J5SW5kZXgnXSB8fCB7fTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gQXJyYXkuZnJvbSgkY2hhbmdlcy5jaGFuZ2VzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGZpZWxkSW5kZXggPSBfYVtfaV07XG4gICAgICAgIHZhciBmaWVsZCA9IGZpZWxkc0J5SW5kZXhbZmllbGRJbmRleF0gfHwgZmllbGRJbmRleDtcbiAgICAgICAgaWYgKHNjaGVtYVtmaWVsZF0gaW5zdGFuY2VvZiBNYXBTY2hlbWFfMS5NYXBTY2hlbWEgfHxcbiAgICAgICAgICAgIHNjaGVtYVtmaWVsZF0gaW5zdGFuY2VvZiBBcnJheVNjaGVtYV8xLkFycmF5U2NoZW1hIHx8XG4gICAgICAgICAgICBzY2hlbWFbZmllbGRdIGluc3RhbmNlb2YgXzEuU2NoZW1hKSB7XG4gICAgICAgICAgICBkdW1wW2ZpZWxkXSA9IGR1bXBDaGFuZ2VzKHNjaGVtYVtmaWVsZF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZHVtcFtmaWVsZF0gPSBzY2hlbWFbZmllbGRdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkdW1wO1xufVxuZXhwb3J0cy5kdW1wQ2hhbmdlcyA9IGR1bXBDaGFuZ2VzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcGFyZV8xID0gcmVxdWlyZShcIi4vY29tcGFyZVwiKTtcbnZhciBTdGF0ZUNvbnRhaW5lciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdGF0ZUNvbnRhaW5lcihzdGF0ZSkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLm1hdGNoZXJQbGFjZWhvbGRlcnMgPSB7XG4gICAgICAgICAgICBcIjppZFwiOiAvXihbYS16QS1aMC05XFwtX10rKSQvLFxuICAgICAgICAgICAgXCI6bnVtYmVyXCI6IC9eKFswLTldKykkLyxcbiAgICAgICAgICAgIFwiOnN0cmluZ1wiOiAvXihcXHcrKSQvLFxuICAgICAgICAgICAgXCI6YXhpc1wiOiAvXihbeHl6XSkkLyxcbiAgICAgICAgICAgIFwiOipcIjogLyguKikvLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gICAgU3RhdGVDb250YWluZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChuZXdTdGF0ZSkge1xuICAgICAgICB2YXIgcGF0Y2hlcyA9IGNvbXBhcmVfMS5jb21wYXJlKHRoaXMuc3RhdGUsIG5ld1N0YXRlKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICB0aGlzLmNoZWNrUGF0Y2hlcyhwYXRjaGVzLCB0aGlzLmxpc3RlbmVycywgdGhpcy5kZWZhdWx0TGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gcGF0Y2hlcztcbiAgICB9O1xuICAgIFN0YXRlQ29udGFpbmVyLnByb3RvdHlwZS5yZWdpc3RlclBsYWNlaG9sZGVyID0gZnVuY3Rpb24gKHBsYWNlaG9sZGVyLCBtYXRjaGVyKSB7XG4gICAgICAgIHRoaXMubWF0Y2hlclBsYWNlaG9sZGVyc1twbGFjZWhvbGRlcl0gPSBtYXRjaGVyO1xuICAgIH07XG4gICAgU3RhdGVDb250YWluZXIucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uIChzZWdtZW50cywgY2FsbGJhY2ssIGltbWVkaWF0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcnVsZXM7XG4gICAgICAgIGlmICh0eXBlb2YgKHNlZ21lbnRzKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBydWxlcyA9IFtdO1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBzZWdtZW50cztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJ1bGVzID0gc2VnbWVudHMuc3BsaXQoXCIvXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxsYmFjay5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCIubGlzdGVuKCkgYWNjZXB0cyBvbmx5IG9uZSBwYXJhbWV0ZXIuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHtcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgICAgIHJhd1J1bGVzOiBydWxlcyxcbiAgICAgICAgICAgIHJ1bGVzOiBydWxlcy5tYXAoZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChzZWdtZW50KSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyByZXBsYWNlIHBsYWNlaG9sZGVyIG1hdGNoZXJzXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoc2VnbWVudC5pbmRleE9mKFwiOlwiKSA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX3RoaXMubWF0Y2hlclBsYWNlaG9sZGVyc1tzZWdtZW50XSB8fCBfdGhpcy5tYXRjaGVyUGxhY2Vob2xkZXJzW1wiOipcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IFJlZ0V4cChcIl5cIiArIHNlZ21lbnQgKyBcIiRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VnbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBpZiAocnVsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMaXN0ZW5lciA9IGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW1tZWRpYXRlbGx5IHRyeSB0byB0cmlnZ2VyIHRoaXMgbGlzdGVuZXIuXG4gICAgICAgIGlmIChpbW1lZGlhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tQYXRjaGVzKGNvbXBhcmVfMS5jb21wYXJlKHt9LCB0aGlzLnN0YXRlKSwgW2xpc3RlbmVyXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH07XG4gICAgU3RhdGVDb250YWluZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGlzdGVuZXJzW2ldID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU3RhdGVDb250YWluZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH07XG4gICAgU3RhdGVDb250YWluZXIucHJvdG90eXBlLmNoZWNrUGF0Y2hlcyA9IGZ1bmN0aW9uIChwYXRjaGVzLCBsaXN0ZW5lcnMsIGRlZmF1bHRMaXN0ZW5lcikge1xuICAgICAgICBmb3IgKHZhciBqID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbal07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gcGF0Y2hlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXRoVmFyaWFibGVzID0gbGlzdGVuZXIgJiYgdGhpcy5nZXRQYXRoVmFyaWFibGVzKHBhdGNoZXNbaV0sIGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICBpZiAocGF0aFZhcmlhYmxlcykge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBwYXRoVmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3UGF0aDogcGF0Y2hlc1tpXS5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBwYXRjaGVzW2ldLm9wZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYXRjaGVzW2ldLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwYXRjaGVzW2ldLm1hdGNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0cmlnZ2VyIGRlZmF1bHQgbGlzdGVuZXIgY2FsbGJhY2sgd2l0aCBlYWNoIHVubWF0Y2hlZCBwYXRjaFxuICAgICAgICBpZiAoZGVmYXVsdExpc3RlbmVyKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gcGF0Y2hlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmICghcGF0Y2hlc1tpXS5tYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMaXN0ZW5lci5jYWxsYmFjayhwYXRjaGVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0YXRlQ29udGFpbmVyLnByb3RvdHlwZS5nZXRQYXRoVmFyaWFibGVzID0gZnVuY3Rpb24gKHBhdGNoLCBsaXN0ZW5lcikge1xuICAgICAgICAvLyBza2lwIGlmIHJ1bGVzIGNvdW50IGRpZmZlciBmcm9tIHBhdGNoXG4gICAgICAgIGlmIChwYXRjaC5wYXRoLmxlbmd0aCAhPT0gbGlzdGVuZXIucnVsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhdGggPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpc3RlbmVyLnJ1bGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IHBhdGNoLnBhdGhbaV0ubWF0Y2gobGlzdGVuZXIucnVsZXNbaV0pO1xuICAgICAgICAgICAgaWYgKCFtYXRjaGVzIHx8IG1hdGNoZXMubGVuZ3RoID09PSAwIHx8IG1hdGNoZXMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxpc3RlbmVyLnJhd1J1bGVzW2ldLnN1YnN0cigwLCAxKSA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoW2xpc3RlbmVyLnJhd1J1bGVzW2ldLnN1YnN0cigxKV0gPSBtYXRjaGVzWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG4gICAgU3RhdGVDb250YWluZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIH07XG4gICAgcmV0dXJuIFN0YXRlQ29udGFpbmVyO1xufSgpKTtcbmV4cG9ydHMuU3RhdGVDb250YWluZXIgPSBTdGF0ZUNvbnRhaW5lcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gY29tcGFyZSh0cmVlMSwgdHJlZTIpIHtcbiAgICB2YXIgcGF0Y2hlcyA9IFtdO1xuICAgIGdlbmVyYXRlKHRyZWUxLCB0cmVlMiwgcGF0Y2hlcywgW10pO1xuICAgIHJldHVybiBwYXRjaGVzO1xufVxuZXhwb3J0cy5jb21wYXJlID0gY29tcGFyZTtcbmZ1bmN0aW9uIGNvbmNhdChhcnIsIHZhbHVlKSB7XG4gICAgdmFyIG5ld0FyciA9IGFyci5zbGljZSgpO1xuICAgIG5ld0Fyci5wdXNoKHZhbHVlKTtcbiAgICByZXR1cm4gbmV3QXJyO1xufVxuZnVuY3Rpb24gb2JqZWN0S2V5cyhvYmopIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgIHZhciBrZXlzXzEgPSBuZXcgQXJyYXkob2JqLmxlbmd0aCk7XG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwga2V5c18xLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBrZXlzXzFba10gPSBcIlwiICsgaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5c18xO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LmtleXMpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaik7XG4gICAgfVxuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xufVxuO1xuLy8gRGlydHkgY2hlY2sgaWYgb2JqIGlzIGRpZmZlcmVudCBmcm9tIG1pcnJvciwgZ2VuZXJhdGUgcGF0Y2hlcyBhbmQgdXBkYXRlIG1pcnJvclxuZnVuY3Rpb24gZ2VuZXJhdGUobWlycm9yLCBvYmosIHBhdGNoZXMsIHBhdGgpIHtcbiAgICB2YXIgbmV3S2V5cyA9IG9iamVjdEtleXMob2JqKTtcbiAgICB2YXIgb2xkS2V5cyA9IG9iamVjdEtleXMobWlycm9yKTtcbiAgICB2YXIgZGVsZXRlZCA9IGZhbHNlO1xuICAgIGZvciAodmFyIHQgPSBvbGRLZXlzLmxlbmd0aCAtIDE7IHQgPj0gMDsgdC0tKSB7XG4gICAgICAgIHZhciBrZXkgPSBvbGRLZXlzW3RdO1xuICAgICAgICB2YXIgb2xkVmFsID0gbWlycm9yW2tleV07XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhKG9ialtrZXldID09PSB1bmRlZmluZWQgJiYgb2xkVmFsICE9PSB1bmRlZmluZWQgJiYgQXJyYXkuaXNBcnJheShvYmopID09PSBmYWxzZSkpIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWwgPSBvYmpba2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2xkVmFsID09IFwib2JqZWN0XCIgJiYgb2xkVmFsICE9IG51bGwgJiYgdHlwZW9mIG5ld1ZhbCA9PSBcIm9iamVjdFwiICYmIG5ld1ZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGUob2xkVmFsLCBuZXdWYWwsIHBhdGNoZXMsIGNvbmNhdChwYXRoLCBrZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvbGRWYWwgIT09IG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBcInJlcGxhY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGNvbmNhdChwYXRoLCBrZXkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ld1ZhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzVmFsdWU6IG9sZFZhbFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXRjaGVzLnB1c2goeyBvcGVyYXRpb246IFwicmVtb3ZlXCIsIHBhdGg6IGNvbmNhdChwYXRoLCBrZXkpIH0pO1xuICAgICAgICAgICAgZGVsZXRlZCA9IHRydWU7IC8vIHByb3BlcnR5IGhhcyBiZWVuIGRlbGV0ZWRcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWRlbGV0ZWQgJiYgbmV3S2V5cy5sZW5ndGggPT0gb2xkS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKHZhciB0ID0gbmV3S2V5cy5sZW5ndGggLSAxOyB0ID49IDA7IHQtLSkge1xuICAgICAgICB2YXIga2V5ID0gbmV3S2V5c1t0XTtcbiAgICAgICAgaWYgKCFtaXJyb3IuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBvYmpba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsID0gb2JqW2tleV07XG4gICAgICAgICAgICB2YXIgYWRkUGF0aCA9IGNvbmNhdChwYXRoLCBrZXkpO1xuICAgICAgICAgICAgLy8gY29tcGFyZSBkZWVwZXIgYWRkaXRpb25zXG4gICAgICAgICAgICBpZiAodHlwZW9mIG5ld1ZhbCA9PSBcIm9iamVjdFwiICYmIG5ld1ZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGUoe30sIG5ld1ZhbCwgcGF0Y2hlcywgYWRkUGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXRjaGVzLnB1c2goeyBvcGVyYXRpb246IFwiYWRkXCIsIHBhdGg6IGFkZFBhdGgsIHZhbHVlOiBuZXdWYWwgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdGF0ZUNvbnRhaW5lcl8xID0gcmVxdWlyZShcIi4vU3RhdGVDb250YWluZXJcIik7XG5leHBvcnRzLlN0YXRlQ29udGFpbmVyID0gU3RhdGVDb250YWluZXJfMS5TdGF0ZUNvbnRhaW5lcjtcbiIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTp0cnVlfSk7ZXhwb3J0cy5jcmVhdGVCYWNrb2ZmPWNyZWF0ZUJhY2tvZmY7dmFyIGJhY2tvZmY9e2V4cG9uZW50aWFsOmZ1bmN0aW9uIGV4cG9uZW50aWFsKGF0dGVtcHQsZGVsYXkpe3JldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqTWF0aC5wb3coMixhdHRlbXB0KSpkZWxheSk7fSxmaWJvbmFjY2k6ZnVuY3Rpb24gZmlib25hY2NpKGF0dGVtcHQsZGVsYXkpe3ZhciBjdXJyZW50PTE7aWYoYXR0ZW1wdD5jdXJyZW50KXt2YXIgcHJldj0xLGN1cnJlbnQ9Mjtmb3IodmFyIGluZGV4PTI7aW5kZXg8YXR0ZW1wdDtpbmRleCsrKXt2YXIgbmV4dD1wcmV2K2N1cnJlbnQ7cHJldj1jdXJyZW50O2N1cnJlbnQ9bmV4dDt9fXJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqY3VycmVudCpkZWxheSk7fX07ZnVuY3Rpb24gY3JlYXRlQmFja29mZih0eXBlLG9wdGlvbnMpe3JldHVybiBuZXcgQmFja29mZihiYWNrb2ZmW3R5cGVdLG9wdGlvbnMpO31mdW5jdGlvbiBCYWNrb2ZmKGZ1bmMsb3B0aW9ucyl7dGhpcy5mdW5jPWZ1bmM7dGhpcy5hdHRlbXB0cz0wO3RoaXMuZGVsYXk9dHlwZW9mIG9wdGlvbnMuaW5pdGlhbERlbGF5IT09XCJ1bmRlZmluZWRcIj9vcHRpb25zLmluaXRpYWxEZWxheToxMDA7fUJhY2tvZmYucHJvdG90eXBlLmJhY2tvZmY9ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KHRoaXMub25SZWFkeSx0aGlzLmZ1bmMoKyt0aGlzLmF0dGVtcHRzLHRoaXMuZGVsYXkpKTt9OyIsIid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6dHJ1ZX0pO3ZhciBfY3JlYXRlQ2xhc3M9ZnVuY3Rpb24oKXtmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCxwcm9wcyl7Zm9yKHZhciBpPTA7aTxwcm9wcy5sZW5ndGg7aSsrKXt2YXIgZGVzY3JpcHRvcj1wcm9wc1tpXTtkZXNjcmlwdG9yLmVudW1lcmFibGU9ZGVzY3JpcHRvci5lbnVtZXJhYmxlfHxmYWxzZTtkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZT10cnVlO2lmKFwidmFsdWVcImluIGRlc2NyaXB0b3IpZGVzY3JpcHRvci53cml0YWJsZT10cnVlO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsZGVzY3JpcHRvci5rZXksZGVzY3JpcHRvcik7fX1yZXR1cm4gZnVuY3Rpb24oQ29uc3RydWN0b3IscHJvdG9Qcm9wcyxzdGF0aWNQcm9wcyl7aWYocHJvdG9Qcm9wcylkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSxwcm90b1Byb3BzKTtpZihzdGF0aWNQcm9wcylkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLHN0YXRpY1Byb3BzKTtyZXR1cm4gQ29uc3RydWN0b3I7fTt9KCk7ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLENvbnN0cnVjdG9yKXtpZighKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO319dmFyIGNyZWF0ZUJhY2tvZmY9cmVxdWlyZSgnLi9iYWNrb2ZmJykuY3JlYXRlQmFja29mZjt2YXIgV2ViU29ja2V0SW1wbD10eXBlb2YgV2ViU29ja2V0IT09XCJ1bmRlZmluZWRcIj9XZWJTb2NrZXQ6cmVxdWlyZSgnd3MnKTt2YXIgV2ViU29ja2V0Q2xpZW50PWZ1bmN0aW9uKCl7LyoqXG4gICAqIEBwYXJhbSB1cmwgRE9NU3RyaW5nIFRoZSBVUkwgdG8gd2hpY2ggdG8gY29ubmVjdDsgdGhpcyBzaG91bGQgYmUgdGhlIFVSTCB0byB3aGljaCB0aGUgV2ViU29ja2V0IHNlcnZlciB3aWxsIHJlc3BvbmQuXG4gICAqIEBwYXJhbSBwcm90b2NvbHMgRE9NU3RyaW5nfERPTVN0cmluZ1tdIEVpdGhlciBhIHNpbmdsZSBwcm90b2NvbCBzdHJpbmcgb3IgYW4gYXJyYXkgb2YgcHJvdG9jb2wgc3RyaW5ncy4gVGhlc2Ugc3RyaW5ncyBhcmUgdXNlZCB0byBpbmRpY2F0ZSBzdWItcHJvdG9jb2xzLCBzbyB0aGF0IGEgc2luZ2xlIHNlcnZlciBjYW4gaW1wbGVtZW50IG11bHRpcGxlIFdlYlNvY2tldCBzdWItcHJvdG9jb2xzIChmb3IgZXhhbXBsZSwgeW91IG1pZ2h0IHdhbnQgb25lIHNlcnZlciB0byBiZSBhYmxlIHRvIGhhbmRsZSBkaWZmZXJlbnQgdHlwZXMgb2YgaW50ZXJhY3Rpb25zIGRlcGVuZGluZyBvbiB0aGUgc3BlY2lmaWVkIHByb3RvY29sKS4gSWYgeW91IGRvbid0IHNwZWNpZnkgYSBwcm90b2NvbCBzdHJpbmcsIGFuIGVtcHR5IHN0cmluZyBpcyBhc3N1bWVkLlxuICAgKi9mdW5jdGlvbiBXZWJTb2NrZXRDbGllbnQodXJsLHByb3RvY29scyl7dmFyIG9wdGlvbnM9YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzJdOnt9O19jbGFzc0NhbGxDaGVjayh0aGlzLFdlYlNvY2tldENsaWVudCk7dGhpcy51cmw9dXJsO3RoaXMucHJvdG9jb2xzPXByb3RvY29sczt0aGlzLnJlY29ubmVjdEVuYWJsZWQ9dHJ1ZTt0aGlzLmxpc3RlbmVycz17fTt0aGlzLmJhY2tvZmY9Y3JlYXRlQmFja29mZihvcHRpb25zLmJhY2tvZmZ8fCdleHBvbmVudGlhbCcsb3B0aW9ucyk7dGhpcy5iYWNrb2ZmLm9uUmVhZHk9dGhpcy5vbkJhY2tvZmZSZWFkeS5iaW5kKHRoaXMpO2lmKHR5cGVvZiBvcHRpb25zLmNvbm5lY3Q9PT1cInVuZGVmaW5lZFwifHxvcHRpb25zLmNvbm5lY3Qpe3RoaXMub3BlbigpO319X2NyZWF0ZUNsYXNzKFdlYlNvY2tldENsaWVudCxbe2tleTonb3BlbicsdmFsdWU6ZnVuY3Rpb24gb3Blbigpe3ZhciByZWNvbm5lY3Q9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOmZhbHNlO3RoaXMuaXNSZWNvbm5lY3Q9cmVjb25uZWN0Oy8vIGtlZXAgYmluYXJ5VHlwZSB1c2VkIG9uIHByZXZpb3VzIFdlYlNvY2tldCBjb25uZWN0aW9uXG52YXIgYmluYXJ5VHlwZT10aGlzLndzJiZ0aGlzLndzLmJpbmFyeVR5cGU7dGhpcy53cz1uZXcgV2ViU29ja2V0SW1wbCh0aGlzLnVybCx0aGlzLnByb3RvY29scyk7dGhpcy53cy5vbmNsb3NlPXRoaXMub25DbG9zZUNhbGxiYWNrLmJpbmQodGhpcyk7dGhpcy53cy5vbmVycm9yPXRoaXMub25FcnJvckNhbGxiYWNrLmJpbmQodGhpcyk7dGhpcy53cy5vbm1lc3NhZ2U9dGhpcy5vbk1lc3NhZ2VDYWxsYmFjay5iaW5kKHRoaXMpO3RoaXMud3Mub25vcGVuPXRoaXMub25PcGVuQ2FsbGJhY2suYmluZCh0aGlzKTtpZihiaW5hcnlUeXBlKXt0aGlzLndzLmJpbmFyeVR5cGU9YmluYXJ5VHlwZTt9fS8qKlxuICAgKiBAaWdub3JlXG4gICAqL30se2tleTonb25CYWNrb2ZmUmVhZHknLHZhbHVlOmZ1bmN0aW9uIG9uQmFja29mZlJlYWR5KG51bWJlcixkZWxheSl7Ly8gY29uc29sZS5sb2coXCJvbkJhY2tvZmZSZWFkeVwiLCBudW1iZXIgKyAnICcgKyBkZWxheSArICdtcycpO1xudGhpcy5vcGVuKHRydWUpO30vKipcbiAgICogQGlnbm9yZVxuICAgKi99LHtrZXk6J29uQ2xvc2VDYWxsYmFjaycsdmFsdWU6ZnVuY3Rpb24gb25DbG9zZUNhbGxiYWNrKGUpe2lmKCF0aGlzLmlzUmVjb25uZWN0JiZ0aGlzLmxpc3RlbmVyc1snb25jbG9zZSddKXt0aGlzLmxpc3RlbmVyc1snb25jbG9zZSddLmFwcGx5KG51bGwsYXJndW1lbnRzKTt9aWYodGhpcy5yZWNvbm5lY3RFbmFibGVkJiZlLmNvZGU8MzAwMCl7dGhpcy5iYWNrb2ZmLmJhY2tvZmYoKTt9fS8qKlxuICAgKiBAaWdub3JlXG4gICAqL30se2tleTonb25FcnJvckNhbGxiYWNrJyx2YWx1ZTpmdW5jdGlvbiBvbkVycm9yQ2FsbGJhY2soKXtpZih0aGlzLmxpc3RlbmVyc1snb25lcnJvciddKXt0aGlzLmxpc3RlbmVyc1snb25lcnJvciddLmFwcGx5KG51bGwsYXJndW1lbnRzKTt9fS8qKlxuICAgKiBAaWdub3JlXG4gICAqL30se2tleTonb25NZXNzYWdlQ2FsbGJhY2snLHZhbHVlOmZ1bmN0aW9uIG9uTWVzc2FnZUNhbGxiYWNrKCl7aWYodGhpcy5saXN0ZW5lcnNbJ29ubWVzc2FnZSddKXt0aGlzLmxpc3RlbmVyc1snb25tZXNzYWdlJ10uYXBwbHkobnVsbCxhcmd1bWVudHMpO319LyoqXG4gICAqIEBpZ25vcmVcbiAgICovfSx7a2V5Oidvbk9wZW5DYWxsYmFjaycsdmFsdWU6ZnVuY3Rpb24gb25PcGVuQ2FsbGJhY2soKXtpZih0aGlzLmxpc3RlbmVyc1snb25vcGVuJ10pe3RoaXMubGlzdGVuZXJzWydvbm9wZW4nXS5hcHBseShudWxsLGFyZ3VtZW50cyk7fWlmKHRoaXMuaXNSZWNvbm5lY3QmJnRoaXMubGlzdGVuZXJzWydvbnJlY29ubmVjdCddKXt0aGlzLmxpc3RlbmVyc1snb25yZWNvbm5lY3QnXS5hcHBseShudWxsLGFyZ3VtZW50cyk7fXRoaXMuaXNSZWNvbm5lY3Q9ZmFsc2U7fS8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGJ5dGVzIG9mIGRhdGEgdGhhdCBoYXZlIGJlZW4gcXVldWVkIHVzaW5nIGNhbGxzIHRvIHNlbmQoKVxuICAgKiBidXQgbm90IHlldCB0cmFuc21pdHRlZCB0byB0aGUgbmV0d29yay4gVGhpcyB2YWx1ZSBkb2VzIG5vdCByZXNldCB0byB6ZXJvXG4gICAqIHdoZW4gdGhlIGNvbm5lY3Rpb24gaXMgY2xvc2VkOyBpZiB5b3Uga2VlcCBjYWxsaW5nIHNlbmQoKSwgdGhpcyB3aWxsXG4gICAqIGNvbnRpbnVlIHRvIGNsaW1iLlxuICAgKlxuICAgKiBAdHlwZSB1bnNpZ25lZCBsb25nXG4gICAqIEByZWFkb25seVxuICAgKi99LHtrZXk6J2Nsb3NlJywvKipcbiAgICogQ2xvc2VzIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvbiBvciBjb25uZWN0aW9uIGF0dGVtcHQsIGlmIGFueS4gSWYgdGhlXG4gICAqIGNvbm5lY3Rpb24gaXMgYWxyZWFkeSBDTE9TRUQsIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICpcbiAgICogQHBhcmFtIGNvZGUgQSBudW1lcmljIHZhbHVlIGluZGljYXRpbmcgdGhlIHN0YXR1cyBjb2RlIGV4cGxhaW5pbmcgd2h5IHRoZSBjb25uZWN0aW9uIGlzIGJlaW5nIGNsb3NlZC4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgbm90IHNwZWNpZmllZCwgYSBkZWZhdWx0IHZhbHVlIG9mIDEwMDAgKGluZGljYXRpbmcgYSBub3JtYWwgXCJ0cmFuc2FjdGlvbiBjb21wbGV0ZVwiIGNsb3N1cmUpIGlzIGFzc3VtZWQuIFNlZSB0aGUgbGlzdCBvZiBzdGF0dXMgY29kZXMgb24gdGhlIENsb3NlRXZlbnQgcGFnZSBmb3IgcGVybWl0dGVkIHZhbHVlcy5cbiAgICogQHBhcmFtIHJlYXNvbiBBIGh1bWFuLXJlYWRhYmxlIHN0cmluZyBleHBsYWluaW5nIHdoeSB0aGUgY29ubmVjdGlvbiBpcyBjbG9zaW5nLiBUaGlzIHN0cmluZyBtdXN0IGJlIG5vIGxvbmdlciB0aGFuIDEyMyBieXRlcyBvZiBVVEYtOCB0ZXh0IChub3QgY2hhcmFjdGVycykuXG4gICAqXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi92YWx1ZTpmdW5jdGlvbiBjbG9zZShjb2RlLHJlYXNvbil7aWYodHlwZW9mIGNvZGU9PSd1bmRlZmluZWQnKXtjb2RlPTEwMDA7fXRoaXMucmVjb25uZWN0RW5hYmxlZD1mYWxzZTt0aGlzLndzLmNsb3NlKGNvZGUscmVhc29uKTt9LyoqXG4gICAqIFRyYW5zbWl0cyBkYXRhIHRvIHRoZSBzZXJ2ZXIgb3ZlciB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb24uXG4gICAqIEBwYXJhbSBkYXRhIERPTVN0cmluZ3xBcnJheUJ1ZmZlcnxCbG9iXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi99LHtrZXk6J3NlbmQnLHZhbHVlOmZ1bmN0aW9uIHNlbmQoZGF0YSl7dGhpcy53cy5zZW5kKGRhdGEpO30vKipcbiAgICogQW4gZXZlbnQgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uJ3MgcmVhZHlTdGF0ZSBjaGFuZ2VzIHRvIENMT1NFRC4gVGhlIGxpc3RlbmVyIHJlY2VpdmVzIGEgQ2xvc2VFdmVudCBuYW1lZCBcImNsb3NlXCIuXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBFdmVudExpc3RlbmVyXG4gICAqL30se2tleTonYnVmZmVyZWRBbW91bnQnLGdldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gdGhpcy53cy5idWZmZXJlZEFtb3VudDt9LyoqXG4gICAqIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBjb25uZWN0aW9uOyB0aGlzIGlzIG9uZSBvZiB0aGUgUmVhZHkgc3RhdGUgY29uc3RhbnRzLlxuICAgKiBAdHlwZSB1bnNpZ25lZCBzaG9ydFxuICAgKiBAcmVhZG9ubHlcbiAgICovfSx7a2V5OidyZWFkeVN0YXRlJyxnZXQ6ZnVuY3Rpb24gZ2V0KCl7cmV0dXJuIHRoaXMud3MucmVhZHlTdGF0ZTt9LyoqXG4gICAqIEEgc3RyaW5nIGluZGljYXRpbmcgdGhlIHR5cGUgb2YgYmluYXJ5IGRhdGEgYmVpbmcgdHJhbnNtaXR0ZWQgYnkgdGhlXG4gICAqIGNvbm5lY3Rpb24uIFRoaXMgc2hvdWxkIGJlIGVpdGhlciBcImJsb2JcIiBpZiBET00gQmxvYiBvYmplY3RzIGFyZSBiZWluZ1xuICAgKiB1c2VkIG9yIFwiYXJyYXlidWZmZXJcIiBpZiBBcnJheUJ1ZmZlciBvYmplY3RzIGFyZSBiZWluZyB1c2VkLlxuICAgKiBAdHlwZSBET01TdHJpbmdcbiAgICovfSx7a2V5OidiaW5hcnlUeXBlJyxnZXQ6ZnVuY3Rpb24gZ2V0KCl7cmV0dXJuIHRoaXMud3MuYmluYXJ5VHlwZTt9LHNldDpmdW5jdGlvbiBzZXQoYmluYXJ5VHlwZSl7dGhpcy53cy5iaW5hcnlUeXBlPWJpbmFyeVR5cGU7fS8qKlxuICAgKiBUaGUgZXh0ZW5zaW9ucyBzZWxlY3RlZCBieSB0aGUgc2VydmVyLiBUaGlzIGlzIGN1cnJlbnRseSBvbmx5IHRoZSBlbXB0eVxuICAgKiBzdHJpbmcgb3IgYSBsaXN0IG9mIGV4dGVuc2lvbnMgYXMgbmVnb3RpYXRlZCBieSB0aGUgY29ubmVjdGlvbi5cbiAgICogQHR5cGUgRE9NU3RyaW5nXG4gICAqL30se2tleTonZXh0ZW5zaW9ucycsZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiB0aGlzLndzLmV4dGVuc2lvbnM7fSxzZXQ6ZnVuY3Rpb24gc2V0KGV4dGVuc2lvbnMpe3RoaXMud3MuZXh0ZW5zaW9ucz1leHRlbnNpb25zO30vKipcbiAgICogQSBzdHJpbmcgaW5kaWNhdGluZyB0aGUgbmFtZSBvZiB0aGUgc3ViLXByb3RvY29sIHRoZSBzZXJ2ZXIgc2VsZWN0ZWQ7XG4gICAqIHRoaXMgd2lsbCBiZSBvbmUgb2YgdGhlIHN0cmluZ3Mgc3BlY2lmaWVkIGluIHRoZSBwcm90b2NvbHMgcGFyYW1ldGVyIHdoZW5cbiAgICogY3JlYXRpbmcgdGhlIFdlYlNvY2tldCBvYmplY3QuXG4gICAqIEB0eXBlIERPTVN0cmluZ1xuICAgKi99LHtrZXk6J3Byb3RvY29sJyxnZXQ6ZnVuY3Rpb24gZ2V0KCl7cmV0dXJuIHRoaXMud3MucHJvdG9jb2w7fSxzZXQ6ZnVuY3Rpb24gc2V0KHByb3RvY29sKXt0aGlzLndzLnByb3RvY29sPXByb3RvY29sO319LHtrZXk6J29uY2xvc2UnLHNldDpmdW5jdGlvbiBzZXQobGlzdGVuZXIpe3RoaXMubGlzdGVuZXJzWydvbmNsb3NlJ109bGlzdGVuZXI7fSxnZXQ6ZnVuY3Rpb24gZ2V0KCl7cmV0dXJuIHRoaXMubGlzdGVuZXJzWydvbmNsb3NlJ107fS8qKlxuICAgKiBBbiBldmVudCBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbiBhbiBlcnJvciBvY2N1cnMuIFRoaXMgaXMgYSBzaW1wbGUgZXZlbnQgbmFtZWQgXCJlcnJvclwiLlxuICAgKiBAcGFyYW0gbGlzdGVuZXIgRXZlbnRMaXN0ZW5lclxuICAgKi99LHtrZXk6J29uZXJyb3InLHNldDpmdW5jdGlvbiBzZXQobGlzdGVuZXIpe3RoaXMubGlzdGVuZXJzWydvbmVycm9yJ109bGlzdGVuZXI7fSxnZXQ6ZnVuY3Rpb24gZ2V0KCl7cmV0dXJuIHRoaXMubGlzdGVuZXJzWydvbmVycm9yJ107fS8qKlxuICAgKiBBbiBldmVudCBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbiBhIG1lc3NhZ2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgc2VydmVyLiBUaGUgbGlzdGVuZXIgcmVjZWl2ZXMgYSBNZXNzYWdlRXZlbnQgbmFtZWQgXCJtZXNzYWdlXCIuXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBFdmVudExpc3RlbmVyXG4gICAqL30se2tleTonb25tZXNzYWdlJyxzZXQ6ZnVuY3Rpb24gc2V0KGxpc3RlbmVyKXt0aGlzLmxpc3RlbmVyc1snb25tZXNzYWdlJ109bGlzdGVuZXI7fSxnZXQ6ZnVuY3Rpb24gZ2V0KCl7cmV0dXJuIHRoaXMubGlzdGVuZXJzWydvbm1lc3NhZ2UnXTt9LyoqXG4gICAqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvbidzIHJlYWR5U3RhdGUgY2hhbmdlcyB0byBPUEVOOyB0aGlzIGluZGljYXRlcyB0aGF0IHRoZSBjb25uZWN0aW9uIGlzIHJlYWR5IHRvIHNlbmQgYW5kIHJlY2VpdmUgZGF0YS4gVGhlIGV2ZW50IGlzIGEgc2ltcGxlIG9uZSB3aXRoIHRoZSBuYW1lIFwib3BlblwiLlxuICAgKiBAcGFyYW0gbGlzdGVuZXIgRXZlbnRMaXN0ZW5lclxuICAgKi99LHtrZXk6J29ub3Blbicsc2V0OmZ1bmN0aW9uIHNldChsaXN0ZW5lcil7dGhpcy5saXN0ZW5lcnNbJ29ub3BlbiddPWxpc3RlbmVyO30sZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiB0aGlzLmxpc3RlbmVyc1snb25vcGVuJ107fS8qKlxuICAgKiBAcGFyYW0gbGlzdGVuZXIgRXZlbnRMaXN0ZW5lclxuICAgKi99LHtrZXk6J29ucmVjb25uZWN0JyxzZXQ6ZnVuY3Rpb24gc2V0KGxpc3RlbmVyKXt0aGlzLmxpc3RlbmVyc1snb25yZWNvbm5lY3QnXT1saXN0ZW5lcjt9LGdldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gdGhpcy5saXN0ZW5lcnNbJ29ucmVjb25uZWN0J107fX1dKTtyZXR1cm4gV2ViU29ja2V0Q2xpZW50O30oKTsvKipcbiAqIFRoZSBjb25uZWN0aW9uIGlzIG5vdCB5ZXQgb3Blbi5cbiAqL1dlYlNvY2tldENsaWVudC5DT05ORUNUSU5HPVdlYlNvY2tldEltcGwuQ09OTkVDVElORzsvKipcbiAqIFRoZSBjb25uZWN0aW9uIGlzIG9wZW4gYW5kIHJlYWR5IHRvIGNvbW11bmljYXRlLlxuICovV2ViU29ja2V0Q2xpZW50Lk9QRU49V2ViU29ja2V0SW1wbC5PUEVOOy8qKlxuICogVGhlIGNvbm5lY3Rpb24gaXMgaW4gdGhlIHByb2Nlc3Mgb2YgY2xvc2luZy5cbiAqL1dlYlNvY2tldENsaWVudC5DTE9TSU5HPVdlYlNvY2tldEltcGwuQ0xPU0lORzsvKipcbiAqIFRoZSBjb25uZWN0aW9uIGlzIGNsb3NlZCBvciBjb3VsZG4ndCBiZSBvcGVuZWQuXG4gKi9XZWJTb2NrZXRDbGllbnQuQ0xPU0VEPVdlYlNvY2tldEltcGwuQ0xPU0VEO2V4cG9ydHMuZGVmYXVsdD1XZWJTb2NrZXRDbGllbnQ7IiwiLy8gRm9zc2lsIFNDTSBkZWx0YSBjb21wcmVzc2lvbiBhbGdvcml0aG1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vL1xuLy8gRm9ybWF0OlxuLy8gaHR0cDovL3d3dy5mb3NzaWwtc2NtLm9yZy9pbmRleC5odG1sL2RvYy90aXAvd3d3L2RlbHRhX2Zvcm1hdC53aWtpXG4vL1xuLy8gQWxnb3JpdGhtOlxuLy8gaHR0cDovL3d3dy5mb3NzaWwtc2NtLm9yZy9pbmRleC5odG1sL2RvYy90aXAvd3d3L2RlbHRhX2VuY29kZXJfYWxnb3JpdGhtLndpa2lcbi8vXG4vLyBPcmlnaW5hbCBpbXBsZW1lbnRhdGlvbjpcbi8vIGh0dHA6Ly93d3cuZm9zc2lsLXNjbS5vcmcvaW5kZXguaHRtbC9hcnRpZmFjdC9kMWIwNTk4YWRjZDY1MGIzNTUxZjYzYjE3ZGZjODY0ZTczNzc1YzNkXG4vL1xuLy8gTElDRU5TRVxuLy8gLS0tLS0tLVxuLy9cbi8vIENvcHlyaWdodCAyMDE0IERtaXRyeSBDaGVzdG55a2ggKEphdmFTY3JpcHQgcG9ydClcbi8vIENvcHlyaWdodCAyMDA3IEQuIFJpY2hhcmQgSGlwcCAgKG9yaWdpbmFsIEMgdmVyc2lvbilcbi8vIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvclxuLy8gd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4vL1xuLy8gICAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlXG4vLyAgICAgIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGVcbi8vICAgICAgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vL1xuLy8gICAyLiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyAgICAgIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGVcbi8vICAgICAgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyXG4vLyAgICAgIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQVVUSE9SUyBgYEFTIElTJycgQU5EIEFOWSBFWFBSRVNTXG4vLyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuLy8gV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4vLyBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09OVFJJQlVUT1JTIEJFXG4vLyBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4vLyBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuLy8gU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SXG4vLyBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbi8vIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFXG4vLyBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLFxuLy8gRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbi8vXG4vLyBUaGUgdmlld3MgYW5kIGNvbmNsdXNpb25zIGNvbnRhaW5lZCBpbiB0aGUgc29mdHdhcmUgYW5kIGRvY3VtZW50YXRpb25cbi8vIGFyZSB0aG9zZSBvZiB0aGUgYXV0aG9ycyBhbmQgY29udHJpYnV0b3JzIGFuZCBzaG91bGQgbm90IGJlIGludGVycHJldGVkXG4vLyBhcyByZXByZXNlbnRpbmcgb2ZmaWNpYWwgcG9saWNpZXMsIGVpdGhlciBleHByZXNzZWQgb3IgaW1wbGllZCwgb2YgYW55Ym9keVxuLy8gZWxzZS5cbi8vXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICBlbHNlIHJvb3QuZm9zc2lsRGVsdGEgPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIGZvc3NpbERlbHRhID0ge307XG5cbi8vIEhhc2ggd2luZG93IHdpZHRoIGluIGJ5dGVzLiBNdXN0IGJlIGEgcG93ZXIgb2YgdHdvLlxudmFyIE5IQVNIID0gMTY7XG5cbmZ1bmN0aW9uIFJvbGxpbmdIYXNoKCkge1xuICB0aGlzLmEgPSAwOyAvLyBoYXNoICAgICAoMTYtYml0IHVuc2lnbmVkKVxuICB0aGlzLmIgPSAwOyAvLyB2YWx1ZXMgICAoMTYtYml0IHVuc2lnbmVkKVxuICB0aGlzLmkgPSAwOyAvLyBzdGFydCBvZiB0aGUgaGFzaCB3aW5kb3cgKDE2LWJpdCB1bnNpZ25lZClcbiAgdGhpcy56ID0gbmV3IEFycmF5KE5IQVNIKTsgLy8gdGhlIHZhbHVlcyB0aGF0IGhhdmUgYmVlbiBoYXNoZWQuXG59XG5cbi8vIEluaXRpYWxpemUgdGhlIHJvbGxpbmcgaGFzaCB1c2luZyB0aGUgZmlyc3QgTkhBU0ggYnl0ZXMgb2Zcbi8vIHogYXQgdGhlIGdpdmVuIHBvc2l0aW9uLlxuUm9sbGluZ0hhc2gucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbih6LCBwb3MpIHtcbiAgdmFyIGEgPSAwLCBiID0gMCwgaSwgeDtcbiAgZm9yKGkgPSAwOyBpIDwgTkhBU0g7IGkrKyl7XG4gICAgeCA9IHpbcG9zK2ldO1xuICAgIGEgPSAoYSArIHgpICYgMHhmZmZmO1xuICAgIGIgPSAoYiArIChOSEFTSC1pKSp4KSAmIDB4ZmZmZjtcbiAgICB0aGlzLnpbaV0gPSB4O1xuICB9XG4gIHRoaXMuYSA9IGEgJiAweGZmZmY7XG4gIHRoaXMuYiA9IGIgJiAweGZmZmY7XG4gIHRoaXMuaSA9IDA7XG59O1xuXG4vLyBBZHZhbmNlIHRoZSByb2xsaW5nIGhhc2ggYnkgYSBzaW5nbGUgYnl0ZSBcImNcIi5cblJvbGxpbmdIYXNoLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oYykge1xuICB2YXIgb2xkID0gdGhpcy56W3RoaXMuaV07XG4gIHRoaXMuelt0aGlzLmldID0gYztcbiAgdGhpcy5pID0gKHRoaXMuaSsxKSYoTkhBU0gtMSk7XG4gIHRoaXMuYSA9ICh0aGlzLmEgLSBvbGQgKyBjKSAmIDB4ZmZmZjtcbiAgdGhpcy5iID0gKHRoaXMuYiAtIE5IQVNIKm9sZCArIHRoaXMuYSkgJiAweGZmZmY7XG59O1xuXG4vLyBSZXR1cm4gYSAzMi1iaXQgaGFzaCB2YWx1ZS5cblJvbGxpbmdIYXNoLnByb3RvdHlwZS52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKCh0aGlzLmEgJiAweGZmZmYpIHwgKHRoaXMuYiAmIDB4ZmZmZik8PDE2KT4+PjA7XG59O1xuXG52YXIgekRpZ2l0cyA9IFwiMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaX2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6flwiLlxuICAgICAgICAgICAgICAgIHNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguY2hhckNvZGVBdCgwKTsgfSk7XG5cbnZhciB6VmFsdWUgPSBbXG4gIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgICAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsXG4gIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgICAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsXG4gIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgICAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsXG4gICAwLCAgMSwgIDIsICAzLCAgNCwgIDUsICA2LCAgNywgICAgOCwgIDksIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsXG4gIC0xLCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgICAxNywgMTgsIDE5LCAyMCwgMjEsIDIyLCAyMywgMjQsXG4gIDI1LCAyNiwgMjcsIDI4LCAyOSwgMzAsIDMxLCAzMiwgICAzMywgMzQsIDM1LCAtMSwgLTEsIC0xLCAtMSwgMzYsXG4gIC0xLCAzNywgMzgsIDM5LCA0MCwgNDEsIDQyLCA0MywgICA0NCwgNDUsIDQ2LCA0NywgNDgsIDQ5LCA1MCwgNTEsXG4gIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDU4LCA1OSwgICA2MCwgNjEsIDYyLCAtMSwgLTEsIC0xLCA2MywgLTFcbl07XG5cbi8vIFJlYWRlciByZWFkcyBieXRlcywgY2hhcnMsIGludHMgZnJvbSBhcnJheS5cbmZ1bmN0aW9uIFJlYWRlcihhcnJheSkge1xuICB0aGlzLmEgPSBhcnJheTsgLy8gc291cmNlIGFycmF5XG4gIHRoaXMucG9zID0gMDsgICAvLyBjdXJyZW50IHBvc2l0aW9uIGluIGFycmF5XG59XG5cblJlYWRlci5wcm90b3R5cGUuaGF2ZUJ5dGVzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBvcyA8IHRoaXMuYS5sZW5ndGg7XG59O1xuXG5SZWFkZXIucHJvdG90eXBlLmdldEJ5dGUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGIgPSB0aGlzLmFbdGhpcy5wb3NdO1xuICB0aGlzLnBvcysrO1xuICBpZiAodGhpcy5wb3MgPiB0aGlzLmEubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIGJvdW5kcycpO1xuICByZXR1cm4gYjtcbn07XG5cblJlYWRlci5wcm90b3R5cGUuZ2V0Q2hhciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLmdldEJ5dGUoKSk7XG59O1xuXG4vLyBSZWFkIGJhc2U2NC1lbmNvZGVkIHVuc2lnbmVkIGludGVnZXIuXG5SZWFkZXIucHJvdG90eXBlLmdldEludCA9IGZ1bmN0aW9uKCl7XG4gIHZhciB2ID0gMCwgYztcbiAgd2hpbGUodGhpcy5oYXZlQnl0ZXMoKSAmJiAoYyA9IHpWYWx1ZVsweDdmICYgdGhpcy5nZXRCeXRlKCldKSA+PSAwKSB7XG4gICAgIHYgPSAodjw8NikgKyBjO1xuICB9XG4gIHRoaXMucG9zLS07XG4gIHJldHVybiB2ID4+PiAwO1xufTtcblxuXG4vLyBXcml0ZSB3cml0ZXMgYW4gYXJyYXkuXG5mdW5jdGlvbiBXcml0ZXIoKSB7XG4gIHRoaXMuYSA9IFtdO1xufVxuXG5Xcml0ZXIucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYTtcbn07XG5cbldyaXRlci5wcm90b3R5cGUucHV0Qnl0ZSA9IGZ1bmN0aW9uKGIpIHtcbiAgdGhpcy5hLnB1c2goYiAmIDB4ZmYpO1xufTtcblxuLy8gV3JpdGUgYW4gQVNDSUkgY2hhcmFjdGVyIChzIGlzIGEgb25lLWNoYXIgc3RyaW5nKS5cbldyaXRlci5wcm90b3R5cGUucHV0Q2hhciA9IGZ1bmN0aW9uKHMpIHtcbiAgdGhpcy5wdXRCeXRlKHMuY2hhckNvZGVBdCgwKSk7XG59O1xuXG4vLyBXcml0ZSBhIGJhc2U2NCB1bnNpZ25lZCBpbnRlZ2VyLlxuV3JpdGVyLnByb3RvdHlwZS5wdXRJbnQgPSBmdW5jdGlvbih2KXtcbiAgdmFyIGksIGosIHpCdWYgPSBbXTtcbiAgaWYgKHYgPT09IDApIHtcbiAgICB0aGlzLnB1dENoYXIoJzAnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yIChpID0gMDsgdiA+IDA7IGkrKywgdiA+Pj49IDYpXG4gICAgekJ1Zi5wdXNoKHpEaWdpdHNbdiYweDNmXSk7XG4gIGZvciAoaiA9IGktMTsgaiA+PSAwOyBqLS0pXG4gICAgdGhpcy5wdXRCeXRlKHpCdWZbal0pO1xufTtcblxuLy8gQ29weSBmcm9tIGFycmF5IGF0IHN0YXJ0IHRvIGVuZC5cbldyaXRlci5wcm90b3R5cGUucHV0QXJyYXkgPSBmdW5jdGlvbihhLCBzdGFydCwgZW5kKSB7XG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB0aGlzLmEucHVzaChhW2ldKTtcbn07XG5cbi8vIFJldHVybiB0aGUgbnVtYmVyIGRpZ2l0cyBpbiB0aGUgYmFzZTY0IHJlcHJlc2VudGF0aW9uIG9mIGEgcG9zaXRpdmUgaW50ZWdlci5cbmZ1bmN0aW9uIGRpZ2l0Q291bnQodil7XG4gIHZhciBpLCB4O1xuICBmb3IgKGkgPSAxLCB4ID0gNjQ7IHYgPj0geDsgaSsrLCB4IDw8PSA2KXsgLyogbm90aGluZyAqLyB9XG4gIHJldHVybiBpO1xufVxuXG4vLyBSZXR1cm4gYSAzMi1iaXQgY2hlY2tzdW0gb2YgdGhlIGFycmF5LlxuZnVuY3Rpb24gY2hlY2tzdW0oYXJyKSB7XG4gIHZhciBzdW0wID0gMCwgc3VtMSA9IDAsIHN1bTIgPSAwLCBzdW0zID0gMCxcbiAgICAgIHogPSAwLCBOID0gYXJyLmxlbmd0aDtcbiAgLy9UT0RPIG1lYXN1cmUgaWYgdGhpcyB1bnJvbGxpbmcgaXMgaGVscGZ1bC5cbiAgd2hpbGUgKE4gPj0gMTYpIHtcbiAgICBzdW0wID0gc3VtMCArIGFyclt6KzBdIHwgMDtcbiAgICBzdW0xID0gc3VtMSArIGFyclt6KzFdIHwgMDtcbiAgICBzdW0yID0gc3VtMiArIGFyclt6KzJdIHwgMDtcbiAgICBzdW0zID0gc3VtMyArIGFyclt6KzNdIHwgMDtcblxuICAgIHN1bTAgPSBzdW0wICsgYXJyW3orNF0gfCAwO1xuICAgIHN1bTEgPSBzdW0xICsgYXJyW3orNV0gfCAwO1xuICAgIHN1bTIgPSBzdW0yICsgYXJyW3orNl0gfCAwO1xuICAgIHN1bTMgPSBzdW0zICsgYXJyW3orN10gfCAwO1xuXG4gICAgc3VtMCA9IHN1bTAgKyBhcnJbeis4XSB8IDA7XG4gICAgc3VtMSA9IHN1bTEgKyBhcnJbeis5XSB8IDA7XG4gICAgc3VtMiA9IHN1bTIgKyBhcnJbeisxMF0gfCAwO1xuICAgIHN1bTMgPSBzdW0zICsgYXJyW3orMTFdIHwgMDtcblxuICAgIHN1bTAgPSBzdW0wICsgYXJyW3orMTJdIHwgMDtcbiAgICBzdW0xID0gc3VtMSArIGFyclt6KzEzXSB8IDA7XG4gICAgc3VtMiA9IHN1bTIgKyBhcnJbeisxNF0gfCAwO1xuICAgIHN1bTMgPSBzdW0zICsgYXJyW3orMTVdIHwgMDtcblxuICAgIHogKz0gMTY7XG4gICAgTiAtPSAxNjtcbiAgfVxuICB3aGlsZSAoTiA+PSA0KSB7XG4gICAgc3VtMCA9IHN1bTAgKyBhcnJbeiswXSB8IDA7XG4gICAgc3VtMSA9IHN1bTEgKyBhcnJbeisxXSB8IDA7XG4gICAgc3VtMiA9IHN1bTIgKyBhcnJbeisyXSB8IDA7XG4gICAgc3VtMyA9IHN1bTMgKyBhcnJbeiszXSB8IDA7XG4gICAgeiArPSA0O1xuICAgIE4gLT0gNDtcbiAgfVxuICBzdW0zID0gKCgoc3VtMyArIChzdW0yIDw8IDgpIHwgMCkgKyAoc3VtMSA8PCAxNikgfCAwKSArIChzdW0wIDw8IDI0KSB8IDApO1xuICAvKiBqc2hpbnQgLVcwODYgKi9cbiAgc3dpdGNoIChOKSB7XG4gICAgY2FzZSAzOiBzdW0zID0gc3VtMyArIChhcnJbeisyXSA8PCAgOCkgfCAwOyAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgY2FzZSAyOiBzdW0zID0gc3VtMyArIChhcnJbeisxXSA8PCAxNikgfCAwOyAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgY2FzZSAxOiBzdW0zID0gc3VtMyArIChhcnJbeiswXSA8PCAyNCkgfCAwOyAvKiBmYWxscyB0aHJvdWdoICovXG4gIH1cbiAgcmV0dXJuIHN1bTMgPj4+IDA7XG59XG5cbi8vIENyZWF0ZSBhIG5ldyBkZWx0YSBmcm9tIHNyYyB0byBvdXQuXG5mb3NzaWxEZWx0YS5jcmVhdGUgPSBmdW5jdGlvbihzcmMsIG91dCkge1xuICB2YXIgekRlbHRhID0gbmV3IFdyaXRlcigpO1xuICB2YXIgbGVuT3V0ID0gb3V0Lmxlbmd0aDtcbiAgdmFyIGxlblNyYyA9IHNyYy5sZW5ndGg7XG4gIHZhciBpLCBsYXN0UmVhZCA9IC0xO1xuXG4gIHpEZWx0YS5wdXRJbnQobGVuT3V0KTtcbiAgekRlbHRhLnB1dENoYXIoJ1xcbicpO1xuXG4gIC8vIElmIHRoZSBzb3VyY2UgaXMgdmVyeSBzbWFsbCwgaXQgbWVhbnMgdGhhdCB3ZSBoYXZlIG5vXG4gIC8vIGNoYW5jZSBvZiBldmVyIGRvaW5nIGEgY29weSBjb21tYW5kLiAgSnVzdCBvdXRwdXQgYSBzaW5nbGVcbiAgLy8gbGl0ZXJhbCBzZWdtZW50IGZvciB0aGUgZW50aXJlIHRhcmdldCBhbmQgZXhpdC5cbiAgaWYgKGxlblNyYyA8PSBOSEFTSCkge1xuICAgIHpEZWx0YS5wdXRJbnQobGVuT3V0KTtcbiAgICB6RGVsdGEucHV0Q2hhcignOicpO1xuICAgIHpEZWx0YS5wdXRBcnJheShvdXQsIDAsIGxlbk91dCk7XG4gICAgekRlbHRhLnB1dEludChjaGVja3N1bShvdXQpKTtcbiAgICB6RGVsdGEucHV0Q2hhcignOycpO1xuICAgIHJldHVybiB6RGVsdGEudG9BcnJheSgpO1xuICB9XG5cbiAgLy8gQ29tcHV0ZSB0aGUgaGFzaCB0YWJsZSB1c2VkIHRvIGxvY2F0ZSBtYXRjaGluZyBzZWN0aW9ucyBpbiB0aGUgc291cmNlLlxuICB2YXIgbkhhc2ggPSBNYXRoLmNlaWwobGVuU3JjIC8gTkhBU0gpO1xuICB2YXIgY29sbGlkZSA9ICBuZXcgQXJyYXkobkhhc2gpO1xuICB2YXIgbGFuZG1hcmsgPSBuZXcgQXJyYXkobkhhc2gpO1xuICBmb3IgKGkgPSAwOyBpIDwgY29sbGlkZS5sZW5ndGg7IGkrKykgY29sbGlkZVtpXSA9IC0xO1xuICBmb3IgKGkgPSAwOyBpIDwgbGFuZG1hcmsubGVuZ3RoOyBpKyspIGxhbmRtYXJrW2ldID0gLTE7XG4gIHZhciBodiwgaCA9IG5ldyBSb2xsaW5nSGFzaCgpO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuU3JjLU5IQVNIOyBpICs9IE5IQVNIKSB7XG4gICAgaC5pbml0KHNyYywgaSk7XG4gICAgaHYgPSBoLnZhbHVlKCkgJSBuSGFzaDtcbiAgICBjb2xsaWRlW2kvTkhBU0hdID0gbGFuZG1hcmtbaHZdO1xuICAgIGxhbmRtYXJrW2h2XSA9IGkvTkhBU0g7XG4gIH1cblxuICB2YXIgYmFzZSA9IDA7XG4gIHZhciBpU3JjLCBpQmxvY2ssIGJlc3RDbnQsIGJlc3RPZnN0LCBiZXN0TGl0c3o7XG4gIHdoaWxlIChiYXNlK05IQVNIPGxlbk91dCkge1xuICAgIGJlc3RPZnN0PTA7XG4gICAgYmVzdExpdHN6PTA7XG4gICAgaC5pbml0KG91dCwgYmFzZSk7XG4gICAgaSA9IDA7IC8vIFRyeWluZyB0byBtYXRjaCBhIGxhbmRtYXJrIGFnYWluc3Qgek91dFtiYXNlK2ldXG4gICAgYmVzdENudCA9IDA7XG4gICAgd2hpbGUoMSkge1xuICAgICAgdmFyIGxpbWl0ID0gMjUwO1xuICAgICAgaHYgPSBoLnZhbHVlKCkgJSBuSGFzaDtcbiAgICAgIGlCbG9jayA9IGxhbmRtYXJrW2h2XTtcbiAgICAgIHdoaWxlIChpQmxvY2sgPj0gMCAmJiAobGltaXQtLSk+MCApIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlIGhhc2ggd2luZG93IGhhcyBpZGVudGlmaWVkIGEgcG90ZW50aWFsIG1hdGNoIGFnYWluc3RcbiAgICAgICAgLy8gbGFuZG1hcmsgYmxvY2sgaUJsb2NrLiAgQnV0IHdlIG5lZWQgdG8gaW52ZXN0aWdhdGUgZnVydGhlci5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gTG9vayBmb3IgYSByZWdpb24gaW4gek91dCB0aGF0IG1hdGNoZXMgelNyYy4gQW5jaG9yIHRoZSBzZWFyY2hcbiAgICAgICAgLy8gYXQgelNyY1tpU3JjXSBhbmQgek91dFtiYXNlK2ldLiAgRG8gbm90IGluY2x1ZGUgYW55dGhpbmcgcHJpb3IgdG9cbiAgICAgICAgLy8gek91dFtiYXNlXSBvciBhZnRlciB6T3V0W291dExlbl0gbm9yIGFueXRoaW5nIGFmdGVyIHpTcmNbc3JjTGVuXS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gU2V0IGNudCBlcXVhbCB0byB0aGUgbGVuZ3RoIG9mIHRoZSBtYXRjaCBhbmQgc2V0IG9mc3Qgc28gdGhhdFxuICAgICAgICAvLyB6U3JjW29mc3RdIGlzIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBtYXRjaC4gIGxpdHN6IGlzIHRoZSBudW1iZXJcbiAgICAgICAgLy8gb2YgY2hhcmFjdGVycyBiZXR3ZWVuIHpPdXRbYmFzZV0gYW5kIHRoZSBiZWdpbm5pbmcgb2YgdGhlIG1hdGNoLlxuICAgICAgICAvLyBzeiB3aWxsIGJlIHRoZSBvdmVyaGVhZCAoaW4gYnl0ZXMpIG5lZWRlZCB0byBlbmNvZGUgdGhlIGNvcHlcbiAgICAgICAgLy8gY29tbWFuZC4gIE9ubHkgZ2VuZXJhdGUgY29weSBjb21tYW5kIGlmIHRoZSBvdmVyaGVhZCBvZiB0aGVcbiAgICAgICAgLy8gY29weSBjb21tYW5kIGlzIGxlc3MgdGhhbiB0aGUgYW1vdW50IG9mIGxpdGVyYWwgdGV4dCB0byBiZSBjb3BpZWQuXG4gICAgICAgIC8vXG4gICAgICAgIHZhciBjbnQsIG9mc3QsIGxpdHN6O1xuICAgICAgICB2YXIgaiwgaywgeCwgeTtcbiAgICAgICAgdmFyIHN6O1xuXG4gICAgICAgIC8vIEJlZ2lubmluZyBhdCBpU3JjLCBtYXRjaCBmb3J3YXJkcyBhcyBmYXIgYXMgd2UgY2FuLlxuICAgICAgICAvLyBqIGNvdW50cyB0aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBtYXRjaC5cbiAgICAgICAgaVNyYyA9IGlCbG9jaypOSEFTSDtcbiAgICAgICAgZm9yIChqID0gMCwgeCA9IGlTcmMsIHkgPSBiYXNlK2k7IHggPCBsZW5TcmMgJiYgeSA8IGxlbk91dDsgaisrLCB4KyssIHkrKykge1xuICAgICAgICAgIGlmIChzcmNbeF0gIT09IG91dFt5XSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgai0tO1xuXG4gICAgICAgIC8vIEJlZ2lubmluZyBhdCBpU3JjLTEsIG1hdGNoIGJhY2t3YXJkcyBhcyBmYXIgYXMgd2UgY2FuLlxuICAgICAgICAvLyBrIGNvdW50cyB0aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBtYXRjaC5cbiAgICAgICAgZm9yIChrID0gMTsgayA8IGlTcmMgJiYgayA8PSBpOyBrKyspIHtcbiAgICAgICAgICBpZiAoc3JjW2lTcmMta10gIT09IG91dFtiYXNlK2kta10pIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGstLTtcblxuICAgICAgICAvLyBDb21wdXRlIHRoZSBvZmZzZXQgYW5kIHNpemUgb2YgdGhlIG1hdGNoaW5nIHJlZ2lvbi5cbiAgICAgICAgb2ZzdCA9IGlTcmMtaztcbiAgICAgICAgY250ID0gaitrKzE7XG4gICAgICAgIGxpdHN6ID0gaS1rOyAgLy8gTnVtYmVyIG9mIGJ5dGVzIG9mIGxpdGVyYWwgdGV4dCBiZWZvcmUgdGhlIGNvcHlcbiAgICAgICAgLy8gc3ogd2lsbCBob2xkIHRoZSBudW1iZXIgb2YgYnl0ZXMgbmVlZGVkIHRvIGVuY29kZSB0aGUgXCJpbnNlcnRcIlxuICAgICAgICAvLyBjb21tYW5kIGFuZCB0aGUgY29weSBjb21tYW5kLCBub3QgY291bnRpbmcgdGhlIFwiaW5zZXJ0XCIgdGV4dC5cbiAgICAgICAgc3ogPSBkaWdpdENvdW50KGktaykrZGlnaXRDb3VudChjbnQpK2RpZ2l0Q291bnQob2ZzdCkrMztcbiAgICAgICAgaWYgKGNudCA+PSBzeiAmJiBjbnQgPiBiZXN0Q250KSB7XG4gICAgICAgICAgLy8gUmVtZW1iZXIgdGhpcyBtYXRjaCBvbmx5IGlmIGl0IGlzIHRoZSBiZXN0IHNvIGZhciBhbmQgaXRcbiAgICAgICAgICAvLyBkb2VzIG5vdCBpbmNyZWFzZSB0aGUgZmlsZSBzaXplLlxuICAgICAgICAgIGJlc3RDbnQgPSBjbnQ7XG4gICAgICAgICAgYmVzdE9mc3QgPSBpU3JjLWs7XG4gICAgICAgICAgYmVzdExpdHN6ID0gbGl0c3o7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayB0aGUgbmV4dCBtYXRjaGluZyBibG9ja1xuICAgICAgICBpQmxvY2sgPSBjb2xsaWRlW2lCbG9ja107XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIGhhdmUgYSBjb3B5IGNvbW1hbmQgdGhhdCBkb2VzIG5vdCBjYXVzZSB0aGUgZGVsdGEgdG8gYmUgbGFyZ2VyXG4gICAgICAvLyB0aGFuIGEgbGl0ZXJhbCBpbnNlcnQuICBTbyBhZGQgdGhlIGNvcHkgY29tbWFuZCB0byB0aGUgZGVsdGEuXG4gICAgICBpZiAoYmVzdENudCA+IDApIHtcbiAgICAgICAgaWYgKGJlc3RMaXRzeiA+IDApIHtcbiAgICAgICAgICAvLyBBZGQgYW4gaW5zZXJ0IGNvbW1hbmQgYmVmb3JlIHRoZSBjb3B5LlxuICAgICAgICAgIHpEZWx0YS5wdXRJbnQoYmVzdExpdHN6KTtcbiAgICAgICAgICB6RGVsdGEucHV0Q2hhcignOicpO1xuICAgICAgICAgIHpEZWx0YS5wdXRBcnJheShvdXQsIGJhc2UsIGJhc2UrYmVzdExpdHN6KTtcbiAgICAgICAgICBiYXNlICs9IGJlc3RMaXRzejtcbiAgICAgICAgfVxuICAgICAgICBiYXNlICs9IGJlc3RDbnQ7XG4gICAgICAgIHpEZWx0YS5wdXRJbnQoYmVzdENudCk7XG4gICAgICAgIHpEZWx0YS5wdXRDaGFyKCdAJyk7XG4gICAgICAgIHpEZWx0YS5wdXRJbnQoYmVzdE9mc3QpO1xuICAgICAgICB6RGVsdGEucHV0Q2hhcignLCcpO1xuICAgICAgICBpZiAoYmVzdE9mc3QgKyBiZXN0Q250IC0xID4gbGFzdFJlYWQpIHtcbiAgICAgICAgICBsYXN0UmVhZCA9IGJlc3RPZnN0ICsgYmVzdENudCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgYmVzdENudCA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB3ZSByZWFjaCB0aGlzIHBvaW50LCBpdCBtZWFucyBubyBtYXRjaCBpcyBmb3VuZCBzbyBmYXJcbiAgICAgIGlmIChiYXNlK2krTkhBU0ggPj0gbGVuT3V0KXtcbiAgICAgICAgLy8gV2UgaGF2ZSByZWFjaGVkIHRoZSBlbmQgYW5kIGhhdmUgbm90IGZvdW5kIGFueVxuICAgICAgICAvLyBtYXRjaGVzLiAgRG8gYW4gXCJpbnNlcnRcIiBmb3IgZXZlcnl0aGluZyB0aGF0IGRvZXMgbm90IG1hdGNoXG4gICAgICAgIHpEZWx0YS5wdXRJbnQobGVuT3V0LWJhc2UpO1xuICAgICAgICB6RGVsdGEucHV0Q2hhcignOicpO1xuICAgICAgICB6RGVsdGEucHV0QXJyYXkob3V0LCBiYXNlLCBiYXNlK2xlbk91dC1iYXNlKTtcbiAgICAgICAgYmFzZSA9IGxlbk91dDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkdmFuY2UgdGhlIGhhc2ggYnkgb25lIGNoYXJhY3Rlci4gS2VlcCBsb29raW5nIGZvciBhIG1hdGNoLlxuICAgICAgaC5uZXh0KG91dFtiYXNlK2krTkhBU0hdKTtcbiAgICAgIGkrKztcbiAgICB9XG4gIH1cbiAgLy8gT3V0cHV0IGEgZmluYWwgXCJpbnNlcnRcIiByZWNvcmQgdG8gZ2V0IGFsbCB0aGUgdGV4dCBhdCB0aGUgZW5kIG9mXG4gIC8vIHRoZSBmaWxlIHRoYXQgZG9lcyBub3QgbWF0Y2ggYW55dGhpbmcgaW4gdGhlIHNvdXJjZS5cbiAgaWYoYmFzZSA8IGxlbk91dCkge1xuICAgIHpEZWx0YS5wdXRJbnQobGVuT3V0LWJhc2UpO1xuICAgIHpEZWx0YS5wdXRDaGFyKCc6Jyk7XG4gICAgekRlbHRhLnB1dEFycmF5KG91dCwgYmFzZSwgYmFzZStsZW5PdXQtYmFzZSk7XG4gIH1cbiAgLy8gT3V0cHV0IHRoZSBmaW5hbCBjaGVja3N1bSByZWNvcmQuXG4gIHpEZWx0YS5wdXRJbnQoY2hlY2tzdW0ob3V0KSk7XG4gIHpEZWx0YS5wdXRDaGFyKCc7Jyk7XG4gIHJldHVybiB6RGVsdGEudG9BcnJheSgpO1xufTtcblxuLy8gUmV0dXJuIHRoZSBzaXplIChpbiBieXRlcykgb2YgdGhlIG91dHB1dCBmcm9tIGFwcGx5aW5nIGEgZGVsdGEuXG5mb3NzaWxEZWx0YS5vdXRwdXRTaXplID0gZnVuY3Rpb24oZGVsdGEpe1xuICB2YXIgekRlbHRhID0gbmV3IFJlYWRlcihkZWx0YSk7XG4gIHZhciBzaXplID0gekRlbHRhLmdldEludCgpO1xuICBpZiAoekRlbHRhLmdldENoYXIoKSAhPT0gJ1xcbicpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdzaXplIGludGVnZXIgbm90IHRlcm1pbmF0ZWQgYnkgXFwnXFxcXG5cXCcnKTtcbiAgcmV0dXJuIHNpemU7XG59O1xuXG4vLyBBcHBseSBhIGRlbHRhLlxuZm9zc2lsRGVsdGEuYXBwbHkgPSBmdW5jdGlvbihzcmMsIGRlbHRhLCBvcHRzKSB7XG4gIHZhciBsaW1pdCwgdG90YWwgPSAwO1xuICB2YXIgekRlbHRhID0gbmV3IFJlYWRlcihkZWx0YSk7XG4gIHZhciBsZW5TcmMgPSBzcmMubGVuZ3RoO1xuICB2YXIgbGVuRGVsdGEgPSBkZWx0YS5sZW5ndGg7XG5cbiAgbGltaXQgPSB6RGVsdGEuZ2V0SW50KCk7XG4gIGlmICh6RGVsdGEuZ2V0Q2hhcigpICE9PSAnXFxuJylcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NpemUgaW50ZWdlciBub3QgdGVybWluYXRlZCBieSBcXCdcXFxcblxcJycpO1xuICB2YXIgek91dCA9IG5ldyBXcml0ZXIoKTtcbiAgd2hpbGUoekRlbHRhLmhhdmVCeXRlcygpKSB7XG4gICAgdmFyIGNudCwgb2ZzdDtcbiAgICBjbnQgPSB6RGVsdGEuZ2V0SW50KCk7XG5cbiAgICBzd2l0Y2ggKHpEZWx0YS5nZXRDaGFyKCkpIHtcbiAgICAgIGNhc2UgJ0AnOlxuICAgICAgICBvZnN0ID0gekRlbHRhLmdldEludCgpO1xuICAgICAgICBpZiAoekRlbHRhLmhhdmVCeXRlcygpICYmIHpEZWx0YS5nZXRDaGFyKCkgIT09ICcsJylcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcHkgY29tbWFuZCBub3QgdGVybWluYXRlZCBieSBcXCcsXFwnJyk7XG4gICAgICAgIHRvdGFsICs9IGNudDtcbiAgICAgICAgaWYgKHRvdGFsID4gbGltaXQpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3B5IGV4Y2VlZHMgb3V0cHV0IGZpbGUgc2l6ZScpO1xuICAgICAgICBpZiAob2ZzdCtjbnQgPiBsZW5TcmMpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3B5IGV4dGVuZHMgcGFzdCBlbmQgb2YgaW5wdXQnKTtcbiAgICAgICAgek91dC5wdXRBcnJheShzcmMsIG9mc3QsIG9mc3QrY250KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJzonOlxuICAgICAgICB0b3RhbCArPSBjbnQ7XG4gICAgICAgIGlmICh0b3RhbCA+IGxpbWl0KVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW5zZXJ0IGNvbW1hbmQgZ2l2ZXMgYW4gb3V0cHV0IGxhcmdlciB0aGFuIHByZWRpY3RlZCcpO1xuICAgICAgICBpZiAoY250ID4gbGVuRGVsdGEpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnNlcnQgY291bnQgZXhjZWVkcyBzaXplIG9mIGRlbHRhJyk7XG4gICAgICAgIHpPdXQucHV0QXJyYXkoekRlbHRhLmEsIHpEZWx0YS5wb3MsIHpEZWx0YS5wb3MrY250KTtcbiAgICAgICAgekRlbHRhLnBvcyArPSBjbnQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICc7JzpcbiAgICAgICAgdmFyIG91dCA9IHpPdXQudG9BcnJheSgpO1xuICAgICAgICBpZiAoKCFvcHRzIHx8IG9wdHMudmVyaWZ5Q2hlY2tzdW0gIT09IGZhbHNlKSAmJiBjbnQgIT09IGNoZWNrc3VtKG91dCkpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdiYWQgY2hlY2tzdW0nKTtcbiAgICAgICAgaWYgKHRvdGFsICE9PSBsaW1pdClcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dlbmVyYXRlZCBzaXplIGRvZXMgbm90IG1hdGNoIHByZWRpY3RlZCBzaXplJyk7XG4gICAgICAgIHJldHVybiBvdXQ7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBkZWx0YSBvcGVyYXRvcicpO1xuICAgIH1cbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ3VudGVybWluYXRlZCBkZWx0YScpO1xufTtcblxucmV0dXJuIGZvc3NpbERlbHRhO1xuXG59KTtcbiIsImxldCBjcmVhdGVOYW5vRXZlbnRzID0gKCkgPT4gKHtcbiAgZXZlbnRzOiB7fSxcbiAgZW1pdCAoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICBmb3IgKGxldCBpIG9mIHRoaXMuZXZlbnRzW2V2ZW50XSB8fCBbXSkge1xuICAgICAgaSguLi5hcmdzKVxuICAgIH1cbiAgfSxcbiAgb24gKGV2ZW50LCBjYikge1xuICAgIDsodGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdIHx8IFtdKS5wdXNoKGNiKVxuICAgIHJldHVybiAoKSA9PiAodGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdLmZpbHRlcihpID0+IGkgIT09IGNiKSlcbiAgfVxufSlcblxuZXhwb3J0IHsgY3JlYXRlTmFub0V2ZW50cyB9XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFdmVudEVtaXR0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgfVxuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAoY2IsIG9uY2UpIHtcbiAgICAgICAgaWYgKG9uY2UgPT09IHZvaWQgMCkgeyBvbmNlID0gZmFsc2U7IH1cbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKGNiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmludm9rZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIGhhbmRsZXIuYXBwbHkodm9pZCAwLCBhcmdzKTsgfSk7XG4gICAgfTtcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmludm9rZUFzeW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLmhhbmRsZXJzLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gaGFuZGxlci5hcHBseSh2b2lkIDAsIGFyZ3MpOyB9KSk7XG4gICAgfTtcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmhhbmRsZXJzLmluZGV4T2YoY2IpO1xuICAgICAgICB0aGlzLmhhbmRsZXJzW2luZGV4XSA9IHRoaXMuaGFuZGxlcnNbdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxXTtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wb3AoKTtcbiAgICB9O1xuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB9O1xuICAgIHJldHVybiBFdmVudEVtaXR0ZXI7XG59KCkpO1xuZXhwb3J0cy5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5mdW5jdGlvbiBjcmVhdGVTaWduYWwoKSB7XG4gICAgdmFyIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgZnVuY3Rpb24gcmVnaXN0ZXIoY2IpIHtcbiAgICAgICAgcmV0dXJuIGVtaXR0ZXIucmVnaXN0ZXIoY2IsIHRoaXMgPT09IG51bGwpO1xuICAgIH1cbiAgICA7XG4gICAgcmVnaXN0ZXIub25jZSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYi5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgICAgICAgZW1pdHRlci5yZW1vdmUoY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgICAgICBlbWl0dGVyLnJlZ2lzdGVyKGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIHJlZ2lzdGVyLnJlbW92ZSA9IGZ1bmN0aW9uIChjYikgeyByZXR1cm4gZW1pdHRlci5yZW1vdmUoY2IpOyB9O1xuICAgIHJlZ2lzdGVyLmludm9rZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW1pdHRlci5pbnZva2UuYXBwbHkoZW1pdHRlciwgYXJncyk7XG4gICAgfTtcbiAgICByZWdpc3Rlci5pbnZva2VBc3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW1pdHRlci5pbnZva2VBc3luYy5hcHBseShlbWl0dGVyLCBhcmdzKTtcbiAgICB9O1xuICAgIHJlZ2lzdGVyLmNsZWFyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZW1pdHRlci5jbGVhcigpOyB9O1xuICAgIHJldHVybiByZWdpc3Rlcjtcbn1cbmV4cG9ydHMuY3JlYXRlU2lnbmFsID0gY3JlYXRlU2lnbmFsO1xuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2UoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG5cdCcjMDAwMENDJyxcblx0JyMwMDAwRkYnLFxuXHQnIzAwMzNDQycsXG5cdCcjMDAzM0ZGJyxcblx0JyMwMDY2Q0MnLFxuXHQnIzAwNjZGRicsXG5cdCcjMDA5OUNDJyxcblx0JyMwMDk5RkYnLFxuXHQnIzAwQ0MwMCcsXG5cdCcjMDBDQzMzJyxcblx0JyMwMENDNjYnLFxuXHQnIzAwQ0M5OScsXG5cdCcjMDBDQ0NDJyxcblx0JyMwMENDRkYnLFxuXHQnIzMzMDBDQycsXG5cdCcjMzMwMEZGJyxcblx0JyMzMzMzQ0MnLFxuXHQnIzMzMzNGRicsXG5cdCcjMzM2NkNDJyxcblx0JyMzMzY2RkYnLFxuXHQnIzMzOTlDQycsXG5cdCcjMzM5OUZGJyxcblx0JyMzM0NDMDAnLFxuXHQnIzMzQ0MzMycsXG5cdCcjMzNDQzY2Jyxcblx0JyMzM0NDOTknLFxuXHQnIzMzQ0NDQycsXG5cdCcjMzNDQ0ZGJyxcblx0JyM2NjAwQ0MnLFxuXHQnIzY2MDBGRicsXG5cdCcjNjYzM0NDJyxcblx0JyM2NjMzRkYnLFxuXHQnIzY2Q0MwMCcsXG5cdCcjNjZDQzMzJyxcblx0JyM5OTAwQ0MnLFxuXHQnIzk5MDBGRicsXG5cdCcjOTkzM0NDJyxcblx0JyM5OTMzRkYnLFxuXHQnIzk5Q0MwMCcsXG5cdCcjOTlDQzMzJyxcblx0JyNDQzAwMDAnLFxuXHQnI0NDMDAzMycsXG5cdCcjQ0MwMDY2Jyxcblx0JyNDQzAwOTknLFxuXHQnI0NDMDBDQycsXG5cdCcjQ0MwMEZGJyxcblx0JyNDQzMzMDAnLFxuXHQnI0NDMzMzMycsXG5cdCcjQ0MzMzY2Jyxcblx0JyNDQzMzOTknLFxuXHQnI0NDMzNDQycsXG5cdCcjQ0MzM0ZGJyxcblx0JyNDQzY2MDAnLFxuXHQnI0NDNjYzMycsXG5cdCcjQ0M5OTAwJyxcblx0JyNDQzk5MzMnLFxuXHQnI0NDQ0MwMCcsXG5cdCcjQ0NDQzMzJyxcblx0JyNGRjAwMDAnLFxuXHQnI0ZGMDAzMycsXG5cdCcjRkYwMDY2Jyxcblx0JyNGRjAwOTknLFxuXHQnI0ZGMDBDQycsXG5cdCcjRkYwMEZGJyxcblx0JyNGRjMzMDAnLFxuXHQnI0ZGMzMzMycsXG5cdCcjRkYzMzY2Jyxcblx0JyNGRjMzOTknLFxuXHQnI0ZGMzNDQycsXG5cdCcjRkYzM0ZGJyxcblx0JyNGRjY2MDAnLFxuXHQnI0ZGNjYzMycsXG5cdCcjRkY5OTAwJyxcblx0JyNGRjk5MzMnLFxuXHQnI0ZGQ0MwMCcsXG5cdCcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHQvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG5cdC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG5cdC8vIGV4cGxpY2l0bHlcblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmICh3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHdpbmRvdy5wcm9jZXNzLl9fbndqcykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcblx0Ly8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcblx0cmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG5cdFx0Ly8gSXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuXHRcdCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG5cdFx0Ly8gSXMgZmlyZWZveCA+PSB2MzE/XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG5cdFx0Ly8gRG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGFyZ3NbMF0gPSAodGhpcy51c2VDb2xvcnMgPyAnJWMnIDogJycpICtcblx0XHR0aGlzLm5hbWVzcGFjZSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyAlYycgOiAnICcpICtcblx0XHRhcmdzWzBdICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnJWMgJyA6ICcgJykgK1xuXHRcdCcrJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cblx0aWYgKCF0aGlzLnVzZUNvbG9ycykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuXHRhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTtcblxuXHQvLyBUaGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuXHQvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG5cdC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuXHRsZXQgaW5kZXggPSAwO1xuXHRsZXQgbGFzdEMgPSAwO1xuXHRhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgbWF0Y2ggPT4ge1xuXHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbmRleCsrO1xuXHRcdGlmIChtYXRjaCA9PT0gJyVjJykge1xuXHRcdFx0Ly8gV2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG5cdFx0XHQvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuXHRcdFx0bGFzdEMgPSBpbmRleDtcblx0XHR9XG5cdH0pO1xuXG5cdGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcblx0Ly8gVGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcblx0Ly8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcblx0cmV0dXJuIHR5cGVvZiBjb25zb2xlID09PSAnb2JqZWN0JyAmJlxuXHRcdGNvbnNvbGUubG9nICYmXG5cdFx0Y29uc29sZS5sb2coLi4uYXJncyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0dHJ5IHtcblx0XHRpZiAobmFtZXNwYWNlcykge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnNldEl0ZW0oJ2RlYnVnJywgbmFtZXNwYWNlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHI7XG5cdHRyeSB7XG5cdFx0ciA9IGV4cG9ydHMuc3RvcmFnZS5nZXRJdGVtKCdkZWJ1ZycpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxuXG5cdC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcblx0aWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG5cdFx0ciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG5cblx0cmV0dXJuIHI7XG59XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuXHR0cnkge1xuXHRcdC8vIFRWTUxLaXQgKEFwcGxlIFRWIEpTIFJ1bnRpbWUpIGRvZXMgbm90IGhhdmUgYSB3aW5kb3cgb2JqZWN0LCBqdXN0IGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHRcblx0XHQvLyBUaGUgQnJvd3NlciBhbHNvIGhhcyBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0LlxuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uICh2KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnJvci5tZXNzYWdlO1xuXHR9XG59O1xuIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKi9cblxuZnVuY3Rpb24gc2V0dXAoZW52KSB7XG5cdGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmRlZmF1bHQgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuY29lcmNlID0gY29lcmNlO1xuXHRjcmVhdGVEZWJ1Zy5kaXNhYmxlID0gZGlzYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlID0gZW5hYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGVkID0gZW5hYmxlZDtcblx0Y3JlYXRlRGVidWcuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG5cdE9iamVjdC5rZXlzKGVudikuZm9yRWFjaChrZXkgPT4ge1xuXHRcdGNyZWF0ZURlYnVnW2tleV0gPSBlbnZba2V5XTtcblx0fSk7XG5cblx0LyoqXG5cdCogQWN0aXZlIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuXHQqL1xuXHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMgPSBbXTtcblxuXHQvKipcblx0KiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cblx0Ki9cblxuXHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdC8qKlxuXHQqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cblx0KlxuXHQqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cblx0Ki9cblx0Y3JlYXRlRGVidWcuZm9ybWF0dGVycyA9IHt9O1xuXG5cdC8qKlxuXHQqIFNlbGVjdHMgYSBjb2xvciBmb3IgYSBkZWJ1ZyBuYW1lc3BhY2Vcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgZm9yIHRoZSBkZWJ1ZyBpbnN0YW5jZSB0byBiZSBjb2xvcmVkXG5cdCogQHJldHVybiB7TnVtYmVyfFN0cmluZ30gQW4gQU5TSSBjb2xvciBjb2RlIGZvciB0aGUgZ2l2ZW4gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuXHRcdGxldCBoYXNoID0gMDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcblx0XHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNyZWF0ZURlYnVnLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGNyZWF0ZURlYnVnLmNvbG9ycy5sZW5ndGhdO1xuXHR9XG5cdGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yID0gc2VsZWN0Q29sb3I7XG5cblx0LyoqXG5cdCogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQHJldHVybiB7RnVuY3Rpb259XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cdFx0bGV0IHByZXZUaW1lO1xuXG5cdFx0ZnVuY3Rpb24gZGVidWcoLi4uYXJncykge1xuXHRcdFx0Ly8gRGlzYWJsZWQ/XG5cdFx0XHRpZiAoIWRlYnVnLmVuYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzZWxmID0gZGVidWc7XG5cblx0XHRcdC8vIFNldCBgZGlmZmAgdGltZXN0YW1wXG5cdFx0XHRjb25zdCBjdXJyID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y29uc3QgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuXHRcdFx0c2VsZi5kaWZmID0gbXM7XG5cdFx0XHRzZWxmLnByZXYgPSBwcmV2VGltZTtcblx0XHRcdHNlbGYuY3VyciA9IGN1cnI7XG5cdFx0XHRwcmV2VGltZSA9IGN1cnI7XG5cblx0XHRcdGFyZ3NbMF0gPSBjcmVhdGVEZWJ1Zy5jb2VyY2UoYXJnc1swXSk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cblx0XHRcdFx0YXJncy51bnNoaWZ0KCclTycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblx0XHRcdGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCAobWF0Y2gsIGZvcm1hdCkgPT4ge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG5cdFx0XHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG5cdFx0XHRcdGlmICh0eXBlb2YgZm9ybWF0dGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsID0gYXJnc1tpbmRleF07XG5cdFx0XHRcdFx0bWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG5cdFx0XHRcdFx0Ly8gTm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuXHRcdFx0XHRcdGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHRpbmRleC0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuXHRcdFx0Y3JlYXRlRGVidWcuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG5cdFx0XHRjb25zdCBsb2dGbiA9IHNlbGYubG9nIHx8IGNyZWF0ZURlYnVnLmxvZztcblx0XHRcdGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXHRcdH1cblxuXHRcdGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcblx0XHRkZWJ1Zy5lbmFibGVkID0gY3JlYXRlRGVidWcuZW5hYmxlZChuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLnVzZUNvbG9ycyA9IGNyZWF0ZURlYnVnLnVzZUNvbG9ycygpO1xuXHRcdGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblx0XHRkZWJ1Zy5leHRlbmQgPSBleHRlbmQ7XG5cdFx0Ly8gRGVidWcuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5cdFx0Ly8gZGVidWcucmF3TG9nID0gcmF3TG9nO1xuXG5cdFx0Ly8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcblx0XHRpZiAodHlwZW9mIGNyZWF0ZURlYnVnLmluaXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluaXQoZGVidWcpO1xuXHRcdH1cblxuXHRcdGNyZWF0ZURlYnVnLmluc3RhbmNlcy5wdXNoKGRlYnVnKTtcblxuXHRcdHJldHVybiBkZWJ1Zztcblx0fVxuXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0Y29uc3QgaW5kZXggPSBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcblx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmQobmFtZXNwYWNlLCBkZWxpbWl0ZXIpIHtcblx0XHRjb25zdCBuZXdEZWJ1ZyA9IGNyZWF0ZURlYnVnKHRoaXMubmFtZXNwYWNlICsgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJzonIDogZGVsaW1pdGVyKSArIG5hbWVzcGFjZSk7XG5cdFx0bmV3RGVidWcubG9nID0gdGhpcy5sb2c7XG5cdFx0cmV0dXJuIG5ld0RlYnVnO1xuXHR9XG5cblx0LyoqXG5cdCogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuXHQqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG5cdFx0Y3JlYXRlRGVidWcuc2F2ZShuYW1lc3BhY2VzKTtcblxuXHRcdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdFx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHRcdGxldCBpO1xuXHRcdGNvbnN0IHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmICghc3BsaXRbaV0pIHtcblx0XHRcdFx0Ly8gaWdub3JlIGVtcHR5IHN0cmluZ3Ncblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuXG5cdFx0XHRpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgY3JlYXRlRGVidWcuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBpbnN0YW5jZSA9IGNyZWF0ZURlYnVnLmluc3RhbmNlc1tpXTtcblx0XHRcdGluc3RhbmNlLmVuYWJsZWQgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKGluc3RhbmNlLm5hbWVzcGFjZSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG5cdCpcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBkaXNhYmxlKCkge1xuXHRcdGNvbnN0IG5hbWVzcGFjZXMgPSBbXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5uYW1lcy5tYXAodG9OYW1lc3BhY2UpLFxuXHRcdFx0Li4uY3JlYXRlRGVidWcuc2tpcHMubWFwKHRvTmFtZXNwYWNlKS5tYXAobmFtZXNwYWNlID0+ICctJyArIG5hbWVzcGFjZSlcblx0XHRdLmpvaW4oJywnKTtcblx0XHRjcmVhdGVEZWJ1Zy5lbmFibGUoJycpO1xuXHRcdHJldHVybiBuYW1lc3BhY2VzO1xuXHR9XG5cblx0LyoqXG5cdCogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVcblx0KiBAcmV0dXJuIHtCb29sZWFufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuXHRcdGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0bGV0IGk7XG5cdFx0bGV0IGxlbjtcblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQqIENvbnZlcnQgcmVnZXhwIHRvIG5hbWVzcGFjZVxuXHQqXG5cdCogQHBhcmFtIHtSZWdFeHB9IHJlZ3hlcFxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHRvTmFtZXNwYWNlKHJlZ2V4cCkge1xuXHRcdHJldHVybiByZWdleHAudG9TdHJpbmcoKVxuXHRcdFx0LnN1YnN0cmluZygyLCByZWdleHAudG9TdHJpbmcoKS5sZW5ndGggLSAyKVxuXHRcdFx0LnJlcGxhY2UoL1xcLlxcKlxcPyQvLCAnKicpO1xuXHR9XG5cblx0LyoqXG5cdCogQ29lcmNlIGB2YWxgLlxuXHQqXG5cdCogQHBhcmFtIHtNaXhlZH0gdmFsXG5cdCogQHJldHVybiB7TWl4ZWR9XG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcblx0XHRpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG5cdFx0fVxuXHRcdHJldHVybiB2YWw7XG5cdH1cblxuXHRjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcblxuXHRyZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG4iLCJ2YXIgbmFpdmVGYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpIHJldHVybiBzZWxmO1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiAmJiB3aW5kb3cpIHJldHVybiB3aW5kb3c7XG5cdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byByZXNvbHZlIGdsb2JhbCBgdGhpc2BcIik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7XG5cdGlmICh0aGlzKSByZXR1cm4gdGhpcztcblxuXHQvLyBVbmV4cGVjdGVkIHN0cmljdCBtb2RlIChtYXkgaGFwcGVuIGlmIGUuZy4gYnVuZGxlZCBpbnRvIEVTTSBtb2R1bGUpXG5cblx0Ly8gRmFsbGJhY2sgdG8gc3RhbmRhcmQgZ2xvYmFsVGhpcyBpZiBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiICYmIGdsb2JhbFRoaXMpIHJldHVybiBnbG9iYWxUaGlzO1xuXG5cdC8vIFRoYW5rcyBAbWF0aGlhc2J5bmVucyAtPiBodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvZ2xvYmFsdGhpc1xuXHQvLyBJbiBhbGwgRVM1KyBlbmdpbmVzIGdsb2JhbCBvYmplY3QgaW5oZXJpdHMgZnJvbSBPYmplY3QucHJvdG90eXBlXG5cdC8vIChpZiB5b3UgYXBwcm9hY2hlZCBvbmUgdGhhdCBkb2Vzbid0IHBsZWFzZSByZXBvcnQpXG5cdHRyeSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwiX19nbG9iYWxfX1wiLCB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWVcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBVbmZvcnR1bmF0ZSBjYXNlIG9mIHVwZGF0ZXMgdG8gT2JqZWN0LnByb3RvdHlwZSBiZWluZyByZXN0cmljdGVkXG5cdFx0Ly8gdmlhIHByZXZlbnRFeHRlbnNpb25zLCBzZWFsIG9yIGZyZWV6ZVxuXHRcdHJldHVybiBuYWl2ZUZhbGxiYWNrKCk7XG5cdH1cblx0dHJ5IHtcblx0XHQvLyBTYWZhcmkgY2FzZSAod2luZG93Ll9fZ2xvYmFsX18gd29ya3MsIGJ1dCBfX2dsb2JhbF9fIGRvZXMgbm90KVxuXHRcdGlmICghX19nbG9iYWxfXykgcmV0dXJuIG5haXZlRmFsbGJhY2soKTtcblx0XHRyZXR1cm4gX19nbG9iYWxfXztcblx0fSBmaW5hbGx5IHtcblx0XHRkZWxldGUgT2JqZWN0LnByb3RvdHlwZS5fX2dsb2JhbF9fO1xuXHR9XG59KSgpO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZXZlbnRzXzEgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xuY29uc3QgcHJvdG9vX2NsaWVudF8xID0gcmVxdWlyZShcInByb3Rvby1jbGllbnRcIik7XG5jb25zdCB1dWlkXzEgPSByZXF1aXJlKFwidXVpZFwiKTtcbmNvbnN0IGxvZyA9IHJlcXVpcmUoXCJsb2dsZXZlbFwiKTtcbmNvbnN0IHN0cmVhbV8xID0gcmVxdWlyZShcIi4vc3RyZWFtXCIpO1xuY29uc3QgdHJhbnNwb3J0XzEgPSByZXF1aXJlKFwiLi90cmFuc3BvcnRcIik7XG5jbGFzcyBDbGllbnQgZXh0ZW5kcyBldmVudHNfMS5FdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm9uUmVxdWVzdCA9IChyZXF1ZXN0KSA9PiB7XG4gICAgICAgICAgICBsb2cuZGVidWcoJ0hhbmRsZSByZXF1ZXN0IGZyb20gc2VydmVyOiBbbWV0aG9kOiVzLCBkYXRhOiVvXScsIHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LmRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uTm90aWZpY2F0aW9uID0gKG5vdGlmaWNhdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBtZXRob2QsIGRhdGEgfSA9IG5vdGlmaWNhdGlvbjtcbiAgICAgICAgICAgIGxvZy5pbmZvKCdIYW5kbGUgbm90aWZpY2F0aW9uIGZyb20gc2VydmVyOiBbbWV0aG9kOiVzLCBkYXRhOiVvXScsIG1ldGhvZCwgZGF0YSk7XG4gICAgICAgICAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BlZXItam9pbic6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1aWQsIGluZm8gfSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncGVlci1qb2luJywgdWlkLCBpbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3BlZXItbGVhdmUnOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdWlkIH0gPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3BlZXItbGVhdmUnLCB1aWQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnc3RyZWFtLWFkZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBtaWQsIGluZm8sIHRyYWNrcyB9ID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhY2tNYXAgPSBvYmpUb1N0ck1hcCh0cmFja3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5rbm93blN0cmVhbXMuc2V0KG1pZCwgdHJhY2tNYXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnc3RyZWFtLWFkZCcsIG1pZCwgaW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdzdHJlYW0tcmVtb3ZlJzoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG1pZCB9ID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5zdHJlYW1zW21pZF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnc3RyZWFtLXJlbW92ZScsIHN0cmVhbSk7XG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnYnJvYWRjYXN0Jzoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVpZCwgaW5mbyB9ID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdicm9hZGNhc3QnLCB1aWQsIGluZm8pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVpZCA9IHV1aWRfMS52NCgpO1xuICAgICAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnVybCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmRlZmluZWQgY29uZmlnIG9yIGNvbmZpZy51cmwgaW4gaW9uLXNkay4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0cmFuc3BvcnQgPSBuZXcgcHJvdG9vX2NsaWVudF8xLldlYlNvY2tldFRyYW5zcG9ydChgJHtjb25maWcudXJsfS93cz9wZWVyPSR7dWlkfWApO1xuICAgICAgICBsb2cuc2V0TGV2ZWwoY29uZmlnLmxvZ2xldmVsICE9PSB1bmRlZmluZWQgPyBjb25maWcubG9nbGV2ZWwgOiBsb2cubGV2ZWxzLldBUk4pO1xuICAgICAgICB0aGlzLmtub3duU3RyZWFtcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy51aWQgPSB1aWQ7XG4gICAgICAgIHRoaXMuc3RyZWFtcyA9IHt9O1xuICAgICAgICB0aGlzLmRpc3BhdGNoID0gbmV3IHByb3Rvb19jbGllbnRfMS5QZWVyKHRyYW5zcG9ydCk7XG4gICAgICAgIGlmIChjb25maWcucnRjKVxuICAgICAgICAgICAgdHJhbnNwb3J0XzEuZGVmYXVsdC5zZXRSVENDb25maWd1cmF0aW9uKGNvbmZpZy5ydGMpO1xuICAgICAgICBzdHJlYW1fMS5TdHJlYW0uc2V0RGlzcGF0Y2godGhpcy5kaXNwYXRjaCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gub24oJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICBsb2cuaW5mbygnUGVlciBcIm9wZW5cIiBldmVudCcpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCd0cmFuc3BvcnQtb3BlbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaC5vbignZGlzY29ubmVjdGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgbG9nLmluZm8oJ1BlZXIgXCJkaXNjb25uZWN0ZWRcIiBldmVudCcpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCd0cmFuc3BvcnQtZmFpbGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoLm9uKCdjbG9zZScsICgpID0+IHtcbiAgICAgICAgICAgIGxvZy5pbmZvKCdQZWVyIFwiY2xvc2VcIiBldmVudCcpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCd0cmFuc3BvcnQtY2xvc2VkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoLm9uKCdyZXF1ZXN0JywgdGhpcy5vblJlcXVlc3QpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoLm9uKCdub3RpZmljYXRpb24nLCB0aGlzLm9uTm90aWZpY2F0aW9uKTtcbiAgICB9XG4gICAgYnJvYWRjYXN0KGluZm8pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2gucmVxdWVzdCgnYnJvYWRjYXN0Jywge1xuICAgICAgICAgICAgcmlkOiB0aGlzLnJpZCxcbiAgICAgICAgICAgIHVpZDogdGhpcy51aWQsXG4gICAgICAgICAgICBpbmZvLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgam9pbihyaWQsIGluZm8gPSB7IG5hbWU6ICdHdWVzdCcgfSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdGhpcy5yaWQgPSByaWQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLmRpc3BhdGNoLnJlcXVlc3QoJ2pvaW4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHJpZDogdGhpcy5yaWQsXG4gICAgICAgICAgICAgICAgICAgIHVpZDogdGhpcy51aWQsXG4gICAgICAgICAgICAgICAgICAgIGluZm8sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbG9nLmluZm8oJ2pvaW4gc3VjY2VzczogcmVzdWx0ID0+ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoJ2pvaW4gcmVqZWN0OiBlcnJvciA9PicgKyBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaXNoKHN0cmVhbSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnJpZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3Qgam9pbiBhIHJvb20gYmVmb3JlIHB1Ymxpc2hpbmcuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvY2FsID0gc3RyZWFtO1xuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIHN0cmVhbS5wdWJsaXNoKHRoaXMucmlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN1YnNjcmliZShtaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5yaWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IGpvaW4gYSByb29tIGJlZm9yZSBzdWJzY3JpYmluZy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRyYWNrcyA9IHRoaXMua25vd25TdHJlYW1zLmdldChtaWQpO1xuICAgICAgICAgICAgaWYgKCF0cmFja3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1YnNjcmliZSBtaWQgaXMgbm90IGtub3duLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0geWllbGQgc3RyZWFtXzEuUmVtb3RlU3RyZWFtLmdldFJlbW90ZU1lZGlhKHRoaXMucmlkLCBtaWQsIHRyYWNrcyk7XG4gICAgICAgICAgICB0aGlzLnN0cmVhbXNbbWlkXSA9IHN0cmVhbTtcbiAgICAgICAgICAgIHJldHVybiBzdHJlYW07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZWF2ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHRoaXMuZGlzcGF0Y2gucmVxdWVzdCgnbGVhdmUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHJpZDogdGhpcy5yaWQsXG4gICAgICAgICAgICAgICAgICAgIHVpZDogdGhpcy51aWQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbC51bnB1Ymxpc2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnN0cmVhbXMpLmZvckVhY2goKHN0cmVhbSkgPT4gc3RyZWFtLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMua25vd25TdHJlYW1zLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgbG9nLmluZm8oJ2xlYXZlIHN1Y2Nlc3M6IHJlc3VsdCA9PiAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKCdsZWF2ZSByZWplY3Q6IGVycm9yID0+JyArIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoLmNsb3NlKCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ2xpZW50O1xuZnVuY3Rpb24gb2JqVG9TdHJNYXAob2JqKSB7XG4gICAgY29uc3Qgc3RyTWFwID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgayBvZiBPYmplY3Qua2V5cyhvYmopKSB7XG4gICAgICAgIHN0ck1hcC5zZXQoaywgb2JqW2tdKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0ck1hcDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdHJlYW0gPSBleHBvcnRzLkxvY2FsU3RyZWFtID0gZXhwb3J0cy5DbGllbnQgPSB2b2lkIDA7XG5jb25zdCBjbGllbnRfMSA9IHJlcXVpcmUoXCIuL2NsaWVudFwiKTtcbmV4cG9ydHMuQ2xpZW50ID0gY2xpZW50XzEuZGVmYXVsdDtcbmNvbnN0IHN0cmVhbV8xID0gcmVxdWlyZShcIi4vc3RyZWFtXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTG9jYWxTdHJlYW1cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0cmVhbV8xLkxvY2FsU3RyZWFtOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU3RyZWFtXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdHJlYW1fMS5TdHJlYW07IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZW1vdGVTdHJlYW0gPSBleHBvcnRzLkxvY2FsU3RyZWFtID0gZXhwb3J0cy5TdHJlYW0gPSBleHBvcnRzLlZpZGVvUmVzb2x1dGlvbnMgPSB2b2lkIDA7XG5jb25zdCBsb2cgPSByZXF1aXJlKFwibG9nbGV2ZWxcIik7XG5jb25zdCB0cmFuc3BvcnRfMSA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydFwiKTtcbmV4cG9ydHMuVmlkZW9SZXNvbHV0aW9ucyA9IHtcbiAgICBxdmdhOiB7IHdpZHRoOiB7IGlkZWFsOiAzMjAgfSwgaGVpZ2h0OiB7IGlkZWFsOiAxODAgfSB9LFxuICAgIHZnYTogeyB3aWR0aDogeyBpZGVhbDogNjQwIH0sIGhlaWdodDogeyBpZGVhbDogMzYwIH0gfSxcbiAgICBzaGQ6IHsgd2lkdGg6IHsgaWRlYWw6IDk2MCB9LCBoZWlnaHQ6IHsgaWRlYWw6IDU0MCB9IH0sXG4gICAgaGQ6IHsgd2lkdGg6IHsgaWRlYWw6IDEyODAgfSwgaGVpZ2h0OiB7IGlkZWFsOiA3MjAgfSB9LFxuICAgIGZoZDogeyB3aWR0aDogeyBpZGVhbDogMTkyMCB9LCBoZWlnaHQ6IHsgaWRlYWw6IDEwOTAgfSB9LFxufTtcbmNsYXNzIFN0cmVhbSBleHRlbmRzIE1lZGlhU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3RvcihzdHJlYW0pIHtcbiAgICAgICAgc3VwZXIoc3RyZWFtKTtcbiAgICAgICAgaWYgKCFTdHJlYW0uZGlzcGF0Y2gpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGlzcGF0Y2ggbm90IHNldC4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgc2V0RGlzcGF0Y2goZGlzcGF0Y2gpIHtcbiAgICAgICAgU3RyZWFtLmRpc3BhdGNoID0gZGlzcGF0Y2g7XG4gICAgfVxufVxuZXhwb3J0cy5TdHJlYW0gPSBTdHJlYW07XG5jbGFzcyBMb2NhbFN0cmVhbSBleHRlbmRzIFN0cmVhbSB7XG4gICAgY29uc3RydWN0b3Ioc3RyZWFtLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHN0cmVhbSk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRVc2VyTWVkaWEob3B0aW9ucyA9IHtcbiAgICAgICAgY29kZWM6ICdWUDgnLFxuICAgICAgICByZXNvbHV0aW9uOiAnaGQnLFxuICAgICAgICBhdWRpbzogZmFsc2UsXG4gICAgICAgIHZpZGVvOiBmYWxzZSxcbiAgICB9KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBzdHJlYW0gPSB5aWVsZCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICAgICAgICAgICAgYXVkaW86IG9wdGlvbnMuYXVkaW8sXG4gICAgICAgICAgICAgICAgdmlkZW86IG9wdGlvbnMudmlkZW8gaW5zdGFuY2VvZiBPYmplY3RcbiAgICAgICAgICAgICAgICAgICAgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGV4cG9ydHMuVmlkZW9SZXNvbHV0aW9uc1tvcHRpb25zLnJlc29sdXRpb25dKSwgb3B0aW9ucy52aWRlbykgOiBvcHRpb25zLnZpZGVvXG4gICAgICAgICAgICAgICAgICAgID8gZXhwb3J0cy5WaWRlb1Jlc29sdXRpb25zW29wdGlvbnMucmVzb2x1dGlvbl1cbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBMb2NhbFN0cmVhbShzdHJlYW0sIG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldERpc3BsYXlNZWRpYShvcHRpb25zID0ge1xuICAgICAgICBjb2RlYzogJ1ZQOCcsXG4gICAgICAgIHJlc29sdXRpb246ICdoZCcsXG4gICAgICAgIGF1ZGlvOiBmYWxzZSxcbiAgICAgICAgdmlkZW86IHRydWUsXG4gICAgfSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0geWllbGQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXREaXNwbGF5TWVkaWEoe1xuICAgICAgICAgICAgICAgIHZpZGVvOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IExvY2FsU3RyZWFtKHN0cmVhbSwgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRWaWRlb0NvbnN0cmFpbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZpZGVvIGluc3RhbmNlb2YgT2JqZWN0XG4gICAgICAgICAgICA/IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXhwb3J0cy5WaWRlb1Jlc29sdXRpb25zW3RoaXMub3B0aW9ucy5yZXNvbHV0aW9uXSksIHRoaXMub3B0aW9ucy52aWRlbykgOiB7IHZpZGVvOiB0aGlzLm9wdGlvbnMudmlkZW8gfTtcbiAgICB9XG4gICAgc3dpdGNoRGV2aWNlKGtpbmQsIGRldmljZUlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucyksIHsgW2tpbmRdOiB0aGlzLm9wdGlvbnNba2luZF0gaW5zdGFuY2VvZiBPYmplY3RcbiAgICAgICAgICAgICAgICAgICAgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9uc1traW5kXSksIHsgZGV2aWNlSWQgfSkgOiB7IGRldmljZUlkIH0gfSk7XG4gICAgICAgICAgICBjb25zdCBzdHJlYW0gPSB5aWVsZCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICAgICAgICAgICAgW2tpbmRdOiBraW5kID09PSAndmlkZW8nID8gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdldFZpZGVvQ29uc3RyYWludHMoKSksIHsgZGV2aWNlSWQgfSkgOiB7IGRldmljZUlkIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHRyYWNrID0gc3RyZWFtLmdldFRyYWNrcygpWzBdO1xuICAgICAgICAgICAgbGV0IHByZXY7XG4gICAgICAgICAgICBpZiAoa2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgICAgIHByZXYgPSB0aGlzLmdldEF1ZGlvVHJhY2tzKClbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChraW5kID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICAgICAgcHJldiA9IHRoaXMuZ2V0VmlkZW9UcmFja3MoKVswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRkVHJhY2sodHJhY2spO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVUcmFjayhwcmV2KTtcbiAgICAgICAgICAgIHByZXYuc3RvcCgpO1xuICAgICAgICAgICAgLy8gSWYgcHVibGlzaGVkLCByZXBsYWNlIHB1Ymxpc2hlZCB0cmFjayB3aXRoIHRyYWNrIGZyb20gbmV3IGRldmljZVxuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNwb3J0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQuZ2V0U2VuZGVycygpLmZvckVhY2goKHNlbmRlcikgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKChfYSA9IHNlbmRlciA9PT0gbnVsbCB8fCBzZW5kZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbmRlci50cmFjaykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmtpbmQpID09PSB0cmFjay5raW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoX2IgPSBzZW5kZXIudHJhY2spID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kZXIucmVwbGFjZVRyYWNrKHRyYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG11dGUoa2luZCkge1xuICAgICAgICBpZiAoa2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgdGhpcy5nZXRBdWRpb1RyYWNrcygpWzBdLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChraW5kID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICB0aGlzLmdldFZpZGVvVHJhY2tzKClbMF0uZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVubXV0ZShraW5kKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAoa2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXVkaW9UcmFja3MoKVswXS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtpbmQgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFZpZGVvVHJhY2tzKClbMF0uZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaXNoKHJpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgeyBiYW5kd2lkdGgsIGNvZGVjIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgICAgICBsZXQgc2VuZE9mZmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydF8xLmRlZmF1bHQoY29kZWMpO1xuICAgICAgICAgICAgdGhpcy5nZXRUcmFja3MoKS5tYXAoKHRyYWNrKSA9PiB0aGlzLnRyYW5zcG9ydC5hZGRUcmFjayh0cmFjaywgdGhpcykpO1xuICAgICAgICAgICAgY29uc3Qgb2ZmZXIgPSB5aWVsZCB0aGlzLnRyYW5zcG9ydC5jcmVhdGVPZmZlcih7XG4gICAgICAgICAgICAgICAgb2ZmZXJUb1JlY2VpdmVWaWRlbzogZmFsc2UsXG4gICAgICAgICAgICAgICAgb2ZmZXJUb1JlY2VpdmVBdWRpbzogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZygnQ3JlYXRlZCBvZmZlciA9PiAlbycsIG9mZmVyKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LnNldExvY2FsRGVzY3JpcHRpb24ob2ZmZXIpO1xuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQub25pY2VjYW5kaWRhdGUgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbmRPZmZlcikge1xuICAgICAgICAgICAgICAgICAgICBzZW5kT2ZmZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QganNlcCA9IHRoaXMudHJhbnNwb3J0LmxvY2FsRGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhgU2VuZGluZyBvZmZlciAke2pzZXB9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIFN0cmVhbS5kaXNwYXRjaC5yZXF1ZXN0KCdwdWJsaXNoJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAganNlcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYW5kd2lkdGg6IE51bWJlcihiYW5kd2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWlkID0gcmVzdWx0Lm1pZDtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKCdHb3QgYW5zd2VyID0+ICVvJywgcmVzdWx0ID09PSBudWxsIHx8IHJlc3VsdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzdWx0LmpzZXApO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnRyYW5zcG9ydC5zZXRSZW1vdGVEZXNjcmlwdGlvbihyZXN1bHQgPT09IG51bGwgfHwgcmVzdWx0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXN1bHQuanNlcCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlkID0gcmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQub25uZWdvdGlhdGlvbm5lZWRlZCA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBsb2cuaW5mbygnbmVnb3RpYXRpb24gbmVlZGVkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVucHVibGlzaCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5yaWQgfHwgIXRoaXMubWlkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdHJlYW0gaXMgbm90IHB1Ymxpc2hlZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZy5pbmZvKCd1bnB1Ymxpc2ggcmlkID0+ICVzLCBtaWQgPT4gJXMnLCB0aGlzLnJpZCwgdGhpcy5taWQpO1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNwb3J0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy50cmFuc3BvcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geWllbGQgU3RyZWFtLmRpc3BhdGNoXG4gICAgICAgICAgICAgICAgLnJlcXVlc3QoJ3VucHVibGlzaCcsIHtcbiAgICAgICAgICAgICAgICByaWQ6IHRoaXMucmlkLFxuICAgICAgICAgICAgICAgIG1pZDogdGhpcy5taWQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5yaWQ7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMubWlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuTG9jYWxTdHJlYW0gPSBMb2NhbFN0cmVhbTtcbmNsYXNzIFJlbW90ZVN0cmVhbSBleHRlbmRzIFN0cmVhbSB7XG4gICAgc3RhdGljIGdldFJlbW90ZU1lZGlhKHJpZCwgbWlkLCB0cmFja3MpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbFRyYWNrcyA9IEFycmF5LmZyb20odHJhY2tzLnZhbHVlcygpKS5mbGF0KCk7XG4gICAgICAgICAgICBjb25zdCBhdWRpbyA9IGFsbFRyYWNrcy5tYXAoKHQpID0+IHQudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnYXVkaW8nKS5pbmNsdWRlcyh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvID0gYWxsVHJhY2tzLm1hcCgodCkgPT4gdC50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICd2aWRlbycpLmluY2x1ZGVzKHRydWUpO1xuICAgICAgICAgICAgbGV0IHNlbmRPZmZlciA9IHRydWU7XG4gICAgICAgICAgICBsb2cuZGVidWcoJ0NyZWF0aW5nIHJlY2VpdmVyID0+ICVzJywgbWlkKTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRfMS5kZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoYXVkaW8pIHtcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnQuYWRkVHJhbnNjZWl2ZXIoJ2F1ZGlvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmlkZW8pIHtcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnQuYWRkVHJhbnNjZWl2ZXIoJ3ZpZGVvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXNjID0geWllbGQgdHJhbnNwb3J0LmNyZWF0ZU9mZmVyKCk7XG4gICAgICAgICAgICBsb2cuZGVidWcoJ0NyZWF0ZWQgb2ZmZXIgPT4gJW8nLCBkZXNjKTtcbiAgICAgICAgICAgIHRyYW5zcG9ydC5zZXRMb2NhbERlc2NyaXB0aW9uKGRlc2MpO1xuICAgICAgICAgICAgdHJhbnNwb3J0Lm9ubmVnb3RpYXRpb25uZWVkZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9nLmRlYnVnKCduZWdvdGlhdGlvbiBuZWVkZWQnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0cmFuc3BvcnQub25pY2VjYW5kaWRhdGUgPSAoZSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGlmIChzZW5kT2ZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKCdTZW5kIG9mZmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRPZmZlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBqc2VwID0gdHJhbnNwb3J0LmxvY2FsRGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHRoaXMuZGlzcGF0Y2gucmVxdWVzdCgnc3Vic2NyaWJlJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAganNlcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5pbmZvKGBzdWJzY3JpYmUgc3VjY2VzcyA9PiByZXN1bHQobWlkOiAke3Jlc3VsdC5taWR9KWApO1xuICAgICAgICAgICAgICAgICAgICBsb2cuZGVidWcoJ0dvdCBhbnN3ZXIgPT4gJW8nLCByZXN1bHQgPT09IG51bGwgfHwgcmVzdWx0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXN1bHQuanNlcCk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHRyYW5zcG9ydC5zZXRSZW1vdGVEZXNjcmlwdGlvbihyZXN1bHQgPT09IG51bGwgfHwgcmVzdWx0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXN1bHQuanNlcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBzdHJlYW0gPSB5aWVsZCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0Lm9udHJhY2sgPSAoeyB0cmFjaywgc3RyZWFtcyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuZGVidWcoJ29uIHRyYWNrIGNhbGxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25jZSBtZWRpYSBmb3IgYSByZW1vdGUgdHJhY2sgYXJyaXZlcywgc2hvdyBpdCBpbiB0aGUgcmVtb3RlIHZpZGVvIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrLm9udW5tdXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHJlYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzdHJlYW1zWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ05vdCBlbm91Z2ggc3RyZWFtcycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKCdzdWJzY3JpYmUgcmVxdWVzdCBlcnJvciAgPT4gJyArIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBjb25zdCByZW1vdGUgPSBuZXcgUmVtb3RlU3RyZWFtKHN0cmVhbSk7XG4gICAgICAgICAgICByZW1vdGUudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuICAgICAgICAgICAgcmVtb3RlLm1pZCA9IG1pZDtcbiAgICAgICAgICAgIHJlbW90ZS5yaWQgPSByaWQ7XG4gICAgICAgICAgICByZXR1cm4gcmVtb3RlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy50cmFuc3BvcnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RyZWFtIGlzIG5vdCBvcGVuLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRyYW5zcG9ydCkge1xuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnRyYW5zcG9ydDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy50cmFuc3BvcnQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0cmVhbSBpcyBub3Qgc3Vic2NyaWJlZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZy5pbmZvKCd1bnN1YnNjcmliZSBtaWQgPT4gJXMnLCB0aGlzLm1pZCk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICByZXR1cm4geWllbGQgUmVtb3RlU3RyZWFtLmRpc3BhdGNoLnJlcXVlc3QoJ3Vuc3Vic2NyaWJlJywgeyBtaWQ6IHRoaXMubWlkIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLlJlbW90ZVN0cmVhbSA9IFJlbW90ZVN0cmVhbTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzZHBfdHJhbnNmb3JtXzEgPSByZXF1aXJlKFwic2RwLXRyYW5zZm9ybVwiKTtcbmNvbnN0IGxvZyA9IHJlcXVpcmUoXCJsb2dsZXZlbFwiKTtcbnZhciBQYXlsb2FkVHlwZTtcbihmdW5jdGlvbiAoUGF5bG9hZFR5cGUpIHtcbiAgICBQYXlsb2FkVHlwZVtQYXlsb2FkVHlwZVtcIlBDTVVcIl0gPSAwXSA9IFwiUENNVVwiO1xuICAgIFBheWxvYWRUeXBlW1BheWxvYWRUeXBlW1wiUENNQVwiXSA9IDhdID0gXCJQQ01BXCI7XG4gICAgUGF5bG9hZFR5cGVbUGF5bG9hZFR5cGVbXCJHNzIyXCJdID0gOV0gPSBcIkc3MjJcIjtcbiAgICBQYXlsb2FkVHlwZVtQYXlsb2FkVHlwZVtcIk9wdXNcIl0gPSAxMTFdID0gXCJPcHVzXCI7XG4gICAgUGF5bG9hZFR5cGVbUGF5bG9hZFR5cGVbXCJWUDhcIl0gPSA5Nl0gPSBcIlZQOFwiO1xuICAgIFBheWxvYWRUeXBlW1BheWxvYWRUeXBlW1wiVlA5XCJdID0gOThdID0gXCJWUDlcIjtcbiAgICBQYXlsb2FkVHlwZVtQYXlsb2FkVHlwZVtcIkgyNjRcIl0gPSAxMDJdID0gXCJIMjY0XCI7XG59KShQYXlsb2FkVHlwZSB8fCAoUGF5bG9hZFR5cGUgPSB7fSkpO1xuZnVuY3Rpb24gcnRwKG5hbWUpIHtcbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgY2FzZSAnSDI2NCc6XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogUGF5bG9hZFR5cGUuSDI2NCxcbiAgICAgICAgICAgICAgICAgICAgY29kZWM6ICdIMjY0JyxcbiAgICAgICAgICAgICAgICAgICAgcmF0ZTogOTAwMDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIGNhc2UgJ1ZQOCc6XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogUGF5bG9hZFR5cGUuVlA4LFxuICAgICAgICAgICAgICAgICAgICBjb2RlYzogJ1ZQOCcsXG4gICAgICAgICAgICAgICAgICAgIHJhdGU6IDkwMDAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICBjYXNlICdWUDknOlxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IFBheWxvYWRUeXBlLlZQOSxcbiAgICAgICAgICAgICAgICAgICAgY29kZWM6ICdWUDknLFxuICAgICAgICAgICAgICAgICAgICByYXRlOiA5MDAwMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5sZXQgV2ViUlRDVHJhbnNwb3J0ID0gLyoqIEBjbGFzcyAqLyAoKCkgPT4ge1xuICAgIGNsYXNzIFdlYlJUQ1RyYW5zcG9ydCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGNvZGVjKSB7XG4gICAgICAgICAgICBpZiAoIVdlYlJUQ1RyYW5zcG9ydC5jb25maWcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JUQ29uZmlndXJhdGlvbiBub3Qgc2V0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wYyA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihXZWJSVENUcmFuc3BvcnQuY29uZmlnKTtcbiAgICAgICAgICAgIHRoaXMucnRwID0gY29kZWMgPyBydHAoY29kZWMpIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgc2V0UlRDQ29uZmlndXJhdGlvbihjb25maWcpIHtcbiAgICAgICAgICAgIFdlYlJUQ1RyYW5zcG9ydC5jb25maWcgPSBjb25maWc7XG4gICAgICAgIH1cbiAgICAgICAgY2xvc2UoKSB7XG4gICAgICAgICAgICB0aGlzLnBjLm9udHJhY2sgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wYy5vbmljZWNhbmRpZGF0ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnBjLm9ubmVnb3RpYXRpb25uZWVkZWQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wYy5nZXRTZW5kZXJzKCkuZm9yRWFjaCgoc2VuZGVyKSA9PiB0aGlzLnBjLnJlbW92ZVRyYWNrKHNlbmRlcikpO1xuICAgICAgICAgICAgdGhpcy5wYy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGFkZFRyYWNrKHRyYWNrLCBzdHJlYW0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBjLmFkZFRyYWNrKHRyYWNrLCBzdHJlYW0pO1xuICAgICAgICB9XG4gICAgICAgIGFkZFRyYW5zY2VpdmVyKGtpbmQpIHtcbiAgICAgICAgICAgIHRoaXMucGMuYWRkVHJhbnNjZWl2ZXIoa2luZCwgeyBkaXJlY3Rpb246ICdyZWN2b25seScgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlVHJhY2soc2VuZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnBjLnJlbW92ZVRyYWNrKHNlbmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0U2VuZGVycygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBjLmdldFNlbmRlcnMoKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRMb2NhbERlc2NyaXB0aW9uKG9mZmVyKSB7XG4gICAgICAgICAgICB0aGlzLnBjLnNldExvY2FsRGVzY3JpcHRpb24ob2ZmZXIpO1xuICAgICAgICB9XG4gICAgICAgIHNldFJlbW90ZURlc2NyaXB0aW9uKGRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBjLnNldFJlbW90ZURlc2NyaXB0aW9uKGRlc2MpO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZU9mZmVyKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2ZmZXIgPSB5aWVsZCB0aGlzLnBjLmNyZWF0ZU9mZmVyKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5ydHApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZmZlcjtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXNzaW9uID0gc2RwX3RyYW5zZm9ybV8xLnBhcnNlKG9mZmVyLnNkcCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW9JZHggPSBzZXNzaW9uLm1lZGlhLmZpbmRJbmRleCgoeyB0eXBlLCBzc3JjR3JvdXBzIH0pID0+IHR5cGUgPT09ICd2aWRlbycgJiYgISFzc3JjR3JvdXBzKTtcbiAgICAgICAgICAgICAgICBpZiAodmlkZW9JZHggPT09IC0xKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2ZmZXI7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXlsb2FkIH0gPSB0aGlzLnJ0cFswXTtcbiAgICAgICAgICAgICAgICBzZXNzaW9uLm1lZGlhW3ZpZGVvSWR4XS5wYXlsb2FkcyA9IGAke3BheWxvYWR9YDsgLy8gKyBcIiA5N1wiO1xuICAgICAgICAgICAgICAgIHNlc3Npb24ubWVkaWFbdmlkZW9JZHhdLnJ0cCA9IHRoaXMucnRwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZtdHAgPSBbXG4gICAgICAgICAgICAgICAgLy8geyBcInBheWxvYWRcIjogOTcsIFwiY29uZmlnXCI6IFwiYXB0PVwiICsgcGF5bG9hZCB9XG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBzZXNzaW9uLm1lZGlhW3ZpZGVvSWR4XS5mbXRwID0gZm10cDtcbiAgICAgICAgICAgICAgICBjb25zdCBydGNwRkIgPSBbXG4gICAgICAgICAgICAgICAgICAgIHsgcGF5bG9hZCwgdHlwZTogJ3RyYW5zcG9ydC1jYycsIHN1YnR5cGU6IHVuZGVmaW5lZCB9LFxuICAgICAgICAgICAgICAgICAgICB7IHBheWxvYWQsIHR5cGU6ICdjY20nLCBzdWJ0eXBlOiAnZmlyJyB9LFxuICAgICAgICAgICAgICAgICAgICB7IHBheWxvYWQsIHR5cGU6ICduYWNrJywgc3VidHlwZTogdW5kZWZpbmVkIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgcGF5bG9hZCwgdHlwZTogJ25hY2snLCBzdWJ0eXBlOiAncGxpJyB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgc2Vzc2lvbi5tZWRpYVt2aWRlb0lkeF0ucnRjcEZiID0gcnRjcEZCO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNzcmNHcm91cCA9IHNlc3Npb24ubWVkaWFbdmlkZW9JZHhdLnNzcmNHcm91cHNbMF07XG4gICAgICAgICAgICAgICAgY29uc3Qgc3NyY3MgPSBzc3JjR3JvdXAuc3NyY3M7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3NyYyA9IHBhcnNlSW50KHNzcmNzLnNwbGl0KCcgJylbMF0sIDEwKTtcbiAgICAgICAgICAgICAgICBsb2cuZGVidWcoJ3NzcmNzID0+ICVzLCB2aWRlbyAlcycsIHNzcmNzLCBzc3JjKTtcbiAgICAgICAgICAgICAgICBzZXNzaW9uLm1lZGlhW3ZpZGVvSWR4XS5zc3JjR3JvdXBzID0gW107XG4gICAgICAgICAgICAgICAgc2Vzc2lvbi5tZWRpYVt2aWRlb0lkeF0uc3NyY3MgPSBzZXNzaW9uLm1lZGlhW3ZpZGVvSWR4XS5zc3Jjcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHNzcmMpO1xuICAgICAgICAgICAgICAgIG9mZmVyLnNkcCA9IHNkcF90cmFuc2Zvcm1fMS53cml0ZShzZXNzaW9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2ZmZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgbG9jYWxEZXNjcmlwdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgc2V0IG9uaWNlY2FuZGlkYXRlKGNiKSB7XG4gICAgICAgICAgICB0aGlzLnBjLm9uaWNlY2FuZGlkYXRlID0gY2I7XG4gICAgICAgIH1cbiAgICAgICAgc2V0IG9ubmVnb3RpYXRpb25uZWVkZWQoY2IpIHtcbiAgICAgICAgICAgIHRoaXMucGMub25uZWdvdGlhdGlvbm5lZWRlZCA9IGNiO1xuICAgICAgICB9XG4gICAgICAgIHNldCBvbnRyYWNrKGNiKSB7XG4gICAgICAgICAgICB0aGlzLnBjLm9udHJhY2sgPSBjYjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBXZWJSVENUcmFuc3BvcnQuY29uZmlnID0ge1xuICAgICAgICBpY2VTZXJ2ZXJzOiBbeyB1cmxzOiAnc3R1bjpzdHVuLnN0dW5wcm90b2NvbC5vcmc6MzQ3OCcgfV0sXG4gICAgfTtcbiAgICByZXR1cm4gV2ViUlRDVHJhbnNwb3J0O1xufSkoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFdlYlJUQ1RyYW5zcG9ydDtcbiIsIi8qXG4qIGxvZ2xldmVsIC0gaHR0cHM6Ly9naXRodWIuY29tL3BpbXRlcnJ5L2xvZ2xldmVsXG4qXG4qIENvcHlyaWdodCAoYykgMjAxMyBUaW0gUGVycnlcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuKi9cbihmdW5jdGlvbiAocm9vdCwgZGVmaW5pdGlvbikge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGRlZmluaXRpb24pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5sb2cgPSBkZWZpbml0aW9uKCk7XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBTbGlnaHRseSBkdWJpb3VzIHRyaWNrcyB0byBjdXQgZG93biBtaW5pbWl6ZWQgZmlsZSBzaXplXG4gICAgdmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xuICAgIHZhciB1bmRlZmluZWRUeXBlID0gXCJ1bmRlZmluZWRcIjtcbiAgICB2YXIgaXNJRSA9ICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWRUeXBlKSAmJiAodHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IgIT09IHVuZGVmaW5lZFR5cGUpICYmIChcbiAgICAgICAgL1RyaWRlbnRcXC98TVNJRSAvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgKTtcblxuICAgIHZhciBsb2dNZXRob2RzID0gW1xuICAgICAgICBcInRyYWNlXCIsXG4gICAgICAgIFwiZGVidWdcIixcbiAgICAgICAgXCJpbmZvXCIsXG4gICAgICAgIFwid2FyblwiLFxuICAgICAgICBcImVycm9yXCJcbiAgICBdO1xuXG4gICAgLy8gQ3Jvc3MtYnJvd3NlciBiaW5kIGVxdWl2YWxlbnQgdGhhdCB3b3JrcyBhdCBsZWFzdCBiYWNrIHRvIElFNlxuICAgIGZ1bmN0aW9uIGJpbmRNZXRob2Qob2JqLCBtZXRob2ROYW1lKSB7XG4gICAgICAgIHZhciBtZXRob2QgPSBvYmpbbWV0aG9kTmFtZV07XG4gICAgICAgIGlmICh0eXBlb2YgbWV0aG9kLmJpbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QuYmluZChvYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChtZXRob2QsIG9iaik7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gTWlzc2luZyBiaW5kIHNoaW0gb3IgSUU4ICsgTW9kZXJuaXpyLCBmYWxsYmFjayB0byB3cmFwcGluZ1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5hcHBseShtZXRob2QsIFtvYmosIGFyZ3VtZW50c10pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUcmFjZSgpIGRvZXNuJ3QgcHJpbnQgdGhlIG1lc3NhZ2UgaW4gSUUsIHNvIGZvciB0aGF0IGNhc2Ugd2UgbmVlZCB0byB3cmFwIGl0XG4gICAgZnVuY3Rpb24gdHJhY2VGb3JJRSgpIHtcbiAgICAgICAgaWYgKGNvbnNvbGUubG9nKSB7XG4gICAgICAgICAgICBpZiAoY29uc29sZS5sb2cuYXBwbHkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJbiBvbGQgSUUsIG5hdGl2ZSBjb25zb2xlIG1ldGhvZHMgdGhlbXNlbHZlcyBkb24ndCBoYXZlIGFwcGx5KCkuXG4gICAgICAgICAgICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmFwcGx5KGNvbnNvbGUubG9nLCBbY29uc29sZSwgYXJndW1lbnRzXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnNvbGUudHJhY2UpIGNvbnNvbGUudHJhY2UoKTtcbiAgICB9XG5cbiAgICAvLyBCdWlsZCB0aGUgYmVzdCBsb2dnaW5nIG1ldGhvZCBwb3NzaWJsZSBmb3IgdGhpcyBlbnZcbiAgICAvLyBXaGVyZXZlciBwb3NzaWJsZSB3ZSB3YW50IHRvIGJpbmQsIG5vdCB3cmFwLCB0byBwcmVzZXJ2ZSBzdGFjayB0cmFjZXNcbiAgICBmdW5jdGlvbiByZWFsTWV0aG9kKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICdkZWJ1ZycpIHtcbiAgICAgICAgICAgIG1ldGhvZE5hbWUgPSAnbG9nJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gdW5kZWZpbmVkVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBObyBtZXRob2QgcG9zc2libGUsIGZvciBub3cgLSBmaXhlZCBsYXRlciBieSBlbmFibGVMb2dnaW5nV2hlbkNvbnNvbGVBcnJpdmVzXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kTmFtZSA9PT0gJ3RyYWNlJyAmJiBpc0lFKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhY2VGb3JJRTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25zb2xlW21ldGhvZE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBiaW5kTWV0aG9kKGNvbnNvbGUsIG1ldGhvZE5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnNvbGUubG9nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBiaW5kTWV0aG9kKGNvbnNvbGUsICdsb2cnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBub29wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlc2UgcHJpdmF0ZSBmdW5jdGlvbnMgYWx3YXlzIG5lZWQgYHRoaXNgIHRvIGJlIHNldCBwcm9wZXJseVxuXG4gICAgZnVuY3Rpb24gcmVwbGFjZUxvZ2dpbmdNZXRob2RzKGxldmVsLCBsb2dnZXJOYW1lKSB7XG4gICAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9nTWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG1ldGhvZE5hbWUgPSBsb2dNZXRob2RzW2ldO1xuICAgICAgICAgICAgdGhpc1ttZXRob2ROYW1lXSA9IChpIDwgbGV2ZWwpID9cbiAgICAgICAgICAgICAgICBub29wIDpcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZEZhY3RvcnkobWV0aG9kTmFtZSwgbGV2ZWwsIGxvZ2dlck5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lIGxvZy5sb2cgYXMgYW4gYWxpYXMgZm9yIGxvZy5kZWJ1Z1xuICAgICAgICB0aGlzLmxvZyA9IHRoaXMuZGVidWc7XG4gICAgfVxuXG4gICAgLy8gSW4gb2xkIElFIHZlcnNpb25zLCB0aGUgY29uc29sZSBpc24ndCBwcmVzZW50IHVudGlsIHlvdSBmaXJzdCBvcGVuIGl0LlxuICAgIC8vIFdlIGJ1aWxkIHJlYWxNZXRob2QoKSByZXBsYWNlbWVudHMgaGVyZSB0aGF0IHJlZ2VuZXJhdGUgbG9nZ2luZyBtZXRob2RzXG4gICAgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1doZW5Db25zb2xlQXJyaXZlcyhtZXRob2ROYW1lLCBsZXZlbCwgbG9nZ2VyTmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSB1bmRlZmluZWRUeXBlKSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZUxvZ2dpbmdNZXRob2RzLmNhbGwodGhpcywgbGV2ZWwsIGxvZ2dlck5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXNbbWV0aG9kTmFtZV0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBCeSBkZWZhdWx0LCB3ZSB1c2UgY2xvc2VseSBib3VuZCByZWFsIG1ldGhvZHMgd2hlcmV2ZXIgcG9zc2libGUsIGFuZFxuICAgIC8vIG90aGVyd2lzZSB3ZSB3YWl0IGZvciBhIGNvbnNvbGUgdG8gYXBwZWFyLCBhbmQgdGhlbiB0cnkgYWdhaW4uXG4gICAgZnVuY3Rpb24gZGVmYXVsdE1ldGhvZEZhY3RvcnkobWV0aG9kTmFtZSwgbGV2ZWwsIGxvZ2dlck5hbWUpIHtcbiAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgICAgcmV0dXJuIHJlYWxNZXRob2QobWV0aG9kTmFtZSkgfHxcbiAgICAgICAgICAgICAgIGVuYWJsZUxvZ2dpbmdXaGVuQ29uc29sZUFycml2ZXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBMb2dnZXIobmFtZSwgZGVmYXVsdExldmVsLCBmYWN0b3J5KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgY3VycmVudExldmVsO1xuICAgICAgdmFyIHN0b3JhZ2VLZXkgPSBcImxvZ2xldmVsXCI7XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICBzdG9yYWdlS2V5ICs9IFwiOlwiICsgbmFtZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcGVyc2lzdExldmVsSWZQb3NzaWJsZShsZXZlbE51bSkge1xuICAgICAgICAgIHZhciBsZXZlbE5hbWUgPSAobG9nTWV0aG9kc1tsZXZlbE51bV0gfHwgJ3NpbGVudCcpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gdW5kZWZpbmVkVHlwZSkgcmV0dXJuO1xuXG4gICAgICAgICAgLy8gVXNlIGxvY2FsU3RvcmFnZSBpZiBhdmFpbGFibGVcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlW3N0b3JhZ2VLZXldID0gbGV2ZWxOYW1lO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuXG4gICAgICAgICAgLy8gVXNlIHNlc3Npb24gY29va2llIGFzIGZhbGxiYWNrXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmNvb2tpZSA9XG4gICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0b3JhZ2VLZXkpICsgXCI9XCIgKyBsZXZlbE5hbWUgKyBcIjtcIjtcbiAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldFBlcnNpc3RlZExldmVsKCkge1xuICAgICAgICAgIHZhciBzdG9yZWRMZXZlbDtcblxuICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSB1bmRlZmluZWRUeXBlKSByZXR1cm47XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBzdG9yZWRMZXZlbCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2Vbc3RvcmFnZUtleV07XG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuXG4gICAgICAgICAgLy8gRmFsbGJhY2sgdG8gY29va2llcyBpZiBsb2NhbCBzdG9yYWdlIGdpdmVzIHVzIG5vdGhpbmdcbiAgICAgICAgICBpZiAodHlwZW9mIHN0b3JlZExldmVsID09PSB1bmRlZmluZWRUeXBlKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB2YXIgY29va2llID0gd2luZG93LmRvY3VtZW50LmNvb2tpZTtcbiAgICAgICAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IGNvb2tpZS5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdG9yYWdlS2V5KSArIFwiPVwiKTtcbiAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdG9yZWRMZXZlbCA9IC9eKFteO10rKS8uZXhlYyhjb29raWUuc2xpY2UobG9jYXRpb24pKVsxXTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIHRoZSBzdG9yZWQgbGV2ZWwgaXMgbm90IHZhbGlkLCB0cmVhdCBpdCBhcyBpZiBub3RoaW5nIHdhcyBzdG9yZWQuXG4gICAgICAgICAgaWYgKHNlbGYubGV2ZWxzW3N0b3JlZExldmVsXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHN0b3JlZExldmVsID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdG9yZWRMZXZlbDtcbiAgICAgIH1cblxuICAgICAgLypcbiAgICAgICAqXG4gICAgICAgKiBQdWJsaWMgbG9nZ2VyIEFQSSAtIHNlZSBodHRwczovL2dpdGh1Yi5jb20vcGltdGVycnkvbG9nbGV2ZWwgZm9yIGRldGFpbHNcbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgc2VsZi5uYW1lID0gbmFtZTtcblxuICAgICAgc2VsZi5sZXZlbHMgPSB7IFwiVFJBQ0VcIjogMCwgXCJERUJVR1wiOiAxLCBcIklORk9cIjogMiwgXCJXQVJOXCI6IDMsXG4gICAgICAgICAgXCJFUlJPUlwiOiA0LCBcIlNJTEVOVFwiOiA1fTtcblxuICAgICAgc2VsZi5tZXRob2RGYWN0b3J5ID0gZmFjdG9yeSB8fCBkZWZhdWx0TWV0aG9kRmFjdG9yeTtcblxuICAgICAgc2VsZi5nZXRMZXZlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY3VycmVudExldmVsO1xuICAgICAgfTtcblxuICAgICAgc2VsZi5zZXRMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCwgcGVyc2lzdCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09IFwic3RyaW5nXCIgJiYgc2VsZi5sZXZlbHNbbGV2ZWwudG9VcHBlckNhc2UoKV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBsZXZlbCA9IHNlbGYubGV2ZWxzW2xldmVsLnRvVXBwZXJDYXNlKCldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGxldmVsID09PSBcIm51bWJlclwiICYmIGxldmVsID49IDAgJiYgbGV2ZWwgPD0gc2VsZi5sZXZlbHMuU0lMRU5UKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRMZXZlbCA9IGxldmVsO1xuICAgICAgICAgICAgICBpZiAocGVyc2lzdCAhPT0gZmFsc2UpIHsgIC8vIGRlZmF1bHRzIHRvIHRydWVcbiAgICAgICAgICAgICAgICAgIHBlcnNpc3RMZXZlbElmUG9zc2libGUobGV2ZWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlcGxhY2VMb2dnaW5nTWV0aG9kcy5jYWxsKHNlbGYsIGxldmVsLCBuYW1lKTtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSB1bmRlZmluZWRUeXBlICYmIGxldmVsIDwgc2VsZi5sZXZlbHMuU0lMRU5UKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyBjb25zb2xlIGF2YWlsYWJsZSBmb3IgbG9nZ2luZ1wiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhyb3cgXCJsb2cuc2V0TGV2ZWwoKSBjYWxsZWQgd2l0aCBpbnZhbGlkIGxldmVsOiBcIiArIGxldmVsO1xuICAgICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHNlbGYuc2V0RGVmYXVsdExldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gICAgICAgICAgaWYgKCFnZXRQZXJzaXN0ZWRMZXZlbCgpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0TGV2ZWwobGV2ZWwsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzZWxmLmVuYWJsZUFsbCA9IGZ1bmN0aW9uKHBlcnNpc3QpIHtcbiAgICAgICAgICBzZWxmLnNldExldmVsKHNlbGYubGV2ZWxzLlRSQUNFLCBwZXJzaXN0KTtcbiAgICAgIH07XG5cbiAgICAgIHNlbGYuZGlzYWJsZUFsbCA9IGZ1bmN0aW9uKHBlcnNpc3QpIHtcbiAgICAgICAgICBzZWxmLnNldExldmVsKHNlbGYubGV2ZWxzLlNJTEVOVCwgcGVyc2lzdCk7XG4gICAgICB9O1xuXG4gICAgICAvLyBJbml0aWFsaXplIHdpdGggdGhlIHJpZ2h0IGxldmVsXG4gICAgICB2YXIgaW5pdGlhbExldmVsID0gZ2V0UGVyc2lzdGVkTGV2ZWwoKTtcbiAgICAgIGlmIChpbml0aWFsTGV2ZWwgPT0gbnVsbCkge1xuICAgICAgICAgIGluaXRpYWxMZXZlbCA9IGRlZmF1bHRMZXZlbCA9PSBudWxsID8gXCJXQVJOXCIgOiBkZWZhdWx0TGV2ZWw7XG4gICAgICB9XG4gICAgICBzZWxmLnNldExldmVsKGluaXRpYWxMZXZlbCwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICpcbiAgICAgKiBUb3AtbGV2ZWwgQVBJXG4gICAgICpcbiAgICAgKi9cblxuICAgIHZhciBkZWZhdWx0TG9nZ2VyID0gbmV3IExvZ2dlcigpO1xuXG4gICAgdmFyIF9sb2dnZXJzQnlOYW1lID0ge307XG4gICAgZGVmYXVsdExvZ2dlci5nZXRMb2dnZXIgPSBmdW5jdGlvbiBnZXRMb2dnZXIobmFtZSkge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgbmFtZSA9PT0gXCJcIikge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBzdXBwbHkgYSBuYW1lIHdoZW4gY3JlYXRpbmcgYSBsb2dnZXIuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxvZ2dlciA9IF9sb2dnZXJzQnlOYW1lW25hbWVdO1xuICAgICAgICBpZiAoIWxvZ2dlcikge1xuICAgICAgICAgIGxvZ2dlciA9IF9sb2dnZXJzQnlOYW1lW25hbWVdID0gbmV3IExvZ2dlcihcbiAgICAgICAgICAgIG5hbWUsIGRlZmF1bHRMb2dnZXIuZ2V0TGV2ZWwoKSwgZGVmYXVsdExvZ2dlci5tZXRob2RGYWN0b3J5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9nZ2VyO1xuICAgIH07XG5cbiAgICAvLyBHcmFiIHRoZSBjdXJyZW50IGdsb2JhbCBsb2cgdmFyaWFibGUgaW4gY2FzZSBvZiBvdmVyd3JpdGVcbiAgICB2YXIgX2xvZyA9ICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWRUeXBlKSA/IHdpbmRvdy5sb2cgOiB1bmRlZmluZWQ7XG4gICAgZGVmYXVsdExvZ2dlci5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWRUeXBlICYmXG4gICAgICAgICAgICAgICB3aW5kb3cubG9nID09PSBkZWZhdWx0TG9nZ2VyKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9nID0gX2xvZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWZhdWx0TG9nZ2VyO1xuICAgIH07XG5cbiAgICBkZWZhdWx0TG9nZ2VyLmdldExvZ2dlcnMgPSBmdW5jdGlvbiBnZXRMb2dnZXJzKCkge1xuICAgICAgICByZXR1cm4gX2xvZ2dlcnNCeU5hbWU7XG4gICAgfTtcblxuICAgIHJldHVybiBkZWZhdWx0TG9nZ2VyO1xufSkpO1xuIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB3ID0gZCAqIDc7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbCkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKC0/KD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx3ZWVrcz98d3x5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnd2Vla3MnOlxuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ3cnOlxuICAgICAgcmV0dXJuIG4gKiB3O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBkLCAnZGF5Jyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgaCwgJ2hvdXInKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBtLCAnbWludXRlJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgcywgJ3NlY29uZCcpO1xuICB9XG4gIHJldHVybiBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbXNBYnMsIG4sIG5hbWUpIHtcbiAgdmFyIGlzUGx1cmFsID0gbXNBYnMgPj0gbiAqIDEuNTtcbiAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBuKSArICcgJyArIG5hbWUgKyAoaXNQbHVyYWwgPyAncycgOiAnJyk7XG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiY29uc3QgeyBFdmVudEVtaXR0ZXIgfSA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuY29uc3QgTG9nZ2VyID0gcmVxdWlyZSgnLi9Mb2dnZXInKTtcblxuY2xhc3MgRW5oYW5jZWRFdmVudEVtaXR0ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbntcblx0Y29uc3RydWN0b3IobG9nZ2VyKVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnNldE1heExpc3RlbmVycyhJbmZpbml0eSk7XG5cblx0XHR0aGlzLl9sb2dnZXIgPSBsb2dnZXIgfHwgbmV3IExvZ2dlcignRW5oYW5jZWRFdmVudEVtaXR0ZXInKTtcblx0fVxuXG5cdHNhZmVFbWl0KGV2ZW50LCAuLi5hcmdzKVxuXHR7XG5cdFx0dHJ5XG5cdFx0e1xuXHRcdFx0dGhpcy5lbWl0KGV2ZW50LCAuLi5hcmdzKTtcblx0XHR9XG5cdFx0Y2F0Y2ggKGVycm9yKVxuXHRcdHtcblx0XHRcdHRoaXMuX2xvZ2dlci5lcnJvcihcblx0XHRcdFx0J3NhZmVFbWl0KCkgfCBldmVudCBsaXN0ZW5lciB0aHJldyBhbiBlcnJvciBbZXZlbnQ6JXNdOiVvJyxcblx0XHRcdFx0ZXZlbnQsIGVycm9yKTtcblx0XHR9XG5cdH1cblxuXHRhc3luYyBzYWZlRW1pdEFzUHJvbWlzZShldmVudCwgLi4uYXJncylcblx0e1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PlxuXHRcdHtcblx0XHRcdHRoaXMuc2FmZUVtaXQoZXZlbnQsIC4uLmFyZ3MsIHJlc29sdmUsIHJlamVjdCk7XG5cdFx0fSk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmhhbmNlZEV2ZW50RW1pdHRlcjtcbiIsImNvbnN0IGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKTtcblxuY29uc3QgQVBQX05BTUUgPSAncHJvdG9vLWNsaWVudCc7XG5cbmNsYXNzIExvZ2dlclxue1xuXHRjb25zdHJ1Y3RvcihwcmVmaXgpXG5cdHtcblx0XHRpZiAocHJlZml4KVxuXHRcdHtcblx0XHRcdHRoaXMuX2RlYnVnID0gZGVidWcoYCR7QVBQX05BTUV9OiR7cHJlZml4fWApO1xuXHRcdFx0dGhpcy5fd2FybiA9IGRlYnVnKGAke0FQUF9OQU1FfTpXQVJOOiR7cHJlZml4fWApO1xuXHRcdFx0dGhpcy5fZXJyb3IgPSBkZWJ1ZyhgJHtBUFBfTkFNRX06RVJST1I6JHtwcmVmaXh9YCk7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHR0aGlzLl9kZWJ1ZyA9IGRlYnVnKEFQUF9OQU1FKTtcblx0XHRcdHRoaXMuX3dhcm4gPSBkZWJ1ZyhgJHtBUFBfTkFNRX06V0FSTmApO1xuXHRcdFx0dGhpcy5fZXJyb3IgPSBkZWJ1ZyhgJHtBUFBfTkFNRX06RVJST1JgKTtcblx0XHR9XG5cblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cdFx0dGhpcy5fZGVidWcubG9nID0gY29uc29sZS5pbmZvLmJpbmQoY29uc29sZSk7XG5cdFx0dGhpcy5fd2Fybi5sb2cgPSBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKTtcblx0XHR0aGlzLl9lcnJvci5sb2cgPSBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSk7XG5cdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cdH1cblxuXHRnZXQgZGVidWcoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2RlYnVnO1xuXHR9XG5cblx0Z2V0IHdhcm4oKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX3dhcm47XG5cdH1cblxuXHRnZXQgZXJyb3IoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2Vycm9yO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nZ2VyO1xuIiwiY29uc3QgTG9nZ2VyID0gcmVxdWlyZSgnLi9Mb2dnZXInKTtcbmNvbnN0IHsgZ2VuZXJhdGVSYW5kb21OdW1iZXIgfSA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcignTWVzc2FnZScpO1xuXG5jbGFzcyBNZXNzYWdlXG57XG5cdHN0YXRpYyBwYXJzZShyYXcpXG5cdHtcblx0XHRsZXQgb2JqZWN0O1xuXHRcdGNvbnN0IG1lc3NhZ2UgPSB7fTtcblxuXHRcdHRyeVxuXHRcdHtcblx0XHRcdG9iamVjdCA9IEpTT04ucGFyc2UocmF3KTtcblx0XHR9XG5cdFx0Y2F0Y2ggKGVycm9yKVxuXHRcdHtcblx0XHRcdGxvZ2dlci5lcnJvcigncGFyc2UoKSB8IGludmFsaWQgSlNPTjogJXMnLCBlcnJvcik7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShvYmplY3QpKVxuXHRcdHtcblx0XHRcdGxvZ2dlci5lcnJvcigncGFyc2UoKSB8IG5vdCBhbiBvYmplY3QnKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFJlcXVlc3QuXG5cdFx0aWYgKG9iamVjdC5yZXF1ZXN0KVxuXHRcdHtcblx0XHRcdG1lc3NhZ2UucmVxdWVzdCA9IHRydWU7XG5cblx0XHRcdGlmICh0eXBlb2Ygb2JqZWN0Lm1ldGhvZCAhPT0gJ3N0cmluZycpXG5cdFx0XHR7XG5cdFx0XHRcdGxvZ2dlci5lcnJvcigncGFyc2UoKSB8IG1pc3NpbmcvaW52YWxpZCBtZXRob2QgZmllbGQnKTtcblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2Ygb2JqZWN0LmlkICE9PSAnbnVtYmVyJylcblx0XHRcdHtcblx0XHRcdFx0bG9nZ2VyLmVycm9yKCdwYXJzZSgpIHwgbWlzc2luZy9pbnZhbGlkIGlkIGZpZWxkJyk7XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRtZXNzYWdlLmlkID0gb2JqZWN0LmlkO1xuXHRcdFx0bWVzc2FnZS5tZXRob2QgPSBvYmplY3QubWV0aG9kO1xuXHRcdFx0bWVzc2FnZS5kYXRhID0gb2JqZWN0LmRhdGEgfHwge307XG5cdFx0fVxuXHRcdC8vIFJlc3BvbnNlLlxuXHRcdGVsc2UgaWYgKG9iamVjdC5yZXNwb25zZSlcblx0XHR7XG5cdFx0XHRtZXNzYWdlLnJlc3BvbnNlID0gdHJ1ZTtcblxuXHRcdFx0aWYgKHR5cGVvZiBvYmplY3QuaWQgIT09ICdudW1iZXInKVxuXHRcdFx0e1xuXHRcdFx0XHRsb2dnZXIuZXJyb3IoJ3BhcnNlKCkgfCBtaXNzaW5nL2ludmFsaWQgaWQgZmllbGQnKTtcblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdG1lc3NhZ2UuaWQgPSBvYmplY3QuaWQ7XG5cblx0XHRcdC8vIFN1Y2Nlc3MuXG5cdFx0XHRpZiAob2JqZWN0Lm9rKVxuXHRcdFx0e1xuXHRcdFx0XHRtZXNzYWdlLm9rID0gdHJ1ZTtcblx0XHRcdFx0bWVzc2FnZS5kYXRhID0gb2JqZWN0LmRhdGEgfHwge307XG5cdFx0XHR9XG5cdFx0XHQvLyBFcnJvci5cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0bWVzc2FnZS5vayA9IGZhbHNlO1xuXHRcdFx0XHRtZXNzYWdlLmVycm9yQ29kZSA9IG9iamVjdC5lcnJvckNvZGU7XG5cdFx0XHRcdG1lc3NhZ2UuZXJyb3JSZWFzb24gPSBvYmplY3QuZXJyb3JSZWFzb247XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIE5vdGlmaWNhdGlvbi5cblx0XHRlbHNlIGlmIChvYmplY3Qubm90aWZpY2F0aW9uKVxuXHRcdHtcblx0XHRcdG1lc3NhZ2Uubm90aWZpY2F0aW9uID0gdHJ1ZTtcblxuXHRcdFx0aWYgKHR5cGVvZiBvYmplY3QubWV0aG9kICE9PSAnc3RyaW5nJylcblx0XHRcdHtcblx0XHRcdFx0bG9nZ2VyLmVycm9yKCdwYXJzZSgpIHwgbWlzc2luZy9pbnZhbGlkIG1ldGhvZCBmaWVsZCcpO1xuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bWVzc2FnZS5tZXRob2QgPSBvYmplY3QubWV0aG9kO1xuXHRcdFx0bWVzc2FnZS5kYXRhID0gb2JqZWN0LmRhdGEgfHwge307XG5cdFx0fVxuXHRcdC8vIEludmFsaWQuXG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdGxvZ2dlci5lcnJvcigncGFyc2UoKSB8IG1pc3NpbmcgcmVxdWVzdC9yZXNwb25zZSBmaWVsZCcpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlUmVxdWVzdChtZXRob2QsIGRhdGEpXG5cdHtcblx0XHRjb25zdCByZXF1ZXN0ID1cblx0XHR7XG5cdFx0XHRyZXF1ZXN0IDogdHJ1ZSxcblx0XHRcdGlkICAgICAgOiBnZW5lcmF0ZVJhbmRvbU51bWJlcigpLFxuXHRcdFx0bWV0aG9kICA6IG1ldGhvZCxcblx0XHRcdGRhdGEgICAgOiBkYXRhIHx8IHt9XG5cdFx0fTtcblxuXHRcdHJldHVybiByZXF1ZXN0O1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZVN1Y2Nlc3NSZXNwb25zZShyZXF1ZXN0LCBkYXRhKVxuXHR7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPVxuXHRcdHtcblx0XHRcdHJlc3BvbnNlIDogdHJ1ZSxcblx0XHRcdGlkICAgICAgIDogcmVxdWVzdC5pZCxcblx0XHRcdG9rICAgICAgIDogdHJ1ZSxcblx0XHRcdGRhdGEgICAgIDogZGF0YSB8fCB7fVxuXHRcdH07XG5cblx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlRXJyb3JSZXNwb25zZShyZXF1ZXN0LCBlcnJvckNvZGUsIGVycm9yUmVhc29uKVxuXHR7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPVxuXHRcdHtcblx0XHRcdHJlc3BvbnNlICAgIDogdHJ1ZSxcblx0XHRcdGlkICAgICAgICAgIDogcmVxdWVzdC5pZCxcblx0XHRcdG9rICAgICAgICAgIDogZmFsc2UsXG5cdFx0XHRlcnJvckNvZGUgICA6IGVycm9yQ29kZSxcblx0XHRcdGVycm9yUmVhc29uIDogZXJyb3JSZWFzb25cblx0XHR9O1xuXG5cdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZU5vdGlmaWNhdGlvbihtZXRob2QsIGRhdGEpXG5cdHtcblx0XHRjb25zdCBub3RpZmljYXRpb24gPVxuXHRcdHtcblx0XHRcdG5vdGlmaWNhdGlvbiA6IHRydWUsXG5cdFx0XHRtZXRob2QgICAgICAgOiBtZXRob2QsXG5cdFx0XHRkYXRhICAgICAgICAgOiBkYXRhIHx8IHt9XG5cdFx0fTtcblxuXHRcdHJldHVybiBub3RpZmljYXRpb247XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNZXNzYWdlO1xuIiwiY29uc3QgTG9nZ2VyID0gcmVxdWlyZSgnLi9Mb2dnZXInKTtcbmNvbnN0IEVuaGFuY2VkRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnLi9FbmhhbmNlZEV2ZW50RW1pdHRlcicpO1xuY29uc3QgTWVzc2FnZSA9IHJlcXVpcmUoJy4vTWVzc2FnZScpO1xuXG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdQZWVyJyk7XG5cbmNsYXNzIFBlZXIgZXh0ZW5kcyBFbmhhbmNlZEV2ZW50RW1pdHRlclxue1xuXHQvKipcblx0ICogQHBhcmFtIHtwcm90b28uVHJhbnNwb3J0fSB0cmFuc3BvcnRcblx0ICpcblx0ICogQGVtaXRzIG9wZW5cblx0ICogQGVtaXRzIHtjdXJyZW50QXR0ZW1wdDogTnVtYmVyfSBmYWlsZWRcblx0ICogQGVtaXRzIGRpc2Nvbm5lY3RlZFxuXHQgKiBAZW1pdHMgY2xvc2Vcblx0ICogQGVtaXRzIHtyZXF1ZXN0OiBwcm90b28uUmVxdWVzdCwgYWNjZXB0OiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbn0gcmVxdWVzdFxuXHQgKiBAZW1pdHMge25vdGlmaWNhdGlvbjogcHJvdG9vLk5vdGlmaWNhdGlvbn0gbm90aWZpY2F0aW9uXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih0cmFuc3BvcnQpXG5cdHtcblx0XHRzdXBlcihsb2dnZXIpO1xuXG5cdFx0bG9nZ2VyLmRlYnVnKCdjb25zdHJ1Y3RvcigpJyk7XG5cblx0XHQvLyBDbG9zZWQgZmxhZy5cblx0XHQvLyBAdHlwZSB7Qm9vbGVhbn1cblx0XHR0aGlzLl9jbG9zZWQgPSBmYWxzZTtcblxuXHRcdC8vIFRyYW5zcG9ydC5cblx0XHQvLyBAdHlwZSB7cHJvdG9vLlRyYW5zcG9ydH1cblx0XHR0aGlzLl90cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG5cblx0XHQvLyBDb25uZWN0ZWQgZmxhZy5cblx0XHQvLyBAdHlwZSB7Qm9vbGVhbn1cblx0XHR0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcblxuXHRcdC8vIEN1c3RvbSBkYXRhIG9iamVjdC5cblx0XHQvLyBAdHlwZSB7T2JqZWN0fVxuXHRcdHRoaXMuX2RhdGEgPSB7fTtcblxuXHRcdC8vIE1hcCBvZiBwZW5kaW5nIHNlbnQgcmVxdWVzdCBvYmplY3RzIGluZGV4ZWQgYnkgcmVxdWVzdCBpZC5cblx0XHQvLyBAdHlwZSB7TWFwPE51bWJlciwgT2JqZWN0Pn1cblx0XHR0aGlzLl9zZW50cyA9IG5ldyBNYXAoKTtcblxuXHRcdC8vIEhhbmRsZSB0cmFuc3BvcnQuXG5cdFx0dGhpcy5faGFuZGxlVHJhbnNwb3J0KCk7XG5cdH1cblxuXHQvKipcblx0ICogV2hldGhlciB0aGUgUGVlciBpcyBjbG9zZWQuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufVxuXHQgKi9cblx0Z2V0IGNsb3NlZCgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fY2xvc2VkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhlIFBlZXIgaXMgY29ubmVjdGVkLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn1cblx0ICovXG5cdGdldCBjb25uZWN0ZWQoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2Nvbm5lY3RlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBBcHAgY3VzdG9tIGRhdGEuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9XG5cdCAqL1xuXHRnZXQgZGF0YSgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbnZhbGlkIHNldHRlci5cblx0ICovXG5cdHNldCBkYXRhKGRhdGEpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblx0e1xuXHRcdHRocm93IG5ldyBFcnJvcignY2Fubm90IG92ZXJyaWRlIGRhdGEgb2JqZWN0Jyk7XG5cdH1cblxuXHQvKipcblx0ICogQ2xvc2UgdGhpcyBQZWVyIGFuZCBpdHMgVHJhbnNwb3J0LlxuXHQgKi9cblx0Y2xvc2UoKVxuXHR7XG5cdFx0aWYgKHRoaXMuX2Nsb3NlZClcblx0XHRcdHJldHVybjtcblxuXHRcdGxvZ2dlci5kZWJ1ZygnY2xvc2UoKScpO1xuXG5cdFx0dGhpcy5fY2xvc2VkID0gdHJ1ZTtcblx0XHR0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcblxuXHRcdC8vIENsb3NlIFRyYW5zcG9ydC5cblx0XHR0aGlzLl90cmFuc3BvcnQuY2xvc2UoKTtcblxuXHRcdC8vIENsb3NlIGV2ZXJ5IHBlbmRpbmcgc2VudC5cblx0XHRmb3IgKGNvbnN0IHNlbnQgb2YgdGhpcy5fc2VudHMudmFsdWVzKCkpXG5cdFx0e1xuXHRcdFx0c2VudC5jbG9zZSgpO1xuXHRcdH1cblxuXHRcdC8vIEVtaXQgJ2Nsb3NlJyBldmVudC5cblx0XHR0aGlzLnNhZmVFbWl0KCdjbG9zZScpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNlbmQgYSBwcm90b28gcmVxdWVzdCB0byB0aGUgc2VydmVyLXNpZGUgUm9vbS5cblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuXHQgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG5cdCAqXG5cdCAqIEBhc3luY1xuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzcG9uc2UgZGF0YSBPYmplY3QgaWYgYSBzdWNjZXNzIHJlc3BvbnNlIGlzIHJlY2VpdmVkLlxuXHQgKi9cblx0YXN5bmMgcmVxdWVzdChtZXRob2QsIGRhdGEgPSB1bmRlZmluZWQpXG5cdHtcblx0XHRjb25zdCByZXF1ZXN0ID0gTWVzc2FnZS5jcmVhdGVSZXF1ZXN0KG1ldGhvZCwgZGF0YSk7XG5cblx0XHR0aGlzLl9sb2dnZXIuZGVidWcoJ3JlcXVlc3QoKSBbbWV0aG9kOiVzLCBpZDolc10nLCBtZXRob2QsIHJlcXVlc3QuaWQpO1xuXG5cdFx0Ly8gVGhpcyBtYXkgdGhyb3cuXG5cdFx0YXdhaXQgdGhpcy5fdHJhbnNwb3J0LnNlbmQocmVxdWVzdCk7XG5cblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHBSZXNvbHZlLCBwUmVqZWN0KSA9PlxuXHRcdHtcblx0XHRcdGNvbnN0IHRpbWVvdXQgPSAxNTAwICogKDE1ICsgKDAuMSAqIHRoaXMuX3NlbnRzLnNpemUpKTtcblx0XHRcdGNvbnN0IHNlbnQgPVxuXHRcdFx0e1xuXHRcdFx0XHRpZCAgICAgIDogcmVxdWVzdC5pZCxcblx0XHRcdFx0bWV0aG9kICA6IHJlcXVlc3QubWV0aG9kLFxuXHRcdFx0XHRyZXNvbHZlIDogKGRhdGEyKSA9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLl9zZW50cy5kZWxldGUocmVxdWVzdC5pZCkpXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHRjbGVhclRpbWVvdXQoc2VudC50aW1lcik7XG5cdFx0XHRcdFx0cFJlc29sdmUoZGF0YTIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRyZWplY3QgOiAoZXJyb3IpID0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAoIXRoaXMuX3NlbnRzLmRlbGV0ZShyZXF1ZXN0LmlkKSlcblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdGNsZWFyVGltZW91dChzZW50LnRpbWVyKTtcblx0XHRcdFx0XHRwUmVqZWN0KGVycm9yKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dGltZXIgOiBzZXRUaW1lb3V0KCgpID0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAoIXRoaXMuX3NlbnRzLmRlbGV0ZShyZXF1ZXN0LmlkKSlcblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdHBSZWplY3QobmV3IEVycm9yKCdyZXF1ZXN0IHRpbWVvdXQnKSk7XG5cdFx0XHRcdH0sIHRpbWVvdXQpLFxuXHRcdFx0XHRjbG9zZSA6ICgpID0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQoc2VudC50aW1lcik7XG5cdFx0XHRcdFx0cFJlamVjdChuZXcgRXJyb3IoJ3BlZXIgY2xvc2VkJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBBZGQgc2VudCBzdHVmZiB0byB0aGUgbWFwLlxuXHRcdFx0dGhpcy5fc2VudHMuc2V0KHJlcXVlc3QuaWQsIHNlbnQpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNlbmQgYSBwcm90b28gbm90aWZpY2F0aW9uIHRvIHRoZSBzZXJ2ZXItc2lkZSBSb29tLlxuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YV1cblx0ICpcblx0ICogQGFzeW5jXG5cdCAqL1xuXHRhc3luYyBub3RpZnkobWV0aG9kLCBkYXRhID0gdW5kZWZpbmVkKVxuXHR7XG5cdFx0Y29uc3Qgbm90aWZpY2F0aW9uID0gTWVzc2FnZS5jcmVhdGVOb3RpZmljYXRpb24obWV0aG9kLCBkYXRhKTtcblxuXHRcdHRoaXMuX2xvZ2dlci5kZWJ1Zygnbm90aWZ5KCkgW21ldGhvZDolc10nLCBtZXRob2QpO1xuXG5cdFx0Ly8gVGhpcyBtYXkgdGhyb3cuXG5cdFx0YXdhaXQgdGhpcy5fdHJhbnNwb3J0LnNlbmQobm90aWZpY2F0aW9uKTtcblx0fVxuXG5cdF9oYW5kbGVUcmFuc3BvcnQoKVxuXHR7XG5cdFx0aWYgKHRoaXMuX3RyYW5zcG9ydC5jbG9zZWQpXG5cdFx0e1xuXHRcdFx0dGhpcy5fY2xvc2VkID0gdHJ1ZTtcblxuXHRcdFx0c2V0VGltZW91dCgoKSA9PlxuXHRcdFx0e1xuXHRcdFx0XHRpZiAodGhpcy5fY2xvc2VkKVxuXHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHR0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcblxuXHRcdFx0XHR0aGlzLnNhZmVFbWl0KCdjbG9zZScpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl90cmFuc3BvcnQub24oJ29wZW4nLCAoKSA9PlxuXHRcdHtcblx0XHRcdGlmICh0aGlzLl9jbG9zZWQpXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0bG9nZ2VyLmRlYnVnKCdlbWl0IFwib3BlblwiJyk7XG5cblx0XHRcdHRoaXMuX2Nvbm5lY3RlZCA9IHRydWU7XG5cblx0XHRcdHRoaXMuc2FmZUVtaXQoJ29wZW4nKTtcblx0XHR9KTtcblxuXHRcdHRoaXMuX3RyYW5zcG9ydC5vbignZGlzY29ubmVjdGVkJywgKCkgPT5cblx0XHR7XG5cdFx0XHRpZiAodGhpcy5fY2xvc2VkKVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdGxvZ2dlci5kZWJ1ZygnZW1pdCBcImRpc2Nvbm5lY3RlZFwiJyk7XG5cblx0XHRcdHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuXG5cdFx0XHR0aGlzLnNhZmVFbWl0KCdkaXNjb25uZWN0ZWQnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMuX3RyYW5zcG9ydC5vbignZmFpbGVkJywgKGN1cnJlbnRBdHRlbXB0KSA9PlxuXHRcdHtcblx0XHRcdGlmICh0aGlzLl9jbG9zZWQpXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0bG9nZ2VyLmRlYnVnKCdlbWl0IFwiZmFpbGVkXCIgW2N1cnJlbnRBdHRlbXB0OiVzXScsIGN1cnJlbnRBdHRlbXB0KTtcblxuXHRcdFx0dGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG5cblx0XHRcdHRoaXMuc2FmZUVtaXQoJ2ZhaWxlZCcsIGN1cnJlbnRBdHRlbXB0KTtcblx0XHR9KTtcblxuXHRcdHRoaXMuX3RyYW5zcG9ydC5vbignY2xvc2UnLCAoKSA9PlxuXHRcdHtcblx0XHRcdGlmICh0aGlzLl9jbG9zZWQpXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0dGhpcy5fY2xvc2VkID0gdHJ1ZTtcblxuXHRcdFx0bG9nZ2VyLmRlYnVnKCdlbWl0IFwiY2xvc2VcIicpO1xuXG5cdFx0XHR0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcblxuXHRcdFx0dGhpcy5zYWZlRW1pdCgnY2xvc2UnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMuX3RyYW5zcG9ydC5vbignbWVzc2FnZScsIChtZXNzYWdlKSA9PlxuXHRcdHtcblx0XHRcdGlmIChtZXNzYWdlLnJlcXVlc3QpXG5cdFx0XHRcdHRoaXMuX2hhbmRsZVJlcXVlc3QobWVzc2FnZSk7XG5cdFx0XHRlbHNlIGlmIChtZXNzYWdlLnJlc3BvbnNlKVxuXHRcdFx0XHR0aGlzLl9oYW5kbGVSZXNwb25zZShtZXNzYWdlKTtcblx0XHRcdGVsc2UgaWYgKG1lc3NhZ2Uubm90aWZpY2F0aW9uKVxuXHRcdFx0XHR0aGlzLl9oYW5kbGVOb3RpZmljYXRpb24obWVzc2FnZSk7XG5cdFx0fSk7XG5cdH1cblxuXHRfaGFuZGxlUmVxdWVzdChyZXF1ZXN0KVxuXHR7XG5cdFx0dHJ5XG5cdFx0e1xuXHRcdFx0dGhpcy5lbWl0KCdyZXF1ZXN0Jyxcblx0XHRcdFx0Ly8gUmVxdWVzdC5cblx0XHRcdFx0cmVxdWVzdCxcblx0XHRcdFx0Ly8gYWNjZXB0KCkgZnVuY3Rpb24uXG5cdFx0XHRcdChkYXRhKSA9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBNZXNzYWdlLmNyZWF0ZVN1Y2Nlc3NSZXNwb25zZShyZXF1ZXN0LCBkYXRhKTtcblxuXHRcdFx0XHRcdHRoaXMuX3RyYW5zcG9ydC5zZW5kKHJlc3BvbnNlKVxuXHRcdFx0XHRcdFx0LmNhdGNoKCgpID0+IHt9KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Ly8gcmVqZWN0KCkgZnVuY3Rpb24uXG5cdFx0XHRcdChlcnJvckNvZGUsIGVycm9yUmVhc29uKSA9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKGVycm9yQ29kZSBpbnN0YW5jZW9mIEVycm9yKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGVycm9yQ29kZSA9IDUwMDtcblx0XHRcdFx0XHRcdGVycm9yUmVhc29uID0gU3RyaW5nKGVycm9yQ29kZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBlcnJvckNvZGUgPT09ICdudW1iZXInICYmIGVycm9yUmVhc29uIGluc3RhbmNlb2YgRXJyb3IpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZXJyb3JSZWFzb24gPSBTdHJpbmcoZXJyb3JSZWFzb24pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID1cblx0XHRcdFx0XHRcdE1lc3NhZ2UuY3JlYXRlRXJyb3JSZXNwb25zZShyZXF1ZXN0LCBlcnJvckNvZGUsIGVycm9yUmVhc29uKTtcblxuXHRcdFx0XHRcdHRoaXMuX3RyYW5zcG9ydC5zZW5kKHJlc3BvbnNlKVxuXHRcdFx0XHRcdFx0LmNhdGNoKCgpID0+IHt9KTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHRcdGNhdGNoIChlcnJvcilcblx0XHR7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IE1lc3NhZ2UuY3JlYXRlRXJyb3JSZXNwb25zZShyZXF1ZXN0LCA1MDAsIFN0cmluZyhlcnJvcikpO1xuXG5cdFx0XHR0aGlzLl90cmFuc3BvcnQuc2VuZChyZXNwb25zZSlcblx0XHRcdFx0LmNhdGNoKCgpID0+IHt9KTtcblx0XHR9XG5cdH1cblxuXHRfaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpXG5cdHtcblx0XHRjb25zdCBzZW50ID0gdGhpcy5fc2VudHMuZ2V0KHJlc3BvbnNlLmlkKTtcblxuXHRcdGlmICghc2VudClcblx0XHR7XG5cdFx0XHRsb2dnZXIuZXJyb3IoXG5cdFx0XHRcdCdyZWNlaXZlZCByZXNwb25zZSBkb2VzIG5vdCBtYXRjaCBhbnkgc2VudCByZXF1ZXN0IFtpZDolc10nLCByZXNwb25zZS5pZCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAocmVzcG9uc2Uub2spXG5cdFx0e1xuXHRcdFx0c2VudC5yZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2UuZXJyb3JSZWFzb24pO1xuXG5cdFx0XHRlcnJvci5jb2RlID0gcmVzcG9uc2UuZXJyb3JDb2RlO1xuXHRcdFx0c2VudC5yZWplY3QoZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdF9oYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uKVxuXHR7XG5cdFx0dGhpcy5zYWZlRW1pdCgnbm90aWZpY2F0aW9uJywgbm90aWZpY2F0aW9uKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBlZXI7XG4iLCJjb25zdCB7IHZlcnNpb24gfSA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpO1xuY29uc3QgUGVlciA9IHJlcXVpcmUoJy4vUGVlcicpO1xuY29uc3QgV2ViU29ja2V0VHJhbnNwb3J0ID0gcmVxdWlyZSgnLi90cmFuc3BvcnRzL1dlYlNvY2tldFRyYW5zcG9ydCcpO1xuXG4vKipcbiAqIEV4cG9zZSBtZWRpYXNvdXAtY2xpZW50IHZlcnNpb24uXG4gKlxuICogQHR5cGUge1N0cmluZ31cbiAqL1xuZXhwb3J0cy52ZXJzaW9uID0gdmVyc2lvbjtcblxuLyoqXG4gKiBFeHBvc2UgUGVlciBjbGFzcy5cbiAqXG4gKiBAdHlwZSB7Q2xhc3N9XG4gKi9cbmV4cG9ydHMuUGVlciA9IFBlZXI7XG5cbi8qKlxuICogRXhwb3NlIFdlYlNvY2tldFRyYW5zcG9ydCBjbGFzcy5cbiAqXG4gKiBAdHlwZSB7Q2xhc3N9XG4gKi9cbmV4cG9ydHMuV2ViU29ja2V0VHJhbnNwb3J0ID0gV2ViU29ja2V0VHJhbnNwb3J0O1xuIiwiY29uc3QgVzNDV2ViU29ja2V0ID0gcmVxdWlyZSgnd2Vic29ja2V0JykudzNjd2Vic29ja2V0O1xuY29uc3QgcmV0cnkgPSByZXF1aXJlKCdyZXRyeScpO1xuY29uc3QgTG9nZ2VyID0gcmVxdWlyZSgnLi4vTG9nZ2VyJyk7XG5jb25zdCBFbmhhbmNlZEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJy4uL0VuaGFuY2VkRXZlbnRFbWl0dGVyJyk7XG5jb25zdCBNZXNzYWdlID0gcmVxdWlyZSgnLi4vTWVzc2FnZScpO1xuXG5jb25zdCBXU19TVUJQUk9UT0NPTCA9ICdwcm90b28nO1xuY29uc3QgREVGQVVMVF9SRVRSWV9PUFRJT05TID1cbntcblx0cmV0cmllcyAgICA6IDEwLFxuXHRmYWN0b3IgICAgIDogMixcblx0bWluVGltZW91dCA6IDEgKiAxMDAwLFxuXHRtYXhUaW1lb3V0IDogOCAqIDEwMDBcbn07XG5cbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoJ1dlYlNvY2tldFRyYW5zcG9ydCcpO1xuXG5jbGFzcyBXZWJTb2NrZXRUcmFuc3BvcnQgZXh0ZW5kcyBFbmhhbmNlZEV2ZW50RW1pdHRlclxue1xuXHQvKipcblx0ICogQHBhcmFtIHtTdHJpbmd9IHVybCAtIFdlYlNvY2tldCBVUkwuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25zIGZvciBXZWJTb2NrZXQtTm9kZS5XM0NXZWJTb2NrZXQgYW5kIHJldHJ5LlxuXHQgKi9cblx0Y29uc3RydWN0b3IodXJsLCBvcHRpb25zKVxuXHR7XG5cdFx0c3VwZXIobG9nZ2VyKTtcblxuXHRcdGxvZ2dlci5kZWJ1ZygnY29uc3RydWN0b3IoKSBbdXJsOiVzLCBvcHRpb25zOiVvXScsIHVybCwgb3B0aW9ucyk7XG5cblx0XHQvLyBDbG9zZWQgZmxhZy5cblx0XHQvLyBAdHlwZSB7Qm9vbGVhbn1cblx0XHR0aGlzLl9jbG9zZWQgPSBmYWxzZTtcblxuXHRcdC8vIFdlYlNvY2tldCBVUkwuXG5cdFx0Ly8gQHR5cGUge1N0cmluZ31cblx0XHR0aGlzLl91cmwgPSB1cmw7XG5cblx0XHQvLyBPcHRpb25zLlxuXHRcdC8vIEB0eXBlIHtPYmplY3R9XG5cdFx0dGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0XHQvLyBXZWJTb2NrZXQgaW5zdGFuY2UuXG5cdFx0Ly8gQHR5cGUge1dlYlNvY2tldH1cblx0XHR0aGlzLl93cyA9IG51bGw7XG5cblx0XHQvLyBSdW4gdGhlIFdlYlNvY2tldC5cblx0XHR0aGlzLl9ydW5XZWJTb2NrZXQoKTtcblx0fVxuXG5cdGdldCBjbG9zZWQoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2Nsb3NlZDtcblx0fVxuXG5cdGNsb3NlKClcblx0e1xuXHRcdGlmICh0aGlzLl9jbG9zZWQpXG5cdFx0XHRyZXR1cm47XG5cblx0XHRsb2dnZXIuZGVidWcoJ2Nsb3NlKCknKTtcblxuXHRcdC8vIERvbid0IHdhaXQgZm9yIHRoZSBXZWJTb2NrZXQgJ2Nsb3NlJyBldmVudCwgZG8gaXQgbm93LlxuXHRcdHRoaXMuX2Nsb3NlZCA9IHRydWU7XG5cdFx0dGhpcy5zYWZlRW1pdCgnY2xvc2UnKTtcblxuXHRcdHRyeVxuXHRcdHtcblx0XHRcdHRoaXMuX3dzLm9ub3BlbiA9IG51bGw7XG5cdFx0XHR0aGlzLl93cy5vbmNsb3NlID0gbnVsbDtcblx0XHRcdHRoaXMuX3dzLm9uZXJyb3IgPSBudWxsO1xuXHRcdFx0dGhpcy5fd3Mub25tZXNzYWdlID0gbnVsbDtcblx0XHRcdHRoaXMuX3dzLmNsb3NlKCk7XG5cdFx0fVxuXHRcdGNhdGNoIChlcnJvcilcblx0XHR7XG5cdFx0XHRsb2dnZXIuZXJyb3IoJ2Nsb3NlKCkgfCBlcnJvciBjbG9zaW5nIHRoZSBXZWJTb2NrZXQ6ICVvJywgZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIHNlbmQobWVzc2FnZSlcblx0e1xuXHRcdGlmICh0aGlzLl9jbG9zZWQpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ3RyYW5zcG9ydCBjbG9zZWQnKTtcblxuXHRcdHRyeVxuXHRcdHtcblx0XHRcdHRoaXMuX3dzLnNlbmQoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuXHRcdH1cblx0XHRjYXRjaCAoZXJyb3IpXG5cdFx0e1xuXHRcdFx0bG9nZ2VyLndhcm4oJ3NlbmQoKSBmYWlsZWQ6JW8nLCBlcnJvcik7XG5cblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblx0fVxuXG5cdF9ydW5XZWJTb2NrZXQoKVxuXHR7XG5cdFx0Y29uc3Qgb3BlcmF0aW9uID1cblx0XHRcdHJldHJ5Lm9wZXJhdGlvbih0aGlzLl9vcHRpb25zLnJldHJ5IHx8IERFRkFVTFRfUkVUUllfT1BUSU9OUyk7XG5cblx0XHRsZXQgd2FzQ29ubmVjdGVkID0gZmFsc2U7XG5cblx0XHRvcGVyYXRpb24uYXR0ZW1wdCgoY3VycmVudEF0dGVtcHQpID0+XG5cdFx0e1xuXHRcdFx0aWYgKHRoaXMuX2Nsb3NlZClcblx0XHRcdHtcblx0XHRcdFx0b3BlcmF0aW9uLnN0b3AoKTtcblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGxvZ2dlci5kZWJ1ZygnX3J1bldlYlNvY2tldCgpIFtjdXJyZW50QXR0ZW1wdDolc10nLCBjdXJyZW50QXR0ZW1wdCk7XG5cblx0XHRcdHRoaXMuX3dzID0gbmV3IFczQ1dlYlNvY2tldChcblx0XHRcdFx0dGhpcy5fdXJsLFxuXHRcdFx0XHRXU19TVUJQUk9UT0NPTCxcblx0XHRcdFx0dGhpcy5fb3B0aW9ucy5vcmlnaW4sXG5cdFx0XHRcdHRoaXMuX29wdGlvbnMuaGVhZGVycyxcblx0XHRcdFx0dGhpcy5fb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucyxcblx0XHRcdFx0dGhpcy5fb3B0aW9ucy5jbGllbnRDb25maWcpO1xuXG5cdFx0XHR0aGlzLl93cy5vbm9wZW4gPSAoKSA9PlxuXHRcdFx0e1xuXHRcdFx0XHRpZiAodGhpcy5fY2xvc2VkKVxuXHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHR3YXNDb25uZWN0ZWQgPSB0cnVlO1xuXG5cdFx0XHRcdC8vIEVtaXQgJ29wZW4nIGV2ZW50LlxuXHRcdFx0XHR0aGlzLnNhZmVFbWl0KCdvcGVuJyk7XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLl93cy5vbmNsb3NlID0gKGV2ZW50KSA9PlxuXHRcdFx0e1xuXHRcdFx0XHRpZiAodGhpcy5fY2xvc2VkKVxuXHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRsb2dnZXIud2Fybihcblx0XHRcdFx0XHQnV2ViU29ja2V0IFwiY2xvc2VcIiBldmVudCBbd2FzQ2xlYW46JXMsIGNvZGU6JXMsIHJlYXNvbjpcIiVzXCJdJyxcblx0XHRcdFx0XHRldmVudC53YXNDbGVhbiwgZXZlbnQuY29kZSwgZXZlbnQucmVhc29uKTtcblxuXHRcdFx0XHQvLyBEb24ndCByZXRyeSBpZiBjb2RlIGlzIDQwMDAgKGNsb3NlZCBieSB0aGUgc2VydmVyKS5cblx0XHRcdFx0aWYgKGV2ZW50LmNvZGUgIT09IDQwMDApXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvLyBJZiBpdCB3YXMgbm90IGNvbm5lY3RlZCwgdHJ5IGFnYWluLlxuXHRcdFx0XHRcdGlmICghd2FzQ29ubmVjdGVkKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc2FmZUVtaXQoJ2ZhaWxlZCcsIGN1cnJlbnRBdHRlbXB0KTtcblxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuX2Nsb3NlZClcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0XHRpZiAob3BlcmF0aW9uLnJldHJ5KHRydWUpKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIElmIGl0IHdhcyBjb25uZWN0ZWQsIHN0YXJ0IGZyb20gc2NyYXRjaC5cblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0b3BlcmF0aW9uLnN0b3AoKTtcblxuXHRcdFx0XHRcdFx0dGhpcy5zYWZlRW1pdCgnZGlzY29ubmVjdGVkJyk7XG5cblx0XHRcdFx0XHRcdGlmICh0aGlzLl9jbG9zZWQpXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdFx0dGhpcy5fcnVuV2ViU29ja2V0KCk7XG5cblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl9jbG9zZWQgPSB0cnVlO1xuXG5cdFx0XHRcdC8vIEVtaXQgJ2Nsb3NlJyBldmVudC5cblx0XHRcdFx0dGhpcy5zYWZlRW1pdCgnY2xvc2UnKTtcblx0XHRcdH07XG5cblx0XHRcdHRoaXMuX3dzLm9uZXJyb3IgPSAoKSA9PlxuXHRcdFx0e1xuXHRcdFx0XHRpZiAodGhpcy5fY2xvc2VkKVxuXHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRsb2dnZXIuZXJyb3IoJ1dlYlNvY2tldCBcImVycm9yXCIgZXZlbnQnKTtcblx0XHRcdH07XG5cblx0XHRcdHRoaXMuX3dzLm9ubWVzc2FnZSA9IChldmVudCkgPT5cblx0XHRcdHtcblx0XHRcdFx0aWYgKHRoaXMuX2Nsb3NlZClcblx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0Y29uc3QgbWVzc2FnZSA9IE1lc3NhZ2UucGFyc2UoZXZlbnQuZGF0YSk7XG5cblx0XHRcdFx0aWYgKCFtZXNzYWdlKVxuXHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRpZiAodGhpcy5saXN0ZW5lckNvdW50KCdtZXNzYWdlJykgPT09IDApXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsb2dnZXIuZXJyb3IoXG5cdFx0XHRcdFx0XHQnbm8gbGlzdGVuZXJzIGZvciBXZWJTb2NrZXQgXCJtZXNzYWdlXCIgZXZlbnQsIGlnbm9yaW5nIHJlY2VpdmVkIG1lc3NhZ2UnKTtcblxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEVtaXQgJ21lc3NhZ2UnIGV2ZW50LlxuXHRcdFx0XHR0aGlzLnNhZmVFbWl0KCdtZXNzYWdlJywgbWVzc2FnZSk7XG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViU29ja2V0VHJhbnNwb3J0O1xuIiwiLyoqXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gcG9zaXRpdmUgaW50ZWdlci5cbiAqXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5leHBvcnRzLmdlbmVyYXRlUmFuZG9tTnVtYmVyID0gZnVuY3Rpb24oKVxue1xuXHRyZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDApO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvcmV0cnknKTsiLCJ2YXIgUmV0cnlPcGVyYXRpb24gPSByZXF1aXJlKCcuL3JldHJ5X29wZXJhdGlvbicpO1xuXG5leHBvcnRzLm9wZXJhdGlvbiA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgdmFyIHRpbWVvdXRzID0gZXhwb3J0cy50aW1lb3V0cyhvcHRpb25zKTtcbiAgcmV0dXJuIG5ldyBSZXRyeU9wZXJhdGlvbih0aW1lb3V0cywge1xuICAgICAgZm9yZXZlcjogb3B0aW9ucyAmJiBvcHRpb25zLmZvcmV2ZXIsXG4gICAgICB1bnJlZjogb3B0aW9ucyAmJiBvcHRpb25zLnVucmVmLFxuICAgICAgbWF4UmV0cnlUaW1lOiBvcHRpb25zICYmIG9wdGlvbnMubWF4UmV0cnlUaW1lXG4gIH0pO1xufTtcblxuZXhwb3J0cy50aW1lb3V0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiBbXS5jb25jYXQob3B0aW9ucyk7XG4gIH1cblxuICB2YXIgb3B0cyA9IHtcbiAgICByZXRyaWVzOiAxMCxcbiAgICBmYWN0b3I6IDIsXG4gICAgbWluVGltZW91dDogMSAqIDEwMDAsXG4gICAgbWF4VGltZW91dDogSW5maW5pdHksXG4gICAgcmFuZG9taXplOiBmYWxzZVxuICB9O1xuICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucykge1xuICAgIG9wdHNba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgfVxuXG4gIGlmIChvcHRzLm1pblRpbWVvdXQgPiBvcHRzLm1heFRpbWVvdXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21pblRpbWVvdXQgaXMgZ3JlYXRlciB0aGFuIG1heFRpbWVvdXQnKTtcbiAgfVxuXG4gIHZhciB0aW1lb3V0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdHMucmV0cmllczsgaSsrKSB7XG4gICAgdGltZW91dHMucHVzaCh0aGlzLmNyZWF0ZVRpbWVvdXQoaSwgb3B0cykpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5mb3JldmVyICYmICF0aW1lb3V0cy5sZW5ndGgpIHtcbiAgICB0aW1lb3V0cy5wdXNoKHRoaXMuY3JlYXRlVGltZW91dChpLCBvcHRzKSk7XG4gIH1cblxuICAvLyBzb3J0IHRoZSBhcnJheSBudW1lcmljYWxseSBhc2NlbmRpbmdcbiAgdGltZW91dHMuc29ydChmdW5jdGlvbihhLGIpIHtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pO1xuXG4gIHJldHVybiB0aW1lb3V0cztcbn07XG5cbmV4cG9ydHMuY3JlYXRlVGltZW91dCA9IGZ1bmN0aW9uKGF0dGVtcHQsIG9wdHMpIHtcbiAgdmFyIHJhbmRvbSA9IChvcHRzLnJhbmRvbWl6ZSlcbiAgICA/IChNYXRoLnJhbmRvbSgpICsgMSlcbiAgICA6IDE7XG5cbiAgdmFyIHRpbWVvdXQgPSBNYXRoLnJvdW5kKHJhbmRvbSAqIG9wdHMubWluVGltZW91dCAqIE1hdGgucG93KG9wdHMuZmFjdG9yLCBhdHRlbXB0KSk7XG4gIHRpbWVvdXQgPSBNYXRoLm1pbih0aW1lb3V0LCBvcHRzLm1heFRpbWVvdXQpO1xuXG4gIHJldHVybiB0aW1lb3V0O1xufTtcblxuZXhwb3J0cy53cmFwID0gZnVuY3Rpb24ob2JqLCBvcHRpb25zLCBtZXRob2RzKSB7XG4gIGlmIChvcHRpb25zIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBtZXRob2RzID0gb3B0aW9ucztcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuXG4gIGlmICghbWV0aG9kcykge1xuICAgIG1ldGhvZHMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG1ldGhvZHMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBtZXRob2QgICA9IG1ldGhvZHNbaV07XG4gICAgdmFyIG9yaWdpbmFsID0gb2JqW21ldGhvZF07XG5cbiAgICBvYmpbbWV0aG9kXSA9IGZ1bmN0aW9uIHJldHJ5V3JhcHBlcihvcmlnaW5hbCkge1xuICAgICAgdmFyIG9wICAgICAgID0gZXhwb3J0cy5vcGVyYXRpb24ob3B0aW9ucyk7XG4gICAgICB2YXIgYXJncyAgICAgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgdmFyIGNhbGxiYWNrID0gYXJncy5wb3AoKTtcblxuICAgICAgYXJncy5wdXNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICBpZiAob3AucmV0cnkoZXJyKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgYXJndW1lbnRzWzBdID0gb3AubWFpbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuXG4gICAgICBvcC5hdHRlbXB0KGZ1bmN0aW9uKCkge1xuICAgICAgICBvcmlnaW5hbC5hcHBseShvYmosIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfS5iaW5kKG9iaiwgb3JpZ2luYWwpO1xuICAgIG9ialttZXRob2RdLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG59O1xuIiwiZnVuY3Rpb24gUmV0cnlPcGVyYXRpb24odGltZW91dHMsIG9wdGlvbnMpIHtcbiAgLy8gQ29tcGF0aWJpbGl0eSBmb3IgdGhlIG9sZCAodGltZW91dHMsIHJldHJ5Rm9yZXZlcikgc2lnbmF0dXJlXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucyA9IHsgZm9yZXZlcjogb3B0aW9ucyB9O1xuICB9XG5cbiAgdGhpcy5fb3JpZ2luYWxUaW1lb3V0cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGltZW91dHMpKTtcbiAgdGhpcy5fdGltZW91dHMgPSB0aW1lb3V0cztcbiAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMuX21heFJldHJ5VGltZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5tYXhSZXRyeVRpbWUgfHwgSW5maW5pdHk7XG4gIHRoaXMuX2ZuID0gbnVsbDtcbiAgdGhpcy5fZXJyb3JzID0gW107XG4gIHRoaXMuX2F0dGVtcHRzID0gMTtcbiAgdGhpcy5fb3BlcmF0aW9uVGltZW91dCA9IG51bGw7XG4gIHRoaXMuX29wZXJhdGlvblRpbWVvdXRDYiA9IG51bGw7XG4gIHRoaXMuX3RpbWVvdXQgPSBudWxsO1xuICB0aGlzLl9vcGVyYXRpb25TdGFydCA9IG51bGw7XG5cbiAgaWYgKHRoaXMuX29wdGlvbnMuZm9yZXZlcikge1xuICAgIHRoaXMuX2NhY2hlZFRpbWVvdXRzID0gdGhpcy5fdGltZW91dHMuc2xpY2UoMCk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gUmV0cnlPcGVyYXRpb247XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9hdHRlbXB0cyA9IDE7XG4gIHRoaXMuX3RpbWVvdXRzID0gdGhpcy5fb3JpZ2luYWxUaW1lb3V0cztcbn1cblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX3RpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gIH1cblxuICB0aGlzLl90aW1lb3V0cyAgICAgICA9IFtdO1xuICB0aGlzLl9jYWNoZWRUaW1lb3V0cyA9IG51bGw7XG59O1xuXG5SZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUucmV0cnkgPSBmdW5jdGlvbihlcnIpIHtcbiAgaWYgKHRoaXMuX3RpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gIH1cblxuICBpZiAoIWVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgaWYgKGVyciAmJiBjdXJyZW50VGltZSAtIHRoaXMuX29wZXJhdGlvblN0YXJ0ID49IHRoaXMuX21heFJldHJ5VGltZSkge1xuICAgIHRoaXMuX2Vycm9ycy51bnNoaWZ0KG5ldyBFcnJvcignUmV0cnlPcGVyYXRpb24gdGltZW91dCBvY2N1cnJlZCcpKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB0aGlzLl9lcnJvcnMucHVzaChlcnIpO1xuXG4gIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dHMuc2hpZnQoKTtcbiAgaWYgKHRpbWVvdXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0aGlzLl9jYWNoZWRUaW1lb3V0cykge1xuICAgICAgLy8gcmV0cnkgZm9yZXZlciwgb25seSBrZWVwIGxhc3QgZXJyb3JcbiAgICAgIHRoaXMuX2Vycm9ycy5zcGxpY2UodGhpcy5fZXJyb3JzLmxlbmd0aCAtIDEsIHRoaXMuX2Vycm9ycy5sZW5ndGgpO1xuICAgICAgdGhpcy5fdGltZW91dHMgPSB0aGlzLl9jYWNoZWRUaW1lb3V0cy5zbGljZSgwKTtcbiAgICAgIHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0cy5zaGlmdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIHNlbGYuX2F0dGVtcHRzKys7XG5cbiAgICBpZiAoc2VsZi5fb3BlcmF0aW9uVGltZW91dENiKSB7XG4gICAgICBzZWxmLl90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5fb3BlcmF0aW9uVGltZW91dENiKHNlbGYuX2F0dGVtcHRzKTtcbiAgICAgIH0sIHNlbGYuX29wZXJhdGlvblRpbWVvdXQpO1xuXG4gICAgICBpZiAoc2VsZi5fb3B0aW9ucy51bnJlZikge1xuICAgICAgICAgIHNlbGYuX3RpbWVvdXQudW5yZWYoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxmLl9mbihzZWxmLl9hdHRlbXB0cyk7XG4gIH0sIHRpbWVvdXQpO1xuXG4gIGlmICh0aGlzLl9vcHRpb25zLnVucmVmKSB7XG4gICAgICB0aW1lci51bnJlZigpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5SZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUuYXR0ZW1wdCA9IGZ1bmN0aW9uKGZuLCB0aW1lb3V0T3BzKSB7XG4gIHRoaXMuX2ZuID0gZm47XG5cbiAgaWYgKHRpbWVvdXRPcHMpIHtcbiAgICBpZiAodGltZW91dE9wcy50aW1lb3V0KSB7XG4gICAgICB0aGlzLl9vcGVyYXRpb25UaW1lb3V0ID0gdGltZW91dE9wcy50aW1lb3V0O1xuICAgIH1cbiAgICBpZiAodGltZW91dE9wcy5jYikge1xuICAgICAgdGhpcy5fb3BlcmF0aW9uVGltZW91dENiID0gdGltZW91dE9wcy5jYjtcbiAgICB9XG4gIH1cblxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmICh0aGlzLl9vcGVyYXRpb25UaW1lb3V0Q2IpIHtcbiAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuX29wZXJhdGlvblRpbWVvdXRDYigpO1xuICAgIH0sIHNlbGYuX29wZXJhdGlvblRpbWVvdXQpO1xuICB9XG5cbiAgdGhpcy5fb3BlcmF0aW9uU3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICB0aGlzLl9mbih0aGlzLl9hdHRlbXB0cyk7XG59O1xuXG5SZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUudHJ5ID0gZnVuY3Rpb24oZm4pIHtcbiAgY29uc29sZS5sb2coJ1VzaW5nIFJldHJ5T3BlcmF0aW9uLnRyeSgpIGlzIGRlcHJlY2F0ZWQnKTtcbiAgdGhpcy5hdHRlbXB0KGZuKTtcbn07XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKGZuKSB7XG4gIGNvbnNvbGUubG9nKCdVc2luZyBSZXRyeU9wZXJhdGlvbi5zdGFydCgpIGlzIGRlcHJlY2F0ZWQnKTtcbiAgdGhpcy5hdHRlbXB0KGZuKTtcbn07XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5zdGFydCA9IFJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS50cnk7XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5lcnJvcnMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX2Vycm9ycztcbn07XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5hdHRlbXB0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fYXR0ZW1wdHM7XG59O1xuXG5SZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUubWFpbkVycm9yID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLl9lcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgY291bnRzID0ge307XG4gIHZhciBtYWluRXJyb3IgPSBudWxsO1xuICB2YXIgbWFpbkVycm9yQ291bnQgPSAwO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fZXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGVycm9yID0gdGhpcy5fZXJyb3JzW2ldO1xuICAgIHZhciBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICB2YXIgY291bnQgPSAoY291bnRzW21lc3NhZ2VdIHx8IDApICsgMTtcblxuICAgIGNvdW50c1ttZXNzYWdlXSA9IGNvdW50O1xuXG4gICAgaWYgKGNvdW50ID49IG1haW5FcnJvckNvdW50KSB7XG4gICAgICBtYWluRXJyb3IgPSBlcnJvcjtcbiAgICAgIG1haW5FcnJvckNvdW50ID0gY291bnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1haW5FcnJvcjtcbn07XG4iLCJ2YXIgZ3JhbW1hciA9IG1vZHVsZS5leHBvcnRzID0ge1xuICB2OiBbe1xuICAgIG5hbWU6ICd2ZXJzaW9uJyxcbiAgICByZWc6IC9eKFxcZCopJC9cbiAgfV0sXG4gIG86IFt7XG4gICAgLy8gbz0tIDIwNTE4IDAgSU4gSVA0IDIwMy4wLjExMy4xXG4gICAgLy8gTkI6IHNlc3Npb25JZCB3aWxsIGJlIGEgU3RyaW5nIGluIG1vc3QgY2FzZXMgYmVjYXVzZSBpdCBpcyBodWdlXG4gICAgbmFtZTogJ29yaWdpbicsXG4gICAgcmVnOiAvXihcXFMqKSAoXFxkKikgKFxcZCopIChcXFMqKSBJUChcXGQpIChcXFMqKS8sXG4gICAgbmFtZXM6IFsndXNlcm5hbWUnLCAnc2Vzc2lvbklkJywgJ3Nlc3Npb25WZXJzaW9uJywgJ25ldFR5cGUnLCAnaXBWZXInLCAnYWRkcmVzcyddLFxuICAgIGZvcm1hdDogJyVzICVzICVkICVzIElQJWQgJXMnXG4gIH1dLFxuICAvLyBkZWZhdWx0IHBhcnNpbmcgb2YgdGhlc2Ugb25seSAodGhvdWdoIHNvbWUgb2YgdGhlc2UgZmVlbCBvdXRkYXRlZClcbiAgczogW3sgbmFtZTogJ25hbWUnIH1dLFxuICBpOiBbeyBuYW1lOiAnZGVzY3JpcHRpb24nIH1dLFxuICB1OiBbeyBuYW1lOiAndXJpJyB9XSxcbiAgZTogW3sgbmFtZTogJ2VtYWlsJyB9XSxcbiAgcDogW3sgbmFtZTogJ3Bob25lJyB9XSxcbiAgejogW3sgbmFtZTogJ3RpbWV6b25lcycgfV0sIC8vIFRPRE86IHRoaXMgb25lIGNhbiBhY3R1YWxseSBiZSBwYXJzZWQgcHJvcGVybHkuLi5cbiAgcjogW3sgbmFtZTogJ3JlcGVhdHMnIH1dLCAgIC8vIFRPRE86IHRoaXMgb25lIGNhbiBhbHNvIGJlIHBhcnNlZCBwcm9wZXJseVxuICAvLyBrOiBbe31dLCAvLyBvdXRkYXRlZCB0aGluZyBpZ25vcmVkXG4gIHQ6IFt7XG4gICAgLy8gdD0wIDBcbiAgICBuYW1lOiAndGltaW5nJyxcbiAgICByZWc6IC9eKFxcZCopIChcXGQqKS8sXG4gICAgbmFtZXM6IFsnc3RhcnQnLCAnc3RvcCddLFxuICAgIGZvcm1hdDogJyVkICVkJ1xuICB9XSxcbiAgYzogW3tcbiAgICAvLyBjPUlOIElQNCAxMC40Ny4xOTcuMjZcbiAgICBuYW1lOiAnY29ubmVjdGlvbicsXG4gICAgcmVnOiAvXklOIElQKFxcZCkgKFxcUyopLyxcbiAgICBuYW1lczogWyd2ZXJzaW9uJywgJ2lwJ10sXG4gICAgZm9ybWF0OiAnSU4gSVAlZCAlcydcbiAgfV0sXG4gIGI6IFt7XG4gICAgLy8gYj1BUzo0MDAwXG4gICAgcHVzaDogJ2JhbmR3aWR0aCcsXG4gICAgcmVnOiAvXihUSUFTfEFTfENUfFJSfFJTKTooXFxkKikvLFxuICAgIG5hbWVzOiBbJ3R5cGUnLCAnbGltaXQnXSxcbiAgICBmb3JtYXQ6ICclczolcydcbiAgfV0sXG4gIG06IFt7XG4gICAgLy8gbT12aWRlbyA1MTc0NCBSVFAvQVZQIDEyNiA5NyA5OCAzNCAzMVxuICAgIC8vIE5COiBzcGVjaWFsIC0gcHVzaGVzIHRvIHNlc3Npb25cbiAgICAvLyBUT0RPOiBydHAvZm10cCBzaG91bGQgYmUgZmlsdGVyZWQgYnkgdGhlIHBheWxvYWRzIGZvdW5kIGhlcmU/XG4gICAgcmVnOiAvXihcXHcqKSAoXFxkKikgKFtcXHcvXSopKD86ICguKikpPy8sXG4gICAgbmFtZXM6IFsndHlwZScsICdwb3J0JywgJ3Byb3RvY29sJywgJ3BheWxvYWRzJ10sXG4gICAgZm9ybWF0OiAnJXMgJWQgJXMgJXMnXG4gIH1dLFxuICBhOiBbXG4gICAge1xuICAgICAgLy8gYT1ydHBtYXA6MTEwIG9wdXMvNDgwMDAvMlxuICAgICAgcHVzaDogJ3J0cCcsXG4gICAgICByZWc6IC9ecnRwbWFwOihcXGQqKSAoW1xcd1xcLS5dKikoPzpcXHMqXFwvKFxcZCopKD86XFxzKlxcLyhcXFMqKSk/KT8vLFxuICAgICAgbmFtZXM6IFsncGF5bG9hZCcsICdjb2RlYycsICdyYXRlJywgJ2VuY29kaW5nJ10sXG4gICAgICBmb3JtYXQ6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiAoby5lbmNvZGluZylcbiAgICAgICAgICA/ICdydHBtYXA6JWQgJXMvJXMvJXMnXG4gICAgICAgICAgOiBvLnJhdGVcbiAgICAgICAgICAgID8gJ3J0cG1hcDolZCAlcy8lcydcbiAgICAgICAgICAgIDogJ3J0cG1hcDolZCAlcyc7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPWZtdHA6MTA4IHByb2ZpbGUtbGV2ZWwtaWQ9MjQ7b2JqZWN0PTIzO2JpdHJhdGU9NjQwMDBcbiAgICAgIC8vIGE9Zm10cDoxMTEgbWlucHRpbWU9MTA7IHVzZWluYmFuZGZlYz0xXG4gICAgICBwdXNoOiAnZm10cCcsXG4gICAgICByZWc6IC9eZm10cDooXFxkKikgKFtcXFN8IF0qKS8sXG4gICAgICBuYW1lczogWydwYXlsb2FkJywgJ2NvbmZpZyddLFxuICAgICAgZm9ybWF0OiAnZm10cDolZCAlcydcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9Y29udHJvbDpzdHJlYW1pZD0wXG4gICAgICBuYW1lOiAnY29udHJvbCcsXG4gICAgICByZWc6IC9eY29udHJvbDooLiopLyxcbiAgICAgIGZvcm1hdDogJ2NvbnRyb2w6JXMnXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPXJ0Y3A6NjUxNzkgSU4gSVA0IDE5My44NC43Ny4xOTRcbiAgICAgIG5hbWU6ICdydGNwJyxcbiAgICAgIHJlZzogL15ydGNwOihcXGQqKSg/OiAoXFxTKikgSVAoXFxkKSAoXFxTKikpPy8sXG4gICAgICBuYW1lczogWydwb3J0JywgJ25ldFR5cGUnLCAnaXBWZXInLCAnYWRkcmVzcyddLFxuICAgICAgZm9ybWF0OiBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gKG8uYWRkcmVzcyAhPSBudWxsKVxuICAgICAgICAgID8gJ3J0Y3A6JWQgJXMgSVAlZCAlcydcbiAgICAgICAgICA6ICdydGNwOiVkJztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9cnRjcC1mYjo5OCB0cnItaW50IDEwMFxuICAgICAgcHVzaDogJ3J0Y3BGYlRyckludCcsXG4gICAgICByZWc6IC9ecnRjcC1mYjooXFwqfFxcZCopIHRyci1pbnQgKFxcZCopLyxcbiAgICAgIG5hbWVzOiBbJ3BheWxvYWQnLCAndmFsdWUnXSxcbiAgICAgIGZvcm1hdDogJ3J0Y3AtZmI6JWQgdHJyLWludCAlZCdcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9cnRjcC1mYjo5OCBuYWNrIHJwc2lcbiAgICAgIHB1c2g6ICdydGNwRmInLFxuICAgICAgcmVnOiAvXnJ0Y3AtZmI6KFxcKnxcXGQqKSAoW1xcdy1fXSopKD86IChbXFx3LV9dKikpPy8sXG4gICAgICBuYW1lczogWydwYXlsb2FkJywgJ3R5cGUnLCAnc3VidHlwZSddLFxuICAgICAgZm9ybWF0OiBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gKG8uc3VidHlwZSAhPSBudWxsKVxuICAgICAgICAgID8gJ3J0Y3AtZmI6JXMgJXMgJXMnXG4gICAgICAgICAgOiAncnRjcC1mYjolcyAlcyc7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPWV4dG1hcDoyIHVybjppZXRmOnBhcmFtczpydHAtaGRyZXh0OnRvZmZzZXRcbiAgICAgIC8vIGE9ZXh0bWFwOjEvcmVjdm9ubHkgVVJJLWdwcy1zdHJpbmdcbiAgICAgIC8vIGE9ZXh0bWFwOjMgdXJuOmlldGY6cGFyYW1zOnJ0cC1oZHJleHQ6ZW5jcnlwdCB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDpzbXB0ZS10YyAyNUA2MDAvMjRcbiAgICAgIHB1c2g6ICdleHQnLFxuICAgICAgcmVnOiAvXmV4dG1hcDooXFxkKykoPzpcXC8oXFx3KykpPyg/OiAodXJuOmlldGY6cGFyYW1zOnJ0cC1oZHJleHQ6ZW5jcnlwdCkpPyAoXFxTKikoPzogKFxcUyopKT8vLFxuICAgICAgbmFtZXM6IFsndmFsdWUnLCAnZGlyZWN0aW9uJywgJ2VuY3J5cHQtdXJpJywgJ3VyaScsICdjb25maWcnXSxcbiAgICAgIGZvcm1hdDogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAnZXh0bWFwOiVkJyArXG4gICAgICAgICAgKG8uZGlyZWN0aW9uID8gJy8lcycgOiAnJXYnKSArXG4gICAgICAgICAgKG9bJ2VuY3J5cHQtdXJpJ10gPyAnICVzJyA6ICcldicpICtcbiAgICAgICAgICAnICVzJyArXG4gICAgICAgICAgKG8uY29uZmlnID8gJyAlcycgOiAnJylcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9ZXh0bWFwLWFsbG93LW1peGVkXG4gICAgICBuYW1lOiAnZXh0bWFwQWxsb3dNaXhlZCcsXG4gICAgICByZWc6IC9eKGV4dG1hcC1hbGxvdy1taXhlZCkvXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPWNyeXB0bzoxIEFFU19DTV8xMjhfSE1BQ19TSEExXzgwIGlubGluZTpQUzF1UUNWZWVDRkNhblZtY2prcFB5d2pOV2hjWUQwbVhYdHhhVkJSfDJeMjB8MTozMlxuICAgICAgcHVzaDogJ2NyeXB0bycsXG4gICAgICByZWc6IC9eY3J5cHRvOihcXGQqKSAoW1xcd19dKikgKFxcUyopKD86IChcXFMqKSk/LyxcbiAgICAgIG5hbWVzOiBbJ2lkJywgJ3N1aXRlJywgJ2NvbmZpZycsICdzZXNzaW9uQ29uZmlnJ10sXG4gICAgICBmb3JtYXQ6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiAoby5zZXNzaW9uQ29uZmlnICE9IG51bGwpXG4gICAgICAgICAgPyAnY3J5cHRvOiVkICVzICVzICVzJ1xuICAgICAgICAgIDogJ2NyeXB0bzolZCAlcyAlcyc7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPXNldHVwOmFjdHBhc3NcbiAgICAgIG5hbWU6ICdzZXR1cCcsXG4gICAgICByZWc6IC9ec2V0dXA6KFxcdyopLyxcbiAgICAgIGZvcm1hdDogJ3NldHVwOiVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1jb25uZWN0aW9uOm5ld1xuICAgICAgbmFtZTogJ2Nvbm5lY3Rpb25UeXBlJyxcbiAgICAgIHJlZzogL15jb25uZWN0aW9uOihuZXd8ZXhpc3RpbmcpLyxcbiAgICAgIGZvcm1hdDogJ2Nvbm5lY3Rpb246JXMnXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPW1pZDoxXG4gICAgICBuYW1lOiAnbWlkJyxcbiAgICAgIHJlZzogL15taWQ6KFteXFxzXSopLyxcbiAgICAgIGZvcm1hdDogJ21pZDolcydcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9bXNpZDowYzhiMDY0ZC1kODA3LTQzYjQtYjQzNC1mOTJhODg5ZDg1ODcgOTgxNzg2ODUtZDQwOS00NmUwLThlMTYtN2VmMGRiMGRiNjRhXG4gICAgICBuYW1lOiAnbXNpZCcsXG4gICAgICByZWc6IC9ebXNpZDooLiopLyxcbiAgICAgIGZvcm1hdDogJ21zaWQ6JXMnXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPXB0aW1lOjIwXG4gICAgICBuYW1lOiAncHRpbWUnLFxuICAgICAgcmVnOiAvXnB0aW1lOihcXGQqKD86XFwuXFxkKikqKS8sXG4gICAgICBmb3JtYXQ6ICdwdGltZTolZCdcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9bWF4cHRpbWU6NjBcbiAgICAgIG5hbWU6ICdtYXhwdGltZScsXG4gICAgICByZWc6IC9ebWF4cHRpbWU6KFxcZCooPzpcXC5cXGQqKSopLyxcbiAgICAgIGZvcm1hdDogJ21heHB0aW1lOiVkJ1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1zZW5kcmVjdlxuICAgICAgbmFtZTogJ2RpcmVjdGlvbicsXG4gICAgICByZWc6IC9eKHNlbmRyZWN2fHJlY3Zvbmx5fHNlbmRvbmx5fGluYWN0aXZlKS9cbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9aWNlLWxpdGVcbiAgICAgIG5hbWU6ICdpY2VsaXRlJyxcbiAgICAgIHJlZzogL14oaWNlLWxpdGUpL1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1pY2UtdWZyYWc6RjdnSVxuICAgICAgbmFtZTogJ2ljZVVmcmFnJyxcbiAgICAgIHJlZzogL15pY2UtdWZyYWc6KFxcUyopLyxcbiAgICAgIGZvcm1hdDogJ2ljZS11ZnJhZzolcydcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9aWNlLXB3ZDp4OWNtbC9ZemljaFYyK1hsaGlNdThnXG4gICAgICBuYW1lOiAnaWNlUHdkJyxcbiAgICAgIHJlZzogL15pY2UtcHdkOihcXFMqKS8sXG4gICAgICBmb3JtYXQ6ICdpY2UtcHdkOiVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1maW5nZXJwcmludDpTSEEtMSAwMDoxMToyMjozMzo0NDo1NTo2Njo3Nzo4ODo5OTpBQTpCQjpDQzpERDpFRTpGRjowMDoxMToyMjozM1xuICAgICAgbmFtZTogJ2ZpbmdlcnByaW50JyxcbiAgICAgIHJlZzogL15maW5nZXJwcmludDooXFxTKikgKFxcUyopLyxcbiAgICAgIG5hbWVzOiBbJ3R5cGUnLCAnaGFzaCddLFxuICAgICAgZm9ybWF0OiAnZmluZ2VycHJpbnQ6JXMgJXMnXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPWNhbmRpZGF0ZTowIDEgVURQIDIxMTM2NjczMjcgMjAzLjAuMTEzLjEgNTQ0MDAgdHlwIGhvc3RcbiAgICAgIC8vIGE9Y2FuZGlkYXRlOjExNjI4NzUwODEgMSB1ZHAgMjExMzkzNzE1MSAxOTIuMTY4LjM0Ljc1IDYwMDE3IHR5cCBob3N0IGdlbmVyYXRpb24gMCBuZXR3b3JrLWlkIDMgbmV0d29yay1jb3N0IDEwXG4gICAgICAvLyBhPWNhbmRpZGF0ZTozMjg5OTEyOTU3IDIgdWRwIDE4NDU1MDE2OTUgMTkzLjg0Ljc3LjE5NCA2MDAxNyB0eXAgc3JmbHggcmFkZHIgMTkyLjE2OC4zNC43NSBycG9ydCA2MDAxNyBnZW5lcmF0aW9uIDAgbmV0d29yay1pZCAzIG5ldHdvcmstY29zdCAxMFxuICAgICAgLy8gYT1jYW5kaWRhdGU6MjI5ODE1NjIwIDEgdGNwIDE1MTgyODA0NDcgMTkyLjE2OC4xNTAuMTkgNjAwMTcgdHlwIGhvc3QgdGNwdHlwZSBhY3RpdmUgZ2VuZXJhdGlvbiAwIG5ldHdvcmstaWQgMyBuZXR3b3JrLWNvc3QgMTBcbiAgICAgIC8vIGE9Y2FuZGlkYXRlOjMyODk5MTI5NTcgMiB0Y3AgMTg0NTUwMTY5NSAxOTMuODQuNzcuMTk0IDYwMDE3IHR5cCBzcmZseCByYWRkciAxOTIuMTY4LjM0Ljc1IHJwb3J0IDYwMDE3IHRjcHR5cGUgcGFzc2l2ZSBnZW5lcmF0aW9uIDAgbmV0d29yay1pZCAzIG5ldHdvcmstY29zdCAxMFxuICAgICAgcHVzaDonY2FuZGlkYXRlcycsXG4gICAgICByZWc6IC9eY2FuZGlkYXRlOihcXFMqKSAoXFxkKikgKFxcUyopIChcXGQqKSAoXFxTKikgKFxcZCopIHR5cCAoXFxTKikoPzogcmFkZHIgKFxcUyopIHJwb3J0IChcXGQqKSk/KD86IHRjcHR5cGUgKFxcUyopKT8oPzogZ2VuZXJhdGlvbiAoXFxkKikpPyg/OiBuZXR3b3JrLWlkIChcXGQqKSk/KD86IG5ldHdvcmstY29zdCAoXFxkKikpPy8sXG4gICAgICBuYW1lczogWydmb3VuZGF0aW9uJywgJ2NvbXBvbmVudCcsICd0cmFuc3BvcnQnLCAncHJpb3JpdHknLCAnaXAnLCAncG9ydCcsICd0eXBlJywgJ3JhZGRyJywgJ3Jwb3J0JywgJ3RjcHR5cGUnLCAnZ2VuZXJhdGlvbicsICduZXR3b3JrLWlkJywgJ25ldHdvcmstY29zdCddLFxuICAgICAgZm9ybWF0OiBmdW5jdGlvbiAobykge1xuICAgICAgICB2YXIgc3RyID0gJ2NhbmRpZGF0ZTolcyAlZCAlcyAlZCAlcyAlZCB0eXAgJXMnO1xuXG4gICAgICAgIHN0ciArPSAoby5yYWRkciAhPSBudWxsKSA/ICcgcmFkZHIgJXMgcnBvcnQgJWQnIDogJyV2JXYnO1xuXG4gICAgICAgIC8vIE5COiBjYW5kaWRhdGUgaGFzIHRocmVlIG9wdGlvbmFsIGNodW5rcywgc28gJXZvaWQgbWlkZGxlcyBvbmUgaWYgaXQncyBtaXNzaW5nXG4gICAgICAgIHN0ciArPSAoby50Y3B0eXBlICE9IG51bGwpID8gJyB0Y3B0eXBlICVzJyA6ICcldic7XG5cbiAgICAgICAgaWYgKG8uZ2VuZXJhdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgc3RyICs9ICcgZ2VuZXJhdGlvbiAlZCc7XG4gICAgICAgIH1cblxuICAgICAgICBzdHIgKz0gKG9bJ25ldHdvcmstaWQnXSAhPSBudWxsKSA/ICcgbmV0d29yay1pZCAlZCcgOiAnJXYnO1xuICAgICAgICBzdHIgKz0gKG9bJ25ldHdvcmstY29zdCddICE9IG51bGwpID8gJyBuZXR3b3JrLWNvc3QgJWQnIDogJyV2JztcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9ZW5kLW9mLWNhbmRpZGF0ZXMgKGtlZXAgYWZ0ZXIgdGhlIGNhbmRpZGF0ZXMgbGluZSBmb3IgcmVhZGFiaWxpdHkpXG4gICAgICBuYW1lOiAnZW5kT2ZDYW5kaWRhdGVzJyxcbiAgICAgIHJlZzogL14oZW5kLW9mLWNhbmRpZGF0ZXMpL1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1yZW1vdGUtY2FuZGlkYXRlczoxIDIwMy4wLjExMy4xIDU0NDAwIDIgMjAzLjAuMTEzLjEgNTQ0MDEgLi4uXG4gICAgICBuYW1lOiAncmVtb3RlQ2FuZGlkYXRlcycsXG4gICAgICByZWc6IC9ecmVtb3RlLWNhbmRpZGF0ZXM6KC4qKS8sXG4gICAgICBmb3JtYXQ6ICdyZW1vdGUtY2FuZGlkYXRlczolcydcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9aWNlLW9wdGlvbnM6Z29vZ2xlLWljZVxuICAgICAgbmFtZTogJ2ljZU9wdGlvbnMnLFxuICAgICAgcmVnOiAvXmljZS1vcHRpb25zOihcXFMqKS8sXG4gICAgICBmb3JtYXQ6ICdpY2Utb3B0aW9uczolcydcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9c3NyYzoyNTY2MTA3NTY5IGNuYW1lOnQ5WVU4TTFVeFRGOFkxQTFcbiAgICAgIHB1c2g6ICdzc3JjcycsXG4gICAgICByZWc6IC9ec3NyYzooXFxkKikgKFtcXHdfLV0qKSg/OjooLiopKT8vLFxuICAgICAgbmFtZXM6IFsnaWQnLCAnYXR0cmlidXRlJywgJ3ZhbHVlJ10sXG4gICAgICBmb3JtYXQ6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHZhciBzdHIgPSAnc3NyYzolZCc7XG4gICAgICAgIGlmIChvLmF0dHJpYnV0ZSAhPSBudWxsKSB7XG4gICAgICAgICAgc3RyICs9ICcgJXMnO1xuICAgICAgICAgIGlmIChvLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN0ciArPSAnOiVzJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9c3NyYy1ncm91cDpGRUMgMSAyXG4gICAgICAvLyBhPXNzcmMtZ3JvdXA6RkVDLUZSIDMwMDQzNjQxOTUgMTA4MDc3MjI0MVxuICAgICAgcHVzaDogJ3NzcmNHcm91cHMnLFxuICAgICAgLy8gdG9rZW4tY2hhciA9ICV4MjEgLyAleDIzLTI3IC8gJXgyQS0yQiAvICV4MkQtMkUgLyAleDMwLTM5IC8gJXg0MS01QSAvICV4NUUtN0VcbiAgICAgIHJlZzogL15zc3JjLWdyb3VwOihbXFx4MjFcXHgyM1xceDI0XFx4MjVcXHgyNlxceDI3XFx4MkFcXHgyQlxceDJEXFx4MkVcXHddKikgKC4qKS8sXG4gICAgICBuYW1lczogWydzZW1hbnRpY3MnLCAnc3NyY3MnXSxcbiAgICAgIGZvcm1hdDogJ3NzcmMtZ3JvdXA6JXMgJXMnXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPW1zaWQtc2VtYW50aWM6IFdNUyBKdmxhbTVYM1NYMU9QNnBuMjB6V29ndmFLSno1SGpmOU9ubFZcbiAgICAgIG5hbWU6ICdtc2lkU2VtYW50aWMnLFxuICAgICAgcmVnOiAvXm1zaWQtc2VtYW50aWM6XFxzPyhcXHcqKSAoXFxTKikvLFxuICAgICAgbmFtZXM6IFsnc2VtYW50aWMnLCAndG9rZW4nXSxcbiAgICAgIGZvcm1hdDogJ21zaWQtc2VtYW50aWM6ICVzICVzJyAvLyBzcGFjZSBhZnRlciAnOicgaXMgbm90IGFjY2lkZW50YWxcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9Z3JvdXA6QlVORExFIGF1ZGlvIHZpZGVvXG4gICAgICBwdXNoOiAnZ3JvdXBzJyxcbiAgICAgIHJlZzogL15ncm91cDooXFx3KikgKC4qKS8sXG4gICAgICBuYW1lczogWyd0eXBlJywgJ21pZHMnXSxcbiAgICAgIGZvcm1hdDogJ2dyb3VwOiVzICVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1ydGNwLW11eFxuICAgICAgbmFtZTogJ3J0Y3BNdXgnLFxuICAgICAgcmVnOiAvXihydGNwLW11eCkvXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPXJ0Y3AtcnNpemVcbiAgICAgIG5hbWU6ICdydGNwUnNpemUnLFxuICAgICAgcmVnOiAvXihydGNwLXJzaXplKS9cbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9c2N0cG1hcDo1MDAwIHdlYnJ0Yy1kYXRhY2hhbm5lbCAxMDI0XG4gICAgICBuYW1lOiAnc2N0cG1hcCcsXG4gICAgICByZWc6IC9ec2N0cG1hcDooW1xcd18vXSopIChcXFMqKSg/OiAoXFxTKikpPy8sXG4gICAgICBuYW1lczogWydzY3RwbWFwTnVtYmVyJywgJ2FwcCcsICdtYXhNZXNzYWdlU2l6ZSddLFxuICAgICAgZm9ybWF0OiBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gKG8ubWF4TWVzc2FnZVNpemUgIT0gbnVsbClcbiAgICAgICAgICA/ICdzY3RwbWFwOiVzICVzICVzJ1xuICAgICAgICAgIDogJ3NjdHBtYXA6JXMgJXMnO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT14LWdvb2dsZS1mbGFnOmNvbmZlcmVuY2VcbiAgICAgIG5hbWU6ICd4R29vZ2xlRmxhZycsXG4gICAgICByZWc6IC9eeC1nb29nbGUtZmxhZzooW15cXHNdKikvLFxuICAgICAgZm9ybWF0OiAneC1nb29nbGUtZmxhZzolcydcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9cmlkOjEgc2VuZCBtYXgtd2lkdGg9MTI4MDttYXgtaGVpZ2h0PTcyMDttYXgtZnBzPTMwO2RlcGVuZD0wXG4gICAgICBwdXNoOiAncmlkcycsXG4gICAgICByZWc6IC9ecmlkOihbXFxkXFx3XSspIChcXHcrKSg/OiAoW1xcU3wgXSopKT8vLFxuICAgICAgbmFtZXM6IFsnaWQnLCAnZGlyZWN0aW9uJywgJ3BhcmFtcyddLFxuICAgICAgZm9ybWF0OiBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gKG8ucGFyYW1zKSA/ICdyaWQ6JXMgJXMgJXMnIDogJ3JpZDolcyAlcyc7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPWltYWdlYXR0cjo5NyBzZW5kIFt4PTgwMCx5PTY0MCxzYXI9MS4xLHE9MC42XSBbeD00ODAseT0zMjBdIHJlY3YgW3g9MzMwLHk9MjUwXVxuICAgICAgLy8gYT1pbWFnZWF0dHI6KiBzZW5kIFt4PTgwMCx5PTY0MF0gcmVjdiAqXG4gICAgICAvLyBhPWltYWdlYXR0cjoxMDAgcmVjdiBbeD0zMjAseT0yNDBdXG4gICAgICBwdXNoOiAnaW1hZ2VhdHRycycsXG4gICAgICByZWc6IG5ldyBSZWdFeHAoXG4gICAgICAgIC8vIGE9aW1hZ2VhdHRyOjk3XG4gICAgICAgICdeaW1hZ2VhdHRyOihcXFxcZCt8XFxcXCopJyArXG4gICAgICAgIC8vIHNlbmQgW3g9ODAwLHk9NjQwLHNhcj0xLjEscT0wLjZdIFt4PTQ4MCx5PTMyMF1cbiAgICAgICAgJ1tcXFxcc1xcXFx0XSsoc2VuZHxyZWN2KVtcXFxcc1xcXFx0XSsoXFxcXCp8XFxcXFtcXFxcUytcXFxcXSg/OltcXFxcc1xcXFx0XStcXFxcW1xcXFxTK1xcXFxdKSopJyArXG4gICAgICAgIC8vIHJlY3YgW3g9MzMwLHk9MjUwXVxuICAgICAgICAnKD86W1xcXFxzXFxcXHRdKyhyZWN2fHNlbmQpW1xcXFxzXFxcXHRdKyhcXFxcKnxcXFxcW1xcXFxTK1xcXFxdKD86W1xcXFxzXFxcXHRdK1xcXFxbXFxcXFMrXFxcXF0pKikpPydcbiAgICAgICksXG4gICAgICBuYW1lczogWydwdCcsICdkaXIxJywgJ2F0dHJzMScsICdkaXIyJywgJ2F0dHJzMiddLFxuICAgICAgZm9ybWF0OiBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gJ2ltYWdlYXR0cjolcyAlcyAlcycgKyAoby5kaXIyID8gJyAlcyAlcycgOiAnJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhPXNpbXVsY2FzdDpzZW5kIDEsMiwzO340LH41IHJlY3YgNjt+Nyx+OFxuICAgICAgLy8gYT1zaW11bGNhc3Q6cmVjdiAxOzQsNSBzZW5kIDY7N1xuICAgICAgbmFtZTogJ3NpbXVsY2FzdCcsXG4gICAgICByZWc6IG5ldyBSZWdFeHAoXG4gICAgICAgIC8vIGE9c2ltdWxjYXN0OlxuICAgICAgICAnXnNpbXVsY2FzdDonICtcbiAgICAgICAgLy8gc2VuZCAxLDIsMzt+NCx+NVxuICAgICAgICAnKHNlbmR8cmVjdikgKFthLXpBLVowLTlcXFxcLV9+OyxdKyknICtcbiAgICAgICAgLy8gc3BhY2UgKyByZWN2IDY7fjcsfjhcbiAgICAgICAgJyg/OlxcXFxzPyhzZW5kfHJlY3YpIChbYS16QS1aMC05XFxcXC1ffjssXSspKT8nICtcbiAgICAgICAgLy8gZW5kXG4gICAgICAgICckJ1xuICAgICAgKSxcbiAgICAgIG5hbWVzOiBbJ2RpcjEnLCAnbGlzdDEnLCAnZGlyMicsICdsaXN0MiddLFxuICAgICAgZm9ybWF0OiBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gJ3NpbXVsY2FzdDolcyAlcycgKyAoby5kaXIyID8gJyAlcyAlcycgOiAnJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBvbGQgc2ltdWxjYXN0IGRyYWZ0IDAzIChpbXBsZW1lbnRlZCBieSBGaXJlZm94KVxuICAgICAgLy8gICBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvZHJhZnQtaWV0Zi1tbXVzaWMtc2RwLXNpbXVsY2FzdC0wM1xuICAgICAgLy8gYT1zaW11bGNhc3Q6IHJlY3YgcHQ9OTc7OTggc2VuZCBwdD05N1xuICAgICAgLy8gYT1zaW11bGNhc3Q6IHNlbmQgcmlkPTU7Njs3IHBhdXNlZD02LDdcbiAgICAgIG5hbWU6ICdzaW11bGNhc3RfMDMnLFxuICAgICAgcmVnOiAvXnNpbXVsY2FzdDpbXFxzXFx0XSsoW1xcUytcXHNcXHRdKykkLyxcbiAgICAgIG5hbWVzOiBbJ3ZhbHVlJ10sXG4gICAgICBmb3JtYXQ6ICdzaW11bGNhc3Q6ICVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1mcmFtZXJhdGU6MjVcbiAgICAgIC8vIGE9ZnJhbWVyYXRlOjI5Ljk3XG4gICAgICBuYW1lOiAnZnJhbWVyYXRlJyxcbiAgICAgIHJlZzogL15mcmFtZXJhdGU6KFxcZCsoPzokfFxcLlxcZCspKS8sXG4gICAgICBmb3JtYXQ6ICdmcmFtZXJhdGU6JXMnXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBSRkM0NTcwXG4gICAgICAvLyBhPXNvdXJjZS1maWx0ZXI6IGluY2wgSU4gSVA0IDIzOS41LjIuMzEgMTAuMS4xNS41XG4gICAgICBuYW1lOiAnc291cmNlRmlsdGVyJyxcbiAgICAgIHJlZzogL15zb3VyY2UtZmlsdGVyOiAqKGV4Y2x8aW5jbCkgKFxcUyopIChJUDR8SVA2fFxcKikgKFxcUyopICguKikvLFxuICAgICAgbmFtZXM6IFsnZmlsdGVyTW9kZScsICduZXRUeXBlJywgJ2FkZHJlc3NUeXBlcycsICdkZXN0QWRkcmVzcycsICdzcmNMaXN0J10sXG4gICAgICBmb3JtYXQ6ICdzb3VyY2UtZmlsdGVyOiAlcyAlcyAlcyAlcyAlcydcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9YnVuZGxlLW9ubHlcbiAgICAgIG5hbWU6ICdidW5kbGVPbmx5JyxcbiAgICAgIHJlZzogL14oYnVuZGxlLW9ubHkpL1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1sYWJlbDoxXG4gICAgICBuYW1lOiAnbGFiZWwnLFxuICAgICAgcmVnOiAvXmxhYmVsOiguKykvLFxuICAgICAgZm9ybWF0OiAnbGFiZWw6JXMnXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBSRkMgdmVyc2lvbiAyNiBmb3IgU0NUUCBvdmVyIERUTFNcbiAgICAgIC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9kcmFmdC1pZXRmLW1tdXNpYy1zY3RwLXNkcC0yNiNzZWN0aW9uLTVcbiAgICAgIG5hbWU6ICdzY3RwUG9ydCcsXG4gICAgICByZWc6IC9ec2N0cC1wb3J0OihcXGQrKSQvLFxuICAgICAgZm9ybWF0OiAnc2N0cC1wb3J0OiVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gUkZDIHZlcnNpb24gMjYgZm9yIFNDVFAgb3ZlciBEVExTXG4gICAgICAvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvZHJhZnQtaWV0Zi1tbXVzaWMtc2N0cC1zZHAtMjYjc2VjdGlvbi02XG4gICAgICBuYW1lOiAnbWF4TWVzc2FnZVNpemUnLFxuICAgICAgcmVnOiAvXm1heC1tZXNzYWdlLXNpemU6KFxcZCspJC8sXG4gICAgICBmb3JtYXQ6ICdtYXgtbWVzc2FnZS1zaXplOiVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gUkZDNzI3M1xuICAgICAgLy8gYT10cy1yZWZjbGs6cHRwPUlFRUUxNTg4LTIwMDg6MzktQTctOTQtRkYtRkUtMDctQ0ItRDA6MzdcbiAgICAgIHB1c2g6J3RzUmVmQ2xvY2tzJyxcbiAgICAgIHJlZzogL150cy1yZWZjbGs6KFteXFxzPV0qKSg/Oj0oXFxTKikpPy8sXG4gICAgICBuYW1lczogWydjbGtzcmMnLCAnY2xrc3JjRXh0J10sXG4gICAgICBmb3JtYXQ6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiAndHMtcmVmY2xrOiVzJyArIChvLmNsa3NyY0V4dCAhPSBudWxsID8gJz0lcycgOiAnJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBSRkM3MjczXG4gICAgICAvLyBhPW1lZGlhY2xrOmRpcmVjdD05NjMyMTQ0MjRcbiAgICAgIG5hbWU6J21lZGlhQ2xrJyxcbiAgICAgIHJlZzogL15tZWRpYWNsazooPzppZD0oXFxTKikpPyAqKFteXFxzPV0qKSg/Oj0oXFxTKikpPyg/OiAqcmF0ZT0oXFxkKylcXC8oXFxkKykpPy8sXG4gICAgICBuYW1lczogWydpZCcsICdtZWRpYUNsb2NrTmFtZScsICdtZWRpYUNsb2NrVmFsdWUnLCAncmF0ZU51bWVyYXRvcicsICdyYXRlRGVub21pbmF0b3InXSxcbiAgICAgIGZvcm1hdDogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgdmFyIHN0ciA9ICdtZWRpYWNsazonO1xuICAgICAgICBzdHIgKz0gKG8uaWQgIT0gbnVsbCA/ICdpZD0lcyAlcycgOiAnJXYlcycpO1xuICAgICAgICBzdHIgKz0gKG8ubWVkaWFDbG9ja1ZhbHVlICE9IG51bGwgPyAnPSVzJyA6ICcnKTtcbiAgICAgICAgc3RyICs9IChvLnJhdGVOdW1lcmF0b3IgIT0gbnVsbCA/ICcgcmF0ZT0lcycgOiAnJyk7XG4gICAgICAgIHN0ciArPSAoby5yYXRlRGVub21pbmF0b3IgIT0gbnVsbCA/ICcvJXMnIDogJycpO1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1rZXl3ZHM6a2V5d29yZHNcbiAgICAgIG5hbWU6ICdrZXl3b3JkcycsXG4gICAgICByZWc6IC9ea2V5d2RzOiguKykkLyxcbiAgICAgIGZvcm1hdDogJ2tleXdkczolcydcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIGE9Y29udGVudDptYWluXG4gICAgICBuYW1lOiAnY29udGVudCcsXG4gICAgICByZWc6IC9eY29udGVudDooLispLyxcbiAgICAgIGZvcm1hdDogJ2NvbnRlbnQ6JXMnXG4gICAgfSxcbiAgICAvLyBCRkNQIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM0NTgzXG4gICAge1xuICAgICAgLy8gYT1mbG9vcmN0cmw6Yy1zXG4gICAgICBuYW1lOiAnYmZjcEZsb29yQ3RybCcsXG4gICAgICByZWc6IC9eZmxvb3JjdHJsOihjLW9ubHl8cy1vbmx5fGMtcykvLFxuICAgICAgZm9ybWF0OiAnZmxvb3JjdHJsOiVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1jb25maWQ6MVxuICAgICAgbmFtZTogJ2JmY3BDb25mSWQnLFxuICAgICAgcmVnOiAvXmNvbmZpZDooXFxkKykvLFxuICAgICAgZm9ybWF0OiAnY29uZmlkOiVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT11c2VyaWQ6MVxuICAgICAgbmFtZTogJ2JmY3BVc2VySWQnLFxuICAgICAgcmVnOiAvXnVzZXJpZDooXFxkKykvLFxuICAgICAgZm9ybWF0OiAndXNlcmlkOiVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgLy8gYT1mbG9vcmlkOjFcbiAgICAgIG5hbWU6ICdiZmNwRmxvb3JJZCcsXG4gICAgICByZWc6IC9eZmxvb3JpZDooLispICg/Om0tc3RyZWFtfG1zdHJtKTooLispLyxcbiAgICAgIG5hbWVzOiBbJ2lkJywgJ21TdHJlYW0nXSxcbiAgICAgIGZvcm1hdDogJ2Zsb29yaWQ6JXMgbXN0cm06JXMnXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBhbnkgYT0gdGhhdCB3ZSBkb24ndCB1bmRlcnN0YW5kIGlzIGtlcHQgdmVyYmF0aW0gb24gbWVkaWEuaW52YWxpZFxuICAgICAgcHVzaDogJ2ludmFsaWQnLFxuICAgICAgbmFtZXM6IFsndmFsdWUnXVxuICAgIH1cbiAgXVxufTtcblxuLy8gc2V0IHNlbnNpYmxlIGRlZmF1bHRzIHRvIGF2b2lkIHBvbGx1dGluZyB0aGUgZ3JhbW1hciB3aXRoIGJvcmluZyBkZXRhaWxzXG5PYmplY3Qua2V5cyhncmFtbWFyKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgdmFyIG9ianMgPSBncmFtbWFyW2tleV07XG4gIG9ianMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgaWYgKCFvYmoucmVnKSB7XG4gICAgICBvYmoucmVnID0gLyguKikvO1xuICAgIH1cbiAgICBpZiAoIW9iai5mb3JtYXQpIHtcbiAgICAgIG9iai5mb3JtYXQgPSAnJXMnO1xuICAgIH1cbiAgfSk7XG59KTtcbiIsInZhciBwYXJzZXIgPSByZXF1aXJlKCcuL3BhcnNlcicpO1xudmFyIHdyaXRlciA9IHJlcXVpcmUoJy4vd3JpdGVyJyk7XG5cbmV4cG9ydHMud3JpdGUgPSB3cml0ZXI7XG5leHBvcnRzLnBhcnNlID0gcGFyc2VyLnBhcnNlO1xuZXhwb3J0cy5wYXJzZVBhcmFtcyA9IHBhcnNlci5wYXJzZVBhcmFtcztcbmV4cG9ydHMucGFyc2VGbXRwQ29uZmlnID0gcGFyc2VyLnBhcnNlRm10cENvbmZpZzsgLy8gQWxpYXMgb2YgcGFyc2VQYXJhbXMoKS5cbmV4cG9ydHMucGFyc2VQYXlsb2FkcyA9IHBhcnNlci5wYXJzZVBheWxvYWRzO1xuZXhwb3J0cy5wYXJzZVJlbW90ZUNhbmRpZGF0ZXMgPSBwYXJzZXIucGFyc2VSZW1vdGVDYW5kaWRhdGVzO1xuZXhwb3J0cy5wYXJzZUltYWdlQXR0cmlidXRlcyA9IHBhcnNlci5wYXJzZUltYWdlQXR0cmlidXRlcztcbmV4cG9ydHMucGFyc2VTaW11bGNhc3RTdHJlYW1MaXN0ID0gcGFyc2VyLnBhcnNlU2ltdWxjYXN0U3RyZWFtTGlzdDtcbiIsInZhciB0b0ludElmSW50ID0gZnVuY3Rpb24gKHYpIHtcbiAgcmV0dXJuIFN0cmluZyhOdW1iZXIodikpID09PSB2ID8gTnVtYmVyKHYpIDogdjtcbn07XG5cbnZhciBhdHRhY2hQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG1hdGNoLCBsb2NhdGlvbiwgbmFtZXMsIHJhd05hbWUpIHtcbiAgaWYgKHJhd05hbWUgJiYgIW5hbWVzKSB7XG4gICAgbG9jYXRpb25bcmF3TmFtZV0gPSB0b0ludElmSW50KG1hdGNoWzFdKTtcbiAgfVxuICBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAobWF0Y2hbaSsxXSAhPSBudWxsKSB7XG4gICAgICAgIGxvY2F0aW9uW25hbWVzW2ldXSA9IHRvSW50SWZJbnQobWF0Y2hbaSsxXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG52YXIgcGFyc2VSZWcgPSBmdW5jdGlvbiAob2JqLCBsb2NhdGlvbiwgY29udGVudCkge1xuICB2YXIgbmVlZHNCbGFuayA9IG9iai5uYW1lICYmIG9iai5uYW1lcztcbiAgaWYgKG9iai5wdXNoICYmICFsb2NhdGlvbltvYmoucHVzaF0pIHtcbiAgICBsb2NhdGlvbltvYmoucHVzaF0gPSBbXTtcbiAgfVxuICBlbHNlIGlmIChuZWVkc0JsYW5rICYmICFsb2NhdGlvbltvYmoubmFtZV0pIHtcbiAgICBsb2NhdGlvbltvYmoubmFtZV0gPSB7fTtcbiAgfVxuICB2YXIga2V5TG9jYXRpb24gPSBvYmoucHVzaCA/XG4gICAge30gOiAgLy8gYmxhbmsgb2JqZWN0IHRoYXQgd2lsbCBiZSBwdXNoZWRcbiAgICBuZWVkc0JsYW5rID8gbG9jYXRpb25bb2JqLm5hbWVdIDogbG9jYXRpb247IC8vIG90aGVyd2lzZSwgbmFtZWQgbG9jYXRpb24gb3Igcm9vdFxuXG4gIGF0dGFjaFByb3BlcnRpZXMoY29udGVudC5tYXRjaChvYmoucmVnKSwga2V5TG9jYXRpb24sIG9iai5uYW1lcywgb2JqLm5hbWUpO1xuXG4gIGlmIChvYmoucHVzaCkge1xuICAgIGxvY2F0aW9uW29iai5wdXNoXS5wdXNoKGtleUxvY2F0aW9uKTtcbiAgfVxufTtcblxudmFyIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKTtcbnZhciB2YWxpZExpbmUgPSBSZWdFeHAucHJvdG90eXBlLnRlc3QuYmluZCgvXihbYS16XSk9KC4qKS8pO1xuXG5leHBvcnRzLnBhcnNlID0gZnVuY3Rpb24gKHNkcCkge1xuICB2YXIgc2Vzc2lvbiA9IHt9XG4gICAgLCBtZWRpYSA9IFtdXG4gICAgLCBsb2NhdGlvbiA9IHNlc3Npb247IC8vIHBvaW50cyBhdCB3aGVyZSBwcm9wZXJ0aWVzIGdvIHVuZGVyIChvbmUgb2YgdGhlIGFib3ZlKVxuXG4gIC8vIHBhcnNlIGxpbmVzIHdlIHVuZGVyc3RhbmRcbiAgc2RwLnNwbGl0KC8oXFxyXFxufFxccnxcXG4pLykuZmlsdGVyKHZhbGlkTGluZSkuZm9yRWFjaChmdW5jdGlvbiAobCkge1xuICAgIHZhciB0eXBlID0gbFswXTtcbiAgICB2YXIgY29udGVudCA9IGwuc2xpY2UoMik7XG4gICAgaWYgKHR5cGUgPT09ICdtJykge1xuICAgICAgbWVkaWEucHVzaCh7cnRwOiBbXSwgZm10cDogW119KTtcbiAgICAgIGxvY2F0aW9uID0gbWVkaWFbbWVkaWEubGVuZ3RoLTFdOyAvLyBwb2ludCBhdCBsYXRlc3QgbWVkaWEgbGluZVxuICAgIH1cblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgKGdyYW1tYXJbdHlwZV0gfHwgW10pLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICB2YXIgb2JqID0gZ3JhbW1hclt0eXBlXVtqXTtcbiAgICAgIGlmIChvYmoucmVnLnRlc3QoY29udGVudCkpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlUmVnKG9iaiwgbG9jYXRpb24sIGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgc2Vzc2lvbi5tZWRpYSA9IG1lZGlhOyAvLyBsaW5rIGl0IHVwXG4gIHJldHVybiBzZXNzaW9uO1xufTtcblxudmFyIHBhcmFtUmVkdWNlciA9IGZ1bmN0aW9uIChhY2MsIGV4cHIpIHtcbiAgdmFyIHMgPSBleHByLnNwbGl0KC89KC4rKS8sIDIpO1xuICBpZiAocy5sZW5ndGggPT09IDIpIHtcbiAgICBhY2Nbc1swXV0gPSB0b0ludElmSW50KHNbMV0pO1xuICB9IGVsc2UgaWYgKHMubGVuZ3RoID09PSAxICYmIGV4cHIubGVuZ3RoID4gMSkge1xuICAgIGFjY1tzWzBdXSA9IHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gYWNjO1xufTtcblxuZXhwb3J0cy5wYXJzZVBhcmFtcyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdCgvO1xccz8vKS5yZWR1Y2UocGFyYW1SZWR1Y2VyLCB7fSk7XG59O1xuXG4vLyBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSAtIGFsaWFzIHdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMFxuZXhwb3J0cy5wYXJzZUZtdHBDb25maWcgPSBleHBvcnRzLnBhcnNlUGFyYW1zO1xuXG5leHBvcnRzLnBhcnNlUGF5bG9hZHMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIudG9TdHJpbmcoKS5zcGxpdCgnICcpLm1hcChOdW1iZXIpO1xufTtcblxuZXhwb3J0cy5wYXJzZVJlbW90ZUNhbmRpZGF0ZXMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHZhciBjYW5kaWRhdGVzID0gW107XG4gIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgnICcpLm1hcCh0b0ludElmSW50KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkgKz0gMykge1xuICAgIGNhbmRpZGF0ZXMucHVzaCh7XG4gICAgICBjb21wb25lbnQ6IHBhcnRzW2ldLFxuICAgICAgaXA6IHBhcnRzW2kgKyAxXSxcbiAgICAgIHBvcnQ6IHBhcnRzW2kgKyAyXVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcblxuZXhwb3J0cy5wYXJzZUltYWdlQXR0cmlidXRlcyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdCgnICcpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBpdGVtLnN1YnN0cmluZygxLCBpdGVtLmxlbmd0aC0xKS5zcGxpdCgnLCcpLnJlZHVjZShwYXJhbVJlZHVjZXIsIHt9KTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLnBhcnNlU2ltdWxjYXN0U3RyZWFtTGlzdCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdCgnOycpLm1hcChmdW5jdGlvbiAoc3RyZWFtKSB7XG4gICAgcmV0dXJuIHN0cmVhbS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgICB2YXIgc2NpZCwgcGF1c2VkID0gZmFsc2U7XG5cbiAgICAgIGlmIChmb3JtYXRbMF0gIT09ICd+Jykge1xuICAgICAgICBzY2lkID0gdG9JbnRJZkludChmb3JtYXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NpZCA9IHRvSW50SWZJbnQoZm9ybWF0LnN1YnN0cmluZygxLCBmb3JtYXQubGVuZ3RoKSk7XG4gICAgICAgIHBhdXNlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNjaWQ6IHNjaWQsXG4gICAgICAgIHBhdXNlZDogcGF1c2VkXG4gICAgICB9O1xuICAgIH0pO1xuICB9KTtcbn07XG4iLCJ2YXIgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpO1xuXG4vLyBjdXN0b21pemVkIHV0aWwuZm9ybWF0IC0gZGlzY2FyZHMgZXhjZXNzIGFyZ3VtZW50cyBhbmQgY2FuIHZvaWQgbWlkZGxlIG9uZXNcbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZHYlXS9nO1xudmFyIGZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXRTdHIpIHtcbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICByZXR1cm4gZm9ybWF0U3RyLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbiAoeCkge1xuICAgIGlmIChpID49IGxlbikge1xuICAgICAgcmV0dXJuIHg7IC8vIG1pc3NpbmcgYXJndW1lbnRcbiAgICB9XG4gICAgdmFyIGFyZyA9IGFyZ3NbaV07XG4gICAgaSArPSAxO1xuICAgIHN3aXRjaCAoeCkge1xuICAgIGNhc2UgJyUlJzpcbiAgICAgIHJldHVybiAnJSc7XG4gICAgY2FzZSAnJXMnOlxuICAgICAgcmV0dXJuIFN0cmluZyhhcmcpO1xuICAgIGNhc2UgJyVkJzpcbiAgICAgIHJldHVybiBOdW1iZXIoYXJnKTtcbiAgICBjYXNlICcldic6XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9KTtcbiAgLy8gTkI6IHdlIGRpc2NhcmQgZXhjZXNzIGFyZ3VtZW50cyAtIHRoZXkgYXJlIHR5cGljYWxseSB1bmRlZmluZWQgZnJvbSBtYWtlTGluZVxufTtcblxudmFyIG1ha2VMaW5lID0gZnVuY3Rpb24gKHR5cGUsIG9iaiwgbG9jYXRpb24pIHtcbiAgdmFyIHN0ciA9IG9iai5mb3JtYXQgaW5zdGFuY2VvZiBGdW5jdGlvbiA/XG4gICAgKG9iai5mb3JtYXQob2JqLnB1c2ggPyBsb2NhdGlvbiA6IGxvY2F0aW9uW29iai5uYW1lXSkpIDpcbiAgICBvYmouZm9ybWF0O1xuXG4gIHZhciBhcmdzID0gW3R5cGUgKyAnPScgKyBzdHJdO1xuICBpZiAob2JqLm5hbWVzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubmFtZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBuID0gb2JqLm5hbWVzW2ldO1xuICAgICAgaWYgKG9iai5uYW1lKSB7XG4gICAgICAgIGFyZ3MucHVzaChsb2NhdGlvbltvYmoubmFtZV1bbl0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7IC8vIGZvciBtTGluZSBhbmQgcHVzaCBhdHRyaWJ1dGVzXG4gICAgICAgIGFyZ3MucHVzaChsb2NhdGlvbltvYmoubmFtZXNbaV1dKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgYXJncy5wdXNoKGxvY2F0aW9uW29iai5uYW1lXSk7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdC5hcHBseShudWxsLCBhcmdzKTtcbn07XG5cbi8vIFJGQyBzcGVjaWZpZWQgb3JkZXJcbi8vIFRPRE86IGV4dGVuZCB0aGlzIHdpdGggYWxsIHRoZSByZXN0XG52YXIgZGVmYXVsdE91dGVyT3JkZXIgPSBbXG4gICd2JywgJ28nLCAncycsICdpJyxcbiAgJ3UnLCAnZScsICdwJywgJ2MnLFxuICAnYicsICd0JywgJ3InLCAneicsICdhJ1xuXTtcbnZhciBkZWZhdWx0SW5uZXJPcmRlciA9IFsnaScsICdjJywgJ2InLCAnYSddO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlc3Npb24sIG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIC8vIGVuc3VyZSBjZXJ0YWluIHByb3BlcnRpZXMgZXhpc3RcbiAgaWYgKHNlc3Npb24udmVyc2lvbiA9PSBudWxsKSB7XG4gICAgc2Vzc2lvbi52ZXJzaW9uID0gMDsgLy8gJ3Y9MCcgbXVzdCBiZSB0aGVyZSAob25seSBkZWZpbmVkIHZlcnNpb24gYXRtKVxuICB9XG4gIGlmIChzZXNzaW9uLm5hbWUgPT0gbnVsbCkge1xuICAgIHNlc3Npb24ubmFtZSA9ICcgJzsgLy8gJ3M9ICcgbXVzdCBiZSB0aGVyZSBpZiBubyBtZWFuaW5nZnVsIG5hbWUgc2V0XG4gIH1cbiAgc2Vzc2lvbi5tZWRpYS5mb3JFYWNoKGZ1bmN0aW9uIChtTGluZSkge1xuICAgIGlmIChtTGluZS5wYXlsb2FkcyA9PSBudWxsKSB7XG4gICAgICBtTGluZS5wYXlsb2FkcyA9ICcnO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIG91dGVyT3JkZXIgPSBvcHRzLm91dGVyT3JkZXIgfHwgZGVmYXVsdE91dGVyT3JkZXI7XG4gIHZhciBpbm5lck9yZGVyID0gb3B0cy5pbm5lck9yZGVyIHx8IGRlZmF1bHRJbm5lck9yZGVyO1xuICB2YXIgc2RwID0gW107XG5cbiAgLy8gbG9vcCB0aHJvdWdoIG91dGVyT3JkZXIgZm9yIG1hdGNoaW5nIHByb3BlcnRpZXMgb24gc2Vzc2lvblxuICBvdXRlck9yZGVyLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBncmFtbWFyW3R5cGVdLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgaWYgKG9iai5uYW1lIGluIHNlc3Npb24gJiYgc2Vzc2lvbltvYmoubmFtZV0gIT0gbnVsbCkge1xuICAgICAgICBzZHAucHVzaChtYWtlTGluZSh0eXBlLCBvYmosIHNlc3Npb24pKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9iai5wdXNoIGluIHNlc3Npb24gJiYgc2Vzc2lvbltvYmoucHVzaF0gIT0gbnVsbCkge1xuICAgICAgICBzZXNzaW9uW29iai5wdXNoXS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIHNkcC5wdXNoKG1ha2VMaW5lKHR5cGUsIG9iaiwgZWwpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIHRoZW4gZm9yIGVhY2ggbWVkaWEgbGluZSwgZm9sbG93IHRoZSBpbm5lck9yZGVyXG4gIHNlc3Npb24ubWVkaWEuZm9yRWFjaChmdW5jdGlvbiAobUxpbmUpIHtcbiAgICBzZHAucHVzaChtYWtlTGluZSgnbScsIGdyYW1tYXIubVswXSwgbUxpbmUpKTtcblxuICAgIGlubmVyT3JkZXIuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgZ3JhbW1hclt0eXBlXS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgaWYgKG9iai5uYW1lIGluIG1MaW5lICYmIG1MaW5lW29iai5uYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgc2RwLnB1c2gobWFrZUxpbmUodHlwZSwgb2JqLCBtTGluZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9iai5wdXNoIGluIG1MaW5lICYmIG1MaW5lW29iai5wdXNoXSAhPSBudWxsKSB7XG4gICAgICAgICAgbUxpbmVbb2JqLnB1c2hdLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBzZHAucHVzaChtYWtlTGluZSh0eXBlLCBvYmosIGVsKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gc2RwLmpvaW4oJ1xcclxcbicpICsgJ1xcclxcbic7XG59O1xuIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7IC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuXG4gIHJldHVybiAoYnRoW2J1ZltpICsgMF1dICsgYnRoW2J1ZltpICsgMV1dICsgYnRoW2J1ZltpICsgMl1dICsgYnRoW2J1ZltpICsgM11dICsgJy0nICsgYnRoW2J1ZltpICsgNF1dICsgYnRoW2J1ZltpICsgNV1dICsgJy0nICsgYnRoW2J1ZltpICsgNl1dICsgYnRoW2J1ZltpICsgN11dICsgJy0nICsgYnRoW2J1ZltpICsgOF1dICsgYnRoW2J1ZltpICsgOV1dICsgJy0nICsgYnRoW2J1ZltpICsgMTBdXSArIGJ0aFtidWZbaSArIDExXV0gKyBidGhbYnVmW2kgKyAxMl1dICsgYnRoW2J1ZltpICsgMTNdXSArIGJ0aFtidWZbaSArIDE0XV0gKyBidGhbYnVmW2kgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBieXRlc1RvVXVpZDsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIHYxIH0gZnJvbSAnLi92MS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHYzIH0gZnJvbSAnLi92My5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHY0IH0gZnJvbSAnLi92NC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHY1IH0gZnJvbSAnLi92NS5qcyc7IiwiLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShtc2cubGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlc1tpXSA9IG1zZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZDVUb0hleEVuY29kZWRBcnJheSh3b3Jkc1RvTWQ1KGJ5dGVzVG9Xb3JkcyhieXRlcyksIGJ5dGVzLmxlbmd0aCAqIDgpKTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNVRvSGV4RW5jb2RlZEFycmF5KGlucHV0KSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgdmFyIGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIHZhciBoZXhUYWIgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGgzMjsgaSArPSA4KSB7XG4gICAgdmFyIHggPSBpbnB1dFtpID4+IDVdID4+PiBpICUgMzIgJiAweGZmO1xuICAgIHZhciBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIHZhciBhID0gMTczMjU4NDE5MztcbiAgdmFyIGIgPSAtMjcxNzMzODc5O1xuICB2YXIgYyA9IC0xNzMyNTg0MTk0O1xuICB2YXIgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgdmFyIG9sZGEgPSBhO1xuICAgIHZhciBvbGRiID0gYjtcbiAgICB2YXIgb2xkYyA9IGM7XG4gICAgdmFyIG9sZGQgPSBkO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgfVxuXG4gIHJldHVybiBbYSwgYiwgYywgZF07XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBieXRlcyB0byBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzXG4gKiBDaGFyYWN0ZXJzID4yNTUgaGF2ZSB0aGVpciBoaWdoLWJ5dGUgc2lsZW50bHkgaWdub3JlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJ5dGVzVG9Xb3JkcyhpbnB1dCkge1xuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIGxlbmd0aDggPSBpbnB1dC5sZW5ndGggKiA4O1xuICB2YXIgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIHZhciBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDB4ZmZmZjtcbn1cbi8qXG4gKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gKi9cblxuXG5mdW5jdGlvbiBiaXRSb3RhdGVMZWZ0KG51bSwgY250KSB7XG4gIHJldHVybiBudW0gPDwgY250IHwgbnVtID4+PiAzMiAtIGNudDtcbn1cbi8qXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICovXG5cblxuZnVuY3Rpb24gbWQ1Y21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgYyB8IH5iICYgZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgZCB8IGMgJiB+ZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWQ1OyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICB2YXIgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgdmFyIEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG5cbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIHZhciBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gIHZhciBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gIHZhciBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBOOyArK19pKSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50MzJBcnJheSgxNik7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIGFycltqXSA9IGJ5dGVzW19pICogNjQgKyBqICogNF0gPDwgMjQgfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDJdIDw8IDggfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAzXTtcbiAgICB9XG5cbiAgICBNW19pXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgTjsgKytfaTIpIHtcbiAgICB2YXIgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG5cbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgIFdbdF0gPSBNW19pMl1bdF07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX3QgPSAxNjsgX3QgPCA4MDsgKytfdCkge1xuICAgICAgV1tfdF0gPSBST1RMKFdbX3QgLSAzXSBeIFdbX3QgLSA4XSBeIFdbX3QgLSAxNF0gXiBXW190IC0gMTZdLCAxKTtcbiAgICB9XG5cbiAgICB2YXIgYSA9IEhbMF07XG4gICAgdmFyIGIgPSBIWzFdO1xuICAgIHZhciBjID0gSFsyXTtcbiAgICB2YXIgZCA9IEhbM107XG4gICAgdmFyIGUgPSBIWzRdO1xuXG4gICAgZm9yICh2YXIgX3QyID0gMDsgX3QyIDwgODA7ICsrX3QyKSB7XG4gICAgICB2YXIgcyA9IE1hdGguZmxvb3IoX3QyIC8gMjApO1xuICAgICAgdmFyIFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1tfdDJdID4+PiAwO1xuICAgICAgZSA9IGQ7XG4gICAgICBkID0gYztcbiAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IFQ7XG4gICAgfVxuXG4gICAgSFswXSA9IEhbMF0gKyBhID4+PiAwO1xuICAgIEhbMV0gPSBIWzFdICsgYiA+Pj4gMDtcbiAgICBIWzJdID0gSFsyXSArIGMgPj4+IDA7XG4gICAgSFszXSA9IEhbM10gKyBkID4+PiAwO1xuICAgIEhbNF0gPSBIWzRdICsgZSA+Pj4gMDtcbiAgfVxuXG4gIHJldHVybiBbSFswXSA+PiAyNCAmIDB4ZmYsIEhbMF0gPj4gMTYgJiAweGZmLCBIWzBdID4+IDggJiAweGZmLCBIWzBdICYgMHhmZiwgSFsxXSA+PiAyNCAmIDB4ZmYsIEhbMV0gPj4gMTYgJiAweGZmLCBIWzFdID4+IDggJiAweGZmLCBIWzFdICYgMHhmZiwgSFsyXSA+PiAyNCAmIDB4ZmYsIEhbMl0gPj4gMTYgJiAweGZmLCBIWzJdID4+IDggJiAweGZmLCBIWzJdICYgMHhmZiwgSFszXSA+PiAyNCAmIDB4ZmYsIEhbM10gPj4gMTYgJiAweGZmLCBIWzNdID4+IDggJiAweGZmLCBIWzNdICYgMHhmZiwgSFs0XSA+PiAyNCAmIDB4ZmYsIEhbNF0gPj4gMTYgJiAweGZmLCBIWzRdID4+IDggJiAweGZmLCBIWzRdICYgMHhmZl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoYTE7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgYnl0ZXNUb1V1aWQgZnJvbSAnLi9ieXRlc1RvVXVpZC5qcyc7IC8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxudmFyIF9ub2RlSWQ7XG5cbnZhciBfY2xvY2tzZXE7IC8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxuXG5cbnZhciBfbGFzdE1TZWNzID0gMDtcbnZhciBfbGFzdE5TZWNzID0gMDsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCBmb3IgQVBJIGRldGFpbHNcblxuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IFtdO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTsgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG5cbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW3NlZWRCeXRlc1swXSB8IDB4MDEsIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXTtcbiAgICB9XG5cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH0gLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG5cblxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogRGF0ZS5ub3coKTsgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTsgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuXG4gIHZhciBkdCA9IG1zZWNzIC0gX2xhc3RNU2VjcyArIChuc2VjcyAtIF9sYXN0TlNlY3MpIC8gMTAwMDA7IC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9IC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcblxuXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9IC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcblxuXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInV1aWQudjEoKTogQ2FuJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjXCIpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxOyAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcblxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDsgLy8gYHRpbWVfbG93YFxuXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7IC8vIGB0aW1lX21pZGBcblxuICB2YXIgdG1oID0gbXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmOyAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjsgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG5cbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwOyAvLyBgY2xvY2tfc2VxX2xvd2BcblxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7IC8vIGBub2RlYFxuXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCBieXRlc1RvVXVpZChiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjE7IiwiaW1wb3J0IHYzNSBmcm9tICcuL3YzNS5qcyc7XG5pbXBvcnQgbWQ1IGZyb20gJy4vbWQ1LmpzJztcbnZhciB2MyA9IHYzNSgndjMnLCAweDMwLCBtZDUpO1xuZXhwb3J0IGRlZmF1bHQgdjM7IiwiaW1wb3J0IGJ5dGVzVG9VdWlkIGZyb20gJy4vYnl0ZXNUb1V1aWQuanMnO1xuXG5mdW5jdGlvbiB1dWlkVG9CeXRlcyh1dWlkKSB7XG4gIC8vIE5vdGU6IFdlIGFzc3VtZSB3ZSdyZSBiZWluZyBwYXNzZWQgYSB2YWxpZCB1dWlkIHN0cmluZ1xuICB2YXIgYnl0ZXMgPSBbXTtcbiAgdXVpZC5yZXBsYWNlKC9bYS1mQS1GMC05XXsyfS9nLCBmdW5jdGlvbiAoaGV4KSB7XG4gICAgYnl0ZXMucHVzaChwYXJzZUludChoZXgsIDE2KSk7XG4gIH0pO1xuICByZXR1cm4gYnl0ZXM7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyKSB7XG4gIHN0ciA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKTsgLy8gVVRGOCBlc2NhcGVcblxuICB2YXIgYnl0ZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5leHBvcnQgdmFyIEROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IHZhciBVUkwgPSAnNmJhN2I4MTEtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lLCB2ZXJzaW9uLCBoYXNoZnVuYykge1xuICBmdW5jdGlvbiBnZW5lcmF0ZVVVSUQodmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgb2ZmID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB2YWx1ZSA9IHN0cmluZ1RvQnl0ZXModmFsdWUpO1xuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJykgbmFtZXNwYWNlID0gdXVpZFRvQnl0ZXMobmFtZXNwYWNlKTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcigndmFsdWUgbXVzdCBiZSBhbiBhcnJheSBvZiBieXRlcycpO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShuYW1lc3BhY2UpIHx8IG5hbWVzcGFjZS5sZW5ndGggIT09IDE2KSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ25hbWVzcGFjZSBtdXN0IGJlIHV1aWQgc3RyaW5nIG9yIGFuIEFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzJyk7XG4gICAgfSAvLyBQZXIgNC4zXG5cblxuICAgIHZhciBieXRlcyA9IGhhc2hmdW5jKG5hbWVzcGFjZS5jb25jYXQodmFsdWUpKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gICAgaWYgKGJ1Zikge1xuICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgMTY7ICsraWR4KSB7XG4gICAgICAgIGJ1ZltvZmYgKyBpZHhdID0gYnl0ZXNbaWR4XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKGJ5dGVzKTtcbiAgfSAvLyBGdW5jdGlvbiNuYW1lIGlzIG5vdCBzZXR0YWJsZSBvbiBzb21lIHBsYXRmb3JtcyAoIzI3MClcblxuXG4gIHRyeSB7XG4gICAgZ2VuZXJhdGVVVUlELm5hbWUgPSBuYW1lOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgfSBjYXRjaCAoZXJyKSB7fSAvLyBGb3IgQ29tbW9uSlMgZGVmYXVsdCBleHBvcnQgc3VwcG9ydFxuXG5cbiAgZ2VuZXJhdGVVVUlELkROUyA9IEROUztcbiAgZ2VuZXJhdGVVVUlELlVSTCA9IFVSTDtcbiAgcmV0dXJuIGdlbmVyYXRlVVVJRDtcbn0iLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBieXRlc1RvVXVpZCBmcm9tICcuL2J5dGVzVG9VdWlkLmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT09ICdiaW5hcnknID8gbmV3IFVpbnQ4QXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgdmFyIHN0YXJ0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltzdGFydCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBzaGExIGZyb20gJy4vc2hhMS5qcyc7XG52YXIgdjUgPSB2MzUoJ3Y1JywgMHg1MCwgc2hhMSk7XG5leHBvcnQgZGVmYXVsdCB2NTsiLCJ2YXIgX2dsb2JhbFRoaXM7XG50cnkge1xuXHRfZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJ2VzNS1leHQvZ2xvYmFsJyk7XG59IGNhdGNoIChlcnJvcikge1xufSBmaW5hbGx5IHtcblx0aWYgKCFfZ2xvYmFsVGhpcyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyBfZ2xvYmFsVGhpcyA9IHdpbmRvdzsgfVxuXHRpZiAoIV9nbG9iYWxUaGlzKSB7IHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGRldGVybWluZSBnbG9iYWwgdGhpcycpOyB9XG59XG5cbnZhciBOYXRpdmVXZWJTb2NrZXQgPSBfZ2xvYmFsVGhpcy5XZWJTb2NrZXQgfHwgX2dsb2JhbFRoaXMuTW96V2ViU29ja2V0O1xudmFyIHdlYnNvY2tldF92ZXJzaW9uID0gcmVxdWlyZSgnLi92ZXJzaW9uJyk7XG5cblxuLyoqXG4gKiBFeHBvc2UgYSBXM0MgV2ViU29ja2V0IGNsYXNzIHdpdGgganVzdCBvbmUgb3IgdHdvIGFyZ3VtZW50cy5cbiAqL1xuZnVuY3Rpb24gVzNDV2ViU29ja2V0KHVyaSwgcHJvdG9jb2xzKSB7XG5cdHZhciBuYXRpdmVfaW5zdGFuY2U7XG5cblx0aWYgKHByb3RvY29scykge1xuXHRcdG5hdGl2ZV9pbnN0YW5jZSA9IG5ldyBOYXRpdmVXZWJTb2NrZXQodXJpLCBwcm90b2NvbHMpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdG5hdGl2ZV9pbnN0YW5jZSA9IG5ldyBOYXRpdmVXZWJTb2NrZXQodXJpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiAnbmF0aXZlX2luc3RhbmNlJyBpcyBhbiBpbnN0YW5jZSBvZiBuYXRpdmVXZWJTb2NrZXQgKHRoZSBicm93c2VyJ3MgV2ViU29ja2V0XG5cdCAqIGNsYXNzKS4gU2luY2UgaXQgaXMgYW4gT2JqZWN0IGl0IHdpbGwgYmUgcmV0dXJuZWQgYXMgaXQgaXMgd2hlbiBjcmVhdGluZyBhblxuXHQgKiBpbnN0YW5jZSBvZiBXM0NXZWJTb2NrZXQgdmlhICduZXcgVzNDV2ViU29ja2V0KCknLlxuXHQgKlxuXHQgKiBFQ01BU2NyaXB0IDU6IGh0dHA6Ly9iY2xhcnkuY29tLzIwMDQvMTEvMDcvI2EtMTMuMi4yXG5cdCAqL1xuXHRyZXR1cm4gbmF0aXZlX2luc3RhbmNlO1xufVxuaWYgKE5hdGl2ZVdlYlNvY2tldCkge1xuXHRbJ0NPTk5FQ1RJTkcnLCAnT1BFTicsICdDTE9TSU5HJywgJ0NMT1NFRCddLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXM0NXZWJTb2NrZXQsIHByb3AsIHtcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBOYXRpdmVXZWJTb2NrZXRbcHJvcF07IH1cblx0XHR9KTtcblx0fSk7XG59XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgICd3M2N3ZWJzb2NrZXQnIDogTmF0aXZlV2ViU29ja2V0ID8gVzNDV2ViU29ja2V0IDogbnVsbCxcbiAgICAndmVyc2lvbicgICAgICA6IHdlYnNvY2tldF92ZXJzaW9uXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uO1xuIiwiLyogZ2xvYmFsIE5BRiAqL1xuXG5pbXBvcnQgeyBDbGllbnQgYXMgQ29seXNldXNDbGllbnQgfSBmcm9tIFwiY29seXNldXMuanNcIjtcbmltcG9ydCB7IENsaWVudCBhcyBJb25DbGllbnQsIExvY2FsU3RyZWFtIH0gZnJvbSBcImlvbi1zZGstanNcIjtcblxuY29uc3QgSW9uU3RhdGUgPSB7XG4gICAgQ0xPU0VEOiAwLFxuICAgIE9QRU46IDEsXG4gICAgSk9JTkVEOiAyLFxuICAgIEZBSUxFRDogLTFcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29seXNldXNJb25BZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hcHAgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgdGhpcy5yb29tTmFtZSA9IFwiaHVic1wiO1xuICAgICAgICB0aGlzLnJvb20gPSBudWxsO1xuICAgICAgICB0aGlzLnJvb21EYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2Vzc2lvbklkID0gbnVsbDtcblxuICAgICAgICB0aGlzLnBsYXllcnMgPSB7fTtcbiAgICAgICAgdGhpcy5zdHJlYW1zID0gbnVsbDtcbiAgICAgICAgdGhpcy5wZW5kaW5nU3RyZWFtUmVxdWVzdHMgPSBudWxsO1xuXG4gICAgICAgIHRoaXMudGltZU9mZnNldHMgPSBbXTtcbiAgICAgICAgdGhpcy5zZXJ2ZXJUaW1lUmVxdWVzdHMgPSAwO1xuICAgICAgICB0aGlzLmF2Z1RpbWVPZmZzZXQgPSAwO1xuXG4gICAgICAgIHRoaXMuYmxvY2tlZENsaWVudHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZnJvemVuVXBkYXRlcyA9IG5ldyBNYXAoKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjcmVhdGVSb29tOiB0cnVlLFxuICAgICAgICAgICAgdXNlSW9uOiB0cnVlLFxuICAgICAgICAgICAgc3RhcnRMb2NhbFN0cmVhbTogZmFsc2UsXG4gICAgICAgICAgICBtZWRpYU9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBhdWRpbzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2aWRlbzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRBdWRpb0RldmljZTogXCJcIixcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFZpZGVvRGV2aWNlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHJlc29sdXRpb246IFwidmdhXCIsXG4gICAgICAgICAgICAgICAgYmFuZHdpZHRoOiAxMDI0LFxuICAgICAgICAgICAgICAgIGNvZGVjOiBcIlZQOVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0U2VydmVyVXJsKHNlcnZlclVybHMpIHtcbiAgICAgICAgdGhpcy5jb2x5c2V1c1VybCA9IHNlcnZlclVybHNbMF07XG4gICAgICAgIHRoaXMuaW9uVXJsID0gc2VydmVyVXJsc1sxXTtcbiAgICB9XG5cbiAgICBzZXRBcHAoYXBwTmFtZSkge1xuICAgICAgICB0aGlzLmFwcCA9IGFwcE5hbWU7XG4gICAgfVxuXG4gICAgc2V0Um9vbShyb29tTmFtZSkge1xuICAgICAgICB0aGlzLnJvb21OYW1lID0gcm9vbU5hbWU7XG4gICAgfVxuXG4gICAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBzZXRXZWJSdGNPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLm1lZGlhT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLm1lZGlhT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgc2V0U2VydmVyQ29ubmVjdExpc3RlbmVycyhzdWNjZXNzTGlzdGVuZXIsIGZhaWx1cmVMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmNvbm5lY3RTdWNjZXNzID0gc3VjY2Vzc0xpc3RlbmVyO1xuICAgICAgICB0aGlzLmNvbm5lY3RGYWlsdXJlID0gZmFpbHVyZUxpc3RlbmVyO1xuICAgIH1cblxuICAgIHNldFJvb21PY2N1cGFudExpc3RlbmVyKG9jY3VwYW50TGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5vY2N1cGFudExpc3RlbmVyID0gb2NjdXBhbnRMaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBzZXREYXRhQ2hhbm5lbExpc3RlbmVycyhvcGVuTGlzdGVuZXIsIGNsb3NlZExpc3RlbmVyLCBtZXNzYWdlTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXIgPSBvcGVuTGlzdGVuZXI7XG4gICAgICAgIHRoaXMuY2xvc2VkTGlzdGVuZXIgPSBjbG9zZWRMaXN0ZW5lcjtcbiAgICAgICAgdGhpcy5tZXNzYWdlTGlzdGVuZXIgPSBtZXNzYWdlTGlzdGVuZXI7XG4gICAgfVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbHlzZXVzVXJsIHx8IHRoaXMuY29seXNldXNVcmwgPT09IFwiL1wiKSB7XG4gICAgICAgICAgICBpZiAobG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHlzZXVzVXJsID0gXCJ3c3M6Ly9cIiArIGxvY2F0aW9uLmhvc3QgKyAnOjI1NjcnO1xuICAgICAgICAgICAgICAgIHRoaXMuaW9uVXJsID0gXCJ3c3M6Ly9cIiArIGxvY2F0aW9uLmhvc3QgKyAnOjg0NDMnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHlzZXVzVXJsID0gXCJ3czovL1wiICsgbG9jYXRpb24uaG9zdCArICc6MjU2Nyc7XG4gICAgICAgICAgICAgICAgdGhpcy5pb25VcmwgPSBcIndzOi8vXCIgKyBsb2NhdGlvbi5ob3N0ICsgJzo4NDQzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIE5BRi5sb2cud3JpdGUoXCJBdHRlbXB0aW5nIHRvIGNvbm5lY3QgdG8gY29seXNldXNcIik7XG4gICAgICAgIGNvbnN0IGNvbHlzZXVzQ29ubmVjdGlvbiA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29seXNldXMgPSBuZXcgQ29seXNldXNDbGllbnQodGhpcy5jb2x5c2V1c1VybCk7XG4gICAgICAgICAgICB0aGlzLmpvaW5Sb29tKClcbiAgICAgICAgICAgICAgICAudGhlbihyZXNvbHZlKVxuICAgICAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy51c2VJb24pIHtcbiAgICAgICAgICAgIGNvbHlzZXVzQ29ubmVjdGlvbi50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdGhpcy5pb25VcmwsXG4gICAgICAgICAgICAgICAgICAgIGxvZ2xldmVsOiBcInRyYWNlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pb24gPSBuZXcgSW9uQ2xpZW50KGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pb24ub24oXCJ0cmFuc3BvcnQtb3BlblwiLCB0aGlzLm9uSW9uT3Blbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlvbi5vbihcInRyYW5zcG9ydC1jbG9zZWRcIiwgdGhpcy5vbklvbkNsb3NlZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmVhbXMgPSB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdTdHJlYW1SZXF1ZXN0cyA9IHt9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtjb2x5c2V1c0Nvbm5lY3Rpb24sIHRoaXMudXBkYXRlVGltZU9mZnNldCgpXSk7XG4gICAgfVxuXG4gICAgam9pblJvb20ob3B0aW9ucykge1xuICAgICAgICBOQUYubG9nLndyaXRlKFwiSm9pbmluZyByb29tXCIsIHRoaXMucm9vbU5hbWUpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNyZWF0ZVJvb20pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbHlzZXVzLmpvaW5PckNyZWF0ZSh0aGlzLnJvb21OYW1lLCBvcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKHRoaXMub25Kb2luLmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMub25Kb2luRXJyb3IuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb2x5c2V1cy5qb2luKHRoaXMucm9vbU5hbWUsIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4odGhpcy5vbkpvaW4uYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5vbkpvaW5FcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSm9pbihyb29tKSB7XG4gICAgICAgIHRoaXMucm9vbSA9IHJvb207XG4gICAgICAgIHRoaXMuc2Vzc2lvbklkID0gcm9vbS5zZXNzaW9uSWQ7XG4gICAgICAgIHJvb20ub25NZXNzYWdlKFwicm9vbURhdGFcIiwgdGhpcy5vblJvb21EYXRhLmJpbmQodGhpcykpO1xuICAgICAgICByb29tLm9uTWVzc2FnZShcInVzZXJEYXRhXCIsIHRoaXMub25Vc2VyRGF0YS5iaW5kKHRoaXMpKTtcbiAgICAgICAgcm9vbS5vbk1lc3NhZ2UoXCJuYWZcIiwgdGhpcy5vbk5hZi5iaW5kKHRoaXMpKTtcbiAgICAgICAgcm9vbS5vbk1lc3NhZ2UoXCJjaGF0XCIsIHRoaXMub25DaGF0LmJpbmQodGhpcykpO1xuICAgICAgICByb29tLm9uU3RhdGVDaGFuZ2Uub25jZSh0aGlzLm9uSW5pdGlhbFN0YXRlLmJpbmQodGhpcykpO1xuICAgICAgICByb29tLm9uU3RhdGVDaGFuZ2UodGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcykpO1xuICAgICAgICBpZiAocm9vbS5zdGF0ZS5wbGF5ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbdGhpcy5zZXNzaW9uSWRdID0ge307XG4gICAgICAgICAgICByb29tLnN0YXRlLnBsYXllcnMub25BZGQgPSB0aGlzLm9uQWRkUGxheWVyLmJpbmQodGhpcyk7XG4gICAgICAgICAgICByb29tLnN0YXRlLnBsYXllcnMub25SZW1vdmUgPSB0aGlzLm9uUmVtb3ZlUGxheWVyLmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW9uU3RhdGUgPj0gSW9uU3RhdGUuT1BFTikge1xuICAgICAgICAgICAgdGhpcy5qb2luSW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkpvaW5FcnJvcihlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlNvY2tldCBjb25uZWN0aW9uIGZhaWx1cmVcIiwgZXJyKTtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdEZhaWx1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdEZhaWx1cmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUm9vbURhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLnJvb21EYXRhID0gZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdFN1Y2Nlc3ModGhpcy5zZXNzaW9uSWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Vc2VyRGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIGdldEF2YXRhcihhdmF0YXJJZCkge1xuICAgICAgICBjb25zdCBhdmF0YXJzID0gdGhpcy5yb29tRGF0YS5hdmF0YXJzLmVudHJpZXM7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxhdmF0YXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXZhdGFyc1tpXS5pZCA9PT0gYXZhdGFySWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXZhdGFyc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEF2YXRhclNyYyhhdmF0YXJJZCkge1xuICAgICAgICBjb25zdCBhdmF0YXIgPSB0aGlzLmdldEF2YXRhcihhdmF0YXJJZCk7XG4gICAgICAgIHJldHVybiBhdmF0YXIgJiYgYXZhdGFyLmdsdGZzICYmIGF2YXRhci5nbHRmcy5hdmF0YXI7XG4gICAgfVxuXG4gICAgb25OYWYoZGF0YSkge1xuICAgICAgICB0aGlzLm9uRGF0YShkYXRhLnNlc3Npb25JZCwgZGF0YS50eXBlLCBkYXRhLmRhdGEpO1xuICAgIH1cblxuICAgIG9uQ2hhdChkYXRhKSB7XG4gICAgICAgIHRoaXMub25EYXRhKGRhdGEuc2Vzc2lvbklkLCBcImNoYXRcIiwgZGF0YS5tZXNzYWdlLCBkYXRhLmZyb20pO1xuICAgIH1cblxuICAgIG9uRGF0YShzZXNzaW9uSWQsIHR5cGUsIGRhdGEsIGZyb20pIHtcbiAgICAgICAgaWYgKHRoaXMuZnJvemVuKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxpc3RlbmVyKHNlc3Npb25JZCwgdHlwZSwgZGF0YSwgZnJvbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZW5kQ2hhdE1zZyhtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMucm9vbS5zZW5kKFwiY2hhdFwiLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBvbkluaXRpYWxTdGF0ZShzdGF0ZSkge1xuICAgICAgICAvL3RoaXMubWVzc2FnZUxpc3RlbmVyKG51bGwsICdzdGF0ZScsIHN0YXRlKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIG9uU3RhdGVDaGFuZ2Uoc3RhdGUpIHtcbiAgICAgICAgLy90aGlzLm1lc3NhZ2VMaXN0ZW5lcihudWxsLCAnc3RhdGUnLCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgb25BZGRQbGF5ZXIocGxheWVyLCBzZXNzaW9uSWQpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJzW3Nlc3Npb25JZF0gPSBwbGF5ZXI7XG4gICAgICAgIHBsYXllci5vbkNoYW5nZSA9IChjaGFuZ2VzKSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VzLmZvckVhY2goY2hhbmdlID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNoYW5nZS5maWVsZCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicHJvZmlsZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZVByb2ZpbGUoY2hhbmdlLnZhbHVlLCBjaGFuZ2UucHJldmlvdXNWYWx1ZSwgc2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdwcmVzZW5jZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlUHJlc2VuY2UoY2hhbmdlLnZhbHVlLCBjaGFuZ2UucHJldmlvdXNWYWx1ZSwgc2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9wZW5MaXN0ZW5lcihzZXNzaW9uSWQpO1xuICAgICAgICBpZiAodGhpcy5vY2N1cGFudExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLm9jY3VwYW50TGlzdGVuZXIodGhpcy5wbGF5ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2Vzc2lvbklkID09PSB0aGlzLnNlc3Npb25JZCkge1xuICAgICAgICAgICAgcGxheWVyLnByb2ZpbGUuZGlzcGxheU5hbWUgPSB3aW5kb3cuQVBQLnN0b3JlLnN0YXRlLnByb2ZpbGUuZGlzcGxheU5hbWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh7IHByb2ZpbGU6IHsgZGlzcGxheU5hbWU6IHBsYXllci5wcm9maWxlLmRpc3BsYXlOYW1lIH0gfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGV0YWlsID0geyBzZXNzaW9uSWQsIHBsYXllciB9O1xuICAgICAgICBkb2N1bWVudC5ib2R5LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicGxheWVyX2FkZGVkXCIsIHsgZGV0YWlsIH0pKTtcbiAgICB9XG5cbiAgICBvblJlbW92ZVBsYXllcihwbGF5ZXIsIHNlc3Npb25JZCkge1xuICAgICAgICB0aGlzLnBsYXllcnNbc2Vzc2lvbklkXS5vbkNoYW5nZSA9IHZvaWQgMDtcbiAgICAgICAgZGVsZXRlIHRoaXMucGxheWVyc1tzZXNzaW9uSWRdO1xuICAgICAgICB0aGlzLmNsb3NlZExpc3RlbmVyKHNlc3Npb25JZCk7XG4gICAgICAgIGlmICh0aGlzLm9jY3VwYW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMub2NjdXBhbnRMaXN0ZW5lcih0aGlzLnBsYXllcnMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRldGFpbCA9IHsgc2Vzc2lvbklkLCBwbGF5ZXIgfTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInBsYXllcl9yZW1vdmVkXCIsIHsgZGV0YWlsIH0pKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZVByb2ZpbGUocHJvZmlsZSwgcHJldlByb2ZpbGUsIHNlc3Npb25JZCkge1xuICAgICAgICBjb25zdCBkZXRhaWwgPSB7IHNlc3Npb25JZCwgIHByb2ZpbGUsIHByZXZpb3VzOiBwcmV2UHJvZmlsZSB9O1xuICAgICAgICBkb2N1bWVudC5ib2R5LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicHJvZmlsZV91cGRhdGVkXCIsIHsgZGV0YWlsIH0pKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZVByZXNlbmNlKHByZXNlbmNlLCBwcmV2UHJlc2VuY2UsIHNlc3Npb25JZCkge1xuICAgICAgICBjb25zdCBkZXRhaWwgPSB7IHNlc3Npb25JZCwgcHJlc2VuY2UsIHByZXZpb3VzOiBwcmV2UHJlc2VuY2UgfTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInByZXNlbmNlX3VwZGF0ZWRcIiwgeyBkZXRhaWwgfSkpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkYXRhKSB7XG4gICAgICAgIHRoaXMucm9vbS5zZW5kKCd1cGRhdGUnLCBkYXRhKTtcbiAgICB9XG5cbiAgICBzZW5kRW50ZXJpbmcoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKHsgcHJlc2VuY2U6IHsgZW50ZXJpbmc6IHRydWUgfSB9KTtcbiAgICB9XG5cbiAgICBzZW5kRW50ZXJpbmdDYW5jZWxsZWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKHsgcHJlc2VuY2U6IHsgZW50ZXJpbmc6IGZhbHNlIH0gfSk7XG4gICAgfVxuXG4gICAgc2VuZEVudGVyZWQoKSB7XG4gICAgICAgIGNvbnN0IHByZXNlbmNlID0ge1xuICAgICAgICAgICAgcHJlc2VuY2U6IFwicm9vbVwiLFxuICAgICAgICAgICAgc2NlbmU6IHRoaXMucm9vbURhdGEuc2NlbmUubmFtZSxcbiAgICAgICAgICAgIGVudGVyaW5nOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZSh7IHByZXNlbmNlOiBwcmVzZW5jZSB9KTtcbiAgICB9XG5cbiAgICBvbklvbk9wZW4oKSB7XG4gICAgICAgIHRoaXMuaW9uU3RhdGUgPSBJb25TdGF0ZS5PUEVOO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXJ0TG9jYWxTdHJlYW0pIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMb2NhbFN0cmVhbSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgKHRoaXMudXNlckRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuam9pbklvbigpO1xuICAgICAgICAvL31cbiAgICB9XG5cbiAgICBvbklvbkNsb3NlZCgpIHtcbiAgICAgICAgdGhpcy5pb25TdGF0ZSA9IElvblN0YXRlLkNMT1NFRDtcbiAgICB9XG5cbiAgICBhc3luYyBqb2luSW9uKCkge1xuICAgICAgICB0aGlzLmlvbi5vbihcInBlZXItam9pblwiLCB0aGlzLm9uUGVlckpvaW4uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuaW9uLm9uKFwicGVlci1sZWF2ZVwiLCB0aGlzLm9uUGVlckxlYXZlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmlvbi5vbihcInN0cmVhbS1hZGRcIiwgdGhpcy5vblN0cmVhbUFkZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5pb24ub24oXCJzdHJlYW0tcmVtb3ZlXCIsIHRoaXMub25TdHJlYW1SZW1vdmUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuaW9uLm9uKFwiYnJvYWRjYXN0XCIsIHRoaXMub25Ccm9hZGNhc3QuYmluZCh0aGlzKSk7XG4gICAgICAgIC8vIHRvZG86IHNob3VsZCB1c2UgYSBKV1QgcmV0dXJuZWQgYnkgQ29seXNldXNcbiAgICAgICAgYXdhaXQgdGhpcy5pb24uam9pbih0aGlzLnJvb20uaWQsIHtcbiAgICAgICAgICAgIC8vIHRvZG86IGZpeFxuICAgICAgICAgICAgLy8gbmFtZTogdGhpcy51c2VyRGF0YSAmJiB0aGlzLnVzZXJEYXRhLm5hbWUgfHwgXCJBbm9ueW1vdXNcIixcbiAgICAgICAgICAgIC8vIHNlc3Npb25JZDogdGhpcy5yb29tLnNlc3Npb25JZFxuICAgICAgICAgICAgbmFtZTogdGhpcy5zZXNzaW9uSWRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaW9uU3RhdGUgPSBJb25TdGF0ZS5KT0lORUQ7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsU3RyZWFtKSB7XG4gICAgICAgICAgICB0aGlzLmlvbi5wdWJsaXNoKHRoaXMubG9jYWxTdHJlYW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QZWVySm9pbih1aWQsIGluZm8pIHtcbiAgICAgICAgTkFGLmxvZy53cml0ZShcIlBlZXIgam9pbiBcIiwgdWlkLCBpbmZvKTtcbiAgICB9XG5cbiAgICBvblBlZXJMZWF2ZSh1aWQpIHtcbiAgICAgICAgTkFGLmxvZy53cml0ZShcIlBlZXIgbGVhdmUgXCIsIHVpZCk7XG4gICAgfVxuXG4gICAgYXN5bmMgb25TdHJlYW1BZGQobWlkLCBpbmZvKSB7XG4gICAgICAgIGlmICh0aGlzLmlvbikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zdWJzY3JpYmUobWlkLCBpbmZvKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3RyZWFtUmVtb3ZlKHN0cmVhbSkge1xuXG4gICAgfVxuXG4gICAgb25Ccm9hZGNhc3QocmlkLCBtaWQsIGluZm8pIHtcbiAgICAgICAgTkFGLmxvZy53cml0ZShcIklvbiBicm9hZGNhc3QgXCIsIHJpZCwgbWlkLCBpbmZvKTtcbiAgICB9XG5cbiAgICBhc3luYyBzdWJzY3JpYmUobWlkLCBpbmZvKSB7XG4gICAgICAgIGNvbnN0IHNlc3Npb25JZCA9IGluZm8ubmFtZTtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgdGhpcy5pb24uc3Vic2NyaWJlKG1pZCk7XG4gICAgICAgIHN0cmVhbS5pbmZvID0gaW5mbztcbiAgICAgICAgdGhpcy5zZXRNZWRpYVN0cmVhbShzZXNzaW9uSWQsIHN0cmVhbSk7XG4gICAgfVxuXG4gICAgYXN5bmMgdW5zdWJzY3JpYmUoc3RyZWFtKSB7XG4gICAgICAgIGNvbnN0IHNlc3Npb25JZCA9IHN0cmVhbS5pbmZvLm5hbWU7XG4gICAgICAgIGF3YWl0IHN0cmVhbS51bnN1YnNjcmliZSgpO1xuICAgICAgICBkZWxldGUgdGhpcy5zdHJlYW1zW3Nlc3Npb25JZF07XG4gICAgfVxuXG4gICAgc2hvdWxkU3RhcnRDb25uZWN0aW9uVG8oY2xpZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRDb25uZWN0U3RhdHVzKHNlc3Npb25JZCkge1xuICAgICAgICBjb25zdCBjb25uZWN0ZWQgPSB0aGlzLnN0cmVhbXNbc2Vzc2lvbklkXTtcbiAgICAgICAgaWYgKGNvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIE5BRi5hZGFwdGVycy5JU19DT05ORUNURUQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTkFGLmFkYXB0ZXJzLk5PVF9DT05ORUNURUQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZW5kRGF0YSh0bywgdHlwZSwgZGF0YSkge1xuICAgICAgICB0aGlzLnNlbmREYXRhR3VhcmFudGVlZCh0bywgdHlwZSwgZGF0YSk7XG4gICAgfVxuXG4gICAgc2VuZERhdGFHdWFyYW50ZWVkKHRvLCB0eXBlLCBkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLnJvb20pIHtcbiAgICAgICAgICAgIHRoaXMucm9vbS5zZW5kKFwibmFmXCIsIHsgdG8sIHR5cGUsIGRhdGEgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOQUYubG9nLndhcm4oJ1Jvb20gbm90IGpvaW5lZCB5ZXQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJyb2FkY2FzdERhdGEodHlwZSwgZGF0YSkge1xuICAgICAgICB0aGlzLmJyb2FkY2FzdERhdGFHdWFyYW50ZWVkKHR5cGUsIGRhdGEpO1xuICAgIH1cblxuICAgIGJyb2FkY2FzdERhdGFHdWFyYW50ZWVkKHR5cGUsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMucm9vbSkge1xuICAgICAgICAgICAgdGhpcy5yb29tLnNlbmQoXCJuYWZcIiwgeyB0eXBlLCBkYXRhIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTkFGLmxvZy53YXJuKCdSb29tIG5vdCBqb2luZWQgeWV0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNZWRpYVN0cmVhbShzZXNzaW9uSWQsIHR5cGUgPSBcImF1ZGlvXCIpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RyZWFtc1tzZXNzaW9uSWRdKSB7XG4gICAgICAgICAgICBOQUYubG9nLndyaXRlKGBBbHJlYWR5IGhhZCAke3R5cGV9IGZvciAke3Nlc3Npb25JZH1gKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zdHJlYW1zW3Nlc3Npb25JZF1bdHlwZV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTkFGLmxvZy53cml0ZShgV2FpdGluZyBvbiAke3R5cGV9IGZvciAke3Nlc3Npb25JZH1gKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5wZW5kaW5nU3RyZWFtUmVxdWVzdHNbc2Vzc2lvbklkXSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ1N0cmVhbVJlcXVlc3RzW3Nlc3Npb25JZF0gPSB7fTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nU3RyZWFtUmVxdWVzdHNbc2Vzc2lvbklkXS5hdWRpbyA9IHsgcmVzb2x2ZSwgcmVqZWN0IH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW9Qcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdTdHJlYW1SZXF1ZXN0c1tzZXNzaW9uSWRdLnZpZGVvID0geyByZXNvbHZlLCByZWplY3QgfTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ1N0cmVhbVJlcXVlc3RzW3Nlc3Npb25JZF0uYXVkaW8ucHJvbWlzZSA9IGF1ZGlvUHJvbWlzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdTdHJlYW1SZXF1ZXN0c1tzZXNzaW9uSWRdLnZpZGVvLnByb21pc2UgPSB2aWRlb1Byb21pc2U7XG5cbiAgICAgICAgICAgICAgICBhdWRpb1Byb21pc2UuY2F0Y2goZSA9PiBjb25zb2xlLndhcm4oYCR7c2Vzc2lvbklkfSBnZXRNZWRpYVN0cmVhbSBBdWRpbyBFcnJvcmAsIGUpKTtcbiAgICAgICAgICAgICAgICB2aWRlb1Byb21pc2UuY2F0Y2goZSA9PiBjb25zb2xlLndhcm4oYCR7c2Vzc2lvbklkfSBnZXRNZWRpYVN0cmVhbSBWaWRlbyBFcnJvcmAsIGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBlbmRpbmdTdHJlYW1SZXF1ZXN0c1tzZXNzaW9uSWRdW3R5cGVdLnByb21pc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRNZWRpYVN0cmVhbShzZXNzaW9uSWQsIHN0cmVhbSkge1xuICAgICAgICBpZiAoc3RyZWFtKSB7XG4gICAgICAgICAgICBjb25zdCBhdWRpb1N0cmVhbSA9IG5ldyBNZWRpYVN0cmVhbSgpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IGF1ZGlvU3RyZWFtLmFkZFRyYWNrKHRyYWNrKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgTkFGLmxvZy53cml0ZShgJHtzZXNzaW9uSWR9IHNldE1lZGlhU3RyZWFtIEF1ZGlvIEVycm9yYCwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB2aWRlb1N0cmVhbSA9IG5ldyBNZWRpYVN0cmVhbSgpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IHZpZGVvU3RyZWFtLmFkZFRyYWNrKHRyYWNrKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoYCR7c2Vzc2lvbklkfSBzZXRNZWRpYVN0cmVhbSBWaWRlbyBFcnJvcmAsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdHJlYW1zW3Nlc3Npb25JZF0gPSB7IGF1ZGlvOiBhdWRpb1N0cmVhbSwgdmlkZW86IHZpZGVvU3RyZWFtIH07XG4gICAgICAgICAgICBpZiAodGhpcy5wZW5kaW5nU3RyZWFtUmVxdWVzdHNbc2Vzc2lvbklkXSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ1N0cmVhbVJlcXVlc3RzW3Nlc3Npb25JZF0uYXVkaW8ucmVzb2x2ZShhdWRpb1N0cmVhbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nU3RyZWFtUmVxdWVzdHNbc2Vzc2lvbklkXS52aWRlby5yZXNvbHZlKHZpZGVvU3RyZWFtKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nU3RyZWFtUmVxdWVzdHNbc2Vzc2lvbklkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN0cmVhbXNbc2Vzc2lvbklkXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXRhaWwgPSB7IHN0cmVhbSwgc2Vzc2lvbklkIH07XG4gICAgICAgIGRvY3VtZW50LmJvZHkuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3NldF9tZWRpYV9zdHJlYW0nLCB7IGRldGFpbCB9KSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0TG9jYWxNZWRpYVN0cmVhbShzdHJlYW0pIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxTdHJlYW0pIHtcbiAgICAgICAgICAgIGxldCB0cmFja3MgPSB0aGlzLmxvY2FsU3RyZWFtLmdldFRyYWNrcygpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRyYWNrcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRyYWNrc1tpXS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmxvY2FsU3RyZWFtLnVucHVibGlzaCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdHJlYW0pIHtcbiAgICAgICAgICAgIGlmICghKHN0cmVhbSBpbnN0YW5jZW9mIExvY2FsU3RyZWFtKSkge1xuICAgICAgICAgICAgICAgIHN0cmVhbSA9IG5ldyBMb2NhbFN0cmVhbShzdHJlYW0sIHRoaXMub3B0aW9ucy5tZWRpYU9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9jYWxTdHJlYW0gPSBzdHJlYW07XG4gICAgICAgIHRoaXMuc2V0TWVkaWFTdHJlYW0odGhpcy5zZXNzaW9uSWQsIHRoaXMubG9jYWxTdHJlYW0pO1xuICAgICAgICBpZiAodGhpcy5sb2NhbFN0cmVhbSAmJiB0aGlzLmlvblN0YXRlID49IElvblN0YXRlLkpPSU5FRCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5pb24ucHVibGlzaCh0aGlzLmxvY2FsU3RyZWFtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHN0YXJ0TG9jYWxTdHJlYW0oKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2V0TG9jYWxNZWRpYVN0cmVhbShudWxsKTtcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRMb2NhbE1lZGlhU3RyZWFtKGF3YWl0IExvY2FsU3RyZWFtLmdldFVzZXJNZWRpYSh0aGlzLm9wdGlvbnMubWVkaWFPcHRpb25zKSk7XG4gICAgfVxuXG4gICAgZW5hYmxlTWljcm9waG9uZShlbmFibGVkKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsU3RyZWFtKSB7XG4gICAgICAgICAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxTdHJlYW0udW5tdXRlKFwiYXVkaW9cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RyZWFtLm11dGUoXCJhdWRpb1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUZyZWV6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJvemVuKSB7XG4gICAgICAgICAgICB0aGlzLnVuZnJlZXplKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZyZWV6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnJlZXplKCkge1xuICAgICAgICB0aGlzLmZyb3plbiA9IHRydWU7XG4gICAgfVxuXG4gICAgdW5mcmVlemUoKSB7XG4gICAgICAgIHRoaXMuZnJvemVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmx1c2hQZW5kaW5nVXBkYXRlcygpO1xuICAgIH1cblxuICAgIGZsdXNoUGVuZGluZ1VwZGF0ZXMoKSB7XG4gICAgICAgIGZvciAoY29uc3QgW25ldHdvcmtJZCwgbWVzc2FnZV0gb2YgdGhpcy5mcm96ZW5VcGRhdGVzKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0UGVuZGluZ0RhdGEobmV0d29ya0lkLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIGlmICghZGF0YSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIE92ZXJyaWRlIHRoZSBkYXRhIHR5cGUgb24gXCJ1bVwiIG1lc3NhZ2VzIHR5cGVzLCBzaW5jZSB3ZSBleHRyYWN0IGVudGl0eSB1cGRhdGVzIGZyb20gXCJ1bVwiIG1lc3NhZ2VzIGludG9cbiAgICAgICAgICAgIC8vIGluZGl2aWR1YWwgZnJvemVuVXBkYXRlcyBpbiBzdG9yZVNpbmdsZU1lc3NhZ2UuXG4gICAgICAgICAgICBjb25zdCBkYXRhVHlwZSA9IG1lc3NhZ2UuZGF0YVR5cGUgPT09IFwidW1cIiA/IFwidVwiIDogbWVzc2FnZS5kYXRhVHlwZTtcblxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlTGlzdGVuZXIobnVsbCwgZGF0YVR5cGUsIGRhdGEsIG1lc3NhZ2Uuc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZyb3plblVwZGF0ZXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBnZXRQZW5kaW5nRGF0YShuZXR3b3JrSWQsIG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKCFtZXNzYWdlKSByZXR1cm4gbnVsbDtcblxuICAgICAgICBsZXQgZGF0YSA9IG1lc3NhZ2UuZGF0YVR5cGUgPT09IFwidW1cIiA/IHRoaXMuZGF0YUZvclVwZGF0ZU11bHRpTWVzc2FnZShuZXR3b3JrSWQsIG1lc3NhZ2UpIDogbWVzc2FnZS5kYXRhO1xuXG4gICAgICAgIC8vIElnbm9yZSBtZXNzYWdlcyByZWxhdGluZyB0byB1c2VycyB3aG8gaGF2ZSBkaXNjb25uZWN0ZWQgc2luY2UgZnJlZXppbmcsIHRoZWlyIGVudGl0aWVzXG4gICAgICAgIC8vIHdpbGwgaGF2ZSBhbGVhZHkgYmVlbiByZW1vdmVkIGJ5IE5BRi5cbiAgICAgICAgLy8gTm90ZSB0aGF0IGRlbGV0ZSBtZXNzYWdlcyBoYXZlIG5vIFwib3duZXJcIiBzbyB3ZSBoYXZlIHRvIGNoZWNrIGZvciB0aGF0IGFzIHdlbGwuXG4gICAgICAgIGlmIChkYXRhLm93bmVyICYmICF0aGlzLnBsYXllcnNbZGF0YS5vd25lcl0pIHJldHVybiBudWxsO1xuXG4gICAgICAgIC8vIElnbm9yZSBtZXNzYWdlcyBmcm9tIHVzZXJzIHRoYXQgd2UgbWF5IGhhdmUgYmxvY2tlZCB3aGlsZSBmcm96ZW4uXG4gICAgICAgIGlmIChkYXRhLm93bmVyICYmIHRoaXMuYmxvY2tlZENsaWVudHMuaGFzKGRhdGEub3duZXIpKSByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIHN0b3JlTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIGlmIChtZXNzYWdlLmRhdGFUeXBlID09PSBcInVtXCIpIHsgLy8gVXBkYXRlTXVsdGlcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbWVzc2FnZS5kYXRhLmQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZVNpbmdsZU1lc3NhZ2UobWVzc2FnZSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlU2luZ2xlTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0b3JlU2luZ2xlTWVzc2FnZShtZXNzYWdlLCBpbmRleCkge1xuICAgICAgICBjb25zdCBkYXRhID0gaW5kZXggIT09IHVuZGVmaW5lZCA/IG1lc3NhZ2UuZGF0YS5kW2luZGV4XSA6IG1lc3NhZ2UuZGF0YTtcbiAgICAgICAgY29uc3QgZGF0YVR5cGUgPSBtZXNzYWdlLmRhdGFUeXBlO1xuICAgICAgICBjb25zdCBzb3VyY2UgPSBtZXNzYWdlLnNvdXJjZTtcblxuICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBkYXRhLm5ldHdvcmtJZDtcblxuICAgICAgICBpZiAoIXRoaXMuZnJvemVuVXBkYXRlcy5oYXMobmV0d29ya0lkKSkge1xuICAgICAgICAgICAgdGhpcy5mcm96ZW5VcGRhdGVzLnNldChuZXR3b3JrSWQsIG1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3RvcmVkTWVzc2FnZSA9IHRoaXMuZnJvemVuVXBkYXRlcy5nZXQobmV0d29ya0lkKTtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlZERhdGEgPSBzdG9yZWRNZXNzYWdlLmRhdGFUeXBlID09PSBcInVtXCIgPyB0aGlzLmRhdGFGb3JVcGRhdGVNdWx0aU1lc3NhZ2UobmV0d29ya0lkLCBzdG9yZWRNZXNzYWdlKSA6IHN0b3JlZE1lc3NhZ2UuZGF0YTtcblxuICAgICAgICAgICAgLy8gQXZvaWQgdXBkYXRpbmcgY29tcG9uZW50cyBpZiB0aGUgZW50aXR5IGRhdGEgcmVjZWl2ZWQgZGlkIG5vdCBjb21lIGZyb20gdGhlIGN1cnJlbnQgb3duZXIuXG4gICAgICAgICAgICBjb25zdCBpc091dGRhdGVkTWVzc2FnZSA9IGRhdGEubGFzdE93bmVyVGltZSA8IHN0b3JlZERhdGEubGFzdE93bmVyVGltZTtcbiAgICAgICAgICAgIGNvbnN0IGlzQ29udGVtcG9yYW5lb3VzTWVzc2FnZSA9IGRhdGEubGFzdE93bmVyVGltZSA9PT0gc3RvcmVkRGF0YS5sYXN0T3duZXJUaW1lO1xuICAgICAgICAgICAgaWYgKGlzT3V0ZGF0ZWRNZXNzYWdlIHx8IChpc0NvbnRlbXBvcmFuZW91c01lc3NhZ2UgJiYgc3RvcmVkRGF0YS5vd25lciA+IGRhdGEub3duZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YVR5cGUgPT09IFwiclwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlZFdoaWxlRnJvemVuID0gc3RvcmVkRGF0YSAmJiBzdG9yZWREYXRhLmlzRmlyc3RTeW5jO1xuICAgICAgICAgICAgICAgIGlmIChjcmVhdGVkV2hpbGVGcm96ZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBhbmQgZGVsZXRlZCB3aGlsZSBmcm96ZW4sIGRvbid0IGJvdGhlciBjb252ZXlpbmcgYW55dGhpbmcgdG8gdGhlIGNvbnN1bWVyLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb3plblVwZGF0ZXMuZGVsZXRlKG5ldHdvcmtJZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVsZXRlIG1lc3NhZ2VzIG92ZXJyaWRlIGFueSBvdGhlciBtZXNzYWdlcyBmb3IgdGhpcyBlbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm96ZW5VcGRhdGVzLnNldChuZXR3b3JrSWQsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbWVyZ2UgaW4gY29tcG9uZW50IHVwZGF0ZXNcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmVkRGF0YS5jb21wb25lbnRzICYmIGRhdGEuY29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0b3JlZERhdGEuY29tcG9uZW50cywgZGF0YS5jb21wb25lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhRm9yVXBkYXRlTXVsdGlNZXNzYWdlKG5ldHdvcmtJZCwgbWVzc2FnZSkge1xuICAgICAgICAvLyBcImRcIiBpcyBhbiBhcnJheSBvZiBlbnRpdHkgZGF0YXMsIHdoZXJlIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkgcmVwcmVzZW50cyBhIHVuaXF1ZSBlbnRpdHkgYW5kIGNvbnRhaW5zXG4gICAgICAgIC8vIG1ldGFkYXRhIGZvciB0aGUgZW50aXR5LCBhbmQgYW4gYXJyYXkgb2YgY29tcG9uZW50cyB0aGF0IGhhdmUgYmVlbiB1cGRhdGVkIG9uIHRoZSBlbnRpdHkuXG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIGZpbmRzIHRoZSBkYXRhIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIG5ldHdvcmtJZC5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBtZXNzYWdlLmRhdGEuZC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBtZXNzYWdlLmRhdGEuZFtpXTtcblxuICAgICAgICAgICAgaWYgKGRhdGEubmV0d29ya0lkID09PSBuZXR3b3JrSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGJsb2NrKHNlc3Npb25JZCkge1xuICAgICAgICB0aGlzLnJvb20uc2VuZCh7IGtpbmQ6IFwiYmxvY2tcIiwgd2hvbTogc2Vzc2lvbklkIH0pO1xuICAgICAgICB0aGlzLmJsb2NrZWRDbGllbnRzLnNldChzZXNzaW9uSWQsIHRydWUpO1xuICAgICAgICBjb25zdCBkZXRhaWwgPSB7IGNsaWVudElkOiBzZXNzaW9uSWQgfTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImJsb2NrZWRcIiwgeyBkZXRhaWwgfSkpO1xuICAgIH1cblxuICAgIHVuYmxvY2soc2Vzc2lvbklkKSB7XG4gICAgICAgIHRoaXMucm9vbS5zZW5kKHsga2luZDogXCJ1bmJsb2NrXCIsIHdob206IHNlc3Npb25JZCB9KTtcbiAgICAgICAgdGhpcy5ibG9ja2VkQ2xpZW50cy5kZWxldGUoc2Vzc2lvbklkKTtcbiAgICAgICAgY29uc3QgZGV0YWlsID0geyBjbGllbnRJZDogc2Vzc2lvbklkIH07XG4gICAgICAgIGRvY3VtZW50LmJvZHkuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ1bmJsb2NrZWRcIiwgeyBkZXRhaWwgfSkpO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuaW9uLmxlYXZlKCk7XG4gICAgICAgIHRoaXMuc3RyZWFtcyA9IHt9O1xuICAgICAgICB0aGlzLnBlbmRpbmdTdHJlYW1SZXF1ZXN0cyA9IHt9O1xuICAgICAgICBpZiAodGhpcy5yb29tLnN0YXRlLnBsYXllcnMpIHtcbiAgICAgICAgICAgIHRoaXMucm9vbS5zdGF0ZS5wbGF5ZXJzLm9uQWRkID0gdm9pZCAwO1xuICAgICAgICAgICAgdGhpcy5yb29tLnN0YXRlLnBsYXllcnMub25SZW1vdmUgPSB2b2lkIDA7XG4gICAgICAgICAgICB0aGlzLnJvb20uc3RhdGUucGxheWVycy5vbkNoYW5nZSA9IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb20ucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMucm9vbS5sZWF2ZShmYWxzZSk7XG4gICAgICAgIHRoaXMucm9vbSA9IG51bGw7XG4gICAgfVxuXG4gICAgaXNEaXNjb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb20gPT09IG51bGw7XG4gICAgfVxuXG4gICAgc2V0UmVjb25uZWN0aW9uTGlzdGVuZXJzKHJlY29ubmVjdGluZ0xpc3RlbmVyLCByZWNvbm5lY3RlZExpc3RlbmVyLCByZWNvbm5lY3Rpb25FcnJvckxpc3RlbmVyKSB7XG4gICAgICAgIC8vIG9uUmVjb25uZWN0aW5nIGlzIGNhbGxlZCB3aXRoIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHVudGlsIHRoZSBuZXh0IHJlY29ubmVjdGlvbiBhdHRlbXB0XG4gICAgICAgIHRoaXMub25SZWNvbm5lY3RpbmcgPSByZWNvbm5lY3RpbmdMaXN0ZW5lcjtcbiAgICAgICAgLy8gb25SZWNvbm5lY3RlZCBpcyBjYWxsZWQgd2hlbiB0aGUgY29ubmVjdGlvbiBoYXMgYmVlbiByZWVzdGFibGlzaGVkXG4gICAgICAgIHRoaXMub25SZWNvbm5lY3RlZCA9IHJlY29ubmVjdGVkTGlzdGVuZXI7XG4gICAgICAgIC8vIG9uUmVjb25uZWN0aW9uRXJyb3IgaXMgY2FsbGVkIHdpdGggYW4gZXJyb3Igd2hlbiBtYXhSZWNvbm5lY3Rpb25BdHRlbXB0cyBoYXMgYmVlbiByZWFjaGVkXG4gICAgICAgIHRoaXMub25SZWNvbm5lY3Rpb25FcnJvciA9IHJlY29ubmVjdGlvbkVycm9yTGlzdGVuZXI7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlVGltZU9mZnNldCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNjb25uZWN0ZWQoKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGNsaWVudFNlbnRUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChkb2N1bWVudC5sb2NhdGlvbi5ocmVmLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiSEVBRFwiLFxuICAgICAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIlxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwcmVjaXNpb24gPSAxMDAwO1xuICAgICAgICBjb25zdCBzZXJ2ZXJSZWNlaXZlZFRpbWUgPSBuZXcgRGF0ZShyZXMuaGVhZGVycy5nZXQoXCJEYXRlXCIpKS5nZXRUaW1lKCkgKyBwcmVjaXNpb24gLyAyO1xuICAgICAgICBjb25zdCBjbGllbnRSZWNlaXZlZFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBzZXJ2ZXJUaW1lID0gc2VydmVyUmVjZWl2ZWRUaW1lICsgKGNsaWVudFJlY2VpdmVkVGltZSAtIGNsaWVudFNlbnRUaW1lKSAvIDI7XG4gICAgICAgIGNvbnN0IHRpbWVPZmZzZXQgPSBzZXJ2ZXJUaW1lIC0gY2xpZW50UmVjZWl2ZWRUaW1lO1xuXG4gICAgICAgIHRoaXMuc2VydmVyVGltZVJlcXVlc3RzKys7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VydmVyVGltZVJlcXVlc3RzIDw9IDEwKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVPZmZzZXRzLnB1c2godGltZU9mZnNldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVPZmZzZXRzW3RoaXMuc2VydmVyVGltZVJlcXVlc3RzICUgMTBdID0gdGltZU9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXZnVGltZU9mZnNldCA9IHRoaXMudGltZU9mZnNldHMucmVkdWNlKChhY2MsIG9mZnNldCkgPT4gKGFjYyArPSBvZmZzZXQpLCAwKSAvIHRoaXMudGltZU9mZnNldHMubGVuZ3RoO1xuXG4gICAgICAgIGlmICh0aGlzLnNlcnZlclRpbWVSZXF1ZXN0cyA+IDEwKSB7XG4gICAgICAgICAgICBOQUYubG9nLndyaXRlKGBuZXcgc2VydmVyIHRpbWUgb2Zmc2V0OiAke3RoaXMuYXZnVGltZU9mZnNldH1tc2ApO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVRpbWVPZmZzZXQoKSwgNSAqIDYwICogMTAwMCk7IC8vIFN5bmMgY2xvY2sgZXZlcnkgNSBtaW51dGVzLlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lT2Zmc2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTZXJ2ZXJUaW1lKCkge1xuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSArIHRoaXMuYXZnVGltZU9mZnNldDtcbiAgICB9XG59XG5cbk5BRi5hZGFwdGVycy5yZWdpc3RlcihcImNvbHlzZXVzLWlvblwiLCBDb2x5c2V1c0lvbkFkYXB0ZXIpO1xuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==