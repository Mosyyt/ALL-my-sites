const d = "modulepreload",
    m = function(r) {
        return "/modules/account/" + r
    },
    a = {},
    t = function(c, s, l) {
        if (!s || s.length === 0) return c();
        const E = document.getElementsByTagName("link");
        return Promise.all(s.map(o => {
            if (o = m(o), o in a) return;
            a[o] = !0;
            const _ = o.endsWith(".css"),
                u = _ ? '[rel="stylesheet"]' : "";
            if (!!l)
                for (let i = E.length - 1; i >= 0; i--) {
                    const n = E[i];
                    if (n.href === o && (!_ || n.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${o}"]${u}`)) return;
            const e = document.createElement("link");
            if (e.rel = _ ? "stylesheet" : d, _ || (e.as = "script", e.crossOrigin = ""), e.href = o, document.head.appendChild(e), _) return new Promise((i, n) => {
                e.addEventListener("load", i), e.addEventListener("error", () => n(new Error(`Unable to preload CSS for ${o}`)))
            })
        })).then(() => c()).catch(o => {
            const _ = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (_.payload = o, window.dispatchEvent(_), !_.defaultPrevented) throw o
        })
    },
    x = () => t(() =>
        import ("./index-591ca06b.js"), ["index-591ca06b.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "react_router-dom_share-62544329.js", "index-b14f14f3.js", "index-5bcb444f.js", "framer_motion_share-695feab3.js", "md5-ba4a6ffc.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "lodash_es_share-b99bc9c1.js", "hmac-sha256-3d10b1b1.js", "Enter-e51f88a6.js", "index-600f95b3.js", "Enter-dc0ff6f2.css", "index-e19e74bf.css", "BCI18nProvider-3934964a.js"]),
    K = () => t(() =>
        import ("./auth-a0eb7155.js"), ["auth-a0eb7155.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "react_router-dom_share-62544329.js", "index-b14f14f3.js", "index-5bcb444f.js", "framer_motion_share-695feab3.js", "md5-ba4a6ffc.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "lodash_es_share-b99bc9c1.js", "hmac-sha256-3d10b1b1.js", "Enter-e51f88a6.js", "index-600f95b3.js", "Enter-dc0ff6f2.css", "index-e19e74bf.css", "BCI18nProvider-3934964a.js"]),
    q = () => t(() =>
        import ("./WalletConnectAuthModal-33649a30.js"), ["WalletConnectAuthModal-33649a30.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "index-600f95b3.js", "___vite-browser-external_commonjs-proxy-558ed773.js"]),
    F = () => t(() =>
        import ("./Enter-e51f88a6.js").then(r => r.E), ["Enter-e51f88a6.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "lodash_es_share-b99bc9c1.js", "index-600f95b3.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "Enter-dc0ff6f2.css"]),
    W = () => t(() =>
        import ("./Setting-2224595d.js"), ["Setting-2224595d.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "react_router-dom_share-62544329.js", "framer_motion_share-695feab3.js", "index-5bcb444f.js", "lodash_es_share-b99bc9c1.js", "index-e1cc6c94.js", "index-b2ee8b3d.js", "BCI18nProvider-3934964a.js", "index-7a553c64.css", "index-c73d1888.js", "Tool-31657768.js", "Tool-ad19d4d8.css", "index-9ce28bc6.css", "getVerifyStatus-c257b4d2.js", "getVerifyStatus-73fc1e6d.css", "hmac-sha256-3d10b1b1.js", "md5-ba4a6ffc.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "handleLogout-17a01079.js", "TwoFactorDialog-8eb48102.js", "TwoFactorDialog-43a0dd57.css", "Privacy-f12494e2.js", "Privacy-409da80e.css", "Svg-6f248cbf.js", "Tool-eac2772a.js", "Cockpit-5e173185.js", "Cockpit-72980fb8.css", "Payment-eee95431.js", "Payment-0f354d3f.css", "Setting-931a5536.css"]),
    v = () => t(() =>
        import ("./PrivacyDialog-986c7452.js"), ["PrivacyDialog-986c7452.js", "_bc_ui_share-16017657.js", "BCI18nProvider-3934964a.js", "Privacy-f12494e2.js", "react_share-ba7e619d.js", "index-5bcb444f.js", "Privacy-409da80e.css"]),
    P = () => t(() =>
        import ("./TwoFactorDialog-8eb48102.js"), ["TwoFactorDialog-8eb48102.js", "_bc_ui_share-16017657.js", "BCI18nProvider-3934964a.js", "react_share-ba7e619d.js", "hmac-sha256-3d10b1b1.js", "md5-ba4a6ffc.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "index-5bcb444f.js", "TwoFactorDialog-43a0dd57.css"]),
    D = () => t(() =>
        import ("./ResetDialog-9e26e4e2.js"), ["ResetDialog-9e26e4e2.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "react_router-dom_share-62544329.js", "md5-ba4a6ffc.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "index-5bcb444f.js", "BCI18nProvider-3934964a.js", "ResetDialog-795a0f18.css"]),
    R = () => t(() =>
        import ("./InvalidDialog-5a09ba3c.js"), ["InvalidDialog-5a09ba3c.js", "_bc_ui_share-16017657.js", "BCI18nProvider-3934964a.js", "InvalidDialog-c9b7364d.css"]),
    p = () => t(() =>
        import ("./index-e1cc6c94.js"), ["index-e1cc6c94.js", "_bc_ui_share-16017657.js", "index-5bcb444f.js", "index-b2ee8b3d.js", "BCI18nProvider-3934964a.js", "index-7a553c64.css"]),
    A = () => t(() =>
        import ("./SendEmail-971cc731.js"), ["SendEmail-971cc731.js", "_bc_ui_share-16017657.js", "index-5bcb444f.js", "index-b2ee8b3d.js", "react_share-ba7e619d.js", "md5-ba4a6ffc.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "hmac-sha256-3d10b1b1.js", "BCI18nProvider-3934964a.js", "ExclusionConfirmation-619b402e.js", "handleLogout-17a01079.js", "ExclusionConfirmation-59b6ff54.css", "SendEmail-9af39781.css"]),
    L = () => t(() =>
        import ("./VerifyPhone-11009308.js"), ["VerifyPhone-11009308.js", "_bc_ui_share-16017657.js", "index-5bcb444f.js", "index-b2ee8b3d.js", "Tool-31657768.js", "react_share-ba7e619d.js", "Tool-ad19d4d8.css", "ExclusionConfirmation-619b402e.js", "handleLogout-17a01079.js", "ExclusionConfirmation-59b6ff54.css", "VerifyPhone-7cc47a92.css"]),
    I = () => t(() =>
        import ("./ExclusionConfirmation-619b402e.js"), ["ExclusionConfirmation-619b402e.js", "_bc_ui_share-16017657.js", "handleLogout-17a01079.js", "ExclusionConfirmation-59b6ff54.css"]),
    V = () => t(() =>
        import ("./index-c73d1888.js"), ["index-c73d1888.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "index-5bcb444f.js", "index-b2ee8b3d.js", "Tool-31657768.js", "Tool-ad19d4d8.css", "BCI18nProvider-3934964a.js", "index-9ce28bc6.css"]),
    T = () => t(() =>
        import ("./index-6421a37c.js"), ["index-6421a37c.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "react_router-dom_share-62544329.js", "index-5bcb444f.js", "Svg-6f248cbf.js", "Tool-eac2772a.js", "BCI18nProvider-3934964a.js", "index-38b07bdc.css"]),
    O = () => t(() =>
        import ("./NeedKyc-a74bae08.js"), ["NeedKyc-a74bae08.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "react_router-dom_share-62544329.js", "Cockpit-5e173185.js", "index-5bcb444f.js", "Cockpit-72980fb8.css", "Tool-eac2772a.js", "BCI18nProvider-3934964a.js"]),
    h = () => t(() =>
        import ("./Payment-eee95431.js"), ["Payment-eee95431.js", "_bc_ui_share-16017657.js", "index-5bcb444f.js", "react_share-ba7e619d.js", "BCI18nProvider-3934964a.js", "Payment-0f354d3f.css"]),
    f = () => t(() =>
        import ("./Achieve-739e141f.js"), ["Achieve-739e141f.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "react_router-dom_share-62544329.js", "AchieveDetail-ca5fcb40.js", "Achieve-ef27a7ed.js", "AchieveDetail-1f6eb0e5.css", "BCI18nProvider-3934964a.js", "Achieve-efd74c02.css"]),
    g = () => t(() =>
        import ("./index-897ff0ec.js"), ["index-897ff0ec.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "react_router-dom_share-62544329.js", "common-3d6f23e3.js", "index-5bcb444f.js", "common-5e86fa92.css", "Achieve-ef27a7ed.js", "BCI18nProvider-3934964a.js", "index-d9167fd3.css"]),
    y = () => t(() =>
        import ("./EditNickName-94b0beb3.js"), ["EditNickName-94b0beb3.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "BCI18nProvider-3934964a.js", "EditNickName-d6b50310.css"]),
    w = () => t(() =>
        import ("./EditAvatar-5bbbfd22.js"), ["EditAvatar-5bbbfd22.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "index-5bcb444f.js", "framer_motion_share-695feab3.js", "BCI18nProvider-3934964a.js", "EditAvatar-e8d92b83.css"]),
    S = () => t(() =>
        import ("./SharePop-27b59bfe.js"), ["SharePop-27b59bfe.js", "_bc_ui_share-16017657.js", "index-5bcb444f.js", "react_router-dom_share-62544329.js", "BCI18nProvider-3934964a.js", "SharePop-b8d1687b.css"]),
    k = () => t(() =>
        import ("./VerifyPop-8be698e5.js"), ["VerifyPop-8be698e5.js", "_bc_ui_share-16017657.js", "index-5bcb444f.js", "BCI18nProvider-3934964a.js", "VerifyPop-7fbeacbb.css"]),
    C = () => t(() =>
        import ("./Invite-ebb6160a.js"), ["Invite-ebb6160a.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "BCI18nProvider-3934964a.js", "Invite-01b3b8e1.css"]),
    U = () => t(() =>
        import ("./StatisticsDetail-13fc5b43.js"), ["StatisticsDetail-13fc5b43.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "common-3d6f23e3.js", "index-5bcb444f.js", "common-5e86fa92.css", "BCI18nProvider-3934964a.js", "react_router-dom_share-62544329.js", "StatisticsDetail-55e1da52.css"]),
    N = () => t(() =>
        import ("./index-8541f1a5.js"), ["index-8541f1a5.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "AchieveDetail-ca5fcb40.js", "Achieve-ef27a7ed.js", "AchieveDetail-1f6eb0e5.css", "BCI18nProvider-3934964a.js", "index-c6af41ed.css"]),
    B = () => t(() =>
        import ("./Enter-01bf2e22.js"), ["Enter-01bf2e22.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "index-5bcb444f.js", "framer_motion_share-695feab3.js", "handleLogout-17a01079.js", "getVerifyStatus-c257b4d2.js", "getVerifyStatus-73fc1e6d.css", "BCI18nProvider-3934964a.js", "Enter-6c110063.css"]),
    $ = () => t(() =>
        import ("./getVerifyStatus-c257b4d2.js").then(r => r.g), ["getVerifyStatus-c257b4d2.js", "_bc_ui_share-16017657.js", "getVerifyStatus-73fc1e6d.css"]),
    Y = {
        PrivacyDialog: v,
        TwoFactorDialog: P,
        ResetPasswordDialog: D,
        ResetPasswordInvalid: R,
        EmailDialog: p,
        PhoneDialog: V,
        KYC: T,
        NeedKycDialog: O,
        UserAchieve: f,
        UserProfile: g,
        EditNickName: y,
        EditAvatar: w,
        SharePop: S,
        VerifyPop: k,
        Invite: C,
        Statistics: U,
        Achieve: N,
        UserEnter: B,
        SendEmailDialog: A,
        VerifyPhoneDialog: L,
        SelfExclusionDialog: I,
        VerifyStatusIcon: $,
        Payment: h
    };
export {
    t as _, x as a, K as b, Y as c, W as s, F as t, q as w
};