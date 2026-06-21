import {
    j as s
} from "../../chunk-a4af42e8.js";
import {
    G as n
} from "../../chunk-78c5b721.js";
import {
    dL as t,
    d6 as m,
    ev as i,
    cS as e,
    cJ as c,
    du as d
} from "../../chunk-b53b00e3.js";
import "../../chunk-73e80d68.js";
import {
    c as p
} from "../../chunk-5bcb444f.js";
import "../../chunk-0e835458.js";
import "../../chunk-cf010ec4.js";

function u(a) {
    return d.post("/home/game/bonusGames/", {
        areaCode: a
    })
}

function f() {
    const a = t().areaCode,
        o = new m({
            data: u(a)
        }).suspensed.data,
        {
            t: r
        } = i();
    return s.jsxs("div", {
        className: p(x, "page-max-width-wrap"),
        children: [s.jsxs("div", {
            className: l,
            children: [s.jsx(e, {
                href: "/casino",
                children: r("Casino")
            }), s.jsx(c, {
                name: "Arrow"
            }), s.jsx(e, {
                className: "active",
                children: r("Games for bonus")
            })]
        }), s.jsx(n, {
            source: o,
            more: !1
        })]
    })
}

function j() {
    return s.jsx(f, {})
}
const x = "sjpw9ub",
    l = "nb4d5bg";
export {
    j as Page
};