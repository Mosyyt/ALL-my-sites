var Mt = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var Lt = Object.prototype.hasOwnProperty,
    Nt = Object.prototype.propertyIsEnumerable;
var i = (t, a, o) => a in t ? Mt(t, a, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : t[a] = o,
    _ = (t, a) => {
        for (var o in a || (a = {})) Lt.call(a, o) && i(t, o, a[o]);
        if (l)
            for (var o of l(a)) Nt.call(a, o) && i(t, o, a[o]);
        return t
    };
import {
    H as It,
    I as Rt
} from "./chunk-c23b3c52.js";
import {
    _ as e
} from "./chunk-cf010ec4.js";
import {
    e as At
} from "./chunk-07977b38.js";
import {
    u as Vt
} from "./chunk-35f3c0e2.js";
import {
    __tla as ht
} from "./chunk-b53b00e3.js";
import "./chunk-73e80d68.js";
import {
    __tla as wt
} from "./chunk-0e835458.js";
import {
    __tla as Ft
} from "./chunk-0e1ef679.js";
Promise.all([(() => {
    try {
        return ht
    } catch (t) {}
})(), (() => {
    try {
        return wt
    } catch (t) {}
})(), (() => {
    try {
        return Ft
    } catch (t) {}
})()]).then(async () => {
    const t = ["Page", "onPageData"],
        a = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: t
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        o = ["Page", "onPageData"],
        s = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: o
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        d = ["Page", "Layout"],
        u = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: d
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        x = ["Page"],
        b = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: x
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        m = ["Page", "onPageData"],
        c = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: m
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        O = ["Page", "onPageData"],
        P = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: O
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        f = ["Page", "onPageData"],
        y = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: f
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        j = ["Page", "Layout"],
        S = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: j
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        T = ["Page", "Layout"],
        E = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: T
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        v = ["Page", "onPageData"],
        D = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: v
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        z = ["Page", "Layout"],
        M = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: z
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        L = ["Page", "onPageData", "onBeforeRender"],
        N = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: L
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        I = ["Page", "onPageData"],
        R = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: I
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        A = ["Page"],
        V = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: A
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        h = ["Page", "onPageData", "installHelp"],
        w = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: h
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        F = ["Page", "onPageData"],
        B = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: F
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        C = ["Page"],
        q = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: C
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        H = ["Page", "Layout", "onPageData"],
        U = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: H
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        G = ["Page", "onPageData"],
        k = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: G
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        J = ["Page", "onPageData"],
        K = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: J
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Q = ["Page", "onPageData"],
        W = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: Q
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        X = ["Page"],
        Y = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: X
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Z = ["Page", "onPageData"],
        $ = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: Z
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        ee = ["Page", "onPageData"],
        te = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: ee
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        ae = ["Page", "auth", "onPageData"],
        oe = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: ae
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        re = ["Page", "onPageData"],
        _e = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: re
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        pe = ["Page"],
        ge = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: pe
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        ne = ["Page"],
        le = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: ne
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        ie = ["Page", "onPageData"],
        se = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: ie
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        de = ["Page", "onPageData"],
        ue = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: de
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        xe = ["Page", "Layout"],
        be = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: xe
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        me = ["Page", "onPageData"],
        ce = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: me
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Oe = ["Page"],
        Pe = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: Oe
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        fe = ["Page"],
        ye = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: fe
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        je = ["Page"],
        Se = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: je
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Te = ["Page"],
        Ee = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: Te
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        ve = ["Page", "Layout", "auth", "onBeforeRender"],
        De = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: ve
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        ze = ["Page"],
        Me = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: ze
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Le = ["render", "passToClient"],
        Ne = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: Le
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Ie = "/app_download/*",
        Re = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: Ie
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Ae = "/auth/*",
        Ve = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: Ae
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        he = "/chat/*",
        we = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: he
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Fe = "/events/*",
        Be = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: Fe
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Ce = "/forum_event/@eventId",
        qe = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: Ce
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        He = "/help/*",
        Ue = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: He
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Ge = "/landing/*",
        ke = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: Ge
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Je = "/lottery/*",
        Ke = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: Je
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Qe = "/promotions/*",
        We = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: Qe
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Xe = "/racing/*",
        Ye = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: Xe
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Ze = "/setting/*",
        $e = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: Ze
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        et = "/sponsorship/*",
        tt = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: et
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        at = "/trading/*",
        ot = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: at
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        rt = "/wallet/*",
        _t = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: rt
        }, Symbol.toStringTag, {
            value: "Module"
        }));

    function pt(r) {
        const {
            urlOriginal: Dt,
            lang: zt
        } = At(r.urlOriginal);
        return {
            pageContext: {
                lang: zt,
                urlOriginal: Dt
            }
        }
    }
    const gt = Object.freeze(Object.defineProperty({
            __proto__: null,
            onBeforeRoute: pt
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        nt = ["render", "prefetchStaticAssets", "clientRouting", "hydrationCanBeAborted"],
        lt = Object.freeze(Object.defineProperty({
            __proto__: null,
            exportNames: nt
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        g = {},
        n = {},
        it = {},
        p = {},
        st = [],
        dt = {},
        ut = !0,
        xt = Object.assign({
            "/pages/affiliate/index.page.tsx": () => e(() =>
                import ("./pages/affiliate/index.page.2d202fc4.js"), ["assets/pages/affiliate/index.page.2d202fc4.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-7459b96e.js", "assets/chunk-654ef298.js", "assets/chunk-cf010ec4.js"]),
            "/pages/app_download/index.page.tsx": () => e(() =>
                import ("./pages/app_download/index.page.f8e8ac17.js"), ["assets/pages/app_download/index.page.f8e8ac17.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-6d8ed563.js", "assets/chunk-5bcb444f.js", "assets/GroupPageLayout.6f234913.css", "assets/chunk-7459b96e.js", "assets/index.page.d0373635.css"]),
            "/pages/auth/index.page.tsx": () => e(() =>
                import ("./pages/auth/index.page.a1848e64.js"), ["assets/pages/auth/index.page.a1848e64.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-654ef298.js"]),
            "/pages/bc_debug.page.tsx": () => e(() =>
                import ("./pages/bc_debug.page.3089502d.js"), ["assets/pages/bc_debug.page.3089502d.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/bc_debug.page.d23af930.css"]),
            "/pages/bingolist/index.page.tsx": () => e(() =>
                import ("./pages/bingolist/index.page.38aa7de6.js"), ["assets/pages/bingolist/index.page.38aa7de6.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-5bcb444f.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-a21360ec.js", "assets/chunk-78c5b721.js", "assets/chunk-0e835458.js", "assets/GameList.30b187ac.css", "assets/chunk-19b7f447.js", "assets/chunk-421da83a.js", "assets/GridScrollList.65d17988.css", "assets/GameRecommend.b27d187b.css", "assets/chunk-47df8c47.js", "assets/chunk-2d134749.js", "assets/chunk-07977b38.js", "assets/chunk-0e1ef679.js", "assets/index.page.439c4357.css"]),
            "/pages/bonus/index.page.tsx": () => e(() =>
                import ("./pages/bonus/index.page.a9224c22.js"), ["assets/pages/bonus/index.page.a9224c22.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-7459b96e.js", "assets/chunk-1371f12f.js", "assets/chunk-654ef298.js"]),
            "/pages/casino/index.page.tsx": () => e(() =>
                import ("./pages/casino/index.page.225730ae.js"), ["assets/pages/casino/index.page.225730ae.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-394d30c6.js", "assets/chunk-07977b38.js", "assets/chunk-0e835458.js", "assets/chunk-0e1ef679.js", "assets/chunk-5bcb444f.js", "assets/chunk-a21360ec.js", "assets/chunk-78c5b721.js", "assets/GameList.30b187ac.css", "assets/chunk-19b7f447.js", "assets/chunk-421da83a.js", "assets/GridScrollList.65d17988.css", "assets/GameRecommend.b27d187b.css", "assets/chunk-8888a3c4.js", "assets/index.b6401c0d.css", "assets/chunk-cc8c19f6.js", "assets/chunk-f9d60830.js", "assets/chunk-47df8c47.js", "assets/chunk-3dc03e47.js", "assets/HighRollers.c708b407.css", "assets/chunk-661881bd.js", "assets/index.8c347120.css", "assets/chunk-3e48406a.js", "assets/chunk-420c54b8.js", "assets/GameNavPath.e1cc4a4a.css", "assets/index.5fdfe620.css", "assets/chunk-1d6a2d71.js", "assets/index.659f9969.css", "assets/chunk-000ed202.js", "assets/SearchWrap.82780ba6.css", "assets/chunk-2d134749.js", "assets/chunk-7459b96e.js", "assets/index.page.f41200a6.css"]),
            "/pages/chat/index.page.tsx": () => e(() =>
                import ("./pages/chat/index.page.81bed0a8.js"), ["assets/pages/chat/index.page.81bed0a8.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-b894b9de.js", "assets/chunk-5bcb444f.js", "assets/chunk-357b411e.js", "assets/chunk-27d137a6.js", "assets/MatchIcon.8462f48e.css", "assets/chunk-03c302ce.js", "assets/chunk-0e1ef679.js", "assets/chunk-5fced113.js", "assets/chunk-0e835458.js", "assets/chunk-654ef298.js", "assets/chunk-35f3c0e2.js", "assets/chunk-c23b3c52.js", "assets/chunk-e570733e.js", "assets/chunk-68de7933.js", "assets/chunk-07977b38.js", "assets/chunk-47df8c47.js", "assets/chunk-3dc03e47.js", "assets/chunk-e20af49b.js", "assets/chunk-6e6e4b85.js", "assets/Emoji.5e52f519.css", "assets/chunk-b8efc996.js", "assets/chunk-000ed202.js", "assets/SearchWrap.82780ba6.css", "assets/chunk-78c5b721.js", "assets/GameList.30b187ac.css", "assets/index.8e819340.css", "assets/index.page.b63a7c5c.css"]),
            "/pages/events/index.page.tsx": () => e(() =>
                import ("./pages/events/index.page.6b90625d.js"), ["assets/pages/events/index.page.6b90625d.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-b894b9de.js", "assets/chunk-5bcb444f.js", "assets/chunk-357b411e.js", "assets/chunk-27d137a6.js", "assets/MatchIcon.8462f48e.css", "assets/chunk-03c302ce.js", "assets/chunk-0e1ef679.js", "assets/chunk-5fced113.js", "assets/chunk-0e835458.js", "assets/chunk-654ef298.js", "assets/chunk-35f3c0e2.js", "assets/chunk-c23b3c52.js", "assets/chunk-e570733e.js", "assets/chunk-68de7933.js", "assets/chunk-07977b38.js", "assets/chunk-47df8c47.js", "assets/chunk-3dc03e47.js", "assets/chunk-e20af49b.js", "assets/chunk-6e6e4b85.js", "assets/Emoji.5e52f519.css", "assets/chunk-b8efc996.js", "assets/chunk-000ed202.js", "assets/SearchWrap.82780ba6.css", "assets/chunk-78c5b721.js", "assets/GameList.30b187ac.css", "assets/index.8e819340.css"]),
            "/pages/favorite/index.page.tsx": () => e(() =>
                import ("./pages/favorite/index.page.d99b966f.js"), ["assets/pages/favorite/index.page.d99b966f.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-19b7f447.js", "assets/chunk-7ea34fc4.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-78c5b721.js", "assets/chunk-5bcb444f.js", "assets/chunk-0e835458.js", "assets/GameList.30b187ac.css", "assets/chunk-420c54b8.js", "assets/GameNavPath.e1cc4a4a.css", "assets/chunk-a21360ec.js", "assets/chunk-421da83a.js", "assets/GridScrollList.65d17988.css", "assets/GameRecommend.b27d187b.css", "assets/index.405e4894.css", "assets/chunk-2d134749.js", "assets/chunk-07977b38.js", "assets/chunk-0e1ef679.js"]),
            "/pages/forum_event/index.page.tsx": () => e(() =>
                import ("./pages/forum_event/index.page.40b6a752.js"), ["assets/pages/forum_event/index.page.40b6a752.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b894b9de.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-5bcb444f.js", "assets/chunk-357b411e.js", "assets/chunk-27d137a6.js", "assets/MatchIcon.8462f48e.css", "assets/chunk-03c302ce.js", "assets/chunk-0e1ef679.js", "assets/chunk-5fced113.js", "assets/chunk-0e835458.js", "assets/chunk-654ef298.js", "assets/chunk-35f3c0e2.js", "assets/chunk-c23b3c52.js", "assets/chunk-e570733e.js", "assets/chunk-68de7933.js", "assets/chunk-07977b38.js", "assets/chunk-47df8c47.js", "assets/chunk-3dc03e47.js", "assets/chunk-e20af49b.js", "assets/chunk-6e6e4b85.js", "assets/Emoji.5e52f519.css", "assets/chunk-b8efc996.js", "assets/chunk-000ed202.js", "assets/SearchWrap.82780ba6.css", "assets/chunk-78c5b721.js", "assets/GameList.30b187ac.css", "assets/index.8e819340.css", "assets/index.page.1e47e7dc.css"]),
            "/pages/game/@gameUnique/index.page.tsx": () => e(() =>
                import ("./pages/game/@gameUnique/index.page.d6fe3555.js").then(async r => (await r.__tla, r)), ["assets/pages/game/@gameUnique/index.page.d6fe3555.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-5bcb444f.js", "assets/chunk-a21360ec.js", "assets/chunk-78c5b721.js", "assets/chunk-0e835458.js", "assets/GameList.30b187ac.css", "assets/chunk-19b7f447.js", "assets/chunk-421da83a.js", "assets/GridScrollList.65d17988.css", "assets/GameRecommend.b27d187b.css", "assets/chunk-1d6a2d71.js", "assets/chunk-394d30c6.js", "assets/chunk-07977b38.js", "assets/chunk-0e1ef679.js", "assets/chunk-420c54b8.js", "assets/GameNavPath.e1cc4a4a.css", "assets/index.659f9969.css", "assets/chunk-21fa96d0.js", "assets/chunk-654ef298.js", "assets/chunk-6e6e4b85.js", "assets/Emoji.5e52f519.css", "assets/PostComment.9afc074a.css", "assets/chunk-6d77236a.js", "assets/ReplyPop.78b08cc2.css", "assets/chunk-e20af49b.js", "assets/chunk-2d134749.js", "assets/chunk-661881bd.js", "assets/chunk-f9d60830.js", "assets/chunk-47df8c47.js", "assets/chunk-3dc03e47.js", "assets/HighRollers.c708b407.css", "assets/index.page.db10e9aa.css"]),
            "/pages/gamelist/@sectionId/index.page.tsx": () => e(() =>
                import ("./pages/gamelist/@sectionId/index.page.93672264.js"), ["assets/pages/gamelist/@sectionId/index.page.93672264.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-d4fa1232.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-5bcb444f.js", "assets/chunk-78c5b721.js", "assets/chunk-0e835458.js", "assets/GameList.30b187ac.css", "assets/chunk-19b7f447.js", "assets/chunk-8888a3c4.js", "assets/index.b6401c0d.css", "assets/chunk-5fced113.js", "assets/chunk-420c54b8.js", "assets/GameNavPath.e1cc4a4a.css", "assets/index.619a963f.css", "assets/chunk-2d134749.js", "assets/chunk-07977b38.js", "assets/chunk-0e1ef679.js", "assets/chunk-7459b96e.js"]),
            "/pages/games-for-bonus/index.page.tsx": () => e(() =>
                import ("./pages/games-for-bonus/index.page.ca7d938f.js"), ["assets/pages/games-for-bonus/index.page.ca7d938f.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-78c5b721.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-5bcb444f.js", "assets/chunk-0e835458.js", "assets/GameList.30b187ac.css", "assets/index.page.3a331d1b.css"]),
            "/pages/help/index.page.tsx": () => e(() =>
                import ("./pages/help/index.page.a21ea3c9.js"), ["assets/pages/help/index.page.a21ea3c9.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-7459b96e.js", "assets/chunk-654ef298.js", "assets/chunk-6d8ed563.js", "assets/chunk-5bcb444f.js", "assets/GroupPageLayout.6f234913.css"]),
            "/pages/index/index.page.tsx": () => e(() =>
                import ("./pages/index/index.page.155677be.js").then(async r => (await r.__tla, r)), ["assets/pages/index/index.page.155677be.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-5bcb444f.js", "assets/chunk-cc8c19f6.js", "assets/chunk-f9d60830.js", "assets/chunk-47df8c47.js", "assets/chunk-3dc03e47.js", "assets/HighRollers.c708b407.css", "assets/chunk-661881bd.js", "assets/index.8c347120.css", "assets/chunk-07977b38.js", "assets/chunk-0e835458.js", "assets/chunk-0e1ef679.js", "assets/chunk-357b411e.js", "assets/chunk-27d137a6.js", "assets/MatchIcon.8462f48e.css", "assets/chunk-a21360ec.js", "assets/chunk-78c5b721.js", "assets/GameList.30b187ac.css", "assets/chunk-19b7f447.js", "assets/chunk-421da83a.js", "assets/GridScrollList.65d17988.css", "assets/GameRecommend.b27d187b.css", "assets/chunk-bad13a2b.js", "assets/chunk-2d134749.js", "assets/chunk-7459b96e.js", "assets/index.page.0ff2b3f0.css"]),
            "/pages/japarot/index.page.tsx": () => e(() =>
                import ("./pages/japarot/index.page.93ea630e.js"), ["assets/pages/japarot/index.page.93ea630e.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-654ef298.js", "assets/chunk-cf010ec4.js"]),
            "/pages/landing/index.page.tsx": () => e(() =>
                import ("./pages/landing/index.page.4dacdf2e.js"), ["assets/pages/landing/index.page.4dacdf2e.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-b894b9de.js", "assets/chunk-5bcb444f.js", "assets/chunk-357b411e.js", "assets/chunk-27d137a6.js", "assets/MatchIcon.8462f48e.css", "assets/chunk-03c302ce.js", "assets/chunk-0e1ef679.js", "assets/chunk-5fced113.js", "assets/chunk-0e835458.js", "assets/chunk-654ef298.js", "assets/chunk-35f3c0e2.js", "assets/chunk-c23b3c52.js", "assets/chunk-e570733e.js", "assets/chunk-68de7933.js", "assets/chunk-07977b38.js", "assets/chunk-47df8c47.js", "assets/chunk-3dc03e47.js", "assets/chunk-e20af49b.js", "assets/chunk-6e6e4b85.js", "assets/Emoji.5e52f519.css", "assets/chunk-b8efc996.js", "assets/chunk-000ed202.js", "assets/SearchWrap.82780ba6.css", "assets/chunk-78c5b721.js", "assets/GameList.30b187ac.css", "assets/index.8e819340.css"]),
            "/pages/lottery/index.page.tsx": () => e(() =>
                import ("./pages/lottery/index.page.797acb66.js"), ["assets/pages/lottery/index.page.797acb66.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-7459b96e.js", "assets/chunk-654ef298.js"]),
            "/pages/promotion/@detailId/index.page.tsx": () => e(() =>
                import ("./pages/promotion/@detailId/index.page.65199d43.js"), ["assets/pages/promotion/@detailId/index.page.65199d43.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-2d134749.js", "assets/chunk-07977b38.js", "assets/chunk-0e835458.js", "assets/chunk-0e1ef679.js", "assets/chunk-654ef298.js"]),
            "/pages/promotion/index.page.tsx": () => e(() =>
                import ("./pages/promotion/index.page.212e1e34.js"), ["assets/pages/promotion/index.page.212e1e34.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-2d134749.js", "assets/chunk-07977b38.js", "assets/chunk-0e835458.js", "assets/chunk-0e1ef679.js", "assets/chunk-7459b96e.js", "assets/chunk-654ef298.js"]),
            "/pages/promotions/index.page.tsx": () => e(() =>
                import ("./pages/promotions/index.page.ff33dc35.js"), ["assets/pages/promotions/index.page.ff33dc35.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-5bcb444f.js", "assets/chunk-661881bd.js", "assets/chunk-f0854543.js", "assets/index.page.5f8d04eb.css"]),
            "/pages/provider/@providerName/index.page.tsx": () => e(() =>
                import ("./pages/provider/@providerName/index.page.306be89b.js"), ["assets/pages/provider/@providerName/index.page.306be89b.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-5bcb444f.js", "assets/chunk-0e835458.js", "assets/chunk-e570733e.js", "assets/chunk-78c5b721.js", "assets/GameList.30b187ac.css", "assets/chunk-420c54b8.js", "assets/GameNavPath.e1cc4a4a.css", "assets/chunk-a21360ec.js", "assets/chunk-19b7f447.js", "assets/chunk-421da83a.js", "assets/GridScrollList.65d17988.css", "assets/GameRecommend.b27d187b.css", "assets/chunk-394d30c6.js", "assets/chunk-07977b38.js", "assets/chunk-0e1ef679.js", "assets/chunk-2d134749.js", "assets/chunk-7459b96e.js", "assets/index.page.bd276c74.css"]),
            "/pages/providers/index.page.tsx": () => e(() =>
                import ("./pages/providers/index.page.e91ca24d.js"), ["assets/pages/providers/index.page.e91ca24d.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-2d134749.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-07977b38.js", "assets/chunk-0e835458.js", "assets/chunk-0e1ef679.js", "assets/chunk-1d6a2d71.js", "assets/chunk-421da83a.js", "assets/chunk-5bcb444f.js", "assets/GridScrollList.65d17988.css", "assets/chunk-394d30c6.js", "assets/chunk-420c54b8.js", "assets/GameNavPath.e1cc4a4a.css", "assets/index.659f9969.css"]),
            "/pages/racing/index.page.tsx": () => e(() =>
                import ("./pages/racing/index.page.42d9eb68.js"), ["assets/pages/racing/index.page.42d9eb68.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-7459b96e.js", "assets/chunk-03c302ce.js", "assets/chunk-0e1ef679.js", "assets/index.page.7f150f41.css"]),
            "/pages/recent/index.page.tsx": () => e(() =>
                import ("./pages/recent/index.page.7765a687.js"), ["assets/pages/recent/index.page.7765a687.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-19b7f447.js", "assets/chunk-7ea34fc4.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-78c5b721.js", "assets/chunk-5bcb444f.js", "assets/chunk-0e835458.js", "assets/GameList.30b187ac.css", "assets/chunk-420c54b8.js", "assets/GameNavPath.e1cc4a4a.css", "assets/chunk-a21360ec.js", "assets/chunk-421da83a.js", "assets/GridScrollList.65d17988.css", "assets/GameRecommend.b27d187b.css", "assets/index.405e4894.css", "assets/chunk-2d134749.js", "assets/chunk-07977b38.js", "assets/chunk-0e1ef679.js"]),
            "/pages/setting/index.page.tsx": () => e(() =>
                import ("./pages/setting/index.page.175952ad.js"), ["assets/pages/setting/index.page.175952ad.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-654ef298.js", "assets/chunk-cf010ec4.js"]),
            "/pages/sponsorship/index.page.tsx": () => e(() =>
                import ("./pages/sponsorship/index.page.53230161.js"), ["assets/pages/sponsorship/index.page.53230161.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-654ef298.js"]),
            "/pages/sports/index.page.tsx": () => e(() =>
                import ("./pages/sports/index.page.87af9965.js"), ["assets/pages/sports/index.page.87af9965.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-7459b96e.js", "assets/chunk-b8efc996.js", "assets/chunk-03c302ce.js", "assets/chunk-0e1ef679.js", "assets/chunk-2d134749.js", "assets/chunk-07977b38.js", "assets/chunk-0e835458.js", "assets/chunk-27d137a6.js", "assets/index.page.6c077520.css"]),
            "/pages/tagname/@tagName/index.page.tsx": () => e(() =>
                import ("./pages/tagname/@tagName/index.page.5538eb47.js"), ["assets/pages/tagname/@tagName/index.page.5538eb47.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-d4fa1232.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-5bcb444f.js", "assets/chunk-78c5b721.js", "assets/chunk-0e835458.js", "assets/GameList.30b187ac.css", "assets/chunk-19b7f447.js", "assets/chunk-8888a3c4.js", "assets/index.b6401c0d.css", "assets/chunk-5fced113.js", "assets/chunk-420c54b8.js", "assets/GameNavPath.e1cc4a4a.css", "assets/index.619a963f.css", "assets/chunk-2d134749.js", "assets/chunk-07977b38.js", "assets/chunk-0e1ef679.js", "assets/chunk-7459b96e.js"]),
            "/pages/telegram/index.page.tsx": () => e(() =>
                import ("./pages/telegram/index.page.8616d8e5.js"), ["assets/pages/telegram/index.page.8616d8e5.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/index.page.434b03e9.css"]),
            "/pages/themes/index.page.tsx": () => e(() =>
                import ("./pages/themes/index.page.f471aa47.js"), ["assets/pages/themes/index.page.f471aa47.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-2d134749.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-07977b38.js", "assets/chunk-0e835458.js", "assets/chunk-0e1ef679.js", "assets/chunk-3e48406a.js", "assets/chunk-421da83a.js", "assets/chunk-5bcb444f.js", "assets/GridScrollList.65d17988.css", "assets/chunk-420c54b8.js", "assets/GameNavPath.e1cc4a4a.css", "assets/index.5fdfe620.css"]),
            "/pages/trading/contract/index.page.tsx": () => e(() =>
                import ("./pages/trading/contract/index.page.32ee8463.js"), ["assets/pages/trading/contract/index.page.32ee8463.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-ad4eb03c.js", "assets/chunk-654ef298.js", "assets/chunk-cf010ec4.js", "assets/remote.56f88e23.css"]),
            "/pages/trading/index.page.tsx": () => e(() =>
                import ("./pages/trading/index.page.af9b56fc.js"), ["assets/pages/trading/index.page.af9b56fc.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-ad4eb03c.js", "assets/chunk-654ef298.js", "assets/chunk-cf010ec4.js", "assets/remote.56f88e23.css"]),
            "/pages/trading/up-down/index.page.tsx": () => e(() =>
                import ("./pages/trading/up-down/index.page.3c21e261.js"), ["assets/pages/trading/up-down/index.page.3c21e261.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-ad4eb03c.js", "assets/chunk-654ef298.js", "assets/chunk-cf010ec4.js", "assets/remote.56f88e23.css"]),
            "/pages/vip/index.page.tsx": () => e(() =>
                import ("./pages/vip/index.page.cf8d4318.js"), ["assets/pages/vip/index.page.cf8d4318.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-654ef298.js", "assets/chunk-cf010ec4.js", "assets/chunk-b53b00e3.js"]),
            "/pages/wallet/index.page.tsx": () => e(() =>
                import ("./pages/wallet/index.page.e747ae60.js"), ["assets/pages/wallet/index.page.e747ae60.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b894b9de.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-5bcb444f.js", "assets/chunk-357b411e.js", "assets/chunk-27d137a6.js", "assets/MatchIcon.8462f48e.css", "assets/chunk-03c302ce.js", "assets/chunk-0e1ef679.js", "assets/chunk-5fced113.js", "assets/chunk-0e835458.js", "assets/chunk-654ef298.js", "assets/chunk-35f3c0e2.js", "assets/chunk-c23b3c52.js", "assets/chunk-e570733e.js", "assets/chunk-68de7933.js", "assets/chunk-07977b38.js", "assets/chunk-47df8c47.js", "assets/chunk-3dc03e47.js", "assets/chunk-e20af49b.js", "assets/chunk-6e6e4b85.js", "assets/Emoji.5e52f519.css", "assets/chunk-b8efc996.js", "assets/chunk-000ed202.js", "assets/SearchWrap.82780ba6.css", "assets/chunk-78c5b721.js", "assets/GameList.30b187ac.css", "assets/index.8e819340.css", "assets/chunk-08fcab7b.js", "assets/index.page.ac1583c1.css"]),
            "/renderer/_error.page.tsx": () => e(() =>
                import ("./renderer/_error.page.95baf0b8.js"), ["assets/renderer/_error.page.95baf0b8.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/_error.page.4bdaa919.css"])
        }),
        bt = _({}, xt);
    g[".page"] = bt;
    const mt = Object.assign({
            "/pages/affiliate/index.page.tsx": a,
            "/pages/app_download/index.page.tsx": s,
            "/pages/auth/index.page.tsx": u,
            "/pages/bc_debug.page.tsx": b,
            "/pages/bingolist/index.page.tsx": c,
            "/pages/bonus/index.page.tsx": P,
            "/pages/casino/index.page.tsx": y,
            "/pages/chat/index.page.tsx": S,
            "/pages/events/index.page.tsx": E,
            "/pages/favorite/index.page.tsx": D,
            "/pages/forum_event/index.page.tsx": M,
            "/pages/game/@gameUnique/index.page.tsx": N,
            "/pages/gamelist/@sectionId/index.page.tsx": R,
            "/pages/games-for-bonus/index.page.tsx": V,
            "/pages/help/index.page.tsx": w,
            "/pages/index/index.page.tsx": B,
            "/pages/japarot/index.page.tsx": q,
            "/pages/landing/index.page.tsx": U,
            "/pages/lottery/index.page.tsx": k,
            "/pages/promotion/@detailId/index.page.tsx": K,
            "/pages/promotion/index.page.tsx": W,
            "/pages/promotions/index.page.tsx": Y,
            "/pages/provider/@providerName/index.page.tsx": $,
            "/pages/providers/index.page.tsx": te,
            "/pages/racing/index.page.tsx": oe,
            "/pages/recent/index.page.tsx": _e,
            "/pages/setting/index.page.tsx": ge,
            "/pages/sponsorship/index.page.tsx": le,
            "/pages/sports/index.page.tsx": se,
            "/pages/tagname/@tagName/index.page.tsx": ue,
            "/pages/telegram/index.page.tsx": be,
            "/pages/themes/index.page.tsx": ce,
            "/pages/trading/contract/index.page.tsx": Pe,
            "/pages/trading/index.page.tsx": ye,
            "/pages/trading/up-down/index.page.tsx": Se,
            "/pages/vip/index.page.tsx": Ee,
            "/pages/wallet/index.page.tsx": De,
            "/renderer/_error.page.tsx": Me
        }),
        ct = _({}, mt);
    p[".page"] = ct;
    const Ot = Object.assign({
            "/renderer/_default.page.server.tsx": Ne
        }),
        Pt = _({}, Ot);
    p[".page.server"] = Pt;
    const ft = Object.assign({
            "/pages/app_download/index.page.route.ts": Re,
            "/pages/auth/index.page.route.ts": Ve,
            "/pages/chat/index.page.route.ts": we,
            "/pages/events/index.page.route.ts": Be,
            "/pages/forum_event/index.page.route.ts": qe,
            "/pages/help/index.page.route.ts": Ue,
            "/pages/landing/index.page.route.ts": ke,
            "/pages/lottery/index.page.route.ts": Ke,
            "/pages/promotions/index.page.route.ts": We,
            "/pages/racing/index.page.route.ts": Ye,
            "/pages/setting/index.page.route.ts": $e,
            "/pages/sponsorship/index.page.route.ts": tt,
            "/pages/trading/index.page.route.ts": ot,
            "/pages/wallet/index.page.route.ts": _t,
            "/renderer/_default.page.route.tsx": gt
        }),
        yt = _({}, ft);
    n[".page.route"] = yt;
    const jt = Object.assign({
            "/renderer/_default.page.client.tsx": () => e(() =>
                import ("./renderer/_default.page.client.7e3d4bf2.js").then(async r => (await r.__tla, r)).then(r => r._), ["assets/renderer/_default.page.client.7e3d4bf2.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-73e80d68.js", "assets/chunk-bad13a2b.js", "assets/chunk-a4af42e8.js", "assets/chunk-b894b9de.js", "assets/chunk-5bcb444f.js", "assets/chunk-357b411e.js", "assets/chunk-27d137a6.js", "assets/MatchIcon.8462f48e.css", "assets/chunk-03c302ce.js", "assets/chunk-0e1ef679.js", "assets/chunk-5fced113.js", "assets/chunk-0e835458.js", "assets/chunk-654ef298.js", "assets/chunk-35f3c0e2.js", "assets/chunk-c23b3c52.js", "assets/chunk-e570733e.js", "assets/chunk-68de7933.js", "assets/chunk-07977b38.js", "assets/chunk-47df8c47.js", "assets/chunk-3dc03e47.js", "assets/chunk-e20af49b.js", "assets/chunk-6e6e4b85.js", "assets/Emoji.5e52f519.css", "assets/chunk-b8efc996.js", "assets/chunk-000ed202.js", "assets/SearchWrap.82780ba6.css", "assets/chunk-78c5b721.js", "assets/GameList.30b187ac.css", "assets/index.8e819340.css", "assets/chunk-2d134749.js", "assets/chunk-21fa96d0.js", "assets/PostComment.9afc074a.css", "assets/chunk-f0854543.js", "assets/pages/help/index.page.a21ea3c9.js", "assets/chunk-7459b96e.js", "assets/chunk-6d8ed563.js", "assets/GroupPageLayout.6f234913.css", "assets/chunk-1371f12f.js", "assets/chunk-08fcab7b.js", "assets/_default.page.client.b2a76853.css"])
        }),
        St = _({}, jt);
    g[".page.client"] = St;
    const Tt = Object.assign({
            "/renderer/_default.page.client.tsx": lt
        }),
        Et = _({}, Tt);
    p[".page.client"] = Et;
    const vt = Object.freeze(Object.defineProperty({
        __proto__: null,
        isGeneratedFile: ut,
        neverLoaded: dt,
        pageFilesEager: n,
        pageFilesExportNamesEager: p,
        pageFilesExportNamesLazy: it,
        pageFilesLazy: g,
        pageFilesList: st
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    It(vt), Rt(), Vt()
});