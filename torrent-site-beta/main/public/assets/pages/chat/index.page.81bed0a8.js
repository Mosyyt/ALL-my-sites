import {
    j as r
} from "../../chunk-a4af42e8.js";
import {
    ev as m,
    ea as o,
    cS as e,
    cJ as a
} from "../../chunk-b53b00e3.js";
import {
    R as p,
    r as c
} from "../../chunk-73e80d68.js";
import {
    B as n,
    g as h,
    h as l
} from "../../chunk-b894b9de.js";
import "../../chunk-cf010ec4.js";
import "../../chunk-5bcb444f.js";
import "../../chunk-357b411e.js";
import "../../chunk-27d137a6.js";
import "../../chunk-03c302ce.js";
import "../../chunk-0e1ef679.js";
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

function j() {
    const {
        t
    } = m(), {
        pathname: i
    } = o(), s = c.useRef(i);
    return i.startsWith("/chat/") && (s.current = i), r.jsxs("div", {
        className: d,
        children: [r.jsxs("div", {
            className: "header",
            children: [r.jsx("h2", {
                children: t("Private Messages")
            }), r.jsxs("div", {
                className: "flex-center",
                children: [r.jsx(h, {}), r.jsx(e, {
                    href: "/#" + s.current,
                    children: r.jsx(a, {
                        name: "QuitFullscreen"
                    })
                })]
            })]
        }), r.jsx(l, {
            path: s.current
        })]
    })
}
const u = p.memo(function({
        children: t
    }) {
        return r.jsx(n, {
            className: x,
            children: t
        })
    }),
    x = "b14qh8ry",
    d = "pz4j6jo";
export {
    u as Layout, j as Page
};