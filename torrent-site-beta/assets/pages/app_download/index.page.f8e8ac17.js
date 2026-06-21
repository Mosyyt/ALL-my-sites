import {
    j as t
} from "../../chunk-a4af42e8.js";
import {
    r
} from "../../chunk-73e80d68.js";
import {
    e3 as m,
    a as u,
    cJ as f,
    ev as a,
    ds as d,
    cl as h,
    eg as b,
    ed as N,
    cp as v,
    e5 as x
} from "../../chunk-b53b00e3.js";
import {
    G as w,
    a as P
} from "../../chunk-6d8ed563.js";
import {
    g as p
} from "../../chunk-7459b96e.js";
import "../../chunk-cf010ec4.js";
import "../../chunk-5bcb444f.js";
const I = "/assets/ios_icon.dd4131cd.svg",
    O = "/assets/android_icon.f7a93e8d.svg";

function i(s) {
    return n => (n || (s = s.replace(".png", "-w.png")), u.assets(s))
}

function l() {
    const s = m();
    return {
        get fios1() {
            return i("/appsetup/ios-1@2x.png")(s)
        },
        get fios2() {
            return i("/appsetup/ios-2@2x.png")(s)
        },
        get fios3() {
            return i("/appsetup/ios-3@2x.png")(s)
        },
        get ios1() {
            return i("/appsetup/ios1@2x.png")(s)
        },
        get ios2() {
            return i("/appsetup/ios2@2x.png")(s)
        },
        get ios3() {
            return i("/appsetup/ios3@2x.png")(s)
        },
        get android1() {
            return i("/appsetup/android1@2x.png")(s)
        },
        get android2() {
            return i("/appsetup/android2@2x.png")(s)
        },
        get android3() {
            return i("/appsetup/android3@2x.png")(s)
        },
        iosIcon: I,
        androidIcon: O
    }
}

function g({
    isIOS: s
}) {
    const {
        t: n
    } = a(), [e, o] = r.useState(1);
    return t.jsxs("div", {
        className: k,
        children: [t.jsx(C, {
            index: e,
            changeStep: o
        }), t.jsx(H, {
            index: e,
            isIOS: s
        }), t.jsxs("div", {
            className: "bottom",
            children: [t.jsx(T, {
                index: e,
                isIOS: s
            }), t.jsx(h, {
                type: "conic",
                onClick: () => {
                    o(e === 3 ? 1 : e + 1)
                },
                children: n("Next")
            })]
        })]
    })
}
const k = "mexfbxr";

function C({
    index: s,
    changeStep: n
}) {
    const {
        t: e
    } = a();
    return t.jsxs("div", {
        className: $,
        children: [t.jsx("div", {
            className: `step-item ${s===1?"active":""}`,
            onClick: () => n(1),
            children: e("Step 01")
        }), t.jsx("div", {
            className: `step-item ${s===2?"active":""}`,
            onClick: () => n(2),
            children: e("Step 02")
        }), t.jsx("div", {
            className: `step-item ${s===3?"active":""}`,
            onClick: () => n(3),
            children: e("Step 03")
        })]
    })
}
const $ = "s1ngrvm4";

function A(s, n) {
    const {
        t: e
    } = a();
    if (n) switch (s) {
        case 1:
            return {
                title: e("1.Open website in Safari browser."),
                desc: e("Click to open the Safari browser on the phone desktop.")
            };
        case 2:
            return {
                title: e("2. Tap Sharing button."),
                desc: e("Use Safari Explore APP and go to {{host}}, Then tap the Sharing Button.", {
                    host: d.buildHost
                })
            };
        default:
            return {
                title: e("3.Tap Add to Home Screen."),
                desc: e("Press Add to Home Screen in the list popup to add to the home screen. You may need to swipe left to locate the Add to Home Screen button.")
            }
    } else switch (s) {
        case 1:
            return {
                title: e("1.Open website in Chrome browser."),
                desc: e("Tap to open Google Chrome on the phone desktop")
            };
        case 2:
            return {
                title: e("2.Tap menu button."),
                desc: e("Use Google Chrome APP to go {{host}} and then click the button", {
                    host: d.buildHost
                })
            };
        default:
            return {
                title: e("3.Tap menu button."),
                desc: e("Press Add to Home Screen in the list popup to add to the home screen.")
            }
    }
}
const T = r.memo(function({
        index: s,
        isIOS: n
    }) {
        const e = A(s, n);
        return t.jsxs("div", {
            className: _,
            children: [t.jsx("div", {
                className: "tip-title",
                children: e.title
            }), t.jsxs("div", {
                className: "tip-desc",
                children: [e.desc, s === 2 && t.jsxs("span", {
                    className: "more",
                    children: ['"', t.jsx(f, {
                        name: "More"
                    }), '".']
                })]
            })]
        })
    }),
    _ = "s1ymeymh";

function H({
    index: s,
    isIOS: n
}) {
    const e = l(),
        o = n ? e[`ios${s}`] : e[`android${s}`],
        c = e[`fios${s}`];
    return t.jsxs("div", {
        className: y,
        children: [t.jsx("img", {
            src: o,
            className: "img1"
        }), t.jsx("img", {
            src: c,
            className: "img2"
        })]
    })
}
const y = "sws62y9";

function j({
    isIOS: s
}) {
    const {
        t: n
    } = a(), [e, o] = r.useState(1);
    return t.jsxs("div", {
        className: G,
        children: [t.jsx(U, {
            index: e,
            changeStep: o
        }), t.jsx(B, {
            index: e,
            isIOS: s
        }), t.jsx(Y, {
            index: e,
            isIOS: s
        }), t.jsx("div", {
            className: "bottom",
            children: t.jsx(h, {
                type: "conic",
                onClick: () => {
                    o(e === 3 ? 1 : e + 1)
                },
                children: n("Next")
            })
        })]
    })
}
const G = "peyo6k9";

function U({
    index: s,
    changeStep: n
}) {
    const {
        t: e
    } = a();
    return t.jsxs("div", {
        className: E,
        children: [t.jsx("div", {
            className: `step-item ${s===1?"active":""}`,
            onClick: () => n(1),
            children: e("Step 01")
        }), t.jsx("div", {
            className: `step-item ${s===2?"active":""}`,
            onClick: () => n(2),
            children: e("Step 02")
        }), t.jsx("div", {
            className: `step-item ${s===3?"active":""}`,
            onClick: () => n(3),
            children: e("Step 03")
        })]
    })
}
const E = "s105pam2";

function F(s, n) {
    const {
        t: e
    } = a();
    if (n) switch (s) {
        case 1:
            return {
                title: "1." + e("Open website in Safari browser"),
                desc: e("Tap to open Safari browser on your phone")
            };
        case 2:
            return {
                title: "2." + e("Tap Sharing button."),
                desc: e("Use Safari Explore APP and go to {{host}}, Then tap the Sharing Button", {
                    host: d.buildHost
                })
            };
        default:
            return {
                title: "3." + e("Tap Add to Home Screen."),
                desc: e("Press Add to Home Screen in the list popup to add to the home screen. You may need to swipe left to locate the Add to Home Screen button")
            }
    } else switch (s) {
        case 1:
            return {
                title: "1." + e("Open website in Chrome browser"),
                desc: e("Tap to open Google Chrome on your phone")
            };
        case 2:
            return {
                title: "2." + e("Tap menu button."),
                desc: e("Use Google Chrome APP to go {{host}} and then click the button", {
                    host: d.buildHost
                })
            };
        default:
            return {
                title: "3." + e("Tap menu button."),
                desc: e("Press Install app in the list popup to add to the home screen")
            }
    }
}

function B({
    index: s,
    isIOS: n
}) {
    const e = F(s, n),
        o = l();
    return t.jsxs("div", {
        className: M,
        children: [t.jsx("div", {
            className: "tip-title",
            children: e.title
        }), t.jsxs("div", {
            className: "tip-desc",
            children: [e.desc, s === 2 && t.jsxs(t.Fragment, {
                children: ['"', t.jsx("span", {
                    className: "icon-bg",
                    style: {
                        backgroundImage: `url(${n?o.iosIcon:o.androidIcon})`
                    }
                }), '"']
            }), "."]
        })]
    })
}
const M = "s1tadtm2",
    Y = r.memo(function({
        index: s,
        isIOS: n
    }) {
        const e = l(),
            o = n ? e[`ios${s}`] : e[`android${s}`],
            c = e[`fios${s}`];
        return t.jsxs("div", {
            className: D,
            children: [t.jsx("img", {
                src: o,
                className: "img1"
            }), t.jsx("img", {
                src: c,
                className: "img2"
            })]
        })
    }),
    D = "s5rs8mo",
    q = () => x() ? t.jsx(g, {
        isIOS: !0
    }) : t.jsx(j, {
        isIOS: !0
    }),
    J = () => x() ? t.jsx(g, {
        isIOS: !1
    }) : t.jsx(j, {
        isIOS: !1
    });

function L() {
    const {
        t: s
    } = a(), {
        routeParams: n
    } = b(), e = n["*"], o = N(), c = m();
    r.useEffect(() => {
        e === "/app_download" && o("/app_download/ios", {
            replace: !0
        })
    }, [e]);
    const S = r.useMemo(() => t.jsx(w, {
        prex: "/app_download/",
        routes: [{
            label: s("For iOS Setup"),
            path: "ios",
            element: t.jsx(q, {})
        }, {
            label: s("For Android Setup"),
            path: "android",
            element: t.jsx(J, {})
        }]
    }), []);
    return t.jsxs("div", {
        className: `${W} appsetup-wrap page-max-width-wrap`,
        id: "app_setup",
        children: [t.jsxs(P, {
            children: [t.jsxs("p", {
                className: "title",
                children: [t.jsx("img", {
                    src: u.assets(`/logo/logo_small${c?"":"_w"}.png`),
                    className: "logo"
                }), t.jsx("span", {
                    className: "title",
                    children: s("{{host}} APP Setup", {
                        host: d.buildHost
                    })
                })]
            }), t.jsx(v, {
                onClick: () => o("/")
            })]
        }), S]
    })
}
const V = ({
        ctx: s
    }) => {
        const {
            urlParsed: n,
            lang: e
        } = s;
        return n.pathname === "/app_download/ios" ? {
            documentProps: p(e, "download_ios")
        } : n.pathname === "/app_download/android" ? {
            documentProps: p(e, "download_android")
        } : {
            documentProps: p(s.lang, "app_download")
        }
    },
    W = "a1sbeejq";
export {
    L as Page, V as onPageData
};