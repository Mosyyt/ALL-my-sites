import {
    eL as commonjsGlobal,
    eM as getDefaultExportFromCjs
} from "./chunk-b53b00e3.js";
import "./chunk-cf010ec4.js";
import "./chunk-73e80d68.js";

function _mergeNamespaces(t, e) {
    for (var r = 0; r < e.length; r++) {
        const i = e[r];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const s in i)
                if (s !== "default" && !(s in t)) {
                    const a = Object.getOwnPropertyDescriptor(i, s);
                    a && Object.defineProperty(t, s, a.get ? a : {
                        enumerable: !0,
                        get: () => i[s]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}
var lottie_svg$2 = {
    exports: {}
};
(function(module, exports) {
    typeof navigator < "u" && function(t, e) {
        module.exports = e()
    }(commonjsGlobal, function() {
        var svgNS = "http://www.w3.org/2000/svg",
            locationHref = "",
            _useWebWorker = !1,
            initialDefaultFrame = -999999,
            setWebWorker = function(t) {
                _useWebWorker = !!t
            },
            getWebWorker = function() {
                return _useWebWorker
            },
            setLocationHref = function(t) {
                locationHref = t
            },
            getLocationHref = function() {
                return locationHref
            };

        function createTag(t) {
            return document.createElement(t)
        }

        function extendPrototype(t, e) {
            var r, i = t.length,
                s;
            for (r = 0; r < i; r += 1) {
                s = t[r].prototype;
                for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e.prototype[a] = s[a])
            }
        }

        function getDescriptor(t, e) {
            return Object.getOwnPropertyDescriptor(t, e)
        }

        function createProxyFunction(t) {
            function e() {}
            return e.prototype = t, e
        }
        var audioControllerFactory = function() {
                function t(e) {
                    this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = !1
                }
                return t.prototype = {
                        addAudio: function(e) {
                            this.audios.push(e)
                        },
                        pause: function() {
                            var e, r = this.audios.length;
                            for (e = 0; e < r; e += 1) this.audios[e].pause()
                        },
                        resume: function() {
                            var e, r = this.audios.length;
                            for (e = 0; e < r; e += 1) this.audios[e].resume()
                        },
                        setRate: function(e) {
                            var r, i = this.audios.length;
                            for (r = 0; r < i; r += 1) this.audios[r].setRate(e)
                        },
                        createAudio: function(e) {
                            return this.audioFactory ? this.audioFactory(e) : window.Howl ? new window.Howl({
                                src: [e]
                            }) : {
                                isPlaying: !1,
                                play: function() {
                                    this.isPlaying = !0
                                },
                                seek: function() {
                                    this.isPlaying = !1
                                },
                                playing: function() {},
                                rate: function() {},
                                setVolume: function() {}
                            }
                        },
                        setAudioFactory: function(e) {
                            this.audioFactory = e
                        },
                        setVolume: function(e) {
                            this._volume = e, this._updateVolume()
                        },
                        mute: function() {
                            this._isMuted = !0, this._updateVolume()
                        },
                        unmute: function() {
                            this._isMuted = !1, this._updateVolume()
                        },
                        getVolume: function() {
                            return this._volume
                        },
                        _updateVolume: function() {
                            var e, r = this.audios.length;
                            for (e = 0; e < r; e += 1) this.audios[e].volume(this._volume * (this._isMuted ? 0 : 1))
                        }
                    },
                    function() {
                        return new t
                    }
            }(),
            createTypedArray = function() {
                function t(r, i) {
                    var s = 0,
                        a = [],
                        n;
                    switch (r) {
                        case "int16":
                        case "uint8c":
                            n = 1;
                            break;
                        default:
                            n = 1.1;
                            break
                    }
                    for (s = 0; s < i; s += 1) a.push(n);
                    return a
                }

                function e(r, i) {
                    return r === "float32" ? new Float32Array(i) : r === "int16" ? new Int16Array(i) : r === "uint8c" ? new Uint8ClampedArray(i) : t(r, i)
                }
                return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e : t
            }();

        function createSizedArray(t) {
            return Array.apply(null, {
                length: t
            })
        }

        function _typeof$6(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$6 = function(e) {
                return typeof e
            } : _typeof$6 = function(e) {
                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, _typeof$6(t)
        }
        var subframeEnabled = !0,
            expressionsPlugin = null,
            expressionsInterfaces = null,
            idPrefix$1 = "",
            isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            bmPow = Math.pow,
            bmSqrt = Math.sqrt,
            bmFloor = Math.floor,
            bmMin = Math.min,
            BMMath = {};
        (function() {
            var t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                e, r = t.length;
            for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]]
        })(), BMMath.random = Math.random, BMMath.abs = function(t) {
            var e = _typeof$6(t);
            if (e === "object" && t.length) {
                var r = createSizedArray(t.length),
                    i, s = t.length;
                for (i = 0; i < s; i += 1) r[i] = Math.abs(t[i]);
                return r
            }
            return Math.abs(t)
        };
        var defaultCurveSegments = 150,
            degToRads = Math.PI / 180,
            roundCorner = .5519;

        function BMEnterFrameEvent(t, e, r, i) {
            this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1
        }

        function BMCompleteEvent(t, e) {
            this.type = t, this.direction = e < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(t, e, r, i) {
            this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(t, e, r) {
            this.type = t, this.firstFrame = e, this.totalFrames = r
        }

        function BMDestroyEvent(t, e) {
            this.type = t, this.target = e
        }

        function BMRenderFrameErrorEvent(t, e) {
            this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
        }

        function BMConfigErrorEvent(t) {
            this.type = "configError", this.nativeError = t
        }
        var createElementID = function() {
            var t = 0;
            return function() {
                return t += 1, idPrefix$1 + "__lottie_element_" + t
            }
        }();

        function HSVtoRGB(t, e, r) {
            var i, s, a, n, m, h, y, v;
            switch (n = Math.floor(t * 6), m = t * 6 - n, h = r * (1 - e), y = r * (1 - m * e), v = r * (1 - (1 - m) * e), n % 6) {
                case 0:
                    i = r, s = v, a = h;
                    break;
                case 1:
                    i = y, s = r, a = h;
                    break;
                case 2:
                    i = h, s = r, a = v;
                    break;
                case 3:
                    i = h, s = y, a = r;
                    break;
                case 4:
                    i = v, s = h, a = r;
                    break;
                case 5:
                    i = r, s = h, a = y;
                    break
            }
            return [i, s, a]
        }

        function RGBtoHSV(t, e, r) {
            var i = Math.max(t, e, r),
                s = Math.min(t, e, r),
                a = i - s,
                n, m = i === 0 ? 0 : a / i,
                h = i / 255;
            switch (i) {
                case s:
                    n = 0;
                    break;
                case t:
                    n = e - r + a * (e < r ? 6 : 0), n /= 6 * a;
                    break;
                case e:
                    n = r - t + a * 2, n /= 6 * a;
                    break;
                case r:
                    n = t - e + a * 4, n /= 6 * a;
                    break
            }
            return [n, m, h]
        }

        function addSaturationToRGB(t, e) {
            var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
            return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addBrightnessToRGB(t, e) {
            var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
            return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addHueToRGB(t, e) {
            var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
            return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
        }
        var rgbToHex = function() {
                var t = [],
                    e, r;
                for (e = 0; e < 256; e += 1) r = e.toString(16), t[e] = r.length === 1 ? "0" + r : r;
                return function(i, s, a) {
                    return i < 0 && (i = 0), s < 0 && (s = 0), a < 0 && (a = 0), "#" + t[i] + t[s] + t[a]
                }
            }(),
            setSubframeEnabled = function(t) {
                subframeEnabled = !!t
            },
            getSubframeEnabled = function() {
                return subframeEnabled
            },
            setExpressionsPlugin = function(t) {
                expressionsPlugin = t
            },
            getExpressionsPlugin = function() {
                return expressionsPlugin
            },
            setExpressionInterfaces = function(t) {
                expressionsInterfaces = t
            },
            getExpressionInterfaces = function() {
                return expressionsInterfaces
            },
            setDefaultCurveSegments = function(t) {
                defaultCurveSegments = t
            },
            getDefaultCurveSegments = function() {
                return defaultCurveSegments
            },
            setIdPrefix = function(t) {
                idPrefix$1 = t
            };

        function createNS(t) {
            return document.createElementNS(svgNS, t)
        }

        function _typeof$5(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$5 = function(e) {
                return typeof e
            } : _typeof$5 = function(e) {
                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, _typeof$5(t)
        }
        var dataManager = function() {
                var t = 1,
                    e = [],
                    r, i, s = {
                        onmessage: function() {},
                        postMessage: function(c) {
                            r({
                                data: c
                            })
                        }
                    },
                    a = {
                        postMessage: function(c) {
                            s.onmessage({
                                data: c
                            })
                        }
                    };

                function n(c) {
                    if (window.Worker && window.Blob && getWebWorker()) {
                        var P = new Blob(["var _workerSelf = self; self.onmessage = ", c.toString()], {
                                type: "text/javascript"
                            }),
                            g = URL.createObjectURL(P);
                        return new Worker(g)
                    }
                    return r = c, s
                }

                function m() {
                    i || (i = n(function(c) {
                        function P() {
                            function d(D, V) {
                                var S, _, f = D.length,
                                    A, I, T, O;
                                for (_ = 0; _ < f; _ += 1)
                                    if (S = D[_], "ks" in S && !S.completed) {
                                        if (S.completed = !0, S.hasMask) {
                                            var B = S.masksProperties;
                                            for (I = B.length, A = 0; A < I; A += 1)
                                                if (B[A].pt.k.i) u(B[A].pt.k);
                                                else
                                                    for (O = B[A].pt.k.length, T = 0; T < O; T += 1) B[A].pt.k[T].s && u(B[A].pt.k[T].s[0]), B[A].pt.k[T].e && u(B[A].pt.k[T].e[0])
                                        }
                                        S.ty === 0 ? (S.layers = o(S.refId, V), d(S.layers, V)) : S.ty === 4 ? l(S.shapes) : S.ty === 5 && w(S)
                                    }
                            }

                            function x(D, V) {
                                if (D) {
                                    var S = 0,
                                        _ = D.length;
                                    for (S = 0; S < _; S += 1) D[S].t === 1 && (D[S].data.layers = o(D[S].data.refId, V), d(D[S].data.layers, V))
                                }
                            }

                            function p(D, V) {
                                for (var S = 0, _ = V.length; S < _;) {
                                    if (V[S].id === D) return V[S];
                                    S += 1
                                }
                                return null
                            }

                            function o(D, V) {
                                var S = p(D, V);
                                return S ? S.layers.__used ? JSON.parse(JSON.stringify(S.layers)) : (S.layers.__used = !0, S.layers) : null
                            }

                            function l(D) {
                                var V, S = D.length,
                                    _, f;
                                for (V = S - 1; V >= 0; V -= 1)
                                    if (D[V].ty === "sh")
                                        if (D[V].ks.k.i) u(D[V].ks.k);
                                        else
                                            for (f = D[V].ks.k.length, _ = 0; _ < f; _ += 1) D[V].ks.k[_].s && u(D[V].ks.k[_].s[0]), D[V].ks.k[_].e && u(D[V].ks.k[_].e[0]);
                                else D[V].ty === "gr" && l(D[V].it)
                            }

                            function u(D) {
                                var V, S = D.i.length;
                                for (V = 0; V < S; V += 1) D.i[V][0] += D.v[V][0], D.i[V][1] += D.v[V][1], D.o[V][0] += D.v[V][0], D.o[V][1] += D.v[V][1]
                            }

                            function b(D, V) {
                                var S = V ? V.split(".") : [100, 100, 100];
                                return D[0] > S[0] ? !0 : S[0] > D[0] ? !1 : D[1] > S[1] ? !0 : S[1] > D[1] ? !1 : D[2] > S[2] ? !0 : S[2] > D[2] ? !1 : null
                            }
                            var M = function() {
                                    var D = [4, 4, 14];

                                    function V(_) {
                                        var f = _.t.d;
                                        _.t.d = {
                                            k: [{
                                                s: f,
                                                t: 0
                                            }]
                                        }
                                    }

                                    function S(_) {
                                        var f, A = _.length;
                                        for (f = 0; f < A; f += 1) _[f].ty === 5 && V(_[f])
                                    }
                                    return function(_) {
                                        if (b(D, _.v) && (S(_.layers), _.assets)) {
                                            var f, A = _.assets.length;
                                            for (f = 0; f < A; f += 1) _.assets[f].layers && S(_.assets[f].layers)
                                        }
                                    }
                                }(),
                                F = function() {
                                    var D = [4, 7, 99];
                                    return function(V) {
                                        if (V.chars && !b(D, V.v)) {
                                            var S, _ = V.chars.length;
                                            for (S = 0; S < _; S += 1) {
                                                var f = V.chars[S];
                                                f.data && f.data.shapes && (l(f.data.shapes), f.data.ip = 0, f.data.op = 99999, f.data.st = 0, f.data.sr = 1, f.data.ks = {
                                                    p: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    s: {
                                                        k: [100, 100],
                                                        a: 0
                                                    },
                                                    a: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    r: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    o: {
                                                        k: 100,
                                                        a: 0
                                                    }
                                                }, V.chars[S].t || (f.data.shapes.push({
                                                    ty: "no"
                                                }), f.data.shapes[0].it.push({
                                                    p: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    s: {
                                                        k: [100, 100],
                                                        a: 0
                                                    },
                                                    a: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    r: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    o: {
                                                        k: 100,
                                                        a: 0
                                                    },
                                                    sk: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    sa: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    ty: "tr"
                                                })))
                                            }
                                        }
                                    }
                                }(),
                                k = function() {
                                    var D = [5, 7, 15];

                                    function V(_) {
                                        var f = _.t.p;
                                        typeof f.a == "number" && (f.a = {
                                            a: 0,
                                            k: f.a
                                        }), typeof f.p == "number" && (f.p = {
                                            a: 0,
                                            k: f.p
                                        }), typeof f.r == "number" && (f.r = {
                                            a: 0,
                                            k: f.r
                                        })
                                    }

                                    function S(_) {
                                        var f, A = _.length;
                                        for (f = 0; f < A; f += 1) _[f].ty === 5 && V(_[f])
                                    }
                                    return function(_) {
                                        if (b(D, _.v) && (S(_.layers), _.assets)) {
                                            var f, A = _.assets.length;
                                            for (f = 0; f < A; f += 1) _.assets[f].layers && S(_.assets[f].layers)
                                        }
                                    }
                                }(),
                                C = function() {
                                    var D = [4, 1, 9];

                                    function V(_) {
                                        var f, A = _.length,
                                            I, T;
                                        for (f = 0; f < A; f += 1)
                                            if (_[f].ty === "gr") V(_[f].it);
                                            else if (_[f].ty === "fl" || _[f].ty === "st")
                                            if (_[f].c.k && _[f].c.k[0].i)
                                                for (T = _[f].c.k.length, I = 0; I < T; I += 1) _[f].c.k[I].s && (_[f].c.k[I].s[0] /= 255, _[f].c.k[I].s[1] /= 255, _[f].c.k[I].s[2] /= 255, _[f].c.k[I].s[3] /= 255), _[f].c.k[I].e && (_[f].c.k[I].e[0] /= 255, _[f].c.k[I].e[1] /= 255, _[f].c.k[I].e[2] /= 255, _[f].c.k[I].e[3] /= 255);
                                            else _[f].c.k[0] /= 255, _[f].c.k[1] /= 255, _[f].c.k[2] /= 255, _[f].c.k[3] /= 255
                                    }

                                    function S(_) {
                                        var f, A = _.length;
                                        for (f = 0; f < A; f += 1) _[f].ty === 4 && V(_[f].shapes)
                                    }
                                    return function(_) {
                                        if (b(D, _.v) && (S(_.layers), _.assets)) {
                                            var f, A = _.assets.length;
                                            for (f = 0; f < A; f += 1) _.assets[f].layers && S(_.assets[f].layers)
                                        }
                                    }
                                }(),
                                R = function() {
                                    var D = [4, 4, 18];

                                    function V(_) {
                                        var f, A = _.length,
                                            I, T;
                                        for (f = A - 1; f >= 0; f -= 1)
                                            if (_[f].ty === "sh")
                                                if (_[f].ks.k.i) _[f].ks.k.c = _[f].closed;
                                                else
                                                    for (T = _[f].ks.k.length, I = 0; I < T; I += 1) _[f].ks.k[I].s && (_[f].ks.k[I].s[0].c = _[f].closed), _[f].ks.k[I].e && (_[f].ks.k[I].e[0].c = _[f].closed);
                                        else _[f].ty === "gr" && V(_[f].it)
                                    }

                                    function S(_) {
                                        var f, A, I = _.length,
                                            T, O, B, j;
                                        for (A = 0; A < I; A += 1) {
                                            if (f = _[A], f.hasMask) {
                                                var N = f.masksProperties;
                                                for (O = N.length, T = 0; T < O; T += 1)
                                                    if (N[T].pt.k.i) N[T].pt.k.c = N[T].cl;
                                                    else
                                                        for (j = N[T].pt.k.length, B = 0; B < j; B += 1) N[T].pt.k[B].s && (N[T].pt.k[B].s[0].c = N[T].cl), N[T].pt.k[B].e && (N[T].pt.k[B].e[0].c = N[T].cl)
                                            }
                                            f.ty === 4 && V(f.shapes)
                                        }
                                    }
                                    return function(_) {
                                        if (b(D, _.v) && (S(_.layers), _.assets)) {
                                            var f, A = _.assets.length;
                                            for (f = 0; f < A; f += 1) _.assets[f].layers && S(_.assets[f].layers)
                                        }
                                    }
                                }();

                            function L(D) {
                                D.__complete || (C(D), M(D), F(D), k(D), R(D), d(D.layers, D.assets), x(D.chars, D.assets), D.__complete = !0)
                            }

                            function w(D) {
                                D.t.a.length === 0 && "m" in D.t.p
                            }
                            var G = {};
                            return G.completeData = L, G.checkColors = C, G.checkChars = F, G.checkPathProperties = k, G.checkShapes = R, G.completeLayers = d, G
                        }
                        if (a.dataManager || (a.dataManager = P()), a.assetLoader || (a.assetLoader = function() {
                                function d(p) {
                                    var o = p.getResponseHeader("content-type");
                                    return o && p.responseType === "json" && o.indexOf("json") !== -1 || p.response && _typeof$5(p.response) === "object" ? p.response : p.response && typeof p.response == "string" ? JSON.parse(p.response) : p.responseText ? JSON.parse(p.responseText) : null
                                }

                                function x(p, o, l, u) {
                                    var b, M = new XMLHttpRequest;
                                    try {
                                        M.responseType = "json"
                                    } catch (F) {}
                                    M.onreadystatechange = function() {
                                        if (M.readyState === 4)
                                            if (M.status === 200) b = d(M), l(b);
                                            else try {
                                                b = d(M), l(b)
                                            } catch (F) {
                                                u && u(F)
                                            }
                                    };
                                    try {
                                        M.open(["G", "E", "T"].join(""), p, !0)
                                    } catch (F) {
                                        M.open(["G", "E", "T"].join(""), o + "/" + p, !0)
                                    }
                                    M.send()
                                }
                                return {
                                    load: x
                                }
                            }()), c.data.type === "loadAnimation") a.assetLoader.load(c.data.path, c.data.fullPath, function(d) {
                            a.dataManager.completeData(d), a.postMessage({
                                id: c.data.id,
                                payload: d,
                                status: "success"
                            })
                        }, function() {
                            a.postMessage({
                                id: c.data.id,
                                status: "error"
                            })
                        });
                        else if (c.data.type === "complete") {
                            var g = c.data.animation;
                            a.dataManager.completeData(g), a.postMessage({
                                id: c.data.id,
                                payload: g,
                                status: "success"
                            })
                        } else c.data.type === "loadData" && a.assetLoader.load(c.data.path, c.data.fullPath, function(d) {
                            a.postMessage({
                                id: c.data.id,
                                payload: d,
                                status: "success"
                            })
                        }, function() {
                            a.postMessage({
                                id: c.data.id,
                                status: "error"
                            })
                        })
                    }), i.onmessage = function(c) {
                        var P = c.data,
                            g = P.id,
                            d = e[g];
                        e[g] = null, P.status === "success" ? d.onComplete(P.payload) : d.onError && d.onError()
                    })
                }

                function h(c, P) {
                    t += 1;
                    var g = "processId_" + t;
                    return e[g] = {
                        onComplete: c,
                        onError: P
                    }, g
                }

                function y(c, P, g) {
                    m();
                    var d = h(P, g);
                    i.postMessage({
                        type: "loadAnimation",
                        path: c,
                        fullPath: window.location.origin + window.location.pathname,
                        id: d
                    })
                }

                function v(c, P, g) {
                    m();
                    var d = h(P, g);
                    i.postMessage({
                        type: "loadData",
                        path: c,
                        fullPath: window.location.origin + window.location.pathname,
                        id: d
                    })
                }

                function E(c, P, g) {
                    m();
                    var d = h(P, g);
                    i.postMessage({
                        type: "complete",
                        animation: c,
                        id: d
                    })
                }
                return {
                    loadAnimation: y,
                    loadData: v,
                    completeAnimation: E
                }
            }(),
            ImagePreloader = function() {
                var t = function() {
                    var p = createTag("canvas");
                    p.width = 1, p.height = 1;
                    var o = p.getContext("2d");
                    return o.fillStyle = "rgba(0,0,0,0)", o.fillRect(0, 0, 1, 1), p
                }();

                function e() {
                    this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }

                function r() {
                    this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }

                function i(p, o, l) {
                    var u = "";
                    if (p.e) u = p.p;
                    else if (o) {
                        var b = p.p;
                        b.indexOf("images/") !== -1 && (b = b.split("/")[1]), u = o + b
                    } else u = l, u += p.u ? p.u : "", u += p.p;
                    return u
                }

                function s(p) {
                    var o = 0,
                        l = setInterval(function() {
                            var u = p.getBBox();
                            (u.width || o > 500) && (this._imageLoaded(), clearInterval(l)), o += 1
                        }.bind(this), 50)
                }

                function a(p) {
                    var o = i(p, this.assetsPath, this.path),
                        l = createNS("image");
                    isSafari ? this.testImageLoaded(l) : l.addEventListener("load", this._imageLoaded, !1), l.addEventListener("error", function() {
                        u.img = t, this._imageLoaded()
                    }.bind(this), !1), l.setAttributeNS("http://www.w3.org/1999/xlink", "href", o), this._elementHelper.append ? this._elementHelper.append(l) : this._elementHelper.appendChild(l);
                    var u = {
                        img: l,
                        assetData: p
                    };
                    return u
                }

                function n(p) {
                    var o = i(p, this.assetsPath, this.path),
                        l = createTag("img");
                    l.crossOrigin = "anonymous", l.addEventListener("load", this._imageLoaded, !1), l.addEventListener("error", function() {
                        u.img = t, this._imageLoaded()
                    }.bind(this), !1), l.src = o;
                    var u = {
                        img: l,
                        assetData: p
                    };
                    return u
                }

                function m(p) {
                    var o = {
                            assetData: p
                        },
                        l = i(p, this.assetsPath, this.path);
                    return dataManager.loadData(l, function(u) {
                        o.img = u, this._footageLoaded()
                    }.bind(this), function() {
                        o.img = {}, this._footageLoaded()
                    }.bind(this)), o
                }

                function h(p, o) {
                    this.imagesLoadedCb = o;
                    var l, u = p.length;
                    for (l = 0; l < u; l += 1) p[l].layers || (!p[l].t || p[l].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(p[l]))) : p[l].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(p[l]))))
                }

                function y(p) {
                    this.path = p || ""
                }

                function v(p) {
                    this.assetsPath = p || ""
                }

                function E(p) {
                    for (var o = 0, l = this.images.length; o < l;) {
                        if (this.images[o].assetData === p) return this.images[o].img;
                        o += 1
                    }
                    return null
                }

                function c() {
                    this.imagesLoadedCb = null, this.images.length = 0
                }

                function P() {
                    return this.totalImages === this.loadedAssets
                }

                function g() {
                    return this.totalFootages === this.loadedFootagesCount
                }

                function d(p, o) {
                    p === "svg" ? (this._elementHelper = o, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                }

                function x() {
                    this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = m.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                }
                return x.prototype = {
                    loadAssets: h,
                    setAssetsPath: v,
                    setPath: y,
                    loadedImages: P,
                    loadedFootages: g,
                    destroy: c,
                    getAsset: E,
                    createImgData: n,
                    createImageData: a,
                    imageLoaded: e,
                    footageLoaded: r,
                    setCacheType: d
                }, x
            }();

        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function(t, e) {
                if (this._cbs[t])
                    for (var r = this._cbs[t], i = 0; i < r.length; i += 1) r[i](e)
            },
            addEventListener: function(t, e) {
                return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                    function() {
                        this.removeEventListener(t, e)
                    }.bind(this)
            },
            removeEventListener: function(t, e) {
                if (!e) this._cbs[t] = null;
                else if (this._cbs[t]) {
                    for (var r = 0, i = this._cbs[t].length; r < i;) this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, i -= 1), r += 1;
                    this._cbs[t].length || (this._cbs[t] = null)
                }
            }
        };
        var markerParser = function() {
                function t(e) {
                    for (var r = e.split(`\r
`), i = {}, s, a = 0, n = 0; n < r.length; n += 1) s = r[n].split(":"), s.length === 2 && (i[s[0]] = s[1].trim(), a += 1);
                    if (a === 0) throw new Error;
                    return i
                }
                return function(e) {
                    for (var r = [], i = 0; i < e.length; i += 1) {
                        var s = e[i],
                            a = {
                                time: s.tm,
                                duration: s.dr
                            };
                        try {
                            a.payload = JSON.parse(e[i].cm)
                        } catch (n) {
                            try {
                                a.payload = t(e[i].cm)
                            } catch (m) {
                                a.payload = {
                                    name: e[i].cm
                                }
                            }
                        }
                        r.push(a)
                    }
                    return r
                }
            }(),
            ProjectInterface = function() {
                function t(e) {
                    this.compositions.push(e)
                }
                return function() {
                    function e(r) {
                        for (var i = 0, s = this.compositions.length; i < s;) {
                            if (this.compositions[i].data && this.compositions[i].data.nm === r) return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
                            i += 1
                        }
                        return null
                    }
                    return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                }
            }(),
            renderers = {},
            registerRenderer = function(t, e) {
                renderers[t] = e
            };

        function getRenderer(t) {
            return renderers[t]
        }

        function getRegisteredRenderer() {
            if (renderers.canvas) return "canvas";
            for (var t in renderers)
                if (renderers[t]) return t;
            return ""
        }

        function _typeof$4(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$4 = function(e) {
                return typeof e
            } : _typeof$4 = function(e) {
                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, _typeof$4(t)
        }
        var AnimationItem = function() {
            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
        };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            t.animType ? e = t.animType : t.renderer && (e = t.renderer);
            var r = getRenderer(e);
            this.renderer = new r(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === !0 ? this.loop = !0 : t.loop === !1 ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = "autoplay" in t ? t.autoplay : !0, this.name = t.name ? t.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : !0, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
        }, AnimationItem.prototype.onSetupError = function() {
            this.trigger("data_failed")
        }, AnimationItem.prototype.setupAnimation = function(t) {
            dataManager.completeAnimation(t, this.configAnimation)
        }, AnimationItem.prototype.setData = function(t, e) {
            e && _typeof$4(e) !== "object" && (e = JSON.parse(e));
            var r = {
                    wrapper: t,
                    animationData: e
                },
                i = t.attributes;
            r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
            var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
            s === "false" ? r.loop = !1 : s === "true" ? r.loop = !0 : s !== "" && (r.loop = parseInt(s, 10));
            var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : i.getNamedItem("bm-autoplay") ? i.getNamedItem("bm-autoplay").value : !0;
            r.autoplay = a !== "false", r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "";
            var n = i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "";
            n === "false" && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
        }, AnimationItem.prototype.includeLayers = function(t) {
            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
            var e = this.animationData.layers,
                r, i = e.length,
                s = t.layers,
                a, n = s.length;
            for (a = 0; a < n; a += 1)
                for (r = 0; r < i;) {
                    if (e[r].id === s[a].id) {
                        e[r] = s[a];
                        break
                    }
                    r += 1
                }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                for (i = t.assets.length, r = 0; r < i; r += 1) this.animationData.assets.push(t.assets[r]);
            this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
        }, AnimationItem.prototype.onSegmentComplete = function(t) {
            this.animationData = t;
            var e = getExpressionsPlugin();
            e && e.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function() {
            var t = this.animationData.segments;
            if (!t || t.length === 0 || !this.autoloadSegments) {
                this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
                return
            }
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function() {
                this.trigger("data_failed")
            }.bind(this))
        }, AnimationItem.prototype.loadSegments = function() {
            var t = this.animationData.segments;
            t || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function() {
            this.trigger("loaded_images"), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function() {
            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function(t) {
            if (this.renderer) try {
                this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
            } catch (e) {
                this.triggerConfigError(e)
            }
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function() {
            if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
                this.isLoaded = !0;
                var t = getExpressionsPlugin();
                t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                    this.trigger("DOMLoaded")
                }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
            }
        }, AnimationItem.prototype.resize = function(t, e) {
            var r = typeof t == "number" ? t : void 0,
                i = typeof e == "number" ? e : void 0;
            this.renderer.updateContainerSize(r, i)
        }, AnimationItem.prototype.setSubframe = function(t) {
            this.isSubframeEnabled = !!t
        }, AnimationItem.prototype.gotoFrame = function() {
            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
        }, AnimationItem.prototype.renderFrame = function() {
            if (!(this.isLoaded === !1 || !this.renderer)) try {
                this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
            } catch (t) {
                this.triggerRenderFrameError(t)
            }
        }, AnimationItem.prototype.play = function(t) {
            t && this.name !== t || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function(t) {
            t && this.name !== t || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
        }, AnimationItem.prototype.togglePause = function(t) {
            t && this.name !== t || (this.isPaused === !0 ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function(t) {
            t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.getMarkerData = function(t) {
            for (var e, r = 0; r < this.markers.length; r += 1)
                if (e = this.markers[r], e.payload && e.payload.name === t) return e;
            return null
        }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
            if (!(r && this.name !== r)) {
                var i = Number(t);
                if (isNaN(i)) {
                    var s = this.getMarkerData(t);
                    s && this.goToAndStop(s.time, !0)
                } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                this.pause()
            }
        }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
            if (!(r && this.name !== r)) {
                var i = Number(t);
                if (isNaN(i)) {
                    var s = this.getMarkerData(t);
                    s && (s.duration ? this.playSegments([s.time, s.time + s.duration], !0) : this.goToAndStop(s.time, !0))
                } else this.goToAndStop(i, e, r);
                this.play()
            }
        }, AnimationItem.prototype.advanceTime = function(t) {
            if (!(this.isPaused === !0 || this.isLoaded === !1)) {
                var e = this.currentRawFrame + t * this.frameModifier,
                    r = !1;
                e >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (r = !0, e = 0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
            }
        }, AnimationItem.prototype.adjustSegment = function(t, e) {
            this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function(t, e) {
            var r = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, !0)
        }, AnimationItem.prototype.playSegments = function(t, e) {
            if (e && (this.segments.length = 0), _typeof$4(t[0]) === "object") {
                var r, i = t.length;
                for (r = 0; r < i; r += 1) this.segments.push(t[r])
            } else this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function(t) {
            this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function(t) {
            return this.segments.length ? (this.adjustSegment(this.segments.shift(), t), !0) : !1
        }, AnimationItem.prototype.destroy = function(t) {
            t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
            this.currentRawFrame = t, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function(t) {
            this.playSpeed = t, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function(t) {
            this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.setLoop = function(t) {
            this.loop = t
        }, AnimationItem.prototype.setVolume = function(t, e) {
            e && this.name !== e || this.audioController.setVolume(t)
        }, AnimationItem.prototype.getVolume = function() {
            return this.audioController.getVolume()
        }, AnimationItem.prototype.mute = function(t) {
            t && this.name !== t || this.audioController.mute()
        }, AnimationItem.prototype.unmute = function(t) {
            t && this.name !== t || this.audioController.unmute()
        }, AnimationItem.prototype.updaFrameModifier = function() {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
        }, AnimationItem.prototype.getPath = function() {
            return this.path
        }, AnimationItem.prototype.getAssetsPath = function(t) {
            var e = "";
            if (t.e) e = t.p;
            else if (this.assetsPath) {
                var r = t.p;
                r.indexOf("images/") !== -1 && (r = r.split("/")[1]), e = this.assetsPath + r
            } else e = this.path, e += t.u ? t.u : "", e += t.p;
            return e
        }, AnimationItem.prototype.getAssetData = function(t) {
            for (var e = 0, r = this.assets.length; e < r;) {
                if (t === this.assets[e].id) return this.assets[e];
                e += 1
            }
            return null
        }, AnimationItem.prototype.hide = function() {
            this.renderer.hide()
        }, AnimationItem.prototype.show = function() {
            this.renderer.show()
        }, AnimationItem.prototype.getDuration = function(t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.updateDocumentData = function(t, e, r) {
            try {
                var i = this.renderer.getElementByPath(t);
                i.updateDocumentData(e, r)
            } catch (s) {}
        }, AnimationItem.prototype.trigger = function(t) {
            if (this._cbs && this._cbs[t]) switch (t) {
                case "enterFrame":
                    this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                case "drawnFrame":
                    this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                    break;
                case "loopComplete":
                    this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t, this));
                    break;
                default:
                    this.triggerEvent(t)
            }
            t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
            var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        }, AnimationItem.prototype.triggerConfigError = function(t) {
            var e = new BMConfigErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        };
        var animationManager = function() {
                var t = {},
                    e = [],
                    r = 0,
                    i = 0,
                    s = 0,
                    a = !0,
                    n = !1;

                function m(S) {
                    for (var _ = 0, f = S.target; _ < i;) e[_].animation === f && (e.splice(_, 1), _ -= 1, i -= 1, f.isPaused || E()), _ += 1
                }

                function h(S, _) {
                    if (!S) return null;
                    for (var f = 0; f < i;) {
                        if (e[f].elem === S && e[f].elem !== null) return e[f].animation;
                        f += 1
                    }
                    var A = new AnimationItem;
                    return c(A, S), A.setData(S, _), A
                }

                function y() {
                    var S, _ = e.length,
                        f = [];
                    for (S = 0; S < _; S += 1) f.push(e[S].animation);
                    return f
                }

                function v() {
                    s += 1, R()
                }

                function E() {
                    s -= 1
                }

                function c(S, _) {
                    S.addEventListener("destroy", m), S.addEventListener("_active", v), S.addEventListener("_idle", E), e.push({
                        elem: _,
                        animation: S
                    }), i += 1
                }

                function P(S) {
                    var _ = new AnimationItem;
                    return c(_, null), _.setParams(S), _
                }

                function g(S, _) {
                    var f;
                    for (f = 0; f < i; f += 1) e[f].animation.setSpeed(S, _)
                }

                function d(S, _) {
                    var f;
                    for (f = 0; f < i; f += 1) e[f].animation.setDirection(S, _)
                }

                function x(S) {
                    var _;
                    for (_ = 0; _ < i; _ += 1) e[_].animation.play(S)
                }

                function p(S) {
                    var _ = S - r,
                        f;
                    for (f = 0; f < i; f += 1) e[f].animation.advanceTime(_);
                    r = S, s && !n ? window.requestAnimationFrame(p) : a = !0
                }

                function o(S) {
                    r = S, window.requestAnimationFrame(p)
                }

                function l(S) {
                    var _;
                    for (_ = 0; _ < i; _ += 1) e[_].animation.pause(S)
                }

                function u(S, _, f) {
                    var A;
                    for (A = 0; A < i; A += 1) e[A].animation.goToAndStop(S, _, f)
                }

                function b(S) {
                    var _;
                    for (_ = 0; _ < i; _ += 1) e[_].animation.stop(S)
                }

                function M(S) {
                    var _;
                    for (_ = 0; _ < i; _ += 1) e[_].animation.togglePause(S)
                }

                function F(S) {
                    var _;
                    for (_ = i - 1; _ >= 0; _ -= 1) e[_].animation.destroy(S)
                }

                function k(S, _, f) {
                    var A = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                        I, T = A.length;
                    for (I = 0; I < T; I += 1) f && A[I].setAttribute("data-bm-type", f), h(A[I], S);
                    if (_ && T === 0) {
                        f || (f = "svg");
                        var O = document.getElementsByTagName("body")[0];
                        O.innerText = "";
                        var B = createTag("div");
                        B.style.width = "100%", B.style.height = "100%", B.setAttribute("data-bm-type", f), O.appendChild(B), h(B, S)
                    }
                }

                function C() {
                    var S;
                    for (S = 0; S < i; S += 1) e[S].animation.resize()
                }

                function R() {
                    !n && s && a && (window.requestAnimationFrame(o), a = !1)
                }

                function L() {
                    n = !0
                }

                function w() {
                    n = !1, R()
                }

                function G(S, _) {
                    var f;
                    for (f = 0; f < i; f += 1) e[f].animation.setVolume(S, _)
                }

                function D(S) {
                    var _;
                    for (_ = 0; _ < i; _ += 1) e[_].animation.mute(S)
                }

                function V(S) {
                    var _;
                    for (_ = 0; _ < i; _ += 1) e[_].animation.unmute(S)
                }
                return t.registerAnimation = h, t.loadAnimation = P, t.setSpeed = g, t.setDirection = d, t.play = x, t.pause = l, t.stop = b, t.togglePause = M, t.searchAnimations = k, t.resize = C, t.goToAndStop = u, t.destroy = F, t.freeze = L, t.unfreeze = w, t.setVolume = G, t.mute = D, t.unmute = V, t.getRegisteredAnimations = y, t
            }(),
            BezierFactory = function() {
                var t = {};
                t.getBezierEasing = r;
                var e = {};

                function r(o, l, u, b, M) {
                    var F = M || ("bez_" + o + "_" + l + "_" + u + "_" + b).replace(/\./g, "p");
                    if (e[F]) return e[F];
                    var k = new p([o, l, u, b]);
                    return e[F] = k, k
                }
                var i = 4,
                    s = .001,
                    a = 1e-7,
                    n = 10,
                    m = 11,
                    h = 1 / (m - 1),
                    y = typeof Float32Array == "function";

                function v(o, l) {
                    return 1 - 3 * l + 3 * o
                }

                function E(o, l) {
                    return 3 * l - 6 * o
                }

                function c(o) {
                    return 3 * o
                }

                function P(o, l, u) {
                    return ((v(l, u) * o + E(l, u)) * o + c(l)) * o
                }

                function g(o, l, u) {
                    return 3 * v(l, u) * o * o + 2 * E(l, u) * o + c(l)
                }

                function d(o, l, u, b, M) {
                    var F, k, C = 0;
                    do k = l + (u - l) / 2, F = P(k, b, M) - o, F > 0 ? u = k : l = k; while (Math.abs(F) > a && ++C < n);
                    return k
                }

                function x(o, l, u, b) {
                    for (var M = 0; M < i; ++M) {
                        var F = g(l, u, b);
                        if (F === 0) return l;
                        var k = P(l, u, b) - o;
                        l -= k / F
                    }
                    return l
                }

                function p(o) {
                    this._p = o, this._mSampleValues = y ? new Float32Array(m) : new Array(m), this._precomputed = !1, this.get = this.get.bind(this)
                }
                return p.prototype = {
                    get: function(o) {
                        var l = this._p[0],
                            u = this._p[1],
                            b = this._p[2],
                            M = this._p[3];
                        return this._precomputed || this._precompute(), l === u && b === M ? o : o === 0 ? 0 : o === 1 ? 1 : P(this._getTForX(o), u, M)
                    },
                    _precompute: function() {
                        var o = this._p[0],
                            l = this._p[1],
                            u = this._p[2],
                            b = this._p[3];
                        this._precomputed = !0, (o !== l || u !== b) && this._calcSampleValues()
                    },
                    _calcSampleValues: function() {
                        for (var o = this._p[0], l = this._p[2], u = 0; u < m; ++u) this._mSampleValues[u] = P(u * h, o, l)
                    },
                    _getTForX: function(o) {
                        for (var l = this._p[0], u = this._p[2], b = this._mSampleValues, M = 0, F = 1, k = m - 1; F !== k && b[F] <= o; ++F) M += h;
                        --F;
                        var C = (o - b[F]) / (b[F + 1] - b[F]),
                            R = M + C * h,
                            L = g(R, l, u);
                        return L >= s ? x(o, R, l, u) : L === 0 ? R : d(o, M, M + h, l, u)
                    }
                }, t
            }(),
            pooling = function() {
                function t(e) {
                    return e.concat(createSizedArray(e.length))
                }
                return {
                    double: t
                }
            }(),
            poolFactory = function() {
                return function(t, e, r) {
                    var i = 0,
                        s = t,
                        a = createSizedArray(s),
                        n = {
                            newElement: m,
                            release: h
                        };

                    function m() {
                        var y;
                        return i ? (i -= 1, y = a[i]) : y = e(), y
                    }

                    function h(y) {
                        i === s && (a = pooling.double(a), s *= 2), r && r(y), a[i] = y, i += 1
                    }
                    return n
                }
            }(),
            bezierLengthPool = function() {
                function t() {
                    return {
                        addedLength: 0,
                        percents: createTypedArray("float32", getDefaultCurveSegments()),
                        lengths: createTypedArray("float32", getDefaultCurveSegments())
                    }
                }
                return poolFactory(8, t)
            }(),
            segmentsLengthPool = function() {
                function t() {
                    return {
                        lengths: [],
                        totalLength: 0
                    }
                }

                function e(r) {
                    var i, s = r.lengths.length;
                    for (i = 0; i < s; i += 1) bezierLengthPool.release(r.lengths[i]);
                    r.lengths.length = 0
                }
                return poolFactory(8, t, e)
            }();

        function bezFunction() {
            var t = Math;

            function e(c, P, g, d, x, p) {
                var o = c * d + P * x + g * p - x * d - p * c - g * P;
                return o > -.001 && o < .001
            }

            function r(c, P, g, d, x, p, o, l, u) {
                if (g === 0 && p === 0 && u === 0) return e(c, P, d, x, o, l);
                var b = t.sqrt(t.pow(d - c, 2) + t.pow(x - P, 2) + t.pow(p - g, 2)),
                    M = t.sqrt(t.pow(o - c, 2) + t.pow(l - P, 2) + t.pow(u - g, 2)),
                    F = t.sqrt(t.pow(o - d, 2) + t.pow(l - x, 2) + t.pow(u - p, 2)),
                    k;
                return b > M ? b > F ? k = b - M - F : k = F - M - b : F > M ? k = F - M - b : k = M - b - F, k > -1e-4 && k < 1e-4
            }
            var i = function() {
                return function(c, P, g, d) {
                    var x = getDefaultCurveSegments(),
                        p, o, l, u, b, M = 0,
                        F, k = [],
                        C = [],
                        R = bezierLengthPool.newElement();
                    for (l = g.length, p = 0; p < x; p += 1) {
                        for (b = p / (x - 1), F = 0, o = 0; o < l; o += 1) u = bmPow(1 - b, 3) * c[o] + 3 * bmPow(1 - b, 2) * b * g[o] + 3 * (1 - b) * bmPow(b, 2) * d[o] + bmPow(b, 3) * P[o], k[o] = u, C[o] !== null && (F += bmPow(k[o] - C[o], 2)), C[o] = k[o];
                        F && (F = bmSqrt(F), M += F), R.percents[p] = b, R.lengths[p] = M
                    }
                    return R.addedLength = M, R
                }
            }();

            function s(c) {
                var P = segmentsLengthPool.newElement(),
                    g = c.c,
                    d = c.v,
                    x = c.o,
                    p = c.i,
                    o, l = c._length,
                    u = P.lengths,
                    b = 0;
                for (o = 0; o < l - 1; o += 1) u[o] = i(d[o], d[o + 1], x[o], p[o + 1]), b += u[o].addedLength;
                return g && l && (u[o] = i(d[o], d[0], x[o], p[0]), b += u[o].addedLength), P.totalLength = b, P
            }

            function a(c) {
                this.segmentLength = 0, this.points = new Array(c)
            }

            function n(c, P) {
                this.partialLength = c, this.point = P
            }
            var m = function() {
                var c = {};
                return function(P, g, d, x) {
                    var p = (P[0] + "_" + P[1] + "_" + g[0] + "_" + g[1] + "_" + d[0] + "_" + d[1] + "_" + x[0] + "_" + x[1]).replace(/\./g, "p");
                    if (!c[p]) {
                        var o = getDefaultCurveSegments(),
                            l, u, b, M, F, k = 0,
                            C, R, L = null;
                        P.length === 2 && (P[0] !== g[0] || P[1] !== g[1]) && e(P[0], P[1], g[0], g[1], P[0] + d[0], P[1] + d[1]) && e(P[0], P[1], g[0], g[1], g[0] + x[0], g[1] + x[1]) && (o = 2);
                        var w = new a(o);
                        for (b = d.length, l = 0; l < o; l += 1) {
                            for (R = createSizedArray(b), F = l / (o - 1), C = 0, u = 0; u < b; u += 1) M = bmPow(1 - F, 3) * P[u] + 3 * bmPow(1 - F, 2) * F * (P[u] + d[u]) + 3 * (1 - F) * bmPow(F, 2) * (g[u] + x[u]) + bmPow(F, 3) * g[u], R[u] = M, L !== null && (C += bmPow(R[u] - L[u], 2));
                            C = bmSqrt(C), k += C, w.points[l] = new n(C, R), L = R
                        }
                        w.segmentLength = k, c[p] = w
                    }
                    return c[p]
                }
            }();

            function h(c, P) {
                var g = P.percents,
                    d = P.lengths,
                    x = g.length,
                    p = bmFloor((x - 1) * c),
                    o = c * P.addedLength,
                    l = 0;
                if (p === x - 1 || p === 0 || o === d[p]) return g[p];
                for (var u = d[p] > o ? -1 : 1, b = !0; b;)
                    if (d[p] <= o && d[p + 1] > o ? (l = (o - d[p]) / (d[p + 1] - d[p]), b = !1) : p += u, p < 0 || p >= x - 1) {
                        if (p === x - 1) return g[p];
                        b = !1
                    }
                return g[p] + (g[p + 1] - g[p]) * l
            }

            function y(c, P, g, d, x, p) {
                var o = h(x, p),
                    l = 1 - o,
                    u = t.round((l * l * l * c[0] + (o * l * l + l * o * l + l * l * o) * g[0] + (o * o * l + l * o * o + o * l * o) * d[0] + o * o * o * P[0]) * 1e3) / 1e3,
                    b = t.round((l * l * l * c[1] + (o * l * l + l * o * l + l * l * o) * g[1] + (o * o * l + l * o * o + o * l * o) * d[1] + o * o * o * P[1]) * 1e3) / 1e3;
                return [u, b]
            }
            var v = createTypedArray("float32", 8);

            function E(c, P, g, d, x, p, o) {
                x < 0 ? x = 0 : x > 1 && (x = 1);
                var l = h(x, o);
                p = p > 1 ? 1 : p;
                var u = h(p, o),
                    b, M = c.length,
                    F = 1 - l,
                    k = 1 - u,
                    C = F * F * F,
                    R = l * F * F * 3,
                    L = l * l * F * 3,
                    w = l * l * l,
                    G = F * F * k,
                    D = l * F * k + F * l * k + F * F * u,
                    V = l * l * k + F * l * u + l * F * u,
                    S = l * l * u,
                    _ = F * k * k,
                    f = l * k * k + F * u * k + F * k * u,
                    A = l * u * k + F * u * u + l * k * u,
                    I = l * u * u,
                    T = k * k * k,
                    O = u * k * k + k * u * k + k * k * u,
                    B = u * u * k + k * u * u + u * k * u,
                    j = u * u * u;
                for (b = 0; b < M; b += 1) v[b * 4] = t.round((C * c[b] + R * g[b] + L * d[b] + w * P[b]) * 1e3) / 1e3, v[b * 4 + 1] = t.round((G * c[b] + D * g[b] + V * d[b] + S * P[b]) * 1e3) / 1e3, v[b * 4 + 2] = t.round((_ * c[b] + f * g[b] + A * d[b] + I * P[b]) * 1e3) / 1e3, v[b * 4 + 3] = t.round((T * c[b] + O * g[b] + B * d[b] + j * P[b]) * 1e3) / 1e3;
                return v
            }
            return {
                getSegmentsLength: s,
                getNewSegment: E,
                getPointInSegment: y,
                buildBezierData: m,
                pointOnLine2D: e,
                pointOnLine3D: r
            }
        }
        var bez = bezFunction(),
            initFrame = initialDefaultFrame,
            mathAbs = Math.abs;

        function interpolateValue(t, e) {
            var r = this.offsetTime,
                i;
            this.propType === "multidimensional" && (i = createTypedArray("float32", this.pv.length));
            for (var s = e.lastIndex, a = s, n = this.keyframes.length - 1, m = !0, h, y, v; m;) {
                if (h = this.keyframes[a], y = this.keyframes[a + 1], a === n - 1 && t >= y.t - r) {
                    h.h && (h = y), s = 0;
                    break
                }
                if (y.t - r > t) {
                    s = a;
                    break
                }
                a < n - 1 ? a += 1 : (s = 0, m = !1)
            }
            v = this.keyframesMetadata[a] || {};
            var E, c, P, g, d, x, p = y.t - r,
                o = h.t - r,
                l;
            if (h.to) {
                v.bezierData || (v.bezierData = bez.buildBezierData(h.s, y.s || h.e, h.to, h.ti));
                var u = v.bezierData;
                if (t >= p || t < o) {
                    var b = t >= p ? u.points.length - 1 : 0;
                    for (c = u.points[b].point.length, E = 0; E < c; E += 1) i[E] = u.points[b].point[E]
                } else {
                    v.__fnct ? x = v.__fnct : (x = BezierFactory.getBezierEasing(h.o.x, h.o.y, h.i.x, h.i.y, h.n).get, v.__fnct = x), P = x((t - o) / (p - o));
                    var M = u.segmentLength * P,
                        F, k = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastAddedLength : 0;
                    for (d = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastPoint : 0, m = !0, g = u.points.length; m;) {
                        if (k += u.points[d].partialLength, M === 0 || P === 0 || d === u.points.length - 1) {
                            for (c = u.points[d].point.length, E = 0; E < c; E += 1) i[E] = u.points[d].point[E];
                            break
                        } else if (M >= k && M < k + u.points[d + 1].partialLength) {
                            for (F = (M - k) / u.points[d + 1].partialLength, c = u.points[d].point.length, E = 0; E < c; E += 1) i[E] = u.points[d].point[E] + (u.points[d + 1].point[E] - u.points[d].point[E]) * F;
                            break
                        }
                        d < g - 1 ? d += 1 : m = !1
                    }
                    e._lastPoint = d, e._lastAddedLength = k - u.points[d].partialLength, e._lastKeyframeIndex = a
                }
            } else {
                var C, R, L, w, G;
                if (n = h.s.length, l = y.s || h.e, this.sh && h.h !== 1)
                    if (t >= p) i[0] = l[0], i[1] = l[1], i[2] = l[2];
                    else if (t <= o) i[0] = h.s[0], i[1] = h.s[1], i[2] = h.s[2];
                else {
                    var D = createQuaternion(h.s),
                        V = createQuaternion(l),
                        S = (t - o) / (p - o);
                    quaternionToEuler(i, slerp(D, V, S))
                } else
                    for (a = 0; a < n; a += 1) h.h !== 1 && (t >= p ? P = 1 : t < o ? P = 0 : (h.o.x.constructor === Array ? (v.__fnct || (v.__fnct = []), v.__fnct[a] ? x = v.__fnct[a] : (C = h.o.x[a] === void 0 ? h.o.x[0] : h.o.x[a], R = h.o.y[a] === void 0 ? h.o.y[0] : h.o.y[a], L = h.i.x[a] === void 0 ? h.i.x[0] : h.i.x[a], w = h.i.y[a] === void 0 ? h.i.y[0] : h.i.y[a], x = BezierFactory.getBezierEasing(C, R, L, w).get, v.__fnct[a] = x)) : v.__fnct ? x = v.__fnct : (C = h.o.x, R = h.o.y, L = h.i.x, w = h.i.y, x = BezierFactory.getBezierEasing(C, R, L, w).get, h.keyframeMetadata = x), P = x((t - o) / (p - o)))), l = y.s || h.e, G = h.h === 1 ? h.s[a] : h.s[a] + (l[a] - h.s[a]) * P, this.propType === "multidimensional" ? i[a] = G : i = G
            }
            return e.lastIndex = s, i
        }

        function slerp(t, e, r) {
            var i = [],
                s = t[0],
                a = t[1],
                n = t[2],
                m = t[3],
                h = e[0],
                y = e[1],
                v = e[2],
                E = e[3],
                c, P, g, d, x;
            return P = s * h + a * y + n * v + m * E, P < 0 && (P = -P, h = -h, y = -y, v = -v, E = -E), 1 - P > 1e-6 ? (c = Math.acos(P), g = Math.sin(c), d = Math.sin((1 - r) * c) / g, x = Math.sin(r * c) / g) : (d = 1 - r, x = r), i[0] = d * s + x * h, i[1] = d * a + x * y, i[2] = d * n + x * v, i[3] = d * m + x * E, i
        }

        function quaternionToEuler(t, e) {
            var r = e[0],
                i = e[1],
                s = e[2],
                a = e[3],
                n = Math.atan2(2 * i * a - 2 * r * s, 1 - 2 * i * i - 2 * s * s),
                m = Math.asin(2 * r * i + 2 * s * a),
                h = Math.atan2(2 * r * a - 2 * i * s, 1 - 2 * r * r - 2 * s * s);
            t[0] = n / degToRads, t[1] = m / degToRads, t[2] = h / degToRads
        }

        function createQuaternion(t) {
            var e = t[0] * degToRads,
                r = t[1] * degToRads,
                i = t[2] * degToRads,
                s = Math.cos(e / 2),
                a = Math.cos(r / 2),
                n = Math.cos(i / 2),
                m = Math.sin(e / 2),
                h = Math.sin(r / 2),
                y = Math.sin(i / 2),
                v = s * a * n - m * h * y,
                E = m * h * n + s * a * y,
                c = m * a * n + s * h * y,
                P = s * h * n - m * a * y;
            return [E, c, P, v]
        }

        function getValueAtCurrentTime() {
            var t = this.comp.renderedFrame - this.offsetTime,
                e = this.keyframes[0].t - this.offsetTime,
                r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && t >= r || this._caching.lastFrame < e && t < e))) {
                this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                var i = this.interpolateValue(t, this._caching);
                this.pv = i
            }
            return this._caching.lastFrame = t, this.pv
        }

        function setVValue(t) {
            var e;
            if (this.propType === "unidimensional") e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
            else
                for (var r = 0, i = this.v.length; r < i;) e = t[r] * this.mult, mathAbs(this.v[r] - e) > 1e-5 && (this.v[r] = e, this._mdf = !0), r += 1
        }

        function processEffectsSequence() {
            if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
                if (this.lock) {
                    this.setVValue(this.pv);
                    return
                }
                this.lock = !0, this._mdf = this._isFirstFrame;
                var t, e = this.effectsSequence.length,
                    r = this.kf ? this.pv : this.data.k;
                for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }

        function addEffect(t) {
            this.effectsSequence.push(t), this.container.addDynamicProperty(this)
        }

        function ValueProperty(t, e, r, i) {
            this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function MultiDimensionalProperty(t, e, r, i) {
            this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
            var s, a = e.k.length;
            for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), s = 0; s < a; s += 1) this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function KeyframedValueProperty(t, e, r, i) {
            this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1
            }, this.k = !0, this.kf = !0, this.data = e, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
        }

        function KeyframedMultidimensionalProperty(t, e, r, i) {
            this.propType = "multidimensional";
            var s, a = e.k.length,
                n, m, h, y;
            for (s = 0; s < a - 1; s += 1) e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (n = e.k[s].s, m = e.k[s + 1].s, h = e.k[s].to, y = e.k[s].ti, (n.length === 2 && !(n[0] === m[0] && n[1] === m[1]) && bez.pointOnLine2D(n[0], n[1], m[0], m[1], n[0] + h[0], n[1] + h[1]) && bez.pointOnLine2D(n[0], n[1], m[0], m[1], m[0] + y[0], m[1] + y[1]) || n.length === 3 && !(n[0] === m[0] && n[1] === m[1] && n[2] === m[2]) && bez.pointOnLine3D(n[0], n[1], n[2], m[0], m[1], m[2], n[0] + h[0], n[1] + h[1], n[2] + h[2]) && bez.pointOnLine3D(n[0], n[1], n[2], m[0], m[1], m[2], m[0] + y[0], m[1] + y[1], m[2] + y[2])) && (e.k[s].to = null, e.k[s].ti = null), n[0] === m[0] && n[1] === m[1] && h[0] === 0 && h[1] === 0 && y[0] === 0 && y[1] === 0 && (n.length === 2 || n[2] === m[2] && h[2] === 0 && y[2] === 0) && (e.k[s].to = null, e.k[s].ti = null));
            this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
            var v = e.k[0].s.length;
            for (this.v = createTypedArray("float32", v), this.pv = createTypedArray("float32", v), s = 0; s < v; s += 1) this.v[s] = initFrame, this.pv[s] = initFrame;
            this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: createTypedArray("float32", v)
            }, this.addEffect = addEffect
        }
        var PropertyFactory = function() {
            function t(r, i, s, a, n) {
                i.sid && (i = r.globalData.slotManager.getProp(i));
                var m;
                if (!i.k.length) m = new ValueProperty(r, i, a, n);
                else if (typeof i.k[0] == "number") m = new MultiDimensionalProperty(r, i, a, n);
                else switch (s) {
                    case 0:
                        m = new KeyframedValueProperty(r, i, a, n);
                        break;
                    case 1:
                        m = new KeyframedMultidimensionalProperty(r, i, a, n);
                        break
                }
                return m.effectsSequence.length && n.addDynamicProperty(m), m
            }
            var e = {
                getProp: t
            };
            return e
        }();

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
            addDynamicProperty: function(t) {
                this.dynamicProperties.indexOf(t) === -1 && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
            },
            iterateDynamicProperties: function() {
                this._mdf = !1;
                var t, e = this.dynamicProperties.length;
                for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
            },
            initDynamicPropertyContainer: function(t) {
                this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
            }
        };
        var pointPool = function() {
            function t() {
                return createTypedArray("float32", 2)
            }
            return poolFactory(8, t)
        }();

        function ShapePath() {
            this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function(t, e) {
            this.c = t, this.setLength(e);
            for (var r = 0; r < e;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
        }, ShapePath.prototype.setLength = function(t) {
            for (; this._maxLength < t;) this.doubleArrayLength();
            this._length = t
        }, ShapePath.prototype.doubleArrayLength = function() {
            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function(t, e, r, i, s) {
            var a;
            switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
                case "v":
                    a = this.v;
                    break;
                case "i":
                    a = this.i;
                    break;
                case "o":
                    a = this.o;
                    break;
                default:
                    a = [];
                    break
            }(!a[i] || a[i] && !s) && (a[i] = pointPool.newElement()), a[i][0] = t, a[i][1] = e
        }, ShapePath.prototype.setTripleAt = function(t, e, r, i, s, a, n, m) {
            this.setXYAt(t, e, "v", n, m), this.setXYAt(r, i, "o", n, m), this.setXYAt(s, a, "i", n, m)
        }, ShapePath.prototype.reverse = function() {
            var t = new ShapePath;
            t.setPathData(this.c, this._length);
            var e = this.v,
                r = this.o,
                i = this.i,
                s = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), s = 1);
            var a = this._length - 1,
                n = this._length,
                m;
            for (m = s; m < n; m += 1) t.setTripleAt(e[a][0], e[a][1], i[a][0], i[a][1], r[a][0], r[a][1], m, !1), a -= 1;
            return t
        }, ShapePath.prototype.length = function() {
            return this._length
        };
        var shapePool = function() {
            function t() {
                return new ShapePath
            }

            function e(s) {
                var a = s._length,
                    n;
                for (n = 0; n < a; n += 1) pointPool.release(s.v[n]), pointPool.release(s.i[n]), pointPool.release(s.o[n]), s.v[n] = null, s.i[n] = null, s.o[n] = null;
                s._length = 0, s.c = !1
            }

            function r(s) {
                var a = i.newElement(),
                    n, m = s._length === void 0 ? s.v.length : s._length;
                for (a.setLength(m), a.c = s.c, n = 0; n < m; n += 1) a.setTripleAt(s.v[n][0], s.v[n][1], s.o[n][0], s.o[n][1], s.i[n][0], s.i[n][1], n);
                return a
            }
            var i = poolFactory(4, t, e);
            return i.clone = r, i
        }();

        function ShapeCollection() {
            this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }
        ShapeCollection.prototype.addShape = function(t) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function() {
            var t;
            for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
            this._length = 0
        };
        var shapeCollectionPool = function() {
                var t = {
                        newShapeCollection: s,
                        release: a
                    },
                    e = 0,
                    r = 4,
                    i = createSizedArray(r);

                function s() {
                    var n;
                    return e ? (e -= 1, n = i[e]) : n = new ShapeCollection, n
                }

                function a(n) {
                    var m, h = n._length;
                    for (m = 0; m < h; m += 1) shapePool.release(n.shapes[m]);
                    n._length = 0, e === r && (i = pooling.double(i), r *= 2), i[e] = n, e += 1
                }
                return t
            }(),
            ShapePropertyFactory = function() {
                var t = -999999;

                function e(p, o, l) {
                    var u = l.lastIndex,
                        b, M, F, k, C, R, L, w, G, D = this.keyframes;
                    if (p < D[0].t - this.offsetTime) b = D[0].s[0], F = !0, u = 0;
                    else if (p >= D[D.length - 1].t - this.offsetTime) b = D[D.length - 1].s ? D[D.length - 1].s[0] : D[D.length - 2].e[0], F = !0;
                    else {
                        for (var V = u, S = D.length - 1, _ = !0, f, A, I; _ && (f = D[V], A = D[V + 1], !(A.t - this.offsetTime > p));) V < S - 1 ? V += 1 : _ = !1;
                        if (I = this.keyframesMetadata[V] || {}, F = f.h === 1, u = V, !F) {
                            if (p >= A.t - this.offsetTime) w = 1;
                            else if (p < f.t - this.offsetTime) w = 0;
                            else {
                                var T;
                                I.__fnct ? T = I.__fnct : (T = BezierFactory.getBezierEasing(f.o.x, f.o.y, f.i.x, f.i.y).get, I.__fnct = T), w = T((p - (f.t - this.offsetTime)) / (A.t - this.offsetTime - (f.t - this.offsetTime)))
                            }
                            M = A.s ? A.s[0] : f.e[0]
                        }
                        b = f.s[0]
                    }
                    for (R = o._length, L = b.i[0].length, l.lastIndex = u, k = 0; k < R; k += 1)
                        for (C = 0; C < L; C += 1) G = F ? b.i[k][C] : b.i[k][C] + (M.i[k][C] - b.i[k][C]) * w, o.i[k][C] = G, G = F ? b.o[k][C] : b.o[k][C] + (M.o[k][C] - b.o[k][C]) * w, o.o[k][C] = G, G = F ? b.v[k][C] : b.v[k][C] + (M.v[k][C] - b.v[k][C]) * w, o.v[k][C] = G
                }

                function r() {
                    var p = this.comp.renderedFrame - this.offsetTime,
                        o = this.keyframes[0].t - this.offsetTime,
                        l = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                        u = this._caching.lastFrame;
                    return u !== t && (u < o && p < o || u > l && p > l) || (this._caching.lastIndex = u < p ? this._caching.lastIndex : 0, this.interpolateShape(p, this.pv, this._caching)), this._caching.lastFrame = p, this.pv
                }

                function i() {
                    this.paths = this.localShapeCollection
                }

                function s(p, o) {
                    if (p._length !== o._length || p.c !== o.c) return !1;
                    var l, u = p._length;
                    for (l = 0; l < u; l += 1)
                        if (p.v[l][0] !== o.v[l][0] || p.v[l][1] !== o.v[l][1] || p.o[l][0] !== o.o[l][0] || p.o[l][1] !== o.o[l][1] || p.i[l][0] !== o.i[l][0] || p.i[l][1] !== o.i[l][1]) return !1;
                    return !0
                }

                function a(p) {
                    s(this.v, p) || (this.v = shapePool.clone(p), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                }

                function n() {
                    if (this.elem.globalData.frameId !== this.frameId) {
                        if (!this.effectsSequence.length) {
                            this._mdf = !1;
                            return
                        }
                        if (this.lock) {
                            this.setVValue(this.pv);
                            return
                        }
                        this.lock = !0, this._mdf = !1;
                        var p;
                        this.kf ? p = this.pv : this.data.ks ? p = this.data.ks.k : p = this.data.pt.k;
                        var o, l = this.effectsSequence.length;
                        for (o = 0; o < l; o += 1) p = this.effectsSequence[o](p);
                        this.setVValue(p), this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
                }

                function m(p, o, l) {
                    this.propType = "shape", this.comp = p.comp, this.container = p, this.elem = p, this.data = o, this.k = !1, this.kf = !1, this._mdf = !1;
                    var u = l === 3 ? o.pt.k : o.ks.k;
                    this.v = shapePool.clone(u), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
                }

                function h(p) {
                    this.effectsSequence.push(p), this.container.addDynamicProperty(this)
                }
                m.prototype.interpolateShape = e, m.prototype.getValue = n, m.prototype.setVValue = a, m.prototype.addEffect = h;

                function y(p, o, l) {
                    this.propType = "shape", this.comp = p.comp, this.elem = p, this.container = p, this.offsetTime = p.data.st, this.keyframes = l === 3 ? o.pt.k : o.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                    var u = this.keyframes[0].s[0].i.length;
                    this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, u), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
                        lastFrame: t,
                        lastIndex: 0
                    }, this.effectsSequence = [r.bind(this)]
                }
                y.prototype.getValue = n, y.prototype.interpolateShape = e, y.prototype.setVValue = a, y.prototype.addEffect = h;
                var v = function() {
                        var p = roundCorner;

                        function o(l, u) {
                            this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = u.d, this.elem = l, this.comp = l.comp, this.frameId = -1, this.initDynamicPropertyContainer(l), this.p = PropertyFactory.getProp(l, u.p, 1, 0, this), this.s = PropertyFactory.getProp(l, u.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                        }
                        return o.prototype = {
                            reset: i,
                            getValue: function() {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                            },
                            convertEllToPath: function() {
                                var l = this.p.v[0],
                                    u = this.p.v[1],
                                    b = this.s.v[0] / 2,
                                    M = this.s.v[1] / 2,
                                    F = this.d !== 3,
                                    k = this.v;
                                k.v[0][0] = l, k.v[0][1] = u - M, k.v[1][0] = F ? l + b : l - b, k.v[1][1] = u, k.v[2][0] = l, k.v[2][1] = u + M, k.v[3][0] = F ? l - b : l + b, k.v[3][1] = u, k.i[0][0] = F ? l - b * p : l + b * p, k.i[0][1] = u - M, k.i[1][0] = F ? l + b : l - b, k.i[1][1] = u - M * p, k.i[2][0] = F ? l + b * p : l - b * p, k.i[2][1] = u + M, k.i[3][0] = F ? l - b : l + b, k.i[3][1] = u + M * p, k.o[0][0] = F ? l + b * p : l - b * p, k.o[0][1] = u - M, k.o[1][0] = F ? l + b : l - b, k.o[1][1] = u + M * p, k.o[2][0] = F ? l - b * p : l + b * p, k.o[2][1] = u + M, k.o[3][0] = F ? l - b : l + b, k.o[3][1] = u - M * p
                            }
                        }, extendPrototype([DynamicPropertyContainer], o), o
                    }(),
                    E = function() {
                        function p(o, l) {
                            this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = o, this.comp = o.comp, this.data = l, this.frameId = -1, this.d = l.d, this.initDynamicPropertyContainer(o), l.sy === 1 ? (this.ir = PropertyFactory.getProp(o, l.ir, 0, 0, this), this.is = PropertyFactory.getProp(o, l.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(o, l.pt, 0, 0, this), this.p = PropertyFactory.getProp(o, l.p, 1, 0, this), this.r = PropertyFactory.getProp(o, l.r, 0, degToRads, this), this.or = PropertyFactory.getProp(o, l.or, 0, 0, this), this.os = PropertyFactory.getProp(o, l.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                        }
                        return p.prototype = {
                            reset: i,
                            getValue: function() {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                            },
                            convertStarToPath: function() {
                                var o = Math.floor(this.pt.v) * 2,
                                    l = Math.PI * 2 / o,
                                    u = !0,
                                    b = this.or.v,
                                    M = this.ir.v,
                                    F = this.os.v,
                                    k = this.is.v,
                                    C = 2 * Math.PI * b / (o * 2),
                                    R = 2 * Math.PI * M / (o * 2),
                                    L, w, G, D, V = -Math.PI / 2;
                                V += this.r.v;
                                var S = this.data.d === 3 ? -1 : 1;
                                for (this.v._length = 0, L = 0; L < o; L += 1) {
                                    w = u ? b : M, G = u ? F : k, D = u ? C : R;
                                    var _ = w * Math.cos(V),
                                        f = w * Math.sin(V),
                                        A = _ === 0 && f === 0 ? 0 : f / Math.sqrt(_ * _ + f * f),
                                        I = _ === 0 && f === 0 ? 0 : -_ / Math.sqrt(_ * _ + f * f);
                                    _ += +this.p.v[0], f += +this.p.v[1], this.v.setTripleAt(_, f, _ - A * D * G * S, f - I * D * G * S, _ + A * D * G * S, f + I * D * G * S, L, !0), u = !u, V += l * S
                                }
                            },
                            convertPolygonToPath: function() {
                                var o = Math.floor(this.pt.v),
                                    l = Math.PI * 2 / o,
                                    u = this.or.v,
                                    b = this.os.v,
                                    M = 2 * Math.PI * u / (o * 4),
                                    F, k = -Math.PI * .5,
                                    C = this.data.d === 3 ? -1 : 1;
                                for (k += this.r.v, this.v._length = 0, F = 0; F < o; F += 1) {
                                    var R = u * Math.cos(k),
                                        L = u * Math.sin(k),
                                        w = R === 0 && L === 0 ? 0 : L / Math.sqrt(R * R + L * L),
                                        G = R === 0 && L === 0 ? 0 : -R / Math.sqrt(R * R + L * L);
                                    R += +this.p.v[0], L += +this.p.v[1], this.v.setTripleAt(R, L, R - w * M * b * C, L - G * M * b * C, R + w * M * b * C, L + G * M * b * C, F, !0), k += l * C
                                }
                                this.paths.length = 0, this.paths[0] = this.v
                            }
                        }, extendPrototype([DynamicPropertyContainer], p), p
                    }(),
                    c = function() {
                        function p(o, l) {
                            this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = o, this.comp = o.comp, this.frameId = -1, this.d = l.d, this.initDynamicPropertyContainer(o), this.p = PropertyFactory.getProp(o, l.p, 1, 0, this), this.s = PropertyFactory.getProp(o, l.s, 1, 0, this), this.r = PropertyFactory.getProp(o, l.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                        }
                        return p.prototype = {
                            convertRectToPath: function() {
                                var o = this.p.v[0],
                                    l = this.p.v[1],
                                    u = this.s.v[0] / 2,
                                    b = this.s.v[1] / 2,
                                    M = bmMin(u, b, this.r.v),
                                    F = M * (1 - roundCorner);
                                this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(o + u, l - b + M, o + u, l - b + M, o + u, l - b + F, 0, !0), this.v.setTripleAt(o + u, l + b - M, o + u, l + b - F, o + u, l + b - M, 1, !0), M !== 0 ? (this.v.setTripleAt(o + u - M, l + b, o + u - M, l + b, o + u - F, l + b, 2, !0), this.v.setTripleAt(o - u + M, l + b, o - u + F, l + b, o - u + M, l + b, 3, !0), this.v.setTripleAt(o - u, l + b - M, o - u, l + b - M, o - u, l + b - F, 4, !0), this.v.setTripleAt(o - u, l - b + M, o - u, l - b + F, o - u, l - b + M, 5, !0), this.v.setTripleAt(o - u + M, l - b, o - u + M, l - b, o - u + F, l - b, 6, !0), this.v.setTripleAt(o + u - M, l - b, o + u - F, l - b, o + u - M, l - b, 7, !0)) : (this.v.setTripleAt(o - u, l + b, o - u + F, l + b, o - u, l + b, 2), this.v.setTripleAt(o - u, l - b, o - u, l - b + F, o - u, l - b, 3))) : (this.v.setTripleAt(o + u, l - b + M, o + u, l - b + F, o + u, l - b + M, 0, !0), M !== 0 ? (this.v.setTripleAt(o + u - M, l - b, o + u - M, l - b, o + u - F, l - b, 1, !0), this.v.setTripleAt(o - u + M, l - b, o - u + F, l - b, o - u + M, l - b, 2, !0), this.v.setTripleAt(o - u, l - b + M, o - u, l - b + M, o - u, l - b + F, 3, !0), this.v.setTripleAt(o - u, l + b - M, o - u, l + b - F, o - u, l + b - M, 4, !0), this.v.setTripleAt(o - u + M, l + b, o - u + M, l + b, o - u + F, l + b, 5, !0), this.v.setTripleAt(o + u - M, l + b, o + u - F, l + b, o + u - M, l + b, 6, !0), this.v.setTripleAt(o + u, l + b - M, o + u, l + b - M, o + u, l + b - F, 7, !0)) : (this.v.setTripleAt(o - u, l - b, o - u + F, l - b, o - u, l - b, 1, !0), this.v.setTripleAt(o - u, l + b, o - u, l + b - F, o - u, l + b, 2, !0), this.v.setTripleAt(o + u, l + b, o + u - F, l + b, o + u, l + b, 3, !0)))
                            },
                            getValue: function() {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                            },
                            reset: i
                        }, extendPrototype([DynamicPropertyContainer], p), p
                    }();

                function P(p, o, l) {
                    var u;
                    if (l === 3 || l === 4) {
                        var b = l === 3 ? o.pt : o.ks,
                            M = b.k;
                        M.length ? u = new y(p, o, l) : u = new m(p, o, l)
                    } else l === 5 ? u = new c(p, o) : l === 6 ? u = new v(p, o) : l === 7 && (u = new E(p, o));
                    return u.k && p.addDynamicProperty(u), u
                }

                function g() {
                    return m
                }

                function d() {
                    return y
                }
                var x = {};
                return x.getShapeProp = P, x.getConstructorFunction = g, x.getKeyframedConstructorFunction = d, x
            }();
        /*!
        Transformation Matrix v2.0
        (c) Epistemex 2014-2015
        www.epistemex.com
        By Ken Fyrstenberg
        Contributions by leeoniya.
        License: MIT, header required.
        */
        var Matrix = function() {
            var t = Math.cos,
                e = Math.sin,
                r = Math.tan,
                i = Math.round;

            function s() {
                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function a(f) {
                if (f === 0) return this;
                var A = t(f),
                    I = e(f);
                return this._t(A, -I, 0, 0, I, A, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function n(f) {
                if (f === 0) return this;
                var A = t(f),
                    I = e(f);
                return this._t(1, 0, 0, 0, 0, A, -I, 0, 0, I, A, 0, 0, 0, 0, 1)
            }

            function m(f) {
                if (f === 0) return this;
                var A = t(f),
                    I = e(f);
                return this._t(A, 0, I, 0, 0, 1, 0, 0, -I, 0, A, 0, 0, 0, 0, 1)
            }

            function h(f) {
                if (f === 0) return this;
                var A = t(f),
                    I = e(f);
                return this._t(A, -I, 0, 0, I, A, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function y(f, A) {
                return this._t(1, A, f, 1, 0, 0)
            }

            function v(f, A) {
                return this.shear(r(f), r(A))
            }

            function E(f, A) {
                var I = t(A),
                    T = e(A);
                return this._t(I, T, 0, 0, -T, I, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(f), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(I, -T, 0, 0, T, I, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function c(f, A, I) {
                return !I && I !== 0 && (I = 1), f === 1 && A === 1 && I === 1 ? this : this._t(f, 0, 0, 0, 0, A, 0, 0, 0, 0, I, 0, 0, 0, 0, 1)
            }

            function P(f, A, I, T, O, B, j, N, H, $, X, Q, Z, W, K, q) {
                return this.props[0] = f, this.props[1] = A, this.props[2] = I, this.props[3] = T, this.props[4] = O, this.props[5] = B, this.props[6] = j, this.props[7] = N, this.props[8] = H, this.props[9] = $, this.props[10] = X, this.props[11] = Q, this.props[12] = Z, this.props[13] = W, this.props[14] = K, this.props[15] = q, this
            }

            function g(f, A, I) {
                return I = I || 0, f !== 0 || A !== 0 || I !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, f, A, I, 1) : this
            }

            function d(f, A, I, T, O, B, j, N, H, $, X, Q, Z, W, K, q) {
                var z = this.props;
                if (f === 1 && A === 0 && I === 0 && T === 0 && O === 0 && B === 1 && j === 0 && N === 0 && H === 0 && $ === 0 && X === 1 && Q === 0) return z[12] = z[12] * f + z[15] * Z, z[13] = z[13] * B + z[15] * W, z[14] = z[14] * X + z[15] * K, z[15] *= q, this._identityCalculated = !1, this;
                var et = z[0],
                    at = z[1],
                    rt = z[2],
                    tt = z[3],
                    it = z[4],
                    st = z[5],
                    Y = z[6],
                    nt = z[7],
                    ot = z[8],
                    J = z[9],
                    ht = z[10],
                    U = z[11],
                    lt = z[12],
                    pt = z[13],
                    ft = z[14],
                    ct = z[15];
                return z[0] = et * f + at * O + rt * H + tt * Z, z[1] = et * A + at * B + rt * $ + tt * W, z[2] = et * I + at * j + rt * X + tt * K, z[3] = et * T + at * N + rt * Q + tt * q, z[4] = it * f + st * O + Y * H + nt * Z, z[5] = it * A + st * B + Y * $ + nt * W, z[6] = it * I + st * j + Y * X + nt * K, z[7] = it * T + st * N + Y * Q + nt * q, z[8] = ot * f + J * O + ht * H + U * Z, z[9] = ot * A + J * B + ht * $ + U * W, z[10] = ot * I + J * j + ht * X + U * K, z[11] = ot * T + J * N + ht * Q + U * q, z[12] = lt * f + pt * O + ft * H + ct * Z, z[13] = lt * A + pt * B + ft * $ + ct * W, z[14] = lt * I + pt * j + ft * X + ct * K, z[15] = lt * T + pt * N + ft * Q + ct * q, this._identityCalculated = !1, this
            }

            function x(f) {
                var A = f.props;
                return this.transform(A[0], A[1], A[2], A[3], A[4], A[5], A[6], A[7], A[8], A[9], A[10], A[11], A[12], A[13], A[14], A[15])
            }

            function p() {
                return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity
            }

            function o(f) {
                for (var A = 0; A < 16;) {
                    if (f.props[A] !== this.props[A]) return !1;
                    A += 1
                }
                return !0
            }

            function l(f) {
                var A;
                for (A = 0; A < 16; A += 1) f.props[A] = this.props[A];
                return f
            }

            function u(f) {
                var A;
                for (A = 0; A < 16; A += 1) this.props[A] = f[A]
            }

            function b(f, A, I) {
                return {
                    x: f * this.props[0] + A * this.props[4] + I * this.props[8] + this.props[12],
                    y: f * this.props[1] + A * this.props[5] + I * this.props[9] + this.props[13],
                    z: f * this.props[2] + A * this.props[6] + I * this.props[10] + this.props[14]
                }
            }

            function M(f, A, I) {
                return f * this.props[0] + A * this.props[4] + I * this.props[8] + this.props[12]
            }

            function F(f, A, I) {
                return f * this.props[1] + A * this.props[5] + I * this.props[9] + this.props[13]
            }

            function k(f, A, I) {
                return f * this.props[2] + A * this.props[6] + I * this.props[10] + this.props[14]
            }

            function C() {
                var f = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                    A = this.props[5] / f,
                    I = -this.props[1] / f,
                    T = -this.props[4] / f,
                    O = this.props[0] / f,
                    B = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / f,
                    j = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / f,
                    N = new Matrix;
                return N.props[0] = A, N.props[1] = I, N.props[4] = T, N.props[5] = O, N.props[12] = B, N.props[13] = j, N
            }

            function R(f) {
                var A = this.getInverseMatrix();
                return A.applyToPointArray(f[0], f[1], f[2] || 0)
            }

            function L(f) {
                var A, I = f.length,
                    T = [];
                for (A = 0; A < I; A += 1) T[A] = R(f[A]);
                return T
            }

            function w(f, A, I) {
                var T = createTypedArray("float32", 6);
                if (this.isIdentity()) T[0] = f[0], T[1] = f[1], T[2] = A[0], T[3] = A[1], T[4] = I[0], T[5] = I[1];
                else {
                    var O = this.props[0],
                        B = this.props[1],
                        j = this.props[4],
                        N = this.props[5],
                        H = this.props[12],
                        $ = this.props[13];
                    T[0] = f[0] * O + f[1] * j + H, T[1] = f[0] * B + f[1] * N + $, T[2] = A[0] * O + A[1] * j + H, T[3] = A[0] * B + A[1] * N + $, T[4] = I[0] * O + I[1] * j + H, T[5] = I[0] * B + I[1] * N + $
                }
                return T
            }

            function G(f, A, I) {
                var T;
                return this.isIdentity() ? T = [f, A, I] : T = [f * this.props[0] + A * this.props[4] + I * this.props[8] + this.props[12], f * this.props[1] + A * this.props[5] + I * this.props[9] + this.props[13], f * this.props[2] + A * this.props[6] + I * this.props[10] + this.props[14]], T
            }

            function D(f, A) {
                if (this.isIdentity()) return f + "," + A;
                var I = this.props;
                return Math.round((f * I[0] + A * I[4] + I[12]) * 100) / 100 + "," + Math.round((f * I[1] + A * I[5] + I[13]) * 100) / 100
            }

            function V() {
                for (var f = 0, A = this.props, I = "matrix3d(", T = 1e4; f < 16;) I += i(A[f] * T) / T, I += f === 15 ? ")" : ",", f += 1;
                return I
            }

            function S(f) {
                var A = 1e4;
                return f < 1e-6 && f > 0 || f > -1e-6 && f < 0 ? i(f * A) / A : f
            }

            function _() {
                var f = this.props,
                    A = S(f[0]),
                    I = S(f[1]),
                    T = S(f[4]),
                    O = S(f[5]),
                    B = S(f[12]),
                    j = S(f[13]);
                return "matrix(" + A + "," + I + "," + T + "," + O + "," + B + "," + j + ")"
            }
            return function() {
                this.reset = s, this.rotate = a, this.rotateX = n, this.rotateY = m, this.rotateZ = h, this.skew = v, this.skewFromAxis = E, this.shear = y, this.scale = c, this.setTransform = P, this.translate = g, this.transform = d, this.multiply = x, this.applyToPoint = b, this.applyToX = M, this.applyToY = F, this.applyToZ = k, this.applyToPointArray = G, this.applyToTriplePoints = w, this.applyToPointStringified = D, this.toCSS = V, this.to2dCSS = _, this.clone = l, this.cloneFromProps = u, this.equals = o, this.inversePoints = L, this.inversePoint = R, this.getInverseMatrix = C, this._t = this.transform, this.isIdentity = p, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
            }
        }();

        function _typeof$3(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$3 = function(e) {
                return typeof e
            } : _typeof$3 = function(e) {
                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, _typeof$3(t)
        }
        var lottie = {};

        function setLocation(t) {
            setLocationHref(t)
        }

        function searchAnimations() {
            animationManager.searchAnimations()
        }

        function setSubframeRendering(t) {
            setSubframeEnabled(t)
        }

        function setPrefix(t) {
            setIdPrefix(t)
        }

        function loadAnimation(t) {
            return animationManager.loadAnimation(t)
        }

        function setQuality(t) {
            if (typeof t == "string") switch (t) {
                case "high":
                    setDefaultCurveSegments(200);
                    break;
                default:
                case "medium":
                    setDefaultCurveSegments(50);
                    break;
                case "low":
                    setDefaultCurveSegments(10);
                    break
            } else !isNaN(t) && t > 1 && setDefaultCurveSegments(t)
        }

        function inBrowser() {
            return typeof navigator < "u"
        }

        function installPlugin(t, e) {
            t === "expressions" && setExpressionsPlugin(e)
        }

        function getFactory(t) {
            switch (t) {
                case "propertyFactory":
                    return PropertyFactory;
                case "shapePropertyFactory":
                    return ShapePropertyFactory;
                case "matrix":
                    return Matrix;
                default:
                    return null
            }
        }
        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";

        function checkReady() {
            document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations())
        }

        function getQueryVariable(t) {
            for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
                var i = e[r].split("=");
                if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
            }
            return null
        }
        var queryString = ""; {
            var scripts = document.getElementsByTagName("script"),
                index = scripts.length - 1,
                myScript = scripts[index] || {
                    src: ""
                };
            queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
            _typeof$3(exports) !== "object" && (window.bodymovin = lottie)
        } catch (t) {}
        var ShapeModifiers = function() {
            var t = {},
                e = {};
            t.registerModifier = r, t.getModifier = i;

            function r(s, a) {
                e[s] || (e[s] = a)
            }

            function i(s, a, n) {
                return new e[s](a, n)
            }
            return t
        }();

        function ShapeModifier() {}
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
            if (!this.closed) {
                t.sh.container.addDynamicProperty(t.sh);
                var e = {
                    shape: t.sh,
                    data: t,
                    localShapeCollection: shapeCollectionPool.newShapeCollection()
                };
                this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
            }
        }, ShapeModifier.prototype.init = function(t, e) {
            this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier);

        function TrimModifier() {}
        extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
            this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function(t) {
            t.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, s) {
            var a = [];
            e <= 1 ? a.push({
                s: t,
                e
            }) : t >= 1 ? a.push({
                s: t - 1,
                e: e - 1
            }) : (a.push({
                s: t,
                e: 1
            }), a.push({
                s: 0,
                e: e - 1
            }));
            var n = [],
                m, h = a.length,
                y;
            for (m = 0; m < h; m += 1)
                if (y = a[m], !(y.e * s < i || y.s * s > i + r)) {
                    var v, E;
                    y.s * s <= i ? v = 0 : v = (y.s * s - i) / r, y.e * s >= i + r ? E = 1 : E = (y.e * s - i) / r, n.push([v, E])
                }
            return n.length || n.push([0, 0]), n
        }, TrimModifier.prototype.releasePathsData = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
            return t.length = 0, t
        }, TrimModifier.prototype.processShapes = function(t) {
            var e, r;
            if (this._mdf || t) {
                var i = this.o.v % 360 / 360;
                if (i < 0 && (i += 1), this.s.v > 1 ? e = 1 + i : this.s.v < 0 ? e = 0 + i : e = this.s.v + i, this.e.v > 1 ? r = 1 + i : this.e.v < 0 ? r = 0 + i : r = this.e.v + i, e > r) {
                    var s = e;
                    e = r, r = s
                }
                e = Math.round(e * 1e4) * 1e-4, r = Math.round(r * 1e4) * 1e-4, this.sValue = e, this.eValue = r
            } else e = this.sValue, r = this.eValue;
            var a, n, m = this.shapes.length,
                h, y, v, E, c, P = 0;
            if (r === e)
                for (n = 0; n < m; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
            else if (r === 1 && e === 0 || r === 0 && e === 1) {
                if (this._mdf)
                    for (n = 0; n < m; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
            } else {
                var g = [],
                    d, x;
                for (n = 0; n < m; n += 1)
                    if (d = this.shapes[n], !d.shape._mdf && !this._mdf && !t && this.m !== 2) d.shape.paths = d.localShapeCollection;
                    else {
                        if (a = d.shape.paths, y = a._length, c = 0, !d.shape._mdf && d.pathsData.length) c = d.totalShapeLength;
                        else {
                            for (v = this.releasePathsData(d.pathsData), h = 0; h < y; h += 1) E = bez.getSegmentsLength(a.shapes[h]), v.push(E), c += E.totalLength;
                            d.totalShapeLength = c, d.pathsData = v
                        }
                        P += c, d.shape._mdf = !0
                    }
                var p = e,
                    o = r,
                    l = 0,
                    u;
                for (n = m - 1; n >= 0; n -= 1)
                    if (d = this.shapes[n], d.shape._mdf) {
                        for (x = d.localShapeCollection, x.releaseShapes(), this.m === 2 && m > 1 ? (u = this.calculateShapeEdges(e, r, d.totalShapeLength, l, P), l += d.totalShapeLength) : u = [
                                [p, o]
                            ], y = u.length, h = 0; h < y; h += 1) {
                            p = u[h][0], o = u[h][1], g.length = 0, o <= 1 ? g.push({
                                s: d.totalShapeLength * p,
                                e: d.totalShapeLength * o
                            }) : p >= 1 ? g.push({
                                s: d.totalShapeLength * (p - 1),
                                e: d.totalShapeLength * (o - 1)
                            }) : (g.push({
                                s: d.totalShapeLength * p,
                                e: d.totalShapeLength
                            }), g.push({
                                s: 0,
                                e: d.totalShapeLength * (o - 1)
                            }));
                            var b = this.addShapes(d, g[0]);
                            if (g[0].s !== g[0].e) {
                                if (g.length > 1) {
                                    var M = d.shape.paths.shapes[d.shape.paths._length - 1];
                                    if (M.c) {
                                        var F = b.pop();
                                        this.addPaths(b, x), b = this.addShapes(d, g[1], F)
                                    } else this.addPaths(b, x), b = this.addShapes(d, g[1])
                                }
                                this.addPaths(b, x)
                            }
                        }
                        d.shape.paths = x
                    }
            }
        }, TrimModifier.prototype.addPaths = function(t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1) e.addShape(t[r])
        }, TrimModifier.prototype.addSegment = function(t, e, r, i, s, a, n) {
            s.setXYAt(e[0], e[1], "o", a), s.setXYAt(r[0], r[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(i[0], i[1], "v", a + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
            e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
        }, TrimModifier.prototype.addShapes = function(t, e, r) {
            var i = t.pathsData,
                s = t.shape.paths.shapes,
                a, n = t.shape.paths._length,
                m, h, y = 0,
                v, E, c, P, g = [],
                d, x = !0;
            for (r ? (E = r._length, d = r._length) : (r = shapePool.newElement(), E = 0, d = 0), g.push(r), a = 0; a < n; a += 1) {
                for (c = i[a].lengths, r.c = s[a].c, h = s[a].c ? c.length : c.length + 1, m = 1; m < h; m += 1)
                    if (v = c[m - 1], y + v.addedLength < e.s) y += v.addedLength, r.c = !1;
                    else if (y > e.e) {
                    r.c = !1;
                    break
                } else e.s <= y && e.e >= y + v.addedLength ? (this.addSegment(s[a].v[m - 1], s[a].o[m - 1], s[a].i[m], s[a].v[m], r, E, x), x = !1) : (P = bez.getNewSegment(s[a].v[m - 1], s[a].v[m], s[a].o[m - 1], s[a].i[m], (e.s - y) / v.addedLength, (e.e - y) / v.addedLength, c[m - 1]), this.addSegmentFromArray(P, r, E, x), x = !1, r.c = !1), y += v.addedLength, E += 1;
                if (s[a].c && c.length) {
                    if (v = c[m - 1], y <= e.e) {
                        var p = c[m - 1].addedLength;
                        e.s <= y && e.e >= y + p ? (this.addSegment(s[a].v[m - 1], s[a].o[m - 1], s[a].i[0], s[a].v[0], r, E, x), x = !1) : (P = bez.getNewSegment(s[a].v[m - 1], s[a].v[0], s[a].o[m - 1], s[a].i[0], (e.s - y) / p, (e.e - y) / p, c[m - 1]), this.addSegmentFromArray(P, r, E, x), x = !1, r.c = !1)
                    } else r.c = !1;
                    y += v.addedLength, E += 1
                }
                if (r._length && (r.setXYAt(r.v[d][0], r.v[d][1], "i", d), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), y > e.e) break;
                a < n - 1 && (r = shapePool.newElement(), x = !0, g.push(r), E = 0)
            }
            return g
        };

        function PuckerAndBloatModifier() {}
        extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
            var r = e / 100,
                i = [0, 0],
                s = t._length,
                a = 0;
            for (a = 0; a < s; a += 1) i[0] += t.v[a][0], i[1] += t.v[a][1];
            i[0] /= s, i[1] /= s;
            var n = shapePool.newElement();
            n.c = t.c;
            var m, h, y, v, E, c;
            for (a = 0; a < s; a += 1) m = t.v[a][0] + (i[0] - t.v[a][0]) * r, h = t.v[a][1] + (i[1] - t.v[a][1]) * r, y = t.o[a][0] + (i[0] - t.o[a][0]) * -r, v = t.o[a][1] + (i[1] - t.o[a][1]) * -r, E = t.i[a][0] + (i[0] - t.i[a][0]) * -r, c = t.i[a][1] + (i[1] - t.i[a][1]) * -r, n.setTripleAt(m, h, y, v, E, c, a);
            return n
        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length,
                s, a, n = this.amount.v;
            if (n !== 0) {
                var m, h;
                for (r = 0; r < i; r += 1) {
                    if (m = this.shapes[r], h = m.localShapeCollection, !(!m.shape._mdf && !this._mdf && !t))
                        for (h.releaseShapes(), m.shape._mdf = !0, e = m.shape.paths.shapes, a = m.shape.paths._length, s = 0; s < a; s += 1) h.addShape(this.processPath(e[s], n));
                    m.shape.paths = m.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        };
        var TransformPropertyFactory = function() {
            var t = [0, 0];

            function e(h) {
                var y = this._mdf;
                this.iterateDynamicProperties(), this._mdf = this._mdf || y, this.a && h.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && h.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && h.skewFromAxis(-this.sk.v, this.sa.v), this.r ? h.rotate(-this.r.v) : h.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? h.translate(this.px.v, this.py.v, -this.pz.v) : h.translate(this.px.v, this.py.v, 0) : h.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            }

            function r(h) {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || h) {
                        var y;
                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                            var v, E;
                            if (y = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (v = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / y, 0), E = this.p.getValueAtTime(this.p.keyframes[0].t / y, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (v = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / y, 0), E = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / y, 0)) : (v = this.p.pv, E = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / y, this.p.offsetTime));
                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                v = [], E = [];
                                var c = this.px,
                                    P = this.py;
                                c._caching.lastFrame + c.offsetTime <= c.keyframes[0].t ? (v[0] = c.getValueAtTime((c.keyframes[0].t + .01) / y, 0), v[1] = P.getValueAtTime((P.keyframes[0].t + .01) / y, 0), E[0] = c.getValueAtTime(c.keyframes[0].t / y, 0), E[1] = P.getValueAtTime(P.keyframes[0].t / y, 0)) : c._caching.lastFrame + c.offsetTime >= c.keyframes[c.keyframes.length - 1].t ? (v[0] = c.getValueAtTime(c.keyframes[c.keyframes.length - 1].t / y, 0), v[1] = P.getValueAtTime(P.keyframes[P.keyframes.length - 1].t / y, 0), E[0] = c.getValueAtTime((c.keyframes[c.keyframes.length - 1].t - .01) / y, 0), E[1] = P.getValueAtTime((P.keyframes[P.keyframes.length - 1].t - .01) / y, 0)) : (v = [c.pv, P.pv], E[0] = c.getValueAtTime((c._caching.lastFrame + c.offsetTime - .01) / y, c.offsetTime), E[1] = P.getValueAtTime((P._caching.lastFrame + P.offsetTime - .01) / y, P.offsetTime))
                            } else E = t, v = E;
                            this.v.rotate(-Math.atan2(v[1] - E[1], v[0] - E[0]))
                        }
                        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    }
                    this.frameId = this.elem.globalData.frameId
                }
            }

            function i() {
                if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length) this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1;
                else return;
                if (!this.s.effectsSequence.length) this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2;
                else return;
                if (this.sk)
                    if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
                    else return;
                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
            }

            function s() {}

            function a(h) {
                this._addDynamicProperty(h), this.elem.addDynamicProperty(h), this._isDirty = !0
            }

            function n(h, y, v) {
                if (this.elem = h, this.frameId = -1, this.propType = "transform", this.data = y, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(v || h), y.p && y.p.s ? (this.px = PropertyFactory.getProp(h, y.p.x, 0, 0, this), this.py = PropertyFactory.getProp(h, y.p.y, 0, 0, this), y.p.z && (this.pz = PropertyFactory.getProp(h, y.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(h, y.p || {
                        k: [0, 0, 0]
                    }, 1, 0, this), y.rx) {
                    if (this.rx = PropertyFactory.getProp(h, y.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(h, y.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(h, y.rz, 0, degToRads, this), y.or.k[0].ti) {
                        var E, c = y.or.k.length;
                        for (E = 0; E < c; E += 1) y.or.k[E].to = null, y.or.k[E].ti = null
                    }
                    this.or = PropertyFactory.getProp(h, y.or, 1, degToRads, this), this.or.sh = !0
                } else this.r = PropertyFactory.getProp(h, y.r || {
                    k: 0
                }, 0, degToRads, this);
                y.sk && (this.sk = PropertyFactory.getProp(h, y.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(h, y.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(h, y.a || {
                    k: [0, 0, 0]
                }, 1, 0, this), this.s = PropertyFactory.getProp(h, y.s || {
                    k: [100, 100, 100]
                }, 1, .01, this), y.o ? this.o = PropertyFactory.getProp(h, y.o, 0, .01, h) : this.o = {
                    _mdf: !1,
                    v: 1
                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
            }
            n.prototype = {
                applyToMatrix: e,
                getValue: r,
                precalculateMatrix: i,
                autoOrient: s
            }, extendPrototype([DynamicPropertyContainer], n), n.prototype.addDynamicProperty = a, n.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;

            function m(h, y, v) {
                return new n(h, y, v)
            }
            return {
                getTransformProperty: m
            }
        }();

        function RepeaterModifier() {}
        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, s, a) {
            var n = a ? -1 : 1,
                m = i.s.v[0] + (1 - i.s.v[0]) * (1 - s),
                h = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
            t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * s), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / m : m, a ? 1 / h : h), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
        }, RepeaterModifier.prototype.init = function(t, e, r, i) {
            for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0;) r -= 1, this._elements.unshift(e[r]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) t[e]._processed = !1, t[e].ty === "gr" && this.resetElements(t[e].it)
        }, RepeaterModifier.prototype.cloneElements = function(t) {
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e), e
        }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1) t[r]._render = e, t[r].ty === "gr" && this.changeGroupRender(t[r].it, e)
        }, RepeaterModifier.prototype.processShapes = function(t) {
            var e, r, i, s, a, n = !1;
            if (this._mdf || t) {
                var m = Math.ceil(this.c.v);
                if (this._groups.length < m) {
                    for (; this._groups.length < m;) {
                        var h = {
                            it: this.cloneElements(this._elements),
                            ty: "gr"
                        };
                        h.it.push({
                            a: {
                                a: 0,
                                ix: 1,
                                k: [0, 0]
                            },
                            nm: "Transform",
                            o: {
                                a: 0,
                                ix: 7,
                                k: 100
                            },
                            p: {
                                a: 0,
                                ix: 2,
                                k: [0, 0]
                            },
                            r: {
                                a: 1,
                                ix: 6,
                                k: [{
                                    s: 0,
                                    e: 0,
                                    t: 0
                                }, {
                                    s: 0,
                                    e: 0,
                                    t: 1
                                }]
                            },
                            s: {
                                a: 0,
                                ix: 3,
                                k: [100, 100]
                            },
                            sa: {
                                a: 0,
                                ix: 5,
                                k: 0
                            },
                            sk: {
                                a: 0,
                                ix: 4,
                                k: 0
                            },
                            ty: "tr"
                        }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1
                    }
                    this.elem.reloadShapes(), n = !0
                }
                a = 0;
                var y;
                for (i = 0; i <= this._groups.length - 1; i += 1) {
                    if (y = a < m, this._groups[i]._render = y, this.changeGroupRender(this._groups[i].it, y), !y) {
                        var v = this.elemsData[i].it,
                            E = v[v.length - 1];
                        E.transform.op.v !== 0 ? (E.transform.op._mdf = !0, E.transform.op.v = 0) : E.transform.op._mdf = !1
                    }
                    a += 1
                }
                this._currentCopies = m;
                var c = this.o.v,
                    P = c % 1,
                    g = c > 0 ? Math.floor(c) : Math.ceil(c),
                    d = this.pMatrix.props,
                    x = this.rMatrix.props,
                    p = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var o = 0;
                if (c > 0) {
                    for (; o < g;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), o += 1;
                    P && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, P, !1), o += P)
                } else if (c < 0) {
                    for (; o > g;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), o -= 1;
                    P && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -P, !0), o -= P)
                }
                i = this.data.m === 1 ? 0 : this._currentCopies - 1, s = this.data.m === 1 ? 1 : -1, a = this._currentCopies;
                for (var l, u; a;) {
                    if (e = this.elemsData[i].it, r = e[e.length - 1].transform.mProps.v.props, u = r.length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), o !== 0) {
                        for ((i !== 0 && s === 1 || i !== this._currentCopies - 1 && s === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(x[0], x[1], x[2], x[3], x[4], x[5], x[6], x[7], x[8], x[9], x[10], x[11], x[12], x[13], x[14], x[15]), this.matrix.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), l = 0; l < u; l += 1) r[l] = this.matrix.props[l];
                        this.matrix.reset()
                    } else
                        for (this.matrix.reset(), l = 0; l < u; l += 1) r[l] = this.matrix.props[l];
                    o += 1, a -= 1, i += s
                }
            } else
                for (a = this._currentCopies, i = 0, s = 1; a;) e = this.elemsData[i].it, r = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, i += s;
            return n
        }, RepeaterModifier.prototype.addShape = function() {};

        function RoundCornersModifier() {}
        extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function(t, e) {
            var r = shapePool.newElement();
            r.c = t.c;
            var i, s = t._length,
                a, n, m, h, y, v, E = 0,
                c, P, g, d, x, p;
            for (i = 0; i < s; i += 1) a = t.v[i], m = t.o[i], n = t.i[i], a[0] === m[0] && a[1] === m[1] && a[0] === n[0] && a[1] === n[1] ? (i === 0 || i === s - 1) && !t.c ? (r.setTripleAt(a[0], a[1], m[0], m[1], n[0], n[1], E), E += 1) : (i === 0 ? h = t.v[s - 1] : h = t.v[i - 1], y = Math.sqrt(Math.pow(a[0] - h[0], 2) + Math.pow(a[1] - h[1], 2)), v = y ? Math.min(y / 2, e) / y : 0, x = a[0] + (h[0] - a[0]) * v, c = x, p = a[1] - (a[1] - h[1]) * v, P = p, g = c - (c - a[0]) * roundCorner, d = P - (P - a[1]) * roundCorner, r.setTripleAt(c, P, g, d, x, p, E), E += 1, i === s - 1 ? h = t.v[0] : h = t.v[i + 1], y = Math.sqrt(Math.pow(a[0] - h[0], 2) + Math.pow(a[1] - h[1], 2)), v = y ? Math.min(y / 2, e) / y : 0, g = a[0] + (h[0] - a[0]) * v, c = g, d = a[1] + (h[1] - a[1]) * v, P = d, x = c - (c - a[0]) * roundCorner, p = P - (P - a[1]) * roundCorner, r.setTripleAt(c, P, g, d, x, p, E), E += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], E), E += 1);
            return r
        }, RoundCornersModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length,
                s, a, n = this.rd.v;
            if (n !== 0) {
                var m, h;
                for (r = 0; r < i; r += 1) {
                    if (m = this.shapes[r], h = m.localShapeCollection, !(!m.shape._mdf && !this._mdf && !t))
                        for (h.releaseShapes(), m.shape._mdf = !0, e = m.shape.paths.shapes, a = m.shape.paths._length, s = 0; s < a; s += 1) h.addShape(this.processPath(e[s], n));
                    m.shape.paths = m.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        };

        function floatEqual(t, e) {
            return Math.abs(t - e) * 1e5 <= Math.min(Math.abs(t), Math.abs(e))
        }

        function floatZero(t) {
            return Math.abs(t) <= 1e-5
        }

        function lerp(t, e, r) {
            return t * (1 - r) + e * r
        }

        function lerpPoint(t, e, r) {
            return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)]
        }

        function quadRoots(t, e, r) {
            if (t === 0) return [];
            var i = e * e - 4 * t * r;
            if (i < 0) return [];
            var s = -e / (2 * t);
            if (i === 0) return [s];
            var a = Math.sqrt(i) / (2 * t);
            return [s - a, s + a]
        }

        function polynomialCoefficients(t, e, r, i) {
            return [-t + 3 * e - 3 * r + i, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t]
        }

        function singlePoint(t) {
            return new PolynomialBezier(t, t, t, t, !1)
        }

        function PolynomialBezier(t, e, r, i, s) {
            s && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)), s && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
            var a = polynomialCoefficients(t[0], e[0], r[0], i[0]),
                n = polynomialCoefficients(t[1], e[1], r[1], i[1]);
            this.a = [a[0], n[0]], this.b = [a[1], n[1]], this.c = [a[2], n[2]], this.d = [a[3], n[3]], this.points = [t, e, r, i]
        }
        PolynomialBezier.prototype.point = function(t) {
            return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
        }, PolynomialBezier.prototype.derivative = function(t) {
            return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
        }, PolynomialBezier.prototype.tangentAngle = function(t) {
            var e = this.derivative(t);
            return Math.atan2(e[1], e[0])
        }, PolynomialBezier.prototype.normalAngle = function(t) {
            var e = this.derivative(t);
            return Math.atan2(e[0], e[1])
        }, PolynomialBezier.prototype.inflectionPoints = function() {
            var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
            if (floatZero(t)) return [];
            var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
                r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
            if (r < 0) return [];
            var i = Math.sqrt(r);
            return floatZero(i) ? i > 0 && i < 1 ? [e] : [] : [e - i, e + i].filter(function(s) {
                return s > 0 && s < 1
            })
        }, PolynomialBezier.prototype.split = function(t) {
            if (t <= 0) return [singlePoint(this.points[0]), this];
            if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
            var e = lerpPoint(this.points[0], this.points[1], t),
                r = lerpPoint(this.points[1], this.points[2], t),
                i = lerpPoint(this.points[2], this.points[3], t),
                s = lerpPoint(e, r, t),
                a = lerpPoint(r, i, t),
                n = lerpPoint(s, a, t);
            return [new PolynomialBezier(this.points[0], e, s, n, !0), new PolynomialBezier(n, a, i, this.points[3], !0)]
        };

        function extrema(t, e) {
            var r = t.points[0][e],
                i = t.points[t.points.length - 1][e];
            if (r > i) {
                var s = i;
                i = r, r = s
            }
            for (var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < a.length; n += 1)
                if (a[n] > 0 && a[n] < 1) {
                    var m = t.point(a[n])[e];
                    m < r ? r = m : m > i && (i = m)
                }
            return {
                min: r,
                max: i
            }
        }
        PolynomialBezier.prototype.bounds = function() {
            return {
                x: extrema(this, 0),
                y: extrema(this, 1)
            }
        }, PolynomialBezier.prototype.boundingBox = function() {
            var t = this.bounds();
            return {
                left: t.x.min,
                right: t.x.max,
                top: t.y.min,
                bottom: t.y.max,
                width: t.x.max - t.x.min,
                height: t.y.max - t.y.min,
                cx: (t.x.max + t.x.min) / 2,
                cy: (t.y.max + t.y.min) / 2
            }
        };

        function intersectData(t, e, r) {
            var i = t.boundingBox();
            return {
                cx: i.cx,
                cy: i.cy,
                width: i.width,
                height: i.height,
                bez: t,
                t: (e + r) / 2,
                t1: e,
                t2: r
            }
        }

        function splitData(t) {
            var e = t.bez.split(.5);
            return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
        }

        function boxIntersect(t, e) {
            return Math.abs(t.cx - e.cx) * 2 < t.width + e.width && Math.abs(t.cy - e.cy) * 2 < t.height + e.height
        }

        function intersectsImpl(t, e, r, i, s, a) {
            if (boxIntersect(t, e)) {
                if (r >= a || t.width <= i && t.height <= i && e.width <= i && e.height <= i) {
                    s.push([t.t, e.t]);
                    return
                }
                var n = splitData(t),
                    m = splitData(e);
                intersectsImpl(n[0], m[0], r + 1, i, s, a), intersectsImpl(n[0], m[1], r + 1, i, s, a), intersectsImpl(n[1], m[0], r + 1, i, s, a), intersectsImpl(n[1], m[1], r + 1, i, s, a)
            }
        }
        PolynomialBezier.prototype.intersections = function(t, e, r) {
            e === void 0 && (e = 2), r === void 0 && (r = 7);
            var i = [];
            return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, i, r), i
        }, PolynomialBezier.shapeSegment = function(t, e) {
            var r = (e + 1) % t.length();
            return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], !0)
        }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
            var r = (e + 1) % t.length();
            return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], !0)
        };

        function crossProduct(t, e) {
            return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
        }

        function lineIntersection(t, e, r, i) {
            var s = [t[0], t[1], 1],
                a = [e[0], e[1], 1],
                n = [r[0], r[1], 1],
                m = [i[0], i[1], 1],
                h = crossProduct(crossProduct(s, a), crossProduct(n, m));
            return floatZero(h[2]) ? null : [h[0] / h[2], h[1] / h[2]]
        }

        function polarOffset(t, e, r) {
            return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r]
        }

        function pointDistance(t, e) {
            return Math.hypot(t[0] - e[0], t[1] - e[1])
        }

        function pointEqual(t, e) {
            return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
        }

        function ZigZagModifier() {}
        extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0
        };

        function setPoint(t, e, r, i, s, a, n) {
            var m = r - Math.PI / 2,
                h = r + Math.PI / 2,
                y = e[0] + Math.cos(r) * i * s,
                v = e[1] - Math.sin(r) * i * s;
            t.setTripleAt(y, v, y + Math.cos(m) * a, v - Math.sin(m) * a, y + Math.cos(h) * n, v - Math.sin(h) * n, t.length())
        }

        function getPerpendicularVector(t, e) {
            var r = [e[0] - t[0], e[1] - t[1]],
                i = -Math.PI * .5,
                s = [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]];
            return s
        }

        function getProjectingAngle(t, e) {
            var r = e === 0 ? t.length() - 1 : e - 1,
                i = (e + 1) % t.length(),
                s = t.v[r],
                a = t.v[i],
                n = getPerpendicularVector(s, a);
            return Math.atan2(0, 1) - Math.atan2(n[1], n[0])
        }

        function zigZagCorner(t, e, r, i, s, a, n) {
            var m = getProjectingAngle(e, r),
                h = e.v[r % e._length],
                y = e.v[r === 0 ? e._length - 1 : r - 1],
                v = e.v[(r + 1) % e._length],
                E = a === 2 ? Math.sqrt(Math.pow(h[0] - y[0], 2) + Math.pow(h[1] - y[1], 2)) : 0,
                c = a === 2 ? Math.sqrt(Math.pow(h[0] - v[0], 2) + Math.pow(h[1] - v[1], 2)) : 0;
            setPoint(t, e.v[r % e._length], m, n, i, c / ((s + 1) * 2), E / ((s + 1) * 2))
        }

        function zigZagSegment(t, e, r, i, s, a) {
            for (var n = 0; n < i; n += 1) {
                var m = (n + 1) / (i + 1),
                    h = s === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
                    y = e.normalAngle(m),
                    v = e.point(m);
                setPoint(t, v, y, a, r, h / ((i + 1) * 2), h / ((i + 1) * 2)), a = -a
            }
            return a
        }
        ZigZagModifier.prototype.processPath = function(t, e, r, i) {
            var s = t._length,
                a = shapePool.newElement();
            if (a.c = t.c, t.c || (s -= 1), s === 0) return a;
            var n = -1,
                m = PolynomialBezier.shapeSegment(t, 0);
            zigZagCorner(a, t, 0, e, r, i, n);
            for (var h = 0; h < s; h += 1) n = zigZagSegment(a, m, e, r, i, -n), h === s - 1 && !t.c ? m = null : m = PolynomialBezier.shapeSegment(t, (h + 1) % s), zigZagCorner(a, t, h + 1, e, r, i, n);
            return a
        }, ZigZagModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length,
                s, a, n = this.amplitude.v,
                m = Math.max(0, Math.round(this.frequency.v)),
                h = this.pointsType.v;
            if (n !== 0) {
                var y, v;
                for (r = 0; r < i; r += 1) {
                    if (y = this.shapes[r], v = y.localShapeCollection, !(!y.shape._mdf && !this._mdf && !t))
                        for (v.releaseShapes(), y.shape._mdf = !0, e = y.shape.paths.shapes, a = y.shape.paths._length, s = 0; s < a; s += 1) v.addShape(this.processPath(e[s], n, m, h));
                    y.shape.paths = y.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        };

        function linearOffset(t, e, r) {
            var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
            return [polarOffset(t, i, r), polarOffset(e, i, r)]
        }

        function offsetSegment(t, e) {
            var r, i, s, a, n, m, h;
            h = linearOffset(t.points[0], t.points[1], e), r = h[0], i = h[1], h = linearOffset(t.points[1], t.points[2], e), s = h[0], a = h[1], h = linearOffset(t.points[2], t.points[3], e), n = h[0], m = h[1];
            var y = lineIntersection(r, i, s, a);
            y === null && (y = i);
            var v = lineIntersection(n, m, s, a);
            return v === null && (v = n), new PolynomialBezier(r, y, v, m)
        }

        function joinLines(t, e, r, i, s) {
            var a = e.points[3],
                n = r.points[0];
            if (i === 3 || pointEqual(a, n)) return a;
            if (i === 2) {
                var m = -e.tangentAngle(1),
                    h = -r.tangentAngle(0) + Math.PI,
                    y = lineIntersection(a, polarOffset(a, m + Math.PI / 2, 100), n, polarOffset(n, m + Math.PI / 2, 100)),
                    v = y ? pointDistance(y, a) : pointDistance(a, n) / 2,
                    E = polarOffset(a, m, 2 * v * roundCorner);
                return t.setXYAt(E[0], E[1], "o", t.length() - 1), E = polarOffset(n, h, 2 * v * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], E[0], E[1], t.length()), n
            }
            var c = pointEqual(a, e.points[2]) ? e.points[0] : e.points[2],
                P = pointEqual(n, r.points[1]) ? r.points[3] : r.points[1],
                g = lineIntersection(c, a, n, P);
            return g && pointDistance(g, a) < s ? (t.setTripleAt(g[0], g[1], g[0], g[1], g[0], g[1], t.length()), g) : a
        }

        function getIntersection(t, e) {
            var r = t.intersections(e);
            return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
        }

        function pruneSegmentIntersection(t, e) {
            var r = t.slice(),
                i = e.slice(),
                s = getIntersection(t[t.length - 1], e[0]);
            return s && (r[t.length - 1] = t[t.length - 1].split(s[0])[0], i[0] = e[0].split(s[1])[1]), t.length > 1 && e.length > 1 && (s = getIntersection(t[0], e[e.length - 1]), s) ? [
                [t[0].split(s[0])[0]],
                [e[e.length - 1].split(s[1])[1]]
            ] : [r, i]
        }

        function pruneIntersections(t) {
            for (var e, r = 1; r < t.length; r += 1) e = pruneSegmentIntersection(t[r - 1], t[r]), t[r - 1] = e[0], t[r] = e[1];
            return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
        }

        function offsetSegmentSplit(t, e) {
            var r = t.inflectionPoints(),
                i, s, a, n;
            if (r.length === 0) return [offsetSegment(t, e)];
            if (r.length === 1 || floatEqual(r[1], 1)) return a = t.split(r[0]), i = a[0], s = a[1], [offsetSegment(i, e), offsetSegment(s, e)];
            a = t.split(r[0]), i = a[0];
            var m = (r[1] - r[0]) / (1 - r[0]);
            return a = a[1].split(m), n = a[0], s = a[1], [offsetSegment(i, e), offsetSegment(n, e), offsetSegment(s, e)]
        }

        function OffsetPathModifier() {}
        extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0
        }, OffsetPathModifier.prototype.processPath = function(t, e, r, i) {
            var s = shapePool.newElement();
            s.c = t.c;
            var a = t.length();
            t.c || (a -= 1);
            var n, m, h, y = [];
            for (n = 0; n < a; n += 1) h = PolynomialBezier.shapeSegment(t, n), y.push(offsetSegmentSplit(h, e));
            if (!t.c)
                for (n = a - 1; n >= 0; n -= 1) h = PolynomialBezier.shapeSegmentInverted(t, n), y.push(offsetSegmentSplit(h, e));
            y = pruneIntersections(y);
            var v = null,
                E = null;
            for (n = 0; n < y.length; n += 1) {
                var c = y[n];
                for (E && (v = joinLines(s, E, c[0], r, i)), E = c[c.length - 1], m = 0; m < c.length; m += 1) h = c[m], v && pointEqual(h.points[0], v) ? s.setXYAt(h.points[1][0], h.points[1][1], "o", s.length() - 1) : s.setTripleAt(h.points[0][0], h.points[0][1], h.points[1][0], h.points[1][1], h.points[0][0], h.points[0][1], s.length()), s.setTripleAt(h.points[3][0], h.points[3][1], h.points[3][0], h.points[3][1], h.points[2][0], h.points[2][1], s.length()), v = h.points[3]
            }
            return y.length && joinLines(s, E, y[0][0], r, i), s
        }, OffsetPathModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length,
                s, a, n = this.amount.v,
                m = this.miterLimit.v,
                h = this.lineJoin;
            if (n !== 0) {
                var y, v;
                for (r = 0; r < i; r += 1) {
                    if (y = this.shapes[r], v = y.localShapeCollection, !(!y.shape._mdf && !this._mdf && !t))
                        for (v.releaseShapes(), y.shape._mdf = !0, e = y.shape.paths.shapes, a = y.shape.paths._length, s = 0; s < a; s += 1) v.addShape(this.processPath(e[s], n, h, m));
                    y.shape.paths = y.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        };

        function getFontProperties(t) {
            for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", s = e.length, a, n = 0; n < s; n += 1) switch (a = e[n].toLowerCase(), a) {
                case "italic":
                    i = "italic";
                    break;
                case "bold":
                    r = "700";
                    break;
                case "black":
                    r = "900";
                    break;
                case "medium":
                    r = "500";
                    break;
                case "regular":
                case "normal":
                    r = "400";
                    break;
                case "light":
                case "thin":
                    r = "200";
                    break
            }
            return {
                style: i,
                weight: t.fWeight || r
            }
        }
        var FontManager = function() {
            var t = 5e3,
                e = {
                    w: 0,
                    size: 0,
                    shapes: [],
                    data: {
                        shapes: []
                    }
                },
                r = [];
            r = r.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
            var i = 127988,
                s = 917631,
                a = 917601,
                n = 917626,
                m = 65039,
                h = 8205,
                y = 127462,
                v = 127487,
                E = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

            function c(S) {
                var _ = S.split(","),
                    f, A = _.length,
                    I = [];
                for (f = 0; f < A; f += 1) _[f] !== "sans-serif" && _[f] !== "monospace" && I.push(_[f]);
                return I.join(",")
            }

            function P(S, _) {
                var f = createTag("span");
                f.setAttribute("aria-hidden", !0), f.style.fontFamily = _;
                var A = createTag("span");
                A.innerText = "giItT1WQy@!-/#", f.style.position = "absolute", f.style.left = "-10000px", f.style.top = "-10000px", f.style.fontSize = "300px", f.style.fontVariant = "normal", f.style.fontStyle = "normal", f.style.fontWeight = "normal", f.style.letterSpacing = "0", f.appendChild(A), document.body.appendChild(f);
                var I = A.offsetWidth;
                return A.style.fontFamily = c(S) + ", " + _, {
                    node: A,
                    w: I,
                    parent: f
                }
            }

            function g() {
                var S, _ = this.fonts.length,
                    f, A, I = _;
                for (S = 0; S < _; S += 1) this.fonts[S].loaded ? I -= 1 : this.fonts[S].fOrigin === "n" || this.fonts[S].origin === 0 ? this.fonts[S].loaded = !0 : (f = this.fonts[S].monoCase.node, A = this.fonts[S].monoCase.w, f.offsetWidth !== A ? (I -= 1, this.fonts[S].loaded = !0) : (f = this.fonts[S].sansCase.node, A = this.fonts[S].sansCase.w, f.offsetWidth !== A && (I -= 1, this.fonts[S].loaded = !0)), this.fonts[S].loaded && (this.fonts[S].sansCase.parent.parentNode.removeChild(this.fonts[S].sansCase.parent), this.fonts[S].monoCase.parent.parentNode.removeChild(this.fonts[S].monoCase.parent)));
                I !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
            }

            function d(S, _) {
                var f = document.body && _ ? "svg" : "canvas",
                    A, I = getFontProperties(S);
                if (f === "svg") {
                    var T = createNS("text");
                    T.style.fontSize = "100px", T.setAttribute("font-family", S.fFamily), T.setAttribute("font-style", I.style), T.setAttribute("font-weight", I.weight), T.textContent = "1", S.fClass ? (T.style.fontFamily = "inherit", T.setAttribute("class", S.fClass)) : T.style.fontFamily = S.fFamily, _.appendChild(T), A = T
                } else {
                    var O = new OffscreenCanvas(500, 500).getContext("2d");
                    O.font = I.style + " " + I.weight + " 100px " + S.fFamily, A = O
                }

                function B(j) {
                    return f === "svg" ? (A.textContent = j, A.getComputedTextLength()) : A.measureText(j).width
                }
                return {
                    measureText: B
                }
            }

            function x(S, _) {
                if (!S) {
                    this.isLoaded = !0;
                    return
                }
                if (this.chars) {
                    this.isLoaded = !0, this.fonts = S.list;
                    return
                }
                if (!document.body) {
                    this.isLoaded = !0, S.list.forEach(function(X) {
                        X.helper = d(X), X.cache = {}
                    }), this.fonts = S.list;
                    return
                }
                var f = S.list,
                    A, I = f.length,
                    T = I;
                for (A = 0; A < I; A += 1) {
                    var O = !0,
                        B, j;
                    if (f[A].loaded = !1, f[A].monoCase = P(f[A].fFamily, "monospace"), f[A].sansCase = P(f[A].fFamily, "sans-serif"), !f[A].fPath) f[A].loaded = !0, T -= 1;
                    else if (f[A].fOrigin === "p" || f[A].origin === 3) {
                        if (B = document.querySelectorAll('style[f-forigin="p"][f-family="' + f[A].fFamily + '"], style[f-origin="3"][f-family="' + f[A].fFamily + '"]'), B.length > 0 && (O = !1), O) {
                            var N = createTag("style");
                            N.setAttribute("f-forigin", f[A].fOrigin), N.setAttribute("f-origin", f[A].origin), N.setAttribute("f-family", f[A].fFamily), N.type = "text/css", N.innerText = "@font-face {font-family: " + f[A].fFamily + "; font-style: normal; src: url('" + f[A].fPath + "');}", _.appendChild(N)
                        }
                    } else if (f[A].fOrigin === "g" || f[A].origin === 1) {
                        for (B = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), j = 0; j < B.length; j += 1) B[j].href.indexOf(f[A].fPath) !== -1 && (O = !1);
                        if (O) {
                            var H = createTag("link");
                            H.setAttribute("f-forigin", f[A].fOrigin), H.setAttribute("f-origin", f[A].origin), H.type = "text/css", H.rel = "stylesheet", H.href = f[A].fPath, document.body.appendChild(H)
                        }
                    } else if (f[A].fOrigin === "t" || f[A].origin === 2) {
                        for (B = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), j = 0; j < B.length; j += 1) f[A].fPath === B[j].src && (O = !1);
                        if (O) {
                            var $ = createTag("link");
                            $.setAttribute("f-forigin", f[A].fOrigin), $.setAttribute("f-origin", f[A].origin), $.setAttribute("rel", "stylesheet"), $.setAttribute("href", f[A].fPath), _.appendChild($)
                        }
                    }
                    f[A].helper = d(f[A], _), f[A].cache = {}, this.fonts.push(f[A])
                }
                T === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
            }

            function p(S) {
                if (S) {
                    this.chars || (this.chars = []);
                    var _, f = S.length,
                        A, I = this.chars.length,
                        T;
                    for (_ = 0; _ < f; _ += 1) {
                        for (A = 0, T = !1; A < I;) this.chars[A].style === S[_].style && this.chars[A].fFamily === S[_].fFamily && this.chars[A].ch === S[_].ch && (T = !0), A += 1;
                        T || (this.chars.push(S[_]), I += 1)
                    }
                }
            }

            function o(S, _, f) {
                for (var A = 0, I = this.chars.length; A < I;) {
                    if (this.chars[A].ch === S && this.chars[A].style === _ && this.chars[A].fFamily === f) return this.chars[A];
                    A += 1
                }
                return (typeof S == "string" && S.charCodeAt(0) !== 13 || !S) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", S, _, f)), e
            }

            function l(S, _, f) {
                var A = this.getFontByName(_),
                    I = S;
                if (!A.cache[I]) {
                    var T = A.helper;
                    if (S === " ") {
                        var O = T.measureText("|" + S + "|"),
                            B = T.measureText("||");
                        A.cache[I] = (O - B) / 100
                    } else A.cache[I] = T.measureText(S) / 100
                }
                return A.cache[I] * f
            }

            function u(S) {
                for (var _ = 0, f = this.fonts.length; _ < f;) {
                    if (this.fonts[_].fName === S) return this.fonts[_];
                    _ += 1
                }
                return this.fonts[0]
            }

            function b(S) {
                var _ = 0,
                    f = S.charCodeAt(0);
                if (f >= 55296 && f <= 56319) {
                    var A = S.charCodeAt(1);
                    A >= 56320 && A <= 57343 && (_ = (f - 55296) * 1024 + A - 56320 + 65536)
                }
                return _
            }

            function M(S, _) {
                var f = S.toString(16) + _.toString(16);
                return E.indexOf(f) !== -1
            }

            function F(S) {
                return S === h
            }

            function k(S) {
                return S === m
            }

            function C(S) {
                var _ = b(S);
                return _ >= y && _ <= v
            }

            function R(S) {
                return C(S.substr(0, 2)) && C(S.substr(2, 2))
            }

            function L(S) {
                return r.indexOf(S) !== -1
            }

            function w(S, _) {
                var f = b(S.substr(_, 2));
                if (f !== i) return !1;
                var A = 0;
                for (_ += 2; A < 5;) {
                    if (f = b(S.substr(_, 2)), f < a || f > n) return !1;
                    A += 1, _ += 2
                }
                return b(S.substr(_, 2)) === s
            }

            function G() {
                this.isLoaded = !0
            }
            var D = function() {
                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
            };
            D.isModifier = M, D.isZeroWidthJoiner = F, D.isFlagEmoji = R, D.isRegionalCode = C, D.isCombinedCharacter = L, D.isRegionalFlag = w, D.isVariationSelector = k, D.BLACK_FLAG_CODE_POINT = i;
            var V = {
                addChars: p,
                addFonts: x,
                getCharData: o,
                getFontByName: u,
                measureText: l,
                checkLoadedFonts: g,
                setIsLoaded: G
            };
            return D.prototype = V, D
        }();

        function SlotManager(t) {
            this.animationData = t
        }
        SlotManager.prototype.getProp = function(t) {
            return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
        };

        function slotFactory(t) {
            return new SlotManager(t)
        }

        function RenderableElement() {}
        RenderableElement.prototype = {
            initRenderable: function() {
                this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
            },
            addRenderableComponent: function(t) {
                this.renderableComponents.indexOf(t) === -1 && this.renderableComponents.push(t)
            },
            removeRenderableComponent: function(t) {
                this.renderableComponents.indexOf(t) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
            },
            prepareRenderableFrame: function(t) {
                this.checkLayerLimits(t)
            },
            checkTransparency: function() {
                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
            },
            checkLayerLimits: function(t) {
                this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
            },
            renderRenderable: function() {
                var t, e = this.renderableComponents.length;
                for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
            },
            sourceRectAtTime: function() {
                return {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                }
            },
            getLayerSize: function() {
                return this.data.ty === 5 ? {
                    w: this.data.textData.width,
                    h: this.data.textData.height
                } : {
                    w: this.data.width,
                    h: this.data.height
                }
            }
        };
        var getBlendMode = function() {
            var t = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity"
            };
            return function(e) {
                return t[e] || ""
            }
        }();

        function SliderEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function AngleEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function ColorEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }

        function PointEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }

        function LayerIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function MaskIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function CheckboxEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function NoValueEffect() {
            this.p = {}
        }

        function EffectsManager(t, e) {
            var r = t.ef || [];
            this.effectElements = [];
            var i, s = r.length,
                a;
            for (i = 0; i < s; i += 1) a = new GroupEffect(r[i], e), this.effectElements.push(a)
        }

        function GroupEffect(t, e) {
            this.init(t, e)
        }
        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
            var r, i = this.data.ef.length,
                s, a = this.data.ef;
            for (r = 0; r < i; r += 1) {
                switch (s = null, a[r].ty) {
                    case 0:
                        s = new SliderEffect(a[r], e, this);
                        break;
                    case 1:
                        s = new AngleEffect(a[r], e, this);
                        break;
                    case 2:
                        s = new ColorEffect(a[r], e, this);
                        break;
                    case 3:
                        s = new PointEffect(a[r], e, this);
                        break;
                    case 4:
                    case 7:
                        s = new CheckboxEffect(a[r], e, this);
                        break;
                    case 10:
                        s = new LayerIndexEffect(a[r], e, this);
                        break;
                    case 11:
                        s = new MaskIndexEffect(a[r], e, this);
                        break;
                    case 5:
                        s = new EffectsManager(a[r], e);
                        break;
                    default:
                        s = new NoValueEffect(a[r]);
                        break
                }
                s && this.effectElements.push(s)
            }
        };

        function BaseElement() {}
        BaseElement.prototype = {
            checkMasks: function() {
                if (!this.data.hasMask) return !1;
                for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                    if (this.data.masksProperties[t].mode !== "n" && this.data.masksProperties[t].cl !== !1) return !0;
                    t += 1
                }
                return !1
            },
            initExpressions: function() {
                var t = getExpressionInterfaces();
                if (t) {
                    var e = t("layer"),
                        r = t("effects"),
                        i = t("shape"),
                        s = t("text"),
                        a = t("comp");
                    this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                    var n = r.createEffectsInterface(this, this.layerInterface);
                    this.layerInterface.registerEffectsInterface(n), this.data.ty === 0 || this.data.xt ? this.compInterface = a(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = i(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = s(this), this.layerInterface.text = this.layerInterface.textInterface)
                }
            },
            setBlendMode: function() {
                var t = getBlendMode(this.data.bm),
                    e = this.baseElement || this.layerElement;
                e.style["mix-blend-mode"] = t
            },
            initBaseData: function(t, e, r) {
                this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
            },
            getType: function() {
                return this.type
            },
            sourceRectAtTime: function() {}
        };

        function FrameElement() {}
        FrameElement.prototype = {
            initFrame: function() {
                this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
            },
            prepareProperties: function(t, e) {
                var r, i = this.dynamicProperties.length;
                for (r = 0; r < i; r += 1)(e || this._isParent && this.dynamicProperties[r].propType === "transform") && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
            },
            addDynamicProperty: function(t) {
                this.dynamicProperties.indexOf(t) === -1 && this.dynamicProperties.push(t)
            }
        };

        function FootageElement(t, e, r) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r)
        }
        FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
            return null
        }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
            var t = getExpressionInterfaces();
            if (t) {
                var e = t("footage");
                this.layerInterface = e(this)
            }
        }, FootageElement.prototype.getFootageData = function() {
            return this.footageData
        };

        function AudioElement(t, e, r) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1;
            var i = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
                k: [100]
            }, 1, .01, this)
        }
        AudioElement.prototype.prepareFrame = function(t) {
            if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
            else {
                var e = this.tm.v;
                this._currentTime = e
            }
            this._volume = this.lv.v[0];
            var r = this._volume * this._volumeMultiplier;
            this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
        }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
            this.audio.pause(), this._isPlaying = !1
        }, AudioElement.prototype.pause = function() {
            this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
        }, AudioElement.prototype.resume = function() {
            this._canPlay = !0
        }, AudioElement.prototype.setRate = function(t) {
            this.audio.rate(t)
        }, AudioElement.prototype.volume = function(t) {
            this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
        }, AudioElement.prototype.getBaseElement = function() {
            return null
        }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {};

        function BaseRenderer() {}
        BaseRenderer.prototype.checkLayers = function(t) {
            var e, r = this.layers.length,
                i;
            for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e], i.ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : !1;
            this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function(t) {
            switch (t.ty) {
                case 2:
                    return this.createImage(t);
                case 0:
                    return this.createComp(t);
                case 1:
                    return this.createSolid(t);
                case 3:
                    return this.createNull(t);
                case 4:
                    return this.createShape(t);
                case 5:
                    return this.createText(t);
                case 6:
                    return this.createAudio(t);
                case 13:
                    return this.createCamera(t);
                case 15:
                    return this.createFootage(t);
                default:
                    return this.createNull(t)
            }
        }, BaseRenderer.prototype.createCamera = function() {
            throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.createAudio = function(t) {
            return new AudioElement(t, this.globalData, this)
        }, BaseRenderer.prototype.createFootage = function(t) {
            return new FootageElement(t, this.globalData, this)
        }, BaseRenderer.prototype.buildAllItems = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) this.buildItem(t);
            this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function(t) {
            this.completeLayers = !1;
            var e, r = t.length,
                i, s = this.layers.length;
            for (e = 0; e < r; e += 1)
                for (i = 0; i < s;) {
                    if (this.layers[i].id === t[e].id) {
                        this.layers[i] = t[e];
                        break
                    }
                    i += 1
                }
        }, BaseRenderer.prototype.setProjectInterface = function(t) {
            this.globalData.projectInterface = t
        }, BaseRenderer.prototype.initItems = function() {
            this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
            for (var i = this.elements, s = this.layers, a = 0, n = s.length; a < n;) s[a].ind == e && (!i[a] || i[a] === !0 ? (this.buildItem(a), this.addPendingElement(t)) : (r.push(i[a]), i[a].setAsParent(), s[a].parent !== void 0 ? this.buildElementParenting(t, s[a].parent, r) : t.setHierarchy(r))), a += 1
        }, BaseRenderer.prototype.addPendingElement = function(t) {
            this.pendingElements.push(t)
        }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1)
                if (t[e].xt) {
                    var i = this.createComp(t[e]);
                    i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
                }
        }, BaseRenderer.prototype.getElementById = function(t) {
            var e, r = this.elements.length;
            for (e = 0; e < r; e += 1)
                if (this.elements[e].data.ind === t) return this.elements[e];
            return null
        }, BaseRenderer.prototype.getElementByPath = function(t) {
            var e = t.shift(),
                r;
            if (typeof e == "number") r = this.elements[e];
            else {
                var i, s = this.elements.length;
                for (i = 0; i < s; i += 1)
                    if (this.elements[i].data.nm === e) {
                        r = this.elements[i];
                        break
                    }
            }
            return t.length === 0 ? r : r.getElementByPath(t)
        }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
            this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                w: t.w,
                h: t.h
            }
        };
        var effectTypes = {
            TRANSFORM_EFFECT: "transformEFfect"
        };

        function TransformElement() {}
        TransformElement.prototype = {
            initTransform: function() {
                var t = new Matrix;
                this.finalTransform = {
                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                        o: 0
                    },
                    _matMdf: !1,
                    _localMatMdf: !1,
                    _opMdf: !1,
                    mat: t,
                    localMat: t,
                    localOpacity: 1
                }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
            },
            renderTransform: function() {
                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                    var t, e = this.finalTransform.mat,
                        r = 0,
                        i = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                        for (; r < i;) {
                            if (this.hierarchy[r].finalTransform.mProp._mdf) {
                                this.finalTransform._matMdf = !0;
                                break
                            }
                            r += 1
                        }
                    if (this.finalTransform._matMdf)
                        for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < i; r += 1) e.multiply(this.hierarchy[r].finalTransform.mProp.v)
                }
                this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
            },
            renderLocalTransform: function() {
                if (this.localTransforms) {
                    var t = 0,
                        e = this.localTransforms.length;
                    if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                        for (; t < e;) this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
                    if (this.finalTransform._localMatMdf) {
                        var r = this.finalTransform.localMat;
                        for (this.localTransforms[0].matrix.clone(r), t = 1; t < e; t += 1) {
                            var i = this.localTransforms[t].matrix;
                            r.multiply(i)
                        }
                        r.multiply(this.finalTransform.mat)
                    }
                    if (this.finalTransform._opMdf) {
                        var s = this.finalTransform.localOpacity;
                        for (t = 0; t < e; t += 1) s *= this.localTransforms[t].opacity * .01;
                        this.finalTransform.localOpacity = s
                    }
                }
            },
            searchEffectTransforms: function() {
                if (this.renderableEffectsManager) {
                    var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                    if (t.length) {
                        this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                        var e = 0,
                            r = t.length;
                        for (e = 0; e < r; e += 1) this.localTransforms.push(t[e])
                    }
                }
            },
            globalToLocal: function(t) {
                var e = [];
                e.push(this.finalTransform);
                for (var r = !0, i = this.comp; r;) i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : r = !1;
                var s, a = e.length,
                    n;
                for (s = 0; s < a; s += 1) n = e[s].mat.applyToPointArray(0, 0, 0), t = [t[0] - n[0], t[1] - n[1], 0];
                return t
            },
            mHelper: new Matrix
        };

        function MaskElement(t, e, r) {
            this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var i = this.globalData.defs,
                s, a = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(a), this.solidPath = "";
            var n, m = this.masksProperties,
                h = 0,
                y = [],
                v, E, c = createElementID(),
                P, g, d, x, p = "clipPath",
                o = "clip-path";
            for (s = 0; s < a; s += 1)
                if ((m[s].mode !== "a" && m[s].mode !== "n" || m[s].inv || m[s].o.k !== 100 || m[s].o.x) && (p = "mask", o = "mask"), (m[s].mode === "s" || m[s].mode === "i") && h === 0 ? (P = createNS("rect"), P.setAttribute("fill", "#ffffff"), P.setAttribute("width", this.element.comp.data.w || 0), P.setAttribute("height", this.element.comp.data.h || 0), y.push(P)) : P = null, n = createNS("path"), m[s].mode === "n") this.viewData[s] = {
                    op: PropertyFactory.getProp(this.element, m[s].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, m[s], 3),
                    elem: n,
                    lastPath: ""
                }, i.appendChild(n);
                else {
                    h += 1, n.setAttribute("fill", m[s].mode === "s" ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero");
                    var l;
                    if (m[s].x.k !== 0 ? (p = "mask", o = "mask", x = PropertyFactory.getProp(this.element, m[s].x, 0, null, this.element), l = createElementID(), g = createNS("filter"), g.setAttribute("id", l), d = createNS("feMorphology"), d.setAttribute("operator", "erode"), d.setAttribute("in", "SourceGraphic"), d.setAttribute("radius", "0"), g.appendChild(d), i.appendChild(g), n.setAttribute("stroke", m[s].mode === "s" ? "#000000" : "#ffffff")) : (d = null, x = null), this.storedData[s] = {
                            elem: n,
                            x,
                            expan: d,
                            lastPath: "",
                            lastOperator: "",
                            filterId: l,
                            lastRadius: 0
                        }, m[s].mode === "i") {
                        E = y.length;
                        var u = createNS("g");
                        for (v = 0; v < E; v += 1) u.appendChild(y[v]);
                        var b = createNS("mask");
                        b.setAttribute("mask-type", "alpha"), b.setAttribute("id", c + "_" + h), b.appendChild(n), i.appendChild(b), u.setAttribute("mask", "url(" + getLocationHref() + "#" + c + "_" + h + ")"), y.length = 0, y.push(u)
                    } else y.push(n);
                    m[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
                        elem: n,
                        lastPath: "",
                        op: PropertyFactory.getProp(this.element, m[s].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, m[s], 3),
                        invRect: P
                    }, this.viewData[s].prop.k || this.drawPath(m[s], this.viewData[s].prop.v, this.viewData[s])
                }
            for (this.maskElement = createNS(p), a = y.length, s = 0; s < a; s += 1) this.maskElement.appendChild(y[s]);
            h > 0 && (this.maskElement.setAttribute("id", c), this.element.maskedElement.setAttribute(o, "url(" + getLocationHref() + "#" + c + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }
        MaskElement.prototype.getMaskProperty = function(t) {
            return this.viewData[t].prop
        }, MaskElement.prototype.renderFrame = function(t) {
            var e = this.element.finalTransform.mat,
                r, i = this.masksProperties.length;
            for (r = 0; r < i; r += 1)
                if ((this.viewData[r].prop._mdf || t) && this.drawPath(this.masksProperties[r], this.viewData[r].prop.v, this.viewData[r]), (this.viewData[r].op._mdf || t) && this.viewData[r].elem.setAttribute("fill-opacity", this.viewData[r].op.v), this.masksProperties[r].mode !== "n" && (this.viewData[r].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[r].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[r].x && (this.storedData[r].x._mdf || t))) {
                    var s = this.storedData[r].expan;
                    this.storedData[r].x.v < 0 ? (this.storedData[r].lastOperator !== "erode" && (this.storedData[r].lastOperator = "erode", this.storedData[r].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[r].filterId + ")")), s.setAttribute("radius", -this.storedData[r].x.v)) : (this.storedData[r].lastOperator !== "dilate" && (this.storedData[r].lastOperator = "dilate", this.storedData[r].elem.setAttribute("filter", null)), this.storedData[r].elem.setAttribute("stroke-width", this.storedData[r].x.v * 2))
                }
        }, MaskElement.prototype.getMaskelement = function() {
            return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function() {
            var t = "M0,0 ";
            return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t
        }, MaskElement.prototype.drawPath = function(t, e, r) {
            var i = " M" + e.v[0][0] + "," + e.v[0][1],
                s, a;
            for (a = e._length, s = 1; s < a; s += 1) i += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
            if (e.c && a > 1 && (i += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== i) {
                var n = "";
                r.elem && (e.c && (n = t.inv ? this.solidPath + i : i), r.elem.setAttribute("d", n)), r.lastPath = i
            }
        }, MaskElement.prototype.destroy = function() {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        };
        var filtersFactory = function() {
                var t = {};
                t.createFilter = e, t.createAlphaToLuminanceFilter = r;

                function e(i, s) {
                    var a = createNS("filter");
                    return a.setAttribute("id", i), s !== !0 && (a.setAttribute("filterUnits", "objectBoundingBox"), a.setAttribute("x", "0%"), a.setAttribute("y", "0%"), a.setAttribute("width", "100%"), a.setAttribute("height", "100%")), a
                }

                function r() {
                    var i = createNS("feColorMatrix");
                    return i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), i
                }
                return t
            }(),
            featureSupport = function() {
                var t = {
                    maskType: !0,
                    svgLumaHidden: !0,
                    offscreenCanvas: typeof OffscreenCanvas < "u"
                };
                return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t
            }(),
            registeredEffects = {},
            idPrefix = "filter_result_";

        function SVGEffects(t) {
            var e, r = "SourceGraphic",
                i = t.data.ef ? t.data.ef.length : 0,
                s = createElementID(),
                a = filtersFactory.createFilter(s, !0),
                n = 0;
            this.filters = [];
            var m;
            for (e = 0; e < i; e += 1) {
                m = null;
                var h = t.data.ef[e].ty;
                if (registeredEffects[h]) {
                    var y = registeredEffects[h].effect;
                    m = new y(a, t.effectsManager.effectElements[e], t, idPrefix + n, r), r = idPrefix + n, registeredEffects[h].countsAsEffect && (n += 1)
                }
                m && this.filters.push(m)
            }
            n && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this)
        }
        SVGEffects.prototype.renderFrame = function(t) {
            var e, r = this.filters.length;
            for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
        }, SVGEffects.prototype.getEffects = function(t) {
            var e, r = this.filters.length,
                i = [];
            for (e = 0; e < r; e += 1) this.filters[e].type === t && i.push(this.filters[e]);
            return i
        };

        function registerEffect(t, e, r) {
            registeredEffects[t] = {
                effect: e,
                countsAsEffect: r
            }
        }

        function SVGBaseElement() {}
        SVGBaseElement.prototype = {
            initRendererElement: function() {
                this.layerElement = createNS("g")
            },
            createContainerElements: function() {
                this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                var t = null;
                if (this.data.td) {
                    this.matteMasks = {};
                    var e = createNS("g");
                    e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
                    var r = createNS("clipPath"),
                        i = createNS("path");
                    i.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var s = createElementID();
                    if (r.setAttribute("id", s), r.appendChild(i), this.globalData.defs.appendChild(r), this.checkMasks()) {
                        var a = createNS("g");
                        a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), a.appendChild(this.layerElement), this.transformedElement = a, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                    } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")")
                }
                this.data.bm !== 0 && this.setBlendMode()
            },
            renderElement: function() {
                this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
            },
            destroyBaseElement: function() {
                this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
            },
            getBaseElement: function() {
                return this.data.hd ? null : this.baseElement
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
            },
            getMatte: function(t) {
                if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
                    var e = this.layerId + "_" + t,
                        r, i, s, a;
                    if (t === 1 || t === 3) {
                        var n = createNS("mask");
                        n.setAttribute("id", e), n.setAttribute("mask-type", t === 3 ? "luminance" : "alpha"), s = createNS("use"), s.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n.appendChild(s), this.globalData.defs.appendChild(n), !featureSupport.maskType && t === 1 && (n.setAttribute("mask-type", "luminance"), r = createElementID(), i = filtersFactory.createFilter(r), this.globalData.defs.appendChild(i), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), a.appendChild(s), n.appendChild(a), a.setAttribute("filter", "url(" + getLocationHref() + "#" + r + ")"))
                    } else if (t === 2) {
                        var m = createNS("mask");
                        m.setAttribute("id", e), m.setAttribute("mask-type", "alpha");
                        var h = createNS("g");
                        m.appendChild(h), r = createElementID(), i = filtersFactory.createFilter(r);
                        var y = createNS("feComponentTransfer");
                        y.setAttribute("in", "SourceGraphic"), i.appendChild(y);
                        var v = createNS("feFuncA");
                        v.setAttribute("type", "table"), v.setAttribute("tableValues", "1.0 0.0"), y.appendChild(v), this.globalData.defs.appendChild(i);
                        var E = createNS("rect");
                        E.setAttribute("width", this.comp.data.w), E.setAttribute("height", this.comp.data.h), E.setAttribute("x", "0"), E.setAttribute("y", "0"), E.setAttribute("fill", "#ffffff"), E.setAttribute("opacity", "0"), h.setAttribute("filter", "url(" + getLocationHref() + "#" + r + ")"), h.appendChild(E), s = createNS("use"), s.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(s), featureSupport.maskType || (m.setAttribute("mask-type", "luminance"), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), h.appendChild(E), a.appendChild(this.layerElement), h.appendChild(a)), this.globalData.defs.appendChild(m)
                    }
                    this.matteMasks[t] = e
                }
                return this.matteMasks[t]
            },
            setMatte: function(t) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
            }
        };

        function HierarchyElement() {}
        HierarchyElement.prototype = {
            initHierarchy: function() {
                this.hierarchy = [], this._isParent = !1, this.checkParenting()
            },
            setHierarchy: function(t) {
                this.hierarchy = t
            },
            setAsParent: function() {
                this._isParent = !0
            },
            checkParenting: function() {
                this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, [])
            }
        };

        function RenderableDOMElement() {}(function() {
            var t = {
                initElement: function(e, r, i) {
                    this.initFrame(), this.initBaseData(e, r, i), this.initTransform(e, r, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                },
                hide: function() {
                    if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                        var e = this.baseElement || this.layerElement;
                        e.style.display = "none", this.hidden = !0
                    }
                },
                show: function() {
                    if (this.isInRange && !this.isTransparent) {
                        if (!this.data.hd) {
                            var e = this.baseElement || this.layerElement;
                            e.style.display = "block"
                        }
                        this.hidden = !1, this._isFirstFrame = !0
                    }
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                },
                renderInnerContent: function() {},
                prepareFrame: function(e) {
                    this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency()
                },
                destroy: function() {
                    this.innerElem = null, this.destroyBaseElement()
                }
            };
            extendPrototype([RenderableElement, createProxyFunction(t)], RenderableDOMElement)
        })();

        function IImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, r), this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h
            }
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function() {
            return this.sourceRect
        };

        function ProcessedElement(t, e) {
            this.elem = t, this.pos = e
        }

        function IShapeElement() {}
        IShapeElement.prototype = {
            addShapeToModifiers: function(t) {
                var e, r = this.shapeModifiers.length;
                for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t)
            },
            isShapeInAnimatedModifiers: function(t) {
                for (var e = 0, r = this.shapeModifiers.length; e < r;)
                    if (this.shapeModifiers[e].isAnimatedWithShape(t)) return !0;
                return !1
            },
            renderModifiers: function() {
                if (this.shapeModifiers.length) {
                    var t, e = this.shapes.length;
                    for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                    e = this.shapeModifiers.length;
                    var r;
                    for (t = e - 1; t >= 0 && (r = this.shapeModifiers[t].processShapes(this._isFirstFrame), !r); t -= 1);
                }
            },
            searchProcessedElement: function(t) {
                for (var e = this.processedElements, r = 0, i = e.length; r < i;) {
                    if (e[r].elem === t) return e[r].pos;
                    r += 1
                }
                return 0
            },
            addProcessedElement: function(t, e) {
                for (var r = this.processedElements, i = r.length; i;)
                    if (i -= 1, r[i].elem === t) {
                        r[i].pos = e;
                        return
                    }
                r.push(new ProcessedElement(t, e))
            },
            prepareFrame: function(t) {
                this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
            }
        };
        var lineCapEnum = {
                1: "butt",
                2: "round",
                3: "square"
            },
            lineJoinEnum = {
                1: "miter",
                2: "round",
                3: "bevel"
            };

        function SVGShapeData(t, e, r) {
            this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
            for (var i = 0, s = t.length; i < s;) {
                if (t[i].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break
                }
                i += 1
            }
        }
        SVGShapeData.prototype.setAsAnimated = function() {
            this._isAnimated = !0
        };

        function SVGStyleData(t, e) {
            this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = t.hd === !0, this.pElem = createNS("path"), this.msElem = null
        }
        SVGStyleData.prototype.reset = function() {
            this.d = "", this._mdf = !1
        };

        function DashProperty(t, e, r, i) {
            this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
            var s, a = e.length || 0,
                n;
            for (s = 0; s < a; s += 1) n = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[s] = {
                n: e[s].n,
                p: n
            };
            this.k || this.getValue(!0), this._isAnimated = this.k
        }
        DashProperty.prototype.getValue = function(t) {
            if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                var e = 0,
                    r = this.dataProps.length;
                for (this.renderer === "svg" && (this.dashStr = ""), e = 0; e < r; e += 1) this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
            }
        }, extendPrototype([DynamicPropertyContainer], DashProperty);

        function SVGStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
        }
        extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);

        function SVGFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r
        }
        extendPrototype([DynamicPropertyContainer], SVGFillStyleData);

        function SVGNoStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = r
        }
        extendPrototype([DynamicPropertyContainer], SVGNoStyleData);

        function GradientProperty(t, e, r) {
            this.data = e, this.c = createTypedArray("uint8c", e.p * 4);
            var i = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
            this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }
        GradientProperty.prototype.comparePoints = function(t, e) {
            for (var r = 0, i = this.o.length / 2, s; r < i;) {
                if (s = Math.abs(t[r * 4] - t[e * 4 + r * 2]), s > .01) return !1;
                r += 1
            }
            return !0
        }, GradientProperty.prototype.checkCollapsable = function() {
            if (this.o.length / 2 !== this.c.length / 4) return !1;
            if (this.data.k.k[0].s)
                for (var t = 0, e = this.data.k.k.length; t < e;) {
                    if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                    t += 1
                } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0
        }, GradientProperty.prototype.getValue = function(t) {
            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                var e, r = this.data.p * 4,
                    i, s;
                for (e = 0; e < r; e += 1) i = e % 4 === 0 ? 100 : 255, s = Math.round(this.prop.v[e] * i), this.c[e] !== s && (this.c[e] = s, this._cmdf = !t);
                if (this.o.length)
                    for (r = this.prop.v.length, e = this.data.p * 4; e < r; e += 1) i = e % 2 === 0 ? 100 : 1, s = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== s && (this.o[e - this.data.p * 4] = s, this._omdf = !t);
                this._mdf = !t
            }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty);

        function SVGGradientFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r)
        }
        SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
            this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                k: 0
            }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                k: 0
            }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
            var r = createElementID(),
                i = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
            i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
            var s = [],
                a, n, m;
            for (m = e.g.p * 4, n = 0; n < m; n += 4) a = createNS("stop"), i.appendChild(a), s.push(a);
            t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = s
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var r, i, s, a = createNS("mask"),
                    n = createNS("path");
                a.appendChild(n);
                var m = createElementID(),
                    h = createElementID();
                a.setAttribute("id", h);
                var y = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
                y.setAttribute("id", m), y.setAttribute("spreadMethod", "pad"), y.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var v = this.stops;
                for (i = t.g.p * 4; i < s; i += 2) r = createNS("stop"), r.setAttribute("stop-color", "rgb(255,255,255)"), y.appendChild(r), v.push(r);
                n.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + m + ")"), t.ty === "gs" && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), t.lj === 1 && n.setAttribute("stroke-miterlimit", t.ml)), this.of = y, this.ms = a, this.ost = v, this.maskId = h, e.msElem = n
            }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);

        function SVGGradientStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated
        }
        extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);

        function ShapeGroupData() {
            this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }

        function SVGTransformData(t, e, r) {
            this.transform = {
                mProps: t,
                op: e,
                container: r
            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }
        var buildShapeString = function(t, e, r, i) {
                if (e === 0) return "";
                var s = t.o,
                    a = t.i,
                    n = t.v,
                    m, h = " M" + i.applyToPointStringified(n[0][0], n[0][1]);
                for (m = 1; m < e; m += 1) h += " C" + i.applyToPointStringified(s[m - 1][0], s[m - 1][1]) + " " + i.applyToPointStringified(a[m][0], a[m][1]) + " " + i.applyToPointStringified(n[m][0], n[m][1]);
                return r && e && (h += " C" + i.applyToPointStringified(s[m - 1][0], s[m - 1][1]) + " " + i.applyToPointStringified(a[0][0], a[0][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]), h += "z"), h
            },
            SVGElementsRenderer = function() {
                var t = new Matrix,
                    e = new Matrix,
                    r = {
                        createRenderFunction: i
                    };

                function i(E) {
                    switch (E.ty) {
                        case "fl":
                            return m;
                        case "gf":
                            return y;
                        case "gs":
                            return h;
                        case "st":
                            return v;
                        case "sh":
                        case "el":
                        case "rc":
                        case "sr":
                            return n;
                        case "tr":
                            return s;
                        case "no":
                            return a;
                        default:
                            return null
                    }
                }

                function s(E, c, P) {
                    (P || c.transform.op._mdf) && c.transform.container.setAttribute("opacity", c.transform.op.v), (P || c.transform.mProps._mdf) && c.transform.container.setAttribute("transform", c.transform.mProps.v.to2dCSS())
                }

                function a() {}

                function n(E, c, P) {
                    var g, d, x, p, o, l, u = c.styles.length,
                        b = c.lvl,
                        M, F, k, C;
                    for (l = 0; l < u; l += 1) {
                        if (p = c.sh._mdf || P, c.styles[l].lvl < b) {
                            for (F = e.reset(), k = b - c.styles[l].lvl, C = c.transformers.length - 1; !p && k > 0;) p = c.transformers[C].mProps._mdf || p, k -= 1, C -= 1;
                            if (p)
                                for (k = b - c.styles[l].lvl, C = c.transformers.length - 1; k > 0;) F.multiply(c.transformers[C].mProps.v), k -= 1, C -= 1
                        } else F = t;
                        if (M = c.sh.paths, d = M._length, p) {
                            for (x = "", g = 0; g < d; g += 1) o = M.shapes[g], o && o._length && (x += buildShapeString(o, o._length, o.c, F));
                            c.caches[l] = x
                        } else x = c.caches[l];
                        c.styles[l].d += E.hd === !0 ? "" : x, c.styles[l]._mdf = p || c.styles[l]._mdf
                    }
                }

                function m(E, c, P) {
                    var g = c.style;
                    (c.c._mdf || P) && g.pElem.setAttribute("fill", "rgb(" + bmFloor(c.c.v[0]) + "," + bmFloor(c.c.v[1]) + "," + bmFloor(c.c.v[2]) + ")"), (c.o._mdf || P) && g.pElem.setAttribute("fill-opacity", c.o.v)
                }

                function h(E, c, P) {
                    y(E, c, P), v(E, c, P)
                }

                function y(E, c, P) {
                    var g = c.gf,
                        d = c.g._hasOpacity,
                        x = c.s.v,
                        p = c.e.v;
                    if (c.o._mdf || P) {
                        var o = E.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                        c.style.pElem.setAttribute(o, c.o.v)
                    }
                    if (c.s._mdf || P) {
                        var l = E.t === 1 ? "x1" : "cx",
                            u = l === "x1" ? "y1" : "cy";
                        g.setAttribute(l, x[0]), g.setAttribute(u, x[1]), d && !c.g._collapsable && (c.of.setAttribute(l, x[0]), c.of.setAttribute(u, x[1]))
                    }
                    var b, M, F, k;
                    if (c.g._cmdf || P) {
                        b = c.cst;
                        var C = c.g.c;
                        for (F = b.length, M = 0; M < F; M += 1) k = b[M], k.setAttribute("offset", C[M * 4] + "%"), k.setAttribute("stop-color", "rgb(" + C[M * 4 + 1] + "," + C[M * 4 + 2] + "," + C[M * 4 + 3] + ")")
                    }
                    if (d && (c.g._omdf || P)) {
                        var R = c.g.o;
                        for (c.g._collapsable ? b = c.cst : b = c.ost, F = b.length, M = 0; M < F; M += 1) k = b[M], c.g._collapsable || k.setAttribute("offset", R[M * 2] + "%"), k.setAttribute("stop-opacity", R[M * 2 + 1])
                    }
                    if (E.t === 1)(c.e._mdf || P) && (g.setAttribute("x2", p[0]), g.setAttribute("y2", p[1]), d && !c.g._collapsable && (c.of.setAttribute("x2", p[0]), c.of.setAttribute("y2", p[1])));
                    else {
                        var L;
                        if ((c.s._mdf || c.e._mdf || P) && (L = Math.sqrt(Math.pow(x[0] - p[0], 2) + Math.pow(x[1] - p[1], 2)), g.setAttribute("r", L), d && !c.g._collapsable && c.of.setAttribute("r", L)), c.e._mdf || c.h._mdf || c.a._mdf || P) {
                            L || (L = Math.sqrt(Math.pow(x[0] - p[0], 2) + Math.pow(x[1] - p[1], 2)));
                            var w = Math.atan2(p[1] - x[1], p[0] - x[0]),
                                G = c.h.v;
                            G >= 1 ? G = .99 : G <= -1 && (G = -.99);
                            var D = L * G,
                                V = Math.cos(w + c.a.v) * D + x[0],
                                S = Math.sin(w + c.a.v) * D + x[1];
                            g.setAttribute("fx", V), g.setAttribute("fy", S), d && !c.g._collapsable && (c.of.setAttribute("fx", V), c.of.setAttribute("fy", S))
                        }
                    }
                }

                function v(E, c, P) {
                    var g = c.style,
                        d = c.d;
                    d && (d._mdf || P) && d.dashStr && (g.pElem.setAttribute("stroke-dasharray", d.dashStr), g.pElem.setAttribute("stroke-dashoffset", d.dashoffset[0])), c.c && (c.c._mdf || P) && g.pElem.setAttribute("stroke", "rgb(" + bmFloor(c.c.v[0]) + "," + bmFloor(c.c.v[1]) + "," + bmFloor(c.c.v[2]) + ")"), (c.o._mdf || P) && g.pElem.setAttribute("stroke-opacity", c.o.v), (c.w._mdf || P) && (g.pElem.setAttribute("stroke-width", c.w.v), g.msElem && g.msElem.setAttribute("stroke-width", c.w.v))
                }
                return r
            }();

        function SVGShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = []
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
            var t, e = this.shapes.length,
                r, i, s = this.stylesList.length,
                a, n = [],
                m = !1;
            for (i = 0; i < s; i += 1) {
                for (a = this.stylesList[i], m = !1, n.length = 0, t = 0; t < e; t += 1) r = this.shapes[t], r.styles.indexOf(a) !== -1 && (n.push(r), m = r._isAnimated || m);
                n.length > 1 && m && this.setShapesAsAnimated(n)
            }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) t[e].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
            var r, i = new SVGStyleData(t, e),
                s = i.pElem;
            if (t.ty === "st") r = new SVGStrokeStyleData(this, t, i);
            else if (t.ty === "fl") r = new SVGFillStyleData(this, t, i);
            else if (t.ty === "gf" || t.ty === "gs") {
                var a = t.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
                r = new a(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))
            } else t.ty === "no" && (r = new SVGNoStyleData(this, t, i));
            return (t.ty === "st" || t.ty === "gs") && (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), t.lj === 1 && s.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r
        }, SVGShapeElement.prototype.createGroupElement = function(t) {
            var e = new ShapeGroupData;
            return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
        }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
            var r = TransformPropertyFactory.getTransformProperty(this, t, this),
                i = new SVGTransformData(r, r.o, e);
            return this.addToAnimatedContents(t, i), i
        }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
            var i = 4;
            t.ty === "rc" ? i = 5 : t.ty === "el" ? i = 6 : t.ty === "sr" && (i = 7);
            var s = ShapePropertyFactory.getShapeProp(this, t, i, this),
                a = new SVGShapeData(e, r, s);
            return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a
        }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
            for (var r = 0, i = this.animatedContents.length; r < i;) {
                if (this.animatedContents[r].element === e) return;
                r += 1
            }
            this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(t),
                element: e,
                data: t
            })
        }, SVGShapeElement.prototype.setElementStyles = function(t) {
            var e = t.styles,
                r, i = this.stylesList.length;
            for (r = 0; r < i; r += 1) this.stylesList[r].closed || e.push(this.stylesList[r])
        }, SVGShapeElement.prototype.reloadShapes = function() {
            this._isFirstFrame = !0;
            var t, e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, s, a, n) {
            var m = [].concat(a),
                h, y = t.length - 1,
                v, E, c = [],
                P = [],
                g, d, x;
            for (h = y; h >= 0; h -= 1) {
                if (x = this.searchProcessedElement(t[h]), x ? e[h] = r[x - 1] : t[h]._render = n, t[h].ty === "fl" || t[h].ty === "st" || t[h].ty === "gf" || t[h].ty === "gs" || t[h].ty === "no") x ? e[h].style.closed = !1 : e[h] = this.createStyleElement(t[h], s), t[h]._render && e[h].style.pElem.parentNode !== i && i.appendChild(e[h].style.pElem), c.push(e[h].style);
                else if (t[h].ty === "gr") {
                    if (!x) e[h] = this.createGroupElement(t[h]);
                    else
                        for (E = e[h].it.length, v = 0; v < E; v += 1) e[h].prevViewData[v] = e[h].it[v];
                    this.searchShapes(t[h].it, e[h].it, e[h].prevViewData, e[h].gr, s + 1, m, n), t[h]._render && e[h].gr.parentNode !== i && i.appendChild(e[h].gr)
                } else t[h].ty === "tr" ? (x || (e[h] = this.createTransformElement(t[h], i)), g = e[h].transform, m.push(g)) : t[h].ty === "sh" || t[h].ty === "rc" || t[h].ty === "el" || t[h].ty === "sr" ? (x || (e[h] = this.createShapeElement(t[h], m, s)), this.setElementStyles(e[h])) : t[h].ty === "tm" || t[h].ty === "rd" || t[h].ty === "ms" || t[h].ty === "pb" || t[h].ty === "zz" || t[h].ty === "op" ? (x ? (d = e[h], d.closed = !1) : (d = ShapeModifiers.getModifier(t[h].ty), d.init(this, t[h]), e[h] = d, this.shapeModifiers.push(d)), P.push(d)) : t[h].ty === "rp" && (x ? (d = e[h], d.closed = !0) : (d = ShapeModifiers.getModifier(t[h].ty), e[h] = d, d.init(this, t, h, e), this.shapeModifiers.push(d), n = !1), P.push(d));
                this.addProcessedElement(t[h], h + 1)
            }
            for (y = c.length, h = 0; h < y; h += 1) c[h].closed = !0;
            for (y = P.length, h = 0; h < y; h += 1) P[h].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function() {
            this.renderModifiers();
            var t, e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].reset();
            for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function() {
            var t, e = this.animatedContents.length,
                r;
            for (t = 0; t < e; t += 1) r = this.animatedContents[t], (this._isFirstFrame || r.element._isAnimated) && r.data !== !0 && r.fn(r.data, r.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function() {
            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        };

        function LetterProps(t, e, r, i, s, a) {
            this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = s, this.p = a, this._mdf = {
                o: !0,
                sw: !!e,
                sc: !!r,
                fc: !!i,
                m: !0,
                p: !0
            }
        }
        LetterProps.prototype.update = function(t, e, r, i, s, a) {
            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
            var n = !1;
            return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, n = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, n = !0), this.m !== s && (this.m = s, this._mdf.m = !0, n = !0), a.length && (this.p[0] !== a[0] || this.p[1] !== a[1] || this.p[4] !== a[4] || this.p[5] !== a[5] || this.p[12] !== a[12] || this.p[13] !== a[13]) && (this.p = a, this._mdf.p = !0, n = !0), n
        };

        function TextProperty(t, e) {
            this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1
            }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
        }
        TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }, TextProperty.prototype.setCurrentData = function(t) {
            t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function() {
            return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function() {
            return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function(t) {
            this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function(t) {
            if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !t)) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData,
                    r = this.keysIndex;
                if (this.lock) {
                    this.setCurrentData(this.currentData);
                    return
                }
                this.lock = !0, this._mdf = !1;
                var i, s = this.effectsSequence.length,
                    a = t || this.data.d.k[this.keysIndex].s;
                for (i = 0; i < s; i += 1) r !== this.keysIndex ? a = this.effectsSequence[i](a, a.t) : a = this.effectsSequence[i](this.currentData, a.t);
                e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }, TextProperty.prototype.getKeyframeValue = function() {
            for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);) r += 1;
            return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function(t) {
            for (var e = [], r = 0, i = t.length, s, a, n = !1, m = !1, h = ""; r < i;) n = m, m = !1, s = t.charCodeAt(r), h = t.charAt(r), FontManager.isCombinedCharacter(s) ? n = !0 : s >= 55296 && s <= 56319 ? FontManager.isRegionalFlag(t, r) ? h = t.substr(r, 14) : (a = t.charCodeAt(r + 1), a >= 56320 && a <= 57343 && (FontManager.isModifier(s, a) ? (h = t.substr(r, 2), n = !0) : FontManager.isFlagEmoji(t.substr(r, 4)) ? h = t.substr(r, 4) : h = t.substr(r, 2))) : s > 56319 ? (a = t.charCodeAt(r + 1), FontManager.isVariationSelector(s) && (n = !0)) : FontManager.isZeroWidthJoiner(s) && (n = !0, m = !0), n ? (e[e.length - 1] += h, n = !1) : e.push(h), r += h.length;
            return e
        }, TextProperty.prototype.completeTextData = function(t) {
            t.__complete = !0;
            var e = this.elem.globalData.fontManager,
                r = this.data,
                i = [],
                s, a, n, m = 0,
                h, y = r.m.g,
                v = 0,
                E = 0,
                c = 0,
                P = [],
                g = 0,
                d = 0,
                x, p, o = e.getFontByName(t.f),
                l, u = 0,
                b = getFontProperties(o);
            t.fWeight = b.weight, t.fStyle = b.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), a = t.finalText.length, t.finalLineHeight = t.lh;
            var M = t.tr / 1e3 * t.finalSize,
                F;
            if (t.sz)
                for (var k = !0, C = t.sz[0], R = t.sz[1], L, w; k;) {
                    w = this.buildFinalText(t.t), L = 0, g = 0, a = w.length, M = t.tr / 1e3 * t.finalSize;
                    var G = -1;
                    for (s = 0; s < a; s += 1) F = w[s].charCodeAt(0), n = !1, w[s] === " " ? G = s : (F === 13 || F === 3) && (g = 0, n = !0, L += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (l = e.getCharData(w[s], o.fStyle, o.fFamily), u = n ? 0 : l.w * t.finalSize / 100) : u = e.measureText(w[s], t.f, t.finalSize), g + u > C && w[s] !== " " ? (G === -1 ? a += 1 : s = G, L += t.finalLineHeight || t.finalSize * 1.2, w.splice(s, G === s ? 1 : 0, "\r"), G = -1, g = 0) : (g += u, g += M);
                    L += o.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && R < L ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = w, a = t.finalText.length, k = !1)
                }
            g = -M, u = 0;
            var D = 0,
                V;
            for (s = 0; s < a; s += 1)
                if (n = !1, V = t.finalText[s], F = V.charCodeAt(0), F === 13 || F === 3 ? (D = 0, P.push(g), d = g > d ? g : d, g = -2 * M, h = "", n = !0, c += 1) : h = V, e.chars ? (l = e.getCharData(V, o.fStyle, e.getFontByName(t.f).fFamily), u = n ? 0 : l.w * t.finalSize / 100) : u = e.measureText(h, t.f, t.finalSize), V === " " ? D += u + M : (g += u + M + D, D = 0), i.push({
                        l: u,
                        an: u,
                        add: v,
                        n,
                        anIndexes: [],
                        val: h,
                        line: c,
                        animatorJustifyOffset: 0
                    }), y == 2) {
                    if (v += u, h === "" || h === " " || s === a - 1) {
                        for ((h === "" || h === " ") && (v -= u); E <= s;) i[E].an = v, i[E].ind = m, i[E].extra = u, E += 1;
                        m += 1, v = 0
                    }
                } else if (y == 3) {
                if (v += u, h === "" || s === a - 1) {
                    for (h === "" && (v -= u); E <= s;) i[E].an = v, i[E].ind = m, i[E].extra = u, E += 1;
                    v = 0, m += 1
                }
            } else i[m].ind = m, i[m].extra = 0, m += 1;
            if (t.l = i, d = g > d ? g : d, P.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
            else switch (t.boxWidth = d, t.j) {
                case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                default:
                    t.justifyOffset = 0
            }
            t.lineWidths = P;
            var S = r.a,
                _, f;
            p = S.length;
            var A, I, T = [];
            for (x = 0; x < p; x += 1) {
                for (_ = S[x], _.a.sc && (t.strokeColorAnim = !0), _.a.sw && (t.strokeWidthAnim = !0), (_.a.fc || _.a.fh || _.a.fs || _.a.fb) && (t.fillColorAnim = !0), I = 0, A = _.s.b, s = 0; s < a; s += 1) f = i[s], f.anIndexes[x] = I, (A == 1 && f.val !== "" || A == 2 && f.val !== "" && f.val !== " " || A == 3 && (f.n || f.val == " " || s == a - 1) || A == 4 && (f.n || s == a - 1)) && (_.s.rn === 1 && T.push(I), I += 1);
                r.a[x].s.totalChars = I;
                var O = -1,
                    B;
                if (_.s.rn === 1)
                    for (s = 0; s < a; s += 1) f = i[s], O != f.anIndexes[x] && (O = f.anIndexes[x], B = T.splice(Math.floor(Math.random() * T.length), 1)[0]), f.anIndexes[x] = B
            }
            t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = o.ascent * t.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function(t, e) {
            e = e === void 0 ? this.keysIndex : e;
            var r = this.copyData({}, this.data.d.k[e].s);
            r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.setCurrentData(r), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function(t) {
            var e = this.data.d.k[t].s;
            e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
        }, TextProperty.prototype.canResizeFont = function(t) {
            this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function(t) {
            this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function() {
            var t = Math.max,
                e = Math.min,
                r = Math.floor;

            function i(a, n) {
                this._currentTextLength = -1, this.k = !1, this.data = n, this.elem = a, this.comp = a.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(a), this.s = PropertyFactory.getProp(a, n.s || {
                    k: 0
                }, 0, 0, this), "e" in n ? this.e = PropertyFactory.getProp(a, n.e, 0, 0, this) : this.e = {
                    v: 100
                }, this.o = PropertyFactory.getProp(a, n.o || {
                    k: 0
                }, 0, 0, this), this.xe = PropertyFactory.getProp(a, n.xe || {
                    k: 0
                }, 0, 0, this), this.ne = PropertyFactory.getProp(a, n.ne || {
                    k: 0
                }, 0, 0, this), this.sm = PropertyFactory.getProp(a, n.sm || {
                    k: 100
                }, 0, 0, this), this.a = PropertyFactory.getProp(a, n.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
            }
            i.prototype = {
                getMult: function(a) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var n = 0,
                        m = 0,
                        h = 1,
                        y = 1;
                    this.ne.v > 0 ? n = this.ne.v / 100 : m = -this.ne.v / 100, this.xe.v > 0 ? h = 1 - this.xe.v / 100 : y = 1 + this.xe.v / 100;
                    var v = BezierFactory.getBezierEasing(n, m, h, y).get,
                        E = 0,
                        c = this.finalS,
                        P = this.finalE,
                        g = this.data.sh;
                    if (g === 2) P === c ? E = a >= P ? 1 : 0 : E = t(0, e(.5 / (P - c) + (a - c) / (P - c), 1)), E = v(E);
                    else if (g === 3) P === c ? E = a >= P ? 0 : 1 : E = 1 - t(0, e(.5 / (P - c) + (a - c) / (P - c), 1)), E = v(E);
                    else if (g === 4) P === c ? E = 0 : (E = t(0, e(.5 / (P - c) + (a - c) / (P - c), 1)), E < .5 ? E *= 2 : E = 1 - 2 * (E - .5)), E = v(E);
                    else if (g === 5) {
                        if (P === c) E = 0;
                        else {
                            var d = P - c;
                            a = e(t(0, a + .5 - c), P - c);
                            var x = -d / 2 + a,
                                p = d / 2;
                            E = Math.sqrt(1 - x * x / (p * p))
                        }
                        E = v(E)
                    } else g === 6 ? (P === c ? E = 0 : (a = e(t(0, a + .5 - c), P - c), E = (1 + Math.cos(Math.PI + Math.PI * 2 * a / (P - c))) / 2), E = v(E)) : (a >= r(c) && (a - c < 0 ? E = t(0, e(e(P, 1) - (c - a), 1)) : E = t(0, e(P - a, 1))), E = v(E));
                    if (this.sm.v !== 100) {
                        var o = this.sm.v * .01;
                        o === 0 && (o = 1e-8);
                        var l = .5 - o * .5;
                        E < l ? E = 0 : (E = (E - l) / o, E > 1 && (E = 1))
                    }
                    return E * this.a.v
                },
                getValue: function(a) {
                    this.iterateDynamicProperties(), this._mdf = a || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, a && this.data.r === 2 && (this.e.v = this._currentTextLength);
                    var n = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
                        m = this.o.v / n,
                        h = this.s.v / n + m,
                        y = this.e.v / n + m;
                    if (h > y) {
                        var v = h;
                        h = y, y = v
                    }
                    this.finalS = h, this.finalE = y
                }
            }, extendPrototype([DynamicPropertyContainer], i);

            function s(a, n, m) {
                return new i(a, n)
            }
            return {
                getTextSelectorProp: s
            }
        }();

        function TextAnimatorDataProperty(t, e, r) {
            var i = {
                    propType: !1
                },
                s = PropertyFactory.getProp,
                a = e.a;
            this.a = {
                r: a.r ? s(t, a.r, 0, degToRads, r) : i,
                rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i,
                ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i,
                sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i,
                sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i,
                s: a.s ? s(t, a.s, 1, .01, r) : i,
                a: a.a ? s(t, a.a, 1, 0, r) : i,
                o: a.o ? s(t, a.o, 0, .01, r) : i,
                p: a.p ? s(t, a.p, 1, 0, r) : i,
                sw: a.sw ? s(t, a.sw, 0, 0, r) : i,
                sc: a.sc ? s(t, a.sc, 1, 0, r) : i,
                fc: a.fc ? s(t, a.fc, 1, 0, r) : i,
                fh: a.fh ? s(t, a.fh, 0, 0, r) : i,
                fs: a.fs ? s(t, a.fs, 0, .01, r) : i,
                fb: a.fb ? s(t, a.fb, 0, .01, r) : i,
                t: a.t ? s(t, a.t, 0, 0, r) : i
            }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t
        }

        function TextAnimatorProperty(t, e, r) {
            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                alignment: {}
            }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
        }
        TextAnimatorProperty.prototype.searchProperties = function() {
            var t, e = this._textData.a.length,
                r, i = PropertyFactory.getProp;
            for (t = 0; t < e; t += 1) r = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, r, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                a: i(this._elem, this._textData.p.a, 0, 0, this),
                f: i(this._elem, this._textData.p.f, 0, 0, this),
                l: i(this._elem, this._textData.p.l, 0, 0, this),
                r: i(this._elem, this._textData.p.r, 0, 0, this),
                p: i(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
            if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
                this._isFirstFrame = !1;
                var r = this._moreOptions.alignment.v,
                    i = this._animatorsData,
                    s = this._textData,
                    a = this.mHelper,
                    n = this._renderType,
                    m = this.renderedLetters.length,
                    h, y, v, E, c = t.l,
                    P, g, d, x, p, o, l, u, b, M, F, k, C, R, L;
                if (this._hasMaskedPath) {
                    if (L = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var w = L.v;
                        this._pathData.r.v && (w = w.reverse()), P = {
                            tLength: 0,
                            segments: []
                        }, E = w._length - 1;
                        var G;
                        for (k = 0, v = 0; v < E; v += 1) G = bez.buildBezierData(w.v[v], w.v[v + 1], [w.o[v][0] - w.v[v][0], w.o[v][1] - w.v[v][1]], [w.i[v + 1][0] - w.v[v + 1][0], w.i[v + 1][1] - w.v[v + 1][1]]), P.tLength += G.segmentLength, P.segments.push(G), k += G.segmentLength;
                        v = E, L.v.c && (G = bez.buildBezierData(w.v[v], w.v[0], [w.o[v][0] - w.v[v][0], w.o[v][1] - w.v[v][1]], [w.i[0][0] - w.v[0][0], w.i[0][1] - w.v[0][1]]), P.tLength += G.segmentLength, P.segments.push(G), k += G.segmentLength), this._pathData.pi = P
                    }
                    if (P = this._pathData.pi, g = this._pathData.f.v, l = 0, o = 1, x = 0, p = !0, M = P.segments, g < 0 && L.v.c)
                        for (P.tLength < Math.abs(g) && (g = -Math.abs(g) % P.tLength), l = M.length - 1, b = M[l].points, o = b.length - 1; g < 0;) g += b[o].partialLength, o -= 1, o < 0 && (l -= 1, b = M[l].points, o = b.length - 1);
                    b = M[l].points, u = b[o - 1], d = b[o], F = d.partialLength
                }
                E = c.length, h = 0, y = 0;
                var D = t.finalSize * 1.2 * .714,
                    V = !0,
                    S, _, f, A, I;
                A = i.length;
                var T, O = -1,
                    B, j, N, H = g,
                    $ = l,
                    X = o,
                    Q = -1,
                    Z, W, K, q, z, et, at, rt, tt = "",
                    it = this.defaultPropsArray,
                    st;
                if (t.j === 2 || t.j === 1) {
                    var Y = 0,
                        nt = 0,
                        ot = t.j === 2 ? -.5 : -1,
                        J = 0,
                        ht = !0;
                    for (v = 0; v < E; v += 1)
                        if (c[v].n) {
                            for (Y && (Y += nt); J < v;) c[J].animatorJustifyOffset = Y, J += 1;
                            Y = 0, ht = !0
                        } else {
                            for (f = 0; f < A; f += 1) S = i[f].a, S.t.propType && (ht && t.j === 2 && (nt += S.t.v * ot), _ = i[f].s, T = _.getMult(c[v].anIndexes[f], s.a[f].s.totalChars), T.length ? Y += S.t.v * T[0] * ot : Y += S.t.v * T * ot);
                            ht = !1
                        }
                    for (Y && (Y += nt); J < v;) c[J].animatorJustifyOffset = Y, J += 1
                }
                for (v = 0; v < E; v += 1) {
                    if (a.reset(), Z = 1, c[v].n) h = 0, y += t.yOffset, y += V ? 1 : 0, g = H, V = !1, this._hasMaskedPath && (l = $, o = X, b = M[l].points, u = b[o - 1], d = b[o], F = d.partialLength, x = 0), tt = "", rt = "", et = "", st = "", it = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (Q !== c[v].line) {
                                switch (t.j) {
                                    case 1:
                                        g += k - t.lineWidths[c[v].line];
                                        break;
                                    case 2:
                                        g += (k - t.lineWidths[c[v].line]) / 2;
                                        break
                                }
                                Q = c[v].line
                            }
                            O !== c[v].ind && (c[O] && (g += c[O].extra), g += c[v].an / 2, O = c[v].ind), g += r[0] * c[v].an * .005;
                            var U = 0;
                            for (f = 0; f < A; f += 1) S = i[f].a, S.p.propType && (_ = i[f].s, T = _.getMult(c[v].anIndexes[f], s.a[f].s.totalChars), T.length ? U += S.p.v[0] * T[0] : U += S.p.v[0] * T), S.a.propType && (_ = i[f].s, T = _.getMult(c[v].anIndexes[f], s.a[f].s.totalChars), T.length ? U += S.a.v[0] * T[0] : U += S.a.v[0] * T);
                            for (p = !0, this._pathData.a.v && (g = c[0].an * .5 + (k - this._pathData.f.v - c[0].an * .5 - c[c.length - 1].an * .5) * O / (E - 1), g += this._pathData.f.v); p;) x + F >= g + U || !b ? (C = (g + U - x) / d.partialLength, j = u.point[0] + (d.point[0] - u.point[0]) * C, N = u.point[1] + (d.point[1] - u.point[1]) * C, a.translate(-r[0] * c[v].an * .005, -(r[1] * D) * .01), p = !1) : b && (x += d.partialLength, o += 1, o >= b.length && (o = 0, l += 1, M[l] ? b = M[l].points : L.v.c ? (o = 0, l = 0, b = M[l].points) : (x -= d.partialLength, b = null)), b && (u = d, d = b[o], F = d.partialLength));
                            B = c[v].an / 2 - c[v].add, a.translate(-B, 0, 0)
                        } else B = c[v].an / 2 - c[v].add, a.translate(-B, 0, 0), a.translate(-r[0] * c[v].an * .005, -r[1] * D * .01, 0);
                        for (f = 0; f < A; f += 1) S = i[f].a, S.t.propType && (_ = i[f].s, T = _.getMult(c[v].anIndexes[f], s.a[f].s.totalChars), (h !== 0 || t.j !== 0) && (this._hasMaskedPath ? T.length ? g += S.t.v * T[0] : g += S.t.v * T : T.length ? h += S.t.v * T[0] : h += S.t.v * T));
                        for (t.strokeWidthAnim && (K = t.sw || 0), t.strokeColorAnim && (t.sc ? W = [t.sc[0], t.sc[1], t.sc[2]] : W = [0, 0, 0]), t.fillColorAnim && t.fc && (q = [t.fc[0], t.fc[1], t.fc[2]]), f = 0; f < A; f += 1) S = i[f].a, S.a.propType && (_ = i[f].s, T = _.getMult(c[v].anIndexes[f], s.a[f].s.totalChars), T.length ? a.translate(-S.a.v[0] * T[0], -S.a.v[1] * T[1], S.a.v[2] * T[2]) : a.translate(-S.a.v[0] * T, -S.a.v[1] * T, S.a.v[2] * T));
                        for (f = 0; f < A; f += 1) S = i[f].a, S.s.propType && (_ = i[f].s, T = _.getMult(c[v].anIndexes[f], s.a[f].s.totalChars), T.length ? a.scale(1 + (S.s.v[0] - 1) * T[0], 1 + (S.s.v[1] - 1) * T[1], 1) : a.scale(1 + (S.s.v[0] - 1) * T, 1 + (S.s.v[1] - 1) * T, 1));
                        for (f = 0; f < A; f += 1) {
                            if (S = i[f].a, _ = i[f].s, T = _.getMult(c[v].anIndexes[f], s.a[f].s.totalChars), S.sk.propType && (T.length ? a.skewFromAxis(-S.sk.v * T[0], S.sa.v * T[1]) : a.skewFromAxis(-S.sk.v * T, S.sa.v * T)), S.r.propType && (T.length ? a.rotateZ(-S.r.v * T[2]) : a.rotateZ(-S.r.v * T)), S.ry.propType && (T.length ? a.rotateY(S.ry.v * T[1]) : a.rotateY(S.ry.v * T)), S.rx.propType && (T.length ? a.rotateX(S.rx.v * T[0]) : a.rotateX(S.rx.v * T)), S.o.propType && (T.length ? Z += (S.o.v * T[0] - Z) * T[0] : Z += (S.o.v * T - Z) * T), t.strokeWidthAnim && S.sw.propType && (T.length ? K += S.sw.v * T[0] : K += S.sw.v * T), t.strokeColorAnim && S.sc.propType)
                                for (z = 0; z < 3; z += 1) T.length ? W[z] += (S.sc.v[z] - W[z]) * T[0] : W[z] += (S.sc.v[z] - W[z]) * T;
                            if (t.fillColorAnim && t.fc) {
                                if (S.fc.propType)
                                    for (z = 0; z < 3; z += 1) T.length ? q[z] += (S.fc.v[z] - q[z]) * T[0] : q[z] += (S.fc.v[z] - q[z]) * T;
                                S.fh.propType && (T.length ? q = addHueToRGB(q, S.fh.v * T[0]) : q = addHueToRGB(q, S.fh.v * T)), S.fs.propType && (T.length ? q = addSaturationToRGB(q, S.fs.v * T[0]) : q = addSaturationToRGB(q, S.fs.v * T)), S.fb.propType && (T.length ? q = addBrightnessToRGB(q, S.fb.v * T[0]) : q = addBrightnessToRGB(q, S.fb.v * T))
                            }
                        }
                        for (f = 0; f < A; f += 1) S = i[f].a, S.p.propType && (_ = i[f].s, T = _.getMult(c[v].anIndexes[f], s.a[f].s.totalChars), this._hasMaskedPath ? T.length ? a.translate(0, S.p.v[1] * T[0], -S.p.v[2] * T[1]) : a.translate(0, S.p.v[1] * T, -S.p.v[2] * T) : T.length ? a.translate(S.p.v[0] * T[0], S.p.v[1] * T[1], -S.p.v[2] * T[2]) : a.translate(S.p.v[0] * T, S.p.v[1] * T, -S.p.v[2] * T));
                        if (t.strokeWidthAnim && (et = K < 0 ? 0 : K), t.strokeColorAnim && (at = "rgb(" + Math.round(W[0] * 255) + "," + Math.round(W[1] * 255) + "," + Math.round(W[2] * 255) + ")"), t.fillColorAnim && t.fc && (rt = "rgb(" + Math.round(q[0] * 255) + "," + Math.round(q[1] * 255) + "," + Math.round(q[2] * 255) + ")"), this._hasMaskedPath) {
                            if (a.translate(0, -t.ls), a.translate(0, r[1] * D * .01 + y, 0), this._pathData.p.v) {
                                R = (d.point[1] - u.point[1]) / (d.point[0] - u.point[0]);
                                var lt = Math.atan(R) * 180 / Math.PI;
                                d.point[0] < u.point[0] && (lt += 180), a.rotate(-lt * Math.PI / 180)
                            }
                            a.translate(j, N, 0), g -= r[0] * c[v].an * .005, c[v + 1] && O !== c[v + 1].ind && (g += c[v].an / 2, g += t.tr * .001 * t.finalSize)
                        } else {
                            switch (a.translate(h, y, 0), t.ps && a.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                case 1:
                                    a.translate(c[v].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[c[v].line]), 0, 0);
                                    break;
                                case 2:
                                    a.translate(c[v].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[c[v].line]) / 2, 0, 0);
                                    break
                            }
                            a.translate(0, -t.ls), a.translate(B, 0, 0), a.translate(r[0] * c[v].an * .005, r[1] * D * .01, 0), h += c[v].l + t.tr * .001 * t.finalSize
                        }
                        n === "html" ? tt = a.toCSS() : n === "svg" ? tt = a.to2dCSS() : it = [a.props[0], a.props[1], a.props[2], a.props[3], a.props[4], a.props[5], a.props[6], a.props[7], a.props[8], a.props[9], a.props[10], a.props[11], a.props[12], a.props[13], a.props[14], a.props[15]], st = Z
                    }
                    m <= v ? (I = new LetterProps(st, et, at, rt, tt, it), this.renderedLetters.push(I), m += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[v], this.lettersChangedFlag = I.update(st, et, at, rt, tt, it) || this.lettersChangedFlag)
                }
            }
        }, TextAnimatorProperty.prototype.getValue = function() {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);

        function ITextElement() {}
        ITextElement.prototype.initElement = function(t, e, r) {
            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function(t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
        }, ITextElement.prototype.createPathShape = function(t, e) {
            var r, i = e.length,
                s, a = "";
            for (r = 0; r < i; r += 1) e[r].ty === "sh" && (s = e[r].ks.k, a += buildShapeString(s, s.i.length, !0, t));
            return a
        }, ITextElement.prototype.updateDocumentData = function(t, e) {
            this.textProperty.updateDocumentData(t, e)
        }, ITextElement.prototype.canResizeFont = function(t) {
            this.textProperty.canResizeFont(t)
        }, ITextElement.prototype.setMinimumFontSize = function(t) {
            this.textProperty.setMinimumFontSize(t)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, s) {
            switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0);
                    break
            }
            e.translate(i, s, 0)
        }, ITextElement.prototype.buildColor = function(t) {
            return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
            (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        };
        var emptyShapeData = {
            shapes: []
        };

        function SVGTextLottieElement(t, e, r) {
            this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r)
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
            for (var e = 0, r = t.length, i = [], s = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(s), s = "") : s += t[e], e += 1;
            return i.push(s), i
        }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
            if (t.shapes && t.shapes.length) {
                var r = t.shapes[0];
                if (r.it) {
                    var i = r.it[r.it.length - 1];
                    i.s && (i.s.k[0] = e, i.s.k[1] = e)
                }
            }
            return t
        }, SVGTextLottieElement.prototype.buildNewText = function() {
            this.addDynamicProperty(this);
            var t, e, r = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
            var i = this.globalData.fontManager.getFontByName(r.f);
            if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
            else {
                this.layerElement.setAttribute("font-family", i.fFamily);
                var s = r.fWeight,
                    a = r.fStyle;
                this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s)
            }
            this.layerElement.setAttribute("aria-label", r.t);
            var n = r.l || [],
                m = !!this.globalData.fontManager.chars;
            e = n.length;
            var h, y = this.mHelper,
                v = "",
                E = this.data.singleShape,
                c = 0,
                P = 0,
                g = !0,
                d = r.tr * .001 * r.finalSize;
            if (E && !m && !r.sz) {
                var x = this.textContainer,
                    p = "start";
                switch (r.j) {
                    case 1:
                        p = "end";
                        break;
                    case 2:
                        p = "middle";
                        break;
                    default:
                        p = "start";
                        break
                }
                x.setAttribute("text-anchor", p), x.setAttribute("letter-spacing", d);
                var o = this.buildTextContents(r.finalText);
                for (e = o.length, P = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1) h = this.textSpans[t].span || createNS("tspan"), h.textContent = o[t], h.setAttribute("x", 0), h.setAttribute("y", P), h.style.display = "inherit", x.appendChild(h), this.textSpans[t] || (this.textSpans[t] = {
                    span: null,
                    glyph: null
                }), this.textSpans[t].span = h, P += r.finalLineHeight;
                this.layerElement.appendChild(x)
            } else {
                var l = this.textSpans.length,
                    u;
                for (t = 0; t < e; t += 1) {
                    if (this.textSpans[t] || (this.textSpans[t] = {
                            span: null,
                            childSpan: null,
                            glyph: null
                        }), !m || !E || t === 0) {
                        if (h = l > t ? this.textSpans[t].span : createNS(m ? "g" : "text"), l <= t) {
                            if (h.setAttribute("stroke-linecap", "butt"), h.setAttribute("stroke-linejoin", "round"), h.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = h, m) {
                                var b = createNS("g");
                                h.appendChild(b), this.textSpans[t].childSpan = b
                            }
                            this.textSpans[t].span = h, this.layerElement.appendChild(h)
                        }
                        h.style.display = "inherit"
                    }
                    if (y.reset(), E && (n[t].n && (c = -d, P += r.yOffset, P += g ? 1 : 0, g = !1), this.applyTextPropertiesToMatrix(r, y, n[t].line, c, P), c += n[t].l || 0, c += d), m) {
                        u = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily);
                        var M;
                        if (u.t === 1) M = new SVGCompElement(u.data, this.globalData, this);
                        else {
                            var F = emptyShapeData;
                            u.data && u.data.shapes && (F = this.buildShapeData(u.data, r.finalSize)), M = new SVGShapeElement(F, this.globalData, this)
                        }
                        if (this.textSpans[t].glyph) {
                            var k = this.textSpans[t].glyph;
                            this.textSpans[t].childSpan.removeChild(k.layerElement), k.destroy()
                        }
                        this.textSpans[t].glyph = M, M._debug = !0, M.prepareFrame(0), M.renderFrame(), this.textSpans[t].childSpan.appendChild(M.layerElement), u.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
                    } else E && h.setAttribute("transform", "translate(" + y.props[12] + "," + y.props[13] + ")"), h.textContent = n[t].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                }
                E && h && h.setAttribute("d", v)
            }
            for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
            this._sizeChanged = !0
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
            if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                this._sizeChanged = !1;
                var t = this.layerElement.getBBox();
                this.bbox = {
                    top: t.y,
                    left: t.x,
                    width: t.width,
                    height: t.height
                }
            }
            return this.bbox
        }, SVGTextLottieElement.prototype.getValue = function() {
            var t, e = this.textSpans.length,
                r;
            for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < e; t += 1) r = this.textSpans[t].glyph, r && (r.prepareFrame(this.comp.renderedFrame - this.data.st), r._mdf && (this._mdf = !0))
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
            if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                this._sizeChanged = !0;
                var t, e, r = this.textAnimator.renderedLetters,
                    i = this.textProperty.currentData.l;
                e = i.length;
                var s, a, n;
                for (t = 0; t < e; t += 1) i[t].n || (s = r[t], a = this.textSpans[t].span, n = this.textSpans[t].glyph, n && n.renderFrame(), s._mdf.m && a.setAttribute("transform", s.m), s._mdf.o && a.setAttribute("opacity", s.o), s._mdf.sw && a.setAttribute("stroke-width", s.sw), s._mdf.sc && a.setAttribute("stroke", s.sc), s._mdf.fc && a.setAttribute("fill", s.fc))
            }
        };

        function ISolidElement(t, e, r) {
            this.initElement(t, e, r)
        }
        extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
            var t = createNS("rect");
            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
        };

        function NullElement(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy()
        }
        NullElement.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0)
        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
            return null
        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);

        function SVGRendererBase() {}
        extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
            return new NullElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createShape = function(t) {
            return new SVGShapeElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createText = function(t) {
            return new SVGTextLottieElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createImage = function(t) {
            return new IImageElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createSolid = function(t) {
            return new ISolidElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.configAnimation = function(t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
            var r = createNS("clipPath"),
                i = createNS("rect");
            i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
            var s = createElementID();
            r.setAttribute("id", s), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
        }, SVGRendererBase.prototype.destroy = function() {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
            var t, e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t) {
            var e = 0,
                r = this.layers.length;
            for (e = 0; e < r; e += 1)
                if (this.layers[e].ind === t) return e;
            return -1
        }, SVGRendererBase.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!(e[t] || this.layers[t].ty === 99)) {
                e[t] = !0;
                var r = this.createItem(this.layers[t]);
                if (e[t] = r, getExpressionsPlugin() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt) {
                    var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                    if (i === -1) return;
                    if (!this.elements[i] || this.elements[i] === !0) this.buildItem(i), this.addPendingElement(r);
                    else {
                        var s = e[i],
                            a = s.getMatte(this.layers[t].tt);
                        r.setMatte(a)
                    }
                }
            }
        }, SVGRendererBase.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) {
                var t = this.pendingElements.pop();
                if (t.checkParenting(), t.data.tt)
                    for (var e = 0, r = this.elements.length; e < r;) {
                        if (this.elements[e] === t) {
                            var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                                s = this.elements[i],
                                a = s.getMatte(this.layers[e].tt);
                            t.setMatte(a);
                            break
                        }
                        e += 1
                    }
            }
        }, SVGRendererBase.prototype.renderFrame = function(t) {
            if (!(this.renderedFrame === t || this.destroyed)) {
                t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                var e, r = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf)
                    for (e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
            }
        }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
            var r = t.getBaseElement();
            if (r) {
                for (var i = 0, s; i < e;) this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (s = this.elements[i].getBaseElement()), i += 1;
                s ? this.layerElement.insertBefore(r, s) : this.layerElement.appendChild(r)
            }
        }, SVGRendererBase.prototype.hide = function() {
            this.layerElement.style.display = "none"
        }, SVGRendererBase.prototype.show = function() {
            this.layerElement.style.display = "block"
        };

        function ICompElement() {}
        extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function(t) {
            if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                }
                var r, i = this.elements.length;
                for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
            }
        }, ICompElement.prototype.renderInnerContent = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, ICompElement.prototype.setElements = function(t) {
            this.elements = t
        }, ICompElement.prototype.getElements = function() {
            return this.elements
        }, ICompElement.prototype.destroyElements = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
        }, ICompElement.prototype.destroy = function() {
            this.destroyElements(), this.destroyBaseElement()
        };

        function SVGCompElement(t, e, r) {
            this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }
        extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
            return new SVGCompElement(t, this.globalData, this)
        };

        function SVGRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
            var r = "";
            if (e && e.title) {
                var i = createNS("title"),
                    s = createElementID();
                i.setAttribute("id", s), i.textContent = e.title, this.svgElement.appendChild(i), r += s
            }
            if (e && e.description) {
                var a = createNS("desc"),
                    n = createElementID();
                a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), r += " " + n
            }
            r && this.svgElement.setAttribute("aria-labelledby", r);
            var m = createNS("defs");
            this.svgElement.appendChild(m);
            var h = createNS("g");
            this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                progressiveLoad: e && e.progressiveLoad || !1,
                hideOnTransparent: !(e && e.hideOnTransparent === !1),
                viewBoxOnly: e && e.viewBoxOnly || !1,
                viewBoxSize: e && e.viewBoxSize || !1,
                className: e && e.className || "",
                id: e && e.id || "",
                focusable: e && e.focusable,
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "100%",
                    height: e && e.filterSize && e.filterSize.height || "100%",
                    x: e && e.filterSize && e.filterSize.x || "0%",
                    y: e && e.filterSize && e.filterSize.y || "0%"
                },
                width: e && e.width,
                height: e && e.height,
                runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: m,
                renderConfig: this.renderConfig
            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
        }
        extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
            return new SVGCompElement(t, this.globalData, this)
        }, registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier);
        var CompExpressionInterface = function() {
            return function(t) {
                function e(r) {
                    for (var i = 0, s = t.layers.length; i < s;) {
                        if (t.layers[i].nm === r || t.layers[i].ind === r) return t.elements[i].layerInterface;
                        i += 1
                    }
                    return null
                }
                return Object.defineProperty(e, "_name", {
                    value: t.data.nm
                }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
            }
        }();

        function _typeof$2(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$2 = function(e) {
                return typeof e
            } : _typeof$2 = function(e) {
                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, _typeof$2(t)
        }

        function seedRandom(t, e) {
            var r = this,
                i = 256,
                s = 6,
                a = 52,
                n = "random",
                m = e.pow(i, s),
                h = e.pow(2, a),
                y = h * 2,
                v = i - 1;

            function E(o, l, u) {
                var b = [];
                l = l === !0 ? {
                    entropy: !0
                } : l || {};
                var M = d(g(l.entropy ? [o, p(t)] : o === null ? x() : o, 3), b),
                    F = new c(b),
                    k = function() {
                        for (var C = F.g(s), R = m, L = 0; C < h;) C = (C + L) * i, R *= i, L = F.g(1);
                        for (; C >= y;) C /= 2, R /= 2, L >>>= 1;
                        return (C + L) / R
                    };
                return k.int32 = function() {
                    return F.g(4) | 0
                }, k.quick = function() {
                    return F.g(4) / 4294967296
                }, k.double = k, d(p(F.S), t), (l.pass || u || function(C, R, L, w) {
                    return w && (w.S && P(w, F), C.state = function() {
                        return P(F, {})
                    }), L ? (e[n] = C, R) : C
                })(k, M, "global" in l ? l.global : this == e, l.state)
            }
            e["seed" + n] = E;

            function c(o) {
                var l, u = o.length,
                    b = this,
                    M = 0,
                    F = b.i = b.j = 0,
                    k = b.S = [];
                for (u || (o = [u++]); M < i;) k[M] = M++;
                for (M = 0; M < i; M++) k[M] = k[F = v & F + o[M % u] + (l = k[M])], k[F] = l;
                b.g = function(C) {
                    for (var R, L = 0, w = b.i, G = b.j, D = b.S; C--;) R = D[w = v & w + 1], L = L * i + D[v & (D[w] = D[G = v & G + R]) + (D[G] = R)];
                    return b.i = w, b.j = G, L
                }
            }

            function P(o, l) {
                return l.i = o.i, l.j = o.j, l.S = o.S.slice(), l
            }

            function g(o, l) {
                var u = [],
                    b = _typeof$2(o),
                    M;
                if (l && b == "object")
                    for (M in o) try {
                        u.push(g(o[M], l - 1))
                    } catch (F) {}
                return u.length ? u : b == "string" ? o : o + "\0"
            }

            function d(o, l) {
                for (var u = o + "", b, M = 0; M < u.length;) l[v & M] = v & (b ^= l[v & M] * 19) + u.charCodeAt(M++);
                return p(l)
            }

            function x() {
                try {
                    var o = new Uint8Array(i);
                    return (r.crypto || r.msCrypto).getRandomValues(o), p(o)
                } catch (b) {
                    var l = r.navigator,
                        u = l && l.plugins;
                    return [+new Date, r, u, r.screen, p(t)]
                }
            }

            function p(o) {
                return String.fromCharCode.apply(0, o)
            }
            d(e.random(), t)
        }

        function initialize$2(t) {
            seedRandom([], t)
        }
        var propTypes = {
            SHAPE: "shape"
        };

        function _typeof$1(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$1 = function(e) {
                return typeof e
            } : _typeof$1 = function(e) {
                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, _typeof$1(t)
        }
        var ExpressionManager = function() {
                var ob = {},
                    Math = BMMath,
                    window = null,
                    document = null,
                    XMLHttpRequest = null,
                    fetch = null,
                    frames = null,
                    _lottieGlobal = {};
                initialize$2(BMMath);

                function resetFrame() {
                    _lottieGlobal = {}
                }

                function $bm_isInstanceOfArray(t) {
                    return t.constructor === Array || t.constructor === Float32Array
                }

                function isNumerable(t, e) {
                    return t === "number" || e instanceof Number || t === "boolean" || t === "string"
                }

                function $bm_neg(t) {
                    var e = _typeof$1(t);
                    if (e === "number" || t instanceof Number || e === "boolean") return -t;
                    if ($bm_isInstanceOfArray(t)) {
                        var r, i = t.length,
                            s = [];
                        for (r = 0; r < i; r += 1) s[r] = -t[r];
                        return s
                    }
                    return t.propType ? t.v : -t
                }
                var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                    easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                    easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                function sum(t, e) {
                    var r = _typeof$1(t),
                        i = _typeof$1(e);
                    if (isNumerable(r, t) && isNumerable(i, e) || r === "string" || i === "string") return t + e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return t = t.slice(0), t[0] += e, t;
                    if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return e = e.slice(0), e[0] = t + e[0], e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        for (var s = 0, a = t.length, n = e.length, m = []; s < a || s < n;)(typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? m[s] = t[s] + e[s] : m[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
                        return m
                    }
                    return 0
                }
                var add = sum;

                function sub(t, e) {
                    var r = _typeof$1(t),
                        i = _typeof$1(e);
                    if (isNumerable(r, t) && isNumerable(i, e)) return r === "string" && (t = parseInt(t, 10)), i === "string" && (e = parseInt(e, 10)), t - e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return t = t.slice(0), t[0] -= e, t;
                    if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return e = e.slice(0), e[0] = t - e[0], e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        for (var s = 0, a = t.length, n = e.length, m = []; s < a || s < n;)(typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? m[s] = t[s] - e[s] : m[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
                        return m
                    }
                    return 0
                }

                function mul(t, e) {
                    var r = _typeof$1(t),
                        i = _typeof$1(e),
                        s;
                    if (isNumerable(r, t) && isNumerable(i, e)) return t * e;
                    var a, n;
                    if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
                        for (n = t.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1) s[a] = t[a] * e;
                        return s
                    }
                    if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
                        for (n = e.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1) s[a] = t * e[a];
                        return s
                    }
                    return 0
                }

                function div(t, e) {
                    var r = _typeof$1(t),
                        i = _typeof$1(e),
                        s;
                    if (isNumerable(r, t) && isNumerable(i, e)) return t / e;
                    var a, n;
                    if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
                        for (n = t.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1) s[a] = t[a] / e;
                        return s
                    }
                    if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
                        for (n = e.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1) s[a] = t / e[a];
                        return s
                    }
                    return 0
                }

                function mod(t, e) {
                    return typeof t == "string" && (t = parseInt(t, 10)), typeof e == "string" && (e = parseInt(e, 10)), t % e
                }
                var $bm_sum = sum,
                    $bm_sub = sub,
                    $bm_mul = mul,
                    $bm_div = div,
                    $bm_mod = mod;

                function clamp(t, e, r) {
                    if (e > r) {
                        var i = r;
                        r = e, e = i
                    }
                    return Math.min(Math.max(t, e), r)
                }

                function radiansToDegrees(t) {
                    return t / degToRads
                }
                var radians_to_degrees = radiansToDegrees;

                function degreesToRadians(t) {
                    return t * degToRads
                }
                var degrees_to_radians = radiansToDegrees,
                    helperLengthArray = [0, 0, 0, 0, 0, 0];

                function length(t, e) {
                    if (typeof t == "number" || t instanceof Number) return e = e || 0, Math.abs(t - e);
                    e || (e = helperLengthArray);
                    var r, i = Math.min(t.length, e.length),
                        s = 0;
                    for (r = 0; r < i; r += 1) s += Math.pow(e[r] - t[r], 2);
                    return Math.sqrt(s)
                }

                function normalize(t) {
                    return div(t, length(t))
                }

                function rgbToHsl(t) {
                    var e = t[0],
                        r = t[1],
                        i = t[2],
                        s = Math.max(e, r, i),
                        a = Math.min(e, r, i),
                        n, m, h = (s + a) / 2;
                    if (s === a) n = 0, m = 0;
                    else {
                        var y = s - a;
                        switch (m = h > .5 ? y / (2 - s - a) : y / (s + a), s) {
                            case e:
                                n = (r - i) / y + (r < i ? 6 : 0);
                                break;
                            case r:
                                n = (i - e) / y + 2;
                                break;
                            case i:
                                n = (e - r) / y + 4;
                                break
                        }
                        n /= 6
                    }
                    return [n, m, h, t[3]]
                }

                function hue2rgb(t, e, r) {
                    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
                }

                function hslToRgb(t) {
                    var e = t[0],
                        r = t[1],
                        i = t[2],
                        s, a, n;
                    if (r === 0) s = i, n = i, a = i;
                    else {
                        var m = i < .5 ? i * (1 + r) : i + r - i * r,
                            h = 2 * i - m;
                        s = hue2rgb(h, m, e + 1 / 3), a = hue2rgb(h, m, e), n = hue2rgb(h, m, e - 1 / 3)
                    }
                    return [s, a, n, t[3]]
                }

                function linear(t, e, r, i, s) {
                    if ((i === void 0 || s === void 0) && (i = e, s = r, e = 0, r = 1), r < e) {
                        var a = r;
                        r = e, e = a
                    }
                    if (t <= e) return i;
                    if (t >= r) return s;
                    var n = r === e ? 0 : (t - e) / (r - e);
                    if (!i.length) return i + (s - i) * n;
                    var m, h = i.length,
                        y = createTypedArray("float32", h);
                    for (m = 0; m < h; m += 1) y[m] = i[m] + (s[m] - i[m]) * n;
                    return y
                }

                function random(t, e) {
                    if (e === void 0 && (t === void 0 ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                        var r, i = e.length;
                        t || (t = createTypedArray("float32", i));
                        var s = createTypedArray("float32", i),
                            a = BMMath.random();
                        for (r = 0; r < i; r += 1) s[r] = t[r] + a * (e[r] - t[r]);
                        return s
                    }
                    t === void 0 && (t = 0);
                    var n = BMMath.random();
                    return t + n * (e - t)
                }

                function createPath(t, e, r, i) {
                    var s, a = t.length,
                        n = shapePool.newElement();
                    n.setPathData(!!i, a);
                    var m = [0, 0],
                        h, y;
                    for (s = 0; s < a; s += 1) h = e && e[s] ? e[s] : m, y = r && r[s] ? r[s] : m, n.setTripleAt(t[s][0], t[s][1], y[0] + t[s][0], y[1] + t[s][1], h[0] + t[s][0], h[1] + t[s][1], s, !0);
                    return n
                }

                function initiateExpression(elem, data, property) {
                    function noOp(t) {
                        return t
                    }
                    if (!elem.globalData.renderConfig.runExpressions) return noOp;
                    var val = data.x,
                        needsVelocity = /velocity(?![\w\d])/.test(val),
                        _needsRandom = val.indexOf("random") !== -1,
                        elemType = elem.data.ty,
                        transform, $bm_transform, content, effect, thisProperty = property;
                    thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                        get: function() {
                            return thisProperty.v
                        }
                    }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                    var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                        outPoint = elem.data.op / elem.comp.globalData.frameRate,
                        width = elem.data.sw ? elem.data.sw : 0,
                        height = elem.data.sh ? elem.data.sh : 0,
                        name = elem.data.nm,
                        loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                        numKeys = property.kf ? data.k.length : 0,
                        active = !this.data || this.data.hd !== !0,
                        wiggle = function t(e, r) {
                            var i, s, a = this.pv.length ? this.pv.length : 1,
                                n = createTypedArray("float32", a);
                            e = 5;
                            var m = Math.floor(time * e);
                            for (i = 0, s = 0; i < m;) {
                                for (s = 0; s < a; s += 1) n[s] += -r + r * 2 * BMMath.random();
                                i += 1
                            }
                            var h = time * e,
                                y = h - Math.floor(h),
                                v = createTypedArray("float32", a);
                            if (a > 1) {
                                for (s = 0; s < a; s += 1) v[s] = this.pv[s] + n[s] + (-r + r * 2 * BMMath.random()) * y;
                                return v
                            }
                            return this.pv + n[0] + (-r + r * 2 * BMMath.random()) * y
                        }.bind(this);
                    thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty));

                    function loopInDuration(t, e) {
                        return loopIn(t, e, !0)
                    }

                    function loopOutDuration(t, e) {
                        return loopOut(t, e, !0)
                    }
                    this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

                    function lookAt(t, e) {
                        var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                            i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads,
                            s = -Math.atan2(r[1], r[2]) / degToRads;
                        return [s, i, 0]
                    }

                    function easeOut(t, e, r, i, s) {
                        return applyEase(easeOutBez, t, e, r, i, s)
                    }

                    function easeIn(t, e, r, i, s) {
                        return applyEase(easeInBez, t, e, r, i, s)
                    }

                    function ease(t, e, r, i, s) {
                        return applyEase(easeInOutBez, t, e, r, i, s)
                    }

                    function applyEase(t, e, r, i, s, a) {
                        s === void 0 ? (s = r, a = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
                        var n = t(e);
                        if ($bm_isInstanceOfArray(s)) {
                            var m, h = s.length,
                                y = createTypedArray("float32", h);
                            for (m = 0; m < h; m += 1) y[m] = (a[m] - s[m]) * n + s[m];
                            return y
                        }
                        return (a - s) * n + s
                    }

                    function nearestKey(t) {
                        var e, r = data.k.length,
                            i, s;
                        if (!data.k.length || typeof data.k[0] == "number") i = 0, s = 0;
                        else if (i = -1, t *= elem.comp.globalData.frameRate, t < data.k[0].t) i = 1, s = data.k[0].t;
                        else {
                            for (e = 0; e < r - 1; e += 1)
                                if (t === data.k[e].t) {
                                    i = e + 1, s = data.k[e].t;
                                    break
                                } else if (t > data.k[e].t && t < data.k[e + 1].t) {
                                t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, s = data.k[e + 1].t) : (i = e + 1, s = data.k[e].t);
                                break
                            }
                            i === -1 && (i = e + 1, s = data.k[e].t)
                        }
                        var a = {};
                        return a.index = i, a.time = s / elem.comp.globalData.frameRate, a
                    }

                    function key(t) {
                        var e, r, i;
                        if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + t);
                        t -= 1, e = {
                            time: data.k[t].t / elem.comp.globalData.frameRate,
                            value: []
                        };
                        var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                        for (i = s.length, r = 0; r < i; r += 1) e[r] = s[r], e.value[r] = s[r];
                        return e
                    }

                    function framesToTime(t, e) {
                        return e || (e = elem.comp.globalData.frameRate), t / e
                    }

                    function timeToFrames(t, e) {
                        return !t && t !== 0 && (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                    }

                    function seedRandom(t) {
                        BMMath.seedrandom(randSeed + t)
                    }

                    function sourceRectAtTime() {
                        return elem.sourceRectAtTime()
                    }

                    function substring(t, e) {
                        return typeof value == "string" ? e === void 0 ? value.substring(t) : value.substring(t, e) : ""
                    }

                    function substr(t, e) {
                        return typeof value == "string" ? e === void 0 ? value.substr(t) : value.substr(t, e) : ""
                    }

                    function posterizeTime(t) {
                        time = t === 0 ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
                    }
                    var time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind,
                        hasParent = !!(elem.hierarchy && elem.hierarchy.length),
                        parent, randSeed = Math.floor(Math.random() * 1e6),
                        globalData = elem.globalData;

                    function executeExpression(t) {
                        return value = t, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType === 4 && !content && (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), hasParent = !!(elem.hierarchy && elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt, scoped_bm_rt)
                    }
                    return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
                }
                return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
            }(),
            Expressions = function() {
                var t = {};
                t.initExpressions = e, t.resetFrame = ExpressionManager.resetFrame;

                function e(r) {
                    var i = 0,
                        s = [];

                    function a() {
                        i += 1
                    }

                    function n() {
                        i -= 1, i === 0 && h()
                    }

                    function m(y) {
                        s.indexOf(y) === -1 && s.push(y)
                    }

                    function h() {
                        var y, v = s.length;
                        for (y = 0; y < v; y += 1) s[y].release();
                        s.length = 0
                    }
                    r.renderer.compInterface = CompExpressionInterface(r.renderer), r.renderer.globalData.projectInterface.registerComposition(r.renderer), r.renderer.globalData.pushExpression = a, r.renderer.globalData.popExpression = n, r.renderer.globalData.registerExpressionProperty = m
                }
                return t
            }(),
            MaskManagerInterface = function() {
                function t(r, i) {
                    this._mask = r, this._data = i
                }
                Object.defineProperty(t.prototype, "maskPath", {
                    get: function() {
                        return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                    }
                }), Object.defineProperty(t.prototype, "maskOpacity", {
                    get: function() {
                        return this._mask.op.k && this._mask.op.getValue(), this._mask.op.v * 100
                    }
                });
                var e = function(r) {
                    var i = createSizedArray(r.viewData.length),
                        s, a = r.viewData.length;
                    for (s = 0; s < a; s += 1) i[s] = new t(r.viewData[s], r.masksProperties[s]);
                    var n = function(m) {
                        for (s = 0; s < a;) {
                            if (r.masksProperties[s].nm === m) return i[s];
                            s += 1
                        }
                        return null
                    };
                    return n
                };
                return e
            }(),
            ExpressionPropertyInterface = function() {
                var t = {
                        pv: 0,
                        v: 0,
                        mult: 1
                    },
                    e = {
                        pv: [0, 0, 0],
                        v: [0, 0, 0],
                        mult: 1
                    };

                function r(n, m, h) {
                    Object.defineProperty(n, "velocity", {
                        get: function() {
                            return m.getVelocityAtTime(m.comp.currentFrame)
                        }
                    }), n.numKeys = m.keyframes ? m.keyframes.length : 0, n.key = function(y) {
                        if (!n.numKeys) return 0;
                        var v = "";
                        "s" in m.keyframes[y - 1] ? v = m.keyframes[y - 1].s : "e" in m.keyframes[y - 2] ? v = m.keyframes[y - 2].e : v = m.keyframes[y - 2].s;
                        var E = h === "unidimensional" ? new Number(v) : Object.assign({}, v);
                        return E.time = m.keyframes[y - 1].t / m.elem.comp.globalData.frameRate, E.value = h === "unidimensional" ? v[0] : v, E
                    }, n.valueAtTime = m.getValueAtTime, n.speedAtTime = m.getSpeedAtTime, n.velocityAtTime = m.getVelocityAtTime, n.propertyGroup = m.propertyGroup
                }

                function i(n) {
                    (!n || !("pv" in n)) && (n = t);
                    var m = 1 / n.mult,
                        h = n.pv * m,
                        y = new Number(h);
                    return y.value = h, r(y, n, "unidimensional"),
                        function() {
                            return n.k && n.getValue(), h = n.v * m, y.value !== h && (y = new Number(h), y.value = h, r(y, n, "unidimensional")), y
                        }
                }

                function s(n) {
                    (!n || !("pv" in n)) && (n = e);
                    var m = 1 / n.mult,
                        h = n.data && n.data.l || n.pv.length,
                        y = createTypedArray("float32", h),
                        v = createTypedArray("float32", h);
                    return y.value = v, r(y, n, "multidimensional"),
                        function() {
                            n.k && n.getValue();
                            for (var E = 0; E < h; E += 1) v[E] = n.v[E] * m, y[E] = v[E];
                            return y
                        }
                }

                function a() {
                    return t
                }
                return function(n) {
                    return n ? n.propType === "unidimensional" ? i(n) : s(n) : a
                }
            }(),
            TransformExpressionInterface = function() {
                return function(t) {
                    function e(n) {
                        switch (n) {
                            case "scale":
                            case "Scale":
                            case "ADBE Scale":
                            case 6:
                                return e.scale;
                            case "rotation":
                            case "Rotation":
                            case "ADBE Rotation":
                            case "ADBE Rotate Z":
                            case 10:
                                return e.rotation;
                            case "ADBE Rotate X":
                                return e.xRotation;
                            case "ADBE Rotate Y":
                                return e.yRotation;
                            case "position":
                            case "Position":
                            case "ADBE Position":
                            case 2:
                                return e.position;
                            case "ADBE Position_0":
                                return e.xPosition;
                            case "ADBE Position_1":
                                return e.yPosition;
                            case "ADBE Position_2":
                                return e.zPosition;
                            case "anchorPoint":
                            case "AnchorPoint":
                            case "Anchor Point":
                            case "ADBE AnchorPoint":
                            case 1:
                                return e.anchorPoint;
                            case "opacity":
                            case "Opacity":
                            case 11:
                                return e.opacity;
                            default:
                                return null
                        }
                    }
                    Object.defineProperty(e, "rotation", {
                        get: ExpressionPropertyInterface(t.r || t.rz)
                    }), Object.defineProperty(e, "zRotation", {
                        get: ExpressionPropertyInterface(t.rz || t.r)
                    }), Object.defineProperty(e, "xRotation", {
                        get: ExpressionPropertyInterface(t.rx)
                    }), Object.defineProperty(e, "yRotation", {
                        get: ExpressionPropertyInterface(t.ry)
                    }), Object.defineProperty(e, "scale", {
                        get: ExpressionPropertyInterface(t.s)
                    });
                    var r, i, s, a;
                    return t.p ? a = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                        get: function() {
                            return t.p ? a() : [r(), i(), s ? s() : 0]
                        }
                    }), Object.defineProperty(e, "xPosition", {
                        get: ExpressionPropertyInterface(t.px)
                    }), Object.defineProperty(e, "yPosition", {
                        get: ExpressionPropertyInterface(t.py)
                    }), Object.defineProperty(e, "zPosition", {
                        get: ExpressionPropertyInterface(t.pz)
                    }), Object.defineProperty(e, "anchorPoint", {
                        get: ExpressionPropertyInterface(t.a)
                    }), Object.defineProperty(e, "opacity", {
                        get: ExpressionPropertyInterface(t.o)
                    }), Object.defineProperty(e, "skew", {
                        get: ExpressionPropertyInterface(t.sk)
                    }), Object.defineProperty(e, "skewAxis", {
                        get: ExpressionPropertyInterface(t.sa)
                    }), Object.defineProperty(e, "orientation", {
                        get: ExpressionPropertyInterface(t.or)
                    }), e
                }
            }(),
            LayerExpressionInterface = function() {
                function t(y) {
                    var v = new Matrix;
                    if (y !== void 0) {
                        var E = this._elem.finalTransform.mProp.getValueAtTime(y);
                        E.clone(v)
                    } else {
                        var c = this._elem.finalTransform.mProp;
                        c.applyToMatrix(v)
                    }
                    return v
                }

                function e(y, v) {
                    var E = this.getMatrix(v);
                    return E.props[12] = 0, E.props[13] = 0, E.props[14] = 0, this.applyPoint(E, y)
                }

                function r(y, v) {
                    var E = this.getMatrix(v);
                    return this.applyPoint(E, y)
                }

                function i(y, v) {
                    var E = this.getMatrix(v);
                    return E.props[12] = 0, E.props[13] = 0, E.props[14] = 0, this.invertPoint(E, y)
                }

                function s(y, v) {
                    var E = this.getMatrix(v);
                    return this.invertPoint(E, y)
                }

                function a(y, v) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var E, c = this._elem.hierarchy.length;
                        for (E = 0; E < c; E += 1) this._elem.hierarchy[E].finalTransform.mProp.applyToMatrix(y)
                    }
                    return y.applyToPointArray(v[0], v[1], v[2] || 0)
                }

                function n(y, v) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var E, c = this._elem.hierarchy.length;
                        for (E = 0; E < c; E += 1) this._elem.hierarchy[E].finalTransform.mProp.applyToMatrix(y)
                    }
                    return y.inversePoint(v)
                }

                function m(y) {
                    var v = new Matrix;
                    if (v.reset(), this._elem.finalTransform.mProp.applyToMatrix(v), this._elem.hierarchy && this._elem.hierarchy.length) {
                        var E, c = this._elem.hierarchy.length;
                        for (E = 0; E < c; E += 1) this._elem.hierarchy[E].finalTransform.mProp.applyToMatrix(v);
                        return v.inversePoint(y)
                    }
                    return v.inversePoint(y)
                }

                function h() {
                    return [1, 1, 1, 1]
                }
                return function(y) {
                    var v;

                    function E(d) {
                        P.mask = new MaskManagerInterface(d, y)
                    }

                    function c(d) {
                        P.effect = d
                    }

                    function P(d) {
                        switch (d) {
                            case "ADBE Root Vectors Group":
                            case "Contents":
                            case 2:
                                return P.shapeInterface;
                            case 1:
                            case 6:
                            case "Transform":
                            case "transform":
                            case "ADBE Transform Group":
                                return v;
                            case 4:
                            case "ADBE Effect Parade":
                            case "effects":
                            case "Effects":
                                return P.effect;
                            case "ADBE Text Properties":
                                return P.textInterface;
                            default:
                                return null
                        }
                    }
                    P.getMatrix = t, P.invertPoint = n, P.applyPoint = a, P.toWorld = r, P.toWorldVec = e, P.fromWorld = s, P.fromWorldVec = i, P.toComp = r, P.fromComp = m, P.sampleImage = h, P.sourceRectAtTime = y.sourceRectAtTime.bind(y), P._elem = y, v = TransformExpressionInterface(y.finalTransform.mProp);
                    var g = getDescriptor(v, "anchorPoint");
                    return Object.defineProperties(P, {
                        hasParent: {
                            get: function() {
                                return y.hierarchy.length
                            }
                        },
                        parent: {
                            get: function() {
                                return y.hierarchy[0].layerInterface
                            }
                        },
                        rotation: getDescriptor(v, "rotation"),
                        scale: getDescriptor(v, "scale"),
                        position: getDescriptor(v, "position"),
                        opacity: getDescriptor(v, "opacity"),
                        anchorPoint: g,
                        anchor_point: g,
                        transform: {
                            get: function() {
                                return v
                            }
                        },
                        active: {
                            get: function() {
                                return y.isInRange
                            }
                        }
                    }), P.startTime = y.data.st, P.index = y.data.ind, P.source = y.data.refId, P.height = y.data.ty === 0 ? y.data.h : 100, P.width = y.data.ty === 0 ? y.data.w : 100, P.inPoint = y.data.ip / y.comp.globalData.frameRate, P.outPoint = y.data.op / y.comp.globalData.frameRate, P._name = y.data.nm, P.registerMaskInterface = E, P.registerEffectsInterface = c, P
                }
            }(),
            propertyGroupFactory = function() {
                return function(t, e) {
                    return function(r) {
                        return r = r === void 0 ? 1 : r, r <= 0 ? t : e(r - 1)
                    }
                }
            }(),
            PropertyInterface = function() {
                return function(t, e) {
                    var r = {
                        _name: t
                    };

                    function i(s) {
                        return s = s === void 0 ? 1 : s, s <= 0 ? r : e(s - 1)
                    }
                    return i
                }
            }(),
            EffectsExpressionInterface = function() {
                var t = {
                    createEffectsInterface: e
                };

                function e(s, a) {
                    if (s.effectsManager) {
                        var n = [],
                            m = s.data.ef,
                            h, y = s.effectsManager.effectElements.length;
                        for (h = 0; h < y; h += 1) n.push(r(m[h], s.effectsManager.effectElements[h], a, s));
                        var v = s.data.ef || [],
                            E = function(c) {
                                for (h = 0, y = v.length; h < y;) {
                                    if (c === v[h].nm || c === v[h].mn || c === v[h].ix) return n[h];
                                    h += 1
                                }
                                return null
                            };
                        return Object.defineProperty(E, "numProperties", {
                            get: function() {
                                return v.length
                            }
                        }), E
                    }
                    return null
                }

                function r(s, a, n, m) {
                    function h(P) {
                        for (var g = s.ef, d = 0, x = g.length; d < x;) {
                            if (P === g[d].nm || P === g[d].mn || P === g[d].ix) return g[d].ty === 5 ? v[d] : v[d]();
                            d += 1
                        }
                        throw new Error
                    }
                    var y = propertyGroupFactory(h, n),
                        v = [],
                        E, c = s.ef.length;
                    for (E = 0; E < c; E += 1) s.ef[E].ty === 5 ? v.push(r(s.ef[E], a.effectElements[E], a.effectElements[E].propertyGroup, m)) : v.push(i(a.effectElements[E], s.ef[E].ty, m, y));
                    return s.mn === "ADBE Color Control" && Object.defineProperty(h, "color", {
                        get: function() {
                            return v[0]()
                        }
                    }), Object.defineProperties(h, {
                        numProperties: {
                            get: function() {
                                return s.np
                            }
                        },
                        _name: {
                            value: s.nm
                        },
                        propertyGroup: {
                            value: y
                        }
                    }), h.enabled = s.en !== 0, h.active = h.enabled, h
                }

                function i(s, a, n, m) {
                    var h = ExpressionPropertyInterface(s.p);

                    function y() {
                        return a === 10 ? n.comp.compInterface(s.p.v) : h()
                    }
                    return s.p.setGroupProperty && s.p.setGroupProperty(PropertyInterface("", m)), y
                }
                return t
            }(),
            ShapePathInterface = function() {
                return function(t, e, r) {
                    var i = e.sh;

                    function s(n) {
                        return n === "Shape" || n === "shape" || n === "Path" || n === "path" || n === "ADBE Vector Shape" || n === 2 ? s.path : null
                    }
                    var a = propertyGroupFactory(s, r);
                    return i.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(s, {
                        path: {
                            get: function() {
                                return i.k && i.getValue(), i
                            }
                        },
                        shape: {
                            get: function() {
                                return i.k && i.getValue(), i
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        ix: {
                            value: t.ix
                        },
                        propertyIndex: {
                            value: t.ix
                        },
                        mn: {
                            value: t.mn
                        },
                        propertyGroup: {
                            value: r
                        }
                    }), s
                }
            }(),
            ShapeExpressionInterface = function() {
                function t(g, d, x) {
                    var p = [],
                        o, l = g ? g.length : 0;
                    for (o = 0; o < l; o += 1) g[o].ty === "gr" ? p.push(r(g[o], d[o], x)) : g[o].ty === "fl" ? p.push(i(g[o], d[o], x)) : g[o].ty === "st" ? p.push(n(g[o], d[o], x)) : g[o].ty === "tm" ? p.push(m(g[o], d[o], x)) : g[o].ty === "tr" || (g[o].ty === "el" ? p.push(y(g[o], d[o], x)) : g[o].ty === "sr" ? p.push(v(g[o], d[o], x)) : g[o].ty === "sh" ? p.push(ShapePathInterface(g[o], d[o], x)) : g[o].ty === "rc" ? p.push(E(g[o], d[o], x)) : g[o].ty === "rd" ? p.push(c(g[o], d[o], x)) : g[o].ty === "rp" ? p.push(P(g[o], d[o], x)) : g[o].ty === "gf" ? p.push(s(g[o], d[o], x)) : p.push(a(g[o], d[o])));
                    return p
                }

                function e(g, d, x) {
                    var p, o = function(u) {
                        for (var b = 0, M = p.length; b < M;) {
                            if (p[b]._name === u || p[b].mn === u || p[b].propertyIndex === u || p[b].ix === u || p[b].ind === u) return p[b];
                            b += 1
                        }
                        return typeof u == "number" ? p[u - 1] : null
                    };
                    o.propertyGroup = propertyGroupFactory(o, x), p = t(g.it, d.it, o.propertyGroup), o.numProperties = p.length;
                    var l = h(g.it[g.it.length - 1], d.it[d.it.length - 1], o.propertyGroup);
                    return o.transform = l, o.propertyIndex = g.cix, o._name = g.nm, o
                }

                function r(g, d, x) {
                    var p = function(u) {
                        switch (u) {
                            case "ADBE Vectors Group":
                            case "Contents":
                            case 2:
                                return p.content;
                            default:
                                return p.transform
                        }
                    };
                    p.propertyGroup = propertyGroupFactory(p, x);
                    var o = e(g, d, p.propertyGroup),
                        l = h(g.it[g.it.length - 1], d.it[d.it.length - 1], p.propertyGroup);
                    return p.content = o, p.transform = l, Object.defineProperty(p, "_name", {
                        get: function() {
                            return g.nm
                        }
                    }), p.numProperties = g.np, p.propertyIndex = g.ix, p.nm = g.nm, p.mn = g.mn, p
                }

                function i(g, d, x) {
                    function p(o) {
                        return o === "Color" || o === "color" ? p.color : o === "Opacity" || o === "opacity" ? p.opacity : null
                    }
                    return Object.defineProperties(p, {
                        color: {
                            get: ExpressionPropertyInterface(d.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(d.o)
                        },
                        _name: {
                            value: g.nm
                        },
                        mn: {
                            value: g.mn
                        }
                    }), d.c.setGroupProperty(PropertyInterface("Color", x)), d.o.setGroupProperty(PropertyInterface("Opacity", x)), p
                }

                function s(g, d, x) {
                    function p(o) {
                        return o === "Start Point" || o === "start point" ? p.startPoint : o === "End Point" || o === "end point" ? p.endPoint : o === "Opacity" || o === "opacity" ? p.opacity : null
                    }
                    return Object.defineProperties(p, {
                        startPoint: {
                            get: ExpressionPropertyInterface(d.s)
                        },
                        endPoint: {
                            get: ExpressionPropertyInterface(d.e)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(d.o)
                        },
                        type: {
                            get: function() {
                                return "a"
                            }
                        },
                        _name: {
                            value: g.nm
                        },
                        mn: {
                            value: g.mn
                        }
                    }), d.s.setGroupProperty(PropertyInterface("Start Point", x)), d.e.setGroupProperty(PropertyInterface("End Point", x)), d.o.setGroupProperty(PropertyInterface("Opacity", x)), p
                }

                function a() {
                    function g() {
                        return null
                    }
                    return g
                }

                function n(g, d, x) {
                    var p = propertyGroupFactory(F, x),
                        o = propertyGroupFactory(M, p);

                    function l(k) {
                        Object.defineProperty(M, g.d[k].nm, {
                            get: ExpressionPropertyInterface(d.d.dataProps[k].p)
                        })
                    }
                    var u, b = g.d ? g.d.length : 0,
                        M = {};
                    for (u = 0; u < b; u += 1) l(u), d.d.dataProps[u].p.setGroupProperty(o);

                    function F(k) {
                        return k === "Color" || k === "color" ? F.color : k === "Opacity" || k === "opacity" ? F.opacity : k === "Stroke Width" || k === "stroke width" ? F.strokeWidth : null
                    }
                    return Object.defineProperties(F, {
                        color: {
                            get: ExpressionPropertyInterface(d.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(d.o)
                        },
                        strokeWidth: {
                            get: ExpressionPropertyInterface(d.w)
                        },
                        dash: {
                            get: function() {
                                return M
                            }
                        },
                        _name: {
                            value: g.nm
                        },
                        mn: {
                            value: g.mn
                        }
                    }), d.c.setGroupProperty(PropertyInterface("Color", p)), d.o.setGroupProperty(PropertyInterface("Opacity", p)), d.w.setGroupProperty(PropertyInterface("Stroke Width", p)), F
                }

                function m(g, d, x) {
                    function p(l) {
                        return l === g.e.ix || l === "End" || l === "end" ? p.end : l === g.s.ix ? p.start : l === g.o.ix ? p.offset : null
                    }
                    var o = propertyGroupFactory(p, x);
                    return p.propertyIndex = g.ix, d.s.setGroupProperty(PropertyInterface("Start", o)), d.e.setGroupProperty(PropertyInterface("End", o)), d.o.setGroupProperty(PropertyInterface("Offset", o)), p.propertyIndex = g.ix, p.propertyGroup = x, Object.defineProperties(p, {
                        start: {
                            get: ExpressionPropertyInterface(d.s)
                        },
                        end: {
                            get: ExpressionPropertyInterface(d.e)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(d.o)
                        },
                        _name: {
                            value: g.nm
                        }
                    }), p.mn = g.mn, p
                }

                function h(g, d, x) {
                    function p(l) {
                        return g.a.ix === l || l === "Anchor Point" ? p.anchorPoint : g.o.ix === l || l === "Opacity" ? p.opacity : g.p.ix === l || l === "Position" ? p.position : g.r.ix === l || l === "Rotation" || l === "ADBE Vector Rotation" ? p.rotation : g.s.ix === l || l === "Scale" ? p.scale : g.sk && g.sk.ix === l || l === "Skew" ? p.skew : g.sa && g.sa.ix === l || l === "Skew Axis" ? p.skewAxis : null
                    }
                    var o = propertyGroupFactory(p, x);
                    return d.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", o)), d.transform.mProps.p.setGroupProperty(PropertyInterface("Position", o)), d.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", o)), d.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", o)), d.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", o)), d.transform.mProps.sk && (d.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", o)), d.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", o))), d.transform.op.setGroupProperty(PropertyInterface("Opacity", o)), Object.defineProperties(p, {
                        opacity: {
                            get: ExpressionPropertyInterface(d.transform.mProps.o)
                        },
                        position: {
                            get: ExpressionPropertyInterface(d.transform.mProps.p)
                        },
                        anchorPoint: {
                            get: ExpressionPropertyInterface(d.transform.mProps.a)
                        },
                        scale: {
                            get: ExpressionPropertyInterface(d.transform.mProps.s)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(d.transform.mProps.r)
                        },
                        skew: {
                            get: ExpressionPropertyInterface(d.transform.mProps.sk)
                        },
                        skewAxis: {
                            get: ExpressionPropertyInterface(d.transform.mProps.sa)
                        },
                        _name: {
                            value: g.nm
                        }
                    }), p.ty = "tr", p.mn = g.mn, p.propertyGroup = x, p
                }

                function y(g, d, x) {
                    function p(u) {
                        return g.p.ix === u ? p.position : g.s.ix === u ? p.size : null
                    }
                    var o = propertyGroupFactory(p, x);
                    p.propertyIndex = g.ix;
                    var l = d.sh.ty === "tm" ? d.sh.prop : d.sh;
                    return l.s.setGroupProperty(PropertyInterface("Size", o)), l.p.setGroupProperty(PropertyInterface("Position", o)), Object.defineProperties(p, {
                        size: {
                            get: ExpressionPropertyInterface(l.s)
                        },
                        position: {
                            get: ExpressionPropertyInterface(l.p)
                        },
                        _name: {
                            value: g.nm
                        }
                    }), p.mn = g.mn, p
                }

                function v(g, d, x) {
                    function p(u) {
                        return g.p.ix === u ? p.position : g.r.ix === u ? p.rotation : g.pt.ix === u ? p.points : g.or.ix === u || u === "ADBE Vector Star Outer Radius" ? p.outerRadius : g.os.ix === u ? p.outerRoundness : g.ir && (g.ir.ix === u || u === "ADBE Vector Star Inner Radius") ? p.innerRadius : g.is && g.is.ix === u ? p.innerRoundness : null
                    }
                    var o = propertyGroupFactory(p, x),
                        l = d.sh.ty === "tm" ? d.sh.prop : d.sh;
                    return p.propertyIndex = g.ix, l.or.setGroupProperty(PropertyInterface("Outer Radius", o)), l.os.setGroupProperty(PropertyInterface("Outer Roundness", o)), l.pt.setGroupProperty(PropertyInterface("Points", o)), l.p.setGroupProperty(PropertyInterface("Position", o)), l.r.setGroupProperty(PropertyInterface("Rotation", o)), g.ir && (l.ir.setGroupProperty(PropertyInterface("Inner Radius", o)), l.is.setGroupProperty(PropertyInterface("Inner Roundness", o))), Object.defineProperties(p, {
                        position: {
                            get: ExpressionPropertyInterface(l.p)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(l.r)
                        },
                        points: {
                            get: ExpressionPropertyInterface(l.pt)
                        },
                        outerRadius: {
                            get: ExpressionPropertyInterface(l.or)
                        },
                        outerRoundness: {
                            get: ExpressionPropertyInterface(l.os)
                        },
                        innerRadius: {
                            get: ExpressionPropertyInterface(l.ir)
                        },
                        innerRoundness: {
                            get: ExpressionPropertyInterface(l.is)
                        },
                        _name: {
                            value: g.nm
                        }
                    }), p.mn = g.mn, p
                }

                function E(g, d, x) {
                    function p(u) {
                        return g.p.ix === u ? p.position : g.r.ix === u ? p.roundness : g.s.ix === u || u === "Size" || u === "ADBE Vector Rect Size" ? p.size : null
                    }
                    var o = propertyGroupFactory(p, x),
                        l = d.sh.ty === "tm" ? d.sh.prop : d.sh;
                    return p.propertyIndex = g.ix, l.p.setGroupProperty(PropertyInterface("Position", o)), l.s.setGroupProperty(PropertyInterface("Size", o)), l.r.setGroupProperty(PropertyInterface("Rotation", o)), Object.defineProperties(p, {
                        position: {
                            get: ExpressionPropertyInterface(l.p)
                        },
                        roundness: {
                            get: ExpressionPropertyInterface(l.r)
                        },
                        size: {
                            get: ExpressionPropertyInterface(l.s)
                        },
                        _name: {
                            value: g.nm
                        }
                    }), p.mn = g.mn, p
                }

                function c(g, d, x) {
                    function p(u) {
                        return g.r.ix === u || u === "Round Corners 1" ? p.radius : null
                    }
                    var o = propertyGroupFactory(p, x),
                        l = d;
                    return p.propertyIndex = g.ix, l.rd.setGroupProperty(PropertyInterface("Radius", o)), Object.defineProperties(p, {
                        radius: {
                            get: ExpressionPropertyInterface(l.rd)
                        },
                        _name: {
                            value: g.nm
                        }
                    }), p.mn = g.mn, p
                }

                function P(g, d, x) {
                    function p(u) {
                        return g.c.ix === u || u === "Copies" ? p.copies : g.o.ix === u || u === "Offset" ? p.offset : null
                    }
                    var o = propertyGroupFactory(p, x),
                        l = d;
                    return p.propertyIndex = g.ix, l.c.setGroupProperty(PropertyInterface("Copies", o)), l.o.setGroupProperty(PropertyInterface("Offset", o)), Object.defineProperties(p, {
                        copies: {
                            get: ExpressionPropertyInterface(l.c)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(l.o)
                        },
                        _name: {
                            value: g.nm
                        }
                    }), p.mn = g.mn, p
                }
                return function(g, d, x) {
                    var p;

                    function o(u) {
                        if (typeof u == "number") return u = u === void 0 ? 1 : u, u === 0 ? x : p[u - 1];
                        for (var b = 0, M = p.length; b < M;) {
                            if (p[b]._name === u) return p[b];
                            b += 1
                        }
                        return null
                    }

                    function l() {
                        return x
                    }
                    return o.propertyGroup = propertyGroupFactory(o, l), p = t(g, d, o.propertyGroup), o.numProperties = p.length, o._name = "Contents", o
                }
            }(),
            TextExpressionInterface = function() {
                return function(t) {
                    var e;

                    function r(i) {
                        switch (i) {
                            case "ADBE Text Document":
                                return r.sourceText;
                            default:
                                return null
                        }
                    }
                    return Object.defineProperty(r, "sourceText", {
                        get: function() {
                            t.textProperty.getValue();
                            var i = t.textProperty.currentData.t;
                            return (!e || i !== e.value) && (e = new String(i), e.value = i || new String(i), Object.defineProperty(e, "style", {
                                get: function() {
                                    return {
                                        fillColor: t.textProperty.currentData.fc
                                    }
                                }
                            })), e
                        }
                    }), r
                }
            }();

        function _typeof(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(e) {
                return typeof e
            } : _typeof = function(e) {
                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, _typeof(t)
        }
        var FootageInterface = function() {
                var t = function(r) {
                        var i = "",
                            s = r.getFootageData();

                        function a() {
                            return i = "", s = r.getFootageData(), n
                        }

                        function n(m) {
                            if (s[m]) return i = m, s = s[m], _typeof(s) === "object" ? n : s;
                            var h = m.indexOf(i);
                            if (h !== -1) {
                                var y = parseInt(m.substr(h + i.length), 10);
                                return s = s[y], _typeof(s) === "object" ? n : s
                            }
                            return ""
                        }
                        return a
                    },
                    e = function(r) {
                        function i(s) {
                            return s === "Outline" ? i.outlineInterface() : null
                        }
                        return i._name = "Outline", i.outlineInterface = t(r), i
                    };
                return function(r) {
                    function i(s) {
                        return s === "Data" ? i.dataInterface : null
                    }
                    return i._name = "Data", i.dataInterface = e(r), i
                }
            }(),
            interfaces = {
                layer: LayerExpressionInterface,
                effects: EffectsExpressionInterface,
                comp: CompExpressionInterface,
                shape: ShapeExpressionInterface,
                text: TextExpressionInterface,
                footage: FootageInterface
            };

        function getInterface(t) {
            return interfaces[t] || null
        }
        var expressionHelpers = function() {
            function t(n, m, h) {
                m.x && (h.k = !0, h.x = !0, h.initiateExpression = ExpressionManager.initiateExpression, h.effectsSequence.push(h.initiateExpression(n, m, h).bind(h)))
            }

            function e(n) {
                return n *= this.elem.globalData.frameRate, n -= this.offsetTime, n !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < n ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(n, this._cachingAtTime), this._cachingAtTime.lastFrame = n), this._cachingAtTime.value
            }

            function r(n) {
                var m = -.01,
                    h = this.getValueAtTime(n),
                    y = this.getValueAtTime(n + m),
                    v = 0;
                if (h.length) {
                    var E;
                    for (E = 0; E < h.length; E += 1) v += Math.pow(y[E] - h[E], 2);
                    v = Math.sqrt(v) * 100
                } else v = 0;
                return v
            }

            function i(n) {
                if (this.vel !== void 0) return this.vel;
                var m = -.001,
                    h = this.getValueAtTime(n),
                    y = this.getValueAtTime(n + m),
                    v;
                if (h.length) {
                    v = createTypedArray("float32", h.length);
                    var E;
                    for (E = 0; E < h.length; E += 1) v[E] = (y[E] - h[E]) / m
                } else v = (y - h) / m;
                return v
            }

            function s() {
                return this.pv
            }

            function a(n) {
                this.propertyGroup = n
            }
            return {
                searchExpressions: t,
                getSpeedAtTime: r,
                getVelocityAtTime: i,
                getValueAtTime: e,
                getStaticValueAtTime: s,
                setGroupProperty: a
            }
        }();

        function addPropertyDecorator() {
            function t(c, P, g) {
                if (!this.k || !this.keyframes) return this.pv;
                c = c ? c.toLowerCase() : "";
                var d = this.comp.renderedFrame,
                    x = this.keyframes,
                    p = x[x.length - 1].t;
                if (d <= p) return this.pv;
                var o, l;
                g ? (P ? o = Math.abs(p - this.elem.comp.globalData.frameRate * P) : o = Math.max(0, p - this.elem.data.ip), l = p - o) : ((!P || P > x.length - 1) && (P = x.length - 1), l = x[x.length - 1 - P].t, o = p - l);
                var u, b, M;
                if (c === "pingpong") {
                    var F = Math.floor((d - l) / o);
                    if (F % 2 !== 0) return this.getValueAtTime((o - (d - l) % o + l) / this.comp.globalData.frameRate, 0)
                } else if (c === "offset") {
                    var k = this.getValueAtTime(l / this.comp.globalData.frameRate, 0),
                        C = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                        R = this.getValueAtTime(((d - l) % o + l) / this.comp.globalData.frameRate, 0),
                        L = Math.floor((d - l) / o);
                    if (this.pv.length) {
                        for (M = new Array(k.length), b = M.length, u = 0; u < b; u += 1) M[u] = (C[u] - k[u]) * L + R[u];
                        return M
                    }
                    return (C - k) * L + R
                } else if (c === "continue") {
                    var w = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                        G = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (M = new Array(w.length), b = M.length, u = 0; u < b; u += 1) M[u] = w[u] + (w[u] - G[u]) * ((d - p) / this.comp.globalData.frameRate) / 5e-4;
                        return M
                    }
                    return w + (w - G) * ((d - p) / .001)
                }
                return this.getValueAtTime(((d - l) % o + l) / this.comp.globalData.frameRate, 0)
            }

            function e(c, P, g) {
                if (!this.k) return this.pv;
                c = c ? c.toLowerCase() : "";
                var d = this.comp.renderedFrame,
                    x = this.keyframes,
                    p = x[0].t;
                if (d >= p) return this.pv;
                var o, l;
                g ? (P ? o = Math.abs(this.elem.comp.globalData.frameRate * P) : o = Math.max(0, this.elem.data.op - p), l = p + o) : ((!P || P > x.length - 1) && (P = x.length - 1), l = x[P].t, o = l - p);
                var u, b, M;
                if (c === "pingpong") {
                    var F = Math.floor((p - d) / o);
                    if (F % 2 === 0) return this.getValueAtTime(((p - d) % o + p) / this.comp.globalData.frameRate, 0)
                } else if (c === "offset") {
                    var k = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                        C = this.getValueAtTime(l / this.comp.globalData.frameRate, 0),
                        R = this.getValueAtTime((o - (p - d) % o + p) / this.comp.globalData.frameRate, 0),
                        L = Math.floor((p - d) / o) + 1;
                    if (this.pv.length) {
                        for (M = new Array(k.length), b = M.length, u = 0; u < b; u += 1) M[u] = R[u] - (C[u] - k[u]) * L;
                        return M
                    }
                    return R - (C - k) * L
                } else if (c === "continue") {
                    var w = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                        G = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (M = new Array(w.length), b = M.length, u = 0; u < b; u += 1) M[u] = w[u] + (w[u] - G[u]) * (p - d) / .001;
                        return M
                    }
                    return w + (w - G) * (p - d) / .001
                }
                return this.getValueAtTime((o - ((p - d) % o + p)) / this.comp.globalData.frameRate, 0)
            }

            function r(c, P) {
                if (!this.k) return this.pv;
                if (c = (c || .4) * .5, P = Math.floor(P || 5), P <= 1) return this.pv;
                var g = this.comp.renderedFrame / this.comp.globalData.frameRate,
                    d = g - c,
                    x = g + c,
                    p = P > 1 ? (x - d) / (P - 1) : 1,
                    o = 0,
                    l = 0,
                    u;
                this.pv.length ? u = createTypedArray("float32", this.pv.length) : u = 0;
                for (var b; o < P;) {
                    if (b = this.getValueAtTime(d + o * p), this.pv.length)
                        for (l = 0; l < this.pv.length; l += 1) u[l] += b[l];
                    else u += b;
                    o += 1
                }
                if (this.pv.length)
                    for (l = 0; l < this.pv.length; l += 1) u[l] /= P;
                else u /= P;
                return u
            }

            function i(c) {
                this._transformCachingAtTime || (this._transformCachingAtTime = {
                    v: new Matrix
                });
                var P = this._transformCachingAtTime.v;
                if (P.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                    var g = this.a.getValueAtTime(c);
                    P.translate(-g[0] * this.a.mult, -g[1] * this.a.mult, g[2] * this.a.mult)
                }
                if (this.appliedTransformations < 2) {
                    var d = this.s.getValueAtTime(c);
                    P.scale(d[0] * this.s.mult, d[1] * this.s.mult, d[2] * this.s.mult)
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var x = this.sk.getValueAtTime(c),
                        p = this.sa.getValueAtTime(c);
                    P.skewFromAxis(-x * this.sk.mult, p * this.sa.mult)
                }
                if (this.r && this.appliedTransformations < 4) {
                    var o = this.r.getValueAtTime(c);
                    P.rotate(-o * this.r.mult)
                } else if (!this.r && this.appliedTransformations < 4) {
                    var l = this.rz.getValueAtTime(c),
                        u = this.ry.getValueAtTime(c),
                        b = this.rx.getValueAtTime(c),
                        M = this.or.getValueAtTime(c);
                    P.rotateZ(-l * this.rz.mult).rotateY(u * this.ry.mult).rotateX(b * this.rx.mult).rotateZ(-M[2] * this.or.mult).rotateY(M[1] * this.or.mult).rotateX(M[0] * this.or.mult)
                }
                if (this.data.p && this.data.p.s) {
                    var F = this.px.getValueAtTime(c),
                        k = this.py.getValueAtTime(c);
                    if (this.data.p.z) {
                        var C = this.pz.getValueAtTime(c);
                        P.translate(F * this.px.mult, k * this.py.mult, -C * this.pz.mult)
                    } else P.translate(F * this.px.mult, k * this.py.mult, 0)
                } else {
                    var R = this.p.getValueAtTime(c);
                    P.translate(R[0] * this.p.mult, R[1] * this.p.mult, -R[2] * this.p.mult)
                }
                return P
            }

            function s() {
                return this.v.clone(new Matrix)
            }
            var a = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(c, P, g) {
                var d = a(c, P, g);
                return d.dynamicProperties.length ? d.getValueAtTime = i.bind(d) : d.getValueAtTime = s.bind(d), d.setGroupProperty = expressionHelpers.setGroupProperty, d
            };
            var n = PropertyFactory.getProp;
            PropertyFactory.getProp = function(c, P, g, d, x) {
                var p = n(c, P, g, d, x);
                p.kf ? p.getValueAtTime = expressionHelpers.getValueAtTime.bind(p) : p.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(p), p.setGroupProperty = expressionHelpers.setGroupProperty, p.loopOut = t, p.loopIn = e, p.smooth = r, p.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(p), p.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(p), p.numKeys = P.a === 1 ? P.k.length : 0, p.propertyIndex = P.ix;
                var o = 0;
                return g !== 0 && (o = createTypedArray("float32", P.a === 1 ? P.k[0].s.length : P.k.length)), p._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: o
                }, expressionHelpers.searchExpressions(c, P, p), p.k && x.addDynamicProperty(p), p
            };

            function m(c) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }), c *= this.elem.globalData.frameRate, c -= this.offsetTime, c !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < c ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = c, this.interpolateShape(c, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
            }
            var h = ShapePropertyFactory.getConstructorFunction(),
                y = ShapePropertyFactory.getKeyframedConstructorFunction();

            function v() {}
            v.prototype = {
                vertices: function(c, P) {
                    this.k && this.getValue();
                    var g = this.v;
                    P !== void 0 && (g = this.getValueAtTime(P, 0));
                    var d, x = g._length,
                        p = g[c],
                        o = g.v,
                        l = createSizedArray(x);
                    for (d = 0; d < x; d += 1) c === "i" || c === "o" ? l[d] = [p[d][0] - o[d][0], p[d][1] - o[d][1]] : l[d] = [p[d][0], p[d][1]];
                    return l
                },
                points: function(c) {
                    return this.vertices("v", c)
                },
                inTangents: function(c) {
                    return this.vertices("i", c)
                },
                outTangents: function(c) {
                    return this.vertices("o", c)
                },
                isClosed: function() {
                    return this.v.c
                },
                pointOnPath: function(c, P) {
                    var g = this.v;
                    P !== void 0 && (g = this.getValueAtTime(P, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(g));
                    for (var d = this._segmentsLength, x = d.lengths, p = d.totalLength * c, o = 0, l = x.length, u = 0, b; o < l;) {
                        if (u + x[o].addedLength > p) {
                            var M = o,
                                F = g.c && o === l - 1 ? 0 : o + 1,
                                k = (p - u) / x[o].addedLength;
                            b = bez.getPointInSegment(g.v[M], g.v[F], g.o[M], g.i[F], k, x[o]);
                            break
                        } else u += x[o].addedLength;
                        o += 1
                    }
                    return b || (b = g.c ? [g.v[0][0], g.v[0][1]] : [g.v[g._length - 1][0], g.v[g._length - 1][1]]), b
                },
                vectorOnPath: function(c, P, g) {
                    c == 1 ? c = this.v.c : c == 0 && (c = .999);
                    var d = this.pointOnPath(c, P),
                        x = this.pointOnPath(c + .001, P),
                        p = x[0] - d[0],
                        o = x[1] - d[1],
                        l = Math.sqrt(Math.pow(p, 2) + Math.pow(o, 2));
                    if (l === 0) return [0, 0];
                    var u = g === "tangent" ? [p / l, o / l] : [-o / l, p / l];
                    return u
                },
                tangentOnPath: function(c, P) {
                    return this.vectorOnPath(c, P, "tangent")
                },
                normalOnPath: function(c, P) {
                    return this.vectorOnPath(c, P, "normal")
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            }, extendPrototype([v], h), extendPrototype([v], y), y.prototype.getValueAtTime = m, y.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var E = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(c, P, g, d, x) {
                var p = E(c, P, g, d, x);
                return p.propertyIndex = P.ix, p.lock = !1, g === 3 ? expressionHelpers.searchExpressions(c, P.pt, p) : g === 4 && expressionHelpers.searchExpressions(c, P.ks, p), p.k && c.addDynamicProperty(p), p
            }
        }

        function initialize$1() {
            addPropertyDecorator()
        }

        function addDecorator() {
            function t() {
                return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
            }
            TextProperty.prototype.getExpressionValue = function(e, r) {
                var i = this.calculateExpression(r);
                if (e.t !== i) {
                    var s = {};
                    return this.copyData(s, e), s.t = i.toString(), s.__complete = !1, s
                }
                return e
            }, TextProperty.prototype.searchProperty = function() {
                var e = this.searchKeyframes(),
                    r = this.searchExpressions();
                return this.kf = e || r, this.kf
            }, TextProperty.prototype.searchExpressions = t
        }

        function initialize() {
            addDecorator()
        }

        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
            createMergeNode: function t(e, r) {
                var i = createNS("feMerge");
                i.setAttribute("result", e);
                var s, a;
                for (a = 0; a < r.length; a += 1) s = createNS("feMergeNode"), s.setAttribute("in", r[a]), i.appendChild(s), i.appendChild(s);
                return i
            }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

        function SVGTintFilter(t, e, r, i, s) {
            this.filterManager = e;
            var a = createNS("feColorMatrix");
            a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", i + "_tint_1"), t.appendChild(a), a = createNS("feColorMatrix"), a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i + "_tint_2"), t.appendChild(a), this.matrixFilter = a;
            var n = this.createMergeNode(i, [s, i + "_tint_1", i + "_tint_2"]);
            t.appendChild(n)
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                    r = this.filterManager.effectElements[1].p.v,
                    i = this.filterManager.effectElements[2].p.v / 100;
                this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
            }
        };

        function SVGFillFilter(t, e, r, i) {
            this.filterManager = e;
            var s = createNS("feColorMatrix");
            s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", i), t.appendChild(s), this.matrixFilter = s
        }
        SVGFillFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[2].p.v,
                    r = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
            }
        };

        function SVGStrokeEffect(t, e, r) {
            this.initialized = !1, this.filterManager = e, this.elem = r, this.paths = []
        }
        SVGStrokeEffect.prototype.initialize = function() {
            var t = this.elem.layerElement.children || this.elem.layerElement.childNodes,
                e, r, i, s;
            for (this.filterManager.effectElements[1].p.v === 1 ? (s = this.elem.maskManager.masksProperties.length, i = 0) : (i = this.filterManager.effectElements[0].p.v - 1, s = i + 1), r = createNS("g"), r.setAttribute("fill", "none"), r.setAttribute("stroke-linecap", "round"), r.setAttribute("stroke-dashoffset", 1), i; i < s; i += 1) e = createNS("path"), r.appendChild(e), this.paths.push({
                p: e,
                m: i
            });
            if (this.filterManager.effectElements[10].p.v === 3) {
                var a = createNS("mask"),
                    n = createElementID();
                a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(r), this.elem.globalData.defs.appendChild(a);
                var m = createNS("g");
                for (m.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); t[0];) m.appendChild(t[0]);
                this.elem.layerElement.appendChild(m), this.masker = a, r.setAttribute("stroke", "#fff")
            } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
                if (this.filterManager.effectElements[10].p.v === 2)
                    for (t = this.elem.layerElement.children || this.elem.layerElement.childNodes; t.length;) this.elem.layerElement.removeChild(t[0]);
                this.elem.layerElement.appendChild(r), this.elem.layerElement.removeAttribute("mask"), r.setAttribute("stroke", "#fff")
            }
            this.initialized = !0, this.pathMasker = r
        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
            this.initialized || this.initialize();
            var e, r = this.paths.length,
                i, s;
            for (e = 0; e < r; e += 1)
                if (this.paths[e].m !== -1 && (i = this.elem.maskManager.viewData[this.paths[e].m], s = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && s.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                    var a;
                    if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                        var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01,
                            m = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01,
                            h = s.getTotalLength();
                        a = "0 0 0 " + h * n + " ";
                        var y = h * (m - n),
                            v = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01,
                            E = Math.floor(y / v),
                            c;
                        for (c = 0; c < E; c += 1) a += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01 + " ";
                        a += "0 " + h * 10 + " 0 0"
                    } else a = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01;
                    s.setAttribute("stroke-dasharray", a)
                }
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t || this.filterManager.effectElements[3].p._mdf)) {
                var P = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(P[0] * 255) + "," + bmFloor(P[1] * 255) + "," + bmFloor(P[2] * 255) + ")")
            }
        };

        function SVGTritoneFilter(t, e, r, i) {
            this.filterManager = e;
            var s = createNS("feColorMatrix");
            s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(s);
            var a = createNS("feComponentTransfer");
            a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), this.matrixFilter = a;
            var n = createNS("feFuncR");
            n.setAttribute("type", "table"), a.appendChild(n), this.feFuncR = n;
            var m = createNS("feFuncG");
            m.setAttribute("type", "table"), a.appendChild(m), this.feFuncG = m;
            var h = createNS("feFuncB");
            h.setAttribute("type", "table"), a.appendChild(h), this.feFuncB = h, t.appendChild(a)
        }
        SVGTritoneFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                    r = this.filterManager.effectElements[1].p.v,
                    i = this.filterManager.effectElements[2].p.v,
                    s = i[0] + " " + r[0] + " " + e[0],
                    a = i[1] + " " + r[1] + " " + e[1],
                    n = i[2] + " " + r[2] + " " + e[2];
                this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n)
            }
        };

        function SVGProLevelsFilter(t, e, r, i) {
            this.filterManager = e;
            var s = this.filterManager.effectElements,
                a = createNS("feComponentTransfer");
            (s[10].p.k || s[10].p.v !== 0 || s[11].p.k || s[11].p.v !== 1 || s[12].p.k || s[12].p.v !== 1 || s[13].p.k || s[13].p.v !== 0 || s[14].p.k || s[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (s[17].p.k || s[17].p.v !== 0 || s[18].p.k || s[18].p.v !== 1 || s[19].p.k || s[19].p.v !== 1 || s[20].p.k || s[20].p.v !== 0 || s[21].p.k || s[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (s[24].p.k || s[24].p.v !== 0 || s[25].p.k || s[25].p.v !== 1 || s[26].p.k || s[26].p.v !== 1 || s[27].p.k || s[27].p.v !== 0 || s[28].p.k || s[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (s[31].p.k || s[31].p.v !== 0 || s[32].p.k || s[32].p.v !== 1 || s[33].p.k || s[33].p.v !== 1 || s[34].p.k || s[34].p.v !== 0 || s[35].p.k || s[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(a)), (s[3].p.k || s[3].p.v !== 0 || s[4].p.k || s[4].p.v !== 1 || s[5].p.k || s[5].p.v !== 1 || s[6].p.k || s[6].p.v !== 0 || s[7].p.k || s[7].p.v !== 1) && (a = createNS("feComponentTransfer"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), t.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
        }
        SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
            var r = createNS(t);
            return r.setAttribute("type", "table"), e.appendChild(r), r
        }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, s) {
            for (var a = 0, n = 256, m, h = Math.min(t, e), y = Math.max(t, e), v = Array.call(null, {
                    length: n
                }), E, c = 0, P = s - i, g = e - t; a <= 256;) m = a / 256, m <= h ? E = g < 0 ? s : i : m >= y ? E = g < 0 ? i : s : E = i + P * Math.pow((m - t) / g, 1 / r), v[c] = E, c += 1, a += 256 / (n - 1);
            return v.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e, r = this.filterManager.effectElements;
                this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e))
            }
        };

        function SVGDropShadowEffect(t, e, r, i, s) {
            var a = e.container.globalData.renderConfig.filterSize,
                n = e.data.fs || a;
            t.setAttribute("x", n.x || a.x), t.setAttribute("y", n.y || a.y), t.setAttribute("width", n.width || a.width), t.setAttribute("height", n.height || a.height), this.filterManager = e;
            var m = createNS("feGaussianBlur");
            m.setAttribute("in", "SourceAlpha"), m.setAttribute("result", i + "_drop_shadow_1"), m.setAttribute("stdDeviation", "0"), this.feGaussianBlur = m, t.appendChild(m);
            var h = createNS("feOffset");
            h.setAttribute("dx", "25"), h.setAttribute("dy", "0"), h.setAttribute("in", i + "_drop_shadow_1"), h.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = h, t.appendChild(h);
            var y = createNS("feFlood");
            y.setAttribute("flood-color", "#00ff00"), y.setAttribute("flood-opacity", "1"), y.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = y, t.appendChild(y);
            var v = createNS("feComposite");
            v.setAttribute("in", i + "_drop_shadow_3"), v.setAttribute("in2", i + "_drop_shadow_2"), v.setAttribute("operator", "in"), v.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(v);
            var E = this.createMergeNode(i, [i + "_drop_shadow_4", s]);
            t.appendChild(E)
        }
        extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                    var e = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(e[0] * 255), Math.round(e[1] * 255), Math.round(e[2] * 255)))
                }
                if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                    var r = this.filterManager.effectElements[3].p.v,
                        i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                        s = r * Math.cos(i),
                        a = r * Math.sin(i);
                    this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a)
                }
            }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, r) {
            this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
        }
        SVGMatte3Effect.prototype.findSymbol = function(t) {
            for (var e = 0, r = _svgMatteSymbols.length; e < r;) {
                if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                e += 1
            }
            return null
        }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
            var r = t.layerElement.parentNode;
            if (r) {
                for (var i = r.children, s = 0, a = i.length; s < a && i[s] !== t.layerElement;) s += 1;
                var n;
                s <= a - 2 && (n = i[s + 1]);
                var m = createNS("use");
                m.setAttribute("href", "#" + e), n ? r.insertBefore(m, n) : r.appendChild(m)
            }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
            if (!this.findSymbol(e)) {
                var r = createElementID(),
                    i = createNS("mask");
                i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                var s = t.globalData.defs;
                s.appendChild(i);
                var a = createNS("symbol");
                a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), s.appendChild(a);
                var n = createNS("use");
                n.setAttribute("href", "#" + r), i.appendChild(n), e.data.hd = !1, e.show()
            }
            t.setMatte(e.layerId)
        }, SVGMatte3Effect.prototype.initialize = function() {
            for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i;) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
            this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function() {
            this.initialized || this.initialize()
        };

        function SVGGaussianBlurEffect(t, e, r, i) {
            t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
            var s = createNS("feGaussianBlur");
            s.setAttribute("result", i), t.appendChild(s), this.feGaussianBlur = s
        }
        SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = .3,
                    r = this.filterManager.effectElements[0].p.v * e,
                    i = this.filterManager.effectElements[1].p.v,
                    s = i == 3 ? 0 : r,
                    a = i == 2 ? 0 : r;
                this.feGaussianBlur.setAttribute("stdDeviation", s + " " + a);
                var n = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", n)
            }
        };

        function TransformEffect() {}
        TransformEffect.prototype.init = function(t) {
            this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
        }, TransformEffect.prototype.renderFrame = function(t) {
            if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
                var e = this.effectsManager.effectElements,
                    r = e[0].p.v,
                    i = e[1].p.v,
                    s = e[2].p.v === 1,
                    a = e[3].p.v,
                    n = s ? a : e[4].p.v,
                    m = e[5].p.v,
                    h = e[6].p.v,
                    y = e[7].p.v;
                this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(n * .01, a * .01, 1), this.matrix.rotate(-y * degToRads), this.matrix.skewFromAxis(-m * degToRads, (h + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0)
            }
        };

        function SVGTransformEffect(t, e) {
            this.init(e)
        }
        return extendPrototype([TransformEffect], SVGTransformEffect), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect(20, SVGTintFilter, !0), registerEffect(21, SVGFillFilter, !0), registerEffect(22, SVGStrokeEffect, !1), registerEffect(23, SVGTritoneFilter, !0), registerEffect(24, SVGProLevelsFilter, !0), registerEffect(25, SVGDropShadowEffect, !0), registerEffect(28, SVGMatte3Effect, !1), registerEffect(29, SVGGaussianBlurEffect, !0), registerEffect(35, SVGTransformEffect, !1), lottie
    })
})(lottie_svg$2, lottie_svg$2.exports);
var lottie_svgExports = lottie_svg$2.exports;
const lottie_svg = getDefaultExportFromCjs(lottie_svgExports),
    lottie_svg$1 = _mergeNamespaces({
        __proto__: null,
        default: lottie_svg
    }, [lottie_svgExports]);
export {
    lottie_svg$1 as l
};