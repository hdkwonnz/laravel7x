(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Task.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Task.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
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
  name: "Task",
  data: function data() {
    return {
      task: null,
      // tasks: null
      tasks: []
    };
  },
  methods: {
    //we submit the task to the add-task api then clear the input field
    addTask: function addTask() {
      var _this = this;

      // 아래 "$gate.isAdmin()"는 ACL 을 위하여...
      // v-if 에서는 "$gate.isAdmin()" 식으로 쓰지만 아래 script 에서는
      // "this.$gate.isAdmin()" 식으로 쓴다.
      // 허락하는 두가지 방법을 보여 준다.
      // 아래 isAdminOrAuthor() function은 resources/js/gate.js에 기술 하였다.
      // if (this.$gate.isAdmin()){ ////Admin 만 허락할때
      if (this.$gate.isAdminOrAuthor()) {
        ////Admin or Athor 를 허락할때
        axios.post('api/add-task', {
          task: this.task
        }).then(function (response) {
          _this.getTask();

          _this.task = null;
        })["catch"](function (error) {
          //console.log(error.response.status)
          if (error.response.status == 403) {
            //status => error status
            _this.$router.push('/email-verify');
          }
        });
      }
    },
    getTask: function getTask() {
      var _this2 = this;

      if (this.$gate.isAdminOrAuthor()) {
        ////
        axios.get('api/get-task').then(function (response) {
          _this2.tasks = response.data.tasks;
        })["catch"](function (error) {
          //console.log(error.response.status)
          if (error.response.status == 403) {
            //status => error status
            _this2.$router.push('/email-verify');
          }
        });
      }
    }
  },
  watch: {// // whenever task changes, this function will run
    //     task: function (newTask, oldTask) {
    //     this.getTask()
    //     }
  },
  created: function created() {
    this.getTask();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Task.vue?vue&type=template&id=5abc6ab8&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Task.vue?vue&type=template&id=5abc6ab8& ***!
  \**************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    !_vm.$gate.isAdminOrAuthor()
      ? _c("div", { staticClass: "row justify-content-center mt-5" }, [
          _c("h2", [_vm._v("You do not have permission to access tasks...")])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.$gate.isAdminOrAuthor()
      ? _c("div", { staticClass: "row justify-content-center" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "card card-default" }, [
              _c("div", { staticClass: "card-header" }, [_vm._v("Add Task")]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "form",
                  {
                    attrs: { method: "POST" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.addTask()
                      }
                    }
                  },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.task,
                          expression: "task"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { required: "" },
                      domProps: { value: _vm.task },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.task = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-lg btn-primary mt-4",
                        attrs: { type: "submit" }
                      },
                      [
                        _vm._v(
                          "\n                            Click\n                        "
                        )
                      ]
                    )
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [_vm._v("All Tasks")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                _vm._l(_vm.tasks, function(task, id) {
                  return _c(
                    "li",
                    { key: id, staticStyle: { "list-style": "none" } },
                    [_vm._v(_vm._s(task.task))]
                  )
                }),
                0
              )
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Task.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Task.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Task_vue_vue_type_template_id_5abc6ab8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.vue?vue&type=template&id=5abc6ab8& */ "./resources/js/views/Task.vue?vue&type=template&id=5abc6ab8&");
/* harmony import */ var _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.vue?vue&type=script&lang=js& */ "./resources/js/views/Task.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Task_vue_vue_type_template_id_5abc6ab8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Task_vue_vue_type_template_id_5abc6ab8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Task.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Task.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Task.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Task.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Task.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Task.vue?vue&type=template&id=5abc6ab8&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Task.vue?vue&type=template&id=5abc6ab8& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_5abc6ab8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Task.vue?vue&type=template&id=5abc6ab8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Task.vue?vue&type=template&id=5abc6ab8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_5abc6ab8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_5abc6ab8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);