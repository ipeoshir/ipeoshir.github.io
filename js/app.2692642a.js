(function(e){function n(n){for(var o,i,c=n[0],a=n[1],u=n[2],d=0,l=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(p,i)&&p[i]&&l.push(p[i][0]),p[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);s&&s(n);while(l.length)l.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,i=1;i<t.length;i++){var c=t[i];0!==p[c]&&(o=!1)}o&&(r.splice(n--,1),e=a(a.s=t[0]))}return e}var o={},i={app:0},p={app:0},r=[];function c(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a3c21":"691b8d1a","chunk-461cdaac":"6f1aabb8","chunk-41e39ea5":"11a3bb1f","chunk-594d6d48":"6089f77e","chunk-76831eb8":"216265b1","chunk-03bbd21c":"dbab66fe"}[e]+".js"}function a(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t={"chunk-41e39ea5":1,"chunk-76831eb8":1,"chunk-03bbd21c":1};i[e]?n.push(i[e]):0!==i[e]&&t[e]&&n.push(i[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-2d0a3c21":"31d6cfe0","chunk-461cdaac":"31d6cfe0","chunk-41e39ea5":"fbfc1977","chunk-594d6d48":"31d6cfe0","chunk-76831eb8":"0ad8a838","chunk-03bbd21c":"a364a655"}[e]+".css",p=a.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===o||d===p))return n()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===o||d===p)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var o=n&&n.target&&n.target.src||p,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],s.parentNode.removeChild(s),t(r)},s.href=p;var f=document.getElementsByTagName("head")[0];f.appendChild(s)})).then((function(){i[e]=0})));var o=p[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,t){o=p[e]=[n,t]}));n.push(o[2]=r);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.src=c(e);var l=new Error;u=function(n){d.onerror=d.onload=null,clearTimeout(s);var t=p[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,t[1](l)}p[e]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(n)},a.m=e,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)a.d(t,o,function(n){return e[n]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var s=d;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var o=t("85ec"),i=t.n(o);i.a},"3dfd":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Header"),t("b-card",[e._l(e.pipeline,(function(n,o){return[t(n.type,{key:Math.random(o),ref:n.index,refInFor:!0,tag:"component",attrs:{id:n.index,input_ref:n.input_ref,loading_ref:n.loading_ref,input_index:n.input_index,title:n.title,description:n.description},on:{"update:id":function(t){return e.$set(n,"index",t)},"update:input_ref":function(t){return e.$set(n,"input_ref",t)},"update:loading_ref":function(t){return e.$set(n,"loading_ref",t)},"update:input_index":function(t){return e.$set(n,"input_index",t)},"update:title":function(t){return e.$set(n,"title",t)},"update:description":function(t){return e.$set(n,"description",t)},onSetupComponent:e.onSetupComponent,onRemoveComponent:e.onRemoveComponent,onAddComponent:e.onAddComponent,onMoveDownComponent:e.onMoveDownComponent,onMoveUpComponent:e.onMoveUpComponent}})]}))],2),t("b-modal",{attrs:{id:"addComponentModal",title:"Add Component"},on:{ok:e.addComponent}},[t("b-form-select",{attrs:{options:e.componentOptions},model:{value:e.componentSelected,callback:function(n){e.componentSelected=n},expression:"componentSelected"}})],1),t("b-modal",{attrs:{id:"setupComponentModal",title:"Setup Component"},on:{ok:e.setupComponent}},[t("label",[e._v("Title")]),t("b-form-input",{model:{value:e.componentTitle,callback:function(n){e.componentTitle=n},expression:"componentTitle"}}),t("label",[e._v("Description")]),t("b-form-input",{model:{value:e.componentDescription,callback:function(n){e.componentDescription=n},expression:"componentDescription"}}),t("label",[e._v("Input Reference")]),t("b-form-select",{attrs:{options:e.componentInputReferenceOptions},model:{value:e.componentInputReferenceSelected,callback:function(n){e.componentInputReferenceSelected=n},expression:"componentInputReferenceSelected"}}),t("label",[e._v("Input Index")]),t("b-input-group",[t("b-form-spinbutton",{attrs:{min:"0",placeholder:"--"},model:{value:e.componentInputIndex,callback:function(n){e.componentInputIndex=n},expression:"componentInputIndex"}}),t("b-button",{on:{click:function(n){e.componentInputIndex=null}}},[t("b-icon",{staticClass:"btn-icon",attrs:{icon:"trash"}})],1)],1),t("label",[e._v("Loading Reference")]),t("b-form-select",{attrs:{options:e.componentLoadingReferenceOptions},model:{value:e.componentLoadingReferenceSelected,callback:function(n){e.componentLoadingReferenceSelected=n},expression:"componentLoadingReferenceSelected"}})],1)],1)},i=[],p=(t("a4d3"),t("e01a"),t("c975"),t("d81d"),t("a434"),t("d3b7"),t("ac1f"),t("1276"),{name:"App",props:[],components:{Header:function(){return t.e("chunk-2d0a3c21").then(t.bind(null,"0418"))},DatasetLoader:function(){return Promise.all([t.e("chunk-594d6d48"),t.e("chunk-03bbd21c")]).then(t.bind(null,"1429"))},DatasetViewer:function(){return Promise.all([t.e("chunk-461cdaac"),t.e("chunk-41e39ea5")]).then(t.bind(null,"7c25"))},AutoencoderModel:function(){return Promise.all([t.e("chunk-461cdaac"),t.e("chunk-594d6d48"),t.e("chunk-76831eb8")]).then(t.bind(null,"3ed0"))}},created:function(){},data:function(){return{index:null,componentSelected:"DatasetViewer",componentOptions:["DatasetLoader","DatasetViewer","AutoencoderModel"],componentTitle:null,componentDescription:null,componentInputIndex:null,componentInputReferenceSelected:null,componentInputReferenceOptions:[],componentLoadingReferenceSelected:null,componentLoadingReferenceOptions:[],pipeline:[{index:"pipeline_0",type:"DatasetLoader",title:"Dataset Loader"},{index:"pipeline_1",type:"DatasetViewer",input_ref:"pipeline_0",loading_ref:"pipeline_0"},{index:"pipeline_2",type:"AutoencoderModel",input_ref:"pipeline_0",input_index:3,title:"Autoencoder Model"},{index:"pipeline_3",type:"DatasetViewer",input_ref:"pipeline_2",loading_ref:"pipeline_2"}]}},methods:{setupComponent:function(){this.pipeline[this.index].title=this.componentTitle,this.pipeline[this.index].description=this.componentDescription,this.pipeline[this.index].input_index=this.componentInputIndex,this.pipeline[this.index].input_ref=this.componentInputReferenceSelected,this.pipeline[this.index].loading_ref=this.componentLoadingReferenceSelected,this.pipeline[this.index]=this.pipeline[this.index],this.componentInputReferenceOptions=[]},onSetupComponent:function(e){this.index=this.pipeline.map((function(e){return e.index})).indexOf(e),this.componentTitle=this.pipeline[this.index].title,this.componentDescription=this.pipeline[this.index].description,this.componentInputIndex=this.pipeline[this.index].input_index,this.componentInputReferenceSelected=this.pipeline[this.index].input_ref,this.componentInputReferenceOptions=this.pipeline.map((function(e){return e.index})),this.componentInputReferenceOptions.splice(0,0,""),this.componentLoadingReferenceSelected=this.pipeline[this.index].loading_ref,this.componentLoadingReferenceOptions=this.pipeline.map((function(e){return e.index})),this.componentLoadingReferenceOptions.splice(0,0,""),this.$bvModal.show("setupComponentModal")},removeComponent:function(){this.pipeline.splice(this.index,1)},onRemoveComponent:function(e){this.index=this.pipeline.map((function(e){return e.index})).indexOf(e),this.removeComponent()},addComponent:function(){for(var e=this.index,n=e;n<this.pipeline.length;n++)this.$store.unregisterModule("pipeline_"+n);this.pipeline.splice(e,0,{index:"pipeline_"+e,type:this.componentSelected});for(var t=e+1;t<this.pipeline.length;t++){var o=this.pipeline[t];"input_ref"in o&&(this.pipeline[t].input_ref="pipeline_"+(parseInt(o.input_ref.split("_")[1])+1)),"loading_ref"in o&&(this.pipeline[t].loading_ref="pipeline_"+(parseInt(o.loading_ref.split("_")[1])+1)),this.pipeline[t].index="pipeline_"+(parseInt(o.index.split("_")[1])+1)}},onAddComponent:function(e){this.$bvModal.show("addComponentModal"),this.index=this.pipeline.map((function(e){return e.index})).indexOf(e)+1},onMoveDownComponent:function(e){console.log("move down",e),this.index=this.pipeline.map((function(e){return e.index})).indexOf(e)+1},onMoveUpComponent:function(e){console.log("move up",e),this.index=this.pipeline.map((function(e){return e.index})).indexOf(e)+1}}}),r=p,c=(t("034f"),t("2877")),a=Object(c["a"])(r,o,i,!1,null,"643dd3fa",null);n["a"]=a.exports},"56d7":function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"store",(function(){return m}));t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("bc3a"),i=t.n(o),p=t("a026"),r=t("2f62"),c=t("a7fe"),a=t.n(c),u=t("58ca"),d=t("8c4f"),l=t("3dfd"),s=t("5f5b"),f=t("b1e0");t("f9e3"),t("2dd8");p["default"].use(r["a"]),p["default"].use(a.a,i.a),p["default"].use(u["a"]),p["default"].use(d["a"]),p["default"].use(s["a"]),p["default"].use(f["a"]),p["default"].config.productionTip=!1;var m=new r["a"].Store({}),h=new d["a"]({mode:"history",hash:!1,routes:[{path:"/",component:l["a"]}]});e.vue=new p["default"]({el:"#app",router:h,store:m,template:"<router-view/>",components:{App:l["a"]}})}.call(this,t("c8ba"))},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.2692642a.js.map