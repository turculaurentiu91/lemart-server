(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Users.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    window: function window() {
      return document.window;
    }
  },
  data: function data() {
    return {
      showAddForm: false
    };
  },
  methods: {
    toggleAddForm: function toggleAddForm() {
      this.showAddForm = !this.showAddForm;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users.vue?vue&type=template&id=7bbfca2f&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Users.vue?vue&type=template&id=7bbfca2f& ***!
  \***************************************************************************************************************************************************************************************************/
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
    _c("h2", { staticClass: "w3-border-bottom" }, [_vm._v("Amministratori")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "w3-bar w3-margin" },
      [
        _vm._l(_vm.$page.users.last_page, function(n) {
          return _c(
            "inertia-link",
            {
              key: n,
              staticClass: "w3-button",
              class: { "w3-green": _vm.$page.users.current_page === n },
              attrs: { href: "/users?page=" + n }
            },
            [_vm._v(_vm._s(n))]
          )
        }),
        _vm._v(" "),
        _c(
          "inertia-link",
          {
            staticClass: "w3-button w3-green w3-margin-left",
            attrs: { href: "/users/create" }
          },
          [_c("i", { staticClass: "fa fa-plus" }), _vm._v(" Aggiungi Nuovo")]
        )
      ],
      2
    ),
    _vm._v(" "),
    _c("table", { staticClass: "w3-table-all w3-hoverable w3-margin-top" }, [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("ID")]),
          _vm._v(" "),
          _c("th", [_vm._v("Nome")]),
          _vm._v(" "),
          _c("th", [_vm._v("Email")]),
          _vm._v(" "),
          _c("th", [_vm._v("Creato il")]),
          _vm._v(" "),
          _c("th", [_vm._v("Modificato il")]),
          _vm._v(" "),
          _c("th", [_vm._v("Modifica")]),
          _vm._v(" "),
          _c("th", [_vm._v("Cancella")])
        ])
      ]),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.$page.users.data, function(user) {
          return _c("tr", { key: user.id }, [
            _c("td", [_vm._v(_vm._s(user.id))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.email))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.created_at))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.updated_at))]),
            _vm._v(" "),
            _c(
              "td",
              [
                _c(
                  "inertia-link",
                  {
                    staticClass: "w3-button w3-text-blue",
                    attrs: { href: "/users/edit/" + user.id }
                  },
                  [_c("i", { staticClass: "fa fa-edit w3-xlarge" })]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "td",
              [
                _c(
                  "inertia-link",
                  {
                    staticClass: "w3-button w3-text-red",
                    attrs: { href: "/users/" + user.id, method: "delete" }
                  },
                  [_c("i", { staticClass: "fa fa-times w3-xlarge" })]
                )
              ],
              1
            )
          ])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "w3-bar w3-margin" },
      _vm._l(_vm.$page.users.last_page, function(n) {
        return _c(
          "inertia-link",
          {
            key: n,
            staticClass: "w3-button",
            class: { "w3-green": _vm.$page.users.current_page === n },
            attrs: { href: "/users?page=" + n }
          },
          [_vm._v(_vm._s(n))]
        )
      }),
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Users.vue":
/*!**************************************!*\
  !*** ./resources/js/Pages/Users.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_7bbfca2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=7bbfca2f& */ "./resources/js/Pages/Users.vue?vue&type=template&id=7bbfca2f&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_7bbfca2f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_7bbfca2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Users.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Users.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Users.vue?vue&type=template&id=7bbfca2f&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Users.vue?vue&type=template&id=7bbfca2f& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_7bbfca2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=7bbfca2f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users.vue?vue&type=template&id=7bbfca2f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_7bbfca2f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_7bbfca2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);