(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/apiAuth/Verify.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/apiAuth/Verify.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Verify",
  data: function data() {
    return {};
  },
  methods: {
    resend: function resend() {
      axios.post('/api/email/resend', {}).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (!window.Laravel.isLoggedin) {
      return next('/login');
    }

    next();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/apiAuth/Verify.vue?vue&type=template&id=1dfbafb6&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/apiAuth/Verify.vue?vue&type=template&id=1dfbafb6& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("Verify Your Email Address")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c(
                "div",
                {
                  staticClass: "alert alert-success",
                  attrs: { role: "alert" }
                },
                [
                  _vm._v(
                    "\n                            A fresh verification link has been sent to your email address.\n                        "
                  )
                ]
              ),
              _vm._v(
                "                          \n                            Before proceeding, please check your email for a verification link.\n                            If you did not receive the email,\n                        "
              ),
              _c(
                "form",
                {
                  staticClass: "d-inline",
                  attrs: { method: "POST" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.resend()
                    }
                  }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-link p-0 m-0 align-baseline",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("click here to request another")]
                  ),
                  _vm._v(".\n                        ")
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/apiAuth/Verify.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/apiAuth/Verify.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Verify_vue_vue_type_template_id_1dfbafb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Verify.vue?vue&type=template&id=1dfbafb6& */ "./resources/js/views/apiAuth/Verify.vue?vue&type=template&id=1dfbafb6&");
/* harmony import */ var _Verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Verify.vue?vue&type=script&lang=js& */ "./resources/js/views/apiAuth/Verify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Verify_vue_vue_type_template_id_1dfbafb6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Verify_vue_vue_type_template_id_1dfbafb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/apiAuth/Verify.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/apiAuth/Verify.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/apiAuth/Verify.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Verify.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/apiAuth/Verify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/apiAuth/Verify.vue?vue&type=template&id=1dfbafb6&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/apiAuth/Verify.vue?vue&type=template&id=1dfbafb6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_template_id_1dfbafb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Verify.vue?vue&type=template&id=1dfbafb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/apiAuth/Verify.vue?vue&type=template&id=1dfbafb6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_template_id_1dfbafb6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_template_id_1dfbafb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);