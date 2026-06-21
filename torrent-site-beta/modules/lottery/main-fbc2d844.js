const d = "modulepreload",
    m = function(i) {
        return "/modules/lottery/" + i
    },
    a = {},
    t = function(c, n, E) {
        if (!n || n.length === 0) return c();
        const l = document.getElementsByTagName("link");
        return Promise.all(n.map(e => {
            if (e = m(e), e in a) return;
            a[e] = !0;
            const o = e.endsWith(".css"),
                u = o ? '[rel="stylesheet"]' : "";
            if (!!E)
                for (let s = l.length - 1; s >= 0; s--) {
                    const _ = l[s];
                    if (_.href === e && (!o || _.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${e}"]${u}`)) return;
            const r = document.createElement("link");
            if (r.rel = o ? "stylesheet" : d, o || (r.as = "script", r.crossOrigin = ""), r.href = e, document.head.appendChild(r), o) return new Promise((s, _) => {
                r.addEventListener("load", s), r.addEventListener("error", () => _(new Error(`Unable to preload CSS for ${e}`)))
            })
        })).then(() => c()).catch(e => {
            const o = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (o.payload = e, window.dispatchEvent(o), !o.defaultPrevented) throw e
        })
    },
    f = () => t(() =>
        import ("./index-25134a63.js").then(i => i.i), ["index-25134a63.js", "_bc_ui_share-16017657.js", "react_router-dom_share-62544329.js", "react_share-7ee6a1d9.js", "index-18563b58.js", "BuyLotteryStore-9582dd76.js", "index-2da93f63.js", "index-ec3f4a8a.js", "index-8b79531b.js", "bc-small-1623b307.js", "index-1ac75826.css"]),
    L = () => t(() =>
        import ("./Notice-c2d32376.js"), ["Notice-c2d32376.js", "_bc_ui_share-16017657.js", "react_share-7ee6a1d9.js", "Notice-db274dcb.css"]),
    R = () => t(() =>
        import ("./BetDetail-657ff3d4.js"), ["BetDetail-657ff3d4.js", "_bc_ui_share-16017657.js", "react_share-7ee6a1d9.js", "index-8b79531b.js", "index-2da93f63.js", "Share-c0ea5370.js", "ball-white-2afbe5ab.js", "lodash_es_share-b99bc9c1.js", "index-18563b58.js", "Share-bf63c659.css", "LotteryStore-d0797ef1.js", "BuyLotteryStore-9582dd76.js", "CommonI18nProvider-3c7e5a88.js", "react_router-dom_share-62544329.js", "bc-small-1623b307.js", "v4-7fe747c7.js", "BetDetail-1b7db601.css"]),
    P = () => t(() =>
        import ("./MsgShareCard-bc816b0d.js"), ["MsgShareCard-bc816b0d.js", "_bc_ui_share-16017657.js", "react_share-7ee6a1d9.js", "Share-c0ea5370.js", "ball-white-2afbe5ab.js", "lodash_es_share-b99bc9c1.js", "index-18563b58.js", "Share-bf63c659.css", "CommonI18nProvider-3c7e5a88.js", "MsgShareCard-48580d3d.css"]),
    h = () => t(() =>
        import ("./Recommend-2794ee13.js"), ["Recommend-2794ee13.js", "_bc_ui_share-16017657.js", "CommonI18nProvider-3c7e5a88.js", "index-2da93f63.js", "devices-d6f37585.js", "lodash_es_share-b99bc9c1.js", "index-8b79531b.js", "react_share-7ee6a1d9.js", "index-18563b58.js", "GridScrollList-1f6ce6d7.js", "index-ec3f4a8a.js", "GridScrollList-6c8cb4d1.css", "PopularSectionItem-894e374d.js", "like-c0f42153.js", "like-done-6629c307.js", "bc-small-1623b307.js", "PopularSectionItem-8367e6bc.css", "Recommend-dfa79b42.css"]),
    y = () => t(() =>
        import ("./Result-f9d194ec.js"), ["Result-f9d194ec.js", "_bc_ui_share-16017657.js", "CommonI18nProvider-3c7e5a88.js", "index-18563b58.js", "PopularSectionItem-894e374d.js", "index-8b79531b.js", "like-c0f42153.js", "like-done-6629c307.js", "bc-small-1623b307.js", "react_share-7ee6a1d9.js", "PopularSectionItem-8367e6bc.css", "Result-13c223a9.css"]),
    p = () => t(() =>
        import ("./PopularSectionItem-894e374d.js").then(i => i.a), ["PopularSectionItem-894e374d.js", "_bc_ui_share-16017657.js", "index-18563b58.js", "index-8b79531b.js", "like-c0f42153.js", "like-done-6629c307.js", "bc-small-1623b307.js", "react_share-7ee6a1d9.js", "PopularSectionItem-8367e6bc.css"]),
    D = () => t(() =>
        import ("./SendGift-f8b451a7.js"), ["SendGift-f8b451a7.js", "_bc_ui_share-16017657.js", "react_share-7ee6a1d9.js", "ShareGift-7452dc33.js", "CopyInput-5bf461c0.js", "index-18563b58.js", "CopyInput-f06a7097.css", "ShareGift-0c71a3e5.css", "useTicketNum-cb6395c2.js", "useTicketNum-e2c27bef.css", "index-d0db732b.js", "SendGift-10165e64.css"]),
    I = () => t(() =>
        import ("./TicketGiftHistory-ca28fef0.js"), ["TicketGiftHistory-ca28fef0.js", "_bc_ui_share-16017657.js", "react_share-7ee6a1d9.js", "index-18563b58.js", "index-d0db732b.js", "TicketGiftHistory-4454cb8d.css"]),
    O = () => t(() =>
        import ("./ReceiveGift-a825b190.js"), ["ReceiveGift-a825b190.js", "_bc_ui_share-16017657.js", "react_share-7ee6a1d9.js", "react_router-dom_share-62544329.js", "recive_bonus-d27047ee.js", "index-18563b58.js", "ClaimGift-697d2a87.js", "ClaimGift-385ac78f.css", "ReceiveGift-c82312de.css"]),
    T = () => t(() =>
        import ("./index-f288d525.js"), ["index-f288d525.js", "_bc_ui_share-16017657.js", "index-18563b58.js", "AwardBall-aec84982.js", "AwardBall-8987e136.css", "recive_bonus-d27047ee.js", "react_router-dom_share-62544329.js", "index-0666f3f6.css"]),
    A = () => t(() =>
        import ("./BcLotteryNotify-c0c8550e.js"), ["BcLotteryNotify-c0c8550e.js", "_bc_ui_share-16017657.js", "react_share-7ee6a1d9.js", "BcLotteryNotify-4b9a2ce4.css"]),
    V = () => t(() =>
        import ("./MsgLottery-d696e2c9.js"), ["MsgLottery-d696e2c9.js", "_bc_ui_share-16017657.js", "react_share-7ee6a1d9.js", "index-18563b58.js", "AwardBall-aec84982.js", "AwardBall-8987e136.css", "MsgLottery-ce9d123e.css"]),
    g = () => t(() =>
        import ("./BillGift-6c1ece5a.js"), ["BillGift-6c1ece5a.js", "_bc_ui_share-16017657.js", "react_router-dom_share-62544329.js", "ReceiveGift-a825b190.js", "react_share-7ee6a1d9.js", "recive_bonus-d27047ee.js", "index-18563b58.js", "ClaimGift-697d2a87.js", "ClaimGift-385ac78f.css", "ReceiveGift-c82312de.css", "ShareGift-7452dc33.js", "CopyInput-5bf461c0.js", "CopyInput-f06a7097.css", "ShareGift-0c71a3e5.css", "index-d0db732b.js", "BillGift-4f213bc9.css"]),
    k = () => t(() =>
        import ("./Guide-dbe34c3b.js"), ["Guide-dbe34c3b.js", "_bc_ui_share-16017657.js", "index-18563b58.js", "react_share-7ee6a1d9.js", "ball_white-f61c8628.js", "Guide-b942a9b6.css"]);
export {
    t as _, L as a, R as b, h as c, y as d, p as e, A as f, V as g, g as h, k as i, f as l, P as m, T as n, O as r, D as s, I as t
};