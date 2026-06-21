import {
    r as h,
    c as _
} from "./vendor-BvKcHqfU.js";
const v = "modulepreload",
    E = function(t) {
        return "/modules/chat/" + t
    },
    u = {},
    d = function(n, l, m) {
        let c = Promise.resolve();
        if (l && l.length > 0) {
            const s = document.getElementsByTagName("link");
            c = Promise.all(l.map(e => {
                if (e = E(e), e in u) return;
                u[e] = !0;
                const o = e.endsWith(".css"),
                    f = o ? '[rel="stylesheet"]' : "";
                if (!!m)
                    for (let i = s.length - 1; i >= 0; i--) {
                        const a = s[i];
                        if (a.href === e && (!o || a.rel === "stylesheet")) return
                    } else if (document.querySelector(`link[href="${e}"]${f}`)) return;
                const r = document.createElement("link");
                if (r.rel = o ? "stylesheet" : v, o || (r.as = "script", r.crossOrigin = ""), r.href = e, document.head.appendChild(r), o) return new Promise((i, a) => {
                    r.addEventListener("load", i), r.addEventListener("error", () => a(new Error(`Unable to preload CSS for ${e}`)))
                })
            }))
        }
        return c.then(() => n()).catch(s => {
            const e = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (e.payload = s, window.dispatchEvent(e), !e.defaultPrevented) throw s
        })
    },
    y = async t => (await d(() =>
        import ("./PageContext-DEm1w7kM.js").then(n => n.P), __vite__mapDeps([0, 1]))).onMessage(t),
    P = async t => {
        const n = (await d(() =>
            import ("./App-Blojnalt.js"), __vite__mapDeps([2, 1, 0, 3]))).default;
        return h(() => _(n, {
            get bridge() {
                return t.bridge
            }
        }), t.el)
    };
export {
    d as _, y as o, P as r
};

function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["PageContext-DEm1w7kM.js", "vendor-BvKcHqfU.js", "App-Blojnalt.js", "App-BoFRFWYF.css"]
    }
    return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}