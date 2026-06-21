var he = Object.defineProperty,
    ge = Object.defineProperties;
var fe = Object.getOwnPropertyDescriptors;
var q = Object.getOwnPropertySymbols;
var se = Object.prototype.hasOwnProperty,
    ne = Object.prototype.propertyIsEnumerable;
var te = (a, n, o) => n in a ? he(a, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : a[n] = o,
    ae = (a, n) => {
        for (var o in n || (n = {})) se.call(n, o) && te(a, o, n[o]);
        if (q)
            for (var o of q(n)) ne.call(n, o) && te(a, o, n[o]);
        return a
    },
    oe = (a, n) => ge(a, fe(n));
var ie = (a, n) => {
    var o = {};
    for (var s in a) se.call(a, s) && n.indexOf(s) < 0 && (o[s] = a[s]);
    if (a != null && q)
        for (var s of q(a)) n.indexOf(s) < 0 && ne.call(a, s) && (o[s] = a[s]);
    return o
};
import {
    _ as A
} from "./main-45511cec.js";
import {
    r as u,
    w as E,
    _ as e,
    a as t,
    R as F,
    u as $,
    j as be,
    i as ye,
    a2 as Z,
    a3 as O,
    a4 as ee,
    b as m,
    N as we,
    d as R,
    p as G,
    h as K,
    o as xe,
    m as Ne,
    c as B,
    f as M,
    g as ve,
    a1 as ke,
    a0 as J,
    $ as je,
    a5 as Ce,
    Z as re,
    a6 as Se,
    F as ue,
    a7 as _e
} from "./gift-f7e71dcc.js";
const Be = () => A(() =>
        import ("./LimitBonus-accd6033.js"), ["LimitBonus-accd6033.js", "gift-f7e71dcc.js", "main-45511cec.js", "gift-21e1a3d0.css", "LimitBonus-e61fdda5.css"]),
    Te = u.lazy(async () => ({
        default: (await Be()).default
    })),
    Ee = E(function() {
        const n = e.useBcd(),
            o = e.useAccount(),
            [s, i] = u.useState(!1);
        return u.useEffect(() => {
            o.login && n.registerTime > 0 && i(!0)
        }, [o.login, n.registerTime]), s ? t.jsx(Ie, {}) : null
    }),
    Ie = function() {
        const n = e.useMountedState(),
            [o, s] = u.useState(!1);
        return u.useEffect(() => {
            e.bcdStore.initData.then(() => {
                n() && s(!0)
            })
        }, []), o ? t.jsx(u.Suspense, {
            fallback: null,
            children: t.jsx(Te, {})
        }) : null
    },
    ft = Ee;
const le = function({
        closeFn: n
    }) {
        const o = e.useAccount(),
            s = $(),
            {
                t: i
            } = e.useTranslation(),
            c = e.useDialog(),
            {
                urlPathname: p
            } = e.usePageContext(),
            d = be(),
            g = ye(),
            h = p.startsWith("/bonus"),
            l = e.useNavigate(),
            w = s.specialBonus.first.filter(r => r.status === 0),
            x = s.bonusUnlock ? s.bonusUnlock.second > 0 : !1,
            N = s.quests.first,
            f = N.rewards && N.rewards.length > 0 ? s.quests.first.rewards.filter(r => r.rewardId > 0) : [],
            k = f.length > 0 && o.vipLevel < Z,
            T = s.spin.second > 0 && o.vipLevel < Z,
            P = s.spin.first.fiat,
            W = s.recharge.second > 0,
            Q = s.weeklyBonus.second > 0,
            V = s.monthlyBonus.second > 0,
            H = s.sportsWeeklyBonus.second > 0,
            v = s.quests.first.dailyTasks.concat(s.quests.first.weeklyTasks),
            {
                deposits: C,
                lotterys: S,
                freespins: z
            } = O(s.depositBonus),
            {
                lottery_winnings_list: Y
            } = ee(s.lotteryWinningsBonus),
            pe = async r => {
                var j;
                try {
                    const b = await e.http.post("/activity/taskhub/takeReward/", {
                        rewardId: r
                    });
                    if (G(), b) {
                        const _ = b.lottery && ((j = b.lottery.currentLottery) == null ? void 0 : j.lotteryResult);
                        if (_) {
                            const L = b.lottery ? b.lottery.totalCount : 0,
                                D = b.lottery ? b.lottery.redeemedCount : 0;
                            l(`#/welcome_bonuses/${_.numbers.join("-")}-${_.jackpotBallNumber}-${_.drawTimestamp}-${Math.max(L,0)}-${Math.max(D-1,0)}`)
                        }
                    }
                    R.firstInit(!0)
                } catch (b) {
                    e.notify(b)
                }
            };
        return t.jsxs("div", {
            className: Le,
            onClick: r => r.stopPropagation(),
            children: [t.jsx("p", {
                className: "bl-t",
                children: i("Bonus Ready")
            }), t.jsxs(e.ScrollView, {
                className: "scroll-list hidden-scroll-y",
                children: [t.jsx(I, {
                    closeFn: n,
                    have: x,
                    imgSrc: m.coin,
                    imgClassName: "bcd-unlock",
                    title: i("Bonus Unlock"),
                    url: "#/bonus/dashboard"
                }), t.jsx(I, {
                    closeFn: n,
                    have: T,
                    imgSrc: P ? m.spin_fiat : m.spin,
                    imgClassName: "spin",
                    title: i("Spin Ready"),
                    btnText: i("Spin Now"),
                    url: "#/spin"
                }), t.jsx(Re, {
                    closeFn: n,
                    have: W,
                    imgSrc: m.recharge,
                    imgClassName: "recharge",
                    title: i("Recharge Ready"),
                    url: "#/recharge"
                }), C && C.length > 0 && C.map((r, j) => {
                    const b = r.week ? `${g(r.week)} ${i("Deposit Bonus")}` : d(r.count);
                    return t.jsx(I, {
                        have: !0,
                        imgSrc: m.bonus_deposit,
                        imgClassName: "bonus-deposit",
                        title: b,
                        onClick: async () => {
                            c.push(t.jsx(we, {
                                count: r.count
                            }))
                        }
                    }, j + "")
                }), S && S.length > 0 && S.map((r, j) => {
                    const b = `${r.bonusAmount||1} ${i("Lottery Tickets")}`;
                    return t.jsx(I, {
                        have: !0,
                        imgSrc: m.bonus_lottery,
                        imgClassName: "bonus-lottery",
                        title: b,
                        onClick: async () => e.http.post("/activity/taskhub/takeReward/", {
                            rewardId: r.rewardId
                        }).then(_ => {
                            var D;
                            const L = _.lottery && ((D = _.lottery.currentLottery) == null ? void 0 : D.lotteryResult);
                            L && l(`#/welcome_bonuses/${L.numbers.join("-")}-${L.jackpotBallNumber}-${L.drawTimestamp}-${_.totalCount}-${_.redeemedCount}`), R.updateLotteryFreeTicket()
                        }).catch(e.notify)
                    }, r.rewardId + j + "")
                }), Y && Y.length > 0 && Y.map((r, j) => t.jsx(I, {
                    have: !0,
                    imgSrc: m.bonus_lottery,
                    imgClassName: "bonus-lottery",
                    title: i("Free Lottery Winnings"),
                    onClick: async () => e.http.post("/activity/taskhub/takeReward/", {
                        rewardId: r.rewardId,
                        rewardBonusId: r.rewardBonusId
                    }).then(() => {
                        R.firstInit(!0), G()
                    }).catch(e.notify),
                    currencyInfo: {
                        amount: r.amount,
                        currency: r.currency
                    }
                }, r.rewardId + j + "")), z && z.length > 0 && z.map((r, j) => {
                    const b = `${r.count} ${i("Free Spin")}`;
                    return t.jsx(I, {
                        have: !0,
                        imgSrc: m.bonus_spin,
                        imgClassName: "bonus-spin",
                        title: b,
                        onClick: async () => e.http.post("/activity/taskhub/takeReward/", {
                            rewardId: r.rewardId,
                            rewardBonusId: r.rewardBonusId
                        }).then(() => {
                            R.updateFreeSpin(), G()
                        }).catch(e.notify)
                    }, r.rewardId + j + "")
                }), t.jsx(I, {
                    have: Q,
                    imgSrc: m.weeklybonus,
                    imgClassName: "weeklybonus",
                    title: i("Weekly Cashback"),
                    url: "/bonus",
                    onClick: async () => {
                        const r = s.weeklyBonus.first;
                        r.rewardResult && (await K(r.rewardResult.rewardId), R.firstInit(!0))
                    }
                }), t.jsx(I, {
                    have: V,
                    imgSrc: m.monthlybonus,
                    imgClassName: "monthlybonus",
                    title: i("Monthly Cashback"),
                    url: "/bonus",
                    onClick: async () => {
                        const r = s.monthlyBonus.first;
                        r.rewardResult && (await K(r.rewardResult.rewardId), R.firstInit(!0))
                    }
                }), t.jsx(I, {
                    have: H,
                    imgSrc: m.sportsbonus,
                    imgClassName: "sportsweeklybonus",
                    title: i("Sports Weekly Bonus"),
                    url: "/bonus",
                    onClick: async () => {
                        const r = s.sportsWeeklyBonus.first;
                        r.rewardResult && (await K(r.rewardResult.rewardId), R.firstInit(!0))
                    }
                }), k && f.map((r, j) => {
                    const b = r.taskId === "tid074",
                        _ = v.find(L => L.taskId === r.taskId);
                    return t.jsxs("div", {
                        className: "common-bonus reward-item",
                        children: [t.jsx("div", {
                            className: "reward-img-wrap",
                            children: t.jsx("img", {
                                alt: "quests",
                                src: b ? m.bonus_lottery : m.quests,
                                className: "quests"
                            })
                        }), t.jsxs("div", {
                            className: "reward-text",
                            children: [t.jsx("p", {
                                className: "title",
                                children: b ? i("Welcome Bonus") : _ ? _.title : i("Quest Completed")
                            }), t.jsx("div", {
                                className: "coin-list",
                                children: b ? t.jsxs("span", {
                                    children: [r.amount, " ", i("Lottery Tickets")]
                                }) : _ && t.jsx(e.BC.CoinFormat, {
                                    name: r.currency,
                                    amount: r.amount,
                                    icon: !0,
                                    sign: !0,
                                    showName: !0
                                })
                            })]
                        }), t.jsx(e.Button, {
                            type: "conic",
                            onClick: () => (b && e.app.emit("track", "free_lottery_click", {
                                source: "side_navi"
                            }), pe(r.rewardId)),
                            children: i("Claim")
                        })]
                    }, "quests-item-" + j)
                }), w && w.length > 0 && w.map((r, j) => t.jsx(xe, {
                    hideContent: !0,
                    rewardItem: r
                }, "reward-sidebar-item-" + j))]
            }), !h && t.jsxs(e.Button, {
                className: "dashboard-btn",
                onClick: () => {
                    l("/bonus"), n && n(), e.app.emit("mb-header-bonus-click")
                },
                children: [t.jsx("span", {
                    children: i("Bonus Dashboard")
                }), t.jsx(e.Icon, {
                    name: "Arrow"
                })]
            })]
        })
    },
    Re = function(i) {
        var c = i,
            {
                onClick: n,
                btnText: o
            } = c,
            s = ie(c, ["onClick", "btnText"]);
        const {
            t: p
        } = e.useTranslation(), d = e.usePop(), g = $(), [h, l] = u.useState(!1), y = g.recharge.first, w = g.recharge.second > 0, x = y.status < 2, N = async () => {
            if (!(h || !w))
                if (x) e.app.emit("track", "recharge_request"), e.http.get("/game/support/bonus/vr/pass/").then(() => {
                    R.firstInit(!0), s.closeFn && s.closeFn()
                }).catch(e.notify);
                else {
                    if (h) return;
                    l(!0);
                    const f = y.rewards[0];
                    try {
                        const k = await e.requestRecaptcha("login");
                        e.http.post("/game/support/bonus/vr/receive/", {
                            currencyName: f.currencyName,
                            token: k
                        }).then(() => {
                            R.firstInit(!0), d.push(t.jsx(Ne, {
                                amount: f.amount,
                                currencyName: f.currencyName
                            })), s.closeFn && s.closeFn()
                        }).catch(e.notify).finally(() => {
                            l(!1)
                        })
                    } catch (k) {}
                }
        };
        return t.jsx(I, oe(ae({}, s), {
            loading: h,
            onClick: N,
            btnText: p(x ? "Go Activate" : "Claim")
        }))
    },
    I = F.memo(function({
        have: n,
        imgSrc: o,
        imgClassName: s,
        title: i,
        url: c,
        btnText: p,
        closeFn: d,
        loading: g = !1,
        currencyInfo: h,
        onClick: l
    }) {
        const {
            t: y
        } = e.useTranslation(), w = e.useNavigate();
        return n ? t.jsxs("div", {
            className: "common-bonus reward-item",
            children: [t.jsx("div", {
                className: "reward-img-wrap",
                children: t.jsx("img", {
                    alt: "bonus",
                    src: o,
                    className: s
                })
            }), t.jsxs("div", {
                className: "reward-text",
                children: [t.jsx("p", {
                    className: "title",
                    children: i
                }), h && t.jsx("div", {
                    className: "coin-list",
                    children: t.jsx(e.BC.CoinFormat, {
                        name: h.currency,
                        amount: h.amount,
                        icon: !0,
                        sign: !0,
                        showName: !0
                    })
                })]
            }), t.jsx(e.Button, {
                type: l ? "conic" : "conic4",
                loading: g,
                onClick: x => {
                    x.stopPropagation(), l ? l() : (c && w(c), d && d())
                },
                children: p || y("Claim")
            })]
        }) : null
    }),
    Le = "b1chyhq7",
    $e = "/modules/bonus/kebonus-1ab9206a.svg";
const Me = E(function() {
        const {
            t: n
        } = e.useTranslation(), o = $(), s = e.useIsMobile(), [i, c] = e.useSetState({
            show: !1,
            top: 0
        }), p = e.useOnClickOutside(() => c({
            show: !1
        })), {
            deposit: d,
            lottery: g,
            freespin: h
        } = O(o.depositBonus), {
            lottery_winnings: l
        } = ee(o.lotteryWinningsBonus), y = o.unclaimedCount + d + g + h + l, w = y > 0, x = e.env.host === "bcgame.ke", N = () => {
            if (p && p.current) {
                const f = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 5e3,
                    k = p.current.getBoundingClientRect();
                let T = Math.max(k.top, 20);
                f - k.top < 300 && (T = k.top - f + 44), c({
                    show: !0,
                    top: T
                })
            }
        };
        return t.jsx("div", {
            className: B(Ue, "bonus-link-enter", x && "kenya-bonus"),
            children: t.jsxs("div", {
                ref: p,
                className: "nav-item-wrap",
                onMouseEnter: N,
                onMouseLeave: () => c({
                    show: !1
                }),
                children: [t.jsxs(e.Link, {
                    className: "nav-item",
                    href: "/bonus",
                    onClick: () => {
                        e.app.emit("track", "sidebar_click", {
                            button_name: "bonus"
                        })
                    },
                    children: [t.jsx("div", {
                        className: "nav-item-left",
                        children: x ? t.jsx("img", {
                            alt: "kebonus",
                            src: $e
                        }) : t.jsx(e.Icon, {
                            name: "Gift"
                        })
                    }), t.jsxs("div", {
                        className: "nav-item-right",
                        children: [t.jsx("span", {
                            children: n("Bonus")
                        }), w && t.jsx("div", {
                            className: "red-unclaimed-wrap",
                            children: y
                        })]
                    })]
                }), !s && w && t.jsx(M.AnimatePresence, {
                    children: i.show && t.jsx(M.motion.div, {
                        className: "unclaimed-bonus-list",
                        initial: i.top > 0 ? {
                            x: "-64px",
                            opacity: 0,
                            top: i.top
                        } : {
                            x: "-64px",
                            opacity: 0,
                            bottom: Math.abs(i.top)
                        },
                        animate: i.top > 0 ? {
                            x: "-18px",
                            opacity: 1,
                            top: i.top
                        } : {
                            x: "-18px",
                            opacity: 1,
                            bottom: Math.abs(i.top)
                        },
                        children: t.jsx("div", {
                            className: "unclaimed-bonus-list-inner",
                            children: t.jsx(le, {})
                        })
                    })
                })]
            })
        })
    }),
    bt = E(function() {
        const n = $(),
            {
                deposit: o,
                lottery: s,
                freespin: i
            } = O(n.depositBonus),
            c = n.unclaimedCount + o + s + i;
        return c <= 0 ? null : t.jsx("div", {
            className: B("mobile-number-enter", c > 10 && "small-number"),
            children: t.jsx("span", {
                children: c
            })
        })
    }),
    yt = E(function() {
        const n = e.useNavigate(),
            o = $(),
            [s, i] = u.useState(!1),
            {
                deposit: c,
                lottery: p,
                freespin: d
            } = O(o.depositBonus),
            {
                lottery_winnings: g
            } = ee(o.lotteryWinningsBonus),
            h = o.unclaimedCount + c + p + d + g,
            l = e.useOnClickOutside(() => {
                i(!1)
            });
        return u.useEffect(() => {
            s ? e.app.emit("mobile-shadow-toggle", !0) : setTimeout(() => {
                e.app.emit("mobile-shadow-toggle", !1)
            }, 100)
        }, [s]), t.jsxs("div", {
            className: Ae,
            ref: l,
            children: [t.jsxs("button", {
                className: B("bonus-dont-wrap", s && "open"),
                onClick: () => {
                    h > 0 ? i(!s) : (n("/bonus"), e.app.emit("mb-header-bonus-click"))
                },
                children: [t.jsx(e.Icon, {
                    name: "Gift"
                }), h > 0 && t.jsx("div", {
                    className: B("dont", h > 10 ? "small" : ""),
                    children: t.jsx("span", {
                        children: h
                    })
                })]
            }), t.jsx(M.AnimatePresence, {
                children: s && t.jsx(M.motion.div, {
                    className: "mobile-bonus-list-wrap",
                    initial: {
                        y: "7%",
                        opacity: 0
                    },
                    animate: {
                        y: "0%",
                        opacity: 1
                    },
                    children: t.jsx(le, {
                        closeFn: () => {
                            i(!1)
                        }
                    })
                })
            })]
        })
    }),
    Ue = "p5pj97j",
    Ae = "m1smuv00",
    wt = Me;
const Pe = () => {
        const {
            t: a
        } = e.useTranslation(), n = e.useNavigate();
        return t.jsxs(t.Fragment, {
            children: [t.jsx("button", {
                onClick: () => n("#/quests"),
                className: B(We, "bonus-item-btn"),
                children: t.jsx("div", {
                    className: "img-wrap",
                    children: t.jsx("img", {
                        className: "img-bg",
                        src: m.quests,
                        alt: "quests"
                    })
                })
            }), t.jsx("div", {
                className: "bonus-text",
                onClick: () => n("#/quests"),
                children: t.jsx("p", {
                    className: B("t ttu", "task"),
                    children: a("Quest")
                })
            })]
        })
    },
    We = "qi1yqdz";
const De = function() {
        const {
            t: n
        } = e.useTranslation(), o = e.useAccount(), s = $(), i = e.useNavigate(), c = s.spin.first, p = s.spin.second, d = !o.login || p > 0;
        return t.jsxs(t.Fragment, {
            children: [t.jsx("button", {
                className: `${qe} bonus-item-btn`,
                onClick: () => i("#/spin"),
                children: t.jsx("div", {
                    className: `enter-animate ${d?"active":""}`,
                    children: t.jsx("div", {
                        className: "spin-anim",
                        children: o.bonusCurrencyName !== "BCD" || c.fiat ? t.jsx("img", {
                            className: "img-slots",
                            src: m.spin_fiat
                        }) : t.jsxs(t.Fragment, {
                            children: [t.jsx("img", {
                                className: "img-spinbg",
                                src: m.spin_bg,
                                alt: ""
                            }), t.jsx("img", {
                                className: "img-turntable",
                                src: m.turntable,
                                alt: ""
                            }), t.jsx("img", {
                                className: "img-pointer",
                                src: m.pointer,
                                alt: ""
                            })]
                        })
                    })
                })
            }), t.jsx("div", {
                className: "bonus-text",
                onClick: () => {
                    i("#/spin")
                },
                children: t.jsx("p", {
                    className: B("t ttu", "spin"),
                    children: n("Spin")
                })
            })]
        })
    },
    qe = "eea94sw";
const Fe = function() {
        const n = e.useNavigate(),
            o = $(),
            {
                t: s
            } = e.useTranslation(),
            i = o.recharge.second > 0;
        return t.jsxs(t.Fragment, {
            children: [t.jsx("button", {
                onClick: () => n("#/recharge"),
                className: B(Oe, "bonus-item-btn"),
                children: t.jsxs("div", {
                    className: `enter-animate ${i?"active":""}`,
                    children: [t.jsx("img", {
                        className: "img-bg",
                        src: m.recharge_s,
                        alt: ""
                    }), t.jsx("img", {
                        alt: "img_progress",
                        src: m.imgprogress,
                        className: "img-progress"
                    })]
                })
            }), t.jsx("div", {
                className: "bonus-text",
                onClick: () => n("#/recharge"),
                children: t.jsx("p", {
                    className: "t ttu recharge",
                    children: s("Recharge")
                })
            })]
        })
    },
    Oe = "r127v4ms",
    Qe = E(function() {
        const n = e.useAccount(),
            {
                lang: o
            } = e.usePageContext(),
            {
                t: s
            } = e.useTranslation(),
            i = u.useMemo(() => {
                const c = [{
                    name: "quests",
                    element: t.jsx(Pe, {}),
                    label: s("Quest"),
                    url: "#/quests"
                }, {
                    name: "spin",
                    element: t.jsx(De, {}),
                    label: s("Spin"),
                    url: "#/spin"
                }];
                return n.vipLevel >= Z && (c.pop(), c.pop()), n.vipLevel >= ve && c.push({
                    name: "recharge",
                    element: t.jsx(Fe, {}),
                    label: s("Recharge"),
                    url: "#/recharge"
                }), c
            }, [o, n.vipLevel]);
        return t.jsx("div", {
            className: B("bl-l", "bl-l-" + i.length),
            children: i.map((c, p) => {
                const d = i.length === 1 || i.length === 3 && p == 2;
                return t.jsx("div", {
                    className: B("bonus-item", "li-" + c.name, d && "item-3"),
                    style: {
                        position: "relative"
                    },
                    children: c.element
                }, c.name)
            })
        })
    }),
    xt = Qe,
    de = () => A(() =>
        import ("./CatchCoco-e5afbf78.js"), ["CatchCoco-e5afbf78.js", "gift-f7e71dcc.js", "main-45511cec.js", "gift-21e1a3d0.css", "CatchCoco-7069d258.css"]),
    Ve = u.lazy(de),
    He = E(function() {
        const [a, n] = e.useSetState({
            currencyName: "",
            dataSign: ""
        });
        return u.useEffect(() => (e.supportSocket.on("bonus-crocodile", e.socket.decodeBind(o => {
            n({
                currencyName: o.currencyName,
                dataSign: o.dataSign
            })
        }, "json")), () => {
            e.supportSocket.off("bonus-crocodile")
        }), []), a.dataSign ? t.jsx(u.Suspense, {
            fallback: null,
            children: t.jsx(Ve, {
                currencyName: a.currencyName,
                dataSign: a.dataSign,
                onClose: () => n({
                    dataSign: ""
                })
            })
        }) : null
    });
setTimeout(() => de(), 6e3);
const Nt = He;

function ze(a) {
    const n = a / 414 * 128;
    return Math.round(n)
}

function Ye(a) {
    const n = a / 414 * 64;
    return Math.round(n)
}
const Ge = F.memo(function({
        time: n,
        total: o,
        done: s
    }) {
        const i = e.useNavigate(),
            c = e.useIsMobile(),
            p = u.useRef(-1),
            {
                t: d
            } = e.useTranslation(),
            [g, h] = u.useState({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }),
            [l, y] = u.useState(!1),
            w = u.useRef(!1),
            x = u.useRef(0);
        u.useEffect(() => {
            l ? clearTimeout(x.current) : x.current = setTimeout(() => {
                y(!0)
            }, 7e3)
        }, [l]);
        const N = u.useRef(document.querySelector("#root")),
            f = globalThis.innerWidth,
            k = globalThis.innerHeight,
            T = u.useRef(null),
            P = ze(f),
            W = Ye(f);
        u.useEffect(() => {
            c && l && p.current < 0 && setTimeout(() => {
                if (T.current) {
                    const v = T.current.getBoundingClientRect(),
                        C = Math.max(f - v.width - v.left, 0),
                        S = Math.max(k - v.height - v.top, 0);
                    h({
                        left: Math.round(v.left),
                        right: Math.round(C),
                        top: Math.round(v.top),
                        bottom: Math.round(S)
                    }), p.current = 1
                }
            }, 450)
        }, [l]);
        const Q = Math.max(g.top - P, 0),
            V = Math.max(g.bottom - W, 0),
            H = {
                left: -g.left,
                right: g.right,
                top: -Q,
                bottom: V
            };
        return t.jsx(M.motion.div, {
            drag: l,
            dragMomentum: !1,
            className: B(Ke, l ? "small" : "common"),
            onClick: () => !w.current && l && y(!1),
            onDragStart: () => w.current = !0,
            onDragEnd: () => w.current = !1,
            dragConstraints: c ? H : N,
            dragElastic: 0,
            ref: T,
            transition: {
                duration: .4
            },
            children: t.jsxs(M.motion.div, {
                className: "deposit-main",
                initial: {
                    y: "100%",
                    opacity: 0
                },
                animate: {
                    y: "0%",
                    opacity: 1
                },
                children: [!l && t.jsx(e.CloseIcon, {
                    onClick: () => y(!l)
                }), t.jsx("img", {
                    className: "img-money",
                    src: ke,
                    alt: ""
                }), t.jsx(e.CircleCountdown, {
                    endTime: n,
                    className: "cut-time-border"
                }), !l && t.jsxs(t.Fragment, {
                    children: [t.jsxs("div", {
                        className: "cont",
                        children: [t.jsx("div", {
                            className: "title ttu",
                            children: d("Claim Rewards")
                        }), t.jsxs("div", {
                            className: "desc",
                            children: [t.jsxs("b", {
                                children: [s, "/", o]
                            }), " ", d("Claimed")]
                        })]
                    }), t.jsxs("div", {
                        className: "btn-wrap",
                        children: [t.jsx(e.Button, {
                            className: "dp-btn",
                            type: "conic",
                            onClick: () => {
                                !l && !w.current && i("#/quests"), e.app.emit("track", "float_box_reward_click")
                            },
                            children: d("Claim")
                        }), t.jsx(e.Countdown, {
                            endTime: n,
                            onEnd: J.initFn,
                            children: ({
                                hours: v,
                                minutes: C,
                                seconds: S
                            }) => t.jsxs("div", {
                                className: "cut-time",
                                children: [t.jsxs("div", {
                                    children: [t.jsx("span", {
                                        className: "l",
                                        children: v > 9 ? v : "0" + v
                                    }), "h"]
                                }), t.jsx("span", {
                                    children: ":"
                                }), t.jsxs("div", {
                                    children: [t.jsx("span", {
                                        className: "l",
                                        children: C > 9 ? C : "0" + C
                                    }), "m"]
                                }), t.jsx("span", {
                                    children: ":"
                                }), t.jsxs("div", {
                                    children: [t.jsx("span", {
                                        className: "l",
                                        children: S > 9 ? S : "0" + S
                                    }), "s"]
                                })]
                            })
                        })]
                    })]
                }), l && t.jsx(e.Countdown, {
                    endTime: n,
                    onEnd: J.initFn,
                    children: ({
                        hours: v,
                        minutes: C,
                        seconds: S
                    }) => t.jsxs("div", {
                        className: "cut-time",
                        children: [t.jsxs("div", {
                            children: [t.jsx("span", {
                                className: "l",
                                children: v > 9 ? v : "0" + v
                            }), "h"]
                        }), t.jsx("span", {
                            children: ":"
                        }), t.jsxs("div", {
                            children: [t.jsx("span", {
                                className: "l",
                                children: C > 9 ? C : "0" + C
                            }), "m"]
                        }), t.jsx("span", {
                            children: ":"
                        }), t.jsxs("div", {
                            children: [t.jsx("span", {
                                className: "l",
                                children: S > 9 ? S : "0" + S
                            }), "s"]
                        })]
                    })
                })]
            })
        })
    }),
    Ke = "l1fi7676",
    Xe = E(function() {
        const {
            urlPathname: n
        } = e.usePageContext(), o = je(), [s, i] = u.useState(!1), c = e.useIsMobile(), p = e.useMountedState(), d = o.data.newbieTasks, g = o.data.newbieTaskExpireTime, h = g < e.utils.serverTime().getTime();
        if (u.useEffect(() => {
                let N;
                return e.accountStore.waitLogin().then(() => {
                    J.initFn(), N = setTimeout(() => {
                        e.asyncQueue.add(() => p() && i(!0))
                    }, 8e3)
                }), () => clearTimeout(N)
            }, []), n && n.startsWith("/wallet") && c || !d || d.length === 0 || h || !s) return null;
        const y = d.length,
            w = o.data.rewards,
            x = d.reduce((N, f) => {
                const k = w.find(T => T.taskId === f.taskId);
                return k && k.rewardId === 0 ? N + 1 : N
            }, 0);
        return t.jsx(Ge, {
            time: g,
            total: y,
            done: x
        })
    }),
    vt = Xe,
    Ze = "/modules/bonus/spin-463f2a1f.png";
const Je = F.memo(function() {
        const {
            t: n
        } = e.useTranslation(), o = e.useAccount(), s = e.useIsMobile(), i = e.useNavigate(), [c, p] = u.useState(!1), {
            urlParsed: d,
            urlPathname: g
        } = e.usePageContext(), h = d.search.bcn || "", l = Ce(o.bonusCurrencyName, h.toLocaleUpperCase()), y = re.rewardsList[re.rewardsList.length - 1], w = o.login, x = g && g.startsWith("/landing"), N = (f, k) => {
            const T = e.systemStore.getCurrencySymbol(f),
                P = e.systemStore.convertCurrency(new e.Decimal(k || "0"), "USD", f),
                W = Se(P.toNumber());
            return T + e.utils.numberWithCommas(!1, W, 0)
        };
        return u.useEffect(() => {
            const f = window.location.search;
            p(f.includes("type=iframe"))
        }, []), !s || x || w || c ? null : t.jsxs(M.motion.div, {
            initial: {
                y: "100%",
                opacity: 0
            },
            animate: {
                y: "0%",
                opacity: 1
            },
            className: B(et, "mb-bottom-spin-enter", x && "landing-bot-spin"),
            children: [t.jsx("img", {
                className: "img-spin",
                src: Ze,
                alt: ""
            }), t.jsxs("div", {
                children: [t.jsxs("div", {
                    className: "tit",
                    children: [n("Spin To Win"), " ", t.jsx("i", {
                        children: l !== "Crypto" ? N(l, y) : `${y}USDT`
                    })]
                }), t.jsx("div", {
                    className: "desc",
                    children: n("You have a free spin available!")
                })]
            }), t.jsx(e.Button, {
                onClick: () => i("#/spin"),
                children: n("Spin Now")
            })]
        })
    }),
    et = "ss6b0gx",
    tt = u.lazy(() => A(() =>
        import ("./index-e495cb4e.js").then(a => a.i), ["index-e495cb4e.js", "gift-f7e71dcc.js", "main-45511cec.js", "gift-21e1a3d0.css", "index-645e4e5d.css"]));

function st() {
    return e.http.get("/activity/reward/hasUserClaimedFreeMoney")
}
async function nt() {
    const o = Date.now();
    for (;;) {
        try {
            if (await st() !== -1) break
        } catch (s) {
            console.log("Function failed:", s);
            break
        }
        if (Date.now() - o > 6e3) {
            console.log("Polling timeout");
            break
        }
        await e.utils.delay(1500)
    }
}
const at = E(function() {
        const a = e.env.initSearchParams.get("bcn_bonus"),
            n = e.env.initSearchParams.get("bcn"),
            o = e.usePop();
        return u.useEffect(() => {
            a && n && (ue.setState({
                deviceRegist: !0
            }), e.accountStore.waitLogin().then(async () => {
                await e.utils.delay(3500), nt().then(() => {
                    e.asyncQueue.add(() => o.push(t.jsx(_e, {
                        amount: Number(a),
                        currency: n
                    })))
                }).catch(s => {
                    console.error(s)
                })
            }))
        }, []), a && n ? null : t.jsx(ot, {})
    }),
    ot = F.memo(function() {
        const a = e.usePop(),
            n = e.useAccount(),
            [o, s] = u.useState(!0),
            i = e.useIsMobile();
        return u.useEffect(() => {
            ue.getDeviceRegist().then(c => {
                s(c)
            })
        }, []), u.useEffect(() => {
            o === !1 && setTimeout(() => {
                e.accountStore.initData.then(() => {
                    n.login || e.asyncQueue.add(() => a.push(t.jsx(u.Suspense, {
                        fallback: null,
                        children: t.jsx(tt, {})
                    })))
                })
            }, 1e3)
        }, [o]), i && !o ? t.jsx(Je, {}) : null
    }),
    kt = at;
const me = E(function({
    name: n,
    duration: o = 5e3,
    title: s,
    content: i,
    url: c
}) {
    const {
        t: p
    } = e.useTranslation(), d = e.useNavigate(), h = it().find(y => y.name === n), l = h || {
        name: "other",
        imgUrl: m.general,
        label: "",
        url: "/bonus"
    };
    return t.jsx("div", {
        className: rt,
        children: t.jsxs("div", {
            className: "inner",
            onClick: () => {
                d(c || l.url)
            },
            children: [t.jsx("img", {
                alt: "bonus",
                src: l.imgUrl,
                className: B("bonus-rewars-img", n)
            }), t.jsxs("div", {
                className: "rewards-notify-title",
                children: [t.jsx("p", {
                    className: "l",
                    children: s || l.label
                }), i && t.jsxs("p", {
                    className: "c",
                    children: [t.jsx("span", {
                        dangerouslySetInnerHTML: {
                            __html: i
                        }
                    }), n === "task" && t.jsx("span", {
                        className: "g",
                        children: `${p("Go to Claim your rewards")}! ->`
                    })]
                })]
            })]
        })
    })
});

function it() {
    const {
        t: a
    } = e.useTranslation();
    return [{
        name: "quests",
        imgUrl: m.quests,
        label: a("Quest Completed"),
        url: "#/quests"
    }, {
        name: "spin",
        imgUrl: m.spin,
        label: a("Spin Ready"),
        url: "#/spin"
    }, {
        name: "spin_fiat",
        imgUrl: m.spin_fiat,
        label: a("Spin Ready"),
        url: "#/spin"
    }, {
        name: "roll",
        imgUrl: m.roll,
        label: a("Roll Ready"),
        url: "#/bonus/roll"
    }, {
        name: "rakeback",
        imgUrl: m.rakeback,
        label: a("Rakeback Ready"),
        url: "#/rakeback"
    }, {
        name: "recharge",
        imgUrl: m.recharge,
        label: a("Recharge Ready"),
        url: "#/recharge"
    }, {
        name: "weeklybonus",
        imgUrl: m.weeklybonus,
        label: a("Weekly Cashback"),
        url: "/bonus"
    }, {
        name: "monthlybonus",
        imgUrl: m.monthlybonus,
        label: a("Monthly Cashback"),
        url: "/bonus"
    }, {
        name: "contest",
        imgUrl: m.contest,
        label: "",
        url: "/bonus"
    }, {
        name: "vipbonus",
        imgUrl: m.vipbonus,
        label: "",
        url: "/bonus"
    }]
}
const rt = "b1pfz1um",
    ct = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: me
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ut = E(function() {
        const n = $();
        return u.useEffect(() => {
            n.showNotify && e.notify(t.jsx(me, {
                name: n.notifyType
            }), {
                duration: 5e3,
                className: "bonus-notify-wrap",
                onClose: () => {
                    R.firstInit(!0)
                }
            })
        }, [n.showNotify, n.notifyType]), null
    }),
    jt = ut,
    lt = u.lazy(() => A(() =>
        import ("./BonusLink-857234a1.js"), ["BonusLink-857234a1.js", "gift-f7e71dcc.js", "main-45511cec.js", "gift-21e1a3d0.css", "tools-65472fba.js", "BonusLink-69774164.css"])),
    U = u.lazy(() => A(() => Promise.resolve().then(() => ct), void 0)),
    dt = u.lazy(() => A(() =>
        import ("./BcdReward-a7099270.js"), ["BcdReward-a7099270.js", "gift-f7e71dcc.js", "main-45511cec.js", "gift-21e1a3d0.css", "index-01ae22da.js", "BcdReward-80a985d0.css"]));
let X = null;
const ce = (a, n) => {
        X && clearTimeout(X), X = setTimeout(() => {
            e.notify(t.jsx(U, {
                name: "vipbonus",
                title: a,
                content: n
            }), {
                duration: 5e3,
                className: "bonus-notify-wrap"
            })
        }, 2e3)
    },
    mt = E(function() {
        const {
            t: a
        } = e.useTranslation(), n = e.useNavigate(), o = e.usePop();
        return u.useEffect(() => {
            e.addUserReceiptEvent("regist-invited-present-success", s => {
                const i = s.presentAmounts;
                if (i) {
                    const c = Object.keys(i).map(d => ({
                            name: d,
                            amount: i[d],
                            locked: !1
                        })),
                        p = {
                            currencyName: c[0].name,
                            stringAmount: c[0].amount,
                            locked: c[0].locked,
                            rewardType: "Money",
                            depositBonusPercentage: 0
                        };
                    e.asyncQueue.add(() => o.push(t.jsx(lt, {
                        code: "",
                        linkInfo: p,
                        isWelcome: !0,
                        defaultStatus: 1
                    })))
                }
            }), e.addUserReceiptEvent("recharge-bonus-notice", s => {
                e.bcdStore.initFn(), e.notify(a("Your Deposit Bonus of {{amount}} {{currencyName}} has been credited to your {{currencyNameTwo}} Unlock.", {
                    amount: s.amount,
                    currencyName: e.systemStore.getAlias(s.currencyName),
                    currencyNameTwo: e.systemStore.getAlias(s.currencyName)
                }), {
                    duration: 0,
                    onClick: () => {
                        n("#/bonus/dashboard"), setTimeout(() => {
                            o.push(t.jsx(dt, {
                                amount: s.amount,
                                currencyName: s.currencyName
                            }))
                        }, 2e3)
                    }
                })
            }), e.addUserReceiptEvent("user-reward", s => {
                switch (s.rewardType) {
                    case "contest":
                        {
                            e.notify(t.jsx(U, {
                                name: "contest",
                                title: s.title,
                                content: s.content
                            }), {
                                duration: 5e3,
                                className: "bonus-notify-wrap"
                            });
                            break
                        }
                    case "weekly_bonus":
                        {
                            e.notify(t.jsx(U, {
                                name: "weeklybonus",
                                duration: 0
                            }), {
                                duration: 0,
                                className: "bonus-notify-wrap"
                            });
                            break
                        }
                    case "month_bonus":
                        {
                            e.notify(t.jsx(U, {
                                name: "monthlybonus",
                                duration: 0
                            }), {
                                duration: 0,
                                className: "bonus-notify-wrap"
                            });
                            break
                        }
                    case "level-up":
                        {
                            ce(s.title, s.content);
                            break
                        }
                    case "vip_give_bonus":
                        {
                            ce(s.title, s.content);
                            break
                        }
                    case "rewardTaskHub":
                        break;
                    case "vip_recharge_bonus":
                        break;
                    case "wager-degenpass":
                        break;
                    case "bigbangfianal":
                        break;
                    default:
                        {
                            e.notify(t.jsx(U, {
                                name: "other",
                                title: s.title,
                                content: s.content
                            }), {
                                duration: 5e3,
                                className: "bonus-notify-wrap"
                            });
                            break
                        }
                }
                e.app.emit("rewardClaim")
            }), e.addUserReceiptEvent("user-present-success", s => {
                switch (s.presentType) {
                    case "tip":
                        e.notify(a("Wow! You received {{amount}} tip from {{userName}}", {
                            amount: `${s.amount} ${e.systemStore.getAlias(s.currencyName)}`,
                            userName: s.userName
                        }), {
                            duration: 5e3
                        });
                        break;
                    case "rain":
                        e.notify(a("Wow! You received {{amount}} rain from {{userName}}", {
                            amount: `${s.amount} ${e.systemStore.getAlias(s.currencyName)}`,
                            userName: s.userName
                        }), {
                            duration: 5e3
                        });
                        break;
                    default:
                        e.app.emit("get-spin-rain-or-tip"), e.notify(a("Wow you got {{amount}} spin from Coco", {
                            amount: s.amount
                        }), {
                            duration: 0,
                            onClick: () => n("#/spin")
                        });
                        break
                }
            }), e.addUserReceiptEvent("task-completed", s => {
                const i = s.taskType === "daily" ? "#/quests" : "#/quests/weekly";
                e.app.emit("rewardClaim"), e.notify(t.jsx(U, {
                    name: "task",
                    content: s.content,
                    url: i
                }), {
                    duration: 5e3,
                    className: "bonus-notify-wrap"
                })
            }), e.addUserReceiptEvent("recharge-success", s => {
                e.app.emit("rewardClaim"), s.status === 1 ? e.notify(a("Deposit is in progress"), {
                    duration: 5e3
                }) : (e.app.emit("track", "deposit_recieved"), e.bcdStore.initFn(), e.walletStore.state[s.currencyName].displayStatus = 1, s.depositCount == 1 ? e.app.emit("ad_track", "ftd_success", {
                    sales: e.systemStore.amount2usd(new e.Decimal(s.amount || 0), s.currencyName).toString(),
                    orderid: String(s.id),
                    userId: String(e.accountStore.state.userId)
                }) : s.depositCount == 2 && e.app.emit("ad_track", "reccuring_deposit", {
                    sales: e.systemStore.amount2usd(new e.Decimal(s.amount || 0), s.currencyName).toString(),
                    orderid: String(s.id),
                    userId: String(e.accountStore.state.userId)
                }), e.app.emit("ad_track", "deposit_success", {
                    sales: e.systemStore.amount2usd(new e.Decimal(s.amount || 0), s.currencyName).toString(),
                    orderid: String(s.id),
                    userId: String(e.accountStore.state.userId)
                }), e.notify(`${s.amount} ${e.systemStore.getAlias(s.currencyName)}`, {
                    title: a("Congrats! Your deposit has been completed!"),
                    duration: 5e3,
                    onClick: () => n(`#/deposit_detail/${s.id}`)
                }), e.app.emit("da_track", "deposit_sended"))
            }), e.addUserReceiptEvent("withdraw-progress", () => {
                e.notify(a("Withdrawal is in progress."), {
                    duration: 5e3
                })
            }), e.addUserReceiptEvent("withdraw-success", s => {
                e.notify(a("You have successfully withdrawn {{amount}}.", {
                    amount: `${s.amount} ${e.systemStore.getAlias(s.currencyName)}`
                }), {
                    duration: 5e3,
                    title: a("Withdrawal Successful")
                })
            }), e.addUserReceiptEvent("withdraw-fail", s => {
                e.notify(a("Withdrawal failed. {{amount}} has been returned to your balance.", {
                    amount: `${s.amount} ${e.systemStore.getAlias(s.currencyName)}`
                }), {
                    duration: 0,
                    onClick: () => n(`/wallet/transaction?type=withdraw&assets=${s.currencyName}`)
                })
            }), e.addUserReceiptEvent("change-amount-success", s => {
                e.notify(`You found ${s.amount} ${e.systemStore.getAlias(s.currencyName)} under of Coco's Red throne`, {
                    title: a("Forum Tip"),
                    duration: 0,
                    onClick: () => n(`/wallet/transaction?type=bill&assets=${s.currencyName}`)
                })
            }), e.addUserReceiptEvent("use-code-success", s => {
                e.notify(a("You have got {{amount}} from {{mascot}}'s cave.", {
                    amount: `${s.amount} ${e.systemStore.getAlias(s.currencyName)}`,
                    mascot: e.env.mascot
                }), {
                    title: a("The bonus code worked!"),
                    duration: 5e3,
                    onClick: () => n(`/wallet/transaction?type=bill&assets=${s.currencyName}`)
                })
            }), e.addUserReceiptEvent("present-success", s => {
                e.notify(a("Congratulations! You got {{amount}} from {{mascot}}'s cave.", {
                    amount: `${s.amount} ${e.systemStore.getAlias(s.currencyName)}`,
                    mascot: e.env.mascot
                }), {
                    duration: 0,
                    onClick: () => n(`/wallet/transaction?type=deposit&assets=${s.currencyName}`)
                })
            }), e.addUserReceiptEvent("regist-present-success", () => {
                e.asyncQueue.add(() => n("#/spin"))
            })
        }, []), null
    }),
    Ct = mt;
export {
    kt as AutoNewSpin, ft as BcdTipsEnter, Ct as BindBonusEvents, xt as BonusEnter, jt as BonusNotify, Nt as CatchCoco, yt as MobileLinkEnter, bt as MobileNumberEnter, vt as NewUserTask, wt as PCLinkEnter
};