(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pointer-cursor {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ExpressRequestsIndex.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=template&id=09906007&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=template&id=09906007& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    _c("h2", { staticClass: "w3-border-bottom" }, [
      _vm._v("Richeste di intervento Express")
    ]),
    _vm._v(" "),
    _vm.$page.requests.data.length <= 0
      ? _c("h3", [_vm._v("Nessuna Richiesta Trovata")])
      : _vm._e(),
    _vm._v(" "),
    _vm.$page.requests.data.length > 0
      ? _c(
          "div",
          { staticClass: "w3-bar w3-margin" },
          _vm._l(_vm.$page.requests.last_page, function(n) {
            return _c(
              "inertia-link",
              {
                key: n,
                staticClass: "w3-button",
                class: { "w3-green": _vm.$page.requests.current_page === n },
                attrs: { href: "/express-requests?page=" + n }
              },
              [_vm._v(_vm._s(n))]
            )
          }),
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.$page.requests.data.length > 0
      ? _c(
          "table",
          { staticClass: "w3-table-all w3-hoverable w3-margin-top" },
          [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v("ID")]),
                _vm._v(" "),
                _c("th", [_vm._v("Nome")]),
                _vm._v(" "),
                _c("th", [_vm._v("Email")]),
                _vm._v(" "),
                _c("th", [_vm._v("Nr. tel")]),
                _vm._v(" "),
                _c("th", [_vm._v("Modello")]),
                _vm._v(" "),
                _c("th", [_vm._v("Peso")]),
                _vm._v(" "),
                _c("th", [_vm._v("Nr. pianali")]),
                _vm._v(" "),
                _c("th"),
                _vm._v(" "),
                _c("th")
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.$page.requests.data, function(req) {
                return _c(
                  "tr",
                  { key: req.id, staticClass: "pointer-cursor" },
                  [
                    _c("td", [_vm._v(_vm._s(req.id))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(req.company_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(req.email))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(req.phone))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(req.model))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(req.weight))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(req.total))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "inertia-link",
                          {
                            staticClass: "w3-button w3-text-blue",
                            attrs: { href: "/express-requests/" + req.id }
                          },
                          [_c("i", { staticClass: "fa fa-eye w3-xlarge" })]
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
                            attrs: {
                              href: "/express-requests/" + req.id,
                              method: "delete"
                            }
                          },
                          [_c("i", { staticClass: "fa fa-times w3-xlarge" })]
                        )
                      ],
                      1
                    )
                  ]
                )
              }),
              0
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.$page.requests.data.length > 0
      ? _c(
          "div",
          { staticClass: "w3-bar w3-margin" },
          _vm._l(_vm.$page.requests.last_page, function(n) {
            return _c(
              "inertia-link",
              {
                key: n,
                staticClass: "w3-button",
                class: { "w3-green": _vm.$page.requests.current_page === n },
                attrs: { href: "/express-requests?page=" + n }
              },
              [_vm._v(_vm._s(n))]
            )
          }),
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/ExpressRequestsIndex.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/ExpressRequestsIndex.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExpressRequestsIndex_vue_vue_type_template_id_09906007___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpressRequestsIndex.vue?vue&type=template&id=09906007& */ "./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=template&id=09906007&");
/* harmony import */ var _ExpressRequestsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpressRequestsIndex.vue?vue&type=script&lang=js& */ "./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ExpressRequestsIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpressRequestsIndex.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ExpressRequestsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExpressRequestsIndex_vue_vue_type_template_id_09906007___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExpressRequestsIndex_vue_vue_type_template_id_09906007___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/ExpressRequestsIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ExpressRequestsIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ExpressRequestsIndex.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=template&id=09906007&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=template&id=09906007& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsIndex_vue_vue_type_template_id_09906007___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ExpressRequestsIndex.vue?vue&type=template&id=09906007& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ExpressRequestsIndex.vue?vue&type=template&id=09906007&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsIndex_vue_vue_type_template_id_09906007___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsIndex_vue_vue_type_template_id_09906007___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);