(this["webpackJsonpwknd-spa-react"]=this["webpackJsonpwknd-spa-react"]||[]).push([[0],{232:function(t,e){},242:function(t,e,n){var o={".":40,"./":40,"./index":40,"./index.js":40};function a(t){var e=c(t);return n(e)}function c(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}a.keys=function(){return Object.keys(o)},a.resolve=c,t.exports=a,a.id=242},247:function(t,e,n){},248:function(t,e,n){},249:function(t,e,n){"use strict";n.r(e);n(106),n(142),n(206);var o=n(25),a=n(12),c=n(0),s=n(102),r=n(4),i=n(1),p=n(2);class m extends i.Page{render(){return Object(p.jsxs)("div",{children:[this.childComponents,this.childPages]})}}var l=Object(i.withModel)(m);o.ModelClient;var d=n(69),b=n.n(d);const j=()=>Object(p.jsx)("div",{children:"Error loading chunks!"}),u=(O=t=>Object(p.jsx)("div",{className:"loading-skeleton loading-skeleton__block",style:{height:t.skeletonHeight?t.skeletonHeight:"50px"}}),h={skeletonHeight:1e3},function(t){return Object(p.jsx)(O,{...h,...t})});var O,h;var y=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;return b()(t,{loading:e,error:j})};n(247);class k extends i.Page{get containerProps(){let t=super.containerProps;return t.className=(t.className||"")+" page "+(this.props.cssClassNames||""),t}}var x,g;Object(i.MapTo)("wknd-spa-react/components/page")(Object(i.withComponentMappingContext)((x=k,class extends c.Component{render(){let t=this.props.cqPath;return t?(g=g||"html",Object(p.jsx)(r.d,{exact:!0,path:"(.*)"+t+"(."+g+")?",render:t=>Object(p.jsx)(x,{...this.props,...t})},t)):Object(p.jsx)(x,{...this.props})}})));Object(i.MapTo)("wknd-spa-react/components/container")(Object(i.withComponentMappingContext)(i.AllowedComponentsContainer),{emptyLabel:"Container",isEmpty:function(t){return!t||!t.cqItemsOrder||0===t.cqItemsOrder.length}});Object(i.MapTo)("wknd-spa-react/components/experiencefragment")(Object(i.withComponentMappingContext)(i.Container),{emptyLabel:"Experience Fragment",isEmpty:function(t){return!t||!t.configured}});Object(i.MapTo)("wknd-spa-react/components/form/formcontainer")(Object(i.withComponentMappingContext)(i.AllowedComponentsContainer),{emptyLabel:"Custom Form Container",isEmpty:function(t){return!t||!t.cqItemsOrder||0===t.cqItemsOrder.length}});Object(i.MapTo)("wknd-spa-react/components/form/text")((t=>Object(p.jsxs)("div",{children:[t.title,Object(p.jsx)("input",{...t})]})),{emptyLabel:"Form Text",isEmpty:function(t){return!t||!t.text||t.text.trim().length<1}});Object(i.MapTo)("wknd-spa-react/components/form/options")((t=>Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{...t,type:"checkbox",onChange:e=>{return n=e.target.checked,void(t.callback&&!t.isInEditor&&t.callback({checked:n,...t}));var n}}),Object(p.jsx)("label",{children:t.title})]})),{emptyLabel:"Form Options",isEmpty:function(t){return!t||!t.text||t.text.trim().length<1}});Object(i.MapTo)("wknd-spa-react/components/form/button")((t=>{const{type:e,cusClass:n,disabled:o,name:a,title:c,isInEditor:s,callback:r}=t;return Object(p.jsx)("button",{type:e,className:`bsc-button ${n}`,disabled:o,name:a,title:c,onClick:()=>{r&&!s&&t.callback(t)},children:c})}),{emptyLabel:"Form Button",isEmpty:function(t){return!t||!t.text||t.text.trim().length<1}});var w=n(26);Object(i.MapTo)("wknd-spa-react/components/tabcontainer")(w.TabsV1,{emptyLabel:"Custom Tab Container",isEmpty:function(t){return!t||!t.cqItemsOrder||0===t.cqItemsOrder.length}});class E extends c.Component{render(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{children:"IFrame Container"}),Object(p.jsx)("iframe",{className:"myiframe",style:{width:"500px",height:"500px",border:1},src:"http://localhost:3000/content/wknd-spa-react/us/en/faqs.html"})]})}}Object(i.MapTo)("wknd-spa-react/components/iframecontainer")(E,{emptyLabel:"Embed iFrame",isEmpty:function(t){return!t||!t.cqItemsOrder||0===t.cqItemsOrder.length}});var T=n(68);var C=t=>{let{cqItemsOrder:e=[],cqItems:n={},isInEditor:o=i.AuthoringUtils.isInEditor(),...a}=t;const c=a.componentMapping||T.ComponentMapping,s=[];return e.forEach((t=>{const e=i.Utils.modelToProps(n[t]);if(e&&e.cqType){const t=c.get(e.cqType);t?s.push(Object(p.jsx)(t,{isInEditor:o,...e,callback:a.callback},e.id)):console.error("Component not mapped for resourcetype:",e.cqType)}})),s};Object(i.MapTo)("wknd-spa-react/components/ActivityCalculator/PatientDetails")((t=>{const e=Object(r.k)();return Object(p.jsx)("div",{children:Object(p.jsx)(C,{...t,callback:t=>{console.log("callBackObj ",t),"next"===t.name&&e.push("faqs.html")}})})}));Object(i.MapTo)("wknd-spa-react/components/ActivityCalculator/PreviewSubmit")((t=>Object(p.jsx)("div",{children:"Preview page "})));Object(i.MapTo)("wknd-spa-react/components/ActivityCalculator/VialSelector")((t=>Object(p.jsx)("div",{children:"VialSelector"})));Object(i.MapTo)("wknd-spa-react/components/ActivityCalculator/TreatmentSchedule")((t=>Object(p.jsx)("div",{children:"TreatmentSchedule"})));var M=n(103),v=n(104),f=n(8);const I=y((()=>Promise.all([n.e(3),n.e(4)]).then(n.bind(null,297)))),V=y((()=>n.e(5).then(n.t.bind(null,295,7)))),P=y((()=>n.e(6).then(n.t.bind(null,296,7))));Object(i.MapTo)("wknd-spa-react/components/download")(f.DownloadV1,{isEmpty:f.DownloadV1IsEmptyFn}),Object(i.MapTo)("wknd-spa-react/components/list")(f.ListV2,{isEmpty:f.ListV2IsEmptyFn}),Object(i.MapTo)("wknd-spa-react/components/separator")(f.SeparatorV1,{isEmpty:f.SeparatorV1IsEmptyFn}),Object(i.MapTo)("wknd-spa-react/components/button")(f.ButtonV1,{isEmpty:f.ButtonV1IsEmptyFn}),Object(i.MapTo)("wknd-spa-react/components/teaser")(f.TeaserV1,{isEmpty:f.TeaserV1IsEmptyFn}),Object(i.MapTo)("wknd-spa-react/components/image")(f.ImageV2,{isEmpty:f.ImageV2IsEmptyFn}),Object(i.MapTo)("wknd-spa-react/components/title")(V,{isEmpty:v.TitleV2IsEmptyFn}),Object(i.MapTo)("wknd-spa-react/components/breadcrumb")(f.BreadCrumbV2,{isEmpty:f.BreadCrumbV2IsEmptyFn}),Object(i.MapTo)("wknd-spa-react/components/navigation")(f.NavigationV1),Object(i.MapTo)("wknd-spa-react/components/languagenavigation")(f.LanguageNavigationV1),Object(i.MapTo)("wknd-spa-react/components/tabs")(w.TabsV1,{isEmpty:w.TabsV1IsEmptyFn}),Object(i.MapTo)("wknd-spa-react/components/accordion")(w.AccordionV1,{isEmpty:w.AccordionV1IsEmptyFn}),Object(i.MapTo)("wknd-spa-react/components/carousel")(P,{isEmpty:M.CarouselV1IsEmptyFn}),Object(i.MapTo)("wknd-spa-react/components/container")(w.ContainerV1,{isEmpty:w.ContainerV1IsEmptyFn});Object(i.MapTo)("wknd-spa-react/components/text")(I,{emptyLabel:"Text",isEmpty:function(t){return!t||!t.text||t.text.trim().length<1}});n(248);const F={};document.addEventListener("DOMContentLoaded",(()=>{o.ModelManager.initialize(F).then((t=>{const e=Object(a.a)();Object(s.render)(Object(p.jsx)(r.e,{history:e,children:Object(p.jsx)(l,{history:e,cqChildren:t[o.Constants.CHILDREN_PROP],cqItems:t[o.Constants.ITEMS_PROP],cqItemsOrder:t[o.Constants.ITEMS_ORDER_PROP],cqPath:t[o.Constants.PATH_PROP],locationPathname:window.location.pathname})}),document.getElementById("spa-root"))}))}))}},[[249,1,2]]]);
//# sourceMappingURL=main.7b6520e8.chunk.js.map