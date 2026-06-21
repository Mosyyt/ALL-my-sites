import {
    j as e
} from "../../chunk-a4af42e8.js";
import {
    r as m
} from "../../chunk-73e80d68.js";
import {
    e3 as j,
    ev as x,
    ds as b,
    ct as P,
    eg as y,
    e5 as v,
    ed as B,
    dL as F,
    er as I,
    dQ as A,
    du as H,
    dy as M,
    cA as C,
    ez as w,
    dO as Q
} from "../../chunk-b53b00e3.js";
import {
    g as U
} from "../../chunk-7459b96e.js";
import {
    u as V
} from "../../chunk-b8efc996.js";
import {
    p as S
} from "../../chunk-03c302ce.js";
import {
    h as Z
} from "../../chunk-2d134749.js";
import {
    g as k
} from "../../chunk-27d137a6.js";
import "../../chunk-cf010ec4.js";
import "../../chunk-0e1ef679.js";
import "../../chunk-07977b38.js";
import "../../chunk-0e835458.js";
const _ = "/assets/loading.8efb4c88.png",
    q = "/assets/loading_w.1bab1a61.png";

function N() {
    const t = j();
    return e.jsx("div", {
        className: G,
        children: e.jsx("img", {
            src: t ? _ : q,
            alt: ""
        })
    })
}
const G = "s1lj7wzj",
    J = "/assets/b.6753dd6c.png",
    K = "/assets/w.e2ca5640.png";

function f(t) {
    return t > 9 ? t : "0" + t
}

function W({
    time: t
}) {
    return e.jsx(e.Fragment, {
        children: e.jsx(P, {
            endTime: t,
            children: ({
                days: i,
                hours: s,
                minutes: n,
                seconds: o
            }) => e.jsxs(e.Fragment, {
                children: [e.jsxs("span", {
                    children: [f(i), ":"]
                }), e.jsxs("span", {
                    children: [f(s), ":"]
                }), e.jsxs("span", {
                    children: [f(n), ":"]
                }), e.jsx("span", {
                    children: f(o)
                })]
            })
        })
    })
}

function X({
    time: t
}) {
    const {
        t: i
    } = x(), s = j();
    return t = t || 0, e.jsxs("div", {
        className: Y,
        children: [e.jsx("img", {
            src: s ? J : K,
            alt: ""
        }), e.jsx("div", {
            className: "tit",
            children: i("Site under maintenance")
        }), e.jsxs("div", {
            className: "desc",
            children: [i("{{mascot}} is currently upgrading this site, please stay tuned. Estimated time of restoration: {{time}}", {
                time: new Date(t).toLocaleString(),
                mascot: b.mascot,
                interpolation: {
                    escapeValue: !1
                }
            }), e.jsxs("div", {
                className: "countdown",
                children: [i("Countdown"), ": ", e.jsx(W, {
                    time: t
                })]
            })]
        }), e.jsx("div", {
            className: "bot",
            children: i("Appreciate your patience.")
        })]
    })
}
const Y = "s1vftz09",
    $ = {
        pt: "pt-br",
        tl: "en-ph"
    };

function tt(t) {
    return t ? "bc-game-dark-tile" : "bc-game-light-tile"
}

function T(t) {
    return t ? 460 : 100
}
let O = !1;
async function et(t) {
    O || (t ? await w.loadScript("https://ui.invisiblesport.com/bt-renderer.min.js") : await w.loadScript("https://bcgame.sptsportscdn.com/bt-renderer.min.js"), O = !0)
}
async function R(t, i, s, n, o, a) {
    if (await et(o), s && n) {
        const {
            lang: d,
            jwtToken: r
        } = await H.post("/platform-sports/v14/login", {
            device: t,
            lang: i,
            currency: s,
            brandId: k()
        });
        return a ? r : {
            jwtToken: r,
            lng: d
        }
    } else return ""
}
const st = m.memo(function({
        device: t,
        currency: i,
        isLogin: s,
        token: n,
        isDarken: o,
        lng: a,
        isDev: d
    }) {
        const {
            urlParsed: r
        } = y(), c = !!V().chatOrNtice, [E, L] = m.useState(0), u = v(), g = B(), l = m.useRef();

        function z() {
            L(p => p + 1)
        }
        return m.useEffect(() => {
            if (r.pathname === "/sports") {
                const p = r.search["bt-path"] || "/";
                if (l.current) try {
                    l.current.updateOptions({
                        url: p
                    })
                } catch (h) {}
            }
        }, [r]), m.useEffect(() => {
            const p = {
                token: n,
                brand_id: k(),
                onTokenExpired: () => R(t, a, i, s, d, !0),
                themeName: tt(o),
                lang: a,
                target: document.getElementById("betby"),
                stickyTop: 0,
                betslipZIndex: 100,
                cssUrls: ["https://fonts.googleapis.com/css2?family=Montserrat"],
                fontFamilies: ["Montserrat"],
                onLogin: function() {
                    g("#/login")
                },
                onRegister: function() {
                    g("#/login/regist")
                },
                onRecharge: function() {
                    g("#/deposit")
                },
                betSlipOffsetTop: u ? 130 : 0,
                betSlipOffsetBottom: u ? 70 : 0,
                betSlipOffsetRight: u ? 0 : T(c),
                onSessionRefresh: z
            };
            n || delete p.token;
            var h = new BTRenderer().initialize(p);
            return l.current = h, () => {
                l.current = void 0, h.kill()
            }
        }, [n, o, a, E]), m.useEffect(() => {
            l.current && l.current.updateOptions({
                betSlipOffsetRight: u ? 0 : T(c)
            })
        }, [c]), e.jsx("div", {
            id: "betby",
            style: {
                minHeight: "80vh"
            }
        })
    }),
    D = m.memo(function() {
        x();
        const t = v(),
            i = j(),
            s = F().login,
            n = y().lang,
            o = b.isDevHost,
            {
                currencyName: a
            } = I();
        return A(async () => {
            var d;
            try {
                const r = (d = $[n]) != null ? d : n,
                    c = await R(t ? 1 : 2, r, a, s, o);
                return e.jsx(st, {
                    token: c ? c.jwtToken : "",
                    isDarken: i,
                    lng: c ? c.lng : r,
                    isDev: o,
                    device: t ? 1 : 2,
                    currency: a,
                    isLogin: s
                })
            } catch (r) {
                return M(String(r)), e.jsx(C, {
                    children: r.message
                })
            }
        }, [i, n, s, a], {
            loadingNode: e.jsx(N, {})
        })
    });

function nt() {
    const {
        data: t,
        error: i
    } = Q(() => Z());
    if (m.useEffect(() => {
            const n = S.rooms.find(o => o.name === "Sports");
            n && S.joinRoom(n)
        }, []), i) return e.jsx(D, {});
    const s = t == null ? void 0 : t.find(n => n.type === "Sports");
    return s && s.maintainSwitch ? e.jsx(X, {
        time: s.completionTime
    }) : t ? e.jsx(D, {}) : e.jsx(N, {})
}
const it = ({
    ctx: t
}) => ({
    documentProps: U(t.lang, "sports")
});
export {
    nt as Page, it as onPageData
};