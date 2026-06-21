var M = Object.defineProperty,
    T = Object.defineProperties;
var U = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var D = Object.prototype.hasOwnProperty,
    N = Object.prototype.propertyIsEnumerable;
var C = (e, t, n) => t in e ? M(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    h = (e, t) => {
        for (var n in t || (t = {})) D.call(t, n) && C(e, n, t[n]);
        if (m)
            for (var n of m(t)) N.call(t, n) && C(e, n, t[n]);
        return e
    },
    R = (e, t) => T(e, U(t));
var j = (e, t) => {
    var n = {};
    for (var r in e) D.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && m)
        for (var r of m(e)) t.indexOf(r) < 0 && N.call(e, r) && (n[r] = e[r]);
    return n
};
import {
    j as s
} from "../../chunk-a4af42e8.js";
import {
    eq as _,
    eg as w,
    ev as v,
    e4 as q,
    ds as G,
    cT as f,
    du as W,
    dQ as L,
    dL as A,
    ed as I,
    e5 as J,
    er as z,
    e9 as O,
    cA as b,
    dy as Q,
    dF as K,
    dl as V
} from "../../chunk-b53b00e3.js";
import {
    r as c,
    R as X
} from "../../chunk-73e80d68.js";
import {
    g as Y
} from "../../chunk-7459b96e.js";
import {
    p as F
} from "../../chunk-03c302ce.js";
import "../../chunk-cf010ec4.js";
import "../../chunk-0e1ef679.js";

function S(e, t, n) {
    var r = new URL(e);
    return r.searchParams.set(t, n), r.toString()
}

function k() {
    let {
        lang: e
    } = w();
    const t = J(),
        n = z(),
        r = A().login,
        i = n.currencyName,
        g = O();
    e = e.replace(/-.+/, "");
    const l = n.enableLocaleCurrency ? g.currencyName : "USDFIAT";
    return {
        device: t ? "mobile" : "desktop",
        lang: e,
        isLogin: r,
        currency: i,
        showCurrency: l
    }
}
const Z = async function(r) {
    var i = r,
        {
            currency: e,
            isLogin: t
        } = i,
        n = j(i, ["currency", "isLogin"]);
    return e && t ? await W.post("/platform-horse/login", h({
        currency: e
    }, n)) : ""
};

function B({
    txt: e
}) {
    return v(), s.jsx("div", {
        style: {
            height: "84vh",
            whiteSpace: "break-spaces"
        },
        children: s.jsx(b, {
            children: e
        })
    })
}
const $ = c.memo(function(e) {
        const [t, n] = _({
            url: e.url,
            loading: !1
        }), {
            urlPathname: r
        } = w(), {
            t: i
        } = v(), g = q(), {
            device: l,
            lang: y,
            showCurrency: p,
            currency: d,
            isLogin: E
        } = k(), u = c.useRef(null), x = d === "JB";
        return c.useEffect(() => {
            !x && !g && u.current && H({
                device: l,
                currency: d,
                isLogin: E,
                showCurrency: p,
                lang: y
            }).then(a => {
                var o, P;
                (P = (o = u.current) == null ? void 0 : o.contentWindow) == null || P.postMessage({
                    type: "currency",
                    payload: a.currency
                }, "*")
            })
        }, [d, p]), c.useEffect(() => {
            !g && !x && (n({
                loading: !0
            }), H({
                device: l,
                currency: d,
                isLogin: E,
                showCurrency: p,
                lang: y
            }).then(a => {
                let o = S(e.url, "language", a.lang);
                o = S(o, "currency", a.currency), n({
                    loading: !1,
                    url: o
                })
            }))
        }, [y]), c.useEffect(() => {
            window.addEventListener("message", a => {
                if (a.data && a.data.racingEventsData) {
                    const o = a.data.racingEventsData;
                    console.log(o)
                }
            }), window.addEventListener("message", function(a) {
                a.origin === "https://bc-games.electro-bets.com" && a.data.type && a.data.type === "iframeHeight" && console.log("height", a.data.height)
            }, !1)
        }, []), c.useEffect(() => {
            var o;
            let a = {
                route: "/racing",
                action: {
                    fixture: "All"
                }
            };
            r.startsWith("/racing/history") ? a = {
                route: "/history/bets"
            } : r.startsWith("/racing/horse") ? a = {
                route: "/racing",
                action: {
                    fixture: "Horse"
                }
            } : r.startsWith("/racing/greyhound") && (a = {
                route: "/racing",
                action: {
                    fixture: "Greyhound"
                }
            }), u.current && ((o = u.current.contentWindow) == null || o.postMessage({
                event: "iframe_custom_event",
                detail: a
            }, "*"))
        }, [r]), x ? s.jsx(B, {
            txt: i("{{jb}} cannot be used in this game. Please switch to other assets.", {
                jb: G.freeCoin
            })
        }) : s.jsxs("div", {
            className: se,
            children: [!t.loading && s.jsx("iframe", {
                ref: u,
                src: t.url,
                width: "100%",
                height: "100%",
                frameBorder: 0
            }), t.loading && s.jsx(f, {})]
        })
    }),
    H = async function(r) {
        var i = r,
            {
                currency: e,
                isLogin: t
            } = i,
            n = j(i, ["currency", "isLogin"]);
        return W.post("/platform-horse/update", h({
            currency: e
        }, n))
    },
    ee = X.memo(function() {
        const e = k();
        let {
            lang: t
        } = w();
        t = t.replace(/-.+/, "");
        const n = L(async () => {
            try {
                const r = await Z(R(h({}, e), {
                    lang: t
                }));
                return r ? s.jsx($, {
                    url: r
                }) : s.jsx(b, {})
            } catch (r) {
                return Q(r), s.jsx(b, {
                    children: r.message
                })
            }
        }, [e.isLogin], {
            loadingNode: s.jsx(f, {})
        });
        return s.jsx(s.Fragment, {
            children: n
        })
    }),
    te = c.memo(function() {
        const e = A().login,
            t = I(),
            {
                t: n
            } = v();
        return L(async () => e ? (await K.initData, s.jsx(ee, {})) : (t("#/login"), s.jsx(B, {
            txt: n("Please sign up or sign in before visiting Racing page.")
        })), [e], {
            loadingNode: s.jsx(f, {})
        })
    });

function ne() {
    return c.useEffect(() => {
        const e = F.rooms.find(t => t.name === "Racing");
        e && F.joinRoom(e)
    }, []), L(async () => (await V.initData, s.jsx(te, {})), [], {
        loadingNode: s.jsx(f, {})
    })
}
const re = !0,
    ae = ({
        ctx: e
    }) => ({
        documentProps: Y(e.lang, "sports")
    }),
    se = "s13bywgy";
export {
    ne as Page, re as auth, ae as onPageData
};