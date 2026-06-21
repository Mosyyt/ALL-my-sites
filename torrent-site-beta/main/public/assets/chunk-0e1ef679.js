import {
    _ as t
} from "./chunk-cf010ec4.js";
let l, o, i, E = (async () => {
    function n() {
        return Object.entries(Object.assign({
            "../locales/ar-SA/website.json": () => t(() =>
                import ("./website.b105f05c.js"), []).then(e => e.default),
            "../locales/bn-BD/website.json": () => t(() =>
                import ("./website.e360e41d.js"), []).then(e => e.default),
            "../locales/de-DE/website.json": () => t(() =>
                import ("./website.37939a65.js"), []).then(e => e.default),
            "../locales/en-IN/website.json": () => t(() =>
                import ("./website.f0c42c1c.js"), []).then(e => e.default),
            "../locales/en-US/website.json": () => t(() =>
                import ("./website.ee2321ea.js"), []).then(e => e.default),
            "../locales/es-ES/website.json": () => t(() =>
                import ("./website.6d9ba3ae.js"), []).then(e => e.default),
            "../locales/fa-IR/website.json": () => t(() =>
                import ("./website.6e8d0acc.js"), []).then(e => e.default),
            "../locales/fi-FI/website.json": () => t(() =>
                import ("./website.f92f4f87.js"), []).then(e => e.default),
            "../locales/fil-PH/website.json": () => t(() =>
                import ("./website.06515610.js"), []).then(e => e.default),
            "../locales/fr-FR/website.json": () => t(() =>
                import ("./website.5dd02fef.js"), []).then(e => e.default),
            "../locales/hi-IN/website.json": () => t(() =>
                import ("./website.7d775c21.js"), []).then(e => e.default),
            "../locales/id-ID/website.json": () => t(() =>
                import ("./website.b8c44c61.js"), []).then(e => e.default),
            "../locales/it-IT/website.json": () => t(() =>
                import ("./website.03070fd1.js"), []).then(e => e.default),
            "../locales/ja-JP/website.json": () => t(() =>
                import ("./website.60aabe44.js"), []).then(e => e.default),
            "../locales/ko-KR/website.json": () => t(() =>
                import ("./website.d5eac814.js"), []).then(e => e.default),
            "../locales/mr-IN/website.json": () => t(() =>
                import ("./website.8753ec6b.js"), []).then(e => e.default),
            "../locales/ms-MY/website.json": () => t(() =>
                import ("./website.b21b4bdd.js"), []).then(e => e.default),
            "../locales/my-MM/website.json": () => t(() =>
                import ("./website.c535a5f4.js"), []).then(e => e.default),
            "../locales/nl-NL/website.json": () => t(() =>
                import ("./website.a5fc1f60.js"), []).then(e => e.default),
            "../locales/pl-PL/website.json": () => t(() =>
                import ("./website.0e2b55db.js"), []).then(e => e.default),
            "../locales/pt-BR/website.json": () => t(() =>
                import ("./website.50d14aae.js"), []).then(e => e.default),
            "../locales/ru-RU/website.json": () => t(() =>
                import ("./website.3487ed04.js"), []).then(e => e.default),
            "../locales/ta-IN/website.json": () => t(() =>
                import ("./website.232df5ab.js"), []).then(e => e.default),
            "../locales/te-IN/website.json": () => t(() =>
                import ("./website.73b8587c.js"), []).then(e => e.default),
            "../locales/th-TH/website.json": () => t(() =>
                import ("./website.41c5076e.js"), []).then(e => e.default),
            "../locales/tr-TR/website.json": () => t(() =>
                import ("./website.1ece3275.js"), []).then(e => e.default),
            "../locales/uk-UA/website.json": () => t(() =>
                import ("./website.f5d841dc.js"), []).then(e => e.default),
            "../locales/ur-PK/website.json": () => t(() =>
                import ("./website.b34d2496.js"), []).then(e => e.default),
            "../locales/vi-VN/website.json": () => t(() =>
                import ("./website.a3b033db.js"), []).then(e => e.default)
        })).sort(([e]) => e.includes("en-US") ? -1 : 0).reduce((e, [_, a]) => (e[_] = a, e), {})
    }
    let s;
    o = n(), l = {
        "en-IN": ["Indian English", "en-IN"],
        en: ["English", "en-US"],
        vi: ["Ti\u1EBFng vi\u1EC7t", "vi-VN"],
        id: ["Indonesian", "id-ID"],
        ja: ["\u65E5\u672C\u8A9E", "ja-JP"],
        ko: ["\uD55C\uAD6D\uC5B4", "ko-KR"],
        fr: ["Fran\xE7ais", "fr-FR"],
        es: ["Espa\xF1ol", "es-ES"],
        tl: ["Filipino", "fil-PH"],
        ar: ["\u0639\u0631\u0628\u0649", "ar-SA"],
        hi: ["\u0939\u093F\u0928\u094D\u0926\u0940", "hi-IN"],
        tr: ["T\xFCrk\xE7e", "tr-TR"],
        fa: ["\u0641\u0627\u0631\u0633\u06CC", "fa-IR"],
        pt: ["Portugu\xEAs", "pt-BR"],
        ru: ["\u0420\u0443cc\u043A\u0438\u0439", "ru-RU"],
        de: ["Deutsch", "de-DE"],
        th: ["\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22", "th-TH"],
        fi: ["Suomi", "fi-FI"],
        pl: ["Polski", "pl-PL"],
        it: ["Italiano", "it-IT"],
        my: ["\u1019\u103C\u1014\u103A\u1019\u102C", "my-MM"],
        ur: ["\u0627\u0631\u062F\u0648", "ur-PK"],
        uk: ["\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430", "uk-UA"],
        ms: ["Melayu", "ms-MY"],
        bn: ["\u09AC\u09BE\u0982\u09B2\u09BE", "bn-BD"],
        mr: ["Marathi", "mr-IN"],
        ta: ["Tamil", "ta-IN"],
        te: ["Telugu", "te-IN"]
    }, s = Object.keys(l), i = function(e) {
        return s.find(_ => _ === e || new RegExp(`${_}-.*`).test(e)) || s[0]
    }
})();
export {
    E as __tla, l as a, o as l, i as m
};