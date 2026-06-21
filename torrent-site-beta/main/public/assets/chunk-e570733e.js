var u = Object.defineProperty;
var l = (i, t, e) => t in i ? u(i, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : i[t] = e;
var n = (i, t, e) => (l(i, typeof t != "symbol" ? t + "" : t, e), e);
import {
    cE as g,
    dl as o,
    a as r,
    ez as h,
    ds as m,
    du as p,
    dv as c
} from "./chunk-b53b00e3.js";
import "./chunk-73e80d68.js";
import "./chunk-0e835458.js";
class v extends g {
    constructor(e) {
        super();
        n(this, "inited");
        n(this, "_isOpen", !1);
        n(this, "options");
        n(this, "activeSupport", () => {});
        n(this, "preInited", new Promise(e => this.activeSupport = e));
        this.options = e, o.waitLogin().then(async () => {
            await this.inited, this.onLogin()
        }), r.on("live_support", async (s = !0) => {
            s && await this.getPayment(), this.openLiveSupport(s)
        }), this.inited = this.preInited.then(() => this.init(e))
    }
    get isOpen() {
        return this._isOpen
    }
    set isOpen(e) {
        this._isOpen = e, this.emit("isOpen", e)
    }
    async openLiveSupport(e = !this.isOpen) {
        e && (r.emit("ad_track", "assistance_requested"), await this.getPayment()), this.activeSupport(), this.isOpen = e, await this.inited, this.toggle(e)
    }
    async sendLiveSupport(e) {
        this.activeSupport(), await this.inited, this.isOpen || this.toggle(!0), this.sendMsg(e)
    }
}

function w() {
    return p.get("/user/intercom/hash/")
}
const y = h.timeMemoize(function() {
    const {
        isBrHost: i
    } = h.getHostType(m.host), t = i ? "BRLFIAT" : "INRFIAT";
    return p.post("/payment/order/list/", {
        currencyName: t
    })
}, {
    timeout: 6e5
});
let a = null;
class _ extends v {
    constructor(t) {
        super({
            id: t
        }), r.on("live_support_order", e => {
            (a == null ? void 0 : a.OrderId) !== e.OrderId && (a = e, this.exec("update", e))
        })
    }
    async init() {
        var t = window,
            e = function() {
                e.c(arguments)
            };
        e.q = [], e.c = function(s) {
            e.q.push(s)
        }, t.Intercom = e, await h.loadScript(`https://widget.intercom.io/widget/${this.options.id}`), this.exec("onHide", () => this.isOpen = !1), this.exec("onShow", () => this.isOpen = !0), this.exec("boot", {
            hide_default_launcher: !0,
            app_id: this.options.id,
            Level: 0,
            language_override: c.language
        })
    }
    async getPayment() {
        if (o.state.login) try {
            const t = await y(),
                e = t && t.length > 0;
            this.exec("update", {
                verifyINR: e,
                INRverify: e,
                INRverify2: e ? 1 : 0
            })
        } catch (t) {
            console.log(t)
        }
    }
    async onLogin() {
        const {
            appId: t,
            name: e,
            userId: s,
            userHash: d
        } = await w();
        this.exec("shutdown"), this.exec("onHide", () => this.isOpen = !1), this.exec("onShow", () => this.isOpen = !0), this.exec("boot", {
            hide_default_launcher: !0,
            app_id: t,
            name: s,
            user_id: s,
            email: "",
            Level: o.state.vipLevel,
            L: o.state.vipLevel,
            created_at: Date.now(),
            user_hash: d,
            language_override: c.language,
            INRverify: !1
        }), this.isOpen && this.exec("show")
    }
    sendMsg(t) {}
    async toggle(t) {
        this.exec(t ? "show" : "hide")
    }
    async exec(...t) {
        await this.inited, window.Intercom(...t)
    }
}

function x() {
    var t;
    const i = (((t = globalThis.location) == null ? void 0 : t.host) || "").includes("stage") ? "i5ulmyr4" : "t87ss9s4";
    return i ? new _(String(i)) : null
}
const O = x();
export {
    O as l
};