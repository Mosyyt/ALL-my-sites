import {
    j as o
} from "../../chunk-a4af42e8.js";
import {
    r as n
} from "../../chunk-73e80d68.js";
import {
    l as t
} from "../../chunk-654ef298.js";
import {
    cT as a
} from "../../chunk-b53b00e3.js";
import "../../chunk-cf010ec4.js";
const e = () => t("modules/bonus");

function i(r) {
    return n.lazy(async function() {
        const {
            asyncComponents: s
        } = await e();
        return s[r]()
    })
}
const m = i("VipPage");

function c() {
    return o.jsx(n.Suspense, {
        fallback: o.jsx(a, {}),
        children: o.jsx(m, {})
    })
}
export {
    c as Page
};