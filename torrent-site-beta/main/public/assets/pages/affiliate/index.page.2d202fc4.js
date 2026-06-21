import {
    j as n
} from "../../chunk-a4af42e8.js";
import {
    g as a
} from "../../chunk-7459b96e.js";
import {
    r
} from "../../chunk-73e80d68.js";
import {
    l as s
} from "../../chunk-654ef298.js";
import "../../chunk-cf010ec4.js";
const i = () => s("modules/bonus");

function m(o) {
    return r.lazy(async function() {
        const {
            asyncComponents: t
        } = await i();
        return t[o]()
    })
}
const e = m("Affiliate");

function c() {
    return n.jsx(e, {})
}
const f = ({
    ctx: o
}) => ({
    documentProps: a(o.lang, "affiliate")
});
export {
    c as Page, f as onPageData
};