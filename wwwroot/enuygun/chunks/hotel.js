(window.NREUM || (NREUM = {})).init = { privacy: { cookies_enabled: true }, ajax: { deny_list: ["bam.nr-data.net"] }, distributed_tracing: { enabled: true } };
(window.NREUM || (NREUM = {})).loader_config = {
    agentID: "718370149",
    accountID: "368685",
    trustKey: "368685",
    xpid: "VwAPV15WGwUJV1FbAwgGVQ==",
    licenseKey: "d7b09acae0",
    applicationID: "693094913",
}; /*! For license information please see nr-loader-spa-1.264.0.min.js.LICENSE.txt */
(() => {
    var e,
        t,
        r = {
            2983: (e, t, r) => {
                "use strict";
                r.d(t, { D0: () => v, gD: () => y, Vp: () => s, oC: () => x, fr: () => _, jD: () => P, hR: () => A, xN: () => b, x1: () => c, aN: () => T, V: () => j });
                var n = r(384),
                    i = r(7864);
                const o = {
                    beacon: n.NT.beacon,
                    errorBeacon: n.NT.errorBeacon,
                    licenseKey: void 0,
                    applicationID: void 0,
                    sa: void 0,
                    queueTime: void 0,
                    applicationTime: void 0,
                    ttGuid: void 0,
                    user: void 0,
                    account: void 0,
                    product: void 0,
                    extra: void 0,
                    jsAttributes: {},
                    userAttributes: void 0,
                    atts: void 0,
                    transactionName: void 0,
                    tNamePlain: void 0,
                },
                    a = {};
                function s(e) {
                    if (!e) throw new Error("All info objects require an agent identifier!");
                    if (!a[e]) throw new Error("Info for ".concat(e, " was never set"));
                    return a[e];
                }
                function c(e, t) {
                    if (!e) throw new Error("All info objects require an agent identifier!");
                    a[e] = (0, i.a)(t, o);
                    const r = (0, n.nY)(e);
                    r && (r.info = a[e]);
                }
                var u = r(993);
                const d = (e) => {
                    if (!e || "string" != typeof e) return !1;
                    try {
                        document.createDocumentFragment().querySelector(e);
                    } catch {
                        return !1;
                    }
                    return !0;
                };
                var l = r(2614),
                    f = r(944);
                const h = "[data-nr-mask]",
                    g = () => {
                        const e = {
                            mask_selector: "*",
                            block_selector: "[data-nr-block]",
                            mask_input_options: {
                                color: !1,
                                date: !1,
                                "datetime-local": !1,
                                email: !1,
                                month: !1,
                                number: !1,
                                range: !1,
                                search: !1,
                                tel: !1,
                                text: !1,
                                time: !1,
                                url: !1,
                                week: !1,
                                textarea: !1,
                                select: !1,
                                password: !0,
                            },
                        };
                        return {
                            ajax: { deny_list: void 0, block_internal: !0, enabled: !0, harvestTimeSeconds: 10, autoStart: !0 },
                            distributed_tracing: { enabled: void 0, exclude_newrelic_header: void 0, cors_use_newrelic_header: void 0, cors_use_tracecontext_headers: void 0, allowed_origins: void 0 },
                            feature_flags: [],
                            generic_events: { enabled: !0, harvestTimeSeconds: 30, autoStart: !0 },
                            harvest: { tooManyRequestsDelay: 60 },
                            jserrors: { enabled: !0, harvestTimeSeconds: 10, autoStart: !0 },
                            logging: { enabled: !0, harvestTimeSeconds: 10, autoStart: !0, level: u.p_.INFO },
                            metrics: { enabled: !0, autoStart: !0 },
                            obfuscate: void 0,
                            page_action: { enabled: !0 },
                            page_view_event: { enabled: !0, autoStart: !0 },
                            page_view_timing: { enabled: !0, harvestTimeSeconds: 30, long_task: !1, autoStart: !0 },
                            privacy: { cookies_enabled: !0 },
                            proxy: { assets: void 0, beacon: void 0 },
                            session: { expiresMs: l.wk, inactiveMs: l.BB },
                            session_replay: {
                                autoStart: !0,
                                enabled: !1,
                                harvestTimeSeconds: 60,
                                preload: !1,
                                sampling_rate: 10,
                                error_sampling_rate: 100,
                                collect_fonts: !1,
                                inline_images: !1,
                                inline_stylesheet: !0,
                                fix_stylesheets: !0,
                                mask_all_inputs: !0,
                                get mask_text_selector() {
                                    return e.mask_selector;
                                },
                                set mask_text_selector(t) {
                                    d(t) ? (e.mask_selector = "".concat(t, ",").concat(h)) : "" === t || null === t ? (e.mask_selector = h) : (0, f.R)(5, t);
                                },
                                get block_class() {
                                    return "nr-block";
                                },
                                get ignore_class() {
                                    return "nr-ignore";
                                },
                                get mask_text_class() {
                                    return "nr-mask";
                                },
                                get block_selector() {
                                    return e.block_selector;
                                },
                                set block_selector(t) {
                                    d(t) ? (e.block_selector += ",".concat(t)) : "" !== t && (0, f.R)(6, t);
                                },
                                get mask_input_options() {
                                    return e.mask_input_options;
                                },
                                set mask_input_options(t) {
                                    t && "object" == typeof t ? (e.mask_input_options = { ...t, password: !0 }) : (0, f.R)(7, t);
                                },
                            },
                            session_trace: { enabled: !0, harvestTimeSeconds: 10, autoStart: !0 },
                            soft_navigations: { enabled: !0, harvestTimeSeconds: 10, autoStart: !0 },
                            spa: { enabled: !0, harvestTimeSeconds: 10, autoStart: !0 },
                            ssl: void 0,
                        };
                    },
                    p = {},
                    m = "All configuration objects require an agent identifier!";
                function v(e) {
                    if (!e) throw new Error(m);
                    if (!p[e]) throw new Error("Configuration for ".concat(e, " was never set"));
                    return p[e];
                }
                function b(e, t) {
                    if (!e) throw new Error(m);
                    p[e] = (0, i.a)(t, g());
                    const r = (0, n.nY)(e);
                    r && (r.init = p[e]);
                }
                function y(e, t) {
                    if (!e) throw new Error(m);
                    var r = v(e);
                    if (r) {
                        for (var n = t.split("."), i = 0; i < n.length - 1; i++) if ("object" != typeof (r = r[n[i]])) return;
                        r = r[n[n.length - 1]];
                    }
                    return r;
                }
                const w = { accountID: void 0, trustKey: void 0, agentID: void 0, licenseKey: void 0, applicationID: void 0, xpid: void 0 },
                    R = {};
                function x(e) {
                    if (!e) throw new Error("All loader-config objects require an agent identifier!");
                    if (!R[e]) throw new Error("LoaderConfig for ".concat(e, " was never set"));
                    return R[e];
                }
                function T(e, t) {
                    if (!e) throw new Error("All loader-config objects require an agent identifier!");
                    R[e] = (0, i.a)(t, w);
                    const r = (0, n.nY)(e);
                    r && (r.loader_config = R[e]);
                }
                const A = (0, n.dV)().o;
                var E = r(6154),
                    N = r(9324);
                const S = { buildEnv: N.F3, distMethod: N.Xs, version: N.xv, originTime: E.WN },
                    O = {
                        customTransaction: void 0,
                        disabled: !1,
                        isolatedBacklog: !1,
                        loaderType: void 0,
                        maxBytes: 3e4,
                        onerror: void 0,
                        origin: "" + E.gm.location,
                        ptid: void 0,
                        releaseIds: {},
                        appMetadata: {},
                        session: void 0,
                        denyList: void 0,
                        harvestCount: 0,
                        timeKeeper: void 0,
                    },
                    I = {};
                function _(e) {
                    if (!e) throw new Error("All runtime objects require an agent identifier!");
                    if (!I[e]) throw new Error("Runtime for ".concat(e, " was never set"));
                    return I[e];
                }
                function j(e, t) {
                    if (!e) throw new Error("All runtime objects require an agent identifier!");
                    I[e] = { ...(0, i.a)(t, O), ...S };
                    const r = (0, n.nY)(e);
                    r && (r.runtime = I[e]);
                }
                function P(e) {
                    return (function (e) {
                        try {
                            const t = s(e);
                            return !!t.licenseKey && !!t.errorBeacon && !!t.applicationID;
                        } catch (e) {
                            return !1;
                        }
                    })(e);
                }
            },
            7864: (e, t, r) => {
                "use strict";
                r.d(t, { a: () => i });
                var n = r(944);
                function i(e, t) {
                    try {
                        if (!e || "object" != typeof e) return (0, n.R)(3);
                        if (!t || "object" != typeof t) return (0, n.R)(4);
                        const r = Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)),
                            o = 0 === Object.keys(r).length ? e : r;
                        for (let a in o)
                            if (void 0 !== e[a])
                                try {
                                    if (null === e[a]) {
                                        r[a] = null;
                                        continue;
                                    }
                                    Array.isArray(e[a]) && Array.isArray(t[a]) ? (r[a] = Array.from(new Set([...e[a], ...t[a]]))) : "object" == typeof e[a] && "object" == typeof t[a] ? (r[a] = i(e[a], t[a])) : (r[a] = e[a]);
                                } catch (e) {
                                    (0, n.R)(1, e);
                                }
                        return r;
                    } catch (e) {
                        (0, n.R)(2, e);
                    }
                }
            },
            9324: (e, t, r) => {
                "use strict";
                r.d(t, { F3: () => i, Xs: () => o, Yq: () => a, xv: () => n });
                const n = "1.264.0",
                    i = "PROD",
                    o = "CDN",
                    a = "2.0.0-alpha.12";
            },
            6154: (e, t, r) => {
                "use strict";
                r.d(t, { A4: () => s, OF: () => d, RI: () => i, Vr: () => h, WN: () => g, bv: () => o, gm: () => a, lR: () => f, m: () => u, mw: () => c, sb: () => l });
                var n = r(1863);
                const i = "undefined" != typeof window && !!window.document,
                    o =
                        "undefined" != typeof WorkerGlobalScope &&
                        (("undefined" != typeof self && self instanceof WorkerGlobalScope && self.navigator instanceof WorkerNavigator) ||
                            ("undefined" != typeof globalThis && globalThis instanceof WorkerGlobalScope && globalThis.navigator instanceof WorkerNavigator)),
                    a = i
                        ? window
                        : "undefined" != typeof WorkerGlobalScope &&
                        (("undefined" != typeof self && self instanceof WorkerGlobalScope && self) || ("undefined" != typeof globalThis && globalThis instanceof WorkerGlobalScope && globalThis)),
                    s = "complete" === a?.document?.readyState,
                    c = Boolean("hidden" === a?.document?.visibilityState),
                    u = "" + a?.location,
                    d = /iPad|iPhone|iPod/.test(a.navigator?.userAgent),
                    l = d && "undefined" == typeof SharedWorker,
                    f = (() => {
                        const e = a.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);
                        return Array.isArray(e) && e.length >= 2 ? +e[1] : 0;
                    })(),
                    h = !!a.navigator?.sendBeacon,
                    g = Date.now() - (0, n.t)();
            },
            4777: (e, t, r) => {
                "use strict";
                r.d(t, { J: () => o });
                var n = r(944);
                const i = { agentIdentifier: "", ee: void 0 };
                class o {
                    constructor(e) {
                        try {
                            if ("object" != typeof e) return (0, n.R)(8);
                            (this.sharedContext = {}),
                                Object.assign(this.sharedContext, i),
                                Object.entries(e).forEach((e) => {
                                    let [t, r] = e;
                                    Object.keys(i).includes(t) && (this.sharedContext[t] = r);
                                });
                        } catch (e) {
                            (0, n.R)(9, e);
                        }
                    }
                }
            },
            7295: (e, t, r) => {
                "use strict";
                r.d(t, { Xv: () => a, gX: () => i, iW: () => o });
                var n = [];
                function i(e) {
                    if (!e || o(e)) return !1;
                    if (0 === n.length) return !0;
                    for (var t = 0; t < n.length; t++) {
                        var r = n[t];
                        if ("*" === r.hostname) return !1;
                        if (s(r.hostname, e.hostname) && c(r.pathname, e.pathname)) return !1;
                    }
                    return !0;
                }
                function o(e) {
                    return void 0 === e.hostname;
                }
                function a(e) {
                    if (((n = []), e && e.length))
                        for (var t = 0; t < e.length; t++) {
                            let r = e[t];
                            if (!r) continue;
                            0 === r.indexOf("http://") ? (r = r.substring(7)) : 0 === r.indexOf("https://") && (r = r.substring(8));
                            const i = r.indexOf("/");
                            let o, a;
                            i > 0 ? ((o = r.substring(0, i)), (a = r.substring(i))) : ((o = r), (a = ""));
                            let [s] = o.split(":");
                            n.push({ hostname: s, pathname: a });
                        }
                }
                function s(e, t) {
                    return !(e.length > t.length) && t.indexOf(e) === t.length - e.length;
                }
                function c(e, t) {
                    return 0 === e.indexOf("/") && (e = e.substring(1)), 0 === t.indexOf("/") && (t = t.substring(1)), "" === e || e === t;
                }
            },
            1687: (e, t, r) => {
                "use strict";
                r.d(t, { Ak: () => s, Ze: () => d, x3: () => c });
                var n = r(7836),
                    i = r(3606),
                    o = r(860);
                const a = {};
                function s(e, t) {
                    const r = { staged: !1, priority: o.P[t] || 0 };
                    u(e), a[e].get(t) || a[e].set(t, r);
                }
                function c(e, t) {
                    e && a[e] && (a[e].get(t) && a[e].delete(t), f(e, t, !1), a[e].size && l(e));
                }
                function u(e) {
                    if (!e) throw new Error("agentIdentifier required");
                    a[e] || (a[e] = new Map());
                }
                function d() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "feature",
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if ((u(e), !e || !a[e].get(t) || r)) return f(e, t);
                    (a[e].get(t).staged = !0), l(e);
                }
                function l(e) {
                    const t = Array.from(a[e]);
                    t.every((e) => {
                        let [t, r] = e;
                        return r.staged;
                    }) &&
                        (t.sort((e, t) => e[1].priority - t[1].priority),
                            t.forEach((t) => {
                                let [r] = t;
                                a[e].delete(r), f(e, r);
                            }));
                }
                function f(e, t) {
                    let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    const o = e ? n.ee.get(e) : n.ee,
                        a = i.i.handlers;
                    if (!o.aborted && o.backlog && a) {
                        if (r) {
                            const e = o.backlog[t],
                                r = a[t];
                            if (r) {
                                for (let t = 0; e && t < e.length; ++t) h(e[t], r);
                                Object.entries(r).forEach((e) => {
                                    let [t, r] = e;
                                    Object.values(r || {}).forEach((e) => {
                                        e[0].on(t, e[1]);
                                    });
                                });
                            }
                        }
                        o.isolatedBacklog || delete a[t], (o.backlog[t] = null), o.emit("drain-" + t, []);
                    }
                }
                function h(e, t) {
                    var r = e[1];
                    Object.values(t[r] || {}).forEach((t) => {
                        var r = e[0];
                        if (t[0] === r) {
                            var n = t[1],
                                i = e[3],
                                o = e[2];
                            n.apply(i, o);
                        }
                    });
                }
            },
            7836: (e, t, r) => {
                "use strict";
                r.d(t, { P: () => c, ee: () => u });
                var n = r(384),
                    i = r(8990),
                    o = r(2983),
                    a = r(2646),
                    s = r(5607);
                const c = "nr@context:".concat(s.W),
                    u = (function e(t, r) {
                        var n = {},
                            s = {},
                            d = {},
                            l = !1;
                        try {
                            l = 16 === r.length && (0, o.fr)(r).isolatedBacklog;
                        } catch (e) { }
                        var f = {
                            on: g,
                            addEventListener: g,
                            removeEventListener: function (e, t) {
                                var r = n[e];
                                if (!r) return;
                                for (var i = 0; i < r.length; i++) r[i] === t && r.splice(i, 1);
                            },
                            emit: function (e, r, n, i, o) {
                                !1 !== o && (o = !0);
                                if (u.aborted && !i) return;
                                t && o && t.emit(e, r, n);
                                for (var a = h(n), c = p(e), d = c.length, l = 0; l < d; l++) c[l].apply(a, r);
                                var g = v()[s[e]];
                                g && g.push([f, e, r, a]);
                                return a;
                            },
                            get: m,
                            listeners: p,
                            context: h,
                            buffer: function (e, t) {
                                const r = v();
                                if (((t = t || "feature"), f.aborted)) return;
                                Object.entries(e || {}).forEach((e) => {
                                    let [n, i] = e;
                                    (s[i] = t), t in r || (r[t] = []);
                                });
                            },
                            abort: function () {
                                (f._aborted = !0),
                                    Object.keys(f.backlog).forEach((e) => {
                                        delete f.backlog[e];
                                    });
                            },
                            isBuffering: function (e) {
                                return !!v()[s[e]];
                            },
                            debugId: r,
                            backlog: l ? {} : t && "object" == typeof t.backlog ? t.backlog : {},
                            isolatedBacklog: l,
                        };
                        return (
                            Object.defineProperty(f, "aborted", {
                                get: () => {
                                    let e = f._aborted || !1;
                                    return e || (t && (e = t.aborted), e);
                                },
                            }),
                            f
                        );
                        function h(e) {
                            return e && e instanceof a.y ? e : e ? (0, i.I)(e, c, () => new a.y(c)) : new a.y(c);
                        }
                        function g(e, t) {
                            n[e] = p(e).concat(t);
                        }
                        function p(e) {
                            return n[e] || [];
                        }
                        function m(t) {
                            return (d[t] = d[t] || e(f, t));
                        }
                        function v() {
                            return f.backlog;
                        }
                    })(void 0, "globalEE"),
                    d = (0, n.Zm)();
                d.ee || (d.ee = u);
            },
            2646: (e, t, r) => {
                "use strict";
                r.d(t, { y: () => n });
                class n {
                    constructor(e) {
                        this.contextId = e;
                    }
                }
            },
            9908: (e, t, r) => {
                "use strict";
                r.d(t, { d: () => n, p: () => i });
                var n = r(7836).ee.get("handle");
                function i(e, t, r, i, o) {
                    o ? (o.buffer([e], i), o.emit(e, t, r)) : (n.buffer([e], i), n.emit(e, t, r));
                }
            },
            3606: (e, t, r) => {
                "use strict";
                r.d(t, { i: () => o });
                var n = r(9908);
                o.on = a;
                var i = (o.handlers = {});
                function o(e, t, r, o) {
                    a(o || n.d, i, e, t, r);
                }
                function a(e, t, r, i, o) {
                    o || (o = "feature"), e || (e = n.d);
                    var a = (t[o] = t[o] || {});
                    (a[r] = a[r] || []).push([e, i]);
                }
            },
            3878: (e, t, r) => {
                "use strict";
                r.d(t, { DD: () => c, jT: () => a, sp: () => s });
                var n = r(6154);
                let i = !1,
                    o = !1;
                try {
                    const e = {
                        get passive() {
                            return (i = !0), !1;
                        },
                        get signal() {
                            return (o = !0), !1;
                        },
                    };
                    n.gm.addEventListener("test", null, e), n.gm.removeEventListener("test", null, e);
                } catch (e) { }
                function a(e, t) {
                    return i || o ? { capture: !!e, passive: i, signal: t } : !!e;
                }
                function s(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 ? arguments[3] : void 0;
                    window.addEventListener(e, t, a(r, n));
                }
                function c(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 ? arguments[3] : void 0;
                    document.addEventListener(e, t, a(r, n));
                }
            },
            5607: (e, t, r) => {
                "use strict";
                r.d(t, { W: () => n });
                const n = (0, r(9566).bz)();
            },
            9566: (e, t, r) => {
                "use strict";
                r.d(t, { LA: () => s, ZF: () => c, bz: () => a, el: () => u });
                var n = r(6154);
                const i = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
                function o(e, t) {
                    return e ? 15 & e[t] : (16 * Math.random()) | 0;
                }
                function a() {
                    const e = n.gm?.crypto || n.gm?.msCrypto;
                    let t,
                        r = 0;
                    return (
                        e && e.getRandomValues && (t = e.getRandomValues(new Uint8Array(30))),
                        i
                            .split("")
                            .map((e) => ("x" === e ? o(t, r++).toString(16) : "y" === e ? ((3 & o()) | 8).toString(16) : e))
                            .join("")
                    );
                }
                function s(e) {
                    const t = n.gm?.crypto || n.gm?.msCrypto;
                    let r,
                        i = 0;
                    t && t.getRandomValues && (r = t.getRandomValues(new Uint8Array(e)));
                    const a = [];
                    for (var s = 0; s < e; s++) a.push(o(r, i++).toString(16));
                    return a.join("");
                }
                function c() {
                    return s(16);
                }
                function u() {
                    return s(32);
                }
            },
            2614: (e, t, r) => {
                "use strict";
                r.d(t, { BB: () => a, H3: () => n, g: () => u, iL: () => c, tS: () => s, uh: () => i, wk: () => o });
                const n = "NRBA",
                    i = "SESSION",
                    o = 144e5,
                    a = 18e5,
                    s = { STARTED: "session-started", PAUSE: "session-pause", RESET: "session-reset", RESUME: "session-resume", UPDATE: "session-update" },
                    c = { SAME_TAB: "same-tab", CROSS_TAB: "cross-tab" },
                    u = { OFF: 0, FULL: 1, ERROR: 2 };
            },
            1863: (e, t, r) => {
                "use strict";
                function n() {
                    return Math.floor(performance.now());
                }
                r.d(t, { t: () => n });
            },
            7485: (e, t, r) => {
                "use strict";
                r.d(t, { D: () => i });
                var n = r(6154);
                function i(e) {
                    if (0 === (e || "").indexOf("data:")) return { protocol: "data" };
                    try {
                        const t = new URL(e, location.href),
                            r = {
                                port: t.port,
                                hostname: t.hostname,
                                pathname: t.pathname,
                                search: t.search,
                                protocol: t.protocol.slice(0, t.protocol.indexOf(":")),
                                sameOrigin: t.protocol === n.gm?.location?.protocol && t.host === n.gm?.location?.host,
                            };
                        return (
                            (r.port && "" !== r.port) || ("http:" === t.protocol && (r.port = "80"), "https:" === t.protocol && (r.port = "443")),
                            r.pathname && "" !== r.pathname ? r.pathname.startsWith("/") || (r.pathname = "/".concat(r.pathname)) : (r.pathname = "/"),
                            r
                        );
                    } catch (e) {
                        return {};
                    }
                }
            },
            944: (e, t, r) => {
                "use strict";
                function n(e, t) {
                    "function" == typeof console.debug && console.debug("New Relic Warning: https://github.com/newrelic/newrelic-browser-agent/blob/main/docs/warning-codes.md#".concat(e), t);
                }
                r.d(t, { R: () => n });
            },
            5284: (e, t, r) => {
                "use strict";
                r.d(t, { t: () => c, B: () => s });
                var n = r(7836),
                    i = r(6154);
                const o = "newrelic";
                const a = new Set(),
                    s = {};
                function c(e, t) {
                    const r = n.ee.get(t);
                    (s[t] ??= {}),
                        e &&
                        "object" == typeof e &&
                        (a.has(t) ||
                            (r.emit("rumresp", [e]),
                                (s[t] = e),
                                a.add(t),
                                (function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    try {
                                        i.gm.dispatchEvent(new CustomEvent(o, { detail: e }));
                                    } catch (e) { }
                                })({ loaded: !0 })));
                }
            },
            8990: (e, t, r) => {
                "use strict";
                r.d(t, { I: () => i });
                var n = Object.prototype.hasOwnProperty;
                function i(e, t, r) {
                    if (n.call(e, t)) return e[t];
                    var i = r();
                    if (Object.defineProperty && Object.keys)
                        try {
                            return Object.defineProperty(e, t, { value: i, writable: !0, enumerable: !1 }), i;
                        } catch (e) { }
                    return (e[t] = i), i;
                }
            },
            6389: (e, t, r) => {
                "use strict";
                function n(e) {
                    var t = this;
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    const i = n?.leading || !1;
                    let o;
                    return function () {
                        for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
                        i &&
                            void 0 === o &&
                            (e.apply(t, a),
                                (o = setTimeout(() => {
                                    o = clearTimeout(o);
                                }, r))),
                            i ||
                            (clearTimeout(o),
                                (o = setTimeout(() => {
                                    e.apply(t, a);
                                }, r)));
                    };
                }
                function i(e) {
                    var t = this;
                    let r = !1;
                    return function () {
                        if (!r) {
                            r = !0;
                            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                            e.apply(t, i);
                        }
                    };
                }
                r.d(t, { J: () => i, s: () => n });
            },
            3304: (e, t, r) => {
                "use strict";
                r.d(t, { A: () => o });
                var n = r(7836);
                const i = () => {
                    const e = new WeakSet();
                    return (t, r) => {
                        if ("object" == typeof r && null !== r) {
                            if (e.has(r)) return;
                            e.add(r);
                        }
                        return r;
                    };
                };
                function o(e) {
                    try {
                        return JSON.stringify(e, i());
                    } catch (e) {
                        try {
                            n.ee.emit("internal-error", [e]);
                        } catch (e) { }
                    }
                }
            },
            5289: (e, t, r) => {
                "use strict";
                r.d(t, { GG: () => o, sB: () => a });
                var n = r(3878);
                function i() {
                    return "undefined" == typeof document || "complete" === document.readyState;
                }
                function o(e, t) {
                    if (i()) return e();
                    (0, n.sp)("load", e, t);
                }
                function a(e) {
                    if (i()) return e();
                    (0, n.DD)("DOMContentLoaded", e);
                }
            },
            384: (e, t, r) => {
                "use strict";
                r.d(t, { NT: () => o, US: () => d, Zm: () => a, bQ: () => c, dV: () => s, nY: () => u, pV: () => l });
                var n = r(6154),
                    i = r(1863);
                const o = { beacon: "bam.nr-data.net", errorBeacon: "bam.nr-data.net" };
                function a() {
                    return n.gm.NREUM || (n.gm.NREUM = {}), void 0 === n.gm.newrelic && (n.gm.newrelic = n.gm.NREUM), n.gm.NREUM;
                }
                function s() {
                    let e = a();
                    return (
                        e.o ||
                        (e.o = {
                            ST: n.gm.setTimeout,
                            SI: n.gm.setImmediate,
                            CT: n.gm.clearTimeout,
                            XHR: n.gm.XMLHttpRequest,
                            REQ: n.gm.Request,
                            EV: n.gm.Event,
                            PR: n.gm.Promise,
                            MO: n.gm.MutationObserver,
                            FETCH: n.gm.fetch,
                        }),
                        e
                    );
                }
                function c(e, t) {
                    let r = a();
                    (r.initializedAgents ??= {}), (t.initializedAt = { ms: (0, i.t)(), date: new Date() }), (r.initializedAgents[e] = t);
                }
                function u(e) {
                    let t = a();
                    return t.initializedAgents?.[e];
                }
                function d(e, t) {
                    a()[e] = t;
                }
                function l() {
                    return (
                        (function () {
                            let e = a();
                            const t = e.info || {};
                            e.info = { beacon: o.beacon, errorBeacon: o.errorBeacon, ...t };
                        })(),
                        (function () {
                            let e = a();
                            const t = e.init || {};
                            e.init = { ...t };
                        })(),
                        s(),
                        (function () {
                            let e = a();
                            const t = e.loader_config || {};
                            e.loader_config = { ...t };
                        })(),
                        a()
                    );
                }
            },
            2843: (e, t, r) => {
                "use strict";
                r.d(t, { u: () => i });
                var n = r(3878);
                function i(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        i = arguments.length > 3 ? arguments[3] : void 0;
                    (0, n.DD)(
                        "visibilitychange",
                        function () {
                            if (t) return void ("hidden" === document.visibilityState && e());
                            e(document.visibilityState);
                        },
                        r,
                        i
                    );
                }
            },
            8941: (e, t, r) => {
                "use strict";
                r.d(t, { um: () => f, NZ: () => R, vC: () => A, Ri: () => O, Ak: () => _, o8: () => P, MO: () => U, bX: () => F });
                var n = r(7836),
                    i = r(3434),
                    o = r(8990),
                    a = r(6154);
                const s = {},
                    c = a.gm.XMLHttpRequest,
                    u = "addEventListener",
                    d = "removeEventListener",
                    l = "nr@wrapped:".concat(n.P);
                function f(e) {
                    var t = (function (e) {
                        return (e || n.ee).get("events");
                    })(e);
                    if (s[t.debugId]++) return t;
                    s[t.debugId] = 1;
                    var r = (0, i.YM)(t, !0);
                    function f(e) {
                        r.inPlace(e, [u, d], "-", g);
                    }
                    function g(e, t) {
                        return e[1];
                    }
                    return (
                        "getPrototypeOf" in Object && (a.RI && h(document, f), h(a.gm, f), h(c.prototype, f)),
                        t.on(u + "-start", function (e, t) {
                            var n = e[1];
                            if (null !== n && ("function" == typeof n || "object" == typeof n)) {
                                var i = (0, o.I)(n, l, function () {
                                    var e = {
                                        object: function () {
                                            if ("function" != typeof n.handleEvent) return;
                                            return n.handleEvent.apply(n, arguments);
                                        },
                                        function: n,
                                    }[typeof n];
                                    return e ? r(e, "fn-", null, e.name || "anonymous") : n;
                                });
                                this.wrapped = e[1] = i;
                            }
                        }),
                        t.on(d + "-start", function (e) {
                            e[1] = this.wrapped || e[1];
                        }),
                        t
                    );
                }
                function h(e, t) {
                    let r = e;
                    for (; "object" == typeof r && !Object.prototype.hasOwnProperty.call(r, u);) r = Object.getPrototypeOf(r);
                    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) i[o - 2] = arguments[o];
                    r && t(r, ...i);
                }
                var g = "fetch-",
                    p = g + "body-",
                    m = ["arrayBuffer", "blob", "json", "text", "formData"],
                    v = a.gm.Request,
                    b = a.gm.Response,
                    y = "prototype";
                const w = {};
                function R(e) {
                    const t = (function (e) {
                        return (e || n.ee).get("fetch");
                    })(e);
                    if (!(v && b && a.gm.fetch)) return t;
                    if (w[t.debugId]++) return t;
                    function r(e, r, i) {
                        var o = e[r];
                        "function" == typeof o &&
                            (e[r] = function () {
                                var e,
                                    r = [...arguments],
                                    a = {};
                                t.emit(i + "before-start", [r], a), a[n.P] && a[n.P].dt && (e = a[n.P].dt);
                                var s = o.apply(this, r);
                                return (
                                    t.emit(i + "start", [r, e], s),
                                    s.then(
                                        function (e) {
                                            return t.emit(i + "end", [null, e], s), e;
                                        },
                                        function (e) {
                                            throw (t.emit(i + "end", [e], s), e);
                                        }
                                    )
                                );
                            });
                    }
                    return (
                        (w[t.debugId] = 1),
                        m.forEach((e) => {
                            r(v[y], e, p), r(b[y], e, p);
                        }),
                        r(a.gm, "fetch", g),
                        t.on(g + "end", function (e, r) {
                            var n = this;
                            if (r) {
                                var i = r.headers.get("content-length");
                                null !== i && (n.rxSize = i), t.emit(g + "done", [null, r], n);
                            } else t.emit(g + "done", [e], n);
                        }),
                        t
                    );
                }
                const x = {},
                    T = ["pushState", "replaceState"];
                function A(e) {
                    const t = (function (e) {
                        return (e || n.ee).get("history");
                    })(e);
                    return !a.RI || x[t.debugId]++ || ((x[t.debugId] = 1), (0, i.YM)(t).inPlace(window.history, T, "-")), t;
                }
                var E = r(3878);
                const N = {},
                    S = ["appendChild", "insertBefore", "replaceChild"];
                function O(e) {
                    const t = (function (e) {
                        return (e || n.ee).get("jsonp");
                    })(e);
                    if (!a.RI || N[t.debugId]) return t;
                    N[t.debugId] = !0;
                    var r = (0, i.YM)(t),
                        o = /[?&](?:callback|cb)=([^&#]+)/,
                        s = /(.*)\.([^.]+)/,
                        c = /^(\w+)(\.|$)(.*)$/;
                    function u(e, t) {
                        if (!e) return t;
                        const r = e.match(c),
                            n = r[1];
                        return u(r[3], t[n]);
                    }
                    return (
                        r.inPlace(Node.prototype, S, "dom-"),
                        t.on("dom-start", function (e) {
                            !(function (e) {
                                if (!e || "string" != typeof e.nodeName || "script" !== e.nodeName.toLowerCase()) return;
                                if ("function" != typeof e.addEventListener) return;
                                var n = ((i = e.src), (a = i.match(o)), a ? a[1] : null);
                                var i, a;
                                if (!n) return;
                                var c = (function (e) {
                                    var t = e.match(s);
                                    if (t && t.length >= 3) return { key: t[2], parent: u(t[1], window) };
                                    return { key: e, parent: window };
                                })(n);
                                if ("function" != typeof c.parent[c.key]) return;
                                var d = {};
                                function l() {
                                    t.emit("jsonp-end", [], d), e.removeEventListener("load", l, (0, E.jT)(!1)), e.removeEventListener("error", f, (0, E.jT)(!1));
                                }
                                function f() {
                                    t.emit("jsonp-error", [], d), t.emit("jsonp-end", [], d), e.removeEventListener("load", l, (0, E.jT)(!1)), e.removeEventListener("error", f, (0, E.jT)(!1));
                                }
                                r.inPlace(c.parent, [c.key], "cb-", d), e.addEventListener("load", l, (0, E.jT)(!1)), e.addEventListener("error", f, (0, E.jT)(!1)), t.emit("new-jsonp", [e.src], d);
                            })(e[0]);
                        }),
                        t
                    );
                }
                const I = {};
                function _(e) {
                    const t = (function (e) {
                        return (e || n.ee).get("mutation");
                    })(e);
                    if (!a.RI || I[t.debugId]) return t;
                    I[t.debugId] = !0;
                    var r = (0, i.YM)(t),
                        o = a.gm.MutationObserver;
                    return (
                        o &&
                        ((window.MutationObserver = function (e) {
                            return this instanceof o ? new o(r(e, "fn-")) : o.apply(this, arguments);
                        }),
                            (MutationObserver.prototype = o.prototype)),
                        t
                    );
                }
                const j = {};
                function P(e) {
                    const t = (function (e) {
                        return (e || n.ee).get("promise");
                    })(e);
                    if (j[t.debugId]) return t;
                    j[t.debugId] = !0;
                    var r = t.context,
                        o = (0, i.YM)(t),
                        s = a.gm.Promise;
                    return (
                        s &&
                        (function () {
                            function e(r) {
                                var n = t.context(),
                                    i = o(r, "executor-", n, null, !1);
                                const a = Reflect.construct(s, [i], e);
                                return (
                                    (t.context(a).getCtx = function () {
                                        return n;
                                    }),
                                    a
                                );
                            }
                            (a.gm.Promise = e),
                                Object.defineProperty(e, "name", { value: "Promise" }),
                                (e.toString = function () {
                                    return s.toString();
                                }),
                                Object.setPrototypeOf(e, s),
                                ["all", "race"].forEach(function (r) {
                                    const n = s[r];
                                    e[r] = function (e) {
                                        let i = !1;
                                        [...(e || [])].forEach((e) => {
                                            this.resolve(e).then(a("all" === r), a(!1));
                                        });
                                        const o = n.apply(this, arguments);
                                        return o;
                                        function a(e) {
                                            return function () {
                                                t.emit("propagate", [null, !i], o, !1, !1), (i = i || !e);
                                            };
                                        }
                                    };
                                }),
                                ["resolve", "reject"].forEach(function (r) {
                                    const n = s[r];
                                    e[r] = function (e) {
                                        const r = n.apply(this, arguments);
                                        return e !== r && t.emit("propagate", [e, !0], r, !1, !1), r;
                                    };
                                }),
                                (e.prototype = s.prototype);
                            const n = s.prototype.then;
                            (s.prototype.then = function () {
                                var e = this,
                                    i = r(e);
                                i.promise = e;
                                for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++) s[c] = arguments[c];
                                (s[0] = o(s[0], "cb-", i, null, !1)), (s[1] = o(s[1], "cb-", i, null, !1));
                                const u = n.apply(this, s);
                                return (i.nextPromise = u), t.emit("propagate", [e, !0], u, !1, !1), u;
                            }),
                                (s.prototype.then[i.Jt] = n),
                                t.on("executor-start", function (e) {
                                    (e[0] = o(e[0], "resolve-", this, null, !1)), (e[1] = o(e[1], "resolve-", this, null, !1));
                                }),
                                t.on("executor-err", function (e, t, r) {
                                    e[1](r);
                                }),
                                t.on("cb-end", function (e, r, n) {
                                    t.emit("propagate", [n, !0], this.nextPromise, !1, !1);
                                }),
                                t.on("propagate", function (e, r, n) {
                                    (this.getCtx && !r) ||
                                        (this.getCtx = function () {
                                            if (e instanceof Promise) var r = t.context(e);
                                            return r && r.getCtx ? r.getCtx() : this;
                                        });
                                });
                        })(),
                        t
                    );
                }
                const C = {},
                    k = "setTimeout",
                    L = "setInterval",
                    D = "clearTimeout",
                    H = "-start",
                    M = "-",
                    K = [k, "setImmediate", L, D, "clearImmediate"];
                function U(e) {
                    const t = (function (e) {
                        return (e || n.ee).get("timer");
                    })(e);
                    if (C[t.debugId]++) return t;
                    C[t.debugId] = 1;
                    var r = (0, i.YM)(t);
                    return (
                        r.inPlace(a.gm, K.slice(0, 2), k + M),
                        r.inPlace(a.gm, K.slice(2, 3), L + M),
                        r.inPlace(a.gm, K.slice(3), D + M),
                        t.on(L + H, function (e, t, n) {
                            e[0] = r(e[0], "fn-", null, n);
                        }),
                        t.on(k + H, function (e, t, n) {
                            (this.method = n), (this.timerDuration = isNaN(e[1]) ? 0 : +e[1]), (e[0] = r(e[0], "fn-", this, n));
                        }),
                        t
                    );
                }
                var G = r(944);
                const B = {},
                    V = ["open", "send"];
                function F(e) {
                    var t = e || n.ee;
                    const r = (function (e) {
                        return (e || n.ee).get("xhr");
                    })(t);
                    if (B[r.debugId]++) return r;
                    (B[r.debugId] = 1), f(t);
                    var o = (0, i.YM)(r),
                        s = a.gm.XMLHttpRequest,
                        c = a.gm.MutationObserver,
                        u = a.gm.Promise,
                        d = a.gm.setInterval,
                        l = "readystatechange",
                        h = ["onload", "onerror", "onabort", "onloadstart", "onloadend", "onprogress", "ontimeout"],
                        g = [],
                        p = (a.gm.XMLHttpRequest = function (e) {
                            const t = new s(e),
                                n = r.context(t);
                            try {
                                r.emit("new-xhr", [t], n),
                                    t.addEventListener(
                                        l,
                                        ((i = n),
                                            function () {
                                                var e = this;
                                                e.readyState > 3 && !i.resolved && ((i.resolved = !0), r.emit("xhr-resolved", [], e)), o.inPlace(e, h, "fn-", R);
                                            }),
                                        (0, E.jT)(!1)
                                    );
                            } catch (e) {
                                (0, G.R)(15, e);
                                try {
                                    r.emit("internal-error", [e]);
                                } catch (e) { }
                            }
                            var i;
                            return t;
                        });
                    function m(e, t) {
                        o.inPlace(t, ["onreadystatechange"], "fn-", R);
                    }
                    if (
                        ((function (e, t) {
                            for (var r in e) t[r] = e[r];
                        })(s, p),
                            (p.prototype = s.prototype),
                            o.inPlace(p.prototype, V, "-xhr-", R),
                            r.on("send-xhr-start", function (e, t) {
                                m(e, t),
                                    (function (e) {
                                        g.push(e), c && (v ? v.then(w) : d ? d(w) : ((b = -b), (y.data = b)));
                                    })(t);
                            }),
                            r.on("open-xhr-start", m),
                            c)
                    ) {
                        var v = u && u.resolve();
                        if (!d && !u) {
                            var b = 1,
                                y = document.createTextNode(b);
                            new c(w).observe(y, { characterData: !0 });
                        }
                    } else
                        t.on("fn-end", function (e) {
                            (e[0] && e[0].type === l) || w();
                        });
                    function w() {
                        for (var e = 0; e < g.length; e++) m(0, g[e]);
                        g.length && (g = []);
                    }
                    function R(e, t) {
                        return t;
                    }
                    return r;
                }
            },
            3434: (e, t, r) => {
                "use strict";
                r.d(t, { Jt: () => o, YM: () => c });
                var n = r(7836),
                    i = r(5607);
                const o = "nr@original:".concat(i.W);
                var a = Object.prototype.hasOwnProperty,
                    s = !1;
                function c(e, t) {
                    return (
                        e || (e = n.ee),
                        (r.inPlace = function (e, t, n, i, o) {
                            n || (n = "");
                            const a = "-" === n.charAt(0);
                            for (let s = 0; s < t.length; s++) {
                                const c = t[s],
                                    u = e[c];
                                d(u) || (e[c] = r(u, a ? c + n : n, i, c, o));
                            }
                        }),
                        (r.flag = o),
                        r
                    );
                    function r(t, r, n, s, c) {
                        return d(t)
                            ? t
                            : (r || (r = ""),
                                (nrWrapper[o] = t),
                                (function (e, t, r) {
                                    if (Object.defineProperty && Object.keys)
                                        try {
                                            return (
                                                Object.keys(e).forEach(function (r) {
                                                    Object.defineProperty(t, r, {
                                                        get: function () {
                                                            return e[r];
                                                        },
                                                        set: function (t) {
                                                            return (e[r] = t), t;
                                                        },
                                                    });
                                                }),
                                                t
                                            );
                                        } catch (e) {
                                            u([e], r);
                                        }
                                    for (var n in e) a.call(e, n) && (t[n] = e[n]);
                                })(t, nrWrapper, e),
                                nrWrapper);
                        function nrWrapper() {
                            var o, a, d, l;
                            try {
                                (a = this), (o = [...arguments]), (d = "function" == typeof n ? n(o, a) : n || {});
                            } catch (t) {
                                u([t, "", [o, a, s], d], e);
                            }
                            i(r + "start", [o, a, s], d, c);
                            try {
                                return (l = t.apply(a, o));
                            } catch (e) {
                                throw (i(r + "err", [o, a, e], d, c), e);
                            } finally {
                                i(r + "end", [o, a, l], d, c);
                            }
                        }
                    }
                    function i(r, n, i, o) {
                        if (!s || t) {
                            var a = s;
                            s = !0;
                            try {
                                e.emit(r, n, i, t, o);
                            } catch (t) {
                                u([t, r, n, i], e);
                            }
                            s = a;
                        }
                    }
                }
                function u(e, t) {
                    t || (t = n.ee);
                    try {
                        t.emit("internal-error", e);
                    } catch (e) { }
                }
                function d(e) {
                    return !(e && "function" == typeof e && e.apply && !e[o]);
                }
            },
            9300: (e, t, r) => {
                "use strict";
                r.d(t, { T: () => n });
                const n = r(860).K.ajax;
            },
            3333: (e, t, r) => {
                "use strict";
                r.d(t, { T: () => n });
                const n = r(860).K.genericEvents;
            },
            6774: (e, t, r) => {
                "use strict";
                r.d(t, { T: () => n });
                const n = r(860).K.jserrors;
            },
            993: (e, t, r) => {
                "use strict";
                r.d(t, { ET: () => o, It: () => s, TZ: () => a, p_: () => i });
                var n = r(860);
                const i = { ERROR: "ERROR", WARN: "WARN", INFO: "INFO", DEBUG: "DEBUG", TRACE: "TRACE" },
                    o = "log",
                    a = n.K.logging,
                    s = 1e6;
            },
            3785: (e, t, r) => {
                "use strict";
                r.d(t, { R: () => c, b: () => u });
                var n = r(9908),
                    i = r(1863),
                    o = r(860),
                    a = r(3969),
                    s = r(993);
                function c(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.p_.INFO;
                    (0, n.p)(a.xV, ["API/logging/".concat(c.toLowerCase(), "/called")], void 0, o.K.metrics, e), (0, n.p)(s.ET, [(0, i.t)(), t, r, c], void 0, o.K.logging, e);
                }
                function u(e) {
                    return "string" == typeof e && Object.values(s.p_).some((t) => t === e);
                }
            },
            3969: (e, t, r) => {
                "use strict";
                r.d(t, { TZ: () => n, XG: () => s, rs: () => i, xV: () => a, z_: () => o });
                const n = r(860).K.metrics,
                    i = "sm",
                    o = "cm",
                    a = "storeSupportabilityMetrics",
                    s = "storeEventMetrics";
            },
            6630: (e, t, r) => {
                "use strict";
                r.d(t, { T: () => n });
                const n = r(860).K.pageViewEvent;
            },
            782: (e, t, r) => {
                "use strict";
                r.d(t, { T: () => n });
                const n = r(860).K.pageViewTiming;
            },
            6344: (e, t, r) => {
                "use strict";
                r.d(t, { BB: () => f, G4: () => o, It: () => c, No: () => u, Qb: () => h, TZ: () => i, Ug: () => a, _s: () => s, bc: () => l, yP: () => d });
                var n = r(2614);
                const i = r(860).K.sessionReplay,
                    o = { RECORD: "recordReplay", PAUSE: "pauseReplay", REPLAY_RUNNING: "replayRunning", ERROR_DURING_REPLAY: "errorDuringReplay" },
                    a = 0.12,
                    s = { DomContentLoaded: 0, Load: 1, FullSnapshot: 2, IncrementalSnapshot: 3, Meta: 4, Custom: 5 },
                    c = 1e6,
                    u = 64e3,
                    d = { [n.g.ERROR]: 15e3, [n.g.FULL]: 3e5, [n.g.OFF]: 0 },
                    l = {
                        RESET: { message: "Session was reset", sm: "Reset" },
                        IMPORT: { message: "Recorder failed to import", sm: "Import" },
                        TOO_MANY: { message: "429: Too Many Requests", sm: "Too-Many" },
                        TOO_BIG: { message: "Payload was too large", sm: "Too-Big" },
                        CROSS_TAB: { message: "Session Entity was set to OFF on another tab", sm: "Cross-Tab" },
                        ENTITLEMENTS: { message: "Session Replay is not allowed and will not be started", sm: "Entitlement" },
                    },
                    f = 5e3,
                    h = { API: "api" };
            },
            5270: (e, t, r) => {
                "use strict";
                r.d(t, { Aw: () => s, CT: () => c, SR: () => a });
                var n = r(2983),
                    i = r(7767),
                    o = r(6154);
                function a(e) {
                    return !!n.hR.MO && (0, i.V)(e) && !0 === (0, n.gD)(e, "session_trace.enabled");
                }
                function s(e) {
                    return !0 === (0, n.gD)(e, "session_replay.preload") && a(e);
                }
                function c(e, t) {
                    const r = t.correctAbsoluteTimestamp(e);
                    return { originalTimestamp: e, correctedTimestamp: r, timestampDiff: e - r, originTime: o.WN, correctedOriginTime: t.correctedOriginTime, originTimeDiff: Math.floor(o.WN - t.correctedOriginTime) };
                }
            },
            3738: (e, t, r) => {
                "use strict";
                r.d(t, { He: () => i, Kp: () => s, Lc: () => u, Rz: () => d, TZ: () => n, bD: () => o, d3: () => a, jx: () => l, uP: () => c });
                const n = r(860).K.sessionTrace,
                    i = "bstResource",
                    o = "resource",
                    a = "-start",
                    s = "-end",
                    c = "fn" + a,
                    u = "fn" + s,
                    d = "pushState",
                    l = 1e3;
            },
            3962: (e, t, r) => {
                "use strict";
                r.d(t, { AM: () => o, O2: () => s, Qu: () => c, TZ: () => a, ih: () => u, tC: () => i });
                var n = r(860);
                const i = ["click", "keydown", "submit"],
                    o = "api",
                    a = n.K.softNav,
                    s = { INITIAL_PAGE_LOAD: "", ROUTE_CHANGE: 1, UNSPECIFIED: 2 },
                    c = { INTERACTION: 1, AJAX: 2, CUSTOM_END: 3, CUSTOM_TRACER: 4 },
                    u = { IP: "in progress", FIN: "finished", CAN: "cancelled" };
            },
            7378: (e, t, r) => {
                "use strict";
                r.d(t, {
                    $p: () => x,
                    BR: () => b,
                    Kp: () => R,
                    L3: () => y,
                    Lc: () => c,
                    NC: () => o,
                    SG: () => d,
                    TZ: () => i,
                    U6: () => g,
                    UT: () => m,
                    d3: () => w,
                    dT: () => f,
                    e5: () => A,
                    gx: () => v,
                    l9: () => l,
                    oW: () => h,
                    op: () => p,
                    rw: () => u,
                    tH: () => E,
                    uP: () => s,
                    wW: () => T,
                    xq: () => a,
                });
                var n = r(2983);
                const i = r(860).K.spa,
                    o = ["click", "submit", "keypress", "keydown", "keyup", "change"],
                    a = 999,
                    s = "fn-start",
                    c = "fn-end",
                    u = "cb-start",
                    d = "api-ixn-",
                    l = "remaining",
                    f = "interaction",
                    h = "spaNode",
                    g = "jsonpNode",
                    p = "fetch-start",
                    m = "fetch-done",
                    v = "fetch-body-",
                    b = "jsonp-end",
                    y = n.hR.ST,
                    w = "-start",
                    R = "-end",
                    x = "-body",
                    T = "cb" + R,
                    A = "jsTime",
                    E = "fetch";
            },
            4234: (e, t, r) => {
                "use strict";
                r.d(t, { W: () => i });
                var n = r(7836);
                class i {
                    constructor(e, t, r) {
                        (this.agentIdentifier = e), (this.aggregator = t), (this.ee = n.ee.get(e)), (this.featureName = r), (this.blocked = !1);
                    }
                }
            },
            7767: (e, t, r) => {
                "use strict";
                r.d(t, { V: () => o });
                var n = r(2983),
                    i = r(6154);
                const o = (e) => i.RI && !0 === (0, n.gD)(e, "privacy.cookies_enabled");
            },
            425: (e, t, r) => {
                "use strict";
                r.d(t, { j: () => O });
                var n = r(860),
                    i = r(2983),
                    o = r(9908),
                    a = r(7836),
                    s = r(1687),
                    c = r(5289),
                    u = r(6154),
                    d = r(944),
                    l = r(3969),
                    f = r(384),
                    h = r(6344);
                const g = [
                    "setErrorHandler",
                    "finished",
                    "addToTrace",
                    "addRelease",
                    "addPageAction",
                    "setCurrentRouteName",
                    "setPageViewName",
                    "setCustomAttribute",
                    "interaction",
                    "noticeError",
                    "setUserId",
                    "setApplicationVersion",
                    "start",
                    h.G4.RECORD,
                    h.G4.PAUSE,
                    "log",
                    "wrapLogger",
                ],
                    p = ["setErrorHandler", "finished", "addToTrace", "addRelease"];
                var m = r(1863),
                    v = r(2614),
                    b = r(993),
                    y = r(3785),
                    w = r(2646),
                    R = r(3434);
                function x(e, t, r, n) {
                    if ("object" != typeof t || !t || "string" != typeof r || !r || "function" != typeof t[r]) return (0, d.R)(29);
                    const i = (function (e) {
                        return (e || a.ee).get("logger");
                    })(e),
                        o = (0, R.YM)(i),
                        s = new w.y(a.P);
                    return (s.level = n.level), (s.customAttributes = n.customAttributes), o.inPlace(t, [r], "wrap-logger-", s), i;
                }
                function T() {
                    const e = (0, f.pV)();
                    g.forEach((t) => {
                        e[t] = function () {
                            for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                            return (function (t) {
                                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                                let o = [];
                                return (
                                    Object.values(e.initializedAgents).forEach((e) => {
                                        e && e.api ? e.exposed && e.api[t] && o.push(e.api[t](...n)) : (0, d.R)(38, t);
                                    }),
                                    o.length > 1 ? o : o[0]
                                );
                            })(t, ...n);
                        };
                    });
                }
                const A = {};
                var E = r(5284);
                const N = (e) => {
                    const t = e.startsWith("http");
                    (e += "/"), (r.p = t ? e : "https://" + e);
                };
                let S = !1;
                function O(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        g = arguments.length > 2 ? arguments[2] : void 0,
                        w = arguments.length > 3 ? arguments[3] : void 0,
                        { init: R, info: O, loader_config: I, runtime: _ = {}, exposed: j = !0 } = t;
                    _.loaderType = g;
                    const P = (0, f.pV)();
                    O || ((R = P.init), (O = P.info), (I = P.loader_config)),
                        (0, i.xN)(e.agentIdentifier, R || {}),
                        (0, i.aN)(e.agentIdentifier, I || {}),
                        (O.jsAttributes ??= {}),
                        u.bv && (O.jsAttributes.isWorker = !0),
                        (0, i.x1)(e.agentIdentifier, O);
                    const C = (0, i.D0)(e.agentIdentifier),
                        k = [O.beacon, O.errorBeacon];
                    S ||
                        (C.proxy.assets && (N(C.proxy.assets), k.push(C.proxy.assets)),
                            C.proxy.beacon && k.push(C.proxy.beacon),
                            T(),
                            (0, f.US)("activatedFeatures", E.B),
                            (e.runSoftNavOverSpa &&= !0 === C.soft_navigations.enabled && C.feature_flags.includes("soft_nav"))),
                        (_.denyList = [...(C.ajax.deny_list || []), ...(C.ajax.block_internal ? k : [])]),
                        (_.ptid = e.agentIdentifier),
                        (0, i.V)(e.agentIdentifier, _),
                        (e.ee = a.ee.get(e.agentIdentifier)),
                        void 0 === e.api &&
                        (e.api = (function (e, t) {
                            let f = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            t || (0, s.Ak)(e, "api");
                            const g = {};
                            var w = a.ee.get(e),
                                R = w.get("tracer");
                            (A[e] = v.g.OFF),
                                w.on(h.G4.REPLAY_RUNNING, (t) => {
                                    A[e] = t;
                                });
                            var T = "api-",
                                E = T + "ixn-";
                            function N(t, r, n, o) {
                                const a = (0, i.Vp)(e);
                                return null === r ? delete a.jsAttributes[t] : (0, i.x1)(e, { ...a, jsAttributes: { ...a.jsAttributes, [t]: r } }), I(T, n, !0, o || null === r ? "session" : void 0)(t, r);
                            }
                            function S() { }
                            (g.log = function (e) {
                                let { customAttributes: t = {}, level: r = b.p_.INFO } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                (0, o.p)(l.xV, ["API/log/called"], void 0, n.K.metrics, w), (0, y.R)(w, e, t, r);
                            }),
                                (g.wrapLogger = function (e, t) {
                                    let { customAttributes: r = {}, level: i = b.p_.INFO } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    (0, o.p)(l.xV, ["API/wrapLogger/called"], void 0, n.K.metrics, w), x(w, e, t, { customAttributes: r, level: i });
                                }),
                                p.forEach((e) => {
                                    g[e] = I(T, e, !0, "api");
                                }),
                                (g.addPageAction = I(T, "addPageAction", !0, n.K.genericEvents)),
                                (g.setPageViewName = function (t, r) {
                                    if ("string" == typeof t) return "/" !== t.charAt(0) && (t = "/" + t), ((0, i.fr)(e).customTransaction = (r || "http://custom.transaction") + t), I(T, "setPageViewName", !0)();
                                }),
                                (g.setCustomAttribute = function (e, t) {
                                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                    if ("string" == typeof e) {
                                        if (["string", "number", "boolean"].includes(typeof t) || null === t) return N(e, t, "setCustomAttribute", r);
                                        (0, d.R)(40, typeof t);
                                    } else (0, d.R)(39, typeof e);
                                }),
                                (g.setUserId = function (e) {
                                    if ("string" == typeof e || null === e) return N("enduser.id", e, "setUserId", !0);
                                    (0, d.R)(41, typeof e);
                                }),
                                (g.setApplicationVersion = function (e) {
                                    if ("string" == typeof e || null === e) return N("application.version", e, "setApplicationVersion", !1);
                                    (0, d.R)(42, typeof e);
                                }),
                                (g.start = () => {
                                    try {
                                        (0, o.p)(l.xV, ["API/start/called"], void 0, n.K.metrics, w), w.emit("manual-start-all");
                                    } catch (e) {
                                        (0, d.R)(23, e);
                                    }
                                }),
                                (g[h.G4.RECORD] = function () {
                                    (0, o.p)(l.xV, ["API/recordReplay/called"], void 0, n.K.metrics, w), (0, o.p)(h.G4.RECORD, [], void 0, n.K.sessionReplay, w);
                                }),
                                (g[h.G4.PAUSE] = function () {
                                    (0, o.p)(l.xV, ["API/pauseReplay/called"], void 0, n.K.metrics, w), (0, o.p)(h.G4.PAUSE, [], void 0, n.K.sessionReplay, w);
                                }),
                                (g.interaction = function (e) {
                                    return new S().get("object" == typeof e ? e : {});
                                });
                            const O = (S.prototype = {
                                createTracer: function (e, t) {
                                    var r = {},
                                        i = this,
                                        a = "function" == typeof t;
                                    return (
                                        (0, o.p)(l.xV, ["API/createTracer/called"], void 0, n.K.metrics, w),
                                        f || (0, o.p)(E + "tracer", [(0, m.t)(), e, r], i, n.K.spa, w),
                                        function () {
                                            if ((R.emit((a ? "" : "no-") + "fn-start", [(0, m.t)(), i, a], r), a))
                                                try {
                                                    return t.apply(this, arguments);
                                                } catch (e) {
                                                    const t = "string" == typeof e ? new Error(e) : e;
                                                    throw (R.emit("fn-err", [arguments, this, t], r), t);
                                                } finally {
                                                    R.emit("fn-end", [(0, m.t)()], r);
                                                }
                                        }
                                    );
                                },
                            });
                            function I(e, t, r, i) {
                                return function () {
                                    return (0, o.p)(l.xV, ["API/" + t + "/called"], void 0, n.K.metrics, w), i && (0, o.p)(e + t, [(0, m.t)(), ...arguments], r ? null : this, i, w), r ? void 0 : this;
                                };
                            }
                            function _() {
                                r.e(478)
                                    .then(r.bind(r, 8778))
                                    .then((t) => {
                                        let { setAPI: r } = t;
                                        r(e), (0, s.Ze)(e, "api");
                                    })
                                    .catch((e) => {
                                        (0, d.R)(27, e), w.abort();
                                    });
                            }
                            return (
                                ["actionText", "setName", "setAttribute", "save", "ignore", "onEnd", "getContext", "end", "get"].forEach((e) => {
                                    O[e] = I(E, e, void 0, f ? n.K.softNav : n.K.spa);
                                }),
                                (g.setCurrentRouteName = f ? I(E, "routeName", void 0, n.K.softNav) : I(T, "routeName", !0, n.K.spa)),
                                (g.noticeError = function (t, r) {
                                    "string" == typeof t && (t = new Error(t)), (0, o.p)(l.xV, ["API/noticeError/called"], void 0, n.K.metrics, w), (0, o.p)("err", [t, (0, m.t)(), !1, r, !!A[e]], void 0, n.K.jserrors, w);
                                }),
                                u.RI ? (0, c.GG)(() => _(), !0) : _(),
                                g
                            );
                        })(e.agentIdentifier, w, e.runSoftNavOverSpa)),
                        void 0 === e.exposed && (e.exposed = j),
                        (S = !0);
                }
            },
            8374: (e, t, r) => {
                r.nc = (() => {
                    try {
                        return document?.currentScript?.nonce;
                    } catch (e) { }
                    return "";
                })();
            },
            860: (e, t, r) => {
                "use strict";
                r.d(t, { K: () => n, P: () => i });
                const n = {
                    ajax: "ajax",
                    genericEvents: "generic_events",
                    jserrors: "jserrors",
                    logging: "logging",
                    metrics: "metrics",
                    pageAction: "page_action",
                    pageViewEvent: "page_view_event",
                    pageViewTiming: "page_view_timing",
                    sessionReplay: "session_replay",
                    sessionTrace: "session_trace",
                    softNav: "soft_navigations",
                    spa: "spa",
                },
                    i = {
                        [n.pageViewEvent]: 1,
                        [n.pageViewTiming]: 2,
                        [n.metrics]: 3,
                        [n.jserrors]: 4,
                        [n.spa]: 5,
                        [n.ajax]: 6,
                        [n.sessionTrace]: 7,
                        [n.softNav]: 8,
                        [n.sessionReplay]: 9,
                        [n.logging]: 10,
                        [n.genericEvents]: 11,
                    };
            },
        },
        n = {};
    function i(e) {
        var t = n[e];
        if (void 0 !== t) return t.exports;
        var o = (n[e] = { exports: {} });
        return r[e](o, o.exports, i), o.exports;
    }
    (i.m = r),
        (i.d = (e, t) => {
            for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (i.f = {}),
        (i.e = (e) => Promise.all(Object.keys(i.f).reduce((t, r) => (i.f[r](e, t), t), []))),
        (i.u = (e) => ({ 212: "nr-spa-compressor", 249: "nr-spa-recorder", 478: "nr-spa" }[e] + "-1.264.0.min.js")),
        (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (e = {}),
        (t = "NRBA-1.264.0.PROD:"),
        (i.l = (r, n, o, a) => {
            if (e[r]) e[r].push(n);
            else {
                var s, c;
                if (void 0 !== o)
                    for (var u = document.getElementsByTagName("script"), d = 0; d < u.length; d++) {
                        var l = u[d];
                        if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == t + o) {
                            s = l;
                            break;
                        }
                    }
                if (!s) {
                    //c = !0;
                    //var f = {
                    //    478: "sha512-McVw1bGHjjUf5GGS4WenO1eJQ8s7UloN07RDcN8bH9X1iGHTAJZ38fRFPC9DW3pFKJ2uKysBuvqehJYvHcIthg==",
                    //    249: "sha512-QYiFK3L0u5EMr5V3YITSZcfvK9upxp9dvxRVLY9qis5pUIvOkKb5SKvPYPNw7sEKXP8TzyY2DLpLmqHxWCZ2cg==",
                    //    212: "sha512-pdn6WS9R03kXhRA2vQoZgApGomYEaTBtHJfyGcBu9pt7MUR6schZTqs6BcrSDNoPhpJO6N5kUTMqB2WknZMDIA==",
                    //};
                    //((s = document.createElement("script")).charset = "utf-8"),
                    //    (s.timeout = 120),
                    //    i.nc && s.setAttribute("nonce", i.nc),
                    //    s.setAttribute("data-webpack", t + o),
                    //    (s.src = r),
                    //    0 !== s.src.indexOf(window.location.origin + "/") && (s.crossOrigin = "anonymous"),
                    //    f[a] && (s.integrity = f[a]);
                }
                e[r] = [n];
                //var h = (t, n) => {
                //    (s.onerror = s.onload = null), clearTimeout(g);
                //    var i = e[r];
                //    if ((delete e[r], s.parentNode && s.parentNode.removeChild(s), i && i.forEach((e) => e(n)), t)) return t(n);
                //},
                //    g = setTimeout(h.bind(null, void 0, { type: "timeout", target: s }), 12e4);
                //(s.onerror = h.bind(null, s.onerror)), (s.onload = h.bind(null, s.onload)), c && document.head.appendChild(s);
            }
        }),
        (i.r = (e) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (i.p = "https://js-agent.newrelic.com/"),
        (() => {
            var e = { 38: 0, 788: 0 };
            i.f.j = (t, r) => {
                var n = i.o(e, t) ? e[t] : void 0;
                if (0 !== n)
                    if (n) r.push(n[2]);
                    else {
                        var o = new Promise((r, i) => (n = e[t] = [r, i]));
                        r.push((n[2] = o));
                        var a = i.p + i.u(t),
                            s = new Error();
                        i.l(
                            a,
                            (r) => {
                                if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                                    var o = r && ("load" === r.type ? "missing" : r.type),
                                        a = r && r.target && r.target.src;
                                    (s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")"), (s.name = "ChunkLoadError"), (s.type = o), (s.request = a), n[1](s);
                                }
                            },
                            "chunk-" + t,
                            t
                        );
                    }
            };
            var t = (t, r) => {
                var n,
                    o,
                    [a, s, c] = r,
                    u = 0;
                if (a.some((t) => 0 !== e[t])) {
                    for (n in s) i.o(s, n) && (i.m[n] = s[n]);
                    if (c) c(i);
                }
                for (t && t(r); u < a.length; u++) (o = a[u]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
            },
                r = (self["webpackChunk:NRBA-1.264.0.PROD"] = self["webpackChunk:NRBA-1.264.0.PROD"] || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })(),
        (() => {
            "use strict";
            i(8374);
            var e = i(944),
                t = i(6344),
                r = i(9566);
            class n {
                agentIdentifier;
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, r.LA)(16);
                    this.agentIdentifier = e;
                }
                #e(t) {
                    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                    if ("function" == typeof this.api?.[t]) return this.api[t](...n);
                    (0, e.R)(35, t);
                }
                addPageAction(e, t) {
                    return this.#e("addPageAction", e, t);
                }
                setPageViewName(e, t) {
                    return this.#e("setPageViewName", e, t);
                }
                setCustomAttribute(e, t, r) {
                    return this.#e("setCustomAttribute", e, t, r);
                }
                noticeError(e, t) {
                    return this.#e("noticeError", e, t);
                }
                setUserId(e) {
                    return this.#e("setUserId", e);
                }
                setApplicationVersion(e) {
                    return this.#e("setApplicationVersion", e);
                }
                setErrorHandler(e) {
                    return this.#e("setErrorHandler", e);
                }
                finished(e) {
                    return this.#e("finished", e);
                }
                addRelease(e, t) {
                    return this.#e("addRelease", e, t);
                }
                start(e) {
                    return this.#e("start", e);
                }
                recordReplay() {
                    return this.#e(t.G4.RECORD);
                }
                pauseReplay() {
                    return this.#e(t.G4.PAUSE);
                }
                addToTrace(e) {
                    return this.#e("addToTrace", e);
                }
                setCurrentRouteName(e) {
                    return this.#e("setCurrentRouteName", e);
                }
                interaction() {
                    return this.#e("interaction");
                }
                log(e, t) {
                    return this.#e("logInfo", e, t);
                }
                wrapLogger(e, t, r) {
                    return this.#e("wrapLogger", e, t, r);
                }
            }
            var o = i(860),
                a = i(2983);
            const s = Object.values(o.K);
            function c(e) {
                const t = {};
                return (
                    s.forEach((r) => {
                        t[r] = (function (e, t) {
                            return !0 === (0, a.gD)(t, "".concat(e, ".enabled"));
                        })(r, e);
                    }),
                    t
                );
            }
            var u = i(425);
            var d = i(1687),
                l = i(4234),
                f = i(5289),
                h = i(6154),
                g = i(5270),
                p = i(7767),
                m = i(6389);
            class v extends l.W {
                constructor(e, t, r) {
                    let n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    super(e, t, r),
                        (this.auto = n),
                        (this.abortHandler = void 0),
                        (this.featAggregate = void 0),
                        (this.onAggregateImported = void 0),
                        !1 === (0, a.gD)(this.agentIdentifier, "".concat(this.featureName, ".autoStart")) && (this.auto = !1),
                        this.auto
                            ? (0, d.Ak)(e, r)
                            : this.ee.on(
                                "manual-start-all",
                                (0, m.J)(() => {
                                    (0, d.Ak)(this.agentIdentifier, this.featureName), (this.auto = !0), this.importAggregator();
                                })
                            );
                }
                importAggregator() {
                    let t,
                        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (this.featAggregate || !this.auto) return;
                    this.onAggregateImported = new Promise((e) => {
                        t = e;
                    });
                    const n = async () => {
                        let n;
                        try {
                            if ((0, p.V)(this.agentIdentifier)) {
                                const { setupAgentSession: e } = await i.e(478).then(i.bind(i, 6526));
                                n = e(this.agentIdentifier);
                            }
                        } catch (t) {
                            (0, e.R)(20, t), this.ee.emit("internal-error", [t]), this.featureName === o.K.sessionReplay && this.abortHandler?.();
                        }
                        try {
                            if (!this.#t(this.featureName, n)) return (0, d.Ze)(this.agentIdentifier, this.featureName), void t(!1);
                            const { lazyFeatureLoader: e } = await i.e(478).then(i.bind(i, 6103)),
                                { Aggregate: o } = await e(this.featureName, "aggregate");
                            (this.featAggregate = new o(this.agentIdentifier, this.aggregator, r)), t(!0);
                        } catch (r) {
                            (0, e.R)(34, r), this.abortHandler?.(), (0, d.Ze)(this.agentIdentifier, this.featureName, !0), t(!1), this.ee && this.ee.abort();
                        }
                    };
                    h.RI ? (0, f.GG)(() => n(), !0) : n();
                }
                #t(e, t) {
                    switch (e) {
                        case o.K.sessionReplay:
                            return (0, g.SR)(this.agentIdentifier) && !!t;
                        case o.K.sessionTrace:
                            return !!t;
                        default:
                            return !0;
                    }
                }
            }
            var b = i(6630);
            class y extends v {
                static featureName = (() => b.T)();
                constructor(e, t) {
                    let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    super(e, t, b.T, r), this.importAggregator();
                }
            }
            var w = i(4777);
            class R extends w.J {
                constructor(e) {
                    super(e), (this.aggregatedData = {});
                }
                store(e, t, r, n, i) {
                    var o = this.getBucket(e, t, r, i);
                    return (
                        (o.metrics = (function (e, t) {
                            t || (t = { count: 0 });
                            return (
                                (t.count += 1),
                                Object.entries(e || {}).forEach((e) => {
                                    let [r, n] = e;
                                    t[r] = x(n, t[r]);
                                }),
                                t
                            );
                        })(n, o.metrics)),
                        o
                    );
                }
                merge(e, t, r, n, i) {
                    var o = this.getBucket(e, t, n, i);
                    if (o.metrics) {
                        var a = o.metrics;
                        (a.count += r.count),
                            Object.keys(r || {}).forEach((e) => {
                                if ("count" !== e) {
                                    var t = a[e],
                                        n = r[e];
                                    n && !n.c
                                        ? (a[e] = x(n.t, t))
                                        : (a[e] = (function (e, t) {
                                            if (!t) return e;
                                            t.c || (t = T(t.t));
                                            return (t.min = Math.min(e.min, t.min)), (t.max = Math.max(e.max, t.max)), (t.t += e.t), (t.sos += e.sos), (t.c += e.c), t;
                                        })(n, a[e]));
                                }
                            });
                    } else o.metrics = r;
                }
                storeMetric(e, t, r, n) {
                    var i = this.getBucket(e, t, r);
                    return (i.stats = x(n, i.stats)), i;
                }
                getBucket(e, t, r, n) {
                    this.aggregatedData[e] || (this.aggregatedData[e] = {});
                    var i = this.aggregatedData[e][t];
                    return i || ((i = this.aggregatedData[e][t] = { params: r || {} }), n && (i.custom = n)), i;
                }
                get(e, t) {
                    return t ? this.aggregatedData[e] && this.aggregatedData[e][t] : this.aggregatedData[e];
                }
                take(e) {
                    for (var t = {}, r = "", n = !1, i = 0; i < e.length; i++) (t[(r = e[i])] = Object.values(this.aggregatedData[r] || {})), t[r].length && (n = !0), delete this.aggregatedData[r];
                    return n ? t : null;
                }
            }
            function x(e, t) {
                return null == e
                    ? (function (e) {
                        e ? e.c++ : (e = { c: 1 });
                        return e;
                    })(t)
                    : t
                        ? (t.c || (t = T(t.t)), (t.c += 1), (t.t += e), (t.sos += e * e), e > t.max && (t.max = e), e < t.min && (t.min = e), t)
                        : { t: e };
            }
            function T(e) {
                return { t: e, min: e, max: e, sos: e * e, c: 1 };
            }
            var A = i(384);
            var E = i(9908),
                N = i(2843),
                S = i(3878),
                O = i(782),
                I = i(1863);
            class _ extends v {
                static featureName = (() => O.T)();
                constructor(e, t) {
                    let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    super(e, t, O.T, r),
                        h.RI && ((0, N.u)(() => (0, E.p)("docHidden", [(0, I.t)()], void 0, O.T, this.ee), !0), (0, S.sp)("pagehide", () => (0, E.p)("winPagehide", [(0, I.t)()], void 0, O.T, this.ee)), this.importAggregator());
                }
            }
            var j = i(3969);
            class P extends v {
                static featureName = (() => j.TZ)();
                constructor(e, t) {
                    let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    super(e, t, j.TZ, r), this.importAggregator();
                }
            }
            var C = i(6774),
                k = i(3304);
            class L {
                constructor(e, t, r, n, i) {
                    (this.name = "UncaughtError"), (this.message = "string" == typeof e ? e : (0, k.A)(e)), (this.sourceURL = t), (this.line = r), (this.column = n), (this.__newrelic = i);
                }
            }
            function D(e) {
                return K(e) ? e : new L(void 0 !== e?.message ? e.message : e, e?.filename || e?.sourceURL, e?.lineno || e?.line, e?.colno || e?.col, e?.__newrelic);
            }
            function H(e) {
                let t = "Unhandled Promise Rejection";
                if (K(e?.reason))
                    try {
                        return (e.reason.message = t + ": " + e.reason.message), D(e.reason);
                    } catch (t) {
                        return D(e.reason);
                    }
                if (void 0 === e.reason) return D(t);
                const r = D(e.reason);
                return (r.message = t + ": " + r?.message), r;
            }
            function M(e) {
                if (e.error instanceof SyntaxError && !/:\d+$/.test(e.error.stack?.trim())) {
                    const t = new L(e.message, e.filename, e.lineno, e.colno, e.error.__newrelic);
                    return (t.name = SyntaxError.name), t;
                }
                return K(e.error) ? e.error : D(e);
            }
            function K(e) {
                return e instanceof Error && !!e.stack;
            }
            class U extends v {
                static featureName = (() => C.T)();
                #r = !1;
                constructor(e, r) {
                    let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    super(e, r, C.T, n);
                    try {
                        this.removeOnAbort = new AbortController();
                    } catch (e) { }
                    this.ee.on("internal-error", (e) => {
                        this.abortHandler && (0, E.p)("ierr", [D(e), (0, I.t)(), !0, {}, this.#r], void 0, this.featureName, this.ee);
                    }),
                        this.ee.on(t.G4.REPLAY_RUNNING, (e) => {
                            this.#r = e;
                        }),
                        h.gm.addEventListener(
                            "unhandledrejection",
                            (e) => {
                                this.abortHandler && (0, E.p)("err", [H(e), (0, I.t)(), !1, { unhandledPromiseRejection: 1 }, this.#r], void 0, this.featureName, this.ee);
                            },
                            (0, S.jT)(!1, this.removeOnAbort?.signal)
                        ),
                        h.gm.addEventListener(
                            "error",
                            (e) => {
                                this.abortHandler && (0, E.p)("err", [M(e), (0, I.t)(), !1, {}, this.#r], void 0, this.featureName, this.ee);
                            },
                            (0, S.jT)(!1, this.removeOnAbort?.signal)
                        ),
                        (this.abortHandler = this.#n),
                        this.importAggregator();
                }
                #n() {
                    this.removeOnAbort?.abort(), (this.abortHandler = void 0);
                }
            }
            var G = i(8990);
            let B = 1;
            const V = "nr@id";
            function F(e) {
                const t = typeof e;
                return !e || ("object" !== t && "function" !== t)
                    ? -1
                    : e === h.gm
                        ? 0
                        : (0, G.I)(e, V, function () {
                            return B++;
                        });
            }
            function W(e) {
                if ("string" == typeof e && e.length) return e.length;
                if ("object" == typeof e) {
                    if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer && e.byteLength) return e.byteLength;
                    if ("undefined" != typeof Blob && e instanceof Blob && e.size) return e.size;
                    if (!("undefined" != typeof FormData && e instanceof FormData))
                        try {
                            return (0, k.A)(e).length;
                        } catch (e) {
                            return;
                        }
                }
            }
            var z = i(8941),
                Z = i(7485);
            class q {
                constructor(e) {
                    this.agentIdentifier = e;
                }
                generateTracePayload(e) {
                    if (!this.shouldGenerateTrace(e)) return null;
                    var t = (0, a.oC)(this.agentIdentifier);
                    if (!t) return null;
                    var n = (t.accountID || "").toString() || null,
                        i = (t.agentID || "").toString() || null,
                        o = (t.trustKey || "").toString() || null;
                    if (!n || !i) return null;
                    var s = (0, r.ZF)(),
                        c = (0, r.el)(),
                        u = Date.now(),
                        d = { spanId: s, traceId: c, timestamp: u };
                    return (
                        (e.sameOrigin || (this.isAllowedOrigin(e) && this.useTraceContextHeadersForCors())) &&
                        ((d.traceContextParentHeader = this.generateTraceContextParentHeader(s, c)), (d.traceContextStateHeader = this.generateTraceContextStateHeader(s, u, n, i, o))),
                        ((e.sameOrigin && !this.excludeNewrelicHeader()) || (!e.sameOrigin && this.isAllowedOrigin(e) && this.useNewrelicHeaderForCors())) && (d.newrelicHeader = this.generateTraceHeader(s, c, u, n, i, o)),
                        d
                    );
                }
                generateTraceContextParentHeader(e, t) {
                    return "00-" + t + "-" + e + "-01";
                }
                generateTraceContextStateHeader(e, t, r, n, i) {
                    return i + "@@nr=0-1-" + r + "-" + n + "-" + e + "----" + t;
                }
                generateTraceHeader(e, t, r, n, i, o) {
                    if (!("function" == typeof h.gm?.btoa)) return null;
                    var a = { v: [0, 1], d: { ty: "Browser", ac: n, ap: i, id: e, tr: t, ti: r } };
                    return o && n !== o && (a.d.tk = o), btoa((0, k.A)(a));
                }
                shouldGenerateTrace(e) {
                    return this.isDtEnabled() && this.isAllowedOrigin(e);
                }
                isAllowedOrigin(e) {
                    var t = !1,
                        r = {};
                    if (((0, a.gD)(this.agentIdentifier, "distributed_tracing") && (r = (0, a.D0)(this.agentIdentifier).distributed_tracing), e.sameOrigin)) t = !0;
                    else if (r.allowed_origins instanceof Array)
                        for (var n = 0; n < r.allowed_origins.length; n++) {
                            var i = (0, Z.D)(r.allowed_origins[n]);
                            if (e.hostname === i.hostname && e.protocol === i.protocol && e.port === i.port) {
                                t = !0;
                                break;
                            }
                        }
                    return t;
                }
                isDtEnabled() {
                    var e = (0, a.gD)(this.agentIdentifier, "distributed_tracing");
                    return !!e && !!e.enabled;
                }
                excludeNewrelicHeader() {
                    var e = (0, a.gD)(this.agentIdentifier, "distributed_tracing");
                    return !!e && !!e.exclude_newrelic_header;
                }
                useNewrelicHeaderForCors() {
                    var e = (0, a.gD)(this.agentIdentifier, "distributed_tracing");
                    return !!e && !1 !== e.cors_use_newrelic_header;
                }
                useTraceContextHeadersForCors() {
                    var e = (0, a.gD)(this.agentIdentifier, "distributed_tracing");
                    return !!e && !!e.cors_use_tracecontext_headers;
                }
            }
            var Y = i(9300),
                X = i(7295),
                J = ["load", "error", "abort", "timeout"],
                Q = J.length,
                ee = a.hR.REQ,
                te = a.hR.XHR;
            class re extends v {
                static featureName = (() => Y.T)();
                constructor(e, t) {
                    let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    super(e, t, Y.T, r), (this.dt = new q(e)), (this.handler = (e, t, r, n) => (0, E.p)(e, t, r, n, this.ee));
                    try {
                        const e = { xmlhttprequest: "xhr", fetch: "fetch", beacon: "beacon" };
                        h.gm?.performance?.getEntriesByType("resource").forEach((t) => {
                            if (t.initiatorType in e && 0 !== t.responseStatus) {
                                const r = { status: t.responseStatus },
                                    n = { rxSize: t.transferSize, duration: Math.floor(t.duration), cbTime: 0 };
                                ne(r, t.name), this.handler("xhr", [r, n, t.startTime, t.responseEnd, e[t.initiatorType]], void 0, o.K.ajax);
                            }
                        });
                    } catch (e) { }
                    (0, z.NZ)(this.ee),
                        (0, z.bX)(this.ee),
                        (function (e, t, r, n) {
                            function i(e) {
                                var t = this;
                                (t.totalCbs = 0),
                                    (t.called = 0),
                                    (t.cbTime = 0),
                                    (t.end = x),
                                    (t.ended = !1),
                                    (t.xhrGuids = {}),
                                    (t.lastSize = null),
                                    (t.loadCaptureCalled = !1),
                                    (t.params = this.params || {}),
                                    (t.metrics = this.metrics || {}),
                                    e.addEventListener(
                                        "load",
                                        function (r) {
                                            T(t, e);
                                        },
                                        (0, S.jT)(!1)
                                    ),
                                    h.lR ||
                                    e.addEventListener(
                                        "progress",
                                        function (e) {
                                            t.lastSize = e.loaded;
                                        },
                                        (0, S.jT)(!1)
                                    );
                            }
                            function s(e) {
                                (this.params = { method: e[0] }), ne(this, e[1]), (this.metrics = {});
                            }
                            function c(t, r) {
                                var i = (0, a.oC)(e);
                                i.xpid && this.sameOrigin && r.setRequestHeader("X-NewRelic-ID", i.xpid);
                                var o = n.generateTracePayload(this.parsedOrigin);
                                if (o) {
                                    var s = !1;
                                    o.newrelicHeader && (r.setRequestHeader("newrelic", o.newrelicHeader), (s = !0)),
                                        o.traceContextParentHeader &&
                                        (r.setRequestHeader("traceparent", o.traceContextParentHeader), o.traceContextStateHeader && r.setRequestHeader("tracestate", o.traceContextStateHeader), (s = !0)),
                                        s && (this.dt = o);
                                }
                            }
                            function u(e, r) {
                                var n = this.metrics,
                                    i = e[0],
                                    o = this;
                                if (n && i) {
                                    var a = W(i);
                                    a && (n.txSize = a);
                                }
                                (this.startTime = (0, I.t)()),
                                    (this.body = i),
                                    (this.listener = function (e) {
                                        try {
                                            "abort" !== e.type || o.loadCaptureCalled || (o.params.aborted = !0),
                                                ("load" !== e.type || (o.called === o.totalCbs && (o.onloadCalled || "function" != typeof r.onload) && "function" == typeof o.end)) && o.end(r);
                                        } catch (e) {
                                            try {
                                                t.emit("internal-error", [e]);
                                            } catch (e) { }
                                        }
                                    });
                                for (var s = 0; s < Q; s++) r.addEventListener(J[s], this.listener, (0, S.jT)(!1));
                            }
                            function d(e, t, r) {
                                (this.cbTime += e),
                                    t ? (this.onloadCalled = !0) : (this.called += 1),
                                    this.called !== this.totalCbs || (!this.onloadCalled && "function" == typeof r.onload) || "function" != typeof this.end || this.end(r);
                            }
                            function l(e, t) {
                                var r = "" + F(e) + !!t;
                                this.xhrGuids && !this.xhrGuids[r] && ((this.xhrGuids[r] = !0), (this.totalCbs += 1));
                            }
                            function f(e, t) {
                                var r = "" + F(e) + !!t;
                                this.xhrGuids && this.xhrGuids[r] && (delete this.xhrGuids[r], (this.totalCbs -= 1));
                            }
                            function g() {
                                this.endTime = (0, I.t)();
                            }
                            function p(e, r) {
                                r instanceof te && "load" === e[0] && t.emit("xhr-load-added", [e[1], e[2]], r);
                            }
                            function m(e, r) {
                                r instanceof te && "load" === e[0] && t.emit("xhr-load-removed", [e[1], e[2]], r);
                            }
                            function v(e, t, r) {
                                t instanceof te && ("onload" === r && (this.onload = !0), ("load" === (e[0] && e[0].type) || this.onload) && (this.xhrCbStart = (0, I.t)()));
                            }
                            function b(e, r) {
                                this.xhrCbStart && t.emit("xhr-cb-time", [(0, I.t)() - this.xhrCbStart, this.onload, r], r);
                            }
                            function y(e) {
                                var t,
                                    r = e[1] || {};
                                if (
                                    ("string" == typeof e[0]
                                        ? 0 === (t = e[0]).length && h.RI && (t = "" + h.gm.location.href)
                                        : e[0] && e[0].url
                                            ? (t = e[0].url)
                                            : h.gm?.URL && e[0] && e[0] instanceof URL
                                                ? (t = e[0].href)
                                                : "function" == typeof e[0].toString && (t = e[0].toString()),
                                        "string" == typeof t && 0 !== t.length)
                                ) {
                                    t && ((this.parsedOrigin = (0, Z.D)(t)), (this.sameOrigin = this.parsedOrigin.sameOrigin));
                                    var i = n.generateTracePayload(this.parsedOrigin);
                                    if (i && (i.newrelicHeader || i.traceContextParentHeader))
                                        if (e[0] && e[0].headers) s(e[0].headers, i) && (this.dt = i);
                                        else {
                                            var o = {};
                                            for (var a in r) o[a] = r[a];
                                            (o.headers = new Headers(r.headers || {})), s(o.headers, i) && (this.dt = i), e.length > 1 ? (e[1] = o) : e.push(o);
                                        }
                                }
                                function s(e, t) {
                                    var r = !1;
                                    return (
                                        t.newrelicHeader && (e.set("newrelic", t.newrelicHeader), (r = !0)),
                                        t.traceContextParentHeader && (e.set("traceparent", t.traceContextParentHeader), t.traceContextStateHeader && e.set("tracestate", t.traceContextStateHeader), (r = !0)),
                                        r
                                    );
                                }
                            }
                            function w(e, t) {
                                (this.params = {}), (this.metrics = {}), (this.startTime = (0, I.t)()), (this.dt = t), e.length >= 1 && (this.target = e[0]), e.length >= 2 && (this.opts = e[1]);
                                var r,
                                    n = this.opts || {},
                                    i = this.target;
                                "string" == typeof i ? (r = i) : "object" == typeof i && i instanceof ee ? (r = i.url) : h.gm?.URL && "object" == typeof i && i instanceof URL && (r = i.href), ne(this, r);
                                var o = ("" + ((i && i instanceof ee && i.method) || n.method || "GET")).toUpperCase();
                                (this.params.method = o), (this.body = n.body), (this.txSize = W(n.body) || 0);
                            }
                            function R(e, t) {
                                if (((this.endTime = (0, I.t)()), this.params || (this.params = {}), (0, X.iW)(this.params))) return;
                                let n;
                                (this.params.status = t ? t.status : 0), "string" == typeof this.rxSize && this.rxSize.length > 0 && (n = +this.rxSize);
                                const i = { txSize: this.txSize, rxSize: n, duration: (0, I.t)() - this.startTime };
                                r("xhr", [this.params, i, this.startTime, this.endTime, "fetch"], this, o.K.ajax);
                            }
                            function x(e) {
                                const t = this.params,
                                    n = this.metrics;
                                if (!this.ended) {
                                    this.ended = !0;
                                    for (let t = 0; t < Q; t++) e.removeEventListener(J[t], this.listener, !1);
                                    t.aborted ||
                                        (0, X.iW)(t) ||
                                        ((n.duration = (0, I.t)() - this.startTime),
                                            this.loadCaptureCalled || 4 !== e.readyState ? null == t.status && (t.status = 0) : T(this, e),
                                            (n.cbTime = this.cbTime),
                                            r("xhr", [t, n, this.startTime, this.endTime, "xhr"], this, o.K.ajax));
                                }
                            }
                            function T(e, r) {
                                e.params.status = r.status;
                                var n = (function (e, t) {
                                    var r = e.responseType;
                                    return "json" === r && null !== t ? t : "arraybuffer" === r || "blob" === r || "json" === r ? W(e.response) : "text" === r || "" === r || void 0 === r ? W(e.responseText) : void 0;
                                })(r, e.lastSize);
                                if ((n && (e.metrics.rxSize = n), e.sameOrigin)) {
                                    var i = r.getResponseHeader("X-NewRelic-App-Data");
                                    i && ((0, E.p)(j.rs, ["Ajax/CrossApplicationTracing/Header/Seen"], void 0, o.K.metrics, t), (e.params.cat = i.split(", ").pop()));
                                }
                                e.loadCaptureCalled = !0;
                            }
                            t.on("new-xhr", i),
                                t.on("open-xhr-start", s),
                                t.on("open-xhr-end", c),
                                t.on("send-xhr-start", u),
                                t.on("xhr-cb-time", d),
                                t.on("xhr-load-added", l),
                                t.on("xhr-load-removed", f),
                                t.on("xhr-resolved", g),
                                t.on("addEventListener-end", p),
                                t.on("removeEventListener-end", m),
                                t.on("fn-end", b),
                                t.on("fetch-before-start", y),
                                t.on("fetch-start", w),
                                t.on("fn-start", v),
                                t.on("fetch-done", R);
                        })(e, this.ee, this.handler, this.dt),
                        this.importAggregator();
                }
            }
            function ne(e, t) {
                var r = (0, Z.D)(t),
                    n = e.params || e;
                (n.hostname = r.hostname), (n.port = r.port), (n.protocol = r.protocol), (n.host = r.hostname + ":" + r.port), (n.pathname = r.pathname), (e.parsedOrigin = r), (e.sameOrigin = r.sameOrigin);
            }
            var ie = i(3738);
            const { He: oe, bD: ae, d3: se, Kp: ce, TZ: ue, Lc: de, uP: le, Rz: fe } = ie;
            class he extends v {
                static featureName = (() => ue)();
                constructor(e, t) {
                    super(e, t, ue, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]);
                    if (!(0, p.V)(this.agentIdentifier)) return void (0, d.x3)(this.agentIdentifier, this.featureName);
                    const r = this.ee;
                    let n;
                    (0, z.vC)(r),
                        (this.eventsEE = (0, z.um)(r)),
                        this.eventsEE.on(le, function (e, t) {
                            this.bstStart = (0, I.t)();
                        }),
                        this.eventsEE.on(de, function (e, t) {
                            (0, E.p)("bst", [e[0], t, this.bstStart, (0, I.t)()], void 0, o.K.sessionTrace, r);
                        }),
                        r.on(fe + se, function (e) {
                            (this.time = (0, I.t)()), (this.startPath = location.pathname + location.hash);
                        }),
                        r.on(fe + ce, function (e) {
                            (0, E.p)("bstHist", [location.pathname + location.hash, this.startPath, this.time], void 0, o.K.sessionTrace, r);
                        });
                    try {
                        (n = new PerformanceObserver((e) => {
                            const t = e.getEntries();
                            (0, E.p)(oe, [t], void 0, o.K.sessionTrace, r);
                        })),
                            n.observe({ type: ae, buffered: !0 });
                    } catch (e) { }
                    this.importAggregator({ resourceObserver: n });
                }
            }
            var ge = i(2614);
            class pe extends v {
                static featureName = (() => t.TZ)();
                #i;
                constructor(e, r) {
                    let n,
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    super(e, r, t.TZ, i), (this.replayRunning = !1);
                    try {
                        n = JSON.parse(localStorage.getItem("".concat(ge.H3, "_").concat(ge.uh)));
                    } catch (e) { }
                    (0, g.SR)(e) && this.ee.on(t.G4.RECORD, () => this.#o()),
                        this.#a(n) ? ((this.#i = n?.sessionReplayMode), this.#s()) : this.importAggregator(),
                        this.ee.on("err", (e) => {
                            this.replayRunning && ((this.errorNoticed = !0), (0, E.p)(t.G4.ERROR_DURING_REPLAY, [e], void 0, this.featureName, this.ee));
                        }),
                        this.ee.on(t.G4.REPLAY_RUNNING, (e) => {
                            this.replayRunning = e;
                        });
                }
                #a(e) {
                    return (e && (e.sessionReplayMode === ge.g.FULL || e.sessionReplayMode === ge.g.ERROR)) || (0, g.Aw)(this.agentIdentifier);
                }
                #c = !1;
                async #s(e) {
                    if (!this.#c) {
                        this.#c = !0;
                        try {
                            const { Recorder: t } = await Promise.all([i.e(478), i.e(249)]).then(i.bind(i, 2496));
                            (this.recorder ??= new t({ mode: this.#i, agentIdentifier: this.agentIdentifier, trigger: e, ee: this.ee })), this.recorder.startRecording(), (this.abortHandler = this.recorder.stopRecording);
                        } catch (e) { }
                        this.importAggregator({ recorder: this.recorder, errorNoticed: this.errorNoticed });
                    }
                }
                #o() {
                    this.featAggregate
                        ? this.featAggregate.mode !== ge.g.FULL && this.featAggregate.initializeRecording(ge.g.FULL, !0)
                        : ((this.#i = ge.g.FULL),
                            this.#s(t.Qb.API),
                            this.recorder &&
                            this.recorder.parent.mode !== ge.g.FULL &&
                            ((this.recorder.parent.mode = ge.g.FULL), this.recorder.stopRecording(), this.recorder.startRecording(), (this.abortHandler = this.recorder.stopRecording)));
                }
            }
            var me = i(3962);
            class ve extends v {
                static featureName = (() => me.TZ)();
                constructor(e, t) {
                    let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if ((super(e, t, me.TZ, r), !h.RI || !a.hR.MO)) return;
                    const n = (0, z.vC)(this.ee),
                        i = (0, z.um)(this.ee),
                        o = () => (0, E.p)("newURL", [(0, I.t)(), "" + window.location], void 0, this.featureName, this.ee);
                    n.on("pushState-end", o), n.on("replaceState-end", o);
                    try {
                        this.removeOnAbort = new AbortController();
                    } catch (e) { }
                    (0, S.sp)("popstate", (e) => (0, E.p)("newURL", [e.timeStamp, "" + window.location], void 0, this.featureName, this.ee), !0, this.removeOnAbort?.signal);
                    let s = !1;
                    const c = new a.hR.MO((e, t) => {
                        s ||
                            ((s = !0),
                                requestAnimationFrame(() => {
                                    (0, E.p)("newDom", [(0, I.t)()], void 0, this.featureName, this.ee), (s = !1);
                                }));
                    }),
                        u = (0, m.s)(
                            (e) => {
                                (0, E.p)("newUIEvent", [e], void 0, this.featureName, this.ee), c.observe(document.body, { attributes: !0, childList: !0, subtree: !0, characterData: !0 });
                            },
                            100,
                            { leading: !0 }
                        );
                    i.on("fn-start", (e) => {
                        let [t] = e;
                        me.tC.includes(t?.type) && u(t);
                    });
                    for (let e of me.tC) document.addEventListener(e, () => { });
                    (this.abortHandler = function () {
                        this.removeOnAbort?.abort(), c.disconnect(), (this.abortHandler = void 0);
                    }),
                        this.importAggregator({ domObserver: c });
                }
            }
            var be = i(7378);
            const { TZ: ye, d3: we, Kp: Re, $p: xe, wW: Te, e5: Ae, tH: Ee, uP: Ne, rw: Se, Lc: Oe } = be;
            class Ie extends v {
                static featureName = (() => ye)();
                constructor(e, t) {
                    var r;
                    if ((super(e, t, ye, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]), (r = this), !h.RI)) return;
                    try {
                        this.removeOnAbort = new AbortController();
                    } catch (e) { }
                    let n,
                        i = 0;
                    const o = this.ee.get("tracer"),
                        a = (0, z.Ri)(this.ee),
                        s = (0, z.o8)(this.ee),
                        c = (0, z.MO)(this.ee),
                        u = (0, z.bX)(this.ee),
                        d = this.ee.get("events"),
                        l = (0, z.NZ)(this.ee),
                        f = (0, z.vC)(this.ee),
                        g = (0, z.Ak)(this.ee);
                    function p(e, t) {
                        f.emit("newURL", ["" + window.location, t]);
                    }
                    function m() {
                        i++, (n = window.location.hash), (this[Ne] = (0, I.t)());
                    }
                    function v() {
                        i--, window.location.hash !== n && p(0, !0);
                        var e = (0, I.t)();
                        (this[Ae] = ~~this[Ae] + e - this[Ne]), (this[Oe] = e);
                    }
                    function b(e, t) {
                        e.on(t, function () {
                            this[t] = (0, I.t)();
                        });
                    }
                    this.ee.on(Ne, m),
                        s.on(Se, m),
                        a.on(Se, m),
                        this.ee.on(Oe, v),
                        s.on(Te, v),
                        a.on(Te, v),
                        this.ee.on("fn-err", function () {
                            for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                            n[2]?.__newrelic?.[e] || (0, E.p)("function-err", [...n], void 0, r.featureName, r.ee);
                        }),
                        this.ee.buffer([Ne, Oe, "xhr-resolved"], this.featureName),
                        d.buffer([Ne], this.featureName),
                        c.buffer(["setTimeout" + Re, "clearTimeout" + we, Ne], this.featureName),
                        u.buffer([Ne, "new-xhr", "send-xhr" + we], this.featureName),
                        l.buffer([Ee + we, Ee + "-done", Ee + xe + we, Ee + xe + Re], this.featureName),
                        f.buffer(["newURL"], this.featureName),
                        g.buffer([Ne], this.featureName),
                        s.buffer(["propagate", Se, Te, "executor-err", "resolve" + we], this.featureName),
                        o.buffer([Ne, "no-" + Ne], this.featureName),
                        a.buffer(["new-jsonp", "cb-start", "jsonp-error", "jsonp-end"], this.featureName),
                        b(l, Ee + we),
                        b(l, Ee + "-done"),
                        b(a, "new-jsonp"),
                        b(a, "jsonp-end"),
                        b(a, "cb-start"),
                        f.on("pushState-end", p),
                        f.on("replaceState-end", p),
                        window.addEventListener("hashchange", p, (0, S.jT)(!0, this.removeOnAbort?.signal)),
                        window.addEventListener("load", p, (0, S.jT)(!0, this.removeOnAbort?.signal)),
                        window.addEventListener(
                            "popstate",
                            function () {
                                p(0, i > 1);
                            },
                            (0, S.jT)(!0, this.removeOnAbort?.signal)
                        ),
                        (this.abortHandler = this.#n),
                        this.importAggregator();
                }
                #n() {
                    this.removeOnAbort?.abort(), (this.abortHandler = void 0);
                }
            }
            var _e = i(3333);
            class je extends v {
                static featureName = (() => _e.T)();
                constructor(e, t) {
                    let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    super(e, t, _e.T, r);
                    [(0, a.gD)(this.agentIdentifier, "page_action.enabled")].some((e) => e) ? this.importAggregator() : (0, d.x3)(this.agentIdentifier, this.featureName);
                }
            }
            var Pe = i(993),
                Ce = i(3785);
            class ke extends v {
                static featureName = (() => Pe.TZ)();
                constructor(e, t) {
                    let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    super(e, t, Pe.TZ, r);
                    const n = this.ee;
                    this.ee.on("wrap-logger-end", function (e) {
                        let [t] = e;
                        const { level: r, customAttributes: i } = this;
                        (0, Ce.R)(n, t, i, r);
                    }),
                        this.importAggregator();
                }
            }
            new (class extends n {
                constructor(t, r) {
                    super(r),
                        h.gm
                            ? ((this.sharedAggregator = new R({ agentIdentifier: this.agentIdentifier })),
                                (this.features = {}),
                                (0, A.bQ)(this.agentIdentifier, this),
                                (this.desiredFeatures = new Set(t.features || [])),
                                this.desiredFeatures.add(y),
                                (this.runSoftNavOverSpa = [...this.desiredFeatures].some((e) => e.featureName === o.K.softNav)),
                                (0, u.j)(this, t, t.loaderType || "agent"),
                                this.run())
                            : (0, e.R)(21);
                }
                get config() {
                    return { info: this.info, init: this.init, loader_config: this.loader_config, runtime: this.runtime };
                }
                run() {
                    try {
                        const t = c(this.agentIdentifier),
                            r = [...this.desiredFeatures];
                        r.sort((e, t) => o.P[e.featureName] - o.P[t.featureName]),
                            r.forEach((r) => {
                                if (!t[r.featureName] && r.featureName !== o.K.pageViewEvent) return;
                                if (this.runSoftNavOverSpa && r.featureName === o.K.spa) return;
                                if (!this.runSoftNavOverSpa && r.featureName === o.K.softNav) return;
                                (function (e) {
                                    switch (e) {
                                        case o.K.ajax:
                                            return [o.K.jserrors];
                                        case o.K.sessionTrace:
                                            return [o.K.ajax, o.K.pageViewEvent];
                                        case o.K.sessionReplay:
                                            return [o.K.sessionTrace];
                                        case o.K.pageViewTiming:
                                            return [o.K.pageViewEvent];
                                        default:
                                            return [];
                                    }
                                })(r.featureName).every((e) => e in this.features) || (0, e.R)(36, r.featureName),
                                    (this.features[r.featureName] = new r(this.agentIdentifier, this.sharedAggregator));
                            });
                    } catch (t) {
                        (0, e.R)(22, t);
                        for (const e in this.features) this.features[e].abortHandler?.();
                        const r = (0, A.Zm)();
                        delete r.initializedAgents[this.agentIdentifier]?.api, delete r.initializedAgents[this.agentIdentifier]?.features, delete this.sharedAggregator;
                        return r.ee.get(this.agentIdentifier).abort(), !1;
                    }
                }
            })({ features: [re, y, _, he, pe, P, U, je, ke, ve, Ie], loaderType: "spa" });
        })();
})();