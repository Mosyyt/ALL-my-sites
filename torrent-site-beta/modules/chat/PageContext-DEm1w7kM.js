var At = Object.defineProperty,
    Ct = Object.defineProperties;
var Dt = Object.getOwnPropertyDescriptors;
var G = Object.getOwnPropertySymbols;
var it = Object.prototype.hasOwnProperty,
    st = Object.prototype.propertyIsEnumerable;
var ot = (e, n, t) => n in e ? At(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[n] = t,
    W = (e, n) => {
        for (var t in n || (n = {})) it.call(n, t) && ot(e, t, n[t]);
        if (G)
            for (var t of G(n)) st.call(n, t) && ot(e, t, n[t]);
        return e
    },
    J = (e, n) => Ct(e, Dt(n));
var ct = (e, n) => {
    var t = {};
    for (var o in e) it.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
    if (e != null && G)
        for (var o of G(e)) n.indexOf(o) < 0 && st.call(e, o) && (t[o] = e[o]);
    return t
};
import {
    $ as T,
    B as lt,
    C as X,
    q as Y,
    g as Q,
    x as rt,
    k as ut,
    h as P,
    c as S,
    S as at,
    z as q,
    A as K
} from "./vendor-BvKcHqfU.js";
var f = globalThis["@bc/ui"];
const F = Symbol("store-raw"),
    v = Symbol("store-node"),
    I = Symbol("store-has"),
    ft = Symbol("store-self");

function pt(e) {
    let n = e[T];
    if (!n && (Object.defineProperty(e, T, {
            value: n = new Proxy(e, xt)
        }), !Array.isArray(e))) {
        const t = Object.keys(e),
            o = Object.getOwnPropertyDescriptors(e);
        for (let c = 0, i = t.length; c < i; c++) {
            const l = t[c];
            o[l].get && Object.defineProperty(e, l, {
                enumerable: o[l].enumerable,
                get: o[l].get.bind(n)
            })
        }
    }
    return n
}

function j(e) {
    let n;
    return e != null && typeof e == "object" && (e[T] || !(n = Object.getPrototypeOf(e)) || n === Object.prototype || Array.isArray(e))
}

function R(e, n = new Set) {
    let t, o, c, i;
    if (t = e != null && e[F]) return t;
    if (!j(e) || n.has(e)) return e;
    if (Array.isArray(e)) {
        Object.isFrozen(e) ? e = e.slice(0) : n.add(e);
        for (let l = 0, a = e.length; l < a; l++) c = e[l], (o = R(c, n)) !== c && (e[l] = o)
    } else {
        Object.isFrozen(e) ? e = Object.assign({}, e) : n.add(e);
        const l = Object.keys(e),
            a = Object.getOwnPropertyDescriptors(e);
        for (let u = 0, p = l.length; u < p; u++) i = l[u], !a[i].get && (c = e[i], (o = R(c, n)) !== c && (e[i] = o))
    }
    return e
}

function U(e, n) {
    let t = e[n];
    return t || Object.defineProperty(e, n, {
        value: t = Object.create(null)
    }), t
}

function x(e, n, t) {
    if (e[n]) return e[n];
    const [o, c] = Q(t, {
        equals: !1,
        internal: !0
    });
    return o.$ = c, e[n] = o
}

function $t(e, n) {
    const t = Reflect.getOwnPropertyDescriptor(e, n);
    return !t || t.get || !t.configurable || n === T || n === v || (delete t.value, delete t.writable, t.get = () => e[T][n]), t
}

function ht(e) {
    X() && x(U(e, v), ft)()
}

function Lt(e) {
    return ht(e), Reflect.ownKeys(e)
}
const xt = {
    get(e, n, t) {
        if (n === F) return e;
        if (n === T) return t;
        if (n === lt) return ht(e), t;
        const o = U(e, v),
            c = o[n];
        let i = c ? c() : e[n];
        if (n === v || n === I || n === "__proto__") return i;
        if (!c) {
            const l = Object.getOwnPropertyDescriptor(e, n);
            X() && (typeof i != "function" || e.hasOwnProperty(n)) && !(l && l.get) && (i = x(o, n, i)())
        }
        return j(i) ? pt(i) : i
    },
    has(e, n) {
        return n === F || n === T || n === lt || n === v || n === I || n === "__proto__" ? !0 : (X() && x(U(e, I), n)(), n in e)
    },
    set() {
        return !0
    },
    deleteProperty() {
        return !0
    },
    ownKeys: Lt,
    getOwnPropertyDescriptor: $t
};

function A(e, n, t, o = !1) {
    if (!o && e[n] === t) return;
    const c = e[n],
        i = e.length;
    t === void 0 ? (delete e[n], e[I] && e[I][n] && c !== void 0 && e[I][n].$()) : (e[n] = t, e[I] && e[I][n] && c === void 0 && e[I][n].$());
    let l = U(e, v),
        a;
    if ((a = x(l, n, c)) && a.$(() => t), Array.isArray(e) && e.length !== i) {
        for (let u = e.length; u < i; u++)(a = l[u]) && a.$();
        (a = x(l, "length", i)) && a.$(e.length)
    }(a = l[ft]) && a.$()
}

function yt(e, n) {
    const t = Object.keys(n);
    for (let o = 0; o < t.length; o += 1) {
        const c = t[o];
        A(e, c, n[c])
    }
}

function Mt(e, n) {
    if (typeof n == "function" && (n = n(e)), n = R(n), Array.isArray(n)) {
        if (e === n) return;
        let t = 0,
            o = n.length;
        for (; t < o; t++) {
            const c = n[t];
            e[t] !== c && A(e, t, c)
        }
        A(e, "length", o)
    } else yt(e, n)
}

function L(e, n, t = []) {
    let o, c = e;
    if (n.length > 1) {
        o = n.shift();
        const l = typeof o,
            a = Array.isArray(e);
        if (Array.isArray(o)) {
            for (let u = 0; u < o.length; u++) L(e, [o[u]].concat(n), t);
            return
        } else if (a && l === "function") {
            for (let u = 0; u < e.length; u++) o(e[u], u) && L(e, [u].concat(n), t);
            return
        } else if (a && l === "object") {
            const {
                from: u = 0,
                to: p = e.length - 1,
                by: y = 1
            } = o;
            for (let m = u; m <= p; m += y) L(e, [m].concat(n), t);
            return
        } else if (n.length > 1) {
            L(e[o], n, [o].concat(t));
            return
        }
        c = e[o], t = [o].concat(t)
    }
    let i = n[0];
    typeof i == "function" && (i = i(c, t), i === c) || o === void 0 && i == null || (i = R(i), o === void 0 || j(c) && j(i) && !Array.isArray(i) ? yt(c, i) : A(e, o, i))
}

function dt(...[e, n]) {
    const t = R(e || {}),
        o = Array.isArray(t),
        c = pt(t);

    function i(...l) {
        Y(() => {
            o && l.length === 1 ? Mt(t, l[0]) : L(t, l)
        })
    }
    return [c, i]
}
const E = new WeakMap,
    gt = {
        get(e, n) {
            if (n === F) return e;
            const t = e[n];
            let o;
            return j(t) ? E.get(t) || (E.set(t, o = new Proxy(t, gt)), o) : t
        },
        set(e, n, t) {
            return A(e, n, R(t)), !0
        },
        deleteProperty(e, n) {
            return A(e, n, void 0, !0), !0
        }
    };

function Nt(e) {
    return n => {
        if (j(n)) {
            let t;
            (t = E.get(n)) || E.set(n, t = new Proxy(n, gt)), e(t)
        }
        return n
    }
}
var M = globalThis["lodash-es"];
const Bt = /https?:\/\/[\S]+/,
    _t = /(\[\w+=.+?\])/,
    Gt = /(\[(\w+=.+?)\])/;
async function Ft() {
    const {
        applyMsg: e,
        items: n
    } = await f.http.get("/game/support/chat-v2/list/");
    return {
        applyMsg: e,
        items: n.map(Z)
    }
}
async function Ut(e) {
    return (await f.http.post(`/game/support/chat-v2/${e}/history/`, {
        lastIndex: 0
    })).map(Wt)
}
async function Et(e, n) {
    return f.http.post(`/game/support/chat-v2/${n}/send/`, {
        chat: e.replace(Bt, t => `[link=${encodeURIComponent(t)}]`),
        subType: "text"
    })
}
async function Vt(e) {
    let n = await f.http.post("/game/support/chat-v2/private/create/", {
        toUserId: e
    });
    return Z(n)
}
const bt = M.memoize(async e => {
        const n = await f.http.get(`/game/support/chat-v2/${e}/`);
        return bt.cache.delete(e), Z(n)
    }),
    qt = async (e, n) => await f.http.post(`/game/support/chat-v2/${e}/${n}`),
    $ = {
        getChatList: Ft,
        getChatHistory: Ut,
        sendChat: Et,
        createRoomByUid: Vt,
        createRoomByGid: bt,
        setTopPosition: qt
    },
    Kt = 1,
    zt = 4026531840,
    Ht = 2;

function Z(e) {
    return {
        inited: !1,
        userId: e.toChatId,
        name: String(e.chatShowName),
        level: Number(e.chatShowLevel),
        titles: e.chatShowTitles || [],
        titleDesc: e.chatShowTitlesDesc || [],
        groupId: e.groupId,
        isBlock: !!e.shield,
        isBlockMe: !!e.isBlock,
        isShow: !!e.isShow,
        readIndex: Number(e.readIndex || 0),
        lastIndex: Number(e.lastIndex || 0),
        lastMsg: M.unescape(e.lastShortMsg || ""),
        lastMsgType: 2,
        lastSpeakTime: Number(e.lastSpeakTime),
        isAdmin: (e.relationship & zt) != 0,
        isFriend: (e.relationship & Kt) != 0,
        isVip: (e.relationship & Ht) != 0,
        isStranger: e.relationship == 0,
        isOnline: !1,
        isRequest: !1,
        isBot: !1,
        isPinned: e.isPinned,
        language: e.language,
        isMyVip: e.isMyVip,
        get unread() {
            return this.lastIndex || this.lastIndex >= 0 ? this.lastIndex - this.readIndex : 0
        },
        history: []
    }
}

function Wt(t) {
    var o = t,
        {
            chat: e
        } = o,
        n = ct(o, ["chat"]);
    if (typeof e == "object" && (e = JSON.stringify(e)), n.type === 1) typeof e == "string" && (e = JSON.parse(e));
    else {
        let c = [];
        M.unescape(e).split(_t).forEach(l => {
            if (l === "") return;
            let a = l.match(Gt);
            if (a) {
                let [u, p] = a[2].split("="), y = p.split(","), m = new Jt(u, y);
                c.push(m)
            } else c.push(l)
        }), e = c
    }
    return J(W({}, n), {
        chat: e
    })
}
class Jt {
    constructor(n, t) {
        this.type = n, this.args = t
    }
    toString() {
        return this.type
    }
}
const N = f.protobuf,
    O = N.Reader,
    B = N.Writer,
    g = N.util,
    d = N.roots.privateChat || (N.roots.privateChat = {});
d.UserChatGroupEvent = (() => {
    function e(n) {
        if (this.titles = [], this.titleDesc = [], n)
            for (let t = Object.keys(n), o = 0; o < t.length; ++o) n[t[o]] != null && (this[t[o]] = n[t[o]])
    }
    return e.prototype.groupId = 0, e.prototype.groupName = "", e.prototype.groupType = 0, e.prototype.msgNum = 0, e.prototype.lastMsgType = 0, e.prototype.lastSpeakTime = g.Long ? g.Long.fromBits(0, 0, !1) : 0, e.prototype.lastMsg = "", e.prototype.level = 0, e.prototype.titles = g.emptyArray, e.prototype.block = 0, e.prototype.titleDesc = g.emptyArray, e.prototype.remoteUserId = 0, e.encode = function(t, o) {
        if (o || (o = B.create()), t.groupId != null && Object.hasOwnProperty.call(t, "groupId") && o.uint32(8).int32(t.groupId), t.groupName != null && Object.hasOwnProperty.call(t, "groupName") && o.uint32(18).string(t.groupName), t.groupType != null && Object.hasOwnProperty.call(t, "groupType") && o.uint32(24).int32(t.groupType), t.msgNum != null && Object.hasOwnProperty.call(t, "msgNum") && o.uint32(40).int32(t.msgNum), t.lastMsgType != null && Object.hasOwnProperty.call(t, "lastMsgType") && o.uint32(48).int32(t.lastMsgType), t.lastSpeakTime != null && Object.hasOwnProperty.call(t, "lastSpeakTime") && o.uint32(56).int64(t.lastSpeakTime), t.lastMsg != null && Object.hasOwnProperty.call(t, "lastMsg") && o.uint32(66).string(t.lastMsg), t.level != null && Object.hasOwnProperty.call(t, "level") && o.uint32(72).int32(t.level), t.titles != null && t.titles.length) {
            o.uint32(82).fork();
            for (let c = 0; c < t.titles.length; ++c) o.int32(t.titles[c]);
            o.ldelim()
        }
        if (t.block != null && Object.hasOwnProperty.call(t, "block") && o.uint32(88).int32(t.block), t.titleDesc != null && t.titleDesc.length)
            for (let c = 0; c < t.titleDesc.length; ++c) o.uint32(98).string(t.titleDesc[c]);
        return t.remoteUserId != null && Object.hasOwnProperty.call(t, "remoteUserId") && o.uint32(120).int32(t.remoteUserId), o
    }, e.decode = function(t, o) {
        t instanceof O || (t = O.create(t));
        let c = o === void 0 ? t.len : t.pos + o,
            i = new d.UserChatGroupEvent;
        for (; t.pos < c;) {
            let l = t.uint32();
            switch (l >>> 3) {
                case 1:
                    i.groupId = t.int32();
                    break;
                case 2:
                    i.groupName = t.string();
                    break;
                case 3:
                    i.groupType = t.int32();
                    break;
                case 5:
                    i.msgNum = t.int32();
                    break;
                case 6:
                    i.lastMsgType = t.int32();
                    break;
                case 7:
                    i.lastSpeakTime = t.int64();
                    break;
                case 8:
                    i.lastMsg = t.string();
                    break;
                case 9:
                    i.level = t.int32();
                    break;
                case 10:
                    if (i.titles && i.titles.length || (i.titles = []), (l & 7) === 2) {
                        let a = t.uint32() + t.pos;
                        for (; t.pos < a;) i.titles.push(t.int32())
                    } else i.titles.push(t.int32());
                    break;
                case 11:
                    i.block = t.int32();
                    break;
                case 12:
                    i.titleDesc && i.titleDesc.length || (i.titleDesc = []), i.titleDesc.push(t.string());
                    break;
                case 15:
                    i.remoteUserId = t.int32();
                    break;
                default:
                    t.skipType(l & 7);
                    break
            }
        }
        return i
    }, e
})();
d.GroupChatRequest = (() => {
    function e(n) {
        if (n)
            for (let t = Object.keys(n), o = 0; o < t.length; ++o) n[t[o]] != null && (this[t[o]] = n[t[o]])
    }
    return e.prototype.groupId = 0, e.encode = function(t, o) {
        return o || (o = B.create()), t.groupId != null && Object.hasOwnProperty.call(t, "groupId") && o.uint32(16).int32(t.groupId), o
    }, e.decode = function(t, o) {
        t instanceof O || (t = O.create(t));
        let c = o === void 0 ? t.len : t.pos + o,
            i = new d.GroupChatRequest;
        for (; t.pos < c;) {
            let l = t.uint32();
            switch (l >>> 3) {
                case 2:
                    i.groupId = t.int32();
                    break;
                default:
                    t.skipType(l & 7);
                    break
            }
        }
        return i
    }, e
})();
d.GroupChatHistory = (() => {
    function e(n) {
        if (this.chats = [], n)
            for (let t = Object.keys(n), o = 0; o < t.length; ++o) n[t[o]] != null && (this[t[o]] = n[t[o]])
    }
    return e.prototype.groupId = 0, e.prototype.chats = g.emptyArray, e.encode = function(t, o) {
        if (o || (o = B.create()), t.groupId != null && Object.hasOwnProperty.call(t, "groupId") && o.uint32(16).int32(t.groupId), t.chats != null && t.chats.length)
            for (let c = 0; c < t.chats.length; ++c) d.GroupChat.encode(t.chats[c], o.uint32(26).fork()).ldelim();
        return o
    }, e.decode = function(t, o) {
        t instanceof O || (t = O.create(t));
        let c = o === void 0 ? t.len : t.pos + o,
            i = new d.GroupChatHistory;
        for (; t.pos < c;) {
            let l = t.uint32();
            switch (l >>> 3) {
                case 2:
                    i.groupId = t.int32();
                    break;
                case 3:
                    i.chats && i.chats.length || (i.chats = []), i.chats.push(d.GroupChat.decode(t, t.uint32()));
                    break;
                default:
                    t.skipType(l & 7);
                    break
            }
        }
        return i
    }, e
})();
d.GroupChat = (() => {
    function e(n) {
        if (n)
            for (let t = Object.keys(n), o = 0; o < t.length; ++o) n[t[o]] != null && (this[t[o]] = n[t[o]])
    }
    return e.prototype.id = g.Long ? g.Long.fromBits(0, 0, !1) : 0, e.prototype.groupId = 0, e.prototype.userId = 0, e.prototype.type = 0, e.prototype.createTime = g.Long ? g.Long.fromBits(0, 0, !1) : 0, e.prototype.chat = "", e.prototype.subType = "", e.prototype.chatIndex = 0, e.encode = function(t, o) {
        return o || (o = B.create()), t.id != null && Object.hasOwnProperty.call(t, "id") && o.uint32(8).int64(t.id), t.groupId != null && Object.hasOwnProperty.call(t, "groupId") && o.uint32(16).int32(t.groupId), t.userId != null && Object.hasOwnProperty.call(t, "userId") && o.uint32(24).int32(t.userId), t.type != null && Object.hasOwnProperty.call(t, "type") && o.uint32(48).int32(t.type), t.createTime != null && Object.hasOwnProperty.call(t, "createTime") && o.uint32(56).int64(t.createTime), t.chat != null && Object.hasOwnProperty.call(t, "chat") && o.uint32(66).string(t.chat), t.subType != null && Object.hasOwnProperty.call(t, "subType") && o.uint32(90).string(t.subType), t.chatIndex != null && Object.hasOwnProperty.call(t, "chatIndex") && o.uint32(120).sint32(t.chatIndex), o
    }, e.decode = function(t, o) {
        t instanceof O || (t = O.create(t));
        let c = o === void 0 ? t.len : t.pos + o,
            i = new d.GroupChat;
        for (; t.pos < c;) {
            let l = t.uint32();
            switch (l >>> 3) {
                case 1:
                    i.id = t.int64();
                    break;
                case 2:
                    i.groupId = t.int32();
                    break;
                case 3:
                    i.userId = t.int32();
                    break;
                case 6:
                    i.type = t.int32();
                    break;
                case 7:
                    i.createTime = t.int64();
                    break;
                case 8:
                    i.chat = t.string();
                    break;
                case 11:
                    i.subType = t.string();
                    break;
                case 15:
                    i.chatIndex = t.sint32();
                    break;
                default:
                    t.skipType(l & 7);
                    break
            }
        }
        return i
    }, e
})();
d.Friend = (() => {
    function e(n) {
        if (this.titles = [], this.titleDesc = [], n)
            for (let t = Object.keys(n), o = 0; o < t.length; ++o) n[t[o]] != null && (this[t[o]] = n[t[o]])
    }
    return e.prototype.groupId = 0, e.prototype.userId = 0, e.prototype.name = "", e.prototype.createTime = g.Long ? g.Long.fromBits(0, 0, !1) : 0, e.prototype.level = 0, e.prototype.titles = g.emptyArray, e.prototype.titleDesc = g.emptyArray, e.encode = function(t, o) {
        if (o || (o = B.create()), t.groupId != null && Object.hasOwnProperty.call(t, "groupId") && o.uint32(16).int32(t.groupId), t.userId != null && Object.hasOwnProperty.call(t, "userId") && o.uint32(24).int32(t.userId), t.name != null && Object.hasOwnProperty.call(t, "name") && o.uint32(34).string(t.name), t.createTime != null && Object.hasOwnProperty.call(t, "createTime") && o.uint32(56).int64(t.createTime), t.level != null && Object.hasOwnProperty.call(t, "level") && o.uint32(72).int32(t.level), t.titles != null && t.titles.length) {
            o.uint32(82).fork();
            for (let c = 0; c < t.titles.length; ++c) o.int32(t.titles[c]);
            o.ldelim()
        }
        if (t.titleDesc != null && t.titleDesc.length)
            for (let c = 0; c < t.titleDesc.length; ++c) o.uint32(90).string(t.titleDesc[c]);
        return o
    }, e.decode = function(t, o) {
        t instanceof O || (t = O.create(t));
        let c = o === void 0 ? t.len : t.pos + o,
            i = new d.Friend;
        for (; t.pos < c;) {
            let l = t.uint32();
            switch (l >>> 3) {
                case 2:
                    i.groupId = t.int32();
                    break;
                case 3:
                    i.userId = t.int32();
                    break;
                case 4:
                    i.name = t.string();
                    break;
                case 7:
                    i.createTime = t.int64();
                    break;
                case 9:
                    i.level = t.int32();
                    break;
                case 10:
                    if (i.titles && i.titles.length || (i.titles = []), (l & 7) === 2) {
                        let a = t.uint32() + t.pos;
                        for (; t.pos < a;) i.titles.push(t.int32())
                    } else i.titles.push(t.int32());
                    break;
                case 11:
                    i.titleDesc && i.titleDesc.length || (i.titleDesc = []), i.titleDesc.push(t.string());
                    break;
                default:
                    t.skipType(l & 7);
                    break
            }
        }
        return i
    }, e
})();

function Xt() {
    const [e] = rt(async function() {
        await f.accountStore.waitLogin();
        const {
            items: s,
            applyMsg: r
        } = await $.getChatList();
        return y({
            rooms: s,
            unReadRequest: r
        }), s
    });
    let n, t, o, c, i, l, a;
    const u = f.socket.socket("/chat/group"),
        [p, y] = dt({
            userId: 0,
            rooms: [],
            unReadRequest: 0,
            selectedVip: [],
            searchInfo: "",
            get roomDict() {
                return a()
            },
            get recentList() {
                return n()
            },
            get friendList() {
                return t()
            },
            get strangerList() {
                return o()
            },
            get adminList() {
                return c()
            },
            get vipList() {
                return i()
            },
            get recentVipList() {
                return l()
            },
            get recentUnRead() {
                return (f.accountStore.state.chatRoomPermission.vipable ? this.recentList : this.adminList).reduce((r, h) => r += h.unread, 0)
            }
        });
    ut(() => {
        et(p.userId)
    }), a = P(() => p.rooms.reduce((s, r) => (s[r.groupId] = r, s), {})), n = P(() => p.rooms.filter(s => s.isShow)), t = P(() => p.rooms.filter(s => s.isFriend)), o = P(() => p.rooms.filter(s => s.isStranger && s.isShow)), c = P(() => p.rooms.filter(s => s.isAdmin && s.isShow)), i = P(() => p.rooms.filter(s => s.isVip)), l = P(() => p.rooms.filter(s => s.isShow));
    const m = {
        state: p,
        socket: u,
        setState: y,
        async sendChat(s, r) {
            if (s instanceof Blob) {
                const h = new FormData,
                    k = {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    };
                h.append("img", s), await f.http.post(`/game/support/chat-v2/${r}/send-img/`, h, k)
            } else {
                if (!s) return;
                await $.sendChat(s, r)
            }
        },
        async addFriend(s) {
            await f.http.post(`/game/support/chat-v2/private/${s}/agree/`);
            const r = await et(s);
            Y(() => {
                r.isStranger = !1, r.isFriend = !0, z(r)
            })
        },
        async rejectFriend(s) {
            await f.http.post(`/game/support/chat-v2/private/${s}/refuse/`)
        },
        async removeFriend(s) {
            await f.http.post(`/game/support/chat-v2/private/friend/${s}/remove/`), y("rooms", r => r.userId === s, "isFriend", !1)
        },
        async deleteRoom(s) {
            await f.http.post(`/game/support/chat-v2/${s}/remove/`);
            const r = p.roomDict[s];
            r && (r.isStranger ? y("rooms", h => h.filter(k => k.groupId !== s)) : y("rooms", h => h.groupId === s, "isShow", !1))
        },
        async blockRoom(s) {
            await f.http.post(`/game/support/chat-v2/${s}/block/private/`), y("rooms", r => r.groupId === s, "isBlock", !0)
        },
        async unblockRoom(s) {
            await f.http.post(`/game/support/chat-v2/${s}/unblock/private/`), y("rooms", r => r.groupId === s, "isBlock", !1)
        },
        setSelectedVip(s) {
            y("selectedVip", s)
        },
        clearSelectedVip() {
            y("selectedVip", [])
        },
        async setReadIndex(s) {
            y("rooms", r => r.groupId === s, r => ({
                readIndex: r.lastIndex
            }))
        },
        setPin(s) {
            y("rooms", r => r.groupId === s, "isPinned", r => ($.setTopPosition(s, r ? "unpin" : "pin"), !r)), vt()
        }
    };
    async function et(s) {
        let r = p.rooms.find(h => h.userId === s);
        return !r && s !== 0 && (r = await $.createRoomByUid(s), z(r)), r
    }
    async function Pt(s) {
        const r = p.roomDict[s];
        if (!r) {
            const h = await $.createRoomByGid(s);
            return z(h), h
        }
        return r
    }

    function Tt(s) {
        return s ? s instanceof Array ? String(s[0]) : typeof s == "string" ? s : s.subType : "no messages"
    }

    function z(s) {
        y("rooms", r => [...r, s])
    }

    function vt() {
        y("rooms", M.sortBy(p.rooms, s => !s.isPinned))
    }

    function jt(s) {
        const r = /(\[\w+=.+?\])/,
            h = /(\[(\w+=.+?)\])/;
        if (typeof s.chat == "object" && (s.chat = JSON.stringify(s.chat)), s.type === 1) typeof s.chat == "string" && (s.chat = JSON.parse(s.chat));
        else {
            let k = [];
            M.unescape(s.chat).split(r).forEach(C => {
                if (C === "") return;
                let _ = C.match(h);
                if (_) {
                    let [D, w] = _[2].split("="), H = w.split(","), b = new Rt(D, H);
                    k.push(b)
                } else k.push(C)
            }), s.chat = k
        }
        return Object.assign({}, s)
    }
    class Rt {
        constructor(r, h) {
            this.type = r, this.args = h
        }
        toString() {
            return this.type
        }
    }
    return u.on("chat", f.socket.decodeBind(async ({
        chat: s,
        createTime: r,
        groupId: h,
        id: k,
        subType: nt,
        type: C,
        userId: _,
        chatIndex: D
    }) => {
        const w = {
                chat: s,
                groupId: h,
                subType: nt,
                type: C,
                userId: _,
                chatIndex: D,
                id: Number(k),
                createTime: Number(r)
            },
            H = await Pt(h);
        Y(() => {
            y("rooms", b => b.groupId === H.groupId, Nt(b => {
                b.history = [...b.history, jt(w)], b.lastMsg = Tt(w.chat), b.lastMsgType = w.type, b.lastSpeakTime = w.createTime, b.lastIndex = D, f.accountStore.state.userId === w.userId && (b.readIndex = D)
            }))
        })
    }, d.GroupChat)), u.on("friend-apply", f.socket.decodeBind(() => {
        y("unReadRequest", s => s + 1)
    }, d.Friend)), u.on("friend-agree", f.socket.decodeBind(s => {
        s.userId
    }, d.Friend)), u.connect(), [e, m]
}
const Ot = Xt(),
    kt = Ot[1],
    Yt = K(kt);

function re() {
    return q(Yt)
}

function Qt(e) {
    return S(at, {
        get when() {
            return Ot[0]()
        },
        get children() {
            return e.children
        }
    })
}
const V = f.i18n.createInstance();
V.init();
const It = K({
        namespace: ""
    }),
    Zt = Object.entries(f.langsLocaleToISO6391).reduce((e, [n, t]) => (e[t] = n, e), {});

function St(e) {
    return Zt[e] || e
}

function te(e) {
    const n = tt(),
        [t] = rt(() => {
            const {
                namespace: o,
                locales: c
            } = e;
            return {
                namespace: o,
                locales: c,
                lang: St(n.lang)
            }
        }, async ({
            namespace: o,
            locales: c,
            lang: i
        }) => {
            let l = {};
            const a = `../locales/${i}/${o}.json`,
                u = e.locales[a] || Object.values(c)[0],
                p = V.store.data[i];
            return p && p[e.namespace] || (i ? l = await u() : l = {}, V.addResourceBundle(i, e.namespace, l)), e
        });
    return S(at, {
        get when() {
            return t()
        },
        children: o => S(It.Provider, {
            value: {
                get namespace() {
                    return o().namespace
                }
            },
            get children() {
                return e.children
            }
        })
    })
}

function ue() {
    const e = q(It),
        n = tt();
    return (t, o) => V.t(t, J(W({}, o), {
        lng: St(n.lang),
        ns: e.namespace
    }))
}
const [ee, ae] = Q(!0), mt = K(ee);

function ne(e) {
    const n = oe(),
        t = () => n() && e.value();
    return S(mt.Provider, {
        value: t,
        get children() {
            return e.children
        }
    })
}

function oe() {
    return q(mt)
}
const wt = K({});

function ie(e) {
    const [n, t] = dt(e.bridge.current);
    return e.bridge.current = n, e.bridge.update = t, S(wt.Provider, {
        value: n,
        get children() {
            return S(ne, {
                value: () => n.active,
                get children() {
                    return S(Qt, {
                        get children() {
                            return S(te, {
                                get locales() {
                                    return e.locales
                                },
                                get namespace() {
                                    return e.namespace
                                },
                                get children() {
                                    return e.children
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

function tt() {
    return q(wt)
}

function se(e) {
    const {
        state: n
    } = kt, [t, o] = Q(!1);
    f.accountStore.waitLogin().then(() => {
        o(f.accountStore.state.chatRoomPermission.vipable)
    });
    const c = () => t() || n.adminList.length > 0;
    ut(() => {
        e({
            unrade: n.recentUnRead,
            showEnter: c()
        })
    })
}
const fe = Object.freeze(Object.defineProperty({
    __proto__: null,
    AppProvider: ie,
    onMessage: se,
    useAppCtx: tt
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    ie as A, fe as P, f as _, tt as a, ue as b, oe as c, dt as d, $ as e, M as l, re as u
};