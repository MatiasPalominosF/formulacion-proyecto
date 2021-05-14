(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-cancellation-cancellation-module"],{

/***/ "wFfs":
/*!***************************************************************************************!*\
  !*** ./src/app/content/cancellation/cancellation-list/cancellation-list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CancellationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationListComponent", function() { return CancellationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_layout/breadcrumb/breadcrumb.component */ "/DnI");



var CancellationListComponent = /** @class */ (function () {
    function CancellationListComponent() {
    }
    CancellationListComponent.prototype.ngOnInit = function () {
        this.breadcrumb = {
            'mainlabel': 'Cancelaciones',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/ecommerce'
                },
                {
                    'name': 'Lista de ventas',
                    'isLink': false,
                    'link': ''
                }
            ]
        };
    };
    CancellationListComponent.ɵfac = function CancellationListComponent_Factory(t) { return new (t || CancellationListComponent)(); };
    CancellationListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CancellationListComponent, selectors: [["app-cancellation-list"]], decls: 5, vars: 1, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"]], template: function CancellationListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-breadcrumb", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
        } }, directives: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5jZWxsYXRpb24tbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
    return CancellationListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CancellationListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cancellation-list',
                templateUrl: './cancellation-list.component.html',
                styleUrls: ['./cancellation-list.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xQ7D":
/*!*************************************************************!*\
  !*** ./src/app/content/cancellation/cancellation.module.ts ***!
  \*************************************************************/
/*! exports provided: CancellationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationModule", function() { return CancellationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _cancellation_list_cancellation_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cancellation-list/cancellation-list.component */ "wFfs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ "ErSb");







var CancellationModule = /** @class */ (function () {
    function CancellationModule() {
    }
    CancellationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CancellationModule });
    CancellationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CancellationModule_Factory(t) { return new (t || CancellationModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: 'cancellation-list',
                        component: _cancellation_list_cancellation_list_component__WEBPACK_IMPORTED_MODULE_2__["CancellationListComponent"],
                    },
                ]),
            ]] });
    return CancellationModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CancellationModule, { declarations: [_cancellation_list_cancellation_list_component__WEBPACK_IMPORTED_MODULE_2__["CancellationListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CancellationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_cancellation_list_cancellation_list_component__WEBPACK_IMPORTED_MODULE_2__["CancellationListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: 'cancellation-list',
                            component: _cancellation_list_cancellation_list_component__WEBPACK_IMPORTED_MODULE_2__["CancellationListComponent"],
                        },
                    ]),
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=app-content-cancellation-cancellation-module.js.map