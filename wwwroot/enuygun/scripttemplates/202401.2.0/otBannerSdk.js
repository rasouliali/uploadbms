/** 
 * onetrust-banner-sdk
 * v202401.2.0
 * by OneTrust LLC
 * Copyright 2024 
 */
!function () {
    "use strict";
    var N = function (e, t) {
        return (N = Object.setPrototypeOf || ({
            __proto__: []
        } instanceof Array ? function (e, t) {
            e.__proto__ = t
        }
            : function (e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
        ))(e, t)
    };
    function D(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function o() {
            this.constructor = e
        }
        N(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                new o)
    }
    var H, R = function () {
        return (R = Object.assign || function (e) {
            for (var t, o = 1, n = arguments.length; o < n; o++)
                for (var r in t = arguments[o])
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }
        ).apply(this, arguments)
    };
    function F(e, s, a, l) {
        return new (a = a || Promise)(function (o, t) {
            function n(e) {
                try {
                    i(l.next(e))
                } catch (e) {
                    t(e)
                }
            }
            function r(e) {
                try {
                    i(l.throw(e))
                } catch (e) {
                    t(e)
                }
            }
            function i(e) {
                var t;
                e.done ? o(e.value) : ((t = e.value) instanceof a ? t : new a(function (e) {
                    e(t)
                }
                )).then(n, r)
            }
            i((l = l.apply(e, s || [])).next())
        }
        )
    }
    function M(n, r) {
        var i, s, a, l = {
            label: 0,
            sent: function () {
                if (1 & a[0])
                    throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        }, c = {
            next: e(0),
            throw: e(1),
            return: e(2)
        };
        return "function" == typeof Symbol && (c[Symbol.iterator] = function () {
            return this
        }
        ),
            c;
        function e(o) {
            return function (e) {
                var t = [o, e];
                if (i)
                    throw new TypeError("Generator is already executing.");
                for (; l = c && t[c = 0] ? 0 : l;)
                    try {
                        if (i = 1,
                            s && (a = 2 & t[0] ? s.return : t[0] ? s.throw || ((a = s.return) && a.call(s),
                                0) : s.next) && !(a = a.call(s, t[1])).done)
                            return a;
                        switch (s = 0,
                        (t = a ? [2 & t[0], a.value] : t)[0]) {
                            case 0:
                            case 1:
                                a = t;
                                break;
                            case 4:
                                return l.label++,
                                {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                l.label++,
                                    s = t[1],
                                    t = [0];
                                continue;
                            case 7:
                                t = l.ops.pop(),
                                    l.trys.pop();
                                continue;
                            default:
                                if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    l = 0;
                                    continue
                                }
                                if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3]))
                                    l.label = t[1];
                                else if (6 === t[0] && l.label < a[1])
                                    l.label = a[1],
                                        a = t;
                                else {
                                    if (!(a && l.label < a[2])) {
                                        a[2] && l.ops.pop(),
                                            l.trys.pop();
                                        continue
                                    }
                                    l.label = a[2],
                                        l.ops.push(t)
                                }
                        }
                        t = r.call(n, l)
                    } catch (e) {
                        t = [6, e],
                            s = 0
                    } finally {
                        i = a = 0
                    }
                if (5 & t[0])
                    throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: !0
                }
            }
        }
    }
    function q() {
        for (var e = 0, t = 0, o = arguments.length; t < o; t++)
            e += arguments[t].length;
        for (var n = Array(e), r = 0, t = 0; t < o; t++)
            for (var i = arguments[t], s = 0, a = i.length; s < a; s++,
                r++)
                n[r] = i[s];
        return n
    }
    (e = H = H || {})[e.ACTIVE = 0] = "ACTIVE",
        e[e.ALWAYS_ACTIVE = 1] = "ALWAYS_ACTIVE",
        e[e.EXPIRED = 2] = "EXPIRED",
        e[e.NO_CONSENT = 3] = "NO_CONSENT",
        e[e.OPT_OUT = 4] = "OPT_OUT",
        e[e.PENDING = 5] = "PENDING",
        e[e.WITHDRAWN = 6] = "WITHDRAWN";
    var U = setTimeout;
    function j(e) {
        return Boolean(e && void 0 !== e.length)
    }
    function z() { }
    function K(e) {
        if (!(this instanceof K))
            throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e)
            throw new TypeError("not a function");
        this._state = 0,
            this._handled = !1,
            this._value = void 0,
            this._deferreds = [],
            $(e, this)
    }
    function W(o, n) {
        for (; 3 === o._state;)
            o = o._value;
        0 === o._state ? o._deferreds.push(n) : (o._handled = !0,
            K._immediateFn(function () {
                var e, t = 1 === o._state ? n.onFulfilled : n.onRejected;
                if (null === t)
                    (1 === o._state ? Y : J)(n.promise, o._value);
                else {
                    try {
                        e = t(o._value)
                    } catch (e) {
                        return void J(n.promise, e)
                    }
                    Y(n.promise, e)
                }
            }))
    }
    function Y(t, e) {
        try {
            if (e === t)
                throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var o = e.then;
                if (e instanceof K)
                    return t._state = 3,
                        t._value = e,
                        void X(t);
                if ("function" == typeof o)
                    return void $((n = o,
                        r = e,
                        function () {
                            n.apply(r, arguments)
                        }
                    ), t)
            }
            t._state = 1,
                t._value = e,
                X(t)
        } catch (e) {
            J(t, e)
        }
        var n, r
    }
    function J(e, t) {
        e._state = 2,
            e._value = t,
            X(e)
    }
    function X(e) {
        2 === e._state && 0 === e._deferreds.length && K._immediateFn(function () {
            e._handled || K._unhandledRejectionFn(e._value)
        });
        for (var t = 0, o = e._deferreds.length; t < o; t++)
            W(e, e._deferreds[t]);
        e._deferreds = null
    }
    function Q(e, t, o) {
        this.onFulfilled = "function" == typeof e ? e : null,
            this.onRejected = "function" == typeof t ? t : null,
            this.promise = o
    }
    function $(e, t) {
        var o = !1;
        try {
            e(function (e) {
                o || (o = !0,
                    Y(t, e))
            }, function (e) {
                o || (o = !0,
                    J(t, e))
            })
        } catch (e) {
            o || (o = !0,
                J(t, e))
        }
    }
    function Z() { }
    K.prototype.catch = function (e) {
        return this.then(null, e)
    }
        ,
        K.prototype.then = function (e, t) {
            var o = new this.constructor(z);
            return W(this, new Q(e, t, o)),
                o
        }
        ,
        K.prototype.finally = function (t) {
            var o = this.constructor;
            return this.then(function (e) {
                return o.resolve(t()).then(function () {
                    return e
                })
            }, function (e) {
                return o.resolve(t()).then(function () {
                    return o.reject(e)
                })
            })
        }
        ,
        K.all = function (t) {
            return new K(function (r, i) {
                if (!j(t))
                    return i(new TypeError("Promise.all accepts an array"));
                var s = Array.prototype.slice.call(t);
                if (0 === s.length)
                    return r([]);
                var a = s.length;
                for (var e = 0; e < s.length; e++)
                    !function t(o, e) {
                        try {
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var n = e.then;
                                if ("function" == typeof n)
                                    return void n.call(e, function (e) {
                                        t(o, e)
                                    }, i)
                            }
                            s[o] = e,
                                0 == --a && r(s)
                        } catch (e) {
                            i(e)
                        }
                    }(e, s[e])
            }
            )
        }
        ,
        K.resolve = function (t) {
            return t && "object" == typeof t && t.constructor === K ? t : new K(function (e) {
                e(t)
            }
            )
        }
        ,
        K.reject = function (o) {
            return new K(function (e, t) {
                t(o)
            }
            )
        }
        ,
        K.race = function (r) {
            return new K(function (e, t) {
                if (!j(r))
                    return t(new TypeError("Promise.race accepts an array"));
                for (var o = 0, n = r.length; o < n; o++)
                    K.resolve(r[o]).then(e, t)
            }
            )
        }
        ,
        K._immediateFn = "function" == typeof setImmediate ? function (e) {
            setImmediate(e)
        }
            : function (e) {
                U(e, 0)
            }
        ,
        K._unhandledRejectionFn = function (e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        }
        ,
        Z.prototype.initPolyfill = function () {
            this.initArrayIncludesPolyfill(),
                this.initObjectAssignPolyfill(),
                this.initArrayFillPolyfill(),
                this.initClosestPolyfill(),
                this.initIncludesPolyfill(),
                this.initEndsWithPoly(),
                this.initCustomEventPolyfill(),
                this.promisesPolyfil()
        }
        ,
        Z.prototype.initArrayIncludesPolyfill = function () {
            Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                value: function (e) {
                    for (var t = [], o = 1; o < arguments.length; o++)
                        t[o - 1] = arguments[o];
                    if (null == this)
                        throw new TypeError("Array.prototype.includes called on null or undefined");
                    var n = Object(this)
                        , r = parseInt(n.length, 10) || 0;
                    if (0 !== r) {
                        var i, s, a = t[1] || 0;
                        for (0 <= a ? i = a : (i = r + a) < 0 && (i = 0); i < r;) {
                            if (e === (s = n[i]) || e != e && s != s)
                                return !0;
                            i++
                        }
                    }
                    return !1
                },
                writable: !0,
                configurable: !0
            })
        }
        ,
        Z.prototype.initEndsWithPoly = function () {
            String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
                value: function (e, t) {
                    return (void 0 === t || t > this.length) && (t = this.length),
                        this.substring(t - e.length, t) === e
                },
                writable: !0,
                configurable: !0
            })
        }
        ,
        Z.prototype.initClosestPolyfill = function () {
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
                Element.prototype.closest || Object.defineProperty(Element.prototype, "closest", {
                    value: function (e) {
                        var t = this;
                        do {
                            if (t.matches(e))
                                return t
                        } while (null !== (t = t.parentElement || t.parentNode) && 1 === t.nodeType);
                        return null
                    },
                    writable: !0,
                    configurable: !0
                })
        }
        ,
        Z.prototype.initIncludesPolyfill = function () {
            String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
                value: function (e, t) {
                    return !((t = "number" != typeof t ? 0 : t) + e.length > this.length) && -1 !== this.indexOf(e, t)
                },
                writable: !0,
                configurable: !0
            })
        }
        ,
        Z.prototype.initObjectAssignPolyfill = function () {
            "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
                value: function (e, t) {
                    if (null == e)
                        throw new TypeError("Cannot convert undefined or null to object");
                    for (var o = Object(e), n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        if (null != r)
                            for (var i in r)
                                Object.prototype.hasOwnProperty.call(r, i) && (o[i] = r[i])
                    }
                    return o
                },
                writable: !0,
                configurable: !0
            })
        }
        ,
        Z.prototype.initArrayFillPolyfill = function () {
            Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
                value: function (e) {
                    if (null == this)
                        throw new TypeError("this is null or not defined");
                    for (var t = Object(this), o = t.length >>> 0, n = arguments[1] >> 0, r = n < 0 ? Math.max(o + n, 0) : Math.min(n, o), n = arguments[2], n = void 0 === n ? o : n >> 0, i = n < 0 ? Math.max(o + n, 0) : Math.min(n, o); r < i;)
                        t[r] = e,
                            r++;
                    return t
                }
            })
        }
        ,
        Z.prototype.initCustomEventPolyfill = function () {
            if ("function" == typeof window.CustomEvent)
                return !1;
            function e(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var o = document.createEvent("CustomEvent");
                return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                    o
            }
            e.prototype = window.Event.prototype,
                window.CustomEvent = e
        }
        ,
        Z.prototype.insertViewPortTag = function () {
            var e = document.querySelector('meta[name="viewport"]')
                , t = document.createElement("meta");
            t.name = "viewport",
                t.content = "width=device-width, initial-scale=1",
                e || document.head.appendChild(t)
        }
        ,
        Z.prototype.promisesPolyfil = function () {
            "undefined" == typeof Promise && (window.Promise = K)
        }
        ;
    var ee, te, oe, ne, re, ie, se, ae, le, ce, de, pe, ue, ge, he, Ce, ye, fe, me, ve, ke, Se, be, Pe, Te, Ae, Ie, Le, _e, Ee, Ve, Oe, Be, we, Ge, xe, Ne = new Z, De = ((e = ee = ee || {})[e.Unknown = 0] = "Unknown",
        e[e.BannerCloseButton = 1] = "BannerCloseButton",
        e[e.ConfirmChoiceButton = 2] = "ConfirmChoiceButton",
        e[e.AcceptAll = 3] = "AcceptAll",
        e[e.RejectAll = 4] = "RejectAll",
        e[e.BannerSaveSettings = 5] = "BannerSaveSettings",
        e[e.ContinueWithoutAcceptingButton = 6] = "ContinueWithoutAcceptingButton",
        (e = te = te || {})[e.Banner = 1] = "Banner",
        e[e.PC = 2] = "PC",
        e[e.API = 3] = "API",
        (e = oe = oe || {}).AcceptAll = "AcceptAll",
        e.RejectAll = "RejectAll",
        e.UpdateConsent = "UpdateConsent",
        (e = ne = ne || {})[e.Purpose = 1] = "Purpose",
        e[e.SpecialFeature = 2] = "SpecialFeature",
        (e = re = re || {}).Legal = "legal",
        e.UserFriendly = "user_friendly",
        (e = ie = ie || {}).Top = "top",
        e.Bottom = "bottom",
        (e = se = se || {})[e.Banner = 0] = "Banner",
        e[e.PrefCenterHome = 1] = "PrefCenterHome",
        e[e.VendorList = 2] = "VendorList",
        e[e.CookieList = 3] = "CookieList",
        e[e.IabIllustrations = 4] = "IabIllustrations",
        (e = ae = ae || {})[e.RightArrow = 39] = "RightArrow",
        e[e.LeftArrow = 37] = "LeftArrow",
        (e = le = le || {}).AfterTitle = "AfterTitle",
        e.AfterDescription = "AfterDescription",
        e.AfterDPD = "AfterDPD",
        (e = ce = ce || {}).PlusMinus = "Plusminus",
        e.Caret = "Caret",
        e.NoAccordion = "NoAccordion",
        (e = de = de || {}).Consent = "Consent",
        e.LI = "LI",
        e.AddtlConsent = "AddtlConsent",
        (e = pe = pe || {}).Iab1Pub = "eupubconsent",
        e.Iab2Pub = "eupubconsent-v2",
        e.Iab1Eu = "euconsent",
        e.Iab2Eu = "euconsent-v2",
        (e = ue = ue || {})[e.Disabled = 0] = "Disabled",
        e[e.Consent = 1] = "Consent",
        e[e.LegInt = 2] = "LegInt",
        (e = ge = ge || {})[e["Banner - Allow All"] = 1] = "Banner - Allow All",
        e[e["Banner - Reject All"] = 2] = "Banner - Reject All",
        e[e["Banner - Close"] = 3] = "Banner - Close",
        e[e["Preference Center - Allow All"] = 4] = "Preference Center - Allow All",
        e[e["Preference Center - Reject All"] = 5] = "Preference Center - Reject All",
        e[e["Preference Center - Confirm"] = 6] = "Preference Center - Confirm",
        e[e["GPC value changed"] = 7] = "GPC value changed",
        (e = he = he || {}).Active = "1",
        e.InActive = "0",
        (e = Ce = Ce || {}).Host = "Host",
        e.GenVendor = "GenVen",
        (e = ye = ye || {})[e.Host = 1] = "Host",
        e[e.GenVen = 2] = "GenVen",
        e[e.HostAndGenVen = 3] = "HostAndGenVen",
        (e = fe = fe || {})[e.minDays = 1] = "minDays",
        e[e.maxDays = 30] = "maxDays",
        e[e.maxYear = 31536e3] = "maxYear",
        e[e.maxSecToDays = 86400] = "maxSecToDays",
        (e = me = me || {})[e.RTL = 0] = "RTL",
        e[e.LTR = 1] = "LTR",
        (e = ve = ve || {})[e.GoogleVendor = 1] = "GoogleVendor",
        e[e.GeneralVendor = 2] = "GeneralVendor",
        (e = Tt = Tt || {})[e.Days = 1] = "Days",
        e[e.Weeks = 7] = "Weeks",
        e[e.Months = 30] = "Months",
        e[e.Years = 365] = "Years",
        (e = ke = ke || {}).Checkbox = "Checkbox",
        e.Toggle = "Toggle",
        (e = Se = Se || {}).SlideIn = "Slide_In",
        e.FadeIn = "Fade_In",
        e.RemoveAnimation = "Remove_Animation",
        (e = be = be || {}).Link = "Link",
        e.Icon = "Icon",
        (e = Pe = Pe || {}).consent = "consent",
        e.set = "set",
        (e = Te = Te || {}).update = "update",
        e.default = "default",
        e.ads_data_redaction = "ads_data_redaction",
        (e = Ae = Ae || {}).analytics_storage = "analytics_storage",
        e.ad_storage = "ad_storage",
        e.functionality_storage = "functionality_storage",
        e.personalization_storage = "personalization_storage",
        e.security_storage = "security_storage",
        e.ad_user_data = "ad_user_data",
        e.ad_personalization = "ad_personalization",
        e.region = "region",
        e.wait_for_update = "wait_for_update",
        (e = Ie = Ie || {}).granted = "granted",
        e.denied = "denied",
        0,
        (e = Le = Le || {}).OBJECT_TO_LI = "ObjectToLI",
        e.LI_ACTIVE_IF_LEGAL_BASIS = "LIActiveIfLegalBasis",
        (e = _e = _e || {}).cookies = "cookies",
        e.vendors = "vendors",
        (e = Ee = Ee || {}).GDPR = "GDPR",
        e.CCPA = "CCPA",
        e.IAB2 = "IAB2",
        e.IAB2V2 = "IAB2V2",
        e.GENERIC = "GENERIC",
        e.LGPD = "LGPD",
        e.GENERIC_PROMPT = "GENERIC_PROMPT",
        e.CPRA = "CPRA",
        e.CDPA = "CDPA",
        e.USNATIONAL = "USNATIONAL",
        e.CUSTOM = "CUSTOM",
        e.COLORADO = "COLORADO",
        e.CONNECTICUT = "CTDPA",
        e.UCPA = "UCPA",
        (e = Ve = Ve || {}).Name = "OTGPPConsent",
        e[e.ChunkSize = 4e3] = "ChunkSize",
        e.ChunkCountParam = "GPPCookiesCount",
        (e = Oe = Oe || {}).MspaCoveredTransaction = "IsMSPAEnabled",
        e.MspaOptOutOptionMode = "Opt-Out",
        e.MspaServiceProviderMode = "Service Provider",
        0,
        (e = Be = Be || {}).GpcSegmentType = "GpcSegmentType",
        e.Gpc = "Gpc",
        (e = we = we || {}).SensitiveDataProcessing = "SensitiveDataProcessing",
        e.KnownChildSensitiveDataConsents = "KnownChildSensitiveDataConsents",
        (e = Ge = Ge || {}).CPRA = "uscav1",
        e.CCPA = "uscav1",
        e.CDPA = "usvav1",
        e.USNATIONAL = "usnatv1",
        e.COLORADO = "uscov1",
        e.CTDPA = "usctv1",
        e.UCPA = "usutv1",
        e.IAB2V2 = "tcfeuv2",
        (e = xe = xe || {})[e.CPRA = 8] = "CPRA",
        e[e.CCPA = 8] = "CCPA",
        e[e.CDPA = 9] = "CDPA",
        e[e.USNATIONAL = 7] = "USNATIONAL",
        e[e.COLORADO = 10] = "COLORADO",
        e[e.UCPA = 11] = "UCPA",
        e[e.CTDPA = 12] = "CTDPA",
        e[e.IAB2V2 = 2] = "IAB2V2",
        0,
        0,
        0,
        0,
        0,
    {
        AWAITING_RE_CONSENT: "AwaitingReconsent",
        CONSENT_ID: "consentId",
        GEO_LOCATION: "geolocation",
        INTERACTION_COUNT: "interactionCount",
        IS_IAB_GLOBAL: "isIABGlobal",
        NOT_LANDING_PAGE: "NotLandingPage",
        GEO: "geo",
        GPC_ENABLED: "isGpcEnabled",
        GPC_Browser_Flag: "browserGpcFlag",
        IDENTIFIER_TYPE: "identifierType"
    }), v = {
        ADDITIONAL_CONSENT_STRING: "OTAdditionalConsentString",
        ALERT_BOX_CLOSED: "OptanonAlertBoxClosed",
        OPTANON_CONSENT: "OptanonConsent",
        EU_PUB_CONSENT: "eupubconsent-v2",
        EU_CONSENT: "euconsent-v2",
        SELECTED_VARIANT: "OTVariant",
        OT_PREVIEW: "otpreview",
        GPP_CONSENT: Ve.Name
    }, He = "CONFIRMED", Re = "OPT_OUT", Fe = "NO_CHOICE", Me = "NOTGIVEN", qe = "NO_OPT_OUT", C = {
        ALWAYS_INACTIVE: "always inactive",
        ALWAYS_ACTIVE: "always active",
        ACTIVE: "active",
        INACTIVE_LANDING_PAGE: "inactive landingpage",
        INACTIVE: "inactive",
        IMPLIED_CONSENT: "implied consent",
        GPC: "gpc",
        DNT: "dnt"
    }, Ue = "LOCAL", je = "TEST", ze = "LOCAL_TEST", Ke = "data-language", We = "otCookieSettingsButton.json", Ye = "otCookieSettingsButtonRtl.json", Je = "otCenterRounded", Xe = "otFlat", Qe = "otFloatingRoundedCorner", $e = "otFloatingFlat", Ze = "otFloatingRoundedIcon", et = "otFloatingRounded", tt = "otChoicesBanner", ot = "otNoBanner", nt = "otPcCenter", rt = "otPcList", it = "otPcPanel", st = "otPcPopup", g = "otPcTab", at = "hidebanner", lt = ((e = {})[Tt.Days] = "PCenterVendorListLifespanDay",
        e[Tt.Weeks] = "LfSpnWk",
        e[Tt.Months] = "PCenterVendorListLifespanMonth",
        e[Tt.Years] = "LfSpnYr",
        e), ct = "DNAC", dt = "Category", pt = "Host", ut = "General Vendor", gt = "VendorService", ht = "aria-label", Ct = "aria-hidden", yt = "BRANCH", ft = "COOKIE", mt = ["IAB2_PURPOSE", "IAB2_STACK", "IAB2_FEATURE", "IAB2_SPL_PURPOSE", "IAB2_SPL_FEATURE", "IAB2V2_PURPOSE", "IAB2V2_SPL_PURPOSE", "IAB2V2_FEATURE", "IAB2V2_SPL_FEATURE", "IAB2V2_STACK"], vt = ["COOKIE", "BRANCH", "IAB2_STACK", "IAB2V2_STACK"], kt = ["IAB2_PURPOSE", "IAB2_SPL_FEATURE", "IAB2V2_PURPOSE", "IAB2V2_SPL_FEATURE"], St = ["IAB2_FEATURE", "IAB2_SPL_PURPOSE", "IAB2V2_FEATURE", "IAB2V2_SPL_PURPOSE"], bt = ["IAB2_PURPOSE", "IAB2_SPL_PURPOSE", "IAB2_FEATURE", "IAB2_SPL_FEATURE"], m = new function () { }
        ;
    function d(e, t, o) {
        void 0 === o && (o = !1);
        function n(e) {
            return e ? (";" !== (e = e.trim()).charAt(e.length - 1) && (e += ";"),
                e.trim()) : null
        }
        var i = n(e.getAttribute("style"))
            , s = n(t)
            , t = ""
            , t = o && i ? function () {
                for (var e = i.split(";").concat(s.split(";")).filter(function (e) {
                    return 0 !== e.length
                }), t = "", o = "", n = e.length - 1; 0 <= n; n--) {
                    var r = e[n].substring(0, e[n].indexOf(":") + 1).trim();
                    t.indexOf(r) < 0 && (t += r,
                        o += e[n] + ";")
                }
                return o
            }() : s;
        e.setAttribute("style", t)
    }
    function Pt() { }
    Pt.prototype.convertKeyValueLowerCase = function (e) {
        for (var t in e)
            e[t.toLowerCase()] ? e[t.toLowerCase()] = e[t].toLowerCase() : (e[t] && (e[t.toLowerCase()] = e[t].toLowerCase()),
                delete e[t]);
        return e
    }
        ,
        Pt.prototype.arrToStr = function (e) {
            return e.toString()
        }
        ,
        Pt.prototype.strToArr = function (e) {
            return e ? e.split(",") : []
        }
        ,
        Pt.prototype.strToMap = function (e) {
            if (!e)
                return new Map;
            for (var t = new Map, o = 0, n = this.strToArr(e); o < n.length; o++) {
                var r = n[o].split(":");
                t.set(r[0], "1" === r[1])
            }
            return t
        }
        ,
        Pt.prototype.empty = function (e) {
            var t = document.getElementById(e);
            if (t)
                for (; t.hasChildNodes();)
                    t.removeChild(t.lastChild)
        }
        ,
        Pt.prototype.show = function (e) {
            e = document.getElementById(e);
            e && d(e, "display: block;", !0)
        }
        ,
        Pt.prototype.remove = function (e) {
            e = document.getElementById(e);
            e && e.parentNode && e.parentNode.removeChild(e)
        }
        ,
        Pt.prototype.appendTo = function (e, t) {
            var o, e = document.getElementById(e);
            e && ((o = document.createElement("div")).innerHTML = t,
                e.appendChild(o))
        }
        ,
        Pt.prototype.contains = function (e, t) {
            for (var o = 0; o < e.length; o += 1)
                if (e[o].toString().toLowerCase() === t.toString().toLowerCase())
                    return !0;
            return !1
        }
        ,
        Pt.prototype.indexOf = function (e, t) {
            for (var o = 0; o < e.length; o += 1)
                if (e[o] === t)
                    return o;
            return -1
        }
        ,
        Pt.prototype.endsWith = function (e, t) {
            return -1 !== e.indexOf(t, e.length - t.length)
        }
        ,
        Pt.prototype.generateUUID = function () {
            var o = (new Date).getTime();
            return "undefined" != typeof performance && "function" == typeof performance.now && (o += performance.now()),
                "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                    var t = (o + 16 * Math.random()) % 16 | 0;
                    return o = Math.floor(o / 16),
                        ("x" === e ? t : 3 & t | 8).toString(16)
                })
        }
        ,
        Pt.prototype.getActiveIdArray = function (e) {
            return e.filter(function (e) {
                return "true" === e.split(":")[1]
            }).map(function (e) {
                return parseInt(e.split(":")[0])
            })
        }
        ,
        Pt.prototype.distinctArray = function (e) {
            var t = new Array;
            return e.forEach(function (e) {
                t.indexOf(e) < 0 && t.push(e)
            }),
                t
        }
        ,
        Pt.prototype.findIndex = function (e, t) {
            for (var o = -1, n = 0; n < e.length; n++)
                if (void 0 !== e[n] && t(e[n], n)) {
                    o = n;
                    break
                }
            return o
        }
        ,
        Pt.prototype.getURL = function (e) {
            var t = document.createElement("a");
            return t.href = e,
                t
        }
        ,
        Pt.prototype.removeURLPrefixes = function (e) {
            return e.toLowerCase().replace(/(^\w+:|^)\/\//, "").replace("www.", "")
        }
        ,
        Pt.prototype.removeChild = function (e) {
            if (e)
                if (e instanceof NodeList || e instanceof Array)
                    for (var t = 0; t < e.length; t++)
                        e[t].parentElement.removeChild(e[t]);
                else
                    e.parentElement.removeChild(e)
        }
        ,
        Pt.prototype.getRelativeURL = function (e, t, o) {
            return void 0 === o && (o = !1),
                t ? (t = "./" + e.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/").replace(".json", ""),
                    o ? t : t + ".js") : e
        }
        ,
        Pt.prototype.setCheckedAttribute = function (e, t, o) {
            (t = e ? document.querySelector(e) : t) && (o ? t.setAttribute("checked", "") : t.removeAttribute("checked"),
                t.checked = o)
        }
        ,
        Pt.prototype.setDisabledAttribute = function (e, t, o) {
            (t = e ? document.querySelector(e) : t) && (o ? t.setAttribute("disabled", o.toString()) : t.removeAttribute("disabled"))
        }
        ,
        Pt.prototype.setHtmlAttributes = function (e, t) {
            for (var o in t)
                e.setAttribute(o, t[o]),
                    e[o] = t[o]
        }
        ,
        Pt.prototype.calculateCookieLifespan = function (e) {
            return e < 0 ? A.LifespanTypeText : (e = Math.floor(e / fe.maxSecToDays)) < fe.minDays ? "< 1 " + A.PCenterVendorListLifespanDay : e < fe.maxDays ? e + " " + A.PCenterVendorListLifespanDays : 1 === (e = Math.floor(e / fe.maxDays)) ? e + " " + A.PCenterVendorListLifespanMonth : e + " " + A.PCenterVendorListLifespanMonths
        }
        ,
        Pt.prototype.insertElement = function (e, t, o) {
            e && t && e.insertAdjacentElement(o, t)
        }
        ,
        Pt.prototype.customQuerySelector = function (t) {
            return function (e) {
                return t.querySelector(e)
            }
        }
        ,
        Pt.prototype.customQuerySelectorAll = function (t) {
            return function (e) {
                return t.querySelectorAll(e)
            }
        }
        ;
    var k, S = new Pt, Tt = (At.prototype.removeAlertBox = function () {
        null !== this.getCookie(v.ALERT_BOX_CLOSED) && this.setCookie(v.ALERT_BOX_CLOSED, "", 0, !0)
    }
        ,
        At.prototype.removeIab1 = function () {
            null !== this.getCookie(pe.Iab1Pub) && this.setCookie(pe.Iab1Pub, "", 0, !0)
        }
        ,
        At.prototype.removeIab2 = function () {
            null !== this.getCookie(pe.Iab2Pub) && this.setCookie(pe.Iab2Pub, "", 0, !0)
        }
        ,
        At.prototype.removeAddtlStr = function () {
            null !== this.getCookie(v.ADDITIONAL_CONSENT_STRING) && this.setCookie(v.ADDITIONAL_CONSENT_STRING, "", 0, !0)
        }
        ,
        At.prototype.removeVariant = function () {
            null !== this.getCookie(v.SELECTED_VARIANT) && this.setCookie(v.SELECTED_VARIANT, "", 0, !0)
        }
        ,
        At.prototype.removeOptanon = function () {
            null !== this.getCookie(v.OPTANON_CONSENT) && this.setCookie(v.OPTANON_CONSENT, "", 0, !0)
        }
        ,
        At.prototype.removePreview = function () {
            null !== this.getCookie(v.OT_PREVIEW) && this.setCookie(v.OT_PREVIEW, "", 0, !0)
        }
        ,
        At.prototype.writeCookieParam = function (e, t, o, n) {
            var r, i, s, a = {}, l = this.getCookie(e);
            if (l)
                for (i = l.split("&"),
                    r = 0; r < i.length; r += 1)
                    s = i[r].split("="),
                        a[decodeURIComponent(s[0])] = s[0] === t && n ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
            a[t] = o;
            l = null;
            l && l.CookieV2CookieDateTimeInISO ? a.datestamp = (new Date).toISOString() : a.datestamp = (new Date).toString(),
                a.version = I.otSDKVersion,
                o = this.param(a),
                this.setCookie(e, o, A.ReconsentFrequencyDays)
        }
        ,
        At.prototype.readCookieParam = function (e, t, o) {
            var n, r, i, s, e = this.getCookie(e);
            if (e) {
                for (r = {},
                    i = e.split("&"),
                    n = 0; n < i.length; n += 1)
                    s = i[n].split("="),
                        r[decodeURIComponent(s[0])] = o ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
                return t && r[t] ? r[t] : t && !r[t] ? "" : r
            }
            return ""
        }
        ,
        At.prototype.getCookie = function (e) {
            if (m && m.moduleInitializer && m.moduleInitializer.MobileSDK) {
                var t = this.getCookieDataObj(e);
                if (t)
                    return t.value
            }
            if (I.isAMP && (I.ampData = JSON.parse(localStorage.getItem(I.dataDomainId)) || {},
                I.ampData))
                return I.ampData[e] || null;
            for (var o, n = e + "=", r = document.cookie.split(";"), i = 0; i < r.length; i += 1) {
                for (o = r[i]; " " === o.charAt(0);)
                    o = o.substring(1, o.length);
                if (0 === o.indexOf(n))
                    return o.substring(n.length, o.length)
            }
            return null
        }
        ,
        At.prototype.setAmpStorage = function () {
            window.localStorage.setItem(I.dataDomainId, JSON.stringify(I.ampData))
        }
        ,
        At.prototype.removeAmpStorage = function () {
            window.localStorage.removeItem(I.dataDomainId)
        }
        ,
        At.prototype.handleAmp = function (e, t) {
            "" !== t ? I.ampData[e] = t : delete I.ampData[e],
                0 === Object.keys(I.ampData).length ? this.removeAmpStorage() : this.setAmpStorage()
        }
        ,
        At.prototype.setCookie = function (e, t, o, n, r) {
            var i, s, a, l, c;
            void 0 === n && (n = !1),
                void 0 === r && (r = new Date),
                I.isAMP ? this.handleAmp(e, t) : (i = void 0,
                    i = o ? (r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3),
                        "; expires=" + r.toUTCString()) : n ? "; expires=" + new Date(0).toUTCString() : "",
                    o = "",
                    (s = (n = m.moduleInitializer) && n.Domain ? n.Domain.split("/") : []).length <= 1 ? s[1] = "" : o = s.slice(1).join("/"),
                    a = "Samesite=Lax",
                    n.CookieSameSiteNoneEnabled && (a = "Samesite=None; Secure"),
                    l = n.ScriptType === je || n.ScriptType === ze,
                    I.isPreview || !l && !n.MobileSDK ? (c = t + i + "; path=/" + o + "; domain=." + s[0] + "; " + a,
                        document.cookie = e + "=" + c) : (c = t + i + "; path=/; " + a,
                            n.MobileSDK ? this.setCookieDataObj({
                                name: e,
                                value: t,
                                expires: i,
                                date: r,
                                domainAndPath: s
                            }) : document.cookie = e + "=" + c))
        }
        ,
        At.prototype.setCookieDataObj = function (t) {
            var e;
            t && (I.otCookieData || (window.OneTrust && window.OneTrust.otCookieData ? I.otCookieData = window.OneTrust.otCookieData : I.otCookieData = []),
                -1 < (e = S.findIndex(I.otCookieData, function (e) {
                    return e.name === t.name
                })) ? I.otCookieData[e] = t : I.otCookieData.push(t))
        }
        ,
        At.prototype.getCookieDataObj = function (t) {
            I.otCookieData && 0 !== I.otCookieData.length || (window.OneTrust && window.OneTrust.otCookieData ? I.otCookieData = window.OneTrust.otCookieData : I.otCookieData = []);
            var e = S.findIndex(I.otCookieData, function (e) {
                return e.name === t
            });
            if (0 <= e) {
                var o = I.otCookieData[e];
                if (o.date)
                    return new Date(o.date) < new Date ? (I.otCookieData.splice(e, 1),
                        null) : o
            }
            return null
        }
        ,
        At.prototype.param = function (e) {
            var t, o = "";
            for (t in e)
                e.hasOwnProperty(t) && ("" !== o && (o += "&"),
                    o += t + "=" + encodeURIComponent(e[t]).replace(/%20/g, "+"));
            return o
        }
        ,
        At);
    function At() { }
    var b, P, It = {
        P_Content: "#ot-pc-content",
        P_Logo: ".ot-pc-logo",
        P_Title: "#ot-pc-title",
        P_Policy_Txt: "#ot-pc-desc",
        P_Vendor_Title_Elm: "#ot-lst-title",
        P_Vendor_Title: "#ot-lst-title h3",
        P_Manage_Cookies_Txt: "#ot-category-title",
        P_Label_Txt: ".ot-label-txt",
        P_Category_Header: ".ot-cat-header",
        P_Category_Grp: ".ot-cat-grp",
        P_Category_Item: ".ot-cat-item",
        P_Vendor_List: "#ot-pc-lst",
        P_Vendor_Content: "#ot-lst-cnt",
        P_Vendor_Container: "#ot-ven-lst",
        P_Ven_Bx: "ot-ven-box",
        P_Ven_Name: ".ot-ven-name",
        P_Ven_Link: ".ot-ven-link",
        P_Ven_Leg_Claim: ".ot-ven-legclaim-link",
        P_Ven_Ctgl: "ot-ven-ctgl",
        P_Ven_Ltgl: "ot-ven-litgl",
        P_Ven_Ltgl_Only: "ot-ven-litgl-only",
        P_Ven_Opts: ".ot-ven-opts",
        P_Triangle: "#ot-anchor",
        P_Fltr_Modal: "#ot-fltr-modal",
        P_Fltr_Options: ".ot-fltr-opts",
        P_Fltr_Option: ".ot-fltr-opt",
        P_Select_Cntr: "#ot-sel-blk",
        P_Host_Cntr: "#ot-host-lst",
        P_Host_Hdr: ".ot-host-hdr",
        P_Host_Desc: ".ot-host-desc",
        P_Li_Hdr: ".ot-pli-hdr",
        P_Li_Title: ".ot-li-title",
        P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
        P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
        P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
        P_Host_Title: ".ot-host-name",
        P_Leg_Select_All: ".ot-sel-all-hdr",
        P_Leg_Header: ".ot-li-hdr",
        P_Acc_Header: ".ot-acc-hdr",
        P_Cnsnt_Header: ".ot-consent-hdr",
        P_Tgl_Cntr: ".ot-tgl-cntr",
        P_CBx_Cntr: ".ot-chkbox",
        P_Sel_All_Host_El: "ot-selall-hostcntr",
        P_Sel_All_Vendor_Consent_El: "ot-selall-vencntr",
        P_Sel_All_Vendor_Leg_El: "ot-selall-licntr",
        P_c_Name: "ot-c-name",
        P_c_Host: "ot-c-host",
        P_c_Duration: "ot-c-duration",
        P_c_Type: "ot-c-type",
        P_c_Category: "ot-c-category",
        P_c_Desc: "ot-c-description",
        P_Host_View_Cookies: ".ot-host-expand",
        P_Host_Opt: ".ot-host-opt",
        P_Host_Info: ".ot-host-info",
        P_Arrw_Cntr: ".ot-arw-cntr",
        P_Acc_Txt: ".ot-acc-txt",
        P_Vendor_CheckBx: "ot-ven-chkbox",
        P_Vendor_LegCheckBx: "ot-ven-leg-chkbox",
        P_Host_UI: "ot-hosts-ui",
        P_Host_Cnt: "ot-host-cnt",
        P_Host_Bx: "ot-host-box",
        P_Ven_Dets: ".ot-ven-dets",
        P_Ven_Disc: ".ot-ven-disc",
        P_Gven_List: "#ot-gn-venlst",
        P_Close_Btn: ".ot-close-icon",
        P_Ven_Lst_Cntr: ".ot-vlst-cntr",
        P_Host_Lst_cntr: ".ot-hlst-cntr",
        P_Sub_Grp_Cntr: ".ot-subgrp-cntr",
        P_Subgrp_Desc: ".ot-subgrp-desc",
        P_Subgp_ul: ".ot-subgrps",
        P_Subgrp_li: ".ot-subgrp",
        P_Subgrp_Tgl_Cntr: ".ot-subgrp-tgl",
        P_Grp_Container: ".ot-grps-cntr",
        P_Privacy_Txt: "#ot-pvcy-txt",
        P_Privacy_Hdr: "#ot-pvcy-hdr",
        P_Active_Menu: "ot-active-menu",
        P_Desc_Container: ".ot-desc-cntr",
        P_Tab_Grp_Hdr: "ot-grp-hdr1",
        P_Search_Cntr: "#ot-search-cntr",
        P_Clr_Fltr_Txt: "#clear-filters-handler",
        P_Acc_Grp_Desc: ".ot-acc-grpdesc",
        P_Acc_Container: ".ot-acc-grpcntr",
        P_Line_Through: "line-through",
        P_Vendor_Search_Input: "#vendor-search-handler"
    }, Lt = {
        P_Grp_Container: ".groups-container",
        P_Content: "#ot-content",
        P_Category_Header: ".category-header",
        P_Desc_Container: ".description-container",
        P_Label_Txt: ".label-text",
        P_Acc_Grp_Desc: ".ot-accordion-group-pc-container",
        P_Leg_Int_Hdr: ".leg-int-header",
        P_Not_Always_Active: "p:not(.ot-always-active)",
        P_Category_Grp: ".category-group",
        P_Category_Item: ".category-item",
        P_Sub_Grp_Cntr: ".cookie-subgroups-container",
        P_Acc_Container: ".ot-accordion-pc-container",
        P_Close_Btn: ".pc-close-button",
        P_Logo: ".pc-logo",
        P_Title: "#pc-title",
        P_Privacy_Txt: "#privacy-text",
        P_Privacy_Hdr: "#pc-privacy-header",
        P_Policy_Txt: "#pc-policy-text",
        P_Manage_Cookies_Txt: "#manage-cookies-text",
        P_Vendor_Title: "#vendors-list-title",
        P_Vendor_Title_Elm: "#vendors-list-title",
        P_Vendor_List: "#vendors-list",
        P_Vendor_Content: "#vendor-list-content",
        P_Vendor_Container: "#vendors-list-container",
        P_Ven_Bx: "vendor-box",
        P_Ven_Name: ".vendor-title",
        P_Ven_Link: ".vendor-privacy-notice",
        P_Ven_Leg_Claim: ".vendor-legclaim-link",
        P_Ven_Ctgl: "ot-vendor-consent-tgl",
        P_Ven_Ltgl: "ot-leg-int-tgl",
        P_Ven_Ltgl_Only: "ot-leg-int-tgl-only",
        P_Ven_Opts: ".vendor-options",
        P_Triangle: "#ot-triangle",
        P_Fltr_Modal: "#ot-filter-modal",
        P_Fltr_Options: ".ot-group-options",
        P_Fltr_Option: ".ot-group-option",
        P_Select_Cntr: "#select-all-container",
        P_Host_Cntr: "#hosts-list-container",
        P_Host_Hdr: ".host-info",
        P_Host_Desc: ".host-description",
        P_Host_Opt: ".host-option-group",
        P_Host_Info: ".vendor-host",
        P_Ven_Dets: ".vendor-purpose-groups",
        P_Ven_Disc: ".ot-ven-disc",
        P_Gven_List: "#ot-gn-venlst",
        P_Arrw_Cntr: ".ot-arrow-container",
        P_Li_Hdr: ".leg-int-header",
        P_Li_Title: ".leg-int-title",
        P_Acc_Txt: ".accordion-text",
        P_Tgl_Cntr: ".ot-toggle-group",
        P_CBx_Cntr: ".ot-chkbox-container",
        P_Host_Title: ".host-title",
        P_Leg_Select_All: ".leg-int-sel-all-hdr",
        P_Leg_Header: ".leg-int-hdr",
        P_Cnsnt_Header: ".consent-hdr",
        P_Acc_Header: ".accordion-header",
        P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
        P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
        P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
        P_Sel_All_Host_El: "select-all-hosts-input-container",
        P_Sel_All_Vendor_Consent_El: "select-all-vendors-input-container",
        P_Sel_All_Vendor_Leg_El: "select-all-vendors-leg-input-container",
        P_c_Name: "cookie-name-container",
        P_c_Host: "cookie-host-container",
        P_c_Duration: "cookie-duration-container",
        P_c_Type: "cookie-type-container",
        P_c_Category: "cookie-category-container",
        P_c_Desc: "cookie-description-container",
        P_Host_View_Cookies: ".host-view-cookies",
        P_Vendor_CheckBx: "vendor-chkbox",
        P_Vendor_LegCheckBx: "vendor-leg-chkbox",
        P_Host_UI: "hosts-list",
        P_Host_Cnt: "host-list-content",
        P_Host_Bx: "host-box",
        P_Ven_Lst_Cntr: ".category-vendors-list-container",
        P_Host_Lst_cntr: ".category-host-list-container",
        P_Subgrp_Desc: ".cookie-subgroups-description-legal",
        P_Subgp_ul: ".cookie-subgroups",
        P_Subgrp_li: ".cookie-subgroup",
        P_Subgrp_Tgl_Cntr: ".cookie-subgroup-toggle",
        P_Active_Menu: "active-group",
        P_Tab_Grp_Hdr: "group-toggle",
        P_Search_Cntr: "#search-container",
        P_Clr_Fltr_Txt: "#clear-filters-handler p",
        P_Vendor_Search_Input: "#vendor-search-handler"
    }, _t = {
        GroupTypes: {
            Cookie: "COOKIE",
            Bundle: "BRANCH",
            Ft: "IAB2_FEATURE",
            Pur: "IAB2_PURPOSE",
            Spl_Ft: "IAB2_SPL_FEATURE",
            Spl_Pur: "IAB2_SPL_PURPOSE",
            Stack: "IAB2_STACK"
        },
        IdPatterns: {
            Pur: "IABV2_",
            Ft: "IFEV2_",
            Spl_Pur: "ISPV2_",
            Spl_Ft: "ISFV2_"
        }
    }, Et = {
        GroupTypes: {
            Cookie: "COOKIE",
            Bundle: "BRANCH",
            Ft: "IAB2V2_FEATURE",
            Pur: "IAB2V2_PURPOSE",
            Spl_Ft: "IAB2V2_SPL_FEATURE",
            Spl_Pur: "IAB2V2_SPL_PURPOSE",
            Stack: "IAB2V2_STACK"
        },
        IdPatterns: {
            Pur: "IAB2V2_",
            Ft: "IFE2V2_",
            Spl_Pur: "ISP2V2_",
            Spl_Ft: "ISF2V2_"
        }
    };
    t.prototype.getPurposeOneGrpId = function () {
        return P.IdPatterns.Pur + "1"
    }
        ,
        t.prototype.setRegionRule = function (e) {
            this.rule = e
        }
        ,
        t.prototype.getRegionRule = function () {
            return this.rule
        }
        ,
        t.prototype.getRegionRuleType = function () {
            return this.multiVariantTestingEnabled && this.selectedVariant ? this.selectedVariant.TemplateType : this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition.TemplateType : this.rule.Type
        }
        ,
        t.prototype.canUseGoogleVendors = function (e) {
            return !!e && (this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition : this.rule).UseGoogleVendors
        }
        ,
        t.prototype.initVariables = function () {
            this.consentableGrps = [],
                this.consentableIabGrps = [],
                this.iabGrps = [],
                this.iabGrpIdMap = {},
                this.domainGrps = {},
                this.iabGroups = {
                    purposes: {},
                    legIntPurposes: {},
                    specialPurposes: {},
                    features: {},
                    specialFeatures: {}
                }
        }
        ,
        t.prototype.init = function (e) {
            this.getGPCSignal(),
                this.initVariables();
            var t = null;
            this.setPublicDomainData(JSON.parse(JSON.stringify(t))),
                this.domainDataMapper(t),
                this.commonDataMapper(e.CommonData),
                A.NtfyConfig = e.NtfyConfig || {},
                this.setBannerName(),
                this.setPcName(),
                this.populateGPCSignal(),
                this.populateGPCBrowserSignal(),
                A.GoogleConsent.GCEnable && this.initGCM()
        }
        ,
        t.prototype.getGPCSignal = function () {
            navigator.globalPrivacyControl ? this.gpcEnabled = !0 : this.gpcEnabled = !1
        }
        ,
        t.prototype.isValidConsentNoticeGroup = function (e, t) {
            var o, n, r, i, s;
            return !!e.ShowInPopup && (o = this.isGroupHasCookies(e),
                i = r = n = !1,
                null != (s = e) && s.Parent || (e.SubGroups.length && (n = e.SubGroups.some(function (e) {
                    return e.GroupName && e.ShowInPopup && e.FirstPartyCookies.length
                }),
                    r = e.SubGroups.some(function (e) {
                        return e.GroupName && e.ShowInPopup && (e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length)
                    }),
                    !t || e.FirstPartyCookies.length && e.Hosts.length || (i = !e.SubGroups.some(function (e) {
                        return -1 === mt.indexOf(e.Type)
                    }))),
                    s = e.SubGroups.some(function (e) {
                        return -1 < mt.indexOf(e.Type)
                    }),
                    (-1 < mt.indexOf(e.Type) || s) && (e.ShowVendorList = !0),
                    (e.Hosts.length || r || n) && (e.ShowHostList = !0)),
                this.isValidGroup(o, e, n, r, i))
        }
        ,
        t.prototype.isValidGroup = function (e, t, o, n, r) {
            return e || -1 < mt.indexOf(t.Type) || o || n || r
        }
        ,
        t.prototype.isGroupHasCookies = function (e) {
            return e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || e.VendorServices && e.VendorServices.length
        }
        ,
        t.prototype.extractGroupIdForIabGroup = function (e) {
            return -1 < e.indexOf(P.IdPatterns.Spl_Pur) ? e = e.replace(P.IdPatterns.Spl_Pur, "") : -1 < e.indexOf(P.IdPatterns.Pur) ? e = e.replace(P.IdPatterns.Pur, "") : -1 < e.indexOf(P.IdPatterns.Ft) ? e = e.replace(P.IdPatterns.Ft, "") : -1 < e.indexOf(P.IdPatterns.Spl_Ft) && (e = e.replace(P.IdPatterns.Spl_Ft, "")),
                e
        }
        ,
        t.prototype.isIabGrpAndNonConsentable = function (e) {
            var t = P.GroupTypes;
            return !this.isIab2orv2Template && -1 < mt.indexOf(e.Type) || this.isIab2orv2Template && (e.Type === t.Pur || e.Type === t.Stack) && !e.HasConsentOptOut && !e.HasLegIntOptOut || e.Type === t.Spl_Ft && !e.HasConsentOptOut
        }
        ,
        t.prototype.setTcfPurposeParentMapForGrp = function (e) {
            var t = P.GroupTypes;
            if (this.isTcfV2Template && e.Parent)
                switch (e.Type) {
                    case t.Pur:
                        this.tcfParentMap.pur.set(parseInt(e.IabGrpId), e.Parent);
                        break;
                    case t.Spl_Pur:
                        this.tcfParentMap.spl_pur.set(parseInt(e.IabGrpId), e.Parent);
                        break;
                    case t.Ft:
                        this.tcfParentMap.ft.set(parseInt(e.IabGrpId), e.Parent);
                        break;
                    case t.Spl_Ft:
                        this.tcfParentMap.spl_ft.set(parseInt(e.IabGrpId), e.Parent)
                }
        }
        ,
        t.prototype.populateGroups = function (e, t) {
            var r = this
                , i = {}
                , s = []
                , a = P.GroupTypes
                , o = (e.forEach(function (e) {
                    var t = e.CustomGroupId;
                    if (void 0 !== e.HasConsentOptOut && e.IsIabPurpose || (e.HasConsentOptOut = !0),
                        !r.isIabGrpAndNonConsentable(e)) {
                        if (t !== T.getPurposeOneGrpId() || e.ShowInPopup || (r.purposeOneTreatment = !0),
                            r.grpContainLegalOptOut = e.HasLegIntOptOut || r.grpContainLegalOptOut,
                            e.SubGroups = [],
                            e.Parent ? s.push(e) : i[t] = e,
                            r.isIab2orv2Template && -1 < mt.indexOf(e.Type)) {
                            var o = r.extractGroupIdForIabGroup(t)
                                , n = (r.iabGrpIdMap[t] = o,
                                    e.IabGrpId = o,
                                {
                                    description: e.GroupDescription,
                                    descriptionLegal: e.DescriptionLegal,
                                    id: Number(o),
                                    name: e.GroupName
                                });
                            switch (e.Type) {
                                case a.Pur:
                                    r.iabGroups.purposes[o] = n;
                                    break;
                                case a.Spl_Pur:
                                    r.iabGroups.specialPurposes[o] = n;
                                    break;
                                case a.Ft:
                                    r.iabGroups.features[o] = n;
                                    break;
                                case a.Spl_Ft:
                                    r.iabGroups.specialFeatures[o] = n
                            }
                        }
                        r.setTcfPurposeParentMapForGrp(e)
                    }
                }),
                    s.forEach(function (e) {
                        i[e.Parent] && e.ShowInPopup && (e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || -1 < mt.indexOf(e.Type)) && i[e.Parent].SubGroups.push(e)
                    }),
                    []);
            return Object.keys(i).forEach(function (e) {
                r.isValidConsentNoticeGroup(i[e], t.IsIabEnabled) && (i[e].SubGroups.sort(function (e, t) {
                    return e.Order - t.Order
                }),
                    o.push(i[e]))
            }),
                this.initGrpVar(o),
                o.sort(function (e, t) {
                    return e.Order - t.Order
                })
        }
        ,
        t.prototype.isGrpConsentable = function (e) {
            var t = P.GroupTypes;
            return e.Type === t.Cookie || e.Type === t.Pur || e.Type === t.Spl_Ft
        }
        ,
        t.prototype.initGrpVar = function (e) {
            var o = this
                , n = !0
                , r = !0;
            e.forEach(function (e) {
                q([e], e.SubGroups).forEach(function (e) {
                    var t;
                    o.isGrpConsentable(e) && (o.domainGrps[e.PurposeId.toLowerCase()] = e.CustomGroupId),
                        -1 < vt.indexOf(e.Type) && o.consentableGrps.push(e),
                        -1 < kt.indexOf(e.Type) && o.consentableIabGrps.push(e),
                        -1 === vt.indexOf(e.Type) && o.iabGrps.push(e),
                        o.gpcEnabled && e.IsGpcEnabled && (e.Status = C.INACTIVE),
                        (t = o.DNTEnabled && e.IsDntEnabled ? C.DNT : e.Status.toLowerCase()) !== C.ACTIVE && t !== C.INACTIVE_LANDING_PAGE && t !== C.DNT || (n = !1),
                        t !== C.INACTIVE_LANDING_PAGE && t !== C.ALWAYS_ACTIVE && (r = !1),
                        o.gpcForAGrpEnabled || (o.gpcForAGrpEnabled = e.IsGpcEnabled)
                })
            }),
                this.isOptInMode = n,
                this.isSoftOptInMode = r
        }
        ,
        t.prototype.domainDataMapper = function (e) {
            var t = {
                AriaClosePreferences: e.AriaClosePreferences,
                AriaOpenPreferences: e.AriaOpenPreferences,
                AriaPrivacy: e.AriaPrivacy,
                CenterRounded: e.CenterRounded,
                Flat: e.Flat,
                FloatingFlat: e.FloatingFlat,
                FloatingRounded: e.FloatingRounded,
                FloatingRoundedCorner: e.FloatingRoundedCorner,
                FloatingRoundedIcon: e.FloatingRoundedIcon,
                VendorLevelOptOut: e.IsIabEnabled,
                AboutCookiesText: e.AboutCookiesText,
                AboutLink: e.AboutLink,
                AboutText: e.AboutText,
                ActiveText: e.ActiveText,
                AddLinksToCookiepedia: e.AddLinksToCookiepedia,
                AlertAllowCookiesText: e.AlertAllowCookiesText,
                AlertCloseText: e.AlertCloseText,
                AlertLayout: e.AlertLayout,
                AlertMoreInfoText: e.AlertMoreInfoText,
                AlertNoticeText: e.AlertNoticeText,
                AllowAllText: e.PreferenceCenterConfirmText,
                AlwaysActiveText: e.AlwaysActiveText,
                AlwaysInactiveText: e.AlwaysInactiveText,
                BannerAdditionalDescPlacement: e.BannerAdditionalDescPlacement,
                BannerAdditionalDescription: e.BannerAdditionalDescription,
                BannerCloseButtonText: e.BannerCloseButtonText,
                BannerFeatureDescription: e.BannerFeatureDescription,
                BannerFeatureTitle: e.BannerFeatureTitle,
                BannerIABPartnersLink: e.BannerIABPartnersLink,
                BannerInformationDescription: e.BannerInformationDescription,
                BannerInformationTitle: e.BannerInformationTitle,
                BannerNonIABVendorListText: e.BannerNonIABVendorListText,
                BannerPosition: e.BannerPosition,
                BannerPurposeDescription: e.BannerPurposeDescription,
                BannerPurposeTitle: e.BannerPurposeTitle,
                BannerRejectAllButtonText: e.BannerRejectAllButtonText,
                BannerRelativeFontSizesToggle: e.BannerRelativeFontSizesToggle,
                BannerSettingsButtonDisplayLink: e.BannerSettingsButtonDisplayLink,
                BannerShowRejectAllButton: e.BannerShowRejectAllButton,
                BShowOptOutSignal: e.BShowOptOutSignal,
                BOptOutSignalText: e.BOptOutSignalText,
                BRegionAriaLabel: e.BRegionAriaLabel,
                BannerTitle: e.BannerTitle,
                BCloseButtonType: e.BCloseButtonType,
                BContinueText: e.BContinueText,
                BCookiePolicyLinkScreenReader: e.BCookiePolicyLinkScreenReader,
                BnrLogoAria: e.BnrLogoAria,
                BImprintLinkScreenReader: e.BImprintLinkScreenReader,
                BInitialFocus: e.BInitialFocus,
                BInitialFocusLinkAndButton: e.BInitialFocusLinkAndButton,
                BRejectConsentType: e.BRejectConsentType,
                BSaveBtnTxt: e.BSaveBtnText,
                BShowImprintLink: e.BShowImprintLink,
                BShowPolicyLink: e.BShowPolicyLink,
                BShowSaveBtn: e.BShowSaveBtn,
                cctId: e.cctId,
                ChoicesBanner: e.ChoicesBanner,
                CloseShouldAcceptAllCookies: e.CloseShouldAcceptAllCookies,
                CloseText: e.CloseText,
                ConfirmText: e.ConfirmText,
                ConsentModel: {
                    Name: e.ConsentModel
                },
                CookieListDescription: e.CookieListDescription,
                CookieListTitle: e.CookieListTitle,
                CookieSettingButtonText: e.CookieSettingButtonText,
                CookiesUsedText: e.CookiesUsedText,
                CustomJs: e.CustomJs,
                firstPartyTxt: e.CookieFirstPartyText,
                FooterDescriptionText: e.FooterDescriptionText,
                ForceConsent: e.ForceConsent,
                GeneralVendors: e.GeneralVendors,
                GeneralVendorsEnabled: e.PCenterUseGeneralVendorsToggle,
                GenVenOptOut: e.PCenterAllowVendorOptout,
                GlobalRestrictionEnabled: e.GlobalRestrictionEnabled,
                GlobalRestrictions: e.GlobalRestrictions,
                GoogleConsent: {
                    GCAdStorage: e.GCAdStorage,
                    GCAnalyticsStorage: e.GCAnalyticsStorage,
                    GCEnable: e.GCEnable,
                    GCFunctionalityStorage: e.GCFunctionalityStorage,
                    GCPersonalizationStorage: e.GCPersonalizationStorage,
                    GCRedactEnable: e.GCRedactEnable,
                    GCSecurityStorage: e.GCSecurityStorage,
                    GCWaitTime: e.GCWaitTime,
                    GCAdUserData: e.GCAdUserData,
                    GCAdPersonalization: e.GCAdPersonalization
                },
                GroupGenVenListLabel: e.PCenterGeneralVendorThirdPartyCookiesText,
                Groups: this.populateGroups(e.Groups, e),
                HideToolbarCookieList: e.HideToolbarCookieList,
                IabType: e.IabType,
                InactiveText: e.InactiveText,
                IsConsentLoggingEnabled: e.IsConsentLoggingEnabled,
                IsIabEnabled: e.IsIabEnabled,
                IsIabThirdPartyCookieEnabled: e.IsIabThirdPartyCookieEnabled,
                IsLifespanEnabled: e.IsLifespanEnabled,
                Language: e.Language,
                LastReconsentDate: e.LastReconsentDate,
                LfSpanSecs: e.PCLifeSpanSecs,
                LfSpnWk: e.PCLifeSpanWk,
                LfSpnWks: e.PCLifeSpanWks,
                LfSpnYr: e.PCLifeSpanYr,
                LfSpnYrs: e.PCLifeSpanYrs,
                LifespanDurationText: e.LifespanDurationText,
                MainInfoText: e.MainInfoText,
                MainText: e.MainText,
                ManagePreferenceText: e.PreferenceCenterManagePreferencesText,
                NewVendorsInactiveEnabled: e.NewVendorsInactiveEnabled,
                NewWinTxt: e.PreferenceCenterMoreInfoScreenReader,
                NextPageAcceptAllCookies: e.NextPageAcceptAllCookies,
                NextPageCloseBanner: e.NextPageCloseBanner,
                NoBanner: e.NoBanner,
                OnClickAcceptAllCookies: e.OnClickAcceptAllCookies,
                OnClickCloseBanner: e.OnClickCloseBanner,
                OverriddenVendors: null != (t = e.OverriddenVendors) ? t : {},
                OverridenGoogleVendors: null != (t = e.OverridenGoogleVendors) ? t : {},
                Publisher: e.publisher,
                PublisherCC: e.PublisherCC,
                ReconsentFrequencyDays: e.ReconsentFrequencyDays,
                ScrollAcceptAllCookies: e.ScrollAcceptAllCookies,
                ScrollCloseBanner: e.ScrollCloseBanner,
                ShowAlertNotice: e.ShowAlertNotice,
                showBannerCloseButton: e.showBannerCloseButton,
                ShowPreferenceCenterCloseButton: e.ShowPreferenceCenterCloseButton,
                ThirdPartyCookieListText: e.ThirdPartyCookieListText,
                thirdPartyTxt: e.CookieThirdPartyText,
                UseGoogleVendors: this.canUseGoogleVendors(e.PCTemplateUpgrade),
                VendorConsentModel: e.VendorConsentModel,
                VendorListText: e.VendorListText,
                Vendors: e.Vendors,
                PCCategoryStyle: e.PCCategoryStyle || ke.Checkbox,
                PCShowAlwaysActiveToggle: e.PCShowAlwaysActiveToggle,
                PCenterImprintLinkScreenReader: e.PCenterImprintLinkScreenReader,
                PCenterImprintLinkText: e.PCenterImprintLinkText,
                PCenterImprintLinkUrl: e.PCenterImprintLinkUrl,
                PCShowOptOutSignal: e.PCShowOptOutSignal,
                PCOptOutSignalText: e.PCOptOutSignalText,
                PCRegionAriaLabel: e.PCRegionAriaLabel,
                PCHostNotFound: e.PCHostNotFound,
                PCVendorNotFound: e.PCVendorNotFound,
                PCTechNotFound: e.PCTechNotFound,
                UseNonStandardStacks: e.UseNonStandardStacks
            };
            this.setPCDomainData(t, e),
                this.setAdditionalTechnologies(t, e),
                this.setVendorServiceConfigData(t, e),
                this.setDomainCommonDataDefaults(t, e),
                this.setDomainPCDataDefaults(t, e),
                this.setGppData(t, e),
                e.PCTemplateUpgrade && (e.Center || e.Panel) && (t.PCAccordionStyle = e.PCAccordionStyle),
                t.PCenterEnableAccordion = e.PCAccordionStyle !== ce.NoAccordion,
                this.legIntSettings = e.LegIntSettings || {},
                void 0 === this.legIntSettings.PAllowLI && (this.legIntSettings.PAllowLI = !0),
                //m.moduleInitializer.MobileSDK ||
                (this.pagePushedDown = e.BannerPushesDownPage),
                A = R(R({}, A), t)
        }
        ,
        t.prototype.setGppData = function (e, t) {
            e.GPPPurposes = R({}, t.GPPPurposes),
                e.IsGPPDataProcessingApplicable = t.IsGPPDataProcessingApplicable,
                e.IsGPPEnabled = t.IsGPPEnabled,
                e.IsGPPKnownChildApplicable = t.IsGPPKnownChildApplicable,
                e.IsMSPAEnabled = t.IsMSPAEnabled,
                e.MSPAOptionMode = t.MSPAOptionMode,
                e.UseGPPUSNational = t.UseGPPUSNational
        }
        ,
        t.prototype.setPCDomainData = function (e, t) {
            e.PCAccordionStyle = ce.Caret,
                e.PCActiveText = t.PCActiveText,
                e.PCCloseButtonType = t.PCCloseButtonType,
                e.PCContinueText = t.PCContinueText,
                e.PCCookiePolicyLinkScreenReader = t.PCCookiePolicyLinkScreenReader,
                e.PCCookiePolicyText = t.PCCookiePolicyText,
                e.PCenterAllowAllConsentText = t.PCenterAllowAllConsentText,
                e.PCenterApplyFiltersText = t.PCenterApplyFiltersText,
                e.PCenterBackText = t.PCenterBackText,
                e.PCenterCancelFiltersText = t.PCenterCancelFiltersText,
                e.PCenterClearFiltersText = t.PCenterClearFiltersText,
                e.PCenterCookiesListText = t.PCenterCookiesListText,
                e.PCenterEnableAccordion = t.PCenterEnableAccordion,
                e.PCenterFilterText = t.PCenterFilterText,
                e.PCenterGeneralVendorsText = t.PCenterGeneralVendorsText,
                e.PCenterRejectAllButtonText = t.PCenterRejectAllButtonText,
                e.PCenterSelectAllVendorsText = t.PCenterSelectAllVendorsText,
                e.PCenterShowRejectAllButton = t.PCenterShowRejectAllButton,
                e.PCenterUserIdDescriptionText = t.PCenterUserIdDescriptionText,
                e.PCenterUserIdNotYetConsentedText = t.PCenterUserIdNotYetConsentedText,
                e.PCenterUserIdTimestampTitleText = t.PCenterUserIdTimestampTitleText,
                e.PCenterUserIdTitleText = t.PCenterUserIdTitleText,
                e.PCenterVendorListDescText = t.PCenterVendorListDescText,
                e.PCenterVendorListDisclosure = t.PCenterVendorListDisclosure,
                e.PCenterVendorListLifespan = t.PCenterVendorListLifespan,
                e.PCenterVendorListLifespanDay = t.PCenterVendorListLifespanDay,
                e.PCenterVendorListLifespanDays = t.PCenterVendorListLifespanDays,
                e.PCenterVendorListLifespanMonth = t.PCenterVendorListLifespanMonth,
                e.PCenterVendorListLifespanMonths = t.PCenterVendorListLifespanMonths,
                e.PCenterVendorListNonCookieUsage = t.PCenterVendorListNonCookieUsage,
                e.PCenterVendorListStorageDomain = t.PCenterVendorListStorageDomain,
                e.PCVLSDomainsUsed = t.PCVLSDomainsUsed,
                e.PCVLSUse = t.PCVLSUse,
                e.PCenterVendorListStorageIdentifier = t.PCenterVendorListStorageIdentifier,
                e.PCenterVendorListStoragePurposes = t.PCenterVendorListStoragePurposes,
                e.PCenterVendorListStorageType = t.PCenterVendorListStorageType,
                e.PCenterVendorsListText = t.PCenterVendorsListText,
                e.PCenterViewPrivacyPolicyText = t.PCenterViewPrivacyPolicyText,
                e.PCGoogleVendorsText = t.PCGoogleVendorsText,
                e.PCGrpDescLinkPosition = t.PCGrpDescLinkPosition,
                e.PCGrpDescType = t.PCGrpDescType,
                e.PCGVenPolicyTxt = t.PCGeneralVendorsPolicyText,
                e.PCIABVendorsText = t.PCIABVendorsText,
                e.PCIABVendorLegIntClaimText = t.PCIABVendorLegIntClaimText,
                e.PCVListDataDeclarationText = t.PCVListDataDeclarationText,
                e.PCVListDataRetentionText = t.PCVListDataRetentionText,
                e.PCVListStdRetentionText = t.PCVListStdRetentionText,
                e.IABDataCategories = t.IABDataCategories,
                e.PCInactiveText = t.PCInactiveText,
                e.PCIllusText = t.PCIllusText,
                e.PCLogoAria = t.PCLogoScreenReader,
                e.PCOpensCookiesDetailsAlert = t.PCOpensCookiesDetailsAlert,
                e.PCenterVendorListScreenReader = t.PCenterVendorListScreenReader,
                e.PCOpensVendorDetailsAlert = t.PCOpensVendorDetailsAlert,
                e.PCenterDynamicRenderingEnable = t.PCenterDynamicRenderingEnable,
                e.PCTemplateUpgrade = t.PCTemplateUpgrade,
                e.PCVendorFullLegalText = t.PCVendorFullLegalText,
                e.PCViewCookiesText = t.PCViewCookiesText,
                e.PCLayout = {
                    Center: t.Center,
                    List: t.List,
                    Panel: t.Panel,
                    Popup: t.Popup,
                    Tab: t.Tab
                },
                e.PCenterVendorListLinkText = t.PCenterVendorListLinkText,
                e.PCenterVendorListLinkAriaLabel = t.PCenterVendorListLinkAriaLabel,
                e.PreferenceCenterPosition = t.PreferenceCenterPosition,
                e.PCVendorsCountText = t.PCVendorsCountText
        }
        ,
        t.prototype.setVendorServiceConfigData = function (e, t) {
            e.VendorServiceConfig = {
                PCVSOptOut: t.PCVSOptOut,
                PCVSEnable: t.PCVSEnable,
                PCVSExpandCategory: t.PCVSExpandCategory,
                PCVSExpandGroup: t.PCVSExpandGroup,
                PCVSCategoryView: t.PCVSCategoryView,
                PCVSNameText: t.PCVSNameText,
                PCVSAllowAllText: t.PCVSAllowAllText,
                PCVSListTitle: t.PCVSListTitle,
                PCVSParentCompanyText: t.PCVSParentCompanyText,
                PCVSAddressText: t.PCVSAddressText,
                PCVSDefaultCategoryText: t.PCVSDefaultCategoryText,
                PCVSDefaultDescriptionText: t.PCVSDefaultDescriptionText,
                PCVSDPOEmailText: t.PCVSDPOEmailText,
                PCVSDPOLinkText: t.PCVSDPOLinkText,
                PCVSPrivacyPolicyLinkText: t.PCVSPrivacyPolicyLinkText,
                PCVSCookiePolicyLinkText: t.PCVSCookiePolicyLinkText,
                PCVSOptOutLinkText: t.PCVSOptOutLinkText,
                PCVSLegalBasisText: t.PCVSLegalBasisText
            }
        }
        ,
        t.prototype.setAdditionalTechnologies = function (e, t) {
            e.AdditionalTechnologiesConfig = {
                PCShowTrackingTech: t.PCShowTrackingTech,
                PCCookiesLabel: t.PCCookiesLabel,
                PCTechDetailsText: t.PCTechDetailsText,
                PCTrackingTechTitle: t.PCTrackingTechTitle,
                PCLocalStorageLabel: t.PCLocalStorageLabel,
                PCSessionStorageLabel: t.PCSessionStorageLabel,
                PCTechDetailsAriaLabel: t.PCTechDetailsAriaLabel,
                PCLocalStorageDurationText: t.PCLocalStorageDurationText,
                PCSessionStorageDurationText: t.PCSessionStorageDurationText
            }
        }
        ,
        t.prototype.setDomainCommonDataDefaults = function (e, t) {
            e.AdvancedAnalyticsCategory = t.AdvancedAnalyticsCategory || "",
                e.BannerDPDDescription = t.BannerDPDDescription || [],
                e.BannerDPDDescriptionFormat = t.BannerDPDDescriptionFormat || "",
                e.BannerDPDTitle = t.BannerDPDTitle || "",
                e.CategoriesText = t.CategoriesText || "Categories",
                e.CookiesText = t.CookiesText || "Cookies",
                e.CookiesDescText = t.CookiesDescText || "Description",
                e.LifespanText = t.LifespanText || "Lifespan",
                e.LifespanTypeText = t.LifespanTypeText || "Session",
                e.PCenterConsentText = t.PCenterConsentText || "Consent"
        }
        ,
        t.prototype.setDomainPCDataDefaults = function (e, t) {
            e.PCenterCookieListFilterAria = t.PCenterCookieListFilterAria || "Filter",
                e.PCenterCookieListSearch = t.PCenterCookieListSearch || "Search",
                e.PCenterCookieSearchAriaLabel = t.PCenterCookieSearchAriaLabel || "Cookie list search",
                e.PCenterFilterAppliedAria = t.PCenterFilterAppliedAria || "Applied",
                e.PCenterFilterClearedAria = t.PCenterFilterClearedAria || "Filters Cleared",
                e.PCenterLegIntColumnHeader = t.PCenterLegIntColumnHeader || "Legitimate Interest",
                e.PCenterLegitInterestText = t.PCenterLegitInterestText || "Legitimate Interest",
                e.PCenterVendorListFilterAria = t.PCenterVendorListFilterAria || "Filter",
                e.PCenterVendorListSearch = t.PCenterVendorListSearch || "Search",
                e.PCenterVendorSearchAriaLabel = t.PCenterVendorSearchAriaLabel || "Vendor list search",
                e.PCFirstPartyCookieListText = t.PCFirstPartyCookieListText || "First Party Cookies",
                e.PCShowConsentLabels = !(!t.Tab || !t.PCTemplateUpgrade) && t.PCShowConsentLabels,
                e.PCShowPersistentCookiesHoverButton = t.PCShowPersistentCookiesHoverButton || !1
        }
        ,
        t.prototype.commonDataMapper = function (e) {
            var t = {
                iabThirdPartyConsentUrl: e.IabThirdPartyCookieUrl,
                optanonHideAcceptButton: e.OptanonHideAcceptButton,
                optanonHideCookieSettingButton: e.OptanonHideCookieSettingButton,
                optanonStyle: e.OptanonStyle,
                optanonStaticContentLocation: e.OptanonStaticContentLocation,
                bannerCustomCSS: e.BannerCustomCSS.replace(/\\n/g, ""),
                pcCustomCSS: e.PCCustomCSS.replace(/\\n/g, ""),
                textColor: e.TextColor,
                buttonColor: e.ButtonColor,
                buttonTextColor: e.ButtonTextColor,
                bannerMPButtonColor: e.BannerMPButtonColor,
                bannerMPButtonTextColor: e.BannerMPButtonTextColor,
                backgroundColor: e.BackgroundColor,
                bannerAccordionBackgroundColor: e.BannerAccordionBackgroundColor,
                BContinueColor: e.BContinueColor,
                PCContinueColor: e.PCContinueColor,
                pcTextColor: e.PcTextColor,
                pcButtonColor: e.PcButtonColor,
                pcButtonTextColor: e.PcButtonTextColor,
                pcAccordionBackgroundColor: e.PcAccordionBackgroundColor,
                pcLinksTextColor: e.PcLinksTextColor,
                bannerLinksTextColor: e.BannerLinksTextColor,
                pcEnableToggles: e.PcEnableToggles,
                pcBackgroundColor: e.PcBackgroundColor,
                pcMenuColor: e.PcMenuColor,
                pcMenuHighLightColor: e.PcMenuHighLightColor,
                legacyBannerLayout: e.LegacyBannerLayout,
                optanonLogo: e.OptanonLogo,
                oneTrustFtrLogo: e.OneTrustFooterLogo,
                optanonCookieDomain: e.OptanonCookieDomain,
                cookiePersistentLogo: e.CookiePersistentLogo,
                optanonGroupIdPerformanceCookies: e.OptanonGroupIdPerformanceCookies,
                optanonGroupIdFunctionalityCookies: e.OptanonGroupIdFunctionalityCookies,
                optanonGroupIdTargetingCookies: e.OptanonGroupIdTargetingCookies,
                optanonGroupIdSocialCookies: e.OptanonGroupIdSocialCookies,
                optanonShowSubGroupCookies: e.ShowSubGroupCookies,
                useRTL: e.UseRTL,
                showBannerCookieSettings: e.ShowBannerCookieSettings,
                showBannerAcceptButton: e.ShowBannerAcceptButton,
                showCookieList: e.ShowCookieList,
                allowHostOptOut: e.AllowHostOptOut,
                CookiesV2NewCookiePolicy: e.CookiesV2NewCookiePolicy,
                cookieListTitleColor: e.CookieListTitleColor,
                cookieListGroupNameColor: e.CookieListGroupNameColor,
                cookieListTableHeaderColor: e.CookieListTableHeaderColor,
                CookieListTableHeaderBackgroundColor: e.CookieListTableHeaderBackgroundColor,
                cookieListPrimaryColor: e.CookieListPrimaryColor,
                cookieListCustomCss: e.CookieListCustomCss,
                pcShowCookieHost: e.PCShowCookieHost,
                pcShowCookieDuration: e.PCShowCookieDuration,
                pcShowCookieType: e.PCShowCookieType,
                pcShowCookieCategory: e.PCShowCookieCategory,
                pcShowCookieDescription: e.PCShowCookieDescription,
                ConsentIntegration: e.ConsentIntegration,
                ConsentPurposesText: e.BConsentPurposesText || "Consent Purposes",
                FeaturesText: e.BFeaturesText || "Features",
                LegitimateInterestPurposesText: e.BLegitimateInterestPurposesText || "Legitimate Interest Purposes",
                ConsentText: e.BConsentText || "Consent",
                LegitInterestText: e.BLegitInterestText || "Legit. Interest",
                pcDialogClose: e.PCDialogClose || "dialog closed",
                pCFooterLogoUrl: e.PCFooterLogoUrl,
                SpecialFeaturesText: e.BSpecialFeaturesText || "Special Features",
                SpecialPurposesText: e.BSpecialPurposesText || "Special Purposes",
                pcCListName: e.PCCListName || "Name",
                pcCListHost: e.PCCListHost || "Host",
                pcCListDuration: e.PCCListDuration || "Duration",
                pcCListType: e.PCCListType || "Type",
                pcCListCategory: e.PCCListCategory || "Category",
                pcCListDescription: e.PCCListDescription || "Description",
                IabLegalTextUrl: e.IabLegalTextUrl,
                pcLegIntButtonColor: e.PcLegIntButtonColor,
                pcLegIntButtonTextColor: e.PcLegIntButtonTextColor,
                PCenterExpandToViewText: e.PCenterExpandToViewText,
                BCategoryContainerColor: e.BCategoryContainerColor,
                BCategoryStyleColor: e.BCategoryStyleColor,
                BLineBreakColor: e.BLineBreakColor,
                BSaveBtnColor: e.BSaveBtnColor,
                BCategoryStyle: e.BCategoryStyle,
                BAnimation: e.BAnimation,
                BFocusBorderColor: e.BFocusBorderColor,
                PCFocusBorderColor: e.PCFocusBorderColor,
                BnrLogo: e.BnrLogo,
                OTCloseBtnLogo: e.OTCloseBtnLogo,
                OTExternalLinkLogo: e.OTExternalLinkLogo
            };
            this.cookieListMapper(t, e),
                A = R(R({}, A), t),
                this.pubDomainData.CookiesV2NewCookiePolicy = e.CookiesV2NewCookiePolicy
        }
        ,
        t.prototype.cookieListMapper = function (e, t) {
            e.TTLGroupByTech = t.TTLGroupByTech,
                e.TTLShowTechDesc = t.TTLShowTechDesc
        }
        ,
        t.prototype.setPublicDomainData = function (n) {
            this.pubDomainData = {
                AboutCookiesText: n.AboutCookiesText,
                AboutLink: n.AboutLink,
                AboutText: n.AboutText,
                ActiveText: n.ActiveText,
                AddLinksToCookiepedia: n.AddLinksToCookiepedia,
                AlertAllowCookiesText: n.AlertAllowCookiesText,
                AlertCloseText: n.AlertCloseText,
                AlertLayout: n.AlertLayout,
                AlertMoreInfoText: n.AlertMoreInfoText,
                AlertNoticeText: n.AlertNoticeText,
                AllowAllText: n.PreferenceCenterConfirmText,
                AlwaysActiveText: n.AlwaysActiveText,
                AlwaysInactiveText: n.AlwaysInactiveText,
                BAnimation: n.BAnimation,
                BannerCloseButtonText: n.BannerCloseButtonText,
                BannerDPDDescription: n.BannerDPDDescription || [],
                BannerDPDDescriptionFormat: n.BannerDPDDescriptionFormat || "",
                BannerDPDTitle: n.BannerDPDTitle || "",
                BannerFeatureDescription: n.BannerFeatureDescription,
                BannerFeatureTitle: n.BannerFeatureTitle,
                BannerIABPartnersLink: n.BannerIABPartnersLink,
                BannerInformationDescription: n.BannerInformationDescription,
                BannerInformationTitle: n.BannerInformationTitle,
                BannerPosition: n.BannerPosition,
                BannerPurposeDescription: n.BannerPurposeDescription,
                BannerPurposeTitle: n.BannerPurposeTitle,
                BannerRejectAllButtonText: n.BannerRejectAllButtonText,
                BannerRelativeFontSizesToggle: n.BannerRelativeFontSizesToggle,
                BannerSettingsButtonDisplayLink: n.BannerSettingsButtonDisplayLink,
                BannerShowRejectAllButton: n.BannerShowRejectAllButton,
                BannerTitle: n.BannerTitle,
                BCategoryContainerColor: n.BCategoryContainerColor,
                BCategoryStyle: n.BCategoryStyle,
                BCategoryStyleColor: n.BCategoryStyleColor,
                BCloseButtonType: n.BCloseButtonType,
                BContinueText: n.BContinueText,
                BInitialFocus: n.BInitialFocus,
                BInitialFocusLinkAndButton: n.BInitialFocusLinkAndButton,
                BLineBreakColor: n.BLineBreakColor,
                BRejectConsentType: n.BRejectConsentType,
                BSaveBtnColor: n.BSaveBtnColor,
                BSaveBtnTxt: n.BSaveBtnText,
                BShowSaveBtn: n.BShowSaveBtn,
                CategoriesText: n.CategoriesText,
                cctId: n.cctId,
                ChoicesBanner: n.ChoicesBanner,
                CloseShouldAcceptAllCookies: n.CloseShouldAcceptAllCookies,
                CloseText: n.CloseText,
                ConfirmText: n.ConfirmText,
                ConsentIntegrationData: null,
                ConsentModel: {
                    Name: n.ConsentModel
                },
                CookieListDescription: n.CookieListDescription,
                CookieListTitle: n.CookieListTitle,
                CookieSettingButtonText: n.CookieSettingButtonText,
                CookiesText: n.CookiesText,
                CookiesDescText: n.CookiesDescText,
                CookiesUsedText: n.CookiesUsedText,
                CustomJs: n.CustomJs,
                Domain: null,// m.moduleInitializer.Domain,
                FooterDescriptionText: n.FooterDescriptionText,
                ForceConsent: n.ForceConsent,
                GeneralVendors: n.GeneralVendors,
                GoogleConsent: {
                    GCAdStorage: n.GCAdStorage,
                    GCAnalyticsStorage: n.GCAnalyticsStorage,
                    GCEnable: n.GCEnable,
                    GCFunctionalityStorage: n.GCFunctionalityStorage,
                    GCPersonalizationStorage: n.GCPersonalizationStorage,
                    GCRedactEnable: n.GCRedactEnable,
                    GCSecurityStorage: n.GCSecurityStorage,
                    GCWaitTime: n.GCWaitTime,
                    GCAdUserData: n.GCAdUserData,
                    GCAdPersonalization: n.GCAdPersonalization
                },
                Groups: null,
                HideToolbarCookieList: n.HideToolbarCookieList,
                IabType: n.IabType,
                InactiveText: n.InactiveText,
                IsBannerLoaded: !1,
                IsConsentLoggingEnabled: n.IsConsentLoggingEnabled,
                IsIABEnabled: n.IsIabEnabled,
                IsIabThirdPartyCookieEnabled: n.IsIabThirdPartyCookieEnabled,
                IsLifespanEnabled: n.IsLifespanEnabled,
                Language: n.Language,
                LastReconsentDate: n.LastReconsentDate,
                LifespanDurationText: n.LifespanDurationText,
                LifespanText: n.LifespanText,
                LifespanTypeText: n.LifespanTypeText,
                MainInfoText: n.MainInfoText,
                MainText: n.MainText,
                ManagePreferenceText: n.PreferenceCenterManagePreferencesText,
                NextPageAcceptAllCookies: n.NextPageAcceptAllCookies,
                NextPageCloseBanner: n.NextPageCloseBanner,
                NoBanner: n.NoBanner,
                OnClickAcceptAllCookies: n.OnClickAcceptAllCookies,
                OnClickCloseBanner: n.OnClickCloseBanner,
                OverridenGoogleVendors: n.OverridenGoogleVendors,
                PCAccordionStyle: ce.Caret,
                PCCloseButtonType: n.PCCloseButtonType,
                PCContinueText: n.PCContinueText,
                PCenterAllowAllConsentText: n.PCenterAllowAllConsentText,
                PCenterApplyFiltersText: n.PCenterApplyFiltersText,
                PCenterBackText: n.PCenterBackText,
                PCenterCancelFiltersText: n.PCenterCancelFiltersText,
                PCenterClearFiltersText: n.PCenterClearFiltersText,
                PCenterCookieSearchAriaLabel: n.PCenterCookieSearchAriaLabel || "Cookie list search",
                PCenterCookiesListText: n.PCenterCookiesListText,
                PCenterEnableAccordion: n.PCenterEnableAccordion,
                PCenterExpandToViewText: n.PCenterExpandToViewText,
                PCenterFilterAppliedAria: n.PCenterFilterAppliedAria || "Applied",
                PCenterFilterClearedAria: n.PCenterFilterClearedAria || "Filters Cleared",
                PCenterFilterText: n.PCenterFilterText,
                PCenterRejectAllButtonText: n.PCenterRejectAllButtonText,
                PCenterSelectAllVendorsText: n.PCenterSelectAllVendorsText,
                PCenterShowRejectAllButton: n.PCenterShowRejectAllButton,
                PCenterUserIdDescriptionText: n.PCenterUserIdDescriptionText,
                PCenterUserIdNotYetConsentedText: n.PCenterUserIdNotYetConsentedText,
                PCenterUserIdTimestampTitleText: n.PCenterUserIdTimestampTitleText,
                PCenterUserIdTitleText: n.PCenterUserIdTitleText,
                PCenterVendorListDescText: n.PCenterVendorListDescText,
                PCenterVendorSearchAriaLabel: n.PCenterVendorSearchAriaLabel || "Vendor list search",
                PCenterVendorsListText: n.PCenterVendorsListText,
                PCenterViewPrivacyPolicyText: n.PCenterViewPrivacyPolicyText,
                PCFirstPartyCookieListText: n.PCFirstPartyCookieListText,
                PCGoogleVendorsText: n.PCGoogleVendorsText,
                PCGrpDescLinkPosition: n.PCGrpDescLinkPosition,
                PCGrpDescType: n.PCGrpDescType,
                PCIABVendorsText: n.PCIABVendorsText,
                PCIABVendorLegIntClaimText: n.PCIABVendorLegIntClaimText,
                PCVListDataDeclarationText: n.PCVListDataDeclarationText,
                PCVListDataRetentionText: n.PCVListDataRetentionText,
                PCVListStdRetentionText: n.PCVListStdRetentionText,
                IABDataCategories: n.IABDataCategories,
                PCLogoAria: n.PCLogoScreenReader,
                PCOpensCookiesDetailsAlert: n.PCOpensCookiesDetailsAlert,
                PCenterVendorListScreenReader: n.PCenterVendorListScreenReader,
                PCOpensVendorDetailsAlert: n.PCOpensVendorDetailsAlert,
                PCShowPersistentCookiesHoverButton: n.PCShowPersistentCookiesHoverButton,
                PCenterDynamicRenderingEnable: n.PCenterDynamicRenderingEnable,
                PCTemplateUpgrade: n.PCTemplateUpgrade,
                PCVendorFullLegalText: n.PCVendorFullLegalText,
                PCViewCookiesText: n.PCViewCookiesText,
                PCLayout: {
                    Center: n.Center,
                    List: n.List,
                    Panel: n.Panel,
                    Popup: n.Popup,
                    Tab: n.Tab
                },
                PCenterVendorListLinkText: n.PCenterVendorListLinkText,
                PCenterVendorListLinkAriaLabel: n.PCenterVendorListLinkAriaLabel,
                PCenterImprintLinkScreenReader: n.PCenterImprintLinkScreenReader,
                PCenterImprintLinkText: n.PCenterImprintLinkText,
                PCenterImprintLinkUrl: n.PCenterImprintLinkUrl,
                PreferenceCenterPosition: n.PreferenceCenterPosition,
                ScrollAcceptAllCookies: n.ScrollAcceptAllCookies,
                ScrollCloseBanner: n.ScrollCloseBanner,
                ShowAlertNotice: n.ShowAlertNotice,
                showBannerCloseButton: n.showBannerCloseButton,
                ShowPreferenceCenterCloseButton: n.ShowPreferenceCenterCloseButton,
                ThirdPartyCookieListText: n.ThirdPartyCookieListText,
                UseGoogleVendors: this.canUseGoogleVendors(n.PCTemplateUpgrade),
                VendorConsentModel: n.VendorConsentModel,
                VendorLevelOptOut: n.IsIabEnabled,
                VendorListText: n.VendorListText,
                CookiesV2NewCookiePolicy: !1
            },
                n.PCTemplateUpgrade && (n.Center || n.Panel) && n.PCAccordionStyle !== ce.NoAccordion && (this.pubDomainData.PCAccordionStyle = n.PCAccordionStyle),
                this.pubDomainData.PCenterEnableAccordion = n.PCAccordionStyle !== ce.NoAccordion;
            var r = [];
            n.Groups.forEach(function (e) {
                var t, o;
                !n.IsIabEnabled && e.IsIabPurpose || (e.Cookies = JSON.parse(JSON.stringify(e.FirstPartyCookies)),
                    o = null == (o = e.Hosts) ? void 0 : o.reduce(function (e, t) {
                        return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
                    }, []),
                    (t = e.Cookies).push.apply(t, o),
                    r.push(e))
            }),
                this.pubDomainData.Groups = r
        }
        ,
        t.prototype.setBannerScriptElement = function (e) {
            this.bannerScriptElement = e,
                this.setDomainElementAttributes()
        }
        ,
        t.prototype.setGCMcallback = function () {
            window.otEventListeners && window.otEventListeners.length && window.otEventListeners.forEach(function (e) {
                e && "consent.changed" === e.event && (T.gcmUpdateCallback = e.listener)
            })
        }
        ,
        t.prototype.setDomainElementAttributes = function () {
            this.bannerScriptElement && (this.bannerScriptElement.hasAttribute("data-document-language") && this.setUseDocumentLanguage("true" === this.bannerScriptElement.getAttribute("data-document-language")),
                this.bannerScriptElement.hasAttribute("data-ignore-ga") && (this.ignoreGoogleAnlyticsCall = "true" === this.bannerScriptElement.getAttribute("data-ignore-ga")),
                this.bannerScriptElement.hasAttribute("data-ignore-html")) && (this.ignoreInjectingHtmlCss = "true" === this.bannerScriptElement.getAttribute("data-ignore-html"))
        }
        ,
        t.prototype.setUseDocumentLanguage = function (e) {
            this.useDocumentLanguage = e
        }
        ,
        t.prototype.setPcName = function () {
            var e = A.PCLayout;
            e.Center ? this.pcName = nt : e.Panel ? this.pcName = it : e.Popup ? this.pcName = st : e.List ? this.pcName = rt : e.Tab && (this.pcName = g)
        }
        ,
        t.prototype.setBannerName = function () {
            A.Flat ? this.bannerName = Xe : A.FloatingRoundedCorner ? this.bannerName = Qe : A.FloatingFlat ? this.bannerName = $e : A.FloatingRounded ? this.bannerName = et : A.FloatingRoundedIcon ? this.bannerName = Ze : A.CenterRounded ? this.bannerName = Je : A.ChoicesBanner ? this.bannerName = tt : A.NoBanner && (this.bannerName = ot)
        }
        ,
        t.prototype.populateGPCSignal = function () {
            var e = k.readCookieParam(v.OPTANON_CONSENT, De.GPC_ENABLED)
                , t = this.gpcForAGrpEnabled && this.gpcEnabled ? "1" : "0";
            this.gpcValueChanged = e ? e != t : this.gpcForAGrpEnabled,
                k.writeCookieParam(v.OPTANON_CONSENT, De.GPC_ENABLED, t)
        }
        ,
        t.prototype.populateGPCBrowserSignal = function () {
            var e = k.readCookieParam(v.OPTANON_CONSENT, De.GPC_Browser_Flag)
                , t = this.gpcEnabled ? "1" : "0";
            this.gpcBrowserValueChanged = e !== t,
                k.writeCookieParam(v.OPTANON_CONSENT, De.GPC_Browser_Flag, t)
        }
        ,
        t.prototype.initGCM = function () {
            var o = []
                , e = (Object.keys(this.rule.States).forEach(function (t) {
                    T.rule.States[t].forEach(function (e) {
                        o.push((t + "-" + e).toUpperCase())
                    })
                }),
                    T.rule.Countries.map(function (e) {
                        return e.toUpperCase()
                    }));
            T.gcmCountries = e.concat(o)
        }
        ;
    var e = t;
    function t() {
        var t = this;
        this.DNTEnabled = "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack,
            this.gpcEnabled = !1,
            this.gpcForAGrpEnabled = !1,
            this.pagePushedDown = !1,
            this.iabGroups = {
                purposes: {},
                legIntPurposes: {},
                specialPurposes: {},
                features: {},
                specialFeatures: {}
            },
            this.iabType = null,
            this.grpContainLegalOptOut = !1,
            this.purposeOneTreatment = !1,
            this.ignoreInjectingHtmlCss = !1,
            this.ignoreGoogleAnlyticsCall = !1,
            this.mobileOnlineURL = [],
            this.iabGrpIdMap = {},
            this.iabGrps = [],
            this.consentableGrps = [],
            this.consentableIabGrps = [],
            this.domainGrps = {},
            this.thirdPartyiFrameLoaded = !1,
            this.thirdPartyiFrameResolve = null,
            this.thirdPartyiFramePromise = new Promise(function (e) {
                t.thirdPartyiFrameResolve = e
            }
            ),
            this.isOptInMode = !1,
            this.isSoftOptInMode = !1,
            this.gpcValueChanged = !1,
            this.gpcBrowserValueChanged = !1,
            this.conditionalLogicEnabled = !1,
            this.allConditionsFailed = !1,
            this.canUseConditionalLogic = !1,
            this.gtmUpdatedinStub = !1,
            this.gcmDevIdSet = !1,
            this.tcf2ActiveVendors = {
                all: 0,
                pur: new Map,
                ft: new Map,
                spl_pur: new Map,
                spl_ft: new Map,
                stack: new Map
            },
            this.tcfParentMap = {
                pur: new Map,
                ft: new Map,
                spl_pur: new Map,
                spl_ft: new Map
            }
    }
    var T, A = {};
    function Vt() {
        this.otSDKVersion = "202401.2.0",
            this.isAMP = !1,
            this.ampData = {},
            this.otCookieData = window.OneTrust && window.OneTrust.otCookieData || [],
            this.syncRequired = !1,
            this.isIabSynced = !1,
            this.isGacSynced = !1,
            this.grpsSynced = [],
            this.syncedValidGrp = !1,
            this.groupsConsent = [],
            this.initialGroupsConsent = [],
            this.hostsConsent = [],
            this.initialHostConsent = [],
            this.genVendorsConsent = {},
            this.vsConsent = new Map,
            this.initialGenVendorsConsent = {},
            this.vendors = {
                list: [],
                searchParam: "",
                vendorTemplate: null,
                selectedVendors: [],
                selectedPurpose: [],
                selectedLegInt: [],
                selectedLegIntVendors: [],
                selectedSpecialFeatures: []
            },
            this.initialVendors = {
                list: [],
                searchParam: "",
                vendorTemplate: null,
                selectedVendors: [],
                selectedPurpose: [],
                selectedLegInt: [],
                selectedLegIntVendors: [],
                selectedSpecialFeatures: []
            },
            this.oneTrustIABConsent = {
                purpose: [],
                legimateInterest: [],
                features: [],
                specialFeatures: [],
                specialPurposes: [],
                vendors: [],
                legIntVendors: [],
                vendorList: null,
                IABCookieValue: ""
            },
            this.initialOneTrustIABConsent = {
                purpose: [],
                legimateInterest: [],
                features: [],
                specialFeatures: [],
                specialPurposes: [],
                vendors: [],
                legIntVendors: [],
                vendorList: null,
                IABCookieValue: ""
            },
            this.addtlVendors = {
                vendorConsent: [],
                vendorSelected: {}
            },
            this.initialAddtlVendors = {
                vendorConsent: [],
                vendorSelected: {}
            },
            this.addtlConsentVersion = "1~",
            this.initialAddtlVendorsList = {},
            this.isAddtlConsent = !1,
            this.currentGlobalFilteredList = [],
            this.filterByIABCategories = [],
            this.filterByCategories = [],
            this.hosts = {
                hostTemplate: null,
                hostCookieTemplate: null
            },
            this.generalVendors = {
                gvTemplate: null,
                gvCookieTemplate: null
            },
            this.oneTrustAlwaysActiveHosts = [],
            this.alwaysActiveGenVendors = [],
            this.softOptInGenVendors = [],
            this.optInGenVendors = [],
            this.optanonHostList = [],
            this.srcExecGrps = [],
            this.htmlExecGrps = [],
            this.srcExecGrpsTemp = [],
            this.htmlExecGrpsTemp = [],
            this.isPCVisible = !1,
            this.dataGroupState = [],
            this.userLocation = {
                country: "",
                state: ""
            },
            this.vendorsSetting = {},
            this.dsParams = {},
            this.isV2Stub = !1,
            this.fireOnetrustGrp = !1,
            this.showVendorService = !1,
            this.showGeneralVendors = !1,
            this.genVenOptOutEnabled = !1,
            this.gpcConsentTxn = !1,
            this.vsIsActiveAndOptOut = !1,
            this.bAsset = {},
            this.pcAsset = {},
            this.csBtnAsset = {},
            this.cStyles = {},
            this.vendorDomInit = !1,
            this.genVendorDomInit = !1,
            this.syncNtfyContent = {},
            this.ntfyRequired = !1,
            this.skipAddingHTML = !1,
            this.bnrAnimationInProg = !1,
            this.isPreview = !1,
            this.geoFromUrl = "",
            this.hideBanner = !1,
            this.setAttributePolyfillIsActive = !1,
            this.storageBaseURL = "",
            this.isKeyboardUser = !1,
            this.customerStyles = new Map,
            this.showTrackingTech = !1,
            this.currentTrackingTech = {}
    }
    Vt.prototype.getVendorsInDomain = function () {
        var e, t;
        return I._vendorsInDomain || (e = new Map,
            t = null != (t = A.Groups) ? t : [],
            I.setVendorServicesMap(t, e),
            I._vendorsInDomain = e),
            I._vendorsInDomain
    }
        ,
        Vt.prototype.setVendorServicesMap = function (e, t) {
            for (var o, n = 0, r = e; n < r.length; n++) {
                var i = r[n];
                i.SubGroups && 0 < i.SubGroups.length && I.setVendorServicesMap(i.SubGroups, t);
                for (var s = 0, a = null != (o = i.VendorServices) ? o : []; s < a.length; s++) {
                    var l = a[s]
                        , c = Object.assign({}, i);
                    delete c.VendorServices,
                        l.groupRef = c,
                        t.set(l.CustomVendorServiceId, l)
                }
            }
        }
        ,
        Vt.prototype.clearVendorsInDomain = function () {
            I._vendorsInDomain = null
        }
        ,
        Vt.prototype.checkVendorConsent = function (e) {
            return I.vendorsSetting[e] && I.vendorsSetting[e].consent
        }
        ;
    var I = new Vt
        , Ot = (i.insertAfter = function (e, t) {
            t.parentNode.insertBefore(e, t.nextSibling)
        }
            ,
            i.insertBefore = function (e, t) {
                t.parentNode.insertBefore(e, t)
            }
            ,
            i.inArray = function (e, t) {
                return t.indexOf(e)
            }
            ,
            i.ajax = function (e) {
                var t = null
                    , o = new XMLHttpRequest
                    , n = e.type
                    , r = e.url
                    , i = (e.dataType,
                        e.contentType)
                    , s = e.data
                    , a = e.success
                    , t = e.error
                    , e = e.sync;
                o.open(n, r, !e),
                    o.setRequestHeader("Content-Type", i),
                    o.withCredentials = !1,
                    o.onload = function () {
                        var e;
                        200 <= this.status && this.status < 400 ? (e = JSON.parse(this.responseText),
                            a(e)) : t({
                                message: "Error Loading Data",
                                statusCode: this.status
                            })
                    }
                    ,
                    o.onerror = function (e) {
                        t(e)
                    }
                    ,
                    "post" === n.toLowerCase() || "put" === n.toLowerCase() ? o.send(s) : o.send()
            }
            ,
            i.prevNextHelper = function (o, e, n) {
                var r = [];
                function i(e, t, o) {
                    t[e] && o ? o.includes(".") ? (t[e].classList[0] || t[e].classList.value && t[e].classList.value.includes(o.split(".")[1])) && r.push(t[e]) : o.includes("#") ? t[e].id === o.split("#")[1] && r.push(t[e]) : t[e].tagName === document.createElement(o.trim()).tagName && r.push(t[e]) : t[e] && r.push(t[e])
                }
                return "string" == typeof e ? Array.prototype.forEach.call(document.querySelectorAll(e), function (e, t) {
                    i(o, e, n)
                }) : i(o, e, n),
                    r
            }
            ,
            i.browser = function () {
                var e, t, o;
                return navigator.sayswho = (t = navigator.userAgent,
                    o = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],
                    /trident/i.test(o[1]) ? "IE " + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "") : "Chrome" === o[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e.slice(1).join(" ").replace("OPR", "Opera") : (o = o[2] ? [o[1], o[2]] : [navigator.appName, navigator.appVersion, "-?"],
                        null != (e = t.match(/version\/(\d+)/i)) && o.splice(1, 1, e[1]),
                        o.join(" "))),
                {
                    version: parseInt(navigator.sayswho.split(" ")[1]),
                    type: navigator.sayswho.split(" ")[0],
                    userAgent: navigator.userAgent
                }
            }
            ,
            i.isNodeList = function (e) {
                e = Object.prototype.toString.call(e);
                return "[object NodeList]" === e || "[object Array]" === e
            }
            ,
            i.prototype.fadeOut = function (e) {
                var t = this;
                if (void 0 === e && (e = 60),
                    1 <= this.el.length)
                    for (var o = 0; o < this.el.length; o++)
                        d(this.el[o], "\n                    visibility: hidden;\n                    opacity: 0;\n                    transition: visibility 0s " + e + "ms, opacity " + e + "ms linear;\n                ", !0);
                var n = setInterval(function () {
                    if (1 <= t.el.length)
                        for (var e = 0; e < t.el.length; e++)
                            t.el[e].style.opacity <= 0 && (d(t.el[e], "display: none;", !0),
                                clearInterval(n),
                                "optanon-popup-bg" === t.el[e].id) && t.el[e].removeAttribute("style")
                }, e);
                return this
            }
            ,
            i.prototype.hide = function () {
                if (1 <= this.el.length)
                    for (var e = 0; e < this.el.length; e++)
                        d(this.el[e], "display: none;", !0),
                            this.el[e].setAttribute(Ct, !0);
                else
                    i.isNodeList(this.el) || (d(this.el, "display: none;", !0),
                        this.el.setAttribute(Ct, !0));
                return this
            }
            ,
            i.prototype.show = function (e) {
                if (void 0 === e && (e = "block"),
                    1 <= this.el.length)
                    for (var t = 0; t < this.el.length; t++)
                        d(this.el[t], "display: " + e + ";", !0),
                            this.el[t].removeAttribute(Ct);
                else
                    i.isNodeList(this.el) || (d(this.el, "display: " + e + ";", !0),
                        this.el.removeAttribute(Ct));
                return this
            }
            ,
            i.prototype.remove = function () {
                if (1 <= this.el.length)
                    for (var e = 0; e < this.el.length; e++)
                        this.el[e].parentNode.removeChild(this.el[e]);
                else
                    this.el.parentNode.removeChild(this.el);
                return this
            }
            ,
            i.prototype.css = function (e) {
                if (e)
                    if (1 <= this.el.length) {
                        if (!e.includes(":"))
                            return this.el[0].style[e];
                        for (var t = 0; t < this.el.length; t++)
                            d(this.el[t], e)
                    } else {
                        if (!e.includes(":"))
                            return this.el.style[e];
                        d(this.el, e)
                    }
                return this
            }
            ,
            i.prototype.removeClass = function (e) {
                if (1 <= this.el.length)
                    for (var t = 0; t < this.el.length; t++)
                        this.el[t].classList ? this.el[t].classList.remove(e) : this.el[t].className = this.el[t].className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
                else
                    this.el.classList ? this.el.classList.remove(e) : this.el.className = this.el.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
                return this
            }
            ,
            i.prototype.addClass = function (e) {
                if (1 <= this.el.length)
                    for (var t = 0; t < this.el.length; t++)
                        this.el[t].classList ? this.el[t].classList.add(e) : this.el[t].className += " " + e;
                else
                    this.el.classList ? this.el.classList.add(e) : this.el.className += " " + e;
                return this
            }
            ,
            i.prototype.on = function (r, i, s) {
                var e = this;
                if ("string" != typeof i)
                    if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r)
                        switch (r) {
                            case "load":
                                window.onload = i;
                                break;
                            case "resize":
                                window.onresize = i;
                                break;
                            case "scroll":
                                window.onscroll = i
                        }
                    else if (this.el && 1 <= this.el.length)
                        for (var t = 0; t < this.el.length; t++)
                            this.el[t].addEventListener(r, i);
                    else
                        this.el && this.el instanceof Element && this.el.addEventListener(r, i);
                else if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r)
                    switch (r) {
                        case "load":
                            window.onload = s;
                            break;
                        case "resize":
                            window.onresize = s;
                            break;
                        case "scroll":
                            window.onscroll = s
                    }
                else {
                    var a = function (o) {
                        var n = o.target;
                        e.el.eventExecuted = !0,
                            Array.prototype.forEach.call(document.querySelectorAll(i), function (e, t) {
                                wt["" + r + i] && delete wt["" + r + i],
                                    e.addEventListener(r, s),
                                    e === n && s && s.call(e, o)
                            }),
                            e.el && e.el[0] ? e.el[0].removeEventListener(r, a) : e.el && e.el instanceof Element && e.el.removeEventListener(r, a)
                    };
                    if (this.el && 1 <= this.el.length)
                        for (t = 0; t < this.el.length; t++)
                            this.el[t].eventExecuted = !1,
                                this.el[t].eventExecuted || this.el[t].addEventListener(r, a);
                    else
                        this.el && (this.el.eventExecuted = !1,
                            !this.el.eventExecuted) && this.el instanceof Element && (wt["" + r + i] || (wt["" + r + i] = !0,
                                this.el.addEventListener(r, a)))
                }
                return this
            }
            ,
            i.prototype.off = function (e, t) {
                if (1 <= this.el.length)
                    for (var o = 0; o < this.el.length; o++)
                        this.el[o].removeEventListener(e, t);
                else
                    this.el.removeEventListener(e, t);
                return this
            }
            ,
            i.prototype.one = function (t, o) {
                var n = this;
                if (1 <= this.el.length)
                    for (var e = 0; e < this.el.length; e++)
                        this.el[e].addEventListener(t, function (e) {
                            e.stopPropagation(),
                                e.currentTarget.dataset.triggered || (o(),
                                    e.currentTarget.dataset.triggered = !0)
                        });
                else {
                    var r = function (e) {
                        e.stopPropagation(),
                            o(),
                            n.off(t, r)
                    };
                    this.el.addEventListener(t, r)
                }
                return this
            }
            ,
            i.prototype.trigger = function (e) {
                e = new CustomEvent(e, {
                    customEvent: "yes"
                });
                return this.el.dispatchEvent(e),
                    this
            }
            ,
            i.prototype.focus = function () {
                return (1 <= this.el.length ? this.el[0] : this.el).focus(),
                    this
            }
            ,
            i.prototype.attr = function (e, t) {
                return this.el && 1 <= this.el.length ? t ? ("class" === e ? this.addClass(t) : this.el[0].setAttribute(e, t),
                    this) : this.el[0].getAttribute(e) : t && this.el ? ("class" === e ? this.addClass(t) : this.el.setAttribute(e, t),
                        this) : this.el && this.el.getAttribute(e)
            }
            ,
            i.prototype.html = function (e) {
                if (null == e)
                    return (1 <= this.el.length ? this.el[0] : this.el).innerHTML;
                if (1 <= this.el.length)
                    for (var t = 0; t < this.el.length; t++)
                        this.el[t].innerHTML = e;
                else
                    this.el.innerHTML = e;
                return this
            }
            ,
            i.prototype.append = function (e) {
                if ("string" != typeof e || e.includes("<") || e.includes(">"))
                    if (Array.isArray(e)) {
                        var o = this;
                        Array.prototype.forEach.call(e, function (e, t) {
                            document.querySelector(o.selector).appendChild(new i(e, "ce").el)
                        })
                    } else {
                        if ("string" == typeof e || Array.isArray(e))
                            return this.appendHtmlElement(e);
                        if ("string" == typeof this.selector)
                            document.querySelector(this.selector).appendChild(e);
                        else if (1 <= e.length)
                            for (var t = 0; t < e.length; t++)
                                this.selector.appendChild(e[t]);
                        else
                            this.selector.appendChild(e)
                    }
                else
                    this.el.insertAdjacentText("beforeend", e);
                return this
            }
            ,
            i.prototype.text = function (o) {
                if (this.el) {
                    if (1 <= this.el.length) {
                        if (!o)
                            return this.el[0].textContent;
                        Array.prototype.forEach.call(this.el, function (e, t) {
                            e.textContent = o
                        })
                    } else {
                        if (!o)
                            return this.el.textContent;
                        this.el.textContent = o
                    }
                    return this
                }
            }
            ,
            i.prototype.data = function (o, n) {
                if (!(this.el.length < 1)) {
                    if (!(1 <= this.el.length))
                        return r(this.el, n);
                    Array.prototype.forEach.call(this.el, function (e, t) {
                        r(e, n)
                    })
                }
                return this;
                function r(e, t) {
                    if (!t)
                        return JSON.parse(e.getAttribute("data-" + o));
                    "object" == typeof t ? e.setAttribute("data-" + o, JSON.stringify(t)) : e.setAttribute("data-" + o, t)
                }
            }
            ,
            i.prototype.height = function (e) {
                this.el.length && (this.el = this.el[0]);
                for (var t = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-top").split("px")[0]), o = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-bottom").split("px")[0]), n = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-top").split("px")[0]), r = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-bottom").split("px")[0]), i = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("height").split("px")[0]), s = [t, o, n, r], a = 0, l = 0; l < s.length; l++)
                    0 < s[l] && (a += s[l]);
                return e ? (t = e.toString().split(parseInt(e))[1] ? e.toString().split(parseInt(e))[1] : "px",
                    o = "number" == typeof e ? e : parseInt(e.toString().split(t)[0]),
                    (t && "px" === t || "%" === t || "em" === t || "rem" === t) && (0 < o ? d(this.el, "height: " + (a + o + t) + ";", !0) : "auto" === e && d(this.el, "height: " + e + ";", !0)),
                    this) : this.selector === document ? i : this.el.clientHeight - a
            }
            ,
            i.prototype.each = function (e) {
                var t = !1;
                return void 0 === this.el.length && (this.el = [this.el],
                    t = !0),
                    Array.prototype.forEach.call(this.el, e),
                    t && (this.el = this.el[0]),
                    this
            }
            ,
            i.prototype.is = function (e) {
                return this.el.length ? (this.el[0].matches || this.el[0].matchesSelector || this.el[0].msMatchesSelector || this.el[0].mozMatchesSelector || this.el[0].webkitMatchesSelector || this.el[0].oMatchesSelector).call(this.el[0], e) : (this.el.matches || this.el.matchesSelector || this.el.msMatchesSelector || this.el.mozMatchesSelector || this.el.webkitMatchesSelector || this.el.oMatchesSelector).call(this.el, e)
            }
            ,
            i.prototype.filter = function (e) {
                return this.el = Array.prototype.filter.call(document.querySelectorAll(this.selector), e),
                    this
            }
            ,
            i.prototype.animate = function (e, t) {
                var o, n, r, i, s = this;
                this.el = document.querySelector(this.selector);
                for (o in e)
                    n = o,
                        i = r = void 0,
                        r = parseInt(e[n]),
                        i = e[n].split(parseInt(e[n]))[1] ? e[n].split(parseInt(e[n]))[1] : "px",
                        r = s.createKeyFrameAnimation(n, s.el, r, i),
                        (i = document.head.querySelector("#onetrust-style")) ? i.innerHTML += r : ((i = document.createElement("style")).id = "onetrust-legacy-style",
                            i.type = "text/css",
                            i.innerHTML = r,
                            document.head.appendChild(i)),
                        s.addWebKitAnimation(n, t);
                return this
            }
            ,
            i.prototype.scrollTop = function () {
                return this.el.scrollTop
            }
            ,
            i.prototype.appendHtmlElement = function (o) {
                var n, r, e;
                return "string" == typeof this.selector ? document.querySelector(this.selector).appendChild(new i(o, "ce").el) : this.useEl ? (n = document.createDocumentFragment(),
                    (r = !(!o.includes("<th") && !o.includes("<td"))) && (e = o.split(" ")[0].split("<")[1],
                        n.appendChild(document.createElement(e)),
                        n.firstChild.innerHTML = o),
                    Array.prototype.forEach.call(this.el, function (e, t) {
                        r ? e.appendChild(n.firstChild) : e.appendChild(new i(o, "ce").el)
                    })) : this.selector.appendChild(new i(o, "ce").el),
                    this
            }
            ,
            i.prototype.createKeyFrameAnimation = function (e, t, o, n) {
                return "\n        @keyframes slide-" + ("top" === e ? "up" : "down") + "-custom {\n            0% {\n                " + ("top" === e ? "top" : "bottom") + ": " + ("top" === e ? t.getBoundingClientRect().top : window.innerHeight) + "px !important;\n            }\n            100% {\n                " + ("top" === e ? "top" : "bottom") + ": " + (o + n) + ";\n            }\n        }\n        @-webkit-keyframes slide-" + ("top" === e ? "up" : "down") + "-custom {\n            0% {\n                " + ("top" === e ? "top" : "bottom") + ": " + ("top" === e ? t.getBoundingClientRect().top : window.innerHeight) + "px !important;\n            }\n            100% {\n                " + ("top" === e ? "top" : "bottom") + ": " + (o + n) + ";\n            }\n        }\n        @-moz-keyframes slide-" + ("top" === e ? "up" : "down") + "-custom {\n            0% {\n                " + ("top" === e ? "top" : "bottom") + ": " + ("top" === e ? t.getBoundingClientRect().top : window.innerHeight) + "px !important;\n            }\n            100% {\n                " + ("top" === e ? "top" : "bottom") + ": " + (o + n) + ";\n            }\n        }\n        "
            }
            ,
            i.prototype.addWebKitAnimation = function (e, t) {
                (i.browser().type = i.browser().version <= 8) ? d(this.el, "top" === e ? "-webkit-animation: slide-up-custom " : "-webkit-animation: slide-down-custom " + t + "ms ease-out forwards;") : d(this.el, "\n                animation-name: " + ("top" === e ? "slide-up-custom" : "slide-down-custom") + ";\n                animation-duration: " + t + "ms;\n                animation-fill-mode: forwards;\n                animation-timing-function: ease-out;\n            ", !0)
            }
            ,
            i);
    function i(e, t) {
        switch (void 0 === t && (t = ""),
        this.selector = e,
        this.useEl = !1,
        t) {
            case "ce":
                var o = i.browser().type.toLowerCase()
                    , n = i.browser().version;
                n < 10 && "safari" === o || "chrome" === o && n <= 44 || n <= 40 && "firefox" === o ? ((n = document.implementation.createHTMLDocument()).body.innerHTML = e,
                    this.el = n.body.children[0]) : (o = document.createRange().createContextualFragment(e),
                        this.el = o.firstChild),
                    this.length = 1;
                break;
            case "":
                this.el = e === document || e === window ? document.documentElement : "string" != typeof e ? e : document.querySelectorAll(e),
                    this.length = e === document || e === window || "string" != typeof e ? 1 : this.el.length;
                break;
            default:
                this.length = 0
        }
    }
    function L(e, t) {
        return new Ot(e, t = void 0 === t ? "" : t)
    }
    var Bt, wt = {}, Gt = (xt.prototype.getDataLanguageCulture = function () {
        var e = T.bannerScriptElement;
        return e && e.getAttribute(Ke) ? this.checkAndTansformLangCodeWithUnderdscore(e.getAttribute(Ke).toLowerCase()) : this.detectDocumentOrBrowserLanguage().toLowerCase()
    }
        ,
        xt.prototype.checkAndTansformLangCodeWithUnderdscore = function (e) {
            return e.replace(/\_/, "-")
        }
        ,
        xt.prototype.detectDocumentOrBrowserLanguage = function () {
            var e = "";
            if (T.langSwitcherPldr) {
                var t = S.convertKeyValueLowerCase(T.langSwitcherPldr)
                    , o = this.getUserLanguage().toLowerCase();
                if (!(e = t[o] || t[o + "-" + o] || (t.default === o ? t.default : null)))
                    if (2 === o.length)
                        for (var n = 0; n < Object.keys(t).length; n += 1) {
                            var r = Object.keys(t)[n];
                            if (r.substr(0, 2) === o) {
                                e = t[r];
                                break
                            }
                        }
                    else
                        2 < o.length && (e = t[o.substr(0, 2)]);
                e = e || t.default
            }
            return e
        }
        ,
        xt.prototype.getUserLanguage = function () {
            return T.useDocumentLanguage ? this.checkAndTansformLangCodeWithUnderdscore(document.documentElement.lang) : navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage
        }
        ,
        xt.prototype.isValidLanguage = function (e, t) {
            var o = S.convertKeyValueLowerCase(T.langSwitcherPldr);
            return !(!o || !o[t] && !o[t + "-" + t] && o.default !== t)
        }
        ,
        xt.prototype.getLangJsonUrl = function (e) {
            void 0 === e && (e = null);
            var t, o = T.getRegionRule();
            if (e) {
                if (e = e.toLowerCase(),
                    !this.isValidLanguage(o, e))
                    return null
            } else
                e = this.getDataLanguageCulture();
            return I.lang = e,
                I.consentLanguage = e.substr(0, 2),
                t = T.canUseConditionalLogic ? T.bannerDataParentURL + "/" + o.Id + "/" + T.Condition.Id + "/" + e : T.bannerDataParentURL + "/" + o.Id + "/" + e,
                t = T.multiVariantTestingEnabled ? T.bannerDataParentURL + "/" + o.Id + "/variants/" + T.selectedVariant.Id + "/" + e : t
        }
        ,
        xt.prototype.populateLangSwitcherPlhdr = function () {
            var e, t, o, n = T.getRegionRule();
            n && (e = n.Variants,
                T.multiVariantTestingEnabled && e ? (o = void 0,
                    (t = k.getCookie(v.SELECTED_VARIANT)) && (o = e[S.findIndex(e, function (e) {
                        return e.Id === t
                    })]),
                    t && o || (o = e[Math.floor(Math.random() * e.length)]),
                    T.langSwitcherPldr = o.LanguageSwitcherPlaceholder,
                    T.selectedVariant = o) : T.canUseConditionalLogic ? T.langSwitcherPldr = T.Condition.LanguageSwitcherPlaceholder : T.langSwitcherPldr = n.LanguageSwitcherPlaceholder)
        }
        ,
        xt);
    function xt() { }
    Ht.prototype.getLangJson = function (e) {
        var t;
        return void 0 === e && (e = null),
            T.previewMode ? (t = JSON.parse(window.sessionStorage.getItem("otPreviewData")),
                Promise.resolve(t.langJson)) : (t = Bt.getLangJsonUrl(e)) ? Nt.otFetch(t + ".json") : Promise.resolve(null)
    }
        ,
        Ht.prototype.getPersistentCookieSvg = function (e) {
            e = e || A.cookiePersistentLogo;
            return e ? Nt.otFetch(e, !0) : Promise.resolve(null)
        }
        ,
        Ht.prototype.fetchGvlObj = function () {
        var e = null;//m.moduleInitializer.IabV2Data.globalVendorListUrl;
            return "IAB2V2" === T.getRegionRuleType() && (e =null),// m.moduleInitializer.Iab2V2Data.globalVendorListUrl),
                this.otFetch(e)
        }
        ,
        Ht.prototype.fetchGoogleVendors = function () {
        var e = y.updateCorrectIABUrl(null);// m.moduleInitializer.GoogleData.googleVendorListUrl);
            return y.checkMobileOfflineRequest(y.getBannerVersionUrl()) ? y.otFetchOfflineFile(S.getRelativeURL(e, !0)) : (T.mobileOnlineURL.push(e),
                this.otFetch(e))
        }
        ,
        Ht.prototype.getStorageDisclosure = function (t) {
            return F(this, void 0, void 0, function () {
                return M(this, function (e) {
                    return [2, this.otFetch(t, !1, !0)]
                })
            })
        }
        ,
        Ht.prototype.loadCMP = function () {
            var o = this;
            return new Promise(function (e) {
                var t = o.checkIfRequiresPollyfill() ? "otTCF-ie" : "otTCF";
                y.jsonp(y.getBannerVersionUrl() + "/" + t + ".js", e, e)
            }
            )
        }
        ,
        Ht.prototype.loadGPP = function () {
            return new Promise(function (e) {
                y.jsonp(y.getBannerVersionUrl() + "/otGPP.js", e, e)
            }
            )
        }
        ,
        Ht.prototype.getCSBtnContent = function () {
            return F(this, void 0, void 0, function () {
                var t, o, n, r;
                return M(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (t = A.useRTL ? me.RTL : me.LTR,
                                I.csBtnAsset[t]) ? [3, 2] : (o = y.getBannerSDKAssestsUrl() + "/" + (A.useRTL ? Ye : We),
                                    n = I.csBtnAsset,
                                    r = t,
                                    [4, this.otFetch(o)]);
                        case 1:
                            n[r] = e.sent(),
                                e.label = 2;
                        case 2:
                            return [2, I.csBtnAsset[t]]
                    }
                })
            })
        }
        ,
        Ht.prototype.getPcContent = function (i) {
            return void 0 === i && (i = !1),
                F(this, void 0, void 0, function () {
                    var t, o, n, r;
                    return M(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return (t = A.useRTL ? me.RTL : me.LTR,
                                    I.pcAsset[t] && !i) ? [3, 2] : (o = y.getBannerSDKAssestsUrl(),
                                        A.PCTemplateUpgrade && (o += "/v2"),
                                        o = o + "/" + T.pcName + (A.useRTL ? "Rtl" : "") + ".json",
                                        n = I.pcAsset,
                                        r = t,
                                        [4, this.otFetch(o)]);
                            case 1:
                                n[r] = e.sent(),
                                    e.label = 2;
                            case 2:
                                return [2, I.pcAsset[t]]
                        }
                    })
                })
        }
        ,
        Ht.prototype.getBannerContent = function (s, a) {
            return void 0 === s && (s = !1),
                void 0 === a && (a = null),
                F(this, void 0, void 0, function () {
                    var t, o, n, r, i;
                    return M(this, function (e) {
                        switch (e.label) {
                            case 0:
                                if (t = A.useRTL ? me.RTL : me.LTR,
                                    o = a || Bt.getDataLanguageCulture(),
                                    I.bAsset[t] && !s)
                                    return [3, 2];
                                if (i = T.getRegionRule(),
                                    n = void 0,
                                    m.fp.CookieV2SSR) {
                                    if (T.previewMode)
                                        return r = JSON.parse(window.sessionStorage.getItem("otPreviewData")),
                                            [2, Promise.resolve(r.bLayout)];
                                    n = T.bannerDataParentURL + "/" + i.Id,
                                        T.canUseConditionalLogic && (n += "/" + T.Condition.Id),
                                        n += "/bLayout-" + o + ".json"
                                } else
                                    n = y.getBannerSDKAssestsUrl() + ("/" + T.bannerName + (A.useRTL ? "Rtl" : "")) + ".json";
                                return r = I.bAsset,
                                    i = t,
                                    [4, this.otFetch(n)];
                            case 1:
                                r[i] = e.sent(),
                                    e.label = 2;
                            case 2:
                                return [2, I.bAsset[t]]
                        }
                    })
                })
        }
        ,
        Ht.prototype.getCommonStyles = function (i) {
            return void 0 === i && (i = !1),
                F(this, void 0, void 0, function () {
                    var t, o, n, r;
                    return M(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return (t = A.useRTL ? me.RTL : me.LTR,
                                    I.cStyles[t] && !i) ? [3, 2] : (o = y.getBannerSDKAssestsUrl() + "/otCommonStyles" + (A.useRTL ? "Rtl" : "") + ".css",
                                        n = I.cStyles,
                                        r = t,
                                        [4, this.otFetch(o, !0)]);
                            case 1:
                                n[r] = e.sent(),
                                    e.label = 2;
                            case 2:
                                return [2, I.cStyles[t]]
                        }
                    })
                })
        }
        ,
        Ht.prototype.getSyncNtfyContent = function () {
            return F(this, void 0, void 0, function () {
                var t, o, n, r;
                return M(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (t = A.useRTL ? me.RTL : me.LTR,
                                I.syncNtfyContent[t]) ? [3, 2] : (o = y.getBannerSDKAssestsUrl() + "/otSyncNotification" + (A.useRTL ? "Rtl" : "") + ".json",
                                    n = I.syncNtfyContent,
                                    r = t,
                                    [4, this.otFetch(o)]);
                        case 1:
                            n[r] = e.sent(),
                                e.label = 2;
                        case 2:
                            return [2, I.syncNtfyContent[t]]
                    }
                })
            })
        }
        ,
        Ht.prototype.getConsentProfile = function (e, t) {
            var o = this
                , n = {
                    Identifier: e,
                    TenantId: I.tenantId,
                    Authorization: t
                };
            return new Promise(function (e) {
                o.getJSON(I.consentApi, n, e, e)
            }
            )
        }
        ,
        Ht.prototype.checkIfRequiresPollyfill = function () {
            var e = window.navigator.userAgent;
            return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/") || "undefined" == typeof Set
        }
        ,
        Ht.prototype.otFetch = function (r, i, s) {
            return void 0 === i && (i = !1),
                void 0 === s && (s = !1),
                F(this, void 0, void 0, function () {
                    var t, o, n = this;
                    return M(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return y.checkMobileOfflineRequest(r) ? [4, y.otFetchOfflineFile(r)] : [3, 2];
                            case 1:
                                return [2, e.sent()];
                            case 2:
                                return e.trys.push([2, 9, , 10]),
                                    T.mobileOnlineURL.push(r),
                                    "undefined" != typeof fetch ? [3, 3] : [2, new Promise(function (e) {
                                        n.getJSON(r, null, e, e, i)
                                    }
                                    )];
                            case 3:
                                return [4, fetch(r)];
                            case 4:
                                return (t = e.sent(),
                                    s && t.headers.get("Access-Control-Allow-Credentials")) ? [2, Promise.resolve()] : i ? [4, t.text()] : [3, 6];
                            case 5:
                                return [2, e.sent()];
                            case 6:
                                return [4, t.json()];
                            case 7:
                                return [2, e.sent()];
                            case 8:
                                return [3, 10];
                            case 9:
                                return o = e.sent(),
                                    console.log("Error in fetch URL : " + r + " Exception :" + o),
                                    [3, 10];
                            case 10:
                                return [2]
                        }
                    })
                })
        }
        ,
        Ht.prototype.getJSON = function (e, t, o, n, r) {
            void 0 === t && (t = null),
                void 0 === r && (r = !1);
            var i = new XMLHttpRequest;
            if (i.open("GET", e, !0),
                i.withCredentials = !1,
                t)
                for (var s in t)
                    i.setRequestHeader(s, t[s]);
            i.onload = function () {
                var e;
                200 <= this.status && this.status < 400 && this.responseText ? (e = void 0,
                    e = r ? this.responseText : JSON.parse(this.responseText),
                    o(e)) : n({
                        message: "Error Loading Data",
                        statusCode: this.status
                    })
            }
                ,
                i.onerror = function (e) {
                    n(e)
                }
                ,
                i.send()
        }
        ;
    var Nt, Dt = Ht;
    function Ht() { }
    Ft.prototype.addLogoUrls = function () {
        y.checkMobileOfflineRequest(y.getBannerVersionUrl()) || (T.mobileOnlineURL.push(y.updateCorrectUrl(A.optanonLogo)),
            T.mobileOnlineURL.push(y.updateCorrectUrl(A.oneTrustFtrLogo)))
    }
        ,
        Ft.prototype.getCookieLabel = function (e, t, o) {
            var n;
            return void 0 === o && (o = !0),
                e ? (n = e.Name,
                    t ? '\n                <a  class="cookie-label"\n                    href="' + (o ? "http://cookiepedia.co.uk/cookies/" : "http://cookiepedia.co.uk/host/") + e.Name + '"\n                    rel="noopener"\n                    target="_blank"\n                >\n                    ' + e.Name + '&nbsp;<span class="ot-scrn-rdr">' + A.NewWinTxt + "</span>\n                </a>\n            " : n) : ""
        }
        ,
        Ft.prototype.getBannerSDKAssestsUrl = function () {
            return this.getBannerVersionUrl() + "/assets"
        }
        ,
        Ft.prototype.getBannerVersionUrl = function () {
            var e = T.bannerScriptElement.getAttribute("src");
            return "" + (-1 !== e.indexOf("/consent/") ? e.split("consent/")[0] + "scripttemplates/" : e.split("otSDKStub")[0]) + ""//m.moduleInitializer.Version
        }
        ,
        Ft.prototype.checkMobileOfflineRequest = function (e) {
        return new RegExp("^file://", "i").test(e);// m.moduleInitializer.MobileSDK && new RegExp("^file://", "i").test(e)
        }
        ,
        Ft.prototype.updateCorrectIABUrl = function (e) {
        var t, o = null;// m.moduleInitializer.ScriptType;
            return o !== Ue && o !== ze || (o = S.getURL(e),
                (t = (t = T.bannerScriptElement) && t.getAttribute("src") ? S.getURL(t.getAttribute("src")) : null) && o && t.hostname !== o.hostname && (e = (e = (t = "" + T.bannerDataParentURL) + o.pathname.split("/").pop().replace(/(^\/?)/, "/")).replace(o.hostname, t.hostname))),
                e
        }
        ,
        Ft.prototype.updateCorrectUrl = function (e, t) {
            if ((void 0 === t && (t = !1),
                T.previewMode) && new RegExp("^data:image/").test(e))
                return e;
            var o = S.getURL(e)
                , n = T.bannerScriptElement
                , n = n && n.getAttribute("src") ? S.getURL(n.getAttribute("src")) : null;
            if (n && o && n.hostname !== o.hostname) {
                var r = null;// m.moduleInitializer.ScriptType;
                if (r === Ue || r === ze) {
                    if (t)
                        return e;
                    e = (n = T.bannerDataParentURL + "/" + T.getRegionRule().Id) + o.pathname.replace(/(^\/?)/, "/")
                } else
                    e = null == (r = e) ? void 0 : r.replace(o.hostname, n.hostname)
            }
            return e
        }
        ,
        Ft.prototype.isBundleOrStackActive = function (n, r) {
            void 0 === r && (r = null);
            for (var i = I.oneTrustIABConsent, s = !0, a = (r = r || I.groupsConsent,
                0); function () {
                    var e, t, o = n.SubGroups[a];
                    o.Status !== C.ALWAYS_ACTIVE && (o.Type === ft ? (-1 < (t = S.findIndex(r, function (e) {
                        return e.split(":")[0] === o.CustomGroupId
                    })) && "0" === r[t].split(":")[1] || !r.length) && (s = !1) : (e = o.Type === P.GroupTypes.Spl_Ft ? i.specialFeatures : i.purpose,
                        (-1 < (t = S.findIndex(e, function (e) {
                            return e.split(":")[0] === o.IabGrpId
                        })) && "false" === e[t].split(":")[1] || !e.length) && (s = !1))),
                        a++
                }(),
                s && a < n.SubGroups.length;)
                ;
            return s
        }
        ,
        Ft.prototype.otFetchOfflineFile = function (n) {
            return F(this, void 0, void 0, function () {
                var t, o;
                return M(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return n = n.replace(".json", ".js"),
                                t = n.split("/"),
                                t = t[t.length - 1],
                                o = t.split(".js")[0],
                                [4, new Promise(function (e) {
                                    function t() {
                                        e(window[o])
                                    }
                                    y.jsonp(n, t, t)
                                }
                                )];
                        case 1:
                            return [2, e.sent()]
                    }
                })
            })
        }
        ,
        Ft.prototype.jsonp = function (e, t, o) {
            y.checkMobileOfflineRequest(e) || T.mobileOnlineURL.push(e);
            var n = document.createElement("script")
                , r = document.getElementsByTagName("head")[0];
            function i() {
                t()
            }
            n.onreadystatechange = function () {
                "loaded" !== this.readyState && "complete" !== this.readyState || i()
            }
                ,
                n.onload = i,
                n.onerror = function () {
                    o()
                }
                ,
                n.type = "text/javascript",
                n.async = !0,
                n.src = e,
                I.crossOrigin && n.setAttribute("crossorigin", I.crossOrigin),
                r.appendChild(n)
        }
        ,
        Ft.prototype.isCookiePolicyPage = function (e) {
            for (var t = !1, o = S.removeURLPrefixes(window.location.href), n = L("<div></div>", "ce").el, r = (L(n).html(e),
                n.querySelectorAll("a")), i = 0; i < r.length; i++)
                if (S.removeURLPrefixes(r[i].href) === o) {
                    t = !0;
                    break
                }
            return t
        }
        ,
        Ft.prototype.isBannerVisible = function () {
            var e = !1
                , t = document.getElementById("onetrust-banner-sdk");
            return e = t && t.getAttribute("style") ? -1 !== t.getAttribute("style").indexOf("display: none") || -1 !== t.getAttribute("style").indexOf("display:none") : e
        }
        ,
        Ft.prototype.hideBanner = function () {
            var e = this;
            I.bnrAnimationInProg ? setTimeout(function () {
                return e.hideBanner()
            }, 100) : L("#onetrust-banner-sdk").fadeOut(400)
        }
        ,
        Ft.prototype.resetFocusToBody = function () {
            document.activeElement && document.activeElement.blur()
        }
        ,
        Ft.prototype.getDuration = function (e) {
            var t, o = e.Length, e = e.DurationType;
            return o && 0 !== parseInt(o) ? (o = parseInt(o),
                e ? (t = 1 < (o = this.round_to_precision(o / e, .5)) ? lt[e] + "s" : lt[e],
                    A.LifespanDurationText && 1 === e && (t = "LifespanDurationText"),
                    o + " " + A[t]) : this.getDurationText(o)) : A.LfSpanSecs
        }
        ,
        Ft.prototype.isDateCurrent = function (e) {
            var e = e.split("/")
                , t = parseInt(e[1])
                , o = parseInt(e[0])
                , e = parseInt(e[2])
                , n = new Date
                , r = n.getDate()
                , i = n.getFullYear()
                , n = n.getMonth() + 1;
            return i < e || e === i && n < o || e === i && o === n && r <= t
        }
        ,
        Ft.prototype.insertFooterLogo = function (e) {
            var t = L(e).el;
            if (t.length && A.oneTrustFtrLogo) {
                var o = y.updateCorrectUrl(A.oneTrustFtrLogo);
                y.checkMobileOfflineRequest(y.getBannerVersionUrl()) && (o = S.getRelativeURL(o, !0, !0));
                for (var n = 0; n < t.length; n++) {
                    var r = t[n].querySelector("img")
                        , i = "Powered by OneTrust " + A.NewWinTxt;
                    L(t[n]).attr("href", A.pCFooterLogoUrl),
                        r.setAttribute("src", o),
                        r.setAttribute("title", i),
                        L(t[n]).attr("aria-label", i)
                }
            }
        }
        ,
        Ft.prototype.getUTCFormattedDate = function (e) {
            e = new Date(e);
            return e.getUTCFullYear() + "-" + (e.getUTCMonth() + 1).toString().padStart(2, "0") + "-" + e.getUTCDate().toString().toString().padStart(2, "0") + " " + e.getUTCHours() + ":" + e.getUTCMinutes().toString().toString().padStart(2, "0") + ":" + e.getUTCSeconds().toString().toString().padStart(2, "0")
        }
        ,
        Ft.prototype.getDurationText = function (e) {
            return 365 <= e ? (e = this.round_to_precision(e /= 365, .5)) + " " + (1 < e ? A.LfSpnYrs : A.LfSpnYr) : A.LifespanDurationText ? e + " " + A.LifespanDurationText : e + " " + (1 < e ? A.PCenterVendorListLifespanDays : A.PCenterVendorListLifespanDay)
        }
        ,
        Ft.prototype.round_to_precision = function (e, t) {
            e = +e + (void 0 === t ? .5 : t / 2);
            return e - e % (void 0 === t ? 1 : +t)
        }
        ,
        Ft.prototype.isOptOutEnabled = function () {
            return A.PCTemplateUpgrade ? I.genVenOptOutEnabled : A.allowHostOptOut
        }
        ,
        Ft.prototype.findUserType = function (e) {
            I.isKeyboardUser = !(!e || 0 !== e.detail)
        }
        ,
        Ft.prototype.getCSSPropsFromString = function (e) {
            var t, o;
            return e ? (t = e.length,
                o = {},
                (e = e.endsWith(";") ? e.substring(0, t - 1) : e).trim().split(";").forEach(function (e) {
                    e = e.trim().toString().split(":"),
                        e = JSON.parse('{ "' + e[0].trim() + '" : "' + e[1].trim() + '" }');
                    o = Object.assign(o, e)
                }),
                o) : {}
        }
        ,
        Ft.prototype.setCloseIcon = function (e) {
            var t = y.updateCorrectUrl(A.OTCloseBtnLogo)
                , e = L(e);
            e.length && d(e.el, 'background-image: url("' + t + '")', !0)
        }
        ,
        Ft.prototype.createOptOutSignalElement = function (e, t) {
            var e = e(t ? "#ot-pc-content" : "#onetrust-policy")
                , o = document.createElement("div")
                , n = (o.classList.add("ot-optout-signal"),
                    document.createElement("div"))
                , r = (n.classList.add("ot-optout-icon"),
                    document.createElement("span"));
            return r.innerText = t ? A.PCOptOutSignalText : A.BOptOutSignalText,
                o.append(n),
                o.append(r),
                null != (t = e) && t.prepend(o),
                this.applyGuardLogo(),
                o
        }
        ,
        Ft.prototype.applyGuardLogo = function () {
            return F(this, void 0, void 0, function () {
                var t, o, n;
                return M(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (t = A.cookiePersistentLogo).includes("ot_guard_logo.svg") || (o = A.OTCloseBtnLogo,
                                n = o.indexOf("static/"),
                                t = o.replace(o.slice(n + 7), "ot_guard_logo.svg")),
                                (o = ""/* m.moduleInitializer.ScriptType*/) !== Ue && o !== ze || (t = y.updateCorrectUrl(t)),
                                [4, Nt.getPersistentCookieSvg(t)];
                        case 1:
                            return n = e.sent(),
                                L(".ot-optout-icon").html(n),
                                [2]
                    }
                })
            })
        }
        ,
        Ft.prototype.updateTCString = function () {
            var e = p.iabStringSDK().tcString().encode(I.tcModel);
            I.cmpApi.update(e, !1)
        }
        ,
        Ft.prototype.replaceTextFromString = function (e, t, o) {
            return t.split(e).join(o)
        }
        ;
    var y, Rt = Ft;
    function Ft() { }
    function o() { }
    o.prototype.initializeBannerVariables = function (e) {
        var t = null;
        T.iabType = t.IabType,
            t = t.PCTemplateUpgrade,
            b = t ? It : Lt,
            t = T.iabType,
            P = "IAB2" === t ? _t : Et,
            T.init(e),
            I.showGeneralVendors = A.GeneralVendorsEnabled && A.PCTemplateUpgrade,
            I.showVendorService = m.fp.CookieV2VendorServiceScript && A.VendorServiceConfig.PCVSEnable && !T.isIab2orv2Template && A.PCTemplateUpgrade,
            I.vsIsActiveAndOptOut = I.showVendorService && A.VendorServiceConfig.PCVSOptOut,
            I.showTrackingTech = m.fp.CookieV2TrackingTechPrefCenter && A.AdditionalTechnologiesConfig.PCShowTrackingTech,
            I.genVenOptOutEnabled = I.showGeneralVendors && A.GenVenOptOut,
            y.addLogoUrls(),
            this.setGeolocationInCookies(),
            this.setOrUpdate3rdPartyIABConsentFlag()
    }
        ,
        o.prototype.initializeVendorInOverriddenVendors = function (e, t) {
            A.OverriddenVendors[e] = {
                disabledCP: [],
                disabledLIP: [],
                active: t,
                legInt: !1,
                consent: !1
            }
        }
        ,
        o.prototype.applyGlobalRestrictionsonNewVendor = function (e, t, o, n) {
            var r = A.GlobalRestrictions
                , i = A.OverriddenVendors;
            switch (A.Publisher.restrictions[o] || (A.Publisher.restrictions[o] = {}),
            i[t] || this.initializeVendorInOverriddenVendors(t, !0),
            i[t].disabledCP || (i[t].disabledCP = []),
            i[t].disabledLIP || (i[t].disabledLIP = []),
            r[o]) {
                case ue.Disabled:
                    (n ? i[t].disabledCP : i[t].disabledLIP).push(o),
                        A.Publisher.restrictions[o][t] = ue.Disabled;
                    break;
                case ue.Consent:
                    n ? (i[t].consent = !0,
                        A.Publisher.restrictions[o][t] = ue.Consent) : (i[t].disabledLIP.push(o),
                            this.checkFlexiblePurpose(e, t, o, !1));
                    break;
                case ue.LegInt:
                    n ? (i[t].disabledCP.push(o),
                        this.checkFlexiblePurpose(e, t, o, !0)) : (i[t].legInt = !0,
                            A.Publisher.restrictions[o][t] = ue.LegInt);
                    break;
                case void 0:
                    n ? i[t].consent = !0 : i[t].legInt = !0
            }
        }
        ,
        o.prototype.checkFlexiblePurpose = function (e, t, o, n) {
            e.flexiblePurposes.includes(o) ? (n ? A.OverriddenVendors[t].legInt = !0 : A.OverriddenVendors[t].consent = !0,
                A.Publisher.restrictions[o][t] = n ? ue.LegInt : ue.Consent) : A.Publisher.restrictions[o][t] = ue.Disabled
        }
        ,
        o.prototype.getActivePurposesForVendor = function (e, t) {
            var o = A.OverriddenVendors[t] && A.OverriddenVendors[t].disabledCP
                , n = A.OverriddenVendors[t] && A.OverriddenVendors[t].disabledLIP
                , o = o ? this.removeElementsFromArray(e.purposes, A.OverriddenVendors[t].disabledCP) || [] : e.purposes || []
                , n = n ? this.removeElementsFromArray(e.legIntPurposes, A.OverriddenVendors[t].disabledLIP) || [] : e.legIntPurposes || []
                , t = q(o, n, e.flexiblePurposes || []);
            return new Set(t)
        }
        ,
        o.prototype.setActiveVendorCount = function (e, t) {
            var o, n;
            "IAB2V2" === T.getRegionRuleType() && (o = new Set,
                n = T.tcf2ActiveVendors,
                this.getActivePurposesForVendor(e, t).forEach(function (e) {
                    var t = n.pur.get(e) || 0;
                    n.pur.set(e, t + 1),
                        T.tcfParentMap.pur.get(e) && o.add(T.tcfParentMap.pur.get(e))
                }),
                e.specialPurposes && e.specialPurposes.forEach(function (e) {
                    var t = n.spl_pur.get(e) || 0;
                    n.spl_pur.set(e, t + 1),
                        T.tcfParentMap.spl_pur.get(e) && o.add(T.tcfParentMap.spl_pur.get(e))
                }),
                e.features && e.features.forEach(function (e) {
                    var t = n.ft.get(e) || 0;
                    n.ft.set(e, t + 1),
                        T.tcfParentMap.ft.get(e) && o.add(T.tcfParentMap.ft.get(e))
                }),
                e.specialFeatures && e.specialFeatures.forEach(function (e) {
                    var t = n.spl_ft.get(e) || 0;
                    n.spl_ft.set(e, t + 1),
                        T.tcfParentMap.spl_ft.get(e) && o.add(T.tcfParentMap.spl_ft.get(e))
                }),
                o.forEach(function (e) {
                    var t = n.stack.get(e) || 0;
                    n.stack.set(e, t + 1)
                }))
        }
        ,
        o.prototype.isVendorInvalid = function (e, t) {
            var o = !1
                , n = !e.purposes.length && !e.flexiblePurposes.length
                , r = (A.OverriddenVendors[t] && !A.OverriddenVendors[t].consent && (n = !0),
                    !0);
            return T.legIntSettings.PAllowLI && e.legIntPurposes.length && (!A.OverriddenVendors[t] || A.OverriddenVendors[t].legInt) && (r = !1),
                o = !n || !r || e.specialPurposes.length || e.features.length || e.specialFeatures.length ? o : !0
        }
        ,
        o.prototype.removeInActiveVendorsForTcf = function (r) {
            var i = this
                , s = I.iabData.vendorListVersion
                , e = A.Publisher
                , a = A.GlobalRestrictionEnabled;
            0 !== Object.keys(e).length && e && Object.keys(e.restrictions).length;
            Object.keys(r.vendors).forEach(function (t) {
                var o = r.vendors[t]
                    , e = !1
                    , n = i.getVendorGVLVersion(o)
                    , n = (s < n && (A.NewVendorsInactiveEnabled ? (i.initializeVendorInOverriddenVendors(t, !1),
                        e = !0) : a && (o.purposes.forEach(function (e) {
                            i.applyGlobalRestrictionsonNewVendor(o, t, e, !0)
                        }),
                            o.legIntPurposes.forEach(function (e) {
                                i.applyGlobalRestrictionsonNewVendor(o, t, e, !1)
                            }))),
                        A.OverriddenVendors[t] && !A.OverriddenVendors[t].active && (e = !0),
                        -1 < A.Vendors.indexOf(Number(t)) && (e = !0),
                        i.isVendorInvalid(o, t));
                (e = e || n) && delete r.vendors[t],
                    e || i.setActiveVendorCount(o, t)
            })
        }
        ,
        o.prototype.getVendorGVLVersion = function (e) {
            return T.isTcfV2Template ? e.iab2V2GVLVersion : e.iab2GVLVersion
        }
        ,
        o.prototype.removeElementsFromArray = function (e, t) {
            return e.filter(function (e) {
                return !t.includes(e)
            })
        }
        ,
        o.prototype.setPublisherRestrictions = function () {
            var i, t, s, a, e = A.Publisher;
            e && e.restrictions && (i = this.iabStringSDK(),
                t = e.restrictions,
                s = I.iabData,
                a = I.oneTrustIABConsent.vendorList.vendors,
                Object.keys(t).forEach(function (o) {
                    var n, r = t[o], e = T.iabGroups.purposes[o];
                    e && (n = {
                        description: e.description,
                        purposeId: e.id,
                        purposeName: e.name
                    }),
                        Object.keys(r).forEach(function (e) {
                            var t;
                            I.vendorsSetting[e] && (t = I.vendorsSetting[e].arrIndex,
                                1 === r[e] && -1 === a[e].purposes.indexOf(Number(o)) ? s.vendors[t].purposes.push(n) : 2 === r[e] && -1 === a[e].legIntPurposes.indexOf(Number(o)) && s.vendors[t].legIntPurposes.push(n),
                                t = i.purposeRestriction(Number(o), r[e]),
                                I.tcModel.publisherRestrictions.add(Number(e), t))
                        })
                }))
        }
        ,
        o.prototype.populateVendorListTCF = function () {
            return F(this, void 0, void 0, function () {
                var t, o, n, r, i, s, a, l, c;
                return M(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (t = this.iabStringSDK(),
                                o = I.iabData,
                                n = y.updateCorrectIABUrl(o.globalVendorListUrl),
                                r = !this.isIABCrossConsentEnabled(),
                                y.checkMobileOfflineRequest(y.getBannerVersionUrl())) ? [3, 1] : (T.mobileOnlineURL.push(n),
                                    i = t.gvl(n, I.gvlObj),
                                    [3, 3]);
                        case 1:
                            return a = (s = t).gvl,
                                l = [null],
                                [4, y.otFetchOfflineFile(S.getRelativeURL(n, !0))];
                        case 2:
                            i = a.apply(s, l.concat([e.sent()])),
                                e.label = 3;
                        case 3:
                            return this.removeInActiveVendorsForTcf(i),
                                T.tcf2ActiveVendors.all = Object.keys(i.vendors).length,
                                I.oneTrustIABConsent.vendorList = i,
                                this.assignIABDataWithGlobalVendorList(i),
                                c = I,
                                [4, t.tcModel(i)];
                        case 4:
                            c.tcModel = e.sent(),
                                r && this.setPublisherRestrictions(),
                                I.tcModel.cmpId = parseInt(o.cmpId),
                                T.isTcfV2Template && (I.tcModel.useNonStandardTexts = A.UseNonStandardStacks),
                                I.tcModel.cmpVersion = parseInt(o.cmpVersion);
                            try {
                                I.tcModel.consentLanguage = I.consentLanguage
                            } catch (e) {
                                I.tcModel.consentLanguage = "EN"
                            }
                            return I.tcModel.consentScreen = parseInt(o.consentScreen),
                                I.tcModel.isServiceSpecific = r,
                                I.tcModel.purposeOneTreatment = T.purposeOneTreatment,
                                A.PublisherCC ? I.tcModel.publisherCountryCode = A.PublisherCC : I.userLocation.country && (I.tcModel.publisherCountryCode = I.userLocation.country),
                                I.cmpApi = t.cmpApi(I.tcModel.cmpId, I.tcModel.cmpVersion, r, A.UseGoogleVendors ? {
                                    getTCData: this.addtlConsentString,
                                    getInAppTCData: this.addtlConsentString
                                } : void 0),
                                null !== this.alertBoxCloseDate() && !this.needReconsent() || this.resetTCModel(),
                                [2]
                    }
                })
            })
        }
        ,
        o.prototype.resetTCModel = function () {
            var e, t, o = this.iabStringSDK(), n = I.tcModel.clone();
            n.unsetAll(),
                T.legIntSettings.PAllowLI && (e = T.consentableIabGrps.filter(function (e) {
                    return e.HasLegIntOptOut && e.Type === P.GroupTypes.Pur
                }).map(function (e) {
                    return parseInt(T.iabGrpIdMap[e.CustomGroupId])
                }),
                    t = Object.keys(I.vendorsSetting).filter(function (e) {
                        return I.vendorsSetting[e].legInt
                    }).map(function (e) {
                        return parseInt(e)
                    }),
                    n.purposeLegitimateInterests.set(e),
                    n.vendorLegitimateInterests.set(t),
                    n.isServiceSpecific) && n.publisherLegitimateInterests.set(e),
                I.cmpApi.update(o.tcString().encode(n), !0)
        }
        ,
        o.prototype.addtlConsentString = function (e, t, o) {
            t && t.tcString && (t.addtlConsent = "" + I.addtlConsentVersion + (I.isAddtlConsent ? I.addtlVendors.vendorConsent.join(".") : "")),
                "function" == typeof e ? e(t, o) : console.error("__tcfapi received invalid parameters.")
        }
        ,
        o.prototype.setIabData = function () {
        I.iabData = "";// T.isTcfV2Template ? m.moduleInitializer.Iab2V2Data : m.moduleInitializer.IabV2Data,
                I.iabData.consentLanguage = I.consentLanguage
        }
        ,
        o.prototype.assignIABDataWithGlobalVendorList = function (r) {
            var i = this
                , s = A.OverriddenVendors
                , a = (I.iabData.vendorListVersion = r.vendorListVersion,
                    I.iabData.vendors = [],
                    A.IABDataCategories);
            Object.keys(r.vendors).forEach(function (n) {
                I.vendorsSetting[n] = {
                    consent: !0,
                    legInt: !0,
                    arrIndex: 0,
                    specialPurposesOnly: !1
                };
                var e = {}
                    , t = r.vendors[n]
                    , o = (e.vendorId = n,
                        e.vendorName = t.name,
                        e.policyUrl = t.policyUrl,
                        i.setIAB2VendorData(t, e),
                        e.cookieMaxAge = S.calculateCookieLifespan(t.cookieMaxAgeSeconds),
                        e.usesNonCookieAccess = t.usesNonCookieAccess,
                        e.deviceStorageDisclosureUrl = t.deviceStorageDisclosureUrl || null,
                        !t.legIntPurposes.length && !t.purposes.length && t.specialPurposes.length);
                T.legIntSettings.PAllowLI && ((!s[n] || s[n].legInt) && (s[n] || t.legIntPurposes.length) || o) || (I.vendorsSetting[n].legInt = !1),
                    T.legIntSettings.PAllowLI && o && (I.vendorsSetting[n].specialPurposesOnly = !0),
                    (!s[n] || s[n].consent) && (s[n] || t.purposes.length || t.flexiblePurposes.length) && (t.purposes.length || t.flexiblePurposes.length) || (I.vendorsSetting[n].consent = !1),
                    e.features = t.features.reduce(function (e, t) {
                        t = T.iabGroups.features[t];
                        return t && e.push({
                            description: t.description,
                            featureId: t.id,
                            featureName: t.name
                        }),
                            e
                    }, []),
                    e.specialFeatures = r.vendors[n].specialFeatures.reduce(function (e, t) {
                        t = T.iabGroups.specialFeatures[t];
                        return t && e.push({
                            description: t.description,
                            featureId: t.id,
                            featureName: t.name
                        }),
                            e
                    }, []),
                    i.mapDataDeclarationForVendor(r.vendors[n], e, a),
                    i.mapDataRetentionForVendor(r.vendors[n], e),
                    e.purposes = r.vendors[n].purposes.reduce(function (e, t) {
                        var o = T.iabGroups.purposes[t];
                        return !o || s[n] && s[n].disabledCP && -1 !== s[n].disabledCP.indexOf(t) || e.push({
                            description: o.description,
                            purposeId: o.id,
                            purposeName: o.name
                        }),
                            e
                    }, []),
                    e.legIntPurposes = r.vendors[n].legIntPurposes.reduce(function (e, t) {
                        var o = T.iabGroups.purposes[t];
                        return !o || s[n] && s[n].disabledLIP && -1 !== s[n].disabledLIP.indexOf(t) || e.push({
                            description: o.description,
                            purposeId: o.id,
                            purposeName: o.name
                        }),
                            e
                    }, []),
                    e.specialPurposes = t.specialPurposes.reduce(function (e, t) {
                        t = T.iabGroups.specialPurposes[t];
                        return t && e.push({
                            description: t.description,
                            purposeId: t.id,
                            purposeName: t.name
                        }),
                            e
                    }, []),
                    I.iabData.vendors.push(e),
                    I.vendorsSetting[n].arrIndex = I.iabData.vendors.length - 1
            })
        }
        ,
        o.prototype.mapDataDeclarationForVendor = function (e, t, n) {
            var o;
            T.isTcfV2Template && null != (o = e.dataDeclaration) && o.length && (t.dataDeclaration = e.dataDeclaration.reduce(function (e, t) {
                var o = n.find(function (e) {
                    return e.Id === t
                });
                return o && e.push({
                    Description: o.Description,
                    Id: o.Id,
                    Name: o.Name
                }),
                    e
            }, []))
        }
        ,
        o.prototype.mapDataRetentionForVendor = function (o, n) {
            var e;
            n.dataRetention = {},
                T.isTcfV2Template && o.dataRetention && (null !== (null == (e = o.dataRetention) ? void 0 : e.stdRetention) && void 0 !== (null == (e = o.dataRetention) ? void 0 : e.stdRetention) && (n.dataRetention = {
                    stdRetention: o.dataRetention.stdRetention
                }),
                    Object.keys(null == (e = o.dataRetention) ? void 0 : e.purposes).length && (n.dataRetention.purposes = JSON.parse(JSON.stringify(o.dataRetention.purposes)),
                        Object.keys(o.dataRetention.purposes).forEach(function (e) {
                            var t = T.iabGroups.purposes[e];
                            t && (n.dataRetention.purposes[e] = {
                                name: t.name,
                                id: t.id,
                                retention: o.dataRetention.purposes[e]
                            })
                        })),
                    Object.keys(null == (e = o.dataRetention) ? void 0 : e.specialPurposes).length) && (n.dataRetention.specialPurposes = JSON.parse(JSON.stringify(o.dataRetention.specialPurposes)),
                        Object.keys(o.dataRetention.specialPurposes).forEach(function (e) {
                            var t = T.iabGroups.specialPurposes[e];
                            t && (n.dataRetention.specialPurposes[e] = {
                                name: t.name,
                                id: t.id,
                                retention: o.dataRetention.specialPurposes[e]
                            })
                        }))
        }
        ,
        o.prototype.setIAB2VendorData = function (e, t) {
            var o, n, r;
            T.isTcfV2Template && (n = I.lang,
                r = (r = e.urls.find(function (e) {
                    return e.langId === n
                })) || e.urls[0],
                t.vendorPrivacyUrl = (null == (o = r) ? void 0 : o.privacy) || "",
                t.legIntClaim = (null == (o = r) ? void 0 : o.legIntClaim) || "",
                null != (r = e.dataDeclaration) && r.length && (t.dataDeclaration = e.dataDeclaration),
                e.DataRetention) && (t.DataRetention = e.DataRetention)
        }
        ,
        o.prototype.populateIABCookies = function () {
            return F(this, void 0, void 0, function () {
                return M(this, function (e) {
                    switch (e.label) {
                        case 0:
                            if (!this.isIABCrossConsentEnabled())
                                return [3, 5];
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]),
                                [4, this.setIAB3rdPartyCookie(v.EU_CONSENT, "", 0, !0)];
                        case 2:
                            return e.sent(),
                                [3, 4];
                        case 3:
                            return e.sent(),
                                this.setIABCookieData(),
                                this.updateCrossConsentCookie(!1),
                                [3, 4];
                        case 4:
                            return [3, 6];
                        case 5:
                            p.needReconsent() || this.setIABCookieData(),
                                e.label = 6;
                        case 6:
                            return [2]
                    }
                })
            })
        }
        ,
        o.prototype.setIAB3rdPartyCookie = function (e, t, o, n) {
            var r = A.iabThirdPartyConsentUrl;
            try {
                if (r && document.body)
                    return this.updateThirdPartyConsent(r, e, t, o, n);
                throw new ReferenceError
            } catch (e) {
                throw e
            }
        }
        ,
        o.prototype.setIABCookieData = function () {
            I.oneTrustIABConsent.IABCookieValue = k.getCookie(v.EU_PUB_CONSENT)
        }
        ,
        o.prototype.updateThirdPartyConsent = function (n, r, i, s, a) {
            return F(this, void 0, void 0, function () {
                var t, o;
                return M(this, function (e) {
                    return t = window.location.protocol + "//" + n + "/?name=" + r + "&value=" + i + "&expire=" + s + "&isFirstRequest=" + a,
                        document.getElementById("onetrustIabCookie") ? (document.getElementById("onetrustIabCookie").contentWindow.location.replace(t),
                            [2]) : (d(o = document.createElement("iframe"), "display: none;", !0),
                                o.id = "onetrustIabCookie",
                                o.setAttribute("title", "OneTrust IAB Cookie"),
                                o.src = t,
                                document.body.appendChild(o),
                                [2, new Promise(function (e) {
                                    o.onload = function () {
                                        T.thirdPartyiFrameResolve(),
                                            T.thirdPartyiFrameLoaded = !0,
                                            e()
                                    }
                                        ,
                                        o.onerror = function () {
                                            throw T.thirdPartyiFrameResolve(),
                                            T.thirdPartyiFrameLoaded = !0,
                                            e(),
                                            new URIError
                                        }
                                }
                                )])
                })
            })
        }
        ,
        o.prototype.setIABVendor = function (o, n) {
            var t;
            void 0 === o && (o = !0),
                void 0 === n && (n = !1),
                I.iabData.vendors.forEach(function (e) {
                    var t, e = e.vendorId;
                    T.legIntSettings.PAllowLI ? (t = void 0,
                        t = (n || !!I.vendorsSetting[e].consent) && o,
                        I.oneTrustIABConsent.vendors.push(e.toString() + ":" + t),
                        I.oneTrustIABConsent.legIntVendors.push(e.toString() + ":" + I.vendorsSetting[e].legInt)) : (I.oneTrustIABConsent.legIntVendors = [],
                            I.oneTrustIABConsent.vendors.push(e.toString() + ":" + o))
                }),
                A.UseGoogleVendors && (t = I.addtlVendors,
                    Object.keys(I.addtlVendorsList).forEach(function (e) {
                        o && (t.vendorSelected["" + e.toString()] = !0,
                            t.vendorConsent.push("" + e.toString()))
                    }))
        }
        ,
        o.prototype.setOrUpdate3rdPartyIABConsentFlag = function () {
            var e = this.getIABCrossConsentflagData();
            A.IsIabEnabled ? e && !this.needReconsent() || this.updateCrossConsentCookie(A.IsIabThirdPartyCookieEnabled) : e && !this.reconsentRequired() && "true" !== e || this.updateCrossConsentCookie(!1)
        }
        ,
        o.prototype.isIABCrossConsentEnabled = function () {
            return "true" === this.getIABCrossConsentflagData()
        }
        ,
        o.prototype.getIABCrossConsentflagData = function () {
            return k.readCookieParam(v.OPTANON_CONSENT, De.IS_IAB_GLOBAL)
        }
        ,
        o.prototype.setGeolocationInCookies = function () {
            var e, t = k.readCookieParam(v.OPTANON_CONSENT, De.GEO_LOCATION);
            I.userLocation && !t && this.isAlertBoxClosedAndValid() ? (e = I.userLocation.country + ";" + I.userLocation.state,
                this.setUpdateGeolocationCookiesData(e)) : this.reconsentRequired() && t && this.setUpdateGeolocationCookiesData("")
        }
        ,
        o.prototype.iabStringSDK = function () {
            var e = m.moduleInitializer.otIABModuleData;
            if (A.IsIabEnabled && e)
                return {
                    gvl: e.tcfSdkRef.gvl,
                    tcModel: e.tcfSdkRef.tcModel,
                    tcString: e.tcfSdkRef.tcString,
                    cmpApi: e.tcfSdkRef.cmpApi,
                    purposeRestriction: e.tcfSdkRef.purposeRestriction
                }
        }
        ,
        o.prototype.setUpdateGeolocationCookiesData = function (e) {
            k.writeCookieParam(v.OPTANON_CONSENT, De.GEO_LOCATION, e)
        }
        ,
        o.prototype.reconsentRequired = function () {
            return (m.moduleInitializer.MobileSDK || this.awaitingReconsent()) && this.needReconsent()
        }
        ,
        o.prototype.awaitingReconsent = function () {
            return "true" === k.readCookieParam(v.OPTANON_CONSENT, De.AWAITING_RE_CONSENT)
        }
        ,
        o.prototype.needReconsent = function () {
            var e = this.alertBoxCloseDate()
                , t = A.LastReconsentDate;
            return e && t && new Date(t) > new Date(e)
        }
        ,
        o.prototype.updateCrossConsentCookie = function (e) {
            k.writeCookieParam(v.OPTANON_CONSENT, De.IS_IAB_GLOBAL, e)
        }
        ,
        o.prototype.alertBoxCloseDate = function () {
            return k.getCookie(v.ALERT_BOX_CLOSED)
        }
        ,
        o.prototype.isAlertBoxClosedAndValid = function () {
            return null !== this.alertBoxCloseDate() && !this.reconsentRequired()
        }
        ,
        o.prototype.generateLegIntButtonElements = function (e, t, o) {
            return '<div class="ot-leg-btn-container" data-group-id="' + t + '" data-el-id="' + t + '-leg-out" is-vendor="' + (o = void 0 === o ? !1 : o) + '">\n                    <button class="ot-obj-leg-btn-handler ' + (e ? "ot-leg-int-enabled ot-inactive-leg-btn" : "ot-active-leg-btn") + '">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">\n                            <path fill="' + A.pcButtonTextColor + '" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>\n                        </svg>\n                        <span>' + (e ? T.legIntSettings.PObjectLegIntText : T.legIntSettings.PObjectionAppliedText) + '\n                        </span>\n                    </button>\n                    <button\n                        class="ot-remove-objection-handler"\n                            data-style="color:' + A.pcButtonColor + "; " + (e ? "display:none;" : "") + '"\n                    >\n                        ' + T.legIntSettings.PRemoveObjectionText + "\n                    </button>\n                </div>"
        }
        ,
        o.prototype.syncAlertBoxCookie = function (e) {
            var t = A.ReconsentFrequencyDays;
            k.setCookie(v.ALERT_BOX_CLOSED, e, t, !1, new Date(e))
        }
        ,
        o.prototype.syncCookieExpiry = function () {
            var e, t, o;
            I.syncRequired && (e = A.ReconsentFrequencyDays,
                t = k.getCookie(v.ALERT_BOX_CLOSED),
                o = k.getCookie(v.OPTANON_CONSENT),
                k.setCookie(v.OPTANON_CONSENT, o, e, !1, new Date(t)),
                p.needReconsent() && k.removeAlertBox(),
                (o = k.getCookie(v.EU_PUB_CONSENT)) && (p.isIABCrossConsentEnabled() ? k.removeIab2() : k.setCookie(v.EU_PUB_CONSENT, o, e, !1, new Date(t))),
                o = k.getCookie(v.ADDITIONAL_CONSENT_STRING)) && k.setCookie(v.ADDITIONAL_CONSENT_STRING, o, e, !1, new Date(t))
        }
        ,
        o.prototype.syncOtPreviewCookie = function () {
            var e = k.getCookie(v.OT_PREVIEW);
            e && k.setCookie(v.OT_PREVIEW, e, 1, !1)
        }
        ,
        o.prototype.dispatchConsentEvent = function () {
            window.dispatchEvent(new CustomEvent("OTConsentApplied", {
                OTConsentApplied: "yes"
            }))
        }
        ;
    var _, p = new o, Mt = function () { };
    Wt.prototype.isAlwaysActiveGroup = function (e) {
        var t;
        return !this.getGrpStatus(e) || (t = this.getGrpStatus(e).toLowerCase(),
            (t = e.Parent && t !== C.ALWAYS_ACTIVE ? this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase() : t) === C.ALWAYS_ACTIVE)
    }
        ,
        Wt.prototype.getGrpStatus = function (e) {
            return e && e.Status ? T.DNTEnabled && e.IsDntEnabled ? C.DNT : e.Status : ""
        }
        ,
        Wt.prototype.getParentGroup = function (t) {
            var e;
            return t && 0 < (e = A.Groups.filter(function (e) {
                return e.OptanonGroupId === t
            })).length ? e[0] : null
        }
        ,
        Wt.prototype.checkIfGroupHasConsent = function (t) {
            var e = I.groupsConsent
                , o = S.findIndex(e, function (e) {
                    return e.split(":")[0] === t.CustomGroupId
                });
            return -1 < o && "1" === e[o].split(":")[1]
        }
        ,
        Wt.prototype.checkIsActiveByDefault = function (e) {
            var t;
            return !this.getGrpStatus(e) || (t = this.getGrpStatus(e).toLowerCase(),
                (t = e.Parent && t !== C.ALWAYS_ACTIVE ? this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase() : t) === C.ALWAYS_ACTIVE) || t === C.INACTIVE_LANDING_PAGE || t === C.ACTIVE || t === C.DNT && !T.DNTEnabled
        }
        ,
        Wt.prototype.getGroupById = function (e) {
            for (var t = null, o = 0, n = A.Groups; o < n.length; o++) {
                for (var r = n[o], i = 0, s = q(r.SubGroups, [r]); i < s.length; i++) {
                    var a = s[i];
                    if (a.CustomGroupId === e) {
                        t = a;
                        break
                    }
                }
                if (t)
                    break
            }
            return t
        }
        ,
        Wt.prototype.isSoftOptInGrp = function (e) {
            return !!e && (e = e && !e.Parent ? e : f.getParentGroup(e.Parent),
                "inactive landingpage" === f.getGrpStatus(e).toLowerCase())
        }
        ,
        Wt.prototype.isOptInGrp = function (e) {
            return !!e && "inactive" === f.getGrpStatus(e).toLowerCase()
        }
        ,
        Wt.prototype.getParentByGrp = function (e) {
            return e.Parent ? this.getGroupById(e.Parent) : null
        }
        ,
        Wt.prototype.getVSById = function (e) {
            return I.getVendorsInDomain().get(e)
        }
        ,
        Wt.prototype.getGrpByVendorId = function (e) {
            var t = null;
            return t = I.getVendorsInDomain().has(e) ? I.getVendorsInDomain().get(e).groupRef : t
        }
        ;
    var f, qt, Ut, jt, zt, Kt = Wt;
    function Wt() { }
    (a = qt = qt || {}).SaleOptOut = "SaleOptOutCID",
        a.SharingOptOut = "SharingOptOutCID",
        a.PersonalDataConsents = "PersonalDataCID",
        (a = Ut = Ut || {}).SharingOptOutNotice = "SharingOptOutCID",
        a.SaleOptOutNotice = "SaleOptOutCID",
        a.SensitiveDataLimitUseNotice = "SensitivePICID || SensitiveSICID || GeolocationCID || RREPInfoCID || CommunicationCID || GeneticCID|| BiometricCID || HealthCID || SexualOrientationCID",
        (a = jt = jt || {}).KnownChildSensitiveDataConsents1 = "KnownChildSellPICID",
        a.KnownChildSensitiveDataConsents2 = "KnownChildSharePICID",
        (a = zt = zt || {}).SensitiveDataProcessing1 = "SensitivePICID",
        a.SensitiveDataProcessing2 = "SensitiveSICID",
        a.SensitiveDataProcessing3 = "GeolocationCID",
        a.SensitiveDataProcessing4 = "RREPInfoCID",
        a.SensitiveDataProcessing5 = "CommunicationCID",
        a.SensitiveDataProcessing6 = "GeneticCID",
        a.SensitiveDataProcessing7 = "BiometricCID",
        a.SensitiveDataProcessing8 = "HealthCID",
        a.SensitiveDataProcessing9 = "SexualOrientationCID";
    Xt.prototype.initialiseCssReferences = function () {
        var e, t = "";
        document.getElementById("onetrust-style") ? e = document.getElementById("onetrust-style") : ((e = document.createElement("style")).id = "onetrust-style",
            m.moduleInitializer.CookieV2CSPEnabled && I.nonce && e.setAttribute("nonce", I.nonce)),
            w.commonStyles && (t += w.commonStyles),
            w.bannerGroup && (t += w.bannerGroup.css,
                m.fp.CookieV2SSR || (t += this.addCustomBannerCSS()),
                A.bannerCustomCSS) && (t += A.bannerCustomCSS),
            w.preferenceCenterGroup && (t = (t += w.preferenceCenterGroup.css) + this.addCustomPreferenceCenterCSS()),
            w.cookieListGroup && !m.fp.CookieV2TrackingTechnologies && (t = (t += w.cookieListGroup.css) + this.addCustomCookieListCSS()),
            A.cookiePersistentLogo && !A.cookiePersistentLogo.includes("ot_guard_logo.svg") && (t += ".ot-floating-button__front{background-image:url('" + y.updateCorrectUrl(A.cookiePersistentLogo) + "')}"),
            this.processedCSS = t,
            T.ignoreInjectingHtmlCss || (e.textContent = t,
                L(document.head).append(e))
    }
        ,
        Xt.prototype.setButonColor = function () {
            var e, t = A.pcButtonColor, o = A.pcButtonTextColor, n = A.pcLegIntButtonColor, r = A.pcLegIntButtonTextColor, i = "";
            return (t || o) && (e = T.pcName === rt ? "#onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Category_Item + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk.ot-leg-opt-out " + b.P_Li_Hdr + "{\n                    border-color: " + t + ";\n                }" : "",
                i = "#onetrust-consent-sdk #onetrust-pc-sdk\n            button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {\n                " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (o ? "color: " + o + ";" : "") + "\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk ." + b.P_Active_Menu + " {\n                " + (t ? "border-color: " + t + ";" : "") + "\n            }\n            " + e + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler{\n                background-color: transparent;\n                border: 1px solid transparent;\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {\n                " + (n ? "background-color: " + n + ";" : "") + "\n                " + (r ? "color: " + r + "; border-color: " + r + ";" : "") + "\n            }"),
                i
        }
        ,
        Xt.prototype.setFocusBorderColor = function () {
            var e = ""
                , t = A.PCFocusBorderColor;
            return t && (e += '\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-tgl input:focus + .ot-switch, .ot-switch .ot-switch-nob, .ot-switch .ot-switch-nob:before,\n            #onetrust-pc-sdk .ot-checkbox input[type="checkbox"]:focus + label::before,\n            #onetrust-pc-sdk .ot-chkbox input[type="checkbox"]:focus + label::before {\n                outline-color: ' + t + ";\n                outline-width: 1px;\n            }\n            #onetrust-pc-sdk .ot-host-item > button:focus, #onetrust-pc-sdk .ot-ven-item > button:focus {\n                border: 1px solid " + t + ";\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-vlst-cntr > a:focus {\n               outline: 1px solid " + t + ";\n            }"),
                e
        }
        ,
        Xt.prototype.setCloseIconColor = function () {
            var e = "";
            return A.PCCloseButtonType === be.Link && (e += "#onetrust-pc-sdk.ot-close-btn-link .ot-close-icon {color: " + A.PCContinueColor + "}"),
                e
        }
        ,
        Xt.prototype.setTabLayoutStyles = function () {
            var e = ""
                , t = A.pcMenuColor
                , o = A.pcMenuHighLightColor;
            return T.pcName === g && (t && (e += "#onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {\n                    background-color: " + t + "\n                }"),
                o) && (e += "#onetrust-consent-sdk #onetrust-pc-sdk ." + b.P_Active_Menu + " {\n                    background-color: " + o + "\n                }"),
                e
        }
        ,
        Xt.prototype.setFocusIfTemplateUpgrade = function () {
            var e = ""
                , t = A.PCFocusBorderColor;
            return !A.PCTemplateUpgrade && t && (e += '\n            #onetrust-pc-sdk input[type="checkbox"]:focus + .accordion-header,\n            #onetrust-pc-sdk .category-item .ot-switch.ot-toggle input:focus + .ot-switch-label,\n            #onetrust-pc-sdk .checkbox input:focus + label::after {\n                outline-color: ' + t + ";\n                outline-width: 1px;\n            }"),
                e
        }
        ,
        Xt.prototype.setExtLnkUrl = function () {
            var e = ""
                , t = y.updateCorrectUrl(A.OTExternalLinkLogo);
            return t && (e += "#onetrust-pc-sdk .ot-vlst-cntr .ot-ext-lnk,  #onetrust-pc-sdk .ot-ven-hdr .ot-ext-lnk{\n                    background-image: url('" + t + "');\n                }\n            "),
                e
        }
        ,
        Xt.prototype.setCustomCss = function () {
            var e = "";
            return A.pcCustomCSS && (e += A.pcCustomCSS),
                e
        }
        ;
    var Yt, Jt = Xt;
    function Xt() {
        this.processedCSS = "",
            this.addCustomBannerCSS = function () {
                var e = A.backgroundColor
                    , t = A.buttonColor
                    , o = A.textColor
                    , n = A.buttonTextColor
                    , r = A.bannerMPButtonColor
                    , i = A.bannerMPButtonTextColor
                    , s = A.bannerAccordionBackgroundColor
                    , a = A.BSaveBtnColor
                    , l = A.BCategoryContainerColor
                    , c = A.BLineBreakColor
                    , d = A.BCategoryStyleColor
                    , p = A.bannerLinksTextColor
                    , u = A.BFocusBorderColor
                    , o = "\n        " + (T.bannerName === $e ? e ? "#onetrust-consent-sdk #onetrust-banner-sdk .ot-sdk-container {\n                    background-color: " + e + ";}" : "" : e ? "#onetrust-consent-sdk #onetrust-banner-sdk {background-color: " + e + ";}" : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-policy-title,\n                    #onetrust-consent-sdk #onetrust-policy-text,\n                    #onetrust-consent-sdk .ot-b-addl-desc,\n                    #onetrust-consent-sdk .ot-dpd-desc,\n                    #onetrust-consent-sdk .ot-dpd-title,\n                    #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,\n                    #onetrust-banner-sdk .ot-cat-header,\n                    #onetrust-banner-sdk .ot-optout-signal\n                    {\n                        color: " + o + ";\n                    }" : "") + "\n            " + (s ? "#onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {\n                    background-color: " + s + ";}" : "") + "\n            " + (p ? " #onetrust-consent-sdk #onetrust-banner-sdk a[href],\n                    #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,\n                    #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn\n                        {\n                            color: " + p + ";\n                        }" : "");
                return (t || n) && (o += "#onetrust-consent-sdk #onetrust-accept-btn-handler,\n                         #onetrust-banner-sdk #onetrust-reject-all-handler {\n                            " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (n ? "color: " + n + ";" : "") + "\n            }"),
                    u && (o += "\n            #onetrust-consent-sdk #onetrust-banner-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-banner-sdk:focus {\n               outline-color: " + u + ";\n               outline-width: 1px;\n            }"),
                    (i || r) && (o += "\n            #onetrust-consent-sdk #onetrust-pc-btn-handler,\n            #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {\n                " + (i ? "color: " + i + "; border-color: " + i + ";" : "") + "\n                background-color:\n                " + (r && !A.BannerSettingsButtonDisplayLink ? r : e) + ";\n            }"),
                    T.bannerName === tt && (r = i = t = p = s = void 0,
                        d && (i = "background-color: " + d + ";",
                            r = "border-color: " + d + ";"),
                        u && (o += "\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-tgl input:focus+.ot-switch .ot-switch-nob,\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-chkbox input:focus + label::before {\n                    outline-color: " + u + ";\n                    outline-width: 1px;\n                }"),
                        o += "#onetrust-banner-sdk .ot-bnr-save-handler {" + (s = a ? "color: " + n + ";border-color: " + n + ";background-color: " + a + ";" : s) + "}#onetrust-banner-sdk .ot-cat-lst {" + (p = l ? "background-color: " + l + ";" : p) + "}#onetrust-banner-sdk .ot-cat-bdr {" + (t = c ? "border-color: " + c + ";" : t) + "}#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob:before,#onetrust-banner-sdk .ot-chkbox input:checked~label::before {" + i + "}#onetrust-banner-sdk .ot-chkbox label::before,#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob {" + r + "}#onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {background: inherit}"),
                    A.BCloseButtonType === be.Link && (o += "#onetrust-banner-sdk.ot-close-btn-link .banner-close-button {color: " + A.BContinueColor + "}"),
                    o
            }
            ,
            this.addCustomPreferenceCenterCSS = function () {
                var e = A.pcBackgroundColor
                    , t = A.pcTextColor
                    , o = A.pcLinksTextColor
                    , n = A.PCenterEnableAccordion
                    , r = A.pcAccordionBackgroundColor
                    , e = "\n            " + (e ? (T.pcName === rt ? "#onetrust-consent-sdk #onetrust-pc-sdk .group-parent-container,\n                        #onetrust-consent-sdk #onetrust-pc-sdk .manage-pc-container,\n                        #onetrust-pc-sdk " + b.P_Vendor_List : "#onetrust-consent-sdk #onetrust-pc-sdk") + ",\n                #onetrust-consent-sdk " + b.P_Search_Cntr + ",\n                " + (n && T.pcName === rt ? "#onetrust-consent-sdk #onetrust-pc-sdk .ot-accordion-layout" + b.P_Category_Item : "#onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle") + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Tab_Grp_Hdr + " .checkbox,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Title + ":after\n                " + (m.isV2Template ? ",#onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,\n                        #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,\n                        #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Triangle : "") + " {\n                    background-color: " + e + ";\n                }\n               " : "") + "\n            " + (t ? "#onetrust-consent-sdk #onetrust-pc-sdk h3,\n                #onetrust-consent-sdk #onetrust-pc-sdk h4,\n                #onetrust-consent-sdk #onetrust-pc-sdk h5,\n                #onetrust-consent-sdk #onetrust-pc-sdk h6,\n                #onetrust-consent-sdk #onetrust-pc-sdk p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Vendor_Container + " " + b.P_Ven_Opts + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Policy_Txt + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Li_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Leg_Select_All + " span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Host_Cntr + " " + b.P_Host_Info + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Fltr_Modal + " #modal-header,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Vendor_List + " " + b.P_Select_Cntr + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Vendor_List + " " + b.P_Vendor_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Vendor_List + " .back-btn-handler p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Vendor_List + " " + b.P_Ven_Name + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Vendor_List + " " + b.P_Vendor_Container + " .consent-category,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-optout-signal\n                {\n                    color: " + t + ";\n                }" : "") + "\n            " + (o ? " #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-pgph-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Ven_Link + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Ven_Leg_Claim + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Host_Cntr + " " + b.P_Host_Title + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Host_Cntr + " " + b.P_Acc_Header + " " + b.P_Host_View_Cookies + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Host_Cntr + " " + b.P_Host_Info + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Content + " " + b.P_Policy_Txt + " .ot-link-btn,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info a\n                    {\n                        color: " + o + ";\n                    }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover { text-decoration: underline;}\n            " + (n && r ? "#onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Acc_Container + b.P_Acc_Txt + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Acc_Txt + " " + b.P_Subgrp_Tgl_Cntr + " .ot-switch.ot-toggle\n             {\n                background-color: " + r + ";\n            }" : "") + "\n            " + (r ? " #onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Host_Cntr + " " + b.P_Host_Info + ",\n                    " + (m.isV2Template ? "#onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Acc_Txt + " .ot-ven-dets" : "#onetrust-consent-sdk #onetrust-pc-sdk " + b.P_Acc_Txt + " " + b.P_Ven_Opts) + "\n                            {\n                                background-color: " + r + ";\n                            }" : "") + "\n        ";
                return (e += Yt.setButonColor()) + Yt.setFocusBorderColor() + Yt.setCloseIconColor() + Yt.setTabLayoutStyles() + Yt.setTabLayoutStyles() + Yt.setFocusIfTemplateUpgrade() + Yt.setExtLnkUrl() + Yt.setCustomCss()
            }
            ,
            this.addCustomCookieListCSS = function () {
                var e = A.CookiesV2NewCookiePolicy ? "-v2.ot-sdk-cookie-policy" : ""
                    , e = "\n                " + (A.cookieListPrimaryColor ? "\n                    #ot-sdk-cookie-policy" + e + " h5,\n                    #ot-sdk-cookie-policy" + e + " h6,\n                    #ot-sdk-cookie-policy" + e + " li,\n                    #ot-sdk-cookie-policy" + e + " p,\n                    #ot-sdk-cookie-policy" + e + " a,\n                    #ot-sdk-cookie-policy" + e + " span,\n                    #ot-sdk-cookie-policy" + e + " td,\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-description {\n                        color: " + A.cookieListPrimaryColor + ";\n                    }" : "") + "\n                    " + (A.cookieListTableHeaderColor ? "#ot-sdk-cookie-policy" + e + " th {\n                        color: " + A.cookieListTableHeaderColor + ";\n                    }" : "") + "\n                    " + (A.cookieListGroupNameColor ? "#ot-sdk-cookie-policy" + e + " .ot-sdk-cookie-policy-group {\n                        color: " + A.cookieListGroupNameColor + ";\n                    }" : "") + "\n                    " + (A.cookieListTitleColor ? "\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-title {\n                            color: " + A.cookieListTitleColor + ";\n                        }\n                    " : "") + "\n            " + (e && A.CookieListTableHeaderBackgroundColor ? "\n                    #ot-sdk-cookie-policy" + e + " table th {\n                            background-color: " + A.CookieListTableHeaderBackgroundColor + ";\n                        }\n                    " : "") + "\n            ";
                return A.cookieListCustomCss && (e += A.cookieListCustomCss),
                    e
            }
    }
    Zt.prototype.getAllowAllButton = function () {
        return L("#onetrust-pc-sdk #accept-recommended-btn-handler")
    }
        ,
        Zt.prototype.getSelectedVendors = function () {
            return L("#onetrust-pc-sdk " + b.P_Tgl_Cntr + " .ot-checkbox input:checked")
        }
        ;
    var Qt, $t = Zt;
    function Zt() { }
    oo.prototype.isIabCookieValid = function () {
        var e = null;
        return null !== (e = T.isIab2orv2Template ? k.getCookie("eupubconsent-v2") : e)
    }
        ,
        oo.prototype.iabTypeIsChanged = function () {
            this.isIabCookieValid() || (k.removeAlertBox(),
                k.removeIab1())
        }
        ,
        oo.prototype.initializeIABModule = function () {
            return F(this, void 0, void 0, function () {
                return M(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return A.IsIabEnabled ? (m.moduleInitializer.otIABModuleData = window.otIabModule,
                                p.setIabData(),
                                [4, p.populateVendorListTCF()]) : [3, 2];
                        case 1:
                            return e.sent(),
                                p.isIABCrossConsentEnabled() || this.iabTypeIsChanged(),
                                p.populateIABCookies(),
                                A.UseGoogleVendors && this.removeInActiveAddtlVendors(),
                                [3, 3];
                        case 2:
                            k.removeIab1(),
                                e.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })
        }
        ,
        oo.prototype.removeInActiveAddtlVendors = function () {
            var e, t = A.OverridenGoogleVendors;
            for (e in I.addtlVendorsList)
                t && t[e] && !t[e].active && delete I.addtlVendorsList[e]
        }
        ,
        oo.prototype.getIABConsentData = function () {
            var e = I.oneTrustIABConsent
                , t = p.iabStringSDK().tcString()
                , o = (I.tcModel.unsetAllPurposeConsents(),
                    I.tcModel.unsetAllVendorConsents(),
                    I.tcModel.unsetAllVendorLegitimateInterests(),
                    I.tcModel.unsetAllSpecialFeatureOptins(),
                    I.tcModel.unsetAllPurposeLegitimateInterests(),
                    I.tcModel.publisherConsents.empty(),
                    I.tcModel.publisherLegitimateInterests.empty(),
                    I.tcModel.purposeConsents.set(S.getActiveIdArray(e.purpose)),
                    I.tcModel.publisherConsents.set(S.getActiveIdArray(e.purpose)),
                    T.legIntSettings.PAllowLI ? S.getActiveIdArray(e.legimateInterest) : [])
                , o = (I.tcModel.purposeLegitimateInterests.set(o),
                    I.tcModel.publisherLegitimateInterests.set(o),
                    I.tcModel.vendorConsents.set(S.getActiveIdArray(S.distinctArray(e.vendors))),
                    T.legIntSettings.PAllowLI && !o.length && (e.legIntVendors = []),
                    I.tcModel.vendorLegitimateInterests.set(S.getActiveIdArray(S.distinctArray(e.legIntVendors))),
                    I.tcModel.specialFeatureOptins.set(S.getActiveIdArray(e.specialFeatures)),
                    new Date)
                , e = new Date(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate(), 0, 0, 0)
                , o = (I.tcModel.lastUpdated = e,
                    I.tcModel.created = e,
                    t.encode(I.tcModel));
            return I.cmpApi.update(o, !1),
                o
        }
        ,
        oo.prototype.decodeTCString = function (e) {
            return p.iabStringSDK().tcString().decode(e)
        }
        ,
        oo.prototype.getVendorConsentsRequestV2 = function (e) {
            var o;
            return window.__tcfapi("getInAppTCData", 2, function (e, t) {
                o = [e, t]
            }),
                e.apply(this, o)
        }
        ,
        oo.prototype.getPingRequestForTcf = function (e) {
            var t;
            return window.__tcfapi("ping", 2, function (e) {
                t = [e]
            }),
                e.apply(this, t)
        }
        ,
        oo.prototype.populateVendorAndPurposeFromCookieData = function () {
            var n = I.oneTrustIABConsent
                , e = eo.decodeTCString(n.IABCookieValue)
                , t = P.GroupTypes
                , r = {}
                , i = {}
                , s = (T.iabGrps.forEach(function (e) {
                    e.Type === t.Pur ? r[T.iabGrpIdMap[e.CustomGroupId]] = e : e.Type === t.Spl_Ft && (i[T.iabGrpIdMap[e.CustomGroupId]] = e)
                }),
                    []);
            this.syncVendorConsent(e),
                s = [],
                e.vendorLegitimateInterests.forEach(function (e, t) {
                    var o = e;
                    I.vendorsSetting[t] && I.vendorsSetting[t].legInt || !e || (s.push(t),
                        o = !1),
                        n.legIntVendors.push(t + ":" + o)
                }),
                e.vendorLegitimateInterests.unset(s),
                s = [],
                e.purposeConsents.forEach(function (e, o) {
                    var t = e
                        , e = (!(r[o] && r[o].HasConsentOptOut) && e && (s.push(o),
                            t = !1),
                            S.findIndex(n.purpose, function (e, t) {
                                return e.split(":")[0] === o.toString()
                            }));
                    -1 === e ? n.purpose.push(o + ":" + t) : n.purpose[e] = o + ":" + t
                }),
                e.purposeConsents.unset(s),
                e.publisherConsents.unset(s),
                s = [],
                e.specialFeatureOptins.forEach(function (e, o) {
                    var t = e
                        , e = (!(i[o] && i[o].HasConsentOptOut) && e && (s.push(o),
                            t = !1),
                            S.findIndex(n.specialFeatures, function (e, t) {
                                return e.split(":")[0] === o.toString()
                            }));
                    -1 === e ? n.specialFeatures.push(o + ":" + t) : n.specialFeatures[e] = o + ":" + t
                }),
                e.specialFeatureOptins.unset(s),
                this.syncPurAndPubLegInt(e, r),
                this.syncBundleAndStack(),
                e.gvl = I.tcModel.gvl,
                e.isServiceSpecific = !p.isIABCrossConsentEnabled(),
                I.tcModel = e,
                p.isAlertBoxClosedAndValid() ? I.cmpApi.update(n.IABCookieValue, !1) : p.resetTCModel()
        }
        ,
        oo.prototype.syncVendorConsent = function (e) {
            var n = []
                , r = I.oneTrustIABConsent;
            e.vendorConsents.forEach(function (e, t) {
                var o = e;
                I.vendorsSetting[t] && I.vendorsSetting[t].consent || !e || (n.push(t),
                    o = !1),
                    r.vendors.push(t + ":" + o)
            }),
                e.vendorConsents.unset(n)
        }
        ,
        oo.prototype.syncPurAndPubLegInt = function (e, n) {
            var r = []
                , i = I.oneTrustIABConsent;
            e.purposeLegitimateInterests.forEach(function (e, o) {
                var t = e
                    , e = (!(n[o] && n[o].HasLegIntOptOut && T.legIntSettings.PAllowLI) && e && (r.push(o),
                        t = !1),
                        S.findIndex(i.legimateInterest, function (e, t) {
                            return e.split(":")[0] === o.toString()
                        }));
                -1 === e ? i.legimateInterest.push(o + ":" + t) : i.legimateInterest[e] = o + ":" + t
            }),
                e.purposeLegitimateInterests.unset(r),
                e.publisherLegitimateInterests.unset(r)
        }
        ,
        oo.prototype.syncBundleAndStack = function () {
            var e = k.readCookieParam(v.OPTANON_CONSENT, "groups")
                , n = (I.groupsConsent = S.strToArr(e),
                    P.GroupTypes);
            A.Groups.forEach(function (t) {
                var e, o;
                t.Type !== n.Bundle && t.Type !== n.Stack || (o = y.isBundleOrStackActive(t),
                    e = S.findIndex(I.groupsConsent, function (e) {
                        return e.split(":")[0] === t.CustomGroupId
                    }),
                    o = t.CustomGroupId + ":" + Number(o),
                    -1 < e ? I.groupsConsent[e] = o : I.groupsConsent.push(o))
            }),
                k.writeCookieParam(v.OPTANON_CONSENT, "groups", I.groupsConsent.join(","))
        }
        ,
        oo.prototype.populateGoogleConsent = function () {
            var e;
            A.UseGoogleVendors && (e = k.getCookie(v.ADDITIONAL_CONSENT_STRING)) && (I.isAddtlConsent = !0,
                I.addtlVendors.vendorConsent = e.replace(I.addtlConsentVersion, "").split("."))
        }
        ,
        oo.prototype.isInitIABCookieData = function (e) {
            return "init" === e || p.needReconsent()
        }
        ,
        oo.prototype.updateFromGlobalConsent = function (e) {
            var t = I.oneTrustIABConsent;
            t.IABCookieValue = e,
                t.purpose = t.purpose || [],
                t.specialFeatures = t.specialFeatures || [],
                t.legIntVendors = [],
                t.legimateInterest = t.legimateInterest || [],
                t.vendors = [],
                eo.populateVendorAndPurposeFromCookieData(),
                k.setCookie(v.EU_PUB_CONSENT, "", -1)
        }
        ;
    var eo, to = oo;
    function oo() { }
    ro.prototype.loadBanner = function () {
        m.moduleInitializer.ScriptDynamicLoadEnabled ? "complete" === document.readyState ? L(window).trigger("otloadbanner") : window.addEventListener("load", function (e) {
            L(window).trigger("otloadbanner")
        }) : "loading" !== document.readyState ? L(window).trigger("otloadbanner") : window.addEventListener("DOMContentLoaded", function (e) {
            L(window).trigger("otloadbanner")
        }),
            T.pubDomainData.IsBannerLoaded = !0
    }
        ,
        ro.prototype.OnConsentChanged = function (e) {
            var t = e.toString();
            u.consentChangedEventMap[t] || (u.consentChangedEventMap[t] = !0,
                window.addEventListener("consent.onetrust", e))
        }
        ,
        ro.prototype.triggerGoogleAnalyticsEvent = function (e, t, o, n) {
            var r = !1;
            m.moduleInitializer.GATrackToggle && ("AS" === m.moduleInitializer.GATrackAssignedCategory || "" === m.moduleInitializer.GATrackAssignedCategory || window.OnetrustActiveGroups.includes("," + m.moduleInitializer.GATrackAssignedCategory + ",")) && (r = !0),
                !T.ignoreGoogleAnlyticsCall && r && (void 0 !== window._gaq && window._gaq.push(["_trackEvent", e, t, o, n]),
                    "function" == typeof window.ga && window.ga("send", "event", e, t, o, n),
                    r = window[T.otDataLayer.name],
                    !T.otDataLayer.ignore) && void 0 !== r && r && r.constructor === Array && ("function" == typeof window.gtag ? window.gtag("event", "trackOptanonEvent", {
                        optanonCategory: e,
                        optanonAction: t,
                        optanonLabel: o,
                        optanonValue: n
                    }) : r.push({
                        event: "trackOptanonEvent",
                        optanonCategory: e,
                        optanonAction: t,
                        optanonLabel: o,
                        optanonValue: n
                    }))
        }
        ,
        ro.prototype.setAlertBoxClosed = function (e) {
            var t = (new Date).toISOString()
                , e = (e ? k.setCookie(v.ALERT_BOX_CLOSED, t, A.ReconsentFrequencyDays) : k.setCookie(v.ALERT_BOX_CLOSED, t, 0),
                    L(".onetrust-pc-dark-filter").el[0]);
            e && "none" !== getComputedStyle(e).getPropertyValue("display") && L(".onetrust-pc-dark-filter").fadeOut(400)
        }
        ,
        ro.prototype.updateConsentFromCookie = function (t) {
            return F(this, void 0, void 0, function () {
                return M(this, function (e) {
                    return t ? (eo.isInitIABCookieData(t) || eo.updateFromGlobalConsent(t),
                        "init" === t && (k.removeIab1(),
                            p.isAlertBoxClosedAndValid() && p.resetTCModel(),
                            k.removeAlertBox())) : (p.resetTCModel(),
                                p.updateCrossConsentCookie(!1),
                                p.setIABCookieData()),
                        u.assetPromise.then(function () {
                            u.loadBanner()
                        }),
                        [2]
                })
            })
        }
        ;
    var u, no = ro;
    function ro() {
        var t = this;
        this.consentChangedEventMap = {},
            this.assetResolve = null,
            this.assetPromise = new Promise(function (e) {
                t.assetResolve = e
            }
            )
    }
    var io, so = "groups", ao = "hosts", lo = "genVendors", co = "vs", po = (uo.prototype.writeHstParam = function (e, t) {
        k.writeCookieParam(e, "hosts", S.arrToStr((t = void 0 === t ? null : t) || I.hostsConsent))
    }
        ,
        uo.prototype.writeGenVenCookieParam = function (e) {
            var t = A.GeneralVendors
                , o = I.genVendorsConsent
                , n = "";
            t.forEach(function (e) {
                n += e.VendorCustomId + ":" + (o[e.VendorCustomId] ? "1" : "0") + ","
            }),
                k.writeCookieParam(e, "genVendors", n)
        }
        ,
        uo.prototype.writeVSConsentCookieParam = function (e) {
            var o = "";
            I.vsConsent.forEach(function (e, t) {
                return o += t + ":" + (e ? "1" : "0") + ","
            }),
                o = o.slice(0, -1),
                k.writeCookieParam(e, co, o)
        }
        ,
        uo.prototype.updateGroupsInCookie = function (e, t) {
            k.writeCookieParam(e, "groups", S.arrToStr((t = void 0 === t ? null : t) || I.groupsConsent))
        }
        ,
        uo.prototype.writeGrpParam = function (e, t) {
            this.updateGroupsInCookie(e, t = void 0 === t ? null : t),
                A.IsIabEnabled && p.isAlertBoxClosedAndValid() && this.insertOrUpdateIabCookies()
        }
        ,
        uo.prototype.insertOrUpdateIabCookies = function () {
            var e, t = I.oneTrustIABConsent;
            t.purpose && t.vendors && (I.isAddtlConsent = A.UseGoogleVendors,
                t.IABCookieValue = eo.getIABConsentData(),
                e = A.ReconsentFrequencyDays,
                p.isIABCrossConsentEnabled() ? p.setIAB3rdPartyCookie(v.EU_CONSENT, t.IABCookieValue, e, !1) : (k.setCookie(v.EU_PUB_CONSENT, t.IABCookieValue, e),
                    A.UseGoogleVendors && k.setCookie(v.ADDITIONAL_CONSENT_STRING, "" + I.addtlConsentVersion + I.addtlVendors.vendorConsent.join("."), e)))
        }
        ,
        uo);
    function uo() { }
    Co.prototype.initGenVendorConsent = function () {
        var e, t, n = this;
        A.GenVenOptOut ? (e = T.consentableGrps,
            (t = k.readCookieParam(v.OPTANON_CONSENT, "genVendors")) ? (I.genVendorsConsent = {},
                t.split(",").forEach(function (e) {
                    e && "1" === (e = e.split(":"))[1] && (I.genVendorsConsent[e[0]] = !0)
                })) : (I.genVendorsConsent = {},
                    e.forEach(function (e) {
                        var o = I.syncRequired ? f.checkIfGroupHasConsent(e) : f.checkIsActiveByDefault(e);
                        e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function (e) {
                            var t = n.isGenVenPartOfAlwaysActiveGroup(e);
                            I.genVendorsConsent[e] = t || o
                        })
                    }))) : (I.genVendorsConsent = {},
                        io.writeGenVenCookieParam(v.OPTANON_CONSENT))
    }
        ,
        Co.prototype.populateGenVendorLists = function () {
            T.consentableGrps.forEach(function (e) {
                e.GeneralVendorsIds && (f.isAlwaysActiveGroup(e) ? e.GeneralVendorsIds.forEach(function (e) {
                    I.alwaysActiveGenVendors.push(e)
                }) : f.isOptInGrp(e) ? e.GeneralVendorsIds.forEach(function (e) {
                    I.optInGenVendors.push(e)
                }) : f.isSoftOptInGrp(e) && e.GeneralVendorsIds.forEach(function (e) {
                    I.optInGenVendors.includes(e) || I.softOptInGenVendors.push(e)
                }))
            })
        }
        ,
        Co.prototype.updateGenVendorStatus = function (e, t) {
            I.genVendorsConsent[e] = t || this.isGenVenPartOfAlwaysActiveGroup(e)
        }
        ,
        Co.prototype.isGenVenPartOfAlwaysActiveGroup = function (e) {
            return I.alwaysActiveGenVendors.includes(e)
        }
        ;
    var go, ho = Co;
    function Co() { }
    mo.prototype.synchroniseCookieGroupData = function (e) {
        var t = k.readCookieParam(v.OPTANON_CONSENT, "groups")
            , n = S.strToArr(t)
            , r = S.strToArr(t.replace(/:0|:1/g, ""))
            , t = p.needReconsent()
            , i = !1
            , s = !1
            , a = P.GroupTypes;
        e.forEach(function (e) {
            var t, o = e.CustomGroupId;
            e.Type !== a.Bundle && e.Type !== a.Stack && (-1 === S.indexOf(r, o) ? (i = !0,
                t = f.checkIsActiveByDefault(e),
                s = !0,
                n.push(o + (t ? ":1" : ":0"))) : T.gpcEnabled && e.IsGpcEnabled && T.gpcValueChanged && -1 < (t = n.indexOf(o + ":1")) && (s = !0,
                    I.gpcConsentTxn = !0,
                    n[t] = o + ":0"))
        }),
            s = this.updateConsentForBundleGrps(e, n, r, s, t),
            (s = this.removeRedundantGrpsFromCookie(n, t, s)) && (I.fireOnetrustGrp = !0,
                io.updateGroupsInCookie(v.OPTANON_CONSENT, n),
                I.syncRequired) && i && k.removeAlertBox()
    }
        ,
        mo.prototype.removeRedundantGrpsFromCookie = function (e, o, t) {
            for (var n = e.length, r = t; n--;)
                !function () {
                    var t = e[n].replace(/:0|:1/g, "");
                    A.Groups.some(function (e) {
                        return (!o || e.Type !== P.GroupTypes.Stack) && (e.CustomGroupId === t || e.SubGroups.some(function (e) {
                            return e.CustomGroupId === t
                        }))
                    }) || (r = !0,
                        e.splice(n, 1))
                }();
            return r
        }
        ,
        mo.prototype.updateConsentForBundleGrps = function (e, n, r, t, i) {
            var s = t
                , a = P.GroupTypes;
            return e.forEach(function (e) {
                var t = e.Type === a.Bundle || e.Type === a.Stack
                    , o = e.CustomGroupId;
                t && (-1 === S.indexOf(r, o) ? (t = y.isBundleOrStackActive(e, n),
                    s = !0,
                    n.push(o + (t ? ":1" : ":0"))) : (i && "false" === p.getIABCrossConsentflagData() || T.gpcEnabled && T.gpcValueChanged || I.syncRequired) && (t = y.isBundleOrStackActive(e, n),
                        -1 < (e = n.indexOf(o + ":" + (t ? "0" : "1")))) && (s = !0,
                            n[e] = o + (t ? ":1" : ":0")))
            }),
                s
        }
        ,
        mo.prototype.groupHasConsent = function (t) {
            var e = S.strToArr(k.readCookieParam(v.OPTANON_CONSENT, "groups"))
                , o = S.findIndex(e, function (e) {
                    return e.split(":")[0] === t.CustomGroupId
                });
            return -1 < o && "1" === e[o].split(":")[1]
        }
        ,
        mo.prototype.synchroniseCookieHostData = function () {
            for (var n = this, e = k.readCookieParam(v.OPTANON_CONSENT, "hosts"), r = S.strToArr(e), i = S.strToArr(e.replace(/:0|:1/g, "")), s = !1, o = (A.Groups.forEach(function (e) {
                q(e.SubGroups, [e]).forEach(function (o) {
                    o.Hosts.length && o.Hosts.forEach(function (e) {
                        var t;
                        -1 === S.indexOf(i, e.HostId) && (s = !0,
                            t = I.syncRequired ? n.groupHasConsent(o) : f.checkIsActiveByDefault(o),
                            r.push(e.HostId + (t ? ":1" : ":0")))
                    })
                })
            }),
                r.length); o--;)
                !function () {
                    var t = r[o].replace(/:0|:1/g, "");
                    A.Groups.some(function (e) {
                        return q(e.SubGroups, [e]).some(function (e) {
                            return e.Hosts.some(function (e) {
                                return e.HostId === t
                            })
                        })
                    }) || (s = !0,
                        r.splice(o, 1))
                }();
            s && (I.fireOnetrustGrp = !0,
                io.writeHstParam(v.OPTANON_CONSENT, r))
        }
        ,
        mo.prototype.toggleGroupHosts = function (e, t) {
            var o = this;
            e.Hosts.forEach(function (e) {
                o.updateHostStatus(e, t)
            })
        }
        ,
        mo.prototype.toggleGroupGenVendors = function (e, t) {
            e.GeneralVendorsIds.forEach(function (e) {
                go.updateGenVendorStatus(e, t)
            })
        }
        ,
        mo.prototype.updateHostStatus = function (t, e) {
            var o = S.findIndex(I.hostsConsent, function (e) {
                return !t.isActive && t.HostId === e.replace(/:0|:1/g, "")
            });
            -1 < o && (e = e || this.isHostPartOfAlwaysActiveGroup(t.HostId),
                I.hostsConsent[o] = t.HostId + ":" + (e ? "1" : "0"))
        }
        ,
        mo.prototype.isHostPartOfAlwaysActiveGroup = function (e) {
            return I.oneTrustAlwaysActiveHosts.includes(e)
        }
        ;
    var yo, fo = mo;
    function mo() { }
    var vo, ko = "OneTrust Cookie Consent", So = "Banner Auto Close", bo = "Banner Close Button", Po = "Banner - Continue without Accepting", To = "Banner - Confirm", Ao = "Preferences Close Button", Io = "Preference Center Opened From Banner", Lo = "Preference Center Opened From Button", _o = "Preference Center Opened From Function", Eo = "Preferences Save Settings", Vo = "Vendors List Opened From Function", Oo = "Floating Cookie Settings Open Button", Bo = "Floating Cookie Settings Close Button", wo = "Preferences Toggle On", Go = "Preferences Toggle Off", xo = "General Vendor Toggle On", No = "General Vendor Toggle Off", Do = "Host Toggle On", Ho = "Host Toggle Off", Ro = "Preferences Legitimate Interest Objection", Fo = "Preferences Legitimate Interest Remove Objection", Mo = "IAB Vendor Toggle ON", qo = "IAB Vendor Toggle Off", Uo = "IAB Vendor Legitimate Interest Objection", jo = "IAB Vendor Legitimate Interest Remove Objection", zo = "Vendor Service Toggle On", Ko = "Vendor Service Toggle Off", Wo = (Yo.prototype.setBannerFocus = function () {
        var e = Array.prototype.slice.call(L("#onetrust-banner-sdk .onetrust-vendors-list-handler").el)
            , t = Array.prototype.slice.call(L('#onetrust-banner-sdk #onetrust-policy-text [href],#onetrust-banner-sdk #onetrust-policy-text button,#onetrust-banner-sdk #onetrust-policy-text [tabindex]:not([tabindex="-1"])').el)
            , o = Array.prototype.slice.call(L("#onetrust-banner-sdk .ot-bnr-save-handler").el)
            , n = Array.prototype.slice.call(L("#onetrust-banner-sdk #onetrust-pc-btn-handler").el)
            , r = Array.prototype.concat.call(Array.prototype.slice.call(L("#onetrust-banner-sdk .category-switch-handler:not([disabled])").el), Array.prototype.slice.call(L("#onetrust-banner-sdk .ot-cat-lst button").el), e)
            , r = Array.prototype.concat.call(t, r)
            , i = Array.prototype.slice.call(L("#onetrust-banner-sdk .onetrust-close-btn-handler").el)
            , e = (T.bannerName === $e && (r = Array.prototype.concat.call(e, t)),
                Array.prototype.slice.call(L("#onetrust-banner-sdk #onetrust-accept-btn-handler").el))
            , t = Array.prototype.slice.call(L("#onetrust-banner-sdk #onetrust-reject-all-handler").el)
            , o = Array.prototype.concat.call(o, e, t, n)
            , n = ((T.bannerName !== Xe || A.IsIabEnabled) && T.bannerName !== Je && T.bannerName !== et || (o = Array.prototype.concat.call(n, t, e)),
                Array.prototype.slice.call(L("#onetrust-banner-sdk .ot-gv-list-handler").el));
        T.bannerName === tt ? (r = Array.prototype.concat.call(n, r),
            o = Array.prototype.slice.call(L("#onetrust-banner-sdk #onetrust-button-group button").el)) : r = Array.prototype.concat.call(r, n),
            this.bannerEl = Array.prototype.concat.call(Array.prototype.slice.call(L("#onetrust-banner-sdk #onetrust-cookie-btn").el), r, Array.prototype.slice.call(L("#onetrust-banner-sdk .banner-option-input").el), o, Array.prototype.slice.call(L("#onetrust-banner-sdk .ot-bnr-footer-logo a").el), i),
            this.banner = L("#onetrust-banner-sdk").el[0],
            (A.BInitialFocus || A.BInitialFocusLinkAndButton || A.ForceConsent) && (A.BInitialFocus ? this.banner : this.bannerEl[0]).focus()
    }
        ,
        Yo.prototype.handleBannerFocus = function (e, t) {
            var o = e.target
                , n = vo.bannerEl
                , r = n.indexOf(o)
                , i = n.length - 1
                , s = null;
            if (this.handleBannerFocusBodyReset(t, r, i))
                y.resetFocusToBody();
            else if (this.banner === o)
                s = this.handleInitialBannerFocus(t, n, i, s);
            else
                for (; !s;) {
                    var a = void 0;
                    0 !== (a = t ? r <= 0 ? n[i] : n[r - 1] : r === i ? n[0] : n[r + 1]).clientHeight || 0 !== a.offsetHeight ? s = a : t ? r-- : r++
                }
            s && (e.preventDefault(),
                s.focus())
        }
        ,
        Yo.prototype.handleBannerFocusBodyReset = function (e, t, o) {
            return !(A.ForceConsent || !A.BInitialFocus && !A.BInitialFocusLinkAndButton || !(e && 0 === t || !e && t === o))
        }
        ,
        Yo.prototype.handleInitialBannerFocus = function (e, t, o, n) {
            return e && A.ForceConsent ? n = t[o] : e || (n = t[0]),
                n
        }
        ,
        Yo.prototype.setPCFocus = function (e) {
            if (e && !(e.length <= 0)) {
                for (var t = 0; t < e.length; t++)
                    e[t].setAttribute("tabindex", "0");
                this.setFirstAndLast(e);
                var o = A.ShowPreferenceCenterCloseButton
                    , n = o ? this.getElementForFocus(e, A.PCLayout.Popup ? 2 : 1, !0) : null
                    , r = {
                        preventScroll: !0
                    };
                this.firstItem ? (o ? n : this.firstItem).focus(r) : e[0].focus(),
                    this.firstItem && L(this.firstItem).on("keydown", vo.firstItemHandler),
                    this.lastItem && L(this.lastItem).on("keydown", vo.lastItemHandler)
            }
        }
        ,
        Yo.prototype.setFirstAndLast = function (e) {
            this.firstItem = this.getElementForFocus(e, 0, !0),
                this.lastItem = this.firstItem ? this.getElementForFocus(e, e.length - 1, !1) : null
        }
        ,
        Yo.prototype.setLastItem = function () {
            var e = this.getPCElements()
                , e = this.getElementForFocus(e, e.length - 1, !1);
            e !== this.lastItem && (L(this.lastItem).off("keydown", vo.lastItemHandler),
                this.lastItem = e,
                L(e).on("keydown", vo.lastItemHandler))
        }
        ,
        Yo.prototype.getPCElements = function () {
            var e = "#onetrust-pc-sdk #close-pc-btn-handler,\n            #onetrust-pc-sdk .back-btn-handler,\n            #onetrust-pc-sdk ." + b.P_Active_Menu + ',\n            #onetrust-pc-sdk input,\n            #onetrust-pc-sdk a,\n            #onetrust-pc-sdk [tabindex="0"] button,\n            #onetrust-pc-sdk .save-preference-btn-handler,\n            #onetrust-pc-sdk .ot-pc-refuse-all-handler,\n            #onetrust-pc-sdk #accept-recommended-btn-handler';
            return I.pcLayer === se.CookieList ? e += " ,#onetrust-pc-sdk " + b.P_Content + " .powered-by-logo" : e += ",#onetrust-pc-sdk #vendor-list-save-btn .powered-by-logo",
                Array.prototype.slice.call(L(e).el)
        }
        ,
        Yo.prototype.getActiveTab = function () {
            return document.querySelector('#onetrust-pc-sdk .category-menu-switch-handler[tabindex="0"]')
        }
        ,
        Yo.prototype.getElementForFocus = function (e, t, o) {
            for (var n = e[t]; o ? n && null === n.offsetParent && t < e.length - 1 : n && null === n.offsetParent && 0 < t;)
                n = e[t],
                    o ? ++t : --t;
            return n
        }
        ,
        Yo.prototype.firstItemHandler = function (e) {
            var t = document.getElementById("onetrust-banner-sdk");
            9 === e.keyCode && e.shiftKey && vo.firstItem !== t ? (e.preventDefault(),
                vo.lastItem.focus()) : (t = "close-pc-btn-handler" === e.target.id && ("13" === e.keyCode || "32" === e.keyCode || "Enter" === e.code || "Space" === e.code),
                    A.PCLayout.Tab && I.pcLayer === se.PrefCenterHome && !t && (t = vo.getActiveTab()) && (e.preventDefault(),
                        t.focus()))
        }
        ,
        Yo.prototype.lastItemHandler = function (e) {
            9 !== e.keyCode || e.shiftKey || (e.preventDefault(),
                e = I.pcLayer === se.VendorList || I.pcLayer === se.CookieList,
                (A.PCLayout.Tab && I.isPCVisible && !A.ShowPreferenceCenterCloseButton && !e ? vo.getActiveTab() : vo.firstItem).focus())
        }
        ,
        Yo);
    function Yo() {
        this.bannerEl = []
    }
    Xo.prototype.getAllGroupElements = function () {
        return document.querySelectorAll("div#onetrust-pc-sdk " + b.P_Category_Grp + " " + b.P_Category_Item + ":not(.ot-vnd-item)")
    }
        ,
        Xo.prototype.toggleGrpElements = function (e, t, o, n) {
            void 0 === n && (n = !1);
            for (var r = (e = T.pcName === g && A.PCTemplateUpgrade ? document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")) : e).querySelectorAll('input[class*="category-switch-handler"]'), i = 0; i < r.length; i++) {
                var s = r[i].getAttribute("id").includes("leg-out");
                n && s || (S.setCheckedAttribute(null, r[i], o),
                    r[i] && A.PCShowConsentLabels && (r[i].parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? A.PCActiveText : A.PCInactiveText))
            }
            T.legIntSettings.PAllowLI && T.legIntSettings.PShowLegIntBtn && t.Type === P.GroupTypes.Pur && t.HasLegIntOptOut && !n && E.updateLegIntBtnElement(e.querySelector(".ot-leg-btn-container"), o)
        }
        ,
        Xo.prototype.toogleAllSubGrpElements = function (e, t) {
            var o;
            e.ShowSubgroup ? (o = e.CustomGroupId,
                o = this.getGroupElementByOptanonGroupId(o.toString()),
                E.toogleSubGroupElement(o, t, e.IsLegIntToggle)) : this.updateHiddenSubGroupData(e, t)
        }
        ,
        Xo.prototype.isSubGrpLegIntEnabled = function (e, t) {
            return T.legIntSettings.PAllowLI && T.legIntSettings.PShowLegIntBtn && e.Type === P.GroupTypes.Pur && e.HasLegIntOptOut && t.ShowSubgroupToggle
        }
        ,
        Xo.prototype.toogleSubGroupElement = function (e, t, o, n) {
            void 0 === o && (o = !1),
                void 0 === n && (n = !1);
            for (var r = (e = T.pcName === g && A.PCTemplateUpgrade ? document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")) : e).querySelectorAll("li" + b.P_Subgrp_li), i = 0; i < r.length; i++) {
                var s = f.getGroupById(r[i].getAttribute("data-optanongroupid"))
                    , a = s.OptanonGroupId
                    , l = f.getParentGroup(s.Parent)
                    , l = (this.isSubGrpLegIntEnabled(s, l) && o && E.updateLegIntBtnElement(r[i], t),
                        o ? "[id='ot-sub-group-id-" + a + "-leg-out']" : "[id='ot-sub-group-id-" + a + "']")
                    , a = r[i].querySelector('input[class*="cookie-subgroup-handler"]' + l);
                S.setCheckedAttribute(null, a, t),
                    a && A.PCShowConsentLabels && (a.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = t ? A.PCActiveText : A.PCInactiveText),
                    n || (s.IsLegIntToggle = o,
                        E.toggleGrpStatus(s, t),
                        s.IsLegIntToggle = !1,
                        yo.toggleGroupHosts(s, t),
                        I.genVenOptOutEnabled && yo.toggleGroupGenVendors(s, t))
            }
        }
        ,
        Xo.prototype.toggleGrpStatus = function (e, t) {
            var o = e.IsLegIntToggle && e.Type === P.GroupTypes.Pur ? t ? Fo : Ro : t ? wo : Go;
            u.triggerGoogleAnalyticsEvent(ko, o, e.GroupName + ": " + e.OptanonGroupId),
                t ? this.updateEnabledGroupData(e) : this.updateDisabledGroupData(e)
        }
        ,
        Xo.prototype.setInputID = function (e, t, o, n, r) {
            L(e).attr("id", t),
                L(e).attr("name", t),
                L(e).data("optanonGroupId", o),
                S.setCheckedAttribute(null, e, n),
                L(e).attr("aria-labelledby", r)
        }
        ,
        Xo.prototype.updateEnabledGroupData = function (e) {
            var t, o;
            -1 < kt.indexOf(e.Type) ? this.updateIabGroupData(e, !0) : (t = E.getGroupVariable(),
                -1 !== (o = S.indexOf(t, e.CustomGroupId + ":0")) && (t[o] = e.CustomGroupId + ":1"))
        }
        ,
        Xo.prototype.updateDisabledGroupData = function (e) {
            var t, o;
            -1 < kt.indexOf(e.Type) ? this.updateIabGroupData(e, !1) : e.Status !== C.ALWAYS_ACTIVE && (t = E.getGroupVariable(),
                -1 !== (o = S.indexOf(t, e.CustomGroupId + ":1"))) && (t[o] = e.CustomGroupId + ":0")
        }
        ,
        Xo.prototype.updateIabGroupData = function (e, t) {
            var o;
            e.Type === P.GroupTypes.Spl_Ft ? this.updateIabSpecialFeatureData(e.IabGrpId, t) : (o = e.IsLegIntToggle ? I.vendors.selectedLegInt : I.vendors.selectedPurpose,
                this.updateIabPurposeData(e.IabGrpId, t, o))
        }
        ,
        Xo.prototype.isAllSubgroupsDisabled = function (e) {
            return !e.SubGroups.some(function (e) {
                return E.isGroupActive(e)
            })
        }
        ,
        Xo.prototype.isAllSubgroupsEnabled = function (e) {
            return !e.SubGroups.some(function (e) {
                return E.IsGroupInActive(e)
            })
        }
        ,
        Xo.prototype.toggleGroupHtmlElement = function (e, t, o) {
            T.legIntSettings.PAllowLI && T.legIntSettings.PShowLegIntBtn && e.Type === P.GroupTypes.Pur && e.HasLegIntOptOut && (e = document.querySelector("[data-el-id=" + t + "]")) && this.updateLegIntBtnElement(e, o);
            e = L("#ot-group-id-" + t).el[0];
            S.setCheckedAttribute(null, e, o),
                e && A.PCShowConsentLabels && (e.parentElement.querySelector(".ot-label-status").innerHTML = o ? A.PCActiveText : A.PCInactiveText)
        }
        ,
        Xo.prototype.updateLegIntBtnElement = function (e, t) {
            var o = T.legIntSettings
                , n = e.querySelector(".ot-obj-leg-btn-handler")
                , e = e.querySelector(".ot-remove-objection-handler");
            t ? (n.classList.add("ot-inactive-leg-btn"),
                n.classList.add("ot-leg-int-enabled"),
                n.classList.remove("ot-active-leg-btn")) : (n.classList.add("ot-active-leg-btn"),
                    n.classList.remove("ot-inactive-leg-btn"),
                    n.classList.remove("ot-leg-int-enabled")),
                n.querySelector("span").innerText = t ? o.PObjectLegIntText : o.PObjectionAppliedText,
                d(e, "display: " + (t ? "none" : "inline-block") + ";", !0)
        }
        ,
        Xo.prototype.isGroupActive = function (e) {
            e = -1 < kt.indexOf(e.Type) ? -1 !== this.isIabPurposeActive(e) : -1 !== Ot.inArray(e.CustomGroupId + ":1", E.getGroupVariable());
            return e
        }
        ,
        Xo.prototype.safeFormattedGroupDescription = function (e) {
            return e && e.GroupDescription ? e.GroupDescription.replace(/\r\n/g, "<br>") : ""
        }
        ,
        Xo.prototype.canInsertForGroup = function (e, t) {
            void 0 === t && (t = !1);
            var o = null != e && void 0 !== e
                , n = k.readCookieParam(v.OPTANON_CONSENT, "groups")
                , r = I.groupsConsent.join(",")
                , i = k.readCookieParam(v.OPTANON_CONSENT, "hosts")
                , s = I.hostsConsent.join(",");
            if (t)
                return !0;
            n === r && i === s || w.ensureHtmlGroupDataInitialised();
            var a = [];
            if (I.showGeneralVendors)
                for (var l = 0, c = Object.entries(I.genVendorsConsent); l < c.length; l++) {
                    var d = c[l]
                        , p = d[0]
                        , d = d[1];
                    a.push(p + ":" + (d ? "1" : "0"))
                }
            I.showVendorService && I.vsConsent.forEach(function (e, t) {
                a.push(t + ":" + (e ? "1" : "0"))
            });
            t = I.groupsConsent.concat(I.hostsConsent).concat(a),
                n = S.contains(t, e + ":1"),
                r = this.doesHostExist(e),
                i = this.doesGroupExist(e),
                s = !1,
                I.showGeneralVendors ? s = this.doesGenVendorExist(e) : I.showVendorService && (s = this.doesVendorServiceExist(e)),
                t = !(!r && !s) || n && w.canSoftOptInInsertForGroup(e);
            return !(!o || !(n && t || !i && !r && !s))
        }
        ,
        Xo.prototype.setAllowAllButton = function () {
            var t = 0
                , e = A.Groups.some(function (e) {
                    if (-1 === St.indexOf(e.Type))
                        return E.IsGroupInActive(e) && t++,
                            e.SubGroups.some(function (e) {
                                return E.IsGroupInActive(e)
                            }) && t++,
                            1 <= t
                })
                , o = Qt.getAllowAllButton();
            return e ? o.show("inline-block") : o.hide(),
                vo.lastItem && vo.setLastItem(),
                e
        }
        ,
        Xo.prototype.isAnyGroupOptedOut = function () {
            for (var e = !1, t = 0, o = A.Groups; t < o.length; t++) {
                var n = o[t];
                if (!0 === E.IsGroupInActive(n)) {
                    e = !0;
                    break
                }
            }
            return e
        }
        ,
        Xo.prototype.getGroupVariable = function () {
            return I.groupsConsent
        }
        ,
        Xo.prototype.IsGroupInActive = function (e) {
            e = -1 < kt.indexOf(e.Type) ? -1 === this.isIabPurposeActive(e) : !(-1 < St.indexOf(e.Type)) && -1 === Ot.inArray(e.CustomGroupId + ":1", E.getGroupVariable());
            return e
        }
        ,
        Xo.prototype.updateIabPurposeData = function (t, e, o) {
            var n = S.findIndex(o, function (e) {
                return e.split(":")[0] === t
            });
            o[-1 === n ? Number(t) : n] = t + ":" + e
        }
        ,
        Xo.prototype.updateIabSpecialFeatureData = function (t, e) {
            var o = -1 === (o = S.findIndex(I.vendors.selectedSpecialFeatures, function (e) {
                return e.split(":")[0] === t
            })) ? Number(t) : o;
            I.vendors.selectedSpecialFeatures[o] = t + ":" + e
        }
        ,
        Xo.prototype.getGroupElementByOptanonGroupId = function (e) {
            return document.querySelector("#onetrust-pc-sdk " + b.P_Category_Grp + " " + b.P_Category_Item + '[data-optanongroupid=\n            "' + e + '"]')
        }
        ,
        Xo.prototype.updateHiddenSubGroupData = function (e, t) {
            e.SubGroups.forEach(function (e) {
                E.toggleGrpStatus(e, t),
                    yo.toggleGroupHosts(e, t),
                    I.genVenOptOutEnabled && yo.toggleGroupGenVendors(e, t)
            })
        }
        ,
        Xo.prototype.isIabPurposeActive = function (e) {
            var t = e.Type === P.GroupTypes.Spl_Ft ? I.vendors.selectedSpecialFeatures : e.IsLegIntToggle ? I.vendors.selectedLegInt : I.vendors.selectedPurpose;
            return Ot.inArray(e.IabGrpId + ":true", t)
        }
        ,
        Xo.prototype.doesGroupExist = function (e) {
            return !!f.getGroupById(e)
        }
        ,
        Xo.prototype.doesHostExist = function (e) {
            var t = I.hostsConsent;
            return -1 !== t.indexOf(e + ":0") || -1 !== t.indexOf(e + ":1")
        }
        ,
        Xo.prototype.doesGenVendorExist = function (t) {
            return !!A.GeneralVendors && !!A.GeneralVendors.find(function (e) {
                return e.VendorCustomId === t
            })
        }
        ,
        Xo.prototype.doesVendorServiceExist = function (e) {
            return I.getVendorsInDomain().has(e)
        }
        ;
    var E, Jo = Xo;
    function Xo() { }
    var Qo, $o, Zo = "#onetrust-banner-sdk", en = ".banner_logo", tn = "#onetrust-pc-sdk", on = (nn.prototype.BannerPushDownHandler = function () {
        this.checkIsBrowserIE11OrBelow() || ($o.pushPageDown(Zo),
            L(window).on("resize", function () {
                "none" !== L(Zo).css("display") && $o.pushPageDown(Zo)
            }))
    }
        ,
        nn.prototype.checkIsBrowserIE11OrBelow = function () {
            var e = window.navigator.userAgent;
            return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/")
        }
        ,
        nn.prototype.addOTCssPropertiesToBody = function (e, t) {
            var o = $o.getCssData(e, t);
            I.customerStyles.set(e, o),
                $o.setStylesOnBody(t),
                e === Qo.PC && $o.setStylesOnHtml(t)
        }
        ,
        nn.prototype.removeAddedOTCssStyles = function (e) {
            void 0 === e && (e = Qo.Banner);
            var t = I.customerStyles.get(e);
            t ? ($o.setStylesOnBody(t.customerBodyCSS),
                $o.setStylesOnHtml(t.customerHtmlCSS),
                I.customerStyles.delete(e)) : 0 < I.customerStyles.size && I.customerStyles.forEach(function (e, t) {
                    return $o.removeAddedOTCssStyles(t)
                })
        }
        ,
        nn.prototype.getCssData = function (e, t) {
            var o, n, r = L("body").el[0], i = L("html").el[0], s = {}, a = {}, e = I.customerStyles.get(e), a = e ? (o = e.scriptBodyCSS,
                n = e.customerBodyCSS,
                e = e.customerHtmlCSS,
                r.style.top !== o.top && (n.top = r.style.top),
                r.style.position !== o.position && (n.position = r.style.position),
                r.style.overflow !== o.overflow && (n.overflow = r.style.overflow),
                i.style.overflow !== o.overflow && (e.overflow = i.style.overflow),
                s = n,
                e) : (s = {
                    top: r.style.top,
                    position: r.style.position,
                    overflow: r.style.overflow
                },
                {
                    overflow: i.style.overflow
                });
            return {
                scriptBodyCSS: t,
                customerBodyCSS: s,
                customerHtmlCSS: a
            }
        }
        ,
        nn.prototype.setStylesOnBody = function (e) {
            var t = L("body").el[0];
            $o.setStylesOnHtmlElement(t, e)
        }
        ,
        nn.prototype.setStylesOnHtml = function (e) {
            var t = L("html").el[0];
            $o.setStylesOnHtmlElement(t, {
                overflow: e.overflow
            })
        }
        ,
        nn.prototype.setStylesOnHtmlElement = function (e, t) {
            for (var o = "", n = 0, r = Object.entries(t); n < r.length; n++) {
                var i = r[n]
                    , s = i[0]
                    , i = i[1];
                i ? o += s + ": " + i + ";" : e.style.removeProperty(s)
            }
            o && d(e, o, !0)
        }
        ,
        nn.prototype.pushPageDown = function (e) {
            var t = L(e).height() + "px"
                , e = (L(e).show().css("\n            bottom: auto;\n            position: absolute;\n            top: -" + t + ";\n        "),
                    I.isPCVisible ? Qo.PC : Qo.Banner)
                , t = {
                    position: "relative",
                    top: t
                };
            I.isPCVisible && (t.overflow = "hidden"),
                $o.addOTCssPropertiesToBody(e, t)
        }
        ,
        nn);
    function nn() { }
    (a = Qo = Qo || {}).Banner = "Banner",
        a.PC = "PC";
    an.prototype.showConsentNotice = function () {
        var e, t, o;
        !A.NoBanner || A.ForceConsent ? L(".onetrust-pc-dark-filter").removeClass("ot-hide") : L(".onetrust-pc-dark-filter").addClass("ot-hide"),
            L("" + rn.ONETRUST_PC_SDK).removeClass("ot-hide"),
            m.isV2Template && this.closePCText(!0),
            T.pcName === it && (L("" + rn.ONETRUST_PC_SDK).el[0].classList.contains("ot-animated") || L("" + rn.ONETRUST_PC_SDK).addClass("ot-animated"),
                e = A.PreferenceCenterPosition,
                t = (o = A.useRTL) ? "right" : "left",
                o = o ? "left" : "right",
                L("" + rn.ONETRUST_PC_SDK).el[0].classList.contains("ot-slide-out-" + ("right" === e ? o : t)) && L("" + rn.ONETRUST_PC_SDK).removeClass("ot-slide-out-" + ("right" === e ? o : t)),
                L("" + rn.ONETRUST_PC_SDK).addClass("ot-slide-in-" + ("right" === e ? o : t))),
            E.setAllowAllButton(),
            vo.setPCFocus(vo.getPCElements()),
            A.NoBanner && A.ScrollCloseBanner || this.pcHasScroll(),
            this.handleBodyStylesForBannerPushdown()
    }
        ,
        an.prototype.hideConsentNoticeV2 = function () {
            var e, t, o;
            0 === L(this.ONETRUST_PC_SDK).length ? this.setFocusOnPage() : (m.isV2Template && this.closePCText(),
                A.ForceConsent && !y.isCookiePolicyPage(A.AlertNoticeText) && !p.isAlertBoxClosedAndValid() && A.ShowAlertNotice ? L("" + this.ONETRUST_PC_DARK_FILTER).css("z-index: 2147483645;").show() : L("" + this.ONETRUST_PC_DARK_FILTER).fadeOut(A.PCLayout.Panel ? 500 : 400),
                A.PCLayout.Panel && (e = A.PreferenceCenterPosition,
                    t = (o = A.useRTL) ? "right" : "left",
                    o = o ? "left" : "right",
                    L("" + this.ONETRUST_PC_SDK).removeClass("ot-slide-in-" + ("right" === e ? o : t)),
                    L("" + this.ONETRUST_PC_SDK).addClass("ot-slide-out-" + ("right" === e ? o : t))),
                L("" + this.ONETRUST_PC_SDK).fadeOut(A.PCLayout.Panel ? 500 : 400),
                I.isPCVisible = !1,
                I.pcLayer = se.Banner,
                this.setFocus())
        }
        ,
        an.prototype.setFocus = function () {
            var e;
            I.pcSource || p.isAlertBoxClosedAndValid() ? I.pcSource ? (I.pcSource.focus(),
                I.pcSource = null) : A.BInitialFocus ? y.resetFocusToBody() : this.setFocusOnPage() : (e = L("#onetrust-banner-sdk #onetrust-pc-btn-handler").el[0]) && e.focus()
        }
        ,
        an.prototype.handleBodyStylesForBannerPushdown = function () {
            T.pcName === g && T.pagePushedDown && "top" === A.BannerPosition && $o.addOTCssPropertiesToBody(Qo.PC, {})
        }
        ,
        an.prototype.setFocusOnPage = function () {
            var e = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
            I.isKeyboardUser && e.length && e[0].focus()
        }
        ,
        an.prototype.closePCText = function (e) {
            void 0 === e && (e = !1);
            var t = document.querySelector("#onetrust-pc-sdk span[aria-live]")
                , o = A.AboutCookiesText;
            t && (t.innerText = e ? "" : o + (" " + A.pcDialogClose))
        }
        ,
        an.prototype.pcHasScroll = function () {
            var e = L(b.P_Grp_Container).el[0] || L("#onetrust-pc-sdk " + b.P_Content).el[0];
            e.scrollHeight > e.clientHeight && (this.bodyStyleChanged = !0,
                e = L("body")) && e.length && $o.addOTCssPropertiesToBody(Qo.PC, {
                    overflow: "hidden"
                })
        }
        ,
        an.prototype.checkIfPcSdkContainerExist = function () {
            return !L("" + rn.ONETRUST_PC_SDK).length
        }
        ;
    var rn, sn = an;
    function an() {
        this.ONETRUST_PC_SDK = "#onetrust-pc-sdk",
            this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter",
            this.bodyStyleChanged = !1
    }
    dn.prototype.isLandingPage = function () {
        var e = k.readCookieParam(v.OPTANON_CONSENT, "landingPath");
        return !e || e === location.href
    }
        ,
        dn.prototype.setLandingPathParam = function (e) {
            k.writeCookieParam(v.OPTANON_CONSENT, "landingPath", e)
        }
        ;
    var ln, cn = dn;
    function dn() { }
    gn.prototype.updateGtmMacros = function (e) {
        void 0 === e && (e = !0);
        var n = [];
        I.groupsConsent.forEach(function (e) {
            var t = e.replace(":1", "")
                , o = f.getGrpStatus(f.getGroupById(t)).toLowerCase() === C.ALWAYS_ACTIVE;
            S.endsWith(e, ":1") && (w.canSoftOptInInsertForGroup(t) || o) && n.push(t)
        }),
            I.hostsConsent.forEach(function (e) {
                S.endsWith(e, ":1") && n.push(e.replace(":1", ""))
            }),
            I.showGeneralVendors && A.GenVenOptOut && A.GeneralVendors.forEach(function (e) {
                !I.genVendorsConsent[e.VendorCustomId] || I.softOptInGenVendors.includes(e.VendorCustomId) && ln.isLandingPage() || n.push(e.VendorCustomId)
            });
        I.vsIsActiveAndOptOut && I.getVendorsInDomain().forEach(function (e) {
            I.vsConsent.get(e.CustomVendorServiceId) && n.push(e.CustomVendorServiceId)
        });
        var t = "," + S.arrToStr(n) + ",";
        A.GoogleConsent.GCEnable && !T.otDataLayer.ignore && this.updateGCMTags(n),
            window.OnetrustActiveGroups = t,
            window.OptanonActiveGroups = t,
            T.gcmUpdateCallback && T.gcmUpdateCallback(),
            T.otDataLayer.ignore || void 0 === this._window[T.otDataLayer.name] || this._window[T.otDataLayer.name].constructor !== Array ? !T.otDataLayer.ignore && T.otDataLayer.name && (this._window[T.otDataLayer.name] = [{
                event: "OneTrustLoaded",
                OnetrustActiveGroups: t
            }, {
                event: "OptanonLoaded",
                OptanonActiveGroups: t
            }]) : (this._window[T.otDataLayer.name].push({
                event: "OneTrustLoaded",
                OnetrustActiveGroups: t
            }),
                this._window[T.otDataLayer.name].push({
                    event: "OptanonLoaded",
                    OptanonActiveGroups: t
                })),
            this.dispatchEvents(e, n, t)
    }
        ,
        gn.prototype.dispatchEvents = function (e, t, o) {
            !e && T.gtmUpdatedinStub || (n = new CustomEvent("consent.onetrust", {
                detail: t
            }));
            var n, r, i = k.readCookieParam(v.OPTANON_CONSENT, "groups"), s = I.fireOnetrustGrp || !i || e || !T.gtmUpdatedinStub;
            s && (I.fireOnetrustGrp = !1,
                !T.otDataLayer.ignore && this._window[T.otDataLayer.name] && this._window[T.otDataLayer.name].constructor === Array && this._window[T.otDataLayer.name].push({
                    event: "OneTrustGroupsUpdated",
                    OnetrustActiveGroups: o
                }),
                r = new CustomEvent("OneTrustGroupsUpdated", {
                    detail: t
                })),
                setTimeout(function () {
                    n && s && window.dispatchEvent(n),
                        r && window.dispatchEvent(r)
                })
        }
        ,
        gn.prototype.updateGCMTags = function (o) {
            var n, r = {}, e = (this.canUpdateGCMCategories() && (e = [[A.GoogleConsent.GCAdStorage, Ae.ad_storage], [A.GoogleConsent.GCAnalyticsStorage, Ae.analytics_storage], [A.GoogleConsent.GCFunctionalityStorage, Ae.functionality_storage], [A.GoogleConsent.GCPersonalizationStorage, Ae.personalization_storage], [A.GoogleConsent.GCSecurityStorage, Ae.security_storage]],
                m.fp.CookieV2GCMDMA && (e.push([A.GoogleConsent.GCAdUserData, Ae.ad_user_data]),
                    e.push([A.GoogleConsent.GCAdPersonalization, Ae.ad_personalization])),
                e.forEach(function (e) {
                    var t;
                    e[0] !== ct && (t = o.includes(e[0]) ? Ie.granted : Ie.denied,
                        r[e[1]] = t)
                })),
                k.getCookie(v.ALERT_BOX_CLOSED)), t = T.getRegionRule().Global;
            "function" != typeof window.gtag && (n = this._window,
                window.gtag = function (e, t, o) {
                    T.otDataLayer.ignore || (n[T.otDataLayer.name] ? n[T.otDataLayer.name].push(arguments) : n[T.otDataLayer.name] = [arguments])
                }
            ),
                "function" == typeof window.gtag && (T.gcmDevIdSet || (window.gtag(Pe.set, "developer_id.dYWJhMj", !0),
                    T.gcmDevIdSet = !0),
                    e) && (t || (r[Ae.region] = T.gcmCountries),
                        0 !== Object.keys(r).length) && window.gtag(Pe.consent, Te.update, r)
        }
        ,
        gn.prototype.canUpdateGCMCategories = function () {
            return A.GoogleConsent.GCAdStorage !== ct || A.GoogleConsent.GCAnalyticsStorage !== ct || A.GoogleConsent.GCFunctionalityStorage !== ct || A.GoogleConsent.GCPersonalizationStorage !== ct || A.GoogleConsent.GCSecurityStorage !== ct
        }
        ;
    var pn, un = gn;
    function gn() {
        this._window = window
    }
    yn.prototype.updateFilterSelection = function (e) {
        o = (e = void 0 === e ? !1 : e) ? (t = I.filterByCategories,
            "data-optanongroupid") : (t = I.filterByIABCategories,
                "data-purposeid");
        for (var t, o, n = L("#onetrust-pc-sdk .category-filter-handler").el, r = 0; r < n.length; r++) {
            var i = n[r].getAttribute(o)
                , i = -1 < t.indexOf(i);
            S.setCheckedAttribute(null, n[r], i)
        }
    }
        ,
        yn.prototype.cancelHostFilter = function () {
            for (var e = L("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
                var o = e[t].getAttribute("data-optanongroupid")
                    , o = 0 <= I.filterByCategories.indexOf(o);
                S.setCheckedAttribute(null, e[t], o)
            }
        }
        ,
        yn.prototype.updateHostFilterList = function () {
            for (var e = L("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
                var o, n = e[t].getAttribute("data-optanongroupid");
                e[t].checked && I.filterByCategories.indexOf(n) < 0 ? I.filterByCategories.push(n) : !e[t].checked && -1 < I.filterByCategories.indexOf(n) && (o = I.filterByCategories,
                    I.filterByCategories.splice(o.indexOf(n), 1))
            }
            return I.filterByCategories
        }
        ,
        yn.prototype.InitializeHostList = function () {
            var e = b.P_Vendor_List + " " + b.P_Host_Cntr + " li";
            I.hosts.hostTemplate = L(e).el[0].cloneNode(!0),
                I.hosts.hostCookieTemplate = L(b.P_Vendor_List + " " + b.P_Host_Cntr + " " + b.P_Host_Opt + " li").el[0].cloneNode(!0)
        }
        ,
        yn.prototype.getCookiesForGroup = function (t) {
            var o = []
                , n = [];
            return t.FirstPartyCookies.length && t.FirstPartyCookies.forEach(function (e) {
                n.push(R(R({}, e), {
                    groupName: t.GroupName
                }))
            }),
                t.Hosts.length && t.Hosts.forEach(function (e) {
                    o.push(R(R({}, e), {
                        isActive: "always active" === f.getGrpStatus(t).toLowerCase(),
                        groupName: t.GroupName,
                        Type: Ce.Host
                    }))
                }),
            {
                firstPartyCookiesList: n,
                thirdPartyCookiesList: o
            }
        }
        ,
        yn.prototype.reactivateSrcTag = function (e) {
            var t = ["src"];
            e.setAttribute(t[0], e.getAttribute("data-" + t[0])),
                e.removeAttribute("data-src")
        }
        ,
        yn.prototype.reactivateScriptTag = function (e) {
            var t = e.parentNode
                , o = document.createElement(e.tagName)
                , n = (o.innerHTML = e.innerHTML,
                    e.attributes);
            if (0 < n.length)
                for (var r = 0; r < n.length; r++)
                    "type" !== n[r].name ? o.setAttribute(n[r].name, n[r].value, !0) : o.setAttribute("type", "text/javascript", !0);
            t.appendChild(o),
                t.removeChild(e)
        }
        ,
        yn.prototype.reactivateTag = function (e, t) {
            var o, n = 0 <= e.className.indexOf("ot-vscat"), r = 0 <= e.className.indexOf("optanon-category"), i = (n && r ? o = this.getGroupElements(e.className, I.showVendorService) : n ? I.showVendorService ? o = this.getGroupElements(e.className, !0) : this.unBlockTag(t, e) : r && (I.showVendorService ? this.unBlockTag(t, e) : o = this.getGroupElements(e.className, !1)),
                !0);
            if (o && 0 < o.length) {
                for (var s = 0; s < o.length; s++)
                    if (!E.canInsertForGroup(o[s].trim())) {
                        i = !1;
                        break
                    }
                i && this.unBlockTag(t, e)
            }
        }
        ,
        yn.prototype.unBlockTag = function (e, t) {
            e ? this.reactivateSrcTag(t) : this.reactivateScriptTag(t)
        }
        ,
        yn.prototype.getGroupElements = function (e, t) {
            return (t ? e.match(/ot-vscat(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/ot-vscat-/i) : e.match(/optanon-category(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/optanon-category-/i))[1].split("-")
        }
        ,
        yn.prototype.substitutePlainTextScriptTags = function () {
            var t = this
                , e = [].slice.call(document.querySelectorAll('script[class*="optanon-category"]'))
                , o = [].slice.call(document.querySelectorAll('*[class*="optanon-category"]'))
                , e = Array.from(new Set(e.concat([].slice.call(document.querySelectorAll('script[class*="ot-vscat"]') || []))))
                , o = Array.from(new Set(o.concat([].slice.call(document.querySelectorAll('*[class*="ot-vscat"]') || []))));
            Array.prototype.forEach.call(o, function (e) {
                "SCRIPT" !== e.tagName && e.hasAttribute("data-src") && t.reactivateTag(e, !0)
            }),
                Array.prototype.forEach.call(e, function (e) {
                    e.hasAttribute("type") && "text/plain" === e.getAttribute("type") && t.reactivateTag(e, !1)
                })
        }
        ;
    var hn, Cn = yn;
    function yn() { }
    var fn, mn = "Banner", vn = "Preference Center", kn = "API", Sn = "Close", bn = "Allow All", Pn = "Reject All", Tn = "Confirm", An = "Confirm", In = "Continue without Accepting", Ln = (_n.prototype.init = function () {
        this.insertHtml(),
            this.insertCss(),
            this.showNty(),
            this.initHandler()
    }
        ,
        _n.prototype.getContent = function () {
            return F(this, void 0, void 0, function () {
                return M(this, function (e) {
                    return [2, Nt.getSyncNtfyContent().then(function (e) {
                        I.syncNtfyGrp = {
                            name: e.name,
                            html: atob(e.html),
                            css: e.css
                        }
                    })]
                })
            })
        }
        ,
        _n.prototype.insertHtml = function () {
            this.removeHtml();
            function e(e) {
                return t.querySelector(e)
            }
            var t = document.createDocumentFragment()
                , o = document.createElement("div")
                , o = (L(o).html(I.syncNtfyGrp.html),
                    o.querySelector(this.El))
                , n = (A.BannerRelativeFontSizesToggle && L(o).addClass("otRelFont"),
                    A.useRTL && L(o).attr("dir", "rtl"),
                    L(t).append(o),
                    A.NtfyConfig)
                , n = (this.initHtml("Sync", n.Sync, e, t.querySelector(this.El)),
                    n.ShowCS ? L(e(".ot-pc-handler")).html(n.CSTxt) : (L(o).addClass("ot-hide-csbtn"),
                        e(".ot-sync-btncntr").parentElement.removeChild(e(".ot-sync-btncntr"))),
                    document.createElement("div"));
            L(n).append(t),
                L("#onetrust-consent-sdk").append(n.firstChild)
        }
        ,
        _n.prototype.initHandler = function () {
            L(this.El + " .ot-sync-close-handler").on("click", function () {
                return fn.close()
            })
        }
        ,
        _n.prototype.showNty = function () {
            var e = L(this.El);
            e.css("bottom: -300px;"),
                e.animate({
                    bottom: "1em;"
                }, 1e3),
                setTimeout(function () {
                    e.css("bottom: 1rem;")
                }, 1e3),
                e.focus()
        }
        ,
        _n.prototype.changeState = function () {
            setTimeout(function () {
                fn.refreshState()
            }, 1500)
        }
        ,
        _n.prototype.refreshState = function () {
            function e(e) {
                return t.querySelector(e)
            }
            var t = L(this.El).el[0]
                , o = (t.classList.add("ot-nty-complete"),
                    t.classList.remove("ot-nty-sync"),
                    A.NtfyConfig);
            this.initHtml("Complete", o.Complete, e, t),
                o.ShowCS && ("LINK" === o.CSType && L(e(".ot-pc-handler")).addClass("ot-pc-link"),
                    L(".ot-sync-btncntr").show("inline-block"),
                    this.alignContent(),
                    L(window).on("resize", function () {
                        return fn.resizeEvent
                    })),
                setTimeout(function () {
                    fn.close()
                }, 1e3 * A.NtfyConfig.NtfyDuration)
        }
        ,
        _n.prototype.insertCss = function () {
            var e = document.getElementById("onetrust-style");
            e.innerHTML += I.syncNtfyGrp.css,
                e.innerHTML += this.addCustomStyles()
        }
        ,
        _n.prototype.addCustomStyles = function () {
            var e = A.NtfyConfig
                , t = e.Sync
                , o = e.Complete
                , n = e.CSButton
                , r = e.CSLink;
            return "\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync {\n            background-color: " + t.BgColor + ";\n            border: 1px solid " + t.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-refresh>g {\n            fill: " + t.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync #ot-sync-title {\n            text-align: " + t.TitleAlign + ";\n            color: " + t.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync .ot-sync-desc  {\n            text-align: " + t.DescAlign + ";\n            color: " + t.DescColor + "; \n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete {\n            background-color: " + o.BgColor + ";\n            border: 1px solid " + o.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-check>g {\n            fill: " + o.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete #ot-sync-title {\n            text-align: " + o.TitleAlign + ";\n            color: " + o.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete .ot-sync-desc  {\n            text-align: " + o.DescAlign + ";\n            color: " + o.DescColor + "; \n        }\n        " + ("BUTTON" === e.CSType ? "\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler {\n            background-color: " + n.BgColor + ";\n            border: 1px solid " + n.BdrColor + ";\n            color: " + n.Color + ";\n            text-align: " + n.Align + ";\n        }" : " #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler.ot-pc-link {\n            color: " + r.Color + ";\n            text-align: " + r.Align + ";\n        }") + "\n        "
        }
        ,
        _n.prototype.initHtml = function (e, t, o, n) {
            var r = "Complete" === e ? ".ot-sync-refresh" : ".ot-sync-check";
            t.ShowIcon ? (L(o("Sync" === e ? ".ot-sync-refresh" : ".ot-sync-check")).show(),
                L(o(r)).hide(),
                L(o(".ot-sync-icon")).show("inline-block"),
                n.classList.remove("ot-hide-icon")) : (L(o(".ot-sync-icon")).hide(),
                    n.classList.add("ot-hide-icon")),
                t.Title ? L(o("#ot-sync-title")).html(t.Title) : L(o("#ot-sync-title")).hide(),
                t.Desc ? L(o(".ot-sync-desc")).html(t.Desc) : L(o(".ot-sync-desc")).hide(),
                t.ShowClose ? (L(o(".ot-sync-close-handler")).show("inline-block"),
                    L(o(".ot-close-icon")).attr("aria-label", t.CloseAria),
                    n.classList.remove("ot-hide-close")) : (L(o(".ot-sync-close-handler")).hide(),
                        n.classList.add("ot-hide-close"))
        }
        ,
        _n.prototype.close = function () {
            this.hideSyncNtfy(),
                y.resetFocusToBody()
        }
        ,
        _n.prototype.hideSyncNtfy = function () {
            A.NtfyConfig.ShowCS && window.removeEventListener("resize", fn.resizeEvent),
                L("#ot-sync-ntfy").fadeOut(400)
        }
        ,
        _n.prototype.removeHtml = function () {
            var e = L(this.El).el;
            e && S.removeChild(e)
        }
        ,
        _n.prototype.alignContent = function () {
            L(".ot-sync-btncntr").el[0].clientHeight > L(".ot-sync-titlecntr").el[0].clientHeight && (L(".ot-sync-titlecntr").addClass("ot-pos-abs"),
                L(".ot-sync-btncntr").addClass("ot-pos-rel"))
        }
        ,
        _n.prototype.resizeEvent = function () {
            window.innerWidth <= 896 && fn.alignContent()
        }
        ,
        _n);
    function _n() {
        this.El = "#ot-sync-ntfy"
    }
    On.prototype.toggleVendorConsent = function (e, t) {
        void 0 === t && (t = null),
            (e = (e = void 0 === e ? [] : e).length ? e : I.oneTrustIABConsent.vendors).forEach(function (e) {
                var e = e.split(":")
                    , t = e[0]
                    , e = e[1]
                    , t = L(b.P_Vendor_Container + " ." + b.P_Ven_Ctgl + ' [vendorid="' + t + '"]').el[0];
                t && S.setCheckedAttribute("", t, "true" === e)
            });
        var o, n = L("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        n && (o = S.getActiveIdArray(S.distinctArray(e)),
            (t = null === t ? o.length === e.length : t) || 0 === o.length ? n.parentElement.classList.remove(It.P_Line_Through) : n.parentElement.classList.add(It.P_Line_Through),
            S.setCheckedAttribute("", n, t))
    }
        ,
        On.prototype.toggleVendorLi = function (e, t) {
            void 0 === t && (t = null),
                (e = (e = void 0 === e ? [] : e).length ? e : I.oneTrustIABConsent.legIntVendors).forEach(function (e) {
                    var e = e.split(":")
                        , t = e[0]
                        , e = e[1]
                        , t = L(b.P_Vendor_Container + " ." + b.P_Ven_Ltgl + ' [leg-vendorid="' + t + '"]').el[0];
                    t && S.setCheckedAttribute("", t, "true" === e)
                });
            var o, n = L("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
            n && (o = S.getActiveIdArray(S.distinctArray(e)),
                (t = null === t ? o.length === e.length : t) || 0 === o.length ? n.parentElement.classList.remove(It.P_Line_Through) : n.parentElement.classList.add(It.P_Line_Through),
                S.setCheckedAttribute("", n, t))
        }
        ,
        On.prototype.updateVendorLegBtns = function (e) {
            (e = (e = void 0 === e ? [] : e).length ? e : I.oneTrustIABConsent.legIntVendors).forEach(function (e) {
                var e = e.split(":")
                    , t = e[0]
                    , e = e[1]
                    , t = L(b.P_Vendor_Container + ' .ot-leg-btn-container[data-group-id="' + t + '"]').el[0];
                t && E.updateLegIntBtnElement(t, "true" === e)
            })
        }
        ;
    var En, Vn = On;
    function On() { }
    function Bn() {
        return (!T.isIab2orv2Template && A.PCTemplateUpgrade && A.PCCategoryStyle === ke.Toggle ? _.toggleEl : _.chkboxEl).cloneNode(!0)
    }
    n.prototype.setHtmlTemplate = function (e) {
        V.setInternalData(),
            V.rootHtml = e,
            V.cloneHtmlElements()
    }
        ,
        n.prototype.getVendorListEle = function (e) {
            var t = document.createDocumentFragment()
                , o = document.createElement("div")
                , n = (o.classList.add("ot-vs-list"),
                    A.VendorServiceConfig.PCVSExpandGroup);
            return e.forEach(function (e, t) {
                e = V.createVendor(e.groupRef, e, n, "ot-vs-lst-id-" + t);
                o.appendChild(e)
            }),
                t.appendChild(o),
                t
        }
        ,
        n.prototype.insertVendorServiceHtml = function (e, t) {
            var o;
            V.checkIfIsInvalid(e, t) || (o = document.createDocumentFragment(),
                V.setVendorContainer(o, e),
                V.setVendorList(o, e),
                e.SubGroups && 0 < e.SubGroups.length ? (o.querySelector(this.MAIN_CONT_ELE).classList.add("ot-vnd-subgrp-cnt"),
                    e = t.children[1],
                    T.pcName === g && (e = t.children[2]),
                    t.insertBefore(o, e)) : t.appendChild(o))
        }
        ,
        n.prototype.toggleVendorService = function (e, t, o, n) {
            e = f.getGroupById(e),
                t = f.getVSById(t);
            n = n || V.getVendorInputElement(t.CustomVendorServiceId),
                V.setVendorServiceState(n, t, o),
                o ? V.changeGroupState(e, o, V.isToggle) : V.checkGroupChildrenState(e) || V.changeGroupState(e, !1, V.isToggle)
        }
        ,
        n.prototype.setVendorStateByGroup = function (e, t) {
            e = e.VendorServices;
            if (I.showVendorService && e)
                for (var o = 0, n = e; o < n.length; o++) {
                    var r = n[o]
                        , i = V.getVendorInputElement(r.CustomVendorServiceId);
                    V.setVendorServiceState(i, r, t)
                }
        }
        ,
        n.prototype.resetVendorUIState = function (e) {
            e.forEach(function (e, t) {
                t = V.getVendorInputElement(t);
                V.changeVendorServiceUIState(t, e)
            })
        }
        ,
        n.prototype.setVendorServiceState = function (e, t, o) {
            V.changeVendorServiceState(t, o),
                V.changeVendorServiceUIState(e, o);
            e = o ? zo : Ko;
            u.triggerGoogleAnalyticsEvent(ko, e, t.ServiceName + ": " + t.CustomVendorServiceId)
        }
        ,
        n.prototype.removeVSUITemplate = function (e) {
            var t = e.querySelector(this.MAIN_CONT_ELE);
            t && e.removeChild(t)
        }
        ,
        n.prototype.consentAll = function (o) {
            I.getVendorsInDomain().forEach(function (e) {
                var t = o;
                o || (t = f.isAlwaysActiveGroup(e.groupRef)),
                    V.toggleVendorService(e.groupRef.CustomGroupId, e.CustomVendorServiceId, t || o)
            })
        }
        ,
        n.prototype.cloneHtmlElements = function () {
            var e, t, o, n, r = V.rootHtml.querySelector(this.MAIN_CONT_ELE);
            r && (e = r.querySelector(".ot-vnd-serv-hdr-cntr"),
                n = (o = (t = r.querySelector(".ot-vnd-lst-cont")).querySelector(".ot-vnd-item")).querySelector(".ot-vnd-info"),
                V.vendorLabelContainerClone = e.cloneNode(!0),
                r.removeChild(e),
                V.vendorInfoClone = n.cloneNode(!0),
                o.querySelector(".ot-vnd-info-cntr").removeChild(n),
                V.vendorItemClone = o.cloneNode(!0),
                t.removeChild(o),
                V.vendorListContainerClone = t.cloneNode(!0),
                r.removeChild(t),
                V.vendorServMainContainerClone = r.cloneNode(!0),
                V.rootHtml.removeChild(r))
        }
        ,
        n.prototype.setInternalData = function () {
            V.isToggle = A.PCCategoryStyle === ke.Toggle;
            var e = A.VendorServiceConfig;
            V.stringTranslation = new Map,
                V.stringTranslation.set("ServiceName", e.PCVSNameText || "ServiceName"),
                V.stringTranslation.set("ParentCompany", e.PCVSParentCompanyText || "ParentCompany"),
                V.stringTranslation.set("Address", e.PCVSAddressText || "Address"),
                V.stringTranslation.set("DefaultCategoryName", e.PCVSDefaultCategoryText || "DefaultCategoryName"),
                V.stringTranslation.set("Description", e.PCVSDefaultDescriptionText || "Description"),
                V.stringTranslation.set("DPOEmail", e.PCVSDPOEmailText || "DPOEmail"),
                V.stringTranslation.set("DPOLink", e.PCVSDPOLinkText || "DPOLink"),
                V.stringTranslation.set("PrivacyPolicyLink", e.PCVSPrivacyPolicyLinkText || "PrivacyPolicyLink"),
                V.stringTranslation.set("CookiePolicyLink", e.PCVSCookiePolicyLinkText || "CookiePolicyLink"),
                V.stringTranslation.set("OptOutLink", e.PCVSOptOutLinkText || "OptOutLink"),
                V.stringTranslation.set("LegalBasis", e.PCVSLegalBasisText || "LegalBasis")
        }
        ,
        n.prototype.setVendorContainer = function (e, t) {
            var o = V.vendorServMainContainerClone.cloneNode(!0)
                , t = (o.setAttribute("data-group-id", t.CustomGroupId),
                    V.vendorLabelContainerClone.cloneNode(!0));
            t.querySelector(".ot-vnd-serv-hdr").innerHTML = A.VendorServiceConfig.PCVSListTitle,
                o.appendChild(t),
                e.appendChild(o)
        }
        ,
        n.prototype.setVendorList = function (e, t) {
            for (var o = 0, n = V.getVSFromGroupAndSubgroups(t), r = n.length, e = e.querySelector(this.MAIN_CONT_ELE), i = V.vendorListContainerClone.cloneNode(), s = A.VendorServiceConfig.PCVSExpandCategory; o < r; o++) {
                var a = V.createVendor(t, n[o], s);
                i.appendChild(a)
            }
            e.appendChild(i)
        }
        ,
        n.prototype.getVSFromGroupAndSubgroups = function (e, t) {
            var o, n = null != (o = e.VendorServices) ? o : [];
            if (t = void 0 === t ? !1 : t)
                for (var r = 0, i = null != (o = e.SubGroups) ? o : []; r < i.length; r++) {
                    var s = null != (s = i[r].VendorServices) ? s : [];
                    n.push.apply(n, s)
                }
            return n
        }
        ,
        n.prototype.createVendor = function (e, t, o, n) {
            var r = V.vendorItemClone.cloneNode(!0)
                , i = (r.setAttribute("data-vnd-id", t.CustomVendorServiceId),
                    A.PCAccordionStyle === ce.NoAccordion ? (r.classList.remove("ot-accordion-layout"),
                        (i = r.querySelector("button")) && r.removeChild(i)) : V.setExpandVendorList(r, o),
                    V.setVendorHeader(e, t, r, n),
                    r.querySelector(".ot-vnd-info-cntr"));
            return V.setVendorInfo(i, t),
                r
        }
        ,
        n.prototype.setExpandVendorList = function (e, t) {
            e.querySelector("button").setAttribute("aria-expanded", "" + t)
        }
        ,
        n.prototype.setVendorHeader = function (e, t, o, n) {
            var r = A.PCShowAlwaysActiveToggle
                , i = "always active" === f.getGrpStatus(e).toLowerCase()
                , o = o.querySelector(".ot-acc-hdr")
                , s = (i && o.classList.add("ot-always-active-group"),
                    null)
                , e = (i && A.PCCategoryStyle === ke.Toggle || (s = V.setHeaderInputStyle(e, t, i, n)),
                    V.setHeaderText(t, o))
                , n = (o.appendChild(e),
                    V.getPositionForElement(A.PCAccordionStyle, V.isToggle))
                , t = n.positionIcon
                , e = n.positionInput;
            s && o.insertAdjacentElement(e, s),
                i && r && (n = V.getAlwaysActiveElement(),
                    o.insertAdjacentElement("beforeend", n)),
                A.PCAccordionStyle !== ce.NoAccordion && (e = V.setHeaderAccordionIcon(),
                    o.insertAdjacentElement(t, e))
        }
        ,
        n.prototype.getPositionForElement = function (e, t) {
            var o = "beforeend"
                , n = "beforeend";
            return {
                positionIcon: o = t && e === ce.PlusMinus ? "afterbegin" : o,
                positionInput: n = t ? n : "afterbegin"
            }
        }
        ,
        n.prototype.setHeaderAccordionIcon = function () {
            var e = (A.PCAccordionStyle === ce.Caret ? _.arrowEl : _.plusMinusEl).cloneNode(!0);
            return e
        }
        ,
        n.prototype.setHeaderText = function (e, t) {
            var o = t.querySelector(".ot-cat-header")
                , n = o.cloneNode();
            return t.removeChild(o),
                n.innerText = e.ServiceName,
                n
        }
        ,
        n.prototype.setHeaderInputStyle = function (e, t, o, n) {
            var r, i, s, a;
            return A.VendorServiceConfig.PCVSOptOut ? (e = f.checkIsActiveByDefault(e),
                r = !1,
                r = (i = I.vsConsent).has(t.CustomVendorServiceId) ? i.get(t.CustomVendorServiceId) : e,
                (i = Bn()).querySelector("input").classList.add("category-switch-handler"),
                e = i.querySelector("input"),
                a = t.CustomVendorServiceId,
                n = null != n ? n : "ot-vendor-id-" + a,
                s = "ot-vendor-header-id-" + a,
                L(e).attr("id", n),
                L(e).attr("name", n),
                L(e).attr("aria-labelledby", s),
                L(e).data("ot-vs-id", a),
                L(e).data("optanongroupid", t.groupRef.CustomGroupId),
                e.disabled = o,
                S.setCheckedAttribute(null, e, r),
                a = V.isToggle ? n : s,
                L(i.querySelector("label")).attr("for", a),
                L(i.querySelector(".ot-label-txt")).html(t.ServiceName),
                L(i.querySelector(".ot-switch-nob")).attr("aria-label", t.ServiceName),
                i) : null
        }
        ,
        n.prototype.getAlwaysActiveElement = function () {
            var e = document.createElement("div");
            return e.classList.add("ot-always-active"),
                e.innerText = A.AlwaysActiveText,
                e
        }
        ,
        n.prototype.setVendorInfo = function (e, t) {
            var o, n, r, i, s, a, l = ["DPOLink", "PrivacyPolicyLink", "CookiePolicyLink", "OptOutLink"];
            for (o in t)
                V.skipVendorInfoKey(o, t) || (n = t[o],
                    (r = V.vendorInfoClone.cloneNode(!0)).dataset.vndInfoKey = o + "-" + t.CustomVendorServiceId,
                    i = r.querySelector(".ot-vnd-lbl"),
                    s = r.querySelector(".ot-vnd-cnt"),
                    i.innerHTML = V.getLocalizedString(o),
                    l.includes(o) ? (s.remove(),
                        a = document.createElement("a"),
                        L(a).attr("href", n),
                        L(a).attr("target", "_blank"),
                        L(a).attr("rel", "noopener"),
                        L(a).attr("aria-label", n + " " + A.NewWinTxt),
                        a.classList.add("ot-vnd-cnt"),
                        a.innerText = n,
                        i.insertAdjacentElement("afterend", a)) : s.innerHTML = n,
                    e.appendChild(r))
        }
        ,
        n.prototype.skipVendorInfoKey = function (e, t) {
            return "VendorServiceId" === e || "DefaultCategoryId" === e || "ServiceName" === e || "groupRef" === e || "CustomVendorServiceId" === e || "PurposeId" === e || !t[e]
        }
        ,
        n.prototype.getLocalizedString = function (e) {
            return V.stringTranslation.has(e) ? V.stringTranslation.get(e) : "DEFAULT"
        }
        ,
        n.prototype.checkGroupChildrenState = function (e) {
            for (var t, o = 0, n = null != (t = e.SubGroups) ? t : []; o < n.length; o++) {
                var r = n[o];
                if (V.checkGroupChildrenState(r))
                    return !0
            }
            for (var i = 0, s = null != (t = e.VendorServices) ? t : []; i < s.length; i++) {
                var a = s[i];
                if (I.vsConsent.get(a.CustomVendorServiceId))
                    return !0
            }
            return !1
        }
        ,
        n.prototype.changeVendorServiceState = function (e, t) {
            I.vsConsent.set(e.CustomVendorServiceId, t)
        }
        ,
        n.prototype.changeVendorServiceUIState = function (e, t) {
            e && (S.setCheckedAttribute(null, e, t),
                V.isToggle) && e.parentElement.querySelector(".ot-switch-nob").setAttribute("aria-checked", "" + t)
        }
        ,
        n.prototype.changeGroupState = function (e, t, o) {
            var n = f.getParentByGrp(e);
            E.toggleGrpStatus(e, t),
                V.updateGroupUIState(e.CustomGroupId, t, o, null !== n),
                n && (e = V.checkGroupChildrenState(n),
                    V.changeGroupState(n, e, o))
        }
        ,
        n.prototype.updateGroupUIState = function (e, t, o, n) {
            void 0 === n && (n = !1);
            n = document.querySelector((n ? "#ot-sub-group-id-" : "#ot-group-id-") + e);
            n && (S.setCheckedAttribute(null, n, t),
                o) && n.parentElement.querySelector(".ot-switch-nob").setAttribute("aria-checked", "" + t)
        }
        ,
        n.prototype.getVendorInputElement = function (e) {
            return document.getElementById("ot-vendor-id-" + e)
        }
        ,
        n.prototype.checkIfIsInvalid = function (e, t) {
            return !e || !e.VendorServices || !t || e.VendorServices.length <= 0
        }
        ;
    var V, wn = n;
    function n() {
        this.MAIN_CONT_ELE = ".ot-vnd-serv"
    }
    xn.prototype.updateDataSubjectTimestamp = function () {
        var e = p.alertBoxCloseDate()
            , e = e && y.getUTCFormattedDate(e);
        L(".ot-userid-timestamp").html(A.PCenterUserIdTimestampTitleText + ": " + e)
    }
        ,
        xn.prototype.closeBanner = function (e) {
            this.closeOptanonAlertBox(),
                e ? this.allowAll(!1) : this.close(!1)
        }
        ,
        xn.prototype.allowAll = function (e, t) {
            void 0 === t && (t = !1),
                m.moduleInitializer.MobileSDK ? window.OneTrust.AllowAll() : this.AllowAllV2(e, t)
        }
        ,
        xn.prototype.bannerActionsHandler = function (t, n, e) {
            var r = this
                , i = (void 0 === e && (e = !1),
                    ln.setLandingPathParam(De.NOT_LANDING_PAGE),
                    I.groupsConsent = [],
                    I.hostsConsent = [],
                    I.genVendorsConsent = {},
                    {});
            A.Groups.forEach(function (e) {
                if (e.IsAboutGroup)
                    return !1;
                q(e.SubGroups, [e]).forEach(function (e) {
                    var o = r.getGroupStatus(t, n, e);
                    r.setGroupConsent(o, e),
                        e.Hosts.length && y.isOptOutEnabled() && e.Hosts.forEach(function (e) {
                            var t;
                            i[e.HostId] ? yo.updateHostStatus(e, o) : (i[e.HostId] = !0,
                                t = yo.isHostPartOfAlwaysActiveGroup(e.HostId),
                                I.hostsConsent.push(e.HostId + ":" + (t || o ? "1" : "0")))
                        }),
                        I.genVenOptOutEnabled && e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function (e) {
                            go.updateGenVendorStatus(e, o)
                        })
                })
            }),
                A.IsIabEnabled && (t ? this.iab.allowAllhandler() : this.iab.rejectAllHandler(e)),
                $o.removeAddedOTCssStyles(),
                rn.hideConsentNoticeV2(),
                io.writeGrpParam(v.OPTANON_CONSENT),
                io.writeHstParam(v.OPTANON_CONSENT),
                I.genVenOptOutEnabled && io.writeGenVenCookieParam(v.OPTANON_CONSENT),
                I.vsIsActiveAndOptOut && io.writeVSConsentCookieParam(v.OPTANON_CONSENT),
                hn.substitutePlainTextScriptTags(),
                pn.updateGtmMacros(),
                this.executeOptanonWrapper()
        }
        ,
        xn.prototype.getGroupStatus = function (e, t, o) {
            return e ? o.Status.toLowerCase() !== C.ALWAYS_INACTIVE : !!t && f.isAlwaysActiveGroup(o)
        }
        ,
        xn.prototype.setGroupConsent = function (e, t) {
            -1 < vt.indexOf(t.Type) && I.groupsConsent.push(t.CustomGroupId + ":" + (e && t.HasConsentOptOut ? "1" : "0"))
        }
        ,
        xn.prototype.nextPageCloseBanner = function () {
            ln.isLandingPage() || p.isAlertBoxClosedAndValid() || this.closeBanner(A.NextPageAcceptAllCookies)
        }
        ,
        xn.prototype.rmScrollAndClickBodyEvents = function () {
            A.ScrollCloseBanner && window.removeEventListener("scroll", this.scrollCloseBanner),
                A.OnClickCloseBanner && document.body.removeEventListener("click", this.bodyClickEvent)
        }
        ,
        xn.prototype.onClickCloseBanner = function (e) {
            p.isAlertBoxClosedAndValid() || (u.triggerGoogleAnalyticsEvent(ko, So),
                this.closeBanner(A.OnClickAcceptAllCookies),
                e.stopPropagation()),
                h.rmScrollAndClickBodyEvents()
        }
        ,
        xn.prototype.scrollCloseBanner = function () {
            var e = L(document).height() - L(window).height()
                , e = (0 === e && (e = L(window).height()),
                    100 * L(window).scrollTop() / e);
            25 < (e = e <= 0 ? 100 * (document.scrollingElement && document.scrollingElement.scrollTop || document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop) / (document.scrollingElement && document.scrollingElement.scrollHeight || document.documentElement && document.documentElement.scrollHeight || document.body && document.body.scrollHeight) : e) && !p.isAlertBoxClosedAndValid() && (!I.isPCVisible || A.NoBanner) ? (u.triggerGoogleAnalyticsEvent(ko, So),
                h.closeBanner(A.ScrollAcceptAllCookies),
                h.rmScrollAndClickBodyEvents()) : p.isAlertBoxClosedAndValid() && h.rmScrollAndClickBodyEvents()
        }
        ,
        xn.prototype.AllowAllV2 = function (e, t) {
            void 0 === t && (t = !1);
            for (var o = this.groupsClass.getAllGroupElements(), n = 0; n < o.length; n++) {
                var r = f.getGroupById(o[n].getAttribute("data-optanongroupid"));
                this.groupsClass.toggleGrpElements(o[n], r, !0),
                    this.groupsClass.toogleSubGroupElement(o[n], !0, !1, !0),
                    this.groupsClass.toogleSubGroupElement(o[n], !0, !0, !0)
            }
            I.showVendorService && V.consentAll(!0),
                this.bannerActionsHandler(!0, !1),
                this.consentTransactions(e, !0, t),
                A.IsIabEnabled && (this.iab.updateIabVariableReference(),
                    this.iab.updateVendorsDOMToggleStatus(!0),
                    this.updateVendorLegBtns(!0))
        }
        ,
        xn.prototype.rejectAll = function (e, t) {
            for (var o, n, r = (t = void 0 === t ? !1 : t) ? ge[5] : ge[2], i = this.groupsClass.getAllGroupElements(), s = null != (o = null == (o = m) ? void 0 : o.fp) && o.CookieV2RejectAll ? (n = this.initializeObjectToLIRejectAll(t),
                this.initializeAllowLIRejectAll(t)) : !(n = !0), a = 0; a < i.length; a++) {
                var l = f.getGroupById(i[a].getAttribute("data-optanongroupid"));
                "always active" !== f.getGrpStatus(l).toLowerCase() && (E.toggleGrpElements(i[a], l, !1, s),
                    this.groupsClass.toogleSubGroupElement(i[a], !1, !1, !0),
                    !A.IsIabEnabled || A.IsIabEnabled && n) && this.groupsClass.toogleSubGroupElement(i[a], !1, !0, !0)
            }
            I.showVendorService && V.consentAll(!1),
                this.bannerActionsHandler(!1, !0, s),
                r !== I.consentInteractionType && this.consentTransactions(e, !1, t),
                A.IsIabEnabled && (this.iab.updateIabVariableReference(),
                    this.iab.updateVendorsDOMToggleStatus(!1, s),
                    s || this.updateVendorLegBtns(!1))
        }
        ,
        xn.prototype.initializeObjectToLIRejectAll = function (e) {
            return !e && A.BannerShowRejectAllButton && A.BRejectConsentType === Le.OBJECT_TO_LI || e && A.PCenterShowRejectAllButton && A.BRejectConsentType === Le.OBJECT_TO_LI
        }
        ,
        xn.prototype.initializeAllowLIRejectAll = function (e) {
            return A.IsIabEnabled && (!e && A.BannerShowRejectAllButton && A.BRejectConsentType === Le.LI_ACTIVE_IF_LEGAL_BASIS || e && A.PCenterShowRejectAllButton && A.BRejectConsentType === Le.LI_ACTIVE_IF_LEGAL_BASIS)
        }
        ,
        xn.prototype.executeCustomScript = function () {
            A.CustomJs && new Function(A.CustomJs)()
        }
        ,
        xn.prototype.updateConsentData = function (e) {
            ln.setLandingPathParam(De.NOT_LANDING_PAGE),
                A.IsIabEnabled && !e && this.iab.saveVendorStatus(),
                io.writeGrpParam(v.OPTANON_CONSENT),
                io.writeHstParam(v.OPTANON_CONSENT),
                I.showGeneralVendors && A.GenVenOptOut && io.writeGenVenCookieParam(v.OPTANON_CONSENT),
                I.vsIsActiveAndOptOut && io.writeVSConsentCookieParam(v.OPTANON_CONSENT),
                hn.substitutePlainTextScriptTags(),
                pn.updateGtmMacros()
        }
        ,
        xn.prototype.close = function (e, t) {
            var o;
            void 0 === t && (t = te.Banner),
                rn.hideConsentNoticeV2(),
                this.updateConsentData(e),
                A.IsConsentLoggingEnabled ? (e = t === te.PC ? Tn : t === te.Banner ? Sn : T.apiSource,
                    o = t === te.PC ? vn : t === te.Banner ? mn : kn,
                    I.bannerCloseSource === ee.ContinueWithoutAcceptingButton && (e = In),
                    I.bannerCloseSource === ee.BannerSaveSettings && (e = An),
                    Jr.createConsentTxn(!1, o + " - " + e, t === te.PC)) : p.dispatchConsentEvent(),
                this.executeOptanonWrapper()
        }
        ,
        xn.prototype.executeOptanonWrapper = function () {
            try {
                if (this.executeCustomScript(),
                    "function" == typeof window.OptanonWrapper && "undefined" !== window.OptanonWrapper) {
                    window.OptanonWrapper();
                    for (var e = 0, t = I.srcExecGrpsTemp; e < t.length; e++) {
                        var o = t[e];
                        -1 === I.srcExecGrps.indexOf(o) && I.srcExecGrps.push(o)
                    }
                    I.srcExecGrpsTemp = [];
                    for (var n = 0, r = I.htmlExecGrpsTemp; n < r.length; n++) {
                        o = r[n];
                        -1 === I.htmlExecGrps.indexOf(o) && I.htmlExecGrps.push(o)
                    }
                    I.htmlExecGrpsTemp = []
                }
            } catch (e) {
                console.warn("Error in Optanon wrapper, please review your code. " + e)
            }
        }
        ,
        xn.prototype.updateVendorLegBtns = function (e) {
            if (T.legIntSettings.PAllowLI && T.legIntSettings.PShowLegIntBtn)
                for (var t = L(b.P_Vendor_Container + " .ot-leg-btn-container").el, o = 0; o < t.length; o++)
                    this.groupsClass.updateLegIntBtnElement(t[o], e)
        }
        ,
        xn.prototype.showFltgCkStgButton = function () {
            var e = L("#ot-sdk-btn-floating")
                , e = (e.removeClass("ot-hide"),
                    e.removeClass("ot-pc-open"),
                    A.cookiePersistentLogo.includes("ot_guard_logo.svg") && L(h.fltgFrontBtnSvg).attr(Ct, ""),
                    L(h.fltgBackBtnSvg).attr(Ct, "true"),
                    document.querySelector(h.fltgBtnBackBtn))
                , t = document.querySelector(h.fltgBtnFrontBtn);
            t && (t.setAttribute(Ct, "false"),
                t.style.display = "block"),
                e && (e.setAttribute(Ct, "true"),
                    e.style.display = "none")
        }
        ,
        xn.prototype.consentTransactions = function (e, t, o) {
            void 0 === o && (o = !1),
                Jr && !e && A.IsConsentLoggingEnabled ? Jr.createConsentTxn(!1, (o ? vn : mn) + " - " + (t ? bn : Pn), o) : p.dispatchConsentEvent()
        }
        ,
        xn.prototype.hideVendorsList = function () {
            rn.checkIfPcSdkContainerExist() || (A.PCTemplateUpgrade ? L("#onetrust-pc-sdk " + b.P_Content).removeClass("ot-hide") : L("#onetrust-pc-sdk .ot-main-content").show(),
                L("#onetrust-pc-sdk #close-pc-btn-handler.main").show(),
                L("#onetrust-pc-sdk " + b.P_Vendor_List).addClass("ot-hide"))
        }
        ,
        xn.prototype.resetConsent = function () {
            var e = this;
            I.groupsConsent = JSON.parse(JSON.stringify(I.initialGroupsConsent)),
                I.hostsConsent = JSON.parse(JSON.stringify(I.initialHostConsent)),
                I.showGeneralVendors && (I.genVendorsConsent = JSON.parse(JSON.stringify(I.initialGenVendorsConsent))),
                I.vsIsActiveAndOptOut && (I.vsConsent = new Map(I.initialVendorsServiceConsent)),
                A.IsIabEnabled && (I.oneTrustIABConsent = JSON.parse(JSON.stringify(I.initialOneTrustIABConsent)),
                    I.vendors = JSON.parse(JSON.stringify(I.initialVendors)),
                    I.vendors.vendorTemplate = I.initialVendors.vendorTemplate),
                A.UseGoogleVendors && (I.addtlVendors = JSON.parse(JSON.stringify(I.initialAddtlVendors)),
                    I.addtlVendorsList = JSON.parse(JSON.stringify(I.initialAddtlVendorsList))),
                setTimeout(function () {
                    e.resetConsentUI()
                }, 400)
        }
        ,
        xn.prototype.setLblTxtForTgl = function (e, t) {
            e = e.querySelector(".ot-label-status");
            A.PCShowConsentLabels && e && (e.innerHTML = t ? A.PCActiveText : A.PCInactiveText)
        }
        ,
        xn.prototype.resetConsentUI = function () {
            var u = this;
            E.getAllGroupElements().forEach(function (e) {
                var t = e.getAttribute("data-optanongroupid")
                    , o = f.getGroupById(t)
                    , t = h.isGroupActive(o, t)
                    , n = P.GroupTypes;
                if (T.pcName === g && A.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid"))),
                    u.setLblTxtForTgl(e, t),
                    o.Type === yt || o.Type === n.Stack)
                    for (var n = y.isBundleOrStackActive(o, I.initialGroupsConsent), r = e.querySelector('input[class*="category-switch-handler"]'), i = (S.setCheckedAttribute(null, r, n),
                        e.querySelectorAll("li" + b.P_Subgrp_li)), s = 0; s < i.length; s++) {
                        var a = f.getGroupById(i[s].getAttribute("data-optanongroupid"))
                            , l = a.OptanonGroupId
                            , l = h.isGroupActive(a, l)
                            , c = i[s].querySelector('input[class*="cookie-subgroup-handler"]')
                            , d = i[s].querySelector(".ot-label-status")
                            , p = e.querySelector(".ot-label-status");
                        A.PCShowConsentLabels && d && (p.innerHTML = l ? A.PCActiveText : A.PCInactiveText),
                            S.setCheckedAttribute(null, c, l),
                            h.resetLegIntButton(a, i[s])
                    }
                else {
                    r = e.querySelector('input[class*="category-switch-handler"]');
                    S.setCheckedAttribute(null, r, t),
                        h.resetLegIntButton(o, e)
                }
            }),
                A.IsIabEnabled && En.toggleVendorConsent(),
                this.resetGenVenUI(),
                this.resetGoogleVenUI(),
                I.vsIsActiveAndOptOut && V.resetVendorUIState(I.vsConsent)
        }
        ,
        xn.prototype.resetGenVenUI = function () {
            var e = L("#onetrust-pc-sdk .ot-gnven-chkbox-handler").el;
            if (I.showGeneralVendors && e && e.length) {
                for (var t = 0, o = e; t < o.length; t++) {
                    var n = o[t]
                        , r = n.getAttribute("gn-vid")
                        , i = Boolean(I.genVendorsConsent[r]);
                    S.setCheckedAttribute("", n, i),
                        go.updateGenVendorStatus(r, i)
                }
                G.genVenSelectAllTglEvent()
            }
        }
        ,
        xn.prototype.resetGoogleVenUI = function () {
            var e = L("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el;
            if (A.UseGoogleVendors && e && e.length)
                for (var t = 0, o = e; t < o.length; t++) {
                    var n = o[t]
                        , r = n.getAttribute("addtl-vid");
                    I.addtlVendorsList[r] && (r = Boolean(I.addtlVendors.vendorSelected[r]),
                        S.setCheckedAttribute("", n, r))
                }
        }
        ,
        xn.prototype.isGroupActive = function (e, t) {
            var o;
            return e.IabGrpId ? (o = void 0,
                o = e.Type === P.GroupTypes.Spl_Ft ? I.initialVendors.selectedSpecialFeatures : e.IsLegIntToggle ? I.initialVendors.selectedLegInt : I.initialVendors.selectedPurpose,
                -1 !== Ot.inArray(e.IabGrpId + ":true", o)) : -1 !== Ot.inArray(t + ":1", I.initialGroupsConsent)
        }
        ,
        xn.prototype.resetLegIntButton = function (e, t) {
            var o;
            T.legIntSettings.PAllowLI && e.Type === P.GroupTypes.Pur && e.HasLegIntOptOut && T.legIntSettings.PShowLegIntBtn && (o = !0,
                -1 < I.vendors.selectedLegInt.indexOf(e.IabGrpId + ":false") && (o = !1),
                E.updateLegIntBtnElement(t, o))
        }
        ,
        xn.prototype.handleTogglesOnSingularConsentUpdate = function (e, t) {
            if (this.closeOptanonAlertBox(),
                e === dt)
                for (var s = this, o = 0, n = t; o < n.length; o++) {
                    var r = n[o];
                    !function (e, t) {
                        for (var o = f.getGroupById(e), n = s.groupsClass.getAllGroupElements(), r = 0; r < n.length; r++) {
                            var i = f.getGroupById(n[r].getAttribute("data-optanongroupid"));
                            if (i.OptanonGroupId === o.OptanonGroupId && !i.Parent) {
                                B.toggleV2Category(null, i, t, i.CustomGroupId);
                                break
                            }
                            i = i.SubGroups.find(function (e) {
                                return e.OptanonGroupId === o.OptanonGroupId
                            });
                            i && B.toggleSubCategory(null, i.CustomGroupId, t, i.CustomGroupId)
                        }
                    }(c = r.id, d = r.isEnabled)
                }
            else if (e === gt)
                for (var i = 0, a = t; i < a.length; i++) {
                    var l = a[i]
                        , c = l.id
                        , d = l.isEnabled
                        , l = f.getGrpByVendorId(c);
                    l && V.toggleVendorService(l.CustomGroupId, c, d)
                }
            this.close(!1, te.API)
        }
        ;
    var h, Gn = xn;
    function xn() {
        var o = this;
        this.iab = G,
            this.groupsClass = E,
            this.fltgBackBtnSvg = ".ot-floating-button__back svg",
            this.fltgFrontBtnSvg = ".ot-floating-button__front svg",
            this.fltgBtnBackBtn = ".ot-floating-button__back button",
            this.fltgBtnFrontBtn = ".ot-floating-button__front button",
            this.closeOptanonAlertBox = function () {
                var e;
                y.hideBanner(),
                    L(document).off("keydown", B.closePCWhenEscPressed),
                    A.NtfyConfig.ShowNtfy && fn.hideSyncNtfy(),
                    T.isOptInMode || !T.isOptInMode && !p.isAlertBoxClosedAndValid() ? (u.setAlertBoxClosed(!0),
                        A.PCTemplateUpgrade && A.PCenterUserIdTitleText && A.IsConsentLoggingEnabled && o.updateDataSubjectTimestamp()) : p.isAlertBoxClosedAndValid() && (e = L(".onetrust-pc-dark-filter").el[0]) && "none" !== getComputedStyle(e).getPropertyValue("display") && L(".onetrust-pc-dark-filter").fadeOut(400),
                    w.csBtnGroup && o.showFltgCkStgButton()
            }
            ,
            this.bodyClickEvent = function (e) {
                var t = e.target;
                t.closest("#onetrust-banner-sdk") || t.closest("#onetrust-pc-sdk") || t.closest(".onetrust-pc-dark-filter") || t.closest(".ot-sdk-show-settings") || t.closest(".optanon-show-settings") || t.closest(".optanon-toggle-display") || h.onClickCloseBanner(e)
            }
            ,
            this.bannerCloseButtonHandler = function (e) {
                var t;
                return void 0 === e && (e = !1),
                    h.closeOptanonAlertBox(),
                    m.moduleInitializer.MobileSDK ? window.OneTrust.Close() : (t = I.bannerCloseSource === ee.ConfirmChoiceButton ? te.PC : te.Banner,
                        h.close(e, t)),
                    !1
            }
            ,
            this.allowAllEventHandler = function (e) {
                void 0 === e && (e = !1),
                    L(document).off("keydown", B.shiftBannerFocus),
                    u.triggerGoogleAnalyticsEvent(ko, e ? "Preferences Allow All" : "Banner Accept Cookies"),
                    o.allowAllEvent(!1, e),
                    o.hideVendorsList()
            }
            ,
            this.allowAllEvent = function (e, t) {
                void 0 === e && (e = !1),
                    void 0 === t && (t = !1),
                    o.closeOptanonAlertBox(),
                    h.allowAll(e, t)
            }
            ,
            this.rejectAllEventHandler = function (e) {
                void 0 === e && (e = !1),
                    L(document).off("keydown", B.shiftBannerFocus),
                    u.triggerGoogleAnalyticsEvent(ko, e ? "Preferences Reject All" : "Banner Reject All"),
                    m.moduleInitializer.MobileSDK ? window.OneTrust.RejectAll() : (o.rejectAllEvent(!1, e),
                        o.hideVendorsList())
            }
            ,
            this.rejectAllEvent = function (e, t) {
                void 0 === e && (e = !1),
                    void 0 === t && (t = !1),
                    o.closeOptanonAlertBox(),
                    !p.isIABCrossConsentEnabled() || T.thirdPartyiFrameLoaded ? o.rejectAll(e, t) : T.thirdPartyiFramePromise.then(function () {
                        o.rejectAll(e, t)
                    })
            }
    }
    Hn.prototype.setFilterList = function (o) {
        var n = this
            , r = L("#onetrust-pc-sdk " + b.P_Fltr_Modal + " " + b.P_Fltr_Option).el[0].cloneNode(!0);
        L("#onetrust-pc-sdk " + b.P_Fltr_Modal + " " + b.P_Fltr_Options).html(""),
            (m.isV2Template || A.PCLayout.Popup) && L("#onetrust-pc-sdk #filter-cancel-handler").html(A.PCenterCancelFiltersText || "Cancel"),
            !m.isV2Template && A.PCLayout.Popup || (L("#onetrust-pc-sdk " + b.P_Clr_Fltr_Txt).html(A.PCenterClearFiltersText),
                L("#filter-btn-handler").el[0].setAttribute("aria-label", A.PCenterFilterText)),
            L("#onetrust-pc-sdk #filter-apply-handler").html(A.PCenterApplyFiltersText),
            o ? T.consentableGrps.forEach(function (e) {
                var t = I.cookieListType === ye.GenVen || I.cookieListType === ye.HostAndGenVen ? e.Hosts.length || e.FirstPartyCookies.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length : e.Hosts.length || e.FirstPartyCookies.length;
                t && n.filterGroupOptionSetter(r, e, o)
            }) : T.iabGrps.forEach(function (e) {
                n.filterGroupOptionSetter(r, e, o)
            })
    }
        ,
        Hn.prototype.setFilterListByGroup = function (e, t) {
            var o, n = this;
            !e || e.length <= 0 ? L("#onetrust-pc-sdk " + b.P_Fltr_Modal + " " + b.P_Fltr_Options).html("") : (o = L("#onetrust-pc-sdk " + b.P_Fltr_Modal + " " + b.P_Fltr_Option).el[0].cloneNode(!0),
                L("#onetrust-pc-sdk " + b.P_Fltr_Modal + " " + b.P_Fltr_Options).html(""),
                (m.isV2Template || A.PCLayout.Popup) && L("#onetrust-pc-sdk #filter-cancel-handler").html(A.PCenterCancelFiltersText || "Cancel"),
                !m.isV2Template && A.PCLayout.Popup || (L("#onetrust-pc-sdk " + b.P_Clr_Fltr_Txt).html(A.PCenterClearFiltersText),
                    L("#filter-btn-handler").el[0].setAttribute("aria-label", A.PCenterFilterText)),
                L("#onetrust-pc-sdk #filter-apply-handler").html(A.PCenterApplyFiltersText),
                e.forEach(function (e) {
                    n.filterGroupOptionSetter(o, e, t)
                }))
        }
        ,
        Hn.prototype.filterGroupOptionSetter = function (e, t, o) {
            var n = t.CustomGroupId
                , r = n + "-filter"
                , e = e.cloneNode(!0);
            L(b.P_Fltr_Modal + " " + b.P_Fltr_Options).append(e),
                L(e.querySelector("input")).attr("id", r),
                L(e.querySelector("label")).attr("for", r),
                (m.isV2Template ? L(e.querySelector(b.P_Label_Txt)) : L(e.querySelector("label span"))).html(t.GroupName),
                L(e.querySelector("input")).attr(o ? "data-optanongroupid" : "data-purposeid", n)
        }
        ;
    var Nn, Dn = Hn;
    function Hn() {
        this.bodyScrollProp = "",
            this.htmlScrollProp = "",
            this.ONETRUST_PC_SDK = "#onetrust-pc-sdk",
            this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter"
    }
    Mn.prototype.showParagraph = function (e) {
        var t = R({}, e)
            , o = t.listTitle
            , n = t.htmlFragment
            , t = t.paragrphContainerSelector;
        Rn.options = e,
            Rn.hideOtherHtmlElements(e),
            Rn.setParagraphTitle(o),
            Rn.addItemListToRootElement(n, t)
    }
        ,
        Mn.prototype.hideParagraphUI = function () {
            var e = R({}, Rn.options)
                , t = e.showFooter;
            e.showSearchBox || (null != (e = Rn.checkboxesContainerEle) && e.classList.remove("ot-hide"),
                null != (e = Rn.searchInputContainerEle) && e.classList.remove("ot-hide"),
                null != (e = Rn.listHotsVendorsContainerEle) && e.classList.remove("ot-hide")),
                t || null != (e = Rn.footerButtonContainerEle) && e.classList.remove("ot-hide"),
                Rn.rootEle.removeChild(Rn.paragraphContainerEle)
        }
        ,
        Mn.prototype.addItemListToRootElement = function (e, t) {
            var o = document.querySelector("#onetrust-pc-sdk " + b.P_Vendor_List);
            Rn.rootEle = o.querySelector(this.MAIN_CONT_ELE),
                Rn.rootEle.appendChild(e),
                Rn.paragraphContainerEle = Rn.rootEle.querySelector(t)
        }
        ,
        Mn.prototype.setParagraphTitle = function (e) {
            document.querySelector("#onetrust-pc-sdk " + b.P_Vendor_Title).innerHTML = e
        }
        ,
        Mn.prototype.hideOtherHtmlElements = function (e) {
            var e = R({}, e)
                , t = e.showFooter
                , e = e.showSearchBox
                , o = document.querySelector("#onetrust-pc-sdk " + b.P_Vendor_List)
                , o = (!e && o && (Rn.checkboxesContainerEle = o.querySelector(this.SEL_BLK_ELE),
                    Rn.searchInputContainerEle = o.querySelector(this.LST_SUBHDR_ELE),
                    Rn.listHotsVendorsContainerEle = o.querySelector(this.SDK_ROW_ELE),
                    null != (e = Rn.checkboxesContainerEle) && e.classList.add("ot-hide"),
                    null != (o = Rn.searchInputContainerEle) && o.classList.add("ot-hide"),
                    null != (e = Rn.listHotsVendorsContainerEle)) && e.classList.add("ot-hide"),
                    document.querySelector("#onetrust-pc-sdk .ot-pc-footer .ot-btn-container"));
            !t && o && (Rn.footerButtonContainerEle = o,
                null != (e = Rn.footerButtonContainerEle)) && e.classList.add("ot-hide")
        }
        ;
    var Rn, Fn = Mn;
    function Mn() {
        this.SDK_ROW_ELE = ".ot-sdk-row",
            this.SEL_BLK_ELE = "#ot-sel-blk",
            this.MAIN_CONT_ELE = "#ot-lst-cnt",
            this.LST_SUBHDR_ELE = ".ot-lst-subhdr"
    }
    jn.prototype.showIllustrations = function (e, t) {
        e = qn.insertParagraphContainer(e, t),
            t = {
                showFooter: !1,
                showSearchBox: !1,
                listTitle: A.PCIllusText,
                htmlFragment: e,
                paragrphContainerSelector: "." + this.PARAGRAPH_CONTAINER_ELE
            };
        Rn.showParagraph(t)
    }
        ,
        jn.prototype.hideUI = function () {
            Rn.hideParagraphUI()
        }
        ,
        jn.prototype.addIllustrationsLink = function (e, t, o, n) {
            void 0 === n && (n = !1);
            var r = t.IabIllustrations && 0 < t.IabIllustrations.length;
            o && r && A.PCGrpDescType === re.UserFriendly && (o = A.PCVendorFullLegalText + "&nbsp;",
                (r = document.createElement("button")).classList.add("ot-link-btn"),
                r.classList.add("ot-pgph-link"),
                r.setAttribute("aria-label", A.PCVendorFullLegalText),
                r.setAttribute("data-parent-id", t.CustomGroupId),
                n ? (r.classList.add("ot-pgph-link-subgroup"),
                    e.appendChild(r)) : (o = "&nbsp;|&nbsp" + o,
                        e.insertAdjacentElement("afterend", r)),
                r.innerHTML = o)
        }
        ,
        jn.prototype.insertParagraphContainer = function (e, t) {
            var o = document.createDocumentFragment()
                , n = document.createElement("div")
                , e = (n.classList.add(this.PARAGRAPH_CONTAINER_ELE),
                    qn.insertPurposeTitle(e))
                , r = (n.appendChild(e),
                    document.createElement("div"));
            return r.classList.add("ot-paragraph-lst"),
                t.forEach(function (e, t) {
                    e = qn.insertDescriptionElement(e, t);
                    r.appendChild(e)
                }),
                n.appendChild(r),
                o.appendChild(n),
                o
        }
        ,
        jn.prototype.insertPurposeTitle = function (e) {
            var t = document.createElement("h4")
                , e = (t.classList.add("ot-pgph-title"),
                    document.createTextNode(e));
            return t.appendChild(e),
                t
        }
        ,
        jn.prototype.insertDescriptionElement = function (e, t) {
            var o = document.createElement("p");
            return o.setAttribute("id", "ot-pgph-desc-id-" + t),
                o.classList.add("ot-pgph-desc"),
                o.innerText = e,
                o
        }
        ;
    var qn, Un = jn;
    function jn() {
        this.PARAGRAPH_CONTAINER_ELE = "ot-pgph-contr"
    }
    r.prototype.insertPcHtml = function () {
        O.jsonAddAboutCookies(A);
        var t = document.createDocumentFragment()
            , e = (w.preferenceCenterGroup && (o = document.createElement("div"),
                L(o).html(w.preferenceCenterGroup.html),
                o = o.querySelector("#onetrust-pc-sdk"),
                O.addClassesPerConfig(o),
                L(t).append(o),
                O.manageCloseButtons(o, o = function (e) {
                    return t.querySelectorAll(e)
                }
                    , n = function (e) {
                        return t.querySelector(e)
                    }
                ),
                A.Language && A.Language.Culture && L(n("#onetrust-pc-sdk")).attr("lang", A.Language.Culture),
                O.addLogos(n, o),
                L(n(b.P_Title)).html(A.MainText),
                A.PCCloseButtonType === be.Link && A.PCTemplateUpgrade && T.pcName === g && L(n(b.P_Title)).addClass("ot-pc-title-shrink"),
                A.PCTemplateUpgrade && L(n(tn + ' > div[role="alertdialog"]')).css("height: 100%;"),
                L(n(tn + ' > div[role="alertdialog"]')).attr(this._ariaLabel, A.MainText),
                A.PCRegionAriaLabel && (L(n("#onetrust-pc-sdk")).attr(this._ariaLabel, A.PCRegionAriaLabel),
                    L(n("#onetrust-pc-sdk")).attr("role", "region")),
                T.pcName === g && (L(n(b.P_Privacy_Txt)).html(A.AboutCookiesText),
                    L(n(b.P_Privacy_Hdr)).html(A.AboutCookiesText)),
                e = '<span class="ot-tcf2-vendor-count ot-text-bold tcf2-vcount">' + T.tcf2ActiveVendors.all.toString() + "</span>",
                e = y.replaceTextFromString("[VENDOR_NUMBER]", A.MainInfoText, e),
                L(n(b.P_Policy_Txt)).html(e),
                O.configureLinkFields(n),
                O.configureSubjectDataFields(n),
                O.configureButtons(n, o),
                O.setManagePreferenceText(n),
                O.initializePreferenceCenterGroups(n, t),
                O.removeListsWhenAppropriate(n),
                A.PCTemplateUpgrade) && O.setOptOutSignalNotification(n),
                document.createElement("iframe"))
            , o = (e.setAttribute("class", "ot-text-resize"),
                e.setAttribute("sandbox", "allow-same-origin"),
                e.setAttribute("title", "onetrust-text-resize"),
                d(e, "position: absolute; top: -50000px; width: 100em;"),
                e.setAttribute(this._ariaHidden, "true"),
                L(t.querySelector("#onetrust-pc-sdk")).append(e),
                document.getElementById("onetrust-consent-sdk"))
            , n = (L(o).append(t),
                T.ignoreInjectingHtmlCss || L(document.body).append(o),
                (A.showCookieList || I.showGeneralVendors) && hn.InitializeHostList(),
                b.P_Vendor_List + " " + b.P_Host_Cntr + " li")
            , e = L(n).el[0];
        e && S.removeChild(e)
    }
        ,
        r.prototype.addClassesPerConfig = function (e) {
            /Chrome|Safari/i.test(navigator.userAgent) && /Google Inc|Apple Computer/i.test(navigator.vendor) || L(e).addClass("ot-sdk-not-webkit"),
                A.useRTL && L(e).attr("dir", "rtl"),
                T.legIntSettings.PAllowLI && T.isIab2orv2Template && (L(e).addClass("ot-leg-opt-out"),
                    T.legIntSettings.PShowLegIntBtn) && L(e).addClass("ot-leg-btn"),
                A.BannerRelativeFontSizesToggle && L(e).addClass("otRelFont"),
                A.PCShowConsentLabels && L(e).addClass("ot-tgl-with-label"),
                (A.UseGoogleVendors || I.showGeneralVendors) && L(e).addClass("ot-addtl-vendors"),
                "right" === A.PreferenceCenterPosition && L(e).addClass(A.useRTL ? "right-rtl" : "right")
        }
        ,
        r.prototype.manageCloseButtons = function (e, t, o) {
            var n = L(t(b.P_Close_Btn)).el;
            if (A.ShowPreferenceCenterCloseButton) {
                A.CloseText || (A.CloseText = "Close Preference Center");
                for (var r = 0, i = n; r < i.length; r++) {
                    var s = i[r];
                    A.PCCloseButtonType === be.Link && A.PCTemplateUpgrade ? (L(s).html(A.PCContinueText),
                        L(e).addClass("ot-close-btn-link"),
                        L(s).el.removeAttribute(this._ariaLabel)) : (L(s).el.setAttribute(this._ariaLabel, A.CloseText),
                            y.setCloseIcon(o("#onetrust-pc-sdk .ot-close-icon")))
                }
            } else
                for (var a = 0; a < n.length; a++)
                    L(n[a].parentElement).el.removeChild(n[a])
        }
        ,
        r.prototype.addLogos = function (e, t) {
            var o, n, e = e(b.P_Logo);
            e && A.optanonLogo && (o = y.updateCorrectUrl(A.optanonLogo),
                y.checkMobileOfflineRequest(y.getBannerVersionUrl()) && (o = S.getRelativeURL(o, !0, !0)),
                (n = document.createElement("img")).setAttribute("alt", A.PCLogoAria),
                n.setAttribute("src", o),
                e.append(n),
                A.PCLogoAria) && L(e).attr(this._ariaLabel, A.PCLogoAria),
                y.insertFooterLogo(t(".ot-pc-footer-logo a"))
        }
        ,
        r.prototype.configureLinkFields = function (e) {
            var t;
            A.AboutText && L(e(b.P_Policy_Txt)).html(L(e(b.P_Policy_Txt)).html() + '\n            <br/><a href="' + A.AboutLink + '" class="privacy-notice-link" rel="noopener" target="_blank"\n                    aria-label="' + A.PCCookiePolicyLinkScreenReader + '">' + A.AboutText + "</a>"),
                A.PCenterImprintLinkText && (A.AboutText || e(b.P_Policy_Txt).insertAdjacentHTML("beforeend", "<br/>"),
                    (t = document.createElement("a")).classList.add("ot-link-btn", "ot-imprint-handler"),
                    t.textContent = A.PCenterImprintLinkText,
                    t.setAttribute(this._ariaLabel, A.PCenterImprintLinkScreenReader),
                    t.setAttribute("href", A.PCenterImprintLinkUrl),
                    t.setAttribute("rel", "noopener"),
                    t.setAttribute("target", "_blank"),
                    e(b.P_Policy_Txt).appendChild(t)),
                A.PCenterVendorListLinkText && (t = !A.IsIabEnabled && I.showGeneralVendors ? "ot-gv-list-handler" : "onetrust-vendors-list-handler",
                    e(b.P_Policy_Txt).insertAdjacentHTML("beforeend", '<button class="ot-link-btn ' + t + '" aria-label="' + A.PCenterVendorListLinkAriaLabel + '">\n            ' + A.PCenterVendorListLinkText + "\n            </button>"))
        }
        ,
        r.prototype.configureSubjectDataFields = function (e) {
            var t;
            A.PCTemplateUpgrade && A.PCenterUserIdTitleText && A.IsConsentLoggingEnabled && (t = k.readCookieParam(v.OPTANON_CONSENT, De.CONSENT_ID),
                e(b.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-title"><span>' + A.PCenterUserIdTitleText + ": </span> " + t + "</div>"),
                A.PCenterUserIdDescriptionText && e(b.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-desc">' + A.PCenterUserIdDescriptionText + "</div>"),
                A.PCenterUserIdTimestampTitleText) && (t = (t = k.getCookie(v.ALERT_BOX_CLOSED)) && y.getUTCFormattedDate(t) || A.PCenterUserIdNotYetConsentedText,
                    e(b.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-timestamp"><span>' + A.PCenterUserIdTimestampTitleText + ": </span> " + t + "</div>"))
        }
        ,
        r.prototype.setManagePreferenceText = function (e) {
            var e = e(b.P_Manage_Cookies_Txt)
                , t = L(e);
            e && (t.html(A.ManagePreferenceText),
                A.ManagePreferenceText || t.attr(this._ariaHidden, !0))
        }
        ,
        r.prototype.configureButtons = function (e, t) {
            A.ConfirmText.trim() ? L(e("#accept-recommended-btn-handler")).html(A.ConfirmText) : e("#accept-recommended-btn-handler").parentElement.removeChild(e("#accept-recommended-btn-handler"));
            for (var o = t(".save-preference-btn-handler"), n = 0; n < o.length; n++)
                L(o[n]).html(A.AllowAllText);
            var r = t(".ot-pc-refuse-all-handler");
            if (A.PCenterShowRejectAllButton && A.PCenterRejectAllButtonText.trim())
                for (n = 0; n < r.length; n++)
                    L(r[n]).html(A.PCenterRejectAllButtonText);
            else
                S.removeChild(r)
        }
        ,
        r.prototype.removeListsWhenAppropriate = function (e) {
            var t;
            A.IsIabEnabled || (t = e(b.P_Vendor_Container)) && t.parentElement.removeChild(t),
                A.showCookieList || I.showGeneralVendors || (t = e(b.P_Host_Cntr)) && t.parentElement.removeChild(t)
        }
        ,
        r.prototype.setParentGroupName = function (e, t, o, n) {
            var r = e.querySelector(".category-header,.ot-cat-header,.category-menu-switch-handler>h3");
            L(r).html(t),
                L(r).attr("id", o),
                T.pcName === g && (e.querySelector(b.P_Category_Header).innerHTML = t,
                    e.querySelector("" + b.P_Desc_Container).setAttribute("id", n),
                    e.querySelector(".category-menu-switch-handler").setAttribute("aria-controls", n))
        }
        ,
        r.prototype.setLegIntButton = function (e, t, o, n) {
            void 0 === o && (o = !1);
            var r = !0
                , r = (-1 < I.vendors.selectedLegInt.indexOf(t.IabGrpId + ":false") && (r = !1),
                    p.generateLegIntButtonElements(r, t.OptanonGroupId))
                , t = (o ? n.insertAdjacentHTML("afterend", r) : e.insertAdjacentHTML("beforeend", r),
                    e.querySelector(".ot-remove-objection-handler"));
            t && d(t, t.getAttribute("data-style"))
        }
        ,
        r.prototype.setParentGroupDescription = function (e, t, o, n, r) {
            var i = E.safeFormattedGroupDescription(t)
                , s = e.querySelector("p:not(.ot-always-active)")
                , a = e.querySelector(b.P_Acc_Grp_Desc)
                , s = s || a;
            return -1 < bt.indexOf(t.Type) && o.PCGrpDescType === re.Legal ? i = t.DescriptionLegal : s.classList.add("ot-category-desc"),
                T.legIntSettings.PAllowLI && !T.legIntSettings.PShowLegIntBtn && (t.SubGroups.some(function (e) {
                    return e.HasLegIntOptOut
                }) || t.HasLegIntOptOut ? s.parentElement.classList.add("ot-leg-border-color") : S.removeChild(e.querySelector(b.P_Li_Hdr))),
                T.pcName !== g && s.setAttribute("id", n),
                L(s).html(i),
                t.Type === P.GroupTypes.Stack && S.removeChild(s),
                s
        }
        ,
        r.prototype.cloneOtHtmlEls = function (e) {
            var t = /otPcPanel|otPcCenter/;
            _.toggleEl = L(e(".ot-tgl")).el.cloneNode(!0),
                _.arrowEl = L(e('#onetrust-pc-sdk [role="alertdialog"] > ' + b.P_Arrw_Cntr)).el.cloneNode(!0),
                _.subGrpEl = L(e(b.P_Sub_Grp_Cntr)).el.cloneNode(!0),
                _.vListEl = L(e(b.P_Ven_Lst_Cntr)).el.cloneNode(!0),
                _.cListEl = L(e(b.P_Host_Lst_cntr)).el.cloneNode(!0),
                _.chkboxEl = L(e(b.P_CBx_Cntr)).el.cloneNode(!0),
                _.accordionEl = L(e(".ot-acc-cntr")).el.cloneNode(!0),
                t.test(T.pcName) && (_.plusMinusEl = L(e(".ot-plus-minus")).el.cloneNode(!0)),
                S.removeChild(e(".ot-tgl")),
                S.removeChild(e('#onetrust-pc-sdk [role="alertdialog"] > ' + b.P_Arrw_Cntr)),
                S.removeChild(e(b.P_Sub_Grp_Cntr)),
                S.removeChild(e(b.P_Ven_Lst_Cntr)),
                S.removeChild(e(b.P_Host_Lst_cntr)),
                S.removeChild(e(b.P_CBx_Cntr)),
                S.removeChild(e(".ot-acc-cntr")),
                t.test(T.pcName) && S.removeChild(e(".ot-plus-minus"))
        }
        ,
        r.prototype.insertSelectAllEls = function (e) {
            var e = e(b.P_Select_Cntr + " .ot-sel-all-chkbox")
                , t = I.showVendorService ? Bn() : _.chkboxEl.cloneNode(!0)
                , t = (t.id = b.P_Sel_All_Host_El,
                    t.querySelector("input").id = "select-all-hosts-groups-handler",
                    t.querySelector("label").setAttribute("for", "select-all-hosts-groups-handler"),
                    L(e).append(t),
                    I.showVendorService ? Bn() : _.chkboxEl.cloneNode(!0))
                , t = (t.id = b.P_Sel_All_Vendor_Consent_El,
                    t.querySelector("input").id = "select-all-vendor-groups-handler",
                    t.querySelector("label").setAttribute("for", "select-all-vendor-groups-handler"),
                    L(e).append(t),
                    I.showVendorService ? Bn() : _.chkboxEl.cloneNode(!0));
            t.id = b.P_Sel_All_Vendor_Leg_El,
                t.querySelector("input").id = "select-all-vendor-leg-handler",
                t.querySelector("label").setAttribute("for", "select-all-vendor-leg-handler"),
                L(e).append(t)
        }
        ,
        r.prototype.initializePreferenceCenterGroups = function (e, t) {
            var o, n = T.pcName, r = (m.isV2Template && (O.cloneOtHtmlEls(e),
                (r = _.chkboxEl.cloneNode(!0)).querySelector("input").classList.add("category-filter-handler"),
                L(e(b.P_Fltr_Modal + " " + b.P_Fltr_Option)).append(r),
                O.insertSelectAllEls(e)),
                L(e("#onetrust-pc-sdk " + b.P_Category_Grp))), i = (n === nt || n === it || n === rt ? A.PCenterEnableAccordion ? S.removeChild(r.el.querySelector(b.P_Category_Item + ":not(.ot-accordion-layout)")) : S.removeChild(r.el.querySelector(b.P_Category_Item + ".ot-accordion-layout")) : n === g && (A.PCenterEnableAccordion = !1),
                    e("#onetrust-pc-sdk " + b.P_Category_Item)), s = m.isV2Template ? _.subGrpEl.cloneNode(!0) : L(e(b.P_Sub_Grp_Cntr)), a = m.isV2Template ? null : L(e(b.P_Acc_Container + " " + b.P_Sub_Grp_Cntr));
            A.PCTemplateUpgrade && /otPcTab/.test(n) && (o = e(".ot-abt-tab").cloneNode(!0),
                S.removeChild(e(".ot-abt-tab"))),
                r.el.removeChild(i),
                O.setVendorListClass(e, i),
                O.setPCHeader(e, i),
                O.createHtmlForEachGroup({
                    fm: e,
                    fragment: t,
                    categoryGroupTemplate: i,
                    cookiePreferencesContainer: r,
                    popupSubGrpContainer: a,
                    subGrpContainer: s
                }),
                O.setPcTabLayout(e, t, o)
        }
        ,
        r.prototype.getActiveVendorCount = function (e) {
            var t = parseInt(e.IabGrpId)
                , o = 0;
            return e.Type === P.GroupTypes.Pur ? o = T.tcf2ActiveVendors.pur.get(t) : e.Type === P.GroupTypes.Ft ? o = T.tcf2ActiveVendors.ft.get(t) : e.Type === P.GroupTypes.Spl_Pur ? o = T.tcf2ActiveVendors.spl_pur.get(t) : e.Type === P.GroupTypes.Spl_Ft && (o = T.tcf2ActiveVendors.spl_ft.get(t)),
                o || 0
        }
        ,
        r.prototype.getActiveVendorCountForStack = function (e) {
            return T.tcf2ActiveVendors.stack.get(e) || 0
        }
        ,
        r.prototype.getVendorCountEl = function (e) {
            var t = "[VENDOR_NUMBER]";
            return A.PCVendorsCountText && -1 < A.PCVendorsCountText.indexOf(t) ? '<span class="ot-pur-vdr-count"> ' + A.PCVendorsCountText.replace(t, e.toString()) + " </span>" : ""
        }
        ,
        r.prototype.createHtmlForEachGroup = function (e) {
            var t = e.fm
                , o = e.fragment
                , n = e.categoryGroupTemplate
                , r = e.cookiePreferencesContainer
                , i = e.popupSubGrpContainer
                , s = e.subGrpContainer
                , e = A.Groups.filter(function (e) {
                    return e.Order
                })
                , a = 0 === r.el.children.length;
            A.PCTemplateUpgrade && (I.showVendorService ? V.setHtmlTemplate(t('#onetrust-pc-sdk div[role="alertdialog"]')) : V.removeVSUITemplate(t('#onetrust-pc-sdk div[role="alertdialog"]')));
            for (var l = 0, c = e; l < c.length; l++) {
                var d = c[l]
                    , p = d.GroupName
                    , u = d.CustomGroupId
                    , p = O.appendVendorCountElement(d, p)
                    , g = n.cloneNode(!0)
                    , h = "ot-group-id-" + u
                    , C = "ot-header-id-" + u
                    , y = "ot-desc-id-" + u
                    , f = "ot-status-id-" + u
                    , u = ((g = L(g).el).setAttribute("data-optanongroupid", u),
                        g.querySelector("input,button"))
                    , u = (u && (u.setAttribute("aria-controls", y),
                        u.setAttribute("aria-labelledby", C + " " + f)),
                        O.setParentGroupName(g, p, C, y),
                        O.setPopupData(d, g),
                        O.setParentGroupDescription(g, d, A, y, h))
                    , f = (m.isV2Template ? O.setToggle(g, u, d, h, C) : O.setToggleProps(g, u, d, h, C),
                        !!t("#onetrust-pc-sdk " + b.P_Category_Grp).querySelector(b.P_Category_Item))
                    , p = (p = r.el.querySelectorAll(b.P_Category_Item + ":not(.ot-vnd-item)"))[p.length - 1]
                    , y = (a ? r.append(g) : f ? Ot.insertAfter(g, p) : Ot.insertAfter(g, r.el.querySelector(b.P_Li_Hdr) || r.el.querySelector("h3")),
                        O.setSubGroupData(d, g, i, s),
                        A.PCGrpDescLinkPosition === ie.Top)
                    , h = (d.Type === P.GroupTypes.Stack && y && (u = g.querySelector(b.P_Sub_Grp_Cntr)),
                        y ? u : null);
                O.setVendorListBtn(g, t, o, d, h, A),
                    O.setHostListBtn(g, t, o, d),
                    O.setVendorServiceData(d, g),
                    I.dataGroupState.push(d)
            }
        }
        ,
        r.prototype.appendVendorCountElement = function (e, t) {
            var o, n, r = -1 < e.SubGroups.findIndex(function (e) {
                return e.IsIabPurpose
            });
            return T.isTcfV2Template && (e.IsIabPurpose || r) && (n = void 0,
                n = e.Type !== P.GroupTypes.Stack && e.Type !== P.GroupTypes.Bundle ? this.getActiveVendorCount(e) : (o = "",
                    o = !e.IsIabPurpose && r ? e.CustomGroupId : e.IabGrpId,
                    this.getActiveVendorCountForStack(o)),
                t += this.getVendorCountEl(n)),
                t
        }
        ,
        r.prototype.setPopupData = function (e, t) {
            T.pcName === st && (e.ShowVendorList && T.isIab2orv2Template ? (S.removeChild(t.querySelector("p:not(.ot-always-active)")),
                S.removeChild(t.querySelector(b.P_Acc_Txt + ":not(" + b.P_Acc_Container + ")")),
                e.SubGroups.length || m.isV2Template || S.removeChild(t.querySelector(b.P_Sub_Grp_Cntr))) : S.removeChild(t.querySelector(b.P_Acc_Container)))
        }
        ,
        r.prototype.setVendorServiceData = function (e, t) {
            var o, n = T.pcName;
            I.showVendorService && A.VendorServiceConfig.PCVSCategoryView && (o = b.P_Acc_Txt,
                n === g && (o = b.P_Desc_Container),
                n = t.querySelector(o),
                A.PCAccordionStyle === ce.NoAccordion && (n = t),
                V.insertVendorServiceHtml(e, n))
        }
        ,
        r.prototype.jsonAddAboutCookies = function (e) {
            var t = {};
            return t.GroupName = e.AboutCookiesText,
                t.GroupDescription = e.MainInfoText,
                t.ShowInPopup = !0,
                t.Order = 0,
                t.IsAboutGroup = !0,
                t
        }
        ,
        r.prototype.setVendorListBtn = function (e, t, o, n, r, i) {
            var s, a, l = T.pcName;
            n.ShowVendorList ? (s = a = void 0,
                m.isV2Template ? a = (s = _.vListEl.cloneNode(!0)).querySelector(".category-vendors-list-handler") : s = (a = e.querySelector(".category-vendors-list-handler")).parentElement,
                a.innerHTML = i.VendorListText + "&#x200E;",
                a.setAttribute(this._ariaLabel, A.PCOpensVendorDetailsAlert),
                a.setAttribute("data-parent-id", n.CustomGroupId),
                O.setIABLegalLink(a, n, i),
                m.isV2Template && (a = e,
                    l === g ? a = e.querySelector("" + b.P_Desc_Container) : i.PCenterEnableAccordion && (a = e.querySelector(b.P_Acc_Txt)),
                    a.insertAdjacentElement("beforeend", s)),
                r && r.insertAdjacentElement("beforebegin", s)) : m.isV2Template || (l !== it && l !== nt || i.PCenterEnableAccordion ? (l === st || l === it || l === nt && i.PCenterEnableAccordion) && (n = t("#vendor-list-container"),
                    a = e.querySelector(b.P_Acc_Txt),
                    n && o.querySelector("" + b.P_Content).removeChild(n),
                    m.isV2Template || L(a).el.removeChild(a.querySelector(b.P_Ven_Lst_Cntr))) : S.removeChild(e.querySelector(b.P_Ven_Lst_Cntr)),
                    l !== g && l !== rt) || (r = e.querySelector(b.P_Ven_Lst_Cntr)) && r.parentElement.removeChild(r)
        }
        ,
        r.prototype.setIABLegalLink = function (e, t, o) {
            T.isTcfV2Template ? qn.addIllustrationsLink(e, t, t.ShowVendorList) : o.PCGrpDescType === re.UserFriendly && (e.insertAdjacentHTML("afterend", "<span class='ot-ext-lnk'></span>"),
                e.insertAdjacentHTML("afterend", "<a href='" + A.IabLegalTextUrl + "?lang=" + I.consentLanguage + "' rel=\"noopener\" target='_blank'>&nbsp;|&nbsp;" + o.PCVendorFullLegalText + '&nbsp;<span class="ot-scrn-rdr">' + A.NewWinTxt + "</span></a>"))
        }
        ,
        r.prototype.setHostListBtn = function (e, t, o, n) {
            var r, i = T.pcName, s = !1, a = (A.showCookieList && (s = -1 < S.findIndex(q(n.SubGroups, [n]), function (e) {
                return -1 === mt.indexOf(e.Type) && e.FirstPartyCookies.length
            })),
                I.showGeneralVendors && n.GeneralVendorsIds && n.GeneralVendorsIds.length);
            !I.showVendorService && (A.showCookieList || I.showGeneralVendors) && (n.ShowHostList || s || a) ? (s = void 0,
                m.isV2Template ? (s = (a = _.cListEl.cloneNode(!0)).querySelector(".category-host-list-handler"),
                    r = e,
                    i === g ? r = e.querySelector("" + b.P_Desc_Container) : A.PCenterEnableAccordion && (r = e.querySelector(b.P_Acc_Txt)),
                    r.insertAdjacentElement("beforeend", a)) : s = e.querySelector(".category-host-list-handler"),
                O.setcListHandler(s, n)) : O.setHostListVendorList(t, o, e)
        }
        ,
        r.prototype.setcListHandler = function (e, t) {
            var o, n;
            e && (o = (n = O.setcListHeaderTitleAndScreenReader())[0],
                n = n[1],
                e.innerHTML = o + "&#x200E;",
                e.setAttribute(this._ariaLabel, n),
                e.setAttribute("data-parent-id", t.CustomGroupId))
        }
        ,
        r.prototype.setcListHeaderTitleAndScreenReader = function () {
            var e, t = I.showTrackingTech ? (e = A.AdditionalTechnologiesConfig.PCTechDetailsText,
                A.AdditionalTechnologiesConfig.PCTechDetailsAriaLabel) : I.showGeneralVendors ? (e = A.GroupGenVenListLabel,
                    A.PCenterVendorListScreenReader) : (e = A.ThirdPartyCookieListText,
                        A.PCOpensCookiesDetailsAlert);
            return [e, t]
        }
        ,
        r.prototype.setHostListVendorList = function (e, t, o) {
            var n;
            T.pcName === st ? (e = e("#vendor-list-container"),
                n = o.querySelector(b.P_Acc_Txt),
                e && t.querySelector("" + b.P_Content).removeChild(e),
                n.querySelector(b.P_Host_Lst_cntr) && L(n).el.removeChild(n.querySelector(b.P_Host_Lst_cntr))) : (t = o.querySelector(b.P_Host_Lst_cntr)) && t.parentElement.removeChild(t)
        }
        ,
        r.prototype.setSubGroupData = function (e, t, o, n) {
            var r;
            0 < e.SubGroups.length && e.ShowSubgroup && (r = T.pcName === st && e.ShowVendorList && T.isIab2orv2Template && !A.PCTemplateUpgrade,
                O.setSubGrps(e, r ? o : n, t, A))
        }
        ,
        r.prototype.setSubGrps = function (t, o, n, r) {
            var e;
            T.pcName === st && t.ShowVendorList && T.isIab2orv2Template && !A.PCTemplateUpgrade && (e = n.querySelector(b.P_Sub_Grp_Cntr)).parentElement.removeChild(e),
                t.SubGroups.forEach(function (e) {
                    O.setSubGroups({
                        group: t,
                        subgroup: e,
                        grpEl: n,
                        subGrpEl: o,
                        json: r
                    })
                })
        }
        ,
        r.prototype.setSubGroups = function (e) {
            var t, o = e.group, n = e.subgroup, r = e.grpEl, i = e.subGrpEl, e = e.json, s = T.pcName, a = O.getRemoveConsentToggle(n), i = (m.isV2Template ? i : i.el).cloneNode(!0), l = i.querySelector(b.P_Subgp_ul), c = i.querySelector(b.P_Subgrp_li).cloneNode(!0), d = n.CustomGroupId, p = "ot-sub-group-id-" + d, u = f.getGrpStatus(n).toLowerCase(), g = c.querySelector(".cookie-subgroup>h4, .cookie-subgroup>h5, .cookie-subgroup>h6, .ot-subgrp>h4, .ot-subgrp>h5, .ot-subgrp>h6"), h = c.querySelector(b.P_Tgl_Cntr), d = (c.setAttribute("data-optanongroupid", d),
                m.isV2Template ? ((t = O.getInputEle()).querySelector("input").setAttribute("data-optanongroupid", d),
                    t.querySelector("input").classList.add("cookie-subgroup-handler"),
                    t = t.cloneNode(!0),
                    h.insertAdjacentElement("beforeend", t)) : (t = c.querySelector(".ot-toggle")).querySelector("input").setAttribute("data-optanongroupid", d),
                L(i.querySelector(b.P_Subgp_ul)).html(""),
                O.addSubgroupName(n, g),
                O.setDataIfVendorServiceEnabled(g, c, t),
                t.querySelector("input").setAttribute("id", p),
                t.querySelector("input").setAttribute(this._ariaLabel, n.GroupName),
                t.querySelector("label").setAttribute("for", p),
                O.setSubGroupDescription({
                    json: e,
                    group: o,
                    subgroup: n,
                    subGroupClone: c
                }),
                T.isTcfV2Template && qn.addIllustrationsLink(c, n, o.ShowVendorList, !0),
                q(kt, vt));
            o.ShowSubgroupToggle && -1 < d.indexOf(n.Type) ? O.setSubGroupToggle({
                id: p,
                subGroupClone: c,
                group: o,
                subgroup: n,
                toggleGroup: h
            }) : u === C.ALWAYS_ACTIVE && (o.ShowSubgroupToggle || -1 === St.indexOf(n.Type)) || (a = !0),
                O.setSubGroupsProperties({
                    removeConsentToggle: a,
                    subGroupToggle: t,
                    subGroupClone: c,
                    status: u,
                    subgroup: n,
                    grpEl: r,
                    pcName: s,
                    json: e,
                    subGrpElClone: i,
                    ulParentContainerEle: l
                })
        }
        ,
        r.prototype.getRemoveConsentToggle = function (e) {
            var t = !1;
            return t = T.isIab2orv2Template && e.Type === P.GroupTypes.Pur && !e.HasConsentOptOut ? !0 : t
        }
        ,
        r.prototype.addSubgroupName = function (e, t) {
            var o = e.GroupName;
            T.isTcfV2Template && e.IsIabPurpose && (e = this.getActiveVendorCount(e),
                o += this.getVendorCountEl(e)),
                L(t).html(o)
        }
        ,
        r.prototype.setDataIfVendorServiceEnabled = function (e, t, o) {
            var n;
            I.showVendorService && ((n = document.createElement("div")).classList.add("ot-acc-hdr"),
                e.classList.add("ot-cat-header"),
                n.appendChild(e),
                e = "afterbegin",
                A.PCCategoryStyle === ke.Toggle && (e = "beforeend"),
                n.insertAdjacentElement(e, o),
                t.removeChild(t.querySelector(b.P_Subgrp_Tgl_Cntr)),
                t.insertAdjacentElement("afterbegin", n))
        }
        ,
        r.prototype.setSubGroupDescription = function (e) {
            var t, o = e.json, n = e.group, r = e.subgroup, e = e.subGroupClone, i = T.pcName, s = o.PCGrpDescType === re.Legal, i = i === st && n.ShowVendorList && T.isIab2orv2Template, a = L(e.querySelector(b.P_Subgrp_Desc));
            i ? (t = r.DescriptionLegal && s ? r.DescriptionLegal : r.GroupDescription,
                a.html(t)) : (t = E.safeFormattedGroupDescription(r),
                    i = !1,
                    -1 < bt.indexOf(r.Type) && s && (i = !0,
                        t = r.DescriptionLegal),
                    o.PCenterEnableAccordion && i || (a = L(e.querySelector("p"))),
                    n.ShowSubGroupDescription ? a.html(t) : a.html(""))
        }
        ,
        r.prototype.setSubGroupToggle = function (e) {
            var t = e.id
                , o = e.subGroupClone
                , n = e.group
                , r = e.subgroup
                , e = e.toggleGroup
                , i = E.isGroupActive(r)
                , n = (O.setSubGroupActive({
                    group: n,
                    subgroup: r,
                    subGroupClone: o
                }, i),
                    e.querySelector(".ot-label-status"));
            A.PCShowConsentLabels ? n.innerHTML = i ? A.PCActiveText : A.PCInactiveText : S.removeChild(n),
                T.legIntSettings.PAllowLI && r.Type === P.GroupTypes.Pur && r.HasLegIntOptOut && (T.legIntSettings.PShowLegIntBtn ? O.setLegIntButton(o, r) : (i = e.cloneNode(!0),
                    e.insertAdjacentElement("afterend", i),
                    n = i.querySelector(".ot-label-status"),
                    (o = i.querySelector("input")).setAttribute("id", t + "-leg-out"),
                    i.querySelector("label").setAttribute("for", t + "-leg-out"),
                    r.IsLegIntToggle = !0,
                    e = E.isGroupActive(r),
                    A.PCShowConsentLabels ? n.innerHTML = e ? A.PCActiveText : A.PCInactiveText : S.removeChild(n),
                    S.setCheckedAttribute(null, o, e),
                    r.IsLegIntToggle = !1))
        }
        ,
        r.prototype.setSubGroupActive = function (e, t) {
            var o;
            t && (t = e.group,
                o = e.subgroup,
                e = e.subGroupClone,
                t = f.getGrpStatus(t).toLowerCase(),
                e.querySelector("input").setAttribute("checked", ""),
                t === C.ALWAYS_ACTIVE) && -1 === bt.indexOf(o.Type) && (e.querySelector("input").disabled = !0,
                    e.querySelector("input").setAttribute("disabled", "true"))
        }
        ,
        r.prototype.setSubGroupsProperties = function (e) {
            var t = e.removeConsentToggle
                , o = e.subGroupToggle
                , n = e.subGroupClone
                , r = e.status
                , i = e.subgroup
                , s = e.grpEl
                , a = e.pcName
                , l = e.json
                , c = e.subGrpElClone
                , e = e.ulParentContainerEle;
            t && (o.classList.add("ot-hide-tgl"),
                o.querySelector("input").setAttribute(this._ariaHidden, "true")),
                r !== C.ALWAYS_ACTIVE && r !== C.ALWAYS_INACTIVE || t || (o && o.parentElement.removeChild(o),
                    (t = n.querySelector(b.P_Tgl_Cntr)) && t.classList.add("ot-always-active-subgroup"),
                    O.setAlwaysActive(n, !0, r === C.ALWAYS_INACTIVE)),
                "COOKIE" === i.Type && -1 !== i.Parent.indexOf("STACK") && d(c, "display: none;"),
                L(e).append(n),
                m.isV2Template ? (o = s,
                    "otPcTab" === a ? o = s.querySelector("" + b.P_Desc_Container) : l.PCenterEnableAccordion && (o = s.querySelector(b.P_Acc_Txt)),
                    o.insertAdjacentElement("beforeend", c)) : (t = s.querySelector(b.P_Category_Item + " " + b.P_Ven_Lst_Cntr)) && t.insertAdjacentElement("beforebegin", c),
                I.showVendorService && A.VendorServiceConfig.PCVSCategoryView && V.insertVendorServiceHtml(i, e)
        }
        ,
        r.prototype.getInputEleForCategory = function (e) {
            return I.showVendorService && A.PCCategoryStyle === ke.Checkbox && e.classList.add("ot-checkbox-consent"),
                O.getInputEle()
        }
        ,
        r.prototype.getInputEle = function () {
            return !T.isIab2orv2Template && A.PCTemplateUpgrade ? Bn() : _.toggleEl.cloneNode(!0)
        }
        ,
        r.prototype.setToggle = function (e, t, o, n, r) {
            var i = O.getInputEleForCategory(e)
                , s = (i.querySelector("input").classList.add("category-switch-handler"),
                    i.querySelector("input"))
                , a = e.querySelector(b.P_Category_Header)
                , l = E.isGroupActive(o)
                , c = [C.ALWAYS_ACTIVE, C.ALWAYS_INACTIVE].includes(f.getGrpStatus(o).toLowerCase())
                , d = o.OptanonGroupId.toString()
                , p = P.GroupTypes
                , u = !0;
            !T.isIab2orv2Template || o.Type !== p.Pur && o.Type !== p.Stack || o.HasConsentOptOut || (u = !1),
                L(i.querySelector("label")).attr("for", n),
                L(i.querySelector(".ot-label-txt")).html(o.GroupName),
                L(i.querySelector(".ot-switch-nob")).attr("aria-label", o.GroupName);
            T.legIntSettings.PAllowLI && o.Type === p.Pur && o.HasLegIntOptOut && (T.legIntSettings.PShowLegIntBtn ? O.setLegIntButton(e, o, !0, t) : (p = i.cloneNode(!0),
                o.IsLegIntToggle = !0,
                t = E.isGroupActive(o),
                g = p.querySelector(".ot-label-status"),
                A.PCShowConsentLabels ? g.innerHTML = t ? A.PCActiveText : A.PCInactiveText : S.removeChild(g),
                o.IsLegIntToggle = !1,
                E.setInputID(p.querySelector("input"), n + "-leg-out", d, t, r),
                L(p.querySelector("label")).attr("for", n + "-leg-out"),
                a.insertAdjacentElement("afterend", p)));
            var g = i.querySelector(".ot-label-status")
                , d = (A.PCShowConsentLabels ? g.innerHTML = l ? A.PCActiveText : A.PCInactiveText : S.removeChild(g),
                    A.PCCategoryStyle === ke.Toggle);
            this.hideToggleContainer(c, u, d, i),
                u && this.setAlwaysActiveOrToggleInput(o, e, i, s, n, r),
                O.setNoAccordionHeader(e, c),
                L(i.querySelector(".ot-switch-nob")).attr("aria-checked", s.checked)
        }
        ,
        r.prototype.setNoAccordionHeader = function (e, t) {
            var o, n, r, i;
            !T.isIab2orv2Template && A.PCTemplateUpgrade && (o = A.PCCategoryStyle === ke.Checkbox,
                A.PCAccordionStyle === ce.NoAccordion) && o && ((o = document.createElement("div")).classList.add("ot-acc-hdr"),
                    n = e.querySelector(".ot-chkbox"),
                    r = e.querySelector(".ot-always-active"),
                    i = e.querySelector(b.P_Category_Header),
                    n && o.appendChild(n),
                    o.appendChild(i),
                    t && o.appendChild(r),
                    e.insertBefore(o, e.firstChild))
        }
        ,
        r.prototype.hideToggleContainer = function (e, t, o, n) {
            !e && t || !o || (n.classList.add("ot-hide-tgl"),
                n.querySelector("input").setAttribute(this._ariaHidden, "true"))
        }
        ,
        r.prototype.setAlwaysActiveOrToggleInput = function (e, t, o, n, r, i) {
            var s = "always active" === f.getGrpStatus(e).toLowerCase()
                , a = "always inactive" === f.getGrpStatus(e).toLowerCase()
                , l = A.PCCategoryStyle === ke.Toggle
                , c = e.OptanonGroupId.toString()
                , e = E.isGroupActive(e)
                , d = t.querySelector(b.P_Category_Header);
            !T.isIab2orv2Template && A.PCTemplateUpgrade ? ((s || a) && A.PCShowAlwaysActiveToggle && (O.setAlwaysActive(t, !1, a),
                o.querySelector("input").setAttribute("disabled", "true")),
                s && l || O.insertAccordionInputHeader(d, o),
                E.setInputID(n, r, c, e, i),
                O.insertAccordionPointer(t, d)) : (O.insertAccordionPointer(t, d),
                    s || a ? A.PCShowAlwaysActiveToggle && O.setAlwaysActive(t, !1, a) : (O.insertAccordionInputHeader(d, o),
                        E.setInputID(n, r, c, e, i)))
        }
        ,
        r.prototype.setOptOutSignalVisibility = function (e) {
            var t = T.gpcEnabled && T.gpcForAGrpEnabled
                , o = p.isAlertBoxClosedAndValid() && E.isAnyGroupOptedOut();
            A.PCShowOptOutSignal && (t || o || T.previewMode) ? e.classList.remove("ot-hide") : e.classList.add("ot-hide")
        }
        ,
        r.prototype.setOptOutSignalNotification = function (e) {
            e = y.createOptOutSignalElement(e, !0);
            O.setOptOutSignalVisibility(e)
        }
        ,
        r.prototype.insertAccordionInputHeader = function (e, t) {
            var o = O.getPositionForInputEle();
            e.insertAdjacentElement(o, t)
        }
        ,
        r.prototype.getPositionForInputEle = function () {
            var e = "beforebegin";
            return e = !T.isIab2orv2Template && A.PCTemplateUpgrade && A.PCCategoryStyle !== ke.Toggle ? e : "afterend"
        }
        ,
        r.prototype.insertAccordionPointer = function (e, t) {
            var o, n;
            e.classList.add("ot-vs-config"),
                A.PCenterEnableAccordion && (!T.isIab2orv2Template && A.PCTemplateUpgrade ? (e = e.querySelector(b.P_Acc_Header),
                    o = n = void 0,
                    n = (A.PCAccordionStyle === ce.Caret ? (o = "beforeend",
                        _.arrowEl) : (o = A.PCCategoryStyle === ke.Checkbox ? "beforeend" : "afterbegin",
                            _.plusMinusEl)).cloneNode(!0),
                    e.insertAdjacentElement(o, n)) : A.PCAccordionStyle === ce.Caret ? t.insertAdjacentElement("afterend", _.arrowEl.cloneNode(!0)) : t.insertAdjacentElement("beforebegin", _.plusMinusEl.cloneNode(!0)))
        }
        ,
        r.prototype.setToggleProps = function (e, t, o, n, r) {
            var i = e.querySelectorAll("input:not(.cookie-subgroup-handler)")
                , s = e.querySelectorAll("label")
                , a = E.isGroupActive(o)
                , l = o.CustomGroupId
                , c = e.querySelector(".label-text");
            c && L(c).html(o.GroupName);
            for (var d, p, u, g, h = 0; h < i.length; h++)
                s[h] && L(s[h]).attr("for", n),
                    2 <= i.length && 0 === h ? L(i[h]).attr("id", n + "-toggle") : (d = this.canShowConsentToggle(o),
                        this.canShowLegIntToggle(o) && (T.legIntSettings.PShowLegIntBtn ? O.setLegIntButton(e, o, !0, t) : (g = (p = e.querySelector(b.P_Tgl_Cntr + ":not(" + b.P_Subgrp_Tgl_Cntr + ")") || e.querySelector(".ot-toggle")).cloneNode(!0),
                            p.insertAdjacentElement("afterend", g),
                            p = g.querySelector("input"),
                            o.IsLegIntToggle = !0,
                            u = E.isGroupActive(o),
                            o.IsLegIntToggle = !1,
                            E.setInputID(p, n + "-leg-out", l, u, r),
                            L(g.querySelector("label")).attr("for", n + "-leg-out"),
                            S.removeChild(g.querySelector(b.P_Arrw_Cntr)))),
                        p = f.getGrpStatus(o).toLowerCase() === C.ALWAYS_ACTIVE,
                        u = f.getGrpStatus(o).toLowerCase() === C.ALWAYS_INACTIVE,
                        !p && d || (g = i[h].closest(".ot-toggle")) && (g.classList.add("ot-hide-tgl"),
                            g.querySelector("input").setAttribute(this._ariaHidden, !0)),
                        d && (p && O.setAlwaysActive(e, !1, u),
                            E.setInputID(i[h], n, l, a, r)))
        }
        ,
        r.prototype.canShowConsentToggle = function (e) {
            var t = !0
                , o = P.GroupTypes;
            return t = !T.isIab2orv2Template || e.Type !== o.Pur && e.Type !== o.Stack || e.HasConsentOptOut ? t : !1
        }
        ,
        r.prototype.canShowLegIntToggle = function (e) {
            var t = P.GroupTypes;
            return T.legIntSettings.PAllowLI && e.Type === t.Pur && e.HasLegIntOptOut
        }
        ,
        r.prototype.setAlwaysActive = function (e, t, o) {
            void 0 === t && (t = !1),
                void 0 === o && (o = !1);
            var n, r = T.pcName;
            r === st || r === g || t ? (r = e.querySelector(b.P_Tgl_Cntr)) && r.insertAdjacentElement("afterbegin", L("<div class='ot-always-active'>" + (o ? A.AlwaysInactiveText : A.AlwaysActiveText) + "</div>", "ce").el) : (r = "ot-status-id-" + (r = null == (n = r = (t = e.querySelector(b.P_Category_Header)).id) ? void 0 : n.split("-")[3]),
                !m.isV2Template && A.PCenterEnableAccordion && (r = "ot-status-id-" + (r = null == (n = r = (t = e.querySelector(b.P_Arrw_Cntr)).id) ? void 0 : n.split("-")[3])),
                L(t).el.insertAdjacentElement("afterend", L('<div id="' + r + "\" class='ot-always-active'>" + (o ? A.AlwaysInactiveText : A.AlwaysActiveText) + "</div>", "ce").el)),
                A.PCenterEnableAccordion ? (n = e.querySelector(b.P_Acc_Header)) && n.classList.add("ot-always-active-group") : ((t = e.querySelector("" + b.P_Desc_Container)) && t.classList.add("ot-always-active-group"),
                    e.classList.add("ot-always-active-group"))
        }
        ,
        r.prototype.setPcTabLayout = function (e, t, o) {
            var n = e(".ot-tab-desc");
            "otPcTab" === T.pcName && (o && e("#onetrust-pc-sdk " + b.P_Category_Grp).insertAdjacentElement("afterbegin", o),
                n && 640 < window.innerWidth && L(n).append(t.querySelectorAll("#onetrust-pc-sdk " + b.P_Desc_Container)),
                A.IsIabEnabled ? e(b.P_Desc_Container + " .category-vendors-list-handler").innerHTML = A.VendorListText + "&#x200E;" : (o = e(b.P_Desc_Container + " .category-vendors-list-handler")) && o.parentElement.removeChild(o))
        }
        ,
        r.prototype.setVendorListClass = function (e, t) {
            m.isV2Template ? A.PCAccordionStyle === ce.Caret && (L(e("#onetrust-pc-sdk " + b.P_Vendor_List)).addClass("ot-enbl-chr"),
                A.PCenterEnableAccordion) && L(e("#onetrust-pc-sdk " + b.P_Content)).addClass("ot-enbl-chr") : L(t.querySelector(b.P_Sub_Grp_Cntr)).remove()
        }
        ,
        r.prototype.setPCHeader = function (e, t) {
            var o = T.pcName
                , n = e(b.P_Li_Hdr) || t.querySelector(b.P_Li_Hdr);
            T.legIntSettings.PAllowLI && T.grpContainLegalOptOut && T.isIab2orv2Template && !T.legIntSettings.PShowLegIntBtn ? (n.querySelector("span:first-child").innerText = A.ConsentText,
                n.querySelector("span:last-child").innerText = A.LegitInterestText,
                m.isV2Template && (n.querySelector("span:first-child").innerText = A.PCenterConsentText,
                    n.querySelector("span:last-child").innerText = A.PCenterLegIntColumnHeader),
                A.PCenterEnableAccordion && n ? n.classList.add("ot-leg-border-color") : "otPcList" === o && t.insertAdjacentElement("afterbegin", n)) : (S.removeChild(e("#onetrust-pc-sdk " + b.P_Li_Hdr)),
                    S.removeChild(t.querySelector(b.P_Li_Hdr)))
        }
        ;
    var O, zn = r;
    function r() {
        this._ariaHidden = "aria-hidden",
            this._ariaLabel = "aria-label"
    }
    Yn.prototype.showBanner = function () {
        var e = T.bannerName
            , t = L(this.El);
        I.skipAddingHTML && "none" === getComputedStyle(t.el[0]).getPropertyValue("display") && e !== Qe && e !== Xe && e !== et ? t.css("display: block;") : A.BAnimation === Se.SlideIn ? this.slideInAnimation(t, e) : A.BAnimation === Se.FadeIn && t.addClass("ot-fade-in")
    }
        ,
        Yn.prototype.insertAlertHtml = function () {
            A.IsGPPEnabled && Kr.setCmpDisplayStatus("visible");
            function e(e) {
                return t.querySelector(e)
            }
            var t = document.createDocumentFragment()
                , o = document.createElement("div")
                , o = (L(o).html(w.bannerGroup.html),
                    o.querySelector("#onetrust-banner-sdk"));
            this.setAriaModalForBanner(o),
                m.fp.CookieV2SSR ? (L(t).append(o),
                    this.setBannerLinkAttributes(e),
                    this._rejectBtn = e("#onetrust-reject-all-handler"),
                    this._acceptBtn = e("#onetrust-accept-btn-handler")) : this.insertHtmlForNonSSRFlow(o, t, e, function (e) {
                        return t.querySelectorAll(e)
                    }),
                this.ssrAndNonSSRCommonHtml(t)
        }
        ,
        Yn.prototype.insertHtmlForNonSSRFlow = function (e, t, o, n) {
            var r, i, s = T.bannerName;
            w.bannerGroup && (A.BannerRelativeFontSizesToggle && L(e).addClass("otRelFont"),
                (A.BInitialFocus || A.BInitialFocusLinkAndButton) && (e.setAttribute("tabindex", "0"),
                    e.setAttribute("role", "main")),
                A.useRTL && L(e).attr("dir", "rtl"),
                T.isIab2orv2Template && A.BannerDPDDescription.length && L(e).addClass("ot-iab-2"),
                (r = A.BannerPosition) && ("bottom-left" === r ? L(e).addClass("ot-bottom-left") : "bottom-right" === r ? L(e).addClass("ot-bottom-right") : L(e).addClass(r)),
                L(t).append(e),
                this.setBannerData(o),
                r = this.setIAB2HtmlData(o),
                this.setAcceptAndRejectBtnHtml(o),
                t = this.htmlForBannerButtons(e, o, n),
                n = A.showBannerCloseButton,
                i = A.BCloseButtonType === be.Link,
                this.setWidthForFlatBanner(o, r, t),
                n && s === $e && T.isIab2orv2Template && !i && ((t = o(".banner-close-btn-container")).parentElement.removeChild(t),
                    L(e).el.insertAdjacentElement("beforeEnd", t),
                    L(o("#onetrust-banner-sdk .ot-sdk-container")).addClass("ot-top-cntr")),
                this.setBannerOptions(o, r),
                this.setBannerLogo(e, o))
        }
        ,
        Yn.prototype.setBannerOptions = function (e, t) {
            var o = this
                , n = T.bannerName
                , r = this.isCmpEnabled()
                , i = [{
                    type: "purpose",
                    titleKey: "BannerPurposeTitle",
                    descriptionKey: "BannerPurposeDescription",
                    identifier: "purpose-option"
                }, {
                    type: "feature",
                    titleKey: "BannerFeatureTitle",
                    descriptionKey: "BannerFeatureDescription",
                    identifier: "feature-option"
                }, {
                    type: "information",
                    titleKey: "BannerInformationTitle",
                    descriptionKey: "BannerInformationDescription",
                    identifier: "information-option"
                }]
                , s = L(e(this._bannerOptionsSelector)).el;
            r ? (n === Ze ? this.setFloatingRoundedIconBannerCmpOptions(e, i) : (this.setCmpBannerOptions(e, i),
                n === tt && t.el.insertAdjacentElement("beforeend", s)),
                L(window).on("resize", function () {
                    window.innerWidth <= 896 && o.setBannerOptionContent()
                })) : (T.bannerName === $e && (s = L(e(".banner-options-card")).el),
                    S.removeChild(s))
        }
        ,
        Yn.prototype.setWidthForFlatBanner = function (e, t, o) {
            var n = T.bannerName
                , r = A.showBannerCloseButton
                , i = this.hasNoActionButtons();
            n === Xe && (T.isIab2orv2Template && (t.removeClass("ot-sdk-eight"),
                A.showBannerAcceptButton && o.insertAdjacentElement("afterbegin", this._acceptBtn),
                A.showBannerCookieSettings) && o.insertAdjacentElement("beforeend", e("#onetrust-pc-btn-handler")),
                r && !i && T.isIab2orv2Template ? t.addClass("ot-sdk-nine") : r && i ? t.addClass("ot-sdk-eleven") : !r && i ? t.addClass("ot-sdk-twelve") : r || i || !T.isIab2orv2Template || (t.addClass("ot-sdk-ten"),
                    L(e(this._btnGrpParentSelector)).addClass("ot-sdk-two"),
                    L(e(this._btnGrpParentSelector)).removeClass("ot-sdk-three")))
        }
        ,
        Yn.prototype.hasNoActionButtons = function () {
            return !A.showBannerAcceptButton && !A.showBannerCookieSettings && !A.BannerShowRejectAllButton
        }
        ,
        Yn.prototype.htmlForBannerButtons = function (e, t, o) {
            var n = T.bannerName
                , r = (this.hasNoActionButtons() && t(this._btnGrpParentSelector).parentElement.removeChild(t(this._btnGrpParentSelector)),
                    A.showBannerCloseButton)
                , i = L(o(".banner-close-button")).el
                , s = t("#onetrust-button-group")
                , a = A.BCloseButtonType === be.Link;
            if (r)
                for (l = 0; l < i.length; l++)
                    a ? (L(i[l]).html(A.BContinueText),
                        L(e).addClass("ot-close-btn-link"),
                        L(i[l]).addClass("ot-close-link"),
                        L(i[l]).removeClass("onetrust-close-btn-ui"),
                        L(i[l]).removeClass("ot-close-icon"),
                        n !== $e && n !== Ze || (s.insertAdjacentElement("afterbegin", t(".onetrust-close-btn-handler").parentElement),
                            L(i[l]).attr("tabindex", "1"))) : (y.setCloseIcon(t("#onetrust-banner-sdk .ot-close-icon")),
                                L(i[l]).el.setAttribute(ht, A.BannerCloseButtonText || "Close Cookie Banner"));
            else {
                for (var l = 0; l < i.length; l++)
                    L(i[l].parentElement).el.removeChild(i[l]);
                n !== Xe && n !== Ze || S.removeChild(t("#onetrust-close-btn-container-mobile"))
            }
            return s
        }
        ,
        Yn.prototype.setAcceptAndRejectBtnHtml = function (e) {
            var t = T.bannerName
                , e = (A.showBannerAcceptButton ? (this._acceptBtn = e("#onetrust-accept-btn-handler"),
                    L(this._acceptBtn).html(A.AlertAllowCookiesText),
                    t !== et || A.showBannerCookieSettings || A.BannerShowRejectAllButton || L(this._acceptBtn.parentElement).addClass("accept-btn-only")) : S.removeChild(e("#onetrust-accept-btn-handler")),
                    A.BannerShowRejectAllButton && A.BannerRejectAllButtonText.trim() ? (this._rejectBtn = e("#onetrust-reject-all-handler"),
                        L(this._rejectBtn).html(A.BannerRejectAllButtonText),
                        e(this._btnGrpParentSelector).classList.add("has-reject-all-button")) : (S.removeChild(e("#onetrust-reject-all-handler")),
                            S.removeChild(e("#onetrust-reject-btn-container"))),
                    L(e("#onetrust-pc-btn-handler")));
            A.showBannerCookieSettings ? (e.html(A.AlertMoreInfoText),
                A.BannerSettingsButtonDisplayLink && e.addClass("cookie-setting-link"),
                t !== et || A.showBannerAcceptButton || e.addClass("cookie-settings-btn-only")) : S.removeChild(e.el)
        }
        ,
        Yn.prototype.setIAB2HtmlData = function (e) {
            var t = T.bannerName
                , o = (T.isIab2orv2Template && A.BannerDPDDescription.length && t !== tt ? (L(e(".ot-dpd-container .ot-dpd-title")).html(A.BannerDPDTitle),
                    L(e(".ot-dpd-container .ot-dpd-desc")).html(A.BannerDPDDescription.join(",&nbsp;"))) : S.removeChild(e(".ot-dpd-container")),
                    L(e(this._otGrpContainerSelector)))
                , t = (T.isIab2orv2Template && A.BannerAdditionalDescription.trim() && this.setAdditionalDesc(e),
                    T.isIab2orv2Template && A.BannerDPDDescription.length ? t !== tt ? L(e(".ot-dpd-container .ot-dpd-desc")) : o : L(e(Kn.POLICY_TEXT_SELECTOR)));
            return A.IsIabEnabled && A.BannerIABPartnersLink && t.append('<button class="ot-link-btn onetrust-vendors-list-handler">\n        ' + A.BannerIABPartnersLink + "\n        </button>"),
                o
        }
        ,
        Yn.prototype.setBannerData = function (e) {
            var t;
            A.BannerTitle ? (L(e("#onetrust-policy-title")).html(A.BannerTitle),
                L(e('[role="alertdialog"]')).attr(ht, A.BannerTitle)) : (S.removeChild(e("#onetrust-policy-title")),
                    L(e("#onetrust-banner-sdk")).addClass("ot-wo-title"),
                    L(e('[role="alertdialog"]')).attr(ht, A.AriaPrivacy)),
                !A.IsIabEnabled && I.showGeneralVendors && A.BannerNonIABVendorListText && ((t = document.createElement("div")).setAttribute("id", "ot-gv-link-ctnr"),
                    L(t).html('<button class="ot-link-btn ot-gv-list-handler">' + A.BannerNonIABVendorListText + "</button>"),
                    L(e("#onetrust-policy")).el.appendChild(t)),
                L(e(Kn.POLICY_TEXT_SELECTOR)).html(A.AlertNoticeText),
                this.setBannerLinkAttributes(e)
        }
        ,
        Yn.prototype.setBannerLinkAttributes = function (e) {
            var t;
            L(e(this.cookiePolicyLinkSelector)).length && (A.BShowPolicyLink && A.BShowImprintLink ? ((t = L(e(Kn.POLICY_TEXT_SELECTOR + " a:first-of-type"))).attr(ht, A.BCookiePolicyLinkScreenReader),
                t.attr("rel", "noopener"),
                t.attr("target", "_blank"),
                (t = L(e(Kn.POLICY_TEXT_SELECTOR + " a:nth-of-type(2)"))).attr(ht, A.BImprintLinkScreenReader),
                t.attr("rel", "noopener"),
                t) : (t = L(e(this.cookiePolicyLinkSelector)),
                    A.BShowPolicyLink ? t.attr(ht, A.BCookiePolicyLinkScreenReader) : A.BShowImprintLink && t.attr(ht, A.BImprintLinkScreenReader),
                    t.attr("rel", "noopener"),
                    t)).attr("target", "_blank")
        }
        ,
        Yn.prototype.isCmpEnabled = function () {
            return A.BannerPurposeTitle || A.BannerPurposeDescription || A.BannerFeatureTitle || A.BannerFeatureDescription || A.BannerInformationTitle || A.BannerInformationDescription
        }
        ,
        Yn.prototype.ssrAndNonSSRCommonHtml = function (t) {
            function e(e) {
                return t.querySelector(e)
            }
            var o, n = this, r = this.isCmpEnabled(), i = (this.setOptOutSignalNotification(e),
                "[VENDOR_NUMBER]"), s = L(e(Kn.POLICY_TEXT_SELECTOR)).html(), i = (T.isIab2orv2Template && -1 < s.indexOf(i) && (o = '<span class="ot-tcf2-vendor-count ot-text-bold">' + T.tcf2ActiveVendors.all.toString() + "</span>",
                    s = y.replaceTextFromString(i, s, o),
                    L(e(Kn.POLICY_TEXT_SELECTOR)).html(s)),
                    A.BRegionAriaLabel && (L(e("#onetrust-banner-sdk")).attr("role", "region"),
                        L(e("#onetrust-banner-sdk")).attr(ht, A.BRegionAriaLabel)),
                    T.bannerName === tt && m.moduleInitializer.IsSuppressPC && (I.dataGroupState = A.Groups.filter(function (e) {
                        return e.Order
                    })),
                    T.bannerName === tt && (this._fourBtns = A.BannerShowRejectAllButton && A.showBannerAcceptButton && A.showBannerCookieSettings && A.BShowSaveBtn,
                        this._saveBtn = e(".ot-bnr-save-handler"),
                        this._settingsBtn = e("#onetrust-pc-btn-handler"),
                        this._btnsCntr = e(".banner-actions-container"),
                        A.BShowSaveBtn ? L(this._saveBtn).html(A.BSaveBtnTxt) : (S.removeChild(this._saveBtn),
                            this._saveBtn = null),
                        y.insertFooterLogo(t.querySelectorAll(".ot-bnr-footer-logo a")),
                        this._descriptCntr = e(".ot-cat-lst"),
                        this.setBannerBtn(),
                        window.addEventListener("resize", function () {
                            n.setBannerBtn()
                        }),
                        this._fourBtns && L(e("#onetrust-banner-sdk")).addClass("has-reject-all-button"),
                        this.insertGrps(e)),
                    document.createElement("div"));
            L(i).append(t),
                T.ignoreInjectingHtmlCss || (L("#onetrust-consent-sdk").append(i.firstChild),
                    r && this.setBannerOptionContent()),
                this.setBnrBtnGrpAlignment()
        }
        ,
        Yn.prototype.setAriaModalForBanner = function (e) {
            A.ForceConsent && e.querySelector('[role="alertdialog"]').setAttribute("aria-modal", "true")
        }
        ,
        Yn.prototype.setBnrBtnGrpAlignment = function () {
            var e = L(this._otGrpContainerSelector).el
                , t = L(this._btnGrpParentSelector).el
                , e = ((e.length && e[0].clientHeight) < (t.length && t[0].clientHeight) ? L("#onetrust-banner-sdk").removeClass("vertical-align-content") : L("#onetrust-banner-sdk").addClass("vertical-align-content"),
                    document.querySelector("#onetrust-button-group-parent button:first-of-type"))
                , t = document.querySelector("#onetrust-button-group-parent button:last-of-type");
            t && e && 1 < Math.abs(t.offsetTop - e.offsetTop) && L("#onetrust-banner-sdk").addClass("ot-buttons-fw")
        }
        ,
        Yn.prototype.slideInAnimation = function (e, t) {
            t === Xe ? "bottom" === A.BannerPosition ? (e.css("bottom: -99px;"),
                e.animate({
                    bottom: "0px"
                }, 1e3),
                I.bnrAnimationInProg = !0,
                setTimeout(function () {
                    e.css("bottom: 0px;"),
                        I.bnrAnimationInProg = !1
                }, 1e3)) : (e.css("top: -99px; bottom: auto;"),
                    T.pagePushedDown && !$o.checkIsBrowserIE11OrBelow() ? $o.BannerPushDownHandler() : (e.animate({
                        top: "0"
                    }, 1e3),
                        I.bnrAnimationInProg = !0,
                        setTimeout(function () {
                            e.css("top: 0px; bottom: auto;"),
                                I.bnrAnimationInProg = !1
                        }, 1e3))) : t !== Qe && t !== et || (e.css("bottom: -300px;"),
                            e.animate({
                                bottom: "1em"
                            }, 2e3),
                            I.bnrAnimationInProg = !0,
                            setTimeout(function () {
                                e.css("bottom: 1rem;"),
                                    I.bnrAnimationInProg = !1
                            }, 2e3))
        }
        ,
        Yn.prototype.setBannerBtn = function () {
            window.innerWidth <= 600 ? (S.insertElement(this._btnsCntr, this._settingsBtn, "afterbegin"),
                S.insertElement(this._btnsCntr, this._saveBtn, "afterbegin"),
                S.insertElement(this._btnsCntr, this._acceptBtn, "afterbegin"),
                S.insertElement(this._btnsCntr, this._rejectBtn, "afterbegin")) : this._fourBtns ? (this._descriptCntr.insertAdjacentElement("beforeend", this._settingsBtn),
                    this._acceptBtn.insertAdjacentElement("beforebegin", this._rejectBtn),
                    this._btnsCntr.insertAdjacentElement("beforebegin", this._saveBtn)) : (S.insertElement(this._btnsCntr, this._settingsBtn, "beforebegin"),
                        S.insertElement(this._btnsCntr, this._saveBtn, this._settingsBtn ? "afterbegin" : "beforebegin"),
                        S.insertElement(this._btnsCntr, this._rejectBtn, "beforeend"),
                        S.insertElement(this._btnsCntr, this._acceptBtn, "beforeend"))
        }
        ,
        Yn.prototype.setCmpBannerOptions = function (n, e) {
            var r = L(n("#banner-options .banner-option")).el.cloneNode(!0)
                , i = (L(n(this._bannerOptionsSelector)).html(""),
                    1);
            e.forEach(function (e) {
                var t = r.cloneNode(!0)
                    , o = A[e.titleKey]
                    , e = A[e.descriptionKey];
                (o || e) && (t.querySelector(".banner-option-header :first-child").innerHTML = o,
                    o = t.querySelector(".banner-option-details"),
                    e ? (o.setAttribute("id", "option-details-" + i++),
                        o.innerHTML = e) : o.parentElement.removeChild(o),
                    L(n("#banner-options")).el.appendChild(t))
            })
        }
        ,
        Yn.prototype.setFloatingRoundedIconBannerCmpOptions = function (r, e) {
            var i = this
                , s = L(r("#banner-options button")).el.cloneNode(!0)
                , n = L(r(".banner-option-details")).el.cloneNode(!0);
            L(r(this._bannerOptionsSelector)).html(""),
                e.forEach(function (e) {
                    var t = s.cloneNode(!0)
                        , o = A[e.titleKey]
                        , n = A[e.descriptionKey];
                    (o || n) && (t.setAttribute("id", e.identifier),
                        t.querySelector(".banner-option-header :first-child").innerHTML = o,
                        L(r(i._bannerOptionsSelector)).el.appendChild(t))
                }),
                e.forEach(function (e) {
                    var t, o = A[e.descriptionKey];
                    o && ((t = n.cloneNode(!0)).innerHTML = o,
                        t.classList.add(e.identifier),
                        L(r(i._bannerOptionsSelector)).el.appendChild(t))
                })
        }
        ,
        Yn.prototype.setBannerOptionContent = function () {
            var t = this;
            T.bannerName !== Xe && T.bannerName !== Ze || setTimeout(function () {
                var e;
                (window.innerWidth < 769 ? (e = L(t._bannerOptionsSelector).el[0],
                    L(t._otGrpContainerSelector)) : (e = L(t._bannerOptionsSelector).el[0],
                        T.bannerName === Ze ? L(".banner-content") : L("#onetrust-banner-sdk .ot-sdk-container"))).el[0].appendChild(e)
            })
        }
        ,
        Yn.prototype.setAdditionalDesc = function (e) {
            var t = A.BannerAdditionalDescPlacement
                , o = document.createElement("span")
                , n = (o.classList.add("ot-b-addl-desc"),
                    o.innerHTML = A.BannerAdditionalDescription,
                    e(Kn.POLICY_TEXT_SELECTOR));
            t === le.AfterTitle ? n.insertAdjacentElement("beforeBegin", o) : t === le.AfterDescription ? n.insertAdjacentElement("afterEnd", o) : t === le.AfterDPD && (n = e(".ot-dpd-container .ot-dpd-desc"),
                (n = A.ChoicesBanner ? e(this._otGrpContainerSelector) : n).insertAdjacentElement("beforeEnd", o))
        }
        ,
        Yn.prototype.insertGrps = function (e) {
            var d = e(".ot-cat-item").cloneNode(!0)
                , p = (S.removeChild(e(".ot-cat-item")),
                    A.BCategoryStyle === ke.Checkbox ? S.removeChild(d.querySelector(".ot-tgl")) : (S.removeChild(d.querySelector(".ot-chkbox")),
                        L(d).addClass("ot-cat-bdr")),
                    e(".ot-cat-lst ul"));
            A.Groups.forEach(function (e) {
                var t = d.cloneNode(!0)
                    , o = t.querySelector(".ot-tgl,.ot-chkbox")
                    , n = e.GroupName
                    , r = e.CustomGroupId
                    , i = "ot-bnr-grp-id-" + r
                    , s = "ot-bnr-hdr-id-" + r
                    , a = -1 !== St.indexOf(e.Type)
                    , l = f.getGrpStatus(e).toLowerCase() === C.ALWAYS_ACTIVE || a
                    , c = f.getGrpStatus(e).toLowerCase() === C.ALWAYS_INACTIVE || a
                    , a = E.isGroupActive(e) || a
                    , e = (L(o.querySelector("label")).attr("for", i),
                        L(o.querySelector(".ot-label-txt")).html(e.GroupName),
                        o.querySelector("input"))
                    , l = ((l || c) && (A.BCategoryStyle === ke.Toggle ? (S.removeChild(o),
                        t.insertAdjacentElement("beforeend", L("<div class='ot-always-active'>" + (c ? A.AlwaysInactiveText : A.AlwaysActiveText) + "</div>", "ce").el)) : L(e).attr("disabled", !0)),
                        e.classList.add("category-switch-handler"),
                        E.setInputID(e, i, r, a, s),
                        t.querySelector("h4"));
                L(l).html(n),
                    L(l).attr("id", s),
                    L(p).append(t)
            })
        }
        ,
        Yn.prototype.setBannerLogo = function (e, t) {
            var o, n;
            m.fp.CookieV2BannerLogo && A.BnrLogo && (o = t(en),
                n = "afterend",
                T.bannerName === Ze && (o = t("#onetrust-cookie-btn"),
                    n = "beforeend"),
                t = y.updateCorrectUrl(A.BnrLogo),
                L(e).addClass("ot-bnr-w-logo"),
                L(o).el.innerHTML = "",
                o.insertAdjacentHTML(n, "<img class='ot-bnr-logo' src='" + t + "'\n            title='" + A.BnrLogoAria + "'\n            alt='" + A.BnrLogoAria + "'/>"))
        }
        ,
        Yn.prototype.setOptOutSignalNotification = function (e) {
            var t = T.gpcEnabled && T.gpcForAGrpEnabled;
            A.BShowOptOutSignal && (t || T.previewMode) && y.createOptOutSignalElement(e, !1)
        }
        ;
    var Kn, Wn = Yn;
    function Yn() {
        this.POLICY_TEXT_SELECTOR = "#onetrust-policy-text",
            this.El = "#onetrust-banner-sdk",
            this._saveBtn = null,
            this._settingsBtn = null,
            this._acceptBtn = null,
            this._rejectBtn = null,
            this._descriptCntr = null,
            this._btnsCntr = null,
            this._fourBtns = !1,
            this._bannerOptionsSelector = "#banner-options",
            this._btnGrpParentSelector = "#onetrust-button-group-parent",
            this._otGrpContainerSelector = "#onetrust-group-container",
            this.cookiePolicyLinkSelector = "#onetrust-policy-text a"
    }
    Xn.prototype.setHeaderConfig = function () {
        c.setHeader(),
            c.setSearchInput(),
            c.setHeaderUIConsent();
        var e = c.getGroupsForFilter();
        Nn.setFilterListByGroup(e, !1)
    }
        ,
        Xn.prototype.filterVendorByString = function (e) {
            c.searchQuery = e,
                c.filterVendorByGroupOrQuery()
        }
        ,
        Xn.prototype.filterVendorByGroup = function (e) {
            c.filterGroups = e,
                c.filterVendorByGroupOrQuery()
        }
        ,
        Xn.prototype.showVSList = function () {
            c.removeListeners(),
                c.showEmptyResults(!1, ""),
                c.clearUIElementsInMain(),
                c.addVSList(I.getVendorsInDomain())
        }
        ,
        Xn.prototype.showEmptyResults = function (e, t) {
            e ? this.setNoResultsContent(t) : (L("#onetrust-pc-sdk " + b.P_Vendor_Content).removeClass("no-results"),
                (e = L("#onetrust-pc-sdk #no-results")).length && e.remove())
        }
        ,
        Xn.prototype.setNoResultsContent = function (e) {
            var t, o, n, r, i = L("#onetrust-pc-sdk #no-results").el[0];
            if (!i)
                return t = document.createElement("div"),
                    o = document.createElement("p"),
                    n = document.createTextNode(" " + A.PCVendorNotFound + "."),
                    r = document.createElement("span"),
                    t.id = "no-results",
                    r.id = "user-text",
                    r.innerText = e,
                    o.appendChild(r),
                    o.appendChild(n),
                    t.appendChild(o),
                    L("#onetrust-pc-sdk " + b.P_Vendor_Content).addClass("no-results"),
                    L("#vendor-search-handler").el[0].setAttribute("aria-describedby", t.id),
                    L("#onetrust-pc-sdk " + b.P_Vendor_Content).append(t);
            i.querySelector("span").innerText = e
        }
        ,
        Xn.prototype.getGroupsFilter = function () {
            for (var e = [], t = 0, o = L("#onetrust-pc-sdk .category-filter-handler").el; t < o.length; t++) {
                var n = o[t]
                    , r = n.getAttribute("data-purposeid");
                n.checked && e.push(r)
            }
            return e
        }
        ,
        Xn.prototype.cancelFilter = function () {
            for (var e = 0, t = L("#onetrust-pc-sdk .category-filter-handler").el; e < t.length; e++) {
                var o = t[e]
                    , n = o.getAttribute("data-optanongroupid")
                    , n = 0 <= I.filterByCategories.indexOf(n);
                S.setCheckedAttribute(null, o, n)
            }
            var r = c.getGroupsFilter();
            c.filterVendorByGroup(r)
        }
        ,
        Xn.prototype.clearFilter = function () {
            c.searchQuery = "",
                c.filterGroups = []
        }
        ,
        Xn.prototype.toggleVendors = function (r) {
            I.getVendorsInDomain().forEach(function (e, t) {
                var o, n;
                f.isAlwaysActiveGroup(e.groupRef) || (o = document.getElementById("ot-vendor-id-" + t),
                    n = document.getElementById("ot-vs-lst-id-" + t),
                    V.toggleVendorService(e.groupRef.CustomGroupId, t, r, o),
                    V.toggleVendorService(e.groupRef.CustomGroupId, t, r, n))
            })
        }
        ,
        Xn.prototype.hideVendorList = function () {
            c.removeListeners(),
                c.clearUIElementsInMain()
        }
        ,
        Xn.prototype.addListeners = function () {
            L("#onetrust-pc-sdk " + b.P_Vendor_Content + " .ot-vs-list .category-switch-handler").on("click", c.toggleVendorHandler),
                L("#onetrust-pc-sdk").on("click", ".ot-vs-list", B.onCategoryItemToggle.bind(this))
        }
        ,
        Xn.prototype.removeListeners = function () {
            var e;
            document.querySelectorAll("#onetrust-pc-sdk .ot-vs-list .category-switch-handler").forEach(function (e) {
                return e.removeEventListener("click", B.toggleGroupORVendorHandler)
            }),
                null != (e = document.querySelector("#onetrust-pc-sdk .ot-vs-list")) && e.removeEventListener("click", B.onCategoryItemToggle)
        }
        ,
        Xn.prototype.toggleVendorHandler = function (e) {
            B.toggleVendorFromListHandler(e),
                c.checkAllowAllCheckedValue()
        }
        ,
        Xn.prototype.filterVendorByGroupOrQuery = function () {
            var o = new Map;
            I.getVendorsInDomain().forEach(function (e, t) {
                c.checkVendorConditions(e) && o.set(t, e)
            }),
                c.showEmptyResults(o.size <= 0, c.searchQuery),
                c.removeListeners(),
                c.clearUIElementsInMain(),
                c.addVSList(o)
        }
        ,
        Xn.prototype.checkVendorConditions = function (e) {
            return !("" !== c.searchQuery && e.ServiceName.toLowerCase().indexOf(c.searchQuery.toLowerCase()) < 0 || 0 < c.filterGroups.length && c.filterGroups.indexOf(e.groupRef.CustomGroupId) < 0)
        }
        ,
        Xn.prototype.addVSList = function (e) {
            var t = L("#onetrust-pc-sdk " + b.P_Vendor_Content + " .ot-sdk-column")
                , e = V.getVendorListEle(e);
            t.append(e),
                c.addListeners()
        }
        ,
        Xn.prototype.getGroupsForFilter = function () {
            var t = new Map;
            return I.getVendorsInDomain().forEach(function (e) {
                t.has(e.groupRef.CustomGroupId) || t.set(e.groupRef.CustomGroupId, e.groupRef)
            }),
                Array.from(t.values())
        }
        ,
        Xn.prototype.clearUIElementsInMain = function () {
            L("#onetrust-pc-sdk " + b.P_Vendor_Content + " ul" + b.P_Host_Cntr).html(""),
                L("#onetrust-pc-sdk " + b.P_Vendor_Content + " ul" + b.P_Host_Cntr).hide(),
                L("#onetrust-pc-sdk " + b.P_Vendor_Content + " ul" + b.P_Vendor_Container).html(""),
                L("#onetrust-pc-sdk " + b.P_Vendor_Content + " ul" + b.P_Vendor_Container).hide();
            var e = L("#onetrust-pc-sdk " + b.P_Vendor_Content + " .ot-vs-list");
            e && e.length && e.remove()
        }
        ,
        Xn.prototype.setHeader = function () {
            var e = A.VendorServiceConfig.PCVSListTitle
                , t = document.querySelector("#onetrust-pc-sdk " + b.P_Vendor_Title);
            t && (t.innerText = e)
        }
        ,
        Xn.prototype.setSearchInput = function () {
            var e = A.PCenterCookieListSearch
                , t = A.PCenterCookieSearchAriaLabel
                , o = L("#onetrust-pc-sdk " + b.P_Vendor_Search_Input);
            o.el[0].placeholder = e,
                o.attr("aria-label", t)
        }
        ,
        Xn.prototype.setHeaderUIConsent = function () {
            var e, t, o;
            L("#onetrust-pc-sdk " + b.P_Select_Cntr).addClass("ot-vnd-list-cnt"),
                L("#onetrust-pc-sdk " + b.P_Select_Cntr + " .ot-sel-all").addClass("ot-vs-selc-all"),
                A.PCCategoryStyle === ke.Toggle && (L("#onetrust-pc-sdk " + b.P_Select_Cntr + " .ot-sel-all").addClass("ot-toggle-conf"),
                    A.PCAccordionStyle === ce.Caret) && L("#onetrust-pc-sdk " + b.P_Select_Cntr + " .ot-sel-all").addClass("ot-caret-conf"),
                L("#onetrust-pc-sdk " + b.P_Leg_Select_All).hide(),
                L("#onetrust-pc-sdk #" + b.P_Sel_All_Host_El).hide(),
                L("#onetrust-pc-sdk " + b.P_Host_Cntr).hide(),
                L(b.P_Vendor_List + " #select-all-text-container").hide(),
                L("#onetrust-pc-sdk #" + b.P_Sel_All_Vendor_Leg_El).hide(),
                L("#onetrust-pc-sdk " + b.P_Vendor_Container).show(),
                L("#onetrust-pc-sdk " + b.P_Select_Cntr).show(),
                L("#onetrust-pc-sdk #" + b.P_Sel_All_Vendor_Consent_El).show("inline-block"),
                L("#onetrust-pc-sdk " + b.P_Vendor_List).removeClass(b.P_Host_UI),
                L("#onetrust-pc-sdk " + b.P_Vendor_Content).removeClass(b.P_Host_Cnt),
                document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox .sel-all-hdr") || ((e = document.createElement("h4")).className = "sel-all-hdr",
                    e.textContent = (null == (t = A.VendorServiceConfig) ? void 0 : t.PCVSAllowAllText) || "PCVSAllowAllText",
                    t = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
                    o = A.PCCategoryStyle === ke.Checkbox ? "beforeend" : "afterbegin",
                    t.insertAdjacentElement(o, e)),
                c.checkAllowAllCheckedValue()
        }
        ,
        Xn.prototype.checkAllowAllCheckedValue = function () {
            var t = !0
                , e = (I.vsConsent.forEach(function (e) {
                    e || (t = !1)
                }),
                    document.getElementById("#select-all-vendor-groups-handler"));
            S.setCheckedAttribute(null, e, t)
        }
        ;
    var c, Jn = Xn;
    function Xn() {
        this.searchQuery = "",
            this.filterGroups = []
    }
    s.prototype.initCookieSettingHandlers = function () {
        L(document).on("click", ".optanon-show-settings, .optanon-toggle-display, .ot-sdk-show-settings, .ot-pc-handler", this.cookiesSettingsBoundListener)
    }
        ,
        s.prototype.initFlgtCkStgBtnEventHandlers = function () {
            L(".ot-floating-button__open").on("click", B.floatingCookieSettingOpenBtnClicked),
                L(".ot-floating-button__close").on("click", B.floatingCookieSettingCloseBtnClicked)
        }
        ,
        s.prototype.floatingCookieSettingOpenBtnClicked = function (e) {
            L(B.fltgBtnSltr).addClass("ot-pc-open"),
                A.cookiePersistentLogo.includes("ot_guard_logo.svg") && L(B.fltgBtnFSltr).attr(Ct, "true"),
                L(B.fltgBtnBSltr).attr(Ct, ""),
                L(B.fltgBtnFrontBtn).el[0].setAttribute(Ct, !0),
                L(B.fltgBtnFrontBtn).el[0].style.display = "none",
                L(B.fltgBtnBackBtn).el[0].setAttribute(ht, A.AriaClosePreferences),
                L(B.fltgBtnBackBtn).el[0].setAttribute(Ct, !1),
                L(B.fltgBtnBackBtn).el[0].style.display = "block",
                u.triggerGoogleAnalyticsEvent(ko, Oo),
                B.showCookieSettingsHandler(e)
        }
        ,
        s.prototype.floatingCookieSettingCloseBtnClicked = function (e) {
            L(B.fltgBtnFrontBtn).el[0].setAttribute(ht, A.AriaOpenPreferences),
                L(B.fltgBtnFrontBtn).el[0].setAttribute(Ct, !1),
                L(B.fltgBtnFrontBtn).el[0].style.display = "block",
                L(B.fltgBtnBackBtn).el[0].setAttribute(Ct, !0),
                L(B.fltgBtnBackBtn).el[0].style.display = "none",
                e && (u.triggerGoogleAnalyticsEvent(ko, Bo),
                    B.hideCookieSettingsHandler(e))
        }
        ,
        s.prototype.initialiseLegIntBtnHandlers = function () {
            L(document).on("click", ".ot-obj-leg-btn-handler", B.onLegIntButtonClick),
                L(document).on("click", ".ot-remove-objection-handler", B.onLegIntButtonClick)
        }
        ,
        s.prototype.initialiseAddtlVenHandler = function () {
            L("#onetrust-pc-sdk #ot-addtl-venlst").on("click", B.selectVendorsGroupHandler),
                L("#onetrust-pc-sdk #ot-selall-adtlven-handler").on("click", B.selAllAdtlVenHandler)
        }
        ,
        s.prototype.initializeGenVenHandlers = function () {
            L("#onetrust-pc-sdk #ot-gn-venlst .ot-gnven-chkbox-handler").on("click", B.genVendorToggled),
                L("#onetrust-pc-sdk #ot-gn-venlst .ot-gv-venbox").on("click", B.genVendorDetails),
                L("#onetrust-pc-sdk #ot-selall-gnven-handler").on("click", B.selectAllGenVenHandler)
        }
        ,
        s.prototype.initialiseConsentNoticeHandlers = function () {
            var e = this
                , t = 37
                , o = 39;
            T.pcName === g && B.categoryMenuSwitchHandler(),
                L("#onetrust-pc-sdk .onetrust-close-btn-handler").on("click", B.bannerCloseButtonHandler),
                L("#onetrust-pc-sdk #accept-recommended-btn-handler").on("click", h.allowAllEventHandler.bind(this, !0)),
                L("#onetrust-pc-sdk .ot-pc-refuse-all-handler").on("click", h.rejectAllEventHandler.bind(this, !0)),
                L("#onetrust-pc-sdk #close-pc-btn-handler").on("click", B.hideCookieSettingsHandler),
                L(document).on("keydown", B.closePCWhenEscPressed),
                L("#onetrust-pc-sdk #vendor-close-pc-btn-handler").on("click", B.hideCookieSettingsHandler),
                L("#onetrust-pc-sdk .category-switch-handler").on("click", B.toggleGroupORVendorHandler),
                L("#onetrust-pc-sdk .cookie-subgroup-handler").on("click", B.toggleSubCategory),
                L("#onetrust-pc-sdk .category-menu-switch-handler").on("keydown", function (e) {
                    T.pcName !== g || e.keyCode !== t && e.keyCode !== o || (A.PCTemplateUpgrade ? B.changeSelectedTabV2(e) : B.changeSelectedTab(e))
                }),
                L("" + B.PC_SELECTOR).on("click", b.P_Category_Item + " > input:first-child," + b.P_Category_Item + " > button:first-child", B.onCategoryItemToggle.bind(this)),
                (A.showCookieList || I.showGeneralVendors) && (L("#onetrust-pc-sdk .category-host-list-handler").on("click", function (e) {
                    I.showGeneralVendors && A.showCookieList ? I.cookieListType = ye.HostAndGenVen : I.showGeneralVendors ? I.cookieListType = ye.GenVen : I.cookieListType = ye.Host,
                        B.pcLinkSource = e.target,
                        B.loadCookieList(e.target)
                }),
                    y.isOptOutEnabled() ? (L("#onetrust-pc-sdk #select-all-hosts-groups-handler").on("click", B.selectAllHostsGroupsHandler),
                        L("#onetrust-pc-sdk " + b.P_Host_Cntr).on("click", B.selectHostsGroupHandler)) : L("#onetrust-pc-sdk " + b.P_Host_Cntr).on("click", B.toggleAccordionStatus)),
                B.addListenerWhenIabEnabled(),
                B.addEventListenerWhenIsHostOrVendorsAreEnabled(),
                B.adddListenerWhenNoBanner(),
                L("#onetrust-pc-sdk .ot-gv-list-handler").on("click", function (t) {
                    return F(e, void 0, void 0, function () {
                        return M(this, function (e) {
                            return I.cookieListType = ye.GenVen,
                                B.loadCookieList(t.target),
                                [2]
                        })
                    })
                }),
                B.addListenerWhenVendorServices()
        }
        ,
        s.prototype.addEventListenerWhenIsHostOrVendorsAreEnabled = function () {
            var e;
            (A.IsIabEnabled || A.showCookieList || I.showGeneralVendors || I.showVendorService) && (L(document).on("click", ".back-btn-handler", B.backBtnHandler),
                B.addListenerSearchKeyEvent(),
                L("#onetrust-pc-sdk #filter-btn-handler").on("click", B.toggleVendorFiltersHandler),
                L("#onetrust-pc-sdk #filter-apply-handler").on("click", B.applyFilterHandler),
                L("#onetrust-pc-sdk " + b.P_Fltr_Modal).on("click", B.tglFltrOptionHandler),
                !m.isV2Template && T.pcName !== st || L("#onetrust-pc-sdk #filter-cancel-handler").on("click", B.cancelFilterHandler),
                !m.isV2Template && T.pcName === st || L("#onetrust-pc-sdk #clear-filters-handler").on("click", B.clearFiltersHandler),
                m.isV2Template ? L("#onetrust-pc-sdk #filter-cancel-handler").on("keydown", function (e) {
                    9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(),
                        L("#onetrust-pc-sdk #clear-filters-handler").el[0].focus())
                }) : L("#onetrust-pc-sdk #filter-apply-handler").on("keydown", function (e) {
                    9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(),
                        L("#onetrust-pc-sdk .category-filter-handler").el[0].focus())
                }),
                e = L("#onetrust-pc-sdk .category-filter-handler").el,
                L(e[0]).on("keydown", function (e) {
                    9 !== e.keyCode && "tab" !== e.code || !e.shiftKey || (e.preventDefault(),
                        L("#onetrust-pc-sdk #filter-apply-handler").el[0].focus())
                }))
        }
        ,
        s.prototype.addListenerSearchKeyEvent = function () {
            L(B.VENDOR_SEARCH_SELECTOR).on("keyup", function (e) {
                e = e.target.value.trim();
                B.currentSearchInput !== e && (I.showVendorService ? c.filterVendorByString(e) : B.isCookieList ? (G.searchHostList(e),
                    I.showTrackingTech && B.addEventAdditionalTechnologies()) : (G.loadVendorList(e, []),
                        A.UseGoogleVendors && G.searchVendors(G.googleSearchSelectors, I.addtlVendorsList, ve.GoogleVendor, e),
                        I.showGeneralVendors && A.GeneralVendors.length && G.searchVendors(G.genVendorSearchSelectors, A.GeneralVendors, ve.GeneralVendor, e)),
                    G.playSearchStatus(B.isCookieList),
                    B.currentSearchInput = e)
            })
        }
        ,
        s.prototype.addListenerWhenIabEnabled = function () {
            A.IsIabEnabled && (L("#onetrust-pc-sdk .category-vendors-list-handler").on("click", function (e) {
                B.pcLinkSource = e.target,
                    B.showVendorsList(e.target)
            }),
                L("#onetrust-pc-sdk .ot-pgph-link").on("click", function (e) {
                    B.pcLinkSource = e.target,
                        B.showIllustrations(e.target)
                }),
                L("#onetrust-pc-sdk " + b.P_Vendor_Container).on("click", B.selectVendorsGroupHandler),
                A.UseGoogleVendors || B.bindSelAllHandlers(),
                B.initialiseLegIntBtnHandlers())
        }
        ,
        s.prototype.adddListenerWhenNoBanner = function () {
            A.NoBanner && (A.OnClickCloseBanner && document.body.addEventListener("click", h.bodyClickEvent),
                A.ScrollCloseBanner) && window.addEventListener("scroll", h.scrollCloseBanner)
        }
        ,
        s.prototype.addListenerWhenVendorServices = function () {
            I.showVendorService && (B.bindSelAllHandlers(),
                L("#onetrust-pc-sdk .onetrust-vendors-list-handler").on("click", function () {
                    return B.showVendorsList(null, !0)
                }))
        }
        ,
        s.prototype.bindSelAllHandlers = function () {
            L("#onetrust-pc-sdk #select-all-vendor-leg-handler").on("click", B.selectAllVendorsLegIntHandler),
                L("#onetrust-pc-sdk #select-all-vendor-groups-handler").on("click", B.SelectAllVendorConsentHandler)
        }
        ,
        s.prototype.hideCookieSettingsHandler = function (e) {
            return void 0 === e && (e = window.event),
                u.triggerGoogleAnalyticsEvent(ko, Ao),
                $o.removeAddedOTCssStyles(Qo.PC),
                rn.hideConsentNoticeV2(),
                L(document).off("keydown", B.closePCWhenEscPressed),
                B.getResizeElement().removeEventListener("resize", B.setCenterLayoutFooterHeight),
                window.removeEventListener("resize", B.setCenterLayoutFooterHeight),
                !m.isV2Template && T.pcName !== st || B.closeFilter(!1),
                T.pcName === rt && L("#onetrust-pc-sdk " + b.P_Content).removeClass("ot-hide"),
                h.hideVendorsList(),
                w.csBtnGroup && (L(B.fltgBtnSltr).removeClass("ot-pc-open"),
                    B.floatingCookieSettingCloseBtnClicked(null)),
                B.confirmPC(e),
                h.resetConsent(),
                !1
        }
        ,
        s.prototype.selectAllHostsGroupsHandler = function (e) {
            var t = e.target.checked
                , e = L("#onetrust-pc-sdk #" + b.P_Sel_All_Host_El).el[0]
                , o = e.classList.contains("line-through")
                , n = L("#onetrust-pc-sdk .host-checkbox-handler").el;
            S.setCheckedAttribute("#select-all-hosts-groups-handler", null, t);
            for (var r = 0; r < n.length; r++)
                n[r].getAttribute("disabled") || S.setCheckedAttribute(null, n[r], t);
            I.optanonHostList.forEach(function (e) {
                yo.updateHostStatus(e, t)
            }),
                n.forEach(function (e) {
                    go.updateGenVendorStatus(e.getAttribute("hostId"), t)
                }),
                o && e.classList.remove("line-through")
        }
        ,
        s.prototype.selectHostsGroupHandler = function (e) {
            B.toggleAccordionStatus(e);
            var t = e.target.getAttribute("hostId")
                , o = e.target.getAttribute("ckType")
                , n = e.target.checked;
            null !== t && (o === Ce.GenVendor ? (o = A.GeneralVendors.find(function (e) {
                return e.VendorCustomId === t
            }).Name,
                u.triggerGoogleAnalyticsEvent(ko, n ? xo : No, o + ": VEN_" + t),
                go.updateGenVendorStatus(t, n)) : (o = S.findIndex(I.optanonHostList, function (e) {
                    return e.HostId === t
                }),
                    o = I.optanonHostList[o],
                    B.toggleHostStatus(o, n)),
                S.setCheckedAttribute(null, e.target, n))
        }
        ,
        s.prototype.onCategoryItemToggle = function (e) {
            e.stopPropagation();
            var t = e.target;
            "BUTTON" !== t.tagName && "INPUT" !== t.tagName || (T.pcName === rt && this.setPcListContainerHeight(),
                B.toggleAccordionStatus(e))
        }
        ,
        s.prototype.toggleAccordionStatus = function (e) {
            var t, e = e.target;
            e && e.getAttribute("aria-expanded") && (t = "true" === e.getAttribute("aria-expanded") ? "false" : "true",
                e.setAttribute("aria-expanded", t))
        }
        ,
        s.prototype.toggleHostStatus = function (e, t) {
            u.triggerGoogleAnalyticsEvent(ko, t ? Do : Ho, e.HostName + ": H_" + e.HostId),
                yo.updateHostStatus(e, t)
        }
        ,
        s.prototype.toggleBannerOptions = function (e) {
            L(".banner-option-input").each(function (e) {
                L(e).el.setAttribute("aria-expanded", !1)
            }),
                B.toggleAccordionStatus(e)
        }
        ,
        s.prototype.bannerCloseButtonHandler = function (e) {
            var t;
            return L(document).off("keydown", B.shiftBannerFocus),
                e && e.target && e.target.className && (-1 < (e = e.target.className).indexOf("save-preference-btn-handler") ? (I.bannerCloseSource = ee.ConfirmChoiceButton,
                    u.triggerGoogleAnalyticsEvent(ko, Eo)) : -1 < e.indexOf("banner-close-button") ? (I.bannerCloseSource = ee.BannerCloseButton,
                        t = bo,
                        -1 < e.indexOf("ot-close-link") && (t = Po,
                            I.bannerCloseSource = ee.ContinueWithoutAcceptingButton),
                        u.triggerGoogleAnalyticsEvent(ko, t)) : -1 < e.indexOf("ot-bnr-save-handler") && (I.bannerCloseSource = ee.BannerSaveSettings,
                            u.triggerGoogleAnalyticsEvent(ko, To))),
                $o.removeAddedOTCssStyles(),
                h.hideVendorsList(),
                h.bannerCloseButtonHandler()
        }
        ,
        s.prototype.onLegIntButtonClick = function (e) {
            var t, o, n;
            e && (n = "true" === (e = e.currentTarget).parentElement.getAttribute("is-vendor"),
                t = e.parentElement.getAttribute("data-group-id"),
                o = !e.classList.contains("ot-leg-int-enabled"),
                n ? B.onVendorToggle(t, de.LI) : (n = f.getGroupById(t)).Parent ? B.updateSubGroupToggles(n, o, !0) : B.updateGroupToggles(n, o, !0),
                E.updateLegIntBtnElement(e.parentElement, o))
        }
        ,
        s.prototype.updateGroupToggles = function (t, o, e) {
            yo.toggleGroupHosts(t, o),
                I.genVenOptOutEnabled && yo.toggleGroupGenVendors(t, o),
                t.IsLegIntToggle = e,
                E.toggleGrpStatus(t, o),
                t.SubGroups && t.SubGroups.length && (T.bannerName === tt && m.moduleInitializer.IsSuppressPC && t.SubGroups.length ? t.SubGroups.forEach(function (e) {
                    e.IsLegIntToggle = t.IsLegIntToggle,
                        E.toggleGrpStatus(e, o),
                        e.IsLegIntToggle = !1,
                        yo.toggleGroupHosts(e, o),
                        I.genVenOptOutEnabled && yo.toggleGroupGenVendors(e, o),
                        V.setVendorStateByGroup(e, o)
                }) : E.toogleAllSubGrpElements(t, o),
                    t.SubGroups.forEach(function (e) {
                        return V.setVendorStateByGroup(e, o)
                    })),
                V.setVendorStateByGroup(t, o),
                this.allowAllVisible(E.setAllowAllButton()),
                t.IsLegIntToggle = !1
        }
        ,
        s.prototype.updateSubGroupToggles = function (e, t, o) {
            yo.toggleGroupHosts(e, t),
                I.genVenOptOutEnabled && yo.toggleGroupGenVendors(e, t);
            var n = f.getGroupById(e.Parent)
                , o = (e.IsLegIntToggle = o,
                    n.IsLegIntToggle = e.IsLegIntToggle,
                    E.isGroupActive(n));
            t ? (E.toggleGrpStatus(e, !0),
                E.isAllSubgroupsEnabled(n) && !o && (E.toggleGrpStatus(n, !0),
                    yo.toggleGroupHosts(n, t),
                    I.genVenOptOutEnabled && yo.toggleGroupGenVendors(n, t),
                    E.toggleGroupHtmlElement(e, "" + e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !0))) : (E.toggleGrpStatus(e, !1),
                        E.isAllSubgroupsDisabled(n) && o ? (E.toggleGrpStatus(n, !1),
                            yo.toggleGroupHosts(n, t),
                            I.genVenOptOutEnabled && yo.toggleGroupGenVendors(n, t),
                            E.toggleGroupHtmlElement(e, "" + e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), t)) : (E.toggleGrpStatus(n, !1),
                                yo.toggleGroupHosts(n, !1),
                                I.genVenOptOutEnabled && yo.toggleGroupGenVendors(n, t),
                                E.toggleGroupHtmlElement(e, "" + e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !1))),
                this.allowAllVisible(E.setAllowAllButton()),
                e.IsLegIntToggle = !1,
                n.IsLegIntToggle = e.IsLegIntToggle
        }
        ,
        s.prototype.hideCategoryContainer = function (e) {
            this.isCookieList = e = void 0 === e ? !1 : e,
                B.addHideClassContainer(),
                I.showVendorService ? c.setHeaderConfig() : (e ? B.setCookieListTemplate() : B.setVendorListTemplate(),
                    Nn.setFilterList(e))
        }
        ,
        s.prototype.setCookieListTemplate = function () {
            var e = m.isV2Template;
            L(b.P_Vendor_List + " #select-all-text-container").show("inline-block"),
                L("#onetrust-pc-sdk " + b.P_Host_Cntr).show(),
                y.isOptOutEnabled() ? L("#onetrust-pc-sdk #" + b.P_Sel_All_Host_El).show("inline-block") : L("#onetrust-pc-sdk #" + b.P_Sel_All_Host_El).hide(),
                L("#onetrust-pc-sdk #" + b.P_Sel_All_Vendor_Leg_El).hide(),
                L("#onetrust-pc-sdk " + b.P_Leg_Header).hide(),
                e || L("#onetrust-pc-sdk " + b.P_Leg_Select_All).hide(),
                L("#onetrust-pc-sdk #" + b.P_Sel_All_Vendor_Consent_El).hide(),
                L("#onetrust-pc-sdk  " + b.P_Vendor_Container).hide(),
                (A.UseGoogleVendors || I.showGeneralVendors) && L("#onetrust-pc-sdk .ot-acc-cntr").hide(),
                L("#onetrust-pc-sdk " + b.P_Vendor_List).addClass(b.P_Host_UI),
                L("#onetrust-pc-sdk " + b.P_Vendor_Content).addClass(b.P_Host_Cnt)
        }
        ,
        s.prototype.setVendorListTemplate = function () {
            L("#onetrust-pc-sdk " + b.P_Vendor_Container).show(),
                L("#onetrust-pc-sdk #" + b.P_Sel_All_Vendor_Consent_El).show("inline-block"),
                A.UseGoogleVendors && L("#onetrust-pc-sdk .ot-acc-cntr").show(),
                T.legIntSettings.PAllowLI && T.isIab2orv2Template ? (L("#onetrust-pc-sdk " + b.P_Select_Cntr).show(m.isV2Template ? void 0 : "inline-block"),
                    L("#onetrust-pc-sdk " + b.P_Leg_Select_All).show("inline-block"),
                    L("#onetrust-pc-sdk #" + b.P_Sel_All_Vendor_Leg_El).show("inline-block"),
                    L(b.P_Vendor_List + " #select-all-text-container").hide(),
                    T.legIntSettings.PShowLegIntBtn ? (L("#onetrust-pc-sdk " + b.P_Leg_Header).hide(),
                        L("#onetrust-pc-sdk #" + b.P_Sel_All_Vendor_Leg_El).hide()) : L("#onetrust-pc-sdk " + b.P_Leg_Header).show()) : (L("#onetrust-pc-sdk " + b.P_Select_Cntr).show(),
                            L(b.P_Vendor_List + " #select-all-text-container").show("inline-block"),
                            L("#onetrust-pc-sdk " + b.P_Leg_Select_All).hide(),
                            L("#onetrust-pc-sdk #" + b.P_Sel_All_Vendor_Leg_El).hide()),
                L("#onetrust-pc-sdk #" + b.P_Sel_All_Host_El).hide(),
                L("#onetrust-pc-sdk " + b.P_Host_Cntr).hide(),
                L("#onetrust-pc-sdk " + b.P_Vendor_List).removeClass(b.P_Host_UI),
                L("#onetrust-pc-sdk " + b.P_Vendor_Content).removeClass(b.P_Host_Cnt)
        }
        ,
        s.prototype.showAllVendors = function (t) {
            return F(this, void 0, void 0, function () {
                return M(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, B.fetchAndSetupPC()];
                        case 1:
                            return e.sent(),
                                B.showVendorsList(null, !0),
                                I.isPCVisible ? [3, 3] : [4, B.showCookieSettingsHandler(t)];
                        case 2:
                            e.sent(),
                                e.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })
        }
        ,
        s.prototype.fetchAndSetupPC = function () {
            return F(this, void 0, void 0, function () {
                var t;
                return M(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return m.moduleInitializer.IsSuppressPC && 0 === L("" + B.PC_SELECTOR).length ? [4, Nt.getPcContent()] : [3, 2];
                        case 1:
                            t = e.sent(),
                                w.preferenceCenterGroup = {
                                    name: t.name,
                                    html: atob(t.html),
                                    css: t.css
                                },
                                m.isV2Template = A.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name),
                                (t = document.getElementById("onetrust-style")).innerHTML += w.preferenceCenterGroup.css,
                                t.innerHTML += Yt.addCustomPreferenceCenterCSS(),
                                O.insertPcHtml(),
                                B.initialiseConsentNoticeHandlers(),
                                A.IsIabEnabled && G.InitializeVendorList(),
                                e.label = 2;
                        case 2:
                            return 0 !== L("" + B.PC_SELECTOR).length && A.PCTemplateUpgrade && (t = document.querySelector("#onetrust-pc-sdk .ot-optout-signal"),
                                O.setOptOutSignalVisibility(t)),
                                [2]
                    }
                })
            })
        }
        ,
        s.prototype.setVendorContent = function () {
            L("" + B.FILTER_COUNT_SELECTOR).text(I.filterByIABCategories.length.toString()),
                G.loadVendorList("", I.filterByIABCategories),
                A.UseGoogleVendors && (I.vendorDomInit ? G.resetAddtlVendors() : (G.initGoogleVendors(),
                    L("" + B.PC_SELECTOR).on("click", ".ot-acc-cntr > button", B.toggleAccordionStatus.bind(this)))),
                I.vendorDomInit || (I.vendorDomInit = !0,
                    B.initialiseLegIntBtnHandlers(),
                    A.UseGoogleVendors && (B.initialiseAddtlVenHandler(),
                        B.bindSelAllHandlers())),
                I.showGeneralVendors && !I.genVendorDomInit && (I.genVendorDomInit = !0,
                    G.initGenVendors(),
                    B.initializeGenVenHandlers(),
                    A.UseGoogleVendors || (B.bindSelAllHandlers(),
                        L("" + B.PC_SELECTOR).on("click", ".ot-acc-cntr > button", B.toggleAccordionStatus.bind(this))))
        }
        ,
        s.prototype.addEventAdditionalTechnologies = function () {
            var e = document.querySelectorAll("#onetrust-pc-sdk .ot-acc-cntr.ot-add-tech > button");
            0 < e.length && (L(e).off("click", B.toggleAccordionStatus),
                L(e).on("click", B.toggleAccordionStatus))
        }
        ,
        s.prototype.showVendorsList = function (e, t) {
            return void 0 === t && (t = !1),
                I.cookieListType = null,
                B.hideCategoryContainer(!1),
                $o.addOTCssPropertiesToBody(Qo.PC, {}),
                I.showVendorService ? c.showVSList() : (t || (t = e.getAttribute("data-parent-id")) && (t = f.getGroupById(t)) && (t = q(t.SubGroups, [t]).reduce(function (e, t) {
                    return -1 < mt.indexOf(t.Type) && e.push(t.CustomGroupId),
                        e
                }, []),
                    I.filterByIABCategories = q(I.filterByIABCategories, t)),
                    B.setVendorContent(),
                    hn.updateFilterSelection(!1)),
                I.pcLayer = se.VendorList,
                e && vo.setPCFocus(vo.getPCElements()),
                this.setSearchInputFocus(),
                !1
        }
        ,
        s.prototype.showIllustrations = function (e) {
            e = e.getAttribute("data-parent-id"),
                e = f.getGroupById(e);
            I.cookieListType = null,
                I.pcLayer = se.IabIllustrations,
                B.addHideClassContainer(),
                qn.showIllustrations(e.GroupName, e.IabIllustrations),
                vo.setPCFocus(vo.getPCElements())
        }
        ,
        s.prototype.addHideClassContainer = function () {
            var e = T.pcName;
            A.PCTemplateUpgrade ? L("#onetrust-pc-sdk " + b.P_Content).addClass("ot-hide") : L("#onetrust-pc-sdk .ot-main-content").hide(),
                L("#onetrust-pc-sdk " + b.P_Vendor_List).removeClass("ot-hide"),
                e !== st && e !== rt && L("#onetrust-pc-sdk #close-pc-btn-handler.main").hide(),
                e === rt && d(L("" + B.PC_SELECTOR).el[0], 'height: "";', !0)
        }
        ,
        s.prototype.loadCookieList = function (e) {
            I.filterByCategories = [],
                B.hideCategoryContainer(!0);
            var t, e = e && e.getAttribute("data-parent-id");
            return e && (t = f.getGroupById(e),
                I.filterByCategories.push(e),
                t.SubGroups.length) && t.SubGroups.forEach(function (e) {
                    -1 === mt.indexOf(e.Type) && (e = e.CustomGroupId,
                        I.filterByCategories.indexOf(e) < 0) && I.filterByCategories.push(e)
                }),
                G.loadHostList("", I.filterByCategories),
                I.showTrackingTech && B.addEventAdditionalTechnologies(),
                L("" + B.FILTER_COUNT_SELECTOR).text(I.filterByCategories.length.toString()),
                hn.updateFilterSelection(!0),
                I.pcLayer = se.CookieList,
                vo.setPCFocus(vo.getPCElements()),
                this.setSearchInputFocus(),
                !1
        }
        ,
        s.prototype.selectAllVendorsLegIntHandler = function (e) {
            var t = L("#onetrust-pc-sdk #" + b.P_Sel_All_Vendor_Leg_El).el[0]
                , o = t.classList.contains("line-through")
                , n = L(b.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-leg-checkbox-handler').el
                , r = e.target.checked
                , i = {};
            I.vendors.selectedLegIntVendors.map(function (e, t) {
                i[e.split(":")[0]] = t
            });
            for (var s = 0; s < n.length; s++) {
                S.setCheckedAttribute(null, n[s], r),
                    A.PCShowConsentLabels && (n[s].parentElement.querySelector(".ot-label-status").innerHTML = r ? A.PCActiveText : A.PCInactiveText);
                var a = n[s].getAttribute("leg-vendorid")
                    , l = i[a];
                void 0 === l && (l = a),
                    I.vendors.selectedLegIntVendors[l] = a + ":" + r
            }
            o && t.classList.remove("line-through"),
                S.setCheckedAttribute(null, e.target, r)
        }
        ,
        s.prototype.selAllAdtlVenHandler = function (e) {
            for (var t = L("#onetrust-pc-sdk #ot-selall-adtlvencntr").el[0], o = t.classList.contains("line-through"), n = L("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el, r = e.target.checked, i = 0; i < n.length; i++)
                S.setCheckedAttribute(null, n[i], r),
                    A.PCShowConsentLabels && (n[i].parentElement.querySelector(".ot-label-status").innerHTML = r ? A.PCActiveText : A.PCInactiveText);
            r ? A.UseGoogleVendors && Object.keys(I.addtlVendorsList).forEach(function (e) {
                I.addtlVendors.vendorSelected[e] = !0
            }) : I.addtlVendors.vendorSelected = {},
                o && t.classList.remove("line-through")
        }
        ,
        s.prototype.selectAllGenVenHandler = function (e) {
            e = e.target.checked;
            B.selectAllHandler({
                selAllEl: "#onetrust-pc-sdk #ot-selall-gnvencntr",
                vendorBoxes: "#onetrust-pc-sdk .ot-gnven-chkbox-handler"
            }, "genven", e)
        }
        ,
        s.prototype.selectAllHandler = function (e, t, o) {
            for (var n = L(e.selAllEl).el[0], r = n.classList.contains("line-through"), i = L(e.vendorBoxes).el, s = 0; s < i.length; s++)
                "genven" === t && !o && I.alwaysActiveGenVendors.includes(i[s].getAttribute("gn-vid")) ? (S.setDisabledAttribute(null, i[s], !0),
                    S.setCheckedAttribute(null, i[s], !0)) : S.setCheckedAttribute(null, i[s], o),
                    A.PCShowConsentLabels && (i[s].parentElement.querySelector(".ot-label-status").innerHTML = o ? A.PCActiveText : A.PCInactiveText);
            o ? "googleven" === t && A.UseGoogleVendors ? Object.keys(I.addtlVendorsList).forEach(function (e) {
                I.addtlVendors.vendorSelected[e] = !0
            }) : "genven" === t && I.showGeneralVendors && A.GeneralVendors.forEach(function (e) {
                I.genVendorsConsent[e.VendorCustomId] = !0
            }) : "googleven" === t ? I.addtlVendors.vendorSelected = {} : (I.genVendorsConsent = {},
                I.alwaysActiveGenVendors.forEach(function (e) {
                    I.genVendorsConsent[e] = !0
                })),
                r && n.classList.remove("line-through")
        }
        ,
        s.prototype.SelectAllVendorConsentHandler = function (e) {
            var t = e.target.checked;
            if (I.showVendorService)
                c.toggleVendors(t);
            else {
                var o = L("#onetrust-pc-sdk #" + b.P_Sel_All_Vendor_Consent_El).el[0]
                    , n = o.classList.contains("line-through")
                    , r = L(b.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-checkbox-handler').el
                    , i = {};
                I.vendors.selectedVendors.map(function (e, t) {
                    i[e.split(":")[0]] = t
                });
                for (var s = 0; s < r.length; s++) {
                    S.setCheckedAttribute(null, r[s], t),
                        A.PCShowConsentLabels && (r[s].parentElement.querySelector(".ot-label-status").innerHTML = t ? A.PCActiveText : A.PCInactiveText);
                    var a = r[s].getAttribute("vendorid")
                        , l = i[a];
                    void 0 === l && (l = a),
                        I.vendors.selectedVendors[l] = a + ":" + t
                }
                n && o.classList.remove("line-through")
            }
            S.setCheckedAttribute(null, e.target, t)
        }
        ,
        s.prototype.onVendorToggle = function (o, e) {
            var t = I.vendors
                , n = I.addtlVendors
                , r = e === de.LI ? t.selectedLegIntVendors : e === de.AddtlConsent ? [] : t.selectedVendors
                , i = !1
                , s = Number(o);
            r.some(function (e, t) {
                e = e.split(":");
                if (e[0] === o)
                    return s = t,
                        i = "true" === e[1],
                        !0
            }),
                e === de.LI ? (u.triggerGoogleAnalyticsEvent(ko, i ? Uo : jo, t.list.find(function (e) {
                    return e.vendorId === o
                }).vendorName + ": " + P.IdPatterns.Pur + o),
                    t.selectedLegIntVendors[s] = o + ":" + !i,
                    T.legIntSettings.PShowLegIntBtn || G.vendorLegIntToggleEvent()) : e === de.AddtlConsent ? (n.vendorSelected[o] ? delete n.vendorSelected[o] : n.vendorSelected[o] = !0,
                        G.venAdtlSelAllTglEvent()) : (u.triggerGoogleAnalyticsEvent(ko, i ? qo : Mo, t.list.find(function (e) {
                            return e.vendorId === o
                        }).vendorName + ": " + P.IdPatterns.Pur + o),
                            t.selectedVendors[s] = o + ":" + !i,
                            G.vendorsListEvent())
        }
        ,
        s.prototype.onVendorDisclosure = function (o) {
            return F(this, void 0, void 0, function () {
                var t;
                return M(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (t = I.discVendors)[o].isFetched ? [3, 2] : (t[o].isFetched = !0,
                                [4, Nt.getStorageDisclosure(t[o].disclosureUrl)]);
                        case 1:
                            t = e.sent(),
                                G.updateVendorDisclosure(o, t),
                                e.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }
        ,
        s.prototype.tglFltrOptionHandler = function (e) {
            e && e.target.classList.contains("category-filter-handler") && S.setCheckedAttribute(null, e.target, e.target.checked)
        }
        ,
        s.prototype.selectVendorsGroupHandler = function (e) {
            B.toggleAccordionStatus(e);
            var t = e.target.getAttribute("leg-vendorid")
                , o = e.target.getAttribute("vendorid")
                , n = e.target.getAttribute("addtl-vid")
                , r = e.target.getAttribute("disc-vid");
            t ? B.onVendorToggle(t, de.LI) : o ? B.onVendorToggle(o, de.Consent) : n && B.onVendorToggle(n, de.AddtlConsent),
                r && B.onVendorDisclosure(r),
                (t || o || n) && (S.setCheckedAttribute(null, e.target, e.target.checked),
                    A.PCShowConsentLabels) && (e.target.parentElement.querySelector(".ot-label-status").innerHTML = e.target.checked ? A.PCActiveText : A.PCInactiveText)
        }
        ,
        s.prototype.toggleVendorFiltersHandler = function () {
            var e, t = !1, o = L("#onetrust-pc-sdk " + b.P_Fltr_Modal).el[0];
            switch (T.pcName) {
                case it:
                case nt:
                case rt:
                case g:
                    (t = "block" === o.style.display) ? B.closeFilter() : (e = L("#onetrust-pc-sdk " + b.P_Triangle).el[0],
                        L(e).attr("style", "display: block;"),
                        L(o).attr("style", "display: block;"),
                        e = Array.prototype.slice.call(o.querySelectorAll("[href], input, button")),
                        vo.setPCFocus(e));
                    break;
                case st:
                    896 < window.innerWidth || 896 < window.screen.height ? d(o, "width: 400px;", !0) : d(o, "height: 100%; width: 100%;"),
                        o.querySelector(".ot-checkbox input").focus();
                    break;
                default:
                    return
            }
            m.isV2Template && !t && (L("#onetrust-pc-sdk").addClass("ot-shw-fltr"),
                L("#onetrust-pc-sdk .ot-fltr-scrlcnt").el[0].scrollTop = 0)
        }
        ,
        s.prototype.clearFiltersHandler = function () {
            B.setAriaLabelforButtonInFilter(A.PCenterFilterClearedAria);
            for (var e = L("#onetrust-pc-sdk " + b.P_Fltr_Modal + " input").el, t = 0; t < e.length; t++)
                S.setCheckedAttribute(null, e[t], !1);
            B.isCookieList ? I.filterByCategories = [] : I.filterByIABCategories = []
        }
        ,
        s.prototype.cancelFilterHandler = function () {
            I.showVendorService ? c.cancelFilter() : B.isCookieList ? hn.cancelHostFilter() : G.cancelVendorFilter(),
                B.closeFilter(),
                L("#onetrust-pc-sdk #filter-btn-handler").focus()
        }
        ,
        s.prototype.applyFilterHandler = function () {
            var e;
            B.setAriaLabelforButtonInFilter(A.PCenterFilterAppliedAria),
                I.showVendorService ? (e = c.getGroupsFilter(),
                    c.filterVendorByGroup(e)) : B.isCookieList ? (e = hn.updateHostFilterList(),
                        G.loadHostList("", e),
                        I.showTrackingTech && B.addEventAdditionalTechnologies()) : (e = G.updateVendorFilterList(),
                            G.loadVendorList("", e)),
                L("" + B.FILTER_COUNT_SELECTOR).text(String(e.length)),
                B.closeFilter(),
                L("#onetrust-pc-sdk #filter-btn-handler").focus()
        }
        ,
        s.prototype.setAriaLabelforButtonInFilter = function (e) {
            var t = I.isPCVisible ? document.querySelector("#onetrust-pc-sdk span[aria-live]") : document.querySelector("#onetrust-banner-sdk span[aria-live]");
            if (!t) {
                (t = document.createElement("span")).classList.add("ot-scrn-rdr"),
                    t.setAttribute("aria-atomic", "true");
                var o = void 0;
                if (I.isPCVisible ? o = document.getElementById(B.pcSDKSelector) : document.getElementById(B.bannerSelector) && (o = document.getElementById(B.bannerSelector)),
                    !o)
                    return;
                o.appendChild(t)
            }
            t.setAttribute("aria-atomic", "true"),
                t.setAttribute("aria-relevant", "additions"),
                t.setAttribute("aria-live", "assertive"),
                t.setAttribute(ht, e),
                B.timeCallback && clearTimeout(B.timeCallback),
                B.timeCallback = setTimeout(function () {
                    B.timeCallback = null,
                        t.setAttribute(ht, "")
                }, 900)
        }
        ,
        s.prototype.setPcListContainerHeight = function () {
            L("#onetrust-pc-sdk " + b.P_Content).el[0].classList.contains("ot-hide") ? d(L("" + B.PC_SELECTOR).el[0], 'height: "";', !0) : setTimeout(function () {
                var e = window.innerHeight;
                768 <= window.innerWidth && 600 <= window.innerHeight && (e = .8 * window.innerHeight),
                    !L("#onetrust-pc-sdk " + b.P_Content).el[0].scrollHeight || L("#onetrust-pc-sdk " + b.P_Content).el[0].scrollHeight >= e ? d(L("" + B.PC_SELECTOR).el[0], "height: " + e + "px;", !0) : d(L("" + B.PC_SELECTOR).el[0], "height: auto;", !0)
            })
        }
        ,
        s.prototype.changeSelectedTab = function (e) {
            var t, o = L("#onetrust-pc-sdk .category-menu-switch-handler"), n = 0, r = L(o.el[0]);
            o.each(function (e, t) {
                L(e).el.classList.contains(b.P_Active_Menu) && (n = t,
                    L(e).el.classList.remove(b.P_Active_Menu),
                    r = L(e))
            }),
                e.keyCode === ae.RightArrow ? t = n + 1 >= o.el.length ? L(o.el[0]) : L(o.el[n + 1]) : e.keyCode === ae.LeftArrow && (t = L(n - 1 < 0 ? o.el[o.el.length - 1] : o.el[n - 1])),
                this.tabMenuToggle(t, r)
        }
        ,
        s.prototype.changeSelectedTabV2 = function (e) {
            var t, o = e.target.parentElement, e = (e.keyCode === ae.RightArrow ? t = o.nextElementSibling || o.parentElement.firstChild : e.keyCode === ae.LeftArrow && (t = o.previousElementSibling || o.parentElement.lastChild),
                t.querySelector(".category-menu-switch-handler"));
            e.focus(),
                this.groupTabClick(e)
        }
        ,
        s.prototype.categoryMenuSwitchHandler = function () {
            for (var t = this, e = L("#onetrust-pc-sdk .category-menu-switch-handler").el, o = 0; o < e.length; o++)
                e[o].addEventListener("click", this.groupTabClick),
                    e[o].addEventListener("keydown", function (e) {
                        if (32 === e.keyCode || "space" === e.code)
                            return t.groupTabClick(e.currentTarget),
                                e.preventDefault(),
                                !1
                    })
        }
        ,
        s.prototype.groupTabClick = function (e) {
            var t = L("#onetrust-pc-sdk " + b.P_Grp_Container).el[0]
                , o = t.querySelector("." + b.P_Active_Menu)
                , e = e.currentTarget || e
                , n = e.getAttribute("aria-controls");
            o.setAttribute("tabindex", -1),
                o.setAttribute("aria-selected", !1),
                o.classList.remove(b.P_Active_Menu),
                t.querySelector(b.P_Desc_Container + ":not(.ot-hide)").classList.add("ot-hide"),
                t.querySelector("#" + n).classList.remove("ot-hide"),
                e.setAttribute("tabindex", 0),
                e.setAttribute("aria-selected", !0),
                e.classList.add(b.P_Active_Menu)
        }
        ,
        s.prototype.tabMenuToggle = function (e, t) {
            e.el.setAttribute("tabindex", 0),
                e.el.setAttribute("aria-selected", !0),
                t.el.setAttribute("tabindex", -1),
                t.el.setAttribute("aria-selected", !1),
                e.focus(),
                t.el.parentElement.parentElement.querySelector("" + b.P_Desc_Container).classList.add("ot-hide"),
                e.el.parentElement.parentElement.querySelector("" + b.P_Desc_Container).classList.remove("ot-hide"),
                e.el.classList.add(b.P_Active_Menu)
        }
        ,
        s.prototype.closeFilter = function (e) {
            var t, o;
            void 0 === e && (e = !0),
                rn.checkIfPcSdkContainerExist() || (t = L("#onetrust-pc-sdk " + b.P_Fltr_Modal).el[0],
                    o = L("#onetrust-pc-sdk " + b.P_Triangle).el[0],
                    T.pcName === st ? 896 < window.innerWidth || 896 < window.screen.height ? d(t, "width: 0;", !0) : d(t, "height: 0;") : d(t, "display: none;"),
                    o && L(o).attr("style", "display: none;"),
                    m.isV2Template && L("#onetrust-pc-sdk").removeClass("ot-shw-fltr"),
                    e && vo.setFirstAndLast(vo.getPCElements()))
        }
        ,
        s.prototype.setBackButtonFocus = function () {
            L("#onetrust-pc-sdk .back-btn-handler").el[0].focus()
        }
        ,
        s.prototype.setSearchInputFocus = function () {
            L(B.VENDOR_SEARCH_SELECTOR).el[0].focus()
        }
        ,
        s.prototype.setCenterLayoutFooterHeight = function () {
            var e = B.pc;
            if (B.setMainContentHeight(),
                T.pcName === g && e) {
                var t = e.querySelectorAll("" + b.P_Desc_Container)
                    , o = e.querySelectorAll("li .category-menu-switch-handler");
                if (!e.querySelector(".category-menu-switch-handler + " + b.P_Desc_Container) && window.innerWidth < 640)
                    for (var n = 0; n < t.length; n++)
                        o[n].insertAdjacentElement("afterend", t[n]);
                else
                    e.querySelector(".category-menu-switch-handler + " + b.P_Desc_Container) && 640 < window.innerWidth && L(e.querySelector(".ot-tab-desc")).append(t)
            }
        }
        ,
        s.prototype.setMainContentHeight = function () {
            var e = this.pc
                , t = e.querySelector(".ot-pc-footer")
                , o = e.querySelector(".ot-pc-header")
                , n = e.querySelectorAll(".ot-pc-footer button")
                , r = n[n.length - 1]
                , i = A.PCLayout
                , r = (e.classList.remove("ot-ftr-stacked"),
                    n[0] && r && 1 < Math.abs(n[0].offsetTop - r.offsetTop) && e.classList.add("ot-ftr-stacked"),
                    A.PCTemplateUpgrade || i.Center || (n = e.clientHeight - t.clientHeight - o.clientHeight - 3,
                        A.PCTemplateUpgrade && !i.Tab && A.PCenterVendorListDescText && (n = n - ((r = L("#vdr-lst-dsc").el).length && r[0].clientHeight) - 10),
                        d(e.querySelector("" + b.P_Vendor_List), "height: " + n + "px;", !0)),
                    e.querySelector("" + b.P_Content));
            A.PCTemplateUpgrade && i.Center ? (n = 600 < window.innerWidth && 475 < window.innerHeight,
                !this.pcBodyHeight && n && (this.pcBodyHeight = r.scrollHeight),
                n ? (i = this.pcBodyHeight + t.clientHeight + o.clientHeight + 20) > .8 * window.innerHeight || 0 === this.pcBodyHeight ? d(e, "height: " + .8 * window.innerHeight + "px;", !0) : d(e, "height: " + i + "px;", !0) : d(e, "height: 100%;", !0)) : d(e.querySelector("" + b.P_Content), "height: " + (e.clientHeight - t.clientHeight - o.clientHeight - 3) + "px;", !0)
        }
        ,
        s.prototype.allowAllVisible = function (e) {
            e !== this.allowVisible && A.PCLayout.Tab && A.PCTemplateUpgrade && (this.pc && this.setMainContentHeight(),
                this.allowVisible = e)
        }
        ,
        s.prototype.restorePc = function () {
            I.pcLayer === se.CookieList ? (B.hideCategoryContainer(!0),
                G.loadHostList("", I.filterByCategories),
                I.showTrackingTech && B.addEventAdditionalTechnologies(),
                L("" + B.FILTER_COUNT_SELECTOR).text(I.filterByCategories.length.toString())) : I.pcLayer === se.VendorList && (B.hideCategoryContainer(!1),
                    B.setVendorContent()),
                I.isPCVisible = !1,
                B.toggleInfoDisplay(),
                I.pcLayer !== se.VendorList && I.pcLayer !== se.CookieList || (hn.updateFilterSelection(I.pcLayer === se.CookieList),
                    B.setBackButtonFocus(),
                    vo.setPCFocus(vo.getPCElements()))
        }
        ,
        s.prototype.toggleInfoDisplay = function () {
            return F(this, void 0, void 0, function () {
                var t;
                return M(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return w.csBtnGroup && (L(B.fltgBtnSltr).addClass("ot-pc-open"),
                                B.otGuardLogoPromise.then(function () {
                                    A.cookiePersistentLogo.includes("ot_guard_logo.svg") && L(B.fltgBtnFSltr).attr(Ct, "true")
                                }),
                                L(B.fltgBtnBSltr).attr(Ct, "")),
                                [4, B.fetchAndSetupPC()];
                        case 1:
                            return e.sent(),
                                T.pcName === rt && this.setPcListContainerHeight(),
                                void 0 !== I.pcLayer && I.pcLayer !== se.Banner || (I.pcLayer = se.PrefCenterHome),
                                t = L("" + B.PC_SELECTOR).el[0],
                                L(".onetrust-pc-dark-filter").el[0].removeAttribute("style"),
                                t.removeAttribute("style"),
                                I.isPCVisible || (rn.showConsentNotice(),
                                    I.isPCVisible = !0,
                                    A.PCTemplateUpgrade && (this.pc = t,
                                        t = t.querySelector("#accept-recommended-btn-handler"),
                                        this.allowVisible = t && 0 < t.clientHeight,
                                        this.setCenterLayoutFooterHeight(),
                                        B.getResizeElement().addEventListener("resize", B.setCenterLayoutFooterHeight),
                                        window.addEventListener("resize", B.setCenterLayoutFooterHeight))),
                                window.dispatchEvent(new CustomEvent("OneTrustPCLoaded", {
                                    OneTrustPCLoaded: "yes"
                                })),
                                B.captureInitialConsent(),
                                [2]
                    }
                })
            })
        }
        ,
        s.prototype.close = function (e) {
            A.BCloseButtonType === be.Link ? I.bannerCloseSource = ee.ContinueWithoutAcceptingButton : I.bannerCloseSource = ee.BannerCloseButton,
                h.bannerCloseButtonHandler(e),
                B.getResizeElement().removeEventListener("resize", B.setCenterLayoutFooterHeight),
                window.removeEventListener("resize", B.setCenterLayoutFooterHeight)
        }
        ,
        s.prototype.closePreferenceCenter = function (e) {
            e && e.preventDefault(),
                window.location.href = "http://otsdk//consentChanged"
        }
        ,
        s.prototype.initializeAlartHtmlAndHandler = function () {
            I.skipAddingHTML = 0 < L("#onetrust-banner-sdk").length,
                I.skipAddingHTML || Kn.insertAlertHtml(),
                this.initialiseAlertHandlers()
        }
        ,
        s.prototype.initialiseAlertHandlers = function () {
            var e = this
                , t = (Kn.showBanner(),
                    A.ForceConsent && !y.isCookiePolicyPage(A.AlertNoticeText) && L(".onetrust-pc-dark-filter").removeClass("ot-hide").css("z-index:2147483645;"),
                    A.OnClickCloseBanner && document.body.addEventListener("click", h.bodyClickEvent),
                    A.ScrollCloseBanner && (window.addEventListener("scroll", h.scrollCloseBanner),
                        L(document).on("click", ".onetrust-close-btn-handler", h.rmScrollAndClickBodyEvents),
                        L(document).on("click", "#onetrust-accept-btn-handler", h.rmScrollAndClickBodyEvents),
                        L(document).on("click", "#accept-recommended-btn-handler", h.rmScrollAndClickBodyEvents)),
                    this.addEventListnerForVendorsList(),
                    A.FloatingRoundedIcon && L("#onetrust-banner-sdk #onetrust-cookie-btn").on("click", function (e) {
                        I.pcSource = e.currentTarget,
                            B.showCookieSettingsHandler(e)
                    }),
                    L("#onetrust-banner-sdk .onetrust-close-btn-handler, #onetrust-banner-sdk .ot-bnr-save-handler").on("click", B.bannerCloseButtonHandler),
                    L("#onetrust-banner-sdk #onetrust-pc-btn-handler").on("click", B.showCookieSettingsHandler),
                    L("#onetrust-banner-sdk #onetrust-accept-btn-handler").on("click", h.allowAllEventHandler.bind(this, !1)),
                    L("#onetrust-banner-sdk #onetrust-reject-all-handler").on("click", h.rejectAllEventHandler.bind(this, !1)),
                    L("#onetrust-banner-sdk .banner-option-input").on("click", T.bannerName === Ze ? B.toggleBannerOptions : B.toggleAccordionStatus),
                    L("#onetrust-banner-sdk .ot-gv-list-handler").on("click", function (t) {
                        return F(e, void 0, void 0, function () {
                            return M(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return I.cookieListType = ye.GenVen,
                                            [4, B.fetchAndSetupPC()];
                                    case 1:
                                        return e.sent(),
                                            B.loadCookieList(t.target),
                                            B.showCookieSettingsHandler(t),
                                            [2]
                                }
                            })
                        })
                    }),
                    L("#onetrust-banner-sdk .category-switch-handler").on("click", B.toggleBannerCategory),
                    document.getElementById("onetrust-banner-sdk"));
            A.ForceConsent && t && "none" !== window.getComputedStyle(t).display && L(document).on("keydown", B.shiftBannerFocus),
                L("#onetrust-banner-sdk").on("keydown", function (e) {
                    32 !== e.keyCode && "Space" !== e.code && 13 !== e.keyCode && "Enter" !== e.code || y.findUserType(e)
                })
        }
        ,
        s.prototype.addEventListnerForVendorsList = function () {
            (A.IsIabEnabled || A.UseGoogleVendors || I.showGeneralVendors) && !I.showVendorService && L(document).on("click", ".onetrust-vendors-list-handler", B.showAllVendors)
        }
        ,
        s.prototype.getResizeElement = function () {
            var e = document.querySelector("#onetrust-pc-sdk .ot-text-resize");
            return e ? e.contentWindow || e : document
        }
        ,
        s.prototype.insertCookieSettingText = function (e) {
            void 0 === e && (e = !1);
            for (var t = A.CookieSettingButtonText, o = L(".ot-sdk-show-settings").el, n = L(".optanon-toggle-display").el, r = 0; r < o.length; r++)
                L(o[r]).text(t),
                    L(n[r]).text(t);
            e ? (null != (e = document.querySelector(".ot-sdk-show-settings")) && e.addEventListener("click", this.cookiesSettingsBoundListener),
                null != (e = document.querySelector(".optanon-toggle-display")) && e.addEventListener("click", this.cookiesSettingsBoundListener)) : B.initCookieSettingHandlers()
        }
        ,
        s.prototype.genVendorToggled = function (e) {
            var t = e.target.getAttribute("gn-vid")
                , o = (go.updateGenVendorStatus(t, e.target.checked),
                    A.GeneralVendors.find(function (e) {
                        return e.VendorCustomId === t
                    }).Name);
            u.triggerGoogleAnalyticsEvent(ko, e.target.checked ? xo : No, o + ": VEN_" + t),
                G.genVenSelectAllTglEvent()
        }
        ,
        s.prototype.genVendorDetails = function (e) {
            B.toggleAccordionStatus(e)
        }
        ,
        s.prototype.confirmPC = function (e) {
            var t = p.isAlertBoxClosedAndValid()
                , o = (A.NoBanner && A.ShowPreferenceCenterCloseButton && !t && h.bannerCloseButtonHandler(),
                    y.isBannerVisible());
            !m.moduleInitializer.MobileSDK || !t && o || B.closePreferenceCenter(e)
        }
        ,
        s.prototype.captureInitialConsent = function () {
            I.initialGroupsConsent = JSON.parse(JSON.stringify(I.groupsConsent)),
                I.initialHostConsent = JSON.parse(JSON.stringify(I.hostsConsent)),
                I.showGeneralVendors && (I.initialGenVendorsConsent = JSON.parse(JSON.stringify(I.genVendorsConsent))),
                A.IsIabEnabled && (I.initialOneTrustIABConsent = JSON.parse(JSON.stringify(I.oneTrustIABConsent)),
                    I.initialVendors = JSON.parse(JSON.stringify(I.vendors)),
                    I.initialVendors.vendorTemplate = I.vendors.vendorTemplate),
                A.UseGoogleVendors && (I.initialAddtlVendorsList = JSON.parse(JSON.stringify(I.addtlVendorsList)),
                    I.initialAddtlVendors = JSON.parse(JSON.stringify(I.addtlVendors))),
                I.vsIsActiveAndOptOut && (I.initialVendorsServiceConsent = new Map(I.vsConsent))
        }
        ;
    var B, Qn = s;
    function s() {
        var t = this;
        this.allowVisible = !1,
            this.fltgBtnBackBtn = ".ot-floating-button__back button",
            this.fltgBtnBSltr = ".ot-floating-button__back svg",
            this.fltgBtnFrontBtn = ".ot-floating-button__front button",
            this.fltgBtnFSltr = ".ot-floating-button__front svg",
            this.fltgBtnSltr = "#ot-sdk-btn-floating",
            this.PC_SELECTOR = "#onetrust-pc-sdk",
            this.FILTER_COUNT_SELECTOR = "#onetrust-pc-sdk #filter-count",
            this.VENDOR_SEARCH_SELECTOR = "#onetrust-pc-sdk #vendor-search-handler",
            this.isCookieList = !1,
            this.pc = null,
            this.currentSearchInput = "",
            this.pcLinkSource = null,
            this.pcSDKSelector = "onetrust-pc-sdk",
            this.bannerSelector = "onetrust-banner-sdk",
            this.otGuardLogoResolve = null,
            this.otGuardLogoPromise = new Promise(function (e) {
                t.otGuardLogoResolve = e
            }
            ),
            this.closePCWhenEscPressed = function (e) {
                var t = document.getElementById(B.pcSDKSelector)
                    , o = "none" !== window.getComputedStyle(t).display;
                27 === e.keyCode && t && o && ("block" === (t = L("#onetrust-pc-sdk " + b.P_Fltr_Modal).el[0]).style.display || "0px" < t.style.width ? (B.closeFilter(),
                    L("#onetrust-pc-sdk #filter-btn-handler").focus()) : A.NoBanner && !A.ShowPreferenceCenterCloseButton || B.hideCookieSettingsHandler(),
                    B.confirmPC()),
                    (o && 32 === e.keyCode || "Space" === e.code || 13 === e.keyCode || "Enter" === e.code) && y.findUserType(e)
            }
            ,
            this.showCookieSettingsHandler = function (n) {
                return F(t, void 0, void 0, function () {
                    var t, o;
                    return M(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return (o = document.getElementById(B.pcSDKSelector),
                                    o && "none" !== window.getComputedStyle(o).getPropertyValue("display")) ? [2] : (L(document).on("keydown", B.closePCWhenEscPressed),
                                        n && n.stopPropagation(),
                                        n && n.target && (o = n.target.className,
                                            t = "onetrust-pc-btn-handler" === n.target.id,
                                            o = "ot-sdk-show-settings" === o,
                                            (t || o) && (o = t ? Io : Lo,
                                                u.triggerGoogleAnalyticsEvent(ko, o)),
                                            I.pcSource = n.target),
                                        [4, B.toggleInfoDisplay()]);
                            case 1:
                                return e.sent(),
                                    [2, !1]
                        }
                    })
                })
            }
            ,
            this.cookiesSettingsBoundListener = this.showCookieSettingsHandler.bind(this),
            this.backBtnHandler = function () {
                return I.pcLayer === se.IabIllustrations ? qn.hideUI() : (I.showVendorService && c.hideVendorList(),
                    I.showTrackingTech && (B.currentSearchInput = "")),
                    h.hideVendorsList(),
                    T.pcName === rt && (L("#onetrust-pc-sdk " + b.P_Content).removeClass("ot-hide"),
                        L("" + B.PC_SELECTOR).el[0].removeAttribute("style"),
                        t.setPcListContainerHeight()),
                    L("" + B.FILTER_COUNT_SELECTOR).text("0"),
                    L(B.VENDOR_SEARCH_SELECTOR).length && (L(B.VENDOR_SEARCH_SELECTOR).el[0].value = ""),
                    I.currentGlobalFilteredList = [],
                    I.filterByCategories = [],
                    I.filterByIABCategories = [],
                    I.vendors.searchParam = "",
                    B.closeFilter(),
                    I.pcLayer = se.PrefCenterHome,
                    t.pcLinkSource ? (t.pcLinkSource.focus(),
                        t.pcLinkSource = null) : vo.setPCFocus(vo.getPCElements()),
                    !1
            }
            ,
            this.bannerCloseBoundListener = this.bannerCloseButtonHandler.bind(this),
            this.toggleGroupORVendorHandler = function (e) {
                var t = e.currentTarget;
                t.dataset.otVsId ? B.toggleVendorServiceHandler.bind(this)(e) : t.dataset.optanongroupid && B.toggleV2Category.bind(this)()
            }
            ,
            this.toggleVendorFromListHandler = function (e) {
                var e = e.currentTarget
                    , t = e.checked
                    , o = e.dataset.otVsId
                    , e = e.dataset.optanongroupid
                    , n = document.getElementById("ot-vendor-id-" + o);
                V.toggleVendorService(e, o, t, n)
            }
            ,
            this.toggleVendorServiceHandler = function (e) {
                var e = e.currentTarget
                    , t = e.checked
                    , o = e.dataset.otVsId
                    , n = e.dataset.optanongroupid
                    , n = (V.toggleVendorService(n, o, t, e),
                        f.getVSById(o));
                B.setAriaLabelforButtonInFilter(n.ServiceName)
            }
            ,
            this.toggleV2Category = function (e, t, o, n) {
                t || (r = this.getAttribute("data-optanongroupid"),
                    i = "function" == typeof this.getAttribute,
                    a = S.findIndex(I.dataGroupState, function (e) {
                        return i && e.CustomGroupId === r
                    }),
                    t = I.dataGroupState[a]),
                    void 0 === o && (o = L(this).is(":checked")),
                    A.ChoicesBanner && S.setCheckedAttribute("#ot-bnr-grp-id-" + t.CustomGroupId, null, o),
                    n ? document.querySelector("#ot-group-id-" + n) && (S.setCheckedAttribute("#ot-group-id-" + n, null, o),
                        s = document.querySelector("#ot-group-id-" + n)) : (S.setCheckedAttribute(null, s = this, o),
                            a = s.parentElement.querySelector(".ot-switch-nob"),
                            m.fp.CookieV2VendorServiceScript ? A.PCCategoryStyle === ke.Toggle && a && a.setAttribute("aria-checked", o) : A.PCTemplateUpgrade && a && a.setAttribute("aria-checked", o)),
                    A.PCShowConsentLabels && (s.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? A.PCActiveText : A.PCInactiveText);
                var r, i, s, a, n = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
                B.setAriaLabelforButtonInFilter(t.GroupName),
                    B.updateGroupToggles(t, o, n)
            }
            ,
            this.toggleBannerCategory = function () {
                var t = this
                    , e = S.findIndex(I.dataGroupState, function (e) {
                        return "function" == typeof t.getAttribute && e.CustomGroupId === t.getAttribute("data-optanongroupid")
                    })
                    , e = I.dataGroupState[e]
                    , o = L(t).is(":checked");
                B.toggleV2Category(null, e, o, e.CustomGroupId)
            }
            ,
            this.shiftBannerFocus = function (e) {
                var t = document.getElementById(B.pcSDKSelector)
                    , o = !1;
                t && (o = "none" !== window.getComputedStyle(t).display),
                    "Tab" !== e.code || o || vo.handleBannerFocus(e, e.shiftKey)
            }
            ,
            this.toggleSubCategory = function (e, t, o, n) {
                t = t || this.getAttribute("data-optanongroupid");
                var r, t = f.getGroupById(t), n = (void 0 === o && (o = L(this).is(":checked")),
                    n ? (S.setCheckedAttribute("#ot-sub-group-id-" + n, null, o),
                        r = document.querySelector("#ot-sub-group-id-" + n)) : S.setCheckedAttribute(null, r = this, o),
                    A.PCShowConsentLabels && (r.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? A.PCActiveText : A.PCInactiveText),
                    this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out"));
                B.setAriaLabelforButtonInFilter(t.GroupName),
                    B.updateSubGroupToggles(t, o, n),
                    V.setVendorStateByGroup(t, o)
            }
    }
    er.prototype.initialiseLandingPath = function () {
        var e = p.needReconsent();
        ln.isLandingPage() ? ln.setLandingPathParam(location.href) : e && !p.awaitingReconsent() ? (ln.setLandingPathParam(location.href),
            k.writeCookieParam(v.OPTANON_CONSENT, De.AWAITING_RE_CONSENT, !0)) : (e || k.writeCookieParam(v.OPTANON_CONSENT, De.AWAITING_RE_CONSENT, !1),
                ln.setLandingPathParam(De.NOT_LANDING_PAGE),
                T.isSoftOptInMode && !m.moduleInitializer.MobileSDK && u.setAlertBoxClosed(!0),
                A.NextPageCloseBanner && A.ShowAlertNotice && h.nextPageCloseBanner())
    }
        ;
    var $n, Zn = er;
    function er() { }
    nr.prototype.insertCookiePolicyHtml = function () {
        if (L(this.ONETRUST_COOKIE_POLICY).length) {
            var e, t, o, n = document.createDocumentFragment(), r = (w.cookieListGroup && (t = A.CookiesV2NewCookiePolicy ? ".ot-sdk-cookie-policy" : "#ot-sdk-cookie-policy-v2",
                o = document.createElement("div"),
                L(o).html(w.cookieListGroup.html),
                o.removeChild(o.querySelector(t)),
                e = o.querySelector(".ot-sdk-cookie-policy"),
                A.useRTL) && L(e).attr("dir", "rtl"),
                e.querySelector("#cookie-policy-title").innerHTML = A.CookieListTitle || "",
                e.querySelector("#cookie-policy-description").innerHTML = A.CookieListDescription || "",
                e.querySelector("section")), i = e.querySelector("section tbody tr"), s = null, a = null;
            A.CookiesV2NewCookiePolicy || (s = e.querySelector("section.subgroup"),
                a = e.querySelector("section.subgroup tbody tr"),
                L(e).el.removeChild(e.querySelector("section.subgroup"))),
                L(e).el.removeChild(e.querySelector("section")),
                !L(this.COOKIE_POLICY_SELECTOR).length && L(this.OPTANON_POLICY_SELECTOR).length ? L(this.OPTANON_POLICY_SELECTOR).append('<div id="ot-sdk-cookie-policy"></div>') : (L(this.COOKIE_POLICY_SELECTOR).html(""),
                    L(this.OPTANON_POLICY_SELECTOR).html(""));
            for (var l = 0, c = A.Groups; l < c.length; l++) {
                var d = c[l]
                    , p = {
                        json: A,
                        group: d,
                        sectionTemplate: r,
                        tableRowTemplate: i,
                        cookieList: e,
                        fragment: n
                    };
                if (A.CookiesV2NewCookiePolicy)
                    this.insertGroupHTMLV2(p);
                else if (this.insertGroupHTML(p),
                    d.ShowSubgroup)
                    for (var u = 0, g = d.SubGroups; u < g.length; u++) {
                        var h = g[u]
                            , h = {
                                json: A,
                                group: h,
                                sectionTemplate: s,
                                tableRowTemplate: a,
                                cookieList: e,
                                fragment: n
                            };
                        this.insertGroupHTML(h)
                    }
            }
        }
    }
        ,
        nr.prototype.insertGroupHTMLV2 = function (e) {
            function t(e) {
                return c.querySelector(e)
            }
            var o, n = this, r = e.json, i = e.group, s = e.sectionTemplate, a = e.tableRowTemplate, l = e.cookieList, e = e.fragment, c = s.cloneNode(!0), s = i.SubGroups, d = (L(t("tbody")).html(""),
                i.Hosts.slice()), p = i.FirstPartyCookies.slice(), u = d.length || p.length ? i.GroupName : "", s = (i.ShowSubgroup && s.length ? (o = c.querySelector("section.ot-sdk-subgroup ul li"),
                    s.forEach(function (e) {
                        var t = o.cloneNode(!0);
                        d = d.concat(e.Hosts),
                            p = p.concat(e.FirstPartyCookies),
                            (e.Hosts.length || e.FirstPartyCookies.length) && (u += "," + e.GroupName),
                            L(t.querySelector(".ot-sdk-cookie-policy-group")).html(e.GroupName),
                            L(t.querySelector(".ot-sdk-cookie-policy-group-desc")).html(n.groupsClass.safeFormattedGroupDescription(e)),
                            L(o.parentElement).append(t)
                    }),
                    c.querySelector("section.ot-sdk-subgroup ul").removeChild(o)) : c.removeChild(c.querySelector("section.ot-sdk-subgroup")),
                    A.TTLGroupByTech && (this.setCookieListHeaderOrder(c),
                        this.setCookieListBodyOrder(a)),
                    r.IsLifespanEnabled ? L(t("th.ot-life-span")).el.innerHTML = r.LifespanText : L(t("thead tr")).el.removeChild(L(t("th.ot-life-span")).el),
                    L(t("th.ot-cookies")).el.innerHTML = r.CookiesText,
                    L(t("th.ot-host")).el.innerHTML = r.CategoriesText,
                    L(t("th.ot-cookies-type")).el.innerHTML = r.CookiesUsedText,
                    L(t("th.ot-host-description")).el.innerHTML = r.CookiesDescText,
                    this.transformFirstPartyCookies(p, d, i)), g = !1;
            (g = A.TTLGroupByTech ? A.TTLShowTechDesc : s.some(function (e) {
                return e.Description
            })) || L(t("thead tr")).el.removeChild(L(t("th.ot-host-description")).el),
                L(t(".ot-sdk-cookie-policy-group")).html(i.GroupName),
                L(t(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(i)),
                A.TTLGroupByTech ? this.insertCookieLineByLine({
                    json: r,
                    hosts: s,
                    tableRowTemplate: a,
                    showHostDescription: g,
                    st: t
                }) : this.insertHostHtmlV2({
                    json: r,
                    hosts: s,
                    tableRowTemplate: a,
                    showHostDescription: g,
                    st: t
                }),
                0 === s.length ? c.removeChild(c.querySelector("table")) : L(t("caption")).el.innerHTML = u,
                L(l).append(c),
                L(e).append(l),
                L(this.COOKIE_POLICY_SELECTOR).append(e)
        }
        ,
        nr.prototype.insertHostHtmlV2 = function (e) {
            for (var l, c = e.json, t = e.hosts, d = e.tableRowTemplate, p = e.showHostDescription, u = e.st, g = this, o = 0, n = t; o < n.length; o++)
                !function (e) {
                    for (var t = d.cloneNode(!0), o = function (e) {
                        return t.querySelector(e)
                    }, n = (g.clearCookieRowElement(o),
                        []), r = [], i = 0, s = e.Cookies; i < s.length; i++) {
                        var a = s[i]
                            , a = ((l = a).IsSession ? n.push(c.LifespanTypeText) : n.push(y.getDuration(l)),
                                l.Name);
                        e.Type && (a = '\n                    <a href="https://cookiepedia.co.uk/cookies/' + l.Name + '" \n                        rel="noopener" target="_blank" aria-label="' + l.Name + " " + A.NewWinTxt + '">\n                        ' + l.Name + "\n                    </a>"),
                            r.push(a)
                    }
                    g.setDataLabelAttribute(o, c),
                        g.createCookieRowHtmlElement({
                            host: e,
                            subGroupCookie: l,
                            trt: o,
                            json: c,
                            lifespanText: n.join(", "),
                            hostType: r.join(", ")
                        }),
                        g.removeLifeSpanOrHostDescription(c, p, t, o),
                        L(u("tbody")).append(t)
                }(n[o])
        }
        ,
        nr.prototype.insertGroupHTML = function (e) {
            function t(e) {
                return l.querySelector(e)
            }
            var o, n = e.json, r = e.group, i = e.sectionTemplate, s = e.tableRowTemplate, a = e.cookieList, e = e.fragment, l = i.cloneNode(!0), i = (L(t("caption")).el.innerHTML = r.GroupName,
                L(t("tbody")).html(""),
                L(t("thead tr")),
                n.IsLifespanEnabled ? L(t("th.life-span")).el.innerHTML = n.LifespanText : L(t("thead tr")).el.removeChild(L(t("th.life-span")).el),
                L(t("th.cookies")).el.innerHTML = n.CookiesText,
                L(t("th.host")).el.innerHTML = n.CategoriesText,
                !1);
            if (r.Hosts.some(function (e) {
                return e.description
            }) ? i = !0 : L(t("thead tr")).el.removeChild(L(t("th.host-description")).el),
                L(t(".ot-sdk-cookie-policy-group")).html(r.GroupName),
                L(t(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(r)),
                0 < r.FirstPartyCookies.length) {
                L(t(".cookies-used-header")).html(n.CookiesUsedText),
                    L(t(".cookies-list")).html("");
                for (var c = 0; c < r.FirstPartyCookies.length; c++)
                    o = r.FirstPartyCookies[c],
                        L(t(".cookies-list")).append("<li> " + y.getCookieLabel(o, n.AddLinksToCookiepedia) + " <li>")
            } else
                l.removeChild(t(".cookies-used-header")),
                    l.removeChild(t(".cookies-list"));
            this.insertHostHtmlV1({
                json: n,
                hosts: r.Hosts,
                tableRowTemplate: s,
                showHostDescription: i,
                st: t
            }),
                L(a).append(l),
                L(e).append(a),
                L(this.COOKIE_POLICY_SELECTOR).append(e)
        }
        ,
        nr.prototype.insertHostHtmlV1 = function (e) {
            for (var l = e.json, t = e.hosts, c = e.tableRowTemplate, d = e.showHostDescription, p = e.st, o = 0, n = t; o < n.length; o++)
                !function (e) {
                    for (var t = c.cloneNode(!0), o = function (e) {
                        return t.querySelector(e)
                    }, n = (L(o(".cookies-td ul")).html(""),
                        L(o(".life-span-td ul")).html(""),
                        L(o(".host-td")).html(""),
                        L(o(".host-description-td")).html('<span class="ot-mobile-border"></span><p>' + e.Description + "</p> "),
                        0), r = 0, i = e.Cookies; r < i.length; r++) {
                        var s = i[r]
                            , a = ""
                            , a = s.IsSession ? l.LifespanTypeText : 0 === s.Length ? "<1 " + l.LifespanDurationText || l.PCenterVendorListLifespanDays : s.Length + " " + l.LifespanDurationText || l.PCenterVendorListLifespanDays
                            , a = l.IsLifespanEnabled ? "&nbsp;(" + a + ")" : "";
                        L(o(".cookies-td ul")).append("<li> " + s.Name + " " + a + " </li>"),
                            l.IsLifespanEnabled && (a = s.Length ? s.Length + " days" : "N/A",
                                L(o(".life-span-td ul")).append("<li>" + a + "</li>")),
                            0 === n && (L(o(".host-td")).append('<span class="ot-mobile-border"></span>'),
                                L(o(".host-td")).append('<a href="https://cookiepedia.co.uk/host/' + s.Host + '" rel="noopener" target="_blank"\n                        aria-label="' + (e.DisplayName || e.HostName) + " " + A.NewWinTxt + '">' + (e.DisplayName || e.HostName) + "</a>")),
                            n++
                    }
                    d || t.removeChild(o("td.host-description-td")),
                        L(p("tbody")).append(t)
                }(n[o]);
            0 === t.length && L(p("table")).el.removeChild(L(p("thead")).el)
        }
        ,
        nr.prototype.transformFirstPartyCookies = function (e, t, o) {
            var n = this
                , r = t.slice()
                , t = (e.forEach(function (e) {
                    n.populateHostGroup(e, r, A.firstPartyTxt)
                }),
                    o.GeneralVendorsIds)
                , e = (this.populateGenVendor(t, o, r),
                    o.SubGroups || []);
            return e.length && e.forEach(function (e) {
                var t = e.GeneralVendorsIds;
                n.populateGenVendor(t, e, r)
            }),
                r
        }
        ,
        nr.prototype.populateGenVendor = function (e, o, n) {
            var r = this;
            e.length && e.forEach(function (t) {
                var e = A.GeneralVendors.find(function (e) {
                    return e.VendorCustomId === t
                });
                e.Cookies.length && e.Cookies.forEach(function (e) {
                    var t;
                    e.category === o.GroupName && (t = e.isThirdParty ? "" : A.firstPartyTxt,
                        r.populateHostGroup(e, n, t))
                })
            })
        }
        ,
        nr.prototype.populateHostGroup = function (t, e, o) {
            e.some(function (e) {
                if (e.HostName === t.Host && e.Type === o)
                    return e.Cookies.push(t),
                        !0
            }) || e.unshift({
                HostName: t.Host,
                DisplayName: t.Host,
                HostId: "",
                Description: "",
                Type: o,
                Cookies: [t]
            })
        }
        ,
        nr.prototype.insertCookieLineByLine = function (e) {
            for (var t = e.json, o = e.hosts, n = e.tableRowTemplate, r = e.showHostDescription, i = e.st, s = 0, a = o; s < a.length; s++)
                for (var l = a[s], c = 0, d = l.Cookies; c < d.length; c++) {
                    var p = d[c]
                        , u = p.IsSession ? t.LifespanTypeText : y.getDuration(p)
                        , g = p.Name
                        , h = (l.Type && (g = '<a href="https://cookiepedia.co.uk/cookies/' + g + '" \n                        rel="noopener" target="_blank" aria-label="' + g + " " + A.NewWinTxt + '">' + g + "\n                    </a>"),
                            n.cloneNode(!0))
                        , C = this.queryToHtmlElement(h);
                    this.clearCookieRowElement(C),
                        this.createCookieRowHtmlElement({
                            host: l,
                            subGroupCookie: p,
                            trt: C,
                            json: t,
                            lifespanText: u,
                            hostType: g
                        }),
                        this.removeLifeSpanOrHostDescription(t, r, h, C),
                        L(i("tbody")).append(h)
                }
        }
        ,
        nr.prototype.removeLifeSpanOrHostDescription = function (e, t, o, n) {
            e.IsLifespanEnabled || o.removeChild(n("td.ot-life-span-td")),
                t || o.removeChild(n("td.ot-host-description-td"))
        }
        ,
        nr.prototype.createCookieRowHtmlElement = function (e) {
            var t = e.host
                , o = e.subGroupCookie
                , n = e.trt
                , r = e.json
                , i = e.lifespanText
                , e = e.hostType
                , s = ".ot-host-td"
                , r = (this.setDataLabelAttribute(n, r),
                    L(n(".ot-host-description-td")).html('<span class="ot-mobile-border"></span><p>' + o.description + "</p> "),
                    L(n(s)).append('<span class="ot-mobile-border"></span>'),
                    t.DisplayName || t.HostName);
            L(n(s)).append(t.Type ? r : '<a href="https://cookiepedia.co.uk/host/' + o.Host + '" rel="noopener" target="_blank" \n                        aria-label="' + r + " " + A.NewWinTxt + '">\n                        ' + r + "\n                        </a>"),
                n(".ot-cookies-td .ot-cookies-td-content").insertAdjacentHTML("beforeend", e),
                n(".ot-life-span-td .ot-life-span-td-content").innerText = i,
                n(".ot-cookies-type .ot-cookies-type-td-content").innerText = t.Type ? A.firstPartyTxt : A.thirdPartyTxt
        }
        ,
        nr.prototype.setDataLabelAttribute = function (e, t) {
            var o = "data-label";
            e(".ot-host-td").setAttribute(o, t.CategoriesText),
                e(".ot-cookies-td").setAttribute(o, t.CookiesText),
                e(".ot-cookies-type").setAttribute(o, t.CookiesUsedText),
                e(".ot-life-span-td").setAttribute(o, t.LifespanText),
                e(".ot-host-description-td").setAttribute(o, t.CookiesDescText)
        }
        ,
        nr.prototype.clearCookieRowElement = function (e) {
            L(e(".ot-cookies-td span")).text(""),
                L(e(".ot-life-span-td span")).text(""),
                L(e(".ot-cookies-type span")).text(""),
                L(e(".ot-cookies-td .ot-cookies-td-content")).html(""),
                L(e(".ot-host-td")).html("")
        }
        ,
        nr.prototype.setCookieListHeaderOrder = function (e) {
            var e = e.querySelector("section table thead tr")
                , t = e.querySelector("th.ot-host")
                , o = e.querySelector("th.ot-cookies")
                , n = e.querySelector("th.ot-life-span")
                , r = e.querySelector("th.ot-cookies-type")
                , i = e.querySelector("th.ot-host-description");
            e.innerHTML = "",
                e.appendChild(o.cloneNode(!0)),
                e.appendChild(t.cloneNode(!0)),
                e.appendChild(n.cloneNode(!0)),
                e.appendChild(r.cloneNode(!0)),
                e.appendChild(i.cloneNode(!0))
        }
        ,
        nr.prototype.setCookieListBodyOrder = function (e) {
            var t = e.querySelector("td.ot-host-td")
                , o = e.querySelector("td.ot-cookies-td")
                , n = e.querySelector("td.ot-life-span-td")
                , r = e.querySelector("td.ot-cookies-type")
                , i = e.querySelector("td.ot-host-description-td");
            e.innerHTML = "",
                e.appendChild(o.cloneNode(!0)),
                e.appendChild(t.cloneNode(!0)),
                e.appendChild(n.cloneNode(!0)),
                e.appendChild(r.cloneNode(!0)),
                e.appendChild(i.cloneNode(!0))
        }
        ,
        nr.prototype.queryToHtmlElement = function (t) {
            return function (e) {
                return t.querySelector(e)
            }
        }
        ;
    var tr, or = nr;
    function nr() {
        this.groupsClass = E,
            this.COOKIE_POLICY_SELECTOR = "#ot-sdk-cookie-policy",
            this.OPTANON_POLICY_SELECTOR = "#optanon-cookie-policy",
            this.ONETRUST_COOKIE_POLICY = "#ot-sdk-cookie-policy, #optanon-cookie-policy"
    }
    sr.prototype.IsAlertBoxClosedAndValid = function () {
        return p.isAlertBoxClosedAndValid()
    }
        ,
        sr.prototype.LoadBanner = function () {
            u.loadBanner()
        }
        ,
        sr.prototype.Init = function (e) {
            void 0 === e && (e = !1),
                Ne.insertViewPortTag(),
                w.ensureHtmlGroupDataInitialised(),
                pn.updateGtmMacros(!1),
                $n.initialiseLandingPath(),
                e || Yt.initialiseCssReferences()
        }
        ,
        sr.prototype.FetchAndDownloadPC = function () {
            B.fetchAndSetupPC()
        }
        ,
        sr.prototype.ToggleInfoDisplay = function () {
            u.triggerGoogleAnalyticsEvent(ko, _o),
                B.toggleInfoDisplay()
        }
        ,
        sr.prototype.Close = function (e) {
            B.close(e)
        }
        ,
        sr.prototype.AllowAll = function (e) {
            h.allowAllEvent(e)
        }
        ,
        sr.prototype.RejectAll = function (e) {
            h.rejectAllEvent(e)
        }
        ,
        sr.prototype.setDataSubjectIdV2 = function (e, t, o, n) {
            void 0 === t && (t = !1),
                void 0 === o && (o = ""),
                void 0 === n && (n = !1),
                e && e.trim() && (e = e.replace(/ /g, ""),
                    k.writeCookieParam(v.OPTANON_CONSENT, De.CONSENT_ID, e, !0),
                    I.dsParams.isAnonymous = t),
                null != (e = o) && e.trim() && k.writeCookieParam(v.OPTANON_CONSENT, De.IDENTIFIER_TYPE, o.trim()),
                I.isV2Stub || (t = k.readCookieParam(v.OPTANON_CONSENT, "iType"),
                    Jr.createConsentTxn(!1, ge[t], !1, !0, n))
        }
        ,
        sr.prototype.getDataSubjectId = function () {
            return k.readCookieParam(v.OPTANON_CONSENT, De.CONSENT_ID, !0)
        }
        ,
        sr.prototype.synchroniseCookieWithPayload = function (n) {
            var e = k.readCookieParam(v.OPTANON_CONSENT, "groups")
                , e = S.strToArr(e)
                , r = [];
            e.forEach(function (e) {
                var e = e.split(":")
                    , t = f.getGroupById(e[0])
                    , o = S.findIndex(n, function (e) {
                        return e.Id === t.PurposeId
                    })
                    , o = n[o];
                o ? o.TransactionType === He ? (r.push(e[0] + ":1"),
                    t.Parent ? B.toggleSubCategory(null, t.CustomGroupId, !0, t.CustomGroupId) : B.toggleV2Category(null, t, !0, t.CustomGroupId)) : (r.push(e[0] + ":0"),
                        t.Parent ? B.toggleSubCategory(null, t.CustomGroupId, !1, t.CustomGroupId) : B.toggleV2Category(null, t, !1, t.CustomGroupId)) : r.push(e[0] + ":" + e[1])
            }),
                io.writeGrpParam(v.OPTANON_CONSENT, r)
        }
        ,
        sr.prototype.getGeolocationData = function () {
            return I.userLocation
        }
        ,
        sr.prototype.TriggerGoogleAnalyticsEvent = function (e, t, o, n) {
            u.triggerGoogleAnalyticsEvent(e, t, o, n)
        }
        ,
        sr.prototype.ReconsentGroups = function () {
            var n = !1
                , e = k.readCookieParam(v.OPTANON_CONSENT, "groups")
                , r = S.strToArr(e)
                , i = S.strToArr(e.replace(/:0|:1/g, ""))
                , s = !1
                , t = k.readCookieParam(v.OPTANON_CONSENT, "hosts")
                , a = S.strToArr(t)
                , l = S.strToArr(t.replace(/:0|:1/g, ""))
                , c = ["inactive", "inactive landingpage", "do not track"];
            e && (A.Groups.forEach(function (e) {
                q(e.SubGroups, [e]).forEach(function (e) {
                    var t = e.CustomGroupId
                        , o = S.indexOf(i, t);
                    -1 !== o && (e = f.getGrpStatus(e).toLowerCase(),
                        -1 < c.indexOf(e)) && (n = !0,
                            r[o] = t + ("inactive landingpage" === e ? ":1" : ":0"))
                })
            }),
                n) && io.writeGrpParam(v.OPTANON_CONSENT, r),
                t && (A.Groups.forEach(function (e) {
                    q(e.SubGroups, [e]).forEach(function (n) {
                        n.Hosts.forEach(function (e) {
                            var t, o = S.indexOf(l, e.HostId);
                            -1 !== o && (t = f.getGrpStatus(n).toLowerCase(),
                                -1 < c.indexOf(t)) && (s = !0,
                                    a[o] = e.HostId + ("inactive landingpage" === t ? ":1" : ":0"))
                        })
                    })
                }),
                    s) && io.writeHstParam(v.OPTANON_CONSENT, a)
        }
        ,
        sr.prototype.SetAlertBoxClosed = function (e) {
            u.setAlertBoxClosed(e)
        }
        ,
        sr.prototype.GetDomainData = function () {
            return T.pubDomainData
        }
        ,
        sr.prototype.setGeoLocation = function (e, t) {
            I.userLocation = {
                country: e,
                state: t = void 0 === t ? "" : t
            }
        }
        ,
        sr.prototype.changeLang = function (t) {
            var o;
            t !== I.lang && (o = m.moduleInitializer,
                Nt.getLangJson(t).then(function (e) {
                    e ? (T.init(e),
                        w.fetchAssets(t).then(function () {
                            var e = document.getElementById("onetrust-style")
                                , e = (e && (e.textContent = ""),
                                    Yt.initialiseCssReferences(),
                                    o.IsSuppressPC && !I.isPCVisible || (S.removeChild(L("#onetrust-pc-sdk").el),
                                        I.vendorDomInit = !1,
                                        I.genVendorDomInit = !1,
                                        O.insertPcHtml(),
                                        B.initialiseConsentNoticeHandlers(),
                                        A.IsIabEnabled && (p.assignIABDataWithGlobalVendorList(I.gvlObj),
                                            G.InitializeVendorList()),
                                        I.isPCVisible && B.restorePc()),
                                    !0);
                            p.isAlertBoxClosedAndValid() || o.IsSuppressBanner && (!o.IsSuppressBanner || I.skipAddingHTML) || A.NoBanner || (S.removeChild(L("#onetrust-banner-sdk").el),
                                B.initializeAlartHtmlAndHandler(),
                                e = !1),
                                rr.initCookiePolicyAndSettings(),
                                S.removeChild(L("#ot-sdk-btn-floating").el),
                                ni.insertCSBtn(e),
                                rr.processedHtml = null,
                                rr.updateTCStringOnLangChange(t)
                        })) : console.error("Language:" + t + " doesn't exist for the geo rule")
                }))
        }
        ,
        sr.prototype.updateTCStringOnLangChange = function (e) {
            T.isIab2orv2Template && (I.consentLanguage = e,
                I.tcModel.consentLanguage = I.consentLanguage,
                I.tcModel.useNonStandardTexts = A.UseNonStandardStacks,
                p.isAlertBoxClosedAndValid() || y.updateTCString())
        }
        ,
        sr.prototype.initCookiePolicyAndSettings = function (e) {
            var t;
            (e = void 0 === e ? !1 : e) && (null != (t = document.querySelector(".ot-sdk-show-settings")) && t.removeEventListener("click", B.cookiesSettingsBoundListener),
                null != (t = document.querySelector(".optanon-toggle-display"))) && t.removeEventListener("click", B.cookiesSettingsBoundListener),
                m.fp.CookieV2TrackingTechnologies ? ni.insertTrackingTechnologies() : tr.insertCookiePolicyHtml(),
                B.insertCookieSettingText(e)
        }
        ,
        sr.prototype.showVendorsList = function () {
            I.pcLayer !== se.VendorList && (B.showAllVendors(),
                u.triggerGoogleAnalyticsEvent(ko, Vo))
        }
        ,
        sr.prototype.getTestLogData = function () {
            var e = A.Groups
                , t = T.pubDomainData
                , o = m.moduleInitializer.Version
                , o = (console.info("%cWelcome to OneTrust Log", "padding: 8px; background-color: #43c233; color: white; font-style: italic; border: 1px solid black; font-size: 1.5em;"),
                    console.info("Script is for: %c" + (t.Domain || A.optanonCookieDomain), "padding: 4px 6px; font-style: italic; border: 2px solid #43c233; font-size: 12px;"),
                    console.info("Script Version Published: " + o),
                    console.info("The consent model is: " + t.ConsentModel.Name),
                    null !== p.alertBoxCloseDate())
                , n = (console.info("Consent has " + (o ? "" : "not ") + "been given " + (o ? "👍" : "🛑")),
                    [])
                , r = (e.forEach(function (e) {
                    var t = ""
                        , t = e.Status && "always active" === e.Status.toLowerCase() ? "Always Active" : E.isGroupActive(e) ? "Active" : "Inactive";
                    n.push({
                        CustomGroupId: e.CustomGroupId,
                        GroupName: e.GroupName,
                        Status: t
                    })
                }),
                    console.groupCollapsed("Current Category Status"),
                    console.table(n),
                    console.groupEnd(),
                    [])
                , o = (t.GeneralVendors.forEach(function (e) {
                    r.push({
                        CustomGroupId: e.VendorCustomId,
                        Name: e.Name,
                        Status: rr.isCategoryActive(e.VendorCustomId) ? "active" : "inactive"
                    })
                }),
                    console.groupCollapsed("General Vendor Ids"),
                    console.table(r),
                    console.groupEnd(),
                    T.getRegionRule())
                , t = I.userLocation
                , i = m.moduleInitializer.GeoRuleGroupName
                , t = (T.conditionalLogicEnabled ? console.groupCollapsed("Geolocation, Template & Condition") : console.groupCollapsed("Geolocation and Template"),
                    I.userLocation.country && console.info("The Geolocation is " + t.country.toUpperCase()),
                    console.info("The Geolocation rule is " + o.Name),
                    console.info("The GeolocationRuleGroup is " + i),
                    T.canUseConditionalLogic ? (console.info("The Condition name is " + T.Condition.Name),
                        console.info("The TemplateName is " + T.Condition.TemplateName)) : console.info("The TemplateName is " + o.TemplateName),
                    console.groupEnd(),
                    e.filter(function (e) {
                        return E.isGroupActive(e) && "COOKIE" === e.Type
                    }));
            console.groupCollapsed("The cookies expected to be active if blocking has been implemented are"),
                t.forEach(function (e) {
                    console.groupCollapsed(e.GroupName);
                    e = rr.getAllFormatCookiesForAGroup(e);
                    console.table(e, ["Name", "Host", "description"]),
                        console.groupEnd()
                }),
                console.groupEnd()
        }
        ,
        sr.prototype.isCategoryActive = function (e) {
            return -1 !== window.OptanonActiveGroups.indexOf("," + e + ",")
        }
        ,
        sr.prototype.getAllFormatCookiesForAGroup = function (e) {
            var t = [];
            return e.FirstPartyCookies.forEach(function (e) {
                return t.push({
                    Name: e.Name,
                    Host: e.Host,
                    Description: e.description
                })
            }),
                (null == (e = e.Hosts) ? void 0 : e.reduce(function (e, t) {
                    return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
                }, [])).forEach(function (e) {
                    return t.push({
                        Name: e.Name,
                        Host: e.Host,
                        Description: e.description
                    })
                }),
                t
        }
        ,
        sr.prototype.updateSingularConsent = function (l, c) {
            return F(this, void 0, void 0, function () {
                var t, o, n, r, i, s, a;
                return M(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, B.fetchAndSetupPC()];
                        case 1:
                            for (e.sent(),
                                T.apiSource = oe.UpdateConsent,
                                t = c.split(","),
                                o = [],
                                n = 0,
                                r = t; n < r.length; n++)
                                s = r[n],
                                    s = s.split(":"),
                                    i = s[0],
                                    s = s[1],
                                    a = Boolean(Number(s)),
                                    l === dt ? "always active" === f.getGrpStatus(f.getGroupById(i)) || (rr.updateConsentArray(I.groupsConsent, i, s),
                                        o.push({
                                            id: i,
                                            isEnabled: a
                                        })) : l === pt ? rr.updateConsentArray(I.hostsConsent, i, s) : l === ut ? I.genVendorsConsent[i] = a : l === gt && o.push({
                                            id: i,
                                            isEnabled: a
                                        });
                            return h.handleTogglesOnSingularConsentUpdate(l, o),
                                [2]
                    }
                })
            })
        }
        ,
        sr.prototype.vendorServiceEnabled = function () {
            return I.showVendorService
        }
        ,
        sr.prototype.updateGCM = function (e) {
            e || console.error("No callback passed to the UpdateGCM"),
                T.gcmUpdateCallback = e
        }
        ,
        sr.prototype.updateConsentArray = function (e, t, o) {
            var n = e.findIndex(function (e) {
                return e.includes(t + ":0") || e.includes(t + ":1")
            });
            -1 < n ? e[n] = t + ":" + o : e.push(t + ":" + o)
        }
        ;
    var rr, ir = sr;
    function sr() {
        this.processedHtml = "",
            this.useGeoLocationService = !0,
            this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid,
            this.InitializeBanner = function () {
                return ni.initBanner()
            }
            ,
            this.getHTML = function () {
                return document.getElementById("onetrust-banner-sdk") || (O.insertPcHtml(),
                    Kn.insertAlertHtml()),
                    rr.processedHtml || (rr.processedHtml = document.querySelector("#onetrust-consent-sdk").outerHTML),
                    rr.processedHtml
            }
            ,
            this.getCSS = function () {
                return Yt.processedCSS
            }
            ,
            this.setConsentProfile = function (e) {
                var t, o;
                e.customPayload && null != (t = o = e.customPayload) && t.Interaction && k.writeCookieParam(v.OPTANON_CONSENT, De.INTERACTION_COUNT, o.Interaction),
                    rr.setDataSubjectIdV2(e.identifier, e.isAnonymous, e.identifierType, e.sendReceipt),
                    rr.synchroniseCookieWithPayload(e.purposes),
                    h.executeOptanonWrapper()
            }
            ,
            this.InsertScript = function (e, t, o, n, r, i) {
                var s, a = null != n && void 0 !== n, l = a && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
                if (E.canInsertForGroup(r, l) && !S.contains(I.srcExecGrps, r)) {
                    I.srcExecGrpsTemp.push(r),
                        a && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && S.empty(t);
                    var c = document.createElement("script");
                    switch (null != o && void 0 !== o && (s = !1,
                        c.onload = c.onreadystatechange = function () {
                            s || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (s = !0,
                                o())
                        }
                    ),
                    c.type = "text/javascript",
                    c.src = e,
                    i && (c.async = i),
                    t) {
                        case "head":
                            document.getElementsByTagName("head")[0].appendChild(c);
                            break;
                        case "body":
                            document.getElementsByTagName("body")[0].appendChild(c);
                            break;
                        default:
                            var d = document.getElementById(t);
                            d && (d.appendChild(c),
                                a) && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && S.show(t)
                    }
                    if (a && void 0 !== n.makeElementsVisible)
                        for (var p = 0, u = n.makeElementsVisible; p < u.length; p++) {
                            var g = u[p];
                            S.show(g)
                        }
                    if (a && void 0 !== n.deleteElements)
                        for (var h = 0, C = n.deleteElements; h < C.length; h++) {
                            g = C[h];
                            S.remove(g)
                        }
                }
            }
            ,
            this.InsertHtml = function (e, t, o, n, r) {
                var i = null != n && void 0 !== n
                    , s = i && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
                if (E.canInsertForGroup(r, s) && !S.contains(I.htmlExecGrps, r)) {
                    if (I.htmlExecGrpsTemp.push(r),
                        i && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && S.empty(t),
                        S.appendTo(t, e),
                        i && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && S.show(t),
                        i && void 0 !== n.makeElementsVisible)
                        for (var a = 0, l = n.makeElementsVisible; a < l.length; a++) {
                            var c = l[a];
                            S.show(c)
                        }
                    if (i && void 0 !== n.deleteElements)
                        for (var d = 0, p = n.deleteElements; d < p.length; d++) {
                            c = p[d];
                            S.remove(c)
                        }
                    null != o && void 0 !== o && o()
                }
            }
            ,
            this.BlockGoogleAnalytics = function (e, t) {
                window["ga-disable-" + e] = !E.canInsertForGroup(t)
            }
    }
    ar.prototype.getFieldsValues = function (e, t, o, n, r) {
        void 0 === r && (r = !1);
        e = this.getSectionFieldsMapping(e),
            t = this.getSectionFieldsMapping(t, !0),
            o = this.getDynamicFields(o, n),
            n = this.getMSPASectionFieldValue(),
            r = r ? this.getGpcSectionFieldValue() : {};
        return R(R(R(R(R({}, e), t), o), n), r)
    }
        ,
        ar.prototype.getGpcSectionFieldValue = function () {
            var e = {};
            return e[Be.GpcSegmentType] = 1,
                e[Be.Gpc] = T.gpcEnabled,
                e
        }
        ,
        ar.prototype.getMSPASectionFieldValue = function () {
            var e = {};
            return A.IsMSPAEnabled ? (e.MspaCoveredTransaction = 1,
                A.MSPAOptionMode === Oe.MspaServiceProviderMode ? (e.MspaServiceProviderMode = 1,
                    e.MspaOptOutOptionMode = 2) : A.MSPAOptionMode === Oe.MspaOptOutOptionMode ? (e.MspaServiceProviderMode = 2,
                        e.MspaOptOutOptionMode = 1) : (e.MspaServiceProviderMode = 2,
                            e.MspaOptOutOptionMode = 2)) : (e.MspaCoveredTransaction = 2,
                                e.MspaServiceProviderMode = 0,
                                e.MspaOptOutOptionMode = 0),
                e
        }
        ,
        ar.prototype.getDynamicArrayFieldsValue = function (e, t) {
            for (var o = {}, n = [], r = this.getSectionFieldsMapping(t), i = 1; i <= Object.keys(r).length; i++)
                n.push(r[e + i]);
            return o[e] = n,
                o
        }
        ,
        ar.prototype.getDynamicFields = function (e, t) {
            var o, n = {};
            return A.IsGPPKnownChildApplicable && e && (o = this.getDynamicArrayFieldsValue(we.KnownChildSensitiveDataConsents, e),
                n = R(R({}, n), o)),
                A.IsGPPDataProcessingApplicable && t && (o = this.getDynamicArrayFieldsValue(we.SensitiveDataProcessing, t),
                    n = R(R({}, n), o)),
                n
        }
        ,
        ar.prototype.getSectionFieldsMapping = function (e, o) {
            var n = this
                , r = (void 0 === o && (o = !1),
                    {});
            return Object.entries(e).forEach(function (e) {
                var t = e[0]
                    , e = e[1]
                    , e = n.evaluateValueOperators(e);
                r[t] = n.calculateFieldValue(e, o)
            }),
                r
        }
        ,
        ar.prototype.evaluateValueOperators = function (e) {
            var t, o, n = "", r = [];
            return e && (t = e.split(" && "),
                o = e.split(" || "),
                r = (1 < t.length ? (n = "&&",
                    t) : 1 < o.length ? (n = "||",
                        o) : (n = "",
                            [e])).map(function (e) {
                                return A.GPPPurposes[e] || ""
                            })),
            {
                values: r,
                operator: n
            }
        }
        ,
        ar.prototype.calculateFieldValue = function (e, t) {
            var o;
            if (e.values.length)
                switch (e.operator) {
                    case "&&":
                        o = this.calculateAndFieldValue(e.values, t);
                        break;
                    case "||":
                        o = this.calculateOrFieldValue(e.values, t);
                        break;
                    default:
                        o = this.calculateSingleFieldValue(e.values[0], t)
                }
            else
                o = 0;
            return o
        }
        ,
        ar.prototype.calculateOrFieldValue = function (e, t) {
            var o = this;
            return this.isNotApplicable(e) ? 0 : (e = e.some(function (e) {
                return o.fieldValueCondition(e, t)
            }),
                this.calculateFieldValueFromBit(e, t))
        }
        ,
        ar.prototype.calculateAndFieldValue = function (e, t) {
            var o = this;
            return this.isNotApplicable(e) ? 0 : (e = e.every(function (e) {
                return o.fieldValueCondition(e, t)
            }),
                this.calculateFieldValueFromBit(e, t))
        }
        ,
        ar.prototype.calculateSingleFieldValue = function (e, t) {
            return e && this.isValidGroup(e) ? (e = this.fieldValueCondition(e, t),
                this.calculateFieldValueFromBit(e, t)) : 0
        }
        ,
        ar.prototype.isValidGroup = function (e) {
            e = e ? f.getGroupById(e) : null;
            return !!e && T.isValidConsentNoticeGroup(e, A.IsIabEnabled)
        }
        ,
        ar.prototype.calculateFieldValueFromBit = function (e, t) {
            t = t ? e ? 1 : 0 : e ? 2 : 1;
            return t
        }
        ,
        ar.prototype.isNotApplicable = function (e) {
            var t = this;
            return !e.some(function (e) {
                return Boolean(e) && t.isValidGroup(e)
            })
        }
        ,
        ar.prototype.fieldValueCondition = function (e, t) {
            return t ? Boolean(e) : rr.isCategoryActive(e)
        }
        ;
    var a = ar;
    function ar() { }
    D(gr, lr = a),
        gr.prototype.getSectionFieldsValues = function () {
            return this.getFieldsValues(qt, Ut, jt, zt, !0)
        }
        ;
    var lr, cr, dr, pr, ur = gr;
    function gr() {
        return null !== lr && lr.apply(this, arguments) || this
    }
    (x = cr = cr || {}).SaleOptOut = "SaleOptOutCID",
        x.KnownChildSensitiveDataConsents = "KnownChildSellPICID",
        x.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID",
        (x = dr = dr || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID",
        x.SaleOptOutNotice = "SaleOptOutCID",
        x.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID",
        (x = pr = pr || {}).SensitiveDataProcessing1 = "RaceCID",
        x.SensitiveDataProcessing2 = "ReligionCID",
        x.SensitiveDataProcessing3 = "HealthCID",
        x.SensitiveDataProcessing4 = "SexualOrientationCID",
        x.SensitiveDataProcessing5 = "ImmigrationCID",
        x.SensitiveDataProcessing6 = "GeneticCID",
        x.SensitiveDataProcessing7 = "BiometricCID",
        x.SensitiveDataProcessing8 = "GeolocationCID";
    D(fr, hr = a),
        fr.prototype.getSectionFieldsValues = function () {
            return this.getFieldsValues(cr, dr, null, pr, !1)
        }
        ;
    var hr, Cr, yr = fr;
    function fr() {
        return null !== hr && hr.apply(this, arguments) || this
    }
    (x = Cr = Cr || {}).Version = "version",
        x.CmpId = "cmpId",
        x.CmpVersion = "cmpVersion",
        x.ConsentScreen = "consentScreen",
        x.ConsentLanguage = "consentLanguage",
        x.VendorListVersion = "vendorListVersion",
        x.PolicyVersion = "policyVersion",
        x.IsServiceSpecific = "isServiceSpecific",
        x.UseNonStandardTexts = "useNonStandardTexts",
        x.PurposeOneTreatment = "purposeOneTreatment",
        x.PublisherCountryCode = "publisherCountryCode",
        x.NumCustomPurposes = "numCustomPurposes",
        x.VendorsAllowedSegmentType = "VendorsAllowedSegmentType",
        x.VendorsDisclosedSegmentType = "VendorsDisclosedSegmentType",
        x.PublisherPurposesSegmentType = "PublisherPurposesSegmentType";
    Pr.prototype.getSectionFieldsValues = function () {
        for (var e = {}, t = 0, o = Object.keys(Cr); t < o.length; t++) {
            var n = o[t]
                , r = Cr[n];
            I.tcModel && I.tcModel[r] && (e[n] = I.tcModel[r])
        }
        e.ConsentLanguage = null == (i = e.ConsentLanguage) ? void 0 : i.toString().toUpperCase();
        var i = this.setPurposesData();
        return R(R({}, e), i)
    }
        ,
        Pr.prototype.setPurposesData = function () {
            var e = {}
                , t = I.oneTrustIABConsent
                , o = this.getConsentValuesFromPurpose(t.purpose)
                , o = (e.PurposeConsents = o,
                    e.PublisherConsents = o,
                    T.legIntSettings.PAllowLI ? this.getConsentValuesFromPurpose(t.legimateInterest) : []);
            return e.PurposeLegitimateInterests = o,
                e.PublisherLegitimateInterests = o,
                e.VendorConsents = this.syncVendorConsent(I.tcModel.vendorConsents),
                T.legIntSettings.PAllowLI && !o.length && (t.legIntVendors = []),
                e.VendorLegitimateInterests = this.getConsentValuesFromPurpose(S.distinctArray(t.legIntVendors), !0, !0),
                e.SpecialFeatureOptins = this.getConsentValuesFromPurpose(t.specialFeatures),
                e
        }
        ,
        Pr.prototype.syncVendorConsent = function (e) {
            var e = e.clone()
                , o = [];
            return e.forEach(function (e, t) {
                I.vendorsSetting[t] && I.vendorsSetting[t].consent || !e || o.push(t)
            }),
                e.unset(o),
                Array.from(e.values())
        }
        ,
        Pr.prototype.getConsentValuesFromPurpose = function (e, t, o) {
            var n = (t = void 0 === t ? !1 : t) ? 0 : 1;
            return (o = void 0 === o ? !1 : o) && (e = e.filter(function (e) {
                return "true" === e.split(":")[1]
            })),
                t ? e.map(function (e) {
                    return parseInt(e.split(":")[n])
                }) : e.map(function (e) {
                    return "true" === e.split(":")[n]
                })
        }
        ;
    var mr, vr, kr, Sr, br = Pr;
    function Pr() { }
    (x = mr = mr || {}).SaleOptOut = "SaleOptOutCID",
        x.SharingOptOut = "SharingOptOutCID",
        x.PersonalDataConsents = "PersonalDataCID",
        x.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID",
        (x = vr = vr || {}).SharingNotice = "SharingOptOutCID",
        x.SaleOptOutNotice = "SaleOptOutCID",
        x.SharingOptOutNotice = "SharingOptOutCID",
        x.SensitiveDataProcessingOptOutNotice = "RaceCID || ReligionCID || HealthCID || SexualOrientationCID || ImmigrationCID || GeneticCID || BiometricCID || GeolocationCID || SensitivePICID || SensitiveSICID || UnionMembershipCID || CommunicationCID",
        x.SensitiveDataLimitUseNotice = "RaceCID || ReligionCID || HealthCID || SexualOrientationCID || ImmigrationCID || GeneticCID || BiometricCID || GeolocationCID || SensitivePICID || SensitiveSICID || UnionMembershipCID || CommunicationCID",
        x.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID",
        (x = kr = kr || {}).KnownChildSensitiveDataConsents1 = "PDCAboveAgeCID",
        x.KnownChildSensitiveDataConsents2 = "PDCBelowAgeCID",
        (x = Sr = Sr || {}).SensitiveDataProcessing1 = "RaceCID",
        x.SensitiveDataProcessing2 = "ReligionCID",
        x.SensitiveDataProcessing3 = "HealthCID",
        x.SensitiveDataProcessing4 = "SexualOrientationCID",
        x.SensitiveDataProcessing5 = "ImmigrationCID",
        x.SensitiveDataProcessing6 = "GeneticCID",
        x.SensitiveDataProcessing7 = "BiometricCID",
        x.SensitiveDataProcessing8 = "GeolocationCID",
        x.SensitiveDataProcessing9 = "SensitivePICID",
        x.SensitiveDataProcessing10 = "SensitiveSICID",
        x.SensitiveDataProcessing11 = "UnionMembershipCID",
        x.SensitiveDataProcessing12 = "CommunicationCID";
    D(Er, Tr = a),
        Er.prototype.getSectionFieldsValues = function () {
            return this.getFieldsValues(mr, vr, kr, Sr, !0)
        }
        ;
    var Tr, Ar, Ir, Lr, _r = Er;
    function Er() {
        return null !== Tr && Tr.apply(this, arguments) || this
    }
    (x = Ar = Ar || {}).SaleOptOut = "SaleOptOutCID",
        x.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID",
        x.KnownChildSensitiveDataConsents = "KnownChildSellPICID",
        (x = Ir = Ir || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID",
        x.SaleOptOutNotice = "SaleOptOutCID",
        x.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID",
        (x = Lr = Lr || {}).SensitiveDataProcessing1 = "RaceCID",
        x.SensitiveDataProcessing2 = "ReligionCID",
        x.SensitiveDataProcessing3 = "HealthCID",
        x.SensitiveDataProcessing4 = "SexualOrientationCID",
        x.SensitiveDataProcessing5 = "ImmigrationCID",
        x.SensitiveDataProcessing6 = "GeneticCID",
        x.SensitiveDataProcessing7 = "BiometricCID";
    D(Nr, Vr = a),
        Nr.prototype.getSectionFieldsValues = function () {
            return this.getFieldsValues(Ar, Ir, null, Lr, !0)
        }
        ;
    var Vr, Or, Br, wr, Gr, xr = Nr;
    function Nr() {
        return null !== Vr && Vr.apply(this, arguments) || this
    }
    (x = Or = Or || {}).SaleOptOut = "SaleOptOutCID",
        x.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID",
        (x = Br = Br || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID",
        x.SaleOptOutNotice = "SaleOptOutCID",
        x.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID",
        (x = wr = wr || {}).KnownChildSensitiveDataConsents1 = "KnownChildProcessCID",
        x.KnownChildSensitiveDataConsents2 = "KnownChildSellPICID",
        x.KnownChildSensitiveDataConsents3 = "KnownChildSharePICID",
        (x = Gr = Gr || {}).SensitiveDataProcessing1 = "RaceCID",
        x.SensitiveDataProcessing2 = "ReligionCID",
        x.SensitiveDataProcessing3 = "HealthCID",
        x.SensitiveDataProcessing4 = "SexualOrientationCID",
        x.SensitiveDataProcessing5 = "ImmigrationCID",
        x.SensitiveDataProcessing6 = "GeneticCID",
        x.SensitiveDataProcessing7 = "BiometricCID",
        x.SensitiveDataProcessing8 = "GeolocationCID";
    D(qr, Dr = a),
        qr.prototype.getSectionFieldsValues = function () {
            return this.getFieldsValues(Or, Br, wr, Gr, !0)
        }
        ;
    var Dr, Hr, Rr, Fr, Mr = qr;
    function qr() {
        return null !== Dr && Dr.apply(this, arguments) || this
    }
    (x = Hr = Hr || {}).SaleOptOut = "SaleOptOutCID",
        x.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID",
        x.KnownChildSensitiveDataConsents = "KnownChildSellPICID",
        (x = Rr = Rr || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID",
        x.SaleOptOutNotice = "SaleOptOutCID",
        x.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID",
        x.SensitiveDataProcessingOptOutNotice = "RaceCID || ReligionCID || SexualOrientationCID || ImmigrationCID || HealthCID || GeneticCID || BiometricCID || GeolocationCID",
        (x = Fr = Fr || {}).SensitiveDataProcessing1 = "RaceCID",
        x.SensitiveDataProcessing2 = "ReligionCID",
        x.SensitiveDataProcessing3 = "SexualOrientationCID",
        x.SensitiveDataProcessing4 = "ImmigrationCID",
        x.SensitiveDataProcessing5 = "HealthCID",
        x.SensitiveDataProcessing6 = "GeneticCID",
        x.SensitiveDataProcessing7 = "BiometricCID",
        x.SensitiveDataProcessing8 = "GeolocationCID";
    D(zr, Ur = a),
        zr.prototype.getSectionFieldsValues = function () {
            return this.getFieldsValues(Hr, Rr, null, Fr, !1)
        }
        ;
    var Ur, jr = zr;
    function zr() {
        return null !== Ur && Ur.apply(this, arguments) || this
    }
    Yr.prototype.initGppConsent = function () {
        this.initTemplateAndSectionInstance(),
            this.cmpApi.setApplicableSections(this.getApplicableSections(this.gppTemplateApplied));
        var o, n, e = this.readGppCookies(), t = this.getCurrentSectionName(this.gppTemplateApplied), r = !1;
        e && (p.needReconsent() ? this.deleteAllGppCookies() : (this.cmpApi.setGppString(e),
            r = !0)),
            this.cmpApi.setSupportedAPIs((o = [],
                n = {},
                Object.keys(xe).forEach(function (e) {
                    var t = {}
                        , e = (t[e] = xe[e],
                            Object.assign(t, n));
                    n = e
                }),
                Object.keys(Ge).map(function (e) {
                    return {
                        name: e,
                        value: Ge[e]
                    }
                }).forEach(function (e) {
                    e = n[e.name] + ":" + e.value;
                    o.push(e)
                }),
                o.filter(function (e, t) {
                    return o.indexOf(e) === t
                }))),
            this.cmpApi.setCmpStatus(null == (e = this.gppSDKRef) ? void 0 : e.cmpStatus.LOADED),
            this.cmpApi.setSignalStatus(null == (e = this.gppSDKRef) ? void 0 : e.signalStatus.READY),
            (t && !this.cmpApi.hasSection(t) || T.gpcBrowserValueChanged || I.grpsSynced && 0 < I.grpsSynced.length) && this.setOrUpdateGppSectionString(t, r),
            window.OneTrust.OnConsentChanged(this.updateGppConsentString)
    }
        ,
        Yr.prototype.initTemplateAndSectionInstance = function () {
            this.gppTemplateApplied = this.getGppTemplateApplied(),
                this.gppSection = this.getSectionInstance(this.gppTemplateApplied)
        }
        ,
        Yr.prototype.setCmpDisplayStatus = function (e) {
            var t;
            "visible" === e ? this.cmpApi.setCmpDisplayStatus(null == (t = this.gppSDKRef) ? void 0 : t.displayStatus.VISIBLE) : "hidden" === e ? this.cmpApi.setCmpDisplayStatus(null == (t = this.gppSDKRef) ? void 0 : t.displayStatus.HIDDEN) : "disabled" === e && this.cmpApi.setCmpDisplayStatus(null == (t = this.gppSDKRef) ? void 0 : t.displayStatus.DISABLED)
        }
        ,
        Yr.prototype.setGppCookies = function (e, t) {
            t ? this.updateGppCookies(e) : (t = this.getCookiesChunk(e),
                e = Object.keys(t).length,
                this.writeGppCookies(e, t))
        }
        ,
        Yr.prototype.readGppCookies = function () {
            var e = Number(k.readCookieParam(v.OPTANON_CONSENT, Ve.ChunkCountParam) || 0);
            if (e <= 1)
                return 0 === e ? "" : k.getCookie(v.GPP_CONSENT);
            for (var t = "", o = 1; o <= e; o++)
                var n = k.getCookie("" + Ve.Name + o)
                    , t = t.concat(n);
            return t
        }
        ,
        Yr.prototype.deleteGppCookies = function (e, t) {
            if (0 < e && (1 === e && (k.setCookie("" + Ve.Name, "", 0, !0),
                e++),
                e <= t))
                for (var o = e; o <= t; o++)
                    k.setCookie("" + Ve.Name + o, "", 0, !0)
        }
        ,
        Yr.prototype.getSectionInstance = function (e) {
            var t;
            switch (e) {
                case Ee.CPRA:
                case Ee.CCPA:
                    t = new ur;
                    break;
                case Ee.CDPA:
                    t = new yr;
                    break;
                case Ee.USNATIONAL:
                    t = new _r;
                    break;
                case Ee.COLORADO:
                    t = new xr;
                    break;
                case Ee.CONNECTICUT:
                    t = new Mr;
                    break;
                case Ee.UCPA:
                    t = new jr;
                    break;
                case Ee.IAB2V2:
                    t = new br
            }
            return t
        }
        ,
        Yr.prototype.hasGPPSection = function () {
            return !!this.gppSection
        }
        ,
        Yr.prototype.getGppTemplateApplied = function () {
            return A.UseGPPUSNational ? Ee.USNATIONAL : T.getRegionRuleType()
        }
        ,
        Yr.prototype.initGppSDK = function () {
            var e, t = Number.parseInt((null == (t = m.moduleInitializer.GppData) ? void 0 : t.cmpId) || "28");
            return null == (e = this.gppSDKRef) ? void 0 : e.gppCmpApi(t, 1.1)
        }
        ,
        Yr.prototype.setOrUpdateGppSectionString = function (o, e) {
            var n = this
                , t = this.gppSection.getSectionFieldsValues();
            Object.entries(t).forEach(function (e) {
                var t = e[0]
                    , e = e[1];
                n.cmpApi.setFieldValue(o, t, e)
            }),
                this.cmpApi.fireSectionChange(o),
                this.setGppCookies(this.cmpApi.getGppString(), e)
        }
        ,
        Yr.prototype.getCurrentSectionName = function (o) {
            var e, t = "", n = Object.entries(Ge).find(function (e) {
                var t = e[0];
                e[1];
                return t === o
            });
            return t = null != (e = n) && e.length && 1 < n.length ? n[1] : t
        }
        ,
        Yr.prototype.getCurrentSectionId = function (o) {
            var e, t = 0, n = Object.entries(xe).find(function (e) {
                var t = e[0];
                e[1];
                return t === o
            });
            return t = null != (e = n) && e.length && 1 < n.length ? n[1] : t
        }
        ,
        Yr.prototype.updateGppCookies = function (e) {
            var e = this.getCookiesChunk(e)
                , t = Object.keys(e).length
                , o = Number(k.readCookieParam(v.OPTANON_CONSENT, Ve.ChunkCountParam) || 0);
            this.writeGppCookies(t, e),
                t < o && this.deleteGppCookies(t + 1, o)
        }
        ,
        Yr.prototype.deleteAllGppCookies = function () {
            var e = Number(k.readCookieParam(v.OPTANON_CONSENT, Ve.ChunkCountParam) || 0);
            this.deleteGppCookies(1, e)
        }
        ,
        Yr.prototype.getCookiesChunk = function (e) {
            for (var t = {}, o = !1, n = e, r = 1; n.length;) {
                var i, s = void 0;
                n.length > Ve.ChunkSize ? s = Ve.ChunkSize : (s = n.length,
                    o = 1 === r),
                    o ? (t[Ve.Name] = n,
                        n = "") : (i = n.slice(0, s),
                            n = n.slice(s, n.length),
                            t["" + Ve.Name + r] = i),
                    r++
            }
            return t
        }
        ,
        Yr.prototype.writeGppCookies = function (e, t) {
            k.writeCookieParam(v.OPTANON_CONSENT, Ve.ChunkCountParam, e);
            for (var o = 0, n = Object.entries(t); o < n.length; o++) {
                var r = n[o]
                    , i = r[0]
                    , r = r[1];
                k.setCookie(i, r, A.ReconsentFrequencyDays)
            }
        }
        ,
        Yr.prototype.getSupportedAPIs = function () {
            return Object.values(Ge).filter(function (e, t, o) {
                return o.indexOf(e) === t
            })
        }
        ,
        Yr.prototype.getApplicableSections = function (e) {
            return [this.getCurrentSectionId(e)]
        }
        ;
    var Kr, Wr = Yr;
    function Yr() {
        var e, t = this;
        this.gppSDKRef = null == (e = window.otIabModule) ? void 0 : e.gppSdkRef,
            this.cmpApi = this.initGppSDK(),
            this.updateGppConsentString = function () {
                t.cmpApi.getCmpDisplayStatus() === (null == (e = t.gppSDKRef) ? void 0 : e.displayStatus.VISIBLE) && t.cmpApi.setCmpDisplayStatus(null == (e = t.gppSDKRef) ? void 0 : e.displayStatus.HIDDEN);
                var e = t.getCurrentSectionName(t.gppTemplateApplied);
                t.setOrUpdateGppSectionString(e, !0)
            }
    }
    Qr.prototype.ensureConsentId = function (e, t) {
        var o = !1
            , n = !0
            , r = k.readCookieParam(v.OPTANON_CONSENT, De.CONSENT_ID, !0)
            , i = I.dsParams
            , s = (i && i.hasOwnProperty("isAnonymous") && (n = i.isAnonymous),
                i = k.readCookieParam(v.OPTANON_CONSENT, De.IDENTIFIER_TYPE, !1),
                this.updateConsentIntAttributes(n, i))
            , n = s.isAnonymous
            , i = s.idTypeUpdated
            , s = !e && t ? (o = !0,
                1) : 0;
        return r ? (e = parseInt(k.readCookieParam(v.OPTANON_CONSENT, De.INTERACTION_COUNT), 10),
            isNaN(e) || (s = t ? ++e : e,
                o = !1)) : (r = S.generateUUID(),
                    k.writeCookieParam(v.OPTANON_CONSENT, De.CONSENT_ID, r)),
            k.writeCookieParam(v.OPTANON_CONSENT, De.INTERACTION_COUNT, s),
        {
            id: r,
            count: s,
            addDfltInt: o,
            identifierType: i,
            isAnonymous: n
        }
    }
        ,
        Qr.prototype.isAuthUsr = function (e) {
            I.consentPreferences ? k.writeCookieParam(v.OPTANON_CONSENT, "iType", "") : k.writeCookieParam(v.OPTANON_CONSENT, "iType", "" + ge[e])
        }
        ,
        Qr.prototype.isBannerClosedByIconOrLink = function () {
            var e = I.bannerCloseSource;
            return e === ee.BannerCloseButton || e === ee.ContinueWithoutAcceptingButton
        }
        ,
        Qr.prototype.addCrossDeviceAttributes = function (e) {
            I.isV2Stub && (e.syncGroup = I.syncGrpId,
                T.isIab2orv2Template && !p.isIABCrossConsentEnabled() && (e.tcStringV2 = k.getCookie(v.EU_PUB_CONSENT)),
                A.UseGoogleVendors) && (e.gacString = k.getCookie(v.ADDITIONAL_CONSENT_STRING))
        }
        ,
        Qr.prototype.addAdvAnalyticsAttributes = function (e, t) {
            var o = f.getGroupById(A.AdvancedAnalyticsCategory);
            o && this.canSendAdvancedAnalytics(e.purposes, o) && (o = window.navigator.userAgent,
                e.dsDataElements = {
                    InteractionType: t,
                    Country: I && I.userLocation && /^[a-zA-Z]{2}$/.test(I.userLocation.country) ? I.userLocation.country.toLowerCase() : "",
                    UserAgent: o,
                    ConsentModel: A.ConsentModel.Name
                })
        }
        ,
        Qr.prototype.canSendConsentReceipt = function (e, t) {
            return e || T.apiSource === oe.UpdateConsent || I.consentInteractionType !== t
        }
        ,
        Qr.prototype.addGppStringAttribute = function (e) {
            A.IsGPPEnabled && Kr.hasGPPSection() && Kr.updateGppConsentString();
            var t = k.getCookie(v.GPP_CONSENT);
            t && (e.gppString = t)
        }
        ,
        Qr.prototype.addConsentStringToPayload = function (e) {
            var t;
            e.hasOwnProperty("gppString") && e.gppString ? e.consentString = {
                type: "gpp",
                content: e.gppString
            } : e.hasOwnProperty("tcStringV2") && e.tcStringV2 && (t = T.getRegionRuleType(),
                e.consentString = {
                    type: "IABC" === t ? "tcfcanada" : "IAB2" !== t && "IAB2V2" !== t ? "" : "tcfeu",
                    content: e.tcStringV2
                })
        }
        ,
        Qr.prototype.createConsentTxn = function (e, t, o, n, r) {
            void 0 === t && (t = ""),
                void 0 === o && (o = !1),
                void 0 === r && (r = !1);
            var i = this.ensureConsentId(e, n = void 0 === n ? !0 : n)
                , s = A.ConsentIntegration
                , a = window.navigator.userAgent
                , a = /OneTrustBot/.test(a);
            s.ConsentApi && s.RequestInformation && i.id && !a && (a = m.moduleInitializer,
                Jr.noOptOutToogle = a.TenantFeatures.CookieV2NoOptOut,
                Jr.isCloseByIconOrLink = this.isBannerClosedByIconOrLink(),
                i = {
                    requestInformation: s.RequestInformation,
                    identifier: i.id,
                    identifierType: i.identifierType,
                    customPayload: {
                        Interaction: i.count,
                        AddDefaultInteraction: i.addDfltInt
                    },
                    isAnonymous: i.isAnonymous,
                    test: a.ScriptType === je || a.ScriptType === ze,
                    purposes: this.getConsetPurposes(e),
                    dsDataElements: {}
                },
                this.handleReceiptsWhenSendReceiptIsEnabled(i, r),
                this.addCrossDeviceAttributes(i),
                this.addAdvAnalyticsAttributes(i, t),
                this.addGppStringAttribute(i),
                a.TenantFeatures.ConsentStoreConsentStrings && (this.addConsentStringToPayload(i),
                    delete i.tcStringV2,
                    delete i.gppString),
                !a.MobileSDK && n && i.purposes.length && (r = JSON.stringify(i),
                    e && navigator.sendBeacon ? (navigator.sendBeacon(s.ConsentApi, r),
                        p.dispatchConsentEvent()) : this.canSendConsentReceipt(o, t) && (I.isV2Stub && t && this.isAuthUsr(t),
                            Ot.ajax({
                                url: s.ConsentApi,
                                type: "post",
                                dataType: "json",
                                contentType: "application/json",
                                data: JSON.stringify(i),
                                sync: e,
                                success: function () {
                                    p.dispatchConsentEvent()
                                },
                                error: function () {
                                    p.dispatchConsentEvent()
                                }
                            }))),
                T.pubDomainData.ConsentIntegrationData = {
                    consentApi: s.ConsentApi,
                    consentPayload: i
                }),
                I.consentInteractionType = t
        }
        ,
        Qr.prototype.handleReceiptsWhenSendReceiptIsEnabled = function (e, t) {
            var o = k.getCookie(v.ALERT_BOX_CLOSED)
                , n = k.readCookieParam(v.OPTANON_CONSENT, De.CONSENT_ID, !0)
                , r = k.readCookieParam(v.OPTANON_CONSENT, De.IDENTIFIER_TYPE, !0)
                , n = n === e.identifier && r === e.identifierType;
            t && o && !n && (e.interactionDate = o)
        }
        ,
        Qr.prototype.updateConsentIntAttributes = function (e, t) {
            var o, n = "";
            return !1 !== (null == (o = A.ConsentIntegration) ? void 0 : o.IdentifiedReceiptsAllowed) && I.isV2Stub || (e = !0,
                n = null == (o = A.ConsentIntegration) ? void 0 : o.DefaultAnonymousIdentifier),
                (I.isV2Stub || null != (o = A.ConsentIntegration) && o.IdentifiedReceiptsAllowed && !I.isV2Stub) && (e = (o = this.setAnonymityBasedOnKnownUserOrNot(e, t)).isAnonymous,
                    n = o.idTypeUpdated),
            {
                isAnonymous: e,
                idTypeUpdated: n
            }
        }
        ,
        Qr.prototype.setAnonymityBasedOnKnownUserOrNot = function (e, t) {
            var o, n = "", n = null != (o = I.dsParams) && o.id ? (e = !1,
                null != (o = t) && o.trim().length ? t : null == (o = A.ConsentIntegration) ? void 0 : o.DefaultIdentifier) : (e = !0,
                    null == (t = A.ConsentIntegration) ? void 0 : t.DefaultAnonymousIdentifier);
            return {
                isAnonymous: e,
                idTypeUpdated: n
            }
        }
        ,
        Qr.prototype.getGrpDetails = function (e, o) {
            var n = [];
            return e.forEach(function (e) {
                var e = e.split(":")
                    , t = e[0]
                    , e = "true" === e[1] ? "1" : "0"
                    , t = Jr.getOptanonIdForIabGroup(t, o);
                n.push(t + ":" + e)
            }),
                n
        }
        ,
        Qr.prototype.getOptanonIdForIabGroup = function (e, t) {
            var o;
            return t === ne.Purpose ? o = P.IdPatterns.Pur + e : t === ne.SpecialFeature && (o = P.IdPatterns.Spl_Ft + e),
                o
        }
        ,
        Qr.prototype.getConsetPurposes = function (o) {
            var n = this
                , r = []
                , e = []
                , t = I.oneTrustIABConsent
                , i = t && t.purpose ? this.getGrpDetails(t.purpose, ne.Purpose) : []
                , s = t && t.specialFeatures ? this.getGrpDetails(t.specialFeatures, ne.SpecialFeature) : []
                , e = q(t.specialPurposes, t.features);
            return q(I.groupsConsent, i, s).forEach(function (e) {
                var e = e.split(":")
                    , t = f.getGroupById(e[0]);
                t && t.PurposeId && (e = n.getTransactionType(t, e, o),
                    r.push({
                        Id: t.PurposeId,
                        TransactionType: e.txnType
                    }),
                    n.setVSConsentByGroup(t, e).forEach(function (e) {
                        return r.push(e)
                    }))
            }),
                e.forEach(function (e) {
                    e.purposeId && r.push({
                        Id: e.purposeId,
                        TransactionType: Fe
                    })
                }),
                I.bannerCloseSource = ee.Unknown,
                r
        }
        ,
        Qr.prototype.setVSConsentByGroup = function (e, o) {
            var n = [];
            return I.showVendorService && e.VendorServices && e.VendorServices.forEach(function (e) {
                var t;
                t = o.useOwn ? I.vsConsent.get(e.CustomVendorServiceId) ? He : Re : o.txnType,
                    n.push({
                        Id: e.PurposeId,
                        TransactionType: t
                    })
            }),
                n
        }
        ,
        Qr.prototype.getTransactionType = function (e, t, o) {
            var n = {
                txnType: Fe,
                useOwn: !1
            };
            return e.Status === C.ALWAYS_ACTIVE ? n.txnType = Fe : e.Status.toLowerCase() === C.ALWAYS_INACTIVE || e.Status === C.INACTIVE && Jr.isCloseByIconOrLink || o ? n.txnType = Me : e.Status === C.ACTIVE && Jr.isCloseByIconOrLink ? n.txnType = Jr.noOptOutToogle ? qe : He : (n.useOwn = !0,
                n.txnType = this.getTxnType(t[1])),
                n
        }
        ,
        Qr.prototype.getTxnType = function (e) {
            return "0" === e ? Re : He
        }
        ,
        Qr.prototype.isPurposeConsentedTo = function (e, t) {
            var o = [He, Fe];
            return e.some(function (e) {
                return e.Id === t.PurposeId && -1 !== o.indexOf(e.TransactionType)
            })
        }
        ,
        Qr.prototype.canSendAdvancedAnalytics = function (t, e) {
            var o = this;
            return "BRANCH" === e.Type || e.Type === P.GroupTypes.Stack ? e.SubGroups.length && e.SubGroups.every(function (e) {
                return o.isPurposeConsentedTo(t, e)
            }) : this.isPurposeConsentedTo(t, e)
        }
        ;
    var Jr, Xr = Qr;
    function Qr() { }
    var w, $r = function () {
        this.assets = function () {
            return {
                name: "otCookiePolicy",
                html: '<div class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <h5 class="cookies-used-header">Cookies Used</h5>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description"><span\n                            class="ot-mobile-border"></span>These\n                        cookies are used to make sure\n                        visitor page requests are routed to the same server in all browsing sessions.</td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n    <section class="subgroup">\n        <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n        <p class="ot-sdk-cookie-policy-group-desc">description</p>\n        <h6 class="cookies-used-header">Cookies Used</h6>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>\n\x3c!-- New Cookies policy Link--\x3e\n<div id="ot-sdk-cookie-policy-v2" class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title" class="ot-sdk-cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <section class="ot-sdk-subgroup">\n            <ul>\n                <li>\n                    <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n                    <p class="ot-sdk-cookie-policy-group-desc">description</p>\n                </li>\n            </ul>\n        </section>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="ot-table-header ot-host">Host</th>\n                    <th scope="col" class="ot-table-header ot-host-description">Host Description</th>\n                    <th scope="col" class="ot-table-header ot-cookies">Cookies</th>\n                    <th scope="col" class="ot-table-header ot-cookies-type">Type</th>\n                    <th scope="col" class="ot-table-header ot-life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="ot-host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="ot-host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="ot-cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-td-content">ARRAffinity</span>\n                    </td>\n                    <td class="ot-cookies-type" data-label="Type">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-type-td-content">1st Party</span>\n                    </td>\n                    <td class="ot-life-span-td" data-label="Life Span">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-life-span-td-content">100 days</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>',
                css: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-right:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:left}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;left:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;left:6px;width:40%;padding-right:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;left:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-right:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;left:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}",
                cssRTL: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-left:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:right}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;right:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-right:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;right:6px;width:40%;padding-left:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;right:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-left:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;right:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}"
            }
        }
    }, Zr = "opt-out", ei = (ti.prototype.initializeFeaturesAndSpecialPurposes = function () {
        var t = this;
        I.oneTrustIABConsent.features = [],
            I.oneTrustIABConsent.specialPurposes = [],
            A.Groups.forEach(function (e) {
                t.checkAndPopulateFeatAndSplPur(e)
            })
    }
        ,
        ti.prototype.checkAndPopulateFeatAndSplPur = function (e) {
            var t, o = this, n = P.GroupTypes;
            e.Type !== n.Ft && e.Type !== n.Spl_Pur || ((t = {}).groupId = e.OptanonGroupId,
                t.purposeId = e.PurposeId,
                t.value = !0,
                (e.Type === n.Ft ? I.oneTrustIABConsent.features : I.oneTrustIABConsent.specialPurposes).push(t)),
                e.SubGroups && e.SubGroups.forEach(function (e) {
                    o.checkAndPopulateFeatAndSplPur(e)
                })
        }
        ,
        ti.prototype.initGrpsAndHosts = function () {
            this.initializeGroupData(T.consentableGrps),
                A.showCookieList && y.isOptOutEnabled() ? this.initializeHostData(T.consentableGrps) : (I.hostsConsent = [],
                    io.writeHstParam(v.OPTANON_CONSENT))
        }
        ,
        ti.prototype.ensureHtmlGroupDataInitialised = function () {
            var e, t, o, n;
            this.initGrpsAndHosts(),
                I.showGeneralVendors && (go.populateGenVendorLists(),
                    go.initGenVendorConsent()),
                A.IsIabEnabled && (this.initializeIABData(),
                    this.initializeFeaturesAndSpecialPurposes()),
                I.vsIsActiveAndOptOut && this.initializeVendorsService(),
                p.setOrUpdate3rdPartyIABConsentFlag(),
                p.setGeolocationInCookies(),
                A.IsConsentLoggingEnabled && (e = window.OneTrust.dataSubjectParams || {},
                    o = "",
                    n = !1,
                    (t = k.readCookieParam(v.OPTANON_CONSENT, "iType")) && I.isV2Stub && e.id && e.token && (n = !0,
                        o = ge[t]),
                    Jr.createConsentTxn(!1, o, !1, n))
        }
        ,
        ti.prototype.initializeVendorsService = function () {
            var o = p.isAlertBoxClosedAndValid()
                , e = k.readCookieParam(v.OPTANON_CONSENT, co)
                , n = S.strToMap(e);
            I.getVendorsInDomain().forEach(function (e, t) {
                n.has(t) || (e = !o && f.checkIsActiveByDefault(e.groupRef),
                    n.set(t, e))
            }),
                I.vsConsent = n
        }
        ,
        ti.prototype.initializeGroupData = function (e) {
            var t;
            k.readCookieParam(v.OPTANON_CONSENT, so) ? (yo.synchroniseCookieGroupData(e),
                t = k.readCookieParam(v.OPTANON_CONSENT, so),
                I.groupsConsent = S.strToArr(t),
                I.gpcConsentTxn && (A.IsConsentLoggingEnabled && Jr.createConsentTxn(!1, "GPC value changed", !1, !0),
                    I.gpcConsentTxn = !1,
                    u.setAlertBoxClosed(!0))) : (I.groupsConsent = [],
                        e.forEach(function (e) {
                            I.groupsConsent.push("" + e.CustomGroupId + (f.checkIsActiveByDefault(e) && e.HasConsentOptOut ? ":1" : ":0"))
                        }),
                        A.IsConsentLoggingEnabled && window.addEventListener("beforeunload", this.consentDefaulCall))
        }
        ,
        ti.prototype.initializeHostData = function (e) {
            var t, r;
            k.readCookieParam(v.OPTANON_CONSENT, "hosts") ? (yo.synchroniseCookieHostData(),
                t = k.readCookieParam(v.OPTANON_CONSENT, "hosts"),
                I.hostsConsent = S.strToArr(t),
                e.forEach(function (e) {
                    f.isAlwaysActiveGroup(e) && e.Hosts.length && e.Hosts.forEach(function (e) {
                        I.oneTrustAlwaysActiveHosts.push(e.HostId)
                    })
                })) : (I.hostsConsent = [],
                    r = {},
                    e.forEach(function (e) {
                        var o = f.isAlwaysActiveGroup(e)
                            , n = I.syncRequired ? yo.groupHasConsent(e) : f.checkIsActiveByDefault(e);
                        e.Hosts.length && e.Hosts.forEach(function (e) {
                            var t;
                            r[e.HostId] ? yo.updateHostStatus(e, n) : (r[e.HostId] = !0,
                                o && I.oneTrustAlwaysActiveHosts.push(e.HostId),
                                t = yo.isHostPartOfAlwaysActiveGroup(e.HostId),
                                I.hostsConsent.push(e.HostId + (t || n ? ":1" : ":0")))
                        })
                    }))
        }
        ,
        ti.prototype.consentDefaulCall = function () {
            var e = parseInt(k.readCookieParam(v.OPTANON_CONSENT, De.INTERACTION_COUNT), 10);
            !isNaN(e) && 0 !== e || (u.triggerGoogleAnalyticsEvent(ko, "Click", "No interaction"),
                A.IsConsentLoggingEnabled && Jr.createConsentTxn(!0),
                window.removeEventListener("beforeunload", w.consentDefaulCall))
        }
        ,
        ti.prototype.fetchAssets = function (s) {
            return void 0 === s && (s = null),
                F(this, void 0, void 0, function () {
                    var t, o, n, r, i;
                    return M(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return t = m.moduleInitializer,
                                    i = p.isAlertBoxClosedAndValid(),
                                    o = !!s,
                                    i = w.isFetchBanner(t.IsSuppressBanner, i),
                                    n = w.cookieSettingBtnPresent(),
                                    n = T.isIab2orv2Template ? A.PCShowPersistentCookiesHoverButton && (!A.PCenterDynamicRenderingEnable || A.PCenterDynamicRenderingEnable && !n) : A.PCShowPersistentCookiesHoverButton,
                                    r = "true" === I.urlParams.get(at),
                                    I.hideBanner = r,
                                    [4, Promise.all([!i || A.NoBanner || r ? Promise.resolve(null) : Nt.getBannerContent(o, s), !t.IsSuppressPC || I.isPCVisible ? Nt.getPcContent() : Promise.resolve(null), n ? Nt.getCSBtnContent() : Promise.resolve(null), Nt.getCommonStyles()])];
                            case 1:
                                return i = e.sent(),
                                    r = i[0],
                                    o = i[1],
                                    t = i[2],
                                    n = i[3],
                                    w.fetchContent(r, o, t, n),
                                    w.setCookieListGroupData(),
                                    [2]
                        }
                    })
                })
        }
        ,
        ti.prototype.fetchContent = function (e, t, o, n) {
            var r;
            e && (r = e.html,
                m.fp.CookieV2SSR || (r = atob(e.html)),
                this.bannerGroup = {
                    name: e.name,
                    html: r,
                    css: e.css
                }),
                t && (this.preferenceCenterGroup = {
                    name: t.name,
                    html: atob(t.html),
                    css: t.css
                },
                    m.isV2Template = A.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name)),
                o && (this.csBtnGroup = {
                    name: "CookieSettingsButton",
                    html: atob(o.html),
                    css: o.css
                }),
                n && (this.commonStyles = n)
        }
        ,
        ti.prototype.cookieSettingBtnPresent = function () {
            return L("#ot-sdk-btn").length || L(".ot-sdk-show-settings").length || L(".optanon-show-settings").length
        }
        ,
        ti.prototype.isFetchBanner = function (e, t) {
            return !e || A.ShowAlertNotice && !t && e && !L("#onetrust-banner-sdk").length
        }
        ,
        ti.prototype.setCookieListGroupData = function () {
            var e;
            m.fp.CookieV2TrackingTechnologies || (e = (new $r).assets(),
                w.cookieListGroup = {
                    name: e.name,
                    html: e.html,
                    css: A.useRTL ? e.cssRTL : e.css
                })
        }
        ,
        ti.prototype.initializeIabPurposeConsentOnReload = function () {
            var t = this;
            T.consentableIabGrps.forEach(function (e) {
                t.setIABConsent(e, !1),
                    e.IsLegIntToggle = !0,
                    t.setIABConsent(e, !1)
            })
        }
        ,
        ti.prototype.initializeIABData = function (o, n, r) {
            var i = this
                , e = (void 0 === o && (o = !1),
                    void 0 === n && (n = !1),
                    void 0 === r && (r = !1),
                    I.oneTrustIABConsent)
                , t = (e.purpose = [],
                    e.vendors = [],
                    e.legIntVendors = [],
                    e.specialFeatures = [],
                    e.legimateInterest = [],
                    I.addtlVendors)
                , s = A.VendorConsentModel === Zr;
            t.vendorConsent = [],
                !e.IABCookieValue || o || n || p.reconsentRequired() ? (T.consentableIabGrps.forEach(function (e) {
                    var t;
                    n && !r ? i.setIABConsent(e, f.isAlwaysActiveGroup(e)) : r ? e.HasConsentOptOut && i.setIABConsent(e, !1) : (t = o && e.HasConsentOptOut,
                        i.setIABConsent(e, t),
                        e.Type === P.GroupTypes.Pur && (e.IsLegIntToggle = !0,
                            i.setIABConsent(e, e.HasLegIntOptOut)))
                }),
                    A.IsIabEnabled && r && (I.oneTrustIABConsent.legimateInterest = I.vendors.selectedLegInt.slice()),
                    t = r ? s : o || !n && s,
                    p.setIABVendor(t, r),
                    !p.reconsentRequired() || o || n || p.resetTCModel()) : (this.initializeIabPurposeConsentOnReload(),
                        eo.populateGoogleConsent(),
                        eo.populateVendorAndPurposeFromCookieData())
        }
        ,
        ti.prototype.canSoftOptInInsertForGroup = function (e) {
            var e = f.getGroupById(e);
            if (e)
                return e = e && !e.Parent ? e : f.getParentGroup(e.Parent),
                    "inactive landingpage" !== f.getGrpStatus(e).toLowerCase() || !ln.isLandingPage()
        }
        ,
        ti.prototype.setIABConsent = function (e, t) {
            e.Type === P.GroupTypes.Spl_Ft ? this.setIabSpeciFeatureConsent(e, t) : e.IsLegIntToggle ? (this.setIabLegIntConsent(e, t),
                e.IsLegIntToggle = !1) : this.setIabPurposeConsent(e, t)
        }
        ,
        ti.prototype.setIabPurposeConsent = function (o, n) {
            var r = !1;
            I.oneTrustIABConsent.purpose = I.oneTrustIABConsent.purpose.map(function (e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n,
                    r = !0),
                    e
            }),
                r || I.oneTrustIABConsent.purpose.push(o.IabGrpId + ":" + n)
        }
        ,
        ti.prototype.setIabLegIntConsent = function (o, n) {
            var r = !1;
            I.oneTrustIABConsent.legimateInterest = I.oneTrustIABConsent.legimateInterest.map(function (e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n,
                    r = !0),
                    e
            }),
                r || I.oneTrustIABConsent.legimateInterest.push(o.IabGrpId + ":" + n)
        }
        ,
        ti.prototype.setIabSpeciFeatureConsent = function (o, n) {
            var r = !1;
            I.oneTrustIABConsent.specialFeatures = I.oneTrustIABConsent.specialFeatures.map(function (e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n,
                    r = !0),
                    e
            }),
                r || I.oneTrustIABConsent.specialFeatures.push(o.IabGrpId + ":" + n)
        }
        ,
        ti);
    function ti() { }
    l.prototype.getSearchQuery = function (e) {
        var t = this
            , e = e.trim().split(/\s+/g);
        return new RegExp(e.map(function (e) {
            return t.escapeRegExp(e)
        }).join("|") + "(.+)?", "gi")
    }
        ,
        l.prototype.escapeRegExp = function (e) {
            return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
        }
        ,
        l.prototype.setGlobalFilteredList = function (e) {
            return I.currentGlobalFilteredList = e
        }
        ,
        l.prototype.vendorHasPurpose = function (e, t) {
            var o = !1
                , n = parseInt(T.iabGrpIdMap[t]);
            return -1 < t.indexOf(P.IdPatterns.Ft) ? (e.features || []).forEach(function (e) {
                e.featureId === n && (o = !0)
            }) : -1 < t.indexOf(P.IdPatterns.Spl_Ft) ? e.specialFeatures.forEach(function (e) {
                e.featureId === n && (o = !0)
            }) : -1 < t.indexOf(P.IdPatterns.Spl_Pur) ? (e.specialPurposes || []).forEach(function (e) {
                e.purposeId === n && (o = !0)
            }) : (e.purposes.forEach(function (e) {
                e.purposeId === n && (o = !0)
            }),
                e.legIntPurposes.forEach(function (e) {
                    e.purposeId === n && (o = !0)
                })),
                o
        }
        ,
        l.prototype.filterList = function (t, e, o) {
            var n, r, i = o && o.length;
            return "" !== t || i ? (i && (i = L("#onetrust-pc-sdk " + b.P_Fltr_Options + " input").el.length,
                r = !(n = []),
                i !== o.length ? e.forEach(function (t) {
                    r = !0,
                        t.vendorName && o.forEach(function (e) {
                            G.vendorHasPurpose(t, e) && n.push(t)
                        })
                }) : n = e,
                r && (n = n.filter(function (e, t, o) {
                    return o.indexOf(e) === t
                })),
                this.setGlobalFilteredList(n)),
                "" === t ? I.currentGlobalFilteredList : I.currentGlobalFilteredList.filter(function (e) {
                    if (e.vendorName)
                        return e.vendorName.toLowerCase().includes(t.toLowerCase())
                })) : this.setGlobalFilteredList(e)
        }
        ,
        l.prototype.loadVendorList = function (e, t) {
            void 0 === e && (e = "");
            var o = I.vendors
                , o = (I.currentGlobalFilteredList = o.list,
                    e ? (o.searchParam = e,
                        I.filterByIABCategories = [],
                        hn.updateFilterSelection(!1)) : o.searchParam !== e ? o.searchParam = "" : t = I.filterByIABCategories,
                    this.filterList(o.searchParam, o.list, t));
            L("#onetrust-pc-sdk " + b.P_Vendor_Content).el[0].scrollTop = 0,
                I.addtlVendorsList && 0 < Object.keys(I.addtlVendorsList).length && (this.hasGoogleVendors = !0),
                this.initVendorsData(e, o)
        }
        ,
        l.prototype.searchVendors = function (e, t, o, n) {
            if (n) {
                var r, i, s = this.getSearchQuery(n), a = 0;
                for (r in t)
                    r && (i = o === ve.GoogleVendor ? r : t[r].VendorCustomId,
                        i = L("" + e.vendorAccBtn + i).el[0].parentElement,
                        s.lastIndex = 0,
                        s.test(t[r][e.name]) ? (d(i, this._displayNull, !0),
                            a++) : d(i, "display: none;", !0));
                0 === a ? (L(e.accId).hide(),
                    o === ve.GoogleVendor ? this.hasGoogleVendors = !1 : this.hasGenVendors = !1) : (o === ve.GoogleVendor ? this.hasGoogleVendors = !0 : this.hasGenVendors = !0,
                        L(e.accId).show()),
                    this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, n)
            } else
                for (var l = L(" " + e.venListId + ' li[style^="display: none"]').el, c = 0; c < l.length; c++)
                    d(l[c], this._displayNull, !0);
            n = L("#onetrust-pc-sdk " + e.selectAllEvntHndlr).el[0];
            document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input[checked]") ? S.setCheckedAttribute("", n, !0) : S.setCheckedAttribute("", n, !1),
                document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input:not([checked])") ? n.parentElement.classList.add("line-through") : n.parentElement.classList.remove("line-through")
        }
        ,
        l.prototype.initGoogleVendors = function () {
            this.populateAddtlVendors(I.addtlVendorsList),
                this.venAdtlSelAllTglEvent()
        }
        ,
        l.prototype.initGenVendors = function () {
            this.populateGeneralVendors(),
                A.GenVenOptOut && A.GeneralVendors && A.GeneralVendors.length && this.genVenSelectAllTglEvent()
        }
        ,
        l.prototype.resetAddtlVendors = function () {
            G.searchVendors(G.googleSearchSelectors, I.addtlVendorsList, ve.GoogleVendor),
                this.showConsentHeader()
        }
        ,
        l.prototype.venAdtlSelAllTglEvent = function () {
            G.selectAllEventHandler({
                vendorsList: '#ot-addtl-venlst li:not([style^="display: none"]) .ot-ven-adtlctgl input',
                selAllCntr: "#onetrust-pc-sdk #ot-selall-adtlvencntr",
                selAllChkbox: "#onetrust-pc-sdk #ot-selall-adtlven-handler"
            })
        }
        ,
        l.prototype.genVenSelectAllTglEvent = function () {
            var e = {
                vendorsList: b.P_Gven_List + ' li:not([style^="display: none"]) .ot-ven-gvctgl input',
                selAllCntr: "#onetrust-pc-sdk #ot-selall-gnvencntr",
                selAllChkbox: "#onetrust-pc-sdk #ot-selall-gnven-handler"
            };
            G.selectAllEventHandler(e)
        }
        ,
        l.prototype.selectAllEventHandler = function (e) {
            for (var t = L(e.vendorsList).el, o = L(e.selAllCntr).el[0], n = L(e.selAllChkbox).el[0], r = !0, i = 0; i < t.length; i++) {
                if (!t[i].checked) {
                    r = !1;
                    break
                }
                r = !0
            }
            o && (r ? o.classList.remove("line-through") : o.classList.add("line-through")),
                n.checked = !0;
            for (var s = 0; s < t.length && !t[s].checked; s++)
                s !== t.length - 1 || t[s].checked || (n.checked = !1);
            S.setCheckedAttribute("", n, n.checked)
        }
        ,
        l.prototype.vendorLegIntToggleEvent = function () {
            for (var e = L(b.P_Vendor_Container + ' li:not([style^="display: none"]) .' + b.P_Ven_Ltgl + " input").el, t = L("#onetrust-pc-sdk #" + b.P_Sel_All_Vendor_Leg_El).el[0], o = L("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0], n = !0, r = 0; r < e.length; r++) {
                if (!e[r].checked) {
                    n = !1;
                    break
                }
                n = !0
            }
            n ? t.classList.remove("line-through") : t.classList.add("line-through"),
                o.checked = !0;
            for (var i = 0; i < e.length && !e[i].checked; i++)
                i !== e.length - 1 || e[i].checked || (o.checked = !1);
            S.setCheckedAttribute("", o, o.checked)
        }
        ,
        l.prototype.vendorsListEvent = function () {
            for (var e = L(b.P_Vendor_Container + ' li:not([style^="display: none"]) .' + b.P_Ven_Ctgl + " input").el, t = L("#onetrust-pc-sdk #" + b.P_Sel_All_Vendor_Consent_El).el[0], o = L("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0], n = !0, r = 0; r < e.length; r++) {
                if (!e[r].checked) {
                    n = !1;
                    break
                }
                n = !0
            }
            n ? t.classList.remove("line-through") : t.classList.add("line-through"),
                o.checked = !0;
            for (var i = 0; i < e.length && !e[i].checked; i++)
                i !== e.length - 1 || e[i].checked || (o.checked = !1);
            S.setCheckedAttribute("", o, o.checked)
        }
        ,
        l.prototype.showEmptyResults = function (e, t, o) {
            void 0 === o && (o = !1);
            var n = L("#onetrust-pc-sdk #no-results");
            e ? this.setNoResultsContent(t, o) : (L("#onetrust-pc-sdk " + b.P_Vendor_Content).removeClass("no-results"),
                n.length && n.remove())
        }
        ,
        l.prototype.playSearchStatus = function (e) {
            var t = e ? document.querySelectorAll(b.P_Host_Cntr + " > li") : document.querySelectorAll(b.P_Vendor_Container + ' li:not([style$="none;"]),' + b.P_Gven_List + ' li:not([style$="none;"])')
                , o = t.length
                , n = L('#onetrust-pc-sdk [role="status"]');
            o ? n.text(t.length + " " + (e ? "host" : "vendor") + (1 < o ? "s" : "") + " returned.") : n.el[0].textContent = ""
        }
        ,
        l.prototype.setNoResultsContent = function (e, t) {
            void 0 === t && (t = !1);
            var o, n, r, i = L("#onetrust-pc-sdk #no-results").el[0];
            if (!i)
                return t = G.getNoResultsFound(t),
                    o = document.createElement("div"),
                    n = document.createElement("p"),
                    t = document.createTextNode(t),
                    r = document.createElement("span"),
                    o.id = "no-results",
                    r.id = "user-text",
                    r.innerText = e,
                    n.appendChild(r),
                    n.appendChild(t),
                    o.appendChild(n),
                    L("#onetrust-pc-sdk " + b.P_Vendor_Content).addClass("no-results"),
                    L("#vendor-search-handler").el[0].setAttribute("aria-describedby", o.id),
                    L("#onetrust-pc-sdk " + b.P_Vendor_Content).append(o);
            i.querySelector("span").innerText = e
        }
        ,
        l.prototype.searchHostList = function (e) {
            var t = {}
                , o = [];
            I.showTrackingTech ? (t = I.currentTrackingTech,
                o = (t = e ? G.getFilteredAdditionaTechtData(e, t) : t).Cookies) : (o = I.currentGlobalFilteredList,
                    e && (o = this.searchList(e, o))),
                this.initHostData({
                    searchString: e,
                    cookiesList: o,
                    addTechData: t
                })
        }
        ,
        l.prototype.searchList = function (e, t) {
            var o = this.getSearchQuery(e);
            return t.filter(function (e) {
                return o.lastIndex = 0,
                    o.test(e.DisplayName || e.HostName)
            })
        }
        ,
        l.prototype.setListSearchValues = function (e) {
            var t = A.PCenterVendorSearchAriaLabel
                , o = A.PCenterVendorListSearch
                , n = A.PCenterVendorsListText
                , e = (e === _e.cookies && (t = A.PCenterCookieSearchAriaLabel,
                    o = A.PCenterCookieListSearch,
                    n = A.PCenterCookiesListText),
                    I.cookieListType !== ye.HostAndGenVen && I.cookieListType !== ye.Host || !I.showTrackingTech || (n = A.AdditionalTechnologiesConfig.PCTrackingTechTitle),
                    document.querySelector("#onetrust-pc-sdk " + b.P_Vendor_Title).innerText = n,
                    L("#onetrust-pc-sdk " + b.P_Vendor_Search_Input));
            e.el[0].placeholder = o,
                e.attr("aria-label", t)
        }
        ,
        l.prototype.initHostData = function (e) {
            var t = e.searchString
                , o = e.cookiesList
                , e = e.addTechData
                , n = (I.optanonHostList = o,
                    !1)
                , r = (this.setBackBtnTxt(),
                    L(b.P_Vendor_List + " #select-all-text-container p").html(A.PCenterAllowAllConsentText),
                    G.getHostParentContainer())
                , i = o && 0 === o.length
                , s = (I.showTrackingTech && (i = 0 === e.LocalStorages.length && 0 === e.SessionStorages.length && (0 === e.Cookies.length || 0 === e.Cookies[0].Cookies.length)),
                    I.cookieListType === ye.Host);
            this.showEmptyResults(i, t, s),
                this.setHostListSearchValues(),
                L("#filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, A.PCenterCookieListFilterAria);
            L("#filter-btn-handler title").html(A.PCenterCookieListFilterAria),
                m.isV2Template && L("#ot-sel-blk span:first-child").html(A.PCenterAllowAllConsentText || A.ConsentText);
            for (var a = document.createDocumentFragment(), l = 0; l < o.length; l++) {
                var c = I.hosts.hostTemplate.cloneNode(!0)
                    , d = o[l].DisplayName || o[l].HostName;
                this.createHostAccordions(d, c, l),
                    n = this.createHostCheckboxes(d, o, l, c, n),
                    this.populateHostDataIntoDOMElements(c, o, d, l, a)
            }
            G.setCookiesInsideHostContainer(r, a, e);
            i = 1 === o.length && o[0].HostName === A.PCFirstPartyCookieListText;
            if (y.isOptOutEnabled() && !i) {
                S.setDisabledAttribute("#onetrust-pc-sdk #select-all-hosts-groups-handler", null, !n);
                for (var p = L("#onetrust-pc-sdk " + b.P_Host_Cntr + " .ot-host-tgl input").el, u = 0; u < p.length; u++)
                    p[u].addEventListener("click", this.hostsListEvent);
                L("#onetrust-pc-sdk " + b.P_Select_Cntr).removeClass("ot-hide"),
                    this.hostsListEvent()
            } else
                L("#onetrust-pc-sdk " + b.P_Select_Cntr).addClass("ot-hide")
        }
        ,
        l.prototype.setCookiesInsideHostContainer = function (e, t, o) {
            var n, r;
            I.showTrackingTech && o ? 0 < (o = G.getAdditionalTechnologiesHtml(o)).children.length && ((n = o.querySelector("." + this.TECH_COOKIES_SELECTOR + " .ot-acc-txt")) && ((r = e.querySelector("ul" + b.P_Host_Cntr)).appendChild(t),
                n.appendChild(r)),
                e.appendChild(o)) : e.appendChild(t)
        }
        ,
        l.prototype.getHostParentContainer = function () {
            var e = null;
            return I.showTrackingTech ? (e = document.querySelector("#onetrust-pc-sdk " + b.P_Vendor_Content + " .ot-sdk-column"),
                G.removeTrackingTechAccorions()) : (e = document.querySelector("#onetrust-pc-sdk " + b.P_Vendor_Content + " ul" + b.P_Host_Cntr)).innerHTML = "",
                e
        }
        ,
        l.prototype.removeTrackingTechAccorions = function () {
            var e = document.querySelector("#onetrust-pc-sdk " + b.P_Vendor_Content + " .ot-sdk-column")
                , t = e.querySelector("." + this.TECH_COOKIES_SELECTOR + " ul" + b.P_Host_Cntr);
            if (t ? (t.innerHTML = "",
                e.appendChild(t)) : (t = e.querySelector("ul" + b.P_Host_Cntr)).innerHTML = "",
                e)
                for (var o = e.querySelectorAll(".ot-add-tech"), n = o.length - 1; 0 <= n; n--) {
                    var r = o.item(n);
                    e.removeChild(r)
                }
        }
        ,
        l.prototype.setHostListSearchValues = function () {
            var e = T.pcName;
            A.GeneralVendorsEnabled && (m.isV2Template || e !== g) && this.setListSearchValues(_e.vendors),
                A.GeneralVendorsEnabled || !m.isV2Template && e === g || this.setListSearchValues(_e.cookies)
        }
        ,
        l.prototype.createHostAccordions = function (e, t, o) {
            var n = t.querySelector("." + b.P_Host_Bx)
                , e = (n && S.setHtmlAttributes(n, {
                    id: "host-" + o,
                    name: "host-" + o,
                    "aria-label": e + " " + A.PCViewCookiesText,
                    "aria-controls": "ot-host-acc-txt-" + o
                }),
                    t.querySelector(b.P_Acc_Txt));
            e && S.setHtmlAttributes(e, {
                id: "ot-host-acc-txt-" + o,
                role: "region",
                "aria-labelledby": n.id
            })
        }
        ,
        l.prototype.createHostCheckboxes = function (e, t, o, n, r) {
            var i = y.isOptOutEnabled()
                , s = m.isV2Template
                , a = T.pcName;
            return !i || t[o].isFirstParty ? (i = n.querySelector(".ot-host-tgl")) && i.parentElement.removeChild(i) : (i = void 0,
                s ? ((i = _.chkboxEl.cloneNode(!0)).classList.add("ot-host-tgl"),
                    i.querySelector("input").classList.add("host-checkbox-handler"),
                    a === g ? n.querySelector(b.P_Host_Hdr).insertAdjacentElement("beforebegin", i) : n.querySelector(b.P_Tgl_Cntr).insertAdjacentElement("beforeend", i)) : i = n.querySelector(".ot-host-tgl"),
                S.setHtmlAttributes(i.querySelector("input"), {
                    id: "ot-host-chkbox-" + o,
                    "aria-label": e,
                    hostId: t[o].HostId,
                    ckType: t[o].Type
                }),
                i.querySelector("label").setAttribute("for", "ot-host-chkbox-" + o),
                (t[o].Type === Ce.GenVendor ? I.genVendorsConsent[t[o].HostId] : -1 !== I.hostsConsent.indexOf(t[o].HostId + ":1")) ? (S.setCheckedAttribute(null, i.querySelector("input"), !0),
                    t[o].isActive ? S.setDisabledAttribute(null, i.querySelector("input"), !0) : r = r || !0) : (r = !0,
                        S.setCheckedAttribute(null, i.querySelector("input"), !1)),
                i.querySelector(b.P_Label_Txt).innerText = e),
                r
        }
        ,
        l.prototype.populateHostDataIntoDOMElements = function (t, o, e, n, r) {
            var i, s = this, a = m.isV2Template, l = T.pcName, l = (A.PCAccordionStyle === ce.PlusMinus ? t.querySelector(b.P_Acc_Header).insertAdjacentElement("afterbegin", _.plusMinusEl.cloneNode(!0)) : a && (i = _.arrowEl.cloneNode(!0),
                l === g ? t.querySelector(b.P_Host_View_Cookies).insertAdjacentElement("afterend", i) : t.querySelector(b.P_Tgl_Cntr).insertAdjacentElement("beforeend", i)),
                A.AddLinksToCookiepedia && !o[n].isFirstParty && (e = '\n                            <a  class="cookie-label"\n                                href="http://cookiepedia.co.uk/host/' + o[n].HostName + '"\n                                rel="noopener"\n                                target="_blank"\n                            >\n                                ' + e + '&nbsp;<span class="ot-scrn-rdr">' + A.NewWinTxt + "</span>\n                            </a>\n                        "),
                t.querySelector(b.P_Host_Title).innerHTML = e,
                t.querySelector(b.P_Host_Desc).innerHTML = o[n].Description,
                o[n].PrivacyPolicy && A.pcShowCookieHost && t.querySelector(b.P_Host_Desc).insertAdjacentHTML("afterend", '<a href="' + o[n].PrivacyPolicy + '" rel="noopener" target="_blank">' + (a ? A.PCGVenPolicyTxt : A.PCCookiePolicyText) + '&nbsp;<span class="ot-scrn-rdr">' + A.NewWinTxt + "</span></a>"),
                t.querySelector(b.P_Host_View_Cookies));
            return !I.showGeneralVendors || o[n].Cookies && o[n].Cookies.length ? A.PCViewCookiesText && (l.innerHTML = A.PCViewCookiesText) : (S.removeChild(l),
                L(t).addClass("ot-hide-acc")),
                o[n].Description && A.pcShowCookieHost || (i = t.querySelector(b.P_Host_Desc)).parentElement.removeChild(i),
                L(t.querySelector(b.P_Host_Opt)).html(""),
                null != (a = o[n].Cookies) && a.forEach(function (e) {
                    e = s.getCookieElement(e, o[n]);
                    L(t.querySelector(b.P_Host_Opt)).append(e)
                }),
                r.append(t),
                e
        }
        ,
        l.prototype.hostsListEvent = function () {
            for (var e = L("#onetrust-pc-sdk " + b.P_Host_Cntr + " .ot-host-tgl input").el, t = L("#onetrust-pc-sdk #" + b.P_Sel_All_Host_El).el[0], o = L("#onetrust-pc-sdk #select-all-hosts-groups-handler").el[0], n = L("#onetrust-pc-sdk " + b.P_Cnsnt_Header).el[0], r = !0, i = 0; i < e.length; i++) {
                if (!e[i].checked) {
                    r = !1;
                    break
                }
                r = !0
            }
            r ? t.classList.remove("line-through") : t.classList.add("line-through"),
                o.checked = !0;
            for (var s = 0; s < e.length && !e[s].checked; s++)
                s !== e.length - 1 || e[s].checked || (o.checked = !1);
            S.setCheckedAttribute("", o, o.checked),
                o && n && o.setAttribute(this.ARIA_LABEL_ATTRIBUTE, n.textContent + " " + A.PCenterSelectAllVendorsText)
        }
        ,
        l.prototype.loadHostList = function (e, t) {
            var o = {}
                , n = []
                , n = I.showTrackingTech ? (o = G.getAdditionalTechnologiesDataFromGroup(t),
                    (I.currentTrackingTech = o).Cookies) : G.getCombinedCookieList(t);
            I.currentGlobalFilteredList = n,
                this.initHostData({
                    searchString: e,
                    cookiesList: n,
                    addTechData: o
                })
        }
        ,
        l.prototype.getCombinedCookieList = function (e) {
            var t, o = [], n = [];
            return I.cookieListType !== ye.GenVen && (n = (t = G.getFirstsAndThirdCookisFromGroups(e)).firstPartyCookiesList,
                o = t.thirdPartyCookiesList,
                n.length) && o.unshift({
                    HostName: A.PCFirstPartyCookieListText,
                    DisplayName: A.PCFirstPartyCookieListText,
                    HostId: this.FIRST_PARTY_COOKIES_GROUP_NAME,
                    isFirstParty: !0,
                    Cookies: n,
                    Description: ""
                }),
                I.showGeneralVendors ? (t = this.getFilteredGenVendorsList(e),
                    q(o, this.mapGenVendorListToHostFormat(t))) : o
        }
        ,
        l.prototype.mapGenVendorListToHostFormat = function (e) {
            return e.map(function (e) {
                return {
                    Cookies: e.Cookies,
                    DisplayName: e.Name,
                    HostName: e.Name,
                    HostId: e.VendorCustomId,
                    Description: e.Description,
                    Type: Ce.GenVendor,
                    PrivacyPolicy: e.PrivacyPolicyUrl,
                    isActive: -1 < I.alwaysActiveGenVendors.indexOf(e.VendorCustomId)
                }
            })
        }
        ,
        l.prototype.mapGenVendorToHostFormat = function (e) {
            return {
                Cookies: e.Cookies,
                DisplayName: e.Name,
                HostName: e.Name,
                HostId: e.VendorCustomId,
                Description: e.Description,
                Type: Ce.GenVendor
            }
        }
        ,
        l.prototype.getFilteredGenVendorsList = function (t) {
            var e, o = [], n = [];
            return t.length ? (A.Groups.forEach(function (e) {
                q(e.SubGroups, [e]).forEach(function (e) {
                    -1 !== t.indexOf(e.CustomGroupId) && e.GeneralVendorsIds && e.GeneralVendorsIds.forEach(function (e) {
                        o.push(e)
                    })
                })
            }),
                e = A.GeneralVendors,
                o.length ? e.filter(function (e) {
                    if (-1 < o.indexOf(e.VendorCustomId))
                        return e
                }) : n) : A.GeneralVendors
        }
        ,
        l.prototype.initVendorsData = function (e, t) {
            var o = this
                , n = t
                , t = I.vendors.list;
            if (this.setBackBtnTxt(),
                L(b.P_Vendor_List + " #select-all-text-container p").html(A.PCenterAllowAllConsentText),
                G.setConsentLegIntAndHeaderText(),
                L("#onetrust-pc-sdk #filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, A.PCenterVendorListFilterAria),
                L("#onetrust-pc-sdk #filter-btn-handler title").html(A.PCenterVendorListFilterAria),
                this.hasIabVendors = 0 < n.length,
                this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, e, !1),
                G.hideOrShowVendorList(n),
                L("#onetrust-pc-sdk " + b.P_Vendor_Container + " ." + b.P_Ven_Bx).length !== t.length && this.attachVendorsToDOM(),
                n.length !== t.length)
                t.forEach(function (e) {
                    var t = L(b.P_Vendor_Container + " #IAB" + e.vendorId).el[0].parentElement;
                    -1 === n.indexOf(e) ? d(t, "display: none;", !0) : d(t, o._displayNull, !0)
                });
            else
                for (var r = L(b.P_Vendor_Container + ' li[style^="display: none"]').el, i = 0; i < r.length; i++)
                    d(r[i], this._displayNull, !0);
            !m.isV2Template && T.pcName === g || this.setListSearchValues(_e.vendors);
            e = document.querySelector("#vdr-lst-dsc");
            !e && A.PCenterVendorListDescText && ((e = document.createElement("p")).id = "vdr-lst-dsc",
                L(e).html(A.PCenterVendorListDescText),
                T.pcName !== g && T.pcName !== rt ? (t = document.querySelector("#onetrust-pc-sdk " + b.P_Vendor_Title_Elm)) && t.insertAdjacentElement("afterend", e) : (t = document.querySelector(b.P_Vendor_Content + " .ot-sdk-row")) && t.insertAdjacentElement("beforebegin", e)),
                L("#onetrust-pc-sdk " + b.P_Select_Cntr).removeClass("ot-hide"),
                this.vendorsListEvent(),
                T.legIntSettings.PAllowLI && this.vendorLegIntToggleEvent()
        }
        ,
        l.prototype.setConsentLegIntAndHeaderText = function () {
            m.isV2Template && (L("#ot-sel-blk span:first-child").html(A.PCenterAllowAllConsentText || A.ConsentText),
                L("#ot-sel-blk span:last-child").html(A.LegitInterestText),
                L("#onetrust-pc-sdk " + b.P_Cnsnt_Header).html(A.PCenterAllowAllConsentText),
                T.legIntSettings.PAllowLI && !T.legIntSettings.PShowLegIntBtn && L("#onetrust-pc-sdk .ot-sel-all-hdr .ot-li-hdr").html(A.PCenterLegitInterestText),
                T.legIntSettings.PAllowLI && !T.legIntSettings.PShowLegIntBtn || d(L("#ot-sel-blk span:first-child").el[0], "max-width: 100%;", !0))
        }
        ,
        l.prototype.hideOrShowVendorList = function (e) {
            0 === e.length ? L("#ot-lst-cnt .ot-acc-cntr").hide() : L("#ot-lst-cnt .ot-acc-cntr").show(),
                I.showTrackingTech && G.removeTrackingTechAccorions()
        }
        ,
        l.prototype.updateVendorsDOMToggleStatus = function (e, t) {
            void 0 === t && (t = !1);
            for (var o = L(b.P_Vendor_Container + " " + b.P_Tgl_Cntr).el, n = A.VendorConsentModel === Zr, r = 0; r < o.length; r++) {
                var i = o[r].querySelector("." + b.P_Ven_Ctgl + " input")
                    , s = o[r].querySelector("." + b.P_Ven_Ltgl + " input");
                t ? (i && S.setCheckedAttribute("", i, n),
                    s && S.setCheckedAttribute("", s, !0)) : (i && S.setCheckedAttribute("", i, e),
                        s && S.setCheckedAttribute("", s, e))
            }
            var a = L("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0]
                , a = (a && (a.parentElement.classList.remove("line-through"),
                    S.setCheckedAttribute("", a, !!t || e)),
                    L("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0]);
            a && (a.parentElement.classList.remove("line-through"),
                S.setCheckedAttribute("", a, t ? n : e)),
                A.UseGoogleVendors && (t ? this.updateGoogleCheckbox(n) : this.updateGoogleCheckbox(e)),
                I.showGeneralVendors && A.GenVenOptOut && this.updateGenVenCheckbox(e)
        }
        ,
        l.prototype.updateGenVenCheckbox = function (e) {
            for (var t = L(b.P_Gven_List + " .ot-ven-gvctgl input").el, o = 0; o < t.length; o++)
                S.setCheckedAttribute("", t[o], e);
            var n = L("#onetrust-pc-sdk #ot-selall-gnven-handler").el[0];
            n && (n.parentElement.classList.remove("line-through"),
                S.setCheckedAttribute("", n, e))
        }
        ,
        l.prototype.updateGoogleCheckbox = function (e) {
            for (var t = L("#ot-addtl-venlst .ot-tgl-cntr input").el, o = 0; o < t.length; o++)
                S.setCheckedAttribute("", t[o], e);
            var n = L("#onetrust-pc-sdk #ot-selall-adtlven-handler").el[0];
            n && (n.parentElement.classList.remove("line-through"),
                S.setCheckedAttribute("", n, e))
        }
        ,
        l.prototype.updateVendorDisclosure = function (e, t) {
            var r, i, e = L(b.P_Vendor_Container + " #IAB" + e).el[0].parentElement;
            t && t.disclosures && (r = e.querySelector(b.P_Ven_Dets),
                (e = (i = e.querySelector(b.P_Ven_Disc).cloneNode(!0)).cloneNode(!0)).innerHTML = "<p><b>" + A.PCenterVendorListDisclosure + ": </b></p>",
                r.insertAdjacentElement("beforeend", e),
                t.disclosures.forEach(function (e) {
                    var t, o = i.cloneNode(!0), n = "<p>" + A.PCenterVendorListStorageIdentifier + " </p> <p>" + (e.name || e.identifier) + " </p>";
                    e.type && (n += "<p>" + A.PCenterVendorListStorageType + " </p> <p>" + e.type + " </p>"),
                        e.maxAgeSeconds && (t = S.calculateCookieLifespan(e.maxAgeSeconds),
                            n += "<p>" + A.PCenterVendorListLifespan + " </p> <p>" + t + " </p>"),
                        e.domain && (n += "<p>" + A.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"),
                        e.purposes && (n += "<p>" + A.PCenterVendorListStoragePurposes + ' </p><div class="disc-pur-cont">',
                            e.purposes.forEach(function (e) {
                                e = null == (e = T.iabGroups.purposes[e]) ? void 0 : e.name;
                                e && (n += ' <p class="disc-pur">' + e + " </p>")
                            }),
                            n += "</div>"),
                        o.innerHTML = n,
                        r.insertAdjacentElement("beforeend", o)
                }),
                this.updateDomainsUsageInDisclosures(t, i, r))
        }
        ,
        l.prototype.updateDomainsUsageInDisclosures = function (e, n, r) {
            var t;
            e.domains && e.domains.length && ((t = n.cloneNode(!0)).innerHTML = "<p><b>" + A.PCVLSDomainsUsed + ": </b></p>",
                r.insertAdjacentElement("beforeend", t),
                e.domains.forEach(function (e) {
                    var t, o = n.cloneNode(!0);
                    e.domain && (t = "<p>" + A.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"),
                        e.use && (t += "<p>" + A.PCVLSUse + " </p> <p>" + e.use + " </p>"),
                        o.innerHTML = t,
                        r.insertAdjacentElement("beforeend", o)
                }))
        }
        ,
        l.prototype.addDescriptionElement = function (e, t) {
            var o = document.createElement("p");
            o.innerHTML = t || "",
                e.parentNode.insertBefore(o, e)
        }
        ,
        l.prototype.setVdrConsentTglOrChbox = function (e, t, o, n, r, i) {
            var s, a, l = I.vendorsSetting[e], t = t.cloneNode(!0);
            l.consent && (t.classList.add(b.P_Ven_Ctgl),
                l = -1 !== Ot.inArray(e + ":true", I.vendors.selectedVendors),
                s = t.querySelector("input"),
                m.isV2Template && (s.classList.add("vendor-checkbox-handler"),
                    a = t.querySelector(this.LABEL_STATUS),
                    A.PCShowConsentLabels ? a.innerHTML = l ? A.PCActiveText : A.PCInactiveText : S.removeChild(a)),
                S.setCheckedAttribute("", s, l),
                S.setHtmlAttributes(s, {
                    id: b.P_Vendor_CheckBx + "-" + i,
                    vendorid: e,
                    "aria-label": o
                }),
                t.querySelector("label").setAttribute("for", b.P_Vendor_CheckBx + "-" + i),
                t.querySelector(b.P_Label_Txt).textContent = o,
                T.pcName === g ? A.PCTemplateUpgrade ? n.insertAdjacentElement("beforeend", t) : L(n).append(t) : n.insertBefore(t, r))
        }
        ,
        l.prototype.setVndrLegIntTglTxt = function (e, t) {
            e = e.querySelector(this.LABEL_STATUS);
            A.PCShowConsentLabels ? e.innerHTML = t ? A.PCActiveText : A.PCInactiveText : S.removeChild(e)
        }
        ,
        l.prototype.setVdrLegIntTglOrChbx = function (e, t, o, n, r, i, s) {
            var a, l, c = I.vendorsSetting[e], o = o.cloneNode(!0);
            c.legInt && !c.specialPurposesOnly && (a = -1 !== Ot.inArray(e + ":true", I.vendors.selectedLegIntVendors),
                T.legIntSettings.PShowLegIntBtn ? (l = p.generateLegIntButtonElements(a, e, !0),
                    t.querySelector(b.P_Acc_Txt).insertAdjacentHTML("beforeend", l),
                    (l = t.querySelector(".ot-remove-objection-handler")) && d(l, l.getAttribute("data-style"))) : (l = o.querySelector("input"),
                        m.isV2Template && (l.classList.add("vendor-checkbox-handler"),
                            this.setVndrLegIntTglTxt(o, a)),
                        o.classList.add(b.P_Ven_Ltgl),
                        l.classList.remove("vendor-checkbox-handler"),
                        l.classList.add("vendor-leg-checkbox-handler"),
                        S.setCheckedAttribute("", l, a),
                        S.setHtmlAttributes(l, {
                            id: b.P_Vendor_LegCheckBx + "-" + r,
                            "leg-vendorid": e,
                            "aria-label": n
                        }),
                        o.querySelector("label").setAttribute("for", b.P_Vendor_LegCheckBx + "-" + r),
                        o.querySelector(b.P_Label_Txt).textContent = n,
                        t.querySelector("." + b.P_Ven_Ctgl) && (i = t.querySelector("." + b.P_Ven_Ctgl)),
                        T.pcName !== g || s.children.length ? s.insertBefore(o, i) : L(s).append(o),
                        c.consent || T.pcName !== g || o.classList.add(b.P_Ven_Ltgl_Only)))
        }
        ,
        l.prototype.setVndrSplPurSection = function (e, t) {
            var o = this
                , n = e.querySelector(".spl-purpose")
                , e = e.querySelector(".spl-purpose-grp")
                , r = e.cloneNode(!0);
            e.parentElement.removeChild(e),
                T.isIab2orv2Template && t.specialPurposes.forEach(function (e) {
                    L(r.querySelector(o.CONSENT_CATEGORY)).text(e.purposeName),
                        n.insertAdjacentHTML("afterend", r.outerHTML)
                }),
                0 === t.specialPurposes.length ? n.parentElement.removeChild(n) : L(n.querySelector("p")).text(A.SpecialPurposesText)
        }
        ,
        l.prototype.setVndrFtSection = function (e, t) {
            var o = this
                , n = e.querySelector(".vendor-feature")
                , e = e.querySelector(".vendor-feature-group")
                , r = e.cloneNode(!0);
            e.parentElement.removeChild(e),
                L(n.querySelector("p")).text(A.FeaturesText),
                t.features.forEach(function (e) {
                    L(r.querySelector(o.CONSENT_CATEGORY)).text(e.featureName),
                        n.insertAdjacentHTML("afterend", r.outerHTML)
                }),
                0 === t.features.length && n.parentElement.removeChild(n)
        }
        ,
        l.prototype.setVndrSplFtSection = function (e, t) {
            var o = this
                , n = e.querySelector(".vendor-spl-feature")
                , e = e.querySelector(".vendor-spl-feature-grp")
                , r = e.cloneNode(!0);
            n.parentElement.removeChild(e),
                T.isIab2orv2Template && t.specialFeatures.forEach(function (e) {
                    L(r.querySelector(o.CONSENT_CATEGORY)).text(e.featureName),
                        n.insertAdjacentHTML("afterend", r.outerHTML)
                }),
                0 === t.specialFeatures.length ? n.parentElement.removeChild(n) : L(n.querySelector("p")).text(A.SpecialFeaturesText)
        }
        ,
        l.prototype.setVndrAccTxt = function (e, t) {
            t = t.querySelector(b.P_Acc_Txt);
            t && S.setHtmlAttributes(t, {
                id: "IAB-ACC-TXT" + e,
                "aria-labelledby": "IAB-ACC-TXT" + e,
                role: "region"
            })
        }
        ,
        l.prototype.setVndrDisclosure = function (e, t, o) {
            t.deviceStorageDisclosureUrl && (S.setHtmlAttributes(o, {
                "disc-vid": e
            }),
                I.discVendors[e] = {
                    isFetched: !1,
                    disclosureUrl: t.deviceStorageDisclosureUrl
                })
        }
        ,
        l.prototype.setVndrListSelectAllChkBoxs = function () {
            var e = L("#onetrust-pc-sdk " + b.P_Sel_All_Vendor_Consent_Handler).el[0]
                , e = (e && e.setAttribute(this.ARIA_LABEL_ATTRIBUTE, A.PCenterSelectAllVendorsText + " " + A.LegitInterestText),
                    L("#onetrust-pc-sdk " + b.P_Sel_All_Vendor_Leg_Handler).el[0]);
            e && e.setAttribute(this.ARIA_LABEL_ATTRIBUTE, A.PCenterSelectAllVendorsText + " " + A.ConsentText)
        }
        ,
        l.prototype.setVndrConsentPurposes = function (e, t, o) {
            var n = this
                , r = e.querySelector(".vendor-consent-group")
                , i = e.querySelector(".vendor-option-purpose")
                , s = r.cloneNode(!0)
                , a = e.querySelector(".legitimate-interest")
                , l = !1;
            return r.parentElement.removeChild(r),
                t.consent && (L(i.querySelector("p")).text(A.ConsentPurposesText),
                    o.purposes.forEach(function (e) {
                        L(s.querySelector(n.CONSENT_CATEGORY)).text(e.purposeName);
                        e = s.querySelector(".consent-status");
                        e && s.removeChild(e),
                            a.insertAdjacentHTML("beforebegin", s.outerHTML),
                            l = !0
                    })),
                t.consent || i.parentElement.removeChild(i),
                l
        }
        ,
        l.prototype.getVndrTglCntr = function (e) {
            return m.isV2Template ? _.chkboxEl.cloneNode(!0) : e.querySelector(".ot-checkbox")
        }
        ,
        l.prototype.attachVendorsToDOM = function () {
            for (var p, u, g = this, h = I.vendors.list, C = I.vendors.vendorTemplate.cloneNode(!0), y = (I.discVendors = {},
                m.isV2Template && (p = C.querySelector(".ot-ven-pur").cloneNode(!0),
                    u = C.querySelector(b.P_Ven_Disc).cloneNode(!0),
                    L(C.querySelector(".ot-ven-dets")).html("")),
                document.createDocumentFragment()), f = this, e = 0; e < h.length; e++)
                !function (e) {
                    var t, o, n = C.cloneNode(!0), r = h[e].vendorId, i = h[e].vendorName, s = n.querySelector("." + b.P_Ven_Bx), a = I.vendorsSetting[r], l = (S.setHtmlAttributes(s, {
                        id: "IAB" + r,
                        name: "IAB" + r,
                        "aria-controls": "IAB-ACC-TXT" + r,
                        "aria-label": i
                    }),
                        s.nextElementSibling.setAttribute("for", "IAB" + r),
                        n.querySelector(b.P_Ven_Name).innerText = i,
                        f.updateIABLinksDOM(h[e], n),
                        f.getVndrTglCntr(n)), c = n.querySelector(b.P_Tgl_Cntr), d = (m.isV2Template || l.parentElement.removeChild(l),
                            n.querySelector(b.P_Arrw_Cntr));
                    f.setVdrConsentTglOrChbox(r, l, i, c, d, e),
                        f.setVdrLegIntTglOrChbx(r, n, l, i, e, d, c),
                        m.isV2Template && (c.insertAdjacentElement("beforeend", _.arrowEl.cloneNode(!0)),
                            A.PCAccordionStyle !== ce.Caret) && n.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", _.plusMinusEl.cloneNode(!0)),
                        f.setVndrAccTxt(r, n),
                        f.setVndrDisclosure(r, h[e], s),
                        m.isV2Template ? f.populateVendorDetailsHtml(n, p, h[e], u) : (t = n.querySelector(".legitimate-interest"),
                            l = n.querySelector(".legitimate-interest-group"),
                            o = l.cloneNode(!0),
                            u = n.querySelector(b.P_Ven_Disc),
                            i = n.querySelector(b.P_Ven_Dets),
                            d = u.cloneNode(!0),
                            u.parentElement.removeChild(u),
                            f.attachVendorDisclosure(d, h[e]),
                            i.insertAdjacentElement("afterbegin", d),
                            f.setVndrConsentPurposes(n, a, h[e]),
                            c = o.querySelector(".vendor-opt-out-handler"),
                            T.isIab2orv2Template && c.parentElement.removeChild(c),
                            l.parentElement.removeChild(l),
                            a.legInt && (L(t.querySelector("p")).text(A.LegitimateInterestPurposesText),
                                T.legIntSettings.PAllowLI) && T.isIab2orv2Template && h[e].legIntPurposes.forEach(function (e) {
                                    L(o.querySelector(g.CONSENT_CATEGORY)).text(e.purposeName),
                                        t.insertAdjacentHTML("afterend", o.outerHTML)
                                }),
                            a.legInt || t.parentElement.removeChild(t),
                            f.setVndrSplPurSection(n, h[e]),
                            f.setVndrFtSection(n, h[e]),
                            f.setVndrSplFtSection(n, h[e]),
                            (r = s.parentElement.querySelector(".vendor-purposes p")).parentElement.removeChild(r)),
                        y.appendChild(n),
                        f.setVndrListSelectAllChkBoxs()
                }(e);
            document.querySelector("#onetrust-pc-sdk " + b.P_Vendor_Container).append(y)
        }
        ,
        l.prototype.updateIABLinksDOM = function (e, t) {
            var o = e.vendorName
                , n = t.querySelector(b.P_Ven_Link)
                , t = t.querySelector(b.P_Ven_Leg_Claim)
                , r = T.isTcfV2Template ? e.vendorPrivacyUrl : e.policyUrl;
            S.setHtmlAttributes(n, {
                href: r,
                rel: "noopener",
                target: "_blank"
            }),
                n.innerHTML = A.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + o + " " + A.NewWinTxt + "</span>",
                n.insertAdjacentHTML("afterend", "<span class='ot-ext-lnk'></span>"),
                T.isTcfV2Template && e.legIntClaim ? (S.setHtmlAttributes(t, {
                    href: e.legIntClaim,
                    rel: "noopener",
                    target: "_blank"
                }),
                    t.innerHTML = A.PCIABVendorLegIntClaimText + "&nbsp;<span class='ot-scrn-rdr'>" + o + " " + A.NewWinTxt + "</span>",
                    t.insertAdjacentHTML("afterend", "<span class='ot-ext-lnk'></span>")) : t.remove()
        }
        ,
        l.prototype.populateVendorDetailsHtml = function (e, t, o, n) {
            var r, i, s, a, l, c, d, p, e = e.querySelector(".ot-ven-dets"), u = I.vendorsSetting[o.vendorId], n = n.cloneNode(!0);
            this.attachVendorDisclosure(n, o),
                e.insertAdjacentElement("beforeEnd", n),
                T.isTcfV2Template && null != (n = o.dataDeclaration) && n.length && (n = t.cloneNode(!0),
                    r = "<h4>" + A.PCVListDataDeclarationText + "</h4>",
                    r += "<ul>",
                    o.dataDeclaration.forEach(function (e) {
                        r += "<li><p>" + e.Name + "</p></li>"
                    }),
                    r += "</ul>",
                    n.innerHTML = r,
                    e.insertAdjacentElement("beforeEnd", n)),
                T.isTcfV2Template && null !== (null == (n = o.dataRetention) ? void 0 : n.stdRetention) && void 0 !== (null == (n = o.dataRetention) ? void 0 : n.stdRetention) && (n = t.cloneNode(!0),
                    c = 1 === o.dataRetention.stdRetention ? A.PCenterVendorListLifespanDay : A.PCenterVendorListLifespanDays,
                    s = "<h4>" + A.PCVListDataRetentionText + "</h4>",
                    s += "<li><p>" + A.PCVListStdRetentionText + " (" + o.dataRetention.stdRetention + " " + c + ")</p></li>",
                    n.innerHTML = s,
                    e.insertAdjacentElement("beforeEnd", n)),
                u.consent && (c = t.cloneNode(!0),
                    i = "<h4>" + A.ConsentPurposesText + "</h4>",
                    i += "<ul>",
                    o.purposes.forEach(function (e) {
                        var t;
                        i += "<li><p>" + e.purposeName,
                            T.isTcfV2Template && null != (t = o.dataRetention) && t.purposes && o.dataRetention.purposes[e.purposeId] && (e = 1 === (t = o.dataRetention.purposes[e.purposeId].retention) ? A.PCenterVendorListLifespanDay : A.PCenterVendorListLifespanDays,
                                i += " (" + t + " " + e + ")"),
                            i += "</p></li>"
                    }),
                    i += "</ul>",
                    c.innerHTML = i,
                    e.insertAdjacentElement("beforeEnd", c)),
                u.legInt && o.legIntPurposes.length && (s = t.cloneNode(!0),
                    a = "<h4>" + A.LegitimateInterestPurposesText + "</h4>",
                    a += "<ul>",
                    o.legIntPurposes.forEach(function (e) {
                        a += "<li><p>" + e.purposeName + "</p></li>"
                    }),
                    a += "</ul>",
                    s.innerHTML = a,
                    e.insertAdjacentElement("beforeEnd", s)),
                T.isIab2orv2Template && o.specialPurposes.length && (n = t.cloneNode(!0),
                    l = "<h4>" + A.SpecialPurposesText + "</h4>",
                    l += "<ul>",
                    o.specialPurposes.forEach(function (e) {
                        var t;
                        l += "<li><p>" + e.purposeName,
                            T.isTcfV2Template && null != (t = o.dataRetention) && t.specialPurposes && o.dataRetention.specialPurposes[e.purposeId] && (e = 1 === (t = o.dataRetention.specialPurposes[e.purposeId].retention) ? A.PCenterVendorListLifespanDay : A.PCenterVendorListLifespanDays,
                                l += " (" + t + " " + e + ")"),
                            l += "</p></li>"
                    }),
                    l += "</ul>",
                    n.innerHTML = l,
                    e.insertAdjacentElement("beforeEnd", n)),
                o.features.length && (c = t.cloneNode(!0),
                    d = "<h4>" + A.FeaturesText + "</h4>",
                    d += "<ul>",
                    o.features.forEach(function (e) {
                        d += "<li><p>" + e.featureName + "</p></li>"
                    }),
                    d += "</ul>",
                    c.innerHTML = d,
                    e.insertAdjacentElement("beforeEnd", c)),
                T.isIab2orv2Template && o.specialFeatures.length && (u = t.cloneNode(!0),
                    p = "<h4>" + A.SpecialFeaturesText + "</h4>",
                    p += "<ul>",
                    o.specialFeatures.forEach(function (e) {
                        p += "<li><p>" + e.featureName + "</p></li>"
                    }),
                    p += "</ul>",
                    u.innerHTML = p,
                    e.insertAdjacentElement("beforeEnd", u))
        }
        ,
        l.prototype.InitializeVendorList = function () {
            var e;
            I.vendors.list = I.iabData ? I.iabData.vendors : null,
                I.vendors.vendorTemplate = L(b.P_Vendor_Container + " li").el[0].cloneNode(!0),
                L("#onetrust-pc-sdk " + b.P_Vendor_Container).html(""),
                m.isV2Template || T.pcName !== g || (e = I.vendors.vendorTemplate.querySelectorAll(b.P_Acc_Header),
                    (e = T.legIntSettings.PAllowLI && T.isIab2orv2Template ? e[0] : e[1]).parentElement.removeChild(e))
        }
        ,
        l.prototype.cancelVendorFilter = function () {
            for (var e = L("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
                var o = e[t].getAttribute("data-purposeid")
                    , o = 0 <= I.filterByIABCategories.indexOf(o);
                S.setCheckedAttribute(null, e[t], o)
            }
        }
        ,
        l.prototype.attachVendorDisclosure = function (e, t) {
            var o = "<h4>" + A.PCenterVendorListLifespan + " :</h4><span> " + t.cookieMaxAge + "</span>";
            t.usesNonCookieAccess && (o += "<p>" + A.PCenterVendorListNonCookieUsage + "</p>"),
                e.innerHTML = o
        }
        ,
        l.prototype.updateVendorFilterList = function () {
            for (var e = L("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
                var o, n = e[t].getAttribute("data-purposeid");
                e[t].checked && I.filterByIABCategories.indexOf(n) < 0 ? I.filterByIABCategories.push(n) : !e[t].checked && -1 < I.filterByIABCategories.indexOf(n) && (o = I.filterByIABCategories,
                    I.filterByIABCategories.splice(o.indexOf(n), 1))
            }
            return I.filterByIABCategories
        }
        ,
        l.prototype.saveVendorStatus = function () {
            var e = I.vendors
                , t = I.oneTrustIABConsent
                , t = (t.purpose = e.selectedPurpose.slice(),
                    t.legimateInterest = e.selectedLegInt.slice(),
                    t.vendors = e.selectedVendors.slice(),
                    t.legIntVendors = e.selectedLegIntVendors.slice(),
                    t.specialFeatures = e.selectedSpecialFeatures.slice(),
                    I.addtlVendors);
            t.vendorConsent = Object.keys(t.vendorSelected)
        }
        ,
        l.prototype.updateIabVariableReference = function () {
            var e = I.oneTrustIABConsent
                , t = I.vendors
                , o = (t.selectedPurpose = e.purpose.slice(),
                    t.selectedLegInt = e.legimateInterest.slice(),
                    t.selectedVendors = e.vendors.slice(),
                    t.selectedLegIntVendors = e.legIntVendors.slice(),
                    t.selectedSpecialFeatures = e.specialFeatures.slice(),
                    I.addtlVendors);
            o.vendorSelected = {},
                o.vendorConsent.forEach(function (e) {
                    o.vendorSelected[e] = !0
                })
        }
        ,
        l.prototype.allowAllhandler = function () {
            w.initializeIABData(!0, !1)
        }
        ,
        l.prototype.rejectAllHandler = function (e) {
            w.initializeIABData(!1, !0, e = void 0 === e ? !1 : e)
        }
        ,
        l.prototype.populateAddtlVendors = function (e) {
            var t, o, n, r, i, s, a, l = (A.PCAccordionStyle === ce.Caret ? _.arrowEl : _.plusMinusEl).cloneNode(!0), c = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"), d = c.cloneNode(!0), c = (S.removeChild(d.querySelector("#ot-selall-hostcntr")),
                S.removeChild(c.querySelector("#ot-selall-vencntr")),
                S.removeChild(c.querySelector("#ot-selall-licntr")),
                _.accordionEl.cloneNode(!0)), c = (c.classList.add("ot-iab-acc"),
                    c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", l.cloneNode(!0)),
                    c.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + A.PCIABVendorsText + "</div>"),
                    c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", d),
                    c.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", L("#ot-ven-lst").el[0]),
                    L("#ot-lst-cnt .ot-sdk-column").append(c),
                    c.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, A.PCIABVendorsText),
                    this.iabAccInit = !0,
                    d.cloneNode(!0)), p = (S.removeChild(c.querySelector("#ot-selall-licntr")),
                        c.querySelector(".ot-chkbox").id = "ot-selall-adtlvencntr",
                        c.querySelector("input").id = "ot-selall-adtlven-handler",
                        c.querySelector("label").setAttribute("for", "ot-selall-adtlven-handler"),
                        _.accordionEl.cloneNode(!0)), u = (p.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", l.cloneNode(!0)),
                            p.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + A.PCGoogleVendorsText + "</div>"),
                            p.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", c),
                            p.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-addtl-venlst'></ul>"),
                            p.classList.add("ot-adtlv-acc"),
                            p.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, A.PCGoogleVendorsText),
                            I.vendors.vendorTemplate.cloneNode(!0));
            for (t in u.querySelector("button").classList.remove("ot-ven-box"),
                u.querySelector("button").classList.add("ot-addtl-venbox"),
                S.removeChild(u.querySelector(".ot-acc-txt")),
                e)
                e[t] && (o = u.cloneNode(!0),
                    n = e[t].name,
                    o.querySelector(b.P_Ven_Name).innerText = n,
                    r = o.querySelector("button"),
                    S.setHtmlAttributes(r, {
                        id: "Adtl-IAB" + t
                    }),
                    S.setHtmlAttributes(o.querySelector(b.P_Ven_Link), {
                        href: e[t].policyUrl,
                        rel: "noopener",
                        target: "_blank"
                    }),
                    o.querySelector(b.P_Ven_Link).innerHTML = A.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + n + " " + A.NewWinTxt + "</span>",
                    (r = _.chkboxEl.cloneNode(!0)).classList.remove("ot-ven-ctgl"),
                    r.classList.add("ot-ven-adtlctgl"),
                    i = Boolean(I.addtlVendors.vendorSelected[t]),
                    (s = r.querySelector("input")).classList.add("ot-addtlven-chkbox-handler"),
                    a = r.querySelector(this.LABEL_STATUS),
                    A.PCShowConsentLabels ? a.innerHTML = i ? A.PCActiveText : A.PCInactiveText : S.removeChild(a),
                    S.setCheckedAttribute("", s, i),
                    S.setHtmlAttributes(s, {
                        id: "ot-addtlven-chkbox-" + t,
                        "addtl-vid": t,
                        "aria-label": n
                    }),
                    r.querySelector("label").setAttribute("for", "ot-addtlven-chkbox-" + t),
                    r.querySelector(b.P_Label_Txt).textContent = n,
                    a = o.querySelector(b.P_Tgl_Cntr),
                    L(a).append(r),
                    a.insertAdjacentElement("beforeend", _.arrowEl.cloneNode(!0)),
                    A.PCAccordionStyle !== ce.Caret && o.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", _.plusMinusEl.cloneNode(!0)),
                    this.checkIfLegLinkRemove(o),
                    L(p.querySelector("#ot-addtl-venlst")).append(o));
            L("#ot-lst-cnt .ot-sdk-column").append(p),
                L("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function (e) {
                    S.setCheckedAttribute(null, e.target, e.target.checked)
                }),
                this.showConsentHeader()
        }
        ,
        l.prototype.populateGeneralVendors = function () {
            var e, t, o, c, d, p, u = this, n = A.GeneralVendors, r = document.querySelector(".ot-gv-acc"), g = !!r;
            n.length ? (this.hasGenVendors = !0,
                r && L(r).show(),
                e = (A.PCAccordionStyle === ce.Caret ? _.arrowEl : _.plusMinusEl).cloneNode(!0),
                this.iabAccInit || this.addIabAccordion(),
                (t = document.createElement("div")).setAttribute("class", "ot-sel-all-chkbox"),
                o = _.chkboxEl.cloneNode(!0),
                o.id = "ot-selall-gnvencntr",
                o.querySelector("input").id = "ot-selall-gnven-handler",
                o.querySelector("label").setAttribute("for", "ot-selall-gnven-handler"),
                L(t).append(o),
                c = _.accordionEl.cloneNode(!0),
                c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", e.cloneNode(!0)),
                c.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + A.PCenterGeneralVendorsText + "</div>"),
                A.GenVenOptOut && c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t),
                c.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-gn-venlst'></ul>"),
                c.classList.add("ot-gv-acc"),
                c.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, A.PCenterGeneralVendorsText),
                d = I.vendors.vendorTemplate.cloneNode(!0),
                d.querySelector("button").classList.remove("ot-ven-box"),
                d.querySelector("button").classList.add("ot-gv-venbox"),
                L(d.querySelector(".ot-acc-txt")).html('<ul class="ot-host-opt"></ul>'),
                g && L("" + b.P_Gven_List).html(""),
                p = !0,
                n.forEach(function (e) {
                    var t, o, n = u.mapGenVendorToHostFormat(e), r = d.cloneNode(!0), i = e.VendorCustomId, s = e.Name, a = r.querySelector(b.P_Ven_Link), l = (r.querySelector(b.P_Ven_Name).innerText = s,
                        r.querySelector("button"));
                    S.setHtmlAttributes(l, {
                        id: "Gn-" + i
                    }),
                        e.PrivacyPolicyUrl ? (S.setHtmlAttributes(a, {
                            href: e.PrivacyPolicyUrl,
                            rel: "noopener",
                            target: "_blank"
                        }),
                            a.innerHTML = A.PCGVenPolicyTxt + "&nbsp;<span class='ot-scrn-rdr'>" + s + " " + A.NewWinTxt + "</span>") : a.classList.add("ot-hide"),
                        u.addDescriptionElement(a, e.Description),
                        A.GenVenOptOut && ((l = _.chkboxEl.cloneNode(!0)).classList.remove("ot-ven-ctgl"),
                            l.classList.add("ot-ven-gvctgl"),
                            a = Boolean(I.genVendorsConsent[i]),
                            (t = l.querySelector("input")).classList.add("ot-gnven-chkbox-handler"),
                            o = l.querySelector(u.LABEL_STATUS),
                            A.PCShowConsentLabels ? o.innerHTML = a ? A.PCActiveText : A.PCInactiveText : S.removeChild(o),
                            S.setCheckedAttribute("", t, a),
                            S.setHtmlAttributes(t, {
                                id: "ot-gnven-chkbox-" + i,
                                "gn-vid": i,
                                "aria-label": s
                            }),
                            go.isGenVenPartOfAlwaysActiveGroup(i) ? S.setDisabledAttribute(null, t, !0) : p = !1,
                            l.querySelector("label").setAttribute("for", "ot-gnven-chkbox-" + i),
                            l.querySelector(b.P_Label_Txt).textContent = s,
                            o = r.querySelector(b.P_Tgl_Cntr),
                            L(o).append(l),
                            o.insertAdjacentElement("beforeend", _.arrowEl.cloneNode(!0))),
                        A.PCAccordionStyle !== ce.Caret && r.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", _.plusMinusEl.cloneNode(!0)),
                        e.Cookies.length || L(r).addClass("ot-hide-acc"),
                        e.Cookies.forEach(function (e) {
                            e = u.getCookieElement(e, n);
                            L(r.querySelector(".ot-host-opt")).append(e)
                        }),
                        u.checkIfLegLinkRemove(r),
                        L(g ? "" + b.P_Gven_List : c.querySelector("" + b.P_Gven_List)).append(r)
                }),
                g || L("#ot-lst-cnt .ot-sdk-column").append(c),
                L("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function (e) {
                    S.setCheckedAttribute(null, e.target, e.target.checked)
                }),
                this.showConsentHeader(),
                p && S.setDisabledAttribute("#ot-selall-gnven-handler", null, !0)) : (this.hasGenVendors = !1,
                    r && L(r).hide())
        }
        ,
        l.prototype.addIabAccordion = function () {
            var e = (A.PCAccordionStyle === ce.Caret ? _.arrowEl : _.plusMinusEl).cloneNode(!0)
                , t = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox")
                , o = t.cloneNode(!0)
                , t = (S.removeChild(o.querySelector("#ot-selall-hostcntr")),
                    S.removeChild(t.querySelector("#ot-selall-vencntr")),
                    S.removeChild(t.querySelector("#ot-selall-licntr")),
                    _.accordionEl.cloneNode(!0));
            t.classList.add("ot-iab-acc"),
                t.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", e.cloneNode(!0)),
                t.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + A.PCIABVendorsText + "</div>"),
                t.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o),
                t.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", L("#ot-ven-lst").el[0]),
                L("#ot-lst-cnt .ot-sdk-column").append(t),
                t.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, A.PCIABVendorsText),
                this.iabAccInit = !0
        }
        ,
        l.prototype.showConsentHeader = function () {
            var e = T.legIntSettings;
            L("#onetrust-pc-sdk .ot-sel-all-hdr").show(),
                e.PAllowLI && !e.PShowLegIntBtn || L("#onetrust-pc-sdk .ot-li-hdr").hide()
        }
        ,
        l.prototype.setBackBtnTxt = function () {
            (m.isV2Template ? (L(b.P_Vendor_List + " .back-btn-handler").attr(this.ARIA_LABEL_ATTRIBUTE, A.PCenterBackText),
                L(b.P_Vendor_List + " .back-btn-handler title")) : L(b.P_Vendor_List + " .back-btn-handler .pc-back-button-text")).html(A.PCenterBackText)
        }
        ,
        l.prototype.getCookieElement = function (e, t) {
            var o = I.hosts.hostCookieTemplate.cloneNode(!0)
                , n = o.querySelector("div").cloneNode(!0)
                , r = (n.classList.remove("cookie-name-container"),
                    L(o).html(""),
                    e.Name)
                , i = (A.AddLinksToCookiepedia && t.isFirstParty && (r = y.getCookieLabel(e, A.AddLinksToCookiepedia)),
                    n.cloneNode(!0));
            return i.classList.add(b.P_c_Name),
                i.querySelector("div:nth-child(1)").innerHTML = A.pcCListName,
                i.querySelector("div:nth-child(2)").innerHTML = r,
                L(o).append(i),
                A.pcShowCookieHost && ((r = n.cloneNode(!0)).classList.add(b.P_c_Host),
                    r.querySelector("div:nth-child(1)").innerHTML = A.pcCListHost,
                    r.querySelector("div:nth-child(2)").innerHTML = e.Host,
                    L(o).append(r)),
                A.pcShowCookieDuration && ((i = n.cloneNode(!0)).classList.add(b.P_c_Duration),
                    i.querySelector("div:nth-child(1)").innerHTML = A.pcCListDuration,
                    i.querySelector("div:nth-child(2)").innerHTML = e.IsSession ? A.LifespanTypeText : y.getDuration(e),
                    L(o).append(i)),
                A.pcShowCookieType && (r = t.Type === Ce.GenVendor ? !e.isThirdParty : t.isFirstParty,
                    (i = n.cloneNode(!0)).classList.add(b.P_c_Type),
                    i.querySelector("div:nth-child(1)").innerHTML = A.pcCListType,
                    i.querySelector("div:nth-child(2)").innerHTML = r ? A.firstPartyTxt : A.thirdPartyTxt,
                    L(o).append(i)),
                A.pcShowCookieCategory && (r = void 0,
                    r = t.Type === Ce.GenVendor ? e.category : (t.isFirstParty ? e : t).groupName) && ((i = n.cloneNode(!0)).classList.add(b.P_c_Category),
                        i.querySelector("div:nth-child(1)").innerHTML = A.pcCListCategory,
                        i.querySelector("div:nth-child(2)").innerHTML = r,
                        L(o).append(i)),
                A.pcShowCookieDescription && e.description && ((t = n.cloneNode(!0)).classList.add(b.P_c_Desc),
                    t.querySelector("div:nth-child(1)").innerHTML = A.pcCListDescription,
                    t.querySelector("div:nth-child(2)").innerHTML = e.description,
                    L(o).append(t)),
                o
        }
        ,
        l.prototype.getNoResultsFound = function (e) {
            e = I.showTrackingTech ? A.PCTechNotFound : e ? A.PCHostNotFound : A.PCVendorNotFound;
            return " " + e + "."
        }
        ,
        l.prototype.getAdditionalTechnologiesHtml = function (e) {
            var t = document.createDocumentFragment()
                , o = A.AdditionalTechnologiesConfig
                , n = 0 < e.Cookies.length;
            return (n = n && e.Cookies[0].HostId === this.FIRST_PARTY_COOKIES_GROUP_NAME ? 0 < e.Cookies[0].Cookies.length : n) && ((n = G.getMainAccordionContainer(o.PCCookiesLabel, o.PCCookiesLabel, !1)).classList.add(this.TECH_COOKIES_SELECTOR),
                t.appendChild(n)),
                0 < e.LocalStorages.length && ((n = G.getMainAccordionContainer(o.PCLocalStorageLabel, o.PCLocalStorageLabel)).classList.add("tech-local"),
                    G.setSessionLocalStorageTemplate(n, e.LocalStorages, A.AdditionalTechnologiesConfig.PCLocalStorageDurationText),
                    t.appendChild(n)),
                0 < e.SessionStorages.length && ((n = G.getMainAccordionContainer(o.PCSessionStorageLabel, o.PCSessionStorageDurationText)).classList.add("tech-session"),
                    G.setSessionLocalStorageTemplate(n, e.SessionStorages, A.AdditionalTechnologiesConfig.PCSessionStorageDurationText),
                    t.appendChild(n)),
                t
        }
        ,
        l.prototype.getMainAccordionContainer = function (e, t, o) {
            void 0 === o && (o = !0);
            var n = G.getAccordionStyleElement()
                , r = _.accordionEl.cloneNode(!0);
            return r.classList.add("ot-add-tech"),
                r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n),
                r.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + e + "</div>"),
                r.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, t),
                o && r.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeend", '<ul id="ot-host-lst" style="display: block;"></ul>'),
                r.cloneNode(!0)
        }
        ,
        l.prototype.setSessionLocalStorageTemplate = function (e, t, o) {
            var n = I.hosts.hostTemplate.cloneNode(!0)
                , r = (S.removeChild(n.querySelector(".ot-a scc-txt")),
                    e.querySelector(".ot-acc-txt " + b.P_Host_Cntr));
            r.removeAttribute("style"),
                r.classList.add("ot-host-opt");
            for (var i = 0, s = t; i < s.length; i++) {
                var a = s[i]
                    , a = G.getSessionLocalStorageElement(a, o);
                r.append(a)
            }
        }
        ,
        l.prototype.getSessionLocalStorageElement = function (e, t) {
            var o = I.hosts.hostCookieTemplate.cloneNode(!0)
                , n = o.querySelector("div").cloneNode(!0)
                , r = (L(o).html(""),
                    G.createKeyValueDivEle(n, b.P_c_Name, A.pcCListName, e.Name))
                , r = (L(o).append(r),
                    G.createKeyValueDivEle(n, b.P_c_Host, A.pcCListHost, e.Host))
                , r = (L(o).append(r),
                    G.createKeyValueDivEle(n, b.P_c_Duration, A.pcCListDuration, t))
                , t = (L(o).append(r),
                    G.createKeyValueDivEle(n, b.P_c_Desc, A.pcCListDescription, e.description));
            return L(o).append(t),
                o
        }
        ,
        l.prototype.createKeyValueDivEle = function (e, t, o, n) {
            e = e.cloneNode(!0);
            return e.classList.add(t),
                e.querySelector("div:nth-child(1)").innerHTML = o,
                e.querySelector("div:nth-child(2)").innerHTML = n,
                e
        }
        ,
        l.prototype.getAdditionalTechnologiesDataFromGroup = function (e) {
            for (var t, o = [], n = {
                SessionStorages: [],
                LocalStorages: [],
                Cookies: []
            }, r = 0, i = G.getGroupsFromFilter(e); r < i.length; r++) {
                var s = i[r]
                    , a = hn.getCookiesForGroup(s)
                    , o = q(o, null != (t = a.firstPartyCookiesList) ? t : []);
                n.Cookies = q(n.Cookies, a.thirdPartyCookiesList),
                    n.LocalStorages = q(n.LocalStorages, null != (a = null == (t = s.TrackingTech) ? void 0 : t.LocalStorages) ? a : []),
                    n.SessionStorages = q(n.SessionStorages, null != (a = null == (t = s.TrackingTech) ? void 0 : t.SessionStorages) ? a : [])
            }
            return o.length && n.Cookies.unshift({
                HostName: A.PCFirstPartyCookieListText,
                DisplayName: A.PCFirstPartyCookieListText,
                HostId: this.FIRST_PARTY_COOKIES_GROUP_NAME,
                isFirstParty: !0,
                Cookies: o,
                Description: ""
            }),
                n
        }
        ,
        l.prototype.getFirstsAndThirdCookisFromGroups = function (e) {
            var t = []
                , o = [];
            return G.getGroupsFromFilter(e).forEach(function (e) {
                e = hn.getCookiesForGroup(e);
                t = q(t, e.firstPartyCookiesList),
                    o = q(o, e.thirdPartyCookiesList)
            }),
            {
                firstPartyCookiesList: t,
                thirdPartyCookiesList: o
            }
        }
        ,
        l.prototype.getGroupsFromFilter = function (t) {
            var o = [];
            return A.Groups.forEach(function (e) {
                q(e.SubGroups, [e]).forEach(function (e) {
                    (!t || !t.length || -1 !== t.indexOf(e.CustomGroupId)) && o.push(e)
                })
            }),
                o
        }
        ,
        l.prototype.getAccordionStyleElement = function () {
            return (A.PCAccordionStyle === ce.Caret ? _.arrowEl : _.plusMinusEl).cloneNode(!0)
        }
        ,
        l.prototype.getFilteredAdditionaTechtData = function (e, t) {
            var o, n = {
                SessionStorages: [],
                LocalStorages: [],
                Cookies: []
            }, r = this.getSearchQuery(e), e = JSON.parse(JSON.stringify(t));
            return e.Cookies[0].HostId === this.FIRST_PARTY_COOKIES_GROUP_NAME && ((o = e.Cookies.shift()).Cookies = null == (t = o.Cookies) ? void 0 : t.filter(function (e) {
                return r.lastIndex = 0,
                    r.test(e.Name || e.Host)
            })),
                n.Cookies = null == (t = e.Cookies) ? void 0 : t.filter(function (e) {
                    return r.lastIndex = 0,
                        r.test(e.DisplayName || e.HostName)
                }),
                o && 0 < o.Cookies.length && n.Cookies.unshift(o),
                n.LocalStorages = null == (t = e.LocalStorages) ? void 0 : t.filter(function (e) {
                    return r.lastIndex = 0,
                        r.test(e.Name || e.Host)
                }),
                n.SessionStorages = null == (o = e.SessionStorages) ? void 0 : o.filter(function (e) {
                    return r.lastIndex = 0,
                        r.test(e.Name || e.Host)
                }),
                n
        }
        ,
        l.prototype.checkIfLegLinkRemove = function (e) {
            T.isTcfV2Template && e.querySelector(b.P_Ven_Leg_Claim).remove()
        }
        ;
    var G, oi = l;
    function l() {
        this.hasIabVendors = !1,
            this.hasGoogleVendors = !1,
            this.hasGenVendors = !1,
            this.iabAccInit = !1,
            this._displayNull = "display: '';",
            this.ARIA_LABEL_ATTRIBUTE = "aria-label",
            this.TECH_COOKIES_SELECTOR = "tech-cookies",
            this.FIRST_PARTY_COOKIES_GROUP_NAME = "first-party-cookies-group",
            this.LABEL_STATUS = ".ot-label-status",
            this.CONSENT_CATEGORY = ".consent-category",
            this.googleSearchSelectors = {
                vendorAccBtn: "#ot-addtl-venlst #Adtl-IAB",
                name: "name",
                accId: ".ot-adtlv-acc",
                selectAllEvntHndlr: "#ot-selall-adtlven-handler",
                venListId: "#ot-addtl-venlst",
                ctgl: ".ot-ven-adtlctgl"
            },
            this.genVendorSearchSelectors = {
                vendorAccBtn: "#ot-gn-venlst #Gn-",
                name: "Name",
                accId: ".ot-gv-acc",
                selectAllEvntHndlr: "#ot-selall-gnven-handler",
                venListId: "#ot-gn-venlst",
                ctgl: ".ot-ven-gvctgl"
            }
    }
    ii.prototype.initBanner = function () {
        this.canImpliedConsentLandingPage(),
            m.moduleInitializer.CookieSPAEnabled ? L(window).on("otloadbanner", this.windowLoadBanner.bind(this)) : L(window).one("otloadbanner", this.windowLoadBanner.bind(this))
    }
        ,
        ii.prototype.insertCSBtnHtmlAndCss = function (e) {
            document.getElementById("onetrust-style").innerHTML += w.csBtnGroup.css;
            var t = document.createElement("div")
                , t = (L(t).html(w.csBtnGroup.html),
                    t.querySelector("#ot-sdk-btn-floating"));
            e && t && L(t).removeClass("ot-hide"),
                L("#onetrust-consent-sdk").append(t),
                A.cookiePersistentLogo && (A.cookiePersistentLogo.includes("ot_guard_logo.svg") ? this.applyPersistentSvgOnDOM() : L(".ot-floating-button__front, .ot-floating-button__back").addClass("custom-persistent-icon"))
        }
        ,
        ii.prototype.applyPersistentSvgOnDOM = function () {
            return F(this, void 0, void 0, function () {
                var t;
                return M(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, Nt.getPersistentCookieSvg()];
                        case 1:
                            return t = e.sent(),
                                L(this.FLOATING_COOKIE_FRONT_BTN).html(t),
                                B.otGuardLogoResolve(!0),
                                [2]
                    }
                })
            })
        }
        ,
        ii.prototype.canImpliedConsentLandingPage = function () {
            this.isImpliedConsent() && !ln.isLandingPage() && "true" === k.readCookieParam(v.OPTANON_CONSENT, De.AWAITING_RE_CONSENT) && this.checkForRefreshCloseImplied()
        }
        ,
        ii.prototype.isImpliedConsent = function () {
            return A.ConsentModel && "implied consent" === A.ConsentModel.Name.toLowerCase()
        }
        ,
        ii.prototype.checkForRefreshCloseImplied = function () {
            h.closeOptanonAlertBox(),
                h.close(!0)
        }
        ,
        ii.prototype.hideCustomHtml = function () {
            var e = document.getElementById("onetrust-banner-sdk");
            e && d(e, "display: none;")
        }
        ,
        ii.prototype.shouldShowBanner = function (e) {
            return A.ShowAlertNotice && !e && !A.NoBanner && !I.hideBanner
        }
        ,
        ii.prototype.shouldShowPc = function (e) {
            return A.ShowAlertNotice && !e && A.NoBanner
        }
        ,
        ii.prototype.windowLoadBanner = function () {
            return F(this, void 0, void 0, function () {
                var t, o, n, r, i;
                return M(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (this.core.substitutePlainTextScriptTags(),
                                t = m.moduleInitializer,
                                L("#onetrust-consent-sdk").length ? o = document.getElementById("onetrust-consent-sdk") : (o = document.createElement("div"),
                                    L(o).attr("id", "onetrust-consent-sdk"),
                                    L(document.body).append(o)),
                                L(".onetrust-pc-dark-filter").length || (n = document.createElement("div"),
                                    L(n).attr("class", "onetrust-pc-dark-filter"),
                                    L(n).attr("class", "ot-hide"),
                                    L(n).attr("class", "ot-fade-in"),
                                    o.firstChild ? o.insertBefore(n, o.firstChild) : L(o).append(n)),
                                A.IsIabEnabled && this.iab.updateIabVariableReference(),
                                n = p.isAlertBoxClosedAndValid(),
                                r = this.shouldShowBanner(n),
                                i = this.shouldShowPc(n),
                                I.ntfyRequired ? (this.hideCustomHtml(),
                                    fn.init(),
                                    fn.changeState()) : (r ? B.initializeAlartHtmlAndHandler() : (A.IsGPPEnabled && Kr.setCmpDisplayStatus("disabled"),
                                        this.hideCustomHtml()),
                                        B.addEventListnerForVendorsList()),
                                t.IsSuppressPC || (O.insertPcHtml(),
                                    B.initialiseConsentNoticeHandlers(),
                                    A.IsIabEnabled && this.iab.InitializeVendorList()),
                                this.prepopulateCookieOrVendorPageTitle(),
                                this.initializeHbbTvScript(),
                                this.insertCSBtn(!r),
                                i) ? [4, B.toggleInfoDisplay()] : [3, 2];
                        case 1:
                            e.sent(),
                                e.label = 2;
                        case 2:
                            return B.insertCookieSettingText(),
                                this.initializeFloatingButtonOnBannerLoad(i),
                                ni.insertTrackigTechOrCookiePolicy(),
                                h.executeOptanonWrapper(),
                                this.initializeCookieParamsOnBannerLoad(r),
                                [2]
                    }
                })
            })
        }
        ,
        ii.prototype.prepopulateCookieOrVendorPageTitle = function () {
            m.isV2Template && (A.GeneralVendorsEnabled ? this.iab.setListSearchValues(_e.vendors) : this.iab.setListSearchValues(_e.cookies))
        }
        ,
        ii.prototype.initializeFloatingButtonOnBannerLoad = function (e) {
            var t = L(this.FLOATING_COOKIE_BTN)
                , o = L(this.FLOATING_COOKIE_FRONT_BTN)
                , n = L(this.FLOATING_COOKIE_BACK_BTN);
            t.length && (t.attr("title", A.CookieSettingButtonText),
                o.el[0].setAttribute(ht, A.AriaOpenPreferences),
                n.el[0].setAttribute(ht, A.AriaClosePreferences),
                e ? (o.el[0].setAttribute(Ct, !0),
                    o.el[0].style.display = "none") : (n.el[0].setAttribute(Ct, !0),
                        n.el[0].style.display = "none"))
        }
        ,
        ii.prototype.initializeCookieParamsOnBannerLoad = function (e) {
            k.readCookieParam(v.OPTANON_CONSENT, so) || io.writeGrpParam(v.OPTANON_CONSENT),
                k.readCookieParam(v.OPTANON_CONSENT, ao) || io.writeHstParam(v.OPTANON_CONSENT),
                I.showGeneralVendors && !k.readCookieParam(v.OPTANON_CONSENT, lo) && io.writeGenVenCookieParam(v.OPTANON_CONSENT),
                I.vsIsActiveAndOptOut && !k.readCookieParam(v.OPTANON_CONSENT, co) && io.writeVSConsentCookieParam(v.OPTANON_CONSENT),
                e && vo.setBannerFocus()
        }
        ,
        ii.prototype.initializeHbbTvScript = function () {
            var e;
            m.moduleInitializer.RemoteActionsEnabled && ((e = document.getElementById("hbbtv")) && e.remove(),
                (e = document.createElement("script")).id = "hbbtv",
                e.src = I.storageBaseURL + "/scripttemplates/" + m.moduleInitializer.Version + "/hbbtv.js",
                e.type = "text/javascript",
                L(document.body).append(e))
        }
        ,
        ii.prototype.insertCSBtn = function (e) {
            w.csBtnGroup && (this.insertCSBtnHtmlAndCss(e),
                B.initFlgtCkStgBtnEventHandlers())
        }
        ,
        ii.prototype.insertTrackingTechnologies = function () {
            var e;
            L("#ot-sdk-cookie-policy, #optanon-cookie-policy").length && (window.OnetrustCookiePolicy && window.OnetrustCookiePolicy.InsertCookiePolicyHtml ? window.OnetrustCookiePolicy.InsertCookiePolicyHtml(y, A, L) : ((e = document.createElement("script")).id = "cookie-policy-script",
                e.onload = function () {
                    return window.OnetrustCookiePolicy.InsertCookiePolicyHtml(y, A, L)
                }
                ,
                e.type = "text/javascript",
                e.src = I.storageBaseURL + "/scripttemplates/" + m.moduleInitializer.Version + "/trackingTechnologies.js",
                document.head.appendChild(e)))
        }
        ,
        ii.prototype.insertTrackigTechOrCookiePolicy = function () {
            m.fp.CookieV2TrackingTechnologies ? ni.insertTrackingTechnologies() : tr.insertCookiePolicyHtml()
        }
        ;
    var ni, ri = ii;
    function ii() {
        this.iab = G,
            this.core = hn,
            this.FLOATING_COOKIE_BTN = "#ot-sdk-btn-floating",
            this.FLOATING_COOKIE_FRONT_BTN = "#ot-sdk-btn-floating .ot-floating-button__front .ot-floating-button__open",
            this.FLOATING_COOKIE_BACK_BTN = "#ot-sdk-btn-floating .ot-floating-button__back .ot-floating-button__close"
    }
    D(ci, si = ir),
        ci.prototype.Close = function (e) {
            h.closeBanner(!1),
                window.location.href = "http://otsdk//consentChanged"
        }
        ,
        ci.prototype.RejectAll = function (e) {
            h.rejectAllEvent(),
                window.location.href = "http://otsdk//consentChanged"
        }
        ,
        ci.prototype.AllowAll = function (e) {
            h.AllowAllV2(e),
                window.location.href = "http://otsdk//consentChanged"
        }
        ,
        ci.prototype.ToggleInfoDisplay = function () {
            B.toggleInfoDisplay()
        }
        ;
    var si, ai, li = ci;
    function ci() {
        var e = null !== si && si.apply(this, arguments) || this;
        return e.mobileOnlineURL = T.mobileOnlineURL,
            e
    }
    ui.prototype.syncConsentProfile = function (e, t, o) {
        void 0 === o && (o = !1),
            e ? (I.dsParams.id = e.trim(),
                rr.setDataSubjectIdV2(e)) : e = I.dsParams.id,
            o && (I.dsParams.isAnonymous = o),
            t = t || I.dsParams.token,
            e && t && Nt.getConsentProfile(e, t).then(function (e) {
                return di.consentProfileCallback(e)
            })
    }
        ,
        ui.prototype.getConsentValue = function (e) {
            var t = null;
            switch (e) {
                case H[H.ACTIVE]:
                case H[H.ALWAYS_ACTIVE]:
                    t = he.Active;
                    break;
                case H[H.EXPIRED]:
                case H[H.OPT_OUT]:
                case H[H.PENDING]:
                case H[H.WITHDRAWN]:
                    t = he.InActive
            }
            return t
        }
        ,
        ui.prototype.isCookieGroup = function (e) {
            return !/IABV2|ISPV2|IFEV2|ISFV2|IAB2V2|IFE2V2|ISP2V2|ISF2V2/.test(e)
        }
        ,
        ui.prototype.syncPreferences = function (e, t) {
            void 0 === t && (t = !1);
            var o = C = k.getCookie(v.ALERT_BOX_CLOSED)
                , n = !1
                , r = !0
                , i = !1
                , s = S.strToArr(k.readCookieParam(v.OPTANON_CONSENT, "groups"));
            if (e && e.preferences.length)
                for (var a = 0, l = e.preferences; a < l.length; a++) {
                    var c = l[a]
                        , d = c.status === H[H.NO_CONSENT]
                        , p = T.domainGrps[c.id];
                    if (p)
                        if (-1 < I.grpsSynced.indexOf(p) && (I.syncedValidGrp = !0),
                            d && s.length) {
                            for (var u = -1, g = 0; g < s.length; g++)
                                if (s[g].split(":")[0] === p) {
                                    u = g;
                                    break
                                }
                            -1 < u && (s.splice(u, 1),
                                I.grpsSynced.push(p))
                        } else if (!d && (!C || new Date(c.lastInteractionDate) > new Date(o))) {
                            var h = this.getConsentValue(c.status)
                                , i = !0
                                , C = c.lastInteractionDate;
                            if (!t && this.isCookieGroup(p)) {
                                for (var y = p + ":" + h, f = -1, g = 0; g < s.length; g++) {
                                    var m = s[g].split(":");
                                    if (m[0] === p) {
                                        m[1] !== h && (s[g] = y,
                                            n = !0),
                                            f = g;
                                        break
                                    }
                                }
                                -1 === f && (s.push(y),
                                    n = !0)
                            }
                        }
                }
            else
                r = !1;
            return {
                alertBoxCookieVal: C,
                groupsConsent: s,
                profileFound: r,
                syncRequired: n,
                syncOnlyDate: i = i && !n
            }
        }
        ,
        ui.prototype.hideBannerAndPc = function () {
            var e = y.isBannerVisible();
            e && y.hideBanner(),
                (e || I.isPCVisible) && ($o.removeAddedOTCssStyles(),
                    rn.hideConsentNoticeV2())
        }
        ,
        ui.prototype.setOptanonConsentCookie = function (e, t) {
            var o;
            e.syncRequired && (k.writeCookieParam(v.OPTANON_CONSENT, "groups", e.groupsConsent.toString()),
                o = k.getCookie(v.OPTANON_CONSENT),
                k.setCookie(v.OPTANON_CONSENT, o, t, !1, new Date(e.alertBoxCookieVal)))
        }
        ,
        ui.prototype.setIabCookie = function (e, t, o) {
            o.syncGroups && o.syncGroups[I.syncGrpId] && o.syncGroups[I.syncGrpId].tcStringV2 ? k.getCookie(v.EU_PUB_CONSENT) !== o.syncGroups[I.syncGrpId].tcStringV2 && (e.syncRequired = !0,
                k.setCookie(v.EU_PUB_CONSENT, o.syncGroups[I.syncGrpId].tcStringV2, t, !1, new Date(e.alertBoxCookieVal))) : e.profileFound = !1
        }
        ,
        ui.prototype.setAddtlVendorsCookie = function (e, t) {
            A.UseGoogleVendors && !k.getCookie(v.ADDITIONAL_CONSENT_STRING) && k.setCookie(v.ADDITIONAL_CONSENT_STRING, I.addtlConsentVersion, t, !1, new Date(e.alertBoxCookieVal))
        }
        ,
        ui.prototype.createTrans = function () {
            var e = k.readCookieParam(v.OPTANON_CONSENT, "iType");
            Jr.createConsentTxn(!1, ge[e], !1, !0)
        }
        ,
        ui.prototype.updateGrpsDom = function () {
            for (var e = 0, t = E.getAllGroupElements(); e < t.length; e++)
                !function (e) {
                    var t = e.getAttribute("data-optanongroupid")
                        , o = f.getGroupById(t)
                        , n = !0
                        , r = S.findIndex(I.groupsConsent, function (e) {
                            return e.split(":")[0] === t
                        });
                    -1 < r && I.groupsConsent[r].split(":")[1] === he.InActive && (n = !1),
                        E.toggleGrpElements(e, o, n),
                        E.toogleSubGroupElement(e, n, !1, !0),
                        E.toogleSubGroupElement(e, n, !0, !0)
                }(t[e])
        }
        ,
        ui.prototype.updateVendorsDom = function () {
            A.IsIabEnabled && (G.updateIabVariableReference(),
                En.toggleVendorConsent(),
                T.legIntSettings.PAllowLI) && (T.legIntSettings.PShowLegIntBtn ? En.updateVendorLegBtns() : En.toggleVendorLi())
        }
        ,
        ui.prototype.consentProfileCallback = function (r) {
            return F(this, void 0, void 0, function () {
                var t, o, n;
                return M(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (t = this.syncPreferences(r),
                                o = A.ReconsentFrequencyDays,
                                n = p.isIABCrossConsentEnabled(),
                                this.setOptanonConsentCookie(t, o),
                                A.IsIabEnabled && !n && this.setIabCookie(t, o, r),
                                t.syncOnlyDate && (p.syncAlertBoxCookie(t.alertBoxCookieVal),
                                    p.syncCookieExpiry()),
                                t.syncRequired && t.profileFound) ? (I.syncRequired = t.syncRequired,
                                    p.syncAlertBoxCookie(t.alertBoxCookieVal),
                                    this.setAddtlVendorsCookie(t, o),
                                    this.hideBannerAndPc(),
                                    w.initGrpsAndHosts(),
                                    !n && A.NtfyConfig.ShowNtfy && p.isAlertBoxClosedAndValid() ? [4, fn.getContent()] : [3, 2]) : [3, 3];
                        case 1:
                            e.sent(),
                                fn.init(),
                                fn.changeState(),
                                e.label = 2;
                        case 2:
                            return A.IsIabEnabled && (p.setIABCookieData(),
                                eo.populateVendorAndPurposeFromCookieData()),
                                this.updateGrpsDom(),
                                this.updateVendorsDom(),
                                ln.setLandingPathParam(De.NOT_LANDING_PAGE),
                                hn.substitutePlainTextScriptTags(),
                                pn.updateGtmMacros(!0),
                                h.executeOptanonWrapper(),
                                [3, 4];
                        case 3:
                            !t.profileFound && t.alertBoxCookieVal && this.createTrans(),
                                e.label = 4;
                        case 4:
                            return [2]
                    }
                })
            })
        }
        ;
    var di, pi = ui;
    function ui() { }
    Ci.prototype.removeCookies = function () {
        k.removePreview(),
            k.removeOptanon(),
            k.removeAlertBox(),
            k.removeIab2(),
            k.removeAddtlStr(),
            k.removeVariant(),
            I.isPreview && gi.setPreviewCookie(),
            I.urlParams.get("otreset") && I.urlParams.set("otreset", "false");
        var e = window.location.pathname + "?" + I.urlParams.toString() + window.location.hash;
        gi.replaceHistory(e)
    }
        ,
        Ci.prototype.setPreviewCookie = function () {
            var e = new Date
                , t = (e.setTime(e.getTime() + 864e5),
                    I.geoFromUrl ? "&geo=" + I.geoFromUrl : "")
                , e = "expiry=" + e.toISOString() + t;
            k.setCookie(v.OT_PREVIEW, e, 1, !1)
        }
        ,
        Ci.prototype.bindStopPreviewEvent = function () {
            (window.attachEvent || window.addEventListener)("message", function (e) {
                return gi.onMessage(e)
            })
        }
        ,
        Ci.prototype.replaceHistory = function (e) {
            history.pushState({}, "", e),
                location.reload()
        }
        ,
        Ci.prototype.onMessage = function (e) {
            "string" == typeof e.data && e.data === gi.CLEAR_COOKIES && (gi.removeCookies(),
                e.source) && e.source.postMessage && e.source.postMessage(gi.CLEARED_COOKIES, e.origin)
        }
        ;
    var gi, hi, x = Ci;
    function Ci() {
        this.CLEAR_COOKIES = "CLEAR_OT_COOKIES",
            this.CLEARED_COOKIES = "CLEARED_OT_COOKIES"
    }
    Ne.initPolyfill(),
        k = new Tt,
        y = new Rt,
        T = new e,
        Bt = new Gt,
        gi = new x,
        (a = window.otStubData) && (m.moduleInitializer = null,
            m.fp = null,//m.moduleInitializer.TenantFeatures,
            I.isAMP = a.isAmp,
            I.dataDomainId = a.domainId,
            I.isPreview = a.isPreview,
            I.urlParams = a.urlParams,
            I.isV2Stub = a.isV2Stub || !1,
            T.gtmUpdatedinStub = a.gtmUpdated,
            a.isReset ? gi.removeCookies() : a.isPreview && gi.setPreviewCookie(),
            T.setBannerScriptElement(a.stubElement),
            T.setRegionRule(a.regionRule),
//        m.fp.CookieV2TargetedTemplates &&
        (T.conditionalLogicEnabled = !(null == (hi = T.getRegionRule().Conditions) || !hi.length),
                T.conditionalLogicEnabled) && (function () {
                    for (var e = T.getRegionRule(), t = 0; t < e.Conditions.length; t++)
                        try {
                            if (function (e) {
                                if (e)
                                    return e = window.atob(e),
                                        Function('"use strict"; return ' + e)()
                            }(e.Conditions[t].Expression))
                                return T.Condition = e.Conditions[t]
                        } catch (e) {
                            console.warn(e);
                            continue
                        }
                    T.allConditionsFailed = !0
                }(),
                    T.canUseConditionalLogic = !T.allConditionsFailed),
            I.userLocation = a.userLocation,
            I.crossOrigin = a.crossOrigin,
            T.bannerDataParentURL = a.bannerBaseDataURL,
            T.mobileOnlineURL = q(T.mobileOnlineURL, a.mobileOnlineURL),
            hi = T.getRegionRule(),
            T.multiVariantTestingEnabled = null/*m.moduleInitializer.MultiVariantTestingEnabled*/ && 0 < hi.Variants.length && y.isDateCurrent(hi.TestEndTime),
            T.otDataLayer = a.otDataLayer,
            I.grpsSynced = a.grpsSynced || [],
            I.isIabSynced = a.isIabSynced,
            I.isGacSynced = a.isGacSynced,
            I.syncRequired = a.isIabSynced || a.isGacSynced || a.grpsSynced && 0 < a.grpsSynced.length,
            I.consentPreferences = a.preferences,
            I.syncGrpId = a.syncGrpId,
            I.consentApi = a.consentApi,
            I.tenantId = a.tenantId,
            I.geoFromUrl = a.geoFromUrl,
            I.nonce = a.nonce,
            I.setAttributePolyfillIsActive = a.setAttributePolyfillIsActive,
            I.storageBaseURL = a.storageBaseURL,
            I.identifierType = a.identifierType,
            T.previewMode = a.previewMode,
            Bt.populateLangSwitcherPlhdr(),
            window.otStubData = {
                userLocation: I.userLocation
            },
            window.OneTrustStub = null),
        function () {
            F(this, void 0, void 0, function () {
                var r, i, s, a;
                return M(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (f = new Kt,
                                E = new Jo,
                                Qt = new $t,
                                G = new oi,
                                hn = new Cn,
                                h = new Gn,
                                B = new Qn,
                                O = new zn,
                                Kn = new Wn,
                                ni = new ri,
                                 (tr = new or),
                                Yt = new Jt,
                                go = new ho,
                                w = new ei,
                                pn = new un,
                                $n = new Zn,
                                u = new no,
                                _ = new Mt,
                                di = new pi,
                                En = new Vn,
                                Nt = new Dt,
                                vo = new Wo,
                                rn = new sn,
                                V = new wn,
                                Rn = new Fn,
                                qn = new Un,
                                c = new Jn,
                               // m.moduleInitializer.MobileSDK ? ai = new li : rr = new ir,
                                eo = new to,
                                o = k.getCookie(v.ALERT_BOX_CLOSED),
                                n = k.getCookie(v.OPTANON_CONSENT),
                                o && !n && k.removeAlertBox(),
                                T.setGCMcallback(),
                                a = T.getRegionRule(),
                                a = (T.canUseConditionalLogic ? T.Condition : a).UseGoogleVendors,
                                T.isIab2orv2Template = "IAB2" === T.getRegionRuleType() || "IAB2V2" === T.getRegionRuleType(),
                                T.isTcfV2Template = "IAB2V2" === T.getRegionRuleType(),
                                T.isIab2orv2Template) ? [4, Promise.all([Nt.getLangJson(), Nt.fetchGvlObj(), a ? Nt.fetchGoogleVendors() : Promise.resolve(null), Nt.loadCMP()])] : [3, 2];
                        case 1:
                            return a = e.sent(),
                                r = a[0],
                                i = a[1],
                                s = a[2],
                                I.gvlObj = i,
                                I.addtlVendorsList = s ? s.vendors : null,
                                [3, 4];
                        case 2:
                            return [4, Nt.getLangJson()];
                        case 3:
                            r = e.sent(),
                                e.label = 4;
                        case 4:
                            return [3, 6];
                        case 5:
                            e.sent(),
                                Kr = new Wr,
                                e.label = 6;
                        case 6:
                            var t;
                            return function (d) {
                                F(this, void 0, void 0, function () {
                                    var l, c;
                                    return M(this, function (e) {
                                        switch (e.label) {
                                            case 0:
                                                window.OneTrust = window.Optanon = Object.assign({}, window.OneTrust, function (e) {
                                                    var t, o = null;// m.moduleInitializer.MobileSDK;
                                                    t = o ? ai : rr;
                                                    var n = {
                                                        AllowAll: t.AllowAll,
                                                        BlockGoogleAnalytics: t.BlockGoogleAnalytics,
                                                        Close: t.Close,
                                                        getCSS: t.getCSS,
                                                        GetDomainData: t.GetDomainData,
                                                        getGeolocationData: t.getGeolocationData,
                                                        getHTML: t.getHTML,
                                                        Init: t.Init,
                                                        InitializeBanner: t.InitializeBanner,
                                                        initializeCookiePolicyHtml: t.initCookiePolicyAndSettings,
                                                        InsertHtml: t.InsertHtml,
                                                        InsertScript: t.InsertScript,
                                                        IsAlertBoxClosed: t.IsAlertBoxClosed,
                                                        IsAlertBoxClosedAndValid: t.IsAlertBoxClosedAndValid,
                                                        LoadBanner: t.LoadBanner,
                                                        OnConsentChanged: u.OnConsentChanged,
                                                        ReconsentGroups: t.ReconsentGroups,
                                                        RejectAll: t.RejectAll,
                                                        SetAlertBoxClosed: t.SetAlertBoxClosed,
                                                        setGeoLocation: t.setGeoLocation,
                                                        ToggleInfoDisplay: t.ToggleInfoDisplay,
                                                        TriggerGoogleAnalyticsEvent: t.TriggerGoogleAnalyticsEvent,
                                                        useGeoLocationService: t.useGeoLocationService,
                                                        FetchAndDownloadPC: t.FetchAndDownloadPC,
                                                        changeLanguage: t.changeLang,
                                                        testLog: t.getTestLogData,
                                                        UpdateConsent: t.updateSingularConsent,
                                                        IsVendorServiceEnabled: t.vendorServiceEnabled,
                                                        UpdateGCM: t.updateGCM
                                                    };
                                                    e.IsConsentLoggingEnabled && (n.getDataSubjectId = t.getDataSubjectId,
                                                        n.setConsentProfile = t.setConsentProfile,
                                                        n.setDataSubjectId = t.setDataSubjectIdV2,
                                                        I.isV2Stub) && (n.syncConsentProfile = di.syncConsentProfile);
                                                    o && (n.mobileOnlineURL = t.mobileOnlineURL,
                                                        n.otCookieData = I.otCookieData);
                                                    e.IsIabEnabled && (n.updateConsentFromCookies = u.updateConsentFromCookie,
                                                        n.getPingRequest = eo.getPingRequestForTcf,
                                                        n.getVendorConsentsRequestV2 = eo.getVendorConsentsRequestV2,
                                                        n.showVendorsList = t.showVendorsList);
                                                    return n
                                                }(null)),
                                                    p.initializeBannerVariables(d),
                                                    io = new po,
                                                    yo = new fo,
                                                    Jr = new Xr,
                                                    $o = new on,
                                                    ln = new cn,
                                                    Nn = new Dn,
                                                    fn = new Ln;
                                                var t, o, n, r = window.OTExternalConsent, i = (r && r.consentedDate && (r.groups || r.tcString || r.addtlString) && (t = [],
                                                    (i = r.groups.split(",")).forEach(function (e) {
                                                        e = e.split(":");
                                                        t.push({
                                                            lastInteractionDate: r.consentedDate,
                                                            status: "1" === e[1] ? H[H.ACTIVE] : H[H.OPT_OUT],
                                                            id: e[0]
                                                        }),
                                                            I.grpsSynced.push(e[0])
                                                    }),
                                                    I.consentPreferences = {
                                                        preferences: t,
                                                        syncGroups: null
                                                    },
                                                    I.syncRequired = !0,
                                                    io.updateGroupsInCookie(v.OPTANON_CONSENT, i),
                                                    k.setCookie(v.ALERT_BOX_CLOSED, r.consentedDate, 365),
                                                    r.tcString && (I.isIabSynced = !0,
                                                        k.setCookie(v.EU_PUB_CONSENT, r.tcString, 365)),
                                                    r.addtlString) && (I.isGacSynced = !0,
                                                        k.setCookie(v.ADDITIONAL_CONSENT_STRING, "" + r.addtlString, 365)),
                                                    I.isPreview && (p.syncOtPreviewCookie(),
                                                        gi.bindStopPreviewEvent()),
                                                    l = di.syncPreferences(I.consentPreferences, !0),
                                                    (I.syncRequired || l.syncRequired) && p.syncAlertBoxCookie(l.alertBoxCookieVal),
                                                    p.syncCookieExpiry(),
                                                    d), s = window.OneTrust.dataSubjectParams || {}, a = ((I.dsParams = s).id && rr.setDataSubjectIdV2(s.id, s.isAnonymous, s.identifierType, s.sendReceipt),
                                                        i), s = null == (i = s.identifierType) ? void 0 : i.trim();
                                                return I.isV2Stub && (o = void 0,
                                                    n = null == (n = I.identifierType) ? void 0 : n.trim(),
                                                    o = n || s || (null == (n = a.CommonData.ConsentIntegration) ? void 0 : n.DefaultIdentifier),
                                                    k.writeCookieParam(v.OPTANON_CONSENT, De.IDENTIFIER_TYPE, o)),
                                                    T.multiVariantTestingEnabled && T.selectedVariant && k.setCookie(v.SELECTED_VARIANT, T.selectedVariant.Id, A.ReconsentFrequencyDays),
                                                    [4, eo.initializeIABModule()];
                                            case 1:
                                                return e.sent(),
                                                    window.OneTrust.Init(!0),
                                                    false && Kr.initGppConsent(),
                                                    [4, w.fetchAssets()];
                                            case 2:
                                                return (e.sent(),
                                                    ni.initBanner(),
                                                    u.assetResolve(!0),
                                                    Yt.initialiseCssReferences(),
                                                    c = p.isIABCrossConsentEnabled(),
                                                    (I.syncedValidGrp || I.isIabSynced || I.isGacSynced) && !c && A.NtfyConfig.ShowNtfy && p.isAlertBoxClosedAndValid()) ? (I.ntfyRequired = !0,
                                                        [4, fn.getContent()]) : [3, 4];
                                            case 3:
                                                e.sent(),
                                                    e.label = 4;
                                            case 4:
                                                return c || window.OneTrust.LoadBanner(),
                                                    [2]
                                        }
                                    })
                                })
                            }(r),
                                //m.moduleInitializer.WebFormIntegrationEnabled && m.moduleInitializer.WebFormSrcUrl &&
                                (o = window.otStubData,
                                    n = document.createElement("script"),
                                    t =null,// m.moduleInitializer.WebFormSrcUrl,
                                    n.type = "text/javascript",
                                    n.src = t,
                                    n.setAttribute("dataId", ""),
                                    n.setAttribute("worker", ""),
                                    o.charset && n.setAttribute("charset", o.charset),
                                    o.crossOrigin && n.setAttribute("crossorigin", o.crossOrigin),
                                    document.querySelector('script[src="' + t + '"]') || document.getElementsByTagName("head")[0].appendChild(n)),
                                [2]
                    }
                    var o, n
                })
            })
        }()
}();
