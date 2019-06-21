(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/EditUser.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/EditUser.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      email: this.$page.userToEdit.email,
      name: this.$page.userToEdit.name,
      password: '',
      repeatPassword: '',
      loading: false
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      var data = {
        email: this.email,
        name: this.name,
        password: this.password,
        repeatPassword: this.repeatPassword
      };
      this.loading = true;
      this.$inertia.put("/users/".concat(this.$page.userToEdit.id), data, {
        preseveState: true
      }).then(function () {
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/EditUser.vue?vue&type=template&id=dd4405c4&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/EditUser.vue?vue&type=template&id=dd4405c4& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("Layout", [
    _c(
      "form",
      {
        staticStyle: { "max-width": "800px" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submit($event)
          }
        }
      },
      [
        _c("div", { staticClass: "w3-margin-bottom" }, [
          _c(
            "label",
            {
              staticClass: "w3-text-green",
              class: { "w3-text-red": _vm.$page.errors.email }
            },
            [_vm._v("E-mail")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.email,
                expression: "email"
              }
            ],
            staticClass: "w3-input w3-border w3-round",
            class: { "w3-border-red": _vm.$page.errors.email },
            attrs: { type: "email", name: "email" },
            domProps: { value: _vm.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.email = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _vm.$page.errors.email
            ? _c(
                "div",
                _vm._l(_vm.$page.errors.email, function(error, index) {
                  return _c(
                    "p",
                    { key: index, staticClass: "w3-tiny w3-text-red" },
                    [_c("i", [_vm._v("*" + _vm._s(error))])]
                  )
                }),
                0
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w3-margin-bottom" }, [
          _c(
            "label",
            {
              staticClass: "w3-text-green",
              class: { "w3-text-red": _vm.$page.errors.name }
            },
            [_vm._v("Nome")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.name,
                expression: "name"
              }
            ],
            staticClass: "w3-input w3-border w3-round",
            class: { "w3-border-red": _vm.$page.errors.name },
            attrs: { type: "text", name: "name", minlength: "2" },
            domProps: { value: _vm.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.name = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _vm.$page.errors.name
            ? _c(
                "div",
                _vm._l(_vm.$page.errors.name, function(error, index) {
                  return _c(
                    "p",
                    { key: index, staticClass: "w3-tiny w3-text-red" },
                    [_c("i", [_vm._v("*" + _vm._s(error))])]
                  )
                }),
                0
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w3-margin-bottom" }, [
          _c(
            "label",
            {
              staticClass: "w3-text-green",
              class: { "w3-text-red": _vm.$page.errors.password }
            },
            [_vm._v("Password")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.password,
                expression: "password"
              }
            ],
            staticClass: "w3-input w3-border w3-round",
            class: { "w3-border-red": _vm.$page.errors.password },
            attrs: { type: "password", name: "password" },
            domProps: { value: _vm.password },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.password = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _vm.$page.errors.password
            ? _c(
                "div",
                _vm._l(_vm.$page.errors.password, function(error, index) {
                  return _c(
                    "p",
                    { key: index, staticClass: "w3-tiny w3-text-red" },
                    [_c("i", [_vm._v("*" + _vm._s(error))])]
                  )
                }),
                0
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w3-margin-bottom" }, [
          _c(
            "label",
            {
              staticClass: "w3-text-green",
              class: { "w3-text-red": _vm.$page.errors.repeatPassword }
            },
            [_vm._v("Ripeti la Password")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.repeatPassword,
                expression: "repeatPassword"
              }
            ],
            staticClass: "w3-input w3-border w3-round",
            class: { "w3-border-red": _vm.$page.errors.repeatPassword },
            attrs: { type: "password", name: "repeatPassword" },
            domProps: { value: _vm.repeatPassword },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.repeatPassword = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _vm.$page.errors.repeatPassword
            ? _c(
                "div",
                _vm._l(_vm.$page.errors.repeatPassword, function(error, index) {
                  return _c(
                    "p",
                    { key: index, staticClass: "w3-tiny w3-text-red" },
                    [_c("i", [_vm._v("*" + _vm._s(error))])]
                  )
                }),
                0
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "w3-button w3-green w3-bar w3-round",
          class: { "w3-disabled": _vm.loading },
          attrs: { type: "submit", value: "Modifica Amministratore" }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/EditUser.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/EditUser.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditUser_vue_vue_type_template_id_dd4405c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditUser.vue?vue&type=template&id=dd4405c4& */ "./resources/js/Pages/EditUser.vue?vue&type=template&id=dd4405c4&");
/* harmony import */ var _EditUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditUser.vue?vue&type=script&lang=js& */ "./resources/js/Pages/EditUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditUser_vue_vue_type_template_id_dd4405c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditUser_vue_vue_type_template_id_dd4405c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/EditUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/EditUser.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/EditUser.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EditUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/EditUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/EditUser.vue?vue&type=template&id=dd4405c4&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/EditUser.vue?vue&type=template&id=dd4405c4& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_template_id_dd4405c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EditUser.vue?vue&type=template&id=dd4405c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/EditUser.vue?vue&type=template&id=dd4405c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_template_id_dd4405c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_template_id_dd4405c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);