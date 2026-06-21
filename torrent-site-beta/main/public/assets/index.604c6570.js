var z = Object.defineProperty,
    q = Object.defineProperties;
var L = Object.getOwnPropertyDescriptors;
var T = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty,
    G = Object.prototype.propertyIsEnumerable;
var v = (t, a, s) => a in t ? z(t, a, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : t[a] = s,
    x = (t, a) => {
        for (var s in a || (a = {})) E.call(a, s) && v(t, s, a[s]);
        if (T)
            for (var s of T(a)) G.call(a, s) && v(t, s, a[s]);
        return t
    },
    j = (t, a) => q(t, L(a));
import {
    j as e
} from "./chunk-a4af42e8.js";
import {
    r as c,
    R as y
} from "./chunk-73e80d68.js";
import {
    ev as p,
    d5 as I,
    d0 as _,
    cJ as g,
    eq as D,
    eg as A,
    ak as M,
    cT as O,
    cA as Y,
    dg as B,
    a as J,
    dl as K,
    du as U,
    dy as H
} from "./chunk-b53b00e3.js";
import {
    c as f
} from "./chunk-5bcb444f.js";
import {
    G as Q
} from "./chunk-a21360ec.js";
import {
    g as w
} from "./chunk-2d134749.js";
import {
    c as R
} from "./chunk-421da83a.js";
import {
    G as V
} from "./chunk-78c5b721.js";
import {
    g as W,
    u as X,
    S as k,
    a as Z,
    s as $,
    L as ee,
    b as se
} from "./chunk-68de7933.js";
import {
    g as ae
} from "./chunk-07977b38.js";
import "./chunk-cf010ec4.js";
import "./chunk-19b7f447.js";
import "./chunk-0e835458.js";
import "./chunk-654ef298.js";
import "./chunk-0e1ef679.js";
const te = c.memo(function({
        closeFn: t,
        noresult: a,
        pageName: s
    }) {
        const {
            t: r
        } = p(), h = c.useRef(w({
            sectionId: "search_no_type",
            pageSize: 24
        })), o = c.useRef(w({
            sectionId: "search_no_outcome",
            pageSize: 24
        })), i = a ? o.current : h.current, l = new I(i), n = s === "lottery" ? () => R(1e3) : R;
        return e.jsx("div", {
            className: re,
            children: e.jsx(c.Suspense, {
                fallback: null,
                children: e.jsx(Q, {
                    title: r("Recommended for you"),
                    line: 1,
                    source: l,
                    onGameClick: () => t(),
                    pageName: s,
                    calcSize: n
                })
            })
        })
    }),
    re = "r8jhhqr",
    ce = c.memo(function({
        closeFn: t,
        list: a,
        searchPageInfo: s
    }) {
        if (a.length === 0) return null;
        const r = c.useMemo(() => new I(Promise.resolve({
            expId: "",
            pageList: j(x({}, s), {
                list: [...a]
            }),
            logId: "",
            maxNum: 0,
            strategyId: "",
            sectionId: ""
        })), [a, s]);
        return e.jsx("div", {
            className: ne,
            children: e.jsx(_, {
                bodyLock: !0,
                children: e.jsx(V, {
                    source: r,
                    onGameClick: () => t(),
                    more: !1
                })
            })
        })
    }),
    ne = "r1yt7s91",
    le = t => {
        const a = window.localStorage.getItem(t);
        return a ? a.split("**") : []
    },
    oe = y.memo(function({
        localStorgeName: t,
        changeSearchString: a
    }) {
        const {
            t: s
        } = p(), [r, h] = c.useState(le(t) || []), o = l => {
            const n = [...r];
            n.splice(l, 1), h(n), window.localStorage.setItem(t, n.join("**"))
        }, i = () => {
            h([]), window.localStorage.setItem(t, "")
        };
        return !r || r.length === 0 ? null : e.jsxs("div", {
            className: he,
            children: [e.jsxs("div", {
                className: "history-top",
                children: [e.jsx("p", {
                    className: "history-title",
                    children: s("Search history")
                }), r.length > 0 && e.jsx(g, {
                    name: "Delete",
                    onClick: i
                })]
            }), e.jsx("div", {
                className: "history-list-wrap",
                children: r.length > 0 ? r.map((l, n) => e.jsx(ie, {
                    onDelete: () => {
                        o(n)
                    },
                    name: l,
                    changeSearchString: a
                }, "search-history-item" + n)) : e.jsx("p", {
                    className: "no",
                    children: s("No Search history.")
                })
            })]
        })
    }),
    ie = y.memo(function({
        name: t,
        onDelete: a,
        changeSearchString: s
    }) {
        return e.jsxs("div", {
            className: ue,
            onClick: () => {
                s(t)
            },
            children: [e.jsx("p", {
                children: t
            }), e.jsx("button", {
                onClick: r => {
                    r.stopPropagation(), a()
                },
                children: e.jsx(g, {
                    name: "Close"
                })
            })]
        })
    }),
    he = "h1upxy8",
    ue = "hhv9mgu",
    me = c.memo(function({
        searchText: t,
        setSearchText: a,
        closeFn: s,
        placeholder: r
    }) {
        const {
            t: h
        } = p(), [o, i] = c.useState(!0), l = c.useRef(null);
        return c.useEffect(() => {
            const n = setTimeout(() => {
                l.current && l.current.focus()
            }, 200);
            return () => {
                clearTimeout(n)
            }
        }, []), e.jsxs("div", {
            className: f(de, "search-input-wrap", "inner-search-input", o && "focus"),
            children: [e.jsx("div", {
                className: "input-before",
                children: e.jsx(g, {
                    name: "Search"
                })
            }), e.jsx("input", {
                type: "text",
                ref: l,
                className: "search-input",
                value: t,
                onChange: n => {
                    const d = n.target.value;
                    a(d)
                },
                onFocus: () => i(!0),
                onBlur: () => {
                    i(!1)
                },
                placeholder: r
            }), t.length > 0 && e.jsx("button", {
                className: "clear-btn",
                onClick: () => {
                    a(""), l.current && l.current.focus()
                },
                children: e.jsx(g, {
                    name: "Close"
                })
            }), e.jsx("div", {
                className: f("input-after t"),
                onClick: () => s(),
                children: e.jsx("p", {
                    children: h("Cancel")
                })
            })]
        })
    }),
    de = "s56piep",
    pe = c.memo(function({
        closeFn: t
    }) {
        const {
            t: a
        } = p(), [s, r] = D({
            searchTimes: 0,
            searchText: "",
            searching: !1,
            searchResult: [],
            searchPageInfo: {
                page: 1,
                pageSize: 100,
                total: 0,
                totalPage: 0
            }
        }), {
            urlPathname: h
        } = A(), o = W(h), i = Z(o), l = X(o), n = c.useCallback(M(async m => {
            r({
                searching: !0
            });
            const {
                distinctId: P
            } = await ae(), N = {
                keyword: m,
                page: 1,
                device: J.isMobile() ? 1 : 2,
                pageSize: 100,
                areaCode: K.state.areaCode
            }, F = k.LOTTEYR === o ? j(x({}, N), {
                distinctId: P,
                name: m
            }) : N;
            U.post(i.searchUrl, F).then(u => {
                u && (r({
                    searching: !1,
                    searchTimes: 1,
                    searchResult: u.list || [],
                    searchPageInfo: {
                        page: u.page,
                        totalPage: u.totalPage,
                        total: u.total,
                        pageSize: u.pageSize
                    }
                }), u.list && u.list.length > 0 && $(m, i.localStorgeName))
            }).catch(H)
        }, 1e3), []);
        c.useEffect(() => {
            s.searchText && s.searchText !== "" && s.searchText.length > 2 && n(s.searchText)
        }, [s.searchText]);
        const d = o === k.LOTTEYR,
            C = d ? ee : ce,
            b = d ? se : te,
            S = s.searchPageInfo.total > 99 ? "99+" : s.searchPageInfo.total;
        return e.jsxs("div", {
            className: f(ge, "page-max-width-wrap"),
            children: [e.jsx(me, {
                placeholder: l,
                searchText: s.searchText,
                setSearchText: m => r({
                    searchText: m
                }),
                closeFn: t
            }), e.jsxs("div", {
                className: "search-result",
                children: [s.searchText.length < 3 ? e.jsxs(e.Fragment, {
                    children: [e.jsx("p", {
                        className: "require-auto",
                        children: a("Search requires at least 3 characters")
                    }), e.jsx(oe, {
                        changeSearchString: m => {
                            r({
                                searchText: m
                            })
                        },
                        localStorgeName: i.localStorgeName
                    })]
                }) : s.searching ? e.jsx("div", {
                    className: "search-result-info",
                    children: e.jsx(O, {})
                }) : s.searchResult.length <= 0 ? e.jsx("div", {
                    className: "search-result-info",
                    children: e.jsx(Y, {
                        type: "empty",
                        children: e.jsx("p", {
                            className: "require-wrod",
                            children: a("No results")
                        })
                    })
                }) : e.jsxs(e.Fragment, {
                    children: [e.jsxs("div", {
                        className: "result-title",
                        children: [e.jsx("p", {
                            className: "title",
                            children: a("Search Result")
                        }), e.jsx("p", {
                            className: "result-num",
                            children: e.jsxs(B, {
                                totalResult: S,
                                i18nKey: "search.result.number",
                                children: ["About ", e.jsx("span", {
                                    children: {
                                        totalResult: S
                                    }
                                }), " results"]
                            })
                        })]
                    }), e.jsx(c.Suspense, {
                        fallback: null,
                        children: e.jsx(C, {
                            closeFn: t,
                            list: s.searchResult,
                            searchPageInfo: s.searchPageInfo
                        })
                    })]
                }), e.jsx(c.Suspense, {
                    fallback: null,
                    children: e.jsx(b, {
                        closeFn: t,
                        noresult: s.searchTimes > 0 && s.searchResult.length === 0
                    })
                })]
            })]
        })
    }),
    ge = "pz2oae8";
export {
    pe as
    default
};