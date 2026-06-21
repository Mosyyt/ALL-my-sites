var Ye = Object.defineProperty;
var z = Object.getOwnPropertySymbols;
var Ke = Object.prototype.hasOwnProperty,
    Ze = Object.prototype.propertyIsEnumerable;
var B = (x, d, g) => d in x ? Ye(x, d, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: g
    }) : x[d] = g,
    S = (x, d) => {
        for (var g in d || (d = {})) Ke.call(d, g) && B(x, g, d[g]);
        if (z)
            for (var g of z(d)) Ze.call(d, g) && B(x, g, d[g]);
        return x
    };
import {
    j as e
} from "../../../chunk-a4af42e8.js";
import {
    eg as q,
    eh as O,
    ev as h,
    ck as Je,
    ds as Qe,
    a as _,
    cp as Xe,
    cJ as b,
    cS as N,
    dx as es,
    cz as ss,
    d0 as as,
    e3 as ts,
    cL as Y,
    ap as K,
    dL as V,
    dO as ns,
    cA as W,
    cT as P,
    ci as R,
    dy as I,
    du as C,
    ed as rs,
    dk as E,
    eq as is,
    dr as cs,
    dZ as ls,
    e5 as L,
    d9 as os,
    cl as U,
    cB as Z,
    dd as ms,
    cZ as ds,
    e6 as us,
    dg as hs,
    __tla as xs
} from "../../../chunk-b53b00e3.js";
import {
    r as l,
    R as j
} from "../../../chunk-73e80d68.js";
import {
    c as p
} from "../../../chunk-5bcb444f.js";
import {
    _ as ps
} from "../../../chunk-cf010ec4.js";
import {
    G as js
} from "../../../chunk-a21360ec.js";
import {
    P as gs
} from "../../../chunk-1d6a2d71.js";
import {
    p as fs,
    G as vs
} from "../../../chunk-21fa96d0.js";
import {
    g as Ns,
    R as ys,
    P as bs,
    C as ks
} from "../../../chunk-6d77236a.js";
import {
    w as M
} from "../../../chunk-e20af49b.js";
import {
    i as ws,
    b as _s,
    j as Is,
    k as Cs,
    g as Us
} from "../../../chunk-2d134749.js";
import {
    C as Ts,
    __tla as Ss
} from "../../../chunk-661881bd.js";
import {
    H as qs
} from "../../../chunk-f9d60830.js";
import "../../../chunk-78c5b721.js";
import {
    __tla as Ps
} from "../../../chunk-0e835458.js";
import "../../../chunk-19b7f447.js";
import "../../../chunk-421da83a.js";
import "../../../chunk-394d30c6.js";
import "../../../chunk-07977b38.js";
import {
    __tla as Rs
} from "../../../chunk-0e1ef679.js";
import "../../../chunk-420c54b8.js";
import {
    __tla as Ls
} from "../../../chunk-654ef298.js";
import "../../../chunk-6e6e4b85.js";
import "../../../chunk-47df8c47.js";
import "../../../chunk-3dc03e47.js";
let J, Q, X, As = Promise.all([(() => {
    try {
        return xs
    } catch (x) {}
})(), (() => {
    try {
        return Ss
    } catch (x) {}
})(), (() => {
    try {
        return Ps
    } catch (x) {}
})(), (() => {
    try {
        return Rs
    } catch (x) {}
})(), (() => {
    try {
        return Ls
    } catch (x) {}
})()]).then(async () => {
    function x() {
        const {
            routeParams: s
        } = q();
        return s.gameUnique
    }
    const d = O;
    l.createContext({});
    const g = j.memo(function({
            categoryId: s,
            fullName: a,
            gameUnique: t,
            info: n
        }) {
            const {
                t: r
            } = h();

            function i(m) {
                return m === 4 ? {
                    label: r("Live"),
                    path: "/gamelist/live"
                } : m === 18 ? {
                    label: r("{{site}} Originals", {
                        site: Qe.siteName
                    }),
                    path: "/gamelist/brand"
                } : {
                    label: r("Slots"),
                    path: "/gamelist/slots"
                }
            }
            const o = [i(s), {
                label: a,
                path: `/game/${t}`
            }];
            return n && o.push({
                label: r("Info"),
                path: ""
            }), e.jsx(Je, {
                list: o
            })
        }),
        ee = j.memo(function() {
            const {
                t: s
            } = h(), [a, t] = l.useState("");
            return l.useEffect(() => {
                _.on("game-top-nav-bonus-monty-tips", n => {
                    t(n)
                })
            }, []), !a || a === "" ? null : e.jsxs("div", {
                className: se,
                children: [e.jsx(Xe, {
                    onClick: () => t("")
                }), e.jsx("div", {
                    className: "check",
                    children: e.jsx(b, {
                        name: "Check"
                    })
                }), e.jsxs("p", {
                    className: "desc",
                    children: [e.jsx("span", {
                        children: s("Congrats! You have successfully unlocked your bonus money totaling: ")
                    }), e.jsx("span", {
                        className: "mo",
                        children: a
                    })]
                })]
            })
        }),
        se = "bm4ycac";

    function ae() {
        const s = d().gameInfo.read();
        return e.jsxs("div", {
            className: p(te, "game-top-nav-wrap"),
            children: [e.jsx(g, {
                gameUnique: s.gameUnique,
                categoryId: s.categoryId,
                fullName: s.fullName
            }), s.categoryId !== 18 && e.jsxs("div", {
                className: "provider",
                children: [e.jsx("span", {
                    className: "tit_by",
                    children: " By "
                }), e.jsx(N, {
                    href: `/provider/${s.providerName}`,
                    className: "under_txt",
                    children: s.providerName
                })]
            }), e.jsx(ee, {})]
        })
    }
    const te = "t1m66kj2",
        ne = es(() => ps(() =>
            import ("../../../LiveStatsContent.eef1a617.js"), ["assets/LiveStatsContent.eef1a617.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-644603d0.js", "assets/chunk-5bcb444f.js", "assets/LiveStatsContent.27d0be88.css"])),
        re = l.memo(function() {
            const {
                t: s
            } = h(), [a, t] = l.useState(!1);
            l.useEffect(() => (_.on("livestate_toggle", t), () => {
                _.off("livestate_toggle", t)
            }), []);
            const [n] = l.useState({
                x: (window.innerWidth - _.relativePx(300)) / 2,
                y: window.innerHeight / 2
            });
            return e.jsx(ss, {
                x: n.x,
                y: n.y,
                title: s("Live Stats"),
                visible: a,
                onClose: () => t(!1),
                children: e.jsx(as, {
                    className: ie,
                    bodyLock: !1,
                    children: a && e.jsx(ne, {})
                })
            })
        }),
        ie = "c1ld52o8",
        ce = l.memo(function({
            logo: s,
            logo_w: a
        }) {
            const t = ts();
            return e.jsx(Y, {
                src: t ? s : a,
                args: "w=200",
                alt: ""
            })
        }),
        le = j.memo(function() {
            const {
                t: s
            } = h(), a = d().gameInfo.read(), t = a.providerInfo;
            return e.jsxs("div", {
                className: oe,
                children: [e.jsx("div", {
                    className: "box-title",
                    children: s("About The Provider")
                }), e.jsxs("div", {
                    className: "provider-wrap",
                    children: [e.jsx("div", {
                        className: "provider-banner",
                        children: e.jsx(ce, {
                            logo: t.logo,
                            logo_w: t.logoWhite
                        })
                    }), e.jsx("div", {
                        className: "provider-introduce",
                        dangerouslySetInnerHTML: {
                            __html: K(t.introduction)
                        }
                    }), e.jsxs(N, {
                        href: `/provider/${a.providerName}`,
                        className: "opt-btn",
                        children: [t.totalGame, " ", s("Games"), " ", e.jsx(b, {
                            name: "Arrow"
                        })]
                    }), e.jsx(N, {
                        href: `/provider/${a.providerName}`,
                        className: "opt-btn",
                        children: s("More Info")
                    })]
                })]
            })
        }),
        oe = "scmn7je",
        me = j.memo(function() {
            const {
                t: s
            } = h(), a = d().gameInfo.read(), {
                introduction: t
            } = d().gameIntroduction.read(), n = t.replaceAll("[GAMENAME]", a.fullName), r = a.slotsInfo;
            return e.jsxs("div", {
                className: ue,
                children: [e.jsxs("div", {
                    className: "game-img-and-desc",
                    children: [e.jsx(Y, {
                        className: "game-banner",
                        src: a.thumbnail,
                        args: "w=200",
                        alt: ""
                    }), e.jsxs("div", {
                        className: "right-desc",
                        children: [a.tags && e.jsx("div", {
                            className: "game-tags",
                            children: a.tags.map(i => e.jsx(N, {
                                href: `/tagname/${i}`,
                                className: "tag-item",
                                children: a.translatedTags ? a.translatedTags[i] : i
                            }, i))
                        }), e.jsxs("div", {
                            className: "intros",
                            children: [e.jsxs("div", {
                                className: "left-intros",
                                children: [e.jsx(y, {
                                    title: s("RTP (Return to Player)"),
                                    introValue: r.rtpDes,
                                    classType: "g",
                                    config: {
                                        isPercent: !0
                                    }
                                }), e.jsx(y, {
                                    title: s("Reel Resign"),
                                    introValue: r.reelDesign,
                                    classType: "w"
                                }), e.jsx(y, {
                                    title: s("Lucky Spin"),
                                    introValue: r.freeSpins,
                                    classType: "w",
                                    config: {
                                        isSpin: !0
                                    }
                                }), e.jsx(y, {
                                    title: s("Win Ways"),
                                    introValue: r.winWays,
                                    classType: "w"
                                })]
                            }), e.jsxs("div", {
                                className: "right-intros",
                                children: [e.jsx(y, {
                                    title: s("Max Win"),
                                    introValue: r.maxWin,
                                    classType: "g"
                                }), e.jsx(y, {
                                    title: s("Hit Rate"),
                                    introValue: r.hitRate,
                                    classType: "w",
                                    config: {
                                        isPercent: !0
                                    }
                                }), e.jsx(y, {
                                    title: s("Volatility"),
                                    introValue: r.volatility,
                                    classType: "y",
                                    config: {
                                        isVolatility: !0
                                    }
                                }), e.jsx(y, {
                                    title: s("Stakes Range"),
                                    introValue: r.stakeRange,
                                    classType: "g"
                                })]
                            })]
                        })]
                    })]
                }), t && e.jsxs("div", {
                    className: "game-intro",
                    children: [e.jsx("h2", {
                        className: "desc-title",
                        children: e.jsx("strong", {
                            children: s("About this game")
                        })
                    }), e.jsx("div", {
                        className: "desc-content",
                        dangerouslySetInnerHTML: {
                            __html: K(n)
                        }
                    })]
                })]
            })
        });

    function de(s, a) {
        const {
            t
        } = h();
        if (s === null || !s) return "--";
        if (a.isVolatility) switch (s) {
            case 1:
                return t("Low");
            case 2:
                return t("Medium");
            default:
                return t("High")
        } else return a.isSpin ? Number(s) > 0 ? t("Yes") : t("No") : typeof s == "boolean" ? t(s ? "Yes" : "No") : a.isPercent ? s + "%" : String(s)
    }
    const y = j.memo(function({
            introValue: s,
            title: a,
            config: t = {},
            classType: n = ""
        }) {
            const r = !!s,
                i = de(s, t);
            return e.jsxs("div", {
                className: p("intro-item", r ? "" : "hidden-value"),
                children: [e.jsx("p", {
                    children: a
                }), e.jsx("p", {
                    className: r ? n : "",
                    children: i
                })]
            })
        }),
        ue = "d1i1owal";

    function $({
        num: s,
        size: a,
        activeNum: t = 0
    }) {
        return e.jsx("div", {
            className: p("star-wrap", ge),
            children: new Array(5).fill(null).map((n, r) => e.jsx(b, {
                className: p(a, t - 1 >= r && "active", r >= s && "hide"),
                name: "Favorites1"
            }, r))
        })
    }

    function he({
        gameUnique: s,
        myScore: a,
        setUpdate: t
    }) {
        const [n, r] = l.useState(0), [i, o] = l.useState(!1), {
            t: m
        } = h(), c = V(), f = l.useCallback(function(u) {
            if (a === u) return;
            if (i) return !1;
            if (c.vipLevel < 4) {
                I(m("Unlock at VIP 4"));
                return
            }
            o(!0);
            const k = m("Thanks for your feedback");
            C.post("/comment/star/tap/", {
                gameUnique: s,
                rank: u
            }).then(w => {
                I(k), o(!1), t(u)
            }).catch(w => {
                o(!1), I(w)
            })
        }, [a]);
        return e.jsx("div", {
            className: p("star-wrap", fe),
            children: [1, 2, 3, 4, 5].map(u => e.jsx(b, {
                onMouseEnter: () => r(u),
                onClick: () => f(u),
                onMouseLeave: () => r(0),
                className: p(a >= u && "active", n >= u && "active", n > 0 && u > n && u <= a && "disactive", "big"),
                name: a >= u || n >= u ? "Favorites1" : "Star"
            }, u))
        })
    }

    function xe(s) {
        return new Array(5).fill(null).map((a, t) => {
            var n;
            return {
                star: 5 - t,
                percent: (n = s[`${5-t}`]) != null ? n : "0"
            }
        })
    }
    async function pe(s) {
        try {
            return await C.post("/comment/star/scores/", {
                gameUnique: s
            })
        } catch (a) {
            return {
                avg: "",
                scores: {},
                my: 0,
                count: 0,
                users: []
            }
        }
    }
    const je = l.memo(function({
            gameUnique: s
        }) {
            const {
                t: a
            } = h(), t = V().login, [n, r] = l.useState(0), {
                data: i,
                error: o
            } = ns(() => pe(s), [t, n, s]);
            return o ? e.jsx("div", {
                className: A,
                children: e.jsx("div", {
                    className: "ratings-wrap",
                    style: {
                        height: "250px"
                    },
                    children: e.jsx(W, {
                        children: o.message
                    })
                })
            }) : i ? e.jsx("div", {
                className: A,
                children: e.jsxs("div", {
                    className: "ratings-wrap",
                    children: [e.jsxs("div", {
                        className: "top-wrap",
                        children: [e.jsxs("div", {
                            className: "game-star",
                            children: [e.jsxs("div", {
                                className: "grade-num",
                                children: [e.jsx("span", {
                                    className: "avg",
                                    children: i.avg ? Number(i.avg).toFixed(1) : 0
                                }), e.jsx("span", {
                                    className: "m-txt",
                                    children: "/5"
                                })]
                            }), e.jsxs("div", {
                                className: "",
                                children: [e.jsx($, {
                                    num: 5,
                                    activeNum: Math.ceil(Number(i.avg))
                                }), e.jsx("div", {
                                    className: "txt",
                                    children: "out of 5"
                                })]
                            })]
                        }), e.jsx("div", {
                            className: "star-progress",
                            children: xe(i.scores).map((m, c) => e.jsxs("div", {
                                className: "progress-item",
                                children: [e.jsx($, {
                                    num: m.star,
                                    size: "small"
                                }), e.jsx("div", {
                                    className: "progress-bg",
                                    children: e.jsx("div", {
                                        className: "progress",
                                        style: {
                                            width: m.percent + "%"
                                        }
                                    })
                                })]
                            }, c))
                        })]
                    }), e.jsxs("div", {
                        className: "bottom-wrap",
                        children: [e.jsxs("div", {
                            className: "rate-game",
                            children: [e.jsx("div", {
                                className: "txt",
                                title: a("Rate this Game"),
                                children: a("Rate this Game")
                            }), e.jsx(he, {
                                gameUnique: s,
                                myScore: i.my,
                                setUpdate: r
                            })]
                        }), e.jsxs("div", {
                            className: "rate-user",
                            children: [e.jsx("div", {
                                className: "user-avatar",
                                children: i.users.map(m => e.jsx(R.Avatar, {
                                    userId: m,
                                    name: ""
                                }, m))
                            }), e.jsxs("div", {
                                className: "rate-num",
                                children: [i.count, " ", a("Ratings")]
                            })]
                        })]
                    })]
                })
            }) : e.jsx("div", {
                className: A,
                children: e.jsx("div", {
                    className: "ratings-wrap",
                    style: {
                        height: "200px"
                    },
                    children: e.jsx(P, {})
                })
            })
        }),
        A = "szx7awb",
        ge = "svizgii",
        fe = "hm27ask";

    function F() {
        const {
            routeParams: s
        } = q();
        return s.gameUnique
    }
    const D = O;
    l.createContext({});
    const ve = l.memo(function({
            makeUrl: s
        }) {
            const {
                t: a
            } = h(), t = rs(), n = F(), r = V(), i = async () => {
                if (!r.login) {
                    t("#/login");
                    return
                }
                if (r.vipLevel < 4) {
                    I(a("Unlock at VIP 4"));
                    return
                }
                async function o(m) {
                    const c = await fs(m);
                    c && C.post("/comment/add/", {
                        content: c.content,
                        gameUnique: n
                    }).then(f => {
                        t(s({
                            page: 1,
                            force: !0
                        }))
                    }).catch(f => {
                        o(c.content), I(f)
                    })
                }
                o("")
            };
            return e.jsxs("div", {
                className: Ne,
                children: [e.jsx(E, {
                    children: r.login && e.jsx(R.Avatar, {
                        userId: r.userId,
                        name: r.name
                    })
                }), e.jsxs("button", {
                    className: "comment-input-btn",
                    onClick: i,
                    children: [e.jsx("p", {
                        children: a("Leave your comment")
                    }), e.jsx(b, {
                        name: "Emjoy"
                    })]
                })]
            })
        }),
        Ne = "c1b59e1q",
        ye = j.memo(function({
            comment: s,
            deleteComment: a
        }) {
            const t = l.useRef(-1),
                n = F(),
                [r, i] = is(Ns(s)),
                o = l.useCallback(m => {
                    t.current < 0 && (t.current = 1, C.post("/comment/reply/list/", {
                        commentId: s.commentId,
                        page: 1,
                        pageSize: 20
                    }).then(c => {
                        c && (c.list.length > 3 ? (cs.push(e.jsx(ys, {
                            gameUnique: n,
                            deleteFn: () => a(),
                            replyHttpInfo: c,
                            commentId: s.commentId
                        })), m(!1)) : (i({
                            replyList: c.list
                        }), m(!0)))
                    }).catch(I).finally(() => t.current = -1))
                }, []);
            return e.jsx(bs, {
                gameUnique: n,
                commentInfo: r.comment,
                replyInfoList: r.replyList,
                deleteComment: a,
                inPop: !1,
                getAllReplies: o
            })
        }),
        be = j.memo(function({
            loading: s,
            comment: a,
            nextHref: t,
            deleteComment: n
        }) {
            const {
                t: r
            } = h(), i = a ? a.list || [] : [];
            if (!a || i.length === 0) return e.jsx("div", {
                className: ke,
                children: e.jsx(W, {})
            });
            const o = a.totalPage - a.page;
            return e.jsx("div", {
                className: we,
                children: e.jsxs("div", {
                    className: "overflow-inner",
                    children: [i.map((m, c) => e.jsx(ye, {
                        deleteComment: () => n(c),
                        comment: m
                    }, `${m.commentId}-${c}`)), o > 0 && e.jsx("div", {
                        className: "loading-more",
                        children: s ? e.jsx(P, {}) : t && e.jsxs(N, {
                            className: "more-link",
                            href: t,
                            children: [e.jsx("p", {
                                children: r("View More Comments")
                            }), e.jsx(b, {
                                name: "Arrow"
                            })]
                        })
                    })]
                })
            })
        }),
        ke = "l1ogepnv",
        we = "c13isd5j",
        _e = j.memo(function() {
            const {
                t: s
            } = h(), a = ls(), {
                urlParsed: t
            } = q(), n = t.search.sort || "createTime", {
                gameComment: r
            } = D(), [i, o] = l.useTransition(), [m, c] = l.useState(r), f = m.read(), u = l.useRef(null);
            u.current = l.useMemo(() => {
                const v = u.current;
                return v && f.page !== 1 && f.list.unshift(...v.list), f
            }, [f]);

            function k(v) {
                v.force && (v.force = Date.now());
                const G = S(S({}, t.search), v);
                return v.force || delete G.force, `${t.pathname}?${new URLSearchParams(G).toString()}`
            }
            l.useEffect(() => {
                r !== m && o(() => {
                    c(r)
                })
            }, [r]);
            const w = u.current,
                Oe = v => {
                    w.list.splice(v, 1), w.total -= 1, u.current = S({}, w), a()
                };
            return e.jsxs("div", {
                className: p(Ie, "comment-wrap"),
                children: [e.jsxs("div", {
                    className: "comment-num-title",
                    children: [e.jsx("div", {
                        className: "cut-l tit",
                        children: e.jsx("p", {
                            children: s("Comments")
                        })
                    }), e.jsxs(ks, {
                        iconElement: e.jsx(b, {
                            name: "Tighten"
                        }),
                        children: [e.jsx(N, {
                            className: p("click-pop-item", n === "createTime" && "select"),
                            href: k({
                                sort: "createTime",
                                page: 1,
                                force: !0
                            }),
                            children: s("Newest First")
                        }), e.jsx(N, {
                            className: p("click-pop-item", n === "replyCount" && "select"),
                            href: k({
                                sort: "replyCount",
                                page: 1,
                                force: !0
                            }),
                            children: s("Top Comments")
                        }), e.jsx(N, {
                            className: p("click-pop-item", n === "likeCount" && "select"),
                            href: k({
                                sort: "likeCount",
                                page: 1,
                                force: !0
                            }),
                            children: s("Top Likes")
                        })]
                    })]
                }), e.jsx(ve, {
                    makeUrl: k
                }), e.jsx(be, {
                    deleteComment: Oe,
                    loading: i,
                    nextHref: f.page < f.totalPage ? k({
                        page: f.page + 1
                    }) : void 0,
                    comment: w
                })]
            })
        }),
        Ie = "c1gc6kol";

    function Ce() {
        return e.jsx(l.Suspense, {
            fallback: e.jsx(P, {}),
            children: e.jsx(_e, {})
        })
    }
    const Ue = j.memo(function() {
            const s = x();
            return e.jsxs("div", {
                className: Te,
                children: [e.jsx(je, {
                    gameUnique: s
                }), e.jsx(Ce, {})]
            })
        }),
        Te = "ro52fuk",
        Se = [M.gold, M.silver, M.copper];

    function qe(s) {
        const a = new Date(s),
            t = {
                year: "numeric",
                month: "long",
                day: "numeric"
            };
        return a.toLocaleDateString("en-US", t)
    }
    const H = j.memo(function({
            tableList: s
        }) {
            const {
                t: a
            } = h(), t = L();
            return s.length === 0 ? e.jsx(W, {}) : e.jsx("div", {
                className: Pe,
                children: e.jsxs(os, {
                    children: [e.jsx("thead", {
                        children: e.jsxs("tr", {
                            children: [e.jsx("th", {
                                children: a("Rank")
                            }), e.jsx("th", {
                                children: a("Player")
                            }), !t && e.jsxs(e.Fragment, {
                                children: [e.jsx("th", {
                                    children: a("Time")
                                }), e.jsx("th", {
                                    children: a("Bet Amount")
                                })]
                            }), e.jsx("th", {
                                children: a("Payout")
                            }), e.jsx("th", {
                                children: a("Win Amount")
                            })]
                        })
                    }), e.jsx("tbody", {
                        children: s.map((n, r) => e.jsxs("tr", {
                            children: [e.jsxs("td", {
                                className: "center",
                                children: [e.jsx("img", {
                                    className: "user-ico",
                                    src: Se[r]
                                }), e.jsx("span", {
                                    children: r + 1
                                })]
                            }), e.jsx("td", {
                                className: "w",
                                children: n.nickName
                            }), !t && e.jsxs(e.Fragment, {
                                children: [e.jsx("td", {
                                    children: qe(n.createTime)
                                }), e.jsx("td", {
                                    className: "w",
                                    children: e.jsx(R.CoinFormat, {
                                        name: n.currencyName,
                                        disableLocal: !0,
                                        icon: !0,
                                        amount: Number(n.betAmount)
                                    })
                                })]
                            }), e.jsxs("td", {
                                children: [(n.odds / 1e4).toFixed(2), "\xD7"]
                            }), e.jsx("td", {
                                className: "g",
                                children: e.jsx(R.CoinFormat, {
                                    name: n.currencyName,
                                    disableLocal: !0,
                                    icon: !0,
                                    amount: Number(n.winAmount)
                                })
                            })]
                        }))
                    })]
                })
            })
        }),
        Pe = "w38v53o",
        Re = j.memo(function({
            tableInfo: s
        }) {
            const {
                t: a
            } = h(), [t, n] = l.useState(0);
            return e.jsxs("div", {
                className: Le,
                children: [e.jsxs("div", {
                    className: "game-desc-tabs",
                    children: [e.jsx(U, {
                        className: p(t === 0 && "active"),
                        onClick: () => n(0),
                        children: a("Big Win")
                    }), e.jsx(U, {
                        className: p(t === 1 && "active"),
                        onClick: () => n(1),
                        children: a("Lucky Win")
                    }), e.jsx(U, {
                        className: p(t === 2 && "active"),
                        onClick: () => n(2),
                        children: a("Description")
                    }), e.jsx(U, {
                        className: p(t === 3 && "active"),
                        onClick: () => n(3),
                        children: a("Review")
                    })]
                }), t === 0 && e.jsx(T, {
                    children: e.jsx(H, {
                        tableList: s.bigWinRank
                    })
                }), t === 1 && e.jsx(T, {
                    children: e.jsx(H, {
                        tableList: s.luckyWinRank
                    })
                }), t === 2 && e.jsx(T, {
                    children: e.jsx(me, {})
                }), t === 3 && e.jsx(T, {
                    children: e.jsx(Ue, {})
                })]
            })
        }),
        T = j.memo(({
            children: s
        }) => e.jsx(Z, {
            children: e.jsx(l.Suspense, {
                fallback: e.jsx(P, {}),
                children: s
            })
        })),
        Le = "t1a4cnqf",
        Ae = "/assets/trophy.9b1b3ddb.png",
        Ve = {
            trophy: Ae
        },
        We = j.memo(function() {
            h();
            const s = d().gameInfo.read(),
                [a, t] = l.useState({
                    open: !1
                }),
                [n, r] = l.useState({
                    bigWinRank: [],
                    luckyWinRank: []
                });

            function i(m) {
                C.get(`/game/support/home/get-rank/${m}`).then(c => {
                    c && r(c)
                })
            }
            l.useEffect(() => {
                i(s.gameUnique)
            }, [s.gameUnique]);
            const o = l.useMemo(() => n.luckyWinRank[0], [n]);
            return e.jsxs("div", {
                className: Ee,
                children: [e.jsxs("div", {
                    className: "game-desc-wrap",
                    children: [e.jsxs("div", {
                        className: "left-fullname",
                        children: [e.jsx("h2", {
                            children: s.fullName
                        }), e.jsxs("div", {
                            className: "provider",
                            children: [e.jsx("span", {
                                children: "By"
                            }), e.jsx(N, {
                                href: `/provider/${s.providerName}`,
                                children: s.providerName
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: p("right-tigger", a.open && "open"),
                        children: [o && e.jsxs("div", {
                            className: "first-box",
                            children: [e.jsx("img", {
                                src: Ve.trophy
                            }), e.jsxs("span", {
                                children: [(o.odds / 1e4).toFixed(2), "\xD7"]
                            }), e.jsx("span", {
                                children: o.nickName
                            })]
                        }), e.jsx(U, {
                            onClick: () => t({
                                open: !a.open
                            }),
                            children: e.jsx(b, {
                                name: "Arrow"
                            })
                        })]
                    })]
                }), e.jsx(ms, {
                    visible: a.open,
                    children: e.jsx(Re, {
                        tableInfo: n
                    })
                })]
            })
        }),
        Ee = "g1tep4lm",
        Me = j.memo(function() {
            const {
                t: s
            } = h(), a = d(), t = x(), n = a.gameRelated, r = a.gameInfo, i = l.useCallback(() => r.read().gameIdentity.gameInfoId, [r]);
            return e.jsxs("div", {
                className: $e,
                children: [e.jsx(We, {}), e.jsx(js, {
                    source: n,
                    originalId: i,
                    className: "related-games",
                    line: 1,
                    title: s("Recommended Games"),
                    link: `/gamelist/game-related?gameUnique=${t}`
                }), e.jsx("div", {
                    className: "box-title",
                    children: s("Latest bet & Race")
                }), e.jsx("div", {
                    className: "latest",
                    children: e.jsx(ds.Target, {
                        id: `tabs-${t}`
                    })
                }), e.jsx(le, {}), e.jsx(gs, {})]
            })
        }),
        $e = "sh9ik1h";

    function Fe({
        children: s
    }) {
        const a = L(),
            t = x();
        return us(() => {
            (document.scrollingElement || document.body).scrollTop = 0
        }, [t]), e.jsxs(e.Fragment, {
            children: [e.jsx(De, {}), e.jsx(E, {
                children: e.jsx(re, {})
            }), e.jsxs("div", {
                className: p(He, "page-max-width-wrap"),
                children: [!a && e.jsx(ae, {}), e.jsx(E, {
                    children: s
                }), e.jsx(Z, {
                    children: e.jsx(Me, {})
                })]
            })]
        })
    }

    function De() {
        const s = d().gameInfo.read();
        return e.jsx(Ge, {
            disabled: s.disabled,
            name: s.fullName
        })
    }
    const He = "ss09y91";

    function Ge({
        name: s,
        disabled: a
    }) {
        const t = () => {
            _.emit("live_support", !0)
        };
        return h(), a ? e.jsx("div", {
            onClick: t,
            className: ze,
            children: e.jsxs(hs, {
                name: s,
                i18nKey: "trans.mainpage.casino.desc",
                children: ["Sorry, ", {
                    name: s
                }, " is temporarily disabled for some reason. Please ", e.jsx("span", {
                    className: "cl-primary",
                    children: "contact customer support"
                }), " for help, or try another game."]
            })
        }) : null
    }
    const ze = "sxhkg6h";
    J = function() {
        Be(), l.useEffect(() => {
            _.emit("ad_track", "other_events", {
                e: "enterGame"
            })
        }, []);
        const {
            t: s
        } = h(), a = L(), t = D().gameUnique.read(), n = [{
            label: s("High rollers"),
            value: qs
        }, {
            label: s(a ? "Contest" : "Wager contest"),
            value: Ts
        }];
        return e.jsx(Fe, {
            children: e.jsx(vs, {
                tabs: n,
                gameUnique: t
            })
        })
    }, X = ({
        ctx: s
    }) => {
        const {
            urlParsed: a,
            routeParams: t,
            lang: n
        } = s, r = parseInt(a.search.page || "1"), i = a.search.sort || "createTime", o = t.gameUnique, m = ws(o, n);
        return {
            gameInfo: m,
            providerData: _s(),
            gameComment: Is(o, r, i),
            gameIntroduction: Cs(o, n),
            gameRelated: Us({
                gameUnique: o,
                sectionId: "game_related"
            }),
            gameUnique: m.then(c => c == null ? void 0 : c.gameUnique),
            documentProps: m.then(c => ({
                title: c ? c.seoTitle : o,
                description: c ? c.seoDescription : o,
                keywords: c ? c.seoKeywords : o,
                gameUnique: c ? c.gameUnique : o
            }))
        }
    }, Q = async s => s.routeParams.gameUnique === "crash-trenball" ? {
        pageContext: {
            redirectTo: "/game/crash?type=trenball"
        }
    } : {
        pageContext: {}
    };

    function Be() {
        const s = q().routeParams.gameUnique,
            a = L(),
            t = l.useMemo(() => s === "trade" && !a, [s, a]);
        l.useEffect(() => {
            if (t) {
                const n = document.createElement("style");
                return n.innerText = `
        .page-max-width-wrap {
          max-width: unset !important;
        }
        .page-max-width-wrap .ui-breadcrumb {
          display: none !important;
        }
      `.replace(/\s(!=\.)/gm, ""), document.head.appendChild(n), () => {
                    document.head.removeChild(n)
                }
            }
        }, [t])
    }
});
export {
    J as Page, As as __tla, Q as onBeforeRender, X as onPageData
};