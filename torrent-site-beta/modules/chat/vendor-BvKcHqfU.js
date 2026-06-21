var Ve = Object.defineProperty,
    De = Object.defineProperties;
var Ie = Object.getOwnPropertyDescriptors;
var ce = Object.getOwnPropertySymbols;
var Fe = Object.prototype.hasOwnProperty,
    Be = Object.prototype.propertyIsEnumerable;
var ae = (e, t, n) => t in e ? Ve(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    de = (e, t) => {
        for (var n in t || (t = {})) Fe.call(t, n) && ae(e, n, t[n]);
        if (ce)
            for (var n of ce(t)) Be.call(t, n) && ae(e, n, t[n]);
        return e
    },
    he = (e, t) => De(e, Ie(t));
const d = {
    context: void 0,
    registry: void 0
};

function q(e) {
    d.context = e
}
const Ue = (e, t) => e === t,
    Y = Symbol("solid-proxy"),
    Ge = Symbol("solid-track"),
    Q = {
        equals: Ue
    };
let Ae = Ne;
const M = 1,
    H = 2,
    Ce = {
        owned: null,
        cleanups: null,
        context: null,
        owner: null
    },
    ne = {};
var g = null;
let u = null,
    _e = null,
    w = null,
    E = null,
    C = null,
    Z = 0;

function K(e, t) {
    const n = w,
        s = g,
        i = e.length === 0,
        r = t === void 0 ? s : t,
        o = i ? Ce : {
            owned: null,
            cleanups: null,
            context: r ? r.context : null,
            owner: r
        },
        l = i ? e : () => e(() => P(() => I(o)));
    g = o, w = null;
    try {
        return j(l, !0)
    } finally {
        w = n, g = s
    }
}

function D(e, t) {
    t = t ? Object.assign({}, Q, t) : Q;
    const n = {
            value: e,
            observers: null,
            observerSlots: null,
            comparator: t.equals || void 0
        },
        s = i => (typeof i == "function" && (u && u.running && u.sources.has(n) ? i = i(n.tValue) : i = i(n.value)), Te(n, i));
    return [ke.bind(n), s]
}

function ge(e, t, n) {
    const s = z(e, t, !0, M);
    R(s)
}

function F(e, t, n) {
    const s = z(e, t, !1, M);
    R(s)
}

function Re(e, t, n) {
    Ae = Je;
    const s = z(e, t, !1, M),
        i = B && fe(B);
    i && (s.suspense = i), (!n || !n.render) && (s.user = !0), C ? C.push(s) : R(s)
}

function T(e, t, n) {
    n = n ? Object.assign({}, Q, n) : Q;
    const s = z(e, t, !0, 0);
    return s.observers = null, s.observerSlots = null, s.comparator = n.equals || void 0, R(s), ke.bind(s)
}

function qe(e) {
    return e && typeof e == "object" && "then" in e
}

function Lt(e, t, n) {
    let s, i, r;
    arguments.length === 2 && typeof t == "object" || arguments.length === 1 ? (s = !0, i = e, r = t || {}) : (s = e, i = t, r = n || {});
    let o = null,
        l = ne,
        c = null,
        a = !1,
        f = !1,
        h = "initialValue" in r,
        y = typeof s == "function" && T(s);
    const m = new Set,
        [x, O] = (r.storage || D)(r.initialValue),
        [N, $] = D(void 0),
        [A, k] = D(void 0, {
            equals: !1
        }),
        [L, v] = D(h ? "ready" : "unresolved");
    if (d.context) {
        c = `${d.context.id}${d.context.count++}`;
        let p;
        r.ssrLoadFrom === "initial" ? l = r.initialValue : d.load && (p = d.load(c)) && (l = p)
    }

    function V(p, b, S, U) {
        return o === p && (o = null, U !== void 0 && (h = !0), (p === l || b === l) && r.onHydrated && queueMicrotask(() => r.onHydrated(U, {
            value: b
        })), l = ne, u && p && a ? (u.promises.delete(p), a = !1, j(() => {
            u.running = !0, ue(b, S)
        }, !1)) : ue(b, S)), b
    }

    function ue(p, b) {
        j(() => {
            b === void 0 && O(() => p), v(b !== void 0 ? "errored" : h ? "ready" : "unresolved"), $(b);
            for (const S of m.keys()) S.decrement();
            m.clear()
        }, !1)
    }

    function ee() {
        const p = B && fe(B),
            b = x(),
            S = N();
        if (S !== void 0 && !o) throw S;
        return w && !w.user && p && ge(() => {
            A(), o && (p.resolved && u && a ? u.promises.add(o) : m.has(p) || (p.increment(), m.add(p)))
        }), b
    }

    function te(p = !0) {
        if (p !== !1 && f) return;
        f = !1;
        const b = y ? y() : s;
        if (a = u && u.running, b == null || b === !1) {
            V(o, P(x));
            return
        }
        u && o && u.promises.delete(o);
        const S = l !== ne ? l : P(() => i(b, {
            value: x(),
            refetching: p
        }));
        return qe(S) ? (o = S, "value" in S ? (S.status === "success" ? V(o, S.value, void 0, b) : V(o, void 0, void 0, b), S) : (f = !0, queueMicrotask(() => f = !1), j(() => {
            v(h ? "refreshing" : "pending"), k()
        }, !1), S.then(U => V(S, U, void 0, b), U => V(S, void 0, je(U), b)))) : (V(o, S, void 0, b), S)
    }
    return Object.defineProperties(ee, {
        state: {
            get: () => L()
        },
        error: {
            get: () => N()
        },
        loading: {
            get() {
                const p = L();
                return p === "pending" || p === "refreshing"
            }
        },
        latest: {
            get() {
                if (!h) return ee();
                const p = N();
                if (p && !o) throw p;
                return x()
            }
        }
    }), y ? ge(() => te(!1)) : te(!1), [ee, {
        refetch: te,
        mutate: O
    }]
}

function jt(e) {
    return j(e, !1)
}

function P(e) {
    if (w === null) return e();
    const t = w;
    w = null;
    try {
        return e()
    } finally {
        w = t
    }
}

function Mt(e) {
    Re(() => P(e))
}

function Ee(e) {
    return g === null || (g.cleanups === null ? g.cleanups = [e] : g.cleanups.push(e)), e
}

function vt() {
    return w
}

function Ke() {
    return g
}

function He(e) {
    if (u && u.running) return e(), u.done;
    const t = w,
        n = g;
    return Promise.resolve().then(() => {
        w = t, g = n;
        let s;
        return B && (s = u || (u = {
            sources: new Set,
            effects: [],
            promises: new Set,
            disposed: new Set,
            queue: new Set,
            running: !0
        }), s.done || (s.done = new Promise(i => s.resolve = i)), s.running = !0), j(e, !1), w = g = null, s ? s.done : void 0
    })
}
const [Xe, ye] = D(!1);

function Vt() {
    return [Xe, He]
}

function Ye(e) {
    C.push.apply(C, e), e.length = 0
}

function Oe(e, t) {
    const n = Symbol("context");
    return {
        id: n,
        Provider: Ze(n),
        defaultValue: e
    }
}

function fe(e) {
    return g && g.context && g.context[e.id] !== void 0 ? g.context[e.id] : e.defaultValue
}

function Pe(e) {
    const t = T(e),
        n = T(() => ie(t()));
    return n.toArray = () => {
        const s = n();
        return Array.isArray(s) ? s : s != null ? [s] : []
    }, n
}
let B;

function Qe() {
    return B || (B = Oe())
}

function ke() {
    const e = u && u.running;
    if (this.sources && (e ? this.tState : this.state))
        if ((e ? this.tState : this.state) === M) R(this);
        else {
            const t = E;
            E = null, j(() => J(this), !1), E = t
        }
    if (w) {
        const t = this.observers ? this.observers.length : 0;
        w.sources ? (w.sources.push(this), w.sourceSlots.push(t)) : (w.sources = [this], w.sourceSlots = [t]), this.observers ? (this.observers.push(w), this.observerSlots.push(w.sources.length - 1)) : (this.observers = [w], this.observerSlots = [w.sources.length - 1])
    }
    return e && u.sources.has(this) ? this.tValue : this.value
}

function Te(e, t, n) {
    let s = u && u.running && u.sources.has(e) ? e.tValue : e.value;
    if (!e.comparator || !e.comparator(s, t)) {
        if (u) {
            const i = u.running;
            (i || !n && u.sources.has(e)) && (u.sources.add(e), e.tValue = t), i || (e.value = t)
        } else e.value = t;
        e.observers && e.observers.length && j(() => {
            for (let i = 0; i < e.observers.length; i += 1) {
                const r = e.observers[i],
                    o = u && u.running;
                o && u.disposed.has(r) || ((o ? !r.tState : !r.state) && (r.pure ? E.push(r) : C.push(r), r.observers && $e(r)), o ? r.tState = M : r.state = M)
            }
            if (E.length > 1e6) throw E = [], new Error
        }, !1)
    }
    return t
}

function R(e) {
    if (!e.fn) return;
    I(e);
    const t = Z;
    we(e, u && u.running && u.sources.has(e) ? e.tValue : e.value, t), u && !u.running && u.sources.has(e) && queueMicrotask(() => {
        j(() => {
            u && (u.running = !0), w = g = e, we(e, e.tValue, t), w = g = null
        }, !1)
    })
}

function we(e, t, n) {
    let s;
    const i = g,
        r = w;
    w = g = e;
    try {
        s = e.fn(t)
    } catch (o) {
        return e.pure && (u && u.running ? (e.tState = M, e.tOwned && e.tOwned.forEach(I), e.tOwned = void 0) : (e.state = M, e.owned && e.owned.forEach(I), e.owned = null)), e.updatedAt = n + 1, Me(o)
    } finally {
        w = r, g = i
    }(!e.updatedAt || e.updatedAt <= n) && (e.updatedAt != null && "observers" in e ? Te(e, s, !0) : u && u.running && e.pure ? (u.sources.add(e), e.tValue = s) : e.value = s, e.updatedAt = n)
}

function z(e, t, n, s = M, i) {
    const r = {
        fn: e,
        state: s,
        updatedAt: null,
        owned: null,
        sources: null,
        sourceSlots: null,
        cleanups: null,
        value: t,
        owner: g,
        context: g ? g.context : null,
        pure: n
    };
    return u && u.running && (r.state = 0, r.tState = s), g === null || g !== Ce && (u && u.running && g.pure ? g.tOwned ? g.tOwned.push(r) : g.tOwned = [r] : g.owned ? g.owned.push(r) : g.owned = [r]), r
}

function W(e) {
    const t = u && u.running;
    if ((t ? e.tState : e.state) === 0) return;
    if ((t ? e.tState : e.state) === H) return J(e);
    if (e.suspense && P(e.suspense.inFallback)) return e.suspense.effects.push(e);
    const n = [e];
    for (;
        (e = e.owner) && (!e.updatedAt || e.updatedAt < Z);) {
        if (t && u.disposed.has(e)) return;
        (t ? e.tState : e.state) && n.push(e)
    }
    for (let s = n.length - 1; s >= 0; s--) {
        if (e = n[s], t) {
            let i = e,
                r = n[s + 1];
            for (;
                (i = i.owner) && i !== r;)
                if (u.disposed.has(i)) return
        }
        if ((t ? e.tState : e.state) === M) R(e);
        else if ((t ? e.tState : e.state) === H) {
            const i = E;
            E = null, j(() => J(e, n[0]), !1), E = i
        }
    }
}

function j(e, t) {
    if (E) return e();
    let n = !1;
    t || (E = []), C ? n = !0 : C = [], Z++;
    try {
        const s = e();
        return We(n), s
    } catch (s) {
        n || (C = null), E = null, Me(s)
    }
}

function We(e) {
    if (E && (Ne(E), E = null), e) return;
    let t;
    if (u) {
        if (!u.promises.size && !u.queue.size) {
            const s = u.sources,
                i = u.disposed;
            C.push.apply(C, u.effects), t = u.resolve;
            for (const r of C) "tState" in r && (r.state = r.tState), delete r.tState;
            u = null, j(() => {
                for (const r of i) I(r);
                for (const r of s) {
                    if (r.value = r.tValue, r.owned)
                        for (let o = 0, l = r.owned.length; o < l; o++) I(r.owned[o]);
                    r.tOwned && (r.owned = r.tOwned), delete r.tValue, delete r.tOwned, r.tState = 0
                }
                ye(!1)
            }, !1)
        } else if (u.running) {
            u.running = !1, u.effects.push.apply(u.effects, C), C = null, ye(!0);
            return
        }
    }
    const n = C;
    C = null, n.length && j(() => Ae(n), !1), t && t()
}

function Ne(e) {
    for (let t = 0; t < e.length; t++) W(e[t])
}

function Je(e) {
    let t, n = 0;
    for (t = 0; t < e.length; t++) {
        const s = e[t];
        s.user ? e[n++] = s : W(s)
    }
    if (d.context) {
        if (d.count) {
            d.effects || (d.effects = []), d.effects.push(...e.slice(0, n));
            return
        } else d.effects && (e = [...d.effects, ...e], n += d.effects.length, delete d.effects);
        q()
    }
    for (t = 0; t < n; t++) W(e[t])
}

function J(e, t) {
    const n = u && u.running;
    n ? e.tState = 0 : e.state = 0;
    for (let s = 0; s < e.sources.length; s += 1) {
        const i = e.sources[s];
        if (i.sources) {
            const r = n ? i.tState : i.state;
            r === M ? i !== t && (!i.updatedAt || i.updatedAt < Z) && W(i) : r === H && J(i, t)
        }
    }
}

function $e(e) {
    const t = u && u.running;
    for (let n = 0; n < e.observers.length; n += 1) {
        const s = e.observers[n];
        (t ? !s.tState : !s.state) && (t ? s.tState = H : s.state = H, s.pure ? E.push(s) : C.push(s), s.observers && $e(s))
    }
}

function I(e) {
    let t;
    if (e.sources)
        for (; e.sources.length;) {
            const n = e.sources.pop(),
                s = e.sourceSlots.pop(),
                i = n.observers;
            if (i && i.length) {
                const r = i.pop(),
                    o = n.observerSlots.pop();
                s < i.length && (r.sourceSlots[o] = s, i[s] = r, n.observerSlots[s] = o)
            }
        }
    if (u && u.running && e.pure) {
        if (e.tOwned) {
            for (t = e.tOwned.length - 1; t >= 0; t--) I(e.tOwned[t]);
            delete e.tOwned
        }
        Le(e, !0)
    } else if (e.owned) {
        for (t = e.owned.length - 1; t >= 0; t--) I(e.owned[t]);
        e.owned = null
    }
    if (e.cleanups) {
        for (t = e.cleanups.length - 1; t >= 0; t--) e.cleanups[t]();
        e.cleanups = null
    }
    u && u.running ? e.tState = 0 : e.state = 0
}

function Le(e, t) {
    if (t || (e.tState = 0, u.disposed.add(e)), e.owned)
        for (let n = 0; n < e.owned.length; n++) Le(e.owned[n])
}

function je(e) {
    return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", {
        cause: e
    })
}

function Me(e, t = g) {
    throw je(e)
}

function ie(e) {
    if (typeof e == "function" && !e.length) return ie(e());
    if (Array.isArray(e)) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
            const s = ie(e[n]);
            Array.isArray(s) ? t.push.apply(t, s) : t.push(s)
        }
        return t
    }
    return e
}

function Ze(e, t) {
    return function(s) {
        let i;
        return F(() => i = P(() => (g.context = he(de({}, g.context), {
            [e]: s.value
        }), Pe(() => s.children))), void 0), i
    }
}
const ze = Symbol("fallback");

function me(e) {
    for (let t = 0; t < e.length; t++) e[t]()
}

function et(e, t, n = {}) {
    let s = [],
        i = [],
        r = [],
        o = 0,
        l = t.length > 1 ? [] : null;
    return Ee(() => me(r)), () => {
        let c = e() || [],
            a, f;
        return c[Ge], P(() => {
            let y = c.length,
                m, x, O, N, $, A, k, L, v;
            if (y === 0) o !== 0 && (me(r), r = [], s = [], i = [], o = 0, l && (l = [])), n.fallback && (s = [ze], i[0] = K(V => (r[0] = V, n.fallback())), o = 1);
            else if (o === 0) {
                for (i = new Array(y), f = 0; f < y; f++) s[f] = c[f], i[f] = K(h);
                o = y
            } else {
                for (O = new Array(y), N = new Array(y), l && ($ = new Array(y)), A = 0, k = Math.min(o, y); A < k && s[A] === c[A]; A++);
                for (k = o - 1, L = y - 1; k >= A && L >= A && s[k] === c[L]; k--, L--) O[L] = i[k], N[L] = r[k], l && ($[L] = l[k]);
                for (m = new Map, x = new Array(L + 1), f = L; f >= A; f--) v = c[f], a = m.get(v), x[f] = a === void 0 ? -1 : a, m.set(v, f);
                for (a = A; a <= k; a++) v = s[a], f = m.get(v), f !== void 0 && f !== -1 ? (O[f] = i[a], N[f] = r[a], l && ($[f] = l[a]), f = x[f], m.set(v, f)) : r[a]();
                for (f = A; f < y; f++) f in O ? (i[f] = O[f], r[f] = N[f], l && (l[f] = $[f], l[f](f))) : i[f] = K(h);
                i = i.slice(0, o = y), s = c.slice(0)
            }
            return i
        });

        function h(y) {
            if (r[f] = y, l) {
                const [m, x] = D(f);
                return l[f] = x, t(c[f], m)
            }
            return t(c[f])
        }
    }
}

function tt(e, t) {
    return P(() => e(t || {}))
}

function X() {
    return !0
}
const re = {
    get(e, t, n) {
        return t === Y ? n : e.get(t)
    },
    has(e, t) {
        return t === Y ? !0 : e.has(t)
    },
    set: X,
    deleteProperty: X,
    getOwnPropertyDescriptor(e, t) {
        return {
            configurable: !0,
            enumerable: !0,
            get() {
                return e.get(t)
            },
            set: X,
            deleteProperty: X
        }
    },
    ownKeys(e) {
        return e.keys()
    }
};

function se(e) {
    return (e = typeof e == "function" ? e() : e) ? e : {}
}

function nt() {
    for (let e = 0, t = this.length; e < t; ++e) {
        const n = this[e]();
        if (n !== void 0) return n
    }
}

function Dt(...e) {
    let t = !1;
    for (let o = 0; o < e.length; o++) {
        const l = e[o];
        t = t || !!l && Y in l, e[o] = typeof l == "function" ? (t = !0, T(l)) : l
    }
    if (t) return new Proxy({
        get(o) {
            for (let l = e.length - 1; l >= 0; l--) {
                const c = se(e[l])[o];
                if (c !== void 0) return c
            }
        },
        has(o) {
            for (let l = e.length - 1; l >= 0; l--)
                if (o in se(e[l])) return !0;
            return !1
        },
        keys() {
            const o = [];
            for (let l = 0; l < e.length; l++) o.push(...Object.keys(se(e[l])));
            return [...new Set(o)]
        }
    }, re);
    const n = {},
        s = Object.create(null);
    for (let o = e.length - 1; o >= 0; o--) {
        const l = e[o];
        if (!l) continue;
        const c = Object.getOwnPropertyNames(l);
        for (let a = c.length - 1; a >= 0; a--) {
            const f = c[a];
            if (f === "__proto__" || f === "constructor") continue;
            const h = Object.getOwnPropertyDescriptor(l, f);
            if (!s[f]) s[f] = h.get ? {
                enumerable: !0,
                configurable: !0,
                get: nt.bind(n[f] = [h.get.bind(l)])
            } : h.value !== void 0 ? h : void 0;
            else {
                const y = n[f];
                y && (h.get ? y.push(h.get.bind(l)) : h.value !== void 0 && y.push(() => h.value))
            }
        }
    }
    const i = {},
        r = Object.keys(s);
    for (let o = r.length - 1; o >= 0; o--) {
        const l = r[o],
            c = s[l];
        c && c.get ? Object.defineProperty(i, l, c) : i[l] = c ? c.value : void 0
    }
    return i
}

function st(e, ...t) {
    if (Y in e) {
        const i = new Set(t.length > 1 ? t.flat() : t[0]),
            r = t.map(o => new Proxy({
                get(l) {
                    return o.includes(l) ? e[l] : void 0
                },
                has(l) {
                    return o.includes(l) && l in e
                },
                keys() {
                    return o.filter(l => l in e)
                }
            }, re));
        return r.push(new Proxy({
            get(o) {
                return i.has(o) ? void 0 : e[o]
            },
            has(o) {
                return i.has(o) ? !1 : o in e
            },
            keys() {
                return Object.keys(e).filter(o => !i.has(o))
            }
        }, re)), r
    }
    const n = {},
        s = t.map(() => ({}));
    for (const i of Object.getOwnPropertyNames(e)) {
        const r = Object.getOwnPropertyDescriptor(e, i),
            o = !r.get && !r.set && r.enumerable && r.writable && r.configurable;
        let l = !1,
            c = 0;
        for (const a of t) a.includes(i) && (l = !0, o ? s[c][i] = r.value : Object.defineProperty(s[c], i, r)), ++c;
        l || (o ? n[i] = r.value : Object.defineProperty(n, i, r))
    }
    return [...s, n]
}
const ve = e => `Stale read from <${e}>.`;

function It(e) {
    const t = "fallback" in e && {
        fallback: () => e.fallback
    };
    return T(et(() => e.each, e.children, t || void 0))
}

function Ft(e) {
    const t = e.keyed,
        n = T(() => e.when, void 0, {
            equals: (s, i) => t ? s === i : !s == !i
        });
    return T(() => {
        const s = n();
        if (s) {
            const i = e.children;
            return typeof i == "function" && i.length > 0 ? P(() => i(t ? s : () => {
                if (!P(n)) throw ve("Show");
                return e.when
            })) : i
        }
        return e.fallback
    }, void 0, void 0)
}

function Bt(e) {
    let t = !1;
    const n = (r, o) => (t ? r[1] === o[1] : !r[1] == !o[1]) && r[2] === o[2],
        s = Pe(() => e.children),
        i = T(() => {
            let r = s();
            Array.isArray(r) || (r = [r]);
            for (let o = 0; o < r.length; o++) {
                const l = r[o].when;
                if (l) return t = !!r[o].keyed, [o, l, r[o]]
            }
            return [-1]
        }, void 0, {
            equals: n
        });
    return T(() => {
        const [r, o, l] = i();
        if (r < 0) return e.fallback;
        const c = l.children;
        return typeof c == "function" && c.length > 0 ? P(() => c(t ? o : () => {
            if (P(i)[0] !== r) throw ve("Match");
            return l.when
        })) : c
    }, void 0, void 0)
}

function Ut(e) {
    return e
}
const it = Oe();

function Gt(e) {
    let t = 0,
        n, s, i, r, o;
    const [l, c] = D(!1), a = Qe(), f = {
        increment: () => {
            ++t === 1 && c(!0)
        },
        decrement: () => {
            --t === 0 && c(!1)
        },
        inFallback: l,
        effects: [],
        resolved: !1
    }, h = Ke();
    if (d.context && d.load) {
        const x = d.context.id + d.context.count;
        let O = d.load(x);
        if (O && (typeof O != "object" || O.status !== "success" ? i = O : d.gather(x)), i && i !== "$$f") {
            const [N, $] = D(void 0, {
                equals: !1
            });
            r = N, i.then(() => {
                if (d.done) return $();
                d.gather(x), q(s), $(), q()
            }, A => {
                o = A, $()
            })
        }
    }
    const y = fe(it);
    y && (n = y.register(f.inFallback));
    let m;
    return Ee(() => m && m()), tt(a.Provider, {
        value: f,
        get children() {
            return T(() => {
                if (o) throw o;
                if (s = d.context, r) return r(), r = void 0;
                s && i === "$$f" && q();
                const x = T(() => e.children);
                return T(O => {
                    const N = f.inFallback(),
                        {
                            showContent: $ = !0,
                            showFallback: A = !0
                        } = n ? n() : {};
                    if ((!N || i && i !== "$$f") && $) return f.resolved = !0, m && m(), m = s = i = void 0, Ye(f.effects), x();
                    if (A) return m ? O : K(k => (m = k, s && (q({
                        id: s.id + "f",
                        count: 0
                    }), s = void 0), e.fallback), h)
                })
            })
        }
    })
}
const rt = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"],
    lt = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...rt]),
    ot = new Set(["innerHTML", "textContent", "innerText", "children"]),
    ft = Object.assign(Object.create(null), {
        className: "class",
        htmlFor: "for"
    }),
    ut = Object.assign(Object.create(null), {
        class: "className",
        formnovalidate: {
            $: "formNoValidate",
            BUTTON: 1,
            INPUT: 1
        },
        ismap: {
            $: "isMap",
            IMG: 1
        },
        nomodule: {
            $: "noModule",
            SCRIPT: 1
        },
        playsinline: {
            $: "playsInline",
            VIDEO: 1
        },
        readonly: {
            $: "readOnly",
            INPUT: 1,
            TEXTAREA: 1
        }
    });

function ct(e, t) {
    const n = ut[e];
    return typeof n == "object" ? n[t] ? n.$ : void 0 : n
}
const at = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]),
    dt = new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]),
    ht = {
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace"
    };

function gt(e, t, n) {
    let s = n.length,
        i = t.length,
        r = s,
        o = 0,
        l = 0,
        c = t[i - 1].nextSibling,
        a = null;
    for (; o < i || l < r;) {
        if (t[o] === n[l]) {
            o++, l++;
            continue
        }
        for (; t[i - 1] === n[r - 1];) i--, r--;
        if (i === o) {
            const f = r < s ? l ? n[l - 1].nextSibling : n[r - l] : c;
            for (; l < r;) e.insertBefore(n[l++], f)
        } else if (r === l)
            for (; o < i;)(!a || !a.has(t[o])) && t[o].remove(), o++;
        else if (t[o] === n[r - 1] && n[l] === t[i - 1]) {
            const f = t[--i].nextSibling;
            e.insertBefore(n[l++], t[o++].nextSibling), e.insertBefore(n[--r], f), t[i] = n[r]
        } else {
            if (!a) {
                a = new Map;
                let h = l;
                for (; h < r;) a.set(n[h], h++)
            }
            const f = a.get(t[o]);
            if (f != null)
                if (l < f && f < r) {
                    let h = o,
                        y = 1,
                        m;
                    for (; ++h < i && h < r && !((m = a.get(t[h])) == null || m !== f + y);) y++;
                    if (y > f - l) {
                        const x = t[o];
                        for (; l < f;) e.insertBefore(n[l++], x)
                    } else e.replaceChild(n[l++], t[o++])
                } else o++;
            else t[o++].remove()
        }
    }
}
const pe = "_$DX_DELEGATE";

function _t(e, t, n, s = {}) {
    let i;
    return K(r => {
        i = r, t === document ? e() : At(t, e(), t.firstChild ? null : void 0, n)
    }, s.owner), () => {
        i(), t.textContent = ""
    }
}

function Rt(e, t, n) {
    let s;
    const i = () => {
            const o = document.createElement("template");
            return o.innerHTML = e, n ? o.content.firstChild.firstChild : o.content.firstChild
        },
        r = t ? () => P(() => document.importNode(s || (s = i()), !0)) : () => (s || (s = i())).cloneNode(!0);
    return r.cloneNode = r, r
}

function yt(e, t = window.document) {
    const n = t[pe] || (t[pe] = new Set);
    for (let s = 0, i = e.length; s < i; s++) {
        const r = e[s];
        n.has(r) || (n.add(r), t.addEventListener(r, Pt))
    }
}

function le(e, t, n) {
    d.context || (n == null ? e.removeAttribute(t) : e.setAttribute(t, n))
}

function wt(e, t, n, s) {
    d.context || (s == null ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, s))
}

function mt(e, t) {
    d.context || (t == null ? e.removeAttribute("class") : e.className = t)
}

function pt(e, t, n, s) {
    if (s) Array.isArray(n) ? (e[`$$${t}`] = n[0], e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n;
    else if (Array.isArray(n)) {
        const i = n[0];
        e.addEventListener(t, n[0] = r => i.call(e, n[1], r))
    } else e.addEventListener(t, n)
}

function bt(e, t, n = {}) {
    const s = Object.keys(t || {}),
        i = Object.keys(n);
    let r, o;
    for (r = 0, o = i.length; r < o; r++) {
        const l = i[r];
        !l || l === "undefined" || t[l] || (be(e, l, !1), delete n[l])
    }
    for (r = 0, o = s.length; r < o; r++) {
        const l = s[r],
            c = !!t[l];
        !l || l === "undefined" || n[l] === c || !c || (be(e, l, !0), n[l] = c)
    }
    return n
}

function St(e, t, n) {
    if (!t) return n ? le(e, "style") : t;
    const s = e.style;
    if (typeof t == "string") return s.cssText = t;
    typeof n == "string" && (s.cssText = n = void 0), n || (n = {}), t || (t = {});
    let i, r;
    for (r in n) t[r] == null && s.removeProperty(r), delete n[r];
    for (r in t) i = t[r], i !== n[r] && (s.setProperty(r, i), n[r] = i);
    return n
}

function xt(e, t = {}, n, s) {
    const i = {};
    return s || F(() => i.children = _(e, t.children, i.children)), F(() => t.ref && t.ref(e)), F(() => Ct(e, t, n, !0, i, !0)), i
}

function qt(e, t, n) {
    return P(() => e(t, n))
}

function At(e, t, n, s) {
    if (n !== void 0 && !s && (s = []), typeof t != "function") return _(e, t, s, n);
    F(i => _(e, t(), i, n), s)
}

function Ct(e, t, n, s, i = {}, r = !1) {
    t || (t = {});
    for (const o in i)
        if (!(o in t)) {
            if (o === "children") continue;
            i[o] = Se(e, o, null, i[o], n, r)
        }
    for (const o in t) {
        if (o === "children") {
            s || _(e, t.children);
            continue
        }
        const l = t[o];
        i[o] = Se(e, o, l, i[o], n, r)
    }
}

function Et(e) {
    let t, n;
    return !d.context || !(t = d.registry.get(n = kt())) ? e() : (d.completed && d.completed.add(t), d.registry.delete(n), t)
}

function Ot(e) {
    return e.toLowerCase().replace(/-([a-z])/g, (t, n) => n.toUpperCase())
}

function be(e, t, n) {
    const s = t.trim().split(/\s+/);
    for (let i = 0, r = s.length; i < r; i++) e.classList.toggle(s[i], n)
}

function Se(e, t, n, s, i, r) {
    let o, l, c, a, f;
    if (t === "style") return St(e, n, s);
    if (t === "classList") return bt(e, n, s);
    if (n === s) return s;
    if (t === "ref") r || n(e);
    else if (t.slice(0, 3) === "on:") {
        const h = t.slice(3);
        s && e.removeEventListener(h, s), n && e.addEventListener(h, n)
    } else if (t.slice(0, 10) === "oncapture:") {
        const h = t.slice(10);
        s && e.removeEventListener(h, s, !0), n && e.addEventListener(h, n, !0)
    } else if (t.slice(0, 2) === "on") {
        const h = t.slice(2).toLowerCase(),
            y = at.has(h);
        if (!y && s) {
            const m = Array.isArray(s) ? s[0] : s;
            e.removeEventListener(h, m)
        }(y || n) && (pt(e, h, n, y), y && yt([h]))
    } else if (t.slice(0, 5) === "attr:") le(e, t.slice(5), n);
    else if ((f = t.slice(0, 5) === "prop:") || (c = ot.has(t)) || !i && ((a = ct(t, e.tagName)) || (l = lt.has(t))) || (o = e.nodeName.includes("-"))) {
        if (f) t = t.slice(5), l = !0;
        else if (d.context) return n;
        t === "class" || t === "className" ? mt(e, n) : o && !l && !c ? e[Ot(t)] = n : e[a || t] = n
    } else {
        const h = i && t.indexOf(":") > -1 && ht[t.split(":")[0]];
        h ? wt(e, h, t, n) : le(e, ft[t] || t, n)
    }
    return n
}

function Pt(e) {
    const t = `$$${e.type}`;
    let n = e.composedPath && e.composedPath()[0] || e.target;
    for (e.target !== n && Object.defineProperty(e, "target", {
            configurable: !0,
            value: n
        }), Object.defineProperty(e, "currentTarget", {
            configurable: !0,
            get() {
                return n || document
            }
        }), d.registry && !d.done && (d.done = _$HY.done = !0); n;) {
        const s = n[t];
        if (s && !n.disabled) {
            const i = n[`${t}Data`];
            if (i !== void 0 ? s.call(n, i, e) : s.call(n, e), e.cancelBubble) return
        }
        n = n._$host || n.parentNode || n.host
    }
}

function _(e, t, n, s, i) {
    if (d.context) {
        !n && (n = [...e.childNodes]);
        let l = [];
        for (let c = 0; c < n.length; c++) {
            const a = n[c];
            a.nodeType === 8 && a.data.slice(0, 2) === "!$" ? a.remove() : l.push(a)
        }
        n = l
    }
    for (; typeof n == "function";) n = n();
    if (t === n) return n;
    const r = typeof t,
        o = s !== void 0;
    if (e = o && n[0] && n[0].parentNode || e, r === "string" || r === "number") {
        if (d.context) return n;
        if (r === "number" && (t = t.toString()), o) {
            let l = n[0];
            l && l.nodeType === 3 ? l.data !== t && (l.data = t) : l = document.createTextNode(t), n = G(e, n, s, l)
        } else n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t
    } else if (t == null || r === "boolean") {
        if (d.context) return n;
        n = G(e, n, s)
    } else {
        if (r === "function") return F(() => {
            let l = t();
            for (; typeof l == "function";) l = l();
            n = _(e, l, n, s)
        }), () => n;
        if (Array.isArray(t)) {
            const l = [],
                c = n && Array.isArray(n);
            if (oe(l, t, n, i)) return F(() => n = _(e, l, n, s, !0)), () => n;
            if (d.context) {
                if (!l.length) return n;
                if (s === void 0) return [...e.childNodes];
                let a = l[0],
                    f = [a];
                for (;
                    (a = a.nextSibling) !== s;) f.push(a);
                return n = f
            }
            if (l.length === 0) {
                if (n = G(e, n, s), o) return n
            } else c ? n.length === 0 ? xe(e, l, s) : gt(e, n, l) : (n && G(e), xe(e, l));
            n = l
        } else if (t.nodeType) {
            if (d.context && t.parentNode) return n = o ? [t] : t;
            if (Array.isArray(n)) {
                if (o) return n = G(e, n, s, t);
                G(e, n, null, t)
            } else n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
            n = t
        }
    }
    return n
}

function oe(e, t, n, s) {
    let i = !1;
    for (let r = 0, o = t.length; r < o; r++) {
        let l = t[r],
            c = n && n[e.length],
            a;
        if (!(l == null || l === !0 || l === !1))
            if ((a = typeof l) == "object" && l.nodeType) e.push(l);
            else if (Array.isArray(l)) i = oe(e, l, c) || i;
        else if (a === "function")
            if (s) {
                for (; typeof l == "function";) l = l();
                i = oe(e, Array.isArray(l) ? l : [l], Array.isArray(c) ? c : [c]) || i
            } else e.push(l), i = !0;
        else {
            const f = String(l);
            c && c.nodeType === 3 && c.data === f ? e.push(c) : e.push(document.createTextNode(f))
        }
    }
    return i
}

function xe(e, t, n = null) {
    for (let s = 0, i = t.length; s < i; s++) e.insertBefore(t[s], n)
}

function G(e, t, n, s) {
    if (n === void 0) return e.textContent = "";
    const i = s || document.createTextNode("");
    if (t.length) {
        let r = !1;
        for (let o = t.length - 1; o >= 0; o--) {
            const l = t[o];
            if (i !== l) {
                const c = l.parentNode === e;
                !r && !o ? c ? e.replaceChild(i, l) : e.insertBefore(i, n) : c && l.remove()
            } else r = !0
        }
    } else e.insertBefore(i, n);
    return [i]
}

function kt() {
    const e = d.context;
    return `${e.id}${e.count++}`
}
const Tt = "http://www.w3.org/2000/svg";

function Nt(e, t = !1) {
    return t ? document.createElementNS(Tt, e) : document.createElement(e)
}

function Kt(e) {
    const [t, n] = st(e, ["component"]), s = T(() => t.component);
    return T(() => {
        const i = s();
        switch (typeof i) {
            case "function":
                return P(() => i(n));
            case "string":
                const r = dt.has(i),
                    o = d.context ? Et() : Nt(i, r);
                return xt(o, n, r), o
        }
    })
}
export {
    Y as $, Oe as A, Ge as B, vt as C, Kt as D, It as F, Ut as M, Ft as S, mt as a, st as b, tt as c, xt as d, Bt as e, F as f, D as g, T as h, At as i, yt as j, Re as k, pt as l, Dt as m, P as n, Ee as o, ge as p, jt as q, _t as r, le as s, Rt as t, qt as u, Vt as v, Mt as w, Lt as x, Gt as y, fe as z
};