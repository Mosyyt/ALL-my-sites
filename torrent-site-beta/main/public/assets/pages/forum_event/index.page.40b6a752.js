var z = Object.defineProperty;
var S = Object.getOwnPropertySymbols;
var J = Object.prototype.hasOwnProperty,
    K = Object.prototype.propertyIsEnumerable;
var y = (t, o, a) => o in t ? z(t, o, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : t[o] = a,
    D = (t, o) => {
        for (var a in o || (o = {})) J.call(o, a) && y(t, a, o[a]);
        if (S)
            for (var a of S(o)) K.call(o, a) && y(t, a, o[a]);
        return t
    };
import {
    j as e
} from "../../chunk-a4af42e8.js";
import {
    i as Q
} from "../../chunk-b894b9de.js";
import {
    r as p,
    R as V
} from "../../chunk-73e80d68.js";
import {
    c as I
} from "../../chunk-5bcb444f.js";
import {
    ev as $,
    ct as X,
    e3 as L,
    du as E,
    e5 as q,
    en as Z,
    ed as ee,
    dL as se,
    eg as te,
    eq as B,
    dl as ne,
    ds as C,
    dy as T,
    cT as ie,
    a as M,
    cJ as ae,
    cM as j,
    cl as re
} from "../../chunk-b53b00e3.js";
import "../../chunk-357b411e.js";
import "../../chunk-27d137a6.js";
import "../../chunk-03c302ce.js";
import "../../chunk-0e1ef679.js";
import "../../chunk-cf010ec4.js";
import "../../chunk-5fced113.js";
import "../../chunk-0e835458.js";
import "../../chunk-654ef298.js";
import "../../chunk-35f3c0e2.js";
import "../../chunk-c23b3c52.js";
import "../../chunk-e570733e.js";
import "../../chunk-68de7933.js";
import "../../chunk-07977b38.js";
import "../../chunk-47df8c47.js";
import "../../chunk-3dc03e47.js";
import "../../chunk-e20af49b.js";
import "../../chunk-6e6e4b85.js";
import "../../chunk-b8efc996.js";
import "../../chunk-000ed202.js";
import "../../chunk-78c5b721.js";
const g = function(t) {
        return t === 0 ? "00" : t > 9 ? String(t) : "0" + t
    },
    oe = p.memo(function({
        endTime: t,
        onEnd: o
    }) {
        const {
            t: a
        } = $();
        return e.jsx(X, {
            endTime: t,
            onEnd: o,
            children: ({
                days: l,
                hours: c,
                minutes: m,
                seconds: d
            }) => e.jsxs("div", {
                className: I("time-down active-time-down", ce),
                children: [e.jsxs("div", {
                    className: "days",
                    children: [e.jsx(N, {
                        currStep: l,
                        totalStep: 1,
                        stroke: "#5BC729"
                    }), e.jsx("div", {
                        className: "time-num",
                        children: g(l)
                    }), e.jsx("div", {
                        className: "time-text",
                        children: a("Days")
                    })]
                }), e.jsxs("div", {
                    className: "hours",
                    children: [e.jsx(N, {
                        currStep: c,
                        totalStep: 24,
                        stroke: "#FFD964"
                    }), e.jsx("div", {
                        className: "time-num",
                        children: g(c)
                    }), e.jsx("div", {
                        className: "time-text",
                        children: a("Hours")
                    })]
                }), e.jsxs("div", {
                    className: "minutes",
                    children: [e.jsx(N, {
                        currStep: m,
                        totalStep: 60,
                        stroke: "#5BC729"
                    }), e.jsx("div", {
                        className: "time-num",
                        children: g(m)
                    }), e.jsx("div", {
                        className: "time-text",
                        children: a("Minutes")
                    })]
                }), e.jsxs("div", {
                    className: "seconds",
                    children: [e.jsx(N, {
                        currStep: d,
                        totalStep: 60,
                        stroke: "#FFD964"
                    }), e.jsx("div", {
                        className: "time-num",
                        children: g(d)
                    }), e.jsx("div", {
                        className: "time-text",
                        children: a("Seconds")
                    })]
                })]
            })
        })
    }),
    N = V.memo(function({
        currStep: t,
        totalStep: o,
        stroke: a
    }) {
        const l = L(),
            c = p.useRef(null);
        return p.useEffect(() => {
            if (c.current) {
                var m = t / o,
                    d = Math.PI * 2 * 56;
                c.current.setAttribute("stroke-dasharray", d * m + " " + d * (1 - m))
            }
        }, [t, o]), e.jsxs("svg", {
            className: "circle-down-wrap",
            viewBox: "0,0,116,116",
            children: [e.jsx("circle", {
                cx: 58,
                cy: 58,
                r: 56,
                strokeWidth: 4,
                stroke: l ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.5)",
                fill: "none"
            }), e.jsx("circle", {
                cx: 58,
                cy: 58,
                r: 56,
                ref: c,
                strokeWidth: 4,
                stroke: a,
                fill: "none",
                transform: "matrix(0,-1,1,0,0,116)",
                strokeDasharray: "1069 0"
            })]
        })
    }),
    ce = "s1d9do6r";

function le(t) {
    return E.post("/activity/forum-event/submit/", D({}, t))
}

function me(t) {
    return E.get(`/activity/forum-event/get/${t}/`)
}
const de = p.memo(function({
    eventBgImg: t,
    desc: o,
    url: a
}) {
    const l = q(),
        [c, m] = p.useState(l ? "1.5" : "2"),
        d = Z(f => {
            if (!l) {
                const x = (f.width / 1326 * 1.7).toFixed(2);
                m(x)
            }
        }, 500);
    return e.jsxs("div", {
        className: "banner",
        onClick: () => {
            a && window.open(a)
        },
        ref: d,
        children: [e.jsx("img", {
            src: t,
            alt: ""
        }), e.jsx("div", {
            className: "desc-wrap",
            children: e.jsx("div", {
                className: "desc",
                dangerouslySetInnerHTML: {
                    __html: o.toUpperCase()
                }
            })
        })]
    })
});

function ue() {
    const {
        t
    } = $(), o = ee(), a = se(), l = q(), c = p.useRef(0), m = a.login, {
        lang: d,
        routeParams: f
    } = te(), x = f.eventId, F = L(), [i, h] = B({
        eventName: "",
        eventNameEncoded: "",
        slogan: "",
        questions: [],
        startTime: 0,
        endTime: 0,
        link: "",
        loading: !0,
        btnLoading: !1,
        infoTypes: [],
        betId: "",
        betLink: "",
        focusUrl: !1,
        eventStatus: 0,
        count: 0,
        description: "",
        bgImgDark: "",
        participants: [],
        url: ""
    }), [b, P] = B({
        day: "00",
        hour: "00",
        mins: "00"
    });
    p.useEffect(() => {
        ne.initData.then(() => {
            if (a.login) me(x).then(s => {
                let n = [];
                s.questions && (n = s.questions.map(u => (u.value = "", u)));
                let r = W(s.startTime, s.endTime);
                if (r === 0) {
                    let u = Math.floor((s.startTime - new Date().getTime()) / 864e5),
                        k = Math.floor((s.startTime - new Date().getTime()) / (1e3 * 3600) % 24),
                        w = Math.floor((s.startTime - new Date().getTime()) / (1e3 * 60) % 60);
                    P({
                        day: `0${u.toString()}`.slice(-2),
                        hour: `0${k.toString()}`.slice(-2),
                        mins: `0${w.toString()}`.slice(-2)
                    })
                }
                h({
                    eventName: s.eventName,
                    eventNameEncoded: s.eventNameEncoded,
                    slogan: s.slogan,
                    questions: n,
                    startTime: s.startTime,
                    endTime: s.endTime,
                    infoTypes: s.infoTypes,
                    loading: !1,
                    eventStatus: r,
                    description: s.description,
                    bgImgDark: s.bgImgDark,
                    count: s.count,
                    participants: s.participants,
                    url: s.descUrl
                })
            }).catch(s => {
                T(s)
            });
            else {
                let s = C.host,
                    n = window.location.protocol;
                location.replace(`${n}//${C.host}/#/login?redirect=${n}//${s}/forum_event/${x}`)
            }
        })
    }, [m, d]);
    const U = () => {
            let s = {};
            h({
                btnLoading: !0
            }), i.questions.map((n, r) => {
                let u = (r + 1).toString();
                return s[u] = n.value || ""
            }), le({
                eventNameEncoded: i.eventNameEncoded,
                betInfo: i.link,
                answerMap: s,
                betLink: i.betLink,
                betId: i.betId
            }).then(n => {
                T("Your request has been submitted. Good luck & Big win!"), setTimeout(() => {
                    window.opener != null && window.opener.postMessage({
                        event: "success",
                        data: "I've joined the forum event; Now it's your turn to win generous rewards from BC.GAME!"
                    }, "*")
                }, 2e3)
            }).catch(n => {
                T(n)
            }).finally(() => {
                h({
                    btnLoading: !1
                })
            })
        },
        W = (s, n) => {
            let r = new Date().getTime();
            if (s > r) return 0;
            if (n < r) return -1;
            if (s < r && n > r) return 1
        },
        H = (s, n) => {
            let r = [...i.questions];
            r[n].value = s, h({
                questions: r
            })
        };
    let R = [s => {
        const n = /^https:\/\//;
        return c.current === 0 || !s || n.test(s) ? null : "Please enter \u201CLink/URL\u201D format"
    }];
    const _ = function() {
            return e.jsxs("div", {
                className: "banner-content",
                children: [e.jsx("div", {
                    className: "banner-wrap",
                    children: e.jsx(de, {
                        url: i.url,
                        eventBgImg: i.bgImgDark,
                        desc: i.description
                    })
                }), e.jsx(oe, {
                    endTime: i.endTime,
                    onEnd: () => {}
                })]
            })
        },
        A = s => {
            if (!s) return "-";
            const n = v => v < 10 && v >= 0 ? "0" + v : v,
                r = new Date(s),
                u = r.getFullYear(),
                k = r.getMonth() + 1,
                w = r.getDate(),
                G = r.getHours(),
                Y = r.getMinutes();
            return `${n(k)}/${n(w)}/${u} ${n(G)}:${n(Y)}`
        };

    function O(s) {
        const n = new Date().getTimezoneOffset() * 6e4,
            r = s + n;
        return A(r)
    }
    return i.loading ? e.jsx(ie, {
        className: "loading"
    }) : e.jsxs("div", {
        className: I(he, l && " mobile"),
        children: [e.jsx("div", {
            className: "logo-top",
            onClick: () => o("/"),
            children: e.jsx("img", {
                alt: "logo",
                src: M.assets(`/logo/logo${F?"":"_w"}.png`)
            })
        }), e.jsxs("div", {
            className: "back-wrap",
            onClick: () => o("/"),
            children: [e.jsx(ae, {
                name: "Arrow"
            }), e.jsx("p", {
                children: t("Back")
            })]
        }), i.eventStatus === 1 && e.jsx(_, {}), e.jsxs("div", {
            className: "content",
            children: [e.jsxs("form", {
                className: "form",
                style: {
                    height: i.loading ? "300px" : ""
                },
                children: [i.eventStatus === 0 && e.jsx("p", {
                    className: "form-title",
                    children: t("Event {{name}} begins in", {
                        name: i.eventName
                    })
                }), i.eventStatus === 1 && e.jsxs("div", {
                    className: "formcontent",
                    children: [e.jsx("div", {
                        className: "form-item",
                        children: e.jsx(j, {
                            label: t("Forum Event Name"),
                            readOnly: !0,
                            className: "form-input",
                            value: i.eventName,
                            onChange: s => {
                                h({
                                    eventName: s
                                })
                            }
                        })
                    }), i.infoTypes.includes("BetLink") && e.jsx("div", {
                        className: "form-item",
                        children: e.jsx(j, {
                            label: t("Bet link"),
                            onBlur: s => {
                                c.current = 1
                            },
                            validates: R,
                            className: "form-input",
                            value: i.betLink,
                            onChange: s => {
                                h({
                                    betLink: s
                                }), c.current = 0
                            }
                        })
                    }), i.infoTypes.includes("BetId") && e.jsx("div", {
                        className: "form-item",
                        children: e.jsx(j, {
                            label: t("Bet ID"),
                            type: "number",
                            className: "sp-number-input form-input",
                            value: i.betId,
                            onChange: s => {
                                h({
                                    betId: s
                                })
                            }
                        })
                    }), i.questions.map((s, n) => e.jsx("div", {
                        className: "form-item",
                        children: e.jsx(j, {
                            label: `${s.question}${s.optional?`(${t("Optional")})`:""}`,
                            required: s.optional,
                            className: "form-input",
                            value: s.value,
                            onChange: r => {
                                H(r, n)
                            }
                        })
                    }, "form-" + n))]
                }), i.eventStatus === 0 && e.jsxs("div", {
                    className: "timecontent",
                    children: [e.jsxs("div", {
                        className: "timeWrap",
                        children: [e.jsx("span", {
                            children: b.day
                        }), e.jsx("span", {
                            className: "ttu",
                            children: t("Days")
                        })]
                    }), e.jsx("div", {
                        className: "timePointer"
                    }), e.jsxs("div", {
                        className: "timeWrap",
                        children: [e.jsx("span", {
                            children: b.hour
                        }), e.jsx("span", {
                            className: "ttu",
                            children: t("Hours")
                        })]
                    }), e.jsx("div", {
                        className: "timePointer"
                    }), e.jsxs("div", {
                        className: "timeWrap",
                        children: [e.jsx("span", {
                            children: b.mins
                        }), e.jsx("span", {
                            className: "ttu",
                            children: t("Minutes")
                        })]
                    })]
                }), i.eventStatus === -1 && e.jsxs("div", {
                    className: "ended",
                    children: [e.jsx("img", {
                        alt: "alligator",
                        src: M.assets("/common/alligator.png")
                    }), e.jsx("span", {
                        children: t("Event {{name}} was ended.", {
                            name: i.eventName
                        })
                    }), e.jsx("span", {
                        children: t("Thank you!")
                    })]
                }), i.eventStatus === 1 && e.jsx(re, {
                    loading: i.btnLoading,
                    onClick: U,
                    type: "conic",
                    className: "button",
                    children: t("Submit")
                })]
            }), i.eventStatus !== 0 && e.jsxs("div", {
                className: "entries",
                children: [e.jsx("div", {
                    className: "entries-top",
                    children: e.jsx("em", {
                        className: "ttu",
                        children: t("Total entries")
                    })
                }), e.jsxs("div", {
                    className: "entries-content",
                    children: [e.jsx("p", {
                        className: "entries-title",
                        children: t("Latest 10 Participants")
                    }), i.participants.map((s, n) => e.jsxs("div", {
                        className: "entries-item",
                        children: [e.jsxs("p", {
                            children: [" ", n + 1, ". ", s.name]
                        }), e.jsxs("p", {
                            children: ["[", O(s.submitTime), " ", "UTC+0]"]
                        })]
                    }, "entries" + n))]
                })]
            })]
        })]
    })
}
const pe = p.memo(ue),
    he = "c1ac2880";

function xe() {
    return e.jsx(pe, {})
}

function ve({
    children: t
}) {
    return e.jsxs(e.Fragment, {
        children: [t, e.jsx(Q, {})]
    })
}
export {
    ve as Layout, xe as Page
};