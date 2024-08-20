"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[643],{23755:function(e,t,n){n.d(t,{Z:function(){return U}});var a,r,l,i=n(93277),o=n(67294),s=n(12351),d=n(19946),u=n(32984),c=n(61363),p=n(84575),f=n(16723),b=n(23784),m=n(14157),g=n(3855),h=n(14879),x=n(46045);function v({onFocus:e}){let[t,n]=(0,o.useState)(!0),a=(0,h.t)();return t?o.createElement(x._,{as:"button",type:"button",features:x.A.Focusable,onFocus:t=>{t.preventDefault();let r,l=50;r=requestAnimationFrame(function t(){if(l--<=0){r&&cancelAnimationFrame(r);return}if(e()){if(cancelAnimationFrame(r),!a.current)return;n(!1);return}r=requestAnimationFrame(t)})}}):null}var T=n(73781),y=n(81021),_=n(15466);let w=o.createContext(null);function E({children:e}){let t=o.useRef({groups:new Map,get(e,t){var n;let a=this.groups.get(e);a||(a=new Map,this.groups.set(e,a));let r=null!=(n=a.get(t))?n:0;return a.set(t,r+1),[Array.from(a.keys()).indexOf(t),function(){let e=a.get(t);e>1?a.set(t,e-1):a.delete(t)}]}});return o.createElement(w.Provider,{value:t},e)}function I(e){let t=o.useContext(w);if(!t)throw Error("You must wrap your component in a <StableCollection>");let n=function(){var e,t,n;let a=null!=(n=null==(t=null==(e=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:e.ReactCurrentOwner)?void 0:t.current)?n:null;if(!a)return Symbol();let r=[],l=a;for(;l;)r.push(l.index),l=l.return;return"$."+r.join(".")}(),[a,r]=t.current.get(e,n);return o.useEffect(()=>r,[]),a}var P=((a=P||{})[a.Forwards=0]="Forwards",a[a.Backwards=1]="Backwards",a),k=((r=k||{})[r.Less=-1]="Less",r[r.Equal=0]="Equal",r[r.Greater=1]="Greater",r),j=((l=j||{})[l.SetSelectedIndex=0]="SetSelectedIndex",l[l.RegisterTab=1]="RegisterTab",l[l.UnregisterTab=2]="UnregisterTab",l[l.RegisterPanel=3]="RegisterPanel",l[l.UnregisterPanel=4]="UnregisterPanel",l);let C={0(e,t){var n;let a=(0,p.z2)(e.tabs,e=>e.current),r=(0,p.z2)(e.panels,e=>e.current),l=a.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),i={...e,tabs:a,panels:r};if(t.index<0||t.index>a.length-1){let n=(0,u.E)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,u.E)(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(0===l.length)return i;let r=(0,u.E)(n,{0:()=>a.indexOf(l[0]),1:()=>a.indexOf(l[l.length-1])});return{...i,selectedIndex:-1===r?e.selectedIndex:r}}let o=a.slice(0,t.index),s=[...a.slice(t.index),...o].find(e=>l.includes(e));if(!s)return i;let d=null!=(n=a.indexOf(s))?n:e.selectedIndex;return -1===d&&(d=e.selectedIndex),{...i,selectedIndex:d}},1(e,t){var n;if(e.tabs.includes(t.tab))return e;let a=e.tabs[e.selectedIndex],r=(0,p.z2)([...e.tabs,t.tab],e=>e.current),l=null!=(n=r.indexOf(a))?n:e.selectedIndex;return -1===l&&(l=e.selectedIndex),{...e,tabs:r,selectedIndex:l}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,p.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},O=(0,o.createContext)(null);function L(e){let t=(0,o.useContext)(O);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,L),t}return t}O.displayName="TabsDataContext";let R=(0,o.createContext)(null);function z(e){let t=(0,o.useContext)(R);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,z),t}return t}function A(e,t){return(0,u.E)(t.type,C,e,t)}R.displayName="TabsActionsContext";let B=o.Fragment,S=s.AN.RenderStrategy|s.AN.Static,N=Object.assign((0,s.yV)(function(e,t){var n,a;let r=(0,d.M)(),{id:l=`headlessui-tabs-tab-${r}`,...i}=e,{orientation:g,activation:h,selectedIndex:x,tabs:v,panels:w}=L("Tab"),E=z("Tab"),P=L("Tab"),k=(0,o.useRef)(null),j=(0,b.T)(k,t);(0,f.e)(()=>E.registerTab(k),[E,k]);let C=I("tabs"),O=v.indexOf(k);-1===O&&(O=C);let R=O===x,A=(0,T.z)(e=>{var t;let n=e();if(n===p.fE.Success&&"auto"===h){let e=null==(t=(0,_.r)(k))?void 0:t.activeElement,n=P.tabs.findIndex(t=>t.current===e);-1!==n&&E.change(n)}return n}),B=(0,T.z)(e=>{let t=v.map(e=>e.current).filter(Boolean);if(e.key===c.R.Space||e.key===c.R.Enter){e.preventDefault(),e.stopPropagation(),E.change(O);return}switch(e.key){case c.R.Home:case c.R.PageUp:return e.preventDefault(),e.stopPropagation(),A(()=>(0,p.jA)(t,p.TO.First));case c.R.End:case c.R.PageDown:return e.preventDefault(),e.stopPropagation(),A(()=>(0,p.jA)(t,p.TO.Last))}if(A(()=>(0,u.E)(g,{vertical:()=>e.key===c.R.ArrowUp?(0,p.jA)(t,p.TO.Previous|p.TO.WrapAround):e.key===c.R.ArrowDown?(0,p.jA)(t,p.TO.Next|p.TO.WrapAround):p.fE.Error,horizontal:()=>e.key===c.R.ArrowLeft?(0,p.jA)(t,p.TO.Previous|p.TO.WrapAround):e.key===c.R.ArrowRight?(0,p.jA)(t,p.TO.Next|p.TO.WrapAround):p.fE.Error}))===p.fE.Success)return e.preventDefault()}),S=(0,o.useRef)(!1),N=(0,T.z)(()=>{var e;S.current||(S.current=!0,null==(e=k.current)||e.focus({preventScroll:!0}),E.change(O),(0,y.Y)(()=>{S.current=!1}))}),D=(0,T.z)(e=>{e.preventDefault()}),F=(0,o.useMemo)(()=>({selected:R}),[R]),$={ref:j,onKeyDown:B,onMouseDown:D,onClick:N,id:l,role:"tab",type:(0,m.f)(e,k),"aria-controls":null==(a=null==(n=w[O])?void 0:n.current)?void 0:a.id,"aria-selected":R,tabIndex:R?0:-1};return(0,s.sY)({ourProps:$,theirProps:i,slot:F,defaultTag:"button",name:"Tabs.Tab"})}),{Group:(0,s.yV)(function(e,t){let{defaultIndex:n=0,vertical:a=!1,manual:r=!1,onChange:l,selectedIndex:i=null,...d}=e,u=a?"vertical":"horizontal",c=r?"manual":"auto",m=null!==i,h=(0,b.T)(t),[x,y]=(0,o.useReducer)(A,{selectedIndex:null!=i?i:n,tabs:[],panels:[]}),_=(0,o.useMemo)(()=>({selectedIndex:x.selectedIndex}),[x.selectedIndex]),w=(0,g.E)(l||(()=>{})),I=(0,g.E)(x.tabs),P=(0,o.useMemo)(()=>({orientation:u,activation:c,...x}),[u,c,x]),k=(0,T.z)(e=>(y({type:1,tab:e}),()=>y({type:2,tab:e}))),j=(0,T.z)(e=>(y({type:3,panel:e}),()=>y({type:4,panel:e}))),C=(0,T.z)(e=>{L.current!==e&&w.current(e),m||y({type:0,index:e})}),L=(0,g.E)(m?e.selectedIndex:x.selectedIndex),z=(0,o.useMemo)(()=>({registerTab:k,registerPanel:j,change:C}),[]);return(0,f.e)(()=>{y({type:0,index:null!=i?i:n})},[i]),(0,f.e)(()=>{if(void 0===L.current||x.tabs.length<=0)return;let e=(0,p.z2)(x.tabs,e=>e.current);e.some((e,t)=>x.tabs[t]!==e)&&C(e.indexOf(x.tabs[L.current]))}),o.createElement(E,null,o.createElement(R.Provider,{value:z},o.createElement(O.Provider,{value:P},P.tabs.length<=0&&o.createElement(v,{onFocus:()=>{var e,t;for(let n of I.current)if((null==(e=n.current)?void 0:e.tabIndex)===0)return null==(t=n.current)||t.focus(),!0;return!1}}),(0,s.sY)({ourProps:{ref:h},theirProps:d,slot:_,defaultTag:B,name:"Tabs"}))))}),List:(0,s.yV)(function(e,t){let{orientation:n,selectedIndex:a}=L("Tab.List"),r=(0,b.T)(t);return(0,s.sY)({ourProps:{ref:r,role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:a},defaultTag:"div",name:"Tabs.List"})}),Panels:(0,s.yV)(function(e,t){let{selectedIndex:n}=L("Tab.Panels"),a=(0,b.T)(t),r=(0,o.useMemo)(()=>({selectedIndex:n}),[n]);return(0,s.sY)({ourProps:{ref:a},theirProps:e,slot:r,defaultTag:"div",name:"Tabs.Panels"})}),Panel:(0,s.yV)(function(e,t){var n,a,r,l;let i=(0,d.M)(),{id:u=`headlessui-tabs-panel-${i}`,tabIndex:c=0,...p}=e,{selectedIndex:m,tabs:g,panels:h}=L("Tab.Panel"),v=z("Tab.Panel"),T=(0,o.useRef)(null),y=(0,b.T)(T,t);(0,f.e)(()=>v.registerPanel(T),[v,T]);let _=I("panels"),w=h.indexOf(T);-1===w&&(w=_);let E=w===m,P=(0,o.useMemo)(()=>({selected:E}),[E]),k={ref:y,id:u,role:"tabpanel","aria-labelledby":null==(a=null==(n=g[w])?void 0:n.current)?void 0:a.id,tabIndex:E?c:-1};return E||null!=(r=p.unmount)&&!r||null!=(l=p.static)&&l?(0,s.sY)({ourProps:k,theirProps:p,slot:P,defaultTag:"div",features:S,visible:E,name:"Tabs.Panel"}):o.createElement(x._,{as:"span",...k})})});var D=n(94184),F=n.n(D),$={tabGroup:"Tab-module_tabGroup__dfID-",heroTabList:"Tab-module_heroTabList__peRZo",separatedTabList:"Tab-module_separatedTabList__nGCsd",tabList:"Tab-module_tabList__4O01W",tabListContainer:"Tab-module_tabListContainer__LaxZk",rightTabs:"Tab-module_rightTabs__Soyjg",centerTabs:"Tab-module_centerTabs__JOmga",leftTabs:"Tab-module_leftTabs__B188I",tabButton:"Tab-module_tabButton__AL693",heroButton:"Tab-module_heroButton__V-2xz",heroLeftButton:"Tab-module_heroLeftButton__4VyBV",heroRightButton:"Tab-module_heroRightButton__0FaEt",defaultTabButton:"Tab-module_defaultTabButton__SAG7p",separatedButton:"Tab-module_separatedButton__aXOXf",tabPanels:"Tab-module_tabPanels__8VGMT","default-panels":"Tab-module_default-panels__NiUcI","hero-panels":"Tab-module_hero-panels__zWNCZ","separated-panels":"Tab-module_separated-panels__7v5sO",tabPanel:"Tab-module_tabPanel__jL-2q",unstyledTabList:"Tab-module_unstyledTabList__rpfJe",unstyledButton:"Tab-module_unstyledButton__r73H-"};let M=e=>{let{children:t,active:n,index:a,dataTestId:r,title:l,icon:s,justify:d,panelKey:u}=e,c=(0,i._)(e,["children","active","index","dataTestId","title","icon","justify","panelKey"]),p=F()($.tabPanel,{[$.activeTabPanel]:n});return o.createElement(N.Panel,Object.assign({key:a||u,"data-testid":`endesign-${r}-tab-panel-${a}`,className:p},c),o.createElement(o.Fragment,null,t))};M.defaultProps={unmount:!0};var G=n(41539),V=n(94002);let U=e=>{var t;let{defaultActive:n,active:a,disabled:r,children:l,shape:s,dataTestId:d,onClick:u}=e,c=(0,V.G)((0,G.down)("sm")),[p,f]=o.useState(n||0),b=(0,o.useRef)(),m=[],g=[],h=[],x=[];o.Children.forEach(l,(e,t)=>{if(!o.isValidElement(e)||e.type.displayName&&"Panel"!==e.type.displayName||"function"!=typeof e.type)throw Error("Hey <Tab> component'i children olarak sadece <Tab.Panel> component'i kabul eder ve Panel'inde title'ı olmak zorunda!");let n=e.props,{title:a,justify:r,panelKey:l,icon:s}=n,u=Object.assign({title:a,panelKey:l,dataTestId:`endesign-${d}-tab-button-${t}`,icon:s},(0,i._)(n,["title","justify","panelKey","icon"]));r&&"flex-start"!==r?"flex-center"===r?h.push(u):g.push(u):m.push(u),x.push(u)});let v=F()($.tabListContainer,{[$.tabList]:"default"===s,[$.heroTabList]:"hero"===s,[$.separatedTabList]:"separated"===s,[$.unstyledTabList]:"unstyled"===s}),T=F()([$.tabButton],{[$.defaultTabButton]:"default"===s,[$.heroButton]:"hero"===s,[$.separatedButton]:"separated"===s,[$.unstyledButton]:"unstyled"===s}),y=F()({[$["hero-panels"]]:"hero"===s,[$["default-panels"]]:"default"===s,[$["separated-panels"]]:"separated"===s});null===(t=b.current)||void 0===t||t.closest('[dir="rtl"]');let _=(e,t)=>{u&&u(e,t.panelKey)},w=(e,t)=>{let n=F()([T],{[$.heroLeftButton]:"left"===t&&"hero"===s,[$.heroRightButton]:"right"===t&&"hero"===s});return o.createElement(N,{className:n,key:e.panelKey,"data-testId":e.dataTestId,disabled:r,onClick:t=>_(t,e)},o.createElement("div",{style:{display:"flex",alignItems:"center"}},e.icon,o.createElement("span",null,e.title)))};return o.useEffect(()=>{a!=p&&a&&f(a)},[a]),o.createElement(N.Group,{onChange:(e,t)=>{let n=b.current.querySelectorAll('[aria-controls^="headlessui-tabs-panel"]')[e];n&&n.scrollIntoView({block:"center",behavior:"smooth",inline:"center"}),f(e)},className:$.tabGroup,as:"div","data-testid":`endesign-${d}-tab`,defaultIndex:n,selectedIndex:p},o.createElement(N.List,{ref:b,"data-testid":`endesign-${d}-tab-list`,className:v},c?o.createElement(o.Fragment,null,x.length>0&&o.createElement("div",{"data-testid":`endesign-${d}-tab-left-wrapper`,className:$.centerTabs},x.map(e=>w(e,"center")))):o.createElement(o.Fragment,null,m.length>0&&o.createElement("div",{"data-testid":`endesign-${d}-tab-left-wrapper`,className:$.leftTabs},m.map(e=>w(e,"left"))),g.length>0&&o.createElement("div",{"data-testid":`endesign-${d}-tab-right-wrapper`,className:$.rightTabs},g.map(e=>w(e,"right"))),h.length>0&&o.createElement("div",{"data-testid":`endesign-${d}-tab-center-wrapper`,className:$.centerTabs},h.map(e=>w(e,"center"))))),o.createElement(N.Panels,{className:y},()=>o.Children.map(l,(e,t)=>o.cloneElement(e,Object.assign(Object.assign({},e.props),{index:t,dataTestId:d,active:p&&(null==e?void 0:e.props.panelKey)==p||t==p})))))};U.defaultProps={shape:"default",dataTestId:"[unnamed]"},U.Panel=M},30643:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(85893),r=n(67294),l=n(23755),i=n(27484),o=n.n(i),s=n(59389),d=n(68686),u=n(94698),c=n(19521);let p=c.default.h2.withConfig({componentId:"sc-a512bef9-0"})(["color:#131717;font-size:24px;font-style:normal;font-weight:700;line-height:normal;margin:0px 0px 16px 0px;","{font-size:20px;font-weight:600;}"],(0,u.down)("md"));c.default.a.withConfig({componentId:"sc-a512bef9-1"})(["position:relative;display:flex;flex-direction:column;width:100%;border-radius:12px;gap:12px;margin:0px auto 11px;overflow:hidden;","{min-width:initial;margin-bottom:0;}&:hover{img{transform:scale(1.08);}}"],(0,u.down)("md")),c.default.div.withConfig({componentId:"sc-a512bef9-2"})(["font-size:16px;font-style:normal;font-weight:600;line-height:normal;z-index:1;padding:0px 8px;"]);let f=c.default.div.withConfig({componentId:"sc-a512bef9-3"})(["margin-top:60px;margin-bottom:60px;","{margin-bottom:32px;}"],(0,u.down)("md")),b=c.default.div.withConfig({componentId:"sc-a512bef9-4"})(["border:",";display:flex;padding:10px 16px;justify-content:center;align-items:center;gap:10px;margin-bottom:16px;background-color:transparent;border-radius:200px;cursor:pointer;color:#131717;text-align:center;font-size:14px;font-style:normal;font-weight:",";line-height:normal;white-space:nowrap;position:relative;z-index:10;","{height:39px;margin-right:5px;}"],e=>e.active?"1px solid #131717;":"none",e=>e.active?"600":"400",(0,u.down)("md")),m=c.default.a.withConfig({componentId:"sc-a512bef9-5"})(["display:flex;padding:7px 12px;justify-content:center;align-items:center;gap:10px;border-radius:4px;border:1px solid#D7DDDB;background:#fff;color:#131717;text-align:center;font-size:14px;font-style:normal;font-weight:600;line-height:16px;height:32px;transition:0.3s all;&:hover{background-color:rgb(248,250,249);border-color:rgb(189,197,193);}","{font-size:16px;margin-top:16px;height:50px;}"],(0,u.down)("md")),g=c.default.div.withConfig({componentId:"sc-a512bef9-6"})(["display:flex;justify-content:space-between;align-items:center;"]);c.default.div.withConfig({componentId:"sc-a512bef9-7"})(["position:relative;height:168px;width:100%;overflow:hidden;border-radius:12px;> img{border-radius:12px;transition:transform 0.5s cubic-bezier(0.19,1,0.22,1);object-fit:cover;}"]);var h=n(98184);let x=c.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 12px;
  gap: 12px;
  margin: 0px auto 11px;
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.08);
    }
  }
`,v=c.default.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  z-index: 1;
  padding: 0px 8px;
`,T=c.default.div`
  position: relative;
  height: 168px;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  > img {
    border-radius: 12px;
    transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    object-fit: cover;
  }
`,y=e=>{var{title:t,image:n}=e,a=(0,h._)(e,["title","image"]);return r.createElement(x,Object.assign({},a),r.createElement(T,null,n),r.createElement(v,null,t))};var _=n(26575),w=e=>{var t,n,i;let{res:u}=e,c=(0,d.d)(),h=u&&u[0]&&(null===(t=u[0])||void 0===t?void 0:t.campaigns)?Object.values(null===(i=u[0])||void 0===i?void 0:null===(n=i.campaigns)||void 0===n?void 0:n.collection):[];if(!u[0]||!h.length)return null;let[x,v]=(0,r.useState)(-1);(0,r.useRef)(null);let T=[];h.map(e=>{let{provider:t}=e;T.push(t)});let w=[];T.forEach(e=>{w.some(t=>t&&"name"in t&&t.name===e.name&&t.slug===e.slug)||w.push(e)});let[E,I]=(0,r.useState)(""),P=(e,t)=>{I(e),v(t)},k=h.filter(e=>{var t;return null==e?void 0:null===(t=e.provider)||void 0===t?void 0:t.slug.includes(E)}),j=(e,t,n,r)=>(0,a.jsx)(l.Z.Panel,{unmount:!0,title:(0,a.jsx)(b,{active:x===r,onClick:()=>P(n,r),children:t}),panelKey:r,children:(0,a.jsx)(s.Z,{options:{pagination:!1,arrows:!c,gap:16,perPage:c?1:3,padding:0,paddingTop:c?16:0},children:(e||k).filter(e=>o()(e.endDate).diff(o()())>0).map((e,t)=>{let{title:n,slug:r,provider:l,thumbnailImageUrl:i,endDate:o,...s}=e;return(0,a.jsx)("a",{href:"https://www.enuygun.com/kampanyalar/".concat(l.slug,"/").concat(r,"/"),title:n,target:"_blank",children:(0,a.jsx)(y,{title:n,image:(0,a.jsx)(_.Z,{loading:"lazy",alt:n,width:c?354:362,height:168,src:"https://cdn2.enuygun.com/media/lib/1120x520/uploads/image/".concat(i)})})},t)})},r)},r);return(0,a.jsxs)(f,{children:[(0,a.jsxs)(g,{children:[(0,a.jsx)(p,{children:"Kampanyalar"}),!c&&(0,a.jsx)(m,{href:"https://www.enuygun.com/kampanyalar/",title:"T\xfcm kampanyaları g\xf6r",target:"_blank",children:"T\xfcm\xfcn\xfc g\xf6r"})]}),(0,a.jsxs)(l.Z,{shape:"unstyled",onClick:(e,t)=>{v(t)},children:[j(h,"T\xfcm\xfc","",-1),w.map((e,t)=>{let{name:n,slug:a}=e;return j(null,n,a,t)})]}),c&&(0,a.jsx)(m,{href:"https://www.enuygun.com/kampanyalar/",title:"T\xfcm kampanyaları g\xf6r",target:"_blank",children:"T\xfcm kampanyaları g\xf6r"})]})}},26575:function(e,t,n){var a=n(85893);n(67294);var r=n(25675),l=n.n(r);t.Z=e=>{let{src:t}=e;return(0,a.jsx)(l(),{loader:()=>t,src:t,...e})}}}]);