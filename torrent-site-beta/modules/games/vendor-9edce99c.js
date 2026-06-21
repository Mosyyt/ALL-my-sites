var l = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

function s(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function u(e) {
    if (e.__esModule) return e;
    var a = e.default;
    if (typeof a == "function") {
        var t = function r() {
            return this instanceof r ? Reflect.construct(a, arguments, this.constructor) : a.apply(this, arguments)
        };
        t.prototype = a.prototype
    } else t = {};
    return Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(r) {
        var o = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(t, r, o.get ? o : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }), t
}
var i = globalThis["react/jsx-runtime"],
    n = globalThis.react;
const c = s(n);
var f = globalThis["@bc/ui"],
    d = globalThis["lodash-es"];
export {
    c as R, f as _, i as a, u as b, l as c, s as g, d as l, n as r
};