!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=(new t.Error).stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="bd1000ac-12f8-423b-9efe-a282a8fd293a",t._sentryDebugIdIdentifier="sentry-dbid-bd1000ac-12f8-423b-9efe-a282a8fd293a")}catch(t){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[549],{16540:function(t,e,n){n.d(e,{Z:function(){return components_CancellationRules}});var r=n(85893),c=n(67294),i=n(27484),o=n.n(i),a=n(73705),l=n(37340),u=n(19521),s=n(76373),d=n(37515);function _templateObject(){let t=(0,l._)(["\n      font-size: 14px;\n      font-weight: 400;\n      list-style-type: disc;\n      padding-left: 12px;\n    "]);return _templateObject=function(){return t},t}function _templateObject1(){let t=(0,l._)(["\n      padding-left: 0px;\n      align-items: flex-start;\n      gap: 8px;\n      align-self: stretch;\n      max-width: 483px;\n    "]);return _templateObject1=function(){return t},t}function _templateObject2(){let t=(0,l._)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n\n  ",";\n"]);return _templateObject2=function(){return t},t}function _templateObject3(){let t=(0,l._)([""]);return _templateObject3=function(){return t},t}let f=u.default.div.withConfig({componentId:"sc-1c8b70-0"})(_templateObject2(),(0,s.rS)("space.4"),(0,s.fq)("isSummary",(0,u.css)(_templateObject()),(0,u.css)(_templateObject1()))),p=(0,u.default)(d.Dr).withConfig({componentId:"sc-1c8b70-1"})(_templateObject3());var m=n(92452),b=n(93382),components_CancellationRules=t=>{let{cancellationRules:e,isRefundable:n,isPossibleChange:i,isCancellable:l,testId:u,hasCancellationRule:s,roomClass:h,isSummary:g}=t,{t:j}=(0,a.$G)("common");if((null==h?void 0:h.code)==="NRF"||s&&!1===n)return(0,r.jsx)(p,{as:g&&"li",children:(0,r.jsx)(d.cK,{"data-testId":"cp-indefeasible",fontSize:"14",children:j("cancellationPolicy.indefeasible")})});let _=(0,c.useCallback)(()=>e?e.map((t,e)=>null===t.timeStamp.from||null===t.price?(0,r.jsxs)(p,{"data-testId":"cp-indefeasible",as:g&&"li",children:[o().unix(t.timeStamp.to).format("D MMMM YYYY HH:mm")," ",(0,r.jsx)(a.cC,{i18nKey:"cancellationPolicy.freeCancellationUntil"})]},e):null===t.timeStamp.to?(0,r.jsxs)(p,{"data-testId":"cp-cancel-with-deduction",as:g&&"li",children:[o().unix(t.timeStamp.from).format("D MMMM YYYY HH:mm")," ",j("cancellationPolicy.afterThat")," ",(0,b.X)(t.price.amount,{currency:t.price.currency,minimumFractionDigits:0,maximumFractionDigits:0})," ",j("cancellationPolicy.cancelWithDeduction"),"."]},e):(0,r.jsxs)(p,{"data-testId":"cp-cancel-with-deduction",as:g&&"li",children:[o().unix(t.timeStamp.from).format("D MMMM YYYY HH:mm")," -"," ",o().unix(t.timeStamp.to).format("D MMMM YYYY HH:mm")," ",j("cancellationPolicy.betweenDates")," ",(0,b.X)(t.price.amount,{currency:t.price.currency})," ",j("cancellationPolicy.cancelWithDeduction"),"."]},e)):null,[e]),x=(0,c.useMemo)(()=>_(),[e]);return(null==x?void 0:x.length)>0?(0,r.jsx)(f,{as:g&&"ul",isSummary:g,"data-testid":u,children:g?(0,r.jsxs)(r.Fragment,{children:[x,!i&&(0,r.jsxs)(p,{"data-testId":"cp-can-not-be-change",as:g&&"li",children:[(0,r.jsx)(d.cK,{children:j("cancellationPolicy.canNotBeChange")})," ",j("cancellationPolicy.canNotBeChangeDesc")]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(m.Z,{"data-testid":"free-cancellation-area",flex:!0,title:j("cancellationPolicy.freeCancellation"),children:[" (",x,") "]}),(!1===l||!1===n)&&(0,r.jsx)(m.Z,{"data-testId":"cp-indefeasible",title:j("cancellationPolicy.cancellationPolicy"),children:(0,r.jsx)(d.Dr,{children:j("cancellationPolicy.indefeasible")})}),!1===i&&(0,r.jsx)(m.Z,{"data-testId":"cp-can-not-be-change-desc",title:j("cancellationPolicy.canNotBeChange"),children:(0,r.jsxs)(d.Dr,{children:["(",j("cancellationPolicy.canNotBeChangeDesc"),")"]})})]})}):null}},25927:function(t,e,n){var r=n(85893),c=n(67294),i=n(7877);let ErrorBoundary=class ErrorBoundary extends c.Component{static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,e){var n,r;console.log(t,e.componentStack),console.log(null===(n=this.props)||void 0===n?void 0:n.fallback),(0,i.Z)({type:"reservation_error",page:"otel_reservation",message:"".concat(t," ").concat(e.componentStack," ").concat(null===(r=this.props)||void 0===r?void 0:r.fallback)}),this.setState({hasError:!0,error:t})}render(){return this.state.hasError?(0,r.jsx)(r.Fragment,{children:this.props.fallback}):(0,r.jsx)(r.Fragment,{children:this.props.children})}constructor(t){super(t),this.state={hasError:!1,error:void 0}}};e.Z=ErrorBoundary},53946:function(t,e,n){var r=n(85893);n(67294);var c=n(9008),i=n.n(c);e.Z=t=>{let{title:e="Ucuz Otel Ara, En Uygun Tatil Fırsatları | ENUYGUN",description:n="En uygun otelleri ara, en ucuz fiyatlarla ve \xf6zel taksit se\xe7enekleri ile hemen rezervasyon yap, erken rezervasyon ve son dakika otel fırsatlarını yakala.",image:c="https://cdn.enuygun.com/otel/v-0031f/static/images/og-image.jpg",canonicalUrl:o,children:a,noIndex:l}=t;return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("meta",{property:"og:title",content:e}),(0,r.jsx)("meta",{property:"og:image",content:c}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{property:"og:description",content:n}),o&&(0,r.jsx)("link",{rel:"canonical",href:"https://www.enuygun.com/otel".concat(o)}),l&&(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"}),a]})}},7075:function(t,e,n){var r=n(85893);n(67294);var c=n(25675),i=n.n(c);e.Z=t=>{let{src:e}=t;return(0,r.jsx)(i(),{loader:()=>e,src:e,...t})}},92452:function(t,e,n){n.d(e,{Z:function(){return components_InfoText}});var r=n(85893);n(67294);var c=n(2345),i=n(37340),o=n(44389),a=n(39439),l=n(94698),u=n(19521),s=n(76373),d=n(37515);function _templateObject(){let t=(0,i._)(["\n  padding-top: ","px;\n"]);return _templateObject=function(){return t},t}function _templateObject1(){let t=(0,i._)(["\n  padding-right: ","px !important;\n"]);return _templateObject1=function(){return t},t}function _templateObject2(){let t=(0,i._)(["\n      display: flex;\n      max-width: 386px;\n    "]);return _templateObject2=function(){return t},t}function _templateObject3(){let t=(0,i._)(["\n  font-size: ",";\n  font-weight: ",";\n  max-width: 95% !important;\n  flex-wrap: wrap;\n\n  ",";\n\n  "," {\n    max-width: 90% !important;\n  }\n"]);return _templateObject3=function(){return t},t}function _templateObject4(){let t=(0,i._)(["\n  font-size: ",";\n  font-weight: ",";\n  padding-right: ","px;\n\n  "," {\n    width: 50% !important;\n  }\n"]);return _templateObject4=function(){return t},t}let f=(0,u.default)(o.Z).withConfig({componentId:"sc-e90d7a2c-0"})(_templateObject(),(0,s.rS)("space.2")),p=(0,u.default)(a.Z).withConfig({componentId:"sc-e90d7a2c-1"})(_templateObject1(),(0,s.rS)("space.1")),m=(0,u.default)(a.Z).withConfig({componentId:"sc-e90d7a2c-2"})(_templateObject3(),(0,s.rS)("fontSizes.14"),(0,s.rS)("fontWeights.regular"),t=>t.flex&&(0,u.css)(_templateObject2()),(0,l.down)("sm")),b=(0,u.default)(d.cK).withConfig({componentId:"sc-e90d7a2c-3"})(_templateObject4(),(0,s.rS)("fontSizes.14"),(0,s.rS)("fontWeights.bold"),(0,s.rS)("space.1"),(0,l.up)("sm"));var components_InfoText=t=>{let{title:e,children:n,flex:i,breakLine:o}=t;return(0,r.jsxs)(f,{gutter:4,justify:"flex-start",align:"flex-start",children:[(0,r.jsx)(p,{gutter:0,width:"content",children:(0,r.jsx)(c.M,{width:20,height:20,color:"#031e36"})}),(0,r.jsxs)(m,{flex:i,gutter:0,width:"content",children:[(0,r.jsxs)(d.P,{children:[(0,r.jsx)(b,{children:e}),!o&&(0,r.jsx)(d.Dr,{children:n})]}),o&&(0,r.jsx)(d.Dr,{children:n})]})]})}},25700:function(t,e,n){var r=n(85893);n(67294);var c=n(39439),i=n(73705),o=n(38264),a=n(37515),l=n(93382);e.Z=t=>{var e;let{totalPrice:n,priceBreakDowns:u,discount:s,paymentType:d,accommodationTax:f,isSuccess:p}=t,{t:m}=(0,i.$G)("common"),renderPriceArea=t=>{let{label:e,value:n,isDiscount:c}=t;return(0,r.jsxs)(o.Z$,{gutter:0,isDiscountTag:c,children:[(0,r.jsx)(o.$w,{children:e}),(0,r.jsx)(o.TD,{width:"content",gutter:0,dangerouslySetInnerHTML:{__html:n}})]})};return(0,r.jsxs)(o.Kn,{isSuccess:p,md:p&&8,gutter:0,children:[(0,r.jsx)(a.Ce,{children:m("totalResultTitle")}),(s.discountFrom>0||u.length>0)&&(0,r.jsxs)(a.ur,{children:[s.discountFrom>0&&renderPriceArea({label:m("layOver"),value:(0,l.X)(s.discountFrom/100)}),u.map(t=>{if(t.active){let e=(0,l.X)(t.price/100),n=t.billable.active?(0,l.X)(t.billable.price/100,{currency:t.billable.currency})+(0!==t.price?"<br />"+"(".concat(e,")"):""):e;return renderPriceArea({label:t.description,value:n})}}),null===(e=s.discountTags)||void 0===e?void 0:e.map(t=>renderPriceArea({label:"".concat(t.discountString+" "+t.label),value:"-".concat((0,l.X)(+t.floatAmount,{currency:n.currency}).trim()),isDiscount:!0}))]}),(0,r.jsxs)(o.m6,{gutter:0,justify:"space-between",align:"center",children:[!p&&(null==s?void 0:s.discountFrom)>0&&(0,r.jsx)(o.Y0,{sm:12,gutter:0,children:(0,l.X)(s.discountFrom/100,{currency:null==n?void 0:n.currency})}),(0,r.jsx)(c.Z,{width:"content",children:m("AT_HOTEL"===d?"amountPayable":p?"amountPaid":"amountToBePaid")}),(0,r.jsx)(c.Z,{width:"content",children:(0,r.jsx)(a.cK,{fontSize:"16","data-testid":"total-price",children:(0,l.X)(+(null==n?void 0:n.amount)/100,{currency:null==n?void 0:n.currency}).split(",").map((t,e)=>0===e?t:(0,r.jsxs)("sup",{children:[",",t]},e))})})]}),!p&&"AT_HOTEL"===d&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.uL,{children:[(0,r.jsx)(a.cK,{children:m("facilityCurrency")}),(0,r.jsx)(a.P,{ml:"12",children:m("atHotelMessage")})]}),(0,r.jsxs)(o.m6,{gutter:0,justify:"space-between",align:"center",paidNow:!0,children:[(0,r.jsx)(c.Z,{width:"content",children:m("amountYouWillPayNow")}),(0,r.jsx)(c.Z,{md:2,width:"content",children:(0,r.jsxs)(a.cK,{children:["0,",(0,r.jsx)("sup",{children:"00TL"})]})})]})]}),(null==f?void 0:f.status)&&(0,r.jsx)(a.S7,{children:null==f?void 0:f.description})]})}},38264:function(t,e,n){n.d(e,{$w:function(){return f},Kn:function(){return u},TD:function(){return d},Y0:function(){return m},Z$:function(){return s},m6:function(){return p},uL:function(){return b}});var r=n(37340),c=n(39439),i=n(44389),o=n(94698),a=n(19521),l=n(76373);function _templateObject(){let t=(0,r._)(["\n      "," {\n        margin-top: ","px !important;\n      }\n\n      "," {\n        width: 67% !important;\n        margin-top: ","px !important;\n      }\n    "]);return _templateObject=function(){return t},t}function _templateObject1(){let t=(0,r._)(["\n  display: flex !important;\n  border-radius: ",";\n  padding: ","px !important;\n  gap: ","px;\n  flex-direction: column;\n  border: 1px solid ",";\n  background: ",";\n  margin: 0;\n\n  "," {\n    margin-bottom: ","px !important;\n  }\n\n  "," {\n    float: right;\n  }\n\n  ","\n"]);return _templateObject1=function(){return t},t}function _templateObject2(){let t=(0,r._)(["\n      color: #13882b !important;\n      font-weight: ",";\n    "]);return _templateObject2=function(){return t},t}function _templateObject3(){let t=(0,r._)(["\n  width: 100%;\n\n  ","\n"]);return _templateObject3=function(){return t},t}function _templateObject4(){let t=(0,r._)(["\n  text-align: right;\n  font-size: ",";\n"]);return _templateObject4=function(){return t},t}function _templateObject5(){let t=(0,r._)(["\n  font-size: ",";\n  padding: 0 !important;\n  margin: 0 !important;\n"]);return _templateObject5=function(){return t},t}function _templateObject6(){let t=(0,r._)(["\n      background-color: ",";\n      color: ",";\n    "]);return _templateObject6=function(){return t},t}function _templateObject7(){let t=(0,r._)(["\n  width: 100%;\n  padding: ","px ","px;\n  background-color: #f1f2f6;\n  border-radius: ",";\n  font-weight: ",";\n\n  ","\n\n  & > div:last-child {\n    position: relative;\n\n    sup {\n      font-size: ",";\n      vertical-align: text-top;\n    }\n  }\n"]);return _templateObject7=function(){return t},t}function _templateObject8(){let t=(0,r._)(["\n  text-align: right;\n  font-weight: ",";\n  font-size: ",";\n  color: ",";\n  text-decoration: line-through;\n"]);return _templateObject8=function(){return t},t}function _templateObject9(){let t=(0,r._)(['\n  &::before {\n    content: "*";\n    margin-right: ',"px;\n  }\n\n  p {\n    max-width: 300px;\n  }\n"]);return _templateObject9=function(){return t},t}let u=(0,a.default)(c.Z).withConfig({componentId:"sc-28f260fc-0"})(_templateObject1(),(0,l.rS)("borderRadius.4"),(0,l.rS)("space.4"),(0,l.rS)("space.2"),(0,l.rS)("colors.sky.light"),(0,l.rS)("colors.sky.extraLight"),(0,o.down)("sm"),(0,l.rS)("space.4"),(0,o.up)("sm"),t=>t.isSuccess&&(0,a.css)(_templateObject(),(0,o.down)("sm"),(0,l.rS)("space.4"),(0,o.up)("sm"),(0,l.rS)("space.5"))),s=(0,a.default)(i.Z).withConfig({componentId:"sc-28f260fc-1"})(_templateObject3(),(0,l.fq)("isDiscountTag",(0,a.css)(_templateObject2(),(0,l.rS)("fontWeights.bold")))),d=(0,a.default)(c.Z).withConfig({componentId:"sc-28f260fc-2"})(_templateObject4(),(0,l.rS)("fontSizes.14")),f=(0,a.default)(c.Z).withConfig({componentId:"sc-28f260fc-3"})(_templateObject5(),(0,l.rS)("fontSizes.14")),p=(0,a.default)(i.Z).withConfig({componentId:"sc-28f260fc-4"})(_templateObject7(),(0,l.rS)("space.4"),(0,l.rS)("space.3"),(0,l.rS)("borderRadius.4"),(0,l.rS)("fontWeights.semibold"),(0,l.fq)("paidNow",(0,a.css)(_templateObject6(),(0,l.rS)("colors.secondary.lighter"),(0,l.rS)("colors.darkBlue.normal"))),(0,l.rS)("fontSizes.12")),m=(0,a.default)(c.Z).withConfig({componentId:"sc-28f260fc-5"})(_templateObject8(),(0,l.rS)("fontWeights.regular"),(0,l.rS)("fontSizes.12"),(0,l.rS)("colors.error")),b=a.default.div.withConfig({componentId:"sc-28f260fc-6"})(_templateObject9(),(0,l.rS)("space.1"))},37515:function(t,e,n){n.d(e,{Ce:function(){return s},Dr:function(){return b},Li:function(){return g},NZ:function(){return u},Op:function(){return l},P:function(){return h},S7:function(){return f},VY:function(){return a},ZC:function(){return p},cK:function(){return m},ee:function(){return j},ur:function(){return d}});var r=n(37340),c=n(94698),i=n(19521),o=n(76373);function _templateObject(){let t=(0,r._)(["\n      padding: "," !important;\n    "]);return _templateObject=function(){return t},t}function _templateObject1(){let t=(0,r._)(["\n  "," {\n    width: 100%;\n    max-width: 1140px;\n    margin: ",";\n  }\n\n  "," {\n    padding-left: ","px;\n    padding-right: ","px;\n  }\n\n  ","\n\n  position: relative;\n"]);return _templateObject1=function(){return t},t}function _templateObject2(){let t=(0,r._)(["\n  font-size: ",";\n"]);return _templateObject2=function(){return t},t}function _templateObject3(){let t=(0,r._)(["\n  font-size: 22px;\n  font-weight: ",";\n\n  "," {\n    font-size: ",";\n  }\n"]);return _templateObject3=function(){return t},t}function _templateObject4(){let t=(0,r._)(["\n  font-weight: ",";\n  font-size: ",";\n"]);return _templateObject4=function(){return t},t}function _templateObject5(){let t=(0,r._)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n  padding-bottom: ","px;\n"]);return _templateObject5=function(){return t},t}function _templateObject6(){let t=(0,r._)(["\n  font-size: 13px;\n"]);return _templateObject6=function(){return t},t}function _templateObject7(){let t=(0,r._)(["\n  padding: ",";\n  margin: ",";\n"]);return _templateObject7=function(){return t},t}function _templateObject8(){let t=(0,r._)(["\n      font-size: ",";\n    "]);return _templateObject8=function(){return t},t}function _templateObject9(){let t=(0,r._)(["\n  ","\n"]);return _templateObject9=function(){return t},t}function _templateObject10(){let t=(0,r._)(["\n      white-space: nowrap;\n    "]);return _templateObject10=function(){return t},t}function _templateObject11(){let t=(0,r._)(["\n      font-size: ",";\n    "]);return _templateObject11=function(){return t},t}function _templateObject12(){let t=(0,r._)(["\n      font-weight: ",";\n    "]);return _templateObject12=function(){return t},t}function _templateObject13(){let t=(0,r._)(["\n  ","\n\n  ","\n    \n  ","\n"]);return _templateObject13=function(){return t},t}function _templateObject14(){let t=(0,r._)(["\n      margin-left: ","px;\n    "]);return _templateObject14=function(){return t},t}function _templateObject15(){let t=(0,r._)(["\n  ",";\n"]);return _templateObject15=function(){return t},t}function _templateObject16(){let t=(0,r._)([""]);return _templateObject16=function(){return t},t}function _templateObject17(){let t=(0,r._)([""]);return _templateObject17=function(){return t},t}let a=i.default.div.withConfig({componentId:"sc-c24b7047-0"})(_templateObject1(),(0,c.up)("lg"),t=>{let{margin:e}=t;return e||"24px auto"},(0,c.down)("lg"),(0,o.rS)("space.4"),(0,o.rS)("space.4"),t=>t.padding&&(0,i.css)(_templateObject(),t.padding)),l=i.default.h5.withConfig({componentId:"sc-c24b7047-1"})(_templateObject2(),(0,o.rS)("fontSizes.14")),u=i.default.h2.withConfig({componentId:"sc-c24b7047-2"})(_templateObject3(),(0,o.rS)("fontWeights.semibold"),(0,c.down)("sm"),(0,o.rS)("fontSizes.20")),s=i.default.h4.withConfig({componentId:"sc-c24b7047-3"})(_templateObject4(),(0,o.rS)("fontWeights.semibold"),(0,o.rS)("fontSizes.16")),d=i.default.div.withConfig({componentId:"sc-c24b7047-4"})(_templateObject5(),(0,o.rS)("space.2"),(0,o.rS)("space.2")),f=i.default.span.withConfig({componentId:"sc-c24b7047-5"})(_templateObject6()),p=i.default.div.withConfig({componentId:"sc-c24b7047-6"})(_templateObject7(),t=>t.padding,t=>t.margin),m=i.default.strong.withConfig({componentId:"sc-c24b7047-7"})(_templateObject9(),t=>t.fontSize&&(0,i.css)(_templateObject8(),(0,o.rS)("fontSizes.".concat(t.fontSize)))),b=i.default.span.withConfig({componentId:"sc-c24b7047-8"})(_templateObject13(),t=>t.noWrap&&(0,i.css)(_templateObject10()),t=>t.fontSize&&(0,i.css)(_templateObject11(),(0,o.rS)("fontSizes.".concat(t.fontSize))),t=>t.fontWeight&&(0,i.css)(_templateObject12(),(0,o.rS)("fontWeights.".concat(t.fontWeight)))),h=i.default.p.withConfig({componentId:"sc-c24b7047-9"})(_templateObject15(),t=>t.ml&&(0,i.css)(_templateObject14(),t.ml)),g=i.default.li.withConfig({componentId:"sc-c24b7047-10"})(_templateObject16()),j=i.default.a.withConfig({componentId:"sc-c24b7047-11"})(_templateObject17())},2396:function(t,e,n){var r;n.d(e,{M:function(){return c},q:function(){return r}});let c="https://cdn.enuygun.com/otel/static/images/image-placeholder.svg";(r||(r={})).HOTEL="hotel"},72745:function(t,e,n){n.d(e,{Hk:function(){return i},Hv:function(){return c},jS:function(){return r}});let r={fb:"https://www.facebook.com/sharer/sharer.php?u=enuygun.com/otel/%hotelSlug%&quote=%shareText%",x:"https://twitter.com/intent/tweet?text=%shareText%"},c="14:00",i="12:00"},34065:function(t,e,n){n.d(e,{P:function(){return useMobileDevice}});var r=n(97423),c=n(42550);let useMobileDevice=()=>{let{isMobile:t}=(0,r.U)().userAgent,{xs:e,sm:n}=(0,c.Z)();return e||n||t}},99991:function(t,e,n){n.d(e,{d8:function(){return setCookie},ej:function(){return getCookie}});var r=n(76489),c=n(31955);let getCookie=t=>(0,r.Q)(t||""),setCookie=(t,e)=>c.Z.set(t,e)},51925:function(t,e,n){n.d(e,{Yq:function(){return getEnhancedHotelData},Yv:function(){return pushEnhancedList},_g:function(){return baseOptions}});var r=n(27484),c=n.n(r);let baseOptions=t=>{let{checkInDate:e,checkOutDate:n,adults:r,children:i}=t,o=c()(),a=c()(e),l=c()(n);return{dimension57:r,dimension58:i,quantity:1,dimension5:a.diff(o,"days")+1,dimension6:a.format("YYYYMMDD"),dimension60:l.format("YYYYMMDD"),dimension11:a.day(),dimension12:l.diff(a,"days")}},pushEnhancedList=t=>{let{data:e,eventName:n,enhancedKey:r,actionField:c}=t;if(window.dataLayer){let t={};t=r?{[r]:{actionField:c,products:[e]}}:{currencycode:"TRY",impressions:e},window.dataLayer.push({event:n,ecommerce:t})}},getEnhancedHotelData=t=>{let{data:e,offer:n,id:r}=t,{name:c,address:i,chainId:o}=e,{providerName:a,isRefundable:l,price:u,providerId:s}=n||{},{subTown:d,town:f,city:p,country:m}=i,b={id:r,name:c,dimension13:a||s||null,dimension59:Number(l),dimension69:d+"/"+f,category:(m||"T\xfcrkiye")+"/"+p,brand:o||"Other"};if(u){var h;b.price=(Number(null==u?void 0:null===(h=u.total)||void 0===h?void 0:h.amount)/100).toString().replace(",",".")}return b}},22261:function(t,e,n){n.d(e,{L:function(){return getFormattedDate},d:function(){return findDayNameOfWeek}});var r=n(27484),c=n.n(r);let getFormattedDate=(t,e)=>c()(t).locale("tr").format(e),findDayNameOfWeek=t=>{let e=c()(t).locale("tr").format("dddd");return e}},93382:function(t,e,n){n.d(e,{X:function(){return priceFormat}});let priceFormat=function(t){let{locale:e="tr-TR",currencyDisplay:n="code",style:r="currency",currency:c="TRY",minimumFractionDigits:i=2,maximumFractionDigits:o=2}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=isNaN(t)?0:t,l=new Intl.NumberFormat(e,{style:r,currency:c,currencyDisplay:n,minimumFractionDigits:i,maximumFractionDigits:o}),u=l.resolvedOptions(),s=l.format(a);if(("tr"===u.locale||"tr-TR"===u.locale)&&"TRY"===u.currency){let t=s.indexOf(u.currency),e=s.substr(t,u.currency.length),n=s.replace(e,"").trim();return"TRY"===e&&(e="TL"),"".concat(n," ").concat(e)}return s}},7877:function(t,e,n){var r=n(23264),c=n(31955);let i=c.Z.get("SERVERID-SH")||c.Z.get("SERVERID-SAG")||c.Z.get("SERVERID");e.Z=(t,e,n)=>{let{page:c="",type:o="",message:a="",...l}=t;(0,r.Cv)({category:"hotel",page_name:c,type:o,message:a,environment:e?n?"".concat(/[A-a]ndroid/.test(navigator.userAgent)?"android":"ios","-app"):"mobile":"desktop",host_name:i,...l})}}}]);