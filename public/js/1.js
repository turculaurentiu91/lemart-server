(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+SZM":function(t,e,n){"use strict";var a={data:function(){return{isNavClosed:!0,displayFlashMessages:Object.keys(this.$page.flash)}},methods:{toggleNav:function(){this.isNavClosed=!this.isNavClosed}},computed:{isNavOpened:function(){return!this.isNavClosed},path:function(){return window.location.pathname}}},s=(n("vGEg"),n("KHd+")),r=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-white page"},[n("nav",{staticClass:"w3-sidebar w3-bar-block sidebar w3-green w3-border-right",class:{"sidebar--closed":t.isNavClosed}},[n("button",{staticClass:"w3-xxlarge w3-padding w3-button w3-hover-green",class:{"w3-display-topright":t.isNavOpened},on:{click:t.toggleNav}},[t.isNavClosed?n("i",{staticClass:"fa fa-bars"}):t._e(),t._v(" "),t.isNavOpened?n("i",{staticClass:"fa fa-times"}):t._e()]),t._v(" "),t.isNavOpened?n("div",{staticClass:"w3-container",staticStyle:{"margin-top":"10vh"}},[t._v("\n      Registrato come: "),n("br"),t._v("\n      "+t._s(t.$page.user.name)+" "),n("br"),t._v("\n      "+t._s(t.$page.user.email)+" "),n("br"),t._v(" "),n("br"),t._v(" "),n("inertia-link",{staticClass:"w3-button w3-light-gray",attrs:{href:"/logout",method:"post"}},[t._v("Logout")])],1):t._e(),t._v(" "),n("div",{staticStyle:{"margin-top":"20vh"}},[n("inertia-link",{staticClass:"w3-bar-item w3-button w3-hover-gray",class:{"w3-light-gray":"/home"===t.path||"/"===t.path},attrs:{href:"/home"}},[n("i",{staticClass:"fa fa-home w3-xxlarge"}),t._v(" "),t.isNavOpened?n("span",{staticClass:"w3-large"},[t._v("Acasa")]):t._e()]),t._v(" "),n("inertia-link",{staticClass:"w3-bar-item w3-button w3-hover-gray",class:{"w3-light-gray":"/users"===t.path},attrs:{href:"/users"}},[n("i",{staticClass:"fa fa-users w3-xxlarge"}),t._v(" "),t.isNavOpened?n("span",{staticClass:"w3-large"},[t._v("Amministratori")]):t._e()]),t._v(" "),n("inertia-link",{staticClass:"w3-bar-item w3-button w3-hover-gray w3-display-container",class:{"w3-light-gray":"/standard-requests"===t.path},attrs:{href:"/standard-requests"}},[n("i",{staticClass:"fa fa-upload w3-xxlarge"}),t._v(" "),t.isNavOpened?n("span",{staticClass:"w3-large"},[t._v("Richeste")]):t._e(),t._v(" "),t.$page.user.unreadStandardRequests.length>0?n("span",{staticClass:"w3-badge w3-red",class:{"w3-display-topright w3-small":t.isNavClosed},staticStyle:{margin:"3px"}},[t._v("\n            "+t._s(t.$page.user.unreadStandardRequests.length)+"\n        ")]):t._e()]),t._v(" "),n("inertia-link",{staticClass:"w3-bar-item w3-button w3-hover-gray w3-display-container",class:{"w3-light-gray":"/express-requests"===t.path},attrs:{href:"/express-requests"}},[n("i",{staticClass:"fa fa-truck w3-xxlarge"}),t._v(" "),t.isNavOpened?n("span",{staticClass:"w3-large"},[t._v("Richeste Express")]):t._e(),t._v(" "),t.$page.user.unreadExpressRequests.length>0?n("span",{staticClass:"w3-badge w3-red",class:{"w3-display-topright w3-small":t.isNavClosed},staticStyle:{margin:"3px"}},[t._v("\n            "+t._s(t.$page.user.unreadExpressRequests.length)+"\n        ")]):t._e()]),t._v(" "),n("inertia-link",{staticClass:"w3-bar-item w3-button w3-hover-gray",class:{"w3-light-gray":"/push-notifications/create"===t.path},attrs:{href:"/push-notifications/create"}},[n("i",{staticClass:"fa fa-bell w3-xxlarge"}),t._v(" "),t.isNavOpened?n("span",{staticClass:"w3-large"},[t._v("Notifiche Push")]):t._e()])],1)]),t._v(" "),n("div",{style:{marginLeft:t.isNavClosed?"70px":"20%"}},[t._m(0),t._v(" "),t._l(t.$page.flash,function(e,a){return n("div",{key:a},[e&&-1!==t.displayFlashMessages.indexOf(a)?n("div",{staticClass:"w3-card-4 flash-message w3-border-blue w3-leftbar w3-padding w3-display-container"},[t._v("\n              "+t._s(e)+"\n              "),n("span",{staticClass:"w3-button w3-display-right",on:{click:function(e){t.displayFlashMessages=t.displayFlashMessages.filter(function(t){return t!==a})}}},[t._v("×")])]):t._e()])}),t._v(" "),n("div",{staticClass:"w3-container"},[t._t("default")],2)],2)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",{staticClass:"w3-green w3-padding"},[e("span",{staticStyle:{"font-family":"Times New Roman"}},[this._v("Lemart & Lemart")]),this._v(" Express Control Panel\n      ")])])}],!1,null,null,null);e.a=r.exports},"5xnn":function(t,e,n){var a=n("VduA");"string"==typeof a&&(a=[[t.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,s);a.locals&&(t.exports=a.locals)},"9tPo":function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,a=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var s,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(s=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:a+r.replace(/^\.\//,""),"url("+JSON.stringify(s)+")")})}},AmZU:function(t,e,n){"use strict";var a=n("eXy0");n.n(a).a},I1BE:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var s=(i=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),r=a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"});return[n].concat(r).concat([s]).join("\n")}var i;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(a[r]=!0)}for(s=0;s<t.length;s++){var i=t[s];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},"KHd+":function(t,e,n){"use strict";function a(t,e,n,a,s,r,i,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):s&&(l=o?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}n.d(e,"a",function(){return a})},VduA:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n.flash-message {\n      width: 90%;\n      margin-left: 3%;\n}\nbody {\n  background-color: lightgray;\n  margin: 8px;\n}\n.page {\n  min-height: calc(100vh - 20px);\n}\n.sidebar {\n  width: 20%;\n}\n.sidebar--closed {\n  width: 70px;\n  text-align: center;\n}\n",""])},a5CU:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\ntd[data-v-4909d12c]:first-child {\n  width: 15em;\n}\n.row[data-v-4909d12c] {\n  display: flex;\n  margin-top: 5%;\n}\n.center-content[data-v-4909d12c] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.img-card[data-v-4909d12c] {\n  width: 100px;\n}\n.img-card img[data-v-4909d12c] {\n  width: 100%;\n}\n",""])},"aET+":function(t,e,n){var a,s,r={},i=(a=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===s&&(s=a.apply(this,arguments)),s}),o=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var a=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(t){a=null}e[t]=a}return e[t]}}(),l=null,c=0,d=[],u=n("9tPo");function f(t,e){for(var n=0;n<t.length;n++){var a=t[n],s=r[a.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](a.parts[i]);for(;i<a.parts.length;i++)s.parts.push(m(a.parts[i],e))}else{var o=[];for(i=0;i<a.parts.length;i++)o.push(m(a.parts[i],e));r[a.id]={id:a.id,refs:1,parts:o}}}}function p(t,e){for(var n=[],a={},s=0;s<t.length;s++){var r=t[s],i=e.base?r[0]+e.base:r[0],o={css:r[1],media:r[2],sourceMap:r[3]};a[i]?a[i].parts.push(o):n.push(a[i]={id:i,parts:[o]})}return n}function v(t,e){var n=o(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=d[d.length-1];if("top"===t.insertAt)a?a.nextSibling?n.insertBefore(e,a.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),d.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var s=o(t.insertAt.before,n);n.insertBefore(e,s)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var a=function(){0;return n.nc}();a&&(t.attrs.nonce=a)}return _(e,t.attrs),v(t,e),e}function _(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function m(t,e){var n,a,s,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var i=c++;n=l||(l=g(e)),a=y.bind(null,n,i,!1),s=y.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",_(e,t.attrs),v(t,e),e}(e),a=function(t,e,n){var a=n.css,s=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&s;(e.convertToAbsoluteUrls||r)&&(a=u(a));s&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");var i=new Blob([a],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}.bind(null,n,e),s=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),a=function(t,e){var n=e.css,a=e.media;a&&t.setAttribute("media",a);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),s=function(){h(n)});return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else s()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return f(n,e),function(t){for(var a=[],s=0;s<n.length;s++){var i=n[s];(o=r[i.id]).refs--,a.push(o)}t&&f(p(t,e),e);for(s=0;s<a.length;s++){var o;if(0===(o=a[s]).refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete r[o.id]}}}};var w,b=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function y(t,e,n,a){var s=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=b(e,s);else{var r=document.createTextNode(s),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(r,i[e]):t.appendChild(r)}}},eXy0:function(t,e,n){var a=n("a5CU");"string"==typeof a&&(a=[[t.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,s);a.locals&&(t.exports=a.locals)},qvV7:function(t,e,n){"use strict";n.r(e);var a={components:{Layout:n("+SZM").a},data:function(){return{showModal:!1,modalImg:!1}},methods:{showImage:function(t){this.showModal=!0,this.modalImg=t}}},s=(n("AmZU"),n("KHd+")),r=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("h2",{staticClass:"w3-border-bottom"},[t._v("Richesta di intervento Express per "+t._s(t.$page.request.company_name))]),t._v(" "),n("table",{staticClass:"w3-table"},[n("tr",[n("td",[t._v("Nome dell'azienda")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.company_name))])]),t._v(" "),n("tr",[n("td",[t._v("E-mail")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.email))])]),t._v(" "),n("tr",[n("td",[t._v("Numero di cellulare")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.phone))])]),t._v(" "),n("tr",[n("td",[t._v("Indirizzo")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.address))])]),t._v(" "),n("tr",[n("td",[t._v("Marca, modello e tipo")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.model))])]),t._v(" "),n("tr",[n("td",[t._v("Peso kg")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.weight))])]),t._v(" "),n("tr",[n("td",[t._v("Numero pianali totale")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.total))])]),t._v(" "),n("tr",[n("td",[t._v("Persona di riferimento")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.person))])]),t._v(" "),n("tr",[n("td",[t._v("Guasto dichiarato")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.damage))])]),t._v(" "),n("tr",[n("td",[t._v("Mandato il")]),t._v(" "),n("td",[t._v(t._s(t.$page.request.created_at))])])]),t._v(" "),n("div",{staticClass:"row"},t._l(t.$page.images,function(e,a){return n("div",{key:e.id,staticClass:"w3-card-4 img-card w3-border w3-round",on:{click:function(){t.showModal=!0,t.modalImg=a}}},[n("img",{staticClass:"w3-image",attrs:{src:"/storage/"+e.filename}})])}),0),t._v(" "),t.showModal?n("div",{staticClass:"w3-modal",staticStyle:{display:"block"}},[n("div",{staticClass:"w3-modal-content"},[n("div",{staticClass:"w3-container center-content"},[n("span",{staticClass:"w3-button w3-display-topright w3-green",on:{click:function(){return t.showModal=!1}}},[t._v("×")]),t._v(" "),n("img",{staticClass:"w3-image w3-margin-bottom",attrs:{src:"/storage/"+t.$page.images[t.modalImg].filename}})])])]):t._e()])},[],!1,null,"4909d12c",null);e.default=r.exports},vGEg:function(t,e,n){"use strict";var a=n("5xnn");n.n(a).a}}]);