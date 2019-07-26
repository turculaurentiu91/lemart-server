(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/easypress/create.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/easypress/create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      formData: {
        email: '',
        appartament_count: '',
        note: ''
      },
      loading: false
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.loading = true;
      this.$inertia.post('/easypress', this.formData, {
        preseveState: true
      }).then(function () {
        return _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/easypress/create.vue?vue&type=template&id=05cec9d3&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/easypress/create.vue?vue&type=template&id=05cec9d3& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("layout", [
    _c("h2", { staticClass: "w3-border-bottom" }, [
      _vm._v("Nuovo Preventivo Easypress")
    ]),
    _vm._v(" "),
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
            [_vm._v("\n                E-mail\n            ")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.formData.email,
                expression: "formData.email"
              }
            ],
            staticClass: "w3-input w3-border w3-round",
            class: { "w3-border-red": _vm.$page.errors.email },
            attrs: { type: "email", name: "email" },
            domProps: { value: _vm.formData.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.formData, "email", $event.target.value)
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
              class: { "w3-text-red": _vm.$page.errors.appartament_count }
            },
            [_vm._v("\n                Nr. Appartamenti\n            ")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.formData.appartament_count,
                expression: "formData.appartament_count"
              }
            ],
            staticClass: "w3-input w3-border w3-round",
            class: { "w3-border-red": _vm.$page.errors.appartament_count },
            attrs: { type: "number", name: "appartament_count" },
            domProps: { value: _vm.formData.appartament_count },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.formData, "appartament_count", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.$page.errors.appartament_count
            ? _c(
                "div",
                _vm._l(_vm.$page.errors.appartament_count, function(
                  error,
                  index
                ) {
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
          _c("label", { staticClass: "w3-text-green" }, [
            _vm._v("\n                Note\n            ")
          ]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.formData.note,
                expression: "formData.note"
              }
            ],
            staticClass: "w3-input w3-border w3-round",
            attrs: { name: "note" },
            domProps: { value: _vm.formData.note },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.formData, "note", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "w3-button w3-green w3-bar w3-round",
          class: { "w3-disabled": _vm.loading },
          attrs: { type: "submit", value: "Crea Nuovo Preventivo" }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/easypress/create.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/easypress/create.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_05cec9d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=05cec9d3& */ "./resources/js/Pages/easypress/create.vue?vue&type=template&id=05cec9d3&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/Pages/easypress/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_05cec9d3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_05cec9d3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/easypress/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/easypress/create.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/easypress/create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/easypress/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/easypress/create.vue?vue&type=template&id=05cec9d3&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/easypress/create.vue?vue&type=template&id=05cec9d3& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_05cec9d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=05cec9d3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/easypress/create.vue?vue&type=template&id=05cec9d3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_05cec9d3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_05cec9d3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);