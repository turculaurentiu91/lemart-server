(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ExpressRequestsView.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ExpressRequestsView.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      showModal: false,
      modalImg: false
    };
  },
  mounted: function mounted() {
    console.log(this.$page.request, this.$page.images);
  },
  methods: {
    showImage: function showImage(index) {
      this.showModal = true;
      this.modalImg = index;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ExpressRequestsView.vue?vue&type=style&index=0&id=5513a500&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ExpressRequestsView.vue?vue&type=style&index=0&id=5513a500&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntd[data-v-5513a500]:first-child {\n  width: 15em;\n}\n.row[data-v-5513a500] {\n  display: flex;\n  margin-top: 5%;\n}\n.center-content[data-v-5513a500] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.img-card[data-v-5513a500] {\n  width: 100px;\n}\n.img-card img[data-v-5513a500] {\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ExpressRequestsView.vue?vue&type=style&index=0&id=5513a500&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ExpressRequestsView.vue?vue&type=style&index=0&id=5513a500&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ExpressRequestsView.vue?vue&type=style&index=0&id=5513a500&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ExpressRequestsView.vue?vue&type=style&index=0&id=5513a500&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ExpressRequestsView.vue?vue&type=template&id=5513a500&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ExpressRequestsView.vue?vue&type=template&id=5513a500&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _vm._v(
        "Richesta di intervento Express per " +
          _vm._s(_vm.$page.request.company_name)
      )
    ]),
    _vm._v(" "),
    _c("table", { staticClass: "w3-table" }, [
      _c("tr", [
        _c("td", [_vm._v("Nome dell'azienda")]),
        _vm._v(" "),
        _c("td", [_vm._v(_vm._s(_vm.$page.request.company_name))])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("E-mail")]),
        _vm._v(" "),
        _c("td", [_vm._v(_vm._s(_vm.$page.request.email))])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Numero di cellulare")]),
        _vm._v(" "),
        _c("td", [_vm._v(_vm._s(_vm.$page.request.phone))])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Indirizzo")]),
        _vm._v(" "),
        _c("td", [_vm._v(_vm._s(_vm.$page.request.address))])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Marca, modello e tipo")]),
        _vm._v(" "),
        _c("td", [_vm._v(_vm._s(_vm.$page.request.model))])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Peso kg")]),
        _vm._v(" "),
        _c("td", [_vm._v(_vm._s(_vm.$page.request.weight))])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Numero pianali totale")]),
        _vm._v(" "),
        _c("td", [_vm._v(_vm._s(_vm.$page.request.total))])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Persona di riferimento")]),
        _vm._v(" "),
        _c("td", [_vm._v(_vm._s(_vm.$page.request.person))])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Guasto dichiarato")]),
        _vm._v(" "),
        _c("td", [_vm._v(_vm._s(_vm.$page.request.damage))])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Mandato il")]),
        _vm._v(" "),
        _c("td", [_vm._v(_vm._s(_vm.$page.request.created_at))])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      _vm._l(_vm.$page.images, function(img, index) {
        return _c(
          "div",
          {
            key: img.id,
            staticClass: "w3-card-4 img-card w3-border w3-round",
            on: {
              click: function() {
                _vm.showModal = true
                _vm.modalImg = index
              }
            }
          },
          [
            _c("img", {
              staticClass: "w3-image",
              attrs: { src: "/storage/" + img.filename }
            })
          ]
        )
      }),
      0
    ),
    _vm._v(" "),
    _vm.showModal
      ? _c(
          "div",
          { staticClass: "w3-modal", staticStyle: { display: "block" } },
          [
            _c("div", { staticClass: "w3-modal-content" }, [
              _c("div", { staticClass: "w3-container center-content" }, [
                _c(
                  "span",
                  {
                    staticClass: "w3-button w3-display-topright w3-green",
                    on: {
                      click: function() {
                        return (_vm.showModal = false)
                      }
                    }
                  },
                  [_vm._v("×")]
                ),
                _vm._v(" "),
                _c("img", {
                  staticClass: "w3-image w3-margin-bottom",
                  attrs: {
                    src: "/storage/" + _vm.$page.images[_vm.modalImg].filename
                  }
                })
              ])
            ])
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/ExpressRequestsView.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/ExpressRequestsView.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExpressRequestsView_vue_vue_type_template_id_5513a500_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpressRequestsView.vue?vue&type=template&id=5513a500&scoped=true& */ "./resources/js/Pages/ExpressRequestsView.vue?vue&type=template&id=5513a500&scoped=true&");
/* harmony import */ var _ExpressRequestsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpressRequestsView.vue?vue&type=script&lang=js& */ "./resources/js/Pages/ExpressRequestsView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ExpressRequestsView_vue_vue_type_style_index_0_id_5513a500_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpressRequestsView.vue?vue&type=style&index=0&id=5513a500&scoped=true&lang=css& */ "./resources/js/Pages/ExpressRequestsView.vue?vue&type=style&index=0&id=5513a500&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ExpressRequestsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExpressRequestsView_vue_vue_type_template_id_5513a500_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExpressRequestsView_vue_vue_type_template_id_5513a500_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5513a500",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/ExpressRequestsView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/ExpressRequestsView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/ExpressRequestsView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ExpressRequestsView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ExpressRequestsView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/ExpressRequestsView.vue?vue&type=style&index=0&id=5513a500&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/Pages/ExpressRequestsView.vue?vue&type=style&index=0&id=5513a500&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsView_vue_vue_type_style_index_0_id_5513a500_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ExpressRequestsView.vue?vue&type=style&index=0&id=5513a500&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ExpressRequestsView.vue?vue&type=style&index=0&id=5513a500&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsView_vue_vue_type_style_index_0_id_5513a500_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsView_vue_vue_type_style_index_0_id_5513a500_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsView_vue_vue_type_style_index_0_id_5513a500_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsView_vue_vue_type_style_index_0_id_5513a500_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsView_vue_vue_type_style_index_0_id_5513a500_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/ExpressRequestsView.vue?vue&type=template&id=5513a500&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/ExpressRequestsView.vue?vue&type=template&id=5513a500&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsView_vue_vue_type_template_id_5513a500_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ExpressRequestsView.vue?vue&type=template&id=5513a500&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ExpressRequestsView.vue?vue&type=template&id=5513a500&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsView_vue_vue_type_template_id_5513a500_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpressRequestsView_vue_vue_type_template_id_5513a500_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);