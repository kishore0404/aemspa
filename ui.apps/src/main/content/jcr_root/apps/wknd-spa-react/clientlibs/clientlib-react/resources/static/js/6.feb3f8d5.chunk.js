(this["webpackJsonpwknd-spa-react"]=this["webpackJsonpwknd-spa-react"]||[]).push([[6],{296:function(e,t,s){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function s(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=18)}({0:function(e,t){e.exports=s(0)},1:function(e,t){e.exports=s(1)},18:function(e,t,s){e.exports=s(9)},2:function(e,t,s){"use strict";s.d(t,"b",(function(){return n})),s.d(t,"a",(function(){return o}));var a=s(0);const i=(()=>{try{return"undefined"!=typeof window}catch(e){return!1}})(),n=(e,t)=>s=>{const i=s.baseCssClass,n=i&&i.trim().length>0?i:t,o={...s,baseCssClass:n};return a.createElement(e,Object.assign({},o))},o=e=>class extends a.Component{constructor(e){super(e),this.state={},i&&window.Granite&&window.Granite.author&&window.Granite.author.MessageChannel&&(this.messageChannel=new window.Granite.author.MessageChannel("cqauthor",window),this.callback=this.callback.bind(this))}callback(e){if(e.data&&e.data.id===this.props.cqPath&&"navigate"===e.data.operation){const t=e.data.index;this.setState({activeIndexFromAuthorPanel:t})}}componentDidMount(){this.messageChannel&&this.messageChannel.subscribeRequestMessage("cmp.panelcontainer",this.callback)}componentWillUnmount(){this.messageChannel&&this.messageChannel.unsubscribeRequestMessage("cmp.panelcontainer",this.callback)}render(){return a.createElement(e,Object.assign({},this.props,{activeIndexFromAuthorPanel:this.state.activeIndexFromAuthorPanel}))}}},5:function(e,t,s){"use strict";function a(e){return null==e.cqItemsOrder||0===e.cqItemsOrder.length}s.d(t,"a",(function(){return a}))},9:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s.n(a),n=s(2),o=s(1),r=s(5);const l=(e,t)=>{let s=e;for(let a=0;a<t.length;a++){const e="{"+a+"}";s=s.replace(e,t[a])}return s};class c extends o.Container{constructor(e){super(e),this.interval=0,this.clearAutoPlay=()=>{window.clearInterval(this.interval)},this.state={activeIndex:0,isMouseEntered:!1,autoPlay:this.props.autoplay&&!this.props.isInEditor,componentMapping:this.props.componentMapping||o.ComponentMapping},this.handleIndicatorClick=this.handleIndicatorClick.bind(this),this.handleOnButtonPrev=this.handleOnButtonPrev.bind(this),this.handleOnButtonNext=this.handleOnButtonNext.bind(this),this.handleOnMouseEnter=this.handleOnMouseEnter.bind(this),this.handleOnMouseLeave=this.handleOnMouseLeave.bind(this)}componentDidUpdate(e,t,s){void 0!==this.props.activeIndexFromAuthorPanel&&e.activeIndexFromAuthorPanel!=this.props.activeIndexFromAuthorPanel&&(this.setState({activeIndex:this.props.activeIndexFromAuthorPanel}),this.toggleAutoPlay(!1))}componentDidMount(){this.autoPlay()}componentWillUnmount(){this.interval&&this.clearAutoPlay()}handleOnMouseEnter(){!this.props.autopauseDisabled&&this.props.autoplay&&this.clearAutoPlay()}handleOnMouseLeave(){!this.props.autopauseDisabled&&this.props.autoplay&&this.autoPlay()}handleOnButtonPrev(){this.prevSlide()}handleOnButtonNext(){this.nextSlide()}handleIndicatorClick(e){this.state.activeIndex!==e&&this.setState({activeIndex:e})}autoPlay(){this.interval=window.setInterval((()=>{this.autoPlayTick()}),this.props.delay)}autoPlayTick(){!this.state.autoPlay||this.props.cqItemsOrder.length<=1||this.nextSlide()}toggleAutoPlay(e){this.setState({autoPlay:e})}nextSlide(){const e=this.__getActiveIndex();e===this.props.cqItemsOrder.length-1?this.__setSlide(0):this.__setSlide(e+1)}prevSlide(){const e=this.__getActiveIndex();0===e?this.__setSlide(this.props.cqItemsOrder.length-1):this.__setSlide(e-1)}__getActiveIndex(){return this.state.activeIndex}__setSlide(e){this.setState({activeIndex:e})}render(){const e=Object(r.a)(this.props);return i.a.createElement("div",{className:this.props.baseCssClass,role:"group","data-panelcontainer":"carousel","aria-label":this.props.accessibilityLabel,"aria-roledescription":"carousel"},!e&&this.renderCarousel(),this.placeholderComponent)}displayItem(e,t){const s=t===this.state.activeIndex,a=!(!s&&!this.props.isInEditor),n=s?`${this.props.baseCssClass}__item ${this.props.baseCssClass}__item--active`:this.props.baseCssClass+"__item",o=l(this.props.accessibility.slide,[(t+1).toString(),this.props.cqItemsOrder.length.toString()]);return i.a.createElement("div",{key:"item-"+t,className:n,role:"tabpanel","aria-label":o,"data-cmp-hook-carousel":"item"},a&&e)}renderCarousel(){return i.a.createElement("div",{className:this.props.baseCssClass+"__content",onMouseEnter:()=>this.handleOnMouseEnter(),onMouseLeave:()=>this.handleOnMouseLeave()},this.childComponents.map(((e,t)=>this.displayItem(e,t))),this.renderCarouselActions(),this.renderCarouselIndicators())}renderCarouselIndicators(){return i.a.createElement("ol",{className:this.props.baseCssClass+"__indicators",role:"tablist","aria-label":this.props.accessibility.indicators},this.props.cqItemsOrder.map(((e,t)=>{const s=this.props.cqItems[e],a=t===this.state.activeIndex?`${this.props.baseCssClass}__indicator ${this.props.baseCssClass}__indicator--active`:this.props.baseCssClass+"__indicator",n=l(this.props.accessibility.indicator,[(t+1).toString()]);return i.a.createElement("li",{key:"item-"+t,onClick:()=>this.handleIndicatorClick(t),className:a,role:"tab","aria-label":n},s["cq:panelTitle"])})))}renderCarouselActions(){return i.a.createElement("div",{className:this.props.baseCssClass+"__actions"},i.a.createElement("button",{onClick:()=>this.handleOnButtonPrev(),className:`${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--previous`,type:"button","aria-label":this.props.accessibility.previous},i.a.createElement("span",{className:this.props.baseCssClass+"__action-icon"}),i.a.createElement("span",{className:this.props.baseCssClass+"__action-text"},this.props.accessibility.previous)),i.a.createElement("button",{onClick:()=>this.handleOnButtonNext(),className:`${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--next`,type:"button","aria-label":this.props.accessibility.next},i.a.createElement("span",{className:this.props.baseCssClass+"__action-icon"}),i.a.createElement("span",{className:this.props.baseCssClass+"__action-text"},this.props.accessibility.next)),this.props.autoplay&&i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{className:`${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--pause `+(this.state.autoPlay?"":this.props.baseCssClass+"__action--disabled"),type:"button","aria-label":this.props.accessibility.pause,onClick:()=>this.toggleAutoPlay(!1)},i.a.createElement("span",{className:this.props.baseCssClass+"__action-icon"}),i.a.createElement("span",{className:this.props.baseCssClass+"__action-text"},this.props.accessibility.pause)),i.a.createElement("button",{className:`${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--play `+(this.state.autoPlay?this.props.baseCssClass+"__action--disabled":""),type:"button","aria-label":this.props.accessibility.play,onClick:()=>this.toggleAutoPlay(!0)},i.a.createElement("span",{className:this.props.baseCssClass+"__action-icon"}),i.a.createElement("span",{className:this.props.baseCssClass+"__action-text"},this.props.accessibility.play))))}}c.defaultProps={_allowedComponentPlaceholderListEmptyLabel:"CarouselV1",isInEditor:!1,autoplay:!1,cqPath:"",cqItems:{},cqItemsOrder:[],accessibilityLabel:"Carousel",accessibility:{play:"Play",pause:"Pause",next:"Next",previous:"Previous",slide:"Slide {0} of {1}",indicator:"Slide %{0}",indicators:"Choose a slide to display"}},t.default=Object(n.b)(Object(n.a)(c),"cmp-carousel")}})}}]);
//# sourceMappingURL=6.feb3f8d5.chunk.js.map