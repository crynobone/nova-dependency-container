(()=>{var e={705:(e,t,r)=>{var n=r(639).Symbol;e.exports=n},412:e=>{e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}},636:(e,t,r)=>{var n=r(545),o=r(694),i=r(469),c=r(144),a=r(776),u=r(719),s=Object.prototype.hasOwnProperty;e.exports=function(e,t){var r=i(e),l=!r&&o(e),f=!r&&!l&&c(e),d=!r&&!l&&!f&&u(e),p=r||l||f||d,y=p?n(e.length,String):[],v=y.length;for(var b in e)!t&&!s.call(e,b)||p&&("length"==b||f&&("offset"==b||"parent"==b)||d&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||a(b,v))||y.push(b);return y}},881:(e,t,r)=>{var n=r(816),o=r(291)(n);e.exports=o},483:(e,t,r)=>{var n=r(63)();e.exports=n},816:(e,t,r)=>{var n=r(483),o=r(674);e.exports=function(e,t){return e&&n(e,t,o)}},239:(e,t,r)=>{var n=r(705),o=r(607),i=r(333),c=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?o(e):i(e)}},454:(e,t,r)=>{var n=r(239),o=r(5);e.exports=function(e){return o(e)&&"[object Arguments]"==n(e)}},749:(e,t,r)=>{var n=r(239),o=r(780),i=r(5),c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c["[object Arguments]"]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c["[object Function]"]=c["[object Map]"]=c["[object Number]"]=c["[object Object]"]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1,e.exports=function(e){return i(e)&&o(e.length)&&!!c[n(e)]}},280:(e,t,r)=>{var n=r(726),o=r(916),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!n(e))return o(e);var t=[];for(var r in Object(e))i.call(e,r)&&"constructor"!=r&&t.push(r);return t}},545:e=>{e.exports=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}},518:e=>{e.exports=function(e){return function(t){return e(t)}}},290:(e,t,r)=>{var n=r(557);e.exports=function(e){return"function"==typeof e?e:n}},291:(e,t,r)=>{var n=r(612);e.exports=function(e,t){return function(r,o){if(null==r)return r;if(!n(r))return e(r,o);for(var i=r.length,c=t?i:-1,a=Object(r);(t?c--:++c<i)&&!1!==o(a[c],c,a););return r}}},63:e=>{e.exports=function(e){return function(t,r,n){for(var o=-1,i=Object(t),c=n(t),a=c.length;a--;){var u=c[e?a:++o];if(!1===r(i[u],u,i))break}return t}}},957:(e,t,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},607:(e,t,r)=>{var n=r(705),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,a=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,a),r=e[a];try{e[a]=void 0;var n=!0}catch(e){}var o=c.call(e);return n&&(t?e[a]=r:delete e[a]),o}},776:e=>{var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,r){var n=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&t.test(e))&&e>-1&&e%1==0&&e<r}},726:e=>{var t=Object.prototype;e.exports=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||t)}},916:(e,t,r)=>{var n=r(569)(Object.keys,Object);e.exports=n},167:(e,t,r)=>{e=r.nmd(e);var n=r(957),o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,c=i&&i.exports===o&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||c&&c.binding&&c.binding("util")}catch(e){}}();e.exports=a},333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},569:e=>{e.exports=function(e,t){return function(r){return e(t(r))}}},639:(e,t,r)=>{var n=r(957),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();e.exports=i},73:(e,t,r)=>{e.exports=r(486)},486:(e,t,r)=>{var n=r(412),o=r(881),i=r(290),c=r(469);e.exports=function(e,t){return(c(e)?n:o)(e,i(t))}},557:e=>{e.exports=function(e){return e}},694:(e,t,r)=>{var n=r(454),o=r(5),i=Object.prototype,c=i.hasOwnProperty,a=i.propertyIsEnumerable,u=n(function(){return arguments}())?n:function(e){return o(e)&&c.call(e,"callee")&&!a.call(e,"callee")};e.exports=u},469:e=>{var t=Array.isArray;e.exports=t},612:(e,t,r)=>{var n=r(560),o=r(780);e.exports=function(e){return null!=e&&o(e.length)&&!n(e)}},144:(e,t,r)=>{e=r.nmd(e);var n=r(639),o=r(62),i=t&&!t.nodeType&&t,c=i&&e&&!e.nodeType&&e,a=c&&c.exports===i?n.Buffer:void 0,u=(a?a.isBuffer:void 0)||o;e.exports=u},560:(e,t,r)=>{var n=r(239),o=r(218);e.exports=function(e){if(!o(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},780:e=>{e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},5:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},719:(e,t,r)=>{var n=r(749),o=r(518),i=r(167),c=i&&i.isTypedArray,a=c?o(c):n;e.exports=a},674:(e,t,r)=>{var n=r(636),o=r(280),i=r(612);e.exports=function(e){return i(e)?n(e):o(e)}},62:e=>{e.exports=function(){return!1}},744:(e,t)=>{"use strict";t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,n]of t)r[e]=n;return r}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n](i,i.exports,r),i.loaded=!0,i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{"use strict";const e=Vue;var t={key:0};function n(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,c=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw c}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const i={props:["resource","resourceName","resourceId","field"],created:function(){this.updateDependencyStatus()},data:function(){return{dependenciesSatisfied:!1}},methods:{updateDependencyStatus:function(){var e,t=n(this.field.dependencies);try{for(t.s();!(e=t.n()).done;){if(e.value.satisfied)return void(this.dependenciesSatisfied=!0)}}catch(e){t.e(e)}finally{t.f()}this.dependenciesSatisfied=!1}}};var c=r(744);const a=(0,c.Z)(i,[["render",function(r,n,o,i,c,a){return c.dependenciesSatisfied?((0,e.openBlock)(),(0,e.createElementBlock)("div",t,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(o.field.fields,(function(t){return(0,e.openBlock)(),(0,e.createElementBlock)("div",null,[((0,e.openBlock)(),(0,e.createBlock)((0,e.resolveDynamicComponent)("detail-"+t.component),{"resource-id":o.resourceId,"resource-name":o.resourceName,field:t,ref_for:!0,ref:"field-"+t.attribute},null,8,["resource-id","resource-name","field"]))])})),256))])):(0,e.createCommentVNode)("",!0)}]]);var u={key:0};const s=LaravelNova;function l(e,t){if(e)if(e.component)e.component.proxy&&t(e.component.proxy),l(e.component.subTree,t);else if(16&e.shapeFlag)for(var r=e.children,n=0;n<r.length;n++)l(r[n],t)}var f=r(73),d=r.n(f);function p(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw i}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const v={mixins:[s.FormField,s.HandlesValidationErrors],props:["resourceName","resourceId","field"],mounted:function(){this.registerDependencyWatchers(this.$root,(function(){this.updateDependencyStatus()}))},data:function(){return{dependencyValues:{},dependenciesSatisfied:!1}},methods:{registerDependencyWatchers:function(e,t){var r=this;t=t||null,l(e.$.subTree,(function(e){if(r.componentIsDependency(e)){var t=r.findWatchableComponentAttribute(e),n=e.field.value;e.$watch(t,(function(n){"selectedResource"===t&&(n=n&&n.value||null),r.dependencyValues[e.field.attribute]=n,r.updateDependencyStatus()}),{immediate:!0}),"fieldTypeName"===t&&(n=e.field.resourceLabel),r.dependencyValues[e.field.attribute]=n}})),null!==t&&t.call(this)},findWatchableComponentAttribute:function(e){var t;switch(e.field.component){case"belongs-to-many-field":case"belongs-to-field":t="selectedResource";break;case"morph-to-field":t="fieldTypeName";break;default:t="value"}return t},componentIsDependency:function(e){if(void 0===e.field)return!1;var t,r=p(this.field.dependencies);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(e.field.attribute===this.field.attribute+n.field)return!0}}catch(e){r.e(e)}finally{r.f()}return!1},updateDependencyStatus:function(){var e,t=p(this.field.dependencies);try{for(t.s();!(e=t.n()).done;){var r=e.value,n=this.dependencyValues[this.field.attribute+r.field];if(r.hasOwnProperty("empty")&&!n)return void(this.dependenciesSatisfied=!0);if(r.hasOwnProperty("notEmpty")&&n)return void(this.dependenciesSatisfied=!0);if(r.hasOwnProperty("nullOrZero")&&1<[void 0,null,0,"0"].indexOf(n))return void(this.dependenciesSatisfied=!0);if(r.hasOwnProperty("not")&&n!=r.not)return void(this.dependenciesSatisfied=!0);if(r.hasOwnProperty("in")&&r.in.includes(n))return void(this.dependenciesSatisfied=!0);if(r.hasOwnProperty("notin")&&!r.notin.includes(n))return void(this.dependenciesSatisfied=!0);if(r.hasOwnProperty("value")&&n==r.value)return void(this.dependenciesSatisfied=!0)}}catch(e){t.e(e)}finally{t.f()}this.dependenciesSatisfied=!1},fill:function(e){this.dependenciesSatisfied&&d()(this.field.fields,(function(t){t.fill&&t.fill(e)}))}}},b=(0,c.Z)(v,[["render",function(t,r,n,o,i,c){return i.dependenciesSatisfied?((0,e.openBlock)(),(0,e.createElementBlock)("div",u,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(n.field.fields,(function(r){return(0,e.openBlock)(),(0,e.createElementBlock)("div",null,[((0,e.openBlock)(),(0,e.createBlock)((0,e.resolveDynamicComponent)("form-"+r.component),{errors:t.errors,"resource-id":n.resourceId,"resource-name":n.resourceName,field:r,ref_for:!0,ref:"field-"+r.attribute,"show-help-text":null!=r.helpText},null,8,["errors","resource-id","resource-name","field","show-help-text"]))])})),256))])):(0,e.createCommentVNode)("",!0)}]]);Nova.booting((function(e,t){e.component("detail-dependency-container",a),e.component("form-dependency-container",b)}))})()})();