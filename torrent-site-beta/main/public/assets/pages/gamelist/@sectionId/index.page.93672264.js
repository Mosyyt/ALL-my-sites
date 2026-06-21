import {
    j as I
} from "../../../chunk-a4af42e8.js";
import {
    G as v
} from "../../../chunk-d4fa1232.js";
import {
    g as a,
    l as g
} from "../../../chunk-2d134749.js";
import {
    G as s
} from "../../../chunk-19b7f447.js";
import {
    g as P,
    a as u
} from "../../../chunk-7459b96e.js";
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

function f() {
    return I.jsx(v, {})
}
const y = ({
    ctx: p
}) => {
    const {
        routeParams: l,
        urlParsed: r,
        lang: c
    } = p, o = l.sectionId, t = parseInt(r.search.page || "1"), i = r.search.providerName || "";
    let e = r.search.sort || "";
    const m = r.search.gameUnique || "",
        d = r.search.showingBlocked || "",
        h = r.search.tag,
        n = r.search.fromCategory;
    return o === "slots" ? (e = e || "popular", {
        data: a({
            sectionId: s.sectionIdDecode(o, e),
            gameUnique: m,
            page: t,
            providerName: i,
            sortBy: e,
            showingBlocked: Number(d)
        }),
        providerList: g(1)
    }) : o === "live" ? (e = e || "youmaylike", {
        data: a({
            sectionId: s.sectionIdDecode(o, e),
            gameUnique: m,
            page: t,
            providerName: i,
            sortBy: e,
            showingBlocked: Number(d)
        }),
        providerList: g(4),
        documentProps: P(p.lang, "live")
    }) : n ? {
        data: a({
            sectionId: s.sectionIdDecode(o, e),
            page: t,
            tag: h,
            fromCategory: Number(n)
        }),
        documentProps: Promise.resolve(u(c, o))
    } : {
        data: a({
            sectionId: s.sectionIdDecode(o, e),
            gameUnique: m,
            page: t,
            providerName: i,
            sortBy: e
        }),
        documentProps: Promise.resolve(u(c, o))
    }
};
export {
    f as Page, y as onPageData
};