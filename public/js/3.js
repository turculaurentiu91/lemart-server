(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+SZM":function(e,t,s){"use strict";var a={data:function(){return{isNavClosed:!0,displayFlashMessages:Object.keys(this.$page.flash)}},methods:{toggleNav:function(){this.isNavClosed=!this.isNavClosed}},computed:{isNavOpened:function(){return!this.isNavClosed},path:function(){return window.location.pathname}}},r=(s("vGEg"),s("KHd+")),n=Object(r.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"w3-white page"},[s("nav",{staticClass:"w3-sidebar w3-bar-block sidebar w3-green w3-border-right",class:{"sidebar--closed":e.isNavClosed}},[s("button",{staticClass:"w3-xxlarge w3-padding w3-button w3-hover-green",class:{"w3-display-topright":e.isNavOpened},on:{click:e.toggleNav}},[e.isNavClosed?s("i",{staticClass:"fa fa-bars"}):e._e(),e._v(" "),e.isNavOpened?s("i",{staticClass:"fa fa-times"}):e._e()]),e._v(" "),e.isNavOpened?s("div",{staticClass:"w3-container",staticStyle:{"margin-top":"10vh"}},[e._v("\n      Registrato come: "),s("br"),e._v("\n      "+e._s(e.$page.user.name)+" "),s("br"),e._v("\n      "+e._s(e.$page.user.email)+" "),s("br"),e._v(" "),s("br"),e._v(" "),s("inertia-link",{staticClass:"w3-button w3-light-gray",attrs:{href:"/logout",method:"post"}},[e._v("Logout")])],1):e._e(),e._v(" "),s("div",{staticStyle:{"margin-top":"20vh"}},[s("inertia-link",{staticClass:"w3-bar-item w3-button w3-hover-gray",class:{"w3-light-gray":"/home"===e.path||"/"===e.path},attrs:{href:"/home"}},[s("i",{staticClass:"fa fa-home w3-xxlarge"}),e._v(" "),e.isNavOpened?s("span",{staticClass:"w3-large"},[e._v("Acasa")]):e._e()]),e._v(" "),s("inertia-link",{staticClass:"w3-bar-item w3-button w3-hover-gray",class:{"w3-light-gray":"/users"===e.path},attrs:{href:"/users"}},[s("i",{staticClass:"fa fa-users w3-xxlarge"}),e._v(" "),e.isNavOpened?s("span",{staticClass:"w3-large"},[e._v("Amministratori")]):e._e()]),e._v(" "),s("inertia-link",{staticClass:"w3-bar-item w3-button w3-hover-gray w3-display-container",class:{"w3-light-gray":"/standard-requests"===e.path},attrs:{href:"/standard-requests"}},[s("i",{staticClass:"fa fa-upload w3-xxlarge"}),e._v(" "),e.isNavOpened?s("span",{staticClass:"w3-large"},[e._v("Richeste")]):e._e(),e._v(" "),e.$page.user.unreadStandardRequests.length>0?s("span",{staticClass:"w3-badge w3-red",class:{"w3-display-topright w3-small":e.isNavClosed},staticStyle:{margin:"3px"}},[e._v("\n            "+e._s(e.$page.user.unreadStandardRequests.length)+"\n        ")]):e._e()]),e._v(" "),s("inertia-link",{staticClass:"w3-bar-item w3-button w3-hover-gray w3-display-container",class:{"w3-light-gray":"/express-requests"===e.path},attrs:{href:"/express-requests"}},[s("i",{staticClass:"fa fa-truck w3-xxlarge"}),e._v(" "),e.isNavOpened?s("span",{staticClass:"w3-large"},[e._v("Richeste Express")]):e._e(),e._v(" "),e.$page.user.unreadExpressRequests.length>0?s("span",{staticClass:"w3-badge w3-red",class:{"w3-display-topright w3-small":e.isNavClosed},staticStyle:{margin:"3px"}},[e._v("\n            "+e._s(e.$page.user.unreadExpressRequests.length)+"\n        ")]):e._e()]),e._v(" "),s("inertia-link",{staticClass:"w3-bar-item w3-button w3-hover-gray",class:{"w3-light-gray":"/push-notifications/create"===e.path},attrs:{href:"/push-notifications/create"}},[s("i",{staticClass:"fa fa-bell w3-xxlarge"}),e._v(" "),e.isNavOpened?s("span",{staticClass:"w3-large"},[e._v("Notifiche Push")]):e._e()])],1)]),e._v(" "),s("div",{style:{marginLeft:e.isNavClosed?"70px":"20%"}},[e._m(0),e._v(" "),e._l(e.$page.flash,function(t,a){return s("div",{key:a},[t&&-1!==e.displayFlashMessages.indexOf(a)?s("div",{staticClass:"w3-card-4 flash-message w3-border-blue w3-leftbar w3-padding w3-display-container"},[e._v("\n              "+e._s(t)+"\n              "),s("span",{staticClass:"w3-button w3-display-right",on:{click:function(t){e.displayFlashMessages=e.displayFlashMessages.filter(function(e){return e!==a})}}},[e._v("×")])]):e._e()])}),e._v(" "),s("div",{staticClass:"w3-container"},[e._t("default")],2)],2)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("h1",{staticClass:"w3-green w3-padding"},[t("span",{staticStyle:{"font-family":"Times New Roman"}},[this._v("Lemart & Lemart")]),this._v(" Express Control Panel\n      ")])])}],!1,null,null,null);t.a=n.exports},"5xnn":function(e,t,s){var a=s("VduA");"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,r);a.locals&&(e.exports=a.locals)},"9tPo":function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var s=t.protocol+"//"+t.host,a=s+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,n=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(n)?e:(r=0===n.indexOf("//")?n:0===n.indexOf("/")?s+n:a+n.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},I1BE:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var s=function(e,t){var s=e[1]||"",a=e[3];if(!a)return s;if(t&&"function"==typeof btoa){var r=(i=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),n=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[s].concat(n).concat([r]).join("\n")}var i;return[s].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+s+"}":s}).join("")},t.i=function(e,s){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},r=0;r<this.length;r++){var n=this[r][0];"number"==typeof n&&(a[n]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&a[i[0]]||(s&&!i[2]?i[2]=s:s&&(i[2]="("+i[2]+") and ("+s+")"),t.push(i))}},t}},"KHd+":function(e,t,s){"use strict";function a(e,t,s,a,r,n,i,o){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=s,c._compiled=!0),a&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):r&&(l=o?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}s.d(t,"a",function(){return a})},VduA:function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,"\n.flash-message {\n      width: 90%;\n      margin-left: 3%;\n}\nbody {\n  background-color: lightgray;\n  margin: 8px;\n}\n.page {\n  min-height: calc(100vh - 20px);\n}\n.sidebar {\n  width: 20%;\n}\n.sidebar--closed {\n  width: 70px;\n  text-align: center;\n}\n",""])},"aET+":function(e,t,s){var a,r,n={},i=(a=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=a.apply(this,arguments)),r}),o=function(e){var t={};return function(e,s){if("function"==typeof e)return e();if(void 0===t[e]){var a=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,s);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}}(),l=null,c=0,u=[],d=s("9tPo");function p(e,t){for(var s=0;s<e.length;s++){var a=e[s],r=n[a.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](a.parts[i]);for(;i<a.parts.length;i++)r.parts.push(g(a.parts[i],t))}else{var o=[];for(i=0;i<a.parts.length;i++)o.push(g(a.parts[i],t));n[a.id]={id:a.id,refs:1,parts:o}}}}function f(e,t){for(var s=[],a={},r=0;r<e.length;r++){var n=e[r],i=t.base?n[0]+t.base:n[0],o={css:n[1],media:n[2],sourceMap:n[3]};a[i]?a[i].parts.push(o):s.push(a[i]={id:i,parts:[o]})}return s}function v(e,t){var s=o(e.insertInto);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=u[u.length-1];if("top"===e.insertAt)a?a.nextSibling?s.insertBefore(t,a.nextSibling):s.appendChild(t):s.insertBefore(t,s.firstChild),u.push(t);else if("bottom"===e.insertAt)s.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=o(e.insertAt.before,s);s.insertBefore(t,r)}}function w(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var a=function(){0;return s.nc}();a&&(e.attrs.nonce=a)}return m(t,e.attrs),v(e,t),t}function m(e,t){Object.keys(t).forEach(function(s){e.setAttribute(s,t[s])})}function g(e,t){var s,a,r,n;if(t.transform&&e.css){if(!(n="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=n}if(t.singleton){var i=c++;s=l||(l=h(t)),a=y.bind(null,s,i,!1),r=y.bind(null,s,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(s=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),v(e,t),t}(t),a=function(e,t,s){var a=s.css,r=s.sourceMap,n=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||n)&&(a=d(a));r&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([a],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}.bind(null,s,t),r=function(){w(s),s.href&&URL.revokeObjectURL(s.href)}):(s=h(t),a=function(e,t){var s=t.css,a=t.media;a&&e.setAttribute("media",a);if(e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}.bind(null,s),r=function(){w(s)});return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var s=f(e,t);return p(s,t),function(e){for(var a=[],r=0;r<s.length;r++){var i=s[r];(o=n[i.id]).refs--,a.push(o)}e&&p(f(e,t),t);for(r=0;r<a.length;r++){var o;if(0===(o=a[r]).refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete n[o.id]}}}};var b,_=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function y(e,t,s,a){var r=s?"":a.css;if(e.styleSheet)e.styleSheet.cssText=_(t,r);else{var n=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(n,i[t]):e.appendChild(n)}}},"c1+1":function(e,t,s){"use strict";s.r(t);var a={components:{Layout:s("+SZM").a},data:function(){return{email:"",name:"",password:"",repeatPassword:"",loading:!1}},methods:{submit:function(){var e=this,t={email:this.email,name:this.name,password:this.password,repeatPassword:this.repeatPassword};this.loading=!0,this.$inertia.post("/users",t,{preseveState:!0}).then(function(){e.loading=!1})}}},r=s("KHd+"),n=Object(r.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Layout",[s("form",{staticStyle:{"max-width":"800px"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("div",{staticClass:"w3-margin-bottom"},[s("label",{staticClass:"w3-text-green",class:{"w3-text-red":e.$page.errors.email}},[e._v("E-mail")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"w3-input w3-border w3-round",class:{"w3-border-red":e.$page.errors.email},attrs:{type:"email",name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),e.$page.errors.email?s("div",e._l(e.$page.errors.email,function(t,a){return s("p",{key:a,staticClass:"w3-tiny w3-text-red"},[s("i",[e._v("*"+e._s(t))])])}),0):e._e()]),e._v(" "),s("div",{staticClass:"w3-margin-bottom"},[s("label",{staticClass:"w3-text-green",class:{"w3-text-red":e.$page.errors.name}},[e._v("Nome")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"w3-input w3-border w3-round",class:{"w3-border-red":e.$page.errors.name},attrs:{type:"text",name:"name",minlength:"2"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),e.$page.errors.name?s("div",e._l(e.$page.errors.name,function(t,a){return s("p",{key:a,staticClass:"w3-tiny w3-text-red"},[s("i",[e._v("*"+e._s(t))])])}),0):e._e()]),e._v(" "),s("div",{staticClass:"w3-margin-bottom"},[s("label",{staticClass:"w3-text-green",class:{"w3-text-red":e.$page.errors.password}},[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"w3-input w3-border w3-round",class:{"w3-border-red":e.$page.errors.password},attrs:{type:"password",name:"password",minlength:"6"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),e.$page.errors.password?s("div",e._l(e.$page.errors.password,function(t,a){return s("p",{key:a,staticClass:"w3-tiny w3-text-red"},[s("i",[e._v("*"+e._s(t))])])}),0):e._e()]),e._v(" "),s("div",{staticClass:"w3-margin-bottom"},[s("label",{staticClass:"w3-text-green",class:{"w3-text-red":e.$page.errors.repeatPassword}},[e._v("Ripeti la Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.repeatPassword,expression:"repeatPassword"}],staticClass:"w3-input w3-border w3-round",class:{"w3-border-red":e.$page.errors.repeatPassword},attrs:{type:"password",name:"repeatPassword",minlength:"6"},domProps:{value:e.repeatPassword},on:{input:function(t){t.target.composing||(e.repeatPassword=t.target.value)}}}),e._v(" "),e.$page.errors.repeatPassword?s("div",e._l(e.$page.errors.repeatPassword,function(t,a){return s("p",{key:a,staticClass:"w3-tiny w3-text-red"},[s("i",[e._v("*"+e._s(t))])])}),0):e._e()]),e._v(" "),s("input",{staticClass:"w3-button w3-green w3-bar w3-round",class:{"w3-disabled":e.loading},attrs:{type:"submit",value:"Crea Nuovo Amministratore"}})])])},[],!1,null,null,null);t.default=n.exports},vGEg:function(e,t,s){"use strict";var a=s("5xnn");s.n(a).a}}]);