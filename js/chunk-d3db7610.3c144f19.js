(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3db7610"],{"1cc2":function(t,n,o){},"45e8":function(t,n,o){"use strict";var a=o("1cc2"),i=o.n(a);i.a},"87cb":function(t,n,o){"use strict";o.r(n);var a=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("b-form-group",[t.component.title?o("h4",{staticClass:"card-title",domProps:{innerHTML:t._s(t.component.title)}}):t._e(),t.component.description?o("b-card-text",{domProps:{innerHTML:t._s(t.component.description)}}):t._e(),o("b-form",{staticClass:"form-toolbar-rtl",attrs:{inline:""}},[o("b-button",{attrs:{size:"badge",disabled:t.downloadActionDisabled},on:{click:t.downloadAction}},[o("b-icon",{staticClass:"btn-icon",attrs:{icon:"download"}}),o("a",{ref:"downloadFileContent",staticStyle:{display:"none"}})],1),o("b-button",{attrs:{size:"badge",disabled:t.trashActionDisabled},on:{click:t.trashAction}},[o("b-icon",{staticClass:"btn-icon",attrs:{icon:"trash"}})],1)],1),o("b-input-group",{staticClass:"mb-2"},[o("b-form-textarea",{staticClass:"fileTextarea",attrs:{readonly:"",spellcheck:"false",autocomplete:"off"},model:{value:t.inputData,callback:function(n){t.inputData=n},expression:"inputData"}})],1),o("ToolbarFooter",{attrs:{index:t.component.index,input_ref:t.component.input_ref,length:t.length,loading:t.loading},on:{"update:index":function(n){return t.$set(t.component,"index",n)},"update:length":function(n){t.length=n},"update:loading":function(n){t.loading=n}}})],1)},i=[],e=(o("d3b7"),o("3ca3"),o("ddb0"),o("2b3d"),o("effc")),s=o("cc8f"),c={name:"DatasetTextViewer",components:{ToolbarFooter:e["a"]},mixins:[s["a"]],data:function(){var t={serializable:[]};return this.importData(t)},computed:{downloadActionDisabled:function(){var t=0;return t|=null===this.inputData||0===this.inputData.length,1===t},trashActionDisabled:function(){return this.downloadActionDisabled}},watch:{inputLoading:function(t,n){this.loading=t,!1===this.loading&&(this.output=this.inputData)}},methods:{trashAction:function(t){this.inputData="",this.output=null,this.loadData(this.data),this.loadData(this.component.data)},downloadAction:function(t){if(t.isTrusted){var n=new Blob([this.inputData],{type:"octet/stream"}),o=window.URL.createObjectURL(n);this.$refs["downloadFileContent"].href=o,this.$refs["downloadFileContent"].download=this.component.index,this.$refs["downloadFileContent"].click(),window.URL.revokeObjectURL(o)}}}},l=c,d=(o("45e8"),o("2877")),r=Object(d["a"])(l,a,i,!1,null,"e1c1863c",null);n["default"]=r.exports}}]);
//# sourceMappingURL=chunk-d3db7610.3c144f19.js.map