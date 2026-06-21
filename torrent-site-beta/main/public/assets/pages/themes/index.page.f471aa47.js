import {
    j as m
} from "../../chunk-a4af42e8.js";
import {
    g as a
} from "../../chunk-2d134749.js";
import {
    a as e
} from "../../chunk-3e48406a.js";
import "../../chunk-73e80d68.js";
import "../../chunk-b53b00e3.js";
import "../../chunk-cf010ec4.js";
import "../../chunk-07977b38.js";
import "../../chunk-0e835458.js";
import "../../chunk-0e1ef679.js";
import "../../chunk-421da83a.js";
import "../../chunk-5bcb444f.js";
import "../../chunk-420c54b8.js";

function p() {
    return m.jsx(e, {})
}
const i = ({
    ctx: r
}) => {
    const {
        urlParsed: t
    } = r, o = parseInt(t.search.page || "1");
    return {
        themesData: a({
            sectionId: "tag_recommend",
            page: o
        })
    }
};
export {
    p as Page, i as onPageData
};