import {
    j as o
} from "../../chunk-a4af42e8.js";
import {
    dx as e,
    dA as r,
    a as i
} from "../../chunk-b53b00e3.js";
import "../../chunk-73e80d68.js";
import {
    g as p
} from "../../chunk-7459b96e.js";
import {
    l
} from "../../chunk-654ef298.js";
import {
    a as m,
    G as n
} from "../../chunk-6d8ed563.js";
import "../../chunk-cf010ec4.js";
import "../../chunk-5bcb444f.js";
const t = () => l("modules/static").then(a => a.help()),
    c = e(t);

function g() {
    return o.jsx(c, {
        GroupPageTitleWrap: m,
        GroupPageLayout: n
    })
}
const u = ({
        ctx: a
    }) => {
        const {
            urlParsed: f,
            lang: s
        } = a;
        return {
            documentProps: p(s, "help")
        }
    },
    P = r(t, "BonusTCDialog"),
    h = r(t, "PrivacyDialog"),
    d = async () => {
        i.emit("inject_dialog", [{
            path: "#/help_privacy",
            element: o.jsx(h, {}),
            isDialog: !0
        }, {
            path: "#/help_bonus",
            element: o.jsx(P, {}),
            isDialog: !0
        }])
    };
export {
    g as Page, d as installHelp, u as onPageData
};