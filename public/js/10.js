(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+uKa":function(t,e,n){"use strict";n.r(e);var i=n("+SZM"),a=n("5d+e");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={components:{Layout:i.a,ConfirmationDialog:a.a},computed:{window:function(){return document.window}},data:function(){return{showAddForm:!1,userPendingDeletion:null}},methods:{toggleAddForm:function(){this.showAddForm=!this.showAddForm},setupUserForDeletion:function(t){this.userPendingDeletion=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){r(t,e,n[e])})}return t}({},t)},handleConfirmationSubmit:function(t){t&&this.$inertia.delete("/users/".concat(this.userPendingDeletion.id)),this.userPendingDeletion=null}}},o=n("KHd+"),l=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("h2",{staticClass:"w3-border-bottom"},[t._v("Amministratori")]),t._v(" "),n("div",{staticClass:"w3-bar w3-margin"},[t._l(t.$page.users.last_page,function(e){return n("inertia-link",{key:e,staticClass:"w3-button",class:{"w3-green":t.$page.users.current_page===e},attrs:{href:"/users?page="+e}},[t._v(t._s(e))])}),t._v(" "),n("inertia-link",{staticClass:"w3-button w3-green w3-margin-left",attrs:{href:"/users/create"}},[n("i",{staticClass:"fa fa-plus"}),t._v(" Aggiungi Nuovo")])],2),t._v(" "),n("table",{staticClass:"w3-table-all w3-hoverable w3-margin-top"},[n("thead",[n("tr",[n("th",[t._v("ID")]),t._v(" "),n("th",[t._v("Nome")]),t._v(" "),n("th",[t._v("Email")]),t._v(" "),n("th",[t._v("Creato il")]),t._v(" "),n("th",[t._v("Modificato il")]),t._v(" "),n("th",[t._v("Modifica")]),t._v(" "),n("th",[t._v("Cancella")])])]),t._v(" "),n("tbody",t._l(t.$page.users.data,function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.email))]),t._v(" "),n("td",[t._v(t._s(e.created_at))]),t._v(" "),n("td",[t._v(t._s(e.updated_at))]),t._v(" "),n("td",[n("inertia-link",{staticClass:"w3-button w3-text-blue",attrs:{href:"/users/edit/"+e.id}},[n("i",{staticClass:"fa fa-edit w3-xlarge"})])],1),t._v(" "),n("td",[n("button",{staticClass:"w3-button w3-text-red",attrs:{method:"delete"},on:{click:function(n){return n.preventDefault(),t.setupUserForDeletion(e)}}},[n("i",{staticClass:"fa fa-times w3-xlarge"})])])])}),0)]),t._v(" "),n("div",{staticClass:"w3-bar w3-margin"},t._l(t.$page.users.last_page,function(e){return n("inertia-link",{key:e,staticClass:"w3-button",class:{"w3-green":t.$page.users.current_page===e},attrs:{href:"/users?page="+e}},[t._v(t._s(e))])}),1),t._v(" "),t.userPendingDeletion?n("ConfirmationDialog",{attrs:{title:"Cancellare Utente"},on:{confirm:t.handleConfirmationSubmit}},[t._v("\n      Sei sicuro di voler eliminare l'utente "+t._s(t.userPendingDeletion.email)+"? "),n("br"),t._v("\n      Questa azione è irreversibile.\n  ")]):t._e()],1)},[],!1,null,null,null);e.default=l.exports}}]);