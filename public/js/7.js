(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6b0b":function(e,t,n){"use strict";n.r(t);var s=n("+SZM"),r=n("5d+e");function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={components:{Layout:s.a,ConfirmationDialog:r.a},data:function(){return{requestPendingDeletion:null}},methods:{setupRequestForDeletion:function(e){this.requestPendingDeletion=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.forEach(function(t){a(e,t,n[t])})}return e}({},e)},handleConfirmationSubmit:function(e){e&&this.$inertia.delete("/express-requests/".concat(this.requestPendingDeletion.id)),this.requestPendingDeletion=null}}},o=(n("U0I+"),n("KHd+")),l=Object(o.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("h2",{staticClass:"w3-border-bottom"},[e._v("Richeste di intervento Express")]),e._v(" "),e.$page.requests.data.length<=0?n("h3",[e._v("Nessuna Richiesta Trovata")]):e._e(),e._v(" "),e.$page.requests.data.length>0?n("div",{staticClass:"w3-bar w3-margin"},e._l(e.$page.requests.last_page,function(t){return n("inertia-link",{key:t,staticClass:"w3-button",class:{"w3-green":e.$page.requests.current_page===t},attrs:{href:"/express-requests?page="+t}},[e._v(e._s(t))])}),1):e._e(),e._v(" "),n("div",{staticClass:"w3-responsive"},[e.$page.requests.data.length>0?n("table",{staticClass:"w3-table-all w3-hoverable w3-margin-top"},[n("thead",[n("tr",[n("th",[e._v("ID")]),e._v(" "),n("th",[e._v("Nome")]),e._v(" "),n("th",[e._v("Email")]),e._v(" "),n("th",[e._v("Nr. tel")]),e._v(" "),n("th",[e._v("Modello")]),e._v(" "),n("th"),e._v(" "),n("th")])]),e._v(" "),n("tbody",e._l(e.$page.requests.data,function(t){return n("tr",{key:t.id,staticClass:"pointer-cursor",class:{bold:e.$page.user.unreadExpressRequests.find(function(e){return e.id===t.id})}},[n("td",[e._v(e._s(t.id))]),e._v(" "),n("td",[e._v(e._s(t.company_name))]),e._v(" "),n("td",[e._v(e._s(t.email))]),e._v(" "),n("td",[e._v(e._s(t.phone))]),e._v(" "),n("td",[e._v(e._s(t.model))]),e._v(" "),n("td",[n("inertia-link",{staticClass:"w3-button w3-text-blue",attrs:{href:"/express-requests/"+t.id}},[n("i",{staticClass:"fa fa-eye w3-xlarge"})])],1),e._v(" "),n("td",[n("button",{staticClass:"w3-button w3-text-red",on:{click:function(n){return n.preventDefault(),e.setupRequestForDeletion(t)}}},[n("i",{staticClass:"fa fa-times w3-xlarge"})])])])}),0)]):e._e()]),e._v(" "),e.$page.requests.data.length>0?n("div",{staticClass:"w3-bar w3-margin"},e._l(e.$page.requests.last_page,function(t){return n("inertia-link",{key:t,staticClass:"w3-button",class:{"w3-green":e.$page.requests.current_page===t},attrs:{href:"/express-requests?page="+t}},[e._v(e._s(t))])}),1):e._e(),e._v(" "),e.requestPendingDeletion?n("ConfirmationDialog",{attrs:{title:"Cancellare Richiesta Express"},on:{confirm:e.handleConfirmationSubmit}},[e._v("\n      Sei sicuro di voler eliminare la richiesta da\n      "+e._s(e.requestPendingDeletion.company_name)+"? "),n("br"),e._v("\n      Questa azione è irreversibile.\n  ")]):e._e()],1)},[],!1,null,null,null);t.default=l.exports},I26X:function(e,t,n){var s=n("dLmk");"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(s,r);s.locals&&(e.exports=s.locals)},"U0I+":function(e,t,n){"use strict";var s=n("I26X");n.n(s).a},dLmk:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"\n.pointer-cursor {\n  cursor: pointer;\n}\n.bold {\n    font-weight: bold;\n}\n",""])}}]);