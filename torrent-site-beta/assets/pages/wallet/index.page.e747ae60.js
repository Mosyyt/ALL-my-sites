import {
    j as o
} from "../../chunk-a4af42e8.js";
import {
    R as m
} from "../../chunk-73e80d68.js";
import {
    B as a,
    e as p
} from "../../chunk-b894b9de.js";
import {
    e5 as n,
    ez as l,
    ds as c
} from "../../chunk-b53b00e3.js";
import {
    W as u
} from "../../chunk-08fcab7b.js";
import "../../chunk-5bcb444f.js";
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

function d() {
    return o.jsx(u, {})
}
const x = m.memo(function({
        children: r
    }) {
        return n() ? o.jsx(a, {
            className: g,
            children: r
        }) : o.jsx("div", {
            className: y,
            children: o.jsx(p, {
                children: r
            })
        })
    }),
    f = !0,
    h = async r => {
        const {
            isBrHost: i,
            isKenyaHost: s
        } = l.getHostType(c.host), t = r.routeParams["*"];
        if ((i || s) && !(t === "transaction" || t === "rollover" || t === "bet-history")) {
            const e = r.urlParsed.searchOriginal;
            return {
                pageContext: {
                    redirectTo: `#/brwallet/${t||"deposit"}${e||""}`
                }
            }
        }
        return {
            pageContext: {}
        }
    },
    g = "sw8zg3l",
    y = "s8llxxl";
export {
    x as Layout, d as Page, f as auth, h as onBeforeRender
};