(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/PushCreate.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/PushCreate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Shared_PushNotificationForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/PushNotificationForm */ "./resources/js/Shared/PushNotificationForm.vue");
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
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    PushNotificationForm: _Shared_PushNotificationForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      title: '',
      body: '',
      link: '',
      loading: false,
      pendingConfirmation: false
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.loading = true;
      this.$inertia.post('/push-notifications', {
        title: this.title,
        body: this.body
      }).then(function () {
        _this.loading = false;
        _this.title = "";
        _this.body = "";
      });
    },
    handleConfirmation: function handleConfirmation(confirmed) {
      if (confirmed) {
        this.submit();
      }

      this.pendingConfirmation = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/PushNotificationForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/PushNotificationForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_ConfirmationDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/ConfirmationDialog */ "./resources/js/Shared/ConfirmationDialog.vue");
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
    ConfirmationDialog: _Shared_ConfirmationDialog__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      title: '',
      body: '',
      link: '',
      loading: false,
      pendingConfirmation: false
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.loading = true;
      this.$inertia.post('/push-notifications', {
        title: this.title,
        body: this.body
      }).then(function () {
        _this.loading = false;
        _this.title = "";
        _this.body = "";
      });
    },
    handleConfirmation: function handleConfirmation(confirmed) {
      if (confirmed) {
        this.submit();
      }

      this.pendingConfirmation = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/PushCreate.vue?vue&type=template&id=7e1c87c2&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/PushCreate.vue?vue&type=template&id=7e1c87c2& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c(
    "Layout",
    [
      _c("h2", { staticClass: "w3-border-bottom" }, [
        _vm._v("Mandare Notifiche Push")
      ]),
      _vm._v(" "),
      _c("PushNotificationForm")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/PushNotificationForm.vue?vue&type=template&id=45721b36&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/PushNotificationForm.vue?vue&type=template&id=45721b36& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "form",
        {
          staticStyle: { "max-width": "800px" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              _vm.pendingConfirmation = true
            }
          }
        },
        [
          _c("div", { staticClass: "w3-margin-bottom" }, [
            _c(
              "label",
              {
                staticClass: "w3-text-green",
                class: { "w3-text-red": _vm.$page.errors.title }
              },
              [_vm._v("Titolo")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.title,
                  expression: "title"
                }
              ],
              staticClass: "w3-input w3-border w3-round",
              class: { "w3-border-red": _vm.$page.errors.title },
              attrs: { type: "text", name: "title", required: "" },
              domProps: { value: _vm.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.title = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _vm.$page.errors.title
              ? _c(
                  "div",
                  _vm._l(_vm.$page.errors.title, function(error, index) {
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
                class: { "w3-text-red": _vm.$page.errors.body }
              },
              [_vm._v("Messaggio")]
            ),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.body,
                  expression: "body"
                }
              ],
              staticClass: "w3-input w3-border w3-round",
              class: { "w3-border-red": _vm.$page.errors.body },
              attrs: { name: "body", required: "" },
              domProps: { value: _vm.body },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.body = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _vm.$page.errors.body
              ? _c(
                  "div",
                  _vm._l(_vm.$page.errors.body, function(error, index) {
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
            attrs: { type: "submit" },
            domProps: { value: _vm.loading ? "Mandando..." : "Manda Notifica" }
          })
        ]
      ),
      _vm._v(" "),
      _vm.pendingConfirmation
        ? _c(
            "ConfirmationDialog",
            {
              attrs: { title: "Manda Notifiche Push" },
              on: { confirm: _vm.handleConfirmation }
            },
            [
              _vm._v("\n    Sei sicuro di mandare la notifica con il titolo: "),
              _c("br"),
              _vm._v(" "),
              _c("b", [_vm._v(_vm._s(_vm.title))]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v("\n    E il messaggio: "),
              _c("br"),
              _vm._v(" "),
              _c("b", [_vm._v(_vm._s(_vm.body))])
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/PushCreate.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/PushCreate.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PushCreate_vue_vue_type_template_id_7e1c87c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PushCreate.vue?vue&type=template&id=7e1c87c2& */ "./resources/js/Pages/PushCreate.vue?vue&type=template&id=7e1c87c2&");
/* harmony import */ var _PushCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PushCreate.vue?vue&type=script&lang=js& */ "./resources/js/Pages/PushCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PushCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PushCreate_vue_vue_type_template_id_7e1c87c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PushCreate_vue_vue_type_template_id_7e1c87c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/PushCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/PushCreate.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/PushCreate.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PushCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PushCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/PushCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PushCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/PushCreate.vue?vue&type=template&id=7e1c87c2&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/PushCreate.vue?vue&type=template&id=7e1c87c2& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PushCreate_vue_vue_type_template_id_7e1c87c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PushCreate.vue?vue&type=template&id=7e1c87c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/PushCreate.vue?vue&type=template&id=7e1c87c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PushCreate_vue_vue_type_template_id_7e1c87c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PushCreate_vue_vue_type_template_id_7e1c87c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/PushNotificationForm.vue":
/*!******************************************************!*\
  !*** ./resources/js/Shared/PushNotificationForm.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PushNotificationForm_vue_vue_type_template_id_45721b36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PushNotificationForm.vue?vue&type=template&id=45721b36& */ "./resources/js/Shared/PushNotificationForm.vue?vue&type=template&id=45721b36&");
/* harmony import */ var _PushNotificationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PushNotificationForm.vue?vue&type=script&lang=js& */ "./resources/js/Shared/PushNotificationForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PushNotificationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PushNotificationForm_vue_vue_type_template_id_45721b36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PushNotificationForm_vue_vue_type_template_id_45721b36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/PushNotificationForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/PushNotificationForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Shared/PushNotificationForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PushNotificationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PushNotificationForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/PushNotificationForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PushNotificationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/PushNotificationForm.vue?vue&type=template&id=45721b36&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Shared/PushNotificationForm.vue?vue&type=template&id=45721b36& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PushNotificationForm_vue_vue_type_template_id_45721b36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PushNotificationForm.vue?vue&type=template&id=45721b36& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/PushNotificationForm.vue?vue&type=template&id=45721b36&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PushNotificationForm_vue_vue_type_template_id_45721b36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PushNotificationForm_vue_vue_type_template_id_45721b36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);