function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-harborcontrol-harborcontrol-module"], {
  /***/
  "./src/app/models/enums.ts":
  /*!*********************************!*\
    !*** ./src/app/models/enums.ts ***!
    \*********************************/

  /*! exports provided: BoatTypes, BoatStatus */

  /***/
  function srcAppModelsEnumsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoatTypes", function () {
      return BoatTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoatStatus", function () {
      return BoatStatus;
    });

    var BoatTypes;

    (function (BoatTypes) {
      BoatTypes[BoatTypes["CargoShip"] = 1] = "CargoShip";
      BoatTypes[BoatTypes["SailBoat"] = 2] = "SailBoat";
      BoatTypes[BoatTypes["SpeedBoat"] = 3] = "SpeedBoat";
    })(BoatTypes || (BoatTypes = {}));

    var BoatStatus;

    (function (BoatStatus) {
      BoatStatus[BoatStatus["InQueue"] = 1] = "InQueue";
      BoatStatus[BoatStatus["InProgress"] = 2] = "InProgress";
      BoatStatus[BoatStatus["Completed"] = 3] = "Completed";
      BoatStatus[BoatStatus["CannotProcess"] = 4] = "CannotProcess";
    })(BoatStatus || (BoatStatus = {}));
    /***/

  },

  /***/
  "./src/app/modules/harborcontrol/harborcontrol-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/harborcontrol/harborcontrol-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: HarborcontrolRoutingModule */

  /***/
  function srcAppModulesHarborcontrolHarborcontrolRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HarborcontrolRoutingModule", function () {
      return HarborcontrolRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _harborcontrol_harborcontrol_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./harborcontrol/harborcontrol.component */
    "./src/app/modules/harborcontrol/harborcontrol/harborcontrol.component.ts"); //#region Angular Imports
    //#endregion
    //#region Harbor Imports
    //#endregion


    var routes = [{
      path: '',
      component: _harborcontrol_harborcontrol_component__WEBPACK_IMPORTED_MODULE_2__["HarborControlComponent"]
    }];

    var HarborcontrolRoutingModule = function HarborcontrolRoutingModule() {
      _classCallCheck(this, HarborcontrolRoutingModule);
    };

    HarborcontrolRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: HarborcontrolRoutingModule
    });
    HarborcontrolRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function HarborcontrolRoutingModule_Factory(t) {
        return new (t || HarborcontrolRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](HarborcontrolRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HarborcontrolRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/harborcontrol/harborcontrol.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/harborcontrol/harborcontrol.module.ts ***!
    \***************************************************************/

  /*! exports provided: HarborcontrolModule */

  /***/
  function srcAppModulesHarborcontrolHarborcontrolModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HarborcontrolModule", function () {
      return HarborcontrolModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _harborcontrol_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./harborcontrol-routing.module */
    "./src/app/modules/harborcontrol/harborcontrol-routing.module.ts");
    /* harmony import */


    var _harborcontrol_harborcontrol_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./harborcontrol/harborcontrol.component */
    "./src/app/modules/harborcontrol/harborcontrol/harborcontrol.component.ts"); //#region Angular Imports
    //#endregion
    //#region Harbor Imports
    //#endregion


    var HarborcontrolModule = function HarborcontrolModule() {
      _classCallCheck(this, HarborcontrolModule);
    };

    HarborcontrolModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: HarborcontrolModule
    });
    HarborcontrolModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function HarborcontrolModule_Factory(t) {
        return new (t || HarborcontrolModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _harborcontrol_routing_module__WEBPACK_IMPORTED_MODULE_2__["HarborcontrolRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](HarborcontrolModule, {
        declarations: [_harborcontrol_harborcontrol_component__WEBPACK_IMPORTED_MODULE_3__["HarborControlComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _harborcontrol_routing_module__WEBPACK_IMPORTED_MODULE_2__["HarborcontrolRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HarborcontrolModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_harborcontrol_harborcontrol_component__WEBPACK_IMPORTED_MODULE_3__["HarborControlComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _harborcontrol_routing_module__WEBPACK_IMPORTED_MODULE_2__["HarborcontrolRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/harborcontrol/harborcontrol/harborcontrol.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/modules/harborcontrol/harborcontrol/harborcontrol.component.ts ***!
    \********************************************************************************/

  /*! exports provided: HarborControlComponent */

  /***/
  function srcAppModulesHarborcontrolHarborcontrolHarborcontrolComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HarborControlComponent", function () {
      return HarborControlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_models_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/enums */
    "./src/app/models/enums.ts");
    /* harmony import */


    var src_app_cores_Services_wind_wind_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/cores/Services/wind/wind.service */
    "./src/app/cores/Services/wind/wind.service.ts");
    /* harmony import */


    var src_app_cores_Services_boat_boat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/cores/Services/boat/boat.service */
    "./src/app/cores/Services/boat/boat.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); //#region Angular Imports


    function HarborControlComponent_div_21_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var boat_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r2.getBoatType(boat_r3.boatType));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](boat_r3.boatSpeed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r2.getBoatStatus(boat_r3.boatStatus));
      }
    }

    function HarborControlComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "table", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "thead", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Boat Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Boat Speed (KM/h)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "BoatStatus");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, HarborControlComponent_div_21_tr_11_Template, 7, 3, "tr", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.boatList);
      }
    }

    function HarborControlComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " There are no boats.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    } //#endregion


    var HarborControlComponent = /*#__PURE__*/function () {
      //#endregion
      //#region  Constructor
      function HarborControlComponent(windService, boatService) {
        _classCallCheck(this, HarborControlComponent);

        this.windService = windService;
        this.boatService = boatService; //#region Public Variables

        this.windSpeed = 0;
        this.boatList = [];
      } //#endregion
      //#region  Angular Events


      _createClass(HarborControlComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getWindSpeed();
        } //#endregion
        // Get wind speed using open weather api

      }, {
        key: "getWindSpeed",
        value: function getWindSpeed() {
          var _this = this;

          this.windService.getWindDetails().subscribe(function (res) {
            _this.windSpeed = +parseFloat(String(res['wind']['speed'] * 18 / 5)).toFixed(2);
          }, function (error) {
            alert('Error while getting the wind speed.');
          });
        } //#region public methods
        // Generate random boats

      }, {
        key: "generateBoat",
        value: function generateBoat() {
          var _this2 = this;

          if (+this.count > 0) {
            var parms = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('count', "".concat(+this.count));
            this.boatService.generateRandomBoats(parms).subscribe(function (res) {
              _this2.boatList = _this2.boatList.concat(res);
              _this2.count = undefined;

              if (!_this2.boatList.some(function (x) {
                return x.boatStatus === src_app_models_enums__WEBPACK_IMPORTED_MODULE_2__["BoatStatus"].InProgress;
              })) {
                _this2.processBoats();
              }
            }, function (error) {
              alert('Error while generating the boats');
            });
          } else {
            alert('Please Enter a number greater than 0.');
          }
        } // getting boat status

      }, {
        key: "getBoatStatus",
        value: function getBoatStatus(status) {
          switch (status) {
            case src_app_models_enums__WEBPACK_IMPORTED_MODULE_2__["BoatStatus"].InProgress:
              return 'In Progress';

            case src_app_models_enums__WEBPACK_IMPORTED_MODULE_2__["BoatStatus"].InQueue:
              return 'In Queue';

            case src_app_models_enums__WEBPACK_IMPORTED_MODULE_2__["BoatStatus"].Completed:
              return 'Completed';

            case src_app_models_enums__WEBPACK_IMPORTED_MODULE_2__["BoatStatus"].CannotProcess:
              return 'You can not enter in perimeter.';
          }
        } // Getting boat type

      }, {
        key: "getBoatType",
        value: function getBoatType(boatType) {
          switch (boatType) {
            case src_app_models_enums__WEBPACK_IMPORTED_MODULE_2__["BoatTypes"].CargoShip:
              return 'Cargo Ship';

            case src_app_models_enums__WEBPACK_IMPORTED_MODULE_2__["BoatTypes"].SailBoat:
              return 'Sailboat';

            case src_app_models_enums__WEBPACK_IMPORTED_MODULE_2__["BoatTypes"].SpeedBoat:
              return 'Speedboat';
          }
        } // Refresh wind speed

      }, {
        key: "refresh",
        value: function refresh() {
          this.getWindSpeed();
        } //#endregion
        //#region Private Methods
        // Method which allow boats to enter in perimeter

      }, {
        key: "processBoats",
        value: function processBoats() {
          var _this3 = this;

          var boat = this.boatList.find(function (x) {
            return x.boatStatus === src_app_models_enums__WEBPACK_IMPORTED_MODULE_2__["BoatStatus"].InQueue;
          });

          if (boat.boatType === src_app_models_enums__WEBPACK_IMPORTED_MODULE_2__["BoatTypes"].SailBoat && (this.windSpeed < 10 || this.windSpeed > 30)) {
            boat.boatStatus = src_app_models_enums__WEBPACK_IMPORTED_MODULE_2__["BoatStatus"].CannotProcess;
            this.processBoats();
          } else {
            boat.boatStatus = src_app_models_enums__WEBPACK_IMPORTED_MODULE_2__["BoatStatus"].InProgress;
            setTimeout(function () {
              boat.boatStatus = src_app_models_enums__WEBPACK_IMPORTED_MODULE_2__["BoatStatus"].Completed;

              if (_this3.boatList.some(function (x) {
                return x.boatStatus === src_app_models_enums__WEBPACK_IMPORTED_MODULE_2__["BoatStatus"].InQueue;
              })) {
                _this3.processBoats();
              }
            }, boat.duration * 1000);
          }
        }
      }]);

      return HarborControlComponent;
    }();

    HarborControlComponent.??fac = function HarborControlComponent_Factory(t) {
      return new (t || HarborControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_cores_Services_wind_wind_service__WEBPACK_IMPORTED_MODULE_3__["WindService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_cores_Services_boat_boat_service__WEBPACK_IMPORTED_MODULE_4__["BoatService"]));
    };

    HarborControlComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HarborControlComponent,
      selectors: [["app-harborcontrol"]],
      decls: 23,
      vars: 4,
      consts: [[1, "wrapper"], [1, "card", "col-lg-12", "mt-2"], [1, "card-body"], [1, "row", "col-lg-12"], [1, "btn", "btn-primary", "ml-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-refresh"], [1, "row", "col-lg-12", "mt-3"], ["type", "text", 1, "form-control", "col-lg-2", "ml-2", 3, "ngModel", "ngModelChange"], ["aria-hidden", "true", 1, "fa", "fa-ship"], ["class", "col-lg-12", 4, "ngIf"], [4, "ngIf"], [1, "col-lg-12"], ["mdbTable", "", "striped", "true", 1, "table", "col-lg-12"], [1, "black", "white-text"], ["scope", "col col-lg-3"], ["scope", "col col-lg-4 "], ["mdbTableCol", "", 4, "ngFor", "ngForOf"], ["mdbTableCol", ""], ["scope", "row"]],
      template: function HarborControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Current Wind Speed : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HarborControlComponent_Template_button_click_9_listener() {
            return ctx.refresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Refresh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Enter the number of boats to generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function HarborControlComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.count = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HarborControlComponent_Template_button_click_17_listener() {
            return ctx.generateBoat();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Generate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, HarborControlComponent_div_21_Template, 12, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, HarborControlComponent_div_22_Template, 4, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.windSpeed, " kmph ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.boatList.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.boatList.length == 0);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGFyYm9yY29udHJvbC9oYXJib3Jjb250cm9sL2hhcmJvcmNvbnRyb2wuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HarborControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-harborcontrol',
          templateUrl: './harborcontrol.component.html',
          styleUrls: ['./harborcontrol.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_cores_Services_wind_wind_service__WEBPACK_IMPORTED_MODULE_3__["WindService"]
        }, {
          type: src_app_cores_Services_boat_boat_service__WEBPACK_IMPORTED_MODULE_4__["BoatService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-harborcontrol-harborcontrol-module-es5.js.map