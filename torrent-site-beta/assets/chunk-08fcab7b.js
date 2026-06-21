import {
    j as t
} from "./chunk-a4af42e8.js";
import {
    r as n
} from "./chunk-73e80d68.js";
import {
    ez as r,
    ds as u,
    a as h,
    ed as p,
    e6 as d
} from "./chunk-b53b00e3.js";
import {
    l as c
} from "./chunk-654ef298.js";
const m = () => c("modules/wallet");

function e(i) {
    return n.lazy(async function() {
        return await (await m())[i]()
    })
}
const j = e("FiatTran"),
    b = e("ChannelWallet"),
    A = e("DepositDetail"),
    D = e("WithdrawDetail"),
    g = e("Turnover"),
    x = e("Deposit"),
    f = e("BcdRelaease"),
    w = e("BonusRelaease"),
    _ = e("BclAbout"),
    k = e("JbAbout"),
    H = e("BcdAbout"),
    y = e("AddCard");

function o({
    link: i
}) {
    const a = p();
    return d(() => {
        a(i, {
            replace: !0
        })
    }, [i]), null
}
const B = e("WalletPage");

function T() {
    const {
        isBrHost: i,
        isKenyaHost: a,
        isSpHost: l
    } = r.getHostType(u.host), s = i || a || l;
    h.emit("inject_dialog", [{
        path: "#/brwallet/*",
        element: s ? t.jsx(b, {}) : t.jsx(o, {
            link: "/wallet/*"
        }),
        isDialog: s,
        isAuth: !0
    }, {
        path: "#/deposit/*",
        element: s ? t.jsx(o, {
            link: "#/brwallet/deposit"
        }) : t.jsx(x, {}),
        isDialog: !s,
        isAuth: !0
    }, {
        path: "#/rollover",
        element: t.jsx(g, {
            isDialog: !0
        }),
        isDialog: !0,
        isAuth: !0
    }, {
        path: "#/user/buy-crypto/*",
        element: t.jsx(j, {}),
        isAuth: !0,
        isHook: !0
    }, {
        path: "#/about_bonuscoin",
        element: t.jsx(f, {}),
        isDialog: !0,
        isAuth: !0
    }, {
        path: "#/about_bonusfiat",
        element: t.jsx(w, {}),
        isDialog: !0,
        isAuth: !0
    }, {
        path: "#/about_ticketcoin",
        element: t.jsx(_, {}),
        isDialog: !0,
        isAuth: !0
    }, {
        path: "#/about_bcdcoin",
        element: t.jsx(H, {}),
        isDialog: !0,
        isAuth: !0
    }, {
        path: "#/about_jbcoin",
        element: t.jsx(k, {}),
        isDialog: !0,
        isAuth: !0
    }, {
        path: "#/deposit_detail/:orderId/",
        element: t.jsx(A, {}),
        isDialog: !0,
        isAuth: !0,
        isHook: !0
    }, {
        path: "#/withdraw_detail/:orderId/",
        element: t.jsx(D, {}),
        isDialog: !0,
        isAuth: !0,
        isHook: !0
    }, {
        path: "#/add_card",
        element: t.jsx(y, {}),
        isDialog: !0,
        isAuth: !0
    }])
}
export {
    B as W, T as i
};