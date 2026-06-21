var V0 = Object.defineProperty,
    G0 = Object.defineProperties;
var Y0 = Object.getOwnPropertyDescriptors;
var ls = Object.getOwnPropertySymbols;
var X0 = Object.prototype.hasOwnProperty,
    Q0 = Object.prototype.propertyIsEnumerable;
var ci = (t, n, r) => n in t ? V0(t, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[n] = r,
    fs = (t, n) => {
        for (var r in n || (n = {})) X0.call(n, r) && ci(t, r, n[r]);
        if (ls)
            for (var r of ls(n)) Q0.call(n, r) && ci(t, r, n[r]);
        return t
    },
    hs = (t, n) => G0(t, Y0(n));
var bn = (t, n, r) => (ci(t, typeof n != "symbol" ? n + "" : n, r), r);
import {
    j as E
} from "./chunk-a4af42e8.js";
import {
    g as F,
    c as Sr,
    R as O,
    r as it
} from "./chunk-73e80d68.js";
import {
    ev as Tr,
    cJ as we,
    ci as _n,
    cu as ps,
    dZ as J0,
    a as li,
    e3 as Oe,
    e5 as ds,
    ds as ys,
    ef as Z0,
    bq as tp,
    aC as np,
    ed as rp,
    dS as ep,
    dp as vs,
    co as op,
    cl as ip,
    da as ap,
    ct as up,
    ez as kr,
    dg as sp
} from "./chunk-b53b00e3.js";
import {
    u as gs,
    c as fi
} from "./chunk-644603d0.js";
import {
    c as je
} from "./chunk-5bcb444f.js";
import "./chunk-cf010ec4.js";
var ms = {
        exports: {}
    },
    cp = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    lp = cp,
    fp = lp;

function bs() {}

function _s() {}
_s.resetWarningCache = bs;
var hp = function() {
    function t(e, o, i, a, u, s) {
        if (s !== fp) {
            var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw c.name = "Invariant Violation", c
        }
    }
    t.isRequired = t;

    function n() {
        return t
    }
    var r = {
        array: t,
        bigint: t,
        bool: t,
        func: t,
        number: t,
        object: t,
        string: t,
        symbol: t,
        any: t,
        arrayOf: n,
        element: t,
        elementType: t,
        instanceOf: n,
        node: t,
        objectOf: n,
        oneOf: n,
        oneOfType: n,
        shape: n,
        exact: n,
        checkPropTypes: _s,
        resetWarningCache: bs
    };
    return r.PropTypes = r, r
};
ms.exports = hp();
var pp = ms.exports;
const p = F(pp);

function dp(t) {
    return t == null
}
var yp = dp;
const hi = F(yp);
var vp = typeof Sr == "object" && Sr && Sr.Object === Object && Sr,
    xs = vp,
    gp = xs,
    mp = typeof self == "object" && self && self.Object === Object && self,
    bp = gp || mp || Function("return this")(),
    Ft = bp,
    _p = Ft,
    xp = _p.Symbol,
    Mr = xp,
    ws = Mr,
    Os = Object.prototype,
    wp = Os.hasOwnProperty,
    Op = Os.toString,
    Cr = ws ? ws.toStringTag : void 0;

function jp(t) {
    var n = wp.call(t, Cr),
        r = t[Cr];
    try {
        t[Cr] = void 0;
        var e = !0
    } catch (i) {}
    var o = Op.call(t);
    return e && (n ? t[Cr] = r : delete t[Cr]), o
}
var Ap = jp,
    Ep = Object.prototype,
    Pp = Ep.toString;

function Sp(t) {
    return Pp.call(t)
}
var Tp = Sp,
    js = Mr,
    kp = Ap,
    Mp = Tp,
    Cp = "[object Null]",
    Dp = "[object Undefined]",
    As = js ? js.toStringTag : void 0;

function Np(t) {
    return t == null ? t === void 0 ? Dp : Cp : As && As in Object(t) ? kp(t) : Mp(t)
}
var un = Np;

function Ip(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function")
}
var Bt = Ip;
const Es = F(Bt);
var Rp = un,
    Lp = Bt,
    $p = "[object AsyncFunction]",
    zp = "[object Function]",
    Up = "[object GeneratorFunction]",
    Wp = "[object Proxy]";

function Fp(t) {
    if (!Lp(t)) return !1;
    var n = Rp(t);
    return n == zp || n == Up || n == $p || n == Wp
}
var pi = Fp;
const Y = F(pi);
var Bp = Ft,
    Hp = Bp["__core-js_shared__"],
    qp = Hp,
    di = qp,
    Ps = function() {
        var t = /[^.]+$/.exec(di && di.keys && di.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();

function Kp(t) {
    return !!Ps && Ps in t
}
var Vp = Kp,
    Gp = Function.prototype,
    Yp = Gp.toString;

function Xp(t) {
    if (t != null) {
        try {
            return Yp.call(t)
        } catch (n) {}
        try {
            return t + ""
        } catch (n) {}
    }
    return ""
}
var Ss = Xp,
    Qp = pi,
    Jp = Vp,
    Zp = Bt,
    td = Ss,
    nd = /[\\^$.*+?()[\]{}|]/g,
    rd = /^\[object .+?Constructor\]$/,
    ed = Function.prototype,
    od = Object.prototype,
    id = ed.toString,
    ad = od.hasOwnProperty,
    ud = RegExp("^" + id.call(ad).replace(nd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function sd(t) {
    if (!Zp(t) || Jp(t)) return !1;
    var n = Qp(t) ? ud : rd;
    return n.test(td(t))
}
var cd = sd;

function ld(t, n) {
    return t == null ? void 0 : t[n]
}
var fd = ld,
    hd = cd,
    pd = fd;

function dd(t, n) {
    var r = pd(t, n);
    return hd(r) ? r : void 0
}
var Dn = dd,
    yd = Dn,
    vd = function() {
        try {
            var t = yd(Object, "defineProperty");
            return t({}, "", {}), t
        } catch (n) {}
    }(),
    Ts = vd,
    ks = Ts;

function gd(t, n, r) {
    n == "__proto__" && ks ? ks(t, n, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
    }) : t[n] = r
}
var yi = gd;

function md(t, n) {
    return t === n || t !== t && n !== n
}
var Qn = md,
    bd = yi,
    _d = Qn,
    xd = Object.prototype,
    wd = xd.hasOwnProperty;

function Od(t, n, r) {
    var e = t[n];
    (!(wd.call(t, n) && _d(e, r)) || r === void 0 && !(n in t)) && bd(t, n, r)
}
var vi = Od,
    jd = vi,
    Ad = yi;

function Ed(t, n, r, e) {
    var o = !r;
    r || (r = {});
    for (var i = -1, a = n.length; ++i < a;) {
        var u = n[i],
            s = e ? e(r[u], t[u], u, r, t) : void 0;
        s === void 0 && (s = t[u]), o ? Ad(r, u, s) : jd(r, u, s)
    }
    return r
}
var Pd = Ed;

function Sd(t) {
    return t
}
var Dr = Sd;
const Nn = F(Dr);

function Td(t, n, r) {
    switch (r.length) {
        case 0:
            return t.call(n);
        case 1:
            return t.call(n, r[0]);
        case 2:
            return t.call(n, r[0], r[1]);
        case 3:
            return t.call(n, r[0], r[1], r[2])
    }
    return t.apply(n, r)
}
var kd = Td,
    Md = kd,
    Ms = Math.max;

function Cd(t, n, r) {
    return n = Ms(n === void 0 ? t.length - 1 : n, 0),
        function() {
            for (var e = arguments, o = -1, i = Ms(e.length - n, 0), a = Array(i); ++o < i;) a[o] = e[n + o];
            o = -1;
            for (var u = Array(n + 1); ++o < n;) u[o] = e[o];
            return u[n] = r(a), Md(t, this, u)
        }
}
var Cs = Cd;

function Dd(t) {
    return function() {
        return t
    }
}
var Nd = Dd,
    Id = Nd,
    Ds = Ts,
    Rd = Dr,
    Ld = Ds ? function(t, n) {
        return Ds(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Id(n),
            writable: !0
        })
    } : Rd,
    $d = Ld,
    zd = 800,
    Ud = 16,
    Wd = Date.now;

function Fd(t) {
    var n = 0,
        r = 0;
    return function() {
        var e = Wd(),
            o = Ud - (e - r);
        if (r = e, o > 0) {
            if (++n >= zd) return arguments[0]
        } else n = 0;
        return t.apply(void 0, arguments)
    }
}
var Bd = Fd,
    Hd = $d,
    qd = Bd,
    Kd = qd(Hd),
    Ns = Kd,
    Vd = Dr,
    Gd = Cs,
    Yd = Ns;

function Xd(t, n) {
    return Yd(Gd(t, n, Vd), t + "")
}
var Ae = Xd,
    Qd = 9007199254740991;

function Jd(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Qd
}
var gi = Jd,
    Zd = pi,
    ty = gi;

function ny(t) {
    return t != null && ty(t.length) && !Zd(t)
}
var Ht = ny,
    ry = 9007199254740991,
    ey = /^(?:0|[1-9]\d*)$/;

function oy(t, n) {
    var r = typeof t;
    return n = n != null ? n : ry, !!n && (r == "number" || r != "symbol" && ey.test(t)) && t > -1 && t % 1 == 0 && t < n
}
var Ee = oy,
    iy = Qn,
    ay = Ht,
    uy = Ee,
    sy = Bt;

function cy(t, n, r) {
    if (!sy(r)) return !1;
    var e = typeof n;
    return (e == "number" ? ay(r) && uy(n, r.length) : e == "string" && n in r) ? iy(r[n], t) : !1
}
var Pe = cy,
    ly = Ae,
    fy = Pe;

function hy(t) {
    return ly(function(n, r) {
        var e = -1,
            o = r.length,
            i = o > 1 ? r[o - 1] : void 0,
            a = o > 2 ? r[2] : void 0;
        for (i = t.length > 3 && typeof i == "function" ? (o--, i) : void 0, a && fy(r[0], r[1], a) && (i = o < 3 ? void 0 : i, o = 1), n = Object(n); ++e < o;) {
            var u = r[e];
            u && t(n, u, e, i)
        }
        return n
    })
}
var py = hy,
    dy = Object.prototype;

function yy(t) {
    var n = t && t.constructor,
        r = typeof n == "function" && n.prototype || dy;
    return t === r
}
var Se = yy;

function vy(t, n) {
    for (var r = -1, e = Array(t); ++r < t;) e[r] = n(r);
    return e
}
var gy = vy;

function my(t) {
    return t != null && typeof t == "object"
}
var qt = my,
    by = un,
    _y = qt,
    xy = "[object Arguments]";

function wy(t) {
    return _y(t) && by(t) == xy
}
var Oy = wy,
    Is = Oy,
    jy = qt,
    Rs = Object.prototype,
    Ay = Rs.hasOwnProperty,
    Ey = Rs.propertyIsEnumerable,
    Py = Is(function() {
        return arguments
    }()) ? Is : function(t) {
        return jy(t) && Ay.call(t, "callee") && !Ey.call(t, "callee")
    },
    Te = Py,
    Sy = Array.isArray,
    gt = Sy,
    ke = {
        exports: {}
    };

function Ty() {
    return !1
}
var ky = Ty;
ke.exports,
    function(t, n) {
        var r = Ft,
            e = ky,
            o = n && !n.nodeType && n,
            i = o && !0 && t && !t.nodeType && t,
            a = i && i.exports === o,
            u = a ? r.Buffer : void 0,
            s = u ? u.isBuffer : void 0,
            c = s || e;
        t.exports = c
    }(ke, ke.exports);
var mi = ke.exports,
    My = un,
    Cy = gi,
    Dy = qt,
    Ny = "[object Arguments]",
    Iy = "[object Array]",
    Ry = "[object Boolean]",
    Ly = "[object Date]",
    $y = "[object Error]",
    zy = "[object Function]",
    Uy = "[object Map]",
    Wy = "[object Number]",
    Fy = "[object Object]",
    By = "[object RegExp]",
    Hy = "[object Set]",
    qy = "[object String]",
    Ky = "[object WeakMap]",
    Vy = "[object ArrayBuffer]",
    Gy = "[object DataView]",
    Yy = "[object Float32Array]",
    Xy = "[object Float64Array]",
    Qy = "[object Int8Array]",
    Jy = "[object Int16Array]",
    Zy = "[object Int32Array]",
    t1 = "[object Uint8Array]",
    n1 = "[object Uint8ClampedArray]",
    r1 = "[object Uint16Array]",
    e1 = "[object Uint32Array]",
    Z = {};
Z[Yy] = Z[Xy] = Z[Qy] = Z[Jy] = Z[Zy] = Z[t1] = Z[n1] = Z[r1] = Z[e1] = !0, Z[Ny] = Z[Iy] = Z[Vy] = Z[Ry] = Z[Gy] = Z[Ly] = Z[$y] = Z[zy] = Z[Uy] = Z[Wy] = Z[Fy] = Z[By] = Z[Hy] = Z[qy] = Z[Ky] = !1;

function o1(t) {
    return Dy(t) && Cy(t.length) && !!Z[My(t)]
}
var i1 = o1;

function a1(t) {
    return function(n) {
        return t(n)
    }
}
var Nr = a1,
    Me = {
        exports: {}
    };
Me.exports,
    function(t, n) {
        var r = xs,
            e = n && !n.nodeType && n,
            o = e && !0 && t && !t.nodeType && t,
            i = o && o.exports === e,
            a = i && r.process,
            u = function() {
                try {
                    var s = o && o.require && o.require("util").types;
                    return s || a && a.binding && a.binding("util")
                } catch (c) {}
            }();
        t.exports = u
    }(Me, Me.exports);
var bi = Me.exports,
    u1 = i1,
    s1 = Nr,
    Ls = bi,
    $s = Ls && Ls.isTypedArray,
    c1 = $s ? s1($s) : u1,
    _i = c1,
    l1 = gy,
    f1 = Te,
    h1 = gt,
    p1 = mi,
    d1 = Ee,
    y1 = _i,
    v1 = Object.prototype,
    g1 = v1.hasOwnProperty;

function m1(t, n) {
    var r = h1(t),
        e = !r && f1(t),
        o = !r && !e && p1(t),
        i = !r && !e && !o && y1(t),
        a = r || e || o || i,
        u = a ? l1(t.length, String) : [],
        s = u.length;
    for (var c in t)(n || g1.call(t, c)) && !(a && (c == "length" || o && (c == "offset" || c == "parent") || i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || d1(c, s))) && u.push(c);
    return u
}
var zs = m1;

function b1(t, n) {
    return function(r) {
        return t(n(r))
    }
}
var Us = b1,
    _1 = Us,
    x1 = _1(Object.keys, Object),
    w1 = x1,
    O1 = Se,
    j1 = w1,
    A1 = Object.prototype,
    E1 = A1.hasOwnProperty;

function P1(t) {
    if (!O1(t)) return j1(t);
    var n = [];
    for (var r in Object(t)) E1.call(t, r) && r != "constructor" && n.push(r);
    return n
}
var Ws = P1,
    S1 = zs,
    T1 = Ws,
    k1 = Ht;

function M1(t) {
    return k1(t) ? S1(t) : T1(t)
}
var In = M1;
const nt = F(In);
var C1 = vi,
    D1 = Pd,
    N1 = py,
    I1 = Ht,
    R1 = Se,
    L1 = In,
    $1 = Object.prototype,
    z1 = $1.hasOwnProperty,
    U1 = N1(function(t, n) {
        if (R1(n) || I1(n)) {
            D1(n, L1(n), t);
            return
        }
        for (var r in n) z1.call(n, r) && C1(t, r, n[r])
    }),
    W1 = U1;
const A = F(W1),
    F1 = t => +t;

function B1(t) {
    return t * t
}

function H1(t) {
    return t * (2 - t)
}

function Fs(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
}

function q1(t) {
    return t * t * t
}

function K1(t) {
    return --t * t * t + 1
}

function Bs(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
}
var xi = 3,
    V1 = function t(n) {
        n = +n;

        function r(e) {
            return Math.pow(e, n)
        }
        return r.exponent = t, r
    }(xi),
    G1 = function t(n) {
        n = +n;

        function r(e) {
            return 1 - Math.pow(1 - e, n)
        }
        return r.exponent = t, r
    }(xi),
    Hs = function t(n) {
        n = +n;

        function r(e) {
            return ((e *= 2) <= 1 ? Math.pow(e, n) : 2 - Math.pow(2 - e, n)) / 2
        }
        return r.exponent = t, r
    }(xi),
    qs = Math.PI,
    Ks = qs / 2;

function Y1(t) {
    return +t == 1 ? 1 : 1 - Math.cos(t * Ks)
}

function X1(t) {
    return Math.sin(t * Ks)
}

function Vs(t) {
    return (1 - Math.cos(qs * t)) / 2
}

function xn(t) {
    return (Math.pow(2, -10 * t) - .0009765625) * 1.0009775171065494
}

function Q1(t) {
    return xn(1 - +t)
}

function J1(t) {
    return 1 - xn(t)
}

function Gs(t) {
    return ((t *= 2) <= 1 ? xn(1 - t) : 2 - xn(t - 1)) / 2
}

function Z1(t) {
    return 1 - Math.sqrt(1 - t * t)
}

function tv(t) {
    return Math.sqrt(1 - --t * t)
}

function Ys(t) {
    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
}
var wi = 4 / 11,
    nv = 6 / 11,
    rv = 8 / 11,
    ev = 3 / 4,
    ov = 9 / 11,
    iv = 10 / 11,
    av = 15 / 16,
    uv = 21 / 22,
    sv = 63 / 64,
    Ce = 1 / wi / wi;

function cv(t) {
    return 1 - Ir(1 - t)
}

function Ir(t) {
    return (t = +t) < wi ? Ce * t * t : t < rv ? Ce * (t -= nv) * t + ev : t < iv ? Ce * (t -= ov) * t + av : Ce * (t -= uv) * t + sv
}

function lv(t) {
    return ((t *= 2) <= 1 ? 1 - Ir(1 - t) : Ir(t - 1) + 1) / 2
}
var Oi = 1.70158,
    fv = function t(n) {
        n = +n;

        function r(e) {
            return (e = +e) * e * (n * (e - 1) + e)
        }
        return r.overshoot = t, r
    }(Oi),
    hv = function t(n) {
        n = +n;

        function r(e) {
            return --e * e * ((e + 1) * n + e) + 1
        }
        return r.overshoot = t, r
    }(Oi),
    Xs = function t(n) {
        n = +n;

        function r(e) {
            return ((e *= 2) < 1 ? e * e * ((n + 1) * e - n) : (e -= 2) * e * ((n + 1) * e + n) + 2) / 2
        }
        return r.overshoot = t, r
    }(Oi),
    Jn = 2 * Math.PI,
    ji = 1,
    Ai = .3,
    pv = function t(n, r) {
        var e = Math.asin(1 / (n = Math.max(1, n))) * (r /= Jn);

        function o(i) {
            return n * xn(- --i) * Math.sin((e - i) / r)
        }
        return o.amplitude = function(i) {
            return t(i, r * Jn)
        }, o.period = function(i) {
            return t(n, i)
        }, o
    }(ji, Ai),
    Qs = function t(n, r) {
        var e = Math.asin(1 / (n = Math.max(1, n))) * (r /= Jn);

        function o(i) {
            return 1 - n * xn(i = +i) * Math.sin((i + e) / r)
        }
        return o.amplitude = function(i) {
            return t(i, r * Jn)
        }, o.period = function(i) {
            return t(n, i)
        }, o
    }(ji, Ai),
    dv = function t(n, r) {
        var e = Math.asin(1 / (n = Math.max(1, n))) * (r /= Jn);

        function o(i) {
            return ((i = i * 2 - 1) < 0 ? n * xn(-i) * Math.sin((e - i) / r) : 2 - n * xn(i) * Math.sin((e + i) / r)) / 2
        }
        return o.amplitude = function(i) {
            return t(i, r * Jn)
        }, o.period = function(i) {
            return t(n, i)
        }, o
    }(ji, Ai);
const yv = Object.freeze(Object.defineProperty({
    __proto__: null,
    easeBack: Xs,
    easeBackIn: fv,
    easeBackInOut: Xs,
    easeBackOut: hv,
    easeBounce: Ir,
    easeBounceIn: cv,
    easeBounceInOut: lv,
    easeBounceOut: Ir,
    easeCircle: Ys,
    easeCircleIn: Z1,
    easeCircleInOut: Ys,
    easeCircleOut: tv,
    easeCubic: Bs,
    easeCubicIn: q1,
    easeCubicInOut: Bs,
    easeCubicOut: K1,
    easeElastic: Qs,
    easeElasticIn: pv,
    easeElasticInOut: dv,
    easeElasticOut: Qs,
    easeExp: Gs,
    easeExpIn: Q1,
    easeExpInOut: Gs,
    easeExpOut: J1,
    easeLinear: F1,
    easePoly: Hs,
    easePolyIn: V1,
    easePolyInOut: Hs,
    easePolyOut: G1,
    easeQuad: Fs,
    easeQuadIn: B1,
    easeQuadInOut: Fs,
    easeQuadOut: H1,
    easeSin: Vs,
    easeSinIn: Y1,
    easeSinInOut: Vs,
    easeSinOut: X1
}, Symbol.toStringTag, {
    value: "Module"
}));

function vv(t, n) {
    for (var r = -1, e = t == null ? 0 : t.length, o = Array(e); ++r < e;) o[r] = n(t[r], r, t);
    return o
}
var Rr = vv,
    gv = un,
    mv = qt,
    bv = "[object Symbol]";

function _v(t) {
    return typeof t == "symbol" || mv(t) && gv(t) == bv
}
var Lr = _v,
    xv = gt,
    wv = Lr,
    Ov = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    jv = /^\w*$/;

function Av(t, n) {
    if (xv(t)) return !1;
    var r = typeof t;
    return r == "number" || r == "symbol" || r == "boolean" || t == null || wv(t) ? !0 : jv.test(t) || !Ov.test(t) || n != null && t in Object(n)
}
var Ei = Av,
    Ev = Dn,
    Pv = Ev(Object, "create"),
    De = Pv,
    Js = De;

function Sv() {
    this.__data__ = Js ? Js(null) : {}, this.size = 0
}
var Tv = Sv;

function kv(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n
}
var Mv = kv,
    Cv = De,
    Dv = "__lodash_hash_undefined__",
    Nv = Object.prototype,
    Iv = Nv.hasOwnProperty;

function Rv(t) {
    var n = this.__data__;
    if (Cv) {
        var r = n[t];
        return r === Dv ? void 0 : r
    }
    return Iv.call(n, t) ? n[t] : void 0
}
var Lv = Rv,
    $v = De,
    zv = Object.prototype,
    Uv = zv.hasOwnProperty;

function Wv(t) {
    var n = this.__data__;
    return $v ? n[t] !== void 0 : Uv.call(n, t)
}
var Fv = Wv,
    Bv = De,
    Hv = "__lodash_hash_undefined__";

function qv(t, n) {
    var r = this.__data__;
    return this.size += this.has(t) ? 0 : 1, r[t] = Bv && n === void 0 ? Hv : n, this
}
var Kv = qv,
    Vv = Tv,
    Gv = Mv,
    Yv = Lv,
    Xv = Fv,
    Qv = Kv;

function Zn(t) {
    var n = -1,
        r = t == null ? 0 : t.length;
    for (this.clear(); ++n < r;) {
        var e = t[n];
        this.set(e[0], e[1])
    }
}
Zn.prototype.clear = Vv, Zn.prototype.delete = Gv, Zn.prototype.get = Yv, Zn.prototype.has = Xv, Zn.prototype.set = Qv;
var Jv = Zn;

function Zv() {
    this.__data__ = [], this.size = 0
}
var tg = Zv,
    ng = Qn;

function rg(t, n) {
    for (var r = t.length; r--;)
        if (ng(t[r][0], n)) return r;
    return -1
}
var Ne = rg,
    eg = Ne,
    og = Array.prototype,
    ig = og.splice;

function ag(t) {
    var n = this.__data__,
        r = eg(n, t);
    if (r < 0) return !1;
    var e = n.length - 1;
    return r == e ? n.pop() : ig.call(n, r, 1), --this.size, !0
}
var ug = ag,
    sg = Ne;

function cg(t) {
    var n = this.__data__,
        r = sg(n, t);
    return r < 0 ? void 0 : n[r][1]
}
var lg = cg,
    fg = Ne;

function hg(t) {
    return fg(this.__data__, t) > -1
}
var pg = hg,
    dg = Ne;

function yg(t, n) {
    var r = this.__data__,
        e = dg(r, t);
    return e < 0 ? (++this.size, r.push([t, n])) : r[e][1] = n, this
}
var vg = yg,
    gg = tg,
    mg = ug,
    bg = lg,
    _g = pg,
    xg = vg;

function tr(t) {
    var n = -1,
        r = t == null ? 0 : t.length;
    for (this.clear(); ++n < r;) {
        var e = t[n];
        this.set(e[0], e[1])
    }
}
tr.prototype.clear = gg, tr.prototype.delete = mg, tr.prototype.get = bg, tr.prototype.has = _g, tr.prototype.set = xg;
var Ie = tr,
    wg = Dn,
    Og = Ft,
    jg = wg(Og, "Map"),
    Pi = jg,
    Zs = Jv,
    Ag = Ie,
    Eg = Pi;

function Pg() {
    this.size = 0, this.__data__ = {
        hash: new Zs,
        map: new(Eg || Ag),
        string: new Zs
    }
}
var Sg = Pg;

function Tg(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null
}
var kg = Tg,
    Mg = kg;

function Cg(t, n) {
    var r = t.__data__;
    return Mg(n) ? r[typeof n == "string" ? "string" : "hash"] : r.map
}
var Re = Cg,
    Dg = Re;

function Ng(t) {
    var n = Dg(this, t).delete(t);
    return this.size -= n ? 1 : 0, n
}
var Ig = Ng,
    Rg = Re;

function Lg(t) {
    return Rg(this, t).get(t)
}
var $g = Lg,
    zg = Re;

function Ug(t) {
    return zg(this, t).has(t)
}
var Wg = Ug,
    Fg = Re;

function Bg(t, n) {
    var r = Fg(this, t),
        e = r.size;
    return r.set(t, n), this.size += r.size == e ? 0 : 1, this
}
var Hg = Bg,
    qg = Sg,
    Kg = Ig,
    Vg = $g,
    Gg = Wg,
    Yg = Hg;

function nr(t) {
    var n = -1,
        r = t == null ? 0 : t.length;
    for (this.clear(); ++n < r;) {
        var e = t[n];
        this.set(e[0], e[1])
    }
}
nr.prototype.clear = qg, nr.prototype.delete = Kg, nr.prototype.get = Vg, nr.prototype.has = Gg, nr.prototype.set = Yg;
var Si = nr,
    tc = Si,
    Xg = "Expected a function";

function Ti(t, n) {
    if (typeof t != "function" || n != null && typeof n != "function") throw new TypeError(Xg);
    var r = function() {
        var e = arguments,
            o = n ? n.apply(this, e) : e[0],
            i = r.cache;
        if (i.has(o)) return i.get(o);
        var a = t.apply(this, e);
        return r.cache = i.set(o, a) || i, a
    };
    return r.cache = new(Ti.Cache || tc), r
}
Ti.Cache = tc;
var nc = Ti;
const rc = F(nc);
var Qg = nc,
    Jg = 500;

function Zg(t) {
    var n = Qg(t, function(e) {
            return r.size === Jg && r.clear(), e
        }),
        r = n.cache;
    return n
}
var t2 = Zg,
    n2 = t2,
    r2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    e2 = /\\(\\)?/g,
    o2 = n2(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(r2, function(r, e, o, i) {
            n.push(o ? i.replace(e2, "$1") : e || r)
        }), n
    }),
    i2 = o2,
    ec = Mr,
    a2 = Rr,
    u2 = gt,
    s2 = Lr,
    c2 = 1 / 0,
    oc = ec ? ec.prototype : void 0,
    ic = oc ? oc.toString : void 0;

function ac(t) {
    if (typeof t == "string") return t;
    if (u2(t)) return a2(t, ac) + "";
    if (s2(t)) return ic ? ic.call(t) : "";
    var n = t + "";
    return n == "0" && 1 / t == -c2 ? "-0" : n
}
var l2 = ac,
    f2 = l2;

function h2(t) {
    return t == null ? "" : f2(t)
}
var uc = h2,
    p2 = gt,
    d2 = Ei,
    y2 = i2,
    v2 = uc;

function g2(t, n) {
    return p2(t) ? t : d2(t, n) ? [t] : y2(v2(t))
}
var Le = g2,
    m2 = Lr,
    b2 = 1 / 0;

function _2(t) {
    if (typeof t == "string" || m2(t)) return t;
    var n = t + "";
    return n == "0" && 1 / t == -b2 ? "-0" : n
}
var $r = _2,
    x2 = Le,
    w2 = $r;

function O2(t, n) {
    n = x2(n, t);
    for (var r = 0, e = n.length; t != null && r < e;) t = t[w2(n[r++])];
    return r && r == e ? t : void 0
}
var $e = O2,
    j2 = Ie;

function A2() {
    this.__data__ = new j2, this.size = 0
}
var E2 = A2;

function P2(t) {
    var n = this.__data__,
        r = n.delete(t);
    return this.size = n.size, r
}
var S2 = P2;

function T2(t) {
    return this.__data__.get(t)
}
var k2 = T2;

function M2(t) {
    return this.__data__.has(t)
}
var C2 = M2,
    D2 = Ie,
    N2 = Pi,
    I2 = Si,
    R2 = 200;

function L2(t, n) {
    var r = this.__data__;
    if (r instanceof D2) {
        var e = r.__data__;
        if (!N2 || e.length < R2 - 1) return e.push([t, n]), this.size = ++r.size, this;
        r = this.__data__ = new I2(e)
    }
    return r.set(t, n), this.size = r.size, this
}
var $2 = L2,
    z2 = Ie,
    U2 = E2,
    W2 = S2,
    F2 = k2,
    B2 = C2,
    H2 = $2;

function rr(t) {
    var n = this.__data__ = new z2(t);
    this.size = n.size
}
rr.prototype.clear = U2, rr.prototype.delete = W2, rr.prototype.get = F2, rr.prototype.has = B2, rr.prototype.set = H2;
var sc = rr,
    q2 = "__lodash_hash_undefined__";

function K2(t) {
    return this.__data__.set(t, q2), this
}
var V2 = K2;

function G2(t) {
    return this.__data__.has(t)
}
var Y2 = G2,
    X2 = Si,
    Q2 = V2,
    J2 = Y2;

function ze(t) {
    var n = -1,
        r = t == null ? 0 : t.length;
    for (this.__data__ = new X2; ++n < r;) this.add(t[n])
}
ze.prototype.add = ze.prototype.push = Q2, ze.prototype.has = J2;
var ki = ze;

function Z2(t, n) {
    for (var r = -1, e = t == null ? 0 : t.length; ++r < e;)
        if (n(t[r], r, t)) return !0;
    return !1
}
var cc = Z2;

function tm(t, n) {
    return t.has(n)
}
var Mi = tm,
    nm = ki,
    rm = cc,
    em = Mi,
    om = 1,
    im = 2;

function am(t, n, r, e, o, i) {
    var a = r & om,
        u = t.length,
        s = n.length;
    if (u != s && !(a && s > u)) return !1;
    var c = i.get(t),
        l = i.get(n);
    if (c && l) return c == n && l == t;
    var f = -1,
        h = !0,
        d = r & im ? new nm : void 0;
    for (i.set(t, n), i.set(n, t); ++f < u;) {
        var y = t[f],
            m = n[f];
        if (e) var g = a ? e(m, y, f, n, t, i) : e(y, m, f, t, n, i);
        if (g !== void 0) {
            if (g) continue;
            h = !1;
            break
        }
        if (d) {
            if (!rm(n, function(v, b) {
                    if (!em(d, b) && (y === v || o(y, v, r, e, i))) return d.push(b)
                })) {
                h = !1;
                break
            }
        } else if (!(y === m || o(y, m, r, e, i))) {
            h = !1;
            break
        }
    }
    return i.delete(t), i.delete(n), h
}
var lc = am,
    um = Ft,
    sm = um.Uint8Array,
    cm = sm;

function lm(t) {
    var n = -1,
        r = Array(t.size);
    return t.forEach(function(e, o) {
        r[++n] = [o, e]
    }), r
}
var fm = lm;

function hm(t) {
    var n = -1,
        r = Array(t.size);
    return t.forEach(function(e) {
        r[++n] = e
    }), r
}
var Ci = hm,
    fc = Mr,
    hc = cm,
    pm = Qn,
    dm = lc,
    ym = fm,
    vm = Ci,
    gm = 1,
    mm = 2,
    bm = "[object Boolean]",
    _m = "[object Date]",
    xm = "[object Error]",
    wm = "[object Map]",
    Om = "[object Number]",
    jm = "[object RegExp]",
    Am = "[object Set]",
    Em = "[object String]",
    Pm = "[object Symbol]",
    Sm = "[object ArrayBuffer]",
    Tm = "[object DataView]",
    pc = fc ? fc.prototype : void 0,
    Di = pc ? pc.valueOf : void 0;

function km(t, n, r, e, o, i, a) {
    switch (r) {
        case Tm:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset) return !1;
            t = t.buffer, n = n.buffer;
        case Sm:
            return !(t.byteLength != n.byteLength || !i(new hc(t), new hc(n)));
        case bm:
        case _m:
        case Om:
            return pm(+t, +n);
        case xm:
            return t.name == n.name && t.message == n.message;
        case jm:
        case Em:
            return t == n + "";
        case wm:
            var u = ym;
        case Am:
            var s = e & gm;
            if (u || (u = vm), t.size != n.size && !s) return !1;
            var c = a.get(t);
            if (c) return c == n;
            e |= mm, a.set(t, n);
            var l = dm(u(t), u(n), e, o, i, a);
            return a.delete(t), l;
        case Pm:
            if (Di) return Di.call(t) == Di.call(n)
    }
    return !1
}
var Mm = km;

function Cm(t, n) {
    for (var r = -1, e = n.length, o = t.length; ++r < e;) t[o + r] = n[r];
    return t
}
var Ni = Cm,
    Dm = Ni,
    Nm = gt;

function Im(t, n, r) {
    var e = n(t);
    return Nm(t) ? e : Dm(e, r(t))
}
var dc = Im;

function Rm(t, n) {
    for (var r = -1, e = t == null ? 0 : t.length, o = 0, i = []; ++r < e;) {
        var a = t[r];
        n(a, r, t) && (i[o++] = a)
    }
    return i
}
var Lm = Rm;

function $m() {
    return []
}
var yc = $m,
    zm = Lm,
    Um = yc,
    Wm = Object.prototype,
    Fm = Wm.propertyIsEnumerable,
    vc = Object.getOwnPropertySymbols,
    Bm = vc ? function(t) {
        return t == null ? [] : (t = Object(t), zm(vc(t), function(n) {
            return Fm.call(t, n)
        }))
    } : Um,
    gc = Bm,
    Hm = dc,
    qm = gc,
    Km = In;

function Vm(t) {
    return Hm(t, Km, qm)
}
var Gm = Vm,
    mc = Gm,
    Ym = 1,
    Xm = Object.prototype,
    Qm = Xm.hasOwnProperty;

function Jm(t, n, r, e, o, i) {
    var a = r & Ym,
        u = mc(t),
        s = u.length,
        c = mc(n),
        l = c.length;
    if (s != l && !a) return !1;
    for (var f = s; f--;) {
        var h = u[f];
        if (!(a ? h in n : Qm.call(n, h))) return !1
    }
    var d = i.get(t),
        y = i.get(n);
    if (d && y) return d == n && y == t;
    var m = !0;
    i.set(t, n), i.set(n, t);
    for (var g = a; ++f < s;) {
        h = u[f];
        var v = t[h],
            b = n[h];
        if (e) var _ = a ? e(b, v, h, n, t, i) : e(v, b, h, t, n, i);
        if (!(_ === void 0 ? v === b || o(v, b, r, e, i) : _)) {
            m = !1;
            break
        }
        g || (g = h == "constructor")
    }
    if (m && !g) {
        var w = t.constructor,
            j = n.constructor;
        w != j && "constructor" in t && "constructor" in n && !(typeof w == "function" && w instanceof w && typeof j == "function" && j instanceof j) && (m = !1)
    }
    return i.delete(t), i.delete(n), m
}
var Zm = Jm,
    t6 = Dn,
    n6 = Ft,
    r6 = t6(n6, "DataView"),
    e6 = r6,
    o6 = Dn,
    i6 = Ft,
    a6 = o6(i6, "Promise"),
    u6 = a6,
    s6 = Dn,
    c6 = Ft,
    l6 = s6(c6, "Set"),
    bc = l6,
    f6 = Dn,
    h6 = Ft,
    p6 = f6(h6, "WeakMap"),
    d6 = p6,
    Ii = e6,
    Ri = Pi,
    Li = u6,
    $i = bc,
    zi = d6,
    _c = un,
    er = Ss,
    xc = "[object Map]",
    y6 = "[object Object]",
    wc = "[object Promise]",
    Oc = "[object Set]",
    jc = "[object WeakMap]",
    Ac = "[object DataView]",
    v6 = er(Ii),
    g6 = er(Ri),
    m6 = er(Li),
    b6 = er($i),
    _6 = er(zi),
    Rn = _c;
(Ii && Rn(new Ii(new ArrayBuffer(1))) != Ac || Ri && Rn(new Ri) != xc || Li && Rn(Li.resolve()) != wc || $i && Rn(new $i) != Oc || zi && Rn(new zi) != jc) && (Rn = function(t) {
    var n = _c(t),
        r = n == y6 ? t.constructor : void 0,
        e = r ? er(r) : "";
    if (e) switch (e) {
        case v6:
            return Ac;
        case g6:
            return xc;
        case m6:
            return wc;
        case b6:
            return Oc;
        case _6:
            return jc
    }
    return n
});
var Ec = Rn,
    Ui = sc,
    x6 = lc,
    w6 = Mm,
    O6 = Zm,
    Pc = Ec,
    Sc = gt,
    Tc = mi,
    j6 = _i,
    A6 = 1,
    kc = "[object Arguments]",
    Mc = "[object Array]",
    Ue = "[object Object]",
    E6 = Object.prototype,
    Cc = E6.hasOwnProperty;

function P6(t, n, r, e, o, i) {
    var a = Sc(t),
        u = Sc(n),
        s = a ? Mc : Pc(t),
        c = u ? Mc : Pc(n);
    s = s == kc ? Ue : s, c = c == kc ? Ue : c;
    var l = s == Ue,
        f = c == Ue,
        h = s == c;
    if (h && Tc(t)) {
        if (!Tc(n)) return !1;
        a = !0, l = !1
    }
    if (h && !l) return i || (i = new Ui), a || j6(t) ? x6(t, n, r, e, o, i) : w6(t, n, s, r, e, o, i);
    if (!(r & A6)) {
        var d = l && Cc.call(t, "__wrapped__"),
            y = f && Cc.call(n, "__wrapped__");
        if (d || y) {
            var m = d ? t.value() : t,
                g = y ? n.value() : n;
            return i || (i = new Ui), o(m, g, r, e, i)
        }
    }
    return h ? (i || (i = new Ui), O6(t, n, r, e, o, i)) : !1
}
var S6 = P6,
    T6 = S6,
    Dc = qt;

function Nc(t, n, r, e, o) {
    return t === n ? !0 : t == null || n == null || !Dc(t) && !Dc(n) ? t !== t && n !== n : T6(t, n, r, e, Nc, o)
}
var Wi = Nc,
    k6 = sc,
    M6 = Wi,
    C6 = 1,
    D6 = 2;

function N6(t, n, r, e) {
    var o = r.length,
        i = o,
        a = !e;
    if (t == null) return !i;
    for (t = Object(t); o--;) {
        var u = r[o];
        if (a && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1
    }
    for (; ++o < i;) {
        u = r[o];
        var s = u[0],
            c = t[s],
            l = u[1];
        if (a && u[2]) {
            if (c === void 0 && !(s in t)) return !1
        } else {
            var f = new k6;
            if (e) var h = e(c, l, s, t, n, f);
            if (!(h === void 0 ? M6(l, c, C6 | D6, e, f) : h)) return !1
        }
    }
    return !0
}
var I6 = N6,
    R6 = Bt;

function L6(t) {
    return t === t && !R6(t)
}
var Ic = L6,
    $6 = Ic,
    z6 = In;

function U6(t) {
    for (var n = z6(t), r = n.length; r--;) {
        var e = n[r],
            o = t[e];
        n[r] = [e, o, $6(o)]
    }
    return n
}
var W6 = U6;

function F6(t, n) {
    return function(r) {
        return r == null ? !1 : r[t] === n && (n !== void 0 || t in Object(r))
    }
}
var Rc = F6,
    B6 = I6,
    H6 = W6,
    q6 = Rc;

function K6(t) {
    var n = H6(t);
    return n.length == 1 && n[0][2] ? q6(n[0][0], n[0][1]) : function(r) {
        return r === t || B6(r, t, n)
    }
}
var V6 = K6,
    G6 = $e;

function Y6(t, n, r) {
    var e = t == null ? void 0 : G6(t, n);
    return e === void 0 ? r : e
}
var X6 = Y6;

function Q6(t, n) {
    return t != null && n in Object(t)
}
var J6 = Q6,
    Z6 = Le,
    tb = Te,
    nb = gt,
    rb = Ee,
    eb = gi,
    ob = $r;

function ib(t, n, r) {
    n = Z6(n, t);
    for (var e = -1, o = n.length, i = !1; ++e < o;) {
        var a = ob(n[e]);
        if (!(i = t != null && r(t, a))) break;
        t = t[a]
    }
    return i || ++e != o ? i : (o = t == null ? 0 : t.length, !!o && eb(o) && rb(a, o) && (nb(t) || tb(t)))
}
var ab = ib,
    ub = J6,
    sb = ab;

function cb(t, n) {
    return t != null && sb(t, n, ub)
}
var Lc = cb,
    lb = Wi,
    fb = X6,
    hb = Lc,
    pb = Ei,
    db = Ic,
    yb = Rc,
    vb = $r,
    gb = 1,
    mb = 2;

function bb(t, n) {
    return pb(t) && db(n) ? yb(vb(t), n) : function(r) {
        var e = fb(r, t);
        return e === void 0 && e === n ? hb(r, t) : lb(n, e, gb | mb)
    }
}
var _b = bb;

function xb(t) {
    return function(n) {
        return n == null ? void 0 : n[t]
    }
}
var wb = xb,
    Ob = $e;

function jb(t) {
    return function(n) {
        return Ob(n, t)
    }
}
var Ab = jb,
    Eb = wb,
    Pb = Ab,
    Sb = Ei,
    Tb = $r;

function kb(t) {
    return Sb(t) ? Eb(Tb(t)) : Pb(t)
}
var $c = kb;
const zc = F($c);
var Mb = V6,
    Cb = _b,
    Db = Dr,
    Nb = gt,
    Ib = $c;

function Rb(t) {
    return typeof t == "function" ? t : t == null ? Db : typeof t == "object" ? Nb(t) ? Cb(t[0], t[1]) : Mb(t) : Ib(t)
}
var wn = Rb;

function Lb(t) {
    return function(n, r, e) {
        for (var o = -1, i = Object(n), a = e(n), u = a.length; u--;) {
            var s = a[t ? u : ++o];
            if (r(i[s], s, i) === !1) break
        }
        return n
    }
}
var $b = Lb,
    zb = $b,
    Ub = zb(),
    Wb = Ub,
    Fb = Wb,
    Bb = In;

function Hb(t, n) {
    return t && Fb(t, n, Bb)
}
var qb = Hb,
    Kb = Ht;

function Vb(t, n) {
    return function(r, e) {
        if (r == null) return r;
        if (!Kb(r)) return t(r, e);
        for (var o = r.length, i = n ? o : -1, a = Object(r);
            (n ? i-- : ++i < o) && e(a[i], i, a) !== !1;);
        return r
    }
}
var Gb = Vb,
    Yb = qb,
    Xb = Gb,
    Qb = Xb(Yb),
    Fi = Qb,
    Jb = Fi,
    Zb = Ht;

function t7(t, n) {
    var r = -1,
        e = Zb(t) ? Array(t.length) : [];
    return Jb(t, function(o, i, a) {
        e[++r] = n(o, i, a)
    }), e
}
var n7 = t7;

function r7(t, n) {
    var r = t.length;
    for (t.sort(n); r--;) t[r] = t[r].value;
    return t
}
var e7 = r7,
    Uc = Lr;

function o7(t, n) {
    if (t !== n) {
        var r = t !== void 0,
            e = t === null,
            o = t === t,
            i = Uc(t),
            a = n !== void 0,
            u = n === null,
            s = n === n,
            c = Uc(n);
        if (!u && !c && !i && t > n || i && a && s && !u && !c || e && a && s || !r && s || !o) return 1;
        if (!e && !i && !c && t < n || c && r && o && !e && !i || u && r && o || !a && o || !s) return -1
    }
    return 0
}
var i7 = o7,
    a7 = i7;

function u7(t, n, r) {
    for (var e = -1, o = t.criteria, i = n.criteria, a = o.length, u = r.length; ++e < a;) {
        var s = a7(o[e], i[e]);
        if (s) {
            if (e >= u) return s;
            var c = r[e];
            return s * (c == "desc" ? -1 : 1)
        }
    }
    return t.index - n.index
}
var s7 = u7,
    Bi = Rr,
    c7 = $e,
    l7 = wn,
    f7 = n7,
    h7 = e7,
    p7 = Nr,
    d7 = s7,
    y7 = Dr,
    v7 = gt;

function g7(t, n, r) {
    n.length ? n = Bi(n, function(i) {
        return v7(i) ? function(a) {
            return c7(a, i.length === 1 ? i[0] : i)
        } : i
    }) : n = [y7];
    var e = -1;
    n = Bi(n, p7(l7));
    var o = f7(t, function(i, a, u) {
        var s = Bi(n, function(c) {
            return c(i)
        });
        return {
            criteria: s,
            index: ++e,
            value: i
        }
    });
    return h7(o, function(i, a) {
        return d7(i, a, r)
    })
}
var m7 = g7,
    b7 = m7,
    Wc = gt;

function _7(t, n, r, e) {
    return t == null ? [] : (Wc(n) || (n = n == null ? [] : [n]), r = e ? void 0 : r, Wc(r) || (r = r == null ? [] : [r]), b7(t, n, r))
}
var x7 = _7;
const Hi = F(x7);
var w7 = Us,
    O7 = w7(Object.getPrototypeOf, Object),
    Fc = O7,
    j7 = un,
    A7 = Fc,
    E7 = qt,
    P7 = "[object Object]",
    S7 = Function.prototype,
    T7 = Object.prototype,
    Bc = S7.toString,
    k7 = T7.hasOwnProperty,
    M7 = Bc.call(Object);

function C7(t) {
    if (!E7(t) || j7(t) != P7) return !1;
    var n = A7(t);
    if (n === null) return !0;
    var r = k7.call(n, "constructor") && n.constructor;
    return typeof r == "function" && r instanceof r && Bc.call(r) == M7
}
var D7 = C7;
const rt = F(D7);

function qi(t, n, r) {
    t.prototype = n.prototype = r, r.constructor = t
}

function Hc(t, n) {
    var r = Object.create(t.prototype);
    for (var e in n) r[e] = n[e];
    return r
}

function zr() {}
var Ur = .7,
    We = 1 / Ur,
    or = "\\s*([+-]?\\d+)\\s*",
    Wr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    Kt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    N7 = /^#([0-9a-f]{3,8})$/,
    I7 = new RegExp(`^rgb\\(${or},${or},${or}\\)$`),
    R7 = new RegExp(`^rgb\\(${Kt},${Kt},${Kt}\\)$`),
    L7 = new RegExp(`^rgba\\(${or},${or},${or},${Wr}\\)$`),
    $7 = new RegExp(`^rgba\\(${Kt},${Kt},${Kt},${Wr}\\)$`),
    z7 = new RegExp(`^hsl\\(${Wr},${Kt},${Kt}\\)$`),
    U7 = new RegExp(`^hsla\\(${Wr},${Kt},${Kt},${Wr}\\)$`),
    qc = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
qi(zr, Fr, {
    copy(t) {
        return Object.assign(new this.constructor, this, t)
    },
    displayable() {
        return this.rgb().displayable()
    },
    hex: Kc,
    formatHex: Kc,
    formatHex8: W7,
    formatHsl: F7,
    formatRgb: Vc,
    toString: Vc
});

function Kc() {
    return this.rgb().formatHex()
}

function W7() {
    return this.rgb().formatHex8()
}

function F7() {
    return Jc(this).formatHsl()
}

function Vc() {
    return this.rgb().formatRgb()
}

function Fr(t) {
    var n, r;
    return t = (t + "").trim().toLowerCase(), (n = N7.exec(t)) ? (r = n[1].length, n = parseInt(n[1], 16), r === 6 ? Gc(n) : r === 3 ? new xt(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : r === 8 ? Fe(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : r === 4 ? Fe(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = I7.exec(t)) ? new xt(n[1], n[2], n[3], 1) : (n = R7.exec(t)) ? new xt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = L7.exec(t)) ? Fe(n[1], n[2], n[3], n[4]) : (n = $7.exec(t)) ? Fe(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = z7.exec(t)) ? Qc(n[1], n[2] / 100, n[3] / 100, 1) : (n = U7.exec(t)) ? Qc(n[1], n[2] / 100, n[3] / 100, n[4]) : qc.hasOwnProperty(t) ? Gc(qc[t]) : t === "transparent" ? new xt(NaN, NaN, NaN, 0) : null
}

function Gc(t) {
    return new xt(t >> 16 & 255, t >> 8 & 255, t & 255, 1)
}

function Fe(t, n, r, e) {
    return e <= 0 && (t = n = r = NaN), new xt(t, n, r, e)
}

function B7(t) {
    return t instanceof zr || (t = Fr(t)), t ? (t = t.rgb(), new xt(t.r, t.g, t.b, t.opacity)) : new xt
}

function Ki(t, n, r, e) {
    return arguments.length === 1 ? B7(t) : new xt(t, n, r, e != null ? e : 1)
}

function xt(t, n, r, e) {
    this.r = +t, this.g = +n, this.b = +r, this.opacity = +e
}
qi(xt, Ki, Hc(zr, {
    brighter(t) {
        return t = t == null ? We : Math.pow(We, t), new xt(this.r * t, this.g * t, this.b * t, this.opacity)
    },
    darker(t) {
        return t = t == null ? Ur : Math.pow(Ur, t), new xt(this.r * t, this.g * t, this.b * t, this.opacity)
    },
    rgb() {
        return this
    },
    clamp() {
        return new xt(Ln(this.r), Ln(this.g), Ln(this.b), Be(this.opacity))
    },
    displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
    },
    hex: Yc,
    formatHex: Yc,
    formatHex8: H7,
    formatRgb: Xc,
    toString: Xc
}));

function Yc() {
    return `#${$n(this.r)}${$n(this.g)}${$n(this.b)}`
}

function H7() {
    return `#${$n(this.r)}${$n(this.g)}${$n(this.b)}${$n((isNaN(this.opacity)?1:this.opacity)*255)}`
}

function Xc() {
    const t = Be(this.opacity);
    return `${t===1?"rgb(":"rgba("}${Ln(this.r)}, ${Ln(this.g)}, ${Ln(this.b)}${t===1?")":`, ${t})`}`
}

function Be(t) {
    return isNaN(t) ? 1 : Math.max(0, Math.min(1, t))
}

function Ln(t) {
    return Math.max(0, Math.min(255, Math.round(t) || 0))
}

function $n(t) {
    return t = Ln(t), (t < 16 ? "0" : "") + t.toString(16)
}

function Qc(t, n, r, e) {
    return e <= 0 ? t = n = r = NaN : r <= 0 || r >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Lt(t, n, r, e)
}

function Jc(t) {
    if (t instanceof Lt) return new Lt(t.h, t.s, t.l, t.opacity);
    if (t instanceof zr || (t = Fr(t)), !t) return new Lt;
    if (t instanceof Lt) return t;
    t = t.rgb();
    var n = t.r / 255,
        r = t.g / 255,
        e = t.b / 255,
        o = Math.min(n, r, e),
        i = Math.max(n, r, e),
        a = NaN,
        u = i - o,
        s = (i + o) / 2;
    return u ? (n === i ? a = (r - e) / u + (r < e) * 6 : r === i ? a = (e - n) / u + 2 : a = (n - r) / u + 4, u /= s < .5 ? i + o : 2 - i - o, a *= 60) : u = s > 0 && s < 1 ? 0 : a, new Lt(a, u, s, t.opacity)
}

function q7(t, n, r, e) {
    return arguments.length === 1 ? Jc(t) : new Lt(t, n, r, e != null ? e : 1)
}

function Lt(t, n, r, e) {
    this.h = +t, this.s = +n, this.l = +r, this.opacity = +e
}
qi(Lt, q7, Hc(zr, {
    brighter(t) {
        return t = t == null ? We : Math.pow(We, t), new Lt(this.h, this.s, this.l * t, this.opacity)
    },
    darker(t) {
        return t = t == null ? Ur : Math.pow(Ur, t), new Lt(this.h, this.s, this.l * t, this.opacity)
    },
    rgb() {
        var t = this.h % 360 + (this.h < 0) * 360,
            n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
            r = this.l,
            e = r + (r < .5 ? r : 1 - r) * n,
            o = 2 * r - e;
        return new xt(Vi(t >= 240 ? t - 240 : t + 120, o, e), Vi(t, o, e), Vi(t < 120 ? t + 240 : t - 120, o, e), this.opacity)
    },
    clamp() {
        return new Lt(Zc(this.h), He(this.s), He(this.l), Be(this.opacity))
    },
    displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
    },
    formatHsl() {
        const t = Be(this.opacity);
        return `${t===1?"hsl(":"hsla("}${Zc(this.h)}, ${He(this.s)*100}%, ${He(this.l)*100}%${t===1?")":`, ${t})`}`
    }
}));

function Zc(t) {
    return t = (t || 0) % 360, t < 0 ? t + 360 : t
}

function He(t) {
    return Math.max(0, Math.min(1, t || 0))
}

function Vi(t, n, r) {
    return (t < 60 ? n + (r - n) * t / 60 : t < 180 ? r : t < 240 ? n + (r - n) * (240 - t) / 60 : n) * 255
}
const Gi = t => () => t;

function K7(t, n) {
    return function(r) {
        return t + r * n
    }
}

function V7(t, n, r) {
    return t = Math.pow(t, r), n = Math.pow(n, r) - t, r = 1 / r,
        function(e) {
            return Math.pow(t + e * n, r)
        }
}

function G7(t) {
    return (t = +t) == 1 ? tl : function(n, r) {
        return r - n ? V7(n, r, t) : Gi(isNaN(n) ? r : n)
    }
}

function tl(t, n) {
    var r = n - t;
    return r ? K7(t, r) : Gi(isNaN(t) ? n : t)
}
const nl = function t(n) {
    var r = G7(n);

    function e(o, i) {
        var a = r((o = Ki(o)).r, (i = Ki(i)).r),
            u = r(o.g, i.g),
            s = r(o.b, i.b),
            c = tl(o.opacity, i.opacity);
        return function(l) {
            return o.r = a(l), o.g = u(l), o.b = s(l), o.opacity = c(l), o + ""
        }
    }
    return e.gamma = t, e
}(1);

function Y7(t, n) {
    n || (n = []);
    var r = t ? Math.min(n.length, t.length) : 0,
        e = n.slice(),
        o;
    return function(i) {
        for (o = 0; o < r; ++o) e[o] = t[o] * (1 - i) + n[o] * i;
        return e
    }
}

function X7(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView)
}

function Q7(t, n) {
    var r = n ? n.length : 0,
        e = t ? Math.min(r, t.length) : 0,
        o = new Array(e),
        i = new Array(r),
        a;
    for (a = 0; a < e; ++a) o[a] = Vt(t[a], n[a]);
    for (; a < r; ++a) i[a] = n[a];
    return function(u) {
        for (a = 0; a < e; ++a) i[a] = o[a](u);
        return i
    }
}

function J7(t, n) {
    var r = new Date;
    return t = +t, n = +n,
        function(e) {
            return r.setTime(t * (1 - e) + n * e), r
        }
}

function qe(t, n) {
    return t = +t, n = +n,
        function(r) {
            return t * (1 - r) + n * r
        }
}

function Z7(t, n) {
    var r = {},
        e = {},
        o;
    (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
    for (o in n) o in t ? r[o] = Vt(t[o], n[o]) : e[o] = n[o];
    return function(i) {
        for (o in r) e[o] = r[o](i);
        return e
    }
}
var Yi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    Xi = new RegExp(Yi.source, "g");

function t3(t) {
    return function() {
        return t
    }
}

function n3(t) {
    return function(n) {
        return t(n) + ""
    }
}

function r3(t, n) {
    var r = Yi.lastIndex = Xi.lastIndex = 0,
        e, o, i, a = -1,
        u = [],
        s = [];
    for (t = t + "", n = n + "";
        (e = Yi.exec(t)) && (o = Xi.exec(n));)(i = o.index) > r && (i = n.slice(r, i), u[a] ? u[a] += i : u[++a] = i), (e = e[0]) === (o = o[0]) ? u[a] ? u[a] += o : u[++a] = o : (u[++a] = null, s.push({
        i: a,
        x: qe(e, o)
    })), r = Xi.lastIndex;
    return r < n.length && (i = n.slice(r), u[a] ? u[a] += i : u[++a] = i), u.length < 2 ? s[0] ? n3(s[0].x) : t3(n) : (n = s.length, function(c) {
        for (var l = 0, f; l < n; ++l) u[(f = s[l]).i] = f.x(c);
        return u.join("")
    })
}

function Vt(t, n) {
    var r = typeof n,
        e;
    return n == null || r === "boolean" ? Gi(n) : (r === "number" ? qe : r === "string" ? (e = Fr(n)) ? (n = e, nl) : r3 : n instanceof Fr ? nl : n instanceof Date ? J7 : X7(n) ? Y7 : Array.isArray(n) ? Q7 : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Z7 : qe)(t, n)
}

function Qi(t, n) {
    return t = +t, n = +n,
        function(r) {
            return Math.round(t * (1 - r) + n * r)
        }
}

function e3(t, n) {
    n === void 0 && (n = t, t = Vt);
    for (var r = 0, e = n.length - 1, o = n[0], i = new Array(e < 0 ? 0 : e); r < e;) i[r] = t(o, o = n[++r]);
    return function(a) {
        var u = Math.max(0, Math.min(e - 1, Math.floor(a *= e)));
        return i[u](a - u)
    }
}
var Ke = function(t) {
        if (t !== null) switch (typeof t) {
            case "undefined":
                return !1;
            case "number":
                return !isNaN(t) && t !== Number.POSITIVE_INFINITY && t !== Number.NEGATIVE_INFINITY;
            case "string":
                return !0;
            case "boolean":
                return !1;
            case "object":
                return t instanceof Date || Array.isArray(t) || rt(t);
            case "function":
                return !0
        }
        return !1
    },
    rl = function(t, n) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        return function(e) {
            return e < r ? t : n
        }
    },
    el = function(t, n) {
        return function(r) {
            return r >= 1 ? n : function() {
                var e = typeof t == "function" ? t.apply(this, arguments) : t,
                    o = typeof n == "function" ? n.apply(this, arguments) : n;
                return Vt(e, o)(r)
            }
        }
    },
    ol = function(t, n) {
        var r = function(u, s) {
                return u === s || !Ke(u) || !Ke(s) ? rl(u, s) : typeof u == "function" || typeof s == "function" ? el(u, s) : typeof u == "object" && rt(u) || typeof s == "object" && rt(s) ? ol(u, s) : Vt(u, s)
            },
            e = function(u) {
                return Array.isArray(u) ? Hi(u, "key") : u
            },
            o = {},
            i = {},
            a;
        (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
        for (a in n) a in t ? o[a] = r(e(t[a]), e(n[a])) : i[a] = n[a];
        return function(u) {
            for (a in o) i[a] = o[a](u);
            return i
        }
    },
    o3 = function(t, n) {
        var r = function(e) {
            return typeof e == "string" ? e.replace(/,/g, "") : e
        };
        return Vt(r(t), r(n))
    },
    i3 = function(t, n) {
        return t === n || !Ke(t) || !Ke(n) ? rl(t, n) : typeof t == "function" || typeof n == "function" ? el(t, n) : rt(t) || rt(n) ? ol(t, n) : typeof t == "string" || typeof n == "string" ? o3(t, n) : Vt(t, n)
    },
    ir = 0,
    Br = 0,
    Hr = 0,
    il = 1e3,
    Ve, qr, Ge = 0,
    zn = 0,
    Ye = 0,
    Kr = typeof performance == "object" && performance.now ? performance : Date,
    al = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
        setTimeout(t, 17)
    };

function Xe() {
    return zn || (al(a3), zn = Kr.now() + Ye)
}

function a3() {
    zn = 0
}

function Ji() {
    this._call = this._time = this._next = null
}
Ji.prototype = ul.prototype = {
    constructor: Ji,
    restart: function(t, n, r) {
        if (typeof t != "function") throw new TypeError("callback is not a function");
        r = (r == null ? Xe() : +r) + (n == null ? 0 : +n), !this._next && qr !== this && (qr ? qr._next = this : Ve = this, qr = this), this._call = t, this._time = r, Zi()
    },
    stop: function() {
        this._call && (this._call = null, this._time = 1 / 0, Zi())
    }
};

function ul(t, n, r) {
    var e = new Ji;
    return e.restart(t, n, r), e
}

function u3() {
    Xe(), ++ir;
    for (var t = Ve, n; t;)(n = zn - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
    --ir
}

function sl() {
    zn = (Ge = Kr.now()) + Ye, ir = Br = 0;
    try {
        u3()
    } finally {
        ir = 0, c3(), zn = 0
    }
}

function s3() {
    var t = Kr.now(),
        n = t - Ge;
    n > il && (Ye -= n, Ge = t)
}

function c3() {
    for (var t, n = Ve, r, e = 1 / 0; n;) n._call ? (e > n._time && (e = n._time), t = n, n = n._next) : (r = n._next, n._next = null, n = t ? t._next = r : Ve = r);
    qr = t, Zi(e)
}

function Zi(t) {
    if (!ir) {
        Br && (Br = clearTimeout(Br));
        var n = t - zn;
        n > 24 ? (t < 1 / 0 && (Br = setTimeout(sl, t - Kr.now() - Ye)), Hr && (Hr = clearInterval(Hr))) : (Hr || (Ge = Kr.now(), Hr = setInterval(s3, il)), ir = 1, al(sl))
    }
}

function l3(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function cl(t, n) {
    for (var r = 0; r < n.length; r++) {
        var e = n[r];
        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
    }
}

function f3(t, n, r) {
    return n && cl(t.prototype, n), r && cl(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}
var ll = function() {
        function t() {
            var n = this;
            l3(this, t), this.shouldAnimate = void 0, this.subscribers = void 0, this.activeSubscriptions = void 0, this.timer = void 0, this.loop = function() {
                n.subscribers.forEach(function(r) {
                    r.callback(Xe() - r.startTime, r.duration)
                })
            }, this.shouldAnimate = !0, this.subscribers = [], this.timer = null, this.activeSubscriptions = 0
        }
        return f3(t, [{
            key: "bypassAnimation",
            value: function() {
                this.shouldAnimate = !1
            }
        }, {
            key: "resumeAnimation",
            value: function() {
                this.shouldAnimate = !0
            }
        }, {
            key: "start",
            value: function() {
                this.timer || (this.timer = ul(this.loop))
            }
        }, {
            key: "stop",
            value: function() {
                this.timer && (this.timer.stop(), this.timer = null)
            }
        }, {
            key: "subscribe",
            value: function(n, r) {
                r = this.shouldAnimate ? r : 0;
                var e = this.subscribers.push({
                    startTime: Xe(),
                    callback: n,
                    duration: r
                });
                return this.activeSubscriptions++, this.start(), e
            }
        }, {
            key: "unsubscribe",
            value: function(n) {
                n !== null && this.subscribers[n - 1] && (delete this.subscribers[n - 1], this.activeSubscriptions--), this.activeSubscriptions === 0 && this.stop()
            }
        }]), t
    }(),
    fl = O.createContext({
        transitionTimer: new ll,
        animationTimer: new ll
    });
fl.displayName = "TimerContext";
const Qe = fl;
var h3 = typeof Element < "u",
    p3 = typeof Map == "function",
    d3 = typeof Set == "function",
    y3 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;

function Je(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
        if (t.constructor !== n.constructor) return !1;
        var r, e, o;
        if (Array.isArray(t)) {
            if (r = t.length, r != n.length) return !1;
            for (e = r; e-- !== 0;)
                if (!Je(t[e], n[e])) return !1;
            return !0
        }
        var i;
        if (p3 && t instanceof Map && n instanceof Map) {
            if (t.size !== n.size) return !1;
            for (i = t.entries(); !(e = i.next()).done;)
                if (!n.has(e.value[0])) return !1;
            for (i = t.entries(); !(e = i.next()).done;)
                if (!Je(e.value[1], n.get(e.value[0]))) return !1;
            return !0
        }
        if (d3 && t instanceof Set && n instanceof Set) {
            if (t.size !== n.size) return !1;
            for (i = t.entries(); !(e = i.next()).done;)
                if (!n.has(e.value[0])) return !1;
            return !0
        }
        if (y3 && ArrayBuffer.isView(t) && ArrayBuffer.isView(n)) {
            if (r = t.length, r != n.length) return !1;
            for (e = r; e-- !== 0;)
                if (t[e] !== n[e]) return !1;
            return !0
        }
        if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
        if (t.valueOf !== Object.prototype.valueOf && typeof t.valueOf == "function" && typeof n.valueOf == "function") return t.valueOf() === n.valueOf();
        if (t.toString !== Object.prototype.toString && typeof t.toString == "function" && typeof n.toString == "function") return t.toString() === n.toString();
        if (o = Object.keys(t), r = o.length, r !== Object.keys(n).length) return !1;
        for (e = r; e-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(n, o[e])) return !1;
        if (h3 && t instanceof Element) return !1;
        for (e = r; e-- !== 0;)
            if (!((o[e] === "_owner" || o[e] === "__v" || o[e] === "__o") && t.$$typeof) && !Je(t[o[e]], n[o[e]])) return !1;
        return !0
    }
    return t !== t && n !== n
}
var v3 = function(t, n) {
    try {
        return Je(t, n)
    } catch (r) {
        if ((r.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
        throw r
    }
};
const Gt = F(v3);

function g3(t) {
    return x3(t) || _3(t) || b3(t) || m3()
}

function m3() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function b3(t, n) {
    if (t) {
        if (typeof t == "string") return ta(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ta(t, n)
    }
}

function _3(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
}

function x3(t) {
    if (Array.isArray(t)) return ta(t)
}

function ta(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e
}

function w3(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function hl(t, n) {
    for (var r = 0; r < n.length; r++) {
        var e = n[r];
        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
    }
}

function O3(t, n, r) {
    return n && hl(t.prototype, n), r && hl(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function j3(t, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), n && na(t, n)
}

function na(t, n) {
    return na = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, e) {
        return r.__proto__ = e, r
    }, na(t, n)
}

function A3(t) {
    var n = S3();
    return function() {
        var r = Ze(t),
            e;
        if (n) {
            var o = Ze(this).constructor;
            e = Reflect.construct(r, arguments, o)
        } else e = r.apply(this, arguments);
        return E3(this, e)
    }
}

function E3(t, n) {
    if (n && (typeof n == "object" || typeof n == "function")) return n;
    if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return P3(t)
}

function P3(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function S3() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch (t) {
        return !1
    }
}

function Ze(t) {
    return Ze = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Ze(t)
}
var Vr = function(t) {
    j3(r, t);
    var n = A3(r);

    function r(e, o) {
        var i;
        return w3(this, r), i = n.call(this, e, o), i.interpolator = void 0, i.queue = void 0, i.ease = void 0, i.timer = void 0, i.loopID = void 0, i.functionToBeRunEachFrame = function(a, u) {
            u = u !== void 0 ? u : i.props.duration;
            var s = u ? a / u : 1;
            if (s >= 1) {
                i.setState({
                    data: i.interpolator(1),
                    animationInfo: {
                        progress: 1,
                        animating: !1,
                        terminating: !0
                    }
                }), i.loopID && i.timer.unsubscribe(i.loopID), i.queue.shift(), i.traverseQueue();
                return
            }
            i.setState({
                data: i.interpolator(i.ease(s)),
                animationInfo: {
                    progress: s,
                    animating: s < 1
                }
            })
        }, i.state = {
            data: Array.isArray(i.props.data) ? i.props.data[0] : i.props.data,
            animationInfo: {
                progress: 0,
                animating: !1
            }
        }, i.interpolator = null, i.queue = Array.isArray(i.props.data) ? i.props.data.slice(1) : [], i.ease = yv[i.toNewName(i.props.easing)], i.timer = i.context.animationTimer, i
    }
    return O3(r, [{
        key: "componentDidMount",
        value: function() {
            this.queue.length && this.traverseQueue()
        }
    }, {
        key: "componentDidUpdate",
        value: function(e) {
            var o = Gt(this.props, e);
            if (!o)
                if (this.interpolator && this.state.animationInfo && this.state.animationInfo.progress < 1) this.setState({
                    data: this.interpolator(1),
                    animationInfo: {
                        progress: 1,
                        animating: !1,
                        terminating: !0
                    }
                });
                else {
                    if (this.timer.unsubscribe(this.loopID), !Array.isArray(this.props.data)) this.queue.length = 0, this.queue.push(this.props.data);
                    else {
                        var i;
                        (i = this.queue).push.apply(i, g3(this.props.data))
                    }
                    this.traverseQueue()
                }
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            this.loopID ? this.timer.unsubscribe(this.loopID) : this.timer.stop()
        }
    }, {
        key: "toNewName",
        value: function(e) {
            var o = function(i) {
                return i && i[0].toUpperCase() + i.slice(1)
            };
            return "ease".concat(o(e))
        }
    }, {
        key: "traverseQueue",
        value: function() {
            var e = this;
            if (this.queue.length) {
                var o = this.queue[0];
                this.interpolator = i3(this.state.data, o), this.props.delay ? setTimeout(function() {
                    e.loopID = e.timer.subscribe(e.functionToBeRunEachFrame, e.props.duration)
                }, this.props.delay) : this.loopID = this.timer.subscribe(this.functionToBeRunEachFrame, this.props.duration)
            } else this.props.onEnd && this.props.onEnd()
        }
    }, {
        key: "render",
        value: function() {
            return this.props.children(this.state.data, this.state.animationInfo)
        }
    }]), r
}(O.Component);
Vr.displayName = "VictoryAnimation", Vr.propTypes = {
    children: p.func,
    data: p.oneOfType([p.object, p.array]),
    delay: p.number,
    duration: p.number,
    easing: p.oneOf(["back", "backIn", "backOut", "backInOut", "bounce", "bounceIn", "bounceOut", "bounceInOut", "circle", "circleIn", "circleOut", "circleInOut", "linear", "linearIn", "linearOut", "linearInOut", "cubic", "cubicIn", "cubicOut", "cubicInOut", "elastic", "elasticIn", "elasticOut", "elasticInOut", "exp", "expIn", "expOut", "expInOut", "poly", "polyIn", "polyOut", "polyInOut", "quad", "quadIn", "quadOut", "quadInOut", "sin", "sinIn", "sinOut", "sinInOut"]),
    onEnd: p.func
}, Vr.defaultProps = {
    data: {},
    delay: 0,
    duration: 1e3,
    easing: "quadInOut"
}, Vr.contextType = Qe;
var T3 = uc,
    k3 = 0;

function M3(t) {
    var n = ++k3;
    return T3(t) + n
}
var C3 = M3;
const ra = F(C3);

function D3(t) {
    var n = [];
    if (t != null)
        for (var r in Object(t)) n.push(r);
    return n
}
var N3 = D3,
    I3 = Bt,
    R3 = Se,
    L3 = N3,
    $3 = Object.prototype,
    z3 = $3.hasOwnProperty;

function U3(t) {
    if (!I3(t)) return L3(t);
    var n = R3(t),
        r = [];
    for (var e in t) e == "constructor" && (n || !z3.call(t, e)) || r.push(e);
    return r
}
var W3 = U3,
    F3 = zs,
    B3 = W3,
    H3 = Ht;

function q3(t) {
    return H3(t) ? F3(t, !0) : B3(t)
}
var pl = q3,
    K3 = Ae,
    V3 = Qn,
    G3 = Pe,
    Y3 = pl,
    dl = Object.prototype,
    X3 = dl.hasOwnProperty,
    Q3 = K3(function(t, n) {
        t = Object(t);
        var r = -1,
            e = n.length,
            o = e > 2 ? n[2] : void 0;
        for (o && G3(n[0], n[1], o) && (e = 1); ++r < e;)
            for (var i = n[r], a = Y3(i), u = -1, s = a.length; ++u < s;) {
                var c = a[u],
                    l = t[c];
                (l === void 0 || V3(l, dl[c]) && !X3.call(t, c)) && (t[c] = i[c])
            }
        return t
    }),
    J3 = Q3;
const $ = F(J3);
var Z3 = un,
    t_ = qt,
    n_ = "[object RegExp]";

function r_(t) {
    return t_(t) && Z3(t) == n_
}
var e_ = r_,
    o_ = e_,
    i_ = Nr,
    yl = bi,
    vl = yl && yl.isRegExp,
    a_ = vl ? i_(vl) : o_,
    u_ = a_;
const gl = F(u_);
var s_ = wn,
    c_ = Ht,
    l_ = In;

function f_(t) {
    return function(n, r, e) {
        var o = Object(n);
        if (!c_(n)) {
            var i = s_(r);
            n = l_(n), r = function(u) {
                return i(o[u], u, o)
            }
        }
        var a = t(n, r, e);
        return a > -1 ? o[i ? n[a] : a] : void 0
    }
}
var h_ = f_;

function p_(t, n, r, e) {
    for (var o = t.length, i = r + (e ? 1 : -1); e ? i-- : ++i < o;)
        if (n(t[i], i, t)) return i;
    return -1
}
var ml = p_,
    d_ = /\s/;

function y_(t) {
    for (var n = t.length; n-- && d_.test(t.charAt(n)););
    return n
}
var v_ = y_,
    g_ = v_,
    m_ = /^\s+/;

function b_(t) {
    return t && t.slice(0, g_(t) + 1).replace(m_, "")
}
var __ = b_,
    x_ = __,
    bl = Bt,
    w_ = Lr,
    _l = 0 / 0,
    O_ = /^[-+]0x[0-9a-f]+$/i,
    j_ = /^0b[01]+$/i,
    A_ = /^0o[0-7]+$/i,
    E_ = parseInt;

function P_(t) {
    if (typeof t == "number") return t;
    if (w_(t)) return _l;
    if (bl(t)) {
        var n = typeof t.valueOf == "function" ? t.valueOf() : t;
        t = bl(n) ? n + "" : n
    }
    if (typeof t != "string") return t === 0 ? t : +t;
    t = x_(t);
    var r = j_.test(t);
    return r || A_.test(t) ? E_(t.slice(2), r ? 2 : 8) : O_.test(t) ? _l : +t
}
var xl = P_,
    S_ = xl,
    wl = 1 / 0,
    T_ = 17976931348623157e292;

function k_(t) {
    if (!t) return t === 0 ? t : 0;
    if (t = S_(t), t === wl || t === -wl) {
        var n = t < 0 ? -1 : 1;
        return n * T_
    }
    return t === t ? t : 0
}
var Ol = k_,
    M_ = Ol;

function C_(t) {
    var n = M_(t),
        r = n % 1;
    return n === n ? r ? n - r : n : 0
}
var jl = C_,
    D_ = ml,
    N_ = wn,
    I_ = jl,
    R_ = Math.max;

function L_(t, n, r) {
    var e = t == null ? 0 : t.length;
    if (!e) return -1;
    var o = r == null ? 0 : I_(r);
    return o < 0 && (o = R_(e + o, 0)), D_(t, N_(n), o)
}
var $_ = L_,
    z_ = h_,
    U_ = $_,
    W_ = z_(U_),
    F_ = W_;
const B_ = F(F_);

function H_(t) {
    return t !== t
}
var q_ = H_;

function K_(t, n, r) {
    for (var e = r - 1, o = t.length; ++e < o;)
        if (t[e] === n) return e;
    return -1
}
var V_ = K_,
    G_ = ml,
    Y_ = q_,
    X_ = V_;

function Q_(t, n, r) {
    return n === n ? X_(t, n, r) : G_(t, Y_, r)
}
var Al = Q_,
    J_ = un,
    Z_ = gt,
    tx = qt,
    nx = "[object String]";

function rx(t) {
    return typeof t == "string" || !Z_(t) && tx(t) && J_(t) == nx
}
var El = rx;
const ex = F(El);
var ox = Rr;

function ix(t, n) {
    return ox(n, function(r) {
        return t[r]
    })
}
var ax = ix,
    ux = ax,
    sx = In;

function cx(t) {
    return t == null ? [] : ux(t, sx(t))
}
var Pl = cx;
const lx = F(Pl);
var fx = Al,
    hx = Ht,
    px = El,
    dx = jl,
    yx = Pl,
    vx = Math.max;

function gx(t, n, r, e) {
    t = hx(t) ? t : yx(t), r = r && !e ? dx(r) : 0;
    var o = t.length;
    return r < 0 && (r = vx(o + r, 0)), px(t) ? r <= o && t.indexOf(n, r) > -1 : !!o && fx(t, n, r) > -1
}
var mx = gx;
const ar = F(mx);
var bx = vi,
    _x = Le,
    xx = Ee,
    Sl = Bt,
    wx = $r;

function Ox(t, n, r, e) {
    if (!Sl(t)) return t;
    n = _x(n, t);
    for (var o = -1, i = n.length, a = i - 1, u = t; u != null && ++o < i;) {
        var s = wx(n[o]),
            c = r;
        if (s === "__proto__" || s === "constructor" || s === "prototype") return t;
        if (o != a) {
            var l = u[s];
            c = e ? e(l, s, u) : void 0, c === void 0 && (c = Sl(l) ? l : xx(n[o + 1]) ? [] : {})
        }
        bx(u, s, c), u = u[s]
    }
    return t
}
var jx = Ox,
    Ax = $e,
    Ex = jx,
    Px = Le;

function Sx(t, n, r) {
    for (var e = -1, o = n.length, i = {}; ++e < o;) {
        var a = n[e],
            u = Ax(t, a);
        r(u, a) && Ex(i, Px(a, t), u)
    }
    return i
}
var Tl = Sx,
    Tx = Tl,
    kx = Lc;

function Mx(t, n) {
    return Tx(t, n, function(r, e) {
        return kx(t, e)
    })
}
var Cx = Mx,
    kl = Mr,
    Dx = Te,
    Nx = gt,
    Ml = kl ? kl.isConcatSpreadable : void 0;

function Ix(t) {
    return Nx(t) || Dx(t) || !!(Ml && t && t[Ml])
}
var Rx = Ix,
    Lx = Ni,
    $x = Rx;

function Cl(t, n, r, e, o) {
    var i = -1,
        a = t.length;
    for (r || (r = $x), o || (o = []); ++i < a;) {
        var u = t[i];
        n > 0 && r(u) ? n > 1 ? Cl(u, n - 1, r, e, o) : Lx(o, u) : e || (o[o.length] = u)
    }
    return o
}
var Dl = Cl,
    zx = Dl;

function Ux(t) {
    var n = t == null ? 0 : t.length;
    return n ? zx(t, 1) : []
}
var Nl = Ux;
const Gr = F(Nl);
var Wx = Nl,
    Fx = Cs,
    Bx = Ns;

function Hx(t) {
    return Bx(Fx(t, void 0, Wx), t + "")
}
var qx = Hx,
    Kx = Cx,
    Vx = qx,
    Gx = Vx(function(t, n) {
        return t == null ? {} : Kx(t, n)
    }),
    Yx = Gx;
const Yr = F(Yx);

function Xx(t, n) {
    var r = n !== "x",
        e = Yt(t);
    return r ? [t.height - e.bottom, e.top] : [e.left, t.width - e.right]
}

function Qx(t, n) {
    if (n === "x") {
        var r = oa(t.startAngle || 0),
            e = oa(t.endAngle || 360);
        return [r, e]
    }
    return [t.innerRadius || 0, ia(t)]
}

function Xr(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
        r = {};
    for (var e in t) n.indexOf(e) >= 0 || Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
    return r
}

function ea(t) {
    var n = function(d) {
            return d !== void 0
        },
        r = t._x,
        e = t._x1,
        o = t._x0,
        i = t._voronoiX,
        a = t._y,
        u = t._y1,
        s = t._y0,
        c = t._voronoiY,
        l = n(e) ? e : r,
        f = n(u) ? u : a,
        h = {
            x: n(i) ? i : l,
            x0: n(o) ? o : r,
            y: n(c) ? c : f,
            y0: n(s) ? s : a
        };
    return $({}, h, t)
}

function to(t, n) {
    var r = t.scale,
        e = t.polar,
        o = t.horizontal,
        i = ea(n),
        a = t.origin || {
            x: 0,
            y: 0
        },
        u = o ? r.y(i.y) : r.x(i.x),
        s = o ? r.y(i.y0) : r.x(i.x0),
        c = o ? r.x(i.x) : r.y(i.y),
        l = o ? r.x(i.x0) : r.y(i.y0);
    return {
        x: e ? c * Math.cos(u) + a.x : u,
        x0: e ? l * Math.cos(s) + a.x : s,
        y: e ? -c * Math.sin(u) + a.y : c,
        y0: e ? -l * Math.sin(s) + a.x : l
    }
}

function Yt(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "padding",
        r = t[n],
        e = typeof r == "number" ? r : 0,
        o = typeof r == "object" ? r : {};
    return {
        top: o.top || e,
        bottom: o.bottom || e,
        left: o.left || e,
        right: o.right || e
    }
}

function Il(t) {
    var n = t && t.type && t.type.role;
    return n === "tooltip"
}

function Jx(t, n) {
    var r = t.theme,
        e = r === void 0 ? {} : r,
        o = t.labelComponent,
        i = e[n] && e[n].style || {};
    if (!Il(o)) return i;
    var a = e.tooltip && e.tooltip.style || {},
        u = $({}, a, i.labels);
    return $({}, {
        labels: u
    }, i)
}

function Rl(t, n) {
    var r = "100%",
        e = "100%";
    if (!t) return $({
        parent: {
            height: e,
            width: r
        }
    }, n);
    var o = t.data,
        i = t.labels,
        a = t.parent,
        u = n && n.parent || {},
        s = n && n.labels || {},
        c = n && n.data || {};
    return {
        parent: $({}, a, u, {
            width: r,
            height: e
        }),
        labels: $({}, i, s),
        data: $({}, o, c)
    }
}

function L(t, n) {
    return Y(t) ? t(n) : t
}

function Xt(t, n) {
    return n.disableInlineStyles ? {} : !t || !nt(t).some(function(r) {
        return Y(t[r])
    }) ? t : nt(t).reduce(function(r, e) {
        return r[e] = L(t[e], n), r
    }, {})
}

function oa(t) {
    return typeof t == "number" ? t * (Math.PI / 180) : t
}

function Zx(t) {
    return typeof t == "number" ? t / (Math.PI / 180) : t
}

function ia(t) {
    var n = Yt(t),
        r = n.left,
        e = n.right,
        o = n.top,
        i = n.bottom,
        a = t.width,
        u = t.height;
    return Math.min(a - r - e, u - o - i) / 2
}

function Ll(t) {
    var n = t.width,
        r = t.height,
        e = Yt(t),
        o = e.top,
        i = e.bottom,
        a = e.left,
        u = e.right,
        s = Math.min(n - a - u, r - o - i) / 2,
        c = n / 2 + a - u,
        l = r / 2 + o - i;
    return {
        x: c + s > n ? s + a - u : c,
        y: l + s > r ? s + o - i : l
    }
}

function Qt(t, n) {
    return t.range && t.range[n] ? t.range[n] : t.range && Array.isArray(t.range) ? t.range : t.polar ? Qx(t, n) : Xx(t, n)
}

function no(t) {
    return Y(t) ? t : t == null ? function(n) {
        return n
    } : zc(t)
}

function ur(t, n, r) {
    var e = t.theme && t.theme[r] ? t.theme[r] : {},
        o = Xr(e, ["style"]),
        i = t8(t),
        a = i === void 0 ? {} : {
            horizontal: i
        };
    return $(a, t, o, n)
}

function $l(t, n) {
    var r = t === "x" ? "y" : "x";
    return n ? r : t
}

function Un(t, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [],
        o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : function(c, l) {
            return c.concat(l)
        },
        i = ["data", "domain", "categories", "polar", "startAngle", "endAngle", "minDomain", "maxDomain", "horizontal"],
        a = function(c, l, f) {
            return c.reduce(function(h, d, y) {
                var m = d.type && d.type.role,
                    g = d.props.name || "".concat(m, "-").concat(l[y]);
                if (d.props && d.props.children) {
                    var v = A({}, d.props, Yr(r, i)),
                        b = d.type && d.type.role === "stack" && Y(d.type.getChildren) ? d.type.getChildren(v) : O.Children.toArray(d.props.children).map(function(x) {
                            var P = A({}, x.props, Yr(v, i));
                            return O.cloneElement(x, P)
                        }),
                        _ = b.map(function(x, P) {
                            return "".concat(g, "-").concat(P)
                        }),
                        w = a(b, _, d);
                    h = o(h, w)
                } else {
                    var j = n(d, g, f);
                    j && (h = o(h, j))
                }
                return h
            }, e)
        },
        u = t.filter(it.isValidElement),
        s = u.map(function(c, l) {
            return l
        });
    return a(u, s)
}

function t8(t) {
    if (t.horizontal !== void 0 || !t.children) return t.horizontal;
    var n = function(r) {
        return r.reduce(function(e, o) {
            var i = o.props || {};
            return e || i.horizontal || !i.children ? (e = e || i.horizontal, e) : n(O.Children.toArray(i.children))
        }, !1)
    };
    return n(O.Children.toArray(t.children))
}

function ro(t) {
    return o8(t) || e8(t) || r8(t) || n8()
}

function n8() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function r8(t, n) {
    if (t) {
        if (typeof t == "string") return aa(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return aa(t, n)
    }
}

function e8(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
}

function o8(t) {
    if (Array.isArray(t)) return aa(t)
}

function aa(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e
}

function i8(t) {
    return Array.isArray(t) && t.length > 0
}

function a8(t) {
    return Array.isArray(t) && t.some(function(n) {
        return typeof n == "string"
    })
}

function Qr(t) {
    return Array.isArray(t) && t.some(function(n) {
        return n instanceof Date
    })
}

function zl(t) {
    return i8(t) && t.every(Array.isArray)
}

function Ul(t) {
    return t.filter(function(n) {
        return n !== void 0
    })
}

function Wn(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) r[e - 1] = arguments[e];
    var o = t.concat(r);
    return Qr(o) ? new Date(Math.max.apply(Math, ro(o))) : Math.max.apply(Math, ro(o))
}

function sn(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) r[e - 1] = arguments[e];
    var o = t.concat(r);
    return Qr(o) ? new Date(Math.min.apply(Math, ro(o))) : Math.min.apply(Math, ro(o))
}

function On(t, n) {
    return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
}

function u8(t, n) {
    return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
}

function ua(t) {
    let n, r, e;
    t.length !== 2 ? (n = On, r = (u, s) => On(t(u), s), e = (u, s) => t(u) - s) : (n = t === On || t === u8 ? t : s8, r = t, e = t);

    function o(u, s, c = 0, l = u.length) {
        if (c < l) {
            if (n(s, s) !== 0) return l;
            do {
                const f = c + l >>> 1;
                r(u[f], s) < 0 ? c = f + 1 : l = f
            } while (c < l)
        }
        return c
    }

    function i(u, s, c = 0, l = u.length) {
        if (c < l) {
            if (n(s, s) !== 0) return l;
            do {
                const f = c + l >>> 1;
                r(u[f], s) <= 0 ? c = f + 1 : l = f
            } while (c < l)
        }
        return c
    }

    function a(u, s, c = 0, l = u.length) {
        const f = o(u, s, c, l - 1);
        return f > c && e(u[f - 1], s) > -e(u[f], s) ? f - 1 : f
    }
    return {
        left: o,
        center: a,
        right: i
    }
}

function s8() {
    return 0
}

function Wl(t) {
    return t === null ? NaN : +t
}

function* c8(t, n) {
    if (n === void 0)
        for (let r of t) r != null && (r = +r) >= r && (yield r);
    else {
        let r = -1;
        for (let e of t)(e = n(e, ++r, t)) != null && (e = +e) >= e && (yield e)
    }
}
const l8 = ua(On),
    f8 = l8.right;
ua(Wl).center;
const Jr = f8;
class Fl extends Map {
    constructor(n, r = d8) {
        if (super(), Object.defineProperties(this, {
                _intern: {
                    value: new Map
                },
                _key: {
                    value: r
                }
            }), n != null)
            for (const [e, o] of n) this.set(e, o)
    }
    get(n) {
        return super.get(Bl(this, n))
    }
    has(n) {
        return super.has(Bl(this, n))
    }
    set(n, r) {
        return super.set(h8(this, n), r)
    }
    delete(n) {
        return super.delete(p8(this, n))
    }
}

function Bl({
    _intern: t,
    _key: n
}, r) {
    const e = n(r);
    return t.has(e) ? t.get(e) : r
}

function h8({
    _intern: t,
    _key: n
}, r) {
    const e = n(r);
    return t.has(e) ? t.get(e) : (t.set(e, r), r)
}

function p8({
    _intern: t,
    _key: n
}, r) {
    const e = n(r);
    return t.has(e) && (r = t.get(e), t.delete(e)), r
}

function d8(t) {
    return t !== null && typeof t == "object" ? t.valueOf() : t
}

function y8(t = On) {
    if (t === On) return Hl;
    if (typeof t != "function") throw new TypeError("compare is not a function");
    return (n, r) => {
        const e = t(n, r);
        return e || e === 0 ? e : (t(r, r) === 0) - (t(n, n) === 0)
    }
}

function Hl(t, n) {
    return (t == null || !(t >= t)) - (n == null || !(n >= n)) || (t < n ? -1 : t > n ? 1 : 0)
}
const v8 = Math.sqrt(50),
    g8 = Math.sqrt(10),
    m8 = Math.sqrt(2);

function eo(t, n, r) {
    const e = (n - t) / Math.max(0, r),
        o = Math.floor(Math.log10(e)),
        i = e / Math.pow(10, o),
        a = i >= v8 ? 10 : i >= g8 ? 5 : i >= m8 ? 2 : 1;
    let u, s, c;
    return o < 0 ? (c = Math.pow(10, -o) / a, u = Math.round(t * c), s = Math.round(n * c), u / c < t && ++u, s / c > n && --s, c = -c) : (c = Math.pow(10, o) * a, u = Math.round(t / c), s = Math.round(n / c), u * c < t && ++u, s * c > n && --s), s < u && .5 <= r && r < 2 ? eo(t, n, r * 2) : [u, s, c]
}

function sa(t, n, r) {
    if (n = +n, t = +t, r = +r, !(r > 0)) return [];
    if (t === n) return [t];
    const e = n < t,
        [o, i, a] = e ? eo(n, t, r) : eo(t, n, r);
    if (!(i >= o)) return [];
    const u = i - o + 1,
        s = new Array(u);
    if (e)
        if (a < 0)
            for (let c = 0; c < u; ++c) s[c] = (i - c) / -a;
        else
            for (let c = 0; c < u; ++c) s[c] = (i - c) * a;
    else if (a < 0)
        for (let c = 0; c < u; ++c) s[c] = (o + c) / -a;
    else
        for (let c = 0; c < u; ++c) s[c] = (o + c) * a;
    return s
}

function ca(t, n, r) {
    return n = +n, t = +t, r = +r, eo(t, n, r)[2]
}

function la(t, n, r) {
    n = +n, t = +t, r = +r;
    const e = n < t,
        o = e ? ca(n, t, r) : ca(t, n, r);
    return (e ? -1 : 1) * (o < 0 ? 1 / -o : o)
}

function ql(t, n) {
    let r;
    if (n === void 0)
        for (const e of t) e != null && (r < e || r === void 0 && e >= e) && (r = e);
    else {
        let e = -1;
        for (let o of t)(o = n(o, ++e, t)) != null && (r < o || r === void 0 && o >= o) && (r = o)
    }
    return r
}

function Kl(t, n) {
    let r;
    if (n === void 0)
        for (const e of t) e != null && (r > e || r === void 0 && e >= e) && (r = e);
    else {
        let e = -1;
        for (let o of t)(o = n(o, ++e, t)) != null && (r > o || r === void 0 && o >= o) && (r = o)
    }
    return r
}

function Vl(t, n, r = 0, e = 1 / 0, o) {
    if (n = Math.floor(n), r = Math.floor(Math.max(0, r)), e = Math.floor(Math.min(t.length - 1, e)), !(r <= n && n <= e)) return t;
    for (o = o === void 0 ? Hl : y8(o); e > r;) {
        if (e - r > 600) {
            const s = e - r + 1,
                c = n - r + 1,
                l = Math.log(s),
                f = .5 * Math.exp(2 * l / 3),
                h = .5 * Math.sqrt(l * f * (s - f) / s) * (c - s / 2 < 0 ? -1 : 1),
                d = Math.max(r, Math.floor(n - c * f / s + h)),
                y = Math.min(e, Math.floor(n + (s - c) * f / s + h));
            Vl(t, n, d, y, o)
        }
        const i = t[n];
        let a = r,
            u = e;
        for (Zr(t, r, n), o(t[e], i) > 0 && Zr(t, r, e); a < u;) {
            for (Zr(t, a, u), ++a, --u; o(t[a], i) < 0;) ++a;
            for (; o(t[u], i) > 0;) --u
        }
        o(t[r], i) === 0 ? Zr(t, r, u) : (++u, Zr(t, u, e)), u <= n && (r = u + 1), n <= u && (e = u - 1)
    }
    return t
}

function Zr(t, n, r) {
    const e = t[n];
    t[n] = t[r], t[r] = e
}

function b8(t, n, r) {
    if (t = Float64Array.from(c8(t, r)), !(!(e = t.length) || isNaN(n = +n))) {
        if (n <= 0 || e < 2) return Kl(t);
        if (n >= 1) return ql(t);
        var e, o = (e - 1) * n,
            i = Math.floor(o),
            a = ql(Vl(t, i).subarray(0, i + 1)),
            u = Kl(t.subarray(i + 1));
        return a + (u - a) * (o - i)
    }
}

function _8(t, n, r = Wl) {
    if (!(!(e = t.length) || isNaN(n = +n))) {
        if (n <= 0 || e < 2) return +r(t[0], 0, t);
        if (n >= 1) return +r(t[e - 1], e - 1, t);
        var e, o = (e - 1) * n,
            i = Math.floor(o),
            a = +r(t[i], i, t),
            u = +r(t[i + 1], i + 1, t);
        return a + (u - a) * (o - i)
    }
}

function x8(t, n, r) {
    t = +t, n = +n, r = (o = arguments.length) < 2 ? (n = t, t = 0, 1) : o < 3 ? 1 : +r;
    for (var e = -1, o = Math.max(0, Math.ceil((n - t) / r)) | 0, i = new Array(o); ++e < o;) i[e] = t + e * r;
    return i
}

function Ct(t, n) {
    switch (arguments.length) {
        case 0:
            break;
        case 1:
            this.range(t);
            break;
        default:
            this.range(n).domain(t);
            break
    }
    return this
}

function cn(t, n) {
    switch (arguments.length) {
        case 0:
            break;
        case 1:
            {
                typeof t == "function" ? this.interpolator(t) : this.range(t);
                break
            }
        default:
            {
                this.domain(t),
                typeof n == "function" ? this.interpolator(n) : this.range(n);
                break
            }
    }
    return this
}
const fa = Symbol("implicit");

function ha() {
    var t = new Fl,
        n = [],
        r = [],
        e = fa;

    function o(i) {
        let a = t.get(i);
        if (a === void 0) {
            if (e !== fa) return e;
            t.set(i, a = n.push(i) - 1)
        }
        return r[a % r.length]
    }
    return o.domain = function(i) {
        if (!arguments.length) return n.slice();
        n = [], t = new Fl;
        for (const a of i) t.has(a) || t.set(a, n.push(a) - 1);
        return o
    }, o.range = function(i) {
        return arguments.length ? (r = Array.from(i), o) : r.slice()
    }, o.unknown = function(i) {
        return arguments.length ? (e = i, o) : e
    }, o.copy = function() {
        return ha(n, r).unknown(e)
    }, Ct.apply(o, arguments), o
}

function pa() {
    var t = ha().unknown(void 0),
        n = t.domain,
        r = t.range,
        e = 0,
        o = 1,
        i, a, u = !1,
        s = 0,
        c = 0,
        l = .5;
    delete t.unknown;

    function f() {
        var h = n().length,
            d = o < e,
            y = d ? o : e,
            m = d ? e : o;
        i = (m - y) / Math.max(1, h - s + c * 2), u && (i = Math.floor(i)), y += (m - y - i * (h - s)) * l, a = i * (1 - s), u && (y = Math.round(y), a = Math.round(a));
        var g = x8(h).map(function(v) {
            return y + i * v
        });
        return r(d ? g.reverse() : g)
    }
    return t.domain = function(h) {
        return arguments.length ? (n(h), f()) : n()
    }, t.range = function(h) {
        return arguments.length ? ([e, o] = h, e = +e, o = +o, f()) : [e, o]
    }, t.rangeRound = function(h) {
        return [e, o] = h, e = +e, o = +o, u = !0, f()
    }, t.bandwidth = function() {
        return a
    }, t.step = function() {
        return i
    }, t.round = function(h) {
        return arguments.length ? (u = !!h, f()) : u
    }, t.padding = function(h) {
        return arguments.length ? (s = Math.min(1, c = +h), f()) : s
    }, t.paddingInner = function(h) {
        return arguments.length ? (s = Math.min(1, h), f()) : s
    }, t.paddingOuter = function(h) {
        return arguments.length ? (c = +h, f()) : c
    }, t.align = function(h) {
        return arguments.length ? (l = Math.max(0, Math.min(1, h)), f()) : l
    }, t.copy = function() {
        return pa(n(), [e, o]).round(u).paddingInner(s).paddingOuter(c).align(l)
    }, Ct.apply(f(), arguments)
}

function Gl(t) {
    var n = t.copy;
    return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() {
        return Gl(n())
    }, t
}

function w8() {
    return Gl(pa.apply(null, arguments).paddingInner(1))
}

function O8(t) {
    return function() {
        return t
    }
}

function oo(t) {
    return +t
}
var Yl = [0, 1];

function mt(t) {
    return t
}

function da(t, n) {
    return (n -= t = +t) ? function(r) {
        return (r - t) / n
    } : O8(isNaN(n) ? NaN : .5)
}

function j8(t, n) {
    var r;
    return t > n && (r = t, t = n, n = r),
        function(e) {
            return Math.max(t, Math.min(n, e))
        }
}

function A8(t, n, r) {
    var e = t[0],
        o = t[1],
        i = n[0],
        a = n[1];
    return o < e ? (e = da(o, e), i = r(a, i)) : (e = da(e, o), i = r(i, a)),
        function(u) {
            return i(e(u))
        }
}

function E8(t, n, r) {
    var e = Math.min(t.length, n.length) - 1,
        o = new Array(e),
        i = new Array(e),
        a = -1;
    for (t[e] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < e;) o[a] = da(t[a], t[a + 1]), i[a] = r(n[a], n[a + 1]);
    return function(u) {
        var s = Jr(t, u, 1, e) - 1;
        return i[s](o[s](u))
    }
}

function te(t, n) {
    return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
}

function io() {
    var t = Yl,
        n = Yl,
        r = Vt,
        e, o, i, a = mt,
        u, s, c;

    function l() {
        var h = Math.min(t.length, n.length);
        return a !== mt && (a = j8(t[0], t[h - 1])), u = h > 2 ? E8 : A8, s = c = null, f
    }

    function f(h) {
        return h == null || isNaN(h = +h) ? i : (s || (s = u(t.map(e), n, r)))(e(a(h)))
    }
    return f.invert = function(h) {
            return a(o((c || (c = u(n, t.map(e), qe)))(h)))
        }, f.domain = function(h) {
            return arguments.length ? (t = Array.from(h, oo), l()) : t.slice()
        }, f.range = function(h) {
            return arguments.length ? (n = Array.from(h), l()) : n.slice()
        }, f.rangeRound = function(h) {
            return n = Array.from(h), r = Qi, l()
        }, f.clamp = function(h) {
            return arguments.length ? (a = h ? !0 : mt, l()) : a !== mt
        }, f.interpolate = function(h) {
            return arguments.length ? (r = h, l()) : r
        }, f.unknown = function(h) {
            return arguments.length ? (i = h, f) : i
        },
        function(h, d) {
            return e = h, o = d, l()
        }
}

function ya() {
    return io()(mt, mt)
}

function P8(t) {
    return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10)
}

function ao(t, n) {
    if ((r = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
    var r, e = t.slice(0, r);
    return [e.length > 1 ? e[0] + e.slice(2) : e, +t.slice(r + 1)]
}

function sr(t) {
    return t = ao(Math.abs(t)), t ? t[1] : NaN
}

function S8(t, n) {
    return function(r, e) {
        for (var o = r.length, i = [], a = 0, u = t[0], s = 0; o > 0 && u > 0 && (s + u + 1 > e && (u = Math.max(1, e - s)), i.push(r.substring(o -= u, o + u)), !((s += u + 1) > e));) u = t[a = (a + 1) % t.length];
        return i.reverse().join(n)
    }
}

function T8(t) {
    return function(n) {
        return n.replace(/[0-9]/g, function(r) {
            return t[+r]
        })
    }
}
var k8 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function ne(t) {
    if (!(n = k8.exec(t))) throw new Error("invalid format: " + t);
    var n;
    return new va({
        fill: n[1],
        align: n[2],
        sign: n[3],
        symbol: n[4],
        zero: n[5],
        width: n[6],
        comma: n[7],
        precision: n[8] && n[8].slice(1),
        trim: n[9],
        type: n[10]
    })
}
ne.prototype = va.prototype;

function va(t) {
    this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + ""
}
va.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type
};

function M8(t) {
    t: for (var n = t.length, r = 1, e = -1, o; r < n; ++r) switch (t[r]) {
        case ".":
            e = o = r;
            break;
        case "0":
            e === 0 && (e = r), o = r;
            break;
        default:
            if (!+t[r]) break t;
            e > 0 && (e = 0);
            break
    }
    return e > 0 ? t.slice(0, e) + t.slice(o + 1) : t
}
var Xl;

function C8(t, n) {
    var r = ao(t, n);
    if (!r) return t + "";
    var e = r[0],
        o = r[1],
        i = o - (Xl = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1,
        a = e.length;
    return i === a ? e : i > a ? e + new Array(i - a + 1).join("0") : i > 0 ? e.slice(0, i) + "." + e.slice(i) : "0." + new Array(1 - i).join("0") + ao(t, Math.max(0, n + i - 1))[0]
}

function Ql(t, n) {
    var r = ao(t, n);
    if (!r) return t + "";
    var e = r[0],
        o = r[1];
    return o < 0 ? "0." + new Array(-o).join("0") + e : e.length > o + 1 ? e.slice(0, o + 1) + "." + e.slice(o + 1) : e + new Array(o - e.length + 2).join("0")
}
const Jl = {
    "%": (t, n) => (t * 100).toFixed(n),
    b: t => Math.round(t).toString(2),
    c: t => t + "",
    d: P8,
    e: (t, n) => t.toExponential(n),
    f: (t, n) => t.toFixed(n),
    g: (t, n) => t.toPrecision(n),
    o: t => Math.round(t).toString(8),
    p: (t, n) => Ql(t * 100, n),
    r: Ql,
    s: C8,
    X: t => Math.round(t).toString(16).toUpperCase(),
    x: t => Math.round(t).toString(16)
};

function Zl(t) {
    return t
}
var tf = Array.prototype.map,
    nf = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

function D8(t) {
    var n = t.grouping === void 0 || t.thousands === void 0 ? Zl : S8(tf.call(t.grouping, Number), t.thousands + ""),
        r = t.currency === void 0 ? "" : t.currency[0] + "",
        e = t.currency === void 0 ? "" : t.currency[1] + "",
        o = t.decimal === void 0 ? "." : t.decimal + "",
        i = t.numerals === void 0 ? Zl : T8(tf.call(t.numerals, String)),
        a = t.percent === void 0 ? "%" : t.percent + "",
        u = t.minus === void 0 ? "\u2212" : t.minus + "",
        s = t.nan === void 0 ? "NaN" : t.nan + "";

    function c(f) {
        f = ne(f);
        var h = f.fill,
            d = f.align,
            y = f.sign,
            m = f.symbol,
            g = f.zero,
            v = f.width,
            b = f.comma,
            _ = f.precision,
            w = f.trim,
            j = f.type;
        j === "n" ? (b = !0, j = "g") : Jl[j] || (_ === void 0 && (_ = 12), w = !0, j = "g"), (g || h === "0" && d === "=") && (g = !0, h = "0", d = "=");
        var x = m === "$" ? r : m === "#" && /[boxX]/.test(j) ? "0" + j.toLowerCase() : "",
            P = m === "$" ? e : /[%p]/.test(j) ? a : "",
            T = Jl[j],
            C = /[defgprs%]/.test(j);
        _ = _ === void 0 ? 6 : /[gprs]/.test(j) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));

        function I(k) {
            var N = x,
                M = P,
                R, Q, G;
            if (j === "c") M = T(k) + M, k = "";
            else {
                k = +k;
                var q = k < 0 || 1 / k < 0;
                if (k = isNaN(k) ? s : T(Math.abs(k), _), w && (k = M8(k)), q && +k == 0 && y !== "+" && (q = !1), N = (q ? y === "(" ? y : u : y === "-" || y === "(" ? "" : y) + N, M = (j === "s" ? nf[8 + Xl / 3] : "") + M + (q && y === "(" ? ")" : ""), C) {
                    for (R = -1, Q = k.length; ++R < Q;)
                        if (G = k.charCodeAt(R), 48 > G || G > 57) {
                            M = (G === 46 ? o + k.slice(R + 1) : k.slice(R)) + M, k = k.slice(0, R);
                            break
                        }
                }
            }
            b && !g && (k = n(k, 1 / 0));
            var B = N.length + k.length + M.length,
                K = B < v ? new Array(v - B + 1).join(h) : "";
            switch (b && g && (k = n(K + k, K.length ? v - M.length : 1 / 0), K = ""), d) {
                case "<":
                    k = N + k + M + K;
                    break;
                case "=":
                    k = N + K + k + M;
                    break;
                case "^":
                    k = K.slice(0, B = K.length >> 1) + N + k + M + K.slice(B);
                    break;
                default:
                    k = K + N + k + M;
                    break
            }
            return i(k)
        }
        return I.toString = function() {
            return f + ""
        }, I
    }

    function l(f, h) {
        var d = c((f = ne(f), f.type = "f", f)),
            y = Math.max(-8, Math.min(8, Math.floor(sr(h) / 3))) * 3,
            m = Math.pow(10, -y),
            g = nf[8 + y / 3];
        return function(v) {
            return d(m * v) + g
        }
    }
    return {
        format: c,
        formatPrefix: l
    }
}
var uo, ga, rf;
N8({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
});

function N8(t) {
    return uo = D8(t), ga = uo.format, rf = uo.formatPrefix, uo
}

function I8(t) {
    return Math.max(0, -sr(Math.abs(t)))
}

function R8(t, n) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(sr(n) / 3))) * 3 - sr(Math.abs(t)))
}

function L8(t, n) {
    return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, sr(n) - sr(t)) + 1
}

function ef(t, n, r, e) {
    var o = la(t, n, r),
        i;
    switch (e = ne(e != null ? e : ",f"), e.type) {
        case "s":
            {
                var a = Math.max(Math.abs(t), Math.abs(n));
                return e.precision == null && !isNaN(i = R8(o, a)) && (e.precision = i),
                rf(e, a)
            }
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            {
                e.precision == null && !isNaN(i = L8(o, Math.max(Math.abs(t), Math.abs(n)))) && (e.precision = i - (e.type === "e"));
                break
            }
        case "f":
        case "%":
            {
                e.precision == null && !isNaN(i = I8(o)) && (e.precision = i - (e.type === "%") * 2);
                break
            }
    }
    return ga(e)
}

function jn(t) {
    var n = t.domain;
    return t.ticks = function(r) {
        var e = n();
        return sa(e[0], e[e.length - 1], r != null ? r : 10)
    }, t.tickFormat = function(r, e) {
        var o = n();
        return ef(o[0], o[o.length - 1], r != null ? r : 10, e)
    }, t.nice = function(r) {
        r == null && (r = 10);
        var e = n(),
            o = 0,
            i = e.length - 1,
            a = e[o],
            u = e[i],
            s, c, l = 10;
        for (u < a && (c = a, a = u, u = c, c = o, o = i, i = c); l-- > 0;) {
            if (c = ca(a, u, r), c === s) return e[o] = a, e[i] = u, n(e);
            if (c > 0) a = Math.floor(a / c) * c, u = Math.ceil(u / c) * c;
            else if (c < 0) a = Math.ceil(a * c) / c, u = Math.floor(u * c) / c;
            else break;
            s = c
        }
        return t
    }, t
}

function ma() {
    var t = ya();
    return t.copy = function() {
        return te(t, ma())
    }, Ct.apply(t, arguments), jn(t)
}

function of (t) {
    var n;

    function r(e) {
        return e == null || isNaN(e = +e) ? n : e
    }
    return r.invert = r, r.domain = r.range = function(e) {
        return arguments.length ? (t = Array.from(e, oo), r) : t.slice()
    }, r.unknown = function(e) {
        return arguments.length ? (n = e, r) : n
    }, r.copy = function() {
        return of(t).unknown(n)
    }, t = arguments.length ? Array.from(t, oo) : [0, 1], jn(r)
}

function af(t, n) {
    t = t.slice();
    var r = 0,
        e = t.length - 1,
        o = t[r],
        i = t[e],
        a;
    return i < o && (a = r, r = e, e = a, a = o, o = i, i = a), t[r] = n.floor(o), t[e] = n.ceil(i), t
}

function uf(t) {
    return Math.log(t)
}

function sf(t) {
    return Math.exp(t)
}

function $8(t) {
    return -Math.log(-t)
}

function z8(t) {
    return -Math.exp(-t)
}

function U8(t) {
    return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
}

function W8(t) {
    return t === 10 ? U8 : t === Math.E ? Math.exp : n => Math.pow(t, n)
}

function F8(t) {
    return t === Math.E ? Math.log : t === 10 && Math.log10 || t === 2 && Math.log2 || (t = Math.log(t), n => Math.log(n) / t)
}

function cf(t) {
    return (n, r) => -t(-n, r)
}

function ba(t) {
    const n = t(uf, sf),
        r = n.domain;
    let e = 10,
        o, i;

    function a() {
        return o = F8(e), i = W8(e), r()[0] < 0 ? (o = cf(o), i = cf(i), t($8, z8)) : t(uf, sf), n
    }
    return n.base = function(u) {
        return arguments.length ? (e = +u, a()) : e
    }, n.domain = function(u) {
        return arguments.length ? (r(u), a()) : r()
    }, n.ticks = u => {
        const s = r();
        let c = s[0],
            l = s[s.length - 1];
        const f = l < c;
        f && ([c, l] = [l, c]);
        let h = o(c),
            d = o(l),
            y, m;
        const g = u == null ? 10 : +u;
        let v = [];
        if (!(e % 1) && d - h < g) {
            if (h = Math.floor(h), d = Math.ceil(d), c > 0) {
                for (; h <= d; ++h)
                    for (y = 1; y < e; ++y)
                        if (m = h < 0 ? y / i(-h) : y * i(h), !(m < c)) {
                            if (m > l) break;
                            v.push(m)
                        }
            } else
                for (; h <= d; ++h)
                    for (y = e - 1; y >= 1; --y)
                        if (m = h > 0 ? y / i(-h) : y * i(h), !(m < c)) {
                            if (m > l) break;
                            v.push(m)
                        }
            v.length * 2 < g && (v = sa(c, l, g))
        } else v = sa(h, d, Math.min(d - h, g)).map(i);
        return f ? v.reverse() : v
    }, n.tickFormat = (u, s) => {
        if (u == null && (u = 10), s == null && (s = e === 10 ? "s" : ","), typeof s != "function" && (!(e % 1) && (s = ne(s)).precision == null && (s.trim = !0), s = ga(s)), u === 1 / 0) return s;
        const c = Math.max(1, e * u / n.ticks().length);
        return l => {
            let f = l / i(Math.round(o(l)));
            return f * e < e - .5 && (f *= e), f <= c ? s(l) : ""
        }
    }, n.nice = () => r(af(r(), {
        floor: u => i(Math.floor(o(u))),
        ceil: u => i(Math.ceil(o(u)))
    })), n
}

function lf() {
    const t = ba(io()).domain([1, 10]);
    return t.copy = () => te(t, lf()).base(t.base()), Ct.apply(t, arguments), t
}

function ff(t) {
    return function(n) {
        return Math.sign(n) * Math.log1p(Math.abs(n / t))
    }
}

function hf(t) {
    return function(n) {
        return Math.sign(n) * Math.expm1(Math.abs(n)) * t
    }
}

function _a(t) {
    var n = 1,
        r = t(ff(n), hf(n));
    return r.constant = function(e) {
        return arguments.length ? t(ff(n = +e), hf(n)) : n
    }, jn(r)
}

function pf() {
    var t = _a(io());
    return t.copy = function() {
        return te(t, pf()).constant(t.constant())
    }, Ct.apply(t, arguments)
}

function df(t) {
    return function(n) {
        return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t)
    }
}

function B8(t) {
    return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t)
}

function H8(t) {
    return t < 0 ? -t * t : t * t
}

function xa(t) {
    var n = t(mt, mt),
        r = 1;

    function e() {
        return r === 1 ? t(mt, mt) : r === .5 ? t(B8, H8) : t(df(r), df(1 / r))
    }
    return n.exponent = function(o) {
        return arguments.length ? (r = +o, e()) : r
    }, jn(n)
}

function wa() {
    var t = xa(io());
    return t.copy = function() {
        return te(t, wa()).exponent(t.exponent())
    }, Ct.apply(t, arguments), t
}

function q8() {
    return wa.apply(null, arguments).exponent(.5)
}

function yf(t) {
    return Math.sign(t) * t * t
}

function K8(t) {
    return Math.sign(t) * Math.sqrt(Math.abs(t))
}

function vf() {
    var t = ya(),
        n = [0, 1],
        r = !1,
        e;

    function o(i) {
        var a = K8(t(i));
        return isNaN(a) ? e : r ? Math.round(a) : a
    }
    return o.invert = function(i) {
        return t.invert(yf(i))
    }, o.domain = function(i) {
        return arguments.length ? (t.domain(i), o) : t.domain()
    }, o.range = function(i) {
        return arguments.length ? (t.range((n = Array.from(i, oo)).map(yf)), o) : n.slice()
    }, o.rangeRound = function(i) {
        return o.range(i).round(!0)
    }, o.round = function(i) {
        return arguments.length ? (r = !!i, o) : r
    }, o.clamp = function(i) {
        return arguments.length ? (t.clamp(i), o) : t.clamp()
    }, o.unknown = function(i) {
        return arguments.length ? (e = i, o) : e
    }, o.copy = function() {
        return vf(t.domain(), n).round(r).clamp(t.clamp()).unknown(e)
    }, Ct.apply(o, arguments), jn(o)
}

function gf() {
    var t = [],
        n = [],
        r = [],
        e;

    function o() {
        var a = 0,
            u = Math.max(1, n.length);
        for (r = new Array(u - 1); ++a < u;) r[a - 1] = _8(t, a / u);
        return i
    }

    function i(a) {
        return a == null || isNaN(a = +a) ? e : n[Jr(r, a)]
    }
    return i.invertExtent = function(a) {
        var u = n.indexOf(a);
        return u < 0 ? [NaN, NaN] : [u > 0 ? r[u - 1] : t[0], u < r.length ? r[u] : t[t.length - 1]]
    }, i.domain = function(a) {
        if (!arguments.length) return t.slice();
        t = [];
        for (let u of a) u != null && !isNaN(u = +u) && t.push(u);
        return t.sort(On), o()
    }, i.range = function(a) {
        return arguments.length ? (n = Array.from(a), o()) : n.slice()
    }, i.unknown = function(a) {
        return arguments.length ? (e = a, i) : e
    }, i.quantiles = function() {
        return r.slice()
    }, i.copy = function() {
        return gf().domain(t).range(n).unknown(e)
    }, Ct.apply(i, arguments)
}

function mf() {
    var t = 0,
        n = 1,
        r = 1,
        e = [.5],
        o = [0, 1],
        i;

    function a(s) {
        return s != null && s <= s ? o[Jr(e, s, 0, r)] : i
    }

    function u() {
        var s = -1;
        for (e = new Array(r); ++s < r;) e[s] = ((s + 1) * n - (s - r) * t) / (r + 1);
        return a
    }
    return a.domain = function(s) {
        return arguments.length ? ([t, n] = s, t = +t, n = +n, u()) : [t, n]
    }, a.range = function(s) {
        return arguments.length ? (r = (o = Array.from(s)).length - 1, u()) : o.slice()
    }, a.invertExtent = function(s) {
        var c = o.indexOf(s);
        return c < 0 ? [NaN, NaN] : c < 1 ? [t, e[0]] : c >= r ? [e[r - 1], n] : [e[c - 1], e[c]]
    }, a.unknown = function(s) {
        return arguments.length && (i = s), a
    }, a.thresholds = function() {
        return e.slice()
    }, a.copy = function() {
        return mf().domain([t, n]).range(o).unknown(i)
    }, Ct.apply(jn(a), arguments)
}

function bf() {
    var t = [.5],
        n = [0, 1],
        r, e = 1;

    function o(i) {
        return i != null && i <= i ? n[Jr(t, i, 0, e)] : r
    }
    return o.domain = function(i) {
        return arguments.length ? (t = Array.from(i), e = Math.min(t.length, n.length - 1), o) : t.slice()
    }, o.range = function(i) {
        return arguments.length ? (n = Array.from(i), e = Math.min(t.length, n.length - 1), o) : n.slice()
    }, o.invertExtent = function(i) {
        var a = n.indexOf(i);
        return [t[a - 1], t[a]]
    }, o.unknown = function(i) {
        return arguments.length ? (r = i, o) : r
    }, o.copy = function() {
        return bf().domain(t).range(n).unknown(r)
    }, Ct.apply(o, arguments)
}
const Oa = new Date,
    ja = new Date;

function at(t, n, r, e) {
    function o(i) {
        return t(i = arguments.length === 0 ? new Date : new Date(+i)), i
    }
    return o.floor = i => (t(i = new Date(+i)), i), o.ceil = i => (t(i = new Date(i - 1)), n(i, 1), t(i), i), o.round = i => {
        const a = o(i),
            u = o.ceil(i);
        return i - a < u - i ? a : u
    }, o.offset = (i, a) => (n(i = new Date(+i), a == null ? 1 : Math.floor(a)), i), o.range = (i, a, u) => {
        const s = [];
        if (i = o.ceil(i), u = u == null ? 1 : Math.floor(u), !(i < a) || !(u > 0)) return s;
        let c;
        do s.push(c = new Date(+i)), n(i, u), t(i); while (c < i && i < a);
        return s
    }, o.filter = i => at(a => {
        if (a >= a)
            for (; t(a), !i(a);) a.setTime(a - 1)
    }, (a, u) => {
        if (a >= a)
            if (u < 0)
                for (; ++u <= 0;)
                    for (; n(a, -1), !i(a););
            else
                for (; --u >= 0;)
                    for (; n(a, 1), !i(a););
    }), r && (o.count = (i, a) => (Oa.setTime(+i), ja.setTime(+a), t(Oa), t(ja), Math.floor(r(Oa, ja))), o.every = i => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? o.filter(e ? a => e(a) % i === 0 : a => o.count(0, a) % i === 0) : o)), o
}
const so = at(() => {}, (t, n) => {
    t.setTime(+t + n)
}, (t, n) => n - t);
so.every = t => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? at(n => {
    n.setTime(Math.floor(n / t) * t)
}, (n, r) => {
    n.setTime(+n + r * t)
}, (n, r) => (r - n) / t) : so), so.range;
const ln = 1e3,
    Dt = ln * 60,
    fn = Dt * 60,
    hn = fn * 24,
    Aa = hn * 7,
    _f = hn * 30,
    Ea = hn * 365,
    Fn = at(t => {
        t.setTime(t - t.getMilliseconds())
    }, (t, n) => {
        t.setTime(+t + n * ln)
    }, (t, n) => (n - t) / ln, t => t.getUTCSeconds());
Fn.range;
const Pa = at(t => {
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * ln)
}, (t, n) => {
    t.setTime(+t + n * Dt)
}, (t, n) => (n - t) / Dt, t => t.getMinutes());
Pa.range;
const Sa = at(t => {
    t.setUTCSeconds(0, 0)
}, (t, n) => {
    t.setTime(+t + n * Dt)
}, (t, n) => (n - t) / Dt, t => t.getUTCMinutes());
Sa.range;
const Ta = at(t => {
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * ln - t.getMinutes() * Dt)
}, (t, n) => {
    t.setTime(+t + n * fn)
}, (t, n) => (n - t) / fn, t => t.getHours());
Ta.range;
const ka = at(t => {
    t.setUTCMinutes(0, 0, 0)
}, (t, n) => {
    t.setTime(+t + n * fn)
}, (t, n) => (n - t) / fn, t => t.getUTCHours());
ka.range;
const re = at(t => t.setHours(0, 0, 0, 0), (t, n) => t.setDate(t.getDate() + n), (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Dt) / hn, t => t.getDate() - 1);
re.range;
const co = at(t => {
    t.setUTCHours(0, 0, 0, 0)
}, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n)
}, (t, n) => (n - t) / hn, t => t.getUTCDate() - 1);
co.range;
const xf = at(t => {
    t.setUTCHours(0, 0, 0, 0)
}, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n)
}, (t, n) => (n - t) / hn, t => Math.floor(t / hn));
xf.range;

function Bn(t) {
    return at(n => {
        n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
    }, (n, r) => {
        n.setDate(n.getDate() + r * 7)
    }, (n, r) => (r - n - (r.getTimezoneOffset() - n.getTimezoneOffset()) * Dt) / Aa)
}
const lo = Bn(0),
    fo = Bn(1),
    V8 = Bn(2),
    G8 = Bn(3),
    cr = Bn(4),
    Y8 = Bn(5),
    X8 = Bn(6);
lo.range, fo.range, V8.range, G8.range, cr.range, Y8.range, X8.range;

function Hn(t) {
    return at(n => {
        n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
    }, (n, r) => {
        n.setUTCDate(n.getUTCDate() + r * 7)
    }, (n, r) => (r - n) / Aa)
}
const ho = Hn(0),
    po = Hn(1),
    Q8 = Hn(2),
    J8 = Hn(3),
    lr = Hn(4),
    Z8 = Hn(5),
    t4 = Hn(6);
ho.range, po.range, Q8.range, J8.range, lr.range, Z8.range, t4.range;
const Ma = at(t => {
    t.setDate(1), t.setHours(0, 0, 0, 0)
}, (t, n) => {
    t.setMonth(t.getMonth() + n)
}, (t, n) => n.getMonth() - t.getMonth() + (n.getFullYear() - t.getFullYear()) * 12, t => t.getMonth());
Ma.range;
const Ca = at(t => {
    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
}, (t, n) => {
    t.setUTCMonth(t.getUTCMonth() + n)
}, (t, n) => n.getUTCMonth() - t.getUTCMonth() + (n.getUTCFullYear() - t.getUTCFullYear()) * 12, t => t.getUTCMonth());
Ca.range;
const pn = at(t => {
    t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
}, (t, n) => {
    t.setFullYear(t.getFullYear() + n)
}, (t, n) => n.getFullYear() - t.getFullYear(), t => t.getFullYear());
pn.every = t => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : at(n => {
    n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
}, (n, r) => {
    n.setFullYear(n.getFullYear() + r * t)
}), pn.range;
const dn = at(t => {
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
}, (t, n) => {
    t.setUTCFullYear(t.getUTCFullYear() + n)
}, (t, n) => n.getUTCFullYear() - t.getUTCFullYear(), t => t.getUTCFullYear());
dn.every = t => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : at(n => {
    n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
}, (n, r) => {
    n.setUTCFullYear(n.getUTCFullYear() + r * t)
}), dn.range;

function wf(t, n, r, e, o, i) {
    const a = [
        [Fn, 1, ln],
        [Fn, 5, 5 * ln],
        [Fn, 15, 15 * ln],
        [Fn, 30, 30 * ln],
        [i, 1, Dt],
        [i, 5, 5 * Dt],
        [i, 15, 15 * Dt],
        [i, 30, 30 * Dt],
        [o, 1, fn],
        [o, 3, 3 * fn],
        [o, 6, 6 * fn],
        [o, 12, 12 * fn],
        [e, 1, hn],
        [e, 2, 2 * hn],
        [r, 1, Aa],
        [n, 1, _f],
        [n, 3, 3 * _f],
        [t, 1, Ea]
    ];

    function u(c, l, f) {
        const h = l < c;
        h && ([c, l] = [l, c]);
        const d = f && typeof f.range == "function" ? f : s(c, l, f),
            y = d ? d.range(c, +l + 1) : [];
        return h ? y.reverse() : y
    }

    function s(c, l, f) {
        const h = Math.abs(l - c) / f,
            d = ua(([, , g]) => g).right(a, h);
        if (d === a.length) return t.every(la(c / Ea, l / Ea, f));
        if (d === 0) return so.every(Math.max(la(c, l, f), 1));
        const [y, m] = a[h / a[d - 1][2] < a[d][2] / h ? d - 1 : d];
        return y.every(m)
    }
    return [u, s]
}
const [n4, r4] = wf(dn, Ca, ho, xf, ka, Sa), [e4, o4] = wf(pn, Ma, lo, re, Ta, Pa);

function Da(t) {
    if (0 <= t.y && t.y < 100) {
        var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
        return n.setFullYear(t.y), n
    }
    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
}

function Na(t) {
    if (0 <= t.y && t.y < 100) {
        var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
        return n.setUTCFullYear(t.y), n
    }
    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
}

function ee(t, n, r) {
    return {
        y: t,
        m: n,
        d: r,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    }
}

function i4(t) {
    var n = t.dateTime,
        r = t.date,
        e = t.time,
        o = t.periods,
        i = t.days,
        a = t.shortDays,
        u = t.months,
        s = t.shortMonths,
        c = oe(o),
        l = ie(o),
        f = oe(i),
        h = ie(i),
        d = oe(a),
        y = ie(a),
        m = oe(u),
        g = ie(u),
        v = oe(s),
        b = ie(s),
        _ = {
            a: q,
            A: B,
            b: K,
            B: Pt,
            c: null,
            d: Sf,
            e: Sf,
            f: S4,
            g: $4,
            G: U4,
            H: A4,
            I: E4,
            j: P4,
            L: Tf,
            m: T4,
            M: k4,
            p: en,
            q: St,
            Q: If,
            s: Rf,
            S: M4,
            u: C4,
            U: D4,
            V: N4,
            w: I4,
            W: R4,
            x: null,
            X: null,
            y: L4,
            Y: z4,
            Z: W4,
            "%": Nf
        },
        w = {
            a: Rt,
            A: Tt,
            b: yt,
            B: kt,
            c: null,
            d: Mf,
            e: Mf,
            f: q4,
            g: nw,
            G: ew,
            H: F4,
            I: B4,
            j: H4,
            L: Cf,
            m: K4,
            M: V4,
            p: Mt,
            q: on,
            Q: If,
            s: Rf,
            S: G4,
            u: Y4,
            U: X4,
            V: Q4,
            w: J4,
            W: Z4,
            x: null,
            X: null,
            y: tw,
            Y: rw,
            Z: ow,
            "%": Nf
        },
        j = {
            a: I,
            A: k,
            b: N,
            B: M,
            c: R,
            d: Ef,
            e: Ef,
            f: x4,
            g: Af,
            G: jf,
            H: Pf,
            I: Pf,
            j: g4,
            L: _4,
            m: v4,
            M: m4,
            p: C,
            q: y4,
            Q: O4,
            s: j4,
            S: b4,
            u: l4,
            U: f4,
            V: h4,
            w: c4,
            W: p4,
            x: Q,
            X: G,
            y: Af,
            Y: jf,
            Z: d4,
            "%": w4
        };
    _.x = x(r, _), _.X = x(e, _), _.c = x(n, _), w.x = x(r, w), w.X = x(e, w), w.c = x(n, w);

    function x(D, z) {
        return function(W) {
            var S = [],
                ot = -1,
                X = 0,
                ft = D.length,
                lt, Ut, Xn;
            for (W instanceof Date || (W = new Date(+W)); ++ot < ft;) D.charCodeAt(ot) === 37 && (S.push(D.slice(X, ot)), (Ut = Of[lt = D.charAt(++ot)]) != null ? lt = D.charAt(++ot) : Ut = lt === "e" ? " " : "0", (Xn = z[lt]) && (lt = Xn(W, Ut)), S.push(lt), X = ot + 1);
            return S.push(D.slice(X, ot)), S.join("")
        }
    }

    function P(D, z) {
        return function(W) {
            var S = ee(1900, void 0, 1),
                ot = T(S, D, W += "", 0),
                X, ft;
            if (ot != W.length) return null;
            if ("Q" in S) return new Date(S.Q);
            if ("s" in S) return new Date(S.s * 1e3 + ("L" in S ? S.L : 0));
            if (z && !("Z" in S) && (S.Z = 0), "p" in S && (S.H = S.H % 12 + S.p * 12), S.m === void 0 && (S.m = "q" in S ? S.q : 0), "V" in S) {
                if (S.V < 1 || S.V > 53) return null;
                "w" in S || (S.w = 1), "Z" in S ? (X = Na(ee(S.y, 0, 1)), ft = X.getUTCDay(), X = ft > 4 || ft === 0 ? po.ceil(X) : po(X), X = co.offset(X, (S.V - 1) * 7), S.y = X.getUTCFullYear(), S.m = X.getUTCMonth(), S.d = X.getUTCDate() + (S.w + 6) % 7) : (X = Da(ee(S.y, 0, 1)), ft = X.getDay(), X = ft > 4 || ft === 0 ? fo.ceil(X) : fo(X), X = re.offset(X, (S.V - 1) * 7), S.y = X.getFullYear(), S.m = X.getMonth(), S.d = X.getDate() + (S.w + 6) % 7)
            } else("W" in S || "U" in S) && ("w" in S || (S.w = "u" in S ? S.u % 7 : "W" in S ? 1 : 0), ft = "Z" in S ? Na(ee(S.y, 0, 1)).getUTCDay() : Da(ee(S.y, 0, 1)).getDay(), S.m = 0, S.d = "W" in S ? (S.w + 6) % 7 + S.W * 7 - (ft + 5) % 7 : S.w + S.U * 7 - (ft + 6) % 7);
            return "Z" in S ? (S.H += S.Z / 100 | 0, S.M += S.Z % 100, Na(S)) : Da(S)
        }
    }

    function T(D, z, W, S) {
        for (var ot = 0, X = z.length, ft = W.length, lt, Ut; ot < X;) {
            if (S >= ft) return -1;
            if (lt = z.charCodeAt(ot++), lt === 37) {
                if (lt = z.charAt(ot++), Ut = j[lt in Of ? z.charAt(ot++) : lt], !Ut || (S = Ut(D, W, S)) < 0) return -1
            } else if (lt != W.charCodeAt(S++)) return -1
        }
        return S
    }

    function C(D, z, W) {
        var S = c.exec(z.slice(W));
        return S ? (D.p = l.get(S[0].toLowerCase()), W + S[0].length) : -1
    }

    function I(D, z, W) {
        var S = d.exec(z.slice(W));
        return S ? (D.w = y.get(S[0].toLowerCase()), W + S[0].length) : -1
    }

    function k(D, z, W) {
        var S = f.exec(z.slice(W));
        return S ? (D.w = h.get(S[0].toLowerCase()), W + S[0].length) : -1
    }

    function N(D, z, W) {
        var S = v.exec(z.slice(W));
        return S ? (D.m = b.get(S[0].toLowerCase()), W + S[0].length) : -1
    }

    function M(D, z, W) {
        var S = m.exec(z.slice(W));
        return S ? (D.m = g.get(S[0].toLowerCase()), W + S[0].length) : -1
    }

    function R(D, z, W) {
        return T(D, n, z, W)
    }

    function Q(D, z, W) {
        return T(D, r, z, W)
    }

    function G(D, z, W) {
        return T(D, e, z, W)
    }

    function q(D) {
        return a[D.getDay()]
    }

    function B(D) {
        return i[D.getDay()]
    }

    function K(D) {
        return s[D.getMonth()]
    }

    function Pt(D) {
        return u[D.getMonth()]
    }

    function en(D) {
        return o[+(D.getHours() >= 12)]
    }

    function St(D) {
        return 1 + ~~(D.getMonth() / 3)
    }

    function Rt(D) {
        return a[D.getUTCDay()]
    }

    function Tt(D) {
        return i[D.getUTCDay()]
    }

    function yt(D) {
        return s[D.getUTCMonth()]
    }

    function kt(D) {
        return u[D.getUTCMonth()]
    }

    function Mt(D) {
        return o[+(D.getUTCHours() >= 12)]
    }

    function on(D) {
        return 1 + ~~(D.getUTCMonth() / 3)
    }
    return {
        format: function(D) {
            var z = x(D += "", _);
            return z.toString = function() {
                return D
            }, z
        },
        parse: function(D) {
            var z = P(D += "", !1);
            return z.toString = function() {
                return D
            }, z
        },
        utcFormat: function(D) {
            var z = x(D += "", w);
            return z.toString = function() {
                return D
            }, z
        },
        utcParse: function(D) {
            var z = P(D += "", !0);
            return z.toString = function() {
                return D
            }, z
        }
    }
}
var Of = {
        "-": "",
        _: " ",
        0: "0"
    },
    ct = /^\s*\d+/,
    a4 = /^%/,
    u4 = /[\\^$*+?|[\]().{}]/g;

function V(t, n, r) {
    var e = t < 0 ? "-" : "",
        o = (e ? -t : t) + "",
        i = o.length;
    return e + (i < r ? new Array(r - i + 1).join(n) + o : o)
}

function s4(t) {
    return t.replace(u4, "\\$&")
}

function oe(t) {
    return new RegExp("^(?:" + t.map(s4).join("|") + ")", "i")
}

function ie(t) {
    return new Map(t.map((n, r) => [n.toLowerCase(), r]))
}

function c4(t, n, r) {
    var e = ct.exec(n.slice(r, r + 1));
    return e ? (t.w = +e[0], r + e[0].length) : -1
}

function l4(t, n, r) {
    var e = ct.exec(n.slice(r, r + 1));
    return e ? (t.u = +e[0], r + e[0].length) : -1
}

function f4(t, n, r) {
    var e = ct.exec(n.slice(r, r + 2));
    return e ? (t.U = +e[0], r + e[0].length) : -1
}

function h4(t, n, r) {
    var e = ct.exec(n.slice(r, r + 2));
    return e ? (t.V = +e[0], r + e[0].length) : -1
}

function p4(t, n, r) {
    var e = ct.exec(n.slice(r, r + 2));
    return e ? (t.W = +e[0], r + e[0].length) : -1
}

function jf(t, n, r) {
    var e = ct.exec(n.slice(r, r + 4));
    return e ? (t.y = +e[0], r + e[0].length) : -1
}

function Af(t, n, r) {
    var e = ct.exec(n.slice(r, r + 2));
    return e ? (t.y = +e[0] + (+e[0] > 68 ? 1900 : 2e3), r + e[0].length) : -1
}

function d4(t, n, r) {
    var e = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(r, r + 6));
    return e ? (t.Z = e[1] ? 0 : -(e[2] + (e[3] || "00")), r + e[0].length) : -1
}

function y4(t, n, r) {
    var e = ct.exec(n.slice(r, r + 1));
    return e ? (t.q = e[0] * 3 - 3, r + e[0].length) : -1
}

function v4(t, n, r) {
    var e = ct.exec(n.slice(r, r + 2));
    return e ? (t.m = e[0] - 1, r + e[0].length) : -1
}

function Ef(t, n, r) {
    var e = ct.exec(n.slice(r, r + 2));
    return e ? (t.d = +e[0], r + e[0].length) : -1
}

function g4(t, n, r) {
    var e = ct.exec(n.slice(r, r + 3));
    return e ? (t.m = 0, t.d = +e[0], r + e[0].length) : -1
}

function Pf(t, n, r) {
    var e = ct.exec(n.slice(r, r + 2));
    return e ? (t.H = +e[0], r + e[0].length) : -1
}

function m4(t, n, r) {
    var e = ct.exec(n.slice(r, r + 2));
    return e ? (t.M = +e[0], r + e[0].length) : -1
}

function b4(t, n, r) {
    var e = ct.exec(n.slice(r, r + 2));
    return e ? (t.S = +e[0], r + e[0].length) : -1
}

function _4(t, n, r) {
    var e = ct.exec(n.slice(r, r + 3));
    return e ? (t.L = +e[0], r + e[0].length) : -1
}

function x4(t, n, r) {
    var e = ct.exec(n.slice(r, r + 6));
    return e ? (t.L = Math.floor(e[0] / 1e3), r + e[0].length) : -1
}

function w4(t, n, r) {
    var e = a4.exec(n.slice(r, r + 1));
    return e ? r + e[0].length : -1
}

function O4(t, n, r) {
    var e = ct.exec(n.slice(r));
    return e ? (t.Q = +e[0], r + e[0].length) : -1
}

function j4(t, n, r) {
    var e = ct.exec(n.slice(r));
    return e ? (t.s = +e[0], r + e[0].length) : -1
}

function Sf(t, n) {
    return V(t.getDate(), n, 2)
}

function A4(t, n) {
    return V(t.getHours(), n, 2)
}

function E4(t, n) {
    return V(t.getHours() % 12 || 12, n, 2)
}

function P4(t, n) {
    return V(1 + re.count(pn(t), t), n, 3)
}

function Tf(t, n) {
    return V(t.getMilliseconds(), n, 3)
}

function S4(t, n) {
    return Tf(t, n) + "000"
}

function T4(t, n) {
    return V(t.getMonth() + 1, n, 2)
}

function k4(t, n) {
    return V(t.getMinutes(), n, 2)
}

function M4(t, n) {
    return V(t.getSeconds(), n, 2)
}

function C4(t) {
    var n = t.getDay();
    return n === 0 ? 7 : n
}

function D4(t, n) {
    return V(lo.count(pn(t) - 1, t), n, 2)
}

function kf(t) {
    var n = t.getDay();
    return n >= 4 || n === 0 ? cr(t) : cr.ceil(t)
}

function N4(t, n) {
    return t = kf(t), V(cr.count(pn(t), t) + (pn(t).getDay() === 4), n, 2)
}

function I4(t) {
    return t.getDay()
}

function R4(t, n) {
    return V(fo.count(pn(t) - 1, t), n, 2)
}

function L4(t, n) {
    return V(t.getFullYear() % 100, n, 2)
}

function $4(t, n) {
    return t = kf(t), V(t.getFullYear() % 100, n, 2)
}

function z4(t, n) {
    return V(t.getFullYear() % 1e4, n, 4)
}

function U4(t, n) {
    var r = t.getDay();
    return t = r >= 4 || r === 0 ? cr(t) : cr.ceil(t), V(t.getFullYear() % 1e4, n, 4)
}

function W4(t) {
    var n = t.getTimezoneOffset();
    return (n > 0 ? "-" : (n *= -1, "+")) + V(n / 60 | 0, "0", 2) + V(n % 60, "0", 2)
}

function Mf(t, n) {
    return V(t.getUTCDate(), n, 2)
}

function F4(t, n) {
    return V(t.getUTCHours(), n, 2)
}

function B4(t, n) {
    return V(t.getUTCHours() % 12 || 12, n, 2)
}

function H4(t, n) {
    return V(1 + co.count(dn(t), t), n, 3)
}

function Cf(t, n) {
    return V(t.getUTCMilliseconds(), n, 3)
}

function q4(t, n) {
    return Cf(t, n) + "000"
}

function K4(t, n) {
    return V(t.getUTCMonth() + 1, n, 2)
}

function V4(t, n) {
    return V(t.getUTCMinutes(), n, 2)
}

function G4(t, n) {
    return V(t.getUTCSeconds(), n, 2)
}

function Y4(t) {
    var n = t.getUTCDay();
    return n === 0 ? 7 : n
}

function X4(t, n) {
    return V(ho.count(dn(t) - 1, t), n, 2)
}

function Df(t) {
    var n = t.getUTCDay();
    return n >= 4 || n === 0 ? lr(t) : lr.ceil(t)
}

function Q4(t, n) {
    return t = Df(t), V(lr.count(dn(t), t) + (dn(t).getUTCDay() === 4), n, 2)
}

function J4(t) {
    return t.getUTCDay()
}

function Z4(t, n) {
    return V(po.count(dn(t) - 1, t), n, 2)
}

function tw(t, n) {
    return V(t.getUTCFullYear() % 100, n, 2)
}

function nw(t, n) {
    return t = Df(t), V(t.getUTCFullYear() % 100, n, 2)
}

function rw(t, n) {
    return V(t.getUTCFullYear() % 1e4, n, 4)
}

function ew(t, n) {
    var r = t.getUTCDay();
    return t = r >= 4 || r === 0 ? lr(t) : lr.ceil(t), V(t.getUTCFullYear() % 1e4, n, 4)
}

function ow() {
    return "+0000"
}

function Nf() {
    return "%"
}

function If(t) {
    return +t
}

function Rf(t) {
    return Math.floor(+t / 1e3)
}
var fr, Lf, $f;
iw({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function iw(t) {
    return fr = i4(t), Lf = fr.format, fr.parse, $f = fr.utcFormat, fr.utcParse, fr
}

function aw(t) {
    return new Date(t)
}

function uw(t) {
    return t instanceof Date ? +t : +new Date(+t)
}

function Ia(t, n, r, e, o, i, a, u, s, c) {
    var l = ya(),
        f = l.invert,
        h = l.domain,
        d = c(".%L"),
        y = c(":%S"),
        m = c("%I:%M"),
        g = c("%I %p"),
        v = c("%a %d"),
        b = c("%b %d"),
        _ = c("%B"),
        w = c("%Y");

    function j(x) {
        return (s(x) < x ? d : u(x) < x ? y : a(x) < x ? m : i(x) < x ? g : e(x) < x ? o(x) < x ? v : b : r(x) < x ? _ : w)(x)
    }
    return l.invert = function(x) {
        return new Date(f(x))
    }, l.domain = function(x) {
        return arguments.length ? h(Array.from(x, uw)) : h().map(aw)
    }, l.ticks = function(x) {
        var P = h();
        return t(P[0], P[P.length - 1], x != null ? x : 10)
    }, l.tickFormat = function(x, P) {
        return P == null ? j : c(P)
    }, l.nice = function(x) {
        var P = h();
        return (!x || typeof x.range != "function") && (x = n(P[0], P[P.length - 1], x != null ? x : 10)), x ? h(af(P, x)) : l
    }, l.copy = function() {
        return te(l, Ia(t, n, r, e, o, i, a, u, s, c))
    }, l
}

function sw() {
    return Ct.apply(Ia(e4, o4, pn, Ma, lo, re, Ta, Pa, Fn, Lf).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
}

function cw() {
    return Ct.apply(Ia(n4, r4, dn, Ca, ho, co, ka, Sa, Fn, $f).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
}

function yo() {
    var t = 0,
        n = 1,
        r, e, o, i, a = mt,
        u = !1,
        s;

    function c(f) {
        return f == null || isNaN(f = +f) ? s : a(o === 0 ? .5 : (f = (i(f) - r) * o, u ? Math.max(0, Math.min(1, f)) : f))
    }
    c.domain = function(f) {
        return arguments.length ? ([t, n] = f, r = i(t = +t), e = i(n = +n), o = r === e ? 0 : 1 / (e - r), c) : [t, n]
    }, c.clamp = function(f) {
        return arguments.length ? (u = !!f, c) : u
    }, c.interpolator = function(f) {
        return arguments.length ? (a = f, c) : a
    };

    function l(f) {
        return function(h) {
            var d, y;
            return arguments.length ? ([d, y] = h, a = f(d, y), c) : [a(0), a(1)]
        }
    }
    return c.range = l(Vt), c.rangeRound = l(Qi), c.unknown = function(f) {
            return arguments.length ? (s = f, c) : s
        },
        function(f) {
            return i = f, r = f(t), e = f(n), o = r === e ? 0 : 1 / (e - r), c
        }
}

function An(t, n) {
    return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())
}

function zf() {
    var t = jn(yo()(mt));
    return t.copy = function() {
        return An(t, zf())
    }, cn.apply(t, arguments)
}

function Uf() {
    var t = ba(yo()).domain([1, 10]);
    return t.copy = function() {
        return An(t, Uf()).base(t.base())
    }, cn.apply(t, arguments)
}

function Wf() {
    var t = _a(yo());
    return t.copy = function() {
        return An(t, Wf()).constant(t.constant())
    }, cn.apply(t, arguments)
}

function Ra() {
    var t = xa(yo());
    return t.copy = function() {
        return An(t, Ra()).exponent(t.exponent())
    }, cn.apply(t, arguments)
}

function lw() {
    return Ra.apply(null, arguments).exponent(.5)
}

function Ff() {
    var t = [],
        n = mt;

    function r(e) {
        if (e != null && !isNaN(e = +e)) return n((Jr(t, e, 1) - 1) / (t.length - 1))
    }
    return r.domain = function(e) {
        if (!arguments.length) return t.slice();
        t = [];
        for (let o of e) o != null && !isNaN(o = +o) && t.push(o);
        return t.sort(On), r
    }, r.interpolator = function(e) {
        return arguments.length ? (n = e, r) : n
    }, r.range = function() {
        return t.map((e, o) => n(o / (t.length - 1)))
    }, r.quantiles = function(e) {
        return Array.from({
            length: e + 1
        }, (o, i) => b8(t, i / e))
    }, r.copy = function() {
        return Ff(n).domain(t)
    }, cn.apply(r, arguments)
}

function vo() {
    var t = 0,
        n = .5,
        r = 1,
        e = 1,
        o, i, a, u, s, c = mt,
        l, f = !1,
        h;

    function d(m) {
        return isNaN(m = +m) ? h : (m = .5 + ((m = +l(m)) - i) * (e * m < e * i ? u : s), c(f ? Math.max(0, Math.min(1, m)) : m))
    }
    d.domain = function(m) {
        return arguments.length ? ([t, n, r] = m, o = l(t = +t), i = l(n = +n), a = l(r = +r), u = o === i ? 0 : .5 / (i - o), s = i === a ? 0 : .5 / (a - i), e = i < o ? -1 : 1, d) : [t, n, r]
    }, d.clamp = function(m) {
        return arguments.length ? (f = !!m, d) : f
    }, d.interpolator = function(m) {
        return arguments.length ? (c = m, d) : c
    };

    function y(m) {
        return function(g) {
            var v, b, _;
            return arguments.length ? ([v, b, _] = g, c = e3(m, [v, b, _]), d) : [c(0), c(.5), c(1)]
        }
    }
    return d.range = y(Vt), d.rangeRound = y(Qi), d.unknown = function(m) {
            return arguments.length ? (h = m, d) : h
        },
        function(m) {
            return l = m, o = m(t), i = m(n), a = m(r), u = o === i ? 0 : .5 / (i - o), s = i === a ? 0 : .5 / (a - i), e = i < o ? -1 : 1, d
        }
}

function Bf() {
    var t = jn(vo()(mt));
    return t.copy = function() {
        return An(t, Bf())
    }, cn.apply(t, arguments)
}

function Hf() {
    var t = ba(vo()).domain([.1, 1, 10]);
    return t.copy = function() {
        return An(t, Hf()).base(t.base())
    }, cn.apply(t, arguments)
}

function qf() {
    var t = _a(vo());
    return t.copy = function() {
        return An(t, qf()).constant(t.constant())
    }, cn.apply(t, arguments)
}

function La() {
    var t = xa(vo());
    return t.copy = function() {
        return An(t, La()).exponent(t.exponent())
    }, cn.apply(t, arguments)
}

function fw() {
    return La.apply(null, arguments).exponent(.5)
}
const hw = Object.freeze(Object.defineProperty({
    __proto__: null,
    scaleBand: pa,
    scaleDiverging: Bf,
    scaleDivergingLog: Hf,
    scaleDivergingPow: La,
    scaleDivergingSqrt: fw,
    scaleDivergingSymlog: qf,
    scaleIdentity: of ,
    scaleImplicit: fa,
    scaleLinear: ma,
    scaleLog: lf,
    scaleOrdinal: ha,
    scalePoint: w8,
    scalePow: wa,
    scaleQuantile: gf,
    scaleQuantize: mf,
    scaleRadial: vf,
    scaleSequential: zf,
    scaleSequentialLog: Uf,
    scaleSequentialPow: Ra,
    scaleSequentialQuantile: Ff,
    scaleSequentialSqrt: lw,
    scaleSequentialSymlog: Wf,
    scaleSqrt: q8,
    scaleSymlog: pf,
    scaleThreshold: bf,
    scaleTime: sw,
    scaleUtc: cw,
    tickFormat: ef
}, Symbol.toStringTag, {
    value: "Module"
}));
var pw = ["linear", "time", "log", "sqrt"];

function dw(t) {
    var n = function(r) {
        return r && r[0].toUpperCase() + r.slice(1)
    };
    return "scale".concat(n(t))
}

function $a(t) {
    return typeof t == "function" ? Y(t.copy) && Y(t.domain) && Y(t.range) : typeof t == "string" ? ar(pw, t) : !1
}

function Kf(t, n) {
    if (t.scale) {
        if (t.scale.x || t.scale.y) return !!t.scale[n]
    } else return !1;
    return !0
}

function yw(t, n) {
    if (Kf(t, n)) {
        var r = t.scale[n] || t.scale;
        return typeof r == "string" ? r : Gf(r)
    }
}

function vw(t, n) {
    var r;
    if (t.domain && t.domain[n] ? r = t.domain[n] : t.domain && Array.isArray(t.domain) && (r = t.domain), !!r) return Qr(r) ? "time" : "linear"
}

function Vf(t, n) {
    if (!t.data) return "linear";
    var r = no(t[n]),
        e = t.data.map(function(o) {
            var i = rt(r(o)) ? r(o)[n] : r(o);
            return i !== void 0 ? i : o[n]
        });
    return Qr(e) ? "time" : "linear"
}

function ae(t) {
    if ($a(t)) {
        var n = dw(t);
        return hw[n]()
    }
    return ma()
}

function go(t, n) {
    var r = za(t, n);
    if (r) return typeof r == "string" ? ae(r) : r;
    var e = vw(t, n) || Vf(t, n);
    return ae(e)
}

function za(t, n) {
    if (Kf(t, n)) {
        var r = t.scale[n] || t.scale;
        if ($a(r)) return Y(r) ? r : ae(r)
    }
}

function mo(t, n) {
    return yw(t, n) || Vf(t, n)
}
var gw = [{
    name: "quantile",
    method: "quantiles"
}, {
    name: "log",
    method: "base"
}];

function Gf(t) {
    if (typeof t == "string") return t;
    var n = gw.filter(function(r) {
        return t[r.method] !== void 0
    })[0];
    return n ? n.name : void 0
}

function mw(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}
var yn = function(t) {
        var n = function(e) {
                return function(o, i, a) {
                    var u = o[i];
                    if (u == null) return e ? new Error("Required `".concat(i, "` was not specified in `").concat(a, "`.")) : null;
                    for (var s = arguments.length, c = new Array(s > 3 ? s - 3 : 0), l = 3; l < s; l++) c[l - 3] = arguments[l];
                    return t.apply(void 0, [o, i, a].concat(c))
                }
            },
            r = Object.assign(n(!1), {
                isRequired: n(!0)
            });
        return r
    },
    bw = function() {
        return null
    },
    _w = function() {},
    Yf = function(t) {
        return t === void 0 ? _w : t === null ? bw : t.constructor
    },
    Xf = function(t) {
        return t === void 0 ? "undefined" : t === null ? "null" : Object.prototype.toString.call(t).slice(8, -1)
    };

function xw(t, n) {
    return function(r, e, o) {
        return r[e], p.checkPropTypes(mw({}, e, t), r, e, o), null
    }
}

function Jt(t) {
    return yn(function(n, r, e) {
        for (var o = arguments.length, i = new Array(o > 3 ? o - 3 : 0), a = 3; a < o; a++) i[a - 3] = arguments[a];
        return t.reduce(function(u, s) {
            return u || s.apply(void 0, [n, r, e].concat(i))
        }, null)
    })
}
var H = yn(function(t, n, r) {
        var e = t[n];
        return typeof e != "number" || e < 0 ? new Error("`".concat(n, "` in `").concat(r, "` must be a non-negative number.")) : null
    }),
    $t = yn(function(t, n, r) {
        var e = t[n];
        return typeof e != "number" || e % 1 !== 0 ? new Error("`".concat(n, "` in `").concat(r, "` must be an integer.")) : null
    });
yn(function(t, n, r) {
    var e = t[n];
    return typeof e != "number" || e <= 0 ? new Error("`".concat(n, "` in `").concat(r, "` must be a number greater than zero.")) : null
});
var hr = yn(function(t, n, r) {
        var e = t[n];
        return !Array.isArray(e) || e.length !== 2 || e[1] === e[0] ? new Error("`".concat(n, "` in `").concat(r, "` must be an array of two unique numeric values.")) : null
    }),
    Zt = yn(function(t, n, r) {
        var e = t[n];
        return $a(e) ? null : new Error("`".concat(n, "` in `").concat(r, "` must be a d3 scale."))
    });
yn(function(t, n, r) {
    var e = t[n];
    if (!Array.isArray(e)) return new Error("`".concat(n, "` in `").concat(r, "` must be an array."));
    if (e.length < 2) return null;
    var o = Yf(e[0]),
        i = B_(e, function(s) {
            return o !== Yf(s)
        });
    if (i) {
        var a = Xf(e[0]),
            u = Xf(i);
        return new Error("Expected `".concat(n, "` in `").concat(r, "` to be a ") + "homogeneous array, but found types `".concat(a, "` and ") + "`".concat(u, "`."))
    }
    return null
}), yn(function(t, n) {
    return t[n] && Array.isArray(t[n]) && t[n].length !== t.data.length ? new Error("Length of data and ".concat(n, " arrays must match.")) : null
});
var ww = yn(function(t, n, r) {
    return t[n] && !gl(t[n]) ? new Error("`".concat(n, "` in `").concat(r, "` must be a regular expression.")) : null
});

function Ow(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function Qf(t, n) {
    for (var r = 0; r < n.length; r++) {
        var e = n[r];
        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
    }
}

function jw(t, n, r) {
    return n && Qf(t.prototype, n), r && Qf(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function Aw(t, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), n && Ua(t, n)
}

function Ua(t, n) {
    return Ua = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, e) {
        return r.__proto__ = e, r
    }, Ua(t, n)
}

function Ew(t) {
    var n = Tw();
    return function() {
        var r = bo(t),
            e;
        if (n) {
            var o = bo(this).constructor;
            e = Reflect.construct(r, arguments, o)
        } else e = r.apply(this, arguments);
        return Pw(this, e)
    }
}

function Pw(t, n) {
    if (n && (typeof n == "object" || typeof n == "function")) return n;
    if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Sw(t)
}

function Sw(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function Tw() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch (t) {
        return !1
    }
}

function bo(t) {
    return bo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, bo(t)
}
var Wa = function(t) {
    Aw(r, t);
    var n = Ew(r);

    function r(e) {
        var o;
        return Ow(this, r), o = n.call(this, e), o.map = void 0, o.index = void 0, o.portalRegister = function() {
            return ++o.index
        }, o.portalUpdate = function(i, a) {
            o.map[i] = a, o.forceUpdate()
        }, o.portalDeregister = function(i) {
            delete o.map[i], o.forceUpdate()
        }, o.map = {}, o.index = 1, o
    }
    return jw(r, [{
        key: "getChildren",
        value: function() {
            var e = this;
            return nt(this.map).map(function(o) {
                var i = e.map[o];
                return i && O.cloneElement(i, {
                    key: o
                })
            })
        }
    }, {
        key: "render",
        value: function() {
            return O.createElement("svg", this.props, this.getChildren())
        }
    }]), r
}(O.Component);
Wa.displayName = "Portal", Wa.propTypes = {
    className: p.string,
    height: H,
    style: p.object,
    viewBox: p.string,
    width: H
};
var Fa = O.createContext({});
Fa.displayName = "PortalContext";

function Jf(t, n) {
    return Dw(t) || Cw(t, n) || Mw(t, n) || kw()
}

function kw() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Mw(t, n) {
    if (t) {
        if (typeof t == "string") return Zf(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zf(t, n)
    }
}

function Zf(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e
}

function Cw(t, n) {
    var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (r != null) {
        var e = [],
            o = !0,
            i = !1,
            a, u;
        try {
            for (r = r.call(t); !(o = (a = r.next()).done) && (e.push(a.value), !(n && e.length === n)); o = !0);
        } catch (s) {
            i = !0, u = s
        } finally {
            try {
                !o && r.return != null && r.return()
            } finally {
                if (i) throw u
            }
        }
        return e
    }
}

function Dw(t) {
    if (Array.isArray(t)) return t
}

function t5(t, n) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        n && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), r.push.apply(r, e)
    }
    return r
}

function Nw(t) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? t5(Object(r), !0).forEach(function(e) {
            Iw(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : t5(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function Iw(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}
var n5 = {
        startsWith: ["data-", "aria-"],
        exactMatch: []
    },
    Rw = function(t) {
        var n = !1;
        return n5.startsWith.forEach(function(r) {
            var e = new RegExp("\\b(".concat(r, ")(\\w|-)+"), "g");
            e.test(t) && (n = !0)
        }), n
    },
    Lw = function(t) {
        return n5.exactMatch.includes(t)
    },
    $w = function(t) {
        return !!(Rw(t) || Lw(t))
    },
    qn = function(t) {
        var n = Nw({}, t);
        return Object.fromEntries(Object.entries(n).filter(function(r) {
            var e = Jf(r, 1),
                o = e[0];
            return $w(o)
        }).map(function(r) {
            var e = Jf(r, 2),
                o = e[0],
                i = e[1];
            return [o, L(i, t)]
        }))
    },
    zw = function(t, n) {
        return it.cloneElement(t, qn(n))
    };

function _o() {
    return _o = Object.assign ? Object.assign.bind() : function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e])
        }
        return t
    }, _o.apply(this, arguments)
}

function r5(t, n) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        n && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), r.push.apply(r, e)
    }
    return r
}

function pr(t) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? r5(Object(r), !0).forEach(function(e) {
            Uw(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : r5(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function Uw(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}

function Ww(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function e5(t, n) {
    for (var r = 0; r < n.length; r++) {
        var e = n[r];
        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
    }
}

function Fw(t, n, r) {
    return n && e5(t.prototype, n), r && e5(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function Bw(t, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), n && Ba(t, n)
}

function Ba(t, n) {
    return Ba = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, e) {
        return r.__proto__ = e, r
    }, Ba(t, n)
}

function Hw(t) {
    var n = Vw();
    return function() {
        var r = xo(t),
            e;
        if (n) {
            var o = xo(this).constructor;
            e = Reflect.construct(r, arguments, o)
        } else e = r.apply(this, arguments);
        return qw(this, e)
    }
}

function qw(t, n) {
    if (n && (typeof n == "object" || typeof n == "function")) return n;
    if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Kw(t)
}

function Kw(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function Vw() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch (t) {
        return !1
    }
}

function xo(t) {
    return xo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, xo(t)
}
var tn = function(t) {
    Bw(r, t);
    var n = Hw(r);

    function r(e) {
        var o;
        return Ww(this, r), o = n.call(this, e), o.containerId = void 0, o.portalRef = void 0, o.containerRef = void 0, o.shouldHandleWheel = void 0, o.savePortalRef = function(i) {
            return o.portalRef = i, i
        }, o.portalUpdate = function(i, a) {
            return o.portalRef.portalUpdate(i, a)
        }, o.portalRegister = function() {
            return o.portalRef.portalRegister()
        }, o.portalDeregister = function(i) {
            return o.portalRef.portalDeregister(i)
        }, o.saveContainerRef = function(i) {
            return Y(o.props.containerRef) && o.props.containerRef(i), o.containerRef = i, i
        }, o.handleWheel = function(i) {
            return i.preventDefault()
        }, o.containerId = !Es(e) || e.containerId === void 0 ? ra("victory-container-") : e.containerId, o.shouldHandleWheel = !!(e && e.events && e.events.onWheel), o
    }
    return Fw(r, [{
        key: "componentDidMount",
        value: function() {
            this.shouldHandleWheel && this.containerRef && this.containerRef.addEventListener("wheel", this.handleWheel)
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            this.shouldHandleWheel && this.containerRef && this.containerRef.removeEventListener("wheel", this.handleWheel)
        }
    }, {
        key: "getIdForElement",
        value: function(e) {
            return "".concat(this.containerId, "-").concat(e)
        }
    }, {
        key: "getChildren",
        value: function(e) {
            return e.children
        }
    }, {
        key: "getOUIAProps",
        value: function(e) {
            var o = e.ouiaId,
                i = e.ouiaSafe,
                a = e.ouiaType;
            return pr(pr(pr({}, o && {
                "data-ouia-component-id": o
            }), a && {
                "data-ouia-component-type": a
            }), i !== void 0 && {
                "data-ouia-safe": i
            })
        }
    }, {
        key: "renderContainer",
        value: function(e, o, i) {
            var a = e.title,
                u = e.desc,
                s = e.portalComponent,
                c = e.className,
                l = e.width,
                f = e.height,
                h = e.portalZIndex,
                d = e.responsive,
                y = this.getChildren(e),
                m = d ? {
                    width: "100%",
                    height: "100%"
                } : {
                    width: l,
                    height: f
                },
                g = A({
                    pointerEvents: "none",
                    touchAction: "none",
                    position: "relative"
                }, m),
                v = A({
                    zIndex: h,
                    position: "absolute",
                    top: 0,
                    left: 0
                }, m),
                b = A({
                    pointerEvents: "all"
                }, m),
                _ = A({
                    overflow: "visible"
                }, m),
                w = {
                    width: l,
                    height: f,
                    viewBox: o.viewBox,
                    preserveAspectRatio: o.preserveAspectRatio,
                    style: _
                };
            return O.createElement(Fa.Provider, {
                value: {
                    portalUpdate: this.portalUpdate,
                    portalRegister: this.portalRegister,
                    portalDeregister: this.portalDeregister
                }
            }, O.createElement("div", _o({
                style: $({}, i, g),
                className: c,
                ref: this.saveContainerRef
            }, this.getOUIAProps(e)), O.createElement("svg", _o({}, o, {
                style: b
            }), a ? O.createElement("title", {
                id: this.getIdForElement("title")
            }, a) : null, u ? O.createElement("desc", {
                id: this.getIdForElement("desc")
            }, u) : null, y), O.createElement("div", {
                style: v
            }, O.cloneElement(s, pr(pr({}, w), {}, {
                ref: this.savePortalRef
            })))))
        }
    }, {
        key: "render",
        value: function() {
            var e = this.props,
                o = e.width,
                i = e.height,
                a = e.responsive,
                u = e.events,
                s = e.title,
                c = e.desc,
                l = e.tabIndex,
                f = e.preserveAspectRatio,
                h = e.role,
                d = a ? this.props.style : Xr(this.props.style, ["height", "width"]),
                y = qn(this.props),
                m = A(pr({
                    width: o,
                    height: i,
                    tabIndex: l,
                    role: h,
                    "aria-labelledby": [s && this.getIdForElement("title"), this.props["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
                    "aria-describedby": [c && this.getIdForElement("desc"), this.props["aria-describedby"]].filter(Boolean).join(" ") || void 0,
                    viewBox: a ? "0 0 ".concat(o, " ").concat(i) : void 0,
                    preserveAspectRatio: a ? f : void 0
                }, y), u);
            return this.renderContainer(this.props, m, d)
        }
    }]), r
}(O.Component);
tn.displayName = "VictoryContainer", tn.role = "container", tn.propTypes = {
    "aria-describedby": p.string,
    "aria-labelledby": p.string,
    children: p.oneOfType([p.arrayOf(p.node), p.node]),
    className: p.string,
    containerId: p.oneOfType([p.number, p.string]),
    containerRef: p.func,
    desc: p.string,
    events: p.object,
    height: H,
    name: p.string,
    origin: p.shape({
        x: H,
        y: H
    }),
    ouiaId: p.oneOfType([p.number, p.string]),
    ouiaSafe: p.bool,
    ouiaType: p.string,
    polar: p.bool,
    portalComponent: p.element,
    portalZIndex: $t,
    preserveAspectRatio: p.string,
    responsive: p.bool,
    role: p.string,
    style: p.object,
    tabIndex: p.number,
    theme: p.object,
    title: p.string,
    width: H
}, tn.defaultProps = {
    className: "VictoryContainer",
    portalComponent: O.createElement(Wa, null),
    portalZIndex: 99,
    responsive: !0,
    role: "img"
}, tn.contextType = Qe;
var Gw = Ws,
    Yw = Ec,
    Xw = Te,
    Qw = gt,
    Jw = Ht,
    Zw = mi,
    tO = Se,
    nO = _i,
    rO = "[object Map]",
    eO = "[object Set]",
    oO = Object.prototype,
    iO = oO.hasOwnProperty;

function aO(t) {
    if (t == null) return !0;
    if (Jw(t) && (Qw(t) || typeof t == "string" || typeof t.splice == "function" || Zw(t) || nO(t) || Xw(t))) return !t.length;
    var n = Yw(t);
    if (n == rO || n == eO) return !t.size;
    if (tO(t)) return !Gw(t).length;
    for (var r in t)
        if (iO.call(t, r)) return !1;
    return !0
}
var uO = aO;
const et = F(uO);

function sO(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function o5(t, n) {
    for (var r = 0; r < n.length; r++) {
        var e = n[r];
        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
    }
}

function cO(t, n, r) {
    return n && o5(t.prototype, n), r && o5(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function lO(t, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), n && Ha(t, n)
}

function Ha(t, n) {
    return Ha = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, e) {
        return r.__proto__ = e, r
    }, Ha(t, n)
}

function fO(t) {
    var n = dO();
    return function() {
        var r = wo(t),
            e;
        if (n) {
            var o = wo(this).constructor;
            e = Reflect.construct(r, arguments, o)
        } else e = r.apply(this, arguments);
        return hO(this, e)
    }
}

function hO(t, n) {
    if (n && (typeof n == "object" || typeof n == "function")) return n;
    if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return pO(t)
}

function pO(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function dO() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch (t) {
        return !1
    }
}

function wo(t) {
    return wo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, wo(t)
}
var vn = function(t) {
    lO(r, t);
    var n = fO(r);

    function r() {
        var e;
        sO(this, r);
        for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
        return e = n.call.apply(n, [this].concat(i)), e.checkedContext = void 0, e.renderInPlace = void 0, e.element = void 0, e.portalKey = void 0, e
    }
    return cO(r, [{
        key: "componentDidMount",
        value: function() {
            this.checkedContext || (typeof this.context.portalUpdate != "function" && (this.renderInPlace = !0), this.checkedContext = !0), this.forceUpdate()
        }
    }, {
        key: "componentDidUpdate",
        value: function() {
            this.renderInPlace || (this.portalKey = this.portalKey || this.context.portalRegister(), this.context.portalUpdate(this.portalKey, this.element))
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            this.context && this.context.portalDeregister && this.context.portalDeregister(this.portalKey)
        }
    }, {
        key: "renderPortal",
        value: function(e) {
            return this.renderInPlace ? e : (this.element = e, null)
        }
    }, {
        key: "render",
        value: function() {
            var e = Array.isArray(this.props.children) ? this.props.children[0] : this.props.children,
                o = this.props.groupComponent,
                i = e && e.props || {},
                a = i.groupComponent ? {
                    groupComponent: o,
                    standalone: !1
                } : {},
                u = $(a, i, Xr(this.props, ["children", "groupComponent"])),
                s = e && O.cloneElement(e, u);
            return this.renderPortal(s)
        }
    }]), r
}(O.Component);
vn.displayName = "VictoryPortal", vn.role = "portal", vn.propTypes = {
    children: p.node,
    groupComponent: p.element
}, vn.defaultProps = {
    groupComponent: O.createElement("g", null)
}, vn.contextType = Fa;
var yO = ["desc", "id", "tabIndex", "origin"];

function Oo() {
    return Oo = Object.assign ? Object.assign.bind() : function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e])
        }
        return t
    }, Oo.apply(this, arguments)
}

function i5(t, n) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        n && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), r.push.apply(r, e)
    }
    return r
}

function vO(t) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? i5(Object(r), !0).forEach(function(e) {
            gO(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i5(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function gO(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}

function mO(t, n) {
    if (t == null) return {};
    var r = bO(t, n),
        e, o;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (o = 0; o < i.length; o++) e = i[o], !(n.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(t, e) && (r[e] = t[e])
    }
    return r
}

function bO(t, n) {
    if (t == null) return {};
    var r = {},
        e = Object.keys(t),
        o, i;
    for (i = 0; i < e.length; i++) o = e[i], !(n.indexOf(o) >= 0) && (r[o] = t[o]);
    return r
}
var a5 = it.forwardRef(function(t, n) {
        var r, e = t.desc,
            o = t.id,
            i = t.tabIndex;
        t.origin;
        var a = mO(t, yO),
            u = vO({
                vectorEffect: "non-scaling-stroke",
                id: (r = L(o, t)) === null || r === void 0 ? void 0 : r.toString(),
                tabIndex: L(i, t)
            }, a);
        return e ? O.createElement("rect", Oo({}, u, {
            ref: n
        }), O.createElement("desc", null, e)) : O.createElement("rect", Oo({}, u, {
            ref: n
        }))
    }),
    _O = ["children", "desc", "id", "origin", "tabIndex", "title"];

function u5(t, n) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        n && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), r.push.apply(r, e)
    }
    return r
}

function xO(t) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? u5(Object(r), !0).forEach(function(e) {
            wO(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : u5(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function wO(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}

function OO(t, n) {
    if (t == null) return {};
    var r = jO(t, n),
        e, o;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (o = 0; o < i.length; o++) e = i[o], !(n.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(t, e) && (r[e] = t[e])
    }
    return r
}

function jO(t, n) {
    if (t == null) return {};
    var r = {},
        e = Object.keys(t),
        o, i;
    for (i = 0; i < e.length; i++) o = e[i], !(n.indexOf(o) >= 0) && (r[o] = t[o]);
    return r
}
var AO = function(t) {
        var n, r = t.children,
            e = t.desc,
            o = t.id;
        t.origin;
        var i = t.tabIndex,
            a = t.title,
            u = OO(t, _O),
            s = xO({
                id: (n = L(o, t)) === null || n === void 0 ? void 0 : n.toString(),
                tabIndex: L(i, t)
            }, u);
        return O.createElement("text", s, a && O.createElement("title", null, a), e && O.createElement("desc", null, e), r)
    },
    EO = ["desc", "id", "tabIndex", "origin"];

function s5(t, n) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        n && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), r.push.apply(r, e)
    }
    return r
}

function PO(t) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? s5(Object(r), !0).forEach(function(e) {
            SO(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s5(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function SO(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}

function TO(t, n) {
    if (t == null) return {};
    var r = kO(t, n),
        e, o;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (o = 0; o < i.length; o++) e = i[o], !(n.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(t, e) && (r[e] = t[e])
    }
    return r
}

function kO(t, n) {
    if (t == null) return {};
    var r = {},
        e = Object.keys(t),
        o, i;
    for (i = 0; i < e.length; i++) o = e[i], !(n.indexOf(o) >= 0) && (r[o] = t[o]);
    return r
}
var MO = function(t) {
    var n;
    t.desc;
    var r = t.id,
        e = t.tabIndex;
    t.origin;
    var o = TO(t, EO),
        i = PO({
            id: (n = L(r, t)) === null || n === void 0 ? void 0 : n.toString(),
            tabIndex: L(e, t)
        }, o);
    return O.createElement("tspan", i)
};

function CO(t, n) {
    n = n || {};
    var r = n._y >= 0 ? 1 : -1,
        e = t.style && t.style.labels || {};
    return n.verticalAnchor || e.verticalAnchor ? n.verticalAnchor || e.verticalAnchor : t.horizontal ? "middle" : r >= 0 ? "end" : "start"
}

function DO(t, n) {
    n = n || {};
    var r = t.style,
        e = t.horizontal,
        o = n._y >= 0 ? 1 : -1,
        i = r && r.labels || {};
    return n.verticalAnchor || i.verticalAnchor ? n.verticalAnchor || i.verticalAnchor : e ? o >= 0 ? "start" : "end" : "middle"
}

function NO(t, n) {
    n = n || {};
    var r = t.style && t.style.labels || {};
    return n.angle === void 0 ? r.angle : n.angle
}

function IO(t, n) {
    n = n || {};
    var r = t.horizontal,
        e = t.style,
        o = e.labels || {},
        i = L(o.padding, t) || 0,
        a = n._y < 0 ? -1 : 1;
    return {
        x: r ? a * i : 0,
        y: r ? 0 : -1 * a * i
    }
}

function RO(t, n) {
    if (t.polar) return {};
    var r = IO(t, n);
    return {
        dx: r.x,
        dy: r.y
    }
}

function LO(t, n) {
    var r = t.polar,
        e = to(t, n),
        o = e.x,
        i = e.y;
    if (!r) return {
        x: o,
        y: i
    };
    var a = $O(t, n);
    return {
        x: o + a.x,
        y: i + a.y
    }
}

function $O(t, n) {
    var r = t.style,
        e = ue(t, n),
        o = r.labels || {},
        i = L(o.padding, t) || 0,
        a = oa(e);
    return {
        x: i * Math.cos(a),
        y: -i * Math.sin(a)
    }
}

function qa(t) {
    var n = t.labelComponent,
        r = t.labelPlacement,
        e = t.polar,
        o = e ? "perpendicular" : "vertical";
    return r || n.props && n.props.labelPlacement || o
}

function zO(t) {
    return t < 45 || t > 315 ? "right" : t >= 45 && t <= 135 ? "top" : t > 135 && t < 225 ? "left" : "bottom"
}

function c5(t, n, r) {
    return n = n || {}, n.label !== void 0 ? n.label : Array.isArray(t.labels) ? t.labels[r] : t.labels
}

function UO(t, n) {
    var r = qa(t);
    return r === "perpendicular" || r === "vertical" && (n === 90 || n === 270) ? "middle" : n <= 90 || n > 270 ? "start" : "end"
}

function WO(t, n) {
    var r = qa(t),
        e = zO(n);
    return r === "parallel" || e === "left" || e === "right" ? "middle" : e === "top" ? "end" : "start"
}

function FO(t, n) {
    var r = t.labelPlacement,
        e = t.datum;
    if (!r || r === "vertical") return 0;
    var o = n !== void 0 ? n % 360 : ue(t, e),
        i = o > 90 && o < 180 || o > 270 ? 1 : -1,
        a = 0;
    o === 0 || o === 180 ? a = 90 : o > 0 && o < 180 ? a = 90 - o : o > 180 && o < 360 && (a = 270 - o);
    var u = r === "perpendicular" ? 0 : 90;
    return a + i * u
}

function ue(t, n) {
    var r = ea(n),
        e = r.x;
    return Zx(t.scale.x(e)) % 360
}

function BO(t, n) {
    var r = t.scale,
        e = t.data,
        o = t.style,
        i = t.horizontal,
        a = t.polar,
        u = t.width,
        s = t.height,
        c = t.theme,
        l = t.labelComponent,
        f = t.disableInlineStyles,
        h = e[n],
        d = ue(t, h),
        y = a ? UO(t, d) : DO(t, h),
        m = a ? WO(t, d) : CO(t, h),
        g = NO(t, h),
        v = c5(t, h, n),
        b = qa(t),
        _ = LO(t, h),
        w = _.x,
        j = _.y,
        x = RO(t, h),
        P = x.dx,
        T = x.dy,
        C = {
            angle: g,
            data: e,
            datum: h,
            disableInlineStyles: f,
            horizontal: i,
            index: n,
            polar: a,
            scale: r,
            labelPlacement: b,
            text: v,
            textAnchor: y,
            verticalAnchor: m,
            x: w,
            y: j,
            dx: P,
            dy: T,
            width: u,
            height: s,
            style: o.labels
        };
    if (!Il(l)) return C;
    var I = c && c.tooltip || {};
    return $({}, C, Xr(I, ["style"]))
}
var Ka = function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) r[e - 1] = arguments[e];
    if (r.length > 0) return r.reduce(function(u, s) {
        return [u, Ka(s)].join(" ")
    }, Ka(t)).trim();
    if (t == null || typeof t == "string") return t;
    var o = [];
    for (var i in t)
        if (t.hasOwnProperty(i)) {
            var a = t[i];
            o.push("".concat(i, "(").concat(a, ")"))
        }
    return o.join(" ").trim()
};

function HO(t) {
    var n = {
        grayscale: ["#cccccc", "#969696", "#636363", "#252525"],
        qualitative: ["#334D5C", "#45B29D", "#EFC94C", "#E27A3F", "#DF5A49", "#4F7DA1", "#55DBC1", "#EFDA97", "#E2A37F", "#DF948A"],
        heatmap: ["#428517", "#77D200", "#D6D305", "#EC8E19", "#C92B05"],
        warm: ["#940031", "#C43343", "#DC5429", "#FF821D", "#FFAF55"],
        cool: ["#2746B9", "#0B69D4", "#2794DB", "#31BB76", "#60E83B"],
        red: ["#FCAE91", "#FB6A4A", "#DE2D26", "#A50F15", "#750B0E"],
        blue: ["#002C61", "#004B8F", "#006BC9", "#3795E5", "#65B4F4"],
        green: ["#354722", "#466631", "#649146", "#8AB25C", "#A9C97E"]
    };
    return t ? n[t] : n.grayscale
}

function qO(t, n) {
    return GO(t) || VO(t, n) || l5(t, n) || KO()
}

function KO() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function VO(t, n) {
    var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (r != null) {
        var e = [],
            o = !0,
            i = !1,
            a, u;
        try {
            for (r = r.call(t); !(o = (a = r.next()).done) && (e.push(a.value), !(n && e.length === n)); o = !0);
        } catch (s) {
            i = !0, u = s
        } finally {
            try {
                !o && r.return != null && r.return()
            } finally {
                if (i) throw u
            }
        }
        return e
    }
}

function GO(t) {
    if (Array.isArray(t)) return t
}

function YO(t) {
    return JO(t) || QO(t) || l5(t) || XO()
}

function XO() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function l5(t, n) {
    if (t) {
        if (typeof t == "string") return Va(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Va(t, n)
    }
}

function QO(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
}

function JO(t) {
    if (Array.isArray(t)) return Va(t)
}

function Va(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e
}
var f5 = {
        "American Typewriter": {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .25, .4203125, .3296875, .6, .6375, .8015625, .8203125, .1875, .45625, .45625, .6375, .5, .2734375, .309375, .2734375, .4390625, .6375, .6375, .6375, .6375, .6375, .6375, .6375, .6375, .6375, .6375, .2734375, .2734375, .5, .5, .5, .6, .6921875, .7640625, .6921875, .6375, .728125, .6734375, .6203125, .7109375, .784375, .3828125, .6421875, .7859375, .6375, .9484375, .7640625, .65625, .6375, .65625, .7296875, .6203125, .6375, .7109375, .740625, .940625, .784375, .7578125, .6203125, .4375, .5, .4375, .5, .5, .4921875, .5734375, .5890625, .5109375, .6, .528125, .43125, .5578125, .6375, .3109375, .40625, .6234375, .309375, .928125, .6375, .546875, .6, .58125, .4921875, .4921875, .4, .6203125, .625, .825, .6375, .640625, .528125, .5, .5, .5, .6671875],
            avg: .5793421052631578
        },
        Arial: {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .278125, .278125, .35625, .55625, .55625, .890625, .6671875, .1921875, .334375, .334375, .390625, .584375, .278125, .334375, .278125, .278125, .55625, .55625, .55625, .55625, .55625, .55625, .55625, .55625, .55625, .55625, .278125, .278125, .584375, .584375, .584375, .55625, 1.015625, .6703125, .6671875, .7234375, .7234375, .6671875, .6109375, .778125, .7234375, .278125, .5, .6671875, .55625, .834375, .7234375, .778125, .6671875, .778125, .7234375, .6671875, .6109375, .7234375, .6671875, .9453125, .6671875, .6671875, .6109375, .278125, .278125, .278125, .4703125, .584375, .334375, .55625, .55625, .5, .55625, .55625, .3125, .55625, .55625, .2234375, .2703125, .5, .2234375, .834375, .55625, .55625, .55625, .55625, .346875, .5, .278125, .55625, .5, .7234375, .5, .5, .5, .334375, .2609375, .334375, .584375],
            avg: .528733552631579
        },
        "Arial Black": {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .33125, .334375, .5, .6609375, .6671875, 1, .890625, .278125, .390625, .390625, .55625, .6609375, .334375, .334375, .334375, .28125, .6671875, .6671875, .6671875, .6671875, .6671875, .6671875, .6671875, .6671875, .6671875, .6671875, .334375, .334375, .6609375, .6609375, .6609375, .6109375, .7453125, .78125, .778125, .778125, .778125, .7234375, .6671875, .834375, .834375, .390625, .6671875, .834375, .6671875, .9453125, .834375, .834375, .7234375, .834375, .78125, .7234375, .7234375, .834375, .7796875, 1.003125, .78125, .78125, .7234375, .390625, .28125, .390625, .6609375, .5125, .334375, .6671875, .6671875, .6671875, .6671875, .6671875, .41875, .6671875, .6671875, .334375, .384375, .6671875, .334375, 1, .6671875, .6671875, .6671875, .6671875, .4703125, .6109375, .4453125, .6671875, .6140625, .946875, .6671875, .615625, .55625, .390625, .278125, .390625, .6609375],
            avg: .6213157894736842
        },
        Baskerville: {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .25, .25, .40625, .6671875, .490625, .875, .7015625, .178125, .2453125, .246875, .4171875, .6671875, .25, .3125, .25, .521875, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .25, .25, .6671875, .6671875, .6671875, .396875, .9171875, .684375, .615625, .71875, .7609375, .625, .553125, .771875, .803125, .3546875, .515625, .78125, .6046875, .928125, .75, .8234375, .5625, .96875, .7296875, .5421875, .6984375, .771875, .7296875, .9484375, .771875, .678125, .6359375, .3640625, .521875, .3640625, .46875, .5125, .334375, .46875, .521875, .428125, .521875, .4375, .3890625, .4765625, .53125, .25, .359375, .4640625, .240625, .803125, .53125, .5, .521875, .521875, .365625, .334375, .2921875, .521875, .4640625, .678125, .4796875, .465625, .428125, .4796875, .5109375, .4796875, .6671875],
            avg: .5323519736842108
        },
        Courier: {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .5984375, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6078125, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .61875, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .615625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6140625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625],
            avg: .6020559210526316
        },
        "Courier New": {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .5984375, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625],
            avg: .6015296052631579
        },
        cursive: {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .1921875, .24375, .40625, .5671875, .3984375, .721875, .909375, .2328125, .434375, .365625, .4734375, .5578125, .19375, .3484375, .19375, .7734375, .503125, .4171875, .5453125, .45, .6046875, .4703125, .5984375, .55625, .503125, .5546875, .20625, .2, .5625, .5546875, .546875, .403125, .70625, .734375, .7078125, .64375, .85, .753125, .75, .6484375, 1.0765625, .44375, .5359375, .8359375, .653125, 1.0109375, 1.1515625, .6796875, .6984375, 1.0625, .8234375, .5125, .9234375, .8546875, .70625, .9109375, .7421875, .715625, .6015625, .4640625, .3359375, .4109375, .5421875, .5421875, .4328125, .5125, .5, .3859375, .7375, .359375, .75625, .540625, .5328125, .3203125, .5296875, .5015625, .484375, .7890625, .5640625, .4203125, .703125, .471875, .4734375, .35, .4125, .5640625, .471875, .6484375, .5296875, .575, .4140625, .415625, .20625, .3796875, .5421875],
            avg: .5604440789473684
        },
        fantasy: {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .215625, .2625, .3265625, .6109375, .534375, .7625, .7828125, .2, .4359375, .4359375, .3765625, .5109375, .2796875, .4609375, .2796875, .5296875, .6640625, .253125, .521875, .4765625, .6640625, .490625, .528125, .5546875, .496875, .5421875, .2796875, .2796875, .5625, .4609375, .5625, .4828125, .609375, .740625, .7234375, .740625, .8265625, .7234375, .6171875, .7359375, .765625, .240625, .5453125, .715625, .6078125, .8640625, .653125, .9125, .6484375, .946875, .6921875, .653125, .6953125, .8015625, .58125, .784375, .671875, .6265625, .690625, .4359375, .5296875, .4359375, .53125, .5, .2875, .5375, .603125, .4984375, .60625, .53125, .434375, .6421875, .56875, .209375, .4671875, .5484375, .2203125, .709375, .55, .5984375, .6140625, .5765625, .40625, .4734375, .3734375, .559375, .4421875, .6421875, .4890625, .578125, .4484375, .2546875, .2203125, .2546875, .55],
            avg: .536496710526316
        },
        Geneva: {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .3328125, .3046875, .5, .6671875, .6671875, .90625, .728125, .3046875, .446875, .446875, .5078125, .6671875, .3046875, .3796875, .3046875, .5390625, .6671875, .6671875, .6671875, .6671875, .6671875, .6671875, .6671875, .6671875, .6671875, .6671875, .3046875, .3046875, .6671875, .6671875, .6671875, .56875, .871875, .728125, .6375, .6515625, .7015625, .5765625, .5546875, .675, .690625, .2421875, .4921875, .6640625, .584375, .7890625, .709375, .7359375, .584375, .78125, .60625, .60625, .640625, .6671875, .728125, .946875, .6109375, .6109375, .5765625, .446875, .5390625, .446875, .6671875, .6671875, .5921875, .5546875, .6109375, .546875, .603125, .5765625, .390625, .6109375, .584375, .2359375, .334375, .5390625, .2359375, .8953125, .584375, .60625, .603125, .603125, .3875, .509375, .44375, .584375, .565625, .78125, .53125, .571875, .5546875, .4515625, .246875, .4515625, .6671875],
            avg: .5762664473684211
        },
        Georgia: {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2421875, .33125, .4125, .64375, .6109375, .81875, .7109375, .215625, .375, .375, .4734375, .64375, .2703125, .375, .2703125, .46875, .6140625, .4296875, .559375, .553125, .565625, .5296875, .5671875, .503125, .596875, .5671875, .3125, .3125, .64375, .64375, .64375, .4796875, .9296875, .715625, .6546875, .6421875, .75, .6546875, .6, .7265625, .815625, .390625, .51875, .7203125, .6046875, .928125, .7671875, .7453125, .6109375, .7453125, .7234375, .5625, .61875, .7578125, .70625, .99375, .7125, .6640625, .6015625, .375, .46875, .375, .64375, .65, .5, .5046875, .56875, .4546875, .575, .484375, .39375, .509375, .5828125, .29375, .3671875, .546875, .2875, .88125, .5921875, .5390625, .571875, .5640625, .4109375, .4328125, .3453125, .5765625, .5203125, .75625, .50625, .5171875, .4453125, .43125, .375, .43125, .64375],
            avg: .5551809210526316
        },
        "Gill Sans": {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2765625, .271875, .3546875, .584375, .5421875, .6765625, .625, .1890625, .3234375, .3234375, .4171875, .584375, .2203125, .3234375, .2203125, .28125, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .2203125, .2296875, .584375, .584375, .584375, .334375, 1.0109375, .6671875, .5640625, .709375, .75, .5, .4703125, .740625, .7296875, .25, .3125, .65625, .490625, .78125, .78125, .8234375, .5109375, .8234375, .6046875, .459375, .6046875, .709375, .6046875, 1.0421875, .709375, .6046875, .646875, .334375, .28125, .334375, .4703125, .5828125, .334375, .428125, .5, .4390625, .5109375, .4796875, .296875, .428125, .5, .2203125, .2265625, .5, .2203125, .771875, .5, .553125, .5, .5, .3984375, .3859375, .334375, .5, .4390625, .7203125, .5, .4390625, .4171875, .334375, .2609375, .334375, .584375],
            avg: .4933717105263159
        },
        Helvetica: {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2796875, .2765625, .3546875, .5546875, .5546875, .8890625, .665625, .190625, .3328125, .3328125, .3890625, .5828125, .2765625, .3328125, .2765625, .3015625, .5546875, .5546875, .5546875, .5546875, .5546875, .5546875, .5546875, .5546875, .5546875, .5546875, .2765625, .2765625, .584375, .5828125, .584375, .5546875, 1.0140625, .665625, .665625, .721875, .721875, .665625, .609375, .7765625, .721875, .2765625, .5, .665625, .5546875, .8328125, .721875, .7765625, .665625, .7765625, .721875, .665625, .609375, .721875, .665625, .94375, .665625, .665625, .609375, .2765625, .3546875, .2765625, .4765625, .5546875, .3328125, .5546875, .5546875, .5, .5546875, .5546875, .2765625, .5546875, .5546875, .221875, .240625, .5, .221875, .8328125, .5546875, .5546875, .5546875, .5546875, .3328125, .5, .2765625, .5546875, .5, .721875, .5, .5, .5, .3546875, .259375, .353125, .5890625],
            avg: .5279276315789471
        },
        "Helvetica Neue": {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .278125, .259375, .4265625, .55625, .55625, 1, .6453125, .278125, .2703125, .26875, .353125, .6, .278125, .3890625, .278125, .36875, .55625, .55625, .55625, .55625, .55625, .55625, .55625, .55625, .55625, .55625, .278125, .278125, .6, .6, .6, .55625, .8, .6625, .6859375, .7234375, .7046875, .6125, .575, .759375, .7234375, .259375, .5203125, .6703125, .55625, .871875, .7234375, .7609375, .6484375, .7609375, .6859375, .6484375, .575, .7234375, .6140625, .9265625, .6125, .6484375, .6125, .259375, .36875, .259375, .6, .5, .25625, .5375, .59375, .5375, .59375, .5375, .2984375, .575, .55625, .2234375, .2375, .5203125, .2234375, .853125, .55625, .575, .59375, .59375, .334375, .5, .315625, .55625, .5, .759375, .51875, .5, .48125, .334375, .2234375, .334375, .6],
            avg: .5279440789473684
        },
        "Hoefler Text": {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2359375, .2234375, .3921875, .7125, .49375, .8859375, .771875, .2125, .3078125, .309375, .375, .4234375, .234375, .3125, .234375, .3, .5828125, .365625, .434375, .3921875, .5234375, .3984375, .5125, .4328125, .46875, .5125, .234375, .234375, .515625, .4234375, .515625, .340625, .7609375, .7359375, .6359375, .721875, .8125, .6375, .5875, .8078125, .853125, .4296875, .503125, .78125, .609375, .9609375, .8515625, .8140625, .6125, .8140625, .71875, .49375, .7125, .76875, .771875, 1.125, .7765625, .7734375, .65625, .321875, .3078125, .321875, .3546875, .5, .3375, .446875, .5359375, .45, .5296875, .4546875, .425, .4921875, .54375, .2671875, .240625, .5390625, .25, .815625, .5375, .5234375, .5390625, .5421875, .365625, .36875, .35625, .5171875, .5015625, .75, .5, .509375, .44375, .2421875, .14375, .2421875, .35],
            avg: .5116447368421051
        },
        Montserrat: {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2625, .2609375, .3734375, .696875, .615625, .8296875, .6703125, .203125, .3296875, .3296875, .3875, .575, .2125, .3828125, .2125, .3953125, .6625, .3625, .56875, .5640625, .6625, .5671875, .609375, .5890625, .6390625, .609375, .2125, .2125, .575, .575, .575, .5671875, 1.034375, .7171875, .7546875, .7203125, .8265625, .6703125, .634375, .7734375, .8140625, .303125, .5078125, .7125, .5890625, .95625, .8140625, .8390625, .71875, .8390625, .7234375, .615625, .575, .7921875, .6984375, 1.1125, .65625, .6359375, .6515625, .31875, .396875, .31875, .5765625, .5, .6, .590625, .678125, .5640625, .678125, .6046875, .375, .6875, .678125, .2703125, .365625, .6015625, .2703125, 1.0625, .678125, .628125, .678125, .678125, .4015625, .4890625, .40625, .6734375, .5421875, .8796875, .534375, .5671875, .5125, .334375, .2953125, .334375, .575],
            avg: .571792763157895
        },
        monospace: {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .5984375, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6078125, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .61875, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .615625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6140625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625, .6015625],
            avg: .6020559210526316
        },
        Overpass: {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2296875, .2765625, .4203125, .68125, .584375, .8515625, .7015625, .2203125, .3453125, .3453125, .53125, .63125, .2234375, .3953125, .2234375, .509375, .65, .4046875, .6171875, .60625, .6484375, .60625, .6015625, .5375, .615625, .6015625, .2234375, .2234375, .63125, .63125, .63125, .5015625, .8203125, .696875, .6671875, .65, .6859375, .6015625, .559375, .690625, .7078125, .2953125, .565625, .678125, .58125, .8046875, .7109375, .740625, .6421875, .740625, .6765625, .6046875, .590625, .696875, .6640625, .853125, .65, .6671875, .6625, .3734375, .509375, .3734375, .63125, .5125, .4, .5328125, .5625, .51875, .5625, .546875, .3359375, .5625, .565625, .25625, .3203125, .55, .265625, .85, .565625, .5671875, .5625, .5625, .4046875, .4765625, .3796875, .565625, .521875, .7265625, .53125, .5390625, .5125, .3671875, .275, .3671875, .63125],
            avg: .5430756578947369
        },
        Palatino: {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .25, .278125, .371875, .60625, .5, .840625, .778125, .209375, .334375, .334375, .390625, .60625, .2578125, .334375, .25, .60625, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .25, .25, .60625, .60625, .60625, .4453125, .7484375, .778125, .6109375, .709375, .775, .6109375, .55625, .7640625, .8328125, .3375, .346875, .7265625, .6109375, .946875, .83125, .7875, .6046875, .7875, .66875, .525, .6140625, .778125, .7234375, 1, .6671875, .6671875, .6671875, .334375, .60625, .334375, .60625, .5, .334375, .5, .565625, .4453125, .6109375, .4796875, .340625, .55625, .5828125, .2921875, .2671875, .5640625, .2921875, .8828125, .5828125, .546875, .6015625, .5609375, .3953125, .425, .3265625, .603125, .565625, .834375, .5171875, .55625, .5, .334375, .60625, .334375, .60625],
            avg: .5408552631578947
        },
        RedHatText: {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2328125, .2203125, .35625, .6890625, .55, .7390625, .6703125, .2140625, .4015625, .4015625, .4546875, .53125, .2203125, .45625, .2203125, .515625, .6609375, .3078125, .5484375, .5875, .61875, .5703125, .6203125, .559375, .6140625, .6203125, .2203125, .2234375, .465625, .534375, .465625, .5125, .7671875, .6609375, .6703125, .7265625, .728125, .6203125, .6109375, .8, .73125, .253125, .6, .6125, .6078125, .8625, .7390625, .8109375, .6546875, .809375, .6484375, .6234375, .6171875, .7125, .6609375, .8984375, .6546875, .646875, .60625, .3625, .5203125, .3625, .540625, .4609375, .5234375, .5265625, .584375, .509375, .5828125, .5578125, .3703125, .5828125, .553125, .2234375, .24375, .4890625, .2234375, .8453125, .553125, .58125, .584375, .5828125, .353125, .453125, .378125, .553125, .5015625, .6984375, .4875, .4984375, .459375, .3953125, .2921875, .3953125, .58125],
            avg: .5341940789473685
        },
        "sans-serif": {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .278125, .278125, .35625, .55625, .55625, .890625, .6671875, .1921875, .334375, .334375, .390625, .584375, .278125, .334375, .278125, .303125, .55625, .55625, .55625, .55625, .55625, .55625, .55625, .55625, .55625, .55625, .278125, .278125, .5859375, .584375, .5859375, .55625, 1.015625, .6671875, .6671875, .7234375, .7234375, .6671875, .6109375, .778125, .7234375, .278125, .5, .6671875, .55625, .834375, .7234375, .778125, .6671875, .778125, .7234375, .6671875, .6109375, .7234375, .6671875, .9453125, .6671875, .6671875, .6109375, .278125, .35625, .278125, .478125, .55625, .334375, .55625, .55625, .5, .55625, .55625, .278125, .55625, .55625, .2234375, .2421875, .5, .2234375, .834375, .55625, .55625, .55625, .55625, .334375, .5, .278125, .55625, .5, .7234375, .5, .5, .5, .35625, .2609375, .3546875, .590625],
            avg: .5293256578947368
        },
        Seravek: {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .215625, .296875, .4171875, .6734375, .4953125, .9125, .740625, .2421875, .3375, .3375, .409375, .60625, .2609375, .35625, .25625, .41875, .5921875, .3515625, .475, .4875, .5375, .509375, .5484375, .4546875, .5421875, .5484375, .25625, .2546875, .5875, .6171875, .5875, .4578125, .8140625, .6765625, .5703125, .6109375, .684375, .5109375, .4953125, .678125, .6859375, .2625, .2625, .5859375, .4734375, .846875, .709375, .740625, .509375, .740625, .584375, .5015625, .528125, .675, .5953125, .9453125, .596875, .540625, .540625, .359375, .4203125, .359375, .5109375, .421875, .4046875, .5015625, .5421875, .446875, .5453125, .484375, .38125, .5140625, .5546875, .240625, .2640625, .490625, .2765625, .8625, .5546875, .546875, .5453125, .5453125, .3625, .41875, .3890625, .5453125, .4703125, .7546875, .4921875, .4609375, .453125, .4015625, .2640625, .4015625, .58125],
            avg: .5044078947368421
        },
        serif: {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2484375, .334375, .409375, .5, .5, .834375, .778125, .18125, .334375, .334375, .5, .5640625, .25, .334375, .25, .278125, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .278125, .278125, .5640625, .5640625, .5640625, .4453125, .921875, .7234375, .6671875, .6671875, .7234375, .6109375, .55625, .7234375, .7234375, .334375, .390625, .7234375, .6109375, .890625, .7234375, .7234375, .55625, .7234375, .6671875, .55625, .6109375, .7234375, .7234375, .9453125, .7234375, .7234375, .6109375, .334375, .340625, .334375, .4703125, .5, .3453125, .4453125, .5, .4453125, .5, .4453125, .3828125, .5, .5, .278125, .3359375, .5, .278125, .778125, .5, .5, .5, .5, .3375, .390625, .2796875, .5, .5, .7234375, .5, .5, .4453125, .48125, .2015625, .48125, .5421875],
            avg: .5126315789473684
        },
        Tahoma: {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .3109375, .3328125, .4015625, .728125, .546875, .9765625, .70625, .2109375, .3828125, .3828125, .546875, .728125, .303125, .3640625, .303125, .3953125, .546875, .546875, .546875, .546875, .546875, .546875, .546875, .546875, .546875, .546875, .3546875, .3546875, .728125, .728125, .728125, .475, .909375, .6109375, .590625, .6015625, .6796875, .5625, .521875, .66875, .6765625, .3734375, .4171875, .6046875, .4984375, .771875, .66875, .7078125, .5515625, .7078125, .6375, .5578125, .5875, .65625, .60625, .903125, .58125, .5890625, .559375, .3828125, .39375, .3828125, .728125, .5625, .546875, .525, .553125, .4625, .553125, .5265625, .3546875, .553125, .5578125, .2296875, .328125, .51875, .2296875, .840625, .5578125, .54375, .553125, .553125, .3609375, .446875, .3359375, .5578125, .4984375, .7421875, .4953125, .4984375, .4453125, .48125, .3828125, .48125, .728125],
            avg: .5384374999999998
        },
        "Times New Roman": {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2484375, .334375, .409375, .5, .5, .834375, .778125, .18125, .334375, .334375, .5, .5640625, .25, .334375, .25, .28125, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .278125, .278125, .5640625, .5640625, .5640625, .4453125, .921875, .7234375, .6671875, .6671875, .7234375, .6109375, .55625, .7234375, .7234375, .334375, .390625, .73125, .6109375, .890625, .7375, .7234375, .55625, .7234375, .6765625, .55625, .6109375, .7234375, .7234375, .9453125, .7234375, .7234375, .6109375, .334375, .28125, .334375, .4703125, .51875, .334375, .4453125, .503125, .4453125, .503125, .4453125, .4359375, .5, .5, .278125, .35625, .50625, .278125, .778125, .5, .5, .5046875, .5, .340625, .390625, .2796875, .5, .5, .7234375, .5, .5, .4453125, .48125, .2015625, .48125, .5421875],
            avg: .5134375
        },
        "Trebuchet MS": {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .3015625, .3671875, .325, .53125, .525, .6015625, .70625, .1609375, .3671875, .3671875, .3671875, .525, .3671875, .3671875, .3671875, .525, .525, .525, .525, .525, .525, .525, .525, .525, .525, .525, .3671875, .3671875, .525, .525, .525, .3671875, .771875, .590625, .5671875, .5984375, .6140625, .5359375, .525, .6765625, .6546875, .2796875, .4765625, .5765625, .5078125, .7109375, .6390625, .675, .5578125, .7421875, .5828125, .48125, .58125, .6484375, .5875, .853125, .5578125, .5703125, .5515625, .3671875, .3578125, .3671875, .525, .53125, .525, .5265625, .5578125, .4953125, .5578125, .546875, .375, .503125, .546875, .2859375, .3671875, .5046875, .2953125, .83125, .546875, .5375, .5578125, .5578125, .3890625, .40625, .396875, .546875, .490625, .7453125, .5015625, .49375, .475, .3671875, .525, .3671875, .525],
            avg: .5085197368421052
        },
        Verdana: {
            widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .35, .39375, .459375, .81875, .6359375, 1.0765625, .759375, .26875, .4546875, .4546875, .6359375, .81875, .3640625, .4546875, .3640625, .4703125, .6359375, .6359375, .6359375, .6359375, .6359375, .6359375, .6359375, .6359375, .6359375, .6359375, .4546875, .4546875, .81875, .81875, .81875, .546875, 1, .684375, .6859375, .6984375, .771875, .6328125, .575, .7765625, .7515625, .421875, .4546875, .69375, .5578125, .84375, .7484375, .7875, .603125, .7875, .7, .684375, .6171875, .7328125, .684375, .9890625, .6859375, .615625, .6859375, .4546875, .46875, .4546875, .81875, .6421875, .6359375, .6015625, .6234375, .521875, .6234375, .596875, .384375, .6234375, .6328125, .275, .3765625, .5921875, .275, .9734375, .6328125, .6078125, .6234375, .6234375, .43125, .521875, .3953125, .6328125, .5921875, .81875, .5921875, .5921875, .5265625, .6359375, .4546875, .6359375, .81875],
            avg: .6171875000000003
        }
    },
    h5 = {
        mm: 3.8,
        sm: 38,
        pt: 1.33,
        pc: 16,
        in: 96,
        px: 1
    },
    p5 = {
        em: 1,
        ex: .5
    },
    d5 = {
        heightOverlapCoef: 1.05,
        lineCapitalCoef: 1.15
    },
    y5 = {
        lineHeight: 1,
        letterSpacing: "0px",
        fontSize: 0,
        angle: 0,
        fontFamily: ""
    },
    ZO = function(t) {
        return t * Math.PI / 180
    },
    tj = function(t) {
        var n = t.split(",").map(function(e) {
                return e.replace(/'|"/g, "")
            }),
            r = n.find(function(e) {
                return f5[e]
            }) || "Helvetica";
        return f5[r]
    },
    Ga = function(t) {
        return Array.isArray(t) ? t : t.toString().split(/\r\n|\r|\n/g)
    },
    jo = function(t, n, r) {
        var e = ZO(r);
        return Math.abs(Math.cos(e) * t) + Math.abs(Math.sin(e) * n)
    },
    Ya = function(t, n) {
        var r, e = (r = t.match(/[a-zA-Z%]+/)) === null || r === void 0 ? void 0 : r[0],
            o = Number(t.match(/[0-9.,]+/)),
            i;
        return e ? h5.hasOwnProperty(e) ? i = o * h5[e] : p5.hasOwnProperty(e) ? i = (n ? o * n : o * y5.fontSize) * p5[e] : i = o : i = o || 0, i
    },
    Xa = function(t, n) {
        var r = Array.isArray(t) ? t[n] : t,
            e = $({}, r, y5);
        return A({}, e, {
            fontFamily: e.fontFamily,
            letterSpacing: typeof e.letterSpacing == "number" ? e.letterSpacing : Ya(String(e.letterSpacing), e.fontSize),
            fontSize: typeof e.fontSize == "number" ? e.fontSize : Ya(String(e.fontSize))
        })
    },
    nj = function(t, n) {
        if (t === void 0 || t === "" || t === null) return 0;
        var r = Ga(t).map(function(e, o) {
            var i = e.toString().length,
                a = Xa(n, o),
                u = a.fontSize,
                s = a.letterSpacing,
                c = a.fontFamily,
                l = tj(c),
                f = e.toString().split("").map(function(h) {
                    return h.charCodeAt(0) < l.widths.length ? l.widths[h.charCodeAt(0)] : l.avg
                }).reduce(function(h, d) {
                    return d + h
                }, 0) * u;
            return f + s * Math.max(i - 1, 0)
        });
        return Math.max.apply(Math, YO(r))
    },
    rj = function(t, n) {
        return t === void 0 || t === "" || t === null ? 0 : Ga(t).reduce(function(r, e, o) {
            var i = Xa(n, o),
                a = e.toString().match(/[(A-Z)(0-9)]/),
                u = a ? i.fontSize * d5.lineCapitalCoef : i.fontSize;
            return r + i.lineHeight * u
        }, 0)
    },
    ej = function(t, n) {
        var r = Array.isArray(n) ? n[0] && n[0].angle : n && n.angle,
            e = rj(t, n),
            o = nj(t, n),
            i = r ? jo(o, e, r) : o,
            a = r ? jo(e, o, r) : e;
        return {
            width: i,
            height: a * d5.heightOverlapCoef
        }
    },
    Qa = rc(function() {
        var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        t.setAttribute("xlink", "http://www.w3.org/1999/xlink"), t.setAttribute("width", "300"), t.setAttribute("height", "300"), t.setAttribute("viewBox", "0 0 300 300"), t.setAttribute("aria-hidden", "true");
        var n = document.createElementNS("http://www.w3.org/2000/svg", "text");
        return t.appendChild(n), t.style.position = "fixed", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t), n
    }),
    v5 = function(t) {
        return t ? "".concat(t.angle, ":").concat(t.fontFamily, ":").concat(t.fontSize, ":").concat(t.letterSpacing, ":").concat(t.lineHeight) : "null"
    },
    oj = rc(function(t, n) {
        var r = Qa();
        if (!r.isConnected) {
            var e, o;
            (e = (o = Qa.cache).clear) === null || e === void 0 || e.call(o), r = Qa()
        }
        var i = Ga(t),
            a = 0;
        for (var u of i.entries()) {
            var s = qO(u, 2),
                c = s[0],
                l = s[1],
                f = document.createElementNS("http://www.w3.org/2000/svg", "tspan"),
                h = Xa(n, c);
            f.style.fontFamily = h.fontFamily, f.style.fontSize = "".concat(h.fontSize, "px"), f.style.lineHeight = h.lineHeight, f.style.fontFamily = h.fontFamily, f.style.letterSpacing = h.letterSpacing, f.textContent = l, f.setAttribute("x", "0"), f.setAttribute("y", "".concat(a)), r.appendChild(f), a += h.lineHeight * f.getBoundingClientRect().height
        }
        var d = r.getBoundingClientRect(),
            y = d.width;
        return r.innerHTML = "", {
            width: n != null && n.angle ? jo(y, a, n == null ? void 0 : n.angle) : y,
            height: n != null && n.angle ? jo(a, y, n == null ? void 0 : n.angle) : a
        }
    }, function(t, n) {
        var r = Array.isArray(t) ? t.join() : t,
            e = Array.isArray(n) ? n.map(v5).join() : v5(n);
        return "".concat(r, "::").concat(e)
    }),
    ij = {
        impl: function(t, n) {
            var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
                e = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
            return !e || r ? ej(t, n) : oj(t, n)
        }
    },
    Ja = function(t, n) {
        return ij.impl(t, n)
    };

function g5(t, n) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        n && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), r.push.apply(r, e)
    }
    return r
}

function Ao(t) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? g5(Object(r), !0).forEach(function(e) {
            aj(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : g5(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function aj(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}

function se(t) {
    return lj(t) || cj(t) || sj(t) || uj()
}

function uj() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function sj(t, n) {
    if (t) {
        if (typeof t == "string") return Za(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Za(t, n)
    }
}

function cj(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
}

function lj(t) {
    if (Array.isArray(t)) return Za(t)
}

function Za(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e
}
var Kn = {
        fill: "#252525",
        fontSize: 14,
        fontFamily: "'Gill Sans', 'Gill Sans MT', 'Ser\xADavek', 'Trebuchet MS', sans-serif",
        stroke: "transparent"
    },
    m5 = function(t, n) {
        if (!t.datum) return 0;
        var r = to(t, t.datum);
        return r[n]
    },
    b5 = function(t) {
        var n = t && t.fontSize;
        if (typeof n == "number") return n;
        if (n == null) return Kn.fontSize;
        if (typeof n == "string") {
            var r = Number(n.replace("px", ""));
            return isNaN(r) ? Kn.fontSize : r
        }
        return Kn.fontSize
    },
    bt = function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return Array.isArray(t) ? t[n] || t[0] : t
    },
    _5 = function(t) {
        var n = t.backgroundStyle,
            r = t.backgroundPadding;
        return Array.isArray(n) && !et(n) || Array.isArray(r) && !et(r)
    },
    fj = function(t, n) {
        if (n.disableInlineStyles) {
            var r = Xt(t, n);
            return {
                fontSize: b5(r)
            }
        }
        var e = function(o) {
            o = o ? $({}, o, Kn) : Kn;
            var i = Xt(o, n);
            return A({}, i, {
                fontSize: b5(i)
            })
        };
        return Array.isArray(t) && !et(t) ? t.map(function(o) {
            return e(o)
        }) : e(t)
    },
    hj = function(t, n) {
        if (t) return Array.isArray(t) && !et(t) ? t.map(function(r) {
            return Xt(r, n)
        }) : Xt(t, n)
    },
    pj = function(t) {
        if (t.backgroundPadding && Array.isArray(t.backgroundPadding)) return t.backgroundPadding.map(function(r) {
            var e = L(r, t);
            return Yt({
                padding: e
            })
        });
        var n = L(t.backgroundPadding, t);
        return Yt({
            padding: n
        })
    },
    dj = function(t) {
        var n = L(t.lineHeight, t);
        return Array.isArray(n) && et(n) ? [1] : n
    },
    yj = function(t, n) {
        if (t != null) {
            if (Array.isArray(t)) return t.map(function(e) {
                return L(e, n)
            });
            var r = L(t, n);
            if (r != null) return Array.isArray(r) ? r : "".concat(r).split(`
`)
        }
    },
    vj = function(t, n, r) {
        var e = t.dy ? L(t.dy, t) : 0,
            o = t.inline ? 1 : t.text.length,
            i = L(t.capHeight, t),
            a = n ? L(n, t) : "middle",
            u = se(Array(o).keys()).map(function(l) {
                return bt(t.style, l).fontSize
            }),
            s = se(Array(o).keys()).map(function(l) {
                return bt(r, l)
            });
        if (a === "start") return e + (i / 2 + s[0] / 2) * u[0];
        if (t.inline) return a === "end" ? e + (i / 2 - s[0] / 2) * u[0] : e + i / 2 * u[0];
        if (o === 1) return a === "end" ? e + (i / 2 + (.5 - o) * s[0]) * u[0] : e + (i / 2 + (.5 - o / 2) * s[0]) * u[0];
        var c = se(Array(o).keys()).reduce(function(l, f) {
            return l + (i / 2 + (.5 - o) * s[f]) * u[f] / o
        }, 0);
        return a === "end" ? e + c : e + c / 2 + i / 2 * s[o - 1] * u[o - 1]
    },
    gj = function(t, n, r) {
        var e = t.polar,
            o = bt(t.style),
            i = e ? FO(t) : 0,
            a = o.angle === void 0 ? L(t.angle, t) : o.angle,
            u = a === void 0 ? i : a,
            s = t.transform || o.transform,
            c = s && L(s, t),
            l = u && {
                rotate: [u, n, r]
            };
        return c || u ? Ka(c, l) : void 0
    },
    x5 = function(t, n) {
        var r = t.direction,
            e = t.textAnchor,
            o = t.x,
            i = t.dx;
        if (r === "rtl") return o - n;
        switch (e) {
            case "middle":
                return Math.round(o - n / 2);
            case "end":
                return Math.round(o - n);
            default:
                return o + (i || 0)
        }
    },
    w5 = function(t, n) {
        var r = t.verticalAnchor,
            e = t.y,
            o = t.originalDy,
            i = o === void 0 ? 0 : o,
            a = e + i;
        switch (r) {
            case "start":
                return Math.floor(a);
            case "end":
                return Math.ceil(a - n);
            default:
                return Math.floor(a - n / 2)
        }
    },
    mj = function(t, n) {
        var r = t.dx,
            e = r === void 0 ? 0 : r,
            o = t.transform,
            i = t.backgroundComponent,
            a = t.backgroundStyle,
            u = t.inline,
            s = t.backgroundPadding,
            c = t.capHeight,
            l = n.map(function(g) {
                return g.textSize
            }),
            f = u ? Math.max.apply(Math, se(l.map(function(g) {
                return g.height
            }))) : l.reduce(function(g, v, b) {
                var _ = b ? 0 : c / 2;
                return g + v.height * (n[b].lineHeight - _)
            }, 0),
            h = u ? l.reduce(function(g, v, b) {
                var _ = b ? e : 0;
                return g + v.width + _
            }, 0) : Math.max.apply(Math, se(l.map(function(g) {
                return g.width
            }))),
            d = x5(t, h),
            y = w5(t, f),
            m = {
                key: "background",
                height: f + s.top + s.bottom,
                style: a,
                transform: o,
                width: h + s.left + s.right,
                x: u ? d - s.left : d + e - s.left,
                y
            };
        return O.cloneElement(i, $({}, i.props, m))
    },
    bj = function(t, n, r) {
        var e = t.textAnchor,
            o = n.map(function(u) {
                return u.widthWithPadding
            }),
            i = o.reduce(function(u, s) {
                return u + s
            }, 0),
            a = -i / 2;
        switch (e) {
            case "start":
                return o.reduce(function(u, s, c) {
                    return u = c < r ? u + s : u, u
                }, 0);
            case "end":
                return o.reduce(function(u, s, c) {
                    return u = c > r ? u - s : u, u
                }, 0);
            default:
                return o.reduce(function(u, s, c) {
                    var l = c < r ? s : 0;
                    return u = c === r ? u + s / 2 : u + l, u
                }, a)
        }
    },
    _j = function(t, n) {
        var r = t.dy,
            e = t.dx,
            o = t.transform,
            i = t.backgroundStyle,
            a = t.backgroundPadding,
            u = t.backgroundComponent,
            s = t.inline,
            c = t.y,
            l = n.map(function(f, h) {
                var d = bt(n, h - 1),
                    y = f.textSize,
                    m = f.fontSize * f.lineHeight,
                    g = Math.ceil(m),
                    v = bt(a, h),
                    b = bt(a, h - 1),
                    _ = s && e || 0,
                    w = h && !s ? d.fontSize * d.lineHeight + b.top + b.bottom : r - m * .5 - (f.fontSize - f.capHeight);
                return {
                    textHeight: g,
                    labelSize: y,
                    heightWithPadding: g + v.top + v.bottom,
                    widthWithPadding: y.width + v.left + v.right + _,
                    y: c,
                    fontSize: f.fontSize,
                    dy: w
                }
            });
        return l.map(function(f, h) {
            var d = x5(t, f.labelSize.width),
                y = l.slice(0, h + 1).reduce(function(w, j) {
                    return w + j.dy
                }, c),
                m = bt(a, h),
                g = f.heightWithPadding,
                v = s ? bj(t, l, h) + d - m.left : d,
                b = s ? w5(t, g) - m.top : y,
                _ = {
                    key: "tspan-background-".concat(h),
                    height: g,
                    style: bt(i, h),
                    width: f.widthWithPadding,
                    transform: o,
                    x: v - m.left,
                    y: b
                };
            return O.cloneElement(u, $({}, u.props, _))
        })
    },
    xj = function(t, n) {
        return _5(t) ? _j(t, n) : mj(t, n)
    },
    wj = function(t, n, r) {
        var e = bt(t, n),
            o = bt(t, n - 1),
            i = o.fontSize * o.lineHeight,
            a = e.fontSize * e.lineHeight,
            u = o.fontSize - o.capHeight,
            s = e.fontSize - e.capHeight,
            c = i - o.fontSize / 2 + e.fontSize / 2 - i / 2 + a / 2 - s / 2 + u / 2;
        return _5(r) ? c + e.backgroundPadding.top + o.backgroundPadding.bottom : c
    },
    Oj = function(t, n, r) {
        var e = n.inline,
            o = bt(t, r);
        return r && !e ? wj(t, r, n) : e ? r === 0 ? o.backgroundPadding.top : void 0 : o.backgroundPadding.top
    },
    jj = function(t) {
        var n = yj(t.text, t),
            r = fj(t.style, A({}, t, {
                text: n
            })),
            e = hj(t.backgroundStyle, A({}, t, {
                text: n,
                style: r
            })),
            o = pj(A({}, t, {
                text: n,
                style: r,
                backgroundStyle: e
            })),
            i = L(t.id, t);
        return A({}, t, {
            backgroundStyle: e,
            backgroundPadding: o,
            style: r,
            text: n,
            id: i
        })
    },
    Aj = function(t) {
        var n = L(t.ariaLabel, t),
            r = bt(t.style),
            e = dj(t),
            o = t.direction ? L(t.direction, t) : "inherit",
            i = t.textAnchor ? L(t.textAnchor, t) : r.textAnchor || "start",
            a = t.verticalAnchor ? L(t.verticalAnchor, t) : r.verticalAnchor || "middle",
            u = t.dx ? L(t.dx, t) : 0,
            s = vj(t, a, e),
            c = t.x !== void 0 ? t.x : m5(t, "x"),
            l = t.y !== void 0 ? t.y : m5(t, "y"),
            f = gj(t, c, l);
        return A({}, t, {
            ariaLabel: n,
            lineHeight: e,
            direction: o,
            textAnchor: i,
            verticalAnchor: a,
            dx: u,
            dy: s,
            originalDy: L(t.dy, t),
            transform: f,
            x: c,
            y: l
        })
    },
    Ej = function(t, n) {
        var r = t.ariaLabel,
            e = t.inline,
            o = t.className,
            i = t.title,
            a = t.events,
            u = t.direction,
            s = t.text,
            c = t.textAnchor,
            l = t.dx,
            f = t.dy,
            h = t.transform,
            d = t.x,
            y = t.y,
            m = t.desc,
            g = t.id,
            v = t.tabIndex,
            b = t.tspanComponent,
            _ = t.textComponent,
            w = qn(t),
            j = Ao(Ao({
                "aria-label": r,
                key: "text"
            }, a), {}, {
                direction: u,
                dx: l,
                x: d,
                y: y + f,
                transform: h,
                className: o,
                title: i,
                desc: L(m, t),
                tabIndex: L(v, t),
                id: g
            }, w),
            x = s.map(function(P, T) {
                var C = n[T].style,
                    I = {
                        key: "".concat(g, "-key-").concat(T),
                        x: e ? void 0 : d,
                        dx: e ? l + n[T].backgroundPadding.left : l,
                        dy: Oj(n, t, T),
                        textAnchor: C.textAnchor || c,
                        style: C,
                        children: P
                    };
                return O.cloneElement(b, I)
            });
        return O.cloneElement(_, j, x)
    },
    Pj = {
        backgroundComponent: O.createElement(a5, null),
        groupComponent: O.createElement("g", null),
        direction: "inherit",
        textComponent: O.createElement(AO, null),
        tspanComponent: O.createElement(MO, null),
        capHeight: .71,
        lineHeight: 1
    },
    dr = function(t) {
        if (t = jj(Ao(Ao({}, Pj), t)), t.text === null || t.text === void 0) return null;
        var n = Aj(t),
            r = n.text,
            e = n.style,
            o = n.capHeight,
            i = n.backgroundPadding,
            a = n.lineHeight,
            u = r.map(function(h, d) {
                var y = bt(e, d),
                    m = Ya("".concat(o, "em"), y.fontSize),
                    g = bt(a, d);
                return {
                    style: y,
                    fontSize: y.fontSize || Kn.fontSize,
                    capHeight: m,
                    text: h,
                    textSize: Ja(h, y),
                    lineHeight: g,
                    backgroundPadding: bt(i, d)
                }
            }),
            s = Ej(n, u);
        if (t.backgroundStyle) {
            var c = xj(n, u),
                l = [c, s],
                f = O.cloneElement(t.groupComponent, {}, l);
            return t.renderInPortal ? O.createElement(vn, null, f) : f
        }
        return t.renderInPortal ? O.createElement(vn, null, s) : s
    };
dr.displayName = "VictoryLabel", dr.role = "label", dr.defaultStyles = Kn, dr.propTypes = {
    active: p.bool,
    angle: p.oneOfType([p.string, p.number, p.func]),
    ariaLabel: p.oneOfType([p.string, p.func]),
    backgroundComponent: p.element,
    backgroundPadding: p.oneOfType([p.number, p.object, p.array]),
    backgroundStyle: p.oneOfType([p.object, p.array]),
    capHeight: p.oneOfType([p.string, H, p.func]),
    className: p.string,
    data: p.array,
    datum: p.any,
    desc: p.oneOfType([p.string, p.func]),
    direction: p.oneOf(["rtl", "ltr", "inherit"]),
    dx: p.oneOfType([p.number, p.string, p.func]),
    dy: p.oneOfType([p.number, p.string, p.func]),
    events: p.object,
    groupComponent: p.element,
    id: p.oneOfType([p.number, p.string, p.func]),
    index: p.oneOfType([p.number, p.string]),
    inline: p.bool,
    labelPlacement: p.oneOf(["parallel", "perpendicular", "vertical"]),
    lineHeight: p.oneOfType([p.string, H, p.func, p.array]),
    origin: p.shape({
        x: H.isRequired,
        y: H.isRequired
    }),
    polar: p.bool,
    renderInPortal: p.bool,
    scale: p.shape({
        x: Zt,
        y: Zt
    }),
    style: p.oneOfType([p.object, p.array]),
    tabIndex: p.oneOfType([p.number, p.func]),
    text: p.oneOfType([p.string, p.number, p.func, p.array]),
    textAnchor: p.oneOfType([p.oneOf(["start", "middle", "end", "inherit"]), p.func]),
    textComponent: p.element,
    title: p.string,
    transform: p.oneOfType([p.string, p.object, p.func]),
    tspanComponent: p.element,
    verticalAnchor: p.oneOfType([p.oneOf(["start", "middle", "end"]), p.func]),
    x: p.oneOfType([p.number, p.string]),
    y: p.oneOfType([p.number, p.string])
};

function O5(t, n) {
    return (t.key || n).toString()
}

function j5(t) {
    return t.reduce(function(n, r, e) {
        var o = O5(r, e);
        return n[o] = r, n
    }, {})
}

function A5(t, n) {
    var r = !1,
        e = nt(t).reduce(function(o, i) {
            return i in n || (r = !0, o[i] = !0), o
        }, {});
    return r && e
}

function Sj(t, n) {
    var r = t && j5(t),
        e = n && j5(n);
    return {
        entering: r && A5(e, r),
        exiting: e && A5(r, e)
    }
}

function tu(t) {
    return t.type && t.type.getData ? t.type.getData(t.props) : t.props && t.props.data || !1
}

function E5(t, n) {
    var r = !1,
        e = !1,
        o = function(u, s) {
            if (!s || u.type !== s.type) return {};
            var c = Sj(tu(u), tu(s)) || {},
                l = c.entering,
                f = c.exiting;
            return r = r || !!f, e = e || !!l, {
                entering: l || !1,
                exiting: f || !1
            }
        },
        i = function(u, s) {
            return u.map(function(c, l) {
                return c && c.props && c.props.children && s[l] ? i(O.Children.toArray(u[l].props.children), O.Children.toArray(s[l].props.children)) : o(c, s[l])
            })
        },
        a = i(O.Children.toArray(t), O.Children.toArray(n));
    return {
        nodesWillExit: r,
        nodesWillEnter: e,
        childrenTransitions: a,
        nodesShouldEnter: !1
    }
}

function Tj(t, n) {
    var r = t.onEnter && t.onEnter.after ? t.onEnter.after : Nn;
    return {
        data: n.map(function(e, o) {
            return A({}, e, r(e, o, n))
        })
    }
}

function kj(t, n, r, e) {
    if (t = A({}, t, {
            onEnd: e
        }), t && t.onLoad && !t.onLoad.duration) return {
        animate: t,
        data: r
    };
    var o = t.onLoad && t.onLoad.before ? t.onLoad.before : Nn;
    return r = r.map(function(i, a) {
        return A({}, i, o(i, a, r))
    }), {
        animate: t,
        data: r,
        clipWidth: 0
    }
}

function Mj(t, n, r) {
    if (t = A({}, t, {
            onEnd: r
        }), t && t.onLoad && !t.onLoad.duration) return {
        animate: t,
        data: n
    };
    var e = t.onLoad && t.onLoad.after ? t.onLoad.after : Nn;
    return n = n.map(function(o, i) {
        return A({}, o, e(o, i, n))
    }), {
        animate: t,
        data: n
    }
}

function Cj(t, n, r, e, o) {
    var i = t && t.onExit;
    if (t = A({}, t, i), e) {
        t.onEnd = o;
        var a = t.onExit && t.onExit.before ? t.onExit.before : Nn;
        r = r.map(function(u, s) {
            var c = (u.key || s).toString();
            return e[c] ? A({}, u, a(u, s, r)) : u
        })
    }
    return {
        animate: t,
        data: r
    }
}

function Dj(t, n, r, e, o) {
    if (e) {
        t = A({}, t, {
            onEnd: o
        });
        var i = t.onEnter && t.onEnter.before ? t.onEnter.before : Nn;
        r = r.map(function(a, u) {
            var s = (a.key || u).toString();
            return e[s] ? A({}, a, i(a, u, r)) : a
        })
    }
    return {
        animate: t,
        data: r
    }
}

function Nj(t, n, r, e) {
    var o = t && t.onEnter;
    if (t = A({}, t, o), r) {
        t.onEnd = e;
        var i = t.onEnter && t.onEnter.after ? t.onEnter.after : Nn;
        n = n.map(function(a, u) {
            var s = O5(a, u);
            return r[s] ? A({}, a, i(a, u, n)) : a
        })
    }
    return {
        animate: t,
        data: n
    }
}

function P5(t, n, r) {
    var e = n && n.nodesWillExit,
        o = n && n.nodesWillEnter,
        i = n && n.nodesShouldEnter,
        a = n && n.nodesShouldLoad,
        u = n && n.nodesDoneLoad,
        s = n && n.childrenTransitions || [],
        c = {
            enter: t.animate && t.animate.onEnter && t.animate.onEnter.duration,
            exit: t.animate && t.animate.onExit && t.animate.onExit.duration,
            load: t.animate && t.animate.onLoad && t.animate.onLoad.duration,
            move: t.animate && t.animate.duration
        },
        l = function(y, m, g) {
            return a ? Mj(g, m, function() {
                r({
                    nodesShouldLoad: !1,
                    nodesDoneLoad: !0
                })
            }) : kj(g, y, m, function() {
                r({
                    nodesDoneLoad: !0
                })
            })
        },
        f = function(y, m, g, v) {
            return Cj(v, m, g, y, function() {
                r({
                    nodesWillExit: !1
                })
            })
        },
        h = function(y, m, g, v) {
            return i ? Nj(v, g, y, function() {
                r({
                    nodesWillEnter: !1
                })
            }) : Dj(v, m, g, y, function() {
                r({
                    nodesShouldEnter: !0
                })
            })
        },
        d = function(y, m) {
            var g = y.props.animate;
            if (!y.type) return {};
            var v = y.props && y.props.polar && y.type.defaultPolarTransitions || y.type.defaultTransitions;
            if (v) {
                var b = g[m] && g[m].duration;
                return b !== void 0 ? b : v[m] && v[m].duration
            }
            return {}
        };
    return function(y, m) {
        var g = tu(y) || [],
            v = $({}, t.animate, y.props.animate),
            b = y.props.polar && y.type.defaultPolarTransitions || y.type.defaultTransitions;
        v.onExit = $({}, v.onExit, b && b.onExit), v.onEnter = $({}, v.onEnter, b && b.onEnter), v.onLoad = $({}, v.onLoad, b && b.onLoad);
        var _ = s[m] || s[0];
        if (u) {
            if (e) {
                var w = _ && _.exiting,
                    j = c.exit !== void 0 ? c.exit : d(y, "onExit"),
                    x = w ? {
                        duration: j
                    } : {
                        delay: j
                    };
                return f(w, y, g, A({}, v, x))
            } else if (o) {
                var P = _ && _.entering,
                    T = c.enter !== void 0 ? c.enter : d(y, "onEnter"),
                    C = c.move !== void 0 ? c.move : y.props.animate && y.props.animate.duration,
                    I = {
                        duration: i && P ? T : C
                    };
                return h(P, y, g, A({}, v, I))
            } else if (!n && v && v.onExit) return Tj(v, g)
        } else {
            var k = c.load !== void 0 ? c.load : d(y, "onLoad"),
                N = {
                    duration: k
                };
            return l(y, g, A({}, v, N))
        }
        return {
            animate: v,
            data: g
        }
    }
}

function nu() {
    return nu = Object.assign ? Object.assign.bind() : function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e])
        }
        return t
    }, nu.apply(this, arguments)
}

function Ij(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function S5(t, n) {
    for (var r = 0; r < n.length; r++) {
        var e = n[r];
        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
    }
}

function Rj(t, n, r) {
    return n && S5(t.prototype, n), r && S5(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function Lj(t, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), n && ru(t, n)
}

function ru(t, n) {
    return ru = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, e) {
        return r.__proto__ = e, r
    }, ru(t, n)
}

function $j(t) {
    var n = Wj();
    return function() {
        var r = Eo(t),
            e;
        if (n) {
            var o = Eo(this).constructor;
            e = Reflect.construct(r, arguments, o)
        } else e = r.apply(this, arguments);
        return zj(this, e)
    }
}

function zj(t, n) {
    if (n && (typeof n == "object" || typeof n == "function")) return n;
    if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Uj(t)
}

function Uj(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function Wj() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch (t) {
        return !1
    }
}

function Eo(t) {
    return Eo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Eo(t)
}
var Po = function(t) {
    Lj(r, t);
    var n = $j(r);

    function r(e, o) {
        var i;
        Ij(this, r), i = n.call(this, e, o), i.continuous = void 0, i.timer = void 0, i.transitionProps = void 0, i.state = {
            nodesShouldLoad: !1,
            nodesDoneLoad: !1
        };
        var a = i.props.children,
            u = a.props.polar;
        return i.continuous = !u && a.type && a.type.continuous === !0, i.timer = i.context.transitionTimer, i
    }
    return Rj(r, [{
        key: "componentDidMount",
        value: function() {
            this.setState({
                nodesShouldLoad: !0
            })
        }
    }, {
        key: "shouldComponentUpdate",
        value: function(e) {
            var o = this;
            return Gt(this.props, e) || (this.timer.bypassAnimation(), this.setState(this.getTransitionState(this.props, e), function() {
                return o.timer.resumeAnimation()
            })), !0
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            this.timer.stop()
        }
    }, {
        key: "getTransitionState",
        value: function(e, o) {
            var i = e.animate;
            if (i) {
                if (i.parentState) {
                    var a = i.parentState,
                        u = a.nodesWillExit ? e : null;
                    return {
                        oldProps: u,
                        nextProps: o
                    }
                }
            } else return {};
            var s = O.Children.toArray(e.children),
                c = O.Children.toArray(o.children),
                l = E5(s, c),
                f = l.nodesWillExit,
                h = l.nodesWillEnter,
                d = l.childrenTransitions,
                y = l.nodesShouldEnter;
            return {
                nodesWillExit: f,
                nodesWillEnter: h,
                childrenTransitions: d,
                nodesShouldEnter: y,
                oldProps: f ? e : null,
                nextProps: o
            }
        }
    }, {
        key: "getDomainFromChildren",
        value: function(e, o) {
            var i = function(l) {
                    return l.reduce(function(f, h) {
                        if (h.type && Y(h.type.getDomain)) {
                            var d = h.props && h.type.getDomain(h.props, o);
                            return d ? f.concat(d) : f
                        } else if (h.props && h.props.children) return f.concat(i(O.Children.toArray(h.props.children)));
                        return f
                    }, [])
                },
                a = O.Children.toArray(e.children)[0],
                u = a.props || {},
                s = Array.isArray(u.domain) ? u.domain : u.domain && u.domain[o];
            if (!u.children && s) return s;
            var c = i([a]);
            return c.length === 0 ? [0, 1] : [sn(c), Wn(c)]
        }
    }, {
        key: "pickProps",
        value: function() {
            return this.state ? this.state.nodesWillExit ? this.state.oldProps || this.props : this.props : this.props
        }
    }, {
        key: "pickDomainProps",
        value: function(e) {
            var o, i = (o = e.animate) === null || o === void 0 ? void 0 : o.parentState;
            return i && i.nodesWillExit ? (this.continuous || i.continuous) && (i.nextProps || this.state.nextProps) || e : this.continuous && this.state.nodesWillExit && this.state.nextProps || e
        }
    }, {
        key: "getClipWidth",
        value: function(e, o) {
            var i = function() {
                    var u = Qt(o.props, "x");
                    return u ? Math.abs(u[1] - u[0]) : e.width
                },
                a = this.transitionProps ? this.transitionProps.clipWidth : void 0;
            return a !== void 0 ? a : i()
        }
    }, {
        key: "render",
        value: function() {
            var e, o = this,
                i = this.pickProps(),
                a = (e = this.props.animate) !== null && e !== void 0 && e.getTransitions ? this.props.animate.getTransitions : P5(i, this.state, function(m) {
                    return o.setState(m)
                }),
                u = O.Children.toArray(i.children)[0],
                s = a(u);
            this.transitionProps = s;
            var c = {
                    x: this.getDomainFromChildren(this.pickDomainProps(i), "x"),
                    y: this.getDomainFromChildren(i, "y")
                },
                l = this.getClipWidth(i, u),
                f = $({
                    domain: c,
                    clipWidth: l
                }, s, u.props),
                h = i.animationWhitelist || [],
                d = h.concat(["clipWidth"]),
                y = d.length ? Yr(f, d) : f;
            return O.createElement(Vr, nu({}, f.animate, {
                data: y
            }), function(m) {
                if (u.props.groupComponent) {
                    var g = o.continuous ? O.cloneElement(u.props.groupComponent, {
                        clipWidth: m.clipWidth || 0
                    }) : u.props.groupComponent;
                    return O.cloneElement(u, $({
                        animate: null,
                        animating: !0,
                        groupComponent: g
                    }, m, f))
                }
                return O.cloneElement(u, $({
                    animate: null,
                    animating: !0
                }, m, f))
            })
        }
    }]), r
}(O.Component);
Po.displayName = "VictoryTransition", Po.propTypes = {
    animate: p.oneOfType([p.bool, p.object]),
    animationWhitelist: p.array,
    children: p.node
}, Po.contextType = Qe;
var Fj = function(t) {
        var n;
        return O.createElement("defs", null, O.createElement("clipPath", {
            id: (n = t.clipId) === null || n === void 0 ? void 0 : n.toString()
        }, t.children))
    },
    Bj = ["desc", "id", "tabIndex", "origin"];

function So() {
    return So = Object.assign ? Object.assign.bind() : function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e])
        }
        return t
    }, So.apply(this, arguments)
}

function T5(t, n) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        n && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), r.push.apply(r, e)
    }
    return r
}

function Hj(t) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? T5(Object(r), !0).forEach(function(e) {
            qj(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : T5(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function qj(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}

function Kj(t, n) {
    if (t == null) return {};
    var r = Vj(t, n),
        e, o;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (o = 0; o < i.length; o++) e = i[o], !(n.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(t, e) && (r[e] = t[e])
    }
    return r
}

function Vj(t, n) {
    if (t == null) return {};
    var r = {},
        e = Object.keys(t),
        o, i;
    for (i = 0; i < e.length; i++) o = e[i], !(n.indexOf(o) >= 0) && (r[o] = t[o]);
    return r
}
var Gj = it.forwardRef(function(t, n) {
    var r, e = t.desc,
        o = t.id,
        i = t.tabIndex;
    t.origin;
    var a = Kj(t, Bj),
        u = Hj({
            vectorEffect: "non-scaling-stroke",
            id: (r = L(o, t)) === null || r === void 0 ? void 0 : r.toString(),
            tabIndex: L(i, t)
        }, a);
    return e ? O.createElement("circle", So({}, u, {
        ref: n
    }), O.createElement("desc", null, e)) : O.createElement("circle", So({}, u, {
        ref: n
    }))
});

function k5(t) {
    return Jj(t) || Qj(t) || Xj(t) || Yj()
}

function Yj() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Xj(t, n) {
    if (t) {
        if (typeof t == "string") return eu(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eu(t, n)
    }
}

function Qj(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
}

function Jj(t) {
    if (Array.isArray(t)) return eu(t)
}

function eu(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e
}

function M5(t, n) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        n && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), r.push.apply(r, e)
    }
    return r
}

function C5(t) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? M5(Object(r), !0).forEach(function(e) {
            Zj(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : M5(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function Zj(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}

function tA(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function D5(t, n) {
    for (var r = 0; r < n.length; r++) {
        var e = n[r];
        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
    }
}

function nA(t, n, r) {
    return n && D5(t.prototype, n), r && D5(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function rA(t, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), n && ou(t, n)
}

function ou(t, n) {
    return ou = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, e) {
        return r.__proto__ = e, r
    }, ou(t, n)
}

function eA(t) {
    var n = aA();
    return function() {
        var r = To(t),
            e;
        if (n) {
            var o = To(this).constructor;
            e = Reflect.construct(r, arguments, o)
        } else e = r.apply(this, arguments);
        return oA(this, e)
    }
}

function oA(t, n) {
    if (n && (typeof n == "object" || typeof n == "function")) return n;
    if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return iA(t)
}

function iA(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function aA() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch (t) {
        return !1
    }
}

function To(t) {
    return To = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, To(t)
}
var Vn = function(t) {
    rA(r, t);
    var n = eA(r);

    function r(e) {
        var o;
        return tA(this, r), o = n.call(this, e), o.clipId = void 0, o.clipId = !Es(e) || e.clipId === void 0 ? ra("victory-clip-") : e.clipId, o
    }
    return nA(r, [{
        key: "calculateAttributes",
        value: function(e) {
            var o = e.polar,
                i = e.origin,
                a = e.clipWidth,
                u = a === void 0 ? 0 : a,
                s = e.clipHeight,
                c = s === void 0 ? 0 : s,
                l = e.translateX,
                f = l === void 0 ? 0 : l,
                h = e.translateY,
                d = h === void 0 ? 0 : h,
                y = Yt({
                    padding: e.clipPadding
                }),
                m = e.radius || ia(e);
            return {
                x: (o ? i.x : f) - y.left,
                y: (o ? i.y : d) - y.top,
                width: Math.max((o ? m : u) + y.left + y.right, 0),
                height: Math.max((o ? m : c) + y.top + y.bottom, 0)
            }
        }
    }, {
        key: "renderClippedGroup",
        value: function(e, o) {
            var i = qn(e),
                a = e.style,
                u = e.events,
                s = e.transform,
                c = e.children,
                l = e.className,
                f = e.groupComponent,
                h = e.tabIndex,
                d = this.renderClipComponent(e, o),
                y = A({
                    className: l,
                    style: a,
                    transform: s,
                    key: "clipped-group-".concat(o),
                    clipPath: "url(#".concat(o, ")")
                }, u);
            return O.cloneElement(f, C5(C5({}, y), {}, {
                tabIndex: h
            }, i), [d].concat(k5(O.Children.toArray(c))))
        }
    }, {
        key: "renderGroup",
        value: function(e) {
            var o = e.style,
                i = e.events,
                a = e.transform,
                u = e.children,
                s = e.className,
                c = e.groupComponent,
                l = e.tabIndex;
            return O.cloneElement(c, A({
                className: s,
                style: o,
                transform: a,
                "aria-label": e["aria-label"],
                tabIndex: l
            }, i), u)
        }
    }, {
        key: "renderClipComponent",
        value: function(e, o) {
            var i = e.polar,
                a = e.origin,
                u = e.clipWidth,
                s = u === void 0 ? 0 : u,
                c = e.clipHeight,
                l = c === void 0 ? 0 : c,
                f = e.translateX,
                h = f === void 0 ? 0 : f,
                d = e.translateY,
                y = d === void 0 ? 0 : d,
                m = e.circleComponent,
                g = e.rectComponent,
                v = e.clipPathComponent,
                b = Yt({
                    padding: e.clipPadding
                }),
                _ = b.top,
                w = b.bottom,
                j = b.left,
                x = b.right,
                P;
            if (i) {
                var T = e.radius || ia(e),
                    C = {
                        r: Math.max(T + j + x, T + _ + w, 0),
                        cx: a.x - j,
                        cy: a.y - _
                    };
                P = O.cloneElement(m, C)
            } else {
                var I = {
                    x: h - j,
                    y: y - _,
                    width: Math.max(s + j + x, 0),
                    height: Math.max(l + _ + w, 0)
                };
                P = O.cloneElement(g, I)
            }
            return O.cloneElement(v, A({
                key: "clip-path-".concat(o)
            }, e, {
                clipId: o
            }), P)
        }
    }, {
        key: "getClipValue",
        value: function(e, o) {
            var i = {
                x: e.clipWidth,
                y: e.clipHeight
            };
            if (i[o] !== void 0) return i[o];
            var a = Qt(e, o);
            return a && Math.abs(a[0] - a[1]) || void 0
        }
    }, {
        key: "getTranslateValue",
        value: function(e, o) {
            var i = {
                x: e.translateX,
                y: e.translateY
            };
            if (i[o] !== void 0) return i[o];
            var a = Qt(e, o);
            return a ? Math.min.apply(Math, k5(a)) : void 0
        }
    }, {
        key: "render",
        value: function() {
            var e = this.getClipValue(this.props, "y"),
                o = this.getClipValue(this.props, "x");
            if (o === void 0 || e === void 0) return this.renderGroup(this.props);
            var i = this.getTranslateValue(this.props, "x"),
                a = this.getTranslateValue(this.props, "y"),
                u = $({}, this.props, {
                    clipHeight: e,
                    clipWidth: o,
                    translateX: i,
                    translateY: a
                });
            return this.renderClippedGroup(u, this.clipId)
        }
    }]), r
}(O.Component);
Vn.displayName = "VictoryClipContainer", Vn.role = "container", Vn.propTypes = {
    "aria-label": p.string,
    children: p.oneOfType([p.arrayOf(p.node), p.node]),
    circleComponent: p.element,
    className: p.string,
    clipHeight: H,
    clipId: p.oneOfType([p.number, p.string]),
    clipPadding: p.shape({
        top: p.number,
        bottom: p.number,
        left: p.number,
        right: p.number
    }),
    clipPathComponent: p.element,
    clipWidth: H,
    events: p.object,
    groupComponent: p.element,
    origin: p.shape({
        x: H,
        y: H
    }),
    polar: p.bool,
    radius: H,
    style: p.object,
    tabIndex: p.number,
    transform: p.string,
    translateX: p.number,
    translateY: p.number
}, Vn.defaultProps = {
    circleComponent: O.createElement(Gj, null),
    rectComponent: O.createElement(a5, null),
    clipPathComponent: O.createElement(Fj, null),
    groupComponent: O.createElement("g", null)
};
var ce = ["#252525", "#525252", "#737373", "#969696", "#bdbdbd", "#d9d9d9", "#f0f0f0"],
    _t = "#252525",
    iu = "#969696",
    uA = "'Gill Sans', 'Seravek', 'Trebuchet MS', sans-serif",
    sA = "normal",
    cA = 14,
    At = {
        width: 450,
        height: 300,
        padding: 50,
        colorScale: ce
    },
    ut = {
        fontFamily: uA,
        fontSize: cA,
        letterSpacing: sA,
        padding: 10,
        fill: _t,
        stroke: "transparent"
    },
    lA = A({
        textAnchor: "middle"
    }, ut),
    fA = "round",
    hA = "round",
    pA = {
        area: A({
            style: {
                data: {
                    fill: _t
                },
                labels: ut
            }
        }, At),
        axis: A({
            style: {
                axis: {
                    fill: "transparent",
                    stroke: _t,
                    strokeWidth: 1,
                    strokeLinecap: fA,
                    strokeLinejoin: hA
                },
                axisLabel: A({}, lA, {
                    padding: 25
                }),
                grid: {
                    fill: "none",
                    stroke: "none",
                    pointerEvents: "painted"
                },
                ticks: {
                    fill: "transparent",
                    size: 1,
                    stroke: "transparent"
                },
                tickLabels: ut
            }
        }, At),
        bar: A({
            style: {
                data: {
                    fill: _t,
                    padding: 8,
                    strokeWidth: 0
                },
                labels: ut
            }
        }, At),
        boxplot: A({
            style: {
                max: {
                    padding: 8,
                    stroke: _t,
                    strokeWidth: 1
                },
                maxLabels: A({}, ut, {
                    padding: 3
                }),
                median: {
                    padding: 8,
                    stroke: _t,
                    strokeWidth: 1
                },
                medianLabels: A({}, ut, {
                    padding: 3
                }),
                min: {
                    padding: 8,
                    stroke: _t,
                    strokeWidth: 1
                },
                minLabels: A({}, ut, {
                    padding: 3
                }),
                q1: {
                    padding: 8,
                    fill: iu
                },
                q1Labels: A({}, ut, {
                    padding: 3
                }),
                q3: {
                    padding: 8,
                    fill: iu
                },
                q3Labels: A({}, ut, {
                    padding: 3
                })
            },
            boxWidth: 20
        }, At),
        candlestick: A({
            style: {
                data: {
                    stroke: _t,
                    strokeWidth: 1
                },
                labels: A({}, ut, {
                    padding: 5
                })
            },
            candleColors: {
                positive: "#ffffff",
                negative: _t
            }
        }, At),
        chart: At,
        errorbar: A({
            borderWidth: 8,
            style: {
                data: {
                    fill: "transparent",
                    stroke: _t,
                    strokeWidth: 2
                },
                labels: ut
            }
        }, At),
        group: A({
            colorScale: ce
        }, At),
        histogram: A({
            style: {
                data: {
                    fill: iu,
                    stroke: _t,
                    strokeWidth: 2
                },
                labels: ut
            }
        }, At),
        legend: {
            colorScale: ce,
            gutter: 10,
            orientation: "vertical",
            titleOrientation: "top",
            style: {
                data: {
                    type: "circle"
                },
                labels: ut,
                title: A({}, ut, {
                    padding: 5
                })
            }
        },
        line: A({
            style: {
                data: {
                    fill: "transparent",
                    stroke: _t,
                    strokeWidth: 2
                },
                labels: ut
            }
        }, At),
        pie: {
            style: {
                data: {
                    padding: 10,
                    stroke: "transparent",
                    strokeWidth: 1
                },
                labels: A({}, ut, {
                    padding: 20
                })
            },
            colorScale: ce,
            width: 400,
            height: 400,
            padding: 50
        },
        scatter: A({
            style: {
                data: {
                    fill: _t,
                    stroke: "transparent",
                    strokeWidth: 0
                },
                labels: ut
            }
        }, At),
        stack: A({
            colorScale: ce
        }, At),
        tooltip: {
            style: A({}, ut, {
                padding: 0,
                pointerEvents: "none"
            }),
            flyoutStyle: {
                stroke: _t,
                strokeWidth: 1,
                fill: "#f0f0f0",
                pointerEvents: "none"
            },
            flyoutPadding: 5,
            cornerRadius: 5,
            pointerLength: 10
        },
        voronoi: A({
            style: {
                data: {
                    fill: "transparent",
                    stroke: "transparent",
                    strokeWidth: 0
                },
                labels: A({}, ut, {
                    padding: 5,
                    pointerEvents: "none"
                }),
                flyout: {
                    stroke: _t,
                    strokeWidth: 1,
                    fill: "#f0f0f0",
                    pointerEvents: "none"
                }
            }
        }, At)
    },
    dA = "#FFF59D",
    yA = "#F4511E",
    vA = "#DCE775",
    gA = "#8BC34A",
    mA = "#00796B",
    bA = "#006064",
    ko = [yA, dA, vA, gA, mA, bA],
    N5 = "#ECEFF1",
    I5 = "#90A4AE",
    wt = "#455A64",
    Mo = "#212121",
    _A = "'Helvetica Neue', 'Helvetica', sans-serif",
    xA = "normal",
    wA = 12,
    gn = 8,
    Ot = {
        width: 350,
        height: 350,
        padding: 50
    },
    st = {
        fontFamily: _A,
        fontSize: wA,
        letterSpacing: xA,
        padding: gn,
        fill: wt,
        stroke: "transparent",
        strokeWidth: 0
    },
    OA = A({
        textAnchor: "middle"
    }, st),
    jA = "10, 5",
    au = "round",
    uu = "round",
    AA = {
        area: A({
            style: {
                data: {
                    fill: Mo
                },
                labels: st
            }
        }, Ot),
        axis: A({
            style: {
                axis: {
                    fill: "transparent",
                    stroke: I5,
                    strokeWidth: 2,
                    strokeLinecap: au,
                    strokeLinejoin: uu
                },
                axisLabel: A({}, OA, {
                    padding: gn,
                    stroke: "transparent"
                }),
                grid: {
                    fill: "none",
                    stroke: N5,
                    strokeDasharray: jA,
                    strokeLinecap: au,
                    strokeLinejoin: uu,
                    pointerEvents: "painted"
                },
                ticks: {
                    fill: "transparent",
                    size: 5,
                    stroke: I5,
                    strokeWidth: 1,
                    strokeLinecap: au,
                    strokeLinejoin: uu
                },
                tickLabels: A({}, st, {
                    fill: wt
                })
            }
        }, Ot),
        polarDependentAxis: A({
            style: {
                ticks: {
                    fill: "transparent",
                    size: 1,
                    stroke: "transparent"
                }
            }
        }),
        bar: A({
            style: {
                data: {
                    fill: wt,
                    padding: gn,
                    strokeWidth: 0
                },
                labels: st
            }
        }, Ot),
        boxplot: A({
            style: {
                max: {
                    padding: gn,
                    stroke: wt,
                    strokeWidth: 1
                },
                maxLabels: A({}, st, {
                    padding: 3
                }),
                median: {
                    padding: gn,
                    stroke: wt,
                    strokeWidth: 1
                },
                medianLabels: A({}, st, {
                    padding: 3
                }),
                min: {
                    padding: gn,
                    stroke: wt,
                    strokeWidth: 1
                },
                minLabels: A({}, st, {
                    padding: 3
                }),
                q1: {
                    padding: gn,
                    fill: wt
                },
                q1Labels: A({}, st, {
                    padding: 3
                }),
                q3: {
                    padding: gn,
                    fill: wt
                },
                q3Labels: A({}, st, {
                    padding: 3
                })
            },
            boxWidth: 20
        }, Ot),
        candlestick: A({
            style: {
                data: {
                    stroke: wt
                },
                labels: A({}, st, {
                    padding: 5
                })
            },
            candleColors: {
                positive: "#ffffff",
                negative: wt
            }
        }, Ot),
        chart: Ot,
        errorbar: A({
            borderWidth: 8,
            style: {
                data: {
                    fill: "transparent",
                    opacity: 1,
                    stroke: wt,
                    strokeWidth: 2
                },
                labels: st
            }
        }, Ot),
        group: A({
            colorScale: ko
        }, Ot),
        histogram: A({
            style: {
                data: {
                    fill: wt,
                    stroke: Mo,
                    strokeWidth: 2
                },
                labels: st
            }
        }, Ot),
        legend: {
            colorScale: ko,
            gutter: 10,
            orientation: "vertical",
            titleOrientation: "top",
            style: {
                data: {
                    type: "circle"
                },
                labels: st,
                title: A({}, st, {
                    padding: 5
                })
            }
        },
        line: A({
            style: {
                data: {
                    fill: "transparent",
                    opacity: 1,
                    stroke: wt,
                    strokeWidth: 2
                },
                labels: st
            }
        }, Ot),
        pie: A({
            colorScale: ko,
            style: {
                data: {
                    padding: gn,
                    stroke: N5,
                    strokeWidth: 1
                },
                labels: A({}, st, {
                    padding: 20
                })
            }
        }, Ot),
        scatter: A({
            style: {
                data: {
                    fill: wt,
                    opacity: 1,
                    stroke: "transparent",
                    strokeWidth: 0
                },
                labels: st
            }
        }, Ot),
        stack: A({
            colorScale: ko
        }, Ot),
        tooltip: {
            style: A({}, st, {
                padding: 0,
                pointerEvents: "none"
            }),
            flyoutStyle: {
                stroke: Mo,
                strokeWidth: 1,
                fill: "#f0f0f0",
                pointerEvents: "none"
            },
            flyoutPadding: 5,
            cornerRadius: 5,
            pointerLength: 10
        },
        voronoi: A({
            style: {
                data: {
                    fill: "transparent",
                    stroke: "transparent",
                    strokeWidth: 0
                },
                labels: A({}, st, {
                    padding: 5,
                    pointerEvents: "none"
                }),
                flyout: {
                    stroke: Mo,
                    strokeWidth: 1,
                    fill: "#f0f0f0",
                    pointerEvents: "none"
                }
            }
        }, Ot)
    },
    su = {
        grayscale: pA,
        material: AA
    },
    EA = {
        categories: p.oneOfType([p.arrayOf(p.string), p.shape({
            x: p.arrayOf(p.string),
            y: p.arrayOf(p.string)
        })]),
        data: p.oneOfType([p.array, p.object]),
        dataComponent: p.element,
        disableInlineStyles: p.bool,
        labelComponent: p.element,
        labels: p.oneOfType([p.func, p.array]),
        samples: H,
        sortKey: p.oneOfType([p.func, Jt([$t, H]), p.string, p.arrayOf(p.string.isRequired)]),
        sortOrder: p.oneOf(["ascending", "descending"]),
        style: p.shape({
            parent: p.object,
            data: p.object,
            labels: p.object
        }),
        x: p.oneOfType([p.func, Jt([$t, H]), p.string, p.arrayOf(p.string.isRequired)]),
        y: p.oneOfType([p.func, Jt([$t, H]), p.string, p.arrayOf(p.string.isRequired)]),
        y0: p.oneOfType([p.func, Jt([$t, H]), p.string, p.arrayOf(p.string.isRequired)])
    },
    PA = {
        animate: p.oneOfType([p.bool, p.object]),
        containerComponent: p.element,
        domain: p.oneOfType([hr, p.shape({
            x: hr,
            y: hr
        })]),
        maxDomain: p.oneOfType([p.number, p.instanceOf(Date), p.shape({
            x: p.oneOfType([p.number, p.instanceOf(Date)]),
            y: p.oneOfType([p.number, p.instanceOf(Date)])
        })]),
        minDomain: p.oneOfType([p.number, p.instanceOf(Date), p.shape({
            x: p.oneOfType([p.number, p.instanceOf(Date)]),
            y: p.oneOfType([p.number, p.instanceOf(Date)])
        })]),
        domainPadding: p.oneOfType([p.shape({
            x: p.oneOfType([p.number, p.arrayOf(p.number)]),
            y: p.oneOfType([p.number, p.arrayOf(p.number)])
        }), p.number, p.arrayOf(p.number)]),
        eventKey: p.oneOfType([p.func, Jt([$t, H]), p.string]),
        events: p.arrayOf(p.shape({
            target: p.oneOf(["data", "labels", "parent"]),
            eventKey: p.oneOfType([p.array, Jt([$t, H]), p.string]),
            eventHandlers: p.object
        })),
        externalEventMutations: p.arrayOf(p.shape({
            callback: p.func,
            childName: p.oneOfType([p.string, p.array]),
            eventKey: p.oneOfType([p.array, Jt([$t, H]), p.string]),
            mutation: p.func,
            target: p.oneOfType([p.string, p.array])
        })),
        groupComponent: p.element,
        height: H,
        name: p.string,
        origin: p.shape({
            x: p.number,
            y: p.number
        }),
        padding: p.oneOfType([p.number, p.shape({
            top: p.number,
            bottom: p.number,
            left: p.number,
            right: p.number
        })]),
        polar: p.bool,
        range: p.oneOfType([hr, p.shape({
            x: hr.isRequired,
            y: hr.isRequired
        })]),
        scale: p.oneOfType([Zt, p.shape({
            x: Zt.isRequired,
            y: Zt.isRequired
        })]),
        sharedEvents: p.shape({
            events: p.array,
            getEventState: p.func
        }),
        singleQuadrantDomainPadding: p.oneOfType([p.bool, p.shape({
            x: p.oneOfType([p.bool]),
            y: p.oneOfType([p.bool])
        })]),
        standalone: p.bool,
        theme: p.object,
        width: H
    },
    SA = {
        active: p.bool,
        ariaLabel: p.oneOfType([p.string, p.func]),
        className: p.string,
        clipPath: p.string,
        data: p.oneOfType([p.array, p.object]),
        desc: p.oneOfType([p.string, p.func]),
        disableInlineStyles: p.bool,
        events: p.object,
        id: p.oneOfType([p.number, p.string, p.func]),
        index: p.oneOfType([p.number, p.string]),
        origin: p.shape({
            x: p.number,
            y: p.number
        }),
        polar: p.bool,
        role: p.string,
        scale: p.oneOfType([Zt, p.shape({
            x: Zt,
            y: Zt
        })]),
        shapeRendering: p.string,
        style: p.object,
        tabIndex: p.oneOfType([p.number, p.func]),
        transform: p.string
    },
    yr = {
        dataProps: EA,
        baseProps: PA,
        primitiveProps: SA
    },
    TA = ["desc", "id", "tabIndex", "origin"];

function Co() {
    return Co = Object.assign ? Object.assign.bind() : function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e])
        }
        return t
    }, Co.apply(this, arguments)
}

function R5(t, n) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        n && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), r.push.apply(r, e)
    }
    return r
}

function kA(t) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? R5(Object(r), !0).forEach(function(e) {
            MA(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : R5(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function MA(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}

function CA(t, n) {
    if (t == null) return {};
    var r = DA(t, n),
        e, o;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (o = 0; o < i.length; o++) e = i[o], !(n.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(t, e) && (r[e] = t[e])
    }
    return r
}

function DA(t, n) {
    if (t == null) return {};
    var r = {},
        e = Object.keys(t),
        o, i;
    for (i = 0; i < e.length; i++) o = e[i], !(n.indexOf(o) >= 0) && (r[o] = t[o]);
    return r
}
var L5 = it.forwardRef(function(t, n) {
        var r, e = t.desc,
            o = t.id,
            i = t.tabIndex;
        t.origin;
        var a = CA(t, TA),
            u = kA({
                id: (r = L(o, t)) === null || r === void 0 ? void 0 : r.toString(),
                tabIndex: L(i, t)
            }, a);
        return e ? O.createElement("path", Co({}, u, {
            ref: n
        }), O.createElement("desc", null, e)) : O.createElement("path", Co({}, u, {
            ref: n
        }))
    }),
    NA = Math.ceil,
    IA = Math.max;

function RA(t, n, r, e) {
    for (var o = -1, i = IA(NA((n - t) / (r || 1)), 0), a = Array(i); i--;) a[e ? i : ++o] = t, t += r;
    return a
}
var LA = RA,
    $A = LA,
    zA = Pe,
    cu = Ol;

function UA(t) {
    return function(n, r, e) {
        return e && typeof e != "number" && zA(n, r, e) && (r = e = void 0), n = cu(n), r === void 0 ? (r = n, n = 0) : r = cu(r), e = e === void 0 ? n < r ? 1 : -1 : cu(e), $A(n, r, e, t)
    }
}
var WA = UA,
    FA = WA,
    BA = FA(),
    HA = BA;
const qA = F(HA);
var KA = Al;

function VA(t, n) {
    var r = t == null ? 0 : t.length;
    return !!r && KA(t, n, 0) > -1
}
var $5 = VA;

function GA(t, n, r) {
    for (var e = -1, o = t == null ? 0 : t.length; ++e < o;)
        if (r(n, t[e])) return !0;
    return !1
}
var z5 = GA,
    YA = ki,
    XA = $5,
    QA = z5,
    JA = Rr,
    ZA = Nr,
    t9 = Mi,
    n9 = 200;

function r9(t, n, r, e) {
    var o = -1,
        i = XA,
        a = !0,
        u = t.length,
        s = [],
        c = n.length;
    if (!u) return s;
    r && (n = JA(n, ZA(r))), e ? (i = QA, a = !1) : n.length >= n9 && (i = t9, a = !1, n = new YA(n));
    t: for (; ++o < u;) {
        var l = t[o],
            f = r == null ? l : r(l);
        if (l = e || l !== 0 ? l : 0, a && f === f) {
            for (var h = c; h--;)
                if (n[h] === f) continue t;
            s.push(l)
        } else i(n, f, e) || s.push(l)
    }
    return s
}
var U5 = r9,
    e9 = Ht,
    o9 = qt;

function i9(t) {
    return o9(t) && e9(t)
}
var W5 = i9,
    a9 = U5,
    u9 = Ae,
    s9 = W5,
    c9 = u9(function(t, n) {
        return s9(t) ? a9(t, n) : []
    }),
    l9 = c9;
const Do = F(l9);
var f9 = U5,
    h9 = Dl,
    p9 = Ae,
    F5 = W5,
    d9 = p9(function(t, n) {
        return F5(t) ? f9(t, h9(n, 1, F5, !0)) : []
    }),
    y9 = d9;
const No = F(y9);

function v9() {}
var g9 = v9,
    lu = bc,
    m9 = g9,
    b9 = Ci,
    _9 = 1 / 0,
    x9 = lu && 1 / b9(new lu([, -0]))[1] == _9 ? function(t) {
        return new lu(t)
    } : m9,
    w9 = x9,
    O9 = ki,
    j9 = $5,
    A9 = z5,
    E9 = Mi,
    P9 = w9,
    S9 = Ci,
    T9 = 200;

function k9(t, n, r) {
    var e = -1,
        o = j9,
        i = t.length,
        a = !0,
        u = [],
        s = u;
    if (r) a = !1, o = A9;
    else if (i >= T9) {
        var c = n ? null : P9(t);
        if (c) return S9(c);
        a = !1, o = E9, s = new O9
    } else s = n ? [] : u;
    t: for (; ++e < i;) {
        var l = t[e],
            f = n ? n(l) : l;
        if (l = r || l !== 0 ? l : 0, a && f === f) {
            for (var h = s.length; h--;)
                if (s[h] === f) continue t;
            n && s.push(f), u.push(l)
        } else o(s, f, r) || (s !== u && s.push(f), u.push(l))
    }
    return u
}
var B5 = k9,
    M9 = B5;

function C9(t) {
    return t && t.length ? M9(t) : []
}
var D9 = C9;
const vr = F(D9);
var N9 = "Expected a function";

function I9(t) {
    if (typeof t != "function") throw new TypeError(N9);
    return function() {
        var n = arguments;
        switch (n.length) {
            case 0:
                return !t.call(this);
            case 1:
                return !t.call(this, n[0]);
            case 2:
                return !t.call(this, n[0], n[1]);
            case 3:
                return !t.call(this, n[0], n[1], n[2])
        }
        return !t.apply(this, n)
    }
}
var R9 = I9,
    L9 = Ni,
    $9 = Fc,
    z9 = gc,
    U9 = yc,
    W9 = Object.getOwnPropertySymbols,
    F9 = W9 ? function(t) {
        for (var n = []; t;) L9(n, z9(t)), t = $9(t);
        return n
    } : U9,
    B9 = F9,
    H9 = dc,
    q9 = B9,
    K9 = pl;

function V9(t) {
    return H9(t, K9, q9)
}
var G9 = V9,
    Y9 = Rr,
    X9 = wn,
    Q9 = Tl,
    J9 = G9;

function Z9(t, n) {
    if (t == null) return {};
    var r = Y9(J9(t), function(e) {
        return [e]
    });
    return n = X9(n), Q9(t, r, function(e, o) {
        return n(e, o[0])
    })
}
var H5 = Z9;
const Io = F(H5);
var tE = wn,
    nE = R9,
    rE = H5;

function eE(t, n) {
    return rE(t, nE(tE(n)))
}
var oE = eE;
const iE = F(oE);

function Ro(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}

function q5(t) {
    return cE(t) || sE(t) || uE(t) || aE()
}

function aE() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function uE(t, n) {
    if (t) {
        if (typeof t == "string") return fu(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fu(t, n)
    }
}

function sE(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
}

function cE(t) {
    if (Array.isArray(t)) return fu(t)
}

function fu(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e
}
var hu = /^onGlobal(.*)$/;

function K5(t, n, r, e) {
    var o = this,
        i = function(f) {
            var h = function() {
                    var y = f.reduce(function(m, g) {
                        if (g.target !== void 0) {
                            var v = Array.isArray(g.target) ? ar(g.target, n) : "".concat(g.target) === "".concat(n);
                            return v ? m.concat(g) : m
                        }
                        return m.concat(g)
                    }, []);
                    return r !== void 0 && n !== "parent" ? y.filter(function(m) {
                        var g = m.eventKey,
                            v = function(b) {
                                return b ? "".concat(b) === "".concat(r) : !0
                            };
                        return Array.isArray(g) ? g.some(function(b) {
                            return v(b)
                        }) : v(g)
                    }) : y
                },
                d = h();
            return Array.isArray(d) && d.reduce(function(y, m) {
                return m ? A(y, m.eventHandlers) : y
            }, {})
        },
        a = function() {
            if (Array.isArray(o.componentEvents)) {
                var f;
                return Array.isArray(t.events) ? (f = o.componentEvents).concat.apply(f, q5(t.events)) : o.componentEvents
            }
            return t.events
        },
        u = a(),
        s = u && Y(e) ? e(i(u), n) : void 0;
    if (!t.sharedEvents) return s;
    var c = t.sharedEvents.getEvents,
        l = t.sharedEvents.events && c(i(t.sharedEvents.events), n);
    return A({}, l, s)
}

function V5(t, n, r, e) {
    var o = this;
    if (et(t)) return {};
    e = e || this.baseProps;
    var i = function(l, f) {
            var h = l.childName,
                d = l.target,
                y = l.key,
                m = f === "props" ? e : o.state || {},
                g = h == null || !m[h] ? m : m[h];
            return y === "parent" ? g.parent : g[y] && g[y][d]
        },
        a = function(l, f) {
            var h = n === "parent" ? l.childName : l.childName || r,
                d = l.target || n,
                y = function(b) {
                    return d === "parent" ? "parent" : l.eventKey === "all" ? e[b] ? Do(nt(e[b]), "parent") : Do(nt(e), "parent") : l.eventKey === void 0 && f === "parent" ? e[b] ? nt(e[b]) : nt(e) : l.eventKey !== void 0 ? l.eventKey : f
                },
                m = function(b, _) {
                    var w = o.state || {};
                    if (!Y(l.mutation)) return w;
                    var j = i({
                            childName: _,
                            key: b,
                            target: d
                        }, "props"),
                        x = i({
                            childName: _,
                            key: b,
                            target: d
                        }, "state"),
                        P = l.mutation(A({}, j, x), e),
                        T = w[_] || {},
                        C = function(N) {
                            return N[b] && N[b][d] && delete N[b][d], N[b] && !nt(N[b]).length && delete N[b], N
                        },
                        I = function(N) {
                            return d === "parent" ? A(N, Ro({}, b, A(N[b], P))) : A(N, Ro({}, b, A(N[b], Ro({}, d, P))))
                        },
                        k = function(N) {
                            return P ? I(N) : C(N)
                        };
                    return _ != null ? A(w, Ro({}, _, k(T))) : k(w)
                },
                g = function(b) {
                    var _ = y(b);
                    return Array.isArray(_) ? _.reduce(function(w, j) {
                        return A(w, m(j, b))
                    }, {}) : m(_, b)
                },
                v = h === "all" ? Do(nt(e), "parent") : h;
            return Array.isArray(v) ? v.reduce(function(b, _) {
                return A(b, g(_))
            }, {}) : g(v)
        },
        u = function(l, f) {
            return Array.isArray(l) ? l.reduce(function(h, d) {
                return h = A({}, h, a(d, f)), h
            }, {}) : a(l, f)
        },
        s = function(l) {
            var f = function(y) {
                    return Y(y.callback) && y.callback
                },
                h = Array.isArray(l) ? l.map(function(y) {
                    return f(y)
                }) : [f(l)],
                d = h.filter(function(y) {
                    return y !== !1
                });
            return d.length ? function() {
                return d.forEach(function(y) {
                    return y()
                })
            } : void 0
        },
        c = function(l, f, h, d) {
            var y = t[d](l, f, h, o);
            if (!et(y)) {
                var m = s(y);
                o.setState(u(y, h), m)
            }
        };
    return nt(t).reduce(function(l, f) {
        return l[f] = c, l
    }, {})
}

function G5(t, n, r) {
    return t ? nt(t).reduce(function(e, o) {
        var i = function(a) {
            return t[o](a, r, n, o)
        };
        return e[o] = i, e
    }, {}) : {}
}

function Y5(t, n, r) {
    var e = this.state || {};
    return r ? e[r] && e[r][t] && e[r][t][n] : t === "parent" ? e[t] && e[t][n] || e[t] : e[t] && e[t][n]
}

function lE(t, n, r, e) {
    return n = n || {}, r = r || {}, e.reduce(function(o, i) {
        var a = r[i],
            u = X5(t, n[i], r[i], i);
        return o[i] = u || a, Io(o, function(s) {
            return !et(s)
        })
    }, {})
}

function X5(t, n, r, e) {
    n = n || {}, r = r || {};
    var o = nt(n);
    return o.reduce(function(i, a) {
        var u = r[a] || {},
            s = n[a] || {};
        if (a === "parent") {
            var c = {
                    eventKey: a,
                    target: "parent"
                },
                l = Q5(t, s, u, c);
            i[a] = l !== void 0 ? A({}, u, l) : u
        } else {
            var f = vr(nt(s).concat(nt(u)));
            i[a] = f.reduce(function(h, d) {
                var y = {
                        eventKey: a,
                        target: d,
                        childName: e
                    },
                    m = Q5(t, s[d], u[d], y);
                return h[d] = m !== void 0 ? A({}, u[d], m) : u[d], Io(h, function(g) {
                    return !et(g)
                })
            }, {})
        }
        return Io(i, function(h) {
            return !et(h)
        })
    }, {})
}

function Q5(t, n, r, e) {
    var o = function(s, c) {
        if (typeof s[c] == "string") return s[c] === "all" || s[c] === e[c];
        if (Array.isArray(s[c])) {
            var l = s[c].map(function(f) {
                return "".concat(f)
            });
            return ar(l, e[c])
        }
        return !1
    };
    t = Array.isArray(t) ? t : [t];
    var i = t;
    e.childName && (i = t.filter(function(s) {
        return o(s, "childName")
    }));
    var a = i.filter(function(s) {
        return o(s, "target")
    });
    if (!et(a)) {
        var u = a.filter(function(s) {
            return o(s, "eventKey")
        });
        if (!et(u)) return u.reduce(function(s, c) {
            var l = c && Y(c.mutation) ? c.mutation : function() {},
                f = l(A({}, n, r));
            return A({}, s, f)
        }, {})
    }
}

function pu(t, n) {
    var r = Array.isArray(n) && n.reduce(function(e, o) {
        var i, a = t[o],
            u = a && a.type && a.type.defaultEvents,
            s = Y(u) ? u(a.props) : u;
        return e = Array.isArray(s) ? (i = e).concat.apply(i, q5(s)) : e, e
    }, []);
    return r && r.length ? r : void 0
}

function Lo(t) {
    var n = t.match(hu);
    return n && n[1] && n[1].toLowerCase()
}
var J5 = function(t) {
        return Io(t, function(n, r) {
            return hu.test(r)
        })
    },
    Z5 = function(t) {
        return iE(t, function(n, r) {
            return hu.test(r)
        })
    },
    th = function(t) {
        return A(t, {
            nativeEvent: t
        })
    };

function $o(t) {
    return dE(t) || pE(t) || hE(t) || fE()
}

function fE() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function hE(t, n) {
    if (t) {
        if (typeof t == "string") return du(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return du(t, n)
    }
}

function pE(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
}

function dE(t) {
    if (Array.isArray(t)) return du(t)
}

function du(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e
}

function yE(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function nh(t, n) {
    for (var r = 0; r < n.length; r++) {
        var e = n[r];
        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
    }
}

function vE(t, n, r) {
    return n && nh(t.prototype, n), r && nh(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function gE(t, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), n && yu(t, n)
}

function yu(t, n) {
    return yu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, e) {
        return r.__proto__ = e, r
    }, yu(t, n)
}

function mE(t) {
    var n = _E();
    return function() {
        var r = Uo(t),
            e;
        if (n) {
            var o = Uo(this).constructor;
            e = Reflect.construct(r, arguments, o)
        } else e = r.apply(this, arguments);
        return bE(this, e)
    }
}

function bE(t, n) {
    if (n && (typeof n == "object" || typeof n == "function")) return n;
    if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return zo(t)
}

function zo(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function _E() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch (t) {
        return !1
    }
}

function Uo(t) {
    return Uo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Uo(t)
}
var xE = function(t) {
        return !hi(t._x) && !hi(t._y)
    },
    wE = [{
        name: "parent",
        index: "parent"
    }, {
        name: "data"
    }, {
        name: "labels"
    }];

function OE(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = function(e) {
            gE(i, e);
            var o = mE(i);

            function i(a) {
                var u;
                return yE(this, i), u = o.call(this, a), u.state = {}, u.getEventState = Y5.bind(zo(u)), u.getScopedEvents = V5.bind(zo(u)), u.getEvents = function(s, c, l) {
                    return K5.call(zo(u), s, c, l, u.getScopedEvents)
                }, u.externalMutations = u.getExternalMutations(u.props), u.calculatedState = u.getStateChanges(u.props), u.globalEvents = {}, u.prevGlobalEventKeys = [], u.boundGlobalEvents = {}, u.cacheValues(u.getCalculatedValues(a)), u
            }
            return vE(i, [{
                key: "shouldComponentUpdate",
                value: function(a) {
                    var u = this.getExternalMutations(a),
                        s = this.props.animating || this.props.animate,
                        c = !Gt(u, this.externalMutations);
                    if (s || c) return this.cacheValues(this.getCalculatedValues(a)), this.externalMutations = u, this.applyExternalMutations(a, u), !0;
                    var l = this.getStateChanges(a);
                    return Gt(this.calculatedState, l) ? Gt(this.props, a) ? !1 : (this.cacheValues(this.getCalculatedValues(a)), !0) : (this.cacheValues(this.getCalculatedValues(a)), !0)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var a = this,
                        u = nt(this.globalEvents);
                    u.forEach(function(s) {
                        return a.addGlobalListener(s)
                    }), this.prevGlobalEventKeys = u
                }
            }, {
                key: "componentDidUpdate",
                value: function(a) {
                    var u = this,
                        s = this.getStateChanges(a);
                    this.calculatedState = s;
                    var c = nt(this.globalEvents),
                        l = No(this.prevGlobalEventKeys, c);
                    l.forEach(function(h) {
                        return u.removeGlobalListener(h)
                    });
                    var f = No(c, this.prevGlobalEventKeys);
                    f.forEach(function(h) {
                        return u.addGlobalListener(h)
                    }), this.prevGlobalEventKeys = c
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var a = this;
                    this.prevGlobalEventKeys.forEach(function(u) {
                        return a.removeGlobalListener(u)
                    })
                }
            }, {
                key: "addGlobalListener",
                value: function(a) {
                    var u = this,
                        s = function(c) {
                            var l = u.globalEvents[a];
                            return l && l(th(c))
                        };
                    this.boundGlobalEvents[a] = s, window.addEventListener(Lo(a), s)
                }
            }, {
                key: "removeGlobalListener",
                value: function(a) {
                    window.removeEventListener(Lo(a), this.boundGlobalEvents[a])
                }
            }, {
                key: "getStateChanges",
                value: function(a) {
                    var u = this;
                    if (!this.hasEvents) return {};
                    var s = function(f, h) {
                            var d = $({}, u.getEventState(f, h), u.getSharedEventState(f, h));
                            return et(d) ? void 0 : d
                        },
                        c = n.components || wE,
                        l = c.map(function(f) {
                            if (!(!a.standalone && f.name === "parent")) return f.index !== void 0 ? s(f.index, f.name) : u.dataKeys.map(function(h) {
                                return s(h, f.name)
                            }).filter(Boolean)
                        }).filter(Boolean);
                    return l
                }
            }, {
                key: "applyExternalMutations",
                value: function(a, u) {
                    if (!et(u)) {
                        var s = a.externalEventMutations.reduce(function(l, f) {
                                return l = Y(f.callback) ? l.concat(f.callback) : l, l
                            }, []),
                            c = s.length ? function() {
                                s.forEach(function(l) {
                                    return l()
                                })
                            } : void 0;
                        this.setState(u, c)
                    }
                }
            }, {
                key: "getCalculatedValues",
                value: function(a) {
                    var u = a.sharedEvents,
                        s = t.expectedComponents,
                        c = pu(a, s),
                        l = u && Y(u.getEventState) ? u.getEventState : function() {},
                        f = this.getBaseProps(a, l),
                        h = nt(f).filter(function(m) {
                            return m !== "parent"
                        }),
                        d = a.events || a.sharedEvents || c,
                        y = this.getAllEvents(a);
                    return {
                        componentEvents: c,
                        getSharedEventState: l,
                        baseProps: f,
                        dataKeys: h,
                        hasEvents: d,
                        events: y
                    }
                }
            }, {
                key: "getExternalMutations",
                value: function(a) {
                    var u = a.sharedEvents,
                        s = a.externalEventMutations;
                    return et(s) || u ? void 0 : X5(s, this.baseProps, this.state)
                }
            }, {
                key: "cacheValues",
                value: function(a) {
                    var u = this;
                    nt(a).forEach(function(s) {
                        u[s] = a[s]
                    })
                }
            }, {
                key: "getBaseProps",
                value: function(a, u) {
                    u = u || this.getSharedEventState.bind(this);
                    var s = u("parent", "parent"),
                        c = this.getEventState("parent", "parent"),
                        l = $({}, c, s),
                        f = l.parentControlledProps,
                        h = f ? Yr(l, f) : {},
                        d = $({}, h, a);
                    return typeof t.getBaseProps == "function" ? t.getBaseProps(d) : {}
                }
            }, {
                key: "getAllEvents",
                value: function(a) {
                    if (Array.isArray(this.componentEvents)) {
                        var u;
                        return Array.isArray(a.events) ? (u = this.componentEvents).concat.apply(u, $o(a.events)) : this.componentEvents
                    }
                    return a.events
                }
            }, {
                key: "getComponentProps",
                value: function(a, u, s) {
                    var c = this.props.name || t.role,
                        l = this.dataKeys && this.dataKeys[s] || s,
                        f = "".concat(c, "-").concat(u, "-").concat(l),
                        h = this.baseProps[l] && this.baseProps[l][u] || this.baseProps[l];
                    if (!(!h && !this.hasEvents)) {
                        var d = a && typeof a == "object" && "props" in a ? a.props : void 0;
                        if (this.hasEvents) {
                            var y = this.getEvents(this.props, u, l),
                                m = $({
                                    index: s,
                                    key: f
                                }, this.getEventState(l, u), this.getSharedEventState(l, u), d, h, {
                                    id: f
                                }),
                                g = $({}, G5(y, l, m), m.events);
                            return A({}, m, {
                                events: g
                            })
                        }
                        return $({
                            index: s,
                            key: f
                        }, d, h, {
                            id: f
                        })
                    }
                }
            }, {
                key: "renderContainer",
                value: function(a, u) {
                    var s = a.type && a.type.role === "container",
                        c = s ? this.getComponentProps(a, "parent", "parent") : {};
                    return c.events && (this.globalEvents = J5(c.events), c.events = Z5(c.events)), O.cloneElement(a, c, u)
                }
            }, {
                key: "animateComponent",
                value: function(a, u) {
                    var s, c = typeof a.animate == "object" && ((s = a.animate) === null || s === void 0 ? void 0 : s.animationWhitelist) || u,
                        l = this.constructor;
                    return O.createElement(Po, {
                        animate: a.animate,
                        animationWhitelist: c
                    }, O.createElement(l, a))
                }
            }, {
                key: "renderContinuousData",
                value: function(a) {
                    var u = this,
                        s = a.dataComponent,
                        c = a.labelComponent,
                        l = a.groupComponent,
                        f = Do(this.dataKeys, "all"),
                        h = f.reduce(function(m, g) {
                            var v = u.getComponentProps(c, "labels", g);
                            return v && v.text !== void 0 && v.text !== null && (m = m.concat(O.cloneElement(c, v))), m
                        }, []),
                        d = this.getComponentProps(s, "data", "all"),
                        y = [O.cloneElement(s, d)].concat($o(h));
                    return this.renderContainer(l, y)
                }
            }, {
                key: "renderData",
                value: function(a) {
                    var u = this,
                        s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xE,
                        c = a.dataComponent,
                        l = a.labelComponent,
                        f = a.groupComponent,
                        h = this.dataKeys.reduce(function(m, g, v) {
                            var b = u.getComponentProps(c, "data", v);
                            return s(b.datum) && m.push(O.cloneElement(c, b)), m
                        }, []),
                        d = this.dataKeys.map(function(m, g) {
                            var v = u.getComponentProps(l, "labels", g);
                            if (v.text !== void 0 && v.text !== null) return O.cloneElement(l, v)
                        }).filter(Boolean),
                        y = [].concat($o(h), $o(d));
                    return this.renderContainer(f, y)
                }
            }]), i
        }(t);
    return r
}
var jE = un,
    AE = qt,
    EE = "[object Date]";

function PE(t) {
    return AE(t) && jE(t) == EE
}
var SE = PE,
    TE = SE,
    kE = Nr,
    rh = bi,
    eh = rh && rh.isDate,
    ME = eh ? kE(eh) : TE,
    CE = ME;
const oh = F(CE);
var DE = Qn;

function NE(t, n) {
    for (var r = -1, e = t.length, o = 0, i = []; ++r < e;) {
        var a = t[r],
            u = n ? n(a) : a;
        if (!r || !DE(u, s)) {
            var s = u;
            i[o++] = a === 0 ? 0 : a
        }
    }
    return i
}
var IE = NE,
    RE = IE;

function LE(t) {
    return t && t.length ? RE(t) : []
}
var $E = LE;
const zE = F($E);
var UE = Wi;

function WE(t, n) {
    return UE(t, n)
}
var FE = WE;
const BE = F(FE);

function HE(t) {
    var n = t == null ? 0 : t.length;
    return n ? t[n - 1] : void 0
}
var qE = HE;
const KE = F(qE);
var VE = "@@__IMMUTABLE_ITERABLE__@@",
    GE = "@@__IMMUTABLE_RECORD__@@",
    YE = "@@__IMMUTABLE_LIST__@@";

function le(t) {
    return !!(t && t[VE])
}

function XE(t) {
    return !!(t && t[GE])
}

function QE(t) {
    return le(t) || XE(t)
}

function JE(t) {
    return !!(t && t[YE])
}

function ih(t, n) {
    return le(t) ? t.reduce(function(r, e, o) {
        return n && n[o] && (e = ih(e)), r[o] = e, r
    }, JE(t) ? [] : {}) : t
}

function fe(t) {
    return rP(t) || nP(t) || tP(t) || ZE()
}

function ZE() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function tP(t, n) {
    if (t) {
        if (typeof t == "string") return vu(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vu(t, n)
    }
}

function nP(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
}

function rP(t) {
    if (Array.isArray(t)) return vu(t)
}

function vu(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e
}

function gu(t) {
    var n = {
        errorX: !0,
        errorY: !0
    };
    return QE(t) ? ih(t, n) : t
}

function eP(t) {
    return le(t) ? t.size : t.length
}

function ah(t, n) {
    var r = rt(t.domain) ? t.domain[n] : t.domain,
        e = r || go(t, n).domain(),
        o = t.samples || 1,
        i = Math.max.apply(Math, fe(e)),
        a = Math.min.apply(Math, fe(e)),
        u = (i - a) / o,
        s = qA(a, i, u);
    return KE(s) === i ? s : s.concat(i)
}

function uh(t, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "ascending";
    if (!n) return t;
    (n === "x" || n === "y") && (n = "_".concat(n));
    var e = r === "ascending" ? "asc" : "desc";
    return Hi(t, n, e)
}

function oP(t, n) {
    var r = 1 / Number.MAX_SAFE_INTEGER,
        e = {
            x: mo(n, "x"),
            y: mo(n, "y")
        };
    if (e.x !== "log" && e.y !== "log") return t;
    var o = function(a, u) {
            return e[u] === "log" ? a["_".concat(u)] !== 0 : !0
        },
        i = function(a) {
            var u = o(a, "x") ? a._x : r,
                s = o(a, "y") ? a._y : r,
                c = o(a, "y0") ? a._y0 : r;
            return A({}, a, {
                _x: u,
                _y: s,
                _y0: c
            })
        };
    return t.map(function(a) {
        return o(a, "x") && o(a, "y") && o(a, "y0") ? a : i(a)
    })
}

function iP(t) {
    return Y(t) ? t : t == null ? function() {} : zc(t)
}

function aP(t, n) {
    var r = !!t.eventKey,
        e = iP(t.eventKey);
    return n.map(function(o, i) {
        if (o.eventKey !== void 0) return o;
        if (r) {
            var a = e(o, i);
            return a !== void 0 ? A({
                eventKey: a
            }, o) : o
        }
        return o
    })
}

function mu(t, n) {
    var r = ch(t, n),
        e = lh(t, n),
        o = sP(t, n),
        i = vr([].concat(fe(r), fe(e), fe(o)));
    return i.length === 0 ? null : i.reduce(function(a, u, s) {
        return a[u] = s + 1, a
    }, {})
}

function sh(t, n, r) {
    var e = Array.isArray(t) || le(t);
    if (!e || eP(t) < 1) return [];
    var o = ["x", "y", "y0"];
    r = Array.isArray(r) ? r : o;
    var i = function(h) {
            return no(n[h] !== void 0 ? n[h] : h)
        },
        a = r.reduce(function(h, d) {
            return h[d] = i(d), h
        }, {}),
        u = BE(r, o) && n.x === "_x" && n.y === "_y" && n.y0 === "_y0",
        s;
    u === !1 && (s = {
        x: r.indexOf("x") !== -1 ? mu(n, "x") : void 0,
        y: r.indexOf("y") !== -1 ? mu(n, "y") : void 0,
        y0: r.indexOf("y0") !== -1 ? mu(n, "y") : void 0
    });
    var c = u ? t : t.reduce(function(h, d, y) {
            d = gu(d);
            var m = {
                    x: y,
                    y: d
                },
                g = r.reduce(function(b, _) {
                    var w = a[_](d),
                        j = w !== void 0 ? w : m[_];
                    return j !== void 0 && (typeof j == "string" && s[_] ? (b["".concat(_, "Name")] = j, b["_".concat(_)] = s[_][j]) : b["_".concat(_)] = j), b
                }, {}),
                v = A({}, g, d);
            return et(v) || h.push(v), h
        }, []),
        l = uh(c, n.sortKey, n.sortOrder),
        f = oP(l, n);
    return aP(n, f)
}

function uP(t) {
    var n = ah(t, "x"),
        r = ah(t, "y"),
        e = n.map(function(o, i) {
            return {
                x: o,
                y: r[i]
            }
        });
    return e
}

function bu(t, n) {
    return t.categories && !Array.isArray(t.categories) ? t.categories[n] : t.categories
}

function nn(t) {
    return t.data ? sh(t.data, t) : sh(uP(t), t)
}

function ch(t, n) {
    var r = t.tickValues,
        e = t.tickFormat,
        o;
    return !r || !Array.isArray(r) && !r[n] ? o = e && Array.isArray(e) ? e : [] : o = r[n] || r, o.filter(function(i) {
        return typeof i == "string"
    })
}

function lh(t, n) {
    if (!t.categories) return [];
    var r = bu(t, n),
        e = r && r.filter(function(o) {
            return typeof o == "string"
        });
    return e ? Ul(e) : []
}

function sP(t, n) {
    var r = Array.isArray(t.data) || le(t.data);
    if (!r) return [];
    var e = t[n] === void 0 ? n : t[n],
        o = no(e),
        i = t.data.reduce(function(s, c) {
            return s.push(gu(c)), s
        }, []),
        a = uh(i, t.sortKey, t.sortOrder),
        u = a.reduce(function(s, c) {
            return c = gu(c), s.push(o(c)), s
        }, []).filter(function(s) {
            return typeof s == "string"
        });
    return u.reduce(function(s, c) {
        return c != null && s.indexOf(c) === -1 && s.push(c), s
    }, [])
}

function _u(t) {
    var n = function(i) {
            return i && i.type ? i.type.role : ""
        },
        r = n(t);
    if (r === "portal") {
        var e = O.Children.toArray(t.props.children);
        r = e.length ? n(e[0]) : ""
    }
    var o = ["area", "bar", "boxplot", "candlestick", "errorbar", "group", "histogram", "line", "pie", "scatter", "stack", "voronoi"];
    return ar(o, r)
}

function fh(t) {
    return hP(t) || fP(t) || lP(t) || cP()
}

function cP() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function lP(t, n) {
    if (t) {
        if (typeof t == "string") return xu(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xu(t, n)
    }
}

function fP(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
}

function hP(t) {
    if (Array.isArray(t)) return xu(t)
}

function xu(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e
}

function pP(t, n, r) {
    var e = mo(n, r);
    if (e !== "log") return t;
    var o = function(i) {
        var a = i[0] < 0 || i[1] < 0 ? -1 / Number.MAX_SAFE_INTEGER : 1 / Number.MAX_SAFE_INTEGER,
            u = i[0] === 0 ? a : i[0],
            s = i[1] === 0 ? a : i[1];
        return [u, s]
    };
    return o(t)
}

function dP(t, n) {
    var r = function(e) {
        return Array.isArray(e) ? {
            left: e[0],
            right: e[1]
        } : {
            left: e,
            right: e
        }
    };
    return rt(t.domainPadding) ? r(t.domainPadding[n]) : r(t.domainPadding)
}

function yP(t, n) {
    var r = "_".concat(n);
    return Gr(t).map(function(e) {
        return e[r] && e[r][1] !== void 0 ? e[r][1] : e[r]
    })
}

function hh(t, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "min",
        e = function(u) {
            return r === "max" ? Math.max.apply(Math, fh(u)) : Math.min.apply(Math, fh(u))
        },
        o = r === "max" ? -1 / 0 : 1 / 0,
        i = !1,
        a = Gr(t).reduce(function(u, s) {
            var c = s["_".concat(n, "0")] !== void 0 ? s["_".concat(n, "0")] : s["_".concat(n)],
                l = s["_".concat(n, "1")] !== void 0 ? s["_".concat(n, "1")] : s["_".concat(n)],
                f = e([c, l]);
            return i = i || c instanceof Date || l instanceof Date, e([u, f])
        }, o);
    return i ? new Date(a) : a
}

function vP(t, n, r) {
    if (!n.domainPadding) return t;
    var e = mr(n, r),
        o = gr(n, r),
        i = dP(n, r);
    if (!i.left && !i.right) return t;
    var a = sn(t),
        u = Wn(t),
        s = $l(r, n.horizontal),
        c = Qt(n, s),
        l = Math.abs(c[0] - c[1]),
        f = Math.max(l - i.left - i.right, 1),
        h = Math.abs(u.valueOf() - a.valueOf()) / f * l,
        d = {
            left: h * i.left / l,
            right: h * i.right / l
        },
        y = {
            min: a.valueOf() - d.left,
            max: u.valueOf() + d.right
        },
        m = rt(n.singleQuadrantDomainPadding) ? n.singleQuadrantDomainPadding[r] : n.singleQuadrantDomainPadding,
        g = a >= 0 && y.min <= 0 || u <= 0 && y.max >= 0,
        v = function(x, P) {
            var T = P === "min" && a >= 0 && x <= 0 || P === "max" && u <= 0 && x >= 0;
            return T ? 0 : x
        };
    if (g && m !== !1) {
        var b = {
                left: Math.abs(u - a) * i.left / l,
                right: Math.abs(u - a) * i.right / l
            },
            _ = {
                min: v(a.valueOf() - b.left, "min"),
                max: v(u.valueOf() + b.right, "max")
            },
            w = {
                left: Math.abs(_.max - _.min) * i.left / l,
                right: Math.abs(_.max - _.min) * i.right / l
            };
        y = {
            min: v(a.valueOf() - w.left, "min"),
            max: v(u.valueOf() + w.right, "max")
        }
    }
    var j = {
        min: e !== void 0 ? e : y.min,
        max: o !== void 0 ? o : y.max
    };
    return a instanceof Date || u instanceof Date ? En(new Date(j.min), new Date(j.max)) : En(j.min, j.max)
}

function ph(t, n) {
    return t = Y(t) ? t : Ou, n = Y(n) ? n : wu,
        function(r, e) {
            var o = ju(r, e);
            if (o) return n(o, r, e);
            var i = bu(r, e),
                a = i ? mP(r, e, i) : t(r, e);
            return a ? n(a, r, e) : void 0
        }
}

function wu(t, n, r) {
    return pP(vP(t, n, r), n, r)
}

function gP(t, n) {
    return ph()(t, n)
}

function mP(t, n, r) {
    r = r || bu(t, n);
    var e = t.polar,
        o = t.startAngle,
        i = o === void 0 ? 0 : o,
        a = t.endAngle,
        u = a === void 0 ? 360 : a;
    if (r) {
        var s = mr(t, n),
            c = gr(t, n),
            l = a8(r) ? lh(t, n) : [],
            f = l.length === 0 ? null : l.reduce(function(g, v, b) {
                return g[v] = b + 1, g
            }, {}),
            h = f ? r.map(function(g) {
                return f[g]
            }) : r,
            d = s !== void 0 ? s : sn(h),
            y = c !== void 0 ? c : Wn(h),
            m = En(d, y);
        return e && n === "x" && Math.abs(i - u) === 360 ? dh(m, h) : m
    }
}

function Ou(t, n, r) {
    r = r || nn(t);
    var e = t.polar,
        o = t.startAngle,
        i = o === void 0 ? 0 : o,
        a = t.endAngle,
        u = a === void 0 ? 360 : a,
        s = mr(t, n),
        c = gr(t, n);
    if (r.length < 1) return s !== void 0 && c !== void 0 ? En(s, c) : void 0;
    var l = s !== void 0 ? s : hh(r, n, "min"),
        f = c !== void 0 ? c : hh(r, n, "max"),
        h = En(l, f);
    return e && n === "x" && Math.abs(i - u) === 360 ? dh(h, yP(r, n)) : h
}

function En(t, n) {
    var r = function(e) {
        var o = e === 0 ? 2 * Math.pow(10, -10) : Math.pow(10, -10),
            i = 1,
            a = e instanceof Date ? new Date(Number(e) - i) : Number(e) - o,
            u = e instanceof Date ? new Date(Number(e) + i) : Number(e) + o;
        return e === 0 ? [0, u] : [a, u]
    };
    return Number(t) === Number(n) ? r(n) : [t, n]
}

function ju(t, n) {
    var r = mr(t, n),
        e = gr(t, n);
    if (rt(t.domain) && t.domain[n]) return t.domain[n];
    if (Array.isArray(t.domain)) return t.domain;
    if (r !== void 0 && e !== void 0) return En(r, e)
}

function Au(t, n) {
    var r = ju(t, n);
    if (r) return r;
    var e = nn(t),
        o = e.reduce(function(s, c) {
            return c._y0 < s ? c._y0 : s
        }, 1 / 0),
        i = function(s) {
            if (n === "x") return s;
            var c = o !== 1 / 0 ? o : 0,
                l = gr(t, n),
                f = mr(t, n),
                h = l !== void 0 ? l : Wn(s, c),
                d = f !== void 0 ? f : sn(s, c);
            return En(d, h)
        },
        a = function() {
            return Ou(t, n, e)
        },
        u = function(s) {
            return wu(i(s), t, n)
        };
    return ph(a, u)(t, n)
}

function gr(t, n) {
    return rt(t.maxDomain) && t.maxDomain[n] !== void 0 ? t.maxDomain[n] : typeof t.maxDomain == "number" || oh(t.maxDomain) ? t.maxDomain : void 0
}

function mr(t, n) {
    return rt(t.minDomain) && t.minDomain[n] !== void 0 ? t.minDomain[n] : typeof t.minDomain == "number" || oh(t.minDomain) ? t.minDomain : void 0
}

function dh(t, n) {
    var r = zE(n.sort(function(o, i) {
            return o - i
        })),
        e = r[1] - r[0];
    return [t[0], t[1] + e]
}

function yh(t) {
    var n = function(i) {
            return i && i.type ? i.type.role : ""
        },
        r = n(t);
    if (r === "portal") {
        var e = O.Children.toArray(t.props.children);
        r = e.length ? n(e[0]) : ""
    }
    var o = ["area", "axis", "bar", "boxplot", "candlestick", "errorbar", "group", "histogram", "line", "pie", "scatter", "stack", "voronoi"];
    return ar(o, r)
}

function bP(t, n) {
    n = n || Nn;
    var r = function(e) {
        return e.reduce(function(o, i) {
            return i.type && i.type.role === "axis" && n(i) ? o.concat(i) : i.props && i.props.children ? o.concat(r(O.Children.toArray(i.props.children))) : o
        }, [])
    };
    return r(t)
}

function _P(t, n) {
    var r = function(e) {
        var o = e.type.getAxis(e.props);
        return o === n
    };
    return bP(t, r)[0]
}

function xP() {
    return {
        onLoad: {
            duration: 2e3
        },
        onExit: {
            duration: 500
        },
        onEnter: {
            duration: 500
        }
    }
}

function wP() {
    return {
        onLoad: {
            duration: 2e3,
            before: function() {
                return {
                    _y: 0,
                    _y1: 0,
                    _y0: 0
                }
            },
            after: function(t) {
                return {
                    _y: t._y,
                    _y1: t._y1,
                    _y0: t._y0
                }
            }
        },
        onExit: {
            duration: 500,
            before: function(t, n, r) {
                var e = function(o) {
                    var i = n === 0 ? r[n + 1] : r[n - 1];
                    return i[o]
                };
                return {
                    _x: e("_x"),
                    _y: e("_y"),
                    _y0: e("_y0")
                }
            }
        },
        onEnter: {
            duration: 500,
            before: function(t, n, r) {
                var e = function(o) {
                    var i = n === 0 ? r[n + 1] : r[n - 1];
                    return i[o]
                };
                return {
                    _x: e("_x"),
                    _y: e("_y"),
                    _y0: e("_y0")
                }
            },
            after: function(t) {
                return {
                    _x: t._x,
                    _y: t._y,
                    _y1: t._y1,
                    _y0: t._y0
                }
            }
        }
    }
}

function OP(t) {
    var n = O.useRef();
    return O.useEffect(function() {
        n.current = t
    }), n.current
}
var jP = Fi;

function AP(t, n) {
    var r;
    return jP(t, function(e, o, i) {
        return r = n(e, o, i), !r
    }), !!r
}
var EP = AP,
    PP = cc,
    SP = wn,
    TP = EP,
    kP = gt,
    MP = Pe;

function CP(t, n, r) {
    var e = kP(t) ? PP : TP;
    return r && MP(t, n, r) && (n = void 0), e(t, SP(n))
}
var DP = CP;
const vh = F(DP);

function gh(t, n) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        n && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), r.push.apply(r, e)
    }
    return r
}

function mh(t) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? gh(Object(r), !0).forEach(function(e) {
            NP(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : gh(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function NP(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}

function IP(t, n) {
    return zP(t) || $P(t, n) || LP(t, n) || RP()
}

function RP() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function LP(t, n) {
    if (t) {
        if (typeof t == "string") return bh(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bh(t, n)
    }
}

function bh(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e
}

function $P(t, n) {
    var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (r != null) {
        var e = [],
            o = !0,
            i = !1,
            a, u;
        try {
            for (r = r.call(t); !(o = (a = r.next()).done) && (e.push(a.value), !(n && e.length === n)); o = !0);
        } catch (s) {
            i = !0, u = s
        } finally {
            try {
                !o && r.return != null && r.return()
            } finally {
                if (i) throw u
            }
        }
        return e
    }
}

function zP(t) {
    if (Array.isArray(t)) return t
}
var UP = {
        nodesShouldLoad: !1,
        nodesDoneLoad: !1,
        animating: !0
    },
    WP = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : UP,
            n = O.useState(t),
            r = IP(n, 2),
            e = r[0],
            o = r[1],
            i = O.useCallback(function(c) {
                o(function(l) {
                    return mh(mh({}, l), c)
                })
            }, [o]),
            a = O.useCallback(function(c, l, f) {
                if (!(c != null && c.animate)) return l.props.animate;
                var h = function() {
                        var v = e && e.childrenTransitions;
                        return v = zl(v) ? v[f] : v, $({
                            childrenTransitions: v
                        }, e)
                    },
                    d = c.animate && c.animate.getTransitions,
                    y = h(),
                    m = c.animate && c.animate.parentState || y;
                if (!d) {
                    var g = P5(c, y, function(v) {
                        return i(v)
                    });
                    d = function(v) {
                        return g(v, f)
                    }
                }
                return $({
                    getTransitions: d,
                    parentState: m
                }, c.animate, l.props.animate)
            }, [e, i]),
            u = O.useCallback(function(c, l) {
                if (c != null && c.animate)
                    if (c.animate.parentState) {
                        var f = c.animate.parentState.nodesWillExit,
                            h = f ? c : null,
                            d = $({
                                oldProps: h,
                                nextProps: l
                            }, c.animate.parentState);
                        i(d)
                    } else {
                        var y = O.Children.toArray(c.children),
                            m = O.Children.toArray(l.children),
                            g = function(P) {
                                var T = function(C) {
                                    return C.type && C.type.continuous
                                };
                                return Array.isArray(P) ? vh(P, T) : T(P)
                            },
                            v = !c.polar && vh(y, function(P) {
                                return g(P) || P.props.children && g(P.props.children)
                            }),
                            b = E5(y, m),
                            _ = b.nodesWillExit,
                            w = b.nodesWillEnter,
                            j = b.childrenTransitions,
                            x = b.nodesShouldEnter;
                        i({
                            nodesWillExit: _,
                            nodesWillEnter: w,
                            nodesShouldEnter: x,
                            childrenTransitions: zl(j) ? j[0] : j,
                            oldProps: _ ? c : void 0,
                            nextProps: l,
                            continuous: v
                        })
                    }
            }, [i]),
            s = O.useCallback(function(c) {
                return e && e.nodesWillExit && e.oldProps || c
            }, [e]);
        return {
            state: e,
            setState: i,
            getAnimationProps: a,
            setAnimationState: u,
            getProps: s
        }
    };

function U(t) {
    return function() {
        return t
    }
}
const _h = Math.abs,
    pt = Math.atan2,
    mn = Math.cos,
    FP = Math.max,
    br = Math.min,
    jt = Math.sin,
    tt = Math.sqrt,
    dt = 1e-12,
    Pn = Math.PI,
    Wo = Pn / 2,
    Sn = 2 * Pn;

function BP(t) {
    return t > 1 ? 0 : t < -1 ? Pn : Math.acos(t)
}

function xh(t) {
    return t >= 1 ? Wo : t <= -1 ? -Wo : Math.asin(t)
}
const Eu = Math.PI,
    Pu = 2 * Eu,
    Gn = 1e-6,
    HP = Pu - Gn;

function wh(t) {
    this._ += t[0];
    for (let n = 1, r = t.length; n < r; ++n) this._ += arguments[n] + t[n]
}

function qP(t) {
    let n = Math.floor(t);
    if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
    if (n > 15) return wh;
    const r = 10 ** n;
    return function(e) {
        this._ += e[0];
        for (let o = 1, i = e.length; o < i; ++o) this._ += Math.round(arguments[o] * r) / r + e[o]
    }
}
class KP {
    constructor(n) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = n == null ? wh : qP(n)
    }
    moveTo(n, r) {
        this._append `M${this._x0=this._x1=+n},${this._y0=this._y1=+r}`
    }
    closePath() {
        this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append `Z`)
    }
    lineTo(n, r) {
        this._append `L${this._x1=+n},${this._y1=+r}`
    }
    quadraticCurveTo(n, r, e, o) {
        this._append `Q${+n},${+r},${this._x1=+e},${this._y1=+o}`
    }
    bezierCurveTo(n, r, e, o, i, a) {
        this._append `C${+n},${+r},${+e},${+o},${this._x1=+i},${this._y1=+a}`
    }
    arcTo(n, r, e, o, i) {
        if (n = +n, r = +r, e = +e, o = +o, i = +i, i < 0) throw new Error(`negative radius: ${i}`);
        let a = this._x1,
            u = this._y1,
            s = e - n,
            c = o - r,
            l = a - n,
            f = u - r,
            h = l * l + f * f;
        if (this._x1 === null) this._append `M${this._x1=n},${this._y1=r}`;
        else if (h > Gn)
            if (!(Math.abs(f * s - c * l) > Gn) || !i) this._append `L${this._x1=n},${this._y1=r}`;
            else {
                let d = e - a,
                    y = o - u,
                    m = s * s + c * c,
                    g = d * d + y * y,
                    v = Math.sqrt(m),
                    b = Math.sqrt(h),
                    _ = i * Math.tan((Eu - Math.acos((m + h - g) / (2 * v * b))) / 2),
                    w = _ / b,
                    j = _ / v;
                Math.abs(w - 1) > Gn && this._append `L${n+w*l},${r+w*f}`, this._append `A${i},${i},0,0,${+(f*d>l*y)},${this._x1=n+j*s},${this._y1=r+j*c}`
            }
    }
    arc(n, r, e, o, i, a) {
        if (n = +n, r = +r, e = +e, a = !!a, e < 0) throw new Error(`negative radius: ${e}`);
        let u = e * Math.cos(o),
            s = e * Math.sin(o),
            c = n + u,
            l = r + s,
            f = 1 ^ a,
            h = a ? o - i : i - o;
        this._x1 === null ? this._append `M${c},${l}` : (Math.abs(this._x1 - c) > Gn || Math.abs(this._y1 - l) > Gn) && this._append `L${c},${l}`, e && (h < 0 && (h = h % Pu + Pu), h > HP ? this._append `A${e},${e},0,1,${f},${n-u},${r-s}A${e},${e},0,1,${f},${this._x1=c},${this._y1=l}` : h > Gn && this._append `A${e},${e},0,${+(h>=Eu)},${f},${this._x1=n+e*Math.cos(i)},${this._y1=r+e*Math.sin(i)}`)
    }
    rect(n, r, e, o) {
        this._append `M${this._x0=this._x1=+n},${this._y0=this._y1=+r}h${e=+e}v${+o}h${-e}Z`
    }
    toString() {
        return this._
    }
}

function he(t) {
    let n = 3;
    return t.digits = function(r) {
        if (!arguments.length) return n;
        if (r == null) n = null;
        else {
            const e = Math.floor(r);
            if (!(e >= 0)) throw new RangeError(`invalid digits: ${r}`);
            n = e
        }
        return t
    }, () => new KP(n)
}

function VP(t) {
    return t.innerRadius
}

function GP(t) {
    return t.outerRadius
}

function YP(t) {
    return t.startAngle
}

function XP(t) {
    return t.endAngle
}

function QP(t) {
    return t && t.padAngle
}

function JP(t, n, r, e, o, i, a, u) {
    var s = r - t,
        c = e - n,
        l = a - o,
        f = u - i,
        h = f * s - l * c;
    if (!(h * h < dt)) return h = (l * (n - i) - f * (t - o)) / h, [t + h * s, n + h * c]
}

function Fo(t, n, r, e, o, i, a) {
    var u = t - r,
        s = n - e,
        c = (a ? i : -i) / tt(u * u + s * s),
        l = c * s,
        f = -c * u,
        h = t + l,
        d = n + f,
        y = r + l,
        m = e + f,
        g = (h + y) / 2,
        v = (d + m) / 2,
        b = y - h,
        _ = m - d,
        w = b * b + _ * _,
        j = o - i,
        x = h * m - y * d,
        P = (_ < 0 ? -1 : 1) * tt(FP(0, j * j * w - x * x)),
        T = (x * _ - b * P) / w,
        C = (-x * b - _ * P) / w,
        I = (x * _ + b * P) / w,
        k = (-x * b + _ * P) / w,
        N = T - g,
        M = C - v,
        R = I - g,
        Q = k - v;
    return N * N + M * M > R * R + Q * Q && (T = I, C = k), {
        cx: T,
        cy: C,
        x01: -l,
        y01: -f,
        x11: T * (o / j - 1),
        y11: C * (o / j - 1)
    }
}

function ZP() {
    var t = VP,
        n = GP,
        r = U(0),
        e = null,
        o = YP,
        i = XP,
        a = QP,
        u = null,
        s = he(c);

    function c() {
        var l, f, h = +t.apply(this, arguments),
            d = +n.apply(this, arguments),
            y = o.apply(this, arguments) - Wo,
            m = i.apply(this, arguments) - Wo,
            g = _h(m - y),
            v = m > y;
        if (u || (u = l = s()), d < h && (f = d, d = h, h = f), !(d > dt)) u.moveTo(0, 0);
        else if (g > Sn - dt) u.moveTo(d * mn(y), d * jt(y)), u.arc(0, 0, d, y, m, !v), h > dt && (u.moveTo(h * mn(m), h * jt(m)), u.arc(0, 0, h, m, y, v));
        else {
            var b = y,
                _ = m,
                w = y,
                j = m,
                x = g,
                P = g,
                T = a.apply(this, arguments) / 2,
                C = T > dt && (e ? +e.apply(this, arguments) : tt(h * h + d * d)),
                I = br(_h(d - h) / 2, +r.apply(this, arguments)),
                k = I,
                N = I,
                M, R;
            if (C > dt) {
                var Q = xh(C / h * jt(T)),
                    G = xh(C / d * jt(T));
                (x -= Q * 2) > dt ? (Q *= v ? 1 : -1, w += Q, j -= Q) : (x = 0, w = j = (y + m) / 2), (P -= G * 2) > dt ? (G *= v ? 1 : -1, b += G, _ -= G) : (P = 0, b = _ = (y + m) / 2)
            }
            var q = d * mn(b),
                B = d * jt(b),
                K = h * mn(j),
                Pt = h * jt(j);
            if (I > dt) {
                var en = d * mn(_),
                    St = d * jt(_),
                    Rt = h * mn(w),
                    Tt = h * jt(w),
                    yt;
                if (g < Pn)
                    if (yt = JP(q, B, Rt, Tt, en, St, K, Pt)) {
                        var kt = q - yt[0],
                            Mt = B - yt[1],
                            on = en - yt[0],
                            D = St - yt[1],
                            z = 1 / jt(BP((kt * on + Mt * D) / (tt(kt * kt + Mt * Mt) * tt(on * on + D * D))) / 2),
                            W = tt(yt[0] * yt[0] + yt[1] * yt[1]);
                        k = br(I, (h - W) / (z - 1)), N = br(I, (d - W) / (z + 1))
                    } else k = N = 0
            }
            P > dt ? N > dt ? (M = Fo(Rt, Tt, q, B, d, N, v), R = Fo(en, St, K, Pt, d, N, v), u.moveTo(M.cx + M.x01, M.cy + M.y01), N < I ? u.arc(M.cx, M.cy, N, pt(M.y01, M.x01), pt(R.y01, R.x01), !v) : (u.arc(M.cx, M.cy, N, pt(M.y01, M.x01), pt(M.y11, M.x11), !v), u.arc(0, 0, d, pt(M.cy + M.y11, M.cx + M.x11), pt(R.cy + R.y11, R.cx + R.x11), !v), u.arc(R.cx, R.cy, N, pt(R.y11, R.x11), pt(R.y01, R.x01), !v))) : (u.moveTo(q, B), u.arc(0, 0, d, b, _, !v)) : u.moveTo(q, B), !(h > dt) || !(x > dt) ? u.lineTo(K, Pt) : k > dt ? (M = Fo(K, Pt, en, St, h, -k, v), R = Fo(q, B, Rt, Tt, h, -k, v), u.lineTo(M.cx + M.x01, M.cy + M.y01), k < I ? u.arc(M.cx, M.cy, k, pt(M.y01, M.x01), pt(R.y01, R.x01), !v) : (u.arc(M.cx, M.cy, k, pt(M.y01, M.x01), pt(M.y11, M.x11), !v), u.arc(0, 0, h, pt(M.cy + M.y11, M.cx + M.x11), pt(R.cy + R.y11, R.cx + R.x11), v), u.arc(R.cx, R.cy, k, pt(R.y11, R.x11), pt(R.y01, R.x01), !v))) : u.arc(0, 0, h, j, w, v)
        }
        if (u.closePath(), l) return u = null, l + "" || null
    }
    return c.centroid = function() {
        var l = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
            f = (+o.apply(this, arguments) + +i.apply(this, arguments)) / 2 - Pn / 2;
        return [mn(f) * l, jt(f) * l]
    }, c.innerRadius = function(l) {
        return arguments.length ? (t = typeof l == "function" ? l : U(+l), c) : t
    }, c.outerRadius = function(l) {
        return arguments.length ? (n = typeof l == "function" ? l : U(+l), c) : n
    }, c.cornerRadius = function(l) {
        return arguments.length ? (r = typeof l == "function" ? l : U(+l), c) : r
    }, c.padRadius = function(l) {
        return arguments.length ? (e = l == null ? null : typeof l == "function" ? l : U(+l), c) : e
    }, c.startAngle = function(l) {
        return arguments.length ? (o = typeof l == "function" ? l : U(+l), c) : o
    }, c.endAngle = function(l) {
        return arguments.length ? (i = typeof l == "function" ? l : U(+l), c) : i
    }, c.padAngle = function(l) {
        return arguments.length ? (a = typeof l == "function" ? l : U(+l), c) : a
    }, c.context = function(l) {
        return arguments.length ? (u = l != null ? l : null, c) : u
    }, c
}
var tS = Array.prototype.slice;

function Bo(t) {
    return typeof t == "object" && "length" in t ? t : Array.from(t)
}

function Oh(t) {
    this._context = t
}
Oh.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._point = 0
    },
    lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(t, n) {
        switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
            default:
                this._context.lineTo(t, n);
                break
        }
    }
};

function pe(t) {
    return new Oh(t)
}

function Su(t) {
    return t[0]
}

function Tu(t) {
    return t[1]
}

function Ho(t, n) {
    var r = U(!0),
        e = null,
        o = pe,
        i = null,
        a = he(u);
    t = typeof t == "function" ? t : t === void 0 ? Su : U(t), n = typeof n == "function" ? n : n === void 0 ? Tu : U(n);

    function u(s) {
        var c, l = (s = Bo(s)).length,
            f, h = !1,
            d;
        for (e == null && (i = o(d = a())), c = 0; c <= l; ++c) !(c < l && r(f = s[c], c, s)) === h && ((h = !h) ? i.lineStart() : i.lineEnd()), h && i.point(+t(f, c, s), +n(f, c, s));
        if (d) return i = null, d + "" || null
    }
    return u.x = function(s) {
        return arguments.length ? (t = typeof s == "function" ? s : U(+s), u) : t
    }, u.y = function(s) {
        return arguments.length ? (n = typeof s == "function" ? s : U(+s), u) : n
    }, u.defined = function(s) {
        return arguments.length ? (r = typeof s == "function" ? s : U(!!s), u) : r
    }, u.curve = function(s) {
        return arguments.length ? (o = s, e != null && (i = o(e)), u) : o
    }, u.context = function(s) {
        return arguments.length ? (s == null ? e = i = null : i = o(e = s), u) : e
    }, u
}

function qo(t, n, r) {
    var e = null,
        o = U(!0),
        i = null,
        a = pe,
        u = null,
        s = he(c);
    t = typeof t == "function" ? t : t === void 0 ? Su : U(+t), n = typeof n == "function" ? n : U(n === void 0 ? 0 : +n), r = typeof r == "function" ? r : r === void 0 ? Tu : U(+r);

    function c(f) {
        var h, d, y, m = (f = Bo(f)).length,
            g, v = !1,
            b, _ = new Array(m),
            w = new Array(m);
        for (i == null && (u = a(b = s())), h = 0; h <= m; ++h) {
            if (!(h < m && o(g = f[h], h, f)) === v)
                if (v = !v) d = h, u.areaStart(), u.lineStart();
                else {
                    for (u.lineEnd(), u.lineStart(), y = h - 1; y >= d; --y) u.point(_[y], w[y]);
                    u.lineEnd(), u.areaEnd()
                }
            v && (_[h] = +t(g, h, f), w[h] = +n(g, h, f), u.point(e ? +e(g, h, f) : _[h], r ? +r(g, h, f) : w[h]))
        }
        if (b) return u = null, b + "" || null
    }

    function l() {
        return Ho().defined(o).curve(a).context(i)
    }
    return c.x = function(f) {
        return arguments.length ? (t = typeof f == "function" ? f : U(+f), e = null, c) : t
    }, c.x0 = function(f) {
        return arguments.length ? (t = typeof f == "function" ? f : U(+f), c) : t
    }, c.x1 = function(f) {
        return arguments.length ? (e = f == null ? null : typeof f == "function" ? f : U(+f), c) : e
    }, c.y = function(f) {
        return arguments.length ? (n = typeof f == "function" ? f : U(+f), r = null, c) : n
    }, c.y0 = function(f) {
        return arguments.length ? (n = typeof f == "function" ? f : U(+f), c) : n
    }, c.y1 = function(f) {
        return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : U(+f), c) : r
    }, c.lineX0 = c.lineY0 = function() {
        return l().x(t).y(n)
    }, c.lineY1 = function() {
        return l().x(t).y(r)
    }, c.lineX1 = function() {
        return l().x(e).y(n)
    }, c.defined = function(f) {
        return arguments.length ? (o = typeof f == "function" ? f : U(!!f), c) : o
    }, c.curve = function(f) {
        return arguments.length ? (a = f, i != null && (u = a(i)), c) : a
    }, c.context = function(f) {
        return arguments.length ? (f == null ? i = u = null : u = a(i = f), c) : i
    }, c
}

function nS(t, n) {
    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
}

function rS(t) {
    return t
}

function eS() {
    var t = rS,
        n = nS,
        r = null,
        e = U(0),
        o = U(Sn),
        i = U(0);

    function a(u) {
        var s, c = (u = Bo(u)).length,
            l, f, h = 0,
            d = new Array(c),
            y = new Array(c),
            m = +e.apply(this, arguments),
            g = Math.min(Sn, Math.max(-Sn, o.apply(this, arguments) - m)),
            v, b = Math.min(Math.abs(g) / c, i.apply(this, arguments)),
            _ = b * (g < 0 ? -1 : 1),
            w;
        for (s = 0; s < c; ++s)(w = y[d[s] = s] = +t(u[s], s, u)) > 0 && (h += w);
        for (n != null ? d.sort(function(j, x) {
                return n(y[j], y[x])
            }) : r != null && d.sort(function(j, x) {
                return r(u[j], u[x])
            }), s = 0, f = h ? (g - c * _) / h : 0; s < c; ++s, m = v) l = d[s], w = y[l], v = m + (w > 0 ? w * f : 0) + _, y[l] = {
            data: u[l],
            index: s,
            value: w,
            startAngle: m,
            endAngle: v,
            padAngle: b
        };
        return y
    }
    return a.value = function(u) {
        return arguments.length ? (t = typeof u == "function" ? u : U(+u), a) : t
    }, a.sortValues = function(u) {
        return arguments.length ? (n = u, r = null, a) : n
    }, a.sort = function(u) {
        return arguments.length ? (r = u, n = null, a) : r
    }, a.startAngle = function(u) {
        return arguments.length ? (e = typeof u == "function" ? u : U(+u), a) : e
    }, a.endAngle = function(u) {
        return arguments.length ? (o = typeof u == "function" ? u : U(+u), a) : o
    }, a.padAngle = function(u) {
        return arguments.length ? (i = typeof u == "function" ? u : U(+u), a) : i
    }, a
}
var jh = ku(pe);

function Ah(t) {
    this._curve = t
}
Ah.prototype = {
    areaStart: function() {
        this._curve.areaStart()
    },
    areaEnd: function() {
        this._curve.areaEnd()
    },
    lineStart: function() {
        this._curve.lineStart()
    },
    lineEnd: function() {
        this._curve.lineEnd()
    },
    point: function(t, n) {
        this._curve.point(n * Math.sin(t), n * -Math.cos(t))
    }
};

function ku(t) {
    function n(r) {
        return new Ah(t(r))
    }
    return n._curve = t, n
}

function de(t) {
    var n = t.curve;
    return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function(r) {
        return arguments.length ? n(ku(r)) : n()._curve
    }, t
}

function Mu() {
    return de(Ho().curve(jh))
}

function Cu() {
    var t = qo().curve(jh),
        n = t.curve,
        r = t.lineX0,
        e = t.lineX1,
        o = t.lineY0,
        i = t.lineY1;
    return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function() {
        return de(r())
    }, delete t.lineX0, t.lineEndAngle = function() {
        return de(e())
    }, delete t.lineX1, t.lineInnerRadius = function() {
        return de(o())
    }, delete t.lineY0, t.lineOuterRadius = function() {
        return de(i())
    }, delete t.lineY1, t.curve = function(a) {
        return arguments.length ? n(ku(a)) : n()._curve
    }, t
}

function ye(t, n) {
    return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)]
}
class Eh {
    constructor(n, r) {
        this._context = n, this._x = r
    }
    areaStart() {
        this._line = 0
    }
    areaEnd() {
        this._line = NaN
    }
    lineStart() {
        this._point = 0
    }
    lineEnd() {
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
    }
    point(n, r) {
        switch (n = +n, r = +r, this._point) {
            case 0:
                {
                    this._point = 1,
                    this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
                    break
                }
            case 1:
                this._point = 2;
            default:
                {
                    this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + n) / 2, this._y0, this._x0, r, n, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, n, this._y0, n, r);
                    break
                }
        }
        this._x0 = n, this._y0 = r
    }
}
class oS {
    constructor(n) {
        this._context = n
    }
    lineStart() {
        this._point = 0
    }
    lineEnd() {}
    point(n, r) {
        if (n = +n, r = +r, this._point === 0) this._point = 1;
        else {
            const e = ye(this._x0, this._y0),
                o = ye(this._x0, this._y0 = (this._y0 + r) / 2),
                i = ye(n, this._y0),
                a = ye(n, r);
            this._context.moveTo(...e), this._context.bezierCurveTo(...o, ...i, ...a)
        }
        this._x0 = n, this._y0 = r
    }
}

function Ph(t) {
    return new Eh(t, !0)
}

function Sh(t) {
    return new Eh(t, !1)
}

function iS(t) {
    return new oS(t)
}

function aS(t) {
    return t.source
}

function uS(t) {
    return t.target
}

function Ko(t) {
    let n = aS,
        r = uS,
        e = Su,
        o = Tu,
        i = null,
        a = null,
        u = he(s);

    function s() {
        let c;
        const l = tS.call(arguments),
            f = n.apply(this, l),
            h = r.apply(this, l);
        if (i == null && (a = t(c = u())), a.lineStart(), l[0] = f, a.point(+e.apply(this, l), +o.apply(this, l)), l[0] = h, a.point(+e.apply(this, l), +o.apply(this, l)), a.lineEnd(), c) return a = null, c + "" || null
    }
    return s.source = function(c) {
        return arguments.length ? (n = c, s) : n
    }, s.target = function(c) {
        return arguments.length ? (r = c, s) : r
    }, s.x = function(c) {
        return arguments.length ? (e = typeof c == "function" ? c : U(+c), s) : e
    }, s.y = function(c) {
        return arguments.length ? (o = typeof c == "function" ? c : U(+c), s) : o
    }, s.context = function(c) {
        return arguments.length ? (c == null ? i = a = null : a = t(i = c), s) : i
    }, s
}

function sS() {
    return Ko(Ph)
}

function cS() {
    return Ko(Sh)
}

function lS() {
    const t = Ko(iS);
    return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t
}
const fS = tt(3),
    Th = {
        draw(t, n) {
            const r = tt(n + br(n / 28, .75)) * .59436,
                e = r / 2,
                o = e * fS;
            t.moveTo(0, r), t.lineTo(0, -r), t.moveTo(-o, -e), t.lineTo(o, e), t.moveTo(-o, e), t.lineTo(o, -e)
        }
    },
    Vo = {
        draw(t, n) {
            const r = tt(n / Pn);
            t.moveTo(r, 0), t.arc(0, 0, r, 0, Sn)
        }
    },
    kh = {
        draw(t, n) {
            const r = tt(n / 5) / 2;
            t.moveTo(-3 * r, -r), t.lineTo(-r, -r), t.lineTo(-r, -3 * r), t.lineTo(r, -3 * r), t.lineTo(r, -r), t.lineTo(3 * r, -r), t.lineTo(3 * r, r), t.lineTo(r, r), t.lineTo(r, 3 * r), t.lineTo(-r, 3 * r), t.lineTo(-r, r), t.lineTo(-3 * r, r), t.closePath()
        }
    },
    Mh = tt(1 / 3),
    hS = Mh * 2,
    Ch = {
        draw(t, n) {
            const r = tt(n / hS),
                e = r * Mh;
            t.moveTo(0, -r), t.lineTo(e, 0), t.lineTo(0, r), t.lineTo(-e, 0), t.closePath()
        }
    },
    Dh = {
        draw(t, n) {
            const r = tt(n) * .62625;
            t.moveTo(0, -r), t.lineTo(r, 0), t.lineTo(0, r), t.lineTo(-r, 0), t.closePath()
        }
    },
    Nh = {
        draw(t, n) {
            const r = tt(n - br(n / 7, 2)) * .87559;
            t.moveTo(-r, 0), t.lineTo(r, 0), t.moveTo(0, r), t.lineTo(0, -r)
        }
    },
    Ih = {
        draw(t, n) {
            const r = tt(n),
                e = -r / 2;
            t.rect(e, e, r, r)
        }
    },
    Rh = {
        draw(t, n) {
            const r = tt(n) * .4431;
            t.moveTo(r, r), t.lineTo(r, -r), t.lineTo(-r, -r), t.lineTo(-r, r), t.closePath()
        }
    },
    pS = .8908130915292852,
    Lh = jt(Pn / 10) / jt(7 * Pn / 10),
    dS = jt(Sn / 10) * Lh,
    yS = -mn(Sn / 10) * Lh,
    $h = {
        draw(t, n) {
            const r = tt(n * pS),
                e = dS * r,
                o = yS * r;
            t.moveTo(0, -r), t.lineTo(e, o);
            for (let i = 1; i < 5; ++i) {
                const a = Sn * i / 5,
                    u = mn(a),
                    s = jt(a);
                t.lineTo(s * r, -u * r), t.lineTo(u * e - s * o, s * e + u * o)
            }
            t.closePath()
        }
    },
    Du = tt(3),
    zh = {
        draw(t, n) {
            const r = -tt(n / (Du * 3));
            t.moveTo(0, r * 2), t.lineTo(-Du * r, -r), t.lineTo(Du * r, -r), t.closePath()
        }
    },
    vS = tt(3),
    Uh = {
        draw(t, n) {
            const r = tt(n) * .6824,
                e = r / 2,
                o = r * vS / 2;
            t.moveTo(0, -r), t.lineTo(o, e), t.lineTo(-o, e), t.closePath()
        }
    },
    Nt = -.5,
    It = tt(3) / 2,
    Nu = 1 / tt(12),
    gS = (Nu / 2 + 1) * 3,
    Wh = {
        draw(t, n) {
            const r = tt(n / gS),
                e = r / 2,
                o = r * Nu,
                i = e,
                a = r * Nu + r,
                u = -i,
                s = a;
            t.moveTo(e, o), t.lineTo(i, a), t.lineTo(u, s), t.lineTo(Nt * e - It * o, It * e + Nt * o), t.lineTo(Nt * i - It * a, It * i + Nt * a), t.lineTo(Nt * u - It * s, It * u + Nt * s), t.lineTo(Nt * e + It * o, Nt * o - It * e), t.lineTo(Nt * i + It * a, Nt * a - It * i), t.lineTo(Nt * u + It * s, Nt * s - It * u), t.closePath()
        }
    },
    Iu = {
        draw(t, n) {
            const r = tt(n - br(n / 6, 1.7)) * .6189;
            t.moveTo(-r, -r), t.lineTo(r, r), t.moveTo(-r, r), t.lineTo(r, -r)
        }
    },
    Fh = [Vo, kh, Ch, Ih, $h, zh, Wh],
    mS = [Vo, Nh, Iu, Uh, Th, Rh, Dh];

function bS(t, n) {
    let r = null,
        e = he(o);
    t = typeof t == "function" ? t : U(t || Vo), n = typeof n == "function" ? n : U(n === void 0 ? 64 : +n);

    function o() {
        let i;
        if (r || (r = i = e()), t.apply(this, arguments).draw(r, +n.apply(this, arguments)), i) return r = null, i + "" || null
    }
    return o.type = function(i) {
        return arguments.length ? (t = typeof i == "function" ? i : U(i), o) : t
    }, o.size = function(i) {
        return arguments.length ? (n = typeof i == "function" ? i : U(+i), o) : n
    }, o.context = function(i) {
        return arguments.length ? (r = i != null ? i : null, o) : r
    }, o
}

function Tn() {}

function Go(t, n, r) {
    t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + r) / 6)
}

function Yo(t) {
    this._context = t
}
Yo.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 3:
                Go(this, this._x1, this._y1);
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break
        }(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(t, n) {
        switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
                Go(this, t, n);
                break
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
    }
};

function _S(t) {
    return new Yo(t)
}

function Bh(t) {
    this._context = t
}
Bh.prototype = {
    areaStart: Tn,
    areaEnd: Tn,
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 1:
                {
                    this._context.moveTo(this._x2, this._y2),
                    this._context.closePath();
                    break
                }
            case 2:
                {
                    this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
                    this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
                    this._context.closePath();
                    break
                }
            case 3:
                {
                    this.point(this._x2, this._y2),
                    this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4);
                    break
                }
        }
    },
    point: function(t, n) {
        switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1, this._x2 = t, this._y2 = n;
                break;
            case 1:
                this._point = 2, this._x3 = t, this._y3 = n;
                break;
            case 2:
                this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                break;
            default:
                Go(this, t, n);
                break
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
    }
};

function xS(t) {
    return new Bh(t)
}

function Hh(t) {
    this._context = t
}
Hh.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
    },
    lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(t, n) {
        switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                var r = (this._x0 + 4 * this._x1 + t) / 6,
                    e = (this._y0 + 4 * this._y1 + n) / 6;
                this._line ? this._context.lineTo(r, e) : this._context.moveTo(r, e);
                break;
            case 3:
                this._point = 4;
            default:
                Go(this, t, n);
                break
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
    }
};

function wS(t) {
    return new Hh(t)
}

function qh(t, n) {
    this._basis = new Yo(t), this._beta = n
}
qh.prototype = {
    lineStart: function() {
        this._x = [], this._y = [], this._basis.lineStart()
    },
    lineEnd: function() {
        var t = this._x,
            n = this._y,
            r = t.length - 1;
        if (r > 0)
            for (var e = t[0], o = n[0], i = t[r] - e, a = n[r] - o, u = -1, s; ++u <= r;) s = u / r, this._basis.point(this._beta * t[u] + (1 - this._beta) * (e + s * i), this._beta * n[u] + (1 - this._beta) * (o + s * a));
        this._x = this._y = null, this._basis.lineEnd()
    },
    point: function(t, n) {
        this._x.push(+t), this._y.push(+n)
    }
};
const OS = function t(n) {
    function r(e) {
        return n === 1 ? new Yo(e) : new qh(e, n)
    }
    return r.beta = function(e) {
        return t(+e)
    }, r
}(.85);

function Xo(t, n, r) {
    t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - r), t._x2, t._y2)
}

function Ru(t, n) {
    this._context = t, this._k = (1 - n) / 6
}
Ru.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                Xo(this, this._x1, this._y1);
                break
        }(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(t, n) {
        switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2, this._x1 = t, this._y1 = n;
                break;
            case 2:
                this._point = 3;
            default:
                Xo(this, t, n);
                break
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
    }
};
const jS = function t(n) {
    function r(e) {
        return new Ru(e, n)
    }
    return r.tension = function(e) {
        return t(+e)
    }, r
}(0);

function Lu(t, n) {
    this._context = t, this._k = (1 - n) / 6
}
Lu.prototype = {
    areaStart: Tn,
    areaEnd: Tn,
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 1:
                {
                    this._context.moveTo(this._x3, this._y3),
                    this._context.closePath();
                    break
                }
            case 2:
                {
                    this._context.lineTo(this._x3, this._y3),
                    this._context.closePath();
                    break
                }
            case 3:
                {
                    this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4),
                    this.point(this._x5, this._y5);
                    break
                }
        }
    },
    point: function(t, n) {
        switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1, this._x3 = t, this._y3 = n;
                break;
            case 1:
                this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                break;
            case 2:
                this._point = 3, this._x5 = t, this._y5 = n;
                break;
            default:
                Xo(this, t, n);
                break
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
    }
};
const AS = function t(n) {
    function r(e) {
        return new Lu(e, n)
    }
    return r.tension = function(e) {
        return t(+e)
    }, r
}(0);

function $u(t, n) {
    this._context = t, this._k = (1 - n) / 6
}
$u.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
    },
    lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(t, n) {
        switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4;
            default:
                Xo(this, t, n);
                break
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
    }
};
const ES = function t(n) {
    function r(e) {
        return new $u(e, n)
    }
    return r.tension = function(e) {
        return t(+e)
    }, r
}(0);

function zu(t, n, r) {
    var e = t._x1,
        o = t._y1,
        i = t._x2,
        a = t._y2;
    if (t._l01_a > dt) {
        var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
            s = 3 * t._l01_a * (t._l01_a + t._l12_a);
        e = (e * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / s, o = (o * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / s
    }
    if (t._l23_a > dt) {
        var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
            l = 3 * t._l23_a * (t._l23_a + t._l12_a);
        i = (i * c + t._x1 * t._l23_2a - n * t._l12_2a) / l, a = (a * c + t._y1 * t._l23_2a - r * t._l12_2a) / l
    }
    t._context.bezierCurveTo(e, o, i, a, t._x2, t._y2)
}

function Kh(t, n) {
    this._context = t, this._alpha = n
}
Kh.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                this.point(this._x2, this._y2);
                break
        }(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(t, n) {
        if (t = +t, n = +n, this._point) {
            var r = this._x2 - t,
                e = this._y2 - n;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + e * e, this._alpha))
        }
        switch (this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
            default:
                zu(this, t, n);
                break
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
    }
};
const PS = function t(n) {
    function r(e) {
        return n ? new Kh(e, n) : new Ru(e, 0)
    }
    return r.alpha = function(e) {
        return t(+e)
    }, r
}(.5);

function Vh(t, n) {
    this._context = t, this._alpha = n
}
Vh.prototype = {
    areaStart: Tn,
    areaEnd: Tn,
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 1:
                {
                    this._context.moveTo(this._x3, this._y3),
                    this._context.closePath();
                    break
                }
            case 2:
                {
                    this._context.lineTo(this._x3, this._y3),
                    this._context.closePath();
                    break
                }
            case 3:
                {
                    this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4),
                    this.point(this._x5, this._y5);
                    break
                }
        }
    },
    point: function(t, n) {
        if (t = +t, n = +n, this._point) {
            var r = this._x2 - t,
                e = this._y2 - n;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + e * e, this._alpha))
        }
        switch (this._point) {
            case 0:
                this._point = 1, this._x3 = t, this._y3 = n;
                break;
            case 1:
                this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                break;
            case 2:
                this._point = 3, this._x5 = t, this._y5 = n;
                break;
            default:
                zu(this, t, n);
                break
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
    }
};
const SS = function t(n) {
    function r(e) {
        return n ? new Vh(e, n) : new Lu(e, 0)
    }
    return r.alpha = function(e) {
        return t(+e)
    }, r
}(.5);

function Gh(t, n) {
    this._context = t, this._alpha = n
}
Gh.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
    },
    lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(t, n) {
        if (t = +t, n = +n, this._point) {
            var r = this._x2 - t,
                e = this._y2 - n;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + e * e, this._alpha))
        }
        switch (this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4;
            default:
                zu(this, t, n);
                break
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
    }
};
const TS = function t(n) {
    function r(e) {
        return n ? new Gh(e, n) : new $u(e, 0)
    }
    return r.alpha = function(e) {
        return t(+e)
    }, r
}(.5);

function Yh(t) {
    this._context = t
}
Yh.prototype = {
    areaStart: Tn,
    areaEnd: Tn,
    lineStart: function() {
        this._point = 0
    },
    lineEnd: function() {
        this._point && this._context.closePath()
    },
    point: function(t, n) {
        t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
    }
};

function kS(t) {
    return new Yh(t)
}

function Xh(t) {
    return t < 0 ? -1 : 1
}

function Qh(t, n, r) {
    var e = t._x1 - t._x0,
        o = n - t._x1,
        i = (t._y1 - t._y0) / (e || o < 0 && -0),
        a = (r - t._y1) / (o || e < 0 && -0),
        u = (i * o + a * e) / (e + o);
    return (Xh(i) + Xh(a)) * Math.min(Math.abs(i), Math.abs(a), .5 * Math.abs(u)) || 0
}

function Jh(t, n) {
    var r = t._x1 - t._x0;
    return r ? (3 * (t._y1 - t._y0) / r - n) / 2 : n
}

function Uu(t, n, r) {
    var e = t._x0,
        o = t._y0,
        i = t._x1,
        a = t._y1,
        u = (i - e) / 3;
    t._context.bezierCurveTo(e + u, o + u * n, i - u, a - u * r, i, a)
}

function Qo(t) {
    this._context = t
}
Qo.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                Uu(this, this._t0, Jh(this, this._t0));
                break
        }(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(t, n) {
        var r = NaN;
        if (t = +t, n = +n, !(t === this._x1 && n === this._y1)) {
            switch (this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, Uu(this, Jh(this, r = Qh(this, t, n)), r);
                    break;
                default:
                    Uu(this, this._t0, r = Qh(this, t, n));
                    break
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = r
        }
    }
};

function Zh(t) {
    this._context = new t0(t)
}(Zh.prototype = Object.create(Qo.prototype)).point = function(t, n) {
    Qo.prototype.point.call(this, n, t)
};

function t0(t) {
    this._context = t
}
t0.prototype = {
    moveTo: function(t, n) {
        this._context.moveTo(n, t)
    },
    closePath: function() {
        this._context.closePath()
    },
    lineTo: function(t, n) {
        this._context.lineTo(n, t)
    },
    bezierCurveTo: function(t, n, r, e, o, i) {
        this._context.bezierCurveTo(n, t, e, r, i, o)
    }
};

function MS(t) {
    return new Qo(t)
}

function CS(t) {
    return new Zh(t)
}

function n0(t) {
    this._context = t
}
n0.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x = [], this._y = []
    },
    lineEnd: function() {
        var t = this._x,
            n = this._y,
            r = t.length;
        if (r)
            if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), r === 2) this._context.lineTo(t[1], n[1]);
            else
                for (var e = r0(t), o = r0(n), i = 0, a = 1; a < r; ++i, ++a) this._context.bezierCurveTo(e[0][i], o[0][i], e[1][i], o[1][i], t[a], n[a]);
        (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
    },
    point: function(t, n) {
        this._x.push(+t), this._y.push(+n)
    }
};

function r0(t) {
    var n, r = t.length - 1,
        e, o = new Array(r),
        i = new Array(r),
        a = new Array(r);
    for (o[0] = 0, i[0] = 2, a[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) o[n] = 1, i[n] = 4, a[n] = 4 * t[n] + 2 * t[n + 1];
    for (o[r - 1] = 2, i[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = o[n] / i[n - 1], i[n] -= e, a[n] -= e * a[n - 1];
    for (o[r - 1] = a[r - 1] / i[r - 1], n = r - 2; n >= 0; --n) o[n] = (a[n] - o[n + 1]) / i[n];
    for (i[r - 1] = (t[r] + o[r - 1]) / 2, n = 0; n < r - 1; ++n) i[n] = 2 * t[n + 1] - o[n + 1];
    return [o, i]
}

function DS(t) {
    return new n0(t)
}

function Jo(t, n) {
    this._context = t, this._t = n
}
Jo.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x = this._y = NaN, this._point = 0
    },
    lineEnd: function() {
        0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
    },
    point: function(t, n) {
        switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
            default:
                {
                    if (this._t <= 0) this._context.lineTo(this._x, n),
                    this._context.lineTo(t, n);
                    else {
                        var r = this._x * (1 - this._t) + t * this._t;
                        this._context.lineTo(r, this._y), this._context.lineTo(r, n)
                    }
                    break
                }
        }
        this._x = t, this._y = n
    }
};

function NS(t) {
    return new Jo(t, .5)
}

function IS(t) {
    return new Jo(t, 0)
}

function RS(t) {
    return new Jo(t, 1)
}

function _r(t, n) {
    if ((a = t.length) > 1)
        for (var r = 1, e, o, i = t[n[0]], a, u = i.length; r < a; ++r)
            for (o = i, i = t[n[r]], e = 0; e < u; ++e) i[e][1] += i[e][0] = isNaN(o[e][1]) ? o[e][0] : o[e][1]
}

function xr(t) {
    for (var n = t.length, r = new Array(n); --n >= 0;) r[n] = n;
    return r
}

function LS(t, n) {
    return t[n]
}

function $S(t) {
    const n = [];
    return n.key = t, n
}

function zS() {
    var t = U([]),
        n = xr,
        r = _r,
        e = LS;

    function o(i) {
        var a = Array.from(t.apply(this, arguments), $S),
            u, s = a.length,
            c = -1,
            l;
        for (const f of i)
            for (u = 0, ++c; u < s; ++u)(a[u][c] = [0, +e(f, a[u].key, c, i)]).data = f;
        for (u = 0, l = Bo(n(a)); u < s; ++u) a[l[u]].index = u;
        return r(a, l), a
    }
    return o.keys = function(i) {
        return arguments.length ? (t = typeof i == "function" ? i : U(Array.from(i)), o) : t
    }, o.value = function(i) {
        return arguments.length ? (e = typeof i == "function" ? i : U(+i), o) : e
    }, o.order = function(i) {
        return arguments.length ? (n = i == null ? xr : typeof i == "function" ? i : U(Array.from(i)), o) : n
    }, o.offset = function(i) {
        return arguments.length ? (r = i != null ? i : _r, o) : r
    }, o
}

function US(t, n) {
    if ((e = t.length) > 0) {
        for (var r, e, o = 0, i = t[0].length, a; o < i; ++o) {
            for (a = r = 0; r < e; ++r) a += t[r][o][1] || 0;
            if (a)
                for (r = 0; r < e; ++r) t[r][o][1] /= a
        }
        _r(t, n)
    }
}

function WS(t, n) {
    if ((s = t.length) > 0)
        for (var r, e = 0, o, i, a, u, s, c = t[n[0]].length; e < c; ++e)
            for (a = u = 0, r = 0; r < s; ++r)(i = (o = t[n[r]][e])[1] - o[0]) > 0 ? (o[0] = a, o[1] = a += i) : i < 0 ? (o[1] = u, o[0] = u += i) : (o[0] = 0, o[1] = i)
}

function FS(t, n) {
    if ((o = t.length) > 0) {
        for (var r = 0, e = t[n[0]], o, i = e.length; r < i; ++r) {
            for (var a = 0, u = 0; a < o; ++a) u += t[a][r][1] || 0;
            e[r][1] += e[r][0] = -u / 2
        }
        _r(t, n)
    }
}

function BS(t, n) {
    if (!(!((a = t.length) > 0) || !((i = (o = t[n[0]]).length) > 0))) {
        for (var r = 0, e = 1, o, i, a; e < i; ++e) {
            for (var u = 0, s = 0, c = 0; u < a; ++u) {
                for (var l = t[n[u]], f = l[e][1] || 0, h = l[e - 1][1] || 0, d = (f - h) / 2, y = 0; y < u; ++y) {
                    var m = t[n[y]],
                        g = m[e][1] || 0,
                        v = m[e - 1][1] || 0;
                    d += g - v
                }
                s += f, c += d * f
            }
            o[e - 1][1] += o[e - 1][0] = r, s && (r -= c / s)
        }
        o[e - 1][1] += o[e - 1][0] = r, _r(t, n)
    }
}

function e0(t) {
    var n = t.map(HS);
    return xr(t).sort(function(r, e) {
        return n[r] - n[e]
    })
}

function HS(t) {
    for (var n = -1, r = 0, e = t.length, o, i = -1 / 0; ++n < e;)(o = +t[n][1]) > i && (i = o, r = n);
    return r
}

function o0(t) {
    var n = t.map(i0);
    return xr(t).sort(function(r, e) {
        return n[r] - n[e]
    })
}

function i0(t) {
    for (var n = 0, r = -1, e = t.length, o; ++r < e;)(o = +t[r][1]) && (n += o);
    return n
}

function qS(t) {
    return o0(t).reverse()
}

function KS(t) {
    var n = t.length,
        r, e, o = t.map(i0),
        i = e0(t),
        a = 0,
        u = 0,
        s = [],
        c = [];
    for (r = 0; r < n; ++r) e = i[r], a < u ? (a += o[e], s.push(e)) : (u += o[e], c.push(e));
    return c.reverse().concat(s)
}

function VS(t) {
    return xr(t).reverse()
}
const GS = Object.freeze(Object.defineProperty({
    __proto__: null,
    arc: ZP,
    area: qo,
    areaRadial: Cu,
    curveBasis: _S,
    curveBasisClosed: xS,
    curveBasisOpen: wS,
    curveBumpX: Ph,
    curveBumpY: Sh,
    curveBundle: OS,
    curveCardinal: jS,
    curveCardinalClosed: AS,
    curveCardinalOpen: ES,
    curveCatmullRom: PS,
    curveCatmullRomClosed: SS,
    curveCatmullRomOpen: TS,
    curveLinear: pe,
    curveLinearClosed: kS,
    curveMonotoneX: MS,
    curveMonotoneY: CS,
    curveNatural: DS,
    curveStep: NS,
    curveStepAfter: RS,
    curveStepBefore: IS,
    line: Ho,
    lineRadial: Mu,
    link: Ko,
    linkHorizontal: sS,
    linkRadial: lS,
    linkVertical: cS,
    pie: eS,
    pointRadial: ye,
    radialArea: Cu,
    radialLine: Mu,
    stack: zS,
    stackOffsetDiverging: WS,
    stackOffsetExpand: US,
    stackOffsetNone: _r,
    stackOffsetSilhouette: FS,
    stackOffsetWiggle: BS,
    stackOrderAppearance: e0,
    stackOrderAscending: o0,
    stackOrderDescending: qS,
    stackOrderInsideOut: KS,
    stackOrderNone: xr,
    stackOrderReverse: VS,
    symbol: bS,
    symbolAsterisk: Th,
    symbolCircle: Vo,
    symbolCross: kh,
    symbolDiamond: Ch,
    symbolDiamond2: Dh,
    symbolPlus: Nh,
    symbolSquare: Ih,
    symbolSquare2: Rh,
    symbolStar: $h,
    symbolTimes: Iu,
    symbolTriangle: zh,
    symbolTriangle2: Uh,
    symbolWye: Wh,
    symbolX: Iu,
    symbols: Fh,
    symbolsFill: Fh,
    symbolsStroke: mS
}, Symbol.toStringTag, {
    value: "Module"
}));
var a0 = function(t) {
        var n = t._y1 !== void 0 ? t._y1 : t._y;
        return n != null && t._y0 !== null
    },
    u0 = function(t) {
        return function(n) {
            return t.x(n._x1 !== void 0 ? n._x1 : n._x)
        }
    },
    Wu = function(t) {
        return function(n) {
            return t.y(n._y1 !== void 0 ? n._y1 : n._y)
        }
    },
    YS = function(t) {
        return function(n) {
            var r = t.x(n._x1 !== void 0 ? n._x1 : n._x);
            return -1 * r + Math.PI / 2
        }
    },
    s0 = function(t) {
        var n = function(r) {
            return r && r[0].toUpperCase() + r.slice(1)
        };
        return "curve".concat(n(t))
    },
    XS = function(t) {
        return "".concat(s0(t), "Closed")
    },
    Zo = function(t) {
        var n = t.interpolation;
        if (typeof n == "function") return n;
        if (typeof n == "string") {
            var r = t.polar,
                e = t.openCurve,
                o = e === void 0 ? !r : e,
                i = o ? s0(n) : XS(n);
            return GS[i]
        }
        return pe
    },
    QS = function(t) {
        var n = t.polar,
            r = t.scale,
            e = t.horizontal;
        return n ? Mu().defined(a0).curve(Zo(t)).angle(YS(r)).radius(Wu(r)) : Ho().defined(a0).curve(Zo(t)).x(e ? Wu(r) : u0(r)).y(e ? u0(r) : Wu(r))
    };

function c0(t, n, r) {
    var e = n.a,
        o = n.d,
        i = n.e,
        a = n.f;
    return r === "y" ? o * t + a : e * t + i
}

function JS(t) {
    return t.getScreenCTM().inverse()
}

function l0(t) {
    return !!(t && t.identifier !== void 0)
}

function ZS(t) {
    return t.changedTouches && t.changedTouches.length > 0
}

function f0(t) {
    if (!l0(t.nativeEvent)) {
        var n = function(r) {
            return r.nodeName === "svg" ? r : r.parentNode ? n(r.parentNode) : r
        };
        return n(t.target)
    }
}

function tT(t, n) {
    if (l0(t.nativeEvent)) return {
        x: t.nativeEvent.locationX,
        y: t.nativeEvent.locationY
    };
    var r = ZS(t) ? t.changedTouches[0] : t;
    n = n || f0(r);
    var e = JS(n);
    return {
        x: c0(r.clientX, e, "x"),
        y: c0(r.clientY, e, "y")
    }
}
var nT = wn,
    rT = B5;

function eT(t, n) {
    return t && t.length ? rT(t, nT(n)) : []
}
var oT = eT;
const iT = F(oT);

function aT(t, n, r, e) {
    for (var o = -1, i = t == null ? 0 : t.length; ++o < i;) {
        var a = t[o];
        n(e, a, r(a), t)
    }
    return e
}
var uT = aT,
    sT = Fi;

function cT(t, n, r, e) {
    return sT(t, function(o, i, a) {
        n(e, o, r(o), a)
    }), e
}
var lT = cT,
    fT = uT,
    hT = lT,
    pT = wn,
    dT = gt;

function yT(t, n) {
    return function(r, e) {
        var o = dT(r) ? fT : hT,
            i = n ? n() : {};
        return o(r, t, pT(e), i)
    }
}
var vT = yT,
    gT = yi,
    mT = vT,
    bT = Object.prototype,
    _T = bT.hasOwnProperty,
    xT = mT(function(t, n, r) {
        _T.call(t, r) ? t[r].push(n) : gT(t, r, [n])
    }),
    wT = xT;
const OT = F(wT);

function zt(t) {
    return PT(t) || ET(t) || AT(t) || jT()
}

function jT() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function AT(t, n) {
    if (t) {
        if (typeof t == "string") return Fu(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Fu(t, n)
    }
}

function ET(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
}

function PT(t) {
    if (Array.isArray(t)) return Fu(t)
}

function Fu(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e
}

function h0(t, n) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        n && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), r.push.apply(r, e)
    }
    return r
}

function p0(t) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? h0(Object(r), !0).forEach(function(e) {
            ST(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : h0(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function ST(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}

function TT(t) {
    var n = t.children,
        r = t.props,
        e = t.childComponents,
        o = t.parentProps,
        i = n.some(function(l) {
            return l.type && l.type.role === "histogram"
        }),
        a = i && n.length && n.every(function(l) {
            return l.type && l.type.role === "histogram"
        });
    if (!a) return o;
    var u = r.bins || e[0].props.bins;
    if (!Array.isArray(u)) {
        var s = n.reduce(function(l, f) {
                var h = no(f.props.x || "x");
                return l.concat(f.props.data.map(function(d) {
                    return {
                        x: h(d)
                    }
                }))
            }, []),
            c = n[0].type.getFormattedData;
        u = c({
            data: s,
            bins: u
        }).reduce(function(l, f, h) {
            var d = f.x0,
                y = f.x1;
            return h === 0 ? l.concat([d, y]) : l.concat(y)
        }, [])
    }
    return p0(p0({}, o), {}, {
        bins: u
    })
}

function kT(t, n) {
    var r = t.polar,
        e = t.startAngle,
        o = t.endAngle,
        i = t.categories,
        a = t.minDomain,
        u = t.maxDomain,
        s = {
            polar: r,
            startAngle: e,
            endAngle: o,
            categories: i,
            minDomain: a,
            maxDomain: u
        },
        c = 0,
        l = n ? n.slice(0) : O.Children.toArray(t.children);
    s = TT({
        children: l,
        props: t,
        childComponents: n,
        parentProps: s
    });
    var f = function(g, v, b) {
            var _ = A({}, g.props, s),
                w;
            if (_u(g)) g.type && Y(g.type.getData) ? (g = b ? O.cloneElement(g, b.props) : g, w = g.type.getData(_)) : w = nn(_);
            else return null;
            return c += 1, w.map(function(j, x) {
                return A({
                    _stack: c,
                    _group: x
                }, j)
            })
        },
        h = l.filter(function(g) {
            return g.type && g.type.role === "stack"
        }).length,
        d = function(g, v) {
            return g.concat(iT(v, "_group"))
        },
        y = Un(l, f, t, [], d),
        m = h ? "_group" : "_stack";
    return lx(OT(y, m))
}

function d0(t, n, r) {
    var e = t.datasets,
        o = t.horizontal,
        i = o ? Qt(t, "y") : Qt(t, "x"),
        a = Math.abs(i[1] - i[0]);
    r = r !== void 0 ? r : Array.isArray(e[0]) && e[0].length || 1, n = n || e.length;
    var u = n * r,
        s = .5;
    return Math.round(s * a / u)
}

function MT(t, n, r) {
    if (!(t.polar || n !== "x")) {
        var e = r.filter(function(h) {
            return h.type && h.type.role && h.type.role === "group"
        });
        if (!(e.length < 1)) {
            var o = e[0].props,
                i = o.offset,
                a = o.children;
            if (i) {
                var u = Array.isArray(a) && a[0];
                if (u) {
                    var s = u.props.barWidth,
                        c = u.props.data && u.props.data.length || 1;
                    if (u && u.type.role === "stack") {
                        var l = u.props.children && u.props.children[0];
                        if (!l) return;
                        s = l.props.barWidth, c = u.props.children.length
                    }
                    var f = s || d0(t, a.length, c);
                    return {
                        x: f * a.length / 2 + (i - f * ((a.length - 1) / 2))
                    }
                }
            }
        }
    }
}

function CT(t, n, r) {
    var e = r ? r.slice(0) : O.Children.toArray(t.children),
        o = t.data ? nn(t) : void 0,
        i = t.polar,
        a = t.startAngle,
        u = t.endAngle,
        s = t.categories,
        c = t.minDomain,
        l = t.maxDomain,
        f = t.horizontal,
        h = {
            horizontal: f,
            polar: i,
            startAngle: a,
            endAngle: u,
            minDomain: c,
            maxDomain: l,
            categories: s
        },
        d = o ? A(h, {
            data: o
        }) : h,
        y = function(b) {
            var _ = A({}, b.props, d);
            if (yh(b)) {
                if (b.type && Y(b.type.getDomain)) return b.props && b.type.getDomain(_, n)
            } else return null;
            return gP(_, n)
        },
        m = Un(e, y, t),
        g = m.length === 0 ? 0 : sn(m),
        v = m.length === 0 ? 1 : Wn(m);
    return [g, v]
}

function y0(t, n, r) {
    r = r || O.Children.toArray(t.children);
    var e = ju(t, n),
        o = MT(t, n, r),
        i;
    if (e) i = e;
    else {
        var a = mr(t, n),
            u = gr(t, n),
            s = (t.data || t.y) && nn(t),
            c = s ? Ou(t, n, s) : [],
            l = CT(t, n, r),
            f = a || sn([].concat(zt(c), zt(l))),
            h = u || Wn([].concat(zt(c), zt(l)));
        i = En(f, h)
    }
    return wu(i, A({
        domainPadding: o
    }, t), n)
}

function v0(t, n, r) {
    if (t.data) return go(t, n);
    var e = r ? r.slice(0) : O.Children.toArray(t.children),
        o = function(a) {
            var u = A({}, a.props, {
                horizontal: t.horizontal
            });
            return mo(u, n)
        },
        i = vr(Un(e, o, t));
    return i.length > 1 ? ae("linear") : ae(i[0])
}

function DT(t) {
    var n = ["groupComponent", "containerComponent", "labelComponent"],
        r = pu(t, n),
        e = t.events;
    return Array.isArray(r) && (e = Array.isArray(t.events) ? r.concat.apply(r, zt(t.events)) : r), e || []
}

function NT(t, n, r) {
    var e = t.style,
        o = t.colorScale,
        i = t.color;
    if (e && e.data && e.data.fill) return e.data.fill;
    if (o = n.props && n.props.colorScale ? n.props.colorScale : o, i = n.props && n.props.color ? n.props.color : i, !(!o && !i)) {
        var a = Array.isArray(o) ? o : HO(o);
        return i || a[r % a.length]
    }
}

function IT(t, n, r) {
    var e = t && t[r] && t[r].style ? t[r].style : {};
    return Rl(n, e)
}

function RT(t, n, r) {
    var e = r.style,
        o = r.role,
        i = t.props.style || {};
    if (Array.isArray(i)) return i;
    var a = t.type && t.type.role,
        u = a === "stack" ? void 0 : NT(r, t, n),
        s = a === "line" ? {
            fill: "none",
            stroke: u
        } : {
            fill: u
        },
        c = o === "stack" ? {} : {
            width: d0(r)
        },
        l = $({}, i.data, A({}, c, e.data, s)),
        f = $({}, i.labels, e.labels);
    return {
        parent: e.parent,
        data: l,
        labels: f
    }
}

function LT(t, n) {
    var r = function(e) {
        var o = e.props || {};
        if (!yh(e) || !o.categories) return null;
        var i = o.categories && !Array.isArray(o.categories) ? o.categories[n] : o.props.categories,
            a = i && i.filter(function(u) {
                return typeof u == "string"
            });
        return a ? Ul(a) : []
    };
    return Un(t.slice(0), r)
}

function $T(t) {
    var n = function(o) {
            var i = o.props || {},
                a;
            if (_u(o)) o.type && Y(o.type.getData) ? a = o.type.getData(i) : a = nn(i);
            else return null;
            return a.map(function(u) {
                return {
                    x: u.xName,
                    y: u.yName
                }
            })
        },
        r = {
            x: [],
            y: []
        },
        e = function(o, i) {
            var a = Array.isArray(i) ? i.map(function(s) {
                    return s.x
                }).filter(Boolean) : i.x,
                u = Array.isArray(i) ? i.map(function(s) {
                    return s.y
                }).filter(Boolean) : i.y;
            return {
                x: a !== void 0 ? o.x.concat(a) : o.x,
                y: u !== void 0 ? o.y.concat(u) : o.y
            }
        };
    return Un(t.slice(0), n, {}, r, e)
}

function g0(t, n, r) {
    var e = rt(t.categories) ? t.categories[n] : t.categories,
        o = _P(r, n),
        i = o ? ch(o.props, n) : [],
        a = e || LT(r, n);
    return vr(Gr([].concat(zt(a), zt(i))))
}

function zT(t, n) {
    n = n || O.Children.toArray(t.children);
    var r = g0(t, "x", n),
        e = g0(t, "y", n),
        o = $T(n);
    return {
        x: vr(Gr([].concat(zt(r), zt(o.x)))),
        y: vr(Gr([].concat(zt(e), zt(o.y))))
    }
}

function UT(t, n, r) {
    var e = t.categories && !Array.isArray(t.categories) ? t.categories.x : t.categories,
        o = t.categories && !Array.isArray(t.categories) ? t.categories.y : t.categories,
        i = !e || !o,
        a = i ? r || zT(t, n) : {},
        u = e || a.x,
        s = o || a.y;
    return {
        x: u.length > 0 ? u : void 0,
        y: s.length > 0 ? s : void 0
    }
}
var WT = function(t, n) {
        var r = nn(t);
        r.length < 2 && (r = []);
        var e = function(o) {
            var i = Gf(n[o]) === "log" ? 1 / Number.MAX_SAFE_INTEGER : 0,
                a = n[o].domain(),
                u = sn(a),
                s = Wn(a),
                c = i;
            return u < 0 && s <= 0 ? c = s : u >= 0 && s > 0 && (c = u), Qr(a) ? new Date(c) : c
        };
        return r.map(function(o) {
            var i = o._y1 !== void 0 ? o._y1 : o._y,
                a = o._y0 !== void 0 ? o._y0 : e("y"),
                u = o._x1 !== void 0 ? o._x1 : o._x,
                s = o._x0 !== void 0 ? o._x0 : e("x");
            return A({}, o, {
                _y0: a,
                _y1: i,
                _x0: s,
                _x1: u
            })
        })
    },
    FT = function(t) {
        var n = t.polar,
            r = Jx(t, "area"),
            e = Rl(t.style, r),
            o = {
                x: Qt(t, "x"),
                y: Qt(t, "y")
            },
            i = {
                x: Au(t, "x"),
                y: Au(t, "y")
            },
            a = {
                x: go(t, "x").domain(i.x).range(t.horizontal ? o.y : o.x),
                y: go(t, "y").domain(i.y).range(t.horizontal ? o.x : o.y)
            },
            u = n ? t.origin || Ll(t) : void 0,
            s = WT(t, a);
        return {
            style: e,
            data: s,
            scale: a,
            domain: i,
            origin: u
        }
    },
    BT = function(t, n) {
        var r = ur(t, n, "area");
        t = A({}, r, FT(r));
        var e = t,
            o = e.data,
            i = e.domain,
            a = e.events,
            u = e.groupComponent,
            s = e.height,
            c = e.horizontal,
            l = e.interpolation,
            f = e.origin,
            h = e.padding,
            d = e.polar,
            y = e.scale,
            m = e.sharedEvents,
            g = e.standalone,
            v = e.style,
            b = e.theme,
            _ = e.width,
            w = e.labels,
            j = e.name,
            x = e.disableInlineStyles,
            P = {
                parent: {
                    style: v.parent,
                    width: _,
                    height: s,
                    scale: y,
                    data: o,
                    domain: i,
                    standalone: g,
                    theme: b,
                    polar: d,
                    origin: f,
                    padding: h,
                    name: j,
                    horizontal: c
                },
                all: {
                    data: {
                        horizontal: c,
                        polar: d,
                        origin: f,
                        scale: y,
                        data: o,
                        interpolation: l,
                        groupComponent: u,
                        style: x ? {} : v.data,
                        disableInlineStyles: x
                    }
                }
            };
        return o.reduce(function(T, C, I) {
            var k = c5(t, C, I);
            if (k != null || w && (a || m)) {
                var N = hi(C.eventKey) ? I : C.eventKey;
                T[N] = {
                    labels: BO(t, I)
                }
            }
            return T
        }, P)
    };

function m0(t, n) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        n && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), r.push.apply(r, e)
    }
    return r
}

function wr(t) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? m0(Object(r), !0).forEach(function(e) {
            HT(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : m0(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function HT(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}
var Bu = function(t) {
        var n = t._y1 !== void 0 ? t._y1 : t._y;
        return n != null && t._y0 !== null
    },
    b0 = function(t) {
        return function(n) {
            return t.x(n._x1 !== void 0 ? n._x1 : n._x)
        }
    },
    Hu = function(t) {
        return function(n) {
            return t.y(n._y1 !== void 0 ? n._y1 : n._y)
        }
    },
    qu = function(t) {
        return function(n) {
            return t.y(n._y0)
        }
    },
    qT = function(t) {
        return function(n) {
            var r = t.x(n._x1 !== void 0 ? n._x1 : n._x);
            return -1 * r + Math.PI / 2
        }
    },
    KT = function(t) {
        var n = t.horizontal,
            r = t.scale,
            e = Zo(t);
        return n ? qo().defined(Bu).curve(e).x0(qu(r)).x1(Hu(r)).y(b0(r)) : qo().defined(Bu).curve(e).x(b0(r)).y1(Hu(r)).y0(qu(r))
    },
    VT = function(t) {
        var n = t.polar,
            r = t.scale,
            e = Zo(t);
        return n ? Cu().defined(Bu).curve(e).angle(qT(r)).outerRadius(Hu(r)).innerRadius(qu(r)) : KT(t)
    },
    GT = function(t) {
        var n = L(t.ariaLabel, t),
            r = L(t.desc, t),
            e = L(t.id, t),
            o = Xt(A({
                fill: "black"
            }, t.style), t),
            i = L(t.tabIndex, t);
        return A({}, t, {
            ariaLabel: n,
            desc: r,
            id: e,
            style: o,
            tabIndex: i
        })
    },
    YT = {
        groupComponent: O.createElement("g", null),
        pathComponent: O.createElement(L5, null),
        role: "presentation",
        shapeRendering: "auto"
    },
    _0 = function(t) {
        t = GT(wr(wr({}, YT), t));
        var n = t,
            r = n.ariaLabel,
            e = n.role,
            o = n.shapeRendering,
            i = n.className,
            a = n.polar,
            u = n.origin,
            s = n.data,
            c = n.pathComponent,
            l = n.events,
            f = n.groupComponent,
            h = n.clipPath,
            d = n.id,
            y = n.style,
            m = n.desc,
            g = n.tabIndex,
            v = qn(t),
            b = a && u ? "translate(".concat(u.x, ", ").concat(u.y, ")") : void 0,
            _ = t.transform || b,
            w = y.stroke && y.stroke !== "none" && y.stroke !== "transparent",
            j = VT(t),
            x = w && QS(t),
            P = y.stroke ? "none" : y.fill,
            T = wr(wr({
                "aria-label": r,
                className: i,
                role: e,
                shapeRendering: o,
                transform: _
            }, l), {}, {
                clipPath: h,
                tabIndex: g
            }),
            C = O.cloneElement(c, A({
                key: "".concat(d, "-area"),
                style: A({}, y, {
                    stroke: P
                }),
                d: j(s),
                desc: m,
                tabIndex: g
            }, T, v)),
            I = w ? O.cloneElement(c, A({
                key: "".concat(d, "-area-stroke"),
                style: A({}, y, {
                    fill: "none"
                }),
                d: x(s)
            }, T)) : null;
        return w ? O.cloneElement(f, v, [C, I]) : C
    };
_0.propTypes = wr(wr({}, yr.primitiveProps), {}, {
    groupComponent: p.element,
    interpolation: p.oneOfType([p.string, p.func]),
    pathComponent: p.element
});

function x0(t, n) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        n && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), r.push.apply(r, e)
    }
    return r
}

function Ku(t) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? x0(Object(r), !0).forEach(function(e) {
            XT(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : x0(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function XT(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}

function QT(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function w0(t, n) {
    for (var r = 0; r < n.length; r++) {
        var e = n[r];
        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
    }
}

function JT(t, n, r) {
    return n && w0(t.prototype, n), r && w0(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function ZT(t, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), n && Vu(t, n)
}

function Vu(t, n) {
    return Vu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, e) {
        return r.__proto__ = e, r
    }, Vu(t, n)
}

function tk(t) {
    var n = ek();
    return function() {
        var r = ti(t),
            e;
        if (n) {
            var o = ti(this).constructor;
            e = Reflect.construct(r, arguments, o)
        } else e = r.apply(this, arguments);
        return nk(this, e)
    }
}

function nk(t, n) {
    if (n && (typeof n == "object" || typeof n == "function")) return n;
    if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return rk(t)
}

function rk(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function ek() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch (t) {
        return !1
    }
}

function ti(t) {
    return ti = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, ti(t)
}
var O0 = {
        width: 450,
        height: 300,
        padding: 50,
        interpolation: "linear"
    },
    ok = {
        components: [{
            name: "parent",
            index: "parent"
        }, {
            name: "data",
            index: "all"
        }, {
            name: "labels"
        }]
    },
    Et = function(t) {
        ZT(r, t);
        var n = tk(r);

        function r() {
            return QT(this, r), n.apply(this, arguments)
        }
        return JT(r, [{
            key: "shouldAnimate",
            value: function() {
                return !!this.props.animate
            }
        }, {
            key: "render",
            value: function() {
                var e = r.animationWhitelist,
                    o = r.role,
                    i = ur(this.props, O0, o);
                if (this.shouldAnimate()) return this.animateComponent(i, e);
                var a = this.renderContinuousData(i),
                    u = i.standalone ? this.renderContainer(i.containerComponent, a) : a;
                return zw(u, i)
            }
        }]), r
    }(O.Component);
Et.animationWhitelist = ["data", "domain", "height", "padding", "style", "width"], Et.propTypes = Ku(Ku(Ku({}, yr.baseProps), yr.dataProps), {}, {
    interpolation: p.oneOfType([p.oneOf(["basis", "cardinal", "catmullRom", "linear", "monotoneX", "monotoneY", "natural", "step", "stepAfter", "stepBefore"]), p.func]),
    label: xw(p.string)
}), Et.defaultProps = {
    containerComponent: O.createElement(tn, null),
    dataComponent: O.createElement(_0, null),
    groupComponent: O.createElement(Vn, null),
    labelComponent: O.createElement(dr, {
        renderInPortal: !0
    }),
    samples: 50,
    sortKey: "x",
    sortOrder: "ascending",
    standalone: !0,
    theme: su.grayscale
}, Et.displayName = "VictoryArea", Et.role = "area", Et.continuous = !0, Et.defaultTransitions = xP(), Et.defaultPolarTransitions = wP(), Et.getDomain = Au, Et.getData = nn, Et.getBaseProps = function(t) {
    return BT(t, O0)
}, Et.expectedComponents = ["dataComponent", "labelComponent", "groupComponent", "containerComponent"];
var j0 = OE(Et, ok),
    ik = Ft,
    ak = function() {
        return ik.Date.now()
    },
    uk = ak,
    sk = Bt,
    Gu = uk,
    A0 = xl,
    ck = "Expected a function",
    lk = Math.max,
    fk = Math.min;

function hk(t, n, r) {
    var e, o, i, a, u, s, c = 0,
        l = !1,
        f = !1,
        h = !0;
    if (typeof t != "function") throw new TypeError(ck);
    n = A0(n) || 0, sk(r) && (l = !!r.leading, f = "maxWait" in r, i = f ? lk(A0(r.maxWait) || 0, n) : i, h = "trailing" in r ? !!r.trailing : h);

    function d(x) {
        var P = e,
            T = o;
        return e = o = void 0, c = x, a = t.apply(T, P), a
    }

    function y(x) {
        return c = x, u = setTimeout(v, n), l ? d(x) : a
    }

    function m(x) {
        var P = x - s,
            T = x - c,
            C = n - P;
        return f ? fk(C, i - T) : C
    }

    function g(x) {
        var P = x - s,
            T = x - c;
        return s === void 0 || P >= n || P < 0 || f && T >= i
    }

    function v() {
        var x = Gu();
        if (g(x)) return b(x);
        u = setTimeout(v, m(x))
    }

    function b(x) {
        return u = void 0, h && e ? d(x) : (e = o = void 0, a)
    }

    function _() {
        u !== void 0 && clearTimeout(u), c = 0, e = s = o = u = void 0
    }

    function w() {
        return u === void 0 ? a : b(Gu())
    }

    function j() {
        var x = Gu(),
            P = g(x);
        if (e = arguments, o = this, s = x, P) {
            if (u === void 0) return y(s);
            if (f) return clearTimeout(u), u = setTimeout(v, n), d(s)
        }
        return u === void 0 && (u = setTimeout(v, n)), a
    }
    return j.cancel = _, j.flush = w, j
}
var pk = hk,
    dk = pk,
    yk = Bt,
    vk = "Expected a function";

function gk(t, n, r) {
    var e = !0,
        o = !0;
    if (typeof t != "function") throw new TypeError(vk);
    return yk(r) && (e = "leading" in r ? !!r.leading : e, o = "trailing" in r ? !!r.trailing : o), dk(t, n, {
        leading: e,
        maxWait: n,
        trailing: o
    })
}
var mk = gk;
const bk = F(mk);

function _k(t) {
    for (var n = -1, r = t == null ? 0 : t.length, e = {}; ++n < r;) {
        var o = t[n];
        e[o[0]] = o[1]
    }
    return e
}
var xk = _k;
const wk = F(xk);
var Yu = {
    exports: {}
};
(function(t, n) {
    n = t.exports = r, n.getSerialize = e;

    function r(o, i, a, u) {
        return JSON.stringify(o, e(i, u), a)
    }

    function e(o, i) {
        var a = [],
            u = [];
        return i == null && (i = function(s, c) {
                return a[0] === c ? "[Circular ~]" : "[Circular ~." + u.slice(0, a.indexOf(c)).join(".") + "]"
            }),
            function(s, c) {
                if (a.length > 0) {
                    var l = a.indexOf(this);
                    ~l ? a.splice(l + 1) : a.push(this), ~l ? u.splice(l, 1 / 0, s) : u.push(s), ~a.indexOf(c) && (c = i.call(this, s, c))
                } else a.push(c);
                return o == null ? c : o.call(this, s, c)
            }
    }
})(Yu, Yu.exports);
var Ok = Yu.exports;
const jk = F(Ok);

function Ak(t, n) {
    return Sk(t) || Pk(t, n) || E0(t, n) || Ek()
}

function Ek() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Pk(t, n) {
    var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (r != null) {
        var e = [],
            o = !0,
            i = !1,
            a, u;
        try {
            for (r = r.call(t); !(o = (a = r.next()).done) && (e.push(a.value), !(n && e.length === n)); o = !0);
        } catch (s) {
            i = !0, u = s
        } finally {
            try {
                !o && r.return != null && r.return()
            } finally {
                if (i) throw u
            }
        }
        return e
    }
}

function Sk(t) {
    if (Array.isArray(t)) return t
}

function Tk(t) {
    return Ck(t) || Mk(t) || E0(t) || kk()
}

function kk() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function E0(t, n) {
    if (t) {
        if (typeof t == "string") return Xu(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xu(t, n)
    }
}

function Mk(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
}

function Ck(t) {
    if (Array.isArray(t)) return Xu(t)
}

function Xu(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e
}

function Dk(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function P0(t, n) {
    for (var r = 0; r < n.length; r++) {
        var e = n[r];
        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
    }
}

function Nk(t, n, r) {
    return n && P0(t.prototype, n), r && P0(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function Ik(t, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), n && Qu(t, n)
}

function Qu(t, n) {
    return Qu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, e) {
        return r.__proto__ = e, r
    }, Qu(t, n)
}

function Rk(t) {
    var n = $k();
    return function() {
        var r = ni(t),
            e;
        if (n) {
            var o = ni(this).constructor;
            e = Reflect.construct(r, arguments, o)
        } else e = r.apply(this, arguments);
        return Lk(this, e)
    }
}

function Lk(t, n) {
    if (n && (typeof n == "object" || typeof n == "function")) return n;
    if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Ju(t)
}

function Ju(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function $k() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch (t) {
        return !1
    }
}

function ni(t) {
    return ni = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, ni(t)
}
var Or = function(t) {
    Ik(r, t);
    var n = Rk(r);

    function r(e) {
        var o;
        return Dk(this, r), o = n.call(this, e), o.state = o.state || {}, o.getScopedEvents = V5.bind(Ju(o)), o.getEventState = Y5.bind(Ju(o)), o.baseProps = o.getBaseProps(e), o.sharedEventsCache = {}, o.globalEvents = {}, o.prevGlobalEventKeys = [], o.boundGlobalEvents = {}, o
    }
    return Nk(r, [{
        key: "shouldComponentUpdate",
        value: function(e) {
            if (!Gt(this.props, e)) {
                this.baseProps = this.getBaseProps(e);
                var o = this.getExternalMutations(e, this.baseProps);
                this.applyExternalMutations(e, o)
            }
            return !0
        }
    }, {
        key: "componentDidMount",
        value: function() {
            var e = this,
                o = nt(this.globalEvents);
            o.forEach(function(i) {
                return e.addGlobalListener(i)
            }), this.prevGlobalEventKeys = o
        }
    }, {
        key: "componentDidUpdate",
        value: function() {
            var e = this,
                o = nt(this.globalEvents),
                i = No(this.prevGlobalEventKeys, o);
            i.forEach(function(u) {
                return e.removeGlobalListener(u)
            });
            var a = No(o, this.prevGlobalEventKeys);
            a.forEach(function(u) {
                return e.addGlobalListener(u)
            }), this.prevGlobalEventKeys = o
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            var e = this;
            this.prevGlobalEventKeys.forEach(function(o) {
                return e.removeGlobalListener(o)
            })
        }
    }, {
        key: "addGlobalListener",
        value: function(e) {
            var o = this,
                i = function(a) {
                    var u = o.globalEvents[e];
                    return u && u(th(a))
                };
            this.boundGlobalEvents[e] = i, window.addEventListener(Lo(e), i)
        }
    }, {
        key: "removeGlobalListener",
        value: function(e) {
            window.removeEventListener(Lo(e), this.boundGlobalEvents[e])
        }
    }, {
        key: "getAllEvents",
        value: function(e) {
            var o = ["container", "groupComponent"],
                i = pu(e, o);
            return Array.isArray(i) ? Array.isArray(e.events) ? i.concat.apply(i, Tk(e.events)) : i : e.events
        }
    }, {
        key: "applyExternalMutations",
        value: function(e, o) {
            if (!et(o)) {
                var i = e.externalEventMutations.reduce(function(u, s) {
                        return u = Y(s.callback) ? u.concat(s.callback) : u, u
                    }, []),
                    a = i.length ? function() {
                        i.forEach(function(u) {
                            return u()
                        })
                    } : void 0;
                this.setState(o, a)
            }
        }
    }, {
        key: "getExternalMutations",
        value: function(e, o) {
            return et(e.externalEventMutations) ? void 0 : lE(e.externalEventMutations, o, this.state, nt(o))
        }
    }, {
        key: "cacheSharedEvents",
        value: function(e, o, i) {
            this.sharedEventsCache[e] = [o, i]
        }
    }, {
        key: "getCachedSharedEvents",
        value: function(e, o) {
            var i = this.sharedEventsCache[e] || [],
                a = Ak(i, 2),
                u = a[0],
                s = a[1];
            if (u && Gt(o, s)) return u
        }
    }, {
        key: "getBaseProps",
        value: function(e) {
            var o = e.container,
                i = O.Children.toArray(this.props.children),
                a = this.getBasePropsFromChildren(i),
                u = o ? o.props : {};
            return A({}, a, {
                parent: u
            })
        }
    }, {
        key: "getBasePropsFromChildren",
        value: function(e) {
            var o = function(a, u) {
                    if (a.type && Y(a.type.getBaseProps)) {
                        var s = a.props && a.type.getBaseProps(a.props);
                        return s ? [
                            [u, s]
                        ] : null
                    }
                    return null
                },
                i = Un(e, o);
            return wk(i)
        }
    }, {
        key: "getNewChildren",
        value: function(e, o) {
            var i = this,
                a = e.events,
                u = e.eventKey,
                s = function(f, h) {
                    return f.reduce(function(d, y, m) {
                        if (y.props.children) {
                            var g = O.Children.toArray(y.props.children),
                                v = h.slice(m, m + g.length),
                                b = O.cloneElement(y, y.props, s(g, v));
                            return d.concat(b)
                        } else if (h[m] !== "parent" && y.type && Y(y.type.getBaseProps)) {
                            var _ = y.props.name || h[m],
                                w = Array.isArray(a) && a.filter(function(P) {
                                    return P.target === "parent" ? !1 : Array.isArray(P.childName) ? P.childName.indexOf(_) > -1 : P.childName === _ || P.childName === "all"
                                }),
                                j = [_, o, w, jk(i.state[_])],
                                x = i.getCachedSharedEvents(_, j) || {
                                    events: w,
                                    getEvents: function(P, T) {
                                        return i.getScopedEvents(P, T, _, o)
                                    },
                                    getEventState: function(P, T) {
                                        return i.getEventState(P, T, _)
                                    }
                                };
                            return i.cacheSharedEvents(_, x, j), d.concat(O.cloneElement(y, A({
                                key: "events-".concat(_),
                                sharedEvents: x,
                                eventKey: u,
                                name: _
                            }, y.props)))
                        }
                        return d.concat(y)
                    }, [])
                },
                c = nt(o),
                l = O.Children.toArray(e.children);
            return s(l, c)
        }
    }, {
        key: "getContainer",
        value: function(e, o, i) {
            var a = this,
                u = this.getNewChildren(e, o),
                s = Array.isArray(i) && i.filter(function(b) {
                    return b.target === "parent"
                }),
                c = s.length > 0 ? {
                    events: s,
                    getEvents: function(b, _) {
                        return a.getScopedEvents(b, _, null, o)
                    },
                    getEventState: this.getEventState
                } : null,
                l = e.container || e.groupComponent,
                f = l.type && l.type.role,
                h = l.props || {},
                d = K5.bind(this),
                y = c && d({
                    sharedEvents: c
                }, "parent"),
                m = $({}, this.getEventState("parent", "parent"), h, o.parent, {
                    children: u
                }),
                g = $({}, G5(y, "parent", m), h.events);
            this.globalEvents = J5(g);
            var v = Z5(g);
            return f === "container" ? O.cloneElement(l, A({}, m, {
                events: v
            })) : O.cloneElement(l, v, u)
        }
    }, {
        key: "render",
        value: function() {
            var e = this.getAllEvents(this.props);
            return e ? this.getContainer(this.props, this.baseProps, e) : O.cloneElement(this.props.container, {
                children: this.props.children
            })
        }
    }]), r
}(O.Component);
Or.displayName = "VictorySharedEvents", Or.role = "shared-event-wrapper", Or.propTypes = {
    children: p.oneOfType([p.arrayOf(p.node), p.node]),
    container: p.node,
    eventKey: p.oneOfType([p.array, p.func, Jt([$t, H]), p.string]),
    events: p.arrayOf(p.shape({
        childName: p.oneOfType([p.string, p.array]),
        eventHandlers: p.object,
        eventKey: p.oneOfType([p.array, p.func, Jt([$t, H]), p.string]),
        target: p.string
    })),
    externalEventMutations: p.arrayOf(p.shape({
        callback: p.func,
        childName: p.oneOfType([p.string, p.array]),
        eventKey: p.oneOfType([p.array, Jt([$t, H]), p.string]),
        mutation: p.func,
        target: p.oneOfType([p.string, p.array])
    })),
    groupComponent: p.node
}, Or.defaultProps = {
    groupComponent: O.createElement("g", null)
}, Or.contextType = Qe;

function S0(t, n) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        n && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), r.push.apply(r, e)
    }
    return r
}

function Yn(t) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? S0(Object(r), !0).forEach(function(e) {
            zk(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : S0(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function zk(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}
var Uk = function(t) {
        var n = t.pointerWidth,
            r = t.cornerRadius,
            e = t.orientation,
            o = t.width,
            i = t.height,
            a = t.center,
            u = e === "bottom" ? 1 : -1,
            s = t.x + (t.dx || 0),
            c = t.y + (t.dy || 0),
            l = rt(a) && a.x,
            f = rt(a) && a.y,
            h = f + u * (i / 2),
            d = f - u * (i / 2),
            y = l + o / 2,
            m = l - o / 2,
            g = u * (c - h) < 0 ? 0 : t.pointerLength,
            v = e === "bottom" ? "0 0 0" : "0 0 1",
            b = "".concat(r, " ").concat(r, " ").concat(v);
        return "M ".concat(l - n / 2, ", ").concat(h, `
    L `).concat(g ? s : l + n / 2, ", ").concat(g ? c : h, `
    L `).concat(l + n / 2, ", ").concat(h, `
    L `).concat(y - r, ", ").concat(h, `
    A `).concat(b, " ").concat(y, ", ").concat(h - u * r, `
    L `).concat(y, ", ").concat(d + u * r, `
    A `).concat(b, " ").concat(y - r, ", ").concat(d, `
    L `).concat(m + r, ", ").concat(d, `
    A `).concat(b, " ").concat(m, ", ").concat(d + u * r, `
    L `).concat(m, ", ").concat(h - u * r, `
    A `).concat(b, " ").concat(m + r, ", ").concat(h, `
    z`)
    },
    Wk = function(t) {
        var n = t.pointerWidth,
            r = t.cornerRadius,
            e = t.orientation,
            o = t.width,
            i = t.height,
            a = t.center,
            u = e === "left" ? 1 : -1,
            s = t.x + (t.dx || 0),
            c = t.y + (t.dy || 0),
            l = rt(a) && a.x,
            f = rt(a) && a.y,
            h = l - u * (o / 2),
            d = l + u * (o / 2),
            y = f + i / 2,
            m = f - i / 2,
            g = u * (s - h) > 0 ? 0 : t.pointerLength,
            v = e === "left" ? "0 0 0" : "0 0 1",
            b = "".concat(r, " ").concat(r, " ").concat(v);
        return "M ".concat(h, ", ").concat(f - n / 2, `
    L `).concat(g ? s : h, ", ").concat(g ? c : f + n / 2, `
    L `).concat(h, ", ").concat(f + n / 2, `
    L `).concat(h, ", ").concat(y - r, `
    A `).concat(b, " ").concat(h + u * r, ", ").concat(y, `
    L `).concat(d - u * r, ", ").concat(y, `
    A `).concat(b, " ").concat(d, ", ").concat(y - r, `
    L `).concat(d, ", ").concat(m + r, `
    A `).concat(b, " ").concat(d - u * r, ", ").concat(m, `
    L `).concat(h + u * r, ", ").concat(m, `
    A `).concat(b, " ").concat(h, ", ").concat(m + r, `
    z`)
    },
    Fk = function(t) {
        var n = t.orientation || "top";
        return n === "left" || n === "right" ? Wk(t) : Uk(t)
    },
    Bk = function(t) {
        var n = L(t.id, t),
            r = Xt(t.style, t);
        return A({}, t, {
            id: n,
            style: r
        })
    },
    Hk = {
        pathComponent: O.createElement(L5, null),
        role: "presentation",
        shapeRendering: "auto"
    },
    T0 = function(t) {
        t = Bk(Yn(Yn({}, Hk), t));
        var n = qn(t);
        return O.cloneElement(t.pathComponent, Yn(Yn(Yn({}, t.events), n), {}, {
            style: t.style,
            d: Fk(t),
            className: t.className,
            shapeRendering: t.shapeRendering,
            role: t.role,
            transform: t.transform,
            clipPath: t.clipPath
        }))
    };
T0.propTypes = Yn(Yn({}, yr.primitiveProps), {}, {
    center: p.shape({
        x: p.number,
        y: p.number
    }),
    cornerRadius: p.number,
    datum: p.object,
    dx: p.number,
    dy: p.number,
    height: p.number,
    orientation: p.oneOf(["top", "bottom", "left", "right"]),
    pathComponent: p.element,
    pointerLength: p.number,
    pointerWidth: p.number,
    width: p.number,
    x: p.number,
    y: p.number
});
const qk = T0;

function Kk(t) {
    return Xk(t) || Yk(t) || Gk(t) || Vk()
}

function Vk() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Gk(t, n) {
    if (t) {
        if (typeof t == "string") return Zu(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zu(t, n)
    }
}

function Yk(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
}

function Xk(t) {
    if (Array.isArray(t)) return Zu(t)
}

function Zu(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e
}

function Qk(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function k0(t, n) {
    for (var r = 0; r < n.length; r++) {
        var e = n[r];
        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
    }
}

function Jk(t, n, r) {
    return n && k0(t.prototype, n), r && k0(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function Zk(t, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), n && ts(t, n)
}

function ts(t, n) {
    return ts = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, e) {
        return r.__proto__ = e, r
    }, ts(t, n)
}

function tM(t) {
    var n = eM();
    return function() {
        var r = ri(t),
            e;
        if (n) {
            var o = ri(this).constructor;
            e = Reflect.construct(r, arguments, o)
        } else e = r.apply(this, arguments);
        return nM(this, e)
    }
}

function nM(t, n) {
    if (n && (typeof n == "object" || typeof n == "function")) return n;
    if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return rM(t)
}

function rM(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function eM() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch (t) {
        return !1
    }
}

function ri(t) {
    return ri = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, ri(t)
}
var oM = {
        cornerRadius: 5,
        pointerLength: 10,
        pointerWidth: 10
    },
    jr = function(t) {
        Zk(r, t);
        var n = tM(r);

        function r(e) {
            var o;
            return Qk(this, r), o = n.call(this, e), o.id = e.id === void 0 ? ra("tooltip-") : e.id, o
        }
        return Jk(r, [{
            key: "getDefaultOrientation",
            value: function(e) {
                var o = e.datum,
                    i = e.horizontal,
                    a = e.polar;
                if (!a) {
                    var u = i ? "right" : "top",
                        s = i ? "left" : "bottom";
                    return o && o.y < 0 ? s : u
                }
                return this.getPolarOrientation(e, o)
            }
        }, {
            key: "getPolarOrientation",
            value: function(e, o) {
                var i = ue(e, o),
                    a = e.labelPlacement || "vertical";
                return a === " vertical" ? this.getVerticalOrientations(i) : a === "parallel" ? i < 90 || i > 270 ? "right" : "left" : i > 180 ? "bottom" : "top"
            }
        }, {
            key: "getVerticalOrientations",
            value: function(e) {
                return e < 45 || e > 315 ? "right" : e >= 45 && e <= 135 ? "top" : e > 135 && e < 225 ? "left" : "bottom"
            }
        }, {
            key: "getStyles",
            value: function(e) {
                var o = e.theme || su.grayscale,
                    i = o && o.tooltip && o.tooltip.style ? o.tooltip.style : {},
                    a = Array.isArray(e.style) ? e.style.map(function(f) {
                        return $({}, f, i)
                    }) : $({}, e.style, i),
                    u = o && o.tooltip && o.tooltip.flyoutStyle ? o.tooltip.flyoutStyle : {},
                    s = e.flyoutStyle ? $({}, e.flyoutStyle, u) : u,
                    c = Array.isArray(a) ? a.map(function(f) {
                        return Xt(f, e)
                    }) : Xt(a, e),
                    l = Xt(s, A({}, e, {
                        style: c
                    }));
                return {
                    style: c,
                    flyoutStyle: l
                }
            }
        }, {
            key: "getEvaluatedProps",
            value: function(e) {
                var o = e.cornerRadius,
                    i = e.centerOffset,
                    a = e.dx,
                    u = e.dy,
                    s = L(e.active, e),
                    c = L(e.text, A({}, e, {
                        active: s
                    })),
                    l = this.getStyles(A({}, e, {
                        active: s,
                        text: c
                    })),
                    f = l.style,
                    h = l.flyoutStyle,
                    d = L(e.orientation, A({}, e, {
                        active: s,
                        text: c,
                        style: f,
                        flyoutStyle: h
                    })) || this.getDefaultOrientation(e),
                    y = L(e.flyoutPadding, A({}, e, {
                        active: s,
                        text: c,
                        style: f,
                        flyoutStyle: h,
                        orientation: d
                    })) || this.getLabelPadding(f),
                    m = Yt({
                        padding: y
                    }),
                    g = L(e.pointerWidth, A({}, e, {
                        active: s,
                        text: c,
                        style: f,
                        flyoutStyle: h,
                        orientation: d
                    })),
                    v = L(e.pointerLength, A({}, e, {
                        active: s,
                        text: c,
                        style: f,
                        flyoutStyle: h,
                        orientation: d
                    })),
                    b = Ja(c, f),
                    _ = this.getDimensions(A({}, e, {
                        style: f,
                        flyoutStyle: h,
                        active: s,
                        text: c,
                        orientation: d,
                        flyoutPadding: m,
                        pointerWidth: g,
                        pointerLength: v
                    }), b),
                    w = _.flyoutHeight,
                    j = _.flyoutWidth,
                    x = A({}, e, {
                        active: s,
                        text: c,
                        style: f,
                        flyoutStyle: h,
                        orientation: d,
                        flyoutHeight: w,
                        flyoutWidth: j,
                        flyoutPadding: m,
                        pointerWidth: g,
                        pointerLength: v
                    }),
                    P = rt(i) && i.x !== void 0 ? L(i.x, x) : 0,
                    T = rt(i) && i.y !== void 0 ? L(i.y, x) : 0;
                return A({}, x, {
                    centerOffset: {
                        x: P,
                        y: T
                    },
                    dx: a !== void 0 ? L(a, x) : 0,
                    dy: u !== void 0 ? L(u, x) : 0,
                    cornerRadius: L(o, x)
                })
            }
        }, {
            key: "getCalculatedValues",
            value: function(e) {
                var o = e.style,
                    i = e.text,
                    a = e.flyoutStyle,
                    u = e.flyoutHeight,
                    s = e.flyoutWidth,
                    c = Ja(i, o),
                    l = {
                        height: u,
                        width: s
                    },
                    f = this.getFlyoutCenter(e, l),
                    h = this.getTransform(e);
                return {
                    style: o,
                    flyoutStyle: a,
                    labelSize: c,
                    flyoutDimensions: l,
                    flyoutCenter: f,
                    transform: h
                }
            }
        }, {
            key: "getTransform",
            value: function(e) {
                var o = e.x,
                    i = e.y,
                    a = e.style,
                    u = a || {},
                    s = u.angle || e.angle || this.getDefaultAngle(e);
                return s ? "rotate(".concat(s, " ").concat(o, " ").concat(i, ")") : void 0
            }
        }, {
            key: "getDefaultAngle",
            value: function(e) {
                var o = e.polar,
                    i = e.labelPlacement,
                    a = e.orientation,
                    u = e.datum;
                if (!o || !i || i === "vertical") return 0;
                var s = ue(e, u),
                    c = s > 90 && s < 180 || s > 270 ? 1 : -1,
                    l = i === "perpendicular" ? 0 : 90,
                    f;
                return s === 0 || s === 180 ? f = a === "top" && s === 180 ? 270 : 90 : s > 0 && s < 180 ? f = 90 - s : s > 180 && s < 360 && (f = 270 - s), f + c * l
            }
        }, {
            key: "constrainTooltip",
            value: function(e, o, i) {
                var a = e.x,
                    u = e.y,
                    s = i.width,
                    c = i.height,
                    l = {
                        x: [0, o.width],
                        y: [0, o.height]
                    },
                    f = {
                        x: [a - s / 2, a + s / 2],
                        y: [u - c / 2, u + c / 2]
                    },
                    h = {
                        x: [f.x[0] < l.x[0] ? l.x[0] - f.x[0] : 0, f.x[1] > l.x[1] ? f.x[1] - l.x[1] : 0],
                        y: [f.y[0] < l.y[0] ? l.y[0] - f.y[0] : 0, f.y[1] > l.y[1] ? f.y[1] - l.y[1] : 0]
                    };
                return {
                    x: Math.round(a + h.x[0] - h.x[1]),
                    y: Math.round(u + h.y[0] - h.y[1])
                }
            }
        }, {
            key: "getFlyoutCenter",
            value: function(e, o) {
                var i = e.x,
                    a = e.y,
                    u = e.dx,
                    s = e.dy,
                    c = e.pointerLength,
                    l = e.orientation,
                    f = e.constrainToVisibleArea,
                    h = e.centerOffset,
                    d = o.height,
                    y = o.width,
                    m = l === "left" ? -1 : 1,
                    g = l === "bottom" ? -1 : 1,
                    v = {
                        x: l === "left" || l === "right" ? i + m * (c + y / 2 + m * u) : i + u,
                        y: l === "top" || l === "bottom" ? a - g * (c + d / 2 - g * s) : a + s
                    },
                    b = {
                        x: rt(e.center) && e.center.x !== void 0 ? e.center.x : v.x,
                        y: rt(e.center) && e.center.y !== void 0 ? e.center.y : v.y
                    },
                    _ = {
                        x: b.x + h.x,
                        y: b.y + h.y
                    };
                return f ? this.constrainTooltip(_, e, o) : _
            }
        }, {
            key: "getLabelPadding",
            value: function(e) {
                if (!e) return 0;
                var o = Array.isArray(e) ? e.map(function(i) {
                    return i.padding
                }) : [e.padding];
                return Math.max.apply(Math, Kk(o).concat([0]))
            }
        }, {
            key: "getDimensions",
            value: function(e, o) {
                var i = e.orientation,
                    a = e.pointerLength,
                    u = e.pointerWidth,
                    s = e.flyoutHeight,
                    c = e.flyoutWidth,
                    l = e.flyoutPadding,
                    f = L(e.cornerRadius, e),
                    h = function() {
                        var y = o.height + l.top + l.bottom,
                            m = i === "top" || i === "bottom" ? 2 * f : 2 * f + u;
                        return Math.max(m, y)
                    },
                    d = function() {
                        var y = o.width + l.left + l.right,
                            m = i === "left" || i === "right" ? 2 * f + a : 2 * f;
                        return Math.max(m, y)
                    };
                return {
                    flyoutHeight: s ? L(s, e) : h(),
                    flyoutWidth: c ? L(c, e) : d()
                }
            }
        }, {
            key: "getLabelProps",
            value: function(e, o) {
                var i = o.flyoutCenter,
                    a = o.style,
                    u = o.labelSize,
                    s = o.dy,
                    c = s === void 0 ? 0 : s,
                    l = o.dx,
                    f = l === void 0 ? 0 : l,
                    h = e.text,
                    d = e.datum,
                    y = e.activePoints,
                    m = e.labelComponent,
                    g = e.index,
                    v = e.flyoutPadding,
                    b = (Array.isArray(a) && a.length ? a[0].textAnchor : a.textAnchor) || "middle",
                    _ = function() {
                        if (!b || b === "middle") return i.x;
                        var w = b === "end" ? -1 : 1;
                        return i.x - w * (u.width / 2)
                    };
                return $({}, m.props, {
                    key: "".concat(this.id, "-label-").concat(g),
                    text: h,
                    datum: d,
                    activePoints: y,
                    textAnchor: b,
                    dy: c,
                    dx: f,
                    style: a,
                    x: _() + (v.left - v.right) / 2,
                    y: i.y + (v.top - v.bottom) / 2,
                    verticalAnchor: "middle",
                    angle: a.angle
                })
            }
        }, {
            key: "getPointerOrientation",
            value: function(e, o, i) {
                var a = {
                        bottom: o.y + i.height / 2,
                        top: o.y - i.height / 2,
                        left: o.x - i.width / 2,
                        right: o.x + i.width / 2
                    },
                    u = [{
                        side: "top",
                        val: a.top > e.y ? a.top - e.y : -1
                    }, {
                        side: "bottom",
                        val: a.bottom < e.y ? e.y - a.bottom : -1
                    }, {
                        side: "right",
                        val: a.right < e.x ? e.x - a.right : -1
                    }, {
                        side: "left",
                        val: a.left > e.x ? a.left - e.x : -1
                    }];
                return Hi(u, "val", "desc")[0].side
            }
        }, {
            key: "getFlyoutProps",
            value: function(e, o) {
                var i = o.flyoutDimensions,
                    a = o.flyoutStyle,
                    u = o.flyoutCenter,
                    s = e.x,
                    c = e.y,
                    l = e.dx,
                    f = e.dy,
                    h = e.datum,
                    d = e.activePoints,
                    y = e.index,
                    m = e.pointerLength,
                    g = e.pointerWidth,
                    v = e.cornerRadius,
                    b = e.events,
                    _ = e.flyoutComponent,
                    w = L(e.pointerOrientation, e);
                return $({}, _.props, {
                    x: s,
                    y: c,
                    dx: l,
                    dy: f,
                    datum: h,
                    activePoints: d,
                    index: y,
                    pointerLength: m,
                    pointerWidth: g,
                    cornerRadius: v,
                    events: b,
                    orientation: w || this.getPointerOrientation({
                        x: s,
                        y: c
                    }, u, i),
                    key: "".concat(this.id, "-tooltip-").concat(y),
                    width: i.width,
                    height: i.height,
                    style: a,
                    center: u
                })
            }
        }, {
            key: "renderTooltip",
            value: function(e) {
                var o = L(e.active, e),
                    i = e.renderInPortal;
                if (!o) return i ? O.createElement(vn, null, null) : null;
                var a = this.getEvaluatedProps(e),
                    u = a.flyoutComponent,
                    s = a.labelComponent,
                    c = a.groupComponent,
                    l = this.getCalculatedValues(a),
                    f = [O.cloneElement(u, this.getFlyoutProps(a, l)), O.cloneElement(s, this.getLabelProps(a, l))],
                    h = O.cloneElement(c, {
                        role: "presentation",
                        transform: l.transform
                    }, f);
                return i ? O.createElement(vn, null, h) : h
            }
        }, {
            key: "render",
            value: function() {
                var e = ur(this.props, oM, "tooltip");
                return this.renderTooltip(e)
            }
        }]), r
    }(O.Component);
jr.displayName = "VictoryTooltip", jr.role = "tooltip", jr.propTypes = {
    activateData: p.bool,
    active: p.oneOfType([p.bool, p.func]),
    activePoints: p.array,
    angle: p.number,
    center: p.shape({
        x: H,
        y: H
    }),
    centerOffset: p.shape({
        x: p.oneOfType([p.number, p.func]),
        y: p.oneOfType([p.number, p.func])
    }),
    constrainToVisibleArea: p.bool,
    cornerRadius: p.oneOfType([H, p.func]),
    data: p.array,
    datum: p.object,
    dx: p.oneOfType([p.number, p.func]),
    dy: p.oneOfType([p.number, p.func]),
    events: p.object,
    flyoutComponent: p.element,
    flyoutHeight: p.oneOfType([H, p.func]),
    flyoutPadding: p.oneOfType([p.func, p.number, p.shape({
        top: p.number,
        bottom: p.number,
        left: p.number,
        right: p.number
    })]),
    flyoutStyle: p.object,
    flyoutWidth: p.oneOfType([H, p.func]),
    groupComponent: p.element,
    height: p.number,
    horizontal: p.bool,
    id: p.oneOfType([p.number, p.string]),
    index: p.oneOfType([p.number, p.string]),
    labelComponent: p.element,
    orientation: p.oneOfType([p.oneOf(["top", "bottom", "left", "right"]), p.func]),
    pointerLength: p.oneOfType([H, p.func]),
    pointerOrientation: p.oneOfType([p.oneOf(["top", "bottom", "left", "right"]), p.func]),
    pointerWidth: p.oneOfType([H, p.func]),
    polar: p.bool,
    renderInPortal: p.bool,
    scale: p.shape({
        x: Zt,
        y: Zt
    }),
    style: p.oneOfType([p.object, p.array]),
    text: p.oneOfType([p.string, p.number, p.func, p.array]),
    theme: p.object,
    width: p.number,
    x: p.number,
    y: p.number
}, jr.defaultProps = {
    active: !1,
    renderInPortal: !0,
    labelComponent: O.createElement(dr, null),
    flyoutComponent: O.createElement(qk, null),
    groupComponent: O.createElement("g", null)
}, jr.defaultEvents = function(t) {
    var n = t.activateData ? [{
            target: "labels",
            mutation: function() {
                return {
                    active: !0
                }
            }
        }, {
            target: "data",
            mutation: function() {
                return {
                    active: !0
                }
            }
        }] : [{
            target: "labels",
            mutation: function() {
                return {
                    active: !0
                }
            }
        }],
        r = t.activateData ? [{
            target: "labels",
            mutation: function() {
                return {
                    active: void 0
                }
            }
        }, {
            target: "data",
            mutation: function() {
                return {
                    active: void 0
                }
            }
        }] : [{
            target: "labels",
            mutation: function() {
                return {
                    active: void 0
                }
            }
        }];
    return [{
        target: "data",
        eventHandlers: {
            onMouseOver: function() {
                return n
            },
            onFocus: function() {
                return n
            },
            onTouchStart: function() {
                return n
            },
            onMouseOut: function() {
                return r
            },
            onBlur: function() {
                return r
            },
            onTouchEnd: function() {
                return r
            }
        }
    }]
};
var M0 = {},
    C0 = {
        exports: {}
    };
(function(t, n) {
    (function(r, e) {
        t.exports = e()
    })(Sr, function() {
        var r = Math.pow(2, -52),
            e = new Uint32Array(512),
            o = function(g) {
                var v = g.length >> 1;
                if (v > 0 && typeof g[0] != "number") throw new Error("Expected coords to contain numbers.");
                this.coords = g;
                var b = Math.max(2 * v - 5, 0);
                this._triangles = new Uint32Array(b * 3), this._halfedges = new Int32Array(b * 3), this._hashSize = Math.ceil(Math.sqrt(v)), this._hullPrev = new Uint32Array(v), this._hullNext = new Uint32Array(v), this._hullTri = new Uint32Array(v), this._hullHash = new Int32Array(this._hashSize).fill(-1), this._ids = new Uint32Array(v), this._dists = new Float64Array(v), this.update()
            };
        o.from = function(g, v, b) {
            v === void 0 && (v = y), b === void 0 && (b = m);
            for (var _ = g.length, w = new Float64Array(_ * 2), j = 0; j < _; j++) {
                var x = g[j];
                w[2 * j] = v(x), w[2 * j + 1] = b(x)
            }
            return new o(w)
        }, o.prototype.update = function() {
            for (var g = this, v = g.coords, b = g._hullPrev, _ = g._hullNext, w = g._hullTri, j = g._hullHash, x = v.length >> 1, P = 1 / 0, T = 1 / 0, C = -1 / 0, I = -1 / 0, k = 0; k < x; k++) {
                var N = v[2 * k],
                    M = v[2 * k + 1];
                N < P && (P = N), M < T && (T = M), N > C && (C = N), M > I && (I = M), this._ids[k] = k
            }
            for (var R = (P + C) / 2, Q = (T + I) / 2, G = 1 / 0, q, B, K, Pt = 0; Pt < x; Pt++) {
                var en = a(R, Q, v[2 * Pt], v[2 * Pt + 1]);
                en < G && (q = Pt, G = en)
            }
            var St = v[2 * q],
                Rt = v[2 * q + 1];
            G = 1 / 0;
            for (var Tt = 0; Tt < x; Tt++)
                if (Tt !== q) {
                    var yt = a(St, Rt, v[2 * Tt], v[2 * Tt + 1]);
                    yt < G && yt > 0 && (B = Tt, G = yt)
                }
            for (var kt = v[2 * B], Mt = v[2 * B + 1], on = 1 / 0, D = 0; D < x; D++)
                if (!(D === q || D === B)) {
                    var z = l(St, Rt, kt, Mt, v[2 * D], v[2 * D + 1]);
                    z < on && (K = D, on = z)
                }
            var W = v[2 * K],
                S = v[2 * K + 1];
            if (on === 1 / 0) {
                for (var ot = 0; ot < x; ot++) this._dists[ot] = v[2 * ot] - v[0] || v[2 * ot + 1] - v[1];
                h(this._ids, this._dists, 0, x - 1);
                for (var X = new Uint32Array(x), ft = 0, lt = 0, Ut = -1 / 0; lt < x; lt++) {
                    var Xn = this._ids[lt];
                    this._dists[Xn] > Ut && (X[ft++] = Xn, Ut = this._dists[Xn])
                }
                this.hull = X.subarray(0, ft), this.triangles = new Uint32Array(0), this.halfedges = new Uint32Array(0);
                return
            }
            if (s(St, Rt, kt, Mt, W, S)) {
                var B0 = B,
                    H0 = kt,
                    q0 = Mt;
                B = K, kt = W, Mt = S, K = B0, W = H0, S = q0
            }
            var _e = f(St, Rt, kt, Mt, W, S);
            this._cx = _e.x, this._cy = _e.y;
            for (var Er = 0; Er < x; Er++) this._dists[Er] = a(v[2 * Er], v[2 * Er + 1], _e.x, _e.y);
            h(this._ids, this._dists, 0, x - 1), this._hullStart = q;
            var Pr = 3;
            _[q] = b[K] = B, _[B] = b[q] = K, _[K] = b[B] = q, w[q] = 0, w[B] = 1, w[K] = 2, j.fill(-1), j[this._hashKey(St, Rt)] = q, j[this._hashKey(kt, Mt)] = B, j[this._hashKey(W, S)] = K, this.trianglesLen = 0, this._addTriangle(q, B, K, -1, -1, -1);
            for (var xe = 0, ss = void 0, cs = void 0; xe < this._ids.length; xe++) {
                var vt = this._ids[xe],
                    kn = v[2 * vt],
                    Mn = v[2 * vt + 1];
                if (!(xe > 0 && Math.abs(kn - ss) <= r && Math.abs(Mn - cs) <= r) && (ss = kn, cs = Mn, !(vt === q || vt === B || vt === K))) {
                    for (var an = 0, ai = 0, K0 = this._hashKey(kn, Mn); ai < this._hashSize && (an = j[(K0 + ai) % this._hashSize], !(an !== -1 && an !== _[an])); ai++);
                    an = b[an];
                    for (var J = an, ht = void 0; ht = _[J], !s(kn, Mn, v[2 * J], v[2 * J + 1], v[2 * ht], v[2 * ht + 1]);)
                        if (J = ht, J === an) {
                            J = -1;
                            break
                        }
                    if (J !== -1) {
                        var Cn = this._addTriangle(J, vt, _[J], -1, -1, w[J]);
                        w[vt] = this._legalize(Cn + 2), w[J] = Cn, Pr++;
                        for (var Wt = _[J]; ht = _[Wt], s(kn, Mn, v[2 * Wt], v[2 * Wt + 1], v[2 * ht], v[2 * ht + 1]);) Cn = this._addTriangle(Wt, vt, ht, w[vt], -1, w[Wt]), w[vt] = this._legalize(Cn + 2), _[Wt] = Wt, Pr--, Wt = ht;
                        if (J === an)
                            for (; ht = b[J], s(kn, Mn, v[2 * ht], v[2 * ht + 1], v[2 * J], v[2 * J + 1]);) Cn = this._addTriangle(ht, vt, J, -1, w[J], w[ht]), this._legalize(Cn + 2), w[ht] = Cn, _[J] = J, Pr--, J = ht;
                        this._hullStart = b[vt] = J, _[J] = b[Wt] = vt, _[vt] = Wt, j[this._hashKey(kn, Mn)] = vt, j[this._hashKey(v[2 * J], v[2 * J + 1])] = J
                    }
                }
            }
            this.hull = new Uint32Array(Pr);
            for (var ui = 0, si = this._hullStart; ui < Pr; ui++) this.hull[ui] = si, si = _[si];
            this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen)
        }, o.prototype._hashKey = function(g, v) {
            return Math.floor(i(g - this._cx, v - this._cy) * this._hashSize) % this._hashSize
        }, o.prototype._legalize = function(g) {
            for (var v = this, b = v._triangles, _ = v._halfedges, w = v.coords, j = 0, x = 0;;) {
                var P = _[g],
                    T = g - g % 3;
                if (x = T + (g + 2) % 3, P === -1) {
                    if (j === 0) break;
                    g = e[--j];
                    continue
                }
                var C = P - P % 3,
                    I = T + (g + 1) % 3,
                    k = C + (P + 2) % 3,
                    N = b[x],
                    M = b[g],
                    R = b[I],
                    Q = b[k],
                    G = c(w[2 * N], w[2 * N + 1], w[2 * M], w[2 * M + 1], w[2 * R], w[2 * R + 1], w[2 * Q], w[2 * Q + 1]);
                if (G) {
                    b[g] = Q, b[P] = N;
                    var q = _[k];
                    if (q === -1) {
                        var B = this._hullStart;
                        do {
                            if (this._hullTri[B] === k) {
                                this._hullTri[B] = g;
                                break
                            }
                            B = this._hullPrev[B]
                        } while (B !== this._hullStart)
                    }
                    this._link(g, q), this._link(P, _[x]), this._link(x, k);
                    var K = C + (P + 1) % 3;
                    j < e.length && (e[j++] = K)
                } else {
                    if (j === 0) break;
                    g = e[--j]
                }
            }
            return x
        }, o.prototype._link = function(g, v) {
            this._halfedges[g] = v, v !== -1 && (this._halfedges[v] = g)
        }, o.prototype._addTriangle = function(g, v, b, _, w, j) {
            var x = this.trianglesLen;
            return this._triangles[x] = g, this._triangles[x + 1] = v, this._triangles[x + 2] = b, this._link(x, _), this._link(x + 1, w), this._link(x + 2, j), this.trianglesLen += 3, x
        };

        function i(g, v) {
            var b = g / (Math.abs(g) + Math.abs(v));
            return (v > 0 ? 3 - b : 1 + b) / 4
        }

        function a(g, v, b, _) {
            var w = g - b,
                j = v - _;
            return w * w + j * j
        }

        function u(g, v, b, _, w, j) {
            var x = (_ - v) * (w - g),
                P = (b - g) * (j - v);
            return Math.abs(x - P) >= 33306690738754716e-32 * Math.abs(x + P) ? x - P : 0
        }

        function s(g, v, b, _, w, j) {
            var x = u(w, j, g, v, b, _) || u(g, v, b, _, w, j) || u(b, _, w, j, g, v);
            return x < 0
        }

        function c(g, v, b, _, w, j, x, P) {
            var T = g - x,
                C = v - P,
                I = b - x,
                k = _ - P,
                N = w - x,
                M = j - P,
                R = T * T + C * C,
                Q = I * I + k * k,
                G = N * N + M * M;
            return T * (k * G - Q * M) - C * (I * G - Q * N) + R * (I * M - k * N) < 0
        }

        function l(g, v, b, _, w, j) {
            var x = b - g,
                P = _ - v,
                T = w - g,
                C = j - v,
                I = x * x + P * P,
                k = T * T + C * C,
                N = .5 / (x * C - P * T),
                M = (C * I - P * k) * N,
                R = (x * k - T * I) * N;
            return M * M + R * R
        }

        function f(g, v, b, _, w, j) {
            var x = b - g,
                P = _ - v,
                T = w - g,
                C = j - v,
                I = x * x + P * P,
                k = T * T + C * C,
                N = .5 / (x * C - P * T),
                M = g + (C * I - P * k) * N,
                R = v + (x * k - T * I) * N;
            return {
                x: M,
                y: R
            }
        }

        function h(g, v, b, _) {
            if (_ - b <= 20)
                for (var w = b + 1; w <= _; w++) {
                    for (var j = g[w], x = v[j], P = w - 1; P >= b && v[g[P]] > x;) g[P + 1] = g[P--];
                    g[P + 1] = j
                } else {
                    var T = b + _ >> 1,
                        C = b + 1,
                        I = _;
                    d(g, T, C), v[g[b]] > v[g[_]] && d(g, b, _), v[g[C]] > v[g[_]] && d(g, C, _), v[g[b]] > v[g[C]] && d(g, b, C);
                    for (var k = g[C], N = v[k];;) {
                        do C++; while (v[g[C]] < N);
                        do I--; while (v[g[I]] > N);
                        if (I < C) break;
                        d(g, C, I)
                    }
                    g[b + 1] = g[I], g[I] = k, _ - C + 1 >= I - b ? (h(g, v, C, _), h(g, v, b, I - 1)) : (h(g, v, b, I - 1), h(g, v, C, _))
                }
        }

        function d(g, v, b) {
            var _ = g[v];
            g[v] = g[b], g[b] = _
        }

        function y(g) {
            return g[0]
        }

        function m(g) {
            return g[1]
        }
        return o
    })
})(C0);
var iM = C0.exports;
(function(t) {
    t.__esModule = !0, t.default = void 0;
    var n = r(iM);

    function r(c) {
        return c && c.__esModule ? c : {
            default: c
        }
    }

    function e(c) {
        return c[0]
    }

    function o(c) {
        return c[1]
    }

    function i(c) {
        for (var l = c.triangles, f = c.coords, h = 0; h < l.length; h += 3) {
            var d = 2 * l[h],
                y = 2 * l[h + 1],
                m = 2 * l[h + 2],
                g = (f[m] - f[d]) * (f[y + 1] - f[d + 1]) - (f[y] - f[d]) * (f[m + 1] - f[d + 1]);
            if (g > 1e-10) return !1
        }
        return !0
    }

    function a(c, l, f) {
        return [c + Math.sin(c + l) * f, l + Math.cos(c - l) * f]
    }

    function u(c, l, f, h) {
        for (var d = c.length, y = new Float64Array(d * 2), m = 0; m < d; ++m) {
            var g = c[m];
            y[m * 2] = l.call(h, g, m, c), y[m * 2 + 1] = f.call(h, g, m, c)
        }
        return y
    }
    var s = function() {
        function c(f) {
            var h = new n.default(f);
            this.inedges = new Int32Array(f.length / 2), this._hullIndex = new Int32Array(f.length / 2), this.points = h.coords, this._init(h)
        }
        var l = c.prototype;
        return l._init = function(f) {
            var h = f,
                d = this.points;
            if (h.hull && h.hull.length > 2 && i(h)) {
                this.collinear = Int32Array.from({
                    length: d.length / 2
                }, function(Q, G) {
                    return G
                }).sort(function(Q, G) {
                    return d[2 * Q] - d[2 * G] || d[2 * Q + 1] - d[2 * G + 1]
                });
                for (var y = this.collinear[0], m = this.collinear[this.collinear.length - 1], g = [d[2 * y], d[2 * y + 1], d[2 * m], d[2 * m + 1]], v = 1e-8 * Math.sqrt(Math.pow(g[3] - g[1], 2) + Math.pow(g[2] - g[0], 2)), b = 0, _ = d.length / 2; b < _; ++b) {
                    var w = a(d[2 * b], d[2 * b + 1], v);
                    d[2 * b] = w[0], d[2 * b + 1] = w[1]
                }
                f = new n.default(d)
            }
            for (var j = this.halfedges = f.halfedges, x = this.hull = f.hull, P = this.triangles = f.triangles, T = this.inedges.fill(-1), C = this._hullIndex.fill(-1), I = 0, k = j.length; I < k; ++I) {
                var N = P[I % 3 === 2 ? I - 2 : I + 1];
                (j[I] === -1 || T[N] === -1) && (T[N] = I)
            }
            for (var M = 0, R = x.length; M < R; ++M) C[x[M]] = M;
            x.length <= 2 && x.length > 0 && (this.triangles = new Int32Array(3).fill(-1), this.halfedges = new Int32Array(3).fill(-1), this.triangles[0] = x[0], this.triangles[1] = x[1], this.triangles[2] = x[1], T[x[0]] = 1, x.length === 2 && (T[x[1]] = 0))
        }, l.neighbors = function(f) {
            var h = [],
                d = this.inedges,
                y = this.hull,
                m = this._hullIndex,
                g = this.halfedges,
                v = this.triangles,
                b = d[f];
            if (b === -1) return h;
            var _ = b,
                w = -1;
            do {
                if (w = v[_], h.push(w), _ = _ % 3 === 2 ? _ - 2 : _ + 1, v[_] !== f) break;
                if (_ = g[_], _ === -1) {
                    var j = y[(m[f] + 1) % y.length];
                    j !== w && h.push(j);
                    break
                }
            } while (_ !== b);
            return h
        }, l.find = function(f, h, d) {
            if (d === void 0 && (d = 0), f = +f, f !== f || (h = +h, h !== h)) return -1;
            for (var y = d, m;
                (m = this._step(d, f, h)) >= 0 && m !== d && m !== y;) d = m;
            return m
        }, l._step = function(f, h, d) {
            var y = this.inedges,
                m = this.points;
            if (y[f] === -1 || !m.length) return (f + 1) % (m.length >> 1);
            for (var g = f, v = Math.pow(h - m[f * 2], 2) + Math.pow(d - m[f * 2 + 1], 2), w = this.neighbors(f), b = Array.isArray(w), _ = 0, w = b ? w : w[Symbol.iterator]();;) {
                var j;
                if (b) {
                    if (_ >= w.length) break;
                    j = w[_++]
                } else {
                    if (_ = w.next(), _.done) break;
                    j = _.value
                }
                var x = j,
                    P = Math.pow(h - m[x * 2], 2) + Math.pow(d - m[x * 2 + 1], 2);
                P < v && (v = P, g = x)
            }
            return g
        }, c
    }();
    t.default = s, s.from = function(c, l, f, h) {
        return l === void 0 && (l = e), f === void 0 && (f = o), new s(u(c, l, f, h))
    }
})(M0);
const aM = F(M0);

function ve(t) {
    return lM(t) || cM(t) || sM(t) || uM()
}

function uM() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function sM(t, n) {
    if (t) {
        if (typeof t == "string") return ns(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ns(t, n)
    }
}

function cM(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
}

function lM(t) {
    if (Array.isArray(t)) return ns(t)
}

function ns(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e
}
var ei = {
    withinBounds: function(t, n) {
        var r = t.width,
            e = t.height,
            o = t.polar,
            i = t.origin,
            a = t.scale,
            u = Yt(t, "voronoiPadding"),
            s = n.x,
            c = n.y;
        if (o) {
            var l = Math.pow(s - i.x, 2) + Math.pow(c - i.y, 2),
                f = Math.max.apply(Math, ve(a.y.range()));
            return l < Math.pow(f, 2)
        }
        return s >= u.left && s <= r - u.right && c >= u.top && c <= e - u.bottom
    },
    getDatasets: function(t) {
        var n = {
                x: sn(t.domain.x),
                y: sn(t.domain.y)
            },
            r = O.Children.toArray(t.children),
            e = function(a, u, s) {
                var c = s && s.type && s.type.continuous,
                    l = s ? s.props && s.props.style : t.style;
                return a.map(function(f, h) {
                    var d = ea(f),
                        y = d.x,
                        m = d.y,
                        g = d.y0,
                        v = d.x0,
                        b = (Number(y) + Number(v)) / 2,
                        _ = (Number(m) + Number(g)) / 2;
                    return A({
                        _voronoiX: t.voronoiDimension === "y" ? n.x : b,
                        _voronoiY: t.voronoiDimension === "x" ? n.y : _,
                        eventKey: h,
                        childName: u,
                        continuous: c,
                        style: l
                    }, f)
                })
            };
        if (t.data) return e(t.data);
        var o = function(a) {
                var u = nn(a);
                return Array.isArray(u) && u.length > 0 ? u : void 0
            },
            i = function(a, u) {
                var s = a.props || {},
                    c = s.name || u,
                    l = t.voronoiBlacklist || [],
                    f = l.filter(ex),
                    h = l.filter(gl),
                    d = h.some(function(g) {
                        return g.test(c)
                    });
                if (!_u(a) || ar(f, c) || d) return null;
                var y = a.type && Y(a.type.getData) ? a.type.getData : o,
                    m = y(a.props);
                return m ? e(m, c, a) : null
            };
        return Un(r, i, t)
    },
    findPoints: function(t, n) {
        return t.filter(function(r) {
            return n._voronoiX === r._voronoiX && n._voronoiY === r._voronoiY
        })
    },
    withinRadius: function(t, n, r) {
        if (!t) return !1;
        if (!r) return !0;
        var e = n.x,
            o = n.y,
            i = Math.pow(e - t[0], 2) + Math.pow(o - t[1], 2);
        return i < Math.pow(r, 2)
    },
    getVoronoiPoints: function(t, n) {
        var r = this.getDatasets(t),
            e = r.map(function(s) {
                var c = to(t, s),
                    l = c.x,
                    f = c.y;
                return [l, f]
            }),
            o = aM.from(e),
            i = o.find(n.x, n.y),
            a = this.withinRadius(e[i], n, t.radius),
            u = a ? this.findPoints(r, r[i]) : [];
        return {
            points: u,
            index: i
        }
    },
    getActiveMutations: function(t, n) {
        var r = n.childName,
            e = n.continuous,
            o = t.activateData,
            i = t.activateLabels,
            a = t.labels;
        if (!o && !i) return [];
        var u = o ? ["data"] : [],
            s = a && !i ? u : u.concat("labels");
        return et(s) ? [] : s.map(function(c) {
            var l = e === !0 && c === "data" ? "all" : n.eventKey;
            return {
                childName: r,
                eventKey: l,
                target: c,
                mutation: function() {
                    return {
                        active: !0
                    }
                }
            }
        })
    },
    getInactiveMutations: function(t, n) {
        var r = n.childName,
            e = n.continuous,
            o = t.activateData,
            i = t.activateLabels,
            a = t.labels;
        if (!o && !i) return [];
        var u = o ? ["data"] : [],
            s = a && !i ? u : u.concat("labels");
        return et(s) ? [] : s.map(function(c) {
            var l = e && c === "data" ? "all" : n.eventKey;
            return {
                childName: r,
                eventKey: l,
                target: c,
                mutation: function() {
                    return null
                }
            }
        })
    },
    getParentMutation: function(t, n, r, e) {
        return [{
            target: "parent",
            eventKey: "parent",
            mutation: function() {
                return {
                    activePoints: t,
                    mousePosition: n,
                    parentSVG: r,
                    vIndex: e
                }
            }
        }]
    },
    onActivated: function(t, n) {
        Y(t.onActivated) && t.onActivated(n, t)
    },
    onDeactivated: function(t, n) {
        Y(t.onDeactivated) && t.onDeactivated(n, t)
    },
    onMouseLeave: function(t, n) {
        var r = this,
            e, o = n.activePoints || [];
        this.onDeactivated(n, o);
        var i = o.length ? o.map(function(a) {
            return r.getInactiveMutations(n, a)
        }) : [];
        return (e = this.getParentMutation([])).concat.apply(e, ve(i))
    },
    onMouseMove: function(t, n) {
        var r = this,
            e = n.activePoints || [],
            o = n.parentSVG || f0(t),
            i = tT(t, o);
        if (!this.withinBounds(n, i)) {
            var a;
            this.onDeactivated(n, e);
            var u = e.length ? e.map(function(m) {
                return r.getInactiveMutations(n, m)
            }) : [];
            return (a = this.getParentMutation([], i, o)).concat.apply(a, ve(u))
        }
        var s = this.getVoronoiPoints(n, i),
            c = s.points,
            l = c === void 0 ? [] : c,
            f = s.index,
            h = this.getParentMutation(l, i, o, f);
        if (e.length && Gt(l, e)) return h;
        this.onActivated(n, l), this.onDeactivated(n, e);
        var d = l.length ? l.map(function(m) {
                return r.getActiveMutations(n, m)
            }) : [],
            y = e.length ? e.map(function(m) {
                return r.getInactiveMutations(n, m)
            }) : [];
        return h.concat.apply(h, ve(y).concat(ve(d)))
    }
};
const oi = {
    onMouseLeave: ei.onMouseLeave.bind(ei),
    onMouseMove: bk(ei.onMouseMove.bind(ei), 32, {
        leading: !0,
        trailing: !1
    })
};
var fM = ["childName", "eventKey", "style", "continuous"];

function hM(t) {
    return vM(t) || yM(t) || dM(t) || pM()
}

function pM() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function dM(t, n) {
    if (t) {
        if (typeof t == "string") return rs(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rs(t, n)
    }
}

function yM(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
}

function vM(t) {
    if (Array.isArray(t)) return rs(t)
}

function rs(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e
}

function gM(t, n) {
    if (t == null) return {};
    var r = mM(t, n),
        e, o;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (o = 0; o < i.length; o++) e = i[o], !(n.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(t, e) && (r[e] = t[e])
    }
    return r
}

function mM(t, n) {
    if (t == null) return {};
    var r = {},
        e = Object.keys(t),
        o, i;
    for (i = 0; i < e.length; i++) o = e[i], !(n.indexOf(o) >= 0) && (r[o] = t[o]);
    return r
}

function D0(t, n) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        n && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), r.push.apply(r, e)
    }
    return r
}

function Ar(t) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? D0(Object(r), !0).forEach(function(e) {
            bM(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : D0(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function bM(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}

function _M(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function N0(t, n) {
    for (var r = 0; r < n.length; r++) {
        var e = n[r];
        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
    }
}

function xM(t, n, r) {
    return n && N0(t.prototype, n), r && N0(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function wM(t, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), n && es(t, n)
}

function es(t, n) {
    return es = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, e) {
        return r.__proto__ = e, r
    }, es(t, n)
}

function OM(t) {
    var n = EM();
    return function() {
        var r = ii(t),
            e;
        if (n) {
            var o = ii(this).constructor;
            e = Reflect.construct(r, arguments, o)
        } else e = r.apply(this, arguments);
        return jM(this, e)
    }
}

function jM(t, n) {
    if (n && (typeof n == "object" || typeof n == "function")) return n;
    if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return AM(t)
}

function AM(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function EM() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch (t) {
        return !1
    }
}

function ii(t) {
    return ii = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, ii(t)
}
var PM = function(t) {
    var n;
    return n = function(r) {
        wM(o, r);
        var e = OM(o);

        function o() {
            return _M(this, o), e.apply(this, arguments)
        }
        return xM(o, [{
            key: "getDimension",
            value: function(i) {
                var a = i.horizontal,
                    u = i.voronoiDimension;
                return !a || !u ? u : u === "x" ? "y" : "x"
            }
        }, {
            key: "getPoint",
            value: function(i) {
                var a = ["_x", "_x1", "_x0", "_y", "_y1", "_y0"];
                return Yr(i, a)
            }
        }, {
            key: "getLabelPosition",
            value: function(i, a, u) {
                var s = i.mousePosition,
                    c = i.mouseFollowTooltips,
                    l = this.getDimension(i),
                    f = this.getPoint(u[0]),
                    h = to(i, f),
                    d = c ? s : void 0;
                if (!l || u.length < 2) return Ar(Ar({}, h), {}, {
                    center: $({}, a.center, d)
                });
                var y = l === "y" ? s.x : h.x,
                    m = l === "x" ? s.y : h.y;
                return d = c ? s : {
                    x: y,
                    y: m
                }, {
                    x: y,
                    y: m,
                    center: $({}, a.center, d)
                }
            }
        }, {
            key: "getStyle",
            value: function(i, a, u) {
                var s = i.labels,
                    c = i.labelComponent,
                    l = i.theme,
                    f = c.props || {},
                    h = l && l.voronoi && l.voronoi.style ? l.voronoi.style : {},
                    d = u === "flyout" ? f.flyoutStyle : f.style;
                return a.reduce(function(y, m, g) {
                    var v = $({}, f, {
                            datum: m,
                            active: !0
                        }),
                        b = Y(s) ? s(v) : void 0,
                        _ = b !== void 0 ? "".concat(b).split(`
`) : [],
                        w = m.style && m.style[u] || {},
                        j = Array.isArray(d) ? d[g] : d,
                        x = Xt($({}, j, w, h[u]), v),
                        P = _.length ? _.map(function() {
                            return x
                        }) : [x];
                    return y = y.concat(P), y
                }, [])
            }
        }, {
            key: "getDefaultLabelProps",
            value: function(i, a) {
                var u = i.voronoiDimension,
                    s = i.horizontal,
                    c = i.mouseFollowTooltips,
                    l = this.getPoint(a[0]),
                    f = u && a.length > 1,
                    h = l._y1 !== void 0 ? l._y1 : l._y,
                    d = h < 0 ? "left" : "right",
                    y = h < 0 ? "bottom" : "top",
                    m = s ? d : y,
                    g = c ? void 0 : m;
                return {
                    orientation: g,
                    pointerLength: f ? 0 : void 0,
                    constrainToVisibleArea: f || c ? !0 : void 0
                }
            }
        }, {
            key: "getLabelProps",
            value: function(i, a) {
                var u = i.labels,
                    s = i.scale,
                    c = i.labelComponent,
                    l = i.theme,
                    f = i.width,
                    h = i.height,
                    d = c.props || {},
                    y = a.reduce(function(x, P) {
                        var T = $({}, d, {
                                datum: P,
                                active: !0
                            }),
                            C = Y(u) ? u(T) : null;
                        return C == null || (x = x.concat("".concat(C).split(`
`))), x
                    }, []),
                    m = a[0],
                    g = m.childName,
                    v = m.eventKey;
                m.style, m.continuous;
                var b = gM(m, fM),
                    _ = i.name === g ? g : "".concat(i.name, "-").concat(g),
                    w = $({
                        key: "".concat(_, "-").concat(v, "-voronoi-tooltip"),
                        id: "".concat(_, "-").concat(v, "-voronoi-tooltip"),
                        active: !0,
                        renderInPortal: !1,
                        activePoints: a,
                        datum: b,
                        scale: s,
                        theme: l
                    }, d, {
                        text: y,
                        width: f,
                        height: h,
                        style: this.getStyle(i, a, "labels"),
                        flyoutStyle: this.getStyle(i, a, "flyout")[0]
                    }, this.getDefaultLabelProps(i, a)),
                    j = this.getLabelPosition(i, w, a);
                return $({}, j, w)
            }
        }, {
            key: "getTooltip",
            value: function(i) {
                var a = i.labels,
                    u = i.activePoints,
                    s = i.labelComponent;
                if (!a) return null;
                if (Array.isArray(u) && u.length) {
                    var c = this.getLabelProps(i, u),
                        l = c.text,
                        f = Array.isArray(l) ? l.filter(Boolean).length : l;
                    return f ? O.cloneElement(s, c) : null
                }
                return null
            }
        }, {
            key: "getChildren",
            value: function(i) {
                return [].concat(hM(O.Children.toArray(i.children)), [this.getTooltip(i)])
            }
        }]), o
    }(t), n.displayName = "VictoryVoronoiContainer", n.propTypes = Ar(Ar({}, tn.propTypes), {}, {
        activateData: p.bool,
        activateLabels: p.bool,
        disable: p.bool,
        labelComponent: p.element,
        labels: p.func,
        mouseFollowTooltips: p.bool,
        onActivated: p.func,
        onDeactivated: p.func,
        radius: p.number,
        voronoiBlacklist: p.arrayOf(p.oneOfType([p.string, ww])),
        voronoiDimension: p.oneOf(["x", "y"]),
        voronoiPadding: p.oneOfType([p.number, p.shape({
            top: p.number,
            bottom: p.number,
            left: p.number,
            right: p.number
        })])
    }), n.defaultProps = Ar(Ar({}, tn.defaultProps), {}, {
        activateData: !0,
        activateLabels: !0,
        labelComponent: O.createElement(jr, null),
        voronoiPadding: 5
    }), n.defaultEvents = function(r) {
        return [{
            target: "parent",
            eventHandlers: {
                onMouseLeave: function(e, o) {
                    return r.disable ? {} : oi.onMouseLeave(e, o)
                },
                onTouchCancel: function(e, o) {
                    return r.disable ? {} : oi.onMouseLeave(e, o)
                },
                onMouseMove: function(e, o) {
                    return r.disable ? {} : oi.onMouseMove(e, o)
                },
                onTouchMove: function(e, o) {
                    return r.disable ? {} : oi.onMouseMove(e, o)
                }
            }
        }, {
            target: "data",
            eventHandlers: r.disable ? {} : {
                onMouseOver: function() {
                    return null
                },
                onMouseOut: function() {
                    return null
                },
                onMouseMove: function() {
                    return null
                }
            }
        }]
    }, n
};
const SM = PM(tn);

function ge(t) {
    return MM(t) || kM(t) || I0(t) || TM()
}

function TM() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function kM(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
}

function MM(t) {
    if (Array.isArray(t)) return os(t)
}

function CM(t, n) {
    return IM(t) || NM(t, n) || I0(t, n) || DM()
}

function DM() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function I0(t, n) {
    if (t) {
        if (typeof t == "string") return os(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return os(t, n)
    }
}

function os(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e
}

function NM(t, n) {
    var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (r != null) {
        var e = [],
            o = !0,
            i = !1,
            a, u;
        try {
            for (r = r.call(t); !(o = (a = r.next()).done) && (e.push(a.value), !(n && e.length === n)); o = !0);
        } catch (s) {
            i = !0, u = s
        } finally {
            try {
                !o && r.return != null && r.return()
            } finally {
                if (i) throw u
            }
        }
        return e
    }
}

function IM(t) {
    if (Array.isArray(t)) return t
}

function R0(t, n) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        n && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), r.push.apply(r, e)
    }
    return r
}

function L0(t) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? R0(Object(r), !0).forEach(function(e) {
            RM(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : R0(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function RM(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}
var $0 = {
    width: 450,
    height: 300,
    padding: 50,
    offset: 0
};

function z0(t, n) {
    var r = "group";
    t = ur(t, $0, r);
    var e = IT(t.theme, t.style, r),
        o = t,
        i = o.offset,
        a = o.colorScale,
        u = o.color,
        s = o.polar,
        c = o.horizontal,
        l = t.categories || UT(t, n, null),
        f = t.datasets || kT(t, null),
        h = {
            x: y0(A({}, t, {
                categories: l
            }), "x", n),
            y: y0(A({}, t, {
                categories: l
            }), "y", n)
        },
        d = t.range || {
            x: Qt(t, "x"),
            y: Qt(t, "y")
        },
        y = {
            x: za(t, "x") || v0(t, "x"),
            y: za(t, "y") || v0(t, "y")
        },
        m = {
            x: y.x.domain(h.x).range(t.horizontal ? d.y : d.x),
            y: y.y.domain(h.y).range(t.horizontal ? d.x : d.y)
        },
        g = s ? t.origin : Ll(t),
        v = Yt(t);
    return {
        datasets: f,
        categories: l,
        range: d,
        domain: h,
        horizontal: c,
        scale: m,
        style: e,
        colorScale: a,
        color: u,
        offset: i,
        origin: g,
        padding: v
    }
}
var LM = function(t) {
    var n = t.children,
        r = O.Children.toArray(n).map(function(e) {
            return L0(L0({}, e), {}, {
                props: Xr(e.props, ["sharedEvents"])
            })
        });
    return t.children = r, t
};

function $M(t) {
    var n = LM(t),
        r = O.useState(n),
        e = CM(r, 2),
        o = e[0],
        i = e[1];
    return O.useEffect(function() {
        Gt(n, o) || i(n)
    }, [o, i, n]), O.useMemo(function() {
        return z0(o, o.children)
    }, [o])
}

function zM(t, n, r) {
    if (!t.offset) return 0;
    var e = $l(n, t.horizontal),
        o = r.domain[n],
        i = r.range[e],
        a = Math.max.apply(Math, ge(o)) - Math.min.apply(Math, ge(o)),
        u = Math.max.apply(Math, ge(i)) - Math.min.apply(Math, ge(i));
    return a / u * t.offset
}

function UM(t, n, r, e) {
    var o = e === "stack" ? n.datasets[0].length : n.datasets.length,
        i = (o - 1) / 2,
        a = zM(t, "x", n);
    return (r - i) * a
}

function WM(t, n, r, e) {
    var o = e === "stack" ? n.datasets[0].length : n.datasets.length,
        i = (o - 1) / 2,
        a = FM(t, n);
    return (r - i) * a
}

function FM(t, n) {
    var r = n.range,
        e = Math.abs(r.x[1] - r.x[0]),
        o = Math.max.apply(Math, ge(r.y));
    return t.offset / (2 * Math.PI * o) * e
}

function BM(t, n, r) {
    if (t.labels) return Math.floor(n.length / 2) === r ? t.labels : void 0
}

function HM(t, n) {
    var r = n.categories,
        e = n.domain,
        o = n.range,
        i = n.scale,
        a = n.horizontal,
        u = n.origin,
        s = n.padding,
        c = t.width,
        l = t.height,
        f = t.theme,
        h = t.polar;
    return {
        height: l,
        width: c,
        theme: f,
        polar: h,
        origin: u,
        categories: r,
        domain: e,
        range: o,
        scale: i,
        horizontal: a,
        padding: s,
        standalone: !1
    }
}

function qM(t, n) {
    var r = n.type && n.type.role,
        e = n.props.colorScale || t.colorScale;
    if (!(r !== "group" && r !== "stack")) return t.theme && t.theme.group ? e || t.theme.group.colorScale : e
}

function KM(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
        r = arguments.length > 2 ? arguments[2] : void 0,
        e = t.data || t.y ? nn(t) : n,
        o = r || 0;
    return e.map(function(i) {
        var a = i._x instanceof Date ? new Date(i._x.getTime() + o) : i._x + o;
        return A({}, i, {
            _x1: a
        })
    })
}

function U0(t, n, r) {
    t = ur(t, $0, "stack"), n = n || O.Children.toArray(t.children), r = r || z0(t, n);
    var e = r,
        o = e.datasets,
        i = t,
        a = i.labelComponent,
        u = i.polar,
        s = HM(t, r),
        c = t.name || "group";
    return n.map(function(l, f) {
        var h = l.type && l.type.role,
            d = u ? WM(t, r, f, h) : UM(t, r, f, h),
            y = h === "voronoi" || h === "tooltip" || h === "label" ? l.props.style : RT(l, f, r),
            m = t.labels ? BM(t, o, f) : l.props.labels,
            g = l.props.name || "".concat(c, "-").concat(h, "-").concat(f);
        return O.cloneElement(l, A({
            labels: m,
            style: y,
            key: "".concat(g, "-key-").concat(f),
            name: g,
            data: KM(t, o[f], d),
            colorScale: qM(t, l),
            labelComponent: a || l.props.labelComponent,
            xOffset: d
        }, s))
    })
}

function W0(t, n) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        n && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), r.push.apply(r, e)
    }
    return r
}

function me(t) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? W0(Object(r), !0).forEach(function(e) {
            VM(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : W0(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function VM(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t
}
var GM = {
        width: 450,
        height: 300,
        padding: 50,
        offset: 0
    },
    YM = {
        containerComponent: O.createElement(tn, null),
        groupComponent: O.createElement("g", null),
        samples: 50,
        standalone: !0,
        theme: su.grayscale
    },
    F0 = function(t) {
        var n = be == null ? void 0 : be.role,
            r = WP(),
            e = r.getAnimationProps,
            o = r.setAnimationState,
            i = r.getProps,
            a = O.useMemo(function() {
                return me(me({}, YM), t)
            }, [t]),
            u = i(a),
            s = ur(u, GM, n),
            c = s.eventKey,
            l = s.containerComponent,
            f = s.standalone,
            h = s.groupComponent,
            d = s.externalEventMutations,
            y = s.width,
            m = s.height,
            g = s.theme,
            v = s.polar,
            b = s.horizontal,
            _ = s.name,
            w = O.Children.toArray(s.children),
            j = $M(s),
            x = j.domain,
            P = j.scale,
            T = j.style,
            C = j.origin,
            I = O.useMemo(function() {
                var G = U0(u, w, j);
                return G.map(function(q, B) {
                    var K = A({
                        animate: e(u, q, B)
                    }, q.props);
                    return O.cloneElement(q, K)
                })
            }, [u, w, j, e]),
            k = O.useMemo(function() {
                return f ? {
                    domain: x,
                    scale: P,
                    width: y,
                    height: m,
                    standalone: f,
                    theme: g,
                    style: T.parent,
                    horizontal: b,
                    polar: v,
                    origin: C,
                    name: _
                } : {}
            }, [f, x, P, y, m, g, T, b, v, C, _]),
            N = O.useMemo(function() {
                return qn(a)
            }, [a]),
            M = O.useMemo(function() {
                if (f) {
                    var G = $({}, l.props, k, N);
                    return O.cloneElement(l, G)
                }
                return O.cloneElement(h, N)
            }, [h, f, l, k, N]),
            R = O.useMemo(function() {
                return DT(u)
            }, [u]),
            Q = OP(a);
        return O.useEffect(function() {
            return function() {
                a.animate && o(Q, u)
            }
        }, [o, Q, a, u]), et(R) ? O.cloneElement(M, M.props, I) : O.createElement(Or, {
            container: M,
            eventKey: c,
            events: R,
            externalEventMutations: d
        }, I)
    };
F0.propTypes = me(me(me({}, yr.baseProps), yr.dataProps), {}, {
    children: p.oneOfType([p.arrayOf(p.node), p.node]),
    horizontal: p.bool,
    offset: p.number
});
var XM = {
        role: "group",
        expectedComponents: ["groupComponent", "containerComponent", "labelComponent"],
        getChildren: U0
    },
    be = Object.assign(O.memo(F0, Gt), XM);
be.displayName = "VictoryGroup";
const is = ps.clone({
    precision: 9
});
class QM {
    constructor() {
        bn(this, "wagered", 0);
        bn(this, "profit", 0);
        bn(this, "winNum", 0);
        bn(this, "lossNum", 0);
        bn(this, "currencyName", "BTC");
        bn(this, "profits", [0]);
        bn(this, "refreshs", new Set);
        this.clearData = this.clearData.bind(this), li.on("onbet", n => {
            this.currencyName !== n.currencyName && (this.clearData(), this.currencyName = n.currencyName), this.addData(hs(fs({}, n), {
                amount: n.amount.toNumber()
            })), this.refreshs.forEach(r => r())
        })
    }
    clearData() {
        this.wagered = 0, this.profit = 0, this.winNum = 0, this.lossNum = 0, this.profits = [0], this.refreshs.forEach(n => n())
    }
    addData({
        amount: n,
        odds: r
    }) {
        this.wagered = new is(this.wagered).add(n).toNumber();
        let e = new is(r).sub(1).mul(n);
        this.profit = new is(this.profit).add(e).toNumber(), r >= 1 ? this.winNum++ : this.lossNum++, this.profits = this.profits.concat(this.profit)
    }
}
const as = new QM;

function JM() {
    const t = J0();
    return it.useEffect(() => (as.refreshs.add(t), () => {
        as.refreshs.delete(t)
    }), [t]), as
}
const ZM = it.memo(function() {
        const {
            t
        } = Tr(), n = it.useRef(null), [r, e] = it.useState(null), o = JM();

        function i() {
            const a = o.profits,
                u = a.length,
                s = Math.max(1, Math.floor(u / 50)),
                c = s * 50;
            return s > 1 ? a.slice(0, c).filter((l, f, h) => f % s === 0 || f === h.length - 1).concat(a.slice(c)) : a.filter((l, f) => f % s === 0 || f === u - 1)
        }
        return E.jsxs("div", {
            ref: n,
            className: `${iC} m-item`,
            children: [E.jsxs("div", {
                className: "title flex-center",
                children: [E.jsx("span", {
                    children: t("Bet")
                }), E.jsx("button", {
                    className: "title-btn",
                    onClick: o.clearData,
                    children: E.jsx(we, {
                        name: "Clear"
                    })
                })]
            }), E.jsxs("div", {
                className: "chart-cont",
                children: [E.jsxs("div", {
                    className: "item-wrap wagered",
                    children: [E.jsx("div", {
                        className: "item-label",
                        children: t("Wagered")
                    }), E.jsx(_n.CoinFormat, {
                        name: o.currencyName,
                        amount: o.wagered,
                        icon: !0,
                        showName: !1
                    })]
                }), E.jsxs("div", {
                    className: "item-wrap profit",
                    children: [E.jsx("div", {
                        className: "item-label",
                        children: t("Profit")
                    }), E.jsx(_n.CoinFormat, {
                        className: o.profit >= 0 ? "cl-success" : "cl-require",
                        name: o.currencyName,
                        amount: o.profit,
                        icon: !0,
                        showName: !1
                    })]
                })]
            }), E.jsxs("div", {
                className: "chart-wrap",
                children: [typeof r == "number" && E.jsx("div", {
                    className: "tooltip-wrap",
                    children: E.jsx(_n.CoinFormat, {
                        className: r >= 0 ? "cl-success" : "cl-require",
                        name: o.currencyName,
                        amount: r,
                        icon: !0
                    })
                }), E.jsxs(be, {
                    padding: {
                        top: 20,
                        left: 0,
                        right: 0,
                        bottom: 0
                    },
                    domainPadding: {
                        x: 0,
                        y: 5
                    },
                    animate: !0,
                    data: i(),
                    containerComponent: E.jsx(SM, {
                        voronoiBlacklist: ["positive"],
                        voronoiDimension: "x",
                        labels: ({
                            datum: a
                        }) => `${a._y.toFixed(9)}`,
                        onActivated: a => {
                            o.profits.length > 1 && e(a[0]._y)
                        },
                        events: {
                            onMouseOut: () => e(null)
                        },
                        labelComponent: E.jsx(tC, {})
                    }),
                    children: [E.jsx(j0, {
                        name: "positive",
                        style: nC,
                        interpolation: "catmullRom",
                        groupComponent: E.jsx(Vn, {
                            clipPathComponent: E.jsx(eC, {})
                        })
                    }), E.jsx(j0, {
                        name: "negative",
                        style: rC,
                        interpolation: "catmullRom",
                        groupComponent: E.jsx(Vn, {
                            clipPathComponent: E.jsx(oC, {})
                        })
                    })]
                })]
            }), E.jsxs("div", {
                className: "bet-wrap",
                children: [E.jsxs("div", {
                    className: "bet-item win",
                    children: [E.jsx("span", {
                        className: "txt ttc",
                        children: t("WIN").toLocaleLowerCase()
                    }), E.jsx("span", {
                        className: `num ${o.winNum>0&&"cl-success"}`,
                        children: o.winNum
                    })]
                }), E.jsxs("div", {
                    className: "bet-item lose",
                    children: [E.jsx("span", {
                        className: "txt ttc",
                        children: t("LOSE").toLocaleLowerCase()
                    }), E.jsx("span", {
                        className: `num ${o.lossNum<0&&"cl-require"}`,
                        children: o.lossNum
                    })]
                })]
            })]
        })
    }),
    tC = function(t) {
        const {
            x: n,
            y: r,
            scale: e
        } = t;
        return E.jsxs("g", {
            children: [E.jsx("line", {
                x1: n,
                y1: r,
                x2: n,
                y2: e.y(0),
                strokeDasharray: "5, 5",
                stroke: "#f5f6fa"
            }), E.jsx("circle", {
                cx: n,
                cy: r,
                r: 6,
                fill: "#f5f6fa"
            })]
        })
    },
    nC = {
        data: {
            stroke: "#3BC117",
            strokeWidth: 5,
            fill: "#3BC117",
            fillOpacity: .7,
            strokeLinecap: "round"
        }
    },
    rC = {
        data: {
            stroke: "#ed6300",
            strokeWidth: 5,
            fill: "#ed6300",
            fillOpacity: .7,
            strokeLinecap: "round"
        }
    },
    eC = t => E.jsx("defs", {
        children: E.jsx("clipPath", {
            id: t.clipId,
            children: E.jsx("rect", {
                x: "0",
                y: "0",
                width: "100%",
                height: t.scale.y(0)
            })
        })
    }),
    oC = t => E.jsx("defs", {
        children: E.jsx("clipPath", {
            id: t.clipId,
            children: E.jsx("rect", {
                x: "0",
                y: t.scale.y(0),
                width: "100%",
                height: "100%"
            })
        })
    }),
    iC = "l1f8vefn",
    aC = "/assets/mark.6392952e.png",
    uC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAC2BAMAAADQJEUEAAAAHlBMVEUAAAD/k37/k3//k37/lID/moT/k33/k37/k37/kn3o8PUlAAAACXRSTlMAzVh5NRPxpJAL3w5XAAAA/UlEQVRo3u3aMUsDQRDF8WfOGEsFRdIlhcV1KbSwOwko6YKgYKd219lY2B0WActTuPD/tulT5UESUrxfP+zswg7D7Moyfp/IUsBSllegkqMEJnZE42fl79w/3YhNTG/kOYVGljv4l2UIrSw1dLteo4Q/u2o18jxdKyIiIiIiIiLWzOXpL9qRLEf2+KKEzsvrF6j8CDsrWQbwIc/4qlLEgZv+yFPApSwze27/DdgzTOxC08nyYJe/Xk0jz3GmnhGxZ8X5rSz9Ie3cfS/j0204eZPjxI4YAGdeia6hkuWeC5meFQfq0W3te3bn8LKHPxt+xAwYuberlWfB19buygpBJFZpOY73qgAAAABJRU5ErkJggg==",
    sC = "/assets/bg2.ed66a388.png",
    cC = "/assets/bg.152efc0a.png",
    lC = "/assets/bg3.ebf7ac75.png",
    fC = "/assets/bg2_w.41626594.png",
    hC = "/assets/bg_w.d4484454.png",
    pC = "/assets/bg3_w.3c28e7f7.png",
    dC = "/assets/light.e1342458.png",
    yC = "/assets/coin.acb03e90.png",
    rn = {
        status_mark: aC,
        status_coin: li.assets("/wallet/bcdcoin2.png"),
        status_bubble: uC,
        status_bg2: sC,
        status_bg3: lC,
        status_bg: cC,
        status_bg2_w: fC,
        status_bg3_w: pC,
        status_bg_w: hC,
        status_light: dC,
        coin: yC
    };

function vC({
    className: t
}) {
    const n = Oe();
    return E.jsxs("div", {
        className: je(us, t),
        children: [E.jsx("img", {
            src: n ? rn.status_bg : rn.status_bg_w,
            className: "bg",
            alt: ""
        }), E.jsx("div", {
            className: "bubble"
        })]
    })
}

function gC({
    className: t,
    isCrypto: n
}) {
    const r = Oe();
    return E.jsxs("div", {
        className: je(us, t),
        children: [E.jsx("img", {
            src: r ? rn.status_bg2 : rn.status_bg2_w,
            className: "bg",
            alt: ""
        }), E.jsx("div", {
            className: "bubble"
        }), E.jsx("img", {
            src: n ? rn.status_coin : rn.coin,
            className: "coin",
            alt: ""
        }), E.jsx("img", {
            src: rn.status_mark,
            className: "mark",
            alt: ""
        })]
    })
}

function mC({
    className: t
}) {
    const n = Oe();
    return E.jsxs("div", {
        className: je(us, _C, t),
        children: [E.jsx("div", {
            className: "light-bg",
            children: E.jsx("img", {
                className: "light",
                src: rn.status_light,
                alt: ""
            })
        }), E.jsx("img", {
            src: n ? rn.status_bg3 : rn.status_bg3_w,
            className: "bg",
            alt: ""
        })]
    })
}
const bC = O.memo(function(t) {
        const n = Number(t.bonusAmount),
            r = Number(t.bonusThreshold);
        return n === 0 ? E.jsx(vC, {
            className: t.className
        }) : n >= r ? E.jsx(mC, {
            className: t.className
        }) : E.jsx(gC, {
            className: t.className,
            isCrypto: t.isCrypto
        })
    }),
    us = "s1aaubbf",
    _C = "sgy4i3",
    xC = "/assets/progress_bar_w.d7afa9ee.png",
    wC = "/assets/progress_bar.5e3cf46e.png",
    OC = it.memo(function({
        percent: t
    }) {
        const n = Oe();
        return E.jsx("div", {
            className: je(jC, "progress"),
            children: E.jsxs("div", {
                className: "progress-cont",
                style: {
                    width: t + "%"
                },
                children: [E.jsx("img", {
                    className: "bar",
                    src: n ? wC : xC,
                    alt: ""
                }), E.jsx("img", {
                    className: "coin",
                    src: li.assets("/wallet/bcdprogress_coin.png"),
                    alt: ""
                })]
            })
        })
    }),
    jC = "s19i3use",
    AC = it.memo(function() {
        const {
            t
        } = Tr(), n = ds(), [r, e] = it.useState([{
            label: t("Bet"),
            value: !0,
            disabled: !n
        }, {
            label: t("Wager contest"),
            value: !1,
            disabled: !1
        }, {
            label: t("{{bcd}} Treasure Box", {
                bcd: ys.platformCoin
            }),
            value: !1,
            disabled: !1
        }]);
        return E.jsxs(E.Fragment, {
            children: [E.jsx(EC, {
                options: r,
                setOptions: e
            }), r[0].value && E.jsx(ZM, {}), r[1].value && E.jsx(SC, {}), r[2].value && E.jsx(PC, {})]
        })
    }),
    EC = it.memo(function({
        options: t,
        setOptions: n
    }) {
        const r = ds(),
            [e, o] = it.useState(!0),
            i = Z0(() => {
                o(!0)
            }),
            a = {
                from: {
                    y: -10,
                    opacity: 0
                },
                enter: {
                    y: 0,
                    opacity: 1
                }
            };

        function u(c, l) {
            const f = t[l];
            f.disabled || (r ? (t.map((h, d) => {
                h.disabled || (d === l ? h.value = !0 : h.value = !1)
            }), n([...t]), o(!0)) : (f.value = !c, n([...t])))
        }

        function s() {
            let c = t.filter(l => l.value);
            return c.length > 1 ? c.map(l => l.label).join("/") : c[0].label
        }
        return E.jsxs("div", {
            className: DC,
            ref: i,
            children: [E.jsxs("div", {
                className: `trigger flex-center m-item ${e?"fold":"unfold"}`,
                onClick: () => o(!e),
                children: [E.jsx("div", {
                    className: "current",
                    children: s()
                }), E.jsx(we, {
                    name: "Arrow"
                })]
            }), E.jsx(tp, {
                children: !e && E.jsx(np.div, {
                    className: "options m-item",
                    initial: a.from,
                    animate: a.enter,
                    children: t.map((c, l) => E.jsxs("div", {
                        className: `item ${c.disabled?"disabled":""}`,
                        onClick: () => u(c.value, l),
                        children: [E.jsx("div", {
                            className: "checkbox",
                            children: c.value && E.jsx(we, {
                                name: "Check"
                            })
                        }), E.jsx("div", {
                            className: "item-value",
                            children: c.label
                        })]
                    }, l))
                })
            })]
        })
    }),
    PC = it.memo(function() {
        const {
            t
        } = Tr(), n = rp(), r = ep(), [e, o] = it.useState(null), i = new ps(r.bonusAmount).div(r.bonusThreshold).mul(100).toFixed(2);
        it.useEffect(() => {
            vs.initFn().then(() => {
                o({
                    startTime: Date.now(),
                    endTime: Date.now() + 1e3 * 60
                })
            });
            let s = setInterval(() => {
                vs.initFn().then(() => {
                    o({
                        startTime: Date.now(),
                        endTime: Date.now() + 1e3 * 60
                    })
                })
            }, 1 * 60 * 1e3);
            return () => {
                clearInterval(s)
            }
        }, []);
        const a = r.currencyName === "BCD",
            u = Number(r.bonusAmount) >= Number(r.bonusThreshold);
        return E.jsxs("div", {
            className: `${CC} m-item`,
            children: [E.jsx("div", {
                className: "title",
                children: t("{{bcd}} Treasure Box", {
                    bcd: ys.platformCoin
                })
            }), e && E.jsxs("div", {
                className: "countdown-box",
                children: [E.jsxs("div", {
                    className: "coin-amount",
                    children: [E.jsx(_n.CoinIcon, {
                        name: "BCD"
                    }), " ", Number(r.bonusAmount).toFixed(2)]
                }), E.jsx(op, {
                    endTime: e.endTime,
                    startTime: e.startTime,
                    className: "circle"
                })]
            }), E.jsx(OC, {
                percent: i
            }), u ? E.jsxs(E.Fragment, {
                children: [E.jsx("div", {
                    className: "claim-tit",
                    children: t("Available to Claim")
                }), E.jsx(ip, {
                    className: "claim-btn",
                    onClick: () => n("#/bonus/dashboard"),
                    type: "conic4",
                    children: t("Claim")
                })]
            }) : E.jsxs("div", {
                className: "claim-desc",
                children: [t("Minimum required to claim:"), "\xA0\xA0", E.jsx(_n.CoinIcon, {
                    name: "BCD"
                }), " ", r.bonusThreshold]
            }), E.jsx(bC, {
                className: "bcd-status",
                isCrypto: a,
                bonusAmount: r.bonusAmount,
                bonusThreshold: r.bonusThreshold
            }), E.jsxs("div", {
                className: "detail",
                onClick: () => n("#/bonus/dashboard"),
                children: [E.jsx("span", {
                    children: t("Bonus Unlock")
                }), E.jsx(we, {
                    name: "Arrow"
                })]
            })]
        })
    }),
    SC = it.memo(function() {
        const {
            t
        } = Tr(), n = gs();
        it.useEffect(() => {
            fi.loadByContestType(n.contestType);
            let o = setInterval(() => {
                fi.loadByContestType(n.contestType)
            }, 1 * 60 * 1e3);
            return () => {
                clearInterval(o)
            }
        }, []);
        const r = n.supportType.map(o => ({
                label: o,
                value: it.memo(TC)
            })),
            e = r.findIndex(o => o.label === n.contestType);
        return r.length == 0 ? null : E.jsxs("div", {
            className: `${MC} m-item`,
            children: [E.jsx("div", {
                className: "title",
                children: t("Wager contest")
            }), E.jsx(ap, {
                className: "contest-tabs",
                value: e,
                tabs: r,
                onChange: o => fi.loadByContestType(r[o].label)
            })]
        })
    });

function TC() {
    const {
        t
    } = Tr(), n = gs(), {
        rank: r,
        wager: e,
        wagerCurrency: o,
        userBonusRate: i,
        activeList: a
    } = n;
    let u = 1;
    r == 0 ? u = i.length : r == 1 ? u = 1 : r <= i.length ? u = r - 1 : u = i.length;
    let s = 0,
        c = null;
    a.length > u - 1 && (c = a[u - 1]), c && (s = c.wager - e);

    function l() {
        if (a.length) {
            let f = a[r - 1];
            return f ? f.totalBonus : 0
        } else return 0
    }
    return E.jsxs(E.Fragment, {
        children: [E.jsxs("div", {
            className: "time_ranking",
            children: [E.jsxs("div", {
                className: "item endtime",
                children: [E.jsxs("div", {
                    className: "item-label",
                    children: [n.contestType, " Contest end in"]
                }), E.jsx(up, {
                    endTime: n.endTime.getTime(),
                    children: ({
                        days: f,
                        hours: h,
                        minutes: d,
                        seconds: y
                    }) => E.jsxs("div", {
                        className: "countdown-wrap",
                        children: [f > 0 && E.jsx("div", {
                            className: "item",
                            children: E.jsx("div", {
                                className: "value",
                                children: kr.numberZeroize(f)
                            })
                        }), E.jsx("div", {
                            className: "item",
                            children: E.jsx("div", {
                                className: "value",
                                children: kr.numberZeroize(h)
                            })
                        }), E.jsx("div", {
                            className: "item",
                            children: E.jsx("div", {
                                className: "value",
                                children: kr.numberZeroize(d)
                            })
                        }), f <= 0 && E.jsx("div", {
                            className: "item",
                            children: E.jsx("div", {
                                className: "value",
                                children: kr.numberZeroize(y)
                            })
                        })]
                    })
                })]
            }), E.jsxs("div", {
                className: "item ranking",
                children: [E.jsx("div", {
                    className: "item-label",
                    children: t("Current Ranking")
                }), E.jsx("div", {
                    className: "item-value",
                    children: kC(r)
                })]
            })]
        }), E.jsx("div", {
            className: "target-box",
            children: E.jsxs("div", {
                className: "target flex-center",
                children: [E.jsx("div", {
                    className: "dot"
                }), r !== 1 ? E.jsxs(E.Fragment, {
                    children: [E.jsx("div", {
                        children: E.jsxs(sp, {
                            wagerCurrency: o,
                            i18nKey: "trans.mainpage.live.stats",
                            children: ["Wager ", E.jsx(_n.CoinFormat, {
                                name: o,
                                amount: s,
                                showName: !1
                            }), " more ", {
                                wagerCurrency: o
                            }, " to Reach"]
                        })
                    }), E.jsxs("div", {
                        className: "spec",
                        children: [t("TOP"), " ", u]
                    })]
                }) : E.jsx("div", {
                    children: t("You are the 1st now! Well done!")
                })]
            })
        }), E.jsxs("div", {
            className: "summary",
            children: [E.jsxs("div", {
                className: "item wagered",
                children: [E.jsx("div", {
                    className: "item-label",
                    children: t("Wagered")
                }), E.jsx(_n.CoinFormat, {
                    name: o,
                    amount: e,
                    icon: !0,
                    showName: !1
                })]
            }), E.jsxs("div", {
                className: "item prize",
                children: [E.jsx("div", {
                    className: "item-label",
                    children: t("Prize")
                }), E.jsx(_n.CoinFormat, {
                    name: o,
                    amount: l(),
                    icon: !0,
                    showName: !1
                })]
            })]
        })]
    })
}

function kC(t) {
    return t == 0 || t > 50 ? "50th+" : kr.numberOrdinal(t)
}
const MC = "l160r2gp",
    CC = "l1iuoog5",
    DC = "l4oo9w7";
export {
    AC as
    default
};