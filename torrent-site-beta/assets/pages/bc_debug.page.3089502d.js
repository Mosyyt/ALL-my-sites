import {
    j as s
} from "../chunk-a4af42e8.js";
import {
    a as e
} from "../chunk-b53b00e3.js";
import "../chunk-73e80d68.js";
import "../chunk-cf010ec4.js";

function t() {
    return s.jsxs("div", {
        className: r,
        children: [s.jsx("h2", {
            children: "track event test"
        }), s.jsxs("div", {
            children: [s.jsx("button", {
                onClick: () => e.emit("ad_track", "regist_success", {
                    userId: "0"
                }),
                children: "regist"
            }), s.jsx("button", {
                onClick: () => e.emit("ad_track", "ftd_success", {
                    sales: "0",
                    userId: "0",
                    orderid: "0"
                }),
                children: "first deposit"
            }), s.jsx("button", {
                onClick: () => e.emit("ad_track", "deposit_success", {
                    sales: "0",
                    userId: "0",
                    orderid: "0"
                }),
                children: "deposit_success"
            })]
        })]
    })
}
const r = "t1wl3ejd";
export {
    t as Page
};