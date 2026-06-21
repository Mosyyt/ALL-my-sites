import {
    j as r
} from "../../../chunk-a4af42e8.js";
import {
    ev as i,
    dg as f,
    e5 as v,
    cS as u
} from "../../../chunk-b53b00e3.js";
import {
    r as d
} from "../../../chunk-73e80d68.js";
import {
    c as x
} from "../../../chunk-5bcb444f.js";
import {
    a as g
} from "../../../chunk-0e835458.js";
import {
    l as h
} from "../../../chunk-e570733e.js";
import {
    G as j
} from "../../../chunk-78c5b721.js";
import {
    G as N
} from "../../../chunk-420c54b8.js";
import {
    G as b
} from "../../../chunk-a21360ec.js";
import {
    a as t
} from "../../../chunk-394d30c6.js";
import {
    g as c,
    n as I
} from "../../../chunk-2d134749.js";
import {
    b as y
} from "../../../chunk-7459b96e.js";
import "../../../chunk-cf010ec4.js";
import "../../../chunk-19b7f447.js";
import "../../../chunk-421da83a.js";
import "../../../chunk-07977b38.js";
import "../../../chunk-0e1ef679.js";

function L({
    name: e,
    disabled: s
}) {
    const o = () => {
        var a;
        (a = h) == null || a.openLiveSupport(), g.trackEvent("sidebar_click", {
            button_name: "live_support"
        })
    };
    return i(), s ? r.jsx("div", {
        onClick: o,
        className: P,
        children: r.jsxs(f, {
            name: e,
            i18nKey: "trans.mainpage.casino.desc",
            children: ["Sorry, ", {
                name: e
            }, " is temporarily disabled for some reason. Please ", r.jsx("span", {
                className: "cl-primary",
                children: "contact customer support"
            }), " for help, or try another game."]
        })
    }) : null
}
const P = "sfgio8q",
    k = function() {
        const {
            t: e
        } = i(), s = v(), o = t().providerInfo.read(), a = [{
            label: e("Casino"),
            path: "/casino"
        }, {
            label: o.providerName,
            path: ""
        }];
        return r.jsxs(r.Fragment, {
            children: [r.jsx(G, {}), r.jsxs("div", {
                className: x(w, "page-max-width-wrap"),
                children: [r.jsx(N, {
                    backStyle: s,
                    list: a
                }), r.jsx("div", {
                    className: "filter-wrap",
                    children: r.jsx(u, {
                        href: "/providers",
                        children: e("View All Providers")
                    })
                }), r.jsx(_, {}), r.jsx(S, {})]
            })]
        })
    };

function _() {
    const {
        gameList: e
    } = t(), s = t().providerInfo.read(), {
        t: o
    } = i();
    return r.jsxs(r.Fragment, {
        children: [r.jsxs("div", {
            className: "tit",
            children: [s.providerName, " ", o("Games")]
        }), r.jsx(j, {
            source: e,
            className: "provider-game-list"
        })]
    })
}

function S() {
    const {
        t: e
    } = i(), s = t(), [o, a] = d.useState("");
    return d.useEffect(() => {
        s.providerInfo.promise.then(n => a(`/gamelist/provider_recommend?providerName=${n.providerName}`))
    }, [s.providerInfo]), r.jsx(b, {
        source: s.relatedList,
        title: e("You May Also Like"),
        line: 1,
        link: o
    })
}

function G() {
    const e = t().providerInfo.read();
    return r.jsx(L, {
        disabled: e.disabled,
        name: e.providerName
    })
}
const w = "soflym9";

function A() {
    return r.jsx(k, {})
}
const C = ({
    ctx: e
}) => {
    const {
        routeParams: s,
        lang: o
    } = e, {
        urlParsed: a
    } = e, n = parseInt(a.search.page || "1"), m = s.providerName, p = c({
        sectionId: "provider_list",
        providerName: m,
        page: n
    });
    return {
        providerInfo: I(s.providerName),
        gameList: p,
        relatedList: c({
            sectionId: "provider_recommend"
        }),
        documentProps: p.then(l => y(o, m, l.pageList.total))
    }
};
export {
    A as Page, C as onPageData
};