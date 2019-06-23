(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Layout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      isNavClosed: true,
      displayFlashMessages: Object.keys(this.$page.flash)
    };
  },
  methods: {
    toggleNav: function toggleNav() {
      this.isNavClosed = !this.isNavClosed;
    }
  },
  computed: {
    isNavOpened: function isNavOpened() {
      return !this.isNavClosed;
    },
    path: function path() {
      return window.location.pathname;
    }
  },
  mounted: function mounted() {
    console.log(this.$page.flash);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Layout.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.flash-message {\n      width: 90%;\n      margin-left: 3%;\n}\nbody {\n  background-color: lightgray;\n  margin: 8px;\n}\n.page {\n  min-height: calc(100vh - 20px);\n}\n.sidebar {\n  width: 20%;\n}\n.sidebar--closed {\n  width: 70px;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Layout.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086& ***!
  \*****************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "w3-white page" }, [
    _c(
      "nav",
      {
        staticClass: "w3-sidebar w3-bar-block sidebar w3-green w3-border-right",
        class: { "sidebar--closed": _vm.isNavClosed }
      },
      [
        _c(
          "button",
          {
            staticClass: "w3-xxlarge w3-padding w3-button w3-hover-green",
            class: { "w3-display-topright": _vm.isNavOpened },
            on: { click: _vm.toggleNav }
          },
          [
            _vm.isNavClosed ? _c("i", { staticClass: "fa fa-bars" }) : _vm._e(),
            _vm._v(" "),
            _vm.isNavOpened ? _c("i", { staticClass: "fa fa-times" }) : _vm._e()
          ]
        ),
        _vm._v(" "),
        _vm.isNavOpened
          ? _c("div", { staticStyle: { "margin-top": "10vh" } }, [
              _vm._v("\n      Registrato come: "),
              _c("br"),
              _vm._v("\n      " + _vm._s(_vm.$page.user.name) + " "),
              _c("br"),
              _vm._v("\n      " + _vm._s(_vm.$page.user.email) + "\n    ")
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { "margin-top": "20vh" } },
          [
            _c(
              "inertia-link",
              {
                staticClass: "w3-bar-item w3-button w3-hover-gray",
                class: {
                  "w3-light-gray": _vm.path === "/home" || _vm.path === "/"
                },
                attrs: { href: "/home" }
              },
              [
                _c("i", { staticClass: "fa fa-home w3-xxlarge" }),
                _vm._v(" "),
                _vm.isNavOpened
                  ? _c("span", { staticClass: "w3-xlarge" }, [_vm._v("Acasa")])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "inertia-link",
              {
                staticClass: "w3-bar-item w3-button w3-hover-gray",
                class: { "w3-light-gray": _vm.path === "/users" },
                attrs: { href: "/users" }
              },
              [
                _c("i", { staticClass: "fa fa-users w3-xxlarge" }),
                _vm._v(" "),
                _vm.isNavOpened
                  ? _c("span", { staticClass: "w3-xlarge" }, [
                      _vm._v("Amministratori")
                    ])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "inertia-link",
              {
                staticClass:
                  "w3-bar-item w3-button w3-hover-gray w3-display-container",
                class: { "w3-light-gray": _vm.path === "/standard-requests" },
                attrs: { href: "/standard-requests" }
              },
              [
                _c("i", { staticClass: "fa fa-upload w3-xxlarge" }),
                _vm._v(" "),
                _vm.isNavOpened
                  ? _c("span", { staticClass: "w3-xlarge" }, [
                      _vm._v("Richeste")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.$page.user.unreadStandardRequests.length > 0
                  ? _c(
                      "span",
                      {
                        staticClass: "w3-badge w3-red",
                        class: {
                          "w3-display-topright w3-small": _vm.isNavClosed
                        },
                        staticStyle: { margin: "3px" }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.$page.user.unreadStandardRequests.length
                            ) +
                            "\n        "
                        )
                      ]
                    )
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "inertia-link",
              {
                staticClass:
                  "w3-bar-item w3-button w3-hover-gray w3-display-container",
                class: { "w3-light-gray": _vm.path === "/express-requests" },
                attrs: { href: "/express-requests" }
              },
              [
                _c("i", { staticClass: "fa fa-truck w3-xxlarge" }),
                _vm._v(" "),
                _vm.isNavOpened
                  ? _c("span", { staticClass: "w3-xlarge" }, [
                      _vm._v("Richeste Express")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.$page.user.unreadExpressRequests.length > 0
                  ? _c(
                      "span",
                      {
                        staticClass: "w3-badge w3-red",
                        class: {
                          "w3-display-topright w3-small": _vm.isNavClosed
                        },
                        staticStyle: { margin: "3px" }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.$page.user.unreadExpressRequests.length
                            ) +
                            "\n        "
                        )
                      ]
                    )
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "inertia-link",
              {
                staticClass: "w3-bar-item w3-button w3-hover-gray",
                class: {
                  "w3-light-gray": _vm.path === "/push-notifications/create"
                },
                attrs: { href: "/push-notifications/create" }
              },
              [
                _c("i", { staticClass: "fa fa-bell w3-xxlarge" }),
                _vm._v(" "),
                _vm.isNavOpened
                  ? _c("span", { staticClass: "w3-xlarge" }, [
                      _vm._v("Notifiche Push")
                    ])
                  : _vm._e()
              ]
            )
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { style: { marginLeft: _vm.isNavClosed ? "70px" : "20%" } },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "transition-group",
          { attrs: { name: "fade" } },
          _vm._l(_vm.$page.flash, function(value, name) {
            return _c("div", { key: name }, [
              value && _vm.displayFlashMessages.indexOf(name) !== -1
                ? _c(
                    "div",
                    {
                      staticClass:
                        "w3-card-4 flash-message w3-border-blue w3-leftbar w3-padding w3-display-container"
                    },
                    [
                      _vm._v(
                        "\n              " + _vm._s(value) + "\n              "
                      ),
                      _c(
                        "span",
                        {
                          staticClass: "w3-button w3-display-right",
                          on: {
                            click: function($event) {
                              _vm.displayFlashMessages = _vm.displayFlashMessages.filter(
                                function(msgName) {
                                  return msgName !== name
                                }
                              )
                            }
                          }
                        },
                        [_vm._v("×")]
                      )
                    ]
                  )
                : _vm._e()
            ])
          }),
          0
        ),
        _vm._v(" "),
        _c("div", { staticClass: "w3-container" }, [_vm._t("default")], 2)
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", [
      _c("h1", { staticClass: "w3-green w3-padding" }, [
        _c("span", { staticStyle: { "font-family": "Times New Roman" } }, [
          _vm._v("Lemart & Lemart")
        ]),
        _vm._v(" Express Control Panel\n      ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Shared/Layout.vue":
/*!****************************************!*\
  !*** ./resources/js/Shared/Layout.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=6bf30086& */ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Shared/Layout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=6bf30086& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);