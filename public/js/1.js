(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+SZM":function(t,e,n){"use strict";var r={data:function(){return{isNavClosed:!0}},methods:{toggleNav:function(){this.isNavClosed=!this.isNavClosed}},computed:{isNavOpened:function(){return!this.isNavClosed},path:function(){return window.location.pathname}}},a=(n("vGEg"),n("KHd+")),s=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-white page"},[n("nav",{staticClass:"w3-sidebar w3-bar-block sidebar w3-green w3-border-right",class:{"sidebar--closed":t.isNavClosed}},[n("button",{staticClass:"w3-xxlarge w3-padding w3-button w3-hover-green",class:{"w3-display-topright":t.isNavOpened},on:{click:t.toggleNav}},[t.isNavClosed?n("i",{staticClass:"fa fa-bars"}):t._e(),t._v(" "),t.isNavOpened?n("i",{staticClass:"fa fa-times"}):t._e()]),t._v(" "),t.isNavOpened?n("div",{staticStyle:{"margin-top":"10vh"}},[t._v("\n      Registrato come: "),n("br"),t._v("\n      "+t._s(t.$page.user.name)+" "),n("br"),t._v("\n      "+t._s(t.$page.user.email)+"\n    ")]):t._e(),t._v(" "),n("div",{staticStyle:{"margin-top":"20vh"}},[n("inertia-link",{staticClass:"w3-bar-item w3-button w3-hover-gray",class:{"w3-light-gray":"/home"===t.path||"/"===t.path},attrs:{href:"/home"}},[n("i",{staticClass:"fa fa-home w3-xxlarge"}),t._v(" "),t.isNavOpened?n("span",{staticClass:"w3-xlarge"},[t._v("Acasa")]):t._e()]),t._v(" "),n("inertia-link",{staticClass:"w3-bar-item w3-button w3-hover-gray",class:{"w3-light-gray":"/users"===t.path},attrs:{href:"/users"}},[n("i",{staticClass:"fa fa-users w3-xxlarge"}),t._v(" "),t.isNavOpened?n("span",{staticClass:"w3-xlarge"},[t._v("Amministratori")]):t._e()]),t._v(" "),n("inertia-link",{staticClass:"w3-bar-item w3-button w3-hover-gray",class:{"w3-light-gray":"/standard-requests"===t.path},attrs:{href:"/standard-requests"}},[n("i",{staticClass:"fa fa-upload w3-xxlarge"}),t._v(" "),t.isNavOpened?n("span",{staticClass:"w3-xlarge"},[t._v("Richeste")]):t._e()]),t._v(" "),n("inertia-link",{staticClass:"w3-bar-item w3-button w3-hover-gray",class:{"w3-light-gray":"/express-requests"===t.path},attrs:{href:"/express-requests"}},[n("i",{staticClass:"fa fa-truck w3-xxlarge"}),t._v(" "),t.isNavOpened?n("span",{staticClass:"w3-xlarge"},[t._v("Richeste Express")]):t._e()]),t._v(" "),n("inertia-link",{staticClass:"w3-bar-item w3-button w3-hover-gray",class:{"w3-light-gray":"/push-notifications/create"===t.path},attrs:{href:"/push-notifications/create"}},[n("i",{staticClass:"fa fa-bell w3-xxlarge"}),t._v(" "),t.isNavOpened?n("span",{staticClass:"w3-xlarge"},[t._v("Notifiche Push")]):t._e()])],1)]),t._v(" "),n("div",{style:{marginLeft:t.isNavClosed?"70px":"20%"}},[t._m(0),t._v(" "),n("div",{staticClass:"w3-container"},[t._t("default")],2)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",{staticClass:"w3-green w3-padding"},[e("span",{staticStyle:{"font-family":"Times New Roman"}},[this._v("Lemart & Lemart")]),this._v(" Express Control Panel\n      ")])])}],!1,null,null,null);e.a=s.exports},"5xnn":function(t,e,n){var r=n("VduA");"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,a);r.locals&&(t.exports=r.locals)},"9tPo":function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var a,s=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?t:(a=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:r+s.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},I1BE:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var a=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),s=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(s).concat([a]).join("\n")}var i;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var s=this[a][0];"number"==typeof s&&(r[s]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},"KHd+":function(t,e,n){"use strict";function r(t,e,n,r,a,s,i,o){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):a&&(c=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}n.d(e,"a",function(){return r})},QhmH:function(t,e,n){var r=n("mts0");"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,a);r.locals&&(t.exports=r.locals)},"TIm+":function(t,e,n){"use strict";var r=n("QhmH");n.n(r).a},VduA:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\nbody {\n  background-color: lightgray;\n  margin: 8px;\n}\n.page {\n  min-height: calc(100vh - 20px);\n}\n.sidebar {\n  width: 20%;\n}\n.sidebar--closed {\n  width: 70px;\n  text-align: center;\n}\n",""])},"aET+":function(t,e,n){var r,a,s={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),o=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,l=0,d=[],u=n("9tPo");function f(t,e){for(var n=0;n<t.length;n++){var r=t[n],a=s[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(_(r.parts[i],e))}else{var o=[];for(i=0;i<r.parts.length;i++)o.push(_(r.parts[i],e));s[r.id]={id:r.id,refs:1,parts:o}}}}function p(t,e){for(var n=[],r={},a=0;a<t.length;a++){var s=t[a],i=e.base?s[0]+e.base:s[0],o={css:s[1],media:s[2],sourceMap:s[3]};r[i]?r[i].parts.push(o):n.push(r[i]={id:i,parts:[o]})}return n}function v(t,e){var n=o(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),d.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=o(t.insertAt.before,n);n.insertBefore(e,a)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return g(e,t.attrs),v(t,e),e}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function _(t,e){var n,r,a,s;if(e.transform&&t.css){if(!(s="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=s}if(e.singleton){var i=l++;n=c||(c=m(e)),r=y.bind(null,n,i,!1),a=y.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),v(t,e),e}(e),r=function(t,e,n){var r=n.css,a=n.sourceMap,s=void 0===e.convertToAbsoluteUrls&&a;(e.convertToAbsoluteUrls||s)&&(r=u(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([r],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}.bind(null,n,e),a=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),a=function(){h(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else a()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return f(n,e),function(t){for(var r=[],a=0;a<n.length;a++){var i=n[a];(o=s[i.id]).refs--,r.push(o)}t&&f(p(t,e),e);for(a=0;a<r.length;a++){var o;if(0===(o=r[a]).refs){for(var c=0;c<o.parts.length;c++)o.parts[c]();delete s[o.id]}}}};var w,b=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function y(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,a);else{var s=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}},mts0:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\ntd[data-v-6dd100fd]:first-child {\n  width: 15em;\n}\n.row[data-v-6dd100fd] {\n  display: flex;\n  margin-top: 5%;\n}\n.center-content[data-v-6dd100fd] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.img-card[data-v-6dd100fd] {\n  width: 100px;\n}\n.img-card img[data-v-6dd100fd] {\n  width: 100%;\n}\n",""])},qvV7:function(t,e,n){"use strict";n.r(e);var r={components:{Layout:n("+SZM").a},data:function(){return{showModal:!1,modalImg:!1}},methods:{showImage:function(t){this.showModal=!0,this.modalImg=t}}},a=(n("TIm+"),n("KHd+")),s=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("h2",{staticClass:"w3-border-bottom"},[t._v("Richesta di intervento Express per "+t._s(t.$page.request.company_name))]),t._v(" "),n("table",{staticClass:"w3-table"},[n("tr",[n("td",[t._v("Nome dell'azienda")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.company_name))])]),t._v(" "),n("tr",[n("td",[t._v("E-mail")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.email))])]),t._v(" "),n("tr",[n("td",[t._v("Numero di cellulare")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.phone))])]),t._v(" "),n("tr",[n("td",[t._v("Indirizzo")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.address))])]),t._v(" "),n("tr",[n("td",[t._v("Marca, modello e tipo")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.model))])]),t._v(" "),n("tr",[n("td",[t._v("Peso kg")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.weight))])]),t._v(" "),n("tr",[n("td",[t._v("Numero pianali totale")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.total))])]),t._v(" "),n("tr",[n("td",[t._v("Persona di riferimento")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.person))])]),t._v(" "),n("tr",[n("td",[t._v("Guasto dichiarato")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.damage))])]),t._v(" "),n("tr",[n("td",[t._v("Mandato il")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.created_at))])])]),t._v(" "),n("div",{staticClass:"row"},t._l(t.$page.images,function(e,r){return n("div",{key:e.id,staticClass:"w3-card-4 img-card w3-border w3-round",on:{click:function(){t.showModal=!0,t.modalImg=r}}},[n("img",{staticClass:"w3-image",attrs:{src:"/storage/"+e.filename}})])}),0),t._v(" "),t.showModal?n("div",{staticClass:"w3-modal",staticStyle:{display:"block"}},[n("div",{staticClass:"w3-modal-content"},[n("div",{staticClass:"w3-container center-content"},[n("span",{staticClass:"w3-button w3-display-topright w3-green",on:{click:function(){return t.showModal=!1}}},[t._v("×")]),t._v(" "),n("img",{staticClass:"w3-image w3-margin-bottom",attrs:{src:"/storage/"+t.$page.images[t.modalImg].filename}})])])]):t._e()])},[],!1,null,"6dd100fd",null);e.default=s.exports},vGEg:function(t,e,n){"use strict";var r=n("5xnn");n.n(r).a}}]);