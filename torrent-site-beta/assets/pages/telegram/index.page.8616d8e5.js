import {
    j as e
} from "../../chunk-a4af42e8.js";
import {
    R as c,
    r
} from "../../chunk-73e80d68.js";
import {
    ev as p,
    a as n,
    ez as d,
    dy as g,
    d0 as f,
    ds as i,
    cJ as m
} from "../../chunk-b53b00e3.js";
import "../../chunk-cf010ec4.js";
const _ = "/assets/teleicon_1.cd503cd8.png",
    b = "/assets/teleicon_2.ee95bfe0.png",
    x = "/assets/teleicon_3.359f3de1.png",
    B = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEKSURBVHgB7dmxTcNQEMbx756goMsIjwmALs4IaRgFb4C9QUZgBZaI0sUbxBtABwLh4zsCEUX6y0X3k15ySZr3l+1IlgX/vM3nVURaAe75seKEcF8D34avaeqvNpvx8P3f8NE0DwqsEEAR6S7X6/5ntpfPxeIxyubNpNq9N01rs9hpw6Id4nllyJ0dgQ4xzex6LXSDoOzPpkD1FnHVguAywFsGeMsAbxngLQO8ZYC3DPCWAd7CB1yU5RKRiRICy2vAWwZ4ywBvGeAtA7xlgLcM8HYWASPiGizgGXENdkdWOWy5Zojnmg/pZeTQI57+d+97PBKdxvDC1R5N4g+V64lrq6dnx7XS/Sl/8A3p7YTvRvA7ZAAAAABJRU5ErkJggg==",
    w = "/assets/teleicon_5.b53731b8.png",
    v = "/assets/teleicon_6.8976f7fd.png",
    C = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEuSURBVHgB7dq/SsNQFMfx38ltwaWQJZkjFKwgqG/gG/RR1Ccw2RzzKn0LNzMoiosZnDLFIVNsj+eGFvoGpwfOB9r86dJvOLdDE8KRNE2L+Xz+QERrZi5wWpr4Gsex6vu+PZykw06WZfeyqWGAXOCy67oq7of4luf5k2yeYcfdYrH4HYbhhfZj8w17ehmn2yAlcWxuYM9ZCIESWazXsGtNsngZhiUwzgO0eYA2D9DmAdpmP8slLPMR0uYB2jxAmwdo8wBtHqDNA7SZDyD+uvJ/5jR5gDYP0OYB2jxAmwRQC6uYGwngDawiNMQfqwJh9iqHKazZ/p0ndPnZYscVrGFU8btPi5hW73U8ARt6ueCPdPFWxgM6/mQapySUIIp370/r8QOWHxvebsC7epqavX+XbU7QKJxdJAAAAABJRU5ErkJggg==",
    u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFJSURBVHgB7do9TsNAEIbhb6aCDjqgMheA0KA4BwBCkyvQp4g5gZ2WyhyBnoaKhAskXXyDuALKdCBF3mFtyRFFKNFkpXkkJ/5p9vVf4yX8cnTzGpFIAvCAgAhbxGeHeH64xH9YD4eQxWLrMSIq/F9ROTfen8/Ldj+3K8fXbyMWWhJ49NfgNYlIxy93TLRc93ppu78JOLmapgSXIxBOJPuO46Re5/q2AUmGwPi7JP3qdiMmhwxhOvDPRcIEOkeg/FUYsP/tIFwRI3AWoM0CtFmANgvQZgHaLECbBWizAG0WoM0CtFmANgvQZgHaLECbBWizAG0WoK0OKBGuwn+lxAsCVU8/4Iokh9AKAarnTfDnpF8KVWMExok0kz6ah/hjepuDJJSIlQD3fvBZvbF5C71P+pkjORWRJwgK7Bg/6NIvj/7MX+zNZpuJKT+kP2FZwV+roAAAAABJRU5ErkJggg==",
    j = "/assets/teleicon_9.2230beb0.png",
    U = "/assets/teleicon_10.baa0e52e.png",
    Q = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEvSURBVHgB7dpNbsIwEAXgNxaV2h1HSNVtpbY7zBHY9CilJ6gjcYBchUsAu+YGcAR2/MfMBIFyg2HQfIvETjZ+iW1FsQkdm8GgIKIxAd9cLXBHuF01n+pT05Qvi8Xqdv1a2Mf4k4EKBgSi9DSblW1ZDofh8M9K40WTc9rGOJYySbfhREvYs+YgX/IGEmzqy3gN7ANGyWQTkPMn7CoCjDMfoBdGI1hGmcEwHwPaPIA28wHo7T35LKTJA2jzANo8gDYPoM0DaPMA2jyANv8roc0DaPMA2nrHyQSW0S5Gn0Y1PUSAFeyqAw+AKYyS7QfXhe5/rvdhDC90vwbZOMFvoYQx3Ph200c7iJ/n80ouwIY1P/BfbnySCnXvSHfiU+IuJav3d7UAni+TzZS//qvudpszprNbG4BLvnkAAAAASUVORK5CYII=",
    R = "/assets/teleicon_12.10023c58.png",
    N = "/assets/teleicon_13.79bec736.png",
    y = "/assets/teleicon_14.8fb28d97.png",
    I = "/assets/teleicon_15.669a23a6.png",
    S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEDSURBVHgB7Zm9kcJADIWlje6yiy/yVXCQQQWElAJUgN0BrZDRAWS4A1wCGUOCkDDMMFDAQzPvm5F3vJvoW8t/I5UnzKzyYe4x9ajks2jv0ahq97bqyc8sD8vX5JeWj6gUUevL5iD5OHoMix9qycmPxzwE/iUv0yghk8QUSQ4F0FAADQXQUACN/k42fBMjoQAaCqChABoKoKEAGgqgoQAaPY/H/B9AQgE0FEBDATQUQBMCneSlLf4dsZakqGqrp9GoKqp76fuuqbiY/ZXv3a7zq9BIMjz5JnK/3cRf2+0qJiQHR9/whSdfx4k+r0Q5+VB7SUX3fiAfhPUPm7X35Vex84/5K0r7o7zTDHJmAAAAAElFTkSuQmCC",
    D = "/assets/teleicon_17.f8a7b4c2.png",
    X = "/assets/teleicon_18.fd5f6ded.png",
    F = "/assets/teleicon_19.4749433c.png",
    Y = "/assets/teleicon_20.0f83b43a.png",
    A = {
        teleicon_1: _,
        teleicon_2: b,
        teleicon_3: x,
        teleicon_4: B,
        teleicon_5: w,
        teleicon_6: v,
        teleicon_7: C,
        teleicon_8: u,
        teleicon_9: j,
        teleicon_10: U,
        teleicon_11: Q,
        teleicon_12: R,
        teleicon_13: N,
        teleicon_14: y,
        teleicon_15: I,
        teleicon_16: S,
        teleicon_17: D,
        teleicon_18: X,
        teleicon_19: F,
        teleicon_20: Y
    },
    E = [{
        label: "Sports",
        icon: A.teleicon_1,
        href: "https://t.me/bcgamesports"
    }, {
        label: "India",
        icon: A.teleicon_2,
        href: "https://t.me/bcgame_india"
    }, {
        label: "Portugu\xEAs",
        icon: A.teleicon_17,
        href: "https://t.me/bcgamenotificacoes"
    }, {
        label: "Filipino",
        icon: A.teleicon_3,
        href: "https://t.me/bcgame_philippines"
    }, {
        label: "Deutsche",
        icon: A.teleicon_7,
        href: "https://t.me/bcgame_german"
    }, {
        label: "Indonesia",
        icon: A.teleicon_4,
        href: "https://t.me/bcgame_indo"
    }, {
        label: "\u0627\u0631\u062F\u0648",
        icon: A.teleicon_10,
        href: "https://t.me/bcgame_pakistan"
    }, {
        label: "\uD55C\uAD6D\uC778",
        icon: A.teleicon_13,
        href: "https://t.me/bcgamekoreachannel"
    }, {
        label: "\u65E5\u672C\u8A9E",
        icon: A.teleicon_12,
        href: "https://t.me/bcgamejapan"
    }, {
        label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
        icon: A.teleicon_16,
        href: "https://t.me/bcgame_cis"
    }, {
        label: "Fran\xE7ais",
        icon: A.teleicon_8,
        href: "https://t.me/bcgame_france"
    }, {
        label: "Espa\xF1ol",
        icon: A.teleicon_9,
        href: "https://t.me/bcgame_spanish"
    }, {
        label: "Ti\u1EBFng Vi\u1EC7t",
        icon: A.teleicon_6,
        href: "https://t.me/bcgame_vietnam"
    }, {
        label: "\u0E41\u0E1A\u0E1A\u0E44\u0E17\u0E22",
        icon: A.teleicon_11,
        href: "https://t.me/bcgame_channel_thailand"
    }, {
        label: "Argentina",
        icon: A.teleicon_14,
        href: "https://t.me/bcgame_argentina1"
    }, {
        label: "Melayu",
        icon: A.teleicon_15,
        href: "https://t.me/bcgame_malay"
    }, {
        label: "\u0641\u0627\u0631\u0633\u06CC",
        icon: A.teleicon_18,
        href: "https://t.me/bcgame_persia1"
    }, {
        label: "\u1019\u103C\u1014\u103A\u1019\u102C",
        icon: A.teleicon_5,
        href: "https://t.me/BCGAME_Myanmar_Channel"
    }, {
        label: "Poker",
        icon: A.teleicon_19,
        href: "https://t.me/bcpokerofficial"
    }, {
        label: "U.K.",
        icon: A.teleicon_20,
        href: "https://t.me/bc_princess"
    }],
    J = c.memo(function() {
        const {
            t: s
        } = p(), h = new Date(Date.now()).getFullYear();
        r.useEffect(() => {
            const t = setTimeout(() => {
                n.emit("ignore_sign_up_queue", !0)
            }, 200);
            return () => {
                t && clearTimeout(t), n.emit("ignore_sign_up_queue", !1)
            }
        }, []);
        const o = r.useCallback(t => {
            try {
                d.copyToClipboard(t), g(s("Copied"))
            } catch (a) {
                g(a)
            }
        }, []);
        return e.jsxs("div", {
            className: G,
            children: [e.jsx("div", {
                className: "bg"
            }), e.jsxs(f, {
                className: "main-bg",
                children: [e.jsxs("div", {
                    className: "logo",
                    children: [e.jsx("img", {
                        alt: "logo",
                        src: n.assets("/logo/logo_small.png")
                    }), e.jsxs("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "92",
                        height: "93",
                        viewBox: "0 0 92 93",
                        fill: "none",
                        children: [e.jsx("g", {
                            filter: "url(#filter0_d_247_264)",
                            children: e.jsx("rect", {
                                x: "6",
                                y: "3",
                                width: "80",
                                height: "80",
                                rx: "15.1899",
                                fill: "#101112"
                            })
                        }), e.jsx("defs", {
                            children: e.jsxs("filter", {
                                id: "filter0_d_247_264",
                                x: "0.27848",
                                y: "0.822783",
                                width: "91.443",
                                height: "91.443",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [e.jsx("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), e.jsx("feColorMatrix", { in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }), e.jsx("feOffset", {
                                    dy: "3.5443"
                                }), e.jsx("feGaussianBlur", {
                                    stdDeviation: "2.86076"
                                }), e.jsx("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "out"
                                }), e.jsx("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0.153781 0 0 0 0 0.470947 0 0 0 0 0.0685725 0 0 0 0.25 0"
                                }), e.jsx("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_247_264"
                                }), e.jsx("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_247_264",
                                    result: "shape"
                                })]
                            })
                        })]
                    })]
                }), e.jsxs("p", {
                    className: "host",
                    children: ["@", i.host.toUpperCase()]
                }), e.jsx("p", {
                    className: "desc ttu",
                    children: s("Crypto Casino Games & Casino Slot Games")
                }), e.jsx("p", {
                    className: "title ttu",
                    children: s("Global Telegram Channel")
                }), e.jsxs("div", {
                    className: "list",
                    children: [e.jsxs("div", {
                        className: "tele-item",
                        onClick: () => {
                            window.open("https://t.me/bcgamewin")
                        },
                        children: [e.jsx("div", {
                            className: "item-logo bc",
                            children: e.jsx("img", {
                                alt: "logo",
                                src: n.assets("/logo/logo_small.png")
                            })
                        }), e.jsx("p", {
                            className: "name",
                            children: i.host.toUpperCase()
                        }), e.jsx("button", {
                            onClick: t => {
                                t.stopPropagation(), t.preventDefault(), o("https://t.me/bcgamewin")
                            },
                            children: e.jsx(m, {
                                name: "Copy"
                            })
                        })]
                    }), E.map((t, a) => e.jsxs("div", {
                        className: "tele-item",
                        onClick: () => {
                            window.open(t.href)
                        },
                        children: [e.jsx("div", {
                            className: "item-logo",
                            children: e.jsx("img", {
                                alt: "logo",
                                src: t.icon
                            })
                        }), e.jsx("p", {
                            className: "name",
                            children: t.label
                        }), e.jsx("button", {
                            onClick: l => {
                                l.stopPropagation(), l.preventDefault(), o(t.href)
                            },
                            children: e.jsx(m, {
                                name: "Copy"
                            })
                        })]
                    }, "tele-item-" + a))]
                }), e.jsxs("p", {
                    className: "copyright ttu",
                    children: ["\xA9", h, " ", i.host, " ", s("ALL RIGHT RESERVED")]
                })]
            })]
        })
    }),
    G = "g1hgieoh";

function W() {
    return e.jsx(J, {})
}
const M = c.memo(function({
    children: s
}) {
    return e.jsx(e.Fragment, {
        children: s
    })
});
export {
    M as Layout, W as Page
};