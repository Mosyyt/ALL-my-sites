var le = Object.defineProperty,
    me = Object.defineProperties;
var de = Object.getOwnPropertyDescriptors;
var H = Object.getOwnPropertySymbols;
var ue = Object.prototype.hasOwnProperty,
    pe = Object.prototype.propertyIsEnumerable;
var q = (i, l, d) => l in i ? le(i, l, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: d
    }) : i[l] = d,
    N = (i, l) => {
        for (var d in l || (l = {})) ue.call(l, d) && q(i, d, l[d]);
        if (H)
            for (var d of H(l)) pe.call(l, d) && q(i, d, l[d]);
        return i
    },
    C = (i, l) => me(i, de(l));
import {
    j as e
} from "./chunk-a4af42e8.js";
import {
    R as k,
    r as j
} from "./chunk-73e80d68.js";
import {
    ev as S,
    cJ as g,
    a as T,
    e3 as he,
    eg as E,
    cA as $,
    cS as P,
    ed as xe,
    ez as je,
    ci as U,
    cs as fe,
    cT as ge,
    du as M,
    dy as b,
    e5 as z,
    e8 as Ne,
    c_ as ve,
    cj as _e,
    d0 as ye,
    __tla as we
} from "./chunk-b53b00e3.js";
import {
    c as I
} from "./chunk-5bcb444f.js";
import {
    u as R,
    n as f,
    t as be,
    __tla as Ce
} from "./renderer/_default.page.client.7e3d4bf2.js";
import {
    u as ke
} from "./chunk-b8efc996.js";
import "./chunk-cf010ec4.js";
import {
    __tla as Se
} from "./chunk-bad13a2b.js";
import {
    __tla as Te
} from "./chunk-b894b9de.js";
import "./chunk-357b411e.js";
import "./chunk-27d137a6.js";
import "./chunk-03c302ce.js";
import {
    __tla as Ie
} from "./chunk-0e1ef679.js";
import "./chunk-5fced113.js";
import {
    __tla as Le
} from "./chunk-0e835458.js";
import {
    __tla as De
} from "./chunk-654ef298.js";
import "./chunk-35f3c0e2.js";
import "./chunk-c23b3c52.js";
import "./chunk-e570733e.js";
import "./chunk-68de7933.js";
import "./chunk-07977b38.js";
import "./chunk-47df8c47.js";
import "./chunk-3dc03e47.js";
import "./chunk-e20af49b.js";
import "./chunk-6e6e4b85.js";
import {
    __tla as Ue
} from "./chunk-000ed202.js";
import "./chunk-78c5b721.js";
import "./chunk-2d134749.js";
import "./chunk-21fa96d0.js";
import "./chunk-f0854543.js";
import "./pages/help/index.page.a21ea3c9.js";
import "./chunk-7459b96e.js";
import "./chunk-6d8ed563.js";
import "./chunk-1371f12f.js";
import "./chunk-08fcab7b.js";
let B, Me = Promise.all([(() => {
    try {
        return we
    } catch (i) {}
})(), (() => {
    try {
        return Ce
    } catch (i) {}
})(), (() => {
    try {
        return Se
    } catch (i) {}
})(), (() => {
    try {
        return Te
    } catch (i) {}
})(), (() => {
    try {
        return Ie
    } catch (i) {}
})(), (() => {
    try {
        return Le
    } catch (i) {}
})(), (() => {
    try {
        return De
    } catch (i) {}
})(), (() => {
    try {
        return Ue
    } catch (i) {}
})()]).then(async () => {
    const i = function({
            onClose: s
        }) {
            const {
                t: a
            } = S();
            return e.jsxs("div", {
                className: l,
                children: [e.jsx("div", {
                    className: "title",
                    children: a("Notification")
                }), e.jsx("div", {
                    className: "close-icon",
                    onClick: () => s(),
                    children: e.jsx(g, {
                        name: "Close"
                    })
                })]
            })
        },
        l = "nkpp5sj",
        d = "/assets/hand.1053c278.svg",
        F = "/assets/hand-w.391870da.svg",
        J = "/assets/finger.1b642f84.svg",
        K = "/assets/flower.b78eecee.png",
        O = "/assets/coin-bg.b80f86d1.png",
        W = "/assets/tag.5c01fd72.svg",
        X = "/assets/gift.1d6007eb.svg",
        G = "/assets/top-drak.c3c2237e.png",
        Q = "/assets/top-light.e6afd434.png",
        V = {
            avatar: T.assets("/logo/logo_w.svg"),
            avatarw: T.assets("/logo/logo.svg"),
            hand: d,
            handWhite: F,
            finger: J,
            flower: K,
            coinBg: O,
            tag: W,
            gift: X,
            topDark: G,
            topLight: Q
        };

    function Y(s, a) {
        const n = a.getTime() - s;
        return n <= 60 * 1e3 ? "now" : n < 60 * 60 * 1e3 ? Math.round(n / 6e4) + " m" : n < 24 * 60 * 60 * 1e3 ? Math.round(n / 36e5) + " h" : n < 365 * 24 * 60 * 60 * 1e3 ? Math.round(n / 864e5) + " d" : Math.round(n / 31536e6) + " y"
    }

    function Z(s) {
        let a = [];
        return s && (s.split(/<\s?br\s?\/?\s?>/).map((n, r) => {
            r >= 1 && a.push(e.jsx("br", {}, r)), a.push(n)
        }), a)
    }

    function ee(s, a) {
        var n;
        return s.contentV3 && s.contentV3.length > 0 ? ((n = s.contentV3.find(r => !!r)) == null ? void 0 : n.content) || [] : s.contentV2
    }

    function te(s, a) {
        var n;
        return s.contentV3 && s.contentV3.length > 0 ? (n = s.contentV3.find(r => !!r)) == null ? void 0 : n.title : s.title
    }
    const se = k.memo(function({
            className: s = "",
            data: a
        }) {
            const {
                t: n
            } = S(), r = j.useRef(null), [o, v] = j.useState(!1), [p, _] = j.useState(!1), y = he();
            E();
            const u = t => t.version === 1 ? e.jsx("div", {
                    className: "old",
                    dangerouslySetInnerHTML: {
                        __html: t.contentV1
                    }
                }) : (ee(t) || []).map((c, m) => {
                    switch (c.contentType) {
                        case 1:
                            return e.jsxs("div", {
                                className: "text-wrap",
                                children: [e.jsx("div", {
                                    className: "text-p-wrap",
                                    children: e.jsx("p", {
                                        className: "p text-p",
                                        children: Z(c.content)
                                    })
                                }), p && e.jsxs("button", {
                                    className: "show-hide-btn",
                                    onClick: () => v(!o),
                                    children: [e.jsx("span", {
                                        children: n(o ? "Hide" : "Show all")
                                    }), e.jsx(g, {
                                        name: "Arrow"
                                    })]
                                })]
                            }, m);
                        case 2:
                            return e.jsx("div", {
                                className: "link-btn-wrap",
                                children: e.jsxs(P, {
                                    className: "hover",
                                    href: c.content,
                                    "data-ignore-intercept": !0,
                                    children: [e.jsx("span", {
                                        children: c.desc
                                    }), e.jsx(g, {
                                        name: "Arrow"
                                    })]
                                })
                            }, m);
                        case 3:
                            return e.jsx("img", {
                                src: c.content,
                                alt: c.desc,
                                className: "image p"
                            }, m);
                        case 4:
                            const x = c.content && c.content.match(/\/([^/]+\.pdf)$/),
                                w = x ? x[1] : null;
                            return w ? e.jsx("div", {
                                className: "pdf-download-wrap",
                                children: e.jsxs(P, {
                                    className: "link-item",
                                    href: c.content,
                                    target: "_blank",
                                    children: [e.jsx("span", {
                                        children: w
                                    }), e.jsx(g, {
                                        name: "Download"
                                    })]
                                })
                            }, m) : null;
                        default:
                            return null
                    }
                }),
                h = a.isTop === 1;
            return j.useLayoutEffect(() => {
                if (r && r.current) {
                    const t = r.current.querySelector(".text-p");
                    if (t) {
                        const c = t.getBoundingClientRect();
                        (c ? c.height : 0) > 60 && _(!0)
                    }
                }
            }, []), e.jsxs("div", {
                className: I(ae, s, h && "topmsg"),
                children: [h && e.jsxs("div", {
                    className: "top-msg-wrap",
                    children: [e.jsx("p", {
                        children: n("Exclusive Notification")
                    }), e.jsx("img", {
                        src: y ? V.topDark : V.topLight,
                        className: "top-img"
                    })]
                }), e.jsxs("div", {
                    className: "item-head",
                    children: [e.jsx("div", {
                        className: "time",
                        children: new Date(a.updateTime).toLocaleString()
                    }), e.jsx("div", {
                        className: "title",
                        children: te(a)
                    })]
                }), e.jsx("div", {
                    className: I("max-height-content", o && "show-more"),
                    children: e.jsx("div", {
                        className: "item-content",
                        ref: r,
                        children: u(a)
                    })
                })]
            })
        }),
        ne = k.memo(function() {
            var a;
            const {
                systemData: s
            } = R();
            return (a = s == null ? void 0 : s.noticeList) != null && a.length ? e.jsx("div", {
                className: "system-notice-wrap",
                children: s.noticeList.map(n => e.jsx(se, {
                    data: n,
                    className: n.isRead === 0 ? "unread" : ""
                }, n.afficheId))
            }) : e.jsx($, {})
        }),
        ae = "s142m9jt",
        ce = k.memo(function() {
            const {
                t: s
            } = S(), a = R(), n = j.useRef(-1), r = xe(), {
                commentData: o
            } = a, v = je.serverTime(), p = o.totalPage === 0 || o.page === o.totalPage, _ = (t, c) => {
                if (n.current < 0) {
                    n.current = 1;
                    let m, x = !1;
                    m = {
                        contentId: t.id,
                        contentType: 2
                    }, t.isLike && (x = !0), M.post(`/comment/like/${x?"undo":"do"}/`, m).then(() => {
                        let w = x ? -1 : 1;
                        const L = N({}, o),
                            D = [...L.list];
                        D[c].isLike += w, D[c].likeCount += w, L.list = D, f.setState({
                            commentData: L
                        })
                    }).catch(b).finally(() => n.current = -1)
                }
            }, y = async t => {
                if (n.current < 0) {
                    const c = await T.promisify("post_comment")({
                        defaultComment: "",
                        name: t.userName || s("Hidden"),
                        id: t.userId
                    });
                    if (!c) return;
                    n.current = 1, M.post("/comment/reply/add/", {
                        commentId: t.commentId,
                        content: c.content,
                        replyId: t.id,
                        replyUserId: c.haveAt ? t.userId : 0
                    }).then(() => {
                        b(s("Success"))
                    }).catch(b).finally(() => n.current = -1)
                }
            }, u = (t, c) => {
                n.current < 0 && (n.current = 1, M.get(`/comment/reply/read/${t.id}/`).then(() => {
                    const m = N({}, o),
                        x = [...m.list];
                    x[c].readStatus = 1, m.list = x, a.commentUnreadCount > 0 ? f.setState({
                        commentData: m,
                        commentUnreadCount: a.commentUnreadCount - 1
                    }) : f.setState({
                        commentData: m
                    })
                }).catch(b).finally(() => n.current = -1))
            }, h = () => {
                f.setState({
                    loadMoreLoading: !0
                });
                const t = a.commentData;
                be.getCommentList(a.commentData.page + 1).then(c => {
                    const m = [...t.list].concat(c.list || []);
                    f.setState({
                        commentData: C(N({}, c), {
                            list: m
                        }),
                        commentUnreadCount: Number(c.extra || "0")
                    })
                }).catch(b).finally(() => {
                    f.setState({
                        loadMoreLoading: !1
                    })
                })
            };
            return e.jsxs("div", {
                className: re,
                children: [o.list.length === 0 ? e.jsx("div", {
                    className: "empty-wrap",
                    children: e.jsx($, {})
                }) : e.jsx("div", {
                    className: "comment-notice-list-wrap",
                    children: o.list.map((t, c) => e.jsxs("div", {
                        className: "comment-notice-item",
                        onClick: () => u(t, c),
                        children: [t.readStatus === 0 && e.jsx("div", {
                            className: "green-point"
                        }), e.jsxs("div", {
                            className: "cni-header",
                            children: [e.jsx(U.Avatar, {
                                userId: t.userId,
                                name: t.userName || s("Hidden")
                            }), e.jsxs("div", {
                                className: "cni-text",
                                children: [e.jsxs("div", {
                                    className: "user-info-title",
                                    children: [e.jsx(U.UserInfo, {
                                        className: "n",
                                        userId: t.userId,
                                        name: t.userName || s("Hidden"),
                                        avatar: !1
                                    }), e.jsx(U.UserTitle, {
                                        className: "user-title",
                                        code: t.titles || [],
                                        desc: t.titleDesc || []
                                    })]
                                }), e.jsx("p", {
                                    className: "d",
                                    children: s("Replied to your comment")
                                }), e.jsx("p", {
                                    className: "d",
                                    children: Y(t.updateTime, v)
                                })]
                            }), e.jsx("div", {
                                className: "cni-img",
                                onClick: () => r(`/game/${t.gameUnique}`),
                                children: e.jsx("img", {
                                    alt: "game-icon",
                                    src: t.thumbnail
                                })
                            })]
                        }), e.jsx("div", {
                            className: "cni-content",
                            onClick: () => {
                                T.emit("openCommentReply", {
                                    commentId: t.commentId,
                                    gameUnique: t.gameUnique
                                })
                            },
                            children: e.jsx(fe, {
                                content: t.content
                            })
                        }), e.jsxs("div", {
                            className: "cni-footer",
                            children: [e.jsxs("button", {
                                className: I(t.isLike && "like"),
                                onClick: () => _(t, c),
                                children: [e.jsx(g, {
                                    name: "Kudos"
                                }), t.likeCount > 0 && e.jsx("span", {
                                    children: t.likeCount
                                })]
                            }), e.jsx("button", {
                                onClick: () => y(t),
                                children: e.jsx(g, {
                                    name: "Reply"
                                })
                            })]
                        })]
                    }, t.id))
                }), !p && e.jsx("div", {
                    className: "more-loading",
                    children: a.loadMoreLoading ? e.jsx(ge, {}) : e.jsxs("button", {
                        className: "loadmore-btn",
                        onClick: h,
                        children: [e.jsx("span", {
                            children: s("Load More")
                        }), e.jsx(g, {
                            name: "Arrow"
                        })]
                    })
                })]
            })
        }),
        re = "n6c8a8";

    function ie() {
        const s = R(),
            {
                t: a
            } = S(),
            n = z(),
            [r, o] = j.useState({
                system: 0,
                reward: 0
            }),
            v = [{
                label: a("System Notice"),
                value: 0
            }, {
                label: a("Activities"),
                value: 1
            }],
            p = j.useRef(null),
            _ = Ne();

        function y(u) {
            if (p.current) {
                let h = p.current.scrollTop;
                o(u === 0 ? C(N({}, r), {
                    reward: h
                }) : C(N({}, r), {
                    system: h
                }))
            }
            s.currentType = u, u === 1 && f.clearSystemNotice(!0)
        }
        return j.useEffect(() => {
            p.current && (s.currentType === 0 ? p.current.scrollTop = r.system : p.current.scrollTop = r.reward)
        }, [r]), e.jsxs("div", {
            className: oe,
            children: [e.jsx(ve, {
                className: "notice-tabs",
                value: s.currentType,
                options: v,
                onChange: u => y(u),
                children: ({
                    option: u,
                    active: h
                }) => e.jsx("button", {
                    className: h ? "is-active tab" : "tab",
                    children: e.jsxs("span", {
                        className: "label",
                        children: [u.label, e.jsx(_e, {
                            num: u.value === 0 ? s.systemUnreadCount : s.commentUnreadCount,
                            className: "badge"
                        })]
                    })
                })
            }), e.jsx("div", {
                className: "scroll-wrap",
                onClick: _,
                children: e.jsx(ye, {
                    className: "notice-container",
                    ref: p,
                    bodyLock: n,
                    children: s.currentType === 1 ? e.jsx(ce, {}) : e.jsx(ne, {})
                })
            })]
        })
    }
    const oe = "n1nddpnk";
    let A;
    B = k.memo(function({
        className: s
    }) {
        const a = z(),
            {
                lang: n
            } = E(),
            r = ke(),
            o = () => {
                r.chatOrNtice = void 0
            };
        return j.useEffect(() => (f.initFn(), () => {
            f.clearSystemNotice(), a && o()
        }), [n]), e.jsxs("div", {
            className: I(s, A),
            id: "notification",
            children: [!a && e.jsx(i, {
                onClose: () => o()
            }), e.jsx(ie, {})]
        })
    }), A = "n1j4zfv7"
});
export {
    Me as __tla, B as
    default
};