(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-content-table-datatables-datatables-module~app-content-table-datatablesext-datatablesext-module"],{

/***/ "2e3P":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-window-token/fesm2015/ngx-window-token.js ***!
  \********************************************************************/
/*! exports provided: WINDOW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */

var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowToken', typeof window !== 'undefined' && window.document ? {
  providedIn: 'root',
  factory:
  /**
  * @return {?}
  */
  function factory() {
    return window;
  }
} : undefined);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ "IbkX":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js ***!
  \**************************************************************/
/*! exports provided: ClipboardService, ClipboardDirective, ClipboardModule, ClipboardIfSupportedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return ClipboardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardDirective", function() { return ClipboardDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardModule", function() { return ClipboardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardIfSupportedDirective", function() { return ClipboardIfSupportedDirective; });
/* harmony import */ var D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var ngx_window_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-window-token */ "2e3P");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * The following code is heavily copied from https://github.com/zenorocha/clipboard.js
 */



var ClipboardService = /*#__PURE__*/function () {
  /**
   * @param {?} document
   * @param {?} window
   */
  function ClipboardService(document, window) {
    Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClipboardService);

    this.document = document;
    this.window = window;
    this.copySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    this.copyResponse$ = this.copySubject.asObservable();
    this.config = {};
  }
  /**
   * @param {?} config
   * @return {?}
   */


  Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ClipboardService, [{
    key: "configure",
    value: function configure(config) {
      this.config = config;
    }
    /**
     * @param {?} content
     * @return {?}
     */

  }, {
    key: "copy",
    value: function copy(content) {
      if (!this.isSupported || !content) {
        return this.pushCopyResponse({
          isSuccess: false,
          content: content
        });
      }
      /** @type {?} */


      var copyResult = this.copyFromContent(content);

      if (copyResult) {
        return this.pushCopyResponse({
          content: content,
          isSuccess: copyResult
        });
      }

      return this.pushCopyResponse({
        isSuccess: false,
        content: content
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "isTargetValid",

    /**
     * @param {?} element
     * @return {?}
     */
    value: function isTargetValid(element) {
      if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        if (element.hasAttribute('disabled')) {
          throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
        }

        return true;
      }

      throw new Error('Target should be input or textarea');
    }
    /**
     * Attempts to copy from an input `targetElm`
     * @param {?} targetElm
     * @param {?=} isFocus
     * @return {?}
     */

  }, {
    key: "copyFromInputElement",
    value: function copyFromInputElement(targetElm) {
      var isFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      try {
        this.selectTarget(targetElm);
        /** @type {?} */

        var re = this.copyText();
        this.clearSelection(isFocus ? targetElm : undefined, this.window);
        return re && this.isCopySuccessInIE11();
      } catch (error) {
        return false;
      }
    }
    /**
     * This is a hack for IE11 to return `true` even if copy fails.
     * @return {?}
     */

  }, {
    key: "isCopySuccessInIE11",
    value: function isCopySuccessInIE11() {
      /** @type {?} */
      var clipboardData = this.window['clipboardData'];

      if (clipboardData && clipboardData.getData) {
        if (!clipboardData.getData('Text')) {
          return false;
        }
      }

      return true;
    }
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     * @param {?} content
     * @param {?=} container
     * @return {?}
     */

  }, {
    key: "copyFromContent",
    value: function copyFromContent(content) {
      var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.document.body;

      // check if the temp textarea still belongs to the current container.
      // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
      if (this.tempTextArea && !container.contains(this.tempTextArea)) {
        this.destroy(this.tempTextArea.parentElement);
      }

      if (!this.tempTextArea) {
        this.tempTextArea = this.createTempTextArea(this.document, this.window);

        try {
          container.appendChild(this.tempTextArea);
        } catch (error) {
          throw new Error('Container should be a Dom element');
        }
      }

      this.tempTextArea.value = content;
      /** @type {?} */

      var toReturn = this.copyFromInputElement(this.tempTextArea, false);

      if (this.config.cleanUpAfterCopy) {
        this.destroy(this.tempTextArea.parentElement);
      }

      return toReturn;
    }
    /**
     * Remove temporary textarea if any exists.
     * @param {?=} container
     * @return {?}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.document.body;

      if (this.tempTextArea) {
        container.removeChild(this.tempTextArea); // removeChild doesn't remove the reference from memory

        this.tempTextArea = undefined;
      }
    }
    /**
     * Select the target html input element.
     * @private
     * @param {?} inputElement
     * @return {?}
     */

  }, {
    key: "selectTarget",
    value: function selectTarget(inputElement) {
      inputElement.select();
      inputElement.setSelectionRange(0, inputElement.value.length);
      return inputElement.value.length;
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "copyText",
    value: function copyText() {
      return this.document.execCommand('copy');
    }
    /**
     * Moves focus away from `target` and back to the trigger, removes current selection.
     * @private
     * @param {?} inputElement
     * @param {?} window
     * @return {?}
     */

  }, {
    key: "clearSelection",
    value: function clearSelection(inputElement, window) {
      inputElement && inputElement.focus();
      window.getSelection().removeAllRanges();
    }
    /**
     * Creates a fake textarea for copy command.
     * @private
     * @param {?} doc
     * @param {?} window
     * @return {?}
     */

  }, {
    key: "createTempTextArea",
    value: function createTempTextArea(doc, window) {
      /** @type {?} */
      var isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
      /** @type {?} */

      var ta;
      ta = doc.createElement('textarea'); // Prevent zooming on iOS

      ta.style.fontSize = '12pt'; // Reset box model

      ta.style.border = '0';
      ta.style.padding = '0';
      ta.style.margin = '0'; // Move element out of screen horizontally

      ta.style.position = 'absolute';
      ta.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

      /** @type {?} */

      var yPosition = window.pageYOffset || doc.documentElement.scrollTop;
      ta.style.top = yPosition + 'px';
      ta.setAttribute('readonly', '');
      return ta;
    }
    /**
     * Pushes copy operation response to copySubject, to provide global access
     * to the response.
     * @param {?} response
     * @return {?}
     */

  }, {
    key: "pushCopyResponse",
    value: function pushCopyResponse(response) {
      this.copySubject.next(response);
    }
    /**
     * @deprecated use pushCopyResponse instead.
     * @param {?} response
     * @return {?}
     */

  }, {
    key: "pushCopyReponse",
    value: function pushCopyReponse(response) {
      this.pushCopyResponse(response);
    }
  }, {
    key: "isSupported",
    get: function get() {
      return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy') && !!this.window;
    }
  }]);

  return ClipboardService;
}();

ClipboardService.ɵfac = function ClipboardService_Factory(t) {
  return new (t || ClipboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](ngx_window_token__WEBPACK_IMPORTED_MODULE_2__["WINDOW"], 8));
};

ClipboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: ClipboardService,
  factory: ClipboardService.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

ClipboardService.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
      args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]]
    }]
  }];
};
/** @nocollapse */


ClipboardService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["defineInjectable"])({
  factory: function ClipboardService_Factory() {
    return new ClipboardService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"])(ngx_window_token__WEBPACK_IMPORTED_MODULE_2__["WINDOW"], 8));
  },
  token: ClipboardService,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](ClipboardService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
        args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]]
      }]
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ClipboardDirective = /*#__PURE__*/function () {
  /**
   * @param {?} clipboardSrv
   */
  function ClipboardDirective(clipboardSrv) {
    Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClipboardDirective);

    this.clipboardSrv = clipboardSrv;
    this.cbOnSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    this.cbOnError = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
  } // tslint:disable-next-line:no-empty

  /**
   * @return {?}
   */


  Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ClipboardDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.clipboardSrv.destroy(this.container);
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onClick",
    value: function onClick(event) {
      if (!this.clipboardSrv.isSupported) {
        this.handleResult(false, undefined, event);
      } else if (this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm)) {
        this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value, event);
      } else if (this.cbContent) {
        this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent, this.container), this.cbContent, event);
      }
    }
    /**
     * Fires an event based on the copy operation result.
     * @private
     * @param {?} succeeded
     * @param {?} copiedContent
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "handleResult",
    value: function handleResult(succeeded, copiedContent, event) {
      /** @type {?} */
      var response = {
        isSuccess: succeeded,
        event: event
      };

      if (succeeded) {
        response = Object.assign(response, {
          content: copiedContent,
          successMessage: this.cbSuccessMsg
        });
        this.cbOnSuccess.emit(response);
      } else {
        this.cbOnError.emit(response);
      }

      this.clipboardSrv.pushCopyResponse(response);
    }
  }]);

  return ClipboardDirective;
}();

ClipboardDirective.ɵfac = function ClipboardDirective_Factory(t) {
  return new (t || ClipboardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ClipboardService));
};

ClipboardDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
  type: ClipboardDirective,
  selectors: [["", "ngxClipboard", ""]],
  hostBindings: function ClipboardDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClipboardDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event.target);
      });
    }
  },
  inputs: {
    targetElm: ["ngxClipboard", "targetElm"],
    container: "container",
    cbContent: "cbContent",
    cbSuccessMsg: "cbSuccessMsg"
  },
  outputs: {
    cbOnSuccess: "cbOnSuccess",
    cbOnError: "cbOnError"
  }
});
/** @nocollapse */

ClipboardDirective.ctorParameters = function () {
  return [{
    type: ClipboardService
  }];
};

ClipboardDirective.propDecorators = {
  targetElm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
    args: ['ngxClipboard']
  }],
  container: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  cbContent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  cbSuccessMsg: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  cbOnSuccess: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
  }],
  cbOnError: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
    args: ['click', ['$event.target']]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](ClipboardDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
    args: [{
      selector: '[ngxClipboard]'
    }]
  }], function () {
    return [{
      type: ClipboardService
    }];
  }, {
    cbOnSuccess: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
    }],
    cbOnError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
      args: ['click', ['$event.target']]
    }],
    targetElm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
      args: ['ngxClipboard']
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    cbContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    cbSuccessMsg: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ClipboardIfSupportedDirective = /*#__PURE__*/function () {
  /**
   * @param {?} _clipboardService
   * @param {?} _viewContainerRef
   * @param {?} _templateRef
   */
  function ClipboardIfSupportedDirective(_clipboardService, _viewContainerRef, _templateRef) {
    Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClipboardIfSupportedDirective);

    this._clipboardService = _clipboardService;
    this._viewContainerRef = _viewContainerRef;
    this._templateRef = _templateRef;
  }
  /**
   * @return {?}
   */


  Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ClipboardIfSupportedDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this._clipboardService.isSupported) {
        this._viewContainerRef.createEmbeddedView(this._templateRef);
      }
    }
  }]);

  return ClipboardIfSupportedDirective;
}();

ClipboardIfSupportedDirective.ɵfac = function ClipboardIfSupportedDirective_Factory(t) {
  return new (t || ClipboardIfSupportedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ClipboardService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]));
};

ClipboardIfSupportedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
  type: ClipboardIfSupportedDirective,
  selectors: [["", "ngxClipboardIfSupported", ""]]
});
/** @nocollapse */

ClipboardIfSupportedDirective.ctorParameters = function () {
  return [{
    type: ClipboardService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](ClipboardIfSupportedDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
    args: [{
      selector: '[ngxClipboardIfSupported]'
    }]
  }], function () {
    return [{
      type: ClipboardService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ClipboardModule = function ClipboardModule() {
  Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClipboardModule);
};

ClipboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: ClipboardModule
});
ClipboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  factory: function ClipboardModule_Factory(t) {
    return new (t || ClipboardModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ClipboardModule, {
    declarations: function declarations() {
      return [ClipboardDirective, ClipboardIfSupportedDirective];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
    },
    exports: function exports() {
      return [ClipboardDirective, ClipboardIfSupportedDirective];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](ClipboardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
      declarations: [ClipboardDirective, ClipboardIfSupportedDirective],
      exports: [ClipboardDirective, ClipboardIfSupportedDirective]
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ })

}]);
//# sourceMappingURL=default~app-content-table-datatables-datatables-module~app-content-table-datatablesext-datatablesext-module.js.map