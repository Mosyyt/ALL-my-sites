import {
    ez as a,
    ds as t
} from "./chunk-b53b00e3.js";
import "./chunk-73e80d68.js";
const e = "https://start9.sptpub.com/static/media",
    i = e,
    m = "https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code",
    p = "https://static.sptpub.com/competitors/images/normal/medium",
    c = "https://static.sptpub.com/additional_images/medium";

function r() {
    const {
        isNg2Host: s,
        isKenyaHost: o
    } = a.getHostType(t.host);
    return o ? "2400325958683996160" : s ? "2278938435223949312" : t.isDevHost ? /game/.exec(t.host) ? "2121274848574574592" : "2088286533093298176" : "2103509236163162112"
}
export {
    p as a, m as c, c as e, r as g, i as s
};