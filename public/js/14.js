(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"c1+1":function(e,a,s){"use strict";s.r(a);var t={components:{Layout:s("+SZM").a},data:function(){return{email:"",name:"",password:"",repeatPassword:"",loading:!1}},methods:{submit:function(){var e=this,a={email:this.email,name:this.name,password:this.password,repeatPassword:this.repeatPassword};this.loading=!0,this.$inertia.post("/users",a,{preseveState:!0}).then(function(){e.loading=!1})}}},r=s("KHd+"),o=Object(r.a)(t,function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("Layout",[s("form",{staticStyle:{"max-width":"800px"},on:{submit:function(a){return a.preventDefault(),e.submit(a)}}},[s("div",{staticClass:"w3-margin-bottom"},[s("label",{staticClass:"w3-text-green",class:{"w3-text-red":e.$page.errors.email}},[e._v("E-mail")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"w3-input w3-border w3-round",class:{"w3-border-red":e.$page.errors.email},attrs:{type:"email",name:"email"},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}}),e._v(" "),e.$page.errors.email?s("div",e._l(e.$page.errors.email,function(a,t){return s("p",{key:t,staticClass:"w3-tiny w3-text-red"},[s("i",[e._v("*"+e._s(a))])])}),0):e._e()]),e._v(" "),s("div",{staticClass:"w3-margin-bottom"},[s("label",{staticClass:"w3-text-green",class:{"w3-text-red":e.$page.errors.name}},[e._v("Nome")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"w3-input w3-border w3-round",class:{"w3-border-red":e.$page.errors.name},attrs:{type:"text",name:"name",minlength:"2"},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}}),e._v(" "),e.$page.errors.name?s("div",e._l(e.$page.errors.name,function(a,t){return s("p",{key:t,staticClass:"w3-tiny w3-text-red"},[s("i",[e._v("*"+e._s(a))])])}),0):e._e()]),e._v(" "),s("div",{staticClass:"w3-margin-bottom"},[s("label",{staticClass:"w3-text-green",class:{"w3-text-red":e.$page.errors.password}},[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"w3-input w3-border w3-round",class:{"w3-border-red":e.$page.errors.password},attrs:{type:"password",name:"password",minlength:"6"},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}}),e._v(" "),e.$page.errors.password?s("div",e._l(e.$page.errors.password,function(a,t){return s("p",{key:t,staticClass:"w3-tiny w3-text-red"},[s("i",[e._v("*"+e._s(a))])])}),0):e._e()]),e._v(" "),s("div",{staticClass:"w3-margin-bottom"},[s("label",{staticClass:"w3-text-green",class:{"w3-text-red":e.$page.errors.repeatPassword}},[e._v("Ripeti la Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.repeatPassword,expression:"repeatPassword"}],staticClass:"w3-input w3-border w3-round",class:{"w3-border-red":e.$page.errors.repeatPassword},attrs:{type:"password",name:"repeatPassword",minlength:"6"},domProps:{value:e.repeatPassword},on:{input:function(a){a.target.composing||(e.repeatPassword=a.target.value)}}}),e._v(" "),e.$page.errors.repeatPassword?s("div",e._l(e.$page.errors.repeatPassword,function(a,t){return s("p",{key:t,staticClass:"w3-tiny w3-text-red"},[s("i",[e._v("*"+e._s(a))])])}),0):e._e()]),e._v(" "),s("input",{staticClass:"w3-button w3-green w3-bar w3-round",class:{"w3-disabled":e.loading},attrs:{type:"submit",value:"Crea Nuovo Amministratore"}})])])},[],!1,null,null,null);a.default=o.exports}}]);