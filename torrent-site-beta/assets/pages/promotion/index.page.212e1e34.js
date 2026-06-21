import {
    j as t
} from "../../chunk-a4af42e8.js";
import {
    r
} from "../../chunk-73e80d68.js";
import {
    a as m,
    cT as a
} from "../../chunk-b53b00e3.js";
import {
    e
} from "../../chunk-2d134749.js";
import {
    g as s
} from "../../chunk-7459b96e.js";
import {
    l as n
} from "../../chunk-654ef298.js";
import "../../chunk-cf010ec4.js";
import "../../chunk-07977b38.js";
import "../../chunk-0e835458.js";
import "../../chunk-0e1ef679.js";
const i = () => n("modules/bonus").then(o => o.asyncComponents.Promotion()),
    p = r.lazy(i);

function c() {
    return r.useEffect(() => {
        m.emit("ad_track", "other_events", {
            e: "enterPromote"
        })
    }, []), t.jsx(r.Suspense, {
        fallback: t.jsx(a, {}),
        children: t.jsx(p, {})
    })
}
const f = ({
    ctx: o
}) => ({
    data: e(),
    documentProps: s(o.lang, "promotion")
});
export {
    c as Page, f as onPageData
};