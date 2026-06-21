import {
    j as i
} from "../../chunk-a4af42e8.js";
import {
    G as m
} from "../../chunk-19b7f447.js";
import {
    F as p
} from "../../chunk-7ea34fc4.js";
import {
    c as a,
    g as e
} from "../../chunk-2d134749.js";
import "../../chunk-73e80d68.js";
import "../../chunk-b53b00e3.js";
import "../../chunk-cf010ec4.js";
import "../../chunk-78c5b721.js";
import "../../chunk-5bcb444f.js";
import "../../chunk-0e835458.js";
import "../../chunk-420c54b8.js";
import "../../chunk-a21360ec.js";
import "../../chunk-421da83a.js";
import "../../chunk-07977b38.js";
import "../../chunk-0e1ef679.js";

function s() {
    return i.jsx(p, {
        tit: "favorites"
    })
}
const c = ({
    ctx: o
}) => {
    const {
        urlParsed: r
    } = o, t = parseInt(r.search.page || "1");
    return {
        data: a(t),
        recommend: e({
            sectionId: m.sectionIdDecode("picks-for-you"),
            pageSize: 20
        })
    }
};
export {
    s as Page, c as onPageData
};