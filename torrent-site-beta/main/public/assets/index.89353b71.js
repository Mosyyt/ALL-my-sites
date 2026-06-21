import {
    j as e
} from "./chunk-a4af42e8.js";
import {
    r as p,
    R as L
} from "./chunk-73e80d68.js";
import {
    ez as P,
    dC as T,
    cY as S,
    ev as v,
    dn as V,
    cA as R,
    ds as k,
    cl as h,
    a as r,
    cJ as c,
    cS as $,
    e3 as H,
    eg as D,
    eq as N,
    cT as E,
    ct as A,
    du as U,
    e5 as I,
    dd as M
} from "./chunk-b53b00e3.js";
import {
    c as f
} from "./chunk-5bcb444f.js";
import {
    l as x
} from "./chunk-e570733e.js";
import "./chunk-cf010ec4.js";
import "./chunk-0e835458.js";
const O = P.singlePromise((a, i = !0) => T.push(e.jsx(S, {
    closeable: i,
    className: Z,
    children: e.jsx(K, {
        state: a,
        isPop: !0
    })
}), {
    closeable: !1
}));

function K({
    state: a = "your region",
    isPop: i = !1
}) {
    const {
        t: d
    } = v();
    return p.useEffect(() => {
        V.pause()
    }, []), e.jsxs("div", {
        className: f(G, i ? "" : "s-p"),
        children: [e.jsx(R, {
            type: "ban"
        }), e.jsx("h2", {
            children: d("Sorry! It looks like you\u2019re trying to access {{host}} from a restricted area!", {
                host: k.buildHost
            })
        }), e.jsx("p", {
            className: "desc",
            children: d("As per gaming license norms, we are unable to accept players from {{state}}! Contact {{support}} for further assistance!", {
                state: a,
                support: k.SUPPORT
            })
        }), e.jsxs("div", {
            className: "actions",
            children: [e.jsx(h, {
                onClick: () => r.emit("live_support"),
                children: e.jsx(c, {
                    name: "Support"
                })
            }), e.jsx(h, {
                onClick: () => window.open(`mailto:${k.SUPPORT}`),
                children: e.jsx(c, {
                    name: "Mail"
                })
            })]
        }), e.jsx("div", {
            className: "privacy",
            children: e.jsx($, {
                href: "/help/privacy",
                children: d("Privacy Policy")
            })
        })]
    })
}
const Z = "p32yurc",
    G = "b1esrgz3",
    W = "/assets/gb.75fb177e.png",
    F = "/assets/gb_w.7946e428.png",
    m = "/assets/twitter.db7926b0.png",
    b = "/assets/twitter_w.0c443bb7.png",
    C = "/assets/tg_channel.07dd2d3a.png",
    _ = "/assets/tg.017d8d96.png",
    j = "/assets/ins.5e86ebaf.png",
    w = "/assets/ins_w.a62ce857.png",
    y = "/assets/discord.c9aff9ed.png",
    Q = [{
        url: "https://twitter.com/BCGameOfficial",
        icon: m,
        iconw: b
    }, {
        url: "https://t.me/bcgamewin",
        icon: C
    }, {
        url: "https://t.me/bcgameofficial",
        icon: _
    }, {
        url: "https://www.instagram.com/bcgamecom/",
        icon: j,
        iconw: w
    }, {
        url: "https://discord.com/invite/xqUMQesZQq",
        icon: y
    }],
    J = L.memo(function() {
        const {
            t: a
        } = v(), i = H();
        return e.jsxs("div", {
            className: X,
            children: [e.jsx("img", {
                alt: "logo",
                className: "logo-img",
                src: r.assets(`/logo/logo${i?"":"_w"}.png`)
            }), e.jsx("p", {
                className: "t",
                children: a("Sorry, {{host}} isn\u2019t available in the United Kingdom", {
                    host: k.buildHost
                })
            }), e.jsx("img", {
                alt: "gb-img",
                className: "gb-img",
                src: i ? W : F
            }), e.jsx("p", {
                className: "d",
                children: a("Due to our gaming license, {{host}} is unavailable in your country, however we\u2019re pleased to offer you an alternative at bcgame.uk", {
                    host: k.buildHost
                })
            }), e.jsx(h, {
                type: "conic",
                className: "take-btn",
                onClick: () => {
                    window.location.href = "https://bcgame.uk/"
                },
                children: a("Take me to bcgame.uk")
            }), e.jsx("div", {
                className: "links",
                children: Q.map((d, l) => e.jsx("a", {
                    href: d.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: e.jsx("img", {
                        src: !i && d.iconw ? d.iconw : d.icon,
                        alt: ""
                    })
                }, "links-" + l))
            })]
        })
    }),
    Y = P.singlePromise(() => T.push(e.jsx(S, {
        className: ee,
        children: e.jsx(J, {})
    }), {
        closeable: !1
    })),
    X = "gvt663k",
    ee = "pft9xpt",
    ae = "/assets/line.97546b7c.png",
    se = "/assets/line.97546b7c.png";

function ne(a) {
    return a === "ja" ? {
        title: "\u79C1\u305F\u3061\u306E\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306B\u53C2\u52A0\u3057\u3066\u304F\u3060\u3055",
        links: [{
            url: "https://twitter.com/BCgameJAPAN",
            icon: m,
            iconw: b
        }, {
            url: "https://t.me/bcgamejapan",
            icon: C
        }, {
            url: "https://t.me/bcgame_japan_official",
            icon: _
        }, {
            url: "https://www.instagram.com/bcgamecom/",
            icon: j,
            iconw: w
        }, {
            url: "https://discord.com/invite/xqUMQesZQq",
            icon: y
        }, {
            url: "https://lin.ee/9Dgxkfe",
            icon: ae,
            iconw: se
        }]
    } : a === "ru" ? {
        title: "\u0421\u0440\u0430\u0437\u0443 \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0442\u0435\u0441\u044C \u043A \u043D\u0430\u0448\u0435\u043C\u0443 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0443",
        links: [{
            url: "https://twitter.com/BCGameOfficial",
            icon: m,
            iconw: b
        }, {
            url: "https://t.me/bcgame_cis",
            icon: C
        }, {
            url: "https://t.me/BCGameRussian",
            icon: _
        }, {
            url: "https://www.instagram.com/bcgamecom/",
            icon: j,
            iconw: w
        }, {
            url: "https://discord.com/invite/xqUMQesZQq",
            icon: y
        }]
    } : a === "mr" || a === "ta" || a === "te" || a === "en-IN" || a === "id" ? {
        title: "\u0939\u092E\u093E\u0930\u0947 \u0938\u092E\u0941\u0926\u093E\u092F \u092E\u0947\u0902 \u0924\u0941\u0930\u0902\u0924 \u0936\u093E\u092E\u093F\u0932 \u0939\u094B \u091C\u093E\u090F\u0902",
        links: [{
            url: "https://twitter.com/BCGameOfficial",
            icon: m,
            iconw: b
        }, {
            url: "https://t.me/bcgame_india",
            icon: C
        }, {
            url: "https://t.me/BCGAME_India_community",
            icon: _
        }, {
            url: "https://www.instagram.com/bcgamecom/",
            icon: j,
            iconw: w
        }, {
            url: "https://discord.com/invite/xqUMQesZQq",
            icon: y
        }]
    } : {
        title: "Join Us Now",
        links: [{
            url: "https://twitter.com/BCGameOfficial",
            icon: m,
            iconw: b
        }, {
            url: "https://t.me/bcgamewin",
            icon: C
        }, {
            url: "https://t.me/bcgameofficial",
            icon: _
        }, {
            url: "https://www.instagram.com/bcgamecom/",
            icon: j,
            iconw: w
        }, {
            url: "https://discord.com/invite/xqUMQesZQq",
            icon: y
        }]
    }
}
const ie = p.memo(function() {
        const {
            t: a
        } = v(), i = H(), {
            lang: d
        } = D(), [l, g] = N({
            message: [],
            endTime: 0,
            loading: !0
        }), s = async n => {
            try {
                await U.get("/account/get/"), window.location.reload()
            } catch (o) {
                g(n ? {
                    endTime: o.response.data.endTime || 0,
                    loading: !1
                } : {
                    endTime: o.response.data.endTime || 0
                })
            }
        };
        p.useEffect(() => {
            s(!0);
            const n = setInterval(() => {
                s()
            }, 6e4);
            return () => {
                clearInterval(n)
            }
        }, []);
        const u = ne(d),
            t = n => n < 10 ? "0" + n : n;
        return l.loading ? e.jsx("div", {
            className: te,
            children: e.jsx(E, {})
        }) : e.jsx("div", {
            className: de,
            children: e.jsxs("div", {
                className: "main-area",
                children: [e.jsx("img", {
                    className: "logo",
                    alt: "logo",
                    src: r.assets(`/logo/logo${i?"":"_w"}.png`)
                }), e.jsx(A, {
                    endTime: l.endTime,
                    onEnd: s,
                    children: ({
                        hours: n,
                        minutes: o,
                        seconds: q
                    }) => e.jsxs("p", {
                        className: "common f",
                        children: [a("Site upgrading, launching in"), e.jsxs("span", {
                            className: "t",
                            children: [t(n), ":", t(o), ":", t(q)]
                        }), "."]
                    })
                }), e.jsx("p", {
                    className: "common l",
                    children: a("Thank you for your understanding and patience!")
                }), e.jsxs("p", {
                    className: "common",
                    children: [e.jsx("span", {
                        children: a("While waiting, join our")
                    }), e.jsxs("a", {
                        className: "giveaway",
                        href: "https://giveaway.com/en/9NuHz1NNCyb",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [a("{{amount}} giveaway", {
                            amount: "$1,000"
                        }), "."]
                    })]
                }), e.jsxs("button", {
                    className: "contact",
                    onClick: () => {
                        var n;
                        return (n = x) == null ? void 0 : n.openLiveSupport()
                    },
                    children: [e.jsx(c, {
                        name: "Support"
                    }), e.jsx("span", {
                        children: a("Live Support")
                    })]
                }), e.jsx("p", {
                    className: "add-title",
                    children: u.title
                }), e.jsx("div", {
                    className: "icon-wrap",
                    children: u.links.map((n, o) => e.jsx("a", {
                        href: n.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: e.jsx("img", {
                            src: !i && n.iconw ? n.iconw : n.icon,
                            alt: ""
                        })
                    }, "links-" + o))
                }), e.jsx("img", {
                    className: "update",
                    alt: "update",
                    src: r.assets(`/user/update${i?"":"_w"}.png`)
                })]
            })
        })
    }),
    te = "u1mrp1z7",
    de = "u1q4p113",
    B = {
        en: {
            desc_1: "Live Support",
            desc_2: "Site Upgrading, Launching in",
            desc_3: "We sincerely apologize as we are currently upgrading our system. During the upgrade, we have prepared a <span>$10,000</span> waiting reward for everyone:",
            desc_4: "-  $5,000 giveaway.",
            desc_5: "Click here.",
            desc_6: "-  $5,000 in BC Poker leaderboard rewards.",
            desc_7: "Download BC Poker.",
            desc_8: "Join BC Poker Community",
            desc_9: "Texas Hold'em Event Rules",
            desc_10: "Eligibility: Open exclusively to players who have received an invitation.",
            desc_11: "Account Requirements: Limited to one account per participant (must register using an email address). Accounts with identical IPs or GPS locations are prohibited from joining the same table. The product's beta testing phase lasts for one week, after which beta accounts will be deleted.",
            desc_12: "Club Participation: Seek out the club ID (<span class='w'>201656</span>) or click the lobby's banner to request joining the special <span class='w'>BC POKER</span> official club for this event.",
            desc_13: "Tournament Time: <span class='g'>February 28, 2024, 01:00 - 09:00 (UTC)</span>.",
            desc_14: "Tournament Rules:",
            desc_15: "1.The tournament uses the standard no-limit Texas Hold'em game mode, and players can find a table and start playing at any time. No insurance, no additional dealing after all-in.",
            desc_16: "There are three game levels to choose from:",
            desc_17: "\u2460 2/4 (2) [Small Blind 2, Big Blind 4, Ante 2] blind structure,",
            desc_18: "\u2461 5/10 (5) [Small Blind 5, Big Blind 10, Ante 5] blind structure,",
            desc_19: "\u2462 10/20 (10) [Small Blind 10, Big Blind 20, Ante 10] blind structure.",
            desc_20: "2.Each player starts with 10,000 club points, with no refills allowed mid-tournament. Engaging in or facilitating irregular point circulation outside the official games will lead to immediate disqualification upon discovery.",
            desc_21: "Reward Distribution:",
            desc_22: "1.The total prize pool is $5000 USD, awarded in BCD. As the tournament ends, prizes will be handed out based on point rankings, with a requirement for the top ten winners to have played at least 200 hands.",
            desc_23: "Points Ranking",
            desc_24: "Prize Amount (BCD)",
            desc_25: "Total",
            desc_26: "*After the tournament, rankings will be announced in the club's group chat, keeping all participants in the loop.",
            desc_27: "Wrap it all up"
        },
        ar: {
            desc_1: "\u0627\u0644\u062F\u0639\u0645 \u0627\u0644\u0645\u0628\u0627\u0634\u0631",
            desc_2: "\u062A\u0631\u0642\u064A\u0629 \u0627\u0644\u0645\u0648\u0642\u0639\u060C \u0627\u0644\u0625\u0637\u0644\u0627\u0642 \u0641\u064A",
            desc_3: "\u0646\u0639\u062A\u0630\u0631 \u0628\u0634\u062F\u0629 \u0644\u0623\u0646\u0646\u0627 \u0646\u0642\u0648\u0645 \u062D\u0627\u0644\u064A\u064B\u0627 \u0628\u062A\u0631\u0642\u064A\u0629 \u0646\u0638\u0627\u0645\u0646\u0627. \u0648\u0623\u062B\u0646\u0627\u0621 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u0631\u0642\u064A\u0629\u060C \u0623\u0639\u062F\u062F\u0646\u0627 \u0645\u0643\u0627\u0641\u0623\u0629 \u0627\u0646\u062A\u0638\u0627\u0631 <span>,000 10 \u062F\u0648\u0644\u0627\u0631</span> \u0644\u0644\u062C\u0645\u064A\u0639:",
            desc_4: "- \u0647\u0628\u0629 \u0628\u0642\u064A\u0645\u0629 5,000 \u062F\u0648\u0644\u0627\u0631.",
            desc_5: "\u0627\u0636\u063A\u0637 \u0647\u0646\u0627.",
            desc_6: "- 5,000 \u062F\u0648\u0644\u0627\u0631 \u0645\u0646 \u0645\u0643\u0627\u0641\u0622\u062A \u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u062A\u0635\u062F\u0631\u064A\u0646 \u0641\u064A \u0628\u0648\u0643\u0631 \u0643\u0648\u0644\u0648\u0645\u0628\u064A\u0627 \u0627\u0644\u0628\u0631\u064A\u0637\u0627\u0646\u064A\u0629.",
            desc_7: "\u062A\u0646\u0632\u064A\u0644 \u0628\u0648\u0643\u0631 \u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F.",
            desc_8: "\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0645\u062C\u062A\u0645\u0639 \u0628\u0648\u0643\u0631 \u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F",
            desc_9: "\u0642\u0648\u0627\u0639\u062F \u062D\u062F\u062B \u062A\u0643\u0633\u0627\u0633 \u0647\u0648\u0644\u062F\u0645 \u062A\u0643\u0633\u0627\u0633 \u0647\u0648\u0644\u062F\u0645",
            desc_10: "\u0627\u0644\u0623\u0647\u0644\u064A\u0629: \u0645\u0641\u062A\u0648\u062D\u0629 \u062D\u0635\u0631\u064A\u0627\u064B \u0644\u0644\u0627\u0639\u0628\u064A\u0646 \u0627\u0644\u0630\u064A\u0646 \u062A\u0644\u0642\u0648\u0627 \u062F\u0639\u0648\u0629.",
            desc_11: "\u0645\u062A\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628: \u064A\u0642\u062A\u0635\u0631 \u0639\u0644\u0649 \u062D\u0633\u0627\u0628 \u0648\u0627\u062D\u062F \u0644\u0643\u0644 \u0645\u0634\u0627\u0631\u0643 (\u064A\u062C\u0628 \u0627\u0644\u062A\u0633\u062C\u064A\u0644 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0639\u0646\u0648\u0627\u0646 \u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A). \u064A\u064F\u062D\u0638\u0631 \u0639\u0644\u0649 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0630\u0627\u062A \u0639\u0646\u0627\u0648\u064A\u0646 IP \u0623\u0648 \u0645\u0648\u0627\u0642\u0639 GPS \u0645\u062A\u0637\u0627\u0628\u0642\u0629 \u0627\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0625\u0644\u0649 \u0646\u0641\u0633 \u0627\u0644\u062C\u062F\u0648\u0644. \u062A\u0633\u062A\u0645\u0631 \u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u062A\u062C\u0631\u064A\u0628\u064A \u0644\u0644\u0645\u0646\u062A\u062C \u0644\u0645\u062F\u0629 \u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062D\u062F\u060C \u0648\u0628\u0639\u062F \u0630\u0644\u0643 \u0633\u064A\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u062A\u062C\u0631\u064A\u0628\u064A\u0629.",
            desc_12: "\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0646\u0627\u062F\u064A: \u0627\u0628\u062D\u062B \u0639\u0646 \u0645\u0639\u0631\u0651\u0641 \u0627\u0644\u0646\u0627\u062F\u064A (<span class='w'>201656 201656</span>) \u0623\u0648 \u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0644\u0627\u0641\u062A\u0629 \u0627\u0644\u0631\u062F\u0647\u0629 \u0644\u0637\u0644\u0628 \u0627\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0625\u0644\u0649 \u0627\u0644\u0646\u0627\u062F\u064A \u0627\u0644\u0631\u0633\u0645\u064A \u0627\u0644\u062E\u0627\u0635 <span class='w'>BC POKER</span> \u0644\u0647\u0630\u0627 \u0627\u0644\u062D\u062F\u062B.",
            desc_13: "\u0648\u0642\u062A \u0627\u0644\u0628\u0637\u0648\u0644\u0629 <span class='g'>28 \u0641\u0628\u0631\u0627\u064A\u0631 2024\u060C 28 \u0641\u0628\u0631\u0627\u064A\u0631 2024\u060C 01:00 - 09:00 (\u0628\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0639\u0627\u0644\u0645\u064A \u0627\u0644\u0645\u0646\u0633\u0642)</span>.",
            desc_14: "\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0628\u0637\u0648\u0644\u0629:",
            desc_15: "1- \u062A\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0642\u064A\u0627\u0633\u064A \u0644\u0644\u0639\u0628\u0629 \u062A\u0643\u0633\u0627\u0633 \u0647\u0648\u0644\u062F\u0645 \u0628\u062F\u0648\u0646 \u062D\u062F\u0648\u062F\u060C \u0648\u064A\u0645\u0643\u0646 \u0644\u0644\u0627\u0639\u0628\u064A\u0646 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0637\u0627\u0648\u0644\u0629 \u0648\u0628\u062F\u0621 \u0627\u0644\u0644\u0639\u0628 \u0641\u064A \u0623\u064A \u0648\u0642\u062A. \u0644\u0627 \u064A\u0648\u062C\u062F \u062A\u0623\u0645\u064A\u0646\u060C \u0648\u0644\u0627 \u064A\u0648\u062C\u062F \u062A\u0639\u0627\u0645\u0644 \u0625\u0636\u0627\u0641\u064A \u0628\u0639\u062F \u0627\u0644\u0643\u0644 \u0641\u064A \u0627\u0644\u0643\u0644.",
            desc_16: "\u0647\u0646\u0627\u0643 \u062B\u0644\u0627\u062B\u0629 \u0645\u0633\u062A\u0648\u064A\u0627\u062A \u0644\u0644\u0639\u0628\u0629 \u0644\u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0646 \u0628\u064A\u0646\u0647\u0627:",
            desc_17: "\u2460 2/4 (2) [\u0627\u0644\u0645\u0643\u0641\u0648\u0641\u064A\u0646 \u0627\u0644\u0635\u063A\u0627\u0631 2\u060C \u0627\u0644\u0645\u0643\u0641\u0648\u0641\u064A\u0646 \u0627\u0644\u0643\u0628\u0627\u0631 4\u060C \u0627\u0644\u0631\u0647\u0627\u0646 \u0627\u0644\u0645\u0633\u0628\u0642 2] \u0647\u064A\u0643\u0644 \u0627\u0644\u0645\u0643\u0641\u0648\u0641\u064A\u0646,",
            desc_18: "\u2461 5/10 (5) [\u0627\u0644\u0639\u0645\u064A\u0627\u0621 \u0627\u0644\u0635\u063A\u064A\u0631\u0629 5\u060C \u0627\u0644\u0639\u0645\u064A\u0627\u0621 \u0627\u0644\u0643\u0628\u064A\u0631\u0629 10\u060C \u0627\u0644\u0631\u0647\u0627\u0646 \u0627\u0644\u0645\u0633\u0628\u0642 5] \u0647\u064A\u0643\u0644 \u0627\u0644\u0645\u0643\u0641\u0648\u0641\u064A\u0646,",
            desc_19: "\u2462 10/20 (10) [\u0627\u0644\u0639\u0645\u064A\u0627\u0621 \u0627\u0644\u0635\u063A\u064A\u0631\u0629 10\u060C \u0627\u0644\u0639\u0645\u064A\u0627\u0621 \u0627\u0644\u0643\u0628\u064A\u0631\u0629 20\u060C \u0627\u0644\u0631\u0647\u0627\u0646 \u0627\u0644\u0645\u0633\u0628\u0642 10] \u0647\u064A\u0643\u0644 \u0627\u0644\u0645\u0643\u0641\u0648\u0641\u064A\u0646.",
            desc_20: "2- \u064A\u0628\u062F\u0623 \u0643\u0644 \u0644\u0627\u0639\u0628 \u0628\u0640 10,000 \u0646\u0642\u0637\u0629 \u0641\u064A \u0627\u0644\u0646\u0627\u062F\u064A\u060C \u0648\u0644\u0627 \u064A\u064F\u0633\u0645\u062D \u0628\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u0628\u0626\u062A\u0647\u0627 \u0641\u064A \u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0628\u0637\u0648\u0644\u0629. \u0627\u0644\u0627\u0646\u062E\u0631\u0627\u0637 \u0641\u064A \u0623\u0648 \u062A\u0633\u0647\u064A\u0644 \u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0646\u0642\u0627\u0637 \u0628\u0634\u0643\u0644 \u063A\u064A\u0631 \u0645\u0646\u062A\u0638\u0645 \u062E\u0627\u0631\u062C \u0627\u0644\u0623\u0644\u0639\u0627\u0628 \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0633\u064A\u0624\u062F\u064A \u0625\u0644\u0649 \u0627\u0644\u0627\u0633\u062A\u0628\u0639\u0627\u062F \u0627\u0644\u0641\u0648\u0631\u064A \u0639\u0646\u062F \u0627\u0643\u062A\u0634\u0627\u0641\u0647.",
            desc_21: "\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0645\u0643\u0627\u0641\u0622\u062A:",
            desc_22: "1- \u064A\u0628\u0644\u063A \u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u062C\u0648\u0627\u0626\u0632 5000 \u062F\u0648\u0644\u0627\u0631 \u0623\u0645\u0631\u064A\u0643\u064A\u060C \u062A\u064F\u0645\u0646\u062D \u0628\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A. \u0645\u0639 \u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u0628\u0637\u0648\u0644\u0629\u060C \u0633\u064A\u062A\u0645 \u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u062C\u0648\u0627\u0626\u0632 \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0646\u0642\u0627\u0637\u060C \u0645\u0639 \u0627\u0634\u062A\u0631\u0627\u0637 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0641\u0627\u0626\u0632\u0648\u0646 \u0627\u0644\u0639\u0634\u0631\u0629 \u0627\u0644\u0623\u0648\u0627\u0626\u0644 \u0642\u062F \u0644\u0639\u0628\u0648\u0627 200 \u062A\u0648\u0632\u064A\u0639 \u0648\u0631\u0642 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644.",
            desc_23: "\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0646\u0642\u0627\u0637",
            desc_24: "\u0645\u0628\u0644\u063A \u0627\u0644\u062C\u0627\u0626\u0632\u0629 (BCD)",
            desc_25: "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A",
            desc_26: "*\u0628\u0639\u062F \u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u0628\u0637\u0648\u0644\u0629\u060C \u0633\u064A\u062A\u0645 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0639\u0646 \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0641\u064A \u0627\u0644\u062F\u0631\u062F\u0634\u0629 \u0627\u0644\u062C\u0645\u0627\u0639\u064A\u0629 \u0644\u0644\u0646\u0627\u062F\u064A\u060C \u0644\u0625\u0628\u0642\u0627\u0621 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646 \u0639\u0644\u0649 \u0627\u0637\u0644\u0627\u0639.",
            desc_27: "\u0627\u062E\u062A\u062A\u0645 \u0643\u0644 \u0634\u064A\u0621"
        },
        de: {
            desc_1: "Live-Unterst\xFCtzung",
            desc_2: "Website-Aktualisierung, Start in",
            desc_3: "Wir bitten vielmals um Entschuldigung, da wir derzeit unser System aktualisieren. W\xE4hrend des Upgrades haben wir eine <span>$10.000</span> Wartebelohnung f\xFCr alle vorbereitet:",
            desc_4: "- 5.000 $ Werbegeschenk.",
            desc_5: "Klicken Sie hier.",
            desc_6: "- $5.000 in BC Poker-Ranglisten-Pr\xE4mien.",
            desc_7: "BC Poker herunterladen.",
            desc_8: "BC Poker Gemeinschaft beitreten",
            desc_9: "Texas Hold'em Turnierregeln",
            desc_10: "Teilnahmeberechtigung: Teilnahmeberechtigt sind ausschlie\xDFlich Spieler, die eine Einladung erhalten haben.",
            desc_11: "Kontoanforderungen: Begrenzt auf ein Konto pro Teilnehmer (muss sich mit einer E-Mail-Adresse anmelden). Konten mit identischen IPs oder GPS-Standorten d\xFCrfen nicht am selben Tisch teilnehmen. Die Beta-Testphase des Produkts dauert eine Woche, danach werden die Beta-Konten gel\xF6scht.",
            desc_12: "Club-Teilnahme: Suchen Sie nach der Club-ID (<span class='w'>201656</span>) oder klicken Sie auf das Banner in der Lobby, um den Beitritt zu dem speziellen <span class='w'>BC POKER</span> offiziellen Club f\xFCr diese Veranstaltung zu beantragen.",
            desc_13: "Zeit des Turniers: <span class='g'>28. Februar 2024, 01:00 - 09:00 (UTC)</span>.",
            desc_14: "Turnierregeln:",
            desc_15: `(1) Das Turnier wird im Standardmodus "No Limit Texas Hold'em" gespielt, und die Spieler k\xF6nnen jederzeit einen Tisch finden und mit dem Spiel beginnen. Keine Versicherung, kein zus\xE4tzliches Geben nach All-in.`,
            desc_16: "Es gibt drei Spielstufen, aus denen Sie w\xE4hlen k\xF6nnen:",
            desc_17: "\u2460 2/4 (2) [Small Blind 2, Big Blind 4, Ante 2] Blindstruktur,",
            desc_18: "\u2461 5/10 (5) [Small Blind 5, Big Blind 10, Ante 5] Blindstruktur,",
            desc_19: "\u2462 10/20 (10) [Small Blind 10, Big Blind 20, Ante 10] Blindstruktur.",
            desc_20: "2. jeder Spieler beginnt mit 10.000 Clubpunkten, die w\xE4hrend des Turniers nicht aufgef\xFCllt werden d\xFCrfen. Unregelm\xE4\xDFiger Punkteumlauf au\xDFerhalb der offiziellen Spiele f\xFChrt bei Entdeckung zur sofortigen Disqualifikation.",
            desc_21: "Verteilung von Belohnungen:",
            desc_22: "Der Gesamtpreispool betr\xE4gt $5000 USD und wird in BCD vergeben. Am Ende des Turniers werden die Preise auf der Grundlage der Punkte-Rangliste vergeben, wobei die zehn besten Gewinner mindestens 200 H\xE4nde gespielt haben m\xFCssen.",
            desc_23: "Punkte Rangliste",
            desc_24: "Preisbetrag (BCD)",
            desc_25: "Insgesamt",
            desc_26: "*Nach dem Turnier werden die Platzierungen im Gruppenchat des Clubs bekannt gegeben, damit alle Teilnehmer auf dem Laufenden bleiben.",
            desc_27: "Alles einpacken"
        },
        es: {
            desc_1: "Asistencia en directo",
            desc_2: "Actualizaci\xF3n del sitio, lanzamiento en",
            desc_3: "Le pedimos disculpas, ya que estamos actualizando nuestro sistema. <span>Durante la actualizaci\xF3n, hemos preparado una recompensa de espera de 10.000 d\xF3lares</span> para todos:",
            desc_4: "- Regalo de 5.000 d\xF3lares.",
            desc_5: "Haga clic aqu\xED.",
            desc_6: "- 5.000 $ en premios de la clasificaci\xF3n de BC Poker.",
            desc_7: "Descargar BC Poker.",
            desc_8: "\xDAnete a la comunidad de BC Poker",
            desc_9: "Reglas del evento Texas Hold'em",
            desc_10: "Elegibilidad: Abierto exclusivamente a jugadores que hayan recibido una invitaci\xF3n.",
            desc_11: "Requisitos de la cuenta: Limitado a una cuenta por participante (debe registrarse utilizando una direcci\xF3n de correo electr\xF3nico). Las cuentas con IPs o localizaciones GPS id\xE9nticas tienen prohibido unirse a la misma mesa. La fase de pruebas beta del producto dura una semana, tras la cual se eliminar\xE1n las cuentas beta.",
            desc_12: "Participaci\xF3n del club: Busca el ID del club (<span class='w'>201656</span>) o haz clic en el banner del lobby para solicitar unirte al club oficial especial <span class='w'>BC POKER</span> para este evento.",
            desc_13: "Hora del torneo: <span class='g'>28 de febrero de 2024, 01:00 - 09:00 (UTC)</span>.",
            desc_14: "Reglas del torneo:",
            desc_15: "1.El torneo utiliza el modo de juego est\xE1ndar Texas Hold'em sin l\xEDmite, y los jugadores pueden encontrar una mesa y empezar a jugar en cualquier momento. No hay seguro, no hay reparto adicional despu\xE9s de all-in.",
            desc_16: "Hay tres niveles de juego para elegir:",
            desc_17: "\u2460 2/4 (2) [ciega peque\xF1a 2, ciega grande 4, ante 2] estructura de ciegas,",
            desc_18: "\u2461 5/10 (5) [ciega peque\xF1a 5, ciega grande 10, ante 5] estructura de ciegas,",
            desc_19: "\u2462 10/20 (10) [ciega peque\xF1a 10, ciega grande 20, ante 10] estructura de ciegas.",
            desc_20: "2.Cada jugador comienza con 10.000 puntos de club, sin que se permitan recargas a mitad del torneo. Participar o facilitar la circulaci\xF3n irregular de puntos fuera de los juegos oficiales conllevar\xE1 la descalificaci\xF3n inmediata en cuanto se descubra.",
            desc_21: "Distribuci\xF3n de recompensas:",
            desc_22: "1.La bolsa total de premios es de 5.000 USD, otorgados en BCD. Al finalizar el torneo, los premios se repartir\xE1n en funci\xF3n de la clasificaci\xF3n por puntos, con el requisito de que los diez primeros ganadores hayan jugado al menos 200 manos.",
            desc_23: "Clasificaci\xF3n por puntos",
            desc_24: "Importe del premio (BCD)",
            desc_25: "Total",
            desc_26: "*Tras el torneo, las clasificaciones se anunciar\xE1n en el chat de grupo del club, manteniendo informados a todos los participantes.",
            desc_27: "Envu\xE9lvalo todo"
        },
        fi: {
            desc_1: "Live-tuki",
            desc_2: "Sivuston p\xE4ivitt\xE4minen, k\xE4ynnist\xE4minen vuonna",
            desc_3: "Pyyd\xE4mme vilpitt\xF6m\xE4sti anteeksi, sill\xE4 p\xE4ivit\xE4mme parhaillaan j\xE4rjestelm\xE4\xE4mme. P\xE4ivityksen aikana olemme valmistelleet <span>10 000 dollaria</span> odottavan palkkion kaikille:",
            desc_4: "- 5000 dollarin arvoinen lahja.",
            desc_5: "Klikkaa t\xE4st\xE4.",
            desc_6: "- 5000 dollaria BC Pokerin tulostaulukon palkintoja.",
            desc_7: "Lataa BC Poker.",
            desc_8: "Liity BC Poker-yhteis\xF6\xF6n",
            desc_9: "Texas Hold'em -tapahtuman s\xE4\xE4nn\xF6t",
            desc_10: "Tukikelpoisuus: Avoinna ainoastaan pelaajille, jotka ovat saaneet kutsun.",
            desc_11: "Tilivaatimukset: Osallistujaa kohti saa olla vain yksi tili (rekister\xF6itymisen on tapahduttava s\xE4hk\xF6postiosoitteella). Tilit, joilla on identtiset IP-osoitteet tai GPS-sijainnit, eiv\xE4t saa osallistua samaan p\xF6yt\xE4\xE4n. Tuotteen beta-testausvaihe kest\xE4\xE4 yhden viikon, jonka j\xE4lkeen beta-tilit poistetaan.",
            desc_12: "Kerhon osallistuminen: Etsi klubin tunnus (<span class='w'>201656</span>) tai klikkaa aulan banneria pyyt\xE4\xE4ksesi liittymist\xE4 erityiseen <span class='w'>BC POKER</span> viralliseen klubiin t\xE4t\xE4 tapahtumaa varten.",
            desc_13: "Turnauksen aika: <span class='g'>(UTC)</span>.",
            desc_14: "Turnauksen s\xE4\xE4nn\xF6t:",
            desc_15: "1.Turnauksessa k\xE4ytet\xE4\xE4n tavallista no-limit Texas Hold'em -pelitilaa, ja pelaajat voivat l\xF6yt\xE4\xE4 p\xF6yd\xE4n ja aloittaa pelaamisen milloin tahansa. Ei vakuutusta, ei ylim\xE4\xE4r\xE4ist\xE4 jakamista all-inin j\xE4lkeen.",
            desc_16: "Valittavana on kolme pelitasoa:",
            desc_17: "\u2460 2/4 (2) [Small Blind 2, Big Blind 4, Ante 2] blindirakenne,",
            desc_18: "\u2461 5/10 (5) [Small Blind 5, Big Blind 10, Ante 5] blindirakenne,",
            desc_19: "\u2462 10/20 (10) [Small Blind 10, Big Blind 20, Ante 10] blindien rakenne.",
            desc_20: "2.Kukin pelaaja aloittaa 10 000 klubipisteell\xE4, joita ei saa t\xE4ydent\xE4\xE4 kesken turnauksen. Virallisten pelien ulkopuolella tapahtuva ep\xE4s\xE4\xE4nn\xF6llinen pisteiden kierto tai sen helpottaminen johtaa v\xE4litt\xF6m\xE4\xE4n hylk\xE4\xE4miseen, kun se havaitaan.",
            desc_21: "Palkkioiden jakaminen:",
            desc_22: "1.Kokonaispalkintopotti on 5000 USD, joka my\xF6nnet\xE4\xE4n BCD:n\xE4. Turnauksen p\xE4\xE4tytty\xE4 palkinnot jaetaan pisteiden perusteella, ja kymmenen parhaan voittajan on pelattava v\xE4hint\xE4\xE4n 200 k\xE4tt\xE4.",
            desc_23: "Pisteet Ranking",
            desc_24: "Palkinnon m\xE4\xE4r\xE4 (BCD)",
            desc_25: "Yhteens\xE4",
            desc_26: "*Turnauksen j\xE4lkeen sijoitukset ilmoitetaan seuran ryhm\xE4chatissa, jolloin kaikki osallistujat pysyv\xE4t ajan tasalla.",
            desc_27: "K\xE4\xE4ri kaikki yl\xF6s"
        },
        fr: {
            desc_1: "Assistance en ligne",
            desc_2: "Mise \xE0 jour du site, lancement en",
            desc_3: "Nous nous excusons sinc\xE8rement car nous sommes en train de mettre \xE0 jour notre syst\xE8me. Pendant la mise \xE0 jour, nous avons pr\xE9par\xE9 une r\xE9compense d'attente de <span>10 000 $</span> pour tout le monde :",
            desc_4: "- 5 000 $ \xE0 gagner.",
            desc_5: "Cliquez ici.",
            desc_6: "- 5 000 $ de r\xE9compenses au classement de BC Poker.",
            desc_7: "T\xE9l\xE9charger BC Poker.",
            desc_8: "Rejoindre la communaut\xE9 BC Poker",
            desc_9: "R\xE8gles de l'\xE9v\xE9nement Texas Hold'em",
            desc_10: "Admissibilit\xE9 : Ouvert exclusivement aux joueurs ayant re\xE7u une invitation.",
            desc_11: "Exigences en mati\xE8re de compte : Limit\xE9 \xE0 un compte par participant (l'inscription doit se faire \xE0 l'aide d'une adresse \xE9lectronique). Les comptes ayant des adresses IP ou des positions GPS identiques ne peuvent pas rejoindre la m\xEAme table. La phase de test b\xEAta du produit dure une semaine, apr\xE8s quoi les comptes b\xEAta seront supprim\xE9s.",
            desc_12: "Participation au club : Cherchez l'ID du club (<span class='w'>201656</span>) ou cliquez sur la banni\xE8re du lobby pour demander \xE0 rejoindre le club officiel sp\xE9cial <span class='w'>BC POKER</span> pour cet \xE9v\xE9nement.",
            desc_13: "Heure du tournoi : <span class='g'>28 f\xE9vrier 2024, 01:00 - 09:00 (UTC)</span>.",
            desc_14: "R\xE8gles du tournoi :",
            desc_15: "1) Le tournoi utilise le mode de jeu standard du Texas Hold'em sans limite, et les joueurs peuvent trouver une table et commencer \xE0 jouer \xE0 tout moment. Pas d'assurance, pas de distribution suppl\xE9mentaire apr\xE8s un all-in.",
            desc_16: "Trois niveaux de jeu sont propos\xE9s :",
            desc_17: "\u2460 2/4 (2) [Petite Blind 2, Grande Blind 4, Ante 2] structure des blinds,",
            desc_18: "\u2461 5/10 (5) [Petite Blind 5, Grande Blind 10, Ante 5] structure des blinds,",
            desc_19: "\u2462 10/20 (10) [Petite Blind 10, Grande Blind 20, Ante 10] structure des blinds.",
            desc_20: "2. chaque joueur commence avec 10 000 points de club, sans possibilit\xE9 de recharge en cours de tournoi. La participation ou la facilitation d'une circulation irr\xE9guli\xE8re des points en dehors des jeux officiels entra\xEEnera une disqualification imm\xE9diate d\xE8s qu'elle sera d\xE9couverte.",
            desc_21: "Distribution des r\xE9compenses :",
            desc_22: "1) La cagnotte totale est de 5000 USD, attribu\xE9e en BCD. \xC0 la fin du tournoi, les prix seront distribu\xE9s en fonction du classement par points, les dix premiers gagnants devant avoir jou\xE9 au moins 200 mains.",
            desc_23: "Classement par points",
            desc_24: "Montant du prix (BCD)",
            desc_25: "Total",
            desc_26: "*Apr\xE8s le tournoi, les classements seront annonc\xE9s dans le chat du club, afin que tous les participants soient tenus au courant.",
            desc_27: "Envelopper le tout"
        },
        id: {
            desc_1: "Dukungan Langsung",
            desc_2: "Peningkatan Situs, Peluncuran di",
            desc_3: "Kami mohon maaf karena saat ini kami sedang melakukan peningkatan sistem. Selama peningkatan, kami telah menyiapkan hadiah <span>$ 10.000</span> menunggu untuk semua orang:",
            desc_4: "- Hadiah senilai $5.000.",
            desc_5: "Klik di sini.",
            desc_6: "- Hadiah sebesar $5.000 dalam hadiah papan peringkat BC Poker.",
            desc_7: "Unduh BC Poker.",
            desc_8: "Bergabunglah dengan Komunitas Poker BC",
            desc_9: "Peraturan Acara Texas Hold'em",
            desc_10: "Kelayakan: Terbuka secara eksklusif untuk pemain yang telah menerima undangan.",
            desc_11: "Persyaratan Akun: Terbatas untuk satu akun per peserta (harus mendaftar menggunakan alamat email). Akun dengan IP atau lokasi GPS yang sama dilarang bergabung dalam satu meja. Fase pengujian beta produk berlangsung selama satu minggu, setelah itu akun beta akan dihapus.",
            desc_12: "Partisipasi Klub: Cari ID klub (<span class='w'>201656</span>) atau klik spanduk lobi untuk meminta bergabung dengan klub resmi <span class='w'>BC POKER</span> khusus untuk acara ini.",
            desc_13: "Waktu Turnamen: <span class='g'>28 Februari 2024, 01:00 - 09:00 (UTC)</span>.",
            desc_14: "Peraturan Turnamen:",
            desc_15: "1. Turnamen ini menggunakan mode permainan Texas Hold'em tanpa batas standar, dan pemain dapat menemukan meja dan mulai bermain kapan saja. Tidak ada asuransi, tidak ada transaksi tambahan setelah all-in.",
            desc_16: "Ada tiga level permainan yang bisa dipilih:",
            desc_17: "\u2460 2/4 (2) [Small Blind 2, Big Blind 4, Ante 2] struktur buta,",
            desc_18: "\u2461 5/10 (5) [Small Blind 5, Big Blind 10, Ante 5] struktur buta,",
            desc_19: "\u2462 10/20 (10) [Small Blind 10, Big Blind 20, Ante 10] struktur buta.",
            desc_20: "2. Setiap pemain memulai dengan 10.000 poin klub, tanpa ada pengisian ulang yang diizinkan di tengah turnamen. Terlibat dalam atau memfasilitasi sirkulasi poin yang tidak teratur di luar permainan resmi akan menyebabkan diskualifikasi langsung setelah ditemukan.",
            desc_21: "Distribusi Hadiah:",
            desc_22: "1. Total hadiah yang disediakan adalah $5000 USD, diberikan dalam bentuk BCD. Saat turnamen berakhir, hadiah akan dibagikan berdasarkan peringkat poin, dengan persyaratan untuk sepuluh pemenang teratas telah memainkan setidaknya 200 tangan.",
            desc_23: "Peringkat Poin",
            desc_24: "Jumlah Hadiah (BCD)",
            desc_25: "Total",
            desc_26: "*Setelah turnamen, peringkat akan diumumkan dalam obrolan grup klub, sehingga semua peserta tetap mendapatkan informasi terbaru.",
            desc_27: "Bungkus semuanya"
        },
        it: {
            desc_1: "Assistenza dal vivo",
            desc_2: "Aggiornamento del sito, lancio in",
            desc_3: "Ci scusiamo sinceramente perch\xE9 stiamo aggiornando il nostro sistema. Durante l'aggiornamento, abbiamo preparato una ricompensa di attesa <span>da 10.000 dollari</span> per tutti:",
            desc_4: "- In palio 5.000 dollari.",
            desc_5: "Fare clic qui.",
            desc_6: "- 5.000 dollari in premi per la classifica di BC Poker.",
            desc_7: "Scarica BC Poker.",
            desc_8: "Unisciti alla comunit\xE0 di poker BC",
            desc_9: "Regole dell'evento Texas Hold'em",
            desc_10: "Ammissibilit\xE0: Aperto esclusivamente ai giocatori che hanno ricevuto un invito.",
            desc_11: "Requisiti dell'account: Limitato a un account per partecipante (deve registrarsi utilizzando un indirizzo e-mail). Agli account con IP o posizioni GPS identiche \xE8 vietato partecipare allo stesso tavolo. La fase di beta testing del prodotto dura una settimana, dopodich\xE9 gli account beta saranno cancellati.",
            desc_12: "Partecipazione al club: Cercate l'ID del club (<span class='w'>201656</span>) o cliccate sul banner della lobby per richiedere l'adesione allo speciale club <span class='w'>BC POKER</span> ufficiale di questo evento.",
            desc_13: "Orario del torneo: <span class='g'>28 febbraio 2024, 01:00 - 09:00 (UTC)</span>.",
            desc_14: "Regole del torneo:",
            desc_15: "1. Il torneo utilizza la modalit\xE0 di gioco standard no-limit Texas Hold'em e i giocatori possono trovare un tavolo e iniziare a giocare in qualsiasi momento. Non c'\xE8 assicurazione, non c'\xE8 un'ulteriore distribuzione dopo l'all-in.",
            desc_16: "\xC8 possibile scegliere tra tre livelli di gioco:",
            desc_17: "\u2460 2/4 (2) [Small Blind 2, Big Blind 4, Ante 2] struttura dei bui,",
            desc_18: "\u2461 5/10 (5) [Small Blind 5, Big Blind 10, Ante 5] struttura dei bui,",
            desc_19: "\u2462 10/20 (10) [Small Blind 10, Big Blind 20, Ante 10] struttura dei bui.",
            desc_20: "2.Ogni giocatore inizia con 10.000 punti club, senza possibilit\xE0 di ricarica a met\xE0 torneo. La partecipazione o l'agevolazione di una circolazione irregolare dei punti al di fuori delle partite ufficiali comporter\xE0 l'immediata squalifica al momento della scoperta.",
            desc_21: "Distribuzione dei premi:",
            desc_22: "1.Il montepremi totale \xE8 di $5000 USD, assegnato in BCD. Al termine del torneo, i premi saranno distribuiti in base alla classifica dei punti, con l'obbligo per i primi dieci classificati di aver giocato almeno 200 mani.",
            desc_23: "Classifica a punti",
            desc_24: "Importo del premio (BCD)",
            desc_25: "Totale",
            desc_26: "*Dopo il torneo, le classifiche saranno annunciate nella chat di gruppo del club, per tenere informati tutti i partecipanti.",
            desc_27: "Avvolgere il tutto"
        },
        ja: {
            desc_1: "\u30E9\u30A4\u30D6\u30B5\u30DD\u30FC\u30C8",
            desc_2: "\u30B5\u30A4\u30C8\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9",
            desc_3: "\u73FE\u5728\u3001\u30B7\u30B9\u30C6\u30E0\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u3092\u884C\u3063\u3066\u304A\u308A\u3001\u8AA0\u306B\u7533\u3057\u8A33\u3054\u3056\u3044\u307E\u305B\u3093\u3002\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u671F\u9593\u4E2D\u3001 <span>$10,000</span> \u306E\u30A6\u30A7\u30A4\u30C6\u30A3\u30F3\u30B0\u30EA\u30EF\u30FC\u30C9\u3092\u3054\u7528\u610F\u3057\u3066\u304A\u308A\u307E\u3059\uFF1A",
            desc_4: "- $5000\u30C9\u30EB\u30D7\u30EC\u30BC\u30F3\u30C8\u3002",
            desc_5: "\u3053\u3053\u3092\u30AF\u30EA\u30C3\u30AF\u3002",
            desc_6: "- BC Poker\u30EA\u30FC\u30C0\u30FC\u30DC\u30FC\u30C9\u5831\u916C$5,000\u3002",
            desc_7: "BC\u30DD\u30FC\u30AB\u30FC\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
            desc_8: "BC\u30DD\u30FC\u30AB\u30FC\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30FC\u306B\u53C2\u52A0\u3059\u308B",
            desc_9: "\u30C6\u30AD\u30B5\u30B9\u30DB\u30FC\u30EB\u30C7\u30E0\u30A4\u30D9\u30F3\u30C8\u30EB\u30FC\u30EB",
            desc_10: "\u53C2\u52A0\u8CC7\u683C\u62DB\u5F85\u72B6\u3092\u53D7\u3051\u53D6\u3063\u305F\u9078\u624B\u306E\u307F\u3002",
            desc_11: "\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u6761\u4EF6\u53C2\u52A0\u80051\u4EBA\u306B\u3064\u304D1\u30A2\u30AB\u30A6\u30F3\u30C8\u307E\u3067\uFF08\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3067\u306E\u767B\u9332\u304C\u5FC5\u8981\uFF09\u3002\u540C\u4E00\u306EIP\u307E\u305F\u306FGPS\u30ED\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u6301\u3064\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u3001\u540C\u3058\u30C6\u30FC\u30D6\u30EB\u306B\u53C2\u52A0\u3067\u304D\u307E\u305B\u3093\u3002\u672C\u88FD\u54C1\u306E\u30D9\u30FC\u30BF\u30FB\u30C6\u30B9\u30C8\u671F\u9593\u306F1\u9031\u9593\u3067\u3001\u305D\u306E\u5F8C\u30D9\u30FC\u30BF\u30FB\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u524A\u9664\u3055\u308C\u307E\u3059\u3002",
            desc_12: "\u30AF\u30E9\u30D6\u53C2\u52A0\uFF1A\u30AF\u30E9\u30D6ID(<span class='w'>201656</span>)\u3092\u3054\u78BA\u8A8D\u3044\u305F\u3060\u304F\u304B\u3001\u30ED\u30D3\u30FC\u306E\u30D0\u30CA\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u672C\u30A4\u30D9\u30F3\u30C8\u306E\u7279\u5225\u30AF\u30E9\u30D6 <span class='w'>BC POKER</span> \u30AA\u30D5\u30A3\u30B7\u30E3\u30EB\u30AF\u30E9\u30D6\u3078\u306E\u5165\u4F1A\u3092\u304A\u7533\u3057\u8FBC\u307F\u304F\u3060\u3055\u3044\u3002",
            desc_13: "\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u6642\u9593 <span class='g'>\u897F\u66A62024\u5E742\u670828\u65E5 01:00 - 09:00 (UTC)</span>.",
            desc_14: "\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u30EB\u30FC\u30EB",
            desc_15: "1.\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u3067\u306F\u6A19\u6E96\u306E\u30CE\u30FC\u30EA\u30DF\u30C3\u30C8 \u30C6\u30AD\u30B5\u30B9 \u30DB\u30FC\u30EB\u30C7\u30E0 \u30B2\u30FC\u30E0 \u30E2\u30FC\u30C9\u304C\u4F7F\u7528\u3055\u308C\u3001\u30D7\u30EC\u30FC\u30E4\u30FC\u306F\u3044\u3064\u3067\u3082\u30C6\u30FC\u30D6\u30EB\u3092\u898B\u3064\u3051\u3066\u30D7\u30EC\u30A4\u3092\u958B\u59CB\u3067\u304D\u307E\u3059\u3002 \u4FDD\u967A\u306A\u3057\u3001\u30AA\u30FC\u30EB\u30A4\u30F3\u5F8C\u306E\u8FFD\u52A0\u53D6\u5F15\u306A\u3057\u3002",
            desc_16: "\u30B2\u30FC\u30E0\u30EC\u30D9\u30EB\u306F3\u6BB5\u968E\u304B\u3089\u9078\u3079\u308B\uFF1A",
            desc_17: "\u2460 2/4 (2) [\u30B9\u30E2\u30FC\u30EB\u30D6\u30E9\u30A4\u30F3\u30C9 2\u3001\u30D3\u30C3\u30B0\u30D6\u30E9\u30A4\u30F3\u30C9 4\u3001\u30A2\u30F3\u30C6\u30A3 2] \u30D6\u30E9\u30A4\u30F3\u30C9\u69CB\u9020\u3001",
            desc_18: "\u2461 5/10 (5) [\u30B9\u30E2\u30FC\u30EB\u30D6\u30E9\u30A4\u30F3\u30C9 5\u3001\u30D3\u30C3\u30B0\u30D6\u30E9\u30A4\u30F3\u30C9 10\u3001\u30A2\u30F3\u30C6\u30A3 5] \u30D6\u30E9\u30A4\u30F3\u30C9\u69CB\u9020\u3001",
            desc_19: "\u2462 10/20 (10) [\u30B9\u30E2\u30FC\u30EB\u30D6\u30E9\u30A4\u30F3\u30C9 10\u3001\u30D3\u30C3\u30B0\u30D6\u30E9\u30A4\u30F3\u30C9 20\u3001\u30A2\u30F3\u30C6\u30A3 10] \u306E\u30D6\u30E9\u30A4\u30F3\u30C9\u69CB\u9020\u3002",
            desc_20: "2.\u5404\u9078\u624B\u306F10,000\u30AF\u30E9\u30D6\u30DD\u30A4\u30F3\u30C8\u304B\u3089\u30B9\u30BF\u30FC\u30C8\u3057\u3001\u5927\u4F1A\u9014\u4E2D\u3067\u306E\u88DC\u5145\u306F\u8A8D\u3081\u306A\u3044\u3002\u516C\u5F0F\u6226\u4EE5\u5916\u3067\u4E0D\u898F\u5247\u306A\u30DD\u30A4\u30F3\u30C8\u5FAA\u74B0\u3092\u884C\u3063\u305F\u308A\u3001\u52A9\u9577\u3057\u305F\u308A\u3057\u305F\u5834\u5408\u306F\u3001\u767A\u899A\u3057\u305F\u6642\u70B9\u3067\u5373\u5931\u683C\u3068\u306A\u308B\u3002",
            desc_21: "\u5831\u916C\u306E\u5206\u914D\uFF1A",
            desc_22: "1.\u8CDE\u91D1\u7DCF\u984D\u306F$5000\u7C73\u30C9\u30EB\u3067\u3001BCD\u3067\u6388\u4E0E\u3055\u308C\u308B\u3002\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u7D42\u4E86\u5F8C\u3001\u30DD\u30A4\u30F3\u30C8\u30E9\u30F3\u30AD\u30F3\u30B0\u306B\u57FA\u3065\u304D\u8CDE\u54C1\u304C\u914D\u5E03\u3055\u308C\u307E\u3059\u3002\u4E0A\u4F4D10\u4F4D\u307E\u3067\u306E\u5165\u8CDE\u8005\u306F\u3001\u5C11\u306A\u304F\u3068\u3082200\u30CF\u30F3\u30C9\u3092\u30D7\u30EC\u30A4\u3057\u3066\u3044\u308B\u3053\u3068\u304C\u6761\u4EF6\u3068\u306A\u308A\u307E\u3059\u3002",
            desc_23: "\u30DD\u30A4\u30F3\u30C8\u30E9\u30F3\u30AD\u30F3\u30B0",
            desc_24: "\u8CDE\u91D1\u984D\uFF08BCD\uFF09",
            desc_25: "\u5408\u8A08",
            desc_26: "*\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u7D42\u4E86\u5F8C\u3001\u30AF\u30E9\u30D6\u306E\u30B0\u30EB\u30FC\u30D7\u30C1\u30E3\u30C3\u30C8\u3067\u9806\u4F4D\u3092\u767A\u8868\u3057\u3001\u53C2\u52A0\u8005\u5168\u54E1\u306B\u60C5\u5831\u3092\u63D0\u4F9B\u3059\u308B\u3002",
            desc_27: "\u3059\u3079\u3066\u3092\u5305\u307F\u8FBC\u3080"
        },
        ko: {
            desc_1: "\uC2E4\uC2DC\uAC04 \uC9C0\uC6D0",
            desc_2: "\uC0AC\uC774\uD2B8 \uC5C5\uADF8\uB808\uC774\uB4DC, \uC2DC\uC791",
            desc_3: "\uD604\uC7AC \uC2DC\uC2A4\uD15C\uC744 \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uB294 \uC911\uC774\uBBC0\uB85C \uC9C4\uC2EC\uC73C\uB85C \uC0AC\uACFC\uB4DC\uB9BD\uB2C8\uB2E4. <span>\uC5C5\uADF8\uB808\uC774\uB4DC\uAC00 \uC9C4\uD589\uB418\uB294 \uB3D9\uC548 \uBAA8\uB4E0 \uBD84\uB4E4\uAED8 $10,000</span> \uB300\uAE30 \uBCF4\uC0C1\uAE08\uC744 \uC900\uBE44\uD588\uC2B5\uB2C8\uB2E4:",
            desc_4: "- 5,000\uB2EC\uB7EC \uACBD\uD488.",
            desc_5: "\uC5EC\uAE30\uB97C \uD074\uB9AD\uD558\uC138\uC694.",
            desc_6: "- 5,000\uB2EC\uB7EC\uC758 BC \uD3EC\uCEE4 \uB9AC\uB354\uBCF4\uB4DC \uBCF4\uC0C1.",
            desc_7: "BC Poker\uB97C \uB2E4\uC6B4\uB85C\uB4DC\uD569\uB2C8\uB2E4.",
            desc_8: "BC \uD3EC\uCEE4 \uCEE4\uBBA4\uB2C8\uD2F0 \uAC00\uC785",
            desc_9: "\uD14D\uC0AC\uC2A4 \uD640\uB364 \uC774\uBCA4\uD2B8 \uADDC\uCE59",
            desc_10: "\uCC38\uAC00 \uC790\uACA9: \uC790\uACA9: \uCD08\uB300\uB97C \uBC1B\uC740 \uD50C\uB808\uC774\uC5B4\uC5D0\uAC8C\uB9CC \uC5F4\uB824 \uC788\uC2B5\uB2C8\uB2E4.",
            desc_11: "\uACC4\uC815 \uC694\uAC74: \uCC38\uAC00\uC790\uB2F9 \uD558\uB098\uC758 \uACC4\uC815\uC73C\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4(\uBC18\uB4DC\uC2DC \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB4F1\uB85D\uD574\uC57C \uD569\uB2C8\uB2E4). \uB3D9\uC77C\uD55C IP \uB610\uB294 GPS \uC704\uCE58\uB97C \uAC00\uC9C4 \uACC4\uC815\uC740 \uAC19\uC740 \uD14C\uC774\uBE14\uC5D0 \uCC38\uC5EC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC81C\uD488\uC758 \uBCA0\uD0C0 \uD14C\uC2A4\uD2B8 \uB2E8\uACC4\uB294 1\uC8FC\uC77C \uB3D9\uC548 \uC9C4\uD589\uB418\uBA70, \uADF8 \uC774\uD6C4\uC5D0\uB294 \uBCA0\uD0C0 \uACC4\uC815\uC774 \uC0AD\uC81C\uB429\uB2C8\uB2E4.",
            desc_12: "\uD074\uB7FD \uCC38\uC5EC: \uD074\uB7FD ID(<span class='w'>201656</span>)\uB97C \uCC3E\uAC70\uB098 \uB85C\uBE44\uC758 \uBC30\uB108\uB97C \uD074\uB9AD\uD558\uC5EC \uC774 \uC774\uBCA4\uD2B8\uB97C \uC704\uD55C \uD2B9\uBCC4 <span class='w'>BC POKER</span> \uACF5\uC2DD \uD074\uB7FD \uAC00\uC785\uC744 \uC2E0\uCCAD\uD558\uC138\uC694.",
            desc_13: "\uD1A0\uB108\uBA3C\uD2B8 \uC2DC\uAC04: <span class='g'>2024\uB144 2\uC6D4 28\uC77C, 01:00 - 09:00 (UTC)</span>.",
            desc_14: "\uD1A0\uB108\uBA3C\uD2B8 \uADDC\uCE59:",
            desc_15: "1. \uD1A0\uB108\uBA3C\uD2B8\uB294 \uD45C\uC900 \uB178-\uB9AC\uBBF8\uD2B8 \uD14D\uC0AC\uC2A4 \uD640\uB364 \uAC8C\uC784 \uBAA8\uB4DC\uB97C \uC0AC\uC6A9\uD558\uBA70, \uD50C\uB808\uC774\uC5B4\uB294 \uC5B8\uC81C\uB4E0\uC9C0 \uD14C\uC774\uBE14\uC744 \uCC3E\uC544 \uAC8C\uC784\uC744 \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBCF4\uD5D8\uB3C4 \uC5C6\uACE0 \uC62C\uC778 \uD6C4 \uCD94\uAC00 \uB51C\uB9C1\uB3C4 \uC5C6\uC2B5\uB2C8\uB2E4.",
            desc_16: "\uC138 \uAC00\uC9C0 \uAC8C\uC784 \uB808\uBCA8 \uC911\uC5D0\uC11C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:",
            desc_17: "2/4 (2) [\uC2A4\uBAB0 \uBE14\uB77C\uC778\uB4DC 2, \uBE45 \uBE14\uB77C\uC778\uB4DC 4, \uC564\uD2F0 2] \uBE14\uB77C\uC778\uB4DC \uAD6C\uC870,",
            desc_18: "5/10 (5) [\uC2A4\uBAB0 \uBE14\uB77C\uC778\uB4DC 5, \uBE45 \uBE14\uB77C\uC778\uB4DC 10, \uC564\uD2F0 5] \uBE14\uB77C\uC778\uB4DC \uAD6C\uC870,",
            desc_19: "10/20 (10) [\uC2A4\uBAB0 \uBE14\uB77C\uC778\uB4DC 10, \uBE45 \uBE14\uB77C\uC778\uB4DC 20, \uC564\uD2F0 10] \uBE14\uB77C\uC778\uB4DC \uAD6C\uC870.",
            desc_20: "2. \uAC01 \uD50C\uB808\uC774\uC5B4\uB294 10,000 \uD074\uB7FD \uD3EC\uC778\uD2B8\uB85C \uC2DC\uC791\uD558\uBA70, \uD1A0\uB108\uBA3C\uD2B8 \uB3C4\uC911\uC5D0\uB294 \uB9AC\uD544\uC774 \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uACF5\uC2DD \uACBD\uAE30 \uC678\uC758 \uBE44\uC815\uC0C1\uC801\uC778 \uD3EC\uC778\uD2B8 \uC720\uD1B5\uC5D0 \uAD00\uC5EC\uD558\uAC70\uB098 \uC774\uB97C \uC870\uC7A5\uD558\uB294 \uD589\uC704\uB294 \uC801\uBC1C \uC989\uC2DC \uC2E4\uACA9 \uCC98\uB9AC\uB429\uB2C8\uB2E4.",
            desc_21: "\uBCF4\uC0C1 \uBD84\uBC30:",
            desc_22: "1. \uCD1D \uC0C1\uAE08\uC740 \uBBF8\uD654 5\uCC9C \uB2EC\uB7EC\uC774\uBA70, BCD\uB85C \uC218\uC5EC\uB429\uB2C8\uB2E4. \uD1A0\uB108\uBA3C\uD2B8\uAC00 \uC885\uB8CC\uB418\uBA74 \uD3EC\uC778\uD2B8 \uC21C\uC704\uC5D0 \uB530\uB77C \uC0C1\uAE08\uC774 \uC9C0\uAE09\uB418\uBA70, \uC0C1\uC704 10\uBA85\uC758 \uC6B0\uC2B9\uC790\uB294 \uCD5C\uC18C 200\uBC88\uC758 \uD578\uB4DC\uB97C \uD50C\uB808\uC774\uD574\uC57C \uD55C\uB2E4\uB294 \uC870\uAC74\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
            desc_23: "\uD3EC\uC778\uD2B8 \uB7AD\uD0B9",
            desc_24: "\uC0C1\uAE08 \uAE08\uC561(BCD)",
            desc_25: "\uD569\uACC4",
            desc_26: "*\uD1A0\uB108\uBA3C\uD2B8 \uC885\uB8CC \uD6C4 \uD074\uB7FD\uC758 \uADF8\uB8F9 \uCC44\uD305\uC744 \uD1B5\uD574 \uC21C\uC704\uAC00 \uBC1C\uD45C\uB418\uC5B4 \uBAA8\uB4E0 \uCC38\uAC00\uC790\uAC00 \uCD5C\uC2E0 \uC815\uBCF4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
            desc_27: "\uBAA8\uB4E0 \uAC83\uC744 \uB9C8\uBB34\uB9AC\uD558\uC138\uC694"
        },
        nl: {
            desc_1: "Live ondersteuning",
            desc_2: "Site upgraden, lanceren in",
            desc_3: "Onze oprechte excuses, omdat we momenteel ons systeem aan het upgraden zijn. <span>Tijdens de upgrade hebben we voor iedereen een beloning van $10.000</span> klaargezet:",
            desc_4: "- 5.000 dollar weggevertje.",
            desc_5: "Klik hier.",
            desc_6: "- $ 5.000 in BC Poker leaderboard beloningen.",
            desc_7: "Download BC Poker.",
            desc_8: "Word lid van de BC pokergemeenschap",
            desc_9: "Regels voor Texas Hold'em-evenementen",
            desc_10: "Geschiktheid: Uitsluitend open voor spelers die een uitnodiging hebben ontvangen.",
            desc_11: "Accountvereisten: Beperkt tot \xE9\xE9n account per deelnemer (moet zich registreren met een e-mailadres). Accounts met identieke IP's of GPS-locaties mogen niet aan dezelfde tafel meedoen. De b\xE8tatestfase van het product duurt een week, daarna worden de b\xE8ta-accounts verwijderd.",
            desc_12: "Deelname aan de club: Zoek het club-ID op (<span class='w'>201656</span>) of klik op de banner in de lobby om je aan te melden bij de speciale <span class='w'>BC POKER</span> offici\xEBle club voor dit evenement.",
            desc_13: "Toernooitijd: <span class='g'>28 februari 2024, 01:00 - 09:00 (UTC)</span>.",
            desc_14: "Toernooiregels:",
            desc_15: "1.Het toernooi gebruikt de standaard no-limit Texas Hold'em spelmodus en spelers kunnen op elk moment een tafel vinden en beginnen te spelen. Geen verzekering, geen extra delen na all-in.",
            desc_16: "Je kunt kiezen uit drie spelniveaus:",
            desc_17: "\u2460 2/4 (2) [Small Blind 2, Big Blind 4, Ante 2] blindenstructuur,",
            desc_18: "\u2461 5/10 (5) [Small Blind 5, Big Blind 10, Ante 5] blindenstructuur,",
            desc_19: "\u2462 10/20 (10) [Small Blind 10, Big Blind 20, Ante 10] blindenstructuur.",
            desc_20: "2. Elke speler begint met 10.000 clubpunten, die halverwege het toernooi niet mogen worden bijgevuld. Het deelnemen aan of faciliteren van onregelmatige puntencirculatie buiten de offici\xEBle wedstrijden zal leiden tot onmiddellijke diskwalificatie wanneer dit wordt ontdekt.",
            desc_21: "Verdeling van beloningen:",
            desc_22: "1.De totale prijzenpot is $5000 USD, toegekend in BCD. Aan het einde van het toernooi worden prijzen uitgedeeld op basis van puntenklassementen, waarbij de top tien winnaars minstens 200 handen gespeeld moeten hebben.",
            desc_23: "Punten Klassement",
            desc_24: "Prijsbedrag (BCD)",
            desc_25: "Totaal",
            desc_26: "*Na het toernooi worden de klassementen bekendgemaakt in de groepschat van de club, zodat alle deelnemers op de hoogte blijven.",
            desc_27: "Alles inpakken"
        },
        pl: {
            desc_1: "Wsparcie na \u017Cywo",
            desc_2: "Aktualizacja strony, uruchomienie w",
            desc_3: "Szczerze przepraszamy, poniewa\u017C obecnie aktualizujemy nasz system. Podczas aktualizacji przygotowali\u015Bmy dla wszystkich oczekuj\u0105cych nagrod\u0119 <span>$10,000</span> :",
            desc_4: "- $5,000 do rozdania.",
            desc_5: "Kliknij tutaj.",
            desc_6: "- $5,000 w nagrodach w rankingu BC Poker.",
            desc_7: "Pobierz BC Poker.",
            desc_8: "Do\u0142\u0105cz do spo\u0142eczno\u015Bci pokerowej BC",
            desc_9: "Zasady turnieju Texas Hold'em",
            desc_10: "Kwalifikowalno\u015B\u0107: Otwarte wy\u0142\u0105cznie dla graczy, kt\xF3rzy otrzymali zaproszenie.",
            desc_11: "Wymagania dotycz\u0105ce konta: Ograniczenie do jednego konta na uczestnika (musi zarejestrowa\u0107 si\u0119 przy u\u017Cyciu adresu e-mail). Konta z identycznymi adresami IP lub lokalizacjami GPS nie mog\u0105 do\u0142\u0105czy\u0107 do tego samego sto\u0142u. Faza test\xF3w beta produktu trwa tydzie\u0144, po kt\xF3rym konta beta zostan\u0105 usuni\u0119te.",
            desc_12: "Udzia\u0142 klubu: Wyszukaj identyfikator klubu (<span class='w'>201656</span>) lub kliknij baner lobby, aby poprosi\u0107 o do\u0142\u0105czenie do specjalnego <span class='w'>BC POKER</span> oficjalnego klubu tego wydarzenia.",
            desc_13: "Czas turnieju: <span class='g'>28 lutego 2024, 01:00 - 09:00 (UTC)</span>.",
            desc_14: "Zasady turnieju:",
            desc_15: "1.Turniej wykorzystuje standardowy tryb gry no-limit Texas Hold'em, a gracze mog\u0105 znale\u017A\u0107 stolik i rozpocz\u0105\u0107 gr\u0119 w dowolnym momencie. Brak ubezpieczenia, brak dodatkowych rozda\u0144 po all-in.",
            desc_16: "Do wyboru s\u0105 trzy poziomy gry:",
            desc_17: "\u2460 2/4 (2) [Small Blind 2, Big Blind 4, Ante 2] struktura blind\xF3w,",
            desc_18: "\u2461 5/10 (5) [Small Blind 5, Big Blind 10, Ante 5] struktura blind\xF3w,",
            desc_19: "\u2462 10/20 (10) [Small Blind 10, Big Blind 20, Ante 10] struktura blind\xF3w.",
            desc_20: "2.Ka\u017Cdy gracz rozpoczyna gr\u0119 z 10 000 punkt\xF3w klubowych, bez mo\u017Cliwo\u015Bci ich uzupe\u0142niania w trakcie turnieju. Anga\u017Cowanie si\u0119 lub u\u0142atwianie nieregularnego obiegu punkt\xF3w poza oficjalnymi rozgrywkami doprowadzi do natychmiastowej dyskwalifikacji po wykryciu.",
            desc_21: "Dystrybucja nagr\xF3d:",
            desc_22: "1.Ca\u0142kowita pula nagr\xF3d wynosi $5000 USD i jest przyznawana w BCD. Po zako\u0144czeniu turnieju nagrody zostan\u0105 rozdane na podstawie rankingu punktowego, przy czym dziesi\u0119ciu najlepszych zwyci\u0119zc\xF3w musi rozegra\u0107 co najmniej 200 rozda\u0144.",
            desc_23: "Ranking punktowy",
            desc_24: "Kwota nagrody (BCD)",
            desc_25: "\u0141\u0105cznie",
            desc_26: "*Po turnieju rankingi zostan\u0105 og\u0142oszone na klubowym czacie grupowym, dzi\u0119ki czemu wszyscy uczestnicy b\u0119d\u0105 na bie\u017C\u0105co.",
            desc_27: "Zapakuj wszystko"
        },
        pt: {
            desc_1: "Suporte ao vivo",
            desc_2: "Atualiza\xE7\xE3o do site, lan\xE7amento em",
            desc_3: "Pedimos sinceras desculpas, pois estamos atualizando nosso sistema. Durante a atualiza\xE7\xE3o, preparamos uma recompensa de espera de <span>US$ 10.000</span> para todos:",
            desc_4: "- Pr\xEAmio de US$ 5.000.",
            desc_5: "Clique aqui.",
            desc_6: "- US$ 5.000 em pr\xEAmios da tabela de classifica\xE7\xE3o do BC Poker.",
            desc_7: "Fa\xE7a o download do BC Poker.",
            desc_8: "Participe da comunidade de p\xF4quer do BC",
            desc_9: "Regras do evento Texas Hold'em",
            desc_10: "Elegibilidade: Aberto exclusivamente a jogadores que tenham recebido um convite.",
            desc_11: "Requisitos de conta: Limitado a uma conta por participante (deve se registrar usando um endere\xE7o de e-mail). Contas com IPs ou localiza\xE7\xF5es GPS id\xEAnticas n\xE3o podem participar da mesma mesa. A fase de teste beta do produto tem dura\xE7\xE3o de uma semana, ap\xF3s a qual as contas beta ser\xE3o exclu\xEDdas.",
            desc_12: "Participa\xE7\xE3o do clube: Procure o ID do clube (<span class='w'>201656</span>) ou clique no banner do lobby para solicitar a participa\xE7\xE3o no clube oficial especial <span class='w'>BC POKER</span> para este evento.",
            desc_13: "Hor\xE1rio do torneio: <span class='g'>28 de fevereiro de 2024, 01:00 - 09:00 (UTC)</span>.",
            desc_14: "Regras do torneio:",
            desc_15: "1. o torneio usa o modo de jogo padr\xE3o no-limit Texas Hold'em, e os jogadores podem encontrar uma mesa e come\xE7ar a jogar a qualquer momento. N\xE3o h\xE1 seguro, nem distribui\xE7\xE3o adicional ap\xF3s o all-in.",
            desc_16: "H\xE1 tr\xEAs n\xEDveis de jogo para escolher:",
            desc_17: "\u2460 2/4 (2) [Small Blind 2, Big Blind 4, Ante 2] estrutura de blinds,",
            desc_18: "\u2461 5/10 (5) [Small Blind 5, Big Blind 10, Ante 5] estrutura de blinds,",
            desc_19: "\u2462 10/20 (10) [Small Blind 10, Big Blind 20, Ante 10] estrutura de blinds.",
            desc_20: "2) Cada jogador come\xE7a com 10.000 pontos do clube, n\xE3o sendo permitidas recargas no meio do torneio. O envolvimento ou a facilita\xE7\xE3o da circula\xE7\xE3o irregular de pontos fora dos jogos oficiais levar\xE1 \xE0 desqualifica\xE7\xE3o imediata ap\xF3s a descoberta.",
            desc_21: "Distribui\xE7\xE3o de pr\xEAmios:",
            desc_22: "1. o pr\xEAmio total \xE9 de $5000 USD, concedido em BCD. Ao final do torneio, os pr\xEAmios ser\xE3o distribu\xEDdos com base na classifica\xE7\xE3o por pontos, sendo que os dez primeiros colocados dever\xE3o ter jogado pelo menos 200 m\xE3os.",
            desc_23: "Classifica\xE7\xE3o por pontos",
            desc_24: "Valor do pr\xEAmio (BCD)",
            desc_25: "Total",
            desc_26: "*Ap\xF3s o torneio, as classifica\xE7\xF5es ser\xE3o anunciadas no bate-papo em grupo do clube, mantendo todos os participantes informados.",
            desc_27: "Embrulhe tudo"
        },
        ru: {
            desc_1: "\u0416\u0438\u0432\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430",
            desc_2: "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430, \u0437\u0430\u043F\u0443\u0441\u043A \u0432",
            desc_3: "\u041C\u044B \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u043C \u0441\u0432\u043E\u0438 \u0438\u0441\u043A\u0440\u0435\u043D\u043D\u0438\u0435 \u0438\u0437\u0432\u0438\u043D\u0435\u043D\u0438\u044F, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u043C\u043E\u0434\u0435\u0440\u043D\u0438\u0437\u0430\u0446\u0438\u044E \u043D\u0430\u0448\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B. \u041D\u0430 \u0432\u0440\u0435\u043C\u044F \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u044B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043B\u0438 <span>$10,000</span> \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0436\u0435\u043B\u0430\u044E\u0449\u0438\u0445:",
            desc_4: "- 5 000 \u0434\u043E\u043B\u043B\u0430\u0440\u043E\u0432 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u0440\u0438\u0437\u0430.",
            desc_5: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C.",
            desc_6: "- $5 000 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u044F \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0435 \u043B\u0438\u0434\u0435\u0440\u043E\u0432 BC Poker.",
            desc_7: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C BC Poker.",
            desc_8: "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0442\u0435\u0441\u044C \u043A \u043F\u043E\u043A\u0435\u0440\u043D\u043E\u043C\u0443 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0443 BC",
            desc_9: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0441\u043E\u0440\u0435\u0432\u043D\u043E\u0432\u0430\u043D\u0438\u0439 \u043F\u043E \u0442\u0435\u0445\u0430\u0441\u0441\u043A\u043E\u043C\u0443 \u0445\u043E\u043B\u0434\u0435\u043C\u0443",
            desc_10: "\u041F\u0440\u0430\u0432\u043E \u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u0438\u0435: \u0423\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u043C\u043E\u0433\u0443\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0433\u0440\u043E\u043A\u0438, \u043F\u043E\u043B\u0443\u0447\u0438\u0432\u0448\u0438\u0435 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435.",
            desc_11: "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043A \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438: \u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043D\u0430 \u043E\u0434\u043D\u0443 \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430 (\u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B). \u0410\u043A\u043A\u0430\u0443\u043D\u0442\u044B \u0441 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u043C\u0438 IP-\u0430\u0434\u0440\u0435\u0441\u0430\u043C\u0438 \u0438\u043B\u0438 GPS-\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432 \u043E\u0434\u043D\u043E\u0439 \u0442\u0430\u0431\u043B\u0438\u0446\u0435. \u0424\u0430\u0437\u0430 \u0431\u0435\u0442\u0430-\u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430 \u0434\u043B\u0438\u0442\u0441\u044F \u043E\u0434\u043D\u0443 \u043D\u0435\u0434\u0435\u043B\u044E, \u043F\u043E\u0441\u043B\u0435 \u0447\u0435\u0433\u043E \u0431\u0435\u0442\u0430-\u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B.",
            desc_12: "\u0423\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043A\u043B\u0443\u0431\u0435: \u041D\u0430\u0439\u0434\u0438\u0442\u0435 ID \u043A\u043B\u0443\u0431\u0430 (<span class='w'>201656</span>) \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0431\u0430\u043D\u043D\u0435\u0440 \u0432 \u043B\u043E\u0431\u0431\u0438, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435 \u0432 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 <span class='w'>\u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043B\u0443\u0431 BC POKER</span> \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u044F.",
            desc_13: "\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0442\u0443\u0440\u043D\u0438\u0440\u0430: <span class='g'>28 \u0444\u0435\u0432\u0440\u0430\u043B\u044F 2024 \u0433\u043E\u0434\u0430, 01:00 - 09:00 (UTC)</span>.",
            desc_14: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0442\u0443\u0440\u043D\u0438\u0440\u0430:",
            desc_15: "1.\u0412 \u0442\u0443\u0440\u043D\u0438\u0440\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C \u0438\u0433\u0440\u044B no-limit Texas Hold'em, \u0438 \u0438\u0433\u0440\u043E\u043A\u0438 \u043C\u043E\u0433\u0443\u0442 \u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u043E\u043B \u0438 \u043D\u0430\u0447\u0430\u0442\u044C \u0438\u0433\u0440\u0443 \u0432 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F. \u041D\u0438\u043A\u0430\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0438, \u043D\u0438\u043A\u0430\u043A\u0438\u0445 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0440\u0430\u0437\u0434\u0430\u0447 \u043F\u043E\u0441\u043B\u0435 \u043E\u043B\u043B-\u0438\u043D\u0430.",
            desc_16: "\u041D\u0430 \u0432\u044B\u0431\u043E\u0440 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F \u0442\u0440\u0438 \u0438\u0433\u0440\u043E\u0432\u044B\u0445 \u0443\u0440\u043E\u0432\u043D\u044F:",
            desc_17: "\u2460 2/4 (2) [\u041C\u0430\u043B\u044B\u0439 \u0431\u043B\u0430\u0439\u043D\u0434 2, \u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0431\u043B\u0430\u0439\u043D\u0434 4, \u0410\u043D\u0442\u0435 2] \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0431\u043B\u0430\u0439\u043D\u0434\u043E\u0432,",
            desc_18: "\u2461 5/10 (5) [\u041C\u0430\u043B\u044B\u0439 \u0431\u043B\u0430\u0439\u043D\u0434 5, \u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0431\u043B\u0430\u0439\u043D\u0434 10, \u0410\u043D\u0442\u0435 5] \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0431\u043B\u0430\u0439\u043D\u0434\u043E\u0432,",
            desc_19: "\u2462 10/20 (10) [\u041C\u0430\u043B\u044B\u0439 \u0431\u043B\u0430\u0439\u043D\u0434 10, \u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0431\u043B\u0430\u0439\u043D\u0434 20, \u0410\u043D\u0442\u0435 10] \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0431\u043B\u0430\u0439\u043D\u0434\u043E\u0432.",
            desc_20: "2.\u041A\u0430\u0436\u0434\u044B\u0439 \u0438\u0433\u0440\u043E\u043A \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442 \u0441 10 000 \u043A\u043B\u0443\u0431\u043D\u044B\u0445 \u043E\u0447\u043A\u043E\u0432, \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432 \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435 \u0442\u0443\u0440\u043D\u0438\u0440\u0430 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E. \u0423\u0447\u0430\u0441\u0442\u0438\u0435 \u0438\u043B\u0438 \u0441\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E\u043C\u0443 \u043E\u0431\u043E\u0440\u043E\u0442\u0443 \u043E\u0447\u043A\u043E\u0432 \u0432\u043D\u0435 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0438\u0433\u0440 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043A \u043D\u0435\u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E\u0439 \u0434\u0438\u0441\u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u043F\u043E\u0441\u043B\u0435 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0438\u044F.",
            desc_21: "\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0439:",
            desc_22: "1.\u041E\u0431\u0449\u0438\u0439 \u043F\u0440\u0438\u0437\u043E\u0432\u043E\u0439 \u0444\u043E\u043D\u0434 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 $5000 USD \u0438 \u0432\u044B\u0434\u0430\u0435\u0442\u0441\u044F \u0432 BCD. \u041F\u043E \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0438 \u0442\u0443\u0440\u043D\u0438\u0440\u0430 \u043F\u0440\u0438\u0437\u044B \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C\u0441\u044F \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0430 \u043E\u0447\u043A\u043E\u0432, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u0434\u0435\u0441\u044F\u0442\u044C \u043F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u044B\u0433\u0440\u0430\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 200 \u0440\u0443\u043A.",
            desc_23: "\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043F\u043E \u0431\u0430\u043B\u043B\u0430\u043C",
            desc_24: "\u0421\u0443\u043C\u043C\u0430 \u043F\u0440\u0438\u0437\u0430 (BCD)",
            desc_25: "\u0412\u0441\u0435\u0433\u043E",
            desc_26: "*\u041F\u043E\u0441\u043B\u0435 \u0442\u0443\u0440\u043D\u0438\u0440\u0430 \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u0431\u0443\u0434\u0435\u0442 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D \u0432 \u0433\u0440\u0443\u043F\u043F\u043E\u0432\u043E\u043C \u0447\u0430\u0442\u0435 \u043A\u043B\u0443\u0431\u0430, \u0447\u0442\u043E\u0431\u044B \u0432\u0441\u0435 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u0431\u044B\u043B\u0438 \u0432 \u043A\u0443\u0440\u0441\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u0439.",
            desc_27: "\u0417\u0430\u0432\u0435\u0440\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u044D\u0442\u043E"
        },
        tr: {
            desc_1: "Canl\u0131 Destek",
            desc_2: "Site Y\xFCkseltme, Lansman",
            desc_3: "\u015Eu anda sistemimizi y\xFCkseltmekte oldu\u011Fumuz i\xE7in i\xE7tenlikle \xF6z\xFCr dileriz. Y\xFCkseltme s\u0131ras\u0131nda, herkes i\xE7in bir <span>10.000 $</span> bekleme \xF6d\xFCl\xFC haz\u0131rlad\u0131k:",
            desc_4: "- 5,000 dolar hediye.",
            desc_5: "Buraya t\u0131klay\u0131n.",
            desc_6: "- BC Poker liderlik tablosu \xF6d\xFCllerinde 5.000$.",
            desc_7: "BC Poker'i indirin.",
            desc_8: "BC Poker Toplulu\u011Funa Kat\u0131l\u0131n",
            desc_9: "Texas Hold'em Etkinlik Kurallar\u0131",
            desc_10: "Uygunluk: Sadece davetiye alm\u0131\u015F olan oyunculara a\xE7\u0131kt\u0131r.",
            desc_11: "Hesap Gereksinimleri: Kat\u0131l\u0131mc\u0131 ba\u015F\u0131na bir hesapla s\u0131n\u0131rl\u0131d\u0131r (bir e-posta adresi kullanarak kaydolmal\u0131d\u0131r). Ayn\u0131 IP'lere veya GPS konumlar\u0131na sahip hesaplar\u0131n ayn\u0131 masaya kat\u0131lmas\u0131 yasakt\u0131r. \xDCr\xFCn\xFCn beta test a\u015Famas\u0131 bir hafta s\xFCrecek ve sonras\u0131nda beta hesaplar silinecektir.",
            desc_12: "Kul\xFCp Kat\u0131l\u0131m\u0131: Bu etkinlik i\xE7in \xF6zel <span class='w'>BC POKER</span> resmi kul\xFCb\xFCne kat\u0131lmay\u0131 talep etmek i\xE7in kul\xFCp kimli\u011Fini (<span class='w'>201656</span>) aray\u0131n veya lobinin ba\u015Fl\u0131\u011F\u0131na t\u0131klay\u0131n.",
            desc_13: "Turnuva Zaman\u0131: <span class='g'>28 \u015Eubat 2024, 01:00 - 09:00 (UTC)</span>.",
            desc_14: "Turnuva Kurallar\u0131:",
            desc_15: "1.Turnuva standart limitsiz Texas Hold'em oyun modunu kullan\u0131r ve oyuncular istedikleri zaman bir masa bulup oynamaya ba\u015Flayabilirler. Sigorta yok, all-in'den sonra ek da\u011F\u0131tma yok.",
            desc_16: "Aralar\u0131ndan se\xE7im yapabilece\u011Finiz \xFC\xE7 oyun seviyesi vard\u0131r:",
            desc_17: "\u2460 2/4 (2) [K\xFC\xE7\xFCk K\xF6r 2, B\xFCy\xFCk K\xF6r 4, Ante 2] k\xF6r yap\u0131s\u0131,",
            desc_18: "\u2461 5/10 (5) [K\xFC\xE7\xFCk K\xF6r 5, B\xFCy\xFCk K\xF6r 10, Ante 5] k\xF6r yap\u0131s\u0131,",
            desc_19: "\u2462 10/20 (10) [K\xFC\xE7\xFCk K\xF6r 10, B\xFCy\xFCk K\xF6r 20, Ante 10] k\xF6r yap\u0131s\u0131.",
            desc_20: "2.Her oyuncu 10.000 kul\xFCp puan\u0131 ile ba\u015Flar ve turnuva ortas\u0131nda puanlar\u0131n yeniden doldurulmas\u0131na izin verilmez. Resmi oyunlar d\u0131\u015F\u0131nda d\xFCzensiz puan dola\u015F\u0131m\u0131na kar\u0131\u015Fmak veya kolayla\u015Ft\u0131rmak, fark edildi\u011Finde derhal diskalifiye edilmeye yol a\xE7acakt\u0131r.",
            desc_21: "\xD6d\xFCl Da\u011F\u0131t\u0131m\u0131:",
            desc_22: "1.Toplam \xF6d\xFCl havuzu 5000 USD olup, BCD olarak verilecektir. Turnuva sona erdi\u011Finde, \xF6d\xFCller puan s\u0131ralamas\u0131na g\xF6re da\u011F\u0131t\u0131lacak ve ilk on kazanan i\xE7in en az 200 el oynam\u0131\u015F olma \u015Fart\u0131 aranacakt\u0131r.",
            desc_23: "Puan S\u0131ralamas\u0131",
            desc_24: "\xD6d\xFCl Tutar\u0131 (BCD)",
            desc_25: "Toplam",
            desc_26: "*Turnuvadan sonra, s\u0131ralamalar kul\xFCb\xFCn grup sohbetinde duyurulacak ve t\xFCm kat\u0131l\u0131mc\u0131lar\u0131 d\xF6ng\xFC i\xE7inde tutacakt\u0131r.",
            desc_27: "Hepsini paketleyin"
        },
        uk: {
            desc_1: "\u0416\u0438\u0432\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430",
            desc_2: "\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u0430\u0439\u0442\u0443, \u0437\u0430\u043F\u0443\u0441\u043A",
            desc_3: "\u041C\u0438 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u043C\u043E \u0449\u0438\u0440\u0456 \u0432\u0438\u0431\u0430\u0447\u0435\u043D\u043D\u044F, \u043E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u043D\u0430\u0440\u0430\u0437\u0456 \u043C\u0438 \u043E\u043D\u043E\u0432\u043B\u044E\u0454\u043C\u043E \u043D\u0430\u0448\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u0443. \u041F\u0456\u0434 \u0447\u0430\u0441 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043C\u0438 \u043F\u0456\u0434\u0433\u043E\u0442\u0443\u0432\u0430\u043B\u0438 \u043D\u0430\u0433\u043E\u0440\u043E\u0434\u0443 <span>$10,000</span> , \u044F\u043A\u0430 \u0447\u0435\u043A\u0430\u0454 \u043D\u0430 \u0432\u0441\u0456\u0445 \u0431\u0430\u0436\u0430\u044E\u0447\u0438\u0445:",
            desc_4: "- \u041F\u0440\u0438\u0437 - 5 000 \u0434\u043E\u043B\u0430\u0440\u0456\u0432.",
            desc_5: "\u041D\u0430\u0442\u0438\u0441\u043D\u0438 \u0441\u044E\u0434\u0438.",
            desc_6: "- 5,000$ \u043F\u0440\u0438\u0437\u043E\u0432\u0438\u0445 \u0443 \u043B\u0456\u0434\u0435\u0440\u0431\u043E\u0440\u0434\u0456 BC Poker.",
            desc_7: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 BC Poker.",
            desc_8: "\u041F\u0440\u0438\u0454\u0434\u043D\u0443\u0439\u0442\u0435\u0441\u044C \u0434\u043E \u043F\u043E\u043A\u0435\u0440\u043D\u043E\u0457 \u0441\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0438 BC Poker",
            desc_9: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0456\u0432\u0435\u043D\u0442\u0443 \u0437 \u0422\u0435\u0445\u0430\u0441\u044C\u043A\u043E\u0433\u043E \u0425\u043E\u043B\u0434\u0435\u043C\u0443",
            desc_10: "\u041F\u0440\u0430\u0432\u043E \u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u044C: \u0412\u0456\u0434\u043A\u0440\u0438\u0442\u043E \u0432\u0438\u043A\u043B\u044E\u0447\u043D\u043E \u0434\u043B\u044F \u0433\u0440\u0430\u0432\u0446\u0456\u0432, \u044F\u043A\u0456 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0438 \u0437\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044F.",
            desc_11: "\u0412\u0438\u043C\u043E\u0433\u0438 \u0434\u043E \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443: \u041E\u0431\u043C\u0435\u0436\u0435\u043D\u043E \u0434\u043E \u043E\u0434\u043D\u043E\u0433\u043E \u0430\u043A\u0430\u0443\u043D\u0442\u0430 \u043D\u0430 \u043E\u0434\u043D\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u043D\u0438\u043A\u0430 (\u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0447\u0438 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438). \u041E\u0431\u043B\u0456\u043A\u043E\u0432\u0456 \u0437\u0430\u043F\u0438\u0441\u0438 \u0437 \u043E\u0434\u043D\u0430\u043A\u043E\u0432\u0438\u043C\u0438 IP-\u0430\u0434\u0440\u0435\u0441\u0430\u043C\u0438 \u0430\u0431\u043E GPS-\u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0430\u043C\u0438 \u043D\u0435 \u043C\u043E\u0436\u0443\u0442\u044C \u0433\u0440\u0430\u0442\u0438 \u0437\u0430 \u043E\u0434\u043D\u0438\u043C \u0441\u0442\u043E\u043B\u043E\u043C. \u0424\u0430\u0437\u0430 \u0431\u0435\u0442\u0430-\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0443 \u0442\u0440\u0438\u0432\u0430\u0454 \u043E\u0434\u0438\u043D \u0442\u0438\u0436\u0434\u0435\u043D\u044C, \u043F\u0456\u0441\u043B\u044F \u0447\u043E\u0433\u043E \u0431\u0435\u0442\u0430-\u0430\u043A\u0430\u0443\u043D\u0442\u0438 \u0431\u0443\u0434\u0443\u0442\u044C \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0456.",
            desc_12: "\u041A\u043B\u0443\u0431\u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u044C: \u0428\u0443\u043A\u0430\u0439\u0442\u0435 \u043A\u043B\u0443\u0431\u043D\u0438\u0439 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u043E\u0440 (<span class='w'>201656</span>) \u0430\u0431\u043E \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043D\u0430 \u0431\u0430\u043D\u0435\u0440 \u0443 \u043B\u043E\u0431\u0456, \u0449\u043E\u0431 \u043F\u043E\u0434\u0430\u0442\u0438 \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u0432\u0441\u0442\u0443\u043F \u0434\u043E \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u043E\u0433\u043E <span class='w'>\u043E\u0444\u0456\u0446\u0456\u0439\u043D\u043E\u0433\u043E \u043A\u043B\u0443\u0431\u0443 BC POKER</span> \u043D\u0430 \u0446\u0435\u0439 \u0456\u0432\u0435\u043D\u0442.",
            desc_13: "\u0427\u0430\u0441 \u0442\u0443\u0440\u043D\u0456\u0440\u0443: <span class='g'>28 \u043B\u044E\u0442\u043E\u0433\u043E 2024 \u0440\u043E\u043A\u0443, 01:00 - 09:00 (UTC)</span>.",
            desc_14: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0442\u0443\u0440\u043D\u0456\u0440\u0443:",
            desc_15: "1.\u0423 \u0442\u0443\u0440\u043D\u0456\u0440\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C \u0433\u0440\u0438 \u0432 \u0411\u0435\u0437\u043B\u0456\u043C\u0456\u0442\u043D\u0438\u0439 \u0422\u0435\u0445\u0430\u0441\u044C\u043A\u0438\u0439 \u0425\u043E\u043B\u0434\u0435\u043C, \u0456 \u0433\u0440\u0430\u0432\u0446\u0456 \u043C\u043E\u0436\u0443\u0442\u044C \u0437\u043D\u0430\u0439\u0442\u0438 \u0441\u043E\u0431\u0456 \u0441\u0442\u0456\u043B \u0456 \u043F\u043E\u0447\u0430\u0442\u0438 \u0433\u0440\u0430\u0442\u0438 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442. \u0411\u0435\u0437 \u0441\u0442\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F, \u0431\u0435\u0437 \u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u043E\u0457 \u0440\u043E\u0437\u0434\u0430\u0447\u0456 \u043F\u0456\u0441\u043B\u044F \u043E\u043B\u043B-\u0456\u043D\u0443.",
            desc_16: "\u041D\u0430 \u0432\u0438\u0431\u0456\u0440 \u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0454\u0442\u044C\u0441\u044F \u0442\u0440\u0438 \u0456\u0433\u0440\u043E\u0432\u0456 \u0440\u0456\u0432\u043D\u0456:",
            desc_17: "2/4 (2) [\u041C\u0430\u043B\u0438\u0439 \u0431\u043B\u0430\u0439\u043D\u0434 2, \u0412\u0435\u043B\u0438\u043A\u0438\u0439 \u0431\u043B\u0430\u0439\u043D\u0434 4, \u0410\u043D\u0442\u0435 2] \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0431\u043B\u0430\u0439\u043D\u0434\u0456\u0432,",
            desc_18: "5/10 (5) [\u041C\u0430\u043B\u0438\u0439 \u0431\u043B\u0430\u0439\u043D\u0434 5, \u0412\u0435\u043B\u0438\u043A\u0438\u0439 \u0431\u043B\u0430\u0439\u043D\u0434 10, \u0410\u043D\u0442\u0435 5] \u0431\u043B\u0430\u0439\u043D\u0434-\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430,",
            desc_19: "10/20 (10) [\u041C\u0430\u043B\u0438\u0439 \u0431\u043B\u0430\u0439\u043D\u0434 10, \u0412\u0435\u043B\u0438\u043A\u0438\u0439 \u0431\u043B\u0430\u0439\u043D\u0434 20, \u0410\u043D\u0442\u0435 10] \u0431\u043B\u0430\u0439\u043D\u0434-\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430.",
            desc_20: "2) \u041A\u043E\u0436\u0435\u043D \u0433\u0440\u0430\u0432\u0435\u0446\u044C \u043F\u043E\u0447\u0438\u043D\u0430\u0454 \u0437 10,000 \u043A\u043B\u0443\u0431\u043D\u0438\u0445 \u043E\u0447\u043E\u043A, \u0431\u0435\u0437 \u043F\u0440\u0430\u0432\u0430 \u043F\u043E\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F \u0432 \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456 \u0442\u0443\u0440\u043D\u0456\u0440\u0443. \u0423\u0447\u0430\u0441\u0442\u044C \u0430\u0431\u043E \u0441\u043F\u0440\u0438\u044F\u043D\u043D\u044F \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u043E\u043C\u0443 \u043E\u0431\u0456\u0433\u0443 \u0431\u0430\u043B\u0456\u0432 \u043F\u043E\u0437\u0430 \u043E\u0444\u0456\u0446\u0456\u0439\u043D\u0438\u043C\u0438 \u0456\u0433\u0440\u0430\u043C\u0438 \u043F\u0440\u0438\u0437\u0432\u0435\u0434\u0435 \u0434\u043E \u043D\u0435\u0433\u0430\u0439\u043D\u043E\u0457 \u0434\u0438\u0441\u043A\u0432\u0430\u043B\u0456\u0444\u0456\u043A\u0430\u0446\u0456\u0457 \u043F\u0456\u0441\u043B\u044F \u0432\u0438\u044F\u0432\u043B\u0435\u043D\u043D\u044F.",
            desc_21: "\u0420\u043E\u0437\u043F\u043E\u0434\u0456\u043B \u0432\u0438\u043D\u0430\u0433\u043E\u0440\u043E\u0434\u0438:",
            desc_22: "1.1 \u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u043F\u0440\u0438\u0437\u043E\u0432\u0438\u0439 \u0444\u043E\u043D\u0434 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C $5000 USD, \u044F\u043A\u0456 \u0431\u0443\u0434\u0443\u0442\u044C \u0440\u043E\u0437\u0456\u0433\u0440\u0430\u043D\u0456 \u0432 BCD. \u041F\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u0456 \u0442\u0443\u0440\u043D\u0456\u0440\u0443 \u043F\u0440\u0438\u0437\u0438 \u0431\u0443\u0434\u0443\u0442\u044C \u0440\u043E\u0437\u043F\u043E\u0434\u0456\u043B\u0435\u043D\u0456 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0456 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0443 \u043E\u0447\u043E\u043A, \u043F\u0440\u0438 \u0446\u044C\u043E\u043C\u0443 \u043F\u0435\u0440\u0448\u0430 \u0434\u0435\u0441\u044F\u0442\u043A\u0430 \u043F\u0435\u0440\u0435\u043C\u043E\u0436\u0446\u0456\u0432 \u043F\u043E\u0432\u0438\u043D\u043D\u0430 \u0437\u0456\u0433\u0440\u0430\u0442\u0438 \u0449\u043E\u043D\u0430\u0439\u043C\u0435\u043D\u0448\u0435 200 \u0440\u043E\u0437\u0434\u0430\u0447.",
            desc_23: "\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u0431\u0430\u043B\u0456\u0432",
            desc_24: "\u0421\u0443\u043C\u0430 \u043F\u0440\u0438\u0437\u0443 (BCD)",
            desc_25: "\u0412\u0441\u044C\u043E\u0433\u043E",
            desc_26: "*\u041F\u0456\u0441\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F \u0442\u0443\u0440\u043D\u0456\u0440\u0443 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0438 \u0431\u0443\u0434\u0443\u0442\u044C \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u0456 \u0432 \u043A\u043B\u0443\u0431\u043D\u043E\u043C\u0443 \u0447\u0430\u0442\u0456, \u0449\u043E \u0434\u043E\u0437\u0432\u043E\u043B\u0438\u0442\u044C \u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0432\u0441\u0456\u0445 \u0443\u0447\u0430\u0441\u043D\u0438\u043A\u0456\u0432 \u0432 \u043A\u0443\u0440\u0441\u0456 \u043F\u043E\u0434\u0456\u0439.",
            desc_27: "\u0417\u0430\u043A\u0440\u0438\u0432\u0430\u0454\u043C\u043E \u0432\u0441\u0435 \u0446\u0435."
        }
    };

function le(a) {
    return B[a] ? B[a] : B.en
}
const oe = "/assets/updating.65b8a453.png";

function z(a) {
    return a < 10 ? "0" + a : a
}
const re = [{
        ranking: "1",
        amount: 1e3
    }, {
        ranking: "2",
        amount: 650
    }, {
        ranking: "3",
        amount: 500
    }, {
        ranking: "4",
        amount: 350
    }, {
        ranking: "5",
        amount: 250
    }, {
        ranking: "6",
        amount: 200
    }, {
        ranking: "7",
        amount: 140
    }, {
        ranking: "8",
        amount: 100
    }, {
        ranking: "9",
        amount: 80
    }, {
        ranking: "10",
        amount: 80
    }, {
        ranking: "11~20",
        amount: 60
    }, {
        ranking: "21~30",
        amount: 45
    }, {
        ranking: "31~40",
        amount: 35
    }, {
        ranking: "41~50",
        amount: 25
    }],
    ce = L.memo(function() {
        const a = p.useRef(-1),
            i = I(),
            {
                lang: d
            } = D(),
            [l, g] = N({
                message: [],
                endTime: Date.now(),
                loading: !0,
                open: !1
            }),
            s = le(d),
            u = p.useCallback(async t => {
                try {
                    await U.get("/account/get/"), window.location.reload()
                } catch (n) {
                    g(t ? {
                        endTime: n.response.data.endTime || 0,
                        loading: !1
                    } : {
                        endTime: n.response.data.endTime || 0
                    })
                }
            }, []);
        return p.useEffect(() => {
            u(!0), setTimeout(() => {
                r.emit("ignore_sign_up_queue", !0)
            }, 200);
            const t = setInterval(() => {
                u()
            }, 6e4);
            return () => {
                clearInterval(t)
            }
        }, []), e.jsxs("div", {
            className: f(ue, l.open && "open-updating"),
            children: [i && e.jsx("img", {
                alt: "logo",
                className: "logo",
                src: r.assets("/logo/logo.png")
            }), e.jsxs("div", {
                className: "poker-updating-inner",
                children: [!i && e.jsxs("div", {
                    className: "logo-support",
                    children: [e.jsx("img", {
                        alt: "logo",
                        className: "logo",
                        src: r.assets("/logo/logo.png")
                    }), e.jsxs("button", {
                        onClick: () => {
                            var t;
                            return (t = x) == null ? void 0 : t.openLiveSupport()
                        },
                        children: [e.jsx(c, {
                            name: "Support"
                        }), e.jsx("span", {
                            children: s.desc_1
                        })]
                    })]
                }), e.jsxs("p", {
                    className: "bold_one",
                    children: [e.jsx("span", {
                        children: s.desc_2
                    }), e.jsx(A, {
                        endTime: l.endTime,
                        onEnd: () => {
                            a.current < 0 && (u(), a.current = 1)
                        },
                        children: ({
                            hours: t,
                            minutes: n,
                            seconds: o
                        }) => e.jsxs("span", {
                            className: "t",
                            children: [z(t), ":", z(n), ":", z(o)]
                        })
                    }), "."]
                }), i && e.jsxs("button", {
                    className: "live-support",
                    onClick: () => {
                        var t;
                        return (t = x) == null ? void 0 : t.openLiveSupport()
                    },
                    children: [e.jsx(c, {
                        name: "Support"
                    }), e.jsx("span", {
                        children: s.desc_1
                    })]
                }), e.jsx("p", {
                    className: "bold_two",
                    dangerouslySetInnerHTML: {
                        __html: s.desc_3
                    }
                }), e.jsxs("p", {
                    className: "bold_li f",
                    children: [e.jsx("span", {
                        children: s.desc_4
                    }), e.jsx("a", {
                        href: "https://giveaway.com/en/JFWx3e4wIh7",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: e.jsx("span", {
                            children: s.desc_5
                        })
                    })]
                }), e.jsx("p", {
                    className: "bold_li",
                    children: e.jsx("span", {
                        children: s.desc_6
                    })
                }), e.jsxs("div", {
                    className: "bold_download",
                    children: [e.jsx("span", {
                        children: s.desc_7
                    }), e.jsxs("div", {
                        className: "apps",
                        children: [e.jsxs("a", {
                            className: "app-link",
                            href: "https://g4gkjvj5.cc:18287/qabQANxs",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [e.jsxs("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                children: [e.jsx("circle", {
                                    cx: "16",
                                    cy: "16",
                                    r: "16",
                                    fill: "#00C300",
                                    fillOpacity: "0.1"
                                }), e.jsx("mask", {
                                    id: "mask0_167_115",
                                    style: {
                                        maskType: "luminance"
                                    },
                                    maskUnits: "userSpaceOnUse",
                                    x: "7",
                                    y: "4",
                                    width: "17",
                                    height: "22",
                                    children: e.jsx("path", {
                                        d: "M24 4.2634H7.00342V25.7366H24V4.2634Z",
                                        fill: "white"
                                    })
                                }), e.jsx("g", {
                                    mask: "url(#mask0_167_115)",
                                    children: e.jsx("path", {
                                        d: "M15.6885 9.14967C15.9213 9.14385 16.1528 9.10961 16.3778 9.04758H16.4836C16.7278 8.96164 16.9624 8.84791 17.1837 8.7077H17.2792C17.492 8.58299 17.6946 8.43954 17.8838 8.27671L17.9582 8.20886C18.1492 8.03569 18.3264 7.84572 18.4884 7.64218L18.5519 7.57433C18.7139 7.36045 18.859 7.133 18.9866 6.89392V6.81445C19.113 6.56761 19.2194 6.3098 19.3046 6.04358V5.98672C19.3899 5.71404 19.4503 5.43296 19.4848 5.148C19.5156 4.854 19.5156 4.55741 19.4848 4.26405C17.1722 4.53415 15.4388 6.65291 15.4969 9.13868L15.6885 9.14967ZM21.4165 17.1304C21.2079 16.5527 21.1106 15.9356 21.1299 15.3166C21.1444 14.9044 21.2122 14.496 21.3313 14.1038C21.454 13.7019 21.6293 13.32 21.8512 12.9704C22.2206 12.3902 22.6971 11.8965 23.2515 11.5191C22.5374 10.4291 21.4449 9.6905 20.2176 9.46758C19.9903 9.41976 19.7599 9.39004 19.5283 9.37712H18.2448L17.937 9.46758L17.7037 9.54706L17.4068 9.66013L17.1946 9.84171L16.8445 9.98903L16.5579 10.1137L16.3566 10.1932L16.1129 10.2727H15.9751C15.8657 10.2863 15.7556 10.2863 15.6462 10.2727C15.5404 10.2843 15.434 10.2843 15.3282 10.2727H15.2115L14.9781 10.2048L14.8082 10.137L14.5646 10.0692L14.1613 9.89921L14.0023 9.84235L13.7157 9.72927L13.5246 9.66143L13.2592 9.57096H13.0579L12.7822 9.5141H12.57L12.3154 9.43269C11.6637 9.43656 11.0192 9.57484 10.417 9.84041C8.21865 10.8801 6.86011 13.2735 7.01247 15.8374V16.9708C7.01247 17.0613 7.01247 17.3792 7.08683 17.5827C7.1612 17.7869 7.08683 17.8095 7.15031 17.9226C7.2138 18.0357 7.2138 18.2851 7.25612 18.4666C7.29844 18.6482 7.3196 18.7044 7.35165 18.8182C7.38369 18.9312 7.43629 19.158 7.4895 19.328C7.5427 19.4979 7.57414 19.5774 7.61646 19.7021L7.77547 20.1783L7.92421 20.5415C7.98769 20.6888 8.04089 20.8477 8.10438 20.9951L8.26339 21.335L8.4756 21.7769L8.65577 22.1058L8.87827 22.5142L9.06932 22.8205L9.3027 23.1946L9.50403 23.4783L9.74829 23.8072L9.96051 24.0682L10.2048 24.3519L10.4273 24.5787L10.6715 24.8165L10.894 24.998L11.1383 25.1906L11.3608 25.3263L11.5941 25.4626L11.8064 25.5421L12.0397 25.6216L12.3154 25.712H12.5597C12.8481 25.7004 13.1335 25.6474 13.408 25.5531C14.1855 25.1363 15.0325 24.8895 15.9007 24.8274C16.0773 24.8145 16.2544 24.8145 16.431 24.8274H16.6009L16.8874 24.8953L17.0676 24.9522L17.2901 25.0316L17.4812 25.1111L17.7569 25.2358L18.0011 25.3489L18.1601 25.4058L18.3723 25.4852H19.2738C19.9824 25.42 20.6469 25.0911 21.1511 24.5554C22.1287 23.5577 22.9238 22.3733 23.4951 21.0636C23.6747 20.7101 23.8373 20.3463 23.9831 19.9754C22.8113 19.4236 21.8893 18.402 21.4165 17.1304Z",
                                        fill: "#00C300"
                                    })
                                })]
                            }), e.jsx("span", {
                                className: "n",
                                children: "1"
                            })]
                        }), e.jsxs("a", {
                            className: "app-link",
                            href: "https://ask.run.javacc.xyz/38164dYC16JwHyA7K",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [e.jsxs("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                children: [e.jsx("circle", {
                                    cx: "16",
                                    cy: "16",
                                    r: "16",
                                    fill: "#00C300",
                                    fillOpacity: "0.1"
                                }), e.jsx("mask", {
                                    id: "mask0_167_115",
                                    style: {
                                        maskType: "luminance"
                                    },
                                    maskUnits: "userSpaceOnUse",
                                    x: "7",
                                    y: "4",
                                    width: "17",
                                    height: "22",
                                    children: e.jsx("path", {
                                        d: "M24 4.2634H7.00342V25.7366H24V4.2634Z",
                                        fill: "white"
                                    })
                                }), e.jsx("g", {
                                    mask: "url(#mask0_167_115)",
                                    children: e.jsx("path", {
                                        d: "M15.6885 9.14967C15.9213 9.14385 16.1528 9.10961 16.3778 9.04758H16.4836C16.7278 8.96164 16.9624 8.84791 17.1837 8.7077H17.2792C17.492 8.58299 17.6946 8.43954 17.8838 8.27671L17.9582 8.20886C18.1492 8.03569 18.3264 7.84572 18.4884 7.64218L18.5519 7.57433C18.7139 7.36045 18.859 7.133 18.9866 6.89392V6.81445C19.113 6.56761 19.2194 6.3098 19.3046 6.04358V5.98672C19.3899 5.71404 19.4503 5.43296 19.4848 5.148C19.5156 4.854 19.5156 4.55741 19.4848 4.26405C17.1722 4.53415 15.4388 6.65291 15.4969 9.13868L15.6885 9.14967ZM21.4165 17.1304C21.2079 16.5527 21.1106 15.9356 21.1299 15.3166C21.1444 14.9044 21.2122 14.496 21.3313 14.1038C21.454 13.7019 21.6293 13.32 21.8512 12.9704C22.2206 12.3902 22.6971 11.8965 23.2515 11.5191C22.5374 10.4291 21.4449 9.6905 20.2176 9.46758C19.9903 9.41976 19.7599 9.39004 19.5283 9.37712H18.2448L17.937 9.46758L17.7037 9.54706L17.4068 9.66013L17.1946 9.84171L16.8445 9.98903L16.5579 10.1137L16.3566 10.1932L16.1129 10.2727H15.9751C15.8657 10.2863 15.7556 10.2863 15.6462 10.2727C15.5404 10.2843 15.434 10.2843 15.3282 10.2727H15.2115L14.9781 10.2048L14.8082 10.137L14.5646 10.0692L14.1613 9.89921L14.0023 9.84235L13.7157 9.72927L13.5246 9.66143L13.2592 9.57096H13.0579L12.7822 9.5141H12.57L12.3154 9.43269C11.6637 9.43656 11.0192 9.57484 10.417 9.84041C8.21865 10.8801 6.86011 13.2735 7.01247 15.8374V16.9708C7.01247 17.0613 7.01247 17.3792 7.08683 17.5827C7.1612 17.7869 7.08683 17.8095 7.15031 17.9226C7.2138 18.0357 7.2138 18.2851 7.25612 18.4666C7.29844 18.6482 7.3196 18.7044 7.35165 18.8182C7.38369 18.9312 7.43629 19.158 7.4895 19.328C7.5427 19.4979 7.57414 19.5774 7.61646 19.7021L7.77547 20.1783L7.92421 20.5415C7.98769 20.6888 8.04089 20.8477 8.10438 20.9951L8.26339 21.335L8.4756 21.7769L8.65577 22.1058L8.87827 22.5142L9.06932 22.8205L9.3027 23.1946L9.50403 23.4783L9.74829 23.8072L9.96051 24.0682L10.2048 24.3519L10.4273 24.5787L10.6715 24.8165L10.894 24.998L11.1383 25.1906L11.3608 25.3263L11.5941 25.4626L11.8064 25.5421L12.0397 25.6216L12.3154 25.712H12.5597C12.8481 25.7004 13.1335 25.6474 13.408 25.5531C14.1855 25.1363 15.0325 24.8895 15.9007 24.8274C16.0773 24.8145 16.2544 24.8145 16.431 24.8274H16.6009L16.8874 24.8953L17.0676 24.9522L17.2901 25.0316L17.4812 25.1111L17.7569 25.2358L18.0011 25.3489L18.1601 25.4058L18.3723 25.4852H19.2738C19.9824 25.42 20.6469 25.0911 21.1511 24.5554C22.1287 23.5577 22.9238 22.3733 23.4951 21.0636C23.6747 20.7101 23.8373 20.3463 23.9831 19.9754C22.8113 19.4236 21.8893 18.402 21.4165 17.1304Z",
                                        fill: "#00C300"
                                    })
                                })]
                            }), e.jsx("span", {
                                className: "n",
                                children: "2"
                            })]
                        }), e.jsx("a", {
                            className: "app-link",
                            href: "http://devapi.bcpoker.com/file/download/apk/BCPoker_v1.apk",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: e.jsxs("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                children: [e.jsx("circle", {
                                    cx: "16",
                                    cy: "16",
                                    r: "16",
                                    fill: "#00C300",
                                    fillOpacity: "0.1"
                                }), e.jsx("mask", {
                                    id: "mask0_167_116",
                                    style: {
                                        maskType: "luminance"
                                    },
                                    maskUnits: "userSpaceOnUse",
                                    x: "7",
                                    y: "6",
                                    width: "18",
                                    height: "20",
                                    children: e.jsx("path", {
                                        d: "M24.1818 6H7.81812V26H24.1818V6Z",
                                        fill: "white"
                                    })
                                }), e.jsx("g", {
                                    mask: "url(#mask0_167_116)",
                                    children: e.jsx("path", {
                                        d: "M11.0892 20.9857C11.0892 21.4428 11.4572 21.817 11.9071 21.817H12.7247V24.7261C12.7247 25.4162 13.2727 25.973 13.9514 25.973C14.6302 25.973 15.1779 25.4162 15.1779 24.7261V21.8168H16.8136V24.7261C16.8136 25.4159 17.3616 25.973 18.0404 25.973C18.7192 25.973 19.2669 25.4162 19.2669 24.7261V21.8168H20.0848C20.5346 21.8168 20.9026 21.4428 20.9026 20.9854V12.6731H11.0892V20.9857ZM9.04489 12.6731C8.36611 12.6731 7.81812 13.23 7.81812 13.92V19.7388C7.81812 20.4285 8.36611 20.9857 9.04489 20.9857C9.72367 20.9857 10.2714 20.4285 10.2714 19.7388V13.92C10.2714 13.23 9.72339 12.6731 9.04489 12.6731ZM22.947 12.6731C22.2682 12.6731 21.7202 13.23 21.7202 13.92V19.7388C21.7202 20.4285 22.2682 20.9857 22.947 20.9857C23.6257 20.9857 24.1737 20.4285 24.1737 19.7388V13.92C24.1735 13.23 23.6255 12.6731 22.947 12.6731ZM18.8826 7.81867L19.9498 6.73388C20.1094 6.57176 20.1094 6.3099 19.9498 6.14779C19.7903 5.98567 19.5326 5.98567 19.3734 6.14779L18.1629 7.37391C17.5087 7.04546 16.7769 6.85441 15.9958 6.85441C15.2108 6.85441 14.4748 7.04546 13.8165 7.37812L12.6022 6.14357C12.4426 5.98146 12.185 5.98146 12.0257 6.14357C11.8662 6.30569 11.8662 6.56755 12.0257 6.72938L13.0971 7.81839C11.8828 8.72871 11.0895 10.1917 11.0895 11.8418H20.9029C20.9023 10.1877 20.1049 8.72477 18.8826 7.81867ZM14.3604 10.1793H13.5425V9.34795H14.3604V10.1793ZM18.4491 10.1793H17.6312V9.34795H18.4491V10.1793Z",
                                        fill: "#00C300"
                                    })
                                })]
                            })
                        })]
                    })]
                }), e.jsx("img", {
                    className: "updating_bg",
                    src: oe
                }), e.jsx("p", {
                    className: "bold_join",
                    children: s.desc_8
                }), e.jsxs("div", {
                    className: "share-wrap",
                    children: [e.jsx("a", {
                        href: "https://twitter.com/bcpokerofficial",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: e.jsx("img", {
                            src: m,
                            alt: ""
                        })
                    }), e.jsx("a", {
                        href: "https://t.me/bcpokerofficial",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: e.jsx("img", {
                            src: _,
                            alt: ""
                        })
                    })]
                }), e.jsxs("div", {
                    className: "open-wrap",
                    children: [e.jsxs("div", {
                        className: f("toogle-label", l.open && "open"),
                        onClick: () => g({
                            open: !l.open
                        }),
                        children: [e.jsx("p", {
                            children: s.desc_9
                        }), e.jsx(c, {
                            name: "Arrow"
                        })]
                    }), e.jsx(M, {
                        visible: l.open,
                        children: e.jsxs("div", {
                            className: "toogle-info",
                            children: [e.jsx("div", {
                                className: "toogle-sub-box",
                                children: e.jsxs("ul", {
                                    children: [e.jsx("li", {
                                        className: "f",
                                        children: s.desc_10
                                    }), e.jsx("li", {
                                        children: s.desc_11
                                    }), e.jsx("li", {
                                        dangerouslySetInnerHTML: {
                                            __html: s.desc_12
                                        }
                                    }), e.jsx("li", {
                                        dangerouslySetInnerHTML: {
                                            __html: s.desc_13
                                        }
                                    })]
                                })
                            }), e.jsxs("div", {
                                className: "toogle-sub-box two",
                                children: [e.jsxs("div", {
                                    className: "sub-title",
                                    children: [e.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "17",
                                        height: "17",
                                        viewBox: "0 0 17 17",
                                        fill: "none",
                                        children: e.jsx("path", {
                                            d: "M14.4499 13.6H3.37955C2.8194 13.6 2.54995 13.9196 2.54995 14.45V15.3C2.54995 15.7692 2.99535 16.15 3.37955 16.15H15.2999C15.2999 16.6192 14.9888 17 14.6046 17H3.09055C2.323 17 1.69995 16.2393 1.69995 15.3V0.85C1.69995 0.624566 1.7895 0.408365 1.94891 0.248959C2.10832 0.0895533 2.32452 0 2.54995 0L14.4499 0C14.6754 0 14.8916 0.0895533 15.051 0.248959C15.2104 0.408365 15.2999 0.624566 15.2999 0.85V12.75C15.2999 12.9754 15.2104 13.1916 15.051 13.351C14.8916 13.5104 14.6754 13.6 14.4499 13.6ZM4.24995 3.4V4.25H10.2V3.4H4.24995ZM11.8999 3.4V4.25H12.7499V3.4H11.8999ZM11.8999 5.95V6.8H12.7499V5.95H11.8999ZM11.8999 8.5V9.35H12.7499V8.5H11.8999ZM4.24995 5.95V6.8H10.2V5.95H4.24995ZM4.24995 8.5V9.35H10.2V8.5H4.24995ZM15.2999 14.45V15.3H3.82495C3.71223 15.3 3.60413 15.2552 3.52443 15.1755C3.44473 15.0958 3.39995 14.9877 3.39995 14.875C3.39995 14.7623 3.44473 14.6542 3.52443 14.5745C3.60413 14.4948 3.71223 14.45 3.82495 14.45H15.2999Z",
                                            fill: "#3BC117"
                                        })
                                    }), e.jsx("p", {
                                        children: s.desc_14
                                    })]
                                }), e.jsx("p", {
                                    className: "t_p",
                                    children: s.desc_15
                                }), e.jsx("p", {
                                    className: "t_p",
                                    children: s.desc_16
                                }), e.jsx("p", {
                                    className: "t_p",
                                    children: s.desc_17
                                }), e.jsx("p", {
                                    className: "t_p",
                                    children: s.desc_18
                                }), e.jsx("p", {
                                    className: "t_p",
                                    children: s.desc_19
                                }), e.jsx("p", {
                                    className: "t_p sp_two",
                                    children: s.desc_20
                                }), e.jsxs("div", {
                                    className: "sub-title",
                                    children: [e.jsxs("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "17",
                                        height: "16",
                                        viewBox: "0 0 17 16",
                                        fill: "none",
                                        children: [e.jsx("path", {
                                            d: "M7.64791 15.9992H7.52839C5.74288 15.9992 3.95821 16 2.17313 15.9992C1.78009 15.9992 1.48747 15.7711 1.4219 15.4163C1.41153 15.358 1.41153 15.2989 1.41153 15.2389C1.41112 12.4074 1.41112 10.6512 1.41153 7.81962C1.41153 7.53074 1.53313 7.41162 1.82324 7.41162C3.71873 7.41162 5.61379 7.41247 7.50927 7.40909C7.62217 7.40824 7.6504 7.4378 7.6504 7.55016C7.64708 10.6807 7.64791 12.736 7.64791 15.8665C7.64791 15.9062 7.64791 15.9468 7.64791 15.9992ZM9.57288 15.9992V15.8572C9.57288 12.7309 9.57328 10.6774 9.5708 7.55101C9.5708 7.44203 9.5953 7.40824 9.70985 7.40824C11.5393 7.41247 13.3684 7.41162 15.1975 7.41162C15.4772 7.41162 15.5972 7.52819 15.5972 7.80695C15.5976 10.6419 15.5984 12.4023 15.5972 15.2381C15.5968 15.7086 15.3037 15.9992 14.8393 15.9992C13.1314 16 11.4239 16 9.71607 16C9.6733 15.9992 9.62932 15.9992 9.57288 15.9992ZM7.63796 6.26787H7.51512C5.1527 6.26787 2.7903 6.26787 0.427895 6.26702C0.12242 6.26702 0 6.14286 0 5.83705V4.21772C0.000407992 3.94571 0.120768 3.82154 0.388902 3.82154C2.76957 3.82154 5.15066 3.82154 7.53175 3.82069C7.61144 3.82069 7.65044 3.83253 7.6496 3.92629C7.64628 4.67304 7.64795 5.41977 7.64711 6.16653C7.64708 6.19521 7.6421 6.22477 7.63796 6.26787ZM9.57288 6.26111V6.14286C9.57288 5.41048 9.57493 4.67893 9.5708 3.94741C9.57039 3.84349 9.60194 3.81984 9.70153 3.81984C11.9905 3.82154 14.2786 3.82154 16.5679 3.82154C16.8759 3.82154 17 3.94909 17 4.26166V5.86918C16.9996 6.12174 16.8614 6.26704 16.614 6.26704C14.2993 6.26789 11.9851 6.26789 9.67039 6.26704C9.6455 6.26702 9.62018 6.26449 9.57288 6.26111ZM8.52117 2.66423C6.82903 2.66423 5.13694 2.66423 3.4444 2.6634C3.3423 2.6634 3.23688 2.65917 3.13892 2.63383C2.90401 2.57218 2.78489 2.36774 2.83885 2.13206C2.85544 2.05687 2.88243 1.98338 2.91563 1.91412C3.15551 1.41997 3.39707 0.925801 3.64028 0.433312C3.85984 -0.0110336 4.29687 -0.125906 4.71066 0.148641C5.7163 0.817671 6.7207 1.48838 7.72508 2.15911C8.22605 2.49278 8.7519 2.49616 9.25161 2.16417C10.2535 1.49599 11.2546 0.828664 12.2565 0.160465C12.6948 -0.131798 13.1314 -0.0186259 13.3725 0.449367C13.6228 0.934224 13.8722 1.41997 14.12 1.90483C14.1516 1.96818 14.1794 2.03323 14.1985 2.09995C14.281 2.39309 14.1208 2.62791 13.8191 2.65832C13.7461 2.66423 13.6726 2.66423 13.5987 2.66423L8.52117 2.66423Z",
                                            fill: "url(#paint0_linear_32_5203)"
                                        }), e.jsx("defs", {
                                            children: e.jsxs("linearGradient", {
                                                id: "paint0_linear_32_5203",
                                                x1: "8.5",
                                                y1: "0",
                                                x2: "8.5",
                                                y2: "16",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [e.jsx("stop", {
                                                    stopColor: "#FFEA29"
                                                }), e.jsx("stop", {
                                                    offset: "1",
                                                    stopColor: "#FF9C29"
                                                })]
                                            })
                                        })]
                                    }), e.jsx("p", {
                                        children: s.desc_21
                                    })]
                                }), e.jsx("p", {
                                    className: "t_p",
                                    children: s.desc_22
                                }), e.jsxs("table", {
                                    border: 1,
                                    children: [e.jsx("thead", {
                                        children: e.jsxs("tr", {
                                            children: [e.jsx("th", {
                                                children: s.desc_23
                                            }), e.jsx("th", {
                                                children: s.desc_24
                                            })]
                                        })
                                    }), e.jsxs("tbody", {
                                        children: [re.map((t, n) => e.jsxs("tr", {
                                            children: [e.jsx("td", {
                                                children: t.ranking
                                            }), e.jsx("td", {
                                                children: t.amount
                                            })]
                                        }, "tr-" + n)), e.jsxs("tr", {
                                            children: [e.jsx("td", {
                                                children: s.desc_25
                                            }), e.jsx("td", {
                                                children: "5000"
                                            })]
                                        })]
                                    })]
                                }), e.jsx("p", {
                                    className: "g_p",
                                    children: s.desc_26
                                })]
                            }), e.jsxs("button", {
                                className: "close-btn",
                                onClick: () => g({
                                    open: !1
                                }),
                                children: [e.jsx("span", {
                                    children: s.desc_27
                                }), e.jsx(c, {
                                    name: "Arrow"
                                })]
                            })]
                        })
                    })]
                })]
            })]
        })
    }),
    ue = "pdpd2k2",
    pe = ce;

function me() {
    const {
        t: a
    } = v();
    return e.jsx("div", {
        className: _e,
        children: e.jsxs("div", {
            className: "box",
            children: [e.jsx("img", {
                src: r.assets("/common/init_wrong.png")
            }), e.jsx("div", {
                className: "msg",
                children: a("Something went wrong.")
            }), e.jsxs("div", {
                className: "btns",
                children: [e.jsxs(h, {
                    onClick: () => {
                        var i;
                        return (i = x) == null ? void 0 : i.openLiveSupport()
                    },
                    type: "gray",
                    children: [e.jsx(c, {
                        name: "Support"
                    }), e.jsx("span", {
                        children: a("Live Support")
                    })]
                }), e.jsx(h, {
                    onClick: () => window.location.reload(),
                    type: "conic",
                    children: a("Refresh now")
                })]
            })]
        })
    })
}
const _e = "in01idv";
export {
    K as BlockPage, me as InitError, pe as PokerUpdating, ie as Updating, O as showBlock, Y as showGBBlock
};