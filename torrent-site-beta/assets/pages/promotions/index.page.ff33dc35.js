var ie = Object.defineProperty;
var O = Object.getOwnPropertySymbols;
var ae = Object.prototype.hasOwnProperty,
    ne = Object.prototype.propertyIsEnumerable;
var P = (s, t, i) => t in s ? ie(s, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : s[t] = i,
    h = (s, t) => {
        for (var i in t || (t = {})) ae.call(t, i) && P(s, i, t[i]);
        if (O)
            for (var i of O(t)) ne.call(t, i) && P(s, i, t[i]);
        return s
    };
var $ = (s, t, i) => (P(s, typeof t != "symbol" ? t + "" : t, i), i);
import {
    j as e
} from "../../chunk-a4af42e8.js";
import {
    R as z,
    r as c
} from "../../chunk-73e80d68.js";
import {
    cu as g,
    er as le,
    ak as A,
    du as N,
    dy as y,
    eA as re,
    dl as F,
    d7 as ce,
    ci as _,
    dg as W,
    ev as u,
    e9 as f,
    ct as oe,
    ez as T,
    cJ as b,
    dd as H,
    ds as L,
    e7 as de,
    d1 as me,
    da as he,
    cT as K,
    cA as U,
    cX as Y,
    dL as ue,
    eg as pe,
    ed as xe
} from "../../chunk-b53b00e3.js";
import {
    c as d
} from "../../chunk-5bcb444f.js";
import {
    C as ge
} from "../../chunk-661881bd.js";
import {
    r as p
} from "../../chunk-f0854543.js";
import "../../chunk-cf010ec4.js";
const je = z.memo(function() {
        return e.jsx("div", {
            className: d(we, "page-max-width-wrap"),
            children: e.jsx(ge, {})
        })
    }),
    we = "du1vpaa";
var k = (s => (s[s.COMMON = 0] = "COMMON", s[s.LOSE = 1] = "LOSE", s[s.WIN = 2] = "WIN", s))(k || {});
const Z = {
        goals: 0,
        dayUse: !1
    },
    B = {
        totalTicket: 0,
        totalWinningTicket: 0,
        totalWinningAmount: 0
    },
    Ne = {
        page: 1,
        pageSize: 20,
        total: 0,
        totalPage: 0
    },
    D = {
        page: 1,
        pageSize: 20,
        total: 0,
        totalPage: 0,
        list: []
    },
    E = Date.now() + 24 * 60 * 60 * 1e3,
    G = {
        drawTime: E,
        totalTicket: 0,
        winnersPageList: {
            page: 1,
            pageSize: 20,
            total: 0,
            totalPage: 0,
            list: []
        }
    },
    fe = 2e4,
    Q = {
        period: 0,
        status: 0,
        totalTicket: 0,
        dayTicket: 0,
        drawTime: E,
        createTime: Date.now(),
        updateTime: Date.now()
    };

function ke(s) {
    const t = s.goals,
        i = new g(s.dayUse ? 1e3 : 100),
        a = le(),
        n = i.sub(t).todp(0);
    if (!a.enableLocaleCurrency) return {
        wager: n,
        total: i
    };
    const l = n.div(i),
        r = i;
    return {
        wager: i.mul(l).todp(0),
        total: r
    }
}
const {
    proxy: ve,
    useProxy: be
} = re;
class ye {
    constructor() {
        $(this, "state", ve({
            lastList: [],
            raffleWeekly: h({}, Q),
            periodIdProps: h({}, Ne),
            periodIdList: [],
            winningPeriodIdList: [],
            drawTime: E,
            progress: h({}, Z),
            statistics: h({}, B),
            runningTickets: h({}, D),
            pastwinTickets: h({}, D),
            resultTickets: h({}, G),
            periodTicketCount: 0,
            round: 0,
            winningRound: 0,
            roundLoading: !1
        }))
    }
    initFn() {
        Promise.all([N.get("/raffleDeal/currentInfo/"), N.post("/raffleDeal/lastPeriodId/", {
            page: this.state.periodIdProps.page,
            pageSize: this.state.periodIdProps.pageSize
        })]).then(t => {
            if (t && t.length >= 2) {
                if (t[0]) {
                    const i = t[0];
                    this.state.lastList = i.lastList || [], this.state.raffleWeekly = i.raffleWeekly || h({}, Q), this.state.drawTime = this.state.raffleWeekly.drawTime, F.state.login && (this.getUserStatistics(), this.getUserWinningList())
                }
                t[1] && (this.state.periodIdList = t[1].list || [], this.state.periodIdProps = {
                    page: t[1].page || 1,
                    pageSize: t[1].pageSize || 20,
                    total: t[1].total || 0,
                    totalPage: t[1].totalPage || 0
                }, this.state.periodIdList.length > 0 && (this.state.round = this.state.periodIdList.length > 1 ? this.state.periodIdList[1] : this.state.periodIdList[0], R(this.state.round, 1, 20)))
            }
        }).catch(y)
    }
    getUserStatistics() {
        N.get("/raffleDeal/statistics/").then(t => {
            t && (this.state.progress = t.progress || h({}, Z), this.state.statistics = t.statistics || h({}, B), this.state.periodTicketCount = t.periodTicketCount || 0)
        }).catch(y)
    }
    getUserWinningList() {
        N.post("/raffleDeal/lastPeriodId/", {
            page: 1,
            pageSize: 50,
            onlyWinning: !0,
            userId: F.state.userId
        }).then(t => {
            t && (this.state.winningPeriodIdList = t.list || [], this.state.winningRound = t.list[0] || 0)
        }).catch(y)
    }
    updateLastPeriodId() {
        N.post("/raffleDeal/lastPeriodId/", {
            page: this.state.periodIdProps.page + 1,
            pageSize: this.state.periodIdProps.pageSize
        }).then(t => {
            if (t) {
                const i = t.list || [];
                this.state.periodIdList = this.state.periodIdList.concat(i), this.state.periodIdProps = {
                    page: t.page || this.state.periodIdProps.page + 1,
                    pageSize: t.pageSize || this.state.periodIdProps.pageSize,
                    total: t.total || this.state.periodIdProps.total,
                    totalPage: t.totalPage || this.state.periodIdProps.totalPage
                }
            }
        }).catch(console.log)
    }
}
const R = A((s, t, i) => {
        m.state.roundLoading = !0, N.post("/raffleDeal/winnersList/", {
            periodId: s,
            page: t,
            pageSize: i
        }).then(a => {
            a && (m.state.resultTickets = a || h({}, G), m.state.round = s)
        }).catch(y).finally(() => {
            m.state.roundLoading = !1
        })
    }, 300),
    I = (s, t = !1, i = !0, a = !1) => {
        i && (m.state.roundLoading = !0), N.post("/raffleDeal/myTickets/", h({}, s)).then(n => {
            if (n) {
                const l = n || h({}, D);
                t ? m.state.runningTickets = l : a ? (m.state.winningRound = s.periodId, m.state.pastwinTickets = l) : (m.state.round = s.periodId, m.state.pastwinTickets = l)
            }
        }).catch(y).finally(() => {
            i && (m.state.roundLoading = !1)
        })
    },
    Te = A((s, t = !1, i = !0, a = !1) => {
        I(s, t, i, a)
    }, 300),
    m = new ye;

function x() {
    return be(m.state)
}
const Ie = c.memo(function() {
        const s = x().lastList;
        return e.jsx("div", {
            className: Se,
            children: e.jsx("div", {
                className: "page-max-width-wrap",
                children: s && s.length > 0 && e.jsx(ce, {
                    direction: "vertical",
                    slidesPerView: "auto",
                    autoplay: {
                        delay: 2e3,
                        disableOnInteraction: !1,
                        pauseOnMouseEnter: !0
                    },
                    loop: !0,
                    className: "swiper",
                    children: s.map((t, i) => {
                        const a = t.ticketCount;
                        return e.jsx("div", {
                            children: e.jsxs("div", {
                                className: "top-swiper-item",
                                children: [e.jsx(_.UserInfo, {
                                    userId: t.userId,
                                    name: t.userName,
                                    avatar: !0,
                                    showName: !0
                                }), e.jsx("p", {
                                    className: "tickets",
                                    children: e.jsxs(W, {
                                        ticket_count: a,
                                        i18nKey: "trans.mainpage.raffle.desc3",
                                        children: ["got ", e.jsx("span", {
                                            className: "p",
                                            children: {
                                                ticket_count: a
                                            }
                                        }), " tickets"]
                                    })
                                })]
                            })
                        }, "lswpier-" + i)
                    })
                })
            })
        })
    }),
    Se = "t2r0e4l",
    We = c.memo(function() {
        const {
            t: s
        } = u(), t = f(!0), i = x();
        return e.jsxs("div", {
            className: d(Le, "raffle-header-wrap"),
            children: [e.jsxs("div", {
                className: "inner-top",
                children: [e.jsxs("p", {
                    children: [s("Game ID"), ": ", e.jsx("span", {
                        children: i.raffleWeekly.period
                    })]
                }), e.jsxs("a", {
                    href: "#raffle-rule",
                    children: [s("How To Play"), "?"]
                })]
            }), e.jsxs("div", {
                className: "inner",
                children: [e.jsx("img", {
                    alt: "card",
                    className: "card-one",
                    src: p.card1
                }), e.jsx("img", {
                    alt: "card",
                    className: "card-two",
                    src: p.card2
                }), e.jsx("div", {
                    className: "h2-wrap",
                    children: e.jsx("h2", {
                        children: s("SUPER LUCKY DRAW")
                    })
                }), e.jsx("div", {
                    className: "line-wrap",
                    children: e.jsx("p", {
                        className: "y-num",
                        children: t.amount2localStr(new g(fe))
                    })
                }), e.jsxs("div", {
                    className: "line-wrap",
                    children: [e.jsx("p", {
                        className: "next-p",
                        children: s("Next Draw Starts in")
                    }), e.jsx(oe, {
                        endTime: i.drawTime,
                        onEnd: () => {
                            setTimeout(() => m.initFn(), 3e3)
                        },
                        children: ({
                            days: a,
                            hours: n,
                            minutes: l,
                            seconds: r
                        }) => e.jsx("p", {
                            className: "next-time",
                            children: `${a>0?T.numberZeroize(a)+"d:":""}${T.numberZeroize(n)}h:${T.numberZeroize(l)}m:${T.numberZeroize(r)}s`
                        })
                    })]
                }), e.jsx("a", {
                    className: "earn-ticket-btn",
                    href: "#raffle-rule",
                    children: s("Earn ticket")
                }), e.jsxs("p", {
                    className: "sent-tickets",
                    children: [s("{{number}} tickets have been sent this round", {
                        number: `[${i.raffleWeekly.totalTicket}]`
                    }), "!"]
                })]
            })]
        })
    }),
    Le = "hdykd4i",
    Ce = c.memo(function() {
        const {
            t: s
        } = u(), t = f(!0), i = t.amount2localStr(new g(100));
        return e.jsxs("div", {
            className: d(Pe, "howto-eran-wrap"),
            children: [e.jsx("div", {
                className: "title-wrap",
                children: e.jsx("p", {
                    children: s("How to Earn Ticket")
                })
            }), e.jsxs("div", {
                className: "methods-wrap",
                children: [e.jsxs("div", {
                    className: "method-item",
                    children: [e.jsx("div", {
                        className: "left-img-wrap ticket",
                        children: e.jsx("img", {
                            alt: "ticket",
                            src: p.ticket
                        })
                    }), e.jsxs("div", {
                        className: "right-text",
                        children: [e.jsxs("p", {
                            className: "r-t",
                            children: [e.jsxs(W, {
                                amount: i,
                                i18nKey: "trans.mainpage.log.wager",
                                children: ["Log in & Wager ", e.jsx("span", {
                                    className: "icy",
                                    children: {
                                        amount: i
                                    }
                                }), " Daily"]
                            }), " ", ":"]
                        }), e.jsxs("p", {
                            className: "r-n",
                            children: ["+ 1 ", s("Ticket")]
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "method-item",
                    children: [e.jsx("div", {
                        className: "left-img-wrap",
                        children: e.jsx("img", {
                            alt: "ticket",
                            src: p.ticket_more
                        })
                    }), e.jsxs("div", {
                        className: "right-text",
                        children: [e.jsxs("p", {
                            className: "r-t",
                            children: [e.jsx("span", {
                                children: s("Every wager")
                            }), e.jsx("span", {
                                className: "icy c",
                                children: t.amount2localStr(new g(1e3))
                            }), e.jsx("span", {
                                children: ":"
                            })]
                        }), e.jsxs("p", {
                            className: "r-n",
                            children: ["+ 1 ", s("Ticket")]
                        })]
                    })]
                })]
            })]
        })
    }),
    Pe = "e1vi40xn",
    ze = [{
        label: "No. 1",
        value: 5e3
    }, {
        label: "No. 2",
        value: 3500
    }, {
        label: "No. 3",
        value: 2e3
    }, {
        label: "No. 4",
        value: 1500
    }, {
        label: "No. 5",
        value: 1e3
    }, {
        label: "No. 6",
        value: 500
    }, {
        label: "No. 7",
        value: 500
    }, {
        label: "No. 8",
        value: 500
    }, {
        label: "No. 9",
        value: 500
    }, {
        label: "No. 10",
        value: 500
    }, {
        label: "No. 11 ~ No. 20",
        value: 100
    }, {
        label: "No. 21 ~ No. 50",
        value: 50
    }, {
        label: "No. 51 ~ No. 150",
        value: 20
    }],
    Ue = function() {
        const {
            t: s
        } = u(), [t, i] = c.useState(!0), a = f();
        return e.jsx("div", {
            className: d(De, "raffle-rule-wrap"),
            id: "raffle-rule",
            children: e.jsxs("div", {
                className: "toogle-rule-item",
                children: [e.jsxs("div", {
                    className: "tootle-lebel",
                    onClick: () => i(!t),
                    children: [e.jsx("span", {
                        className: "t",
                        children: s("Raffle rules")
                    }), e.jsx("div", {
                        className: d("right-icon", t && "open"),
                        children: e.jsx(b, {
                            name: "Arrow",
                            className: t ? "open" : "close"
                        })
                    })]
                }), e.jsx(H, {
                    visible: t,
                    children: e.jsxs("div", {
                        className: "toogle-desc",
                        children: [e.jsx("p", {
                            className: "tit",
                            children: s("How to Enter:")
                        }), e.jsxs("ul", {
                            children: [e.jsx("li", {
                                children: s("Log in daily and wager $100 to earn 1 ticket. Under this condition, you can earn a maximum up to 7 tickets per week.")
                            }), e.jsx("li", {
                                children: s("For every $1000 USD you wager, you will receive one extra ticket. The number of tickets you will get increases with your wager amount.")
                            }), e.jsx("li", {
                                children: s("Every entry will correlate to an entry number.")
                            }), e.jsx("li", {
                                children: s("Your entry numbers can be found on the same page.")
                            }), e.jsx("li", {
                                children: s("Maximum tickets accumulated per user can be up to 100 tickets per week.")
                            })]
                        }), e.jsx("p", {
                            className: "tit",
                            children: s("Weekly Raffle Draw:")
                        }), e.jsx("ul", {
                            children: e.jsx("li", {
                                children: s("Weekly raffle draws every Monday at 12:00:00 UTC; the winners will be announced on the same page.")
                            })
                        }), e.jsx("p", {
                            className: "tit",
                            children: s("Terms and Conditions:")
                        }), e.jsxs("ul", {
                            children: [e.jsx("li", {
                                children: s("You must have an account on {{host}}.", {
                                    host: L.buildHost
                                })
                            }), e.jsx("li", {
                                children: s("The weekly raffle includes all types of wager in \u201CCasino\u201D and \u201CSports\u201D, except the usage of BCL & {{jb}}.", {
                                    jb: L.freeCoin
                                })
                            }), e.jsx("li", {
                                children: s("{{host}} reserves the right to hold void, suspend, cancel, or amend this promotion where it deems necessary to do so.", {
                                    host: L.buildHost
                                })
                            }), e.jsx("li", {
                                children: s("Entries will be declared void if the entrant is found engaging in fraud, misrepresentation, hacking, or exploitation.")
                            }), e.jsx("li", {
                                children: s("{{host}} reserves the right to perform additional KYC/AML checks as a condition of receiving the weekly raffle reward.", {
                                    host: L.buildHost
                                })
                            })]
                        }), e.jsx("p", {
                            className: "tit",
                            children: s("Winning Prize Details:")
                        }), e.jsxs("table", {
                            children: [e.jsx("thead", {
                                children: e.jsxs("tr", {
                                    children: [e.jsx("th", {
                                        className: "left",
                                        children: s("Result")
                                    }), e.jsx("th", {
                                        children: s("Prize")
                                    })]
                                })
                            }), e.jsx("tbody", {
                                children: ze.map((n, l) => {
                                    const r = l === 0;
                                    return e.jsxs("tr", {
                                        children: [e.jsx("td", {
                                            className: r ? "p left" : "left",
                                            children: n.label
                                        }), e.jsx("td", {
                                            className: r ? "b value" : "value",
                                            children: a.amount2localStr(new g(n.value))
                                        })]
                                    }, "table-tr-" + l)
                                })
                            })]
                        })]
                    })
                })]
            })
        })
    },
    De = "r1j4g1dc";

function Ee() {
    const {
        t: s
    } = u();
    return [{
        question: s("How to earn the \u201Cticket\u201D? How many tickets can I collect?"),
        answer: e.jsxs("ul", {
            children: [e.jsx("li", {
                children: s("Log in daily and wager $100 to in the same day to earn 1 ticket and maximum 7 tickets per week.")
            }), e.jsx("li", {
                children: s("By every wager of $1,000, you will earn 1 extra ticket. The more wagers, the more tickets.")
            }), e.jsx("li", {
                children: s("Maximum number of tickets collected per user can be up to 100 tickets per week.")
            }), e.jsx("li", {
                children: s("Ticket refresh every 10 mins, please check in 'My Tickets' section.")
            })]
        })
    }, {
        question: s("When the winner be announced?"),
        answer: e.jsxs("ul", {
            children: [e.jsx("li", {
                children: s("Winner will be announced every Monday at 12:00:00 UTC. The winner list can be found on the same page.")
            }), e.jsx("li", {
                children: s("Raffle reward will credit to BC.GAME account within 48 hours.")
            })]
        })
    }, {
        question: s("Can I win multiple rewards in a round of weekly raffle?"),
        answer: e.jsx("ul", {
            children: e.jsx("li", {
                children: s("Unfortunately, no. One(1) user can win one(1) time per week. Collect more tickets to increase the winning chances.")
            })
        })
    }, {
        question: s("Can I join the next raffle with \u201COld Ticket\u201D?"),
        answer: e.jsx("ul", {
            children: e.jsx("li", {
                children: s("Unfortunately, no. Users have to re-accumulate the new ticket(s) in order to join the new weekly raffle.")
            })
        })
    }, {
        question: s("Can I know more about the time period?"),
        answer: e.jsxs("ul", {
            children: [e.jsx("li", {
                children: s("For \u201CDaily login and wager $100\u201D, users must complete the requirement between 00:00 UTC ~ 23:59 UTC in order to earn the ticket.")
            }), e.jsx("li", {
                children: s("For \u201CEvery wager of $1,000 to earn extra tickets\u201D, there is no time limitation.")
            }), e.jsx("li", {
                children: s("The weekly raffle starts every Monday at 12:00:00 UTC to Sunday at 11:59:59 UTC. (All tickets accumulated in one week will not count in the next week.)")
            }), e.jsx("li", {
                children: s("The lucky winner list will be updated on the same page by every Monday at 12:00:00 UTC, and rewards will be distributed within 48 hours.")
            })]
        })
    }]
}
const Re = c.memo(function() {
        const {
            t: s
        } = u(), t = de(), i = Ee(), a = t < 1e3;
        return e.jsx("div", {
            className: d(Me, a && "small-question-wrap"),
            children: e.jsxs("div", {
                className: "page-max-width-wrap",
                children: [e.jsx("p", {
                    className: "q-t",
                    children: s("Frequently Asked Questions")
                }), e.jsx("div", {
                    className: "ql-wrap",
                    children: i.map((n, l) => e.jsx(qe, {
                        answer: n.answer,
                        question: n.question,
                        defaultOpen: l === 0
                    }, `question-item-${l}`))
                })]
            })
        })
    }),
    qe = z.memo(function({
        question: s,
        answer: t,
        defaultOpen: i
    }) {
        const [a, n] = c.useState(i);
        return e.jsxs("div", {
            className: "toogle-question-item",
            children: [e.jsxs("div", {
                className: "tootle-lebel",
                onClick: () => n(!a),
                children: [e.jsx("span", {
                    className: "t",
                    children: s
                }), e.jsx("div", {
                    className: d("right-icon", a && "open"),
                    children: e.jsx("img", {
                        alt: "action",
                        src: a ? p.close : p.plus
                    })
                })]
            }), e.jsx(H, {
                visible: a,
                children: e.jsx("div", {
                    className: "toogle-desc",
                    children: t
                })
            })]
        })
    }),
    Me = "q5ws1cm";

function Oe(s) {
    return s === k.WIN ? "ticket-win" : s === k.LOSE ? "ticket-lose" : "ticket-common"
}
const J = c.memo(function({
        ticketNumber: s,
        ticketStatus: t
    }) {
        const i = Oe(t);
        return e.jsx("div", {
            className: d($e, i, "ticket-item"),
            children: e.jsx("span", {
                children: s
            })
        })
    }),
    $e = "t1yqu3hf";

function Ae(s) {
    return s.map(t => ({
        label: String(t),
        value: t
    }))
}
const q = c.memo(function({
        value: s,
        rounds: t,
        onWeekChange: i,
        onlyWinning: a
    }) {
        const {
            t: n
        } = u(), [l, r] = c.useState(s), o = t.findIndex(w => w === l), S = o >= t.length - 1, j = o < 1, C = o === 0, v = w => {
            const se = t.findIndex(te => te === w);
            a || t.length - se <= 5 && m.updateLastPeriodId(), r(w), i(w)
        }, X = () => {
            o < t.length - 1 && v(t[o + 1])
        }, ee = () => {
            o >= 1 && v(t[o - 1])
        };
        return e.jsxs("div", {
            className: d(Fe, "rounds-select"),
            children: [e.jsx("p", {
                children: n("Round")
            }), e.jsx("button", {
                disabled: S,
                className: d("round-btn pre", S && "disabled"),
                onClick: X,
                children: e.jsx(b, {
                    name: "Arrow"
                })
            }), e.jsx(me, {
                value: l,
                renderLabel: w => e.jsx("p", {
                    className: "select-option",
                    children: w.label
                }),
                options: Ae(t),
                onChange: v
            }), e.jsx("button", {
                disabled: j,
                className: d("round-btn", j && "disabled"),
                onClick: ee,
                children: e.jsx(b, {
                    name: "Arrow"
                })
            }), e.jsx("button", {
                disabled: C,
                className: d("round-btn", j && "disabled"),
                onClick: () => v(t[0]),
                children: e.jsx(b, {
                    name: "Final"
                })
            })]
        })
    }),
    Fe = "r1rifvsq",
    _e = c.memo(function() {
        const {
            t: s
        } = u(), [t, i] = c.useState(0), a = x(), n = [{
            label: s("Active"),
            value: He
        }, {
            label: s("Past"),
            value: Ke
        }, {
            label: s("My Winnings"),
            value: Ye
        }], l = r => {
            Te({
                periodId: r,
                onlyWinning: t === 2,
                page: a.pastwinTickets.page,
                pageSize: a.pastwinTickets.pageSize
            }, !1, !0, t === 2)
        };
        return e.jsxs("div", {
            className: d(Ze, t > 0 && "top-tab-space"),
            children: [e.jsx(he, {
                className: "mytickets-tab-wrap",
                value: t,
                tabs: n,
                onChange: i,
                type: "line"
            }), t === 1 && a.round > 0 && e.jsx(q, {
                onWeekChange: l,
                onlyWinning: !1,
                value: a.round,
                rounds: a.periodIdList
            }), t === 2 && a.winningRound > 0 && e.jsx(q, {
                onWeekChange: l,
                onlyWinning: !0,
                value: a.winningRound,
                rounds: a.winningPeriodIdList
            })]
        })
    }),
    He = c.memo(function() {
        u();
        const s = x();
        c.useEffect(() => {
            s.raffleWeekly.period && I({
                periodId: s.raffleWeekly.period,
                onlyWinning: !1,
                page: 1,
                pageSize: 20
            }, !0, !1, !1)
        }, [s.raffleWeekly]);
        const t = f(),
            {
                wager: i
            } = ke(s.progress),
            a = t.amount2localStr(i);
        return s.runningTickets.list.length <= 0 ? e.jsx("div", {
            className: "wager-get-ticket",
            children: e.jsxs(W, {
                wager_amount: "wager_amount",
                i18nKey: "trans.mainpage.raffle.desc1",
                children: ["Wager ", e.jsx("span", {
                    className: "w",
                    children: {
                        wager_amount: a
                    }
                }), " to get your daily raffle ticket."]
            })
        }) : e.jsxs(e.Fragment, {
            children: [s.periodTicketCount < 100 && e.jsxs("p", {
                className: "active-wager",
                children: [e.jsxs(W, {
                    wager_amount: "wager_amount",
                    i18nKey: "trans.mainpage.raffle.desc2",
                    children: ["Wager ", e.jsx("span", {
                        className: "rw",
                        children: {
                            wager_amount: a
                        }
                    }), " to get one more additional raffle ticket."]
                }), e.jsxs("span", {
                    className: "rn",
                    children: [s.periodTicketCount, "/100"]
                })]
            }), e.jsx(M, {
                isRunnig: !0,
                tickets: s.runningTickets
            })]
        })
    }),
    Ke = c.memo(function() {
        const s = x();
        return c.useEffect(() => {
            I({
                periodId: s.round,
                onlyWinning: !1,
                page: 1,
                pageSize: 20
            }, !1, !0, !1)
        }, []), e.jsx(M, {
            isRunnig: !1,
            tickets: s.pastwinTickets
        })
    }),
    Ye = c.memo(function() {
        const s = x();
        return c.useEffect(() => {
            s.winningRound > 0 && I({
                periodId: s.winningRound,
                onlyWinning: !0,
                page: 1,
                pageSize: 20
            }, !1, !0, !0)
        }, []), e.jsx(M, {
            isRunnig: !1,
            tickets: s.pastwinTickets,
            isWin: !0
        })
    }),
    M = c.memo(function({
        isRunnig: s,
        tickets: t,
        isWin: i = !1
    }) {
        const {
            t: a
        } = u(), n = f(!0), l = x(), r = o => {
            I({
                periodId: s ? l.raffleWeekly.period : l.round,
                onlyWinning: i,
                page: o,
                pageSize: 20
            }, s, !0)
        };
        return l.roundLoading ? e.jsx("div", {
            className: "loading-tickets",
            children: e.jsx(K, {})
        }) : t.list.length <= 0 ? e.jsx("div", {
            className: "empty-tickets",
            children: e.jsx(U, {})
        }) : e.jsxs("div", {
            className: d(Be, "ticket-table"),
            children: [e.jsxs("div", {
                className: "ticket-table-head",
                children: [e.jsx("p", {
                    className: "th l",
                    children: a("My Ticket")
                }), e.jsx("p", {
                    className: "th r",
                    children: a("Prize")
                })]
            }), t.list.map((o, S) => {
                const j = o.winning > 0,
                    C = j ? k.WIN : k.LOSE,
                    v = j ? o.winning : 0;
                return e.jsxs("div", {
                    className: "ticket-table-tr",
                    children: [e.jsx("div", {
                        className: "td l",
                        children: e.jsx(J, {
                            ticketNumber: o.number,
                            ticketStatus: s ? k.COMMON : C
                        })
                    }), e.jsx("div", {
                        className: "td r",
                        children: s ? e.jsx("span", {
                            children: a("Waiting for next draw")
                        }) : j ? e.jsxs("span", {
                            className: "g",
                            children: ["+", n.amount2localStr(new g(v))]
                        }) : e.jsx("span", {
                            children: "--"
                        })
                    })]
                }, "ticket-item-" + S)
            }), t.totalPage > 1 && e.jsx("div", {
                className: "ticket-pagination",
                children: e.jsx(Y, {
                    page: t.page,
                    total: t.total,
                    limit: t.pageSize,
                    onChange: r
                })
            })]
        })
    }),
    Ze = "tkqt7pc",
    Be = "t8vzuss",
    Ge = c.memo(function() {
        const {
            t: s
        } = u(), t = f(!0), i = x();
        return e.jsxs("div", {
            className: Qe,
            children: [e.jsx("div", {
                className: "tickets-wrap",
                children: e.jsxs("div", {
                    className: "tickets-wrap-inner",
                    children: [e.jsxs("div", {
                        className: "tickets-left",
                        children: [e.jsxs("div", {
                            className: "img-text-item",
                            children: [e.jsx("div", {
                                className: "limg-wrap",
                                children: e.jsx("img", {
                                    alt: "tickets",
                                    className: "tickets",
                                    src: p.tickets
                                })
                            }), e.jsxs("p", {
                                className: "c",
                                children: [s("Total tickets"), ":"]
                            }), e.jsx("p", {
                                className: "w",
                                children: i.statistics.totalTicket
                            })]
                        }), e.jsxs("div", {
                            className: "img-text-item",
                            children: [e.jsx("div", {
                                className: "limg-wrap",
                                children: e.jsx("img", {
                                    alt: "hat",
                                    className: "hat",
                                    src: p.hat
                                })
                            }), e.jsxs("p", {
                                className: "c",
                                children: [s("Total winning tickets"), ":"]
                            }), e.jsx("p", {
                                className: "w",
                                children: i.statistics.totalWinningTicket
                            })]
                        })]
                    }), e.jsx("div", {
                        className: "tickets-right",
                        children: e.jsxs("div", {
                            className: "img-text-item",
                            children: [e.jsx("div", {
                                className: "limg-wrap",
                                children: e.jsx("img", {
                                    alt: "coin",
                                    className: "coin",
                                    src: p.coin
                                })
                            }), e.jsxs("p", {
                                className: "c",
                                children: [s("Total Prize won"), ":"]
                            }), e.jsx("p", {
                                className: "y",
                                children: t.amount2localStr(new g(i.statistics.totalWinningAmount || 0))
                            })]
                        })
                    }), e.jsx("div", {
                        className: "line"
                    }), e.jsxs("div", {
                        className: "ball-wrap",
                        children: [e.jsx("div", {
                            className: "ball top"
                        }), e.jsx("div", {
                            className: "ball bot"
                        })]
                    })]
                })
            }), e.jsx(_e, {})]
        })
    }),
    Qe = "m12xtvm0",
    V = c.memo(function() {
        const {
            t: s
        } = u(), t = f(!0), i = x(), a = i.resultTickets.winnersPageList, n = a.list, l = n.length > 0 ? [...n].slice().sort((r, o) => r.ranking - o.ranking) : [];
        return i.periodIdList.length <= 0 ? e.jsx(U, {}) : e.jsxs("div", {
            className: Je,
            children: [e.jsx(q, {
                onWeekChange: r => R(r, 1, 20),
                value: i.round,
                rounds: i.periodIdList,
                onlyWinning: !1
            }), e.jsxs("div", {
                className: "result-top-info",
                children: [e.jsxs("p", {
                    children: [s("Draw time"), ":", " ", new Date(i.resultTickets.drawTime).toLocaleString()]
                }), e.jsxs("div", {
                    className: "r-info",
                    children: [e.jsx("img", {
                        alt: "ticket",
                        src: p.tickets
                    }), e.jsx("p", {
                        children: s("Total participated tickets for this round")
                    }), e.jsx("p", {
                        className: "b",
                        children: T.numberWithCommas(!1, i.resultTickets.totalTicket)
                    })]
                })]
            }), e.jsxs("div", {
                className: "winner-title",
                children: [e.jsx(b, {
                    name: "Favorites1"
                }), e.jsx("span", {
                    children: s("Winner List")
                }), e.jsx(b, {
                    name: "Favorites1"
                })]
            }), e.jsxs("div", {
                className: "result-table-wrap",
                children: [e.jsxs("div", {
                    className: "result-table-head",
                    children: [e.jsx("div", {
                        className: "td tdl",
                        children: "No."
                    }), e.jsx("div", {
                        className: "td tdw",
                        children: s("Winner Name")
                    }), e.jsx("div", {
                        className: "td tdn",
                        children: s("Ticket Numbers")
                    }), e.jsx("div", {
                        className: "td tdp",
                        children: s("Prize")
                    })]
                }), i.roundLoading ? e.jsx(K, {}) : n.length <= 0 ? e.jsx(U, {}) : l.map((r, o) => e.jsxs("div", {
                    className: "result-tr",
                    children: [e.jsx("div", {
                        className: d("td tdl", o === 0 && "sp"),
                        children: `No. ${r.ranking}`
                    }), e.jsx("div", {
                        className: "td tdw",
                        children: e.jsx(_.UserInfo, {
                            userId: r.userId,
                            showName: !0,
                            name: r.userName
                        })
                    }), e.jsx("div", {
                        className: "td tdn",
                        children: e.jsx(J, {
                            ticketNumber: r.number,
                            ticketStatus: k.WIN
                        })
                    }), e.jsx("div", {
                        className: d("td tdp", o === 0 && "spg"),
                        children: e.jsx("span", {
                            className: "g",
                            children: `+ ${t.amount2localStr(new g(r.winning))}`
                        })
                    })]
                }, "table-item-" + o)), l.length > 0 && e.jsx("div", {
                    className: "result-pagination",
                    children: e.jsx(Y, {
                        page: a.page,
                        total: a.total,
                        limit: a.pageSize,
                        onChange: r => R(i.round, r, 20)
                    })
                })]
            })]
        })
    }),
    Je = "rv5io11",
    Ve = c.memo(function() {
        const {
            t: s
        } = u(), [t, i] = c.useState(0), a = ue(), n = x().periodTicketCount, l = a.login ? t === 0 : !1, r = a.login ? t === 1 : !0;
        return e.jsxs("div", {
            className: d(Xe, "pagetab-wrap"),
            children: [e.jsx("div", {
                className: "page-tabs",
                children: e.jsxs("div", {
                    className: "tab-btns",
                    children: [a.login && e.jsx("button", {
                        className: l ? "active" : "",
                        onClick: () => i(0),
                        children: `${s("My Tickets")}${n>0?" ("+n+")":""}`
                    }), e.jsx("button", {
                        className: r ? "active" : "",
                        onClick: () => !r && i(1),
                        children: s("Results")
                    })]
                })
            }), e.jsxs("div", {
                className: "tab-item-page-wrap",
                children: [t === 0 ? a.login ? e.jsx(Ge, {}) : e.jsx(V, {}) : null, a.login && t === 1 && e.jsx(V, {})]
            })]
        })
    }),
    Xe = "p16v9nw8",
    es = c.memo(function() {
        return c.useEffect(() => {
            m.initFn()
        }, []), e.jsxs(e.Fragment, {
            children: [e.jsx(Ie, {}), e.jsxs("div", {
                className: d(ss, "page-max-width-wrap"),
                children: [e.jsx(We, {}), e.jsx(Ce, {}), e.jsx(Ve, {}), e.jsx(Ue, {}), e.jsx(Re, {})]
            })]
        })
    }),
    ss = "wvtvi10",
    ts = [{
        path: "daily-contest",
        element: e.jsx(je, {})
    }, {
        path: "weekly-raffle",
        element: e.jsx(es, {})
    }],
    is = z.memo(function() {
        const {
            routeParams: s
        } = pe(), t = xe(), i = s["*"], a = ts.find(l => l.path === i), n = a ? a.element : null;
        return c.useEffect(() => {
            n || t("/promotion")
        }, []), e.jsx(e.Fragment, {
            children: n
        })
    });
export {
    is as Page
};