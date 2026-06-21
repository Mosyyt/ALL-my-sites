import {
    j as c
} from "../../../chunk-a4af42e8.js";
import {
    G as n
} from "../../../chunk-d4fa1232.js";
import {
    g as d,
    o as u
} from "../../../chunk-2d134749.js";
import {
    g as N
} from "../../../chunk-7459b96e.js";
import {
    G as a
} from "../../../chunk-19b7f447.js";
import "../../../chunk-73e80d68.js";
import "../../../chunk-b53b00e3.js";
import "../../../chunk-cf010ec4.js";
import "../../../chunk-5bcb444f.js";
import "../../../chunk-78c5b721.js";
import "../../../chunk-0e835458.js";
import "../../../chunk-8888a3c4.js";
import "../../../chunk-5fced113.js";
import "../../../chunk-420c54b8.js";
import "../../../chunk-07977b38.js";
import "../../../chunk-0e1ef679.js";

function P() {
    return c.jsx(n, {
        isTag: !0
    })
}
const f = ({
    ctx: o
}) => {
    const {
        routeParams: m
    } = o, {
        urlParsed: r
    } = o, i = parseInt(r.search.page || "1"), s = r.search.providerName || "", p = r.search.sort || "", g = r.search.showingBlocked || "", e = m.tagName, t = a.tagNameDecode(e);
    return {
        data: d({
            sectionId: a.getTagNameSectionId(e),
            tag: t,
            page: i,
            providerName: s,
            sortBy: p,
            showingBlocked: Number(g)
        }),
        providerList: u(a.getProviderTagName(t)),
        documentProps: N(o.lang, "tableGame")
    }
};
export {
    P as Page, f as onPageData
};