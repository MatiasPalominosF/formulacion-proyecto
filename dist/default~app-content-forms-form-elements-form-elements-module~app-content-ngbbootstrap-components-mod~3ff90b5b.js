(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-content-forms-form-elements-form-elements-module~app-content-ngbbootstrap-components-mod~3ff90b5b"],{

/***/ "IaNp":
/*!********************************************************!*\
  !*** ./node_modules/ngx-ui-switch/ui-switch.es2015.js ***!
  \********************************************************/
/*! exports provided: UiSwitchComponent, UiSwitchModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSwitchComponent", function() { return UiSwitchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSwitchModule", function() { return UiSwitchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return UI_SWITCH_OPTIONS; });
/* harmony import */ var D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */




function UiSwitchComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r0.getColor("checkedTextColor"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.checkedLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r0.getColor("uncheckedTextColor"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.uncheckedLabel);
  }
}

var _c0 = ["*"];
var UI_SWITCH_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('UI_SWITCH_OPTIONS');
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */

var UI_SWITCH_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],

  /* tslint:disable-next-line: no-use-before-declare */
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
  /**
  * @return {?}
  */
  function () {
    return UiSwitchComponent;
  }),
  multi: true
};

var UiSwitchComponent = /*#__PURE__*/function () {
  /**
   * @param {?=} config
   * @param {?=} cdr
   */
  function UiSwitchComponent() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cdr = arguments.length > 1 ? arguments[1] : undefined;

    Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UiSwitchComponent);

    this.cdr = cdr;
    /**
     * Emits changed value
     */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    /**
     * Emits DOM event
     */

    this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    /**
     * Emits changed value
     */

    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();

    this.onTouchedCallback =
    /**
    * @param {?} v
    * @return {?}
    */
    function (v) {};

    this.onChangeCallback =
    /**
    * @param {?} v
    * @return {?}
    */
    function (v) {};

    this.size = config && config.size || 'medium';
    this.color = config && config.color;
    this.switchOffColor = config && config.switchOffColor;
    this.switchColor = config && config.switchColor;
    this.defaultBgColor = config && config.defaultBgColor;
    this.defaultBoColor = config && config.defaultBoColor;
    this.checkedLabel = config && config.checkedLabel;
    this.uncheckedLabel = config && config.uncheckedLabel;
    this.checkedTextColor = config && config.checkedTextColor;
    this.uncheckedTextColor = config && config.uncheckedTextColor;
  }
  /**
   * @param {?} v
   * @return {?}
   */


  Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UiSwitchComponent, [{
    key: "getColor",

    /**
     * @param {?=} flag
     * @return {?}
     */
    value: function getColor() {
      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (flag === 'borderColor') {
        return this.defaultBoColor;
      }

      if (flag === 'switchColor') {
        if (this.reverse) {
          return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
        }

        return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
      }

      if (flag === 'checkedTextColor') {
        return this.reverse ? this.uncheckedTextColor : this.checkedTextColor;
      }

      if (flag === 'uncheckedTextColor') {
        return this.reverse ? this.checkedTextColor : this.uncheckedTextColor;
      }

      if (this.reverse) {
        return !this.checked ? this.color : this.defaultBgColor;
      }

      return this.checked ? this.color : this.defaultBgColor;
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onClick",
    value: function onClick(event) {
      if (this.disabled) {
        return;
      }

      this.checked = !this.checked; // Component events

      this.change.emit(this.checked);
      this.valueChange.emit(this.checked);
      this.changeEvent.emit(event); // value accessor callbacks

      this.onChangeCallback(this.checked);
      this.onTouchedCallback(this.checked);
      this.cdr.markForCheck();
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onToggle",
    value: function onToggle(event) {
      var _this = this;

      if (this.beforeChange) {
        this._beforeChange = this.beforeChange.subscribe(
        /**
        * @param {?} confirm
        * @return {?}
        */
        function (confirm) {
          if (confirm) {
            _this.onClick(event);
          }
        });
      } else {
        this.onClick(event);
      }
    }
    /**
     * @param {?} obj
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(obj) {
      if (obj !== this.checked) {
        this.checked = !!obj;
      }

      if (this.cdr) {
        this.cdr.markForCheck();
      }
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this._beforeChange) {
        this._beforeChange.unsubscribe();
      }
    }
  }, {
    key: "checked",
    set: function set(v) {
      this._checked = v !== false;
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._checked;
    }
    /**
     * @param {?} v
     * @return {?}
     */

  }, {
    key: "disabled",
    set: function set(v) {
      this._disabled = v !== false;
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._disabled;
    }
    /**
     * @param {?} v
     * @return {?}
     */

  }, {
    key: "reverse",
    set: function set(v) {
      this._reverse = v !== false;
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._reverse;
    }
    /**
     * @param {?} v
     * @return {?}
     */

  }, {
    key: "loading",
    set: function set(v) {
      this._loading = v !== false;
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._loading;
    }
  }]);

  return UiSwitchComponent;
}();

UiSwitchComponent.ɵfac = function UiSwitchComponent_Factory(t) {
  return new (t || UiSwitchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](UI_SWITCH_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]));
};

UiSwitchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: UiSwitchComponent,
  selectors: [["ui-switch"]],
  hostBindings: function UiSwitchComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UiSwitchComponent_click_HostBindingHandler($event) {
        return ctx.onToggle($event);
      });
    }
  },
  inputs: {
    size: "size",
    color: "color",
    switchOffColor: "switchOffColor",
    switchColor: "switchColor",
    defaultBgColor: "defaultBgColor",
    defaultBoColor: "defaultBoColor",
    checkedLabel: "checkedLabel",
    uncheckedLabel: "uncheckedLabel",
    checkedTextColor: "checkedTextColor",
    uncheckedTextColor: "uncheckedTextColor",
    checked: "checked",
    disabled: "disabled",
    reverse: "reverse",
    loading: "loading",
    beforeChange: "beforeChange"
  },
  outputs: {
    change: "change",
    changeEvent: "changeEvent",
    valueChange: "valueChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([UI_SWITCH_CONTROL_VALUE_ACCESSOR])],
  ngContentSelectors: _c0,
  decls: 4,
  vars: 19,
  consts: [[1, "switch"], ["class", "switch-pane", 4, "ngIf"], [1, "switch-pane"], [1, "switch-label-checked"], [1, "switch-label-unchecked"]],
  template: function UiSwitchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UiSwitchComponent_span_1_Template, 5, 6, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx.getColor())("border-color", ctx.getColor("borderColor"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("checked", ctx.checked)("disabled", ctx.disabled)("loading", ctx.loading)("switch-large", ctx.size === "large")("switch-medium", ctx.size === "medium")("switch-small", ctx.size === "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkedLabel || ctx.uncheckedLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", ctx.getColor("switchColor"));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
  encapsulation: 2
});
/** @nocollapse */

UiSwitchComponent.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
      args: [UI_SWITCH_OPTIONS]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
  }];
};

UiSwitchComponent.propDecorators = {
  size: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  color: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  switchOffColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  switchColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  defaultBgColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  defaultBoColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  checkedLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  uncheckedLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  checkedTextColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  uncheckedTextColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  beforeChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  checked: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  reverse: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  loading: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  change: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  changeEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  valueChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  onToggle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['click', ['$event']]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UiSwitchComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
    args: [{
      selector: 'ui-switch',
      template: "\n    <span class=\"switch\"\n    [class.checked]=\"checked\"\n    [class.disabled]=\"disabled\"\n    [class.loading]=\"loading\"\n    [class.switch-large]=\"size === 'large'\"\n    [class.switch-medium]=\"size === 'medium'\"\n    [class.switch-small]=\"size === 'small'\"\n    [style.background-color]=\"getColor()\"\n    [style.border-color]=\"getColor('borderColor')\"\n    >\n    <span class=\"switch-pane\" *ngIf=\"checkedLabel || uncheckedLabel\">\n      <span class=\"switch-label-checked\"\n      [style.color]=\"getColor('checkedTextColor')\">{{ this.checkedLabel }}</span>\n      <span class=\"switch-label-unchecked\"\n      [style.color]=\"getColor('uncheckedTextColor')\">{{ this.uncheckedLabel }}</span>\n    </span>\n    <small [style.background]=\"getColor('switchColor')\">\n      <ng-content></ng-content>\n    </small>\n    </span>\n  ",
      providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
        args: [UI_SWITCH_OPTIONS]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
    }];
  }, {
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    changeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    switchOffColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    switchColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    defaultBgColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    defaultBoColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    checkedLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    uncheckedLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    checkedTextColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    uncheckedTextColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    checked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    reverse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['click', ['$event']]
    }],
    beforeChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var UiSwitchModule = /*#__PURE__*/function () {
  function UiSwitchModule() {
    Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UiSwitchModule);
  }

  Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UiSwitchModule, null, [{
    key: "forRoot",

    /**
     * @param {?} config
     * @return {?}
     */
    value: function forRoot(config) {
      return {
        ngModule: UiSwitchModule,
        providers: [{
          provide: UI_SWITCH_OPTIONS,
          useValue: config || {}
        }]
      };
    }
  }]);

  return UiSwitchModule;
}();

UiSwitchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: UiSwitchModule
});
UiSwitchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function UiSwitchModule_Factory(t) {
    return new (t || UiSwitchModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiSwitchModule, {
    declarations: function declarations() {
      return [UiSwitchComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]];
    },
    exports: function exports() {
      return [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], UiSwitchComponent];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UiSwitchModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      declarations: [UiSwitchComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], UiSwitchComponent]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default~app-content-forms-form-elements-form-elements-module~app-content-ngbbootstrap-components-mod~3ff90b5b.js.map