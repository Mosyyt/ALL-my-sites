import {
    j as n
} from "../../chunk-a4af42e8.js";
import {
    r as o,
    R as i
} from "../../chunk-73e80d68.js";
import {
    a as e
} from "../../chunk-b53b00e3.js";
import {
    l as r
} from "../../chunk-654ef298.js";
import "../../chunk-cf010ec4.js";
const t = () => r("modules/account").then(s => s.auth()),
    c = o.lazy(t);

function u() {
    return o.useEffect(() => {
        const s = () => {
            window.opener != null ? window.opener.postMessage({
                event: "signin_success",
                data: "signin success"
            }, "*") : window.close()
        };
        return e.on("signin-success", s), e.on("regist-success", s), e.emit("ignore_sign_up_queue", !0), () => {
            e.off("signin-success", s), e.off("regist-success", s), e.emit("ignore_sign_up_queue", !1)
        }
    }, []), n.jsx(c, {})
}
const a = i.memo(function({
    children: s
}) {
    return n.jsx("div", {
        className: "login-page-wrap",
        children: s
    })
});
export {
    a as Layout, u as Page
};