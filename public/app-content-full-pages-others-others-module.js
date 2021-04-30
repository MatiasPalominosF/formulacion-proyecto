(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-full-pages-others-others-module"],{

/***/ "ANmQ":
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-countdown-timer/fesm2015/ng2-countdown-timer.js ***!
  \**************************************************************************/
/*! exports provided: CountdownComponent, CountdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownComponent", function() { return CountdownComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownModule", function() { return CountdownModule; });
/* harmony import */ var D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */




function CountdownComponent_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.divider, " ");
  }
}

function CountdownComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CountdownComponent_div_1_span_3_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var time_r1 = ctx.$implicit;
    var i_r2 = ctx.index;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("measurements ", time_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.showZero && ctx_r0.displayNumbers[i_r2] < 10 ? "0" + ctx_r0.displayNumbers[i_r2].trim() : ctx_r0.displayNumbers[i_r2], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.display[i_r2 + 1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", time_r1, " ");
  }
}

var _c0 = ["*"];

var CountdownComponent = /*#__PURE__*/function () {
  function CountdownComponent() {
    var _this = this;

    Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CountdownComponent);

    this.displayString = '';
    this.showZero = false;
    this.reached = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.display = [];
    this.displayNumbers = [];
    this.wasReached = false;
    setInterval(function () {
      return _this._displayString();
    }, 100);
  }
  /**
   * @return {?}
   */


  Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CountdownComponent, [{
    key: "_displayString",
    value: function _displayString() {
      if (this.wasReached) return;

      if (typeof this.units === 'string') {
        this.units = this.units.split('|');
      }
      /** @type {?} */


      var givenDate = new Date(this.end);
      /** @type {?} */

      var now = new Date();
      /** @type {?} */

      var dateDifference = givenDate - now;

      if (dateDifference < 100 && dateDifference > 0 || dateDifference < 0 && !this.wasReached) {
        this.wasReached = true;
        this.reached.next(now);
      }
      /** @type {?} */


      var lastUnit = this.units[this.units.length - 1];
      /** @type {?} */

      var unitConstantForMillisecs = {
        year: 1000 * 60 * 60 * 24 * 7 * 4 * 12,
        month: 1000 * 60 * 60 * 24 * 7 * 4,
        weeks: 1000 * 60 * 60 * 24 * 7,
        days: 1000 * 60 * 60 * 24,
        hours: 1000 * 60 * 60,
        minutes: 1000 * 60,
        seconds: 1000
      };
      /** @type {?} */

      var unitsLeft = {};
      /** @type {?} */

      var returnText = '';
      /** @type {?} */

      var returnNumbers = '';
      /** @type {?} */

      var totalMillisecsLeft = dateDifference;
      /** @type {?} */

      var i;
      /** @type {?} */

      var unit;

      for (i in this.units) {
        if (this.units.hasOwnProperty(i)) {
          unit = this.units[i].trim();

          if (unitConstantForMillisecs[unit.toLowerCase()] === false) {
            //$interval.cancel(countDownInterval);
            throw new Error('Cannot repeat unit: ' + unit);
          }

          if (unitConstantForMillisecs.hasOwnProperty(unit.toLowerCase()) === false) {
            throw new Error('Unit: ' + unit + ' is not supported. Please use following units: year, month, weeks, days, hours, minutes, seconds, milliseconds');
          } // If it was reached, everything is zero


          unitsLeft[unit] = this.wasReached ? 0 : totalMillisecsLeft / unitConstantForMillisecs[unit.toLowerCase()];

          if (lastUnit === unit) {
            unitsLeft[unit] = Math.ceil(unitsLeft[unit]);
          } else {
            unitsLeft[unit] = Math.floor(unitsLeft[unit]);
          }

          totalMillisecsLeft -= unitsLeft[unit] * unitConstantForMillisecs[unit.toLowerCase()];
          unitConstantForMillisecs[unit.toLowerCase()] = false; // If it's less than 0, round to 0

          unitsLeft[unit] = unitsLeft[unit] > 0 ? unitsLeft[unit] : 0;
          returnNumbers += ' ' + unitsLeft[unit] + ' | ';
          returnText += ' ' + unit;
        }
      }

      if (this.text === null || !this.text) {
        this.text = {
          Year: 'Year',
          Month: 'Month',
          Weeks: 'Weeks',
          Days: 'Days',
          Hours: 'Hours',
          Minutes: 'Minutes',
          Seconds: 'Seconds',
          MilliSeconds: 'Milliseconds'
        };
      }

      this.displayString = returnText.replace('Year', this.text.Year + ' | ').replace('Month', this.text.Month + ' | ').replace('Weeks', this.text.Weeks + ' | ').replace('Days', this.text.Days + ' | ').replace('Hours', this.text.Hours + ' | ').replace('Minutes', this.text.Minutes + ' | ').replace('Seconds', this.text.Seconds);
      this.displayNumbers = returnNumbers.split('|');
      this.display = this.displayString.split('|');
    }
  }]);

  return CountdownComponent;
}();

CountdownComponent.ɵfac = function CountdownComponent_Factory(t) {
  return new (t || CountdownComponent)();
};

CountdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CountdownComponent,
  selectors: [["countdown"]],
  inputs: {
    displayString: "displayString",
    showZero: "showZero",
    units: "units",
    text: "text",
    end: "end",
    divider: "divider"
  },
  outputs: {
    reached: "reached"
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 1,
  consts: [[1, "countdown"], [3, "class", 4, "ngFor", "ngForOf"], [1, "measurements-number"], ["class", "divider", 4, "ngIf"], [1, "measurements-text"], [1, "divider"]],
  template: function CountdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CountdownComponent_div_1_Template, 6, 6, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.display);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
  styles: [".countdown[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;align-content:center;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.countdown[_ngcontent-%COMP%]   .measurements[_ngcontent-%COMP%]{flex:.1}.countdown[_ngcontent-%COMP%]   .measurements[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{float:right}"]
});
/** @nocollapse */

CountdownComponent.ctorParameters = function () {
  return [];
};

CountdownComponent.propDecorators = {
  units: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  end: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  displayString: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  text: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  divider: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  showZero: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  reached: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CountdownComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
    args: [{
      selector: 'countdown',
      template: "<div class=\"countdown\">\n  <div *ngFor=\"let time of display; let i = index\" class=\"measurements {{time}}\">\n    <p class=\"measurements-number\">\n      {{ (showZero && displayNumbers[i] < 10) ? '0' + displayNumbers[i].trim() : displayNumbers[i]}}\n    </p>\n    <span *ngIf=\"display[i+1]\" class=\"divider\"> {{divider}} </span>\n    <p class=\"measurements-text\">\n      {{time}}\n    </p>\n  </div>\n</div>\n<ng-content></ng-content>",
      styles: [".countdown{display:flex;align-items:center;justify-content:center;align-content:center;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.countdown .measurements{flex:.1}.countdown .measurements .divider{float:right}"]
    }]
  }], function () {
    return [];
  }, {
    displayString: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    showZero: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    reached: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    units: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    end: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    divider: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var CountdownModule = function CountdownModule() {
  Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CountdownModule);
};

CountdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: CountdownModule
});
CountdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function CountdownModule_Factory(t) {
    return new (t || CountdownModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CountdownModule, {
    declarations: function declarations() {
      return [CountdownComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
    },
    exports: function exports() {
      return [CountdownComponent];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CountdownModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      declarations: [CountdownComponent],
      exports: [CountdownComponent]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */




/***/ }),

/***/ "Cfgn":
/*!************************************************************!*\
  !*** ./src/app/content/full-pages/others/others.module.ts ***!
  \************************************************************/
/*! exports provided: OthersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersModule", function() { return OthersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _flat_flat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flat/flat.component */ "v6cx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _bg_image_bg_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bg-image/bg-image.component */ "jTuh");
/* harmony import */ var _bg_video_bg_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bg-video/bg-video.component */ "qtGd");
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maintenance/maintenance.component */ "G0Gc");
/* harmony import */ var _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-page/search-page.component */ "TTah");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ng2_countdown_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-countdown-timer */ "ANmQ");












var OthersModule = /** @class */ (function () {
    function OthersModule() {
    }
    OthersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OthersModule });
    OthersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OthersModule_Factory(t) { return new (t || OthersModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                ng2_countdown_timer__WEBPACK_IMPORTED_MODULE_9__["CountdownModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: 'flat',
                        component: _flat_flat_component__WEBPACK_IMPORTED_MODULE_2__["FlatComponent"]
                    },
                    {
                        path: 'bgImage',
                        component: _bg_image_bg_image_component__WEBPACK_IMPORTED_MODULE_4__["BgImageComponent"]
                    },
                    {
                        path: 'bgVideo',
                        component: _bg_video_bg_video_component__WEBPACK_IMPORTED_MODULE_5__["BgVideoComponent"]
                    },
                    {
                        path: 'maintenance',
                        component: _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_6__["MaintenanceComponent"]
                    },
                    {
                        path: 'searchPage',
                        component: _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_7__["SearchPageComponent"]
                    },
                ]),
            ], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
    return OthersModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OthersModule, { declarations: [_flat_flat_component__WEBPACK_IMPORTED_MODULE_2__["FlatComponent"], _bg_image_bg_image_component__WEBPACK_IMPORTED_MODULE_4__["BgImageComponent"], _bg_video_bg_video_component__WEBPACK_IMPORTED_MODULE_5__["BgVideoComponent"], _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_6__["MaintenanceComponent"], _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_7__["SearchPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        ng2_countdown_timer__WEBPACK_IMPORTED_MODULE_9__["CountdownModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OthersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                    ng2_countdown_timer__WEBPACK_IMPORTED_MODULE_9__["CountdownModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: 'flat',
                            component: _flat_flat_component__WEBPACK_IMPORTED_MODULE_2__["FlatComponent"]
                        },
                        {
                            path: 'bgImage',
                            component: _bg_image_bg_image_component__WEBPACK_IMPORTED_MODULE_4__["BgImageComponent"]
                        },
                        {
                            path: 'bgVideo',
                            component: _bg_video_bg_video_component__WEBPACK_IMPORTED_MODULE_5__["BgVideoComponent"]
                        },
                        {
                            path: 'maintenance',
                            component: _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_6__["MaintenanceComponent"]
                        },
                        {
                            path: 'searchPage',
                            component: _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_7__["SearchPageComponent"]
                        },
                    ]),
                ],
                declarations: [_flat_flat_component__WEBPACK_IMPORTED_MODULE_2__["FlatComponent"], _bg_image_bg_image_component__WEBPACK_IMPORTED_MODULE_4__["BgImageComponent"], _bg_video_bg_video_component__WEBPACK_IMPORTED_MODULE_5__["BgVideoComponent"], _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_6__["MaintenanceComponent"], _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_7__["SearchPageComponent"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "G0Gc":
/*!********************************************************************************!*\
  !*** ./src/app/content/full-pages/others/maintenance/maintenance.component.ts ***!
  \********************************************************************************/
/*! exports provided: MaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceComponent", function() { return MaintenanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



var MaintenanceComponent = /** @class */ (function () {
    function MaintenanceComponent() {
    }
    MaintenanceComponent.prototype.ngOnInit = function () {
    };
    MaintenanceComponent.ɵfac = function MaintenanceComponent_Factory(t) { return new (t || MaintenanceComponent)(); };
    MaintenanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaintenanceComponent, selectors: [["app-maintenance"]], decls: 32, vars: 0, consts: [["lang", "en", "data-textdirection", "ltr", 1, "loading"], ["data-open", "click", "data-menu", "vertical-menu-modern", "data-col", "1-column", 1, "vertical-layout", "vertical-menu-modern", "1-column", "bg-maintenance-image", "blank-page"], [1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], [1, "flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-md-4", "col-10", "box-shadow-2", "p-0"], [1, "card", "border-grey", "border-lighten-3", "px-1", "py-1", "box-shadow-3", "m-0"], [1, "card-body"], [1, "card-title", "text-center"], ["src", "../../../../../assets/images/logo/logo-dark-lg.png", "width", "250", "alt", "logo", 1, "img-fluid", "mx-auto", "d-block", "pt-2"], [1, "card-body", "text-center"], [1, "mt-2"], [1, "la", "la-cog", "spinner", "font-large-2"], [1, "socialIcon", "card-text", "text-center", "pt-2", "pb-2"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-facebook", 3, "routerLink"], [1, "la", "la-facebook"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-twitter", 3, "routerLink"], [1, "la", "la-twitter"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-linkedin", 3, "routerLink"], [1, "la", "la-linkedin", "font-medium-4"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-github", 3, "routerLink"], [1, "la", "la-github", "font-medium-4"]], template: function MaintenanceComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "This page is under maintenance");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "We're sorry for the inconvenience. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Please check back later.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["html[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\r\n  height: -webkit-max-content !important;\r\n  height: -moz-max-content !important;\r\n  height: max-content !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW50ZW5hbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBOEI7RUFBOUIsbUNBQThCO0VBQTlCLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJtYWludGVuYW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCBib2R5IHtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
    return MaintenanceComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaintenanceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-maintenance',
                templateUrl: './maintenance.component.html',
                styleUrls: ['./maintenance.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TTah":
/*!********************************************************************************!*\
  !*** ./src/app/content/full-pages/others/search-page/search-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");




var _c0 = function () { return ["/search/searchWebsite"]; };
var _c1 = function () { return ["/search/searchImages"]; };
var _c2 = function () { return ["/search/searchVideos"]; };
var SearchPageComponent = /** @class */ (function () {
    function SearchPageComponent() {
    }
    SearchPageComponent.prototype.ngOnInit = function () {
    };
    SearchPageComponent.ɵfac = function SearchPageComponent_Factory(t) { return new (t || SearchPageComponent)(); };
    SearchPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchPageComponent, selectors: [["app-search-page"]], decls: 48, vars: 8, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], [1, "row", "full-height-vh-with-nav"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-lg-6", "col-10"], ["src", "../../../../../assets/images/logo/logo-dark-lg.png", "alt", "Modern Search", 1, "img-fluid", "mx-auto", "d-block", "pb-3", "pt-4", "width-65-per"], [1, "form-group", "position-relative"], ["type", "text", "id", "iconLeft1", "placeholder", "Explore Modern ...", 1, "form-control", "form-control-xl", "input-xl"], [1, "form-control-position"], [1, "feather", "ft-mic", "font-medium-4"], [1, "row", "py-2"], [1, "col-12", "text-center"], [1, "btn", "btn-primary", "btn-md", "mb-1", "right_space", 3, "routerLink"], [1, "feather", "ft-search"], ["ngbDropdown", "", 1, "dropdown"], ["ngbDropdownToggle", "", "id", "btnSearchDrop", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "true", 1, "btn", "btn-warning", "btn-md", "dropdown-toggle", "dropdown-menu-right", "mb-1"], [1, "la", "la-cog"], ["ngbDropdownMenu", "", "aria-labelledby", "btnSearchDrop", 1, "dropdown-menu", "mt-1", "dropdown-menu-right"], [1, "dropdown-item", 3, "routerLink"], [1, "feather", "ft-globe"], [1, "la", "la-file-image-o"], [1, "feather", "ft-video"], [1, "la", "la-map-o"], [1, "dropdown-divider", "block"], [1, "la", "la-smile-o"], [1, "row", "py-1"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-facebook", 3, "routerLink"], [1, "la", "la-facebook"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-twitter", 3, "routerLink"], [1, "la", "la-twitter"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-linkedin", 3, "routerLink"], [1, "la", "la-linkedin", "font-medium-4"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-github", 3, "routerLink"], [1, "la", "la-github", "font-medium-4"]], template: function SearchPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "fieldset", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Modern Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Advanced search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Web");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Images");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Videos");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Maps");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " I'm Feeling Lucky");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"]], styles: [".dropdown-menu[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 14px !important;\r\n    left: 0px !important;\r\n    transform: translate3d(11px, -276px, 0px);\r\n}\r\n\r\n.right_space[_ngcontent-%COMP%] {\r\n  margin-right: 0.5rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .content-wrapper {\r\n  padding: 2.2rem !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQix5Q0FBeUM7QUFDN0M7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic2VhcmNoLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDExcHgsIC0yNzZweCwgMHB4KTtcclxufVxyXG5cclxuLnJpZ2h0X3NwYWNlIHtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgcGFkZGluZzogMi4ycmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
    return SearchPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-page',
                templateUrl: './search-page.component.html',
                styleUrls: ['./search-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jTuh":
/*!**************************************************************************!*\
  !*** ./src/app/content/full-pages/others/bg-image/bg-image.component.ts ***!
  \**************************************************************************/
/*! exports provided: BgImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgImageComponent", function() { return BgImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng2_countdown_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-countdown-timer */ "ANmQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




var BgImageComponent = /** @class */ (function () {
    function BgImageComponent() {
        this.text = {
            Weeks: 'Weeks',
            Days: 'Days',
            Hours: 'Hours',
            Minutes: 'Minutes',
            Seconds: 'Seconds',
        };
    }
    BgImageComponent.prototype.ngOnInit = function () {
    };
    BgImageComponent.ɵfac = function BgImageComponent_Factory(t) { return new (t || BgImageComponent)(); };
    BgImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BgImageComponent, selectors: [["app-bg-image"]], decls: 27, vars: 0, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], [1, "flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-md-6", "col-10", "p-0"], [1, "card", "card-transparent", "box-shadow-0", "border-0"], [1, "card-content"], [1, "text-center"], [1, "card-text", "pb-2", "white"], ["src", "../../../../../assets/images/logo/logo-light-lg.png", "width", "300", "alt", "bg-img", 1, "img-responsive", "block", "width-300", "mx-auto"], ["units", "Weeks | Days | Hours | Minutes | Seconds", "end", "October 24, 2019", 1, "card-text", "getting-started", "pt-1", "mt-2", "white", "d-inline-block"], [1, "col-12", "pt-1"], [1, "card-text", "lead", "white"], [1, "col-12", "text-center", "pt-2"], [1, "socialIcon", "card-text"], [3, "routerLink"], [1, "la", "la-facebook-square", "white"], [1, "la", "la-twitter-square", "white"], [1, "la", "la-google-plus-square", "white"], [1, "la", "la-linkedin-square", "white"]], template: function BgImageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "WE ARE LAUNCHING SOON.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "countdown", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Our website is under construction.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [ng2_countdown_timer__WEBPACK_IMPORTED_MODULE_1__["CountdownComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["html[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\r\n  height: -webkit-max-content !important;\r\n  height: -moz-max-content !important;\r\n  height: max-content !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .fixed-navbar {\r\n  padding-top: 0rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .countdown {\r\n  color: white !important;\r\n  font-size: 3rem !important;\r\n  display: block !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .measurements-text {\r\n  font-size: 1.5rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .countdown .measurements {\r\n  padding: 1.5rem !important;\r\n  float: left;\r\n  border-radius: 0.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJnLWltYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBOEI7RUFBOUIsbUNBQThCO0VBQTlCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkIiLCJmaWxlIjoiYmctaW1hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwgYm9keSB7XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmZpeGVkLW5hdmJhciB7XHJcbiAgcGFkZGluZy10b3A6IDByZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jb3VudGRvd24ge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogM3JlbSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWVhc3VyZW1lbnRzLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY291bnRkb3duIC5tZWFzdXJlbWVudHMge1xyXG4gIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG4iXX0= */"] });
    return BgImageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BgImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bg-image',
                templateUrl: './bg-image.component.html',
                styleUrls: ['./bg-image.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "qtGd":
/*!**************************************************************************!*\
  !*** ./src/app/content/full-pages/others/bg-video/bg-video.component.ts ***!
  \**************************************************************************/
/*! exports provided: BgVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgVideoComponent", function() { return BgVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng2_countdown_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-countdown-timer */ "ANmQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




var BgVideoComponent = /** @class */ (function () {
    function BgVideoComponent() {
        this.text = {
            Weeks: 'Weeks',
            Days: 'Days',
            Hours: 'Hours',
            Minutes: 'Minutes',
            Seconds: 'Seconds',
        };
    }
    BgVideoComponent.prototype.ngOnInit = function () {
    };
    BgVideoComponent.ɵfac = function BgVideoComponent_Factory(t) { return new (t || BgVideoComponent)(); };
    BgVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BgVideoComponent, selectors: [["app-bg-video"]], decls: 26, vars: 0, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], [1, "flexbox-container"], [1, "col-12"], [1, "card", "card-transparent", "box-shadow-0", "border-0", "coming-soon-content"], [1, "card-content"], [1, "text-center"], [1, "card-text", "pt-1", "pb-2", "white"], ["src", "../../../../../assets/images/logo/logo-light-lg.png", "width", "300", "alt", "bg-img", 1, "img-responsive", "block", "width-300", "mx-auto"], ["units", "Weeks | Days | Hours | Minutes | Seconds", "end", "August 24, 2019", 1, "card-text", "getting-started", "pt-1", "mt-2", "white", "d-inline-block"], [1, "col-12", "pt-1"], [1, "card-text", "lead", "white"], [1, "col-12", "text-center", "pt-2"], [1, "socialIcon"], [3, "routerLink"], [1, "la", "la-facebook-square", "white"], [1, "la", "la-twitter-square", "white"], [1, "la", "la-google-plus-square", "white"], [1, "la", "la-linkedin-square", "white"]], template: function BgVideoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "WE ARE LAUNCHING SOON.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "countdown", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Our website is under construction.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [ng2_countdown_timer__WEBPACK_IMPORTED_MODULE_1__["CountdownComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["html[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\r\n  height: -webkit-max-content !important;\r\n  height: -moz-max-content !important;\r\n  height: max-content !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .fixed-navbar {\r\n  padding-top: 0rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .countdown {\r\n  color: white !important;\r\n  font-size: 3rem !important;\r\n  display: block !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .measurements-text {\r\n  font-size: 1.5rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .countdown .measurements {\r\n  padding: 1.5rem !important;\r\n  float: left;\r\n  border-radius: 0.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJnLXZpZGVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBOEI7RUFBOUIsbUNBQThCO0VBQTlCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkIiLCJmaWxlIjoiYmctdmlkZW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwgYm9keSB7XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmZpeGVkLW5hdmJhciB7XHJcbiAgcGFkZGluZy10b3A6IDByZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jb3VudGRvd24ge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogM3JlbSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWVhc3VyZW1lbnRzLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY291bnRkb3duIC5tZWFzdXJlbWVudHMge1xyXG4gIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG4iXX0= */"] });
    return BgVideoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BgVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bg-video',
                templateUrl: './bg-video.component.html',
                styleUrls: ['./bg-video.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "v6cx":
/*!******************************************************************!*\
  !*** ./src/app/content/full-pages/others/flat/flat.component.ts ***!
  \******************************************************************/
/*! exports provided: FlatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatComponent", function() { return FlatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng2_countdown_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-countdown-timer */ "ANmQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




var FlatComponent = /** @class */ (function () {
    function FlatComponent() {
        this.text = {
            Weeks: 'Weeks',
            Days: 'Days',
            Hours: 'Hours',
            Minutes: 'Minutes',
            Seconds: 'Seconds',
        };
    }
    FlatComponent.prototype.ngOnInit = function () {
    };
    FlatComponent.ɵfac = function FlatComponent_Factory(t) { return new (t || FlatComponent)(); };
    FlatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlatComponent, selectors: [["app-flat"]], decls: 27, vars: 1, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], [1, "flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-md-6", "col-10", "p-0"], [1, "card", "card-transparent", "box-shadow-0", "border-0"], [1, "card-content"], [1, "text-center"], [1, "card-text", "pb-2", "white"], ["src", "../../../../../assets/images/logo/logo-light-lg.png", "width", "300", "alt", "bg-img", 1, "img-responsive", "block", "width-300", "mx-auto"], ["units", "Weeks | Days | Hours | Minutes | Seconds", "end", "October 24, 2019", 1, "card-text", "getting-started", "pt-1", "mt-2", "white", "d-inline-block", 3, "text"], [1, "col-12", "pt-1"], [1, "card-text", "lead", "white"], [1, "col-12", "text-center", "pt-2"], [1, "socialIcon", "card-text"], [3, "routerLink"], [1, "la", "la-facebook-square", "white"], [1, "la", "la-twitter-square", "white"], [1, "la", "la-google-plus-square", "white"], [1, "la", "la-linkedin-square", "white"]], template: function FlatComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "WE ARE LAUNCHING SOON.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "countdown", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Our website is under construction.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx.text);
        } }, directives: [ng2_countdown_timer__WEBPACK_IMPORTED_MODULE_1__["CountdownComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["html[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\r\n  height: -webkit-max-content !important;\r\n  height: -moz-max-content !important;\r\n  height: max-content !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .fixed-navbar {\r\n  padding-top: 0rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .countdown {\r\n  color: white !important;\r\n  font-size: 3rem !important;\r\n  display: block !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .measurements-text {\r\n  font-size: 1.5rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .countdown .measurements {\r\n  padding: 1.5rem !important;\r\n  float: left;\r\n  border-radius: 0.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUE4QjtFQUE5QixtQ0FBOEI7RUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJmbGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIGJvZHkge1xyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5maXhlZC1uYXZiYXIge1xyXG4gIHBhZGRpbmctdG9wOiAwcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY291bnRkb3duIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDNyZW0gIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1lYXN1cmVtZW50cy10ZXh0IHtcclxuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNvdW50ZG93biAubWVhc3VyZW1lbnRzIHtcclxuICBwYWRkaW5nOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICBmbG9hdDogbGVmdDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuIl19 */"] });
    return FlatComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-flat',
                templateUrl: './flat.component.html',
                styleUrls: ['./flat.component.css']
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=app-content-full-pages-others-others-module.js.map