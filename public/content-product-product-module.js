(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-product-product-module"],{

/***/ "E4x6":
/*!***************************************************!*\
  !*** ./src/app/content/product/product.module.ts ***!
  \***************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _core_confirmation_dialog_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../_core/confirmation-dialog.module */ "3O3Q");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "g+7Q");
/* harmony import */ var _services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_services/confirmation-dialog.service */ "+7SE");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "LSHg");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-echarts */ "Q1xG");
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../partials/general/card/card.module */ "vj4e");
/* harmony import */ var _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../_layout/blockui/block-template.component */ "kaWu");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../_layout/breadcrumb/breadcrumb.module */ "ErSb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-list/product-list.component */ "rPv6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-modal/product-modal.component */ "KP2V");





















var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: ProductModule });
    ProductModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function ProductModule_Factory(t) { return new (t || ProductModule)(); }, providers: [_services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]], imports: [[
                _core_confirmation_dialog_module__WEBPACK_IMPORTED_MODULE_0__["ConfirmationDialogModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                _layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"],
                _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_8__["BlockUIModule"].forRoot({
                    template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_7__["BlockTemplateComponent"]
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                    apiKey: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].googleApiKey,
                    libraries: ['places']
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild([
                    {
                        path: 'product-list',
                        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__["ProductListComponent"]
                    },
                    {
                        path: 'product-modal',
                        component: _product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_16__["ProductModalComponent"]
                    }
                ]),
            ]] });
    return ProductModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ProductModule, { declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__["ProductListComponent"], _product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_16__["ProductModalComponent"]], imports: [_core_confirmation_dialog_module__WEBPACK_IMPORTED_MODULE_0__["ConfirmationDialogModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
        _layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbModule"],
        ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"],
        _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModalModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_8__["BlockUIModule"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](ProductModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"],
        args: [{
                declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__["ProductListComponent"], _product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_16__["ProductModalComponent"]],
                imports: [
                    _core_confirmation_dialog_module__WEBPACK_IMPORTED_MODULE_0__["ConfirmationDialogModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                    _layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"],
                    _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModalModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    ng_block_ui__WEBPACK_IMPORTED_MODULE_8__["BlockUIModule"].forRoot({
                        template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_7__["BlockTemplateComponent"]
                    }),
                    _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                        apiKey: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].googleApiKey,
                        libraries: ['places']
                    }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild([
                        {
                            path: 'product-list',
                            component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__["ProductListComponent"]
                        },
                        {
                            path: 'product-modal',
                            component: _product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_16__["ProductModalComponent"]
                        }
                    ]),
                ], providers: [_services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "KP2V":
/*!**************************************************************************!*\
  !*** ./src/app/content/product/product-modal/product-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModalComponent", function() { return ProductModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _api_product_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../_api/product/product.service */ "TwWe");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");












function ProductModalComponent_small_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El nombre del producto es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProductModalComponent_small_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProductModalComponent_small_19_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.f.name.errors.required);
} }
function ProductModalComponent_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var measure_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", measure_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", measure_r16.name, " ");
} }
function ProductModalComponent_small_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " La unidad de medida del producto es requerida. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProductModalComponent_small_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProductModalComponent_small_28_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.f.measure.errors.required);
} }
function ProductModalComponent_small_38_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El valor neto del producto es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProductModalComponent_small_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProductModalComponent_small_38_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.f.neto.errors.required);
} }
function ProductModalComponent_small_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "El iva del producto.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProductModalComponent_small_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProductModalComponent_small_44_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.f.iva.errors.required);
} }
function ProductModalComponent_small_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El precio bruto es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProductModalComponent_small_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProductModalComponent_small_50_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.f.bruto.errors.required);
} }
function ProductModalComponent_small_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El margen de ganacia es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProductModalComponent_small_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProductModalComponent_small_56_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.f.margen.errors.required);
} }
function ProductModalComponent_small_62_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El precio venta es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProductModalComponent_small_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProductModalComponent_small_62_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.f.total.errors.required);
} }
function ProductModalComponent_small_68_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El stock del producto es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProductModalComponent_small_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProductModalComponent_small_68_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.f.stock.errors.required);
} }
function ProductModalComponent_small_74_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " La cantidad m\u00EDnima es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProductModalComponent_small_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProductModalComponent_small_74_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.f.minimun.errors.required);
} }
function ProductModalComponent_small_88_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " La materia prima es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProductModalComponent_small_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProductModalComponent_small_88_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.f.ismaterial.errors.required);
} }
function ProductModalComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ProductModalComponent_div_94_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r26.showcontent($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "S\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ProductModalComponent_div_94_Template_input_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r28.showcontent($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProductModalComponent_ng_template_95_Template(rf, ctx) { if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ProductModalComponent_ng_template_95_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r29.showcontent($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "S\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ProductModalComponent_ng_template_95_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r31.showcontent($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProductModalComponent_div_98_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var interest_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", interest_r35.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", interest_r35.name, " ");
} }
function ProductModalComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Producto *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProductModalComponent_div_98_Template_select_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r36.onChangeObj($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Selecciona una opci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ProductModalComponent_div_98_option_11_Template, 2, 2, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Cantidad *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductModalComponent_div_98_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); var i_r33 = ctx.index; var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r38.removePhone(i_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r33 = ctx.index;
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r14.ingredientes);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r14.measureName);
} }
var _c0 = function (a0) { return { "is-invalid": a0 }; };
var ProductModalComponent = /** @class */ (function () {
    function ProductModalComponent(activeModal, formBuilder, productService, document) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.submitted = false;
        this.measures = [
            { name: "Kilogramos", id: 1 },
            { name: "Gramos", id: 2 },
            { name: "Litros", id: 3 },
            { name: "Centimetros cúbicos", id: 4 },
            { name: "Mililitros", id: 5 },
            { name: "Unidad", id: 6 }
        ];
        this.options = [
            { id: "yes", value: true },
            { id: "no", value: false }
        ];
        this.budget = ['less than 5000$', '5000$ - 10000$', '10000$ - 20000$', 'more than 20000$'];
        this.hobby = ['design', 'development', 'illustration', 'branding', 'video'];
    }
    ProductModalComponent.prototype.ngOnInit = function () {
        this.productInfo = this.formBuilder.group({
            haveIngredient: false,
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            stock: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            neto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            iva: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bruto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            margen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            total: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            minimun: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ismaterial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            measure: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ingredients: this.formBuilder.array([])
        });
        this.getUserLogged();
        this.ingredientList = this.productInfo.get('ingredients');
        console.log("opción:", this.opc);
        this.getIngredients();
        //this.setMeaure(1);
        this.setValueInIngredients();
        this.cargarDatos();
        /*console.log("this.productService.selectedProduct.ismaterial", this.productService.selectedProduct.ismaterial);
        if (this.productService.selectedProduct.ismaterial != undefined) {
          console.log("ACA!");
        }*/
        this.prueba();
    };
    Object.defineProperty(ProductModalComponent.prototype, "userFormGroup", {
        get: function () {
            return this.productInfo.get('ingredients');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductModalComponent.prototype, "f", {
        get: function () {
            return this.productInfo.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductModalComponent.prototype, "fValue", {
        get: function () {
            return this.productInfo.value;
        },
        enumerable: false,
        configurable: true
    });
    ProductModalComponent.prototype.cargarDatos = function () {
        console.log("this.productService.selectedProduct", this.productService.selectedProduct);
        if (this.productService.selectedProduct != undefined && this.productService.selectedProduct != null && this.productService.selectedProduct != "") {
            console.log("ENTRO AL SIII");
            console.log("this.productService.selectedProduct.ismaterial", this.productService.selectedProduct.ismaterial);
            //SE VERIFICA SI ES MATERIA PRIMA O NO EN EL PRIMER IF Y EL ELSE.
            if (this.productService.selectedProduct.ismaterial) {
                this.productInfo.patchValue({
                    ismaterial: "yes"
                });
            }
            else {
                console.log("ENTRO AL ELSE");
                this.productInfo.patchValue({
                    ismaterial: "no"
                });
            }
            console.log("this.productService.selectedProduct.measure", this.productService.selectedProduct.measure);
            this.productInfo.patchValue({
                measure: this.productService.selectedProduct.measure
            });
            //this.setMeaure(2);
        }
        else {
            console.log("ENTRO AL NOOOO");
            this.productInfo.patchValue({
                ismaterial: "no"
            });
        }
    };
    ProductModalComponent.prototype.setMeaure = function (opc) {
        if (opc == 1) {
        }
        else {
            console.log("this.productService.selectedProduct.measure", this.productService.selectedProduct.measure);
            switch (this.productService.selectedProduct.measure) {
                case "1":
                    this.measureName = "Kg";
                    break;
                case "2":
                    this.measureName = "Gr";
                    break;
                case "3":
                    this.measureName = "L";
                    break;
                case "4":
                    this.measureName = "Cc";
                    break;
                case "5":
                    this.measureName = "Ml";
                    break;
                case "6":
                    this.measureName = "Un";
                    break;
                default:
                    console.log("Error!");
            }
        }
    };
    ProductModalComponent.prototype.setValueInIngredients = function () {
        var _this = this;
        var any;
        if (this.productService.selectedProduct.ingredients != undefined && this.productService.selectedProduct.ingredients.length > 0 && this.productService.selectedProduct.ingredients != null) {
            document.getElementById("showaddingredients").style.display = "block";
            this.productService.selectedProduct.ingredients.forEach(function (element) {
                any = element;
                console.log("any.idIngredients", any.idIngredients);
                console.log("any.quantity", any.quantity);
                console.log("any.measure", any.measure2);
                _this.ingredientList.push(_this.formBuilder.group({
                    idIngredients: any.idIngredients,
                    quantity: any.quantity,
                    measure2: any.measure2,
                }));
            });
        }
    };
    ProductModalComponent.prototype.getIngredients = function () {
        var _this = this;
        this.productService.getMaterial(this.currentUser.uid).subscribe(function (datos) {
            console.log("Ahora viene esto:", datos);
            _this.ingredientes = datos;
        });
    };
    ProductModalComponent.prototype.prueba = function () {
        this.productService.getProductById(this.currentUser.uid, this.productService.selectedProduct.id).subscribe(function (datos) {
            console.log("PRODUTO DATOS: ", datos);
        });
    };
    ProductModalComponent.prototype.setIvaBruto = function (value) {
        var valor = parseInt(value, 10);
        var iva = (Math.round(valor * 0.19));
        if (!isNaN(valor)) {
            this.productInfo.get("iva").setValue("" + iva);
        }
        else {
            this.productInfo.get("iva").setValue("");
        }
        var bruto = valor + iva;
        if (!isNaN(bruto)) {
            this.productInfo.get("bruto").setValue("" + bruto);
        }
        else {
            this.productInfo.get("bruto").setValue("");
        }
    };
    ProductModalComponent.prototype.onChangeObj = function (value) {
        var _this = this;
        console.log("que:", value);
        this.productService.getProductById(this.currentUser.uid, value).subscribe(function (producto) {
            var arrayControl = _this.userFormGroup;
            switch (producto.measure) {
                case "1":
                    _this.measureName = "Kg";
                    break;
                case "2":
                    _this.measureName = "Gr";
                    break;
                case "3":
                    _this.measureName = "L";
                    break;
                case "4":
                    _this.measureName = "Cc";
                    break;
                case "5":
                    _this.measureName = "Ml";
                    break;
                case "6":
                    _this.measureName = "Un";
                    break;
                default:
                    console.log("Sin datos!");
            }
            console.log("aaa", arrayControl.value);
        });
    };
    ProductModalComponent.prototype.setTotal = function (e) {
        if (e != "") {
            console.log(e);
            e = parseInt(e, 10);
            e = (e / 100) + 1;
            var total = Math.round(this.productInfo.get("bruto").value * e);
            this.productInfo.get("total").setValue("" + total);
        }
        else {
            this.productInfo.get("total").setValue("");
        }
    };
    ProductModalComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode !== 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ProductModalComponent.prototype.setMargen = function (e) {
        if (e != "") {
            var dif = parseInt(e) - this.productInfo.get("bruto").value;
            dif = (dif * 100) / this.productInfo.get("bruto").value;
            dif = Math.ceil(dif);
            this.productInfo.get("margen").setValue("" + dif);
        }
        else {
            this.productInfo.get("margen").setValue(0);
        }
    };
    ProductModalComponent.prototype.showcontent = function (value) {
        if (value == "yes") {
            document.getElementById("showaddingredients").style.display = "block";
        }
        else {
            //this.productInfo.get('ingredients').setErrors(null);
            document.getElementById("showaddingredients").style.display = "none";
        }
    };
    ProductModalComponent.prototype.createIngredients = function () {
        return this.formBuilder.group({
            idIngredients: [''],
            quantity: [''],
            measure2: [''],
        });
    };
    ProductModalComponent.prototype.addPhone = function () {
        this.ingredientList.push(this.createIngredients());
    };
    ProductModalComponent.prototype.removePhone = function (index) {
        this.ingredientList.removeAt(index);
    };
    ProductModalComponent.prototype.getUserLogged = function () {
        if (localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
    };
    ProductModalComponent.prototype.onProductInfoSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.productInfo.invalid) {
            return;
        }
        if (this.fValue.ismaterial == "" || this.fValue.ismaterial == "no") {
            this.fValue.ismaterial = false;
        }
        else {
            this.fValue.ismaterial = true;
        }
        console.log("Value aceptado:", this.fValue);
        if (!this.opc) {
            this.fValue.ingredients.forEach(function (element) {
                element.quantity = element.quantity * _this.fValue.stock;
            });
            // Se agrega nuevo usuario.
            this.productService.addProduct(this.fValue, this.currentUser.uid);
            this.passEntry.emit(true);
            this.activeModal.close(true);
        }
        else {
            // Se edita un usuario.
            console.log("SE PRESIONA EDITAR...");
            this.productService.updateProduct(this.fValue, this.productService.selectedProduct.id, this.currentUser.uid);
            this.passEntry.emit(false);
            this.activeModal.close(false);
        }
        this.productInfo.reset();
    };
    ProductModalComponent.ɵfac = function ProductModalComponent_Factory(t) { return new (t || ProductModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_api_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"])); };
    ProductModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProductModalComponent, selectors: [["app-product-modal"]], inputs: { opc: "opc" }, outputs: { passEntry: "passEntry" }, decls: 109, vars: 57, consts: [[1, "modal-header"], [1, "form-section"], [1, "mr-2", "mt-6", "feather", "ft-edit"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "form-body"], [1, "la", "la-eye"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "name"], ["formControlName", "name", "type", "text", "id", "name", "placeholder", "Nombre producto", 1, "form-control", "border-primary", 3, "ngModel", "ngClass", "ngModelChange"], ["class", "form-text text-muted danger", "class", "invalid-feedback", 4, "ngIf"], ["for", "measure"], ["id", "measure", "formControlName", "measure", 1, "form-control", "border-primary", 3, "ngClass"], ["disabled", "", "selected", ""], ["value", "measure.id", 3, "value", 4, "ngFor", "ngForOf"], [1, "feather", "ft-info"], ["for", "neto"], ["formControlName", "neto", "type", "text", "id", "neto", "placeholder", "Precio neto producto", 1, "form-control", "border-primary", 3, "ngModel", "ngClass", "ngModelChange", "keypress"], ["for", "iva"], ["readonly", "", "formControlName", "iva", "type", "text", "id", "iva", "placeholder", "IVA del producto", 1, "form-control", "border-primary", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "bruto"], ["readonly", "", "formControlName", "bruto", "type", "text", "id", "bruto", "placeholder", "Precio bruto", 1, "form-control", "border-primary", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "margen"], ["formControlName", "margen", "type", "text", "id", "margen", "placeholder", "Margen de ganacia", 1, "form-control", "border-primary", 3, "ngModel", "ngClass", "ngModelChange", "keypress", "change"], ["for", "total"], ["formControlName", "total", "type", "text", "id", "total", "placeholder", "Precio venta", 1, "form-control", "border-primary", 3, "ngModel", "ngClass", "ngModelChange", "keypress", "change"], ["for", "stock"], ["formControlName", "stock", "type", "text", "id", "stock", "placeholder", "Cantidad producto", 1, "form-control", "border-primary", 3, "ngModel", "ngClass", "ngModelChange", "keypress"], ["for", "minimun"], ["formControlName", "minimun", "type", "text", "id", "minimun", "placeholder", "Cantidad m\u00EDnima producto", 1, "form-control", "border-primary", 3, "ngModel", "ngClass", "ngModelChange", "keypress"], [1, "input-group"], [1, "d-inline-block", "custom-control", "custom-radio"], ["formControlName", "ismaterial", "type", "radio", "value", "yes", "id", "ismaterialradio1", 1, "custom-control-input", 3, "ngClass"], ["for", "ismaterialradio1", 1, "custom-control-label"], [1, "d-inline-block", "custom-control", "custom-radio", "ml-1"], ["formControlName", "ismaterial", "type", "radio", "value", "no", "id", "ismaterialradio2", 1, "custom-control-input", 3, "ngClass"], ["for", "ismaterialradio2", 1, "custom-control-label"], [1, "col-md-12"], [1, "row", "justify-content-center"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["id", "showaddingredients", "formArrayName", "ingredients", 1, "col-md-12", "mb-2", 2, "display", "none"], ["class", "", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "feather", "ft-plus"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "grey", "btn-outline-secondary", 3, "click"], [1, "feather", "ft-x"], ["type", "submit", 1, "btn", "btn-sm", "btn-outline-primary"], [1, "feather", "ft-check"], [1, "invalid-feedback"], [4, "ngIf"], ["value", "measure.id", 3, "value"], [1, "custom-control", "custom-radio"], ["checked", "", "value", "yes", "type", "radio", "name", "customRadio", "id", "customRadio1", 1, "custom-control-input", 3, "change"], ["for", "customRadio1", 1, "custom-control-label"], [1, "ml-1", "custom-control", "custom-radio"], ["value", "no", "type", "radio", "name", "customRadio", "id", "customRadio2", 1, "custom-control-input", 3, "change"], ["for", "customRadio2", 1, "custom-control-label"], ["value", "yes", "type", "radio", "name", "customRadio", "id", "customRadio1", 1, "custom-control-input", 3, "change"], ["value", "no", "type", "radio", "name", "customRadio", "id", "customRadio2", "checked", "", 1, "custom-control-input", 3, "change"], [1, ""], [1, "", 3, "formGroupName"], [1, "input-group", "mb-1"], ["name", "idIngredients", "formControlName", "idIngredients", 1, "form-control", 3, "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "quantity"], ["type", "text", "formControlName", "quantity", "id", "quantity", "placeholder", "Ingrese cantidad", "aria-describedby", "basic-addon2", 1, "form-control"], [1, "input-group-append"], ["formControlName", "measure2", "readonly", "", 1, "input-group-text", 3, "value"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [3, "value"]], template: function ProductModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductModalComponent_Template_button_click_4_listener() { return ctx.activeModal.dismiss("Cross click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ProductModalComponent_Template_form_ngSubmit_8_listener() { return ctx.onProductInfoSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Acerca del producto ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Nombre producto *");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProductModalComponent_Template_input_ngModelChange_18_listener($event) { return ctx.productService.selectedProduct.name = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ProductModalComponent_small_19_Template, 2, 1, "small", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Unidad de medida *");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "select", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Selecciona una opci\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ProductModalComponent_option_27_Template, 2, 2, "option", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ProductModalComponent_small_28_Template, 2, 1, "small", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Informaci\u00F3n del producto ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Neto *");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProductModalComponent_Template_input_ngModelChange_37_listener($event) { return ctx.productService.selectedProduct.neto = $event; })("keypress", function ProductModalComponent_Template_input_keypress_37_listener($event) { return ctx.keyPress($event); })("ngModelChange", function ProductModalComponent_Template_input_ngModelChange_37_listener($event) { return ctx.setIvaBruto($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, ProductModalComponent_small_38_Template, 2, 1, "small", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "IVA");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProductModalComponent_Template_input_ngModelChange_43_listener($event) { return ctx.productService.selectedProduct.iva = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, ProductModalComponent_small_44_Template, 2, 1, "small", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Bruto");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "input", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProductModalComponent_Template_input_ngModelChange_49_listener($event) { return ctx.productService.selectedProduct.bruto = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, ProductModalComponent_small_50_Template, 2, 1, "small", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Margen de ganacia");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProductModalComponent_Template_input_ngModelChange_55_listener($event) { return ctx.productService.selectedProduct.margen = $event; })("keypress", function ProductModalComponent_Template_input_keypress_55_listener($event) { return ctx.keyPress($event); })("change", function ProductModalComponent_Template_input_change_55_listener($event) { return ctx.setTotal($event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, ProductModalComponent_small_56_Template, 2, 1, "small", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Precio venta");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProductModalComponent_Template_input_ngModelChange_61_listener($event) { return ctx.productService.selectedProduct.total = $event; })("keypress", function ProductModalComponent_Template_input_keypress_61_listener($event) { return ctx.keyPress($event); })("change", function ProductModalComponent_Template_input_change_61_listener($event) { return ctx.setMargen($event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, ProductModalComponent_small_62_Template, 2, 1, "small", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Cantidad producto");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProductModalComponent_Template_input_ngModelChange_67_listener($event) { return ctx.productService.selectedProduct.stock = $event; })("keypress", function ProductModalComponent_Template_input_keypress_67_listener($event) { return ctx.keyPress($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, ProductModalComponent_small_68_Template, 2, 1, "small", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "label", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Cantidad m\u00EDnima producto");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "input", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProductModalComponent_Template_input_ngModelChange_73_listener($event) { return ctx.productService.selectedProduct.minimun = $event; })("keypress", function ProductModalComponent_Template_input_keypress_73_listener($event) { return ctx.keyPress($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, ProductModalComponent_small_74_Template, 2, 1, "small", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "\u00BFEs materia prima?");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "input", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "label", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "S\u00ED");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](85, "input", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "label", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "No");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](88, ProductModalComponent_small_88_Template, 2, 1, "small", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "\u00BFA\u00F1adir ingredientes?");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](94, ProductModalComponent_div_94_Template, 12, 0, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](95, ProductModalComponent_ng_template_95_Template, 11, 0, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](98, ProductModalComponent_div_98_Template, 23, 3, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "button", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductModalComponent_Template_button_click_99_listener() { return ctx.addPhone(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](100, "i", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, " Agregar receta ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "button", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductModalComponent_Template_button_click_103_listener() { return ctx.activeModal.dismiss("Cross click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](104, "i", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, " Cerrar ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "button", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](107, "i", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, " Guardar ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](96);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.opc ? "Editar producto" : "Agregar producto", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.productInfo);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.productService.selectedProduct.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](35, _c0, ctx.submitted && ctx.f.name.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.name.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](37, _c0, ctx.submitted && ctx.f.measure.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.measures);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.measure.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.productService.selectedProduct.neto)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](39, _c0, ctx.submitted && ctx.f.neto.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.neto.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.productService.selectedProduct.iva)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](41, _c0, ctx.submitted && ctx.f.iva.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.iva.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.productService.selectedProduct.bruto)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](43, _c0, ctx.submitted && ctx.f.bruto.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.bruto.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.productService.selectedProduct.margen)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](45, _c0, ctx.submitted && ctx.f.margen.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.margen.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.productService.selectedProduct.total)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](47, _c0, ctx.submitted && ctx.f.total.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.total.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.productService.selectedProduct.stock)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](49, _c0, ctx.submitted && ctx.f.stock.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.stock.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.productService.selectedProduct.minimun)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](51, _c0, ctx.submitted && ctx.f.minimun.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.minimun.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](53, _c0, ctx.submitted && ctx.f.ismaterial.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](55, _c0, ctx.submitted && ctx.f.ismaterial.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.ismaterial.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.productService.selectedProduct.ingredients != undefined && ctx.productService.selectedProduct.ingredients.length > 0)("ngIfElse", _r12);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.userFormGroup.controls);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"]], styles: [".right-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%], .right-checkbox[_ngcontent-%COMP%]   .custom-control-indicator[_ngcontent-%COMP%], .right-checkbox[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%], .right-radio[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%], .right-radio[_ngcontent-%COMP%]   .custom-control-indicator[_ngcontent-%COMP%], .right-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%] {\r\n  left: auto;\r\n  top: auto;\r\n  position: absolute;\r\n}\r\n\r\n.right-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%], .right-checkbox[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before, .right-checkbox[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::after, .right-checkbox[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%], .right-radio[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%], .right-radio[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before, .right-radio[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::after, .right-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%] {\r\n  left: auto;\r\n  right: 2%;\r\n}\r\n\r\n.radio.right-radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n}\r\n\r\n\r\n\r\n.skin[_ngcontent-%COMP%]   [class*=\"icheckbox_\"][_ngcontent-%COMP%], .skin[_ngcontent-%COMP%]   [class*=\"iradio_\"][_ngcontent-%COMP%], .icheck_square[_ngcontent-%COMP%]   [class*=\"icheckbox_\"][_ngcontent-%COMP%], .icheck_square[_ngcontent-%COMP%]   [class*=\"iradio_\"][_ngcontent-%COMP%] {\r\n  margin-right: 0.6rem;\r\n}\r\n\r\n.skin[_ngcontent-%COMP%]   [class*=\"icheckbox_line\"][_ngcontent-%COMP%], .skin[_ngcontent-%COMP%]   [class*=\"iradio_line\"][_ngcontent-%COMP%] {\r\n  margin-bottom: 0.6rem;\r\n}\r\n\r\n.state[class*=\"icheckbox_\"][_ngcontent-%COMP%]:hover, .state[class*=\"iradio_\"][_ngcontent-%COMP%]:hover {\r\n  cursor: default;\r\n}\r\n\r\n\r\n\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + img.img-thumbnail[_ngcontent-%COMP%] {\r\n  background-color: #666ee8;\r\n  color: #999966;\r\n  border-color: #666ee8;\r\n}\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n  background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  border-radius: 0rem !important;\r\n}\r\n\r\n.buttons-border-dropdown[_ngcontent-%COMP%] {\r\n  border-right: none !important;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n}\r\n\r\n[_nghost-%COMP%]     .dropdown .dropdown-menu {\r\n  margin: -0.1rem -3.7rem 0 !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .custom-checkbox {\r\n  margin-bottom: 3px;\r\n  margin-left: 5px;\r\n}\r\n\r\n[_nghost-%COMP%]     .custom-control {\r\n  margin-bottom: 3px;\r\n  min-height: auto;\r\n  margin-left: 5px;\r\n}\r\n\r\n[_nghost-%COMP%]     .switch.switch-small small {\r\n  width: 18px;\r\n  height: 18px;\r\n  margin-right: 1px;\r\n  margin-top: 1px;\r\n}\r\n\r\n[_nghost-%COMP%]     .input-group-prepend {\r\n  height: 40px;\r\n}\r\n\r\n[_nghost-%COMP%]     .input-group-height {\r\n  height: 50px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBTUUsVUFBVTtFQUNWLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7Ozs7O0VBUUUsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsV0FBVzs7QUFFWDs7OztFQUlFLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQSwyQkFBMkI7O0FBRTNCO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InByb2R1Y3QtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodC1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbi5yaWdodC1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLFxyXG4ucmlnaHQtY2hlY2tib3ggaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxyXG4ucmlnaHQtcmFkaW8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxyXG4ucmlnaHQtcmFkaW8gLmN1c3RvbS1jb250cm9sLWluZGljYXRvcixcclxuLnJpZ2h0LXJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgbGVmdDogYXV0bztcclxuICB0b3A6IGF1dG87XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ucmlnaHQtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxyXG4ucmlnaHQtY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXHJcbi5yaWdodC1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyLFxyXG4ucmlnaHQtY2hlY2tib3ggaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxyXG4ucmlnaHQtcmFkaW8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxyXG4ucmlnaHQtcmFkaW8gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXHJcbi5yaWdodC1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyLFxyXG4ucmlnaHQtcmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiAyJTtcclxufVxyXG5cclxuLnJhZGlvLnJpZ2h0LXJhZGlvIGxhYmVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi8qIGlDaGVjayAqL1xyXG5cclxuLnNraW4gW2NsYXNzKj1cImljaGVja2JveF9cIl0sXHJcbi5za2luIFtjbGFzcyo9XCJpcmFkaW9fXCJdLFxyXG4uaWNoZWNrX3NxdWFyZSBbY2xhc3MqPVwiaWNoZWNrYm94X1wiXSxcclxuLmljaGVja19zcXVhcmUgW2NsYXNzKj1cImlyYWRpb19cIl0ge1xyXG4gIG1hcmdpbi1yaWdodDogMC42cmVtO1xyXG59XHJcblxyXG4uc2tpbiBbY2xhc3MqPVwiaWNoZWNrYm94X2xpbmVcIl0sXHJcbi5za2luIFtjbGFzcyo9XCJpcmFkaW9fbGluZVwiXSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xyXG59XHJcblxyXG4uc3RhdGVbY2xhc3MqPVwiaWNoZWNrYm94X1wiXTpob3ZlcixcclxuLnN0YXRlW2NsYXNzKj1cImlyYWRpb19cIl06aG92ZXIge1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLyogSW1hZ2UgQ2hlY2tib3ggc2VsZWN0ZWQqL1xyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBpbWcuaW1nLXRodW1ibmFpbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NmVlODtcclxuICBjb2xvcjogIzk5OTk2NjtcclxuICBib3JkZXItY29sb3I6ICM2NjZlZTg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDByZW0gIWltcG9ydGFudDtcclxufVxyXG4uYnV0dG9ucy1ib3JkZXItZHJvcGRvd24ge1xyXG4gIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5pbnB1dC1ncm91cCA+IC5mb3JtLWNvbnRyb2wge1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcclxuICBtYXJnaW46IC0wLjFyZW0gLTMuN3JlbSAwICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tY2hlY2tib3gge1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWNvbnRyb2wge1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxuICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5zd2l0Y2guc3dpdGNoLXNtYWxsIHNtYWxsIHtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuaW5wdXQtZ3JvdXAtaGVpZ2h0IHtcclxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('productInfo'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ProductModalComponent.prototype, "blockUIProjectInfo", void 0);
    return ProductModalComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](ProductModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'app-product-modal',
                templateUrl: './product-modal.component.html',
                styleUrls: ['./product-modal.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _api_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
            }] }]; }, { opc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], blockUIProjectInfo: [], passEntry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }] }); })();


/***/ }),

/***/ "rPv6":
/*!************************************************************************!*\
  !*** ./src/app/content/product/product-list/product-list.component.ts ***!
  \************************************************************************/
/*! exports provided: compare, NgbSortable, ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbSortable", function() { return NgbSortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../product-modal/product-modal.component */ "KP2V");
/* harmony import */ var _services_notificacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../_services/notificacion.service */ "ScZz");
/* harmony import */ var _services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../_services/confirmation-dialog.service */ "+7SE");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../_directives/sortable.directive */ "lfl4");
/* harmony import */ var _api_product_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../_api/product/product.service */ "TwWe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../_layout/breadcrumb/breadcrumb.component */ "/DnI");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");



















function ProductListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductListComponent_div_7_tr_35_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ngb-highlight", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "ngb-highlight", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "ngb-highlight", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "ngb-highlight", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "ngb-highlight", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductListComponent_div_7_tr_35_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); var element_r3 = ctx.$implicit; var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r5.onUpdateProduct(element_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductListComponent_div_7_tr_35_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); var element_r3 = ctx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r7.onDeleteProduct(element_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r3 = ctx.$implicit;
    var i_r4 = ctx.index;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("result", element_r3.name)("term", ctx_r2.filter.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("result", element_r3.margen)("term", ctx_r2.filter.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("result", element_r3.total)("term", ctx_r2.filter.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("result", element_r3.stock)("term", ctx_r2.filter.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("result", element_r3.minimun)("term", ctx_r2.filter.value);
} }
function ProductListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Gesti\u00F3n de productos");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Buscar: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductListComponent_div_7_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r8.onAddProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Agregar producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Ganancia (%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Precio venta ($)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Stock cr\u00EDtico");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, ProductListComponent_div_7_tr_35_Template, 18, 11, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](37, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "ngb-pagination", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function ProductListComponent_div_7_Template_ngb_pagination_pageChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r10.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ProductListComponent_div_7_Template_select_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r11.pageSize = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "2 \u00EDtems por p\u00E1gina");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "4 \u00EDtems por p\u00E1gina");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "6 \u00EDtems por p\u00E1gina");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx_r1.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](36, 9, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](37, 13, ctx_r1.productSearch), (ctx_r1.page - 1) * ctx_r1.pageSize, (ctx_r1.page - 1) * ctx_r1.pageSize + ctx_r1.pageSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collectionSize", ctx_r1.collectionSize)("page", ctx_r1.page)("pageSize", ctx_r1.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r1.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngValue", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngValue", 6);
} }
var rotate = { 'asc': 'desc', 'desc': '', '': 'asc' };
var compare = function (v1, v2) { return v1 < v2 ? -1 : v1 > v2 ? 1 : 0; };
var NgbSortable = /** @class */ (function () {
    function NgbSortable() {
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    }
    NgbSortable.prototype.rotate = function () {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    };
    NgbSortable.ɵfac = function NgbSortable_Factory(t) { return new (t || NgbSortable)(); };
    NgbSortable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({ type: NgbSortable, selectors: [["th", "sortable", ""]], hostVars: 4, hostBindings: function NgbSortable_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NgbSortable_click_HostBindingHandler() { return ctx.rotate(); });
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
        } }, inputs: { sortable: "sortable", direction: "direction" }, outputs: { sort: "sort" } });
    return NgbSortable;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](NgbSortable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
        args: [{
                selector: 'th[sortable]',
                host: {
                    '[class.asc]': 'direction === "asc"',
                    '[class.desc]': 'direction === "desc"',
                    '(click)': 'rotate()'
                }
            }]
    }], null, { sortable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
        }], direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
        }] }); })();
// End parameter for table.
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, confirmationDialogService, modalService, notifyService) {
        this.productService = productService;
        this.confirmationDialogService = confirmationDialogService;
        this.modalService = modalService;
        this.notifyService = notifyService;
        this.closeResult = '';
        this.loading = false;
        this.filter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.page = 1;
        this.pageSize = 4;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.breadcrumb = {
            'mainlabel': 'Lista de productos',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/ecommerce'
                },
                {
                    'name': 'Productos',
                    'isLink': false,
                    'link': ''
                }
            ]
        };
        this.getUserLogged();
        this.getFullInfoProduct();
    };
    ProductListComponent.prototype.getFullInfoProduct = function () {
        var _this = this;
        this.loading = true;
        this.productService.getFullInfoProduct(this.currentUser.uid).subscribe(function (product) {
            console.log("DATOS:", product);
            //console.log("ESTA WEA TRAE:", Object.entries(product[0].ingredients).length === 0);
            _this.PRODUCT = product;
            _this.collectionSize = _this.PRODUCT.length;
            _this.searchData(_this.pipe);
            _this.productSortable = _this.PRODUCT;
            _this.loading = false;
        });
    };
    ProductListComponent.prototype.onAddProduct = function () {
        var _this = this;
        this.productService.selectedProduct = Object.assign({}, {});
        var modalRef = this.modalService.open(_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_1__["ProductModalComponent"], { windowClass: 'animated fadeInDown', scrollable: true });
        modalRef.componentInstance.opc = false;
        modalRef.result.then(function (result) {
            console.log("resultado del modal: ", result);
            if (result) {
                _this.notifyService.showSuccess("Agregar", "¡El nuevo producto se agregó correctamente!");
            }
            else {
                _this.notifyService.showSuccess("Actualizar", "¡El nuevo producto se actualizó correctamente!");
            }
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            console.log(_this.closeResult);
        });
    };
    ProductListComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ProductListComponent.prototype.onUpdateProduct = function (product) {
        var _this = this;
        this.productService.selectedProduct = Object.assign({}, product);
        var modalRef = this.modalService.open(_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_1__["ProductModalComponent"], { windowClass: 'animated fadeInDown' });
        modalRef.componentInstance.opc = true;
        modalRef.result.then(function (result) {
            if (!result) {
                _this.notifyService.showSuccess("Editar", "¡El producto se editó correctamente!");
            }
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            console.log(_this.closeResult);
        });
    };
    ProductListComponent.prototype.onDeleteProduct = function (idProduct) {
        var _this = this;
        console.log("Delete Work: ", idProduct);
        console.log("Delete Work Boss: ", this.currentUser.uid);
        this.confirmationDialogService.confirm('Confirmación', '¿Estás seguro de eliminar el producto?')
            .then(function (confirmed) {
            if (!confirmed) {
            }
            else {
                _this.productService.deleteProduct(idProduct, _this.currentUser.uid);
                _this.notifyService.showSuccess("Eliminar", "¡El producto se eliminó correctamente!");
            }
        }).catch(function () {
            console.log("Not ok");
        });
        //
    };
    ProductListComponent.prototype.getUserLogged = function () {
        if (localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
    };
    /**
    *
    * '@param' pipe
    */
    ProductListComponent.prototype.searchData = function (pipe) {
        var _this = this;
        console.log("this.productSearch ", this.productSearch);
        this.productSearch = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (text) { return _this.search(text, pipe); }));
    };
    /**
     * Search table
     * '@param' text
     * '@param' pipe
     */
    ProductListComponent.prototype.search = function (text, pipe) {
        return this.PRODUCT.filter(function (response) {
            var term = text.toLowerCase();
            return response.name.toLowerCase().includes(term)
                || response.margen.toLowerCase().includes(term)
                || response.total.toLowerCase().includes(term)
                || response.stock.toLowerCase().includes(term)
                || response.minimun.toLowerCase().includes(term);
        });
    };
    Object.defineProperty(ProductListComponent.prototype, "PaginationData", {
        /**
        * Pagination table
        */
        get: function () {
            if (this.PRODUCT) {
                return this.PRODUCT.map(function (person, i) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: i + 1 }, person)); })
                    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
            }
        },
        enumerable: false,
        configurable: true
    });
    ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_api_product_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_notificacion_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"])); };
    ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], viewQuery: function ProductListComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_6__["NgbdSortableHeader"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](NgbSortable, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.headers1 = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.headers = _t);
        } }, decls: 8, vars: 4, consts: [[1, "app-content", "content"], ["class", "loader-wrapper", 4, "ngIf"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], [1, "row"], ["class", "col-sm-12", 4, "blockUI", "blockUIMessage"], [1, "loader-wrapper"], [1, "loader-container"], [1, "ball-rotate", "loader-danger"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "row", "justify-content-between"], [1, "col-4"], [1, "ml-2", "form-group", "form-inline"], ["type", "text", 1, "form-control", "ml-2", 3, "formControl"], [1, "col-4", "col-sm-3", "col-lg-4"], [1, "btn", "btn-primary", "btn-min-width", "mr-1", "mb-1", 3, "click"], [1, "la", "la-plus"], [1, "table-responsive", "card-body"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "p-2"], [3, "collectionSize", "page", "pageSize", "pageChange"], [1, "custom-select", 2, "width", "auto", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["scope", "row"], [3, "result", "term"], [1, "btn", "btn-xs", "btn-social-icon", "mr-1", "mb-1", "btn-instagram", 3, "click"], [1, "la", "la-pencil"], [1, "btn", "btn-xs", "btn-social-icon", "mr-1", "mb-1", "btn-pinterest", 3, "click"], [1, "la", "la-trash"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ProductListComponent_div_1_Template, 4, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-breadcrumb", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ProductListComponent_div_7_Template, 47, 15, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("blockUI", "basicTables")("blockUIMessage", "Loading");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbComponent"], ng_block_ui__WEBPACK_IMPORTED_MODULE_12__["ɵf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbHighlight"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["th[sortable].asc[_ngcontent-%COMP%]:before {\r\n    content: '\\2191';\r\n    display: block;\r\n    width: 22px;\r\n    height: 22px;\r\n    float: left;\r\n    margin-left: -22px;\r\n}\r\n\r\nth[sortable].desc[_ngcontent-%COMP%]:before {\r\n    content: '\\2193';\r\n    display: block;\r\n    width: 22px;\r\n    height: 22px;\r\n    float: left;\r\n    margin-left: -22px;\r\n}\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n    background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .close:not(:disabled):not(.disabled):hover, .close[_ngcontent-%COMP%]:not(:disabled):not(.disabled):focus {\r\n    outline: none !important;\r\n}\r\n\r\n\r\n\r\n.loader-white[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #fff !important;\r\n}\r\n\r\n.loader-white.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #fff !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-white.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #fff !important;\r\n}\r\n\r\n.loader-white.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #fff transparent #fff transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-white.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #fff transparent #fff !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-white.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-white.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #fff !important;\r\n}\r\n\r\n.loader-white.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #fff !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-white.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #fff !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-white.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #fff !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-white.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #fff !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-white.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #fff 30%, #fff 100%);\r\n}\r\n\r\n.loader-white.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-white.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #fff !important;\r\n}\r\n\r\n.loader-white.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-white.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #fff !important;\r\n}\r\n\r\n.loader-black[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #000 !important;\r\n}\r\n\r\n.loader-black.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #000 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-black.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #000 !important;\r\n}\r\n\r\n.loader-black.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #000 transparent #000 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-black.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #000 transparent #000 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-black.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-black.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #000 !important;\r\n}\r\n\r\n.loader-black.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #000 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-black.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #000 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-black.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #000 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-black.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #000 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-black.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #000 30%, #000 100%);\r\n}\r\n\r\n.loader-black.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-black.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #000 !important;\r\n}\r\n\r\n.loader-black.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-black.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #000 !important;\r\n}\r\n\r\n.loader-primary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #666ee8 !important;\r\n}\r\n\r\n.loader-primary.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #666ee8 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #666ee8 !important;\r\n}\r\n\r\n.loader-primary.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #666ee8 transparent #666ee8 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-primary.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #666ee8 transparent #666ee8 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-primary.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #666ee8 !important;\r\n}\r\n\r\n.loader-primary.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #666ee8 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #666ee8 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #666ee8 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #666ee8 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #666ee8 30%, #666ee8 100%);\r\n}\r\n\r\n.loader-primary.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #666ee8 !important;\r\n}\r\n\r\n.loader-primary.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #666ee8 !important;\r\n}\r\n\r\n.loader-success[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #28d094 !important;\r\n}\r\n\r\n.loader-success.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #28d094 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-success.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #28d094 !important;\r\n}\r\n\r\n.loader-success.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #28d094 transparent #28d094 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-success.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #28d094 transparent #28d094 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-success.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-success.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #28d094 !important;\r\n}\r\n\r\n.loader-success.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #28d094 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-success.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #28d094 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-success.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #28d094 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-success.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #28d094 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-success.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #28d094 30%, #28d094 100%);\r\n}\r\n\r\n.loader-success.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-success.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #28d094 !important;\r\n}\r\n\r\n.loader-success.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-success.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #28d094 !important;\r\n}\r\n\r\n.loader-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #1e9ff2 !important;\r\n}\r\n\r\n.loader-info.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #1e9ff2 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-info.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #1e9ff2 !important;\r\n}\r\n\r\n.loader-info.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #1e9ff2 transparent #1e9ff2 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-info.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #1e9ff2 transparent #1e9ff2 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-info.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-info.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #1e9ff2 !important;\r\n}\r\n\r\n.loader-info.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #1e9ff2 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-info.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #1e9ff2 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-info.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #1e9ff2 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-info.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #1e9ff2 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-info.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #1e9ff2 30%, #1e9ff2 100%);\r\n}\r\n\r\n.loader-info.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-info.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #1e9ff2 !important;\r\n}\r\n\r\n.loader-info.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-info.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #1e9ff2 !important;\r\n}\r\n\r\n.loader-warning[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #ff9149 !important;\r\n}\r\n\r\n.loader-warning.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ff9149 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #ff9149 !important;\r\n}\r\n\r\n.loader-warning.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #ff9149 transparent #ff9149 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-warning.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #ff9149 transparent #ff9149 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-warning.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #ff9149 !important;\r\n}\r\n\r\n.loader-warning.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ff9149 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ff9149 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ff9149 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #ff9149 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #ff9149 30%, #ff9149 100%);\r\n}\r\n\r\n.loader-warning.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #ff9149 !important;\r\n}\r\n\r\n.loader-warning.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #ff9149 !important;\r\n}\r\n\r\n.loader-danger[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #ff4961 !important;\r\n}\r\n\r\n.loader-danger.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ff4961 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #ff4961 !important;\r\n}\r\n\r\n.loader-danger.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #ff4961 transparent #ff4961 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-danger.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #ff4961 transparent #ff4961 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-danger.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #ff4961 !important;\r\n}\r\n\r\n.loader-danger.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ff4961 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ff4961 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ff4961 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #ff4961 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #ff4961 30%, #ff4961 100%);\r\n}\r\n\r\n.loader-danger.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #ff4961 !important;\r\n}\r\n\r\n.loader-danger.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #ff4961 !important;\r\n}\r\n\r\n.loader-red[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #f44336 !important;\r\n}\r\n\r\n.loader-red.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #f44336 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-red.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #f44336 !important;\r\n}\r\n\r\n.loader-red.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #f44336 transparent #f44336 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-red.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #f44336 transparent #f44336 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-red.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-red.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #f44336 !important;\r\n}\r\n\r\n.loader-red.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #f44336 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-red.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #f44336 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-red.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #f44336 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-red.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #f44336 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-red.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #f44336 30%, #f44336 100%);\r\n}\r\n\r\n.loader-red.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-red.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #f44336 !important;\r\n}\r\n\r\n.loader-red.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-red.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #f44336 !important;\r\n}\r\n\r\n.loader-pink[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #e91e63 !important;\r\n}\r\n\r\n.loader-pink.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #e91e63 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #e91e63 !important;\r\n}\r\n\r\n.loader-pink.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #e91e63 transparent #e91e63 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-pink.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #e91e63 transparent #e91e63 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-pink.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #e91e63 !important;\r\n}\r\n\r\n.loader-pink.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #e91e63 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #e91e63 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #e91e63 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #e91e63 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #e91e63 30%, #e91e63 100%);\r\n}\r\n\r\n.loader-pink.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #e91e63 !important;\r\n}\r\n\r\n.loader-pink.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #e91e63 !important;\r\n}\r\n\r\n.loader-purple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #9c27b0 !important;\r\n}\r\n\r\n.loader-purple.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #9c27b0 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #9c27b0 !important;\r\n}\r\n\r\n.loader-purple.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #9c27b0 transparent #9c27b0 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-purple.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #9c27b0 transparent #9c27b0 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-purple.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #9c27b0 !important;\r\n}\r\n\r\n.loader-purple.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #9c27b0 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #9c27b0 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #9c27b0 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #9c27b0 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #9c27b0 30%, #9c27b0 100%);\r\n}\r\n\r\n.loader-purple.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #9c27b0 !important;\r\n}\r\n\r\n.loader-purple.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #9c27b0 !important;\r\n}\r\n\r\n.loader-blue[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #2196f3 !important;\r\n}\r\n\r\n.loader-blue.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #2196f3 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #2196f3 !important;\r\n}\r\n\r\n.loader-blue.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #2196f3 transparent #2196f3 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-blue.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #2196f3 transparent #2196f3 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-blue.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #2196f3 !important;\r\n}\r\n\r\n.loader-blue.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #2196f3 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #2196f3 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #2196f3 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #2196f3 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #2196f3 30%, #2196f3 100%);\r\n}\r\n\r\n.loader-blue.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #2196f3 !important;\r\n}\r\n\r\n.loader-blue.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #2196f3 !important;\r\n}\r\n\r\n.loader-cyan[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #00bcd4 !important;\r\n}\r\n\r\n.loader-cyan.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #00bcd4 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #00bcd4 !important;\r\n}\r\n\r\n.loader-cyan.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #00bcd4 transparent #00bcd4 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-cyan.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #00bcd4 transparent #00bcd4 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-cyan.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #00bcd4 !important;\r\n}\r\n\r\n.loader-cyan.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #00bcd4 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #00bcd4 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #00bcd4 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #00bcd4 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #00bcd4 30%, #00bcd4 100%);\r\n}\r\n\r\n.loader-cyan.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #00bcd4 !important;\r\n}\r\n\r\n.loader-cyan.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #00bcd4 !important;\r\n}\r\n\r\n.loader-teal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #009688 !important;\r\n}\r\n\r\n.loader-teal.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #009688 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #009688 !important;\r\n}\r\n\r\n.loader-teal.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #009688 transparent #009688 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-teal.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #009688 transparent #009688 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-teal.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #009688 !important;\r\n}\r\n\r\n.loader-teal.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #009688 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #009688 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #009688 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #009688 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #009688 30%, #009688 100%);\r\n}\r\n\r\n.loader-teal.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #009688 !important;\r\n}\r\n\r\n.loader-teal.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #009688 !important;\r\n}\r\n\r\n.loader-yellow[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #ffeb3b !important;\r\n}\r\n\r\n.loader-yellow.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ffeb3b !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #ffeb3b !important;\r\n}\r\n\r\n.loader-yellow.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #ffeb3b transparent #ffeb3b transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-yellow.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #ffeb3b transparent #ffeb3b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-yellow.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #ffeb3b !important;\r\n}\r\n\r\n.loader-yellow.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ffeb3b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ffeb3b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ffeb3b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #ffeb3b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #ffeb3b 30%, #ffeb3b 100%);\r\n}\r\n\r\n.loader-yellow.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #ffeb3b !important;\r\n}\r\n\r\n.loader-yellow.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #ffeb3b !important;\r\n}\r\n\r\n.loader-amber[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #ffc107 !important;\r\n}\r\n\r\n.loader-amber.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ffc107 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #ffc107 !important;\r\n}\r\n\r\n.loader-amber.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #ffc107 transparent #ffc107 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-amber.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #ffc107 transparent #ffc107 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-amber.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #ffc107 !important;\r\n}\r\n\r\n.loader-amber.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ffc107 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ffc107 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ffc107 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #ffc107 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #ffc107 30%, #ffc107 100%);\r\n}\r\n\r\n.loader-amber.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #ffc107 !important;\r\n}\r\n\r\n.loader-amber.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #ffc107 !important;\r\n}\r\n\r\n.loader-blue-grey[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #607d8b !important;\r\n}\r\n\r\n.loader-blue-grey.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #607d8b !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #607d8b !important;\r\n}\r\n\r\n.loader-blue-grey.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #607d8b transparent #607d8b transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #607d8b transparent #607d8b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-blue-grey.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #607d8b !important;\r\n}\r\n\r\n.loader-blue-grey.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #607d8b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #607d8b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #607d8b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #607d8b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #607d8b 30%, #607d8b 100%);\r\n}\r\n\r\n.loader-blue-grey.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #607d8b !important;\r\n}\r\n\r\n.loader-blue-grey.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #607d8b !important;\r\n}\r\n\r\n.loader-grey-blue[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #1b2942 !important;\r\n}\r\n\r\n.loader-grey-blue.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #1b2942 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #1b2942 !important;\r\n}\r\n\r\n.loader-grey-blue.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #1b2942 transparent #1b2942 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #1b2942 transparent #1b2942 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-grey-blue.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #1b2942 !important;\r\n}\r\n\r\n.loader-grey-blue.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #1b2942 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #1b2942 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #1b2942 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #1b2942 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #1b2942 30%, #1b2942 100%);\r\n}\r\n\r\n.loader-grey-blue.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #1b2942 !important;\r\n}\r\n\r\n.loader-grey-blue.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #1b2942 !important;\r\n}\r\n\r\n.mb-1[_ngcontent-%COMP%], .my-1[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem !important;\r\n    margin-left: 0.3rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwwREFBMEQ7SUFDMUQsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksMERBQTBEO0lBQzFELHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsdUZBQXVGO0FBQzNGOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwwREFBMEQ7SUFDMUQsa0NBQWtDO0FB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QTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsNkZBQTZGO0FBQ2pHOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoW3NvcnRhYmxlXS5hc2M6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdcXDIxOTEnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMnB4O1xyXG59XHJcblxyXG50aFtzb3J0YWJsZV0uZGVzYzpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ1xcMjE5Myc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIycHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jbG9zZTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpob3ZlciwgLmNsb3NlOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLypDU1MgRk9SIFNQSU5ORVIqL1xyXG5cclxuLmxvYWRlci13aGl0ZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdoaXRlLmJhbGwtY2xpcC1yb3RhdGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdoaXRlLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50ICNmZmYgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUuYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUuYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci13aGl0ZS5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdoaXRlLmJhbGwtdHJpYW5nbGUtcGF0aCBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdoaXRlLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUuYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci13aGl0ZS50cmlhbmdsZS1za2V3LXNwaW4gZGl2IHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUuc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjZmZmKSwgdG8oI2ZmZikpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmZiAzMCUsICNmZmYgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmZmIDMwJSwgI2ZmZiAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmZmIDMwJSwgI2ZmZiAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgI2ZmZiksIHRvKCNmZmYpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmZmIDMwJSwgI2ZmZiAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci13aGl0ZS5mYWRpbmctY2lyY2xlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdoaXRlLmZhZGluZy1jaXJjbGUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUuZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdoaXRlLmZvbGRpbmctY3ViZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibGFjayBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsYWNrLmJhbGwtY2xpcC1yb3RhdGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmxhY2suYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsYWNrLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwIHRyYW5zcGFyZW50ICMwMDAgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmxhY2suYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjMDAwIHRyYW5zcGFyZW50ICMwMDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmxhY2suYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci1ibGFjay5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsYWNrLmJhbGwtdHJpYW5nbGUtcGF0aCBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsYWNrLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmxhY2suYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibGFjay50cmlhbmdsZS1za2V3LXNwaW4gZGl2IHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmxhY2suc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjMDAwKSwgdG8oIzAwMCkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzAwMCAzMCUsICMwMDAgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDAwIDMwJSwgIzAwMCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDAwIDMwJSwgIzAwMCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzAwMCksIHRvKCMwMDApKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDAwIDMwJSwgIzAwMCAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1ibGFjay5mYWRpbmctY2lyY2xlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsYWNrLmZhZGluZy1jaXJjbGUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmxhY2suZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsYWNrLmZvbGRpbmctY3ViZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wcmltYXJ5IGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2ZWU4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHJpbWFyeS5iYWxsLWNsaXAtcm90YXRlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2NjZlZTggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXByaW1hcnkuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogIzY2NmVlOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXByaW1hcnkuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2NjZlZTggdHJhbnNwYXJlbnQgIzY2NmVlOCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wcmltYXJ5LmJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzY2NmVlOCB0cmFuc3BhcmVudCAjNjY2ZWU4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXByaW1hcnkuYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci1wcmltYXJ5LmJhbGwtcm90YXRlIGRpdjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2ZWU4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHJpbWFyeS5iYWxsLXRyaWFuZ2xlLXBhdGggZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzY2NmVlOCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wcmltYXJ5LmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2NjZlZTggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHJpbWFyeS5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNjY2ZWU4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXByaW1hcnkudHJpYW5nbGUtc2tldy1zcGluIGRpdiB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjY2ZWU4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXByaW1hcnkuc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjNjY2ZWU4KSwgdG8oIzY2NmVlOCkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzY2NmVlOCAzMCUsICM2NjZlZTggMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjNjY2ZWU4IDMwJSwgIzY2NmVlOCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjNjY2ZWU4IDMwJSwgIzY2NmVlOCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzY2NmVlOCksIHRvKCM2NjZlZTgpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjNjY2ZWU4IDMwJSwgIzY2NmVlOCAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1wcmltYXJ5LmZhZGluZy1jaXJjbGUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHJpbWFyeS5mYWRpbmctY2lyY2xlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NmVlOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXByaW1hcnkuZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXByaW1hcnkuZm9sZGluZy1jdWJlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NmVlOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXN1Y2Nlc3MgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGQwOTQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1zdWNjZXNzLmJhbGwtY2xpcC1yb3RhdGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzI4ZDA5NCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjhkMDk0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzI4ZDA5NCB0cmFuc3BhcmVudCAjMjhkMDk0IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXN1Y2Nlc3MuYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjMjhkMDk0IHRyYW5zcGFyZW50ICMyOGQwOTQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy5iYWxsLXJvdGF0ZSBkaXY6YmVmb3JlLCAubG9hZGVyLXN1Y2Nlc3MuYmFsbC1yb3RhdGUgZGl2OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGQwOTQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1zdWNjZXNzLmJhbGwtdHJpYW5nbGUtcGF0aCBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjhkMDk0ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXN1Y2Nlc3MuYmFsbC1zY2FsZS1yaXBwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzI4ZDA5NCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1zdWNjZXNzLmJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyOGQwOTQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy50cmlhbmdsZS1za2V3LXNwaW4gZGl2IHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMyOGQwOTQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy5zZW1pLWNpcmNsZS1zcGluIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICMyOGQwOTQpLCB0bygjMjhkMDk0KSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMjhkMDk0IDMwJSwgIzI4ZDA5NCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMyOGQwOTQgMzAlLCAjMjhkMDk0IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMyOGQwOTQgMzAlLCAjMjhkMDk0IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjMjhkMDk0KSwgdG8oIzI4ZDA5NCkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMyOGQwOTQgMzAlLCAjMjhkMDk0IDEwMCUpO1xyXG59XHJcblxyXG4ubG9hZGVyLXN1Y2Nlc3MuZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1zdWNjZXNzLmZhZGluZy1jaXJjbGUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhkMDk0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy5mb2xkaW5nLWN1YmUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhkMDk0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItaW5mbyBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlOWZmMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWluZm8uYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWU5ZmYyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQ6ICMxZTlmZjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWU5ZmYyIHRyYW5zcGFyZW50ICMxZTlmZjIgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItaW5mby5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMxZTlmZjIgdHJhbnNwYXJlbnQgIzFlOWZmMiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLmJhbGwtcm90YXRlIGRpdjpiZWZvcmUsIC5sb2FkZXItaW5mby5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlOWZmMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWluZm8uYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMxZTlmZjIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItaW5mby5iYWxsLXNjYWxlLXJpcHBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWU5ZmYyICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWluZm8uYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzFlOWZmMiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzFlOWZmMiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLnNlbWktY2lyY2xlLXNwaW4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCByaWdodCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzFlOWZmMiksIHRvKCMxZTlmZjIpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMxZTlmZjIgMzAlLCAjMWU5ZmYyIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzFlOWZmMiAzMCUsICMxZTlmZjIgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzFlOWZmMiAzMCUsICMxZTlmZjIgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICMxZTlmZjIpLCB0bygjMWU5ZmYyKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzFlOWZmMiAzMCUsICMxZTlmZjIgMTAwJSk7XHJcbn1cclxuXHJcbi5sb2FkZXItaW5mby5mYWRpbmctY2lyY2xlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWluZm8uZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTlmZjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLmZvbGRpbmctY3ViZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLmZvbGRpbmctY3ViZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTlmZjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci13YXJuaW5nIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MTQ5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2FybmluZy5iYWxsLWNsaXAtcm90YXRlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjkxNDkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdhcm5pbmcuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOTE0OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdhcm5pbmcuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjkxNDkgdHJhbnNwYXJlbnQgI2ZmOTE0OSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci13YXJuaW5nLmJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZmOTE0OSB0cmFuc3BhcmVudCAjZmY5MTQ5ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdhcm5pbmcuYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci13YXJuaW5nLmJhbGwtcm90YXRlIGRpdjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MTQ5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2FybmluZy5iYWxsLXRyaWFuZ2xlLXBhdGggZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmOTE0OSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci13YXJuaW5nLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjkxNDkgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2FybmluZy5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY5MTQ5ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdhcm5pbmcudHJpYW5nbGUtc2tldy1zcGluIGRpdiB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmY5MTQ5ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdhcm5pbmcuc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjZmY5MTQ5KSwgdG8oI2ZmOTE0OSkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmOTE0OSAzMCUsICNmZjkxNDkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmY5MTQ5IDMwJSwgI2ZmOTE0OSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmY5MTQ5IDMwJSwgI2ZmOTE0OSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgI2ZmOTE0OSksIHRvKCNmZjkxNDkpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmY5MTQ5IDMwJSwgI2ZmOTE0OSAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci13YXJuaW5nLmZhZGluZy1jaXJjbGUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2FybmluZy5mYWRpbmctY2lyY2xlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTE0OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdhcm5pbmcuZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdhcm5pbmcuZm9sZGluZy1jdWJlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTE0OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlciBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDk2MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5iYWxsLWNsaXAtcm90YXRlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjQ5NjEgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY0OTYxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItZGFuZ2VyLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY0OTYxIHRyYW5zcGFyZW50ICNmZjQ5NjEgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItZGFuZ2VyLmJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZmNDk2MSB0cmFuc3BhcmVudCAjZmY0OTYxICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5iYWxsLXJvdGF0ZSBkaXY6YmVmb3JlLCAubG9hZGVyLWRhbmdlci5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDk2MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5iYWxsLXRyaWFuZ2xlLXBhdGggZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmNDk2MSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1kYW5nZXIuYmFsbC1zY2FsZS1yaXBwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmNDk2MSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1kYW5nZXIuYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmNDk2MSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1kYW5nZXIudHJpYW5nbGUtc2tldy1zcGluIGRpdiB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmY0OTYxICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5zZW1pLWNpcmNsZS1zcGluIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICNmZjQ5NjEpLCB0bygjZmY0OTYxKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmY0OTYxIDMwJSwgI2ZmNDk2MSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZjQ5NjEgMzAlLCAjZmY0OTYxIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZjQ5NjEgMzAlLCAjZmY0OTYxIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjZmY0OTYxKSwgdG8oI2ZmNDk2MSkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZjQ5NjEgMzAlLCAjZmY0OTYxIDEwMCUpO1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5mYWRpbmctY2lyY2xlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5mYWRpbmctY2lyY2xlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDk2MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5mb2xkaW5nLWN1YmUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItZGFuZ2VyLmZvbGRpbmctY3ViZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQ5NjEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogI2Y0NDMzNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXJlZC5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y0NDMzNiB0cmFuc3BhcmVudCAjZjQ0MzM2IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXJlZC5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmNDQzMzYgdHJhbnNwYXJlbnQgI2Y0NDMzNiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci1yZWQuYmFsbC1yb3RhdGUgZGl2OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcmVkLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcmVkLmJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcmVkLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2Y0NDMzNiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjZjQ0MzM2KSwgdG8oI2Y0NDMzNikpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2Y0NDMzNiAzMCUsICNmNDQzMzYgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZjQ0MzM2IDMwJSwgI2Y0NDMzNiAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZjQ0MzM2IDMwJSwgI2Y0NDMzNiAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgI2Y0NDMzNiksIHRvKCNmNDQzMzYpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZjQ0MzM2IDMwJSwgI2Y0NDMzNiAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXJlZC5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcGluayBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5MWU2MyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXBpbmsuYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTkxZTYzICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1waW5rLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOTFlNjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1waW5rLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTkxZTYzIHRyYW5zcGFyZW50ICNlOTFlNjMgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcGluay5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNlOTFlNjMgdHJhbnNwYXJlbnQgI2U5MWU2MyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1waW5rLmJhbGwtcm90YXRlIGRpdjpiZWZvcmUsIC5sb2FkZXItcGluay5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5MWU2MyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXBpbmsuYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlOTFlNjMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcGluay5iYWxsLXNjYWxlLXJpcHBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTkxZTYzICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXBpbmsuYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2U5MWU2MyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1waW5rLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2U5MWU2MyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1waW5rLnNlbWktY2lyY2xlLXNwaW4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCByaWdodCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgI2U5MWU2MyksIHRvKCNlOTFlNjMpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNlOTFlNjMgMzAlLCAjZTkxZTYzIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2U5MWU2MyAzMCUsICNlOTFlNjMgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2U5MWU2MyAzMCUsICNlOTFlNjMgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICNlOTFlNjMpLCB0bygjZTkxZTYzKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2U5MWU2MyAzMCUsICNlOTFlNjMgMTAwJSk7XHJcbn1cclxuXHJcbi5sb2FkZXItcGluay5mYWRpbmctY2lyY2xlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXBpbmsuZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1waW5rLmZvbGRpbmctY3ViZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1waW5rLmZvbGRpbmctY3ViZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOWMyN2IwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogIzljMjdiMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXB1cnBsZS5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzljMjdiMCB0cmFuc3BhcmVudCAjOWMyN2IwIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXB1cnBsZS5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICM5YzI3YjAgdHJhbnNwYXJlbnQgIzljMjdiMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci1wdXJwbGUuYmFsbC1yb3RhdGUgZGl2OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHVycGxlLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHVycGxlLmJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHVycGxlLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzljMjdiMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjOWMyN2IwKSwgdG8oIzljMjdiMCkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzljMjdiMCAzMCUsICM5YzI3YjAgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjOWMyN2IwIDMwJSwgIzljMjdiMCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjOWMyN2IwIDMwJSwgIzljMjdiMCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzljMjdiMCksIHRvKCM5YzI3YjApKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjOWMyN2IwIDMwJSwgIzljMjdiMCAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXB1cnBsZS5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUuYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMTk2ZjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzIHRyYW5zcGFyZW50ICMyMTk2ZjMgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZS5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMyMTk2ZjMgdHJhbnNwYXJlbnQgIzIxOTZmMyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLmJhbGwtcm90YXRlIGRpdjpiZWZvcmUsIC5sb2FkZXItYmx1ZS5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUuYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyMTk2ZjMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZS5iYWxsLXNjYWxlLXJpcHBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUuYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzIxOTZmMyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzIxOTZmMyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLnNlbWktY2lyY2xlLXNwaW4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCByaWdodCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzIxOTZmMyksIHRvKCMyMTk2ZjMpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMyMTk2ZjMgMzAlLCAjMjE5NmYzIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzIxOTZmMyAzMCUsICMyMTk2ZjMgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzIxOTZmMyAzMCUsICMyMTk2ZjMgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICMyMTk2ZjMpLCB0bygjMjE5NmYzKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzIxOTZmMyAzMCUsICMyMTk2ZjMgMTAwJSk7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZS5mYWRpbmctY2lyY2xlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUuZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLmZvbGRpbmctY3ViZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLmZvbGRpbmctY3ViZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1jeWFuIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItY3lhbi5iYWxsLWNsaXAtcm90YXRlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMGJjZDQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWN5YW4uYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogIzAwYmNkNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWN5YW4uYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMGJjZDQgdHJhbnNwYXJlbnQgIzAwYmNkNCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1jeWFuLmJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzAwYmNkNCB0cmFuc3BhcmVudCAjMDBiY2Q0ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWN5YW4uYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci1jeWFuLmJhbGwtcm90YXRlIGRpdjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItY3lhbi5iYWxsLXRyaWFuZ2xlLXBhdGggZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwYmNkNCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1jeWFuLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMGJjZDQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItY3lhbi5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWN5YW4udHJpYW5nbGUtc2tldy1zcGluIGRpdiB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWN5YW4uc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjMDBiY2Q0KSwgdG8oIzAwYmNkNCkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzAwYmNkNCAzMCUsICMwMGJjZDQgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDBiY2Q0IDMwJSwgIzAwYmNkNCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDBiY2Q0IDMwJSwgIzAwYmNkNCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzAwYmNkNCksIHRvKCMwMGJjZDQpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDBiY2Q0IDMwJSwgIzAwYmNkNCAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1jeWFuLmZhZGluZy1jaXJjbGUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItY3lhbi5mYWRpbmctY2lyY2xlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNkNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWN5YW4uZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWN5YW4uZm9sZGluZy1jdWJlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNkNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXRlYWwgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci10ZWFsLmJhbGwtY2xpcC1yb3RhdGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwOTY4OCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwOTY4OCB0cmFuc3BhcmVudCAjMDA5Njg4IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXRlYWwuYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjMDA5Njg4IHRyYW5zcGFyZW50ICMwMDk2ODggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC5iYWxsLXJvdGF0ZSBkaXY6YmVmb3JlLCAubG9hZGVyLXRlYWwuYmFsbC1yb3RhdGUgZGl2OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci10ZWFsLmJhbGwtdHJpYW5nbGUtcGF0aCBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXRlYWwuYmFsbC1zY2FsZS1yaXBwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwOTY4OCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci10ZWFsLmJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDk2ODggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC50cmlhbmdsZS1za2V3LXNwaW4gZGl2IHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDk2ODggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC5zZW1pLWNpcmNsZS1zcGluIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICMwMDk2ODgpLCB0bygjMDA5Njg4KSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDA5Njg4IDMwJSwgIzAwOTY4OCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMwMDk2ODggMzAlLCAjMDA5Njg4IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMwMDk2ODggMzAlLCAjMDA5Njg4IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjMDA5Njg4KSwgdG8oIzAwOTY4OCkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMwMDk2ODggMzAlLCAjMDA5Njg4IDEwMCUpO1xyXG59XHJcblxyXG4ubG9hZGVyLXRlYWwuZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci10ZWFsLmZhZGluZy1jaXJjbGUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC5mb2xkaW5nLWN1YmUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93IGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmJhbGwtY2xpcC1yb3RhdGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZWIzYiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmViM2IgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci15ZWxsb3cuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmViM2IgdHJhbnNwYXJlbnQgI2ZmZWIzYiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci15ZWxsb3cuYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZlYjNiIHRyYW5zcGFyZW50ICNmZmViM2IgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmJhbGwtcm90YXRlIGRpdjpiZWZvcmUsIC5sb2FkZXIteWVsbG93LmJhbGwtcm90YXRlIGRpdjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmJhbGwtdHJpYW5nbGUtcGF0aCBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXllbGxvdy5iYWxsLXNjYWxlLXJpcHBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXllbGxvdy5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXllbGxvdy50cmlhbmdsZS1za2V3LXNwaW4gZGl2IHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmViM2IgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LnNlbWktY2lyY2xlLXNwaW4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCByaWdodCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgI2ZmZWIzYiksIHRvKCNmZmViM2IpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZmViM2IgMzAlLCAjZmZlYjNiIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmZWIzYiAzMCUsICNmZmViM2IgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmZWIzYiAzMCUsICNmZmViM2IgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICNmZmViM2IpLCB0bygjZmZlYjNiKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmZWIzYiAzMCUsICNmZmViM2IgMTAwJSk7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmZhZGluZy1jaXJjbGUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmZhZGluZy1jaXJjbGUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmZvbGRpbmctY3ViZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci15ZWxsb3cuZm9sZGluZy1jdWJlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWIzYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWFtYmVyIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIuYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1hbWJlci5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmMxMDcgdHJhbnNwYXJlbnQgI2ZmYzEwNyB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1hbWJlci5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmZmMxMDcgdHJhbnNwYXJlbnQgI2ZmYzEwNyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1hbWJlci5iYWxsLXJvdGF0ZSBkaXY6YmVmb3JlLCAubG9hZGVyLWFtYmVyLmJhbGwtcm90YXRlIGRpdjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIuYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIuYmFsbC1zY2FsZS1yaXBwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1hbWJlci5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWFtYmVyLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1hbWJlci5zZW1pLWNpcmNsZS1zcGluIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICNmZmMxMDcpLCB0bygjZmZjMTA3KSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmZjMTA3IDMwJSwgI2ZmYzEwNyAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZmMxMDcgMzAlLCAjZmZjMTA3IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZmMxMDcgMzAlLCAjZmZjMTA3IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjZmZjMTA3KSwgdG8oI2ZmYzEwNykpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZmMxMDcgMzAlLCAjZmZjMTA3IDEwMCUpO1xyXG59XHJcblxyXG4ubG9hZGVyLWFtYmVyLmZhZGluZy1jaXJjbGUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIuZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1hbWJlci5mb2xkaW5nLWN1YmUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIuZm9sZGluZy1jdWJlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5iYWxsLWNsaXAtcm90YXRlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2MDdkOGIgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjA3ZDhiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZS1ncmV5LmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNjA3ZDhiIHRyYW5zcGFyZW50ICM2MDdkOGIgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZS1ncmV5LmJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzYwN2Q4YiB0cmFuc3BhcmVudCAjNjA3ZDhiICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5iYWxsLXJvdGF0ZSBkaXY6YmVmb3JlLCAubG9hZGVyLWJsdWUtZ3JleS5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5iYWxsLXRyaWFuZ2xlLXBhdGggZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLWdyZXkuYmFsbC1zY2FsZS1yaXBwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLWdyZXkuYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLWdyZXkudHJpYW5nbGUtc2tldy1zcGluIGRpdiB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjA3ZDhiICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5zZW1pLWNpcmNsZS1zcGluIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICM2MDdkOGIpLCB0bygjNjA3ZDhiKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjNjA3ZDhiIDMwJSwgIzYwN2Q4YiAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICM2MDdkOGIgMzAlLCAjNjA3ZDhiIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICM2MDdkOGIgMzAlLCAjNjA3ZDhiIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjNjA3ZDhiKSwgdG8oIzYwN2Q4YikpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICM2MDdkOGIgMzAlLCAjNjA3ZDhiIDEwMCUpO1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5mYWRpbmctY2lyY2xlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5mYWRpbmctY2lyY2xlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5mb2xkaW5nLWN1YmUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZS1ncmV5LmZvbGRpbmctY3ViZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjI5NDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWIyOTQyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogIzFiMjk0MiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWdyZXktYmx1ZS5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzFiMjk0MiB0cmFuc3BhcmVudCAjMWIyOTQyIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWdyZXktYmx1ZS5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMxYjI5NDIgdHJhbnNwYXJlbnQgIzFiMjk0MiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci1ncmV5LWJsdWUuYmFsbC1yb3RhdGUgZGl2OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjI5NDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMxYjI5NDIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItZ3JleS1ibHVlLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMxYjI5NDIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItZ3JleS1ibHVlLmJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMxYjI5NDIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItZ3JleS1ibHVlLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzFiMjk0MiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjMWIyOTQyKSwgdG8oIzFiMjk0MikpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzFiMjk0MiAzMCUsICMxYjI5NDIgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMWIyOTQyIDMwJSwgIzFiMjk0MiAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMWIyOTQyIDMwJSwgIzFiMjk0MiAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzFiMjk0MiksIHRvKCMxYjI5NDIpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMWIyOTQyIDMwJSwgIzFiMjk0MiAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjI5NDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWdyZXktYmx1ZS5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIyOTQyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYi0xLCAubXktMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xyXG59Il19 */"] });
    return ProductListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
        args: [{
                selector: 'app-product-list',
                templateUrl: './product-list.component.html',
                styleUrls: ['./product-list.component.css']
            }]
    }], function () { return [{ type: _api_product_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] }, { type: _services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }, { type: _services_notificacion_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }]; }, { headers1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChildren"],
            args: [_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_6__["NgbdSortableHeader"]]
        }], headers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChildren"],
            args: [NgbSortable]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=content-product-product-module.js.map