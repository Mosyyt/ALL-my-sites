import {
    r as t,
    R
} from "./chunk-73e80d68.js";
import {
    l as G
} from "./chunk-654ef298.js";
import {
    j as e
} from "./chunk-a4af42e8.js";
import {
    ev as B,
    e4 as I,
    e5 as L,
    dL as E,
    e6 as F,
    cY as M,
    cl as w,
    cp as T,
    ci as V,
    dC as C
} from "./chunk-b53b00e3.js";
import {
    c as $
} from "./chunk-5bcb444f.js";
import {
    E as z
} from "./chunk-6e6e4b85.js";
const g = () => G("modules/games");

function r(o) {
    return t.lazy(async function() {
        const {
            asyncComponents: s
        } = await g();
        return s[o]()
    })
}

function p(o) {
    return async (...s) => (await (await g())[o]())(...s)
}
const K = p("openGameDetail"),
    Q = p("openGameDetailNodata"),
    U = p("openAllPlayers"),
    W = p("loadShareLikeStore"),
    X = r("GameRouter"),
    Y = r("MsgShareCard"),
    Z = r("ShareDetail"),
    q = r("SetSeed"),
    H = r("ProvablyFair"),
    J = r("ValidateDialog");
async function O(o, s, f) {
    return new Promise(l => {
        const m = () => {
                l(null), C.back()
            },
            c = h => {
                l(h), C.back()
            };
        C.push(e.jsx(_, {
            onSubmit: c,
            onCancel: m,
            defaultComment: o,
            name: s,
            id: f
        }), {
            closeable: !1
        })
    })
}
const _ = R.memo(function({
        id: o,
        name: s,
        defaultComment: f,
        onSubmit: l,
        onCancel: m
    }) {
        const {
            t: c
        } = B(), h = I(), b = L(), u = t.useRef(null), x = t.useRef(null), [i, v] = t.useState(s), [P, S] = t.useState(!1), [n, y] = t.useState(f), [A, j] = t.useState(s ? 64 : 0), N = E();
        F(() => {
            if (v(s), s && x.current) {
                const a = x.current.getBoundingClientRect();
                j(h ? a.width * 2 + 8 : a.width + 8)
            } else j(0)
        }, [s]);
        const D = P || n !== "",
            k = t.useCallback(a => {
                if (i && i !== "") {
                    const d = `[user=${o}, ${s}] ` + a;
                    l({
                        content: d,
                        haveAt: !0
                    })
                } else l({
                    content: a,
                    haveAt: !1
                })
            }, [i]);
        return t.useEffect(() => {
            const a = setTimeout(() => {
                u.current && u.current.focus()
            }, 200);
            return () => {
                clearTimeout(a)
            }
        }, []), e.jsxs(M, {
            className: ee,
            children: [b && e.jsxs("div", {
                className: "mobile-btns",
                children: [e.jsx("button", {
                    className: "cancel-btn",
                    onClick: () => m(),
                    children: c("Cancel")
                }), e.jsx(w, {
                    type: "conic",
                    onClick: () => n && k(n),
                    children: c("Post")
                })]
            }), !b && e.jsx(T, {
                onClick: () => m()
            }), e.jsxs("div", {
                className: $("post-comment-pop-header-input", D && "focus"),
                children: [e.jsx("div", {
                    className: "avatar-wrap",
                    children: e.jsx(V.Avatar, {
                        name: N.name,
                        userId: N.userId
                    })
                }), e.jsxs("div", {
                    className: "input-wrap",
                    children: [e.jsx("textarea", {
                        ref: u,
                        onFocus: () => S(!0),
                        onBlur: () => S(!1),
                        onKeyDown: a => {
                            a.key === "Backspace" && n === "" && (v(""), j(0))
                        },
                        value: n,
                        onChange: a => y(a.target.value),
                        maxLength: 500,
                        style: {
                            textIndent: A
                        },
                        placeholder: c("Add a comment\u2026")
                    }), i && e.jsxs("span", {
                        ref: x,
                        className: "at-user-name",
                        children: ["@ ", i]
                    })]
                })]
            }), e.jsxs("div", {
                className: "post-comment-pop-btns",
                children: [e.jsx("div", {
                    className: "left-btn",
                    children: e.jsx(z, {
                        className: "empji-wrap",
                        onChange: a => {
                            var d;
                            y(n + " " + a + " "), (d = u.current) == null || d.focus()
                        }
                    })
                }), e.jsx(w, {
                    type: "conic",
                    disabled: !n,
                    onClick: () => n && k(n),
                    children: c("Post")
                })]
            })]
        })
    }),
    ee = "p1a9nam4";
export {
    X as G, Y as M, H as P, Z as S, J as V, Q as a, U as b, q as c, W as l, K as o, O as p
};