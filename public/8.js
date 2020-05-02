(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/apiAuth/passwords/PasswordRequest.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/apiAuth/passwords/PasswordRequest.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PasswordRequest",
  data: function data() {
    return {
      email: "",
      message: "",
      messageSw: false,
      error: "",
      errorSw: false
    };
  },
  methods: {
    passwordEmail: function passwordEmail() {
      var _this = this;

      axios.post('api/password/email', {
        email: this.email
      }).then(function (response) {
        _this.message = response.data.message;
        _this.messageSw = true;
      })["catch"](function (error) {
        //console.log(error)
        _this.error = error;
        _this.errorSw = true;
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (window.Laravel.isLoggedin) {
      return next('/');
    }

    next();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/apiAuth/passwords/PasswordRequest.vue?vue&type=template&id=8df6dabe&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/apiAuth/passwords/PasswordRequest.vue?vue&type=template&id=8df6dabe& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
              _vm._v("Reset Password")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _vm.messageSw
                ? _c(
                    "div",
                    {
                      staticClass: "alert alert-success",
                      attrs: { role: "alert" }
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.message) +
                          "\n                        "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.errorSw
                ? _c(
                    "div",
                    {
                      staticClass: "alert alert-danger",
                      attrs: { role: "alert" }
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.error) +
                          "\n                        "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: { method: "POST" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.passwordEmail()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-4 col-form-label text-md-right",
                        attrs: { for: "email" }
                      },
                      [_vm._v("E-Mail Address")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.email,
                            expression: "email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "email",
                          type: "email",
                          name: "email",
                          required: "",
                          autocomplete: "email",
                          autofocus: ""
                        },
                        domProps: { value: _vm.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.email = $event.target.value
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(0)
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row mb-0" }, [
      _c("div", { staticClass: "col-md-6 offset-md-4" }, [
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "submit" } },
          [
            _vm._v(
              "\n                                        Send Password Reset Link\n                                    "
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/apiAuth/passwords/PasswordRequest.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/apiAuth/passwords/PasswordRequest.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PasswordRequest_vue_vue_type_template_id_8df6dabe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordRequest.vue?vue&type=template&id=8df6dabe& */ "./resources/js/views/apiAuth/passwords/PasswordRequest.vue?vue&type=template&id=8df6dabe&");
/* harmony import */ var _PasswordRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordRequest.vue?vue&type=script&lang=js& */ "./resources/js/views/apiAuth/passwords/PasswordRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PasswordRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PasswordRequest_vue_vue_type_template_id_8df6dabe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PasswordRequest_vue_vue_type_template_id_8df6dabe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/apiAuth/passwords/PasswordRequest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/apiAuth/passwords/PasswordRequest.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/apiAuth/passwords/PasswordRequest.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordRequest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/apiAuth/passwords/PasswordRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/apiAuth/passwords/PasswordRequest.vue?vue&type=template&id=8df6dabe&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/apiAuth/passwords/PasswordRequest.vue?vue&type=template&id=8df6dabe& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordRequest_vue_vue_type_template_id_8df6dabe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordRequest.vue?vue&type=template&id=8df6dabe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/apiAuth/passwords/PasswordRequest.vue?vue&type=template&id=8df6dabe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordRequest_vue_vue_type_template_id_8df6dabe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordRequest_vue_vue_type_template_id_8df6dabe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);