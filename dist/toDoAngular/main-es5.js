function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'enroll',
      pathMatch: 'full'
    }, {
      path: '*',
      redirectTo: 'enroll',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_if_tutorial_ng_if_tutorial_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ng-if-tutorial/ng-if-tutorial.component */
    "./src/app/ng-if-tutorial/ng-if-tutorial.component.ts");
    /* harmony import */


    var _switch_case_tutorial_switch_case_tutorial_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./switch-case-tutorial/switch-case-tutorial.component */
    "./src/app/switch-case-tutorial/switch-case-tutorial.component.ts");
    /* harmony import */


    var _ng_for_tutorial_ng_for_tutorial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ng-for-tutorial/ng-for-tutorial.component */
    "./src/app/ng-for-tutorial/ng-for-tutorial.component.ts");
    /* harmony import */


    var _ng_style_and_ng_class_tutorial_ng_style_and_ng_class_tutorial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ng-style-and-ng-class-tutorial/ng-style-and-ng-class-tutorial.component */
    "./src/app/ng-style-and-ng-class-tutorial/ng-style-and-ng-class-tutorial.component.ts");
    /* harmony import */


    var _data_binding_tutorial_section_data_binding_tutorial_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./data-binding-tutorial-section/data-binding-tutorial-section.component */
    "./src/app/data-binding-tutorial-section/data-binding-tutorial-section.component.ts");
    /* harmony import */


    var _two_way_data_binding_two_way_data_binding_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./two-way-data-binding/two-way-data-binding.component */
    "./src/app/two-way-data-binding/two-way-data-binding.component.ts");
    /* harmony import */


    var _pipes_tutorial_pipes_tutorial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pipes-tutorial/pipes-tutorial.component */
    "./src/app/pipes-tutorial/pipes-tutorial.component.ts");
    /* harmony import */


    var _custom_pipe_example_custom_pipe_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./custom-pipe-example/custom-pipe-example.component */
    "./src/app/custom-pipe-example/custom-pipe-example.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'toDoAngular';
      }

      _createClass(AppComponent, [{
        key: "readMe",
        value: function readMe() {
          console.log('hi');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 16,
      vars: 1,
      consts: [[1, "bg-primary"], [3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener() {
            return ctx.readMe();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click here to console.log()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-ng-if-tutorial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-switch-case-tutorial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-ng-for-tutorial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-ng-style-and-ng-class-tutorial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-data-binding-tutorial-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-two-way-data-binding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-pipes-tutorial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-custom-pipe-example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome to ", ctx.title, " Notes!");
        }
      },
      directives: [_ng_if_tutorial_ng_if_tutorial_component__WEBPACK_IMPORTED_MODULE_1__["NgIfTutorialComponent"], _switch_case_tutorial_switch_case_tutorial_component__WEBPACK_IMPORTED_MODULE_2__["SwitchCaseTutorialComponent"], _ng_for_tutorial_ng_for_tutorial_component__WEBPACK_IMPORTED_MODULE_3__["NgForTutorialComponent"], _ng_style_and_ng_class_tutorial_ng_style_and_ng_class_tutorial_component__WEBPACK_IMPORTED_MODULE_4__["NgStyleAndNgClassTutorialComponent"], _data_binding_tutorial_section_data_binding_tutorial_section_component__WEBPACK_IMPORTED_MODULE_5__["DataBindingTutorialSectionComponent"], _two_way_data_binding_two_way_data_binding_component__WEBPACK_IMPORTED_MODULE_6__["TwoWayDataBindingComponent"], _pipes_tutorial_pipes_tutorial_component__WEBPACK_IMPORTED_MODULE_7__["PipesTutorialComponent"], _custom_pipe_example_custom_pipe_example_component__WEBPACK_IMPORTED_MODULE_8__["CustomPipeExampleComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _hover_effect_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./hover-effect.pipe */
    "./src/app/hover-effect.pipe.ts");
    /* harmony import */


    var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tasks/tasks.component */
    "./src/app/tasks/tasks.component.ts");
    /* harmony import */


    var _authorize_authorize_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./authorize/authorize.component */
    "./src/app/authorize/authorize.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _todo_todo_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./todo/todo.module */
    "./src/app/todo/todo.module.ts");
    /* harmony import */


    var _data_binding_tutorial_section_data_binding_tutorial_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./data-binding-tutorial-section/data-binding-tutorial-section.component */
    "./src/app/data-binding-tutorial-section/data-binding-tutorial-section.component.ts");
    /* harmony import */


    var _ng_style_and_ng_class_tutorial_ng_style_and_ng_class_tutorial_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./ng-style-and-ng-class-tutorial/ng-style-and-ng-class-tutorial.component */
    "./src/app/ng-style-and-ng-class-tutorial/ng-style-and-ng-class-tutorial.component.ts");
    /* harmony import */


    var _ng_for_tutorial_ng_for_tutorial_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./ng-for-tutorial/ng-for-tutorial.component */
    "./src/app/ng-for-tutorial/ng-for-tutorial.component.ts");
    /* harmony import */


    var _switch_case_tutorial_switch_case_tutorial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./switch-case-tutorial/switch-case-tutorial.component */
    "./src/app/switch-case-tutorial/switch-case-tutorial.component.ts");
    /* harmony import */


    var _two_way_data_binding_two_way_data_binding_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./two-way-data-binding/two-way-data-binding.component */
    "./src/app/two-way-data-binding/two-way-data-binding.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _pipes_tutorial_pipes_tutorial_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pipes-tutorial/pipes-tutorial.component */
    "./src/app/pipes-tutorial/pipes-tutorial.component.ts");
    /* harmony import */


    var _ng_if_tutorial_ng_if_tutorial_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./ng-if-tutorial/ng-if-tutorial.component */
    "./src/app/ng-if-tutorial/ng-if-tutorial.component.ts");
    /* harmony import */


    var _highlight_pipe_tutorial_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./highlight-pipe-tutorial.pipe */
    "./src/app/highlight-pipe-tutorial.pipe.ts");
    /* harmony import */


    var _custom_pipe_example_custom_pipe_example_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./custom-pipe-example/custom-pipe-example.component */
    "./src/app/custom-pipe-example/custom-pipe-example.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_19__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_19__["PathLocationStrategy"]
      }],
      imports: [[_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _todo_todo_module__WEBPACK_IMPORTED_MODULE_8__["TodoModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _authorize_authorize_component__WEBPACK_IMPORTED_MODULE_6__["AuthorizeComponent"], _custom_pipe_example_custom_pipe_example_component__WEBPACK_IMPORTED_MODULE_18__["CustomPipeExampleComponent"], _data_binding_tutorial_section_data_binding_tutorial_section_component__WEBPACK_IMPORTED_MODULE_9__["DataBindingTutorialSectionComponent"], _highlight_pipe_tutorial_pipe__WEBPACK_IMPORTED_MODULE_17__["HighlightPipeTutorialPipe"], _hover_effect_pipe__WEBPACK_IMPORTED_MODULE_4__["HoverEffectPipe"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _ng_if_tutorial_ng_if_tutorial_component__WEBPACK_IMPORTED_MODULE_16__["NgIfTutorialComponent"], _ng_for_tutorial_ng_for_tutorial_component__WEBPACK_IMPORTED_MODULE_11__["NgForTutorialComponent"], _ng_style_and_ng_class_tutorial_ng_style_and_ng_class_tutorial_component__WEBPACK_IMPORTED_MODULE_10__["NgStyleAndNgClassTutorialComponent"], _pipes_tutorial_pipes_tutorial_component__WEBPACK_IMPORTED_MODULE_15__["PipesTutorialComponent"], _switch_case_tutorial_switch_case_tutorial_component__WEBPACK_IMPORTED_MODULE_12__["SwitchCaseTutorialComponent"], _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__["TasksComponent"], _two_way_data_binding_two_way_data_binding_component__WEBPACK_IMPORTED_MODULE_13__["TwoWayDataBindingComponent"]],
        imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _todo_todo_module__WEBPACK_IMPORTED_MODULE_8__["TodoModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _authorize_authorize_component__WEBPACK_IMPORTED_MODULE_6__["AuthorizeComponent"], _custom_pipe_example_custom_pipe_example_component__WEBPACK_IMPORTED_MODULE_18__["CustomPipeExampleComponent"], _data_binding_tutorial_section_data_binding_tutorial_section_component__WEBPACK_IMPORTED_MODULE_9__["DataBindingTutorialSectionComponent"], _highlight_pipe_tutorial_pipe__WEBPACK_IMPORTED_MODULE_17__["HighlightPipeTutorialPipe"], _hover_effect_pipe__WEBPACK_IMPORTED_MODULE_4__["HoverEffectPipe"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _ng_if_tutorial_ng_if_tutorial_component__WEBPACK_IMPORTED_MODULE_16__["NgIfTutorialComponent"], _ng_for_tutorial_ng_for_tutorial_component__WEBPACK_IMPORTED_MODULE_11__["NgForTutorialComponent"], _ng_style_and_ng_class_tutorial_ng_style_and_ng_class_tutorial_component__WEBPACK_IMPORTED_MODULE_10__["NgStyleAndNgClassTutorialComponent"], _pipes_tutorial_pipes_tutorial_component__WEBPACK_IMPORTED_MODULE_15__["PipesTutorialComponent"], _switch_case_tutorial_switch_case_tutorial_component__WEBPACK_IMPORTED_MODULE_12__["SwitchCaseTutorialComponent"], _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__["TasksComponent"], _two_way_data_binding_two_way_data_binding_component__WEBPACK_IMPORTED_MODULE_13__["TwoWayDataBindingComponent"]],
          imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _todo_todo_module__WEBPACK_IMPORTED_MODULE_8__["TodoModule"]],
          providers: [{
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_19__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_19__["PathLocationStrategy"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/authorize/authorize.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/authorize/authorize.component.ts ***!
    \**************************************************/

  /*! exports provided: AuthorizeComponent */

  /***/
  function srcAppAuthorizeAuthorizeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorizeComponent", function () {
      return AuthorizeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AuthorizeComponent = /*#__PURE__*/function () {
      function AuthorizeComponent() {
        _classCallCheck(this, AuthorizeComponent);
      }

      _createClass(AuthorizeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthorizeComponent;
    }();

    AuthorizeComponent.ɵfac = function AuthorizeComponent_Factory(t) {
      return new (t || AuthorizeComponent)();
    };

    AuthorizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthorizeComponent,
      selectors: [["app-authorize"]],
      decls: 2,
      vars: 0,
      template: function AuthorizeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "authorize works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6ZS9hdXRob3JpemUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-authorize',
          templateUrl: './authorize.component.html',
          styleUrls: ['./authorize.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/custom-pipe-example/custom-pipe-example.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/custom-pipe-example/custom-pipe-example.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CustomPipeExampleComponent */

  /***/
  function srcAppCustomPipeExampleCustomPipeExampleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomPipeExampleComponent", function () {
      return CustomPipeExampleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _highlight_pipe_tutorial_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../highlight-pipe-tutorial.pipe */
    "./src/app/highlight-pipe-tutorial.pipe.ts");

    function CustomPipeExampleComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "highlightPipeTutorial");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, user_r1.cityCode, user_r1.cityCode), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var CustomPipeExampleComponent = function CustomPipeExampleComponent() {
      _classCallCheck(this, CustomPipeExampleComponent);

      this.users = [{
        firstName: 'Mel',
        city: 'New York',
        cityCode: 'NY'
      }, {
        firstName: 'Michael',
        city: 'Los Angeles',
        cityCode: 'LA'
      }, {
        firstName: 'Matt',
        city: 'Phoenix',
        cityCode: 'PHX'
      }];
    };

    CustomPipeExampleComponent.ɵfac = function CustomPipeExampleComponent_Factory(t) {
      return new (t || CustomPipeExampleComponent)();
    };

    CustomPipeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomPipeExampleComponent,
      selectors: [["app-custom-pipe-example"]],
      decls: 4,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [3, "innerHTML"]],
      template: function CustomPipeExampleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Custom Pipe Example!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomPipeExampleComponent_li_3_Template, 3, 4, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      pipes: [_highlight_pipe_tutorial_pipe__WEBPACK_IMPORTED_MODULE_2__["HighlightPipeTutorialPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1waXBlLWV4YW1wbGUvY3VzdG9tLXBpcGUtZXhhbXBsZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomPipeExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-custom-pipe-example',
          templateUrl: './custom-pipe-example.component.html',
          styleUrls: ['./custom-pipe-example.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/data-binding-tutorial-section/data-binding-tutorial-section.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/data-binding-tutorial-section/data-binding-tutorial-section.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: DataBindingTutorialSectionComponent */

  /***/
  function srcAppDataBindingTutorialSectionDataBindingTutorialSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataBindingTutorialSectionComponent", function () {
      return DataBindingTutorialSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        color: a0
      };
    };

    var DataBindingTutorialSectionComponent = /*#__PURE__*/function () {
      function DataBindingTutorialSectionComponent() {
        _classCallCheck(this, DataBindingTutorialSectionComponent);

        this.clsName = 'c1';
        this.colorVal = 'red';
        this.epNum = 17;
        this.hrefVal = 'https://google.com';
        this.placeholderVal = 'Please enter a value';
        this.subTitle = 'Interpolation';
        this.updatedLink = 'https://oracle.com';
        this.user = {
          userId: 201,
          userName: 'ABC',
          status: 'Active'
        };
      }

      _createClass(DataBindingTutorialSectionComponent, [{
        key: "logger",
        value: function logger() {
          console.log('Message here');
        }
      }, {
        key: "showAlert",
        value: function showAlert(id) {
          alert('ALERT ' + id);
        }
      }]);

      return DataBindingTutorialSectionComponent;
    }();

    DataBindingTutorialSectionComponent.ɵfac = function DataBindingTutorialSectionComponent_Factory(t) {
      return new (t || DataBindingTutorialSectionComponent)();
    };

    DataBindingTutorialSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DataBindingTutorialSectionComponent,
      selectors: [["app-data-binding-tutorial-section"]],
      decls: 54,
      vars: 14,
      consts: [[1, "bg-primary"], [3, "ngStyle"], [3, "innerHTML"], [3, "ngClass"], [3, "placeholder"], [3, "href"], [3, "click"], [3, "focus"]],
      template: function DataBindingTutorialSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Property Binding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "This is an example of property binding with ngStyle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "This sets the innerHTML property (naturally part of the HTML) to the subTitle, which we set to equal Interpolation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Setting the class property via property binding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Setting the placeholder value of the input via property binding: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Attribute Binding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Attribute Binding Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Updated Link Attribute (Use Inspect to View)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Data-Link (Use Inspect to View)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Event Binding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataBindingTutorialSectionComponent_Template_button_click_42_listener() {
            return ctx.showAlert(10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Click!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Example of console.logging a message upon focusing on the below input box");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function DataBindingTutorialSectionComponent_Template_input_focus_50_listener() {
            return ctx.logger();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome to the Data Binding ", ctx.subTitle, " Notes!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("USER ID: ", ctx.user.userId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.colorVal));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.subTitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "c1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholderVal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.hrefVal, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.hrefVal, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("updateLink", ctx.updatedLink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.hrefVal, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("updateLink", ctx.updatedLink)("data-link", ctx.updatedLink);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".c1[_ngcontent-%COMP%] {\n  background-color: pink;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWxhbmllcm9nb2ZmL0Rlc2t0b3AvdG9Eb0FuZ3VsYXJOb3Rlcy9zcmMvYXBwL2RhdGEtYmluZGluZy10dXRvcmlhbC1zZWN0aW9uL2RhdGEtYmluZGluZy10dXRvcmlhbC1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXRhLWJpbmRpbmctdHV0b3JpYWwtc2VjdGlvbi9kYXRhLWJpbmRpbmctdHV0b3JpYWwtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXRhLWJpbmRpbmctdHV0b3JpYWwtc2VjdGlvbi9kYXRhLWJpbmRpbmctdHV0b3JpYWwtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbn0iLCIuYzEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataBindingTutorialSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-data-binding-tutorial-section',
          templateUrl: './data-binding-tutorial-section.component.html',
          styleUrls: ['./data-binding-tutorial-section.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/highlight-pipe-tutorial.pipe.ts":
  /*!*************************************************!*\
    !*** ./src/app/highlight-pipe-tutorial.pipe.ts ***!
    \*************************************************/

  /*! exports provided: HighlightPipeTutorialPipe */

  /***/
  function srcAppHighlightPipeTutorialPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightPipeTutorialPipe", function () {
      return HighlightPipeTutorialPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var HighlightPipeTutorialPipe = /*#__PURE__*/function () {
      function HighlightPipeTutorialPipe(sanitizer) {
        _classCallCheck(this, HighlightPipeTutorialPipe);

        this.sanitizer = sanitizer;
      } //we are trying to bypass the natural DOM behavior of NOT highlighting in this particular instance by importing the DomSanitizer


      _createClass(HighlightPipeTutorialPipe, [{
        key: "transform",
        value: function transform(value, cityCode) {
          //here we are saying that the value is of type string, the parameter we pass in is city, which is a string, and it returns a type of any
          if (cityCode === 'NY' || cityCode === 'NJ') {
            //we then run the sanitizer's bypassSecurityTrustHtml function and pass in the div that contains the background highlighter we want, as well as the city name so that the city name is highlighted
            return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color: pink">' + cityCode + '</div>');
          } else {
            return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color: lightgreen">' + cityCode + '</div>');
          }
        }
      }]);

      return HighlightPipeTutorialPipe;
    }();

    HighlightPipeTutorialPipe.ɵfac = function HighlightPipeTutorialPipe_Factory(t) {
      return new (t || HighlightPipeTutorialPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    HighlightPipeTutorialPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "highlightPipeTutorial",
      type: HighlightPipeTutorialPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightPipeTutorialPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'highlightPipeTutorial' // this name is how we refer to the pipe in our app

        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hover-effect.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/hover-effect.pipe.ts ***!
    \**************************************/

  /*! exports provided: HoverEffectPipe */

  /***/
  function srcAppHoverEffectPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HoverEffectPipe", function () {
      return HoverEffectPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HoverEffectPipe = /*#__PURE__*/function () {
      function HoverEffectPipe() {
        _classCallCheck(this, HoverEffectPipe);
      }

      _createClass(HoverEffectPipe, [{
        key: "transform",
        value: function transform(value) {
          return null;
        }
      }]);

      return HoverEffectPipe;
    }();

    HoverEffectPipe.ɵfac = function HoverEffectPipe_Factory(t) {
      return new (t || HoverEffectPipe)();
    };

    HoverEffectPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "hoverEffect",
      type: HoverEffectPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HoverEffectPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'hoverEffect'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 2,
      vars: 0,
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ng-for-tutorial/ng-for-tutorial.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/ng-for-tutorial/ng-for-tutorial.component.ts ***!
    \**************************************************************/

  /*! exports provided: NgForTutorialComponent */

  /***/
  function srcAppNgForTutorialNgForTutorialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgForTutorialComponent", function () {
      return NgForTutorialComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NgForTutorialComponent_tr_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var el_r1 = ctx.$implicit;
        var i_r2 = ctx.index;
        var f_r3 = ctx.first;
        var l_r4 = ctx.last;
        var e_r5 = ctx.even;
        var o_r6 = ctx.odd;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", el_r1.userId, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", el_r1.firstName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r2, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", f_r3, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", l_r4, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](e_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r6);
      }
    }

    var NgForTutorialComponent = function NgForTutorialComponent() {
      _classCallCheck(this, NgForTutorialComponent);

      this.users = [{
        id: 1,
        'name': 'John'
      }, {
        id: 2,
        'name': 'Jack'
      }];
      this.user2 = [{
        userId: 10,
        'firstName': 'Jenny'
      }, {
        userId: 4,
        'firstName': 'Johnny'
      }, {
        userId: 2,
        'firstName': 'Matt'
      }, {
        userId: 55,
        'firstName': 'Michael'
      }, {
        userId: 7,
        'firstName': 'Perry'
      }];
    };

    NgForTutorialComponent.ɵfac = function NgForTutorialComponent_Factory(t) {
      return new (t || NgForTutorialComponent)();
    };

    NgForTutorialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgForTutorialComponent,
      selectors: [["app-ng-for-tutorial"]],
      decls: 21,
      vars: 1,
      consts: [[1, "table"], [4, "ngFor", "ngForOf"]],
      template: function NgForTutorialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*ngFor Example -- the below loops through our object we created in our ts file and displays each one with the headers we provided.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Index - we will use i as a variable below to represent this");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First - we will use f as a variable below to represent this");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last - we will use l as a variable below to represent this");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Even - we will use e as a variable below to represent this");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Odd - we will use o as a variable below to represent this");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NgForTutorialComponent_tr_17_Template, 15, 7, "tr", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user2);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25nLWZvci10dXRvcmlhbC9uZy1mb3ItdHV0b3JpYWwuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgForTutorialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ng-for-tutorial',
          templateUrl: './ng-for-tutorial.component.html',
          styleUrls: ['./ng-for-tutorial.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ng-if-tutorial/ng-if-tutorial.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/ng-if-tutorial/ng-if-tutorial.component.ts ***!
    \************************************************************/

  /*! exports provided: NgIfTutorialComponent */

  /***/
  function srcAppNgIfTutorialNgIfTutorialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIfTutorialComponent", function () {
      return NgIfTutorialComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NgIfTutorialComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function NgIfTutorialComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "You have entered the else message zone!");
      }
    }

    function NgIfTutorialComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "You have entered the then message zone!");
      }
    }

    var NgIfTutorialComponent = function NgIfTutorialComponent() {
      _classCallCheck(this, NgIfTutorialComponent);

      this.showMsg = false;
    };

    NgIfTutorialComponent.ɵfac = function NgIfTutorialComponent_Factory(t) {
      return new (t || NgIfTutorialComponent)();
    };

    NgIfTutorialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgIfTutorialComponent,
      selectors: [["app-ng-if-tutorial"]],
      decls: 8,
      vars: 3,
      consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["showElseMsg", ""], ["showThenMsg", ""]],
      template: function NgIfTutorialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgIfTutorialComponent_div_0_Template, 1, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgIfTutorialComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgIfTutorialComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMsg)("ngIfThen", _r3)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25nLWlmLXR1dG9yaWFsL25nLWlmLXR1dG9yaWFsLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgIfTutorialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ng-if-tutorial',
          templateUrl: './ng-if-tutorial.component.html',
          styleUrls: ['./ng-if-tutorial.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ng-style-and-ng-class-tutorial/ng-style-and-ng-class-tutorial.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/ng-style-and-ng-class-tutorial/ng-style-and-ng-class-tutorial.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: NgStyleAndNgClassTutorialComponent */

  /***/
  function srcAppNgStyleAndNgClassTutorialNgStyleAndNgClassTutorialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgStyleAndNgClassTutorialComponent", function () {
      return NgStyleAndNgClassTutorialComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        "color": a0,
        "background-color": a1
      };
    };

    var _c1 = function _c1(a0, a1) {
      return [a0, a1];
    };

    var _c2 = function _c2() {
      return {
        "one": true,
        "two": false
      };
    };

    var NgStyleAndNgClassTutorialComponent = function NgStyleAndNgClassTutorialComponent() {
      _classCallCheck(this, NgStyleAndNgClassTutorialComponent);

      this.colorName = 'green';
      this.colorValue = 'purple';
      this.bgColorValue = '#FF69B4';
      this.clsName = 'one';
      this.clsName2 = 'two';
    };

    NgStyleAndNgClassTutorialComponent.ɵfac = function NgStyleAndNgClassTutorialComponent_Factory(t) {
      return new (t || NgStyleAndNgClassTutorialComponent)();
    };

    NgStyleAndNgClassTutorialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgStyleAndNgClassTutorialComponent,
      selectors: [["app-ng-style-and-ng-class-tutorial"]],
      decls: 20,
      vars: 15,
      consts: [[3, "ngStyle"], ["href", "#", 3, "ngStyle"], [3, "ngClass"]],
      template: function NgStyleAndNgClassTutorialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ngStyle Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Here is an example of ngStyle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Empty Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ngClass Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "First");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Dynamic!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Using expressions to set classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.colorValue, ctx.bgColorValue));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx.colorValue, ctx.bgColorValue));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "one");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c1, ctx.clsName, ctx.clsName2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".one[_ngcontent-%COMP%] {\n  background-color: #ddd;\n}\n\n.two[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWxhbmllcm9nb2ZmL0Rlc2t0b3AvdG9Eb0FuZ3VsYXJOb3Rlcy9zcmMvYXBwL25nLXN0eWxlLWFuZC1uZy1jbGFzcy10dXRvcmlhbC9uZy1zdHlsZS1hbmQtbmctY2xhc3MtdHV0b3JpYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25nLXN0eWxlLWFuZC1uZy1jbGFzcy10dXRvcmlhbC9uZy1zdHlsZS1hbmQtbmctY2xhc3MtdHV0b3JpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbmctc3R5bGUtYW5kLW5nLWNsYXNzLXR1dG9yaWFsL25nLXN0eWxlLWFuZC1uZy1jbGFzcy10dXRvcmlhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi50d28ge1xuICAgIGNvbG9yOiByZWQ7XG59IiwiLm9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi50d28ge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgStyleAndNgClassTutorialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ng-style-and-ng-class-tutorial',
          templateUrl: './ng-style-and-ng-class-tutorial.component.html',
          styleUrls: ['./ng-style-and-ng-class-tutorial.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes-tutorial/pipes-tutorial.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pipes-tutorial/pipes-tutorial.component.ts ***!
    \************************************************************/

  /*! exports provided: PipesTutorialComponent */

  /***/
  function srcAppPipesTutorialPipesTutorialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesTutorialComponent", function () {
      return PipesTutorialComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var PipesTutorialComponent = function PipesTutorialComponent() {
      _classCallCheck(this, PipesTutorialComponent);

      this.user = {
        userId: 20,
        firstName: 'Example',
        lastName: 'Tutorial',
        DOB: '10/10/1010',
        salary: 123000
      };
      this.user2 = {
        userId: 20,
        firstName: 'Second',
        lastName: 'Name',
        DOB: '10/01/1010',
        salary: 12.45
      };
    };

    PipesTutorialComponent.ɵfac = function PipesTutorialComponent_Factory(t) {
      return new (t || PipesTutorialComponent)();
    };

    PipesTutorialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PipesTutorialComponent,
      selectors: [["app-pipes-tutorial"]],
      decls: 76,
      vars: 42,
      consts: [[1, "bolder"], [1, "larger"]],
      template: function PipesTutorialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pipes Example:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lowercase & Uppercase Pipes, Respectively:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "lowercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date Pipe with a timezone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Currency Pipe with Euros:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Using JSON Pipe to display the full object:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h6", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Passing 'short' to Date pipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Passing 'longDate' to Date pipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h6", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Currency Pipe with Params:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h6", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Currency Pipe with Digit Params:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h6", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Chaining Pipes Example:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, ctx.user.firstName), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 12, ctx.user.lastName), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 14, ctx.user.DOB, "MM/dd/YYYY: z"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 17, ctx.user.salary, "EUR"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 20, ctx.user), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](39, 22, ctx.user2.DOB, "short"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](47, 25, ctx.user2.DOB, "longDate"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](55, 28, ctx.user2.salary, "INR", "code"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](63, 32, ctx.user2.salary, "EUR", "EUR", "3.0-1"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](72, 39, ctx.user.DOB, "MMMM")), "");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"]],
      styles: [".bolder[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  color: green;\n}\n\n.larger[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWxhbmllcm9nb2ZmL0Rlc2t0b3AvdG9Eb0FuZ3VsYXJOb3Rlcy9zcmMvYXBwL3BpcGVzLXR1dG9yaWFsL3BpcGVzLXR1dG9yaWFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9waXBlcy10dXRvcmlhbC9waXBlcy10dXRvcmlhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BpcGVzLXR1dG9yaWFsL3BpcGVzLXR1dG9yaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvbGRlciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuLmxhcmdlciB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufSIsIi5ib2xkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5sYXJnZXIge1xuICBmb250LXNpemU6IDIycHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesTutorialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pipes-tutorial',
          templateUrl: './pipes-tutorial.component.html',
          styleUrls: ['./pipes-tutorial.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/switch-case-tutorial/switch-case-tutorial.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/switch-case-tutorial/switch-case-tutorial.component.ts ***!
    \************************************************************************/

  /*! exports provided: SwitchCaseTutorialComponent */

  /***/
  function srcAppSwitchCaseTutorialSwitchCaseTutorialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwitchCaseTutorialComponent", function () {
      return SwitchCaseTutorialComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SwitchCaseTutorialComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Value passed is : 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SwitchCaseTutorialComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Value passed is : 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SwitchCaseTutorialComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Value passed is : 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SwitchCaseTutorialComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Value passed is : 4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SwitchCaseTutorialComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is the default value");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SwitchCaseTutorialComponent = function SwitchCaseTutorialComponent() {
      _classCallCheck(this, SwitchCaseTutorialComponent);

      this.switchValue = 'three';
    };

    SwitchCaseTutorialComponent.ɵfac = function SwitchCaseTutorialComponent_Factory(t) {
      return new (t || SwitchCaseTutorialComponent)();
    };

    SwitchCaseTutorialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SwitchCaseTutorialComponent,
      selectors: [["app-switch-case-tutorial"]],
      decls: 11,
      vars: 5,
      consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]],
      template: function SwitchCaseTutorialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Switch Case Example:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SwitchCaseTutorialComponent_div_3_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SwitchCaseTutorialComponent_div_4_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SwitchCaseTutorialComponent_div_5_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SwitchCaseTutorialComponent_div_6_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SwitchCaseTutorialComponent_div_7_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.switchValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "three");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N3aXRjaC1jYXNlLXR1dG9yaWFsL3N3aXRjaC1jYXNlLXR1dG9yaWFsLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwitchCaseTutorialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-switch-case-tutorial',
          templateUrl: './switch-case-tutorial.component.html',
          styleUrls: ['./switch-case-tutorial.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/tasks/tasks.component.ts":
  /*!******************************************!*\
    !*** ./src/app/tasks/tasks.component.ts ***!
    \******************************************/

  /*! exports provided: TasksComponent */

  /***/
  function srcAppTasksTasksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksComponent", function () {
      return TasksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TasksComponent = /*#__PURE__*/function () {
      function TasksComponent() {
        _classCallCheck(this, TasksComponent);
      }

      _createClass(TasksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TasksComponent;
    }();

    TasksComponent.ɵfac = function TasksComponent_Factory(t) {
      return new (t || TasksComponent)();
    };

    TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TasksComponent,
      selectors: [["app-tasks"]],
      decls: 2,
      vars: 0,
      template: function TasksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tasks works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tasks',
          templateUrl: './tasks.component.html',
          styleUrls: ['./tasks.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/todo/completed-tasks/completed-tasks.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/todo/completed-tasks/completed-tasks.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CompletedTasksComponent */

  /***/
  function srcAppTodoCompletedTasksCompletedTasksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompletedTasksComponent", function () {
      return CompletedTasksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CompletedTasksComponent = /*#__PURE__*/function () {
      function CompletedTasksComponent() {
        _classCallCheck(this, CompletedTasksComponent);
      }

      _createClass(CompletedTasksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CompletedTasksComponent;
    }();

    CompletedTasksComponent.ɵfac = function CompletedTasksComponent_Factory(t) {
      return new (t || CompletedTasksComponent)();
    };

    CompletedTasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CompletedTasksComponent,
      selectors: [["app-completed-tasks"]],
      decls: 2,
      vars: 0,
      template: function CompletedTasksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "HI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vY29tcGxldGVkLXRhc2tzL2NvbXBsZXRlZC10YXNrcy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompletedTasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-completed-tasks',
          templateUrl: './completed-tasks.component.html',
          styleUrls: ['./completed-tasks.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/todo/todo.module.ts":
  /*!*************************************!*\
    !*** ./src/app/todo/todo.module.ts ***!
    \*************************************/

  /*! exports provided: TodoModule */

  /***/
  function srcAppTodoTodoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoModule", function () {
      return TodoModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _completed_tasks_completed_tasks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./completed-tasks/completed-tasks.component */
    "./src/app/todo/completed-tasks/completed-tasks.component.ts");

    var TodoModule = function TodoModule() {
      _classCallCheck(this, TodoModule);
    };

    TodoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TodoModule
    });
    TodoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TodoModule_Factory(t) {
        return new (t || TodoModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TodoModule, {
        declarations: [_completed_tasks_completed_tasks_component__WEBPACK_IMPORTED_MODULE_2__["CompletedTasksComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_completed_tasks_completed_tasks_component__WEBPACK_IMPORTED_MODULE_2__["CompletedTasksComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_completed_tasks_completed_tasks_component__WEBPACK_IMPORTED_MODULE_2__["CompletedTasksComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_completed_tasks_completed_tasks_component__WEBPACK_IMPORTED_MODULE_2__["CompletedTasksComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/two-way-data-binding/two-way-data-binding.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/two-way-data-binding/two-way-data-binding.component.ts ***!
    \************************************************************************/

  /*! exports provided: TwoWayDataBindingComponent */

  /***/
  function srcAppTwoWayDataBindingTwoWayDataBindingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TwoWayDataBindingComponent", function () {
      return TwoWayDataBindingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var TwoWayDataBindingComponent = /*#__PURE__*/function () {
      function TwoWayDataBindingComponent() {
        _classCallCheck(this, TwoWayDataBindingComponent);

        this.firstName = '';
      }

      _createClass(TwoWayDataBindingComponent, [{
        key: "readFirstName",
        value: function readFirstName() {
          console.log(this.firstName);
        }
      }]);

      return TwoWayDataBindingComponent;
    }();

    TwoWayDataBindingComponent.ɵfac = function TwoWayDataBindingComponent_Factory(t) {
      return new (t || TwoWayDataBindingComponent)();
    };

    TwoWayDataBindingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TwoWayDataBindingComponent,
      selectors: [["app-two-way-data-binding"]],
      decls: 10,
      vars: 2,
      consts: [[3, "ngModel", "ngModelChange"], [3, "click"]],
      template: function TwoWayDataBindingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Two-Way Data Binding Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TwoWayDataBindingComponent_Template_input_ngModelChange_2_listener($event) {
            return ctx.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TwoWayDataBindingComponent_Template_button_click_3_listener() {
            return ctx.readFirstName();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Read First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "-----------------------------------------------");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firstName);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3by13YXktZGF0YS1iaW5kaW5nL3R3by13YXktZGF0YS1iaW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TwoWayDataBindingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-two-way-data-binding',
          templateUrl: './two-way-data-binding.component.html',
          styleUrls: ['./two-way-data-binding.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      //checks if the environment is production
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]) //sets the initial module we use
    ["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/melanierogoff/Desktop/toDoAngularNotes/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map