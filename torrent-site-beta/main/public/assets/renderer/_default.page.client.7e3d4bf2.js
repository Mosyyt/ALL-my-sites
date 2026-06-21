var lN = Object.defineProperty,
    uN = Object.defineProperties;
var dN = Object.getOwnPropertyDescriptors;
var er = Object.getOwnPropertySymbols;
var Ud = Object.prototype.hasOwnProperty,
    Vd = Object.prototype.propertyIsEnumerable;
var Va = (L, U, V) => U in L ? lN(L, U, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: V
    }) : L[U] = V,
    E = (L, U) => {
        for (var V in U || (U = {})) Ud.call(U, V) && Va(L, V, U[V]);
        if (er)
            for (var V of er(U)) Vd.call(U, V) && Va(L, V, U[V]);
        return L
    },
    Je = (L, U) => uN(L, dN(U));
var ze = (L, U) => {
    var V = {};
    for (var ge in L) Ud.call(L, ge) && U.indexOf(ge) < 0 && (V[ge] = L[ge]);
    if (L != null && er)
        for (var ge of er(L)) U.indexOf(ge) < 0 && Vd.call(L, ge) && (V[ge] = L[ge]);
    return V
};
var Ha = (L, U, V) => (Va(L, typeof U != "symbol" ? U + "" : U, V), V);
import {
    i as Pt,
    b as be,
    t as C,
    W as Hd,
    c as ce,
    d as X,
    r as Qe,
    e as Q,
    n as T,
    g as fN,
    f as Tt,
    h as Ge,
    j as le,
    k as tr,
    l as _e,
    m as J,
    o as pN,
    p as Ka,
    q as hN,
    s as et,
    u as Dt,
    v as ke,
    w as W,
    x as Kd,
    y as qa,
    z as Lt,
    A as mN,
    U as qd,
    S as Ot,
    B as tt,
    C as Re,
    D as xe,
    E as Bt,
    F as Yd,
    G as gN,
    H as Y,
    I as N,
    J as rn,
    K as an,
    L as nt,
    M as Ya,
    N as nr,
    O as Pe,
    P as Zd,
    Q as vN,
    R as pt,
    T as yN,
    V as Ue,
    X as rr,
    Y as Mt,
    Z as $d,
    _ as Xd,
    $ as Jd,
    a0 as Qd,
    a1 as bN,
    a2 as Za,
    a3 as _N,
    a4 as xN,
    a5 as jN,
    a6 as $a,
    a7 as ef,
    a8 as tf,
    a9 as Xa,
    aa as nf,
    ab as rf,
    ac as wN,
    ad as SN,
    ae as NN,
    af as Ja,
    ag as af,
    ah as sf,
    ai as of ,
    aj as cf,
    ak as lf,
    al as de,
    am as Wt,
    an as uf,
    ao as df,
    ap as ff,
    aq as pf,
    ar as EN,
    as as IN,
    at as CN,
    au as Ft,
    av as je,
    aw as hf,
    ax as AN,
    ay as Qa,
    az as es,
    aA as mf,
    aB as kN,
    aC as ar,
    aD as ts,
    aE as rt,
    aF as sr,
    aG as sn,
    aH as Te,
    aI as ns,
    aJ as zt,
    aK as RN,
    aL as gf,
    aM as PN,
    aN as TN,
    aO as DN,
    aP as vf,
    aQ as ir,
    aR as LN,
    aS as yf,
    aT as bf,
    aU as ON,
    aV as BN,
    aW as _f,
    aX as on,
    aY as xf,
    aZ as rs,
    a_ as MN,
    a$ as jf,
    b0 as WN,
    b1 as wf,
    b2 as FN,
    b3 as zN,
    b4 as GN,
    b5 as Sf,
    b6 as Nf,
    b7 as Ef,
    b8 as UN,
    b9 as If,
    ba as or,
    bb as as,
    bc as VN,
    bd as Cf,
    be as HN,
    bf as Af,
    bg as kf,
    bh as Rf,
    bi as Pf,
    bj as KN,
    bk as Tf,
    bl as Df,
    bm as qN,
    bn as YN,
    bo as ZN,
    bp as $N,
    bq as Lf,
    br as XN,
    bs as JN,
    bt as QN,
    bu as eE,
    bv as tE,
    bw as nE,
    bx as rE,
    by as aE,
    bz as sE,
    bA as iE,
    bB as oE,
    bC as cE,
    bD as lE,
    bE as uE,
    bF as dE,
    bG as fE,
    bH as pE,
    bI as hE,
    bJ as mE,
    bK as gE,
    bL as vE,
    bM as yE,
    bN as bE,
    bO as _E,
    bP as xE,
    bQ as jE,
    bR as wE,
    bS as SE,
    bT as NE,
    bU as EE,
    bV as IE,
    bW as CE,
    bX as AE,
    bY as kE,
    bZ as RE,
    b_ as PE,
    b$ as TE,
    c0 as DE,
    c1 as LE,
    c2 as OE,
    c3 as BE,
    c4 as ME,
    c5 as WE,
    c6 as FE,
    c7 as zE,
    c8 as GE,
    c9 as UE,
    ca as VE,
    cb as HE,
    cc as KE,
    cd as qE,
    ce as YE,
    cf as ZE,
    cg as $E,
    ch as Of,
    ci as at,
    cj as Bf,
    ck as XE,
    cl as we,
    cm as JE,
    cn as QE,
    co as eI,
    cp as cr,
    cq as tI,
    cr as nI,
    cs as rI,
    ct as aI,
    cu as lr,
    cv as sI,
    cw as ht,
    cx as iI,
    cy as oI,
    cz as cI,
    cA as Mf,
    cB as Wf,
    cC as lI,
    cD as uI,
    cE as dI,
    cF as fI,
    cG as pI,
    cH as Ff,
    cI as zf,
    cJ as st,
    cK as hI,
    cL as mI,
    cM as ss,
    cN as gI,
    cO as vI,
    cP as yI,
    cQ as bI,
    cR as _I,
    cS as Gt,
    cT as Gf,
    cU as xI,
    cV as ur,
    cW as jI,
    cX as wI,
    cY as Uf,
    cZ as Se,
    c_ as SI,
    c$ as NI,
    d0 as mt,
    d1 as EI,
    d2 as II,
    d3 as CI,
    d4 as Vf,
    d5 as AI,
    d6 as Hf,
    d7 as kI,
    d8 as RI,
    d9 as PI,
    da as Kf,
    db as TI,
    dc as DI,
    dd as LI,
    de as OI,
    df as BI,
    dg as qf,
    dh as MI,
    di as WI,
    dj as FI,
    dk as Yf,
    dl as F,
    dm as is,
    a as g,
    dn as cn,
    dp as zI,
    dq as Zf,
    dr as $f,
    ds as q,
    dt as GI,
    du as Z,
    dv as dr,
    dw as UI,
    dx as Ut,
    dy as De,
    dz as Xf,
    dA as VI,
    dB as HI,
    dC as Ve,
    dD as KI,
    dE as qI,
    dF as gt,
    dG as Vt,
    dH as YI,
    dI as vt,
    dJ as ZI,
    dK as os,
    dL as it,
    dM as $I,
    dN as XI,
    dO as Jf,
    dP as JI,
    dQ as QI,
    dR as eC,
    dS as tC,
    dT as cs,
    dU as nC,
    dV as rC,
    dW as Qf,
    dX as aC,
    dY as sC,
    dZ as ls,
    d_ as iC,
    d$ as oC,
    e0 as cC,
    e1 as lC,
    e2 as uC,
    e3 as us,
    e4 as dC,
    e5 as ds,
    e6 as ln,
    e7 as fC,
    e8 as pC,
    e9 as fs,
    ea as hC,
    eb as mC,
    ec as gC,
    ed as He,
    ee as vC,
    ef as yC,
    eg as ep,
    eh as bC,
    ei as un,
    ej as _C,
    ek as xC,
    el as jC,
    em as wC,
    en as SC,
    eo as NC,
    ep as EC,
    eq as IC,
    er as ps,
    es as CC,
    et as AC,
    eu as kC,
    ev as z,
    ew as tp,
    ex as RC,
    ey as fr,
    ez as M,
    eA as np,
    eB as PC,
    eC as hs,
    eD as TC,
    eE as pr,
    eF as DC,
    eG as LC,
    eH as OC,
    eI as BC,
    eJ as MC,
    __tla as WC
} from "../chunk-b53b00e3.js";
import {
    r as h,
    R as $,
    a as FC
} from "../chunk-73e80d68.js";
import {
    i as dn,
    x as zC,
    U as GC,
    j as UC,
    r as VC,
    z as HC,
    V as KC,
    Y as qC,
    S as YC,
    K as ZC,
    A as $C,
    c as XC,
    h as JC,
    O as QC,
    a as eA,
    E as tA,
    k as nA,
    b as rA,
    m as aA,
    R as sA,
    J as iA,
    d as oA,
    l as cA,
    o as lA,
    D as uA,
    B as dA,
    F as fA,
    e as pA,
    s as hA,
    f as mA,
    g as gA,
    I as vA,
    n as yA,
    Z as bA,
    X as _A,
    p as xA,
    q as jA,
    t as wA,
    u as SA,
    v as NA,
    w as EA,
    G as IA,
    y as CA,
    C as AA,
    H as kA,
    L as RA,
    M as PA,
    N as TA,
    P as DA,
    Q as LA,
    T as OA,
    W as BA,
    _ as MA,
    $ as WA,
    a0 as FA,
    a1 as zA,
    a2 as GA,
    a3 as UA,
    a4 as VA,
    a5 as HA,
    a6 as KA,
    a7 as qA,
    a8 as YA,
    a9 as ZA,
    aa as $A,
    ab as XA,
    ac as JA,
    ad as QA,
    ae as ek,
    af as tk,
    ag as nk,
    ah as rk,
    ai as ak,
    aj as sk,
    ak as ik,
    al as ok,
    am as ck,
    an as lk,
    ao as uk,
    ap as dk,
    aq as fk,
    ar as pk,
    as as hk,
    at as mk,
    au as gk,
    av as vk,
    aw as yk,
    ax as bk,
    ay as _k,
    az as xk,
    aA as jk,
    aB as wk,
    aC as Sk,
    aD as Nk,
    aE as Ek,
    aF as Ik,
    aG as Ck,
    aH as Ak,
    aI as kk,
    aJ as Rk,
    aK as Pk,
    aL as Tk,
    aM as Dk,
    aN as Lk,
    aO as Ok,
    aP as Bk,
    aQ as Mk,
    aR as Wk,
    aS as Fk,
    aT as zk,
    aU as Gk,
    aV as Uk,
    aW as Vk,
    aX as Hk,
    aY as Kk,
    aZ as qk,
    a_ as Yk,
    a$ as Zk,
    b0 as $k,
    b1 as Xk,
    b2 as Jk,
    b3 as Qk,
    b4 as eR,
    b5 as tR,
    b6 as nR,
    b7 as rR,
    b8 as aR,
    b9 as sR,
    ba as iR,
    bb as oR,
    bc as cR,
    bd as lR,
    be as uR,
    bf as dR,
    bg as fR,
    bh as pR,
    bi as hR,
    bj as mR,
    bk as gR,
    bl as vR,
    bm as yR,
    bn as bR,
    bo as _R,
    bp as xR,
    bq as jR,
    br as wR,
    bs as SR,
    bt as NR,
    bu as ER,
    bv as IR,
    bw as CR,
    bx as AR,
    by as kR,
    bz as RR,
    bA as PR,
    bB as TR,
    bC as DR,
    bD as LR,
    bE as OR,
    bF as BR,
    bG as MR,
    bH as WR,
    bI as FR,
    bJ as zR,
    bK as GR,
    bL as UR,
    bM as VR,
    bN as HR,
    bO as KR,
    bP as qR,
    bQ as YR,
    bR as ZR,
    bS as $R,
    bT as XR,
    bU as JR,
    bV as QR,
    bW as e2,
    bX as t2,
    bY as n2,
    bZ as r2,
    b_ as a2,
    b$ as s2,
    c0 as i2,
    c1 as o2,
    c2,
    c3 as l2,
    c4 as u2,
    c5 as d2,
    c6 as f2,
    c7 as p2,
    c8 as h2,
    c9 as m2,
    ca as g2,
    cb as v2,
    cc as y2,
    cd as b2,
    ce as _2,
    cf as x2,
    cg as j2,
    ch as w2,
    ci as S2,
    cj as N2,
    ck as E2,
    cl as I2,
    cm as C2,
    cn as A2,
    co as k2,
    cp as R2,
    cq as P2,
    cr as T2,
    cs as D2,
    ct as L2,
    cu as O2,
    cv as B2,
    cw as M2,
    cx as W2,
    cy as F2,
    cz as z2,
    cA as G2,
    cB as U2,
    cC as V2,
    cD as H2,
    cE as K2,
    cF as q2,
    cG as Y2,
    cH as Z2,
    cI as $2,
    cJ as X2,
    cK as J2,
    cL as Q2,
    cM as eP,
    cN as tP,
    cO as nP,
    cP as rP,
    cQ as aP,
    cR as sP,
    cS as iP,
    cT as oP,
    cU as cP,
    cV as lP,
    cW as uP,
    __tla as dP
} from "../chunk-bad13a2b.js";
import {
    j as i,
    r as fP,
    a as pP
} from "../chunk-a4af42e8.js";
import {
    f as ms,
    b as ae,
    C as ot,
    c as Ne,
    a as hP,
    L as mP,
    G as gP,
    P as vP,
    n as yP,
    d as bP,
    o as _P,
    e as xP,
    __tla as jP
} from "../chunk-b894b9de.js";
import {
    c as fn,
    a as wP,
    s as Le,
    h as hr,
    b as yt,
    d as rp,
    u as gs,
    e as ap,
    f as sp,
    g as ip,
    w as op
} from "../chunk-47df8c47.js";
import {
    c as cp
} from "../chunk-6e6e4b85.js";
import {
    b as bt,
    a as lp,
    c as SP,
    d as NP,
    e as Ke,
    f as EP,
    g as IP,
    h as CP,
    o as up
} from "../chunk-5fced113.js";
import {
    _ as _t
} from "../chunk-cf010ec4.js";
import {
    l as vs,
    a as AP,
    __tla as kP
} from "../chunk-0e1ef679.js";
import {
    g as RP
} from "../chunk-2d134749.js";
import {
    l as ee,
    __tla as PP
} from "../chunk-654ef298.js";
import {
    c as se
} from "../chunk-5bcb444f.js";
import {
    p as G,
    u as TP,
    a as DP
} from "../chunk-03c302ce.js";
import {
    l as dp,
    M as LP,
    P as OP,
    o as BP,
    a as MP,
    b as WP,
    S as fp,
    c as FP,
    V as zP,
    p as GP
} from "../chunk-21fa96d0.js";
import {
    r as UP
} from "../chunk-f0854543.js";
import {
    installHelp as VP
} from "../pages/help/index.page.a21ea3c9.js";
import {
    C as HP,
    G as KP,
    a as qP,
    B as YP,
    b as ZP,
    N as $P,
    A as XP,
    c as JP,
    d as QP,
    P as eT,
    M as tT,
    e as nT,
    f as rT,
    g as aT,
    h as sT,
    i as pp,
    j as iT,
    k as oT,
    S as cT,
    R as lT,
    l as uT,
    m as dT,
    n as fT,
    o as pT,
    T as hp,
    p as hT,
    V as mT,
    q as gT,
    r as vT
} from "../chunk-1371f12f.js";
import {
    u as yT
} from "../chunk-b8efc996.js";
import {
    i as bT
} from "../chunk-08fcab7b.js";
import {
    t as Ee,
    a as Ht,
    __tla as _T
} from "../chunk-0e835458.js";
import {
    g as xT
} from "../chunk-07977b38.js";
import {
    n as jT
} from "../chunk-35f3c0e2.js";
import "../chunk-c23b3c52.js";
import "../chunk-357b411e.js";
import "../chunk-27d137a6.js";
import "../chunk-e570733e.js";
import "../chunk-68de7933.js";
import "../chunk-3dc03e47.js";
import "../chunk-e20af49b.js";
import {
    __tla as wT
} from "../chunk-000ed202.js";
import "../chunk-78c5b721.js";
import "../chunk-7459b96e.js";
import "../chunk-6d8ed563.js";
let mp, pn, hn, mr, ST = Promise.all([(() => {
    try {
        return WC
    } catch (L) {}
})(), (() => {
    try {
        return dP
    } catch (L) {}
})(), (() => {
    try {
        return jP
    } catch (L) {}
})(), (() => {
    try {
        return kP
    } catch (L) {}
})(), (() => {
    try {
        return PP
    } catch (L) {}
})(), (() => {
    try {
        return _T
    } catch (L) {}
})(), (() => {
    try {
        return wT
    } catch (L) {}
})()]).then(async () => {
    var L = NaN;

    function U(e) {
        return typeof e == "number" ? e : Pt(e) ? L : +e
    }

    function V(e, t) {
        return function(n, r) {
            var a;
            if (n === void 0 && r === void 0) return t;
            if (n !== void 0 && (a = n), r !== void 0) {
                if (a === void 0) return r;
                typeof n == "string" || typeof r == "string" ? (n = be(n), r = be(r)) : (n = U(n), r = U(r)), a = e(n, r)
            }
            return a
        }
    }
    var ge = V(function(e, t) {
        return e + t
    }, 0);
    const ys = ge;
    var gp = "Expected a function";

    function bs(e, t) {
        if (typeof t != "function") throw new TypeError(gp);
        return e = C(e),
            function() {
                if (--e < 1) return t.apply(this, arguments)
            }
    }
    var vp = Hd && new Hd;
    const mn = vp;
    var yp = mn ? function(e, t) {
        return mn.set(e, t), e
    } : ce;
    const _s = yp;
    var xs = Object.create,
        bp = function() {
            function e() {}
            return function(t) {
                if (!X(t)) return {};
                if (xs) return xs(t);
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0, n
            }
        }();
    const xt = bp;

    function Kt(e) {
        return function() {
            var t = arguments;
            switch (t.length) {
                case 0:
                    return new e;
                case 1:
                    return new e(t[0]);
                case 2:
                    return new e(t[0], t[1]);
                case 3:
                    return new e(t[0], t[1], t[2]);
                case 4:
                    return new e(t[0], t[1], t[2], t[3]);
                case 5:
                    return new e(t[0], t[1], t[2], t[3], t[4]);
                case 6:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                case 7:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
            }
            var n = xt(e.prototype),
                r = e.apply(n, t);
            return X(r) ? r : n
        }
    }
    var _p = 1;

    function xp(e, t, n) {
        var r = t & _p,
            a = Kt(e);

        function s() {
            var o = this && this !== Qe && this instanceof s ? a : e;
            return o.apply(r ? n : this, arguments)
        }
        return s
    }

    function ue(e, t, n) {
        switch (n.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, n[0]);
            case 2:
                return e.call(t, n[0], n[1]);
            case 3:
                return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }
    var jp = Math.max;

    function js(e, t, n, r) {
        for (var a = -1, s = e.length, o = n.length, l = -1, u = t.length, f = jp(s - o, 0), d = Array(u + f), p = !r; ++l < u;) d[l] = t[l];
        for (; ++a < o;)(p || a < s) && (d[n[a]] = e[a]);
        for (; f--;) d[l++] = e[a++];
        return d
    }
    var wp = Math.max;

    function ws(e, t, n, r) {
        for (var a = -1, s = e.length, o = -1, l = n.length, u = -1, f = t.length, d = wp(s - l, 0), p = Array(d + f), m = !r; ++a < d;) p[a] = e[a];
        for (var v = a; ++u < f;) p[v + u] = t[u];
        for (; ++o < l;)(m || a < s) && (p[v + n[o]] = e[a++]);
        return p
    }

    function Sp(e, t) {
        for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
        return r
    }

    function gn() {}
    var Np = 4294967295;

    function k(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Np, this.__views__ = []
    }
    k.prototype = xt(gn.prototype), k.prototype.constructor = k;

    function vn() {}
    var Ep = mn ? function(e) {
        return mn.get(e)
    } : vn;
    const gr = Ep;
    var Ip = {};
    const jt = Ip;
    var Cp = Object.prototype,
        Ap = Cp.hasOwnProperty;

    function yn(e) {
        for (var t = e.name + "", n = jt[t], r = Ap.call(jt, t) ? n.length : 0; r--;) {
            var a = n[r],
                s = a.func;
            if (s == null || s == e) return a.name
        }
        return t
    }

    function fe(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
    }
    fe.prototype = xt(gn.prototype), fe.prototype.constructor = fe;

    function ie(e, t) {
        var n = -1,
            r = e.length;
        for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
        return t
    }

    function Ss(e) {
        if (e instanceof k) return e.clone();
        var t = new fe(e.__wrapped__, e.__chain__);
        return t.__actions__ = ie(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
    }
    var kp = Object.prototype,
        Rp = kp.hasOwnProperty;

    function c(e) {
        if (Q(e) && !T(e) && !(e instanceof k)) {
            if (e instanceof fe) return e;
            if (Rp.call(e, "__wrapped__")) return Ss(e)
        }
        return new fe(e)
    }
    c.prototype = gn.prototype, c.prototype.constructor = c;

    function vr(e) {
        var t = yn(e),
            n = c[t];
        if (typeof n != "function" || !(t in k.prototype)) return !1;
        if (e === n) return !0;
        var r = gr(n);
        return !!r && e === r[0]
    }
    var Pp = 800,
        Tp = 16,
        Dp = Date.now;

    function Ns(e) {
        var t = 0,
            n = 0;
        return function() {
            var r = Dp(),
                a = Tp - (r - n);
            if (n = r, a > 0) {
                if (++t >= Pp) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var Lp = Ns(_s);
    const Es = Lp;
    var Op = /\{\n\/\* \[wrapped with (.+)\] \*/,
        Bp = /,? & /;

    function Mp(e) {
        var t = e.match(Op);
        return t ? t[1].split(Bp) : []
    }
    var Wp = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

    function Fp(e, t) {
        var n = t.length;
        if (!n) return e;
        var r = n - 1;
        return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(Wp, `{
/* [wrapped with ` + t + `] */
`)
    }

    function bn(e) {
        return function() {
            return e
        }
    }
    var zp = function() {
        try {
            var e = fN(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (t) {}
    }();
    const _n = zp;
    var Gp = _n ? function(e, t) {
            return _n(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: bn(t),
                writable: !0
            })
        } : ce,
        Up = Ns(Gp);
    const yr = Up;

    function pe(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
        return e
    }

    function xn(e, t, n, r) {
        for (var a = e.length, s = n + (r ? 1 : -1); r ? s-- : ++s < a;)
            if (t(e[s], s, e)) return s;
        return -1
    }

    function Is(e) {
        return e !== e
    }

    function Vp(e, t, n) {
        for (var r = n - 1, a = e.length; ++r < a;)
            if (e[r] === t) return r;
        return -1
    }

    function wt(e, t, n) {
        return t === t ? Vp(e, t, n) : xn(e, Is, n)
    }

    function jn(e, t) {
        var n = e == null ? 0 : e.length;
        return !!n && wt(e, t, 0) > -1
    }
    var Hp = 1,
        Kp = 2,
        qp = 8,
        Yp = 16,
        Zp = 32,
        $p = 64,
        Xp = 128,
        Jp = 256,
        Qp = 512,
        eh = [
            ["ary", Xp],
            ["bind", Hp],
            ["bindKey", Kp],
            ["curry", qp],
            ["curryRight", Yp],
            ["flip", Qp],
            ["partial", Zp],
            ["partialRight", $p],
            ["rearg", Jp]
        ];

    function th(e, t) {
        return pe(eh, function(n) {
            var r = "_." + n[0];
            t & n[1] && !jn(e, r) && e.push(r)
        }), e.sort()
    }

    function Cs(e, t, n) {
        var r = t + "";
        return yr(e, Fp(r, th(Mp(r), n)))
    }
    var nh = 1,
        rh = 2,
        ah = 4,
        sh = 8,
        As = 32,
        ks = 64;

    function Rs(e, t, n, r, a, s, o, l, u, f) {
        var d = t & sh,
            p = d ? o : void 0,
            m = d ? void 0 : o,
            v = d ? s : void 0,
            _ = d ? void 0 : s;
        t |= d ? As : ks, t &= ~(d ? ks : As), t & ah || (t &= ~(nh | rh));
        var j = [e, t, a, v, p, _, m, l, u, f],
            S = n.apply(void 0, j);
        return vr(e) && Es(S, j), S.placeholder = r, Cs(S, e, t)
    }

    function St(e) {
        var t = e;
        return t.placeholder
    }
    var ih = Math.min;

    function oh(e, t) {
        for (var n = e.length, r = ih(t.length, n), a = ie(e); r--;) {
            var s = t[r];
            e[r] = Tt(s, n) ? a[s] : void 0
        }
        return e
    }
    var Ps = "__lodash_placeholder__";

    function qe(e, t) {
        for (var n = -1, r = e.length, a = 0, s = []; ++n < r;) {
            var o = e[n];
            (o === t || o === Ps) && (e[n] = Ps, s[a++] = n)
        }
        return s
    }
    var ch = 1,
        lh = 2,
        uh = 8,
        dh = 16,
        fh = 128,
        ph = 512;

    function wn(e, t, n, r, a, s, o, l, u, f) {
        var d = t & fh,
            p = t & ch,
            m = t & lh,
            v = t & (uh | dh),
            _ = t & ph,
            j = m ? void 0 : Kt(e);

        function S() {
            for (var I = arguments.length, R = Array(I), ye = I; ye--;) R[ye] = arguments[ye];
            if (v) var Xe = St(S),
                Qn = Sp(R, Xe);
            if (r && (R = js(R, r, a, v)), s && (R = ws(R, s, o, v)), I -= Qn, v && I < f) {
                var cN = qe(R, Xe);
                return Rs(e, t, wn, S.placeholder, n, R, cN, l, u, f - I)
            }
            var Gd = p ? n : this,
                Ua = m ? Gd[e] : e;
            return I = R.length, l ? R = oh(R, l) : _ && I > 1 && R.reverse(), d && u < I && (R.length = u), this && this !== Qe && this instanceof S && (Ua = j || Kt(Ua)), Ua.apply(Gd, R)
        }
        return S
    }

    function hh(e, t, n) {
        var r = Kt(e);

        function a() {
            for (var s = arguments.length, o = Array(s), l = s, u = St(a); l--;) o[l] = arguments[l];
            var f = s < 3 && o[0] !== u && o[s - 1] !== u ? [] : qe(o, u);
            if (s -= f.length, s < n) return Rs(e, t, wn, a.placeholder, void 0, o, f, void 0, void 0, n - s);
            var d = this && this !== Qe && this instanceof a ? r : e;
            return ue(d, this, o)
        }
        return a
    }
    var mh = 1;

    function gh(e, t, n, r) {
        var a = t & mh,
            s = Kt(e);

        function o() {
            for (var l = -1, u = arguments.length, f = -1, d = r.length, p = Array(d + u), m = this && this !== Qe && this instanceof o ? s : e; ++f < d;) p[f] = r[f];
            for (; u--;) p[f++] = arguments[++l];
            return ue(m, a ? n : this, p)
        }
        return o
    }
    var Ts = "__lodash_placeholder__",
        br = 1,
        vh = 2,
        yh = 4,
        Ds = 8,
        qt = 128,
        Ls = 256,
        bh = Math.min;

    function _h(e, t) {
        var n = e[1],
            r = t[1],
            a = n | r,
            s = a < (br | vh | qt),
            o = r == qt && n == Ds || r == qt && n == Ls && e[7].length <= t[8] || r == (qt | Ls) && t[7].length <= t[8] && n == Ds;
        if (!(s || o)) return e;
        r & br && (e[2] = t[2], a |= n & br ? 0 : yh);
        var l = t[3];
        if (l) {
            var u = e[3];
            e[3] = u ? js(u, l, t[4]) : l, e[4] = u ? qe(e[3], Ts) : t[4]
        }
        return l = t[5], l && (u = e[5], e[5] = u ? ws(u, l, t[6]) : l, e[6] = u ? qe(e[5], Ts) : t[6]), l = t[7], l && (e[7] = l), r & qt && (e[8] = e[8] == null ? t[8] : bh(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = a, e
    }
    var xh = "Expected a function",
        Os = 1,
        jh = 2,
        _r = 8,
        xr = 16,
        jr = 32,
        Bs = 64,
        Ms = Math.max;

    function Oe(e, t, n, r, a, s, o, l) {
        var u = t & jh;
        if (!u && typeof e != "function") throw new TypeError(xh);
        var f = r ? r.length : 0;
        if (f || (t &= ~(jr | Bs), r = a = void 0), o = o === void 0 ? o : Ms(C(o), 0), l = l === void 0 ? l : C(l), f -= a ? a.length : 0, t & Bs) {
            var d = r,
                p = a;
            r = a = void 0
        }
        var m = u ? void 0 : gr(e),
            v = [e, t, n, r, a, d, p, s, o, l];
        if (m && _h(v, m), e = v[0], t = v[1], n = v[2], r = v[3], a = v[4], l = v[9] = v[9] === void 0 ? u ? 0 : e.length : Ms(v[9] - f, 0), !l && t & (_r | xr) && (t &= ~(_r | xr)), !t || t == Os) var _ = xp(e, t, n);
        else t == _r || t == xr ? _ = hh(e, t, l) : (t == jr || t == (Os | jr)) && !a.length ? _ = gh(e, t, n, r) : _ = wn.apply(void 0, v);
        var j = m ? _s : Es;
        return Cs(j(_, v), e, t)
    }
    var wh = 128;

    function wr(e, t, n) {
        return t = n ? void 0 : t, t = e && t == null ? e.length : t, Oe(e, wh, void 0, void 0, void 0, void 0, t)
    }

    function Be(e, t, n) {
        t == "__proto__" && _n ? _n(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : e[t] = n
    }
    var Sh = Object.prototype,
        Nh = Sh.hasOwnProperty;

    function Yt(e, t, n) {
        var r = e[t];
        (!(Nh.call(e, t) && Ge(r, n)) || n === void 0 && !(t in e)) && Be(e, t, n)
    }

    function Ie(e, t, n, r) {
        var a = !n;
        n || (n = {});
        for (var s = -1, o = t.length; ++s < o;) {
            var l = t[s],
                u = r ? r(n[l], e[l], l, n, e) : void 0;
            u === void 0 && (u = e[l]), a ? Be(n, l, u) : Yt(n, l, u)
        }
        return n
    }
    var Ws = Math.max;

    function Fs(e, t, n) {
        return t = Ws(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var r = arguments, a = -1, s = Ws(r.length - t, 0), o = Array(s); ++a < s;) o[a] = r[t + a];
                a = -1;
                for (var l = Array(t + 1); ++a < t;) l[a] = r[a];
                return l[t] = n(o), ue(e, this, l)
            }
    }

    function A(e, t) {
        return yr(Fs(e, t, ce), e + "")
    }

    function Nt(e) {
        return A(function(t, n) {
            var r = -1,
                a = n.length,
                s = a > 1 ? n[a - 1] : void 0,
                o = a > 2 ? n[2] : void 0;
            for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, o && le(n[0], n[1], o) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++r < a;) {
                var l = n[r];
                l && e(t, l, r, s)
            }
            return t
        })
    }
    var Eh = Object.prototype,
        Ih = Eh.hasOwnProperty,
        Ch = Nt(function(e, t) {
            if (tr(t) || _e(t)) {
                Ie(t, J(t), e);
                return
            }
            for (var n in t) Ih.call(t, n) && Yt(e, n, t[n])
        });
    const zs = Ch;

    function Ah(e) {
        var t = [];
        if (e != null)
            for (var n in Object(e)) t.push(n);
        return t
    }
    var kh = Object.prototype,
        Rh = kh.hasOwnProperty;

    function Ph(e) {
        if (!X(e)) return Ah(e);
        var t = tr(e),
            n = [];
        for (var r in e) r == "constructor" && (t || !Rh.call(e, r)) || n.push(r);
        return n
    }

    function te(e) {
        return _e(e) ? pN(e, !0) : Ph(e)
    }
    var Th = Nt(function(e, t) {
        Ie(t, te(t), e)
    });
    const Sn = Th;
    var Dh = Nt(function(e, t, n, r) {
        Ie(t, te(t), e, r)
    });
    const Et = Dh;
    var Lh = Nt(function(e, t, n, r) {
        Ie(t, J(t), e, r)
    });
    const Gs = Lh;

    function Sr(e, t) {
        for (var n = -1, r = t.length, a = Array(r), s = e == null; ++n < r;) a[n] = s ? void 0 : Ka(e, t[n]);
        return a
    }

    function Me(e) {
        return yr(Fs(e, void 0, ms), e + "")
    }
    var Oh = Me(Sr);
    const Us = Oh;
    var Bh = hN(Object.getPrototypeOf, Object);
    const Nn = Bh;
    var Mh = "[object Object]",
        Wh = Function.prototype,
        Fh = Object.prototype,
        Vs = Wh.toString,
        zh = Fh.hasOwnProperty,
        Gh = Vs.call(Object);

    function It(e) {
        if (!Q(e) || et(e) != Mh) return !1;
        var t = Nn(e);
        if (t === null) return !0;
        var n = zh.call(t, "constructor") && t.constructor;
        return typeof n == "function" && n instanceof n && Vs.call(n) == Gh
    }
    var Uh = "[object DOMException]",
        Vh = "[object Error]";

    function En(e) {
        if (!Q(e)) return !1;
        var t = et(e);
        return t == Vh || t == Uh || typeof e.message == "string" && typeof e.name == "string" && !It(e)
    }
    var Hh = A(function(e, t) {
        try {
            return ue(e, void 0, t)
        } catch (n) {
            return En(n) ? n : new Error(n)
        }
    });
    const Nr = Hh;
    var Kh = 1,
        qh = 32,
        Er = A(function(e, t, n) {
            var r = Kh;
            if (n.length) {
                var a = qe(n, St(Er));
                r |= qh
            }
            return Oe(e, r, t, n, a)
        });
    Er.placeholder = {};
    const Ir = Er;
    var Yh = Me(function(e, t) {
        return pe(t, function(n) {
            n = Dt(n), Be(e, n, Ir(e[n], e))
        }), e
    });
    const Hs = Yh;
    var Zh = 1,
        $h = 2,
        Xh = 32,
        Cr = A(function(e, t, n) {
            var r = Zh | $h;
            if (n.length) {
                var a = qe(n, St(Cr));
                r |= Xh
            }
            return Oe(t, r, e, n, a)
        });
    Cr.placeholder = {};
    const Ks = Cr;

    function qs() {
        if (!arguments.length) return [];
        var e = arguments[0];
        return T(e) ? e : [e]
    }
    var Jh = Qe.isFinite,
        Qh = Math.min;

    function Ar(e) {
        var t = Math[e];
        return function(n, r) {
            if (n = ke(n), r = r == null ? 0 : Qh(C(r), 292), r && Jh(n)) {
                var a = (W(n) + "e").split("e"),
                    s = t(a[0] + "e" + (+a[1] + r));
                return a = (W(s) + "e").split("e"), +(a[0] + "e" + (+a[1] - r))
            }
            return t(n)
        }
    }
    var em = Ar("ceil");
    const Ys = em;

    function kr(e) {
        var t = c(e);
        return t.__chain__ = !0, t
    }

    function ct(e, t, n) {
        return e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e
    }

    function Zs(e, t, n) {
        return n === void 0 && (n = t, t = void 0), n !== void 0 && (n = ke(n), n = n === n ? n : 0), t !== void 0 && (t = ke(t), t = t === t ? t : 0), ct(ke(e), t, n)
    }

    function $s(e, t) {
        return e && Ie(t, J(t), e)
    }

    function tm(e, t) {
        return e && Ie(t, te(t), e)
    }
    var Xs = typeof exports == "object" && exports && !exports.nodeType && exports,
        Js = Xs && typeof module == "object" && module && !module.nodeType && module,
        nm = Js && Js.exports === Xs,
        Qs = nm ? Qe.Buffer : void 0,
        ei = Qs ? Qs.allocUnsafe : void 0;

    function ti(e, t) {
        if (t) return e.slice();
        var n = e.length,
            r = ei ? ei(n) : new e.constructor(n);
        return e.copy(r), r
    }

    function rm(e, t) {
        return Ie(e, Kd(e), t)
    }
    var am = Object.getOwnPropertySymbols,
        sm = am ? function(e) {
            for (var t = []; e;) Lt(t, Kd(e)), e = Nn(e);
            return t
        } : qa;
    const ni = sm;

    function im(e, t) {
        return Ie(e, ni(e), t)
    }

    function Rr(e) {
        return mN(e, te, ni)
    }
    var om = Object.prototype,
        cm = om.hasOwnProperty;

    function lm(e) {
        var t = e.length,
            n = new e.constructor(t);
        return t && typeof e[0] == "string" && cm.call(e, "index") && (n.index = e.index, n.input = e.input), n
    }

    function Pr(e) {
        var t = new e.constructor(e.byteLength);
        return new qd(t).set(new qd(e)), t
    }

    function um(e, t) {
        var n = t ? Pr(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength)
    }
    var dm = /\w*$/;

    function fm(e) {
        var t = new e.constructor(e.source, dm.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
    var ri = Ot ? Ot.prototype : void 0,
        ai = ri ? ri.valueOf : void 0;

    function pm(e) {
        return ai ? Object(ai.call(e)) : {}
    }

    function si(e, t) {
        var n = t ? Pr(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length)
    }
    var hm = "[object Boolean]",
        mm = "[object Date]",
        gm = "[object Map]",
        vm = "[object Number]",
        ym = "[object RegExp]",
        bm = "[object Set]",
        _m = "[object String]",
        xm = "[object Symbol]",
        jm = "[object ArrayBuffer]",
        wm = "[object DataView]",
        Sm = "[object Float32Array]",
        Nm = "[object Float64Array]",
        Em = "[object Int8Array]",
        Im = "[object Int16Array]",
        Cm = "[object Int32Array]",
        Am = "[object Uint8Array]",
        km = "[object Uint8ClampedArray]",
        Rm = "[object Uint16Array]",
        Pm = "[object Uint32Array]";

    function Tm(e, t, n) {
        var r = e.constructor;
        switch (t) {
            case jm:
                return Pr(e);
            case hm:
            case mm:
                return new r(+e);
            case wm:
                return um(e, n);
            case Sm:
            case Nm:
            case Em:
            case Im:
            case Cm:
            case Am:
            case km:
            case Rm:
            case Pm:
                return si(e, n);
            case gm:
                return new r;
            case vm:
            case _m:
                return new r(e);
            case ym:
                return fm(e);
            case bm:
                return new r;
            case xm:
                return pm(e)
        }
    }

    function ii(e) {
        return typeof e.constructor == "function" && !tr(e) ? xt(Nn(e)) : {}
    }
    var Dm = "[object Map]";

    function Lm(e) {
        return Q(e) && tt(e) == Dm
    }
    var oi = Re && Re.isMap,
        Om = oi ? xe(oi) : Lm;
    const Tr = Om;
    var Bm = "[object Set]";

    function Mm(e) {
        return Q(e) && tt(e) == Bm
    }
    var ci = Re && Re.isSet,
        Wm = ci ? xe(ci) : Mm;
    const Dr = Wm;
    var Fm = 1,
        zm = 2,
        Gm = 4,
        li = "[object Arguments]",
        Um = "[object Array]",
        Vm = "[object Boolean]",
        Hm = "[object Date]",
        Km = "[object Error]",
        ui = "[object Function]",
        qm = "[object GeneratorFunction]",
        Ym = "[object Map]",
        Zm = "[object Number]",
        di = "[object Object]",
        $m = "[object RegExp]",
        Xm = "[object Set]",
        Jm = "[object String]",
        Qm = "[object Symbol]",
        eg = "[object WeakMap]",
        tg = "[object ArrayBuffer]",
        ng = "[object DataView]",
        rg = "[object Float32Array]",
        ag = "[object Float64Array]",
        sg = "[object Int8Array]",
        ig = "[object Int16Array]",
        og = "[object Int32Array]",
        cg = "[object Uint8Array]",
        lg = "[object Uint8ClampedArray]",
        ug = "[object Uint16Array]",
        dg = "[object Uint32Array]",
        B = {};
    B[li] = B[Um] = B[tg] = B[ng] = B[Vm] = B[Hm] = B[rg] = B[ag] = B[sg] = B[ig] = B[og] = B[Ym] = B[Zm] = B[di] = B[$m] = B[Xm] = B[Jm] = B[Qm] = B[cg] = B[lg] = B[ug] = B[dg] = !0, B[Km] = B[ui] = B[eg] = !1;

    function he(e, t, n, r, a, s) {
        var o, l = t & Fm,
            u = t & zm,
            f = t & Gm;
        if (n && (o = a ? n(e, r, a, s) : n(e)), o !== void 0) return o;
        if (!X(e)) return e;
        var d = T(e);
        if (d) {
            if (o = lm(e), !l) return ie(e, o)
        } else {
            var p = tt(e),
                m = p == ui || p == qm;
            if (Bt(e)) return ti(e, l);
            if (p == di || p == li || m && !a) {
                if (o = u || m ? {} : ii(e), !l) return u ? im(e, tm(o, e)) : rm(e, $s(o, e))
            } else {
                if (!B[p]) return a ? e : {};
                o = Tm(e, p, l)
            }
        }
        s || (s = new Yd);
        var v = s.get(e);
        if (v) return v;
        s.set(e, o), Dr(e) ? e.forEach(function(S) {
            o.add(he(S, t, n, S, e, s))
        }) : Tr(e) && e.forEach(function(S, I) {
            o.set(I, he(S, t, n, I, e, s))
        });
        var _ = f ? u ? Rr : gN : u ? te : J,
            j = d ? void 0 : _(e);
        return pe(j || e, function(S, I) {
            j && (I = S, S = e[I]), Yt(o, I, he(S, t, n, I, e, s))
        }), o
    }
    var fg = 4;

    function fi(e) {
        return he(e, fg)
    }
    var pg = 1,
        hg = 4;

    function pi(e) {
        return he(e, pg | hg)
    }
    var mg = 1,
        gg = 4;

    function hi(e, t) {
        return t = typeof t == "function" ? t : void 0, he(e, mg | gg, t)
    }
    var vg = 4;

    function mi(e, t) {
        return t = typeof t == "function" ? t : void 0, he(e, vg, t)
    }

    function Lr() {
        return new fe(this.value(), this.__chain__)
    }

    function gi() {
        var e = arguments.length;
        if (!e) return [];
        for (var t = Array(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
        return Lt(T(n) ? ie(n) : [n], ae(t, 1))
    }
    var yg = "Expected a function";

    function vi(e) {
        var t = e == null ? 0 : e.length,
            n = N;
        return e = t ? Y(e, function(r) {
            if (typeof r[1] != "function") throw new TypeError(yg);
            return [n(r[0]), r[1]]
        }) : [], A(function(r) {
            for (var a = -1; ++a < t;) {
                var s = e[a];
                if (ue(s[0], this, r)) return ue(s[1], this, r)
            }
        })
    }

    function yi(e, t, n) {
        var r = n.length;
        if (e == null) return !r;
        for (e = Object(e); r--;) {
            var a = n[r],
                s = t[a],
                o = e[a];
            if (o === void 0 && !(a in e) || !s(o)) return !1
        }
        return !0
    }

    function bg(e) {
        var t = J(e);
        return function(n) {
            return yi(n, e, t)
        }
    }
    var _g = 1;

    function bi(e) {
        return bg(he(e, _g))
    }

    function _i(e, t) {
        return t == null || yi(e, t, J(t))
    }

    function xg(e, t, n, r) {
        for (var a = -1, s = e == null ? 0 : e.length; ++a < s;) {
            var o = e[a];
            t(r, o, n(o), e)
        }
        return r
    }

    function jg(e, t, n, r) {
        return bt(e, function(a, s, o) {
            t(r, a, n(a), o)
        }), r
    }

    function In(e, t) {
        return function(n, r) {
            var a = T(n) ? xg : jg,
                s = t ? t() : {};
            return a(n, e, N(r), s)
        }
    }
    var wg = Object.prototype,
        Sg = wg.hasOwnProperty,
        Ng = In(function(e, t, n) {
            Sg.call(e, n) ? ++e[n] : Be(e, n, 1)
        });
    const xi = Ng;

    function ji(e, t) {
        var n = xt(e);
        return t == null ? n : $s(n, t)
    }
    var Eg = 8;

    function Cn(e, t, n) {
        t = n ? void 0 : t;
        var r = Oe(e, Eg, void 0, void 0, void 0, void 0, void 0, t);
        return r.placeholder = Cn.placeholder, r
    }
    Cn.placeholder = {};
    var Ig = 16;

    function An(e, t, n) {
        t = n ? void 0 : t;
        var r = Oe(e, Ig, void 0, void 0, void 0, void 0, void 0, t);
        return r.placeholder = An.placeholder, r
    }
    An.placeholder = {};

    function wi(e, t) {
        return e == null || e !== e ? t : e
    }
    var Si = Object.prototype,
        Cg = Si.hasOwnProperty,
        Ag = A(function(e, t) {
            e = Object(e);
            var n = -1,
                r = t.length,
                a = r > 2 ? t[2] : void 0;
            for (a && le(t[0], t[1], a) && (r = 1); ++n < r;)
                for (var s = t[n], o = te(s), l = -1, u = o.length; ++l < u;) {
                    var f = o[l],
                        d = e[f];
                    (d === void 0 || Ge(d, Si[f]) && !Cg.call(e, f)) && (e[f] = s[f])
                }
            return e
        });
    const Ni = Ag;

    function Or(e, t, n) {
        (n !== void 0 && !Ge(e[t], n) || n === void 0 && !(t in e)) && Be(e, t, n)
    }

    function H(e) {
        return Q(e) && _e(e)
    }

    function Br(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }

    function Mr(e) {
        return Ie(e, te(e))
    }

    function kg(e, t, n, r, a, s, o) {
        var l = Br(e, n),
            u = Br(t, n),
            f = o.get(u);
        if (f) {
            Or(e, n, f);
            return
        }
        var d = s ? s(l, u, n + "", e, t, o) : void 0,
            p = d === void 0;
        if (p) {
            var m = T(u),
                v = !m && Bt(u),
                _ = !m && !v && rn(u);
            d = u, m || v || _ ? T(l) ? d = l : H(l) ? d = ie(l) : v ? (p = !1, d = ti(u, !0)) : _ ? (p = !1, d = si(u, !0)) : d = [] : It(u) || an(u) ? (d = l, an(l) ? d = Mr(l) : (!X(l) || nt(l)) && (d = ii(u))) : p = !1
        }
        p && (o.set(u, d), a(d, u, r, s, o), o.delete(u)), Or(e, n, d)
    }

    function kn(e, t, n, r, a) {
        e !== t && lp(t, function(s, o) {
            if (a || (a = new Yd), X(s)) kg(e, t, o, n, kn, r, a);
            else {
                var l = r ? r(Br(e, o), s, o + "", e, t, a) : void 0;
                l === void 0 && (l = s), Or(e, o, l)
            }
        }, te)
    }

    function Ei(e, t, n, r, a, s) {
        return X(e) && X(t) && (s.set(t, e), kn(e, t, void 0, Ei, s), s.delete(t)), e
    }
    var Rg = Nt(function(e, t, n, r) {
        kn(e, t, n, r)
    });
    const Wr = Rg;
    var Pg = A(function(e) {
        return e.push(void 0, Ei), ue(Wr, void 0, e)
    });
    const Ii = Pg;
    var Tg = "Expected a function";

    function Ci(e, t, n) {
        if (typeof e != "function") throw new TypeError(Tg);
        return setTimeout(function() {
            e.apply(void 0, n)
        }, t)
    }
    var Dg = A(function(e, t) {
        return Ci(e, 1, t)
    });
    const Ai = Dg;
    var Lg = A(function(e, t, n) {
        return Ci(e, ke(t) || 0, n)
    });
    const ki = Lg;

    function Fr(e, t, n) {
        for (var r = -1, a = e == null ? 0 : e.length; ++r < a;)
            if (n(t, e[r])) return !0;
        return !1
    }
    var Og = 200;

    function Zt(e, t, n, r) {
        var a = -1,
            s = jn,
            o = !0,
            l = e.length,
            u = [],
            f = t.length;
        if (!l) return u;
        n && (t = Y(t, xe(n))), r ? (s = Fr, o = !1) : t.length >= Og && (s = nr, o = !1, t = new Ya(t));
        e: for (; ++a < l;) {
            var d = e[a],
                p = n == null ? d : n(d);
            if (d = r || d !== 0 ? d : 0, o && p === p) {
                for (var m = f; m--;)
                    if (t[m] === p) continue e;
                u.push(d)
            } else s(t, p, r) || u.push(d)
        }
        return u
    }
    var Bg = A(function(e, t) {
        return H(e) ? Zt(e, ae(t, 1, H, !0)) : []
    });
    const Ri = Bg;

    function oe(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : void 0
    }
    var Mg = A(function(e, t) {
        var n = oe(t);
        return H(n) && (n = void 0), H(e) ? Zt(e, ae(t, 1, H, !0), N(n)) : []
    });
    const Pi = Mg;
    var Wg = A(function(e, t) {
        var n = oe(t);
        return H(n) && (n = void 0), H(e) ? Zt(e, ae(t, 1, H, !0), void 0, n) : []
    });
    const Ti = Wg;
    var Fg = V(function(e, t) {
        return e / t
    }, 1);
    const Di = Fg;

    function Li(e, t, n) {
        var r = e == null ? 0 : e.length;
        return r ? (t = n || t === void 0 ? 1 : C(t), Pe(e, t < 0 ? 0 : t, r)) : []
    }

    function Oi(e, t, n) {
        var r = e == null ? 0 : e.length;
        return r ? (t = n || t === void 0 ? 1 : C(t), t = r - t, Pe(e, 0, t < 0 ? 0 : t)) : []
    }

    function Rn(e, t, n, r) {
        for (var a = e.length, s = r ? a : -1;
            (r ? s-- : ++s < a) && t(e[s], s, e););
        return n ? Pe(e, r ? 0 : s, r ? s + 1 : a) : Pe(e, r ? s + 1 : 0, r ? a : s)
    }

    function Bi(e, t) {
        return e && e.length ? Rn(e, N(t), !0, !0) : []
    }

    function Mi(e, t) {
        return e && e.length ? Rn(e, N(t), !0) : []
    }

    function Ce(e) {
        return typeof e == "function" ? e : ce
    }

    function Pn(e, t) {
        var n = T(e) ? pe : bt;
        return n(e, Ce(t))
    }

    function zg(e, t) {
        for (var n = e == null ? 0 : e.length; n-- && t(e[n], n, e) !== !1;);
        return e
    }
    var Gg = SP(!0);
    const Wi = Gg;

    function zr(e, t) {
        return e && Wi(e, t, J)
    }
    var Ug = NP(zr, !0);
    const Fi = Ug;

    function Tn(e, t) {
        var n = T(e) ? zg : Fi;
        return n(e, Ce(t))
    }

    function zi(e, t, n) {
        e = W(e), t = be(t);
        var r = e.length;
        n = n === void 0 ? r : ct(C(n), 0, r);
        var a = n;
        return n -= t.length, n >= 0 && e.slice(n, a) == t
    }

    function Vg(e, t) {
        return Y(t, function(n) {
            return [n, e[n]]
        })
    }

    function Hg(e) {
        var t = -1,
            n = Array(e.size);
        return e.forEach(function(r) {
            n[++t] = [r, r]
        }), n
    }
    var Kg = "[object Map]",
        qg = "[object Set]";

    function Gi(e) {
        return function(t) {
            var n = tt(t);
            return n == Kg ? Zd(t) : n == qg ? Hg(t) : Vg(t, e(t))
        }
    }
    var Yg = Gi(J);
    const Dn = Yg;
    var Zg = Gi(te);
    const Ln = Zg;
    var $g = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        },
        Xg = vN($g);
    const Jg = Xg;
    var Ui = /[&<>"']/g,
        Qg = RegExp(Ui.source);

    function Gr(e) {
        return e = W(e), e && Qg.test(e) ? e.replace(Ui, Jg) : e
    }
    var Vi = /[\\^$.*+?()[\]{}|]/g,
        ev = RegExp(Vi.source);

    function Hi(e) {
        return e = W(e), e && ev.test(e) ? e.replace(Vi, "\\$&") : e
    }

    function Ki(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length; ++n < r;)
            if (!t(e[n], n, e)) return !1;
        return !0
    }

    function tv(e, t) {
        var n = !0;
        return bt(e, function(r, a, s) {
            return n = !!t(r, a, s), n
        }), n
    }

    function qi(e, t, n) {
        var r = T(e) ? Ki : tv;
        return n && le(e, t, n) && (t = void 0), r(e, N(t))
    }
    var nv = 4294967295;

    function Ur(e) {
        return e ? ct(C(e), 0, nv) : 0
    }

    function rv(e, t, n, r) {
        var a = e.length;
        for (n = C(n), n < 0 && (n = -n > a ? 0 : a + n), r = r === void 0 || r > a ? a : C(r), r < 0 && (r += a), r = n > r ? 0 : Ur(r); n < r;) e[n++] = t;
        return e
    }

    function Yi(e, t, n, r) {
        var a = e == null ? 0 : e.length;
        return a ? (n && typeof n != "number" && le(e, t, n) && (n = 0, r = a), rv(e, t, n, r)) : []
    }

    function Zi(e, t) {
        var n = [];
        return bt(e, function(r, a, s) {
            t(r, a, s) && n.push(r)
        }), n
    }

    function $i(e, t) {
        var n = T(e) ? pt : Zi;
        return n(e, N(t))
    }

    function Xi(e) {
        return function(t, n, r) {
            var a = Object(t);
            if (!_e(t)) {
                var s = N(n);
                t = J(t), n = function(l) {
                    return s(a[l], l, a)
                }
            }
            var o = e(t, n, r);
            return o > -1 ? a[s ? t[o] : o] : void 0
        }
    }
    var av = Math.max;

    function Vr(e, t, n) {
        var r = e == null ? 0 : e.length;
        if (!r) return -1;
        var a = n == null ? 0 : C(n);
        return a < 0 && (a = av(r + a, 0)), xn(e, N(t), a)
    }
    var sv = Xi(Vr);
    const Ji = sv;

    function Qi(e, t, n) {
        var r;
        return n(e, function(a, s, o) {
            if (t(a, s, o)) return r = s, !1
        }), r
    }

    function eo(e, t) {
        return Qi(e, N(t), Ke)
    }
    var iv = Math.max,
        ov = Math.min;

    function Hr(e, t, n) {
        var r = e == null ? 0 : e.length;
        if (!r) return -1;
        var a = r - 1;
        return n !== void 0 && (a = C(n), a = n < 0 ? iv(r + a, 0) : ov(a, r - 1)), xn(e, N(t), a, !0)
    }
    var cv = Xi(Hr);
    const to = cv;

    function no(e, t) {
        return Qi(e, N(t), zr)
    }

    function On(e) {
        return e && e.length ? e[0] : void 0
    }

    function $t(e, t) {
        var n = T(e) ? Y : EP;
        return n(e, N(t))
    }

    function ro(e, t) {
        return ae($t(e, t), 1)
    }
    var lv = 1 / 0;

    function ao(e, t) {
        return ae($t(e, t), lv)
    }

    function so(e, t, n) {
        return n = n === void 0 ? 1 : C(n), ae($t(e, t), n)
    }
    var uv = 1 / 0;

    function io(e) {
        var t = e == null ? 0 : e.length;
        return t ? ae(e, uv) : []
    }

    function oo(e, t) {
        var n = e == null ? 0 : e.length;
        return n ? (t = t === void 0 ? 1 : C(t), ae(e, t)) : []
    }
    var dv = 512;

    function co(e) {
        return Oe(e, dv)
    }
    var fv = Ar("floor");
    const lo = fv;
    var pv = "Expected a function",
        hv = 8,
        mv = 32,
        gv = 128,
        vv = 256;

    function uo(e) {
        return Me(function(t) {
            var n = t.length,
                r = n,
                a = fe.prototype.thru;
            for (e && t.reverse(); r--;) {
                var s = t[r];
                if (typeof s != "function") throw new TypeError(pv);
                if (a && !o && yn(s) == "wrapper") var o = new fe([], !0)
            }
            for (r = o ? r : n; ++r < n;) {
                s = t[r];
                var l = yn(s),
                    u = l == "wrapper" ? gr(s) : void 0;
                u && vr(u[0]) && u[1] == (gv | hv | mv | vv) && !u[4].length && u[9] == 1 ? o = o[yn(u[0])].apply(o, u[3]) : o = s.length == 1 && vr(s) ? o[l]() : o.thru(s)
            }
            return function() {
                var f = arguments,
                    d = f[0];
                if (o && f.length == 1 && T(d)) return o.plant(d).value();
                for (var p = 0, m = n ? t[p].apply(this, f) : d; ++p < n;) m = t[p].call(this, m);
                return m
            }
        })
    }
    var yv = uo();
    const fo = yv;
    var bv = uo(!0);
    const po = bv;

    function ho(e, t) {
        return e == null ? e : lp(e, Ce(t), te)
    }

    function mo(e, t) {
        return e == null ? e : Wi(e, Ce(t), te)
    }

    function go(e, t) {
        return e && Ke(e, Ce(t))
    }

    function vo(e, t) {
        return e && zr(e, Ce(t))
    }

    function yo(e) {
        for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n;) {
            var a = e[t];
            r[a[0]] = a[1]
        }
        return r
    }

    function Bn(e, t) {
        return pt(t, function(n) {
            return nt(e[n])
        })
    }

    function bo(e) {
        return e == null ? [] : Bn(e, J(e))
    }

    function _o(e) {
        return e == null ? [] : Bn(e, te(e))
    }
    var _v = Object.prototype,
        xv = _v.hasOwnProperty,
        jv = In(function(e, t, n) {
            xv.call(e, n) ? e[n].push(t) : Be(e, n, [t])
        });
    const xo = jv;

    function Kr(e, t) {
        return e > t
    }

    function Mn(e) {
        return function(t, n) {
            return typeof t == "string" && typeof n == "string" || (t = ke(t), n = ke(n)), e(t, n)
        }
    }
    var wv = Mn(Kr);
    const jo = wv;
    var Sv = Mn(function(e, t) {
        return e >= t
    });
    const wo = Sv;
    var Nv = Object.prototype,
        Ev = Nv.hasOwnProperty;

    function Iv(e, t) {
        return e != null && Ev.call(e, t)
    }

    function So(e, t) {
        return e != null && yN(e, t, Iv)
    }
    var Cv = Math.max,
        Av = Math.min;

    function kv(e, t, n) {
        return e >= Av(t, n) && e < Cv(t, n)
    }

    function No(e, t, n) {
        return t = Ue(t), n === void 0 ? (n = t, t = 0) : n = Ue(n), e = ke(e), kv(e, t, n)
    }

    function qr(e, t) {
        return Y(t, function(n) {
            return e[n]
        })
    }

    function lt(e) {
        return e == null ? [] : qr(e, J(e))
    }
    var Rv = Math.max;

    function Eo(e, t, n, r) {
        e = _e(e) ? e : lt(e), n = n && !r ? C(n) : 0;
        var a = e.length;
        return n < 0 && (n = Rv(a + n, 0)), dn(e) ? n <= a && e.indexOf(t, n) > -1 : !!a && wt(e, t, n) > -1
    }
    var Pv = Math.max;

    function Io(e, t, n) {
        var r = e == null ? 0 : e.length;
        if (!r) return -1;
        var a = n == null ? 0 : C(n);
        return a < 0 && (a = Pv(r + a, 0)), wt(e, t, a)
    }

    function Co(e) {
        var t = e == null ? 0 : e.length;
        return t ? Pe(e, 0, -1) : []
    }
    var Tv = Math.min;

    function Yr(e, t, n) {
        for (var r = n ? Fr : jn, a = e[0].length, s = e.length, o = s, l = Array(s), u = 1 / 0, f = []; o--;) {
            var d = e[o];
            o && t && (d = Y(d, xe(t))), u = Tv(d.length, u), l[o] = !n && (t || a >= 120 && d.length >= 120) ? new Ya(o && d) : void 0
        }
        d = e[0];
        var p = -1,
            m = l[0];
        e: for (; ++p < a && f.length < u;) {
            var v = d[p],
                _ = t ? t(v) : v;
            if (v = n || v !== 0 ? v : 0, !(m ? nr(m, _) : r(f, _, n))) {
                for (o = s; --o;) {
                    var j = l[o];
                    if (!(j ? nr(j, _) : r(e[o], _, n))) continue e
                }
                m && m.push(_), f.push(v)
            }
        }
        return f
    }

    function Zr(e) {
        return H(e) ? e : []
    }
    var Dv = A(function(e) {
        var t = Y(e, Zr);
        return t.length && t[0] === e[0] ? Yr(t) : []
    });
    const Ao = Dv;
    var Lv = A(function(e) {
        var t = oe(e),
            n = Y(e, Zr);
        return t === oe(n) ? t = void 0 : n.pop(), n.length && n[0] === e[0] ? Yr(n, N(t)) : []
    });
    const ko = Lv;
    var Ov = A(function(e) {
        var t = oe(e),
            n = Y(e, Zr);
        return t = typeof t == "function" ? t : void 0, t && n.pop(), n.length && n[0] === e[0] ? Yr(n, void 0, t) : []
    });
    const Ro = Ov;

    function Bv(e, t, n, r) {
        return Ke(e, function(a, s, o) {
            t(r, n(a), s, o)
        }), r
    }

    function Po(e, t) {
        return function(n, r) {
            return Bv(n, e, t(r), {})
        }
    }
    var Mv = Object.prototype,
        Wv = Mv.toString,
        Fv = Po(function(e, t, n) {
            t != null && typeof t.toString != "function" && (t = Wv.call(t)), e[t] = n
        }, bn(ce));
    const To = Fv;
    var Do = Object.prototype,
        zv = Do.hasOwnProperty,
        Gv = Do.toString,
        Uv = Po(function(e, t, n) {
            t != null && typeof t.toString != "function" && (t = Gv.call(t)), zv.call(e, t) ? e[t].push(n) : e[t] = [n]
        }, N);
    const Lo = Uv;

    function Oo(e, t) {
        return t.length < 2 ? e : rr(e, Pe(t, 0, -1))
    }

    function Xt(e, t, n) {
        t = Mt(t, e), e = Oo(e, t);
        var r = e == null ? e : e[Dt(oe(t))];
        return r == null ? void 0 : ue(r, e, n)
    }
    var Vv = A(Xt);
    const Bo = Vv;
    var Hv = A(function(e, t, n) {
        var r = -1,
            a = typeof t == "function",
            s = _e(e) ? Array(e.length) : [];
        return bt(e, function(o) {
            s[++r] = a ? ue(t, o, n) : Xt(o, t, n)
        }), s
    });
    const Mo = Hv;
    var Kv = "[object ArrayBuffer]";

    function qv(e) {
        return Q(e) && et(e) == Kv
    }
    var Wo = Re && Re.isArrayBuffer,
        Yv = Wo ? xe(Wo) : qv;
    const Fo = Yv;
    var Zv = "[object Boolean]";

    function zo(e) {
        return e === !0 || e === !1 || Q(e) && et(e) == Zv
    }
    var $v = "[object Date]";

    function Xv(e) {
        return Q(e) && et(e) == $v
    }
    var Go = Re && Re.isDate,
        Jv = Go ? xe(Go) : Xv;
    const Uo = Jv;

    function Vo(e) {
        return Q(e) && e.nodeType === 1 && !It(e)
    }
    var Qv = "[object Map]",
        e0 = "[object Set]",
        t0 = Object.prototype,
        n0 = t0.hasOwnProperty;

    function Ho(e) {
        if (e == null) return !0;
        if (_e(e) && (T(e) || typeof e == "string" || typeof e.splice == "function" || Bt(e) || rn(e) || an(e))) return !e.length;
        var t = tt(e);
        if (t == Qv || t == e0) return !e.size;
        if (tr(e)) return !$d(e).length;
        for (var n in e)
            if (n0.call(e, n)) return !1;
        return !0
    }

    function Ko(e, t) {
        return Xd(e, t)
    }

    function qo(e, t, n) {
        n = typeof n == "function" ? n : void 0;
        var r = n ? n(e, t) : void 0;
        return r === void 0 ? Xd(e, t, void 0, n) : !!r
    }
    var r0 = Qe.isFinite;

    function Yo(e) {
        return typeof e == "number" && r0(e)
    }

    function $r(e) {
        return typeof e == "number" && e == C(e)
    }

    function Zo(e, t) {
        return e === t || Jd(e, t, Qd(t))
    }

    function $o(e, t, n) {
        return n = typeof n == "function" ? n : void 0, Jd(e, t, Qd(t), n)
    }
    var a0 = "[object Number]";

    function Xr(e) {
        return typeof e == "number" || Q(e) && et(e) == a0
    }

    function Xo(e) {
        return Xr(e) && e != +e
    }
    var s0 = bN ? nt : Za;
    const i0 = s0;
    var o0 = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.";

    function Jo(e) {
        if (i0(e)) throw new Error(o0);
        return _N(e)
    }

    function Qo(e) {
        return e == null
    }

    function ec(e) {
        return e === null
    }
    var c0 = "[object RegExp]";

    function l0(e) {
        return Q(e) && et(e) == c0
    }
    var tc = Re && Re.isRegExp,
        u0 = tc ? xe(tc) : l0;
    const Wn = u0;
    var nc = 9007199254740991;

    function rc(e) {
        return $r(e) && e >= -nc && e <= nc
    }

    function ac(e) {
        return e === void 0
    }
    var d0 = "[object WeakMap]";

    function sc(e) {
        return Q(e) && tt(e) == d0
    }
    var f0 = "[object WeakSet]";

    function ic(e) {
        return Q(e) && et(e) == f0
    }
    var p0 = 1;

    function oc(e) {
        return N(typeof e == "function" ? e : he(e, p0))
    }
    var h0 = Array.prototype,
        m0 = h0.join;

    function cc(e, t) {
        return e == null ? "" : m0.call(e, t)
    }
    var g0 = fn(function(e, t, n) {
        return e + (n ? "-" : "") + t.toLowerCase()
    });
    const lc = g0;
    var v0 = In(function(e, t, n) {
        Be(e, n, t)
    });
    const uc = v0;

    function y0(e, t, n) {
        for (var r = n + 1; r--;)
            if (e[r] === t) return r;
        return r
    }
    var b0 = Math.max,
        _0 = Math.min;

    function dc(e, t, n) {
        var r = e == null ? 0 : e.length;
        if (!r) return -1;
        var a = r;
        return n !== void 0 && (a = C(n), a = a < 0 ? b0(r + a, 0) : _0(a, r - 1)), t === t ? y0(e, t, a) : xn(e, Is, a, !0)
    }
    var x0 = fn(function(e, t, n) {
        return e + (n ? " " : "") + t.toLowerCase()
    });
    const fc = x0;
    var j0 = wP("toLowerCase");
    const pc = j0;

    function Jr(e, t) {
        return e < t
    }
    var w0 = Mn(Jr);
    const hc = w0;
    var S0 = Mn(function(e, t) {
        return e <= t
    });
    const mc = S0;

    function gc(e, t) {
        var n = {};
        return t = N(t), Ke(e, function(r, a, s) {
            Be(n, t(r, a, s), r)
        }), n
    }

    function vc(e, t) {
        var n = {};
        return t = N(t), Ke(e, function(r, a, s) {
            Be(n, a, t(r, a, s))
        }), n
    }
    var N0 = 1;

    function yc(e) {
        return xN(he(e, N0))
    }
    var E0 = 1;

    function bc(e, t) {
        return jN(e, he(t, E0))
    }

    function Fn(e, t, n) {
        for (var r = -1, a = e.length; ++r < a;) {
            var s = e[r],
                o = t(s);
            if (o != null && (l === void 0 ? o === o && !Pt(o) : n(o, l))) var l = o,
                u = s
        }
        return u
    }

    function _c(e) {
        return e && e.length ? Fn(e, ce, Kr) : void 0
    }

    function xc(e, t) {
        return e && e.length ? Fn(e, N(t), Kr) : void 0
    }

    function Qr(e, t) {
        for (var n, r = -1, a = e.length; ++r < a;) {
            var s = t(e[r]);
            s !== void 0 && (n = n === void 0 ? s : n + s)
        }
        return n
    }
    var I0 = 0 / 0;

    function jc(e, t) {
        var n = e == null ? 0 : e.length;
        return n ? Qr(e, t) / n : I0
    }

    function wc(e) {
        return jc(e, ce)
    }

    function Sc(e, t) {
        return jc(e, N(t))
    }
    var C0 = Nt(function(e, t, n) {
        kn(e, t, n)
    });
    const Nc = C0;
    var A0 = A(function(e, t) {
        return function(n) {
            return Xt(n, e, t)
        }
    });
    const Ec = A0;
    var k0 = A(function(e, t) {
        return function(n) {
            return Xt(e, n, t)
        }
    });
    const Ic = k0;

    function Cc(e) {
        return e && e.length ? Fn(e, ce, Jr) : void 0
    }

    function Ac(e, t) {
        return e && e.length ? Fn(e, N(t), Jr) : void 0
    }

    function ea(e, t, n) {
        var r = J(t),
            a = Bn(t, r),
            s = !(X(n) && "chain" in n) || !!n.chain,
            o = nt(e);
        return pe(a, function(l) {
            var u = t[l];
            e[l] = u, o && (e.prototype[l] = function() {
                var f = this.__chain__;
                if (s || f) {
                    var d = e(this.__wrapped__),
                        p = d.__actions__ = ie(this.__actions__);
                    return p.push({
                        func: u,
                        args: arguments,
                        thisArg: e
                    }), d.__chain__ = f, d
                }
                return u.apply(e, Lt([this.value()], arguments))
            })
        }), e
    }
    var R0 = V(function(e, t) {
        return e * t
    }, 1);
    const kc = R0;
    var P0 = "Expected a function";

    function Ct(e) {
        if (typeof e != "function") throw new TypeError(P0);
        return function() {
            var t = arguments;
            switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
            }
            return !e.apply(this, t)
        }
    }

    function T0(e) {
        for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
        return n
    }
    var D0 = "[object Map]",
        L0 = "[object Set]",
        ta = Ot ? Ot.iterator : void 0;

    function na(e) {
        if (!e) return [];
        if (_e(e)) return dn(e) ? Le(e) : ie(e);
        if (ta && e[ta]) return T0(e[ta]());
        var t = tt(e),
            n = t == D0 ? Zd : t == L0 ? $a : lt;
        return n(e)
    }

    function ra() {
        this.__values__ === void 0 && (this.__values__ = na(this.value()));
        var e = this.__index__ >= this.__values__.length,
            t = e ? void 0 : this.__values__[this.__index__++];
        return {
            done: e,
            value: t
        }
    }

    function Rc(e, t) {
        var n = e.length;
        if (n) return t += t < 0 ? n : 0, Tt(t, n) ? e[t] : void 0
    }

    function Pc(e, t) {
        return e && e.length ? Rc(e, C(t)) : void 0
    }

    function Tc(e) {
        return e = C(e), A(function(t) {
            return Rc(t, e)
        })
    }

    function aa(e, t) {
        return t = Mt(t, e), e = Oo(e, t), e == null || delete e[Dt(oe(t))]
    }

    function O0(e) {
        return It(e) ? void 0 : e
    }
    var B0 = 1,
        M0 = 2,
        W0 = 4,
        F0 = Me(function(e, t) {
            var n = {};
            if (e == null) return n;
            var r = !1;
            t = Y(t, function(s) {
                return s = Mt(s, e), r || (r = s.length > 1), s
            }), Ie(e, Rr(e), n), r && (n = he(n, B0 | M0 | W0, O0));
            for (var a = t.length; a--;) aa(n, t[a]);
            return n
        });
    const Dc = F0;

    function Jt(e, t, n, r) {
        if (!X(e)) return e;
        t = Mt(t, e);
        for (var a = -1, s = t.length, o = s - 1, l = e; l != null && ++a < s;) {
            var u = Dt(t[a]),
                f = n;
            if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
            if (a != o) {
                var d = l[u];
                f = r ? r(d, u, l) : void 0, f === void 0 && (f = X(d) ? d : Tt(t[a + 1]) ? [] : {})
            }
            Yt(l, u, f), l = l[u]
        }
        return e
    }

    function Lc(e, t, n) {
        for (var r = -1, a = t.length, s = {}; ++r < a;) {
            var o = t[r],
                l = rr(e, o);
            n(l, o) && Jt(s, Mt(o, e), l)
        }
        return s
    }

    function sa(e, t) {
        if (e == null) return {};
        var n = Y(Rr(e), function(r) {
            return [r]
        });
        return t = N(t), Lc(e, n, function(r, a) {
            return t(r, a[0])
        })
    }

    function Oc(e, t) {
        return sa(e, Ct(N(t)))
    }

    function ia(e) {
        return Me(function(t) {
            return t = Y(t, xe(N)), A(function(n) {
                var r = this;
                return e(t, function(a) {
                    return ue(a, r, n)
                })
            })
        })
    }
    var z0 = ia(Y);
    const Bc = z0;
    var G0 = A;
    const U0 = G0;
    var V0 = Math.min,
        H0 = U0(function(e, t) {
            t = t.length == 1 && T(t[0]) ? Y(t[0], xe(N)) : Y(ae(t, 1), xe(N));
            var n = t.length;
            return A(function(r) {
                for (var a = -1, s = V0(r.length, n); ++a < s;) r[a] = t[a].call(this, r[a]);
                return ue(e, this, r)
            })
        });
    const Mc = H0;
    var K0 = ia(Ki);
    const Wc = K0;
    var q0 = ia(ef);
    const Fc = q0;
    var Y0 = 9007199254740991,
        Z0 = Math.floor;

    function oa(e, t) {
        var n = "";
        if (!e || t < 1 || t > Y0) return n;
        do t % 2 && (n += e), t = Z0(t / 2), t && (e += e); while (t);
        return n
    }
    var $0 = tf("length");
    const X0 = $0;
    var zc = "\uD800-\uDFFF",
        J0 = "\\u0300-\\u036f",
        Q0 = "\\ufe20-\\ufe2f",
        ey = "\\u20d0-\\u20ff",
        ty = J0 + Q0 + ey,
        ny = "\\ufe0e\\ufe0f",
        ry = "[" + zc + "]",
        ca = "[" + ty + "]",
        la = "\uD83C[\uDFFB-\uDFFF]",
        ay = "(?:" + ca + "|" + la + ")",
        Gc = "[^" + zc + "]",
        Uc = "(?:\uD83C[\uDDE6-\uDDFF]){2}",
        Vc = "[\uD800-\uDBFF][\uDC00-\uDFFF]",
        sy = "\\u200d",
        Hc = ay + "?",
        Kc = "[" + ny + "]?",
        iy = "(?:" + sy + "(?:" + [Gc, Uc, Vc].join("|") + ")" + Kc + Hc + ")*",
        oy = Kc + Hc + iy,
        cy = "(?:" + [Gc + ca + "?", ca, Uc, Vc, ry].join("|") + ")",
        qc = RegExp(la + "(?=" + la + ")|" + cy + oy, "g");

    function ly(e) {
        for (var t = qc.lastIndex = 0; qc.test(e);) ++t;
        return t
    }

    function At(e) {
        return hr(e) ? ly(e) : X0(e)
    }
    var uy = Math.ceil;

    function zn(e, t) {
        t = t === void 0 ? " " : be(t);
        var n = t.length;
        if (n < 2) return n ? oa(t, e) : t;
        var r = oa(t, uy(e / At(t)));
        return hr(t) ? yt(Le(r), 0, e).join("") : r.slice(0, e)
    }
    var dy = Math.ceil,
        fy = Math.floor;

    function Yc(e, t, n) {
        e = W(e), t = C(t);
        var r = t ? At(e) : 0;
        if (!t || r >= t) return e;
        var a = (t - r) / 2;
        return zn(fy(a), n) + e + zn(dy(a), n)
    }

    function Zc(e, t, n) {
        e = W(e), t = C(t);
        var r = t ? At(e) : 0;
        return t && r < t ? e + zn(t - r, n) : e
    }

    function $c(e, t, n) {
        e = W(e), t = C(t);
        var r = t ? At(e) : 0;
        return t && r < t ? zn(t - r, n) + e : e
    }
    var py = /^\s+/,
        hy = Qe.parseInt;

    function Xc(e, t, n) {
        return n || t == null ? t = 0 : t && (t = +t), hy(W(e).replace(py, ""), t || 0)
    }
    var my = 32,
        ua = A(function(e, t) {
            var n = qe(t, St(ua));
            return Oe(e, my, void 0, t, n)
        });
    ua.placeholder = {};
    const da = ua;
    var gy = 64,
        fa = A(function(e, t) {
            var n = qe(t, St(fa));
            return Oe(e, gy, void 0, t, n)
        });
    fa.placeholder = {};
    const Jc = fa;
    var vy = In(function(e, t, n) {
        e[n ? 0 : 1].push(t)
    }, function() {
        return [
            [],
            []
        ]
    });
    const Qc = vy;

    function yy(e, t) {
        return Lc(e, t, function(n, r) {
            return Xa(e, r)
        })
    }
    var by = Me(function(e, t) {
        return e == null ? {} : yy(e, t)
    });
    const el = by;

    function pa(e) {
        for (var t, n = this; n instanceof gn;) {
            var r = Ss(n);
            r.__index__ = 0, r.__values__ = void 0, t ? a.__wrapped__ = r : t = r;
            var a = r;
            n = n.__wrapped__
        }
        return a.__wrapped__ = e, t
    }

    function tl(e) {
        return function(t) {
            return e == null ? void 0 : rr(e, t)
        }
    }

    function _y(e, t, n, r) {
        for (var a = n - 1, s = e.length; ++a < s;)
            if (r(e[a], t)) return a;
        return -1
    }
    var xy = Array.prototype,
        nl = xy.splice;

    function ha(e, t, n, r) {
        var a = r ? _y : wt,
            s = -1,
            o = t.length,
            l = e;
        for (e === t && (t = ie(t)), n && (l = Y(e, xe(n))); ++s < o;)
            for (var u = 0, f = t[s], d = n ? n(f) : f;
                (u = a(l, d, u, r)) > -1;) l !== e && nl.call(l, u, 1), nl.call(e, u, 1);
        return e
    }

    function ma(e, t) {
        return e && e.length && t && t.length ? ha(e, t) : e
    }
    var jy = A(ma);
    const rl = jy;

    function al(e, t, n) {
        return e && e.length && t && t.length ? ha(e, t, N(n)) : e
    }

    function sl(e, t, n) {
        return e && e.length && t && t.length ? ha(e, t, void 0, n) : e
    }
    var wy = Array.prototype,
        Sy = wy.splice;

    function il(e, t) {
        for (var n = e ? t.length : 0, r = n - 1; n--;) {
            var a = t[n];
            if (n == r || a !== s) {
                var s = a;
                Tt(a) ? Sy.call(e, a, 1) : aa(e, a)
            }
        }
        return e
    }
    var Ny = Me(function(e, t) {
        var n = e == null ? 0 : e.length,
            r = Sr(e, t);
        return il(e, Y(t, function(a) {
            return Tt(a, n) ? +a : a
        }).sort(IP)), r
    });
    const ol = Ny;
    var Ey = Math.floor,
        Iy = Math.random;

    function ga(e, t) {
        return e + Ey(Iy() * (t - e + 1))
    }
    var Cy = parseFloat,
        Ay = Math.min,
        ky = Math.random;

    function cl(e, t, n) {
        if (n && typeof n != "boolean" && le(e, t, n) && (t = n = void 0), n === void 0 && (typeof t == "boolean" ? (n = t, t = void 0) : typeof e == "boolean" && (n = e, e = void 0)), e === void 0 && t === void 0 ? (e = 0, t = 1) : (e = Ue(e), t === void 0 ? (t = e, e = 0) : t = Ue(t)), e > t) {
            var r = e;
            e = t, t = r
        }
        if (n || e % 1 || t % 1) {
            var a = ky();
            return Ay(e + a * (t - e + Cy("1e-" + ((a + "").length - 1))), t)
        }
        return ga(e, t)
    }
    var Ry = Math.ceil,
        Py = Math.max;

    function Ty(e, t, n, r) {
        for (var a = -1, s = Py(Ry((t - e) / (n || 1)), 0), o = Array(s); s--;) o[r ? s : ++a] = e, e += n;
        return o
    }

    function ll(e) {
        return function(t, n, r) {
            return r && typeof r != "number" && le(t, n, r) && (n = r = void 0), t = Ue(t), n === void 0 ? (n = t, t = 0) : n = Ue(n), r = r === void 0 ? t < n ? 1 : -1 : Ue(r), Ty(t, n, r, e)
        }
    }
    var Dy = ll();
    const ul = Dy;
    var Ly = ll(!0);
    const dl = Ly;
    var Oy = 256,
        By = Me(function(e, t) {
            return Oe(e, Oy, void 0, void 0, void 0, t)
        });
    const fl = By;

    function pl(e, t, n, r, a) {
        return a(e, function(s, o, l) {
            n = r ? (r = !1, s) : t(n, s, o, l)
        }), n
    }

    function hl(e, t, n) {
        var r = T(e) ? rp : pl,
            a = arguments.length < 3;
        return r(e, N(t), n, a, bt)
    }

    function My(e, t, n, r) {
        var a = e == null ? 0 : e.length;
        for (r && a && (n = e[--a]); a--;) n = t(n, e[a], a, e);
        return n
    }

    function ml(e, t, n) {
        var r = T(e) ? My : pl,
            a = arguments.length < 3;
        return r(e, N(t), n, a, Fi)
    }

    function gl(e, t) {
        var n = T(e) ? pt : Zi;
        return n(e, Ct(N(t)))
    }

    function vl(e, t) {
        var n = [];
        if (!(e && e.length)) return n;
        var r = -1,
            a = [],
            s = e.length;
        for (t = N(t); ++r < s;) {
            var o = e[r];
            t(o, r, e) && (n.push(o), a.push(r))
        }
        return il(e, a), n
    }

    function yl(e, t, n) {
        return (n ? le(e, t, n) : t === void 0) ? t = 1 : t = C(t), oa(W(e), t)
    }

    function bl() {
        var e = arguments,
            t = W(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2])
    }
    var Wy = "Expected a function";

    function _l(e, t) {
        if (typeof e != "function") throw new TypeError(Wy);
        return t = t === void 0 ? t : C(t), A(e, t)
    }

    function xl(e, t, n) {
        t = Mt(t, e);
        var r = -1,
            a = t.length;
        for (a || (a = 1, e = void 0); ++r < a;) {
            var s = e == null ? void 0 : e[Dt(t[r])];
            s === void 0 && (r = a, s = n), e = nt(s) ? s.call(e) : s
        }
        return e
    }
    var Fy = Array.prototype,
        zy = Fy.reverse;

    function Gn(e) {
        return e == null ? e : zy.call(e)
    }
    var Gy = Ar("round");
    const jl = Gy;

    function wl(e) {
        var t = e.length;
        return t ? e[ga(0, t - 1)] : void 0
    }

    function Uy(e) {
        return wl(lt(e))
    }

    function Sl(e) {
        var t = T(e) ? wl : Uy;
        return t(e)
    }

    function Un(e, t) {
        var n = -1,
            r = e.length,
            a = r - 1;
        for (t = t === void 0 ? r : t; ++n < t;) {
            var s = ga(n, a),
                o = e[s];
            e[s] = e[n], e[n] = o
        }
        return e.length = t, e
    }

    function Vy(e, t) {
        return Un(ie(e), ct(t, 0, e.length))
    }

    function Hy(e, t) {
        var n = lt(e);
        return Un(n, ct(t, 0, n.length))
    }

    function Nl(e, t, n) {
        (n ? le(e, t, n) : t === void 0) ? t = 1: t = C(t);
        var r = T(e) ? Vy : Hy;
        return r(e, t)
    }

    function El(e, t, n) {
        return e == null ? e : Jt(e, t, n)
    }

    function Il(e, t, n, r) {
        return r = typeof r == "function" ? r : void 0, e == null ? e : Jt(e, t, n, r)
    }

    function Ky(e) {
        return Un(ie(e))
    }

    function qy(e) {
        return Un(lt(e))
    }

    function Cl(e) {
        var t = T(e) ? Ky : qy;
        return t(e)
    }
    var Yy = "[object Map]",
        Zy = "[object Set]";

    function Al(e) {
        if (e == null) return 0;
        if (_e(e)) return dn(e) ? At(e) : e.length;
        var t = tt(e);
        return t == Yy || t == Zy ? e.size : $d(e).length
    }

    function kl(e, t, n) {
        var r = e == null ? 0 : e.length;
        return r ? (n && typeof n != "number" && le(e, t, n) ? (t = 0, n = r) : (t = t == null ? 0 : C(t), n = n === void 0 ? r : C(n)), Pe(e, t, n)) : []
    }
    var $y = fn(function(e, t, n) {
        return e + (n ? "_" : "") + t.toLowerCase()
    });
    const Rl = $y;

    function Xy(e, t) {
        var n;
        return bt(e, function(r, a, s) {
            return n = t(r, a, s), !n
        }), !!n
    }

    function Pl(e, t, n) {
        var r = T(e) ? ef : Xy;
        return n && le(e, t, n) && (t = void 0), r(e, N(t))
    }
    var Jy = A(function(e, t) {
        if (e == null) return [];
        var n = t.length;
        return n > 1 && le(e, t[0], t[1]) ? t = [] : n > 2 && le(t[0], t[1], t[2]) && (t = [t[0]]), CP(e, ae(t, 1), [])
    });
    const Tl = Jy;
    var Qy = 4294967295,
        eb = Qy >>> 1;

    function Vn(e, t, n) {
        var r = 0,
            a = e == null ? r : e.length;
        if (typeof t == "number" && t === t && a <= eb) {
            for (; r < a;) {
                var s = r + a >>> 1,
                    o = e[s];
                o !== null && !Pt(o) && (n ? o <= t : o < t) ? r = s + 1 : a = s
            }
            return a
        }
        return nf(e, t, ce, n)
    }

    function Dl(e, t) {
        return Vn(e, t)
    }

    function Ll(e, t) {
        var n = e == null ? 0 : e.length;
        if (n) {
            var r = Vn(e, t);
            if (r < n && Ge(e[r], t)) return r
        }
        return -1
    }

    function Ol(e, t) {
        return Vn(e, t, !0)
    }

    function Bl(e, t, n) {
        return nf(e, t, N(n), !0)
    }

    function Ml(e, t) {
        var n = e == null ? 0 : e.length;
        if (n) {
            var r = Vn(e, t, !0) - 1;
            if (Ge(e[r], t)) return r
        }
        return -1
    }

    function Wl(e, t) {
        for (var n = -1, r = e.length, a = 0, s = []; ++n < r;) {
            var o = e[n],
                l = t ? t(o) : o;
            if (!n || !Ge(l, u)) {
                var u = l;
                s[a++] = o === 0 ? 0 : o
            }
        }
        return s
    }

    function Fl(e) {
        return e && e.length ? Wl(e) : []
    }

    function zl(e, t) {
        return e && e.length ? Wl(e, N(t)) : []
    }
    var tb = 4294967295;

    function Gl(e, t, n) {
        return n && typeof n != "number" && le(e, t, n) && (t = n = void 0), n = n === void 0 ? tb : n >>> 0, n ? (e = W(e), e && (typeof t == "string" || t != null && !Wn(t)) && (t = be(t), !t && hr(e)) ? yt(Le(e), 0, n) : e.split(t, n)) : []
    }
    var nb = "Expected a function",
        rb = Math.max;

    function Ul(e, t) {
        if (typeof e != "function") throw new TypeError(nb);
        return t = t == null ? 0 : rb(C(t), 0), A(function(n) {
            var r = n[t],
                a = yt(n, 0, t);
            return r && Lt(a, r), ue(e, this, a)
        })
    }
    var ab = fn(function(e, t, n) {
        return e + (n ? " " : "") + gs(t)
    });
    const Vl = ab;

    function Hl(e, t, n) {
        return e = W(e), n = n == null ? 0 : ct(C(n), 0, e.length), t = be(t), e.slice(n, n + t.length) == t
    }

    function Kl() {
        return {}
    }

    function ql() {
        return ""
    }

    function Yl() {
        return !0
    }
    var sb = V(function(e, t) {
        return e - t
    }, 0);
    const Zl = sb;

    function $l(e) {
        return e && e.length ? Qr(e, ce) : 0
    }

    function Xl(e, t) {
        return e && e.length ? Qr(e, N(t)) : 0
    }

    function Jl(e) {
        var t = e == null ? 0 : e.length;
        return t ? Pe(e, 1, t) : []
    }

    function Ql(e, t, n) {
        return e && e.length ? (t = n || t === void 0 ? 1 : C(t), Pe(e, 0, t < 0 ? 0 : t)) : []
    }

    function eu(e, t, n) {
        var r = e == null ? 0 : e.length;
        return r ? (t = n || t === void 0 ? 1 : C(t), t = r - t, Pe(e, t < 0 ? 0 : t, r)) : []
    }

    function tu(e, t) {
        return e && e.length ? Rn(e, N(t), !1, !0) : []
    }

    function nu(e, t) {
        return e && e.length ? Rn(e, N(t)) : []
    }

    function ru(e, t) {
        return t(e), e
    }
    var au = Object.prototype,
        ib = au.hasOwnProperty;

    function su(e, t, n, r) {
        return e === void 0 || Ge(e, au[n]) && !ib.call(r, n) ? t : e
    }
    var ob = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
    };

    function cb(e) {
        return "\\" + ob[e]
    }
    var lb = /<%=([\s\S]+?)%>/g;
    const iu = lb;
    var ub = /<%-([\s\S]+?)%>/g;
    const db = ub;
    var fb = /<%([\s\S]+?)%>/g,
        pb = {
            escape: db,
            evaluate: fb,
            interpolate: iu,
            variable: "",
            imports: {
                _: {
                    escape: Gr
                }
            }
        };
    const Hn = pb;
    var hb = "Invalid `variable` option passed into `_.template`",
        mb = /\b__p \+= '';/g,
        gb = /\b(__p \+=) '' \+/g,
        vb = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        yb = /[()=,{}\[\]\/\s]/,
        bb = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        Kn = /($^)/,
        _b = /['\n\r\u2028\u2029\\]/g,
        xb = Object.prototype,
        ou = xb.hasOwnProperty;

    function cu(e, t, n) {
        var r = Hn.imports._.templateSettings || Hn;
        n && le(e, t, n) && (t = void 0), e = W(e), t = Et({}, t, r, su);
        var a = Et({}, t.imports, r.imports, su),
            s = J(a),
            o = qr(a, s),
            l, u, f = 0,
            d = t.interpolate || Kn,
            p = "__p += '",
            m = RegExp((t.escape || Kn).source + "|" + d.source + "|" + (d === iu ? bb : Kn).source + "|" + (t.evaluate || Kn).source + "|$", "g"),
            v = ou.call(t, "sourceURL") ? "//# sourceURL=" + (t.sourceURL + "").replace(/\s/g, " ") + `
` : "";
        e.replace(m, function(S, I, R, ye, Xe, Qn) {
            return R || (R = ye), p += e.slice(f, Qn).replace(_b, cb), I && (l = !0, p += `' +
__e(` + I + `) +
'`), Xe && (u = !0, p += `';
` + Xe + `;
__p += '`), R && (p += `' +
((__t = (` + R + `)) == null ? '' : __t) +
'`), f = Qn + S.length, S
        }), p += `';
`;
        var _ = ou.call(t, "variable") && t.variable;
        if (!_) p = `with (obj) {
` + p + `
}
`;
        else if (yb.test(_)) throw new Error(hb);
        p = (u ? p.replace(mb, "") : p).replace(gb, "$1").replace(vb, "$1;"), p = "function(" + (_ || "obj") + `) {
` + (_ ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (l ? ", __e = _.escape" : "") + (u ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + p + `return __p
}`;
        var j = Nr(function() {
            return Function(s, v + "return " + p).apply(void 0, o)
        });
        if (j.source = p, En(j)) throw j;
        return j
    }

    function kt(e, t) {
        return t(e)
    }
    var jb = 9007199254740991,
        va = 4294967295,
        wb = Math.min;

    function lu(e, t) {
        if (e = C(e), e < 1 || e > jb) return [];
        var n = va,
            r = wb(e, va);
        t = Ce(t), e -= va;
        for (var a = rf(r, t); ++n < e;) t(n);
        return a
    }

    function ya() {
        return this
    }

    function uu(e, t) {
        var n = e;
        return n instanceof k && (n = n.value()), rp(t, function(r, a) {
            return a.func.apply(a.thisArg, Lt([r], a.args))
        }, n)
    }

    function ut() {
        return uu(this.__wrapped__, this.__actions__)
    }

    function du(e) {
        return W(e).toLowerCase()
    }

    function fu(e) {
        return T(e) ? Y(e, Dt) : Pt(e) ? [e] : ie(wN(W(e)))
    }
    var pu = 9007199254740991;

    function hu(e) {
        return e ? ct(C(e), -pu, pu) : e === 0 ? e : 0
    }

    function mu(e) {
        return W(e).toUpperCase()
    }

    function gu(e, t, n) {
        var r = T(e),
            a = r || Bt(e) || rn(e);
        if (t = N(t), n == null) {
            var s = e && e.constructor;
            a ? n = r ? new s : [] : X(e) ? n = nt(s) ? xt(Nn(e)) : {} : n = {}
        }
        return (a ? pe : Ke)(e, function(o, l, u) {
            return t(n, o, l, u)
        }), n
    }

    function vu(e, t) {
        for (var n = e.length; n-- && wt(t, e[n], 0) > -1;);
        return n
    }

    function yu(e, t) {
        for (var n = -1, r = e.length; ++n < r && wt(t, e[n], 0) > -1;);
        return n
    }

    function bu(e, t, n) {
        if (e = W(e), e && (n || t === void 0)) return SN(e);
        if (!e || !(t = be(t))) return e;
        var r = Le(e),
            a = Le(t),
            s = yu(r, a),
            o = vu(r, a) + 1;
        return yt(r, s, o).join("")
    }

    function _u(e, t, n) {
        if (e = W(e), e && (n || t === void 0)) return e.slice(0, NN(e) + 1);
        if (!e || !(t = be(t))) return e;
        var r = Le(e),
            a = vu(r, Le(t)) + 1;
        return yt(r, 0, a).join("")
    }
    var Sb = /^\s+/;

    function xu(e, t, n) {
        if (e = W(e), e && (n || t === void 0)) return e.replace(Sb, "");
        if (!e || !(t = be(t))) return e;
        var r = Le(e),
            a = yu(r, Le(t));
        return yt(r, a).join("")
    }
    var Nb = 30,
        Eb = "...",
        Ib = /\w*$/;

    function ju(e, t) {
        var n = Nb,
            r = Eb;
        if (X(t)) {
            var a = "separator" in t ? t.separator : a;
            n = "length" in t ? C(t.length) : n, r = "omission" in t ? be(t.omission) : r
        }
        e = W(e);
        var s = e.length;
        if (hr(e)) {
            var o = Le(e);
            s = o.length
        }
        if (n >= s) return e;
        var l = n - At(r);
        if (l < 1) return r;
        var u = o ? yt(o, 0, l).join("") : e.slice(0, l);
        if (a === void 0) return u + r;
        if (o && (l += u.length - l), Wn(a)) {
            if (e.slice(l).search(a)) {
                var f, d = u;
                for (a.global || (a = RegExp(a.source, W(Ib.exec(a)) + "g")), a.lastIndex = 0; f = a.exec(d);) var p = f.index;
                u = u.slice(0, p === void 0 ? l : p)
            }
        } else if (e.indexOf(be(a), l) != l) {
            var m = u.lastIndexOf(a);
            m > -1 && (u = u.slice(0, m))
        }
        return u + r
    }

    function wu(e) {
        return wr(e, 1)
    }
    var Cb = 1 / 0,
        Ab = Ja && 1 / $a(new Ja([, -0]))[1] == Cb ? function(e) {
            return new Ja(e)
        } : vn;
    const kb = Ab;
    var Rb = 200;

    function Ye(e, t, n) {
        var r = -1,
            a = jn,
            s = e.length,
            o = !0,
            l = [],
            u = l;
        if (n) o = !1, a = Fr;
        else if (s >= Rb) {
            var f = t ? null : kb(e);
            if (f) return $a(f);
            o = !1, a = nr, u = new Ya
        } else u = t ? [] : l;
        e: for (; ++r < s;) {
            var d = e[r],
                p = t ? t(d) : d;
            if (d = n || d !== 0 ? d : 0, o && p === p) {
                for (var m = u.length; m--;)
                    if (u[m] === p) continue e;
                t && u.push(p), l.push(d)
            } else a(u, p, n) || (u !== l && u.push(p), l.push(d))
        }
        return l
    }
    var Pb = A(function(e) {
        return Ye(ae(e, 1, H, !0))
    });
    const Su = Pb;
    var Tb = A(function(e) {
        var t = oe(e);
        return H(t) && (t = void 0), Ye(ae(e, 1, H, !0), N(t))
    });
    const Nu = Tb;
    var Db = A(function(e) {
        var t = oe(e);
        return t = typeof t == "function" ? t : void 0, Ye(ae(e, 1, H, !0), void 0, t)
    });
    const Eu = Db;

    function Iu(e) {
        return e && e.length ? Ye(e) : []
    }

    function Cu(e, t) {
        return e && e.length ? Ye(e, N(t)) : []
    }

    function Au(e, t) {
        return t = typeof t == "function" ? t : void 0, e && e.length ? Ye(e, void 0, t) : []
    }
    var Lb = 0;

    function ku(e) {
        var t = ++Lb;
        return W(e) + t
    }

    function Ru(e, t) {
        return e == null ? !0 : aa(e, t)
    }
    var Ob = Math.max;

    function qn(e) {
        if (!(e && e.length)) return [];
        var t = 0;
        return e = pt(e, function(n) {
            if (H(n)) return t = Ob(n.length, t), !0
        }), rf(t, function(n) {
            return Y(e, tf(n))
        })
    }

    function ba(e, t) {
        if (!(e && e.length)) return [];
        var n = qn(e);
        return t == null ? n : Y(n, function(r) {
            return ue(t, void 0, r)
        })
    }

    function Pu(e, t, n, r) {
        return Jt(e, t, n(rr(e, t)), r)
    }

    function Tu(e, t, n) {
        return e == null ? e : Pu(e, t, Ce(n))
    }

    function Du(e, t, n, r) {
        return r = typeof r == "function" ? r : void 0, e == null ? e : Pu(e, t, Ce(n), r)
    }
    var Bb = fn(function(e, t, n) {
        return e + (n ? " " : "") + t.toUpperCase()
    });
    const Lu = Bb;

    function Ou(e) {
        return e == null ? [] : qr(e, te(e))
    }
    var Mb = A(function(e, t) {
        return H(e) ? Zt(e, t) : []
    });
    const Bu = Mb;

    function Mu(e, t) {
        return da(Ce(t), e)
    }
    var Wb = Me(function(e) {
        var t = e.length,
            n = t ? e[0] : 0,
            r = this.__wrapped__,
            a = function(s) {
                return Sr(s, e)
            };
        return t > 1 || this.__actions__.length || !(r instanceof k) || !Tt(n) ? this.thru(a) : (r = r.slice(n, +n + (t ? 1 : 0)), r.__actions__.push({
            func: kt,
            args: [a],
            thisArg: void 0
        }), new fe(r, this.__chain__).thru(function(s) {
            return t && !s.length && s.push(void 0), s
        }))
    });
    const Wu = Wb;

    function Fu() {
        return kr(this)
    }

    function zu() {
        var e = this.__wrapped__;
        if (e instanceof k) {
            var t = e;
            return this.__actions__.length && (t = new k(this)), t = t.reverse(), t.__actions__.push({
                func: kt,
                args: [Gn],
                thisArg: void 0
            }), new fe(t, this.__chain__)
        }
        return this.thru(Gn)
    }

    function _a(e, t, n) {
        var r = e.length;
        if (r < 2) return r ? Ye(e[0]) : [];
        for (var a = -1, s = Array(r); ++a < r;)
            for (var o = e[a], l = -1; ++l < r;) l != a && (s[a] = Zt(s[a] || o, e[l], t, n));
        return Ye(ae(s, 1), t, n)
    }
    var Fb = A(function(e) {
        return _a(pt(e, H))
    });
    const Gu = Fb;
    var zb = A(function(e) {
        var t = oe(e);
        return H(t) && (t = void 0), _a(pt(e, H), N(t))
    });
    const Uu = zb;
    var Gb = A(function(e) {
        var t = oe(e);
        return t = typeof t == "function" ? t : void 0, _a(pt(e, H), void 0, t)
    });
    const Vu = Gb;
    var Ub = A(qn);
    const Hu = Ub;

    function Ku(e, t, n) {
        for (var r = -1, a = e.length, s = t.length, o = {}; ++r < a;) {
            var l = r < s ? t[r] : void 0;
            n(o, e[r], l)
        }
        return o
    }

    function qu(e, t) {
        return Ku(e || [], t || [], Yt)
    }

    function Yu(e, t) {
        return Ku(e || [], t || [], Jt)
    }
    var Vb = A(function(e) {
        var t = e.length,
            n = t > 1 ? e[t - 1] : void 0;
        return n = typeof n == "function" ? (e.pop(), n) : void 0, ba(e, n)
    });
    const Zu = Vb,
        y = {
            chunk: af,
            compact: cp,
            concat: gi,
            difference: Ri,
            differenceBy: Pi,
            differenceWith: Ti,
            drop: Li,
            dropRight: Oi,
            dropRightWhile: Bi,
            dropWhile: Mi,
            fill: Yi,
            findIndex: Vr,
            findLastIndex: Hr,
            first: On,
            flatten: ms,
            flattenDeep: io,
            flattenDepth: oo,
            fromPairs: yo,
            head: On,
            indexOf: Io,
            initial: Co,
            intersection: Ao,
            intersectionBy: ko,
            intersectionWith: Ro,
            join: cc,
            last: oe,
            lastIndexOf: dc,
            nth: Pc,
            pull: rl,
            pullAll: ma,
            pullAllBy: al,
            pullAllWith: sl,
            pullAt: ol,
            remove: vl,
            reverse: Gn,
            slice: kl,
            sortedIndex: Dl,
            sortedIndexBy: sf,
            sortedIndexOf: Ll,
            sortedLastIndex: Ol,
            sortedLastIndexBy: Bl,
            sortedLastIndexOf: Ml,
            sortedUniq: Fl,
            sortedUniqBy: zl,
            tail: Jl,
            take: Ql,
            takeRight: eu,
            takeRightWhile: tu,
            takeWhile: nu,
            union: Su,
            unionBy: Nu,
            unionWith: Eu,
            uniq: Iu,
            uniqBy: Cu,
            uniqWith: Au,
            unzip: qn,
            unzipWith: ba,
            without: Bu,
            xor: Gu,
            xorBy: Uu,
            xorWith: Vu,
            zip: Hu,
            zipObject: qu,
            zipObjectDeep: Yu,
            zipWith: Zu
        },
        O = {
            countBy: xi,
            each: Pn,
            eachRight: Tn,
            every: qi,
            filter: $i,
            find: Ji,
            findLast: to,
            flatMap: ro,
            flatMapDeep: ao,
            flatMapDepth: so,
            forEach: Pn,
            forEachRight: Tn,
            groupBy: xo,
            includes: Eo,
            invokeMap: Mo,
            keyBy: uc,
            map: $t,
            orderBy: up,
            partition: Qc,
            reduce: hl,
            reduceRight: ml,
            reject: gl,
            sample: Sl,
            sampleSize: Nl,
            shuffle: Cl,
            size: Al,
            some: Pl,
            sortBy: Tl
        },
        Hb = {
            now: of
        },
        K = {
            after: bs,
            ary: wr,
            before: cf,
            bind: Ir,
            bindKey: Ks,
            curry: Cn,
            curryRight: An,
            debounce: lf,
            defer: Ai,
            delay: ki,
            flip: co,
            memoize: de,
            negate: Ct,
            once: Wt,
            overArgs: Mc,
            partial: da,
            partialRight: Jc,
            rearg: fl,
            rest: _l,
            spread: Ul,
            throttle: uf,
            unary: wu,
            wrap: Mu
        },
        x = {
            castArray: qs,
            clone: fi,
            cloneDeep: pi,
            cloneDeepWith: hi,
            cloneWith: mi,
            conformsTo: _i,
            eq: Ge,
            gt: jo,
            gte: wo,
            isArguments: an,
            isArray: T,
            isArrayBuffer: Fo,
            isArrayLike: _e,
            isArrayLikeObject: H,
            isBoolean: zo,
            isBuffer: Bt,
            isDate: Uo,
            isElement: Vo,
            isEmpty: Ho,
            isEqual: Ko,
            isEqualWith: qo,
            isError: En,
            isFinite: Yo,
            isFunction: nt,
            isInteger: $r,
            isLength: df,
            isMap: Tr,
            isMatch: Zo,
            isMatchWith: $o,
            isNaN: Xo,
            isNative: Jo,
            isNil: Qo,
            isNull: ec,
            isNumber: Xr,
            isObject: X,
            isObjectLike: Q,
            isPlainObject: It,
            isRegExp: Wn,
            isSafeInteger: rc,
            isSet: Dr,
            isString: dn,
            isSymbol: Pt,
            isTypedArray: rn,
            isUndefined: ac,
            isWeakMap: sc,
            isWeakSet: ic,
            lt: hc,
            lte: mc,
            toArray: na,
            toFinite: Ue,
            toInteger: C,
            toLength: Ur,
            toNumber: ke,
            toPlainObject: Mr,
            toSafeInteger: hu,
            toString: W
        },
        ne = {
            add: ys,
            ceil: Ys,
            divide: Di,
            floor: lo,
            max: _c,
            maxBy: xc,
            mean: wc,
            meanBy: Sc,
            min: Cc,
            minBy: Ac,
            multiply: kc,
            round: jl,
            subtract: Zl,
            sum: $l,
            sumBy: Xl
        },
        xa = {
            clamp: Zs,
            inRange: No,
            random: cl
        },
        w = {
            assign: zs,
            assignIn: Sn,
            assignInWith: Et,
            assignWith: Gs,
            at: Us,
            create: ji,
            defaults: Ni,
            defaultsDeep: Ii,
            entries: Dn,
            entriesIn: Ln,
            extend: Sn,
            extendWith: Et,
            findKey: eo,
            findLastKey: no,
            forIn: ho,
            forInRight: mo,
            forOwn: go,
            forOwnRight: vo,
            functions: bo,
            functionsIn: _o,
            get: Ka,
            has: So,
            hasIn: Xa,
            invert: To,
            invertBy: Lo,
            invoke: Bo,
            keys: J,
            keysIn: te,
            mapKeys: gc,
            mapValues: vc,
            merge: Nc,
            mergeWith: Wr,
            omit: Dc,
            omitBy: Oc,
            pick: el,
            pickBy: sa,
            result: xl,
            set: El,
            setWith: Il,
            toPairs: Dn,
            toPairsIn: Ln,
            transform: gu,
            unset: Ru,
            update: Tu,
            updateWith: Du,
            values: lt,
            valuesIn: Ou
        },
        Ae = {
            at: Wu,
            chain: kr,
            commit: Lr,
            lodash: c,
            next: ra,
            plant: pa,
            reverse: zu,
            tap: ru,
            thru: kt,
            toIterator: ya,
            toJSON: ut,
            value: ut,
            valueOf: ut,
            wrapperChain: Fu
        },
        P = {
            camelCase: ap,
            capitalize: sp,
            deburr: ip,
            endsWith: zi,
            escape: Gr,
            escapeRegExp: Hi,
            kebabCase: lc,
            lowerCase: fc,
            lowerFirst: pc,
            pad: Yc,
            padEnd: Zc,
            padStart: $c,
            parseInt: Xc,
            repeat: yl,
            replace: bl,
            snakeCase: Rl,
            split: Gl,
            startCase: Vl,
            startsWith: Hl,
            template: cu,
            templateSettings: Hn,
            toLower: du,
            toUpper: mu,
            trim: bu,
            trimEnd: _u,
            trimStart: xu,
            truncate: ju,
            unescape: ff,
            upperCase: Lu,
            upperFirst: gs,
            words: op
        },
        D = {
            attempt: Nr,
            bindAll: Hs,
            cond: vi,
            conforms: bi,
            constant: bn,
            defaultTo: wi,
            flow: fo,
            flowRight: po,
            identity: ce,
            iteratee: oc,
            matches: yc,
            matchesProperty: bc,
            method: Ec,
            methodOf: Ic,
            mixin: ea,
            noop: vn,
            nthArg: Tc,
            over: Bc,
            overEvery: Wc,
            overSome: Fc,
            property: pf,
            propertyOf: tl,
            range: ul,
            rangeRight: dl,
            stubArray: qa,
            stubFalse: Za,
            stubObject: Kl,
            stubString: ql,
            stubTrue: Yl,
            times: lu,
            toPath: fu,
            uniqueId: ku
        };

    function Kb() {
        var e = new k(this.__wrapped__);
        return e.__actions__ = ie(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = ie(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = ie(this.__views__), e
    }

    function qb() {
        if (this.__filtered__) {
            var e = new k(this);
            e.__dir__ = -1, e.__filtered__ = !0
        } else e = this.clone(), e.__dir__ *= -1;
        return e
    }
    var Yb = Math.max,
        Zb = Math.min;

    function $b(e, t, n) {
        for (var r = -1, a = n.length; ++r < a;) {
            var s = n[r],
                o = s.size;
            switch (s.type) {
                case "drop":
                    e += o;
                    break;
                case "dropRight":
                    t -= o;
                    break;
                case "take":
                    t = Zb(t, e + o);
                    break;
                case "takeRight":
                    e = Yb(e, t - o);
                    break
            }
        }
        return {
            start: e,
            end: t
        }
    }
    var Xb = 1,
        Jb = 2,
        Qb = Math.min;

    function e_() {
        var e = this.__wrapped__.value(),
            t = this.__dir__,
            n = T(e),
            r = t < 0,
            a = n ? e.length : 0,
            s = $b(0, a, this.__views__),
            o = s.start,
            l = s.end,
            u = l - o,
            f = r ? l : o - 1,
            d = this.__iteratees__,
            p = d.length,
            m = 0,
            v = Qb(u, this.__takeCount__);
        if (!n || !r && a == u && v == u) return uu(e, this.__actions__);
        var _ = [];
        e: for (; u-- && m < v;) {
            f += t;
            for (var j = -1, S = e[f]; ++j < p;) {
                var I = d[j],
                    R = I.iteratee,
                    ye = I.type,
                    Xe = R(S);
                if (ye == Jb) S = Xe;
                else if (!Xe) {
                    if (ye == Xb) continue e;
                    break e
                }
            }
            _[m++] = S
        }
        return _
    }
    var t_ = "4.17.21",
        n_ = 2,
        r_ = 1,
        a_ = 3,
        $u = 4294967295,
        s_ = Array.prototype,
        i_ = Object.prototype,
        Xu = i_.hasOwnProperty,
        Ju = Ot ? Ot.iterator : void 0,
        o_ = Math.max,
        Qu = Math.min,
        ja = function(e) {
            return function(t, n, r) {
                if (r == null) {
                    var a = X(n),
                        s = a && J(n),
                        o = s && s.length && Bn(n, s);
                    (o ? o.length : a) || (r = n, n = t, t = this)
                }
                return e(t, n, r)
            }
        }(ea);
    c.after = K.after, c.ary = K.ary, c.assign = w.assign, c.assignIn = w.assignIn, c.assignInWith = w.assignInWith, c.assignWith = w.assignWith, c.at = w.at, c.before = K.before, c.bind = K.bind, c.bindAll = D.bindAll, c.bindKey = K.bindKey, c.castArray = x.castArray, c.chain = Ae.chain, c.chunk = y.chunk, c.compact = y.compact, c.concat = y.concat, c.cond = D.cond, c.conforms = D.conforms, c.constant = D.constant, c.countBy = O.countBy, c.create = w.create, c.curry = K.curry, c.curryRight = K.curryRight, c.debounce = K.debounce, c.defaults = w.defaults, c.defaultsDeep = w.defaultsDeep, c.defer = K.defer, c.delay = K.delay, c.difference = y.difference, c.differenceBy = y.differenceBy, c.differenceWith = y.differenceWith, c.drop = y.drop, c.dropRight = y.dropRight, c.dropRightWhile = y.dropRightWhile, c.dropWhile = y.dropWhile, c.fill = y.fill, c.filter = O.filter, c.flatMap = O.flatMap, c.flatMapDeep = O.flatMapDeep, c.flatMapDepth = O.flatMapDepth, c.flatten = y.flatten, c.flattenDeep = y.flattenDeep, c.flattenDepth = y.flattenDepth, c.flip = K.flip, c.flow = D.flow, c.flowRight = D.flowRight, c.fromPairs = y.fromPairs, c.functions = w.functions, c.functionsIn = w.functionsIn, c.groupBy = O.groupBy, c.initial = y.initial, c.intersection = y.intersection, c.intersectionBy = y.intersectionBy, c.intersectionWith = y.intersectionWith, c.invert = w.invert, c.invertBy = w.invertBy, c.invokeMap = O.invokeMap, c.iteratee = D.iteratee, c.keyBy = O.keyBy, c.keys = J, c.keysIn = w.keysIn, c.map = O.map, c.mapKeys = w.mapKeys, c.mapValues = w.mapValues, c.matches = D.matches, c.matchesProperty = D.matchesProperty, c.memoize = K.memoize, c.merge = w.merge, c.mergeWith = w.mergeWith, c.method = D.method, c.methodOf = D.methodOf, c.mixin = ja, c.negate = Ct, c.nthArg = D.nthArg, c.omit = w.omit, c.omitBy = w.omitBy, c.once = K.once, c.orderBy = O.orderBy, c.over = D.over, c.overArgs = K.overArgs, c.overEvery = D.overEvery, c.overSome = D.overSome, c.partial = K.partial, c.partialRight = K.partialRight, c.partition = O.partition, c.pick = w.pick, c.pickBy = w.pickBy, c.property = D.property, c.propertyOf = D.propertyOf, c.pull = y.pull, c.pullAll = y.pullAll, c.pullAllBy = y.pullAllBy, c.pullAllWith = y.pullAllWith, c.pullAt = y.pullAt, c.range = D.range, c.rangeRight = D.rangeRight, c.rearg = K.rearg, c.reject = O.reject, c.remove = y.remove, c.rest = K.rest, c.reverse = y.reverse, c.sampleSize = O.sampleSize, c.set = w.set, c.setWith = w.setWith, c.shuffle = O.shuffle, c.slice = y.slice, c.sortBy = O.sortBy, c.sortedUniq = y.sortedUniq, c.sortedUniqBy = y.sortedUniqBy, c.split = P.split, c.spread = K.spread, c.tail = y.tail, c.take = y.take, c.takeRight = y.takeRight, c.takeRightWhile = y.takeRightWhile, c.takeWhile = y.takeWhile, c.tap = Ae.tap, c.throttle = K.throttle, c.thru = kt, c.toArray = x.toArray, c.toPairs = w.toPairs, c.toPairsIn = w.toPairsIn, c.toPath = D.toPath, c.toPlainObject = x.toPlainObject, c.transform = w.transform, c.unary = K.unary, c.union = y.union, c.unionBy = y.unionBy, c.unionWith = y.unionWith, c.uniq = y.uniq, c.uniqBy = y.uniqBy, c.uniqWith = y.uniqWith, c.unset = w.unset, c.unzip = y.unzip, c.unzipWith = y.unzipWith, c.update = w.update, c.updateWith = w.updateWith, c.values = w.values, c.valuesIn = w.valuesIn, c.without = y.without, c.words = P.words, c.wrap = K.wrap, c.xor = y.xor, c.xorBy = y.xorBy, c.xorWith = y.xorWith, c.zip = y.zip, c.zipObject = y.zipObject, c.zipObjectDeep = y.zipObjectDeep, c.zipWith = y.zipWith, c.entries = w.toPairs, c.entriesIn = w.toPairsIn, c.extend = w.assignIn, c.extendWith = w.assignInWith, ja(c, c), c.add = ne.add, c.attempt = D.attempt, c.camelCase = P.camelCase, c.capitalize = P.capitalize, c.ceil = ne.ceil, c.clamp = xa.clamp, c.clone = x.clone, c.cloneDeep = x.cloneDeep, c.cloneDeepWith = x.cloneDeepWith, c.cloneWith = x.cloneWith, c.conformsTo = x.conformsTo, c.deburr = P.deburr, c.defaultTo = D.defaultTo, c.divide = ne.divide, c.endsWith = P.endsWith, c.eq = x.eq, c.escape = P.escape, c.escapeRegExp = P.escapeRegExp, c.every = O.every, c.find = O.find, c.findIndex = y.findIndex, c.findKey = w.findKey, c.findLast = O.findLast, c.findLastIndex = y.findLastIndex, c.findLastKey = w.findLastKey, c.floor = ne.floor, c.forEach = O.forEach, c.forEachRight = O.forEachRight, c.forIn = w.forIn, c.forInRight = w.forInRight, c.forOwn = w.forOwn, c.forOwnRight = w.forOwnRight, c.get = w.get, c.gt = x.gt, c.gte = x.gte, c.has = w.has, c.hasIn = w.hasIn, c.head = y.head, c.identity = ce, c.includes = O.includes, c.indexOf = y.indexOf, c.inRange = xa.inRange, c.invoke = w.invoke, c.isArguments = x.isArguments, c.isArray = T, c.isArrayBuffer = x.isArrayBuffer, c.isArrayLike = x.isArrayLike, c.isArrayLikeObject = x.isArrayLikeObject, c.isBoolean = x.isBoolean, c.isBuffer = x.isBuffer, c.isDate = x.isDate, c.isElement = x.isElement, c.isEmpty = x.isEmpty, c.isEqual = x.isEqual, c.isEqualWith = x.isEqualWith, c.isError = x.isError, c.isFinite = x.isFinite, c.isFunction = x.isFunction, c.isInteger = x.isInteger, c.isLength = x.isLength, c.isMap = x.isMap, c.isMatch = x.isMatch, c.isMatchWith = x.isMatchWith, c.isNaN = x.isNaN, c.isNative = x.isNative, c.isNil = x.isNil, c.isNull = x.isNull, c.isNumber = x.isNumber, c.isObject = X, c.isObjectLike = x.isObjectLike, c.isPlainObject = x.isPlainObject, c.isRegExp = x.isRegExp, c.isSafeInteger = x.isSafeInteger, c.isSet = x.isSet, c.isString = x.isString, c.isSymbol = x.isSymbol, c.isTypedArray = x.isTypedArray, c.isUndefined = x.isUndefined, c.isWeakMap = x.isWeakMap, c.isWeakSet = x.isWeakSet, c.join = y.join, c.kebabCase = P.kebabCase, c.last = oe, c.lastIndexOf = y.lastIndexOf, c.lowerCase = P.lowerCase, c.lowerFirst = P.lowerFirst, c.lt = x.lt, c.lte = x.lte, c.max = ne.max, c.maxBy = ne.maxBy, c.mean = ne.mean, c.meanBy = ne.meanBy, c.min = ne.min, c.minBy = ne.minBy, c.stubArray = D.stubArray, c.stubFalse = D.stubFalse, c.stubObject = D.stubObject, c.stubString = D.stubString, c.stubTrue = D.stubTrue, c.multiply = ne.multiply, c.nth = y.nth, c.noop = D.noop, c.now = Hb.now, c.pad = P.pad, c.padEnd = P.padEnd, c.padStart = P.padStart, c.parseInt = P.parseInt, c.random = xa.random, c.reduce = O.reduce, c.reduceRight = O.reduceRight, c.repeat = P.repeat, c.replace = P.replace, c.result = w.result, c.round = ne.round, c.sample = O.sample, c.size = O.size, c.snakeCase = P.snakeCase, c.some = O.some, c.sortedIndex = y.sortedIndex, c.sortedIndexBy = y.sortedIndexBy, c.sortedIndexOf = y.sortedIndexOf, c.sortedLastIndex = y.sortedLastIndex, c.sortedLastIndexBy = y.sortedLastIndexBy, c.sortedLastIndexOf = y.sortedLastIndexOf, c.startCase = P.startCase, c.startsWith = P.startsWith, c.subtract = ne.subtract, c.sum = ne.sum, c.sumBy = ne.sumBy, c.template = P.template, c.times = D.times, c.toFinite = x.toFinite, c.toInteger = C, c.toLength = x.toLength, c.toLower = P.toLower, c.toNumber = x.toNumber, c.toSafeInteger = x.toSafeInteger, c.toString = x.toString, c.toUpper = P.toUpper, c.trim = P.trim, c.trimEnd = P.trimEnd, c.trimStart = P.trimStart, c.truncate = P.truncate, c.unescape = P.unescape, c.uniqueId = D.uniqueId, c.upperCase = P.upperCase, c.upperFirst = P.upperFirst, c.each = O.forEach, c.eachRight = O.forEachRight, c.first = y.head, ja(c, function() {
        var e = {};
        return Ke(c, function(t, n) {
            Xu.call(c.prototype, n) || (e[n] = t)
        }), e
    }(), {
        chain: !1
    }), c.VERSION = t_, (c.templateSettings = P.templateSettings).imports._ = c, pe(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        c[e].placeholder = c
    }), pe(["drop", "take"], function(e, t) {
        k.prototype[e] = function(n) {
            n = n === void 0 ? 1 : o_(C(n), 0);
            var r = this.__filtered__ && !t ? new k(this) : this.clone();
            return r.__filtered__ ? r.__takeCount__ = Qu(n, r.__takeCount__) : r.__views__.push({
                size: Qu(n, $u),
                type: e + (r.__dir__ < 0 ? "Right" : "")
            }), r
        }, k.prototype[e + "Right"] = function(n) {
            return this.reverse()[e](n).reverse()
        }
    }), pe(["filter", "map", "takeWhile"], function(e, t) {
        var n = t + 1,
            r = n == r_ || n == a_;
        k.prototype[e] = function(a) {
            var s = this.clone();
            return s.__iteratees__.push({
                iteratee: N(a),
                type: n
            }), s.__filtered__ = s.__filtered__ || r, s
        }
    }), pe(["head", "last"], function(e, t) {
        var n = "take" + (t ? "Right" : "");
        k.prototype[e] = function() {
            return this[n](1).value()[0]
        }
    }), pe(["initial", "tail"], function(e, t) {
        var n = "drop" + (t ? "" : "Right");
        k.prototype[e] = function() {
            return this.__filtered__ ? new k(this) : this[n](1)
        }
    }), k.prototype.compact = function() {
        return this.filter(ce)
    }, k.prototype.find = function(e) {
        return this.filter(e).head()
    }, k.prototype.findLast = function(e) {
        return this.reverse().find(e)
    }, k.prototype.invokeMap = A(function(e, t) {
        return typeof e == "function" ? new k(this) : this.map(function(n) {
            return Xt(n, e, t)
        })
    }), k.prototype.reject = function(e) {
        return this.filter(Ct(N(e)))
    }, k.prototype.slice = function(e, t) {
        e = C(e);
        var n = this;
        return n.__filtered__ && (e > 0 || t < 0) ? new k(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== void 0 && (t = C(t), n = t < 0 ? n.dropRight(-t) : n.take(t - e)), n)
    }, k.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse()
    }, k.prototype.toArray = function() {
        return this.take($u)
    }, Ke(k.prototype, function(e, t) {
        var n = /^(?:filter|find|map|reject)|While$/.test(t),
            r = /^(?:head|last)$/.test(t),
            a = c[r ? "take" + (t == "last" ? "Right" : "") : t],
            s = r || /^find/.test(t);
        a && (c.prototype[t] = function() {
            var o = this.__wrapped__,
                l = r ? [1] : arguments,
                u = o instanceof k,
                f = l[0],
                d = u || T(o),
                p = function(I) {
                    var R = a.apply(c, Lt([I], l));
                    return r && m ? R[0] : R
                };
            d && n && typeof f == "function" && f.length != 1 && (u = d = !1);
            var m = this.__chain__,
                v = !!this.__actions__.length,
                _ = s && !m,
                j = u && !v;
            if (!s && d) {
                o = j ? o : new k(this);
                var S = e.apply(o, l);
                return S.__actions__.push({
                    func: kt,
                    args: [p],
                    thisArg: void 0
                }), new fe(S, m)
            }
            return _ && j ? e.apply(this, l) : (S = this.thru(p), _ ? r ? S.value()[0] : S.value() : S)
        })
    }), pe(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = s_[e],
            n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
            r = /^(?:pop|shift)$/.test(e);
        c.prototype[e] = function() {
            var a = arguments;
            if (r && !this.__chain__) {
                var s = this.value();
                return t.apply(T(s) ? s : [], a)
            }
            return this[n](function(o) {
                return t.apply(T(o) ? o : [], a)
            })
        }
    }), Ke(k.prototype, function(e, t) {
        var n = c[t];
        if (n) {
            var r = n.name + "";
            Xu.call(jt, r) || (jt[r] = []), jt[r].push({
                name: t,
                func: n
            })
        }
    }), jt[wn(void 0, n_).name] = [{
        name: "wrapper",
        func: void 0
    }], k.prototype.clone = Kb, k.prototype.reverse = qb, k.prototype.value = e_, c.prototype.at = Ae.at, c.prototype.chain = Ae.wrapperChain, c.prototype.commit = Ae.commit, c.prototype.next = Ae.next, c.prototype.plant = Ae.plant, c.prototype.reverse = Ae.reverse, c.prototype.toJSON = c.prototype.valueOf = c.prototype.value = Ae.value, c.prototype.first = c.prototype.head, Ju && (c.prototype[Ju] = Ae.toIterator);
    const c_ = Object.freeze(Object.defineProperty({
            __proto__: null,
            add: ys,
            after: bs,
            ary: wr,
            assign: zs,
            assignIn: Sn,
            assignInWith: Et,
            assignWith: Gs,
            at: Us,
            attempt: Nr,
            before: cf,
            bind: Ir,
            bindAll: Hs,
            bindKey: Ks,
            camelCase: ap,
            capitalize: sp,
            castArray: qs,
            ceil: Ys,
            chain: kr,
            chunk: af,
            clamp: Zs,
            clone: fi,
            cloneDeep: pi,
            cloneDeepWith: hi,
            cloneWith: mi,
            commit: Lr,
            compact: cp,
            concat: gi,
            cond: vi,
            conforms: bi,
            conformsTo: _i,
            constant: bn,
            countBy: xi,
            create: ji,
            curry: Cn,
            curryRight: An,
            debounce: lf,
            deburr: ip,
            default: c,
            defaultTo: wi,
            defaults: Ni,
            defaultsDeep: Ii,
            defer: Ai,
            delay: ki,
            difference: Ri,
            differenceBy: Pi,
            differenceWith: Ti,
            divide: Di,
            drop: Li,
            dropRight: Oi,
            dropRightWhile: Bi,
            dropWhile: Mi,
            each: Pn,
            eachRight: Tn,
            endsWith: zi,
            entries: Dn,
            entriesIn: Ln,
            eq: Ge,
            escape: Gr,
            escapeRegExp: Hi,
            every: qi,
            extend: Sn,
            extendWith: Et,
            fill: Yi,
            filter: $i,
            find: Ji,
            findIndex: Vr,
            findKey: eo,
            findLast: to,
            findLastIndex: Hr,
            findLastKey: no,
            first: On,
            flatMap: ro,
            flatMapDeep: ao,
            flatMapDepth: so,
            flatten: ms,
            flattenDeep: io,
            flattenDepth: oo,
            flip: co,
            floor: lo,
            flow: fo,
            flowRight: po,
            forEach: Pn,
            forEachRight: Tn,
            forIn: ho,
            forInRight: mo,
            forOwn: go,
            forOwnRight: vo,
            fromPairs: yo,
            functions: bo,
            functionsIn: _o,
            get: Ka,
            groupBy: xo,
            gt: jo,
            gte: wo,
            has: So,
            hasIn: Xa,
            head: On,
            identity: ce,
            inRange: No,
            includes: Eo,
            indexOf: Io,
            initial: Co,
            intersection: Ao,
            intersectionBy: ko,
            intersectionWith: Ro,
            invert: To,
            invertBy: Lo,
            invoke: Bo,
            invokeMap: Mo,
            isArguments: an,
            isArray: T,
            isArrayBuffer: Fo,
            isArrayLike: _e,
            isArrayLikeObject: H,
            isBoolean: zo,
            isBuffer: Bt,
            isDate: Uo,
            isElement: Vo,
            isEmpty: Ho,
            isEqual: Ko,
            isEqualWith: qo,
            isError: En,
            isFinite: Yo,
            isFunction: nt,
            isInteger: $r,
            isLength: df,
            isMap: Tr,
            isMatch: Zo,
            isMatchWith: $o,
            isNaN: Xo,
            isNative: Jo,
            isNil: Qo,
            isNull: ec,
            isNumber: Xr,
            isObject: X,
            isObjectLike: Q,
            isPlainObject: It,
            isRegExp: Wn,
            isSafeInteger: rc,
            isSet: Dr,
            isString: dn,
            isSymbol: Pt,
            isTypedArray: rn,
            isUndefined: ac,
            isWeakMap: sc,
            isWeakSet: ic,
            iteratee: oc,
            join: cc,
            kebabCase: lc,
            keyBy: uc,
            keys: J,
            keysIn: te,
            last: oe,
            lastIndexOf: dc,
            lodash: c,
            lowerCase: fc,
            lowerFirst: pc,
            lt: hc,
            lte: mc,
            map: $t,
            mapKeys: gc,
            mapValues: vc,
            matches: yc,
            matchesProperty: bc,
            max: _c,
            maxBy: xc,
            mean: wc,
            meanBy: Sc,
            memoize: de,
            merge: Nc,
            mergeWith: Wr,
            method: Ec,
            methodOf: Ic,
            min: Cc,
            minBy: Ac,
            mixin: ea,
            multiply: kc,
            negate: Ct,
            next: ra,
            noop: vn,
            now: of ,
            nth: Pc,
            nthArg: Tc,
            omit: Dc,
            omitBy: Oc,
            once: Wt,
            orderBy: up,
            over: Bc,
            overArgs: Mc,
            overEvery: Wc,
            overSome: Fc,
            pad: Yc,
            padEnd: Zc,
            padStart: $c,
            parseInt: Xc,
            partial: da,
            partialRight: Jc,
            partition: Qc,
            pick: el,
            pickBy: sa,
            plant: pa,
            property: pf,
            propertyOf: tl,
            pull: rl,
            pullAll: ma,
            pullAllBy: al,
            pullAllWith: sl,
            pullAt: ol,
            random: cl,
            range: ul,
            rangeRight: dl,
            rearg: fl,
            reduce: hl,
            reduceRight: ml,
            reject: gl,
            remove: vl,
            repeat: yl,
            replace: bl,
            rest: _l,
            result: xl,
            reverse: Gn,
            round: jl,
            sample: Sl,
            sampleSize: Nl,
            set: El,
            setWith: Il,
            shuffle: Cl,
            size: Al,
            slice: kl,
            snakeCase: Rl,
            some: Pl,
            sortBy: Tl,
            sortedIndex: Dl,
            sortedIndexBy: sf,
            sortedIndexOf: Ll,
            sortedLastIndex: Ol,
            sortedLastIndexBy: Bl,
            sortedLastIndexOf: Ml,
            sortedUniq: Fl,
            sortedUniqBy: zl,
            split: Gl,
            spread: Ul,
            startCase: Vl,
            startsWith: Hl,
            stubArray: qa,
            stubFalse: Za,
            stubObject: Kl,
            stubString: ql,
            stubTrue: Yl,
            subtract: Zl,
            sum: $l,
            sumBy: Xl,
            tail: Jl,
            take: Ql,
            takeRight: eu,
            takeRightWhile: tu,
            takeWhile: nu,
            tap: ru,
            template: cu,
            templateSettings: Hn,
            throttle: uf,
            thru: kt,
            times: lu,
            toArray: na,
            toFinite: Ue,
            toInteger: C,
            toIterator: ya,
            toJSON: ut,
            toLength: Ur,
            toLower: du,
            toNumber: ke,
            toPairs: Dn,
            toPairsIn: Ln,
            toPath: fu,
            toPlainObject: Mr,
            toSafeInteger: hu,
            toString: W,
            toUpper: mu,
            transform: gu,
            trim: bu,
            trimEnd: _u,
            trimStart: xu,
            truncate: ju,
            unary: wu,
            unescape: ff,
            union: Su,
            unionBy: Nu,
            unionWith: Eu,
            uniq: Iu,
            uniqBy: Cu,
            uniqWith: Au,
            uniqueId: ku,
            unset: Ru,
            unzip: qn,
            unzipWith: ba,
            update: Tu,
            updateWith: Du,
            upperCase: Lu,
            upperFirst: gs,
            value: ut,
            valueOf: ut,
            values: lt,
            valuesIn: Ou,
            without: Bu,
            words: op,
            wrap: Mu,
            wrapperAt: Wu,
            wrapperChain: Fu,
            wrapperCommit: Lr,
            wrapperLodash: c,
            wrapperNext: ra,
            wrapperPlant: pa,
            wrapperReverse: zu,
            wrapperToIterator: ya,
            wrapperValue: ut,
            xor: Gu,
            xorBy: Uu,
            xorWith: Vu,
            zip: Hu,
            zipObject: qu,
            zipObjectDeep: Yu,
            zipWith: Zu
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        l_ = EN(IN);

    function u_(r) {
        var a = r,
            {
                children: e,
                isValidProp: t
            } = a,
            n = ze(a, ["children", "isValidProp"]);
        t && CN(t), n = E(E({}, h.useContext(Ft)), n), n.isStatic = je(() => n.isStatic);
        const s = h.useMemo(() => n, [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]);
        return h.createElement(Ft.Provider, {
            value: s
        }, e)
    }

    function d_({
        children: e,
        features: t,
        strict: n = !1
    }) {
        const [, r] = h.useState(!wa(t)), a = h.useRef(void 0);
        if (!wa(t)) {
            const s = t,
                {
                    renderer: o
                } = s,
                l = ze(s, ["renderer"]);
            a.current = o, hf(l)
        }
        return h.useEffect(() => {
            wa(t) && t().then(u => {
                var f = u,
                    {
                        renderer: o
                    } = f,
                    l = ze(f, ["renderer"]);
                hf(l), a.current = o, r(!0)
            })
        }, []), h.createElement(AN.Provider, {
            value: {
                renderer: a.current,
                strict: n
            }
        }, e)
    }

    function wa(e) {
        return typeof e == "function"
    }
    const ed = h.createContext(null),
        f_ = e => !e.isLayoutDirty && e.willUpdate(!1);

    function p_() {
        const e = new Set,
            t = new WeakMap,
            n = () => e.forEach(f_);
        return {
            add: r => {
                e.add(r), t.set(r, r.addEventListener("willUpdate", n))
            },
            remove: r => {
                e.delete(r);
                const a = t.get(r);
                a && (a(), t.delete(r)), n()
            },
            dirty: n
        }
    }
    const td = e => e === !0,
        h_ = e => td(e === !0) || e === "id",
        nd = ({
            children: e,
            id: t,
            inherit: n = !0
        }) => {
            const r = h.useContext(Qa),
                a = h.useContext(ed),
                [s, o] = es(),
                l = h.useRef(null),
                u = r.id || a;
            l.current === null && (h_(n) && u && (t = t ? u + "-" + t : u), l.current = {
                id: t,
                group: td(n) && r.group || p_()
            });
            const f = h.useMemo(() => Je(E({}, l.current), {
                forceRender: s
            }), [o]);
            return h.createElement(Qa.Provider, {
                value: f
            }, e)
        },
        rd = h.createContext(null);

    function m_(e, t, n, r) {
        if (!r) return e;
        const a = e.findIndex(d => d.value === t);
        if (a === -1) return e;
        const s = r > 0 ? 1 : -1,
            o = e[a + s];
        if (!o) return e;
        const l = e[a],
            u = o.layout,
            f = mf(u.min, u.max, .5);
        return s === 1 && l.layout.max + n > f || s === -1 && l.layout.min + n < f ? kN(e, a, a + s) : e
    }

    function g_(l, o) {
        var u = l,
            {
                children: e,
                as: t = "ul",
                axis: n = "y",
                onReorder: r,
                values: a
            } = u,
            s = ze(u, ["children", "as", "axis", "onReorder", "values"]);
        const f = je(() => ar(t)),
            d = [],
            p = h.useRef(!1),
            m = {
                axis: n,
                registerItem: (v, _) => {
                    const j = d.findIndex(S => v === S.value);
                    j !== -1 ? d[j].layout = _[n] : d.push({
                        value: v,
                        layout: _[n]
                    }), d.sort(b_)
                },
                updateOrder: (v, _, j) => {
                    if (p.current) return;
                    const S = m_(d, v, _, j);
                    d !== S && (p.current = !0, r(S.map(y_).filter(I => a.indexOf(I) !== -1)))
                }
            };
        return h.useEffect(() => {
            p.current = !1
        }), h.createElement(f, Je(E({}, s), {
            ref: o,
            ignoreStrict: !0
        }), h.createElement(rd.Provider, {
            value: m
        }, e))
    }
    const v_ = h.forwardRef(g_);

    function y_(e) {
        return e.value
    }

    function b_(e, t) {
        return e.layout.min - t.layout.min
    }
    const __ = e => e && typeof e == "object" && e.mix,
        x_ = e => __(e) ? e.mix : void 0;

    function ad(...e) {
        const t = !Array.isArray(e[0]),
            n = t ? 0 : -1,
            r = e[0 + n],
            a = e[1 + n],
            s = e[2 + n],
            o = e[3 + n],
            l = ts(a, s, E({
                mixer: x_(s[0])
            }, o));
        return t ? l(r) : l
    }

    function Sa(e, t) {
        const n = rt(t()),
            r = () => n.set(t());
        return r(), sr(() => {
            const a = () => Te.update(r, !1, !0),
                s = e.map(o => o.on("change", a));
            return () => {
                s.forEach(o => o()), sn(r)
            }
        }), n
    }

    function j_(e) {
        ns.current = [], e();
        const t = Sa(ns.current, e);
        return ns.current = void 0, t
    }

    function Yn(e, t, n, r) {
        if (typeof e == "function") return j_(e);
        const a = typeof t == "function" ? t : ad(t, n, r);
        return Array.isArray(e) ? sd(e, a) : sd([e], ([s]) => a(s))
    }

    function sd(e, t) {
        const n = je(() => []);
        return Sa(e, () => {
            n.length = 0;
            const r = e.length;
            for (let a = 0; a < r; a++) n[a] = e[a].get();
            return t(n)
        })
    }

    function id(e, t = 0) {
        return zt(e) ? e : rt(t)
    }

    function w_(u, l) {
        var f = u,
            {
                children: e,
                style: t = {},
                value: n,
                as: r = "li",
                onDrag: a,
                layout: s = !0
            } = f,
            o = ze(f, ["children", "style", "value", "as", "onDrag", "layout"]);
        const d = je(() => ar(r)),
            p = h.useContext(rd),
            m = {
                x: id(t.x),
                y: id(t.y)
            },
            v = Yn([m.x, m.y], ([I, R]) => I || R ? 1 : "unset"),
            {
                axis: _,
                registerItem: j,
                updateOrder: S
            } = p;
        return h.createElement(d, Je(E({
            drag: _
        }, o), {
            dragSnapToOrigin: !0,
            style: Je(E({}, t), {
                x: m.x,
                y: m.y,
                zIndex: v
            }),
            layout: s,
            onDrag: (I, R) => {
                const {
                    velocity: ye
                } = R;
                ye[_] && S(n, m[_].get(), ye[_]), a && a(I, R)
            },
            onLayoutMeasure: I => j(n, I),
            ref: l,
            ignoreStrict: !0
        }), e)
    }
    const S_ = h.forwardRef(w_),
        N_ = {
            Group: v_,
            Item: S_
        },
        od = E(E({
            renderer: RN
        }, gf), PN),
        E_ = E(E(E({}, od), TN), DN);

    function I_(e, ...t) {
        const n = e.length;

        function r() {
            let a = "";
            for (let s = 0; s < n; s++) {
                a += e[s];
                const o = t[s];
                o && (a += zt(o) ? o.get() : o)
            }
            return a
        }
        return Sa(t.filter(zt), r)
    }

    function C_(e, t = {}) {
        const {
            isStatic: n
        } = h.useContext(Ft), r = h.useRef(null), a = rt(zt(e) ? e.get() : e), s = () => {
            r.current && r.current.stop()
        };
        return h.useInsertionEffect(() => a.attach((o, l) => {
            if (n) return l(o);
            if (s(), r.current = vf(Je(E({
                    keyframes: [a.get(), o],
                    velocity: a.getVelocity(),
                    type: "spring",
                    restDelta: .001,
                    restSpeed: .01
                }, t), {
                    onUpdate: l
                })), !ir.isProcessing) {
                const u = performance.now() - ir.timestamp;
                u < 30 && (r.current.time = LN(u))
            }
            return a.get()
        }, s), [JSON.stringify(t)]), sr(() => {
            if (zt(e)) return e.on("change", o => a.set(parseFloat(o)))
        }, [a]), a
    }

    function cd(e, t, n) {
        h.useInsertionEffect(() => e.on(t, n), [e, t, n])
    }

    function A_(e) {
        const t = rt(e.getVelocity());
        return cd(e, "velocityChange", n => {
            t.set(n)
        }), t
    }
    const Zn = new WeakMap;
    let Ze;

    function k_(e, t) {
        if (t) {
            const {
                inlineSize: n,
                blockSize: r
            } = t[0];
            return {
                width: n,
                height: r
            }
        } else return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        }
    }

    function R_({
        target: e,
        contentRect: t,
        borderBoxSize: n
    }) {
        var r;
        (r = Zn.get(e)) === null || r === void 0 || r.forEach(a => {
            a({
                target: e,
                contentSize: t,
                get size() {
                    return k_(e, n)
                }
            })
        })
    }

    function P_(e) {
        e.forEach(R_)
    }

    function T_() {
        typeof ResizeObserver > "u" || (Ze = new ResizeObserver(P_))
    }

    function D_(e, t) {
        Ze || T_();
        const n = yf(e);
        return n.forEach(r => {
            let a = Zn.get(r);
            a || (a = new Set, Zn.set(r, a)), a.add(t), Ze == null || Ze.observe(r)
        }), () => {
            n.forEach(r => {
                const a = Zn.get(r);
                a == null || a.delete(t), a != null && a.size || (Ze == null || Ze.unobserve(r))
            })
        }
    }
    const $n = new Set;
    let Qt;

    function L_() {
        Qt = () => {
            const e = {
                    width: window.innerWidth,
                    height: window.innerHeight
                },
                t = {
                    target: window,
                    size: e,
                    contentSize: e
                };
            $n.forEach(n => n(t))
        }, window.addEventListener("resize", Qt)
    }

    function O_(e) {
        return $n.add(e), Qt || L_(), () => {
            $n.delete(e), !$n.size && Qt && (Qt = void 0)
        }
    }

    function B_(e, t) {
        return typeof e == "function" ? O_(e) : D_(e, t)
    }
    const M_ = 50,
        ld = () => ({
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        }),
        W_ = () => ({
            time: 0,
            x: ld(),
            y: ld()
        }),
        F_ = {
            x: {
                length: "Width",
                position: "Left"
            },
            y: {
                length: "Height",
                position: "Top"
            }
        };

    function ud(e, t, n, r) {
        const a = n[t],
            {
                length: s,
                position: o
            } = F_[t],
            l = a.current,
            u = n.time;
        a.current = e["scroll" + o], a.scrollLength = e["scroll" + s] - e["client" + s], a.offset.length = 0, a.offset[0] = 0, a.offset[1] = a.scrollLength, a.progress = bf(0, a.scrollLength, a.current);
        const f = r - u;
        a.velocity = f > M_ ? 0 : ON(a.current - l, f)
    }

    function z_(e, t, n) {
        ud(e, "x", t, n), ud(e, "y", t, n), t.time = n
    }

    function G_(e, t) {
        const n = {
            x: 0,
            y: 0
        };
        let r = e;
        for (; r && r !== t;)
            if (r instanceof HTMLElement) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent;
            else if (r.tagName === "svg") {
            const a = r.getBoundingClientRect();
            r = r.parentElement;
            const s = r.getBoundingClientRect();
            n.x += a.left - s.left, n.y += a.top - s.top
        } else if (r instanceof SVGGraphicsElement) {
            const {
                x: a,
                y: s
            } = r.getBBox();
            n.x += a, n.y += s;
            let o = null,
                l = r.parentNode;
            for (; !o;) l.tagName === "svg" && (o = l), l = r.parentNode;
            r = o
        } else break;
        return n
    }
    const U_ = {
            Enter: [
                [0, 1],
                [1, 1]
            ],
            Exit: [
                [0, 0],
                [1, 0]
            ],
            Any: [
                [1, 0],
                [0, 1]
            ],
            All: [
                [0, 0],
                [1, 1]
            ]
        },
        Na = {
            start: 0,
            center: .5,
            end: 1
        };

    function dd(e, t, n = 0) {
        let r = 0;
        if (Na[e] !== void 0 && (e = Na[e]), typeof e == "string") {
            const a = parseFloat(e);
            e.endsWith("px") ? r = a : e.endsWith("%") ? e = a / 100 : e.endsWith("vw") ? r = a / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = a / 100 * document.documentElement.clientHeight : e = a
        }
        return typeof e == "number" && (r = t * e), n + r
    }
    const V_ = [0, 0];

    function H_(e, t, n, r) {
        let a = Array.isArray(e) ? e : V_,
            s = 0,
            o = 0;
        return typeof e == "number" ? a = [e, e] : typeof e == "string" && (e = e.trim(), e.includes(" ") ? a = e.split(" ") : a = [e, Na[e] ? e : "0"]), s = dd(a[0], n, r), o = dd(a[1], t), s - o
    }
    const K_ = {
        x: 0,
        y: 0
    };

    function q_(e) {
        return "getBBox" in e && e.tagName !== "svg" ? e.getBBox() : {
            width: e.clientWidth,
            height: e.clientHeight
        }
    }

    function Y_(e, t, n) {
        let {
            offset: r = U_.All
        } = n;
        const {
            target: a = e,
            axis: s = "y"
        } = n, o = s === "y" ? "height" : "width", l = a !== e ? G_(a, e) : K_, u = a === e ? {
            width: e.scrollWidth,
            height: e.scrollHeight
        } : q_(a), f = {
            width: e.clientWidth,
            height: e.clientHeight
        };
        t[s].offset.length = 0;
        let d = !t[s].interpolate;
        const p = r.length;
        for (let m = 0; m < p; m++) {
            const v = H_(r[m], f[o], u[o], l[s]);
            !d && v !== t[s].interpolatorOffsets[m] && (d = !0), t[s].offset[m] = v
        }
        d && (t[s].interpolate = ts(t[s].offset, BN(r)), t[s].interpolatorOffsets = [...t[s].offset]), t[s].progress = t[s].interpolate(t[s].current)
    }

    function Z_(e, t = e, n) {
        if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) {
            let r = t;
            for (; r && r !== e;) n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent
        }
        n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, n.x.containerLength = e.clientWidth, n.y.containerLength = e.clientHeight
    }

    function $_(e, t, n, r = {}) {
        return {
            measure: () => Z_(e, r.target, n),
            update: a => {
                z_(e, n, a), (r.offset || r.target) && Y_(e, n, r)
            },
            notify: () => t(n)
        }
    }
    const en = new WeakMap,
        fd = new WeakMap,
        Ea = new WeakMap,
        pd = e => e === document.documentElement ? window : e;

    function Ia(e, r = {}) {
        var a = r,
            {
                container: t = document.documentElement
            } = a,
            n = ze(a, ["container"]);
        let s = Ea.get(t);
        s || (s = new Set, Ea.set(t, s));
        const o = W_(),
            l = $_(t, e, o, n);
        if (s.add(l), !en.has(t)) {
            const f = () => {
                    for (const _ of s) _.measure()
                },
                d = () => {
                    for (const _ of s) _.update(ir.timestamp)
                },
                p = () => {
                    for (const _ of s) _.notify()
                },
                m = () => {
                    Te.read(f, !1, !0), Te.read(d, !1, !0), Te.update(p, !1, !0)
                };
            en.set(t, m);
            const v = pd(t);
            window.addEventListener("resize", m, {
                passive: !0
            }), t !== document.documentElement && fd.set(t, B_(t, m)), v.addEventListener("scroll", m, {
                passive: !0
            })
        }
        const u = en.get(t);
        return Te.read(u, !1, !0), () => {
            var f;
            sn(u);
            const d = Ea.get(t);
            if (!d || (d.delete(l), d.size)) return;
            const p = en.get(t);
            en.delete(t), p && (pd(t).removeEventListener("scroll", p), (f = fd.get(t)) === null || f === void 0 || f(), window.removeEventListener("resize", p))
        }
    }

    function hd(e, t) {
        _f(!!(!t || t.current))
    }
    const X_ = () => ({
        scrollX: on(0),
        scrollY: on(0),
        scrollXProgress: on(0),
        scrollYProgress: on(0)
    });

    function Ca(a = {}) {
        var s = a,
            {
                container: e,
                target: t,
                layoutEffect: n = !0
            } = s,
            r = ze(s, ["container", "target", "layoutEffect"]);
        const o = je(X_);
        return (n ? sr : h.useEffect)(() => (hd("target", t), hd("container", e), Ia(({
            x: l,
            y: u
        }) => {
            o.scrollX.set(l.current), o.scrollXProgress.set(l.progress), o.scrollY.set(u.current), o.scrollYProgress.set(u.progress)
        }, Je(E({}, r), {
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0
        }))), [e, t, JSON.stringify(r.offset)]), o
    }

    function J_(e) {
        return Ca({
            container: e
        })
    }

    function Q_() {
        return Ca()
    }

    function md(e) {
        const t = h.useRef(0),
            {
                isStatic: n
            } = h.useContext(Ft);
        h.useEffect(() => {
            if (n) return;
            const r = ({
                timestamp: a,
                delta: s
            }) => {
                t.current || (t.current = a), e(a - t.current, s)
            };
            return Te.update(r, !0), () => sn(r)
        }, [e])
    }

    function ex() {
        const e = rt(0);
        return md(t => e.set(t)), e
    }
    class tx extends xf {
        constructor() {
            super(...arguments), this.members = [], this.transforms = new Set
        }
        add(t) {
            let n;
            rs.has(t) ? (this.transforms.add(t), n = "transform") : !t.startsWith("origin") && !MN(t) && t !== "willChange" && (n = jf(t)), n && (WN(this.members, n), this.update())
        }
        remove(t) {
            rs.has(t) ? (this.transforms.delete(t), this.transforms.size || wf(this.members, "transform")) : wf(this.members, jf(t)), this.update()
        }
        update() {
            this.set(this.members.length ? this.members.join(", ") : "auto")
        }
    }

    function nx() {
        return je(() => new tx("auto"))
    }

    function gd() {
        !FN.current && zN();
        const [e] = h.useState(GN.current);
        return e
    }

    function rx() {
        const e = gd(),
            {
                reducedMotion: t
            } = h.useContext(Ft);
        return t === "never" ? !1 : t === "always" ? !0 : e
    }

    function ax() {
        const e = je(() => ({
                current: null,
                animations: []
            })),
            t = je(() => Nf(e));
        return Sf(() => {
            e.animations.forEach(n => n.stop())
        }), [e, t]
    }

    function sx(...e) {
        const t = h.useRef(0),
            [n, r] = h.useState(e[t.current]),
            a = h.useCallback(s => {
                t.current = typeof s != "number" ? Ef(0, e.length, t.current + 1) : s, r(e[t.current])
            }, [e.length, ...e]);
        return [n, a]
    }
    const ix = {
        some: 0,
        all: 1
    };

    function vd(e, t, {
        root: n,
        margin: r,
        amount: a = "some"
    } = {}) {
        const s = yf(e),
            o = new WeakMap,
            l = f => {
                f.forEach(d => {
                    const p = o.get(d.target);
                    if (d.isIntersecting !== !!p)
                        if (d.isIntersecting) {
                            const m = t(d);
                            typeof m == "function" ? o.set(d.target, m) : u.unobserve(d.target)
                        } else p && (p(d), o.delete(d.target))
                })
            },
            u = new IntersectionObserver(l, {
                root: n,
                rootMargin: r,
                threshold: typeof a == "number" ? a : ix[a]
            });
        return s.forEach(f => u.observe(f)), () => u.disconnect()
    }

    function ox(e, {
        root: t,
        margin: n,
        amount: r,
        once: a = !1
    } = {}) {
        const [s, o] = h.useState(!1);
        return h.useEffect(() => {
            if (!e.current || a && s) return;
            const l = () => (o(!0), a ? void 0 : () => o(!1)),
                u = {
                    root: t && t.current || void 0,
                    margin: n,
                    amount: r
                };
            return vd(e.current, l, u)
        }, [t, e, n, a, r]), s
    }

    function cx(e, t, n, r) {
        h.useEffect(() => {
            const a = e.current;
            if (n && a) return UN(a, t, n, r)
        }, [e, t, n, r])
    }

    function yd(e) {
        return e !== null && typeof e == "object" && If in e
    }

    function lx(e) {
        if (yd(e)) return e[If]
    }

    function bd() {
        return ux
    }

    function ux(e) {
        or.current && (or.current.isUpdating = !1, or.current.blockUpdate(), e && e())
    }

    function dx() {
        const [e, t] = es(), n = bd(), r = h.useRef();
        return h.useEffect(() => {
            Te.postRender(() => Te.postRender(() => {
                t === r.current && (as.current = !1)
            }))
        }, [t]), a => {
            n(() => {
                as.current = !0, e(), a(), r.current = t + 1
            })
        }
    }

    function fx() {
        as.current = !1
    }

    function px() {
        return h.useCallback(() => {
            const e = or.current;
            e && e.resetTree()
        }, [])
    }
    const _d = (e, t) => `${e}: ${t}`,
        Xn = new Map;
    let Aa;

    function hx(e, t, n, r) {
        const a = rs.has(t) ? "transform" : t,
            s = _d(e, a),
            o = Xn.get(s);
        if (!o) return null;
        const {
            animation: l,
            startTime: u
        } = o, f = () => {
            Xn.delete(s);
            try {
                l.cancel()
            } catch (d) {}
        };
        return u === null || window.HandoffComplete ? (f(), null) : (Aa === void 0 && (Aa = performance.now()), Aa - u || 0)
    }
    let Jn, Rt;

    function mx(e, t, n, r, a) {
        if (window.HandoffComplete) {
            window.HandoffAppearAnimations = void 0;
            return
        }
        const s = e.dataset[VN];
        if (!s) return;
        window.HandoffAppearAnimations = hx;
        const o = _d(s, t);
        Rt || (Rt = Cf(e, t, [n[0], n[0]], {
            duration: 1e4,
            ease: "linear"
        }), Xn.set(o, {
            animation: Rt,
            startTime: null
        }));
        const l = () => {
            Rt.cancel();
            const u = Cf(e, t, n, r);
            Jn === void 0 && (Jn = performance.now()), u.startTime = Jn, Xn.set(o, {
                animation: u,
                startTime: Jn
            }), a && a(u)
        };
        Rt.ready ? Rt.ready.then(l).catch(HN) : l()
    }
    const ka = () => ({});
    class gx extends Rf {
        build() {}
        measureInstanceViewportBox() {
            return Pf()
        }
        resetTransform() {}
        restoreTransform() {}
        removeValueFromRenderState() {}
        renderInstance() {}
        scrapeMotionValuesFromProps() {
            return ka()
        }
        getBaseTargetFromProps() {}
        readValueFromInstance(t, n, r) {
            return r.initialState[n] || 0
        }
        sortInstanceNodePosition() {
            return 0
        }
        makeTargetAnimatableFromInstance(a) {
            var s = a,
                {
                    transition: t,
                    transitionEnd: n
                } = s,
                r = ze(s, ["transition", "transitionEnd"]);
            const o = KN(r, t || {}, this);
            return Tf(this, r, o), E({
                transition: t,
                transitionEnd: n
            }, r)
        }
    }
    const vx = Af({
        scrapeMotionValuesFromProps: ka,
        createRenderState: ka
    });

    function yx(e) {
        const [t, n] = h.useState(e), r = vx({}, !1), a = je(() => new gx({
            props: {},
            visualState: r,
            presenceContext: null
        }, {
            initialState: e
        }));
        h.useEffect(() => (a.mount({}), () => a.unmount()), [a]), h.useEffect(() => {
            a.update({
                onUpdate: o => {
                    n(E({}, o))
                }
            }, null)
        }, [n, a]);
        const s = je(() => o => kf(a, o));
        return [t, s]
    }
    const bx = 1e5,
        xd = e => e > .001 ? 1 / e : bx;

    function _x(e) {
        let t = rt(1),
            n = rt(1);
        const {
            visualElement: r
        } = h.useContext(Df);
        e ? (t = e.scaleX || t, n = e.scaleY || n) : r && (t = r.getValue("scaleX", 1), n = r.getValue("scaleY", 1));
        const a = Yn(t, xd),
            s = Yn(n, xd);
        return {
            scaleX: a,
            scaleY: s
        }
    }
    let xx = 0;
    const jx = ({
        children: e
    }) => (h.useEffect(() => {}, []), h.createElement(nd, {
        id: je(() => `asl-${xx++}`)
    }, e));

    function wx({
        source: e,
        axis: t = "y"
    }) {
        const n = {
                value: 0
            },
            r = Ia(a => {
                n.value = a[t].progress * 100
            }, {
                container: e,
                axis: t
            });
        return {
            currentTime: n,
            cancel: r
        }
    }
    const Ra = new Map;

    function Sx({
        source: e = document.documentElement,
        axis: t = "y"
    } = {}) {
        Ra.has(e) || Ra.set(e, {});
        const n = Ra.get(e);
        return n[t] || (n[t] = YN() ? new ScrollTimeline({
            source: e,
            axis: t
        }) : wx({
            source: e,
            axis: t
        })), n[t]
    }

    function Nx(e, t) {
        const n = Sx(t);
        return typeof e == "function" ? qN(e, n) : e.attachTimeline(n)
    }

    function Ex(e, t) {
        if (e === "first") return 0; {
            const n = t - 1;
            return e === "last" ? n : n / 2
        }
    }

    function Ix(e = .1, {
        startDelay: t = 0,
        from: n = 0,
        ease: r
    } = {}) {
        return (a, s) => {
            const o = typeof n == "number" ? n : Ex(n, s),
                l = Math.abs(o - a);
            let u = e * l;
            if (r) {
                const f = s * e;
                u = ZN(r)(u / f) * f
            }
            return t + u
        }
    }
    const Cx = Te,
        Ax = $N.reduce((e, t) => (e[t] = n => sn(n), e), {}),
        kx = Object.freeze(Object.defineProperty({
            __proto__: null,
            AnimatePresence: Lf,
            AnimateSharedLayout: jx,
            DeprecatedLayoutGroupContext: ed,
            DragControls: XN,
            FlatTree: JN,
            LayoutGroup: nd,
            LayoutGroupContext: Qa,
            LazyMotion: d_,
            MotionConfig: u_,
            MotionConfigContext: Ft,
            MotionContext: Df,
            MotionGlobalConfig: QN,
            MotionValue: xf,
            PresenceContext: eE,
            Reorder: N_,
            SwitchLayoutGroupContext: tE,
            VisualElement: Rf,
            addPointerEvent: nE,
            addPointerInfo: rE,
            addScaleCorrector: aE,
            animate: sE,
            animateValue: vf,
            animateVisualElement: kf,
            animationControls: iE,
            animations: gf,
            anticipate: oE,
            backIn: cE,
            backInOut: lE,
            backOut: uE,
            buildTransform: dE,
            calcLength: fE,
            cancelFrame: sn,
            cancelSync: Ax,
            checkTargetForNewValues: Tf,
            circIn: pE,
            circInOut: hE,
            circOut: mE,
            clamp: gE,
            color: vE,
            complex: yE,
            createBox: Pf,
            createDomMotionComponent: bE,
            createMotionComponent: _E,
            createScopedAnimate: Nf,
            cubicBezier: xE,
            delay: jE,
            disableInstantTransitions: fx,
            distance: wE,
            distance2D: SE,
            domAnimation: od,
            domMax: E_,
            easeIn: NE,
            easeInOut: EE,
            easeOut: IE,
            filterProps: CE,
            frame: Te,
            frameData: ir,
            inView: vd,
            interpolate: ts,
            invariant: AE,
            isBrowser: kE,
            isDragActive: RE,
            isMotionComponent: yd,
            isMotionValue: zt,
            isValidMotionProp: PE,
            m: l_,
            makeUseVisualState: Af,
            mirrorEasing: TE,
            mix: mf,
            motion: ar,
            motionValue: on,
            optimizedAppearDataAttribute: DE,
            pipe: LE,
            progress: bf,
            px: OE,
            resolveMotionValue: BE,
            reverseEasing: ME,
            scroll: Nx,
            scrollInfo: Ia,
            spring: WE,
            stagger: Ix,
            startOptimizedAppearAnimation: mx,
            steps: FE,
            sync: Cx,
            transform: ad,
            unwrapMotionComponent: lx,
            useAnimate: ax,
            useAnimation: zE,
            useAnimationControls: GE,
            useAnimationFrame: md,
            useCycle: sx,
            useDeprecatedAnimatedState: yx,
            useDeprecatedInvertedScale: _x,
            useDomEvent: cx,
            useDragControls: UE,
            useElementScroll: J_,
            useForceUpdate: es,
            useInView: ox,
            useInstantLayoutTransition: bd,
            useInstantTransition: dx,
            useIsPresent: VE,
            useIsomorphicLayoutEffect: sr,
            useMotionTemplate: I_,
            useMotionValue: rt,
            useMotionValueEvent: cd,
            usePresence: HE,
            useReducedMotion: gd,
            useReducedMotionConfig: rx,
            useResetProjection: px,
            useScroll: Ca,
            useSpring: C_,
            useTime: ex,
            useTransform: Yn,
            useUnmountEffect: Sf,
            useVelocity: A_,
            useViewportScroll: Q_,
            useWillChange: nx,
            visualElementStore: KE,
            warning: _f,
            wrap: Ef
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        jd = qE.Howl,
        Rx = Object.freeze(Object.defineProperty({
            __proto__: null,
            Active: YE,
            ActiveProvider: ZE,
            AnimatedNumber: $E,
            AppProvider: Of,
            BC: at,
            Badge: Bf,
            Breadcrumb: XE,
            Button: we,
            ButtonGroup: JE,
            Carousel: QE,
            CircleCountdown: eI,
            CloseIcon: cr,
            CodeSegment: tI,
            Confirm: nI,
            Content: rI,
            Countdown: aI,
            Decimal: lr,
            DecimalUtils: sI,
            Dialog: ht,
            DialogHeader: iI,
            DialogTable: oI,
            DragDialog: cI,
            Empty: Mf,
            ErrorBoundary: Wf,
            ErrorCode: lI,
            ErrorWithTip: uI,
            EventEmitter: dI,
            FileSelect: fI,
            FlatList: pI,
            Howl: jd,
            HttpResponseError: Ff,
            I18nProvider: zf,
            Icon: st,
            Image: hI,
            Imgix: mI,
            Input: ss,
            InputNumber: gI,
            InputPassword: vI,
            InputWrap: yI,
            LayoutSizeProvider: bI,
            LazyImage: _I,
            Link: Gt,
            Loading: Gf,
            Long: xI,
            Lottie: ur,
            Overlayer: jI,
            Pagination: wI,
            Pop: Uf,
            Portal: Se,
            Radio: SI,
            RadioBase: NI,
            ScrollView: mt,
            Select: EI,
            SelectBase: II,
            Slider: CI,
            State: Vf,
            SuspenseData: AI,
            SuspenseSource: Hf,
            Swiper: kI,
            Switch: RI,
            Table: PI,
            Tabs: Kf,
            Text: TI,
            Textarea: DI,
            ToggleView: LI,
            Tooltip: OI,
            TooltipBase: BI,
            Trans: qf,
            UpdateInView: MI,
            User: WI,
            VipLevelStatus: FI,
            WithOutSsr: Yf,
            accountStore: F,
            addUserReceiptEvent: is,
            app: g,
            asyncQueue: cn,
            bcdStore: zI,
            createI18nT: Zf,
            dialog: $f,
            env: q,
            formateContent: GI,
            http: Z,
            i18n: dr,
            langsLocaleToISO6391: UI,
            lazyLoad: Ut,
            notify: De,
            parseI18Locales: Xf,
            pickLazyComponent: VI,
            pickLazyFunction: HI,
            pop: Ve,
            protobuf: KI,
            requestRecaptcha: qI,
            settingStore: gt,
            socket: Vt,
            subscribePageContext: YI,
            supportSocket: vt,
            system: ZI,
            systemStore: os,
            useAccount: it,
            useActiveMemo: $I,
            useAnimatedFrames: XI,
            useAsync: Jf,
            useAsyncFn: JI,
            useAsyncNode: QI,
            useAutoRemove: eC,
            useBcd: tC,
            useChangeLang: cs,
            useCurrencyConfig: nC,
            useDelayHover: rC,
            useDialog: Qf,
            useDisableBodyScroll: aC,
            useDisableParentScroll: sC,
            useForceUpdate: ls,
            useHover: iC,
            useInOverlayer: oC,
            useInView: cC,
            useIntersection: lC,
            useIsActive: uC,
            useIsDarken: us,
            useIsFirstRender: dC,
            useIsMobile: ds,
            useIsomorphicEffect: ln,
            useLayoutSize: fC,
            useLinkIntercept: pC,
            useLocalCurrency: fs,
            useLocation: hC,
            useMergeRefs: mC,
            useMountedState: gC,
            useNavigate: He,
            useNotify: vC,
            useOnClickOutside: yC,
            usePageContext: ep,
            usePageProps: bC,
            usePop: un,
            usePortalContext: _C,
            usePortalList: xC,
            usePrevious: jC,
            useQrcode: wC,
            useResize: SC,
            useRootClassName: NC,
            useSetSearch: EC,
            useSetState: IC,
            useSetting: ps,
            useSmoothList: CC,
            useSystem: AC,
            useToggleDarken: kC,
            useTranslation: z,
            useWallet: tp,
            useWindowSize: RC,
            userSocket: fr,
            utils: M,
            valtio: np,
            wallet: PC,
            walletStore: hs,
            wrUtils: TC
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Px = Object.freeze(Object.defineProperty({
            __proto__: null,
            ALPHA_MODES: zC,
            AbstractMultiResource: GC,
            AccessibilityManager: UC,
            AlphaFilter: VC,
            AnimatedSprite: HC,
            Application: KC,
            ArrayResource: qC,
            Assets: YC,
            AssetsClass: ZC,
            Attribute: $C,
            BLEND_MODES: XC,
            BUFFER_BITS: JC,
            BUFFER_TYPE: QC,
            BackgroundSystem: eA,
            BaseImageResource: tA,
            BasePrepare: nA,
            BaseRenderTexture: rA,
            BaseTexture: aA,
            BatchDrawCall: sA,
            BatchGeometry: iA,
            BatchRenderer: oA,
            BatchShaderGenerator: cA,
            BatchSystem: lA,
            BatchTextureArray: uA,
            BitmapFont: dA,
            BitmapFontData: fA,
            BitmapText: pA,
            BlobResource: hA,
            BlurFilter: mA,
            BlurFilterPass: gA,
            Bounds: vA,
            BrowserAdapter: yA,
            Buffer: bA,
            BufferResource: _A,
            BufferSystem: xA,
            CLEAR_MODES: jA,
            COLOR_MASK_BITS: wA,
            Cache: SA,
            CanvasResource: NA,
            Circle: EA,
            ColorMatrixFilter: IA,
            CompressedTextureResource: CA,
            Container: AA,
            ContextSystem: kA,
            CountLimiter: RA,
            CubeResource: PA,
            DEG_TO_RAD: TA,
            DRAW_MODES: DA,
            DisplacementFilter: LA,
            DisplayObject: OA,
            ENV: BA,
            Ellipse: MA,
            EventBoundary: WA,
            EventSystem: FA,
            ExtensionType: zA,
            Extract: GA,
            FORMATS: UA,
            FORMATS_TO_COMPONENTS: VA,
            FXAAFilter: HA,
            FederatedDisplayObject: KA,
            FederatedEvent: qA,
            FederatedMouseEvent: YA,
            FederatedPointerEvent: ZA,
            FederatedWheelEvent: $A,
            FillStyle: XA,
            Filter: JA,
            FilterState: QA,
            FilterSystem: ek,
            Framebuffer: tk,
            FramebufferSystem: nk,
            GC_MODES: rk,
            GLFramebuffer: ak,
            GLProgram: sk,
            GLTexture: ik,
            GRAPHICS_CURVES: ok,
            GenerateTextureSystem: ck,
            Geometry: lk,
            GeometrySystem: uk,
            Graphics: dk,
            GraphicsData: fk,
            GraphicsGeometry: pk,
            IGLUniformData: hk,
            INSTALLED: mk,
            INTERNAL_FORMATS: gk,
            INTERNAL_FORMAT_TO_BYTES_PER_PIXEL: vk,
            ImageBitmapResource: yk,
            ImageResource: bk,
            LINE_CAP: _k,
            LINE_JOIN: xk,
            LineStyle: jk,
            LoaderParserPriority: wk,
            MASK_TYPES: Sk,
            MIPMAP_MODES: Nk,
            MSAA_QUALITY: Ek,
            MaskContainer: Ik,
            MaskData: Ck,
            MaskSystem: Ak,
            Matrix: kk,
            Mesh: Rk,
            MeshBatchUvs: Pk,
            MeshGeometry: Tk,
            MeshMaterial: Dk,
            MultisampleSystem: Lk,
            NineSlicePlane: Ok,
            NoiseFilter: Bk,
            ObjectRenderer: Mk,
            ObjectRendererSystem: Wk,
            ObservablePoint: Fk,
            PI_2: zk,
            PRECISION: Gk,
            ParticleContainer: Uk,
            ParticleRenderer: Vk,
            Particles: Hk,
            PixiApp: Kk,
            PixiApplication: qk,
            PixiReact: Yk,
            PlaneGeometry: Zk,
            PluginSystem: $k,
            Point: Xk,
            Polygon: Jk,
            Pool: Qk,
            Prepare: eR,
            Program: tR,
            ProjectionSystem: nR,
            Quad: rR,
            QuadUv: aR,
            RAD_TO_DEG: sR,
            RENDERER_TYPE: iR,
            Rect: oR,
            Rectangle: cR,
            RenderTexture: lR,
            RenderTexturePool: uR,
            RenderTextureSystem: dR,
            Renderer: fR,
            ResizePlugin: pR,
            Resource: hR,
            RopeGeometry: mR,
            RoundedRectangle: gR,
            Runner: vR,
            SAMPLER_TYPES: yR,
            SCALE_MODES: bR,
            SHAPES: _R,
            SVGResource: xR,
            ScissorSystem: jR,
            Shader: wR,
            ShaderSystem: SR,
            SimpleMesh: NR,
            SimplePlane: ER,
            SimpleRope: IR,
            Spine: CR,
            Sprite: AR,
            SpriteMaskFilter: kR,
            Spritesheet: RR,
            StartupSystem: PR,
            State: TR,
            StateSystem: DR,
            StencilSystem: LR,
            SystemManager: OR,
            TARGETS: BR,
            TEXT_GRADIENT: MR,
            TYPES: WR,
            TYPES_TO_BYTES_PER_COMPONENT: FR,
            TYPES_TO_BYTES_PER_PIXEL: zR,
            TemporaryDisplayObject: GR,
            Text: UR,
            TextFormat: VR,
            TextMetrics: HR,
            TextStyle: KR,
            Texture: qR,
            TextureGCSystem: YR,
            TextureMatrix: ZR,
            TextureSystem: $R,
            TextureUvs: XR,
            Ticker: JR,
            TickerPlugin: QR,
            TilingSprite: e2,
            TilingSpriteRenderer: t2,
            TimeLimiter: n2,
            Transform: r2,
            TransformFeedback: a2,
            TransformFeedbackSystem: s2,
            UPDATE_PRIORITY: i2,
            UniformGroup: o2,
            VERSION: c2,
            VideoResource: l2,
            ViewSystem: u2,
            ViewableBuffer: d2,
            WRAP_MODES: f2,
            XMLFormat: p2,
            XMLStringFormat: h2,
            accessibleTarget: m2,
            autoDetectFormat: g2,
            autoDetectRenderer: v2,
            autoDetectResource: y2,
            cacheTextureArray: b2,
            checkDataUrl: _2,
            checkExtension: x2,
            checkMaxIfStatementsInShader: j2,
            convertToList: w2,
            copySearchParams: S2,
            createStringVariations: N2,
            createTexture: E2,
            createUBOElements: I2,
            curves: C2,
            defaultFilterVertex: A2,
            defaultVertex: k2,
            detectAvif: R2,
            detectCompressedTextures: P2,
            detectDefaults: T2,
            detectWebp: D2,
            extensions: L2,
            filters: O2,
            generateProgram: B2,
            generateUniformBufferSync: M2,
            getFontFamilyName: W2,
            getTestContext: F2,
            getUBOData: z2,
            graphicsUtils: G2,
            groupD8: U2,
            isMobile: V2,
            isSingleItem: H2,
            loadBitmapFont: K2,
            loadDDS: q2,
            loadImageBitmap: Y2,
            loadJson: Z2,
            loadKTX: $2,
            loadSVG: X2,
            loadTextures: J2,
            loadTxt: Q2,
            loadWebFont: eP,
            parseDDS: tP,
            parseKTX: nP,
            resolveCompressedTextureUrl: rP,
            resolveTextureUrl: aP,
            settings: sP,
            spritesheetAsset: iP,
            uniformParsers: oP,
            unsafeEvalSupported: cP,
            usePixiApp: lP,
            utils: uP
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        We = {};

    function Tx(e, t) {
        let n;
        return () => {
            clearTimeout(n), n = setTimeout(e, t)
        }
    }
    const Dx = Tx(We.performReactRefresh, 16);

    function Lx(e, t) {
        for (const n in t) {
            if (n === "__esModule") continue;
            const r = t[n];
            We.isLikelyComponentType(r) && We.register(r, e + " export " + n)
        }
    }

    function Ox(e, t) {
        if (!Pa(e, a => a in t)) return "Could not Fast Refresh (export removed)";
        if (!Pa(t, a => a in e)) return "Could not Fast Refresh (new export)";
        let n = !1;
        const r = Pa(t, (a, s) => (n = !0, We.isLikelyComponentType(s) ? !0 : e[a] === t[a]));
        if (n && r) Dx();
        else return "Could not Fast Refresh. Learn more at https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#consistent-components-exports"
    }

    function Pa(e, t) {
        for (const n in e) {
            if (n === "__esModule") continue;
            const r = Object.getOwnPropertyDescriptor(e, n);
            if (r && r.get || !t(n, e[n])) return !1
        }
        return !0
    }

    function Bx(e) {
        return _t(() =>
            import (e).then(async t => (await t.__tla, t)), [])
    }
    We.__hmr_import = Bx, We.registerExportsForReactRefresh = Lx, We.validateRefreshBoundaryAndEnqueueUpdate = Ox;
    const Mx = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: We
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    document.addEventListener("gesturestart", e => e.preventDefault()), dr.init({
        lng: localStorage.getItem("lang") || "en",
        fallbackLng: "en",
        defaultNS: "translation",
        returnEmptyString: !1,
        backend: {
            sources: {
                translation: Xf(vs)
            }
        }
    });
    const Wx = () => ee("modules/account").then(e => e.account()),
        Fx = h.lazy(Wx),
        zx = $.memo(function() {
            return i.jsx(Wf, {
                children: i.jsx(h.Suspense, {
                    children: i.jsx(Fx, {})
                })
            })
        }),
        Gx = $.memo(function() {
            return h.useEffect(() => () => {
                g.emit("ad_track", "registration_abandoned")
            }, []), i.jsx(ht, {
                className: Ux,
                children: i.jsx(mt, {
                    children: i.jsx(zx, {})
                })
            })
        }),
        Ux = "sh1kgj9",
        Vx = $.memo(function() {
            const e = Qf(),
                t = it(),
                n = () => {
                    e.back()
                };
            return h.useEffect(() => {
                const r = async () => {
                        await F.syncData(), g.emit("ad_track", "login_success", {
                            userId: String(t.userId)
                        }), n()
                    },
                    a = async () => {
                        await F.syncData();
                        const s = q.localCurrencys.find(o => o.value === F.state.bonusCurrencyName) || q.localCurrencys.find(o => o.area === F.state.areaCode);
                        s && gt.setState(E({
                            localeCurrencyName: s.value,
                            enableLocaleCurrency: !0,
                            lastFiatCurrency: gt.state.lastFiatCurrency || s.value
                        }, s.force && hs.state[s.value] && {
                            currencyName: s.value
                        })), g.emit("ad_track", "regist_success", {
                            userId: String(t.userId)
                        }), g.emit("track", "_profile_set_once"), n()
                    };
                return g.on("signin-success", r), g.on("regist-success", a), () => {
                    g.off("signin-success", r), g.off("regist-success", a)
                }
            }, []), null
        }),
        Hx = () => ee("modules/account").then(e => e.walletConnectAuthModal()),
        Kx = Ut(Hx),
        qx = $.memo(function() {
            const e = h.useRef(0),
                [t, n] = h.useState(!1);
            return h.useEffect(() => {
                const r = () => {
                    e.current && e.current === 0 && (n(!0), e.current = e.current + 1, document.documentElement.style.setProperty("--wcm-z-index", "10003"))
                };
                return g.on("open-wallet-connect-modal", r), () => {
                    g.off("open-wallet-connect-modal", r)
                }
            }, []), t ? i.jsx(Kx, {}) : null
        }),
        Yx = () => ee("modules/account").then(e => e.thirdLogin()),
        Zx = Ut(Yx),
        $x = $.memo(function() {
            return i.jsx(Se.Source, {
                id: "page-third-login-enter",
                children: i.jsx(Zx, {})
            })
        });

    function Xx() {
        g.emit("inject_rootNode", i.jsx(Vx, {})), g.emit("inject_rootNode", i.jsx($x, {})), g.emit("inject_rootNode", i.jsx(qx, {})), g.emit("inject_dialog", [{
            path: "#/login/*",
            isDialog: !0,
            element: i.jsx(Gx, {})
        }])
    }
    const Jx = "/assets/promo_code.94c7daca.png",
        Qx = "/assets/promo_code_w.206ad2da.png";

    function e1() {
        const {
            t: e
        } = z(), [t, n] = h.useState(""), r = () => Z.post("/account/invitation/bind/", {
            invitationCode: t
        }).then(() => {
            Ve.back()
        }).catch(De);
        return i.jsx(ht, {
            className: r1,
            title: e("Referral/Promo Code"),
            children: i.jsxs("div", {
                children: [i.jsx(ss, {
                    value: t,
                    onChange: n,
                    after: i.jsx("div", {
                        className: "tip",
                        children: e("Only valid for first 24 hours after signing up.")
                    })
                }), i.jsx(we, {
                    onClick: t ? r : void 0,
                    type: "conic2",
                    children: e("Apply")
                })]
            })
        })
    }
    async function t1() {
        if (await F.waitLogin(), M.serverTime().getTime() - F.state.createTime < 864e5) {
            const e = await Z.get("/account/invitation/get/");
            return e ? e.invitationCode : ""
        } else return "init"
    }
    h.memo(({
        small: e = !1
    }) => {
        const {
            t
        } = z(), n = us(), r = He(), [a, s] = h.useState("init");
        h.useEffect(() => {
            t1().then(l => s(l || ""))
        }, []);
        const o = () => r("#/promocode");
        return a ? null : e ? i.jsx("div", {
            className: se(a1, "fold-navlink-item"),
            children: i.jsx(we, {
                className: "promo-b",
                onClick: o,
                children: i.jsx(n1, {})
            })
        }) : i.jsxs("div", {
            className: s1,
            children: [i.jsxs(we, {
                className: "promo-btn",
                onClick: o,
                children: [i.jsx("img", {
                    src: n ? Jx : Qx
                }), i.jsx("div", {
                    className: "name",
                    children: i.jsx("span", {
                        children: t("Referral/Promo Code")
                    })
                })]
            }), i.jsx("div", {
                className: "available",
                children: t("Available in first 24 hours")
            })]
        })
    });
    const n1 = $.memo(function() {
            return i.jsx("svg", {
                width: "22",
                height: "20",
                viewBox: "0 0 22 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: i.jsxs("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [i.jsx("path", {
                        d: "M.347 4.426h21.306a.35.35 0 0 1 .347.35v4.168a.35.35 0 0 1-.347.35H.347A.35.35 0 0 1 0 8.943V4.776a.35.35 0 0 1 .347-.35Z",
                        fill: "#FFCB34",
                        fillRule: "nonzero"
                    }), i.jsx("path", {
                        d: "M2.765 9.293h16.47c.128 0 .232.105.232.233v10.241a.233.233 0 0 1-.231.233H2.765a.233.233 0 0 1-.232-.233V9.527c0-.129.104-.234.232-.234Z",
                        fill: "#FFCB34",
                        fillRule: "nonzero"
                    }), i.jsx("path", {
                        d: "M12.447 2.764v6.53h6.789c.127 0 .231.021.231.048v2.125c0 .027-.104.049-.231.049h-6.789V20H9.553l-.001-8.485H2.765c-.128 0-.232-.021-.232-.048V9.342c0-.027.104-.049.232-.049h6.787V2.764h2.895Z",
                        fill: "#FF9D34",
                        fillRule: "nonzero"
                    }), i.jsx("path", {
                        d: "M4.941.284s.611-.448 1.894-.218C8.57.377 9.718 2.98 9.718 2.98v1.522S7.969 2.51 6.57 2.159c-1.074-.268-1.98.352-1.98.352l.35-2.227Zm-2.95 2.189c.504.175 3.029.664 3.029.664l2.124.474 1.954.89c-4.058.606-7.824-.095-7.824-.095l1.61-.643-.892-1.29Zm17.23 1.29.895-1.29c-.504.175-3.028.664-3.028.664l-2.125.474-1.954.894c4.058.605 7.824-.1 7.824-.1l-1.612-.642ZM17.166.287l.347 2.224s-.909-.62-1.98-.35c-1.398.353-3.143 2.344-3.143 2.344V2.982S13.536.38 15.273.07c1.282-.23 1.893.218 1.893.218Z",
                        fill: "#DC4592"
                    }), i.jsx("path", {
                        d: "M14.587 2.496c1.262-.733 2.761-.486 2.926.015.183.55-.712 1.138-2.006 1.816-.848.449-3.12.175-3.12.175s.938-1.272 2.2-2.006Zm-9.993.018c.165-.5 1.664-.748 2.927-.015 1.262.73 2.2 2.006 2.2 2.006S7.45 4.779 6.6 4.33c-1.294-.68-2.188-1.266-2.006-1.816Z",
                        fill: "#9B34FF"
                    })]
                })
            })
        }),
        r1 = "poy960u",
        a1 = "f1csl0p5",
        s1 = "poo6c5d";

    function i1() {
        return Z.get("/agent/invitation/code/custom/")
    }
    const o1 = de(() => Z.get("/agent/reward/config/"));

    function c1() {
        const e = `//mycasino.${q.host}`;
        return {
            management: e + "/",
            createCode: e + "/mycasino/referral",
            rewardWithdraw: e + "/mycasino/rewards",
            commissionWithdraw: e + "/mycasino/commissions",
            rewardDetails: e + "/mycasino/rewards",
            commissionDetails: e + "/mycasino/commissions",
            friends: e + "/mycasino/friends",
            dashboard: e + "/mycasino/dashboard",
            bannerdownload: e + "/mycasino/bannerdownload",
            downloadBanner: "https://res.bc.game/material.zip?md5=69dc359c0de077f93b62da3bc3e5520d"
        }
    }
    const l1 = "/assets/refer.8563340a.png",
        u1 = h.memo(function() {
            const {
                t: e
            } = z(), t = He(), n = fs(!0), [r, a] = h.useState(""), {
                login: s
            } = it();
            h.useEffect(() => {
                i1().then(u => {
                    u && a(u.invitationUrl || "")
                }).catch(De)
            }, [s]);
            const o = i.jsx(we, {
                    onClick: () => {
                        M.copyToClipboard(r), De(e("Copied"))
                    },
                    children: e("Copy link")
                }),
                l = n.amount2localStr(new lr(1e3));
            return i.jsx(ht, {
                className: d1,
                title: e("Refer a friend"),
                children: i.jsxs(mt, {
                    className: "refer-friend-dialog",
                    children: [i.jsxs("div", {
                        className: "refer-top",
                        children: [i.jsx("div", {
                            className: "refer-bg"
                        }), i.jsx("img", {
                            alt: "referImg",
                            src: l1
                        }), i.jsxs("div", {
                            className: "refer-right",
                            children: [i.jsx("p", {
                                className: "t",
                                children: i.jsxs(qf, {
                                    number: l,
                                    i18nKey: "trans.mainpage.refer.desc",
                                    children: ["Refer a friend and get ", i.jsxs("span", {
                                        className: "s-y",
                                        children: [i.jsx("br", {}), {
                                            number: l
                                        }]
                                    }), " ", i.jsx("span", {
                                        children: "+"
                                    }), " ", i.jsxs("span", {
                                        className: "s-g",
                                        children: ["15%", i.jsx("br", {})]
                                    }), " commission"]
                                })
                            }), i.jsx("p", {
                                className: "g",
                                children: e("Invite friends, earn money.")
                            })]
                        })]
                    }), i.jsx("button", {
                        className: "learn-btn",
                        onClick: () => {
                            $f.close(), t("/affiliate")
                        },
                        children: e("Learn more")
                    }), i.jsxs("div", {
                        className: "refer-bottom",
                        children: [i.jsx("p", {
                            className: "sub-t",
                            children: e("Share your referral link:")
                        }), i.jsx(ss, {
                            value: r,
                            readOnly: !0,
                            after: o
                        })]
                    })]
                })
            })
        }),
        d1 = "r5k7vbo";

    function f1(e) {
        return e > 9 ? e.toString() : "0" + e
    }
    const p1 = $.memo(function() {
            const {
                t: e
            } = z(), [t, n] = h.useState([]);
            return h.useEffect(() => {
                o1().then(r => {
                    r && r.length > 0 && n([...r])
                }).catch(console.log)
            }, []), i.jsx(ht, {
                className: h1,
                title: e("Referral Reward Rules"),
                children: i.jsxs(mt, {
                    className: "rule-dalog-wrap",
                    children: [i.jsxs("div", {
                        className: "getreward-wrap",
                        children: [i.jsx("p", {
                            className: "t",
                            children: e("How to Get your Referral Reward")
                        }), i.jsxs("div", {
                            className: "imgs-wrap",
                            children: [i.jsxs("div", {
                                className: "rule-left",
                                children: [i.jsx("p", {
                                    className: "ri-t",
                                    children: "1"
                                }), i.jsx("p", {
                                    className: "ri-st",
                                    dangerouslySetInnerHTML: {
                                        __html: e("<span>Share</span> to friends")
                                    }
                                }), i.jsx("p", {
                                    className: "ri-d",
                                    children: e("Share your referral link or code to your friends")
                                })]
                            }), i.jsxs("div", {
                                className: "rule-center",
                                children: [i.jsx("p", {
                                    className: "ri-t",
                                    children: "2"
                                }), i.jsxs("p", {
                                    className: "ri-st",
                                    children: ["Get ", i.jsx("span", {
                                        children: "$1000"
                                    })]
                                }), i.jsx("p", {
                                    className: "ri-d",
                                    children: e("Your awards will be locked for now")
                                })]
                            }), i.jsxs("div", {
                                className: "rule-right",
                                children: [i.jsx("p", {
                                    className: "ri-t",
                                    children: "3"
                                }), i.jsx("p", {
                                    className: "ri-st",
                                    dangerouslySetInnerHTML: {
                                        __html: e("Level Up & <span>Receive!</span>")
                                    }
                                }), i.jsx("p", {
                                    className: "ri-d",
                                    children: e("Your friend\u2019s VIP level will unlock your awards (see rules below)")
                                })]
                            })]
                        })]
                    }), i.jsxs("div", {
                        className: "unlock-rules-wrap",
                        children: [i.jsxs("div", {
                            className: "ur-title",
                            children: [i.jsx("div", {
                                className: "l"
                            }), i.jsx("p", {
                                children: e("Unlock Rules")
                            }), i.jsx("div", {
                                className: "r"
                            })]
                        }), i.jsx("div", {
                            className: "rule-table-wrap",
                            children: i.jsxs("div", {
                                className: "ri-table",
                                children: [i.jsxs("div", {
                                    className: "ri-thead",
                                    children: [i.jsx("p", {
                                        className: "ri-tr-l",
                                        children: e("Friend\u2019s Level")
                                    }), i.jsx("p", {
                                        className: "ri-tr-m",
                                        children: e("Total Wager")
                                    }), i.jsx("p", {
                                        className: "ri-tr-r",
                                        children: e("Unlock Amount")
                                    })]
                                }), t.length === 0 ? i.jsx(Gf, {}) : i.jsx("div", {
                                    className: "ri-tbody",
                                    children: t.map((r, a) => {
                                        const s = at.getLevelInfo(r.userLevel),
                                            o = a % 2 === 0;
                                        return i.jsxs("div", {
                                            className: se("ri-tr", o && "have-bg"),
                                            children: [i.jsx("div", {
                                                className: "ri-tr-l",
                                                children: i.jsxs("p", {
                                                    children: ["VIP ", f1(r.userLevel)]
                                                })
                                            }), i.jsx("div", {
                                                className: "ri-tr-m",
                                                children: i.jsx("p", {
                                                    children: s.xp
                                                })
                                            }), i.jsxs("div", {
                                                className: "ri-tr-r",
                                                children: [i.jsx("div", {
                                                    className: "coin-icon",
                                                    children: i.jsx("span", {
                                                        children: "$"
                                                    })
                                                }), i.jsxs("span", {
                                                    children: ["+", new lr(r.rewardAmount).toFixed(2)]
                                                })]
                                            })]
                                        }, `ri-tr-${a}`)
                                    })
                                })]
                            })
                        })]
                    })]
                })
            })
        }),
        h1 = "r15pu1rh",
        m1 = $.memo(function() {
            const {
                t: e
            } = z(), t = c1();
            return i.jsx(ht, {
                className: g1,
                title: e("Commission Reward Rules"),
                children: i.jsxs(mt, {
                    className: "rule-dialog-wrap",
                    children: [i.jsx("div", {
                        className: "cru-st",
                        children: e("Commission rate depends on different games:")
                    }), i.jsxs("div", {
                        className: "max-wrap",
                        children: [i.jsx("div", {
                            className: "wager-item item-1",
                            children: i.jsxs("div", {
                                className: "item-inner",
                                children: [i.jsxs("div", {
                                    className: "top",
                                    children: [i.jsx("p", {
                                        className: "m-t",
                                        children: "7%"
                                    }), i.jsx(Ta, {
                                        labelOne: e("Calculation example: wager 100"),
                                        labelTwo: `${e("Commission")}= 100 \u2715 1% \u2715 7% = 0.07`
                                    }), i.jsx("p", {
                                        className: "of",
                                        children: e("Of 1% wager")
                                    })]
                                }), i.jsxs("div", {
                                    className: "bot",
                                    children: [i.jsxs("p", {
                                        className: "l",
                                        children: [e("Game"), ":"]
                                    }), i.jsx("p", {
                                        className: "r",
                                        children: e("The Original Games")
                                    })]
                                })]
                            })
                        }), i.jsx("div", {
                            className: "wager-item item-2",
                            children: i.jsxs("div", {
                                className: "item-inner",
                                children: [i.jsxs("div", {
                                    className: "top",
                                    children: [i.jsx("p", {
                                        className: "m-t",
                                        children: "15%"
                                    }), i.jsx(Ta, {
                                        labelOne: e("Calculation example: wager 100"),
                                        labelTwo: `${e("Commission")}= 100 \u2715 1% \u2715 15% = 0.15`
                                    }), i.jsx("p", {
                                        className: "of",
                                        children: e("Of 1% wager")
                                    })]
                                }), i.jsxs("div", {
                                    className: "bot",
                                    children: [i.jsxs("p", {
                                        className: "l",
                                        children: [e("Game"), ":"]
                                    }), i.jsx("p", {
                                        className: "r",
                                        children: e("3rd Party Slots, Live Casino")
                                    })]
                                })]
                            })
                        }), i.jsx("div", {
                            className: "wager-item item-3",
                            children: i.jsxs("div", {
                                className: "item-inner",
                                children: [i.jsxs("div", {
                                    className: "top",
                                    children: [i.jsx("p", {
                                        className: "m-t",
                                        children: "25%"
                                    }), i.jsx(Ta, {
                                        labelOne: e("Calculation example: wager 100"),
                                        labelTwo: `${e("Commission")}= 100 \u2715 1% \u2715 25% = 0.25`
                                    }), i.jsx("p", {
                                        className: "of",
                                        children: e("Of 1% wager")
                                    })]
                                }), i.jsxs("div", {
                                    className: "bot",
                                    children: [i.jsxs("p", {
                                        className: "l",
                                        children: [e("Game"), ":"]
                                    }), i.jsx("p", {
                                        className: "r",
                                        children: e("Sports")
                                    })]
                                })]
                            })
                        }), i.jsxs("div", {
                            className: "wager-more",
                            children: [i.jsx("div", {
                                className: "info-flag",
                                children: "!"
                            }), i.jsxs("div", {
                                className: "info-text",
                                children: [i.jsx("p", {
                                    children: e("If you have customized your commission rate, please see your rate here:")
                                }), i.jsxs(Gt, {
                                    href: t.friends,
                                    target: "_blank",
                                    children: [e("View my commission rate"), " ", i.jsx(st, {
                                        className: "icon-blank",
                                        name: "NewWindow"
                                    })]
                                })]
                            })]
                        }), i.jsxs("ul", {
                            children: [i.jsx("li", {
                                children: e("In any public environment (for example, universities, schools, libraries, and office spaces), only one commission can be paid to each user, IP address, electronic device, home, phone number, billing method or email address, if the computer and IP address is shared with others.")
                            }), i.jsx("li", {
                                children: e("Our decision to draw a bet will be based entirely on our discretion after a deposit is made and a bet is successfully placed.")
                            }), i.jsx("li", {
                                children: e("Commissions can be withdrawn into our internal {{host}} wallet from the dashboard at anytime. (View your commission extraction in the dashboard and view the balance in the wallet).", {
                                    host: q.buildHost
                                })
                            }), i.jsx("li", {
                                children: e("We support the majority of currencies on the market.")
                            }), i.jsx("li", {
                                children: e("The system calculates the commission every 24 hours.")
                            })]
                        }), i.jsx("div", {
                            className: "contact-wrap",
                            children: i.jsxs("p", {
                                children: [i.jsx("span", {
                                    children: e("If you have any questions regarding our rules, please")
                                }), i.jsxs("a", {
                                    href: "https://t.me/SamShady_BCGAME",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [i.jsx("span", {
                                        children: e("Contact Us")
                                    }), i.jsx(st, {
                                        className: "icon-blank",
                                        name: "NewWindow"
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            })
        }),
        Ta = $.memo(function({
            labelOne: e,
            labelTwo: t
        }) {
            const [n, r] = h.useState(!1), a = ds();
            return i.jsxs("div", {
                className: "tooltip-text-wrap",
                children: [i.jsx("div", {
                    className: "t-d",
                    onMouseEnter: () => {
                        a || r(!0)
                    },
                    onMouseLeave: () => {
                        a || r(!1)
                    },
                    onClick: () => {
                        a && r(!n)
                    },
                    children: "?"
                }), n && i.jsxs("div", {
                    className: "tool-tip-wrap",
                    children: [i.jsx("p", {
                        children: e
                    }), i.jsx("p", {
                        children: t
                    })]
                })]
            })
        }),
        g1 = "c1nhk0wh";

    function v1() {
        g.emit("inject_dialog", [{
            path: "#/promocode",
            element: i.jsx(e1, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/referfriend",
            element: i.jsx(u1, {}),
            isDialog: !0
        }, {
            path: "#/referralrule",
            element: i.jsx(p1, {}),
            isDialog: !0
        }, {
            path: "#/commissionrule",
            element: i.jsx(m1, {}),
            isDialog: !0
        }])
    }

    function y1(e) {
        return ({
            data: t
        }) => (b1(), i.jsx("div", {
            className: x1,
            children: i.jsx(ot, {
                className: "full-message",
                children: i.jsx("div", {
                    className: "wrap",
                    children: i.jsx(h.Suspense, {
                        fallback: null,
                        children: i.jsx(e, {
                            data: t
                        })
                    })
                })
            })
        }))
    }

    function b1() {
        h.useEffect(() => {
            dp().then(e => {
                _1(G, e)
            })
        }, [G])
    }
    const _1 = Wt((e, t) => {
            function n(r) {
                Z.post(`/game/support/share-v2/share/room/like-infos/${r}`).then(a => {
                    a.map(s => t.setItem(s.shareId, {
                        count: s.clickCount,
                        isLike: s.hasClickShare
                    }))
                })
            }
            e.on("room_change", () => {
                t.roomId = e.currentRoom.id, n(e.currentRoom.id)
            }), e.socket.on("share-like", Vt.decodeBind(r => {
                const a = t.getItem(r.shareId);
                t.setItem(r.shareId, {
                    count: r.clickCount,
                    isLike: a.isLike
                })
            }, "json"))
        }),
        x1 = "sed9dh0",
        j1 = () => ee("modules/lottery").then(e => e.lotteryNotice()),
        w1 = () => ee("modules/lottery").then(e => e.lotteryBetDetail()),
        S1 = () => ee("modules/lottery").then(e => e.msgShareCard()),
        N1 = () => ee("modules/lottery").then(e => e.sendGift()),
        E1 = () => ee("modules/lottery").then(e => e.ticketGiftHistory()),
        I1 = () => ee("modules/lottery").then(e => e.receiveGift()),
        C1 = () => ee("modules/lottery").then(e => e.newUserGift()),
        A1 = () => ee("modules/lottery").then(e => e.bcLotteryNotify()),
        Da = () => ee("modules/lottery").then(e => e.msgBcLottery()),
        k1 = () => ee("modules/lottery").then(e => e.bcLotteryBillGift()),
        R1 = () => ee("modules/lottery").then(e => e.bcLotteryGuide()),
        P1 = h.lazy(S1),
        T1 = h.lazy(j1),
        D1 = h.lazy(w1),
        L1 = h.lazy(N1),
        O1 = h.lazy(E1),
        B1 = h.lazy(I1),
        M1 = h.lazy(A1),
        W1 = h.lazy(k1),
        F1 = h.lazy(C1),
        z1 = h.lazy(R1),
        G1 = h.lazy(async () => ({
            default: (await Da()).MsgType13
        })),
        U1 = h.lazy(async () => ({
            default: (await Da()).MsgType14
        })),
        V1 = h.lazy(async () => ({
            default: (await Da()).MsgType15
        }));

    function H1() {
        return h.useEffect(() => {
            G.addParser("13", Ne(G1)), G.addParser("14", Ne(U1)), G.addParser("15", Ne(V1)), G.addParser("21", Ne(y1(P1)))
        }, []), null
    }

    function K1() {
        g.emit("inject_rootNode", i.jsx(T1, {})), g.emit("inject_rootNode", i.jsx(M1, {})), g.emit("inject_rootNode", i.jsx(H1, {})), g.emit("inject_dialog", [{
            path: "#/bet_detail/:betId",
            element: i.jsx(D1, {}),
            isDialog: !0
        }, {
            path: "#/send_ticket",
            element: i.jsx(L1, {}),
            isDialog: !0
        }, {
            path: "#/history_gift",
            element: i.jsx(O1, {}),
            isDialog: !0
        }, {
            path: "#/gift_ticket/:code",
            element: i.jsx(B1, {}),
            isHook: !0
        }, {
            path: "#/billbcl/:relateId",
            element: i.jsx(W1, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/welcome_bonuses/:balls",
            element: i.jsx(F1, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/lottery_guide",
            element: i.jsx(z1, {}),
            isDialog: !0,
            isAuth: !0
        }])
    }

    function q1({
        href: e
    }) {
        const t = He();
        return ln(() => {
            t(e, {
                replace: !0
            })
        }, [e]), null
    }

    function Y1() {
        const e = g.isMobile();
        g.emit("inject_dialog", [{
            path: "#/chat/:path",
            element: i.jsx(hP, {}),
            isDialog: !0
        }, {
            path: "#/chat",
            element: e ? i.jsx(mP, {}) : i.jsx(q1, {
                href: "#/chat/0"
            }),
            isDialog: e,
            isAuth: !0
        }, {
            path: "#/settings/group-message",
            element: i.jsx(gP, {}),
            isAuth: !0,
            isDialog: !0
        }])
    }
    const Z1 = Ut(async () => ({
        default: (await _t(() =>
            import ("../chunk-b894b9de.js").then(async e => (await e.__tla, e)).then(e => e.j), ["assets/chunk-b894b9de.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-5bcb444f.js", "assets/chunk-357b411e.js", "assets/chunk-27d137a6.js", "assets/MatchIcon.8462f48e.css", "assets/chunk-03c302ce.js", "assets/chunk-0e1ef679.js", "assets/chunk-5fced113.js", "assets/chunk-0e835458.js", "assets/chunk-654ef298.js", "assets/chunk-35f3c0e2.js", "assets/chunk-c23b3c52.js", "assets/chunk-e570733e.js", "assets/chunk-68de7933.js", "assets/chunk-07977b38.js", "assets/chunk-47df8c47.js", "assets/chunk-3dc03e47.js", "assets/chunk-e20af49b.js", "assets/chunk-6e6e4b85.js", "assets/Emoji.5e52f519.css", "assets/chunk-b8efc996.js", "assets/chunk-000ed202.js", "assets/SearchWrap.82780ba6.css", "assets/chunk-78c5b721.js", "assets/GameList.30b187ac.css", "assets/index.8e819340.css"])).ChatDialog
    }));

    function $1() {
        g.emit("inject_dialog", [{
            path: "#/public-chat",
            element: i.jsx(Z1, {}),
            isDialog: !0
        }])
    }
    const X1 = () => ee("modules/account");

    function me(e) {
        return h.lazy(async function() {
            const {
                asyncComponents: t
            } = await X1();
            return t[e]()
        })
    }
    const J1 = me("PrivacyDialog"),
        wd = me("TwoFactorDialog"),
        Q1 = me("ResetPasswordDialog"),
        ej = me("ResetPasswordInvalid"),
        tj = me("EmailDialog"),
        nj = me("SendEmailDialog"),
        rj = me("VerifyPhoneDialog"),
        aj = me("SelfExclusionDialog"),
        sj = me("PhoneDialog"),
        ij = me("KYC"),
        Sd = me("NeedKycDialog"),
        oj = me("Payment"),
        cj = "basic-kyc-level";

    function lj() {
        const {
            t: e
        } = z();
        return i.jsxs("div", {
            className: dj,
            children: [i.jsx("h2", {
                children: e("Personal Identification Failed")
            }), i.jsx("p", {
                children: e("Basic KYC failed, Please view the details and resubmit when you are ready.")
            }), i.jsxs(Gt, {
                href: "/setting/kyc",
                children: [i.jsx("span", {
                    children: e("View Detail")
                }), i.jsx(st, {
                    name: "Arrow"
                })]
            })]
        })
    }

    function uj() {
        is("kyc-rejected", () => {
            De(i.jsx(lj, {}), {
                duration: 0
            })
        }), g.emit("inject_dialog", [{
            path: "#/settings/privacy",
            isAuth: !0,
            isDialog: !0,
            element: i.jsx(J1, {})
        }, {
            path: "#/settings/safe",
            isAuth: !0,
            isDialog: !0,
            element: i.jsx(wd, {})
        }, {
            path: "#/settings/resetPassword",
            element: i.jsx(Q1, {}),
            isDialog: !0
        }, {
            path: "#/settings/resetPasswordExpire",
            element: i.jsx(ej, {}),
            isDialog: !0
        }, {
            path: "#/quests/bind2fa",
            element: i.jsx(wd, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/quests/bindemail",
            element: i.jsx(tj, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/quests/sendemail",
            element: i.jsx(nj, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/settings/verifyphone",
            element: i.jsx(rj, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/settings/self-exclusion",
            element: i.jsx(aj, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/settings/mobile",
            element: i.jsx(sj, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/need-verify/:verifyId",
            element: i.jsx(ij, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/settings/verify",
            element: i.jsx(Sd, {
                kyc_level: cj
            }),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/settings/verify/:kycLevelId",
            element: i.jsx(Sd, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/settings/payment",
            element: i.jsx(oj, {}),
            isDialog: !0,
            isAuth: !0
        }])
    }
    const dj = "t1dw89a2",
        fj = Ne(({
            data: e
        }) => {
            const {
                t
            } = z(), n = He();
            return i.jsxs("div", {
                className: se(pj, "raffle-msg"),
                children: [i.jsxs(ot, {
                    className: "raffle-msg-content",
                    children: [i.jsx("div", {
                        className: "left-stars",
                        children: i.jsx("div", {
                            className: "stars-wrap",
                            children: i.jsx("img", {
                                alt: "stars",
                                src: UP.stars
                            })
                        })
                    }), i.jsxs("div", {
                        className: "right-text",
                        children: [i.jsx("p", {
                            className: "bt",
                            children: t("Weekly Raffle Is Live!")
                        }), i.jsx("p", {
                            className: "bd",
                            children: t("Check Your Ticket Now For The Extra Bonus!")
                        })]
                    })]
                }), i.jsx("div", {
                    className: "btn-wrap",
                    children: i.jsx(we, {
                        type: "conic4",
                        onClick: () => n("/promotions/weekly-raffle"),
                        children: t("View ticket")
                    })
                })]
            })
        }),
        pj = "m1uafca8";

    function hj() {
        return h.useEffect(() => {
            G.addParser("19", fj)
        }, []), null
    }
    const mj = h.memo(function() {
            const {
                t: e
            } = z();
            return i.jsxs("div", {
                className: gj,
                children: [i.jsx("p", {
                    className: "n-t",
                    children: e("Weekly Raffle Ending Soon!")
                }), i.jsx("p", {
                    className: "n-d",
                    children: e("Wager More For The Next Ticket And Stand A Chance To Win $5,000!")
                })]
            })
        }),
        gj = "r8wia0b";

    function vj() {
        g.emit("inject_rootNode", i.jsx(hj, {})), is("raffle-almost-over", () => {
            De(i.jsx(mj, {}), {
                duration: 0,
                onClick: () => {
                    g.unsafeNavigate("/promotions/weekly-raffle")
                }
            })
        })
    }
    const La = {
        87: e => e.replace("BC.GAME", "87.COM"),
        xyz: e => e.replace("BC.GAME", "BC.XYZ"),
        kenya: e => e.replace("BC.GAME", "BCGAME.KE")
    };

    function yj(e) {
        const {
            isKenyaHost: t,
            isSpreadHost: n,
            isSpHost: r
        } = M.getHostType(q.host);
        return r ? La[87] : n ? La.xyz : t ? La.kenya : null
    }
    const bj = $.memo(function() {
        const {
            isNgHost: e
        } = M.getHostType(q.host);
        return h.useEffect(() => {
            const t = yj(q.host);
            if (t && (document.title = t(document.title)), e) {
                document.title = "BC.GAME: Casino Games & Slot Games - Fiat Gambling";
                const n = document.querySelector('meta[name="keywords"]'),
                    r = document.querySelector('meta[name="description"]');
                n && n.setAttribute("content", "Casino Games, Crash Game, Gambling Games, Bcgame, Gambling Games, Play Live Casino Online Free, Best Casino Games, Best Games, Online Casino Games, Online Games, Online Casino Slot Games"), r && r.setAttribute("content", "Best Casino.Biggest crypto crash game. Provably fair & Live dealer. 10000 slot games.Unique bonus & free lucky spins. fast withdrawals and Profitable vault.")
            }
        }, []), null
    });

    function _j() {
        g.emit("inject_rootNode", i.jsx(bj, {}))
    }
    const xj = "/assets/coindrop-more.ff14c8e3.png",
        jj = "/assets/parachute-fall.193a2437.png",
        wj = Ne(({
            data: e
        }) => i.jsx("div", {
            className: Ej,
            children: i.jsx(Sj, {
                data: e
            })
        }));

    function Sj({
        data: e
    }) {
        const {
            t
        } = z(), n = un(), r = e.chat.message, a = TP(), s = ls(), o = h.useRef(e);
        o.current = e, h.useEffect(() => {
            const p = m => {
                m === o.current && s()
            };
            return a.on("updateChat", p), () => {
                a.off("updateChat", p)
            }
        }, []);
        const l = p => {
                switch (p) {
                    case 1:
                        return t("Claim ");
                    case 3:
                        return t("Expired");
                    default:
                        return t("Completed")
                }
            },
            u = async () => {
                await F.waitLogin();
                const p = {
                    info: r.message,
                    packageKey: r.packageKey,
                    username: e.name,
                    userId: e.userId,
                    level: e.level,
                    status: r.status,
                    onReceive: () => {
                        r.status = 2, s()
                    }
                };
                n.push(i.jsx(HP, E({}, p)))
            },
            f = r.status == 1,
            d = r.status !== 1;
        return i.jsxs("div", {
            className: Nj,
            onClick: u,
            children: [i.jsx("img", {
                alt: "coindrop-more",
                src: f ? xj : jj,
                className: f ? "right-img" : "right-open-img"
            }), i.jsx("div", {
                className: `coindrop-status ${d?"finish":""}`,
                children: l(r.status)
            })]
        })
    }
    const Nj = "chh0qzr",
        Ej = "wdgv9vg",
        Ij = ({
            list: e,
            more: t,
            onToggle: n
        }) => {
            const r = t ? e : e.slice(0, 10),
                {
                    t: a
                } = z(),
                s = it(),
                o = s.bonusCurrencyName !== "BCD",
                l = fs();
            return i.jsxs("div", {
                className: se(Cj, "chatmsg-user-list"),
                children: [r.map((u, f) => i.jsxs("div", {
                    className: "item",
                    children: [i.jsxs(Gt, {
                        className: "cl-primary winner-name ellipsis",
                        href: `#/user/profile/${u.userId}`,
                        children: ["@", u.userName]
                    }), u.currencyName ? o ? i.jsx(at.CoinFormat, {
                        name: s.bonusCurrencyName,
                        amount: l.local2amount(new lr(u.amount), s.bonusCurrencyName),
                        icon: !0
                    }) : i.jsx(at.CoinFormat, {
                        name: u.currencyName,
                        amount: parseFloat(u.amount),
                        icon: !0
                    }) : i.jsxs("div", {
                        className: "spin",
                        children: [i.jsx("img", {
                            src: vP.spin,
                            alt: ""
                        }), " 1 Spin"]
                    })]
                }, f)), e.length >= 10 && i.jsxs("div", {
                    className: `hide-list-btn ${t?"show_list":""}`,
                    onClick: () => n(!t),
                    children: [i.jsx("span", {
                        className: "show_txt",
                        children: a(t ? "Show less" : "Show more")
                    }), i.jsx(st, {
                        name: "Arrow"
                    })]
                })]
            })
        },
        Cj = "wt0m7",
        $e = Ne(({
            data: e
        }) => {
            const {
                t
            } = z(), n = He(), r = DP(), a = e.chat.message;
            let s, o = a,
                l = !1,
                u = !1,
                f = {};
            switch (e.chat.subType) {
                case "2":
                    s = i.jsx("div", {
                        children: t("Who hit {{coco}}:", {
                            coco: q.mascot
                        })
                    });
                    break;
                case "3":
                    s = i.jsx("span", {
                        children: t("Rained And Left a Message: ")
                    });
                    break;
                case "4":
                    s = i.jsx("div", {
                        children: t("The leaderboard bonus has been granted!")
                    });
                    break;
                case "5":
                    s = i.jsx("div", {
                        children: t("The roll bonus has been awarded:")
                    });
                    break;
                case "6":
                    s = i.jsx(Aj, {
                        userId: a.userId,
                        userName: a.userName,
                        remark: a.remark
                    }), o = a.winnerInfo;
                    break;
                case "11":
                    s = i.jsxs("div", {
                        children: [i.jsxs("span", {
                            className: "cl-primary",
                            children: [q.buildHost, " "]
                        }), i.jsx("span", {
                            children: t("Rained And Left a Message: ")
                        }), i.jsxs("span", {
                            className: "level-message",
                            children: ['" ', a.remark ? a.remark : t("Rainer Rainer, Chicken Dinner"), ' "']
                        })]
                    }), o = a.users;
                    break;
                case "16":
                    s = i.jsx(qP, {
                        gameUrl: a.info.gameUrl
                    }), o = a.winnerInfoList, l = !0, f = {
                        gameId: a.info.gameId,
                        gameUnique: a.info.gameUnique
                    };
                    break;
                case "17":
                    s = i.jsx(KP, {
                        userName: a.info.userName || "",
                        userId: a.info.userId || 0,
                        amount: a.info.profitAmountUsd || "",
                        fullName: a.info.fullName || "",
                        gameUrl: a.info.gameUrl || ""
                    }), o = a.winnerInfoList, u = !0, f = E({}, a.info);
                    break
            }
            const d = async m => {
                    m && await e.loadFull(), e.state = m ? 1 : 0, e.id = String(e.id).replace(/(_.*$)|$/, `_${Number(m)}`), r.chatList = r.chatList.concat()
                },
                p = u || l;
            return i.jsxs(ot, {
                className: se(kj, p && "rain-sp"),
                children: [i.jsx("div", {
                    className: "rain-message",
                    children: i.jsx(h.Suspense, {
                        children: s
                    })
                }), i.jsxs("div", {
                    className: se(Rj, "full-message"),
                    children: [i.jsx(Ij, {
                        list: o,
                        more: e.state === 1,
                        onToggle: d
                    }), l && i.jsxs("button", {
                        className: "gdbtn",
                        onClick: () => {
                            g.emit("openAllPlayers", {
                                gameUnique: f.gameUnique,
                                gameId: f.gameId
                            })
                        },
                        children: [t("Game ID"), ": ", i.jsx("p", {
                            className: "w",
                            children: f.gameId
                        }), i.jsx(st, {
                            name: "Arrow"
                        })]
                    }), u && i.jsxs("button", {
                        className: "gdbtn",
                        onClick: () => {
                            n(`#/sd/${f.shareId}`)
                        },
                        children: [t("Bet ID"), ": ", i.jsx("p", {
                            className: "w",
                            children: f.betId
                        }), i.jsx(st, {
                            name: "Arrow"
                        })]
                    }), !p && i.jsx("div", {
                        className: "congratulations",
                        children: t("Congratulations!")
                    })]
                })]
            })
        }),
        Aj = ({
            userId: e,
            userName: t,
            remark: n
        }) => {
            const {
                t: r
            } = z();
            return i.jsxs(i.Fragment, {
                children: [i.jsx(at.UserInfo, {
                    userId: e,
                    name: t,
                    avatar: !1
                }), i.jsx("span", {
                    style: {
                        marginLeft: "2px"
                    },
                    children: r("Rained And Left a Message: ")
                }), i.jsxs("span", {
                    className: "level-message",
                    children: ['"', n || r("Rainer Rainer, Chicken Dinner"), '"']
                })]
            })
        },
        kj = "rep99u4",
        Rj = "md8l7du",
        Pj = "/assets/super_share.c306605e.png",
        Tj = "/assets/mega_share.298a2740.png",
        Dj = "/assets/lucky_share.fcc7933a.png",
        Lj = Ne(({
            data: e
        }) => {
            const t = e.chat.message,
                n = He(),
                {
                    t: r
                } = z(),
                a = h.useCallback(() => {
                    n("#/spin")
                }, []);
            let s = Dj,
                o = "lucky";
            return t.level >= 5 ? (s = Tj, o = "mega") : t.level >= 3 && (s = Pj, o = "super"), i.jsxs(ot, {
                className: Oj,
                children: [i.jsxs("div", {
                    className: se("cont", o),
                    children: [i.jsx("img", {
                        className: "spin-img",
                        src: s,
                        alt: ""
                    }), i.jsx("div", {
                        className: "star-item item-1"
                    }), i.jsx("div", {
                        className: "star-item item-2"
                    }), i.jsx("div", {
                        className: "star-item item-3"
                    }), i.jsx("div", {
                        className: "spin-tit",
                        children: r("CHECK MY SPIN  BONUS!")
                    }), i.jsx("div", {
                        className: "amount-cont",
                        children: i.jsx(at.CoinFormat, {
                            icon: !0,
                            sign: !0,
                            name: t.currencyName,
                            amount: Number(t.amount)
                        })
                    })]
                }), i.jsxs(we, {
                    onClick: a,
                    type: "conic4",
                    children: [r("Spin Now"), "!"]
                })]
            })
        }),
        Oj = "sj1towr";

    function Bj(e) {
        return !e.startsWith("/")
    }
    const Mj = Ne(({
            data: e
        }) => {
            const t = e.chat.message,
                n = He(),
                r = t.link || "",
                a = Bj(r);
            return i.jsxs(ot, {
                className: Wj,
                children: [i.jsxs("div", {
                    className: "cont",
                    children: [i.jsx("div", {
                        className: "img-wraps",
                        children: i.jsx("img", {
                            alt: "img",
                            src: t.imgUrl
                        })
                    }), t.content && i.jsx("p", {
                        children: t.content
                    })]
                }), r && i.jsx("div", {
                    className: "btn-link",
                    children: i.jsx(we, {
                        type: "conic4",
                        onClick: () => {
                            a ? window.open(r) : n(r)
                        },
                        children: t.linkText || ""
                    })
                })]
            })
        }),
        Wj = "s1ia3squ",
        Fj = () => i.jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "sc-jcVebW XXWmM icon",
            viewBox: "0 0 32 32",
            children: [i.jsx("path", {
                fill: "var(--color1, #455a64)",
                d: "M15.778 15.808H3.911a11.867 11.867 0 1023.735 0 11.868 11.868 0 10-23.735 0h11.867z",
                opacity: ".002"
            }), i.jsx("path", {
                fill: "var(--color2, #6300d8)",
                d: "M3.911 15.749a11.8 11.8 0 01.902-4.484l10.965 4.542-10.965 4.542a11.822 11.822 0 01-.902-4.542z"
            }), i.jsx("path", {
                fill: "var(--color3, #f8c32f)",
                d: "M7.429 7.371a11.911 11.911 0 013.81-2.537l4.539 10.973-10.965-4.542a11.915 11.915 0 012.575-3.854z"
            }), i.jsx("path", {
                fill: "var(--color4, #c201cc)",
                d: "M15.837 3.932c1.54.007 3.057.31 4.481.902l-4.539 10.973L11.24 4.834a11.79 11.79 0 014.539-.903z"
            }), i.jsx("path", {
                fill: "var(--color3, #f8c32f)",
                d: "M20.317 4.834c1.442.6 2.747 1.473 3.851 2.577l.04.041a11.902 11.902 0 012.535 3.813l-10.965 4.542z"
            }), i.jsx("path", {
                fill: "var(--color5, #ce2e41)",
                d: "M26.743 11.265c.599 1.443.902 2.981.902 4.542v.059a11.8 11.8 0 01-.902 4.484l-10.965-4.542z"
            }), i.jsx("path", {
                fill: "var(--color6, #3b4a53)",
                d: "M26.743 20.35a11.915 11.915 0 01-2.575 3.854l-.041.04a11.911 11.911 0 01-3.81 2.537l-4.539-10.973z"
            }), i.jsx("path", {
                fill: "var(--color7, #7ee452)",
                d: "M20.317 26.781a11.79 11.79 0 01-4.539.903h-.059a11.79 11.79 0 01-4.481-.902l4.539-10.973z"
            }), i.jsx("path", {
                fill: "var(--color8, #44bde8)",
                d: "M7.348 24.163a11.902 11.902 0 01-2.535-3.813l10.965-4.542-4.539 10.973a11.908 11.908 0 01-3.851-2.577z"
            }), i.jsx("path", {
                fill: "var(--color9, #fcd049)",
                d: "M15.973 2.01c7.731 0 13.999 6.263 13.999 13.99s-6.268 13.99-13.999 13.99C8.242 29.99 1.974 23.727 1.974 16S8.242 2.01 15.973 2.01zm0 2.423C9.58 4.433 4.398 9.612 4.398 16S9.58 27.567 15.973 27.567c6.393 0 11.575-5.179 11.575-11.567S22.366 4.433 15.973 4.433z"
            }), i.jsx("path", {
                fill: "var(--color9, #fcd049)",
                d: "M19.979 16.042a3.946 3.946 0 11-7.893 0 3.946 3.946 0 017.893 0z"
            })]
        }),
        Nd = Ne(({
            data: e
        }) => {
            const t = e.chat.message;
            return e.chat.subType === "10" ? i.jsx(zj, {
                msg: t
            }) : i.jsx(Gj, {
                msg: t
            })
        }),
        zj = ({
            msg: e
        }) => i.jsxs(ot, {
            className: Uj,
            children: [i.jsx("span", {
                className: "cl-primary",
                children: q.buildHost
            }), i.jsxs("span", {
                className: "tip-spin",
                children: ["\xA0sent ", i.jsx(Fj, {}), " 1 Spin"]
            }), "\xA0to\xA0", i.jsxs(Gt, {
                href: `#/user/profile/${e.users[0].userId}`,
                className: "cl-primary",
                children: ["@", e.users[0].userName]
            })]
        }),
        Gj = ({
            msg: e
        }) => {
            const {
                t
            } = z(), n = h.useRef(null), r = ls();
            return h.useEffect(() => {
                const a = n.current;
                !e.isAne && a && (e.isAne = !0, r())
            }, [e]), i.jsxs(ot, {
                ref: n,
                className: se(Vj, e.isAne && "ane"),
                children: [i.jsx("span", {
                    className: "tipped",
                    children: t("I tipped")
                }), i.jsxs(Gt, {
                    className: "cl-primary",
                    href: `#/user/profile/${e.toUserId}`,
                    children: ["@", e.toUserName]
                }), e.remark && i.jsx("span", {
                    className: "remark",
                    children: e.remark
                }), i.jsxs("div", {
                    className: "msg-cont",
                    children: [i.jsx(at.CoinIcon, {
                        name: e.currencyName
                    }), " ", e.tip, " ", os.getAlias(e.currencyName)]
                })]
            })
        },
        Uj = "m73seex",
        Vj = "m9ka2ex",
        Hj = $.memo(function() {
            return h.useEffect(() => {
                G.addParser("2", $e, 4), G.addParser("3", $e, 4), G.addParser("4", $e, 4), G.addParser("5", $e, 4), G.addParser("6", $e, 4), G.addParser("8", wj, 6), G.addParser("10", Nd), G.addParser("11", $e, 4), G.addParser("12", Nd), G.addParser("16", $e), G.addParser("17", $e), G.addParser("18", Lj), G.addParser("20", Mj)
            }, []), i.jsxs(i.Fragment, {
                children: [pr.createPortal(i.jsx(YP, {}), document.body), pr.createPortal(i.jsx(ZP, {}), document.body), pr.createPortal(i.jsx($P, {}), document.body), i.jsx(XP, {}), i.jsx(JP, {}), i.jsx(Se.Source, {
                    id: "bonus-sidebar-list-enter",
                    children: i.jsx(QP, {})
                }), i.jsx(Se.Source, {
                    id: "bonus-sidebar-link-enter",
                    children: i.jsx(eT, {})
                }), i.jsx(Se.Source, {
                    id: "bonus-mobile-header-enter",
                    children: i.jsx(tT, {})
                }), i.jsx(Se.Source, {
                    id: "bonus-mobile-unclaim-number-enter",
                    children: i.jsx(nT, {})
                })]
            })
        });

    function Kj() {
        g.emit("inject_rootNode", i.jsx(Hj, {})), g.emit("inject_rootNode", i.jsx(rT, {})), g.emit("inject_dialog", [{
            path: "#/bcd/rule",
            isDialog: !0,
            element: i.jsx(aT, {})
        }, {
            path: "#/bonus/dashboard",
            isDialog: !0,
            isAuth: !0,
            element: i.jsx(sT, {})
        }, {
            path: "#/shitlink/:code",
            element: i.jsx(pp, {}),
            isDialog: !0
        }, {
            path: "#/bonuslink/:code",
            element: i.jsx(pp, {}),
            isHook: !0
        }, {
            path: "#/user/coindrop_send",
            element: i.jsx(iT, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/newuser/gamelist/:currency/:rewardBonusId?",
            isDialog: !0,
            element: i.jsx(oT, {}),
            isAuth: !0
        }, {
            path: "#/newuser/setcurrency",
            element: i.jsx(cT, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/bonus/rain",
            element: i.jsx(lT, {}),
            isDialog: !0
        }, {
            path: "#/user/rain",
            element: i.jsx(uT, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/recharge",
            element: i.jsx(dT, {}),
            isDialog: !0
        }, {
            path: "#/bonus/roll",
            element: i.jsx(fT, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/spin",
            isDialog: !0,
            element: i.jsx(pT, {})
        }, {
            path: "#/task/*",
            element: i.jsx(hp, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/quests/*",
            element: i.jsx(hp, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/tip/:userid/:username",
            element: i.jsx(hT, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/vip",
            isDialog: !0,
            element: i.jsx(mT, {}),
            isAuth: !0
        }, {
            path: "#/vip-level",
            isDialog: !0,
            element: i.jsx(gT, {})
        }, {
            path: "#/vip-offer",
            isDialog: !0,
            element: i.jsx(vT, {}),
            isAuth: !0
        }])
    }
    const qj = () => ee("modules/account");

    function ve(e) {
        return h.lazy(async function() {
            try {
                const {
                    asyncComponents: t
                } = await qj();
                return t[e]()
            } catch (t) {
                return console.log(t), {
                    default: () => {
                        throw t
                    }
                }
            }
        })
    }
    const Yj = ve("Achieve"),
        Zj = ve("UserAchieve"),
        $j = ve("EditAvatar"),
        Xj = ve("UserProfile"),
        Jj = ve("EditNickName"),
        Qj = ve("Invite"),
        ew = ve("Statistics"),
        tw = ve("VerifyPop"),
        nw = ve("SharePop"),
        rw = ve("UserEnter"),
        aw = ve("VerifyStatusIcon");

    function sw() {
        g.emit("inject_rootNode", i.jsx(Se.Source, {
            id: "pc-user-setting-enter",
            children: i.jsx(rw, {})
        })), g.emit("inject_rootNode", i.jsx(Se.Source, {
            id: "settings-mobile-security-enter",
            children: i.jsx(aw, {})
        })), g.emit("inject_dialog", [{
            path: "#/achieve",
            element: i.jsx(Yj, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/user/achieve/:userId",
            element: i.jsx(Zj, {}),
            isDialog: !0
        }, {
            path: "#/user/edit_avatar",
            element: i.jsx($j, {}),
            isDialog: !0
        }, {
            path: "#/user/edit_nickname",
            element: i.jsx(Jj, {}),
            isDialog: !0
        }, {
            path: "#/user/profile/:userId",
            element: i.jsx(Xj, {}),
            isDialog: !0
        }, {
            path: "#/user/invite",
            element: i.jsx(Qj, {}),
            isDialog: !0
        }, {
            path: "#/user/statistics",
            element: i.jsx(ew, {}),
            isDialog: !0
        }, {
            path: "#/verify_representative",
            element: i.jsx(tw, {}),
            isDialog: !0
        }, {
            path: "#/social_share/:fullName",
            element: i.jsx(nw, {}),
            isDialog: !0
        }])
    }

    function iw() {
        try {
            return Z.post("/home/system-notice/list/v2/", {
                size: 20,
                appNo: 1,
                userId: F.state.userId
            })
        } catch (e) {
            return new Promise(t => {
                t({
                    noticeList: [],
                    unreadCount: 0
                })
            })
        }
    }

    function ow(e) {
        return Z.get(`/home/system-notice/get-one/${e}/`, {
            cache: !0
        })
    }

    function cw() {
        return Z.post("/home/system-notice/read-all/", {
            appNo: 1,
            userId: F.state.userId
        })
    }

    function lw() {
        return Z.get("/activity/reward/list/")
    }

    function uw(e) {
        return Z.post(`/activity/reward/receive/${e}/`)
    }

    function dw(e) {
        const t = e || 1;
        return Z.post("/comment/reply/unread/list/", {
            page: t,
            pageSize: 20
        })
    }
    let Ed, Id;
    hn = {
        getSystemNotice: iw,
        getNoticeByAfficheId: ow,
        clearSystemNotice: cw,
        getRewardList: lw,
        receiveReward: uw,
        getCommentList: dw
    }, {
        useProxy: Ed,
        proxy: Id
    } = np;
    class fw extends Vf {
        constructor(n) {
            super(n);
            Ha(this, "initData");
            this.initData = this.initFn(), F.waitLogin().then(() => {
                setTimeout(() => {
                    this.initFn()
                }, 1500)
            })
        }
        async initFn() {
            if (await F.initData, !F.state.login) return F.waitLogin().then(() => this.initFn()), this.state;
            try {
                const n = await Promise.all([hn.getSystemNotice(), hn.getCommentList()]);
                if (n && n.length === 2) try {
                    const r = E({}, this.state);
                    this.setState(Je(E({}, r), {
                        systemData: n[0],
                        systemUnreadCount: n[0].unreadCount,
                        commentData: n[1],
                        commentUnreadCount: Number(n[1].extra || 0)
                    }))
                } catch (r) {}
            } catch (n) {}
            return this.state
        }
        clearSystemNotice(n = !1) {
            (this.state.currentType === 0 || n) && this.state.systemUnreadCount > 0 && hn.clearSystemNotice().then(() => {
                let r = E({}, this.state.systemData);
                r.unreadCount = 0, r.noticeList = this.state.systemData.noticeList.map(a => (a.isRead = 1, a)), this.setState({
                    systemData: r,
                    systemUnreadCount: 0
                })
            }).catch(De)
        }
        openNotice(n = !0) {
            n && this.setState({
                isOpen: !0,
                currentType: 0
            }), this.initFn()
        }
    }
    pn = new fw(Id({
        systemUnreadCount: 0,
        commentUnreadCount: 0,
        systemData: {
            noticeList: [],
            unreadCount: 0
        },
        commentData: {
            page: 1,
            pageSize: 20,
            total: 0,
            totalPage: 1,
            list: [],
            extra: 0
        },
        isOpen: !1,
        currentType: 0,
        loadMoreLoading: !1
    })), mr = function() {
        return Ed(pn.state)
    };
    const Cd = h.lazy(() => _t(() =>
            import ("../index.816b7bf8.js").then(async e => (await e.__tla, e)), ["assets/index.816b7bf8.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-5bcb444f.js", "assets/chunk-b8efc996.js", "assets/chunk-bad13a2b.js", "assets/chunk-b894b9de.js", "assets/chunk-357b411e.js", "assets/chunk-27d137a6.js", "assets/MatchIcon.8462f48e.css", "assets/chunk-03c302ce.js", "assets/chunk-0e1ef679.js", "assets/chunk-5fced113.js", "assets/chunk-0e835458.js", "assets/chunk-654ef298.js", "assets/chunk-35f3c0e2.js", "assets/chunk-c23b3c52.js", "assets/chunk-e570733e.js", "assets/chunk-68de7933.js", "assets/chunk-07977b38.js", "assets/chunk-47df8c47.js", "assets/chunk-3dc03e47.js", "assets/chunk-e20af49b.js", "assets/chunk-6e6e4b85.js", "assets/Emoji.5e52f519.css", "assets/chunk-000ed202.js", "assets/SearchWrap.82780ba6.css", "assets/chunk-78c5b721.js", "assets/GameList.30b187ac.css", "assets/index.8e819340.css", "assets/chunk-2d134749.js", "assets/chunk-21fa96d0.js", "assets/PostComment.9afc074a.css", "assets/chunk-f0854543.js", "assets/pages/help/index.page.a21ea3c9.js", "assets/chunk-7459b96e.js", "assets/chunk-6d8ed563.js", "assets/GroupPageLayout.6f234913.css", "assets/chunk-1371f12f.js", "assets/chunk-08fcab7b.js", "assets/index.f34d9c67.css"])),
        pw = function() {
            const e = it(),
                t = mr(),
                {
                    systemUnreadCount: n,
                    commentUnreadCount: r
                } = t,
                a = yT(),
                s = a.chatOrNtice === "notice",
                o = () => {
                    a.chatOrNtice = s ? void 0 : "notice"
                };
            return e.login ? i.jsxs(i.Fragment, {
                children: [i.jsx(Se.Source, {
                    id: "notice-enter-pc-header",
                    children: i.jsx("button", {
                        className: se(bw, "notice-enter"),
                        onClick: () => {
                            g.emit("ad_track", "upperbar_click", {
                                button_name: "notification"
                            }), o()
                        },
                        children: i.jsxs("div", {
                            className: `notice-btn ${s?"active":""}`,
                            children: [i.jsx(st, {
                                name: "Notice"
                            }), i.jsx(Bf, {
                                num: n || r
                            })]
                        })
                    })
                }), i.jsx(Se.Source, {
                    id: "notice-list-enter",
                    children: i.jsx(h.Suspense, {
                        fallback: null,
                        children: i.jsx(Cd, {})
                    })
                })]
            }) : null
        },
        hw = function() {
            const e = mr(),
                {
                    systemUnreadCount: t,
                    commentUnreadCount: n
                } = e;
            return t > 0 || n > 0 ? i.jsx(Se.Source, {
                id: "notice-mobile-dont-enter",
                children: i.jsx("div", {
                    className: "count-number",
                    children: t || n
                })
            }) : null
        };

    function mw() {
        const {
            t: e
        } = z();
        return i.jsx(ht, {
            title: e("Notification"),
            className: se("notice-dialog", yw),
            children: i.jsx(Cd, {})
        })
    }

    function gw() {
        return i.jsxs(i.Fragment, {
            children: [i.jsx(pw, {}), i.jsx(hw, {})]
        })
    }

    function vw() {
        function e(t) {
            return Z.get(`/home/system-notice/get-one/${t}/`, {
                cache: !0
            })
        }
        vt.on("affiche-message", Vt.decodeBind(t => {
            t.systemFlag && e(t.afficheId).then(n => {
                const r = n.contentV2.filter(a => a.contentType === 1);
                r.length && (De(i.jsx("div", {
                    className: _w,
                    children: r[0].content
                }), {
                    title: n.title,
                    duration: 0,
                    onClick: () => {
                        F.state.login && pn.openNotice(!0)
                    }
                }), pn.initFn())
            })
        }, "json")), g.emit("inject_rootNode", i.jsx(gw, {})), g.emit("inject_dialog", [{
            path: "#/notification",
            element: i.jsx(mw, {}),
            isDialog: !0,
            isAuth: !0
        }])
    }
    const yw = "nxu9d47",
        bw = "no6xwm8",
        _w = "w1qqsebg",
        xw = function({
            tab: e,
            closeFn: t
        }) {
            const {
                t: n
            } = z(), r = un(), a = ds(), [s, o] = h.useState(e), {
                isKenyaHost: l,
                isNgHost: u
            } = M.getHostType(q.host), f = [{
                label: n("Language"),
                value: () => i.jsx(jw, {
                    closeFn: t
                })
            }];
            return !l && !u && f.push({
                label: n("View in fiat"),
                value: () => i.jsx(ww, {
                    closeFn: t
                })
            }), i.jsxs("div", {
                className: Sw,
                children: [!a && i.jsx(cr, {
                    className: "close-icon",
                    onClick: r.close
                }), i.jsx(Kf, {
                    type: "line",
                    className: "lan-fiat-tabs",
                    value: s,
                    tabs: f,
                    onChange: o
                })]
            })
        },
        jw = function({
            closeFn: e
        }) {
            const {
                lang: t
            } = ep(), n = h.useMemo(() => Object.entries(AP).map(([a, s]) => ({
                label: s[0],
                value: a
            })), []), r = cs();
            return i.jsx(mt, {
                className: "lang-list-wrap",
                children: n.map(a => {
                    const s = a.value == t;
                    return i.jsxs("button", {
                        className: se("lang-fiat-item", s && "select"),
                        onClick: () => {
                            r(a.value), e && e()
                        },
                        children: [i.jsx("div", {
                            className: "lf-inner",
                            children: i.jsx("span", {
                                children: a.label
                            })
                        }), i.jsx("div", {
                            className: "hover-bg"
                        })]
                    }, a.value)
                })
            })
        },
        ww = function({
            closeFn: e
        }) {
            const {
                t
            } = z(), n = ps(), r = tp(), a = us(), {
                isKenyaHost: s,
                isBrHost: o,
                isNgHost: l
            } = M.getHostType(q.host), u = h.useMemo(() => Object.values(q.localCurrencys).map(({
                label: p,
                value: m,
                alias: v
            }) => ({
                label: p,
                value: m,
                alias: v
            })), []), f = !n.enableLocaleCurrency, d = h.useCallback(function(p) {
                const m = r[p];
                m && !o && !s && !l && (n.currencyName = p, m.displayStatus = 1)
            }, []);
            return i.jsxs(mt, {
                className: "fiat-list-wrap",
                children: [i.jsx("div", {
                    className: "none-sp",
                    children: i.jsxs("button", {
                        className: se("lang-fiat-item", f && "select"),
                        onClick: () => {
                            n.enableLocaleCurrency = !1, e && e()
                        },
                        children: [i.jsxs("div", {
                            className: "lf-inner",
                            children: [i.jsx("img", {
                                className: "coin-icon",
                                src: a ? yP : bP,
                                alt: "none"
                            }), i.jsx("span", {
                                children: t("None")
                            })]
                        }), i.jsx("div", {
                            className: "hover-bg"
                        })]
                    })
                }), i.jsx("div", {
                    className: "fiat-flex-list",
                    children: u.map(p => {
                        const m = p.value == n.localeCurrencyName && n.enableLocaleCurrency;
                        return i.jsxs("button", {
                            className: se("lang-fiat-item", m && "select"),
                            onClick: () => {
                                n.localeCurrencyName = p.value, n.enableLocaleCurrency = !0, d(p.value), e && e()
                            },
                            children: [i.jsxs("div", {
                                className: "lf-inner",
                                children: [i.jsx(at.CoinIcon, {
                                    name: p.label
                                }), i.jsx("span", {
                                    children: p.label
                                }), i.jsx("span", {
                                    className: "alias",
                                    children: p.alias || ""
                                })]
                            }), i.jsx("div", {
                                className: "hover-bg"
                            })]
                        }, p.value)
                    })
                })]
            })
        },
        Sw = "l1by5rnf";

    function Nw() {
        vw(), g.on("open-language-fiat", e => {
            Ve.push(i.jsx(xw, {
                tab: e || 0,
                closeFn: Ve.close
            }))
        })
    }
    const Ew = Ne(({
        data: e
    }) => (Iw(), i.jsx("div", {
        className: Aw,
        children: i.jsxs(ot, {
            className: "full-message",
            children: [i.jsx("div", {
                className: "share-message",
                children: e.chat.message.shareChatContent
            }), i.jsx("div", {
                className: "wrap",
                children: i.jsx(h.Suspense, {
                    fallback: null,
                    children: i.jsx(LP, {
                        data: e
                    })
                })
            })]
        })
    })));

    function Iw() {
        h.useEffect(() => {
            dp().then(e => {
                Cw(G, e)
            })
        }, [G])
    }
    const Cw = Wt((e, t) => {
            function n(r) {
                Z.post(`/game/support/share-v2/share/room/like-infos/${r}`).then(a => {
                    a.map(s => t.setItem(s.shareId, {
                        count: s.clickCount,
                        isLike: s.hasClickShare
                    }))
                })
            }
            e.on("room_change", () => {
                t.roomId = e.currentRoom.id, n(e.currentRoom.id)
            }), e.socket.on("share-like", Vt.decodeBind(r => {
                const a = t.getItem(r.shareId);
                t.setItem(r.shareId, {
                    count: r.clickCount,
                    isLike: a.isLike
                })
            }, "json"))
        }),
        Aw = "s1q04a0m",
        kw = async e => (await _t(() =>
            import ("../chunk-6d77236a.js").then(t => t.a), ["assets/chunk-6d77236a.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-21fa96d0.js", "assets/chunk-654ef298.js", "assets/chunk-5bcb444f.js", "assets/chunk-6e6e4b85.js", "assets/Emoji.5e52f519.css", "assets/PostComment.9afc074a.css", "assets/ReplyPop.78b08cc2.css"])).openCommentReply(e);

    function Rw() {
        return h.useEffect(() => {
            g.on("getPublicChatRoomId", e => {
                e(G.currentRoom.id)
            }), G.addParser("9", Ew, 20)
        }, []), null
    }

    function Pw() {
        window.app = g, g.emit("inject_rootNode", i.jsx(Rw, {})), g.emit("inject_rootNode", i.jsx(OP, {})), g.on("openGameDetailWithData", BP), g.on("openGameDetail", MP), g.on("openAllPlayers", WP), g.on("openCommentReply", kw), g.emit("inject_dialog", [{
            path: "#/sd/:betId",
            element: i.jsx(fp, {}),
            isDialog: !0
        }, {
            path: "#/sd/:betId/:gameType",
            element: i.jsx(fp, {}),
            isDialog: !0
        }, {
            path: "#/set_seed/:gameName",
            element: i.jsx(FP, {}),
            isDialog: !0
        }, {
            path: "#/validate/:gameUnique",
            element: i.jsx(zP, {}),
            isDialog: !0
        }])
    }
    const Tw = $.memo(function() {
            const {
                t: e
            } = z(), t = un(), n = () => {
                t.close(), localStorage.setItem("isOlder18", "older")
            };
            return i.jsxs(Uf, {
                className: Ow,
                children: [i.jsx("div", {
                    className: "header-icon",
                    children: "18+"
                }), i.jsx("div", {
                    className: "title",
                    children: e("Are you 18 or older?")
                }), i.jsx("p", {
                    children: e("You need to be aged 18 or older to use our website. Please confirm your age by clicking below.")
                }), i.jsx(we, {
                    type: "conic",
                    onClick: n,
                    children: e("I am 18 years or older")
                }), i.jsx("span", {
                    className: "under-btn",
                    onClick: () => {
                        t.push(i.jsx(Dw, {}))
                    },
                    children: e("I am under 18")
                })]
            })
        }),
        Dw = $.memo(function() {
            const {
                t: e
            } = z();
            return i.jsx("div", {
                className: Bw,
                children: i.jsx(Mf, {
                    type: "ban",
                    children: e("Sorry, we cannot provide services to users under the age of 18.")
                })
            })
        }),
        Lw = $.memo(function() {
            const e = un(),
                t = it(),
                {
                    isSkHost: n,
                    isNgHost: r
                } = M.getHostType(q.host);
            return h.useEffect(() => {
                if (t.areaAlert) {
                    cn.pause();
                    return
                }
                const a = localStorage.getItem("isOlder18") === "older",
                    s = n && (t.areaCode === "GB" || t.areaCode === "NG");
                !a && (r || s) && cn.add(() => e.push(i.jsx(Tw, {})))
            }, []), null
        }),
        Ow = "p14oequ",
        Bw = "uocisei";

    function Mw() {
        g.emit("inject_rootNode", i.jsx(Lw, {}))
    }

    function Ad() {
        const e = document.location.hostname;
        if (/^\d+\.\d+\.\d+\.\d+$/.test(e) || e === "localhost") return e;
        const t = e.split(".");
        return t.length <= 2 ? `.${e}` : `.${t.slice(-2).join(".")}`
    }

    function Oa(e, t, n, r) {
        let a = `${e}=${t}; expires=${r}; path=/`;
        n && (a += `; domain=${n}`), document.cookie = a
    }

    function Ba(e) {
        const t = `${encodeURIComponent(e)}=`,
            n = document.cookie.split(";");
        for (let r = 0; r < n.length; r++) {
            const a = n[r].trim();
            if (a.startsWith(t)) return decodeURIComponent(a.substring(t.length))
        }
        return ""
    }

    function Ma(e) {
        return e && Object.keys(e).length > 0
    }

    function Ww() {
        const e = navigator.userAgent,
            t = e.indexOf("FB4A") !== -1 || e.indexOf("FB_IAB") !== -1;
        if (e.indexOf("FBIOS") !== -1 || e.indexOf("FBAN"), t) {
            const n = `intent://${window.location.href.replace(/^(https|http):\/\//,"")}#Intent;scheme=https;package=com.android.chrome;end`;
            window.location.href = n
        }
    }

    function kd(e, t, n) {
        const r = Ad();
        if (localStorage.getItem("InitiateCheckout") === "1" && r !== "localhost") return;
        const a = new URLSearchParams(window.location.href.split("?")[1]),
            s = Ba("_fbp");
        let o = Ba("invitation-code");
        n || (n = Ba("_fbc")), o || (o = a.get("i") || ""), e || (e = a.get("ch") || ""), t || (t = a.get("pixel_id") || a.get("pixelid") || ""), Z.post("/ad/fb/common/send/", {
            channel: e || "",
            eventType: 8,
            fbc: n || "",
            fbp: s || "",
            invitationCode: o || "",
            pixelId: t || "",
            ua: window.navigator.userAgent
        }), localStorage.setItem("InitiateCheckout", "1")
    }
    const Fw = "/assets/uni.webview.1.5.2.a00a2184.js",
        zw = "/assets/kwai.6bacbd74.js",
        Gw = "/assets/tiktok.13611f23.js",
        Rd = "data:application/javascript;base64,IWZ1bmN0aW9uKGYsYixlLHYsbix0LHMpCiAge2lmKGYuZmJxKXJldHVybjtuPWYuZmJxPWZ1bmN0aW9uKCl7bi5jYWxsTWV0aG9kPwogIG4uY2FsbE1ldGhvZC5hcHBseShuLGFyZ3VtZW50cyk6bi5xdWV1ZS5wdXNoKGFyZ3VtZW50cyl9OwogIGlmKCFmLl9mYnEpZi5fZmJxPW47bi5wdXNoPW47bi5sb2FkZWQ9ITA7bi52ZXJzaW9uPScyLjAnOwogIG4ucXVldWU9W107dD1iLmNyZWF0ZUVsZW1lbnQoZSk7dC5hc3luYz0hMDsKICB0LnNyYz12O3M9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShlKVswXTsKICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQscyl9KHdpbmRvdywgZG9jdW1lbnQsJ3NjcmlwdCcsCiAgJ2h0dHBzOi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvZmJldmVudHMuanMnKTs=",
        Uw = "data:application/javascript;base64,IWZ1bmN0aW9uKGUsdCxuLHMsdSxhKXtlLnR3cXx8KHM9ZS50d3E9ZnVuY3Rpb24oKXtzLmV4ZT9zLmV4ZS5hcHBseShzLGFyZ3VtZW50cyk6cy5xdWV1ZS5wdXNoKGFyZ3VtZW50cyk7Cn0scy52ZXJzaW9uPScxLjEnLHMucXVldWU9W10sdT10LmNyZWF0ZUVsZW1lbnQobiksdS5hc3luYz0hMCx1LnNyYz0naHR0cHM6Ly9zdGF0aWMuYWRzLXR3aXR0ZXIuY29tL3V3dC5qcycsCmE9dC5nZXRFbGVtZW50c0J5VGFnTmFtZShuKVswXSxhLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHUsYSkpfSh3aW5kb3csZG9jdW1lbnQsJ3NjcmlwdCcpOw==",
        Vw = "data:application/javascript;base64,IShmdW5jdGlvbiAoZiwgZSwgdCwgdSwgbiwgcywgcCkgewogIGlmIChmLmVzaykge3JldHVybjt9CgogIG4gPSBmLmVzayA9IGZ1bmN0aW9uICgpIHsKICAgIG4uY2FsbE1ldGhvZCA/IG4uY2FsbE1ldGhvZC5hcHBseShuLCBhcmd1bWVudHMpIDogbi5xdWV1ZS5wdXNoKGFyZ3VtZW50cyk7CiAgfTsKCiAgaWYgKCFmLl9fX2Vzaykge2YuX19fZXNrID0gbjt9CgogIG4ucHVzaCA9IG47CiAgbi5sb2FkZWQgPSAhMDsKICBuLnF1ZXVlID0gW107CiAgcyA9IGUuY3JlYXRlRWxlbWVudCh0KTsKICBzLmFzeW5jID0gITA7CiAgcy5zcmMgPSB1OwogIHAgPSBlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHQpWzBdOwogIHAucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocywgcCk7Cn0pKHdpbmRvdywgZG9jdW1lbnQsICdzY3JpcHQnLCAnaHR0cHM6Ly9kc3AtbWVkaWEuZXNraW1pLmNvbS9hc3NldHMvanMvZS9ndHIubWluLmpzP189MC4wLjAuNCcpOwo=",
        Hw = "/assets/pixelIntegration.dd86ee86.js",
        Kw = "/assets/bluetag.a2be364e.js",
        re = "regist_success",
        Pd = "ftd_success",
        tn = "login_success",
        dt = "deposit_success";
    async function qw(e) {
        const t = await Z.post("/account/open/login-callback/", e);
        return g.emit("signin-success"), t
    }
    class Yw {
        constructor() {
            Ha(this, "initParams", {
                ch: "",
                pixel_id: ""
            });
            var t;
            this.addEvent("parseParams", n => {
                try {
                    const r = new URLSearchParams(n.split("?")[1]),
                        a = "pixel_info",
                        s = q.initSearchParams,
                        o = {
                            ch: s.get("ch") || r.get("ch"),
                            pixel_id: s.get("pixel_id") || s.get("pixelid") || r.get("pixel_id") || r.get("pixelid")
                        };
                    (o.ch || o.pixel_id) && globalThis.localStorage.setItem(a, JSON.stringify(o));
                    const l = JSON.parse(globalThis.localStorage.getItem(a) || "{}");
                    Object.assign(this.initParams, l)
                } catch (r) {}
            }), globalThis.setTimeout(() => {
                g.emit("ad_track", "init")
            }, 4e3), g.emit("ad_track", "parseParams", ((t = globalThis.location) == null ? void 0 : t.href) || "")
        }
        addEvent(t, n) {
            g.on("ad_track", (r, a) => {
                t === r && n(a)
            })
        }
    }
    const b = new Yw;

    function Zw() {
        const e = async function() {
            return await M.loadScript("https://telegram.org/js/telegram-web-app.js", "Telegram")
        };
        async function t() {
            var a, s, o, l, u;
            const n = q.initHashParams,
                r = n.startsWith("#") ? n.substring(1) : n;
            if (new URLSearchParams(r).has("tgWebAppData")) {
                window.location.hash = n;
                const f = await e();
                if (F.state.login) return;
                try {
                    const d = (a = f == null ? void 0 : f.WebApp) == null ? void 0 : a.initDataUnsafe,
                        p = ((s = d == null ? void 0 : d.user) == null ? void 0 : s.first_name) + ((o = d == null ? void 0 : d.user) == null ? void 0 : o.last_name),
                        m = (l = f.WebApp) == null ? void 0 : l.initData,
                        v = (u = d == null ? void 0 : d.user) == null ? void 0 : u.id;
                    g.emit("track", "third_register_click", {
                        account_type: "telegram"
                    }), await qw({
                        fullName: p,
                        idToken: m,
                        openUserId: v,
                        userType: "telegram",
                        invitationCode: "",
                        loginSource: "miniApp"
                    })
                } catch (d) {
                    console.error(d)
                }
            }
        }
        b.addEvent("init", t)
    }
    Zw();

    function $w() {
        function e(r, a) {
            function s(o, l) {
                globalThis.jsBridge && globalThis.jsBridge.postMessage && globalThis.jsBridge.postMessage(o, l), globalThis.jsbridge && globalThis.jsbridge.postMessage && globalThis.jsbridge.postMessage(o, l), globalThis.ANDROID_JS_BRIDGE && globalThis.ANDROID_JS_BRIDGE.gree_page && globalThis.ANDROID_JS_BRIDGE.gree_page(o, l), globalThis.android && globalThis.android.bcMessage && globalThis.android.bcMessage(o, l ? JSON.stringify(l) : "")
            }
            switch (r) {
                case "init":
                    s("af_content_view", a);
                    break;
                case tn:
                    s("af_login", a);
                    break;
                case re:
                    s("af_complete_registration", a);
                    break;
                case "ftd_success":
                    s("af_purchase", a);
                    break
            }
        }
        let t = 0;

        function n() {
            var l;
            if (!globalThis.jsBridge && !globalThis.jsbridge && !globalThis.ANDROID_JS_BRIDGE && !globalThis.android) return;
            const r = (l = [globalThis.jsBridge, globalThis.jsbridge, globalThis.ANDROID_JS_BRIDGE, globalThis.android].find(u => u && u.deviceinfo)) == null ? void 0 : l.deviceinfo,
                a = Ad(),
                s = new Date;
            s.setDate(s.getDate() + 30);
            const o = s.toUTCString();
            if (r && Ma(r) && r.advertising_id && Oa("advertising_id", r.advertising_id, a, o), r && Ma(r) && r.appsflyer_id && Oa("appsflyer_id", r.appsflyer_id, a, o), r && Ma(r) && r.fbclid) {
                const u = `fb.1.${new Date().getTime()}.${r.fbclid}`;
                Oa("_fbc", u, a, o), kd(b.initParams.ch, b.initParams.pixel_id, u), Ht.trackEvent("get_deviceinfo_success", {
                    retry: t,
                    data: r
                })
            }(!r || !r.advertising_id || !r.appsflyer_id || !r.fbclid) && t < 10 && (t++, setTimeout(() => {
                n()
            }, 1500)), t >= 10 && kd(b.initParams.ch, b.initParams.pixel_id), t <= 1 && Ht.trackEvent("get_deviceinfo", {
                retry: t,
                data: r
            })
        }
        b.addEvent("init", () => {
            e("init")
        }), b.addEvent(tn, () => e(tn)), b.addEvent(re, () => e(re)), b.addEvent("ftd_success", ({
            sales: r
        }) => e("ftd_success", {
            af_revenue: r
        })), setTimeout(() => {
            n()
        }, 2e3)
    }
    $w();

    function Xw() {
        const e = de(async () => new Promise(n => document.addEventListener("UniAppJSBridgeReady", n)));
        async function t(n, r = {}) {
            if (q.host !== "bcga.me" || n === "") return;
            const a = await M.loadScript(Fw, "uni");
            await e(), a.postMessage({
                data: {
                    type: "fb",
                    name: `fb_${n}`,
                    params: r
                }
            }), a.postMessage({
                data: {
                    type: "af",
                    name: `af_${n}`,
                    params: r
                }
            })
        }
        b.addEvent(re, () => t("mobile_complete_registration")), b.addEvent(tn, () => t("mobile_login")), b.addEvent(dt, n => t("mobile_purchase", {
            af_revenue: n.sales || "0"
        }))
    }
    Xw();

    function Jw() {
        const e = de(async function(n) {
            const r = await M.loadScript(zw, "kwaiq");
            return r.load(n), r
        });
        async function t(n) {
            const {
                ch: r,
                pixel_id: a
            } = b.initParams, s = a || "471740152093356087";
            if (!s || r !== "kwai") return;
            const o = await e(s);
            n(o.instance(s))
        }
        b.addEvent("init", () => t(n => n.track("contentView"))), b.addEvent(re, () => t(n => n.track("completeRegistration"))), b.addEvent(dt, ({
            sales: n
        }) => t(r => {
            r.track("purchase", {
                contents: [{
                    content_type: "product",
                    content_name: "ftd",
                    price: n
                }]
            })
        }))
    }
    Jw();

    function Qw() {
        const e = de(async function(n) {
            const r = await M.loadScript(Gw, "ttq");
            return r.load(n), r
        });
        async function t(n) {
            const {
                ch: r,
                pixel_id: a
            } = b.initParams, s = a || "CH4DP23C77U3R61EG2P0";
            if (!s || r !== "tiktok") return;
            const o = await e(s);
            n(o)
        }
        b.addEvent(re, () => t(n => n.track("CompleteRegistration"))), b.addEvent(dt, ({
            sales: n,
            userId: r
        }) => t(a => {
            a.track("CompletePayment", {
                contents: [{
                    content_id: r,
                    quantity: 1,
                    content_name: "deposit"
                }],
                content_type: "product",
                currency: "USD",
                value: n
            })
        }))
    }
    Qw();

    function eS() {
        const e = de(async function(n) {
            const r = await M.loadScript(Rd, "fbq");
            return r("init", n), r
        });
        async function t(n) {
            const {
                ch: r,
                pixel_id: a
            } = b.initParams, s = a;
            if (!s || r !== "meta") return;
            const o = await e(s);
            n(o)
        }
        b.addEvent("init", () => t(n => n("track", "PageView"))), b.addEvent(re, ({
            userId: n
        }) => t(r => r("track", "CompleteRegistration", {
            eventId: n
        }))), b.addEvent("ftd_success", ({
            sales: n,
            orderid: r
        }) => t(a => {
            Ht.trackEvent("deposit_recieved_fb"), a("track", "Purchase", {
                value: n,
                currency: "USD"
            }, {
                eventID: r
            })
        })), b.addEvent("other_events", (n, r) => t(a => {
            r ? a("track", n, r) : a("track", n)
        }))
    }
    eS();

    function tS() {
        const e = de(async function(n) {
            const r = await M.loadScript(Rd, "fbq");
            return r("init", n), r
        });
        async function t(n) {
            const {
                ch: r,
                pixel_id: a
            } = b.initParams, s = a;
            if (!s || r !== "metaapi") return;
            const o = await e(s);
            n(o)
        }
        b.addEvent("init", () => t(n => n("track", "PageView")))
    }
    tS();

    function nS() {
        const e = de(async function(n) {
            const r = await M.loadScript(Vw, "esk");
            return r("init", n), r
        });
        async function t(n) {
            const {
                ch: r,
                pixel_id: a
            } = b.initParams, s = a;
            if (!s || r !== "eskimi") return;
            const o = await e(s || "31986");
            n(o)
        }
        b.addEvent("init", () => t(n => n("track", "PageView"))), b.addEvent(re, ({
            userId: n
        }) => t(r => r("track", "CompleteRegistration", {
            eventId: n
        }))), b.addEvent("ftd_success", ({
            sales: n,
            orderid: r
        }) => t(a => {
            Ht.trackEvent("deposit_recieved_fb"), a("track", "Purchase", {
                value: n,
                currency: "USD"
            }, {
                eventID: r
            })
        })), b.addEvent("other_events", (n, r) => t(a => {
            r ? a("track", n, r) : a("track", n)
        }))
    }
    nS();

    function rS() {
        b.addEvent(re, () => Ee("event", "RegistrationCompleted")), b.addEvent(dt, ({
            sales: e
        }) => Ee("event", "DepositCompletion", {
            value: e
        })), b.addEvent("regist_page", () => Ee("event", "RegistrationStarted")), b.addEvent("registration_abandoned", () => Ee("event", "RegistrationAbandoned")), b.addEvent("deposit_initiation", () => Ee("event", "DepositInitiation")), b.addEvent("rakeback_unlock", e => Ee("event", "RakebackUnlock", {
            value: e
        })), b.addEvent("buy_crypto_amount", () => Ee("event", "BuyCryptoAmount")), b.addEvent("assistance_requested", () => Ee("event", "Assistance Requested"))
    }
    rS();

    function aS() {
        const {
            ch: e,
            pixel_id: t
        } = b.initParams;
        if (!t || e !== "ga") return;
        const n = t.split("/")[0];
        Ee("config", n), b.addEvent(re, ({
            userId: r
        }) => {
            Ee("event", "RegistrationCompleted", {
                send_to: t,
                transaction_id: r
            })
        }), b.addEvent(dt, ({
            userId: r,
            sales: a,
            orderid: s
        }) => {
            Ee("event", "DepositCompletion", {
                send_to: t,
                value: a,
                currency: "USD",
                transaction_id: s
            })
        })
    }
    aS();

    function sS() {
        const e = async function(n) {
            return await M.loadScript(`https://cdn.taboola.com/libtrc/unip/${n}/tfa.js`, "_tfa")
        };
        async function t(n) {
            const {
                ch: r,
                pixel_id: a
            } = b.initParams, s = a;
            if (!s || r !== "taboola") return;
            const o = await e(s);
            n(o)
        }
        b.addEvent(re, () => t(n => n.push({
            notify: "event",
            name: "complete_registration"
        }))), b.addEvent(dt, ({
            sales: n
        }) => t(r => r.push({
            notify: "event",
            name: "purchase",
            value: n
        })))
    }
    sS();

    function iS() {
        const e = async function(n) {
            window.scSdkId = n, window.scLayer = [];
            const r = function(a, s, o = {}) {
                window.scLayer.push({
                    eventName: a,
                    eventType: s,
                    meta: o,
                    eventFireTs: Date.now()
                })
            };
            return window.scq = r, r("PAGE_VIEW", "AUTO", {
                pageUrl: window.location.href
            }), await M.loadScript("https://sc-events-sdk.sharechat.com/web-sdk.js"), (...a) => window.scq(...a)
        };
        async function t(n) {
            const {
                ch: r,
                pixel_id: a
            } = b.initParams, s = a || "CwYeOUsWHC";
            if (!s || r !== "sharechat") return;
            const o = await e(s);
            n(o)
        }
        b.addEvent(re, () => t(n => n("Complete registration", "pre_defined"))), b.addEvent(dt, () => t(n => n("Purchase", "pre_defined")))
    }
    iS();

    function ft(e, t) {
        b.addEvent(e, () => g.emit("ad_track", "other_events", {
            e: t
        }))
    }
    ft("regist_page", "registerClick"), ft("login_success", "Login"), ft("regist_success", "Register"), ft("deposit_success", "Recharge"), ft("logout", "Logout"), ft("ftd_success", "firstrecharge"), ft("home_page", "View content");

    function oS() {
        const {
            ch: e,
            pixel_id: t
        } = b.initParams, n = t || "A0CFAC1E-B13F-B1FB-FE4BEDC860AA7E5B";
        async function r() {
            var s;
            try {
                await M.loadScript(Kw, "blue");
                const o = new blue_obj,
                    l = new Date().getTime();
                window.blue_q = window.blue_q || [], (s = window.blue_q) == null || s.push({
                    event: "setCampaignId",
                    value: n
                }, {
                    event: "setPageType",
                    value: "visit"
                }), blue_obj[l] = o
            } catch (o) {
                console.error("Error loading script or creating instance:", o)
            }
        }
        r();
        async function a(...s) {
            window.blue_q && (window.blue_q.push(...s), executeFlow(instId))
        }
        b.addEvent(re, () => a({
            event: "setCampaignId",
            value: n
        }, {
            event: "setProductId",
            value: "1"
        }, {
            event: "setPageType",
            value: "basket"
        })), b.addEvent(Pd, ({
            userId: s,
            orderid: o
        }) => a({
            event: "setCampaignId",
            value: n
        }, {
            event: "setProductId",
            value: s
        }, {
            event: "setTransactionTotal",
            value: "1"
        }, {
            event: "setTransactionId",
            value: o
        }, {
            event: "setPageType",
            value: "conversion"
        }))
    }

    function cS() {
        const e = async function(a) {
                window.bgdataLayer = window.bgdataLayer || [], window.bge = function() {
                    window.bgdataLayer.push(arguments)
                }, bge("init", a), await M.loadScript(`https://api.imotech.video/ad/events.js?pixel_id=${a}`)
            },
            {
                ch: t,
                pixel_id: n
            } = b.initParams,
            r = n || "903988077524621568";
        t === "bigo" && (e(r), b.addEvent(re, () => {
            bge("event", "ec_register", {
                configId: r
            })
        }), b.addEvent("ftd_success", () => {
            bge("event", "ec_purchase", {
                configId: r
            })
        }))
    }
    cS();

    function lS() {
        if (window.location.hostname !== "bcga.me" && window.location.hostname !== "bc.ai" && window.location.hostname !== "bc.me") return;
        const e = de(async function() {
            return await M.loadScript(Hw, "pixelTrack")
        });
        async function t(n) {
            const r = await e();
            n(r)
        }
        b.addEvent("init", () => t(n => {
            n.visit()
        })), b.addEvent(re, ({
            userId: n
        }) => t(r => {
            r.regfinished({
                uid: n
            })
        })), b.addEvent(tn, ({
            userId: n
        }) => {
            t(r => {
                r.login({
                    uid: n
                })
            })
        }), b.addEvent(Pd, ({
            userId: n,
            orderid: r,
            sales: a
        }) => {
            t(s => {
                s.deposit({
                    uid: n,
                    tid: r,
                    cur: "USD",
                    amount: "1"
                })
            })
        })
    }

    function uS() {
        const e = de(async function(n) {
            const r = await M.loadScript(Uw, "twq");
            return console.info(r), r("config", n), r
        });
        async function t(n) {
            const {
                ch: r,
                pixel_id: a
            } = b.initParams, s = a;
            if (!s || r !== "twitter") return;
            console.info(s, r);
            const o = await e(s);
            n(o)
        }
        b.addEvent("init", () => t(n => n("event", "page view")))
    }
    uS(), setTimeout(() => {
        oS()
    }, 5e3), lS(), Ww();
    const dS = "/assets/symbol-defs.ef6a79c4.svg";

    function fS(e = {}) {
        const {
            immediate: t = !1,
            onNeedRefresh: n,
            onOfflineReady: r,
            onRegistered: a,
            onRegisteredSW: s,
            onRegisterError: o
        } = e;
        let l, u, f, d;
        const p = async (v = !0) => {
            await f, v && (l == null || l.addEventListener("controlling", _ => {
                _.isUpdate && window.location.reload()
            })), await (d == null ? void 0 : d())
        };
        async function m() {
            if ("serviceWorker" in navigator) {
                const {
                    Workbox: v,
                    messageSW: _
                } = await _t(() =>
                    import ("../chunk-42ea5fe7.js"), []);
                d = async () => {
                    u && u.waiting && await _(u.waiting, {
                        type: "SKIP_WAITING"
                    })
                }, l = new v("/service-worker.js", {
                    scope: "/",
                    type: "classic"
                }), l.addEventListener("activated", j => {
                    j.isUpdate || (r == null || r())
                }); {
                    const j = () => {
                        n == null || n()
                    };
                    l.addEventListener("waiting", j), l.addEventListener("externalwaiting", j)
                }
                l.register({
                    immediate: t
                }).then(j => {
                    u = j, s ? s("/service-worker.js", j) : a == null || a(j)
                }).catch(j => {
                    o == null || o(j)
                })
            }
        }
        return f = m(), p
    }

    function pS(e = {}) {
        const {
            immediate: t = !0,
            onNeedRefresh: n,
            onOfflineReady: r,
            onRegistered: a,
            onRegisteredSW: s,
            onRegisterError: o
        } = e, [l, u] = h.useState(!1), [f, d] = h.useState(!1), [p] = h.useState(() => fS({
            immediate: t,
            onOfflineReady() {
                d(!0), r == null || r()
            },
            onNeedRefresh() {
                u(!0), n == null || n()
            },
            onRegistered: a,
            onRegisteredSW: s,
            onRegisterError: o
        }));
        return {
            needRefresh: [l, u],
            offlineReady: [f, d],
            updateServiceWorker: p
        }
    }
    const hS = $.memo(() => {
            const e = {
                    Bad_Domain: "bad_domains"
                },
                t = {
                    GSTATIC: () => "https://www.gstatic.com/generate_204",
                    BC: () => "/cache/game/support/system/conf/",
                    NEW: (u, f) => {
                        let d = localStorage.getItem(e.Bad_Domain),
                            p = d ? d.split(",") : [],
                            m = new Set(p);
                        return m.add(f), d = Array.from(m).join(","), localStorage.setItem(e.Bad_Domain, d), q.isDev ? `https://distributedmessagedistribution.dogcrash.game/favicon.js?d=${d}&u=${u}` : `https://distributedmessagedistribution.com/favicon.js?d=${d}&u=${u}`
                    },
                    USER: () => "/api/account/get/",
                    STSTUS: {
                        IS_CORS: !0,
                        NO_CORS: !1
                    }
                };
            async function n(u, f = !0) {
                if (f) try {
                    return await fetch(u, {
                        mode: "no-cors",
                        cache: "no-cache"
                    }), !0
                } catch (d) {
                    return !1
                } else {
                    const d = await fetch(u, {
                        cache: "no-cache"
                    });
                    return d.status === 204 || d.status === 200
                }
            }
            async function r(u = 0, f, d = 1, p = "") {
                try {
                    console.log("Attempting to get...");
                    const m = await M.loadScript(t.NEW(u || 0, f), "domain_available");
                    if (!(m != null && m.data)) {
                        console.log("Domain data is empty or not available.");
                        return
                    }
                    const v = window.location.protocol,
                        _ = `${v}//${p}${m.data}${t.BC()}`;
                    await n(_, t.STSTUS.IS_CORS) ? (console.log("Domain is online."), window.location.href = `${v}//${p}${m.data}`) : d < 10 ? (console.log("Domain offline, retrying..."), await r(u, m.data, d + 1, p)) : console.log("Maximum attempts reached. Stopping now.")
                } catch (m) {
                    console.error("An error occurred:", m), d < 10 ? (console.log("Retrying due to error..."), await r(u, f, d + 1, p)) : console.log("Maximum attempts reached after error. Stopping now.")
                }
            }
            async function a() {
                async function u(f, d) {
                    try {
                        const p = await fetch(f, d);
                        if (p.status === 200) return (await p.json()).data;
                        throw new Error("Network response was not ok.")
                    } catch (p) {
                        return {
                            userId: 0
                        }
                    }
                }
                return u(t.USER(), {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            }
            async function s() {
                if (await n(t.BC()) || !await n(t.GSTATIC())) return;
                const {
                    userId: u
                } = await a(), f = new URL(window.location.href).hostname.split("."), d = f.length > 2 ? f.slice(0, -2).join(".") + "." : "";
                r(u, window.location.hostname, 1, d)
            }
            const {
                needRefresh: [o],
                updateServiceWorker: l
            } = pS({
                onRegistered(u) {
                    u && (setInterval(() => u.update(), 3600 * 1e3), M.isIos() && document.addEventListener("visibilitychange", () => {
                        u.update()
                    }), g.on("checkUpdate", () => u.update()))
                },
                async onRegisteredSW(u, f) {}
            });
            return h.useEffect(() => {
                o && l(!1)
            }, [o, l]), h.useEffect(() => {
                localStorage.removeItem(e.Bad_Domain), s()
            }, []), null
        }),
        mS = $.memo(({
            value: e,
            onChange: t,
            autoFocus: n = !1,
            className: r
        }) => {
            const [a, s] = h.useState(n), o = h.useRef(null), l = u => [1, 2, 3, 4, 5, 6].map((f, d) => i.jsx("li", {
                className: u.length === d ? "active" : "",
                children: u.slice(d, d + 1)
            }, f));
            return ln(() => {
                n && o.current && setTimeout(() => {
                    var u;
                    return (u = o.current) == null ? void 0 : u.focus()
                }, 300)
            }, []), i.jsx("div", {
                className: se(gS, r),
                children: i.jsxs("div", {
                    className: "google-input",
                    children: [i.jsx("input", {
                        ref: o,
                        value: e,
                        onBlur: () => {
                            s(!1)
                        },
                        onFocus: () => s(!0),
                        onChange: u => {
                            u.target.value.length > 6 || t(u.target.value)
                        },
                        autoComplete: "off"
                    }), i.jsx("ul", {
                        className: a ? "focus-list" : "",
                        onClick: () => {
                            var u;
                            (u = o.current) == null || u.focus(), s(!0)
                        },
                        children: l(e)
                    })]
                })
            })
        }),
        gS = "g18oie15",
        vS = $.memo(e => {
            const {
                t
            } = z(), [n, r] = h.useState("");
            h.useEffect(() => {
                n.length === 6 && e.onSubmit(n)
            }, [n]);
            const a = async () => {
                if (await Ve.confirm(t("2FA key will be sent to your email address"))) try {
                    await Z.post("/account/google/2-step-auth/recovery/"), De(t("Done!"))
                } catch (s) {
                    De(s)
                }
                e.onCancel()
            };
            return i.jsxs("div", {
                className: _S,
                children: [i.jsx(cr, {
                    onClick: e.onCancel
                }), i.jsxs("div", {
                    className: "confirm-top",
                    children: [i.jsx("img", {
                        alt: "",
                        src: g.assets("/common/judge.png")
                    }), i.jsxs("div", {
                        className: "summary",
                        children: [e.title ? e.title : t("For your account security"), ",", t("Please enter Google SECURITY-2FA key")]
                    })]
                }), i.jsxs("div", {
                    className: "google-form",
                    children: [i.jsx("div", {
                        className: "code-name",
                        children: t("GOOGLE SECURITY-2FA")
                    }), i.jsx(mS, {
                        autoFocus: !0,
                        value: n,
                        onChange: r
                    }), i.jsx("div", {
                        className: "forget",
                        onClick: a,
                        children: t("Lost your Google SECURITY-2FA key?")
                    })]
                })]
            })
        });
    async function yS() {
        return new Promise(e => {
            const t = () => {
                    e(null), Ve.back()
                },
                n = r => {
                    e(r), setTimeout(() => {
                        Ve.back()
                    }, 0)
                };
            Ve.push(i.jsx(vS, {
                onSubmit: n,
                onCancel: t
            }), {
                closeable: !1
            })
        })
    }
    const bS = (e = !0) => new Promise(async (t, n) => {
            if (F.state.google2StepAuth) {
                const r = await yS(),
                    a = String(Date.now());
                t(r ? {
                    code: r,
                    timestamp: a,
                    verifyType: "google-2step-auth"
                } : null)
            } else e ? t({
                code: "",
                timestamp: String(Date.now()),
                verifyType: ""
            }) : (g.unsafeNavigate("#/settings/safe"), t(null))
        }),
        _S = "t1de4n7w",
        xS = () => _t(() =>
            import ("../bcbrand.837ae599.js"), []),
        jS = {
            icon: dS
        };
    [_j, Mw, Kj, Xx, K1, v1, Y1, $1, uj, sw, Nw, vj, VP, Pw, bT].map(e => {
        try {
            e()
        } catch (t) {
            console.log(t)
        }
    }), fr.connect(), vt.connect(), g.emit("inject_rootNode", i.jsx(wS, {})), g.enableRem("440", "649"), F.waitLogin().then(() => {
        const e = F.state;
        g.emit("track", "_login_user", {
            userId: String(e.userId),
            level: String(e.vipLevel)
        }), g.emit("ad_track", "parseParams", e.invitationUrl)
    });

    function wS() {
        return i.jsxs(i.Fragment, {
            children: [i.jsx(SS, {}), i.jsx(hS, {})]
        })
    }

    function SS() {
        return ln(() => {
            const e = (s, o) => {
                    _P(s).then(o)
                },
                t = s => {
                    xT().then(s)
                },
                n = s => {
                    bS().then(s)
                },
                r = s => {
                    s ? cn.pause() : cn.start()
                },
                a = (s, o) => {
                    GP(s).then(o)
                };
            return g.on("select_currency", e), g.on("get_device_info", t), g.on("get_twostep", n), g.on("ignore_sign_up_queue", r), g.on("post_comment", a), () => {
                g.off("select_currency", e), g.off("get_device_info", t), g.off("get_twostep", n), g.off("ignore_sign_up_queue", r), g.off("post_comment", a)
            }
        }, []), null
    }
    async function NS(e) {
        try {
            return await RP({
                sectionId: "casino_bc",
                pageSize: 50,
                lang: e
            })
        } catch (t) {
            return (await xS()).data
        }
    }
    const ES = de(function(e) {
            return {
                bcBrand: NS(e)
            }
        }),
        IS = {};
    var Td, Dd = DC;
    Td = Dd.createRoot, Dd.hydrateRoot;
    const CS = "/assets/degenpass.772ffd77.png",
        AS = "/assets/cookie.bebef43c.png",
        kS = "/assets/one.e1362f4b.mp3",
        Wa = "/assets/rainbow.0b98f616.json";
    class Ld extends jd {
        constructor(t) {
            super(E({
                preload: !1
            }, t))
        }
        play(t) {
            return this.state() === "unloaded" && this.load(), super.play(t)
        }
    }
    const RS = h.memo(() => {
        const [e, t] = h.useState(!1);
        return h.useEffect(() => {
            const n = () => t(!1),
                r = () => t(!0);
            return vt.on("connect", n), vt.on("reconnecting", r), () => {
                vt.off("connect", n), vt.off("reconnecting", r)
            }
        }, []), i.jsx(Lf, {
            children: e && i.jsx(PS, {})
        })
    });

    function PS() {
        const {
            t: e
        } = z(), [t, n] = h.useState(0);
        h.useEffect(() => {
            const a = setInterval(() => {
                n(s => s + 1)
            }, 500);
            return () => clearInterval(a)
        }, []);
        const r = Array(t % 4).fill(".").join("");
        return i.jsx(ar.div, {
            className: OS,
            children: e("Connection lost. Trying to reconnect") + r
        })
    }
    const TS = new Ld({
            src: kS
        }),
        DS = h.memo(function() {
            const {
                t: e
            } = z(), [t, n] = h.useState(!1), [r, a] = h.useState({}), s = h.useRef(null), o = h.useRef(null), l = h.useRef(null), u = He(), f = ps(), d = () => {
                f.soundEffectEnable && TS.play()
            };
            if (h.useEffect(() => {
                    let m = null,
                        v = null;
                    const _ = j => {
                        var S;
                        if (j.rewardType === "wager-degenpass" || j.rewardType === "bigbangfianal") {
                            n(!0), a(j);
                            try {
                                (S = s.current) == null || S.play(1), m = setTimeout(() => {
                                    var I;
                                    (I = o.current) == null || I.play(1)
                                }, 1500), v = setTimeout(() => {
                                    var I;
                                    (I = l.current) == null || I.play(1)
                                }, 3e3), d()
                            } catch (I) {}
                        }
                    };
                    return fr.on("user-reward", _), () => {
                        clearTimeout(m), clearTimeout(v), fr.off("user-reward", _)
                    }
                }, []), !t) return null;
            const p = r.content || e("Congratulations! You\u2019ve been awarded a Degenpass NFT.");
            return i.jsx("div", {
                className: MS,
                children: i.jsxs("div", {
                    className: "degenpass-inner",
                    children: [i.jsxs("div", {
                        className: "lottie-wrap",
                        children: [i.jsx(ur, {
                            speed: .5,
                            ref: s,
                            className: "bg-rainbow",
                            path: Wa,
                            loop: !0
                        }), i.jsx(ur, {
                            speed: .5,
                            ref: o,
                            className: "bg-rainbow",
                            path: Wa,
                            loop: !0
                        }), i.jsx(ur, {
                            speed: .5,
                            ref: l,
                            className: "bg-rainbow",
                            path: Wa,
                            loop: !0
                        })]
                    }), i.jsx(cr, {
                        onClick: () => {
                            n(!1)
                        }
                    }), i.jsx("div", {
                        className: "img-wrap",
                        children: i.jsx("img", {
                            alt: "degenpass",
                            src: CS
                        })
                    }), i.jsxs("div", {
                        className: "right-wrap",
                        children: [i.jsxs("div", {
                            className: "left-text",
                            children: [i.jsx("p", {
                                className: "t",
                                children: e("Degen Pass Awarded!")
                            }), i.jsx("p", {
                                className: "d",
                                children: p
                            })]
                        }), i.jsx("div", {
                            className: "getpassbtn-wrap",
                            children: i.jsx(we, {
                                type: "conic",
                                onClick: () => {
                                    n(!1), u("/wallet/mynft")
                                },
                                children: e("View my NFTs")
                            })
                        })]
                    })]
                })
            })
        }),
        Od = "ignore_cookie_warn",
        LS = function() {
            const {
                t: e
            } = z(), t = (window == null ? void 0 : window.jsBridge) || (window == null ? void 0 : window.jsbridge) || (window == null ? void 0 : window.ANDROID_JS_BRIDGE) || (window == null ? void 0 : window.android), n = window == null ? void 0 : window.matchMedia("(display-mode: standalone)").matches, [r, a] = h.useState(!!localStorage.getItem(Od));
            return window.opener || t || n || r ? null : i.jsxs("div", {
                className: se(BS, "page-cookie-wrap"),
                children: [i.jsxs("div", {
                    className: "cookie-wrap",
                    children: [i.jsx("img", {
                        alt: "cookie",
                        src: AS
                    }), i.jsx("p", {
                        className: "cookie-desc",
                        children: e("We use cookies to provide the best experience to you.")
                    })]
                }), i.jsx(we, {
                    onClick: () => {
                        localStorage.setItem(Od, "true"), a(!0)
                    },
                    type: "conic",
                    children: e("Accept")
                })]
            })
        },
        OS = "o12pu5ci",
        BS = "czufpyj",
        MS = "d1y92b2r",
        Fe = {
            TWOFA_ERROR: 4002,
            INSUFFICIENT_BALANCE: 5002,
            SAME_EMAIL: 5801,
            IS_MUTE: 6001,
            NEED_LOGIN: 6002,
            SESSION_ERROR: 6003,
            NEED_VERIFY: 6004,
            IS_BLOCKED: 6005,
            LOCKED_BY_KYC: 6008,
            NEED_EMAIL_AND_BASIC_KYC: 6101,
            NEED_EMAIL_AND_ADVANCED_KYC: 6102,
            NEED_PHONE_AND_BASIC_KYC: 6103,
            NEED_PHONE_AND_ADVANCED_KYC: 6104,
            NEED_EMAIL_OR_PHONE_AND_BASIC_KYC: 6105,
            NEED_EMAIL_OR_PHONE_AND_ADVANCED_KYC: 6106,
            NEED_EMAIL_AND_PHONE_AND_BASIC_KYC: 6107,
            NEED_EMAIL_AND_PHONE_AND_ADVANCED_KYC: 6108,
            NEED_BASIC_KYC: 6109,
            NEED_ADVANCED_KYC: 6110,
            FINAL_REJECT_KYC: 6111,
            IS_UPDATING: 1999
        },
        WS = "/assets/ring.b9ab8df7.mp3",
        FS = "/assets/click.504e71cc.mp3",
        zS = "/assets/notification.38202f9e.mp3",
        GS = "/assets/ring2.19ef5a98.mp3",
        US = "/assets/win.1981b036.mp3",
        VS = "/assets/success.a3be93aa.mp3",
        HS = "/assets/claim.d7b4098e.mp3",
        KS = "/assets/rakeready.ea43dac5.mp3",
        qS = {
            ring: WS,
            ring2: GS,
            click: FS,
            notification: zS,
            success: VS,
            win: US,
            claim: HS,
            rakeready: KS
        },
        YS = de(e => {
            const t = qS[e];
            return t ? new Ld({
                src: t
            }) : null
        });

    function Bd(e) {
        var t;
        (t = YS(e)) == null || t.play()
    }
    const ZS = "/assets/fp.min.2102a136.js",
        $S = Wt(() => new Promise(async (e, t) => {
            try {
                globalThis._smConf = {
                    organization: "d9YtHNKdmLm1CMuYZsw9",
                    appId: "default",
                    publicKey: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC1H4eR+xoG7K9NIBf3K6PmfnRsGkaH3aGz9A/XkYhIQdrN6XKBWt6fnxEqDe1Xp27o/VOd02JPNG6JKkJ8pVyjjUXdukNkbKADzxEYmkLn/7O5hpgHMHWiZ6iKTNlDWAQ96viViXa4Bq1Ju1u3DWnH9m+6Sz1zEAQOLH6XnQSS8QIDAQAB",
                    apiHost: "collect.verify.lnearn.com"
                }, globalThis._smReadyFuncs = [function() {
                    n.then(e)
                }];
                const n = M.loadScript(ZS, "SMSdk")
            } catch (n) {
                t(n)
            }
        }));
    async function XS() {
        return (await $S()).getDeviceId()
    }
    const nn = () => _t(() =>
            import ("../index.89353b71.js"), ["assets/index.89353b71.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-b53b00e3.js", "assets/chunk-cf010ec4.js", "assets/chunk-5bcb444f.js", "assets/chunk-e570733e.js", "assets/chunk-0e835458.js", "assets/index.64308c9d.css"]),
        JS = Ut(async () => ({
            default: (await nn()).PokerUpdating
        })),
        QS = Ut(async () => ({
            default: (await nn()).BlockPage
        }));

    function eN() {
        const {
            t: e
        } = z(), t = it(), n = cs(), r = async () => {
            await gt.initData, gt.state.lang && n(gt.state.lang)
        };
        return h.useEffect(() => (r(), Z.interceptors.response.use(a => a, async a => (a instanceof Ff && (a.code === Fe.NEED_LOGIN ? (t.login = !1, g.unsafeNavigate("#/login")) : a.code === Fe.IS_BLOCKED ? nn().then(s => s.showBlock(a.message)) : a.code === Fe.LOCKED_BY_KYC ? g.unsafeNavigate(`#/need-verify/${a.code}`) : a.code >= Fe.NEED_EMAIL_AND_BASIC_KYC && a.code <= Fe.FINAL_REJECT_KYC ? g.unsafeNavigate(`#/need-verify/${a.code}`) : a.response.code === Fe.IS_UPDATING && (await F.initData, window.location.reload())), Promise.reject(a))), XS().then(a => {
            Z.defaults.headers.common.smid = a
        }), Vt.addAfterRequest(a => {
            a.code === Fe.SESSION_ERROR && Ve.confirm(e("Your session has timed out! Please log in again!"), {
                confirmText: "Refresh"
            }).then(s => s && window.location.reload())
        }), g.on("playsound", Bd), () => {
            g.off("playsound", Bd)
        }), []), null
    }
    Wt(() => {
        q.isDevHost || Ht.init()
    })();
    const tN = h.memo(function({
            children: e,
            pageContext: t
        }) {
            const n = rN(),
                {
                    error: r
                } = Jf(() => F.initData);
            if (r) {
                if (r.code === Fe.IS_UPDATING) e = i.jsx(JS, {});
                else if (r.code === Fe.SESSION_ERROR) return window.location.reload(), null
            } else n && (e = i.jsx(QS, {}));
            return i.jsx(zf, {
                locales: vs,
                namespace: "translation",
                children: i.jsxs(Of, {
                    pageContext: t,
                    children: [i.jsx(eN, {}), i.jsxs(h.Suspense, {
                        fallback: i.jsx("div", {
                            children: "Suspense Error!"
                        }),
                        children: [i.jsx(Yf, {
                            children: i.jsx(nN, {})
                        }), e]
                    })]
                })
            })
        }),
        nN = $.memo(() => (h.useEffect(() => g.hashRouter.subscribe(e => {
            const t = e.location.pathname;
            t !== "/" && Ht.trackPageView({
                url: t
            })
        }), []), i.jsxs(i.Fragment, {
            children: [i.jsx(RS, {}), i.jsx(LS, {}), i.jsx(DS, {})]
        })));

    function rN() {
        const [e, t] = h.useState(!1), n = it();
        return ln(() => {
            F.initData.then(() => {
                let r = !M.isSSR && !q.isDev && !n.showable;
                n.areaAlert && n.areaCode === "GB" ? (r = !1, setTimeout(() => nn().then(a => a.showGBBlock()), 200)) : !r && n.areaAlert && setTimeout(() => nn().then(a => a.showBlock()), 200), t(r)
            })
        }, []), e
    }
    window["@bc/ui"] = E({}, Rx), window["@bc/pixi"] = E({}, Px), window["react-dom"] = E(E({}, LC), pr), window.react = E(E({}, FC), $), window["framer-motion"] = E({}, kx), window["lodash-es"] = E(E({}, c_), c), window["react/jsx-runtime"] = E(E({}, fP), pP), window.gsap = E(E({}, OC), BC), window["/@react-refresh"] = E(E({}, Mx), We), window["react-router-dom"] = E({}, MC), g.history_navigate = (e, {
        replace: t
    } = {}) => jT(e, {
        overwriteLastHistoryEntry: t,
        keepScrollPosition: !0
    }), window.app = g;
    const aN = globalThis.innerWidth < "649",
        Md = document.getElementById("root");
    let Fa, za = "/";
    async function sN(e) {
        e.$$typeof = "", Object.assign(e, {
            assets: jS
        });
        const {
            Page: t,
            lang: n,
            exports: r,
            mobile: a,
            urlPathname: s,
            urlOriginal: o
        } = e;
        let {
            redirectTo: l = IS[s]
        } = e, u = !1;
        try {
            await Promise.all([F.initData, os.initData, hs.initData, gt.initData])
        } catch (R) {
            console.log("InitData error!")
        }
        if (Vt.enableSocketConnect(), r.auth && (u = !F.state.login), l) {
            l.startsWith("#") ? g.unsafeNavigate(za.replace(/#.*$|$/, l), {
                replace: !0
            }) : g.unsafeNavigate(l, {
                replace: !0
            });
            return
        } else if (u) {
            g.unsafeNavigate(za.replace(/#.*$|$/, "#/login"), {
                replace: !0
            });
            return
        }
        const {
            isSpreadHost: f,
            isUsHost: d
        } = M.getHostType(q.host);
        if (s !== "/" && f && !F.state.login) {
            g.unsafeNavigate("/", {
                replace: !0
            });
            return
        }
        d && (dr.t = Zf(dr.t, oN)), za = o;
        const p = r.Layout || xP,
            m = r.onPageData,
            v = e.isHydration && a !== aN,
            _ = vs[n];
        _ && await _();

        function j() {
            let R = n;
            R === "tl" && (R = "fil"), Z.defaults.headers.common["Accept-Language"] = R
        }
        j();

        function S(R) {
            return i.jsx(tN, {
                pageContext: R,
                children: i.jsx(p, {
                    children: i.jsx(t, {})
                })
            })
        }
        const I = m ? m({
            ctx: e
        }) : {};
        e.pageProps = new Hf(E(E({}, I), ES(n))), iN(S(e), v)
    }

    function iN(e, t = !1) {
        t && (Md.className = ""), Fa || (Fa = Td(Md)), Fa.render(e)
    }
    const Ga = [{
        old: "Insufficient balance",
        new: "Insufficient entries"
    }, {
        old: "number of bets",
        new: "number of rounds"
    }, {
        old: "bet id",
        new: "round id"
    }, {
        old: "all bets",
        new: "all rounds"
    }, {
        old: "Responsible Gambling",
        new: "Responsible Play"
    }, {
        old: "Live Dealers",
        new: "Game Hosts"
    }, {
        old: "Baccarat",
        new: "Insufficient"
    }, {
        old: "Insufficient",
        new: "Baccarat-style Game"
    }, {
        old: "Craps",
        new: "Dice Game"
    }, {
        old: "Poker",
        new: "Poker-style Game"
    }, {
        old: "Blackjack",
        new: "Card Game"
    }, {
        old: "Roulette",
        new: "Wheel Game"
    }, {
        old: "Withdraw",
        new: "Redeem"
    }, {
        old: "Payout",
        new: "Prize"
    }, {
        old: "Deposit",
        new: "Buy"
    }, {
        old: "deposit",
        new: "buy"
    }, {
        old: "Jackpot",
        new: "Grand Prize"
    }, {
        old: "jackpot",
        new: "grand prize"
    }, {
        old: "Slot Machine",
        new: "Slot-style Game"
    }, {
        old: "Wager",
        new: "Entry"
    }, {
        old: "Gambling",
        new: "Sweepstakes"
    }, {
        old: "Casino",
        new: "Games"
    }, {
        old: "casino",
        new: "games"
    }, {
        old: "Bet",
        new: "Play"
    }];

    function oN(e) {
        let t = e;
        for (let n = 0; n < Ga.length; n++) t = t.replaceAll(Ga[n].old, Ga[n].new);
        return t
    }
    let Wd, Fd, zd;
    Wd = !1, Fd = !0, zd = !0, mp = Object.freeze(Object.defineProperty({
        __proto__: null,
        clientRouting: Fd,
        hydrationCanBeAborted: zd,
        prefetchStaticAssets: Wd,
        render: sN
    }, Symbol.toStringTag, {
        value: "Module"
    }))
});
export {
    mp as _, ST as __tla, pn as n, hn as t, mr as u
};