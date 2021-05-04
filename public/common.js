(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "+nQj":
/*!*************************************************!*\
  !*** ./src/app/_api/workers/workers.service.ts ***!
  \*************************************************/
/*! exports provided: WorkersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkersService", function() { return WorkersService; });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ "g+7Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





var WorkersService = /** @class */ (function () {
    function WorkersService(afs) {
        this.afs = afs;
        this.selectedWorker = {};
        this.workerCollection = afs.collection('workers');
        this.workers = this.workerCollection.valueChanges();
    }
    WorkersService.prototype.getFullInfoEmployees = function (uidBoss) {
        console.log(uidBoss);
        return this.workers = this.afs.collection('workers').doc("" + uidBoss).collection('workersInfo')
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
        //this.afs.doc<WorkersInterface>(`workers/${uidBoss}`)
    };
    WorkersService.prototype.getOneWorker = function (idWorker, idBoss) {
        this.workerDoc = this.afs.collection('workers').doc("" + idBoss).collection('workersInfo').doc("" + idWorker);
        return this.worker = this.workerDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
    };
    WorkersService.prototype.addWorker = function (worker, idBoss) {
        var workerId = worker.id;
        worker.vendedor = true;
        this.afs.collection('workers').doc("" + idBoss).collection('workersInfo').doc("" + workerId).set(worker);
    };
    WorkersService.prototype.updateWorker = function (worker, idBoss) {
        var idWorker = worker.id;
        this.workerDoc = this.afs.collection('workers').doc("" + idBoss).collection('workersInfo').doc("" + idWorker);
        this.workerDoc.update(worker);
    };
    WorkersService.prototype.deleteWorker = function (idWorker, idBoss) {
        this.workerDoc = this.afs.collection('workers').doc("" + idBoss).collection('workersInfo').doc("" + idWorker);
        this.workerDoc.delete();
    };
    WorkersService.ɵfac = function WorkersService_Factory(t) { return new (t || WorkersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"])); };
    WorkersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WorkersService, factory: WorkersService.ɵfac, providedIn: 'root' });
    return WorkersService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WorkersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "3O3Q":
/*!*****************************************************!*\
  !*** ./src/app/_core/confirmation-dialog.module.ts ***!
  \*****************************************************/
/*! exports provided: ConfirmationDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogModule", function() { return ConfirmationDialogModule; });
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmation-dialog/confirmation-dialog.component */ "3CGN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");




var ConfirmationDialogModule = /** @class */ (function () {
    function ConfirmationDialogModule() {
    }
    ConfirmationDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ConfirmationDialogModule });
    ConfirmationDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ConfirmationDialogModule_Factory(t) { return new (t || ConfirmationDialogModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]] });
    return ConfirmationDialogModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ConfirmationDialogModule, { declarations: [_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmationDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmationDialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfirmationDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmationDialogComponent"]],
                exports: [_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmationDialogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "b3t4":
/*!*******************************************!*\
  !*** ./src/app/_api/sale/sale.service.ts ***!
  \*******************************************/
/*! exports provided: SaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleService", function() { return SaleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "g+7Q");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





var SaleService = /** @class */ (function () {
    function SaleService(afs) {
        this.afs = afs;
        this.workerCollection = afs.collection('product');
        this.sales = this.workerCollection.valueChanges();
    }
    SaleService.prototype.addSaleProduct = function (sale, idBoss) {
        var tempId = this.afs.createId();
        sale.id = tempId;
        this.afs.collection('sale').doc("" + idBoss).collection('saleInfo').doc(tempId).set(sale);
    };
    SaleService.prototype.getFullInfoSale = function (uidBoss) {
        return this.sales = this.afs.collection('sale').doc("" + uidBoss).collection('saleInfo')
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    SaleService.ɵfac = function SaleService_Factory(t) { return new (t || SaleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
    SaleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SaleService, factory: SaleService.ɵfac, providedIn: 'root' });
    return SaleService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// WARNING - Values under "firebase" and value of "googleApiKey" needs to be replaced from your own accounts
// If left as is, it firbase and google map related functionality will not work on LIVE instance.
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyB-LeL2-iMC0uVRN1znuH3BvVuFESrZ6hI",
        authDomain: "proyectopasteleria-8a8e3.firebaseapp.com",
        databaseURL: "https://proyectopasteleria-8a8e3.firebaseio.com",
        projectId: "proyectopasteleria-8a8e3",
        storageBucket: "proyectopasteleria-8a8e3.appspot.com",
        messagingSenderId: "136402622882",
        appId: "1:136402622882:web:534ef6a95fab8dc108fafb",
        measurementId: "G-V8H2D0GJZ2"
    },
    googleApiKey: 'AIzaSyAIIYOxA7qeetFz6TuR1Qewc0Rrjhzx7ZU',
};


/***/ }),

/***/ "lfl4":
/*!***************************************************!*\
  !*** ./src/app/_directives/sortable.directive.ts ***!
  \***************************************************/
/*! exports provided: NgbdSortableHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdSortableHeader", function() { return NgbdSortableHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var rotate = {
    asc: 'desc',
    desc: '',
    '': 'asc'
};
var NgbdSortableHeader = /** @class */ (function () {
    function NgbdSortableHeader() {
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbdSortableHeader.prototype.rotate = function () {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    };
    NgbdSortableHeader.ɵfac = function NgbdSortableHeader_Factory(t) { return new (t || NgbdSortableHeader)(); };
    NgbdSortableHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgbdSortableHeader, selectors: [["th", "sortable", ""]], hostVars: 4, hostBindings: function NgbdSortableHeader_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdSortableHeader_click_HostBindingHandler() { return ctx.rotate(); });
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
        } }, inputs: { sortable: "sortable", direction: "direction" }, outputs: { sort: "sort" } });
    return NgbdSortableHeader;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbdSortableHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'th[sortable]',
                host: {
                    '[class.asc]': 'direction === "asc"',
                    '[class.desc]': 'direction === "desc"',
                    '(click)': 'rotate()'
                }
            }]
    }], null, { sortable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "sJBm":
/*!*******************************************************************************!*\
  !*** ./node_modules/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! chartist */ "uki+")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Chartist) {
      return root.returnExportsGlobal = factory(Chartist);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (Chartist) {
  /**
   * Chartist.js plugin to display a data label on top of the points in a line chart.
   *
   */

  /* global Chartist */
  (function (window, document, Chartist) {
    'use strict';

    var defaultOptions = {
      currency: undefined,
      currencyFormatCallback: undefined,
      tooltipOffset: {
        x: 0,
        y: -20
      },
      anchorToPoint: false,
      appendToBody: false,
      class: undefined,
      pointClass: 'ct-point'
    };
    Chartist.plugins = Chartist.plugins || {};

    Chartist.plugins.tooltip = function (options) {
      options = Chartist.extend({}, defaultOptions, options);
      return function tooltip(chart) {
        var tooltipSelector = options.pointClass;

        if (chart instanceof Chartist.Bar) {
          tooltipSelector = 'ct-bar';
        } else if (chart instanceof Chartist.Pie) {
          // Added support for donut graph
          if (chart.options.donut) {
            tooltipSelector = 'ct-slice-donut';
          } else {
            tooltipSelector = 'ct-slice-pie';
          }
        }

        var $chart = chart.container;
        var $toolTip = $chart.querySelector('.chartist-tooltip');

        if (!$toolTip) {
          $toolTip = document.createElement('div');
          $toolTip.className = !options.class ? 'chartist-tooltip' : 'chartist-tooltip ' + options.class;

          if (!options.appendToBody) {
            $chart.appendChild($toolTip);
          } else {
            document.body.appendChild($toolTip);
          }
        }

        var height = $toolTip.offsetHeight;
        var width = $toolTip.offsetWidth;
        hide($toolTip);

        function on(event, selector, callback) {
          $chart.addEventListener(event, function (e) {
            if (!selector || hasClass(e.target, selector)) callback(e);
          });
        }

        on('mouseover', tooltipSelector, function (event) {
          var $point = event.target;
          var tooltipText = '';
          var isPieChart = chart instanceof Chartist.Pie ? $point : $point.parentNode;
          var seriesName = isPieChart ? $point.parentNode.getAttribute('ct:meta') || $point.parentNode.getAttribute('ct:series-name') : '';
          var meta = $point.getAttribute('ct:meta') || seriesName || '';
          var hasMeta = !!meta;
          var value = $point.getAttribute('ct:value');

          if (options.transformTooltipTextFnc && typeof options.transformTooltipTextFnc === 'function') {
            value = options.transformTooltipTextFnc(value);
          }

          if (options.tooltipFnc && typeof options.tooltipFnc === 'function') {
            tooltipText = options.tooltipFnc(meta, value);
          } else {
            if (options.metaIsHTML) {
              var txt = document.createElement('textarea');
              txt.innerHTML = meta;
              meta = txt.value;
            }

            meta = '<span class="chartist-tooltip-meta">' + meta + '</span>';

            if (hasMeta) {
              tooltipText += meta + '<br>';
            } else {
              // For Pie Charts also take the labels into account
              // Could add support for more charts here as well!
              if (chart instanceof Chartist.Pie) {
                var label = next($point, 'ct-label');

                if (label) {
                  tooltipText += text(label) + '<br>';
                }
              }
            }

            if (value) {
              if (options.currency) {
                if (options.currencyFormatCallback != undefined) {
                  value = options.currencyFormatCallback(value, options);
                } else {
                  value = options.currency + value.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
                }
              }

              value = '<span class="chartist-tooltip-value">' + value + '</span>';
              tooltipText += value;
            }
          }

          if (tooltipText) {
            $toolTip.innerHTML = tooltipText;
            setPosition(event);
            show($toolTip); // Remember height and width to avoid wrong position in IE

            height = $toolTip.offsetHeight;
            width = $toolTip.offsetWidth;
          }
        });
        on('mouseout', tooltipSelector, function () {
          hide($toolTip);
        });
        on('mousemove', null, function (event) {
          if (false === options.anchorToPoint) setPosition(event);
        });

        function setPosition(event) {
          height = height || $toolTip.offsetHeight;
          width = width || $toolTip.offsetWidth;
          var offsetX = -width / 2 + options.tooltipOffset.x;
          var offsetY = -height + options.tooltipOffset.y;
          var anchorX, anchorY;

          if (!options.appendToBody) {
            var box = $chart.getBoundingClientRect();
            var left = event.pageX - box.left - window.pageXOffset;
            var top = event.pageY - box.top - window.pageYOffset;

            if (true === options.anchorToPoint && event.target.x2 && event.target.y2) {
              anchorX = parseInt(event.target.x2.baseVal.value);
              anchorY = parseInt(event.target.y2.baseVal.value);
            }

            $toolTip.style.top = (anchorY || top) + offsetY + 'px';
            $toolTip.style.left = (anchorX || left) + offsetX + 'px';
          } else {
            $toolTip.style.top = event.pageY + offsetY + 'px';
            $toolTip.style.left = event.pageX + offsetX + 'px';
          }
        }
      };
    };

    function show(element) {
      if (!hasClass(element, 'tooltip-show')) {
        element.className = element.className + ' tooltip-show';
      }
    }

    function hide(element) {
      var regex = new RegExp('tooltip-show' + '\\s*', 'gi');
      element.className = element.className.replace(regex, '').trim();
    }

    function hasClass(element, className) {
      return (' ' + element.getAttribute('class') + ' ').indexOf(' ' + className + ' ') > -1;
    }

    function next(element, className) {
      do {
        element = element.nextSibling;
      } while (element && !hasClass(element, className));

      return element;
    }

    function text(element) {
      return element.innerText || element.textContent;
    }
  })(window, document, Chartist);

  return Chartist.plugins.tooltips;
});

/***/ })

}]);
//# sourceMappingURL=common.js.map