import {
    j as e
} from "../../../chunk-a4af42e8.js";
import {
    r as s
} from "../../../chunk-73e80d68.js";
import {
    cT as a
} from "../../../chunk-b53b00e3.js";
import {
    m as i
} from "../../../chunk-2d134749.js";
import {
    l as m
} from "../../../chunk-654ef298.js";
import "../../../chunk-cf010ec4.js";
import "../../../chunk-07977b38.js";
import "../../../chunk-0e835458.js";
import "../../../chunk-0e1ef679.js";
const c = () => m("modules/bonus").then(o => o.asyncComponents.PromotionDetail()),
    u = s.lazy(c);

function p() {
    return e.jsx(s.Suspense, {
        fallback: e.jsx(a, {}),
        children: e.jsx(u, {})
    })
}
const l = ({
    ctx: o
}) => {
    const {
        routeParams: t,
        lang: n
    } = o, r = t.detailId;
    return {
        data: i(r, n),
        documentProps: Promise.resolve({
            title: "BC.GAME: Your quick guide to our exciting online casino promotions",
            keywords: "BC.GAME bonuses, BC.GAME bonuscode, BCgame, bonuses, casino bonuses",
            description: "Make the most out of your betting experience by earning BC.GAME bonuses that can make online casino games and sports betting feel more special! "
        })
    }
};
export {
    p as Page, l as onPageData
};