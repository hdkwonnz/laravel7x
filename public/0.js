(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/About.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/About.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
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
//
// @ is an alias to /src
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "About",
  components: {//
  },
  methods: {
    doSome: function doSome() {
      //alert("***************");
      // eslint-disable-next-line no-undef
      $(".add_some").append("hehe....");
    }
  },
  mounted: function mounted() {
    this.doSome();
  },
  //before the route is mounted we check if the user is logged in
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (!window.Laravel.isLoggedin) {
      //return next('/');
      return next('/login');
    }

    next();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/About.vue?vue&type=template&id=2995bb7e&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/About.vue?vue&type=template&id=2995bb7e& ***!
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
  return _c("div", [
    !_vm.$gate.isAdmin()
      ? _c("div", { staticClass: "about container" }, [
          _c("h2", [_vm._v("You do not have permission to access about...")])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.$gate.isAdmin()
      ? _c("div", { staticClass: "about container" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-lg btn-danger",
                on: { click: _vm.doSome }
              },
              [_vm._v("Click")]
            )
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "add_some" }, [
          _vm._v("\n          pls, add something...\n        ")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c("p", [
          _vm._v(
            "\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem\n          amet magnam, architecto molestias, atque molestiae dolores eius\n          aliquid voluptate quia consequatur maxime, esse aut quam animi totam\n          quae quibusdam placeat ea adipisci debitis consectetur quaerat! Ad\n          voluptates error reprehenderit rem rerum sit harum tempora, in illo\n          commodi nam earum impedit, officiis magnam natus incidunt quam est\n          accusantium ducimus veniam eius at! Dicta ipsam repellendus velit\n          laboriosam magnam ratione ullam, sapiente mollitia exercitationem,\n          blanditiis quaerat quasi, quam perspiciatis dolorem asperiores tempora\n          reprehenderit totam rerum optio reiciendis laudantium quo maxime!\n          Aliquam inventore magnam alias saepe recusandae quis eum sapiente\n          similique fugit culpa maxime id fuga molestias iure ratione voluptatum\n          quisquam, ex necessitatibus pariatur quos consequuntur fugiat odio\n          dolore dolorum. Totam dicta earum aliquid ea doloribus maiores\n          quaerat? Repudiandae nihil corrupti voluptas doloribus saepe fugiat\n          aut similique placeat pariatur facilis sequi iure sit quaerat corporis\n          incidunt perferendis debitis ut mollitia, quae totam quos. Dolor porro\n          magnam est, praesentium recusandae similique harum vitae possimus\n          quidem omnis voluptas corporis ea, ullam fugiat aperiam reprehenderit\n          debitis temporibus totam velit nisi, architecto dolore? Fuga molestias\n          alias dolorum ipsum tempore, aut ab, velit saepe facilis quos\n          cupiditate veritatis aperiam ea adipisci? Ex placeat incidunt ipsam\n          maiores officia.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3" }, [
        _c("p", [
          _vm._v(
            "\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem\n          amet magnam, architecto molestias, atque molestiae dolores eius\n          aliquid voluptate quia consequatur maxime, esse aut quam animi totam\n          quae quibusdam placeat ea adipisci debitis consectetur quaerat! Ad\n          voluptates error reprehenderit rem rerum sit harum tempora, in illo\n          commodi nam earum impedit, officiis magnam natus incidunt quam est\n          accusantium ducimus veniam eius at! Dicta ipsam repellendus velit\n          laboriosam magnam ratione ullam, sapiente mollitia exercitationem,\n          blanditiis quaerat quasi, quam perspiciatis dolorem asperiores tempora\n          reprehenderit totam rerum optio reiciendis laudantium quo maxime!\n          Aliquam inventore magnam alias saepe recusandae quis eum sapiente\n          similique fugit culpa maxime id fuga molestias iure ratione voluptatum\n          quisquam, ex necessitatibus pariatur quos consequuntur fugiat odio\n          dolore dolorum. Totam dicta earum aliquid ea doloribus maiores\n          quaerat? Repudiandae nihil corrupti voluptas doloribus saepe fugiat\n          aut similique placeat pariatur facilis sequi iure sit quaerat corporis\n          incidunt perferendis debitis ut mollitia, quae totam quos. Dolor porro\n          magnam est, praesentium recusandae similique harum vitae possimus\n          quidem omnis voluptas corporis ea, ullam fugiat aperiam reprehenderit\n          debitis temporibus totam velit nisi, architecto dolore? Fuga molestias\n          alias dolorum ipsum tempore, aut ab, velit saepe facilis quos\n          cupiditate veritatis aperiam ea adipisci? Ex placeat incidunt ipsam\n          maiores officia.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3" }, [
        _c("p", [
          _vm._v(
            "\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem\n          amet magnam, architecto molestias, atque molestiae dolores eius\n          aliquid voluptate quia consequatur maxime, esse aut quam animi totam\n          quae quibusdam placeat ea adipisci debitis consectetur quaerat! Ad\n          voluptates error reprehenderit rem rerum sit harum tempora, in illo\n          commodi nam earum impedit, officiis magnam natus incidunt quam est\n          accusantium ducimus veniam eius at! Dicta ipsam repellendus velit\n          laboriosam magnam ratione ullam, sapiente mollitia exercitationem,\n          blanditiis quaerat quasi, quam perspiciatis dolorem asperiores tempora\n          reprehenderit totam rerum optio reiciendis laudantium quo maxime!\n          Aliquam inventore magnam alias saepe recusandae quis eum sapiente\n          similique fugit culpa maxime id fuga molestias iure ratione voluptatum\n          quisquam, ex necessitatibus pariatur quos consequuntur fugiat odio\n          dolore dolorum. Totam dicta earum aliquid ea doloribus maiores\n          quaerat? Repudiandae nihil corrupti voluptas doloribus saepe fugiat\n          aut similique placeat pariatur facilis sequi iure sit quaerat corporis\n          incidunt perferendis debitis ut mollitia, quae totam quos. Dolor porro\n          magnam est, praesentium recusandae similique harum vitae possimus\n          quidem omnis voluptas corporis ea, ullam fugiat aperiam reprehenderit\n          debitis temporibus totam velit nisi, architecto dolore? Fuga molestias\n          alias dolorum ipsum tempore, aut ab, velit saepe facilis quos\n          cupiditate veritatis aperiam ea adipisci? Ex placeat incidunt ipsam\n          maiores officia.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3" }, [
        _c("p", [
          _vm._v(
            "\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem\n          amet magnam, architecto molestias, atque molestiae dolores eius\n          aliquid voluptate quia consequatur maxime, esse aut quam animi totam\n          quae quibusdam placeat ea adipisci debitis consectetur quaerat! Ad\n          voluptates error reprehenderit rem rerum sit harum tempora, in illo\n          commodi nam earum impedit, officiis magnam natus incidunt quam est\n          accusantium ducimus veniam eius at! Dicta ipsam repellendus velit\n          laboriosam magnam ratione ullam, sapiente mollitia exercitationem,\n          blanditiis quaerat quasi, quam perspiciatis dolorem asperiores tempora\n          reprehenderit totam rerum optio reiciendis laudantium quo maxime!\n          Aliquam inventore magnam alias saepe recusandae quis eum sapiente\n          similique fugit culpa maxime id fuga molestias iure ratione voluptatum\n          quisquam, ex necessitatibus pariatur quos consequuntur fugiat odio\n          dolore dolorum. Totam dicta earum aliquid ea doloribus maiores\n          quaerat? Repudiandae nihil corrupti voluptas doloribus saepe fugiat\n          aut similique placeat pariatur facilis sequi iure sit quaerat corporis\n          incidunt perferendis debitis ut mollitia, quae totam quos. Dolor porro\n          magnam est, praesentium recusandae similique harum vitae possimus\n          quidem omnis voluptas corporis ea, ullam fugiat aperiam reprehenderit\n          debitis temporibus totam velit nisi, architecto dolore? Fuga molestias\n          alias dolorum ipsum tempore, aut ab, velit saepe facilis quos\n          cupiditate veritatis aperiam ea adipisci? Ex placeat incidunt ipsam\n          maiores officia.\n        "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "add_some" }, [
          _vm._v("\n          pls, add something...\n        ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/About.vue":
/*!**************************************!*\
  !*** ./resources/js/views/About.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About_vue_vue_type_template_id_2995bb7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=2995bb7e& */ "./resources/js/views/About.vue?vue&type=template&id=2995bb7e&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ "./resources/js/views/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_2995bb7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _About_vue_vue_type_template_id_2995bb7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/About.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/About.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/About.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/About.vue?vue&type=template&id=2995bb7e&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/About.vue?vue&type=template&id=2995bb7e& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_2995bb7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=template&id=2995bb7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/About.vue?vue&type=template&id=2995bb7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_2995bb7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_2995bb7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);