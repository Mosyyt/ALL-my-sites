var Kt = Object.defineProperty;
var Pe = Object.getOwnPropertySymbols;
var Gt = Object.prototype.hasOwnProperty,
    $t = Object.prototype.propertyIsEnumerable;
var qe = (l, m, y) => m in l ? Kt(l, m, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: y
    }) : l[m] = y,
    We = (l, m) => {
        for (var y in m || (m = {})) Gt.call(m, y) && qe(l, y, m[y]);
        if (Pe)
            for (var y of Pe(m)) $t.call(m, y) && qe(l, y, m[y]);
        return l
    };
import {
    ez as L,
    du as T
} from "./chunk-b53b00e3.js";
import {
    c as ie,
    g as Ht
} from "./chunk-73e80d68.js";
import {
    g as K
} from "./chunk-07977b38.js";

function ce(l) {
    throw new Error('Could not dynamically require "' + l + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Ke = {
    exports: {}
};
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(l, m) {
    (function(y) {
        l.exports = y()
    })(function() {
        return function y(I, U, j) {
            function M(D, G) {
                if (!U[D]) {
                    if (!I[D]) {
                        var h = typeof ce == "function" && ce;
                        if (!G && h) return h(D, !0);
                        if (S) return S(D, !0);
                        var p = new Error("Cannot find module '" + D + "'");
                        throw p.code = "MODULE_NOT_FOUND", p
                    }
                    var R = U[D] = {
                        exports: {}
                    };
                    I[D][0].call(R.exports, function(O) {
                        var $ = I[D][1][O];
                        return M($ || O)
                    }, R, R.exports, y, I, U, j)
                }
                return U[D].exports
            }
            for (var S = typeof ce == "function" && ce, z = 0; z < j.length; z++) M(j[z]);
            return M
        }({
            1: [function(y, I, U) {
                (function(j) {
                    var M = j.MutationObserver || j.WebKitMutationObserver,
                        S;
                    if (M) {
                        var z = 0,
                            D = new M(O),
                            G = j.document.createTextNode("");
                        D.observe(G, {
                            characterData: !0
                        }), S = function() {
                            G.data = z = ++z % 2
                        }
                    } else if (!j.setImmediate && typeof j.MessageChannel < "u") {
                        var h = new j.MessageChannel;
                        h.port1.onmessage = O, S = function() {
                            h.port2.postMessage(0)
                        }
                    } else "document" in j && "onreadystatechange" in j.document.createElement("script") ? S = function() {
                        var k = j.document.createElement("script");
                        k.onreadystatechange = function() {
                            O(), k.onreadystatechange = null, k.parentNode.removeChild(k), k = null
                        }, j.document.documentElement.appendChild(k)
                    } : S = function() {
                        setTimeout(O, 0)
                    };
                    var p, R = [];

                    function O() {
                        p = !0;
                        for (var k, H, B = R.length; B;) {
                            for (H = R, R = [], k = -1; ++k < B;) H[k]();
                            B = R.length
                        }
                        p = !1
                    }
                    I.exports = $;

                    function $(k) {
                        R.push(k) === 1 && !p && S()
                    }
                }).call(this, typeof ie < "u" ? ie : typeof self < "u" ? self : typeof window < "u" ? window : {})
            }, {}],
            2: [function(y, I, U) {
                var j = y(1);

                function M() {}
                var S = {},
                    z = ["REJECTED"],
                    D = ["FULFILLED"],
                    G = ["PENDING"];
                I.exports = h;

                function h(d) {
                    if (typeof d != "function") throw new TypeError("resolver must be a function");
                    this.state = G, this.queue = [], this.outcome = void 0, d !== M && $(this, d)
                }
                h.prototype.catch = function(d) {
                    return this.then(null, d)
                }, h.prototype.then = function(d, w) {
                    if (typeof d != "function" && this.state === D || typeof w != "function" && this.state === z) return this;
                    var b = new this.constructor(M);
                    if (this.state !== G) {
                        var E = this.state === D ? d : w;
                        R(b, E, this.outcome)
                    } else this.queue.push(new p(b, d, w));
                    return b
                };

                function p(d, w, b) {
                    this.promise = d, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof b == "function" && (this.onRejected = b, this.callRejected = this.otherCallRejected)
                }
                p.prototype.callFulfilled = function(d) {
                    S.resolve(this.promise, d)
                }, p.prototype.otherCallFulfilled = function(d) {
                    R(this.promise, this.onFulfilled, d)
                }, p.prototype.callRejected = function(d) {
                    S.reject(this.promise, d)
                }, p.prototype.otherCallRejected = function(d) {
                    R(this.promise, this.onRejected, d)
                };

                function R(d, w, b) {
                    j(function() {
                        var E;
                        try {
                            E = w(b)
                        } catch (A) {
                            return S.reject(d, A)
                        }
                        E === d ? S.reject(d, new TypeError("Cannot resolve promise with itself")) : S.resolve(d, E)
                    })
                }
                S.resolve = function(d, w) {
                    var b = k(O, w);
                    if (b.status === "error") return S.reject(d, b.value);
                    var E = b.value;
                    if (E) $(d, E);
                    else {
                        d.state = D, d.outcome = w;
                        for (var A = -1, F = d.queue.length; ++A < F;) d.queue[A].callFulfilled(w)
                    }
                    return d
                }, S.reject = function(d, w) {
                    d.state = z, d.outcome = w;
                    for (var b = -1, E = d.queue.length; ++b < E;) d.queue[b].callRejected(w);
                    return d
                };

                function O(d) {
                    var w = d && d.then;
                    if (d && (typeof d == "object" || typeof d == "function") && typeof w == "function") return function() {
                        w.apply(d, arguments)
                    }
                }

                function $(d, w) {
                    var b = !1;

                    function E(q) {
                        b || (b = !0, S.reject(d, q))
                    }

                    function A(q) {
                        b || (b = !0, S.resolve(d, q))
                    }

                    function F() {
                        w(A, E)
                    }
                    var P = k(F);
                    P.status === "error" && E(P.value)
                }

                function k(d, w) {
                    var b = {};
                    try {
                        b.value = d(w), b.status = "success"
                    } catch (E) {
                        b.status = "error", b.value = E
                    }
                    return b
                }
                h.resolve = H;

                function H(d) {
                    return d instanceof this ? d : S.resolve(new this(M), d)
                }
                h.reject = B;

                function B(d) {
                    var w = new this(M);
                    return S.reject(w, d)
                }
                h.all = se;

                function se(d) {
                    var w = this;
                    if (Object.prototype.toString.call(d) !== "[object Array]") return this.reject(new TypeError("must be an array"));
                    var b = d.length,
                        E = !1;
                    if (!b) return this.resolve([]);
                    for (var A = new Array(b), F = 0, P = -1, q = new this(M); ++P < b;) J(d[P], P);
                    return q;

                    function J(te, re) {
                        w.resolve(te).then(fe, function(Z) {
                            E || (E = !0, S.reject(q, Z))
                        });

                        function fe(Z) {
                            A[re] = Z, ++F === b && !E && (E = !0, S.resolve(q, A))
                        }
                    }
                }
                h.race = X;

                function X(d) {
                    var w = this;
                    if (Object.prototype.toString.call(d) !== "[object Array]") return this.reject(new TypeError("must be an array"));
                    var b = d.length,
                        E = !1;
                    if (!b) return this.resolve([]);
                    for (var A = -1, F = new this(M); ++A < b;) P(d[A]);
                    return F;

                    function P(q) {
                        w.resolve(q).then(function(J) {
                            E || (E = !0, S.resolve(F, J))
                        }, function(J) {
                            E || (E = !0, S.reject(F, J))
                        })
                    }
                }
            }, {
                1: 1
            }],
            3: [function(y, I, U) {
                (function(j) {
                    typeof j.Promise != "function" && (j.Promise = y(2))
                }).call(this, typeof ie < "u" ? ie : typeof self < "u" ? self : typeof window < "u" ? window : {})
            }, {
                2: 2
            }],
            4: [function(y, I, U) {
                var j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };

                function M(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function S() {
                    try {
                        if (typeof indexedDB < "u") return indexedDB;
                        if (typeof webkitIndexedDB < "u") return webkitIndexedDB;
                        if (typeof mozIndexedDB < "u") return mozIndexedDB;
                        if (typeof OIndexedDB < "u") return OIndexedDB;
                        if (typeof msIndexedDB < "u") return msIndexedDB
                    } catch (e) {
                        return
                    }
                }
                var z = S();

                function D() {
                    try {
                        if (!z || !z.open) return !1;
                        var e = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                            t = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
                        return (!e || t) && typeof indexedDB < "u" && typeof IDBKeyRange < "u"
                    } catch (n) {
                        return !1
                    }
                }

                function G(e, t) {
                    e = e || [], t = t || {};
                    try {
                        return new Blob(e, t)
                    } catch (a) {
                        if (a.name !== "TypeError") throw a;
                        for (var n = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, o = new n, r = 0; r < e.length; r += 1) o.append(e[r]);
                        return o.getBlob(t.type)
                    }
                }
                typeof Promise > "u" && y(3);
                var h = Promise;

                function p(e, t) {
                    t && e.then(function(n) {
                        t(null, n)
                    }, function(n) {
                        t(n)
                    })
                }

                function R(e, t, n) {
                    typeof t == "function" && e.then(t), typeof n == "function" && e.catch(n)
                }

                function O(e) {
                    return typeof e != "string" && (console.warn(e + " used as a key, but it is not a string."), e = String(e)), e
                }

                function $() {
                    if (arguments.length && typeof arguments[arguments.length - 1] == "function") return arguments[arguments.length - 1]
                }
                var k = "local-forage-detect-blob-support",
                    H = void 0,
                    B = {},
                    se = Object.prototype.toString,
                    X = "readonly",
                    d = "readwrite";

                function w(e) {
                    for (var t = e.length, n = new ArrayBuffer(t), o = new Uint8Array(n), r = 0; r < t; r++) o[r] = e.charCodeAt(r);
                    return n
                }

                function b(e) {
                    return new h(function(t) {
                        var n = e.transaction(k, d),
                            o = G([""]);
                        n.objectStore(k).put(o, "key"), n.onabort = function(r) {
                            r.preventDefault(), r.stopPropagation(), t(!1)
                        }, n.oncomplete = function() {
                            var r = navigator.userAgent.match(/Chrome\/(\d+)/),
                                a = navigator.userAgent.match(/Edge\//);
                            t(a || !r || parseInt(r[1], 10) >= 43)
                        }
                    }).catch(function() {
                        return !1
                    })
                }

                function E(e) {
                    return typeof H == "boolean" ? h.resolve(H) : b(e).then(function(t) {
                        return H = t, H
                    })
                }

                function A(e) {
                    var t = B[e.name],
                        n = {};
                    n.promise = new h(function(o, r) {
                        n.resolve = o, n.reject = r
                    }), t.deferredOperations.push(n), t.dbReady ? t.dbReady = t.dbReady.then(function() {
                        return n.promise
                    }) : t.dbReady = n.promise
                }

                function F(e) {
                    var t = B[e.name],
                        n = t.deferredOperations.pop();
                    if (n) return n.resolve(), n.promise
                }

                function P(e, t) {
                    var n = B[e.name],
                        o = n.deferredOperations.pop();
                    if (o) return o.reject(t), o.promise
                }

                function q(e, t) {
                    return new h(function(n, o) {
                        if (B[e.name] = B[e.name] || Ie(), e.db)
                            if (t) A(e), e.db.close();
                            else return n(e.db);
                        var r = [e.name];
                        t && r.push(e.version);
                        var a = z.open.apply(z, r);
                        t && (a.onupgradeneeded = function(i) {
                            var c = a.result;
                            try {
                                c.createObjectStore(e.storeName), i.oldVersion <= 1 && c.createObjectStore(k)
                            } catch (f) {
                                if (f.name === "ConstraintError") console.warn('The database "' + e.name + '" has been upgraded from version ' + i.oldVersion + " to version " + i.newVersion + ', but the storage "' + e.storeName + '" already exists.');
                                else throw f
                            }
                        }), a.onerror = function(i) {
                            i.preventDefault(), o(a.error)
                        }, a.onsuccess = function() {
                            var i = a.result;
                            i.onversionchange = function(c) {
                                c.target.close()
                            }, n(i), F(e)
                        }
                    })
                }

                function J(e) {
                    return q(e, !1)
                }

                function te(e) {
                    return q(e, !0)
                }

                function re(e, t) {
                    if (!e.db) return !0;
                    var n = !e.db.objectStoreNames.contains(e.storeName),
                        o = e.version < e.db.version,
                        r = e.version > e.db.version;
                    if (o && (e.version !== t && console.warn('The database "' + e.name + `" can't be downgraded from version ` + e.db.version + " to version " + e.version + "."), e.version = e.db.version), r || n) {
                        if (n) {
                            var a = e.db.version + 1;
                            a > e.version && (e.version = a)
                        }
                        return !0
                    }
                    return !1
                }

                function fe(e) {
                    return new h(function(t, n) {
                        var o = new FileReader;
                        o.onerror = n, o.onloadend = function(r) {
                            var a = btoa(r.target.result || "");
                            t({
                                __local_forage_encoded_blob: !0,
                                data: a,
                                type: e.type
                            })
                        }, o.readAsBinaryString(e)
                    })
                }

                function Z(e) {
                    var t = w(atob(e.data));
                    return G([t], {
                        type: e.type
                    })
                }

                function we(e) {
                    return e && e.__local_forage_encoded_blob
                }

                function $e(e) {
                    var t = this,
                        n = t._initReady().then(function() {
                            var o = B[t._dbInfo.name];
                            if (o && o.dbReady) return o.dbReady
                        });
                    return R(n, e, e), n
                }

                function He(e) {
                    A(e);
                    for (var t = B[e.name], n = t.forages, o = 0; o < n.length; o++) {
                        var r = n[o];
                        r._dbInfo.db && (r._dbInfo.db.close(), r._dbInfo.db = null)
                    }
                    return e.db = null, J(e).then(function(a) {
                        return e.db = a, re(e) ? te(e) : a
                    }).then(function(a) {
                        e.db = t.db = a;
                        for (var i = 0; i < n.length; i++) n[i]._dbInfo.db = a
                    }).catch(function(a) {
                        throw P(e, a), a
                    })
                }

                function Y(e, t, n, o) {
                    o === void 0 && (o = 1);
                    try {
                        var r = e.db.transaction(e.storeName, t);
                        n(null, r)
                    } catch (a) {
                        if (o > 0 && (!e.db || a.name === "InvalidStateError" || a.name === "NotFoundError")) return h.resolve().then(function() {
                            if (!e.db || a.name === "NotFoundError" && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version) return e.db && (e.version = e.db.version + 1), te(e)
                        }).then(function() {
                            return He(e).then(function() {
                                Y(e, t, n, o - 1)
                            })
                        }).catch(n);
                        n(a)
                    }
                }

                function Ie() {
                    return {
                        forages: [],
                        db: null,
                        dbReady: null,
                        deferredOperations: []
                    }
                }

                function Je(e) {
                    var t = this,
                        n = {
                            db: null
                        };
                    if (e)
                        for (var o in e) n[o] = e[o];
                    var r = B[n.name];
                    r || (r = Ie(), B[n.name] = r), r.forages.push(t), t._initReady || (t._initReady = t.ready, t.ready = $e);
                    var a = [];

                    function i() {
                        return h.resolve()
                    }
                    for (var c = 0; c < r.forages.length; c++) {
                        var f = r.forages[c];
                        f !== t && a.push(f._initReady().catch(i))
                    }
                    var s = r.forages.slice(0);
                    return h.all(a).then(function() {
                        return n.db = r.db, J(n)
                    }).then(function(u) {
                        return n.db = u, re(n, t._defaultConfig.version) ? te(n) : u
                    }).then(function(u) {
                        n.db = r.db = u, t._dbInfo = n;
                        for (var g = 0; g < s.length; g++) {
                            var v = s[g];
                            v !== t && (v._dbInfo.db = n.db, v._dbInfo.version = n.version)
                        }
                    })
                }

                function Ye(e, t) {
                    var n = this;
                    e = O(e);
                    var o = new h(function(r, a) {
                        n.ready().then(function() {
                            Y(n._dbInfo, X, function(i, c) {
                                if (i) return a(i);
                                try {
                                    var f = c.objectStore(n._dbInfo.storeName),
                                        s = f.get(e);
                                    s.onsuccess = function() {
                                        var u = s.result;
                                        u === void 0 && (u = null), we(u) && (u = Z(u)), r(u)
                                    }, s.onerror = function() {
                                        a(s.error)
                                    }
                                } catch (u) {
                                    a(u)
                                }
                            })
                        }).catch(a)
                    });
                    return p(o, t), o
                }

                function Qe(e, t) {
                    var n = this,
                        o = new h(function(r, a) {
                            n.ready().then(function() {
                                Y(n._dbInfo, X, function(i, c) {
                                    if (i) return a(i);
                                    try {
                                        var f = c.objectStore(n._dbInfo.storeName),
                                            s = f.openCursor(),
                                            u = 1;
                                        s.onsuccess = function() {
                                            var g = s.result;
                                            if (g) {
                                                var v = g.value;
                                                we(v) && (v = Z(v));
                                                var N = e(v, g.key, u++);
                                                N !== void 0 ? r(N) : g.continue()
                                            } else r()
                                        }, s.onerror = function() {
                                            a(s.error)
                                        }
                                    } catch (g) {
                                        a(g)
                                    }
                                })
                            }).catch(a)
                        });
                    return p(o, t), o
                }

                function Ve(e, t, n) {
                    var o = this;
                    e = O(e);
                    var r = new h(function(a, i) {
                        var c;
                        o.ready().then(function() {
                            return c = o._dbInfo, se.call(t) === "[object Blob]" ? E(c.db).then(function(f) {
                                return f ? t : fe(t)
                            }) : t
                        }).then(function(f) {
                            Y(o._dbInfo, d, function(s, u) {
                                if (s) return i(s);
                                try {
                                    var g = u.objectStore(o._dbInfo.storeName);
                                    f === null && (f = void 0);
                                    var v = g.put(f, e);
                                    u.oncomplete = function() {
                                        f === void 0 && (f = null), a(f)
                                    }, u.onabort = u.onerror = function() {
                                        var N = v.error ? v.error : v.transaction.error;
                                        i(N)
                                    }
                                } catch (N) {
                                    i(N)
                                }
                            })
                        }).catch(i)
                    });
                    return p(r, n), r
                }

                function Xe(e, t) {
                    var n = this;
                    e = O(e);
                    var o = new h(function(r, a) {
                        n.ready().then(function() {
                            Y(n._dbInfo, d, function(i, c) {
                                if (i) return a(i);
                                try {
                                    var f = c.objectStore(n._dbInfo.storeName),
                                        s = f.delete(e);
                                    c.oncomplete = function() {
                                        r()
                                    }, c.onerror = function() {
                                        a(s.error)
                                    }, c.onabort = function() {
                                        var u = s.error ? s.error : s.transaction.error;
                                        a(u)
                                    }
                                } catch (u) {
                                    a(u)
                                }
                            })
                        }).catch(a)
                    });
                    return p(o, t), o
                }

                function Ze(e) {
                    var t = this,
                        n = new h(function(o, r) {
                            t.ready().then(function() {
                                Y(t._dbInfo, d, function(a, i) {
                                    if (a) return r(a);
                                    try {
                                        var c = i.objectStore(t._dbInfo.storeName),
                                            f = c.clear();
                                        i.oncomplete = function() {
                                            o()
                                        }, i.onabort = i.onerror = function() {
                                            var s = f.error ? f.error : f.transaction.error;
                                            r(s)
                                        }
                                    } catch (s) {
                                        r(s)
                                    }
                                })
                            }).catch(r)
                        });
                    return p(n, e), n
                }

                function et(e) {
                    var t = this,
                        n = new h(function(o, r) {
                            t.ready().then(function() {
                                Y(t._dbInfo, X, function(a, i) {
                                    if (a) return r(a);
                                    try {
                                        var c = i.objectStore(t._dbInfo.storeName),
                                            f = c.count();
                                        f.onsuccess = function() {
                                            o(f.result)
                                        }, f.onerror = function() {
                                            r(f.error)
                                        }
                                    } catch (s) {
                                        r(s)
                                    }
                                })
                            }).catch(r)
                        });
                    return p(n, e), n
                }

                function tt(e, t) {
                    var n = this,
                        o = new h(function(r, a) {
                            if (e < 0) {
                                r(null);
                                return
                            }
                            n.ready().then(function() {
                                Y(n._dbInfo, X, function(i, c) {
                                    if (i) return a(i);
                                    try {
                                        var f = c.objectStore(n._dbInfo.storeName),
                                            s = !1,
                                            u = f.openKeyCursor();
                                        u.onsuccess = function() {
                                            var g = u.result;
                                            if (!g) {
                                                r(null);
                                                return
                                            }
                                            e === 0 || s ? r(g.key) : (s = !0, g.advance(e))
                                        }, u.onerror = function() {
                                            a(u.error)
                                        }
                                    } catch (g) {
                                        a(g)
                                    }
                                })
                            }).catch(a)
                        });
                    return p(o, t), o
                }

                function nt(e) {
                    var t = this,
                        n = new h(function(o, r) {
                            t.ready().then(function() {
                                Y(t._dbInfo, X, function(a, i) {
                                    if (a) return r(a);
                                    try {
                                        var c = i.objectStore(t._dbInfo.storeName),
                                            f = c.openKeyCursor(),
                                            s = [];
                                        f.onsuccess = function() {
                                            var u = f.result;
                                            if (!u) {
                                                o(s);
                                                return
                                            }
                                            s.push(u.key), u.continue()
                                        }, f.onerror = function() {
                                            r(f.error)
                                        }
                                    } catch (u) {
                                        r(u)
                                    }
                                })
                            }).catch(r)
                        });
                    return p(n, e), n
                }

                function rt(e, t) {
                    t = $.apply(this, arguments);
                    var n = this.config();
                    e = typeof e != "function" && e || {}, e.name || (e.name = e.name || n.name, e.storeName = e.storeName || n.storeName);
                    var o = this,
                        r;
                    if (!e.name) r = h.reject("Invalid arguments");
                    else {
                        var a = e.name === n.name && o._dbInfo.db,
                            i = a ? h.resolve(o._dbInfo.db) : J(e).then(function(c) {
                                var f = B[e.name],
                                    s = f.forages;
                                f.db = c;
                                for (var u = 0; u < s.length; u++) s[u]._dbInfo.db = c;
                                return c
                            });
                        e.storeName ? r = i.then(function(c) {
                            if (c.objectStoreNames.contains(e.storeName)) {
                                var f = c.version + 1;
                                A(e);
                                var s = B[e.name],
                                    u = s.forages;
                                c.close();
                                for (var g = 0; g < u.length; g++) {
                                    var v = u[g];
                                    v._dbInfo.db = null, v._dbInfo.version = f
                                }
                                var N = new h(function(_, x) {
                                    var C = z.open(e.name, f);
                                    C.onerror = function(W) {
                                        var ve = C.result;
                                        ve.close(), x(W)
                                    }, C.onupgradeneeded = function() {
                                        var W = C.result;
                                        W.deleteObjectStore(e.storeName)
                                    }, C.onsuccess = function() {
                                        var W = C.result;
                                        W.close(), _(W)
                                    }
                                });
                                return N.then(function(_) {
                                    s.db = _;
                                    for (var x = 0; x < u.length; x++) {
                                        var C = u[x];
                                        C._dbInfo.db = _, F(C._dbInfo)
                                    }
                                }).catch(function(_) {
                                    throw (P(e, _) || h.resolve()).catch(function() {}), _
                                })
                            }
                        }) : r = i.then(function(c) {
                            A(e);
                            var f = B[e.name],
                                s = f.forages;
                            c.close();
                            for (var u = 0; u < s.length; u++) {
                                var g = s[u];
                                g._dbInfo.db = null
                            }
                            var v = new h(function(N, _) {
                                var x = z.deleteDatabase(e.name);
                                x.onerror = function() {
                                    var C = x.result;
                                    C && C.close(), _(x.error)
                                }, x.onblocked = function() {
                                    console.warn('dropInstance blocked for database "' + e.name + '" until all open connections are closed')
                                }, x.onsuccess = function() {
                                    var C = x.result;
                                    C && C.close(), N(C)
                                }
                            });
                            return v.then(function(N) {
                                f.db = N;
                                for (var _ = 0; _ < s.length; _++) {
                                    var x = s[_];
                                    F(x._dbInfo)
                                }
                            }).catch(function(N) {
                                throw (P(e, N) || h.resolve()).catch(function() {}), N
                            })
                        })
                    }
                    return p(r, t), r
                }
                var ot = {
                    _driver: "asyncStorage",
                    _initStorage: Je,
                    _support: D(),
                    iterate: Qe,
                    getItem: Ye,
                    setItem: Ve,
                    removeItem: Xe,
                    clear: Ze,
                    length: et,
                    key: tt,
                    keys: nt,
                    dropInstance: rt
                };

                function at() {
                    return typeof openDatabase == "function"
                }
                var Q = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    it = "~~local_forage_type~",
                    _e = /^~~local_forage_type~([^~]+)~/,
                    oe = "__lfsc__:",
                    le = oe.length,
                    de = "arbf",
                    he = "blob",
                    Se = "si08",
                    Ee = "ui08",
                    Ne = "uic8",
                    Ce = "si16",
                    je = "si32",
                    Re = "ur16",
                    xe = "ui32",
                    Oe = "fl32",
                    ke = "fl64",
                    Be = le + de.length,
                    Te = Object.prototype.toString;

                function De(e) {
                    var t = e.length * .75,
                        n = e.length,
                        o, r = 0,
                        a, i, c, f;
                    e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
                    var s = new ArrayBuffer(t),
                        u = new Uint8Array(s);
                    for (o = 0; o < n; o += 4) a = Q.indexOf(e[o]), i = Q.indexOf(e[o + 1]), c = Q.indexOf(e[o + 2]), f = Q.indexOf(e[o + 3]), u[r++] = a << 2 | i >> 4, u[r++] = (i & 15) << 4 | c >> 2, u[r++] = (c & 3) << 6 | f & 63;
                    return s
                }

                function me(e) {
                    var t = new Uint8Array(e),
                        n = "",
                        o;
                    for (o = 0; o < t.length; o += 3) n += Q[t[o] >> 2], n += Q[(t[o] & 3) << 4 | t[o + 1] >> 4], n += Q[(t[o + 1] & 15) << 2 | t[o + 2] >> 6], n += Q[t[o + 2] & 63];
                    return t.length % 3 === 2 ? n = n.substring(0, n.length - 1) + "=" : t.length % 3 === 1 && (n = n.substring(0, n.length - 2) + "=="), n
                }

                function ct(e, t) {
                    var n = "";
                    if (e && (n = Te.call(e)), e && (n === "[object ArrayBuffer]" || e.buffer && Te.call(e.buffer) === "[object ArrayBuffer]")) {
                        var o, r = oe;
                        e instanceof ArrayBuffer ? (o = e, r += de) : (o = e.buffer, n === "[object Int8Array]" ? r += Se : n === "[object Uint8Array]" ? r += Ee : n === "[object Uint8ClampedArray]" ? r += Ne : n === "[object Int16Array]" ? r += Ce : n === "[object Uint16Array]" ? r += Re : n === "[object Int32Array]" ? r += je : n === "[object Uint32Array]" ? r += xe : n === "[object Float32Array]" ? r += Oe : n === "[object Float64Array]" ? r += ke : t(new Error("Failed to get type for BinaryArray"))), t(r + me(o))
                    } else if (n === "[object Blob]") {
                        var a = new FileReader;
                        a.onload = function() {
                            var i = it + e.type + "~" + me(this.result);
                            t(oe + he + i)
                        }, a.readAsArrayBuffer(e)
                    } else try {
                        t(JSON.stringify(e))
                    } catch (i) {
                        console.error("Couldn't convert value into a JSON string: ", e), t(null, i)
                    }
                }

                function ut(e) {
                    if (e.substring(0, le) !== oe) return JSON.parse(e);
                    var t = e.substring(Be),
                        n = e.substring(le, Be),
                        o;
                    if (n === he && _e.test(t)) {
                        var r = t.match(_e);
                        o = r[1], t = t.substring(r[0].length)
                    }
                    var a = De(t);
                    switch (n) {
                        case de:
                            return a;
                        case he:
                            return G([a], {
                                type: o
                            });
                        case Se:
                            return new Int8Array(a);
                        case Ee:
                            return new Uint8Array(a);
                        case Ne:
                            return new Uint8ClampedArray(a);
                        case Ce:
                            return new Int16Array(a);
                        case Re:
                            return new Uint16Array(a);
                        case je:
                            return new Int32Array(a);
                        case xe:
                            return new Uint32Array(a);
                        case Oe:
                            return new Float32Array(a);
                        case ke:
                            return new Float64Array(a);
                        default:
                            throw new Error("Unkown type: " + n)
                    }
                }
                var ge = {
                    serialize: ct,
                    deserialize: ut,
                    stringToBuffer: De,
                    bufferToString: me
                };

                function Ae(e, t, n, o) {
                    e.executeSql("CREATE TABLE IF NOT EXISTS " + t.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n, o)
                }

                function st(e) {
                    var t = this,
                        n = {
                            db: null
                        };
                    if (e)
                        for (var o in e) n[o] = typeof e[o] != "string" ? e[o].toString() : e[o];
                    var r = new h(function(a, i) {
                        try {
                            n.db = openDatabase(n.name, String(n.version), n.description, n.size)
                        } catch (c) {
                            return i(c)
                        }
                        n.db.transaction(function(c) {
                            Ae(c, n, function() {
                                t._dbInfo = n, a()
                            }, function(f, s) {
                                i(s)
                            })
                        }, i)
                    });
                    return n.serializer = ge, r
                }

                function V(e, t, n, o, r, a) {
                    e.executeSql(n, o, r, function(i, c) {
                        c.code === c.SYNTAX_ERR ? i.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [t.storeName], function(f, s) {
                            s.rows.length ? a(f, c) : Ae(f, t, function() {
                                f.executeSql(n, o, r, a)
                            }, a)
                        }, a) : a(i, c)
                    }, a)
                }

                function ft(e, t) {
                    var n = this;
                    e = O(e);
                    var o = new h(function(r, a) {
                        n.ready().then(function() {
                            var i = n._dbInfo;
                            i.db.transaction(function(c) {
                                V(c, i, "SELECT * FROM " + i.storeName + " WHERE key = ? LIMIT 1", [e], function(f, s) {
                                    var u = s.rows.length ? s.rows.item(0).value : null;
                                    u && (u = i.serializer.deserialize(u)), r(u)
                                }, function(f, s) {
                                    a(s)
                                })
                            })
                        }).catch(a)
                    });
                    return p(o, t), o
                }

                function lt(e, t) {
                    var n = this,
                        o = new h(function(r, a) {
                            n.ready().then(function() {
                                var i = n._dbInfo;
                                i.db.transaction(function(c) {
                                    V(c, i, "SELECT * FROM " + i.storeName, [], function(f, s) {
                                        for (var u = s.rows, g = u.length, v = 0; v < g; v++) {
                                            var N = u.item(v),
                                                _ = N.value;
                                            if (_ && (_ = i.serializer.deserialize(_)), _ = e(_, N.key, v + 1), _ !== void 0) {
                                                r(_);
                                                return
                                            }
                                        }
                                        r()
                                    }, function(f, s) {
                                        a(s)
                                    })
                                })
                            }).catch(a)
                        });
                    return p(o, t), o
                }

                function ze(e, t, n, o) {
                    var r = this;
                    e = O(e);
                    var a = new h(function(i, c) {
                        r.ready().then(function() {
                            t === void 0 && (t = null);
                            var f = t,
                                s = r._dbInfo;
                            s.serializer.serialize(t, function(u, g) {
                                g ? c(g) : s.db.transaction(function(v) {
                                    V(v, s, "INSERT OR REPLACE INTO " + s.storeName + " (key, value) VALUES (?, ?)", [e, u], function() {
                                        i(f)
                                    }, function(N, _) {
                                        c(_)
                                    })
                                }, function(v) {
                                    if (v.code === v.QUOTA_ERR) {
                                        if (o > 0) {
                                            i(ze.apply(r, [e, f, n, o - 1]));
                                            return
                                        }
                                        c(v)
                                    }
                                })
                            })
                        }).catch(c)
                    });
                    return p(a, n), a
                }

                function dt(e, t, n) {
                    return ze.apply(this, [e, t, n, 1])
                }

                function ht(e, t) {
                    var n = this;
                    e = O(e);
                    var o = new h(function(r, a) {
                        n.ready().then(function() {
                            var i = n._dbInfo;
                            i.db.transaction(function(c) {
                                V(c, i, "DELETE FROM " + i.storeName + " WHERE key = ?", [e], function() {
                                    r()
                                }, function(f, s) {
                                    a(s)
                                })
                            })
                        }).catch(a)
                    });
                    return p(o, t), o
                }

                function mt(e) {
                    var t = this,
                        n = new h(function(o, r) {
                            t.ready().then(function() {
                                var a = t._dbInfo;
                                a.db.transaction(function(i) {
                                    V(i, a, "DELETE FROM " + a.storeName, [], function() {
                                        o()
                                    }, function(c, f) {
                                        r(f)
                                    })
                                })
                            }).catch(r)
                        });
                    return p(n, e), n
                }

                function gt(e) {
                    var t = this,
                        n = new h(function(o, r) {
                            t.ready().then(function() {
                                var a = t._dbInfo;
                                a.db.transaction(function(i) {
                                    V(i, a, "SELECT COUNT(key) as c FROM " + a.storeName, [], function(c, f) {
                                        var s = f.rows.item(0).c;
                                        o(s)
                                    }, function(c, f) {
                                        r(f)
                                    })
                                })
                            }).catch(r)
                        });
                    return p(n, e), n
                }

                function yt(e, t) {
                    var n = this,
                        o = new h(function(r, a) {
                            n.ready().then(function() {
                                var i = n._dbInfo;
                                i.db.transaction(function(c) {
                                    V(c, i, "SELECT key FROM " + i.storeName + " WHERE id = ? LIMIT 1", [e + 1], function(f, s) {
                                        var u = s.rows.length ? s.rows.item(0).key : null;
                                        r(u)
                                    }, function(f, s) {
                                        a(s)
                                    })
                                })
                            }).catch(a)
                        });
                    return p(o, t), o
                }

                function pt(e) {
                    var t = this,
                        n = new h(function(o, r) {
                            t.ready().then(function() {
                                var a = t._dbInfo;
                                a.db.transaction(function(i) {
                                    V(i, a, "SELECT key FROM " + a.storeName, [], function(c, f) {
                                        for (var s = [], u = 0; u < f.rows.length; u++) s.push(f.rows.item(u).key);
                                        o(s)
                                    }, function(c, f) {
                                        r(f)
                                    })
                                })
                            }).catch(r)
                        });
                    return p(n, e), n
                }

                function vt(e) {
                    return new h(function(t, n) {
                        e.transaction(function(o) {
                            o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(r, a) {
                                for (var i = [], c = 0; c < a.rows.length; c++) i.push(a.rows.item(c).name);
                                t({
                                    db: e,
                                    storeNames: i
                                })
                            }, function(r, a) {
                                n(a)
                            })
                        }, function(o) {
                            n(o)
                        })
                    })
                }

                function bt(e, t) {
                    t = $.apply(this, arguments);
                    var n = this.config();
                    e = typeof e != "function" && e || {}, e.name || (e.name = e.name || n.name, e.storeName = e.storeName || n.storeName);
                    var o = this,
                        r;
                    return e.name ? r = new h(function(a) {
                        var i;
                        e.name === n.name ? i = o._dbInfo.db : i = openDatabase(e.name, "", "", 0), e.storeName ? a({
                            db: i,
                            storeNames: [e.storeName]
                        }) : a(vt(i))
                    }).then(function(a) {
                        return new h(function(i, c) {
                            a.db.transaction(function(f) {
                                function s(N) {
                                    return new h(function(_, x) {
                                        f.executeSql("DROP TABLE IF EXISTS " + N, [], function() {
                                            _()
                                        }, function(C, W) {
                                            x(W)
                                        })
                                    })
                                }
                                for (var u = [], g = 0, v = a.storeNames.length; g < v; g++) u.push(s(a.storeNames[g]));
                                h.all(u).then(function() {
                                    i()
                                }).catch(function(N) {
                                    c(N)
                                })
                            }, function(f) {
                                c(f)
                            })
                        })
                    }) : r = h.reject("Invalid arguments"), p(r, t), r
                }
                var wt = {
                    _driver: "webSQLStorage",
                    _initStorage: st,
                    _support: at(),
                    iterate: lt,
                    getItem: ft,
                    setItem: dt,
                    removeItem: ht,
                    clear: mt,
                    length: gt,
                    key: yt,
                    keys: pt,
                    dropInstance: bt
                };

                function It() {
                    try {
                        return typeof localStorage < "u" && "setItem" in localStorage && !!localStorage.setItem
                    } catch (e) {
                        return !1
                    }
                }

                function Me(e, t) {
                    var n = e.name + "/";
                    return e.storeName !== t.storeName && (n += e.storeName + "/"), n
                }

                function _t() {
                    var e = "_localforage_support_test";
                    try {
                        return localStorage.setItem(e, !0), localStorage.removeItem(e), !1
                    } catch (t) {
                        return !0
                    }
                }

                function St() {
                    return !_t() || localStorage.length > 0
                }

                function Et(e) {
                    var t = this,
                        n = {};
                    if (e)
                        for (var o in e) n[o] = e[o];
                    return n.keyPrefix = Me(e, t._defaultConfig), St() ? (t._dbInfo = n, n.serializer = ge, h.resolve()) : h.reject()
                }

                function Nt(e) {
                    var t = this,
                        n = t.ready().then(function() {
                            for (var o = t._dbInfo.keyPrefix, r = localStorage.length - 1; r >= 0; r--) {
                                var a = localStorage.key(r);
                                a.indexOf(o) === 0 && localStorage.removeItem(a)
                            }
                        });
                    return p(n, e), n
                }

                function Ct(e, t) {
                    var n = this;
                    e = O(e);
                    var o = n.ready().then(function() {
                        var r = n._dbInfo,
                            a = localStorage.getItem(r.keyPrefix + e);
                        return a && (a = r.serializer.deserialize(a)), a
                    });
                    return p(o, t), o
                }

                function jt(e, t) {
                    var n = this,
                        o = n.ready().then(function() {
                            for (var r = n._dbInfo, a = r.keyPrefix, i = a.length, c = localStorage.length, f = 1, s = 0; s < c; s++) {
                                var u = localStorage.key(s);
                                if (u.indexOf(a) === 0) {
                                    var g = localStorage.getItem(u);
                                    if (g && (g = r.serializer.deserialize(g)), g = e(g, u.substring(i), f++), g !== void 0) return g
                                }
                            }
                        });
                    return p(o, t), o
                }

                function Rt(e, t) {
                    var n = this,
                        o = n.ready().then(function() {
                            var r = n._dbInfo,
                                a;
                            try {
                                a = localStorage.key(e)
                            } catch (i) {
                                a = null
                            }
                            return a && (a = a.substring(r.keyPrefix.length)), a
                        });
                    return p(o, t), o
                }

                function xt(e) {
                    var t = this,
                        n = t.ready().then(function() {
                            for (var o = t._dbInfo, r = localStorage.length, a = [], i = 0; i < r; i++) {
                                var c = localStorage.key(i);
                                c.indexOf(o.keyPrefix) === 0 && a.push(c.substring(o.keyPrefix.length))
                            }
                            return a
                        });
                    return p(n, e), n
                }

                function Ot(e) {
                    var t = this,
                        n = t.keys().then(function(o) {
                            return o.length
                        });
                    return p(n, e), n
                }

                function kt(e, t) {
                    var n = this;
                    e = O(e);
                    var o = n.ready().then(function() {
                        var r = n._dbInfo;
                        localStorage.removeItem(r.keyPrefix + e)
                    });
                    return p(o, t), o
                }

                function Bt(e, t, n) {
                    var o = this;
                    e = O(e);
                    var r = o.ready().then(function() {
                        t === void 0 && (t = null);
                        var a = t;
                        return new h(function(i, c) {
                            var f = o._dbInfo;
                            f.serializer.serialize(t, function(s, u) {
                                if (u) c(u);
                                else try {
                                    localStorage.setItem(f.keyPrefix + e, s), i(a)
                                } catch (g) {
                                    (g.name === "QuotaExceededError" || g.name === "NS_ERROR_DOM_QUOTA_REACHED") && c(g), c(g)
                                }
                            })
                        })
                    });
                    return p(r, n), r
                }

                function Tt(e, t) {
                    if (t = $.apply(this, arguments), e = typeof e != "function" && e || {}, !e.name) {
                        var n = this.config();
                        e.name = e.name || n.name, e.storeName = e.storeName || n.storeName
                    }
                    var o = this,
                        r;
                    return e.name ? r = new h(function(a) {
                        e.storeName ? a(Me(e, o._defaultConfig)) : a(e.name + "/")
                    }).then(function(a) {
                        for (var i = localStorage.length - 1; i >= 0; i--) {
                            var c = localStorage.key(i);
                            c.indexOf(a) === 0 && localStorage.removeItem(c)
                        }
                    }) : r = h.reject("Invalid arguments"), p(r, t), r
                }
                var Dt = {
                        _driver: "localStorageWrapper",
                        _initStorage: Et,
                        _support: It(),
                        iterate: jt,
                        getItem: Ct,
                        setItem: Bt,
                        removeItem: kt,
                        clear: Nt,
                        length: Ot,
                        key: Rt,
                        keys: xt,
                        dropInstance: Tt
                    },
                    At = function(e, t) {
                        return e === t || typeof e == "number" && typeof t == "number" && isNaN(e) && isNaN(t)
                    },
                    zt = function(e, t) {
                        for (var n = e.length, o = 0; o < n;) {
                            if (At(e[o], t)) return !0;
                            o++
                        }
                        return !1
                    },
                    Le = Array.isArray || function(e) {
                        return Object.prototype.toString.call(e) === "[object Array]"
                    },
                    ne = {},
                    Fe = {},
                    ee = {
                        INDEXEDDB: ot,
                        WEBSQL: wt,
                        LOCALSTORAGE: Dt
                    },
                    Mt = [ee.INDEXEDDB._driver, ee.WEBSQL._driver, ee.LOCALSTORAGE._driver],
                    ae = ["dropInstance"],
                    ye = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(ae),
                    Lt = {
                        description: "",
                        driver: Mt.slice(),
                        name: "localforage",
                        size: 4980736,
                        storeName: "keyvaluepairs",
                        version: 1
                    };

                function Ft(e, t) {
                    e[t] = function() {
                        var n = arguments;
                        return e.ready().then(function() {
                            return e[t].apply(e, n)
                        })
                    }
                }

                function pe() {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        if (t)
                            for (var n in t) t.hasOwnProperty(n) && (Le(t[n]) ? arguments[0][n] = t[n].slice() : arguments[0][n] = t[n])
                    }
                    return arguments[0]
                }
                var Ut = function() {
                        function e(t) {
                            M(this, e);
                            for (var n in ee)
                                if (ee.hasOwnProperty(n)) {
                                    var o = ee[n],
                                        r = o._driver;
                                    this[n] = r, ne[r] || this.defineDriver(o)
                                }
                            this._defaultConfig = pe({}, Lt), this._config = pe({}, this._defaultConfig, t), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {})
                        }
                        return e.prototype.config = function(t) {
                            if ((typeof t > "u" ? "undefined" : j(t)) === "object") {
                                if (this._ready) return new Error("Can't call config() after localforage has been used.");
                                for (var n in t) {
                                    if (n === "storeName" && (t[n] = t[n].replace(/\W/g, "_")), n === "version" && typeof t[n] != "number") return new Error("Database version must be a number.");
                                    this._config[n] = t[n]
                                }
                                return "driver" in t && t.driver ? this.setDriver(this._config.driver) : !0
                            } else return typeof t == "string" ? this._config[t] : this._config
                        }, e.prototype.defineDriver = function(t, n, o) {
                            var r = new h(function(a, i) {
                                try {
                                    var c = t._driver,
                                        f = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                    if (!t._driver) {
                                        i(f);
                                        return
                                    }
                                    for (var s = ye.concat("_initStorage"), u = 0, g = s.length; u < g; u++) {
                                        var v = s[u],
                                            N = !zt(ae, v);
                                        if ((N || t[v]) && typeof t[v] != "function") {
                                            i(f);
                                            return
                                        }
                                    }
                                    var _ = function() {
                                        for (var C = function(qt) {
                                                return function() {
                                                    var Wt = new Error("Method " + qt + " is not implemented by the current driver"),
                                                        Ue = h.reject(Wt);
                                                    return p(Ue, arguments[arguments.length - 1]), Ue
                                                }
                                            }, W = 0, ve = ae.length; W < ve; W++) {
                                            var be = ae[W];
                                            t[be] || (t[be] = C(be))
                                        }
                                    };
                                    _();
                                    var x = function(C) {
                                        ne[c] && console.info("Redefining LocalForage driver: " + c), ne[c] = t, Fe[c] = C, a()
                                    };
                                    "_support" in t ? t._support && typeof t._support == "function" ? t._support().then(x, i) : x(!!t._support) : x(!0)
                                } catch (C) {
                                    i(C)
                                }
                            });
                            return R(r, n, o), r
                        }, e.prototype.driver = function() {
                            return this._driver || null
                        }, e.prototype.getDriver = function(t, n, o) {
                            var r = ne[t] ? h.resolve(ne[t]) : h.reject(new Error("Driver not found."));
                            return R(r, n, o), r
                        }, e.prototype.getSerializer = function(t) {
                            var n = h.resolve(ge);
                            return R(n, t), n
                        }, e.prototype.ready = function(t) {
                            var n = this,
                                o = n._driverSet.then(function() {
                                    return n._ready === null && (n._ready = n._initDriver()), n._ready
                                });
                            return R(o, t, t), o
                        }, e.prototype.setDriver = function(t, n, o) {
                            var r = this;
                            Le(t) || (t = [t]);
                            var a = this._getSupportedDrivers(t);

                            function i() {
                                r._config.driver = r.driver()
                            }

                            function c(u) {
                                return r._extend(u), i(), r._ready = r._initStorage(r._config), r._ready
                            }

                            function f(u) {
                                return function() {
                                    var g = 0;

                                    function v() {
                                        for (; g < u.length;) {
                                            var N = u[g];
                                            return g++, r._dbInfo = null, r._ready = null, r.getDriver(N).then(c).catch(v)
                                        }
                                        i();
                                        var _ = new Error("No available storage method found.");
                                        return r._driverSet = h.reject(_), r._driverSet
                                    }
                                    return v()
                                }
                            }
                            var s = this._driverSet !== null ? this._driverSet.catch(function() {
                                return h.resolve()
                            }) : h.resolve();
                            return this._driverSet = s.then(function() {
                                var u = a[0];
                                return r._dbInfo = null, r._ready = null, r.getDriver(u).then(function(g) {
                                    r._driver = g._driver, i(), r._wrapLibraryMethodsWithReady(), r._initDriver = f(a)
                                })
                            }).catch(function() {
                                i();
                                var u = new Error("No available storage method found.");
                                return r._driverSet = h.reject(u), r._driverSet
                            }), R(this._driverSet, n, o), this._driverSet
                        }, e.prototype.supports = function(t) {
                            return !!Fe[t]
                        }, e.prototype._extend = function(t) {
                            pe(this, t)
                        }, e.prototype._getSupportedDrivers = function(t) {
                            for (var n = [], o = 0, r = t.length; o < r; o++) {
                                var a = t[o];
                                this.supports(a) && n.push(a)
                            }
                            return n
                        }, e.prototype._wrapLibraryMethodsWithReady = function() {
                            for (var t = 0, n = ye.length; t < n; t++) Ft(this, ye[t])
                        }, e.prototype.createInstance = function(t) {
                            return new e(t)
                        }, e
                    }(),
                    Pt = new Ut;
                I.exports = Pt
            }, {
                3: 3
            }]
        }, {}, [4])(4)
    })
})(Ke);
var Jt = Ke.exports;
const Ge = Ht(Jt);

function Yt(l) {
    return Ge.getItem(l)
}

function Qt(l, m) {
    return Ge.setItem(l, m)
}

function Vt(l, m, y) {
    const I = (y || "") + "bcgame-" + l;
    return Qt(I, m)
}

function Xt(l, m) {
    const y = (m || "") + "bcgame-" + l;
    return Yt(y)
}
const Zt = {
        introduction: '<p>Another exciting blockchain gambling game is <a  target="_blank">Crash at BC.Game</a>. This crypto-based game is one of the simplest among all the blockchain casino games. This 2022 the number of crypto owners that have been playing Crash at BC.Game have increased to get the chance to increase the value of their digital currencies. <br><br>If you are just starting to play crypto casinos, this game can be a good game for you because of its simplicity. Crash at BC.Game is one of the transparent and fairest ways to get rewards online. The game was developed with an easy-to-navigate user interface and exciting features that keep the players betting. <br><br>It is an easy game to follow, and players do not need to follow certain instructions to play the game. The Crash game does not need to be downloaded, it can be played directly from a browser of a smartphone or computer.<br><br>The Crash was one of the games lined up to be released when cryptocurrency was introduced to online casinos. If you are new to this, playing and betting are actually easy. You can even master the game by just playing a couple of rounds. Before you play, understand the game interface first since everything that is happening in the game is real-time.</p><h2></h2><p style="text-align: center;"><img src="https://img2.dogcrash.game/gameinfo/image/b5/10/e2/166479437116169.jpeg" alt="" data- style=""></p><h2></h2><p style="text-align: center;"><img src="https://img2.dogcrash.game/gameinfo/image/b5/10/e2/166479437116169.jpeg" alt="" data- style=""></p><h2>Crash at BC.Game: Features</h2><p><br><br>To start playing, you will be given time to pick a betting currency. The game is not limited to Bitcoin owners. It is also available to Etherium, Litecoin, and other digital currencies. If you are new, you can bet on the entry-level amount to avoid huge losses. You need to have a strategy for predicting where the line will crash. Remember to pick a spot before the line crashes. It can crash anytime, even if the game just started, so you need to pick the spot wisely. <br><br>You will win the game once the line reaches your chosen spot or higher. Once the line crashes before it reaches your spot, you will lose. That is how easy this crypto game is. However, it is important to keep your instincts working. If you think it will crash before it reaches your chosen spot, you have the option to exit the game anytime. <br><br>The Crash is a multiplayer game where you can choose between classic and Classic and Trenball modes. In classic mode, you are allowed to cash the money after betting. The amount you can earn will depend on how many players are betting on the round. For the Trenball mode, you will be required to bet on a line color which can be a factor in your winning. </p><p><br>Understanding any gambling game can increase your chances of winning since there are no exact strategies for playing crypto casinos. There are times that you will lose and win. If you are not afraid of risking your crypto, you can bet on higher spots in Crash which means when you win, you will be able to get big. In all casino games, the player is responsible for growing or losing their money.<br><br>To play the game better, you should utilize all the features in the game. You may end the round early by using the cash-out option before the line crashes. You do not need to wait for the line before it reaches the multiplier you have bet on. Once you get the right time to end the game before the line crashes, your bet amount can be multiplied.<br><br>Remember not to make crypto casinos your only way to earn money. Play only if you want to have fun. Its algorithm is random, so you would not be able to know when you will win. <br><br>You are allowed to set any amount on the minimum and maximum amounts for betting. For beginners, you can try the game by betting on a minimum amount and see how the game goes. By betting gradually, you will learn more about the game and avoid losing money in the future. <br><br>Some players bet with a maximum amount and wait for the right time to cash out their bets before the line crashes. </p><h2><br><br><br>Crash in BC.Game: Final Verdict</h2><p><br><br>If you are looking for an alternative crypto game, Crash is a great choice because it is fast-paced, and the rounds can end quickly if you want to play a new game once you lose, which adds more excitement to the game. If you are a beginner, you can try watching several rounds first or bet on a minimum amount.<br><br>BC.Game has a user interface that provides enjoyment for every player, making it a top choice for crypto casino players. It also provides provably fair games and player privacy. This online casino website also offers promotions and limited bonuses that can increase your digital currency. <br></p>'
    },
    en = {
        thumbnail: "https://bc.imgix.net/game/image/f76d3f4a-9712-4bd1-9426-f3ab7069b6a2.png",
        fullName: "Crash",
        providerId: 16,
        providerName: "BC Originals",
        releaseTime: 1519878904e3,
        updateTime: 1661488504e3,
        categoryId: 18,
        categoryName: "Original Casino",
        seoTitle: "",
        seoDescription: "",
        seoKeywords: "",
        tags: ["BC Originals"],
        translatedTags: {
            "BC Originals": "BC Originals"
        },
        details: 'Experience the adrenaline-pumping action of Crash, a fast-paced multiplayer game at BC.GAME! Bet on RED, GREEN, or MOON, and watch the multiplier rise until it "Bangs." Use automatic cash-out for precise execution and avoid lag-induced losses. Enjoy fair gameplay, generous promotions, and the thrill of winning in this top-choice crypto casino game!',
        gameIdentity: {
            gameInfoId: 990,
            gameName: "crash",
            gameUnique: "crash"
        },
        gameUnique: "crash",
        supportMobile: !0,
        supportDemo: !1,
        disabled: !1,
        previews: [{
            mediaType: "image",
            imageURL: "https://bc.imgix.net/gameinfo/image/46/29/f3/166849875008014.jpeg",
            videoURL: null,
            direction: 0,
            attachmentId: 1249
        }, {
            mediaType: "image",
            imageURL: "https://bc.imgix.net/gameinfo/image/ee/32/c7/166917718207116.jpeg",
            videoURL: null,
            direction: 0,
            attachmentId: 1426
        }, {
            mediaType: "image",
            imageURL: "https://bc.imgix.net/gameinfo/image/12/bc/9a/16691771945513.jpeg",
            videoURL: null,
            direction: 0,
            attachmentId: 1427
        }],
        landscapePreviews: [],
        fiatList: ["USD"],
        providerInfo: {
            providerId: 16,
            logo: "https://bc.imgix.net/game/image/0bbfa209-60b6-4752-b4fb-64e18f62ab1b.png",
            logoWhite: "https://bc.imgix.net/game/image/1ee95756-ffd5-44e0-b49d-b33453d4ed54.png",
            providerName: "BC Originals",
            totalGame: 45,
            introduction: "",
            foundTime: 0,
            officialWebsite: "",
            disabled: !1,
            tags: ["3-cards baccarat", "5-cards poker", "Baccarat", "BC Originals", "BC Provably fairs", "Blackjack", "Blackjack surrender", "Bonus symbols", "Bonus wheel", "Classic", "Crash Game", "Diamonds", "Dice", "European roulette", "Expanding Symbols", "High volatility", "Keno", "Multiplayer", "Multipliers", "Oriental", "Poker", "Respins", "Roulette", "Scatter symbols", "Side bet", "Single player", "Slots", "Space", "Table Game", "Volatility Switch"],
            langSettings: [{
                language: "en",
                introduction: ""
            }]
        },
        slotsInfo: {
            stakeRange: null,
            maxWin: "1,000,000",
            subType: "BC Provably fairs",
            rtpDes: 99
        },
        gameChannel: {
            gameChannel: "1",
            gameName: "crash",
            gamePath: "crash",
            gameSocketNameSpace: "/g/c"
        }
    },
    tn = L.timeMemoize(async function() {
        return T.post("home/maintenance/list/")
    }, {
        timeout: 6e5
    }),
    nn = L.timeMemoize(async function(l, m) {
        return T.get(`home/main/event/code/${l}`)
    }, {
        timeout: 3e6,
        getKey: (l, m) => JSON.stringify(l + m)
    }),
    rn = L.timeMemoize(async function() {
        return T.get("home/main/event-list/")
    }, {
        timeout: 3e6
    });
async function on(l) {
    const {
        areaCode: m,
        distinctId: y
    } = await K(), I = await T.post("/home/rec/entry/", We({
        areaCode: m,
        distinctId: y,
        pageSize: 40,
        page: 1
    }, l));
    return I.sectionId = l.sectionId, I.pageList = I.pageList || [], I
}
const an = L.timeMemoize(on, {
        timeout: 6e5,
        getKey: l => JSON.stringify(l)
    }),
    cn = function(l, m) {
        function y() {
            return l === "hot" ? [{
                pageSize: 20,
                page: m
            }, {
                pageSize: 20,
                page: 1
            }, {
                pageSize: 20,
                page: 1
            }] : l === "slots" ? [{
                pageSize: 20,
                page: 1
            }, {
                pageSize: 20,
                page: m
            }, {
                pageSize: 20,
                page: 1
            }] : l === "live" ? [{
                pageSize: 20,
                page: 1
            }, {
                pageSize: 20,
                page: 1
            }, {
                pageSize: 20,
                page: m
            }] : [{
                pageSize: 20,
                page: 1
            }, {
                pageSize: 20,
                page: 1
            }, {
                pageSize: 20,
                page: 1
            }]
        }
        return un(y())
    },
    un = L.timeMemoize(async l => {
        const {
            areaCode: m,
            distinctId: y
        } = await K();
        return T.post("home/rec/inOne/", {
            areaCode: m,
            distinctId: y,
            pagerList: l
        })
    }, {
        timeout: 8e7,
        getKey: l => JSON.stringify(l)
    });
L.timeMemoize(async () => T.get("/home/rec/categories/"));
const sn = L.timeMemoize(async function(l) {
        const {
            areaCode: m
        } = await K();
        return T.get("/home/provider/list/", {
            params: {
                areaCode: m,
                categoryId: l
            }
        })
    }, {
        timeout: 8e7
    }),
    fn = L.timeMemoize(async function(l, m) {
        const {
            areaCode: y,
            distinctId: I
        } = await K();
        return T.post("/home/rec/tag/provider/", {
            areaCode: y,
            distinctId: I,
            sectionId: m != null ? m : "tag_provider",
            tag: l
        })
    }, {
        timeout: 8e7
    }),
    ln = L.timeMemoize(async function() {
        const {
            areaCode: l,
            distinctId: m
        } = await K();
        return T.post("/home/rec/provider/", {
            areaCode: l,
            sectionId: "casino_provider",
            distinctId: m
        })
    }, {
        timeout: 8e7
    }),
    dn = L.timeMemoize(async function(l) {
        return T.get(`/home/provider/get/?providerName=${l}`)
    }, {
        timeout: 8e7
    }),
    hn = async function(l) {
        const {
            areaCode: m
        } = await K(), y = await T.post("/home/game/my-favorite/", {
            page: l,
            pageSize: 40,
            areaCode: m
        });
        return ue(y)
    },
    mn = async function(l = 1) {
        const {
            areaCode: m
        } = await K(), y = await T.post("/home/game/recent/", {
            page: l,
            pageSize: 40,
            areaCode: m
        });
        return ue(y)
    };
L.timeMemoize(async function(l) {
    const {
        areaCode: m,
        distinctId: y
    } = await K(), I = await T.get(`/home/game/new-game/?page=${l}&areaCode=${m}&distinctId=${y}`);
    return ue(I)
}, {
    timeout: 8e7,
    getKey: l => String(l)
}), L.timeMemoize(async function(l, m) {
    const {
        areaCode: y
    } = await K(), I = await T.get(`/home/game/tag/?areaCode=${y}&tagName=${l}&pageSize=20&page=${m}`);
    return ue(I)
}, {
    timeout: 8e7,
    getKey: (l, m) => l + m
});

function ue(l, m = "") {
    return {
        sectionId: m,
        pageList: l,
        expId: "",
        logId: "",
        maxNum: 0,
        strategyId: ""
    }
}
async function gn(l, m, y) {
    try {
        return await T.post("/comment/list/", {
            gameUnique: l,
            page: m,
            pageSize: 20,
            sortField: y
        })
    } catch (I) {
        return {
            page: 1,
            pageSize: 20,
            total: 0,
            totalPage: 1,
            list: []
        }
    }
}
const yn = L.timeMemoize(async function(l, m) {
        const {
            areaCode: y
        } = await K(), I = `/home/game2/detail/?areaCode=${y}&gameUnique=${l}`;
        try {
            const U = await T.get(I);
            return Vt(I, U), U
        } catch (U) {
            return await Xt(I) || en
        }
    }, {
        timeout: 8e7,
        getKey: (l, m) => l + m
    }),
    pn = L.timeMemoize(async function(l, m) {
        try {
            const {
                areaCode: y
            } = await K();
            return await T.get(`/home/game2/introduction/?areaCode=${y}&gameUnique=${l}`)
        } catch (y) {
            return Zt
        }
    }, {
        timeout: 8e7,
        getKey: (l, m) => l + m
    }),
    vn = L.timeMemoize(async function() {
        const {
            areaCode: l
        } = await K();
        return T.post("/platform-slots/bingo-room/", {
            areaCode: l
        })
    }, {
        timeout: 8e7
    });
export {
    vn as a, ln as b, hn as c, cn as d, rn as e, mn as f, an as g, tn as h, yn as i, gn as j, pn as k, sn as l, nn as m, dn as n, fn as o
};