(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [120], {
        95759: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[[...slug]]", function () {
                return t(72237)
            }])
        },
        66653: function (e, n, t) {
            "use strict";

            function i(e) {
                let {
                    src: n,
                    width: t,
                    quality: i
                } = e;
                return n
            }
            t.r(n), t.d(n, {
                default: function () {
                    return i
                }
            })
        },
        78043: function (e, n, t) {
            "use strict";
            t.d(n, {
                G2: function () {
                    return d
                },
                Om: function () {
                    return c
                },
                VY: function () {
                    return r
                },
                Yn: function () {
                    return p
                },
                Zx: function () {
                    return u
                },
                cf: function () {
                    return s
                },
                mN: function () {
                    return l
                }
            });
            var i = t(94698),
                a = t(19521);
            let o = (0, a.keyframes)(["0%{transform:translateX(0);}50%{transform:translateX(-100px);}100%{transform:translateX(0);}"]),
                l = a.default.div.withConfig({
                    componentId: "sc-f8b3834a-0"
                })(["display:flex;width:100%;min-height:510px;flex-direction:column;position:relative;margin-top:-56px;padding-bottom:40px;", "{padding-bottom:0px;}", "{", "}@media (min-width:768px){background-image:linear-gradient(rgba(2,17,65,0.7),rgba(2,17,65,0.25),rgba(2,17,65,0.2)),", ";background-repeat:no-repeat;background-size:cover;background-position:center;}@media (max-width:768px){min-height:0px;background-color:#2dc44d;padding-top:60px;}", "{padding-top:70px;}"], (0, i.down)("md"), (0, i.down)("sm"), e => e.isReady && (0, a.css)(["div[role='tablist'] > div > button{animation:", " 1.5s ease-in-out;animation-iteration-count:1;}"], o), e => e.imgUrl ? "url(".concat(e.imgUrl, ")") : "", (0, i.down)("lg")),
                r = a.default.div.withConfig({
                    componentId: "sc-f8b3834a-1"
                })(["display:", ";margin:", ";width:", ";max-width:", ";margin-bottom:", ";", "{margin-top:50px;}", "{max-width:100%;}"], e => !e.isMobile && "block", e => !e.isMobile && "0 auto", e => !e.isMobile && "1120px", e => !e.isMobile && "100%", e => !e.isMobile && "0px", (0, i.down)("sm"), (0, i.down)("md")),
                d = a.default.h1.withConfig({
                    componentId: "sc-f8b3834a-2"
                })(["color:#fff;font-size:20px;font-style:normal;font-weight:700;line-height:27px;text-align:center;margin:12px 0;"]),
                s = a.default.div.withConfig({
                    componentId: "sc-f8b3834a-3"
                })(["color:#fff;font-size:12px;bottom:10px;position:absolute;"]),
                c = a.default.h1.withConfig({
                    componentId: "sc-f8b3834a-4"
                })(["color:#fff;font-size:36px;font-weight:700;letter-spacing:0;line-height:33px;margin:120px 0 40px 0;text-align:center;font-style:normal;line-height:normal;@media (max-width:768px){font-size:18px;color:#53605e;margin:20px 0 0 0;text-align:center;margin-top:56px;}"]),
                u = a.default.h2.withConfig({
                    componentId: "sc-f8b3834a-5"
                })(["color:#fff;text-align:center;font-size:24px;font-style:normal;font-weight:700;line-height:normal;margin-top:-24px;"]),
                p = a.default.div.withConfig({
                    componentId: "sc-f8b3834a-6"
                })(["div[role='tablist'] > div > button{position:relative;a{position:unset;}a:after{content:'';position:absolute;width:100%;height:100%;top:0;left:0;z-index:1;border-radius:18px;}}"])
        },
        61640: function (e, n, t) {
            "use strict";
            t.d(n, {
                BG: function () {
                    return l
                },
                Ez: function () {
                    return r
                },
                xm: function () {
                    return u
                },
                gq: function () {
                    return m
                },
                a_: function () {
                    return h
                }
            });
            var i = t(27484),
                a = t.n(i),
                o = t(91640);
            let l = function (e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                null !== n && (0, o.a)(n);
                let t = a()(e.departureDate).format("DD.MM.YYYY"),
                    i = e.originLocation.slug,
                    l = e.destinationLocation.slug,
                    r = "".concat(i, "-").concat(l, "/?gidis=").concat(t);
                window.location.href = "https://www.enuygun.com/otobus-bileti/".concat(r)
            },
                r = function (e) {
                    var n, t;
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    null !== i && (0, o.a)(i);
                    let l = null == e ? void 0 : e.hasDropOffLocation,
                        r = e.pickUpTime,
                        d = e.dropOffTime,
                        s = a()(e.dropOffDate).format("YYYY-MM-DD"),
                        c = a()(e.pickUpDate).format("YYYY-MM-DD"),
                        u = null == e ? void 0 : null === (n = e.pickUpLocation) || void 0 === n ? void 0 : n.slug,
                        p = l ? null == e ? void 0 : null === (t = e.dropOffLocation) || void 0 === t ? void 0 : t.slug : u,
                        g = new URLSearchParams({
                            pickUpTime: r,
                            dropOffTime: d,
                            dropOffDate: s,
                            pickUpDate: c,
                            dropOffLocation: p,
                            pickUpLocation: u
                        });
                    window.location.href = "".concat("https://www.enuygun.com/arac-kiralama/arama/?".concat(g))
                },
                d = async e => {
                    try {
                        let n = await fetch("https://www.enuygun.com/ucak-bileti/get-hotel-slug/?cityCode=".concat(e)),
                            t = await n.json();
                        return null == t ? void 0 : t.hotel_slug
                    } catch (e) {
                        console.log("getHotelId", e)
                    }
                },
                s = {
                    default: "flights",
                    tr: "ucak-bileti",
                    de: "flug",
                    es: "vuelos"
                },
                c = {
                    default: "to",
                    tr: "",
                    de: "nach",
                    es: "a"
                },
                u = async function (e) {
                    var n, t, i, l, r, u, p, g, m, h, f, x, v, b, w, y, k;
                    let j, M, C, I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "tr",
                        _ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        Y = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "https://www.enuygun.com",
                        D = arguments.length > 4 ? arguments[4] : void 0;
                    null !== _ && (0, o.a)(_);
                    let L = "tr" !== I,
                        z = null !== (g = s[I]) && void 0 !== g ? g : s.default,
                        B = L ? "-".concat(null !== (m = c[I]) && void 0 !== m ? m : c.default) : "",
                        P = null == e ? void 0 : null === (n = e.origin) || void 0 === n ? void 0 : n.slug,
                        S = null == e ? void 0 : null === (t = e.destination) || void 0 === t ? void 0 : t.slug,
                        R = null == e ? void 0 : e.flightTrip,
                        E = (null == e ? void 0 : e.departureDate) && a()(null == e ? void 0 : e.departureDate).format("DD.MM.YYYY"),
                        N = (null == e ? void 0 : e.returnDate) && a()(null == e ? void 0 : e.returnDate).format("DD.MM.YYYY"),
                        T = null == e ? void 0 : null === (i = e.guest) || void 0 === i ? void 0 : i.adult,
                        G = null == e ? void 0 : null === (l = e.guest) || void 0 === l ? void 0 : l.child,
                        U = null == e ? void 0 : null === (r = e.guest) || void 0 === r ? void 0 : r.infant,
                        F = null == e ? void 0 : e.cabinClass,
                        Z = e.transitFilter,
                        V = "".concat(null == e ? void 0 : null === (u = e.origin) || void 0 === u ? void 0 : u.id.toLowerCase(), "-").concat(null == e ? void 0 : null === (p = e.destination) || void 0 === p ? void 0 : p.id.toLowerCase()),
                        A = "multi-destination" === R ? null == e ? void 0 : e.showListHotelMulti : null == e ? void 0 : e.showListHotel,
                        O = L ? "departure" : "gidis",
                        q = L ? "return" : "donus",
                        $ = {
                            [O]: E,
                            [q]: N,
                            [L ? "adult" : "yetiskin"]: T,
                            [L ? "child" : "cocuk"]: G,
                            [L ? "infant" : "bebek"]: U,
                            [L ? "class" : "sinif"]: F,
                            currency: D,
                            save: "1",
                            [L ? "direct" : "aktarmasiz"]: Z ? "1" : "0"
                        };
                    Object.keys($).forEach(e => {
                        (void 0 == $[e] || null == $[e] || "" == $[e] || "0" == $[e]) && delete $[e]
                    });
                    let W = new URLSearchParams($);
                    "multi-destination" === R ? (j = null == e ? void 0 : null === (h = e.multi) || void 0 === h ? void 0 : h.some(e => {
                        var n, t;
                        return (null == e ? void 0 : null === (n = e.origin) || void 0 === n ? void 0 : n.country_code) !== "TR" || (null == e ? void 0 : null === (t = e.destination) || void 0 === t ? void 0 : t.country_code) !== "TR"
                    }), M = "multi") : j = (null == e ? void 0 : null === (f = e.origin) || void 0 === f ? void 0 : f.country_code) !== "TR" || (null == e ? void 0 : null === (x = e.destination) || void 0 === x ? void 0 : x.country_code) !== "TR";
                    let X = j ? "international" : "domestic";
                    if (W.append("geotrip", X), W.append("trip", X), "round-trip" === R || "one-way" === R) C = "".concat(P).concat(B, "-").concat(S, "-").concat(V, "/?").concat(W);
                    else if ("multi-destination" === R) {
                        let n = null == e ? void 0 : null === (v = e.multi) || void 0 === v ? void 0 : v.map(e => {
                            var n, t;
                            return {
                                airIds: "".concat(null == e ? void 0 : null === (n = e.origin) || void 0 === n ? void 0 : n.id, "-").concat(null == e ? void 0 : null === (t = e.destination) || void 0 === t ? void 0 : t.id),
                                departureDay: a()(null == e ? void 0 : e.departureDate).format("DD.MM.YYYY")
                            }
                        });
                        W.delete(O), W.delete(q), W.append("route_type", M);
                        let t = n.map(e => null == e ? void 0 : e.airIds).join("-").toLowerCase(),
                            i = null == n ? void 0 : n.map(e => null == e ? void 0 : e.departureDay).join("-");
                        C = "".concat(t, "/").concat(i, "/?").concat(W)
                    }
                    if (A) {
                        let n = "multi-destination" === R ? null == e ? void 0 : null === (w = e.multi[0]) || void 0 === w ? void 0 : null === (b = w.destination) || void 0 === b ? void 0 : b.city_code : null == e ? void 0 : null === (y = e.destination) || void 0 === y ? void 0 : y.city_code,
                            t = await d(n),
                            i = G + U,
                            o = "multi-destination" === R ? a()(null == e ? void 0 : null === (k = e.multi[0]) || void 0 === k ? void 0 : k.departureDate).format("DD.MM.YYYY") : a()(null == e ? void 0 : e.departureDate).format("DD.MM.YYYY"),
                            l = "multi-destination" === R ? a()(e.multi[1].departureDate).format("DD.MM.YYYY") : a()(null == e ? void 0 : e.departureDate).format("DD.MM.YYYY");
                        o === l && (l = "multi-destination" === R ? a()(e.multi[1].departureDate).add(2, "day").format("DD.MM.YYYY") : a()(e.departureDate).add(2, "day").format("DD.MM.YYYY"));
                        let r = "".concat(T).concat(0 !== i ? ",".concat(i) : ""),
                            s = new URLSearchParams({
                                city: t,
                                checkInDate: o,
                                checkOutDate: l,
                                roomDetail: r,
                                country: "multi-destination" === R ? e.multi[0].destination.country_code : e.destination.country_code,
                                p: "search"
                            }),
                            c = "/Travel/Hotel/?".concat(s);
                        window.open("".concat(Y, "/").concat(z, "/").concat(C), "_blank"), window.location.href = c
                    }
                    A || (window.location.href = "".concat(Y, "/").concat(z, "/").concat(C))
                },
                p = e => e.map(e => {
                    let n = e.children.map(e => e);
                    return [e.adults, ...n]
                }).join("|"),
                g = e => {
                    let {
                        checkInDate: n,
                        checkOutDate: t,
                        hotel: i,
                        region: a,
                        rooms: o,
                        coordinate: l
                    } = e, r = {
                        checkInDate: n,
                        checkOutDate: t
                    };
                    return "konumum" === a.slug && l ? "/Travel/Hotel/?".concat(new URLSearchParams({
                        ...r,
                        city: a.id,
                        roomDetail: p(o),
                        lat: l.latitude.toString(),
                        lon: l.longitude.toString(),
                    })) : i.id ? "/Travel/Hotel/?".concat(new URLSearchParams({
                        ...r,
                        city: i.id,
                        rooms: p(o),
                        autoRequest: "1",
                        country: a.countryCode,
                        p: "hotel_detail"
                    })) : "/Travel/Hotel/?".concat(new URLSearchParams({
                        ...r,
                        city: a.id,
                        roomDetail: p(o),
                        country: a.countryCode,
                        p: "search"
                    }))
                },
                m = function (e) {
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    null !== n && (0, o.a)(n), window.location.href = g({
                        checkInDate: a()(e.date.startDate).format("DD.MM.YYYY"),
                        checkOutDate: a()(e.date.endDate).format("DD.MM.YYYY"),
                        rooms: [{
                            adults: e.guest.adult,
                            children: e.guest.child
                        }],
                        region: e.location,
                        coordinate: e.location.coordinate,
                        hotel: "hotel" !== e.location.elastic_type ? {
                            id: null,
                            name: null,
                            slug: null
                        } : {
                            id: e.location.id,
                            name: e.location.name,
                            slug: e.location.slug
                        }
                    })
                },
                h = function (e) {
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    null !== n && (0, o.a)(n);
                    let t = a()(e.departureDate + e.departureTime).format("YYYY-MM-DD HH:mm"),
                        i = e.originLocation.place_name,
                        l = e.originLocation.place_id,
                        r = e.destinationLocation.place_name,
                        d = e.destinationLocation.place_id,
                        s = new URLSearchParams({
                            origin_place_id: l,
                            destination_place_id: d,
                            departure_time: t,
                            origin_place_name: i,
                            destination_place_name: r
                        });
                    window.location.href = "".concat("https://www.enuygun.com/transfer/arama/?".concat(s))
                }
        },
        59389: function (e, n, t) {
            "use strict";
            t.d(n, {
                q: function () {
                    return c
                },
                Z: function () {
                    return u
                }
            });
            var i = t(85893),
                a = t(67294),
                o = t(67677),
                l = t(61798),
                r = t(94039),
                d = t(94698);
            let s = t(19521).default.section.withConfig({
                componentId: "sc-e593a0eb-0"
            })(["width:100%;max-width:1180px;margin:0 auto;.splide__track{padding-top:30px;padding-bottom:30px;margin-top:-30px;margin-bottom:-30px;margin-left:", ";margin-right:", ";}.splide__pagination{position:relative;bottom:0;padding:16px 1em 0 1em;.splide__pagination__page{background-color:#d7dddb;opacity:0.4;width:10px;height:10px;}.splide__pagination__page.is-active{background-color:#c2cac8;opacity:1;transform:none;}}.splide__arrow--prev{left:-22px !important;}.splide__arrow--next{right:-22px !important;}", "{margin:0 auto;max-width:98%;}"], e => e.padding ? "-".concat(e.padding + 2, "px") : void 0, e => e.padding ? "-".concat(e.padding + 2, "px") : void 0, (0, d.down)("md")),
                c = e => {
                    let {
                        src: n,
                        alt: t,
                        height: a,
                        width: o
                    } = e;
                    return (0, i.jsx)("img", {
                        width: o,
                        height: a,
                        "data-splide-lazy": n,
                        alt: t
                    })
                };
            var u = e => {
                let {
                    children: n,
                    options: t,
                    dataTestId: d,
                    slideStyle: c,
                    ...u
                } = e, {
                    language: p
                } = (0, r.mr)(), g = {
                    direction: null === l.ag || void 0 === l.ag ? void 0 : l.ag.dir(p || l.ag.language),
                    lazyLoad: "nearby",
                    ...t
                }, m = a.useRef(null);
                a.useEffect(() => {
                    m.current && m.current.go(g.start)
                }, [g.start]);
                let h = a.Children.map(n, (e, n) => (0, i.jsx)(o.jw, {
                    style: c,
                    children: a.cloneElement(e)
                }));
                return (0, i.jsx)(s, {
                    padding: g.padding,
                    children: (0, i.jsx)(o.tv, {
                        ref: m,
                        options: g,
                        children: h
                    })
                })
            }
        },
        13185: function (e, n, t) {
            "use strict";
            var i = t(85893),
                a = t(42550),
                o = t(30902),
                l = t(21696),
                r = t(11752),
                d = t.n(r),
                s = t(61640),
                c = t(94039),
                u = t(39356),
                p = t(68686);
            let {
                publicRuntimeConfig: g
            } = d()();
            (null == g ? void 0 : g.processEnv).NEXT_PUBLIC_CORE_API, n.Z = e => {
                let {
                    isAffixed: n
                } = e, {
                    xs: t,
                    sm: r,
                    md: d
                } = (0, a.Z)(), g = (0, p.d)(), {
                    endpoint: m,
                    market: h,
                    currency: f
                } = (0, c.mr)(), x = "".concat(m || "", "/trip-autocomplete/"), v = g || t || r || d ? o.Z : l.Z;
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(u.v, {
                        isAffixed: n,
                        "data-testid": "".concat(n ? "wingie-homepage-stickyForm" : "wingie-homepage-cardForm"),
                        children: (0, i.jsx)(v, {
                            url: x,
                            onSubmit: e => (0, s.xm)(e, h, void 0, m, null == f ? void 0 : f.iso),
                            multi: !1,
                            defaultValues: "sa" === h ? {
                                flightTrip: "round-trip"
                            } : void 0
                        })
                    })
                })
            }
        },
        39356: function (e, n, t) {
            "use strict";
            t.d(n, {
                v: function () {
                    return l
                }
            });
            var i = t(94698),
                a = t(19521);
            let o = a.default.div.withConfig({
                componentId: "sc-c36d5f0c-0"
            })(["border-radius:8px;padding:16px;padding-top:8px;flex-direction:column;align-items:flex-start;gap:16px;background-color:#fff;box-shadow:0px 4px 4px 0px rgba(0,0,0,0.25);", "{width:1120px;max-width:100%;margin:0 auto;}", "{max-width:98%;margin:0 auto;}", "{border-radius:30px 30px 0px 0px;background:var(--sky-extra-extra-light,#f8faf9);box-shadow:none;max-width:100%;}"], (0, i.up)("lg"), (0, i.down)("lg"), (0, i.down)("md")),
                l = (0, a.default)(o).withConfig({
                    componentId: "sc-c36d5f0c-1"
                })(["transition:top 0.4s ease-out;top:-180px;", "{position:", ";top:", ";z-index:10;left:0px;right:0px;}"], (0, i.up)("lg"), e => e.isAffixed ? "fixed" : "", e => e.isAffixed ? "0px" : "")
        },
        85605: function (e, n, t) {
            "use strict";
            t.d(n, {
                V: function () {
                    return a
                }
            });
            var i = t(94698);
            let a = t(19521).default.div.withConfig({
                componentId: "sc-1719d024-0"
            })(["position:relative;z-index:2;", "{margin:0 auto;width:1120px;max-width:100%;}", "{margin:0 auto;max-width:96%;}", "{max-width:100%;margin:0 14px;}"], (0, i.up)("lg"), (0, i.down)("md"), (0, i.down)("md"))
        },
        72237: function (e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                __N_SSP: function () {
                    return eV
                },
                default: function () {
                    return eA
                }
            });
            var i = t(85893),
                a = t(11752),
                o = t.n(a),
                l = t(67294),
                r = t(5152),
                d = t.n(r),
                s = t(61798),
                c = t(25675),
                u = t.n(c),
                p = t(59389),
                g = t(78921);
            let m = [{
                image: "https://cdn2.enuygun.com/media/lib/uploads/image/car-rental-banner-desktop-61382.webp",
                link: "https://www.enuygun.com/kampanyalar/arac-kiralama/arac-kiralamada-agustosa-ozel-4-000-tlye-varan-indirim/",
                alt: "enuygun-arac-kiralama",
                width: 728,
                height: 90,
                category: g.Z["arac-kiralama"]
            }, {
                image: "https://cdn2.enuygun.com/media/lib/uploads/image/hotel-banner-desktop-61183.png",
                link: "https://www.enuygun.com/kampanyalar/otel/otel-rezervasyonlarinda-10-000-tlye-varan-indirim-enuygunda/",
                alt: "enuygun-otel",
                width: 728,
                height: 90,
                category: g.Z.otel
            }],
                h = [{
                    image: "https://cdn2.enuygun.com/media/lib/uploads/image/car-rental-banner-mobile-61383.webp",
                    link: "https://www.enuygun.com/kampanyalar/arac-kiralama/arac-kiralamada-agustosa-ozel-4-000-tlye-varan-indirim/",
                    alt: "enuygun-arac-kiralama",
                    width: 350,
                    height: 220,
                    category: g.Z["arac-kiralama"]
                }, {
                    image: "https://cdn2.enuygun.com/media/lib/uploads/image/hotel-banner-mobile-61184.png",
                    link: "https://www.enuygun.com/kampanyalar/otel/otel-rezervasyonlarinda-10-000-tlye-varan-indirim-enuygunda/",
                    alt: "enuygun-otel",
                    width: 350,
                    height: 220,
                    category: g.Z.otel
                }];
            var f = t(19521);
            let x = f.default.div.withConfig({
                componentId: "sc-7e91ef36-0"
            })(["font-size:12px;color:#727e7c;margin-top:16px;"]),
                v = f.default.a.withConfig({
                    componentId: "sc-7e91ef36-1"
                })(["margin-top:20px;border:1px #c2cac8 solid;border-radius:8px;overflow:hidden;display:inline-flex;justify-content:center;width:100%;img{width:100%;}"]),
                b = f.default.div.withConfig({
                    componentId: "sc-7e91ef36-2"
                })(["max-width:728px;width:100%;margin:0 auto;text-align:center;"]);
            var w = t(73363),
                y = t(68686),
                k = () => {
                    let e = (0, y.d)(),
                        n = e ? h : m,
                        {
                            selectedCategoryIndex: t
                        } = (0, w.nF)(n),
                        a = -1 !== t ? t : 0;
                    return (0, i.jsxs)(b, {
                        children: [(0, i.jsx)(p.Z, {
                            options: {
                                arrows: !1,
                                gap: 16,
                                fixedWidth: e ? void 0 : "728px",
                                perPage: 1,
                                start: a
                            },
                            children: n.map((e, n) => (0, i.jsx)(v, {
                                href: "".concat(e.link, "?ref=hp-banner"),
                                target: "_blank",
                                rel: "noreferrer",
                                children: (0, i.jsx)(u(), {
                                    src: e.image,
                                    width: e.width,
                                    height: e.height,
                                    loading: a !== n ? "lazy" : void 0,
                                    alt: e.alt,
                                    priority: a === n
                                })
                            }, e.image))
                        }), e && (0, i.jsx)(x, {
                            children: "Enuygun Seyahat, Belge No: 7153"
                        })]
                    })
                },
                j = t(85605);
            class M extends l.Component {
                static getDerivedStateFromError(e) {
                    return {
                        hasError: !0
                    }
                }
                componentDidCatch(e, n) {
                    var t;
                    console.log(e, n.componentStack), console.log(null === (t = this.props) || void 0 === t ? void 0 : t.fallback), this.setState({
                        hasError: !0
                    })
                }
                render() {
                    return this.state.hasError ? (0, i.jsx)(i.Fragment, {
                        children: this.props.fallback
                    }) : (0, i.jsx)(i.Fragment, {
                        children: this.props.children
                    })
                }
                constructor(e) {
                    super(e), this.state = {
                        hasError: !1
                    }
                }
            }
            var C = t(57777);
            let I = [{
                title: "En y\xfcksek banka mevduat faiz oranları!",
                text: "Mevduatınıza en y\xfcksek faizi alın!",
                img: "https://cdn2.enuygun.com/media/lib/uploads/image/50285.png",
                url: "https://www.enuygun.com/mevduat/"
            }, {
                title: "Sana \xf6zel avantajlı kredi tekliflerini ka\xe7ırma!",
                text: "Uygun faiz oranlı kredilere başvur",
                img: "https://cdn2.enuygun.com/media/lib/uploads/image/50286.png",
                url: "https://www.enuygun.com/kredi/"
            }],
                _ = f.default.a.withConfig({
                    componentId: "sc-351a5731-0"
                })(["width:100%;margin-top:32px;border-radius:8px;color:#fff;position:relative;background-size:contain;display:flex;flex-direction:column;box-shadow:0px 3px 3px 0px rgba(0,0,0,0.04),0px 0px 8px 0px rgba(0,0,0,0.06);"]),
                Y = f.default.div.withConfig({
                    componentId: "sc-351a5731-1"
                })(["display:flex;height:80px;"]),
                D = f.default.div.withConfig({
                    componentId: "sc-351a5731-2"
                })(["display:flex;width:70%;flex-direction:column;"]),
                L = f.default.div.withConfig({
                    componentId: "sc-351a5731-3"
                })(["display:flex;width:30%;align-items:center;justify-content:flex-end;padding-right:16px;"]),
                z = f.default.div.withConfig({
                    componentId: "sc-351a5731-4"
                })(["display:flex;justify-content:flex-end;height:22px;"]),
                B = f.default.div.withConfig({
                    componentId: "sc-351a5731-5"
                })(["background-color:white;padding:0 10px;border-radius:8px 0px 5px 0px;"]),
                P = f.default.p.withConfig({
                    componentId: "sc-351a5731-6"
                })(["padding:8px 0 0 16px;margin:0;font-size:18px;font-weight:700;line-height:22px;"]),
                S = f.default.p.withConfig({
                    componentId: "sc-351a5731-7"
                })(["padding-left:16px;margin:0;font-size:13px;font-weight:600;"]);
            var R = () => (0, i.jsx)("div", {
                children: I.map((e, n) => (0, i.jsxs)(_, {
                    href: e.url,
                    children: [(0, i.jsx)(u(), {
                        src: e.img,
                        width: 100,
                        height: 20,
                        alt: "enuygun-finans-bg",
                        loading: "lazy",
                        style: {
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            inset: 0,
                            zIndex: -1
                        }
                    }), (0, i.jsxs)(Y, {
                        children: [(0, i.jsxs)(D, {
                            children: [(0, i.jsx)(P, {
                                children: e.title
                            }), (0, i.jsx)(S, {
                                children: e.text
                            })]
                        }), (0, i.jsx)(L, {
                            children: (0, i.jsx)(C.M, {
                                width: 24,
                                height: 24,
                                color: "#ffffff"
                            })
                        })]
                    }), (0, i.jsx)(z, {
                        children: (0, i.jsx)(B, {
                            children: (0, i.jsx)(u(), {
                                src: "https://cdn2.enuygun.com/media/lib/uploads/image/enuygun-finans-48191.png",
                                width: 120,
                                height: 11,
                                alt: "enuygun-finans-logo",
                                loading: "lazy"
                            })
                        })
                    })]
                }, n))
            }),
                E = t(9008),
                N = t.n(E),
                T = e => {
                    let {
                        title: n = "ENUYGUN",
                        description: t = "ENUYGUN",
                        children: a
                    } = e;
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)(N(), {
                            children: [(0, i.jsx)("title", {
                                children: n
                            }), (0, i.jsx)("meta", {
                                property: "og:title",
                                content: n
                            }), (0, i.jsx)("meta", {
                                name: "description",
                                content: t
                            }), (0, i.jsx)("meta", {
                                property: "og:description",
                                content: t
                            }), a]
                        })
                    })
                },
                G = t(94039),
                U = t(92641),
                F = t(26934),
                Z = t(18575);
            let V = f.default.h2.withConfig({
                componentId: "sc-da4ed952-0"
            })(["color:#131717;font-size:24px;font-weight:700;line-height:33px;margin:60px 0 16.5px 0;"]),
                A = f.default.div.withConfig({
                    componentId: "sc-da4ed952-1"
                })(["display:flex;justify-content:space-between;gap:16px;margin-bottom:16px;flex-direction:", ";"], e => e.isMobile ? "column;" : "row;"),
                O = f.default.div.withConfig({
                    componentId: "sc-da4ed952-2"
                })(["display:flex;background-color:#ffffff;gap:16px;flex-grow:1;flex:1;border:1px solid #d7dddb;border-radius:8px;box-shadow:0px 5px 22px 4px transparent;transition-duration:0.2s;&:hover{box-shadow:0px 5px 22px 4px #0000001f;}"]);
            f.default.div.withConfig({
                componentId: "sc-da4ed952-3"
            })(["display:flex;@media screen and (max-width:962px){flex-wrap:wrap;}"]);
            let q = f.default.div.withConfig({
                componentId: "sc-da4ed952-4"
            })(["display:flex;width:", ";flex-direction:", ";justify-content:flex-start;align-items:center;background-color:#ffffff;padding:16px 16px 16px 24px;gap:24px;border-radius:8px;align-items:flex-start;"], e => e.isMobile ? "auto" : "100%", e => e.order),
                $ = f.default.div.withConfig({
                    componentId: "sc-da4ed952-5"
                })(["height:auto;width:auto;border-radius:50%;"]),
                W = f.default.div.withConfig({
                    componentId: "sc-da4ed952-6"
                })(["color:#131717;font-size:16px;font-weight:700;letter-spacing:0;line-height:21px;padding-bottom:4px;padding-top:2px;width:23ch;"]),
                X = f.default.div.withConfig({
                    componentId: "sc-da4ed952-7"
                })(["color:#131717;font-size:14px;letter-spacing:0;line-height:21px;"]),
                H = f.default.div.withConfig({
                    componentId: "sc-da4ed952-8"
                })(["flex-direction:column;display:flex;gap:16px;margin-top:16px;"]),
                Q = f.default.div.withConfig({
                    componentId: "sc-da4ed952-9"
                })(["cursor:", ";"], e => e.cursor ? e.cursor : "default");
            var J = () => {
                let {
                    isMobile: e
                } = (0, U.Cf)(), {
                    t: n
                } = (0, s.$G)(), {
                    market: t
                } = (0, G.mr)(), a = F.km[t];
                return (0, i.jsx)(Q, {
                    as: e ? "a" : "div",
                    href: e && "".concat(a, "/r/29Jk47"),
                    target: "_blank",
                    cursor: e ? "pointer" : "default",
                    children: (0, i.jsxs)(q, {
                        isMobile: e,
                        order: e ? "row" : "row-reverse",
                        children: [(0, i.jsx)($, {
                            children: e ? (0, i.jsx)(Z.M, {
                                width: 40,
                                height: 40
                            }) : (0, i.jsx)("img", {
                                src: "https://cdn2.enuygun.com/media/lib/uploads/image/wingie-qr-49027.png",
                                width: 60,
                                height: 60,
                                alt: n("ManageMyBooking.appQr.alt")
                            })
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(W, {
                                children: n("ManageMyBooking.appQr.heading")
                            }), (0, i.jsx)(X, {
                                children: n("ManageMyBooking.appQr.subheading")
                            })]
                        })]
                    }, n("ManageMyBooking.appQr.heading"))
                })
            },
                K = t(44223),
                ee = t(66323),
                en = t(30414),
                et = t(3220),
                ei = t(36300),
                ea = t(34271),
                eo = t(47533),
                el = t(87536),
                er = t(74231),
                ed = t(2857);
            let es = (e, n) => {
                let t = JSON.stringify(n).replace('"postType"', "postType").replace('"popularPosts"', "popularPosts").replace('"topics"', "topics").replace('"limit"', "limit").replace('"offset"', "offset").replace('"orderByPostCount"', "orderByPostCount").replace('"slug"', "slug").replace('"active"', "active").replace('"userName"', "userName").replace('"tags"', "tags").replace('"module"', "module").replace('"subModule"', "subModule");
                return encodeURI("?query=".concat(e.replace(/\s/g, "").replace(/:input:/g, t).trim()))
            },
                ec = async function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "deneme",
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 6,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    return console.log("bilgi api ->", ed.R4.defaults.baseURL), ed.R4.get("".concat(es("\nquery {\n  posts(input: :input:) {\n    id,\n    title,\n    slug,\n    summary,\n    image,\n    updated,\n    postType,\n    postView {\n      count\n    },\n    author {\n      id,\n      username,\n      firstName,\n      lastName,\n      postCount,\n      authorInfo {\n      image\n      },\n    },\n    topics {\n      id,\n      title,\n      slug,\n      color\n    }\n  },\n  postsTotalCount(input: :input:)\n}", {
                        postType: 1,
                        popularPosts: a,
                        topics: e,
                        limit: t,
                        offset: i,
                        tags: n
                    }))).then(n => {
                        var t;
                        let {
                            data: i
                        } = n, a = i.data, o = null == a ? void 0 : null === (t = a.posts) || void 0 === t ? void 0 : t.map(n => {
                            let t = n.topics || [];
                            if (t.length > 1) {
                                let n = t.findIndex(n => n.slug === e); - 1 !== n && (t.unshift(t[n]), t.splice(n + 1, 1))
                            }
                            return n
                        });
                        return {
                            ...a,
                            posts: o
                        }
                    }).catch(e => {
                        console.log(e)
                    })
                },
                eu = async function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["updatedAt:desc"],
                        t = "https://cdn2.wingie.com";
                    console.log("Information Content API base url -> ", ed.G.defaults.baseURL);
                    try {
                        var i, a, o;
                        let {
                            data: l
                        } = await ed.G.post("", {
                            query: "query ($locale: String, $ILocale: I18NLocaleCode, $sort: [String], $filters: PostFiltersInput) {\n	posts(\n		locale: $ILocale\n		sort: $sort\n		filters: $filters\n	) {\n		data {\n			attributes {\n        		id\n				locale\n				name\n				slug\n				summary\n				postView\n				createdAt\n				updatedAt\n				slug\n				image {\n					data {\n						attributes {\n							url\n						}\n					}\n				}\n				author {\n					data {\n						attributes {\n							firstName\n							lastName\n							userName\n							author_infos (filters: { locale: { eq: $locale } }) {\n								data {\n									attributes {\n										shortBio\n										city\n										town\n                    \n									}\n								}\n							}\n							image {\n								data {\n									attributes {\n										url\n										size\n									}\n								}\n							}\n						}\n					}\n				}\n				topics {\n					data {\n						attributes {\n							name\n							slug\n							badgeColor\n						}\n					}\n				}\n			}\n		}\n	}\n}\n",
                            variables: {
                                ILocale: e,
                                locale: e,
                                sort: n,
                                filters: {
                                    author: {
                                        id: {
                                            notNull: !0
                                        }
                                    }
                                }
                            }
                        });
                        return {
                            posts: l && (null == l ? void 0 : null === (o = l.data) || void 0 === o ? void 0 : null === (a = o.posts) || void 0 === a ? void 0 : null === (i = a.data) || void 0 === i ? void 0 : i.reduce((e, n) => {
                                var i, a, o, l, r, d, s, c, u, p, g, m, h, f, x, v, b, w;
                                let y = null === (a = n.attributes) || void 0 === a ? void 0 : null === (i = a.topics) || void 0 === i ? void 0 : i.data,
                                    k = null === (r = n.attributes) || void 0 === r ? void 0 : null === (l = r.author) || void 0 === l ? void 0 : null === (o = l.data) || void 0 === o ? void 0 : o.attributes,
                                    j = null === (m = n.attributes) || void 0 === m ? void 0 : null === (g = m.author) || void 0 === g ? void 0 : null === (p = g.data) || void 0 === p ? void 0 : null === (u = p.attributes) || void 0 === u ? void 0 : null === (c = u.image) || void 0 === c ? void 0 : null === (s = c.data) || void 0 === s ? void 0 : null === (d = s.attributes) || void 0 === d ? void 0 : d.url,
                                    M = null === (v = n.attributes) || void 0 === v ? void 0 : null === (x = v.image) || void 0 === x ? void 0 : null === (f = x.data) || void 0 === f ? void 0 : null === (h = f.attributes) || void 0 === h ? void 0 : h.url,
                                    C = {
                                        ...n.attributes,
                                        author: {
                                            ...k,
                                            authorInfo: {
                                                image: "".concat(t).concat(j.replace("uploads/", "uploads/f_webp,s_175x175,fit_cover/"))
                                            },
                                            image: "".concat(t).concat(j.replace("uploads/", "uploads/f_webp,s_175x175,fit_cover/"))
                                        },
                                        image: "".concat(t).concat(M.replace("uploads/", "uploads/f_webp,s_352x153/")),
                                        topics: null == y ? void 0 : y.map(e => {
                                            var n, t;
                                            return {
                                                ...e.attributes,
                                                color: null == e ? void 0 : null === (n = e.attributes) || void 0 === n ? void 0 : n.badgeColor,
                                                title: null == e ? void 0 : null === (t = e.attributes) || void 0 === t ? void 0 : t.name
                                            }
                                        }),
                                        title: null === (b = n.attributes) || void 0 === b ? void 0 : b.name,
                                        updated: null === (w = n.attributes) || void 0 === w ? void 0 : w.updatedAt
                                    };
                                return e.push(C), e
                            }, []))
                        }
                    } catch (e) {
                        return console.error("Wingie articles graphql request error ->", e), {
                            posts: []
                        }
                    }
                },
                ep = async e => (await ed.Uu.get("/check-reservation", {
                    params: e
                })).data;
            var eg = e => {
                let {
                    show: n,
                    setShow: t
                } = e, {
                    t: a
                } = (0, s.$G)("common"), o = er.Ry().shape({
                    pnr: er.Z_().min(5, "Please enter your PNR").required("ManageMyBooking.nullPNR"),
                    lastname: er.Z_().required("ManageMyBooking.nullSurname")
                }), {
                    market: r
                } = (0, G.mr)(), [d, c] = l.useState(null), {
                    handleSubmit: u,
                    control: p,
                    formState: {
                        errors: g,
                        isSubmitting: m
                    }
                } = (0, el.cI)({
                    resolver: (0, eo.X)(o)
                }), h = async e => {
                    c(null);
                    try {
                        let n = await ep(e);
                        (null == n ? void 0 : n.error) ? c(null == n ? void 0 : n.error_description) : window.location.href = null == n ? void 0 : n.redirect_to
                    } catch (e) {
                        return console.error("Hata oluştu:", e), null
                    }
                };
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(en.Z, {
                        onOk: () => t(!1),
                        onCancel: () => t(!1),
                        title: a("ManageMyBooking.modal.title"),
                        open: n,
                        onClose: () => t(!1),
                        footer: !1,
                        "data-testid": "wingie-homepage-modal-manageMyBooking",
                        dataTestId: "manageMyBooking",
                        children: [d && (0, i.jsx)(et.Z, {
                            dataTestId: "test",
                            shape: "outline",
                            title: d,
                            type: "error",
                            style: {
                                width: "100%"
                            }
                        }), (0, i.jsx)("form", {
                            onSubmit: u(h),
                            children: (0, i.jsxs)(H, {
                                children: [(0, i.jsx)(el.Qr, {
                                    name: "pnr",
                                    control: p,
                                    render: e => {
                                        var n, t;
                                        let {
                                            field: o
                                        } = e;
                                        return (0, i.jsx)(ei.Z, {
                                            status: g.pnr ? "error" : void 0,
                                            message: (null == g ? void 0 : null === (n = g.pnr) || void 0 === n ? void 0 : n.message) && a(null == g ? void 0 : null === (t = g.pnr) || void 0 === t ? void 0 : t.message),
                                            label: a("ManageMyBooking.modal.inputPnr"),
                                            ...o,
                                            maxLength: 10,
                                            "data-testid": "wingie-homepage-modal-pnrCodeInput"
                                        })
                                    }
                                }), (0, i.jsx)(el.Qr, {
                                    name: "lastname",
                                    control: p,
                                    render: e => {
                                        var n;
                                        let {
                                            field: t
                                        } = e;
                                        return (0, i.jsx)(ei.Z, {
                                            status: g.lastname ? "error" : void 0,
                                            shape: "default",
                                            "data-testid": "wingie-homepage-modal-surNameInput",
                                            label: a("ManageMyBooking.modal.inputSurname"),
                                            message: (null == g ? void 0 : null === (n = g.lastname) || void 0 === n ? void 0 : n.message) && a(g.lastname.message),
                                            ...t
                                        })
                                    }
                                }), (0, i.jsx)(ea.Z, {
                                    loading: m,
                                    as: "button",
                                    type: "submit",
                                    "data-testid": "wingie-homepage-modal-searchButton",
                                    children: a("ManageMyBooking.modal.searchBtn")
                                })]
                            })
                        })]
                    })
                })
            };
            let em = {
                en: [{
                    heading: "Online check-in",
                    subheading: "Check-in online before arriving at the airport. ",
                    icon: (0, i.jsx)(K.M, {
                        width: 40,
                        height: 40
                    }),
                    src: "/check-in/",
                    isImage: !1,
                    image: "",
                    order: "row",
                    Modal: !1,
                    isLink: !0,
                    type: "onlineCheckIn",
                    cursor: "pointer"
                }, {
                    heading: "Manage your bookings",
                    subheading: "View your itineraries or cancel a booking.",
                    icon: (0, i.jsx)(ee.M, {
                        width: 40,
                        height: 40
                    }),
                    src: "#",
                    isImage: !1,
                    image: "",
                    order: "row",
                    Modal: eg,
                    isLink: !1,
                    type: "manageYourBookings",
                    cursor: "pointer"
                }],
                de: [{
                    heading: "Online-Check-in",
                    subheading: "Online einchecken, bevor Sie am Flughafen ankommen.",
                    icon: (0, i.jsx)(K.M, {
                        width: 40,
                        height: 40
                    }),
                    src: "/check-in/",
                    isImage: !1,
                    image: "",
                    order: "row",
                    Modal: !1,
                    isLink: !0,
                    type: "onlineCheckIn",
                    cursor: "pointer"
                }, {
                    heading: "Ihre Buchungen verwalten",
                    subheading: "Ihre Reiserouten anzeigen oder eine Buchung stornieren.",
                    icon: (0, i.jsx)(ee.M, {
                        width: 40,
                        height: 40
                    }),
                    src: "#",
                    isImage: !1,
                    image: "",
                    order: "row",
                    Modal: eg,
                    isLink: !1,
                    type: "manageYourBookings",
                    cursor: "pointer"
                }],
                es: [{
                    heading: "Check-in en l\xednea",
                    subheading: "Realiza el check-in en l\xednea antes de llegar al aeropuerto.",
                    icon: (0, i.jsx)(K.M, {
                        width: 40,
                        height: 40
                    }),
                    src: "/check-in/",
                    isImage: !1,
                    image: "",
                    order: "row",
                    Modal: !1,
                    isLink: !0,
                    type: "onlineCheckIn",
                    cursor: "pointer"
                }, {
                    heading: "Administra tus reservas",
                    subheading: "Ve tus itinerarios o cancela una reserva.",
                    icon: (0, i.jsx)(ee.M, {
                        width: 40,
                        height: 40
                    }),
                    src: "#",
                    isImage: !1,
                    image: "",
                    order: "row",
                    Modal: eg,
                    isLink: !1,
                    type: "manageYourBookings",
                    cursor: "pointer"
                }],
                ar: [{
                    heading: "إتمام إجراءات السفر",
                    subheading: "أكمل إجراءات السفر عبر الإنترنت قبل وصولك إلى المطار.",
                    icon: (0, i.jsx)(K.M, {
                        width: 40,
                        height: 40
                    }),
                    src: "/check-in/",
                    isImage: !1,
                    image: "",
                    order: "row",
                    Modal: !1,
                    isLink: !0,
                    type: "onlineCheckIn",
                    cursor: "pointer"
                }, {
                    heading: "إدارة حجوزاتك",
                    subheading: "اعرض مسار رحلتك أو قم بإلغاء حجزك.",
                    icon: (0, i.jsx)(ee.M, {
                        width: 40,
                        height: 40
                    }),
                    src: "#",
                    isImage: !1,
                    image: "",
                    order: "row",
                    Modal: eg,
                    isLink: !1,
                    type: "manageYourBookings",
                    cursor: "pointer"
                }],
                ru: [{
                    heading: "Онлайн регистрация",
                    subheading: "Онлайн-регистрация до прибытия в аэропорт.",
                    icon: (0, i.jsx)(K.M, {
                        width: 40,
                        height: 40
                    }),
                    src: "/check-in/",
                    isImage: !1,
                    image: "",
                    order: "row",
                    Modal: !1,
                    isLink: !0,
                    type: "onlineCheckIn",
                    cursor: "pointer"
                }, {
                    heading: "Управляйте своими бронированиями",
                    subheading: "Просмотрите свои маршруты или отмените бронирование.",
                    icon: (0, i.jsx)(ee.M, {
                        width: 40,
                        height: 40
                    }),
                    src: "#",
                    isImage: !1,
                    image: "",
                    order: "row",
                    Modal: eg,
                    isLink: !1,
                    type: "manageYourBookings",
                    cursor: "pointer"
                }]
            },
                eh = e => {
                    let [n, t] = l.useState(!1), {
                        isMobile: a
                    } = (0, U.Cf)(), {
                        market: o
                    } = (0, G.mr)(), r = F.km[null != o ? o : "us"];
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(Q, {
                            as: e.isLink ? "a" : "div",
                            href: "".concat(r).concat(e.src),
                            onClick: () => t(!0),
                            target: "_blank",
                            cursor: e.cursor,
                            children: (0, i.jsxs)(q, {
                                isMobile: a,
                                order: e.order,
                                children: [(0, i.jsx)($, {
                                    children: e.isImage ? (0, i.jsx)("img", {
                                        src: e.image,
                                        width: 60,
                                        height: 60,
                                        alt: e.alt
                                    }) : e.icon
                                }), (0, i.jsxs)("div", {
                                    children: [(0, i.jsx)(W, {
                                        children: e.heading
                                    }), (0, i.jsx)(X, {
                                        children: e.subheading
                                    })]
                                })]
                            }, e.heading)
                        }), e.Modal && (0, i.jsx)(e.Modal, {
                            show: n,
                            setShow: t
                        })]
                    })
                };
            var ef = () => {
                let {
                    t: e
                } = (0, s.$G)("common"), {
                    isMobile: n
                } = (0, U.Cf)(), {
                    language: t
                } = (0, G.mr)(), a = em[null != t ? t : "en"];
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(V, {
                        children: e("ManageMyBooking.heading")
                    }), (0, i.jsxs)(A, {
                        "data-testid": "wingie-homepage-manageMyBooking",
                        isMobile: n,
                        children: [null == a ? void 0 : a.map((e, n) => (0, i.jsx)(O, {
                            "data-testid": "wingie-homepage-".concat(e.type),
                            children: (0, i.jsx)(eh, {
                                ...e
                            })
                        }, n)), (0, i.jsx)(O, {
                            "data-testid": "wingie-homepage-manageMyBooking".concat(n ? "App" : "Qr"),
                            children: (0, i.jsx)(J, {})
                        })]
                    })]
                })
            },
                ex = t(78043),
                ev = t(13185),
                eb = t(11163);
            let ew = {
                tr: "",
                us: "",
                gb: "",
                de: "",
                es: "",
                ae: "",
                sa: "",
                ru: "",
                eg: "/lib/uploads/image/homepages-summer-bg-59600.webp",
                kw: "",
                om: "",
                bh: "",
                jo: "",
                qa: "",
                pk: "",
                in: "",
                default: ""
            };
            var ey = e => e && ew[e] || ew.default;
            let ek = d()(async () => await Promise.all([t.e(107), t.e(268)]).then(t.bind(t, 69268)), {
                loadableGenerated: {
                    webpack: () => [69268]
                }
            }),
                ej = d()(async () => t.e(706).then(t.bind(t, 76706)), {
                    loadableGenerated: {
                        webpack: () => [76706]
                    }
                }),
                eM = d()(() => t.e(975).then(t.bind(t, 45975)), {
                    loadableGenerated: {
                        webpack: () => [45975]
                    }
                }),
                eC = d()(() => Promise.all([t.e(403), t.e(13)]).then(t.bind(t, 37013)), {
                    loadableGenerated: {
                        webpack: () => [37013]
                    }
                }),
                eI = d()(() => t.e(72).then(t.bind(t, 30072)), {
                    loadableGenerated: {
                        webpack: () => [30072]
                    }
                }),
                e_ = d()(() => t.e(308).then(t.bind(t, 4308)), {
                    loadableGenerated: {
                        webpack: () => [4308]
                    }
                }),
                eY = d()(() => t.e(87).then(t.bind(t, 90087)), {
                    loadableGenerated: {
                        webpack: () => [90087]
                    }
                }),
                eD = d()(() => t.e(938).then(t.bind(t, 44938)), {
                    loadableGenerated: {
                        webpack: () => [44938]
                    }
                }),
                eL = d()(() => t.e(82).then(t.bind(t, 62082)), {
                    loadableGenerated: {
                        webpack: () => [62082]
                    }
                }),
                ez = d()(() => t.e(504).then(t.bind(t, 28504)), {
                    loadableGenerated: {
                        webpack: () => [28504]
                    }
                }),
                eB = d()(() => t.e(377).then(t.bind(t, 64377)), {
                    loadableGenerated: {
                        webpack: () => [64377]
                    }
                }),
                eP = d()(() => t.e(330).then(t.bind(t, 64330)), {
                    loadableGenerated: {
                        webpack: () => [64330]
                    }
                }),
                eS = d()(() => t.e(629).then(t.bind(t, 98629)), {
                    loadableGenerated: {
                        webpack: () => [98629]
                    }
                }),
                eR = d()(() => t.e(643).then(t.bind(t, 30643)), {
                    loadableGenerated: {
                        webpack: () => [30643]
                    }
                }),
                eE = d()(() => t.e(530).then(t.bind(t, 88530)), {
                    loadableGenerated: {
                        webpack: () => [88530]
                    }
                }),
                eN = d()(() => t.e(345).then(t.bind(t, 34345)), {
                    loadableGenerated: {
                        webpack: () => [34345]
                    }
                });
            var eT = t(71060);
            eT.Od, eT._W, eT.gP, eT.y1, eT.eP, eT._z, eT._Y, eT.nx, eT.Xl, eT.Vq, eT.T9, eT.$9, eT.nR, eT.B4, eT.yv, eT.YT;
            let eG = {
                Main: "/",
                Contact: "/contact"
            },
                eU = {
                    [eG.Main]: e => {
                        let {
                            res: n
                        } = e, [t, a] = function () {
                            let [e, n] = (0, l.useState)(!1), t = (0, l.useRef)(null);
                            return (0, l.useEffect)(() => {
                                let e = () => {
                                    t.current && n(t.current.getBoundingClientRect().bottom - 100 < 0)
                                };
                                return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
                            }, []), [e, t]
                        }(), {
                            query: o
                        } = (0, eb.useRouter)(), [r, d] = (0, l.useState)(!1);
                        l.useEffect(() => {
                            if (o.tab) return;
                            let e = setTimeout(() => {
                                d(!0)
                            }, 200);
                            return () => clearTimeout(e)
                        }, []);
                        let {
                            posts: c
                        } = n[1], u = n[2], {
                            market: p,
                            fullLocale: g,
                            domain: m
                        } = (0, G.mr)(), h = (0, y.d)(), f = "tr" !== p, x = "tr" == p, {
                            t: v
                        } = (0, s.$G)("common"), b = ey(p);
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(T, {
                                title: v("app.meta.title"),
                                description: v("app.meta.description"),
                                children: !h && (0, i.jsx)("link", {
                                    rel: "preload",
                                    href: b,
                                    as: "image"
                                })
                            }), (0, i.jsx)(ex.mN, {
                                isReady: r,
                                domain: m,
                                ref: a,
                                imgUrl: b,
                                children: (0, i.jsxs)(ex.VY, {
                                    isMobile: h,
                                    children: [!x && h && (0, i.jsx)(ex.G2, {
                                        children: v("searchForm.headTitle")
                                    }), !h && (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)(ex.Om, {
                                            children: v("searchForm.heading")
                                        }), !x && (0, i.jsx)(ex.Zx, {
                                            children: v("searchForm.subHeading")
                                        })]
                                    }), (0, i.jsx)(l.Suspense, {
                                        fallback: "loading",
                                        children: x ? (0, i.jsx)(ek, {
                                            isAffixed: t
                                        }) : (0, i.jsx)(ev.Z, {
                                            isAffixed: t
                                        })
                                    }), !h && x && (0, i.jsx)(ex.cf, {
                                        children: "Enuygun Seyahat, Belge No: 7153"
                                    })]
                                })
                            }), (0, i.jsx)(M, {
                                fallback: "Promoted-Flight-Card",
                                children: x && (0, i.jsx)(j.V, {
                                    children: (0, i.jsx)(eE, {
                                        res: n
                                    })
                                })
                            }), (0, i.jsx)(M, {
                                fallback: "Advert - InformationCard",
                                children: x && (0, i.jsxs)(j.V, {
                                    children: [(0, i.jsx)(k, {}), (0, i.jsx)(eP, {})]
                                })
                            }), (0, i.jsx)(M, {
                                fallback: "ManageMyBookingWingie",
                                children: f && (0, i.jsx)(j.V, {
                                    children: (0, i.jsx)(ef, {})
                                })
                            }), (0, i.jsx)(M, {
                                fallback: "FinanceMobile - ServiceCards",
                                children: h && x && (0, i.jsxs)(j.V, {
                                    children: [(0, i.jsx)(R, {}), (0, i.jsx)(eY, {})]
                                })
                            }), x && (0, i.jsx)(M, {
                                fallback: "Campaigns",
                                children: (0, i.jsx)(j.V, {
                                    children: (0, i.jsx)(eR, {
                                        res: n
                                    })
                                })
                            }), (0, i.jsx)(M, {
                                fallback: "Finance",
                                children: x && (0, i.jsx)(eC, {})
                            }), f && (0, i.jsx)(M, {
                                fallback: "DiscoverWingie",
                                children: (0, i.jsx)(j.V, {
                                    children: (0, i.jsx)(ez, {
                                        discoverWingieData: u,
                                        res: n
                                    })
                                })
                            }), x && (0, i.jsx)(M, {
                                fallback: "Discover",
                                children: (0, i.jsx)(j.V, {
                                    children: (0, i.jsx)(ej, {})
                                })
                            }), (0, i.jsx)(M, {
                                fallback: "WhyChoose",
                                children: (0, i.jsx)(eB, {
                                    res: n
                                })
                            }), x && (0, i.jsx)(eI, {}), f && (0, i.jsxs)(j.V, {
                                children: [(0, i.jsx)(M, {
                                    fallback: "BannerWingie",
                                    children: (0, i.jsx)(eN, {})
                                }), (0, i.jsx)(M, {
                                    fallback: "TravelRoutes",
                                    children: (0, i.jsx)(eL, {
                                        res: n
                                    })
                                }), (0, i.jsx)(M, {
                                    fallback: "PopularAirlines",
                                    children: (0, i.jsx)(eS, {
                                        res: n
                                    })
                                }), (0, i.jsx)(M, {
                                    fallback: "DomesticFlightsWingie",
                                    children: (0, i.jsx)(e_, {
                                        res: n
                                    })
                                }), (null == c ? void 0 : c.length) > 0 && (0, i.jsx)(M, {
                                    fallback: "PopularTravelPosts",
                                    children: (0, i.jsx)(eD, {
                                        travelArticles: c,
                                        isWingie: f,
                                        fullLocale: g
                                    })
                                }), (0, i.jsx)(eM, {
                                    res: n
                                })]
                            }), x && (0, i.jsx)(j.V, {
                                children: (0, i.jsxs)(M, {
                                    fallback: "PopularTravelPosts",
                                    children: [!h && (0, i.jsx)(eL, {
                                        res: n
                                    }), (0, i.jsx)(eD, {
                                        travelArticles: c
                                    })]
                                })
                            }), h && x && (0, i.jsx)(j.V, {
                                children: (0, i.jsx)(M, {
                                    fallback: "TravelRoutes",
                                    children: (0, i.jsx)(eL, {
                                        res: n
                                    })
                                })
                            })]
                        })
                    },
                    [eG.Contact]: () => "Contact text"
                };
            eG.Main;
            let eF = e => eU[e] || null,
                {
                    publicRuntimeConfig: eZ
                } = o()();
            ((null == eZ ? void 0 : eZ.processEnv) || {}).NEXT_PUBLIC_CORE_API;
            var eV = !0,
                eA = e => {
                    let {
                        page: n,
                        ...t
                    } = e, a = eF(n);
                    return a ? (0, i.jsx)(a, {
                        ...t
                    }) : null
                }
        },
        91640: function (e, n, t) {
            "use strict";
            t.d(n, {
                a: function () {
                    return i
                },
                p: function () {
                    return a
                }
            });
            let i = e => window.localStorage.setItem("previous-search-category", e),
                a = () => {
                    let e = window.localStorage.getItem("previous-search-category") || 0;
                    return "string" == typeof e ? parseInt(e) : e
                }
        }
    },
    function (e) {
        e.O(0, [41, 734, 888, 774, 179], function () {
            return e(e.s = 95759)
        }), _N_E = e.O()
    }
]);