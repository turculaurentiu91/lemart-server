(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/I0Q":function(t,e,s){"use strict";var i={computed:{path:function(){return window.location.pathname}}},r=(s("MmCx"),s("KHd+")),a=Object(r.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w3-bar w3-border"},[e("inertia-link",{staticClass:"w3-bar-item w3-button w3-mobile",class:{"w3-gray":"/easypress"===this.path},attrs:{href:"/easypress"}},[this._v("\n        Preventivi\n    ")]),this._v(" "),e("inertia-link",{staticClass:"w3-bar-item w3-button w3-mobile",class:{"w3-gray":"/easypress-price-rules"===this.path},attrs:{href:"/easypress-price-rules"}},[this._v("\n        Regole Dei Prezzi\n    ")])],1)},[],!1,null,"5a45fb82",null);e.a=a.exports},"5d+e":function(t,e,s){"use strict";var i={props:["title"]},r=(s("Gt+K"),s("KHd+")),a=Object(r.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w3-modal",staticStyle:{display:"block"}},[s("div",{staticClass:"w3-modal-content w3-animate-opacity"},[s("div",[s("span",{staticClass:"w3-button w3-display-topright",on:{click:function(e){return t.$emit("confirm",!1)}}},[t._v("×")]),t._v(" "),s("h2",{staticClass:"w3-green w3-container"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"w3-container min-height-200"},[t._t("default")],2),t._v(" "),s("div",{staticClass:"w3-bar w3-margin-top w3-display-bottom"},[s("button",{staticClass:"w3-button w3-bar-item w3-text-red w3-light-gray",staticStyle:{width:"50%"},on:{click:function(e){return t.$emit("confirm",!1)}}},[t._v("No")]),t._v(" "),s("button",{staticClass:"w3-button w3-bar-item w3-text-green w3-light-gray",staticStyle:{width:"50%"},on:{click:function(e){return t.$emit("confirm",!0)}}},[t._v("Si")])])])])])},[],!1,null,null,null);e.a=a.exports},"Gt+K":function(t,e,s){"use strict";var i=s("I+dn");s.n(i).a},"I+dn":function(t,e,s){var i=s("rqog");"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(i,r);i.locals&&(t.exports=i.locals)},JIt6:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".w3-button[data-v-5a45fb82] {\n  width: 50%;\n}",""])},MmCx:function(t,e,s){"use strict";var i=s("bgNI");s.n(i).a},ZsND:function(t,e,s){"use strict";s.r(e);var i=s("+SZM"),r=s("5d+e"),a=s("/I0Q");function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var l={components:{layout:i.a,"confirmation-dialog":r.a,"easypress-nav":a.a},methods:{setupRuleForDeletion:function(t){this.rulePendingDeletion=function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},i=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),i.forEach(function(e){n(t,e,s[e])})}return t}({},t)},handleConfirmationSubmit:function(t){t&&this.$inertia.delete("/easypress-price-rules/".concat(this.rulePendingDeletion.id)),this.rulePendingDeletion=null}},data:function(){return{rulePendingDeletion:null}}},o=s("KHd+"),c=Object(o.a)(l,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("layout",[s("easypress-nav"),t._v(" "),s("h2",{staticClass:"w3-border-bottom"},[t._v("Regole dei prezzi Easypress")]),t._v(" "),t.$page.easypressPriceRules.data.length>0?s("div",[s("div",{staticClass:"w3-bar w3-margin"},[t._l(t.$page.easypressPriceRules.last_page,function(e){return s("inertia-link",{key:e,staticClass:"w3-button",class:{"w3-green":t.$page.easypressPriceRules.current_page===e},attrs:{href:"/easypress-price-rules?page="+e}},[t._v(t._s(e))])}),t._v(" "),s("inertia-link",{staticClass:"w3-button w3-green w3-margin-left",attrs:{href:"/easypress-price-rules/create"}},[s("i",{staticClass:"fa fa-plus"}),t._v(" Aggiungi Nuovo")])],2),t._v(" "),s("div",{staticClass:"w3-responsive"},[s("table",{staticClass:"w3-table-all w3-hoverable w3-margin-top"},[s("thead",[s("tr",[s("th",[t._v("ID")]),t._v(" "),s("th",[t._v("Da")]),t._v(" "),s("th",[t._v("A")]),t._v(" "),s("th",[t._v("Prezzo Easypress")]),t._v(" "),s("th",[t._v("Prezzo Easypress 2")]),t._v(" "),s("th",[t._v("Prezzo Easypress+")]),t._v(" "),s("th"),t._v(" "),s("th"),t._v(" "),s("th")])]),t._v(" "),s("tbody",t._l(t.$page.easypressPriceRules.data,function(e){return s("tr",{key:e.id,staticClass:"pointer-cursor"},[s("td",[t._v(t._s(e.id))]),t._v(" "),s("td",[t._v(t._s(e.from))]),t._v(" "),s("td",[t._v(t._s(e.to))]),t._v(" "),s("td",[t._v(t._s(Number(e.price_one).toFixed(2))+" €")]),t._v(" "),s("td",[t._v(t._s(Number(e.price_two).toFixed(2))+" €")]),t._v(" "),s("td",[t._v(t._s(Number(e.price_plus).toFixed(2))+" €")]),t._v(" "),s("td",[s("inertia-link",{staticClass:"w3-button w3-text-blue",attrs:{href:"/easypress-price-rules/"+e.id}},[s("i",{staticClass:"fa fa-eye w3-xlarge"})])],1),t._v(" "),s("td",[s("inertia-link",{staticClass:"w3-button w3-text-green",attrs:{href:"/easypress-price-rules/"+e.id+"/edit"}},[s("i",{staticClass:"fa fa-edit w3-xlarge"})])],1),t._v(" "),s("td",[s("button",{staticClass:"w3-button w3-text-red",on:{click:function(s){return s.preventDefault(),t.setupRuleForDeletion(e)}}},[s("i",{staticClass:"fa fa-times w3-xlarge"})])])])}),0)])]),t._v(" "),s("div",{staticClass:"w3-bar w3-margin"},t._l(t.$page.easypressPriceRules.last_page,function(e){return s("inertia-link",{key:e,staticClass:"w3-button",class:{"w3-green":t.$page.easypressPriceRules.current_page===e},attrs:{href:"/easypress-price-rules?page="+e}},[t._v(t._s(e))])}),1),t._v(" "),t.rulePendingDeletion?s("confirmation-dialog",{attrs:{title:"Cancellare Preventivo Easypress"},on:{confirm:t.handleConfirmationSubmit}},[t._v("\n            Sei sicuro di voler eliminare questa regola? "),s("br"),t._v("\n            Da "+t._s(t.rulePendingDeletion.from)+" a "+t._s(t.rulePendingDeletion.to)+":\n            "+t._s(t.rulePendingDeletion.price)+" € / Messe / Appartamento "),s("br"),t._v("\n            Questa azione è irreversibile.\n        ")]):t._e()],1):s("div",[s("h3",[t._v("Nessun preventivo trovato.")]),t._v(" "),s("inertia-link",{staticClass:"w3-button w3-green w3-margin-left",attrs:{href:"/easypress-price-rules/create"}},[s("i",{staticClass:"fa fa-plus"}),t._v(" Aggiungi Nuovo\n        ")])],1)],1)},[],!1,null,null,null);e.default=c.exports},bgNI:function(t,e,s){var i=s("JIt6");"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(i,r);i.locals&&(t.exports=i.locals)},rqog:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.min-height-200 {\n    min-height: 200px;\n}\n",""])}}]);