import {
    j as e
} from "../chunk-a4af42e8.js";
import {
    r as t
} from "../chunk-73e80d68.js";
import {
    eg as m,
    ev as l,
    ed as h,
    cA as d,
    dg as p,
    cS as f
} from "../chunk-b53b00e3.js";
import "../chunk-cf010ec4.js";

function u() {
    const o = m(),
        {
            t: s
        } = l(),
        i = h(),
        [r, c] = t.useState(5);
    t.useEffect(() => {
        if (r === 0) {
            i("/", {
                replace: !0
            });
            return
        }
        const a = setTimeout(() => c(r - 1), 1e3);
        return () => clearTimeout(a)
    }, [r]);
    const n = s("home");
    return o.is404 ? e.jsxs(d, {
        className: x,
        type: "notfound",
        children: [e.jsx("div", {
            className: "title",
            children: s("Uh Oh! The page you're looking for cannot be found!")
        }), e.jsx("div", {
            children: e.jsxs(p, {
                home: n,
                time: r,
                children: ["Redirecting to ", e.jsx(f, {
                    className: "cl-primary",
                    href: "/",
                    replace: !0,
                    children: {
                        home: n
                    }
                }), " in ", e.jsxs("span", {
                    children: [{
                        time: r
                    }, "s"]
                })]
            })
        })]
    }) : e.jsxs(e.Fragment, {
        children: [e.jsx("h1", {
            children: "500 Internal Server Error"
        }), e.jsx("p", {
            children: "Something went wrong."
        })]
    })
}
const x = "s1o7ocf6";
export {
    u as Page
};