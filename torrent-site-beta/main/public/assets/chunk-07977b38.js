import {
    dl as e,
    ds as i
} from "./chunk-b53b00e3.js";
import "./chunk-73e80d68.js";
import {
    a as n
} from "./chunk-0e835458.js";
import {
    a as o
} from "./chunk-0e1ef679.js";
const r = /^\/([^\/\?]+)(.*)$/,
    c = new Set(Object.keys(o));

function d(t) {
    let s = "en";
    const a = t.match(r);
    return a && c.has(a[1]) && (s = a[1], t = a[2] || "/", t.startsWith("/") || (t = `/${t}`)), {
        lang: s,
        urlOriginal: t
    }
}
async function m() {
    {
        await e.initData;
        const t = i.isDevHost ? "dev" : await n.getDistinctId();
        return {
            areaCode: e.state.areaCode,
            distinctId: t
        }
    }
}
export {
    d as e, m as g
};